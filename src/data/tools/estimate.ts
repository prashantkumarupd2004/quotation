import type { ToolContent } from './types';

export const estimateContent: ToolContent = {
  id: 'estimate',
  seo: {
    title: 'Free Estimate Maker — Create Cost Estimates Online & Download PDF',
    description:
      'Prepare professional cost estimates in your browser for free. Add approximate rates, delivery timelines and scope notes, keep it non-binding, and download a clean PDF or share on WhatsApp. No signup.',
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
  whatIs: {
    heading: 'What Is an Estimate and When Should You Send One?',
    paragraphs: [
      'An estimate is an informed approximation of what a job will cost and how long it will take, prepared before the full scope is known. A mechanic cannot promise a firm price until the engine is opened; a contractor cannot fix a rate until the site is measured. The estimate bridges that gap: it gives the customer a realistic number to decide with, while leaving room for the figure to move once the real work is visible.',
      'That makes it deliberately different from its cousins. A quotation is a firm offer at fixed prices, usually valid for a stated period — accept it and those prices bind you. An invoice is a demand for payment after the work is done. An estimate sits earliest in the chain and carries the least commitment: it says "expect roughly this much", typically with language such as "final cost may vary ±10% based on actual work and materials". Sending a firm quotation when you actually mean an estimate is how service businesses end up absorbing surprise costs.',
      'A useful estimate still needs structure: an estimate number and date, a validity date, the customer’s details, line items with approximate rates, an expected delivery or completion window, a scope summary describing exactly what is covered, and terms stating that additional work will be approved separately. This tool provides dedicated fields for each, so your estimate looks as professional as your final invoice will.',
    ],
  },
  howTo: {
    heading: 'How to Create an Estimate in 4 Steps',
    steps: [
      {
        title: 'Fill in your business and the customer',
        text: 'Enter your details under Estimated By — name, address, phone and logo — and the customer’s details under Estimate For. Set the estimate date and a Valid Until date so the customer knows the numbers have a shelf life.',
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
        title: '25+ templates with your branding',
        text: 'Upload your logo, signature and stamp and choose a layout that matches your business — a garage estimate and an interior-design estimate should not look the same.',
      },
      {
        title: 'One-tap WhatsApp sharing',
        text: 'Most estimates are approved in a chat, not a boardroom. Share a link or PNG on WhatsApp and get the customer’s go-ahead the same day.',
      },
      {
        title: 'Free, private, autosaved',
        text: 'No signup and no server upload — your draft autosaves to your browser’s localStorage, so you can start an estimate at the counter and finish it after closing.',
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
        text: 'Garages estimate parts and labour after a first inspection, get the owner’s approval on WhatsApp, and revise only if teardown reveals more damage.',
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
        'Think of the three as stages of certainty. The estimate comes first, when you can only approximate — it signals "roughly this much, subject to what we find". The quotation follows once scope is nailed down: fixed prices, a validity period, and an expectation that acceptance forms an agreement. The invoice arrives last, after delivery, as the actual demand for payment that enters both parties’ books.',
        'Choosing wrongly costs money in both directions. Quote firm prices on an unopened engine and you eat the overrun; send only vague estimates when a corporate buyer needs a formal quotation for their purchase approval and you lose the order to someone who sent one. A practical workflow for service businesses: estimate at first contact, quotation once you have inspected or measured, invoice on completion — and this platform lets you create all three in the same editor.',
      ],
    },
    {
      heading: 'How to Keep an Estimate Non-Binding',
      paragraphs: [
        'The document’s power comes from its flexibility, so protect it in writing. Title it ESTIMATE (this tool prints that heading automatically), state a validity date, and include variation language — "final cost may vary ±10% based on actual work and materials" is the widely used standard and ships in the default terms here. Mark uncertain line items explicitly, the way the example above flags the clutch plate as conditional on teardown.',
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
      a: 'No. Every feature — unlimited estimates, all 25+ templates, PDF and PNG downloads, WhatsApp sharing, logo and signature uploads — is free with no account. Your draft autosaves in your browser’s local storage and never leaves your device unless you share it.',
    },
    {
      q: 'How long should an estimate stay valid?',
      a: 'Set the Valid Until date to match how fast your input costs move — 7 to 15 days is typical for repair and parts-based work, up to 30 days for labour-dominated services. A short validity protects you from material price swings and nudges the customer to decide quickly.',
    },
  ],
  related: ['quotation', 'invoice', 'proforma-invoice', 'purchase-order', 'payment-receipt', 'gst-invoice'],
};
