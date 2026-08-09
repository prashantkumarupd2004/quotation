import fs from 'node:fs';

function faqItem(q, a) {
  return `    {\n      q: '${q}',\n      a: '${a}',\n    },`;
}
function industryItem(name, icon, text, detail) {
  return `      {\n        name: '${name}',\n        icon: '${icon}',\n        text: '${text}',\n        detail: '${detail}',\n      },`;
}
function refItem(label, url, note) {
  return `      { label: '${label}', url: '${url}', note: '${note}' },`;
}
function buildIndustries(heading, intro, items) {
  const rows = items.map(i => industryItem(i.name, i.icon, i.text, i.detail)).join('\n');
  return `  industries: {\n    heading: '${heading}',\n    intro: '${intro}',\n    items: [\n${rows}\n    ],\n  },`;
}
function buildReferences(heading, intro, items) {
  const rows = items.map(i => refItem(i.label, i.url, i.note)).join('\n');
  return `  references: {\n    heading: '${heading}',\n    intro: '${intro}',\n    items: [\n${rows}\n    ],\n  },`;
}
function apply(file, newFaqs, industries, references) {
  let src = fs.readFileSync(file, 'utf8');
  const hasCRLF = src.includes('\r\n');
  if (hasCRLF) src = src.replace(/\r\n/g, '\n');
  if (src.includes('industries: {')) { console.log('skip (already patched):', file); return; }
  const faqAnchor = '\n  ],\n  relatedHeading';
  const faqIdx = src.indexOf(faqAnchor);
  if (faqIdx === -1) { console.error('FAQ anchor not found:', file); return; }
  const faqBlock = '\n' + newFaqs.map(f => faqItem(f.q, f.a)).join('\n');
  src = src.slice(0, faqIdx) + faqBlock + src.slice(faqIdx);
  const closeIdx = src.lastIndexOf('\n};');
  if (closeIdx === -1) { console.error('Closing }; not found:', file); return; }
  const indBlock = '\n' + buildIndustries(industries.heading, industries.intro, industries.items);
  const refBlock = '\n' + buildReferences(references.heading, references.intro, references.items);
  src = src.slice(0, closeIdx) + indBlock + '\n' + refBlock + src.slice(closeIdx);
  if (hasCRLF) src = src.replace(/\n/g, '\r\n');
  fs.writeFileSync(file, src);
  console.log('updated:', file);
}

