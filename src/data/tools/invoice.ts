import type { ToolContent } from './types';

export const invoiceContent: ToolContent = {
  id: 'invoice',
  seo: {
    title: 'Free Invoice Maker — Create & Download Invoice PDF Online',
    description:
      'Make professional invoices online in under a minute — free. Add your logo, line items, taxes and due date, track paid/unpaid status, and download a print-ready PDF. No signup needed.',
    keywords: [
      'invoice maker',
      'free invoice maker',
      'invoice generator online',
      'invoice maker India',
      'create invoice online free',
      'invoice format pdf',
      'invoice template free download',
      'billing software free',
      'invoice with logo',
      'small business invoice maker',
      'invoice generator',
      'bill maker',
      'online invoice generator free',
      'invoice format in word',
      'invoice bill format',
      'simple invoice format',
      'how to make an invoice online for free',
      'invoice maker without login',
      'free invoice generator India no signup',
      'invoice format for small business India',
      'proforma vs invoice difference',
      'download invoice pdf free',
      'billing format for shop',
    ],
  },
  h1: 'Free Online Invoice Maker',
  intro:
    'Create a polished, professional invoice in your browser — add your logo, items, tax and due date, then download a print-ready PDF instantly. Free forever, no signup, and your data never leaves your device.',
  whatIs: {
    heading: 'What Is an Invoice and Why Does It Matter?',
    paragraphs: [
      'An invoice is a commercial document a seller issues to a buyer after goods are delivered or services are completed. It records what was sold, in what quantity, at what price, the taxes applied, and — critically — when payment is due. Unlike a quotation, which is an offer, an invoice is a formal demand for payment and forms the basis of your accounts receivable.',
      'For small businesses and freelancers in India, a clean invoice does double duty: it gets you paid faster and keeps your books audit-ready. Banks ask for invoices when you apply for working-capital loans, clients need them to release payments through their accounts teams, and your accountant needs them at tax time. A vague WhatsApp message asking for money simply does not carry the same weight as a numbered invoice with clear line items and payment terms.',
      'A complete invoice includes a unique sequential invoice number, the issue date and due date, your business details (with GSTIN if registered), the customer’s billing details, itemised charges with quantities and rates, applicable taxes, the grand total, and your payment instructions. Our invoice maker structures all of this for you so nothing gets missed.',
    ],
  },
  howTo: {
    heading: 'How to Make an Invoice Online in 4 Steps',
    steps: [
      {
        title: 'Add your business and customer details',
        text: 'Enter your company name, address, phone, email and GSTIN, and upload your logo. Then fill in who you are billing — their name, company and address. Everything you type appears instantly in the live preview.',
      },
      {
        title: 'List what you are billing for',
        text: 'Add each product or service as a line item with description, quantity, unit, rate and tax percentage. Subtotal, tax and grand total are calculated automatically as you type — no spreadsheet formulas needed.',
      },
      {
        title: 'Set the due date and payment status',
        text: 'Pick an invoice date and due date, mark the invoice as Paid, Partially Paid or Unpaid, and add payment instructions such as your bank account or UPI ID so the customer knows exactly how to pay.',
      },
      {
        title: 'Download, print or share',
        text: 'Choose from 25+ professional templates, tweak the accent colour to match your brand, then download the invoice as a PDF or PNG, print it directly, or share it over WhatsApp with one click.',
      },
    ],
  },
  features: {
    heading: 'Everything You Need in a Free Invoice Generator',
    items: [
      {
        title: 'Automatic tax and total calculations',
        text: 'Per-item tax rates, discounts (percentage or flat), shipping charges and round-off are computed live. Switch between GST, IGST, flat tax or no tax with one dropdown.',
      },
      {
        title: 'Paid / Unpaid status on the invoice',
        text: 'Mark each invoice Paid, Partially Paid or Unpaid so customers see the outstanding position at a glance — useful when re-sending reminders for overdue bills.',
      },
      {
        title: '25+ print-ready templates',
        text: 'From minimalist monochrome to bold corporate layouts, every template is tuned for A4 printing and PDF export, with your logo, signature, stamp and QR code placed correctly.',
      },
      {
        title: 'Payment instructions and UPI QR',
        text: 'Print your bank details or a scannable UPI QR code directly on the invoice so customers can pay the moment they receive it — fewer follow-ups, faster cash flow.',
      },
      {
        title: 'Works offline, saves automatically',
        text: 'Your invoice autosaves in your browser as you type, with full undo/redo. No account, no upload — your financial data stays on your device.',
      },
      {
        title: 'Amount in words, Indian format',
        text: 'INR invoices automatically show the grand total in words (lakh/crore style), which many customers and auditors expect on formal bills.',
      },
    ],
  },
  useCases: {
    heading: 'Who Uses This Invoice Maker?',
    intro:
      'Any business that sells and expects to be paid needs invoices. These are the situations our users create invoices for every day:',
    items: [
      {
        title: 'Freelancers billing clients for project work',
        text: 'Designers, developers and consultants invoice per project or per milestone, attach a due date, and include their UPI details so domestic clients can pay instantly.',
      },
      {
        title: 'Shops and traders billing regular customers',
        text: 'Retailers and wholesalers issue itemised bills with quantities, units and per-item rates, keeping a numbered record of every sale for their accounts.',
      },
      {
        title: 'Service providers with monthly billing cycles',
        text: 'Agencies, maintenance contractors and tuition providers raise recurring monthly invoices, duplicating last month’s invoice and updating the number and dates in seconds.',
      },
      {
        title: 'Small manufacturers supplying to businesses',
        text: 'Job-workers and fabricators bill B2B buyers with HSN codes and GST so the buyer can claim input credit, and mark invoices Paid once the NEFT arrives.',
      },
    ],
  },
  example: {
    heading: 'Invoice Example: Freelance Web Design Project',
    intro:
      'Here is how a typical freelance invoice comes together. A web designer completes a website for a client and bills it in two line items — design and one year of maintenance:',
    rows: [
      { label: 'Website design & development (1 project @ ₹45,000)', value: '₹45,000.00' },
      { label: 'Annual maintenance plan (1 year @ ₹12,000)', value: '₹12,000.00' },
      { label: 'Subtotal', value: '₹57,000.00' },
      { label: 'GST @ 18% (CGST ₹5,130 + SGST ₹5,130)', value: '₹10,260.00' },
      { label: 'Grand Total (due in 15 days)', value: '₹67,260.00' },
    ],
    outro:
      'The invoice carries number INV-2026-0042, an issue date, a due date 15 days out, the designer’s bank details in the payment instructions, and status "Unpaid". When the client pays, the designer duplicates the invoice, flips the status to Paid, and sends it back as a confirmation copy.',
  },
  sections: [
    {
      heading: 'Invoice vs Quotation vs Proforma Invoice: Know the Difference',
      paragraphs: [
        'These three documents are often confused, but they play different roles in a sale. A quotation is an offer — it says "this is what it will cost if you go ahead" and creates no obligation to pay. A proforma invoice is a preview of the final bill, typically used to collect an advance or clear imports before goods ship. An invoice is the real thing: a demand for payment for goods or services already delivered, and the document your revenue is booked against.',
        'The practical rule: send a quotation to win the work, a proforma invoice if you need money or approval before delivering, and a tax-compliant invoice once delivery happens. Using the wrong document can delay payment (accounts teams will not pay against a quotation) or create tax confusion (a proforma is not a valid GST document for input credit).',
      ],
    },
    {
      heading: 'Best Practices for Getting Invoices Paid on Time',
      paragraphs: [
        'Number your invoices sequentially and never reuse a number — gaps and duplicates are the first thing an auditor or a customer’s accounts team will question. Keep one series per financial year (for example INV-2026-0001 onwards) so reconciliation stays simple.',
        'Always state an explicit due date rather than "payment on receipt". Invoices with a concrete date — even a generous one — are paid measurably faster because they enter the customer’s payment calendar. Pair the due date with visible payment instructions: bank account, IFSC and UPI ID printed on the invoice removes every excuse for delay.',
        'Finally, send the invoice the same day you deliver. The longer the gap between delivery and billing, the lower the invoice falls in the customer’s priority list. With this tool an invoice takes under a minute, so there is no reason to batch them up for the weekend.',
      ],
    },
    {
      heading: 'Is This Invoice Maker Really Free?',
      paragraphs: [
        'Yes — every feature on this page is free with no usage limits, no watermarks and no signup wall. You can create unlimited invoices, use every template, and download unlimited PDFs. The tool runs entirely in your browser: your invoice data is stored locally on your device and is never uploaded to our servers, which also means it keeps working even with a flaky internet connection.',
        'If you need GST-specific fields like place of supply, reverse charge and a CGST/SGST/IGST breakup with HSN codes, use our dedicated GST Invoice Maker — it shares the same editor, so everything here works the same way there.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Can I create an invoice without registering an account?',
      a: 'Yes. There is no signup, login or email verification. Open the page, fill in your details and download the PDF. Your work autosaves in your browser so you can close the tab and continue later on the same device.',
    },
    {
      q: 'How do I add my company logo and signature to the invoice?',
      a: 'In the builder, use the "Company Logo" upload in the Billed By section and the "Signature" and "Company Stamp" uploads near the bottom of the form. PNG and JPG files work; they appear immediately in the live preview and in the exported PDF.',
    },
    {
      q: 'Can I mark an invoice as paid or partially paid?',
      a: 'Yes. The Payment Details section has a Payment Status selector with Unpaid, Partially Paid and Paid options. The status prints on the invoice, which is handy when sending a receipt copy after payment or a reminder for an outstanding balance.',
    },
    {
      q: 'Does the invoice maker calculate GST automatically?',
      a: 'Yes. Set a tax rate per line item and choose CGST+SGST (intra-state) or IGST (inter-state) in the tax mode. Subtotal, tax breakup and grand total update live. For a full statutory GST invoice with place of supply and reverse charge fields, use the dedicated GST Invoice Maker.',
    },
    {
      q: 'What invoice number format should I use?',
      a: 'Any consistent sequential format works — the tool suggests INV-YYYY-NNNN (for example INV-2026-0001). Keep one unbroken series per financial year. Under GST rules an invoice number can be up to 16 characters of letters, numbers and permitted symbols.',
    },
    {
      q: 'Can I send the invoice on WhatsApp?',
      a: 'Yes. The toolbar has a WhatsApp button that creates a shareable link to a read-only copy of your invoice and opens WhatsApp with a pre-filled message. You can also download the PNG image and send that directly.',
    },
    {
      q: 'Is my billing data stored on your servers?',
      a: 'No. The invoice is saved in your browser’s local storage on your own device. Nothing is uploaded unless you explicitly use the share feature, which stores only that single shared document to generate a link.',
    },
    {
      q: 'Can I reuse last month’s invoice for a recurring client?',
      a: 'Yes. Your last invoice loads automatically when you return. Update the invoice number and dates, adjust any line items, and download — a recurring monthly invoice takes well under a minute.',
    },
  ],
  related: ['quotation', 'gst-invoice', 'proforma-invoice', 'payment-receipt', 'credit-note', 'estimate'],
};
