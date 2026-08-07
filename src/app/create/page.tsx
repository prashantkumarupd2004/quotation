import { Suspense } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Briefcase,
  Check,
  ChevronRight,
  Download,
  FileText,
  Lightbulb,
  Smartphone,
  Star,
  XCircle,
  Zap,
} from 'lucide-react';
import { BuilderShell } from '@/components/quotation/builder-shell';
import { JsonLd } from '@/components/json-ld';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, faqSchema, howToSchema } from '@/lib/schema';
import { Reveal } from '@/components/ui/reveal';
import { Faq } from '@/components/ui/faq';
import { blogPosts } from '@/data/blog';
import { formatDate } from '@/lib/format';

export const metadata: Metadata = buildMetadata({
  title: 'Free Online Quotation Maker — Create Professional GST Quotations in India',
  description:
    'Create professional GST-ready quotations online for free — add your logo, items and tax, pick from 25 templates, and download a polished PDF instantly. No signup. No watermark. Built for Indian businesses.',
  path: '/create',
  keywords: [
    'quotation maker',
    'quotation generator',
    'create quotation online',
    'free quotation generator India',
    'quotation pdf download',
    'GST quotation maker',
    'quotation format India',
    'quotation maker online free without login',
    'how to make quotation online free',
    'quotation format with GST in India',
    'price quotation maker for small business',
    'quotation maker with logo and signature',
    'professional quotation format pdf download free',
    'estimate and quotation maker online',
    'business quotation format',
  ],
});

// ─── Data ────────────────────────────────────────────────────────────────────

const howToSteps = [
  'Enter your company name, address and GSTIN. Upload your logo — it is stored in your browser for future sessions.',
  'Add the client\'s name, billing address and GSTIN if they are a GST-registered business.',
  'List each product or service as a line item — description, HSN/SAC code, quantity, rate and GST percentage.',
  'Review the auto-calculated subtotal, GST (CGST + SGST or IGST) and grand total. Adjust as needed.',
  'Choose a template from 25 designs, set your accent colour, and preview the document live.',
  'Download the finished quotation as a PDF or PNG, print it, or share it with your client via a one-click link.',
];

const benefits = [
  {
    icon: '🏆',
    title: 'Professional Appearance',
    description:
      'Choose from 25 premium templates — corporate, modern, minimalist, construction, freelancer and more. Each is designed to build trust on first glance and get your quote taken seriously.',
    color: 'blue',
  },
  {
    icon: '⚡',
    title: 'Save Hours Every Week',
    description:
      'A quotation that used to take 20–30 minutes in Word or Excel now takes under 2 minutes. Your details autosave so you only enter your company information once.',
    color: 'amber',
  },
  {
    icon: '🧾',
    title: 'GST Ready — CGST, SGST & IGST',
    description:
      'Per-item GST at every slab (0%, 5%, 12%, 18%, 28%). The tool automatically splits into CGST + SGST for intra-state or switches to IGST for inter-state supply — no formula work needed.',
    color: 'emerald',
  },
  {
    icon: '🎨',
    title: 'Custom Branding',
    description:
      'Add your logo, authorised signature and company stamp. Set your brand accent colour. Print your bank account or UPI QR code so clients can pay immediately.',
    color: 'violet',
  },
  {
    icon: '📥',
    title: 'Instant PDF & PNG Download',
    description:
      'PDF and image generation happen entirely in your browser — no server, no queue. Download immediately, attach to an email, or share via WhatsApp in seconds.',
    color: 'rose',
  },
  {
    icon: '📱',
    title: 'Works on Any Device',
    description:
      'Fully responsive on phone, tablet and desktop. Install as a Progressive Web App (PWA) to use offline once loaded. Build and send quotations directly from a site visit.',
    color: 'cyan',
  },
];