// ── PAYMENT RECEIPT ───────────────────────────────────────────────────────────
const prFaqs = [
  { q: 'What is the difference between a payment receipt and a tax invoice?',
    a: 'An invoice is a demand for payment — it tells the buyer what they owe, when it is due and how to pay. A payment receipt is issued after money is received — it confirms that payment has been made and closes the transaction. They are legally separate documents: an invoice creates a receivable in your books, and the receipt extinguishes it. For audited businesses, having both is essential because the invoice proves entitlement to the money and the receipt proves it was collected.' },
  { q: 'Is there a legal limit on accepting cash without triggering tax provisions?',
    a: 'Yes. Section 269SS of the Income Tax Act prohibits accepting a loan, deposit or advance in cash above Rs 20,000 from a single person on a single day. Section 269T prohibits repaying any loan or deposit above Rs 20,000 in cash. Section 40A(3) of the IT Act disallows business expenditure paid in cash above Rs 10,000 per day per person as a tax deduction. For sales receipts (not loans), there is no hard legal ceiling, but the Rs 2 lakh limit under Section 269ST restricts receiving Rs 2 lakh or more in cash from a single person in a single transaction or within a day.' },
  { q: 'What is Section 269ST and how does it affect cash receipts?',
    a: 'Section 269ST of the Income Tax Act prohibits any person from receiving Rs 2 lakh or more in cash from a single person in a single transaction, in aggregate from a single person in a day, or in respect of a single event or occasion. A penalty equal to the amount received applies if violated. This effectively caps large cash sales and collections at Rs 1,99,999 per customer per day — anything above must be received through banking channels.' },
  { q: 'Can I issue a payment receipt for a UPI payment?',
    a: 'Yes, and for UPI transactions it is good practice even though a bank credit notification is generated automatically. A formal receipt with your letterhead, the invoice number, the UPI transaction reference (UTR), the date and the exact amount provides a professional document the payer can retain for expense claims or audit. It also eliminates any confusion if the UPI notification is delayed or the customer changes phones.' },
  { q: 'Should I issue a separate receipt for each instalment in a multi-payment arrangement?',
    a: 'Yes. Issue one receipt per payment, each referencing the invoice number and specifying whether it is the advance, first instalment, balance payment, or whatever tranche it represents. A running total on each receipt showing the total invoiced amount, amounts received to date and the balance outstanding is the most useful format for both parties.' },
  { q: 'Is a payment receipt a GST document?',
    a: 'No. A payment receipt is purely a commercial document confirming money received — it does not create or reverse any GST liability and confers no input tax credit entitlement. GST obligations are governed by the tax invoice and credit note, not by receipts. However, when you receive an advance payment for a taxable supply, you may need to issue a receipt-cum-advance invoice that does carry GST — consult your CA for the correct treatment in your specific case.' },
  { q: 'What should a receipt show when payment is received against multiple invoices?',
    a: 'List each invoice number and the amount applied to it in separate rows, then show the total received. This is standard practice for clearing outstanding statements: the customer sends one payment to settle three invoices, and the receipt breaks down the allocation so both parties\' books can be updated correctly and reconciliation at year-end is straightforward.' },
  { q: 'Can I issue a receipt before the payment clears in my bank account?',
    a: 'For NEFT and RTGS transfers, a receipt is normally issued once the transaction confirmation arrives, which is typically on the same day. For cheques, best practice is to issue the receipt once the cheque clears — not on the date of receiving the cheque. Noting "Subject to realisation" on a cheque receipt is common in trade, giving you the right to cancel the receipt if the cheque bounces.' },
  { q: 'Does a receipt need to be on letterhead or can it be handwritten?',
    a: 'A handwritten receipt on plain paper is legally valid in India. However, a printed receipt on letterhead with a unique sequential number, your business details, and the transaction details is far more professional, is harder to dispute, and is required by the accounts teams of most corporate clients. For businesses issuing more than a handful of receipts per month, a digital receipt system is the practical standard.' },
  { q: 'What is a UTR number and should it appear on a receipt for NEFT or RTGS?',
    a: 'UTR stands for Unique Transaction Reference — it is a 22-character alphanumeric code that identifies every NEFT or RTGS transaction in the Indian banking system. Yes, the UTR should appear on every receipt for a bank transfer payment — it is the reference that allows both parties to independently verify the transaction with their banks, and it is what an auditor or accounts team will request if a payment is disputed.' },
  { q: 'How long should I retain payment receipt copies?',
    a: 'Retain payment receipts for at least six years from the end of the financial year in which the payment was received — consistent with the income tax record-keeping requirement under Section 44AA. For large corporate or government transactions, retain for eight years or until any audit or legal matter relating to that transaction is fully resolved. Digital receipt copies backed up to cloud storage are sufficient provided they are unaltered and retrievable.' },
  { q: 'Can a client demand a receipt for a payment they made three months ago?',
    a: 'Yes, and you should be able to provide one. A receipt can be issued or reissued at any time — date it as the actual date of payment, not the date you are issuing it, and mark it "Duplicate" if it is a reissue. Your sequential receipt numbering will show that this receipt\'s number falls within the correct date range even if it is being reprinted today.' },
];

