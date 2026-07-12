'use client';

import { create } from 'zustand';
import type { Quotation, LineItem } from '@/types/quotation';
import { createDefaultQuotation, createEmptyItem } from '@/lib/defaults';
import { uid } from '@/lib/utils';

const STORAGE_KEY = 'qm:quotation:v1';
const HISTORY_LIMIT = 50;

type Patch = Partial<Quotation>;

interface QuotationState {
  quotation: Quotation;
  past: Quotation[];
  future: Quotation[];
  hydrated: boolean;
  savedAt: number | null;

  hydrate: () => void;
  setQuotation: (patch: Patch, opts?: { history?: boolean }) => void;
  update: (updater: (q: Quotation) => Quotation, opts?: { history?: boolean }) => void;

  addItem: () => void;
  updateItem: (id: string, patch: Partial<LineItem>) => void;
  removeItem: (id: string) => void;
  duplicateItem: (id: string) => void;
  moveItem: (from: number, to: number) => void;

  setTemplate: (templateId: string) => void;
  reset: () => void;
  loadSample: (sample: Quotation) => void;

  undo: () => void;
  redo: () => void;
  canUndo: () => boolean;
  canRedo: () => boolean;
}

function persist(q: Quotation) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(q));
  } catch {
    /* storage full or unavailable — ignore */
  }
}

// Writing to localStorage means JSON.stringify-ing the whole quotation (which can
// embed base64 logo/signature/stamp images). Doing that on every keystroke stutters
// typing, so we debounce the write and coalesce a burst of edits into one.
const PERSIST_DELAY = 500;
let persistTimer: ReturnType<typeof setTimeout> | null = null;
let pendingPersist: Quotation | null = null;

function schedulePersist(q: Quotation) {
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
function persistNow(q: Quotation) {
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

// Consecutive edits within this window collapse into a single undo step, so
// typing a word is one Ctrl+Z instead of one per character (and we avoid
// copying the whole quotation onto the history stack on every keystroke).
const HISTORY_COALESCE_MS = 500;
let lastEditAt = 0;

export const useQuotationStore = create<QuotationState>((set, get) => ({
  quotation: createDefaultQuotation(),
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
        const parsed = JSON.parse(raw) as Quotation & { legal?: Record<string, string> };
        const base = createDefaultQuotation();
        // Deep-merge nested objects so quotations saved before newer fields
        // (meta.category, details) existed still get sensible defaults. Older
        // saves used a `legal` object — fold it into the generic details map.
        set({
          quotation: {
            ...base,
            ...parsed,
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
    const fresh = createDefaultQuotation();
    get().update(() => fresh);
  },

  loadSample: (sample) => {
    get().update(() => sample);
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
