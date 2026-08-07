/**
 * The keyword targeting map for the whole site.
 *
 * This is a planning and internal-linking asset, NOT metadata. Nothing here is
 * ever emitted into a `<meta name="keywords">` tag — that tag has been ignored
 * by Google for two decades and stuffing it is a manual-review risk. What this
 * file is actually for:
 *
 *   1. Deciding which route owns which term, so two pages never compete for the
 *      same query (see `findCannibalisation`).
 *   2. Supplying varied, non-repetitive anchor text to the internal-linking
 *      engine in `src/lib/internal-links.ts`.
 *   3. Tracking coverage — a keyword with `target: null` is a page that does not
 *      exist yet, which is what the content roadmap is built from.
 *
 * Terms are generated combinatorially from seeds rather than listed by hand.
 * A flat 1,000-line literal would be unmaintainable and would drift out of sync
 * with the routes the moment a generator is added.
 */

export type Intent = 'transactional' | 'commercial' | 'informational' | 'navigational';

/**
 * Rough competitiveness in the Indian SERP, judged by who currently ranks.
 * `low` means small sites and forums hold page 1 — those are the winnable ones
 * and should be attacked first. `high` means Zoho/Vyapar/ClearTax own it and it
 * needs authority before it is worth targeting.
 */
export type Difficulty = 'low' | 'medium' | 'high';

export interface Keyword {
  term: string;
  intent: Intent;
  difficulty: Difficulty;
  /**
   * The single route that should rank for this term.
   * `null` marks a genuine content gap — no page exists yet.
   */
  target: string | null;
  /** Topic group, used for hub-and-spoke linking and reporting. */
  cluster: string;
}

/* ------------------------------------------------------------------ *
 * Seeds
 * ------------------------------------------------------------------ */

/**
 * Every document the platform generates or should generate. `path: null` is a
 * document type that does not exist yet — these drive the build roadmap and are
 * deliberately kept in this list so their keywords are costed, not forgotten.
 */
const DOCUMENTS: { noun: string; path: string | null; cluster: string }[] = [
  { noun: 'quotation', path: '/create', cluster: 'quotation' },
  { noun: 'quote', path: '/create', cluster: 'quotation' },
  { noun: 'invoice', path: '/invoice-maker', cluster: 'invoice' },
  { noun: 'gst invoice', path: '/gst-invoice-maker', cluster: 'gst' },
  { noun: 'tax invoice', path: '/gst-invoice-maker', cluster: 'gst' },
  { noun: 'estimate', path: '/estimate-maker', cluster: 'estimate' },
  { noun: 'proforma invoice', path: '/proforma-invoice-maker', cluster: 'proforma' },
  { noun: 'purchase order', path: '/purchase-order-generator', cluster: 'purchase-order' },
  { noun: 'delivery challan', path: '/delivery-challan-generator', cluster: 'challan' },
  { noun: 'payment receipt', path: '/payment-receipt-generator', cluster: 'receipt' },
  { noun: 'credit note', path: '/credit-note-generator', cluster: 'credit-note' },
  { noun: 'debit note', path: '/debit-note-generator', cluster: 'debit-note' },
  // Not built yet — the seven gaps that complete the "business documents" promise.
  { noun: 'salary slip', path: null, cluster: 'hr' },
  { noun: 'payslip', path: null, cluster: 'hr' },
  { noun: 'offer letter', path: null, cluster: 'hr' },
  { noun: 'experience letter', path: null, cluster: 'hr' },
  { noun: 'relieving letter', path: null, cluster: 'hr' },
  { noun: 'rent receipt', path: null, cluster: 'receipt' },
  { noun: 'bill of supply', path: null, cluster: 'gst' },
];

/** Suffixes that turn a document noun into a real search query. */
const TOOL_MODIFIERS = [
  'maker',
  'generator',
  'format',
  'template',
  'sample',
  'creator',
  'maker online',
  'generator online',
  'format in excel',
  'format in word',
  'format pdf',
  'maker free',
  'online free',
  'format india',
  'maker app',
  'software',
  'format download',
  'maker without gst',
  'format with gst',
  'maker for small business',
];

