import type { BlogPost } from '@/data/blog-types';

export const blogPosts21: BlogPost[] = [
  {
    slug: 'e-way-bill-generate-india-when-needed',
    title: 'E-Way Bill in India: When You Need One and How to Generate It',
    seoTitle: 'E-Way Bill 2026: When You Need One & How to Generate It (Step by Step)',
    metaDescription:
      'Sending goods worth over ₹50,000? You need an e-way bill. Plain-language guide: when it is mandatory, how to generate Part A and Part B, validity by distance, and the transporter mistakes that get trucks detained.',
    keywords: [
      'e way bill generate',
      'when is e-way bill required',
      'e-way bill 50000 limit',
      'e-way bill part a part b',
      'e-way bill validity distance',
      'e-way bill mistakes transporters',
      'ewaybillgst.gov.in generate',
    ],
    date: '2026-10-07',
    updatedDate: '2026-10-07',
    author: 'Prashant Upadhyay',
    readingTime: 8,
    category: 'GST & Tax',
    heroImage: '/blog/e-way-bill-generate.svg',
    heroAlt: 'A loaded truck on a highway with a route pin and an e-way bill document showing the ₹50,000 threshold',
    excerpt:
      'Your goods are loaded, the truck is ready — and one missing document can get the whole consignment detained at a checkpost. Here is when you actually need an e-way bill, how to generate one in minutes, and the mistakes that cost transporters real money.',
    intro:
      'Picture this. It is 2 AM on a state highway and your truck carrying ₹2 lakh worth of machine parts has been pulled over at a checkpost. The officer asks for the e-way bill. Your driver calls you. You do not have one — nobody told you it was needed for this trip. What follows is detention, paperwork, and a penalty that makes the freight cost look like pocket change.\n\nThis is the scenario the e-way bill exists for, and it is far more common than most small business owners think. An e-way bill is simply an electronic document that must accompany the movement of goods above a certain value. It takes about five minutes to generate on the government portal, and not having one when you need it can cost you days and lakhs.\n\nThis guide covers the practical side: exactly when an e-way bill is mandatory, how to generate one step by step, how long it stays valid for your route, and the mistakes transporters repeat — so your goods move without drama. General information only; unusual movements (exports, job work chains, exempted goods) deserve a quick word with your CA.',
    sections: [
      {
        heading: 'Do you actually need one? The ₹50,000 test',
        body: 'The core rule is simple: if the consignment value of the goods being moved exceeds ₹50,000, an e-way bill is required. Consignment value means the value of the goods in that vehicle as per the invoice or delivery challan — not the freight charge, not the insurance.\n\nThree things people get wrong here. First, it is the movement of goods that triggers the requirement, not a sale. Sending your own machinery to a job site, goods sent for exhibition, stock transferred between your own branches in different states, goods sent for job work — all of these are movements of goods, and all of them need an e-way bill if the value crosses ₹50,000. "I was not selling anything" is not a defence.\n\nSecond, the ₹50,000 limit applies per consignment, not per invoice. Three invoices of ₹20,000 each in one truck add up to ₹60,000 — e-way bill needed. Third, some states have their own intra-state thresholds (a few states lowered it), so the safest habit for a business that ships regularly is to generate one whenever you are close to the limit. A wrong guess costs far more than the five minutes of generation.',
        callout: {
          type: 'tip',
          text: 'When in doubt, generate it. An unnecessary e-way bill costs you five minutes; a missing mandatory one costs you a detained truck.',
        },
      },
      {
        heading: 'The two halves: Part A and Part B',
        body: 'Every e-way bill has two parts, and understanding the split saves most of the confusion. Part A is the consignment information — GSTIN of sender and receiver, invoice or challan number and date, HSN code, value, and place of delivery. Anyone involved in the movement (you, your CA, the transporter) can fill Part A. Once Part A is filled, you get an E-way Bill Number (EBN), but the bill is not yet complete — that EBN is only valid for 15 days within which Part B must be filled.\n\nPart B is the vehicle information — the vehicle number carrying the goods. This is filled by whoever is actually moving the goods, usually the transporter, right before dispatch. You can also fill it yourself if you are moving goods in your own vehicle. Without Part B, the e-way bill is not valid for movement — a bill with only Part A filled is like a train ticket without a seat: it proves you booked, but you cannot travel.\n\nThe practical split this creates: your office fills Part A when the invoice is raised, and the transporter updates Part B from the loading dock using the EBN you shared. This division of labour is also where the first classic mistake happens — Part A filled on Monday, truck leaving on Wednesday, and nobody updated Part B with the actual vehicle number. Generate Part B as close to dispatch as possible.',
        bullets: [
          'Part A: consignment details (who, what, how much). Anyone can fill it; EBN issued but not yet valid for movement.',
          'Part B: vehicle number. Filled by the transporter at dispatch time; this activates the e-way bill.',
          'A Part-A-only EBN stays valid for 15 days for Part B to be filled.',
          'Share only the EBN (not portal login details) with your transporter to update Part B.',
        ],
      },
      {
        heading: 'Generating one, step by step',
        body: 'You generate e-way bills on the government portal ewaybillgst.gov.in (it works with your GST login). The whole process, once you have done it twice, takes under five minutes.\n\nFirst, log in and choose "Generate New" under the E-Way Bill menu. Select the transaction type: outward supply (you are sending goods out) is the common one; other options cover inward supply and non-supply movements like job work or branch transfers — pick honestly, it matters if you are ever checked. Enter the document details: invoice or challan number, date, and value. Then the from and to details: your GSTIN and pincode, the receiver\'s GSTIN (or URP for unregistered receivers) and pincode. Add the item details with HSN code and taxable value — the HSN needs at least 4 digits.\n\nSubmit Part A and note the EBN. Then fill Part B: transporter ID (or your own vehicle number), mode of transport, and the vehicle number. Submit, and the system generates the e-way bill with a validity window calculated from the distance. Print it or save the PDF — the driver should carry a physical or digital copy, and the QR code on it is what officers scan at checkposts.\n\nFor businesses generating several a day, the portal also allows bulk generation via JSON upload and there are APIs for accounting software — but for most small businesses, the manual five-minute flow is perfectly fine. What matters is that it becomes part of the dispatch routine: invoice raised, e-way bill generated, then the truck rolls.',
        numbered: [
          'Log in to ewaybillgst.gov.in with your GST credentials and choose "Generate New".',
          'Fill Part A: transaction type, invoice/challan details, from/to GSTINs and pincodes, item HSN and value.',
          'Note the EBN, then fill Part B: transporter ID, mode, and the actual vehicle number.',
          'Submit, save or print the e-way bill — the driver carries it (physical or digital) with the QR code.',
          'Build it into dispatch: invoice first, e-way bill second, truck rolls third.',
        ],
      },
      {
        heading: 'How long it stays valid — the distance table',
        body: 'An e-way bill is not open-ended; it has a validity calculated from the distance of the journey. For normal cargo, the rule is one day of validity for every 200 km or part thereof. A 450 km trip gets 3 days. For over-dimensional cargo (goods that cannot be dismantled and exceed normal vehicle dimensions), it is one day per 20 km.\n\nDay one starts from the date and time the e-way bill is generated, and the validity runs in calendar days. Here is what bites people: a truck stuck in a jam or a breakdown that pushes arrival past validity expiry. The portal allows extension — you can extend validity within 8 hours before or 8 hours after expiry, citing the reason. But extension is a rescue option, not a plan; an expired e-way bill during a check is treated as no e-way bill.\n\nPlan your generation timing. If the truck leaves Tuesday morning for a 900 km run, generating the bill Monday evening is fine (5 days validity) — but if loading gets delayed to Thursday, regenerate or check the window. The transporter updating Part B is also a good moment to sanity-check the distance-based validity against the actual route.',
        bullets: [
          'Normal cargo: 1 day validity per 200 km (or part thereof).',
          'Over-dimensional cargo: 1 day per 20 km.',
          'Extension possible within 8 hours before or after expiry, with a reason recorded.',
          'An expired bill at a checkpost is treated the same as no bill — check the window against the real route.',
        ],
      },
      {
        heading: 'The mistakes that get trucks detained',
        body: 'Now the expensive part. Mistake one: wrong or outdated vehicle number in Part B. Goods get transshipped to another truck mid-route (breakdown, hub transfer) and nobody updates Part B — at the next check, the vehicle number does not match the bill, and the goods are detained. Transshipment updates are mandatory; treat them as seriously as the original generation.\n\nMistake two: multiple consignments, one truck, one e-way bill. Each consignment needs its own e-way bill; the transporter can then generate a consolidated e-way bill (Form EWB-02) for the trip. Loading three customers\' goods under one bill is the fastest route to detention.\n\nMistake three: the "under ₹50,000" gamble on exempted-looking goods. Certain goods are exempt from e-way bills regardless of value (specified items like kerosene, LPG for domestic supply, and a few others), but the list is specific and short — assuming your goods are exempt without checking is how people end up explaining themselves at 2 AM.\n\nMistake four: letting validity quietly expire mid-route, especially on long inter-state runs with unpredictable halts. And mistake five: the driver carrying nothing — no printout, no PDF, no EBN. The law requires the person in charge of the conveyance to carry the e-way bill (physical or electronic) along with the invoice.\n\nWhat happens when you are caught: goods and conveyance can be detained under Section 129 of the CGST Act, and release requires paying a penalty that scales with the consignment — easily tens of thousands of rupees on a mid-size load, plus days of delay. The five-minute generation habit is the cheapest insurance in logistics.',
        callout: {
          type: 'warning',
          text: 'Transshipment without updating Part B is the single most common detention trigger. If goods change vehicles mid-route, the new vehicle number must go on the e-way bill before the truck moves again.',
        },
      },
    ],
    faqs: [
      {
        q: 'Is an e-way bill needed for movement below ₹50,000?',
        a: 'Generally no — the ₹50,000 consignment-value threshold is the trigger. But remember it is per consignment (all invoices in one vehicle combined), it covers non-sale movements like job work and branch transfers, and a few states set lower intra-state limits. When in doubt, generate one.',
      },
      {
        q: 'Can my transporter generate the e-way bill instead of me?',
        a: 'Yes — either party can generate it, and commonly your office fills Part A while the transporter fills Part B with the vehicle number. Share the EBN with the transporter; never share your portal login. If the transporter generates the whole bill, make sure the invoice details they enter match yours exactly.',
      },
      {
        q: 'What if the truck breaks down and the e-way bill expires?',
        a: 'Extend it on the portal — extension is allowed within 8 hours before or 8 hours after expiry, with a reason recorded. Do it before the truck resumes moving. An expired bill at a checkpost is treated the same as having no bill.',
      },
      {
        q: 'Do I need a separate e-way bill for each invoice in one truck?',
        a: 'Yes — each consignment needs its own e-way bill, and the transporter can then create a consolidated e-way bill (Form EWB-02) covering all of them for the trip. One bill for multiple customers\' goods will not survive a check.',
      },
      {
        q: 'What penalty applies if goods move without an e-way bill?',
        a: 'The goods and the vehicle can be detained under Section 129 of the CGST Act, and release involves a penalty linked to the consignment value — routinely tens of thousands of rupees even for mid-size loads, plus the delay. The exact amount depends on the case, so treat any quoted figure as indicative and confirm with your CA.',
      },
      {
        q: 'Does this replace professional tax advice?',
        a: 'No. This is general information on the standard e-way bill process. Exempted goods, exports, job-work chains, and multi-state movements have their own nuances, and portal procedures change. Confirm anything unusual with a qualified CA before the truck leaves.',
      },
    ],
    relatedSlugs: ['e-way-bill-rules-guide', 'transport-quotation-format-guide', 'delivery-challan-complete-guide', 'gstr-1-vs-gstr-3b-difference-india', 'gst-on-advance-payments-india', 'export-invoice-gst-lut-guide'],
    references: [
      { label: 'E-Way Bill Portal — ewaybillgst.gov.in', url: 'https://www.ewaybillgst.gov.in' },
      { label: 'CBIC — Central Board of Indirect Taxes & Customs', url: 'https://www.cbic.gov.in' },
    ],
  },
];
