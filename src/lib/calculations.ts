import type { CalculatedTotals, LineItem, Quotation, Totals } from '@/types/quotation';

export function lineItemAmount(item: LineItem): number {
  const qty = Number.isFinite(item.quantity) ? item.quantity : 0;
  const rate = Number.isFinite(item.rate) ? item.rate : 0;
  return qty * rate;
}

/**
 * Central calculation engine. Handles subtotal, discount, GST (CGST/SGST/IGST),
 * flat tax, shipping and optional round-off. Tax is computed per-line-item on the
 * discount-adjusted taxable value so mixed GST rates in one quotation work correctly.
 */
export function calculateTotals(quotation: Quotation): CalculatedTotals {
  const { items, totals } = quotation;

  const subtotal = items.reduce((sum, item) => sum + lineItemAmount(item), 0);

  const discountAmount =
    totals.discountType === 'percent'
      ? (subtotal * clampPct(totals.discountValue)) / 100
      : Math.min(totals.discountValue || 0, subtotal);

  const taxableAmount = Math.max(subtotal - discountAmount, 0);

  // Distribute discount proportionally across items for accurate per-rate tax.
  const discountRatio = subtotal > 0 ? discountAmount / subtotal : 0;

  const taxByRate = new Map<number, { taxable: number; tax: number }>();

  if (totals.taxMode === 'gst-intra' || totals.taxMode === 'gst-inter') {
    for (const item of items) {
      const gross = lineItemAmount(item);
      const net = gross * (1 - discountRatio);
      const rate = Number.isFinite(item.taxRate) ? item.taxRate : 0;
      const tax = (net * rate) / 100;
      const bucket = taxByRate.get(rate) ?? { taxable: 0, tax: 0 };
      bucket.taxable += net;
      bucket.tax += tax;
      taxByRate.set(rate, bucket);
    }
  } else if (totals.taxMode === 'flat') {
    const rate = clampPct(totals.flatTaxRate);
    taxByRate.set(rate, {
      taxable: taxableAmount,
      tax: (taxableAmount * rate) / 100,
    });
  }

  const taxBreakup = Array.from(taxByRate.entries())
    .filter(([, v]) => v.tax > 0)
    .map(([rate, v]) => ({ rate, taxable: round2(v.taxable), tax: round2(v.tax) }))
    .sort((a, b) => a.rate - b.rate);

  const taxTotal = taxBreakup.reduce((sum, t) => sum + t.tax, 0);

  let cgst = 0;
  let sgst = 0;
  let igst = 0;
  if (totals.taxMode === 'gst-intra') {
    cgst = taxTotal / 2;
    sgst = taxTotal / 2;
  } else if (totals.taxMode === 'gst-inter') {
    igst = taxTotal;
  }

  const shipping = Number.isFinite(totals.shipping) ? totals.shipping : 0;

  const preRound = taxableAmount + taxTotal + shipping;
  const grandTotalExact = preRound;
  const rounded = totals.roundOff ? Math.round(grandTotalExact) : grandTotalExact;
  const roundOff = totals.roundOff ? rounded - grandTotalExact : 0;

  return {
    subtotal: round2(subtotal),
    discountAmount: round2(discountAmount),
    taxableAmount: round2(taxableAmount),
    taxTotal: round2(taxTotal),
    cgst: round2(cgst),
    sgst: round2(sgst),
    igst: round2(igst),
    shipping: round2(shipping),
    roundOff: round2(roundOff),
    grandTotal: round2(rounded),
    taxBreakup,
  };
}

function clampPct(value: number): number {
  if (!Number.isFinite(value)) return 0;
  return Math.min(Math.max(value, 0), 100);
}

export function round2(value: number): number {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

/**
 * Generate an auto-formatted quotation number like QT-2026-0001.
 * Deterministic by design so it renders identically on server and client
 * (avoids React hydration mismatches). Pass a seed to vary the sequence.
 */
export function generateQuotationNumber(seed = 1): string {
  const year = new Date().getFullYear();
  return `QT-${year}-${String(seed).padStart(4, '0')}`;
}

export const taxModeLabels: Record<Totals['taxMode'], string> = {
  none: 'No Tax',
  'gst-intra': 'GST (CGST + SGST)',
  'gst-inter': 'IGST (Inter-state)',
  flat: 'Flat Tax',
};
