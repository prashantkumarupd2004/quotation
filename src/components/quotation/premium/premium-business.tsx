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
  SectionLabel,
  SignatureArea,
  TaxSummary,
  TotalsRows,
  FONT_SANS,
  fmtDate,
  lightPalette,
} from './shared';

/** Premium Business — two-tone header, section chips, elevated total card. */
export function PremiumBusiness({ quotation, totals, money, accent, accent2 }: PremiumTemplateProps) {
  const pal = lightPalette(accent, accent2);
  const c = quotation.company;

  const chip = (text: string) => (
    <div style={{ display: 'inline-block', background: pal.soft, border: `1px solid ${pal.line}`, borderRadius: 999, padding: '3px 12px', fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.6, color: accent }}>
      {text}
    </div>
  );

  return (
    <Paper bg="#ffffff" ink={pal.ink} line={pal.line} rounded fontFamily={FONT_SANS}>
      {/* Dark top strip */}
      <div style={{ background: accent, color: '#fff', padding: '22px 34px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          <Logo src={c.logo} size={50} bg="#fff" />
          <div>
            <div style={{ fontSize: 20, fontWeight: 800 }}>{c.name || 'Your Company Name'}</div>
            <div style={{ fontSize: 11.5, opacity: 0.85, whiteSpace: 'pre-line' }}>{c.address}</div>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: 1 }}>QUOTATION</div>
          <div style={{ fontSize: 12, opacity: 0.9 }}>{quotation.meta.number}</div>
        </div>
      </div>
      {/* Accent2 sub-strip */}
      <div style={{ background: accent2, height: 5 }} />

      <div style={{ padding: '20px 34px 0', display: 'flex', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
        <div>
          {chip('Bill To')}
          <div style={{ marginTop: 8 }}>
            <BillTo quotation={quotation} pal={pal} />
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 12.5, color: pal.muted }}>Date</div>
          <div style={{ fontWeight: 600, marginBottom: 6 }}>{fmtDate(quotation.meta.date)}</div>
          <div style={{ fontSize: 12.5, color: pal.muted }}>Valid Until</div>
          <div style={{ fontWeight: 600 }}>{fmtDate(quotation.meta.expiryDate)}</div>
        </div>
      </div>

      <div style={{ padding: '18px 34px 0' }}>
        <div style={{ marginBottom: 8 }}>{chip('Items & Services')}</div>
        <ItemsTable quotation={quotation} money={money} pal={pal} variant="bordered" />
      </div>

      <div style={{ padding: '18px 34px 0', display: 'flex', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 240px', minWidth: 220 }}>
          <AmountInWords quotation={quotation} totals={totals} pal={pal} />
          <TaxSummary quotation={quotation} totals={totals} money={money} pal={pal} accent={accent} accent2={accent2} />
        </div>
        <div style={{ width: 300, maxWidth: '100%', boxShadow: '0 8px 24px rgba(15,23,42,0.12)', borderRadius: 14, padding: '14px 18px', border: `1px solid ${pal.line}` }}>
          <SectionLabel pal={pal}>Summary</SectionLabel>
          <div style={{ marginTop: 6 }}>
            <TotalsRows quotation={quotation} totals={totals} money={money} pal={pal} accent={accent} accent2={accent2} />
          </div>
          <GrandTotal totals={totals} money={money} pal={pal} variant="solid" />
        </div>
      </div>

      <div style={{ padding: '0 34px' }}>
        <NotesTerms quotation={quotation} pal={pal} />
        <SignatureArea quotation={quotation} pal={pal} />
      </div>

      <div style={{ marginTop: 22, background: pal.soft, borderTop: `1px solid ${pal.line}`, padding: '12px 34px', textAlign: 'center' }}>
        <ContactBits quotation={quotation} color={pal.muted} sep="·" />
      </div>
    </Paper>
  );
}
