'use client';

import type { BusinessDocument, DocumentTypeId } from '@/types/document';
import { calculateTotals } from './calculations';
import { uid } from './utils';

/**
 * Local document library backing the dashboard. Documents are stored in the
 * browser's localStorage — consistent with the no-signup product, nothing is
 * uploaded. An index of lightweight summaries keeps the dashboard list fast;
 * full document payloads live under their own keys.
 */

const INDEX_KEY = 'qm:library:index:v1';
const DOC_PREFIX = 'qm:library:doc:';
const MAX_DOCS = 100;

export interface SavedDocSummary {
  id: string;
  docType: DocumentTypeId;
  number: string;
  clientName: string;
  grandTotal: number;
  currency: string;
  updatedAt: number;
}

function readIndex(): SavedDocSummary[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(INDEX_KEY);
    return raw ? (JSON.parse(raw) as SavedDocSummary[]) : [];
  } catch {
    return [];
  }
}

function writeIndex(index: SavedDocSummary[]) {
  try {
    window.localStorage.setItem(INDEX_KEY, JSON.stringify(index));
  } catch {
    /* storage full — ignore */
  }
}

function summarize(id: string, doc: BusinessDocument): SavedDocSummary {
  return {
    id,
    docType: doc.docType ?? 'quotation',
    number: doc.meta.number,
    clientName: doc.client.name || doc.client.company || '—',
    grandTotal: calculateTotals(doc).grandTotal,
    currency: doc.meta.currency,
    updatedAt: Date.now(),
  };
}

export function listSavedDocs(): SavedDocSummary[] {
  return readIndex().sort((a, b) => b.updatedAt - a.updatedAt);
}

export function getSavedDoc(id: string): BusinessDocument | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(DOC_PREFIX + id);
    return raw ? (JSON.parse(raw) as BusinessDocument) : null;
  } catch {
    return null;
  }
}

/** Save (or update) a document in the library. Returns the saved id. */
export function saveDoc(doc: BusinessDocument, existingId?: string): string {
  const id = existingId ?? uid('doc');
  try {
    window.localStorage.setItem(DOC_PREFIX + id, JSON.stringify(doc));
  } catch {
    return id; // storage full — index untouched
  }
  const index = readIndex().filter((s) => s.id !== id);
  index.unshift(summarize(id, doc));
  // Evict oldest beyond the cap so storage stays bounded.
  for (const evicted of index.slice(MAX_DOCS)) {
    try {
      window.localStorage.removeItem(DOC_PREFIX + evicted.id);
    } catch {
      /* ignore */
    }
  }
  writeIndex(index.slice(0, MAX_DOCS));
  return id;
}

export function deleteSavedDoc(id: string) {
  try {
    window.localStorage.removeItem(DOC_PREFIX + id);
  } catch {
    /* ignore */
  }
  writeIndex(readIndex().filter((s) => s.id !== id));
}

/** Duplicate a saved document with a fresh id. Returns the new id, or null. */
export function duplicateSavedDoc(id: string): string | null {
  const doc = getSavedDoc(id);
  if (!doc) return null;
  return saveDoc(doc);
}
