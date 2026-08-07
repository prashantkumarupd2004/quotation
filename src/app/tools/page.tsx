import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, HelpCircle } from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { Reveal } from '@/components/ui/reveal';
import { Icon } from '@/components/ui/icon';
import { Faq } from '@/components/ui/faq';
import { JsonLd } from '@/components/json-ld';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, collectionSchema, faqSchema } from '@/lib/schema';
import { DOCUMENT_TYPE_LIST } from '@/lib/document-types';

export const metadata: Metadata = buildMetadata({
  title: 'All Free Business Document Tools',
  description:
    'Every generator on QuotationMaker.in in one place — quotation, invoice, GST invoice, estimate, proforma invoice, purchase order, delivery challan, payment receipt, credit note and debit note. Free, no signup.',
  path: '/tools',
  keywords: [
    'free business document generator',
    'invoice and quotation maker',
    'GST document tools India',
    'purchase order generator',
    'delivery challan format',
  ],
});

/**
 * Where each document sits in a real transaction. This is the part that actually
 * helps someone — most people arrive not knowing whether they need a quotation,
 * a proforma invoice or an estimate, and the names are not self-explanatory.
 */
const stages: { stage: string; when: string; ids: string[] }[] = [
  {
    stage: 'Before the work is agreed',
    when: 'You are pricing the job and the client has not committed yet. Nothing is owed at this point.',
    ids: ['quotation', 'estimate', 'proforma-invoice'],
  },
  {
    stage: 'Placing and fulfilling the order',
    when: 'The price is accepted. These documents authorise the purchase and travel with the goods.',
    ids: ['purchase-order', 'delivery-challan'],
  },
  {
    stage: 'Asking to be paid',
    when: 'The work is done or the goods are delivered, and payment is now due.',
    ids: ['invoice', 'gst-invoice'],
  },
  {
    stage: 'After payment, and corrections',
    when: 'Acknowledging money received, or adjusting an invoice that has already been issued.',
    ids: ['payment-receipt', 'credit-note', 'debit-note'],
  },
];

const faqs = [
  {
    q: 'Which document do I send first — a quotation or an invoice?',
    a: 'A quotation comes first. It is an offer: this is what the work will cost, valid until this date. An invoice comes after the work is done or the goods are delivered, and is a demand for payment. Sending an invoice before the client has agreed a price puts the two in the wrong order and usually delays payment rather than speeding it up.',
  },
  {
    q: 'What is the difference between a quotation and an estimate?',
    a: 'A quotation is a firm price you are committing to, normally with a validity period. An estimate is an approximation given when the final scope is not yet known — for example repair work where you cannot see the full extent of the problem until you start. Label it correctly: calling an estimate a quotation implies you have fixed the price, and clients will hold you to it.',
  },
  {
    q: 'When do I use a proforma invoice instead of a quotation?',
    a: 'A proforma invoice is used when the buyer needs an invoice-shaped document before the supply happens — commonly to release an advance payment, to open a letter of credit, or for customs and import paperwork. It looks like an invoice but creates no tax liability and is not a demand for payment. It is not a valid tax invoice for GST input credit.',
  },
  {
    q: 'What is the difference between an invoice and a GST invoice?',
    a: 'A GST invoice is an invoice that carries the specific particulars the GST rules require — your GSTIN and the recipient’s, HSN or SAC codes, taxable value, the CGST/SGST or IGST split, place of supply, and a consecutive serial number. If you are GST registered and making a taxable supply, you must issue a GST-compliant tax invoice; a plain invoice is only appropriate if you are unregistered or the supply is exempt.',
  },
  {
    q: 'When should I issue a credit note or a debit note?',
    a: 'A credit note reduces what the customer owes on an invoice already issued — a return, a shortfall, a post-sale discount, or an overcharge. A debit note increases it, usually because the original invoice undercharged tax or value. Both must reference the original invoice, and under GST both have time limits for adjusting your liability, so raise them promptly rather than at year end.',
  },
  {
    q: 'Do I need a delivery challan if I am already issuing an invoice?',
    a: 'Usually not — the invoice travels with the goods. A delivery challan is for movement where no supply is taking place yet: sending goods for job work, moving stock between your own branches, sending items on approval, or delivering in instalments where the invoice covers the whole consignment.',
  },
  {
    q: 'Are these tools really free, and is there a limit?',
    a: 'Yes, and no. Every tool listed here is free to use with no account, no usage cap and no watermark on the output. The site is funded by advertising rather than by charging users — see the refund policy for what that means, and the about page for who runs it.',
  },
];

export default function ToolsPage() {
  const byId = new Map(DOCUMENT_TYPE_LIST.map((t) => [t.id, t]));

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Tools', path: '/tools' },
          ]),
          collectionSchema({
            name: 'Free Business Document Generators',
            description:
              'Every document generator on QuotationMaker.in — quotation, invoice, GST invoice, estimate, proforma invoice, purchase order, delivery challan, payment receipt, credit note and debit note.',
            path: '/tools',
            items: DOCUMENT_TYPE_LIST.map((t) => ({ name: t.label, path: t.path })),
          }),
          faqSchema(faqs),
        ]}
      />
      <PageHero
        eyebrow={`${DOCUMENT_TYPE_LIST.length} free tools`}
        title="Every business document, one editor"
        description="Each of these is built for one job — a challan for goods in transit, a credit note for a bill already sent, a GST invoice for a taxable supply. Pick the one that matches where you are in the transaction."
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Tools', path: '/tools' },
        ]}
      />

      {/* ---- Grouped by where the document sits in a transaction ---- */}
      <section className="container space-y-14 py-16">
        {stages.map((group, gi) => (
          <Reveal key={group.stage} delay={gi * 0.05}>
            <div>
              <h2 className="font-display text-2xl font-bold">{group.stage}</h2>
              <p className="mt-2 max-w-2xl text-muted-foreground">{group.when}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.ids.map((id) => {
                  const tool = byId.get(id as never);
                  if (!tool) return null;
                  return (
                    <Link
                      key={tool.id}
                      href={tool.path}
                      className="glass-card group flex h-full flex-col p-5 transition-all hover:-translate-y-1 hover:border-primary/40"
                    >
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                        <Icon name={tool.icon} className="h-5 w-5" />
                      </span>
                      <h3 className="mt-3 font-display font-bold">{tool.label}</h3>
                      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {tool.tagline}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                        Open tool{' '}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* ---- Cross-links out to the rest of the site ---- */}
      <section className="border-y border-border/60 bg-muted/30 py-16">
        <div className="container grid gap-5 sm:grid-cols-3">
          {[
            {
              href: '/templates',
              title: 'Browse the templates',
              text: 'Every tool can use any of the 25 designs. Switch at any time without re-entering data.',
            },
            {
              href: '/industries',
              title: 'Find your trade',
              text: 'Industry guides with the right format, realistic sample line items and common SAC codes.',
            },
            {
              href: '/blog',
              title: 'Read the guides',
              text: 'How to write a quotation, how GST works on one, and how to follow up without nagging.',
            },
          ].map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="glass-card group p-6 transition-colors hover:border-primary/40"
            >
              <h2 className="font-display font-bold">{c.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Go <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container max-w-3xl py-16">
        <div className="mb-8 flex items-center justify-center gap-2">
          <HelpCircle className="h-5 w-5 text-primary" />
          <h2 className="text-center font-display text-2xl font-bold">
            Choosing the right document
          </h2>
        </div>
        <Faq items={faqs} />
      </section>
    </>
  );
}
