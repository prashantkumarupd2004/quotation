/**
 * Adds industries, references, and expanded FAQs to all 9 tool content files.
 * Run once: node scripts/add-tool-content.mjs
 */
import fs from 'node:fs';

// ── helpers ─────────────────────────────────────────────────────────────────

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

  // Normalise to LF for editing, restore CRLF at the end
  const hasCRLF = src.includes('\r\n');
  if (hasCRLF) src = src.replace(/\r\n/g, '\n');

  // Guard: skip if already patched
  if (src.includes('industries: {')) {
    console.log('skip (already patched):', file);
    if (hasCRLF) src = src.replace(/\n/g, '\r\n');
    return;
  }

  // 1. Insert new FAQs before the closing ], of the faqs array
  //    Anchor: "  ],\n  relatedHeading"
  const faqAnchor = '\n  ],\n  relatedHeading';
  const faqIdx = src.indexOf(faqAnchor);
  if (faqIdx === -1) { console.error('FAQ anchor not found:', file); return; }
  const faqBlock = '\n' + newFaqs.map(f => faqItem(f.q, f.a)).join('\n');
  src = src.slice(0, faqIdx) + faqBlock + src.slice(faqIdx);

  // 2. Append industries + references before the final };
  const closeIdx = src.lastIndexOf('\n};');
  if (closeIdx === -1) { console.error('Closing }; not found:', file); return; }
  const indBlock = '\n' + buildIndustries(industries.heading, industries.intro, industries.items);
  const refBlock = '\n' + buildReferences(references.heading, references.intro, references.items);
  src = src.slice(0, closeIdx) + indBlock + '\n' + refBlock + src.slice(closeIdx);

  if (hasCRLF) src = src.replace(/\n/g, '\r\n');
  fs.writeFileSync(file, src);
  console.log('updated:', file);
}

// ── INVOICE ─────────────────────────────────────────────────────────────────
apply('src/data/tools/invoice.ts',
  [
    { q: 'Can I invoice a client in USD, EUR or another foreign currency?',
      a: 'Yes. The currency selector supports USD, EUR, GBP, AED and other currencies. The amount-in-words line updates accordingly. GST-registered exporters should note that export invoices are zero-rated — mark the supply as export, include the LUT reference or IGST details, and mention the shipping bill number in the terms.' },
    { q: 'I sent an invoice with a wrong amount — how do I correct it?',
      a: 'If the client has not yet processed the invoice, cancel it in your records and reissue a corrected version with the same number plus a suffix (e.g. INV-2026-0042-R1), sending a short note explaining the change. If the invoice was already GST-filed or partially paid, issue a credit note for an overcharge or a debit note for an undercharge — never reuse or reissue the original number.' },
    { q: 'What fields are legally mandatory on a GST tax invoice in India?',
      a: 'Rule 46 of the CGST Rules requires: a consecutive serial number up to 16 characters, issue date, your GSTIN and business address, the buyer\'s name, address and GSTIN for B2B transactions, HSN or SAC code, item description with quantity and unit, taxable value, applicable tax rate and amount split as CGST and SGST or IGST, the total invoice value, and a reverse-charge indicator. For inter-state B2C invoices above \'2.5 lakh, the buyer\'s state and state code are also required.' },
    { q: 'Can I add a late payment interest clause on my invoice?',
      a: 'Yes, and it is worth doing. A printed clause such as "Interest at 1.5 % per month applies to amounts outstanding beyond the due date" is legally enforceable when your engagement terms have been accepted. MSME-registered businesses have additional protection under the MSMED Act: buyers must settle within 45 days of acceptance, after which compound interest at three times the RBI bank rate accrues automatically regardless of what the invoice says.' },
    { q: 'How long must I keep invoice copies for tax purposes?',
      a: 'The Income Tax Act requires businesses to maintain records, including invoices, for at least six years from the end of the relevant assessment year — effectively eight years from the invoice date. GST-registered businesses should retain invoice records for at least six years from the date of filing the annual return for that year. Keep copies of disputed invoices until the matter is fully resolved, regardless of age.' },
    { q: 'What is the difference between a tax invoice and a bill of supply?',
      a: 'A tax invoice is issued when a GST-registered business supplies taxable goods or services — it collects GST from the buyer and entitles the buyer to claim input credit. A bill of supply is issued instead when the supply is GST-exempt (such as fresh produce or certain healthcare services) or when the supplier is under the composition scheme and is not permitted to charge tax. The bill of supply confirms the transaction but carries no tax column.' },
    { q: 'Can I print a UPI QR code directly on the invoice?',
      a: 'Yes. Add your UPI ID in the payment instructions field and it appears on every invoice you generate. For a scannable QR image, generate one from your UPI app, save it as a PNG, and upload it to the stamp or signature area. Clients can then scan and pay the moment they receive the invoice — this alone reduces the average payment delay for freelancers and small shops by several days.' },
    { q: 'My goods ship in three instalments — should I raise one invoice or three?',
      a: 'Under GST, you may raise one consolidated invoice after all deliveries or a separate invoice per delivery. Separate invoices per delivery are cleaner in practice because each shipment has its own acceptance record and any dispute is isolated to that consignment. For construction and manufacturing projects with milestone billing, one invoice per milestone is the industry standard.' },
    { q: 'What is e-invoicing and when does it become mandatory for my business?',
      a: 'E-invoicing requires eligible businesses to upload invoice data to the government Invoice Registration Portal before sending it to the customer. The portal returns an IRN and QR code that must appear on the invoice. As of 2024, the mandate applies to businesses with annual aggregate turnover above \'5 crore. Below that threshold e-invoicing is optional. Businesses above the threshold must generate invoices through IRP-integrated software — a PDF alone is not compliant.' },
    { q: 'Can a freelancer issue an invoice without a GST registration number?',
      a: 'Yes. If your total annual service turnover is below \'20 lakh (\'10 lakh in special category states), GST registration is not mandatory and you can issue a plain invoice without GST fields. However, many corporate clients require a GSTIN on invoices to claim input credit — if your client base is largely corporate, voluntary registration even below the threshold is often commercially sensible.' },
    { q: 'How do I handle a partial payment — issue a new invoice or update the original?',
      a: 'Mark the original invoice as Partially Paid, record the amount received and the date in the notes, and keep the original invoice number unchanged. Do not create a second invoice for the balance. When the remaining amount is paid, update the status to Paid and issue a payment receipt referencing the invoice number. For clients with several outstanding invoices, a monthly statement of account is often more efficient than chasing each individually.' },
    { q: 'Is a handwritten invoice legally valid in India?',
      a: 'Yes — Indian law does not require invoices to be typed or digitally generated. A handwritten invoice is valid provided it contains the seller\'s and buyer\'s details, item descriptions, amounts, applicable tax details, and a date. In practice, handwritten invoices are difficult to store and audit, carry higher risk of disputes over readability, and are rejected by most corporate accounts teams. For any regular business, a printed or digital invoice is strongly preferable.' },
  ],
  {
    heading: 'How Different Industries Use Invoices Every Day',
    intro: 'Invoicing is universal, but the details that matter — HSN codes, milestone structure, credit terms — vary sharply by sector.',
    items: [
      { name: 'Construction & Civil Contracting', icon: 'HardHat',
        text: 'Contractors invoice against project milestones — foundation, structure, finishing — rather than on a calendar date. Each invoice references the work completion certificate or measurement book entry that the client\'s site engineer signs off.',
        detail: 'Print a detailed scope narrative on every invoice: vague line items like "civil work" are routinely queried by corporate client accounts teams and delay payment by two to four weeks.' },
      { name: 'IT Services & Software', icon: 'Laptop',
        text: 'IT agencies and SaaS providers raise recurring monthly retainers and one-off project invoices. They attach timesheets or sprint delivery notes as supporting PDFs so the client\'s procurement team can match the invoice to the approved SOW.',
        detail: 'Reference the purchase order number on every invoice — most IT buyers have a PO-based accounts payable process and invoices without a PO reference sit unprocessed for weeks.' },
      { name: 'Retail & Trading', icon: 'Store',
        text: 'Retailers and wholesale traders issue itemised sales invoices for every transaction, with HSN codes, quantities and per-unit rates. High-volume shops often batch invoices by customer at the end of each day.',
        detail: 'B2B retail invoices above \'50,000 must carry the buyer\'s GSTIN to allow input tax credit — missing this is the single most common reason for invoice rejection in trade.' },
      { name: 'Medical & Healthcare', icon: 'Stethoscope',
        text: 'Clinics, diagnostic labs and hospitals invoice for consultation fees, diagnostic packages and procedure charges under SAC code 999311. Pharmaceutical distributors use HSN codes for each drug and maintain strict batch-number references on invoices for recall traceability.',
        detail: 'Healthcare invoices must distinguish taxable and exempt items clearly — many medical services are exempt from GST, and bundling them with taxable items on a single line creates compliance risk.' },
      { name: 'Interior Design & Furnishing', icon: 'Sofa',
        text: 'Interior designers bill a mix of professional fees (service) and material supply (goods) on the same invoice. They typically invoice in three tranches: design approval, procurement, and project handover, each with its own supporting document.',
        detail: 'Itemise materials and labour charges as separate line items with different GST rates — materials typically attract 18 %, while pure design services attract 18 % SAC 998311, but mixing them without separation causes ITC disputes.' },
      { name: 'Manufacturing & Industrial', icon: 'Factory',
        text: 'Manufacturers supply goods to distributors, wholesalers and other factories. Their invoices carry HSN codes, quantity in units (pieces, kg, litres), and GST calculated on the assessable value inclusive of freight when freight is bundled.',
        detail: 'For inter-state B2B supplies above \'50,000, attach the e-way bill number to the invoice before the goods leave the factory — transporting without one risks the consignment being detained at a check post.' },
      { name: 'Freelancing & Consulting', icon: 'User',
        text: 'Freelancers issue invoices per project or per deliverable with a due date and their UPI ID for instant payment. Independent consultants add a retainer invoice on the first of each month for ongoing engagements, keeping one clean numbering series per client.',
        detail: 'Always print payment terms as a specific calendar date (e.g. "Due 25 August 2026") rather than "Net 30" — freelancers who switch to date-based invoicing consistently report faster payments from domestic clients.' },
      { name: 'Education & Ed-Tech', icon: 'GraduationCap',
        text: 'Schools, coaching institutes and ed-tech platforms invoice for term fees, course enrolments and examination charges. Corporate training providers issue invoices with SAC code 999294 and attach the training schedule as a supporting document.',
        detail: 'Educational services provided by recognised institutions are exempt from GST — do not charge or show tax on fee invoices, as doing so creates a GST liability that is difficult to reverse.' },
      { name: 'Hospitality & Hotels', icon: 'UtensilsCrossed',
        text: 'Hotels and restaurants issue folios and tax invoices for room charges, F&B, and banquet services under SAC 996311. Corporate clients require a proper GST invoice with the company\'s GSTIN to claim ITC on accommodation expenses above \'7,500 per night.',
        detail: 'Split room tariffs and F&B clearly on hotel invoices — the GST rate differs (12 % for accommodation, 5 % for restaurant service without ITC), and a single combined line creates reconciliation problems for your GST return.' },
      { name: 'Automobile & Automotive', icon: 'Car',
        text: 'Dealerships invoice for vehicle sales, accessories, and AMC packages with HSN codes at the correct GST rate (28 % for most vehicles). Service centres raise invoices distinguishing labour charges from parts, since labour and parts attract different tax treatment.',
        detail: 'Vehicle sale invoices must show the chassis number and engine number — their absence makes the invoice invalid for registration and hypothecation purposes at the RTO.' },
    ],
  },
  {
    heading: 'Key Regulations Behind Every Invoice in India',
    intro: 'These primary sources govern what must appear on a compliant invoice — bookmark them rather than relying on secondhand summaries.',
    items: [
      { label: 'CGST Act, 2017 — Section 31: Tax Invoice', url: 'https://cbic-gst.gov.in', note: 'Lays down the statutory obligation for every GST-registered supplier to issue a tax invoice and specifies time limits for doing so.' },
      { label: 'CGST Rules, 2017 — Rule 46: Mandatory Invoice Fields', url: 'https://cbic-gst.gov.in', note: 'Defines the complete list of fields a valid GST tax invoice must carry, including serial number format, HSN/SAC codes and GSTIN requirements.' },
      { label: 'GST Taxpayer Portal — Filing & Compliance Reference', url: 'https://www.gst.gov.in', note: 'Official government portal for GSTIN verification, GSTR-1 filing, and access to all GST circulars and notifications.' },
      { label: 'Income Tax Act — Section 44AA: Maintenance of Accounts', url: 'https://incometaxindia.gov.in', note: 'Specifies which businesses must maintain books of account, the prescribed period for retention, and the format requirements.' },
      { label: 'MSMED Act, 2006 — Payment Protection Provisions', url: 'https://msme.gov.in', note: 'Mandates that buyers pay MSME suppliers within 45 days of delivery and imposes compound interest at three times the bank rate on delayed payments.' },
      { label: 'Reserve Bank of India — Payment System Regulations', url: 'https://rbi.org.in', note: 'Governs UPI, NEFT, RTGS and other payment modes; relevant when printing payment instructions and bank details on commercial invoices.' },
    ],
  }
);

