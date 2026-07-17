import type { CategoryField, ItemLabels } from '@/lib/categories';
import type { DocumentTypeId, TaxMode } from '@/types/document';

/**
 * The document engine registry. Each business document generator on the
 * platform is fully described by one DocumentTypeConfig — labels, number
 * prefix, type-specific fields, default terms and SEO copy. Adding a new
 * generator means adding one config here plus a route + content file; the
 * builder, templates, store, PDF export and sitemap all pick it up.
 */
export interface DocumentTypeConfig {
  id: DocumentTypeId;
  /** URL path, e.g. '/invoice-maker'. Quotation uses the existing '/create'. */
  path: string;
  /** Product name, e.g. 'Invoice Maker'. */
  label: string;
  /** Short name for nav/cards. */
  shortName: string;
  /** Heading printed on the paper, e.g. 'TAX INVOICE'. */
  docTitle: string;
  /** One-line pitch used on cards and hero. */
  tagline: string;
  numberLabel: string;
  numberPrefix: string;
  dateLabel: string;
  /** Label for meta.expiryDate; null hides the field. */
  secondaryDateLabel: string | null;
  /** Party section headings on the form + paper. */
  partyLabels: { from: string; fromHint: string; to: string; toHint: string };
  itemLabels: ItemLabels;
  defaultTaxMode: TaxMode;
  /** Type-specific extra fields, stored in document.details. */
  detailsTitle: string;
  fields: CategoryField[];
  defaultNotes: string;
  defaultTerms: string;
  /** Show the quotation-category selector (industry presets)? Only for quotation. */
  showCategoryPicker: boolean;
  /** Lucide icon name used on tool cards (see components/ui/icon). */
  icon: string;
}

const GOODS_LABELS: ItemLabels = { description: 'Description', code: 'HSN/SAC', rate: 'Rate' };

