import { AlertTriangle, CheckCircle2, Info, SquareCheckBig } from 'lucide-react';
import type { ToolCustomBlock } from '@/data/tools/types';
import type { ToolTheme } from '@/data/tools/themes';
import { SectionHeading } from './tool-sections';
import { cn } from '@/lib/utils';

/**
 * Renders a block that appears on exactly one tool page — a GST slab table, an
 * e-way bill threshold table, a PO approval matrix. These carry the domain
 * detail that distinguishes one generator's page from another's.
 */
export function ToolCustomBlockView({ block, theme }: { block: ToolCustomBlock; theme: ToolTheme }) {
  if (block.kind === 'table') {
    return (
      <section>
        <SectionHeading theme={theme}>{block.heading}</SectionHeading>
        <p className="mt-4 leading-relaxed text-muted-foreground">{block.intro}</p>
        <div className={cn('mt-6 overflow-x-auto rounded-2xl border', theme.border)}>
          <table className="w-full min-w-[34rem] text-sm">
            <thead>
              <tr className={theme.tableHeader}>
                {block.columns.map((c) => (
                  <th key={c} scope="col" className="px-5 py-3 text-left font-semibold">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {block.rows.map((row, i) => (
                <tr key={i} className={i % 2 === 1 ? 'bg-muted/30' : undefined}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={cn(
                        'px-5 py-3 align-top',
                        j === 0 ? 'font-medium' : 'text-muted-foreground',
                      )}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {block.note && <p className="mt-3 text-sm text-muted-foreground">{block.note}</p>}
      </section>
    );
  }

  if (block.kind === 'checklist') {
    return (
      <section>
        <SectionHeading theme={theme}>{block.heading}</SectionHeading>
        <p className="mt-4 leading-relaxed text-muted-foreground">{block.intro}</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {block.items.map((item, i) => (
            <li key={i} className={cn('flex gap-3 rounded-2xl border p-4', theme.border, theme.softBg)}>
              <SquareCheckBig className={cn('mt-0.5 h-5 w-5 flex-shrink-0', theme.marker)} aria-hidden />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  const tone = {
    info: { Icon: Info, cls: 'border-sky-300 bg-sky-50/70 dark:border-sky-900 dark:bg-sky-950/25', icon: 'text-sky-600 dark:text-sky-400' },
    warn: { Icon: AlertTriangle, cls: 'border-amber-300 bg-amber-50/70 dark:border-amber-900 dark:bg-amber-950/25', icon: 'text-amber-600 dark:text-amber-400' },
    success: { Icon: CheckCircle2, cls: 'border-emerald-300 bg-emerald-50/70 dark:border-emerald-900 dark:bg-emerald-950/25', icon: 'text-emerald-600 dark:text-emerald-400' },
  }[block.tone];

  return (
    <section className={cn('rounded-2xl border-l-4 border-y border-r p-6 sm:p-7', tone.cls)}>
      <div className="flex items-center gap-2.5">
        <tone.Icon className={cn('h-5 w-5 flex-shrink-0', tone.icon)} aria-hidden />
        <h2 className="font-display text-xl font-bold">{block.heading}</h2>
      </div>
      {block.paragraphs.map((p, i) => (
        <p key={i} className="mt-3 leading-relaxed text-muted-foreground">
          {p}
        </p>
      ))}
    </section>
  );
}
