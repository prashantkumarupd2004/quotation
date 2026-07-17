import type { ToolContent } from './types';

export const paymentReceiptContent: ToolContent = {
  id: 'payment-receipt',
  seo: {
    title: 'Free Payment Receipt Generator — Create Receipt Online with UPI & Bank Details',
    description:
      'Generate professional payment receipts online — free. Record payment mode, transaction ID, amount received and balance due, then download a print-ready receipt PDF instantly. No signup.',
    keywords: [
      'payment receipt generator',
      'free receipt maker',
      'payment receipt format',
      'cash receipt generator online',
      'money receipt format India',
      'receipt maker with logo',
      'advance payment receipt',
      'UPI payment receipt',
      'receipt template pdf',
      'receipt maker',
      'receipt generator',
      'cash receipt format',
      'money receipt format',
      'payment receipt format pdf download',
      'rent receipt generator online free',
      'advance payment receipt format India',
      'how to make a payment receipt online',
      'receipt maker online free no signup',
      'cheque payment receipt format',
      'receipt of payment template',
      'fee receipt format',
    ],
  },
  h1: 'Free Payment Receipt Generator',
  intro:
    'Acknowledge every payment the professional way — a numbered receipt with the payment mode, transaction reference, amount received and any balance due, downloadable as a clean PDF in seconds. Free and no signup.',
  whatIs: {
    heading: 'What Is a Payment Receipt and When Should You Issue One?',
    paragraphs: [
      'A payment receipt is written proof that money changed hands. Where an invoice asks for payment, a receipt confirms it arrived — stating who paid, how much, on what date, by which mode (UPI, bank transfer, cash, cheque or card), and against which invoice or order. It is the closing bracket of a transaction, and the document your customer files to prove they have settled their side.',
      'Receipts matter more than most small businesses realise. Customers need them to claim expenses, reconcile their own books and defend themselves in payment disputes. You need them because a numbered receipt series is the cleanest record of your actual collections — especially for cash, where no bank statement exists to fall back on. For advances received before delivery, a receipt is often the only paper trail until the final invoice is raised.',
      'A complete receipt carries a unique receipt number and date, your business details, the payer’s name, the amount in figures and words, the payment mode with its transaction reference (UTR, UPI reference or cheque number), the invoice it settles, and any balance still outstanding. This generator structures all of it and prints the amount in words automatically for INR.',
    ],
  },
  howTo: {
    heading: 'How to Generate a Payment Receipt Online',
    steps: [
      {
        title: 'Add your business and the payer',
        text: 'Enter your company details and logo under Received By, and the customer who paid under Received From. Everything renders live in the preview exactly as the printed receipt will look.',
      },
      {
        title: 'Describe what the payment is for',
        text: 'Add a line item describing the payment — an invoice being settled, a project advance, a monthly fee — with the amount received. Multiple line items work too if one payment covers several charges.',
      },
      {
        title: 'Record mode and transaction details',
        text: 'Pick the payment mode (UPI, NEFT/RTGS, cash, cheque or card), enter the transaction ID or cheque number, reference the invoice being paid, and note any balance still due after this payment.',
      },
      {
        title: 'Download, print or send instantly',
        text: 'Choose a template, add your signature and stamp, then download the receipt as a PDF or PNG, print it, or send it to the payer on WhatsApp the moment their payment lands.',
      },
    ],
  },
  features: {
    heading: 'Built for Real-World Payment Records',
    items: [
      {
        title: 'Every payment mode covered',
        text: 'UPI, bank transfer, cash, cheque and card each get proper treatment — including the convention that cheque receipts are subject to realisation, stated in the default terms.',
      },
      {
        title: 'Transaction ID and UTR field',
        text: 'Record the UPI reference, NEFT/RTGS UTR or cheque number on the receipt itself, so either party can trace the payment in a bank statement months later.',
      },
      {
        title: 'Part payments with balance due',
        text: 'A dedicated Balance Due field turns the receipt into a running statement — ideal for advances, instalments and milestone payments where the account is not yet closed.',
      },
      {
        title: 'Amount in words, automatically',
        text: 'INR receipts print the received amount in words in the Indian lakh/crore style — the detail auditors and formal customers expect on a money receipt.',
      },
      {
        title: 'Links back to the invoice',
        text: 'The Against Invoice No. field ties each receipt to the bill it settles, keeping your receivables trail unbroken from invoice to final payment.',
      },
      {
        title: 'No signup, data stays local',
        text: 'Receipts autosave in your browser with undo/redo. Nothing is uploaded to a server — your collection records remain entirely on your device.',
      },
    ],
  },
  useCases: {
    heading: 'Who Needs Payment Receipts?',
    intro:
      'Any business that collects money — especially advances, cash or instalments — should issue receipts. These are the everyday situations this tool handles:',
    items: [
      {
        title: 'Service providers collecting advances',
        text: 'Designers, contractors and event planners receipt the booking advance the day it arrives, noting the project, the mode and the balance payable on completion.',
      },
      {
        title: 'Shops and businesses accepting cash',
        text: 'Cash leaves no bank trail, so a numbered receipt is the only proof of collection — for the customer’s records and for your own daily cash reconciliation.',
      },
      {
        title: 'Landlords and institutes collecting recurring fees',
        text: 'Monthly rent and tuition fees get a receipt each cycle, giving tenants and parents the paper they need for HRA claims and reimbursements.',
      },
      {
        title: 'Businesses closing out invoices',
        text: 'When a customer clears an outstanding invoice by NEFT, a receipt quoting the UTR and the invoice number formally closes the account and prevents duplicate-payment confusion.',
      },
    ],
  },
  example: {
    heading: 'Receipt Example: Interior Design Project Advance',
    intro:
      'An interior designer signs a ₹3,00,000 project and collects a 50% advance by UPI before starting work. The receipt records it like this:',
    rows: [
      { label: 'Advance against interior design project (Quotation QT-2026-0031)', value: '₹1,50,000.00' },
      { label: 'Payment mode', value: 'UPI' },
      { label: 'Transaction reference', value: '415223867890' },
      { label: 'Amount received', value: '₹1,50,000.00' },
      { label: 'Balance due on completion', value: '₹1,50,000.00' },
    ],
    outro:
      'The receipt is numbered REC-2026-0009, dated the day the UPI credit landed, and shows the amount in words — One Lakh Fifty Thousand Rupees Only. The client files it with the signed quotation; the designer’s final invoice will reference both, and a second receipt will close the account after handover.',
  },
  sections: [
    {
      heading: 'Receipt vs Invoice: Two Sides of the Same Payment',
      paragraphs: [
        'An invoice and a receipt bracket a transaction from opposite ends. The invoice comes first and says "you owe this"; the receipt comes last and says "you paid this". Sending a "Paid" invoice is common, but it is not a substitute for a receipt: the receipt names the payment mode and transaction reference, which the invoice cannot know in advance, and it is the document a customer’s auditor actually wants to see against each settled bill.',
        'The clean workflow: invoice with a due date, payment arrives, receipt issued the same day quoting the invoice number and the UTR or UPI reference. With this platform each step has its own tool sharing one editor, so moving from invoice to receipt means copying a few fields, not starting over.',
      ],
    },
    {
      heading: 'Receipts for Advances and GST Receipt Vouchers',
      paragraphs: [
        'Advances deserve special care. Under GST, a registered supplier who receives an advance for services is expected to issue a receipt voucher and account for tax on the advance; for goods, tax is generally payable on supply, not advance. Even where GST formality does not apply — unregistered businesses, deposits, personal transactions — a plain payment receipt for every advance protects both sides if the deal later changes or falls through.',
        'When receipting an advance, always state what it is an advance for, reference the quotation or agreement, and show the balance that remains payable. The Balance Due field on this generator exists precisely so an advance receipt reads as part of a larger account rather than a closed transaction.',
      ],
    },
    {
      heading: 'Cheque Payments: Receipt Now, Confirm on Realisation',
      paragraphs: [
        'A cheque is a promise, not money — it can bounce. The long-standing convention, reflected in this tool’s default terms, is to issue the receipt when the cheque is handed over but mark it "subject to realisation". The receipt records the cheque number and date; if the cheque clears, the receipt stands, and if it bounces, the noted condition means the receipt does not prove payment.',
        'For high-value cheque collections, note the drawee bank alongside the cheque number in the transaction field, and follow up with a confirmation message once the amount is credited. For UPI and bank transfers this problem does not exist — the transaction reference on the receipt is already proof of an irreversible credit.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Is a payment receipt legally required?',
      a: 'For most transactions there is no statute forcing you to issue one, but customers are entitled to proof of payment, and under GST a receipt voucher is expected for advances on services. Practically, a numbered receipt series is basic financial hygiene — it is your defence in any "I already paid" dispute.',
    },
    {
      q: 'What is the difference between a receipt and a "Paid" invoice?',
      a: 'A paid invoice shows the charge with its status flipped; a receipt documents the payment event itself — date received, mode, transaction reference and balance remaining. Accountants prefer receipts because they map one-to-one onto bank statement entries. Ideally issue both: the invoice from the Invoice Maker, the receipt from this tool.',
    },
    {
      q: 'Can I issue a receipt for a partial payment?',
      a: 'Yes. Enter the amount actually received as the line item, reference the invoice, and use the Balance Due field to show what remains outstanding. Each subsequent instalment gets its own receipt with an updated balance, giving the customer a clear running account.',
    },
    {
      q: 'How should I record a UPI payment on the receipt?',
      a: 'Select UPI as the payment mode and paste the 12-digit UPI transaction reference (visible in GPay, PhonePe or Paytm under transaction details) into the Transaction ID field. That reference lets either party locate the exact credit in a bank statement.',
    },
    {
      q: 'Does the receipt show the amount in words?',
      a: 'Yes — for INR receipts the grand total is automatically written out in words in the Indian numbering style (lakh, crore), which is the accepted convention on formal money receipts in India.',
    },
    {
      q: 'Can I use this for rent or fee receipts?',
      a: 'Absolutely. Describe the line item as, for example, "Rent for March 2026 — Flat 402" or "Tuition fee, Term 2", pick the mode, and download. Tenants commonly need exactly this format for HRA claims with their employer.',
    },
    {
      q: 'Should I charge GST on a payment receipt?',
      a: 'A receipt records a payment, not a fresh supply, so it does not add tax on top — this tool defaults the receipt to no-tax mode. Tax lives on the underlying invoice. The exception is a GST receipt voucher for service advances, where tax on the advance is accounted for; consult your accountant for that treatment.',
    },
    {
      q: 'Is the receipt generator free and private?',
      a: 'Yes on both counts. Unlimited receipts, all templates, PDF and PNG downloads, no watermark, no account. Your data is stored only in your browser’s local storage and never reaches our servers unless you explicitly create a share link.',
    },
  ],
  related: ['invoice', 'quotation', 'gst-invoice', 'credit-note', 'estimate', 'proforma-invoice'],
};
