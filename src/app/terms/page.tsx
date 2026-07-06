import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/page-hero';
import { LegalDoc } from '@/components/layout/legal-doc';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Terms of Service',
  description:
    'The terms and conditions for using QuotationMaker.in, a free online quotation generator.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Terms of Service', path: '/terms' },
        ]}
      />
      <LegalDoc
        updated="1 July 2026"
        sections={[
          {
            heading: 'Acceptance of terms',
            paragraphs: [
              `By accessing or using ${siteConfig.name} (the "service"), you agree to be bound by these Terms of Service. If you do not agree, please do not use the service.`,
            ],
          },
          {
            heading: 'Use of the service',
            paragraphs: [
              'The service provides free tools to create, preview and download business quotations. You may use it for lawful business and personal purposes only.',
              'You are solely responsible for the accuracy of the content you enter, including prices, tax rates, GST numbers and totals. You must verify all figures before sharing a quotation with a client.',
            ],
          },
          {
            heading: 'No professional advice',
            paragraphs: [
              'The service is provided for convenience and does not constitute legal, tax or financial advice. Tax rules, including GST rates and applicability, change over time and vary by situation. Consult a qualified professional where appropriate.',
            ],
          },
          {
            heading: 'Intellectual property',
            paragraphs: [
              'The website design, templates, code and branding are owned by us and protected by applicable laws. The quotations you generate and the content you enter remain yours.',
              'You may not copy, resell or redistribute the service or its templates as your own product.',
            ],
          },
          {
            heading: 'Availability',
            paragraphs: [
              'We aim to keep the service available and reliable but provide it on an "as is" and "as available" basis without warranties of any kind. We may modify, suspend or discontinue features at any time.',
            ],
          },
          {
            heading: 'Limitation of liability',
            paragraphs: [
              'To the maximum extent permitted by law, we are not liable for any indirect, incidental or consequential damages, or for any loss of data, profits or business, arising from your use of the service.',
            ],
          },
          {
            heading: 'Changes to these terms',
            paragraphs: [
              'We may update these Terms from time to time. Continued use of the service after changes constitutes acceptance of the revised Terms.',
            ],
          },
          {
            heading: 'Contact',
            paragraphs: [`Questions about these Terms can be sent to ${siteConfig.contactEmail}.`],
          },
        ]}
      />
    </>
  );
}
