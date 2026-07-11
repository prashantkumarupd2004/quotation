'use client';

import { useEffect, useRef, useState } from 'react';
import { Check, Copy, ExternalLink, Loader2, MessageCircle, X } from 'lucide-react';
import type { Quotation } from '@/types/quotation';

interface Props {
  quotation: Quotation;
  onClose: () => void;
}

type State =
  | { status: 'idle' | 'loading' }
  | { status: 'ready'; url: string }
  | { status: 'error'; message: string };

/**
 * Creates a server-side share link for the current quotation and offers Copy,
 * Open and Share-on-WhatsApp actions. The link is created immediately on mount
 * via POST /api/share.
 */
export function ShareDialog({ quotation, onClose }: Props) {
  const [state, setState] = useState<State>({ status: 'idle' });
  const [copied, setCopied] = useState(false);
  const startedRef = useRef(false);

  const createLink = async (): Promise<string | null> => {
    setState({ status: 'loading' });
    try {
      const res = await fetch('/api/share', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(quotation),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Could not create the share link.');
      }
      const { id } = await res.json();
      const url = `${window.location.origin}/q/${id}`;
      setState({ status: 'ready', url });
      return url;
    } catch (err) {
      setState({ status: 'error', message: err instanceof Error ? err.message : 'Something went wrong.' });
      return null;
    }
  };

  // Kick off link creation once on mount.
  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    void createLink();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const copy = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard blocked — the input is selectable as a fallback.
    }
  };

  const whatsapp = async () => {
    const url = state.status === 'ready' ? state.url : await createLink();
    if (!url) return;
    const company = quotation.company.name || 'us';
    const msg = `Quotation ${quotation.meta.number} from ${company}: ${url}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-md rounded-2xl border border-border bg-card p-5 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-base font-bold">Share quotation</h2>
          <button onClick={onClose} aria-label="Close" className="rounded-lg p-1 hover:bg-muted">
            <X className="h-4 w-4" />
          </button>
        </div>

        <p className="mb-3 text-sm text-muted-foreground">
          Anyone with this link can view the quotation — no login needed.
        </p>

        {state.status === 'loading' || state.status === 'idle' ? (
          <div className="flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-3 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" /> Creating link…
          </div>
        ) : null}

        {state.status === 'error' ? (
          <div className="rounded-xl border border-red-300 bg-red-50 px-3 py-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300">
            {state.message}
            <button onClick={() => void createLink()} className="ml-2 font-semibold underline">
              Retry
            </button>
          </div>
        ) : null}

        {state.status === 'ready' ? (
          <>
            <div className="flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2">
              <input
                readOnly
                value={state.url}
                onFocus={(e) => e.currentTarget.select()}
                className="min-w-0 flex-1 bg-transparent text-sm outline-none"
              />
              <button
                onClick={() => copy(state.url)}
                className="inline-flex items-center gap-1 rounded-lg bg-primary px-2.5 py-1.5 text-xs font-semibold text-white"
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>

            <div className="mt-3 flex gap-2">
              <button
                onClick={whatsapp}
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#25D366] px-3 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" /> Share on WhatsApp
              </button>
              <a
                href={state.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-3 py-2.5 text-sm"
              >
                <ExternalLink className="h-4 w-4" /> Open
              </a>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