// ── GST INVOICE ──────────────────────────────────────────────────────────────
apply('src/data/tools/gst-invoice.ts',
  [
    { q: 'What is GSTR-1 and how do GST invoices feed into it?',
      a: 'GSTR-1 is the monthly or quarterly return in which a GST-registered supplier reports all outward supplies — every sales invoice, credit note and debit note issued during the period. Each invoice\'s GSTIN, taxable value, GST amount, place of supply and invoice number are uploaded, where they become visible to your buyer in GSTR-2B as their input credit entitlement. Errors in GSTR-1 therefore directly affect your customer\'s ITC claim.' },
    { q: 'At what turnover does e-invoicing become mandatory under GST?',
      a: 'As of August 2023, e-invoicing is mandatory for businesses with aggregate annual turnover above \'5 crore in any financial year from 2017-18 onwards. Below that threshold it remains optional. The IRN and QR code generated by the Invoice Registration Portal must appear on every B2B invoice, credit note and debit note raised by eligible businesses — a plain PDF without an IRN is not GST-compliant for that segment.' },
    { q: 'What changes on a GST invoice when billing a business (B2B) versus an individual (B2C)?',
      a: 'A B2B invoice must carry the buyer\'s GSTIN and state code so the recipient can claim input credit. A B2C invoice does not need the buyer\'s GSTIN. For inter-state B2C supplies above \'2.5 lakh, the buyer\'s state and state code are required. E-invoicing and GSTR-1 reporting also differ: B2B invoices are reported individually by GSTIN, while B2C supplies above \'2.5 lakh are reported POS-wise and smaller B2C supplies are reported as a consolidated monthly figure.' },
    { q: 'What happens if I apply the wrong GST rate on an invoice?',
      a: 'An undercharge means you collected less GST than you owe to the government — you must pay the shortfall from your own pocket, plus interest at 18 % per annum from the due date. An overcharge means you collected more GST than required — the buyer has paid excess tax they cannot claim as credit, creating a dispute. In both cases, issue a credit note (for overcharge) or a debit note (for undercharge) and amend the return in the period the correction is made.' },
    { q: 'Can I issue a GST invoice for goods or services that are exempt from GST?',
      a: 'No. When you supply exempt goods or services, you issue a Bill of Supply, not a tax invoice. A Bill of Supply confirms the transaction but carries no GST, no tax column and no ITC entitlement for the recipient. If your business supplies both taxable and exempt items, you will need to raise both document types depending on the nature of each supply.' },
    { q: 'What is the reverse charge mechanism and when does it apply?',
      a: 'Under reverse charge, the recipient — not the supplier — is liable to pay GST to the government. It applies in specific cases defined in the CGST Act: when an unregistered person sells to a registered business (Section 9(4)), for services listed in Schedule II (such as legal services from advocates, GTA services, and services from a director to a company), and when importing services from abroad. On a GST invoice where reverse charge applies, the field "Reverse Charge Applicable: Yes" is mandatory.' },
    { q: 'How do I determine whether to charge CGST plus SGST or IGST on an invoice?',
      a: 'The rule is simple: if the supplier and recipient are in the same state, charge CGST and SGST in equal halves. If they are in different states — or if the supply involves an SEZ, export, or a foreign recipient — charge IGST at the full rate. For services, "place of supply" determines which state\'s GST applies: it is generally the recipient\'s location for B2B services and the supplier\'s location for B2C services, with specific exceptions for transport, accommodation and event services.' },
    { q: 'What is an IRN and how does it appear on an e-invoice?',
      a: 'An IRN (Invoice Reference Number) is a unique 64-character hash generated by the Invoice Registration Portal when you submit invoice data for e-invoicing. Once generated, the IRN and a signed QR code are embedded in your invoice before it is sent to the customer. The QR code encodes key invoice fields that can be independently verified by scanning — its presence is what makes the invoice valid under the e-invoice scheme.' },
    { q: 'Can I issue a GST invoice without recording my customer\'s GSTIN?',
      a: 'For B2C supplies to unregistered buyers you do not need their GSTIN — the buyer\'s name and address are sufficient. However, if the buyer is a registered GST business and you issue the invoice without their GSTIN, they cannot see or claim the input tax credit in GSTR-2B. For any B2B transaction the buyer\'s GSTIN must be on the invoice.' },
    { q: 'What is the time limit for issuing a GST invoice for services?',
      a: 'For services, a GST invoice must be issued within 30 days of the date of supply — except for banking, financial and insurance services, for which the limit is 45 days. For goods, the invoice must be issued at or before delivery (or at the time of removal of goods if movement is involved). Missing the time limit does not make the tax liability disappear — you remain liable for GST from the date of supply, with potential interest.' },
    { q: 'What is the difference between a composite supply and a mixed supply on a GST invoice?',
      a: 'A composite supply is a bundle of goods or services where one element is the principal supply and the others are naturally ancillary — for example, a laptop sold with a carrying bag and charger. The whole bundle is taxed at the rate applicable to the principal supply (the laptop). A mixed supply is a combination where none of the elements is naturally ancillary to any other, sold as a package at a single price. The tax rate for a mixed supply is the highest rate among the individual elements. The distinction affects how you code the supply on the invoice and which GST rate applies.' },
    { q: 'How do I correct a GST invoice I already reported in GSTR-1?',
      a: 'You cannot modify an invoice that has already been filed in GSTR-1. Instead, issue a credit note (if you overcharged) or a debit note (if you undercharged), reference the original invoice number, and report the credit note or debit note in the GSTR-1 for the period in which it is issued. The net effect will flow into your customer\'s GSTR-2B in that period. The original invoice entry in GSTR-1 remains as filed.' },
  ],
  {
    heading: 'How Each Industry Uses GST Invoices in Practice',
    intro: 'Compliant GST invoicing means different things sector by sector — HSN codes, e-invoice thresholds, place of supply rules and ITC structures all vary.',
    items: [
      { name: 'Manufacturing & Industrial Supply', icon: 'Factory',
        text: 'Manufacturers issue tax invoices with four-digit HSN codes (six-digit if turnover exceeds \'5 crore), quantity in standard units, and IGST for inter-state dispatches. Every inter-state B2B invoice above \'50,000 triggers an e-way bill that must accompany the consignment.',
        detail: 'Verify HSN codes for every product at the start of each financial year — a reclassification by CBIC can shift an item to a different rate bracket, and using the old rate creates both underpayment and input credit mismatches downstream.' },
      { name: 'IT Services & SaaS', icon: 'Laptop',
        text: 'IT companies charge 18 % GST on software services under SAC 998314 and cloud hosting under SAC 998316. For export clients, invoices are zero-rated with LUT references; for domestic B2B clients, GSTIN and place of supply are both required.',
        detail: 'Explicitly state the place of supply on every IT service invoice — for B2B, it is the recipient\'s registered state, and for B2C it is your own state; getting this wrong leads to IGST vs CGST+SGST mismatches in GSTR-1.' },
      { name: 'Retail & Wholesale Distribution', icon: 'Store',
        text: 'Retailers and distributors manage large volumes of B2C invoices (usually simplified) and B2B invoices that carry buyer GSTINs. High-volume distributors use e-invoicing above the \'5 crore threshold and batch their GSTR-1 uploads daily.',
        detail: 'For B2C invoices above \'2.5 lakh in inter-state supply, the buyer\'s state and state code must appear — absence of these fields creates issues during GSTR-1 reconciliation and annual return filing.' },
      { name: 'Construction Contracting', icon: 'HardHat',
        text: 'Construction contracts attract 18 % GST on the full contract value (12 % for affordable housing projects). Contractors issue progress invoices tied to RA bills certified by the client\'s engineer, with retention money tracked separately.',
        detail: 'Construction invoices should list the project address as the place of supply — not the contractor\'s head office address — since the supply of construction services is linked to the immovable property location.' },
      { name: 'Medical Equipment Suppliers', icon: 'Stethoscope',
        text: 'Medical device suppliers must apply the correct GST rate per HSN code — rates range from zero (certain lifesaving devices) to 12 % or 18 % for general medical equipment. Each invoice references the device\'s registration under CDSCO for regulated items.',
        detail: 'Never club taxable and zero-rated medical items on a single invoice line — they must appear as separate line items with their own HSN codes and tax rates to allow accurate ITC reconciliation by hospital buyers.' },
      { name: 'Automobile Dealers', icon: 'Car',
        text: 'Vehicle dealers issue GST invoices carrying 28 % GST plus applicable cess (1–22 % depending on engine size and vehicle type). The invoice must include the vehicle identification number, chassis number and engine number for registration.',
        detail: 'Dealer discount or exchange bonus must be reflected as a line-item deduction on the invoice, not a post-invoice cash payment — only invoiced discounts are permissible for ITC adjustment under GST.' },
      { name: 'Hospitality & Tourism', icon: 'UtensilsCrossed',
        text: 'Hotels with room tariff above \'7,500 per night attract 18 % GST; below that the rate is 12 %. Restaurant services without ITC are 5 %. Tour operators apply 5 % GST on the full package value or 18 % on the gross margin, depending on the scheme chosen.',
        detail: 'Corporate hotel invoices must show the company\'s GSTIN and a clear breakup of room charges and F&B separately — without this, the corporate client cannot claim the ITC they are entitled to on accommodation.' },
      { name: 'Education & Ed-Tech', icon: 'GraduationCap',
        text: 'GST-exempt educational services issued by recognised institutions use a Bill of Supply, not a tax invoice. However, ed-tech platforms offering online training to working professionals typically attract 18 % GST under SAC 999294.',
        detail: 'If your institution offers both exempt courses and taxable events or publications, maintain separate invoice series for taxable and exempt supplies — commingling them in a single series creates GST reconciliation errors at year-end.' },
      { name: 'Interior Design Studios', icon: 'Sofa',
        text: 'Design studios billing for both design consultancy (service) and material procurement (goods supply) raise composite invoices with two distinct sections: a service portion under SAC 998312 at 18 % and a goods portion with the relevant HSN code and rate.',
        detail: 'List every material with its HSN code and GST rate on the same invoice — clients\' finance teams routinely audit mixed invoices and reject any where goods and services rates are pooled into a single tax line.' },
      { name: 'Freelance Professionals', icon: 'User',
        text: 'Freelancers registered under GST issue 18 % GST invoices for professional services under SAC 998316 (digital) or SAC 9983 (general professional). Exporters of services can supply under a Letter of Undertaking, keeping the invoice zero-rated.',
        detail: 'Include your GSTIN and the SAC code on every invoice — many of the larger corporate clients run automated three-way matching (invoice, PO, service confirmation) and will reject invoices missing these fields without raising a query.' },
    ],
  },
  {
    heading: 'Official Sources for GST Invoice Compliance',
    intro: 'Always verify GST invoice rules directly from government portals — rates and thresholds change through notifications published here.',
    items: [
      { label: 'CBIC GST Portal — Notifications and Circulars', url: 'https://cbic-gst.gov.in', note: 'Central Board of Indirect Taxes and Customs: all GST notifications, circulars, and the official text of CGST Rules including Rule 46 on invoice fields.' },
      { label: 'NIC E-Invoice Portal (IRP)', url: 'https://einvoice1.gst.gov.in', note: 'Official Invoice Registration Portal where eligible businesses generate IRNs and QR codes for e-invoice compliance.' },
      { label: 'GST Taxpayer Portal', url: 'https://www.gst.gov.in', note: 'Official portal for GSTIN registration, GSTR-1 filing, input credit reconciliation, and e-way bill integration.' },
      { label: 'CBIC — CGST Act, 2017', url: 'https://cbic.gov.in', note: 'Full text of the Central Goods and Services Tax Act, including Section 31 on invoice issuance obligations and Section 34 on credit and debit notes.' },
      { label: 'MSMED Act — Buyer Payment Obligations', url: 'https://msme.gov.in', note: 'Section 15 of the MSMED Act sets the 45-day payment deadline for buyers purchasing from registered MSMEs, with compound interest for late payment.' },
    ],
  }
);