const prIndustries = {
  heading: 'How Different Industries Use Payment Receipts',
  intro: 'A receipt closes the transaction — but what it must document and who needs it varies significantly across sectors.',
  items: [
    { name: 'Construction & Civil Work', icon: 'HardHat',
      text: 'Contractors issue receipts for milestone advance payments and release payments tied to RA bills. The receipt cross-references the RA bill number and records whether the payment includes retention money release.',
      detail: 'Note the running recovery of any mobilisation advance on each receipt so the running account balance is clear to both the client\'s project manager and their auditor.' },
    { name: 'IT Services & Agencies', icon: 'Laptop',
      text: 'IT companies issue receipts against project advances and milestone payments, referencing the SOW or project number. Corporate clients require the receipt to reference their internal payment reference number for three-way matching.',
      detail: 'Include the bank\'s UTR or payment reference number on every IT services receipt — corporate accounts teams close their payable entries against UTRs, and receipts without this reference sit unmatched.' },
    { name: 'Medical & Healthcare', icon: 'Stethoscope',
      text: 'Hospitals and clinics issue receipts for consultation fees, procedure deposits and pharmacy payments. For insurance-linked treatments, the receipt must show whether the patient paid out-of-pocket or through an insurer.',
      detail: 'Medical receipts should show the name of the patient separately from the payer when they differ — a corporate health insurance payer requires this for claim processing and employee reimbursement.' },
    { name: 'Retail & Cash Sales', icon: 'Store',
      text: 'Retail shops issue POS receipts for every cash and card transaction. For high-value retail (jewellery, electronics, furniture), a formal receipt with the item description, serial number and GST breakup is required for warranty claims.',
      detail: 'For cash sales above Rs 2 lakh, get the buyer\'s PAN on the receipt — Section 114B of the Income Tax Act requires high-value cash transactions to be reported, and the PAN protects both seller and buyer in any audit.' },
    { name: 'Education & Institutions', icon: 'GraduationCap',
      text: 'Schools and colleges issue official fee receipts for tuition, examination and hostel payments. These receipts are used by students for tax exemption claims (Section 80C), scholarship applications and employer reimbursements.',
      detail: 'Educational institution receipts should state the academic year and the head of fee separately (tuition, lab, exam) — students and scholarship committees need this breakdown for eligibility verification.' },
    { name: 'Hospitality & Hotels', icon: 'UtensilsCrossed',
      text: 'Hotels issue folio receipts at checkout and advance payment receipts for banquet bookings. Corporate guests require a GST-compliant receipt with their company GSTIN to claim ITC on accommodation expenses.',
      detail: 'For corporate hospitality receipts, split the folio into room charges, F&B and other charges as separate lines — without this breakdown a corporate finance team cannot determine which expenses are ITC-eligible.' },
    { name: 'Automobile Services', icon: 'Car',
      text: 'Service centres issue receipts for advance deposits on repairs, balance payments on job completion, and annual maintenance contract payments. Vehicle buyers receive receipts for booking amounts, advance payments and final settlement.',
      detail: 'Automobile service receipts should reference the job card number and vehicle registration number — without these, the customer cannot link the receipt to the specific repair event for warranty or insurance claims.' },
    { name: 'Interior Design & Projects', icon: 'Sofa',
      text: 'Interior designers issue receipts for design retainers, material procurement advances, and milestone payments. The receipt structure mirrors the proforma invoice stages: design, procurement, execution, and handover.',
      detail: 'Number interior design receipts in a project-specific series rather than a single company series — it makes project-level payment tracking transparent for both the designer and the client.' },
    { name: 'Freelancing & Consulting', icon: 'User',
      text: 'Freelancers issue receipts for project advances and final payments, usually on the same day the bank transfer arrives. The receipt references the invoice and may include the balance if a portion is still outstanding.',
      detail: 'For freelancers working with multiple clients, use a single sequential receipt series across all clients — it makes income reconciliation clean at tax time and signals professionalism to corporate clients who require receipt numbers for bookkeeping.' },
    { name: 'Manufacturing & Supply', icon: 'Factory',
      text: 'Manufacturers acknowledge advance payments against proforma invoices with formal receipts. For high-volume distributors, receipts are auto-generated against incoming RTGS/NEFT credits and sent with the day\'s dispatch documents.',
      detail: 'Manufacturer receipts for advance against custom orders should state the tentative delivery date to which the advance applies — without this, the customer has no basis for a specific performance claim if delivery is delayed.' },
  ],
};

const prReferences = {
  heading: 'Income Tax and Payment Law References',
  intro: 'These primary sources govern cash transaction limits, receipt obligations and banking rules that apply when issuing payment receipts.',
  items: [
    { label: 'Income Tax Act — Section 269ST: Cash Receipt Limit', url: 'https://incometaxindia.gov.in', note: 'Prohibits receiving Rs 2 lakh or more in cash from a single person in a day or per transaction; penalty equals the amount received.' },
    { label: 'Income Tax Act — Section 269SS: Cash Loan Restrictions', url: 'https://incometaxindia.gov.in', note: 'Prohibits accepting any loan, deposit or advance in cash above Rs 20,000; relevant when receipts document advance payments.' },
    { label: 'Income Tax Act — Section 44AA: Record-Keeping', url: 'https://incometaxindia.gov.in', note: 'Specifies the obligation to maintain books of account including receipts and the six-year minimum retention period.' },
    { label: 'RBI — NEFT and RTGS Operating Procedures', url: 'https://rbi.org.in', note: 'Defines the UTR reference number format for NEFT and RTGS transactions, which should appear on payment receipts for bank transfers.' },
    { label: 'CGST Act — Advance Payment and Tax Liability', url: 'https://cbic-gst.gov.in', note: 'Section 12 clarifies that for goods, GST on advance payment is due at the time of receipt; receipts for advances must be carefully worded to comply.' },
  ],
};

apply('src/data/tools/payment-receipt.ts', prFaqs, prIndustries, prReferences);

