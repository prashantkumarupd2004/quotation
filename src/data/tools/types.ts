import type { DocumentTypeId } from '@/types/document';

/**
 * Widget types that can appear as unique interactive sections on a tool page.
 * Each widget is a self-contained component specific to one tool's domain.
 */
export type ToolWidget =
  | 'gst-calculator'
  | 'invoice-vs-receipt'
  | 'estimate-vs-quote'
  | 'proforma-vs-invoice'
  | 'po-workflow'
  | 'challan-checklist'
  | 'payment-modes'
  | 'credit-vs-debit'
  | 'debit-note-steps';

/** Colour identity of a tool page. Keys into TOOL_THEMES in ./themes. */
export type ToolThemeId =
  | 'blue'
  | 'emerald'
  | 'amber'
  | 'violet'
  | 'cyan'
  | 'indigo'
  | 'teal'
  | 'rose'
  | 'orange';

/**
 * Hero treatment. Each value is a structurally different arrangement of the
 * same H1/intro/orientation content — not a colour swap.
 */
export type HeroVariant =
  | 'split'
  | 'stat-band'
  | 'note-card'
  | 'stamped'
  | 'flow'
  | 'manifest'
  | 'receipt'
  | 'ledger'
  | 'ledger-plus';

export type HowToVariant = 'timeline' | 'cards' | 'band';
export type FeaturesVariant = 'grid' | 'checklist' | 'alternating';
export type UseCasesVariant = 'cards' | 'accordion' | 'columns';
export type ExampleVariant = 'table' | 'paper' | 'strip';
export type IndustriesVariant = 'tiles' | 'rows' | 'ledger';

/** Renderable blocks, listed in `order` to control the page's section sequence. */
export type SectionKey =
  | 'widget'
  | 'whatIs'
  | 'howTo'
  | 'features'
  | 'useCases'
  | 'industries'
  | 'example'
  | 'sections'
  | 'custom'
  | 'proTips'
  | 'mistakes'
  | 'faq'
  | 'references'
  | 'blogs'
  | 'related';

/**
 * A block that exists on exactly one tool page. These carry the domain detail
 * that a generic document generator page cannot: GST slabs, e-way bill limits,
 * PO approval thresholds. Deliberately not shared between tools.
 */
export type ToolCustomBlock =
  | {
      kind: 'table';
      heading: string;
      intro: string;
      columns: string[];
      rows: string[][];
      note?: string;
    }
  | {
      kind: 'checklist';
      heading: string;
      intro: string;
      items: { title: string; text: string }[];
    }
  | {
      kind: 'callout';
      heading: string;
      tone: 'info' | 'warn' | 'success';
      paragraphs: string[];
    };

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
    /** ISO date the guide first published — feeds Article schema. */
    published?: string;
    /** ISO date of the last substantive content revision. */
    updated?: string;
  };
  /** Unique H1 shown above the builder. */
  h1: string;
  /** Sub-heading under the H1. */
  intro: string;

  // ── Per-tool visual identity ────────────────────────────────────────────
  /** Colour identity — drives every accent on the page. */
  theme: ToolThemeId;
  /** Which structural treatment each part of the page uses. */
  layout: {
    hero: HeroVariant;
    howTo: HowToVariant;
    features: FeaturesVariant;
    useCases: UseCasesVariant;
    example: ExampleVariant;
    /** Defaults to 'tiles' when omitted. */
    industries?: IndustriesVariant;
  };
  /** Section render sequence. Omitting a key omits the section entirely. */
  order: SectionKey[];
  /** Header badge displayed next to H1. Pill label + colour class. */
  badge?: { label: string; colorClass: string };
  /**
   * Custom orientation bullet points shown below the H1 intro. When omitted,
   * the four generic points ("No signup", "Free", etc.) are used.
   */
  orientationPoints?: string[];
  /**
   * Slug of the interactive widget to render between the builder and the
   * SEO copy section. Each value maps to a distinct React component.
   */
  widget?: ToolWidget;
  /** Blog post slugs to show as article cards at the bottom of the page. */
  relatedBlogSlugs?: string[];
  /** Blocks unique to this tool, rendered where 'custom' appears in `order`. */
  customBlocks?: ToolCustomBlock[];
  // ────────────────────────────────────────────────────────────────────────

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

  /**
   * Sector-by-sector guidance. Where `useCases` describes buyer situations,
   * this describes how one named trade actually issues the document — the
   * field it cannot omit, the rhythm it bills on, the dispute it prevents.
   */
  industries?: {
    heading: string;
    intro: string;
    items: {
      /** Sector name, e.g. 'Construction & Civil Contracting'. */
      name: string;
      /** Lucide icon key, resolved through @/components/ui/icon. */
      icon: string;
      /** How this sector uses the document, in practice. */
      text: string;
      /** The one detail this sector must get right. */
      detail: string;
    }[];
  };

  /**
   * Outbound citations to primary sources — statute, tax portals, regulators.
   * Only authoritative domains: an E-E-A-T signal is worth nothing if it
   * points at another blog.
   */
  references?: {
    heading: string;
    intro: string;
    items: { label: string; url: string; note: string }[];
  };
  /** Heading above the internal-link grid. Unique per tool. */
  relatedHeading: string;
  /** Sentence closing the internal-link grid. Unique per tool. */
  relatedNote: string;
  /** Slugs of related tools to interlink (paths come from the registry). */
  related: DocumentTypeId[];

  /**
   * Expert tips unique to this document type — rendered as coloured icon cards.
   * Each tip has an emoji icon, short title, and a practical paragraph.
   */
  proTips?: {
    heading: string;
    items: { icon: string; title: string; text: string }[];
  };

  /**
   * Common mistakes table unique to this document type — mistake / why it hurts / the fix.
   * Displayed as a 3-column striped table.
   */
  mistakes?: {
    heading: string;
    intro: string;
    items: { mistake: string; impact: string; fix: string }[];
  };
}
