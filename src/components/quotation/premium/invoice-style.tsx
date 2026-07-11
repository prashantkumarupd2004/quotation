'use client';

import type { CSSProperties } from 'react';
import { numberToWordsIndian } from '@/lib/currency';
import {
  GrandTotal,
  ItemsTable,
  Logo,
  type Palette,
  Paper,
  type PremiumTemplateProps,
  TotalsRows,
  FONT_SANS,
  fmtDate,
  lightPalette,
} from './shared';

/** Invoice-Style — fully bordered tax-invoice grid with GST breakup + declaration. */
export function InvoiceStyle({ quotation, totals, money, accent, accent2 }: PremiumTemplateProps) {
  const pal = lightPalette(accent, accent2);
  const c = quotation.company;
  const cl = quotation.client;
  const border = `1px solid ${pal.line}`;
  const cell: CSSProperties = { padding: '10px 12px', border, verticalAlign: 'top', fontSize: 12.5 };
  void accent2;

  return (
    <Paper bg="#ffffff" ink={pal.ink} line={pal.line} rounded={false} fontFamily={FONT_SANS}>
      {/* Title bar */}
      <div style={{ background: accent, color: '#fff', textAlign: 'center', padding: '10px', fontSize: 16, fontWeight: 800, letterSpacing: 2 }}>
        QUOTATION / ESTIMATE
      </div>

      {/* Seller + meta grid */}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tbody>
          <tr>
            <td style={{ ...cell, width: '58%' }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <Logo src={c.logo} size={46} />
                <div>
                  <div style={{ fontWeight: 800, fontSize: 15, color: accent }}>{c.name || 'Your Company Name'}</div>
                  <div style={{ fontSize: 12, color: pal.muted, whiteSpace: 'pre-line' }}>{c.address}</div>
                  {c.gstin ? <div style={{ fontSize: 12, marginTop: 2 }}>GSTIN: <strong>{c.gstin}</strong></div> : null}
                  {c.phone || c.email ? <div style={{ fontSize: 12, color: pal.muted }}>{[c.phone, c.email].filter(Boolean).join('  ·  ')}</div> : null}
                </div>
              </div>
            </td>
            <td style={{ ...cell, padding: 0 }}>
              <GridRow label="Quotation No." value={quotation.meta.number} border={border} />
              <GridRow label="Date" value={fmtDate(quotation.meta.date)} border={border} />
              <GridRow label="Valid Until" value={fmtDate(quotation.meta.expiryDate)} border={border} last />
            </td>
          </tr>
          <tr>
            <td style={cell} colSpan={2}>
              <div style={{ fontSize: 10.5, textTransform: 'uppercase', letterSpacing: 1, color: pal.muted }}>Bill To</div>
              <div style={{ fontWeight: 700, marginTop: 3 }}>{cl.name || 'Client Name'}{cl.company ? ` — ${cl.company}` : ''}</div>
              <div style={{ fontSize: 12, color: pal.muted, whiteSpace: 'pre-line' }}>{cl.address}</div>
              {cl.gstin ? <div style={{ fontSize: 12 }}>GSTIN: <strong>{cl.gstin}</strong></div> : null}
            </td>
          </tr>
        </tbody>
      </table>

      {/* Items */}
      <div style={{ borderLeft: border, borderRight: border }}>
        <ItemsTable quotation={quotation} money={money} pal={pal} variant="bordered" />
      </div>

      {/* Words + totals */}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tbody>
          <tr>
            <td style={{ ...cell, width: '55%' }}>
              {quotation.meta.currency === 'INR' && totals.grandTotal > 0 ? (
                <>
                  <div style={{ fontSize: 10.5, textTransform: 'uppercase', letterSpacing: 1, color: pal.muted }}>Amount in Words</div>
                  <div style={{ fontWeight: 600 }}>{numberToWordsIndian(totals.grandTotal)} Rupees Only</div>
                </>
              ) : null}
              {totals.taxBreakup.length > 0 ? (
                <div style={{ marginTop: 10, fontSize: 11.5, color: pal.muted }}>
                  <div style={{ fontWeight: 700, color: pal.ink }}>GST Breakup</div>
                  {totals.taxBreakup.map((t) => (
                    <div key={t.rate} style={{ display: 'flex', justifyContent: 'space-between', maxWidth: 260 }}>
                      <span>{quotation.totals.taxMode === 'gst-inter' ? 'IGST' : 'GST'} @ {t.rate}% on {money(t.taxable)}</span>
                      <span>{money(t.tax)}</span>
                    </div>
                  ))}
                </div>
              ) : null}
            </td>
            <td style={{ ...cell, padding: '10px 14px' }}>
              <TotalsRows quotation={quotation} totals={totals} money={money} pal={pal} accent={accent} accent2={accent2} />
              <GrandTotal totals={totals} money={money} pal={pal} variant="solid" />
            </td>
          </tr>
        </tbody>
      </table>

      {/* Declaration + signatory */}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tbody>
          <tr>
            <td style={{ ...cell, width: '58%' }}>
              <div style={{ fontSize: 10.5, textTransform: 'uppercase', letterSpacing: 1, color: pal.muted }}>Declaration</div>
              <div style={{ fontSize: 11.5, color: pal.muted, marginTop: 4, whiteSpace: 'pre-line' }}>
                {quotation.terms || 'We declare that this quotation shows the actual price of the goods/services described and that all particulars are true and correct.'}
              </div>
              {quotation.notes ? (
                <div style={{ marginTop: 8 }}>
                  <div style={{ fontSize: 10.5, textTransform: 'uppercase', letterSpacing: 1, color: pal.muted }}>Notes</div>
                  <div style={{ fontSize: 11.5, color: pal.muted, whiteSpace: 'pre-line' }}>{quotation.notes}</div>
                </div>
              ) : null}
            </td>
            <td style={{ ...cell, textAlign: 'center' }}>
              <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 6 }}>For {c.name || 'Your Company'}</div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 16, alignItems: 'flex-end' }}>
                {quotation.stamp ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={quotation.stamp} alt="Stamp" style={{ height: 70, width: 70, objectFit: 'contain', opacity: 0.9 }} />
                ) : null}
                {quotation.signature ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={quotation.signature} alt="Signature" style={{ height: 48, objectFit: 'contain' }} />
                ) : null}
              </div>
              <div style={{ borderTop: `1px solid ${pal.muted}`, marginTop: 8, paddingTop: 5, fontSize: 12, color: pal.muted }}>Authorised Signatory</div>
            </td>
          </tr>
        </tbody>
      </table>
    </Paper>
  );
}

function GridRow({ label, value, border, last }: { label: string; value: string; border: string; last?: boolean }) {
  return (
    <div style={{ display: 'flex', borderBottom: last ? 'none' : border }}>
      <div style={{ flex: 1, padding: '8px 12px', borderRight: border, fontSize: 12, color: '#6b7280' }}>{label}</div>
      <div style={{ flex: 1, padding: '8px 12px', fontSize: 12, fontWeight: 600 }}>{value}</div>
    </div>
  );
}
