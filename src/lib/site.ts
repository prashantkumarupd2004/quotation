export const siteConfig = {
  name: 'QuotationMaker.in',
  shortName: 'QuotationMaker',
  url: 'https://quotationmaker.in',
  tagline: 'Free Online Quotation & Business Document Maker',
  description:
    'Create GST-ready quotations, invoices, purchase orders and receipts in your browser. 25 print-ready templates, automatic CGST/SGST/IGST maths, live preview and instant PDF download. Free, no signup.',
  /**
   * A focused keyword set. The previous 60+ term list was keyword stuffing —
   * it carried no ranking benefit and reads as spam to a manual reviewer.
   * Page-level metadata supplies the specific intent for each route.
   */
  keywords: [
    'quotation maker',
    'quotation generator',
    'GST quotation format',
    'quotation format India',
    'free invoice maker',
    'business document generator',
    'estimate maker',
    'proforma invoice maker',
  ],
  author: 'Prashant Upadhyay',
  locale: 'en_IN',
  language: 'en-IN',
  /**
   * Social card image. Must be a raster format — Google, Facebook, X, LinkedIn
   * and WhatsApp all reject SVG for previews, so the previous `/og.svg` meant
   * every share and rich result rendered with no image. Regenerate from
   * `public/og-source.svg` with sharp if the wording changes.
   */
  ogImage: '/og.png',
  contactEmail: 'hello@quotationmaker.in',
  /** First public release. Verifiable from the repository history. */
  foundingDate: '2026-07-01',
  /** Date the legal documents were last revised. Shown on every legal page. */
  legalUpdated: '26 July 2026',
  /**
   * Who actually operates this website. AdSense and Google's site-reputation
   * guidance both expect a clearly identified publisher. Everything here must be
   * true — do not add registration numbers, phone numbers or an office address
   * unless they genuinely exist.
   */
  operator: {
    /** Individually operated — this is not a registered company. */
    type: 'individual' as const,
    name: 'Prashant Upadhyay',
    /** Country of operation. City/state deliberately omitted rather than invented. */
    country: 'India',
    /** Plain-language description of the operating entity. */
    description:
      'QuotationMaker.in is an independently built and operated website. It is a solo project rather than a registered company, and it has no office, sales team or call centre. Email is the only support channel.',
    /** Only profiles that genuinely exist. Used for Organization.sameAs. */
    profiles: [{ label: 'Instagram', url: 'https://www.instagram.com/prashantkrupd' }],
  },
  /**
   * How long a server-side share link is retained before automatic deletion.
   * Must stay in sync with the retention period stated in the Privacy Policy.
   */
  shareRetentionDays: 90,
  /**
   * Google Search Console ownership verification token.
   * HOW TO GET THIS:
   *  1. Go to https://search.google.com/search-console
   *  2. Add property → quotationmaker.in → choose "HTML tag" method
   *  3. Copy ONLY the content="..." value (not the full <meta> tag)
   *  4. Paste it below and redeploy.
   * Leaving it empty omits the meta tag harmlessly.
   */
  googleSiteVerification: '',
} as const;

export interface NavItem {
  title: string;
  href: string;
  children?: readonly { title: string; href: string }[];
}

/**
 * Primary navigation. Grouped so the header can render real menus instead of a
 * flat strip — About, Contact, Industries and the guides were previously
 * unreachable from the header, which makes the site read as thin.
 */
