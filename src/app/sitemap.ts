import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';
import { industries } from '@/data/industries';
import { blogPosts } from '@/data/blog';
import { DOCUMENT_TYPE_LIST } from '@/lib/document-types';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '/', priority: 1, freq: 'weekly' },
    { path: '/create', priority: 0.95, freq: 'monthly' },
    { path: '/templates', priority: 0.9, freq: 'monthly' },
    { path: '/industries', priority: 0.85, freq: 'monthly' },
    { path: '/features', priority: 0.7, freq: 'monthly' },
    { path: '/blog', priority: 0.8, freq: 'weekly' },
    { path: '/pricing', priority: 0.5, freq: 'monthly' },
    { path: '/about', priority: 0.4, freq: 'yearly' },
    { path: '/contact', priority: 0.4, freq: 'yearly' },
    { path: '/privacy', priority: 0.3, freq: 'yearly' },
    { path: '/terms', priority: 0.3, freq: 'yearly' },
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

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly',
    priority: 0.65,
  }));

  return [...staticEntries, ...toolEntries, ...industryEntries, ...blogEntries];
}
