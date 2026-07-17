'use client';

import {
  docMeta,
  AmountInWords,
  BillTo,
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

/** Classic Professional — traditional centered letterhead, ruled sections. */
export function ClassicProfessional({ quotation, totals, money, accent, accent2 }: PremiumTemplateProps) {
  const doc = docMeta(quotation);
  const pal = lightPalette(accent, accent2);
  const c = quotation.company;

  return (
    <Paper bg="#ffffff" ink={pal.ink} line={pal.line} rounded={false} fontFamily={FONT_DISPLAY}>
      {/* Letterhead */}
      <div style={{ textAlign: 'center', padding: '30px 40px 0' }}>
        {c.logo ? (
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 6 }}>
            <Logo src={c.logo} size={58} />
          </div>
        ) : null}
        <div style={{ fontSize: 24, fontWeight: 800, color: pal.ink, letterSpacing: 0.5 }}>{c.name || 'Your Company Name'}</div>
        <div style={{ fontSize: 12, color: pal.muted, whiteSpace: 'pre-line', marginTop: 2 }}>{c.address}</div>
        <div style={{ fontSize: 12, color: pal.muted, marginTop: 2 }}>
          {[c.phone, c.email, c.website, c.gstin ? `GSTIN: ${c.gstin}` : ''].filter(Boolean).join('  |  ')}
        </div>
      </div>

      <div style={{ borderTop: `3px double ${accent}`, margin: '16px 40px 0' }} />

      <div style={{ textAlign: 'center', padding: '14px 40px 0' }}>
        <span style={{ display: 'inline-block', border: `1px solid ${accent}`, color: accent, padding: '4px 22px', fontSize: 15, fontWeight: 700, letterSpacing: 3 }}>
          {doc.title}
        </span>
      </div>

      <div style={{ padding: '16px 40px 0', display: 'flex', justifyContent: 'space-between', gap: 24 }}>
        <BillTo quotation={quotation} pal={pal} />
        <div style={{ textAlign: 'right', fontSize: 12.5 }}>
          <div><span style={{ color: pal.muted }}>No.: </span><strong>{quotation.meta.number}</strong></div>
          <div><span style={{ color: pal.muted }}>Date: </span><strong>{fmtDate(quotation.meta.date)}</strong></div>
          {doc.secondaryDateLabel ? <div><span style={{ color: pal.muted }}>{doc.secondaryDateLabel}: </span><strong>{fmtDate(quotation.meta.expiryDate)}</strong></div> : null}
        </div>
      </div>

      <div style={{ padding: '18px 40px 0' }}>
        <ItemsTable quotation={quotation} money={money} pal={pal} variant="bordered" />
      </div>

      <div style={{ padding: '16px 40px 0', display: 'flex', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 240px', minWidth: 220 }}>
          <AmountInWords quotation={quotation} totals={totals} pal={pal} />
          <TaxSummary quotation={quotation} totals={totals} money={money} pal={pal} accent={accent} accent2={accent2} />
        </div>
        <div style={{ width: 280, maxWidth: '100%' }}>
          <TotalsRows quotation={quotation} totals={totals} money={money} pal={pal} accent={accent} accent2={accent2} />
          <GrandTotal totals={totals} money={money} pal={pal} variant="solid" />
        </div>
      </div>

      <div style={{ padding: '0 40px' }}>
        <NotesTerms quotation={quotation} pal={pal} />
        <SignatureArea quotation={quotation} pal={pal} />
      </div>

      <div style={{ borderTop: `1px solid ${pal.line}`, marginTop: 22, padding: '10px', textAlign: 'center', fontSize: 11, color: pal.muted }}>
        This is a computer-generated quotation and does not require a physical signature.
      </div>
    </Paper>
  );
}
