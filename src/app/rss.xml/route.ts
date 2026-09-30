import { blogPosts } from '@/data/blog';
import { siteConfig } from '@/lib/site';

/** Minimal XML escaping for text nodes (titles/descriptions ride in CDATA). */
function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/**
 * RSS 2.0 feed of every published guide, newest first.
 * Gives feed readers, aggregators and Google's discovery systems one
 * canonical place to watch for new content.
 */
export async function GET() {
  const items = [...blogPosts]
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .map(
      (p) => `    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${siteConfig.url}/blog/${p.slug}</link>
      <guid isPermaLink="true">${siteConfig.url}/blog/${p.slug}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description><![CDATA[${p.metaDescription}]]></description>
${p.keywords.map((k) => `      <category>${esc(k)}</category>`).join('\n')}
    </item>`,
    )
    .join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${siteConfig.name} — Business Guides]]></title>
    <link>${siteConfig.url}/blog</link>
    <description><![CDATA[Practical, India-focused guides on writing quotations, GST invoice rules, pricing services and getting paid on time.]]></description>
    <language>en-IN</language>
    <atom:link href="${siteConfig.url}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      // Fresh enough for readers, cheap for the server.
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}
