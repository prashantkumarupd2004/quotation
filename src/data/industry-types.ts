export interface IndustryFaq {
  q: string;
  a: string;
}

export interface IndustryBenefit {
  title: string;
  description: string;
}

export interface IndustrySampleItem {
  description: string;
  unit: string;
  hsn?: string;
}

export interface Industry {
  /** URL slug, e.g. 'construction-quotation-maker'. */
  slug: string;
  /** Short name, e.g. 'Construction'. */
  name: string;
  /** Page H1, e.g. 'Construction Quotation Maker'. */
  h1: string;
  seoTitle: string;
  metaDescription: string;
  keywords: string[];
  /** lucide-react icon name (PascalCase), e.g. 'HardHat'. */
  icon: string;
  accent: string; // hex color
  /** Template id from src/lib/templates.ts used to prefill the builder. */
  templateId: string;
  /** 2-3 paragraph introduction (plain text, paragraphs separated by \n\n). */
  intro: string;
  /** Exactly 6 benefits. */
  benefits: IndustryBenefit[];
  /** Step-by-step usage guide (5-6 steps). */
  howToUse: string[];
  /** Reasons to choose this tool for this industry (4-6). */
  whyChooseUs: string[];
  /** Industry-specific practical tips (5-7). */
  tips: string[];
  /** Common mistakes to avoid (5-6). */
  commonMistakes: string[];
  /** Best practices (5-6). */
  bestPractices: string[];
  /** A short closing "download guide" paragraph. */
  downloadGuide: string;
  faqs: IndustryFaq[]; // 6-8
  /** Realistic sample line items for this trade (4-6). */
  sampleItems: IndustrySampleItem[];
  /** Slugs of 3-4 related industries for internal linking. */
  relatedSlugs: string[];
}
