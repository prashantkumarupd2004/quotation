export interface BlogSection {
  /** Section heading (rendered as h2). */
  heading: string;
  /** One or more paragraphs. Use plain text; \n\n separates paragraphs. */
  body: string;
  /** Optional bullet list rendered after the body. */
  bullets?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  keywords: string[];
  /** ISO date string, e.g. '2026-01-15'. */
  date: string;
  /** Reading time in minutes. */
  readingTime: number;
  category: string;
  /** One-sentence excerpt for cards and meta. */
  excerpt: string;
  /** Lead paragraph shown under the title. */
  intro: string;
  sections: BlogSection[];
  faqs: { q: string; a: string }[];
  /** Slugs of related posts. */
  relatedSlugs: string[];
}
