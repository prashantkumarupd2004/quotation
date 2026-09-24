import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Instagram, Mail, ShieldCheck, User, Wrench } from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { buildMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';
import { breadcrumbSchema } from '@/lib/schema';
import { siteConfig } from '@/lib/site';
import { TEMPLATE_COUNT } from '@/lib/templates';
import { DOCUMENT_TYPE_LIST } from '@/lib/document-types';
import { industries } from '@/data/industries';
import { blogPosts } from '@/data/blog';

export const metadata: Metadata = buildMetadata({
  title: 'About Us — Who Runs QuotationMaker.in',
  description:
    'QuotationMaker.in is an independently built, ad-supported document tool for Indian businesses, run by Prashant Upadhyay. Who makes it, why it is free, and how it handles your data.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ])}
      />
      <PageHero
        eyebrow="About"
        title="Who builds QuotationMaker.in"
        description="An independently run tool for Indian businesses — no company, no sales team, no signup wall."
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ]}
      />

      <div className="container max-w-3xl py-16">
        {/* ---- Operator identity: who is actually accountable for this site ---- */}
        <section className="rounded-3xl border border-border bg-muted/30 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
              <User className="h-6 w-6" />
            </span>
            <div>
              <h2 className="font-display text-xl font-bold">Site operator</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                This website is built and operated by{' '}
                <strong className="text-foreground">{siteConfig.operator.name}</strong>, an
                independent developer based in {siteConfig.operator.country}.
              </p>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {siteConfig.operator.description} If you email, the reply comes from the same person
                who wrote the code.
              </p>
              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-3.5 py-2 font-medium text-primary transition-colors hover:border-primary/50"
                >
                  <Mail className="h-4 w-4" /> {siteConfig.contactEmail}
                </a>
                {siteConfig.operator.profiles.map((p) => (
                  <a
                    key={p.url}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-3.5 py-2 font-medium transition-colors hover:border-primary/50"
                  >
                    <Instagram className="h-4 w-4" /> {p.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---- Social proof stats ---- */}
        <section className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { value: `${DOCUMENT_TYPE_LIST.length}`, label: 'Document generators', sub: 'Free, no signup' },
            { value: `${TEMPLATE_COUNT}+`, label: 'Print-ready templates', sub: 'Professional designs' },
            { value: `${blogPosts.length}+`, label: 'Written guides', sub: 'GST, quoting & invoicing' },
            { value: `${industries.length}+`, label: 'Industry pages', sub: 'With sample line items' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-border bg-card p-5 text-center">
              <p className="font-display text-3xl font-extrabold text-primary">{stat.value}</p>
              <p className="mt-1 text-sm font-semibold text-foreground">{stat.label}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{stat.sub}</p>
            </div>
          ))}
        </section>

        <article className="mt-14 space-y-6 text-lg leading-relaxed text-muted-foreground">
          <h2 className="font-display text-2xl font-bold text-foreground">Why this site exists</h2>
          <p>
            Producing a clean, GST-correct quotation in India is harder than it should be. The
            realistic options are a spreadsheet you have to reformat every time, a Word template
            where the tax maths is manual, or billing software that wants a subscription and an
            onboarding call before it will print one page.
          </p>
          <p>
            For a contractor standing on a site with a phone, or a freelancer who needs to send a
            price today, none of that fits. This site is the narrow version of that problem solved
            properly: enter the details, get a document that looks like it came from an established
            business, download it, move on.
          </p>

          <h2 className="pt-6 font-display text-2xl font-bold text-foreground">
            What it does today
          </h2>
          <p>
            There are {DOCUMENT_TYPE_LIST.length} document generators, {TEMPLATE_COUNT} print-ready
            templates, {industries.length} industry-specific guides with sample line items and
            common SAC codes, and {blogPosts.length} written guides on quoting, GST and getting
            paid. Everything works without an account.
          </p>
          <p>
            The parts that matter for Indian businesses are handled properly rather than
            approximated: per-item GST across every slab, automatic CGST and SGST splitting for
            intra-state supply and IGST for inter-state, amount in words in the Indian numbering
            system, HSN and SAC fields, round-off, and multi-currency for anyone billing abroad.
          </p>

          <h2 className="pt-6 font-display text-2xl font-bold text-foreground">
            How it is funded, and why that matters to you
          </h2>
          <p>
            The site is paid for by advertising. That is a deliberate choice over the alternatives:
            no subscription, so a small business is not priced out; no free tier that quietly caps
            you at three documents; no watermark to pressure you into upgrading; and no selling of
            data, which is the part worth stating explicitly.
          </p>
          <p>
            There is nothing to buy here and no payment form anywhere on the site — see the{' '}
            <Link href="/refund-policy" className="font-medium text-primary hover:underline">
              refund policy
            </Link>{' '}
            for what that means in practice.
          </p>
        </article>

        {/* ---- Data handling summary, linking to the real policy ---- */}
        <section className="mt-14 rounded-3xl border border-border p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <h2 className="font-display text-xl font-bold">How your data is handled</h2>
          </div>
          <ul className="mt-5 space-y-3 text-muted-foreground">
            {[
              'Documents you build are stored in your own browser, on your own device. They are not sent to us and there is no account holding them.',
              'PDF and PNG files are generated on your device, not on a server.',
              'The one exception is the optional share link, which uploads a copy of that single document so your client can open it. You confirm before it happens.',
              `Share links are deleted automatically after ${siteConfig.shareRetentionDays} days, and you can delete one yourself at any time.`,
              'We do not sell data, we do not run a mailing list, and we do not require an email address to use anything.',
            ].map((line) => (
              <li key={line} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span className="leading-relaxed">{line}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-muted-foreground">
            The full detail, including every third party involved, is in the{' '}
            <Link href="/privacy" className="font-medium text-primary hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        {/* ---- Honest limitations ---- */}
        <section className="mt-10 rounded-3xl border border-border p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <Wrench className="h-5 w-5" />
            </span>
            <h2 className="font-display text-xl font-bold">What it deliberately does not do</h2>
          </div>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Being clear about the limits is more useful than overselling. This is a document
            generator, not accounting software.
          </p>
          <ul className="mt-5 space-y-3 text-muted-foreground">
            {[
              'It does not file GST returns or talk to the GST portal, and it does not generate e-invoices or IRNs.',
              'It does not sync across your devices, because nothing is stored on a server.',
              'It does not track whether a client has paid you, or chase them.',
              'It does not give tax advice — check rates and classifications with your accountant.',
            ].map((line) => (
              <li key={line} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                <span className="leading-relaxed">{line}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-muted-foreground">
            See the{' '}
            <Link href="/disclaimer" className="font-medium text-primary hover:underline">
              disclaimer
            </Link>{' '}
            for the full position on tax and professional advice.
          </p>
        </section>

        <section className="mt-14 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8 text-center">
          <h2 className="font-display text-2xl font-bold">Feedback shapes what gets built next</h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Missing a field, a template or a document type? Tell us — feature requests from people
            actually sending quotations are the main reason new tools get added.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="btn-secondary">
              Send feedback
            </Link>
            <Link href="/create" className="btn-primary">
              Create a quotation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
