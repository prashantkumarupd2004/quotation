import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        /*
         * Keep crawl budget on real content.
         *
         * `/offline`, `/dashboard` and `/q/` are deliberately NOT disallowed here:
         * they each serve `noindex`, and a crawler has to be able to fetch a page
         * to see that directive. Blocking them in robots.txt would leave Google
         * unable to read the noindex, which is exactly how a blocked URL ends up
         * indexed with no snippet.
         */
        disallow: ['/api/', '/_next/', '/sw.js'],
      },
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Googlebot-Image', allow: '/' },
      { userAgent: 'Bingbot', allow: '/' },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
