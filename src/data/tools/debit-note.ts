import type { ToolContent } from './types';

export const debitNoteContent: ToolContent = {
  id: 'debit-note',
  seo: {
    title: 'Free Debit Note Generator — Create GST Debit Note Online',
    description:
      'Create GST-compliant debit notes online — free. Reference the original invoice, state the reason, and add the differential amount with CGST/SGST/IGST. Download a print-ready PDF instantly.',
    published: '2026-02-18',
    updated: '2026-08-07',
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
  badge: {
    label: 'Recover Amount',
    colorClass: 'bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300 border border-orange-300 dark:border-orange-700',
  },
  theme: 'orange',
  layout: {
    hero: 'ledger-plus',
    howTo: 'cards',
    features: 'alternating',
    useCases: 'accordion',
    example: 'strip',
  },
  order: [
    'whatIs',
    'custom',
    'howTo',
    'proTips',
    'widget',
    'example',
    'features',
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
    'Increases what the customer owes you',
    'Recovers undercharged value or tax',
    'References the invoice being corrected',
    'No time limit for issuing one',
  ],
  widget: 'debit-note-steps',
  relatedBlogSlugs: [
    'credit-note-debit-note-explained',
    'gst-invoice-rules-guide',
    'business-documentation-guide',
  ],
  customBlocks: [
    {
      kind: 'table',
      heading: 'Credit Note or Debit Note? A Decision Table',
      intro:
        'The two documents are chosen by one question: does the correction move the amount payable up or down, and who is issuing it? Work down this table to the row that matches your situation.',
      columns: ['What went wrong', 'Correct document', 'Issued by'],
      rows: [
        [
          'The invoice charged less than agreed',
          'Debit note',
          'The supplier, raising the amount receivable.',
        ],
        [
          'Tax was charged at too low a rate, or omitted',
          'Debit note',
          'The supplier, recovering the differential tax.',
        ],
        [
          'A quantity was billed short of what was supplied',
          'Debit note',
          'The supplier, for the unbilled balance.',
        ],
        [
          'Freight or an incidental charge was left off the invoice',
          'Debit note',
          'The supplier, provided the charge was part of the agreed supply.',
        ],
        [
          'The invoice charged more than agreed',
          'Credit note',
          'The supplier, reducing the amount receivable.',
        ],
        [
          'Goods were returned, or found deficient',
          'Credit note',
          'The supplier, reversing value and tax.',
        ],
        [
          'The buyer wants to record a claim against the supplier',
          'A commercial debit note',
          'The buyer — but it has no GST effect. Only the supplier\'s credit note adjusts the tax.',
        ],
      ],
      note:
        'A buyer\'s debit note is a bookkeeping instrument, not a tax one. However strongly a buyer asserts a claim, the liability moves only when the supplier issues the corresponding credit note and reports it.',
    },
    {
      kind: 'callout',
      tone: 'info',
      heading: 'GST Debit Note vs Commercial Debit Note',
      paragraphs: [
        'A GST debit note is issued under Section 34(3) by the supplier, against a specific earlier tax invoice, when the taxable value or the tax charged was too low. It is reported in GSTR-1, it increases the supplier\'s output tax liability in the month it is issued, and it lets the recipient claim the additional input tax credit. It behaves, in effect, as a supplementary invoice.',
        'A commercial debit note is anything else two businesses exchange to record a claim — a buyer debiting a supplier for damaged stock, for a late-delivery penalty, or for rework charges. It affects the ledgers between the parties and nothing more. It carries no GST, it is not reported, and it does not entitle anyone to credit.',
        'The distinction that trips people up: unlike credit notes, GST debit notes carry no time limit for issue, because they increase rather than reduce the government\'s revenue. The recipient\'s ability to claim the extra credit, however, is bounded by the usual ITC deadline — 30 November following the financial year of the debit note, or the annual return filing date, whichever is earlier. Delay too long and the tax is payable by you but no longer creditable to them, which is a conversation worth avoiding.',
        'Practically: number your debit notes in their own continuous series (DN-2026-0001 onwards), always print the original invoice number and date, and state the reason in a line the buyer\'s accounts team can act on without phoning you.',
      ],
    },
  ],
  whatIs: {
    heading: 'What Is a Debit Note?',
    paragraphs: [
      'A debit note is a document that increases the amount payable on an earlier transaction. Under Section 34 of the CGST Act, a supplier issues one when the original tax invoice charged too little — the taxable value was understated, the quantity billed fell short of what was delivered, or the wrong (lower) tax rate was applied. The debit note carries the differential amount and its tax, and is often called a supplementary invoice for exactly this reason.',
      'The term has a second everyday use: buyers issue debit notes to suppliers when returning purchased goods or claiming a deduction — effectively debiting the supplier\'s account in their books. The document looks the same either way: a reference to the original invoice, a reason, the items or adjustment concerned, and the amount involved. This generator handles both directions; you simply set who issues and who receives.',
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
        text: 'An item invoiced at 12% should have been 18% — a debit note for the differential tax puts the supplier\'s liability right, with the reason recorded.',
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
      'A steel supplier invoiced 10 tonnes of TMT bars at last quarter\'s rate of ₹52,000 per tonne, but the agreed current rate was ₹54,500. The debit note recovers the difference:',
    rows: [
      { label: 'Rate difference on TMT bars (10 MT × ₹2,500)', value: '₹25,000.00' },
      { label: 'Original invoice reference', value: 'INV-2026-0104 dated 02 Jun 2026' },
      { label: 'Taxable differential', value: '₹25,000.00' },
      { label: 'GST @ 18% (CGST ₹2,250 + SGST ₹2,250)', value: '₹4,500.00' },
      { label: 'Debit Note Total', value: '₹29,500.00' },
    ],
    outro:
      'The note is numbered DN-2026-0007, states the reason ("rate revision per agreed price circular, invoice billed at superseded rate"), and is reported in the supplier\'s GSTR-1 for June. The buyer books the additional ₹29,500 against the same purchase and can claim the ₹4,500 differential tax as input credit on the strength of the debit note.',
  },
  sections: [
    {
      heading: 'Debit Note vs Credit Note: Mirror Images',
      paragraphs: [
        'The two notes are opposites joined at the original invoice. A credit note reduces what the customer owes — issued when the invoice overcharged, goods came back, or services fell short. A debit note increases what the customer owes — issued when the invoice undercharged. One decreases the supplier\'s outward liability; the other increases it.',
        'A simple way to keep them straight: ask what happens to the customer\'s account in the supplier\'s books. If the balance owed goes down, it is a credit note; if it goes up, a debit note. When goods are returned, both documents often exist — the buyer\'s debit note claiming the return, answered by the supplier\'s credit note formalising it under GST.',
      ],
    },
    {
      heading: 'GST Treatment: Reporting and Input Tax Credit',
      paragraphs: [
        'A supplier who issues a debit note reports it in GSTR-1 for the month of issue, which increases outward tax liability by the differential tax. Unlike credit notes, debit notes carry no outer time limit for issue tied to the following November — the additional tax is simply payable when the shortfall is discovered and the note raised.',
        'For the recipient, a debit note is good news for credit: input tax credit on the differential tax is available, subject to the usual conditions, and the ITC time limit is reckoned from the debit note\'s own date, not the original invoice\'s. That makes a properly dated, properly referenced debit note the document that unlocks the buyer\'s additional credit — another reason the original invoice fields on this generator matter.',
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
      a: 'Under Section 34 of the CGST Act, the registered supplier issues a debit note when the tax invoice charged less than the correct taxable value or tax. In commercial practice buyers also issue debit notes for purchase returns, but the GST-recognised document that adjusts tax liability is the supplier\'s note.',
    },
    {
      q: 'Is a debit note the same as a supplementary invoice?',
      a: 'Effectively yes — GST law treats a supplementary invoice and a debit note as the same instrument: a document raising additional value and tax against an earlier invoice. This generator\'s output serves as either.',
    },
    {
      q: 'What details are mandatory on a GST debit note?',
      a: 'Supplier name, address and GSTIN, a unique serial number and date, recipient details, the original invoice number and date, the differential taxable value and tax rate-wise, and an authorised signature. All of these are structured fields in this tool.',
    },
    {
      q: 'Is there a time limit for issuing a debit note?',
      a: 'No outer limit like the one for credit notes. Since a debit note increases your tax liability rather than reducing it, you issue it whenever the undercharge is discovered and pay the differential tax in that period\'s return. The recipient\'s ITC clock runs from the debit note date.',
    },
    {
      q: 'Can the buyer claim input tax credit on a debit note?',
      a: 'Yes. The recipient can claim ITC on the differential tax shown, subject to the normal conditions (the supplier reports it, the recipient has the document, goods or services were received). The ITC time limit is calculated from the debit note\'s date.',
    },
    {
      q: 'Should a purchase-return debit note include GST?',
      a: 'A buyer\'s return debit note usually shows the value including the tax originally charged, since the supplier\'s answering credit note will reverse both value and tax. Match the tax mode to the original invoice — this tool applies CGST/SGST or IGST per line item automatically.',
    },
    {
      q: 'How should I number my debit notes?',
      a: 'Use a dedicated continuous series per financial year, up to 16 characters under GST rules — the tool suggests DN-YYYY-NNNN. Never share a series with invoices or credit notes, and never reuse a number.',
    },
    {
      q: 'Is this debit note generator free?',
      a: 'Yes — unlimited debit notes, every template, PDF and PNG export, no watermark and no account. Your data stays in your browser\'s local storage; nothing is uploaded unless you create a share link.',
    },
    {
      q: 'What is a debit note under GST and when should one be issued?',
      a: 'A debit note is issued by a supplier when the taxable value or tax charged on an original invoice turns out to be less than what it should have been. Section 34(3) of the CGST Act covers this: common reasons include a price revision agreed after invoicing, additional quantities discovered during delivery reconciliation, or a tax rate correction from a lower to a higher rate. The debit note increases the supplier\'s GST liability and entitles the recipient to claim additional input tax credit.',
    },
    {
      q: 'Is there a time limit for issuing a debit note under GST?',
      a: 'Unlike credit notes, there is no statutory time limit for issuing a debit note under the CGST Act. You can issue a debit note at any time after the original invoice, even years later. However, it must be declared in GSTR-1 for the period in which it is issued — and the recipient can claim the additional ITC only from the period in which the debit note is uploaded and appears in their GSTR-2B.',
    },
    {
      q: 'What is the difference between a debit note and a supplementary invoice?',
      a: 'In current GST terminology they refer to the same document. Before the GST era, a supplementary invoice was used to raise additional amounts against an original invoice. Under the CGST Act, this function is now formally called a debit note. Some older business software still uses the term "supplementary invoice" — for GST compliance, ensure the document is titled "Debit Note" and references the original invoice number.',
    },
    {
      q: 'Can a buyer issue a debit note to a seller?',
      a: 'Yes, but in a different commercial context. When a buyer raises a debit note, it is a unilateral document saying "we are deducting this amount from what we owe you" — for example, when a penalty clause is invoked, when goods are found short on delivery, or when a price protection clause kicks in. This buyer-issued debit note is a commercial document; it does not create a GST liability for the seller and cannot be used by the buyer to adjust their input credit.',
    },
    {
      q: 'What mandatory fields must appear on a GST debit note?',
      a: 'CGST Rule 53 requires a debit note to contain: the words "Debit Note" at the top, a consecutive serial number up to 16 characters, the date, your GSTIN and business name, the recipient\'s GSTIN and business details, the original invoice number and date being revised, the taxable value being added, the additional tax amount, the reason for the debit note, and the signature of the authorised signatory.',
    },
    {
      q: 'How does a debit note affect the recipient\'s input tax credit?',
      a: 'A debit note increases the tax amount the supplier has charged, and the corresponding additional ITC becomes available to the recipient — but only from the period in which the debit note is declared in the supplier\'s GSTR-1 and appears in the recipient\'s GSTR-2B. The recipient cannot claim this ITC for periods before the debit note is uploaded, regardless of when the original supply occurred.',
    },
    {
      q: 'Should I issue a debit note or simply raise a new invoice for additional work?',
      a: 'If the additional work is part of the same original contract or project that was already invoiced, issue a debit note that references the original invoice — this keeps the transaction history clean and the accounting treatment is clear. If the additional work is a genuinely separate new scope with its own terms, raise a fresh invoice. The practical test: would a client\'s accounts team process this as an addition to an existing purchase order, or as a new purchase order?',
    },
    {
      q: 'Can I issue multiple debit notes against a single original invoice?',
      a: 'Yes. Each debit note should have its own sequential number, reference the original invoice number, and state the specific reason for that particular addition. There is no limit on how many debit notes can reference the same invoice — phased project additions, price escalation adjustments and tax corrections may each result in a separate debit note against the same base invoice.',
    },
    {
      q: 'What is the difference between a debit note and a credit note?',
      a: 'A debit note increases the amount the buyer owes (the supplier charged too little). A credit note reduces the amount the buyer owes (the supplier charged too much or goods were returned). Both reference the original invoice and both affect the GST position of both parties, but in opposite directions: a debit note raises the supplier\'s liability and raises the recipient\'s ITC entitlement, while a credit note reduces both.',
    },
    {
      q: 'Does a debit note require the recipient\'s approval before it is valid?',
      a: 'Not legally — a debit note is unilaterally issued by the supplier and becomes part of the GST record the moment it is declared in GSTR-1. However, commercially, issuing a debit note without first discussing the reason with the client is poor practice and leads to disputes. Most businesses notify the client and reach agreement on the additional amount before issuing the debit note, particularly for significant amounts.',
    },
    {
      q: 'How do I handle a debit note in my GST return?',
      a: 'Declare the debit note in GSTR-1 under the relevant table for amendments: Table 9B for debit notes against B2B invoices. The details flow into your buyer\'s GSTR-2B as additional ITC available. Your own GST liability increases by the tax amount on the debit note, and you must pay this additional tax in the current period\'s GST payment.',
    },
    {
      q: 'Can a debit note be cancelled after it has been issued?',
      a: 'Once a debit note is declared in GSTR-1, it cannot be deleted from the return. To reverse it, issue a credit note against the debit note — but this is an unusual situation that should be avoided by ensuring accuracy before issuing. If a debit note was issued in error before being filed in GSTR-1, do not file it; amend or delete it in the draft return before submission.',
    },
  ],
  relatedHeading: 'Invoices, Corrections and the Orders Behind Them',
  relatedNote:
    'A debit note corrects an invoice upward — its mirror image, the credit note, does the opposite.',
  related: ['credit-note', 'invoice', 'gst-invoice', 'purchase-order', 'payment-receipt', 'quotation'],

  proTips: {
    heading: 'Debit Note Best Practices: Handling Undercharges Without Payment Disputes',
    items: [
      {
        icon: '⬆️',
        title: 'Issue the debit note as soon as the undercharge is discovered',
        text: 'Unlike credit notes, debit notes under GST have no upper time limit for issuance — but delay creates practical problems. The buyer\'s accounts are already closed for that period; a debit note arriving months later disrupts their payment planning and increases the chance of a dispute. Raise it promptly — ideally in the same month as discovery.',
      },
      {
        icon: '💰',
        title: 'Charge additional GST at the same rate as the original invoice',
        text: 'The differential tax on a debit note must use the same rate structure as the original supply. If the original was 18% with CGST+SGST split, the debit note carries the same split. Applying IGST when the original was CGST+SGST (or vice versa) creates a mismatch in the buyer\'s GSTR-2B and triggers a reconciliation problem.',
      },
      {
        icon: '🔄',
        title: 'Understand when to issue a debit note versus a fresh invoice',
        text: 'A debit note is appropriate when the original invoice was for the correct goods/services but at an incorrect (lower) rate. If the additional charge is for a wholly different supply — extra work added to a project, additional goods ordered separately — a fresh invoice is more appropriate than a debit note. The distinction affects GSTR-1 reporting and the buyer\'s ITC flow.',
      },
      {
        icon: '📝',
        title: 'Reference the debit note in your covering communication',
        text: 'A debit note often surprises the buyer. Send it with a brief explanation: the original invoice number, what was undercharged, the reason (rate error, additional quantity, price revision), and when payment is expected. A debit note without context triggers a dispute; one with a clear explanation is usually settled in the same payment cycle.',
      },
      {
        icon: '🔢',
        title: 'Use a separate number series for debit notes',
        text: 'GST law requires debit notes to carry a consecutive number in a financial-year series, up to 16 characters. Use a dedicated prefix — DN-2026-001 — and never share this series with your invoice numbers. Mixed series confuse both your bookkeeping and GSTR-1 reporting, where debit notes are a separate section.',
      },
      {
        icon: '🤝',
        title: 'Get buyer acknowledgement before claiming additional tax',
        text: 'While there is no explicit GST provision requiring buyer consent for a debit note (unlike credit notes), best practice is to get the buyer to acknowledge the debit note in writing before you pay the differential tax in your return. Their ITC on the debit note\'s tax component runs from the date the debit note appears in GSTR-2B, so early issuance benefits them too.',
      },
    ],
  },

  mistakes: {
    heading: 'Debit Note Mistakes That Cause Payment Disputes and GSTR Filing Errors',
    intro:
      'Debit notes are the least common adjustment document in Indian business and, as a result, are the most often mishandled. These errors create payment disputes, GST mismatches and audit problems.',
    items: [
      {
        mistake: 'Raising a debit note for a different supply',
        impact: 'Additional work or goods should be a fresh invoice, not a debit note.',
        fix: 'Issue a debit note only to correct undercharging on an existing invoice, not new supplies.',
      },
      {
        mistake: 'Wrong GST type (IGST vs CGST+SGST)',
        impact: 'Buyer\'s GSTR-2B shows incorrect credit; reconciliation fails.',
        fix: 'Match the GST type (intra/inter-state) exactly to the original invoice.',
      },
      {
        mistake: 'No reference to original invoice',
        impact: 'Buyer cannot locate what was undercharged; disputes and delays follow.',
        fix: 'Print the original invoice number and date as the primary reference on the debit note.',
      },
      {
        mistake: 'Issuing without explanation to the buyer',
        impact: 'Buyer receives an unexpected demand and disputes without context.',
        fix: 'Send the debit note with a covering message explaining the undercharge reason.',
      },
      {
        mistake: 'Using invoice number series for debit notes',
        impact: 'GSTR-1 requires debit notes in a separate section with their own series.',
        fix: 'Maintain a dedicated DN-YYYY-NNN series for debit notes throughout the year.',
      },
      {
        mistake: 'Delay in reporting in GSTR-1',
        impact: 'Buyer cannot claim ITC on the debit note\'s tax until it appears in their GSTR-2B.',
        fix: 'Report the debit note in the GSTR-1 for the month it is issued, not later.',
      },
    ],
  },
  industries: {
    heading: 'Debit Notes by Industry — When Additional Charges Arise',
    intro: 'Debit notes are the document of choice when the original invoice underrepresented the full value — each sector has its own common triggers.',
    items: [
      {
        name: 'Construction & Additional Work',
        icon: 'HardHat',
        text: 'Contractors raise debit notes for variation orders (extra work not in the original contract), price escalation clauses tied to steel or cement index changes, and additional mobilisation costs incurred due to client-caused delays.',
        detail: 'Always get the client\'s written variation order approval before issuing a construction debit note — a debit note without a signed variation order is routinely challenged by project managers as unauthorised spending.',
      },
      {
        name: 'IT Services & Scope Expansion',
        icon: 'Laptop',
        text: 'IT agencies issue debit notes when a project runs over the estimated effort and the contract includes a time-and-materials clause, when additional features are approved after the original SOW is signed, or when infrastructure costs exceed the budgeted amount included in the original proposal.',
        detail: 'Link every IT debit note to a change request (CR) number from the project management system — without a CR reference, the client\'s project manager has no internal approval record and will hold payment for the additional amount.',
      },
      {
        name: 'Manufacturing & Price Corrections',
        icon: 'Factory',
        text: 'Manufacturers issue debit notes when raw material cost escalation clauses in long-term contracts are triggered, when additional freight or handling costs were excluded from the original invoice, or when a quantity measurement at the buyer\'s end exceeds the dispatched quantity recorded on the original invoice.',
        detail: 'For price escalation debit notes, attach the index data (such as the steel price index from SAIL or the CBAM rate) that triggered the revision — without the index data the buyer has no independent basis to verify the escalation calculation.',
      },
      {
        name: 'Medical — Additional Procedures',
        icon: 'Stethoscope',
        text: 'Hospitals raise debit notes to insurance companies and TPAs when a patient\'s actual treatment cost exceeds the pre-authorised amount — for example, when complications extend the ICU stay or when additional procedures are required during surgery.',
        detail: 'Medical debit notes to TPAs must be accompanied by the clinical justification signed by the treating doctor — without medical justification the TPA will treat the additional claim as an unjustified escalation and reduce it unilaterally.',
      },
      {
        name: 'Retail & Price Adjustments',
        icon: 'Store',
        text: 'Wholesalers and distributors issue debit notes when a price revision takes effect after goods were invoiced at an old rate, when promotional scheme conditions entitle the supplier to recover a portion of a discount previously granted, or when freight charges were initially waived but are later claimed.',
        detail: 'Retail debit notes for post-delivery price revisions must reference the contract clause or communication that authorised the revision — issuing a debit note based on an informal conversation leads to disputes and is difficult to enforce.',
      },
      {
        name: 'Automobile — Additional Repair Costs',
        icon: 'Car',
        text: 'Service centres issue debit notes when additional faults are discovered during a repair that go beyond the original job card estimate, when parts prices increase between the estimate and order receipt, or when warranty claims are partially disallowed by the OEM and the balance is charged to the customer.',
        detail: 'Automobile debit notes for repair cost overruns require the customer\'s in-person or written approval before the additional work begins — the Consumer Protection Act gives customers the right to refuse additional work they were not informed about in advance.',
      },
      {
        name: 'Hospitality — Extra Services',
        icon: 'UtensilsCrossed',
        text: 'Hotels raise debit notes to corporate accounts for incidental charges (minibar, room service, late checkout) that were not included in the negotiated rate, and event venues raise debit notes for overtime staffing or additional equipment used beyond the contracted hours.',
        detail: 'Hospitality debit notes for incidental charges should include the itemised consumption report signed off by the guest or event organiser during checkout — a debit note sent days later without a signed consumption report is frequently disputed by corporate accounts teams.',
      },
      {
        name: 'Interior Design — Additions',
        icon: 'Sofa',
        text: 'Interior designers raise debit notes when clients request additional rooms or items not in the original contract, when material prices increase between the quotation and procurement, or when site conditions require additional structural work not anticipated in the estimate.',
        detail: 'Issue a revised scope document before raising the interior design debit note — clients\' finance teams require a documented scope change approval to process payment for amounts not covered by the original PO.',
      },
      {
        name: 'Education — Materials & Extras',
        icon: 'GraduationCap',
        text: 'Training institutes and coaching centres issue debit notes for study materials that were separately priced but not included in the initial fee invoice, for additional examination attempts, or for special coaching sessions requested by students after enrolment.',
        detail: 'Education debit notes for additional charges should reference the student\'s enrolment number — institute billing systems match all charges to student records, and a debit note without an enrolment reference may be posted to the wrong account.',
      },
      {
        name: 'Freelancing — Additional Hours',
        icon: 'User',
        text: 'Freelancers raise debit notes when a project runs significantly over the estimated hours due to client-requested revisions, when the original invoice covered a capped scope and the client requests additional work, or when currency conversion produces a shortfall against the originally agreed foreign currency amount.',
        detail: 'Freelancer debit notes must reference the change request or email thread in which the client requested the additional work — without a paper trail showing client authorisation, additional charge claims are almost impossible to enforce commercially.',
      },
    ],
  },

  references: {
    heading: 'GST Law References for Debit Notes',
    intro: 'Debit notes are less commonly discussed than credit notes but carry the same statutory requirements under the CGST Act.',
    items: [
      { label: 'CGST Act, 2017 — Section 34: Credit and Debit Notes', url: 'https://cbic-gst.gov.in', note: 'Subsections 34(3) and 34(4) govern debit notes: when they must be issued, the obligation to declare in GSTR-1, and the effect on the recipient\'s ITC.' },
      { label: 'CGST Rules, 2017 — Rule 53: Mandatory Fields on Debit Notes', url: 'https://cbic-gst.gov.in', note: 'Prescribes the exact fields a valid GST debit note must contain, including original invoice reference, sequential serial number and authorised signature.' },
      { label: 'GST Taxpayer Portal — GSTR-1 Debit Note Reporting', url: 'https://www.gst.gov.in', note: 'Official portal where debit notes are declared in GSTR-1 Table 9B; the submission makes the additional ITC available in the recipient\'s GSTR-2B.' },
      { label: 'Indian Contract Act, 1872 — Price Variation Clauses', url: 'https://legislative.gov.in', note: 'Governs the enforceability of price escalation and variation clauses in commercial contracts, which are the commercial basis for most supplier-issued debit notes.' },
      { label: 'MSMED Act, 2006 — Dispute Resolution for MSME Debit Notes', url: 'https://msme.gov.in', note: 'Provides a conciliation mechanism for MSMEs whose debit notes are disputed by large buyers; the buyer\'s obligation to settle within 45 days applies to amounts increased by a debit note.' },
    ],
  },
};
