'use client';

import { forwardRef, memo, type CSSProperties } from 'react';
import type { Quotation } from '@/types/quotation';
import { calculateTotals, lineItemAmount } from '@/lib/calculations';
import { formatMoney, numberToWordsIndian } from '@/lib/currency';
import { getTemplate } from '@/lib/templates';
import { renderPremiumTemplate } from './premium/registry';

interface Props {
  quotation: Quotation;
  className?: string;
  /** Optional DOM id. The export/print target uses "print-area". */
  id?: string;
}

/**
 * The printable quotation document. Rendered with explicit inline styles and hex
 * colors (never theme CSS variables) so html2canvas/jsPDF output is pixel-consistent
 * and always light, independent of the app's dark mode.
 */
const QuotationDocumentInner = forwardRef<HTMLDivElement, Props>(function QuotationDocument(
  { quotation, className, id },
  ref
) {
  const template = getTemplate(quotation.meta.templateId);

  // Premium templates render their own bespoke layout. Wrap in the same
  // ref/id container so the export/print target still works unchanged.
  if (template.premium) {
    return (
      <div ref={ref} id={id} className={className}>
        {renderPremiumTemplate(quotation)}
      </div>
    );
  }

  const accent = quotation.meta.accentColor || template.accent;
  const accent2 = template.accent2;
  const totals = calculateTotals(quotation);
  const currency = quotation.meta.currency;

  const paperBg = template.dark ? '#0b1220' : '#ffffff';
  const ink = template.dark ? '#e5e7eb' : '#1f2937';
  const muted = template.dark ? '#94a3b8' : '#6b7280';
  const lineColor = template.dark ? '#1f2937' : '#e5e7eb';
  const softBg = template.dark ? '#111a2e' : '#f8fafc';

  const money = (n: number) => formatMoney(n, currency);

  const styles: Record<string, CSSProperties> = {
    paper: {
      width: '100%',
      maxWidth: 820,
      margin: '0 auto',
      background: paperBg,
      color: ink,
      fontFamily:
        template.fontClass === 'font-display'
          ? "'Sora', ui-sans-serif, system-ui, sans-serif"
          : "'Inter', ui-sans-serif, system-ui, sans-serif",
      fontSize: 13,
      lineHeight: 1.5,
      overflow: 'hidden',
      borderRadius: template.rounded ? 14 : 0,
      border: `1px solid ${lineColor}`,
    },
  };

  const isBanner = template.layout === 'banner' || template.layout === 'bold';
  const isSidebar = template.layout === 'sidebar';

  return (
    <div ref={ref} id={id} className={className} style={styles.paper}>
      {/* ---------- HEADER ---------- */}
      {isBanner ? (
        <div
          style={{
            background: `linear-gradient(120deg, ${accent}, ${accent2})`,
            color: '#ffffff',
            padding: '28px 32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 16,
          }}
        >
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            {quotation.company.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={quotation.company.logo}
                alt="Logo"
                style={{ height: 52, width: 52, objectFit: 'contain', background: '#fff', borderRadius: 10, padding: 4 }}
              />
            ) : null}
            <div>
              <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: -0.3 }}>
                {quotation.company.name || 'Your Company Name'}
              </div>
              <div style={{ fontSize: 12, opacity: 0.9, whiteSpace: 'pre-line', marginTop: 2 }}>
                {quotation.company.address}
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: 1 }}>QUOTATION</div>
            <div style={{ fontSize: 12, opacity: 0.95, marginTop: 4 }}>{quotation.meta.number}</div>
          </div>
        </div>
      ) : (
        <div
          style={{
            padding: '26px 32px',
            borderBottom: `3px solid ${accent}`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 16,
          }}
        >
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            {quotation.company.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={quotation.company.logo} alt="Logo" style={{ height: 54, width: 54, objectFit: 'contain' }} />
            ) : null}
            <div>
              <div style={{ fontSize: 20, fontWeight: 800, color: accent, letterSpacing: -0.3 }}>
                {quotation.company.name || 'Your Company Name'}
              </div>
              <div style={{ fontSize: 12, color: muted, whiteSpace: 'pre-line', marginTop: 2 }}>
                {quotation.company.address}
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 24, fontWeight: 800, color: ink, letterSpacing: 1 }}>QUOTATION</div>
            <div style={{ fontSize: 12, color: muted, marginTop: 4 }}>{quotation.meta.number}</div>
          </div>
        </div>
      )}

      {/* company contact line */}
      <div style={{ padding: '8px 32px', background: softBg, fontSize: 11, color: muted, display: 'flex', flexWrap: 'wrap', gap: 14 }}>
        {quotation.company.gstin ? <span>GSTIN: <strong style={{ color: ink }}>{quotation.company.gstin}</strong></span> : null}
        {quotation.company.phone ? <span>{quotation.company.phone}</span> : null}
        {quotation.company.email ? <span>{quotation.company.email}</span> : null}
        {quotation.company.website ? <span>{quotation.company.website}</span> : null}
      </div>

      <div style={{ display: isSidebar ? 'flex' : 'block' }}>
        {isSidebar ? (
          <aside style={{ width: 210, background: accent, color: '#fff', padding: '22px 20px', flexShrink: 0 }}>
            <SidebarBlock label="Quotation No." value={quotation.meta.number} />
            <SidebarBlock label="Date" value={fmtDate(quotation.meta.date)} />
            <SidebarBlock label="Valid Until" value={fmtDate(quotation.meta.expiryDate)} />
            <div style={{ height: 1, background: 'rgba(255,255,255,0.25)', margin: '16px 0' }} />
            <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 1, opacity: 0.8 }}>Bill To</div>
            <div style={{ fontWeight: 700, marginTop: 6 }}>{quotation.client.name || 'Client Name'}</div>
            {quotation.client.company ? <div style={{ fontSize: 12, opacity: 0.9 }}>{quotation.client.company}</div> : null}
            <div style={{ fontSize: 12, opacity: 0.9, whiteSpace: 'pre-line', marginTop: 4 }}>{quotation.client.address}</div>
            {quotation.client.gstin ? <div style={{ fontSize: 12, opacity: 0.9, marginTop: 4 }}>GSTIN: {quotation.client.gstin}</div> : null}
          </aside>
        ) : null}

        <div style={{ flex: 1, padding: '22px 32px' }}>
          {/* meta + bill-to for non-sidebar layouts */}
          {!isSidebar ? (
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 24, marginBottom: 20 }}>
              <div>
                <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 1, color: muted }}>Bill To</div>
                <div style={{ fontWeight: 700, marginTop: 6, fontSize: 15 }}>{quotation.client.name || 'Client Name'}</div>
                {quotation.client.company ? <div style={{ fontSize: 12.5, color: muted }}>{quotation.client.company}</div> : null}
                <div style={{ fontSize: 12.5, color: muted, whiteSpace: 'pre-line', marginTop: 3 }}>{quotation.client.address}</div>
                {quotation.client.gstin ? <div style={{ fontSize: 12.5, color: muted, marginTop: 3 }}>GSTIN: {quotation.client.gstin}</div> : null}
                {quotation.client.phone ? <div style={{ fontSize: 12.5, color: muted }}>{quotation.client.phone}</div> : null}
              </div>
              <div style={{ textAlign: 'right', minWidth: 180 }}>
                <MetaRow label="Quotation No." value={quotation.meta.number} muted={muted} ink={ink} />
                <MetaRow label="Date" value={fmtDate(quotation.meta.date)} muted={muted} ink={ink} />
                <MetaRow label="Valid Until" value={fmtDate(quotation.meta.expiryDate)} muted={muted} ink={ink} />
              </div>
            </div>
          ) : null}

          {/* ---------- ITEMS TABLE ---------- */}
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12.5 }}>
            <thead>
              <tr style={{ background: accent, color: '#fff' }}>
                <th style={thCell('left', 28)}>#</th>
                <th style={thCell('left')}>Description</th>
                <th style={thCell('center', 60)}>HSN/SAC</th>
                <th style={thCell('right', 48)}>Qty</th>
                <th style={thCell('center', 48)}>Unit</th>
                <th style={thCell('right', 80)}>Rate</th>
                {quotation.totals.taxMode !== 'none' ? <th style={thCell('right', 48)}>Tax%</th> : null}
                <th style={thCell('right', 92)}>Amount</th>
              </tr>
            </thead>
            <tbody>
              {quotation.items.map((item, i) => (
                <tr key={item.id} style={{ borderBottom: `1px solid ${lineColor}` }}>
                  <td style={tdCell('left', muted)}>{i + 1}</td>
                  <td style={tdCell('left', ink)}>
                    <span style={{ fontWeight: 600 }}>{item.description || '—'}</span>
                  </td>
                  <td style={tdCell('center', muted)}>{item.hsn || '-'}</td>
                  <td style={tdCell('right', ink)}>{item.quantity}</td>
                  <td style={tdCell('center', muted)}>{item.unit}</td>
                  <td style={tdCell('right', ink)}>{money(item.rate)}</td>
                  {quotation.totals.taxMode !== 'none' ? <td style={tdCell('right', muted)}>{item.taxRate}%</td> : null}
                  <td style={tdCell('right', ink, true)}>{money(lineItemAmount(item))}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* ---------- TOTALS ---------- */}
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 24, marginTop: 18, flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 240px', minWidth: 220 }}>
              {currency === 'INR' && totals.grandTotal > 0 ? (
                <div style={{ background: softBg, borderRadius: 8, padding: '10px 14px', fontSize: 12 }}>
                  <span style={{ color: muted }}>Amount in words: </span>
                  <span style={{ fontWeight: 600 }}>{numberToWordsIndian(totals.grandTotal)} Rupees Only</span>
                </div>
              ) : null}

              {totals.taxBreakup.length > 0 ? (
                <div style={{ marginTop: 12, fontSize: 11.5, color: muted }}>
                  <div style={{ fontWeight: 700, color: ink, marginBottom: 4 }}>Tax Summary</div>
                  {totals.taxBreakup.map((t) => (
                    <div key={t.rate} style={{ display: 'flex', justifyContent: 'space-between', maxWidth: 240 }}>
                      <span>{quotation.totals.taxMode === 'gst-inter' ? 'IGST' : 'GST'} @ {t.rate}% on {money(t.taxable)}</span>
                      <span>{money(t.tax)}</span>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            <div style={{ width: 280, maxWidth: '100%' }}>
              <TotalRow label="Subtotal" value={money(totals.subtotal)} muted={muted} ink={ink} />
              {totals.discountAmount > 0 ? (
                <TotalRow label="Discount" value={`- ${money(totals.discountAmount)}`} muted={muted} ink={ink} />
              ) : null}
              {quotation.totals.taxMode === 'gst-intra' ? (
                <>
                  <TotalRow label="CGST" value={money(totals.cgst)} muted={muted} ink={ink} />
                  <TotalRow label="SGST" value={money(totals.sgst)} muted={muted} ink={ink} />
                </>
              ) : null}
              {quotation.totals.taxMode === 'gst-inter' ? (
                <TotalRow label="IGST" value={money(totals.igst)} muted={muted} ink={ink} />
              ) : null}
              {quotation.totals.taxMode === 'flat' && totals.taxTotal > 0 ? (
                <TotalRow label="Tax" value={money(totals.taxTotal)} muted={muted} ink={ink} />
              ) : null}
              {totals.shipping > 0 ? (
                <TotalRow label="Shipping" value={money(totals.shipping)} muted={muted} ink={ink} />
              ) : null}
              {totals.roundOff !== 0 ? (
                <TotalRow label="Round Off" value={money(totals.roundOff)} muted={muted} ink={ink} />
              ) : null}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: 8,
                  padding: '12px 14px',
                  borderRadius: 10,
                  background: `linear-gradient(120deg, ${accent}, ${accent2})`,
                  color: '#fff',
                  fontWeight: 800,
                  fontSize: 15,
                }}
              >
                <span>Grand Total</span>
                <span>{money(totals.grandTotal)}</span>
              </div>
            </div>
          </div>

          {/* ---------- NOTES / TERMS ---------- */}
          {(quotation.notes || quotation.terms) && (
            <div style={{ marginTop: 22, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              {quotation.notes ? (
                <div>
                  <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 1, color: accent, fontWeight: 700 }}>Notes</div>
                  <div style={{ fontSize: 12, color: muted, whiteSpace: 'pre-line', marginTop: 6 }}>{quotation.notes}</div>
                </div>
              ) : <div />}
              {quotation.terms ? (
                <div>
                  <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 1, color: accent, fontWeight: 700 }}>Terms &amp; Conditions</div>
                  <div style={{ fontSize: 12, color: muted, whiteSpace: 'pre-line', marginTop: 6 }}>{quotation.terms}</div>
                </div>
              ) : null}
            </div>
          )}

          {/* ---------- SIGN / STAMP / QR ---------- */}
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
            <div style={{ textAlign: 'center', minWidth: 160 }}>
              {quotation.signature ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={quotation.signature} alt="Signature" style={{ height: 56, objectFit: 'contain', margin: '0 auto' }} />
              ) : (
                <div style={{ height: 56 }} />
              )}
              <div style={{ borderTop: `1px solid ${muted}`, paddingTop: 6, fontSize: 12, color: muted }}>
                Authorised Signatory
              </div>
              <div style={{ fontSize: 12, fontWeight: 700, color: ink }}>{quotation.company.name}</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: softBg, textAlign: 'center', padding: '10px', fontSize: 11, color: muted, borderTop: `1px solid ${lineColor}` }}>
        This is a computer-generated quotation created with QuotationMaker.in
      </div>
    </div>
  );
});

