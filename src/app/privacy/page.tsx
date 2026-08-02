import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/page-hero';
import { LegalDoc } from '@/components/layout/legal-doc';
import { JsonLd } from '@/components/json-ld';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description:
    'Exactly what QuotationMaker.in does and does not collect: documents you build stay in your browser, what the share feature uploads, how long it is kept, and how to delete it.',
  path: '/privacy',
});

const RETENTION = siteConfig.shareRetentionDays;

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Privacy Policy', path: '/privacy' },
        ])}
      />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Written in plain English, and accurate to what the software actually does."
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Privacy Policy', path: '/privacy' },
        ]}
      />
      <LegalDoc
        updated={siteConfig.legalUpdated}
        intro={`In short: the documents you build stay on your own device and we never see them. The single exception is the optional share link feature, which uploads a copy of that one document to our server so your client can open it — you choose when that happens, and you can delete it at any time. We do not sell data and we do not run user accounts.`}
        sections={[
          {
            heading: 'Who this policy is from',
            paragraphs: [
              `${siteConfig.name} is operated by ${siteConfig.operator.name}, an individual based in ${siteConfig.operator.country}. It is an independently run website rather than a registered company, and there is no sales team or call centre behind it.`,
              `This policy explains what information is handled when you use the website and its document generators. If anything here is unclear, email ${siteConfig.contactEmail} and you will get a reply from the person who built the site.`,
            ],
          },
          {
            heading: 'Documents you create stay on your device',
            paragraphs: [
              'The quotation, invoice and other document builders run entirely inside your web browser. Your company details, client details, line items, prices, tax figures, logo, signature and stamp are held in your browser’s local storage on your own device.',
              'This information is not sent to us as you type, is not part of any account, and is not visible to us at any point. PDF and PNG export also happens inside your browser — the file is generated on your device and saved directly by it.',
              'Because this data lives only on your device, clearing your browser storage, using private or incognito mode, or switching to another device or browser means it will no longer be there. We cannot recover it for you, because we never had a copy.',
            ],
          },
          {
            heading: 'The one exception: share links',
            paragraphs: [
              'If — and only if — you choose to create a share link, a copy of that single document is uploaded to and stored on our server. This is unavoidable: a link your client can open has to point at something we host.',
              'Before any upload happens, the share dialog tells you exactly this and asks you to confirm. If you close that dialog without confirming, nothing is uploaded.',
            ],
            bullets: [
              'What is uploaded: the full contents of that one document — your business details, your client’s details, every line item and amount, and any logo, signature or stamp image you added.',
              `How long it is kept: ${RETENTION} days. After that the copy is deleted automatically and the link stops working.`,
              'Who can see it: anyone who has the link. Links use long random identifiers so they cannot realistically be guessed, but they are not password protected — treat a share link as private and send it only to the intended recipient.',
              'How to delete it sooner: use the “Delete this link & the stored copy” button in the share dialog, which removes it from our server immediately.',
              `If you have lost the link, email ${siteConfig.contactEmail} and it will be deleted for you.`,
              'Shared documents are marked noindex and excluded from our sitemap, so they are not submitted to search engines by us.',
            ],
          },
          {
            heading: 'Analytics',
            paragraphs: [
              'We use Google Analytics to understand which pages are useful and where the site is confusing. It records things like pages viewed, approximate region derived from IP address, device type, browser and referring website.',
              'We do not use it to identify you, we do not link it to anything you type into a document, and no document content is sent to it. Google processes this data under its own privacy policy. You can block it entirely with any standard analytics blocker or browser setting without losing any functionality on this site.',
            ],
          },
          {
            heading: 'Cookies and advertising',
            paragraphs: [
              'The site itself sets very little: a preference for light or dark theme, and the local storage used to keep your work-in-progress documents. Analytics sets its own cookies as described above.',
              'We intend to display advertising through Google AdSense. When that is active, Google and its partners may set cookies or use device identifiers to serve and measure ads, including ads based on your prior visits to this and other websites. Google’s use of advertising cookies is governed by its own policies.',
              'You can opt out of personalised advertising at any time through Google’s Ads Settings, or at aboutads.info for participating networks. You can also block or delete cookies through your browser settings. Doing any of this does not restrict your use of the document tools.',
            ],
          },
          {
            heading: 'When you email us',
            paragraphs: [
              `If you write to ${siteConfig.contactEmail}, we receive whatever you put in that email — typically your name, email address and message. It is used only to answer you, it is not added to a mailing list, and it is not shared with anyone.`,
              'The contact form on this site does not submit anything to a server; it opens a pre-filled message in your own email application, which you then choose whether to send.',
            ],
          },
          {
            heading: 'Third parties we rely on',
            paragraphs: [
              'Running the site involves a small number of external providers, each of which necessarily sees basic technical data such as your IP address and browser type in order to deliver content to you.',
            ],
            bullets: [
              'Our hosting provider, which serves the pages and stores share-link files.',
              'Google Fonts, for the two typefaces used on the site.',
              'Google Analytics, for the usage statistics described above.',
              'Google AdSense, for advertising, once it is enabled.',
            ],
          },
          {
            heading: 'Your choices and rights',
            paragraphs: [
              'Because we do not operate accounts and do not hold a profile about you, most data control here is directly in your hands rather than something you have to request from us.',
            ],
            bullets: [
              'Delete your documents: clear this site’s data in your browser settings, or delete them individually from “My documents”.',
              'Delete a share link: use the delete button in the share dialog, or email us.',
              'Opt out of analytics: use any analytics blocker or your browser’s tracking protection.',
              'Opt out of personalised ads: Google Ads Settings.',
              `Ask a question or make a request about your data: email ${siteConfig.contactEmail}. Requests are handled by one person and are normally answered within a few business days.`,
            ],
          },
          {
            heading: 'Data security',
            paragraphs: [
              'The site is served over HTTPS, and share links use cryptographically random identifiers. Files stored for share links are held on the server’s filesystem and deleted on the schedule described above.',
              'That said, no method of transmission or storage over the internet is completely secure, and we cannot guarantee absolute security. The strongest protection available to you is that, apart from share links, your documents never leave your device in the first place.',
            ],
          },
          {
            heading: 'Children',
            paragraphs: [
              'This is a business tool intended for adults running or working in a business. It is not directed at children, and we do not knowingly collect personal information from anyone under 13.',
            ],
          },
          {
            heading: 'Changes to this policy',
            paragraphs: [
              'If the way the site handles data changes — for example if a feature starts storing something new — this page will be updated and the “last updated” date at the top will change.',
            ],
          },
          {
            heading: 'Contact',
            paragraphs: [
              `Questions, corrections or data requests: ${siteConfig.contactEmail}. This inbox is monitored by ${siteConfig.operator.name} personally.`,
            ],
          },
        ]}
      />
    </>
  );
}