// ── ESTIMATE ─────────────────────────────────────────────────────────────────
apply('src/data/tools/estimate.ts',
  [
    { q: 'What is the standard validity period for an estimate?',
      a: 'There is no legal minimum or maximum — the validity period is whatever you state on the document, typically 15 to 30 days for most trades. Set a validity that reflects how long your material costs, labour rates and subcontractor quotes are genuinely stable. For renovation and construction work where material prices fluctuate, 7 to 14 days is more realistic than 30.' },
    { q: 'Can a client use my estimate as a work order or PO?',
      a: 'Only if both parties agree in writing. An estimate is a preliminary cost indication, not a contract. If a client wants to use your estimate as an authorisation to proceed, add a signature line at the bottom and have them sign and return it. Ideally, convert the accepted estimate into a formal quotation or agree on a proper purchase order — a signed estimate without specific payment terms is rarely enforceable.' },
    { q: 'What is the difference between an estimate and a quote?',
      a: 'An estimate is an approximate cost indication — you are communicating a range or a best-guess figure, subject to change when the full scope is confirmed. A quotation is a firm, binding price offer for a defined scope of work. When you issue a quotation the client can accept it and hold you to the price; when you issue an estimate you are signalling that the final cost may be higher or lower. Use an estimate when scope or site conditions are still uncertain, and a quotation once they are confirmed.' },
    { q: 'Should I include contingency costs in my estimate?',
      a: 'Yes, and you should show it as a separate line item rather than hiding it in your rates. A 5-10% contingency on construction or renovation estimates is standard and well understood by clients. Labelling it transparently prevents disputes: the client sees you have accounted for unknowns, and if those unknowns do not materialise, you can reduce the final invoice accordingly.' },
    { q: 'Can I convert an estimate into a formal quotation or invoice?',
      a: 'Yes. Once the scope is confirmed, use the data from your estimate to build a proper quotation with firm prices, payment terms and a validity date. After work is complete, the invoice simply reflects what was agreed in the quotation. Keeping the same line items and descriptions across all three documents — estimate, quotation, invoice — makes reconciliation straightforward for both your records and the client\'s accounts team.' },
    { q: 'How detailed should line items be in an estimate?',
      a: 'As detailed as needed to avoid scope disputes later. Vague estimates like "painting work: \'80,000" lead to arguments about whether two coats or three were included, whether surface preparation is in scope, and whether touch-ups are covered. Break the estimate into materials, labour and any subcontracted work separately. The client may not need this detail upfront, but it protects you during execution.' },
    { q: 'Does an estimate carry any legal weight in a payment dispute?',
      a: 'A signed estimate carries significantly more weight than an unsigned one. If the client has signed your estimate and you have completed the work described, a court or tribunal will generally treat the estimated amount as the agreed price. However, if your final invoice significantly exceeds the estimate without prior written approval from the client, recovering the excess can be difficult regardless of actual costs.' },
    { q: 'How do I handle a client who keeps revising scope after I\'ve submitted an estimate?',
      a: 'Issue a revised estimate for each material change in scope and get written acknowledgement — an email confirmation or a countersigned document. Never simply absorb scope additions in the assumption that the client will adjust the final payment. Each revision should reference the previous estimate number and clearly state what has changed and why the cost has moved.' },
    { q: 'Should an estimate include GST?',
      a: 'If you are GST-registered, show GST as a separate line item on the estimate so the client sees the tax-inclusive total. This avoids the common problem of a client approving a \'1,00,000 estimate and then objecting to the \'1,18,000 invoice. If you are not registered for GST and your supply is below the exemption threshold, state "GST not applicable" so the client does not assume they can claim input credit.' },
    { q: 'What should I do when actual costs exceed my estimate by more than 10%?',
      a: 'Communicate before the work is done, not after. The moment you identify that costs are tracking above your estimate — whether because of material price changes, unforeseen site conditions, or additional scope — send the client a revised estimate in writing and get their sign-off before continuing. Presenting a final invoice well above the accepted estimate without prior notice is the most common cause of payment refusals in construction and renovation.' },
    { q: 'Can I send an estimate by WhatsApp and have it be valid?',
      a: 'A WhatsApp estimate is not invalid, but it creates practical problems: it is easily missed in a busy chat, there is no formal acceptance mechanism, and the formatting is lost. A PDF estimate sent via WhatsApp is fine — the attachment preserves the document. What matters legally is that the client received the estimate, understood the scope and costs, and acknowledged it in some form before work began.' },
    { q: 'Is it necessary to include a breakdown of profit margin in an estimate?',
      a: 'No, and you should not. Your estimate shows the client what they will pay — your internal cost structure, margin and overhead are confidential. The breakdown the client needs is scope-level (what work is included), not P&L-level (what it costs you). Professional estimates show labour, materials and other costs by work package, not by cost category.' },
  ],
  {
    heading: 'Industry-by-Industry: When and How Estimates Are Used',
    intro: 'Estimates are the first document exchanged in most project-based industries — each sector has its own conventions for what to include and how binding the figure is.',
    items: [
      { name: 'Construction & Civil Work', icon: 'HardHat',
        text: 'Civil contractors issue preliminary estimates after a site visit, listing quantities for excavation, concrete, steel, brick and finishing as separate line items. A 5-10% contingency is standard because ground conditions and material costs can shift between estimate and execution.',
        detail: 'Break your construction estimate by work package (civil, structural, MEP, finishing) rather than as a lump sum — clients and project managers need to track each package against budget separately.' },
      { name: 'Interior Design & Renovation', icon: 'Sofa',
        text: 'Interior designers prepare room-by-room estimates separating furniture, modular work, electrical, civil and loose furnishing. The estimate is typically presented alongside mood boards so the client can correlate cost to design intent.',
        detail: 'Specify the grade or brand of materials in the estimate (e.g. "Italian marble at \'350/sq ft" vs "Indian marble at \'150/sq ft") — an estimate without material specifications leads to scope disputes during procurement.' },
      { name: 'Automobile & Vehicle Repair', icon: 'Car',
        text: 'Service centres provide repair estimates with itemised parts (with part numbers) and labour separately. Insurance assessors require a detailed estimate before approving claims, making accuracy in parts pricing and labour hours critical.',
        detail: 'Always get the owner\'s written approval before starting repair work that exceeds the estimate — most consumer protection regulations require this, and proceeding without it makes the excess charges legally unrecoverable.' },
      { name: 'IT Services & Custom Development', icon: 'Laptop',
        text: 'IT agencies issue ballpark estimates early in the sales cycle, then refine them into formal proposals once scope is confirmed. Estimates for software development typically show effort in person-days or sprints, with a separate line for ongoing support.',
        detail: 'State your assumptions explicitly in every IT estimate — number of screens, third-party APIs included, revision rounds covered — because scope ambiguity in software projects is the primary cause of billing disputes.' },
      { name: 'Retail & Product Supply', icon: 'Store',
        text: 'Retailers and product suppliers use estimates when a customer enquires about custom orders, bulk purchases or non-standard configurations. The estimate locks the price for the validity period, after which it is subject to revision based on import or raw material costs.',
        detail: 'Include minimum order quantities and lead times in retail estimates — without them, a customer may accept a price estimate weeks later expecting immediate delivery at the quoted rate.' },
      { name: 'Manufacturing & Fabrication', icon: 'Factory',
        text: 'Job-work manufacturers provide material plus processing estimates for custom fabricated items, breaking out raw material, machining time and finishing separately. Estimates for made-to-order production are conditional on raw material availability and current commodity prices.',
        detail: 'State the raw material price benchmark date in your estimate — if steel or copper prices rise more than 5% between estimate and order, most fabricators have a right to revise, but only if the estimate explicitly says so.' },
      { name: 'Medical & Healthcare', icon: 'Stethoscope',
        text: 'Hospitals and clinics provide treatment cost estimates for elective procedures, listing consultation, procedure, consumables and room charges separately. Insurance pre-authorisation requires a detailed estimate before admission.',
        detail: 'Break every medical estimate into admitted and non-admitted costs — consumables used during a procedure are often covered differently by insurance compared to room charges, and bundling them creates claim settlement delays.' },
      { name: 'Education & Training', icon: 'GraduationCap',
        text: 'Coaching institutes and corporate training providers issue course fee estimates covering tuition, study materials, examination fees and optional extras. Group training proposals break down per-participant and bulk rates.',
        detail: 'Specify what is and is not included in your education estimate — GST applicability, examination registration fees, and LMS access costs are commonly disputed when left unspecified.' },
      { name: 'Freelancing & Creative Services', icon: 'User',
        text: 'Freelancers in design, content, photography and video send estimates before project kickoff to ensure budget alignment. Creative estimates typically distinguish concept development, production and revision rounds.',
        detail: 'Cap the number of revision rounds explicitly in every creative estimate — "unlimited revisions" language is unprofessional and routinely exploited; state a number (two rounds is industry standard) and specify the cost of additional rounds.' },
      { name: 'Hospitality & Events', icon: 'UtensilsCrossed',
        text: 'Event managers and caterers issue per-head or lump-sum estimates that break food, decor, staffing, AV and venue rental into separate lines. Estimates for large events typically require a 50% advance before work commences.',
        detail: 'Include a cancellation policy in your hospitality estimate — if the event is cancelled after you have committed bookings or purchased materials, an undisclosed cancellation policy means you cannot recover those costs.' },
    ],
  },
  {
    heading: 'Business and Legal References for Estimates',
    intro: 'Estimates operate at the intersection of commercial practice and contract law — these references provide the authoritative context.',
    items: [
      { label: 'Indian Contract Act, 1872 — Offer and Acceptance', url: 'https://legislative.gov.in', note: 'Governs when a preliminary estimate becomes a binding offer and what constitutes valid acceptance, which determines enforceability in payment disputes.' },
      { label: 'Consumer Protection Act, 2019 — Unfair Trade Practices', url: 'https://consumeraffairs.nic.in', note: 'Prohibits significant deviation from a quoted or estimated price without prior consent; relevant for consumer-facing trades like automobile repair and home renovation.' },
      { label: 'CGST Act — Section 31: Time of Supply for Estimates', url: 'https://cbic-gst.gov.in', note: 'Clarifies that an estimate alone does not create a GST liability — the tax point arises at the time of actual supply or advance payment, not at estimate issuance.' },
      { label: 'MSMED Act, 2006 — Dispute Resolution Mechanism', url: 'https://msme.gov.in', note: 'Provides a structured conciliation and arbitration process for MSMEs to resolve billing disputes, including those arising from scope and estimate disagreements.' },
      { label: 'BIS Standards for Construction Estimates', url: 'https://bis.gov.in', note: 'Bureau of Indian Standards specifications for measurement of works, which form the basis for preparing and verifying construction and civil estimates.' },
    ],
  }
);

