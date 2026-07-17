'use client';

import { createContext, useContext, useMemo } from 'react';
import type { DocumentTypeId } from '@/types/document';
import { getDocumentType, type DocumentTypeConfig } from '@/lib/document-types';
import { getDocumentStore, type DocumentStore, type DocumentState } from '@/store/document-store';

interface DocumentContextValue {
  docType: DocumentTypeId;
  config: DocumentTypeConfig;
  store: DocumentStore;
}

// Default to the quotation store so every existing component keeps working
// unchanged when rendered outside an explicit provider (e.g. /create).
const DocumentContext = createContext<DocumentContextValue | null>(null);

export function DocumentProvider({
  docType,
  children,
}: {
  docType: DocumentTypeId;
  children: React.ReactNode;
}) {
  const value = useMemo<DocumentContextValue>(
    () => ({ docType, config: getDocumentType(docType), store: getDocumentStore(docType) }),
    [docType]
  );
  return <DocumentContext.Provider value={value}>{children}</DocumentContext.Provider>;
}

/** The active document type + registry config for the current builder. */
export function useDocumentConfig(): { docType: DocumentTypeId; config: DocumentTypeConfig } {
  const ctx = useContext(DocumentContext);
  const docType = ctx?.docType ?? 'quotation';
  return { docType, config: ctx?.config ?? getDocumentType(docType) };
}

/** Store hook bound to the active document type (drop-in for useQuotationStore). */
export function useDocumentStore(): DocumentState;
export function useDocumentStore<T>(selector: (state: DocumentState) => T): T;
export function useDocumentStore<T>(selector?: (state: DocumentState) => T) {
  const ctx = useContext(DocumentContext);
  const store = ctx?.store ?? getDocumentStore('quotation');
  return selector ? store(selector) : store();
}
