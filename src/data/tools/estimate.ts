import type { ToolContent } from './types';

export const estimateContent: ToolContent = {
  id: 'estimate',
  seo: {
    title: 'Free Estimate Maker — Create Cost Estimates Online & Download PDF',
    description:
      'Prepare professional cost estimates in your browser for free. Add approximate rates, delivery timelines and scope notes, keep it non-binding, and download a clean PDF or share on WhatsApp. No signup.',
    published: '2026-02-18',
    updated: '2026-08-07',
    keywords: [
      'estimate maker',
      'free estimate generator',
      'cost estimate format',
      'job estimate template',
      'estimate maker online India',
      'repair estimate generator',
      'work estimate pdf',
      'contractor estimate maker',
      'estimate vs quotation',
      'service estimate online',
      'estimate generator',
      'cost estimate format',
      'estimate format pdf',
      'work estimate template free',
      'how to make an estimate for a job',
      'construction estimate maker online',
      'repair estimate format India',
      'free estimate maker no signup',
      'estimate vs quotation difference',
      'job estimate template download',
      'estimate bill format',
    ],
  },
  h1: 'Free Online Estimate Maker',
  intro:
    'Give customers a quick, professional idea of what a job will cost — approximate rates, a completion timeline and a clear scope summary — then download the estimate as a PDF or share it on WhatsApp. Free, no signup, autosaved in your browser.',
  badge: {
    label: 'Quick Quote',
    colorClass: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-300 dark:border-amber-700',
  },
  theme: 'amber',
  layout: {
    hero: 'note-card',
    howTo: 'cards',
    features: 'alternating',
    useCases: 'accordion',
    example: 'strip',
    whatIs: 'prose',
    headingStyle: 'plain',
  },
  order: [
    'whatIs',
    'howTo',
    'widget',
    'proTips',
    'example',
    'custom',
    'features',
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
    'Non-binding cost and timeline ranges',
    'Approximate rates with scope notes',
    'Convert to a firm quotation in one click',
    'Room to state what is excluded',
  ],
  widget: 'estimate-vs-quote',
  relatedBlogSlugs: [
    'quotation-vs-estimate',
    'service-quotation-format-guide',
    'freelancer-pricing-guide',
  ],
  customBlocks: [
    {
      kind: 'table',
      heading: 'How Much Variance Should an Estimate Allow?',
      intro:
        'An estimate is only honest if it says how far the final figure might move. The tolerance depends on how much you can actually see before you start — these are the ranges tradespeople and service firms commonly work to.',
      columns: ['Type of work', 'Reasonable variance', 'What drives the movement'],
      rows: [
        [
          'Repair and diagnostic work',
          '±25% or wider',
          'The fault is not fully visible until the unit is opened. State the diagnostic fee separately and re-estimate once the cause is known.',
        ],
        [
          'Renovation and interiors',
          '±15–20%',
          'Hidden damp, old wiring, uneven walls and client-driven changes to finishes after work begins.',
        ],
        [
          'Civil and structural work',
          '±10–15%',
          'Soil conditions, material price movement over a long build, and quantities that firm up only after measurement.',
        ],
        [
          'Design and creative projects',
          '±20%',
          'Revision rounds. Cap them explicitly — "three rounds included, further rounds at ₹X" — or the range is meaningless.',
        ],
        [
          'Software and development',
          '±20–30%',
          'Requirements discovered mid-build, third-party integrations, and data migration that is always worse than it looks.',
        ],
        [
          'Supply of standard goods',
          '±5% or nil',
          'Little should move. If you can price it this tightly, issue a quotation instead — the client will trust a firm number more.',
        ],
      ],
      note:
        'Print the tolerance on the estimate itself, not just in conversation. "Estimated ₹1,80,000, expected range ₹1,62,000–₹1,98,000" sets an expectation that a bare single number never does.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      heading: 'When an Estimate May Legitimately Change — and When It May Not',
      paragraphs: [
        'An estimate can move when new facts appear that neither side could reasonably have known: the wall was hollow, the gearbox was seized, the client\'s existing data turned out to be in three incompatible formats. It can also move when the client changes what they asked for. Both are fair, and both should be confirmed in writing before the extra work starts, not presented as a surprise on the final bill.',
        'An estimate may not quietly move because you mispriced it, because your supplier raised rates you failed to check, or because the job took longer than you judged. Those are your commercial risks, and absorbing them is what separates a business a client returns to from one they do not. If your margin genuinely cannot survive the error, say so early and renegotiate openly — do not discover it at invoicing.',
        'The practical safeguard is a variation note. The moment scope changes, send a one-line record of what changed, what it adds, and get a written yes — even a WhatsApp reply is enough. Disputes over final bills almost never turn on whether the extra work was needed; they turn on whether the client agreed to it before it happened.',
      ],
    },
  ],
  whatIs: {
    heading: 'What Is an Estimate and When Should You Send One?',
    paragraphs: [
      'An estimate is an informed approximation of what a job will cost and how long it will take, prepared before the full scope is known. A mechanic cannot promise a firm price until the engine is opened; a contractor cannot fix a rate until the site is measured. The estimate bridges that gap: it gives the customer a realistic number to decide with, while leaving room for the figure to move once the real work is visible.',
      'That makes it deliberately different from its cousins. A quotation is a firm offer at fixed prices, usually valid for a stated period — accept it and those prices bind you. An invoice is a demand for payment after the work is done. An estimate sits earliest in the chain and carries the least commitment: it says "expect roughly this much", typically with language such as "final cost may vary ±10% based on actual work and materials". Sending a firm quotation when you actually mean an estimate is how service businesses end up absorbing surprise costs.',
      'A useful estimate still needs structure: an estimate number and date, a validity date, the customer\'s details, line items with approximate rates, an expected delivery or completion window, a scope summary describing exactly what is covered, and terms stating that additional work will be approved separately. This tool provides dedicated fields for each, so your estimate looks as professional as your final invoice will.',
    ],
  },
  howTo: {
    heading: 'How to Create an Estimate in 4 Steps',
    steps: [
      {
        title: 'Fill in your business and the customer',
        text: 'Enter your details under Estimated By — name, address, phone and logo — and the customer\'s details under Estimate For. Set the estimate date and a Valid Until date so the customer knows the numbers have a shelf life.',
      },
      {
        title: 'List the work with approximate rates',
        text: 'Add each task, part or material as a line item with a description, quantity and estimated rate. GST can be included per item or left off entirely; subtotals and the estimated total calculate live in the preview.',
      },
      {
        title: 'Add the timeline and scope summary',
        text: 'In Estimate Details, state the approximate delivery or completion window (for example "2–3 weeks from confirmation") and write a short scope summary describing exactly what the estimate covers — the single best defence against later disputes.',
      },
      {
        title: 'Check the terms and share',
        text: 'The default terms already state that the final cost may vary ±10% and that work begins only after written approval — edit them to suit your trade. Then pick a template and download the PDF, print it, or send it on WhatsApp for a quick yes.',
      },
    ],
  },
  features: {
    heading: 'Why Use This Free Estimate Generator?',
    items: [
      {
        title: 'Built-in timeline and scope fields',
        text: 'Dedicated Approx. Delivery and Scope Summary fields print on the document, so customers see not just the number but what it covers and when the work lands.',
      },
      {
        title: 'Non-binding by default',
        text: 'The pre-filled terms flag the document as an estimate, allow a ±10% variation and require separate approval for extra work — protecting you from being held to a guess.',
      },
      {
        title: 'Live totals with optional GST',
        text: 'Estimated rates, quantities and tax compute as you type, with automatic CGST/SGST or IGST if you choose to show tax, and the total in words in Indian format.',
      },
      {
        title: '25 templates with your branding',
        text: 'Upload your logo, signature and stamp and choose a layout that matches your business — a garage estimate and an interior-design estimate should not look the same.',
      },
      {
        title: 'One-tap WhatsApp sharing',
        text: 'Most estimates are approved in a chat, not a boardroom. Share a link or PNG on WhatsApp and get the customer\'s go-ahead the same day.',
      },
      {
        title: 'Free, private, autosaved',
        text: 'No signup and no server upload — your draft autosaves to your browser\'s localStorage, so you can start an estimate at the counter and finish it after closing.',
      },
    ],
  },
  useCases: {
    heading: 'Who Sends Estimates Every Day?',
    intro:
      'Any trade where the true cost only emerges once the work starts runs on estimates. These are the businesses that use this tool most:',
    items: [
      {
        title: 'Vehicle service centres and repair shops',
        text: 'Garages estimate parts and labour after a first inspection, get the owner\'s approval on WhatsApp, and revise only if teardown reveals more damage.',
      },
      {
        title: 'Contractors and interior renovators',
        text: 'Civil, electrical and painting contractors give per-square-foot or lump-sum ballpark figures with a completion window before detailed measurements turn it into a firm quotation.',
      },
      {
        title: 'Appliance and electronics technicians',
        text: 'AC, laptop and mobile repair technicians estimate diagnosis-based costs so the customer can decide between repair and replacement before parts are ordered.',
      },
      {
        title: 'Event planners and service agencies',
        text: 'Caterers, decorators and agencies estimate against a headcount or brief that will change, locking numbers only when the final scope is confirmed.',
      },
    ],
  },
  example: {
    heading: 'Estimate Example: Two-Wheeler Service and Repair',
    intro:
      'A two-wheeler service centre in Pune inspects a scooter brought in with a grinding noise and prepares this estimate before ordering parts:',
    rows: [
      { label: 'Full service — oil change, air filter, tuning (labour)', value: '₹850.00' },
      { label: 'Brake pads, front & rear (est. parts)', value: '₹1,200.00' },
      { label: 'Clutch plate set, if wear confirmed on teardown (est.)', value: '₹1,600.00' },
      { label: 'Consumables — brake fluid, grease, cleaning', value: '₹250.00' },
      { label: 'Estimated total (final may vary ±10%)', value: '₹3,900.00' },
    ],
    outro:
      'Estimate EST-2026-0064 shows an approximate completion of "2 working days from approval" and a scope summary noting that the clutch line item applies only if teardown confirms wear. The owner approves on WhatsApp, the clutch turns out fine, and the final invoice comes to ₹2,300 — converted from this estimate in a couple of minutes by dropping one line.',
  },
  sections: [
    {
      heading: 'Estimate vs Quotation vs Invoice: Picking the Right Document',
      paragraphs: [
        'Think of the three as stages of certainty. The estimate comes first, when you can only approximate — it signals "roughly this much, subject to what we find". The quotation follows once scope is nailed down: fixed prices, a validity period, and an expectation that acceptance forms an agreement. The invoice arrives last, after delivery, as the actual demand for payment that enters both parties\' books.',
        'Choosing wrongly costs money in both directions. Quote firm prices on an unopened engine and you eat the overrun; send only vague estimates when a corporate buyer needs a formal quotation for their purchase approval and you lose the order to someone who sent one. A practical workflow for service businesses: estimate at first contact, quotation once you have inspected or measured, invoice on completion — and this platform lets you create all three in the same editor.',
      ],
    },
    {
      heading: 'How to Keep an Estimate Non-Binding',
      paragraphs: [
        'The document\'s power comes from its flexibility, so protect it in writing. Title it ESTIMATE (this tool prints that heading automatically), state a validity date, and include variation language — "final cost may vary ±10% based on actual work and materials" is the widely used standard and ships in the default terms here. Mark uncertain line items explicitly, the way the example above flags the clutch plate as conditional on teardown.',
        'Two more habits close the loop. First, require written approval before starting: a WhatsApp reply saying "approved, go ahead" against the shared estimate is timestamped evidence of consent. Second, never absorb surprises silently — if the job exceeds the estimated band, stop, send a revised estimate or a supplementary one for the extra work, and wait for a fresh approval. Customers forgive a revised number explained early far more readily than a shock on the final bill.',
      ],
    },
    {
      heading: 'From Estimate to Invoice: Closing the Job Cleanly',
      paragraphs: [
        'Once the work is done, the estimate becomes your invoice skeleton. Open the invoice maker, re-enter the same customer and line items, replace approximate rates with actuals, drop conditional items that never materialised, and add anything the customer approved mid-job. Reference the estimate number ("against estimate EST-2026-0064") so the customer can reconcile the promise with the bill.',
        'Remember that the estimate itself is not a tax document — no input tax credit flows from it and it does not appear in GST returns. When you invoice a GST-registered customer, issue a proper tax invoice with GSTIN, HSN/SAC codes and the CGST/SGST or IGST split; our GST invoice maker handles that format. If the customer pays an advance against the estimate, acknowledge it with a payment receipt rather than an invoice, and adjust it on the final bill.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Is an estimate legally binding on my business?',
      a: 'Generally no — an estimate is an approximation, not an offer at fixed prices. But wording matters: keep the ESTIMATE title, a validity date and variation language such as "final cost may vary ±10%" on the document (all included by default here), and get changes approved in writing so neither side can claim a firm price was promised.',
    },
    {
      q: 'What is the difference between an estimate and a quotation?',
      a: 'A quotation is a firm offer — accept it and the stated prices apply. An estimate is a best-guess prepared before full scope is known, expected to be refined. Send an estimate when you have not yet inspected or measured the job, and a quotation once you can commit to exact figures.',
    },
    {
      q: 'Should I show GST on an estimate?',
      a: 'You can, and for registered businesses it is good practice so the customer sees the true outflow — the tool computes CGST/SGST or IGST per line if you enable tax. But an estimate is not a tax invoice: no ITC arises from it and it is not reported in GST returns. Issue a proper tax invoice when the work completes.',
    },
    {
      q: 'How do I mention the delivery timeline on the estimate?',
      a: 'Use the Approx. Delivery / Completion field in the Estimate Details section — for example "2–3 weeks from confirmation" or "same day, subject to parts availability". It prints on the document alongside the scope summary so the customer approves both the price band and the timeline together.',
    },
    {
      q: 'What if the actual cost exceeds my estimate?',
      a: 'Pause and communicate before spending more. Send a revised estimate (or a supplementary one for the additional work) and wait for approval — the default terms here already state that additional work will be estimated and approved separately, which gives you the contractual footing to do exactly that.',
    },
    {
      q: 'Can I convert an estimate into an invoice on this platform?',
      a: 'Yes — once the job is approved and completed, open the invoice or GST invoice maker, carry over the customer and line items, replace estimated rates with actual charges, and reference the estimate number on the bill. The editors share the same layout, so the switch takes a couple of minutes.',
    },
    {
      q: 'Do I need to sign up or pay to use the estimate maker?',
      a: 'No. Every feature — unlimited estimates, all 25 templates, PDF and PNG downloads, WhatsApp sharing, logo and signature uploads — is free with no account. Your draft autosaves in your browser\'s local storage and stays in your browser unless you choose to create a share link.',
    },
    {
      q: 'How long should an estimate stay valid?',
      a: 'Set the Valid Until date to match how fast your input costs move — 7 to 15 days is typical for repair and parts-based work, up to 30 days for labour-dominated services. A short validity protects you from material price swings and nudges the customer to decide quickly.',
    },
    {
      q: 'What is the standard validity period for an estimate?',
      a: 'There is no legal minimum or maximum — the validity period is whatever you state on the document, typically 15 to 30 days for most trades. Set a validity that reflects how long your material costs, labour rates and subcontractor quotes are genuinely stable. For renovation and construction work where material prices fluctuate, 7 to 14 days is more realistic than 30.',
    },
    {
      q: 'Can a client use my estimate as a work order or PO?',
      a: 'Only if both parties agree in writing. An estimate is a preliminary cost indication, not a contract. If a client wants to use your estimate as an authorisation to proceed, add a signature line at the bottom and have them sign and return it. Ideally, convert the accepted estimate into a formal quotation or agree on a proper purchase order — a signed estimate without specific payment terms is rarely enforceable.',
    },
    {
      q: 'What is the difference between an estimate and a quote?',
      a: 'An estimate is an approximate cost indication — you are communicating a range or a best-guess figure, subject to change when the full scope is confirmed. A quotation is a firm, binding price offer for a defined scope of work. When you issue a quotation the client can accept it and hold you to the price; when you issue an estimate you are signalling that the final cost may be higher or lower. Use an estimate when scope or site conditions are still uncertain, and a quotation once they are confirmed.',
    },
    {
      q: 'Should I include contingency costs in my estimate?',
      a: 'Yes, and you should show it as a separate line item rather than hiding it in your rates. A 5-10% contingency on construction or renovation estimates is standard and well understood by clients. Labelling it transparently prevents disputes: the client sees you have accounted for unknowns, and if those unknowns do not materialise, you can reduce the final invoice accordingly.',
    },
    {
      q: 'Can I convert an estimate into a formal quotation or invoice?',
      a: 'Yes. Once the scope is confirmed, use the data from your estimate to build a proper quotation with firm prices, payment terms and a validity date. After work is complete, the invoice simply reflects what was agreed in the quotation. Keeping the same line items and descriptions across all three documents — estimate, quotation, invoice — makes reconciliation straightforward for both your records and the client\'s accounts team.',
    },
    {
      q: 'How detailed should line items be in an estimate?',
      a: 'As detailed as needed to avoid scope disputes later. Vague estimates like "painting work: \'80,000" lead to arguments about whether two coats or three were included, whether surface preparation is in scope, and whether touch-ups are covered. Break the estimate into materials, labour and any subcontracted work separately. The client may not need this detail upfront, but it protects you during execution.',
    },
    {
      q: 'Does an estimate carry any legal weight in a payment dispute?',
      a: 'A signed estimate carries significantly more weight than an unsigned one. If the client has signed your estimate and you have completed the work described, a court or tribunal will generally treat the estimated amount as the agreed price. However, if your final invoice significantly exceeds the estimate without prior written approval from the client, recovering the excess can be difficult regardless of actual costs.',
    },
    {
      q: 'How do I handle a client who keeps revising scope after I\'ve submitted an estimate?',
      a: 'Issue a revised estimate for each material change in scope and get written acknowledgement — an email confirmation or a countersigned document. Never simply absorb scope additions in the assumption that the client will adjust the final payment. Each revision should reference the previous estimate number and clearly state what has changed and why the cost has moved.',
    },
    {
      q: 'Should an estimate include GST?',
      a: 'If you are GST-registered, show GST as a separate line item on the estimate so the client sees the tax-inclusive total. This avoids the common problem of a client approving a \'1,00,000 estimate and then objecting to the \'1,18,000 invoice. If you are not registered for GST and your supply is below the exemption threshold, state "GST not applicable" so the client does not assume they can claim input credit.',
    },
    {
      q: 'What should I do when actual costs exceed my estimate by more than 10%?',
      a: 'Communicate before the work is done, not after. The moment you identify that costs are tracking above your estimate — whether because of material price changes, unforeseen site conditions, or additional scope — send the client a revised estimate in writing and get their sign-off before continuing. Presenting a final invoice well above the accepted estimate without prior notice is the most common cause of payment refusals in construction and renovation.',
    },
    {
      q: 'Can I send an estimate by WhatsApp and have it be valid?',
      a: 'A WhatsApp estimate is not invalid, but it creates practical problems: it is easily missed in a busy chat, there is no formal acceptance mechanism, and the formatting is lost. A PDF estimate sent via WhatsApp is fine — the attachment preserves the document. What matters legally is that the client received the estimate, understood the scope and costs, and acknowledged it in some form before work began.',
    },
    {
      q: 'Is it necessary to include a breakdown of profit margin in an estimate?',
      a: 'No, and you should not. Your estimate shows the client what they will pay — your internal cost structure, margin and overhead are confidential. The breakdown the client needs is scope-level (what work is included), not P&L-level (what it costs you). Professional estimates show labour, materials and other costs by work package, not by cost category.',
    },
  ],
  relatedHeading: 'What to Send Once the Estimate Is Accepted',
  relatedNote:
    'An estimate is the opening move — a firm quotation, then an invoice, follow once the scope settles.',
  related: ['quotation', 'invoice', 'proforma-invoice', 'purchase-order', 'payment-receipt', 'gst-invoice'],

  proTips: {
    heading: 'How to Write Estimates That Win Jobs Without Underselling Yourself',
    items: [
      {
        icon: '🔮',
        title: 'Add a 10–15% contingency buffer for materials-heavy jobs',
        text: 'Material prices move with commodity markets. A construction estimate for steel, cement or timber that does not carry a 10–15% buffer can turn profitable work into a loss if prices spike between estimate and purchase. State the buffer as a separate line item so the client understands it is not padding — it is market-price protection for both of you.',
      },
      {
        icon: '🏭',
        title: 'Conduct a site visit before estimating on-site work',
        text: 'Estimates written from photos or WhatsApp descriptions regularly undercount labour by 30–40%. Access difficulties, existing damage, non-standard fittings and site conditions that do not appear in a photo add hours to a job. A 20-minute site visit produces an estimate that is defensible; a remote estimate is a guess that you are bound by.',
      },
      {
        icon: '📝',
        title: 'List exclusions as carefully as inclusions',
        text: 'Every estimate should have an explicit "This estimate does not include" section. Material disposal, surface preparation, electrical or plumbing work behind walls, travel beyond a certain distance — if you have not written it in, the client assumes it is included. Exclusions prevent scope creep arguments before they start.',
      },
      {
        icon: '🔁',
        title: 'Version-control your revised estimates',
        text: 'When a client asks for a revision, do not overwrite the original. Create a new version (EST-2026-011-R2) with a new validity date and a brief note on what changed. Keeping the version history protects you if the client later claims they accepted the earlier, lower version — and it shows a professional process.',
      },
      {
        icon: '📞',
        title: 'Follow up personally within 48 hours of sending',
        text: 'An estimate sent and never followed up converts at roughly half the rate of one backed by a quick call or message. Ask if the client has questions, confirm they received the PDF, and offer a brief site or video call to walk through the scope. The conversion rate improvement far outweighs the 5-minute investment.',
      },
      {
        icon: '🏷️',
        title: 'Price your labour to a day rate, not a job rate',
        text: 'Quoting a fixed price for labour on uncertain jobs (repair work, renovation, bespoke fabrication) creates a perverse incentive to rush. Price by the day or half-day with a minimum, and estimate the number of days based on a site visit. Your bill accurately reflects the work done and you are not penalised for complexity.',
      },
    ],
  },

  mistakes: {
    heading: 'Common Estimation Mistakes That Cost Contractors and Freelancers',
    intro:
      'These errors appear in estimates across construction, repair, IT and creative work. Most of them do not cause problems immediately — they surface during delivery when it is too late to renegotiate.',
    items: [
      {
        mistake: 'Estimating from photos or descriptions alone',
        impact: 'Access issues, hidden damage or non-standard fittings add unquoted hours.',
        fix: 'Always conduct a site visit or detailed brief call before estimating physical work.',
      },
      {
        mistake: 'No exclusions section',
        impact: 'Client assumes everything is included; scope expands beyond the estimate.',
        fix: 'List what is explicitly not covered, including disposal, prep work and travel.',
      },
      {
        mistake: 'Estimate identical to final quotation',
        impact: 'Client treats the estimate as a firm price commitment before scope is clear.',
        fix: 'Add “This is an estimate — actual cost may vary based on site conditions” prominently.',
      },
      {
        mistake: 'No validity period',
        impact: 'Client returns months later expecting the same price despite rising costs.',
        fix: 'Set a 7–15 day validity for materials-heavy jobs; up to 30 days for service work.',
      },
      {
        mistake: 'No materials breakdown',
        impact: 'Client does not know what they are buying; disputes follow delivery.',
        fix: 'List every significant material by type, grade and quantity — not just total cost.',
      },
      {
        mistake: 'Overwriting the original estimate on revision',
        impact: 'No record of what was agreed at each stage; client reverts to original price.',
        fix: 'Save each revision as a new numbered version and send only the latest to the client.',
      },
    ],
  },
  industries: {
    heading: 'Industry-by-Industry: When and How Estimates Are Used',
    intro: 'Estimates are the first document exchanged in most project-based industries — each sector has its own conventions for what to include and how binding the figure is.',
    items: [
      {
        name: 'Construction & Civil Work',
        icon: 'HardHat',
        text: 'Civil contractors issue preliminary estimates after a site visit, listing quantities for excavation, concrete, steel, brick and finishing as separate line items. A 5-10% contingency is standard because ground conditions and material costs can shift between estimate and execution.',
        detail: 'Break your construction estimate by work package (civil, structural, MEP, finishing) rather than as a lump sum — clients and project managers need to track each package against budget separately.',
      },
      {
        name: 'Interior Design & Renovation',
        icon: 'Sofa',
        text: 'Interior designers prepare room-by-room estimates separating furniture, modular work, electrical, civil and loose furnishing. The estimate is typically presented alongside mood boards so the client can correlate cost to design intent.',
        detail: 'Specify the grade or brand of materials in the estimate (e.g. "Italian marble at \'350/sq ft" vs "Indian marble at \'150/sq ft") — an estimate without material specifications leads to scope disputes during procurement.',
      },
      {
        name: 'Automobile & Vehicle Repair',
        icon: 'Car',
        text: 'Service centres provide repair estimates with itemised parts (with part numbers) and labour separately. Insurance assessors require a detailed estimate before approving claims, making accuracy in parts pricing and labour hours critical.',
        detail: 'Always get the owner\'s written approval before starting repair work that exceeds the estimate — most consumer protection regulations require this, and proceeding without it makes the excess charges legally unrecoverable.',
      },
      {
        name: 'IT Services & Custom Development',
        icon: 'Laptop',
        text: 'IT agencies issue ballpark estimates early in the sales cycle, then refine them into formal proposals once scope is confirmed. Estimates for software development typically show effort in person-days or sprints, with a separate line for ongoing support.',
        detail: 'State your assumptions explicitly in every IT estimate — number of screens, third-party APIs included, revision rounds covered — because scope ambiguity in software projects is the primary cause of billing disputes.',
      },
      {
        name: 'Retail & Product Supply',
        icon: 'Store',
        text: 'Retailers and product suppliers use estimates when a customer enquires about custom orders, bulk purchases or non-standard configurations. The estimate locks the price for the validity period, after which it is subject to revision based on import or raw material costs.',
        detail: 'Include minimum order quantities and lead times in retail estimates — without them, a customer may accept a price estimate weeks later expecting immediate delivery at the quoted rate.',
      },
      {
        name: 'Manufacturing & Fabrication',
        icon: 'Factory',
        text: 'Job-work manufacturers provide material plus processing estimates for custom fabricated items, breaking out raw material, machining time and finishing separately. Estimates for made-to-order production are conditional on raw material availability and current commodity prices.',
        detail: 'State the raw material price benchmark date in your estimate — if steel or copper prices rise more than 5% between estimate and order, most fabricators have a right to revise, but only if the estimate explicitly says so.',
      },
      {
        name: 'Medical & Healthcare',
        icon: 'Stethoscope',
        text: 'Hospitals and clinics provide treatment cost estimates for elective procedures, listing consultation, procedure, consumables and room charges separately. Insurance pre-authorisation requires a detailed estimate before admission.',
        detail: 'Break every medical estimate into admitted and non-admitted costs — consumables used during a procedure are often covered differently by insurance compared to room charges, and bundling them creates claim settlement delays.',
      },
      {
        name: 'Education & Training',
        icon: 'GraduationCap',
        text: 'Coaching institutes and corporate training providers issue course fee estimates covering tuition, study materials, examination fees and optional extras. Group training proposals break down per-participant and bulk rates.',
        detail: 'Specify what is and is not included in your education estimate — GST applicability, examination registration fees, and LMS access costs are commonly disputed when left unspecified.',
      },
      {
        name: 'Freelancing & Creative Services',
        icon: 'User',
        text: 'Freelancers in design, content, photography and video send estimates before project kickoff to ensure budget alignment. Creative estimates typically distinguish concept development, production and revision rounds.',
        detail: 'Cap the number of revision rounds explicitly in every creative estimate — "unlimited revisions" language is unprofessional and routinely exploited; state a number (two rounds is industry standard) and specify the cost of additional rounds.',
      },
      {
        name: 'Hospitality & Events',
        icon: 'UtensilsCrossed',
        text: 'Event managers and caterers issue per-head or lump-sum estimates that break food, decor, staffing, AV and venue rental into separate lines. Estimates for large events typically require a 50% advance before work commences.',
        detail: 'Include a cancellation policy in your hospitality estimate — if the event is cancelled after you have committed bookings or purchased materials, an undisclosed cancellation policy means you cannot recover those costs.',
      },
    ],
  },

  references: {
    heading: 'Business and Legal References for Estimates',
    intro: 'Estimates operate at the intersection of commercial practice and contract law — these references provide the authoritative context.',
    items: [
      { label: 'Indian Contract Act, 1872 — Offer and Acceptance', url: 'https://legislative.gov.in', note: 'Governs when a preliminary estimate becomes a binding offer and what constitutes valid acceptance, which determines enforceability in payment disputes.' },
      { label: 'Consumer Protection Act, 2019 — Unfair Trade Practices', url: 'https://consumeraffairs.nic.in', note: 'Prohibits significant deviation from a quoted or estimated price without prior consent; relevant for consumer-facing trades like automobile repair and home renovation.' },
      { label: 'CGST Act — Section 31: Time of Supply for Estimates', url: 'https://cbic-gst.gov.in', note: 'Clarifies that an estimate alone does not create a GST liability — the tax point arises at the time of actual supply or advance payment, not at estimate issuance.' },
      { label: 'MSMED Act, 2006 — Dispute Resolution Mechanism', url: 'https://msme.gov.in', note: 'Provides a structured conciliation and arbitration process for MSMEs to resolve billing disputes, including those arising from scope and estimate disagreements.' },
      { label: 'BIS Standards for Construction Estimates', url: 'https://bis.gov.in', note: 'Bureau of Indian Standards specifications for measurement of works, which form the basis for preparing and verifying construction and civil estimates.' },
    ],
  },
};
