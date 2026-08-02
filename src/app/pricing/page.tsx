import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, HeartHandshake, Megaphone, X } from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { Faq } from '@/components/ui/faq';
import { buildMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';
import { breadcrumbSchema, faqSchema } from '@/lib/schema';
import { TEMPLATE_COUNT, PREMIUM_TEMPLATE_COUNT } from '@/lib/templates';
import { DOCUMENT_TYPE_LIST } from '@/lib/document-types';

export const metadata: Metadata = buildMetadata({
  title: 'Pricing — Everything Is Free',
  description:
    'QuotationMaker.in costs nothing and has no payment form. Unlimited documents, all 25 templates, no watermark and no account — funded by advertising rather than by charging users.',
  path: '/pricing',
});

const included = [
  'Unlimited quotations, invoices and other documents',
  'Unlimited line items per document',
  `All ${TEMPLATE_COUNT} templates, including ${PREMIUM_TEMPLATE_COUNT} bespoke premium layouts`,
  'PDF, PNG and direct print export',
  'Automatic GST — CGST/SGST and IGST, per item',
  'Logo, authorised signature, company stamp and payment QR code',
  'Multi-currency with Indian amount-in-words',
  'Autosave, undo/redo and offline PWA support',
  'Shareable links you can revoke at any time',
  'No signup, no watermark, no usage cap',
];

/** Being explicit about what is absent is more useful than a feature list alone. */
const notIncluded = [
  'GST return filing or any connection to the GST portal',
  'E-invoicing / IRN generation',
  'Cloud sync between your devices — documents live in your browser',
  'Payment collection or reconciliation on your behalf',
  'Phone support — email only, from one person',
];

const faqs = [
  {
    q: 'Is there a catch — a trial that expires, or a limit I will hit?',
    a: 'No. There is no trial period, no document cap, no watermark and no feature held back behind a paywall. There is also no payment form anywhere on the site, so there is no mechanism by which you could be charged.',
  },
  {
    q: 'How is the site paid for, then?',
    a: 'Advertising. Ads cover the hosting cost, which is what allows the tools to stay open to everyone including one-person businesses. We do not sell user data, and nothing you type into a document is shared with advertisers.',
  },
  {
    q: 'Will you start charging later?',
    a: 'If a paid option is ever added it would be opt-in and clearly labelled, and everything free today would stay free. We would publish a real refund and cancellation policy before any payment could be taken. Nothing you build now becomes locked behind a future paywall — your documents are downloaded files on your own device.',
  },
  {
    q: 'Do I need to give an email address or create an account?',
    a: 'No. There is no account system at all. Your documents are saved in your browser on your device, which is why we do not need to know who you are, and why we cannot recover your documents if you clear your browser data.',
  },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Pricing', path: '/pricing' },
          ]),
          faqSchema(faqs),
        ]}
      />
      <PageHero
        eyebrow="Pricing"
        title="It's free. There is no paid plan."
        description="Not a freemium tier, not a trial — there is no payment form on this site at all. Advertising covers the hosting so every business, including the smallest, can send a professional quotation."
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Pricing', path: '/pricing' },
        ]}
      />

      <section className="container grid gap-8 py-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="glass-card relative overflow-hidden p-8 ring-2 ring-primary/30">
          <span className="section-eyebrow">Everything, for everyone</span>
          <div className="mt-4 flex items-baseline gap-1">
            <span className="font-display text-5xl font-extrabold">₹0</span>
            <span className="text-muted-foreground">/ forever</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            All {DOCUMENT_TYPE_LIST.length} document tools, with no account.
          </p>
          <ul className="mt-6 space-y-3">
            {included.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" /> {f}
              </li>
            ))}
          </ul>
          <Link href="/create" className="btn-primary mt-8 w-full">
            Start creating <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="space-y-6">
          {/* Replaces the former "Pro — ₹— / Coming soon" card, which advertised a
              plan that did not exist and had no timeline behind it. */}
          <div className="glass-card p-6">
            <div className="flex items-center gap-2">
              <X className="h-5 w-5 text-muted-foreground" />
              <h2 className="font-display text-lg font-bold">What it does not do</h2>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              This is a document generator, not accounting software. Knowing the limits up front
              saves you time.
            </p>
            <ul className="mt-4 space-y-2.5">
              {notIncluded.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground/50" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center gap-2">
              <Megaphone className="h-5 w-5 text-primary" />
              <h2 className="font-display text-lg font-bold">How it stays free</h2>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Advertising pays the hosting bill. That is the entire business model, and we would
              rather state it plainly than describe the site as free without explaining how. No
              feature is gated behind an advertisement, and no document content is shared with
              advertisers. See the{' '}
              <Link href="/privacy" className="text-primary hover:underline">
                privacy policy
              </Link>{' '}
              and{' '}
              <Link href="/refund-policy" className="text-primary hover:underline">
                refund policy
              </Link>
              .
            </p>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center gap-2">
              <HeartHandshake className="h-5 w-5 text-primary" />
              <h2 className="font-display text-lg font-bold">Want something built?</h2>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Feature requests from people actually sending quotations are how new tools get
              prioritised. There is no paid tier to buy your way up the list — just email.
            </p>
            <Link href="/contact" className="btn-secondary mt-4 w-full text-sm">
              Send a request
            </Link>
          </div>
        </div>
      </section>

      <section className="container max-w-3xl pb-20">
        <h2 className="mb-8 text-center font-display text-2xl font-bold">
          Questions about the price
        </h2>
        <Faq items={faqs} />
      </section>
    </>
  );
}
