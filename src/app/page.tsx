import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, Star } from 'lucide-react';
import { Hero } from '@/components/home/hero';
import { Reveal } from '@/components/ui/reveal';
import { Faq } from '@/components/ui/faq';
import { Icon } from '@/components/ui/icon';
import { TemplateThumb } from '@/components/quotation/template-thumb';
import { JsonLd } from '@/components/json-ld';
import { buildMetadata } from '@/lib/seo';
import { faqSchema } from '@/lib/schema';
import { templates } from '@/lib/templates';
import { DOCUMENT_TYPE_LIST } from '@/lib/document-types';
import {
  homeBenefits,
  homeCategories,
  homeFaqs,
  homeFeatures,
  homeSteps,
  homeTestimonials,
} from '@/data/home';

export const metadata: Metadata = buildMetadata({
  title: 'Free Online Quotation Maker & GST Quotation Generator',
  description:
    'Create professional GST quotations online in 30 seconds — free. India\'s best quotation maker with 15+ templates, auto CGST/SGST/IGST calculation, live preview and instant PDF & PNG download. No signup.',
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
    'proforma invoice maker',
    'quote generator',
    'quotation maker app',
    'business document generator',
    'invoice maker free',
    'gst bill maker online',
    'free business documents online India',
    'quotation and invoice maker online free',
    'how to create business documents online free',
    'billing and quotation software free no signup',
  ],
});

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-lg text-muted-foreground">{description}</p> : null}
    </div>
  );
}

export default function HomePage() {
  const featured = templates.slice(0, 6);

  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />
      <Hero />

      {/* Trusted-by strip */}
      <section className="border-y border-border/60 bg-muted/30 py-8">
        <div className="container grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
          {[
            { value: '2,000+', label: 'Businesses' },
            { value: '50,000+', label: 'Quotations created' },
            { value: '15+', label: 'Premium templates' },
            { value: '30 sec', label: 'Average time' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl font-extrabold gradient-text">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* All document tools */}
      <section id="tools" className="container py-20 sm:py-28">
        <SectionHeader
          eyebrow="10 free tools, one platform"
          title="Every business document, one place"
          description="Quotations are just the start — generate invoices, GST bills, purchase orders, challans and more with the same fast editor."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {DOCUMENT_TYPE_LIST.map((tool, i) => (
            <Reveal key={tool.id} delay={(i % 4) * 0.04}>
              <Link
                href={tool.path}
                className="glass-card group flex h-full flex-col p-5 transition-all hover:-translate-y-1 hover:border-primary/40"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon name={tool.icon} className="h-5 w-5" />
                </span>
                <span className="mt-3 flex items-center gap-1.5 font-display font-bold">
                  {tool.label}
                  {tool.id === 'quotation' ? (
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                      Popular
                    </span>
                  ) : null}
                </span>
                <span className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{tool.tagline}</span>
                <span className="mt-auto flex items-center gap-1 pt-3 text-sm font-semibold text-primary">
                  Create free <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-y border-border/60 bg-muted/30 py-20 sm:py-28">
        <div className="container">
        <SectionHeader
          eyebrow="Everything you need"
          title="A complete quotation toolkit, free"
          description="From GST maths to branded PDFs, every detail is handled so you can quote faster and win more work."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homeFeatures.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 0.05}>
              <div className="glass-card h-full p-6 transition-transform hover:-translate-y-1">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-primary/25">
                  <Icon name={f.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 sm:py-28">
        <div className="container">
          <SectionHeader
            eyebrow="How it works"
            title="From blank page to PDF in four steps"
            description="No learning curve. If you can fill a form, you can build a professional quotation."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {homeSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="relative h-full rounded-3xl border border-border bg-card p-6">
                  <span className="font-display text-5xl font-extrabold text-primary/15">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container py-20 sm:py-28">
        <SectionHeader
          eyebrow="Built for your trade"
          title="Quotation makers for every business"
          description="Tailored formats, sample line items and expert tips for 20+ industries across India."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {homeCategories.map((cat, i) => (
            <Reveal key={cat.slug} delay={(i % 4) * 0.04}>
              <Link
                href={`/industries/${cat.slug}`}
                className="glass-card group flex items-center gap-3 p-4 transition-all hover:-translate-y-1 hover:border-primary/40"
              >
                <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon name={cat.icon} className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold">{cat.name}</span>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/industries" className="btn-secondary">
            View all 20 industries <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Templates showcase */}
      <section className="border-y border-border/60 bg-muted/30 py-20 sm:py-28">
        <div className="container">
          <SectionHeader
            eyebrow="15+ premium templates"
            title="Designs that make you look established"
            description="Every template is print-ready and GST-compatible. Switch between them anytime without losing data."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((t, i) => (
              <Reveal key={t.id} delay={(i % 3) * 0.05}>
                <div className="glass-card overflow-hidden p-4">
                  <TemplateThumb template={t} />
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <h3 className="font-display font-bold">{t.name}</h3>
                      <p className="text-xs text-muted-foreground">{t.category}</p>
                    </div>
                    <Link href={`/create?template=${t.id}`} className="btn-primary px-4 py-2 text-xs">
                      Use
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/templates" className="btn-primary">
              See all templates <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="section-eyebrow">Why QuotationMaker</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
              The fastest way to send a quote your clients trust
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We obsess over the details that win business — accurate GST, a clean layout, and your
              branding front and centre — so you can focus on the work.
            </p>
            <ul className="mt-8 space-y-3">
              {homeBenefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-emerald-500/15 text-emerald-500">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-sm text-foreground">{b}</span>
                </li>
              ))}
            </ul>
            <Link href="/create" className="btn-primary mt-8">
              Start creating <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { k: '100%', v: 'Free forever' },
                { k: '0', v: 'Signups needed' },
                { k: '∞', v: 'Quotations' },
                { k: '10', v: 'Currencies' },
              ].map((s) => (
                <div key={s.v} className="glass-card p-6 text-center">
                  <div className="font-display text-4xl font-extrabold gradient-text">{s.k}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-border/60 bg-muted/30 py-20 sm:py-28">
        <div className="container">
          <SectionHeader
            eyebrow="Loved by businesses"
            title="Trusted across India"
            description="From contractors to freelancers, thousands of professionals quote with confidence."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {homeTestimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 0.05}>
                <figure className="glass-card h-full p-6">
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-sm leading-relaxed text-foreground">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary text-sm font-bold text-white">
                      {t.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold">{t.name}</span>
                      <span className="block text-xs text-muted-foreground">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container py-20 sm:py-28">
        <SectionHeader
          eyebrow="Questions & answers"
          title="Frequently asked questions"
          description="Everything you need to know about creating quotations with our free tool."
        />
        <Faq items={homeFaqs} />
      </section>

      {/* CTA */}
      <section className="container pb-24">
        <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-primary via-secondary to-accent px-8 py-16 text-center text-white sm:px-16 sm:py-20">
          <div className="pointer-events-none absolute inset-0 bg-grid-pattern [background-size:28px_28px] opacity-20" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold tracking-tight text-balance sm:text-5xl">
              Send your next quotation in 30 seconds
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
              Join thousands of Indian businesses creating professional, GST-ready quotations for
              free. No signup, no watermark, no limits.
            </p>
            <Link
              href="/create"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-primary shadow-xl transition-transform hover:-translate-y-0.5"
            >
              Create Free Quotation <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