// ── CREDIT NOTE ───────────────────────────────────────────────────────────────
const cnFaqs = [
  { q: 'What is a credit note under GST and when must it be issued?',
    a: 'A credit note is a document issued by a registered supplier to reduce the taxable value or tax charged on an earlier invoice. Section 34(1) of the CGST Act requires a credit note when goods are returned, when an excess amount has been charged, when goods or services are found deficient, or when the discount agreed at the time of supply was not reflected in the original invoice. It reverses the supplier\'s GST liability and reduces the buyer\'s previously claimed input tax credit.' },
  { q: 'Is there a time limit for issuing a GST credit note?',
    a: 'Yes. Under Section 34(2) of the CGST Act, a credit note must be declared in the GSTR-1 return for the period in which it is issued, and the latest it can be reported is September of the following financial year or the date of filing the annual return (GSTR-9), whichever is earlier. In practice: for a credit note relating to a supply made in FY 2025-26, the last date to report it in GSTR-1 is September 2026. Beyond that date, you can still issue the document for commercial purposes, but the GST adjustment is not available.' },
  { q: 'What is a financial credit note as distinct from a GST credit note?',
    a: 'A financial credit note (sometimes called a commercial credit note) is issued to grant a discount or price reduction after the original invoice, without adjusting the GST. It is used when the supplier does not want to reduce the taxable value — for example, when granting a loyalty discount that was not agreed at the time of supply. A GST credit note reduces both the taxable value and the associated tax. Both types must cross-reference the original invoice number and are valid commercial documents, but only the GST credit note triggers a change in the GST return.' },
  { q: 'Does the recipient need to reverse their input tax credit when a credit note is received?',
    a: 'Yes. When a supplier issues a credit note and declares it in GSTR-1, the corresponding reduction appears in the recipient\'s GSTR-2B. The recipient must reverse the input tax credit to the extent of the credit note — if they claimed ITC of Rs 18,000 and receive a credit note for Rs 9,000 of tax, they must reverse Rs 9,000 of ITC. Failure to reverse results in excess ITC being carried in the recipient\'s books, which attracts interest if detected in an audit.' },
  { q: 'Can a buyer issue a credit note to a seller?',
    a: 'Under GST law, credit notes are issued by suppliers (sellers), not by buyers. However, in commercial practice, buyers sometimes use the term "debit note" for the document they raise when returning goods or disputing a charge — this is a buyer-issued debit note, which functions commercially as a purchase reduction. The seller\'s corresponding document is a credit note that they issue in response.' },
  { q: 'What mandatory fields must a GST credit note contain?',
    a: 'CGST Rule 53 requires: the words "Credit Note" at the top, a consecutive serial number up to 16 characters, the date, your GSTIN and business name, the recipient\'s name, address and GSTIN, the original invoice number and date, the taxable value and tax reduction, the reason for the credit note, and the signature of the authorised person. A credit note without an original invoice reference is difficult to process in the GST return and will be flagged during audits.' },
  { q: 'Can I issue a credit note for goods returned after the six-month GST window?',
    a: 'After the September deadline passes, you can still issue a credit note for commercial and accounting purposes, but the GST adjustment will not be available. The supplier\'s GST liability and the buyer\'s ITC both remain as per the original invoice. This is why prompt issuance of credit notes matters in practice — waiting until the following financial year effectively locks in the tax even if the goods were genuinely returned.' },
  { q: 'How does a credit note appear in the GST return?',
    a: 'Credit notes are reported in GSTR-1 under the relevant table for the period in which the credit note is issued — Table 9A for amendments, Table 9C for credit notes against B2B invoices. When you upload the credit note in GSTR-1, the buyer sees it in their GSTR-2B as a negative entry, prompting them to reverse the corresponding ITC. If you forget to upload a credit note, your GST liability remains elevated.' },
  { q: 'Can a credit note be issued for a full cancellation of an invoice?',
    a: 'Yes. A credit note for the full taxable value and tax of the original invoice effectively cancels it. This is the correct approach when a supply is entirely reversed — for example, goods are returned in full, or a service was not delivered. The credit note does not literally delete the original invoice from the records; both documents remain, and the net effect in the GST return is zero for that transaction.' },
  { q: 'Is there a minimum or maximum value for a credit note?',
    a: 'No statutory minimum or maximum exists. A credit note can be for Rs 1 (a rounding correction) or for the full value of a large invoice. What matters is that the stated reason is genuine and documented, the original invoice is correctly referenced, and the document is reported in GSTR-1 within the allowed time window.' },
  { q: 'Does a credit note need to be linked to a specific invoice?',
    a: 'Yes, always. A credit note without an original invoice reference is commercially ambiguous and creates problems in GST reconciliation — both the supplier\'s GSTR-1 and the recipient\'s ITC reversal depend on matching the credit note to a specific invoice. If the credit applies across multiple invoices, list each invoice number and the portion of the credit note allocated to it.' },
  { q: 'What is the difference between a credit note and a refund?',
    a: 'A credit note reduces the amount the buyer owes — it is a book adjustment. A refund involves the actual return of money from the seller to the buyer. Many credit notes never result in cash leaving the seller\'s account; instead, the buyer applies the credit note value against their next purchase or against an outstanding invoice. A refund is a separate event that may follow a credit note but is not the same as it.' },
];

