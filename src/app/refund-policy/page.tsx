import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/page-hero';
import { LegalDoc } from '@/components/layout/legal-doc';
import { JsonLd } from '@/components/json-ld';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Refund & Cancellation Policy',
  description:
    'QuotationMaker.in charges nothing and takes no payments, so there is nothing to refund or cancel. Here is what that means in practice.',
  path: '/refund-policy',
});

export default function RefundPolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Refund & Cancellation Policy', path: '/refund-policy' },
        ])}
      />
      <PageHero
        eyebrow="Legal"
        title="Refund & Cancellation Policy"
        description="Short version: nothing is charged, so nothing can be billed, cancelled or refunded."
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Refund Policy', path: '/refund-policy' },
        ]}
      />
      <LegalDoc
        updated={siteConfig.legalUpdated}
        intro="This policy exists so the position is unambiguous rather than assumed. QuotationMaker.in does not sell anything, does not take payment details, and has no subscription to cancel. If you are ever asked to pay for this website, it is not us."
        sections={[
          {
            heading: 'There is nothing to pay for',
            paragraphs: [
              'Every tool on this site — the quotation maker, the invoice and GST invoice makers, the estimate, proforma, purchase order, delivery challan, receipt, credit note and debit note generators, and all templates — is available at no cost.',
              'There is no free trial that converts, no usage limit that unlocks with payment, no watermark to remove, and no premium tier. There is also no account to create, so there is nothing that could be billed to you later.',
            ],
          },
          {
            heading: 'We do not collect payment information',
            paragraphs: [
              'This site has no checkout, no payment gateway integration and no billing system. We never ask for card numbers, UPI IDs, net banking credentials or any other payment details, and we have no ability to charge you.',
              'If any page, email or advertisement claiming to be QuotationMaker.in asks you to pay for access to these tools, it is not from us. Please do not pay it, and report it to us so it can be looked into.',
            ],
          },
          {
            heading: 'The UPI QR code feature',
            paragraphs: [
              'The builders let you attach a payment QR code to a document you are sending to your own client. That QR code is yours, it points at your own payment details, and any money it collects goes directly from your client to you.',
              'No payment made through a QR code on a document you generated passes through this website, and we take no fee, commission or share of it. Disputes about such a payment are between you and your client — we have no visibility into the transaction and cannot reverse it.',
            ],
          },
          {
            heading: 'Refunds',
            paragraphs: [
              'Because no payment is ever taken by us, there is no circumstance in which a refund from us can arise, and no refund process to follow.',
              'If you find a charge on a statement that names this website, it did not originate here. Contact your bank or card issuer to dispute it, and please also let us know so we can investigate any misuse of the name.',
            ],
          },
          {
            heading: 'Cancellation',
            paragraphs: [
              'There is no subscription, membership or recurring plan, so there is nothing to cancel. You can stop using the site at any time simply by closing it.',
              'To remove what the site has kept on your device, clear this site’s data in your browser settings — that deletes your saved documents and preferences permanently. To remove a document you uploaded via a share link, use the delete button in the share dialog or email us, as described in the Privacy Policy.',
            ],
          },
          {
            heading: 'How the site is funded',
            paragraphs: [
              'The site is funded by advertising rather than by charging its users. That is the whole business model, stated plainly: advertisements pay for the hosting, and the tools stay free.',
              'This does not change what the tools do or restrict any feature behind an advertisement, and we do not receive money from you at any point.',
            ],
          },
          {
            heading: 'If a paid feature is ever introduced',
            paragraphs: [
              'Should a paid option ever be added in future, it would be clearly labelled as such, it would be opt-in, everything currently free would remain free, and this page would be replaced with a real refund and cancellation policy covering it before any payment could be taken.',
              `Until that happens, this page reflects the complete position. Questions: ${siteConfig.contactEmail}.`,
            ],
          },
        ]}
      />
    </>
  );
}