const sampleQuotations = [
  {
    industry: 'Construction',
    icon: '🏗️',
    client: 'Sharma Builders Pvt Ltd',
    items: ['Foundation work — ₹3,40,000', 'Brick masonry — ₹1,80,000', 'RCC slab — ₹2,20,000'],
    total: '₹8,76,960',
    gst: '18% CGST + SGST',
    note: 'Construction work attracts composite 12% or standard 18% GST depending on type.',
  },
  {
    industry: 'Interior Design',
    icon: '🛋️',
    client: 'Mrs Priya Mehta (Residential)',
    items: ['False ceiling — ₹45,000', 'Modular kitchen — ₹1,20,000', 'Flooring & tiling — ₹55,000'],
    total: '₹2,59,600',
    gst: '18% IGST',
    note: 'Works contract for interior finishing is taxable at 18% GST.',
  },
  {
    industry: 'IT Services',
    icon: '💻',
    client: 'TechNova Solutions',
    items: ['Website design (5 pages) — ₹25,000', 'SEO setup (3 months) — ₹18,000', 'Cloud hosting config — ₹5,000'],
    total: '₹56,640',
    gst: '18% IGST',
    note: 'IT services and software development carry SAC 9983, taxable at 18%.',
  },
  {
    industry: 'Freelancer / Creative',
    icon: '🎨',
    client: 'Brand Spark Agency',
    items: ['Brand identity design — ₹30,000', 'Social media kit — ₹12,000', 'Brand guidelines PDF — ₹8,000'],
    total: '₹59,000',
    gst: 'GST not applicable (threshold)',
    note: 'Freelancers below ₹20 lakh turnover are exempt; add GSTIN once registered.',
  },
  {
    industry: 'Automobile',
    icon: '🚗',
    client: 'Rajput Motors',
    items: ['Car service & oil change — ₹3,500', 'Brake pad replacement — ₹2,200', 'AC gas recharge — ₹1,800'],
    total: '₹8,854',
    gst: '18% CGST + SGST',
    note: 'Automobile repair services fall under SAC 8702–8711, taxable at 18%.',
  },
  {
    industry: 'Medical Equipment',
    icon: '🏥',
    client: 'City Diagnostic Centre',
    items: ['Digital X-ray unit — ₹1,20,000', 'Installation & calibration — ₹8,000', 'Annual AMC — ₹15,000'],
    total: '₹1,52,000',
    gst: '12% CGST + SGST',
    note: 'Medical devices mostly attract 12% GST; verify specific HSN codes with your CA.',
  },
  {
    industry: 'Retail / FMCG',
    icon: '🛒',
    client: 'FreshMart Superstore',
    items: ['Branded atta (50 bags) — ₹4,500', 'Cooking oil (30 litres) — ₹3,900', 'Packaged snacks (100 pcs) — ₹5,200'],
    total: '₹13,600',
    gst: '0%/5%/12% slab wise',
    note: 'FMCG attracts varied slabs — nil for fresh produce, 5% for packaged food.',
  },
  {
    industry: 'Manufacturing',
    icon: '⚙️',
    client: 'ATC Precision Parts Ltd',
    items: ['CNC turned components (500 pcs) — ₹45,000', 'Finishing & QC — ₹6,000', 'Packing & logistics — ₹3,000'],
    total: '₹63,480',
    gst: '18% CGST + SGST',
    note: 'Manufactured goods attract 18% GST; include full HSN code for input tax credit.',
  },
];

const bestPractices = [
  {
    number: '01',
    title: 'Always Set a Validity Period',
    body: 'Material costs and labour rates change. A quotation without a validity date can be presented to you months later at outdated prices. Standard validity for Indian B2B is 15–30 days. Write it as a specific date — "Valid until 25 August 2026" — not just "Valid for 30 days."',
  },
  {
    number: '02',
    title: 'Separate Each Line Item',
    body: 'Never lump everything into one line called "as discussed." Break the scope into individual deliverables with quantities and rates. Clients are far less likely to dispute an itemised quotation, and it becomes the foundation for your invoice when the project starts.',
  },
  {
    number: '03',
    title: 'Show Tax Transparently',
    body: 'Never bury GST inside a total. Show subtotal → GST (split CGST + SGST or IGST) → grand total. This allows the client to claim input tax credit and prevents confusion when the invoice is raised. Always mention whether your price is "inclusive" or "exclusive" of GST.',
  },
  {
    number: '04',
    title: 'Include HSN / SAC Codes',
    body: 'HSN codes for goods and SAC codes for services are legally required on GST invoices and strongly recommended on quotations. Including them from the quotation stage avoids disputes when you raise the invoice and signals that you operate a professionally managed business.',
  },
  {
    number: '05',
    title: 'State Payment Terms Precisely',
    body: 'Specify the payment schedule (e.g., 50% advance, 50% on delivery), the accepted payment modes (UPI, RTGS, NEFT, cheque), and your bank details or UPI handle. A client who knows exactly how and when to pay settles faster.',
  },
  {
    number: '06',
    title: 'Add Terms & Conditions',
    body: 'Four to six short bullet points in plain English prevent most disputes: warranty period, revision rounds included, what happens if scope changes, cancellation terms and who pays for transport or installation. Short and readable beats dense legal text.',
  },
];

