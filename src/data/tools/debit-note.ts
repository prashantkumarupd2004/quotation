import type { ToolContent } from './types';

export const debitNoteContent: ToolContent = {
  id: 'debit-note',
  seo: {
    title: 'Free Debit Note Generator — Create GST Debit Note Online',
    description:
      'Create GST-compliant debit notes online — free. Reference the original invoice, state the reason, and add the differential amount with CGST/SGST/IGST. Download a print-ready PDF instantly.',
    keywords: [
      'debit note generator',
      'debit note format',
      'debit note under GST',
      'debit note format in GST pdf',
      'create debit note online',
      'debit note vs credit note',
      'supplementary invoice GST',
      'purchase return debit note',
      'debit note sample India',
      'debit note',
      'debit note format',
      'debit note format under gst',
      'debit note format in word download',
      'debit note for purchase return',
      'how to make debit note online free',
      'debit note vs credit note difference',
      'supplementary invoice format gst',
      'debit note entry example',
      'debit note generator online free India',
    ],
  },
  h1: 'Free Debit Note Generator',
  intro:
    'Undercharged an invoice, or returning goods to a supplier? Raise a clean, numbered debit note that references the original invoice, states the reason, and calculates the differential tax — downloadable as a PDF in minutes.',
  whatIs: {
    heading: 'What Is a Debit Note?',
    paragraphs: [
      'A debit note is a document that increases the amount payable on an earlier transaction. Under Section 34 of the CGST Act, a supplier issues one when the original tax invoice charged too little — the taxable value was understated, the quantity billed fell short of what was delivered, or the wrong (lower) tax rate was applied. The debit note carries the differential amount and its tax, and is often called a supplementary invoice for exactly this reason.',
      'The term has a second everyday use: buyers issue debit notes to suppliers when returning purchased goods or claiming a deduction — effectively debiting the supplier’s account in their books. The document looks the same either way: a reference to the original invoice, a reason, the items or adjustment concerned, and the amount involved. This generator handles both directions; you simply set who issues and who receives.',
      'What makes a debit note valid is traceability. It must be uniquely numbered, dated, and tied to the original invoice by number and date, with the reason stated plainly. Without that linkage, neither your accountant nor the GST portal can connect the adjustment to the supply it corrects — which is why this tool makes the original invoice reference and reason dedicated fields rather than free text buried in notes.',
    ],
  },
  howTo: {
    heading: 'How to Create a Debit Note Online',
    steps: [
      {
        title: 'Enter both parties',
        text: 'Fill in your business under Issued By and the other party under Issued To, with GSTINs where applicable. Upload your logo — the live preview shows the finished note as you type.',
      },
      {
        title: 'Reference the original invoice',
        text: 'In the Reference & Reason section, enter the original invoice number and its date, then describe the reason — rate revision, quantity shortfall in billing, tax rate correction or purchase return.',
      },
      {
        title: 'Add the differential amounts',
        text: 'List only the difference being debited: the item or adjustment description, quantity and rate. Choose CGST+SGST or IGST to match the original supply, and the tax on the differential is calculated automatically.',
      },
      {
        title: 'Sign, download and record',
        text: 'Add your authorised signature and stamp, pick a template, and download the debit note as a PDF. Report supplier-issued debit notes in your GSTR-1 for the period so the adjustment flows to the recipient.',
      },
    ],
  },
  features: {
    heading: 'Why Use This Debit Note Generator',
    items: [
      {
        title: 'Original invoice linkage built in',
        text: 'Dedicated fields for the original invoice number and date print prominently on the note, satisfying the traceability that GST rules and auditors expect.',
      },
      {
        title: 'Reason stated on the document',
        text: 'A full-width reason field explains exactly why the debit arises — the detail that prevents month-end disputes about what the note was for.',
      },
      {
        title: 'Differential GST computed automatically',
        text: 'Apply the same tax mode as the original supply and the CGST/SGST or IGST on the additional amount is calculated live, with the breakup shown in the totals.',
      },
      {
        title: 'Sequential DN numbering',
        text: 'Auto-suggested DN-YYYY-NNNN numbers keep your debit note series continuous and separate from your invoice series, as clean bookkeeping requires.',
      },
      {
        title: 'Works for both directions',
        text: 'Supplier raising a supplementary charge, or buyer debiting a supplier for returns — the same form covers both, with party labels you control.',
      },
      {
        title: 'Free, private and instant',
        text: 'No signup and no upload — the note autosaves in your browser and exports to PDF or PNG in one click, with WhatsApp sharing when you need the other party to see it now.',
      },
    ],
  },
  useCases: {
    heading: 'When Businesses Raise Debit Notes',
    intro:
      'Debit notes appear whenever an earlier invoice turns out to be too low, or goods flow back to a supplier. The most common triggers:',
    items: [
      {
        title: 'Rate revision after billing',
        text: 'A price escalation clause kicks in, or an outdated rate card was used on the invoice — the supplier debits the customer for the difference plus tax.',
      },
      {
        title: 'Quantity delivered exceeds quantity billed',
        text: 'The challan shows 105 units delivered but the invoice billed 100 — a debit note for the 5 unbilled units corrects the shortfall without cancelling the invoice.',
      },
      {
        title: 'Wrong (lower) GST rate applied',
        text: 'An item invoiced at 12% should have been 18% — a debit note for the differential tax puts the supplier’s liability right, with the reason recorded.',
      },
      {
        title: 'Purchase returns to a supplier',
        text: 'A buyer returning damaged or excess stock issues a debit note to the supplier, documenting the return value that the supplier should credit.',
      },
    ],
  },
  example: {
    heading: 'Debit Note Example: Steel Billed at an Outdated Rate',
    intro:
      'A steel supplier invoiced 10 tonnes of TMT bars at last quarter’s rate of ₹52,000 per tonne, but the agreed current rate was ₹54,500. The debit note recovers the difference:',
    rows: [
      { label: 'Rate difference on TMT bars (10 MT × ₹2,500)', value: '₹25,000.00' },
      { label: 'Original invoice reference', value: 'INV-2026-0104 dated 02 Jun 2026' },
      { label: 'Taxable differential', value: '₹25,000.00' },
      { label: 'GST @ 18% (CGST ₹2,250 + SGST ₹2,250)', value: '₹4,500.00' },
      { label: 'Debit Note Total', value: '₹29,500.00' },
    ],
    outro:
      'The note is numbered DN-2026-0007, states the reason ("rate revision per agreed price circular, invoice billed at superseded rate"), and is reported in the supplier’s GSTR-1 for June. The buyer books the additional ₹29,500 against the same purchase and can claim the ₹4,500 differential tax as input credit on the strength of the debit note.',
  },
  sections: [
    {
      heading: 'Debit Note vs Credit Note: Mirror Images',
      paragraphs: [
        'The two notes are opposites joined at the original invoice. A credit note reduces what the customer owes — issued when the invoice overcharged, goods came back, or services fell short. A debit note increases what the customer owes — issued when the invoice undercharged. One decreases the supplier’s outward liability; the other increases it.',
        'A simple way to keep them straight: ask what happens to the customer’s account in the supplier’s books. If the balance owed goes down, it is a credit note; if it goes up, a debit note. When goods are returned, both documents often exist — the buyer’s debit note claiming the return, answered by the supplier’s credit note formalising it under GST.',
      ],
    },
    {
      heading: 'GST Treatment: Reporting and Input Tax Credit',
      paragraphs: [
        'A supplier who issues a debit note reports it in GSTR-1 for the month of issue, which increases outward tax liability by the differential tax. Unlike credit notes, debit notes carry no outer time limit for issue tied to the following November — the additional tax is simply payable when the shortfall is discovered and the note raised.',
        'For the recipient, a debit note is good news for credit: input tax credit on the differential tax is available, subject to the usual conditions, and the ITC time limit is reckoned from the debit note’s own date, not the original invoice’s. That makes a properly dated, properly referenced debit note the document that unlocks the buyer’s additional credit — another reason the original invoice fields on this generator matter.',
      ],
    },
    {
      heading: 'Practical Tips for Clean Debit Notes',
      paragraphs: [
        'Issue one debit note per original invoice wherever possible, and never bundle unrelated corrections into a single note — reconciliation depends on a one-to-one trail. Keep the debit note series (DN-2026-0001 onwards) separate from invoices and credit notes, running continuously through the financial year.',
        'State reasons specifically: "rate revision from ₹52,000 to ₹54,500 per MT as per agreement dated 15 May 2026" survives an audit; "difference amount" does not. Finally, send the note to the other party the day it is raised and confirm they have booked it — an unacknowledged debit note is a receivable nobody is chasing.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Who can issue a debit note under GST?',
      a: 'Under Section 34 of the CGST Act, the registered supplier issues a debit note when the tax invoice charged less than the correct taxable value or tax. In commercial practice buyers also issue debit notes for purchase returns, but the GST-recognised document that adjusts tax liability is the supplier’s note.',
    },
    {
      q: 'Is a debit note the same as a supplementary invoice?',
      a: 'Effectively yes — GST law treats a supplementary invoice and a debit note as the same instrument: a document raising additional value and tax against an earlier invoice. This generator’s output serves as either.',
    },
    {
      q: 'What details are mandatory on a GST debit note?',
      a: 'Supplier name, address and GSTIN, a unique serial number and date, recipient details, the original invoice number and date, the differential taxable value and tax rate-wise, and an authorised signature. All of these are structured fields in this tool.',
    },
    {
      q: 'Is there a time limit for issuing a debit note?',
      a: 'No outer limit like the one for credit notes. Since a debit note increases your tax liability rather than reducing it, you issue it whenever the undercharge is discovered and pay the differential tax in that period’s return. The recipient’s ITC clock runs from the debit note date.',
    },
    {
      q: 'Can the buyer claim input tax credit on a debit note?',
      a: 'Yes. The recipient can claim ITC on the differential tax shown, subject to the normal conditions (the supplier reports it, the recipient has the document, goods or services were received). The ITC time limit is calculated from the debit note’s date.',
    },
    {
      q: 'Should a purchase-return debit note include GST?',
      a: 'A buyer’s return debit note usually shows the value including the tax originally charged, since the supplier’s answering credit note will reverse both value and tax. Match the tax mode to the original invoice — this tool applies CGST/SGST or IGST per line item automatically.',
    },
    {
      q: 'How should I number my debit notes?',
      a: 'Use a dedicated continuous series per financial year, up to 16 characters under GST rules — the tool suggests DN-YYYY-NNNN. Never share a series with invoices or credit notes, and never reuse a number.',
    },
    {
      q: 'Is this debit note generator free?',
      a: 'Yes — unlimited debit notes, every template, PDF and PNG export, no watermark and no account. Your data stays in your browser’s local storage; nothing is uploaded unless you create a share link.',
    },
  ],
  related: ['credit-note', 'invoice', 'gst-invoice', 'purchase-order', 'payment-receipt', 'quotation'],
};
