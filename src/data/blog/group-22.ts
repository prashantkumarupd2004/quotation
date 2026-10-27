import type { BlogPost } from '@/data/blog-types';

export const blogPosts22: BlogPost[] = [
  {
    slug: 'gst-on-rent-india-landlord-tenant-guide',
    title: 'GST on Rent in India: A Complete Guide for Landlords and Tenants',
    seoTitle: 'GST on Rent in India (2026): Commercial, Residential, RCM Rules & TDS',
    metaDescription:
      'Renting a shop, office or flat? GST on rent is 18% in most cases, but who pays it depends on the property type and who is registered. The full landlord and tenant guide, with RCM rules and TDS on rent.',
    keywords: [
      'GST on rent',
      'GST on commercial rent',
      'GST on residential rent',
      'reverse charge on rent',
      'RCM on rent',
      'TDS on rent',
      'rent invoice GST',
    ],
    date: '2026-10-27',
    author: 'Prashant Upadhyay',
    readingTime: 10,
    category: 'GST & Tax',
    heroImage: '/blog/gst-on-rent.svg',
    heroAlt: 'A commercial building and a house with a rent invoice showing 18% GST',
    excerpt:
      'Rent is taxed at 18% in most cases, but the person who pays it flips between landlord and tenant depending on the property and registration status. Here is the whole picture, without the confusion.',
    intro:
      'Rent is one of the most misunderstood corners of GST, because the answer to "is GST charged on rent?" is almost always "it depends". It depends on whether the property is commercial or residential, whether the landlord is registered, and whether the tenant is registered. Get one of those three wrong and you either pay tax you do not owe, or quietly build up an unpaid liability that shows up in an audit. This guide walks through every common scenario, the reverse charge trap for flats used as offices, input tax credit, and the TDS that sits on top of it all.',
    sections: [
      {
        heading: 'The starting point: rent is a service, taxed at 18%',
        body: `Under GST, renting immovable property is treated as a supply of services, classified under SAC 9972, and the standard rate is 18%. For an intra-state rental that splits into 9% CGST and 9% SGST; for an inter-state rental it is 18% IGST. The place of supply is where the property is located, not where the tenant is registered, which is the detail that decides which of those two applies.\n\nFor a landlord, renting is a service, so the GST registration threshold is ₹20 lakh of aggregate turnover in a financial year, not the ₹40 lakh threshold that applies to goods. A landlord whose only income is rent below that threshold does not need to register, which is where the reverse charge rules below start to matter.`,
        callout: {
          type: 'tip',
          text: 'Worked example: a monthly commercial rent of ₹50,000 before tax becomes ₹59,000 after 18% GST (₹9,000 of tax). If the tenant is a registered business using the premises for business, that ₹9,000 is usually recoverable as input tax credit, so the real cost to the tenant is still ₹50,000.',
        },
      },
      {
        heading: 'The scenario table: who pays GST on rent',
        body: `Almost every rent situation falls into one of these rows. Find your row first, then read the detail that follows it.`,
        table: {
          headers: ['Scenario', 'GST rate', 'Who pays'],
          rows: [
            ['Commercial property, registered landlord', '18%', 'Landlord (forward charge)'],
            ['Commercial property, unregistered landlord, registered tenant', '18%', 'Tenant (reverse charge, since 10 Oct 2024)'],
            ['Residential dwelling to an individual for personal residence', 'Exempt', 'No GST'],
            ['Residential dwelling to a registered person for business use', '18%', 'Tenant (reverse charge)'],
            ['Residential dwelling rented by a proprietor in personal capacity for own residence', 'Exempt', 'No GST'],
          ],
        },
      },
      {
        heading: 'Reverse charge on rent: the two rules that catch people out',
        body: `Reverse charge (RCM) means the tenant, not the landlord, pays the GST directly to the government. Two notifications created the two traps.\n\nFirst, since 18 July 2022, renting a residential dwelling to a GST-registered person attracts 18% GST under RCM, even if the landlord is an unregistered individual. So if your registered consultancy rents a flat to use as its office, or to house staff, your firm must pay 18% on the rent through its own return, even though the landlord never charged it. The one exception is a proprietor renting a residence in their personal capacity for their own use as a home, which stays exempt.\n\nSecond, since 10 October 2024, renting a commercial property by an unregistered landlord to a registered tenant also falls under RCM. Before that date, many such rents simply went untaxed because the landlord was below the registration threshold and nobody was liable. Now the registered tenant is. If both parties are registered, nothing changes: the landlord charges GST normally under forward charge.`,
        callout: {
          type: 'warning',
          text: 'The residential RCM trap is the expensive one. A firm paying ₹40,000 a month for a flat-as-office owes ₹7,200 a month in RCM GST. Ignore it for a year and the unpaid tax alone is ₹86,400, before interest and penalty. If the premises are genuinely used for business, the same amount is usually claimable as input tax credit, so the net cost is paperwork, not money, but only if it is reported.',
        },
      },
      {
        heading: 'Input tax credit on rent: when the tenant gets it back',
        body: `A registered tenant can claim input tax credit on rent GST when the premises are used for business purposes, which is why commercial rent GST rarely hurts a registered tenant in the end. The credit is blocked where the premises are used for personal purposes, or for exempt supplies, and it is unavailable on rent for a residential dwelling used as a residence, which is consistent with that rent being exempt in the first place.\n\nTwo practical points matter. First, the tenant needs a proper tax invoice from a registered landlord, or, under RCM, must report the liability itself and keep the rent agreement and payment proof as the supporting document. Second, for RCM rent the credit and the liability are usually reported in the same return, so the cash impact is neutral but the reporting still has to happen. Skipping the return entry because "it nets off anyway" is exactly how notices start.`,
        bullets: [
          'Business use of the premises: ITC generally available.',
          'Personal use, or exempt supplies: ITC blocked.',
          'Forward charge rent: invoice from the landlord is the ITC document.',
          'RCM rent: the tenant reports both the liability and the credit.',
        ],
      },
      {
        heading: 'Invoicing rent correctly: what a rent invoice must show',
        body: `A rent invoice from a registered landlord is a tax invoice like any other, and it should carry the landlord and tenant GSTINs, the property address, the period the rent covers, the SAC code 9972, the taxable value, and the CGST/SGST or IGST split. Separating the rent from other charges matters: maintenance, parking and amenities bundled into one figure can create arguments about what is taxable, so itemise them where they are genuinely separate.\n\nOne detail landlords often miss is advance rent. GST on renting is generally payable when the invoice is raised or payment is received, so a landlord who collects six months of rent in advance should invoice and account for the tax on the advance, not wait for the months to pass. The same logic applies to security deposits that are adjusted against rent: once a deposit becomes rent, it becomes taxable. A refundable deposit that is genuinely refunded is not rent and is not taxed.`,
      },
      {
        heading: 'TDS on rent: the second tax sitting on the same payment',
        body: `GST is not the only deduction on rent. Income tax TDS applies separately, and the two are calculated on different bases: TDS is deducted on the rent excluding GST. The rules split into two sections, and the threshold for both is ₹50,000 per month.`,
        table: {
          headers: ['Point', 'Section 194-I (business payers)', 'Section 194-IB (individuals/HUF)'],
          rows: [
            ['Who deducts', 'Companies, firms, LLPs, and individuals/HUFs liable to tax audit', 'Individuals and HUFs not liable to tax audit'],
            ['Threshold', 'Rent above ₹50,000 in a month (from 1 Apr 2025)', 'Rent above ₹50,000 in a month'],
            ['Rate', '10% on land/building, 2% on plant/machinery', '2% (from 1 Oct 2024)'],
            ['Filing', 'Quarterly TDS return, TAN required', 'Once a year, PAN-based, no TAN needed'],
          ],
        },
      },
      {
        heading: 'Landlord and tenant checklist before signing',
        body: `Most rent disputes about tax are really disputes about a rent agreement that never mentioned tax. Before signing, settle these points in writing: whether the quoted rent is exclusive or inclusive of GST, who bears GST if the landlord crosses the registration threshold mid-tenancy, who handles RCM reporting if the landlord is unregistered, and whether TDS will be deducted and by whom. A tenant should also confirm the landlord's GSTIN on the portal before claiming credit on a large rent, and a landlord should keep the agreement, invoices and payment proofs together, since rent is one of the first things a GST officer asks about.\n\nIf you are a small business renting your first office or shop, the simplest safe routine is this: write the rent exclusive of GST in the agreement, raise or receive a proper monthly tax invoice, report RCM in the same month if it applies to you, deduct TDS where the threshold is crossed, and keep everything for at least the period your accountant advises. That routine covers every scenario in the table above.`,
        callout: {
          type: 'note',
          text: 'This guide explains the general position, not advice for your specific tenancy. Rates, notifications and thresholds change, and a single fact, like whether a flat is used as a residence or an office, can flip the answer. Confirm the treatment with your accountant before relying on it for a large rent.',
        },
      },
    ],
    faqs: [
      {
        q: 'Is GST charged on house rent in India?',
        a: 'Renting a residential dwelling to an individual for use as a residence is exempt from GST. But if the tenant is GST-registered and uses the dwelling for business, 18% GST applies under reverse charge, payable by the tenant.',
      },
      {
        q: 'What is the GST rate on commercial rent?',
        a: '18%, split as 9% CGST + 9% SGST for intra-state rentals and 18% IGST for inter-state rentals. A registered landlord charges it; an unregistered landlord renting to a registered tenant triggers reverse charge on the tenant.',
      },
      {
        q: 'Does a landlord need GST registration to rent out a property?',
        a: 'Only if aggregate turnover crosses ₹20 lakh in a financial year, since renting is a service. Below that, a landlord can remain unregistered, but a registered tenant may then owe GST under reverse charge.',
      },
      {
        q: 'Can a tenant claim input tax credit on rent?',
        a: 'Yes, when the premises are used for business and the GST is properly reported, either through the landlord’s tax invoice or through the tenant’s own reverse charge reporting. Credit is blocked for personal use.',
      },
      {
        q: 'Is TDS deducted on rent including GST?',
        a: 'No. TDS on rent is calculated on the rent amount excluding GST. For business payers the rate is 10% for land or building and 2% for machinery; for individuals and HUFs not under audit it is 2%, with a ₹50,000-per-month threshold in both cases.',
      },
    ],
    relatedSlugs: [
      'reverse-charge-mechanism-guide-india',
      'place-of-supply-gst-guide',
      'gst-input-tax-credit-guide',
      'how-to-write-a-professional-quotation',
    ],
    references: [
      { label: 'GST Portal — GST law and rules', url: 'https://www.gst.gov.in' },
      { label: 'CBIC — Central Tax Notifications', url: 'https://www.cbic.gov.in' },
    ],
  },
  {
    slug: 'digital-signature-quotations-invoices-india',
    title: 'Digital Signature on Quotations and Invoices: A Practical Guide for Indian Businesses',
    seoTitle: 'Digital Signature on Quotations & Invoices in India (2026): DSC vs eSign',
    metaDescription:
      'Should your quotations and invoices carry a digital signature? When a DSC is legally required, when a scanned signature is enough, how to get a Class 3 DSC, and how eSign with Aadhaar OTP compares.',
    keywords: [
      'digital signature on invoice',
      'digital signature quotation',
      'DSC for business India',
      'Class 3 DSC',
      'eSign Aadhaar',
      'how to sign PDF digitally',
      'digital signature certificate India',
    ],
    date: '2026-10-27',
    author: 'Prashant Upadhyay',
    readingTime: 9,
    category: 'Business Documents',
    heroImage: '/blog/digital-signature.svg',
    heroAlt: 'A business document being signed digitally with a stylus and a certificate seal',
    excerpt:
      'A scanned signature image and a real digital signature are not the same thing, and only one of them proves who signed and that nothing changed afterwards. Here is when each one is enough, and when it is not.',
    intro:
      'Most small businesses sign documents the same way they always have: print, sign by hand, scan, and send. It works, but it proves very little. A scanned signature can be copied onto any document, and a PDF can be edited after it was signed without leaving a trace. A digital signature certificate (DSC) solves both problems at once: it proves who signed, and it breaks visibly if the document is changed afterwards. This guide explains what a DSC actually is, when Indian law requires one, when a simple signature is fine, and how to get and use one without wasting money on the wrong type.',
    sections: [
      {
        heading: 'Three things people call a "digital signature"',
        body: `The confusion starts with the name, because three very different things all get called a digital signature. A scanned image of your handwritten signature pasted into a PDF is just a picture. It looks official but carries no proof: anyone with the image can reuse it, and the document can be edited after signing.\n\nAn electronic signature, or eSign, is a broader category. The most common form in India is Aadhaar-based eSign, where you authenticate with an OTP and an eSign provider applies a signature on your behalf. It is convenient and legally recognised for many purposes, but you do not hold the certificate yourself.\n\nA digital signature certificate is the strongest form. It is a cryptographic certificate issued to you personally by a licensed Certifying Authority, stored on a USB token or smart card, and protected by a PIN. When you sign with it, the document is sealed: any later change invalidates the signature, and the certificate proves the signer's identity. When someone talks about a DSC, this is what they mean.`,
        table: {
          headers: ['Method', 'Proof of signer', 'Tamper evidence', 'Best for'],
          rows: [
            ['Scanned signature image', 'None', 'None', 'Informal internal papers only'],
            ['Aadhaar eSign (OTP)', 'Aadhaar authentication', 'Yes, via provider', 'Quick agreements and forms'],
            ['DSC on USB token', 'Certificate issued to you', 'Yes, built into the file', 'Filings, contracts, high-value documents'],
          ],
        },
      },
      {
        heading: 'When is a DSC actually required in India?',
        body: `For most day-to-day business documents, a DSC is not legally required. Quotations, estimates, proforma invoices and ordinary tax invoices are commercial documents: your client cares that the document is clear, correct and from you, and a printed signature, stamp or even a well-formed PDF is normally enough. Nothing in the GST invoice rules demands a DSC on a standard tax invoice.\n\nA DSC becomes necessary where a portal or a law demands it. Company filings on the MCA portal, income tax returns of companies and audited cases, and several GST portal actions require a DSC, and many government tenders ask for one during bid submission. E-invoices under the IRP system are a separate case: they are validated by the government portal and carry an IRN and QR code, which is not the same thing as a DSC on the document. If a client or a tender document asks for a "digitally signed" invoice, ask which form they mean, because a DSC-signed PDF and an IRP-validated e-invoice are different things.`,
        callout: {
          type: 'tip',
          text: 'Rule of thumb: if a government portal will reject your submission without it, you need a DSC. If a client is asking, a DSC-signed PDF is usually what they want, and it costs you nothing extra once you already hold a certificate for filings.',
        },
      },
      {
        heading: 'Which DSC to buy: Class 3 is the current standard',
        body: `DSCs used to come in classes, and older guides still mention Class 2. Class 2 certificates are no longer issued for new applicants; Class 3 is the standard for individuals and organisations today, and it is the class MCA, income tax and tender portals expect. Within Class 3 there are two useful variants: a signing-only certificate, which is enough for signing documents and filings, and a signing plus encryption certificate, which also lets you receive encrypted documents. Most small businesses only need signing.\n\nA DSC is issued for a person, not for a company in the abstract, so a proprietor gets one in their own name, and a company authorises a director or employee to hold one for it. The certificate carries the holder's name and, for organisation certificates, the organisation's name. It is typically valid for one to three years depending on what you buy, and renewal before expiry is far easier than applying fresh after it lapses.`,
        bullets: [
          'Class 3 signing: the standard choice for filings and signed PDFs.',
          'Class 3 signing + encryption: add only if you need to receive encrypted files.',
          'Validity: usually 1 to 3 years; renew before expiry.',
          'Holder: a named person, authorised for the organisation where applicable.',
        ],
      },
      {
        heading: 'How to get a DSC, step by step',
        body: `Buy only from a Certifying Authority licensed by the Controller of Certifying Authorities, or its authorised resellers, and be suspicious of anyone selling certificates through unofficial channels. The usual process is short: choose the certificate type and validity, submit identity and address proof along with a photograph, complete a video verification call where you confirm the application, and receive a USB token containing the certificate.\n\nKeep the token and its PIN like you would a bank password. Anyone holding both can sign as you, and unlike a password, a DSC signature is hard to disown afterwards because the certificate itself is the proof. Never share the token or the PIN with an accountant, employee or agent on a permanent basis; if someone must sign on your behalf, give them their own authorised certificate instead. Store a backup of the certificate details, including the expiry date, and set a reminder a month before renewal.`,
        numbered: [
          'Pick a licensed Certifying Authority and a Class 3 signing certificate.',
          'Submit identity proof, address proof and a photograph.',
          'Complete video verification with the authority.',
          'Receive the USB token, set a strong PIN, and test-sign a sample PDF.',
          'Record the expiry date and renew before it lapses.',
        ],
      },
      {
        heading: 'How to digitally sign a PDF, and how to check one',
        body: `Signing a PDF with a DSC is a two-minute job once the token is set up. Open the PDF in a reader that supports certificate signatures, choose the certificate signing option, insert the USB token, enter the PIN, and place the signature where it belongs, usually above the authorised signatory line. Save the file, and send that saved file, not a printout or a screenshot of it.\n\nChecking a signature is just as important, and it is how a client or an auditor verifies your document. Opening a DSC-signed PDF in a standard reader shows whether the signature is valid, who signed it, and whether the document has changed since signing. If the file was edited after signing, the reader flags the signature as invalid, which is exactly the protection a scanned image cannot give. If a client says your signature shows as untrusted, it usually means their reader does not recognise the issuing authority's chain, and updating the reader or adding the authority's root certificate fixes it.`,
      },
      {
        heading: 'Mistakes that undo the whole point of a DSC',
        body: `The most common mistake is treating the token casually: leaving it plugged in, sharing the PIN, or letting one certificate circulate among several staff members. The second is signing blank or incomplete documents, for example a quotation with the amount filled in later, because the signature then vouches for whatever is added afterwards. The third is letting the certificate expire mid-tender or mid-filing season, when renewal under time pressure is at its most painful.\n\nThere is also a quieter mistake: assuming a DSC makes a bad document good. A digitally signed quotation with the wrong GST rate, a missing validity period or vague line items is still a bad quotation; it is just a bad quotation with strong proof of who sent it. Get the document right first, then sign it. Tools that generate clean, GST-ready documents with a signature and stamp upload cover the first half, and a DSC covers the second.`,
        callout: {
          type: 'warning',
          text: 'Never sign a document you have not read in full, and never let anyone else sign with your token. A DSC signature is legally attributed to the certificate holder, so "my accountant had my token" is not a defence you want to rely on.',
        },
      },
    ],
    faqs: [
      {
        q: 'Is a digital signature mandatory on invoices in India?',
        a: 'No. A standard tax invoice does not require a DSC under the GST rules. A DSC is required for specific portal filings, such as MCA and certain income tax and tender submissions, and is a good practice for high-value documents.',
      },
      {
        q: 'What is the difference between a DSC and a scanned signature?',
        a: 'A scanned signature is only an image and proves nothing. A DSC is a cryptographic certificate issued to a named person that proves who signed and invalidates the signature if the document is changed afterwards.',
      },
      {
        q: 'Which class of DSC should a small business buy?',
        a: 'Class 3 signing is the current standard and is accepted by MCA, income tax and tender portals. Class 2 certificates are no longer issued to new applicants.',
      },
      {
        q: 'How long is a DSC valid?',
        a: 'Typically one to three years, depending on the certificate purchased. Renew before expiry, since a lapsed certificate cannot sign until it is renewed or reissued.',
      },
      {
        q: 'Is Aadhaar eSign the same as a DSC?',
        a: 'No. Aadhaar eSign authenticates you with an OTP and a provider signs on your behalf, which is convenient for many agreements. A DSC is a certificate you hold yourself on a USB token and is required where portals specifically demand a DSC.',
      },
    ],
    relatedSlugs: [
      'how-to-write-a-professional-quotation',
      'how-to-write-professional-invoice-india',
      'gst-invoice-rules-guide',
      'how-to-write-a-service-agreement',
    ],
    references: [
      { label: 'Controller of Certifying Authorities (CCA)', url: 'https://cca.gov.in' },
      { label: 'GST Portal — GST law and rules', url: 'https://www.gst.gov.in' },
    ],
  },
];
