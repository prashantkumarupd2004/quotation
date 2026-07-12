'use client';

import type { CSSProperties, ReactNode } from 'react';
import type { CalculatedTotals, Quotation } from '@/types/quotation';
import { lineItemAmount } from '@/lib/calculations';
import { numberToWordsIndian } from '@/lib/currency';
import { hasLegalDetails, itemLabelsFor } from '@/lib/categories';

/** Props every premium template component receives. */
export interface PremiumTemplateProps {
  quotation: Quotation;
  totals: CalculatedTotals;
  /** Currency-aware money formatter (already bound to the quotation currency). */
  money: (n: number) => string;
  /** Resolved primary accent (respects the user's accentColor override). */
  accent: string;
  /** Template's secondary accent. */
  accent2: string;
}

export const FONT_SANS = "'Inter', ui-sans-serif, system-ui, sans-serif";
export const FONT_DISPLAY = "'Sora', ui-sans-serif, system-ui, sans-serif";

/** Standard light-paper palette shared by most premium templates. */
export function lightPalette(accent: string, accent2: string, onAccent = '#ffffff'): Palette {
  return { accent, accent2, onAccent, ink: '#1f2937', muted: '#6b7280', line: '#e5e7eb', soft: '#f8fafc' };
}

/** Colour palette a shared building block renders with. */
export interface Palette {
  accent: string;
  accent2: string;
  ink: string;
  muted: string;
  line: string;
  soft: string;
  /** Header text colour placed on the accent background. */
  onAccent: string;
}

const SHORT_MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** Deterministic ISO → "12 Jan 2026" (no Intl → no hydration drift). */
export function fmtDate(iso: string): string {
  if (!iso) return '-';
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso);
  if (!m) return iso;
  const [, year, month, day] = m;
  return `${day} ${SHORT_MONTHS[Number(month) - 1] ?? month} ${year}`;
}

export function showTax(q: Quotation): boolean {
  return q.totals.taxMode !== 'none';
}

/* ------------------------------------------------------------------ */
/* Items table                                                         */
/* ------------------------------------------------------------------ */

interface ItemsTableProps {
  quotation: Quotation;
  money: (n: number) => string;
  pal: Palette;
  /** Visual style of the header row. */
  variant?: 'solid' | 'bordered' | 'underline' | 'pill';
  /** Zebra-stripe alternate rows. */
  striped?: boolean;
}

