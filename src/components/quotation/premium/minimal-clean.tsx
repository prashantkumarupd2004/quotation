'use client';

import {
  docMeta,
  AmountInWords,
  BillTo,
  ContactBits,
  GrandTotal,
  ItemsTable,
  NotesTerms,
  Paper,
  type PremiumTemplateProps,
  SignatureArea,
  TotalsRows,
  FONT_SANS,
  fmtDate,
  lightPalette,
} from './shared';

/** Minimal Clean — max whitespace, hairline rules, monochrome. */
export function MinimalClean({ quotation, totals, money, accent, accent2 }: PremiumTemplateProps) {
  const doc = docMeta(quotation);
  const pal = lightPalette(accent, accent2);
  const c = quotation.company;

  return (
    <Paper bg="#ffffff" ink={pal.ink} line={pal.line} rounded={false} fontFamily={FONT_SANS}>
      <div style={{ padding: '42px 48px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 24 }}>
          <div>
            <div style={{ fontSize: 26, fontWeight: 300, letterSpacing: 6, color: pal.ink }}>{doc.title}</div>
            <div style={{ fontSize: 12, color: pal.muted, marginTop: 4, letterSpacing: 1 }}>{quotation.meta.number}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: pal.ink }}>{c.name || 'Your Company Name'}</div>
            <div style={{ fontSize: 12, color: pal.muted, whiteSpace: 'pre-line', marginTop: 3 }}>{c.address}</div>
          </div>
        </div>

        <div style={{ height: 1, background: pal.line, margin: '26px 0' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 24 }}>
          <BillTo quotation={quotation} pal={pal} />
          <div style={{ textAlign: 'right', fontSize: 12.5 }}>
            <div style={{ color: pal.muted }}>{doc.dateLabel}</div>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>{fmtDate(quotation.meta.date)}</div>
                        {doc.secondaryDateLabel ? (
            <>
              <div style={{ color: pal.muted }}>{doc.secondaryDateLabel}</div>
              <div style={{ fontWeight: 600 }}>{fmtDate(quotation.meta.expiryDate)}</div>
            </>
          ) : null}
          </div>
        </div>
      </div>

      <div style={{ padding: '28px 48px 0' }}>
        <ItemsTable quotation={quotation} money={money} pal={pal} variant="underline" />
      </div>

      <div style={{ padding: '20px 48px 0', display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{ width: 280, maxWidth: '100%' }}>
          <TotalsRows quotation={quotation} totals={totals} money={money} pal={pal} accent={accent} accent2={accent2} />
          <div style={{ height: 1, background: pal.ink, margin: '8px 0' }} />
          <GrandTotal totals={totals} money={money} pal={pal} variant="outline" />
        </div>
      </div>

      <div style={{ padding: '4px 48px 0' }}>
        <AmountInWords quotation={quotation} totals={totals} pal={pal} />
        <NotesTerms quotation={quotation} pal={pal} />
        <SignatureArea quotation={quotation} pal={pal} />
      </div>

      <div style={{ padding: '24px 48px 30px' }}>
        <div style={{ height: 1, background: pal.line, marginBottom: 12 }} />
        <ContactBits quotation={quotation} color={pal.muted} sep="·" />
      </div>
    </Paper>
  );
}
