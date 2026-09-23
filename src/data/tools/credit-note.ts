import type { ToolContent } from './types';

export const creditNoteContent: ToolContent = {
  id: 'credit-note',
  seo: {
    title: 'Free Credit Note Generator — GST Credit Note Format Online',
    description:
      'Generate GST-compliant credit notes online for sales returns, discounts and invoice corrections. Reference the original invoice, auto-calculate CGST/SGST/IGST, and download a PDF free — no signup.',
    published: '2026-02-18',
    updated: '2026-08-07',
    keywords: [
      'credit note generator',
      'credit note format',
      'gst credit note',
      'credit note maker online',
      'credit note format in gst',
      'sales return credit note',
      'credit note against invoice',
      'section 34 credit note',
      'free credit note pdf',
      'credit note format India',
      'credit note',
      'credit note format',
      'credit note format under gst',
      'credit note format in word',
      'credit note against invoice',
      'how to make credit note in gst online',
      'credit note for sales return format',
      'credit note generator online free',
      'credit note time limit gst',
      'gst credit note rules section 34',
      'credit note example India',
    ],
  },
  h1: 'Free GST Credit Note Generator',
  intro:
    'Issue a proper credit note against any invoice in minutes — reference the original invoice number and date, state the reason, and let the tool compute the tax reversal automatically. Download as PDF, share on WhatsApp, all free with no account.',
  badge: {
    label: 'Reduce Tax Liability',
    colorClass: 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border border-rose-300 dark:border-rose-700',
  },
  theme: 'rose',
  layout: {
    hero: 'ledger',
    howTo: 'band',
    features: 'checklist',
    useCases: 'cards',
    example: 'paper',
    whatIs: 'callout',
    headingStyle: 'pill',
    headingMarker: 'CN',
  },
  order: [
    'whatIs',
    'howTo',
    'proTips',
    'example',
    'custom',
    'widget',
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
    'Reduces what the customer owes you',
    'Links to the original invoice and its date',
    'Reverses the tax automatically',
    'Issued under Section 34 of the CGST Act',
  ],
  widget: 'credit-vs-debit',
  relatedBlogSlugs: [
    'credit-note-debit-note-explained',
    'gst-invoice-rules-guide',
    'business-documentation-guide',
  ],
  customBlocks: [
    {
      kind: 'table',
      heading: 'The Credit Note Deadline Calendar',
      intro:
        'Section 34 sets an outer limit for adjusting your GST liability through a credit note: the earlier of 30 November following the end of the financial year in which the supply was made, or the date you file that year\'s annual return. Miss it and you can still issue a commercial credit note — but the tax stays paid.',
      columns: ['Invoice raised in', 'Financial year', 'Adjust the tax by'],
      rows: [
        ['April 2025 – March 2026', 'FY 2025–26', '30 November 2026, or the date GSTR-9 is filed — whichever is earlier'],
        ['April 2026 – March 2027', 'FY 2026–27', '30 November 2027, or the date GSTR-9 is filed — whichever is earlier'],
        ['April 2027 – March 2028', 'FY 2027–28', '30 November 2028, or the date GSTR-9 is filed — whichever is earlier'],
      ],
      note:
        'Note the trap in the "whichever is earlier" wording: filing your annual return early closes the window early. A supply made in April 2025 has a nineteen-month runway on paper, but if you file GSTR-9 in August 2026 the door shuts then. Raise credit notes as the reason arises rather than saving them for a year-end clean-up.',
    },
    {
      kind: 'checklist',
      heading: 'Grounds on Which a Credit Note Is Validly Issued',
      intro:
        'Section 34(1) is specific about when a supplier may issue a credit note. If your situation is not on this list, what you need is probably a refund, a fresh invoice or a commercial adjustment — not a credit note reducing your tax.',
      items: [
        {
          title: 'The taxable value was overstated',
          text: 'The invoice charged more than was actually agreed — a keying error, an outdated rate, or a discount that was settled before supply but never applied.',
        },
        {
          title: 'The tax charged was too high',
          text: 'A wrong rate, or CGST and SGST charged where the place of supply meant IGST was due. The value stands; only the tax is corrected.',
        },
        {
          title: 'Goods were returned by the recipient',
          text: 'The most common ground. The credit note reverses the value and the tax for the returned quantity and should reference the return challan or receipt note.',
        },
        {
          title: 'Goods or services were found deficient',
          text: 'The customer keeps the supply but it did not meet the agreed specification, and a reduction has been negotiated instead of a return.',
        },
        {
          title: 'A post-sale discount agreed at or before supply',
          text: 'Volume rebates and turnover discounts qualify only where the agreement predates the supply and can be linked to the specific invoices. A discount invented after the fact does not reduce your tax liability.',
        },
        {
          title: 'The supply was cancelled after invoicing',
          text: 'An order withdrawn before delivery, or a service cancelled after the invoice went out, is reversed in full through a credit note rather than by deleting the original invoice.',
        },
      ],
    },
  ],
  whatIs: {
    heading: 'What Is a Credit Note Under GST?',
    paragraphs: [
      'A credit note is a document a supplier issues to reduce the value of an invoice already raised. Under Section 34 of the CGST Act, 2017, a registered supplier may issue one where the taxable value or tax charged in a tax invoice exceeds what is actually payable, where the recipient returns the goods, or where the goods or services supplied are found deficient. It is the legally recognised way to correct an over-billed sale without cancelling the original invoice.',
      'Every credit note must carry a reference to the original tax invoice — its number and date — along with the supplier\'s and recipient\'s details, a serial number of its own, and the amount of value and tax being credited. This linkage matters: when the credit note is reported in GSTR-1, the tax authorities and the buyer\'s systems match it back to the invoice whose value it is reducing.',
      'Beyond compliance, the credit note is a courtesy of good bookkeeping. It tells the customer, in writing, exactly how much of their outstanding balance has been reduced and why — a returned consignment, a post-sale discount, a rate charged too high. The customer records it against the purchase, adjusts what they owe, and everyone\'s ledgers stay reconciled.',
    ],
  },
  howTo: {
    heading: 'How to Create a Credit Note Online in 4 Steps',
    steps: [
      {
        title: 'Enter supplier and customer details',
        text: 'Fill in your business name, address and GSTIN as the issuer, upload your logo, and add the customer whose account you are crediting. The live preview updates with every keystroke.',
      },
      {
        title: 'Reference the original invoice',
        text: 'In the Original Invoice Reference section, enter the original invoice number and date, and write the reason for the credit — sales return, deficiency, discount or a billing correction. This reference is mandatory for a valid GST credit note.',
      },
      {
        title: 'Add the items or amounts being credited',
        text: 'List only the goods or value being reversed, with HSN/SAC codes, quantities, rates and tax percentage. CGST/SGST or IGST on the credited amount is calculated automatically, and the total appears in words in Indian format.',
      },
      {
        title: 'Download and share',
        text: 'Pick one of 25 templates, add your signature and stamp, then export the credit note as a PDF or PNG, print it, or send it to the customer over WhatsApp with a single click.',
      },
    ],
  },
  features: {
    heading: 'What Makes This Credit Note Generator Useful',
    items: [
      {
        title: 'Built-in original invoice reference',
        text: 'Dedicated fields for the original invoice number, invoice date and reason for credit ensure every note you issue meets the Section 34 requirement of linking back to the source invoice.',
      },
      {
        title: 'Automatic GST reversal calculation',
        text: 'Choose CGST+SGST for intra-state or IGST for inter-state and the tax on the credited value is worked out per line item — no manual back-calculation of the tax being reversed.',
      },
      {
        title: '25+ professional templates',
        text: 'Every layout renders "CREDIT NOTE" prominently, places your logo, QR code, signature and stamp correctly, and prints cleanly on A4 for filing alongside the original invoice.',
      },
      {
        title: 'Serial numbering with CN prefix',
        text: 'Credit notes get their own CN-series numbers, kept separate from your invoice series, so your GSTR-1 credit note table and your ledger both stay tidy.',
      },
      {
        title: 'Autosave with full privacy',
        text: 'Your draft is stored in your browser\'s localStorage as you type — nothing is uploaded to a server, and you can close the tab and pick up where you left off on the same device.',
      },
      {
        title: 'Free, unlimited, no signup',
        text: 'Issue as many credit notes as your business needs. There are no watermarks, no download caps and no account creation — open the page and start typing.',
      },
    ],
  },
  useCases: {
    heading: 'When Do Businesses Issue Credit Notes?',
    intro:
      'Any adjustment that reduces what a customer owes on a past invoice belongs on a credit note. These are the most common situations:',
    items: [
      {
        title: 'Sales returns from customers',
        text: 'A retailer sends back damaged, defective or unsold stock. The wholesaler issues a credit note for the returned quantity at the original invoice rate, reducing the receivable and the GST liability together.',
      },
      {
        title: 'Post-sale discounts and rate corrections',
        text: 'A volume discount agreed after billing, or a rate typed higher than the negotiated price, is settled with a credit note rather than by reissuing the invoice — the paper trail stays intact.',
      },
      {
        title: 'Deficient or short-supplied services',
        text: 'When a service falls short of the agreed scope — incomplete AMC visits, a cancelled event day, unusable deliverables — the provider credits the shortfall against the original service invoice.',
      },
      {
        title: 'Billing errors caught after dispatch',
        text: 'Wrong quantity keyed in, an item billed twice, or GST charged at a higher slab than applicable — a credit note for the excess corrects the books without disturbing the invoice series.',
      },
    ],
  },
  example: {
    heading: 'Credit Note Example: Garment Wholesaler Accepting a Return',
    intro:
      'A garment wholesaler in Surat billed a Pune retailer 200 kurtis at ₹450 each on invoice INV-2026-0187. The retailer finds 20 pieces with stitching defects and returns them. The wholesaler issues credit note CN-2026-0031 referencing that invoice:',
    rows: [
      { label: 'Kurtis returned — stitching defects (20 pcs @ ₹450)', value: '₹9,000.00' },
      { label: 'Taxable value credited', value: '₹9,000.00' },
      { label: 'CGST @ 2.5% reversed', value: '₹225.00' },
      { label: 'SGST @ 2.5% reversed', value: '₹225.00' },
      { label: 'Total credit to retailer\'s account', value: '₹9,450.00' },
    ],
    outro:
      'The note carries the original invoice number and date, the reason "20 pieces returned — stitching defects", and the wholesaler\'s signature. The retailer\'s payable drops by ₹9,450, the wholesaler reports the credit note in GSTR-1 to reduce output tax by ₹450, and the retailer reverses the same amount of input tax credit.',
  },
  sections: [
    {
      heading: 'GST Rules and the Time Limit for Credit Notes',
      paragraphs: [
        'Section 34 of the CGST Act lets the supplier reduce their output tax liability through a credit note, but only within a window: the note must be declared in the GST returns not later than 30 November following the end of the financial year in which the original supply was made, or the date of filing the annual return for that year, whichever is earlier. A credit note for an invoice dated anytime in FY 2025–26, for example, must therefore be reported by 30 November 2026 at the latest for the tax adjustment to count.',
        'Miss that deadline and you can still issue a commercial credit note to settle accounts with the customer, but the GST charged on the original invoice cannot be clawed back — the reduction becomes a cost to the supplier. There is also an anti-abuse condition: the supplier\'s liability is not reduced if the incidence of tax has been passed on to another person, which in practice means the buyer must reverse the corresponding input tax credit.',
        'One credit note may cover one or more invoices of the same financial year, and it must appear in the supplier\'s GSTR-1 so it flows to the recipient\'s GSTR-2B. Keep the reason documented on the note itself — returns, deficiency or excess billing — because that narrative is what an assessing officer reads first during scrutiny.',
      ],
    },
    {
      heading: 'How the Buyer Treats a Credit Note: ITC Reversal',
      paragraphs: [
        'A credit note is a two-sided instrument. The supplier reduces output tax; the recipient must give up the matching input tax credit they claimed on the original invoice. When the note appears in the buyer\'s GSTR-2B, their accounts team reverses ITC to that extent in GSTR-3B — failing to do so invites mismatch notices, since the department reconciles both sides.',
        'In the buyer\'s books, the credit note reduces the purchase value and the amount payable to the supplier. If the invoice was already paid in full, the credit typically sits as an advance to be adjusted against the next purchase, or is refunded. Agreeing in writing how the credit will be settled — adjustment or refund — avoids the classic month-end dispute over a hanging balance.',
      ],
    },
    {
      heading: 'Accounting Treatment and Record-Keeping',
      paragraphs: [
        'In the supplier\'s ledger a credit note is recorded as a sales return or sales adjustment: sales (and output GST) are reduced, and the customer\'s receivable account is credited. If returned goods come back into stock, inventory is also restored at cost. The note should be filed with the original invoice and, where goods physically moved back, the delivery challan or transport document covering the return.',
        'Maintain a separate, unbroken CN series per financial year and never reuse a number — auditors reconcile the credit note register against GSTR-1 line by line. Under GST record-keeping rules, credit notes must be preserved along with other accounts for at least seventy-two months from the due date of the annual return for the year they relate to, so a dated, numbered PDF archive of every note is worth building from day one.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Who issues a credit note — the supplier or the buyer?',
      a: 'Under GST, the credit note that adjusts tax is issued by the supplier who raised the original invoice. Buyers sometimes prepare their own "debit note" for a purchase return as an internal document, but the tax-effective adjustment flows from the supplier\'s credit note reported in GSTR-1.',
    },
    {
      q: 'Is it mandatory to mention the original invoice on a credit note?',
      a: 'Yes. A GST credit note must state the serial number and date of the corresponding tax invoice (or invoices). This tool has dedicated fields for the original invoice number, its date and the reason, so the reference is never left out.',
    },
    {
      q: 'What is the last date to issue a credit note for a financial year?',
      a: 'The credit note must be declared in your returns by 30 November following the end of the financial year of the original supply, or the date you file that year\'s annual return, whichever comes earlier. After that, only a commercial credit note without GST adjustment is possible.',
    },
    {
      q: 'Does a credit note reduce my GST liability automatically?',
      a: 'Only after you report it in GSTR-1 for the relevant period; the reduction then reflects in GSTR-3B. The reduction is also conditional on the recipient reversing the matching input tax credit on their side.',
    },
    {
      q: 'Can one credit note cover multiple invoices?',
      a: 'Yes. GST rules permit a single credit note against one or more tax invoices issued in the same financial year. List each referenced invoice clearly in the reference field so both parties can reconcile the adjustment.',
    },
    {
      q: 'Can I issue a credit note without GST for a cash discount?',
      a: 'Yes — a commercial (financial) credit note adjusts only the value, not the tax. Set the tax mode to "No Tax" in the builder for such notes. Remember that discounts established by prior agreement and linked to invoices can qualify for a GST credit note instead.',
    },
    {
      q: 'Is this credit note generator really free and private?',
      a: 'Completely. There is no signup, no watermark and no limit on downloads. Your data lives in your browser\'s local storage on your own device and is never uploaded unless you deliberately use the share link feature.',
    },
    {
      q: 'Can I add my signature, stamp and logo to the credit note?',
      a: 'Yes. Upload a logo in the issuer section and a signature and company stamp near the bottom of the form — all three appear in the live preview and in the exported PDF or PNG across every template.',
    },
    {
      q: 'What is a credit note under GST and when must it be issued?',
      a: 'A credit note is a document issued by a registered supplier to reduce the taxable value or tax charged on an earlier invoice. Section 34(1) of the CGST Act requires a credit note when goods are returned, when an excess amount has been charged, when goods or services are found deficient, or when the discount agreed at the time of supply was not reflected in the original invoice. It reverses the supplier\'s GST liability and reduces the buyer\'s previously claimed input tax credit.',
    },
    {
      q: 'Is there a time limit for issuing a GST credit note?',
      a: 'Yes. Under Section 34(2) of the CGST Act, a credit note must be declared in the GSTR-1 return for the period in which it is issued, and the latest it can be reported is September of the following financial year or the date of filing the annual return (GSTR-9), whichever is earlier. In practice: for a credit note relating to a supply made in FY 2025-26, the last date to report it in GSTR-1 is September 2026. Beyond that date, you can still issue the document for commercial purposes, but the GST adjustment is not available.',
    },
    {
      q: 'What is a financial credit note as distinct from a GST credit note?',
      a: 'A financial credit note (sometimes called a commercial credit note) is issued to grant a discount or price reduction after the original invoice, without adjusting the GST. It is used when the supplier does not want to reduce the taxable value — for example, when granting a loyalty discount that was not agreed at the time of supply. A GST credit note reduces both the taxable value and the associated tax. Both types must cross-reference the original invoice number and are valid commercial documents, but only the GST credit note triggers a change in the GST return.',
    },
    {
      q: 'Does the recipient need to reverse their input tax credit when a credit note is received?',
      a: 'Yes. When a supplier issues a credit note and declares it in GSTR-1, the corresponding reduction appears in the recipient\'s GSTR-2B. The recipient must reverse the input tax credit to the extent of the credit note — if they claimed ITC of Rs 18,000 and receive a credit note for Rs 9,000 of tax, they must reverse Rs 9,000 of ITC. Failure to reverse results in excess ITC being carried in the recipient\'s books, which attracts interest if detected in an audit.',
    },
    {
      q: 'Can a buyer issue a credit note to a seller?',
      a: 'Under GST law, credit notes are issued by suppliers (sellers), not by buyers. However, in commercial practice, buyers sometimes use the term "debit note" for the document they raise when returning goods or disputing a charge — this is a buyer-issued debit note, which functions commercially as a purchase reduction. The seller\'s corresponding document is a credit note that they issue in response.',
    },
    {
      q: 'What mandatory fields must a GST credit note contain?',
      a: 'CGST Rule 53 requires: the words "Credit Note" at the top, a consecutive serial number up to 16 characters, the date, your GSTIN and business name, the recipient\'s name, address and GSTIN, the original invoice number and date, the taxable value and tax reduction, the reason for the credit note, and the signature of the authorised person. A credit note without an original invoice reference is difficult to process in the GST return and will be flagged during audits.',
    },
    {
      q: 'Can I issue a credit note for goods returned after the six-month GST window?',
      a: 'After the September deadline passes, you can still issue a credit note for commercial and accounting purposes, but the GST adjustment will not be available. The supplier\'s GST liability and the buyer\'s ITC both remain as per the original invoice. This is why prompt issuance of credit notes matters in practice — waiting until the following financial year effectively locks in the tax even if the goods were genuinely returned.',
    },
    {
      q: 'How does a credit note appear in the GST return?',
      a: 'Credit notes are reported in GSTR-1 under the relevant table for the period in which the credit note is issued — Table 9A for amendments, Table 9C for credit notes against B2B invoices. When you upload the credit note in GSTR-1, the buyer sees it in their GSTR-2B as a negative entry, prompting them to reverse the corresponding ITC. If you forget to upload a credit note, your GST liability remains elevated.',
    },
    {
      q: 'Can a credit note be issued for a full cancellation of an invoice?',
      a: 'Yes. A credit note for the full taxable value and tax of the original invoice effectively cancels it. This is the correct approach when a supply is entirely reversed — for example, goods are returned in full, or a service was not delivered. The credit note does not literally delete the original invoice from the records; both documents remain, and the net effect in the GST return is zero for that transaction.',
    },
    {
      q: 'Is there a minimum or maximum value for a credit note?',
      a: 'No statutory minimum or maximum exists. A credit note can be for Rs 1 (a rounding correction) or for the full value of a large invoice. What matters is that the stated reason is genuine and documented, the original invoice is correctly referenced, and the document is reported in GSTR-1 within the allowed time window.',
    },
    {
      q: 'Does a credit note need to be linked to a specific invoice?',
      a: 'Yes, always. A credit note without an original invoice reference is commercially ambiguous and creates problems in GST reconciliation — both the supplier\'s GSTR-1 and the recipient\'s ITC reversal depend on matching the credit note to a specific invoice. If the credit applies across multiple invoices, list each invoice number and the portion of the credit note allocated to it.',
    },
    {
      q: 'What is the difference between a credit note and a refund?',
      a: 'A credit note reduces the amount the buyer owes — it is a book adjustment. A refund involves the actual return of money from the seller to the buyer. Many credit notes never result in cash leaving the seller\'s account; instead, the buyer applies the credit note value against their next purchase or against an outstanding invoice. A refund is a separate event that may follow a credit note but is not the same as it.',
    },
  ],
  relatedHeading: 'Correcting, Billing and Recording: The Related Documents',
  relatedNote:
    'A credit note never stands alone — it always points back at an invoice, and often forward to a refund.',
  related: ['debit-note', 'invoice', 'gst-invoice', 'payment-receipt', 'quotation', 'delivery-challan'],

  proTips: {
    heading: 'How to Issue Credit Notes That Satisfy GST, Your Buyer and Your Accountant',
    items: [
      {
        icon: '⏰',
        title: 'Issue before the GST annual return deadline — not whenever convenient',
        text: 'Under GST, a credit note for a tax invoice issued in 2025–26 must be reported before you file your September 2026 GSTR-1 or your annual return — whichever comes first. Miss this window and you lose the right to reduce your GST liability for that supply under Section 34(2). The credit note can still be raised for commercial purposes, but the GST adjustment is gone.',
      },
      {
        icon: '🔗',
        title: 'Always reference the original invoice number and date',
        text: 'A credit note without a clear reference to the invoice it adjusts is almost useless. Your buyer\'s accounts team cannot identify which outstanding amount to reduce. Your GSTR-1 filing will flag a mismatch. And your own records become impossible to reconcile at year-end. Make the original invoice number the most visible field after the credit note number.',
      },
      {
        icon: '📍',
        title: 'Record the reason for the credit note — it affects ITC on the other side',
        text: 'When you issue a credit note, the buyer must reverse the input tax credit they claimed on the original invoice, up to the tax component of the credit. The reason matters: a return of defective goods creates a different paper trail than a price correction or a post-supply discount. An explicit reason on the note helps both parties file correctly.',
      },
      {
        icon: '✅',
        title: 'Get written acknowledgement from the buyer before reducing tax',
        text: 'Section 34 requires that the recipient confirms the credit note before the supplier can reduce their tax liability. In practice, email confirmation is sufficient. Issue the credit note, send it to the buyer, get their confirmation that they have reversed the ITC, then reduce the liability in your return.',
      },
      {
        icon: '💰',
        title: 'For post-supply discounts, check if the discount was agreed in advance',
        text: 'A discount that was agreed in the original supply contract and linked to a specific invoice can be passed on via credit note with a proportional ITC reversal for the buyer. Ad-hoc discounts given after supply — without being part of the original agreement — are treated as separate supplies and cannot be adjusted via credit note without complications.',
      },
      {
        icon: '📝',
        title: 'Keep a running register of all open credit notes',
        text: 'Each open credit note represents a pending cash or account credit to a buyer. Maintain a simple register showing the credit note number, original invoice, buyer, amount and whether it has been adjusted against a future invoice or refunded in cash. This prevents credit notes from falling through the cracks at financial year-end.',
      },
    ],
  },

  mistakes: {
    heading: 'Credit Note Mistakes That Cause ITC Loss and GST Filing Errors',
    intro:
      'These errors are particularly common in businesses that issue many invoices per month and handle returns, discounts and corrections. The GST consequences are real and time-limited.',
    items: [
      {
        mistake: 'Issuing after the Section 34 deadline',
        impact: 'Cannot reduce GST liability; you pay tax on a supply that was reversed.',
        fix: 'Issue credit notes for FY2025-26 before filing the September 2026 GSTR-1.',
      },
      {
        mistake: 'No reference to original invoice',
        impact: 'Buyer cannot reverse ITC; your GSTR-1 shows a mismatch.',
        fix: 'Print the original invoice number and date prominently on every credit note.',
      },
      {
        mistake: 'Wrong GST amount on credit note',
        impact: 'Buyer reverses incorrect ITC; both parties\' returns are out of balance.',
        fix: 'Calculate tax at the same rate as the original invoice; do not use rounded figures.',
      },
      {
        mistake: 'Issuing for a discount without prior agreement',
        impact: 'Ad-hoc discounts cannot be adjusted via credit note without ITC complications.',
        fix: 'Agree discounts in the original supply contract or as a pre-supply arrangement.',
      },
      {
        mistake: 'Not recording the reason for issue',
        impact: 'Auditor cannot verify the credit is legitimate; ITC reversal basis is unclear.',
        fix: 'State the reason (return, price correction, discount, excess billing) clearly on the note.',
      },
      {
        mistake: 'Reducing output tax without buyer acknowledgement',
        impact: 'Section 34 violation; tax department can disallow the liability reduction.',
        fix: 'Get the buyer\'s written confirmation of ITC reversal before reducing output tax in return.',
      },
    ],
  },
  industries: {
    heading: 'Credit Notes Across Industries — When and Why They Are Raised',
    intro: 'Credit notes arise in every business where goods can be returned, services can fall short, or pricing needs to be corrected after invoicing.',
    items: [
      {
        name: 'Manufacturing & Returns',
        icon: 'Factory',
        text: 'Manufacturers issue credit notes when distributors return damaged or excess stock, when a batch fails quality testing after delivery, or when a price revision is agreed retroactively. The credit note value equals the returned quantity at the original invoiced rate plus the proportionate GST.',
        detail: 'Attach the inspection report or rejection memo to every manufacturing credit note — without documented evidence of the defect or return, the GST department may challenge the credit note as a paper reduction with no commercial basis.',
      },
      {
        name: 'Retail & Wholesale Refunds',
        icon: 'Store',
        text: 'Retailers issue credit notes for product returns, short deliveries and promotional discounts granted after billing. High-volume distributors run weekly credit note cycles to settle all return and claims activity before closing the month.',
        detail: 'Match every retail credit note to the original delivery challan and invoice before issuing it — credit notes raised without documentary evidence of the return are a leading cause of GST audit adjustments in the retail sector.',
      },
      {
        name: 'IT Services & SLA Breaches',
        icon: 'Laptop',
        text: 'IT service providers issue credit notes when service level agreement penalties are triggered, when a contracted scope is only partially delivered, or when a client disputes hours billed. The credit note settles the commercial dispute without requiring the original invoice to be cancelled.',
        detail: 'Document the SLA breach or scope shortfall in a formal communication before issuing the credit note — verbal agreements to reduce the invoice are commercially fragile and unenforceable if the client\'s accounts team later disputes the credit.',
      },
      {
        name: 'Medical & Billing Corrections',
        icon: 'Stethoscope',
        text: 'Hospitals and clinics issue credit notes when procedures are billed incorrectly, when a patient is discharged before a service is rendered, or when insurance companies negotiate a reduction from the standard billing rate. Pharmacy distributors issue credits for returned or expired stock.',
        detail: 'Medical credit notes must reference the patient name and original bill number alongside the invoice number — hospital billing teams match credits to specific patient folios, not just to invoice numbers, and missing the patient reference delays processing.',
      },
      {
        name: 'Construction & Defect Claims',
        icon: 'HardHat',
        text: 'Construction contractors receive credit notes from material suppliers for damaged goods, short measurements and quality rejections. They issue credit notes to clients when work is found deficient after measurement or when agreed price reductions are applied at final account settlement.',
        detail: 'Construction credit notes should reference the RA bill number or measurement book entry being reversed, not just the tax invoice number — project finance teams track payments at the RA bill level, and an invoice-only reference creates reconciliation gaps.',
      },
      {
        name: 'Automobile & Warranty',
        icon: 'Car',
        text: 'Dealerships issue credit notes for warranty parts replacements (where the OEM reimburses the dealer), for accessories that are returned or exchanged, and for trade-in value credits. Spare parts distributors issue credits for damaged or incorrectly shipped parts.',
        detail: 'Warranty claim credit notes between dealers and OEMs must cross-reference the warranty claim number from the OEM system — the manufacturer\'s accounts team will not process a credit note without this reference.',
      },
      {
        name: 'Hospitality & Complaints',
        icon: 'UtensilsCrossed',
        text: 'Hotels and restaurants issue credit notes to corporate accounts when services fall short of contracted standards, when a guest leaves early and the full stay was billed, or when banquet functions are reduced in scope after the proforma was issued.',
        detail: 'Hospitality credit notes should state the general manager\'s or accounts manager\'s reason for the reduction clearly — corporate clients\' accounts teams require a documented business reason before they will accept a credit note adjustment in their payables.',
      },
      {
        name: 'Education & Fee Adjustments',
        icon: 'GraduationCap',
        text: 'Educational institutions issue credit notes for fee reversals on withdrawal from a course, for overpayments received, and for scholarships or concessions granted after the fee invoice was raised. Corporate training providers issue credits when a planned training batch is cancelled.',
        detail: 'Educational credit notes should clearly state whether the credit is refundable in cash or adjustable against future fees — this distinction determines the accounting treatment in the student\'s or sponsor\'s books.',
      },
      {
        name: 'Interior Design & Revisions',
        icon: 'Sofa',
        text: 'Interior design firms issue credit notes when a contracted scope is reduced at the client\'s request, when materials delivered do not match the specification and are returned, or when a discount is negotiated at project closure below the originally invoiced amount.',
        detail: 'Interior design credit notes for returned materials should reference both the delivery challan number and the original purchase invoice — the challan proves the return happened and the invoice proves the original price at which the credit should be calculated.',
      },
      {
        name: 'Freelancing & Scope Reduction',
        icon: 'User',
        text: 'Freelancers issue credit notes when a project scope is mutually reduced after billing, when a deliverable is found to not meet the agreed specification, or when a refund is partially agreed after a dispute. The credit note protects both parties by documenting the reduction formally.',
        detail: 'Freelancer credit notes must reference the specific invoice and deliverable being credited — a generic "credit for project work" creates ambiguity about which engagement is being reduced and whether the freelancer\'s tax position has changed.',
      },
    ],
  },

  references: {
    heading: 'GST Law and Commercial References for Credit Notes',
    intro: 'Credit notes under GST are governed by specific statutory provisions — here are the primary sources.',
    items: [
      { label: 'CGST Act, 2017 — Section 34: Credit and Debit Notes', url: 'https://cbic-gst.gov.in', note: 'Defines when credit notes must be issued, sets the September deadline for GST adjustment, and specifies the obligation to declare them in GSTR-1.' },
      { label: 'CGST Rules, 2017 — Rule 53: Contents of Credit Notes', url: 'https://cbic-gst.gov.in', note: 'Prescribes the mandatory fields a GST credit note must contain, including original invoice reference, reason for issuance and serial numbering.' },
      { label: 'GST Taxpayer Portal — GSTR-1 Filing', url: 'https://www.gst.gov.in', note: 'Official portal where credit notes are uploaded in GSTR-1 so they flow into the recipient\'s GSTR-2B for ITC reversal.' },
      { label: 'CBIC — GST Circular on Post-Supply Discounts', url: 'https://cbic-gst.gov.in', note: 'CBIC Circular 92/11/2019 clarifies when post-supply discounts qualify for a GST credit note adjustment versus when they are purely financial adjustments.' },
      { label: 'Indian Contract Act, 1872 — Rights on Breach', url: 'https://legislative.gov.in', note: 'Governs the buyer\'s right to claim a price reduction for defective goods or services, which forms the commercial basis for many credit notes.' },
    ],
  },
};
