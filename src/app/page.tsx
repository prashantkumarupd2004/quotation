import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Hero } from '@/components/home/hero';
import { Reveal } from '@/components/ui/reveal';
import { Faq } from '@/components/ui/faq';
import { Icon } from '@/components/ui/icon';
import { TemplateThumb } from '@/components/quotation/template-thumb';
import { JsonLd } from '@/components/json-ld';
import { buildMetadata } from '@/lib/seo';
import { faqSchema } from '@/lib/schema';
import { templates, TEMPLATE_COUNT } from '@/lib/templates';
import { DOCUMENT_TYPE_LIST } from '@/lib/document-types';
import { industries } from '@/data/industries';
import { blogPosts } from '@/data/blog';
import { formatDate } from '@/lib/format';
import {
  homeBenefits,
  homeCategories,
  homeCommitments,
  homeComparison,
  homeFaqs,
  homeFeatures,
  homeSteps,
  homeUserHighlights,
  homeWhyUs,
} from '@/data/home';

export const metadata: Metadata = buildMetadata({
  title: 'Free Quotation Maker & Business Document Generator — QuotationMaker.in',
  description:
    'Create professional GST quotations, invoices, purchase orders, delivery challans and receipts free online — 25 templates, automatic CGST/SGST/IGST, instant PDF download, no signup required.',
  path: '/',
  keywords: [
    'quotation maker',
    'free quotation maker',
    'online quotation generator',
    'GST quotation format',
    'quotation maker India',
    'quotation format pdf',
    'create quotation online',
    'quotation template',
    'estimate maker',
    'invoice maker free',
    'business document generator India',
    'GST invoice maker free',
  ],
});

// ─── Reusable section header ──────────────────────────────────────────────────

