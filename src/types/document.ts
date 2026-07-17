import type { Quotation } from './quotation';

/** Every document generator the platform offers. Add new ids here to grow the platform. */
export type DocumentTypeId =
  | 'quotation'
  | 'invoice'
  | 'gst-invoice'
  | 'estimate'
  | 'proforma-invoice'
  | 'purchase-order'
  | 'delivery-challan'
  | 'payment-receipt'
  | 'credit-note'
  | 'debit-note';

/**
 * A business document. Structurally identical to the original Quotation model —
 * company, client, items, totals, category details, notes, terms, signature —
 * plus a docType discriminator. Type-specific fields (payment mode, vehicle
 * number, original invoice reference, …) live in the existing `details` map,
 * driven by the DocumentTypeConfig registry (lib/document-types).
 */
export interface BusinessDocument extends Quotation {
  docType: DocumentTypeId;
}

export type {
  Quotation,
  CompanyDetails,
  ClientDetails,
  LineItem,
  QuotationMeta,
  Totals,
  CalculatedTotals,
  TaxMode,
  DiscountType,
  CategoryDetails,
} from './quotation';
