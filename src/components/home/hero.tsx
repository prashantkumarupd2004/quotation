'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star, Zap } from 'lucide-react';
import { createSampleQuotation } from '@/lib/defaults';
import { QuotationDocument } from '@/components/quotation/quotation-document';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function Hero() {
  const sample = createSampleQuotation();

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern [background-size:36px_36px] opacity-[0.4]" />
      <div className="pointer-events-none absolute -left-40 top-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-secondary/20 blur-[120px]" />

      <div className="container grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <motion.span custom={0} variants={fadeUp} initial="hidden" animate="show" className="section-eyebrow">
            <Sparkles className="h-3.5 w-3.5" /> India&apos;s #1 Free Quotation Maker
          </motion.span>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-6xl"
          >
            Create professional <span className="gradient-text">quotations</span> in 30 seconds
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            The free online quotation generator built for Indian businesses. Add GST, upload your
            logo, pick a premium template, and download a polished PDF instantly. No signup required.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link href="/create" className="btn-primary text-base">
              <Zap className="h-4 w-4" /> Create Free Quotation
            </Link>
            <Link href="/templates" className="btn-secondary text-base">
              Browse Templates <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-1.5">
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </span>
              4.9/5 from 2,000+ businesses
            </span>
            <span>✓ No signup</span>
            <span>✓ GST-ready</span>
            <span>✓ Free forever</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-primary/30 via-secondary/20 to-accent/30 blur-2xl" />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="rounded-2xl bg-slate-100 p-3 shadow-2xl shadow-primary/20 ring-1 ring-black/5 dark:bg-slate-900/60 sm:p-5"
          >
            <div className="max-h-[520px] overflow-hidden rounded-xl">
              <QuotationDocument quotation={sample} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
