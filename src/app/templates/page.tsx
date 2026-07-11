import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { templates } from '@/lib/templates';
import { TemplateThumb } from '@/components/quotation/template-thumb';
import { PageHero } from '@/components/layout/page-hero';
import { Reveal } from '@/components/ui/reveal';
import { JsonLd } from '@/components/json-ld';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = buildMetadata({
  title: '25+ Free Quotation Templates — Modern, Corporate, Premium, GST',
  description:
    'Browse 25+ professionally designed quotation templates, including 10 premium layouts. Modern Corporate, Luxury Gold, Dark Professional and more. Pick one and download your quote as PDF for free.',
  path: '/templates',
  keywords: ['quotation templates', 'quotation format', 'free quote template', 'gst quotation template india', 'premium quotation template'],
});

// Show the premium (bespoke-layout) templates first.
const orderedTemplates = [...templates].sort((a, b) => Number(Boolean(b.premium)) - Number(Boolean(a.premium)));

export default function TemplatesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Templates', path: '/templates' },
        ])}
      />
      <PageHero
        eyebrow="25+ Premium Designs"
        title="Quotation templates for every business"
        description="Every template is print-ready, GST-compatible and fully editable. Choose one to start — you can switch designs anytime without losing your data."
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Templates', path: '/templates' },
        ]}
      >
        <Link href="/create" className="btn-primary">
          Start with a blank quotation <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <section className="container py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {orderedTemplates.map((t, i) => (
            <Reveal key={t.id} delay={(i % 3) * 0.05}>
              <div className="glass-card group relative flex h-full flex-col overflow-hidden p-4">
                {t.premium ? (
                  <span className="absolute right-6 top-6 z-10 rounded-full bg-amber-500 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white shadow">
                    Premium
                  </span>
                ) : null}
                <TemplateThumb template={t} />
                <div className="mt-4 flex flex-1 flex-col">
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="font-display text-lg font-bold">{t.name}</h2>
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                      {t.category}
                    </span>
                  </div>
                  <p className="mt-1.5 flex-1 text-sm text-muted-foreground">{t.tagline}</p>
                  <Link
                    href={`/create?template=${t.id}`}
                    className="btn-primary mt-4 w-full text-sm"
                  >
                    Use this template <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
