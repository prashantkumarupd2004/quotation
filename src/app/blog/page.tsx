import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { blogPosts } from '@/data/blog';
import { PageHero } from '@/components/layout/page-hero';
import { Reveal } from '@/components/ui/reveal';
import { JsonLd } from '@/components/json-ld';
import { buildMetadata } from '@/lib/seo';
import { blogSchema, breadcrumbSchema } from '@/lib/schema';
import { formatDate } from '@/lib/format';

export const metadata: Metadata = buildMetadata({
  title: 'Business Guides — Quotations, GST, Invoicing & Payments in India',
  description:
    'Practical, India-focused guides on writing quotations, GST invoice rules, pricing your services, recovering late payments and keeping business records. Written for small businesses and freelancers.',
  path: '/blog',
  keywords: [
    'quotation guide India',
    'gst invoice rules',
    'how to write a quotation',
    'small business documentation',
    'late payment recovery MSME',
    'service pricing guide',
  ],
});

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  // Group by category so a 40-post archive reads as a structured library rather
  // than an undifferentiated grid. Order follows first appearance, which keeps
  // the newest categories near the top without a hand-maintained list.
  const byCategory = rest.reduce<Map<string, typeof rest>>((acc, post) => {
    const bucket = acc.get(post.category);
    if (bucket) bucket.push(post);
    else acc.set(post.category, [post]);
    return acc;
  }, new Map());

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
          ]),
          blogSchema(blogPosts),
        ]}
      />
      <PageHero
        eyebrow="Blog"
        title="Guides to quote smarter and grow faster"
        description="Expert, India-focused advice on quotations, GST, pricing and running a professional service business."
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
        ]}
      />

      <section className="container py-16">
        {/* Featured */}
        <Reveal>
          <Link
            href={`/blog/${featured.slug}`}
            className="glass-card group grid gap-6 overflow-hidden p-6 sm:p-8 lg:grid-cols-2 lg:items-center"
          >
            <div className="flex aspect-[16/10] items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent p-8 text-center">
              <span className="font-display text-2xl font-extrabold text-white text-balance">
                {featured.title}
              </span>
            </div>
            <div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {featured.category}
              </span>
              <h2 className="mt-3 font-display text-2xl font-bold group-hover:text-primary">
                {featured.title}
              </h2>
              <p className="mt-3 text-muted-foreground">{featured.excerpt}</p>
              <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" /> {formatDate(featured.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> {featured.readingTime} min read
                </span>
              </div>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </Reveal>

        {/* Grid, grouped by topic */}
        {[...byCategory.entries()].map(([category, posts]) => (
          <section key={category} className="mt-14">
            <h2 className="font-display text-xl font-bold">{category}</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {posts.length} guide{posts.length === 1 ? '' : 's'}
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <Reveal key={post.slug} delay={(i % 3) * 0.05}>
                  <Link href={`/blog/${post.slug}`} className="glass-card group flex h-full flex-col p-6">
                    <span className="w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {post.category}
                    </span>
                    <h3 className="mt-3 font-display text-lg font-bold group-hover:text-primary">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" /> {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" /> {post.readingTime} min
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </section>
        ))}
      </section>
    </>
  );
}