const cnIndustries = {
  heading: 'Credit Notes Across Industries — When and Why They Are Raised',
  intro: 'Credit notes arise in every business where goods can be returned, services can fall short, or pricing needs to be corrected after invoicing.',
  items: [
    { name: 'Manufacturing & Returns', icon: 'Factory',
      text: 'Manufacturers issue credit notes when distributors return damaged or excess stock, when a batch fails quality testing after delivery, or when a price revision is agreed retroactively. The credit note value equals the returned quantity at the original invoiced rate plus the proportionate GST.',
      detail: 'Attach the inspection report or rejection memo to every manufacturing credit note — without documented evidence of the defect or return, the GST department may challenge the credit note as a paper reduction with no commercial basis.' },
    { name: 'Retail & Wholesale Refunds', icon: 'Store',
      text: 'Retailers issue credit notes for product returns, short deliveries and promotional discounts granted after billing. High-volume distributors run weekly credit note cycles to settle all return and claims activity before closing the month.',
      detail: 'Match every retail credit note to the original delivery challan and invoice before issuing it — credit notes raised without documentary evidence of the return are a leading cause of GST audit adjustments in the retail sector.' },
    { name: 'IT Services & SLA Breaches', icon: 'Laptop',
      text: 'IT service providers issue credit notes when service level agreement penalties are triggered, when a contracted scope is only partially delivered, or when a client disputes hours billed. The credit note settles the commercial dispute without requiring the original invoice to be cancelled.',
      detail: 'Document the SLA breach or scope shortfall in a formal communication before issuing the credit note — verbal agreements to reduce the invoice are commercially fragile and unenforceable if the client\'s accounts team later disputes the credit.' },
    { name: 'Medical & Billing Corrections', icon: 'Stethoscope',
      text: 'Hospitals and clinics issue credit notes when procedures are billed incorrectly, when a patient is discharged before a service is rendered, or when insurance companies negotiate a reduction from the standard billing rate. Pharmacy distributors issue credits for returned or expired stock.',
      detail: 'Medical credit notes must reference the patient name and original bill number alongside the invoice number — hospital billing teams match credits to specific patient folios, not just to invoice numbers, and missing the patient reference delays processing.' },
    { name: 'Construction & Defect Claims', icon: 'HardHat',
      text: 'Construction contractors receive credit notes from material suppliers for damaged goods, short measurements and quality rejections. They issue credit notes to clients when work is found deficient after measurement or when agreed price reductions are applied at final account settlement.',
      detail: 'Construction credit notes should reference the RA bill number or measurement book entry being reversed, not just the tax invoice number — project finance teams track payments at the RA bill level, and an invoice-only reference creates reconciliation gaps.' },
    { name: 'Automobile & Warranty', icon: 'Car',
      text: 'Dealerships issue credit notes for warranty parts replacements (where the OEM reimburses the dealer), for accessories that are returned or exchanged, and for trade-in value credits. Spare parts distributors issue credits for damaged or incorrectly shipped parts.',
      detail: 'Warranty claim credit notes between dealers and OEMs must cross-reference the warranty claim number from the OEM system — the manufacturer\'s accounts team will not process a credit note without this reference.' },
    { name: 'Hospitality & Complaints', icon: 'UtensilsCrossed',
      text: 'Hotels and restaurants issue credit notes to corporate accounts when services fall short of contracted standards, when a guest leaves early and the full stay was billed, or when banquet functions are reduced in scope after the proforma was issued.',
      detail: 'Hospitality credit notes should state the general manager\'s or accounts manager\'s reason for the reduction clearly — corporate clients\' accounts teams require a documented business reason before they will accept a credit note adjustment in their payables.' },
    { name: 'Education & Fee Adjustments', icon: 'GraduationCap',
      text: 'Educational institutions issue credit notes for fee reversals on withdrawal from a course, for overpayments received, and for scholarships or concessions granted after the fee invoice was raised. Corporate training providers issue credits when a planned training batch is cancelled.',
      detail: 'Educational credit notes should clearly state whether the credit is refundable in cash or adjustable against future fees — this distinction determines the accounting treatment in the student\'s or sponsor\'s books.' },
    { name: 'Interior Design & Revisions', icon: 'Sofa',
      text: 'Interior design firms issue credit notes when a contracted scope is reduced at the client\'s request, when materials delivered do not match the specification and are returned, or when a discount is negotiated at project closure below the originally invoiced amount.',
      detail: 'Interior design credit notes for returned materials should reference both the delivery challan number and the original purchase invoice — the challan proves the return happened and the invoice proves the original price at which the credit should be calculated.' },
    { name: 'Freelancing & Scope Reduction', icon: 'User',
      text: 'Freelancers issue credit notes when a project scope is mutually reduced after billing, when a deliverable is found to not meet the agreed specification, or when a refund is partially agreed after a dispute. The credit note protects both parties by documenting the reduction formally.',
      detail: 'Freelancer credit notes must reference the specific invoice and deliverable being credited — a generic "credit for project work" creates ambiguity about which engagement is being reduced and whether the freelancer\'s tax position has changed.' },
  ],
};

