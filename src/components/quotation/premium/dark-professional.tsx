'use client';

import type { CSSProperties } from 'react';
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
  FONT_SANS,
  fmtDate,
} from './shared';

/** Dark Professional — dark paper, neon accents, card-sectioned body. */
export function DarkProfessional({ quotation, totals, money, accent, accent2 }: PremiumTemplateProps) {
  const doc = docMeta(quotation);
  const pal: Palette = {
    accent,
    accent2,
    onAccent: '#0b1220',
    ink: '#e5e7eb',
    muted: '#94a3b8',
    line: '#233047',
    soft: '#131c30',
  };
  const c = quotation.company;
  const card: CSSProperties = { background: pal.soft, border: `1px solid ${pal.line}`, borderRadius: 14, padding: '16px 18px' };

  return (
    <Paper bg="#0b1220" ink={pal.ink} line={pal.line} rounded fontFamily={FONT_SANS}>
      <div style={{ padding: '28px 32px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          <Logo src={c.logo} size={52} bg="rgba(255,255,255,0.08)" />
          <div>
            <div style={{ fontSize: 21, fontWeight: 800, color: '#fff' }}>{c.name || 'Your Company Name'}</div>
            <div style={{ fontSize: 12, color: pal.muted, whiteSpace: 'pre-line' }}>{c.address}</div>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 25, fontWeight: 800, letterSpacing: 1, color: accent }}>{doc.title}</div>
          <div style={{ fontSize: 12, color: pal.muted }}>{quotation.meta.number}</div>
        </div>
      </div>

      <div style={{ padding: '18px 32px 0', display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <div style={{ ...card, flex: '1 1 240px' }}>
          <BillTo quotation={quotation} pal={pal} />
        </div>
        <div style={{ ...card, minWidth: 180 }}>
          <MetaLine label={doc.dateLabel} value={fmtDate(quotation.meta.date)} pal={pal} />
          {doc.secondaryDateLabel ? <MetaLine label={doc.secondaryDateLabel} value={fmtDate(quotation.meta.expiryDate)} pal={pal} /> : null}
          {c.gstin ? <MetaLine label="GSTIN" value={c.gstin} pal={pal} /> : null}
        </div>
      </div>

      <div style={{ padding: '18px 32px 0' }}>
        <div style={{ ...card, padding: 0, overflow: 'hidden' }}>
          <ItemsTable quotation={quotation} money={money} pal={pal} variant="solid" striped />
        </div>
      </div>

      <div style={{ padding: '18px 32px 0', display: 'flex', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 240px', minWidth: 220 }}>
          <AmountInWords quotation={quotation} totals={totals} pal={pal} />
          <TaxSummary quotation={quotation} totals={totals} money={money} pal={pal} accent={accent} accent2={accent2} />
        </div>
        <div style={{ width: 300, maxWidth: '100%', ...card }}>
          <TotalsRows quotation={quotation} totals={totals} money={money} pal={pal} accent={accent} accent2={accent2} />
          <GrandTotal totals={totals} money={money} pal={pal} variant="gradient" />
        </div>
      </div>

      <div style={{ padding: '0 32px' }}>
        <NotesTerms quotation={quotation} pal={pal} />
        <SignatureArea quotation={quotation} pal={pal} />
      </div>

      <div style={{ marginTop: 22, borderTop: `1px solid ${pal.line}`, padding: '12px 32px', textAlign: 'center' }}>
        <ContactBits quotation={quotation} color={pal.muted} sep="·" />
      </div>
    </Paper>
  );
}

function MetaLine({ label, value, pal }: { label: string; value: string; pal: Palette }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, fontSize: 12, marginBottom: 4 }}>
      <span style={{ color: pal.muted }}>{label}</span>
      <span style={{ color: pal.ink, fontWeight: 600 }}>{value}</span>
    </div>
  );
}