const commonMistakes = [
  {
    mistake: 'No quotation number',
    impact: 'Cannot track follow-ups or reference the document during negotiation.',
    fix: 'Use a sequential format like QUO-2026-001 and never reuse numbers.',
  },
  {
    mistake: 'Vague item descriptions',
    impact: '"Work as discussed" leads to scope creep and payment disputes.',
    fix: 'Write what you will deliver, how much, and what is explicitly excluded.',
  },
  {
    mistake: 'No expiry date',
    impact: 'Old quotes can be brought back months later at outdated rates.',
    fix: 'Always add "Valid until [specific date]" — 15 to 30 days is standard.',
  },
  {
    mistake: 'Incorrect GST rate',
    impact: 'Under-charging loses revenue; over-charging causes client disputes.',
    fix: 'Verify the correct HSN/SAC code and slab — consult your CA when unsure.',
  },
  {
    mistake: 'Missing GSTIN',
    impact: 'Client cannot claim input tax credit; may reject the quotation entirely.',
    fix: 'Add your GSTIN and the client\'s GSTIN on every B2B document.',
  },
  {
    mistake: 'No payment terms',
    impact: 'Clients assume 30-day credit even for small jobs where advance is normal.',
    fix: 'Spell out advance %, payment mode and due date on every quotation.',
  },
  {
    mistake: 'Single round total only',
    impact: 'Client cannot verify calculation; impossible to claim ITC properly.',
    fix: 'Always show subtotal → discount → tax breakdown → grand total separately.',
  },
];

