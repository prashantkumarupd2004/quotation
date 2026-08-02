'use client';

import { useCallback, useEffect, useState } from 'react';
import { Check, Copy, ExternalLink, Info, Link2, Loader2, MessageCircle, Trash2, X } from 'lucide-react';
import type { Quotation } from '@/types/quotation';

interface Props {
  quotation: Quotation;
  onClose: () => void;
}

type State =
  | { status: 'consent' }
  | { status: 'loading' }
  | { status: 'ready'; url: string; id: string; deleteKey: string; expiresAt: number }
  | { status: 'deleted' }
  | { status: 'error'; message: string };

const RETENTION_FALLBACK_DAYS = 90;

function formatExpiry(ms: number): string {
  return new Date(ms).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/**
 * Creates a server-side share link for the current quotation.
 *
 * Sharing is the one feature that sends document content off the device, so the
 * upload is gated behind an explicit click and the dialog states plainly what is
 * stored, for how long, and how to revoke it. The link is no longer created
 * silently on mount — that uploaded a customer's data before they had agreed to it.
 */
export function ShareDialog({ quotation, onClose }: Props) {
  const [state, setState] = useState<State>({ status: 'consent' });
  const [copied, setCopied] = useState(false);
  const [deleting, setDeleting] = useState(false);

  // Escape closes the dialog — expected of any modal, and previously missing.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  const createLink = useCallback(async (): Promise<string | null> => {
    setState({ status: 'loading' });
    try {
      const res = await fetch('/api/share', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(quotation),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(
          data.error || 'We could not create the share link. Please check your connection and try again.',
        );
      }
      const url = `${window.location.origin}/q/${data.id}`;
      setState({
        status: 'ready',
        url,
        id: data.id,
        deleteKey: data.deleteKey ?? '',
        expiresAt:
          data.expiresAt ?? Date.now() + RETENTION_FALLBACK_DAYS * 24 * 60 * 60 * 1000,
      });
      return url;
    } catch (err) {
      setState({
        status: 'error',
        message:
          err instanceof Error
            ? err.message
            : 'Something went wrong while creating the link. Your quotation is safe — nothing was lost.',
      });
      return null;
    }
  }, [quotation]);

  const copy = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard blocked — the input stays selectable as a fallback.
    }
  };

  const whatsapp = (url: string) => {
    const company = quotation.company.name || 'us';
    const msg = `Quotation ${quotation.meta.number} from ${company}: ${url}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
  };

  const revoke = async (id: string, deleteKey: string) => {
    setDeleting(true);
    try {
      const res = await fetch(`/api/share/${id}?key=${encodeURIComponent(deleteKey)}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Could not delete the link.');
      }
      setState({ status: 'deleted' });
    } catch (err) {
      setState({
        status: 'error',
        message: err instanceof Error ? err.message : 'Could not delete the link.',
      });
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="share-dialog-title"
    >
      <div
        className="w-full max-w-md rounded-2xl border border-border bg-card p-5 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 id="share-dialog-title" className="text-base font-bold">
            Share quotation
          </h2>
          <button onClick={onClose} aria-label="Close" className="rounded-lg p-1 hover:bg-muted">
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* ---- Step 1: tell the user what sharing actually does ---- */}
        {state.status === 'consent' ? (
          <>
            <div className="flex gap-2.5 rounded-xl border border-border bg-muted/40 p-3.5 text-sm">
              <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              <div className="space-y-2 text-muted-foreground">
                <p>
                  Everything else on this site stays in your browser. Creating a share link is the
                  exception — it{' '}
                  <strong className="text-foreground">uploads a copy of this quotation</strong>{' '}
                  (your details, the client&rsquo;s details, line items, logo and signature) to our
                  server so the recipient can open it.
                </p>
                <p>
                  The copy is deleted automatically after {RETENTION_FALLBACK_DAYS} days, and you
                  can delete it yourself at any time from this dialog. Anyone holding the link can
                  view it, so send it only to your client.
                </p>
              </div>
            </div>
            <button onClick={() => void createLink()} className="btn-primary mt-4 w-full">
              <Link2 className="h-4 w-4" /> Create share link
            </button>
            <button
              onClick={onClose}
              className="mt-2 w-full rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-muted"
            >
              Cancel — don&rsquo;t upload anything
            </button>
          </>
        ) : null}

        {state.status === 'loading' ? (
          <div className="flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-3 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" /> Creating your link…
          </div>
        ) : null}

        {state.status === 'error' ? (
          <div className="rounded-xl border border-red-300 bg-red-50 px-3 py-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300">
            <p>{state.message}</p>
            <button
              onClick={() => void createLink()}
              className="mt-2 font-semibold underline underline-offset-2"
            >
              Try again
            </button>
          </div>
        ) : null}

        {state.status === 'deleted' ? (
          <div className="rounded-xl border border-emerald-300 bg-emerald-50 px-3 py-3 text-sm text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300">
            Share link deleted. The copy has been removed from our server and the link will no
            longer open for anyone.
          </div>
        ) : null}

        {state.status === 'ready' ? (
          <>
            <div className="flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2">
              <input
                readOnly
                aria-label="Share link"
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

            <p className="mt-2 text-xs text-muted-foreground">
              Expires automatically on {formatExpiry(state.expiresAt)}.
            </p>

            <div className="mt-3 flex gap-2">
              <button
                onClick={() => whatsapp(state.url)}
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

            {state.deleteKey ? (
              <button
                onClick={() => void revoke(state.id, state.deleteKey)}
                disabled={deleting}
                className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-border px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-red-300 hover:text-red-600 disabled:opacity-60 dark:hover:border-red-900"
              >
                {deleting ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  <Trash2 className="h-3.5 w-3.5" />
                )}
                {deleting ? 'Deleting…' : 'Delete this link & the stored copy'}
              </button>
            ) : null}
          </>
        ) : null}
      </div>
    </div>
  );
}
