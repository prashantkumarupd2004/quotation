import { Check, Circle, Minus, Plus, Truck } from 'lucide-react';
import type { ToolContent } from '@/data/tools/types';
import type { ToolTheme } from '@/data/tools/themes';
import { TOOL_THEMES } from '@/data/tools/themes';
import { Breadcrumbs, type Crumb } from '@/components/layout/breadcrumbs';
import { cn } from '@/lib/utils';

interface HeroProps {
  content: ToolContent;
  crumbs: Crumb[];
}

/**
 * Tool page hero. Each document type gets a structurally different treatment —
 * a purchase order opens on its position in the procurement chain, a receipt
 * opens on receipt paper, a proforma opens under a "not a tax invoice" stamp.
 * The ten pages previously shared one centred hero, which is what made the
 * catalogue read as the same page published ten times.
 */
export function ToolHero({ content, crumbs }: HeroProps) {
  const theme = TOOL_THEMES[content.theme];
  const points = content.orientationPoints ?? [
    'No signup — start typing below',
    'Free, with no watermark',
    'Saves to your device, not our server',
    'Download PDF, PNG or print',
  ];

  const inner = { content, theme, points, crumbs };

  switch (content.layout.hero) {
    case 'split':
      return <SplitHero {...inner} />;
    case 'stat-band':
      return <StatBandHero {...inner} />;
    case 'note-card':
      return <NoteCardHero {...inner} />;
    case 'stamped':
      return <StampedHero {...inner} />;
    case 'flow':
      return <FlowHero {...inner} />;
    case 'manifest':
      return <ManifestHero {...inner} />;
    case 'receipt':
      return <ReceiptHero {...inner} />;
    case 'ledger':
      return <LedgerHero {...inner} />;
    case 'ledger-plus':
      return <LedgerPlusHero {...inner} />;
  }
}

interface VariantProps {
  content: ToolContent;
  theme: ToolTheme;
  points: string[];
  crumbs: Crumb[];
}

function Badge({ content }: { content: ToolContent }) {
  if (!content.badge) return null;
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold',
        content.badge.colorClass,
      )}
    >
      {content.badge.label}
    </span>
  );
}