/** Question stems. These are what actually win AI Overviews and People Also Ask. */
const QUESTION_STEMS = [
  'how to make a',
  'how to write a',
  'what is a',
  'what should a',
  'is a',
  'who issues a',
  'when to issue a',
  'how to cancel a',
  'difference between quotation and',
];

const INDUSTRIES: { name: string; slug: string }[] = [
  { name: 'construction', slug: 'construction-quotation-maker' },
  { name: 'interior design', slug: 'interior-design-quotation-maker' },
  { name: 'electrical contractor', slug: 'electrical-contractor-quotation-maker' },
  { name: 'plumbing', slug: 'plumbing-quotation-maker' },
  { name: 'painting', slug: 'painting-quotation-maker' },
  { name: 'carpenter', slug: 'carpenter-quotation-maker' },
  { name: 'architect', slug: 'architect-quotation-maker' },
  { name: 'freelancer', slug: 'freelancer-quotation-maker' },
  { name: 'graphic designer', slug: 'graphic-designer-quotation-maker' },
  { name: 'digital marketing', slug: 'digital-marketing-quotation-maker' },
  { name: 'seo agency', slug: 'seo-agency-quotation-maker' },
  { name: 'web development', slug: 'web-development-quotation-maker' },
  { name: 'software company', slug: 'software-company-quotation-maker' },
  { name: 'photography', slug: 'photography-quotation-maker' },
  { name: 'event management', slug: 'event-management-quotation-maker' },
  { name: 'civil contractor', slug: 'civil-contractor-quotation-maker' },
  { name: 'security service', slug: 'security-service-quotation-maker' },
  { name: 'cleaning service', slug: 'cleaning-service-quotation-maker' },
  { name: 'transport service', slug: 'transport-service-quotation-maker' },
  { name: 'repair service', slug: 'repair-service-quotation-maker' },
];

/**
 * Industries with clear commercial search demand that have no page yet. These
 * are the highest-value expansion targets, ordered by how distinct their
 * document actually is (a caterer's quote looks nothing like a tour operator's).
 */
const INDUSTRY_GAPS = [
  'catering',
  'restaurant',
  'hotel',
  'travel agency',
  'tour operator',
  'furniture',
  'modular kitchen',
  'solar panel',
  'borewell',
  'fabrication',
  'tiles and marble',
  'aluminium fabrication',
  'false ceiling',
  'waterproofing',
  'pest control',
  'ac service',
  'car dealer',
  'bike dealer',
  'automobile garage',
  'tyre shop',
  'medical equipment',
  'pharmacy',
  'diagnostic lab',
  'dental clinic',
  'garment manufacturer',
  'textile wholesale',
  'printing press',
  'signage and hoarding',
  'stationery supplier',
  'hardware store',
  'electronics retail',
  'mobile shop',
  'computer dealer',
  'cctv installation',
  'networking and it amc',
  'manpower supply',
  'placement agency',
  'coaching institute',
  'school supplies',
  'gym and fitness',
  'salon and spa',
  'wedding planner',
  'decorator',
  'tent house',
  'sound and lighting',
  'video production',
  'animation studio',
  'content writing',
  'translation service',
  'chartered accountant',
  'legal service',
  'architecture consultancy',
  'surveying service',
  'labour contractor',
  'scaffolding rental',
  'crane rental',
  'earthmoving equipment',
  'agriculture equipment',
  'dairy supply',
  'food processing',
];

/** Cities with real commercial search volume for document formats. */
const CITIES = [
  'delhi',
  'mumbai',
  'bangalore',
  'hyderabad',
  'chennai',
  'kolkata',
  'pune',
  'ahmedabad',
  'jaipur',
  'lucknow',
  'surat',
  'indore',
  'nagpur',
  'bhopal',
  'patna',
  'kanpur',
  'coimbatore',
  'kochi',
  'chandigarh',
  'ludhiana',
  'noida',
  'gurgaon',
  'thane',
  'visakhapatnam',
  'vadodara',
];

