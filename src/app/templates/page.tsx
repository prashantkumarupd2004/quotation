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
  title: '15+ Free Quotation Templates — Modern, Corporate, GST',
  description:
    'Browse 15+ professionally designed quotation templates. Modern, corporate, minimal, construction, freelancer and more. Pick one and download your quote as PDF for free.',
  path: '/templates',
  keywords: ['quotation templates', 'quotation format', 'free quote template', 'gst quotation template india'],
});

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
        eyebrow="15+ Premium Designs"
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
          {templates.map((t, i) => (
            <Reveal key={t.id} delay={(i % 3) * 0.05}>
              <div className="glass-card group flex h-full flex-col overflow-hidden p-4">
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
