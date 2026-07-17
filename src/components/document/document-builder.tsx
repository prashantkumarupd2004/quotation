'use client';

import type { DocumentTypeId } from '@/types/document';
import { DocumentProvider } from './document-context';
import { BuilderShell } from '@/components/quotation/builder-shell';

/**
 * The full document builder (form + live preview + export toolbar) bound to a
 * document type. Every tool page renders this with its own docType; each type
 * gets an isolated autosave slot and its own labels/fields from the registry.
 */
export function DocumentBuilder({ docType }: { docType: DocumentTypeId }) {
  return (
    <DocumentProvider docType={docType}>
      <BuilderShell />
    </DocumentProvider>
  );
}