const cnReferences = {
  heading: 'GST Law and Commercial References for Credit Notes',
  intro: 'Credit notes under GST are governed by specific statutory provisions — here are the primary sources.',
  items: [
    { label: 'CGST Act, 2017 — Section 34: Credit and Debit Notes', url: 'https://cbic-gst.gov.in', note: 'Defines when credit notes must be issued, sets the September deadline for GST adjustment, and specifies the obligation to declare them in GSTR-1.' },
    { label: 'CGST Rules, 2017 — Rule 53: Contents of Credit Notes', url: 'https://cbic-gst.gov.in', note: 'Prescribes the mandatory fields a GST credit note must contain, including original invoice reference, reason for issuance and serial numbering.' },
    { label: 'GST Taxpayer Portal — GSTR-1 Filing', url: 'https://www.gst.gov.in', note: 'Official portal where credit notes are uploaded in GSTR-1 so they flow into the recipient\'s GSTR-2B for ITC reversal.' },
    { label: 'CBIC — GST Circular on Post-Supply Discounts', url: 'https://cbic-gst.gov.in', note: 'CBIC Circular 92/11/2019 clarifies when post-supply discounts qualify for a GST credit note adjustment versus when they are purely financial adjustments.' },
    { label: 'Indian Contract Act, 1872 — Rights on Breach', url: 'https://legislative.gov.in', note: 'Governs the buyer\'s right to claim a price reduction for defective goods or services, which forms the commercial basis for many credit notes.' },
  ],
};

apply('src/data/tools/credit-note.ts', cnFaqs, cnIndustries, cnReferences);

