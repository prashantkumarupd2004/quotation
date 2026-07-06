import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/page-hero';
import { LegalDoc } from '@/components/layout/legal-doc';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description:
    'How QuotationMaker.in handles your data. Your quotation content stays in your browser and is never uploaded to our servers.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Privacy Policy', path: '/privacy' },
        ]}
      />
      <LegalDoc
        updated="1 July 2026"
        sections={[
          {
            heading: 'Overview',
            paragraphs: [
              `This Privacy Policy explains how ${siteConfig.name} ("we", "us") handles information when you use our website and free quotation maker. We are committed to protecting your privacy and being transparent about our practices.`,
              'By using the service, you agree to the collection and use of information in accordance with this policy.',
            ],
          },
          {
            heading: 'Quotation data stays on your device',
            paragraphs: [
              'The quotation builder runs entirely in your browser. The company details, client details, line items, logos, signatures and stamps you enter are stored locally on your own device using your browser’s local storage. This information is never transmitted to or stored on our servers.',
              'Because your quotation data lives only on your device, clearing your browser storage or using a different device or browser will mean that data is no longer available.',
            ],
          },
          {
            heading: 'Information we may collect',
            paragraphs: [
              'We may collect limited, non-identifying analytics such as page views, approximate region, device type and referring pages to understand how the site is used and to improve it. This data is aggregated and does not identify you personally.',
              'If you contact us by email, we receive the information you choose to provide (such as your name, email address and message) solely to respond to your enquiry.',
            ],
          },
          {
            heading: 'Cookies and advertising',
            paragraphs: [
              'We may use cookies and similar technologies for basic functionality and analytics. If we display advertising through third-party networks such as Google AdSense, those partners may use cookies to serve ads based on your prior visits to this and other websites.',
              'You can opt out of personalised advertising by visiting Google’s Ads Settings, and you can control cookies through your browser settings at any time.',
            ],
          },
          {
            heading: 'Third-party services',
            paragraphs: [
              'We may rely on reputable third parties for hosting, content delivery, fonts and analytics. These providers process technical data (such as your IP address) as necessary to deliver the service and operate under their own privacy policies.',
            ],
          },
          {
            heading: 'Data security',
            paragraphs: [
              'We take reasonable technical and organisational measures to protect the limited information we handle. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.',
            ],
          },
          {
            heading: 'Children’s privacy',
            paragraphs: [
              'The service is intended for businesses and professionals and is not directed at children under 13. We do not knowingly collect personal information from children.',
            ],
          },
          {
            heading: 'Changes to this policy',
            paragraphs: [
              'We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised "last updated" date.',
            ],
          },
          {
            heading: 'Contact',
            paragraphs: [
              `If you have any questions about this Privacy Policy, please contact us at ${siteConfig.contactEmail}.`,
            ],
          },
        ]}
      />
    </>
  );
}
