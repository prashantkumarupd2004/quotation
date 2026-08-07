import { siteConfig } from './site';
import { TEMPLATE_COUNT } from './templates';

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
    founder: { '@type': 'Person', name: siteConfig.operator.name },
    // Only profiles that actually exist are declared. Adding placeholder social
    // URLs here would be a false claim about the publisher's identity.
    sameAs: siteConfig.operator.profiles.map((p) => p.url),
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
      `${TEMPLATE_COUNT} professional, print-ready quotation templates`,
      'Instant PDF and PNG download',
      'Live preview while you edit',
      'Add company logo, signature, stamp and QR code',
      'Multi-currency support',
      'Amount in words and automatic round-off',
      'Autosave, undo/redo and offline PWA support',
      'No signup required — 100% free',
    ],
    publisher: { '@id': ORG_ID },
    // No aggregateRating is declared. We do not collect user ratings, so
    // publishing one would be fabricated review data.
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

/**
 * Blog node for the /blog index. Declaring the collection — rather than leaving
 * Google to infer it from a grid of links — is what lets the individual Article
 * nodes on each post be read as part of one publication.
 */
export function blogSchema(posts: { title: string; slug: string; date: string; excerpt: string }[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${siteConfig.url}/blog#blog`,
    name: `${siteConfig.name} Guides`,
    description:
      'Practical guides on quotations, GST, invoicing, payments and business documentation for Indian small businesses.',
    url: `${siteConfig.url}/blog`,
    inLanguage: siteConfig.language,
    publisher: { '@id': ORG_ID },
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      description: p.excerpt,
      datePublished: p.date,
      url: `${siteConfig.url}/blog/${p.slug}`,
      author: { '@type': 'Person', name: siteConfig.operator.name, url: `${siteConfig.url}/about` },
    })),
  };
}

/**
 * HowTo steps. Google retired HowTo rich results, but the markup still helps
 * machine-readable understanding of the page — so we keep it and give each step
 * a real name (the first clause of the instruction) instead of "Step N".
 */
export function howToSchema(name: string, steps: string[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    step: steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: stepName(step),
      text: step,
    })),
  };
}

/** First sentence/clause of an instruction, capped, used as the step name. */
function stepName(step: string): string {
  const first = step.split(/[.,;:]/)[0].trim();
  return first.length > 4 && first.length <= 70 ? first : step.slice(0, 70).trim();
}

/**
 * A hub page that exists to enumerate other pages (/tools, /templates,
 * /industries). Declaring the CollectionPage + its ItemList is what lets Google
 * read the grid as one ordered set rather than a wall of links, and it is the
 * prerequisite for carousel treatment.
 */
export function collectionSchema(params: {
  name: string;
  description: string;
  path: string;
  items: { name: string; path: string }[];
}): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${siteConfig.url}${params.path}#collection`,
    name: params.name,
    description: params.description,
    url: `${siteConfig.url}${params.path}`,
    inLanguage: siteConfig.language,
    isPartOf: { '@id': WEBSITE_ID },
    publisher: { '@id': ORG_ID },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: params.items.length,
      itemListOrder: 'https://schema.org/ItemListUnordered',
      itemListElement: params.items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        url: `${siteConfig.url}${item.path}`,
      })),
    },
  };
}

export function articleSchema(params: {
  title: string;
  description: string;
  path: string;
  date: string;
  /** Last substantive edit, when it differs from publication. */
  updated?: string;
  /** Absolute or root-relative hero image path. */
  image?: string;
  /** Category the article sits under, e.g. 'GST & Tax'. */
  section?: string;
  /** Target keywords, emitted as the Article `keywords` property. */
  keywords?: readonly string[];
  /** Approximate word count — a genuine depth signal for long-form guides. */
  wordCount?: number;
}): Json {
  const image = params.image ?? siteConfig.ogImage;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: params.title,
    description: params.description,
    datePublished: params.date,
    dateModified: params.updated ?? params.date,
    image: image.startsWith('http') ? image : `${siteConfig.url}${image}`,
    ...(params.section ? { articleSection: params.section } : {}),
    ...(params.keywords?.length ? { keywords: params.keywords.join(', ') } : {}),
    ...(params.wordCount ? { wordCount: params.wordCount } : {}),
    // Named human author — anonymous "Organization" authorship is a weak E-E-A-T
    // signal and reviewers look for a real byline.
    author: {
      '@type': 'Person',
      name: siteConfig.operator.name,
      url: `${siteConfig.url}/about`,
    },
    publisher: { '@id': ORG_ID },
    inLanguage: siteConfig.language,
    isAccessibleForFree: true,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteConfig.url}${params.path}` },
  };
}
