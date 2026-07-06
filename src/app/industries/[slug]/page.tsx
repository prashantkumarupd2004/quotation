import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AlertTriangle, ArrowRight, Check, FileDown, Lightbulb, Sparkles, Star } from 'lucide-react';
import { getIndustry, getRelatedIndustries, industries } from '@/data/industries';
import { getTemplate } from '@/lib/templates';
import { PageHero } from '@/components/layout/page-hero';
import { Reveal } from '@/components/ui/reveal';
import { Faq } from '@/components/ui/faq';
import { Icon } from '@/components/ui/icon';
import { TemplateThumb } from '@/components/quotation/template-thumb';
import { JsonLd } from '@/components/json-ld';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, faqSchema, howToSchema } from '@/lib/schema';

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return buildMetadata({ title: 'Industry not found', noIndex: true });
  return buildMetadata({
    title: industry.seoTitle,
    description: industry.metaDescription,
    path: `/industries/${industry.slug}`,
    keywords: industry.keywords,
  });
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const template = getTemplate(industry.templateId);
  const related = getRelatedIndustries(industry.slug);
  const createHref = `/create?template=${industry.templateId}`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Industries', path: '/industries' },
            { name: industry.h1, path: `/industries/${industry.slug}` },
          ]),
          faqSchema(industry.faqs),
          howToSchema(`How to make a ${industry.name.toLowerCase()} quotation`, industry.howToUse),
        ]}
      />

      <PageHero
        eyebrow={`${industry.name} Quotations`}
        title={industry.h1}
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Industries', path: '/industries' },
          { name: industry.name, path: `/industries/${industry.slug}` },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href={createHref} className="btn-primary">
            <Sparkles className="h-4 w-4" /> Create {industry.name} Quotation
          </Link>
          <Link href="/templates" className="btn-secondary">
            Browse templates <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </PageHero>

      <div className="container grid gap-12 py-16 lg:grid-cols-[1fr_360px]">
        <article className="min-w-0 space-y-14">
          {/* Intro */}
          <section className="prose-quote">
            {industry.intro.split('\n\n').map((p, i) => (
              <p key={i} className="mb-4 text-lg leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </section>

          {/* Benefits */}
          <section>
            <h2 className="font-display text-2xl font-bold">
              Benefits of using our {industry.name.toLowerCase()} quotation maker
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {industry.benefits.map((b) => (
                <div key={b.title} className="glass-card p-5">
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-emerald-500" />
                    <h3 className="font-semibold">{b.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{b.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How to use */}
          <section>
            <h2 className="font-display text-2xl font-bold">
              How to create a {industry.name.toLowerCase()} quotation
            </h2>
            <ol className="mt-6 space-y-4">
              {industry.howToUse.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="pt-1 text-muted-foreground">{step}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* Sample items */}
          <section>
            <h2 className="font-display text-2xl font-bold">Common {industry.name.toLowerCase()} line items</h2>
            <p className="mt-2 text-muted-foreground">
              Typical items and services you can add — with example HSN/SAC codes used in this trade.
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
              <table className="w-full min-w-[420px] text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/40 text-left text-xs uppercase tracking-wide text-muted-foreground">
                    <th className="px-4 py-3">Item / Service</th>
                    <th className="px-4 py-3">Unit</th>
                    <th className="px-4 py-3">HSN/SAC</th>
                  </tr>
                </thead>
                <tbody>
                  {industry.sampleItems.map((item, i) => (
                    <tr key={i} className="border-b border-border/60 last:border-0">
                      <td className="px-4 py-3 font-medium">{item.description}</td>
                      <td className="px-4 py-3 text-muted-foreground">{item.unit}</td>
                      <td className="px-4 py-3 text-muted-foreground">{item.hsn ?? '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Link href={createHref} className="btn-primary mt-6">
              Start with these items <ArrowRight className="h-4 w-4" />
            </Link>
          </section>

          {/* Why choose us */}
          <section>
            <h2 className="font-display text-2xl font-bold">Why choose QuotationMaker.in</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {industry.whyChooseUs.map((w) => (
                <li key={w} className="flex items-start gap-3 text-sm">
                  <Star className="mt-0.5 h-4 w-4 flex-shrink-0 fill-amber-400 text-amber-400" />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Tips */}
          <section className="rounded-3xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
            <div className="flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-primary" />
              <h2 className="font-display text-2xl font-bold">Expert {industry.name.toLowerCase()} tips</h2>
            </div>
            <ul className="mt-5 space-y-3">
              {industry.tips.map((tip) => (
                <li key={tip} className="flex items-start gap-3 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Mistakes & Best practices */}
          <section className="grid gap-6 md:grid-cols-2">
            <div className="glass-card p-6">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                <h2 className="font-display text-xl font-bold">Common mistakes to avoid</h2>
              </div>
              <ul className="mt-4 space-y-2.5">
                {industry.commonMistakes.map((m) => (
                  <li key={m} className="text-sm text-muted-foreground">• {m}</li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-6">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-emerald-500" />
                <h2 className="font-display text-xl font-bold">Best practices</h2>
              </div>
              <ul className="mt-4 space-y-2.5">
                {industry.bestPractices.map((m) => (
                  <li key={m} className="text-sm text-muted-foreground">• {m}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Download guide */}
          <section className="rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 p-6 sm:p-8">
            <div className="flex items-center gap-2">
              <FileDown className="h-6 w-6 text-primary" />
              <h2 className="font-display text-2xl font-bold">Download your quotation</h2>
            </div>
            <p className="mt-3 text-muted-foreground">{industry.downloadGuide}</p>
            <Link href={createHref} className="btn-primary mt-5">
              Create &amp; download now <ArrowRight className="h-4 w-4" />
            </Link>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="mb-6 font-display text-2xl font-bold">
              {industry.name} quotation — frequently asked questions
            </h2>
            <Faq items={industry.faqs} />
          </section>
        </article>

        {/* Sidebar */}
        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="glass-card p-5">
            <h3 className="text-sm font-semibold text-muted-foreground">Recommended template</h3>
            <div className="mt-3">
              <TemplateThumb template={template} />
            </div>
            <Link href={createHref} className="btn-primary mt-4 w-full text-sm">
              Use {template.name} template
            </Link>
          </div>

          <div className="glass-card p-5">
            <h3 className="text-sm font-semibold">Related quotation makers</h3>
            <ul className="mt-3 space-y-1.5">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/industries/${r.slug}`}
                    className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                  >
                    <Icon name={r.icon} className="h-4 w-4" /> {r.h1}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* Related industries CTA row */}
      <section className="border-t border-border/60 bg-muted/30 py-16">
        <div className="container">
          <h2 className="text-center font-display text-2xl font-bold">Explore more industries</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/industries/${r.slug}`}
                className="glass-card group flex items-center gap-3 p-4 hover:border-primary/40"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon name={r.icon} className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold">{r.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
