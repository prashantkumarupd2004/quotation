import type { ToolContent } from './types';

export const purchaseOrderContent: ToolContent = {
  id: 'purchase-order',
  seo: {
    title: 'Free Purchase Order Generator — Create PO Online & Download PDF',
    description:
      'Generate professional purchase orders online — free. Add vendor details, item specifications, delivery location and payment terms, then download a print-ready PO PDF. No signup required.',
    published: '2026-02-18',
    updated: '2026-08-07',
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
    'industries',
    'mistakes',
    'faq',
    'references',
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
        'Purchasing control fails when every order needs the owner\'s signature — people simply stop raising POs. Tiering approval by value keeps small purchases moving while the amounts that matter still get looked at. This is a workable starting structure for a small or mid-sized Indian business.',
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
        'Verify a new vendor\'s bank details by phoning a number you already hold, never one supplied in the same email as the invoice. Redirected-payment fraud targets exactly this gap, and a PO process is the natural place to close it.',
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
        text: 'Set the PO date and expected delivery date, enter the ship-to delivery location, reference the vendor\'s quotation number if you negotiated from one, and state your payment terms (for example, 30 days from delivery).',
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
        text: 'Link the PO to the vendor\'s quotation number so the agreed pricing trail is unbroken from quote to order to invoice.',
      },
      {
        title: 'GST-aware amounts',
        text: 'Per-item tax rates with CGST/SGST or IGST modes show the vendor the full landed value you expect to be billed — no surprises on the tax line.',
      },
      {
        title: 'Signature, stamp and terms',
        text: 'Upload the purchase manager\'s signature and company seal, and print standard ordering terms — specification compliance, delivery deadline and rejection rights — on every PO.',
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
        text: 'Recurring component orders reference the rate contract or the vendor\'s quotation, letting stores match every inward challan to an open PO.',
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
      'The PO carries number PO-2026-0018, references the vendor\'s quotation QT-2026-0087, names the new outlet\'s address as the delivery location, and states payment terms of 50% advance and 50% on installation. The vendor\'s invoice must quote this PO number to be processed.',
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
        'Keep acceptance evidence with the PO. If a dispute arises about price or quantity, the accepted PO — not a phone call anyone remembers differently — is what settles it. Our generator prints a terms block on every PO and leaves space for the vendor\'s acknowledgment signature.',
      ],
    },
    {
      heading: 'PO Numbering and Record-Keeping Best Practices',
      paragraphs: [
        'Run one continuous PO series per financial year (PO-2026-0001 onwards) and never skip or reuse numbers — gaps in a purchase series invite audit questions. If you operate multiple branches, prefix the series per site (BLR-PO-2026-0001) so each location\'s spending can be tracked independently.',
        'File each PO with its acceptance, the delivery challan and the final invoice as one bundle. At year end this bundle answers every question your accountant or an assessing officer might ask about a purchase, from ITC claims to expense substantiation. Because this tool exports clean PDFs, a simple dated folder structure is all the filing system you need.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Who issues a purchase order — the buyer or the seller?',
      a: 'The buyer. A purchase order is the buyer\'s written authorisation to a vendor to supply goods or services at agreed prices. The seller responds by accepting the PO and later invoicing against it. If you are the seller looking to bill a customer, use the Invoice Maker instead.',
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
      q: 'Can I reference the vendor\'s quotation on the PO?',
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
    {
      q: 'Does a purchase order create a legally binding contract?',
      a: 'Yes, once the supplier accepts it — either by written confirmation, by issuing a proforma invoice against it, or by beginning to fulfil the order. The PO specifies the goods or services, quantities, agreed price, delivery terms and payment terms. Acceptance creates a contract governed by the Indian Contract Act, 1872. A verbal acceptance is also binding in principle, but a written or email confirmation is far easier to enforce.',
    },
    {
      q: 'What is the difference between a purchase order and a purchase requisition?',
      a: 'A purchase requisition is an internal document raised by a department asking the procurement team to buy something — it is a request, not an authorisation to spend. A purchase order is the external authorisation issued to the supplier once the requisition is approved and the supplier is selected. Only the PO creates a commitment with an outside party; the requisition circulates inside the organisation for budget and approval checks.',
    },
    {
      q: 'Can I amend a purchase order after the supplier has accepted it?',
      a: 'Yes, but only with the supplier\'s agreement. Issue a PO amendment document referencing the original PO number and specifying exactly what has changed — quantity, price, delivery date or specification. Without a formal amendment, the supplier is entitled to supply and invoice per the original PO terms. For significant changes, a fresh PO that cancels and supersedes the original is cleaner than a chain of amendments.',
    },
    {
      q: 'What should a purchase order include to be enforceable?',
      a: 'At minimum: a unique PO number, issue date, your company name and address, the supplier\'s name and address, a detailed description of the goods or services, quantity and unit, agreed price per unit, total value, GST breakdown, delivery address and expected date, payment terms, and any specific terms such as quality standards or inspection rights. Missing the price or delivery terms makes the PO commercially ambiguous and difficult to enforce.',
    },
    {
      q: 'Is a verbal purchase order valid in India?',
      a: 'Legally, a verbal order can be binding, but it is almost impossible to enforce. Without a written record, disputes over price, quantity, specification or delivery date have no documentary resolution. Most businesses that have experienced a verbal-order dispute once move to requiring written POs for all purchases. For any transaction above a few thousand rupees, a written PO is essential.',
    },
    {
      q: 'What is a blanket purchase order and when should I use it?',
      a: 'A blanket PO authorises a supplier to deliver up to a specified total value over a defined period — say, \'5 lakh worth of packaging materials over six months — without requiring a new PO for each delivery. It is useful for consumables and materials you order repeatedly from the same supplier, as it reduces paperwork while preserving the price and terms agreed at the start of the period.',
    },
    {
      q: 'How does a purchase order interact with GST compliance?',
      a: 'The PO number must appear on the supplier\'s tax invoice so your accounts team can perform three-way matching (PO, goods receipt note, invoice) before processing payment. If the PO specifies the GST rate or HSN code, the supplier must honour that on the invoice. A mismatch between the agreed PO price and the invoiced price creates ITC reconciliation issues because input credit is allowed only on invoiced value.',
    },
    {
      q: 'Can I use a purchase order to pay an advance to a supplier?',
      a: 'A PO authorises supply but does not by itself release an advance. To pay an advance, you would issue the PO with advance payment terms (e.g. "30% advance on PO acceptance") and then process the payment against the PO. The supplier should issue a proforma invoice or an advance receipt against which your accounts team books the advance. The GST on the advance, if applicable, must be paid by the supplier when the advance is received.',
    },
    {
      q: 'What happens if the supplier delivers more or less than the PO quantity?',
      a: 'Accept only up to the PO quantity and return the excess, or raise a PO amendment if the additional quantity is needed. For shortfalls, issue a debit note for the undelivered quantity if you have prepaid, or simply withhold that portion of payment. A goods receipt note (GRN) should record the actual quantity received — this is your evidence for both payment and dispute purposes.',
    },
    {
      q: 'Does a purchase order need to be signed?',
      a: 'Not legally, but a signed PO is far more enforceable than an unsigned one. In practice, most corporate buyers send POs via email from an authorised purchasing officer, and the email itself constitutes evidence of issuance. For high-value orders with long-term supply implications, physical or digital signatures — or at least email confirmation from an authorised person — are recommended.',
    },
    {
      q: 'How long should purchase orders be retained?',
      a: 'Retain POs for at least six years from the financial year end — consistent with the GST and income tax record-keeping requirements. For capital asset purchases, retain POs for as long as the asset is on your books plus the six-year audit period. POs for government or PSU contracts should be retained longer, as these are subject to CAG audit at any time.',
    },
    {
      q: 'What is a three-way match in purchase order processing?',
      a: 'Three-way matching is the standard accounts-payable control: the PO (what you authorised), the goods receipt note (what was actually delivered), and the supplier invoice (what you are being asked to pay) are compared. Payment is released only when all three agree on quantity, price and tax. This prevents overpayment, duplicate payment and payment for undelivered goods — it is mandatory for most corporate, government and audited-company payable processes.',
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
  industries: {
    heading: 'Purchase Orders Across Industries — What Each Sector Prioritises',
    intro: 'Every industry raises POs, but the fields that matter most — material specs, delivery windows, warranty terms — differ sharply by sector.',
    items: [
      {
        name: 'Construction & Civil Contracting',
        icon: 'HardHat',
        text: 'Construction POs specify material grade and standard (e.g. "TMT steel Fe500 as per IS:1786"), delivery to site address, and stacking instructions. Materials arriving without a matching PO are refused by the site engineer to prevent unbudgeted spend.',
        detail: 'Include the IS/BIS standard reference for every material in a construction PO — substandard substitutes are a persistent problem in the supply chain, and a specification in the PO gives you legal grounds to reject them.',
      },
      {
        name: 'Manufacturing & Industrial',
        icon: 'Factory',
        text: 'Manufacturers raise POs for raw materials, components and packaging, often with lead time, batch size and quality inspection clauses. High-volume manufacturers run material requirements planning (MRP) that auto-generates POs when stock levels fall below reorder points.',
        detail: 'Specify the inspection acceptance criteria in your manufacturing POs — quantity, dimensions, material test certificate requirements — so the goods receipt process can reject non-conforming batches without a separate dispute process.',
      },
      {
        name: 'IT & Technology Procurement',
        icon: 'Laptop',
        text: 'IT departments issue POs for hardware, software licences and cloud services. Software POs specify the licence type, number of seats, contract duration and the vendor\'s obligation to provide support updates during the licence period.',
        detail: 'Include the software version or SKU number on IT POs — vendors sometimes substitute a similar but different-tier product, and without a specific SKU in the PO you have no contractual basis to insist on the correct version.',
      },
      {
        name: 'Retail & Wholesale Buying',
        icon: 'Store',
        text: 'Retailers issue POs for stock replenishment, seasonal buys and promotional campaigns. The PO specifies SKU, colour, size, pack configuration and the shelf-ready packaging requirement if the product goes direct to the shelf.',
        detail: 'Retail POs must state the compliance requirement for MRP labelling and import markings — products arriving without compliant labels cannot be placed on shelves and the cost of relabelling falls on the vendor unless the PO specifies otherwise.',
      },
      {
        name: 'Medical & Healthcare Procurement',
        icon: 'Stethoscope',
        text: 'Hospital procurement teams raise POs for pharmaceuticals, disposables and equipment through a committee-approved vendor list. Every PO references the hospital\'s approved formulary or equipment register, with batch and expiry requirements for consumables.',
        detail: 'Medical POs for regulated devices and drugs must reference the CDSCO registration number of the product — supplies arriving without a valid registration document will be quarantined and cannot be used until compliance is confirmed.',
      },
      {
        name: 'Automobile & Automotive',
        icon: 'Car',
        text: 'Auto dealerships and service centres raise POs for OEM spare parts with part numbers from the manufacturer\'s catalogue. Fleet companies raise annual or quarterly blanket POs for parts and consumables at negotiated rates.',
        detail: 'Specify OEM part numbers and reject clauses for aftermarket substitutes in automotive POs — workshop liability for damage caused by non-genuine parts is legally separate from the PO dispute, but having the specification in the PO prevents the substitution in the first place.',
      },
      {
        name: 'Interior Design & Furnishing',
        icon: 'Sofa',
        text: 'Interior designers raise POs on behalf of clients for furniture, fittings and imported tiles with brand, model number, finish and lead time from the manufacturer or importer. The PO protects the quoted delivery date for the overall project timeline.',
        detail: 'Add a damage-on-delivery clause to furniture and fixture POs — specify that the vendor bears responsibility for transit damage until the item is installed and accepted, not just until it arrives at the site.',
      },
      {
        name: 'Education & Institutions',
        icon: 'GraduationCap',
        text: 'Schools and universities raise POs for stationery, textbooks, lab equipment and digital subscriptions through a sanctioned budget. Government-aided institutions must follow GeM (Government e-Marketplace) procurement rules for eligible categories.',
        detail: 'Educational institution POs should quote the committee resolution or governing body approval reference that sanctions the purchase — this is required for audit purposes and the payment cannot be processed without it in most institutions.',
      },
      {
        name: 'Hospitality & Food Service',
        icon: 'UtensilsCrossed',
        text: 'Hotels and restaurants raise daily or weekly POs for perishable inventory (produce, dairy, proteins) and monthly POs for packaged F&B and cleaning supplies. The PO specifies delivery slot, temperature requirement for chilled items and the supplier\'s return policy for rejected produce.',
        detail: 'Hospitality perishable POs must specify the quality grade and rejection criteria clearly — a PO that says "Grade A vegetables" without defining what Grade A means gives no legal grounds to reject substandard produce at the receiving dock.',
      },
      {
        name: 'Freelance & Agency Subcontracting',
        icon: 'User',
        text: 'Agencies subcontracting work to freelancers or partner studios issue service POs that specify deliverables, deadline, format and payment terms. The PO protects the agency against scope creep and gives the freelancer clarity on exactly what is commissioned.',
        detail: 'Service POs for freelancers should specify the intellectual property ownership clause — without it, the freelancer retains rights to their work by default under the Copyright Act and the agency cannot use it commercially.',
      },
    ],
  },

  references: {
    heading: 'Procurement and Contract Law References',
    intro: 'Purchase orders sit at the heart of procurement governance — these primary sources define the rules.',
    items: [
      { label: 'Indian Contract Act, 1872 — Offer, Acceptance and Consideration', url: 'https://legislative.gov.in', note: 'Governs when a PO becomes a binding contract and what constitutes valid acceptance by the supplier — foundational for understanding PO enforceability.' },
      { label: 'CGST Act — Input Tax Credit on Purchases', url: 'https://cbic-gst.gov.in', note: 'Section 16 of the CGST Act conditions ITC claims on matching the PO, goods receipt and supplier invoice — the legal basis for three-way matching in accounts payable.' },
      { label: 'MSMED Act, 2006 — Payment Terms for MSME Suppliers', url: 'https://msme.gov.in', note: 'Limits the maximum credit period buyers can impose on MSME suppliers and imposes compound interest on payments held beyond 45 days after acceptance.' },
      { label: 'GeM Portal — Government Procurement Policy', url: 'https://gem.gov.in', note: 'Government e-Marketplace rules for procurement by central government entities; relevant for businesses supplying to public sector buyers who raise GeM POs.' },
      { label: 'Companies Act, 2013 — Internal Controls over Procurement', url: 'https://mca.gov.in', note: 'Section 134 and ICFR guidelines require listed companies to maintain adequate internal controls over financial reporting, including PO-based procurement authorisation.' },
    ],
  },
};
