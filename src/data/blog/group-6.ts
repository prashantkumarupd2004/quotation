import type { BlogPost } from '@/data/blog-types';

/**
 * Group 6 — launch coverage and guides for the new document generator tools
 * (invoice, GST invoice, proforma, purchase order, challan, receipt, notes).
 */
export const blogPosts6: BlogPost[] = [
  {
    slug: 'free-invoice-maker-online-guide',
    title: 'How to Make an Invoice Online for Free: The Complete 2026 Guide for Indian Businesses',
    seoTitle: 'Free Invoice Maker Online 2026 | How to Create an Invoice PDF in India',
    metaDescription:
      'Step-by-step guide to creating professional invoices online for free in 2026 — invoice format, GST rules, numbering, due dates, payment instructions and mistakes to avoid.',
    keywords: [
      'invoice maker',
      'free invoice maker online',
      'how to make an invoice',
      'invoice format India',
      'create invoice online free',
      'invoice format pdf download',
      'invoice numbering rules India',
      'invoice for small business',
    ],
    date: '2026-07-18',
    readingTime: 9,
    category: 'Invoicing',
    excerpt:
      'From the mandatory fields to numbering rules and payment terms that actually get you paid — everything you need to raise your first professional invoice online, free.',
    intro:
      'For lakhs of Indian freelancers, shop owners and small businesses, invoicing still happens over WhatsApp messages and handwritten bill books. That costs real money: unbilled items, forgotten follow-ups and disputes over what was agreed. The good news is that a professional, numbered invoice with automatic tax calculation now takes under a minute to create online — free, with no software to install and no account to register. This guide walks through exactly how to do it, what a valid invoice must contain, and the small habits that get invoices paid faster.',
    sections: [
      {
        heading: 'What a valid invoice must contain in India',
        body: 'An invoice is a formal demand for payment, and its credibility comes from completeness. Whether you bill ₹500 or ₹5,00,000, the same core fields apply: a unique sequential invoice number, the invoice date and a due date, your business name and address (with GSTIN if you are registered), the customer’s billing details, an itemised list of goods or services with quantity, unit and rate, the applicable taxes shown separately, the grand total, and your payment instructions.\n\nTwo details separate professional invoices from amateur ones. First, the amount in words — standard practice on Indian bills and expected by auditors. Second, explicit payment instructions: bank account, IFSC and UPI ID printed on the invoice itself, so the customer never has to ask "where do I send the money?"',
        bullets: [
          'Unique sequential invoice number (one unbroken series per financial year)',
          'Invoice date and an explicit due date — never just "payment on receipt"',
          'Itemised charges with quantity, unit, rate and per-line tax',
          'GST shown separately as CGST+SGST (same state) or IGST (inter-state)',
          'Amount in words and an authorised signature',
        ],
      },
      {
        heading: 'Step-by-step: creating an invoice online in under a minute',
        body: 'Using a free browser-based tool like the QuotationMaker.in Invoice Maker, the process is a single form with a live preview. Enter your business details and upload your logo — this saves automatically, so you only do it once. Add the customer, then list what you are billing as line items; subtotal, tax and grand total calculate as you type.\n\nSet the due date, mark the payment status (Unpaid, Partially Paid or Paid), add your bank or UPI details in the payment instructions, pick one of the templates, and download the finished PDF. Because everything runs in the browser and saves locally, there is no signup wall and your billing data never leaves your device.',
      },
      {
        heading: 'Invoice numbering: the rules and a simple system',
        body: 'Under GST rules an invoice number can be up to 16 characters — letters, numbers and characters like hyphen or slash — and must be unique for the financial year. Beyond compliance, a clean series is what keeps your accounting sane: gaps and duplicates are the first thing a customer’s accounts team or a tax officer questions.\n\nThe simplest robust system is PREFIX-YEAR-SEQUENCE, for example INV-2026-0001 counting upwards without gaps. If you issue multiple document types, give each its own series (INV- for invoices, QT- for quotations, REC- for receipts) so nothing collides. Start a fresh sequence each financial year and record the last used number somewhere safe.',
      },
      {
        heading: 'Due dates and payment terms that actually get you paid',
        body: 'Invoices with a concrete due date are paid measurably faster than invoices with vague terms, because a date enters the customer’s payment calendar while "immediate payment" does not. For most small B2B work, 7 to 15 days is reasonable; 30 days is standard with larger companies.\n\nPair the date with friction-free payment options. A UPI QR code printed on the invoice means a domestic customer can pay the moment the PDF opens. For larger amounts, full bank details with IFSC remove the back-and-forth. And send the invoice the same day you deliver — every day of delay pushes your bill down the customer’s priority list.',
      },
      {
        heading: 'Five invoicing mistakes that delay payment',
        body: 'The same handful of errors cause most payment delays. Missing or wrong GSTIN details force B2B customers to bounce the invoice back for correction. Vague line items ("work done — ₹40,000") invite queries and renegotiation. Missing PO references get invoices stuck in approval queues at larger companies. Unnumbered invoices look unprofessional and are impossible to follow up precisely. And invoices sent late are paid late — always.\n\nA structured tool eliminates most of these mechanically: numbering is suggested automatically, GST is calculated per line, and the template forces itemisation. What remains is discipline: send on delivery day, follow up on the due date.',
      },
      {
        heading: 'When you need a GST invoice instead',
        body: 'If your business is GST-registered and you are billing another registered business, you should issue a full tax invoice with HSN/SAC codes, place of supply and a rate-wise tax breakup, so your buyer can claim input tax credit. For that, use a dedicated GST invoice maker which enforces those fields. For unregistered sellers, B2C billing, or simple service bills, the standard invoice format in this guide is exactly right.',
      },
    ],
    faqs: [
      {
        q: 'Can I legally create my own invoice without accounting software?',
        a: 'Yes. There is no requirement to use any particular software. An invoice is valid if it contains the required particulars — number, date, parties, itemised charges, taxes and total. A free online invoice maker that produces a complete PDF is fully sufficient for small businesses and freelancers.',
      },
      {
        q: 'Do I need to charge GST on my invoices?',
        a: 'Only if you are GST-registered. Registration is mandatory above ₹40 lakh turnover for goods (₹20 lakh for services, lower in special-category states). Unregistered sellers must not charge GST — issue a simple invoice without tax, or use the no-tax mode in the invoice maker.',
      },
      {
        q: 'What is the difference between an invoice and a bill?',
        a: 'In everyday Indian usage they mean the same thing. Conventionally, "invoice" is used in B2B contexts with credit terms and a due date, while "bill" suggests immediate payment in retail. The document contents are essentially identical.',
      },
      {
        q: 'How do I handle an invoice mistake after sending it?',
        a: 'Never delete or reuse the number. For an overcharge, issue a credit note referencing the invoice; for an undercharge, a debit note. For minor non-financial errors, reissue the invoice with the same number clearly marked as a revised copy, and keep both versions on file.',
      },
    ],
    relatedSlugs: ['invoice-vs-quotation', 'gst-invoice-rules-guide', 'payment-terms-in-quotations'],
  },

  {
    slug: 'gst-invoice-rules-guide',
    title: 'GST Invoice Rules 2026: Format, Mandatory Fields, HSN Codes and Common Errors',
    seoTitle: 'GST Invoice Format & Rules 2026 India | Mandatory Fields, HSN, CGST SGST IGST',
    metaDescription:
      'Everything a GST tax invoice must contain in 2026 — mandatory fields under Rule 46, HSN digit requirements, CGST vs SGST vs IGST, e-invoicing thresholds and errors that block input tax credit.',
    keywords: [
      'gst invoice rules',
      'gst invoice format',
      'gst bill format 2026',
      'mandatory fields gst invoice',
      'hsn code invoice requirement',
      'cgst sgst igst difference',
      'gst invoice maker free',
      'tax invoice format India',
    ],
    date: '2026-07-18',
    readingTime: 10,
    category: 'GST & Tax',
    excerpt:
      'A GST invoice with missing fields can cost your buyer their input tax credit. Here is the complete checklist of what Rule 46 requires — and the errors to avoid.',
    intro:
      'A GST tax invoice is not just a bill — it is the document on which your buyer’s input tax credit depends and on which your own outward liability is assessed. Get the fields wrong and the consequences land on both sides: credit denied to the buyer, notices to the seller. Yet the rules are entirely manageable once laid out plainly. This guide covers what a compliant tax invoice must contain, how to choose between CGST/SGST and IGST, what the HSN code requirements actually are, and the recurring mistakes that get invoices rejected.',
    sections: [
      {
        heading: 'Mandatory fields under Rule 46 of the CGST Rules',
        body: 'Rule 46 lists the particulars a tax invoice must carry. In practical terms: your name, address and GSTIN; a consecutive serial number unique for the financial year (max 16 characters); the date of issue; the recipient’s name, address and GSTIN if registered; the place of supply with state name and code (essential for inter-state supplies); HSN or SAC codes for each item; description, quantity and unit; taxable value after any discount; the tax rate and amount charged, split into CGST, SGST/UTGST or IGST; whether tax is payable on reverse charge; and the signature or digital signature of the supplier or an authorised representative.\n\nA good GST invoice maker turns this list into structured fields so nothing is forgotten — the reason checklists beat memory every single time.',
      },
      {
        heading: 'CGST + SGST or IGST? The place-of-supply logic',
        body: 'The split depends on whether the supply is intra-state or inter-state. If your registration state and the place of supply are the same state, charge CGST plus SGST, each at half the total rate — an 18% supply becomes 9% CGST + 9% SGST. If they differ, charge IGST at the full rate.\n\nThe most common error is defaulting to CGST+SGST for every sale. Charge the wrong split and the buyer cannot use the credit correctly; fixing it means credit notes and re-issued invoices. When billing an out-of-state customer, check the place of supply first, then set the tax mode — online tools make this a single dropdown between "GST (CGST+SGST)" and "IGST (inter-state)".',
      },
      {
        heading: 'HSN code requirements by turnover',
        body: 'HSN (goods) and SAC (services) codes classify what you sell. The digit requirement depends on your previous-year aggregate turnover: up to ₹5 crore, 4-digit HSN codes are required on B2B invoices (optional for B2C); above ₹5 crore, 6-digit codes are mandatory on all invoices. Export invoices need 8-digit codes.\n\nFinding your code is a one-time task per product — the GST portal’s HSN search covers everything. Record the code once against each item and reuse it on every invoice; consistency between your invoices and your GSTR-1 filings is what reconciliation systems check.',
      },
      {
        heading: 'E-invoicing: who it applies to',
        body: 'E-invoicing — reporting B2B invoices to the government’s Invoice Registration Portal to obtain an IRN and QR code — applies to businesses whose aggregate turnover has exceeded ₹5 crore in any financial year since 2017-18. If that is you, invoices to registered buyers must be registered on the IRP to be valid.\n\nBelow the threshold, standard tax invoices as described in this guide are exactly what you need — no IRP, no IRN. Most small businesses using free invoice tools fall in this category. As you approach the threshold, plan the transition early because it affects your billing workflow, not just the document format.',
      },
      {
        heading: 'Errors that block input tax credit',
        body: 'From the buyer’s side, ITC depends on holding a valid invoice AND the supplier reporting it in GSTR-1 so it appears in the buyer’s GSTR-2B. The document errors that break this chain are consistently the same: a missing or wrong buyer GSTIN (the single most common), the wrong tax split for the place of supply, missing HSN codes where required, duplicate or non-consecutive invoice numbers, and unsigned invoices.\n\nEach of these is mechanical, and each is preventable with a structured form. If a buyer reports that your invoice is not reflecting for credit, first verify the GSTIN character by character, then confirm the invoice was included in your GSTR-1 for that period.',
        bullets: [
          'Verify the buyer’s GSTIN before issuing — one wrong character breaks the credit chain',
          'Match the tax split (CGST+SGST vs IGST) to the place of supply, not habit',
          'Use 4-digit HSN minimum on B2B invoices (6-digit above ₹5 crore turnover)',
          'Keep one consecutive invoice series per financial year',
          'Report every B2B invoice in GSTR-1 the same period',
        ],
      },
      {
        heading: 'Creating a compliant GST invoice free, in minutes',
        body: 'A free GST invoice maker structures every Rule 46 field — GSTINs for both parties, place of supply, reverse charge flag, per-item HSN and tax rate — and computes the CGST/SGST or IGST split automatically with a rate-wise summary. Add your logo and signature, download the PDF, and file the same data in your GSTR-1. For corrections after issue, use a credit note (overcharge) or debit note (undercharge) referencing the original invoice, as Section 34 prescribes — never edit or reissue silently.',
      },
    ],
    faqs: [
      {
        q: 'Is a handwritten GST invoice valid?',
        a: 'Yes, provided it contains all the Rule 46 particulars and is signed. There is no requirement that a tax invoice be computer-generated. In practice, printed invoices win because tax calculations, rate-wise summaries and legible HSN codes are error-prone by hand.',
      },
      {
        q: 'How many copies of a GST invoice are required?',
        a: 'For goods: triplicate — original for the recipient, duplicate for the transporter, triplicate for the supplier. For services: duplicate — original for the recipient, duplicate for the supplier. A PDF you can print any number of times satisfies this trivially.',
      },
      {
        q: 'Can I issue one invoice for goods taxed at different GST rates?',
        a: 'Yes. List each item with its own HSN code and rate, and show the tax amount rate-wise in the summary. A good invoice tool computes the rate-wise breakup automatically from per-line tax rates.',
      },
      {
        q: 'What is reverse charge and when do I mark it on the invoice?',
        a: 'Under reverse charge, the recipient rather than the supplier pays the GST to the government. It applies to notified categories of goods, services and situations. The invoice must state whether tax is payable on reverse charge — the GST invoice maker includes this as a Yes/No field.',
      },
      {
        q: 'Is an invoice without an HSN code invalid?',
        a: 'For B2B invoices where your turnover requires HSN disclosure, missing codes are a compliance defect that can attract penalties and complicate the buyer’s credit. For B2C invoices under ₹5 crore turnover, HSN is optional. When in doubt, include the code — it costs nothing.',
      },
    ],
    relatedSlugs: ['gst-in-quotations', 'free-invoice-maker-online-guide', 'credit-note-debit-note-explained'],
  },

  {
    slug: 'purchase-order-process-guide',
    title: 'The Purchase Order Process Explained: From PO to Payment for Small Businesses',
    seoTitle: 'Purchase Order Process India 2026 | PO Format, 3-Way Matching & Free PO Generator',
    metaDescription:
      'How the purchase order process works — raising a PO, vendor acceptance, delivery challan matching and invoice approval. Includes PO format essentials and a free online PO generator.',
    keywords: [
      'purchase order process',
      'purchase order format',
      'po generator free',
      'three way matching',
      'purchase order vs invoice',
      'po number meaning',
      'how to create purchase order',
      'vendor management small business',
    ],
    date: '2026-07-18',
    readingTime: 8,
    category: 'Procurement',
    excerpt:
      'Businesses that buy on the phone overpay and under-document. A simple PO process — order, deliver, match, pay — fixes both. Here is how to run it.',
    intro:
      'Most small businesses order stock and materials informally — a phone call, a WhatsApp message, a verbal rate. It works until it does not: the invoice arrives higher than the agreed rate, quantities do not match what was delivered, and nobody can prove what was actually ordered. The purchase order process exists to close exactly these gaps, and it is far simpler than it sounds. This guide explains the full cycle — from raising a PO to matching the invoice — and how to run it with nothing more than a free online PO generator and a filing habit.',
    sections: [
      {
        heading: 'What a purchase order does that a phone call cannot',
        body: 'A purchase order is the buyer’s written authorisation to a vendor: these items, these quantities, these rates, delivered here, by this date, paid on these terms. Once the vendor accepts it, the PO becomes a binding commercial commitment — written authority for the vendor to produce and dispatch, and written protection for the buyer against price creep.\n\nThe PO number is the thread that ties the whole purchase together. The vendor quotes it on the delivery challan and the invoice; your accounts process matches all three before paying. That single discipline — no PO number, no payment — is how well-run companies stop overbilling.',
      },
      {
        heading: 'The five-step PO cycle',
        body: 'Step one: negotiate and collect the vendor’s quotation. Step two: raise the PO referencing that quotation, with delivery location, expected date and payment terms stated. Step three: the vendor accepts — in writing, or by acting on the order. Step four: goods arrive with a delivery challan; stores check quantities against the PO and note shortages or damage on the challan copy. Step five: the vendor’s invoice arrives quoting the PO number, accounts matches it against the PO and the challan, and pays per the agreed terms.\n\nEach step produces one document, and each document checks the previous one. The cycle is self-auditing — which is precisely the point.',
        bullets: [
          'Quotation → PO → acceptance → challan → invoice: one paper trail',
          'Reference the vendor’s quotation number on the PO to lock pricing',
          'Note shortages and damage on the challan at delivery, not later',
          'Match invoice against PO and challan before payment (3-way matching)',
        ],
      },
      {
        heading: 'What to include in the PO format',
        body: 'A complete purchase order contains: a unique PO number and date; buyer and vendor details with GSTINs; item descriptions precise enough to leave no interpretation room, with quantity, unit and the agreed rate; taxes; the delivery location (critical for multi-site businesses); the expected delivery date; payment terms; ordering terms — specification compliance, right to reject non-conforming goods; and an authorised signature.\n\nPrecision in descriptions is where POs earn their keep. "Cement — 100 bags" invites substitution; "UltraTech PPC 50kg — 100 bags" does not.',
      },
      {
        heading: 'Three-way matching in a small business, without software',
        body: 'Enterprise procurement systems automate 3-way matching, but the logic needs no software: keep a simple folder (physical or digital) per open PO, drop the delivery challan in when goods arrive, drop the invoice in when it comes, and compare the three before releasing payment. Quantities should match PO-to-challan; rates should match PO-to-invoice; the invoice quantity should not exceed the challan quantity.\n\nAny mismatch is a conversation before payment, not a dispute after it. Businesses that adopt this one habit typically discover they had been quietly overpaying on rates and short-deliveries for years.',
      },
      {
        heading: 'Raising professional POs for free',
        body: 'A free online purchase order generator gives you sequential PO numbering, structured fields for delivery location and expected date, a vendor quotation reference field, automatic GST computation on the order value, and clean PDF output with your logo, terms and signature. Combined with the folder-per-PO habit, that is a complete procurement control system for exactly zero rupees of software cost — and it scales from a single shop to a multi-site operation without changing anything but the number of folders.',
      },
    ],
    faqs: [
      {
        q: 'Is a purchase order legally binding in India?',
        a: 'Once accepted by the vendor — by written confirmation or by acting on it — a PO is an enforceable contract under the Indian Contract Act: offer, acceptance and consideration are all present. Until acceptance it is an offer the vendor may decline or negotiate.',
      },
      {
        q: 'Does a small business really need purchase orders?',
        a: 'If you buy on credit, order against specifications, or have anyone other than the owner receiving goods — yes. The PO is what lets you verify every invoice against what was actually agreed and delivered. Businesses that pay cash on the spot for everything can reasonably skip them.',
      },
      {
        q: 'Should a PO show GST?',
        a: 'It is good practice though not mandatory. Showing the expected tax tells the vendor the full value you expect to be invoiced and pre-empts "rates were exclusive of GST" disputes. A PO generator with per-item GST calculation does this automatically.',
      },
      {
        q: 'What is the difference between a PO and a work order?',
        a: 'A PO orders goods or standard services from an external vendor. A work order describes a job to be executed, often internally or on a site. For buying materials and equipment, raise a PO; the same generator handles service orders by describing the service as the line item.',
      },
    ],
    relatedSlugs: ['purchase-order-vs-quotation', 'delivery-challan-complete-guide', 'free-invoice-maker-online-guide'],
  },

  {
    slug: 'delivery-challan-complete-guide',
    title: 'Delivery Challan Under GST: When to Use One, Format and Rules Explained',
    seoTitle: 'Delivery Challan Format & GST Rules 2026 | When Challan Replaces Invoice',
    metaDescription:
      'When can goods move on a delivery challan instead of a tax invoice? Rule 55 cases, mandatory challan contents, transport details, copies convention and a free challan generator.',
    keywords: [
      'delivery challan',
      'delivery challan format',
      'delivery challan under gst',
      'challan vs invoice',
      'rule 55 delivery challan',
      'delivery challan for job work',
      'challan generator online free',
      'e-way bill delivery challan',
    ],
    date: '2026-07-18',
    readingTime: 8,
    category: 'GST & Tax',
    excerpt:
      'Goods do not always move against an invoice — job work, exhibitions, approvals and branch transfers all travel on a delivery challan. Here is when and how to use one correctly.',
    intro:
      'Every movement of goods needs a document, but not every movement is a sale. Sending material to a job worker, taking products to an exhibition, moving stock between your own premises, or supplying on approval — in all these cases there is no invoice to issue, because no supply has (yet) happened. The delivery challan is the document GST law prescribes for exactly these movements. Used correctly it keeps your goods moving without tax complications; used wrongly — as an invoice substitute for actual sales — it invites serious trouble. This guide draws the line clearly.',
    sections: [
      {
        heading: 'When a delivery challan is the right document (Rule 55)',
        body: 'Rule 55 of the CGST Rules permits transporting goods on a delivery challan instead of an invoice in specific situations: supply of liquid gas where quantity is unknown at removal; transportation for job work (sending materials to a processor and receiving them back); transportation for reasons other than supply — branch transfers within the same state, moving goods to or from an exhibition, sending goods on approval; and other notified cases.\n\nThe unifying idea: the goods are moving, but ownership is not transferring as a sale at that moment. The moment a movement IS a sale, a tax invoice — not a challan — must accompany it.',
      },
      {
        heading: 'What the challan must contain',
        body: 'A compliant delivery challan carries: a serially numbered challan number and date; the consignor’s name, address and GSTIN; the consignee’s details (and GSTIN where registered); HSN codes and descriptions of the goods; the quantity — provisional where the exact quantity is unknown; the taxable value; the tax rate and amount where the movement will eventually attract tax; the place of supply for inter-state movement; and signature.\n\nTransport details make the challan operationally useful: transporter name, vehicle number, LR/docket number and the dispatch mode let anyone — including an officer at a checkpoint — connect the paper to the truck.',
        bullets: [
          'Serial challan number and date',
          'Consignor and consignee details with GSTINs',
          'Goods description, HSN, quantity and value',
          'Transporter name, vehicle number and LR number',
          'Purpose of movement (job work / exhibition / approval / own use)',
        ],
      },
      {
        heading: 'The three copies convention',
        body: 'Rule 55 prescribes the challan in triplicate: the original marked for the consignee, the duplicate for the transporter, and the triplicate retained by the consignor. The transporter’s copy travels with the vehicle; the consignee signs the consignor’s copy (or the original returns signed) as proof of delivery.\n\nThat receiver’s signature is worth more than it looks: it is your evidence of what quantity actually arrived, in what condition, on what date. Insist on a name and signature at delivery, and note any shortage or damage on the copy before the vehicle leaves.',
      },
      {
        heading: 'Delivery challan and the e-way bill',
        body: 'The challan and the e-way bill answer different questions — the challan documents what is moving and why; the e-way bill registers the movement with the GST system. For movements above ₹50,000 in value, an e-way bill is generally required even when goods travel on a challan rather than an invoice (job work movements notably require one for inter-state transfer regardless of value in many cases).\n\nWhen generating the e-way bill for a challan movement, select the appropriate sub-type (job work, exhibition, own use) and quote the challan number. The challan’s vehicle number field should match the e-way bill’s Part B.',
      },
      {
        heading: 'Challan vs invoice: the line you must not blur',
        body: 'A delivery challan is not a tax invoice, carries no demand for payment, and passes no input credit. Using challans for actual sales — a practice some businesses slip into to defer tax — is treated as suppression of supply and attracts penalties along with tax and interest. The clean pattern for a sale is invoice first (or with the goods), challan only when Rule 55 applies.\n\nFor supply on approval, the sequence is: goods move on a challan; if the customer accepts, issue the tax invoice at acceptance (or within six months, whichever is earlier). The free delivery challan generator handles the challan half — with purpose, transport details and receiver signature block — and the invoice maker handles the sale when it happens.',
      },
    ],
    faqs: [
      {
        q: 'Can I use a delivery challan instead of an invoice for a sale?',
        a: 'No. A sale requires a tax invoice. The challan is only for movements that are not supplies — job work, exhibitions, approval basis, own-premises transfers — or the specific cases Rule 55 lists. Using challans to disguise sales is a serious GST violation.',
      },
      {
        q: 'Does a delivery challan need to show GST amounts?',
        a: 'It must show the tax rate and amount where the movement to the consignee will eventually attract tax (for example, inter-state stock transfer to a branch with a different GSTIN). For pure job-work movements, value is declared but no tax is charged on the challan itself.',
      },
      {
        q: 'Is an e-way bill needed for a job work challan?',
        a: 'For inter-state job work movements, yes — regardless of value. For intra-state movements the general ₹50,000 threshold applies, subject to state-specific rules. Generate the e-way bill citing the challan number and matching vehicle details.',
      },
      {
        q: 'How long should challans be preserved?',
        a: 'As GST documents, retain them with your other records — at least 72 months from the due date of the annual return for the year concerned. For job work, retain the outward and corresponding return challans together so the material loop is provable.',
      },
    ],
    relatedSlugs: ['gst-invoice-rules-guide', 'purchase-order-process-guide', 'free-invoice-maker-online-guide'],
  },

  {
    slug: 'credit-note-debit-note-explained',
    title: 'Credit Note vs Debit Note in GST: When to Issue Which (With Examples)',
    seoTitle: 'Credit Note vs Debit Note GST 2026 | Section 34 Rules, Time Limits & Examples',
    metaDescription:
      'Overcharged or undercharged an invoice? Learn when to issue a credit note vs a debit note under Section 34, the GST time limits, ITC impact and worked examples for sales returns and rate corrections.',
    keywords: [
      'credit note vs debit note',
      'credit note under gst',
      'debit note under gst',
      'section 34 cgst act',
      'credit note time limit',
      'sales return credit note',
      'credit note generator free',
      'debit note format gst',
    ],
    date: '2026-07-18',
    readingTime: 9,
    category: 'GST & Tax',
    excerpt:
      'Invoices cannot be edited after issue — they are corrected with credit and debit notes. Here is exactly when to use which, with GST time limits and worked examples.',
    intro:
      'Every business eventually issues an invoice that turns out to be wrong: goods come back, a discount is agreed after billing, a rate card was outdated, a quantity was under-billed. GST law’s answer is never to edit or cancel the invoice silently — it is to correct it with a linked document: a credit note when the customer was charged too much, a debit note when too little. Both live in Section 34 of the CGST Act, both must reference the original invoice, and each has its own tax consequences and deadlines. This guide sorts out which to issue when, with concrete examples.',
    sections: [
      {
        heading: 'The one-line rule',
        body: 'Ask what happens to the customer’s account in your books. If the amount they owe you goes DOWN — goods returned, overcharge, post-sale discount, deficient service — issue a credit note. If the amount they owe goes UP — rate billed too low, quantity under-billed, tax rate too low — issue a debit note.\n\nBoth documents carry their own serial number and date, name the original invoice by number and date, state the reason, and show the differential value and tax. Traceability to the original invoice is what makes them valid; a note that references nothing corrects nothing.',
      },
      {
        heading: 'Credit notes: reducing what was charged',
        body: 'The classic triggers: sales returns (a retailer sends back 20 defective pieces), overbilling (invoice said 100 units, 90 were shipped), post-sale discounts agreed in terms, and services that fell short of contract. The credit note reverses the excess value and its tax.\n\nWorked example: original invoice ₹1,18,000 (₹1,00,000 + 18% GST) for 100 units. Twenty defective units return. Credit note: value ₹20,000, GST ₹3,600, total ₹23,600, reason "sales return — manufacturing defect", referencing the original invoice number and date. The supplier’s output liability drops by ₹3,600 when the note is reported in GSTR-1; the buyer reverses the same ₹3,600 of input credit.',
      },
      {
        heading: 'Debit notes: recovering what was under-charged',
        body: 'Triggers mirror the credit note: a rate revision or escalation clause applied after billing, quantity delivered exceeding quantity billed, or a tax rate applied too low (12% where 18% was correct). The debit note — GST law also calls it a supplementary invoice — charges the difference plus tax.\n\nWorked example: 10 tonnes of steel billed at ₹52,000/tonne against an agreed current rate of ₹54,500. Debit note: differential ₹25,000, GST @18% ₹4,500, total ₹29,500, reason stated with the rate circular reference. The buyer can claim the ₹4,500 as fresh input credit on the strength of the debit note itself.',
      },
      {
        heading: 'Time limits and reporting',
        body: 'Credit notes carry a hard deadline for GST effect: to reduce your tax liability, the note must be declared no later than 30 November following the end of the financial year of the original supply, or the date of filing the annual return, whichever is earlier. Miss it and you can still issue a commercial credit note, but the GST reduction is lost.\n\nDebit notes have no such outer limit — they increase liability, so the government is in no hurry to stop you. The recipient’s input-credit clock on a debit note runs from the note’s own date, not the original invoice’s. Both note types are reported in GSTR-1 for the period of issue.',
        bullets: [
          'Credit note GST deadline: 30 November after the financial year (or annual return date)',
          'Debit note: no outer time limit; ITC clock runs from the note date',
          'Both reported in GSTR-1 of the month of issue',
          'One note per original invoice keeps reconciliation clean',
        ],
      },
      {
        heading: 'Numbering, format and clean practice',
        body: 'Run separate continuous series for each: CN-2026-0001 and DN-2026-0007, never mixed with each other or with invoices, up to 16 characters. State reasons specifically — "rate revision from ₹52,000 to ₹54,500 per MT per agreement dated 15 May 2026" survives audit scrutiny; "difference amount" does not. Send the note to the counterparty the day it is issued and confirm they have booked it.\n\nFree credit note and debit note generators structure all of this — original invoice reference fields, reason, differential amounts with automatic CGST/SGST/IGST — and export a clean PDF for your records and the counterparty’s.',
      },
    ],
    faqs: [
      {
        q: 'Can I just cancel an invoice instead of issuing a credit note?',
        a: 'Only in the narrow window before the supply is reported — and if e-invoicing applies, within the IRP’s 24-hour cancellation window. Once the invoice is in a filed return, the credit note is the only compliant way to reverse it, in whole or in part.',
      },
      {
        q: 'Who issues the debit note when goods are returned to a supplier?',
        a: 'Commercially, the buyer often raises a debit note claiming the return, and the supplier answers with a credit note. For GST purposes, it is the supplier’s credit note that adjusts tax. Both documents referencing the same original invoice is normal and correct.',
      },
      {
        q: 'Does a credit note always reduce GST?',
        a: 'Only if issued and declared within the Section 34 time limit, and the buyer correspondingly reverses their input credit. Late notes, or notes for supplies where the buyer refuses reversal, take effect commercially but not against your GST liability.',
      },
      {
        q: 'Can one credit note cover multiple invoices?',
        a: 'GST rules permit a consolidated credit or debit note against multiple invoices of the same financial year to the same recipient. In practice, one note per invoice keeps matching dramatically simpler and is worth the extra documents.',
      },
      {
        q: 'What details are mandatory on credit and debit notes?',
        a: 'Supplier details with GSTIN, a unique serial number and date, recipient details, the original invoice number(s) and date(s), the differential taxable value and tax, the reason, and an authorised signature — the same discipline as a tax invoice, applied to the correction.',
      },
    ],
    relatedSlugs: ['gst-invoice-rules-guide', 'free-invoice-maker-online-guide', 'how-to-revise-a-quotation'],
  },
];