// ── PROFORMA INVOICE ──────────────────────────────────────────────────────────
apply('src/data/tools/proforma-invoice.ts',
  [
    { q: 'What is the main purpose of a proforma invoice?',
      a: 'A proforma invoice serves two distinct purposes in business. First, it acts as a formal quotation in invoice format — giving the buyer a precise breakdown of costs, taxes and terms before they commit. Second, it is used to collect advance payments: many businesses will not release funds on the basis of a loose quotation, but will process a payment against a proforma invoice because it resembles a real invoice that their accounts team can process.' },
    { q: 'Is a proforma invoice a tax invoice for GST purposes?',
      a: 'No. A proforma invoice is not a valid GST document. It does not create a tax liability, it does not entitle the recipient to claim input tax credit, and it cannot be used as a supporting document for GST compliance. It is only a preliminary commercial document. The actual GST tax invoice must be issued after delivery or completion of service, at which point the tax liability and ITC entitlement are both triggered.' },
    { q: 'Can I use a proforma invoice for customs clearance?',
      a: 'Yes, for imports into India. Customs authorities and banks accept proforma invoices as supporting documents when the commercial invoice is not yet available — for example, when clearing a shipment before the supplier has finalised billing, or to apply for an import licence. The proforma must clearly state the goods description, quantity, unit value, HS code and country of origin. For exports from India, the commercial invoice or shipping bill takes precedence, but a proforma may be required during pre-shipment approval.' },
    { q: 'What is the difference between a proforma invoice and a purchase order?',
      a: 'A proforma invoice is issued by the seller; a purchase order is issued by the buyer. The proforma tells the buyer what they will be charged and on what terms. The purchase order tells the seller what the buyer wants and authorises them to supply it. In an import transaction they often accompany each other: the buyer issues a PO specifying the requirement, and the seller responds with a proforma invoice confirming price, terms and delivery.' },
    { q: 'How long is a proforma invoice typically valid?',
      a: 'You set the validity period — 15 to 30 days is common for domestic supplies, and 30 to 60 days for import transactions. For international trade, the validity must account for shipping and documentation lead times. Beyond the validity date the prices and terms are no longer binding, and you would issue a revised proforma if the buyer wants to proceed. Always print the validity date clearly — some buyers treat the proforma as valid indefinitely if no expiry is stated.' },
    { q: 'Can I receive advance payment against a proforma invoice?',
      a: 'Yes, and that is one of its primary functions in Indian business practice. Banks accept proforma invoices for processing advance payments, and many corporate accounts teams will release partial or full advance against a proforma. The advance must be accounted for on the actual GST tax invoice issued after supply — show the advance received as a deduction against the invoice value, and calculate GST on the balance if the full GST was not collected on the advance.' },
    { q: 'What is a proforma invoice used for in import-export trade?',
      a: 'In import-export, a proforma invoice is the primary document on which the buyer bases their import licence application, foreign exchange remittance approval, and letter of credit. Banks require it to release foreign exchange under FEMA regulations. The proforma must show the commodity, HS code, country of origin, unit price in the agreed currency, payment terms (e.g. 30 % advance, 70 % against BL), and Incoterms such as FOB or CIF.' },
    { q: 'Does receiving a proforma invoice create a legal obligation to pay?',
      a: 'On its own, no. A proforma invoice is an offer — it becomes binding on the buyer only when they confirm acceptance, typically by issuing a purchase order or releasing an advance payment. Until acceptance, either party can revise or withdraw. However, if the buyer has made a partial advance payment against a proforma, they have accepted its terms and the seller is contractually committed to supply on those terms.' },
    { q: 'Should a proforma invoice include GST?',
      a: 'Show estimated GST on the proforma so the buyer knows the tax-inclusive cost before committing. Mark it clearly as "Estimated Tax" or "Indicative GST" since the final tax figures may change — for example, if the quantity or product mix changes between proforma and delivery. When you issue the final tax invoice, the GST figures there are the operative ones, not the proforma.' },
    { q: 'Can a proforma invoice be used to open a letter of credit?',
      a: 'Yes. A letter of credit (LC) is typically opened by the buyer\'s bank on the basis of the proforma invoice. The proforma provides the bank with the commercial terms — description of goods, HS code, value, currency, payment terms and shipment conditions — that the LC must reflect. After shipment, the commercial invoice and shipping documents replace the proforma as the operative payment documents.' },
    { q: 'Can I modify a proforma invoice after sending it?',
      a: 'Yes. Issue a revised proforma with the same reference number plus a revision suffix (e.g. PI-2026-001-R1) and clearly mark it "Revised" with the date of revision. List what changed and why. If the buyer has already accepted the original and is mid-process on a bank payment or LC, notify them immediately because any discrepancy between the proforma and the transaction documents can cause bank delays.' },
    { q: 'Is a proforma invoice required for every sale?',
      a: 'No. It is most useful for large or complex transactions where the buyer needs formal documentation before committing, for advance collection, and for international trade. For routine repeat sales to established customers, most businesses skip the proforma and go straight to the tax invoice. The proforma earns its place when there is a meaningful gap between quoting and delivering.' },
  ],
  {
    heading: 'How Proforma Invoices Are Used Across Industries',
    intro: 'The proforma invoice is the pre-supply commitment document — each industry uses it to solve a specific problem between order placement and delivery.',
    items: [
      { name: 'Manufacturing & Export', icon: 'Factory',
        text: 'Manufacturers issue proforma invoices for international buyers before production begins, confirming HS codes, unit prices in foreign currency, Incoterms and shipment timelines. The buyer uses this to open an LC or remit foreign exchange through their bank.',
        detail: 'For exports, the proforma must show the FOB or CIF value separately from freight and insurance — customs valuation for duty drawback and IGST refund is based on the FOB value, and combining it with freight creates clearance complications.' },
      { name: 'IT Services & Software', icon: 'Laptop',
        text: 'IT companies issue proforma invoices before project kickoff to collect the initial advance payment. The proforma lists the project scope, milestone schedule, payment tranche percentages and GST estimate so the client\'s procurement and finance teams can process the first payment without waiting for project completion.',
        detail: 'Match every proforma line item to the SOW reference number — corporate IT buyers run three-way matching between the proforma, PO and SOW, and any mismatch sends the payment back for clarification.' },
      { name: 'Construction & Infrastructure', icon: 'HardHat',
        text: 'Contractors use proforma invoices to collect advance mobilisation payments before deploying equipment and labour to site. The proforma details the scope of the first phase, the advance percentage, and the conditions under which it will be adjusted against the running account bills.',
        detail: 'Include a clear advance recovery schedule in your proforma — state that the advance will be deducted at X% from each subsequent RA bill so that both parties understand when the advance will be fully recovered.' },
      { name: 'Automobile Dealers', icon: 'Car',
        text: 'Vehicle dealers issue proforma invoices to customers who want to arrange finance or insurance before taking delivery. The proforma shows the ex-showroom price, road tax, insurance, registration charges and accessories so the buyer can arrange the full amount in advance.',
        detail: 'Proforma vehicle invoices must match the actual booking price exactly — banks financing vehicle purchases verify the proforma against the final tax invoice, and any discrepancy delays the disbursement.' },
      { name: 'Retail & Import Traders', icon: 'Store',
        text: 'Importers and wholesale traders use proforma invoices from overseas suppliers to open LCs, apply for import licences and process advance foreign exchange remittances. Domestically, retailers use them to collect advance on custom orders or seasonal pre-bookings.',
        detail: 'Keep proforma validity aligned with your supplier\'s price hold period — if the overseas supplier quotes valid for 30 days, your proforma to the domestic buyer should not exceed 25 days to leave room for the payment processing cycle.' },
      { name: 'Medical Equipment & Pharma', icon: 'Stethoscope',
        text: 'Medical equipment suppliers issue proforma invoices for hospital procurement committees to approve before placing a formal PO. Pharmaceutical importers use proformas to apply for import permits and NOCs from the CDSCO before the consignment ships.',
        detail: 'Medical device proformas must reference the CDSCO registration number of the device — hospitals and regulatory authorities verify this before approving the procurement, and missing it delays the process by weeks.' },
      { name: 'Interior Design & Materials', icon: 'Sofa',
        text: 'Interior design studios issue proformas to collect advance against material procurement — furniture, fittings and imported tiles — before placing orders with suppliers. The proforma locks the client into the material budget before prices change.',
        detail: 'Break the proforma into a materials advance and a professional fee advance as separate line items — clients and their banks process these under different heads, and a single combined line complicates tracing and reconciliation.' },
      { name: 'Hospitality & Events', icon: 'UtensilsCrossed',
        text: 'Caterers, event venues and hotel banquet teams issue proforma invoices to collect 50% advance for bookings. The proforma details the service package, guest count, menu, set-up requirements and cancellation policy.',
        detail: 'Include the cancellation and refund policy text directly on the proforma invoice — once the client pays the advance, any cancellation dispute will be adjudicated against the terms they received before paying.' },
      { name: 'Education & Ed-Tech', icon: 'GraduationCap',
        text: 'Colleges and training institutes issue proforma invoices for admission fees and course deposits so students and parents can arrange bank drafts, NEFT transfers or educational loans before the admission deadline. Corporate training providers use proformas to get client sign-off before scheduling instructors.',
        detail: 'Show the course start date and last date for fee submission on the education proforma — clarity on deadlines prevents last-minute payment scrambles that delay batch confirmations and timetable setting.' },
      { name: 'Freelancing & Agencies', icon: 'User',
        text: 'Freelancers and boutique agencies issue proformas to collect the project advance before committing time and resources. The proforma specifies the deliverables, timeline, advance percentage and the conditions for releasing the balance payment.',
        detail: 'Clearly state the deliverables covered by the advance on your proforma — a vague "advance against project" gives clients scope to demand unlimited pre-delivery work before releasing the remaining payment.' },
    ],
  },
  {
    heading: 'Regulatory Framework for Proforma Invoices in India',
    intro: 'Proforma invoices touch import-export regulation, foreign exchange rules and GST compliance — these are the primary sources.',
    items: [
      { label: 'FEMA, 1999 — Foreign Exchange Remittance Rules', url: 'https://rbi.org.in', note: 'RBI regulations governing advance remittance for imports; proforma invoices are the required supporting document when remitting payment before goods ship.' },
      { label: 'DGFT — Export-Import Policy and Procedures', url: 'https://dgft.gov.in', note: 'Directorate General of Foreign Trade: IEC registration requirements, export and import licencing procedures that rely on proforma invoices as primary documents.' },
      { label: 'Customs Act, 1962 — Valuation of Imported Goods', url: 'https://cbic.gov.in', note: 'Governs how customs value is determined at the time of clearance; proforma values declared must align with the final commercial invoice or a post-importation audit may be triggered.' },
      { label: 'CGST Act — Section 31: Time of Advance and Tax Liability', url: 'https://cbic-gst.gov.in', note: 'Specifies that GST becomes payable on an advance payment even before supply; the proforma issued to collect an advance must be carefully worded to not be treated as a tax invoice.' },
      { label: 'MSMED Act — Advance Payment Protections', url: 'https://msme.gov.in', note: 'Advance payment received by an MSME against a proforma invoice triggers payment protection timelines; the buyer cannot unilaterally demand return of the advance after acceptance of terms.' },
    ],
  }
);

