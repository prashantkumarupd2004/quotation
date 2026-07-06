import { siteConfig } from './site';

type Json = Record<string, unknown>;

const ORG_ID = `${siteConfig.url}/#organization`;
const WEBSITE_ID = `${siteConfig.url}/#website`;

export function organizationSchema(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/icon.svg`,
    },
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    description: siteConfig.description,
    foundingDate: siteConfig.foundingDate,
    email: siteConfig.contactEmail,
    areaServed: { '@type': 'Country', name: 'India' },
    knowsLanguage: ['en-IN', 'hi-IN'],
    sameAs: [
      'https://twitter.com/quotationmaker',
      'https://www.facebook.com/quotationmaker',
      'https://www.linkedin.com/company/quotationmaker',
      'https://www.instagram.com/quotationmaker',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteConfig.contactEmail,
      contactType: 'customer support',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
  };
}

/** Sitewide WebSite node — powers the site-name treatment in Google SERPs. */
export function websiteSchema(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: siteConfig.name,
    alternateName: siteConfig.tagline,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    publisher: { '@id': ORG_ID },
  };
}

export function webAppSchema(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: siteConfig.name,
    url: siteConfig.url,
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Quotation & Invoicing Software',
    operatingSystem: 'Any (Web, Android, iOS, Windows, macOS)',
    browserRequirements: 'Requires JavaScript. Works in any modern browser.',
    softwareVersion: '1.0',
    inLanguage: siteConfig.language,
    isAccessibleForFree: true,
    screenshot: `${siteConfig.url}${siteConfig.ogImage}`,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
    description: siteConfig.description,
    featureList: [
      'GST quotation maker with automatic CGST, SGST and IGST calculation',
      '15+ professional, print-ready quotation templates',
      'Instant PDF and PNG download',
      'Live preview while you edit',
      'Add company logo, signature, stamp and QR code',
      'Multi-currency support',
      'Amount in words and automatic round-off',
      'Autosave, undo/redo and offline PWA support',
      'No signup required — 100% free',
    ],
    publisher: { '@id': ORG_ID },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '2184',
      bestRating: '5',
      worstRating: '1',
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path === '/' ? '' : item.path}`,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function howToSchema(name: string, steps: string[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    totalTime: 'PT30S',
    step: steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: `Step ${i + 1}`,
      text: step,
    })),
  };
}

export function articleSchema(params: {
  title: string;
  description: string;
  path: string;
  date: string;
}): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: params.title,
    description: params.description,
    datePublished: params.date,
    dateModified: params.date,
    author: { '@type': 'Organization', name: siteConfig.name },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: { '@type': 'ImageObject', url: `${siteConfig.url}/icon.svg` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteConfig.url}${params.path}` },
  };
}
