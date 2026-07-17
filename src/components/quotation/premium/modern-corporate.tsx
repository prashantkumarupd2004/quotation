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
  Paper,
  type PremiumTemplateProps,
  SignatureArea,
  TaxSummary,
  TotalsRows,
  FONT_SANS,
  fmtDate,
  lightPalette,
} from './shared';

/** Modern Corporate — bold top band, floating meta card, striped table. */
export function ModernCorporate({ quotation, totals, money, accent, accent2 }: PremiumTemplateProps) {
  const doc = docMeta(quotation);
  const pal = lightPalette(accent, accent2);
  const c = quotation.company;

  return (
    <Paper bg="#ffffff" ink={pal.ink} line={pal.line} rounded fontFamily={FONT_SANS}>
      {/* Top color band */}
      <div style={{ height: 8, background: `linear-gradient(90deg, ${accent}, ${accent2})` }} />

      <div style={{ padding: '26px 34px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 20 }}>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          <Logo src={c.logo} size={54} />
          <div>
            <div style={{ fontSize: 22, fontWeight: 800, color: accent, letterSpacing: -0.4 }}>{c.name || 'Your Company Name'}</div>
            <div style={{ fontSize: 12, color: pal.muted, whiteSpace: 'pre-line', marginTop: 2 }}>{c.address}</div>
          </div>
        </div>
        {/* Floating meta card */}
        <div style={{ background: pal.soft, border: `1px solid ${pal.line}`, borderRadius: 12, padding: '14px 18px', minWidth: 210 }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: pal.ink, letterSpacing: 1 }}>{doc.title}</div>
          <MetaLine label="No." value={quotation.meta.number} pal={pal} />
          <MetaLine label={doc.dateLabel} value={fmtDate(quotation.meta.date)} pal={pal} />
          {doc.secondaryDateLabel ? <MetaLine label={doc.secondaryDateLabel} value={fmtDate(quotation.meta.expiryDate)} pal={pal} /> : null}
        </div>
      </div>

      <div style={{ padding: '10px 34px 0' }}>
        <ContactBits quotation={quotation} color={pal.muted} />
      </div>

      <div style={{ padding: '18px 34px 0' }}>
        <BillTo quotation={quotation} pal={pal} />
      </div>

      <div style={{ padding: '18px 34px 0' }}>
        <ItemsTable quotation={quotation} money={money} pal={pal} variant="solid" striped />
      </div>

      <div style={{ padding: '18px 34px 0', display: 'flex', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 240px', minWidth: 220 }}>
          <AmountInWords quotation={quotation} totals={totals} pal={pal} />
          <TaxSummary quotation={quotation} totals={totals} money={money} pal={pal} accent={accent} accent2={accent2} />
        </div>
        <div style={{ width: 290, maxWidth: '100%', background: pal.soft, borderRadius: 12, padding: '10px 16px' }}>
          <TotalsRows quotation={quotation} totals={totals} money={money} pal={pal} accent={accent} accent2={accent2} />
          <GrandTotal totals={totals} money={money} pal={pal} variant="gradient" />
        </div>
      </div>

      <div style={{ padding: '0 34px' }}>
        <NotesTerms quotation={quotation} pal={pal} />
        <SignatureArea quotation={quotation} pal={pal} />
      </div>

      <div style={{ marginTop: 22, background: `linear-gradient(90deg, ${accent}, ${accent2})`, color: '#fff', textAlign: 'center', padding: '11px', fontSize: 11 }}>
        Thank you for your business — {c.name || 'QuotationMaker.in'}
      </div>
    </Paper>
  );
}

function MetaLine({ label, value, pal }: { label: string; value: string; pal: ReturnType<typeof lightPalette> }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, fontSize: 12, marginTop: 4 }}>
      <span style={{ color: pal.muted }}>{label}</span>
      <span style={{ color: pal.ink, fontWeight: 600 }}>{value}</span>
    </div>
  );
}