export const DOCUMENT_TYPES: Record<DocumentTypeId, DocumentTypeConfig> = {
  quotation: {
    id: 'quotation',
    path: '/create',
    label: 'Quotation Maker',
    shortName: 'Quotation',
    docTitle: 'QUOTATION',
    tagline: 'Send professional GST-ready price quotations that win more business.',
    numberLabel: 'Quotation No.',
    numberPrefix: 'QT',
    dateLabel: 'Date',
    secondaryDateLabel: 'Valid Until',
    partyLabels: { from: 'Your Company', fromHint: 'Appears at the top of the quotation.', to: 'Client Details', toHint: 'Who the quotation is for.' },
    itemLabels: GOODS_LABELS,
    defaultTaxMode: 'gst-intra',
    detailsTitle: '',
    fields: [
      { key: 'acceptedBy', label: 'Accepted By (name & designation)', placeholder: 'e.g. Rahul Mehta, Director' },
    ],
    defaultNotes: 'Thank you for the opportunity to quote. We look forward to working with you.',
    defaultTerms:
      '1. This quotation is valid until the expiry date mentioned above.\n2. 50% advance payment is required to confirm the order.\n3. Prices are subject to change without prior notice after expiry.\n4. Delivery timeline will be confirmed upon order confirmation.',
    showCategoryPicker: true,
    icon: 'FileText',
  },

  invoice: {
    id: 'invoice',
    path: '/invoice-maker',
    label: 'Invoice Maker',
    shortName: 'Invoice',
    docTitle: 'INVOICE',
    tagline: 'Create clean, professional invoices with due dates and payment status.',
    numberLabel: 'Invoice No.',
    numberPrefix: 'INV',
    dateLabel: 'Invoice Date',
    secondaryDateLabel: 'Due Date',
    partyLabels: { from: 'Billed By', fromHint: 'Your business details on the invoice.', to: 'Billed To', toHint: 'The customer being invoiced.' },
    itemLabels: GOODS_LABELS,
    defaultTaxMode: 'gst-intra',
    detailsTitle: 'Payment Details',
    fields: [
      { key: 'paymentStatus', label: 'Payment Status', type: 'select', options: ['Unpaid', 'Partially Paid', 'Paid'] },
      { key: 'paymentInstructions', label: 'Payment Instructions', full: true, type: 'textarea', placeholder: 'Bank name, A/C no., IFSC, UPI ID…' },
    ],
    defaultNotes: 'Thank you for your business. Please make the payment by the due date.',
    defaultTerms:
      '1. Payment is due by the due date mentioned above.\n2. Interest may be charged on overdue amounts.\n3. Please quote the invoice number with your payment.\n4. Goods once sold will not be taken back unless agreed in writing.',
    showCategoryPicker: false,
    icon: 'Receipt',
  },

  'gst-invoice': {
    id: 'gst-invoice',
    path: '/gst-invoice-maker',
    label: 'GST Invoice Maker',
    shortName: 'GST Invoice',
    docTitle: 'TAX INVOICE',
    tagline: 'GST-compliant tax invoices with automatic CGST, SGST & IGST and HSN codes.',
    numberLabel: 'Invoice No.',
    numberPrefix: 'GST',
    dateLabel: 'Invoice Date',
    secondaryDateLabel: 'Due Date',
    partyLabels: { from: 'Supplier (Billed By)', fromHint: 'Registered business issuing the tax invoice. GSTIN required.', to: 'Recipient (Billed To)', toHint: 'Buyer details — add GSTIN for B2B invoices.' },
    itemLabels: { description: 'Description of Goods / Services', code: 'HSN/SAC', rate: 'Taxable Rate' },
    defaultTaxMode: 'gst-intra',
    detailsTitle: 'GST Details',
    fields: [
      { key: 'placeOfSupply', label: 'Place of Supply', placeholder: 'e.g. Karnataka (29)' },
      { key: 'reverseCharge', label: 'Reverse Charge', type: 'select', options: ['No', 'Yes'] },
      { key: 'ewayBill', label: 'e-Way Bill No. (optional)', placeholder: '12-digit e-way bill number' },
    ],
    defaultNotes: 'This is a GST tax invoice. Input tax credit is available as per GST law.',
    defaultTerms:
      '1. Payment is due by the due date mentioned above.\n2. GST is charged as per prevailing rates; ITC subject to GST law.\n3. Subject to local jurisdiction.\n4. Certified that the particulars given above are true and correct.',
    showCategoryPicker: false,
    icon: 'BadgePercent',
  },

  estimate: {
    id: 'estimate',
    path: '/estimate-maker',
    label: 'Estimate Maker',
    shortName: 'Estimate',
    docTitle: 'ESTIMATE',
    tagline: 'Share quick cost estimates with approximate delivery timelines.',
    numberLabel: 'Estimate No.',
    numberPrefix: 'EST',
    dateLabel: 'Estimate Date',
    secondaryDateLabel: 'Valid Until',
    partyLabels: { from: 'Estimated By', fromHint: 'Your business details on the estimate.', to: 'Estimate For', toHint: 'The customer requesting the estimate.' },
    itemLabels: { description: 'Description of Work / Item', code: 'HSN/SAC', rate: 'Est. Rate' },
    defaultTaxMode: 'gst-intra',
    detailsTitle: 'Estimate Details',
    fields: [
      { key: 'approxDelivery', label: 'Approx. Delivery / Completion', placeholder: 'e.g. 2–3 weeks from confirmation' },
      { key: 'scopeSummary', label: 'Scope Summary', full: true, type: 'textarea', placeholder: 'Brief description of the work covered by this estimate' },
    ],
    defaultNotes: 'This is an estimate, not a final bill. Actual charges may vary based on the final scope of work.',
    defaultTerms:
      '1. This estimate is valid until the date mentioned above.\n2. Final cost may vary ±10% based on actual work and materials.\n3. Any additional work will be estimated and approved separately.\n4. Work begins after written approval of this estimate.',
    showCategoryPicker: false,
    icon: 'Calculator',
  },

  'proforma-invoice': {
    id: 'proforma-invoice',
    path: '/proforma-invoice-maker',
    label: 'Proforma Invoice Maker',
    shortName: 'Proforma',
    docTitle: 'PROFORMA INVOICE',
    tagline: 'Issue proforma invoices for advance payments, approvals and imports.',
    numberLabel: 'Proforma No.',
    numberPrefix: 'PI',
    dateLabel: 'Proforma Date',
    secondaryDateLabel: 'Valid Until',
    partyLabels: { from: 'Seller', fromHint: 'Business issuing the proforma invoice.', to: 'Buyer', toHint: 'The prospective buyer.' },
    itemLabels: GOODS_LABELS,
    defaultTaxMode: 'gst-intra',
    detailsTitle: 'Proforma Details',
    fields: [
      { key: 'referenceNo', label: 'Reference / Order Enquiry No.', placeholder: 'e.g. ENQ-2026-104' },
      { key: 'paymentTerms', label: 'Payment Terms', placeholder: 'e.g. 100% advance / 50% advance' },
      { key: 'deliveryTerms', label: 'Delivery Terms', placeholder: 'e.g. Ex-works / FOB / 2 weeks' },
    ],
    defaultNotes: 'This proforma invoice is issued for advance payment / approval purposes and is not a demand for payment or a tax invoice.',
    defaultTerms:
      '1. This proforma invoice is valid until the date mentioned above.\n2. A tax invoice will be issued upon confirmation / payment.\n3. Prices are firm for the validity period only.\n4. Delivery timeline counts from receipt of advance payment.',
    showCategoryPicker: false,
    icon: 'FileCheck',
  },

  'purchase-order': {
    id: 'purchase-order',
    path: '/purchase-order-generator',
    label: 'Purchase Order Generator',
    shortName: 'Purchase Order',
    docTitle: 'PURCHASE ORDER',
    tagline: 'Raise professional purchase orders to vendors with delivery terms.',
    numberLabel: 'PO No.',
    numberPrefix: 'PO',
    dateLabel: 'PO Date',
    secondaryDateLabel: 'Expected Delivery',
    partyLabels: { from: 'Buyer (Ordered By)', fromHint: 'Your company raising the purchase order.', to: 'Vendor / Supplier', toHint: 'The vendor this order is placed with.' },
    itemLabels: { description: 'Item / Material Description', code: 'HSN/SAC', rate: 'Unit Price' },
    defaultTaxMode: 'gst-intra',
    detailsTitle: 'Order Details',
    fields: [
      { key: 'deliveryLocation', label: 'Delivery Location', full: true, type: 'textarea', placeholder: 'Ship-to address for this order' },
      { key: 'quotationRef', label: 'Vendor Quotation Ref.', placeholder: 'e.g. QT-2026-0087' },
      { key: 'paymentTerms', label: 'Payment Terms', placeholder: 'e.g. 30 days from delivery' },
    ],
    defaultNotes: 'Please confirm acceptance of this purchase order and share the expected dispatch schedule.',
    defaultTerms:
      '1. Please quote the PO number on all invoices, challans and correspondence.\n2. Goods must match the specifications and quantities stated above.\n3. Delivery must be completed by the expected delivery date.\n4. The buyer reserves the right to reject goods that do not meet specifications.',
    showCategoryPicker: false,
    icon: 'ShoppingCart',
  },

  'delivery-challan': {
    id: 'delivery-challan',
    path: '/delivery-challan-generator',
    label: 'Delivery Challan Generator',
    shortName: 'Delivery Challan',
    docTitle: 'DELIVERY CHALLAN',
    tagline: 'Generate delivery challans with transport and vehicle details.',
    numberLabel: 'Challan No.',
    numberPrefix: 'DC',
    dateLabel: 'Challan Date',
    secondaryDateLabel: null,
    partyLabels: { from: 'Consignor (From)', fromHint: 'Business dispatching the goods.', to: 'Consignee (Deliver To)', toHint: 'Where the goods are being delivered.' },
    itemLabels: { description: 'Description of Goods', code: 'HSN/SAC', rate: 'Value' },
    defaultTaxMode: 'none',
    detailsTitle: 'Transport Details',
    fields: [
      { key: 'transportName', label: 'Transporter Name', placeholder: 'e.g. VRL Logistics' },
      { key: 'vehicleNumber', label: 'Vehicle Number', placeholder: 'e.g. KA-01-AB-1234' },
      { key: 'lrNumber', label: 'LR / Docket No.', placeholder: 'Lorry receipt number' },
      { key: 'dispatchThrough', label: 'Dispatch Through', placeholder: 'Road / Rail / Courier' },
      { key: 'purposeOfTransport', label: 'Purpose', type: 'select', options: ['Supply', 'Job Work', 'Exhibition', 'Own Use', 'Returnable', 'Others'] },
      { key: 'receiverName', label: "Receiver's Name (for signature)", placeholder: 'Name of person receiving goods' },
    ],
    defaultNotes: 'Received the above goods in good condition.',
    defaultTerms:
      '1. Goods listed above are dispatched as per the details mentioned.\n2. Please verify quantity and condition at the time of delivery.\n3. Any discrepancy must be reported within 24 hours of receipt.\n4. This challan is not an invoice; a tax invoice will follow where applicable.',
    showCategoryPicker: false,
    icon: 'Truck',
  },

  'payment-receipt': {
    id: 'payment-receipt',
    path: '/payment-receipt-generator',
    label: 'Payment Receipt Generator',
    shortName: 'Payment Receipt',
    docTitle: 'PAYMENT RECEIPT',
    tagline: 'Acknowledge payments instantly with mode and transaction details.',
    numberLabel: 'Receipt No.',
    numberPrefix: 'REC',
    dateLabel: 'Receipt Date',
    secondaryDateLabel: null,
    partyLabels: { from: 'Received By', fromHint: 'Business issuing the receipt.', to: 'Received From', toHint: 'The payer whose payment is acknowledged.' },
    itemLabels: { description: 'Payment For / Description', code: 'Ref.', rate: 'Amount' },
    defaultTaxMode: 'none',
    detailsTitle: 'Payment Details',
    fields: [
      { key: 'paymentMode', label: 'Payment Mode', type: 'select', options: ['UPI', 'Bank Transfer / NEFT / RTGS', 'Cash', 'Cheque', 'Credit / Debit Card', 'Other'] },
      { key: 'transactionId', label: 'Transaction / Cheque ID', placeholder: 'UTR / UPI ref / cheque no.' },
      { key: 'againstInvoice', label: 'Against Invoice No.', placeholder: 'e.g. INV-2026-0012' },
      { key: 'balanceDue', label: 'Balance Due (if any)', placeholder: 'e.g. ₹5,000' },
    ],
    defaultNotes: 'We acknowledge with thanks the receipt of the above payment.',
    defaultTerms:
      '1. This receipt confirms payment received as detailed above.\n2. Cheque payments are subject to realisation.\n3. Please retain this receipt for your records.',
    showCategoryPicker: false,
    icon: 'HandCoins',
  },

  'credit-note': {
    id: 'credit-note',
    path: '/credit-note-generator',
    label: 'Credit Note Generator',
    shortName: 'Credit Note',
    docTitle: 'CREDIT NOTE',
    tagline: 'Issue GST credit notes against invoices for returns and corrections.',
    numberLabel: 'Credit Note No.',
    numberPrefix: 'CN',
    dateLabel: 'Credit Note Date',
    secondaryDateLabel: null,
    partyLabels: { from: 'Issued By (Supplier)', fromHint: 'Business issuing the credit note.', to: 'Issued To (Customer)', toHint: 'Customer whose account is credited.' },
    itemLabels: { description: 'Description of Goods / Adjustment', code: 'HSN/SAC', rate: 'Rate' },
    defaultTaxMode: 'gst-intra',
    detailsTitle: 'Original Invoice Reference',
    fields: [
      { key: 'originalInvoiceNo', label: 'Original Invoice No.', placeholder: 'e.g. INV-2026-0012' },
      { key: 'originalInvoiceDate', label: 'Original Invoice Date', type: 'date' },
      { key: 'reason', label: 'Reason for Credit Note', full: true, type: 'textarea', placeholder: 'e.g. Sales return — 2 units damaged in transit' },
    ],
    defaultNotes: 'This credit note adjusts the value of the original invoice referenced above.',
    defaultTerms:
      '1. This credit note is issued against the original invoice referenced above.\n2. The credited amount will be adjusted against future invoices or refunded as agreed.\n3. GST adjustments are as per Section 34 of the CGST Act.',
    showCategoryPicker: false,
    icon: 'RotateCcw',
  },

  'debit-note': {
    id: 'debit-note',
    path: '/debit-note-generator',
    label: 'Debit Note Generator',
    shortName: 'Debit Note',
    docTitle: 'DEBIT NOTE',
    tagline: 'Raise debit notes for undercharged invoices and purchase returns.',
    numberLabel: 'Debit Note No.',
    numberPrefix: 'DN',
    dateLabel: 'Debit Note Date',
    secondaryDateLabel: null,
    partyLabels: { from: 'Issued By', fromHint: 'Business raising the debit note.', to: 'Issued To', toHint: 'Party whose account is debited.' },
    itemLabels: { description: 'Description of Goods / Adjustment', code: 'HSN/SAC', rate: 'Rate' },
    defaultTaxMode: 'gst-intra',
    detailsTitle: 'Reference & Reason',
    fields: [
      { key: 'originalInvoiceNo', label: 'Original Invoice / Ref. No.', placeholder: 'e.g. INV-2026-0012' },
      { key: 'originalInvoiceDate', label: 'Original Invoice Date', type: 'date' },
      { key: 'reason', label: 'Reason for Debit Note', full: true, type: 'textarea', placeholder: 'e.g. Price undercharged on original invoice / goods returned to supplier' },
    ],
    defaultNotes: 'This debit note adjusts the value of the original invoice referenced above.',
    defaultTerms:
      '1. This debit note is issued against the invoice referenced above.\n2. The debited amount is payable along with the original invoice balance.\n3. GST adjustments are as per Section 34 of the CGST Act.',
    showCategoryPicker: false,
    icon: 'RotateCw',
  },
};

export const DOCUMENT_TYPE_LIST: DocumentTypeConfig[] = [
  DOCUMENT_TYPES.quotation,
  DOCUMENT_TYPES.invoice,
  DOCUMENT_TYPES['gst-invoice'],
  DOCUMENT_TYPES.estimate,
  DOCUMENT_TYPES['proforma-invoice'],
  DOCUMENT_TYPES['purchase-order'],
  DOCUMENT_TYPES['delivery-challan'],
  DOCUMENT_TYPES['payment-receipt'],
  DOCUMENT_TYPES['credit-note'],
  DOCUMENT_TYPES['debit-note'],
];

export function getDocumentType(id: DocumentTypeId | string | undefined): DocumentTypeConfig {
  return DOCUMENT_TYPES[(id as DocumentTypeId) ?? 'quotation'] ?? DOCUMENT_TYPES.quotation;
}
