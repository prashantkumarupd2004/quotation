import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';
import { industries } from '@/data/industries';
import { blogPosts } from '@/data/blog';
import { DOCUMENT_TYPE_LIST } from '@/lib/document-types';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  /*
   * Only pages that are genuinely worth a search result belong here.
   * Deliberately excluded: /dashboard (private, per-browser), /q/[id] (private
   * share links) and /offline (a PWA fallback) — all three serve `noindex`.
   */
  const staticRoutes: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '/', priority: 1, freq: 'weekly' },
    { path: '/create', priority: 0.95, freq: 'monthly' },
    { path: '/tools', priority: 0.9, freq: 'monthly' },
    { path: '/templates', priority: 0.9, freq: 'monthly' },
    { path: '/industries', priority: 0.85, freq: 'monthly' },
    { path: '/blog', priority: 0.8, freq: 'weekly' },
    { path: '/features', priority: 0.7, freq: 'monthly' },
    { path: '/about', priority: 0.6, freq: 'monthly' },
    { path: '/contact', priority: 0.5, freq: 'yearly' },
    { path: '/pricing', priority: 0.5, freq: 'monthly' },
    // Trust pages. Low priority, but they must be crawlable and indexable —
    // an AdSense reviewer looks for them, and so do users checking legitimacy.
    { path: '/privacy', priority: 0.35, freq: 'yearly' },
    { path: '/terms', priority: 0.35, freq: 'yearly' },
    { path: '/disclaimer', priority: 0.35, freq: 'yearly' },
    { path: '/cookies', priority: 0.3, freq: 'yearly' },
    { path: '/refund-policy', priority: 0.3, freq: 'yearly' },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${base}${r.path === '/' ? '' : r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));

  // Every document generator tool page, straight from the registry.
  const toolEntries: MetadataRoute.Sitemap = DOCUMENT_TYPE_LIST.filter((t) => t.id !== 'quotation').map((t) => ({
    url: `${base}${t.path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const industryEntries: MetadataRoute.Sitemap = industries.map((i) => ({
    url: `${base}/industries/${i.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  /*
   * Recent posts get a higher priority and a weekly crawl hint — a brand-new
   * guide buried at 0.65 alongside a year-old one gives Google no reason to
   * revisit. Anything published in the last 60 days counts as recent.
   */
  const RECENT_WINDOW_MS = 60 * 24 * 60 * 60 * 1000;
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((p) => {
    const published = new Date(p.date);
    const isRecent = now.getTime() - published.getTime() < RECENT_WINDOW_MS;
    return {
      url: `${base}/blog/${p.slug}`,
      lastModified: published,
      changeFrequency: isRecent ? 'weekly' : 'monthly',
      priority: isRecent ? 0.8 : 0.65,
    };
  });

  return [...staticEntries, ...toolEntries, ...industryEntries, ...blogEntries];
}