export function ItemsTable({ quotation, money, pal, variant = 'solid', striped = false }: ItemsTableProps) {
  const tax = showTax(quotation);
  const labels = itemLabelsFor(quotation.meta.category);

  const headStyle: CSSProperties =
    variant === 'solid' || variant === 'pill'
      ? { background: pal.accent, color: pal.onAccent }
      : variant === 'bordered'
        ? { background: pal.soft, color: pal.ink, borderBottom: `2px solid ${pal.accent}` }
        : { color: pal.accent, borderBottom: `2px solid ${pal.accent}` };

  const radius = variant === 'pill' ? 10 : 0;

  return (
    <table style={{ width: '100%', borderCollapse: variant === 'bordered' ? 'collapse' : 'separate', borderSpacing: 0, fontSize: 12.5 }}>
      <thead>
        <tr style={headStyle}>
          <th style={{ ...th('left', 26), borderTopLeftRadius: radius }}>#</th>
          <th style={th('left')}>{labels.description}</th>
          <th style={th('center', 62)}>{labels.code}</th>
          <th style={th('right', 46)}>Qty</th>
          <th style={th('center', 46)}>Unit</th>
          <th style={th('right', 82)}>{labels.rate}</th>
          {tax ? <th style={th('right', 46)}>Tax%</th> : null}
          <th style={{ ...th('right', 94), borderTopRightRadius: radius }}>Amount</th>
        </tr>
      </thead>
      <tbody>
        {quotation.items.map((item, i) => {
          const zebra = striped && i % 2 === 1 ? pal.soft : 'transparent';
          const bordered = variant === 'bordered';
          const cellBorder = bordered ? `1px solid ${pal.line}` : undefined;
          return (
            <tr key={item.id} style={{ background: zebra, borderBottom: `1px solid ${pal.line}` }}>
              <td style={td('left', pal.muted, false, cellBorder)}>{i + 1}</td>
              <td style={td('left', pal.ink, false, cellBorder)}>
                <span style={{ fontWeight: 600 }}>{item.description || '—'}</span>
              </td>
              <td style={td('center', pal.muted, false, cellBorder)}>{item.hsn || '-'}</td>
              <td style={td('right', pal.ink, false, cellBorder)}>{item.quantity}</td>
              <td style={td('center', pal.muted, false, cellBorder)}>{item.unit}</td>
              <td style={td('right', pal.ink, false, cellBorder)}>{money(item.rate)}</td>
              {tax ? <td style={td('right', pal.muted, false, cellBorder)}>{item.taxRate}%</td> : null}
              <td style={td('right', pal.ink, true, cellBorder)}>{money(lineItemAmount(item))}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function th(align: 'left' | 'right' | 'center', width?: number): CSSProperties {
  return {
    textAlign: align,
    padding: '10px 11px',
    fontSize: 10.5,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    width,
  };
}

function td(align: 'left' | 'right' | 'center', color: string, bold = false, border?: string): CSSProperties {
  return { textAlign: align, padding: '9px 11px', color, fontWeight: bold ? 700 : 400, verticalAlign: 'top', border };
}

/* ------------------------------------------------------------------ */
/* Totals                                                              */
/* ------------------------------------------------------------------ */

export function TotalsRows({ quotation, totals, money, pal }: PremiumTemplateProps & { pal: Palette }) {
  return (
    <>
      <Row label="Subtotal" value={money(totals.subtotal)} pal={pal} />
      {totals.discountAmount > 0 ? <Row label="Discount" value={`- ${money(totals.discountAmount)}`} pal={pal} /> : null}
      {quotation.totals.taxMode === 'gst-intra' ? (
        <>
          <Row label="CGST" value={money(totals.cgst)} pal={pal} />
          <Row label="SGST" value={money(totals.sgst)} pal={pal} />
        </>
      ) : null}
      {quotation.totals.taxMode === 'gst-inter' ? <Row label="IGST" value={money(totals.igst)} pal={pal} /> : null}
      {quotation.totals.taxMode === 'flat' && totals.taxTotal > 0 ? <Row label="Tax" value={money(totals.taxTotal)} pal={pal} /> : null}
      {totals.shipping > 0 ? <Row label="Shipping" value={money(totals.shipping)} pal={pal} /> : null}
      {totals.roundOff !== 0 ? <Row label="Round Off" value={money(totals.roundOff)} pal={pal} /> : null}
    </>
  );
}

function Row({ label, value, pal }: { label: string; value: string; pal: Palette }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', fontSize: 13 }}>
      <span style={{ color: pal.muted }}>{label}</span>
      <span style={{ color: pal.ink, fontWeight: 600 }}>{value}</span>
    </div>
  );
}

export function GrandTotal({
  totals,
  money,
  pal,
  variant = 'gradient',
}: {
  totals: CalculatedTotals;
  money: (n: number) => string;
  pal: Palette;
  variant?: 'gradient' | 'solid' | 'outline' | 'pill';
}) {
  const base: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    padding: '13px 16px',
    fontWeight: 800,
    fontSize: 16,
  };
  const styles: Record<string, CSSProperties> =
    {
      gradient: { ...base, borderRadius: 12, background: `linear-gradient(120deg, ${pal.accent}, ${pal.accent2})`, color: '#fff' },
      solid: { ...base, borderRadius: 4, background: pal.accent, color: pal.onAccent },
      outline: { ...base, border: `2px solid ${pal.accent}`, color: pal.accent, background: pal.soft },
      pill: { ...base, borderRadius: 999, background: `linear-gradient(120deg, ${pal.accent}, ${pal.accent2})`, color: '#fff', padding: '14px 22px' },
    };
  return (
    <div style={styles[variant]}>
      <span>Grand Total</span>
      <span>{money(totals.grandTotal)}</span>
    </div>
  );
}

export function AmountInWords({ quotation, totals, pal }: { quotation: Quotation; totals: CalculatedTotals; pal: Palette }) {
  if (quotation.meta.currency !== 'INR' || totals.grandTotal <= 0) return null;
  return (
    <div style={{ background: pal.soft, borderRadius: 8, padding: '10px 14px', fontSize: 12 }}>
      <span style={{ color: pal.muted }}>Amount in words: </span>
      <span style={{ fontWeight: 600, color: pal.ink }}>{numberToWordsIndian(totals.grandTotal)} Rupees Only</span>
    </div>
  );
}

export function TaxSummary({ quotation, totals, money, pal }: PremiumTemplateProps & { pal: Palette }) {
  if (totals.taxBreakup.length === 0) return null;
  return (
    <div style={{ marginTop: 12, fontSize: 11.5, color: pal.muted }}>
      <div style={{ fontWeight: 700, color: pal.ink, marginBottom: 4 }}>Tax Summary</div>
      {totals.taxBreakup.map((t) => (
        <div key={t.rate} style={{ display: 'flex', justifyContent: 'space-between', maxWidth: 260 }}>
          <span>
            {quotation.totals.taxMode === 'gst-inter' ? 'IGST' : 'GST'} @ {t.rate}% on {money(t.taxable)}
          </span>
          <span>{money(t.tax)}</span>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Notes / terms                                                       */
/* ------------------------------------------------------------------ */

/**
 * Matter / case details block for legal quotations. Renders nothing for other
 * categories or when no legal fields are filled in. Used by every template via
 * NotesTerms, so it appears consistently across all designs.
 */
export function MatterDetails({ quotation, pal }: { quotation: Quotation; pal: Palette }) {
  if (quotation.meta.category !== 'legal' || !hasLegalDetails(quotation.legal)) return null;
  const l = quotation.legal;
  const rows: { label: string; value: string }[] = [
    { label: 'Case / Suit No.', value: l.caseNumber },
    { label: 'Court / Tribunal', value: l.court },
    { label: 'Jurisdiction', value: l.jurisdiction },
    { label: 'Next Hearing', value: l.hearingDate ? fmtDate(l.hearingDate) : '' },
    { label: 'Advocate in Charge', value: l.advocateName },
    { label: 'Bar Council No.', value: l.barCouncilId },
  ].filter((r) => r.value);

  return (
    <div style={{ marginTop: 20, border: `1px solid ${pal.line}`, borderRadius: 8, padding: '12px 14px', background: pal.soft }}>
      <SectionLabel pal={pal}>Matter / Case Details</SectionLabel>
      {l.matter ? (
        <div style={{ fontSize: 12.5, color: pal.ink, whiteSpace: 'pre-line', marginTop: 6, fontWeight: 600 }}>{l.matter}</div>
      ) : null}
      {rows.length > 0 ? (
        <div style={{ marginTop: l.matter ? 8 : 6, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px 20px' }}>
          {rows.map((r) => (
            <div key={r.label} style={{ fontSize: 12, color: pal.muted }}>
              <span>{r.label}: </span>
              <span style={{ color: pal.ink, fontWeight: 600 }}>{r.value}</span>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function NotesTerms({ quotation, pal }: { quotation: Quotation; pal: Palette }) {
  const matter = <MatterDetails quotation={quotation} pal={pal} />;
  if (!quotation.notes && !quotation.terms) {
    return matter;
  }
  return (
    <>
      {matter}
      <div style={{ marginTop: 22, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
      {quotation.notes ? (
        <div>
          <SectionLabel pal={pal}>Notes</SectionLabel>
          <div style={{ fontSize: 12, color: pal.muted, whiteSpace: 'pre-line', marginTop: 6 }}>{quotation.notes}</div>
        </div>
      ) : (
        <div />
      )}
      {quotation.terms ? (
        <div>
          <SectionLabel pal={pal}>Terms &amp; Conditions</SectionLabel>
          <div style={{ fontSize: 12, color: pal.muted, whiteSpace: 'pre-line', marginTop: 6 }}>{quotation.terms}</div>
        </div>
      ) : null}
      </div>
    </>
  );
}

export function SectionLabel({ children, pal }: { children: ReactNode; pal: Palette }) {
  return (
    <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 1, color: pal.accent, fontWeight: 700 }}>{children}</div>
  );
}

/* ------------------------------------------------------------------ */
/* Signature / stamp / QR                                              */
/* ------------------------------------------------------------------ */

export function SignatureArea({ quotation, pal }: { quotation: Quotation; pal: Palette }) {
  return (
    <div style={{ marginTop: 26, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 20 }}>
      <div style={{ display: 'flex', gap: 20, alignItems: 'flex-end' }}>
        {quotation.showQr && quotation.qrData ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={quotation.qrData} alt="QR code" style={{ height: 84, width: 84 }} />
        ) : null}
        {quotation.stamp ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={quotation.stamp} alt="Stamp" style={{ height: 84, width: 84, objectFit: 'contain', opacity: 0.9 }} />
        ) : null}
      </div>
      <div style={{ textAlign: 'center', minWidth: 170 }}>
        {quotation.signature ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={quotation.signature} alt="Signature" style={{ height: 54, objectFit: 'contain', margin: '0 auto' }} />
        ) : (
          <div style={{ height: 54 }} />
        )}
        <div style={{ borderTop: `1px solid ${pal.muted}`, paddingTop: 6, fontSize: 12, color: pal.muted }}>Authorised Signatory</div>
        <div style={{ fontSize: 12, fontWeight: 700, color: pal.ink }}>{quotation.company.name}</div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Company logo / contact bits                                         */
/* ------------------------------------------------------------------ */

export function Logo({ src, size = 52, bg }: { src: string; size?: number; bg?: string }) {
  if (!src) return null;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="Logo"
      style={{ height: size, width: size, objectFit: 'contain', background: bg, borderRadius: bg ? 10 : 0, padding: bg ? 4 : 0 }}
    />
  );
}

export function ContactBits({ quotation, color, sep }: { quotation: Quotation; color: string; sep?: string }) {
  const c = quotation.company;
  const parts = [c.gstin ? `GSTIN: ${c.gstin}` : '', c.phone, c.email, c.website].filter(Boolean);
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, fontSize: 11, color }}>
      {parts.map((p, i) => (
        <span key={i}>
          {p}
          {sep && i < parts.length - 1 ? <span style={{ opacity: 0.5, marginLeft: 14 }}>{sep}</span> : null}
        </span>
      ))}
    </div>
  );
}

export function BillTo({ quotation, pal, onDark = false }: { quotation: Quotation; pal: Palette; onDark?: boolean }) {
  const cl = quotation.client;
  const strong = onDark ? '#fff' : pal.ink;
  const soft = onDark ? 'rgba(255,255,255,0.85)' : pal.muted;
  return (
    <div>
      <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 1, color: onDark ? 'rgba(255,255,255,0.8)' : pal.muted }}>Bill To</div>
      <div style={{ fontWeight: 700, marginTop: 6, fontSize: 15, color: strong }}>{cl.name || 'Client Name'}</div>
      {cl.company ? <div style={{ fontSize: 12.5, color: soft }}>{cl.company}</div> : null}
      <div style={{ fontSize: 12.5, color: soft, whiteSpace: 'pre-line', marginTop: 3 }}>{cl.address}</div>
      {cl.gstin ? <div style={{ fontSize: 12.5, color: soft, marginTop: 3 }}>GSTIN: {cl.gstin}</div> : null}
      {cl.phone ? <div style={{ fontSize: 12.5, color: soft }}>{cl.phone}</div> : null}
    </div>
  );
}

/** Shared paper wrapper. */
export function Paper({
  children,
  bg,
  ink,
  line,
  rounded,
  fontFamily,
}: {
  children: ReactNode;
  bg: string;
  ink: string;
  line: string;
  rounded: boolean;
  fontFamily: string;
}) {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 820,
        margin: '0 auto',
        background: bg,
        color: ink,
        fontFamily,
        fontSize: 13,
        lineHeight: 1.5,
        overflow: 'hidden',
        borderRadius: rounded ? 16 : 0,
        border: `1px solid ${line}`,
      }}
    >
      {children}
    </div>
  );
}
