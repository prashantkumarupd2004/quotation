export const siteConfig = {
  name: 'QuotationMaker.in',
  shortName: 'QuotationMaker',
  url: 'https://quotationmaker.in',
  tagline: 'India\'s Best Free Online Quotation Maker',
  description:
    'Create professional GST-ready quotations in under 30 seconds. Free online quotation maker with 15+ premium templates, auto tax calculation, live preview, and instant PDF download. No signup required.',
  keywords: [
    // Core
    'quotation maker',
    'quotation generator',
    'quotation maker online',
    'quotation maker free',
    'free quotation maker',
    'online quotation generator',
    'quotation maker India',
    'quotation software',
    'quotation app',
    'quotation maker app',
    'quotation tool',
    'quotation creator',
    // Format / sample intent
    'quotation format',
    'quotation format in India',
    'quotation format pdf',
    'quotation format in word',
    'quotation format in excel',
    'quotation sample format',
    'quotation letter format',
    'price quotation format',
    // GST / tax
    'GST quotation format',
    'GST quotation maker',
    'quotation with GST',
    'CGST SGST IGST quotation',
    'tax invoice quotation',
    // Templates
    'quotation template',
    'quotation templates free',
    'professional quotation template',
    'free quote template',
    // Estimate / quote / proforma
    'estimate maker',
    'estimate generator',
    'cost estimate maker',
    'estimate format',
    'quote maker',
    'quote generator',
    'business quote maker',
    'proforma invoice maker',
    'proforma invoice format',
    // Action / download
    'create quotation online',
    'make quotation online',
    'quotation pdf download',
    'quotation maker for small business',
    // Industry
    'construction quotation format',
    'interior design quotation',
    'contractor quotation maker',
    'freelancer quotation maker',
    'service quotation format',
    'sales quotation format',
    'bill of quantities format',
    'BOQ format',
  ],
  author: 'QuotationMaker.in',
  twitter: '@quotationmaker',
  locale: 'en_IN',
  language: 'en-IN',
  ogImage: '/og.svg',
  contactEmail: 'hello@quotationmaker.in',
  foundingDate: '2024-01-01',
  // Paste the token from Google Search Console → Settings → Ownership verification
  // (HTML tag method). Leaving it empty simply omits the meta tag.
  googleSiteVerification: '',
} as const;

export const mainNav = [
  { title: 'Home', href: '/' },
  { title: 'Create Quotation', href: '/create' },
  { title: 'Templates', href: '/templates' },
  { title: 'Industries', href: '/industries' },
  { title: 'Features', href: '/features' },
  { title: 'Blog', href: '/blog' },
  { title: 'Contact', href: '/contact' },
] as const;

export const footerNav = {
  product: [
    { title: 'Quotation Maker', href: '/create' },
    { title: 'Templates', href: '/templates' },
    { title: 'Features', href: '/features' },
    { title: 'Pricing', href: '/pricing' },
  ],
  industries: [
    { title: 'Construction', href: '/industries/construction-quotation-maker' },
    { title: 'Interior Design', href: '/industries/interior-design-quotation-maker' },
    { title: 'Freelancer', href: '/industries/freelancer-quotation-maker' },
    { title: 'Web Development', href: '/industries/web-development-quotation-maker' },
    { title: 'All Industries', href: '/industries' },
  ],
  resources: [
    { title: 'Blog', href: '/blog' },
    { title: 'How to Write a Quotation', href: '/blog/how-to-write-a-professional-quotation' },
    { title: 'GST in Quotations', href: '/blog/gst-in-quotations' },
    { title: 'Quotation Format India', href: '/blog/quotation-format-in-india' },
  ],
  company: [
    { title: 'Contact', href: '/contact' },
    { title: 'Privacy Policy', href: '/privacy' },
    { title: 'Terms of Service', href: '/terms' },
    { title: 'About', href: '/about' },
  ],
} as const;
