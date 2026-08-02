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
  /** Typical Indian market rate in INR for one `unit`. */
  rate: number;
  /** Quantity used in this trade's worked example quotation. */
  qty: number;
}

/**
 * The demo business shown in each industry's preview quotation. Every trade gets
 * its own firm, city and client so no two industry pages render the same
 * document — a single shared demo was previously repeated across all 20.
 */
export interface IndustryParty {
  company: string;
  /** Multi-line postal address. */
  address: string;
  /** State code must match the address city. */
  gstin: string;
  phone: string;
  email: string;
  clientName: string;
  clientCompany: string;
  clientAddress: string;
  /** Trade-specific note printed under the items table. */
  note: string;
  /** Numbered terms for this trade. Generic terms would repeat across all 20 pages. */
  terms: string[];
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
  /** The demo firm and client used in this page's preview quotation. */
  demo: IndustryParty;
  /** Slugs of 3-4 related industries for internal linking. */
  relatedSlugs: string[];
}
