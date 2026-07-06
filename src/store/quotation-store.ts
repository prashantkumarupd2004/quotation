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
        const parsed = JSON.parse(raw) as Quotation;
        set({ quotation: { ...createDefaultQuotation(), ...parsed }, hydrated: true });
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
    const past = opts.history
      ? [...state.past, state.quotation].slice(-HISTORY_LIMIT)
      : state.past;
    persist(next);
    set({ quotation: next, past, future: opts.history ? [] : state.future, savedAt: Date.now() });
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
    persist(previous);
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
    persist(next);
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
