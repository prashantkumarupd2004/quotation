'use client';

import { useMemo } from 'react';
import type { Quotation } from '@/types/quotation';
import type { TemplateStyle } from '@/lib/templates';
import { createSampleQuotation } from '@/lib/defaults';
import { QuotationDocument } from './quotation-document';

/** A non-interactive scaled preview of a template using sample data. */
export function TemplateThumb({ template, quotation }: { template: TemplateStyle; quotation?: Quotation }) {
  const sample: Quotation = useMemo(() => {
    const base = quotation ?? createSampleQuotation();
    return { ...base, meta: { ...base.meta, templateId: template.id, accentColor: template.accent } };
  }, [template.id, template.accent, quotation]);

  return (
    <div className="pointer-events-none relative h-[300px] w-full overflow-hidden rounded-xl border border-border bg-slate-100 dark:bg-slate-900/50">
      <div
        className="absolute left-1/2 top-4 origin-top"
        style={{ transform: 'translateX(-50%) scale(0.46)', width: 820 }}
      >
        <QuotationDocument quotation={sample} />
      </div>
    </div>
  );
}
