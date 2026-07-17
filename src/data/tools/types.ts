import type { DocumentTypeId } from '@/types/document';

/**
 * SEO landing content for one document generator tool. Every tool page renders
 * this structure below its builder — the copy itself must be unique per tool
 * (no shared sentences), written for that document's real-world context.
 */
export interface ToolContent {
  id: DocumentTypeId;
  seo: {
    /** <title> without the site suffix. */
    title: string;
    description: string;
    keywords: string[];
  };
  /** Unique H1 shown above the builder. */
  h1: string;
  /** Sub-heading under the H1. */
  intro: string;
  /** "What is a …" section — 2–4 paragraphs. */
  whatIs: { heading: string; paragraphs: string[] };
  /** How-to steps (also emitted as HowTo schema). */
  howTo: { heading: string; steps: { title: string; text: string }[] };
  /** Feature bullets specific to this tool. */
  features: { heading: string; items: { title: string; text: string }[] };
  /** Real-world use cases. */
  useCases: { heading: string; intro: string; items: { title: string; text: string }[] };
  /** A worked example described in prose + a small breakdown table. */
  example: {
    heading: string;
    intro: string;
    rows: { label: string; value: string }[];
    outro: string;
  };
  /** Long-form guidance sections (formats, legal notes, best practices…). */
  sections: { heading: string; paragraphs: string[] }[];
  /** Unique FAQs (emitted as FAQ schema). */
  faqs: { q: string; a: string }[];
  /** Slugs of related tools to interlink (paths come from the registry). */
  related: DocumentTypeId[];
}
