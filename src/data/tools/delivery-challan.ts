import type { ToolContent } from './types';

export const deliveryChallanContent: ToolContent = {
  id: 'delivery-challan',
  seo: {
    title: 'Free Delivery Challan Generator — GST Challan Format PDF Online',
    description:
      'Generate GST-ready delivery challans online for free. Add vehicle number, transporter, LR number and purpose of transport, then download a print-ready PDF for triplicate copies. No signup required.',
    published: '2026-02-18',
    updated: '2026-08-07',
    keywords: [
      'delivery challan generator',
      'delivery challan format',
      'delivery challan format in GST',
      'delivery challan maker online free',
      'challan format pdf download',
      'delivery challan for job work',
      'delivery challan with vehicle number',
      'transport challan generator India',
      'delivery challan under rule 55',
      'goods dispatch challan online',
      'delivery challan',
      'challan maker',
      'delivery challan format',
      'challan format pdf',
      'delivery challan format under gst',
      'delivery challan for job work',
      'delivery challan format in word free download',
      'how to make delivery challan online',
      'challan generator online free',
      'delivery challan vs invoice',
      'delivery challan with vehicle number',
      'transport challan format',
    ],
  },
  h1: 'Free Online Delivery Challan Generator',
  intro:
    'Prepare a complete delivery challan in your browser — consignor, consignee, goods list, vehicle number, transporter and LR number — and download a print-ready PDF for the driver in seconds. Free, no signup, and everything stays on your device.',
  badge: {
    label: 'Logistics & Transport',
    colorClass: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-700',
  },
  theme: 'indigo',
  layout: {
    hero: 'manifest',
    howTo: 'cards',
    features: 'grid',
    useCases: 'accordion',
    example: 'table',
  },
  order: [
    'whatIs',
    'howTo',
    'custom',
    'widget',
    'proTips',
    'features',
    'example',
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
    'Rule 55 compliant dispatch document',
    'Transporter, vehicle and LR number fields',
    'Original, Duplicate and Triplicate copies',
    'For job work, branch transfers and approvals',
  ],
  widget: 'challan-checklist',
  relatedBlogSlugs: [
    'delivery-challan-complete-guide',
    'gst-invoice-rules-guide',
    'business-documentation-guide',
  ],
  customBlocks: [
    {
      kind: 'table',
      heading: 'When Does a Consignment Need an E-Way Bill?',
      intro:
        'A delivery challan covers the goods; an e-way bill covers their movement. Whether you need one depends on the consignment value, the distance and the reason for the movement. These are the thresholds in general force.',
      columns: ['Movement', 'E-way bill needed?', 'Notes'],
      rows: [
        [
          'Inter-state, consignment value above ₹50,000',
          'Yes',
          'Generate before the goods move. Part A holds the consignment details, Part B the vehicle number.',
        ],
        [
          'Intra-state, consignment value above ₹50,000',
          'Usually yes',
          'States set their own intra-state threshold and some raised it to ₹1 lakh or higher. Check your own state\'s notification rather than assuming.',
        ],
        [
          'Inter-state job work, any value',
          'Yes',
          'Value is irrelevant here. The principal or the job worker must raise it even for a small consignment sent for processing.',
        ],
        [
          'Handicraft goods moved inter-state by an unregistered person',
          'Yes',
          'Another case where the ₹50,000 threshold does not apply.',
        ],
        [
          'Distance under 50 km within the same state',
          'Part A only',
          'Where the movement is between consignor and transporter, or transporter and consignee, Part B (vehicle details) may be left out.',
        ],
        [
          'Non-motorised transport',
          'No',
          'Goods moved by handcart or similar are outside the requirement, as are certain exempt goods and movements from port to inland container depot for customs clearance.',
        ],
      ],
      note:
        'Validity runs by distance — broadly one day per 200 km for regular cargo, with longer allowances for over-dimensional consignments. If the vehicle breaks down or the goods are transhipped, update Part B before the movement continues; an expired or mismatched e-way bill is what detention proceedings are built on.',
    },
    {
      kind: 'checklist',
      heading: 'What Must Physically Travel With the Goods',
      intro:
        'A driver stopped at a check post cannot produce what was left on someone\'s desk. This is what should be in the vehicle before it leaves your premises.',
      items: [
        {
          title: 'The delivery challan, in triplicate',
          text: 'Marked Original for Consignee, Duplicate for Transporter and Triplicate for Consigner. The duplicate stays with the driver, the original is handed over on delivery, and the triplicate returns to you as the dispatch record.',
        },
        {
          title: 'The e-way bill number, where one is required',
          text: 'The EBN can be carried on paper, mapped to an RFID device, or shown from a phone. A number the driver cannot produce at all is treated as no e-way bill.',
        },
        {
          title: 'The tax invoice, if the movement is a supply',
          text: 'Where the goods are being sold rather than merely moved, the invoice travels too. The challan alone is not sufficient documentation for a taxable supply in transit.',
        },
        {
          title: 'A declaration of the reason for transportation',
          text: 'Job work, branch transfer, goods on approval, exhibition, line sales or repair and return. This is the field that explains why goods worth several lakhs are moving with no invoice attached.',
        },
        {
          title: 'Vehicle number matching the e-way bill Part B',
          text: 'If the load is transhipped to a different vehicle mid-route, Part B must be updated before the new vehicle moves. A vehicle number that does not match the bill is the single most common cause of detention.',
        },
        {
          title: 'Transporter ID or LR number',
          text: 'Where a third-party transporter carries the consignment, their GSTIN or enrolment ID and the lorry receipt number tie the physical movement to the paperwork.',
        },
      ],
    },
  ],
  whatIs: {
    heading: 'What Is a Delivery Challan Under GST?',
    paragraphs: [
      'A delivery challan is a dispatch document that travels with goods when they move from one place to another without a tax invoice. Rule 55 of the CGST Rules specifically permits this for situations where a sale has not (yet) happened: sending materials to a job worker, moving stock to your own branch or godown, supplying goods on approval, or taking products to an exhibition or trade fair. The challan lists what is being moved, in what quantity, from whom, to whom, and why.',
      'The key distinction from an invoice is intent. An invoice demands payment and transfers ownership; a challan merely evidences movement. That is why goods sent for job work or displayed at an exhibition travel on a challan — they are still your property and no tax event has occurred. If the goods are later sold (say a customer at the exhibition buys a piece), a proper tax invoice is raised at that point, referencing the challan under which the goods travelled.',
      'A well-made challan carries a serial number, the challan date, consignor and consignee details with GSTINs where registered, an HSN-wise description of the goods with quantities and approximate value, the purpose of transport, and the transport particulars — transporter name, vehicle number and LR/docket number. Our generator has dedicated fields for each of these, plus a receiver\'s name line so the person taking delivery can sign and acknowledge the goods.',
    ],
  },
  howTo: {
    heading: 'How to Create a Delivery Challan in 4 Steps',
    steps: [
      {
        title: 'Fill in consignor and consignee details',
        text: 'Enter your business name, address and GSTIN as the consignor, and the delivery address as the consignee — a customer site, your branch, a job worker\'s unit or an exhibition venue. Upload your logo and watch the live preview update as you type.',
      },
      {
        title: 'List the goods being dispatched',
        text: 'Add each item with its description, HSN code, quantity, unit and value. The challan defaults to no-tax mode because a challan is not a tax document — quantities and values print cleanly without a GST breakup.',
      },
      {
        title: 'Add transport details and purpose',
        text: 'Record the transporter name, vehicle number, LR/docket number and dispatch mode (road, rail or courier), then pick the purpose of transport — Supply, Job Work, Exhibition, Own Use or Returnable — so the reason for movement is unambiguous if the vehicle is checked.',
      },
      {
        title: 'Download and print copies',
        text: 'Choose a template, add your signature and stamp, and download the PDF or PNG. Print the copies you need for the driver, the receiver and your own file, or share the challan on WhatsApp with the transporter directly.',
      },
    ],
  },
  features: {
    heading: 'Built for Real Goods Dispatch, Not Just Paperwork',
    items: [
      {
        title: 'Dedicated transport fields',
        text: 'Transporter name, vehicle number, LR/docket number and dispatch-through fields are part of the form — no squeezing logistics details into a notes box.',
      },
      {
        title: 'Purpose of transport selector',
        text: 'Tag the challan as Supply, Job Work, Exhibition, Own Use, Returnable or Others so anyone inspecting the consignment sees the Rule 55 reason for moving goods without an invoice.',
      },
      {
        title: 'Receiver acknowledgment line',
        text: 'A named receiver\'s signature block prints on the challan, giving you documented proof that the goods reached the right person in the stated quantity and condition.',
      },
      {
        title: 'No-tax mode by default',
        text: 'Because a challan is not a demand for payment, this tool opens in no-tax mode showing quantities and approximate values only — exactly how a dispatch document should look.',
      },
      {
        title: '25 templates with logo, stamp and signature',
        text: 'Pick a layout that matches your letterhead, upload your logo, authorised signature and company stamp, and export an A4-perfect PDF or PNG every time.',
      },
      {
        title: 'Autosave with zero signup',
        text: 'The challan saves itself in your browser\'s localStorage as you type, so a dropped connection at the loading dock never loses your work — and nothing is uploaded to any server.',
      },
    ],
  },
  useCases: {
    heading: 'When Do Businesses Issue a Delivery Challan?',
    intro:
      'Any time goods travel without a sale being completed, a challan should ride along. These are the movements our users document most often:',
    items: [
      {
        title: 'Sending materials for job work',
        text: 'Fabricators, garment units and machine shops send raw material or semi-finished goods to job workers on a challan, then match the return challan against it to reconcile quantities.',
      },
      {
        title: 'Stock transfers to branches and godowns',
        text: 'Traders moving inventory between their own warehouse and retail outlets use an Own Use challan, since transferring your own stock within a state is not a sale.',
      },
      {
        title: 'Exhibitions, trade fairs and demos',
        text: 'Manufacturers taking display pieces to expos mark the challan Exhibition or Returnable, proving the goods are travelling for display and are expected back unsold.',
      },
      {
        title: 'Supply on approval basis',
        text: 'Jewellers, furniture showrooms and equipment dealers send goods for the customer to inspect before buying; the challan covers the outward trip and a tax invoice follows only if the customer keeps the goods.',
      },
    ],
  },
  example: {
    heading: 'Challan Example: Furniture Sent to a Trade Exhibition',
    intro:
      'A Jodhpur furniture maker is sending display pieces to a three-day furniture expo in Bengaluru. The goods are not sold — they travel on a challan marked Exhibition, with full transport details for the interstate journey:',
    rows: [
      { label: 'Sheesham wood dining table, 6-seater (2 nos @ ₹38,000)', value: '₹76,000.00' },
      { label: 'Carved bookshelf, 5-tier (4 nos @ ₹14,500)', value: '₹58,000.00' },
      { label: 'Vehicle Number / Transporter', value: 'RJ-19-GA-4521 / VRL Logistics' },
      { label: 'LR No. & Purpose', value: 'LR-884213 · Exhibition (Returnable)' },
      { label: 'Approximate Value of Goods', value: '₹1,34,000.00' },
    ],
    outro:
      'Challan DC-2026-0031 travels with the truck alongside the e-way bill (mandatory here since the consignment value exceeds ₹50,000 and crosses state lines). At the venue, the event coordinator named in the Receiver\'s Name field signs the duplicate copy. Pieces that sell at the expo get a tax invoice on the spot; the rest return to Jodhpur against the same challan reference.',
  },
  sections: [
    {
      heading: 'Delivery Challan vs Invoice: Which One Do You Need?',
      paragraphs: [
        'Use an invoice when ownership changes hands and money is owed; use a challan when goods merely change location. Dispatching a confirmed order? The tax invoice itself can accompany the goods, or you can send a challan with the vehicle and raise the invoice separately. Sending goods where no sale exists yet — job work, branch transfer, approval, exhibition — an invoice would be wrong, because it would book revenue and tax on a transaction that has not happened.',
        'The two documents also work together. Many businesses dispatch against a challan, get the receiver\'s signed acknowledgment back, and then raise the invoice quoting the challan number — a clean audit trail proving that what was billed is exactly what was delivered and accepted. If a shortage or damage dispute arises later, the signed challan is your first line of evidence.',
        'One caution: a challan is never a substitute for a tax invoice on an actual sale. If goods were sold and moved on a challan alone, GST officers can treat it as an attempt to move goods without paying tax. When in doubt about a genuine supply, raise the invoice.',
      ],
    },
    {
      heading: 'The Triplicate Convention and E-Way Bill Rules',
      paragraphs: [
        'Rule 55 prescribes challans in triplicate: the original marked "Original for Consignee" stays with the goods and is handed to the receiver, the duplicate marked "Duplicate for Transporter" remains with the carrier, and the triplicate marked "Triplicate for Consignor" comes back to your records — ideally with the receiver\'s signature. Print three copies of the PDF from this tool and mark them accordingly, and have the receiver sign your file copy at delivery.',
        'The e-way bill is a separate, electronic requirement that sits on top of the challan. Whenever the consignment value exceeds ₹50,000 (lower thresholds apply for intra-state movement in some states), an e-way bill must be generated on the government portal before the vehicle moves — even for non-sale movements like job work or exhibitions, using the challan as the base document. The vehicle number and transporter details you enter on this challan are the same particulars the e-way bill asks for, so filling the challan first makes the portal entry a two-minute copy job.',
      ],
    },
    {
      heading: 'Free Forever, and Private by Design',
      paragraphs: [
        'Every part of this delivery challan generator is free — unlimited challans, all 25 templates, PDF and PNG downloads, WhatsApp sharing and QR codes, with no watermark and no account. There is nothing to install and nothing to subscribe to; open the page at the dispatch desk and start typing.',
        'Your dispatch data — customer addresses, goods, values, vehicle numbers — is saved only in your own browser via localStorage. It is never uploaded to our servers, so commercially sensitive movement information stays inside your business. Duplicating yesterday\'s challan for today\'s repeat dispatch to the same job worker takes seconds: your last challan loads automatically, and you just change the number, date and quantities.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Is a delivery challan valid without a GST invoice?',
      a: 'Yes — for non-supply movements. Rule 55 of the CGST Rules allows goods to move on a challan alone for job work, supply on approval, exhibitions, transport of goods for own use and similar cases where no sale is taking place. For an actual sale, a tax invoice is still required.',
    },
    {
      q: 'Do I need an e-way bill along with the delivery challan?',
      a: 'If the consignment value exceeds ₹50,000, yes — generate an e-way bill on the government portal using the challan as the supporting document, even for job work or exhibition movements. Below that threshold the challan alone is generally sufficient, though some states set lower intra-state limits.',
    },
    {
      q: 'How do I record the vehicle number and transporter on the challan?',
      a: 'The Transport Details section of the form has separate fields for transporter name, vehicle number, LR/docket number and dispatch mode. They print in a clearly labelled block on the challan so checkposts and receivers can verify the consignment against the vehicle.',
    },
    {
      q: 'What does printing in triplicate mean, and does this tool support it?',
      a: 'Convention (and Rule 55) calls for three copies: original for the consignee, duplicate for the transporter, triplicate for the consignor. Simply print the downloaded PDF three times and mark each copy — the layout is identical, so all three always match.',
    },
    {
      q: 'Should the challan show GST amounts?',
      a: 'Usually not, which is why this tool defaults to no-tax mode. A challan states quantities and the approximate value of goods; tax is charged on the invoice, not the challan. If your workflow needs a taxable value shown, you can switch the tax mode on in the editor.',
    },
    {
      q: 'What is the purpose field for, and which option should I pick?',
      a: 'It states the Rule 55 reason the goods are moving without an invoice. Choose Job Work for material sent to a processor, Exhibition for expo displays, Own Use for branch or godown transfers, Returnable when goods will come back, and Supply when the challan accompanies a regular dispatch.',
    },
    {
      q: 'Why is there a receiver\'s name field on the challan?',
      a: 'Naming the person expected to take delivery — a storekeeper, site supervisor or event coordinator — and getting their signature on your copy gives you dated proof of receipt. In quantity or damage disputes, that signed acknowledgment is the document everyone falls back on.',
    },
    {
      q: 'Is this delivery challan generator really free, and where is my data stored?',
      a: 'Completely free — no signup, no limits, no watermark. Challans autosave in your browser\'s local storage on your own device and are never uploaded, unless you explicitly use the share link feature for a specific document.',
    },
    {
      q: 'When is a delivery challan required instead of a tax invoice?',
      a: 'A delivery challan is required when goods are transported without a tax invoice — either because the tax invoice is not yet raised or cannot be raised at that time. The CGST Rules (Rule 55) list the permitted situations: supply of liquid gas where quantity is determined at the point of delivery, goods sent on approval for the recipient to inspect before buying, job-work dispatches from principal to job-worker and back, and intra-state branch transfers. Outside these situations, the normal rule is to transport goods with a tax invoice.',
    },
    {
      q: 'Is a delivery challan a GST document?',
      a: 'A delivery challan is a movement document prescribed under CGST Rule 55 — it is part of the GST compliance framework but it is not a tax invoice and does not create a tax liability or input credit entitlement. Think of it as the goods\' travel permit, not the commercial transaction record. The tax invoice must follow separately for the supply to be formally completed under GST.',
    },
    {
      q: 'Does a delivery challan need to be issued in three copies?',
      a: 'Yes, under CGST Rule 55(2): the original (marked "Original for Consignee") accompanies the goods for the recipient, the duplicate (marked "Duplicate for Transporter") is carried by the transporter, and the triplicate (marked "Triplicate for Consignor") is retained by the supplier. When using a digital challan, print three copies before dispatch — transporters at check posts and warehouses require the physical document.',
    },
    {
      q: 'What is the difference between a delivery challan and a lorry receipt?',
      a: 'A delivery challan is issued by the supplier and travels with the goods as proof of dispatch. A lorry receipt (LR) — also called a goods receipt note in rail/air transport — is issued by the transporter as evidence that they have received the goods for transport. Both accompany a consignment, but they serve different purposes: the challan proves what was dispatched, and the LR/GRN proves who is transporting it.',
    },
    {
      q: 'Does a delivery challan need an e-way bill for all dispatches?',
      a: 'Not for all dispatches. An e-way bill is required when the value of goods in transit exceeds \'50,000 for inter-state movement. For intra-state movement, the threshold varies by state — most states align with \'50,000 but some have higher limits or category-specific exemptions. For movements below the threshold, or for categories like job work within 50 km, or for non-supply movements within the state, a delivery challan alone (without an e-way bill) is sufficient.',
    },
    {
      q: 'Can a delivery challan be used for job-work dispatches?',
      a: 'Yes, and it is the prescribed document for job-work under GST. When a principal sends goods to a job-worker for processing (e.g. a fabric manufacturer sending cloth to an embroidery unit), the challan documents the goods going out and a second challan accompanies the goods on their return after processing. Both challans must be retained — the job-work challan chain is what allows the principal to claim ITC for inputs used in job work.',
    },
    {
      q: 'Is a delivery challan required for goods returned to the supplier?',
      a: 'Yes. When a buyer returns goods, they should issue a return delivery challan (sometimes called a gate pass) documenting what is being returned, the original invoice number and the reason for return. This provides the supplier with a document to raise a credit note, update their inventory, and support their ITC reversal if applicable. Without a return challan, return transactions are difficult to reconcile in the books of both parties.',
    },
    {
      q: 'Does a delivery challan need a serial number?',
      a: 'Yes. Under GST rules, challans must be serially numbered within a financial year — you cannot reuse numbers or skip them. The serial number can be alphanumeric (e.g. DC-2026-0001) but must be consecutive. Sequential numbering is also practically important: your own dispatch register, your customer\'s goods receipt register, and any third-party audit will all use the challan number as the reference.',
    },
    {
      q: 'What details are mandatory on a delivery challan under GST?',
      a: 'CGST Rule 55 requires: the word "Delivery Challan" at the top, a serial number (up to 16 characters), the date of issue, your GSTIN and address, the consignee\'s name and address, the HSN code and description of goods, quantity in standard units, taxable value, and applicable tax rate (even though tax is not collected on the challan). The transporter\'s name, vehicle number and LR number should also be included in practice.',
    },
    {
      q: 'Can a delivery challan serve as a proof of delivery for a legal dispute?',
      a: 'A delivery challan signed by the recipient (GRN acknowledgement) is strong evidence of delivery — it documents what was delivered, when, and who received it. An unsigned challan is evidence of dispatch, not receipt. For any dispute about whether goods were delivered, the signed copy retained by the supplier is the primary evidence. Always insist on a countersigned copy — ask the warehouse person or driver to have the recipient sign and stamp if possible.',
    },
    {
      q: 'Do I need a delivery challan for service delivery?',
      a: 'No. Delivery challans are exclusively for the physical movement of goods. Services do not have a "delivery" in the physical sense, and a tax invoice for services is the primary documentation of service completion. However, some service businesses (such as equipment rental or repair) dispatch physical equipment alongside a service contract — in that case, a challan documents the equipment movement while the service agreement documents the service.',
    },
    {
      q: 'How does a delivery challan link to the final tax invoice?',
      a: 'The delivery challan references the goods being sent and creates an obligation to issue a tax invoice for that supply. The final tax invoice should cross-reference the challan number(s) it settles — this ties the dispatch record to the commercial transaction record. For a single delivery, one challan leads to one invoice. For phased deliveries against one order, each challan leads to a separate invoice or one consolidated invoice that lists all challan numbers.',
    },
  ],
  relatedHeading: 'Documents That Travel Alongside a Challan',
  relatedNote:
    'A challan moves the goods; these are the documents that order them and bill for them.',
  related: ['gst-invoice', 'invoice', 'purchase-order', 'quotation', 'payment-receipt', 'credit-note'],

  proTips: {
    heading: 'Delivery Challan Best Practices for Safe Goods Movement',
    items: [
      {
        icon: '🚚',
        title: 'Carry three copies of the challan: consignor, transporter, consignee',
        text: 'GST rules require a delivery challan in triplicate — one for the supplier, one for the consignee, and one for the transporter. The transporter copy stays in the vehicle for the entire journey. During a road check, this is the document that decides whether goods are released or detained. A driver without a copy of the challan faces a goods seizure under GST rule 55A.',
      },
      {
        icon: '📋',
        title: 'Match quantities exactly between PO, challan and invoice',
        text: 'A common warehouse error is loading 48 units against a PO for 50 and printing the challan for 50. The discrepancy shows up when the consignee inspects the delivery, by which point the truck has left. Count the physical goods, then print the challan. Short shipments and the credit notes they trigger are entirely preventable.',
      },
      {
        icon: '🗒️',
        title: 'List HSN codes on every supply challan, even below the e-way bill threshold',
        text: 'HSN codes on a delivery challan are not mandatory for movements below the e-way bill threshold, but including them prevents questions at the consignee end about what exactly is being delivered, and makes conversion to a tax invoice seamless. It also helps if the goods are checked at a state border and a local inspector asks for a description.',
      },
      {
        icon: '📦',
        title: 'For goods sent on approval, state the return date on the challan',
        text: 'When goods are sent for approval, trial or exhibition, a delivery challan is the correct document — not an invoice. Include a line saying "Goods sent on approval — return by [date] if not purchased" and mark the challan as non-taxable. Without this, a tax officer can treat the movement as a taxable supply and raise a demand.',
      },
      {
        icon: '🎨',
        title: 'Photograph the goods condition before dispatch',
        text: 'For fragile, high-value or customised goods, photograph the packed shipment before it leaves. If the consignee claims goods arrived damaged, you have timestamped evidence of their condition at dispatch — which determines whether the damage occurred in transit (transporter\'s liability) or at the destination after acceptance.',
      },
      {
        icon: '✍️',
        title: 'Get the consignee\'s signature and stamp on delivery',
        text: 'The received copy of the challan, signed and stamped by the consignee on delivery, is your proof of successful delivery. It is what you present if the buyer later claims they never received the goods, and it is what triggers the right to raise a final invoice for milestone-billed contracts.',
      },
    ],
  },

  mistakes: {
    heading: 'Delivery Challan Mistakes That Cause GST Problems and Disputes',
    intro:
      'Goods movement under GST is heavily document-dependent. These errors at the challan stage have downstream consequences — some legal, some operational, some financial.',
    items: [
      {
        mistake: 'Moving goods above ₹50,000 without e-way bill',
        impact: 'Goods can be seized and a penalty of ₹10,000 or 100% of tax due (whichever is higher) can be levied.',
        fix: 'Generate the e-way bill before dispatch and record the 12-digit number on the challan.',
      },
      {
        mistake: 'No challan number or sequential series',
        impact: 'Cannot cross-reference the challan in the final invoice; audit trail is broken.',
        fix: 'Use a sequential DC series — DC-2026-001 — and reference it on the corresponding invoice.',
      },
      {
        mistake: 'Quantity on challan differs from physical goods loaded',
        impact: 'Short delivery disputes; consignee raises a debit note for the shortage.',
        fix: 'Count actual goods loaded, then print the challan — never print first and count later.',
      },
      {
        mistake: 'No transporter details',
        impact: 'Vehicle check without transporter name and LR number triggers scrutiny.',
        fix: 'Record vehicle number, transporter name and LR/GR number on every challan.',
      },
      {
        mistake: 'Using a challan as a tax invoice',
        impact: 'Consignee claims ITC on a document that is not a valid tax invoice.',
        fix: 'Issue a delivery challan for movement and a separate tax invoice for billing.',
      },
      {
        mistake: 'No consignee signature on received copy',
        impact: 'No proof of delivery if buyer disputes receipt of goods.',
        fix: 'Require a dated signature and stamp on the consignee copy before the vehicle leaves.',
      },
    ],
  },
  industries: {
    heading: 'Delivery Challans by Industry — Movement Documents in Practice',
    intro: 'Every physical goods movement requires documentation — here is how each sector uses delivery challans for compliance and operational control.',
    items: [
      {
        name: 'Manufacturing & Dispatch',
        icon: 'Factory',
        text: 'Manufacturers issue challans for every goods movement — finished goods to distributors, raw materials to job-workers, and inter-unit branch transfers. The challan and e-way bill together form the goods\' travel documents, and no truck leaves the factory gate without both.',
        detail: 'Maintain a challan register in the dispatch bay with the driver\'s signature — transport department audits routinely use this register to verify that every outward movement has a corresponding GST-compliant document.',
      },
      {
        name: 'Construction Materials',
        icon: 'HardHat',
        text: 'Brick kilns, sand suppliers, steel stockists and readymix concrete plants issue challans for every delivery to site. The site engineer matches each challan against the quantity actually received and raises a goods receipt note (GRN) — only challan-matched GRNs trigger payment.',
        detail: 'For cement and steel, include the batch or heat number on the delivery challan — clients\'  quality control teams need to trace materials back to their certificates of conformity, and the challan is the first link in that chain.',
      },
      {
        name: 'Retail & Wholesale Delivery',
        icon: 'Store',
        text: 'Distributors and wholesalers issue challans for retail outlet deliveries, distinguishing consignment stock (goods sent on approval that are not yet a sale) from outright sale deliveries. Consignment challans are closed when the retailer reports actual sales.',
        detail: 'For consignment deliveries, stamp the challan "Consignment — Title Not Transferred" clearly — this prevents the retailer from treating consignment stock as a purchase and claiming ITC before the goods are actually sold.',
      },
      {
        name: 'Medical & Pharmaceutical',
        icon: 'Stethoscope',
        text: 'Pharmaceutical distributors issue challans for every batch delivery to hospitals, clinics and pharmacies, with batch number, manufacturing date and expiry date listed per item. These fields are mandatory for cold-chain compliance and recall traceability.',
        detail: 'Medical challan numbers must be recorded in hospital receiving logs — in any product recall, the hospital\'s ability to identify and quarantine affected batches depends on challan number to batch number traceability.',
      },
      {
        name: 'Automobile & Spare Parts',
        icon: 'Car',
        text: 'Spare parts distributors and OEM stockists issue challans for dealership restocking and inter-depot transfers. Vehicle delivery to dealerships from manufacturers is documented with a form 22 (notified by state RTO) alongside the challan.',
        detail: 'Spare parts challans should reference the OEM part number alongside the internal stock code — dealerships reconcile parts receipts against OEM part numbers, not internal codes, and mismatches delay the goods receipt entry.',
      },
      {
        name: 'IT Hardware & Equipment',
        icon: 'Laptop',
        text: 'IT hardware distributors issue challans for equipment deliveries to corporate clients and resellers, with serial numbers listed per device. The challan\'s serial numbers later appear on the final tax invoice, which the client uses for asset registration.',
        detail: 'List the serial number of every device on the IT hardware challan — if even one unit is found faulty after delivery, the serial number on the challan is the basis for warranty replacement, and a challan without serial numbers leads to disputes about which unit was delivered.',
      },
      {
        name: 'Interior Design & Furnishing',
        icon: 'Sofa',
        text: 'Furniture manufacturers and modular kitchen suppliers issue challans for deliveries to installation sites, listing each item, its dimensions and the room it is destined for. A second challan is raised for any items sent back for rework or modifications.',
        detail: 'Include the floor and room number on furniture challans for multi-storey projects — generic site address challans cause confusion when multiple project phases are running on the same site simultaneously.',
      },
      {
        name: 'Hospitality & F&B Supply',
        icon: 'UtensilsCrossed',
        text: 'Food and beverage suppliers to hotels and restaurants issue daily challans for perishable deliveries, with weight, grade and unit price listed per item. The hotel receiving department matches each challan to the purchase order and raises a GRN for accepted quantities.',
        detail: 'Temperature-sensitive F&B challans should have a temperature log column that the driver and receiving staff both sign — this creates evidence of cold-chain maintenance, which is critical for food safety compliance and insurance claims.',
      },
      {
        name: 'Education & Books',
        icon: 'GraduationCap',
        text: 'Textbook publishers and stationery suppliers issue challans to schools and colleges at the start of each academic year, listing title, ISBN, quantity and condition. Schools match challans to procurement POs during stock reconciliation.',
        detail: 'Educational supply challans should list ISBN or item codes, not just title names — multiple editions of the same title often exist, and a title-only challan makes it impossible to verify whether the correct edition was supplied.',
      },
      {
        name: 'Freelance & Equipment Lending',
        icon: 'User',
        text: 'Photographers, videographers and event planners who lend equipment to clients or co-workers issue challans to document items going out, their condition at departure, and the expected return date. These protect against damage disputes.',
        detail: 'Note the condition of every item on the equipment lending challan (working, minor scratch, etc.) before it leaves — a challan that records the pre-existing condition of equipment is your only protection against being held liable for damage that existed before the loan.',
      },
    ],
  },

  references: {
    heading: 'Regulatory Sources for Delivery Challans and Goods Movement',
    intro: 'These are the primary GST and logistics regulations that govern the movement of goods and the documents required.',
    items: [
      { label: 'CGST Rules, 2017 — Rule 55: Delivery Challan', url: 'https://cbic-gst.gov.in', note: 'Prescribes the mandatory contents of a delivery challan, the three-copy requirement, and the circumstances where a challan replaces a tax invoice for goods movement.' },
      { label: 'E-Way Bill Portal — NIC', url: 'https://ewaybillgst.gov.in', note: 'Official portal for generating, updating and cancelling e-way bills; the e-way bill number generated here must be referenced on the delivery challan for all qualifying inter-state movements.' },
      { label: 'CGST Act — Section 68: Inspection of Goods in Transit', url: 'https://cbic-gst.gov.in', note: 'Empowers GST officers to inspect goods in transit; a delivery challan and e-way bill are the primary documents an officer will request during a road check.' },
      { label: 'CGST Rules — Rule 45: Job-Work Documentation', url: 'https://cbic-gst.gov.in', note: 'Specifies delivery challan requirements for job-work dispatches between principal and job-worker, including the time limit for goods to be returned after processing.' },
      { label: 'Motor Vehicles Act, 1988 — Goods Carriage Requirements', url: 'https://morth.nic.in', note: 'Road transport rules requiring commercial vehicles carrying goods to carry complete documentation including the goods consignment note, which complements the delivery challan.' },
    ],
  },
};
