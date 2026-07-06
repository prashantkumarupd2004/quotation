import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { buildMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = buildMetadata({
  title: 'Pricing — Free Forever',
  description:
    'QuotationMaker.in is free forever. Create unlimited GST quotations, use every template and download unlimited PDFs with no signup and no watermark.',
  path: '/pricing',
});

const freeFeatures = [
  'Unlimited quotations',
  'Unlimited line items',
  'All 15+ premium templates',
  'PDF, PNG & print export',
  'Automatic GST (CGST/SGST/IGST)',
  'Logo, signature, stamp & QR code',
  'Multi-currency support',
  'Autosave, undo/redo & offline PWA',
  'No signup, no watermark',
];

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Pricing', path: '/pricing' },
        ])}
      />
      <PageHero
        eyebrow="Pricing"
        title="Free forever. No catch."
        description="We believe every business should be able to send a professional quotation without paying for software. Everything is free — a Pro plan with cloud sync and team features is on the way."
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Pricing', path: '/pricing' },
        ]}
      />

      <section className="container grid gap-8 py-16 lg:grid-cols-2">
        <div className="glass-card relative overflow-hidden p-8 ring-2 ring-primary/30">
          <span className="section-eyebrow">Most popular</span>
          <h2 className="mt-4 font-display text-2xl font-bold">Free</h2>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="font-display text-5xl font-extrabold">₹0</span>
            <span className="text-muted-foreground">/ forever</span>
          </div>
          <ul className="mt-6 space-y-3">
            {freeFeatures.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <Check className="h-4 w-4 flex-shrink-0 text-emerald-500" /> {f}
              </li>
            ))}
          </ul>
          <Link href="/create" className="btn-primary mt-8 w-full">
            Get started free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="glass-card p-8">
          <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
            Coming soon
          </span>
          <h2 className="mt-4 font-display text-2xl font-bold">Pro</h2>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="font-display text-5xl font-extrabold text-muted-foreground">₹—</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Everything in Free, plus planned features for growing teams:
          </p>
          <ul className="mt-6 space-y-3 text-muted-foreground">
            {[
              'Cloud sync across devices',
              'Client & product library',
              'Convert quotations to invoices',
              'Team members and roles',
              'Custom domains & branding',
              'Quotation status tracking',
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <Check className="h-4 w-4 flex-shrink-0 text-muted-foreground/60" /> {f}
              </li>
            ))}
          </ul>
          <Link href="/contact" className="btn-secondary mt-8 w-full">
            Get notified
          </Link>
        </div>
      </section>
    </>
  );
}
