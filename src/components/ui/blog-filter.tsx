"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { formatDate } from "@/lib/format";

interface Post {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readingTime: number;
  author: string;
}

interface Props {
  posts: Post[];
  categories: string[];
}

export function BlogFilter({ posts, categories }: Props) {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <div>
      {/* Category pills */}
      <div className="flex flex-wrap gap-2 pb-8 border-b border-border">
        {["All", ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-all ${
              active === cat
                ? "bg-primary text-white shadow-md shadow-primary/25"
                : "border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Post grid */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post, i) => (
          <Reveal key={post.slug} delay={(i % 3) * 0.04}>
            <Link
              href={`/blog/${post.slug}`}
              className="glass-card group flex h-full flex-col p-6"
            >
              <span className="w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {post.category}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold group-hover:text-primary">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-3">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" /> {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> {post.readingTime} min
                </span>
                {post.author ? (
                  <span className="flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5" /> {post.author}
                  </span>
                ) : null}
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Read guide <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-muted-foreground">
          No guides in this category yet.
        </p>
      )}
    </div>
  );
}
