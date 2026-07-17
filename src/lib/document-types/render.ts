import type { Quotation } from '@/types/quotation';
import type { BusinessDocument } from '@/types/document';
import { getDocumentType, type DocumentTypeConfig } from './index';

/**
 * Labels a printable template needs for any document type. Documents saved
 * before the platform era have no docType — they render as quotations.
 */
export interface DocRenderMeta {
  config: DocumentTypeConfig;
  /** Big heading on the paper, e.g. 'TAX INVOICE'. */
  title: string;
  numberLabel: string;
  dateLabel: string;
  /** null hides the second date row (challans, receipts, notes). */
  secondaryDateLabel: string | null;
  /** Filled-in type-specific fields to print in the details block. */
  detailFields: { key: string; label: string; value: string }[];
}

export function getDocRenderMeta(doc: Quotation | BusinessDocument): DocRenderMeta {
  const config = getDocumentType((doc as BusinessDocument).docType);
  const detailFields = config.fields
    .map((f) => ({ key: f.key, label: f.label, value: (doc.details?.[f.key] ?? '').trim() }))
    .filter((f) => f.value);
  return {
    config,
    title: config.docTitle,
    numberLabel: config.numberLabel,
    dateLabel: config.dateLabel,
    secondaryDateLabel: config.secondaryDateLabel,
    detailFields,
  };
}
