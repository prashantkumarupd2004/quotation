'use client';

import type { CSSProperties } from 'react';
import type { DocumentTypeId } from '@/types/document';
import { getDocumentType } from '@/lib/document-types';
import { DocumentProvider } from './document-context';
import { BuilderShell } from '@/components/quotation/builder-shell';

/**
 * The full document builder (form + live preview + export toolbar) bound to a
 * document type. Every tool page renders this with its own docType; each type
 * gets an isolated autosave slot and its own labels/fields from the registry.
 *
 * The wrapper re-points --primary/--secondary/--ring at the type's own accent.
 * Because .btn-primary, .field-input and the form's section chips are all
 * defined against those variables in globals.css, one override re-tints the
 * entire builder — the invoice builder reads blue, the credit note rose —
 * without any of those component classes knowing a document type exists.
 */
export function DocumentBuilder({ docType }: { docType: DocumentTypeId }) {
  const { builder } = getDocumentType(docType);

  const themeVars = {
    '--primary': builder.primaryHsl,
    '--secondary': builder.secondaryHsl,
    '--ring': builder.primaryHsl,
  } as CSSProperties;

  return (
    <div style={themeVars}>
      <DocumentProvider docType={docType}>
        <BuilderShell />
      </DocumentProvider>
    </div>
  );
}
