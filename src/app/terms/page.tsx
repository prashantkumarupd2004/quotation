import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/page-hero';
import { LegalDoc } from '@/components/layout/legal-doc';
import { JsonLd } from '@/components/json-ld';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Terms of Service',
  description:
    'The terms for using QuotationMaker.in: who operates it, what you may do with the tools and templates, what you remain responsible for, and the limits of our liability.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Terms of Service', path: '/terms' },
        ])}
      />
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="The agreement between you and the person who runs this website."
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Terms of Service', path: '/terms' },
        ]}
      />
      <LegalDoc
        updated={siteConfig.legalUpdated}
        intro="These terms are deliberately short and readable. In summary: the tools are free, the documents you make are entirely yours, you are responsible for the figures you put in them, you may not resell the site or its templates as your own product, and because this is a free tool provided as is, our liability is limited."
        sections={[
          {
            heading: 'Who you are agreeing with',
            paragraphs: [
              `${siteConfig.name} (the “service”) is operated by ${siteConfig.operator.name}, an individual based in ${siteConfig.operator.country}. It is an independently run website, not a registered company.`,
              `By accessing or using the service you agree to these terms. If you do not agree with them, please do not use the service. Questions can be sent to ${siteConfig.contactEmail}.`,
            ],
          },
          {
            heading: 'What the service provides',
            paragraphs: [
              'The service provides free, browser-based tools for creating, previewing, downloading and optionally sharing business documents — quotations, estimates, invoices, GST invoices, proforma invoices, purchase orders, delivery challans, payment receipts, credit notes and debit notes — together with templates and informational guides.',
              'No account is required, nothing is charged, and no usage limit applies. Features may be added, changed or withdrawn over time.',
            ],
          },
          {
            heading: 'Acceptable use',
            paragraphs: [
              'You may use the service for any lawful business or personal purpose, including commercially — you may issue the documents you create to real paying clients and charge for the work they describe.',
            ],
            bullets: [
              'Do not use the service to create documents that are fraudulent, or that impersonate a business or person you are not authorised to represent.',
              'Do not use it to issue tax documents on behalf of a GST registration that is not yours.',
              'Do not attempt to disrupt, overload, probe or gain unauthorised access to the site or its infrastructure.',
              'Do not scrape, mirror, or bulk-copy the site’s written content, templates or code in order to republish it.',
              'Do not upload content through the share feature that is unlawful, or that you do not have the right to share.',
            ],
          },
          {
            heading: 'Your figures are your responsibility',
            paragraphs: [
              'You are solely responsible for everything you enter: prices, quantities, discounts, tax rates, GST and PAN numbers, HSN and SAC codes, place of supply, terms, and the totals that result from them. The service performs the arithmetic you ask it to perform; it cannot know whether the inputs are correct for your transaction.',
              'Check every document before you send it to a client. Please also read the Disclaimer, which forms part of these terms and explains that nothing on this site is tax, legal or accounting advice.',
            ],
          },
          {
            heading: 'Ownership of what you create',
            paragraphs: [
              'The documents you generate and all content you enter into them are yours. We claim no ownership over them, no licence to use them, and — apart from the optional share feature described in the Privacy Policy — we do not even receive a copy of them.',
              'You may use the documents you generate for any purpose, without attribution to this site, and without any watermark.',
            ],
          },
          {
            heading: 'Our intellectual property',
            paragraphs: [
              'The website’s source code, visual design, template designs, written guides, industry pages and branding are owned by the operator and protected by applicable copyright law.',
              'You may use the templates to produce your own documents — that is what they are for. You may not extract, redistribute, resell, sublicense or repackage the templates, the written content or the code as your own product or service, or launch a competing site from copies of them.',
            ],
          },
          {
            heading: 'Availability, changes and no warranty',
            paragraphs: [
              'The service is provided on an “as is” and “as available” basis, without warranties of any kind, whether express or implied, including any implied warranty of merchantability, fitness for a particular purpose, accuracy or non-infringement.',
              'We aim to keep the site online and working, but we do not guarantee uninterrupted or error-free operation. We may modify, suspend or discontinue any part of the service at any time, and we may update these terms as described below.',
            ],
          },
          {
            heading: 'Data, storage and loss',
            paragraphs: [
              'Your documents are stored in your own browser, not on our servers. This means we cannot recover them for you if they are lost — for example if you clear your browser data, use private browsing, or switch device.',
              'If a document matters, download the PDF and keep your own copy. Treat this site as a tool for producing documents, not as a backup service for them. Share links are retained only for the limited period stated in the Privacy Policy and are then deleted automatically.',
            ],
          },
          {
            heading: 'Advertising',
            paragraphs: [
              'The service is funded by third-party advertising rather than by charging users. Advertisements are selected and served by advertising networks, and their presence on a page is not an endorsement by us of the advertised product or service.',
              'We do not sell your document content to advertisers, and no information you type into a document is shared with them.',
            ],
          },
          {
            heading: 'Limitation of liability',
            paragraphs: [
              'To the maximum extent permitted by law, the operator is not liable for any indirect, incidental, special, consequential or punitive damages, or for any loss of profit, revenue, business, goodwill or data, arising out of or connected with your use of the service or any document produced with it.',
              'To the extent liability cannot be excluded, it is limited to the amount you have paid to use the service — which, since the service is free, is zero. Nothing in these terms excludes liability that cannot lawfully be excluded.',
            ],
          },
          {
            heading: 'Governing law',
            paragraphs: [
              'These terms are governed by the laws of India, and the courts of India will have jurisdiction over any dispute arising from them or from your use of the service.',
            ],
          },
          {
            heading: 'Changes to these terms',
            paragraphs: [
              'These terms may be updated from time to time. When they are, the “last updated” date at the top of this page changes. Continuing to use the service after a change means you accept the revised terms.',
            ],
          },
          {
            heading: 'Contact',
            paragraphs: [
              `Questions about these terms, copyright concerns or reports of misuse: ${siteConfig.contactEmail}.`,
            ],
          },
        ]}
      />
    </>
  );
}
