import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { Reveal } from '@/components/ui/reveal';
import { Icon } from '@/components/ui/icon';
import { JsonLd } from '@/components/json-ld';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { homeFeatures } from '@/data/home';

export const metadata: Metadata = buildMetadata({
  title: 'Features — Free GST Quotation Generator',
  description:
    'Explore every feature: automatic GST/CGST/SGST/IGST calculation, 15+ templates, live preview, PDF & PNG export, multi-currency, logo, signature, stamp, QR code, autosave, undo/redo and offline PWA support.',
  path: '/features',
  keywords: ['quotation software features', 'gst calculator', 'quotation pdf generator features'],
});

const detailed = [
  {
    group: 'Speed & Simplicity',
    items: [
      'Distraction-free builder with real-time live preview',
      'Autosave to your device — never lose your work',
      'Undo and redo with full history (Ctrl+Z / Ctrl+Y)',
      'Keyboard shortcuts for power users',
      'Drag-and-drop to reorder line items',
      'Duplicate or delete any item in one click',
    ],
  },
  {
    group: 'Indian GST & Tax',
    items: [
      'Per-item GST at 0%, 5%, 12%, 18% and 28%',
      'Automatic CGST + SGST split for intra-state',
      'IGST calculation for inter-state supply',
      'Flat tax mode for non-GST businesses',
      'Discount (percentage or flat) and shipping charges',
      'Automatic round-off and amount-in-words',
    ],
  },
  {
    group: 'Branding & Output',
    items: [
      '15+ premium, print-ready templates',
      'Custom accent colour to match your brand',
      'Upload logo, authorised signature and company stamp',
      'Attach a UPI or payment QR code',
      'Download high-resolution PDF (multi-page) or PNG',
      'Print directly from the browser',
    ],
  },
  {
    group: 'Privacy & Access',
    items: [
      'Runs entirely in your browser — no server storage',
      'No signup and no watermark, ever',
      'Multi-currency support with locale formatting',
      'Installable as an app (PWA)',
      'Works offline once loaded',
      'Fully responsive on mobile, tablet and desktop',
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Features', path: '/features' },
        ])}
      />
      <PageHero
        eyebrow="Features"
        title="Every feature you need to quote like a pro"
        description="QuotationMaker.in packs professional-grade capabilities into a tool that stays effortless to use — and completely free."
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Features', path: '/features' },
        ]}
      >
        <Link href="/create" className="btn-primary">
          Try it free <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <section className="container py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homeFeatures.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 0.05}>
              <div className="glass-card h-full p-6">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white">
                  <Icon name={f.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/30 py-16">
        <div className="container grid gap-10 md:grid-cols-2">
          {detailed.map((d, i) => (
            <Reveal key={d.group} delay={(i % 2) * 0.05}>
              <div className="glass-card h-full p-8">
                <h2 className="font-display text-xl font-bold">{d.group}</h2>
                <ul className="mt-5 space-y-3">
                  {d.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
