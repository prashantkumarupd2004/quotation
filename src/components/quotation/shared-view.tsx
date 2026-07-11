'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { FileDown, MessageCircle, Printer } from 'lucide-react';
import type { Quotation } from '@/types/quotation';
import { downloadPdf, printNode } from '@/lib/export';
import { getTemplate } from '@/lib/templates';
import { QuotationDocument } from './quotation-document';

/**
 * Read-only public view of a shared quotation (no login). Renders the same
 * QuotationDocument used in the builder, plus a compact action bar so the
 * recipient can download the PDF, print, or re-share on WhatsApp.
 */
export function SharedView({ quotation }: { quotation: Quotation }) {
  const docRef = useRef<HTMLDivElement>(null);
  const [busy, setBusy] = useState(false);

  const fileName = (quotation.meta.number || 'quotation').replace(/[^a-z0-9-_]/gi, '_');

  const handlePdf = async () => {
    if (!docRef.current) return;
    setBusy(true);
    try {
      await downloadPdf(docRef.current, fileName);
    } catch (err) {
      console.error('PDF export failed', err);
      alert('Sorry, the PDF could not be generated. Please try again.');
    } finally {
      setBusy(false);
    }
  };

  const shareOnWhatsapp = () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const company = quotation.company.name || 'us';
    const msg = `Quotation ${quotation.meta.number} from ${company}: ${url}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950">
      {/* Action bar */}
      <div className="no-print sticky top-0 z-30 border-b border-border/60 bg-card/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[900px] flex-wrap items-center gap-2 px-4 py-3 sm:px-6">
          <Link href="/" className="mr-auto text-sm font-bold text-foreground">
            QuotationMaker<span className="text-primary">.in</span>
          </Link>
          <button onClick={printNode} className="btn-secondary px-3 py-2 text-xs">
            <Printer className="h-4 w-4" /> Print
          </button>
          <button
            onClick={shareOnWhatsapp}
            className="inline-flex items-center gap-1.5 rounded-xl bg-[#25D366] px-3 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </button>
          <button onClick={handlePdf} disabled={busy} className="btn-primary px-4 py-2 text-xs">
            {busy ? 'Rendering…' : (<><FileDown className="h-4 w-4" /> Download PDF</>)}
          </button>
        </div>
      </div>

      {/* Document */}
      <div className="mx-auto max-w-[900px] px-4 py-6 sm:px-6">
        <div className="overflow-auto rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-900/40 lg:p-6">
          <QuotationDocument quotation={quotation} />
        </div>
        <p className="no-print mt-4 text-center text-xs text-muted-foreground">
          Created with{' '}
          <Link href="/create" className="font-semibold text-primary">
            QuotationMaker.in
          </Link>{' '}
          — {getTemplate(quotation.meta.templateId).name} template
        </p>
      </div>

      {/* Off-screen export target at full width for clean PDF capture. */}
      <div className="export-target" aria-hidden style={{ width: 820 }}>
        <QuotationDocument id="print-area" ref={docRef} quotation={quotation} />
      </div>
    </div>
  );
}
