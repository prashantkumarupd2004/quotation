export const homeFeatures = [
  {
    icon: 'Zap',
    title: '30-Second Quotations',
    description: 'A distraction-free builder with live preview means you go from blank page to finished PDF in under a minute.',
  },
  {
    icon: 'Calculator',
    title: 'Automatic GST Calculation',
    description: 'CGST, SGST and IGST are computed per item at 0/5/12/18/28%. Discounts, shipping and round-off handled automatically.',
  },
  {
    icon: 'LayoutTemplate',
    title: '25 Premium Templates',
    description: 'Modern, corporate, minimal, construction, freelancer and more — 10 with fully bespoke layouts. Switch designs anytime without re-entering data.',
  },
  {
    icon: 'Download',
    title: 'PDF, PNG & Print',
    description: 'Export a crisp multi-page PDF, a shareable PNG image, or print directly from your browser — all client-side.',
  },
  {
    icon: 'Palette',
    title: 'Fully Branded',
    description: 'Add your logo, signature, company stamp and a custom accent colour so every quote looks unmistakably yours.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Private by Design',
    description: 'The builder and PDF export run in your browser and autosave to your device. Nothing is uploaded unless you deliberately create a share link. No signup, ever.',
  },
  {
    icon: 'IndianRupee',
    title: 'Multi-Currency',
    description: 'Quote in ₹, $, €, £, AED, SGD and more. Indian number-to-words and locale formatting come built in.',
  },
  {
    icon: 'QrCode',
    title: 'QR, Notes & Terms',
    description: 'Attach a UPI/payment QR code, reusable terms and conditions, and notes to close deals faster.',
  },
];

export const homeSteps = [
  {
    title: 'Add your details',
    description: 'Enter your company info and the client’s details. Upload your logo once — it is remembered for next time.',
  },
  {
    title: 'List your items',
    description: 'Add unlimited products or services with quantity, rate and GST. Totals update instantly as you type.',
  },
  {
    title: 'Pick a template',
    description: 'Choose from 25 designs and set your brand colour. Watch the live preview change in real time.',
  },
  {
    title: 'Download & send',
    description: 'Export a professional PDF or PNG, print it, or save it for later. Your work autosaves automatically.',
  },
];

export const homeCategories = [
  { name: 'Construction', slug: 'construction-quotation-maker', icon: 'HardHat' },
  { name: 'Interior Design', slug: 'interior-design-quotation-maker', icon: 'Sofa' },
  { name: 'Electrical', slug: 'electrical-contractor-quotation-maker', icon: 'Zap' },
  { name: 'Plumbing', slug: 'plumbing-quotation-maker', icon: 'Wrench' },
  { name: 'Freelancer', slug: 'freelancer-quotation-maker', icon: 'Laptop' },
  { name: 'Web Development', slug: 'web-development-quotation-maker', icon: 'Code' },
  { name: 'Digital Marketing', slug: 'digital-marketing-quotation-maker', icon: 'TrendingUp' },
  { name: 'Photography', slug: 'photography-quotation-maker', icon: 'Camera' },
  { name: 'Event Management', slug: 'event-management-quotation-maker', icon: 'PartyPopper' },
  { name: 'Graphic Design', slug: 'graphic-designer-quotation-maker', icon: 'Palette' },
  { name: 'Cleaning Service', slug: 'cleaning-service-quotation-maker', icon: 'SprayCan' },
  { name: 'Transport', slug: 'transport-service-quotation-maker', icon: 'Truck' },
];

export const homeBenefits = [
  'No signup, no watermark, no hidden charges — free forever',
  'Works fully offline once loaded, installable as an app (PWA)',
  'Documents autosave to your device — nothing is uploaded unless you create a share link',
  'GST-ready format accepted by Indian businesses and clients',
  'Unlimited quotations, unlimited items, unlimited downloads',
  'Undo/redo, keyboard shortcuts and drag-to-reorder items',
];

/**
 * This site does not collect user reviews, so it publishes none.
 *
 * The homepage previously carried six invented testimonials with full names,
 * cities and five-star ratings, plus an `aggregateRating` in the structured data.
 * That is fabricated review content and a Google policy violation, so it was
 * removed. If real, attributable testimonials are ever collected — with the
 * customer's permission — they can be added back here.
 *
 * What replaces it below is verifiable: statements about what the software does,
 * which a visitor can check for themselves in the builder.
 */
export const homeCommitments = [
  {
    icon: 'ShieldCheck',
    title: 'Your documents stay on your device',
    description:
      'The builder runs in your browser and saves to your own device. We do not receive your client list, your prices or your logo — there is no account holding them, because there are no accounts.',
  },
  {
    icon: 'BadgeIndianRupee',
    title: 'Free because ads pay for it, not because you do',
    description:
      'There is no payment form anywhere on this site, no trial that converts and no watermark to buy off. Advertising covers the hosting so the tools can stay open to everyone.',
  },
  {
    icon: 'Calculator',
    title: 'Built for Indian tax reality',
    description:
      'Per-item GST at every slab, automatic CGST/SGST versus IGST depending on place of supply, HSN and SAC fields, round-off, and amount in words in the Indian numbering system.',
  },
  {
    icon: 'User',
    title: 'One person you can actually reach',
    description:
      'The site is built and run by one developer in India, named on the About page. Email goes straight to him — not to a ticket queue.',
  },
];

export const homeFaqs = [
  {
    q: 'Is QuotationMaker.in really free?',
    a: 'Yes. You can create unlimited quotations, use every template, and download as many PDF or PNG files as you like — completely free, with no signup and no watermark.',
  },
  {
    q: 'Do I need to create an account?',
    a: 'No account is required. Your quotation autosaves directly in your browser on your device, so you can close the tab and pick up where you left off later.',
  },
  {
    q: 'Does it calculate GST automatically?',
    a: 'Absolutely. Set each item to 0%, 5%, 12%, 18% or 28% and the tool computes CGST and SGST for intra-state, or IGST for inter-state, along with discounts, shipping and round-off.',
  },
  {
    q: 'Is my data safe?',
    a: 'The documents you build stay in your browser on your own device — we do not receive them, and PDF export also happens locally. The one exception is if you choose to create a share link, which uploads a copy of that single document so your client can open it; the share dialog tells you before that happens, the copy is deleted automatically after 90 days, and you can delete it yourself at any time. Full detail is in our Privacy Policy.',
  },
  {
    q: 'Who runs QuotationMaker.in?',
    a: 'It is built and operated by Prashant Upadhyay, an independent developer in India. It is a solo project rather than a registered company, funded by advertising rather than by charging users. The About page has the details and email reaches him directly.',
  },
  {
    q: 'Can I add my logo, signature and stamp?',
    a: 'Yes. You can upload a company logo, an authorised signature and a company stamp or seal. You can also add a UPI/payment QR code to help clients pay faster.',
  },
  {
    q: 'Can I use it on my phone?',
    a: 'Yes. The builder is fully responsive and works on mobile, tablet and desktop. You can even install it as an app (PWA) and use it offline once it has loaded.',
  },
  {
    q: 'What is the difference between a quotation and an invoice?',
    a: 'A quotation is a price offer you send before a job is confirmed, while an invoice is a demand for payment after delivery. This tool focuses on professional, GST-ready quotations and estimates.',
  },
  {
    q: 'Which currencies are supported?',
    a: 'You can quote in Indian Rupees plus USD, EUR, GBP, AED, AUD, CAD, SGD, JPY and SAR, with correct locale formatting and Indian amount-in-words for INR.',
  },
];
