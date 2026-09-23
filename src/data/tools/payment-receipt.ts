import type { ToolContent } from './types';

export const paymentReceiptContent: ToolContent = {
  id: 'payment-receipt',
  seo: {
    title: 'Free Payment Receipt Generator — Create Receipt Online with UPI & Bank Details',
    description:
      'Generate professional payment receipts online — free. Record payment mode, transaction ID, amount received and balance due, then download a print-ready receipt PDF instantly. No signup.',
    published: '2026-02-18',
    updated: '2026-08-07',
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
  badge: {
    label: 'Payment Proof',
    colorClass: 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300 border border-teal-300 dark:border-teal-700',
  },
  theme: 'teal',
  layout: {
    hero: 'receipt',
    howTo: 'timeline',
    features: 'alternating',
    useCases: 'columns',
    example: 'paper',
    whatIs: 'sidebar',
    headingStyle: 'bar',
    headingMarker: '✓',
  },
  order: [
    'whatIs',
    'custom',
    'howTo',
    'proTips',
    'features',
    'widget',
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
    'UPI, NEFT, RTGS, cheque and cash modes',
    'Records the UTR or transaction reference',
    'Links to the invoice it settles',
    'Shows the balance still outstanding',
  ],
  widget: 'payment-modes',
  relatedBlogSlugs: [
    'payment-terms-in-quotations',
    'free-invoice-maker-online-guide',
    'business-documentation-guide',
  ],
  customBlocks: [
    {
      kind: 'table',
      heading: 'What to Record for Each Payment Mode',
      intro:
        'A receipt is only as useful as the reference it carries. Six months later, "paid by transfer" proves nothing — the reference below is what lets either side trace the payment in a bank statement.',
      columns: ['Mode', 'Reference to record', 'When it is actually settled'],
      rows: [
        [
          'UPI',
          'The 12-digit UTR, plus the payer VPA. The app\'s own transaction ID alone is not traceable by the bank.',
          'Instantly, and irreversibly. There is no recall once credited.',
        ],
        [
          'NEFT',
          'The UTR from the remitter\'s advice, and the remitting bank name.',
          'In half-hourly batches. Same-day for transfers sent well before the cut-off.',
        ],
        [
          'RTGS',
          'The UTR. Used for ₹2 lakh and above, with no upper limit.',
          'In near real time during banking hours, and final on credit.',
        ],
        [
          'IMPS',
          'The RRN or transaction reference, plus the sender\'s mobile or account number.',
          'Instantly, including outside banking hours and on holidays.',
        ],
        [
          'Cheque',
          'Cheque number, date, drawee bank and branch.',
          'Only on realisation — typically one to three working days. Never before.',
        ],
        [
          'Demand draft',
          'DD number, issuing bank and branch, and the date of issue.',
          'On presentation and credit. Safer than a cheque but still not instant.',
        ],
        [
          'Card',
          'The last four digits and the acquirer\'s approval or RRN code. Never the full card number.',
          'On authorisation, though settlement to your account follows in one to three days.',
        ],
        [
          'Cash',
          'Who handed it over, who received it, and a signature on your counterfoil.',
          'Immediately. Note that Section 269ST bars receiving ₹2 lakh or more in cash from one person in a day or against a single transaction.',
        ],
      ],
      note:
        'Cross-reference the invoice number on every receipt. Where a customer has several bills open, a payment with no invoice reference gets applied to the wrong one, and the reconciliation to unpick that costs more than the receipt saved.',
    },
    {
      kind: 'callout',
      tone: 'info',
      heading: 'Advance, Part Payment and Full Settlement Are Not the Same Receipt',
      paragraphs: [
        'An advance is money taken before you supply anything. Under GST an advance received against services creates a liability in the month you receive it, and the correct document is a receipt voucher carrying the rate, the amount and the place of supply — not an ordinary receipt. When you eventually supply, the advance is adjusted against the tax invoice. For goods, advances do not attract tax at the point of receipt.',
        'A part payment is money against an invoice already issued. Nothing new happens for tax — the liability arose when you invoiced. What matters here is arithmetic: the receipt should show the invoice total, the amount now received, everything received earlier, and the balance still outstanding. Leave the balance off and you will be arguing about it later.',
        'A full settlement closes the invoice. Say so explicitly — "received in full and final settlement of INV-2026-0042" — because a receipt that merely records an amount does not, by itself, establish that nothing further is owed. Where you have agreed to write off a small shortfall, record that too, or your ledger and the customer\'s will disagree permanently.',
        'One caution on cheques: date the receipt for realisation, not for handover, or mark it "subject to realisation". A receipt issued the moment a cheque is handed over is evidence of payment, and if that cheque bounces you have signed a document contradicting your own claim.',
      ],
    },
  ],
  whatIs: {
    heading: 'What Is a Payment Receipt and When Should You Issue One?',
    paragraphs: [
      'A payment receipt is written proof that money changed hands. Where an invoice asks for payment, a receipt confirms it arrived — stating who paid, how much, on what date, by which mode (UPI, bank transfer, cash, cheque or card), and against which invoice or order. It is the closing bracket of a transaction, and the document your customer files to prove they have settled their side.',
      'Receipts matter more than most small businesses realise. Customers need them to claim expenses, reconcile their own books and defend themselves in payment disputes. You need them because a numbered receipt series is the cleanest record of your actual collections — especially for cash, where no bank statement exists to fall back on. For advances received before delivery, a receipt is often the only paper trail until the final invoice is raised.',
      'A complete receipt carries a unique receipt number and date, your business details, the payer\'s name, the amount in figures and words, the payment mode with its transaction reference (UTR, UPI reference or cheque number), the invoice it settles, and any balance still outstanding. This generator structures all of it and prints the amount in words automatically for INR.',
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
        text: 'Cash leaves no bank trail, so a numbered receipt is the only proof of collection — for the customer\'s records and for your own daily cash reconciliation.',
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
      'The receipt is numbered REC-2026-0009, dated the day the UPI credit landed, and shows the amount in words — One Lakh Fifty Thousand Rupees Only. The client files it with the signed quotation; the designer\'s final invoice will reference both, and a second receipt will close the account after handover.',
  },
  sections: [
    {
      heading: 'Receipt vs Invoice: Two Sides of the Same Payment',
      paragraphs: [
        'An invoice and a receipt bracket a transaction from opposite ends. The invoice comes first and says "you owe this"; the receipt comes last and says "you paid this". Sending a "Paid" invoice is common, but it is not a substitute for a receipt: the receipt names the payment mode and transaction reference, which the invoice cannot know in advance, and it is the document a customer\'s auditor actually wants to see against each settled bill.',
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
        'A cheque is a promise, not money — it can bounce. The long-standing convention, reflected in this tool\'s default terms, is to issue the receipt when the cheque is handed over but mark it "subject to realisation". The receipt records the cheque number and date; if the cheque clears, the receipt stands, and if it bounces, the noted condition means the receipt does not prove payment.',
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
      a: 'Yes on both counts. Unlimited receipts, all templates, PDF and PNG downloads, no watermark, no account. Your data is stored only in your browser\'s local storage and never reaches our servers unless you explicitly create a share link.',
    },
    {
      q: 'What is the difference between a payment receipt and a tax invoice?',
      a: 'An invoice is a demand for payment — it tells the buyer what they owe, when it is due and how to pay. A payment receipt is issued after money is received — it confirms that payment has been made and closes the transaction. They are legally separate documents: an invoice creates a receivable in your books, and the receipt extinguishes it. For audited businesses, having both is essential because the invoice proves entitlement to the money and the receipt proves it was collected.',
    },
    {
      q: 'Is there a legal limit on accepting cash without triggering tax provisions?',
      a: 'Yes. Section 269SS of the Income Tax Act prohibits accepting a loan, deposit or advance in cash above Rs 20,000 from a single person on a single day. Section 269T prohibits repaying any loan or deposit above Rs 20,000 in cash. Section 40A(3) of the IT Act disallows business expenditure paid in cash above Rs 10,000 per day per person as a tax deduction. For sales receipts (not loans), there is no hard legal ceiling, but the Rs 2 lakh limit under Section 269ST restricts receiving Rs 2 lakh or more in cash from a single person in a single transaction or within a day.',
    },
    {
      q: 'What is Section 269ST and how does it affect cash receipts?',
      a: 'Section 269ST of the Income Tax Act prohibits any person from receiving Rs 2 lakh or more in cash from a single person in a single transaction, in aggregate from a single person in a day, or in respect of a single event or occasion. A penalty equal to the amount received applies if violated. This effectively caps large cash sales and collections at Rs 1,99,999 per customer per day — anything above must be received through banking channels.',
    },
    {
      q: 'Can I issue a payment receipt for a UPI payment?',
      a: 'Yes, and for UPI transactions it is good practice even though a bank credit notification is generated automatically. A formal receipt with your letterhead, the invoice number, the UPI transaction reference (UTR), the date and the exact amount provides a professional document the payer can retain for expense claims or audit. It also eliminates any confusion if the UPI notification is delayed or the customer changes phones.',
    },
    {
      q: 'Should I issue a separate receipt for each instalment in a multi-payment arrangement?',
      a: 'Yes. Issue one receipt per payment, each referencing the invoice number and specifying whether it is the advance, first instalment, balance payment, or whatever tranche it represents. A running total on each receipt showing the total invoiced amount, amounts received to date and the balance outstanding is the most useful format for both parties.',
    },
    {
      q: 'Is a payment receipt a GST document?',
      a: 'No. A payment receipt is purely a commercial document confirming money received — it does not create or reverse any GST liability and confers no input tax credit entitlement. GST obligations are governed by the tax invoice and credit note, not by receipts. However, when you receive an advance payment for a taxable supply, you may need to issue a receipt-cum-advance invoice that does carry GST — consult your CA for the correct treatment in your specific case.',
    },
    {
      q: 'What should a receipt show when payment is received against multiple invoices?',
      a: 'List each invoice number and the amount applied to it in separate rows, then show the total received. This is standard practice for clearing outstanding statements: the customer sends one payment to settle three invoices, and the receipt breaks down the allocation so both parties\' books can be updated correctly and reconciliation at year-end is straightforward.',
    },
    {
      q: 'Can I issue a receipt before the payment clears in my bank account?',
      a: 'For NEFT and RTGS transfers, a receipt is normally issued once the transaction confirmation arrives, which is typically on the same day. For cheques, best practice is to issue the receipt once the cheque clears — not on the date of receiving the cheque. Noting "Subject to realisation" on a cheque receipt is common in trade, giving you the right to cancel the receipt if the cheque bounces.',
    },
    {
      q: 'Does a receipt need to be on letterhead or can it be handwritten?',
      a: 'A handwritten receipt on plain paper is legally valid in India. However, a printed receipt on letterhead with a unique sequential number, your business details, and the transaction details is far more professional, is harder to dispute, and is required by the accounts teams of most corporate clients. For businesses issuing more than a handful of receipts per month, a digital receipt system is the practical standard.',
    },
    {
      q: 'What is a UTR number and should it appear on a receipt for NEFT or RTGS?',
      a: 'UTR stands for Unique Transaction Reference — it is a 22-character alphanumeric code that identifies every NEFT or RTGS transaction in the Indian banking system. Yes, the UTR should appear on every receipt for a bank transfer payment — it is the reference that allows both parties to independently verify the transaction with their banks, and it is what an auditor or accounts team will request if a payment is disputed.',
    },
    {
      q: 'How long should I retain payment receipt copies?',
      a: 'Retain payment receipts for at least six years from the end of the financial year in which the payment was received — consistent with the income tax record-keeping requirement under Section 44AA. For large corporate or government transactions, retain for eight years or until any audit or legal matter relating to that transaction is fully resolved. Digital receipt copies backed up to cloud storage are sufficient provided they are unaltered and retrievable.',
    },
    {
      q: 'Can a client demand a receipt for a payment they made three months ago?',
      a: 'Yes, and you should be able to provide one. A receipt can be issued or reissued at any time — date it as the actual date of payment, not the date you are issuing it, and mark it "Duplicate" if it is a reissue. Your sequential receipt numbering will show that this receipt\'s number falls within the correct date range even if it is being reprinted today.',
    },
  ],
  relatedHeading: 'What Comes Before the Money Arrives',
  relatedNote:
    'A receipt closes a cycle that a quotation opened and an invoice billed.',
  related: ['invoice', 'quotation', 'gst-invoice', 'credit-note', 'estimate', 'proforma-invoice'],

  proTips: {
    heading: 'Payment Receipt Best Practices That Protect Both Parties',
    items: [
      {
        icon: '💳',
        title: 'Always record the exact payment mode and transaction reference',
        text: 'A receipt that says "Cash received" is legally sufficient but weak. One that says "UPI credit — UTR 4471 8820 3311 — GPay" is traceable in a bank statement. For NEFT/RTGS, use the bank\'s transaction reference. This single field has resolved thousands of “I already paid” disputes without involving anyone else.',
      },
      {
        icon: '🏠',
        title: 'Issue a receipt for rent within 3 days of receiving payment',
        text: 'Tenants who are salaried employees need a rent receipt to claim HRA exemption from their employer. Issue it promptly after each monthly payment. Include the flat number, address, period (April 2026), amount and the landlord\'s PAN if the annual rent exceeds ₹1 lakh — the employer requires PAN for rent above this threshold.',
      },
      {
        icon: '🔗',
        title: 'Always reference the invoice or contract number on the receipt',
        text: 'A receipt without a reference to the underlying invoice is an island. It tells you money moved but not why. Noting INV-2026-0042 and the original amount on the receipt allows both parties to reconcile outstanding balances at a glance and gives the receipt legal context in any dispute.',
      },
      {
        icon: '💬',
        title: 'Print the outstanding balance after a part payment',
        text: 'If a customer pays 50% and will pay the rest on delivery, print both the received amount and the remaining balance due on the receipt. The customer knows exactly what they owe without calculating; you have a paper trail for the follow-up collection.',
      },
      {
        icon: '🏷️',
        title: 'Number receipts sequentially just like invoices',
        text: 'REC-2026-001, REC-2026-002, and so on. Random or unnumbered receipts make it impossible to confirm whether every payment received has been acknowledged. A sequential series also makes monthly reconciliation — matching receipts to bank credits — a straightforward exercise.',
      },
      {
        icon: '⏰',
        title: 'Issue an advance receipt immediately, before work starts',
        text: 'When you collect an advance payment, issue the receipt that day — before any work begins. It sets the professional tone, gives the client documentary proof of their payment, and removes any ambiguity about whether the advance was received at all, which is the most common misunderstanding at project close.',
      },
    ],
  },

  mistakes: {
    heading: 'Payment Receipt Mistakes That Create Accounting and Legal Problems',
    intro:
      'These errors are common across freelancers, service providers, landlords and small retailers. Each one creates a dispute risk that a properly written receipt would have eliminated.',
    items: [
      {
        mistake: 'No transaction reference number',
        impact: 'Cannot trace the payment in a bank statement; dispute is impossible to resolve quickly.',
        fix: 'Record the UTR (NEFT/RTGS), transaction ID (UPI), or cheque number on every receipt.',
      },
      {
        mistake: 'No reference to the original invoice',
        impact: 'Receipt is unconnected to the billing; both parties must manually reconcile.',
        fix: 'Add the invoice number, invoice date and the original billed amount to every receipt.',
      },
      {
        mistake: 'Issuing a receipt before payment clears',
        impact: 'Cheque bounces or UPI fails after receipt is issued — documentation is wrong.',
        fix: 'Issue receipts only after the credit appears in your bank account or UPI notification.',
      },
      {
        mistake: 'No receipt number',
        impact: 'Cannot track how many payments were acknowledged or identify gaps.',
        fix: 'Use a sequential receipt series — REC-2026-001 — and never reuse a number.',
      },
      {
        mistake: 'Amount in figures only, no amount in words',
        impact: 'Figure can be contested; amount in words is the legally binding version.',
        fix: 'Always print “Rupees Forty-Five Thousand Only” alongside the ₹45,000 figure.',
      },
      {
        mistake: 'No signatory or company stamp',
        impact: 'Unsigned receipt has limited legal standing in a payment dispute.',
        fix: 'Add your authorised signature image or company stamp before downloading the PDF.',
      },
    ],
  },
  industries: {
    heading: 'How Different Industries Use Payment Receipts',
    intro: 'A receipt closes the transaction — but what it must document and who needs it varies significantly across sectors.',
    items: [
      {
        name: 'Construction & Civil Work',
        icon: 'HardHat',
        text: 'Contractors issue receipts for milestone advance payments and release payments tied to RA bills. The receipt cross-references the RA bill number and records whether the payment includes retention money release.',
        detail: 'Note the running recovery of any mobilisation advance on each receipt so the running account balance is clear to both the client\'s project manager and their auditor.',
      },
      {
        name: 'IT Services & Agencies',
        icon: 'Laptop',
        text: 'IT companies issue receipts against project advances and milestone payments, referencing the SOW or project number. Corporate clients require the receipt to reference their internal payment reference number for three-way matching.',
        detail: 'Include the bank\'s UTR or payment reference number on every IT services receipt — corporate accounts teams close their payable entries against UTRs, and receipts without this reference sit unmatched.',
      },
      {
        name: 'Medical & Healthcare',
        icon: 'Stethoscope',
        text: 'Hospitals and clinics issue receipts for consultation fees, procedure deposits and pharmacy payments. For insurance-linked treatments, the receipt must show whether the patient paid out-of-pocket or through an insurer.',
        detail: 'Medical receipts should show the name of the patient separately from the payer when they differ — a corporate health insurance payer requires this for claim processing and employee reimbursement.',
      },
      {
        name: 'Retail & Cash Sales',
        icon: 'Store',
        text: 'Retail shops issue POS receipts for every cash and card transaction. For high-value retail (jewellery, electronics, furniture), a formal receipt with the item description, serial number and GST breakup is required for warranty claims.',
        detail: 'For cash sales above Rs 2 lakh, get the buyer\'s PAN on the receipt — Section 114B of the Income Tax Act requires high-value cash transactions to be reported, and the PAN protects both seller and buyer in any audit.',
      },
      {
        name: 'Education & Institutions',
        icon: 'GraduationCap',
        text: 'Schools and colleges issue official fee receipts for tuition, examination and hostel payments. These receipts are used by students for tax exemption claims (Section 80C), scholarship applications and employer reimbursements.',
        detail: 'Educational institution receipts should state the academic year and the head of fee separately (tuition, lab, exam) — students and scholarship committees need this breakdown for eligibility verification.',
      },
      {
        name: 'Hospitality & Hotels',
        icon: 'UtensilsCrossed',
        text: 'Hotels issue folio receipts at checkout and advance payment receipts for banquet bookings. Corporate guests require a GST-compliant receipt with their company GSTIN to claim ITC on accommodation expenses.',
        detail: 'For corporate hospitality receipts, split the folio into room charges, F&B and other charges as separate lines — without this breakdown a corporate finance team cannot determine which expenses are ITC-eligible.',
      },
      {
        name: 'Automobile Services',
        icon: 'Car',
        text: 'Service centres issue receipts for advance deposits on repairs, balance payments on job completion, and annual maintenance contract payments. Vehicle buyers receive receipts for booking amounts, advance payments and final settlement.',
        detail: 'Automobile service receipts should reference the job card number and vehicle registration number — without these, the customer cannot link the receipt to the specific repair event for warranty or insurance claims.',
      },
      {
        name: 'Interior Design & Projects',
        icon: 'Sofa',
        text: 'Interior designers issue receipts for design retainers, material procurement advances, and milestone payments. The receipt structure mirrors the proforma invoice stages: design, procurement, execution, and handover.',
        detail: 'Number interior design receipts in a project-specific series rather than a single company series — it makes project-level payment tracking transparent for both the designer and the client.',
      },
      {
        name: 'Freelancing & Consulting',
        icon: 'User',
        text: 'Freelancers issue receipts for project advances and final payments, usually on the same day the bank transfer arrives. The receipt references the invoice and may include the balance if a portion is still outstanding.',
        detail: 'For freelancers working with multiple clients, use a single sequential receipt series across all clients — it makes income reconciliation clean at tax time and signals professionalism to corporate clients who require receipt numbers for bookkeeping.',
      },
      {
        name: 'Manufacturing & Supply',
        icon: 'Factory',
        text: 'Manufacturers acknowledge advance payments against proforma invoices with formal receipts. For high-volume distributors, receipts are auto-generated against incoming RTGS/NEFT credits and sent with the day\'s dispatch documents.',
        detail: 'Manufacturer receipts for advance against custom orders should state the tentative delivery date to which the advance applies — without this, the customer has no basis for a specific performance claim if delivery is delayed.',
      },
    ],
  },

  references: {
    heading: 'Income Tax and Payment Law References',
    intro: 'These primary sources govern cash transaction limits, receipt obligations and banking rules that apply when issuing payment receipts.',
    items: [
      { label: 'Income Tax Act — Section 269ST: Cash Receipt Limit', url: 'https://incometaxindia.gov.in', note: 'Prohibits receiving Rs 2 lakh or more in cash from a single person in a day or per transaction; penalty equals the amount received.' },
      { label: 'Income Tax Act — Section 269SS: Cash Loan Restrictions', url: 'https://incometaxindia.gov.in', note: 'Prohibits accepting any loan, deposit or advance in cash above Rs 20,000; relevant when receipts document advance payments.' },
      { label: 'Income Tax Act — Section 44AA: Record-Keeping', url: 'https://incometaxindia.gov.in', note: 'Specifies the obligation to maintain books of account including receipts and the six-year minimum retention period.' },
      { label: 'RBI — NEFT and RTGS Operating Procedures', url: 'https://rbi.org.in', note: 'Defines the UTR reference number format for NEFT and RTGS transactions, which should appear on payment receipts for bank transfers.' },
      { label: 'CGST Act — Advance Payment and Tax Liability', url: 'https://cbic-gst.gov.in', note: 'Section 12 clarifies that for goods, GST on advance payment is due at the time of receipt; receipts for advances must be carefully worded to comply.' },
    ],
  },
};