// ── DEBIT NOTE ────────────────────────────────────────────────────────────────
const dnFaqs = [
  { q: 'What is a debit note under GST and when should one be issued?',
    a: 'A debit note is issued by a supplier when the taxable value or tax charged on an original invoice turns out to be less than what it should have been. Section 34(3) of the CGST Act covers this: common reasons include a price revision agreed after invoicing, additional quantities discovered during delivery reconciliation, or a tax rate correction from a lower to a higher rate. The debit note increases the supplier\'s GST liability and entitles the recipient to claim additional input tax credit.' },
  { q: 'Is there a time limit for issuing a debit note under GST?',
    a: 'Unlike credit notes, there is no statutory time limit for issuing a debit note under the CGST Act. You can issue a debit note at any time after the original invoice, even years later. However, it must be declared in GSTR-1 for the period in which it is issued — and the recipient can claim the additional ITC only from the period in which the debit note is uploaded and appears in their GSTR-2B.' },
  { q: 'What is the difference between a debit note and a supplementary invoice?',
    a: 'In current GST terminology they refer to the same document. Before the GST era, a supplementary invoice was used to raise additional amounts against an original invoice. Under the CGST Act, this function is now formally called a debit note. Some older business software still uses the term "supplementary invoice" — for GST compliance, ensure the document is titled "Debit Note" and references the original invoice number.' },
  { q: 'Can a buyer issue a debit note to a seller?',
    a: 'Yes, but in a different commercial context. When a buyer raises a debit note, it is a unilateral document saying "we are deducting this amount from what we owe you" — for example, when a penalty clause is invoked, when goods are found short on delivery, or when a price protection clause kicks in. This buyer-issued debit note is a commercial document; it does not create a GST liability for the seller and cannot be used by the buyer to adjust their input credit.' },
  { q: 'What mandatory fields must appear on a GST debit note?',
    a: 'CGST Rule 53 requires a debit note to contain: the words "Debit Note" at the top, a consecutive serial number up to 16 characters, the date, your GSTIN and business name, the recipient\'s GSTIN and business details, the original invoice number and date being revised, the taxable value being added, the additional tax amount, the reason for the debit note, and the signature of the authorised signatory.' },
  { q: 'How does a debit note affect the recipient\'s input tax credit?',
    a: 'A debit note increases the tax amount the supplier has charged, and the corresponding additional ITC becomes available to the recipient — but only from the period in which the debit note is declared in the supplier\'s GSTR-1 and appears in the recipient\'s GSTR-2B. The recipient cannot claim this ITC for periods before the debit note is uploaded, regardless of when the original supply occurred.' },
  { q: 'Should I issue a debit note or simply raise a new invoice for additional work?',
    a: 'If the additional work is part of the same original contract or project that was already invoiced, issue a debit note that references the original invoice — this keeps the transaction history clean and the accounting treatment is clear. If the additional work is a genuinely separate new scope with its own terms, raise a fresh invoice. The practical test: would a client\'s accounts team process this as an addition to an existing purchase order, or as a new purchase order?' },
  { q: 'Can I issue multiple debit notes against a single original invoice?',
    a: 'Yes. Each debit note should have its own sequential number, reference the original invoice number, and state the specific reason for that particular addition. There is no limit on how many debit notes can reference the same invoice — phased project additions, price escalation adjustments and tax corrections may each result in a separate debit note against the same base invoice.' },
  { q: 'What is the difference between a debit note and a credit note?',
    a: 'A debit note increases the amount the buyer owes (the supplier charged too little). A credit note reduces the amount the buyer owes (the supplier charged too much or goods were returned). Both reference the original invoice and both affect the GST position of both parties, but in opposite directions: a debit note raises the supplier\'s liability and raises the recipient\'s ITC entitlement, while a credit note reduces both.' },
  { q: 'Does a debit note require the recipient\'s approval before it is valid?',
    a: 'Not legally — a debit note is unilaterally issued by the supplier and becomes part of the GST record the moment it is declared in GSTR-1. However, commercially, issuing a debit note without first discussing the reason with the client is poor practice and leads to disputes. Most businesses notify the client and reach agreement on the additional amount before issuing the debit note, particularly for significant amounts.' },
  { q: 'How do I handle a debit note in my GST return?',
    a: 'Declare the debit note in GSTR-1 under the relevant table for amendments: Table 9B for debit notes against B2B invoices. The details flow into your buyer\'s GSTR-2B as additional ITC available. Your own GST liability increases by the tax amount on the debit note, and you must pay this additional tax in the current period\'s GST payment.' },
  { q: 'Can a debit note be cancelled after it has been issued?',
    a: 'Once a debit note is declared in GSTR-1, it cannot be deleted from the return. To reverse it, issue a credit note against the debit note — but this is an unusual situation that should be avoided by ensuring accuracy before issuing. If a debit note was issued in error before being filed in GSTR-1, do not file it; amend or delete it in the draft return before submission.' },
];

