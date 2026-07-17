import type { BlogPost } from '@/data/blog-types';
import { blogPosts1 } from './group-1';
import { blogPosts2 } from './group-2';
import { blogPosts3 } from './group-3';
import { blogPosts4 } from './group-4';
import { blogPosts5 } from './group-5';
import { blogPosts6 } from './group-6';

export const blogPosts: BlogPost[] = [...blogPosts1, ...blogPosts2, ...blogPosts3, ...blogPosts4, ...blogPosts5, ...blogPosts6].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const post = getPostBySlug(slug);
  if (!post) return blogPosts.slice(0, limit);
  const related = post.relatedSlugs
    .map((s) => getPostBySlug(s))
    .filter((p): p is BlogPost => Boolean(p) && p!.slug !== slug);
  if (related.length >= limit) return related.slice(0, limit);
  const fill = blogPosts.filter((p) => p.slug !== slug && !related.includes(p));
  return [...related, ...fill].slice(0, limit);
}