/* ── invoice — headline left, payment-status panel right ─────────────────── */
function SplitHero({ content, theme, points, crumbs }: VariantProps) {
  const statuses = [
    { label: 'Paid', cls: 'bg-emerald-500' },
    { label: 'Partial', cls: 'bg-amber-500' },
    { label: 'Unpaid', cls: 'bg-rose-500' },
  ];
  return (
    <section className={cn('border-b border-border/60', theme.heroBg)}>
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-8 sm:px-6">
        <Breadcrumbs className="mb-6" items={crumbs} />
        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <Badge content={content} />
            <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.6rem] lg:leading-[1.1]">
              {content.h1}
            </h1>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{content.intro}</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className={cn('mt-0.5 h-4 w-4 flex-shrink-0', theme.marker)} aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div
            className={cn(
              'rounded-2xl border bg-card/80 p-5 shadow-lg shadow-black/5 backdrop-blur',
              theme.border,
            )}
            aria-hidden
          >
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <span className="font-display text-sm font-bold">INV-2026-0042</span>
              <span className={cn('rounded-full px-2.5 py-1 text-[11px] font-bold', theme.chip)}>
                Due in 14 days
              </span>
            </div>
            <dl className="mt-4 space-y-2.5 text-sm">
              {[
                ['Subtotal', '₹84,000.00'],
                ['GST @ 18%', '₹15,120.00'],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between text-muted-foreground">
                  <dt>{k}</dt>
                  <dd className="tabular-nums">{v}</dd>
                </div>
              ))}
              <div className="flex justify-between border-t border-border/60 pt-2.5 font-bold">
                <dt>Amount due</dt>
                <dd className="tabular-nums">₹99,120.00</dd>
              </div>
            </dl>
            <div className="mt-4 flex gap-2">
              {statuses.map((s) => (
                <span
                  key={s.label}
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border/60 py-1.5 text-[11px] font-semibold text-muted-foreground"
                >
                  <span className={cn('h-1.5 w-1.5 rounded-full', s.cls)} />
                  {s.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── gst invoice — headline over the statutory rate slabs ────────────────── */
function StatBandHero({ content, theme, points, crumbs }: VariantProps) {
  const slabs = ['0%', '5%', '12%', '18%', '28%'];
  return (
    <section className={cn('border-b border-border/60', theme.heroBg)}>
      <div className="mx-auto max-w-5xl px-4 pb-10 pt-8 sm:px-6">
        <Breadcrumbs className="mb-6" items={crumbs} />
        <Badge content={content} />
        <h1 className="mt-3 max-w-3xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          {content.h1}
        </h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{content.intro}</p>

        <div className="mt-7 grid grid-cols-5 gap-2 sm:gap-3" aria-hidden>
          {slabs.map((s) => (
            <div
              key={s}
              className={cn(
                'rounded-xl border py-3 text-center font-display text-lg font-extrabold sm:text-2xl',
                theme.border,
                theme.softBg,
                theme.text,
              )}
            >
              {s}
              <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                slab
              </span>
            </div>
          ))}
        </div>

        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
          {points.map((p) => (
            <li key={p} className="flex items-center gap-1.5">
              <Check className={cn('h-4 w-4 flex-shrink-0', theme.marker)} aria-hidden />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── estimate — a working note pinned to the page ────────────────────────── */
function NoteCardHero({ content, theme, points, crumbs }: VariantProps) {
  return (
    <section className={cn('border-b border-border/60', theme.heroBg)}>
      <div className="mx-auto max-w-4xl px-4 pb-10 pt-8 sm:px-6">
        <Breadcrumbs className="mb-6" items={crumbs} />
        <div
          className={cn(
            'relative rounded-2xl border-2 border-dashed bg-card/70 p-6 sm:p-8',
            theme.border,
          )}
        >
          <span
            className={cn(
              'absolute -top-3 left-6 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider',
              theme.chip,
            )}
            aria-hidden
          >
            Working figure — not final
          </span>
          <Badge content={content} />
          <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            {content.h1}
          </h1>
          <p className="mt-4 leading-relaxed text-muted-foreground">{content.intro}</p>
          <ul className="mt-6 space-y-2">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className={cn('mt-0.5 h-4 w-4 flex-shrink-0', theme.marker)} aria-hidden />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ── proforma — stamped "not a tax invoice" ──────────────────────────────── */
function StampedHero({ content, theme, points, crumbs }: VariantProps) {
  return (
    <section className={cn('relative overflow-hidden border-b border-border/60', theme.heroBg)}>
      <div
        className="pointer-events-none absolute right-4 top-20 hidden rotate-[-14deg] rounded-xl border-4 border-violet-500/70 px-6 py-3 font-display text-2xl font-extrabold uppercase tracking-widest text-violet-600/70 dark:border-violet-400/50 dark:text-violet-400/60 lg:block"
        aria-hidden
      >
        Not a tax invoice
      </div>
      <div className="mx-auto max-w-4xl px-4 pb-10 pt-8 sm:px-6">
        <Breadcrumbs className="mb-6" items={crumbs} />
        <Badge content={content} />
        <h1 className="mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          {content.h1}
        </h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{content.intro}</p>
        <div className={cn('mt-7 rounded-2xl border p-5', theme.border, theme.softBg)}>
          <ul className="grid gap-2.5 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className={cn('mt-0.5 h-4 w-4 flex-shrink-0', theme.marker)} aria-hidden />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ── purchase order — where the PO sits in the procurement chain ─────────── */
function FlowHero({ content, theme, points, crumbs }: VariantProps) {
  const chain = ['Quotation', 'Purchase Order', 'Delivery Challan', 'Invoice'];
  return (
    <section className={cn('border-b border-border/60', theme.heroBg)}>
      <div className="mx-auto max-w-5xl px-4 pb-10 pt-8 sm:px-6">
        <Breadcrumbs className="mb-6" items={crumbs} />

        <ol className="mb-7 flex flex-wrap items-center gap-2 text-xs font-semibold" aria-hidden>
          {chain.map((step, i) => {
            const active = step === 'Purchase Order';
            return (
              <li key={step} className="flex items-center gap-2">
                {i > 0 && <span className="text-muted-foreground/50">→</span>}
                <span
                  className={cn(
                    'rounded-full px-3 py-1.5',
                    active
                      ? cn(theme.solid, 'shadow-sm')
                      : 'border border-border/70 text-muted-foreground',
                  )}
                >
                  {step}
                </span>
              </li>
            );
          })}
        </ol>

        <Badge content={content} />
        <h1 className="mt-3 max-w-3xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          {content.h1}
        </h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{content.intro}</p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <li
              key={p}
              className={cn(
                'rounded-xl border px-3 py-2.5 text-xs font-medium text-muted-foreground',
                theme.border,
                theme.softBg,
              )}
            >
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── delivery challan — a shipping manifest header ───────────────────────── */
function ManifestHero({ content, theme, points, crumbs }: VariantProps) {
  const fields = [
    ['Challan No.', 'DC-2026-0311'],
    ['Vehicle No.', 'MH 12 AB 4477'],
    ['Transporter', 'Speed Cargo'],
    ['LR No.', 'SC-88214'],
  ];
  return (
    <section className={cn('border-b border-border/60', theme.heroBg)}>
      <div className="mx-auto max-w-5xl px-4 pb-10 pt-8 sm:px-6">
        <Breadcrumbs className="mb-6" items={crumbs} />
        <div className="flex items-start gap-4">
          <span
            className={cn('hidden h-12 w-12 flex-shrink-0 place-items-center rounded-2xl sm:grid', theme.iconChip)}
            aria-hidden
          >
            <Truck className="h-6 w-6" />
          </span>
          <div>
            <Badge content={content} />
            <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              {content.h1}
            </h1>
          </div>
        </div>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{content.intro}</p>

        <div
          className={cn('mt-7 grid gap-px overflow-hidden rounded-2xl border sm:grid-cols-4', theme.border)}
          aria-hidden
        >
          {fields.map(([label, value]) => (
            <div key={label} className={cn('p-4', theme.softBg)}>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                {label}
              </span>
              <span className={cn('mt-1 block font-display text-sm font-bold', theme.text)}>{value}</span>
            </div>
          ))}
        </div>

        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
          {points.map((p) => (
            <li key={p} className="flex items-center gap-1.5">
              <Check className={cn('h-4 w-4 flex-shrink-0', theme.marker)} aria-hidden />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── payment receipt — receipt paper with a torn edge ────────────────────── */
function ReceiptHero({ content, theme, points, crumbs }: VariantProps) {
  return (
    <section className={cn('border-b border-border/60', theme.heroBg)}>
      <div className="mx-auto max-w-5xl px-4 pb-10 pt-8 sm:px-6">
        <Breadcrumbs className="mb-6" items={crumbs} />
        <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Badge content={content} />
            <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              {content.h1}
            </h1>
            <p className="mt-4 leading-relaxed text-muted-foreground">{content.intro}</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className={cn('mt-0.5 h-4 w-4 flex-shrink-0', theme.marker)} aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-xs" aria-hidden>
            <div className={cn('rounded-t-2xl border border-b-0 bg-card px-5 pb-5 pt-5 text-center', theme.border)}>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Payment received
              </span>
              <p className={cn('mt-2 font-display text-3xl font-extrabold tabular-nums', theme.text)}>
                ₹45,000
              </p>
              <p className="mt-1 text-xs text-muted-foreground">UPI · UTR 4471 8820 3311</p>
              <dl className="mt-4 space-y-1.5 border-t border-dashed border-border pt-3 text-left text-xs text-muted-foreground">
                {[
                  ['Receipt No.', 'REC-2026-0117'],
                  ['Against', 'INV-2026-0042'],
                  ['Balance due', '₹54,120.00'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between">
                    <dt>{k}</dt>
                    <dd className="font-semibold tabular-nums text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div
              className={cn('h-3 border-x border-b bg-card', theme.border)}
              style={{
                maskImage:
                  'radial-gradient(circle at 6px 0, transparent 0 5px, black 5.5px)',
                maskSize: '12px 12px',
                maskRepeat: 'repeat-x',
                WebkitMaskImage:
                  'radial-gradient(circle at 6px 0, transparent 0 5px, black 5.5px)',
                WebkitMaskSize: '12px 12px',
                WebkitMaskRepeat: 'repeat-x',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── credit note — money coming off the invoice ──────────────────────────── */
function LedgerHero({ content, theme, points, crumbs }: VariantProps) {
  return <LedgerBase content={content} theme={theme} points={points} crumbs={crumbs} direction="minus" />;
}

/* ── debit note — money going back on ────────────────────────────────────── */
function LedgerPlusHero({ content, theme, points, crumbs }: VariantProps) {
  return <LedgerBase content={content} theme={theme} points={points} crumbs={crumbs} direction="plus" />;
}

/**
 * Credit and debit notes are genuine mirror images of one another, so they
 * share a hero shape and flip its direction rather than pretending to be
 * unrelated — the contrast is the point.
 */
function LedgerBase({
  content,
  theme,
  points,
  crumbs,
  direction,
}: VariantProps & { direction: 'minus' | 'plus' }) {
  const minus = direction === 'minus';
  const Sign = minus ? Minus : Plus;
  return (
    <section className={cn('border-b border-border/60', theme.heroBg)}>
      <div className="mx-auto max-w-5xl px-4 pb-10 pt-8 sm:px-6">
        <Breadcrumbs className="mb-6" items={crumbs} />
        <div className={cn('flex flex-col gap-8 lg:flex-row lg:items-center', !minus && 'lg:flex-row-reverse')}>
          <div className="lg:flex-1">
            <Badge content={content} />
            <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              {content.h1}
            </h1>
            <p className="mt-4 leading-relaxed text-muted-foreground">{content.intro}</p>
            <ul className="mt-6 space-y-2">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Circle className={cn('mt-1.5 h-2 w-2 flex-shrink-0 fill-current', theme.marker)} aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className={cn('rounded-2xl border p-5 lg:w-80', theme.border, theme.softBg)} aria-hidden>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              <Sign className={cn('h-3.5 w-3.5', theme.marker)} />
              {minus ? 'Reduces what is owed' : 'Increases what is owed'}
            </div>
            <dl className="mt-4 space-y-2.5 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <dt>Original INV-2026-0042</dt>
                <dd className="tabular-nums">₹99,120.00</dd>
              </div>
              <div className={cn('flex justify-between font-semibold', theme.text)}>
                <dt>{minus ? 'Credit note' : 'Debit note'}</dt>
                <dd className="tabular-nums">
                  {minus ? '− ₹11,800.00' : '+ ₹7,080.00'}
                </dd>
              </div>
              <div className="flex justify-between border-t border-border/60 pt-2.5 font-bold">
                <dt>Revised payable</dt>
                <dd className="tabular-nums">{minus ? '₹87,320.00' : '₹1,06,200.00'}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
