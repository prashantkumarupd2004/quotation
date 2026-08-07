import type { ToolContent } from './types';

export const gstInvoiceContent: ToolContent = {
  id: 'gst-invoice',
  seo: {
    title: 'Free GST Invoice Maker — CGST, SGST & IGST Tax Invoice Generator',
    description:
      'Generate GST-compliant tax invoices online for free. Automatic CGST/SGST/IGST split, HSN/SAC codes, place of supply, reverse charge and e-way bill fields. Download PDF instantly, no signup.',
    keywords: [
      'gst invoice maker',
      'gst bill generator',
      'gst invoice format',
      'tax invoice generator online',
      'cgst sgst igst calculator',
      'gst invoice with hsn code',
      'free gst billing software',
      'gst invoice maker India',
      'b2b gst invoice generator',
      'gst invoice pdf download',
      'gst bill',
      'gst bill maker',
      'gst bill format',
      'tax invoice format',
      'gst invoice format in excel',
      'gst invoice rules',
      'gst invoice format 2026',
      'how to make gst invoice online free',
      'gst bill generator online free India',
      'cgst sgst invoice format',
      'gst invoice with hsn code',
      'b2b gst invoice format',
      'gst tax invoice maker without login',
      'gst invoice format for services',
    ],
  },
  h1: 'Free GST Invoice Maker for India',
  intro:
    'Issue a statutory GST tax invoice with automatic CGST, SGST and IGST calculation, HSN/SAC codes, place of supply and reverse charge fields — then download a print-ready PDF in seconds. No signup, no charges, and everything stays in your browser.',
  badge: {
    label: 'GST Compliant ✓',
    colorClass: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700',
  },
  theme: 'emerald',
  layout: {
    hero: 'stat-band',
    howTo: 'timeline',
    features: 'checklist',
    useCases: 'columns',
    example: 'table',
  },
  order: [
    'whatIs',
    'custom',
    'widget',
    'howTo',
    'proTips',
    'example',
    'features',
    'sections',
    'useCases',
    'mistakes',
    'faq',
    'blogs',
    'related',
  ],
  orientationPoints: [
    'Auto CGST, SGST & IGST split',
    'HSN/SAC code and place of supply fields',
    'Reverse charge and e-way bill references',
    'Consecutive 16-character serial numbering',
  ],
  widget: 'gst-calculator',
  relatedBlogSlugs: [
    'gst-invoice-rules-guide',
    'gst-in-quotations',
    'invoice-vs-quotation',
  ],
  customBlocks: [
    {
      kind: 'table',
      heading: 'GST Rate Slabs and the HSN/SAC Codes Behind Them',
      intro:
        'Every line on a tax invoice needs a rate and a code. These are the slabs in force and the categories that typically sit in each, with sample HSN codes for goods and SAC codes for services.',
      columns: ['Slab', 'Typical supplies', 'Sample HSN / SAC'],
      rows: [
        [
          'Nil / exempt',
          'Fresh produce, unbranded flour and cereals, most educational and healthcare services.',
          '0713 (pulses), 9992 (education)',
        ],
        [
          '5%',
          'Packaged food staples, footwear under ₹1,000, small restaurants, goods transport by road.',
          '1905 (bakery), 9965 (transport)',
        ],
        [
          '12%',
          'Processed foods, business-class air travel, works contracts for affordable housing.',
          '2106 (food preparations), 9954 (construction)',
        ],
        [
          '18%',
          'The default slab — most services, IT and software, consulting, machinery, electronics.',
          '9983 (professional), 8471 (computers), 9971 (financial)',
        ],
        [
          '28%',
          'Luxury and demerit goods: cars, air conditioners, aerated drinks, tobacco. Often carries cess on top.',
          '8703 (motor cars), 2402 (cigarettes)',
        ],
      ],
      note:
        'Rates and classifications change at GST Council meetings. Verify the exact code for your product on the CBIC rate finder before you rely on it — a wrong code carrying the right rate is still a mismatch, and it surfaces during GSTR-1 reconciliation rather than at the time you raise the invoice.',
    },
    {
      kind: 'checklist',
      heading: 'Rule 46 Checklist: Particulars a Tax Invoice Must Carry',
      intro:
        'Rule 46 of the CGST Rules lists what a tax invoice must contain. If any of these is missing, your buyer’s input tax credit can be questioned — which is why registered buyers send defective invoices back rather than paying against them.',
      items: [
        {
          title: 'Supplier name, address and GSTIN',
          text: 'Your registered legal name exactly as it appears on the GST certificate, the principal place of business address, and the 15-character GSTIN. A trade name may be printed alongside but cannot replace the registered name.',
        },
        {
          title: 'A consecutive serial number, unique for the year',
          text: 'Up to 16 characters, using letters, digits, hyphen and slash only. It must run unbroken for the financial year — gaps and duplicates are the fastest way to attract scrutiny during a departmental audit.',
        },
        {
          title: 'Date of issue',
          text: 'The date the invoice is raised, which also fixes the tax period the supply falls into. For services this is generally within 30 days of supply; for goods it is on or before removal or delivery.',
        },
        {
          title: 'Recipient name, address and GSTIN',
          text: 'Mandatory for registered buyers. For unregistered buyers the name and address are still needed when the invoice value exceeds ₹50,000, along with the delivery address and state.',
        },
        {
          title: 'HSN or SAC code for every line item',
          text: 'Goods carry an HSN code, services carry a SAC. The number of digits required scales with your aggregate turnover in the preceding financial year.',
        },
        {
          title: 'Description, quantity, unit and taxable value',
          text: 'Each supply described specifically enough to identify it, with quantity and unit of measure for goods, and the taxable value after any discount that was agreed before or at the time of supply.',
        },
        {
          title: 'Tax rate and amount, split by head',
          text: 'CGST and SGST/UTGST shown separately for intra-state supplies, or IGST for inter-state — never a single combined "GST" figure. Cess, where applicable, is a further separate line.',
        },
        {
          title: 'Place of supply with state name',
          text: 'Required on every inter-state invoice. Place of supply is what decides CGST+SGST versus IGST, and getting it wrong means tax paid under the wrong head, which cannot simply be re-adjusted later.',
        },
        {
          title: 'Whether tax is payable on reverse charge',
          text: 'An explicit yes or no. Where reverse charge applies the recipient pays the tax directly, and the invoice must say so rather than leaving it to be inferred.',
        },
        {
          title: 'Signature or digital signature of the supplier',
          text: 'A physical signature, or a digital signature for electronically issued invoices. Invoices issued through an e-invoicing portal with a valid IRN are exempt from this requirement.',
        },
      ],
    },
  ],
  whatIs: {
    heading: 'What Is a GST Tax Invoice?',
    paragraphs: [
      'A GST tax invoice is the statutory document a registered supplier must issue when supplying taxable goods or services in India. It is more than a bill: for a B2B buyer it is the evidence on which input tax credit (ITC) is claimed, and for the tax department it is the record against which your GSTR-1 filings are matched. If the invoice is defective, the buyer’s credit can be questioned — which is why registered businesses insist on a properly drawn tax invoice rather than an ordinary bill.',
      'Rule 46 of the CGST Rules prescribes what a tax invoice must contain: the supplier’s name, address and GSTIN; a consecutive serial number (up to 16 characters, unique for the financial year); the date of issue; the recipient’s name, address and GSTIN for registered buyers; the HSN or SAC code of each item; description, quantity and taxable value; the rate and amount of tax shown separately as CGST, SGST/UTGST or IGST; the place of supply with the state name for inter-state sales; whether tax is payable on reverse charge; and the signature or digital signature of the supplier.',
      'The tax split depends on where the supply goes. When supplier and place of supply are in the same state, the levy is intra-state and splits equally into CGST and SGST (an 18% rate becomes 9% + 9%). When they are in different states, the whole levy is charged as IGST. Charging the wrong pair is a common and painful error — the tax paid under the wrong head cannot simply be adjusted, so this tool lets you switch the mode with one dropdown and recomputes every line automatically.',
    ],
  },
  howTo: {
    heading: 'How to Create a GST Invoice in 4 Steps',
    steps: [
      {
        title: 'Enter supplier and recipient details with GSTINs',
        text: 'Fill in your registered business name, address and 15-digit GSTIN under Supplier, and the buyer’s details under Recipient. For a B2B sale, add the buyer’s GSTIN so they can claim input tax credit; for B2C retail sales the buyer’s GSTIN is simply left blank.',
      },
      {
        title: 'Set place of supply, reverse charge and e-way bill',
        text: 'In the GST Details section, enter the place of supply with its state code (for example Karnataka (29)), mark Reverse Charge as Yes or No, and record the 12-digit e-way bill number if goods worth over ₹50,000 are moving. The place of supply decides whether CGST+SGST or IGST applies.',
      },
      {
        title: 'Add items with HSN/SAC codes and tax rates',
        text: 'List each product or service with its HSN or SAC code, quantity, taxable rate and GST percentage. Pick intra-state or inter-state tax mode and the tool computes the CGST/SGST or IGST amounts, taxable value and grand total live as you type.',
      },
      {
        title: 'Preview, download and share',
        text: 'Check the live preview, choose from 25 templates, add your signature and stamp, then export the tax invoice as PDF or PNG, print it, or send it to the buyer over WhatsApp. The total in words appears automatically in Indian lakh/crore format.',
      },
    ],
  },
  features: {
    heading: 'Built for GST Compliance, Free Forever',
    items: [
      {
        title: 'Automatic CGST/SGST/IGST split',
        text: 'Choose intra-state and an 18% rate splits into CGST 9% + SGST 9%; choose inter-state and the full 18% is charged as IGST. No manual arithmetic, no wrong-head tax errors.',
      },
      {
        title: 'HSN/SAC code column on every line',
        text: 'Each item row carries an HSN/SAC field so your invoice meets the digit requirements notified for your turnover slab and your buyer’s GSTR-2B reflects the right codes.',
      },
      {
        title: 'Place of supply, reverse charge and e-way bill fields',
        text: 'The GST Details section captures place of supply with state code, a reverse charge Yes/No declaration and an optional e-way bill number — the Rule 46 particulars ordinary invoice tools skip.',
      },
      {
        title: 'B2B and B2C ready',
        text: 'Add the recipient’s GSTIN for registered buyers who need input credit, or leave it blank for consumer sales. The same editor handles both without switching tools.',
      },
      {
        title: 'Nothing leaves your device',
        text: 'Invoices autosave to your browser’s localStorage as you type. There is no account, no cloud upload and no watermark — your tax data stays with you.',
      },
      {
        title: 'Professional output in one click',
        text: 'Upload your logo, signature and company stamp, pick from 25+ A4-tuned templates, add a UPI QR code and export a clean PDF or PNG headed TAX INVOICE.',
      },
    ],
  },
  useCases: {
    heading: 'Who Needs a GST Invoice Maker?',
    intro:
      'Every GST-registered supplier — from a kirana wholesaler to a SaaS agency — must issue tax invoices in the prescribed format. Typical users of this tool include:',
    items: [
      {
        title: 'Wholesalers and distributors selling B2B',
        text: 'Traders supplying to registered retailers issue invoices with HSN codes and the buyer’s GSTIN so the retailer’s input credit flows through GSTR-2B without mismatch notices.',
      },
      {
        title: 'Service firms billing across state lines',
        text: 'Agencies, consultants and software firms serving clients in other states charge IGST with the correct place of supply, keeping their GSTR-1 state-wise summary accurate.',
      },
      {
        title: 'Manufacturers dispatching goods with e-way bills',
        text: 'Factories moving consignments above ₹50,000 record the e-way bill number on the tax invoice itself, so the driver carries one consistent set of documents.',
      },
      {
        title: 'Newly registered businesses crossing the threshold',
        text: 'Firms that just took GST registration switch from plain bills to compliant tax invoices overnight — this tool gives them the correct format without buying accounting software.',
      },
    ],
  },
  example: {
    heading: 'GST Invoice Example: Inter-State Electronics Sale with IGST',
    intro:
      'An electronics wholesaler in Mumbai, Maharashtra sells 20 Bluetooth speakers to a registered retailer in Ahmedabad, Gujarat. Because the place of supply (Gujarat, code 24) differs from the supplier’s state, the entire 18% GST is charged as IGST:',
    rows: [
      { label: 'Bluetooth speakers, HSN 8518 (20 units @ ₹2,500)', value: '₹50,000.00' },
      { label: 'Freight & packing', value: '₹1,500.00' },
      { label: 'Taxable value', value: '₹51,500.00' },
      { label: 'IGST @ 18% (inter-state — no CGST/SGST)', value: '₹9,270.00' },
      { label: 'Invoice total (Rupees Sixty Thousand Seven Hundred Seventy only)', value: '₹60,770.00' },
    ],
    outro:
      'The invoice shows number GST-2026-0117, both parties’ GSTINs, place of supply "Gujarat (24)", reverse charge "No" and the e-way bill number for the consignment. Had the buyer been in Maharashtra instead, the same ₹9,270 would have printed as CGST ₹4,635 + SGST ₹4,635 — the tool handles the switch with one click.',
  },
  sections: [
    {
      heading: 'HSN and SAC Codes: How Many Digits Do You Need?',
      paragraphs: [
        'HSN (Harmonised System of Nomenclature) codes classify goods and SAC (Services Accounting Code) numbers classify services on GST invoices. The number of digits you must print depends on your aggregate turnover in the previous financial year: businesses with turnover up to ₹5 crore must show at least 4-digit HSN codes on B2B invoices (optional on B2C), while those above ₹5 crore must show 6-digit codes on all invoices. Exporters and importers use the full 8-digit codes.',
        'Getting the code right matters beyond the invoice itself — HSN-wise summaries are reported in GSTR-1, and a mismatch between your code and your buyer’s expectation can trigger reconciliation queries. If you are unsure of a code, check the GST portal’s HSN search or your product’s customs tariff heading, then keep it consistent across quotations, invoices, credit notes and delivery challans.',
      ],
    },
    {
      heading: 'Input Tax Credit, Reverse Charge and Why B2B Invoices Are Scrutinised',
      paragraphs: [
        'Input tax credit is the mechanism that stops tax cascading: a registered buyer deducts the GST paid on purchases from the GST collected on sales. But credit is only available when the supplier issues a valid tax invoice, reports it in GSTR-1 and pays the tax — the invoice then appears in the buyer’s GSTR-2B. A missing GSTIN, wrong place of supply or absent HSN code can hold up a buyer’s credit, which is why B2B customers scrutinise your invoices far more closely than consumers do.',
        'Reverse charge flips the normal flow: for notified goods and services (and certain purchases from unregistered persons), the recipient pays the tax directly instead of the supplier collecting it. Rule 46 requires every tax invoice to state whether tax is payable on reverse charge, even when the answer is No — the dedicated Yes/No field in this tool prints that declaration on every invoice.',
        'Also note the e-invoicing mandate: businesses whose aggregate turnover has exceeded ₹5 crore in any year since 2017-18 must report B2B invoices to the government’s Invoice Registration Portal and print the resulting IRN and QR code. If you fall under that threshold, this tool covers your invoicing fully; above it, you can still draft and share invoices here but must additionally register them on the IRP.',
      ],
    },
    {
      heading: 'GST Invoice Timelines, Copies and Common Mistakes',
      paragraphs: [
        'Timing is prescribed: for goods, the tax invoice must be issued before or at the time of removal or delivery; for services, within 30 days of supply (45 days for banks and NBFCs). Goods invoices are prepared in triplicate — original for recipient, duplicate for transporter, triplicate for supplier — while service invoices need only original and duplicate.',
        'The mistakes we see most often: charging CGST+SGST on an inter-state sale (or IGST intra-state), skipping the place of supply on service invoices, breaking the invoice number sequence mid-year, and omitting the buyer’s GSTIN on a B2B sale. Each of these can surface later as an ITC dispute or a GSTR-1 amendment. Because this tool structures every Rule 46 field and computes the tax split from your chosen mode, the format errors are designed out — you only need to enter accurate facts.',
        'If a sale is later returned or the value changes, do not edit or reissue the invoice; issue a credit note or debit note referencing the original invoice number, as Section 34 of the CGST Act requires. Our credit note and debit note generators share this same editor.',
      ],
    },
  ],
  faqs: [
    {
      q: 'What must a GST invoice contain to be valid?',
      a: 'Under Rule 46 of the CGST Rules: supplier name, address and GSTIN; a unique consecutive invoice number (max 16 characters) and date; recipient details with GSTIN for registered buyers; HSN/SAC codes; description, quantity and taxable value; tax rate and amount shown separately as CGST/SGST or IGST; place of supply for inter-state sales; a reverse charge declaration; and the supplier’s signature. This tool has a field for each of these.',
    },
    {
      q: 'When do I charge CGST+SGST and when do I charge IGST?',
      a: 'Compare your registered state with the place of supply. Same state: intra-state supply, so the GST rate splits equally into CGST and SGST. Different states (or supply to a SEZ or export): inter-state supply, so the entire rate is charged as IGST. The tax mode dropdown applies the correct split to every line automatically.',
    },
    {
      q: 'How many HSN digits should I print on my invoices?',
      a: 'Turnover up to ₹5 crore in the previous financial year: minimum 4 digits on B2B invoices (optional for B2C). Turnover above ₹5 crore: minimum 6 digits on all invoices. Import/export documents use 8 digits. Services use SAC codes with the same digit rules.',
    },
    {
      q: 'What is the difference between a B2B and a B2C GST invoice?',
      a: 'A B2B invoice is issued to a GST-registered buyer and must carry their GSTIN so they can claim input tax credit; it is reported invoice-wise in GSTR-1. A B2C invoice goes to an unregistered consumer, needs no recipient GSTIN, and is generally reported as a consolidated summary. In this tool you simply fill or skip the recipient GSTIN field.',
    },
    {
      q: 'Do I need e-invoicing (IRN and QR code) for my invoices?',
      a: 'E-invoicing applies to businesses whose aggregate turnover exceeded ₹5 crore in any financial year from 2017-18 onwards, for their B2B and export invoices. If you are below that threshold, a properly formatted tax invoice like the one this tool produces is sufficient. Above it, you must additionally report each B2B invoice to the Invoice Registration Portal.',
    },
    {
      q: 'What does the reverse charge field on the invoice mean?',
      a: 'Reverse charge means the recipient, not the supplier, is liable to pay the GST to the government — it applies to notified categories such as GTA transport services, legal services from advocates, and certain unregistered purchases. Every tax invoice must declare whether reverse charge applies, so the tool prints your Yes/No selection on the document.',
    },
    {
      q: 'When is an e-way bill number required on the invoice?',
      a: 'An e-way bill is required when goods worth more than ₹50,000 move in a vehicle (some states set different intra-state limits). Generate it on the e-way bill portal and record the 12-digit number in the optional e-Way Bill field here so the invoice and transport documents match during a road check.',
    },
    {
      q: 'Is this GST invoice generator really free, and where is my data stored?',
      a: 'Completely free — unlimited invoices, all 25 templates, PDF and PNG downloads, no watermark and no signup. Your invoices autosave in your browser’s local storage on your own device; nothing is uploaded unless you deliberately create a WhatsApp share link for a specific document.',
    },
  ],
  relatedHeading: 'Other GST Documents You May Need to Issue',
  relatedNote:
    'A tax invoice is one of several documents the GST rules prescribe — corrections, movement and advances each have their own.',
  related: ['invoice', 'quotation', 'credit-note', 'debit-note', 'delivery-challan', 'proforma-invoice'],

  proTips: {
    heading: 'GST Invoice Compliance Tips Every Indian Business Owner Should Know',
    items: [
      {
        icon: '📍',
        title: 'Determine place of supply before choosing CGST/SGST or IGST',
        text: 'For goods, place of supply is typically where delivery happens. For services, it is the registered address of the recipient. Get this wrong and you apply the wrong tax type — which means your buyer cannot claim the input tax credit they are owed, and you may have a liability in the correct state.',
      },
      {
        icon: '📊',
        title: 'Use the correct HSN code for every goods line item',
        text: 'Businesses with turnover above ₹5 crore must print 6-digit HSN codes; those between ₹1.5 and ₹5 crore need 4 digits; below ₹1.5 crore it is optional but recommended. Wrong codes attract notices and can invalidate the input tax credit for your buyer.',
      },
      {
        icon: '🧴',
        title: 'Record the GSTIN of every GST-registered buyer',
        text: 'A B2B supply without the buyer\'s GSTIN is treated as B2C in GSTR-1, which means the buyer loses their ITC entitlement. Always ask for the GSTIN before issuing, and verify it on the GST portal — one typo can make the credit unclaimable.',
      },
      {
        icon: '📦',
        title: 'Generate an e-way bill for goods movements above ₹50,000',
        text: 'Goods worth over ₹50,000 in a single consignment moving between states (and for most intra-state moves in most states) require a 12-digit e-way bill number generated on the GSTN portal. Print this number on the invoice and keep it with the vehicle throughout transit.',
      },
      {
        icon: '⏰',
        title: 'Issue the invoice within the GST time-of-supply deadline',
        text: 'For goods, the tax invoice must be issued at or before dispatch. For services, it must be raised within 30 days of the supply date (45 days for banking and insurance). Issuing late is a GST compliance violation and can trigger interest liability.',
      },
      {
        icon: '🔄',
        title: 'Know when to issue a revised invoice instead of a credit note',
        text: 'If you need to correct a B2B invoice raised before the recipient filed their GSTR-3B, a revised invoice is appropriate. After filing, use a credit note instead. The distinction matters for how the correction appears in GSTR-1 and whether the recipient can adjust their ITC in the same period.',
      },
    ],
  },

  mistakes: {
    heading: '6 GST Invoice Errors That Trigger Notices and ITC Denials',
    intro:
      'GST compliance is not forgiving of small mistakes. Each of these errors has real consequences — either a direct financial loss for your buyer or a notice from the GST department for you.',
    items: [
      {
        mistake: 'Wrong place of supply',
        impact: 'Tax paid to the wrong state — buyer cannot claim ITC and you have a liability.',
        fix: 'Determine supply type (intra/inter-state) based on actual delivery or recipient location.',
      },
      {
        mistake: 'Missing buyer GSTIN on B2B',
        impact: 'Invoice treated as B2C in GSTR-1; buyer loses their input tax credit entirely.',
        fix: 'Always collect and verify the buyer\'s GSTIN on the GST portal before issuing.',
      },
      {
        mistake: 'Incorrect HSN/SAC code',
        impact: 'GST department can question the rate applied and raise a demand notice.',
        fix: 'Look up the correct 6-digit code in the HSN master list or confirm with your CA.',
      },
      {
        mistake: 'Invoice issued after the time-of-supply deadline',
        impact: 'Late issuance attracts interest and is a GST compliance violation.',
        fix: 'For goods: invoice at dispatch. For services: within 30 days of supply date.',
      },
      {
        mistake: 'No sequential invoice number',
        impact: 'GST audit cannot reconcile the series; GSTR-1 may be queried.',
        fix: 'Use a single sequential series for the financial year — no gaps, no duplicates.',
      },
      {
        mistake: 'Mixing CGST+SGST and IGST on the same invoice',
        impact: 'Legally invalid — one supply can only attract one type of GST.',
        fix: 'Choose intra-state (CGST+SGST) or inter-state (IGST) for each invoice based on place of supply.',
      },
    ],
  },
};
