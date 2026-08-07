'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Sparkles,
  Star,
  Zap,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const trustBadges = [
  '✓ No Signup Required',
  '✓ GST-Ready Format',
  '✓ No Watermark',
  '✓ Free Forever',
];

const floatingCards = [
  {
    icon: '📄',
    label: 'GST Invoice',
    value: '₹1,18,000',
    color: 'from-blue-500 to-blue-600',
    delay: 0,
  },
  {
    icon: '📋',
    label: 'Quotation',
    value: '₹54,500',
    color: 'from-violet-500 to-violet-600',
    delay: 1.5,
  },
  {
    icon: '🧾',
    label: 'Purchase Order',
    value: '₹2,30,000',
    color: 'from-emerald-500 to-emerald-600',
    delay: 3,
  },
];

const miniStats = [
  { value: '10+', label: 'Document Tools' },
  { value: '25+', label: 'Templates' },
  { value: '₹0', label: 'Cost' },
];

export function Hero() {
  return (
    <section className="hero-section relative overflow-hidden">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-20 h-[550px] w-[550px] rounded-full bg-blue-100 opacity-60 blur-[100px]" />
        <div className="absolute -right-20 top-32 h-[450px] w-[450px] rounded-full bg-violet-100 opacity-50 blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-sky-100 opacity-40 blur-[80px]" />
      </div>

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.25]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container grid grid-cols-1 items-center gap-12 py-20 lg:grid-cols-2 lg:py-28 xl:py-32">
        {/* LEFT — copy */}
        <div className="flex flex-col items-start">
          <motion.span
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="section-eyebrow mb-5"
          >
            <Sparkles className="h-3.5 w-3.5" />
            India&apos;s #1 Free Business Document Platform
          </motion.span>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-display text-4xl font-extrabold leading-[1.07] tracking-tight text-balance text-foreground sm:text-5xl xl:text-6xl"
          >
            Create{' '}
            <span className="gradient-text">Professional Documents</span>{' '}
            for Your Business — Free
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground"
          >
            Generate GST-ready quotations, invoices, purchase orders, delivery challans, payment receipts and more — directly in your browser. No account. No watermark. Instant PDF.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/create"
              id="hero-cta-create"
              className="btn-primary px-7 py-3.5 text-base"
            >
              <Zap className="h-5 w-5" /> Create Free Quotation
            </Link>
            <Link
              href="/templates"
              id="hero-cta-templates"
              className="btn-secondary px-7 py-3.5 text-base"
            >
              Browse Templates <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-7 flex flex-wrap gap-x-5 gap-y-2"
          >
            {trustBadges.map((b) => (
              <span key={b} className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-emerald-500" />
                {b.replace('✓ ', '')}
              </span>
            ))}
          </motion.div>

          {/* Mini stats */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-10 flex divide-x divide-border"
          >
            {miniStats.map((s) => (
              <div key={s.label} className="px-6 first:pl-0 last:pr-0">
                <div className="font-display text-2xl font-extrabold gradient-text">{s.value}</div>
                <div className="mt-0.5 text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center"
        >
          {/* Glow */}
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-blue-200/60 via-violet-200/40 to-sky-200/60 blur-3xl" />

          {/* Main document mockup */}
          <div className="relative w-full max-w-md">
            <div className="rounded-2xl border border-white/60 bg-white shadow-2xl shadow-blue-900/10 ring-1 ring-black/[0.04]">
              {/* Mockup header bar */}
              <div className="flex items-center gap-2 border-b border-gray-100 px-5 py-4">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-amber-400" />
                <div className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="ml-3 text-xs font-medium text-gray-400">
                  quotationmaker.in / create
                </span>
              </div>

              {/* Document preview */}
              <div className="p-5">
                {/* Company header */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className="h-8 w-32 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600" />
                    <div className="mt-2 h-2.5 w-24 rounded bg-gray-100" />
                    <div className="mt-1.5 h-2 w-28 rounded bg-gray-100" />
                  </div>
                  <div className="text-right">
                    <div className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                      QUOTATION
                    </div>
                    <div className="mt-2 h-2 w-20 rounded bg-gray-100 ml-auto" />
                    <div className="mt-1.5 h-2 w-16 rounded bg-gray-100 ml-auto" />
                  </div>
                </div>

                {/* Divider */}
                <div className="my-4 h-px bg-gradient-to-r from-blue-500 to-violet-500 opacity-30" />

                {/* Bill to */}
                <div className="mb-4">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Bill To</div>
                  <div className="mt-1.5 h-2.5 w-36 rounded bg-gray-100" />
                  <div className="mt-1 h-2 w-28 rounded bg-gray-100" />
                </div>

                {/* Items table */}
                <div className="rounded-xl bg-gray-50 p-3">
                  <div className="mb-2 grid grid-cols-4 gap-2">
                    {['Description', 'Qty', 'Rate', 'Amount'].map((h) => (
                      <div key={h} className="text-[9px] font-bold uppercase tracking-wider text-gray-400">
                        {h}
                      </div>
                    ))}
                  </div>
                  {[
                    ['Website Design', '1', '₹25,000', '₹25,000'],
                    ['SEO Setup', '1', '₹8,000', '₹8,000'],
                    ['Hosting Config', '1', '₹3,000', '₹3,000'],
                  ].map((row, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-4 gap-2 rounded-lg py-2"
                    >
                      {row.map((cell, j) => (
                        <div key={j} className="text-[10px] font-medium text-gray-700 truncate">
                          {cell}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="mt-4 space-y-1.5">
                  {[
                    { label: 'Subtotal', value: '₹36,000' },
                    { label: 'GST 18%', value: '₹6,480' },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between text-[11px] text-gray-500">
                      <span>{row.label}</span>
                      <span className="font-medium text-gray-700">{row.value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 px-3 py-2 text-white">
                    <span className="text-xs font-bold">Total</span>
                    <span className="text-sm font-extrabold">₹42,480</span>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="mt-5 flex gap-2">
                  <div className="flex h-8 flex-1 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 text-[11px] font-bold text-white shadow-sm">
                    Download PDF
                  </div>
                  <div className="flex h-8 items-center justify-center rounded-lg border border-gray-200 px-3 text-[11px] font-semibold text-gray-600">
                    Share
                  </div>
                  <div className="flex h-8 items-center justify-center rounded-lg border border-gray-200 px-3 text-[11px] font-semibold text-gray-600">
                    Print
                  </div>
                </div>
              </div>
            </div>

            {/* Floating review badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-10 top-10 hidden rounded-2xl border border-white/60 bg-white px-3 py-2.5 shadow-xl shadow-blue-900/10 sm:block"
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">⚡</span>
                <div>
                  <div className="text-[10px] font-bold text-gray-800">Created in 30 sec</div>
                  <div className="text-[9px] text-gray-400">GST auto-calculated</div>
                </div>
              </div>
            </motion.div>

            {/* Floating rating badge */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -right-6 bottom-16 hidden rounded-2xl border border-white/60 bg-white px-3 py-2.5 shadow-xl shadow-violet-900/8 sm:block"
            >
              <div className="flex items-center gap-1.5">
                <FileText className="h-4 w-4 text-violet-600" />
                <div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="text-[9px] text-gray-400">Loved by 1000s</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