function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
}) {
  return (
    <div
      className={`mb-12 max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}

// ─── Colour map for why-us cards ─────────────────────────────────────────────

const colorMap: Record<string, { bg: string; icon: string; ring: string }> = {
  emerald: {
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    icon: 'text-emerald-600 bg-emerald-100 dark:bg-emerald-900/50',
    ring: 'ring-emerald-200 dark:ring-emerald-900',
  },
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    icon: 'text-blue-600 bg-blue-100 dark:bg-blue-900/50',
    ring: 'ring-blue-200 dark:ring-blue-900',
  },
  violet: {
    bg: 'bg-violet-50 dark:bg-violet-950/30',
    icon: 'text-violet-600 bg-violet-100 dark:bg-violet-900/50',
    ring: 'ring-violet-200 dark:ring-violet-900',
  },
  amber: {
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    icon: 'text-amber-600 bg-amber-100 dark:bg-amber-900/50',
    ring: 'ring-amber-200 dark:ring-amber-900',
  },
  rose: {
    bg: 'bg-rose-50 dark:bg-rose-950/30',
    icon: 'text-rose-600 bg-rose-100 dark:bg-rose-900/50',
    ring: 'ring-rose-200 dark:ring-rose-900',
  },
  cyan: {
    bg: 'bg-cyan-50 dark:bg-cyan-950/30',
    icon: 'text-cyan-600 bg-cyan-100 dark:bg-cyan-900/50',
    ring: 'ring-cyan-200 dark:ring-cyan-900',
  },
};

// ─── Homepage ─────────────────────────────────────────────────────────────────

export default function HomePage() {
  const featuredTemplates = templates.slice(0, 6);
  const latestBlogs = blogPosts.slice(0, 3);

  // Prominent tools shown in the Popular Tools section
  const popularTools = DOCUMENT_TYPE_LIST.slice(0, 7);

  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />

      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <Hero />

      {/* ── 2. TOOL CAPABILITY STRIP ──────────────────────────────────────── */}
      <section
        id="highlights"
        className="border-y border-border/60 bg-gradient-to-r from-blue-600 via-violet-600 to-blue-700 py-10"
      >
        <div className="container">
          <div className="grid grid-cols-2 gap-6 text-center text-white sm:grid-cols-3 lg:grid-cols-6">
            {homeUserHighlights.map((h) => (
              <div key={h.label} className="space-y-1">
                <div className="font-display text-2xl font-extrabold sm:text-3xl">{h.stat}</div>
                <div className="text-sm font-semibold text-white/90">{h.label}</div>
                <div className="text-xs text-white/60 leading-snug">{h.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. POPULAR BUSINESS TOOLS ────────────────────────────────────── */}
      <section id="tools" className="container py-20 sm:py-28">
        <SectionHeader
          eyebrow={`${DOCUMENT_TYPE_LIST.length} free document tools`}
          title="Every Business Document You Need"
          description="From quotations to GST invoices, purchase orders to salary slips — create any professional document in minutes, completely free."
        />

        {/* Popular tools — larger cards with descriptions */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {DOCUMENT_TYPE_LIST.map((tool, i) => (
            <Reveal key={tool.id} delay={(i % 4) * 0.05}>
              <Link
                href={tool.path}
                id={`tool-card-${tool.id}`}
                className="glass-card group flex h-full flex-col p-5 transition-all hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/30">
                    <Icon name={tool.icon} className="h-6 w-6" />
                  </span>
                  {tool.id === 'quotation' ? (
                    <span className="rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-amber-700">
                      ★ Popular
                    </span>
                  ) : null}
                  {tool.id === 'gst-invoice' ? (
                    <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-700">
                      GST
                    </span>
                  ) : null}
                </div>
                <span className="mt-4 font-display text-base font-bold">{tool.label}</span>
                <span className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {tool.tagline}
                </span>
                <span className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Create free <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/tools" className="btn-secondary">
            View All Tools & Guides <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ── 4. WHY CHOOSE US ─────────────────────────────────────────────── */}
      <section
        id="why-us"
        className="border-y border-border/60 bg-muted/30 py-20 sm:py-28"
      >
        <div className="container">
          <SectionHeader
            eyebrow="Why choose us"
            title="Everything a Growing Business Needs"
            description="QuotationMaker.in is built from the ground up for Indian businesses — freelancers, MSMEs, contractors and enterprises alike."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeWhyUs.map((item, i) => {
              const colors = colorMap[item.color] ?? colorMap.blue;
              return (
                <Reveal key={item.title} delay={(i % 3) * 0.06}>
                  <div
                    className={`h-full rounded-3xl p-6 ring-1 transition-transform hover:-translate-y-1 ${colors.bg} ${colors.ring}`}
                  >
                    <span
                      className={`inline-grid h-12 w-12 place-items-center rounded-2xl ${colors.icon}`}
                    >
                      <Icon name={item.icon} className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. HOW IT WORKS ──────────────────────────────────────────────── */}
      <section id="how-it-works" className="container py-20 sm:py-28">
        <SectionHeader
          eyebrow="4 simple steps"
          title="From Blank Page to PDF in Under 2 Minutes"
          description="No learning curve. No tutorials. If you can fill a form, you can create a professional business document."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {homeSteps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.09}>
              <div className="relative h-full rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/8">
                {/* Step number */}
                <span className="font-display text-6xl font-extrabold text-primary/10">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Icon */}
                <span className="mt-2 grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-md shadow-primary/30">
                  <Icon name={step.icon} className="h-5 w-5" />
                </span>

                <h3 className="mt-4 font-display text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>

                {/* Connector arrow (except last) */}
                {i < homeSteps.length - 1 ? (
                  <span className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-3 text-muted-foreground/40 lg:block">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/create" className="btn-primary text-base">
            Start Creating Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ── 6. INDUSTRIES WE SERVE ───────────────────────────────────────── */}
      <section
        id="industries"
        className="border-y border-border/60 bg-muted/30 py-20 sm:py-28"
      >
        <div className="container">
          <SectionHeader
            eyebrow={`${industries.length}+ industry guides`}
            title="Tailored for Every Trade & Profession"
            description="Whether you are a contractor, freelancer, doctor or event planner — we have industry-specific templates, sample line items and expert guides for you."
          />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {homeCategories.map((cat, i) => (
              <Reveal key={cat.slug} delay={(i % 6) * 0.04}>
                <Link
                  href={`/industries/${cat.slug}`}
                  id={`industry-${cat.slug}`}
                  className="glass-card group flex flex-col items-center gap-3 p-5 text-center transition-all hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/30">
                    <Icon name={cat.icon} className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-semibold">{cat.name}</span>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/industries" className="btn-secondary">
              View All {industries.length} Industries <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 7. TEMPLATES SHOWCASE ────────────────────────────────────────── */}
      <section id="templates" className="container py-20 sm:py-28">
        <SectionHeader
          eyebrow={`${TEMPLATE_COUNT} premium templates`}
          title="Designs That Make You Look Established"
          description="Every template is print-ready, GST-compatible and works on all document types. Switch between designs anytime — your data stays intact."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTemplates.map((t, i) => (
            <Reveal key={t.id} delay={(i % 3) * 0.06}>
              <div className="glass-card group overflow-hidden p-4 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
                <div className="overflow-hidden rounded-xl">
                  <TemplateThumb template={t} />
                </div>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <div>
                    <h3 className="font-display font-bold">{t.name}</h3>
                    <p className="text-xs text-muted-foreground">{t.category}</p>
                  </div>
                  <Link
                    href={`/create?template=${t.id}`}
                    id={`use-template-${t.id}`}
                    className="btn-primary whitespace-nowrap px-4 py-2 text-xs"
                  >
                    Use Free
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/templates" className="btn-primary">
            See All {TEMPLATE_COUNT} Templates <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ── 8. BENEFITS / WHY QUOTATIONMAKER ─────────────────────────────── */}
      <section
        id="benefits"
        className="border-y border-border/60 bg-muted/30 py-20 sm:py-28"
      >
        <div className="container">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <span className="section-eyebrow">Why QuotationMaker</span>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
                The Fastest Way to Send a Quote Your Clients Trust
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                We handle the details that win business — accurate GST maths, a clean layout, your branding front and centre — so you can focus on the actual work.
              </p>
              <ul className="mt-8 space-y-3">
                {homeBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-emerald-500/15 text-emerald-600">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-sm text-foreground">{b}</span>
                  </li>
                ))}
              </ul>
              <Link href="/create" className="btn-primary mt-8">
                Start Creating <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>

            {/* Comparison table */}
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-black/5">
                <div className="grid grid-cols-4 border-b border-border bg-muted/50 px-4 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <span className="col-span-2">Feature</span>
                  <span className="text-center text-primary">QuotationMaker</span>
                  <span className="text-center">Billing App</span>
                </div>
                {homeComparison.slice(0, 8).map((row, i) => (
                  <div
                    key={row.feature}
                    className={`grid grid-cols-4 items-center px-4 py-3 text-sm ${
                      i % 2 === 0 ? 'bg-card' : 'bg-muted/20'
                    }`}
                  >
                    <span className="col-span-2 font-medium text-muted-foreground">
                      {row.feature}
                    </span>
                    <span className="text-center font-semibold text-emerald-600">{row.us}</span>
                    <span className="text-center text-xs text-muted-foreground">{row.billing}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 9. WHY QUOTATIONMAKER — FEATURE GRID ─────────────────────────── */}
      {/* Testimonials section removed: real user reviews will be added once
          collected from actual users. Placeholder personas were misleading. */}
      <section id="why-free" className="container py-20 sm:py-28">
        <SectionHeader
          eyebrow="How it works"
          title="Built for Indian Businesses, Not for Billing You"
          description="QuotationMaker.in is a solo-built, ad-supported tool designed so every small business in India can send a professional GST document without paying for software."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: '🏗️',
              title: '10 Document Types',
              body: 'Quotation, invoice, GST invoice, estimate, proforma invoice, purchase order, delivery challan, payment receipt, credit note and debit note — all in one builder.',
            },
            {
              icon: '🎨',
              title: '25 Free Templates',
              body: 'Modern, corporate, minimal and industry-specific designs. Switch templates at any time — your data carries across without re-entering anything.',
            },
            {
              icon: '🧮',
              title: 'Automatic GST Maths',
              body: 'Per-item GST at every slab. CGST + SGST for same-state supply, IGST for inter-state — calculated live as you type, with HSN/SAC fields built in.',
            },
            {
              icon: '📱',
              title: 'Works on Any Device',
              body: 'Fully responsive on phone, tablet and desktop. Install as a PWA and use offline after the first load — ideal for contractors working on-site.',
            },
            {
              icon: '🔒',
              title: 'Your Data Stays with You',
              body: 'Documents are saved in your browser on your own device. Nothing is uploaded to a server unless you explicitly create a share link.',
            },
            {
              icon: '₹',
              title: 'Free — No Subscription',
              body: 'No trial period, no watermark, no paywall. Funded by advertising so the tools stay open to every business, including a one-person operation.',
            },
          ].map((card, i) => (
            <Reveal key={card.title} delay={(i % 3) * 0.06}>
              <div className="glass-card flex h-full flex-col gap-3 p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/8">
                <span className="text-3xl">{card.icon}</span>
                <h3 className="font-display text-lg font-bold">{card.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── 10. FAQ ──────────────────────────────────────────────────────── */}
      <section
        id="faq"
        className="border-y border-border/60 bg-muted/30 py-20 sm:py-28"
      >
        <div className="container">
          <SectionHeader
            eyebrow="Questions & answers"
            title="Frequently Asked Questions"
            description="Everything you need to know about creating business documents with QuotationMaker.in."
          />
          <Faq items={homeFaqs} />
        </div>
      </section>

      {/* ── 11. LATEST BLOG POSTS ─────────────────────────────────────────── */}
      <section id="blog" className="container py-20 sm:py-28">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Business guides"
            title="Learn from Our Expert Guides"
            align="left"
          />
          <Link href="/blog" className="btn-secondary shrink-0 self-start sm:self-auto">
            All Guides <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestBlogs.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.07}>
              <Link
                href={`/blog/${post.slug}`}
                id={`blog-card-${post.slug}`}
                className="glass-card group flex h-full flex-col overflow-hidden transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/8"
              >
                {/* Colour strip */}
                <div className="h-2 w-full bg-gradient-to-r from-primary to-secondary" />
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <span className="w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {post.category}
                  </span>
                  <h3 className="font-display text-base font-bold leading-snug group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{formatDate(post.date)}</span>
                    <span>{post.author ?? ''} · {post.readingTime} min read</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── 12. TRUST / COMMITMENTS ──────────────────────────────────────── */}
      <section className="border-y border-border/60 bg-muted/30 py-16 sm:py-20">
        <div className="container">
          <SectionHeader
            eyebrow="How this site works"
            title="No Signup. No Upsell. No Surprises."
            description="We believe in total transparency about what this product is and how it works."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {homeCommitments.map((c, i) => (
              <Reveal key={c.title} delay={(i % 2) * 0.05}>
                <div className="glass-card flex h-full gap-4 p-6">
                  <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <Icon name={c.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display font-bold">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {c.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Read more about{' '}
            <Link href="/about" className="font-medium text-primary hover:underline">
              who operates this site
            </Link>{' '}
            or{' '}
            <Link href="/privacy" className="font-medium text-primary hover:underline">
              how your data is handled
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── 13. FINAL CALL TO ACTION ─────────────────────────────────────── */}
      <section id="cta" className="container py-24">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-600 via-violet-600 to-blue-700 px-8 py-16 text-center text-white sm:px-16 sm:py-20">
          {/* Grid overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />

          {/* Blob decorations */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur-sm">
              ✨ Start for Free — No Signup Needed
            </span>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-balance sm:text-5xl">
              Send Your First Professional Document in 60 Seconds
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
              Free forever. No account, no watermark, no limit on how many documents you create.
              Built for Indian freelancers, contractors and MSMEs — GST-correct documents in under 60 seconds.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/create"
                id="footer-cta-create"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-blue-700 shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl"
              >
                Create Free Quotation <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/tools"
                id="footer-cta-tools"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/20"
              >
                Explore All Tools
              </Link>
            </div>

            {/* Trust pills */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-white/70">
              {[
                '✓ 100% Free',
                '✓ No Signup',
                '✓ No Watermark',
                '✓ GST Ready',
                '✓ Instant PDF',
                '✓ Mobile Friendly',
              ].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
