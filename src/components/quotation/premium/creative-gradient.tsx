'use client';

import {
  AmountInWords,
  BillTo,
  ContactBits,
  GrandTotal,
  ItemsTable,
  Logo,
  NotesTerms,
  Paper,
  type PremiumTemplateProps,
  SignatureArea,
  TaxSummary,
  TotalsRows,
  FONT_DISPLAY,
  fmtDate,
  lightPalette,
} from './shared';

/** Creative Gradient — vibrant diagonal header, pill table, gradient total. */
export function CreativeGradient({ quotation, totals, money, accent, accent2 }: PremiumTemplateProps) {
  const pal = lightPalette(accent, accent2);
  const c = quotation.company;

  return (
    <Paper bg="#ffffff" ink={pal.ink} line={pal.line} rounded fontFamily={FONT_DISPLAY}>
      {/* Diagonal gradient header */}
      <div
        style={{
          background: `linear-gradient(135deg, ${accent} 0%, ${accent2} 100%)`,
          color: '#fff',
          padding: '34px 34px 46px',
          position: 'relative',
          clipPath: 'polygon(0 0, 100% 0, 100% 82%, 0 100%)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <Logo src={c.logo} size={54} bg="rgba(255,255,255,0.2)" />
            <div>
              <div style={{ fontSize: 22, fontWeight: 800 }}>{c.name || 'Your Company Name'}</div>
              <div style={{ fontSize: 12, opacity: 0.9, whiteSpace: 'pre-line' }}>{c.address}</div>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: 1 }}>QUOTATION</div>
            <div style={{ fontSize: 12, opacity: 0.95 }}>{quotation.meta.number}</div>
          </div>
        </div>
      </div>

      <div style={{ padding: '4px 34px 0', display: 'flex', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
        <BillTo quotation={quotation} pal={pal} />
        <div style={{ textAlign: 'right', fontSize: 12.5 }}>
          <div style={{ color: pal.muted }}>Date</div>
          <div style={{ fontWeight: 600, marginBottom: 6 }}>{fmtDate(quotation.meta.date)}</div>
          <div style={{ color: pal.muted }}>Valid Until</div>
          <div style={{ fontWeight: 600 }}>{fmtDate(quotation.meta.expiryDate)}</div>
        </div>
      </div>

      <div style={{ padding: '18px 34px 0' }}>
        <ItemsTable quotation={quotation} money={money} pal={pal} variant="pill" striped />
      </div>

      <div style={{ padding: '18px 34px 0', display: 'flex', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 240px', minWidth: 220 }}>
          <AmountInWords quotation={quotation} totals={totals} pal={pal} />
          <TaxSummary quotation={quotation} totals={totals} money={money} pal={pal} accent={accent} accent2={accent2} />
        </div>
        <div style={{ width: 290, maxWidth: '100%' }}>
          <TotalsRows quotation={quotation} totals={totals} money={money} pal={pal} accent={accent} accent2={accent2} />
          <GrandTotal totals={totals} money={money} pal={pal} variant="pill" />
        </div>
      </div>

      <div style={{ padding: '0 34px' }}>
        <NotesTerms quotation={quotation} pal={pal} />
        <SignatureArea quotation={quotation} pal={pal} />
      </div>

      <div style={{ marginTop: 22, padding: '14px 34px', clipPath: 'polygon(0 18%, 100% 0, 100% 100%, 0 100%)', background: `linear-gradient(135deg, ${accent}, ${accent2})`, color: '#fff', textAlign: 'center' }}>
        <ContactBits quotation={quotation} color="rgba(255,255,255,0.95)" sep="·" />
      </div>
    </Paper>
  );
}
