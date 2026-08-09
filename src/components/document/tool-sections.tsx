import { ArrowRight, Check, ExternalLink } from 'lucide-react';
import type { ToolContent } from '@/data/tools/types';
import type { ToolTheme } from '@/data/tools/themes';
import { Icon } from '@/components/ui/icon';
import { cn } from '@/lib/utils';

/**
 * Layout variants for the shared landing sections. Each tool picks one variant
 * per section in its `layout` config, so no two tool pages present the same
 * information in the same shape.
 */

interface SectionProps {
  content: ToolContent;
  theme: ToolTheme;
}

export function SectionHeading({ children, theme }: { children: React.ReactNode; theme: ToolTheme }) {
  return (
    <h2 className="font-display text-2xl font-bold">
      <span className={cn('mr-2 hidden select-none sm:inline', theme.text)} aria-hidden>
        ▍
      </span>
      {children}
    </h2>
  );
}

/* ── whatIs ──────────────────────────────────────────────────────────────── */
export function WhatIsSection({ content, theme }: SectionProps) {
  const [lead, ...rest] = content.whatIs.paragraphs;
  return (
    <section>
      <SectionHeading theme={theme}>{content.whatIs.heading}</SectionHeading>
      <p className={cn('mt-4 border-l-2 pl-4 text-lg leading-relaxed', theme.border)}>{lead}</p>
      {rest.map((p, i) => (
        <p key={i} className="mt-4 leading-relaxed text-muted-foreground">
          {p}
        </p>
      ))}
    </section>
  );
}

