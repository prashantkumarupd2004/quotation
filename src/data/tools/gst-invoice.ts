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
        text: 'Check the live preview, choose from 25+ templates, add your signature and stamp, then export the tax invoice as PDF or PNG, print it, or send it to the buyer over WhatsApp. The total in words appears automatically in Indian lakh/crore format.',
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
      a: 'Completely free — unlimited invoices, all 25+ templates, PDF and PNG downloads, no watermark and no signup. Your invoices autosave in your browser’s local storage on your own device; nothing is uploaded unless you deliberately create a WhatsApp share link for a specific document.',
    },
  ],
  related: ['invoice', 'quotation', 'credit-note', 'debit-note', 'delivery-challan', 'proforma-invoice'],
};
