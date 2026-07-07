import type { Metadata } from 'next';
import { Mail, MessageCircle, Clock } from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { JsonLd } from '@/components/json-ld';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { siteConfig } from '@/lib/site';
import { ContactForm } from './contact-form';

export const metadata: Metadata = buildMetadata({
  title: 'Contact Us',
  description:
    'Have a question, suggestion or feedback about QuotationMaker.in? Get in touch — we usually reply within one business day.',
  path: '/contact',
});

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
        title="We’d love to hear from you"
        description="Questions, feature requests or feedback — reach out and a real person will get back to you."
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ]}
      />

      <section className="container grid grid-cols-1 gap-10 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        <div className="space-y-4">
          {[
            { icon: Mail, title: 'Email us', value: siteConfig.contactEmail, href: `mailto:${siteConfig.contactEmail}` },
            { icon: MessageCircle, title: 'Feedback', value: 'Tell us what to build next' },
            { icon: Clock, title: 'Response time', value: 'Within 1 business day' },
          ].map((c) => (
            <div key={c.title} className="glass-card flex items-start gap-4 p-5">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" />
              </span>
              <div>
                <div className="font-semibold">{c.title}</div>
                {c.href ? (
                  <a href={c.href} className="text-sm text-primary hover:underline">
                    {c.value}
                  </a>
                ) : (
                  <div className="text-sm text-muted-foreground">{c.value}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        <ContactForm />
      </section>
    </>
  );
}