const LANGUAGES = ['hindi', 'marathi', 'gujarati', 'tamil', 'telugu', 'bengali', 'kannada'];

/* ------------------------------------------------------------------ *
 * Difficulty heuristics
 * ------------------------------------------------------------------ */

/**
 * Head terms owned by well-funded accounting SaaS. Anything containing one of
 * these as a bare two-word phrase is a `high`; adding qualifiers drops it.
 */
const CONTESTED = ['invoice maker', 'invoice generator', 'gst invoice', 'invoice format', 'invoice template'];

function difficultyFor(term: string): Difficulty {
  const words = term.split(/\s+/).length;
  if (words >= 6) return 'low';
  if (CONTESTED.some((c) => term === c)) return 'high';
  if (words <= 2) return 'high';
  if (words === 3) return CONTESTED.some((c) => term.includes(c)) ? 'high' : 'medium';
  return 'low';
}

function intentFor(modifier: string): Intent {
  if (/(maker|generator|creator|software|app|online)/.test(modifier)) return 'transactional';
  if (/(format|template|sample|download)/.test(modifier)) return 'commercial';
  return 'informational';
}

/* ------------------------------------------------------------------ *
 * Generation
 * ------------------------------------------------------------------ */

function toolKeywords(): Keyword[] {
  const out: Keyword[] = [];
  for (const doc of DOCUMENTS) {
    for (const mod of TOOL_MODIFIERS) {
      const term = `${doc.noun} ${mod}`;
      out.push({
        term,
        intent: intentFor(mod),
        difficulty: difficultyFor(term),
        target: doc.path,
        cluster: doc.cluster,
      });
    }
    // Bare head term, e.g. "quotation maker".
    out.push({
      term: `${doc.noun} maker`,
      intent: 'transactional',
      difficulty: difficultyFor(`${doc.noun} maker`),
      target: doc.path,
      cluster: doc.cluster,
    });
  }
  return out;
}

function questionKeywords(): Keyword[] {
  const out: Keyword[] = [];
  for (const doc of DOCUMENTS) {
    for (const stem of QUESTION_STEMS) {
      const term = `${stem} ${doc.noun}`;
      out.push({
        term,
        intent: 'informational',
        difficulty: difficultyFor(term),
        // Questions belong on guides, never on a tool page — mixing a builder UI
        // with a definitional query is what produces a high-bounce mismatch.
        target: null,
        cluster: doc.cluster,
      });
    }
  }
  return out;
}

/** Industry × document. This is the matrix that carries the long tail. */
function industryKeywords(): Keyword[] {
  const out: Keyword[] = [];
  const core = ['quotation format', 'quotation maker', 'invoice format', 'estimate format', 'quotation sample', 'bill format'];
  for (const ind of INDUSTRIES) {
    for (const c of core) {
      const term = `${ind.name} ${c}`;
      out.push({
        term,
        intent: c.includes('maker') ? 'transactional' : 'commercial',
        difficulty: difficultyFor(term),
        target: `/industries/${ind.slug}`,
        cluster: 'industry',
      });
    }
  }
  for (const gap of INDUSTRY_GAPS) {
    for (const c of core.slice(0, 4)) {
      const term = `${gap} ${c}`;
      out.push({
        term,
        intent: c.includes('maker') ? 'transactional' : 'commercial',
        difficulty: difficultyFor(term),
        target: null,
        cluster: 'industry-gap',
      });
    }
  }
  return out;
}

function cityKeywords(): Keyword[] {
  const out: Keyword[] = [];
  for (const city of CITIES) {
    for (const noun of ['quotation format', 'gst invoice format', 'quotation maker']) {
      const term = `${noun} in ${city}`;
      out.push({
        term,
        intent: 'commercial',
        difficulty: 'low',
        target: null,
        cluster: 'city',
      });
    }
  }
  return out;
}

function languageKeywords(): Keyword[] {
  const out: Keyword[] = [];
  for (const lang of LANGUAGES) {
    for (const noun of ['quotation format in', 'invoice format in', 'quotation meaning in', 'bill format in']) {
      const term = `${noun} ${lang}`;
      out.push({
        term,
        intent: noun.includes('meaning') ? 'informational' : 'commercial',
        difficulty: 'low',
        target: null,
        cluster: 'language',
      });
    }
  }
  return out;
}

