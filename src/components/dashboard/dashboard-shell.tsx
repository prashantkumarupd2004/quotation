'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Copy,
  FileDown,
  FolderOpen,
  Pencil,
  Printer,
  Share2,
  Trash2,
} from 'lucide-react';
import Link from 'next/link';
import type { BusinessDocument } from '@/types/document';
import {
  deleteSavedDoc,
  duplicateSavedDoc,
  getSavedDoc,
  listSavedDocs,
  type SavedDocSummary,
} from '@/lib/document-library';
import { getDocumentType, DOCUMENT_TYPE_LIST } from '@/lib/document-types';
import { downloadPdf, printNode } from '@/lib/export';
import { formatMoney } from '@/lib/currency';
import { Icon } from '@/components/ui/icon';
import { QuotationDocument } from '@/components/quotation/quotation-document';

/** Storage key a document type's builder hydrates from (mirrors document-store). */
function builderKey(docType: string): string {
  return docType === 'quotation' ? 'qm:quotation:v1' : `qm:doc:${docType}:v1`;
}

export function DashboardShell() {
  const router = useRouter();
  const [docs, setDocs] = useState<SavedDocSummary[] | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [busyId, setBusyId] = useState<string | null>(null);
  // Off-screen render target for PDF/print straight from the dashboard.
  const [exportDoc, setExportDoc] = useState<BusinessDocument | null>(null);
  const exportRef = useRef<HTMLDivElement>(null);
  const pendingAction = useRef<'pdf' | 'print' | null>(null);
  const pendingName = useRef('document');

  useEffect(() => {
    setDocs(listSavedDocs());
  }, []);

  const filtered = useMemo(() => {
    if (!docs) return null;
    return filter === 'all' ? docs : docs.filter((d) => d.docType === filter);
  }, [docs, filter]);

  // Once the export target has rendered, run the queued action.
  useEffect(() => {
    if (!exportDoc || !exportRef.current || !pendingAction.current) return;
    const action = pendingAction.current;
    pendingAction.current = null;
    const run = async () => {
      try {
        if (action === 'pdf') {
          await downloadPdf(exportRef.current!, pendingName.current);
        } else {
          printNode();
        }
      } catch (err) {
        console.error('Dashboard export failed', err);
        alert('Sorry, the export failed. Please open the document and try from the editor.');
      } finally {
        setBusyId(null);
        if (action === 'pdf') setExportDoc(null);
      }
    };
    // Give images (logo/signature data URLs) a tick to paint.
    const t = setTimeout(run, 150);
    return () => clearTimeout(t);
  }, [exportDoc]);

  const handleEdit = (s: SavedDocSummary) => {
    const doc = getSavedDoc(s.id);
    if (!doc) return;
    try {
      window.localStorage.setItem(builderKey(s.docType), JSON.stringify(doc));
    } catch {
      /* storage full */
    }
    router.push(getDocumentType(s.docType).path);
  };

  const handleDuplicate = (s: SavedDocSummary) => {
    duplicateSavedDoc(s.id);
    setDocs(listSavedDocs());
  };

  const handleDelete = (s: SavedDocSummary) => {
    if (!confirm(`Delete ${s.number}? This cannot be undone.`)) return;
    deleteSavedDoc(s.id);
    setDocs(listSavedDocs());
  };

  const handleExport = (s: SavedDocSummary, action: 'pdf' | 'print') => {
    const doc = getSavedDoc(s.id);
    if (!doc) return;
    setBusyId(s.id);
    pendingAction.current = action;
    pendingName.current = (s.number || 'document').replace(/[^a-z0-9-_]/gi, '_');
    setExportDoc(doc);
  };

  const handleShare = async (s: SavedDocSummary) => {
    const doc = getSavedDoc(s.id);
    if (!doc) return;
    setBusyId(s.id);
    try {
      const res = await fetch('/api/share', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(doc),
      });
      if (!res.ok) throw new Error('share failed');
      const { id } = await res.json();
      const url = `${window.location.origin}/q/${id}`;
      await navigator.clipboard.writeText(url);
      alert('Share link copied to clipboard:\n' + url);
    } catch (err) {
      console.error('Share failed', err);
      alert('Sorry, the share link could not be created. Please try again.');
    } finally {
      setBusyId(null);
    }
  };

  return (
    <div className="container pb-20 pt-10">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-extrabold tracking-tight">Your Documents</h1>
          <p className="mt-2 text-muted-foreground">
            Documents you save from any tool appear here — stored privately in this browser.
          </p>
        </div>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="field-input w-auto"
          aria-label="Filter by document type"
        >
          <option value="all">All types</option>
          {DOCUMENT_TYPE_LIST.map((t) => (
            <option key={t.id} value={t.id}>
              {t.shortName}
            </option>
          ))}
        </select>
      </div>

      {docs === null ? (
        <div className="space-y-3" aria-busy>
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-20 animate-pulse rounded-2xl bg-muted" />
          ))}
        </div>
      ) : filtered && filtered.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-border py-20 text-center">
          <FolderOpen className="mx-auto h-10 w-10 text-muted-foreground/50" />
          <h2 className="mt-4 font-display text-lg font-bold">No saved documents yet</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            Open any tool, build your document, and press <strong>Save</strong> in the toolbar to keep a copy here.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/create" className="btn-primary">
              Create a Quotation
            </Link>
            <Link href="/invoice-maker" className="btn-secondary">
              Create an Invoice
            </Link>
          </div>
        </div>
      ) : (
        <ul className="space-y-3">
          {filtered!.map((s) => {
            const cfg = getDocumentType(s.docType);
            const busy = busyId === s.id;
            return (
              <li
                key={s.id}
                className="glass-card flex flex-wrap items-center gap-4 p-4 sm:flex-nowrap"
              >
                <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon name={cfg.icon} className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold">{s.number}</span>
                    <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                      {cfg.shortName}
                    </span>
                  </div>
                  <div className="mt-0.5 truncate text-sm text-muted-foreground">
                    {s.clientName} · {formatMoney(s.grandTotal, s.currency)} · {fmtWhen(s.updatedAt)}
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-1.5">
                  <ActionButton label="Edit" icon={Pencil} onClick={() => handleEdit(s)} />
                  <ActionButton label="Duplicate" icon={Copy} onClick={() => handleDuplicate(s)} />
                  <ActionButton label="Download PDF" icon={FileDown} disabled={busy} onClick={() => handleExport(s, 'pdf')} />
                  <ActionButton label="Print" icon={Printer} disabled={busy} onClick={() => handleExport(s, 'print')} />
                  <ActionButton label="Share" icon={Share2} disabled={busy} onClick={() => handleShare(s)} />
                  <ActionButton label="Delete" icon={Trash2} danger onClick={() => handleDelete(s)} />
                </div>
              </li>
            );
          })}
        </ul>
      )}

      {/* Off-screen export/print target (same pattern as the builder). */}
      {exportDoc ? (
        <div className="export-target" aria-hidden style={{ width: 820 }}>
          <QuotationDocument id="print-area" ref={exportRef} quotation={exportDoc} />
        </div>
      ) : null}
    </div>
  );
}

function ActionButton({
  label,
  icon: IconCmp,
  onClick,
  disabled,
  danger,
}: {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  onClick: () => void;
  disabled?: boolean;
  danger?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-background transition-colors disabled:opacity-40 ${
        danger ? 'text-red-500 hover:bg-red-500/10' : 'text-foreground hover:bg-muted'
      }`}
    >
      <IconCmp className="h-4 w-4" />
    </button>
  );
}

function fmtWhen(ts: number): string {
  const d = new Date(ts);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}
