'use client';

import { Check } from 'lucide-react';
import { templates } from '@/lib/templates';
import { useQuotationStore } from '@/store/quotation-store';
import { cn } from '@/lib/utils';

export function TemplatePicker() {
  const activeId = useQuotationStore((s) => s.quotation.meta.templateId);
  const setTemplate = useQuotationStore((s) => s.setTemplate);

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {templates.map((t) => {
        const active = t.id === activeId;
        return (
          <button
            key={t.id}
            type="button"
            onClick={() => setTemplate(t.id)}
            className={cn(
              'group relative overflow-hidden rounded-xl border p-3 text-left transition-all',
              active ? 'border-primary ring-2 ring-primary/30' : 'border-border hover:border-primary/50'
            )}
          >
            <div
              className="mb-2 h-10 w-full rounded-lg"
              style={{ background: `linear-gradient(120deg, ${t.accent}, ${t.accent2})` }}
            />
            <div className="text-sm font-semibold">{t.name}</div>
            <div className="text-[11px] text-muted-foreground">{t.category}</div>
            {active ? (
              <span className="absolute right-2 top-2 grid h-5 w-5 place-items-center rounded-full bg-primary text-white">
                <Check className="h-3 w-3" />
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
