import type { BlogPost } from '@/data/blog-types';

export const blogPosts16: BlogPost[] = [
  {
    slug: 'transport-quotation-format-guide',
    title: 'Transport Quotation Format: How to Quote Freight Charges in India',
    seoTitle: 'Transport Quotation Format India 2026: Freight Rates, GST & Sample',
    metaDescription:
      'Learn how to write a transport quotation in India: per-km, per-trip and per-ton rates, GTA GST rules, detention charges and a ready-to-copy format.',
    keywords: [
      'transport quotation format India',
      'goods transport quotation sample',
      'truck freight quotation format',
      'GTA GST rate in quotation',
      'per km truck rate India',
      'transport bill format India',
      'how to quote transport charges',
    ],
    date: '2026-09-28',
    updatedDate: '2026-09-28',
    author: 'Prashant Upadhyay',
    readingTime: 9,
    category: 'Quotation Formats',
    heroImage: '/blog/transport-quotation.svg',
    heroAlt: 'Truck on a highway route between two cities with per-kilometre freight rate shown',
    excerpt:
      'A transport quotation is not a product price list. It is a route-specific, vehicle-specific commitment — and quoting it right is what separates serious transporters from phone-call operators.',
    intro:
      'Most transport business in India still runs on phone calls. A client rings up, asks "Delhi se Mumbai ka kya loge?", and the transporter quotes a number off the top of their head. That works for one-off trips. But the moment you want regular clients — factories, distributors, e-commerce sellers — they ask for a written quotation. And a written transport quotation is a different animal from a product quotation. The price depends on the route, the vehicle, the load, the season, and whether the truck gets a return load. Get any of these wrong on paper and you either lose money on the trip or lose the client to someone cheaper.',
    sections: [
      {
        heading: 'What makes a transport quotation different',
        body: 'A product quotation lists items with fixed rates. A transport quotation is a promise to move goods from point A to point B at a stated price, under stated conditions. The same truck costs a different amount for Delhi–Jaipur versus Delhi–Mumbai, for a full load versus a part load, and in peak season versus lean season.\n\nThis is why serious transporters never quote a single flat rate. They quote a rate basis — per kilometre, per trip, or per ton — and spell out exactly what is included and what is not. The quotation is where loading charges, unloading charges, waiting time, toll taxes, and GST treatment get decided before the truck moves. Arguments after delivery almost always trace back to something the quotation left vague.',
      },
      {
        heading: 'The 7 things every transport quotation must include',
        body: 'Before you worry about the rate itself, make sure these seven details are on every quotation you send. Corporate clients check for them, and missing any one of them is a reason to pick your competitor.',
        bullets: [
          'Loading point and unloading point with city names — never just "Delhi to Mumbai". Mention the exact pickup and delivery locations.',
          'Vehicle type and capacity — for example "14-ft closed container, up to 4 tons" or "32-ft open truck". Clients compare vehicle to vehicle.',
          'Rate basis and amount — per km, per trip, or per ton, stated clearly with the total trip cost.',
          'Loading, unloading and detention terms — who pays for labour, and what waiting charges apply after how many free hours.',
          'Transit time — promised delivery window in days. This matters more to clients than a small price difference.',
          'GST treatment — whether GST is charged by you or payable by the client under reverse charge, with the rate mentioned.',
          'Validity period — transport rates move with diesel prices. A 15-day validity is standard.',
        ],
      },
      {
        heading: 'How transporters actually calculate the rate',
        body: 'There is no mystery to freight pricing. Every experienced transporter works backwards from trip cost. For a one-way trip, the cost heads look roughly like this. Your quotation rate needs to cover all of them plus your margin — and critically, it needs to account for whether the truck is likely to find a return load.',
        table: {
          headers: ['Cost head', 'What it covers', 'Typical share of trip cost'],
          rows: [
            ['Fuel', 'Diesel for the loaded trip plus empty running', '35–45%'],
            ['Driver and helper', 'Wages, food and stay allowance', '10–15%'],
            ['Toll and permits', 'Toll plazas, state entry taxes where applicable', '5–8%'],
            ['Maintenance provision', 'Tyres, servicing, breakdown reserve per km', '8–12%'],
            ['Empty return risk', 'Cost of running empty if no return load is found', '10–20%'],
            ['Margin', 'Your profit after all costs', '10–15%'],
          ],
        },
      },
      {
        heading: 'GST on transport: the part most transporters get wrong',
        body: 'Goods Transport Agencies (GTA) have a special GST setup, and quoting it wrong creates real trouble. A GTA can choose between two options: charge 5% GST without claiming input tax credit, or charge 12% GST with input tax credit. Most small transporters pick the 5% option because it keeps paperwork simple.\n\nBut here is the catch many miss: when the recipient of the service is a specified person — a factory, a company, a registered dealer, among others — the GST is payable by the recipient under reverse charge (RCM), not by you. In that case your quotation should not add GST at all. It should state "GST payable by the recipient under RCM". Adding 5% on top when the client is supposed to pay under RCM either makes your quote look expensive or creates a compliance mess.',
        callout: {
          type: 'warning',
          text: 'Never add GST to your quotation without checking who bears it. If your client is a company or factory, RCM usually applies and the GST line on your quote should read "payable by recipient under reverse charge" instead of an amount.',
        },
      },
      {
        heading: 'Per-km vs per-trip vs per-ton: which basis to use',
        body: 'Per-kilometre rates work best for dedicated trips where the distance is fixed and known — say a regular Delhi–Ludhiana run. The client can verify the distance on a map, so the pricing feels transparent. Per-trip rates suit fixed routes you run repeatedly; you quote one number for the whole trip regardless of small distance variations.\n\nPer-ton rates make sense for bulk cargo like cement, grain, or steel, where the client thinks in tonnage. Here you must also state the minimum chargeable load — quoting ₹1,800 per ton means nothing if the client does not know whether a 5-ton load costs the full truck rate or the per-ton rate. Always mention "minimum billing 9 tons" or similar. Whichever basis you pick, show the total trip cost prominently. Clients compare totals, not rate bases.',
      },
      {
        heading: 'Detention, loading and night-halt charges',
        body: 'This is where transporters lose the most money, silently. The truck reaches the factory at 10 am, loading finishes at 7 pm, and nobody agreed what those 9 hours cost. Put it in the quotation: "2 hours free loading/unloading time at each end; detention charged at ₹500 per hour thereafter." Night halt — when the truck must wait overnight for unloading the next morning — should have a stated charge too, typically ₹1,000 to ₹2,000.\n\nThese clauses feel awkward to include, but clients respect them. A quotation with detention terms signals a professional operation. A quotation without them signals someone who will argue about it later.',
      },
      {
        heading: 'A simple transport quotation format you can copy',
        body: 'You do not need fancy software. A clean one-page quotation with this structure wins corporate business:',
        numbered: [
          'Header: your firm name, address, phone, GSTIN.',
          'Quotation number and date, plus "Valid for 15 days".',
          'Client name and address.',
          'Route line: "Transportation of goods from [loading point] to [unloading point]".',
          'Vehicle line: type, size and maximum load capacity.',
          'Rate: basis (per km / per trip / per ton) and total amount.',
          'Inclusions and exclusions: loading, unloading, toll, GST treatment, detention terms.',
          'Transit time and payment terms (advance plus balance on delivery is standard).',
          'Signature line with your name and phone number.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Do I need GST registration to run a transport business?',
        a: 'A GTA must register for GST regardless of turnover in most cases, because the reverse charge mechanism applies to the service. Even if you choose not to charge GST yourself, registration is generally required. Check with your tax consultant for your specific situation.',
      },
      {
        q: 'What is RCM in transport billing?',
        a: 'Under the Reverse Charge Mechanism, when a GTA provides service to specified recipients (factories, companies, registered dealers, etc.), the recipient — not the transporter — deposits the GST with the government. Your invoice then shows no GST; it mentions that tax is payable by the recipient under RCM.',
      },
      {
        q: 'Should my quotation include GST or exclude it?',
        a: 'Always state it explicitly either way. If you opt for the 5% or 12% forward-charge option, show "plus GST @ 5%" as a separate line. If RCM applies, write "GST payable by recipient under reverse charge". A quotation that is silent on GST invites disputes.',
      },
    ],
    relatedSlugs: ['how-to-write-a-professional-quotation', 'quotation-format-in-india', 'gst-in-quotations', 'payment-terms-in-quotations', 'how-to-send-quotation-on-whatsapp'],
  },
  {
    slug: 'packers-movers-quotation-guide',
    title: 'Packers and Movers Quotation Format: What a Fair Shifting Quote Looks Like',
    seoTitle: 'Packers and Movers Quotation Format 2026: Fair Price Guide',
    metaDescription:
      'What should a packers and movers quotation include? Binding vs non-binding estimates, cost breakup, insurance, GST and red flags to check before booking.',
    keywords: [
      'packers and movers quotation format',
      'house shifting quotation sample',
      'movers and packers charges India',
      'binding estimate packers movers',
      'packers movers bill format',
      '1bhk shifting charges India',
    ],
    date: '2026-09-28',
    updatedDate: '2026-09-28',
    author: 'Prashant Upadhyay',
    readingTime: 8,
    category: 'Quotation Formats',
    heroImage: '/blog/packers-movers.svg',
    heroAlt: 'Stacked moving boxes with a binding estimate price tag and insurance note',
    excerpt:
      'Three movers quote ₹8,000, ₹14,000 and ₹22,000 for the same 1BHK shift. This guide explains what a proper quotation contains so you can tell which price is real.',
    intro:
      'Ask three packers and movers for a quote to shift a 1BHK within the city and you will get three wildly different numbers. One says ₹8,000 on the phone. Another sends a detailed PDF for ₹14,000. A third quotes ₹22,000 with insurance. Most people pick the cheapest and regret it on moving day, when the "extra" charges appear: extra for packing material, extra for the fourth floor, extra because the truck was "smaller than expected". A proper written quotation exists precisely to prevent this. Whether you are a customer comparing quotes or a mover writing them, here is what a fair shifting quotation looks like.',
    sections: [
      {
        heading: 'Why moving quotes vary so wildly',
        body: 'Shifting is priced on inventory, not on flat rates. A 1BHK with minimal furniture costs half as much to move as a 1BHK packed wall-to-wall with books, plants, and a fish tank. Professional movers do a pre-move survey — in person or on video call — and list every item before quoting. Anyone who quotes without asking what you own is guessing, and guesses get revised upwards on moving day.\n\nDistance matters too, but less than people think for local shifts. The bigger cost drivers are packing material quality, number of labourers, floors involved (lift vs stairs), and whether dismantling and reassembly of furniture is included.',
      },
      {
        heading: 'Binding vs non-binding estimates',
        body: 'This is the single most important distinction in moving quotations, and most customers have never heard of it.',
        table: {
          headers: ['', 'Binding estimate', 'Non-binding estimate'],
          rows: [
            ['Price promise', 'Fixed. The final bill cannot exceed the quoted amount.', 'Approximate. Final bill depends on actual work done.'],
            ['When it changes', 'Only if you add items not in the original inventory list.', 'Can change for many reasons — more packing, extra labour, delays.'],
            ['Best for', 'Customers who want budget certainty.', 'Simple local moves with minimal goods.'],
            ['What to check', 'The inventory list attached to the quote must be complete.', 'Ask for the maximum possible variation in writing.'],
          ],
        },
      },
      {
        heading: 'Cost heads in a proper shifting quotation',
        body: 'A quotation that just says "1BHK shifting: ₹14,000" tells you nothing. A professional one breaks the price into these heads, so you can see what you are paying for and compare quotes head-to-head.',
        bullets: [
          'Packing material and packing labour — cartons, bubble wrap, foam, tape, plus the crew that packs. This is usually 30–40% of the total.',
          'Loading and unloading labour — number of workers and whether floor charges apply for stairs.',
          'Transportation — vehicle type and size, e.g. "14-ft container". For intercity moves, the route and transit days.',
          'Unpacking and arrangement — unpacking boxes and placing items where you want them. Many cheap quotes exclude this.',
          'Dismantling and reassembly — beds, wardrobes, and wall-mounted items. Confirm whether a carpenter is included.',
          'Insurance — transit insurance as a percentage of declared goods value, typically around 3%.',
          'GST — 18% on the taxable value, shown as a separate line.',
        ],
      },
      {
        heading: 'Insurance: the line everyone skips',
        body: 'Movers offer transit insurance at roughly 3% of the declared value of your goods. On ₹3 lakh of household goods, that is ₹9,000 — which is why most people decline it. Then a TV screen cracks in transit and there is no recourse.\n\nHere is the honest advice: for local shifts with a reputable mover, many people skip insurance and accept the small risk. For intercity moves, where goods change hands and travel 1,000+ km, insurance is worth it. Whatever you decide, the quotation should show insurance as a separate optional line, not bury it or omit it. A mover who does not mention insurance at all is cutting corners somewhere.',
        callout: {
          type: 'tip',
          text: 'Declare a realistic goods value for insurance. Declaring ₹50,000 for a house full of furniture saves a few hundred rupees on premium but makes any claim nearly worthless.',
        },
      },
      {
        heading: 'Red flags in a suspiciously cheap quotation',
        body: 'If a quote is 40% cheaper than everyone else, the discount is coming from somewhere. Watch for these signs:',
        numbered: [
          'No GSTIN on the quotation and no GST line in the breakup — the business may not be properly registered.',
          'Quote given only on phone or WhatsApp voice note, nothing in writing.',
          'Full advance demanded before moving day. A 10–20% token advance is normal; 100% upfront is not.',
          'No inventory list attached — which means the price can be "revised" for every item they claim was extra.',
          'Insurance not mentioned at all, and no option offered.',
          'Unrealistically low packing charges — a sign they will use thin cartons or charge for material on the day.',
        ],
      },
      {
        heading: 'How to compare three quotations like a pro',
        body: 'Line the quotes up head-to-head on five things: total price including GST, inventory list completeness, insurance option, payment schedule, and what happens if something breaks. The cheapest quote that is missing two of these is not cheaper — it is incomplete.\n\nAnd one practical tip: the mover who did a video survey before quoting almost always gives the most accurate price. The one who quoted blind gives the most "revisable" price. Accuracy is worth paying for when your belongings are in the truck.',
      },
    ],
    faqs: [
      {
        q: 'How much do packers and movers charge for a 1BHK local shift in India?',
        a: 'For a local shift within the same city, a 1BHK typically costs ₹8,000–₹15,000 including packing, transport and GST. Intercity moves cost far more depending on distance — a 1BHK from Delhi to Mumbai usually runs ₹18,000–₹35,000. Always get the breakup in writing rather than trusting a single number.',
      },
      {
        q: 'Is GST applicable on packers and movers services?',
        a: 'Yes. Packers and movers services attract 18% GST. The quotation should show GST as a separate line on the taxable value. Be cautious of movers who quote "all-inclusive" without mentioning GST — either they are absorbing it (unlikely at these margins) or they are not compliant.',
      },
      {
        q: 'How much advance should I pay to packers and movers?',
        a: 'A token advance of 10–20% at booking is standard and reasonable. The balance is usually paid on delivery after your goods arrive safely. Never pay the full amount upfront — you lose all leverage if something goes wrong during the move.',
      },
    ],
    relatedSlugs: ['how-to-write-a-professional-quotation', 'quotation-format-in-india', 'client-refuses-to-pay-what-to-do', 'payment-terms-in-quotations', 'how-to-send-quotation-on-whatsapp'],
  },
  {
    slug: 'wedding-photography-quotation-guide',
    title: 'Wedding Photography Quotation: How to Price and Present Your Packages',
    seoTitle: 'Wedding Photography Quotation 2026: Packages & Pricing Guide',
    metaDescription:
      'How to write a wedding photography quotation: package tiers, deliverables, advance, cancellation terms and travel charges — with a sample format.',
    keywords: [
      'wedding photography quotation format',
      'wedding photographer packages India',
      'candid photography charges India',
      'pre wedding shoot quotation',
      'wedding videography price India',
      'photography quotation sample',
    ],
    date: '2026-09-28',
    updatedDate: '2026-09-28',
    author: 'Prashant Upadhyay',
    readingTime: 8,
    category: 'Quotation Formats',
    heroImage: '/blog/wedding-photography.svg',
    heroAlt: 'Camera with wedding rings and three photography package price tiers',
    excerpt:
      'Couples do not buy "photography". They buy certainty that their once-in-a-lifetime day is captured. Your quotation should sell that certainty, not just list prices.',
    intro:
      'A couple planning a wedding in Jaipur gets photography quotes ranging from ₹25,000 to ₹2,50,000. To them, every quote looks like the same words — "candid + traditional, 2 days, album included". The photographer who wins is usually the one whose quotation made the deliverables concrete: how many shooters, how many edited photos, what size album, when they get it. Wedding photography is an emotional purchase, but the quotation is where emotion meets paperwork. Here is how to write one that converts enquiries into bookings while protecting you from scope creep.',
    sections: [
      {
        heading: 'Stop quoting a single number',
        body: 'The biggest mistake photographers make is replying to "what are your charges?" with one figure. A single number invites a single response: "thoda kam karo". Packages change the conversation. When a couple sees three tiers, they stop asking for discounts and start asking which package fits them — that is a fundamentally better conversation.\n\nThree tiers work because of how people choose. Most couples pick the middle one. So design your middle package as the one you actually want to sell: your best margins, your most efficient workflow. The top tier exists to make the middle look reasonable; the bottom tier exists to catch budget clients without you discounting the middle.',
      },
      {
        heading: 'What goes into each package tier',
        body: 'Every tier should answer the same questions so couples can compare them side by side. Here is a realistic structure for a two-day wedding:',
        table: {
          headers: ['Deliverable', 'Classic — ₹45,000', 'Premium — ₹85,000', 'Luxury — ₹1,50,000'],
          rows: [
            ['Coverage', '2 days, 1 photographer', '2 days, 2 photographers', '3 days, 3 photographers + drone'],
            ['Candid + traditional', 'Traditional only', 'Both', 'Both + same-day teaser'],
            ['Edited photos', '300', '600', '1,000'],
            ['Album', '1 (30 pages)', '2 (40 pages each)', '3 premium (50 pages each)'],
            ['Video', 'Traditional highlights', 'Cinematic trailer + full film', 'Trailer + film + reels'],
            ['Delivery time', '60 days', '45 days', '30 days'],
          ],
        },
      },
      {
        heading: 'Deliverables clients actually read (and fight over later)',
        body: 'Disputes in wedding photography almost never start with price. They start with "you said the album would be bigger" or "where are the rest of the photos?". Your quotation should nail down the details people assume: number of shooting hours per day (not just "full day"), whether raw unedited files are included (most photographers exclude them — say so explicitly), album page size and count, and the delivery timeline.\n\nTwo clauses save more friendships than anything else: a delivery timeline with a realistic buffer ("45–60 days" beats promising 30 and delivering at 55), and a clear statement on raw files. If you do not give raws, write "Only edited, high-resolution images will be delivered." It feels blunt. It prevents exactly the argument you do not want after a wedding.',
        callout: {
          type: 'tip',
          text: 'Add one line about overtime: "Coverage beyond 10 hours per day charged at ₹5,000 per hour." Indian weddings run late. This clause has saved countless photographers from 2 am arguments.',
        },
      },
      {
        heading: 'Advance and cancellation: protecting your dates',
        body: 'A wedding date blocked on your calendar is inventory you cannot sell twice. That is why the advance for wedding photography is higher than in most industries: 30–50% at booking is standard, and it should be explicitly non-refundable. State it plainly: "50% advance confirms your booking. The advance is non-refundable in case of cancellation."\n\nThen add a cancellation slab, because postponements are common: cancellation 60+ days before the event — advance forfeited, nothing more owed; 30–60 days — 75% of package payable; under 30 days — full package payable. Couples rarely object to this when they read it before booking. They object loudly when it appears for the first time after a cancellation.',
      },
      {
        heading: 'Outstation weddings: travel and stay',
        body: 'Destination weddings need a separate travel section in the quotation, or you will absorb costs you never planned for. List it as its own line items: travel (flights or mileage), accommodation (number of nights × rooms), and a per-day food allowance if the family is not providing meals. Some photographers bundle a flat "outstation charge"; others bill actuals with a cap. Either works — what does not work is silence, followed by an awkward expense claim after the wedding.\n\nAlso confirm who books the travel. If the family books your flights, say so. If you book and bill, say that. Missed flights and last-minute fare hikes have ended more photographer-client relationships than bad photos have.',
      },
      {
        heading: 'Presenting the quotation',
        body: 'Send it as a PDF, not a WhatsApp text wall. Put your best work on the first page — three or four standout images do more selling than any paragraph. Keep the package table on page one and push terms to page two; couples decide on emotion and justify with terms. End with a clear next step and a validity line: "This quotation is valid for 15 days. Dates are blocked only on receipt of advance."\n\nThat last line matters more than it looks. Wedding dates get decided fast, and "valid for 15 days" creates gentle urgency without pressure. It also protects you when your rates rise next season.',
      },
    ],
    faqs: [
      {
        q: 'How much advance should a wedding photographer take?',
        a: '30–50% of the package at the time of booking is the industry standard in India. The advance should be non-refundable since the date blocked cannot be resold. Take another 25–30% a week before the event, and the balance on delivery of the final photos and albums.',
      },
      {
        q: 'Do photographers need to charge GST?',
        a: 'Photography services attract 18% GST. If your annual turnover crosses the registration threshold (₹20 lakh for services in most states), you must register and charge GST. Many established photographers quote inclusive of GST — either way, state it clearly on the quotation.',
      },
      {
        q: 'Should I include raw unedited photos in the deliverables?',
        a: 'Most professional photographers do not include raw files, and you should state this explicitly in the quotation. Deliver edited, high-resolution JPEGs (and specify the count). If a client specifically wants raw files, treat it as a paid add-on rather than a default inclusion.',
      },
    ],
    relatedSlugs: ['how-to-write-a-professional-quotation', 'quotation-terms-and-conditions-checklist', 'payment-terms-in-quotations', 'how-to-send-quotation-on-whatsapp', 'freelancer-pricing-guide'],
  },
  {
    slug: 'printing-press-quotation-guide',
    title: 'Printing Press Quotation Format: How to Quote Per-Piece Jobs Correctly',
    seoTitle: 'Printing Press Quotation Format 2026: Rates, GSM & Quantity Slabs',
    metaDescription:
      'How to quote printing jobs correctly: paper GSM, size, colours, quantity slabs, design and delivery charges — with a ready quotation format.',
    keywords: [
      'printing quotation format India',
      'printing press rate card',
      'offset printing charges India',
      'visiting card printing quotation',
      'brochure printing cost India',
      'pamphlet printing rates',
    ],
    date: '2026-09-28',
    updatedDate: '2026-09-28',
    author: 'Prashant Upadhyay',
    readingTime: 8,
    category: 'Quotation Formats',
    heroImage: '/blog/printing-press.svg',
    heroAlt: 'Stacked printed paper sheets with quantity slab pricing per piece',
    excerpt:
      'Printing has more price variables than almost any other business — paper, size, colours, quantity, finishing. A quotation that names all of them looks professional and kills haggling.',
    intro:
      'A customer walks into a printing press and asks for "1,000 pamphlets". The printer quotes ₹2,500. The customer says the shop down the road quoted ₹1,800. Both quotes are meaningless because neither specified the paper, the size, the colours, or the GSM. Printing is one of the few businesses where the same product name can legitimately cost five times more or less depending on specifications. A proper printing quotation does not just give a price — it defines exactly what the customer is buying. Here is how to write one.',
    sections: [
      {
        heading: 'Why printing quotes confuse everyone',
        body: 'Ask for a "brochure" quote and you have said almost nothing. A brochure can be a single-folded A4 on 130 GSM art paper or a 12-page booklet on 250 GSM with lamination. The price difference is 10x. Customers do not know the terminology, so they compare the only thing they understand — the final number — and pick the cheapest. Then they are unhappy with thin paper and dull colours.\n\nYour quotation fixes this by educating while quoting. When every specification is named, the customer stops comparing your ₹4,200 against a competitor\'s ₹2,800 and starts asking the competitor what paper they planned to use. Specifications are your best defence against undercutting.',
      },
      {
        heading: 'The 6 variables that decide your printing price',
        body: 'Every printing quotation — from a visiting card to a product catalogue — is built from these six decisions. Name all six and your quote is complete.',
        numbered: [
          'Paper: type (art paper, maplitho, bond) and GSM (thickness). 300 GSM for visiting cards, 130–170 GSM for flyers, 250+ GSM for covers.',
          'Size: finished size after cutting — A4, A5, DL, or custom. Custom sizes waste paper and cost more; say so.',
          'Colours: single colour (black), two-colour, or four-colour (CMYK full colour). Four-colour is the standard for anything with photos.',
          'Quantity: the single biggest price lever. Always quote in slabs (see below).',
          'Finishing: lamination (matte/gloss), UV coating, embossing, die-cutting, binding type. Each is a separate line item.',
          'Design: whether the customer provides print-ready files or you design it. Design is skilled work — never bundle it silently.',
        ],
      },
      {
        heading: 'Quantity slabs: the heart of printing pricing',
        body: 'In offset printing, the setup cost (plates, machine setting) is fixed whether you print 500 or 5,000 copies. So the per-piece rate falls steeply with quantity. Quoting slabs does two things: it shows the customer the honest economics, and it nudges them to order more — which is better for both of you. Here is how a flyer quotation slab looks:',
        table: {
          headers: ['Quantity', 'Rate per piece', 'Total (A5, 130 GSM, 4-colour)'],
          rows: [
            ['1,000', '₹3.20', '₹3,200'],
            ['2,500', '₹2.10', '₹5,250'],
            ['5,000', '₹1.55', '₹7,750'],
            ['10,000', '₹1.15', '₹11,500'],
          ],
        },
      },
      {
        heading: 'What to show separately vs bundled',
        body: 'Bundle the core job (printing + paper + standard finishing) into the slab rates — that is what the customer compares. Show these as separate lines: design charges (per hour or flat, e.g. ₹800–₹2,000 for a flyer), delivery charges if applicable, and GST. Keeping design separate is important for a subtle reason: when the customer reorders next month with the same design, you can drop that line and they feel they got a deal, while your print margin stays intact.',
        callout: {
          type: 'warning',
          text: 'Never start printing without written proof approval — a signed physical proof or a "final approved" message with the file name and version. Colour and spelling disputes after printing are 100% avoidable and 0% winnable without this.',
        },
      },
      {
        heading: 'GST on printed material',
        body: 'GST on printed products depends on what is being printed, and this trips up many small presses. As a rule of thumb, most printed stationery and commercial printing falls under 12% or 18% GST depending on the HSN classification of the product. Do not guess — check the HSN code for the specific item (books and some printed materials have different treatment) and mention the rate on your quotation. Corporate clients will ask, and "GST extra as applicable" looks far less professional than "GST @ 18%".',
      },
      {
        heading: 'A printing quotation format that works',
        body: 'One page, this order: your press name and contact; quotation number and date; customer name; job description line ("A5 flyers, 130 GSM art paper, 4-colour both sides"); quantity slab table; separate lines for design, finishing extras, and delivery; GST line; payment terms (50% advance is standard for new customers); delivery timeline ("5 working days after proof approval"); and the proof-approval clause. That is it. No customer has ever complained that a printing quotation was too clear.',
      },
    ],
    faqs: [
      {
        q: 'What is GSM in printing?',
        a: 'GSM stands for grams per square metre — it measures paper thickness and weight. Higher GSM means thicker, sturdier paper. Visiting cards use 300–350 GSM, flyers 130–170 GSM, and letterheads 80–100 GSM. Always mention GSM in your quotation so the customer knows exactly what they are getting.',
      },
      {
        q: 'Why does the per-piece rate drop so much with higher quantity?',
        a: 'In offset printing, the setup cost — making plates and setting up the machine — is the same whether you print 500 or 10,000 copies. As quantity rises, this fixed cost spreads over more pieces, so each piece gets cheaper. Digital printing has almost no setup cost, which is why it is cheaper for very small runs.',
      },
      {
        q: 'Should I charge separately for design?',
        a: 'Yes. Design is skilled work with its own value, and bundling it hides that value. Charge a flat design fee (₹500–₹5,000 depending on complexity) as a separate line. When the customer reorders, you drop the design line — they feel rewarded for returning, and you keep your print margin.',
      },
    ],
    relatedSlugs: ['how-to-write-a-professional-quotation', 'quotation-format-in-india', 'hsn-code-guide-for-small-business', 'how-to-revise-a-quotation', 'payment-terms-in-quotations'],
  },
  {
    slug: 'e-invoicing-guide-india',
    title: 'E-Invoicing in India: IRN, QR Codes and What Small Businesses Must Know',
    seoTitle: 'E-Invoicing India 2026: IRN, QR Code, Threshold & Process',
    metaDescription:
      'E-invoicing explained for Indian businesses: who must generate IRN, the ₹5 crore threshold, how it works with e-way bills, and what changes on your invoice.',
    keywords: [
      'e-invoicing India',
      'IRN generation process',
      'e invoice turnover limit India',
      'e-invoicing QR code',
      'einvoice vs eway bill',
      'e-invoicing applicability 2026',
      'how to generate e-invoice',
    ],
    date: '2026-09-28',
    updatedDate: '2026-09-28',
    author: 'Prashant Upadhyay',
    readingTime: 9,
    category: 'GST & Tax',
    heroImage: '/blog/e-invoicing.svg',
    heroAlt: 'Invoice with IRN QR code showing e-invoicing compliance for Indian GST',
    excerpt:
      'E-invoicing does not mean emailing your invoice. It means getting every B2B invoice validated by the government portal before it counts. Here is the full picture.',
    intro:
      'Ask ten small business owners what e-invoicing means and seven will say "sending the invoice by email". It is not. E-invoicing under GST means reporting each of your B2B invoices to the government\'s Invoice Registration Portal (IRP), which validates it and returns a unique Invoice Reference Number (IRN) plus a signed QR code. Only then is your invoice considered valid. It sounds intimidating, but in practice your billing software does most of the work. What you need is to understand who it applies to, what changes on your invoice, and what happens if you ignore it.',
    sections: [
      {
        heading: 'E-invoicing is not emailing invoices — what it actually is',
        body: 'Under the normal system, you create an invoice in your software and send it to the customer. Under e-invoicing, there is one extra step in the middle: your software sends the invoice data to the IRP, the IRP checks it for errors and duplicates, and sends back an IRN and a digitally signed QR code. You print these on the invoice and then send it to the customer.\n\nThe government\'s goal is straightforward: if every B2B invoice is registered centrally, fake invoices and input tax credit fraud become much harder. For honest businesses, the practical effect is cleaner data — your GSTR-1 gets auto-populated from e-invoices, which means fewer mismatches with your buyers\' GSTR-2B.',
      },
      {
        heading: 'Who has to do it: the ₹5 crore rule',
        body: 'E-invoicing applies to GST-registered businesses whose Aggregate Annual Turnover (AATO) exceeds ₹5 crore in any financial year from 2017–18 onwards. Note the word "aggregate" — it includes all your GSTINs across states, and it includes exempt and export turnover, not just taxable sales.\n\nOnce you cross the threshold, e-invoicing applies from the next financial year and you cannot go back — even if your turnover later falls below ₹5 crore. Certain categories are exempt regardless of turnover, including government departments, financial institutions, and GTA transport services. If you are a regular manufacturer, trader, or service business above the threshold, assume it applies to you.',
        callout: {
          type: 'important',
          text: 'The ₹5 crore threshold counts aggregate turnover across all your GSTINs and includes exempt supplies. Many businesses discover they crossed it a year earlier than they thought. Check your AATO before assuming you are exempt.',
        },
      },
      {
        heading: 'How IRN generation actually works, step by step',
        body: 'In daily practice the process is mostly automated, but you should understand the steps so you can spot failures:',
        numbered: [
          'You create the invoice in your billing or ERP software as usual, with all mandatory GST fields.',
          'Your software converts it to the standard JSON format and sends it to the IRP (directly or through a GSP provider).',
          'The IRP validates the data — GSTINs, HSN codes, tax calculations — and checks for duplicate invoice numbers.',
          'The IRP returns the IRN (a unique 64-character hash), an acknowledgement number and date, and a signed QR code.',
          'Your software prints the IRN and QR code on the invoice. The invoice is now a valid e-invoice.',
        ],
      },
      {
        heading: 'What changes on your printed invoice',
        body: 'To the customer, your invoice looks almost the same — with two additions. Every e-invoice must carry the IRN (usually printed near the invoice number) and the signed QR code containing key invoice details. The acknowledgement number and date from the IRP should appear too.\n\nHere is what many businesses learn the hard way: an invoice without a valid IRN is not considered a valid invoice for B2B transactions once e-invoicing applies to you. Your buyer cannot claim input tax credit on it, which means they will come back to you. The QR code is not decoration — it is the proof the invoice was registered.',
      },
      {
        heading: 'E-invoice vs e-way bill: how they connect',
        body: 'These are two separate compliances that talk to each other. The e-invoice registers the commercial transaction; the e-way bill tracks the physical movement of goods. When you generate an e-invoice for goods, the e-way bill portal can auto-fill Part A (transaction details) from the IRP data — you only add the vehicle details in Part B.\n\nOne practical relief: for e-invoice-enabled taxpayers, a separate e-way bill is still required for movement of goods above ₹50,000, but the data entry is halved because the invoice details flow across automatically.',
        table: {
          headers: ['', 'E-invoice (IRN)', 'E-way bill'],
          rows: [
            ['Purpose', 'Validates the commercial invoice', 'Tracks physical movement of goods'],
            ['Applies to', 'B2B invoices (turnover above ₹5 cr)', 'Goods movement above ₹50,000'],
            ['Generated on', 'IRP (Invoice Registration Portal)', 'E-way bill portal'],
            ['Key output', 'IRN + signed QR code', 'E-way bill number'],
            ['Services', 'Required for B2B services too', 'Not required for services'],
          ],
        },
      },
      {
        heading: 'What happens if you do not comply',
        body: 'An invoice issued without an IRN, when e-invoicing applies to you, is treated as an invalid invoice. The immediate pain is commercial: your buyers cannot claim ITC on it, so they will reject it and delay your payment. Beyond that, penalties under GST law apply for incorrect invoicing. The IRP also enforces time limits — invoices must be reported within a specified window (currently 30 days for large taxpayers), so you cannot generate IRNs for old invoices months later.\n\nThe fix is not difficult: any modern billing software — including free and low-cost options — supports e-invoice JSON generation. The cost of compliance is small; the cost of a buyer refusing your invoice is not.',
      },
    ],
    faqs: [
      {
        q: 'Is e-invoicing mandatory for small businesses below ₹5 crore turnover?',
        a: 'No. E-invoicing currently applies only to businesses with aggregate annual turnover above ₹5 crore. Smaller businesses continue with regular GST invoicing. However, the threshold has been reduced several times since e-invoicing began, so it is wise to keep your billing software e-invoice-ready.',
      },
      {
        q: 'Can I generate an e-way bill without an e-invoice?',
        a: 'If e-invoicing applies to you, the e-way bill for goods should be generated from the e-invoice data — the portals are linked. Generating a standalone e-way bill while skipping the e-invoice leaves you non-compliant on the invoicing side. Do the e-invoice first; the e-way bill then takes seconds.',
      },
      {
        q: 'Do I need new software for e-invoicing?',
        a: 'You need software that can generate the standard e-invoice JSON and communicate with the IRP, either directly or through a GSP (GST Suvidha Provider). Most current billing and accounting software includes this. If yours does not, check for an update or switch before your applicability kicks in — manual IRN generation on the portal is not practical for daily volumes.',
      },
    ],
    relatedSlugs: ['gst-invoice-rules-guide', 'e-way-bill-rules-guide', 'how-to-write-professional-invoice-india', 'gst-in-quotations', 'hsn-code-guide-for-small-business'],
  },
];