const dnIndustries = {
  heading: 'Debit Notes by Industry — When Additional Charges Arise',
  intro: 'Debit notes are the document of choice when the original invoice underrepresented the full value — each sector has its own common triggers.',
  items: [
    { name: 'Construction & Additional Work', icon: 'HardHat',
      text: 'Contractors raise debit notes for variation orders (extra work not in the original contract), price escalation clauses tied to steel or cement index changes, and additional mobilisation costs incurred due to client-caused delays.',
      detail: 'Always get the client\'s written variation order approval before issuing a construction debit note — a debit note without a signed variation order is routinely challenged by project managers as unauthorised spending.' },
    { name: 'IT Services & Scope Expansion', icon: 'Laptop',
      text: 'IT agencies issue debit notes when a project runs over the estimated effort and the contract includes a time-and-materials clause, when additional features are approved after the original SOW is signed, or when infrastructure costs exceed the budgeted amount included in the original proposal.',
      detail: 'Link every IT debit note to a change request (CR) number from the project management system — without a CR reference, the client\'s project manager has no internal approval record and will hold payment for the additional amount.' },
    { name: 'Manufacturing & Price Corrections', icon: 'Factory',
      text: 'Manufacturers issue debit notes when raw material cost escalation clauses in long-term contracts are triggered, when additional freight or handling costs were excluded from the original invoice, or when a quantity measurement at the buyer\'s end exceeds the dispatched quantity recorded on the original invoice.',
      detail: 'For price escalation debit notes, attach the index data (such as the steel price index from SAIL or the CBAM rate) that triggered the revision — without the index data the buyer has no independent basis to verify the escalation calculation.' },
    { name: 'Medical — Additional Procedures', icon: 'Stethoscope',
      text: 'Hospitals raise debit notes to insurance companies and TPAs when a patient\'s actual treatment cost exceeds the pre-authorised amount — for example, when complications extend the ICU stay or when additional procedures are required during surgery.',
      detail: 'Medical debit notes to TPAs must be accompanied by the clinical justification signed by the treating doctor — without medical justification the TPA will treat the additional claim as an unjustified escalation and reduce it unilaterally.' },
    { name: 'Retail & Price Adjustments', icon: 'Store',
      text: 'Wholesalers and distributors issue debit notes when a price revision takes effect after goods were invoiced at an old rate, when promotional scheme conditions entitle the supplier to recover a portion of a discount previously granted, or when freight charges were initially waived but are later claimed.',
      detail: 'Retail debit notes for post-delivery price revisions must reference the contract clause or communication that authorised the revision — issuing a debit note based on an informal conversation leads to disputes and is difficult to enforce.' },
    { name: 'Automobile — Additional Repair Costs', icon: 'Car',
      text: 'Service centres issue debit notes when additional faults are discovered during a repair that go beyond the original job card estimate, when parts prices increase between the estimate and order receipt, or when warranty claims are partially disallowed by the OEM and the balance is charged to the customer.',
      detail: 'Automobile debit notes for repair cost overruns require the customer\'s in-person or written approval before the additional work begins — the Consumer Protection Act gives customers the right to refuse additional work they were not informed about in advance.' },
    { name: 'Hospitality — Extra Services', icon: 'UtensilsCrossed',
      text: 'Hotels raise debit notes to corporate accounts for incidental charges (minibar, room service, late checkout) that were not included in the negotiated rate, and event venues raise debit notes for overtime staffing or additional equipment used beyond the contracted hours.',
      detail: 'Hospitality debit notes for incidental charges should include the itemised consumption report signed off by the guest or event organiser during checkout — a debit note sent days later without a signed consumption report is frequently disputed by corporate accounts teams.' },
    { name: 'Interior Design — Additions', icon: 'Sofa',
      text: 'Interior designers raise debit notes when clients request additional rooms or items not in the original contract, when material prices increase between the quotation and procurement, or when site conditions require additional structural work not anticipated in the estimate.',
      detail: 'Issue a revised scope document before raising the interior design debit note — clients\' finance teams require a documented scope change approval to process payment for amounts not covered by the original PO.' },
    { name: 'Education — Materials & Extras', icon: 'GraduationCap',
      text: 'Training institutes and coaching centres issue debit notes for study materials that were separately priced but not included in the initial fee invoice, for additional examination attempts, or for special coaching sessions requested by students after enrolment.',
      detail: 'Education debit notes for additional charges should reference the student\'s enrolment number — institute billing systems match all charges to student records, and a debit note without an enrolment reference may be posted to the wrong account.' },
    { name: 'Freelancing — Additional Hours', icon: 'User',
      text: 'Freelancers raise debit notes when a project runs significantly over the estimated hours due to client-requested revisions, when the original invoice covered a capped scope and the client requests additional work, or when currency conversion produces a shortfall against the originally agreed foreign currency amount.',
      detail: 'Freelancer debit notes must reference the change request or email thread in which the client requested the additional work — without a paper trail showing client authorisation, additional charge claims are almost impossible to enforce commercially.' },
  ],
};

const dnReferences = {
  heading: 'GST Law References for Debit Notes',
  intro: 'Debit notes are less commonly discussed than credit notes but carry the same statutory requirements under the CGST Act.',
  items: [
    { label: 'CGST Act, 2017 — Section 34: Credit and Debit Notes', url: 'https://cbic-gst.gov.in', note: 'Subsections 34(3) and 34(4) govern debit notes: when they must be issued, the obligation to declare in GSTR-1, and the effect on the recipient\'s ITC.' },
    { label: 'CGST Rules, 2017 — Rule 53: Mandatory Fields on Debit Notes', url: 'https://cbic-gst.gov.in', note: 'Prescribes the exact fields a valid GST debit note must contain, including original invoice reference, sequential serial number and authorised signature.' },
    { label: 'GST Taxpayer Portal — GSTR-1 Debit Note Reporting', url: 'https://www.gst.gov.in', note: 'Official portal where debit notes are declared in GSTR-1 Table 9B; the submission makes the additional ITC available in the recipient\'s GSTR-2B.' },
    { label: 'Indian Contract Act, 1872 — Price Variation Clauses', url: 'https://legislative.gov.in', note: 'Governs the enforceability of price escalation and variation clauses in commercial contracts, which are the commercial basis for most supplier-issued debit notes.' },
    { label: 'MSMED Act, 2006 — Dispute Resolution for MSME Debit Notes', url: 'https://msme.gov.in', note: 'Provides a conciliation mechanism for MSMEs whose debit notes are disputed by large buyers; the buyer\'s obligation to settle within 45 days applies to amounts increased by a debit note.' },
  ],
};

apply('src/data/tools/credit-note.ts', cnFaqs, cnIndustries, cnReferences);
apply('src/data/tools/debit-note.ts', dnFaqs, dnIndustries, dnReferences);
