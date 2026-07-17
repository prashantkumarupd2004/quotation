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
        text: 'Pick one of 25+ templates, add your signature and stamp, then export the credit note as a PDF or PNG, print it, or send it to the customer over WhatsApp with a single click.',
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
  related: ['debit-note', 'invoice', 'gst-invoice', 'payment-receipt', 'quotation', 'delivery-challan'],
};
