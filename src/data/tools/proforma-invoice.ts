import type { ToolContent } from './types';

export const proformaInvoiceContent: ToolContent = {
  id: 'proforma-invoice',
  seo: {
    title: 'Free Proforma Invoice Maker — Create Proforma Invoice PDF Online',
    description:
      'Generate a professional proforma invoice online for free — perfect for advance payments, export orders and buyer approvals. Add payment and delivery terms, set a validity date, and download a print-ready PDF. No signup.',
    published: '2026-02-18',
    updated: '2026-08-07',
    keywords: [
      'proforma invoice maker',
      'proforma invoice generator free',
      'proforma invoice format India',
      'create proforma invoice online',
      'proforma invoice pdf download',
      'proforma invoice for export',
      'proforma invoice for advance payment',
      'proforma vs tax invoice',
      'proforma invoice template',
      'proforma invoice',
      'proforma invoice format',
      'proforma invoice generator',
      'proforma invoice format pdf download',
      'proforma invoice for advance payment',
      'proforma invoice format for export India',
      'difference between proforma invoice and invoice',
      'how to make proforma invoice online free',
      'pi format for export',
      'proforma invoice template word',
      'proforma invoice with gst',
    ],
  },
  h1: 'Free Proforma Invoice Maker',
  intro:
    'Issue a proforma invoice in minutes — set your payment terms, delivery terms and validity period, preview it live, and export a clean PDF for advance collection, buyer approval or customs paperwork. Free, no account, data stays in your browser.',
  badge: {
    label: 'Pre-Sale Document',
    colorClass: 'bg-violet-100 text-violet-800 dark:bg-violet-950 dark:text-violet-300 border border-violet-300 dark:border-violet-700',
  },
  theme: 'violet',
  layout: {
    hero: 'stamped',
    howTo: 'timeline',
    features: 'grid',
    useCases: 'columns',
    example: 'paper',
    whatIs: 'callout',
    headingStyle: 'pill',
    headingMarker: 'PI',
  },
  order: [
    'whatIs',
    'custom',
    'howTo',
    'proTips',
    'widget',
    'features',
    'example',
    'useCases',
    'industries',
    'mistakes',
    'sections',
    'faq',
    'references',
    'blogs',
    'related',
  ],
  orientationPoints: [
    'Releases advance payments and approvals',
    'Carries delivery, validity and payment terms',
    'Accepted for letters of credit and customs',
    'Converts to a tax invoice without retyping',
  ],
  widget: 'proforma-vs-invoice',
  relatedBlogSlugs: [
    'invoice-vs-quotation',
    'payment-terms-in-quotations',
    'gst-invoice-rules-guide',
  ],
  customBlocks: [
    {
      kind: 'table',
      heading: 'What a Proforma Must Carry, Depending on Why It Is Being Issued',
      intro:
        'A proforma invoice is asked for in three quite different situations, and each one expects different particulars. Sending a domestic-style proforma to a bank opening a letter of credit is the most common reason one gets rejected.',
      columns: ['Purpose', 'Particulars that must appear', 'Who checks it'],
      rows: [
        [
          'Releasing an advance payment',
          'Full supplier and buyer details, itemised supply with rates, tax shown separately, the advance amount and percentage, bank account or UPI details, and a validity date.',
          'The buyer\'s accounts or finance team.',
        ],
        [
          'Getting internal approval or a PO raised',
          'A clear description matching the buyer\'s requisition, unit rates, delivery timeline, payment terms, and your quotation reference if one exists.',
          'The buyer\'s procurement or approving manager.',
        ],
        [
          'Opening a letter of credit',
          'Exporter and importer details with IEC, country of origin and final destination, Incoterm with named place, port of loading and discharge, currency, gross and net weight, packing details, and HS codes.',
          'The issuing and advising banks — they match it against the LC terms word for word.',
        ],
        [
          'Customs and import clearance',
          'HS classification per line, unit and total value in the invoice currency, country of origin, freight and insurance shown separately, and a declaration that the goods are as described.',
          'Customs authorities at the destination port.',
        ],
        [
          'Advance authorisation or import licence',
          'Technical specifications, quantity in the licensed unit of measure, and the value expressed in the same currency as the licence.',
          'The licensing authority.',
        ],
      ],
      note:
        'For export use, always mark the document clearly as "Proforma Invoice" in the title. Banks and customs treat an unlabelled document that looks like a commercial invoice as one, and a mismatch against the eventual commercial invoice causes discrepancies under the letter of credit.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      heading: 'Four Things a Proforma Invoice Cannot Do',
      paragraphs: [
        'It cannot support an input tax credit claim. A proforma is not a tax invoice under Rule 46, so your buyer cannot use it to claim ITC no matter how complete it looks. If a registered buyer needs credit, they need the tax invoice issued at the time of supply — the proforma only gets the process moving.',
        'It does not create a GST liability for you. Because no supply has taken place, issuing a proforma does not put tax on your books and it is not reported in GSTR-1. That is precisely why it is safe to send one before you are ready to commit. Note the separate point that receiving an advance for services may create a liability of its own, which the proforma does not itself trigger.',
        'It is not a demand for payment you can enforce. A proforma is an intention to supply, not a debt. Accounts teams will pay against one as a matter of practice when releasing an advance, but if a customer simply ignores it you have no claim — there is nothing to recover until you have supplied and invoiced.',
        'It should not be booked as revenue. Neither side records a proforma in their sales or purchase ledgers. Booking it inflates your turnover against filings that will not match, and creates a reconciliation problem at year end that is tedious to unwind.',
      ],
    },
  ],
  whatIs: {
    heading: 'What Is a Proforma Invoice?',
    paragraphs: [
      'A proforma invoice is a preliminary bill a seller sends before goods are shipped or services are performed. It looks almost exactly like the final invoice — same line items, quantities, rates and taxes — but its legal character is different: it is a commitment on price and scope, not a demand for payment. Think of it as a preview of the bill the buyer will eventually receive, issued so that both sides can lock the deal before anything moves.',
      'In India this distinction matters for tax. A proforma invoice is not a valid GST document — the buyer cannot claim input tax credit against it, and it does not appear in your GSTR filings. Only the tax invoice you raise at the time of supply carries that weight. That is exactly why proformas are useful: you can share full commercial details, collect an advance, and still keep your GST books untouched until the actual supply happens.',
      'A well-drafted proforma carries a unique proforma number (our tool uses the PI- series), the date of issue, a "valid until" date after which the quoted prices lapse, seller and buyer details, itemised charges with taxes shown for transparency, payment terms (such as 100% advance), delivery terms (such as Ex-works or FOB), and a reference to the buyer\'s enquiry or order number. This builder gives every one of those fields its own place on the form.',
    ],
  },
  howTo: {
    heading: 'How to Create a Proforma Invoice in 4 Steps',
    steps: [
      {
        title: 'Fill in seller and buyer details',
        text: 'Enter your business name, address, contact details and GSTIN under Seller, upload your logo, and add the prospective buyer\'s details. For export orders, include the overseas buyer\'s full address as it should appear on customs documents.',
      },
      {
        title: 'Itemise the goods or services',
        text: 'Add each product with its description, HSN/SAC code, quantity, unit and rate. Taxes and totals calculate automatically in the live preview, and INR totals show the amount in words in Indian lakh/crore style.',
      },
      {
        title: 'Set commercial terms and validity',
        text: 'In the Proforma Details section, add your enquiry/reference number, payment terms (for example "50% advance, balance before dispatch") and delivery terms ("FOB Mundra" or "2 weeks from advance"). Pick a "Valid Until" date so prices don\'t stay open forever.',
      },
      {
        title: 'Export and send for confirmation',
        text: 'Pick one of 25 templates, add your signature and stamp, then download the proforma as a PDF or PNG, or send it over WhatsApp. Once the buyer pays or confirms, convert it into a tax invoice in a couple of clicks.',
      },
    ],
  },
  features: {
    heading: 'Why Use This Proforma Invoice Generator?',
    items: [
      {
        title: 'Dedicated payment and delivery terms fields',
        text: 'Instead of burying commercial terms in a notes box, the builder has structured fields for payment terms, delivery terms and a reference/enquiry number — the three things every buyer checks first.',
      },
      {
        title: 'Validity date printed prominently',
        text: 'Set a "Valid Until" date and it appears in the document header. Buyers know exactly how long the quoted price holds, and you have cover when raw-material costs move.',
      },
      {
        title: 'Tax shown, but clearly not a tax invoice',
        text: 'GST, IGST or flat tax can be computed and displayed so the buyer sees the true landed cost, while the document is titled PROFORMA INVOICE and the default note states it is not a demand for payment or a tax invoice.',
      },
      {
        title: 'Export-friendly formatting',
        text: 'Clean A4 templates, logo and signature placement, and a details block that fits Incoterms-style delivery terms make the PDF suitable for banks, customs brokers and letter-of-credit documentation.',
      },
      {
        title: 'Autosave with nothing uploaded',
        text: 'Your draft saves automatically to your browser\'s localStorage as you type. Close the tab mid-negotiation and pick up where you left off — no account, no server, no data leaving your device.',
      },
      {
        title: 'One-click sharing and QR codes',
        text: 'Share a read-only copy over WhatsApp, print a UPI QR code so domestic buyers can pay the advance instantly, and download unlimited PDFs or PNGs without watermarks.',
      },
    ],
  },
  useCases: {
    heading: 'When Should You Send a Proforma Invoice?',
    intro:
      'A proforma sits between "deal agreed" and "goods delivered". These are the four situations where Indian businesses reach for one:',
    items: [
      {
        title: 'Collecting an advance before production',
        text: 'Manufacturers and custom-order businesses issue a proforma stating "100% advance" or "50% advance to confirm", so the buyer has an official document to pay against before a single unit is made.',
      },
      {
        title: 'Import and export customs clearance',
        text: 'Exporters send proformas so overseas buyers can arrange foreign exchange, open a letter of credit and obtain import licences. Customs authorities on the buyer\'s side often ask for the proforma to assess duties before shipment.',
      },
      {
        title: 'Buyer-side approval workflows',
        text: 'Corporate and government buyers frequently cannot process a quotation internally but can route a proforma invoice through purchase approval. Sending one gets your deal into their system without booking revenue on yours.',
      },
      {
        title: 'Letter-of-credit and bank documentation',
        text: 'Banks issuing an LC need a document that fixes the value, terms and description of goods. A proforma with clear delivery terms and validity is the standard instrument they accept.',
      },
    ],
  },
  example: {
    heading: 'Proforma Example: Handicraft Export with 100% Advance',
    intro:
      'A Jaipur-based handicrafts exporter receives an order enquiry from a boutique in Dubai. Before production begins, the exporter issues proforma PI-2026-0018 requiring full advance payment:',
    rows: [
      { label: 'Hand-carved wooden elephant figurines (200 pcs @ ₹850)', value: '₹1,70,000.00' },
      { label: 'Block-printed cotton cushion covers (150 pcs @ ₹320)', value: '₹48,000.00' },
      { label: 'Export packing & fumigation charges', value: '₹12,000.00' },
      { label: 'IGST @ 12% (zero-rated under LUT — shown as ₹0)', value: '₹0.00' },
      { label: 'Total (payment terms: 100% advance by wire transfer)', value: '₹2,30,000.00' },
    ],
    outro:
      'The proforma carries delivery terms "FOB Mundra, dispatch within 21 days of advance receipt", a validity of 30 days, and the buyer\'s enquiry number ENQ-2026-104 as reference. The Dubai buyer uses it to remit the advance and start import formalities; once the money lands, the exporter converts it into a formal export invoice for shipping.',
  },
  sections: [
    {
      heading: 'Proforma Invoice vs Invoice vs Quotation',
      paragraphs: [
        'All three documents describe the same goods and prices, but at different stages of commitment. A quotation opens the conversation — it is an offer the buyer is free to negotiate or ignore. A proforma invoice comes after the buyer says yes in principle: it fixes the exact items, price, taxes, payment terms and delivery terms so payment or approvals can proceed. The tax invoice arrives last, at the time of actual supply, and is the only one of the three that creates a receivable in your books and a GST liability.',
        'A useful mental model: the quotation persuades, the proforma commits, the invoice collects. Skipping the proforma stage and raising a tax invoice before you have the advance is risky — if the buyer backs out, you are left issuing a credit note and unwinding GST entries. Sending a proforma keeps the commercial commitment on paper without touching your tax filings.',
        'Directionally there is one more difference worth noting: quotations often get revised several times, while a proforma should normally be issued once and honoured for its validity period. If terms change materially after a proforma is out, issue a fresh one with a new number rather than editing the old copy the buyer already holds.',
      ],
    },
    {
      heading: 'Converting a Proforma into a Tax Invoice',
      paragraphs: [
        'The moment the advance arrives or the buyer confirms, the proforma has done its job and the real invoice takes over. Because this tool shares one editor across document types, conversion is painless: open your saved proforma, switch the document type to Invoice or GST Invoice, and the parties, line items and totals carry across. Assign a fresh number from your invoice series (never reuse the PI number), set the invoice date to the date of supply, and add place of supply and HSN details if it is a GST invoice.',
        'Two housekeeping rules keep auditors happy. First, cross-reference: mention the proforma number on the tax invoice (a line like "Against Proforma PI-2026-0018 dated 12 June 2026" in the notes) so the advance received earlier reconciles cleanly. Second, remember that under GST, receiving an advance for goods generally does not trigger tax, but an advance for services does — so service providers should account for GST on the advance itself and adjust it in the final invoice.',
      ],
    },
    {
      heading: 'Setting Payment Terms, Delivery Terms and Validity the Right Way',
      paragraphs: [
        'Payment terms on a proforma should be unambiguous and dated: "100% advance within 7 days of this proforma" beats "advance required". If you split payments, state the trigger for each tranche — "50% to confirm order, 50% against dispatch documents". For international buyers, name the currency, the payment channel (wire transfer, LC at sight) and who bears bank charges.',
        'Delivery terms answer where responsibility transfers and when goods move. Domestic sellers typically write "Ex-works, dispatch within 2 weeks of advance"; exporters use Incoterms such as FOB, CIF or EXW with the named port. Always anchor the timeline to the advance ("21 days from receipt of payment"), not to the proforma date — otherwise a slow-paying buyer eats your production window.',
        'Finally, keep the validity period short and honest. Thirty days is standard; commodity-linked products often justify 7–15 days. A firm validity date protects you from price movements and gives the buyer a polite deadline — many deals close in the last week of a proforma\'s validity precisely because the clock is visible.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Is a proforma invoice legally binding in India?',
      a: 'Not as a payment obligation. A proforma is a formal statement of the terms on which you are willing to sell, but it does not create a debt the way a tax invoice does. Once the buyer acts on it — pays the advance or issues a purchase order against it — the underlying contract terms it records become enforceable.',
    },
    {
      q: 'Can a buyer claim GST input tax credit on a proforma invoice?',
      a: 'No. ITC can only be claimed against a valid tax invoice (or debit note) issued under GST rules and reflected in GSTR-2B. A proforma is a pre-supply commercial document and never enters GST returns, which is precisely why it is safe to issue before delivery.',
    },
    {
      q: 'Should I show GST on a proforma invoice?',
      a: 'Yes, it is good practice. Displaying the applicable CGST/SGST or IGST tells the buyer the exact amount they will ultimately pay and prevents disputes when the tax invoice arrives. The document remains a proforma regardless — the tax shown is indicative, not charged.',
    },
    {
      q: 'What number series should a proforma invoice use?',
      a: 'Keep a separate sequential series from your tax invoices — this tool defaults to PI (for example PI-2026-0001). Mixing proformas into your invoice series creates gaps in your GST invoice sequence and confuses reconciliation.',
    },
    {
      q: 'How long should a proforma invoice remain valid?',
      a: '30 days is the common default in India; use 7–15 days if your input costs are volatile. Set the "Valid Until" date in the builder and it prints in the header. After expiry, issue a fresh proforma with updated prices rather than extending the old one informally.',
    },
    {
      q: 'Can I use this tool for export proforma invoices?',
      a: 'Yes. Add the overseas buyer\'s full address, put Incoterms in the delivery terms field ("FOB Nhava Sheva", "CIF Jebel Ali"), state the currency and wire-transfer terms in payment terms, and download the PDF for your buyer, bank or customs broker. For LUT exports you can set the tax mode to show zero-rated IGST.',
    },
    {
      q: 'How do I convert my proforma into a tax invoice later?',
      a: 'Open the saved document, switch the type to Invoice or GST Invoice, give it a new number from your invoice series, set the supply date, and add GST-specific fields like place of supply. Mention the original proforma number in the notes so the advance reconciles.',
    },
    {
      q: 'Is this proforma invoice maker really free, and where is my data stored?',
      a: 'Completely free — unlimited proformas, all 25 templates, PDF and PNG downloads, no watermark and no signup. Everything you type autosaves to your own browser\'s localStorage; nothing is uploaded unless you deliberately use the share link feature.',
    },
    {
      q: 'What is the main purpose of a proforma invoice?',
      a: 'A proforma invoice serves two distinct purposes in business. First, it acts as a formal quotation in invoice format — giving the buyer a precise breakdown of costs, taxes and terms before they commit. Second, it is used to collect advance payments: many businesses will not release funds on the basis of a loose quotation, but will process a payment against a proforma invoice because it resembles a real invoice that their accounts team can process.',
    },
    {
      q: 'Is a proforma invoice a tax invoice for GST purposes?',
      a: 'No. A proforma invoice is not a valid GST document. It does not create a tax liability, it does not entitle the recipient to claim input tax credit, and it cannot be used as a supporting document for GST compliance. It is only a preliminary commercial document. The actual GST tax invoice must be issued after delivery or completion of service, at which point the tax liability and ITC entitlement are both triggered.',
    },
    {
      q: 'Can I use a proforma invoice for customs clearance?',
      a: 'Yes, for imports into India. Customs authorities and banks accept proforma invoices as supporting documents when the commercial invoice is not yet available — for example, when clearing a shipment before the supplier has finalised billing, or to apply for an import licence. The proforma must clearly state the goods description, quantity, unit value, HS code and country of origin. For exports from India, the commercial invoice or shipping bill takes precedence, but a proforma may be required during pre-shipment approval.',
    },
    {
      q: 'What is the difference between a proforma invoice and a purchase order?',
      a: 'A proforma invoice is issued by the seller; a purchase order is issued by the buyer. The proforma tells the buyer what they will be charged and on what terms. The purchase order tells the seller what the buyer wants and authorises them to supply it. In an import transaction they often accompany each other: the buyer issues a PO specifying the requirement, and the seller responds with a proforma invoice confirming price, terms and delivery.',
    },
    {
      q: 'How long is a proforma invoice typically valid?',
      a: 'You set the validity period — 15 to 30 days is common for domestic supplies, and 30 to 60 days for import transactions. For international trade, the validity must account for shipping and documentation lead times. Beyond the validity date the prices and terms are no longer binding, and you would issue a revised proforma if the buyer wants to proceed. Always print the validity date clearly — some buyers treat the proforma as valid indefinitely if no expiry is stated.',
    },
    {
      q: 'Can I receive advance payment against a proforma invoice?',
      a: 'Yes, and that is one of its primary functions in Indian business practice. Banks accept proforma invoices for processing advance payments, and many corporate accounts teams will release partial or full advance against a proforma. The advance must be accounted for on the actual GST tax invoice issued after supply — show the advance received as a deduction against the invoice value, and calculate GST on the balance if the full GST was not collected on the advance.',
    },
    {
      q: 'What is a proforma invoice used for in import-export trade?',
      a: 'In import-export, a proforma invoice is the primary document on which the buyer bases their import licence application, foreign exchange remittance approval, and letter of credit. Banks require it to release foreign exchange under FEMA regulations. The proforma must show the commodity, HS code, country of origin, unit price in the agreed currency, payment terms (e.g. 30 % advance, 70 % against BL), and Incoterms such as FOB or CIF.',
    },
    {
      q: 'Does receiving a proforma invoice create a legal obligation to pay?',
      a: 'On its own, no. A proforma invoice is an offer — it becomes binding on the buyer only when they confirm acceptance, typically by issuing a purchase order or releasing an advance payment. Until acceptance, either party can revise or withdraw. However, if the buyer has made a partial advance payment against a proforma, they have accepted its terms and the seller is contractually committed to supply on those terms.',
    },
    {
      q: 'Should a proforma invoice include GST?',
      a: 'Show estimated GST on the proforma so the buyer knows the tax-inclusive cost before committing. Mark it clearly as "Estimated Tax" or "Indicative GST" since the final tax figures may change — for example, if the quantity or product mix changes between proforma and delivery. When you issue the final tax invoice, the GST figures there are the operative ones, not the proforma.',
    },
    {
      q: 'Can a proforma invoice be used to open a letter of credit?',
      a: 'Yes. A letter of credit (LC) is typically opened by the buyer\'s bank on the basis of the proforma invoice. The proforma provides the bank with the commercial terms — description of goods, HS code, value, currency, payment terms and shipment conditions — that the LC must reflect. After shipment, the commercial invoice and shipping documents replace the proforma as the operative payment documents.',
    },
    {
      q: 'Can I modify a proforma invoice after sending it?',
      a: 'Yes. Issue a revised proforma with the same reference number plus a revision suffix (e.g. PI-2026-001-R1) and clearly mark it "Revised" with the date of revision. List what changed and why. If the buyer has already accepted the original and is mid-process on a bank payment or LC, notify them immediately because any discrepancy between the proforma and the transaction documents can cause bank delays.',
    },
    {
      q: 'Is a proforma invoice required for every sale?',
      a: 'No. It is most useful for large or complex transactions where the buyer needs formal documentation before committing, for advance collection, and for international trade. For routine repeat sales to established customers, most businesses skip the proforma and go straight to the tax invoice. The proforma earns its place when there is a meaningful gap between quoting and delivering.',
    },
  ],
  relatedHeading: 'The Documents a Proforma Sits Between',
  relatedNote:
    'A proforma bridges the quotation and the tax invoice — here is what comes on either side of it.',
  related: ['invoice', 'quotation', 'gst-invoice', 'purchase-order', 'payment-receipt', 'estimate'],

  proTips: {
    heading: 'How to Use Proforma Invoices Strategically in Your Sales Process',
    items: [
      {
        icon: '🏦',
        title: 'Trigger advance payment with a proforma, not a quotation',
        text: 'Many buyers — especially in import-export — require a proforma invoice to process an advance payment internally. A quotation does not carry enough documentary weight to release funds from a corporate accounts team or initiate a bank transfer. Send the proforma as soon as the order is verbally confirmed and before work starts.',
      },
      {
        icon: '📦',
        title: 'For export orders, use the proforma as a shipping instruction document',
        text: 'Export proformas should include the HS code, country of origin, Incoterms (CIF, FOB, EXW), estimated shipping weight and volume, and the consignee\'s address exactly as it must appear on the Bill of Lading. The freight forwarder will use this to book space and prepare shipping documents — errors here cascade into customs delays.',
      },
      {
        icon: '⏰',
        title: 'Match validity tightly to your stock or supplier lead time',
        text: 'A proforma that stays valid for 30 days when you are quoting a raw material that moves daily exposes you to significant price risk. Match the validity period to how long you can actually hold the quoted price — which is often 7 days for commodity-linked goods and 15–30 days for manufactured items.',
      },
      {
        icon: '✅',
        title: 'Get written acceptance from the buyer before issuing a tax invoice',
        text: 'A proforma is not a contract by itself. Get the buyer to respond in writing (email is sufficient) with a clear acceptance of the proforma number, date and amount. That acceptance is your authorisation to proceed. It also locks in the version of the proforma they agreed to, preventing later claims about a different price or specification.',
      },
      {
        icon: '🔄',
        title: 'Never modify a proforma that has been paid against',
        text: 'Once a customer has transferred funds referencing a specific proforma number, that document is locked. If the scope changes, issue a fresh proforma with a new number and letter the change clearly. Modifying the original proforma after payment creates a documentation mismatch that will complicate your accounts and potentially your GST records.',
      },
      {
        icon: '🔖',
        title: 'Add the estimated delivery or completion date to every proforma',
        text: 'A proforma that commits a buyer to advance payment but gives no delivery commitment is a one-sided document. State a realistic estimated completion or shipping date — even if approximate — and a brief note on what triggers the final invoice. This sets expectations and reduces the most common post-payment dispute.',
      },
    ],
  },

  mistakes: {
    heading: 'Proforma Invoice Mistakes That Create Export, Payment and GST Problems',
    intro:
      'These errors are particularly common in SME export businesses and project-based service companies. Some create immediate payment problems; others surface during GST filing or customer audits.',
    items: [
      {
        mistake: 'Using the proforma as a tax invoice',
        impact: 'Buyer incorrectly claims input tax credit on a document that is not a valid tax invoice.',
        fix: 'Print “This is not a tax invoice” prominently — issue a proper GST invoice after supply.',
      },
      {
        mistake: 'No proforma number or date',
        impact: 'Buyer cannot reference the document in their PO or payment narration.',
        fix: 'Use a sequential series — PI-2026-001 — and print the date of issue clearly.',
      },
      {
        mistake: 'Rates not matching the final invoice',
        impact: 'Buyer disputes the final invoice claiming a different rate was agreed.',
        fix: 'Lock rates in the proforma and reference the proforma number on the final invoice.',
      },
      {
        mistake: 'No validity period',
        impact: 'Buyer presents a months-old proforma expecting current pricing.',
        fix: 'Add “Valid until [specific date]” and honour that date strictly.',
      },
      {
        mistake: 'Missing Incoterms on export proforma',
        impact: 'Freight terms are ambiguous; buyer and freight forwarder assume different responsibilities.',
        fix: 'State the Incoterm (FOB Mumbai, CIF Dubai) and the port of origin explicitly.',
      },
      {
        mistake: 'No advance payment instructions',
        impact: 'Buyer cannot initiate payment without a separate email asking for bank details.',
        fix: 'Include bank account + SWIFT/IFSC and your UPI handle on the proforma itself.',
      },
    ],
  },
  industries: {
    heading: 'How Proforma Invoices Are Used Across Industries',
    intro: 'The proforma invoice is the pre-supply commitment document — each industry uses it to solve a specific problem between order placement and delivery.',
    items: [
      {
        name: 'Manufacturing & Export',
        icon: 'Factory',
        text: 'Manufacturers issue proforma invoices for international buyers before production begins, confirming HS codes, unit prices in foreign currency, Incoterms and shipment timelines. The buyer uses this to open an LC or remit foreign exchange through their bank.',
        detail: 'For exports, the proforma must show the FOB or CIF value separately from freight and insurance — customs valuation for duty drawback and IGST refund is based on the FOB value, and combining it with freight creates clearance complications.',
      },
      {
        name: 'IT Services & Software',
        icon: 'Laptop',
        text: 'IT companies issue proforma invoices before project kickoff to collect the initial advance payment. The proforma lists the project scope, milestone schedule, payment tranche percentages and GST estimate so the client\'s procurement and finance teams can process the first payment without waiting for project completion.',
        detail: 'Match every proforma line item to the SOW reference number — corporate IT buyers run three-way matching between the proforma, PO and SOW, and any mismatch sends the payment back for clarification.',
      },
      {
        name: 'Construction & Infrastructure',
        icon: 'HardHat',
        text: 'Contractors use proforma invoices to collect advance mobilisation payments before deploying equipment and labour to site. The proforma details the scope of the first phase, the advance percentage, and the conditions under which it will be adjusted against the running account bills.',
        detail: 'Include a clear advance recovery schedule in your proforma — state that the advance will be deducted at X% from each subsequent RA bill so that both parties understand when the advance will be fully recovered.',
      },
      {
        name: 'Automobile Dealers',
        icon: 'Car',
        text: 'Vehicle dealers issue proforma invoices to customers who want to arrange finance or insurance before taking delivery. The proforma shows the ex-showroom price, road tax, insurance, registration charges and accessories so the buyer can arrange the full amount in advance.',
        detail: 'Proforma vehicle invoices must match the actual booking price exactly — banks financing vehicle purchases verify the proforma against the final tax invoice, and any discrepancy delays the disbursement.',
      },
      {
        name: 'Retail & Import Traders',
        icon: 'Store',
        text: 'Importers and wholesale traders use proforma invoices from overseas suppliers to open LCs, apply for import licences and process advance foreign exchange remittances. Domestically, retailers use them to collect advance on custom orders or seasonal pre-bookings.',
        detail: 'Keep proforma validity aligned with your supplier\'s price hold period — if the overseas supplier quotes valid for 30 days, your proforma to the domestic buyer should not exceed 25 days to leave room for the payment processing cycle.',
      },
      {
        name: 'Medical Equipment & Pharma',
        icon: 'Stethoscope',
        text: 'Medical equipment suppliers issue proforma invoices for hospital procurement committees to approve before placing a formal PO. Pharmaceutical importers use proformas to apply for import permits and NOCs from the CDSCO before the consignment ships.',
        detail: 'Medical device proformas must reference the CDSCO registration number of the device — hospitals and regulatory authorities verify this before approving the procurement, and missing it delays the process by weeks.',
      },
      {
        name: 'Interior Design & Materials',
        icon: 'Sofa',
        text: 'Interior design studios issue proformas to collect advance against material procurement — furniture, fittings and imported tiles — before placing orders with suppliers. The proforma locks the client into the material budget before prices change.',
        detail: 'Break the proforma into a materials advance and a professional fee advance as separate line items — clients and their banks process these under different heads, and a single combined line complicates tracing and reconciliation.',
      },
      {
        name: 'Hospitality & Events',
        icon: 'UtensilsCrossed',
        text: 'Caterers, event venues and hotel banquet teams issue proforma invoices to collect 50% advance for bookings. The proforma details the service package, guest count, menu, set-up requirements and cancellation policy.',
        detail: 'Include the cancellation and refund policy text directly on the proforma invoice — once the client pays the advance, any cancellation dispute will be adjudicated against the terms they received before paying.',
      },
      {
        name: 'Education & Ed-Tech',
        icon: 'GraduationCap',
        text: 'Colleges and training institutes issue proforma invoices for admission fees and course deposits so students and parents can arrange bank drafts, NEFT transfers or educational loans before the admission deadline. Corporate training providers use proformas to get client sign-off before scheduling instructors.',
        detail: 'Show the course start date and last date for fee submission on the education proforma — clarity on deadlines prevents last-minute payment scrambles that delay batch confirmations and timetable setting.',
      },
      {
        name: 'Freelancing & Agencies',
        icon: 'User',
        text: 'Freelancers and boutique agencies issue proformas to collect the project advance before committing time and resources. The proforma specifies the deliverables, timeline, advance percentage and the conditions for releasing the balance payment.',
        detail: 'Clearly state the deliverables covered by the advance on your proforma — a vague "advance against project" gives clients scope to demand unlimited pre-delivery work before releasing the remaining payment.',
      },
    ],
  },

  references: {
    heading: 'Regulatory Framework for Proforma Invoices in India',
    intro: 'Proforma invoices touch import-export regulation, foreign exchange rules and GST compliance — these are the primary sources.',
    items: [
      { label: 'FEMA, 1999 — Foreign Exchange Remittance Rules', url: 'https://rbi.org.in', note: 'RBI regulations governing advance remittance for imports; proforma invoices are the required supporting document when remitting payment before goods ship.' },
      { label: 'DGFT — Export-Import Policy and Procedures', url: 'https://dgft.gov.in', note: 'Directorate General of Foreign Trade: IEC registration requirements, export and import licencing procedures that rely on proforma invoices as primary documents.' },
      { label: 'Customs Act, 1962 — Valuation of Imported Goods', url: 'https://cbic.gov.in', note: 'Governs how customs value is determined at the time of clearance; proforma values declared must align with the final commercial invoice or a post-importation audit may be triggered.' },
      { label: 'CGST Act — Section 31: Time of Advance and Tax Liability', url: 'https://cbic-gst.gov.in', note: 'Specifies that GST becomes payable on an advance payment even before supply; the proforma issued to collect an advance must be carefully worded to not be treated as a tax invoice.' },
      { label: 'MSMED Act — Advance Payment Protections', url: 'https://msme.gov.in', note: 'Advance payment received by an MSME against a proforma invoice triggers payment protection timelines; the buyer cannot unilaterally demand return of the advance after acceptance of terms.' },
    ],
  },
};
