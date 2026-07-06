import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { buildMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = buildMetadata({
  title: 'About QuotationMaker.in',
  description:
    'QuotationMaker.in is a free, privacy-first quotation generator built for Indian businesses, freelancers and contractors. Learn about our mission.',
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
        title="Professional quotations, made effortless"
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ]}
      />
      <article className="container max-w-3xl space-y-6 py-16 text-lg leading-relaxed text-muted-foreground">
        <p>
          QuotationMaker.in started with a simple frustration: creating a clean, professional
          quotation in India was harder than it should be. Small businesses juggled clunky
          spreadsheets and word processors, wrestled with GST maths, and still ended up sending
          documents that did not reflect the quality of their work.
        </p>
        <p>
          We set out to fix that with a tool that is genuinely fast, genuinely free, and genuinely
          private. There is no signup wall, no watermark on your PDF, and no server quietly storing
          your client list — everything runs in your browser and autosaves to your own device.
        </p>
        <p>
          Under the hood, the app handles the details that matter to Indian businesses: per-item GST
          at every slab, automatic CGST/SGST and IGST splits, amount-in-words, multi-currency
          support, and a dozen print-ready templates designed to make even a one-person business look
          established.
        </p>
        <p>
          Whether you are a contractor quoting a site, a freelancer pricing a project, or a
          distributor sending bulk rates, our mission is the same — help you look professional and
          get paid faster, without cost or complexity.
        </p>
        <div className="rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8 text-center text-base text-foreground">
          <h2 className="font-display text-2xl font-bold">Try it in 30 seconds</h2>
          <p className="mt-2 text-muted-foreground">No account needed. Your data stays with you.</p>
          <Link href="/create" className="btn-primary mt-5">
            Create Free Quotation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </article>
    </>
  );
}
