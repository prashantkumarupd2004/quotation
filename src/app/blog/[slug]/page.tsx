import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { blogPosts, getPostBySlug } from '@/data/blog';
import { PageHero } from '@/components/layout/page-hero';
import { Faq } from '@/components/ui/faq';
import { JsonLd } from '@/components/json-ld';
import { buildMetadata } from '@/lib/seo';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';
import { relatedPosts, toolForPost } from '@/lib/internal-links';
import { formatDate } from '@/lib/format';
import type { BlogPost } from '@/data/blog-types';

/** Rough word count over the body copy — feeds Article.wordCount. */
function wordCount(post: BlogPost): number {
  const text = [
    post.intro,
    ...post.sections.flatMap((s) => [s.heading, s.body, ...(s.bullets ?? [])]),
    ...post.faqs.flatMap((f) => [f.q, f.a]),
  ].join(' ');
  return text.split(/\s+/).filter(Boolean).length;
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return buildMetadata({ title: 'Article not found', noIndex: true });
  return buildMetadata({
    title: post.seoTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    article: { publishedTime: post.date, section: post.category, tags: post.keywords },
  });}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  // Balanced graph rather than the raw editorial list — see lib/internal-links.
  const related = relatedPosts(post.slug);
  const tool = toolForPost(post.slug);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          articleSchema({
            title: post.title,
            description: post.metaDescription,
            path: `/blog/${post.slug}`,
            date: post.date,
            // Real hero art where the post has it, so the Article node carries an
            // image rather than falling back to the generic social card.
            image: post.heroImage,
            section: post.category,
            keywords: post.keywords,
            wordCount: wordCount(post),
          }),
          ...(post.faqs.length ? [faqSchema(post.faqs)] : []),
        ]}
      />

      <PageHero
        eyebrow={post.category}
        title={post.title}
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: post.category, path: `/blog/${post.slug}` },
        ]}
      >
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" /> {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" /> {post.readingTime} min read
          </span>
        </div>
      </PageHero>

      <div className="container grid grid-cols-1 gap-12 py-16 lg:grid-cols-[minmax(0,1fr)_320px]">
        <article className="min-w-0">
          <p className="text-xl leading-relaxed text-muted-foreground">{post.intro}</p>

          {post.sections.map((section, i) => (
            <section key={i} className="mt-10">
              <h2 className="font-display text-2xl font-bold">{section.heading}</h2>
              {section.body.split('\n\n').map((p, j) => (
                <p key={j} className="mt-4 leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
              {section.bullets?.length ? (
                <ul className="mt-4 space-y-2">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          {post.faqs.length ? (
            <section className="mt-14">
              <h2 className="mb-6 font-display text-2xl font-bold">Frequently asked questions</h2>
              <Faq items={post.faqs} />
            </section>
          ) : null}

          {/* Inline CTA — points at the generator this post is actually about,
              rather than sending every reader to the quotation builder. */}
          <div className="mt-12 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8 text-center">
            <h2 className="font-display text-2xl font-bold">Ready to create your {tool.label.replace(/ (Maker|Generator)$/, '').toLowerCase()}?</h2>
            <p className="mx-auto mt-2 max-w-lg text-muted-foreground">
              Put this into practice — build a professional, GST-ready document for free in under a minute.
            </p>
            <Link href={tool.path} className="btn-primary mt-5">
              Open the {tool.label} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </article>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="glass-card p-5">
            <h3 className="text-sm font-semibold">Related articles</h3>
            <ul className="mt-3 space-y-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/blog/${r.slug}`} className="group block">
                    <span className="text-sm font-medium group-hover:text-primary">{r.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card p-5">
            <h3 className="text-sm font-semibold">Free quotation maker</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              25 templates, automatic GST, instant PDF. No signup.
            </p>
            <Link href="/create" className="btn-primary mt-4 w-full text-sm">
              Start now
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
