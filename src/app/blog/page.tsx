import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { PageHero } from "@/components/layout/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { JsonLd } from "@/components/json-ld";
import { buildMetadata } from "@/lib/seo";
import { blogSchema, breadcrumbSchema } from "@/lib/schema";
import { formatDate } from "@/lib/format";
import { BlogFilter } from "@/components/ui/blog-filter";

export const metadata: Metadata = buildMetadata({
  title: "Business Guides — Quotations, GST, Invoicing & Payments in India",
  description:
    "Practical, India-focused guides on writing quotations, GST invoice rules, pricing your services, recovering late payments and keeping business records. Written for small businesses and freelancers.",
  path: "/blog",
  keywords: [
    "quotation guide India",
    "gst invoice rules",
    "how to write a quotation",
    "small business documentation",
    "late payment recovery MSME",
    "service pricing guide",
  ],
});

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  // Unique categories in order of first appearance
  const categories = [...new Set(blogPosts.map((p) => p.category))];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
          blogSchema(blogPosts),
        ]}
      />
      <PageHero
        eyebrow="Blog"
        title="Guides to quote smarter and grow faster"
        description="Expert, India-focused advice on quotations, GST, pricing and running a professional service business."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />

      <section className="container py-16">
        {/* Featured post */}
        <Reveal>
          <Link
            href={`/blog/${featured.slug}`}
            className="glass-card group grid gap-6 overflow-hidden p-6 sm:p-8 lg:grid-cols-2 lg:items-center"
          >
            {featured.heroImage ? (
              <div className="overflow-hidden rounded-2xl border border-border">
                <Image
                  src={featured.heroImage}
                  alt={featured.heroAlt ?? featured.title}
                  width={800}
                  height={500}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            ) : (
              <div className="flex aspect-[16/10] items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent p-8 text-center">
                <span className="font-display text-2xl font-extrabold text-white text-balance">
                  {featured.title}
                </span>
              </div>
            )}
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
                {featured.author ? (
                  <span className="flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5" /> {featured.author}
                  </span>
                ) : null}
              </div>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Read article{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </Reveal>

        {/* Category-filterable grid */}
        <div className="mt-14">
          <BlogFilter posts={rest} categories={categories} />
        </div>
      </section>
    </>
  );
}
