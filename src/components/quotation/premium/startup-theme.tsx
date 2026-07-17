'use client';

import { FileText, MapPin, Sparkles } from 'lucide-react';
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
  FONT_SANS,
  fmtDate,
  lightPalette,
  docMeta,
} from './shared';

/** Startup Theme — friendly rounded header, icon accents, chunky total pill. */
export function StartupTheme({ quotation, totals, money, accent, accent2 }: PremiumTemplateProps) {
  const doc = docMeta(quotation);
  const pal = lightPalette(accent, accent2);
  const c = quotation.company;

  return (
    <Paper bg="#ffffff" ink={pal.ink} line={pal.line} rounded fontFamily={FONT_SANS}>
      {/* Rounded header card */}
      <div style={{ padding: '24px 28px 0' }}>
        <div
          style={{
            background: `linear-gradient(120deg, ${accent}, ${accent2})`,
            color: '#fff',
            borderRadius: 20,
            padding: '22px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <Logo src={c.logo} size={50} bg="rgba(255,255,255,0.2)" />
            <div>
              <div style={{ fontSize: 21, fontWeight: 800 }}>{c.name || 'Your Startup'}</div>
              <div style={{ fontSize: 12, opacity: 0.9, display: 'flex', alignItems: 'center', gap: 5, marginTop: 2 }}>
                <MapPin size={13} /> <span style={{ whiteSpace: 'pre-line' }}>{c.address}</span>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.2)', borderRadius: 999, padding: '5px 12px', fontSize: 13, fontWeight: 700 }}>
              <Sparkles size={14} /> {doc.title}
            </div>
            <div style={{ fontSize: 12, opacity: 0.95, marginTop: 6 }}>{quotation.meta.number}</div>
          </div>
        </div>
      </div>

      <div style={{ padding: '20px 28px 0', display: 'flex', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
        <BillTo quotation={quotation} pal={pal} />
        <div style={{ textAlign: 'right', fontSize: 12.5 }}>
          <div style={{ color: pal.muted }}>{doc.dateLabel}</div>
          <div style={{ fontWeight: 600, marginBottom: 6 }}>{fmtDate(quotation.meta.date)}</div>
                    {doc.secondaryDateLabel ? (
            <>
              <div style={{ color: pal.muted }}>{doc.secondaryDateLabel}</div>
              <div style={{ fontWeight: 600 }}>{fmtDate(quotation.meta.expiryDate)}</div>
            </>
          ) : null}
        </div>
      </div>

      <div style={{ padding: '18px 28px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 700, color: accent, marginBottom: 8 }}>
          <FileText size={15} /> What&apos;s included
        </div>
        <ItemsTable quotation={quotation} money={money} pal={pal} variant="pill" striped />
      </div>

      <div style={{ padding: '18px 28px 0', display: 'flex', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 240px', minWidth: 220 }}>
          <AmountInWords quotation={quotation} totals={totals} pal={pal} />
          <TaxSummary quotation={quotation} totals={totals} money={money} pal={pal} accent={accent} accent2={accent2} />
        </div>
        <div style={{ width: 300, maxWidth: '100%', background: pal.soft, borderRadius: 18, padding: '14px 18px' }}>
          <TotalsRows quotation={quotation} totals={totals} money={money} pal={pal} accent={accent} accent2={accent2} />
          <GrandTotal totals={totals} money={money} pal={pal} variant="pill" />
        </div>
      </div>

      <div style={{ padding: '0 28px' }}>
        <NotesTerms quotation={quotation} pal={pal} />
        <SignatureArea quotation={quotation} pal={pal} />
      </div>

      <div style={{ marginTop: 22, background: pal.soft, borderTop: `1px solid ${pal.line}`, padding: '13px 28px', textAlign: 'center' }}>
        <ContactBits quotation={quotation} color={pal.muted} sep="·" />
      </div>
    </Paper>
  );
}
