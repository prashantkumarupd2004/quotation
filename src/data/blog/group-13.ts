import type { BlogPost } from '@/data/blog-types';

export const blogPosts13: BlogPost[] = [
  {
    slug: 'gst-input-tax-credit-for-small-business',
    title: 'GST Input Tax Credit: How Small Businesses Can Claim What They Are Owed',
    seoTitle: 'GST Input Tax Credit for Small Businesses India: How to Claim ITC (2026)',
    metaDescription:
      'Input tax credit lets you offset GST paid on purchases against GST collected on sales. This plain-language guide explains how ITC works, what qualifies, and common mistakes that cause claims to be rejected.',
    keywords: [
      'GST input tax credit small business India',
      'how to claim ITC in GST',
      'input tax credit rules India',
      'GST ITC for freelancers',
      'GST set off rules India',
      'input credit GST invoice',
    ],
    date: '2026-09-25',
    updatedDate: '2026-09-25',
    author: 'Prashant Upadhyay',
    readingTime: 9,
    category: 'GST & Tax',
    heroImage: '/blog/gst-invoice-rules.svg',
    heroAlt: 'GST input tax credit flow diagram showing purchase GST offset against sales GST',
    excerpt:
      'Input tax credit is one of the biggest practical benefits of GST registration, but many small businesses leave money on the table because they do not understand the rules. Here is a plain-language explanation.',
    intro:
      'One of the core promises of GST was eliminating the cascading effect of taxes - where you pay tax on tax. Input tax credit (ITC) is the mechanism that delivers this. If you are GST registered, you can deduct the GST you paid on your purchases from the GST you owe on your sales. Done correctly, this can significantly reduce your quarterly tax outflow. Done wrongly, it gets reversed with interest.',
    sections: [
      {
        heading: 'The basic concept: how ITC works',
        body: 'When you buy something as a business expense - raw materials, office equipment, software subscriptions, professional services - the supplier charges GST. That GST you paid is your input tax. When you sell your own goods or services, you collect GST from your customers. That is your output tax.\n\nYour actual GST liability is output tax minus input tax. If you collected Rs 18,000 in GST from clients and paid Rs 6,000 in GST on purchases, you owe only Rs 12,000 to the government. The Rs 6,000 is your ITC.\n\nThis is why GST-registered businesses buying from other registered businesses are better off: they can claim credit on those purchases. An unregistered supplier cannot give you ITC, which is one reason large companies prefer to buy from registered vendors.',
      },
      {
        heading: 'What qualifies for ITC and what does not',
        body: 'ITC is available on goods and services used for your business. The main conditions are that you must have a valid tax invoice from a GST-registered supplier, the supplier must have filed their return and paid the tax to the government, and you must have received the goods or services.\n\nCommon purchases that qualify: office equipment and furniture, raw materials used in manufacturing, software and SaaS subscriptions used for work, freight and logistics on goods, professional services like CA or legal fees charged with GST.',
        callout: {
          type: 'warning',
          text: 'ITC is NOT available on: motor vehicles (with exceptions), food and beverages, club memberships, health and fitness services, cosmetic surgery, works contract services for construction of immovable property, and any purchase used for personal rather than business purposes.',
        },
      },
      {
        heading: 'The invoice matching requirement',
        body: 'This is where most small businesses run into trouble. For your ITC claim to be valid, your supplier must have uploaded the invoice in their GSTR-1 return, and that invoice must appear in your GSTR-2B (your auto-generated input credit statement). If the supplier files late or does not file at all, your ITC claim on that invoice is at risk.\n\nSince 2022, the rules have tightened: you can only claim ITC up to 105% of what appears in your GSTR-2B. This means you must reconcile your purchase invoices against GSTR-2B regularly and chase suppliers who have not filed their returns, or you lose the credit.',
        bullets: [
          'Supplier must be GST registered and have a valid GSTIN on their invoice',
          'Invoice must appear in your GSTR-2B (auto-generated from supplier GSTR-1)',
          'You must have received the goods or services',
          'Payment must be made within 180 days (else ITC is reversed)',
          'ITC is capped at 105% of your GSTR-2B auto-populated credit',
        ],
      },
      {
        heading: 'How to track and claim ITC correctly',
        body: 'Every month, after your suppliers file their GSTR-1 (by the 11th of the following month), download your GSTR-2B from the GST portal. This shows all the invoices your suppliers have filed that name you as the buyer.\n\nReconcile this against your purchase register. Any invoice you received but that is missing from GSTR-2B means the supplier has not filed it. Follow up with them immediately - if they do not file by the due date of GSTR-3B, you can still claim the ITC provisionally but it will be subject to reversal if the supplier remains non-compliant.',
        numbered: [
          'Download GSTR-2B from the portal after the 14th of each month',
          'Reconcile with your purchase register and invoice file',
          'Identify any invoice not appearing in GSTR-2B',
          'Chase the supplier to file their return',
          'Claim ITC in GSTR-3B based on GSTR-2B with any necessary adjustments',
        ],
      },
      {
        heading: 'Common mistakes that get ITC reversed',
        body: 'Claiming ITC on a supplier who turns out to be cancelled or non-existent, claiming ITC on blocked categories like club memberships, not paying the supplier within 180 days of the invoice date, or claiming more ITC than appears in your GSTR-2B - all of these trigger ITC reversals, and reversed ITC comes with an 18% interest charge from the date you claimed it.\n\nThe most avoidable mistake is claiming ITC based on your own purchase register without verifying against GSTR-2B. Some businesses do this for convenience, then discover months later that several suppliers have not filed and the credits are reversed.',
      },
    ],
    faqs: [
      {
        q: 'Can a freelancer claim ITC on a laptop bought for work?',
        a: 'Yes, if you are GST registered. A laptop purchased with a proper GST invoice for business use qualifies for ITC. Keep the original tax invoice and ensure it appears in your GSTR-2B. You cannot claim ITC if the laptop is partly used for personal purposes - in that case, claim only the business-use proportion.',
      },
      {
        q: 'What happens if I claim ITC on an invoice that the supplier has not paid GST on?',
        a: 'The ITC will be reversed. You will owe the ITC amount back plus 18% interest from the date you claimed it. This is why verifying invoices against GSTR-2B before claiming is essential, not optional.',
      },
      {
        q: 'Can I claim ITC on GST paid before I registered for GST?',
        a: 'On goods held in stock on the day of registration, yes - there is a provision to claim opening stock ITC. On services, no. The rules for claiming pre-registration ITC on stock are specific and it is worth consulting a CA for the filing.',
      },
    ],
    references: [
      { label: 'CBIC - Input Tax Credit Rules', url: 'https://www.cbic.gov.in/resources//htdocs-cbec/gst/cgst-rules.pdf' },
      { label: 'GST Portal - GSTR-2B', url: 'https://www.gst.gov.in' },
    ],
    relatedSlugs: ['gst-invoice-rules-guide', 'gst-registration-guide-for-small-business', 'tds-on-payments-guide'],
  },

  {
    slug: 'how-to-write-a-business-contract-india',
    title: 'How to Write a Simple Business Contract in India (Without a Lawyer)',
    seoTitle: 'How to Write a Simple Business Contract India: Freelancer and MSME Guide 2026',
    metaDescription:
      'A simple written agreement before any project starts protects both sides. This guide explains the essential clauses every Indian freelancer and small business should include, in plain language.',
    keywords: [
      'how to write a business contract India',
      'freelancer contract India',
      'simple service agreement India',
      'work contract for freelancer India',
      'business agreement format India',
      'contract without lawyer India',
    ],
    date: '2026-09-25',
    updatedDate: '2026-09-25',
    author: 'Prashant Upadhyay',
    readingTime: 8,
    category: 'Business Growth',
    heroImage: '/blog/terms-conditions.svg',
    heroAlt: 'Business contract document with signature lines, key clauses highlighted, and a handshake icon',
    excerpt:
      'Most Indian freelancers start projects on a handshake or an email chain. A short written agreement takes 30 minutes to prepare and saves enormous grief when something goes wrong.',
    intro:
      'A written contract does not mean you distrust the client. It means both of you have the same understanding of what was agreed, in a form that can be checked if memory differs three months from now. For most freelance and small business work, you do not need a lawyer to draft it. You need five to eight clear clauses in plain language.',
    sections: [
      {
        heading: 'Why most Indian freelancers skip contracts and why that is a mistake',
        body: 'The most common reason is that contracts feel formal and aggressive, especially when you know the client personally or through a referral. The second reason is that templates are full of legal jargon that neither party understands, so it feels performative.\n\nBut disputes almost never arise when everything goes well. They arise when something is ambiguous: who pays for additional rounds of revisions, what happens if the client delays sending content by two months, what the kill fee is if the project is cancelled halfway. A short, plain-language agreement answers all of these in advance.',
      },
      {
        heading: 'The 7 clauses every service agreement should have',
        body: 'You do not need twenty clauses. You need these seven, written clearly enough that anyone can understand them without a legal degree.',
        bullets: [
          'Parties: full legal names of both parties and their business names/addresses',
          'Scope of work: what you will deliver and what you will not (exclusions matter as much as inclusions)',
          'Timeline: start date, key milestones, and delivery date',
          'Payment: total amount, structure (advance/milestones/on delivery), accepted payment modes, and late payment terms',
          'Revisions and changes: how many rounds are included, what constitutes a change of scope, and the process for additional work',
          'Ownership: when does the client own the deliverable (typically on full payment), and does the freelancer retain portfolio rights',
          'Termination: notice period, what happens to work completed so far, and whether a kill fee applies',
        ],
      },
      {
        heading: 'The scope clause: where most disputes start',
        body: 'The scope section is the most important and most commonly written too vaguely. "Website design" is not a scope. "Design and development of a 5-page website (Home, About, Services, Portfolio, Contact) using WordPress, with 2 rounds of design revisions, delivery in 4 weeks" is a scope.\n\nAlso list what is explicitly not included: "Does not include copywriting, logo design, hosting setup, SEO, or any page not listed above." This removes the ambiguity that clients fill with their own assumptions.',
        callout: {
          type: 'important',
          text: 'Write the scope as if you are explaining it to someone who has never met you or the client. If there is any room for interpretation, a determined client will interpret it in their favour. Be specific.',
        },
      },
      {
        heading: 'The payment clause: be explicit about late payment',
        body: 'State the payment schedule clearly. Example: "50% advance on acceptance of this agreement, 50% on delivery of final files. Invoice will be raised on delivery. Payment due within 7 days of invoice date."\n\nAdd a late payment provision: "Invoices unpaid after 14 days will attract interest at 18% per annum (1.5% per month) on the outstanding amount." You may never enforce this, but having it in writing changes the client\'s behaviour around payment dates.\n\nAlso include a work-stoppage clause if payment is delayed beyond a certain point: "Work will pause if the advance is not received within 3 days of agreement signing." This is reasonable and protects you from working for weeks unpaid.',
      },
      {
        heading: 'How to make a contract actually binding in India',
        body: 'Under the Indian Contract Act 1872, a contract is valid if there is an offer, acceptance, consideration (payment), and free consent from both parties. A written agreement signed (or accepted by email) by both parties satisfies all of these.\n\nYou do not need a stamp or notarisation for most service contracts, though stamp duty applies in some states for high-value agreements. A signed email chain can also constitute a binding agreement. However, a physical signed document is easier to produce in court or arbitration.\n\nFor agreements above Rs 5 lakh or with long-term implications, it is worth having a CA or advocate review it. For routine freelance work under Rs 2 lakh, a clear plain-language document signed by both parties is entirely adequate.',
      },
      {
        heading: 'Send the agreement before you start any work',
        body: 'A contract signed after the work has started is much harder to enforce, because the client can argue you proceeded without their agreement on terms. Send it with the quotation, or immediately after verbal confirmation, and require the signed copy or an email confirmation before you begin.\n\nIf a client refuses to sign any agreement and insists on starting immediately, consider that a yellow flag. Reputable clients understand that written agreements protect both sides.',
      },
    ],
    faqs: [
      {
        q: 'Does a freelance contract need to be on stamp paper?',
        a: 'For most service agreements in India, stamp paper is not mandatory for the contract to be valid. However, if you ever need to use the contract as evidence in court, an unstamped agreement may be inadmissible in some states unless stamp duty is paid at that point with penalty. For significant contracts, a Rs 100-500 stamp paper is worth the small cost for enforceability.',
      },
      {
        q: 'The client accepted via WhatsApp. Is that binding?',
        a: 'Yes. In India, electronic communications including WhatsApp messages are recognised as valid acceptances under the Information Technology Act. Screenshot and backup your key messages. An email acceptance is stronger in practice because it is harder to repudiate.',
      },
      {
        q: 'Can I use the same contract template for every client?',
        a: 'Yes, with a template approach. Have a base agreement with the fixed clauses (payment terms, termination, ownership, late payment) and fill in the scope, timeline, and amounts specifically for each project. Never reuse a previous client\'s specific scope for a new client without updating it.',
      },
    ],
    relatedSlugs: ['how-to-write-a-service-agreement', 'quotation-terms-and-conditions-checklist', 'client-refuses-to-pay-what-to-do'],
  },

  {
    slug: 'how-to-write-professional-invoice-india',
    title: 'How to Write a Professional Invoice in India: A Complete Format Guide',
    seoTitle: 'How to Write a Professional Invoice India: Format, GST Rules, and Free Template 2026',
    metaDescription:
      'A professional invoice needs specific fields to be legally valid under GST. This guide explains every field on an Indian tax invoice, common mistakes to avoid, and how to create one free.',
    keywords: [
      'how to write an invoice India',
      'professional invoice format India',
      'GST invoice format India',
      'invoice fields required India',
      'how to make invoice India',
      'tax invoice format India 2026',
      'invoice template India free',
    ],
    date: '2026-09-25',
    updatedDate: '2026-09-25',
    author: 'Prashant Upadhyay',
    readingTime: 8,
    category: 'Business Documents',
    heroImage: '/blog/free-invoice-guide.svg',
    heroAlt: 'Annotated professional GST invoice showing all mandatory fields highlighted',
    excerpt:
      'An invoice is not just a payment request - under GST, it is a legal document. Getting the format wrong means your client cannot claim input credit, and that creates disputes. Here is every field you need.',
    intro:
      'Most Indian business owners learn invoice formatting by copying what someone else used. That works until a GST officer or a client\'s accounts department points out a missing field. This guide explains every mandatory and recommended field on an Indian tax invoice so you can get it right from the start.',
    sections: [
      {
        heading: 'Tax invoice vs regular invoice: what is the difference',
        body: 'If you are GST registered and making a taxable supply, the document you issue must be called a "Tax Invoice" - not a "bill" or just an "invoice." The word Tax Invoice on the document is a legal requirement under the CGST Rules. It signals to the recipient that the GST charged is eligible for input tax credit claim.\n\nIf you are GST registered but making an exempt supply, or if you are a composition dealer, you issue a Bill of Supply instead. If you are not registered under GST at all, you can issue a plain invoice but you cannot charge GST on it and cannot call it a Tax Invoice.',
      },
      {
        heading: 'Mandatory fields under GST rules',
        body: 'Rule 46 of the CGST Rules, 2017 specifies what a tax invoice must contain. Missing any of these fields makes the invoice technically non-compliant.',
        table: {
          headers: ['Field', 'What to include'],
          rows: [
            ['Name and address', 'Your registered business name and address exactly as on GSTIN'],
            ['GSTIN', 'Your 15-character GST registration number'],
            ['Invoice number', 'A consecutive serial number unique within a financial year'],
            ['Invoice date', 'Date of issue'],
            ['Recipient name and address', 'Buyer\'s name, address, and GSTIN if registered'],
            ['Place of supply', 'State name and code - determines CGST+SGST vs IGST'],
            ['HSN / SAC code', 'HSN for goods (6 digits for most), SAC for services'],
            ['Description', 'Description of goods or services'],
            ['Quantity and unit', 'Required for goods; not mandatory for services'],
            ['Taxable value', 'Value before GST'],
            ['GST rate and amount', 'Separate CGST, SGST (intra-state) or IGST (inter-state)'],
            ['Total amount', 'Total payable including GST'],
            ['Signature', 'Signature of the authorised person or digital signature'],
          ],
        },
      },
      {
        heading: 'The invoice number: a field most get wrong',
        body: 'Under GST, invoice numbers must be consecutive within a financial year. You can use any alphanumeric format, but once you start a series, you cannot skip or repeat numbers. A typical format: INV-2026-001, INV-2026-002, etc., resetting to 001 each April 1.\n\nDo not restart your numbering mid-year, do not re-use invoice numbers, and do not issue invoices out of sequence. GST officers look for gaps and duplicates in invoice series during audits. If you use a tool like QuotationMaker.in or any accounting software, it manages this automatically.',
        callout: {
          type: 'warning',
          text: 'Reusing or skipping invoice numbers is treated as a compliance violation under GST. Use software that auto-increments, or maintain a physical register and cross numbers off as you use them.',
        },
      },
      {
        heading: 'Intra-state vs inter-state: CGST+SGST or IGST',
        body: 'The most common mistake on Indian invoices is applying the wrong type of GST. The rule is simple: if your place of supply matches your state of registration, it is an intra-state supply and you charge CGST + SGST, each at half the applicable rate. If they differ, it is inter-state and you charge IGST at the full rate.\n\nExample: You are in Maharashtra. You supply to a client in Maharashtra - charge CGST 9% + SGST 9% (for an 18% GST item). You supply to a client in Rajasthan - charge IGST 18%.\n\nThe place of supply for services is generally the location of the recipient. For goods, it is where the goods are delivered.',
      },
      {
        heading: 'Recommended fields that are not mandatory but help',
        body: 'Beyond the legal requirements, add these to make your invoice more useful and professional: your bank account details and IFSC for payment, your UPI ID or UPI QR code for instant payment, payment due date (a specific date, not "Net 30"), your mobile number and email for follow-up, a brief description of the work period if it is a monthly service, and your terms for late payment.',
      },
      {
        heading: 'How to create a compliant invoice for free',
        body: 'You do not need accounting software for basic invoicing. QuotationMaker.in lets you create a fully compliant GST tax invoice in your browser - it handles CGST/SGST vs IGST automatically based on your state and the client\'s state, generates consecutive invoice numbers, includes all mandatory fields, and produces a print-ready PDF. It works without an account and saves your data in your browser.',
      },
    ],
    faqs: [
      {
        q: 'Can I issue an invoice without a GSTIN?',
        a: 'If you are not registered for GST, you cannot issue a Tax Invoice - just a regular invoice. Do not add a fake or placeholder GSTIN. If your turnover exceeds the registration threshold, register first. Issuing an invoice with a fraudulent GSTIN is a serious offence.',
      },
      {
        q: 'What is the time limit for issuing a GST invoice?',
        a: 'For goods, the invoice must be issued on or before the date of removal (delivery). For services, within 30 days of supply (45 days for banks and insurance companies). Issuing an invoice late does not invalidate it but can create compliance questions.',
      },
      {
        q: 'Do I need to print invoices or is a digital PDF okay?',
        a: 'A digital PDF sent by email or WhatsApp is a valid invoice under GST. There is no requirement to print and hand-deliver an invoice. However, both you and your recipient should keep a copy - you for 6 years (the record-keeping requirement under GST), them for their input credit claim.',
      },
      {
        q: 'What happens if my client\'s accounts team says the invoice format is wrong?',
        a: 'Issue a corrected invoice with the same invoice number and date, noting it as a revised copy, and clearly mark the original as cancelled. Do not issue a new invoice number for a correction to an existing invoice.',
      },
    ],
    references: [
      { label: 'CBIC - CGST Rules Rule 46 (Tax Invoice)', url: 'https://www.cbic.gov.in/resources//htdocs-cbec/gst/cgst-rules.pdf' },
      { label: 'GST Portal', url: 'https://www.gst.gov.in' },
    ],
    relatedSlugs: ['gst-invoice-rules-guide', 'free-invoice-maker-online-guide', 'invoice-vs-bill-difference'],
  },

  {
    slug: 'how-to-register-udyam-msme',
    title: 'How to Register Under Udyam (MSME Registration) in India',
    seoTitle: 'Udyam MSME Registration India: How to Register, Benefits, and Process 2026',
    metaDescription:
      'Udyam Registration is free and takes 10 minutes if you have your Aadhaar and PAN. This guide explains who qualifies, what benefits you get, and the exact steps to register as a Micro, Small or Medium Enterprise.',
    keywords: [
      'Udyam registration India',
      'MSME registration online India',
      'how to register MSME India',
      'Udyam certificate benefits',
      'micro small medium enterprise registration',
      'MSME registration for freelancer',
      'Udyam registration process 2026',
    ],
    date: '2026-09-25',
    updatedDate: '2026-09-25',
    author: 'Prashant Upadhyay',
    readingTime: 7,
    category: 'Business Growth',
    heroImage: '/blog/msme-registration-guide.svg',
    heroAlt: 'Udyam MSME registration certificate with Micro Small Medium Enterprise classification badges',
    excerpt:
      'Udyam Registration is the official MSME registration in India. It takes 10 minutes, costs nothing, and unlocks collateral-free loans, priority payment protection, and government tender benefits.',
    intro:
      'If your business qualifies as a Micro, Small or Medium Enterprise - and many freelancers and small businesses do - Udyam Registration is one of the most useful things you can do. It is free, takes about 10 minutes on udyamregistration.gov.in, and opens access to several practical benefits that most registered businesses never fully use.',
    sections: [
      {
        heading: 'Who qualifies as Micro, Small or Medium?',
        body: 'The classification is based on annual turnover and investment in plant and machinery or equipment. These thresholds were revised significantly in 2020 and are now much higher than most people realise.',
        table: {
          headers: ['Category', 'Investment in Plant & Machinery', 'Annual Turnover'],
          rows: [
            ['Micro', 'Up to Rs 1 crore', 'Up to Rs 5 crore'],
            ['Small', 'Up to Rs 10 crore', 'Up to Rs 50 crore'],
            ['Medium', 'Up to Rs 50 crore', 'Up to Rs 250 crore'],
          ],
        },
      },
      {
        heading: 'Key benefits of Udyam Registration',
        body: 'The benefits are concrete and directly useful for small businesses and freelancers.',
        bullets: [
          'Collateral-free loans under the Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE)',
          'Priority sector lending from banks at lower interest rates',
          'Protection under the MSME Development Act: buyers must pay you within 45 days, and delayed payment attracts compound interest at 3x RBI bank rate',
          'Access to MSME Samadhaan for payment dispute resolution (faster than civil court)',
          'Subsidies on ISO certification, patent registration, industrial promotion',
          'Preference in government procurement tenders under Public Procurement Policy',
          'Protection against delayed payments from large companies under Section 43B of Income Tax Act',
        ],
      },
      {
        heading: 'The payment protection benefit: the most practically useful one',
        body: 'The MSME Development Act 2006 requires that any buyer who purchases from a Micro or Small Enterprise must pay within 45 days of delivery or the agreed date (whichever is shorter). If they do not, they owe compound interest at three times the RBI bank rate.\n\nFor a registered MSME, delayed payment by a large company buyer is not just inconvenient - it is a legal violation by the buyer. You can file on MSME Samadhaan at samadhaan.msme.gov.in and the Facilitation Council will take up the dispute. This is far faster than civil court and costs nothing to file.',
        callout: {
          type: 'tip',
          text: 'The Section 43B(h) amendment to the Income Tax Act means large companies cannot deduct MSME payments as expenses if they delay beyond 45 days. This gives you real leverage: their tax liability goes up if they do not pay you on time.',
        },
      },
      {
        heading: 'How to register: step by step',
        body: 'The entire process is online at udyamregistration.gov.in and takes under 15 minutes if your documents are ready. For a new enterprise that has never registered before, use the "For New Entrepreneurs who are not registered yet as MSME" option.',
        numbered: [
          'Go to udyamregistration.gov.in',
          'Click "For New Entrepreneurs who are not registered yet as MSME"',
          'Enter your Aadhaar number and name exactly as on Aadhaar, then validate with OTP',
          'PAN details will be fetched automatically - verify them',
          'Fill in your business details: type of organisation, address, bank account, NIC activity code',
          'Submit and receive your Udyam Registration Number and certificate by email',
        ],
      },
      {
        heading: 'What you need before starting',
        body: 'The process is largely Aadhaar and PAN based. Have your Aadhaar linked to your active mobile number (for OTP), your PAN, your bank account details (account number and IFSC), and your business address. For a proprietorship or freelance individual, your personal Aadhaar and PAN serve as the business credentials.',
      },
      {
        heading: 'One registration, valid for life',
        body: 'Once registered, your Udyam Registration Number is permanent. There is no annual renewal fee. If your turnover grows and you cross from Micro to Small or Small to Medium, you update your classification on the portal, but the registration itself does not expire.\n\nKeep your Udyam certificate accessible. Lenders, government procurement portals, and corporate buyers increasingly ask for it. Store both the digital certificate and a printout.',
      },
    ],
    faqs: [
      {
        q: 'Can a freelancer or self-employed individual get Udyam Registration?',
        a: 'Yes. Sole proprietors, freelancers, and self-employed individuals can register as Micro or Small Enterprises. There is no requirement to be a company or partnership. Your Aadhaar serves as the registration credential.',
      },
      {
        q: 'Is Udyam Registration the same as the old Udyog Aadhaar?',
        a: 'Udyog Aadhaar was the previous registration system, replaced by Udyam Registration from July 2020. If you have an old Udyog Aadhaar, it was valid until 31 March 2021 and should have been migrated to Udyam. Check udyamregistration.gov.in to verify your current status.',
      },
      {
        q: 'Does Udyam Registration help with GST or income tax?',
        a: 'Not directly with filing or rates, but MSME registration under Section 43B(h) of Income Tax Act means that large companies cannot claim a deduction for your unpaid invoice, which creates pressure on them to pay on time. For your own tax filing, MSME registration itself does not change your tax rate.',
      },
    ],
    references: [
      { label: 'Udyam Registration Portal', url: 'https://udyamregistration.gov.in' },
      { label: 'MSME Ministry - MSME Development Act', url: 'https://msme.gov.in' },
      { label: 'MSME Samadhaan - Payment Dispute', url: 'https://samadhaan.msme.gov.in' },
    ],
    relatedSlugs: ['msme-registration-guide', 'client-refuses-to-pay-what-to-do', 'how-to-recover-late-payments'],
  },

  {
    slug: 'gst-on-freelance-services-india',
    title: 'GST on Freelance Services: What Every Indian Freelancer Must Know',
    seoTitle: 'GST on Freelance Services India 2026: When to Register, What Rate, How to Invoice',
    metaDescription:
      'Should you register for GST as a freelancer in India? What rate applies to your services? How do you invoice a foreign client? This guide answers the most common GST questions for freelancers.',
    keywords: [
      'GST on freelance services India',
      'GST for freelancers India',
      'freelancer GST registration India',
      'GST rate for services India',
      'how to invoice foreign clients GST India',
      'GST exempt services freelancer India',
      'freelance income tax GST India',
    ],
    date: '2026-09-25',
    updatedDate: '2026-09-25',
    author: 'Prashant Upadhyay',
    readingTime: 8,
    category: 'GST & Tax',
    heroImage: '/blog/gst-in-quotations.svg',
    heroAlt: 'Freelancer working on laptop with GST invoice and tax calculation icons floating above',
    excerpt:
      'GST for freelancers trips up a lot of people. The registration threshold, the rate on services, invoicing foreign clients, and the reverse charge on imports - here is what actually applies to you.',
    intro:
      'If you are a freelancer or independent consultant in India, GST probably falls into one of two categories: either you ignore it and hope it does not catch up with you, or you vaguely know you should be registered but are not sure of the details. Neither is a good place to be. Here is a clear, practical guide to exactly how GST applies to freelance service income.',
    sections: [
      {
        heading: 'The registration threshold for service providers',
        body: 'Freelancers and consultants are service providers. The GST registration threshold for service providers is Rs 20 lakh annual aggregate turnover in most states, and Rs 10 lakh in special category states (Jammu and Kashmir, Himachal Pradesh, Uttarakhand, and North-East states).\n\nAggregate turnover includes all taxable supplies plus exempt supplies plus exports, but not GST itself. If your total annual billing from all clients combined crosses Rs 20 lakh, you must register. Below that, you can register voluntarily.',
        callout: {
          type: 'important',
          text: 'The Rs 20 lakh threshold applies to services. For goods suppliers, the threshold is Rs 40 lakh. If you provide a mix of goods and services, the lower Rs 20 lakh threshold applies to the whole business.',
        },
      },
      {
        heading: 'What GST rate applies to freelance services?',
        body: 'Most freelance professional services fall under the 18% GST slab. This includes IT and software development, graphic design, web development, content writing, digital marketing, consulting, coaching, photography, and most other skilled service categories.\n\nIf you are unsure of your SAC (Service Accounting Code) and rate, look up your specific service on the CBIC website or ask your CA. Wrongly applying the rate is a compliance issue even if the error is in the government\'s favour.',
      },
      {
        heading: 'Billing Indian clients: CGST + SGST vs IGST',
        body: 'When billing Indian clients, the rule is: same state as you = CGST + SGST at 9% each. Different state = IGST at 18%. The state that matters is the state of your GST registration versus the state where the service is consumed (typically where the client is).\n\nExample: You are registered in Karnataka, billing a client in Karnataka - charge CGST 9% + SGST 9%. Billing a client in Maharashtra - charge IGST 18%. The GST amount is the same either way, but the distribution to the government changes.',
      },
      {
        heading: 'Exporting services to foreign clients: zero-rated supply',
        body: 'If you provide services to clients outside India and receive payment in foreign currency, this is an export of services and is classified as a zero-rated supply. You do not charge GST on the invoice, but you are still entitled to claim refund of any GST you paid on your purchases (input tax credit).\n\nFor the export to be treated as zero-rated, the payment must come in convertible foreign exchange (USD, EUR, GBP, etc.) and must be received within the prescribed time. You should still file GST returns and show the export in your GSTR-1.\n\nMany Indian freelancers who bill foreign clients in rupees (via Payoneer in INR, or bank transfer in INR) - ask a CA whether this qualifies as export, as the treatment can vary.',
      },
      {
        heading: 'What if you are under the threshold but your client wants a GSTIN?',
        body: 'Large corporate clients sometimes insist on a GSTIN for vendor empanelment. If you are below the Rs 20 lakh threshold, you have two options: register voluntarily (which is allowed and has no minimum turnover requirement), or explain to the client that you are not required to register and that unregistered vendor invoices are accepted for services below the reverse charge threshold.\n\nVoluntary registration makes sense if: you regularly deal with B2B clients who want input credit on your invoices, or if your turnover is close to the threshold and you want to plan ahead.',
      },
      {
        heading: 'Reverse charge on certain imports of services',
        body: 'If you pay for software, SaaS subscriptions, or digital services from foreign companies (Canva, Adobe, AWS, Google Workspace), and those companies are not registered in India, you may be liable to pay GST on those purchases under the Reverse Charge Mechanism. This means you pay the GST yourself and can then claim it as ITC if you are registered.\n\nThis is a compliance requirement that most freelancers miss. If you pay Canva Pro or AWS monthly, technically you should be accounting for 18% GST on those amounts under reverse charge. Consult a CA if this applies to your situation.',
      },
    ],
    faqs: [
      {
        q: 'I am a freelancer earning Rs 15 lakh. Should I register for GST?',
        a: 'You are below the mandatory threshold (Rs 20 lakh for most states). Voluntary registration is your choice. Consider it if your clients want to claim ITC on your invoices, if you pay GST on significant business expenses you want to claim back, or if your billing is growing and you will cross the threshold within the year.',
      },
      {
        q: 'Do I charge GST on a client who gave me an advance, before I complete the work?',
        a: 'GST on services is generally payable at the time of supply, which is the earliest of: the date of invoice, the date of receipt of payment, or the date of completion of service. If you receive an advance, GST may be applicable on that advance under certain interpretations. Raise a receipt voucher and account for GST. Ask your CA to clarify for your specific situation.',
      },
      {
        q: 'I do not have a CA. How do I file GST returns myself?',
        a: 'GST returns can be filed directly on gst.gov.in. GSTR-1 (outward supplies) and GSTR-3B (summary with payment) are the main returns for regular taxpayers. There are several free tutorials and the GST portal itself has a help section. The returns are not especially complex for a freelancer with straightforward service income.',
      },
    ],
    references: [
      { label: 'GST Portal - File Returns', url: 'https://www.gst.gov.in' },
      { label: 'CBIC - GST Rates for Services', url: 'https://www.cbic.gov.in' },
    ],
    relatedSlugs: ['freelancer-invoice-guide-india', 'what-is-gstin-and-how-to-get-it', 'gst-invoice-rules-guide'],
  },

  {
    slug: 'how-to-set-payment-terms-india',
    title: 'How to Set Payment Terms That Actually Get You Paid on Time',
    seoTitle: 'How to Set Payment Terms for Invoices India: Net 15, Net 30 or Advance?',
    metaDescription:
      'Choosing the right payment terms reduces late payments significantly. This guide explains the most common payment term structures for Indian businesses and how to enforce them without damaging client relationships.',
    keywords: [
      'payment terms for invoices India',
      'net 30 payment terms India',
      'advance payment terms freelancer India',
      'how to set payment terms small business India',
      'invoice payment terms India',
      'how to get clients to pay on time India',
    ],
    date: '2026-09-25',
    updatedDate: '2026-09-25',
    author: 'Prashant Upadhyay',
    readingTime: 7,
    category: 'Getting Paid',
    heroImage: '/blog/payment-terms-guide.svg',
    heroAlt: 'Invoice with payment terms highlighted showing due date, advance payment and milestone structure',
    excerpt:
      'Net 30 is a standard term that most clients ignore. A specific due date, an advance requirement, and a clear late payment clause change the behaviour completely.',
    intro:
      'Payment terms are not just a formality on an invoice. They are instructions. The way you write your payment terms directly affects when - and whether - you get paid. Most Indian freelancers and small businesses use vague terms like "immediate" or "Net 30" that clients treat as suggestions. Here is how to write terms that work.',
    sections: [
      {
        heading: 'Why "Net 30" is nearly useless for small businesses',
        body: '"Net 30" means payment due within 30 days of invoice date. The problem is that most clients interpret it generously - "they said 30 days, so I have plenty of time" - and many pay at 45 or 60 days with no explanation, because they know most small suppliers will not push back.\n\nFor large corporations buying from MSMEs, the law actually limits payment to 45 days. But for everyone else, net 30 is an expectation, not an enforcement mechanism.',
      },
      {
        heading: 'Use specific dates, not terms',
        body: 'The single most effective change is replacing "Net 30" with a specific date: "Payment due by 15 October 2026." A specific date can be entered directly into a payment calendar. Net 30 requires mental arithmetic and creates room for delay.\n\nWhen writing your invoice, calculate the date yourself and print it explicitly: "Payment due: [date], 15 days from invoice date." No ambiguity, no mental effort for the client, and much higher on-time payment rates in practice.',
        callout: {
          type: 'tip',
          text: 'Clients who use accounting software process invoices faster when the due date is explicit. The software just enters the date. With "Net 30," someone has to calculate it, and that calculation often gets deferred.',
        },
      },
      {
        heading: 'Common payment structures and when to use each',
        body: 'Different work types call for different payment structures. Here are the most common ones used by Indian freelancers and small businesses.',
        table: {
          headers: ['Structure', 'Best for', 'Typical split'],
          rows: [
            ['Full advance', 'New clients, short turnaround work, custom orders', '100% before work starts'],
            ['50/50 advance and delivery', 'Fixed-scope projects with new or medium-trust clients', '50% to start, 50% on delivery'],
            ['Milestone payments', 'Long projects with defined phases', '30% start, 40% mid, 30% completion'],
            ['Net 15 on invoice', 'Ongoing retainers with trusted clients', '100% within 15 days of invoice'],
            ['Net 30 on invoice', 'Large corporate clients with formal procurement', '100% within 30 days'],
          ],
        },
      },
      {
        heading: 'Why advance payment is underused by Indian freelancers',
        body: 'Many freelancers avoid asking for advance payment because they fear it will scare clients away. In practice, the opposite is often true: a client who refuses to pay even 25-30% advance before work starts is a client who will likely be difficult about the final payment too.\n\nAn advance also changes the relationship. Once a client has committed money, they become more engaged and more responsive. Projects with advances tend to go smoother than projects done on full credit.\n\nIf you are uncomfortable asking for 50%, start with 30%. Most clients who are serious about the project will not object.',
      },
      {
        heading: 'The late payment clause: state it clearly',
        body: 'Every invoice and every agreement should include a late payment clause. A simple version: "Invoices unpaid beyond [due date] will attract late payment interest at 18% per annum (1.5% per month) on the outstanding amount."\n\nYou are unlikely to enforce this every time. But having it in writing does three things: it signals that you are professional and have thought about this, it gives you grounds to charge interest if a client chronically delays, and it makes clients slightly more careful about delaying payment because they know there is a stated consequence.\n\nFor MSME-registered businesses, the interest rate under the MSME Development Act is compound interest at three times the RBI bank rate, which is higher. You can reference this directly on invoices to B2B clients if you are MSME-registered.',
      },
      {
        heading: 'Practical tips for faster payment in India',
        body: 'Include your UPI ID and QR code on every invoice - a client can pay in 30 seconds. Include your bank details for NEFT/RTGS for larger amounts. Send invoices the day the work is delivered, not days or weeks later. Follow up with a WhatsApp or email on the due date if payment has not arrived: "Just confirming our invoice [No.] dated [date] for Rs [X] is due today. Have you been able to process it? Let me know if you need anything from our end." Keep it factual, not apologetic.',
      },
    ],
    faqs: [
      {
        q: 'Is it reasonable to ask a new client for advance payment?',
        a: 'Entirely reasonable. Frame it as standard practice: "Our standard terms are 50% advance to confirm the project and 50% on delivery. Once the advance is received, we will start immediately." Most genuine clients accept this. It is a red flag if a first-time client with no established relationship refuses any advance.',
      },
      {
        q: 'A client says they can only pay in 60 days due to their internal policy. What should I do?',
        a: 'Accept it only if you can afford to wait and you want the work. But consider pricing the project 5-10% higher to compensate for the longer credit period - you are effectively giving them a 60-day loan. Alternatively, ask if you can invoice in two parts: 50% at project start with 30-day terms, and 50% at delivery with 30-day terms. This gives you earlier cash flow.',
      },
      {
        q: 'Should payment terms be on the invoice or in a separate agreement?',
        a: 'Both. In the agreement or quotation, state the payment structure (advance %, milestones, final payment). On the invoice, state the specific due date and your late payment terms. This creates two independent references rather than relying on either document alone.',
      },
    ],
    relatedSlugs: ['how-to-get-paid-faster-on-invoices', 'how-to-recover-late-payments', 'payment-terms-in-quotations'],
  },
];
