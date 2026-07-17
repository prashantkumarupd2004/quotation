import type { ToolContent } from './types';

export const proformaInvoiceContent: ToolContent = {
  id: 'proforma-invoice',
  seo: {
    title: 'Free Proforma Invoice Maker — Create Proforma Invoice PDF Online',
    description:
      'Generate a professional proforma invoice online for free — perfect for advance payments, export orders and buyer approvals. Add payment and delivery terms, set a validity date, and download a print-ready PDF. No signup.',
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
  whatIs: {
    heading: 'What Is a Proforma Invoice?',
    paragraphs: [
      'A proforma invoice is a preliminary bill a seller sends before goods are shipped or services are performed. It looks almost exactly like the final invoice — same line items, quantities, rates and taxes — but its legal character is different: it is a commitment on price and scope, not a demand for payment. Think of it as a preview of the bill the buyer will eventually receive, issued so that both sides can lock the deal before anything moves.',
      'In India this distinction matters for tax. A proforma invoice is not a valid GST document — the buyer cannot claim input tax credit against it, and it does not appear in your GSTR filings. Only the tax invoice you raise at the time of supply carries that weight. That is exactly why proformas are useful: you can share full commercial details, collect an advance, and still keep your GST books untouched until the actual supply happens.',
      'A well-drafted proforma carries a unique proforma number (our tool uses the PI- series), the date of issue, a "valid until" date after which the quoted prices lapse, seller and buyer details, itemised charges with taxes shown for transparency, payment terms (such as 100% advance), delivery terms (such as Ex-works or FOB), and a reference to the buyer’s enquiry or order number. This builder gives every one of those fields its own place on the form.',
    ],
  },
  howTo: {
    heading: 'How to Create a Proforma Invoice in 4 Steps',
    steps: [
      {
        title: 'Fill in seller and buyer details',
        text: 'Enter your business name, address, contact details and GSTIN under Seller, upload your logo, and add the prospective buyer’s details. For export orders, include the overseas buyer’s full address as it should appear on customs documents.',
      },
      {
        title: 'Itemise the goods or services',
        text: 'Add each product with its description, HSN/SAC code, quantity, unit and rate. Taxes and totals calculate automatically in the live preview, and INR totals show the amount in words in Indian lakh/crore style.',
      },
      {
        title: 'Set commercial terms and validity',
        text: 'In the Proforma Details section, add your enquiry/reference number, payment terms (for example "50% advance, balance before dispatch") and delivery terms ("FOB Mundra" or "2 weeks from advance"). Pick a "Valid Until" date so prices don’t stay open forever.',
      },
      {
        title: 'Export and send for confirmation',
        text: 'Pick one of 25+ templates, add your signature and stamp, then download the proforma as a PDF or PNG, or send it over WhatsApp. Once the buyer pays or confirms, convert it into a tax invoice in a couple of clicks.',
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
        text: 'Your draft saves automatically to your browser’s localStorage as you type. Close the tab mid-negotiation and pick up where you left off — no account, no server, no data leaving your device.',
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
        text: 'Exporters send proformas so overseas buyers can arrange foreign exchange, open a letter of credit and obtain import licences. Customs authorities on the buyer’s side often ask for the proforma to assess duties before shipment.',
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
      'The proforma carries delivery terms "FOB Mundra, dispatch within 21 days of advance receipt", a validity of 30 days, and the buyer’s enquiry number ENQ-2026-104 as reference. The Dubai buyer uses it to remit the advance and start import formalities; once the money lands, the exporter converts it into a formal export invoice for shipping.',
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
        'Finally, keep the validity period short and honest. Thirty days is standard; commodity-linked products often justify 7–15 days. A firm validity date protects you from price movements and gives the buyer a polite deadline — many deals close in the last week of a proforma’s validity precisely because the clock is visible.',
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
      a: 'Yes. Add the overseas buyer’s full address, put Incoterms in the delivery terms field ("FOB Nhava Sheva", "CIF Jebel Ali"), state the currency and wire-transfer terms in payment terms, and download the PDF for your buyer, bank or customs broker. For LUT exports you can set the tax mode to show zero-rated IGST.',
    },
    {
      q: 'How do I convert my proforma into a tax invoice later?',
      a: 'Open the saved document, switch the type to Invoice or GST Invoice, give it a new number from your invoice series, set the supply date, and add GST-specific fields like place of supply. Mention the original proforma number in the notes so the advance reconciles.',
    },
    {
      q: 'Is this proforma invoice maker really free, and where is my data stored?',
      a: 'Completely free — unlimited proformas, all 25+ templates, PDF and PNG downloads, no watermark and no signup. Everything you type autosaves to your own browser’s localStorage; nothing is uploaded unless you deliberately use the share link feature.',
    },
  ],
  related: ['invoice', 'quotation', 'gst-invoice', 'purchase-order', 'payment-receipt', 'estimate'],
};