// ── PURCHASE ORDER ────────────────────────────────────────────────────────────
apply('src/data/tools/purchase-order.ts',
  [
    { q: 'Does a purchase order create a legally binding contract?',
      a: 'Yes, once the supplier accepts it — either by written confirmation, by issuing a proforma invoice against it, or by beginning to fulfil the order. The PO specifies the goods or services, quantities, agreed price, delivery terms and payment terms. Acceptance creates a contract governed by the Indian Contract Act, 1872. A verbal acceptance is also binding in principle, but a written or email confirmation is far easier to enforce.' },
    { q: 'What is the difference between a purchase order and a purchase requisition?',
      a: 'A purchase requisition is an internal document raised by a department asking the procurement team to buy something — it is a request, not an authorisation to spend. A purchase order is the external authorisation issued to the supplier once the requisition is approved and the supplier is selected. Only the PO creates a commitment with an outside party; the requisition circulates inside the organisation for budget and approval checks.' },
    { q: 'Can I amend a purchase order after the supplier has accepted it?',
      a: 'Yes, but only with the supplier\'s agreement. Issue a PO amendment document referencing the original PO number and specifying exactly what has changed — quantity, price, delivery date or specification. Without a formal amendment, the supplier is entitled to supply and invoice per the original PO terms. For significant changes, a fresh PO that cancels and supersedes the original is cleaner than a chain of amendments.' },
    { q: 'What should a purchase order include to be enforceable?',
      a: 'At minimum: a unique PO number, issue date, your company name and address, the supplier\'s name and address, a detailed description of the goods or services, quantity and unit, agreed price per unit, total value, GST breakdown, delivery address and expected date, payment terms, and any specific terms such as quality standards or inspection rights. Missing the price or delivery terms makes the PO commercially ambiguous and difficult to enforce.' },
    { q: 'Is a verbal purchase order valid in India?',
      a: 'Legally, a verbal order can be binding, but it is almost impossible to enforce. Without a written record, disputes over price, quantity, specification or delivery date have no documentary resolution. Most businesses that have experienced a verbal-order dispute once move to requiring written POs for all purchases. For any transaction above a few thousand rupees, a written PO is essential.' },
    { q: 'What is a blanket purchase order and when should I use it?',
      a: 'A blanket PO authorises a supplier to deliver up to a specified total value over a defined period — say, \'5 lakh worth of packaging materials over six months — without requiring a new PO for each delivery. It is useful for consumables and materials you order repeatedly from the same supplier, as it reduces paperwork while preserving the price and terms agreed at the start of the period.' },
    { q: 'How does a purchase order interact with GST compliance?',
      a: 'The PO number must appear on the supplier\'s tax invoice so your accounts team can perform three-way matching (PO, goods receipt note, invoice) before processing payment. If the PO specifies the GST rate or HSN code, the supplier must honour that on the invoice. A mismatch between the agreed PO price and the invoiced price creates ITC reconciliation issues because input credit is allowed only on invoiced value.' },
    { q: 'Can I use a purchase order to pay an advance to a supplier?',
      a: 'A PO authorises supply but does not by itself release an advance. To pay an advance, you would issue the PO with advance payment terms (e.g. "30% advance on PO acceptance") and then process the payment against the PO. The supplier should issue a proforma invoice or an advance receipt against which your accounts team books the advance. The GST on the advance, if applicable, must be paid by the supplier when the advance is received.' },
    { q: 'What happens if the supplier delivers more or less than the PO quantity?',
      a: 'Accept only up to the PO quantity and return the excess, or raise a PO amendment if the additional quantity is needed. For shortfalls, issue a debit note for the undelivered quantity if you have prepaid, or simply withhold that portion of payment. A goods receipt note (GRN) should record the actual quantity received — this is your evidence for both payment and dispute purposes.' },
    { q: 'Does a purchase order need to be signed?',
      a: 'Not legally, but a signed PO is far more enforceable than an unsigned one. In practice, most corporate buyers send POs via email from an authorised purchasing officer, and the email itself constitutes evidence of issuance. For high-value orders with long-term supply implications, physical or digital signatures — or at least email confirmation from an authorised person — are recommended.' },
    { q: 'How long should purchase orders be retained?',
      a: 'Retain POs for at least six years from the financial year end — consistent with the GST and income tax record-keeping requirements. For capital asset purchases, retain POs for as long as the asset is on your books plus the six-year audit period. POs for government or PSU contracts should be retained longer, as these are subject to CAG audit at any time.' },
    { q: 'What is a three-way match in purchase order processing?',
      a: 'Three-way matching is the standard accounts-payable control: the PO (what you authorised), the goods receipt note (what was actually delivered), and the supplier invoice (what you are being asked to pay) are compared. Payment is released only when all three agree on quantity, price and tax. This prevents overpayment, duplicate payment and payment for undelivered goods — it is mandatory for most corporate, government and audited-company payable processes.' },
  ],
  {
    heading: 'Purchase Orders Across Industries — What Each Sector Prioritises',
    intro: 'Every industry raises POs, but the fields that matter most — material specs, delivery windows, warranty terms — differ sharply by sector.',
    items: [
      { name: 'Construction & Civil Contracting', icon: 'HardHat',
        text: 'Construction POs specify material grade and standard (e.g. "TMT steel Fe500 as per IS:1786"), delivery to site address, and stacking instructions. Materials arriving without a matching PO are refused by the site engineer to prevent unbudgeted spend.',
        detail: 'Include the IS/BIS standard reference for every material in a construction PO — substandard substitutes are a persistent problem in the supply chain, and a specification in the PO gives you legal grounds to reject them.' },
      { name: 'Manufacturing & Industrial', icon: 'Factory',
        text: 'Manufacturers raise POs for raw materials, components and packaging, often with lead time, batch size and quality inspection clauses. High-volume manufacturers run material requirements planning (MRP) that auto-generates POs when stock levels fall below reorder points.',
        detail: 'Specify the inspection acceptance criteria in your manufacturing POs — quantity, dimensions, material test certificate requirements — so the goods receipt process can reject non-conforming batches without a separate dispute process.' },
      { name: 'IT & Technology Procurement', icon: 'Laptop',
        text: 'IT departments issue POs for hardware, software licences and cloud services. Software POs specify the licence type, number of seats, contract duration and the vendor\'s obligation to provide support updates during the licence period.',
        detail: 'Include the software version or SKU number on IT POs — vendors sometimes substitute a similar but different-tier product, and without a specific SKU in the PO you have no contractual basis to insist on the correct version.' },
      { name: 'Retail & Wholesale Buying', icon: 'Store',
        text: 'Retailers issue POs for stock replenishment, seasonal buys and promotional campaigns. The PO specifies SKU, colour, size, pack configuration and the shelf-ready packaging requirement if the product goes direct to the shelf.',
        detail: 'Retail POs must state the compliance requirement for MRP labelling and import markings — products arriving without compliant labels cannot be placed on shelves and the cost of relabelling falls on the vendor unless the PO specifies otherwise.' },
      { name: 'Medical & Healthcare Procurement', icon: 'Stethoscope',
        text: 'Hospital procurement teams raise POs for pharmaceuticals, disposables and equipment through a committee-approved vendor list. Every PO references the hospital\'s approved formulary or equipment register, with batch and expiry requirements for consumables.',
        detail: 'Medical POs for regulated devices and drugs must reference the CDSCO registration number of the product — supplies arriving without a valid registration document will be quarantined and cannot be used until compliance is confirmed.' },
      { name: 'Automobile & Automotive', icon: 'Car',
        text: 'Auto dealerships and service centres raise POs for OEM spare parts with part numbers from the manufacturer\'s catalogue. Fleet companies raise annual or quarterly blanket POs for parts and consumables at negotiated rates.',
        detail: 'Specify OEM part numbers and reject clauses for aftermarket substitutes in automotive POs — workshop liability for damage caused by non-genuine parts is legally separate from the PO dispute, but having the specification in the PO prevents the substitution in the first place.' },
      { name: 'Interior Design & Furnishing', icon: 'Sofa',
        text: 'Interior designers raise POs on behalf of clients for furniture, fittings and imported tiles with brand, model number, finish and lead time from the manufacturer or importer. The PO protects the quoted delivery date for the overall project timeline.',
        detail: 'Add a damage-on-delivery clause to furniture and fixture POs — specify that the vendor bears responsibility for transit damage until the item is installed and accepted, not just until it arrives at the site.' },
      { name: 'Education & Institutions', icon: 'GraduationCap',
        text: 'Schools and universities raise POs for stationery, textbooks, lab equipment and digital subscriptions through a sanctioned budget. Government-aided institutions must follow GeM (Government e-Marketplace) procurement rules for eligible categories.',
        detail: 'Educational institution POs should quote the committee resolution or governing body approval reference that sanctions the purchase — this is required for audit purposes and the payment cannot be processed without it in most institutions.' },
      { name: 'Hospitality & Food Service', icon: 'UtensilsCrossed',
        text: 'Hotels and restaurants raise daily or weekly POs for perishable inventory (produce, dairy, proteins) and monthly POs for packaged F&B and cleaning supplies. The PO specifies delivery slot, temperature requirement for chilled items and the supplier\'s return policy for rejected produce.',
        detail: 'Hospitality perishable POs must specify the quality grade and rejection criteria clearly — a PO that says "Grade A vegetables" without defining what Grade A means gives no legal grounds to reject substandard produce at the receiving dock.' },
      { name: 'Freelance & Agency Subcontracting', icon: 'User',
        text: 'Agencies subcontracting work to freelancers or partner studios issue service POs that specify deliverables, deadline, format and payment terms. The PO protects the agency against scope creep and gives the freelancer clarity on exactly what is commissioned.',
        detail: 'Service POs for freelancers should specify the intellectual property ownership clause — without it, the freelancer retains rights to their work by default under the Copyright Act and the agency cannot use it commercially.' },
    ],
  },
  {
    heading: 'Procurement and Contract Law References',
    intro: 'Purchase orders sit at the heart of procurement governance — these primary sources define the rules.',
    items: [
      { label: 'Indian Contract Act, 1872 — Offer, Acceptance and Consideration', url: 'https://legislative.gov.in', note: 'Governs when a PO becomes a binding contract and what constitutes valid acceptance by the supplier — foundational for understanding PO enforceability.' },
      { label: 'CGST Act — Input Tax Credit on Purchases', url: 'https://cbic-gst.gov.in', note: 'Section 16 of the CGST Act conditions ITC claims on matching the PO, goods receipt and supplier invoice — the legal basis for three-way matching in accounts payable.' },
      { label: 'MSMED Act, 2006 — Payment Terms for MSME Suppliers', url: 'https://msme.gov.in', note: 'Limits the maximum credit period buyers can impose on MSME suppliers and imposes compound interest on payments held beyond 45 days after acceptance.' },
      { label: 'GeM Portal — Government Procurement Policy', url: 'https://gem.gov.in', note: 'Government e-Marketplace rules for procurement by central government entities; relevant for businesses supplying to public sector buyers who raise GeM POs.' },
      { label: 'Companies Act, 2013 — Internal Controls over Procurement', url: 'https://mca.gov.in', note: 'Section 134 and ICFR guidelines require listed companies to maintain adequate internal controls over financial reporting, including PO-based procurement authorisation.' },
    ],
  }
);

