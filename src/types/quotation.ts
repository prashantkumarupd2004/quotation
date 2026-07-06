export type TaxMode = 'none' | 'gst-intra' | 'gst-inter' | 'flat';
export type DiscountType = 'percent' | 'flat';

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
}

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
