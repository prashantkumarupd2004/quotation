import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { industries } from '@/data/industries';
import { PageHero } from '@/components/layout/page-hero';
import { Reveal } from '@/components/ui/reveal';
import { Icon } from '@/components/ui/icon';
import { JsonLd } from '@/components/json-ld';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = buildMetadata({
  title: 'Industry Quotation Makers — 20+ Trades & Services',
  description:
    'Free, tailored quotation makers for construction, interior design, freelancers, IT, photography, transport and 20+ more industries. Industry-specific formats, sample items and expert tips.',
  path: '/industries',
  keywords: ['industry quotation maker', 'contractor quotation', 'service quotation format', 'business quotation india'],
});

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Industries', path: '/industries' },
        ])}
      />
      <PageHero
        eyebrow="20+ Industries"
        title="A quotation maker tailored to your trade"
        description="Each industry page comes with the right format, realistic sample line items, common HSN/SAC codes and practical tips written for that specific business."
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Industries', path: '/industries' },
        ]}
      />

      <section className="container py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={(i % 3) * 0.04}>
              <Link
                href={`/industries/${ind.slug}`}
                className="glass-card group flex h-full flex-col p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
              >
                <span
                  className="grid h-12 w-12 place-items-center rounded-2xl text-white"
                  style={{ background: `linear-gradient(135deg, ${ind.accent}, ${ind.accent}dd)` }}
                >
                  <Icon name={ind.icon} className="h-6 w-6" />
                </span>
                <h2 className="mt-4 font-display text-lg font-bold">{ind.h1}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {ind.intro.split('\n\n')[0]}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Open maker <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
