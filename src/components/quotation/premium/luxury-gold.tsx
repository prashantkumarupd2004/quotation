'use client';

import {
  docMeta,
  AmountInWords,
  BillTo,
  ContactBits,
  GrandTotal,
  ItemsTable,
  Logo,
  NotesTerms,
  type Palette,
  Paper,
  type PremiumTemplateProps,
  SignatureArea,
  TaxSummary,
  TotalsRows,
  FONT_DISPLAY,
  fmtDate,
} from './shared';

/** Luxury Gold — cream paper, gold rules, centered serif monogram header. */
export function LuxuryGold({ quotation, totals, money, accent, accent2 }: PremiumTemplateProps) {
  const doc = docMeta(quotation);
  const gold = accent || '#b8860b';
  const pal: Palette = {
    accent: gold,
    accent2: accent2 || '#d4af37',
    onAccent: '#1a1a1a',
    ink: '#2b2b2b',
    muted: '#8a7a55',
    line: '#e6dcc3',
    soft: '#faf6ec',
  };
  const c = quotation.company;
  const monogram = (c.name || 'Q').trim().charAt(0).toUpperCase();

  return (
    <Paper bg="#fffdf7" ink={pal.ink} line={pal.line} rounded={false} fontFamily={FONT_DISPLAY}>
      {/* Ornamental centered header */}
      <div style={{ textAlign: 'center', padding: '34px 40px 0' }}>
        {c.logo ? (
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}>
            <Logo src={c.logo} size={60} />
          </div>
        ) : (
          <div style={{ display: 'inline-grid', placeItems: 'center', height: 56, width: 56, borderRadius: 999, border: `2px solid ${gold}`, color: gold, fontSize: 26, fontWeight: 700, marginBottom: 8 }}>
            {monogram}
          </div>
        )}
        <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: 1, color: pal.ink }}>{c.name || 'Your Company Name'}</div>
        <div style={{ fontSize: 12, color: pal.muted, whiteSpace: 'pre-line', marginTop: 2 }}>{c.address}</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, margin: '16px 0 4px' }}>
          <span style={{ height: 1, width: 60, background: gold }} />
          <span style={{ fontSize: 16, letterSpacing: 6, color: gold, fontWeight: 600 }}>{doc.title}</span>
          <span style={{ height: 1, width: 60, background: gold }} />
        </div>
        <div style={{ fontSize: 12, color: pal.muted }}>
          {quotation.meta.number} &nbsp;·&nbsp; {fmtDate(quotation.meta.date)} &nbsp;·&nbsp; Valid until {fmtDate(quotation.meta.expiryDate)}
        </div>
      </div>

      <div style={{ padding: '22px 40px 0' }}>
        <BillTo quotation={quotation} pal={pal} />
      </div>

      <div style={{ padding: '18px 40px 0' }}>
        <ItemsTable quotation={quotation} money={money} pal={pal} variant="bordered" />
      </div>

      <div style={{ padding: '18px 40px 0', display: 'flex', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 240px', minWidth: 220 }}>
          <AmountInWords quotation={quotation} totals={totals} pal={pal} />
          <TaxSummary quotation={quotation} totals={totals} money={money} pal={pal} accent={gold} accent2={pal.accent2} />
        </div>
        <div style={{ width: 290, maxWidth: '100%' }}>
          <TotalsRows quotation={quotation} totals={totals} money={money} pal={pal} accent={gold} accent2={pal.accent2} />
          <GrandTotal totals={totals} money={money} pal={pal} variant="outline" />
        </div>
      </div>

      <div style={{ padding: '0 40px' }}>
        <NotesTerms quotation={quotation} pal={pal} />
        <SignatureArea quotation={quotation} pal={pal} />
      </div>

      <div style={{ marginTop: 22, borderTop: `2px solid ${gold}`, background: pal.soft, padding: '12px 40px', textAlign: 'center' }}>
        <ContactBits quotation={quotation} color={pal.muted} sep="·" />
      </div>
    </Paper>
  );
}