/**
 * Hand-written terms. Anything where the phrasing matters more than the pattern
 * — GST compliance, HR/payroll, calculators and head-to-head comparisons.
 */
const MANUAL: Keyword[] = [
  // GST & compliance
  { term: 'gst invoice rules', intent: 'informational', difficulty: 'medium', target: '/blog/gst-invoice-rules-guide', cluster: 'gst' },
  { term: 'gst invoice format rules 2026', intent: 'informational', difficulty: 'low', target: '/blog/gst-invoice-rules-guide', cluster: 'gst' },
  { term: 'mandatory fields in gst invoice', intent: 'informational', difficulty: 'low', target: '/blog/gst-invoice-rules-guide', cluster: 'gst' },
  { term: 'how many copies of tax invoice are required', intent: 'informational', difficulty: 'low', target: '/blog/gst-invoice-rules-guide', cluster: 'gst' },
  { term: 'invoice serial number rules under gst', intent: 'informational', difficulty: 'low', target: '/blog/gst-invoice-rules-guide', cluster: 'gst' },
  { term: 'reverse charge mechanism invoice format', intent: 'informational', difficulty: 'low', target: null, cluster: 'gst' },
  { term: 'e way bill rules', intent: 'informational', difficulty: 'medium', target: '/blog/e-way-bill-rules-guide', cluster: 'gst' },
  { term: 'e way bill limit for intrastate', intent: 'informational', difficulty: 'low', target: '/blog/e-way-bill-rules-guide', cluster: 'gst' },
  { term: 'bill of supply vs tax invoice', intent: 'informational', difficulty: 'low', target: '/blog/bill-of-supply-vs-tax-invoice', cluster: 'gst' },
  { term: 'composition scheme invoice format', intent: 'informational', difficulty: 'low', target: null, cluster: 'gst' },
  { term: 'hsn code list with gst rate', intent: 'informational', difficulty: 'high', target: null, cluster: 'gst' },
  { term: 'sac code for services list', intent: 'informational', difficulty: 'medium', target: null, cluster: 'gst' },
  { term: 'cgst sgst igst difference', intent: 'informational', difficulty: 'medium', target: null, cluster: 'gst' },
  { term: 'place of supply rules gst', intent: 'informational', difficulty: 'medium', target: null, cluster: 'gst' },
  { term: 'gstin format explained', intent: 'informational', difficulty: 'low', target: null, cluster: 'gst' },
  { term: 'how to check gstin validity', intent: 'informational', difficulty: 'medium', target: null, cluster: 'gst' },
  { term: 'einvoice applicability turnover limit', intent: 'informational', difficulty: 'medium', target: null, cluster: 'gst' },
  { term: 'tds on payments to contractors', intent: 'informational', difficulty: 'medium', target: '/blog/tds-on-payments-guide', cluster: 'tax' },
  { term: 'tds rate chart for small business', intent: 'informational', difficulty: 'medium', target: '/blog/tds-on-payments-guide', cluster: 'tax' },
  { term: 'tcs vs tds difference', intent: 'informational', difficulty: 'medium', target: null, cluster: 'tax' },

  // HR & payroll
  { term: 'salary slip format in excel', intent: 'commercial', difficulty: 'medium', target: null, cluster: 'hr' },
  { term: 'salary slip format for small company', intent: 'commercial', difficulty: 'low', target: null, cluster: 'hr' },
  { term: 'salary structure with basic hra da', intent: 'informational', difficulty: 'medium', target: null, cluster: 'hr' },
  { term: 'how to calculate in hand salary from ctc', intent: 'informational', difficulty: 'high', target: null, cluster: 'hr' },
  { term: 'offer letter format for private company', intent: 'commercial', difficulty: 'medium', target: null, cluster: 'hr' },
  { term: 'appointment letter vs offer letter', intent: 'informational', difficulty: 'low', target: null, cluster: 'hr' },
  { term: 'experience letter format word', intent: 'commercial', difficulty: 'medium', target: null, cluster: 'hr' },
  { term: 'relieving letter format after resignation', intent: 'commercial', difficulty: 'low', target: null, cluster: 'hr' },
  { term: 'internship certificate format', intent: 'commercial', difficulty: 'medium', target: null, cluster: 'hr' },
  { term: 'full and final settlement letter format', intent: 'commercial', difficulty: 'low', target: null, cluster: 'hr' },
  { term: 'pf esi deduction rules for employers', intent: 'informational', difficulty: 'medium', target: null, cluster: 'hr' },
  { term: 'gratuity calculation formula india', intent: 'informational', difficulty: 'high', target: null, cluster: 'hr' },

  // Calculators
  { term: 'gst calculator online', intent: 'transactional', difficulty: 'high', target: null, cluster: 'calculator' },
  { term: 'reverse gst calculator', intent: 'transactional', difficulty: 'medium', target: null, cluster: 'calculator' },
  { term: 'gst inclusive to exclusive calculator', intent: 'transactional', difficulty: 'low', target: null, cluster: 'calculator' },
  { term: 'discount calculator with gst', intent: 'transactional', difficulty: 'low', target: null, cluster: 'calculator' },
  { term: 'profit margin calculator for traders', intent: 'transactional', difficulty: 'low', target: null, cluster: 'calculator' },
  { term: 'markup vs margin calculator', intent: 'transactional', difficulty: 'low', target: null, cluster: 'calculator' },
  { term: 'hourly rate calculator for freelancers', intent: 'transactional', difficulty: 'low', target: null, cluster: 'calculator' },
  { term: 'salary calculator take home india', intent: 'transactional', difficulty: 'high', target: null, cluster: 'calculator' },
  { term: 'emi calculator for business loan', intent: 'transactional', difficulty: 'high', target: null, cluster: 'calculator' },
  { term: 'tds calculator on professional fees', intent: 'transactional', difficulty: 'medium', target: null, cluster: 'calculator' },
  { term: 'amount in words converter indian rupees', intent: 'transactional', difficulty: 'medium', target: null, cluster: 'calculator' },
  { term: 'invoice due date calculator', intent: 'transactional', difficulty: 'low', target: null, cluster: 'calculator' },

  // Comparisons — high commercial intent, low competition
  { term: 'quotation vs invoice', intent: 'informational', difficulty: 'medium', target: '/blog/invoice-vs-quotation', cluster: 'compare' },
  { term: 'quotation vs estimate', intent: 'informational', difficulty: 'medium', target: '/blog/quotation-vs-estimate', cluster: 'compare' },
  { term: 'proforma invoice vs tax invoice', intent: 'informational', difficulty: 'medium', target: '/blog/proforma-invoice-format-guide', cluster: 'compare' },
  { term: 'credit note vs debit note', intent: 'informational', difficulty: 'medium', target: '/blog/credit-note-debit-note-explained', cluster: 'compare' },
  { term: 'delivery challan vs invoice', intent: 'informational', difficulty: 'low', target: '/blog/delivery-challan-complete-guide', cluster: 'compare' },
  { term: 'purchase order vs invoice', intent: 'informational', difficulty: 'low', target: '/blog/purchase-order-process-guide', cluster: 'compare' },
  { term: 'free alternative to zoho invoice', intent: 'commercial', difficulty: 'low', target: '/tools', cluster: 'compare' },
  { term: 'vyapar alternative free', intent: 'commercial', difficulty: 'low', target: '/tools', cluster: 'compare' },
  { term: 'best free invoice software india without subscription', intent: 'commercial', difficulty: 'low', target: '/tools', cluster: 'compare' },
  { term: 'invoice generator without signup', intent: 'transactional', difficulty: 'low', target: '/invoice-maker', cluster: 'compare' },
  { term: 'quotation maker without watermark', intent: 'transactional', difficulty: 'low', target: '/create', cluster: 'compare' },

  // Workflow / business practice
  { term: 'how to follow up on a quotation politely', intent: 'informational', difficulty: 'low', target: '/blog/quotation-follow-up-strategy', cluster: 'workflow' },
  { term: 'how to recover late payments from clients', intent: 'informational', difficulty: 'medium', target: '/blog/how-to-recover-late-payments', cluster: 'workflow' },
  { term: 'payment terms to put on a quotation', intent: 'informational', difficulty: 'low', target: '/blog/payment-terms-in-quotations', cluster: 'workflow' },
  { term: 'how to price your services as a freelancer', intent: 'informational', difficulty: 'medium', target: '/blog/how-to-price-your-services', cluster: 'workflow' },
  { term: 'quotation validity period standard', intent: 'informational', difficulty: 'low', target: '/blog/quotation-validity-period-guide', cluster: 'workflow' },
  { term: 'how to revise a quotation after sending', intent: 'informational', difficulty: 'low', target: '/blog/how-to-revise-a-quotation', cluster: 'workflow' },
  { term: 'quotation email format to client', intent: 'commercial', difficulty: 'low', target: '/blog/how-to-send-quotation-by-email', cluster: 'workflow' },
  { term: 'common mistakes in quotations', intent: 'informational', difficulty: 'low', target: '/blog/common-quotation-mistakes', cluster: 'workflow' },
  { term: 'quote to cash process for small business', intent: 'informational', difficulty: 'low', target: '/blog/quotation-to-cash-workflow', cluster: 'workflow' },
  { term: 'how long to keep business records india', intent: 'informational', difficulty: 'low', target: '/blog/record-keeping-for-small-business', cluster: 'workflow' },
  { term: 'upi qr code for business payments', intent: 'informational', difficulty: 'medium', target: '/blog/upi-qr-payments-for-business', cluster: 'workflow' },
  { term: 'terms and conditions for quotation sample', intent: 'commercial', difficulty: 'low', target: '/blog/quotation-terms-and-conditions-checklist', cluster: 'workflow' },

  // Brand / navigational
  { term: 'quotationmaker', intent: 'navigational', difficulty: 'low', target: '/', cluster: 'brand' },
  { term: 'quotationmaker.in', intent: 'navigational', difficulty: 'low', target: '/', cluster: 'brand' },
  { term: 'free business document generator india', intent: 'transactional', difficulty: 'medium', target: '/', cluster: 'brand' },
  { term: 'all in one business document maker', intent: 'transactional', difficulty: 'low', target: '/tools', cluster: 'brand' },
];

