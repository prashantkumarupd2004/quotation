import type { BlogPost } from '@/data/blog-types';

export const blogPosts1: BlogPost[] = [
  {
    slug: 'how-to-write-a-professional-quotation',
    title: 'How to Write a Professional Quotation (Step-by-Step Guide)',
    seoTitle: 'How to Write a Professional Quotation in India (2026 Guide)',
    metaDescription:
      'Learn how to write a professional quotation with the right structure, GST details, terms and validity period, with a real example any Indian business can copy.',
    keywords: [
      'how to write a quotation',
      'professional quotation format',
      'quotation letter sample',
      'business quotation India',
      'quotation template',
    ],
    date: '2026-07-06',
    readingTime: 8,
    category: 'Quotation Basics',
    excerpt:
      'A practical, step-by-step guide to writing a quotation that looks professional, wins trust and gets approved faster.',
    intro:
      'Winning a customer often comes down to who sends the clearer, more professional quotation first. A quotation is usually the first formal document a prospect sees from your business, so its structure, tone and accuracy matter as much as your price. Here is exactly how to write one that gets approved without back-and-forth.',
    sections: [
      {
        heading: 'What a quotation actually needs to do',
        body: `A quotation is not just a price list. It is a commercial offer that tells the customer exactly what they will get, for how much, by when, and under what conditions, so that if they say "yes," you can convert it into an order or invoice without any confusion.\n\nMost quotations that get rejected or delayed fail not because the price was too high, but because something was unclear: was GST included, was delivery covered, was the price valid for how long. Fixing these gaps is 80% of what makes a quotation "professional."`,
      },
      {
        heading: 'Step 1: Start with complete business identification',
        body: `At the top of every quotation, include your business name, logo if you have one, GSTIN, address, phone number and email. On the customer side, add their full name or company name, billing address, and GSTIN if they are a registered business (this matters for input tax credit on their end).\n\nAlso include a unique quotation number (e.g., QUO-2026-045) and the date of issue. This numbering helps you track quotations in sequence and reference them later in invoices or follow-up emails.`,
        bullets: [
          'Your business name, GSTIN, address, contact details',
          'Customer name, address, and GSTIN (if B2B)',
          'Unique quotation number and issue date',
          'Validity period (e.g., "Valid for 15 days from issue date")',
        ],
      },
      {
        heading: 'Step 2: List items or services with complete detail',
        body: `Each line item should have a clear description, HSN code (for goods) or SAC code (for services), quantity, unit, rate per unit, and line total. Vague descriptions like "as discussed" or "misc work" are the biggest reason clients ask for revisions.\n\nFor services, break down the scope so the client knows what is and is not included. For example, instead of "website design - Rs 25,000," write "Website design (5 pages, responsive, 2 rounds of revisions) - Rs 25,000" and separately list "Hosting setup - Rs 2,000" if that is extra.`,
      },
      {
        heading: 'Step 3: Show tax calculation transparently',
        body: `Show the subtotal, then GST calculated correctly based on whether the transaction is intra-state (CGST + SGST) or inter-state (IGST). Never bury tax inside a single lump-sum figure — separate line items build trust and prevent disputes when the actual invoice is raised later.\n\nIf you are not GST registered (turnover below the threshold), state clearly "GST not applicable" instead of leaving it blank, so the customer does not assume you forgot it.`,
      },
      {
        heading: 'Step 4: Add payment terms and validity clearly',
        body: `Specify your payment terms: full advance, 50% advance and 50% on delivery, or net 15/30 days after invoice. Also state accepted payment modes (UPI, bank transfer, cheque) and bank details if advance payment is expected.\n\nAlways add a validity date. Prices for materials and services change, and an undated quotation can be used against you months later at outdated rates. "This quotation is valid for 15 days from the date of issue" is a simple, standard line that protects you.`,
        bullets: [
          'Payment schedule (advance / milestone / on delivery)',
          'Accepted payment modes and bank details',
          'Validity period with an explicit end date',
          'Delivery or project timeline',
        ],
      },
      {
        heading: 'Step 5: Include terms and conditions',
        body: `A short terms section prevents 90% of future disputes. Cover warranty or support period, what happens if scope changes mid-project, cancellation policy, and who bears transport or installation charges.\n\nKeep it to 4-6 bullet points in plain language rather than dense legal text — clients are more likely to actually read and respect short, clear terms.`,
      },
      {
        heading: 'Step 6: Close with a clear call to action',
        body: `End with your signature block, business stamp if applicable, and a direct instruction such as "To confirm this order, please reply to this email or make the advance payment to the account above." This small nudge speeds up approval significantly compared to just leaving the quotation open-ended.\n\nTools like QuotationMaker.in let you generate this entire structure automatically with GST calculation built in, so you do not have to rebuild the format from scratch every time.`,
      },
    ],
    faqs: [
      {
        q: 'How long should a quotation stay valid?',
        a: 'Most Indian businesses use 15-30 days for services and 7-15 days for goods with volatile pricing like construction materials or electronics. Always state the exact validity period on the document.',
      },
      {
        q: 'Is a quotation legally binding in India?',
        a: 'A quotation itself is an offer, not a binding contract, until the customer accepts it (verbally, in writing, or via advance payment). Once accepted, it can be treated as the basis of a contract, so accuracy matters.',
      },
      {
        q: 'Should I mention GST if I am not registered?',
        a: 'Yes. State clearly that GST is not applicable rather than leaving tax fields blank, so the customer understands the final price is complete and not missing a tax component.',
      },
      {
        q: 'What is the difference between a quotation and a proforma invoice?',
        a: 'A quotation is a price offer before any commitment. A proforma invoice is issued after the customer agrees, often used to request advance payment or for import/export and customs purposes, and looks more like a near-final invoice.',
      },
      {
        q: 'Can I convert a quotation directly into an invoice?',
        a: 'Yes, most quotation tools including QuotationMaker.in let you convert an accepted quotation into an invoice in one click, carrying over line items, GST and customer details automatically.',
      },
    ],
    relatedSlugs: ['quotation-format-in-india', 'quotation-vs-estimate', 'gst-in-quotations'],
  },

  {
    slug: 'quotation-vs-estimate',
    title: 'Quotation vs Estimate: What is the Difference?',
    seoTitle: 'Quotation vs Estimate: Key Differences Every Business Should Know',
    metaDescription:
      'Understand the real difference between a quotation and an estimate, when to use each, and how Indian businesses should price them to avoid client disputes.',
    keywords: [
      'quotation vs estimate',
      'difference between quotation and estimate',
      'estimate vs quote India',
      'price estimate business',
    ],
    date: '2026-07-06',
    readingTime: 7,
    category: 'Quotation Basics',
    excerpt:
      'Quotations and estimates look similar but carry very different commitments — here is how to tell them apart and use each correctly.',
    intro:
      'Business owners often use "quotation" and "estimate" interchangeably, but they mean different things to clients and carry different legal weight. Choosing the wrong one can lead to disputes over final pricing. Here is a clear breakdown of when to send which.',
    sections: [
      {
        heading: 'The core difference in one line',
        body: `A quotation is a fixed, firm price for a clearly defined scope of work, while an estimate is an approximate cost based on the information available at the time, which can change once actual work begins.\n\nThink of a quotation as a promise and an estimate as an educated guess. If you quote Rs 50,000 for a job, you are expected to deliver at that price unless the client changes the scope. If you estimate Rs 50,000, both sides understand the final bill could vary, usually within a stated range like plus or minus 10-15%.`,
      },
      {
        heading: 'When to use a quotation',
        body: `Use a quotation when the scope of work is fully known and measurable in advance — for example, supplying 500 units of a product, printing 1,000 brochures, or building a website with a fixed feature list. Because the inputs are predictable, you can commit to an exact price.\n\nQuotations are also expected in formal B2B procurement, government tenders, and any situation where the buyer needs a firm number to get internal approval or compare vendors on price.`,
        bullets: [
          'Scope, quantity and specifications are fully defined',
          'Materials and labor costs are known and stable',
          'Client needs a fixed number for budget approval or comparison',
          'Formal procurement, tenders, or B2B purchase orders',
        ],
      },
      {
        heading: 'When to use an estimate',
        body: `Use an estimate when the final scope depends on conditions you cannot fully assess until work starts — common in construction, renovation, repair work, and custom fabrication. For instance, a contractor cannot know the exact quantity of cement or labor hours needed until they inspect site conditions, so they give a range.\n\nEstimates are also useful for early-stage client conversations where you want to give a ballpark figure without committing, before doing a detailed site visit or requirement-gathering session that will lead to a formal quotation later.`,
      },
      {
        heading: 'How construction and interior businesses should handle this',
        body: `In India, contractors commonly issue a rough estimate after a site visit, then a detailed quotation once material specifications, brands, and quantities are finalized. This two-step process protects both sides: the client gets an early number to plan budget, and the contractor is not locked into a price before knowing ground realities like wall condition, wiring, or plumbing complexity.\n\nAlways label documents clearly. Writing "Estimate — subject to site inspection" versus "Quotation — valid for 30 days" removes ambiguity about which number the client can hold you to.`,
      },
      {
        heading: 'Legal and financial implications',
        body: `Since a quotation is closer to a firm offer, once a customer accepts it, you are generally expected to honor that price even if your costs rise slightly, unless your terms explicitly allow price revision. An estimate gives you more flexibility to adjust the final bill, but you should still communicate variations before they happen, not after the invoice is raised.\n\nFor GST purposes, both documents are pre-sale and not tax invoices, so no GST liability arises simply from issuing either one. Tax liability starts only when you raise a tax invoice or proforma invoice tied to actual supply.`,
      },
      {
        heading: 'A simple rule to decide which to send',
        body: `If you can list every material, quantity and cost with confidence today, send a quotation. If there are unknowns that only a site visit, technical assessment, or further discussion can resolve, send an estimate first and follow up with a firm quotation once those unknowns are cleared.\n\nMany businesses lose client trust by calling a rough number a "quotation" and then revising it upward later — using the right label from the start avoids that friction entirely.`,
      },
    ],
    faqs: [
      {
        q: 'Can an estimate become a quotation later?',
        a: 'Yes, this is the standard workflow in construction and repair services. An initial estimate after a site visit is refined into a final, fixed quotation once exact specifications and quantities are confirmed.',
      },
      {
        q: 'Is an estimate legally binding?',
        a: 'No, an estimate is an approximate figure and not a firm commitment, so the final invoiced amount can differ, ideally within a range you communicated upfront to the client.',
      },
      {
        q: 'Which one should freelancers use?',
        a: 'Freelancers with clearly scoped projects (a logo, a fixed number of blog posts) should send a quotation. For open-ended or hourly work, an estimate with an hourly rate range is more honest.',
      },
      {
        q: 'Do I need to charge GST on an estimate?',
        a: 'No. Neither an estimate nor a quotation triggers a GST liability since no supply has taken place yet; GST applies once you issue an actual tax invoice.',
      },
      {
        q: 'What should I title the document to avoid confusion?',
        a: 'Always title it explicitly as "Quotation" or "Estimate" at the top, and mention validity or "subject to inspection" conditions so the client knows exactly what they are looking at.',
      },
    ],
    relatedSlugs: ['how-to-write-a-professional-quotation', 'best-construction-quotation-examples', 'invoice-vs-quotation'],
  },

  {
    slug: 'gst-in-quotations',
    title: 'GST in Quotations: CGST, SGST, IGST Explained for Businesses',
    seoTitle: 'GST in Quotations: CGST, SGST, IGST Explained (2026)',
    metaDescription:
      'A clear explanation of how to apply CGST, SGST and IGST on quotations, HSN/SAC codes, and common GST mistakes Indian businesses make while quoting.',
    keywords: [
      'GST in quotation',
      'CGST SGST IGST explained',
      'HSN code quotation',
      'SAC code services',
      'GST calculation business',
    ],
    date: '2026-07-06',
    readingTime: 9,
    category: 'GST & Taxation',
    excerpt:
      'Everything Indian businesses need to know about applying GST correctly on quotations, from CGST/SGST/IGST to HSN and SAC codes.',
    intro:
      'Getting GST wrong on a quotation is one of the most common reasons Indian businesses lose credibility with B2B clients or end up under-quoting their own margins. Here is a practical breakdown of CGST, SGST, IGST, and how to apply them correctly on any quotation.',
    sections: [
      {
        heading: 'The basic GST structure in India',
        body: `GST in India is split based on whether a transaction happens within the same state or across state lines. For intra-state supply (buyer and seller in the same state), tax is split equally into CGST (Central GST) and SGST (State GST). For inter-state supply (buyer and seller in different states), a single IGST (Integrated GST) applies instead.\n\nFor example, on an 18% GST item sold within Maharashtra, you charge 9% CGST + 9% SGST. The same item sold from Maharashtra to a buyer in Gujarat is charged as 18% IGST. The total tax rate is identical either way — only the split changes.`,
      },
      {
        heading: 'How to determine which applies on your quotation',
        body: `The determining factor is the "place of supply," which is generally the buyer's registered address or delivery location, not your own business location. If your business is in Delhi and you are quoting a client in Delhi, use CGST + SGST. If that same client is in Haryana, use IGST.\n\nThis matters because many small businesses default to CGST/SGST out of habit even when billing an out-of-state client, which creates mismatches during GST return filing and can block the client's input tax credit claim.`,
        bullets: [
          'Same state (buyer and seller): CGST + SGST',
          'Different states: IGST',
          'Place of supply = buyer\'s registered/delivery address',
          'Export of services: generally zero-rated (subject to conditions)',
        ],
      },
      {
        heading: 'HSN and SAC codes: why they matter on a quotation',
        body: `HSN (Harmonised System of Nomenclature) codes classify goods, while SAC (Services Accounting Code) classifies services. Including the correct code on your quotation is not just a formality — it determines the applicable GST rate and is increasingly expected by B2B buyers for their own compliance and input credit matching.\n\nBusinesses with annual turnover above Rs 5 crore are required to mention 6-digit HSN/SAC codes on tax invoices, and many procurement teams now expect the same detail even at the quotation stage to avoid rework later.`,
      },
      {
        heading: 'Common GST rates you will encounter',
        body: `Most goods and services fall under 5%, 12%, 18%, or 28% GST slabs, with a few categories at 0% (exempt) or under special schemes. Common examples: IT and software services are usually 18%, restaurant services (non-AC or standalone) are often 5% without input credit, construction of residential property under certain schemes is 1% or 5% without input tax credit, and works contracts are generally 18%.\n\nBecause slabs change periodically through GST Council meetings, always verify the current rate for your specific goods/service category before finalizing a quotation, rather than relying on rates you used a year ago.`,
      },
      {
        heading: 'Formatting GST correctly on your quotation',
        body: `Show a clean breakdown: Subtotal (taxable value), then CGST amount and SGST amount as separate lines (or IGST as one line), followed by the Grand Total. Never present GST as a single blended number without showing the rate percentage used, since clients often need this detail for their own accounting.\n\nAlso mention your GSTIN prominently, and if you are supplying multiple items taxed at different rates, group them by rate rather than applying one flat rate to the whole invoice.`,
      },
      {
        heading: 'Common mistakes businesses make',
        body: `The most frequent errors are: applying CGST/SGST to an inter-state client by mistake, forgetting to mention HSN/SAC codes, quoting a round number that "includes GST" without breaking it down (which confuses clients who need the taxable value for their books), and not updating rates after a GST Council rate revision.\n\nAnother subtle mistake is not distinguishing between a quotation issued to a GST-registered business (B2B, they need your GSTIN and correct codes for ITC) versus an individual consumer (B2C, where detail matters less but transparency still builds trust).`,
      },
      {
        heading: 'Using tools to avoid GST errors',
        body: `Manually calculating CGST/SGST/IGST splits across multiple line items with different rates is error-prone in Excel or Word. A quotation generator like QuotationMaker.in automatically applies the correct split based on buyer state and calculates rate-wise totals, which significantly reduces GST-related disputes and rework at invoicing stage.`,
      },
    ],
    faqs: [
      {
        q: 'What determines CGST/SGST vs IGST on a quotation?',
        a: 'It depends on the place of supply relative to your registered business location. Same state means CGST + SGST; different states means IGST, regardless of where the goods are manufactured or dispatched from.',
      },
      {
        q: 'Do I need to charge GST on a quotation itself?',
        a: 'No, GST liability arises only when you issue an actual tax invoice for a supply. A quotation is a pre-sale document, but showing the applicable GST breakdown helps the client understand the true final cost upfront.',
      },
      {
        q: 'Is HSN/SAC code mandatory on quotations?',
        a: 'It is not legally mandatory on a quotation the way it is on a tax invoice above certain turnover thresholds, but including it is best practice, especially for B2B clients who need it for their own compliance.',
      },
      {
        q: 'What if my client is exempt from GST or unregistered?',
        a: 'If your own goods/services are taxable, GST still applies regardless of whether the buyer is registered; only the buyer\'s ability to claim input tax credit differs, not your obligation to charge GST.',
      },
      {
        q: 'How do I handle GST for exports in a quotation?',
        a: 'Export of goods and services is generally treated as zero-rated under GST, subject to conditions like LUT (Letter of Undertaking) filing; consult a tax professional to confirm eligibility for your specific case.',
      },
    ],
    relatedSlugs: ['quotation-format-in-india', 'how-to-write-a-professional-quotation', 'invoice-vs-quotation'],
  },

  {
    slug: 'quotation-format-in-india',
    title: 'Quotation Format in India: Complete Guide with Examples',
    seoTitle: 'Quotation Format in India: Complete Guide with Examples (2026)',
    metaDescription:
      'A complete guide to the standard quotation format used by Indian businesses, including required fields, GST layout, and sample formats for different industries.',
    keywords: [
      'quotation format India',
      'quotation format in Word',
      'business quotation sample',
      'Indian quotation template',
    ],
    date: '2026-07-06',
    readingTime: 8,
    category: 'Quotation Basics',
    excerpt:
      'The complete standard quotation format used by Indian businesses, with field-by-field breakdown and industry-specific examples.',
    intro:
      'There is no single legal format for a quotation in India, but certain fields have become standard practice across industries because they prevent disputes and speed up approvals. This guide breaks down exactly what a well-formatted Indian business quotation should include.',
    sections: [
      {
        heading: 'The standard sections every Indian quotation should have',
        body: `Regardless of industry, a well-structured quotation follows a predictable layout: header (business identity), quotation metadata (number, date, validity), customer details, itemized table, tax breakdown, terms and conditions, and a signature block. Missing any of these sections is what typically causes clients to ask for a revised copy.\n\nThe order matters too — customers scan top to bottom expecting business identity first, then what they're being charged for, then the final number, then the fine print. Breaking this flow makes a quotation feel unprofessional even if the content is accurate.`,
      },
      {
        heading: 'Header section: business and customer identity',
        body: `Your header should include company name, logo, complete address, GSTIN, PAN (optional but common for larger B2B deals), phone and email. Directly below or beside it, the customer's name/company, billing address, and GSTIN if applicable.\n\nAdd a document title "QUOTATION" prominently so it is never confused with an invoice, followed by quotation number and date in the format DD/MM/YYYY, which is the standard Indian convention.`,
        bullets: [
          'Company name, logo, GSTIN, PAN, address, contact',
          'Customer name, address, GSTIN (if B2B)',
          'Document title "QUOTATION" clearly visible',
          'Quotation number and date (DD/MM/YYYY)',
        ],
      },
      {
        heading: 'Itemized table format',
        body: `The core of the quotation is a table with columns: Sr. No., Description of goods/services, HSN/SAC code, Quantity, Unit, Rate, and Amount. For services, "Quantity" might be hours, days, or a fixed unit like "1 project."\n\nBelow the table, show Subtotal, then GST lines (CGST/SGST or IGST depending on buyer location), any discount applied, and finally the Grand Total in bold, ideally also written in words (e.g., "Rupees One Lakh Twenty Thousand Only") for larger B2B or government-facing quotations.`,
      },
      {
        heading: 'Terms and conditions section',
        body: `This section typically covers: validity period of the quotation, payment terms (advance percentage, due dates, accepted modes), delivery or completion timeline, warranty or support period, and what happens on cancellation or scope change.\n\nIndian businesses commonly add a line like "Prices are subject to change without prior notice after the validity period" and "Any statutory taxes as applicable at the time of delivery will be charged extra," which protects against cost fluctuations in materials or rate revisions.`,
      },
      {
        heading: 'Signature and authorization block',
        body: `End with an authorized signatory name, designation, and company stamp/seal if used. For formal B2B and government tenders, a physical or digital signature adds credibility and is sometimes a mandatory requirement for the quotation to be considered valid for evaluation.\n\nIf sending digitally, a simple "Authorized Signatory" text block with company stamp image works fine for most small and medium business use cases.`,
      },
      {
        heading: 'Industry-specific format variations',
        body: `Manufacturing and trading businesses typically emphasize HSN codes, packaging, and freight/transport charges as separate lines. Service businesses (IT, marketing, consulting) emphasize SAC codes and milestone-based payment terms instead of quantities. Construction and interior quotations often include a detailed Bill of Quantities (BOQ) with material specifications, brand names, and labor charges itemized separately from materials.\n\nFreelancers and small service providers can use a simpler one-page format, while B2B and government-facing quotations should follow the fuller structure with HSN/SAC, GSTIN, and formal terms to be taken seriously during vendor evaluation.`,
      },
      {
        heading: 'Using a quotation generator instead of Word/Excel',
        body: `Building this format manually in Word or Excel each time is slow and prone to formatting drift between quotations. A generator like QuotationMaker.in applies this exact structure automatically, calculates GST splits correctly, and lets you export a clean PDF in minutes, which is especially useful for businesses sending multiple quotations a week.`,
      },
    ],
    faqs: [
      {
        q: 'Is there a legally mandated quotation format in India?',
        a: 'No, there is no single mandated legal format, but including GSTIN, HSN/SAC codes, validity period and clear terms has become standard business practice and is expected by most B2B buyers.',
      },
      {
        q: 'Should the quotation amount include GST or show it separately?',
        a: 'Always show GST as a separate line item (CGST/SGST or IGST) rather than folding it into one number, so the customer can see the taxable value and tax amount distinctly.',
      },
      {
        q: 'Do I need a company stamp on a quotation?',
        a: 'It is not legally required for private B2B deals, but government tenders and larger corporate procurement processes often expect a signature and company stamp for the quotation to be considered valid.',
      },
      {
        q: 'What is the ideal length for a quotation?',
        a: 'One to two pages is ideal for most small business quotations; longer, itemized Bills of Quantities are acceptable for construction or large multi-item orders where detail is expected.',
      },
      {
        q: 'Can I reuse the same quotation number for a revised quotation?',
        a: 'It is better to append a version suffix like QUO-2026-045-R1 for a revised quotation, so both parties can clearly track which version was last agreed upon.',
      },
    ],
    relatedSlugs: ['how-to-write-a-professional-quotation', 'gst-in-quotations', 'business-documentation-guide'],
  },

  {
    slug: 'best-construction-quotation-examples',
    title: 'Best Construction Quotation Examples & Templates',
    seoTitle: 'Best Construction Quotation Examples & Templates (2026)',
    metaDescription:
      'Real construction quotation examples and templates for contractors, covering material breakdown, labor charges, GST and payment milestones for Indian projects.',
    keywords: [
      'construction quotation example',
      'contractor quotation format',
      'construction quotation template India',
      'BOQ format',
    ],
    date: '2026-07-06',
    readingTime: 9,
    category: 'Industry Templates',
    excerpt:
      'Real-world construction quotation examples covering material breakdown, labor charges, GST, and milestone payment terms for Indian contractors.',
    intro:
      'Construction quotations fail more often than any other type because of unclear material specifications and missing labor breakdowns. This guide walks through real construction quotation examples and the exact structure Indian contractors should follow to avoid disputes mid-project.',
    sections: [
      {
        heading: 'Why construction quotations are different',
        body: `Unlike a product sale, construction work involves materials, labor, equipment, and site-specific variables that can shift the final cost. A construction quotation therefore needs a much more detailed Bill of Quantities (BOQ) than a typical service quotation, breaking down cost by material type, brand, quantity, and labor rate separately.\n\nWithout this detail, disputes commonly arise mid-project when a client assumes a cheaper material was quoted, or when "labor charges" turn out to exclude scaffolding, transport, or finishing work the client assumed was included.`,
      },
      {
        heading: 'Example 1: Residential interior work quotation',
        body: `A typical 2BHK interior quotation should separate work by room and by category: civil work (masonry, plastering), electrical (wiring, switches, points), plumbing, false ceiling, painting, and modular furniture. Each category lists material brand (e.g., "Asian Paints Royale," "Havells wiring"), quantity, rate, and amount.\n\nFor example: "Living room false ceiling — POP, 180 sq ft @ Rs 65/sq ft = Rs 11,700" is far more defensible than a lump-sum "False ceiling work — Rs 45,000" which invites the question "for which rooms and what material?"`,
        bullets: [
          'Civil work: masonry, plastering, waterproofing',
          'Electrical: wiring, points, switches, fixtures',
          'Plumbing: pipes, fittings, sanitaryware',
          'Finishing: painting, false ceiling, flooring, modular units',
        ],
      },
      {
        heading: 'Example 2: Building construction quotation (per sq ft)',
        body: `Larger construction projects are often quoted on a per-square-foot basis, e.g., "Rs 1,800 per sq ft for structure + basic finishing" with a separate specification sheet listing what "basic finishing" includes (brand of cement, steel TMT grade, tile category, paint brand). Without this specification sheet attached, per-sq-ft quotations are almost meaningless and become a major source of client disputes at handover.\n\nAlways attach or reference a specification annexure so both parties agree on what quality level the per-sq-ft rate corresponds to, and clearly state exclusions like government approvals, society NOC charges, or borewell costs if not included.`,
      },
      {
        heading: 'Example 3: Renovation/repair work quotation',
        body: `Repair and renovation quotations should separate demolition/removal charges, new material cost, and labor for installation, since clients often underestimate demolition and debris removal costs. For example: "Bathroom renovation — Tile removal & debris disposal: Rs 3,500; New tiles (Kajaria, 2x2 ft) 120 sq ft @ Rs 55 = Rs 6,600; Labor for tiling @ Rs 35/sq ft = Rs 4,200."\n\nThis breakdown also makes it easy to adjust the quotation if the client later decides to change tile brand or add scope, since each line is independently priced.`,
      },
      {
        heading: 'GST and payment terms specific to construction',
        body: `Works contracts (a mix of goods and services, like most construction jobs) are generally taxed at 18% GST under the works contract service category, though certain affordable housing and specified residential construction schemes attract lower rates like 1% or 5% without input tax credit — verify the applicable rate for your specific project type before quoting.\n\nPayment terms in construction are almost always milestone-based rather than single advance/balance: for example, 20% on booking, 30% on completion of civil work, 30% on completion of finishing, and 20% on final handover. Stating these milestones clearly in the quotation avoids payment disputes as the project progresses.`,
      },
      {
        heading: 'Common mistakes contractors make in quotations',
        body: `The most frequent issues are: quoting a flat number without a material specification sheet, omitting labor charges as a separate line (leading clients to assume it's included in material cost), not accounting for wastage percentage (typically 5-10% extra material needed for cutting/breakage), and failing to state who bears costs for site cleanup, scaffolding, or equipment rental.\n\nAnother common gap is not including an escalation clause for long projects — e.g., "Steel and cement prices are subject to revision if project duration exceeds 90 days from quotation date" — which protects contractors from absorbing raw material price hikes on their own margin.`,
      },
      {
        heading: 'Using a template to save time on every quotation',
        body: `Since construction quotations repeat similar line items across projects (cement, steel, tiles, paint, standard labor rates), building a reusable template in a tool like QuotationMaker.in saves significant time — you can duplicate a previous project's structure, adjust quantities and rates, and generate a clean, GST-compliant PDF within minutes instead of rebuilding the BOQ from scratch each time.`,
      },
    ],
    faqs: [
      {
        q: 'What GST rate applies to construction quotations?',
        a: 'Most construction and works contracts attract 18% GST, though specific residential schemes like affordable housing may attract concessional rates of 1% or 5% without input tax credit; confirm the applicable rate for your project category before finalizing.',
      },
      {
        q: 'Should labor and material be quoted separately?',
        a: 'Yes, always. Separating labor from material cost avoids disputes when a client wants to change material brand or when material prices fluctuate during a long project.',
      },
      {
        q: 'What is a Bill of Quantities (BOQ)?',
        a: 'A BOQ is a detailed itemized list of all materials, quantities, and labor required for a construction project, forming the backbone of an accurate and defensible construction quotation.',
      },
      {
        q: 'How should payment milestones be structured for construction?',
        a: 'A common structure is 20% booking advance, 30% on civil work completion, 30% on finishing completion, and 20% on final handover, but this can be adjusted based on project size and duration.',
      },
      {
        q: 'How do I account for material price increases in a long project?',
        a: 'Add an escalation clause in your quotation terms stating that material prices (especially steel and cement) are subject to revision if the project extends beyond a specified duration, protecting your margins on long timelines.',
      },
      {
        q: 'Should I quote per square foot or with a full itemized breakdown?',
        a: 'Per-square-foot quoting is common for large builds but should always be accompanied by a specification annexure describing exact material grades and brands, otherwise it becomes a common source of disputes at project handover.',
      },
    ],
    relatedSlugs: ['quotation-vs-estimate', 'quotation-format-in-india', 'how-to-write-a-professional-quotation'],
  },
];