const faqs = [
  {
    q: 'Is this quotation maker completely free?',
    a: 'Yes — 100% free with no hidden fees, no trial period and no premium tier. You can create unlimited quotations, use all 25 templates and download unlimited PDFs at no cost, ever. The site is funded by non-intrusive advertising so you never pay.',
  },
  {
    q: 'Do I need to create an account or login?',
    a: 'No account is required. Your quotation data autosaves directly in your browser on your own device. Close the tab and come back later — everything is exactly where you left it. No email, no password, no signup form.',
  },
  {
    q: 'Does it calculate GST automatically?',
    a: 'Yes. Set each line item to 0%, 5%, 12%, 18% or 28% and the tool automatically calculates CGST and SGST for intra-state supply or IGST for inter-state supply. Discounts, shipping charges and round-off are also handled automatically. The grand total and amount in words update in real time as you type.',
  },
  {
    q: 'Can I add my company logo, signature and stamp?',
    a: 'Absolutely. Upload your company logo, authorised signature image and company stamp or seal. You can also add a UPI payment QR code so clients can pay immediately on receiving the quotation. All images are stored in your browser and never uploaded to our servers.',
  },
  {
    q: 'What is the difference between a quotation and a proforma invoice?',
    a: 'A quotation is an informal price offer — it becomes binding only when accepted. A proforma invoice is a preliminary invoice that looks like the actual invoice and is often required by clients to raise a purchase order or arrange advance payment. Both can be created on this platform.',
  },
  {
    q: 'What is the difference between a quotation and an estimate?',
    a: 'A quotation is a fixed price commitment for a defined scope of work. An estimate is an approximate cost that may vary — commonly used in construction, interior design and repair jobs where the final cost depends on site conditions or material prices. Both formats are available as separate tools here.',
  },
  {
    q: 'Can I download the quotation as a PDF?',
    a: 'Yes. Click "Download PDF" and a clean, print-ready PDF is generated in your browser in seconds — no server required, no waiting, no email. You can also download as a PNG image or print directly from the browser.',
  },
  {
    q: 'How do I send the quotation to my client?',
    a: 'Download the PDF and attach it to an email, or use the "Share" button to generate a one-click shareable link that your client can open on any device without downloading anything. The link works on WhatsApp, SMS and email. Shared links are automatically deleted after 90 days.',
  },
  {
    q: 'Which GST rates can I use on a quotation?',
    a: 'You can set each line item independently to 0%, 5%, 12%, 18% or 28%. The tool also supports "no GST" for exempted goods or unregistered suppliers. You can mix different rates in the same quotation — each item shows its own tax, and the summary totals everything correctly.',
  },
  {
    q: 'What are HSN and SAC codes and do I need to include them?',
    a: 'HSN (Harmonised System of Nomenclature) codes classify goods and SAC (Services Accounting Code) codes classify services for GST purposes. They are mandatory on GST invoices for businesses with turnover above ₹5 crore and strongly recommended for all B2B quotations to avoid disputes when converting to an invoice.',
  },
  {
    q: 'Is my data safe? Who can see my quotations?',
    a: 'Your quotation data is stored exclusively in your browser\'s local storage on your own device — we do not receive it, store it or have access to it. PDF generation also happens locally. The only exception is the optional "Share" feature, which uploads a copy of one document with your explicit confirmation. Share links are deleted automatically after 90 days and can be deleted earlier by you.',
  },
  {
    q: 'Can I use it on a mobile phone?',
    a: 'Yes. The builder is fully responsive and works well on any Android or iOS phone. You can also install it as a Progressive Web App (PWA) from your browser menu to get an app-like experience and offline access after the first load.',
  },
  {
    q: 'How many quotations can I create?',
    a: 'Unlimited. There is no cap on the number of quotations, line items, templates used or PDFs downloaded. The only limit is your device\'s available browser storage for autosaved drafts.',
  },
  {
    q: 'Can I create quotations in currencies other than INR?',
    a: 'Yes. The tool supports Indian Rupees, US Dollar, Euro, British Pound, UAE Dirham, Australian Dollar, Canadian Dollar, Singapore Dollar, Japanese Yen and Saudi Riyal. For INR, amount in words is formatted in the Indian lakh/crore system.',
  },
  {
    q: 'What should I do if my client asks for a revised quotation?',
    a: 'Open the saved quotation from the dashboard, make the changes, update the quotation number to a new revision code (e.g., QUO-2026-023-R1), change the validity date, and download a fresh PDF. Send it with a clear note that it supersedes the earlier version.',
  },
];

const relatedTools = [
  { label: 'Invoice Maker', href: '/invoice-maker', description: 'Professional invoices with payment tracking', icon: '📄' },
  { label: 'GST Invoice Maker', href: '/gst-invoice-maker', description: 'GST-compliant invoices with IRN support', icon: '🧾' },
  { label: 'Estimate Generator', href: '/estimate-maker', description: 'Flexible cost estimates for any project', icon: '📊' },
  { label: 'Purchase Order', href: '/purchase-order-generator', description: 'Formal POs with approval workflow fields', icon: '🛒' },
  { label: 'Payment Receipt', href: '/payment-receipt-generator', description: 'Instant receipts for payments received', icon: '✅' },
];

const testimonials = [
  {
    name: 'Ramesh Patil',
    role: 'Civil Contractor',
    city: 'Pune',
    avatar: 'RP',
    rating: 5,
    text: 'Mein pehle Excel mein quotation banata tha — poora din lag jata tha. Iss tool se 5 minute mein professional GST quotation ready ho jata hai. Client bhi impressed rehte hain.',
  },
  {
    name: 'Anjali Singh',
    role: 'Freelance Graphic Designer',
    city: 'Jaipur',
    avatar: 'AS',
    rating: 5,
    text: 'The branded quotation templates made me look like an agency. I won 3 new clients in the first month just because my quotes looked so professional. Completely free is just a bonus.',
  },
  {
    name: 'Mohammed Irfan',
    role: 'Auto Parts Dealer',
    city: 'Hyderabad',
    avatar: 'MI',
    rating: 5,
    text: 'GST calculation used to be a headache. Now I just enter the items and rate — the tool splits CGST and SGST automatically. No more calling my accountant for every quotation.',
  },
];

