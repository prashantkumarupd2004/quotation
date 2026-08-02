import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/page-hero';
import { LegalDoc } from '@/components/layout/legal-doc';
import { JsonLd } from '@/components/json-ld';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Disclaimer',
  description:
    'QuotationMaker.in provides document formatting tools and general information, not tax, legal or accounting advice. Read what the tools do and do not guarantee.',
  path: '/disclaimer',
});

export default function DisclaimerPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Disclaimer', path: '/disclaimer' },
        ])}
      />
      <PageHero
        eyebrow="Legal"
        title="Disclaimer"
        description="What this site is, what it is not, and where you should check with a professional instead."
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Disclaimer', path: '/disclaimer' },
        ]}
      />
      <LegalDoc
        updated={siteConfig.legalUpdated}
        intro="This website gives you tools to format business documents and articles explaining how those documents are normally used in India. It is not a substitute for a chartered accountant, a tax practitioner or a lawyer, and nothing here should be treated as advice about your specific situation."
        sections={[
          {
            heading: 'No professional advice',
            paragraphs: [
              `${siteConfig.name} is a document formatting tool and a general information website. The guides, industry pages, sample line items, HSN/SAC references and FAQs are written to help you understand common practice — they are not tax, legal, accounting or financial advice, and no professional relationship is created by your using this site.`,
              'Your circumstances, your registration status, your state, your turnover and the nature of your supply all change what is correct for you. Before you rely on anything here for a real transaction, check it with a qualified professional who knows your situation.',
            ],
          },
          {
            heading: 'GST and tax figures are your responsibility',
            paragraphs: [
              'The builders calculate totals, tax and round-off from the numbers and rates that you enter. The arithmetic is performed as specified, but the tool has no way of knowing whether the rate you chose, the place of supply you implied, or the exemption you applied is the correct one for your transaction.',
              'GST rates, notifications, thresholds and invoicing rules change over time. Content on this site is written to the best of our understanding at the time of writing and may become out of date.',
            ],
            bullets: [
              'Verify every GST rate against the current CBIC notification for your goods or service.',
              'Verify HSN and SAC codes — those shown on industry pages are common examples, not a classification ruling.',
              'Confirm whether CGST + SGST or IGST applies based on your actual place of supply.',
              'Check every total, discount and round-off yourself before sending a document to a client.',
            ],
          },
          {
            heading: 'Documents you generate are yours',
            paragraphs: [
              'You are solely responsible for the contents of any document you create, download, print or send using this website, and for whether it meets the legal, contractual or tax requirements that apply to you.',
              'A quotation or estimate generated here is a commercial document you are issuing. Whether it forms a binding offer, and on what terms, depends on what you write in it and on the law that governs your dealings with your client.',
              'The templates are designed to be clear and professional. They are not certified by any tax authority and carry no assurance that a document produced from them will be accepted for any particular statutory purpose.',
            ],
          },
          {
            heading: 'Availability and accuracy',
            paragraphs: [
              'The service is provided on an “as is” and “as available” basis. We aim to keep it accurate, working and online, but we do not warrant that it will be uninterrupted, error free, or that the information on it is complete or current.',
              'Features may change, and the site may be unavailable during maintenance or because of problems with hosting or connectivity.',
            ],
          },
          {
            heading: 'Limitation of liability',
            paragraphs: [
              'To the maximum extent permitted by law, we are not liable for any loss or damage — including lost profit, lost business, lost data, tax penalties, or disputes with your clients — arising from your use of this website, the documents you produce with it, or your reliance on any information published on it.',
              'This is a free tool with no fee charged for its use. The responsibility for checking your own figures and your own compliance remains entirely with you.',
            ],
          },
          {
            heading: 'External links and advertising',
            paragraphs: [
              'Some pages link to external websites, such as government portals or third-party resources. We do not control those sites and are not responsible for their content, accuracy or privacy practices.',
              'This site displays advertising. Advertisements are selected and served by third-party advertising networks, not by us. Their appearance on a page is not an endorsement or recommendation of the advertised product or service, and we have no relationship with the advertisers.',
            ],
          },
          {
            heading: 'Trademarks and third-party names',
            paragraphs: [
              'Company, product and brand names mentioned in guides or example line items — such as material or software brands referenced in industry pages — belong to their respective owners. They are used only to illustrate how a real document is typically written, and their mention does not imply any affiliation with, sponsorship by or endorsement from those companies.',
            ],
          },
          {
            heading: 'Questions',
            paragraphs: [
              `If you believe something on this site is inaccurate or out of date, please tell us at ${siteConfig.contactEmail} and it will be corrected.`,
            ],
          },
        ]}
      />
    </>
  );
}
