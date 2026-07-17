'use client';

import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Check,
  Save,
  Download,
  Eye,
  FileDown,
  Image as ImageIcon,
  MessageCircle,
  Pencil,
  Printer,
  Redo2,
  RotateCcw,
  Share2,
  Undo2,
} from 'lucide-react';
import { useDocumentStore, useDocumentConfig } from '@/components/document/document-context';
import { saveDoc, listSavedDocs } from '@/lib/document-library';
import { downloadPdf, downloadPng, printNode } from '@/lib/export';
import { getTemplate } from '@/lib/templates';
import { cn } from '@/lib/utils';
import { BuilderForm } from './builder-form';
import { QuotationDocument } from './quotation-document';
import { ShareDialog } from './share-dialog';

type Busy = null | 'pdf' | 'png';

export function BuilderShell() {
  const { config } = useDocumentConfig();
  const params = useSearchParams();
  const quotation = useDocumentStore((s) => s.quotation);
  const hydrate = useDocumentStore((s) => s.hydrate);
  const hydrated = useDocumentStore((s) => s.hydrated);
  const savedAt = useDocumentStore((s) => s.savedAt);
  const { undo, redo, reset, setTemplate, canUndo, canRedo } = useDocumentStore();

  const docRef = useRef<HTMLDivElement>(null);
  const [busy, setBusy] = useState<Busy>(null);
  const [mobileView, setMobileView] = useState<'edit' | 'preview'>('edit');
  const [shareOpen, setShareOpen] = useState(false);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  // Apply ?template= from industry/template deep links (once, after hydration).
  useEffect(() => {
    if (!hydrated) return;
    const t = params.get('template');
    if (t && getTemplate(t).id === t && t !== quotation.meta.templateId) {
      setTemplate(t);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrated]);

  // Keyboard shortcuts.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const meta = e.ctrlKey || e.metaKey;
      if (!meta) return;
      const key = e.key.toLowerCase();
      if (key === 'z' && !e.shiftKey) {
        e.preventDefault();
        undo();
      } else if ((key === 'z' && e.shiftKey) || key === 'y') {
        e.preventDefault();
        redo();
      } else if (key === 'p') {
        e.preventDefault();
        printNode();
      } else if (key === 's') {
        e.preventDefault(); // autosave is automatic; just block the browser dialog
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [undo, redo]);

  const fileName = (quotation.meta.number || config.id).replace(/[^a-z0-9-_]/gi, '_');

  const handlePdf = async () => {
    if (!docRef.current) return;
    setBusy('pdf');
    try {
      await downloadPdf(docRef.current, fileName);
    } catch (err) {
      console.error('PDF export failed', err);
      alert('Sorry, the PDF could not be generated. Please try again.');
    } finally {
      setBusy(null);
    }
  };

  const [savedToLibrary, setSavedToLibrary] = useState(false);
  // Save to the local document library (dashboard). Re-saving the same
  // number+type updates the existing entry instead of piling up copies.
  const handleSave = () => {
    const existing = listSavedDocs().find(
      (d) => d.docType === (quotation.docType ?? 'quotation') && d.number === quotation.meta.number
    );
    saveDoc({ ...quotation, docType: quotation.docType ?? config.id }, existing?.id);
    setSavedToLibrary(true);
    setTimeout(() => setSavedToLibrary(false), 2000);
  };

  const [waBusy, setWaBusy] = useState(false);
  const handleWhatsapp = async () => {
    setWaBusy(true);
    try {
      const res = await fetch('/api/share', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(quotation),
      });
      if (!res.ok) throw new Error('share failed');
      const { id } = await res.json();
      const url = `${window.location.origin}/q/${id}`;
      const company = quotation.company.name || 'us';
      const msg = `${config.shortName} ${quotation.meta.number} from ${company}: ${url}`;
      window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
    } catch (err) {
      console.error('WhatsApp share failed', err);
      alert('Sorry, the share link could not be created. Please try again.');
    } finally {
      setWaBusy(false);
    }
  };

  const handlePng = async () => {
    if (!docRef.current) return;
    setBusy('png');
    try {
      await downloadPng(docRef.current, fileName);
    } catch (err) {
      console.error('PNG export failed', err);
      alert('Sorry, the image could not be generated. Please try again.');
    } finally {
      setBusy(null);
    }
  };

  return (
    <div className="mx-auto max-w-[1600px] px-4 pb-16 pt-6 sm:px-6">
      {/* Toolbar */}
      <div className="no-print sticky top-16 z-30 mb-5 flex flex-wrap items-center gap-2 rounded-2xl border border-border/60 bg-card/80 p-2.5 shadow-sm backdrop-blur-xl">
        <div className="mr-auto hidden items-center gap-1.5 pl-2 text-xs font-medium text-muted-foreground sm:flex">
          {savedAt ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-500" /> Autosaved
            </>
          ) : (
            'Changes save automatically'
          )}
        </div>

        <div className="flex items-center gap-1 rounded-xl border border-border bg-background p-1 lg:hidden">
          <button
            onClick={() => setMobileView('edit')}
            className={cn('rounded-lg px-3 py-1.5 text-xs font-semibold', mobileView === 'edit' ? 'bg-primary text-white' : 'text-muted-foreground')}
          >
            <Pencil className="mr-1 inline h-3.5 w-3.5" /> Edit
          </button>
          <button
            onClick={() => setMobileView('preview')}
            className={cn('rounded-lg px-3 py-1.5 text-xs font-semibold', mobileView === 'preview' ? 'bg-primary text-white' : 'text-muted-foreground')}
          >
            <Eye className="mr-1 inline h-3.5 w-3.5" /> Preview
          </button>
        </div>

        <ToolbarButton onClick={undo} disabled={!canUndo()} label="Undo" icon={Undo2} />
        <ToolbarButton onClick={redo} disabled={!canRedo()} label="Redo" icon={Redo2} />
        <ToolbarButton
          onClick={() => {
            if (confirm('Reset the quotation? This clears all entered data.')) reset();
          }}
          label="Reset"
          icon={RotateCcw}
        />
        <button onClick={handleSave} className="btn-secondary px-3 py-2 text-xs" title="Save to dashboard">
          <Save className="h-4 w-4" /> {savedToLibrary ? 'Saved ✓' : 'Save'}
        </button>
        <button onClick={() => setShareOpen(true)} className="btn-secondary px-3 py-2 text-xs">
          <Share2 className="h-4 w-4" /> Share
        </button>
        <button
          onClick={handleWhatsapp}
          disabled={waBusy}
          className="inline-flex items-center gap-1.5 rounded-xl bg-[#25D366] px-3 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          <MessageCircle className="h-4 w-4" /> {waBusy ? 'Sharing…' : 'WhatsApp'}
        </button>
        <button onClick={printNode} className="btn-secondary px-3 py-2 text-xs">
          <Printer className="h-4 w-4" /> Print
        </button>
        <button onClick={handlePng} disabled={busy !== null} className="btn-secondary px-3 py-2 text-xs">
          <ImageIcon className="h-4 w-4" /> {busy === 'png' ? 'Rendering…' : 'PNG'}
        </button>
        <button onClick={handlePdf} disabled={busy !== null} className="btn-primary px-4 py-2 text-xs">
          {busy === 'pdf' ? (
            <>Rendering…</>
          ) : (
            <>
              <FileDown className="h-4 w-4" /> Download PDF
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] xl:grid-cols-[minmax(0,540px)_minmax(0,1fr)]">
        {/* Form */}
        <div className={cn('no-print min-w-0', mobileView === 'preview' && 'hidden lg:block')}>
          <BuilderForm />
        </div>

        {/* Live preview */}
        <div className={cn('min-w-0', mobileView === 'edit' && 'hidden lg:block')}>
          <div className="lg:sticky lg:top-32">
            <div className="no-print mb-3 flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <Eye className="h-4 w-4" /> Live Preview
              <span className="ml-auto rounded-full bg-muted px-2.5 py-0.5 text-xs">
                {getTemplate(quotation.meta.templateId).name}
              </span>
            </div>
            <div className="max-h-[calc(100vh-11rem)] overflow-auto rounded-2xl bg-slate-100 p-4 dark:bg-slate-900/50 lg:p-6">
              <QuotationDocument quotation={quotation} />
            </div>
            <p className="no-print mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
              <Download className="h-3.5 w-3.5" />
              Tip: press Ctrl/Cmd + Z to undo, Ctrl/Cmd + P to print.
            </p>
          </div>
        </div>
      </div>

      {/*
        Dedicated export/print target. Always rendered at full A4-ish width and
        positioned off-screen (not display:none, so html2canvas can measure it).
        Capturing this instead of the on-screen preview means export and print
        never depend on the preview being visible, scrolled, or scaled.
      */}
      <div className="export-target" aria-hidden style={{ width: 820 }}>
        <QuotationDocument id="print-area" ref={docRef} quotation={quotation} />
      </div>

      {shareOpen ? <ShareDialog quotation={quotation} onClose={() => setShareOpen(false)} /> : null}
    </div>
  );
}

function ToolbarButton({
  onClick,
  disabled,
  label,
  icon: Icon,
}: {
  onClick: () => void;
  disabled?: boolean;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-background text-foreground transition-colors hover:bg-muted disabled:opacity-40"
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}
