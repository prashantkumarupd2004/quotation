import type { ToolContent } from './types';

export const purchaseOrderContent: ToolContent = {
  id: 'purchase-order',
  seo: {
    title: 'Free Purchase Order Generator — Create PO Online & Download PDF',
    description:
      'Generate professional purchase orders online — free. Add vendor details, item specifications, delivery location and payment terms, then download a print-ready PO PDF. No signup required.',
    keywords: [
      'purchase order generator',
      'free purchase order maker',
      'PO format India',
      'purchase order template pdf',
      'create purchase order online',
      'PO generator free',
      'purchase order format with GST',
      'vendor purchase order',
      'purchase order sample',
      'po maker',
      'purchase order format',
      'po format pdf',
      'purchase order template excel',
      'how to create a purchase order online free',
      'purchase order format India with gst',
      'material purchase order format',
      'po generator online free no signup',
      'purchase order letter format',
      'difference between purchase order and invoice',
    ],
  },
  h1: 'Free Purchase Order Generator',
  intro:
    'Raise a clear, professional purchase order to any vendor in minutes — item specifications, quantities, delivery location, expected date and payment terms, all on a numbered PO you can download as a PDF. Free, no signup.',
  badge: {
    label: 'B2B Procurement',
    colorClass: 'bg-cyan-100 text-cyan-900 dark:bg-cyan-950 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-700',
  },
  theme: 'cyan',
  layout: {
    hero: 'flow',
    howTo: 'band',
    features: 'checklist',
    useCases: 'cards',
    example: 'strip',
  },
  order: [
    'widget',
    'whatIs',
    'howTo',
    'custom',
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
    'Authorises the vendor before they supply',
    'Ship-to location and expected delivery date',
    'References the vendor quotation you agreed',
    'Gives accounts a number to match against',
  ],
  widget: 'po-workflow',
  relatedBlogSlugs: [
    'purchase-order-vs-quotation',
    'purchase-order-process-guide',
    'business-documentation-guide',
  ],
  customBlocks: [
    {
      kind: 'table',
      heading: 'A Purchase Approval Matrix You Can Actually Enforce',
      intro:
        'Purchasing control fails when every order needs the owner’s signature — people simply stop raising POs. Tiering approval by value keeps small purchases moving while the amounts that matter still get looked at. This is a workable starting structure for a small or mid-sized Indian business.',
      columns: ['Order value', 'Who approves', 'What is expected before approval'],
      rows: [
        [
          'Up to ₹25,000',
          'Department head or site in-charge',
          'A PO raised against a known vendor. No competing quotes needed — the administrative cost would exceed the saving.',
        ],
        [
          '₹25,000 – ₹2,00,000',
          'Purchase manager',
          'At least two written quotations, or a rate contract already in force with the chosen vendor.',
        ],
        [
          '₹2,00,000 – ₹10,00,000',
          'Finance head, countersigned by the purchase manager',
          'Three quotations with a written comparison, vendor GSTIN verified, and confirmation the spend sits within budget.',
        ],
        [
          'Above ₹10,00,000',
          'Director or partner',
          'Formal comparative statement, negotiation record, credit and delivery terms agreed in writing, and a payment schedule tied to milestones.',
        ],
        [
          'Any value, new vendor',
          'One level above the normal threshold',
          'Vendor onboarding complete: GSTIN checked on the portal, bank details verified independently of email, PAN on record.',
        ],
        [
          'Any value, emergency purchase',
          'Verbal approval, ratified within 48 hours',
          'A PO raised retrospectively the same week with the reason for urgency recorded on it. Without this rule, "emergency" quietly becomes the default route.',
        ],
      ],
      note:
        'Verify a new vendor’s bank details by phoning a number you already hold, never one supplied in the same email as the invoice. Redirected-payment fraud targets exactly this gap, and a PO process is the natural place to close it.',
    },
    {
      kind: 'checklist',
      heading: 'Three-Way Matching: What to Check Before Releasing Payment',
      intro:
        'Three-way matching is the control that makes POs worth raising. Before any vendor invoice is paid, it is set against the purchase order and the goods receipt, and the three must agree. These are the checks in the order they are usually run.',
      items: [
        {
          title: 'Does the invoice quote a valid, open PO number?',
          text: 'No PO number, no payment. This single rule is what stops unauthorised purchases, because a vendor who cannot invoice without a PO will insist on getting one before they supply.',
        },
        {
          title: 'Do the items match the PO line for line?',
          text: 'Compare descriptions and specifications, not just totals. An extra line, a substituted grade or a different make is a change that needed approval before delivery, not after.',
        },
        {
          title: 'Does the quantity billed match the quantity received?',
          text: 'Set the invoice against the delivery challan or goods receipt note, not against the PO. Short deliveries billed in full are the most common overpayment in small businesses, and they are invisible unless someone checks receipt rather than order.',
        },
        {
          title: 'Do the rates match the agreed rates?',
          text: 'Any increase over the PO rate needs a written amendment. "Prices went up" arriving as an invoice line is not an amendment — it is a renegotiation the buyer never agreed to.',
        },
        {
          title: 'Is the tax charged correctly?',
          text: 'Check the GSTIN is valid and active, that the CGST/SGST or IGST split matches the place of supply, and that the HSN codes are consistent with what was ordered. A defective invoice puts your input tax credit at risk.',
        },
        {
          title: 'Have deductions and retentions been applied?',
          text: 'TDS where applicable, agreed retention amounts, penalties for late delivery and any credit notes outstanding from earlier consignments should be netted off before the payment is released.',
        },
        {
          title: 'File the three documents together',
          text: 'PO, receipt and invoice stored as one bundle answers almost every question an auditor or assessing officer can raise about a purchase — from ITC eligibility to expense substantiation — without a search.',
        },
      ],
    },
  ],
  whatIs: {
    heading: 'What Is a Purchase Order?',
    paragraphs: [
      'A purchase order (PO) is a document a buyer sends to a vendor authorising a purchase. It flips the usual billing direction: while a quotation and an invoice travel from seller to buyer, the PO travels from buyer to seller. It states exactly what the buyer wants — items, specifications, quantities, agreed unit prices — plus where the goods must be delivered, by when, and on what payment terms.',
      'Once a vendor accepts a purchase order, it becomes a commercially binding commitment. That protects both sides: the vendor has written authority to manufacture or dispatch, and the buyer has a record of the agreed price that no later invoice can quietly exceed. This is why well-run companies refuse to pay any invoice that does not quote a valid PO number.',
      'The PO number is also the backbone of three-way matching, the standard control in purchasing: the accounts team pays an invoice only when the PO, the delivery challan (or goods receipt note) and the invoice all agree on items, quantities and rates. If you buy anything on credit — materials, equipment, packaging, services — issuing POs is the single simplest upgrade to your purchasing discipline.',
    ],
  },
  howTo: {
    heading: 'How to Create a Purchase Order Online',
    steps: [
      {
        title: 'Enter buyer and vendor details',
        text: 'Fill in your company as the buyer — name, address, GSTIN, logo — and the vendor you are ordering from. The live preview shows the PO exactly as the vendor will receive it.',
      },
      {
        title: 'List the items you are ordering',
        text: 'Add each item or material with a precise description, HSN code if known, quantity, unit and the agreed unit price. Totals and GST are calculated automatically as you type.',
      },
      {
        title: 'Add delivery and payment terms',
        text: 'Set the PO date and expected delivery date, enter the ship-to delivery location, reference the vendor’s quotation number if you negotiated from one, and state your payment terms (for example, 30 days from delivery).',
      },
      {
        title: 'Download and send to the vendor',
        text: 'Pick a template, add your authorised signature and company stamp, then download the PO as a PDF or share it on WhatsApp. Ask the vendor to confirm acceptance in writing.',
      },
    ],
  },
  features: {
    heading: 'What Makes This PO Generator Useful',
    items: [
      {
        title: 'Sequential PO numbering',
        text: 'Auto-suggested numbers in the PO-YYYY-NNNN format keep your purchase series clean, which matters when invoices and challans are matched back to POs during audits.',
      },
      {
        title: 'Delivery location and expected date',
        text: 'A dedicated ship-to field and an expected-delivery date print prominently on the order, so multi-site businesses never receive goods at the wrong branch.',
      },
      {
        title: 'Vendor quotation reference',
        text: 'Link the PO to the vendor’s quotation number so the agreed pricing trail is unbroken from quote to order to invoice.',
      },
      {
        title: 'GST-aware amounts',
        text: 'Per-item tax rates with CGST/SGST or IGST modes show the vendor the full landed value you expect to be billed — no surprises on the tax line.',
      },
      {
        title: 'Signature, stamp and terms',
        text: 'Upload the purchase manager’s signature and company seal, and print standard ordering terms — specification compliance, delivery deadline and rejection rights — on every PO.',
      },
      {
        title: 'Autosaved, reusable orders',
        text: 'Your last PO is saved in the browser. For repeat orders to the same vendor, update the number, date and quantities and download — done in under a minute.',
      },
    ],
  },
  useCases: {
    heading: 'Where Purchase Orders Earn Their Keep',
    intro:
      'Any business that buys on credit or orders against specifications benefits from POs. Typical scenarios our users generate purchase orders for:',
    items: [
      {
        title: 'Restaurants and retailers ordering stock',
        text: 'A weekly PO to each supplier fixes prices and quantities in writing, so month-end supplier statements can be reconciled line by line against what was actually ordered.',
      },
      {
        title: 'Contractors ordering project materials',
        text: 'Site engineers raise POs for cement, steel and fittings against the project budget, with the site address as delivery location — head office pays only PO-backed invoices.',
      },
      {
        title: 'Offices buying equipment and services',
        text: 'From laptops to annual maintenance contracts, a PO documents the approved spend and the terms before the vendor delivers anything.',
      },
      {
        title: 'Manufacturers ordering components',
        text: 'Recurring component orders reference the rate contract or the vendor’s quotation, letting stores match every inward challan to an open PO.',
      },
    ],
  },
  example: {
    heading: 'Purchase Order Example: Restaurant Kitchen Equipment',
    intro:
      'A restaurant chain fitting out a new outlet orders kitchen equipment from a vendor whose quotation it has accepted. The PO looks like this:',
    rows: [
      { label: 'Commercial 4-burner range (2 Nos @ ₹58,000)', value: '₹1,16,000.00' },
      { label: 'SS prep tables 6ft (4 Nos @ ₹14,500)', value: '₹58,000.00' },
      { label: 'Subtotal', value: '₹1,74,000.00' },
      { label: 'GST @ 18% (CGST + SGST)', value: '₹31,320.00' },
      { label: 'PO Total — delivery within 3 weeks', value: '₹2,05,320.00' },
    ],
    outro:
      'The PO carries number PO-2026-0018, references the vendor’s quotation QT-2026-0087, names the new outlet’s address as the delivery location, and states payment terms of 50% advance and 50% on installation. The vendor’s invoice must quote this PO number to be processed.',
  },
  sections: [
    {
      heading: 'Purchase Order vs Invoice: Who Sends What',
      paragraphs: [
        'The two documents are mirror images. The buyer issues the purchase order before delivery — it is a request and an authorisation. The seller issues the invoice after delivery — it is a demand for payment. In a clean transaction the invoice simply restates the PO: same items, same quantities, same rates, plus the PO number in its reference field.',
        'When the invoice differs from the PO — a higher rate, an extra line, a bigger quantity — the mismatch is a signal to pause payment and investigate. That is exactly the discipline three-way matching enforces, and why buyers who issue POs consistently overpay far less often than buyers who order over the phone.',
      ],
    },
    {
      heading: 'Is a Purchase Order Legally Binding?',
      paragraphs: [
        'A purchase order becomes binding once the vendor accepts it — by written confirmation, by signing and returning a copy, or in practice by acting on it (dispatching the goods). Until acceptance, it is an offer the vendor can decline or negotiate. This is why a well-drafted PO states its own terms: specification compliance, the delivery deadline, the right to reject non-conforming goods, and the payment schedule.',
        'Keep acceptance evidence with the PO. If a dispute arises about price or quantity, the accepted PO — not a phone call anyone remembers differently — is what settles it. Our generator prints a terms block on every PO and leaves space for the vendor’s acknowledgment signature.',
      ],
    },
    {
      heading: 'PO Numbering and Record-Keeping Best Practices',
      paragraphs: [
        'Run one continuous PO series per financial year (PO-2026-0001 onwards) and never skip or reuse numbers — gaps in a purchase series invite audit questions. If you operate multiple branches, prefix the series per site (BLR-PO-2026-0001) so each location’s spending can be tracked independently.',
        'File each PO with its acceptance, the delivery challan and the final invoice as one bundle. At year end this bundle answers every question your accountant or an assessing officer might ask about a purchase, from ITC claims to expense substantiation. Because this tool exports clean PDFs, a simple dated folder structure is all the filing system you need.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Who issues a purchase order — the buyer or the seller?',
      a: 'The buyer. A purchase order is the buyer’s written authorisation to a vendor to supply goods or services at agreed prices. The seller responds by accepting the PO and later invoicing against it. If you are the seller looking to bill a customer, use the Invoice Maker instead.',
    },
    {
      q: 'Is a purchase order the same as a work order?',
      a: 'They are close cousins. A purchase order typically covers goods or standard services, while a work order describes a job to be performed, often internally or on-site. For ordering materials and equipment from vendors, a PO is the right document, and this generator covers services too — just describe the service as the line item.',
    },
    {
      q: 'Should a purchase order include GST?',
      a: 'Showing GST on a PO is good practice, though not legally mandatory — it tells the vendor the total value you expect to be invoiced and avoids disputes over whether quoted rates were inclusive or exclusive of tax. This tool calculates CGST/SGST or IGST per line item automatically.',
    },
    {
      q: 'What details must a purchase order contain?',
      a: 'A unique PO number and date, buyer and vendor names and addresses, a precise description of each item with quantity, unit and agreed rate, the delivery location, the expected delivery date, payment terms, taxes, the total value and an authorised signature. Every one of these has a dedicated field in the generator.',
    },
    {
      q: 'Can I reference the vendor’s quotation on the PO?',
      a: 'Yes — the Order Details section has a Vendor Quotation Ref. field. Referencing the quotation number ties the agreed pricing to the order, so the vendor cannot later invoice at a different rate without an obvious discrepancy.',
    },
    {
      q: 'How do I send the PO to my vendor?',
      a: 'Download it as a PDF and email it, print and courier it, or use the WhatsApp share button to send a link to a read-only copy directly from the toolbar. Ask the vendor to confirm acceptance in writing either way.',
    },
    {
      q: 'Can I create POs for multiple vendors?',
      a: 'Yes, unlimited. The builder autosaves your latest PO in your browser; for a new vendor simply update the vendor section, items and PO number. Duplicating a previous order for a repeat purchase takes seconds.',
    },
    {
      q: 'Is this purchase order generator really free?',
      a: 'Completely. No signup, no watermark, no PO limit and no locked templates. The tool runs in your browser and your purchasing data stays on your device — nothing is uploaded to our servers.',
    },
  ],
  relatedHeading: 'The Rest of the Procurement Paper Trail',
  relatedNote:
    'A PO is one link in the chain — the quotation precedes it, the challan and invoice close it out.',
  related: ['quotation', 'invoice', 'delivery-challan', 'proforma-invoice', 'gst-invoice', 'debit-note'],

  proTips: {
    heading: 'Procurement Best Practices That Protect Your Business',
    items: [
      {
        icon: '🔍',
        title: 'Always match PO → Delivery Challan → Invoice before paying',
        text: 'Three-way matching — comparing the purchase order, the delivery challan and the vendor\'s invoice before releasing payment — is the single most effective fraud and error prevention control in any purchase cycle. The quantities, rates, HSN codes and GST amounts on all three documents should agree. Discrepancies must be resolved before payment, not after.',
      },
      {
        icon: '📅',
        title: 'Set a firm delivery date, not just "as soon as possible"',
        text: 'A PO without a delivery date is an invitation to indefinite delay. State the expected delivery date clearly, and include a clause on what happens if the vendor misses it — whether that is a credit, a revised price or cancellation. Vendors who commit to a date on paper take the deadline more seriously.',
      },
      {
        icon: '🤝',
        title: 'Negotiate payment terms before the PO, not after',
        text: 'Once a PO is accepted, the terms are locked. Negotiate credit period, advance percentage and discount for early payment before you raise the PO. Large buyers routinely demand Net 45 or Net 60; small suppliers should counter with Net 15 plus a 2% discount for payment within 7 days.',
      },
      {
        icon: '⚖️',
        title: 'Never place a verbal order for anything above ₹5,000',
        text: 'Verbal orders lead to quantity disputes, price disputes and responsibility gaps. A PO — even a WhatsApp-shared PDF — creates a written record that both sides can refer to. The threshold should be much lower for capital goods or recurring supplies where even small discrepancies compound.',
      },
      {
        icon: '📄',
        title: 'Quote the original quotation number in every PO',
        text: 'Reference the vendor\'s quotation number in the PO remarks section. This links the two documents for audit purposes, prevents the vendor from claiming they were using a different price list, and makes reconciliation straightforward when multiple quotations were received.',
      },
      {
        icon: '🔒',
        title: 'Add a quality and rejection clause to every goods PO',
        text: 'State what quality standard goods must meet (IS specification, brand, model number), how defective goods will be handled (return at vendor\'s cost, replacement within X days, credit note) and who bears freight on returns. Without this, a rejected delivery becomes a legal argument rather than a simple transaction.',
      },
    ],
  },

  mistakes: {
    heading: '6 Purchase Order Mistakes That Create Procurement Problems',
    intro:
      'These errors are common across Indian SMEs and startups. Each one creates a different kind of downstream problem — from overpayment to audit findings to supply chain disruption.',
    items: [
      {
        mistake: 'No PO number system',
        impact: 'Cannot track which orders are open, fulfilled or partially delivered.',
        fix: 'Use a sequential series PO-2026-001 and reference it on the challan and invoice.',
      },
      {
        mistake: 'Accepting a verbal quotation',
        impact: 'Price disputes arise when the vendor invoices at a different rate.',
        fix: 'Always take a written quotation and reference the quotation number in the PO.',
      },
      {
        mistake: 'No delivery date',
        impact: 'Vendor treats the order as low priority; delivery slips without consequence.',
        fix: 'State a specific delivery date and the consequences of missing it.',
      },
      {
        mistake: 'No payment terms',
        impact: 'Vendor assumes Net 0; buyer assumes Net 30 — both are surprised.',
        fix: 'Specify advance %, credit period and due date calculation method in the PO itself.',
      },
      {
        mistake: 'Single-vendor sourcing for critical items',
        impact: 'Any supply disruption halts production with no alternative.',
        fix: 'Develop at least two approved vendors for any item where a stock-out is costly.',
      },
      {
        mistake: 'Paying before three-way match',
        impact: 'Paying for goods not received, or at wrong quantities or rates.',
        fix: 'Match PO, delivery challan and invoice quantities and amounts before authorising payment.',
      },
    ],
  },
};
