import type { Metadata } from 'next';
import { siteConfig } from './site';

interface SeoParams {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
}

/** Build a fully-formed Next.js Metadata object with OG + Twitter + canonical. */
export function buildMetadata({
  title,
  description,
  path = '/',
  keywords,
  ogImage,
  noIndex = false,
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
    // Phone/email/address auto-linking hurts the polished quotation preview.
    formatDetection: { telephone: false, email: false, address: false },
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
      type: 'website',
      locale: siteConfig.locale,
      url,
      title: fullTitle,
      description: desc,
      siteName: siteConfig.name,
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: desc,
      images: images.map((i) => i.url),
      site: siteConfig.twitter,
      creator: siteConfig.twitter,
    },
    // Only emitted when a token is set in siteConfig — safe to leave blank.
    ...(siteConfig.googleSiteVerification
      ? { verification: { google: siteConfig.googleSiteVerification } }
      : {}),
  };
}