const relatedBlogSlugs = [
  'how-to-write-a-professional-quotation',
  'quotation-to-cash-workflow',
  'payment-terms-in-quotations',
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CreatePage() {
  const relatedBlogs = blogPosts.filter((p) => relatedBlogSlugs.includes(p.slug)).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Tools', path: '/tools' },
            { name: 'Quotation Maker', path: '/create' },
          ]),
          howToSchema('How to create a professional quotation online', howToSteps),
          faqSchema(faqs),
        ]}
      />

      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-50 via-blue-50/40 to-violet-50/30">
        {/* Background decorations */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-[120px]" />
          <div className="absolute -right-20 bottom-0 h-[400px] w-[400px] rounded-full bg-violet-100/50 blur-[100px]" />
        </div>

        <div className="container py-14 sm:py-20">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/tools" className="hover:text-primary">Tools</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground font-medium">Quotation Maker</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Copy */}
            <div>
              <span className="section-eyebrow mb-4">
                <Zap className="h-3.5 w-3.5" /> Free Online Quotation Maker India
              </span>

              <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.07] tracking-tight text-balance sm:text-5xl xl:text-[3.25rem]">
                Create Professional{' '}
                <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  GST Quotations
                </span>{' '}
                in Minutes — Free
              </h1>

              <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
                India&apos;s most complete quotation generator — 25 premium templates, automatic CGST/SGST/IGST calculation, branded PDFs with logo and signature, and instant download. No account needed.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#builder"
                  className="btn-primary px-7 py-3.5 text-base"
                >
                  <Zap className="h-5 w-5" /> Create Free Quotation
                </a>
                <Link href="/templates" className="btn-secondary px-7 py-3.5 text-base">
                  View Templates <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Trust badges */}
              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  { icon: BadgeCheck, label: 'Free Forever' },
                  { icon: BadgeCheck, label: 'No Login Required' },
                  { icon: BadgeCheck, label: 'Instant PDF' },
                  { icon: BadgeCheck, label: 'GST Ready' },
                  { icon: BadgeCheck, label: 'No Watermark' },
                ].map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-400"
                  >
                    <Icon className="h-3.5 w-3.5" /> {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Hero visual — quotation mockup */}
            <div className="relative flex items-center justify-center">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-blue-200/50 via-violet-200/30 to-sky-200/50 blur-3xl" />
              <div className="w-full max-w-sm rounded-2xl border border-white/70 bg-white p-5 shadow-2xl shadow-blue-900/10 ring-1 ring-black/[0.04]">
                {/* Header bar */}
                <div className="mb-4 flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-2.5">
                  <FileText className="h-4 w-4 text-white/80" />
                  <span className="text-sm font-bold text-white">QUOTATION</span>
                  <span className="ml-auto text-xs text-white/60">QUO-2026-042</span>
                </div>

                {/* Company row */}
                <div className="mb-3 flex items-start justify-between">
                  <div>
                    <div className="h-3 w-24 rounded bg-gray-800" />
                    <div className="mt-1.5 h-2 w-32 rounded bg-gray-200" />
                    <div className="mt-1 h-2 w-28 rounded bg-gray-200" />
                  </div>
                  <div className="rounded-lg bg-blue-50 px-2.5 py-1 text-right">
                    <div className="text-[10px] text-gray-400">Valid until</div>
                    <div className="text-xs font-bold text-blue-700">25 Aug 2026</div>
                  </div>
                </div>

                <div className="my-3 h-px bg-gradient-to-r from-blue-400/40 to-violet-400/40" />

                {/* Items */}
                <div className="space-y-2 rounded-xl bg-gray-50 p-3">
                  {[
                    { item: 'Website Design', amt: '₹25,000' },
                    { item: 'SEO Package', amt: '₹15,000' },
                    { item: 'Maintenance', amt: '₹8,000' },
                  ].map((r) => (
                    <div key={r.item} className="flex items-center justify-between">
                      <span className="text-[11px] font-medium text-gray-700">{r.item}</span>
                      <span className="text-[11px] font-bold text-gray-900">{r.amt}</span>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="mt-3 space-y-1.5">
                  <div className="flex justify-between text-[11px] text-gray-500">
                    <span>Subtotal</span><span className="font-medium">₹48,000</span>
                  </div>
                  <div className="flex justify-between text-[11px] text-gray-500">
                    <span>GST 18% (CGST 9% + SGST 9%)</span><span className="font-medium">₹8,640</span>
                  </div>
                  <div className="flex justify-between rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 px-3 py-2 text-white">
                    <span className="text-xs font-bold">Total</span>
                    <span className="text-sm font-extrabold">₹56,640</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-4 flex gap-2">
                  <div className="flex h-8 flex-1 items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 text-[11px] font-bold text-white">
                    <Download className="h-3 w-3" /> Download PDF
                  </div>
                  <div className="flex h-8 items-center justify-center rounded-lg border border-gray-200 px-2.5 text-[10px] font-semibold text-gray-600">Share</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. WHY QUOTATIONS MATTER ─────────────────────────────────────── */}
      <section className="container py-16 sm:py-20">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <span className="section-eyebrow mb-4">Why it matters</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Why Every Business Needs Professional Quotations
            </h2>
            <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                A quotation is often the first formal impression your business makes on a potential client. Before a contract is signed, before a purchase order is raised, before any work begins — the quotation is what your client uses to judge whether you are a professional they can trust with their money. A sloppy, hand-typed quotation on a WhatsApp message can lose you an order that a well-formatted, itemised PDF would have won.
              </p>
              <p>
                Beyond first impressions, a properly structured quotation protects both parties. By defining exactly what is included (and what is not), the price breakdown, GST details, payment terms and validity period, you create a written record that prevents scope creep, price disputes and payment delays. Indian MSME businesses lose an estimated ₹8,000 crore annually to invoice disputes — the vast majority of which stem from ambiguous or missing quotation documentation.
              </p>
              <p>
                For GST-registered businesses, quotations serve a practical compliance function. Including your GSTIN, the client&apos;s GSTIN, correct HSN/SAC codes and the right GST slab on the quotation makes conversion to a final invoice seamless and audit-ready. Clients in the corporate and government sector routinely reject quotations without this information.
              </p>
              <p>
                The businesses that win more work — and get paid faster — are those that send clean, professional documents within hours, not days. A freelancer who sends a branded PDF quotation 20 minutes after a client inquiry closes deals that a competitor quoting "will share later" loses before even competing on price.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── 3. BENEFITS ──────────────────────────────────────────────────── */}
      <section className="border-y border-border/60 bg-muted/30 py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="section-eyebrow">Built for Indian businesses</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Everything You Need in a Free Quotation Maker
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Not just a form — a complete professional quotation toolkit designed around how Indian freelancers, contractors and MSMEs actually work.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 0.07}>
                <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/8">
                  <span className="text-3xl">{b.icon}</span>
                  <h3 className="mt-4 font-display text-lg font-bold">{b.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{b.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. LIVE QUOTATION GENERATOR ──────────────────────────────────── */}
      <section id="builder" className="scroll-mt-20 py-8">
        <div className="container mb-8 text-center">
          <span className="section-eyebrow">Live tool</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Create Your Quotation Now — Free
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Type in the form below and watch your professional quotation build itself in real time. Download the PDF when you&apos;re done — no account, no watermark.
          </p>
        </div>
        <Suspense
          fallback={
            <div className="container py-12 text-center text-muted-foreground">
              <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
              <p className="mt-4">Loading builder…</p>
            </div>
          }
        >
          <BuilderShell />
        </Suspense>
      </section>

      <div className="mx-auto max-w-4xl space-y-20 px-4 py-16 sm:px-6">

        {/* ── 6. SAMPLE QUOTATIONS ─────────────────────────────────────────── */}
        <section>
          <Reveal>
            <div className="mb-8">
              <span className="section-eyebrow mb-3">Industry examples</span>
              <h2 className="mt-4 font-display text-2xl font-extrabold sm:text-3xl">
                Ready-to-Use Sample Quotations by Industry
              </h2>
              <p className="mt-3 text-muted-foreground">
                Real-world examples showing how different businesses structure their quotations, with correct GST codes and payment terms for each industry.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {sampleQuotations.map((s, i) => (
              <Reveal key={s.industry} delay={(i % 2) * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/30 hover:shadow-lg">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{s.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-display font-bold">{s.industry}</h3>
                      <p className="text-xs text-muted-foreground">Client: {s.client}</p>
                    </div>
                    <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                      {s.gst}
                    </span>
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-500" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 flex items-center justify-between rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-2">
                    <span className="text-xs font-semibold text-white/80">Quotation Total</span>
                    <span className="font-display font-extrabold text-white">{s.total}</span>
                  </div>
                  <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground/80 italic">
                    ℹ {s.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-300">
              <strong>Disclaimer:</strong> GST rates shown are for illustrative purposes. Rates and HSN/SAC codes vary by product, supply type and place of supply. Always verify with a qualified Chartered Accountant before issuing a formal quotation.
            </div>
          </Reveal>
        </section>

        {/* ── 7. STEP-BY-STEP GUIDE ────────────────────────────────────────── */}
        <section>
          <Reveal>
            <div className="mb-8">
              <span className="section-eyebrow mb-3">Step-by-step guide</span>
              <h2 className="mt-4 font-display text-2xl font-extrabold sm:text-3xl">
                How to Create a Professional Quotation Online
              </h2>
              <p className="mt-3 text-muted-foreground">
                Follow these six steps to build a complete, GST-compliant quotation that wins clients and protects your business.
              </p>
            </div>
          </Reveal>

          <div className="space-y-5">
            {howToSteps.map((step, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="flex gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md">
                  <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 font-display text-sm font-extrabold text-white shadow-md shadow-primary/30">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm leading-relaxed text-foreground pt-2">{step}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-8 text-center">
              <a href="#builder" className="btn-primary">
                Start Creating Now <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </section>

        {/* ── 8. BEST PRACTICES ────────────────────────────────────────────── */}
        <section>
          <Reveal>
            <div className="mb-8">
              <span className="section-eyebrow mb-3">
                <Lightbulb className="h-3.5 w-3.5" /> Expert tips
              </span>
              <h2 className="mt-4 font-display text-2xl font-extrabold sm:text-3xl">
                Quotation Best Practices for Indian Businesses
              </h2>
              <p className="mt-3 text-muted-foreground">
                Tips from how successful Indian freelancers, contractors and MSMEs structure their quotations to win more business and get paid on time.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {bestPractices.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md">
                  <span className="font-display text-4xl font-extrabold text-primary/15">{p.number}</span>
                  <h3 className="mt-1 font-display font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── 9. COMMON MISTAKES ───────────────────────────────────────────── */}
        <section>
          <Reveal>
            <div className="mb-8">
              <span className="section-eyebrow mb-3">Avoid these errors</span>
              <h2 className="mt-4 font-display text-2xl font-extrabold sm:text-3xl">
                7 Quotation Mistakes That Cost Indian Businesses Money
              </h2>
              <p className="mt-3 text-muted-foreground">
                These are the most common errors in business quotations — each one has cost real businesses lost revenue or payment disputes.
              </p>
            </div>
          </Reveal>

          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="hidden grid-cols-3 border-b border-border bg-muted/50 px-5 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground sm:grid">
              <span>Mistake</span>
              <span>Why it hurts you</span>
              <span>The fix</span>
            </div>
            {commonMistakes.map((m, i) => (
              <div
                key={m.mistake}
                className={`grid gap-2 px-5 py-4 sm:grid-cols-3 sm:gap-4 ${i % 2 === 0 ? 'bg-card' : 'bg-muted/20'}`}
              >
                <div className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-rose-500" />
                  <span className="text-sm font-semibold text-foreground">{m.mistake}</span>
                </div>
                <p className="text-sm text-muted-foreground sm:pl-0">{m.impact}</p>
                <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400 sm:pl-0">→ {m.fix}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 10. FAQ ──────────────────────────────────────────────────────── */}
        <section>
          <Reveal>
            <div className="mb-8 text-center">
              <span className="section-eyebrow mb-3">
                <BookOpen className="h-3.5 w-3.5" /> FAQs
              </span>
              <h2 className="mt-4 font-display text-2xl font-extrabold sm:text-3xl">
                Frequently Asked Questions About Quotation Maker
              </h2>
            </div>
          </Reveal>
          <Faq items={faqs} />
        </section>

        {/* ── 11. RELATED TOOLS ────────────────────────────────────────────── */}
        <section>
          <Reveal>
            <div className="mb-8">
              <span className="section-eyebrow mb-3">
                <Briefcase className="h-3.5 w-3.5" /> Complete your toolkit
              </span>
              <h2 className="mt-4 font-display text-2xl font-extrabold sm:text-3xl">
                Related Free Business Document Tools
              </h2>
              <p className="mt-3 text-muted-foreground">
                A quotation is usually the first document in a business cycle. Here are the tools for every step that follows.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedTools.map((tool, i) => (
              <Reveal key={tool.href} delay={(i % 3) * 0.06}>
                <Link
                  href={tool.href}
                  className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/8"
                >
                  <span className="text-2xl">{tool.icon}</span>
                  <div className="flex-1">
                    <span className="flex items-center gap-1.5 font-display font-bold group-hover:text-primary">
                      {tool.label} <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                    </span>
                    <span className="mt-1 block text-sm text-muted-foreground">{tool.description}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── 12. RELATED BLOG ARTICLES ────────────────────────────────────── */}
        {relatedBlogs.length > 0 && (
          <section>
            <Reveal>
              <div className="mb-8 flex items-end justify-between">
                <div>
                  <span className="section-eyebrow mb-3">Business guides</span>
                  <h2 className="mt-4 font-display text-2xl font-extrabold sm:text-3xl">
                    Learn More About Quotations
                  </h2>
                </div>
                <Link href="/blog" className="btn-secondary shrink-0 self-start">
                  All Guides <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedBlogs.map((post, i) => (
                <Reveal key={post.slug} delay={i * 0.07}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/8"
                  >
                    <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 to-violet-500" />
                    <div className="flex flex-1 flex-col gap-3 p-5">
                      <span className="w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {post.category}
                      </span>
                      <h3 className="font-display text-base font-bold leading-snug group-hover:text-primary">
                        {post.title}
                      </h3>
                      <p className="flex-1 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                      <span className="text-xs text-muted-foreground">{formatDate(post.date)} · {post.readingTime} min read</span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </section>
        )}

        {/* ── 13. TESTIMONIALS ─────────────────────────────────────────────── */}
        <section>
          <Reveal>
            <div className="mb-8 text-center">
              <span className="section-eyebrow mb-3">Customer stories</span>
              <h2 className="mt-4 font-display text-2xl font-extrabold sm:text-3xl">
                What Indian Business Owners Say
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.07}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-lg">
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <blockquote className="flex-1 text-sm leading-relaxed text-foreground">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3 border-t border-border/60 pt-4">
                    <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-sm font-bold text-white">
                      {t.avatar}
                    </span>
                    <div>
                      <div className="text-sm font-semibold">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role} · {t.city}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── 14. CALL TO ACTION ───────────────────────────────────────────── */}
        <section>
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600 via-violet-600 to-blue-700 px-8 py-14 text-center text-white">
              <div
                className="pointer-events-none absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                }}
              />
              <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold backdrop-blur-sm">
                  ✨ 100% Free — No Account Needed
                </span>
                <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
                  Ready to Send Your First Professional Quotation?
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-white/80">
                  Join thousands of Indian freelancers, contractors and businesses who create and send professional GST quotations in minutes — not hours.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href="#builder"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-blue-700 shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl"
                  >
                    <Zap className="h-5 w-5" /> Create Free Quotation
                  </a>
                  <Link
                    href="/templates"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold backdrop-blur-sm transition-all hover:bg-white/20"
                  >
                    Browse Templates <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="mt-7 flex flex-wrap items-center justify-center gap-5 text-sm text-white/70">
                  <span className="flex items-center gap-1.5"><Smartphone className="h-4 w-4" /> Works on Mobile</span>
                  <span className="flex items-center gap-1.5"><Download className="h-4 w-4" /> Instant PDF</span>
                  <span className="flex items-center gap-1.5"><BadgeCheck className="h-4 w-4" /> No Watermark</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Author note */}
          <Reveal>
            <div className="mt-8 flex items-start gap-4 rounded-2xl border border-border bg-muted/30 p-5">
              <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-sm font-bold text-white">
                PU
              </span>
              <div>
                <p className="text-sm font-semibold">Written & maintained by Prashant Upadhyay</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Independent developer and the sole builder of QuotationMaker.in. This page was last reviewed in August 2026. For questions, corrections or feedback, <Link href="/contact" className="text-primary hover:underline">write directly</Link>.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

      </div>
    </>
  );
}
