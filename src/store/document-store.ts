'use client';

import { create, type UseBoundStore, type StoreApi } from 'zustand';
import type { BusinessDocument, DocumentTypeId, LineItem, Quotation } from '@/types/document';
import { createDefaultDocument, createEmptyItem } from '@/lib/defaults';
import { uid } from '@/lib/utils';

const HISTORY_LIMIT = 50;
const PERSIST_DELAY = 500;
// Consecutive edits within this window collapse into a single undo step, so
// typing a word is one Ctrl+Z instead of one per character.
const HISTORY_COALESCE_MS = 500;

type Patch = Partial<BusinessDocument>;

export interface DocumentState {
  quotation: BusinessDocument;
  past: BusinessDocument[];
  future: BusinessDocument[];
  hydrated: boolean;
  savedAt: number | null;

  hydrate: () => void;
  setQuotation: (patch: Patch, opts?: { history?: boolean }) => void;
  update: (updater: (q: BusinessDocument) => BusinessDocument, opts?: { history?: boolean }) => void;

  addItem: () => void;
  updateItem: (id: string, patch: Partial<LineItem>) => void;
  removeItem: (id: string) => void;
  duplicateItem: (id: string) => void;
  moveItem: (from: number, to: number) => void;

  setTemplate: (templateId: string) => void;
  reset: () => void;
  loadSample: (sample: Quotation | BusinessDocument) => void;

  undo: () => void;
  redo: () => void;
  canUndo: () => boolean;
  canRedo: () => boolean;
}

export type DocumentStore = UseBoundStore<StoreApi<DocumentState>>;

/** Storage key per document type. The quotation key is the original one so existing users keep their data. */
function storageKey(docType: DocumentTypeId): string {
  return docType === 'quotation' ? 'qm:quotation:v1' : `qm:doc:${docType}:v1`;
}

/**
 * Create an autosaving, undo/redo-capable store for one document type.
 * All document builders share this implementation; each type gets its own
 * localStorage key and default document.
 */
