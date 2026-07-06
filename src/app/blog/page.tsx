import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { blogPosts } from '@/data/blog';
import { PageHero } from '@/components/layout/page-hero';
import { Reveal } from '@/components/ui/reveal';
import { JsonLd } from '@/components/json-ld';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { formatDate } from '@/lib/format';

export const metadata: Metadata = buildMetadata({
  title: 'Blog — Quotation & Business Guides for Indian Businesses',
  description:
    'Practical guides on writing quotations, GST, pricing, proposals and small-business documentation. Learn how to quote better and win more clients.',
  path: '/blog',
  keywords: ['quotation blog', 'how to write a quotation', 'gst guide', 'freelancer pricing', 'business documentation'],
});

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
        ])}
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

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.05}>
              <Link href={`/blog/${post.slug}`} className="glass-card group flex h-full flex-col p-6">
                <span className="w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {post.category}
                </span>
                <h2 className="mt-3 font-display text-lg font-bold group-hover:text-primary">
                  {post.title}
                </h2>
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
    </>
  );
}