/**
 * Memoized so the (twice-rendered) document only re-renders when the quotation
 * itself changes — not when unrelated builder UI state (busy flags, mobile
 * view toggle, share dialog) updates.
 */
export const QuotationDocument = memo(QuotationDocumentInner);

/* ---------- small helpers ---------- */

const SHORT_MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** Deterministic date formatting from ISO parts — no Intl, no timezone drift. */
function fmtDate(iso: string): string {
  if (!iso) return '-';
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso);
  if (!m) return iso;
  const [, year, month, day] = m;
  const monthName = SHORT_MONTHS[Number(month) - 1] ?? month;
  return `${day} ${monthName} ${year}`;
}

function thCell(align: 'left' | 'right' | 'center', width?: number): CSSProperties {
  return {
    textAlign: align,
    padding: '9px 10px',
    fontSize: 11,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: 0.4,
    width,
  };
}

function tdCell(align: 'left' | 'right' | 'center', color: string, bold = false): CSSProperties {
  return { textAlign: align, padding: '9px 10px', color, fontWeight: bold ? 700 : 400, verticalAlign: 'top' };
}

function MetaRow({ label, value, muted, ink }: { label: string; value: string; muted: string; ink: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, fontSize: 12.5 }}>
      <span style={{ color: muted }}>{label}</span>
      <span style={{ color: ink, fontWeight: 600, minWidth: 90, textAlign: 'right' }}>{value}</span>
    </div>
  );
}

function SidebarBlock({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ fontSize: 10.5, textTransform: 'uppercase', letterSpacing: 1, opacity: 0.8 }}>{label}</div>
      <div style={{ fontWeight: 700, fontSize: 13 }}>{value}</div>
    </div>
  );
}

function TotalRow({ label, value, muted, ink }: { label: string; value: string; muted: string; ink: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 14px', fontSize: 13 }}>
      <span style={{ color: muted }}>{label}</span>
      <span style={{ color: ink, fontWeight: 600 }}>{value}</span>
    </div>
  );
}