function createDocumentStore(docType: DocumentTypeId): DocumentStore {
  const STORAGE_KEY = storageKey(docType);

  function persist(q: BusinessDocument) {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(q));
    } catch {
      /* storage full or unavailable — ignore */
    }
  }

  // Writing to localStorage means JSON.stringify-ing the whole document (which can
  // embed base64 logo/signature/stamp images). Doing that on every keystroke stutters
  // typing, so we debounce the write and coalesce a burst of edits into one.
  let persistTimer: ReturnType<typeof setTimeout> | null = null;
  let pendingPersist: BusinessDocument | null = null;
  let lastEditAt = 0;

  function schedulePersist(q: BusinessDocument) {
    if (typeof window === 'undefined') return;
    pendingPersist = q;
    if (persistTimer) clearTimeout(persistTimer);
    persistTimer = setTimeout(flushPersist, PERSIST_DELAY);
  }

  function flushPersist() {
    if (persistTimer) {
      clearTimeout(persistTimer);
      persistTimer = null;
    }
    if (pendingPersist) {
      persist(pendingPersist);
      pendingPersist = null;
    }
  }

  /** Cancel any pending debounced write and persist immediately. */
  function persistNow(q: BusinessDocument) {
    if (persistTimer) {
      clearTimeout(persistTimer);
      persistTimer = null;
    }
    pendingPersist = null;
    persist(q);
  }

  // Never lose the last few hundred ms of edits if the tab is closed mid-burst.
  if (typeof window !== 'undefined') {
    window.addEventListener('beforeunload', flushPersist);
    window.addEventListener('pagehide', flushPersist);
  }

  return create<DocumentState>((set, get) => ({
    quotation: createDefaultDocument(docType),
    past: [],
    future: [],
    hydrated: false,
    savedAt: null,

    hydrate: () => {
      if (get().hydrated) return;
      if (typeof window === 'undefined') return;
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw) as BusinessDocument & { legal?: Record<string, string> };
          const base = createDefaultDocument(docType);
          // Deep-merge nested objects so documents saved before newer fields
          // existed still get sensible defaults. Older quotation saves used a
          // `legal` object — fold it into the generic details map.
          set({
            quotation: {
              ...base,
              ...parsed,
              docType,
              meta: { ...base.meta, ...parsed.meta },
              details: { ...(parsed.legal ?? {}), ...(parsed.details ?? {}) },
            },
            hydrated: true,
          });
          return;
        }
      } catch {
        /* corrupt storage — fall through to defaults */
      }
      set({ hydrated: true });
    },

    update: (updater, opts = { history: true }) => {
      const state = get();
      const next = updater(state.quotation);
      const now = Date.now();

      let past = state.past;
      if (opts.history) {
        // Skip pushing a new history entry if this edit is part of a rapid burst —
        // the entry captured at the start of the burst already lets undo revert it.
        const coalesce = state.past.length > 0 && now - lastEditAt < HISTORY_COALESCE_MS;
        if (!coalesce) {
          past = [...state.past, state.quotation].slice(-HISTORY_LIMIT);
        }
        lastEditAt = now;
      }

      schedulePersist(next);
      set({ quotation: next, past, future: opts.history ? [] : state.future, savedAt: now });
    },

    setQuotation: (patch, opts) => {
      get().update((q) => ({ ...q, ...patch }), opts);
    },

    addItem: () => {
      get().update((q) => ({ ...q, items: [...q.items, createEmptyItem()] }));
    },

    updateItem: (id, patch) => {
      get().update((q) => ({
        ...q,
        items: q.items.map((it) => (it.id === id ? { ...it, ...patch } : it)),
      }));
    },

    removeItem: (id) => {
      get().update((q) => ({
        ...q,
        items: q.items.length > 1 ? q.items.filter((it) => it.id !== id) : q.items,
      }));
    },

    duplicateItem: (id) => {
      get().update((q) => {
        const idx = q.items.findIndex((it) => it.id === id);
        if (idx === -1) return q;
        const copy = { ...q.items[idx], id: uid('item') };
        const items = [...q.items];
        items.splice(idx + 1, 0, copy);
        return { ...q, items };
      });
    },

    moveItem: (from, to) => {
      get().update((q) => {
        if (from === to || from < 0 || to < 0 || from >= q.items.length || to >= q.items.length) {
          return q;
        }
        const items = [...q.items];
        const [moved] = items.splice(from, 1);
        items.splice(to, 0, moved);
        return { ...q, items };
      });
    },

    setTemplate: (templateId) => {
      get().update((q) => ({ ...q, meta: { ...q.meta, templateId } }));
    },

    reset: () => {
      const fresh = createDefaultDocument(docType);
      get().update(() => fresh);
    },

    loadSample: (sample) => {
      get().update(() => ({ ...sample, docType }));
    },

    undo: () => {
      const state = get();
      if (state.past.length === 0) return;
      const previous = state.past[state.past.length - 1];
      const past = state.past.slice(0, -1);
      persistNow(previous);
      set({
        quotation: previous,
        past,
        future: [state.quotation, ...state.future].slice(0, HISTORY_LIMIT),
        savedAt: Date.now(),
      });
    },

    redo: () => {
      const state = get();
      if (state.future.length === 0) return;
      const next = state.future[0];
      persistNow(next);
      set({
        quotation: next,
        past: [...state.past, state.quotation].slice(-HISTORY_LIMIT),
        future: state.future.slice(1),
        savedAt: Date.now(),
      });
    },

    canUndo: () => get().past.length > 0,
    canRedo: () => get().future.length > 0,
  }));
}

// One lazily-created store per document type — each has its own autosave slot,
// undo history and defaults, so switching tools never mixes data.
const stores = new Map<DocumentTypeId, DocumentStore>();

export function getDocumentStore(docType: DocumentTypeId): DocumentStore {
  let store = stores.get(docType);
  if (!store) {
    store = createDocumentStore(docType);
    stores.set(docType, store);
  }
  return store;
}
