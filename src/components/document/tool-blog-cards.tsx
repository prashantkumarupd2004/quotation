import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/blog';

/**
 * Renders 2–3 related blog article cards at the bottom of a tool page.
 * Fetched server-side from the blog data — no API call, no loading state.
 */
export function ToolBlogCards({ slugs }: { slugs: string[] }) {
  const posts = slugs
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter(Boolean)
    .slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section>
      <h2 className="font-display text-2xl font-bold">Related Guides &amp; Articles</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Learn more about this document type and best practices for Indian businesses.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => {
          if (!post) return null;
          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-card p-5 transition-all duration-200 hover:border-primary/40 hover:shadow-md"
            >
              {/* Category pill */}
              <span className="mb-3 inline-flex w-fit rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                {post.category}
              </span>

              {/* Title */}
              <h3 className="line-clamp-2 font-semibold leading-snug transition-colors group-hover:text-primary">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>

              {/* Meta */}
              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(post.date).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readingTime} min read
                  </span>
                </div>
                <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
