import type { Metadata } from 'next';
import Link from 'next/link';
import { Bug, Clock, Instagram, Mail, ShieldQuestion, User } from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { JsonLd } from '@/components/json-ld';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { siteConfig } from '@/lib/site';
import { ContactForm } from './contact-form';

export const metadata: Metadata = buildMetadata({
  title: 'Contact Us',
  description:
    'Get in touch with QuotationMaker.in. Email reaches Prashant Upadhyay, who builds and operates the site directly — bug reports, feature requests and data deletion requests all welcome.',
  path: '/contact',
});

const channels = [
  {
    icon: Mail,
    title: 'Email',
    lines: [siteConfig.contactEmail],
    href: `mailto:${siteConfig.contactEmail}`,
    note: 'The only support channel, and the fastest way to reach a person.',
  },
  {
    icon: User,
    title: 'Who replies',
    lines: [siteConfig.operator.name],
    note: `The site is run by one person in ${siteConfig.operator.country}. There is no support team, ticket queue or call centre.`,
  },
  {
    icon: Clock,
    title: 'Response time',
    lines: ['Usually 1–3 business days'],
    note: 'This is a side project, so replies are not instant — but every genuine email gets one.',
  },
];

const topics = [
  {
    icon: Bug,
    title: 'Reporting a bug',
    text: 'Tell us which tool you were using, which browser and device, what you did, and what you expected to happen instead. A screenshot helps a lot. Please do not attach a real client document — describe the problem instead.',
  },
  {
    icon: ShieldQuestion,
    title: 'Deleting a share link',
    text: 'If you created a share link and lost the delete button, send us the link and it will be removed from the server. You do not need to prove ownership beyond having the link.',
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ])}
      />
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        description="Questions, bug reports, feature requests and data deletion requests all go to the same inbox — and reach the person who built the site."
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ]}
      />

      <section className="container grid grid-cols-1 gap-10 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        <div className="space-y-4">
          {channels.map((c) => (
            <div key={c.title} className="glass-card flex items-start gap-4 p-5">
              <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <div className="font-semibold">{c.title}</div>
                {c.lines.map((line) =>
                  c.href ? (
                    <a
                      key={line}
                      href={c.href}
                      className="block break-words text-sm font-medium text-primary hover:underline"
                    >
                      {line}
                    </a>
                  ) : (
                    <div key={line} className="text-sm font-medium">
                      {line}
                    </div>
                  ),
                )}
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{c.note}</p>
              </div>
            </div>
          ))}

          {siteConfig.operator.profiles.map((p) => (
            <a
              key={p.url}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card flex items-start gap-4 p-5 transition-colors hover:border-primary/40"
            >
              <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <Instagram className="h-5 w-5" />
              </span>
              <div>
                <div className="font-semibold">{p.label}</div>
                <div className="text-sm text-primary">@prashantkrupd</div>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  The developer&rsquo;s personal account. Email is better for anything about the site.
                </p>
              </div>
            </a>
          ))}

          <div className="rounded-2xl border border-border bg-muted/30 p-5 text-xs leading-relaxed text-muted-foreground">
            <p className="mb-1.5 font-semibold text-foreground">Before you write in</p>
            <p>
              We cannot recover a document you lost — your documents are stored only in your own
              browser and we never receive a copy. We also cannot advise on GST rates or tax
              classification; please ask your accountant. See the{' '}
              <Link href="/disclaimer" className="text-primary hover:underline">
                disclaimer
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <ContactForm />

          <div className="grid gap-4 sm:grid-cols-2">
            {topics.map((t) => (
              <div key={t.title} className="rounded-2xl border border-border p-5">
                <div className="flex items-center gap-2">
                  <t.icon className="h-4 w-4 flex-shrink-0 text-primary" />
                  <h2 className="text-sm font-semibold">{t.title}</h2>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
