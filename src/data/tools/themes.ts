import type { ToolThemeId } from './types';

/**
 * Per-tool colour identity.
 *
 * Every value is a literal class string. Tailwind scans source text, so an
 * interpolated `bg-${hue}-100` would be purged from the build — the classes
 * have to appear here verbatim.
 */
export interface ToolTheme {
  /** Hero band background. */
  heroBg: string;
  /** Decorative blur/tint inside the hero. */
  heroBlob: string;
  /** Small pill (eyebrow, step counters, tags). */
  chip: string;
  /** Accent-coloured text. */
  text: string;
  /** Accent border on cards and rules. */
  border: string;
  /** Very light accent fill for panels. */
  softBg: string;
  /** Icon square. */
  iconChip: string;
  /** Numbered circle in how-to steps. */
  numberChip: string;
  /** Card hover border. */
  cardHover: string;
  /** Table header row. */
  tableHeader: string;
  /** Solid accent fill for emphasis rows/buttons. */
  solid: string;
  /** Dot/marker colour for lists. */
  marker: string;
}

export const TOOL_THEMES: Record<ToolThemeId, ToolTheme> = {
  blue: {
    heroBg: 'bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-blue-950/40 dark:via-background dark:to-background',
    heroBlob: 'bg-blue-400/20 dark:bg-blue-500/10',
    chip: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300',
    text: 'text-blue-700 dark:text-blue-400',
    border: 'border-blue-200 dark:border-blue-900',
    softBg: 'bg-blue-50/70 dark:bg-blue-950/25',
    iconChip: 'bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300',
    numberChip: 'bg-blue-600 text-white dark:bg-blue-500',
    cardHover: 'hover:border-blue-400 dark:hover:border-blue-700',
    tableHeader: 'bg-blue-100/80 text-blue-900 dark:bg-blue-950/60 dark:text-blue-200',
    solid: 'bg-blue-600 text-white dark:bg-blue-500',
    marker: 'text-blue-600 dark:text-blue-400',
  },
  emerald: {
    heroBg: 'bg-gradient-to-br from-emerald-50 via-white to-teal-50/60 dark:from-emerald-950/40 dark:via-background dark:to-background',
    heroBlob: 'bg-emerald-400/20 dark:bg-emerald-500/10',
    chip: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300',
    text: 'text-emerald-700 dark:text-emerald-400',
    border: 'border-emerald-200 dark:border-emerald-900',
    softBg: 'bg-emerald-50/70 dark:bg-emerald-950/25',
    iconChip: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300',
    numberChip: 'bg-emerald-600 text-white dark:bg-emerald-500',
    cardHover: 'hover:border-emerald-400 dark:hover:border-emerald-700',
    tableHeader: 'bg-emerald-100/80 text-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-200',
    solid: 'bg-emerald-600 text-white dark:bg-emerald-500',
    marker: 'text-emerald-600 dark:text-emerald-400',
  },
  amber: {
    heroBg: 'bg-gradient-to-br from-amber-50 via-white to-orange-50/50 dark:from-amber-950/40 dark:via-background dark:to-background',
    heroBlob: 'bg-amber-400/25 dark:bg-amber-500/10',
    chip: 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300',
    text: 'text-amber-700 dark:text-amber-400',
    border: 'border-amber-200 dark:border-amber-900',
    softBg: 'bg-amber-50/70 dark:bg-amber-950/25',
    iconChip: 'bg-amber-100 text-amber-700 dark:bg-amber-900/60 dark:text-amber-300',
    numberChip: 'bg-amber-500 text-white dark:bg-amber-500',
    cardHover: 'hover:border-amber-400 dark:hover:border-amber-700',
    tableHeader: 'bg-amber-100/80 text-amber-900 dark:bg-amber-950/60 dark:text-amber-200',
    solid: 'bg-amber-500 text-white dark:bg-amber-500',
    marker: 'text-amber-600 dark:text-amber-400',
  },
  violet: {
    heroBg: 'bg-gradient-to-br from-violet-50 via-white to-purple-50/50 dark:from-violet-950/40 dark:via-background dark:to-background',
    heroBlob: 'bg-violet-400/20 dark:bg-violet-500/10',
    chip: 'bg-violet-100 text-violet-800 dark:bg-violet-950 dark:text-violet-300',
    text: 'text-violet-700 dark:text-violet-400',
    border: 'border-violet-200 dark:border-violet-900',
    softBg: 'bg-violet-50/70 dark:bg-violet-950/25',
    iconChip: 'bg-violet-100 text-violet-700 dark:bg-violet-900/60 dark:text-violet-300',
    numberChip: 'bg-violet-600 text-white dark:bg-violet-500',
    cardHover: 'hover:border-violet-400 dark:hover:border-violet-700',
    tableHeader: 'bg-violet-100/80 text-violet-900 dark:bg-violet-950/60 dark:text-violet-200',
    solid: 'bg-violet-600 text-white dark:bg-violet-500',
    marker: 'text-violet-600 dark:text-violet-400',
  },
  cyan: {
    heroBg: 'bg-gradient-to-br from-cyan-50 via-white to-sky-50/60 dark:from-cyan-950/40 dark:via-background dark:to-background',
    heroBlob: 'bg-cyan-400/20 dark:bg-cyan-500/10',
    chip: 'bg-cyan-100 text-cyan-900 dark:bg-cyan-950 dark:text-cyan-300',
    text: 'text-cyan-700 dark:text-cyan-400',
    border: 'border-cyan-200 dark:border-cyan-900',
    softBg: 'bg-cyan-50/70 dark:bg-cyan-950/25',
    iconChip: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/60 dark:text-cyan-300',
    numberChip: 'bg-cyan-600 text-white dark:bg-cyan-500',
    cardHover: 'hover:border-cyan-400 dark:hover:border-cyan-700',
    tableHeader: 'bg-cyan-100/80 text-cyan-900 dark:bg-cyan-950/60 dark:text-cyan-200',
    solid: 'bg-cyan-600 text-white dark:bg-cyan-500',
    marker: 'text-cyan-600 dark:text-cyan-400',
  },
  indigo: {
    heroBg: 'bg-gradient-to-br from-indigo-50 via-white to-slate-50 dark:from-indigo-950/40 dark:via-background dark:to-background',
    heroBlob: 'bg-indigo-400/20 dark:bg-indigo-500/10',
    chip: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300',
    text: 'text-indigo-700 dark:text-indigo-400',
    border: 'border-indigo-200 dark:border-indigo-900',
    softBg: 'bg-indigo-50/70 dark:bg-indigo-950/25',
    iconChip: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/60 dark:text-indigo-300',
    numberChip: 'bg-indigo-600 text-white dark:bg-indigo-500',
    cardHover: 'hover:border-indigo-400 dark:hover:border-indigo-700',
    tableHeader: 'bg-indigo-100/80 text-indigo-900 dark:bg-indigo-950/60 dark:text-indigo-200',
    solid: 'bg-indigo-600 text-white dark:bg-indigo-500',
    marker: 'text-indigo-600 dark:text-indigo-400',
  },
  teal: {
    heroBg: 'bg-gradient-to-br from-teal-50 via-white to-emerald-50/40 dark:from-teal-950/40 dark:via-background dark:to-background',
    heroBlob: 'bg-teal-400/20 dark:bg-teal-500/10',
    chip: 'bg-teal-100 text-teal-900 dark:bg-teal-950 dark:text-teal-300',
    text: 'text-teal-700 dark:text-teal-400',
    border: 'border-teal-200 dark:border-teal-900',
    softBg: 'bg-teal-50/70 dark:bg-teal-950/25',
    iconChip: 'bg-teal-100 text-teal-700 dark:bg-teal-900/60 dark:text-teal-300',
    numberChip: 'bg-teal-600 text-white dark:bg-teal-500',
    cardHover: 'hover:border-teal-400 dark:hover:border-teal-700',
    tableHeader: 'bg-teal-100/80 text-teal-900 dark:bg-teal-950/60 dark:text-teal-200',
    solid: 'bg-teal-600 text-white dark:bg-teal-500',
    marker: 'text-teal-600 dark:text-teal-400',
  },
  rose: {
    heroBg: 'bg-gradient-to-br from-rose-50 via-white to-pink-50/50 dark:from-rose-950/40 dark:via-background dark:to-background',
    heroBlob: 'bg-rose-400/20 dark:bg-rose-500/10',
    chip: 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300',
    text: 'text-rose-700 dark:text-rose-400',
    border: 'border-rose-200 dark:border-rose-900',
    softBg: 'bg-rose-50/70 dark:bg-rose-950/25',
    iconChip: 'bg-rose-100 text-rose-700 dark:bg-rose-900/60 dark:text-rose-300',
    numberChip: 'bg-rose-600 text-white dark:bg-rose-500',
    cardHover: 'hover:border-rose-400 dark:hover:border-rose-700',
    tableHeader: 'bg-rose-100/80 text-rose-900 dark:bg-rose-950/60 dark:text-rose-200',
    solid: 'bg-rose-600 text-white dark:bg-rose-500',
    marker: 'text-rose-600 dark:text-rose-400',
  },
  orange: {
    heroBg: 'bg-gradient-to-br from-orange-50 via-white to-amber-50/40 dark:from-orange-950/40 dark:via-background dark:to-background',
    heroBlob: 'bg-orange-400/20 dark:bg-orange-500/10',
    chip: 'bg-orange-100 text-orange-900 dark:bg-orange-950 dark:text-orange-300',
    text: 'text-orange-700 dark:text-orange-400',
    border: 'border-orange-200 dark:border-orange-900',
    softBg: 'bg-orange-50/70 dark:bg-orange-950/25',
    iconChip: 'bg-orange-100 text-orange-700 dark:bg-orange-900/60 dark:text-orange-300',
    numberChip: 'bg-orange-600 text-white dark:bg-orange-500',
    cardHover: 'hover:border-orange-400 dark:hover:border-orange-700',
    tableHeader: 'bg-orange-100/80 text-orange-900 dark:bg-orange-950/60 dark:text-orange-200',
    solid: 'bg-orange-600 text-white dark:bg-orange-500',
    marker: 'text-orange-600 dark:text-orange-400',
  },
};
