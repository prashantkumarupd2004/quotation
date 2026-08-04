import type { Metadata } from 'next';
import { siteConfig } from './site';

interface SeoParams {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
  /**
   * Set on editorial pages so the OG type is `article` rather than `website`.
   * Facebook, LinkedIn and X all surface the byline and date from these, and
   * Google uses them as a corroborating freshness signal alongside the Article
   * JSON-LD.
   */
  article?: { publishedTime: string; modifiedTime?: string; section?: string; tags?: readonly string[] };
}

/** Build a fully-formed Next.js Metadata object with OG + Twitter + canonical. */
export function buildMetadata({
  title,
  description,
  path = '/',
  keywords,
  ogImage,
  noIndex = false,
  article,
}: SeoParams = {}): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} — ${siteConfig.tagline}`;
  const desc = description ?? siteConfig.description;
  const url = `${siteConfig.url}${path === '/' ? '' : path}`;
  const image = ogImage ?? siteConfig.ogImage;
  const images = [{ url: image, width: 1200, height: 630, alt: fullTitle }];

  return {
    title: fullTitle,
    description: desc,
    keywords: keywords ?? [...siteConfig.keywords],
    metadataBase: new URL(siteConfig.url),
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.author, url: siteConfig.url }],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    category: 'Business Software',
    // Stop iOS Safari auto-linking numbers in the quotation preview (it turns
    // amounts and GSTINs into phone links). Email/address detection is left on
    // so contact details elsewhere on the site stay tappable.
    formatDetection: { telephone: false },
    alternates: {
      canonical: url,
      languages: { [siteConfig.language]: url, 'x-default': url },
    },
    robots: noIndex
      ? { index: false, follow: false, nocache: true }
      : {
          index: true,
          follow: true,
          'max-image-preview': 'large',
          'max-snippet': -1,
          'max-video-preview': -1,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
    openGraph: {
      ...(article
        ? {
            type: 'article' as const,
            publishedTime: article.publishedTime,
            modifiedTime: article.modifiedTime ?? article.publishedTime,
            authors: [siteConfig.operator.name],
            ...(article.section ? { section: article.section } : {}),
            ...(article.tags?.length ? { tags: [...article.tags] } : {}),
          }
        : { type: 'website' as const }),
      locale: siteConfig.locale,
      url,
      title: fullTitle,
      description: desc,
      siteName: siteConfig.name,
      images,
    },
    // No site/creator handle is declared — we don't run a verified X account, and
    // pointing the tag at a handle we don't own would be a false attribution.
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: desc,
      images: images.map((i) => i.url),
    },
    // Only emitted when a token is set in siteConfig — safe to leave blank.
    ...(siteConfig.googleSiteVerification
      ? { verification: { google: siteConfig.googleSiteVerification } }
      : {}),
  };
}
