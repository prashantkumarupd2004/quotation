import type { ToolContent } from './types';

export const deliveryChallanContent: ToolContent = {
  id: 'delivery-challan',
  seo: {
    title: 'Free Delivery Challan Generator — GST Challan Format PDF Online',
    description:
      'Generate GST-ready delivery challans online for free. Add vehicle number, transporter, LR number and purpose of transport, then download a print-ready PDF for triplicate copies. No signup required.',
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
  whatIs: {
    heading: 'What Is a Delivery Challan Under GST?',
    paragraphs: [
      'A delivery challan is a dispatch document that travels with goods when they move from one place to another without a tax invoice. Rule 55 of the CGST Rules specifically permits this for situations where a sale has not (yet) happened: sending materials to a job worker, moving stock to your own branch or godown, supplying goods on approval, or taking products to an exhibition or trade fair. The challan lists what is being moved, in what quantity, from whom, to whom, and why.',
      'The key distinction from an invoice is intent. An invoice demands payment and transfers ownership; a challan merely evidences movement. That is why goods sent for job work or displayed at an exhibition travel on a challan — they are still your property and no tax event has occurred. If the goods are later sold (say a customer at the exhibition buys a piece), a proper tax invoice is raised at that point, referencing the challan under which the goods travelled.',
      'A well-made challan carries a serial number, the challan date, consignor and consignee details with GSTINs where registered, an HSN-wise description of the goods with quantities and approximate value, the purpose of transport, and the transport particulars — transporter name, vehicle number and LR/docket number. Our generator has dedicated fields for each of these, plus a receiver’s name line so the person taking delivery can sign and acknowledge the goods.',
    ],
  },
  howTo: {
    heading: 'How to Create a Delivery Challan in 4 Steps',
    steps: [
      {
        title: 'Fill in consignor and consignee details',
        text: 'Enter your business name, address and GSTIN as the consignor, and the delivery address as the consignee — a customer site, your branch, a job worker’s unit or an exhibition venue. Upload your logo and watch the live preview update as you type.',
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
        text: 'A named receiver’s signature block prints on the challan, giving you documented proof that the goods reached the right person in the stated quantity and condition.',
      },
      {
        title: 'No-tax mode by default',
        text: 'Because a challan is not a demand for payment, this tool opens in no-tax mode showing quantities and approximate values only — exactly how a dispatch document should look.',
      },
      {
        title: '25+ templates with logo, stamp and signature',
        text: 'Pick a layout that matches your letterhead, upload your logo, authorised signature and company stamp, and export an A4-perfect PDF or PNG every time.',
      },
      {
        title: 'Autosave with zero signup',
        text: 'The challan saves itself in your browser’s localStorage as you type, so a dropped connection at the loading dock never loses your work — and nothing is uploaded to any server.',
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
      'Challan DC-2026-0031 travels with the truck alongside the e-way bill (mandatory here since the consignment value exceeds ₹50,000 and crosses state lines). At the venue, the event coordinator named in the Receiver’s Name field signs the duplicate copy. Pieces that sell at the expo get a tax invoice on the spot; the rest return to Jodhpur against the same challan reference.',
  },
  sections: [
    {
      heading: 'Delivery Challan vs Invoice: Which One Do You Need?',
      paragraphs: [
        'Use an invoice when ownership changes hands and money is owed; use a challan when goods merely change location. Dispatching a confirmed order? The tax invoice itself can accompany the goods, or you can send a challan with the vehicle and raise the invoice separately. Sending goods where no sale exists yet — job work, branch transfer, approval, exhibition — an invoice would be wrong, because it would book revenue and tax on a transaction that has not happened.',
        'The two documents also work together. Many businesses dispatch against a challan, get the receiver’s signed acknowledgment back, and then raise the invoice quoting the challan number — a clean audit trail proving that what was billed is exactly what was delivered and accepted. If a shortage or damage dispute arises later, the signed challan is your first line of evidence.',
        'One caution: a challan is never a substitute for a tax invoice on an actual sale. If goods were sold and moved on a challan alone, GST officers can treat it as an attempt to move goods without paying tax. When in doubt about a genuine supply, raise the invoice.',
      ],
    },
    {
      heading: 'The Triplicate Convention and E-Way Bill Rules',
      paragraphs: [
        'Rule 55 prescribes challans in triplicate: the original marked "Original for Consignee" stays with the goods and is handed to the receiver, the duplicate marked "Duplicate for Transporter" remains with the carrier, and the triplicate marked "Triplicate for Consignor" comes back to your records — ideally with the receiver’s signature. Print three copies of the PDF from this tool and mark them accordingly, and have the receiver sign your file copy at delivery.',
        'The e-way bill is a separate, electronic requirement that sits on top of the challan. Whenever the consignment value exceeds ₹50,000 (lower thresholds apply for intra-state movement in some states), an e-way bill must be generated on the government portal before the vehicle moves — even for non-sale movements like job work or exhibitions, using the challan as the base document. The vehicle number and transporter details you enter on this challan are the same particulars the e-way bill asks for, so filling the challan first makes the portal entry a two-minute copy job.',
      ],
    },
    {
      heading: 'Free Forever, and Private by Design',
      paragraphs: [
        'Every part of this delivery challan generator is free — unlimited challans, all 25+ templates, PDF and PNG downloads, WhatsApp sharing and QR codes, with no watermark and no account. There is nothing to install and nothing to subscribe to; open the page at the dispatch desk and start typing.',
        'Your dispatch data — customer addresses, goods, values, vehicle numbers — is saved only in your own browser via localStorage. It is never uploaded to our servers, so commercially sensitive movement information stays inside your business. Duplicating yesterday’s challan for today’s repeat dispatch to the same job worker takes seconds: your last challan loads automatically, and you just change the number, date and quantities.',
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
      q: 'Why is there a receiver’s name field on the challan?',
      a: 'Naming the person expected to take delivery — a storekeeper, site supervisor or event coordinator — and getting their signature on your copy gives you dated proof of receipt. In quantity or damage disputes, that signed acknowledgment is the document everyone falls back on.',
    },
    {
      q: 'Is this delivery challan generator really free, and where is my data stored?',
      a: 'Completely free — no signup, no limits, no watermark. Challans autosave in your browser’s local storage on your own device and are never uploaded, unless you explicitly use the share link feature for a specific document.',
    },
  ],
  related: ['gst-invoice', 'invoice', 'purchase-order', 'quotation', 'payment-receipt', 'credit-note'],
};
