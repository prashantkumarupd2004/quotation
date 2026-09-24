import type { BlogPost } from '@/data/blog-types';

/**
 * Group 7 Ã¢â‚¬â€ compliance and money-collection guides. These cover the questions
 * that come up *after* a document is issued (getting paid, TDS, e-way bills,
 * record keeping) rather than how to write one, so they don't cannibalise the
 * format guides in groups 1Ã¢â‚¬â€œ6.
 */
export const blogPosts7: BlogPost[] = [
  {
    slug: 'proforma-invoice-format-guide',
    title: 'Proforma Invoice: What It Is, When to Send One, and the Format That Works',
    seoTitle: 'Proforma Invoice Format 2026 | Meaning, Sample & Free Proforma Invoice Maker India',
    metaDescription:
      'What is a proforma invoice, how it differs from a tax invoice, when Indian exporters and suppliers should send one, mandatory fields, GST treatment and a free proforma invoice generator.',
    keywords: [
      'proforma invoice',
      'proforma invoice format',
      'proforma invoice meaning',
      'proforma invoice vs tax invoice',
      'proforma invoice for advance payment',
      'proforma invoice format in excel',
      'proforma invoice maker free',
      'proforma invoice for export India',
    ],
    date: '2026-08-06',
    updatedDate: '2026-09-24',
    author: 'Prashant Upadhyay',
    readingTime: 9,
    category: 'Invoicing',
    heroImage: '/blog/proforma-invoice.svg',
    heroAlt: 'Proforma invoice format comparison showing it is not a tax invoice',
    excerpt:
      'A proforma invoice is what you send when the customer needs a bill-shaped document but the sale has not happened yet. Get the timing wrong and you create a tax liability you did not intend.',
    intro:
      'Ask ten small business owners what a proforma invoice is and you will get four answers: a quotation, a fake invoice, an advance payment request, and "the thing the bank asked for". All four are partly right, which is exactly the problem. A proforma invoice sits in a specific slot in the sales cycle Ã¢â‚¬â€ after the customer has broadly agreed, before the goods or services have been supplied Ã¢â‚¬â€ and it exists because buyers frequently need an invoice-shaped document to release money, open a letter of credit, or clear an internal approval. Send one at the right moment and it unblocks payment. Send one in place of a tax invoice and you have a compliance problem. Here is the full picture.',
    sections: [
      {
        heading: 'What a proforma invoice actually is',
        body: 'A proforma invoice is a preliminary bill of sale. It looks like an invoice, it is priced like an invoice, and it lists taxes like an invoice Ã¢â‚¬â€ but it is issued before the supply takes place, so it creates no demand for payment that a court would enforce and no tax liability under GST. Think of it as a written commitment: "if you buy on these terms, this is exactly what the final bill will say."\n\nThat last part is what makes it useful. A quotation invites the buyer to consider. A proforma invoice tells the buyerÃ¢â‚¬â„¢s accounts department the precise figure to process. In practice, businesses send one when the deal is agreed in principle and the buyer needs paperwork to move money Ã¢â‚¬â€ an advance transfer, an internal purchase requisition, a customs pre-check, or a bank facility.',
      },
      {
        heading: 'Proforma invoice vs quotation vs tax invoice',
        body: 'All three documents carry prices, and people use the names interchangeably, which causes genuine confusion in audits. The clean distinction is timing and intent.\n\nA quotation is an offer. It is negotiable, it carries a validity period, and its whole purpose is to win the order. A proforma invoice comes next: the price is now settled, the document is formatted like a final bill, and it is issued so the buyer can act Ã¢â‚¬â€ usually by paying an advance. The tax invoice comes last, at or after supply. Only the tax invoice creates a payable, only the tax invoice passes input tax credit to the buyer, and only the tax invoice enters your GSTR-1.',
        bullets: [
          'Quotation Ã¢â‚¬â€ before agreement, negotiable, has a validity date, wins the order',
          'Proforma invoice Ã¢â‚¬â€ after agreement, before supply, unblocks advance payment or approvals',
          'Tax invoice Ã¢â‚¬â€ at or after supply, legally payable, carries input tax credit',
          'Only the tax invoice is reported in GST returns',
        ],
      },
      {
        heading: 'The fields a proforma invoice should carry',
        body: 'Because the buyer will use your proforma to create a purchase entry, it needs to mirror the eventual invoice closely enough that nothing changes later. Include your business name, address and GSTIN; the buyerÃ¢â‚¬â„¢s full billing details; a proforma number and date; a validity date (proforma prices should expire, exactly like quotations); an itemised list with quantity, unit and rate; the tax breakup shown the way it will appear on the final invoice; delivery terms and expected timeline; and your bank or UPI details if you are collecting an advance.\n\nTwo things must be visible at a glance. First, the words "PROFORMA INVOICE" as the document title Ã¢â‚¬â€ never just "Invoice", because a buyer who books it as a tax invoice will claim credit they are not entitled to. Second, a line stating that this is not a tax invoice and that a tax invoice will follow on supply. Those two elements prevent almost every problem proforma invoices cause.',
      },
      {
        heading: 'GST treatment: why the timing matters',
        body: 'A proforma invoice does not trigger GST liability, because liability arises on the time of supply Ã¢â‚¬â€ broadly, the earlier of issuing the tax invoice or receiving payment for goods and services under the current rules for most suppliers. That word "payment" is the trap. If your customer pays an advance against your proforma, the money has been received, and for services the liability point has arrived. You then issue a receipt voucher for the advance and account for the tax accordingly.\n\nSo the practical sequence for an advance-paid order is: proforma invoice Ã¢â€ â€™ customer pays Ã¢â€ â€™ receipt voucher for the advance Ã¢â€ â€™ goods or services supplied Ã¢â€ â€™ tax invoice for the full value, showing the advance adjusted. Skipping the receipt voucher is the single most common error, and it is the one that shows up in reconciliation.',
      },
      {
        heading: 'Where proforma invoices are genuinely required',
        body: 'Exports are the biggest use case. A foreign buyer typically cannot open a letter of credit or arrange a bank transfer without a document describing the goods, HS codes, quantities, Incoterms, port of loading and total value. That document is the proforma invoice, and it is standard practice worldwide. Indian exporters also use it for pre-shipment inspection arrangements and for buyers applying for import licences.\n\nDomestically, three situations recur. Corporate buyers whose systems need an invoice number before raising a payment request. Government and institutional buyers whose sanction process runs on a formal priced document. And any customer paying a deposit before you start work Ã¢â‚¬â€ a fabricator ordering material, a designer booking a slot, an event supplier holding a date.',
      },
      {
        heading: 'Creating a proforma invoice free, in a couple of minutes',
        body: 'A free proforma invoice maker gives you the correct document title, a separate numbering series (PI-2026-0001 keeps it away from your invoice series), a validity field, per-item GST that mirrors the final invoice, and a clear "not a tax invoice" declaration. Add your logo, terms and signature, download the PDF and send it.\n\nWhen the order converts, do not edit the proforma Ã¢â‚¬â€ issue a fresh tax invoice with its own number and reference the proforma number on it. Keeping both documents on file, linked by reference, is what lets you reconstruct any deal a year later when someone asks why the price changed.',
      },
    ],
    faqs: [
      {
        q: 'Is a proforma invoice legally binding?',
        a: 'Not as a demand for payment. It is a firm offer on stated terms, so it binds you to the price for its validity period, but it does not create a receivable in your books and the buyer is not obliged to pay it. Enforceability arrives with the tax invoice after supply.',
      },
      {
        q: 'Can I claim input tax credit on a proforma invoice?',
        a: 'No. Input tax credit requires a valid tax invoice or debit note. If a supplier sends you only a proforma, ask for the tax invoice once the goods or services are delivered Ã¢â‚¬â€ your credit depends on it appearing in your GSTR-2B.',
      },
      {
        q: 'Should a proforma invoice show GST?',
        a: 'Yes, show the tax exactly as it will appear on the final invoice. The whole purpose of the document is to tell the buyer the full amount they will need to pay, and hiding tax leads to "the price went up" arguments at invoicing time.',
      },
      {
        q: 'What number series should a proforma invoice use?',
        a: 'A separate one Ã¢â‚¬â€ PI- or PRO- prefixed. Mixing proformas into your tax invoice series breaks the consecutive numbering that GST requires and creates gaps that are hard to explain later.',
      },
      {
        q: 'Can a proforma invoice be cancelled or revised?',
        a: 'Freely. Since it has no tax or accounting effect, you can reissue it with a new number and a note superseding the earlier one. That flexibility is precisely why proforma invoices exist as a separate document type.',
      },
    ],
    references: [
      { label: 'GST Portal Ã¢â‚¬â€ Proforma Invoice Rules', url: 'https://www.gst.gov.in' },
      { label: 'CBIC Ã¢â‚¬â€ Invoice Rules 2017', url: 'https://www.cbic.gov.in' },
    ],
    relatedSlugs: ['invoice-vs-quotation', 'gst-invoice-rules-guide', 'free-invoice-maker-online-guide'],
  },

  {
    slug: 'payment-receipt-format-guide',
    title: 'Payment Receipt Format: What to Put on a Money Receipt (and Why It Protects You)',
    seoTitle: 'Payment Receipt Format India 2026 | Money Receipt Sample & Free Receipt Generator',
    metaDescription:
      'The correct payment receipt format for Indian businesses Ã¢â‚¬â€ mandatory details, cash receipt limits under Section 269ST, advance receipt vouchers under GST, revenue stamp rules and a free receipt maker.',
    keywords: [
      'payment receipt format',
      'money receipt format',
      'cash receipt format India',
      'receipt voucher gst',
      'advance payment receipt',
      'section 269st cash limit',
      'rent receipt format',
      'payment receipt generator free',
    ],
    date: '2026-08-13',
    updatedDate: '2026-09-24',
    author: 'Prashant Upadhyay',
    readingTime: 8,
    category: 'Payments',
    heroImage: '/blog/advance-payment.svg',
    heroAlt: 'Payment receipt format showing receipt number, amount and acknowledgment',
    excerpt:
      'Most payment disputes are not about whether money was owed Ã¢â‚¬â€ they are about whether it was paid. A proper receipt ends that argument before it starts.',
    intro:
      'A receipt is the least glamorous document your business produces and the one you will be most grateful for. Customers forget payments. Staff leave with cash-collection records in their heads. Bank statements show a transfer but not which of four pending bills it settled. Every one of those situations becomes a two-hour argument without a receipt and a thirty-second lookup with one. There are also hard rules attached Ã¢â‚¬â€ cash limits under the Income Tax Act, receipt vouchers under GST, and stamp requirements that still surprise people. This guide covers the format, the law and the habits.',
    sections: [
      {
        heading: 'What belongs on a payment receipt',
        body: 'A receipt has one job: prove that a specific person paid a specific amount to a specific business on a specific date, against a specific bill. Every field follows from that. You need a receipt number and date, your business name and address, the payerÃ¢â‚¬â„¢s name, the amount in figures and in words, the payment mode (cash, UPI, NEFT, cheque, card), a reference for that mode Ã¢â‚¬â€ UTR number, cheque number, UPI transaction ID Ã¢â‚¬â€ and the invoice or bill number the payment is being applied to.\n\nTwo fields do disproportionate work. Linking the receipt to an invoice number is what stops the "which bill did that Ã¢â€šÂ¹50,000 settle?" conversation. And recording the balance still outstanding after this payment turns your receipts into a running ledger the customer has already acknowledged.',
        bullets: [
          'Receipt number and date, with your business details',
          'Payer name and the invoice or bill number being settled',
          'Amount in figures and in words',
          'Payment mode plus its reference Ã¢â‚¬â€ UTR, cheque number or UPI ID',
          'Balance outstanding after this payment',
          'Signature of the person receiving the money',
        ],
      },
      {
        heading: 'Cash receipts and the Ã¢â€šÂ¹2 lakh limit you must not cross',
        body: 'Section 269ST of the Income Tax Act prohibits receiving Ã¢â€šÂ¹2,00,000 or more in cash from a single person in a single day, in respect of a single transaction, or in respect of transactions relating to one event or occasion. The penalty under Section 271DD falls on the receiver and equals the amount received. Not a percentage of it Ã¢â‚¬â€ the whole amount.\n\nThe rule catches people who think splitting helps. Taking Ã¢â€šÂ¹2.5 lakh as five payments of Ã¢â€šÂ¹50,000 across five days against one bill still relates to a single transaction, and it is still a violation. If a customer wants to pay a large amount in cash, the answer is to route it through the bank. Your receipt should always record the mode honestly, because a receipt that says "cash" for a bank transfer is a document you will regret.',
      },
      {
        heading: 'Advance payments and the GST receipt voucher',
        body: 'When you take money before supplying, GST law asks for a receipt voucher rather than an ordinary receipt. It must carry your name, address and GSTIN; a serial number; the date; the payerÃ¢â‚¬â„¢s details; a description of the goods or services; the amount received; the rate and amount of tax; the place of supply for inter-state transactions; and whether tax is payable on reverse charge.\n\nIf the rate or the nature of supply is not known when the advance arrives, the rules provide defaults Ã¢â‚¬â€ treat the rate as 18% and, where the supply type is unclear, treat it as inter-state. When the deal is later completed, the advance is adjusted against the tax invoice. If the deal falls through and you refund the advance, issue a refund voucher referencing the original receipt voucher.',
      },
      {
        heading: 'Revenue stamps, signatures and rent receipts',
        body: 'The old rule still applies: a receipt for cash exceeding Ã¢â€šÂ¹5,000 requires a one-rupee revenue stamp affixed and signed across under the Indian Stamp Act. It is widely ignored and rarely enforced, but it matters in exactly the situation where the receipt matters Ã¢â‚¬â€ when the document is produced as evidence in a dispute. Stamps are not required for payments made by cheque or electronic transfer.\n\nRent receipts have their own quirk because employees submit them for HRA exemption. A valid rent receipt shows the tenantÃ¢â‚¬â„¢s name, the landlordÃ¢â‚¬â„¢s name and address, the rent amount and period, the property address, the payment mode and the landlordÃ¢â‚¬â„¢s signature. Where annual rent exceeds Ã¢â€šÂ¹1,00,000, the employeeÃ¢â‚¬â„¢s employer will ask for the landlordÃ¢â‚¬â„¢s PAN. Where monthly rent crosses Ã¢â€šÂ¹50,000, the tenant must deduct 5% TDS under Section 194-IB.',
      },
      {
        heading: 'Receipt numbering and the habits that keep records clean',
        body: 'Use one continuous series per financial year, prefixed so it cannot collide with invoices Ã¢â‚¬â€ REC-2026-0001. Never skip, never reuse, and if a receipt is spoiled, mark it cancelled and keep the copy. Auditors read gaps as missing income, and the burden of explaining a gap is entirely yours.\n\nThe operational habits matter as much as the format. Issue the receipt the same day the money arrives, not at month end. Send it to the customer immediately Ã¢â‚¬â€ a WhatsApp or email copy is now the norm and it prevents disputes better than a carbon copy in a book nobody looks at. Where staff collect payments in the field, insist that the customer receives a numbered receipt at the point of collection; unreceipted collection is how cash goes missing in small businesses. And reconcile receipts against your bank statement weekly rather than monthly, while you can still remember what an unexplained credit was for.',
      },
      {
        heading: 'Making receipts in seconds instead of minutes',
        body: 'A free payment receipt generator handles the mechanical parts Ã¢â‚¬â€ sequential numbering, amount in words, mode-specific reference fields, the invoice link and the running balance Ã¢â‚¬â€ and outputs a clean PDF with your logo and signature that you can send on WhatsApp before the customer has left. For advance payments, switch on the GST fields so the document doubles as a compliant receipt voucher. The point is not the aesthetics. It is that a receipt which takes ten seconds to produce actually gets produced every time, and a receipt book that lives in a drawer does not.',
      },
    ],
    faqs: [
      {
        q: 'Is a digital or PDF receipt valid in India?',
        a: 'Yes. Electronic records are recognised under the Information Technology Act, and there is no requirement for a receipt to be on paper. A PDF receipt with a clear number, date, amount and signature image is fully acceptable, and it is far easier to retrieve than a carbon copy.',
      },
      {
        q: 'What is the difference between a receipt and an invoice?',
        a: 'An invoice asks for money and creates a receivable. A receipt confirms money has arrived and reduces that receivable. You need both: the invoice establishes the debt, the receipt discharges it.',
      },
      {
        q: 'Do I need to issue a receipt if the customer paid by UPI?',
        a: 'It is not legally mandatory for every payment, but it is strongly advisable. The UPI reference proves a transfer happened; your receipt proves which bill it settled and what remains due. Recording the UPI transaction ID on the receipt ties both records together.',
      },
      {
        q: 'Can I accept Ã¢â€šÂ¹3 lakh in cash if the customer insists?',
        a: 'No. Section 269ST makes the receiver liable for a penalty equal to the entire amount received. Splitting it across days or bills relating to the same transaction does not help. Ask for a bank transfer or UPI for anything approaching Ã¢â€šÂ¹2 lakh.',
      },
      {
        q: 'How long should I keep payment receipts?',
        a: 'Keep them with your other books of account Ã¢â‚¬â€ at least six years from the end of the relevant assessment year for income tax purposes, and 72 months from the due date of the annual return for GST records. Digital copies are acceptable and are easier to preserve than thermal-printed slips, which fade.',
      },
    ],
    references: [
      { label: 'RBI Ã¢â‚¬â€ Payment Systems Regulation', url: 'https://www.rbi.org.in' },
      { label: 'GST Portal Ã¢â‚¬â€ GST on Advances', url: 'https://www.gst.gov.in' },
    ],
    relatedSlugs: ['payment-terms-in-quotations', 'free-invoice-maker-online-guide', 'record-keeping-for-small-business'],
  },

  {
    slug: 'how-to-recover-late-payments',
    title: 'How to Recover Late Payments: The MSME 45-Day Rule and a Follow-Up System That Works',
    seoTitle: 'Late Payment Recovery India 2026 | MSME 45 Day Rule, Samadhaan & Follow-Up Templates',
    metaDescription:
      'A practical system for recovering overdue payments in India Ã¢â‚¬â€ the MSME 45-day rule and Section 43B(h), interest you are entitled to, MSME Samadhaan filing, follow-up message templates and when to send a legal notice.',
    keywords: [
      'how to recover late payments',
      'msme 45 day payment rule',
      'section 43b(h) msme',
      'msme samadhaan complaint',
      'payment follow up message to client',
      'interest on delayed payment msme',
      'legal notice for non payment',
      'outstanding payment recovery India',
    ],
    date: '2026-08-20',
    updatedDate: '2026-09-24',
    author: 'Prashant Upadhyay',
    readingTime: 11,
    category: 'Payments',
    heroImage: '/blog/late-payments.svg',
    heroAlt: 'Late payment escalation strategy for Indian MSMEs under MSMED Act',
    excerpt:
      'Indian small businesses lose more to slow payers than to bad customers. Since 2024 the law has been on your side Ã¢â‚¬â€ most owners just do not know how to use it.',
    intro:
      'Every small business owner in India knows the feeling: the work was delivered on time, the invoice went out the same week, and three months later the money still has not arrived. You do not want to be rude to a customer you hope to bill again. So you send a polite reminder, then another, and slowly the receivable becomes something you have mentally written off. This is the single biggest cause of cash-flow failure in Indian MSMEs, and it is not primarily a legal problem Ã¢â‚¬â€ it is a process problem with a legal backstop. Since April 2024, that backstop got significantly stronger. Here is how to build the process and when to reach for the law.',
    sections: [
      {
        heading: 'The 45-day rule and why buyers suddenly started paying',
        body: 'Section 15 of the MSMED Act 2006 has always required a buyer to pay a registered micro or small enterprise within the agreed period, and where no period is agreed, within 45 days of acceptance of goods or services. Any written agreement stretching that beyond 45 days is void to that extent. That has been law for nearly two decades, and it was widely ignored.\n\nWhat changed is Section 43B(h) of the Income Tax Act, effective from assessment year 2024-25. If a buyer does not pay a registered micro or small enterprise within the MSMED time limit, the buyer cannot claim that expense as a deduction in the year it was incurred Ã¢â‚¬â€ they can only claim it in the year they actually pay. For a company with a large vendor base, that converts slow payment from a free cash-flow benefit into a real tax cost in the current year. Larger buyers now chase MSME vendor declarations at year end for exactly this reason.\n\nThe practical consequence for you is direct: if you are registered on Udyam as a micro or small enterprise, and your invoice and purchase order say so, your invoice is materially more expensive for the buyer to sit on than an unregistered vendorÃ¢â‚¬â„¢s.',
      },
      {
        heading: 'Set yourself up before you need it',
        body: 'The protection only applies if you can prove three things: that you are a registered micro or small enterprise, that the goods or services were accepted on a particular date, and that payment did not follow within the window. Each is trivially easy to arrange in advance and nearly impossible to reconstruct afterwards.\n\nRegister on the Udyam portal Ã¢â‚¬â€ it is free, takes minutes with an Aadhaar and PAN, and produces a certificate with a Udyam Registration Number. Print that number on every quotation, invoice and email footer. Get acceptance in writing: a signed delivery challan, a completion email the client replies to, or a milestone sign-off. And put the payment terms on the invoice itself, with an explicit due date and an interest clause. A buyer who has signed a document quoting your Udyam number cannot later claim they did not know you were an MSME.',
        bullets: [
          'Register free on the Udyam portal and quote the URN on every document',
          'Get written acceptance of delivery Ã¢â‚¬â€ challan signature or an email confirmation',
          'State an explicit due date on the invoice, never "payment on receipt"',
          'Include an interest-on-delay clause in your terms and conditions',
          'Keep the PO, challan, invoice and delivery proof filed together per order',
        ],
      },
      {
        heading: 'The interest you are legally entitled to',
        body: 'Where a buyer misses the MSMED deadline, Section 16 entitles the supplier to compound interest with monthly rests at three times the RBI notified bank rate, from the day after the due date. That is not a token figure Ã¢â‚¬â€ it is punitive by design, and it is payable whether or not your contract mentions interest.\n\nMost suppliers never invoice it, and that is a reasonable commercial choice with a customer you want to keep. But knowing the entitlement changes the conversation. A reminder that mentions, factually and without threat, that the statutory interest position exists tends to produce faster results than a fourth apologetic follow-up. Note that this interest is not tax-deductible for the buyer either, which sharpens the incentive further.',
      },
      {
        heading: 'A follow-up cadence that does not damage the relationship',
        body: 'Most owners follow up too late, too vaguely, and too apologetically. The fix is to make follow-up scheduled and impersonal rather than emotional and occasional. Here is a cadence that works for typical 15 to 30 day terms.\n\nThree days before the due date, send a friendly heads-up with the invoice attached again Ã¢â‚¬â€ this alone catches the very common case where the invoice never reached the right person. On the due date, send a short confirmation request. At day three overdue, ask a specific question: has the invoice been approved for payment, and if not, what is pending? At day seven, escalate one level Ã¢â‚¬â€ copy the accounts head or the person who raised the purchase order. At day fifteen, send a formal notice referencing the invoice number, the due date, your Udyam registration and the statutory position, and state a final date. Beyond thirty days overdue, stop new work for that client and move to formal recovery.\n\nTwo details make the difference. Always attach the invoice again Ã¢â‚¬â€ never assume they have it. And always ask a question that requires an answer, because "please do the needful" can be ignored while "has invoice INV-2026-0142 been approved for payment?" cannot.',
      },
      {
        heading: 'Message templates you can send today',
        body: 'Keep them short. Long messages read as pleading and are skimmed.\n\nBefore due date: "Hi [Name], invoice INV-2026-0142 for Ã¢â€šÂ¹1,18,000 is due on 15 August. Attaching it again for convenience. Do let me know if anything is needed from our side to process it."\n\nThree days overdue: "Hi [Name], following up on invoice INV-2026-0142 for Ã¢â€šÂ¹1,18,000, which was due on 15 August. Could you confirm whether it has been approved for payment, and if something is pending, what I need to send?"\n\nTwo weeks overdue: "Hi [Name], invoice INV-2026-0142 for Ã¢â€šÂ¹1,18,000 is now 14 days past its due date of 15 August. We are a registered micro enterprise (Udyam URN: UDYAM-XX-00-0000000), so this falls under the MSMED Act payment timelines. Please confirm a payment date by [date]. Happy to get on a call if there is an issue with the invoice."\n\nNotice that none of these are angry, and none of them threaten. They state facts, quote references, and ask for a date.',
      },
      {
        heading: 'MSME Samadhaan: the free formal route',
        body: 'When follow-up fails, a registered micro or small enterprise can file a complaint on the MSME Samadhaan portal against a buyer who has not paid within 45 days. There is no filing fee and no lawyer required. The complaint goes to the Micro and Small Enterprise Facilitation Council in the buyerÃ¢â‚¬â„¢s state, which first attempts conciliation and, failing that, conducts arbitration. An award from the council is enforceable as a decree.\n\nYou will need the Udyam registration number, the invoice copies, proof of delivery or acceptance, and the purchase order or work order. Note that a buyer challenging an award must deposit 75% of the amount before their appeal is entertained Ã¢â‚¬â€ a provision that makes frivolous appeals expensive and gives the process real teeth.\n\nSamadhaan is not the only path. A cheque that bounces gives you a Section 138 complaint under the Negotiable Instruments Act. An undisputed debt above Ã¢â€šÂ¹1 crore can support insolvency proceedings. And for many buyers, a lawyerÃ¢â‚¬â„¢s notice under Section 8 of the Arbitration Act or a plain demand notice is enough to shake the payment loose. But for a Ã¢â€šÂ¹2 lakh receivable from a mid-sized company, Samadhaan is the proportionate tool.',
      },
      {
        heading: 'Prevent rather than recover',
        body: 'Recovery is expensive even when it works. The businesses that rarely need it do four things differently. They take advances Ã¢â‚¬â€ thirty to fifty percent before starting is standard in most Indian service and trade sectors, and a customer who will not pay an advance is telling you something. They invoice the day work is delivered, not at month end. They stop work when an account goes materially overdue, because continuing to deliver into an unpaid account converts a recoverable problem into an unrecoverable one. And they check new customers before extending credit Ã¢â‚¬â€ a quick look at MCA filings for a company, or simply asking around a trade network, catches most chronic defaulters.\n\nNone of this requires software or lawyers. It requires deciding in advance what your credit policy is, writing it into your quotation terms, and applying it without making an exception for the customer who is always about to pay next week.',
      },
    ],
    faqs: [
      {
        q: 'Does the 45-day rule apply if my customer is also a small business?',
        a: 'The MSMED payment provisions apply to buyers of any size purchasing from a registered micro or small enterprise. The Section 43B(h) income tax consequence bites hardest on buyers claiming the expense as a deduction, which covers most businesses filing returns. It does not apply to purchases from medium enterprises or from unregistered suppliers.',
      },
      {
        q: 'Can I claim MSME interest if my contract says 90-day payment terms?',
        a: 'A written agreement cannot extend the payment period beyond 45 days for a registered micro or small enterprise Ã¢â‚¬â€ any term doing so is void to that extent under Section 15. The statutory interest therefore runs from day 46 regardless of what the contract says.',
      },
      {
        q: 'Is Udyam registration mandatory to use MSME Samadhaan?',
        a: 'Yes. The portal requires a valid Udyam Registration Number, and the buyerÃ¢â‚¬â„¢s obligation under the MSMED Act applies to registered enterprises. Registration is free and online, so if you sell B2B and are not registered, do it before you need it.',
      },
      {
        q: 'How long does an MSME Samadhaan case take?',
        a: 'The Act contemplates a decision within 90 days of reference, though real timelines vary by state council and workload. In practice, a significant share of cases settle at the conciliation stage once the buyer receives the notice, which is often the outcome you actually wanted.',
      },
      {
        q: 'Should I charge interest on late payments from regular customers?',
        a: 'Keep the clause in your terms and invoke it selectively. Having the clause gives you a legitimate escalation step, and mentioning it factually often prompts payment. Actually raising an interest debit note is a relationship decision Ã¢â‚¬â€ reserve it for accounts you are prepared to lose.',
      },
    ],
    references: [
      { label: 'MSME Samadhaan Ã¢â‚¬â€ Delayed Payment Portal', url: 'https://samadhaan.msme.gov.in' },
      { label: 'RBI Ã¢â‚¬â€ MSME Lending Guidelines', url: 'https://www.rbi.org.in' },
      { label: 'MSME Ã¢â‚¬â€ MSMED Act 2006', url: 'https://msme.gov.in' },
    ],
    relatedSlugs: ['payment-terms-in-quotations', 'quotation-follow-up-strategy', 'payment-receipt-format-guide'],
  },

  {
    slug: 'bill-of-supply-vs-tax-invoice',
    title: 'Bill of Supply vs Tax Invoice: Which One Your Business Must Issue',
    seoTitle: 'Bill of Supply vs Tax Invoice 2026 | Composition Scheme & Exempt Supply Billing Format',
    metaDescription:
      'When to issue a bill of supply instead of a tax invoice Ã¢â‚¬â€ composition dealers, exempt and nil-rated supplies, the mandatory declaration, format differences, ITC impact and how to bill correctly.',
    keywords: [
      'bill of supply',
      'bill of supply vs tax invoice',
      'composition scheme billing',
      'bill of supply format',
      'exempt supply invoice',
      'composition dealer invoice rules',
      'nil rated supply billing',
      'gst billing for small dealers',
    ],
    date: '2026-08-27',
    updatedDate: '2026-09-01',
    author: 'Prashant Upadhyay',
    readingTime: 8,
    category: 'GST & Tax',
    heroImage: '/blog/bill-of-supply.svg',
    heroAlt: 'Comparison of tax invoice vs bill of supply showing when each is required under GST',
    excerpt:
      'If you are a composition dealer or you sell exempt goods, issuing a tax invoice is not just wrong Ã¢â‚¬â€ it can make you liable for tax you never collected.',
    intro:
      'Two businesses on the same street issue documents that look nearly identical, and only one of them is doing it correctly. A composition dealer selling snacks and a regular registered trader selling packaged food both hand over a printed bill, but GST law treats those documents very differently. Getting this wrong is not a cosmetic error: a composition dealer who issues a tax invoice showing GST has collected tax they were not entitled to collect, and Section 76 requires that amount to be paid to the government regardless. This guide draws the line clearly, so you know which document your business must produce.',
    sections: [
      {
        heading: 'The rule in one paragraph',
        body: 'A registered person issues a tax invoice when they are charging GST on a taxable supply. They issue a bill of supply when there is no GST to charge Ã¢â‚¬â€ which happens in two situations. First, the supplier is registered under the composition scheme, and composition dealers are prohibited from collecting tax from customers. Second, the supply itself is exempt, nil-rated or non-GST, so no tax applies regardless of who sells it.\n\nIf either condition applies, the document is a bill of supply, it shows no tax, and it passes no input tax credit to the buyer. That last point is why B2B customers ask before they buy.',
      },
      {
        heading: 'What a bill of supply must contain',
        body: 'The required particulars mirror a tax invoice minus everything tax-related. You need your name, address and GSTIN; a consecutive serial number unique for the financial year, up to 16 characters; the date of issue; the recipientÃ¢â‚¬â„¢s name, address and GSTIN or UIN if registered; the HSN code for goods or SAC for services; a description of the goods or services; the value of supply after any discount; and your signature or digital signature.\n\nWhat you must not include is any tax amount, any CGST/SGST/IGST breakup, or anything that could be read as tax collected. A composition dealer must additionally carry a declaration at the top of the document: "Composition taxable person, not eligible to collect tax on supplies." A supplier of exempt goods should state that the supply is exempt.',
        bullets: [
          'Serial number unique for the financial year and date of issue',
          'Supplier name, address and GSTIN',
          'Recipient details, with GSTIN where registered',
          'HSN or SAC, description and value of supply',
          'No tax amount and no CGST/SGST/IGST split Ã¢â‚¬â€ anywhere on the document',
          'Composition dealers: the mandatory non-collection declaration',
        ],
      },
      {
        heading: 'Composition scheme: the trade-off you accepted',
        body: 'The composition scheme lets small suppliers pay tax at a low flat rate on turnover Ã¢â‚¬â€ broadly 1% for traders, 2% for manufacturers, 5% for restaurants and 6% for eligible service providers Ã¢â‚¬â€ with quarterly payment and simplified returns. In exchange, three restrictions apply, and all three affect billing.\n\nYou cannot collect tax from your customers. You cannot claim input tax credit on your purchases. And your customers cannot claim credit on what they buy from you. That last restriction is commercially the most important: it makes you structurally unattractive to GST-registered B2B buyers, who will effectively pay your price plus lose the credit they would get elsewhere. Composition works well for businesses selling to consumers and poorly for businesses selling to registered companies. If your customer mix shifts towards B2B, the scheme may be costing you more than it saves.\n\nComposition dealers also display the same declaration on their signboard at every place of business, and cannot make inter-state outward supplies of goods.',
      },
      {
        heading: 'Exempt, nil-rated, zero-rated and non-GST: they are not the same',
        body: 'These four terms get used interchangeably and they have different consequences.\n\nExempt supplies are taxable in principle but exempted by notification Ã¢â‚¬â€ many unbranded food items, healthcare services, educational services. Nil-rated supplies attract a 0% rate under the tariff. Non-GST supplies fall outside GST altogether Ã¢â‚¬â€ petrol, diesel, alcohol for human consumption, electricity. For all three, you issue a bill of supply and you cannot claim input credit attributable to them.\n\nZero-rated is the odd one out and is genuinely different. Exports and supplies to Special Economic Zones are zero-rated: the outward supply carries no tax, but you retain the right to input credit and can claim a refund of it, or export under a bond or LUT. Zero-rated supplies are made on a tax invoice with the appropriate export declaration, not a bill of supply. Confusing zero-rated with exempt costs exporters real refund money.',
      },
      {
        heading: 'Mixed supplies and the invoice-cum-bill of supply',
        body: 'A regular registered dealer who sells both taxable and exempt goods to the same unregistered customer does not need two documents. The rules permit an invoice-cum-bill of supply Ã¢â‚¬â€ a single document listing both, with tax shown against the taxable lines and the exempt lines identified as such. This is common in kirana and general stores, where a basket contains both unbranded staples and packaged branded goods.\n\nComposition dealers do not use this, because nothing they sell carries collected tax. They issue a bill of supply for everything. And note the small-value relaxation: for supplies below Ã¢â€šÂ¹200 to unregistered buyers who do not ask for a document, a consolidated bill at the end of the day is acceptable Ã¢â‚¬â€ though issuing individual bills is better practice and most billing tools do it automatically.',
      },
      {
        heading: 'Getting it right in your billing setup',
        body: 'Practically, the fix is to decide once which document type your business issues and configure your billing accordingly rather than deciding invoice by invoice. If you are a composition dealer, switch your billing tool to a no-tax mode, add the mandatory declaration to your document terms, and use a BOS- numbering series. If you are a regular dealer with a mixed catalogue, tag each item as taxable or exempt at the point you add it, so the correct treatment follows automatically.\n\nAnd revisit the composition decision annually rather than treating it as permanent. The scheme is opt-in each financial year, the turnover limits change, and a business whose customer base has moved from walk-in consumers to registered businesses is usually better off as a regular dealer even though the returns are more work.',
      },
    ],
    faqs: [
      {
        q: 'What happens if a composition dealer issues a tax invoice by mistake?',
        a: 'Any amount collected as tax must be paid to the government under Section 76, even though the dealer was not entitled to collect it and cannot offset input credit against it. Correct the document immediately, refund the tax component to the customer, and reissue as a bill of supply.',
      },
      {
        q: 'Can a customer claim input tax credit on a bill of supply?',
        a: 'No. Input credit requires a tax invoice or debit note showing tax charged. A bill of supply shows no tax, so there is nothing to claim. This is the main reason registered B2B buyers prefer suppliers outside the composition scheme.',
      },
      {
        q: 'Do I need to file GST returns if I only issue bills of supply?',
        a: 'Yes. Composition dealers file CMP-08 quarterly and GSTR-4 annually. Regular registered dealers making only exempt supplies still file GSTR-1 and GSTR-3B, reporting those supplies in the exempt columns. Registration obligations do not disappear because tax is not collected.',
      },
      {
        q: 'Is a bill of supply valid as proof of purchase for the buyer?',
        a: 'Absolutely. It is a valid commercial document for accounting, expense claims and warranty purposes. The only thing it does not do is transfer input tax credit.',
      },
      {
        q: 'Can I issue a bill of supply for an export sale?',
        a: 'No. Exports are zero-rated, not exempt, and are made on a tax invoice with the appropriate declaration for supply under bond or LUT without payment of integrated tax, or with payment and subsequent refund. Using a bill of supply would forfeit your input credit refund.',
      },
    ],
    references: [
      { label: 'GST Portal Ã¢â‚¬â€ Bill of Supply', url: 'https://www.gst.gov.in' },
      { label: 'CBIC Ã¢â‚¬â€ Composition Dealer Rules', url: 'https://www.cbic.gov.in' },
    ],
    relatedSlugs: ['gst-invoice-rules-guide', 'gst-in-quotations', 'free-invoice-maker-online-guide'],
  },

  {
    slug: 'e-way-bill-rules-guide',
    title: 'E-Way Bill Rules Explained: Thresholds, Validity, Part A and Part B',
    seoTitle: 'E-Way Bill Rules 2026 India | Limit, Validity, Part B & Penalty Explained',
    metaDescription:
      'A plain-English guide to e-way bills Ã¢â‚¬â€ when the Ã¢â€šÂ¹50,000 threshold applies, who generates it, Part A vs Part B, validity by distance, extension, cancellation, exemptions and penalties for moving goods without one.',
    keywords: [
      'e way bill rules',
      'e way bill limit',
      'e way bill validity',
      'e way bill part b',
      'e way bill for job work',
      'e way bill penalty',
      'how to generate e way bill',
      'e way bill exemption list',
    ],
    date: '2026-09-03',
    updatedDate: '2026-09-10',
    author: 'Prashant Upadhyay',
    readingTime: 10,
    category: 'GST & Tax',
    heroImage: '/blog/e-way-bill-rules.svg',
    heroAlt: 'E-way bill threshold, validity and Part A vs Part B structure diagram',
    excerpt:
      'A truck detained at a checkpoint costs far more than the paperwork would have. Here is exactly when an e-way bill is required and how long it stays valid.',
    intro:
      'The e-way bill is the GST systemÃ¢â‚¬â„¢s way of knowing that goods are moving before they arrive anywhere. For anyone who dispatches material Ã¢â‚¬â€ a trader sending stock to a customer, a fabricator sending components to a job worker, a shop moving inventory to a second branch Ã¢â‚¬â€ it is a routine step that becomes a serious problem exactly once, when a vehicle is stopped and the paperwork does not hold up. The rules are not complicated, but they are precise: thresholds, who generates what, two separate parts, and a validity clock tied to distance. This guide covers all of it in the order you will actually need it.',
    sections: [
      {
        heading: 'When an e-way bill is required',
        body: 'The general rule is that a registered person causing the movement of goods worth more than Ã¢â€šÂ¹50,000 Ã¢â‚¬â€ in a single invoice, bill of supply or delivery challan Ã¢â‚¬â€ must generate an e-way bill before the movement starts. The value includes the tax but excludes the value of exempt goods where the consignment is mixed.\n\nTwo cases require an e-way bill regardless of value. Inter-state movement of goods for job work, where the principal or the registered job worker must generate one whatever the consignment is worth. And inter-state movement of handicraft goods by a person exempted from registration. Beyond that, several states have set their own intra-state thresholds, and a few have raised the limit for movements within a city or district, so check your stateÃ¢â‚¬â„¢s notification if you operate close to the boundary.\n\nThe threshold applies per consignment, not per day. Splitting a Ã¢â€šÂ¹90,000 order into two Ã¢â€šÂ¹45,000 invoices moving on the same vehicle does not avoid the requirement, and the practice is treated as evasion.',
      },
      {
        heading: 'Part A and Part B: two halves, two owners',
        body: 'An e-way bill has two parts and they are usually filled by different people, which is where confusion starts.\n\nPart A is the consignment information: the recipientÃ¢â‚¬â„¢s GSTIN, place of delivery with PIN code, the invoice or challan number and date, the value of goods, the HSN code, the reason for transportation, and the transport document number. This is the supplierÃ¢â‚¬â„¢s job, and it can be filled well before dispatch.\n\nPart B is the vehicle information: the vehicle number, or the transporter document number for rail, air or ship. Without Part B, the e-way bill is not valid for movement Ã¢â‚¬â€ the validity clock does not even start. Part B is filled by whoever knows the vehicle, which is the supplier for own transport and the transporter for hired transport. When a transporter is engaged, the supplier furnishes Part A and the transporter ID, and the transporter completes Part B.\n\nThere is one relaxation worth knowing: for movement within a state up to 50 kilometres between the consignorÃ¢â‚¬â„¢s place and the transporterÃ¢â‚¬â„¢s place, or from the transporter to the consignee, Part B is not required.',
        bullets: [
          'Part A Ã¢â‚¬â€ consignment details, filled by the supplier, can be done in advance',
          'Part B Ã¢â‚¬â€ vehicle or transport document number, without which the bill is not valid',
          'Hired transport: supplier fills Part A and transporter ID, transporter fills Part B',
          'Under 50 km within a state, Part B is not required for the first or last leg',
        ],
      },
      {
        heading: 'Validity: the distance clock',
        body: 'Validity runs from the time Part B is entered, not from when Part A was filled. For regular cargo, the bill is valid for one day for every 200 kilometres or part thereof. For over-dimensional cargo and multimodal shipment involving at least one leg by ship, it is one day for every 20 kilometres or part thereof.\n\n"One day" means until midnight of the day following the date of generation for the first block, which is more generous than it sounds Ã¢â‚¬â€ a bill generated at 6 pm for a 150 km trip is valid until midnight the next day, not until 6 pm the next day. Plan long hauls with this in mind, because expired e-way bills are among the most common reasons for detention.\n\nIf the goods cannot be moved within the validity Ã¢â‚¬â€ a breakdown, a natural calamity, a transhipment delay Ã¢â‚¬â€ the transporter can extend it by updating the details, but only within eight hours before or after expiry. Miss that window and you must generate a fresh bill, which requires the goods to still be accompanied by valid documents.',
      },
      {
        heading: 'Cancellation, rejection and changing the vehicle',
        body: 'An e-way bill can be cancelled within 24 hours of generation, provided the goods have not been transported or the details were entered incorrectly. After 24 hours, cancellation is not possible from the generatorÃ¢â‚¬â„¢s side. The recipient has a separate right: they may reject an e-way bill within 72 hours of generation, or before delivery, whichever is earlier Ã¢â‚¬â€ useful when a supplier raises a bill against your GSTIN for a consignment you never ordered.\n\nVehicle changes mid-journey are normal and handled by updating Part B with the new vehicle number. Multiple vehicle updates are permitted, and the validity does not reset Ã¢â‚¬â€ it continues from the original Part B entry. For consolidated movements, a transporter carrying several consignments in one vehicle generates a consolidated e-way bill listing the individual bill numbers, which the driver carries in place of a bundle of printouts.',
      },
      {
        heading: 'What must travel with the goods',
        body: 'The person in charge of the conveyance must carry the invoice, bill of supply or delivery challan, and a copy of the e-way bill or its number Ã¢â‚¬â€ physically, or mapped to a Radio Frequency Identification Device where the state requires it. In practice, the e-way bill number or a QR code on a phone is accepted, but a printed copy costs nothing and removes the argument.\n\nWhere goods move on a delivery challan rather than an invoice Ã¢â‚¬â€ job work, exhibition, branch transfer, supply on approval Ã¢â‚¬â€ the e-way bill references the challan number and the appropriate sub-type. Getting the sub-type right matters: a job-work movement recorded as an ordinary supply creates a mismatch between your e-way bill data and your GSTR-1, and those mismatches now generate automated queries.',
      },
      {
        heading: 'Exemptions worth knowing',
        body: 'Several movements do not require an e-way bill at all. Goods transported by a non-motorised conveyance Ã¢â‚¬â€ a handcart, a cycle rickshaw. Goods moving from a port, airport, air cargo complex or land customs station to an inland container depot or container freight station for customs clearance. Movement within areas notified by a state government. Transport of empty cargo containers. Goods exempt under the specific annexure to Rule 138, which covers a long list including fresh fruit and vegetables, unprocessed cereals, milk, live animals, books and jewellery.\n\nCheck the annexure rather than assuming, because the list contains items people expect to be covered and omits items people assume are exempt. And note that "no e-way bill required" never means "no document required" Ã¢â‚¬â€ the invoice or challan still travels with the goods.',
      },
      {
        heading: 'Penalties for getting it wrong',
        body: 'Moving goods without a required e-way bill attracts a penalty under Section 129: for taxable goods where the owner comes forward, 200% of the tax payable on the goods, or in the case of exempt goods, 2% of the value or Ã¢â€šÂ¹25,000, whichever is less. Where the owner does not come forward, the exposure rises to 50% of the value of goods. The vehicle and goods can be detained until the amount is paid.\n\nCourts have distinguished between genuine clerical errors and deliberate evasion Ã¢â‚¬â€ a typographical error in a vehicle number with all other documents in order has repeatedly been held not to justify the full penalty. But relying on that is expensive and slow. The cheaper approach is boring discipline: generate the bill before dispatch, verify the vehicle number against the actual truck, confirm the validity covers the planned route, and keep a printed copy in the cab.',
      },
    ],
    faqs: [
      {
        q: 'Is an e-way bill needed for goods moving within the same city?',
        a: 'It depends on your state. The central rule sets a Ã¢â€šÂ¹50,000 threshold, but states may notify higher limits or exemptions for intra-city and intra-district movement, and several have. Check your state commercial tax departmentÃ¢â‚¬â„¢s current notification rather than relying on general advice.',
      },
      {
        q: 'Who generates the e-way bill when the buyer arranges transport?',
        a: 'Where the recipient causes the movement Ã¢â‚¬â€ an ex-works sale where the buyer sends their own vehicle Ã¢â‚¬â€ the recipient generates it. Where the supplier arranges transport, the supplier does. An unregistered supplier selling to a registered buyer is treated as the registered recipient causing the movement.',
      },
      {
        q: 'Can I generate an e-way bill after the vehicle has left?',
        a: 'You should not. The requirement is to generate it before commencement of movement, and a bill generated after a vehicle is stopped does not cure the violation. If you realise mid-journey, the honest course is to halt the vehicle, generate the bill and then proceed.',
      },
      {
        q: 'Does an e-way bill expire if the vehicle is stuck in transit?',
        a: 'Yes, validity is strictly time-based. The transporter can extend it by updating the details within eight hours before or after expiry, stating the reason. Outside that window a fresh e-way bill is required.',
      },
      {
        q: 'Do I need an e-way bill for goods sent for repair?',
        a: 'Goods sent for repair move on a delivery challan rather than an invoice, and the e-way bill requirement follows the normal rules Ã¢â‚¬â€ value above Ã¢â€šÂ¹50,000 for intra-state, and for inter-state job work movements regardless of value. Select the correct sub-type and reference the challan number.',
      },
    ],
    references: [
      { label: 'E-Way Bill System Ã¢â‚¬â€ Official Portal', url: 'https://ewaybillgst.gov.in' },
      { label: 'CBIC Ã¢â‚¬â€ E-Way Bill Rules', url: 'https://www.cbic.gov.in' },
      { label: 'GST Council Ã¢â‚¬â€ E-Way Bill Notifications', url: 'https://gstcouncil.gov.in' },
    ],
    relatedSlugs: ['delivery-challan-complete-guide', 'gst-invoice-rules-guide', 'purchase-order-process-guide'],
  },
];