export const mainNav: readonly NavItem[] = [
  { title: 'Quotation Maker', href: '/create' },
  {
    title: 'Tools',
    href: '/tools',
    children: [
      { title: 'All tools', href: '/tools' },
      { title: 'Invoice Maker', href: '/invoice-maker' },
      { title: 'GST Invoice Maker', href: '/gst-invoice-maker' },
      { title: 'Estimate Maker', href: '/estimate-maker' },
      { title: 'Proforma Invoice', href: '/proforma-invoice-maker' },
      { title: 'Purchase Order', href: '/purchase-order-generator' },
      { title: 'Delivery Challan', href: '/delivery-challan-generator' },
      { title: 'Payment Receipt', href: '/payment-receipt-generator' },
      { title: 'Credit Note', href: '/credit-note-generator' },
      { title: 'Debit Note', href: '/debit-note-generator' },
    ],
  },
  { title: 'Templates', href: '/templates' },
  { title: 'Industries', href: '/industries' },
  {
    title: 'Guides',
    href: '/blog',
    children: [
      { title: 'All guides', href: '/blog' },
      { title: 'How to write a quotation', href: '/blog/how-to-write-a-professional-quotation' },
      { title: 'GST invoice rules', href: '/blog/gst-invoice-rules-guide' },
      { title: 'Quotation to cash workflow', href: '/blog/quotation-to-cash-workflow' },
      { title: 'Recover late payments', href: '/blog/how-to-recover-late-payments' },
      { title: 'How to price your services', href: '/blog/how-to-price-your-services' },
      { title: 'Features', href: '/features' },
    ],
  },
  {
    title: 'About',
    href: '/about',
    children: [
      { title: 'About us', href: '/about' },
      { title: 'Contact', href: '/contact' },
      { title: 'Pricing', href: '/pricing' },
      { title: 'My documents', href: '/dashboard' },
    ],
  },
];

export const footerNav = {
  product: [
    { title: 'Quotation Maker', href: '/create' },
    { title: 'All Tools', href: '/tools' },
    { title: 'Templates', href: '/templates' },
    { title: 'Features', href: '/features' },
    { title: 'My Documents', href: '/dashboard' },
    { title: 'Pricing', href: '/pricing' },
  ],
  tools: [
    { title: 'Invoice Maker', href: '/invoice-maker' },
    { title: 'GST Invoice Maker', href: '/gst-invoice-maker' },
    { title: 'Estimate Maker', href: '/estimate-maker' },
    { title: 'Proforma Invoice', href: '/proforma-invoice-maker' },
    { title: 'Purchase Order', href: '/purchase-order-generator' },
    { title: 'Delivery Challan', href: '/delivery-challan-generator' },
    { title: 'Payment Receipt', href: '/payment-receipt-generator' },
    { title: 'Credit Note', href: '/credit-note-generator' },
    { title: 'Debit Note', href: '/debit-note-generator' },
  ],
  industries: [
    { title: 'Construction', href: '/industries/construction-quotation-maker' },
    { title: 'Interior Design', href: '/industries/interior-design-quotation-maker' },
    { title: 'Freelancer', href: '/industries/freelancer-quotation-maker' },
    { title: 'Web Development', href: '/industries/web-development-quotation-maker' },
    { title: 'All Industries', href: '/industries' },
  ],
  resources: [
    { title: 'All Guides', href: '/blog' },
    { title: 'GST Invoice Rules', href: '/blog/gst-invoice-rules-guide' },
    { title: 'Quote to Cash Workflow', href: '/blog/quotation-to-cash-workflow' },
    { title: 'Recover Late Payments', href: '/blog/how-to-recover-late-payments' },
    { title: 'How to Price Your Services', href: '/blog/how-to-price-your-services' },
    { title: 'E-Way Bill Rules', href: '/blog/e-way-bill-rules-guide' },
    { title: 'TDS on Payments', href: '/blog/tds-on-payments-guide' },
    { title: 'Business Record Keeping', href: '/blog/record-keeping-for-small-business' },
    { title: 'How to Write a Quotation', href: '/blog/how-to-write-a-professional-quotation' },
  ],
  company: [
    { title: 'About', href: '/about' },
    { title: 'Author', href: '/author/prashant-upadhyay' },
    { title: 'Contact', href: '/contact' },
    { title: 'Privacy Policy', href: '/privacy' },
    { title: 'Terms of Service', href: '/terms' },
    { title: 'Disclaimer', href: '/disclaimer' },
    { title: 'Cookie Policy', href: '/cookies' },
    { title: 'Refund Policy', href: '/refund-policy' },
  ],
} as const;
