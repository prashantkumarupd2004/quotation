import type { Industry } from '@/data/industry-types';

export const industriesD: Industry[] = [
  {
    slug: 'civil-contractor-quotation-maker',
    name: 'Civil Contractor',
    h1: 'Civil Contractor Quotation Maker',
    seoTitle: 'Civil Contractor Quotation Maker – Free Construction Estimate Format | QuotationMaker.in',
    metaDescription:
      'Create GST-ready civil contractor quotations in minutes. Free online tool for building, RCC, and renovation contractors across India. No signup, instant PDF download.',
    keywords: [
      'civil contractor quotation format',
      'construction quotation maker',
      'building contractor estimate',
      'civil work quotation India',
      'RCC quotation format',
      'free contractor billing software',
    ],
    icon: 'Building2',
    accent: '#78350f',
    templateId: 'construction',
    intro: `Civil contractors in India juggle dozens of moving parts on every project — cement and steel rates that change weekly, labour contracts, shuttering and scaffolding hire, and client negotiations that drag on for weeks before a single brick is laid. In the middle of all this, a professional quotation is often the first real impression a contractor makes on a homeowner, builder, or government department. A handwritten estimate on a diary page or a rough WhatsApp message with rates typed out no longer cuts it, especially when clients are comparing three or four contractors before awarding work.

QuotationMaker.in gives small and mid-sized civil contractors — from those doing residential RCC work in Tier-2 towns to firms bidding for society redevelopment projects in Mumbai and Pune — a way to generate clean, itemised quotations without hiring an accountant or buying expensive ERP software. You can break down a quote by phase (excavation, foundation, RCC, brickwork, plastering, flooring, finishing) or by material and labour separately, add your GSTIN and firm letterhead, and export a shareable PDF within minutes of finishing a site visit.

Because most civil contracts in India involve a mix of material supply and labour, and because clients frequently ask for revised quotations after negotiating quantities or specifications, having a tool that lets you duplicate, edit, and reissue quotes quickly is a genuine time-saver. Whether you're quoting for a farmhouse boundary wall in Nashik or a multi-storey commercial shell in Bengaluru, a clear line-item quotation reduces disputes at the billing stage and helps you get advances released faster.`,
    benefits: [
      {
        title: 'Phase-wise cost breakdown',
        description: 'Split your quotation into excavation, foundation, RCC, masonry, plastering, and finishing stages so clients understand exactly where money is going at each milestone.',
      },
      {
        title: 'Material and labour separation',
        description: 'Show material cost and labour cost as separate line items or combined rates per sq.ft, matching how you actually negotiate contracts with clients and subcontractors.',
      },
      {
        title: 'GST-compliant formatting',
        description: 'Add your GSTIN, HSN/SAC codes for works contract services, and CGST/SGST or IGST automatically so your quotation doubles as a tax-ready commercial document.',
      },
      {
        title: 'Instant PDF sharing',
        description: 'Download a print-ready PDF or share a link directly on WhatsApp right after a site measurement, before the client moves on to the next contractor.',
      },
      {
        title: 'Reusable rate templates',
        description: 'Save your standard per-sq.ft or per-cft rates for RCC, brickwork, and plastering once, then reuse them across every new residential or commercial enquiry.',
      },
      {
        title: 'No software or signup hassle',
        description: 'Works entirely in the browser on a phone or laptop at the site — no installation, no login walls, and no recurring subscription fee to worry about.',
      },
    ],
    howToUse: [
      'Add your company details, GSTIN, and site/office address so every quotation carries your official letterhead.',
      'Enter client name, project location, and quotation date at the top of the form.',
      'Add line items phase by phase — earthwork, PCC, RCC, brickwork, plastering, flooring, painting — with quantity, unit (sq.ft, cft, rmt) and rate.',
      'Apply applicable GST rate for works contract services and let the tool auto-calculate CGST, SGST or IGST.',
      'Add payment terms such as advance percentage, milestone-based payments, and validity period of the quotation.',
      'Preview the formatted quotation, download it as PDF, and share it directly via WhatsApp or email.',
    ],
    whyChooseUs: [
      'Purpose-built templates that already understand construction terminology like PCC, RCC, shuttering, and DPC, so you are not adapting a generic invoice format.',
      'Completely free to use with no watermark on downloaded PDFs, unlike many trial-based billing tools.',
      'Works on any device — most site engineers and contractors prepare quotations on their phone right after a measurement.',
      'No data entry lock-in; you can edit, duplicate, or delete quotations anytime without contacting support.',
      'Built specifically for Indian tax rules, including correct SAC codes for works contract and construction services.',
    ],
    tips: [
      'Quote RCC work per cubic foot or cubic metre separately from shuttering and reinforcement steel to avoid disputes over what is included.',
      'Always mention whether the rate is for "material + labour" or "labour only" — this single line prevents 80% of billing arguments.',
      'Add a validity date (usually 15-30 days) since cement and steel prices fluctuate frequently.',
      'Include a clause for extra items or scope changes to be billed separately at pre-agreed rates.',
      'Quote plastering and flooring per sq.ft using carpet area, not built-up area, to match how most clients estimate cost.',
      'Keep a standard rate card for common items (brickwork per cum, plaster per sqm) and update it monthly against current material rates.',
      'For government or society tenders, always attach your GST registration and PAN details along with the quotation.',
    ],
    commonMistakes: [
      'Quoting a single lump-sum figure without itemisation, which makes it impossible to negotiate or justify variations later.',
      'Forgetting to mention exclusions like electrical, plumbing, or waterproofing if those are handled by separate contractors.',
      'Not specifying brand or grade of cement, steel, and tiles, leading to disputes when a cheaper brand is used on site.',
      'Leaving out GST entirely and adding it as a surprise at final billing, which damages trust with clients.',
      'Quoting without a site visit, resulting in inaccurate quantities and loss-making projects.',
      'Not setting a validity period, so old quotes get honoured even after material prices have risen significantly.',
    ],
    bestPractices: [
      'Always conduct a physical site measurement before finalising quantities in the quotation.',
      'Break the quotation into clear stages tied to payment milestones (advance, plinth level, roof casting, finishing, handover).',
      'Attach a scope-of-work note listing what is included and excluded to prevent scope-creep arguments.',
      'Mention the expected project timeline alongside the quotation so clients can plan accordingly.',
      'Revise and reissue the quotation formally whenever the client changes specifications, rather than verbally adjusting the final bill.',
      'Keep a digital copy of every quotation sent, since these often get referenced during final settlement or in case of disputes.',
    ],
    downloadGuide: `Once your civil contractor quotation is ready, download it as a clean PDF with your firm's name, GSTIN, and itemised phase-wise costing. This format is accepted by homeowners, builders, and society redevelopment committees alike, and works equally well for a small boundary wall job or a multi-crore residential project quote.`,
    faqs: [
      {
        q: 'What SAC code should civil contractors use on quotations?',
        a: 'Most works contract services for construction fall under SAC 9954, with GST typically at 18% for commercial and general works, though residential affordable housing projects may attract concessional rates. Confirm the exact rate with your CA based on project type.',
      },
      {
        q: 'Should I quote per square foot or with detailed BOQ items?',
        a: 'For small residential jobs, a per-sq.ft composite rate is common and faster to negotiate. For larger projects or government tenders, a detailed bill of quantities (BOQ) with individual rates is preferred and reduces disputes.',
      },
      {
        q: 'Can I include material brand names in the quotation?',
        a: 'Yes, and it is highly recommended. Mentioning specific brands and grades for cement, steel, and tiles protects you from client complaints about material quality later in the project.',
      },
      {
        q: 'How do I handle rate changes for long-duration projects?',
        a: 'Add an escalation clause in your quotation stating that rates are valid for a fixed period, after which material cost variations will be passed through with supporting invoices.',
      },
      {
        q: 'Is this quotation tool suitable for subcontractor billing too?',
        a: 'Yes, subcontractors handling shuttering, plastering, or flooring work can use the same tool to raise their own itemised quotations to the main contractor.',
      },
      {
        q: 'Do I need to charge GST if I am not registered?',
        a: 'No, if your annual turnover is below the GST registration threshold you can issue a quotation without GST, but you should clearly state that GST is not applicable.',
      },
    ],
    sampleItems: [
      { description: 'Excavation and earthwork for foundation', unit: 'cum', hsn: '995432' },
      { description: 'PCC (1:4:8) below foundation', unit: 'cum', hsn: '995432' },
      { description: 'RCC work for columns, beams and slab (M20)', unit: 'cum', hsn: '995432' },
      { description: 'Brickwork in cement mortar (9 inch wall)', unit: 'cum', hsn: '995432' },
      { description: 'Internal and external plastering', unit: 'sqm', hsn: '995432' },
      { description: 'Vitrified tile flooring supply and fixing', unit: 'sqm', hsn: '995432' },
    ],
    relatedSlugs: [
      'construction-quotation-maker',
      'plumbing-quotation-maker',
      'electrical-contractor-quotation-maker',
      'repair-service-quotation-maker',
    ],
  },

  {
    slug: 'security-service-quotation-maker',
    name: 'Security Service',
    h1: 'Security Service Quotation Maker',
    seoTitle: 'Security Service Quotation Maker – Free Manpower Quote Format | QuotationMaker.in',
    metaDescription:
      'Generate professional security agency quotations for guards, supervisors, and bouncers with GST. Free online quotation maker built for Indian security service providers.',
    keywords: [
      'security service quotation format',
      'security guard quotation',
      'manpower supply quotation India',
      'security agency billing format',
      'PSARA quotation template',
      'free security service invoice maker',
    ],
    icon: 'ShieldCheck',
    accent: '#0f172a',
    templateId: 'corporate',
    intro: `Security service agencies in India operate on tight margins and depend heavily on recurring monthly contracts with corporate offices, residential societies, factories, malls, and construction sites. Winning a new client almost always starts with a quotation that clearly states per-guard, per-shift, or per-month rates, along with statutory compliance costs like PF, ESI, and uniform charges that many clients don't realise are baked into the price. A vague or unprofessional quote often costs agencies contracts to competitors who present the same numbers more clearly.

QuotationMaker.in helps PSARA-licensed security agencies, facility management companies, and independent security contractors create polished quotations that break down manpower cost by category — security guard, gunman, supervisor, lady guard, bouncer — along with shift timings, weekly-off arrangements, and statutory deductions. This transparency builds trust with corporate procurement teams and RWA committees who are increasingly asking for itemised costing instead of a single lump-sum monthly figure.

Because most security contracts renew annually and get revised whenever minimum wage notifications change, having a tool where you can quickly update rates and reissue a fresh quotation saves significant admin time. Agencies operating across multiple states also benefit from being able to note state-specific minimum wages, since a Delhi contract and a Karnataka contract will carry very different base pay components even for the same designation.`,
    benefits: [
      {
        title: 'Per-guard, per-shift costing',
        description: 'Break down charges by designation — security guard, supervisor, gunman, lady guard — with clear monthly or per-shift rates that clients can easily compare and approve.',
      },
      {
        title: 'Statutory cost transparency',
        description: 'List PF, ESI, bonus, and uniform allowance as separate line items so clients understand why your rate is higher than an unregistered local contractor.',
      },
      {
        title: 'GST-ready invoicing format',
        description: 'Apply the correct GST rate on manpower supply services automatically, with your GSTIN and SAC code included on every quotation.',
      },
      {
        title: 'Quick renewal quotations',
        description: 'Duplicate last year\'s contract quotation and update only the revised minimum wage or headcount, cutting renewal preparation time drastically.',
      },
      {
        title: 'Professional corporate look',
        description: 'Present a clean, letterhead-branded PDF to corporate security heads and facility managers instead of a WhatsApp text message with numbers.',
      },
      {
        title: 'Multi-site quotation management',
        description: 'Create separate quotations for each client site — factory, mall, residential society — while keeping consistent branding and rate structure.',
      },
    ],
    howToUse: [
      'Enter your agency name, PSARA licence number, and GSTIN in the company details section.',
      'Add the client name, site location, and number of guards required per shift.',
      'List each manpower category as a line item — e.g., Security Guard (12 hr shift), Supervisor, Lady Guard — with monthly rate per person.',
      'Add supervisory visits, equipment (torches, batons, walkie-talkies) and uniform costs as separate items if charged extra.',
      'Apply GST on the total manpower supply value and review the auto-calculated grand total.',
      'Download the quotation as PDF and share it with the client\'s admin or facility manager for approval.',
    ],
    whyChooseUs: [
      'Templates designed around real security industry line items instead of generic product-based invoice formats.',
      'Free to use with unlimited quotations, ideal for agencies managing dozens of active client sites.',
      'Corporate-style formatting builds credibility with facility management companies and RWA committees during vendor empanelment.',
      'Fast quotation turnaround helps you respond to urgent RFQs from corporate clients within the same day.',
      'No installation needed — quotations can be prepared from a phone while visiting a client site for a walkthrough.',
    ],
    tips: [
      'Always quote per guard per month rather than a single bulk figure, since headcount often changes mid-contract.',
      'Separate day shift and night shift rates if night allowance applies under the applicable minimum wage notification.',
      'Mention weekly-off replacement charges clearly — many disputes arise when clients assume relief guards are included free.',
      'Add a clause on rate revision whenever the state government notifies a new minimum wage, so you are not locked into old rates for a year.',
      'Quote uniform, ID cards, and equipment as one-time charges separate from the recurring monthly manpower cost.',
      'For high-risk sites like banks or jewellery showrooms, mention insurance and bond coverage explicitly as it justifies a premium rate.',
      'Include supervisory and QRT (quick response team) visit frequency in the quotation to differentiate from cheaper local competitors.',
    ],
    commonMistakes: [
      'Quoting a flat monthly figure without breaking down PF, ESI, and service charge, leading to margin erosion when statutory costs rise.',
      'Not mentioning the exact shift duration (8, 10, or 12 hours), which causes confusion during actual deployment.',
      'Ignoring state-specific minimum wage differences when quoting for multi-city corporate contracts.',
      'Failing to include relief guard or backup deployment cost for weekly offs and leaves.',
      'Not specifying the notice period or contract renewal terms, leading to abrupt cancellations.',
      'Underquoting to win a contract and then struggling to pay guards on time, which damages agency reputation.',
    ],
    bestPractices: [
      'Always attach your PSARA licence copy and GST certificate along with the quotation for corporate vendor onboarding.',
      'Quote service charge as a clear percentage on top of statutory cost so clients see your margin is fair and justified.',
      'Mention deployment timeline — how soon guards can be placed after contract signing.',
      'Include a standard operating procedure summary (patrolling frequency, register maintenance, incident reporting) to add value beyond just pricing.',
      'Revise quotations annually in line with minimum wage notifications rather than waiting for client renewal reminders.',
      'Keep a signed acceptance copy of every quotation for records, since security contracts often face labour compliance audits.',
    ],
    downloadGuide: `Download your security service quotation as a clean, corporate-ready PDF that lists manpower categories, shift timings, statutory costs, and GST separately. This transparent format is what most facility management companies and RWA vendor committees expect before approving a new security contract.`,
    faqs: [
      {
        q: 'What GST rate applies to security services in India?',
        a: 'Security and manpower supply services generally attract 18% GST under SAC 998529, though certain services to government bodies may have different treatment. Always confirm with your tax consultant based on the client category.',
      },
      {
        q: 'Should PF and ESI be shown separately in the quotation?',
        a: 'Yes, showing PF and ESI as separate line items builds trust with corporate clients and clearly justifies your total rate compared to unregistered local contractors who skip these compliances.',
      },
      {
        q: 'How do I handle different minimum wages across states?',
        a: 'Prepare a separate quotation for each state or site since minimum wage notifications vary significantly, and always reference the applicable notification date in your quotation.',
      },
      {
        q: 'Can I quote for both manpower supply and equipment rental together?',
        a: 'Yes, you can add CCTV, walkie-talkies, or metal detectors as separate line items in the same quotation if you provide equipment along with manpower.',
      },
      {
        q: 'Is a PSARA licence number required on the quotation?',
        a: 'It is not legally mandatory to print it on every quotation, but including it significantly improves credibility, especially for corporate and government tenders.',
      },
      {
        q: 'How often should I revise my standard rate card?',
        a: 'Review your rate card at least once a year or whenever the state government revises minimum wages, so existing quotations reflect current statutory costs.',
      },
    ],
    sampleItems: [
      { description: 'Security Guard – 12 hour shift (per month)', unit: 'per guard', hsn: '998529' },
      { description: 'Security Supervisor (per month)', unit: 'per supervisor', hsn: '998529' },
      { description: 'Lady Security Guard – day shift (per month)', unit: 'per guard', hsn: '998529' },
      { description: 'Gunman with valid arms licence (per month)', unit: 'per gunman', hsn: '998529' },
      { description: 'Uniform and ID card kit (one-time)', unit: 'per set', hsn: '998529' },
      { description: 'Walkie-talkie and equipment rental', unit: 'per month', hsn: '998529' },
    ],
    relatedSlugs: [
      'cleaning-service-quotation-maker',
      'transport-service-quotation-maker',
      'repair-service-quotation-maker',
    ],
  },

  {
    slug: 'cleaning-service-quotation-maker',
    name: 'Cleaning Service',
    h1: 'Cleaning Service Quotation Maker',
    seoTitle: 'Cleaning Service Quotation Maker – Free Housekeeping Quote Format | QuotationMaker.in',
    metaDescription:
      'Create GST-ready cleaning and housekeeping service quotations for offices, homes, and factories. Free online quotation maker for Indian cleaning contractors.',
    keywords: [
      'cleaning service quotation format',
      'housekeeping quotation maker',
      'office cleaning quote India',
      'deep cleaning service price format',
      'facility cleaning quotation template',
      'free cleaning invoice maker',
    ],
    icon: 'SprayCan',
    accent: '#0284c7',
    templateId: 'blue',
    intro: `Cleaning and housekeeping service providers in India range from single-person deep cleaning specialists serving apartments to large facility management companies handling office towers and factories. Regardless of size, almost every new client — whether a homeowner booking a one-time sofa and carpet cleaning or a corporate office signing an annual housekeeping contract — expects a clear quotation before work begins. A vague verbal estimate leads to arguments about what was actually included, especially for recurring contracts where scope tends to expand quietly over time.

QuotationMaker.in lets cleaning businesses quote per visit, per sq.ft, or per month depending on the nature of the job. One-time services like deep cleaning, sofa shampooing, water tank cleaning, or post-construction cleanup can be quoted with a fixed price per unit of area or per item, while recurring office or society housekeeping contracts can be quoted per month with manpower headcount and consumables listed separately, similar to how facility management companies structure their commercial proposals.

Because cleaning quotations are often compared side by side with two or three competitors before a client decides, presenting a properly branded, itemised PDF instead of a text message rate list gives a noticeable edge. It also helps set the right expectations upfront about what is included — for instance, whether cleaning chemicals and equipment are provided by you or the client — which is one of the most common sources of disputes in this industry.`,
    benefits: [
      {
        title: 'Flexible pricing per visit or per month',
        description: 'Quote one-time deep cleaning jobs per sq.ft or per item, and recurring housekeeping contracts per month with manpower and consumables listed separately.',
      },
      {
        title: 'Clear scope of work',
        description: 'List exactly which areas and tasks are covered — floors, windows, washrooms, pantry, common areas — so clients know precisely what they are paying for.',
      },
      {
        title: 'GST-compliant billing',
        description: 'Automatically calculate GST on cleaning and facility management services with your GSTIN and applicable SAC code included on every quotation.',
      },
      {
        title: 'Consumables and equipment tracking',
        description: 'Add cleaning chemicals, machines, and disposables as separate line items to justify pricing and avoid disputes about hidden material costs.',
      },
      {
        title: 'Quick quotation for repeat clients',
        description: 'Duplicate an existing office or society contract quotation and adjust manpower or area for a new site within minutes.',
      },
      {
        title: 'Professional branded PDF',
        description: 'Send a clean, letterhead-style quotation instead of a WhatsApp price list, helping you win contracts against unorganised local competitors.',
      },
    ],
    howToUse: [
      'Add your business name, GSTIN, and contact details to set up your quotation letterhead.',
      'Enter the client name, site address, and type of cleaning required (one-time deep cleaning or recurring housekeeping).',
      'Add line items with area in sq.ft or number of units — e.g., sofa cleaning per seat, water tank cleaning per tank, office cleaning per sq.ft per month.',
      'Include manpower headcount and shift timings if quoting a recurring housekeeping contract.',
      'Apply GST at the correct rate for cleaning and facility management services and review the total.',
      'Download the quotation as a PDF and share it directly with the client for quick approval.',
    ],
    whyChooseUs: [
      'Pre-structured templates that match how cleaning contracts are actually priced in India — per sq.ft, per visit, or per month.',
      'Completely free with no limit on the number of quotations you can generate for different clients and sites.',
      'Helps small cleaning businesses look as professional as large facility management companies during client pitches.',
      'Works well on mobile, so quotations can be prepared right after a site survey visit.',
      'Correct GST handling ensures your quotation is accepted by corporate accounts teams without back-and-forth queries.',
    ],
    tips: [
      'Quote office and society housekeeping per sq.ft per month, since this is the standard benchmark clients use to compare vendors.',
      'For one-time deep cleaning, quote per room or per sq.ft rather than a flat price, since apartment sizes vary widely.',
      'Clearly state whether cleaning chemicals and equipment are included in the rate or billed separately.',
      'Mention the number of cleaning staff and their shift timings for recurring contracts to avoid understaffing disputes.',
      'Add water tank cleaning, pest control referral, and glass facade cleaning as optional add-on items to increase order value.',
      'For factory or warehouse cleaning, quote separately for machine area cleaning versus general floor cleaning since safety protocols differ.',
      'Always mention exclusions like external window cleaning at height, which usually requires specialised equipment and a higher rate.',
    ],
    commonMistakes: [
      'Quoting a flat price without specifying area or number of rooms, which leads to scope disputes on bigger properties.',
      'Not mentioning who supplies cleaning chemicals and equipment, causing arguments mid-contract.',
      'Forgetting to include GST, then adding it as a surprise at the final billing stage.',
      'Underestimating manpower needed for large offices, leading to poor service quality and client complaints.',
      'Not specifying the frequency of recurring services (daily, alternate day, weekly) clearly in the quotation.',
      'Ignoring consumables cost (soap, tissue, garbage bags) in monthly housekeeping contracts, eating into margins.',
    ],
    bestPractices: [
      'Conduct a site visit before quoting large offices or factories to accurately estimate area and manpower requirements.',
      'Break recurring contracts into manpower cost, consumables cost, and equipment cost for full transparency.',
      'Mention supervision and quality-check frequency to differentiate from unorganised local cleaning contractors.',
      'Include a standard checklist of daily, weekly, and monthly tasks as part of the quotation for housekeeping contracts.',
      'Revise your rate card periodically based on current minimum wage and consumables cost.',
      'Always get written approval on the quotation before starting work, especially for one-time high-value jobs like post-construction cleaning.',
    ],
    downloadGuide: `Download a professional cleaning service quotation as a PDF with clear scope, area or manpower breakdown, and GST applied correctly. This format works well for one-time deep cleaning jobs as well as recurring monthly office and society housekeeping contracts, and helps you win client approval faster.`,
    faqs: [
      {
        q: 'What GST rate applies to cleaning and housekeeping services?',
        a: 'Cleaning and facility support services generally attract 18% GST under SAC 998533, though the exact classification can vary based on whether it is a pure labour or a composite supply. Confirm with your tax consultant for your specific service mix.',
      },
      {
        q: 'Should I quote per sq.ft or a flat monthly rate for office housekeeping?',
        a: 'Per sq.ft per month is the industry standard for offices, as it makes it easy for facility managers to compare quotes across vendors and adjust if the area changes.',
      },
      {
        q: 'How do I price one-time deep cleaning jobs like sofa or carpet cleaning?',
        a: 'These are usually priced per seat, per sq.ft, or per item (sofa, mattress, carpet) rather than a flat rate, since sizes and soiling levels vary significantly between homes.',
      },
      {
        q: 'Should cleaning chemicals be included in my quoted rate?',
        a: 'You can quote either way, but it must be stated clearly. Many contractors prefer separating consumables cost to protect margins if chemical prices rise mid-contract.',
      },
      {
        q: 'How do I quote for factory or warehouse cleaning differently from office cleaning?',
        a: 'Factory cleaning often involves oil, dust, and machine areas requiring specialised methods and safety gear, so it should be quoted at a higher per sq.ft rate than standard office cleaning.',
      },
      {
        q: 'Can this tool handle recurring monthly cleaning contracts?',
        a: 'Yes, you can create a quotation for a monthly housekeeping contract and simply duplicate and reissue it each renewal cycle with updated rates or headcount.',
      },
    ],
    sampleItems: [
      { description: 'Office housekeeping service (per sq.ft per month)', unit: 'sq.ft/month', hsn: '998533' },
      { description: 'Deep cleaning – 2BHK apartment', unit: 'per service', hsn: '998533' },
      { description: 'Sofa and carpet shampooing (per seat)', unit: 'per seat', hsn: '998533' },
      { description: 'Water tank cleaning (per tank)', unit: 'per tank', hsn: '998533' },
      { description: 'Housekeeping staff deployment (per person per month)', unit: 'per person/month', hsn: '998533' },
      { description: 'Cleaning consumables and chemicals (monthly)', unit: 'per month', hsn: '998533' },
    ],
    relatedSlugs: [
      'security-service-quotation-maker',
      'repair-service-quotation-maker',
      'transport-service-quotation-maker',
    ],
  },

  {
    slug: 'transport-service-quotation-maker',
    name: 'Transport Service',
    h1: 'Transport Service Quotation Maker',
    seoTitle: 'Transport Service Quotation Maker – Free Logistics Quote Format | QuotationMaker.in',
    metaDescription:
      'Create GST-ready transport and logistics quotations for goods, employee, and vehicle rental services. Free online quotation maker for Indian transporters and fleet owners.',
    keywords: [
      'transport quotation format',
      'logistics quotation maker',
      'goods transport quote India',
      'vehicle rental quotation template',
      'freight quotation format GST',
      'free transport invoice maker',
    ],
    icon: 'Truck',
    accent: '#166534',
    templateId: 'wholesale',
    intro: `Transport and logistics operators in India — whether running a small fleet of tempos for local delivery, long-haul trucks for interstate freight, or a cab and bus service for corporate employee transport — deal with quotations that must account for distance, vehicle type, fuel cost volatility, tolls, and loading-unloading charges. Clients ranging from e-commerce warehouses to manufacturing units and corporate HR teams expect a clear breakup before confirming a booking, especially since fuel prices and toll rates change frequently and directly affect margins.

QuotationMaker.in helps transporters build quotations that separate freight or rental charges from ancillary costs like toll, loading-unloading labour, driver allowance, and detention charges for extra waiting time. For per-trip freight quotes, you can price by distance (per km) or by tonnage, while for employee transport or vehicle rental contracts, a per-month or per-vehicle rate with defined kilometre limits works better and matches how corporate transport vendors are typically empanelled.

Because transport rates need frequent updates in response to diesel price changes and because the same client often books multiple trips or renews a monthly contract, having a quotation tool that lets you save standard routes and rates saves considerable time. A clean, GST-compliant PDF quotation also makes it easier to get onboarded as an approved vendor with larger corporates and logistics aggregators who require proper documentation before releasing purchase orders.`,
    benefits: [
      {
        title: 'Distance and tonnage-based pricing',
        description: 'Quote freight charges per km or per tonne, and add fuel and toll estimates separately so clients see exactly how your final price is built.',
      },
      {
        title: 'Vehicle-wise rate cards',
        description: 'Maintain separate quotations for tempo, mini-truck, container, and bus rentals, each with its own capacity and rate structure.',
      },
      {
        title: 'GST-compliant transport invoicing',
        description: 'Apply the correct GST treatment for goods transport agency (GTA) or rental services with GSTIN and SAC code shown clearly on the quotation.',
      },
      {
        title: 'Toll, loading and detention charges',
        description: 'Add toll, loading-unloading labour, and detention charges as separate line items instead of bundling them into an unclear lump sum.',
      },
      {
        title: 'Quick route-based quoting',
        description: 'Save frequently used routes and rates so repeat bookings on common corridors can be quoted in under a minute.',
      },
      {
        title: 'Professional PDF for vendor onboarding',
        description: 'Generate a properly formatted quotation that meets documentation requirements for corporate and e-commerce logistics vendor empanelment.',
      },
    ],
    howToUse: [
      'Enter your transport company name, GSTIN, and fleet details in the company profile section.',
      'Add client name, pickup and drop locations, and the type of service (one-time trip, monthly rental, or employee transport contract).',
      'Add line items for freight or rental charges based on distance, tonnage, or per-vehicle-per-month rate.',
      'Include toll, loading-unloading, driver allowance, and detention charges as separate items where applicable.',
      'Apply the correct GST treatment for goods transport agency or rental services and review the total payable amount.',
      'Download the quotation as PDF and share it with the client or logistics coordinator for quick approval.',
    ],
    whyChooseUs: [
      'Templates designed specifically for transport pricing structures like per-km, per-tonne, and per-vehicle-per-month.',
      'Free to use for unlimited trip and contract quotations, ideal for fleet owners managing multiple routes and clients.',
      'Helps small transporters look as professional as large logistics companies when bidding for corporate contracts.',
      'Mobile-friendly so drivers or dispatchers can prepare quotations on the move between pickups.',
      'Correct GST classification support reduces rejection of quotations during corporate vendor documentation checks.',
    ],
    tips: [
      'Quote long-haul freight per tonne or per truckload rather than per km alone, since load weight significantly affects cost.',
      'For local delivery and courier-style transport, quote per trip or per km with a minimum charge to cover fixed costs.',
      'Always separate toll and parking charges from the base freight rate since these vary trip to trip.',
      'Mention detention charges (per hour beyond a free waiting period) clearly to discourage clients from causing unpaid delays.',
      'For employee transport contracts, quote per vehicle per month with a defined kilometre cap and an extra-km rate beyond that.',
      'Update your fuel surcharge component whenever diesel prices move significantly, and mention it as a separate adjustable line item.',
      'Quote loading and unloading labour separately since some clients arrange their own labour at the destination.',
    ],
    commonMistakes: [
      'Quoting a flat trip price without mentioning distance or load capacity, causing disputes on longer or heavier loads.',
      'Ignoring toll and parking charges in the initial quote and adding them as a surprise in the final invoice.',
      'Not mentioning detention charges, leading to unpaid vehicle idle time at loading or unloading points.',
      'Failing to specify the GST treatment (forward charge vs reverse charge) applicable for goods transport agency services.',
      'Underquoting monthly employee transport contracts without a kilometre cap, resulting in losses from excess usage.',
      'Not updating rates in line with diesel price changes, eroding margins on long-term contracts.',
    ],
    bestPractices: [
      'Always confirm the exact pickup and drop points and expected load type before finalising a freight quotation.',
      'Clearly state whether GST is charged under forward charge or if reverse charge mechanism applies for the client.',
      'Include a fuel price escalation clause for contracts running longer than three months.',
      'Mention insurance coverage for goods in transit, especially for high-value cargo, to build client confidence.',
      'Maintain separate rate cards for different vehicle types and update them quarterly based on fuel and maintenance costs.',
      'Get written acceptance of the quotation before dispatching a vehicle, particularly for new or one-time clients.',
    ],
    downloadGuide: `Download a transport service quotation as a clean PDF with freight or rental charges, toll, loading-unloading, and GST clearly itemised. This format works for one-time freight trips, monthly vehicle rentals, and corporate employee transport contracts, helping you get faster approvals from clients and logistics coordinators.`,
    faqs: [
      {
        q: 'What GST rate applies to goods transport agency services?',
        a: 'Goods transport agency services are commonly taxed at 5% GST without input tax credit or 12% with input tax credit under SAC 996511, and in many B2B cases the recipient pays GST under reverse charge. Confirm the applicable option with your tax consultant.',
      },
      {
        q: 'How should I quote for employee transport contracts?',
        a: 'Quote per vehicle per month with a defined kilometre limit, and add a clearly stated extra-km rate for usage beyond the cap, which is the standard structure corporates expect from transport vendors.',
      },
      {
        q: 'Should toll charges be included in the base freight rate?',
        a: 'It is better to list toll as a separate reimbursable item rather than bundling it into the freight rate, since toll costs can change with route diversions or new expressway sections.',
      },
      {
        q: 'What are detention charges and should I include them?',
        a: 'Detention charges cover vehicle waiting time beyond a free period at loading or unloading points. Including them clearly in your quotation discourages excessive delays and protects your daily vehicle utilisation.',
      },
      {
        q: 'Can I use this tool for both one-time trips and long-term rental contracts?',
        a: 'Yes, you can create trip-based quotations with per-km or per-tonne pricing, or monthly rental quotations with per-vehicle rates, using the same tool.',
      },
      {
        q: 'How do I handle rate changes due to diesel price fluctuations?',
        a: 'Add a fuel escalation clause in your quotation terms stating that rates will be revised if diesel prices move beyond a certain percentage during the contract period.',
      },
    ],
    sampleItems: [
      { description: 'Goods transport – 10 tonne truck (per trip, per km)', unit: 'per km', hsn: '996511' },
      { description: 'Mini tempo local delivery (per trip)', unit: 'per trip', hsn: '996511' },
      { description: 'Vehicle rental for employee transport (per vehicle/month)', unit: 'per vehicle/month', hsn: '996511' },
      { description: 'Loading and unloading labour charges', unit: 'per trip', hsn: '996511' },
      { description: 'Toll and parking charges (as per actuals)', unit: 'lump sum', hsn: '996511' },
      { description: 'Detention charges beyond free waiting period', unit: 'per hour', hsn: '996511' },
    ],
    relatedSlugs: [
      'civil-contractor-quotation-maker',
      'cleaning-service-quotation-maker',
      'repair-service-quotation-maker',
    ],
  },

  {
    slug: 'repair-service-quotation-maker',
    name: 'Repair Service',
    h1: 'Repair Service Quotation Maker',
    seoTitle: 'Repair Service Quotation Maker – Free Appliance & AMC Quote Format | QuotationMaker.in',
    metaDescription:
      'Create GST-ready repair service quotations for appliances, AC, electronics, and AMC contracts. Free online quotation maker for Indian repair and service centres.',
    keywords: [
      'repair service quotation format',
      'AC repair quotation maker',
      'appliance service quote India',
      'AMC quotation template',
      'electronics repair invoice format',
      'free repair service billing tool',
    ],
    icon: 'Wrench',
    accent: '#1e3a8a',
    templateId: 'professional',
    intro: `Repair and service businesses in India — covering AC and refrigerator service centres, electronics repair shops, home appliance technicians, and industrial equipment maintenance providers — deal with a very specific quotation challenge: the exact cost of a job is often unclear until a technician has actually inspected the unit. A customer calling about a "washing machine not working" could need anything from a minor part replacement to a full motor change, and quoting incorrectly either scares away the customer with an inflated estimate or eats into your margin when the actual repair costs more.

QuotationMaker.in lets repair businesses issue a preliminary quotation after an initial diagnosis call, separating a fixed visit or diagnostic charge from the estimated spare part and labour cost, which can then be revised into a final quotation once the technician has physically inspected the equipment. This two-step approach — estimate first, confirmed quote after inspection — is exactly how most professional repair centres in India already operate, and having it documented in writing reduces "you never told me it would cost this much" disputes at the time of final billing.

For businesses running annual maintenance contracts (AMC) for ACs, industrial equipment, or office electronics, the tool also works well for structured yearly quotations covering a fixed number of service visits plus a defined rate for spare parts and emergency call-outs, which is the standard format corporate and residential AMC clients expect before signing a contract.`,
    benefits: [
      {
        title: 'Diagnostic and final quote in two steps',
        description: 'Issue a quick estimate after the initial visit and a confirmed final quotation once the exact fault and required parts are identified, matching real repair workflows.',
      },
      {
        title: 'Spare parts and labour separated',
        description: 'List spare part cost and labour or service charge as separate line items so customers understand exactly what they are paying for.',
      },
      {
        title: 'AMC contract quotation support',
        description: 'Structure annual maintenance contracts with a fixed number of service visits, spare parts policy, and emergency call-out rates in one clean format.',
      },
      {
        title: 'GST-compliant service billing',
        description: 'Apply the correct GST rate for repair and maintenance services with GSTIN and SAC code automatically included in the quotation.',
      },
      {
        title: 'Fast turnaround on quotations',
        description: 'Prepare and send a quotation directly from the customer\'s home or office right after inspection, speeding up approval and job scheduling.',
      },
      {
        title: 'Reusable rate list for common repairs',
        description: 'Save standard rates for common issues like gas refilling, PCB replacement, or compressor change so future quotations take seconds to prepare.',
      },
    ],
    howToUse: [
      'Add your service centre or technician name, GSTIN, and contact number to the quotation header.',
      'Enter customer details, appliance or equipment type, brand, and model number for accurate record-keeping.',
      'Add a diagnostic or visiting charge as the first line item if applicable.',
      'List the identified spare parts with individual cost, and add labour or service charge as a separate line item.',
      'Apply GST at the applicable rate for repair and maintenance services and review the total estimate.',
      'Download the quotation as PDF and share it with the customer for approval before proceeding with the repair.',
    ],
    whyChooseUs: [
      'Templates structured around real repair workflows — diagnostic charge, spare parts, labour — rather than a generic single-line invoice.',
      'Completely free with no cap on the number of quotations, useful for busy service centres handling dozens of jobs a week.',
      'Helps independent technicians present themselves as professionally as branded service centres.',
      'Mobile-first design lets technicians generate quotations on-site immediately after inspection.',
      'Correct GST setup makes the quotation acceptable for corporate AMC billing and reimbursement claims.',
    ],
    tips: [
      'Always charge and mention a diagnostic or visiting fee separately, even if it gets adjusted against the final repair cost.',
      'List spare part brand and part number where possible to justify pricing and avoid "why is this part so costly" disputes.',
      'For AMC contracts, clearly state the number of included service visits per year and the rate for any visits beyond that.',
      'Mention warranty period on repaired parts and labour, typically 30-90 days, directly on the quotation.',
      'Quote emergency or out-of-hours service calls at a premium rate and state this clearly upfront.',
      'For high-value electronics or industrial equipment, get written approval on the quotation before ordering spare parts.',
      'Keep a running rate list of common spare parts (compressor, PCB, motor) so quotes can be issued within minutes of diagnosis.',
    ],
    commonMistakes: [
      'Giving a verbal estimate over the phone without inspection and then facing disputes when the final cost is higher.',
      'Not separating diagnostic charge from repair cost, confusing customers who expected a free inspection.',
      'Failing to mention warranty terms on replaced parts, leading to free repeat visits being demanded later.',
      'Ordering expensive spare parts before getting customer approval on the quotation.',
      'Not specifying the number of included visits in AMC contracts, causing disputes when customers call frequently.',
      'Ignoring GST on service charges, which can create issues during business expense claims for corporate customers.',
    ],
    bestPractices: [
      'Always send a written quotation for approval before starting any repair work beyond the initial diagnostic charge.',
      'Clearly separate parts cost, labour cost, and any visiting or transportation charges in every quotation.',
      'For AMC contracts, define exactly what is covered (preventive maintenance, breakdown visits) and what is chargeable extra.',
      'Mention standard warranty terms on both parts and labour to build customer confidence and reduce repeat complaints.',
      'Keep historical quotations on file for warranty claims and future reference during repeat service calls.',
      'Review and update your spare parts rate list regularly since electronic component prices fluctuate often.',
    ],
    downloadGuide: `Download a repair service quotation as a professional PDF with diagnostic charge, spare parts, labour, and GST clearly separated. This format works equally well for a one-time appliance repair or a structured annual maintenance contract, and helps set clear expectations with customers before work begins.`,
    faqs: [
      {
        q: 'What GST rate applies to appliance and equipment repair services?',
        a: 'Repair and maintenance services generally attract 18% GST under SAC 998719 (or the relevant repair-specific SAC for the equipment category), with spare parts sometimes taxed separately if invoiced independently. Confirm exact classification with your tax consultant.',
      },
      {
        q: 'Should I charge a diagnostic fee even if the customer doesn\'t proceed with the repair?',
        a: 'Most professional service centres charge a nominal visiting or diagnostic fee regardless of whether the customer proceeds, since it covers the technician\'s time and travel. This should be mentioned upfront before the visit.',
      },
      {
        q: 'How do I quote for an AMC (annual maintenance contract)?',
        a: 'Structure the quotation with a fixed annual fee covering a defined number of preventive maintenance visits, and list spare parts and emergency call-out charges as separate items billed only when actually used.',
      },
      {
        q: 'Can I revise a quotation after the customer approves the initial estimate?',
        a: 'Yes, if additional faults are discovered during repair, you can issue a revised quotation for the customer\'s approval before proceeding further, keeping a clear paper trail of what was agreed.',
      },
      {
        q: 'Should warranty terms be mentioned in the quotation itself?',
        a: 'Yes, mentioning the warranty period for both spare parts and labour directly in the quotation avoids confusion and reduces disputes if the same issue recurs shortly after repair.',
      },
      {
        q: 'Is this tool suitable for both individual technicians and multi-branch service centres?',
        a: 'Yes, individual technicians can use it for quick single-job quotations, while multi-branch service centres can use it consistently across locations while maintaining the same branded format.',
      },
    ],
    sampleItems: [
      { description: 'Diagnostic and visiting charge', unit: 'per visit', hsn: '998719' },
      { description: 'AC gas refilling and leak testing', unit: 'per unit', hsn: '998719' },
      { description: 'Spare part – compressor/PCB replacement', unit: 'per piece', hsn: '998719' },
      { description: 'Labour and service charge', unit: 'per job', hsn: '998719' },
      { description: 'Annual maintenance contract (4 visits/year)', unit: 'per year', hsn: '998719' },
      { description: 'Emergency/out-of-hours service call', unit: 'per visit', hsn: '998719' },
    ],
    relatedSlugs: [
      'civil-contractor-quotation-maker',
      'electrical-contractor-quotation-maker',
      'plumbing-quotation-maker',
      'cleaning-service-quotation-maker',
    ],
  },
];
