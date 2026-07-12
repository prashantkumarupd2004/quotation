import type { LegalDetails, QuotationCategory, TaxMode } from '@/types/quotation';

/** Column labels for the line-items table, tuned per category. */
export interface ItemLabels {
  /** Main description column (e.g. "Description" / "Particulars of Service"). */
  description: string;
  /** Tax/HSN code column. */
  code: string;
  /** Rate column. */
  rate: string;
}

export interface CategoryConfig {
  id: QuotationCategory;
  label: string;
  /** Short helper shown under the selector. */
  hint: string;
  itemLabels: ItemLabels;
  /** Units offered in the items editor for this category. */
  units: string[];
  defaultUnit: string;
  defaultTaxRate: number;
  defaultTaxMode: TaxMode;
  /** Ready-made notes applied when the user switches to this category. */
  notes: string;
  /** Ready-made terms applied when the user switches to this category. */
  terms: string;
}

const GENERAL_UNITS = ['Nos', 'Set', 'Sq.ft', 'Sq.m', 'Rft', 'Hour', 'Day', 'Month', 'Kg', 'Ltr', 'Unit', 'Lot'];
const LEGAL_UNITS = ['Hour', 'Day', 'Appearance', 'Hearing', 'Drafting', 'Consultation', 'Lump Sum', 'Retainer'];

export const CATEGORIES: Record<QuotationCategory, CategoryConfig> = {
  general: {
    id: 'general',
    label: 'General / Products & Services',
    hint: 'Standard quotation for products or services with HSN/SAC and GST.',
    itemLabels: { description: 'Description', code: 'HSN/SAC', rate: 'Rate' },
    units: GENERAL_UNITS,
    defaultUnit: 'Nos',
    defaultTaxRate: 18,
    defaultTaxMode: 'gst-intra',
    notes: 'Thank you for the opportunity to quote. We look forward to working with you.',
    terms:
      '1. This quotation is valid until the expiry date mentioned above.\n2. 50% advance payment is required to confirm the order.\n3. Prices are subject to change without prior notice after expiry.\n4. Delivery timeline will be confirmed upon order confirmation.',
  },
  legal: {
    id: 'legal',
    label: 'Law / Legal Services',
    hint: 'Fee proposal for legal work — matter, case details, advocate and professional fees.',
    itemLabels: { description: 'Particulars of Legal Service', code: 'SAC', rate: 'Fee' },
    units: LEGAL_UNITS,
    defaultUnit: 'Appearance',
    defaultTaxRate: 18,
    defaultTaxMode: 'gst-intra',
    notes:
      'This is a professional fee proposal and does not constitute legal advice or an attorney–client relationship until formally engaged.',
    terms:
      '1. Professional fees are exclusive of court fees, stamp duty, filing charges and other out-of-pocket expenses, which will be billed at actuals.\n2. A retainer / advance is payable to commence the engagement.\n3. Fees quoted are for the scope of work described above; additional hearings or work will be charged separately.\n4. GST is applicable on professional fees as per prevailing law.\n5. This quotation is valid until the expiry date mentioned above.',
  },
};

export const CATEGORY_LIST: CategoryConfig[] = [CATEGORIES.general, CATEGORIES.legal];

export function getCategory(category: QuotationCategory | undefined): CategoryConfig {
  return CATEGORIES[category ?? 'general'] ?? CATEGORIES.general;
}

export function itemLabelsFor(category: QuotationCategory | undefined): ItemLabels {
  return getCategory(category).itemLabels;
}

export function createEmptyLegalDetails(): LegalDetails {
  return {
    matter: '',
    caseNumber: '',
    court: '',
    jurisdiction: '',
    advocateName: '',
    barCouncilId: '',
    hearingDate: '',
  };
}

/** Whether a legal-details object has anything worth rendering. */
export function hasLegalDetails(legal: LegalDetails | undefined): boolean {
  if (!legal) return false;
  return Boolean(
    legal.matter ||
      legal.caseNumber ||
      legal.court ||
      legal.jurisdiction ||
      legal.advocateName ||
      legal.barCouncilId ||
      legal.hearingDate
  );
}
