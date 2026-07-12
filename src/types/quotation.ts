export type TaxMode = 'none' | 'gst-intra' | 'gst-inter' | 'flat';
export type DiscountType = 'percent' | 'flat';

/** The kind of quotation being prepared. Drives category-specific fields and labels. */
export type QuotationCategory =
  | 'general'
  | 'legal'
  | 'freelancer'
  | 'plumbing'
  | 'electrical'
  | 'interior'
  | 'it-software'
  | 'photography'
  | 'medical'
  | 'catering'
  | 'tutoring'
  | 'transport';

export interface CompanyDetails {
  name: string;
  logo: string; // data URL
  address: string;
  gstin: string;
  phone: string;
  email: string;
  website: string;
}

export interface ClientDetails {
  name: string;
  company: string;
  address: string;
  gstin: string;
  phone: string;
  email: string;
}

export interface LineItem {
  id: string;
  description: string;
  hsn: string; // HSN/SAC code
  quantity: number;
  unit: string;
  rate: number;
  /** Per-item tax rate as a percentage (e.g. 18 for 18% GST). */
  taxRate: number;
}

export interface QuotationMeta {
  number: string;
  date: string; // ISO date (yyyy-mm-dd)
  expiryDate: string;
  currency: string;
  templateId: string;
  accentColor: string;
  /** Which category of quotation this is. Defaults to 'general'. */
  category: QuotationCategory;
}

/**
 * Category-specific extra fields, keyed by the field id declared in the
 * category config (see lib/categories.ts). Only the active category's fields
 * are shown, but values persist if the user switches categories.
 */
export type CategoryDetails = Record<string, string>;

export interface Totals {
  discountType: DiscountType;
  discountValue: number;
  shipping: number;
  /** Whether tax is charged as inter-state (IGST) or intra-state (CGST+SGST). */
  taxMode: TaxMode;
  /** Flat tax rate used when taxMode is 'flat'. */
  flatTaxRate: number;
  roundOff: boolean;
}

export interface Quotation {
  meta: QuotationMeta;
  company: CompanyDetails;
  client: ClientDetails;
  items: LineItem[];
  totals: Totals;
  /** Category-specific field values (keyed by field id). */
  details: CategoryDetails;
  notes: string;
  terms: string;
  signature: string; // data URL
  stamp: string; // data URL
  showQr: boolean;
  qrData: string;
}

export interface CalculatedTotals {
  subtotal: number;
  discountAmount: number;
  taxableAmount: number;
  taxTotal: number;
  cgst: number;
  sgst: number;
  igst: number;
  shipping: number;
  roundOff: number;
  grandTotal: number;
  /** Tax grouped by rate for the summary table. */
  taxBreakup: { rate: number; taxable: number; tax: number }[];
}
