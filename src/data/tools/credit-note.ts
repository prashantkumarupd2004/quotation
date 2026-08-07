import type { ToolContent } from './types';

export const creditNoteContent: ToolContent = {
  id: 'credit-note',
  seo: {
    title: 'Free Credit Note Generator — GST Credit Note Format Online',
    description:
      'Generate GST-compliant credit notes online for sales returns, discounts and invoice corrections. Reference the original invoice, auto-calculate CGST/SGST/IGST, and download a PDF free — no signup.',
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
    'mistakes',
    'sections',
    'faq',
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
      'Every credit note must carry a reference to the original tax invoice — its number and date — along with the supplier’s and recipient’s details, a serial number of its own, and the amount of value and tax being credited. This linkage matters: when the credit note is reported in GSTR-1, the tax authorities and the buyer’s systems match it back to the invoice whose value it is reducing.',
      'Beyond compliance, the credit note is a courtesy of good bookkeeping. It tells the customer, in writing, exactly how much of their outstanding balance has been reduced and why — a returned consignment, a post-sale discount, a rate charged too high. The customer records it against the purchase, adjusts what they owe, and everyone’s ledgers stay reconciled.',
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
        text: 'Your draft is stored in your browser’s localStorage as you type — nothing is uploaded to a server, and you can close the tab and pick up where you left off on the same device.',
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
      { label: 'Total credit to retailer’s account', value: '₹9,450.00' },
    ],
    outro:
      'The note carries the original invoice number and date, the reason "20 pieces returned — stitching defects", and the wholesaler’s signature. The retailer’s payable drops by ₹9,450, the wholesaler reports the credit note in GSTR-1 to reduce output tax by ₹450, and the retailer reverses the same amount of input tax credit.',
  },
  sections: [
    {
      heading: 'GST Rules and the Time Limit for Credit Notes',
      paragraphs: [
        'Section 34 of the CGST Act lets the supplier reduce their output tax liability through a credit note, but only within a window: the note must be declared in the GST returns not later than 30 November following the end of the financial year in which the original supply was made, or the date of filing the annual return for that year, whichever is earlier. A credit note for an invoice dated anytime in FY 2025–26, for example, must therefore be reported by 30 November 2026 at the latest for the tax adjustment to count.',
        'Miss that deadline and you can still issue a commercial credit note to settle accounts with the customer, but the GST charged on the original invoice cannot be clawed back — the reduction becomes a cost to the supplier. There is also an anti-abuse condition: the supplier’s liability is not reduced if the incidence of tax has been passed on to another person, which in practice means the buyer must reverse the corresponding input tax credit.',
        'One credit note may cover one or more invoices of the same financial year, and it must appear in the supplier’s GSTR-1 so it flows to the recipient’s GSTR-2B. Keep the reason documented on the note itself — returns, deficiency or excess billing — because that narrative is what an assessing officer reads first during scrutiny.',
      ],
    },
    {
      heading: 'How the Buyer Treats a Credit Note: ITC Reversal',
      paragraphs: [
        'A credit note is a two-sided instrument. The supplier reduces output tax; the recipient must give up the matching input tax credit they claimed on the original invoice. When the note appears in the buyer’s GSTR-2B, their accounts team reverses ITC to that extent in GSTR-3B — failing to do so invites mismatch notices, since the department reconciles both sides.',
        'In the buyer’s books, the credit note reduces the purchase value and the amount payable to the supplier. If the invoice was already paid in full, the credit typically sits as an advance to be adjusted against the next purchase, or is refunded. Agreeing in writing how the credit will be settled — adjustment or refund — avoids the classic month-end dispute over a hanging balance.',
      ],
    },
    {
      heading: 'Accounting Treatment and Record-Keeping',
      paragraphs: [
        'In the supplier’s ledger a credit note is recorded as a sales return or sales adjustment: sales (and output GST) are reduced, and the customer’s receivable account is credited. If returned goods come back into stock, inventory is also restored at cost. The note should be filed with the original invoice and, where goods physically moved back, the delivery challan or transport document covering the return.',
        'Maintain a separate, unbroken CN series per financial year and never reuse a number — auditors reconcile the credit note register against GSTR-1 line by line. Under GST record-keeping rules, credit notes must be preserved along with other accounts for at least seventy-two months from the due date of the annual return for the year they relate to, so a dated, numbered PDF archive of every note is worth building from day one.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Who issues a credit note — the supplier or the buyer?',
      a: 'Under GST, the credit note that adjusts tax is issued by the supplier who raised the original invoice. Buyers sometimes prepare their own "debit note" for a purchase return as an internal document, but the tax-effective adjustment flows from the supplier’s credit note reported in GSTR-1.',
    },
    {
      q: 'Is it mandatory to mention the original invoice on a credit note?',
      a: 'Yes. A GST credit note must state the serial number and date of the corresponding tax invoice (or invoices). This tool has dedicated fields for the original invoice number, its date and the reason, so the reference is never left out.',
    },
    {
      q: 'What is the last date to issue a credit note for a financial year?',
      a: 'The credit note must be declared in your returns by 30 November following the end of the financial year of the original supply, or the date you file that year’s annual return, whichever comes earlier. After that, only a commercial credit note without GST adjustment is possible.',
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
      a: 'Completely. There is no signup, no watermark and no limit on downloads. Your data lives in your browser’s local storage on your own device and is never uploaded unless you deliberately use the share link feature.',
    },
    {
      q: 'Can I add my signature, stamp and logo to the credit note?',
      a: 'Yes. Upload a logo in the issuer section and a signature and company stamp near the bottom of the form — all three appear in the live preview and in the exported PDF or PNG across every template.',
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
        impact: 'Buyer reverses incorrect ITC; both parties’ returns are out of balance.',
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
};
