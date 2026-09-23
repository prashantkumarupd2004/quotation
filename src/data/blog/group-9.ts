import type { BlogPost } from '@/data/blog-types';

/**
 * Group 9 — GST compliance and fundamental business document literacy.
 * Three articles on topics every Indian small business owner searches for:
 * HSN codes, GST registration, and the invoice-vs-bill confusion.
 */
export const blogPosts9: BlogPost[] = [
  {
    slug: 'hsn-code-guide-for-small-business',
    title: 'HSN Codes Explained: What They Are, How to Find Yours, and Why They Matter on Every Invoice',
    seoTitle: 'HSN Code Guide India 2026 | What Is HSN Code, How to Find It & GST Rate',
    metaDescription:
      'What is an HSN code, why does it appear on your GST invoice, how do you find the right one for your product or service, and what happens if you use the wrong one? A practical guide for Indian small businesses.',
    keywords: [
      'hsn code',
      'hsn code list',
      'hsn code for gst',
      'hsn code meaning',
      'how to find hsn code',
      'hsn code for services',
      'sac code list',
      'hsn code search India',
      'hsn code for small business',
      'gst hsn code finder',
    ],
    date: '2026-09-20',
    author: 'Prashant Upadhyay',
    readingTime: 9,
    category: 'GST & Tax',
    heroImage: '/blog/hsn-code-guide.jpg',
    heroAlt: 'HSN code lookup table showing product codes and GST rates for different categories',
    excerpt:
      'Every line on your GST invoice needs an HSN or SAC code. Here is what those codes actually mean, how to find the right one, and why using the wrong one can cost you later.',
    intro:
      'The first time a client asks you what is the HSN code for this item, it can feel like a trick question. Most small business owners know they need to put a code on their invoice, but have no idea where it comes from, what it actually means, or what happens if it is wrong. This guide answers all of that in plain language.',
    sections: [
      {
        heading: 'What HSN actually stands for and why it exists',
        body: 'HSN stands for Harmonised System of Nomenclature. It is an international classification system created by the World Customs Organisation that assigns a numeric code to every type of goods that can be traded. The system is used by over 200 countries, which means that whether your product is being shipped from India to Germany or sold within your own city, it gets the same basic code.\n\nIndia adopted HSN under GST to bring uniformity to how goods are described on tax documents. Before GST, every state had its own product codes under VAT, which made interstate business complicated. HSN fixes that with one code, universally understood.\n\nFor services, the equivalent is called SAC — Service Accounting Code. The logic is exactly the same: a numeric code that tells the government and your buyer precisely what category of service you are providing.',
      },
      {
        heading: 'How many digits do you actually need?',
        body: 'HSN codes can be 2, 4, 6, or 8 digits long, and the rule for how many you need is tied directly to your annual turnover.\n\nIf your annual aggregate turnover is up to Rs 5 crore, you need to mention a 4-digit HSN code on your B2B invoices. For turnover above Rs 5 crore, a 6-digit code is required. Exporters and importers must always use the full 8-digit code, because customs classification requires it.\n\nFor B2C invoices — sales to regular consumers who are not GST registered — businesses with turnover up to Rs 5 crore do not need to mention HSN codes at all. But including them anyway is good practice for professional invoices.',
        bullets: [
          'Turnover up to Rs 5 crore — 4-digit HSN code on B2B invoices',
          'Turnover above Rs 5 crore — 6-digit HSN code on all invoices',
          'Exporters and importers — always 8-digit HSN',
          'B2C invoices under Rs 5 crore — optional but recommended',
        ],
      },
      {
        heading: 'The easiest way to find your HSN code',
        body: 'The official source is the CBIC GST Rate Finder, available at the GST portal (gst.gov.in). You can search by the name of your product or service in plain English and the tool returns the relevant codes and GST rates attached to them.\n\nA second approach is to look at invoices from your suppliers. If you are buying goods to resell, your supplier GST invoice already shows the HSN code for that item — their code is almost certainly your starting point.\n\nFor services, the CBIC has published a complete SAC code list. Services are broadly grouped into IT services, professional services, construction, transport, hospitality, and so on. If your service sits squarely in one category, it is usually straightforward to identify your code. Where your work spans multiple categories, the practical answer is to pick the code that most accurately describes the primary nature of what you supply and confirm it with your CA.',
      },
      {
        heading: 'What a wrong HSN code actually does to you',
        body: 'A wrong HSN code is not a minor formatting issue. It has real consequences during GST reconciliation and audit.\n\nThe most common problem is a rate mismatch. If you put an HSN code that carries 5% GST but you actually charged 18%, the discrepancy shows up in your GSTR-1 and your buyer GSTR-2A will not match. At best this leads to queries from the GST department. At worst, your buyer input tax credit claim gets rejected.\n\nThe second risk is a classification dispute during audit. If a tax officer determines that your code was wrong, you can be liable for the differential tax plus interest and penalty. The practical protection is simple: cross-check your code on the CBIC rate finder before you use it the first time.',
      },
      {
        heading: 'Common HSN and SAC codes you will encounter',
        body: 'Here are codes that come up most often for Indian small businesses. These are examples to guide you — confirm the specific code for your goods or service before using it on a tax invoice.',
        bullets: [
          '8471 — Computers, laptops and tablets (18% GST)',
          '6110 — T-shirts, sweatshirts and knitwear (5% or 12%)',
          '9983 — IT and software services, business consulting (18% GST)',
          '9954 — Construction and civil work services (12% or 18%)',
          '9965 — Goods transport by road (5% GST without ITC)',
          '9992 — Education services (mostly exempt)',
          '0713 — Dried legumes and pulses (nil or 5%)',
        ],
      },
      {
        heading: 'What to do when you cannot figure out your code',
        body: 'Some businesses sit in genuinely ambiguous territory. When your work does not fit neatly into one category, here is the practical path forward.\n\nFirst, read the chapter notes in the CBIC tariff schedule. Every HSN chapter begins with notes that define what is and is not included, and often the boundary case you are worried about is explicitly addressed.\n\nSecond, apply for an advance ruling. Under GST, any registered person can apply to the Authority for Advance Ruling in their state to get an official determination of the HSN code and rate for their specific product or service. It costs a small filing fee and takes a few months, but the ruling is legally binding.\n\nThird, ask your chartered accountant. Classification disputes are a core part of their practice and the cost of getting it wrong over several years of filing is almost always larger than the cost of a one-time professional opinion.',
      },
    ],
    faqs: [
      {
        q: 'Is the HSN code the same as the SAC code?',
        a: 'No. HSN codes are used for goods. SAC codes are used for services. Both appear on GST invoices but come from different code sets. If you sell both goods and services, you will have both types on your invoices.',
      },
      {
        q: 'Can I use a 2-digit HSN code on my invoice?',
        a: '2-digit HSN codes exist in the system for summary reporting but are not accepted on tax invoices under GST. The minimum you should put on a B2B invoice is 4 digits. If your turnover is above Rs 5 crore, you need 6 digits.',
      },
      {
        q: 'What if I put the wrong HSN code by mistake?',
        a: 'If you catch it before your GSTR-1 is filed, correct it before filing. If the return is already filed, amend it in the following month return. If an audit surfaces it later and the error caused a rate mismatch, you may owe the differential tax, interest and a possible penalty.',
      },
      {
        q: 'Do I need an HSN code if I am not GST registered?',
        a: 'No. If your turnover is below the GST registration threshold and you are not registered, you do not charge GST and you do not need HSN codes. HSN codes are a GST compliance requirement only for registered suppliers.',
      },
      {
        q: 'Where can I search for my HSN code officially?',
        a: 'The CBIC GST rate search tool at gst.gov.in is the authoritative source. You can search by product or service name and the tool returns the relevant code and applicable GST rate. Always use this over unofficial lists, which may be outdated.',
      },
    ],
    relatedSlugs: [
      'gst-invoice-rules-guide',
      'gst-in-quotations',
      'how-to-write-a-professional-quotation',
    ],
    references: [
      { label: 'GST Portal — HSN/SAC Code Search', url: 'https://services.gst.gov.in/services/searchhsnsac' },
      { label: 'CBIC GST Rate Schedule', url: 'https://www.cbic.gov.in/htdocs-cbec/gst/gst-goods-services-rate.pdf' },
    ],
  },

  {
    slug: 'gst-registration-guide-for-small-business',
    title: 'GST Registration for Small Businesses: Who Needs It, How to Apply, and What Happens After',
    seoTitle: 'GST Registration Guide India 2026 | Eligibility, Documents, Process & After Registration',
    metaDescription:
      'Who needs to register for GST in India, what the current turnover thresholds are, how the online registration process actually works, and what your responsibilities are once you have a GSTIN.',
    keywords: [
      'gst registration',
      'how to register for gst in india',
      'gst registration threshold',
      'gst registration documents required',
      'gst number registration online',
      'mandatory gst registration',
      'voluntary gst registration',
      'gstin number',
      'small business gst registration india',
    ],
    date: '2026-09-22',
    author: 'Prashant Upadhyay',
    readingTime: 10,
    category: 'GST & Tax',
    heroImage: '/blog/gst-registration-guide.jpg',
    heroAlt: 'GST registration certificate with GSTIN number and approval checkmark for Indian businesses',
    excerpt:
      'If your business crosses the turnover threshold or if you supply outside your state, you need a GSTIN. Here is how registration actually works, step by step.',
    intro:
      'GST registration is one of those things that sounds more complicated than it is. The confusion usually comes from mixing up three separate questions: do I need to register, what do I actually submit, and what changes once I have a GSTIN. This guide answers all three clearly, in the order you will encounter them as a freelancer, contractor, retailer or service provider.',
    sections: [
      {
        heading: 'Do you actually need to register? The thresholds explained',
        body: 'GST registration is mandatory if your aggregate annual turnover crosses the threshold set by the government. The thresholds differ for goods and services, and also vary by state.\n\nFor most states, the current thresholds are: Rs 40 lakh for businesses dealing exclusively in goods, and Rs 20 lakh for service providers and mixed businesses. For the special category states including Manipur, Mizoram, Nagaland, Tripura, Meghalaya, Sikkim, Uttarakhand, Arunachal Pradesh, Himachal Pradesh, and Jammu and Kashmir, the threshold is Rs 10 lakh.\n\nAggregate turnover means the combined value of all taxable supplies, exempt supplies, exports, and inter-state supplies made by you under the same PAN across all your business verticals. If you cross the threshold even briefly in a financial year, registration becomes mandatory and you must apply within 30 days of the date you crossed it.',
        bullets: [
          'Rs 40 lakh — for businesses supplying goods only, most states',
          'Rs 20 lakh — for service providers and mixed businesses, most states',
          'Rs 10 lakh — for businesses in special category states',
          '30 days — the window to apply after crossing the threshold',
        ],
      },
      {
        heading: 'When registration is mandatory regardless of turnover',
        body: 'There are several situations where you must register even if your turnover is below the threshold. These catch a lot of small businesses off guard.\n\nIf you make inter-state supplies — selling goods or services to customers in a different state — you must register regardless of how small your turnover is. A freelancer in Bangalore doing a Rs 5 lakh project for a Delhi client is making an inter-state supply and must be registered.\n\nIf you sell through an e-commerce platform like Amazon, Flipkart, or Meesho, you must register regardless of turnover, because the platform collects TCS on your behalf.\n\nCasual taxable persons who supply goods or services occasionally without a fixed place of business in the supply state must register before each inter-state supply. If you are a photographer or event professional working across states, this applies to you.',
      },
      {
        heading: 'Why you might want to register voluntarily even if you do not have to',
        body: 'Voluntary registration makes sense in a few specific situations.\n\nIf most of your clients are large companies or government entities, they prefer working with registered suppliers because they can claim input tax credit on your invoices. An unregistered supplier costs a B2B client 18% more in effective terms, which puts you at a pricing disadvantage against registered competitors.\n\nIf you export goods or services, voluntary registration lets you claim a refund of input taxes on your costs. Exports are zero-rated under GST — you pay no GST on the export itself but you can recover the GST you paid on your inputs.\n\nIf you are a startup expecting to cross the threshold in the next year anyway, registering early means your compliance systems are set up before the legal obligation kicks in rather than in a scramble afterwards.',
      },
      {
        heading: 'Documents you need to apply',
        body: 'The application is filed online at gst.gov.in and the process is straightforward if you have everything ready. For a sole proprietor or freelancer the list is:\n\nPAN card of the business owner — mandatory, and if your PAN does not exist the application cannot proceed.\n\nAadhaar card for identity verification. The portal will send an OTP to your Aadhaar-linked mobile number.\n\nProof of principal place of business — a utility bill, rent agreement, or property tax receipt for your business address. If you work from home, your home address works fine.\n\nBank account details — a cancelled cheque, bank statement, or passbook showing your account number and IFSC.\n\nA passport-size photograph of the proprietor.',
        bullets: [
          'PAN card of the proprietor or business',
          'Aadhaar card for OTP-based identity verification',
          'Proof of place of business: rent agreement, utility bill or property document',
          'Bank account details: cancelled cheque or bank statement',
          'Passport-size photograph of the applicant',
        ],
      },
      {
        heading: 'How the application process works',
        body: 'Go to gst.gov.in and click New Registration under the Services menu. Enter your PAN and mobile number — an OTP will verify your identity and generate a Temporary Reference Number.\n\nLog in using the TRN, complete the full application form, and upload the required documents. The form asks for your business details, the nature of your supplies, your bank account, and details of partners or directors if applicable.\n\nIn most cases, if the Aadhaar-linked mobile number is verified, the GSTIN is issued within 3 to 7 working days without further queries. If the officer has questions, they issue a notice and you have 7 working days to respond.\n\nYou will receive your GSTIN — a 15-character alphanumeric number — and can download the Registration Certificate from the portal.',
      },
      {
        heading: 'What changes once you have a GSTIN',
        body: 'Registration comes with ongoing compliance obligations worth understanding before you sign up.\n\nYou must issue GST-compliant tax invoices for every taxable supply. These must carry your GSTIN, the buyer details, the HSN or SAC code for each item, taxable value, and GST amount broken down by CGST and SGST or IGST.\n\nYou must file GST returns on a regular schedule. Under the regular scheme this means GSTR-1 and GSTR-3B monthly or quarterly depending on your turnover. Late filing attracts daily late fees plus interest on unpaid tax.\n\nYou must maintain proper records — purchase invoices, sales invoices, supporting documents — for at least six years.',
      },
    ],
    faqs: [
      {
        q: 'How long does GST registration take?',
        a: 'If your Aadhaar is verified and the application is complete, most registrations are approved within 3 to 7 working days. If the officer raises queries, the process can take up to a few weeks depending on how quickly you respond.',
      },
      {
        q: 'Can I use my home address as my place of business?',
        a: 'Yes. If you work from home, your home address is a valid principal place of business for GST. You will need to provide a utility bill, rent agreement, or Aadhaar with that address as proof.',
      },
      {
        q: 'Is there a fee to register for GST?',
        a: 'No. GST registration itself is completely free of charge on the government portal. If you use a CA or accountant to handle the application, their professional fee applies separately.',
      },
      {
        q: 'What is the difference between regular and composition registration?',
        a: 'Regular registration requires you to charge GST at standard rates, collect it from customers, and file regular returns. Composition registration is a simplified scheme for small businesses that lets you pay a flat rate on turnover without collecting GST from customers — but you cannot issue a tax invoice and your customers cannot claim input credit.',
      },
      {
        q: 'What happens if I do not register when I should have?',
        a: 'Not registering when mandatory is treated as tax evasion. The penalty is 100% of the tax evaded, with a minimum of Rs 10,000. The unpaid tax also attracts interest at 18% per annum from the date it was due.',
      },
    ],
    relatedSlugs: [
      'gst-in-quotations',
      'gst-invoice-rules-guide',
      'hsn-code-guide-for-small-business',
    ],
    references: [
      { label: 'GST Registration — Official GST Portal', url: 'https://www.gst.gov.in' },
      { label: 'CBIC — GST Registration Provisions', url: 'https://www.cbic.gov.in/resources//htdocs-cbec/gst/Circular-GST-3-2017.pdf' },
    ],
  },

  {
    slug: 'invoice-vs-bill-difference',
    title: 'Invoice vs Bill: What Is the Actual Difference, and Does It Matter for Your Business?',
    seoTitle: 'Invoice vs Bill Difference India 2026 | What Is an Invoice vs a Bill Explained',
    metaDescription:
      'Invoice and bill are often used for the same document, but they mean different things in accounting and GST. Here is when to use which term, what each must contain, and why the distinction matters for Indian businesses.',
    keywords: [
      'invoice vs bill',
      'difference between invoice and bill',
      'what is an invoice',
      'what is a bill',
      'bill vs invoice India',
      'invoice meaning',
      'tax invoice vs bill',
      'bill of supply vs invoice',
      'invoice or bill which to issue',
    ],
    date: '2026-09-23',
    author: 'Prashant Upadhyay',
    readingTime: 7,
    category: 'Invoicing',
    heroImage: '/blog/invoice-vs-bill.jpg',
    heroAlt: 'Side by side comparison of a formal tax invoice versus a simple retail bill for Indian businesses',
    excerpt:
      'In everyday language people use invoice and bill interchangeably. In accounting and GST law they are different documents that serve different purposes.',
    intro:
      'Ask most people what the difference between an invoice and a bill is, and they will say there is none. In everyday conversation that is close enough to true. But if you run a GST-registered business in India, the distinction matters more than it looks. Using the wrong document can create compliance problems that seem minor until an auditor notices them. Here is the full picture, explained simply.',
    sections: [
      {
        heading: 'The everyday meaning versus the accounting meaning',
        body: 'In common usage, people say send me the bill when they mean send me the document telling me what I owe. And a seller might say here is my invoice for the exact same thing. The words have become interchangeable in speech.\n\nIn accounting, though, the same transaction is described from two perspectives. The invoice is the document the seller creates and sends — their record of what they supplied and what is owed to them. The bill is what the buyer sees when they receive that document — an obligation in their books, a payable to be settled.\n\nSo technically, the same physical document is an invoice to the sender and a bill to the recipient. Same paper, two names, two different entries in two different sets of accounts. This is why your client saying I have not paid your bill yet and you saying that invoice is overdue are both describing the same unpaid document.',
      },
      {
        heading: 'Under GST the terminology is specific and it matters',
        body: 'GST law uses precise terms, and using the wrong one can cause problems during scrutiny.\n\nA Tax Invoice is the document a GST-registered supplier must issue for taxable supplies of goods or services. It is the document that entitles the buyer to claim input tax credit. It must carry your GSTIN, the buyer GSTIN, HSN or SAC codes, taxable value, and the GST amount split as CGST and SGST or IGST. The word Tax Invoice or just Invoice should appear on it.\n\nA Bill of Supply is what you issue when you are GST-registered but the supply is either exempt from GST or you are a composition dealer. It does not show a GST amount, and the buyer cannot claim any input credit from it. The document title must be Bill of Supply, not Invoice.',
      },
      {
        heading: 'What about retail bills from shops and restaurants?',
        body: 'When you go to a shop or restaurant and they hand you a small printed receipt, they call it a bill — and for most consumer transactions that is fine. These are B2C transactions where the buyer is not claiming input tax credit.\n\nFor GST purposes, a registered business making retail sales above Rs 200 to unregistered buyers should issue an invoice. For registered buyers above Rs 50,000 — or any amount if asked — you must issue a proper tax invoice with all required fields.\n\nIn practice, tax officers focus on B2B transactions where input credit is involved. A restaurant calling their receipt a bill instead of an invoice is not a priority enforcement issue. But for businesses doing significant B2B work, using precise terminology signals compliance maturity and reduces audit friction.',
      },
      {
        heading: 'The practical difference for small business owners',
        body: 'If you are a freelancer, contractor, consultant, or small manufacturer, here is what actually matters day to day.\n\nIf you are GST registered and your supply is taxable, use a tax invoice with the word Invoice on it. Include your GSTIN, the buyer GSTIN, HSN and SAC codes, and the GST split. This is what your B2B customers need to claim input credit.\n\nIf you are GST registered but the supply is exempt — say you provide an educational service — issue a Bill of Supply. Do not call it an Invoice, because you cannot charge GST on it.\n\nIf you are not GST registered at all, your document is simply an invoice or bill in the plain English sense. You cannot call it a Tax Invoice because you are not registered to charge tax. State clearly that GST is not applicable.',
        bullets: [
          'GST registered, taxable supply — issue Tax Invoice with GSTIN, HSN or SAC, and GST split',
          'GST registered, exempt supply or composition dealer — issue Bill of Supply',
          'Not GST registered — plain invoice or bill, state GST not applicable',
          'B2B customer claiming input credit — they specifically need your Tax Invoice',
        ],
      },
      {
        heading: 'One more term worth knowing: Retail Invoice',
        body: 'A retail invoice is simply an invoice issued to an end consumer — the kind you get at a hotel checkout or electronics shop. It differs from a B2B tax invoice primarily in that it does not need the buyer GSTIN, since the consumer is not a registered business, and the format can be simpler.\n\nHowever, if a registered buyer asks for a proper tax invoice even at a retail outlet — say they bought office equipment worth Rs 40,000 for their business — the supplier is obligated to issue one. Issuing the wrong document type and having to reissue it later is an avoidable hassle for both sides.\n\nThe takeaway is simple: for any significant B2B transaction, always ask upfront whether your buyer is GST registered and needs a tax invoice. That one question prevents most document-type mistakes.',
      },
    ],
    faqs: [
      {
        q: 'Can I call my document a bill instead of an invoice?',
        a: 'For B2C consumer transactions this is generally fine in practice. For B2B transactions where your buyer needs to claim input tax credit, the document must be called a Tax Invoice and must contain all the prescribed fields. The terminology matters because it signals what type of document the recipient should book in their accounts.',
      },
      {
        q: 'What is a proforma invoice — is that different from both?',
        a: 'Yes. A proforma invoice is a preliminary document issued before a supply happens. It looks like an invoice but creates no tax liability and does not entitle the buyer to input credit. It is used to release advance payments or obtain import approvals. The words Proforma Invoice must appear on it, clearly distinguishing it from a tax invoice.',
      },
      {
        q: 'Does using bill vs invoice affect my GST returns?',
        a: 'The label on the document does not directly affect your GSTR filing, which is based on transaction data. But if a tax officer reviews your documents and sees inconsistent or incorrect labelling, it can attract questions. Using the correct terminology keeps your records clean and audit-ready.',
      },
      {
        q: 'My client says they need an invoice number for their records. Does that mean they need a tax invoice?',
        a: 'Not necessarily — they may just need a serial reference number for internal purchase tracking. But if they are a GST-registered business buying for business use, they almost certainly need a proper tax invoice to claim input credit. Ask explicitly: are you registered for GST and do you need a tax invoice?',
      },
      {
        q: 'Can I issue a credit note against a bill of supply?',
        a: 'You can issue a credit note against a bill of supply, but it works differently. Since no GST was charged on the original bill of supply, there is no tax reversal on the credit note either. The credit note simply reduces the value outstanding.',
      },
    ],
    relatedSlugs: [
      'invoice-vs-quotation',
      'gst-invoice-rules-guide',
      'bill-of-supply-vs-tax-invoice',
    ],
    references: [
      { label: 'CGST Act Section 31 — Tax Invoice', url: 'https://www.cbic.gov.in/resources//htdocs-cbec/gst/cgst-act.pdf' },
      { label: 'CBIC CGST Rules Rule 46 — Particulars of Tax Invoice', url: 'https://www.cbic.gov.in/resources//htdocs-cbec/gst/cgst-rules.pdf' },
    ],
  },
];
