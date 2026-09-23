import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Instagram, Mail, Shield } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = buildMetadata({
  title: "Prashant Upadhyay — Author & Developer",
  description:
    "Prashant Upadhyay is an independent developer based in India who built QuotationMaker.in to help Indian small businesses and freelancers create GST-compliant quotations, invoices and business documents without expensive software.",
  path: "/author/prashant-upadhyay",
});

export default function AuthorPage() {
  const recentPosts = blogPosts.slice(0, 8);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Author", path: "/author/prashant-upadhyay" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Person",
            name: siteConfig.operator.name,
            url: `${siteConfig.url}/author/prashant-upadhyay`,
            email: siteConfig.contactEmail,
            jobTitle: "Independent Developer & Founder",
            worksFor: {
              "@type": "Organization",
              name: siteConfig.name,
              url: siteConfig.url,
            },
            knowsAbout: [
              "GST invoicing in India",
              "Indian business documentation",
              "Quotation and estimate formats",
              "CGST SGST IGST calculation",
              "Small business tools",
            ],
            sameAs: siteConfig.operator.profiles.map((p) => p.url),
          },
        ]}
      />
      <PageHero
        eyebrow="About the author"
        title="Prashant Upadhyay"
        description="Independent developer and founder of QuotationMaker.in — building free business document tools for Indian freelancers and MSMEs."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Prashant Upadhyay", path: "/author/prashant-upadhyay" },
        ]}
      />

      <div className="container max-w-3xl py-16 space-y-12">
        {/* Identity card */}
        <section className="rounded-3xl border border-border bg-muted/30 p-8">
          <div className="flex items-start gap-4">
            <span className="grid h-16 w-16 flex-shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary font-display text-2xl font-bold">
              PU
            </span>
            <div className="min-w-0">
              <h2 className="font-display text-xl font-bold">Prashant Upadhyay</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Independent Developer · {siteConfig.operator.country} · {siteConfig.name}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-3.5 py-2 text-sm font-medium text-primary transition-colors hover:border-primary/50"
                >
                  <Mail className="h-4 w-4" /> {siteConfig.contactEmail}
                </a>
                {siteConfig.operator.profiles.map((p) => (
                  <a
                    key={p.url}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-3.5 py-2 text-sm font-medium transition-colors hover:border-primary/50"
                  >
                    <Instagram className="h-4 w-4" /> {p.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Personal bio */}
        <article className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <h2 className="font-display text-2xl font-bold text-foreground">About me</h2>
          <p>
            I am an independent developer based in India. I built QuotationMaker.in after spending
            too much time helping freelancer friends format GST quotations in Excel — reformatting
            headers, manually calculating CGST and SGST, copy-pasting client details from old
            documents. The process was slow, the output looked unprofessional, and the GST
            arithmetic was always a source of uncertainty.
          </p>
          <p>
            The realistic alternatives — paid billing software, Tally, or Zoho Books — assumed you
            were running a larger operation and required subscriptions, onboarding, and sometimes an
            accountant to set up correctly. For a contractor who needs to send one quotation today,
            none of that fits. So I built the narrow version of the problem solved properly: open a
            browser, enter the details, get a clean GST-compliant PDF, send it, move on.
          </p>
          <p>
            QuotationMaker.in is a solo project. When you email the support address, the reply comes
            from me — the same person who wrote the code, the guides, and the industry pages.
            Feature requests from people actually using the tool are the main reason new things get
            built.
          </p>
        </article>

        {/* Domain expertise */}
        <section className="rounded-3xl border border-border p-8">
          <h2 className="font-display text-xl font-bold">What I know and what I don&apos;t</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            The guides on this site are written from practical experience building tools for Indian
            business documentation — understanding what fields a GST invoice must contain, how
            CGST/SGST and IGST work in practice, what an e-way bill threshold means for a logistics
            business, and what a freelancer&apos;s quotation should say to protect them from scope
            creep.
          </p>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            I am not a chartered accountant, a tax practitioner or a lawyer. The guides explain
            common practice and the rules as I understand them from official CBIC notifications and
            the GST portal. They are not a substitute for professional advice on your specific
            situation — the{" "}
            <Link href="/disclaimer" className="font-medium text-primary hover:underline">
              disclaimer
            </Link>{" "}
            explains this in full.
          </p>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            If you spot something incorrect or out of date — GST rates change, thresholds get
            revised — please{" "}
            <Link href="/contact" className="font-medium text-primary hover:underline">
              email me
            </Link>{" "}
            and it will be corrected.
          </p>
        </section>

        {/* Editorial standards */}
        <section className="rounded-3xl border border-primary/20 bg-primary/5 p-8">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
              <Shield className="h-5 w-5" />
            </span>
            <h2 className="font-display text-xl font-bold">Editorial standards</h2>
          </div>
          <ul className="mt-5 space-y-3 text-muted-foreground">
            {[
              "GST-specific content is cross-referenced against CBIC notifications and the official GST portal before publication.",
              "Articles that cover regulatory thresholds — registration limits, TDS rates, e-way bill rules — are given a last verified date and updated when rules change.",
              "Sample HSN/SAC codes and GST rates in the industry guides are sourced from the CBIC rate schedules. They are illustrative examples, not classification rulings — confirm with your CA before use.",
              "Where information could become stale, the article says so explicitly rather than stating it as current fact.",
              "No article accepts sponsored content or affiliate placement. The only monetisation on this site is advertising.",
            ].map((line) => (
              <li key={line} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span className="leading-relaxed">{line}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Recent articles */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
              <BookOpen className="h-5 w-5" />
            </span>
            <h2 className="font-display text-xl font-bold">Recent guides</h2>
          </div>
          <ul className="space-y-3">
            {recentPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-border p-4 transition-all hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="min-w-0">
                    <span className="text-xs font-semibold text-primary">{post.category}</span>
                    <p className="mt-0.5 font-semibold group-hover:text-primary truncate">
                      {post.title}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Link href="/blog" className="btn-secondary">
              All guides <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8 text-center">
          <h2 className="font-display text-xl font-bold">Get in touch</h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Bug report, feature request, factual correction in a guide, or just a question — all
            go to the same inbox and get a reply from the same person.
          </p>
          <Link href="/contact" className="btn-primary mt-5">
            Send a message <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </>
  );
}
