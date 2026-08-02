import Link from 'next/link';
import { Suspense } from 'react';
import { ArrowRight } from 'lucide-react';
import type { ToolContent, SectionKey } from '@/data/tools/types';
import { TOOL_THEMES } from '@/data/tools/themes';
import { getDocumentType } from '@/lib/document-types';
import { JsonLd } from '@/components/json-ld';
import { Faq } from '@/components/ui/faq';
import { Icon } from '@/components/ui/icon';
import { Reveal } from '@/components/ui/reveal';
import { DocumentBuilder } from '@/components/document/document-builder';
import { breadcrumbSchema, faqSchema, howToSchema } from '@/lib/schema';
import { ToolPageWidget } from '@/components/document/tool-page-widget';
import { ToolBlogCards } from '@/components/document/tool-blog-cards';
import { ToolHero } from '@/components/document/tool-hero';
import { ToolCustomBlockView } from '@/components/document/tool-custom-block';
import {
  ExampleSection,
  FeaturesSection,
  GuidanceSections,
  HowToSection,
  SectionHeading,
  UseCasesSection,
  WhatIsSection,
} from '@/components/document/tool-sections';
import { cn } from '@/lib/utils';

/**
 * Server-rendered tool landing page. The hero, the section order and every
 * section's layout come from the tool's own content file, so each generator
 * presents its material in its own shape rather than through one shared
 * template.
 */
export function ToolPage({ content }: { content: ToolContent }) {
  const config = getDocumentType(content.id);
  const theme = TOOL_THEMES[content.theme];

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Tools', path: '/tools' },
    { name: config.shortName, path: config.path },
  ];

  const renderSection = (key: SectionKey) => {
    switch (key) {
      case 'widget':
        return content.widget ? <ToolPageWidget widget={content.widget} /> : null;
      case 'whatIs':
        return <WhatIsSection content={content} theme={theme} />;
      case 'howTo':
        return <HowToSection content={content} theme={theme} />;
      case 'features':
        return <FeaturesSection content={content} theme={theme} />;
      case 'useCases':
        return <UseCasesSection content={content} theme={theme} />;
      case 'example':
        return <ExampleSection content={content} theme={theme} />;
      case 'sections':
        return <GuidanceSections content={content} theme={theme} />;
      case 'custom':
        return content.customBlocks?.length ? (
          <div className="space-y-16">
            {content.customBlocks.map((block, i) => (
              <ToolCustomBlockView key={i} block={block} theme={theme} />
            ))}
          </div>
        ) : null;
      case 'faq':
        return (
          <section>
            <h2 className="mb-8 text-center font-display text-2xl font-bold">
              Frequently Asked Questions
            </h2>
            <Faq items={content.faqs} />
          </section>
        );
      case 'blogs':
        return content.relatedBlogSlugs?.length ? (
          <ToolBlogCards slugs={content.relatedBlogSlugs} />
        ) : null;
      case 'related':
        return (
          <section>
            <SectionHeading theme={theme}>{content.relatedHeading}</SectionHeading>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {content.related.map((id) => {
                const t = getDocumentType(id);
                return (
                  <Link
                    key={id}
                    href={t.path}
                    className={cn(
                      'group rounded-2xl border bg-card p-5 transition-colors',
                      theme.border,
                      theme.cardHover,
                    )}
                  >
                    <span className={cn('grid h-9 w-9 place-items-center rounded-xl', theme.iconChip)}>
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
              {content.relatedNote}{' '}
              <Link href="/tools" className={cn('font-medium hover:underline', theme.text)}>
                See all tools and when to use each one
              </Link>
              .
            </p>
          </section>
        );
    }
  };

  return (
    <>
      <JsonLd
        data={[
          // No webAppSchema() here — the root layout already emits one sitewide,
          // and a second SoftwareApplication node on the same page is a duplicate.
          breadcrumbSchema(crumbs),
          howToSchema(content.howTo.heading, content.howTo.steps.map((s) => s.text)),
          faqSchema(content.faqs),
        ]}
      />

      <ToolHero content={content} crumbs={crumbs} />

      <Suspense fallback={<BuilderSkeleton />}>
        <DocumentBuilder docType={content.id} />
      </Suspense>

      <div className="mx-auto max-w-4xl space-y-16 px-4 pb-20 pt-16 sm:px-6">
        {content.order.map((key) => {
          const node = renderSection(key);
          return node ? <Reveal key={key}>{node}</Reveal> : null;
        })}
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