/* ------------------------------------------------------------------ *
 * Public API
 * ------------------------------------------------------------------ */

function dedupe(list: Keyword[]): Keyword[] {
  const seen = new Set<string>();
  const out: Keyword[] = [];
  for (const k of list) {
    const key = k.term.toLowerCase().replace(/\s+/g, ' ').trim();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push({ ...k, term: key });
  }
  return out;
}

export const keywords: Keyword[] = dedupe([
  ...toolKeywords(),
  ...questionKeywords(),
  ...industryKeywords(),
  ...cityKeywords(),
  ...languageKeywords(),
  ...MANUAL,
]);

export const KEYWORD_COUNT = keywords.length;

/** Every keyword a given route is meant to rank for. */
export function keywordsFor(target: string): Keyword[] {
  return keywords.filter((k) => k.target === target);
}

/**
 * Terms with no page behind them, hardest-to-easiest by opportunity. This is
 * the content roadmap: `low` difficulty gaps are what to build first.
 */
export function contentGaps(): Keyword[] {
  const rank: Record<Difficulty, number> = { low: 0, medium: 1, high: 2 };
  return keywords.filter((k) => k.target === null).sort((a, b) => rank[a.difficulty] - rank[b.difficulty]);
}

export function byCluster(cluster: string): Keyword[] {
  return keywords.filter((k) => k.cluster === cluster);
}

/**
 * Head terms worth tracking weekly in Search Console. Deliberately small —
 * a 1,000-row rank report gets ignored, a 40-row one gets read.
 */
export function trackingSet(): Keyword[] {
  return keywords.filter((k) => k.target !== null && k.difficulty !== 'low').slice(0, 40);
}