// ── DELIVERY CHALLAN ──────────────────────────────────────────────────────────
apply('src/data/tools/delivery-challan.ts',
  [
    { q: 'When is a delivery challan required instead of a tax invoice?',
      a: 'A delivery challan is required when goods are transported without a tax invoice — either because the tax invoice is not yet raised or cannot be raised at that time. The CGST Rules (Rule 55) list the permitted situations: supply of liquid gas where quantity is determined at the point of delivery, goods sent on approval for the recipient to inspect before buying, job-work dispatches from principal to job-worker and back, and intra-state branch transfers. Outside these situations, the normal rule is to transport goods with a tax invoice.' },
    { q: 'Is a delivery challan a GST document?',
      a: 'A delivery challan is a movement document prescribed under CGST Rule 55 — it is part of the GST compliance framework but it is not a tax invoice and does not create a tax liability or input credit entitlement. Think of it as the goods\' travel permit, not the commercial transaction record. The tax invoice must follow separately for the supply to be formally completed under GST.' },
    { q: 'Does a delivery challan need to be issued in three copies?',
      a: 'Yes, under CGST Rule 55(2): the original (marked "Original for Consignee") accompanies the goods for the recipient, the duplicate (marked "Duplicate for Transporter") is carried by the transporter, and the triplicate (marked "Triplicate for Consignor") is retained by the supplier. When using a digital challan, print three copies before dispatch — transporters at check posts and warehouses require the physical document.' },
    { q: 'What is the difference between a delivery challan and a lorry receipt?',
      a: 'A delivery challan is issued by the supplier and travels with the goods as proof of dispatch. A lorry receipt (LR) — also called a goods receipt note in rail/air transport — is issued by the transporter as evidence that they have received the goods for transport. Both accompany a consignment, but they serve different purposes: the challan proves what was dispatched, and the LR/GRN proves who is transporting it.' },
    { q: 'Does a delivery challan need an e-way bill for all dispatches?',
      a: 'Not for all dispatches. An e-way bill is required when the value of goods in transit exceeds \'50,000 for inter-state movement. For intra-state movement, the threshold varies by state — most states align with \'50,000 but some have higher limits or category-specific exemptions. For movements below the threshold, or for categories like job work within 50 km, or for non-supply movements within the state, a delivery challan alone (without an e-way bill) is sufficient.' },
    { q: 'Can a delivery challan be used for job-work dispatches?',
      a: 'Yes, and it is the prescribed document for job-work under GST. When a principal sends goods to a job-worker for processing (e.g. a fabric manufacturer sending cloth to an embroidery unit), the challan documents the goods going out and a second challan accompanies the goods on their return after processing. Both challans must be retained — the job-work challan chain is what allows the principal to claim ITC for inputs used in job work.' },
    { q: 'Is a delivery challan required for goods returned to the supplier?',
      a: 'Yes. When a buyer returns goods, they should issue a return delivery challan (sometimes called a gate pass) documenting what is being returned, the original invoice number and the reason for return. This provides the supplier with a document to raise a credit note, update their inventory, and support their ITC reversal if applicable. Without a return challan, return transactions are difficult to reconcile in the books of both parties.' },
    { q: 'Does a delivery challan need a serial number?',
      a: 'Yes. Under GST rules, challans must be serially numbered within a financial year — you cannot reuse numbers or skip them. The serial number can be alphanumeric (e.g. DC-2026-0001) but must be consecutive. Sequential numbering is also practically important: your own dispatch register, your customer\'s goods receipt register, and any third-party audit will all use the challan number as the reference.' },
    { q: 'What details are mandatory on a delivery challan under GST?',
      a: 'CGST Rule 55 requires: the word "Delivery Challan" at the top, a serial number (up to 16 characters), the date of issue, your GSTIN and address, the consignee\'s name and address, the HSN code and description of goods, quantity in standard units, taxable value, and applicable tax rate (even though tax is not collected on the challan). The transporter\'s name, vehicle number and LR number should also be included in practice.' },
    { q: 'Can a delivery challan serve as a proof of delivery for a legal dispute?',
      a: 'A delivery challan signed by the recipient (GRN acknowledgement) is strong evidence of delivery — it documents what was delivered, when, and who received it. An unsigned challan is evidence of dispatch, not receipt. For any dispute about whether goods were delivered, the signed copy retained by the supplier is the primary evidence. Always insist on a countersigned copy — ask the warehouse person or driver to have the recipient sign and stamp if possible.' },
    { q: 'Do I need a delivery challan for service delivery?',
      a: 'No. Delivery challans are exclusively for the physical movement of goods. Services do not have a "delivery" in the physical sense, and a tax invoice for services is the primary documentation of service completion. However, some service businesses (such as equipment rental or repair) dispatch physical equipment alongside a service contract — in that case, a challan documents the equipment movement while the service agreement documents the service.' },
    { q: 'How does a delivery challan link to the final tax invoice?',
      a: 'The delivery challan references the goods being sent and creates an obligation to issue a tax invoice for that supply. The final tax invoice should cross-reference the challan number(s) it settles — this ties the dispatch record to the commercial transaction record. For a single delivery, one challan leads to one invoice. For phased deliveries against one order, each challan leads to a separate invoice or one consolidated invoice that lists all challan numbers.' },
  ],
  {
    heading: 'Delivery Challans by Industry — Movement Documents in Practice',
    intro: 'Every physical goods movement requires documentation — here is how each sector uses delivery challans for compliance and operational control.',
    items: [
      { name: 'Manufacturing & Dispatch', icon: 'Factory',
        text: 'Manufacturers issue challans for every goods movement — finished goods to distributors, raw materials to job-workers, and inter-unit branch transfers. The challan and e-way bill together form the goods\' travel documents, and no truck leaves the factory gate without both.',
        detail: 'Maintain a challan register in the dispatch bay with the driver\'s signature — transport department audits routinely use this register to verify that every outward movement has a corresponding GST-compliant document.' },
      { name: 'Construction Materials', icon: 'HardHat',
        text: 'Brick kilns, sand suppliers, steel stockists and readymix concrete plants issue challans for every delivery to site. The site engineer matches each challan against the quantity actually received and raises a goods receipt note (GRN) — only challan-matched GRNs trigger payment.',
        detail: 'For cement and steel, include the batch or heat number on the delivery challan — clients\'  quality control teams need to trace materials back to their certificates of conformity, and the challan is the first link in that chain.' },
      { name: 'Retail & Wholesale Delivery', icon: 'Store',
        text: 'Distributors and wholesalers issue challans for retail outlet deliveries, distinguishing consignment stock (goods sent on approval that are not yet a sale) from outright sale deliveries. Consignment challans are closed when the retailer reports actual sales.',
        detail: 'For consignment deliveries, stamp the challan "Consignment — Title Not Transferred" clearly — this prevents the retailer from treating consignment stock as a purchase and claiming ITC before the goods are actually sold.' },
      { name: 'Medical & Pharmaceutical', icon: 'Stethoscope',
        text: 'Pharmaceutical distributors issue challans for every batch delivery to hospitals, clinics and pharmacies, with batch number, manufacturing date and expiry date listed per item. These fields are mandatory for cold-chain compliance and recall traceability.',
        detail: 'Medical challan numbers must be recorded in hospital receiving logs — in any product recall, the hospital\'s ability to identify and quarantine affected batches depends on challan number to batch number traceability.' },
      { name: 'Automobile & Spare Parts', icon: 'Car',
        text: 'Spare parts distributors and OEM stockists issue challans for dealership restocking and inter-depot transfers. Vehicle delivery to dealerships from manufacturers is documented with a form 22 (notified by state RTO) alongside the challan.',
        detail: 'Spare parts challans should reference the OEM part number alongside the internal stock code — dealerships reconcile parts receipts against OEM part numbers, not internal codes, and mismatches delay the goods receipt entry.' },
      { name: 'IT Hardware & Equipment', icon: 'Laptop',
        text: 'IT hardware distributors issue challans for equipment deliveries to corporate clients and resellers, with serial numbers listed per device. The challan\'s serial numbers later appear on the final tax invoice, which the client uses for asset registration.',
        detail: 'List the serial number of every device on the IT hardware challan — if even one unit is found faulty after delivery, the serial number on the challan is the basis for warranty replacement, and a challan without serial numbers leads to disputes about which unit was delivered.' },
      { name: 'Interior Design & Furnishing', icon: 'Sofa',
        text: 'Furniture manufacturers and modular kitchen suppliers issue challans for deliveries to installation sites, listing each item, its dimensions and the room it is destined for. A second challan is raised for any items sent back for rework or modifications.',
        detail: 'Include the floor and room number on furniture challans for multi-storey projects — generic site address challans cause confusion when multiple project phases are running on the same site simultaneously.' },
      { name: 'Hospitality & F&B Supply', icon: 'UtensilsCrossed',
        text: 'Food and beverage suppliers to hotels and restaurants issue daily challans for perishable deliveries, with weight, grade and unit price listed per item. The hotel receiving department matches each challan to the purchase order and raises a GRN for accepted quantities.',
        detail: 'Temperature-sensitive F&B challans should have a temperature log column that the driver and receiving staff both sign — this creates evidence of cold-chain maintenance, which is critical for food safety compliance and insurance claims.' },
      { name: 'Education & Books', icon: 'GraduationCap',
        text: 'Textbook publishers and stationery suppliers issue challans to schools and colleges at the start of each academic year, listing title, ISBN, quantity and condition. Schools match challans to procurement POs during stock reconciliation.',
        detail: 'Educational supply challans should list ISBN or item codes, not just title names — multiple editions of the same title often exist, and a title-only challan makes it impossible to verify whether the correct edition was supplied.' },
      { name: 'Freelance & Equipment Lending', icon: 'User',
        text: 'Photographers, videographers and event planners who lend equipment to clients or co-workers issue challans to document items going out, their condition at departure, and the expected return date. These protect against damage disputes.',
        detail: 'Note the condition of every item on the equipment lending challan (working, minor scratch, etc.) before it leaves — a challan that records the pre-existing condition of equipment is your only protection against being held liable for damage that existed before the loan.' },
    ],
  },
  {
    heading: 'Regulatory Sources for Delivery Challans and Goods Movement',
    intro: 'These are the primary GST and logistics regulations that govern the movement of goods and the documents required.',
    items: [
      { label: 'CGST Rules, 2017 — Rule 55: Delivery Challan', url: 'https://cbic-gst.gov.in', note: 'Prescribes the mandatory contents of a delivery challan, the three-copy requirement, and the circumstances where a challan replaces a tax invoice for goods movement.' },
      { label: 'E-Way Bill Portal — NIC', url: 'https://ewaybillgst.gov.in', note: 'Official portal for generating, updating and cancelling e-way bills; the e-way bill number generated here must be referenced on the delivery challan for all qualifying inter-state movements.' },
      { label: 'CGST Act — Section 68: Inspection of Goods in Transit', url: 'https://cbic-gst.gov.in', note: 'Empowers GST officers to inspect goods in transit; a delivery challan and e-way bill are the primary documents an officer will request during a road check.' },
      { label: 'CGST Rules — Rule 45: Job-Work Documentation', url: 'https://cbic-gst.gov.in', note: 'Specifies delivery challan requirements for job-work dispatches between principal and job-worker, including the time limit for goods to be returned after processing.' },
      { label: 'Motor Vehicles Act, 1988 — Goods Carriage Requirements', url: 'https://morth.nic.in', note: 'Road transport rules requiring commercial vehicles carrying goods to carry complete documentation including the goods consignment note, which complements the delivery challan.' },
    ],
  }
);