/* ── howTo ───────────────────────────────────────────────────────────────── */
export function HowToSection({ content, theme }: SectionProps) {
  const { heading, steps } = content.howTo;

  if (content.layout.howTo === 'cards') {
    return (
      <section>
        <SectionHeading theme={theme}>{heading}</SectionHeading>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {steps.map((s, i) => (
            <div key={i} className={cn('rounded-2xl border p-5', theme.border, theme.softBg)}>
              <span className={cn('font-display text-3xl font-extrabold opacity-40', theme.text)}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-1 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (content.layout.howTo === 'band') {
    return (
      <section>
        <SectionHeading theme={theme}>{heading}</SectionHeading>
        <div className={cn('mt-6 divide-y overflow-hidden rounded-2xl border', theme.border)}>
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col gap-1 p-5 sm:flex-row sm:gap-6">
              <span
                className={cn(
                  'w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider',
                  theme.chip,
                )}
              >
                Step {i + 1}
              </span>
              <div className="sm:flex-1">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section>
      <SectionHeading theme={theme}>{heading}</SectionHeading>
      <ol className="mt-6 space-y-5">
        {steps.map((s, i) => (
          <li key={i} className="relative flex gap-4 pb-1">
            {i < steps.length - 1 && (
              <span
                className={cn('absolute left-[15px] top-9 h-full w-px', theme.border, 'border-l')}
                aria-hidden
              />
            )}
            <span
              className={cn(
                'relative z-10 grid h-8 w-8 flex-shrink-0 place-items-center rounded-full text-sm font-bold',
                theme.numberChip,
              )}
            >
              {i + 1}
            </span>
            <div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ── features ────────────────────────────────────────────────────────────── */
export function FeaturesSection({ content, theme }: SectionProps) {
  const { heading, items } = content.features;

  if (content.layout.features === 'checklist') {
    return (
      <section>
        <SectionHeading theme={theme}>{heading}</SectionHeading>
        <ul className={cn('mt-6 divide-y overflow-hidden rounded-2xl border', theme.border)}>
          {items.map((f, i) => (
            <li key={i} className="flex gap-3 p-4 sm:p-5">
              <Check className={cn('mt-0.5 h-5 w-5 flex-shrink-0', theme.marker)} aria-hidden />
              <div>
                <h3 className="font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  if (content.layout.features === 'alternating') {
    return (
      <section>
        <SectionHeading theme={theme}>{heading}</SectionHeading>
        <div className="mt-6 space-y-3">
          {items.map((f, i) => (
            <div
              key={i}
              className={cn(
                'rounded-2xl border p-5 sm:max-w-[85%]',
                theme.border,
                i % 2 === 1 ? cn('sm:ml-auto', theme.softBg) : 'bg-card',
              )}
            >
              <h3 className={cn('font-semibold', i % 2 === 1 && theme.text)}>{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section>
      <SectionHeading theme={theme}>{heading}</SectionHeading>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((f, i) => (
          <div
            key={i}
            className={cn('rounded-2xl border bg-card p-5 transition-colors', theme.border, theme.cardHover)}
          >
            <span className={cn('grid h-9 w-9 place-items-center rounded-xl', theme.iconChip)} aria-hidden>
              <Check className="h-4 w-4" />
            </span>
            <h3 className="mt-3 font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── useCases ────────────────────────────────────────────────────────────── */
export function UseCasesSection({ content, theme }: SectionProps) {
  const { heading, intro, items } = content.useCases;

  if (content.layout.useCases === 'accordion') {
    return (
      <section>
        <SectionHeading theme={theme}>{heading}</SectionHeading>
        <p className="mt-4 leading-relaxed text-muted-foreground">{intro}</p>
        <div className="mt-6 space-y-2">
          {items.map((u, i) => (
            <details key={i} className={cn('group rounded-2xl border px-5 py-4', theme.border)}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold">
                {u.title}
                <ArrowRight
                  className={cn(
                    'h-4 w-4 flex-shrink-0 transition-transform group-open:rotate-90',
                    theme.marker,
                  )}
                  aria-hidden
                />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{u.text}</p>
            </details>
          ))}
        </div>
      </section>
    );
  }

  if (content.layout.useCases === 'columns') {
    return (
      <section>
        <SectionHeading theme={theme}>{heading}</SectionHeading>
        <p className="mt-4 leading-relaxed text-muted-foreground">{intro}</p>
        <div className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {items.map((u, i) => (
            <div key={i} className={cn('border-t-2 pt-4', theme.border)}>
              <h3 className={cn('font-display font-bold', theme.text)}>{u.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{u.text}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section>
      <SectionHeading theme={theme}>{heading}</SectionHeading>
      <p className="mt-4 leading-relaxed text-muted-foreground">{intro}</p>
      <div className="mt-6 space-y-4">
        {items.map((u, i) => (
          <div
            key={i}
            className={cn('rounded-2xl border bg-card p-5 transition-colors', theme.border, theme.cardHover)}
          >
            <h3 className="font-semibold">{u.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{u.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── example ─────────────────────────────────────────────────────────────── */
export function ExampleSection({ content, theme }: SectionProps) {
  const { heading, intro, rows, outro } = content.example;
  const last = rows.length - 1;

  if (content.layout.example === 'paper') {
    return (
      <section>
        <SectionHeading theme={theme}>{heading}</SectionHeading>
        <p className="mt-4 leading-relaxed text-muted-foreground">{intro}</p>
        <div className={cn('mt-6 rounded-2xl border bg-card p-6 shadow-sm sm:p-8', theme.border)}>
          <dl className="space-y-3">
            {rows.map((r, i) => (
              <div
                key={i}
                className={cn(
                  'flex justify-between gap-6 text-sm',
                  i === last && cn('border-t pt-3 text-base font-bold', theme.border),
                )}
              >
                <dt className={i === last ? undefined : 'text-muted-foreground'}>{r.label}</dt>
                <dd className={cn('whitespace-nowrap tabular-nums', i === last && theme.text)}>
                  {r.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <p className="mt-4 leading-relaxed text-muted-foreground">{outro}</p>
      </section>
    );
  }

  if (content.layout.example === 'strip') {
    return (
      <section>
        <SectionHeading theme={theme}>{heading}</SectionHeading>
        <p className="mt-4 leading-relaxed text-muted-foreground">{intro}</p>
        <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {rows.map((r, i) => (
            <div
              key={i}
              className={cn(
                'rounded-xl border p-4',
                theme.border,
                i === last ? cn(theme.softBg, 'sm:col-span-2 lg:col-span-1') : 'bg-card',
              )}
            >
              <span className="block text-xs leading-snug text-muted-foreground">{r.label}</span>
              <span
                className={cn(
                  'mt-1.5 block font-display text-lg font-bold tabular-nums',
                  i === last && theme.text,
                )}
              >
                {r.value}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-4 leading-relaxed text-muted-foreground">{outro}</p>
      </section>
    );
  }

  return (
    <section>
      <SectionHeading theme={theme}>{heading}</SectionHeading>
      <p className="mt-4 leading-relaxed text-muted-foreground">{intro}</p>
      <div className={cn('mt-6 overflow-hidden rounded-2xl border', theme.border)}>
        <table className="w-full text-sm">
          <tbody className="divide-y divide-border">
            {rows.map((r, i) => (
              <tr key={i} className={cn(i % 2 === 1 && 'bg-muted/30', i === last && theme.softBg)}>
                <td className={cn('px-5 py-3', i === last ? 'font-bold' : 'font-medium')}>{r.label}</td>
                <td
                  className={cn(
                    'px-5 py-3 text-right tabular-nums',
                    i === last ? cn('font-bold', theme.text) : 'text-muted-foreground',
                  )}
                >
                  {r.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 leading-relaxed text-muted-foreground">{outro}</p>
    </section>
  );
}

/* ── long-form guidance sections ─────────────────────────────────────────── */
export function GuidanceSections({ content, theme }: SectionProps) {
  return (
    <>
      {content.sections.map((sec, i) => (
        <section key={i} className={i > 0 ? 'mt-16' : undefined}>
          <SectionHeading theme={theme}>{sec.heading}</SectionHeading>
          {sec.paragraphs.map((p, j) => (
            <p key={j} className="mt-4 leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </section>
      ))}
    </>
  );
}

/* ── industries — sector-by-sector guidance, three shapes ────────────────── */
export function IndustriesSection({ content, theme }: SectionProps) {
  if (!content.industries) return null;
  const { heading, intro, items } = content.industries;
  const variant = content.layout.industries ?? 'tiles';

  if (variant === 'rows') {
    return (
      <section>
        <SectionHeading theme={theme}>{heading}</SectionHeading>
        <p className="mt-4 leading-relaxed text-muted-foreground">{intro}</p>
        <div className={cn('mt-6 divide-y overflow-hidden rounded-2xl border', theme.border)}>
          {items.map((ind, i) => (
            <div key={i} className="flex flex-col gap-3 p-5 sm:flex-row sm:gap-5">
              <span
                className={cn('grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl', theme.iconChip)}
                aria-hidden
              >
                <Icon name={ind.icon} className="h-5 w-5" />
              </span>
              <div className="sm:flex-1">
                <h3 className="font-semibold">{ind.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{ind.text}</p>
                <p className={cn('mt-2 text-sm font-medium', theme.text)}>{ind.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (variant === 'ledger') {
    return (
      <section>
        <SectionHeading theme={theme}>{heading}</SectionHeading>
        <p className="mt-4 leading-relaxed text-muted-foreground">{intro}</p>
        <div className="mt-6 space-y-5">
          {items.map((ind, i) => (
            <div key={i} className={cn('border-l-2 pl-5', theme.border)}>
              <h3 className="flex items-center gap-2 font-display font-bold">
                <Icon name={ind.icon} className={cn('h-4 w-4 flex-shrink-0', theme.marker)} />
                {ind.name}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{ind.text}</p>
              <p className={cn('mt-2 rounded-lg px-3 py-2 text-sm', theme.softBg)}>{ind.detail}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section>
      <SectionHeading theme={theme}>{heading}</SectionHeading>
      <p className="mt-4 leading-relaxed text-muted-foreground">{intro}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {items.map((ind, i) => (
          <div
            key={i}
            className={cn('rounded-2xl border bg-card p-5 transition-colors', theme.border, theme.cardHover)}
          >
            <span
              className={cn('grid h-9 w-9 place-items-center rounded-xl', theme.iconChip)}
              aria-hidden
            >
              <Icon name={ind.icon} className="h-4 w-4" />
            </span>
            <h3 className="mt-3 font-semibold">{ind.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ind.text}</p>
            <p className={cn('mt-3 border-t pt-3 text-sm font-medium', theme.border, theme.text)}>
              {ind.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── references — outbound citations to primary sources ──────────────────── */
export function ReferencesSection({ content, theme }: SectionProps) {
  if (!content.references) return null;
  const { heading, intro, items } = content.references;
  return (
    <section>
      <SectionHeading theme={theme}>{heading}</SectionHeading>
      <p className="mt-4 leading-relaxed text-muted-foreground">{intro}</p>
      <ul className="mt-6 space-y-3">
        {items.map((ref, i) => (
          <li key={i} className={cn('rounded-xl border p-4', theme.border)}>
            <a
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className={cn('inline-flex items-center gap-1.5 font-semibold hover:underline', theme.text)}
            >
              {ref.label}
              <ExternalLink className="h-3.5 w-3.5 flex-shrink-0" aria-hidden />
            </a>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{ref.note}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ── proTips — unique icon cards per tool ─────────────────────────────────── */
export function ProTipsSection({ content, theme }: SectionProps) {
  if (!content.proTips) return null;
  const { heading, items } = content.proTips;
  return (
    <section>
      <SectionHeading theme={theme}>{heading}</SectionHeading>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {items.map((tip, i) => (
          <div
            key={i}
            className={cn(
              'flex gap-4 rounded-2xl border p-5 transition-colors',
              theme.border,
              theme.softBg,
              theme.cardHover,
            )}
          >
            <span className="text-2xl flex-shrink-0 mt-0.5" aria-hidden>{tip.icon}</span>
            <div>
              <h3 className={cn('font-semibold', theme.text)}>{tip.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{tip.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── mistakes — 3-col cause/fix table unique to each tool ────────────────── */
export function MistakesSection({ content, theme }: SectionProps) {
  if (!content.mistakes) return null;
  const { heading, intro, items } = content.mistakes;
  return (
    <section>
      <SectionHeading theme={theme}>{heading}</SectionHeading>
      <p className="mt-4 leading-relaxed text-muted-foreground">{intro}</p>
      <div className={cn('mt-6 overflow-x-auto overflow-hidden rounded-2xl border', theme.border)}>
        <table className="w-full min-w-[34rem] text-sm">
          <thead>
            <tr className={theme.tableHeader}>
              <th scope="col" className="px-5 py-3 text-left font-semibold w-[30%]">Mistake</th>
              <th scope="col" className="px-5 py-3 text-left font-semibold w-[35%]">Why it hurts</th>
              <th scope="col" className="px-5 py-3 text-left font-semibold w-[35%]">The fix</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {items.map((row, i) => (
              <tr key={i} className={i % 2 === 1 ? 'bg-muted/30' : 'bg-card'}>
                <td className="px-5 py-3 align-top font-medium">{row.mistake}</td>
                <td className="px-5 py-3 align-top text-muted-foreground">{row.impact}</td>
                <td className={cn('px-5 py-3 align-top font-medium', theme.text)}>{row.fix}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
