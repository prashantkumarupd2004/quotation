'use client';

import {
  AmountInWords,
  GrandTotal,
  ItemsTable,
  Logo,
  NotesTerms,
  Paper,
  type PremiumTemplateProps,
  SignatureArea,
  TaxSummary,
  TotalsRows,
  FONT_SANS,
  fmtDate,
  lightPalette,
} from './shared';

/** Elegant Blue — full-height gradient sidebar carrying meta + bill-to. */
export function ElegantBlue({ quotation, totals, money, accent, accent2 }: PremiumTemplateProps) {
  const pal = lightPalette(accent, accent2);
  const c = quotation.company;
  const cl = quotation.client;

  const sideLabel = (t: string) => (
    <div style={{ fontSize: 10.5, textTransform: 'uppercase', letterSpacing: 1.2, opacity: 0.75, marginTop: 14 }}>{t}</div>
  );

  return (
    <Paper bg="#ffffff" ink={pal.ink} line={pal.line} rounded fontFamily={FONT_SANS}>
      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <aside style={{ width: 232, background: `linear-gradient(160deg, ${accent}, ${accent2})`, color: '#fff', padding: '30px 24px', flexShrink: 0 }}>
          <Logo src={c.logo} size={56} bg="rgba(255,255,255,0.15)" />
          <div style={{ fontSize: 18, fontWeight: 800, marginTop: 12 }}>{c.name || 'Your Company'}</div>
          <div style={{ fontSize: 11.5, opacity: 0.85, whiteSpace: 'pre-line', marginTop: 4 }}>{c.address}</div>

          <div style={{ height: 1, background: 'rgba(255,255,255,0.25)', margin: '18px 0' }} />

          {sideLabel('Quotation No.')}
          <div style={{ fontWeight: 700 }}>{quotation.meta.number}</div>
          {sideLabel('Date')}
          <div style={{ fontWeight: 700 }}>{fmtDate(quotation.meta.date)}</div>
          {sideLabel('Valid Until')}
          <div style={{ fontWeight: 700 }}>{fmtDate(quotation.meta.expiryDate)}</div>

          <div style={{ height: 1, background: 'rgba(255,255,255,0.25)', margin: '18px 0' }} />

          {sideLabel('Bill To')}
          <div style={{ fontWeight: 700, marginTop: 4 }}>{cl.name || 'Client Name'}</div>
          {cl.company ? <div style={{ fontSize: 12, opacity: 0.9 }}>{cl.company}</div> : null}
          <div style={{ fontSize: 12, opacity: 0.9, whiteSpace: 'pre-line', marginTop: 3 }}>{cl.address}</div>
          {cl.gstin ? <div style={{ fontSize: 12, opacity: 0.9, marginTop: 3 }}>GSTIN: {cl.gstin}</div> : null}

          <div style={{ height: 1, background: 'rgba(255,255,255,0.25)', margin: '18px 0' }} />
          <div style={{ fontSize: 11, opacity: 0.85, whiteSpace: 'pre-line' }}>
            {c.gstin ? `GSTIN: ${c.gstin}\n` : ''}
            {c.phone ? `${c.phone}\n` : ''}
            {c.email ? `${c.email}\n` : ''}
            {c.website || ''}
          </div>
        </aside>

        {/* Body */}
        <div style={{ flex: 1, padding: '30px 30px 24px', minWidth: 0 }}>
          <div style={{ fontSize: 30, fontWeight: 800, color: accent, letterSpacing: 1 }}>QUOTATION</div>
          <div style={{ height: 3, width: 60, background: accent2, margin: '10px 0 20px' }} />

          <ItemsTable quotation={quotation} money={money} pal={pal} variant="solid" striped />

          <div style={{ marginTop: 18, display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ width: 280, maxWidth: '100%' }}>
              <TotalsRows quotation={quotation} totals={totals} money={money} pal={pal} accent={accent} accent2={accent2} />
              <GrandTotal totals={totals} money={money} pal={pal} variant="gradient" />
            </div>
          </div>

          <div style={{ marginTop: 14 }}>
            <AmountInWords quotation={quotation} totals={totals} pal={pal} />
            <TaxSummary quotation={quotation} totals={totals} money={money} pal={pal} accent={accent} accent2={accent2} />
          </div>

          <NotesTerms quotation={quotation} pal={pal} />
          <SignatureArea quotation={quotation} pal={pal} />
        </div>
      </div>
    </Paper>
  );
}
