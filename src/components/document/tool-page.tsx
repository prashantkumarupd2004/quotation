import Link from 'next/link';
import { Suspense } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import type { DocumentTypeId } from '@/types/document';
import type { ToolContent } from '@/data/tools/types';
import { getDocumentType, DOCUMENT_TYPE_LIST } from '@/lib/document-types';
import { JsonLd } from '@/components/json-ld';
import { Faq } from '@/components/ui/faq';
import { Icon } from '@/components/ui/icon';
import { Reveal } from '@/components/ui/reveal';
import { DocumentBuilder } from '@/components/document/document-builder';
import { breadcrumbSchema, faqSchema, howToSchema, webAppSchema } from '@/lib/schema';

/**
 * Server-rendered tool landing page: unique H1 + intro, the builder, then
 * 1000+ words of tool-specific content (what-is, how-to, features, use cases,
 * a worked example, guidance sections, FAQs) and internal links. All copy
 * comes from the per-tool content file in data/tools.
 */
export function ToolPage({ content }: { content: ToolContent }) {
  const config = getDocumentType(content.id);

  return (
    <>
      <JsonLd
        data={[
          webAppSchema(),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: config.label, path: config.path },
          ]),
          howToSchema(content.howTo.heading, content.howTo.steps.map((s) => s.text)),
          faqSchema(content.faqs),
        ]}
      />

      {/* H1 + intro */}
      <section className="border-b border-border/60 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="mx-auto max-w-4xl px-4 pb-8 pt-12 text-center sm:px-6">
          <h1 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">{content.h1}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{content.intro}</p>
        </div>
      </section>

      {/* Builder */}
      <Suspense fallback={<BuilderSkeleton />}>
        <DocumentBuilder docType={content.id} />
      </Suspense>

      {/* ---------- SEO content ---------- */}
      <div className="mx-auto max-w-4xl space-y-16 px-4 pb-20 sm:px-6">
        <Reveal>
          <section>
            <h2 className="font-display text-2xl font-bold">{content.whatIs.heading}</h2>
            {content.whatIs.paragraphs.map((p, i) => (
              <p key={i} className="mt-4 leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="font-display text-2xl font-bold">{content.howTo.heading}</h2>
            <ol className="mt-6 space-y-4">
              {content.howTo.steps.map((s, i) => (
                <li key={i} className="flex gap-4">
                  <span className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="font-display text-2xl font-bold">{content.features.heading}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {content.features.items.map((f, i) => (
                <div key={i} className="rounded-2xl border border-border bg-card p-5">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 flex-shrink-0 text-primary" />
                    <h3 className="font-semibold">{f.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="font-display text-2xl font-bold">{content.useCases.heading}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{content.useCases.intro}</p>
            <div className="mt-6 space-y-4">
              {content.useCases.items.map((u, i) => (
                <div key={i} className="rounded-2xl border border-border bg-card p-5">
                  <h3 className="font-semibold">{u.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{u.text}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="font-display text-2xl font-bold">{content.example.heading}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{content.example.intro}</p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-border">
                  {content.example.rows.map((r, i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-muted/30' : undefined}>
                      <td className="px-5 py-3 font-medium">{r.label}</td>
                      <td className="px-5 py-3 text-right text-muted-foreground">{r.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 leading-relaxed text-muted-foreground">{content.example.outro}</p>
          </section>
        </Reveal>

        {content.sections.map((sec, i) => (
          <Reveal key={i}>
            <section>
              <h2 className="font-display text-2xl font-bold">{sec.heading}</h2>
              {sec.paragraphs.map((p, j) => (
                <p key={j} className="mt-4 leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </section>
          </Reveal>
        ))}

        <Reveal>
          <section>
            <h2 className="mb-8 text-center font-display text-2xl font-bold">Frequently Asked Questions</h2>
            <Faq items={content.faqs} />
          </section>
        </Reveal>

        {/* Internal links */}
        <Reveal>
          <section>
            <h2 className="font-display text-2xl font-bold">Explore More Free Business Document Tools</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {content.related.map((id) => {
                const t = getDocumentType(id);
                return (
                  <Link
                    key={id}
                    href={t.path}
                    className="group rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Icon name={t.icon} className="h-5 w-5" />
                    </span>
                    <span className="mt-3 flex items-center gap-1 font-semibold">
                      {t.label}
                      <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                    </span>
                    <span className="mt-1 block text-sm text-muted-foreground">{t.tagline}</span>
                  </Link>
                );
              })}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              All {DOCUMENT_TYPE_LIST.length} tools are free, work in your browser and share the same fast editor —{' '}
              <Link href="/" className="font-medium text-primary hover:underline">
                see the full list on the homepage
              </Link>
              .
            </p>
          </section>
        </Reveal>
      </div>
    </>
  );
}

function BuilderSkeleton() {
  return (
    <div className="mx-auto max-w-[1600px] px-4 pt-6 sm:px-6" aria-busy>
      <div className="mb-5 h-14 animate-pulse rounded-2xl bg-muted" />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="space-y-5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-48 animate-pulse rounded-2xl bg-muted" />
          ))}
        </div>
        <div className="hidden h-[560px] animate-pulse rounded-2xl bg-muted lg:block" />
      </div>
    </div>
  );
}
