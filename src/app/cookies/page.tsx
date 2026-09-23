import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/page-hero';
import { LegalDoc } from '@/components/layout/legal-doc';
import { JsonLd } from '@/components/json-ld';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Cookie Policy',
  description:
    'Every cookie and storage key QuotationMaker.in uses, what each one is for, and how to remove them without breaking the document tools.',
  path: '/cookies',
});

export default function CookiePolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Cookie Policy', path: '/cookies' },
        ])}
      />
      <PageHero
        eyebrow="Legal"
        title="Cookie Policy"
        description="What is stored in your browser by this site, and how to clear it."
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Cookie Policy', path: '/cookies' },
        ]}
      />
      <LegalDoc
        updated={siteConfig.legalUpdated}
        intro="This site sets almost nothing of its own. Most of what it stores in your browser is not a cookie at all — it is local storage holding the documents you are working on, which stays on your device. Third-party cookies come from analytics and, once enabled, advertising."
        sections={[
          {
            heading: 'Cookies versus local storage',
            paragraphs: [
              'A cookie is a small file your browser sends back to a server with each request. Local storage is a separate browser feature that keeps data on your device and does not get sent anywhere automatically.',
              'This distinction matters here, because the largest thing this site keeps in your browser — your in-progress quotations and invoices — is local storage, not a cookie, and is never transmitted to us. It exists purely so that refreshing the page or coming back tomorrow does not lose your work.',
            ],
          },
          {
            heading: 'What this site stores itself',
            paragraphs: [
              'These are set by QuotationMaker.in and are strictly functional. None of them track you across websites, and none of them are used for advertising.',
            ],
            bullets: [
              'Theme preference — remembers whether you chose light or dark mode. Local storage, no expiry until cleared.',
              'Saved documents — the quotations, invoices and other documents you have built, plus your saved company profile and logo. Local storage, kept on your device until you delete them.',
              'Builder autosave — the document currently being edited, so an accidental refresh does not lose it. Local storage.',
              'Service worker cache — copies of pages and assets so the site keeps working offline. Managed by your browser’s cache storage.',
            ],
          },
          {
            heading: 'Analytics cookies',
            paragraphs: [
              'We use Google Analytics to see which pages people find useful. It sets its own cookies to distinguish one visit from another and to measure things like page views, session length, device type and approximate region.',
              'This tells us nothing about who you are and never receives the contents of a document you build. If you block it, every feature on this site continues to work exactly as before.',
            ],
          },
          {
            heading: 'Advertising cookies (Google AdSense)',
            paragraphs: [
              'This site displays advertising through Google AdSense. When advertising is active, Google and its partner networks set cookies and use device identifiers to:',
            ],
            bullets: [
              'Serve advertisements relevant to your interests based on previous visits to this and other websites.',
              'Limit how often you see the same advertisement.',
              'Measure whether advertisements were seen and whether they led to any action.',
              'Report aggregate statistics to advertisers (no personally identifying information is included in reports we receive).',
            ],
            paragraphs2: [
              'We do not receive, control or store the data those cookies collect. That relationship is between you and Google under their advertising policies.',
              'Key opt-out options: Google Ads Settings at adssettings.google.com, the NAI opt-out at optout.networkadvertising.org, or the DAA opt-out at optout.aboutads.info.',
            ],
          },
          {
            heading: 'How to control or remove them',
            paragraphs: [
              'You are in full control of all of this, and nothing on this site is gated behind accepting cookies.',
            ],
            bullets: [
              'Clear this site\'s data: in your browser settings, find site settings or storage for quotationmaker.in and clear it. Note that this also deletes your saved documents, which we cannot restore because we never had a copy.',
              'Block third-party cookies: available in the privacy settings of every major browser.',
              'Opt out of personalised advertising: visit adssettings.google.com (Google), or optout.aboutads.info (DAA / industry-wide opt-out).',
              'Block analytics only: any standard content blocker, uBlock Origin, or your browser\'s built-in tracking protection.',
              'Cookie consent banner: use the Accept / Decline banner that appears on your first visit to control optional cookies without changing browser settings.',
              'Use private or incognito mode: everything described here is discarded when you close the window.',
            ],
          },
          {
            heading: 'Changes',
            paragraphs: [
              `If we add a service that sets new cookies, this page will be updated before or at the time it goes live. Questions about anything listed here can go to ${siteConfig.contactEmail}.`,
            ],
          },
        ]}
      />
    </>
  );
}
