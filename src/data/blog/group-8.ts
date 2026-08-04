import type { BlogPost } from '@/data/blog-types';

/**
 * Group 8 — the operational side of running a small Indian business: pricing,
 * contracts, records, tax deductions and the digital-payments plumbing. These
 * sit alongside the document-format guides rather than repeating them.
 */
export const blogPosts8: BlogPost[] = [
  {
    slug: 'tds-on-payments-guide',
    title: 'TDS on Business Payments: Which Sections Apply, What Rate, and What to Show on Your Invoice',
    seoTitle: 'TDS on Payments India 2026 | 194C, 194J, 194Q Rates, Limits & Invoice Treatment',
    metaDescription:
      'A practical guide to TDS for Indian small businesses — Section 194C, 194J, 194H, 194-IB and 194Q thresholds and rates, how TDS interacts with GST on your invoice, Form 16A and claiming credit in your return.',
    keywords: [
      'tds on payments',
      'section 194c tds rate',
      'section 194j professional fees tds',
      'tds threshold limit',
      'tds on gst invoice',
      'form 16a download',
      'tds credit form 26as',
      'tds for freelancers India',
    ],
    date: '2026-07-28',
    readingTime: 10,
    category: 'GST & Tax',
    excerpt:
      'Your client paid ₹90,000 against a ₹1,00,000 invoice and called it TDS. Here is what that means, whether they were right, and how you get the money back.',
    intro:
      'The first time a client pays you less than you invoiced and cheerfully explains it as "TDS", it feels like a deduction you have been talked into. It is not — it is tax paid on your behalf to the government, and you claim it back against your own tax liability when you file. But whether the deduction was correct, at what rate, and how you recover it, are questions most freelancers and small suppliers never get a straight answer to. This guide covers the sections that actually apply to small-business payments, how TDS interacts with GST on your bill, and what to do when the credit does not show up.',
    sections: [
      {
        heading: 'What TDS is and who deducts it',
        body: 'Tax Deducted at Source is a collection mechanism: instead of waiting for you to pay tax at year end, the government requires the person paying you to withhold a slice and deposit it against your PAN. The deductor files a quarterly return, the amount appears in your Form 26AS and Annual Information Statement, and you claim it as a credit against your tax liability when you file your return.\n\nNot every payer deducts. Individuals and Hindu Undivided Families are generally required to deduct under the business-payment sections only if their turnover exceeded ₹1 crore for business or ₹50 lakh for profession in the preceding financial year. Companies, firms and LLPs deduct regardless of size. So a large agency will deduct on your invoice while a small proprietor client may not — and both can be correct.',
      },
      {
        heading: 'The sections that matter for small business payments',
        body: 'Five cover most situations.\n\nSection 194C, contract payments, applies to work contracts including advertising, catering, transport, manufacturing to specification, and most job work. The rate is 1% where the payee is an individual or HUF and 2% otherwise. Thresholds apply per single payment and per annual aggregate — deduction is triggered when a single contract payment crosses the prescribed single-transaction limit or when the annual aggregate to that payee crosses the yearly limit.\n\nSection 194J, professional and technical services, covers legal, medical, engineering, architectural, accountancy, technical consultancy, interior decoration and advertising professionals, plus royalty and non-compete payments. The standard rate is 10%, reduced to 2% for fees for technical services, call-centre operations and certain royalty payments. This is the section most freelance consultants, designers and developers are deducted under.\n\nSection 194H covers commission and brokerage, at 5%. Section 194-IB requires an individual or HUF paying rent above ₹50,000 a month to deduct 5%. And Section 194Q applies to buyers with turnover above ₹10 crore purchasing goods above ₹50 lakh from a single seller in a year, at 0.1% on the excess.\n\nRates and thresholds are revised in Finance Acts, so confirm the current figures for the financial year before relying on them — the structure stays stable, the numbers move.',
        bullets: [
          '194C — contracts and job work: 1% for individuals/HUF, 2% for others',
          '194J — professional and technical services: 10%, or 2% for technical services',
          '194H — commission and brokerage: 5%',
          '194-IB — rent above ₹50,000/month paid by individuals or HUF: 5%',
          '194Q — large buyers purchasing goods: 0.1% above the annual threshold',
        ],
      },
      {
        heading: 'TDS is deducted on the value before GST — usually',
        body: 'This is the question that causes the most invoice arguments, and the answer is clear. Where the GST component is shown separately on the invoice, TDS is deducted on the value excluding GST. A CBDT circular settled this for service payments, and the same logic is applied generally in practice.\n\nA worked example. You invoice ₹1,00,000 for consultancy plus 18% GST, so ₹1,18,000 total. Your client deducts 194J at 10% on ₹1,00,000, which is ₹10,000, and pays you ₹1,08,000. You still owe the full ₹18,000 GST to the government, and you claim the ₹10,000 as income tax credit.\n\nThe condition is that GST must be shown separately. If your invoice says "₹1,18,000 inclusive of taxes" without a breakup, the deductor is entitled to compute TDS on the whole ₹1,18,000 — costing you an extra ₹1,800 of cash flow until you claim it back. Always show the tax split.\n\nNote that TDS under income tax is entirely different from TDS under GST (Section 51), which applies to specified government departments and public sector undertakings deducting 2% on contracts above ₹2.5 lakh. If you supply to government bodies, you may see both.',
      },
      {
        heading: 'What to do if you have no PAN — and what to do about the certificate',
        body: 'Section 206AA is unforgiving: if you do not furnish a PAN, the deductor must deduct at the higher of the applicable rate or 20%. Give your PAN on your invoice and in your vendor onboarding form and this never becomes an issue. Higher rates also apply to non-filers under Section 206AB, so keeping your returns filed is not merely a compliance nicety — it directly changes what your customers withhold from you.\n\nThe deductor must issue Form 16A quarterly, downloaded from TRACES. Ask for it, and reconcile it against Form 26AS and your Annual Information Statement on the income tax portal. The most common failure is the client deducting but not depositing, or depositing against the wrong PAN. Either way the credit will not appear, and no amount of holding the client’s email is a substitute — the portal is what the assessing officer sees. If a credit is missing, ask the deductor to file a correction statement, and follow up before the year closes.',
      },
      {
        heading: 'When you can ask for lower or nil deduction',
        body: 'If your total tax liability for the year will be less than the TDS being deducted — common for businesses in a loss year, or professionals with heavy deductible expenses — you can apply under Section 197 in Form 13 for a lower or nil deduction certificate. Once granted, you give the certificate to your clients and they deduct at the reduced rate.\n\nThis is genuinely worth doing where TDS is materially locking up your working capital. A consultant billing ₹40 lakh a year with 10% deducted has ₹4 lakh sitting with the government until the refund arrives, which can be a year later. For businesses where that ₹4 lakh is the difference between hiring and not hiring, the Form 13 process pays for itself.',
      },
      {
        heading: 'Reflecting TDS cleanly on your own documents',
        body: 'Do not deduct TDS on your own invoice — the deduction is the payer’s obligation and the payer’s calculation. Your invoice shows the full amount payable. What helps is a note in the terms stating your PAN and, where relevant, "TDS, if applicable, may be deducted under Section 194J on the taxable value excluding GST." That single line prevents both the wrong-base error and the awkward phone call.\n\nOn the receipt side, when the client pays the net amount, record the receipt for the net figure and the TDS as a separate entry against the invoice, so the invoice shows as fully settled rather than perpetually short. Businesses that skip this end the year with a receivables ledger full of small unexplained balances that are, in fact, all TDS.',
      },
    ],
    faqs: [
      {
        q: 'Do freelancers have to deduct TDS on payments they make?',
        a: 'Only if your turnover exceeded ₹1 crore for business or ₹50 lakh for profession in the previous financial year. Below that, an individual or HUF generally has no obligation under the business-payment sections — though Section 194-IB rent deduction can still apply if you pay over ₹50,000 a month in rent.',
      },
      {
        q: 'Can I refuse a client who deducts TDS?',
        a: 'There is nothing to refuse — a deductor who is required to deduct has no discretion, and failing to deduct exposes them to interest, penalty and disallowance of the expense. The money is not lost; it is credited against your tax. If cash flow is the concern, apply for a lower deduction certificate under Section 197.',
      },
      {
        q: 'What if TDS was deducted at the wrong section or rate?',
        a: 'Raise it with the deductor before their quarterly return is filed, when a correction is easy. After filing, they must submit a correction statement. Your claim in your return should match what appears in Form 26AS, so the fix has to happen at the deductor’s end.',
      },
      {
        q: 'Is TDS applicable on reimbursements?',
        a: 'Pure reimbursements of expenses incurred on the client’s behalf, billed at cost with supporting bills and shown separately on the invoice, are generally not subject to TDS. Bundle them into your fee line and they become part of the taxable payment. Bill reimbursements as separate line items with documentation.',
      },
      {
        q: 'How do I claim TDS credit when filing my return?',
        a: 'The credit is pre-populated from Form 26AS and the Annual Information Statement into your income tax return. Verify each entry against your own records before filing, and claim the credit in the year in which the corresponding income is offered to tax.',
      },
    ],
    relatedSlugs: ['freelancer-pricing-guide', 'record-keeping-for-small-business', 'payment-receipt-format-guide'],
  },

  {
    slug: 'record-keeping-for-small-business',
    title: 'Business Record Keeping in India: What to Keep, For How Long, and How to File It',
    seoTitle: 'Business Record Keeping India 2026 | GST & Income Tax Retention Periods Explained',
    metaDescription:
      'Which business records Indian law requires you to keep, the GST 72-month and income tax retention periods, digital record rules, a simple folder system and what auditors actually ask for.',
    keywords: [
      'business record keeping India',
      'how long to keep business records',
      'gst record retention period',
      'books of account income tax',
      'digital record keeping rules',
      'invoice storage requirement',
      'small business accounting records',
      'audit document checklist India',
    ],
    date: '2026-07-26',
    readingTime: 9,
    category: 'Business Documentation',
    excerpt:
      'Nobody thinks about record keeping until a notice arrives asking for an invoice from three years ago. A simple system, set up once, makes that a five-minute task instead of a week.',
    intro:
      'Record keeping is the part of running a business that feels optional right up until it is not. A GST notice asking for supporting documents on a supply from two years ago. A customer disputing a payment made in a previous financial year. A bank asking for three years of statements and filings for a working capital facility. In each case, the business with a system produces the file in minutes and the business without one spends days reconstructing it — or simply cannot, and accepts the consequence. This guide covers what Indian law requires you to keep, for how long, and a filing structure simple enough that you will actually maintain it.',
    sections: [
      {
        heading: 'What GST law requires you to maintain',
        body: 'Section 35 of the CGST Act requires every registered person to keep, at their principal place of business, a true and correct account of production or manufacture of goods, inward and outward supplies, stock of goods, input tax credit availed, output tax payable and paid, and other prescribed particulars. Where a business has more than one place of business as shown on the registration certificate, the accounts relating to each place must be kept there.\n\nIn document terms, that means preserving copies of all tax invoices, bills of supply, delivery challans, credit and debit notes, receipt and refund and payment vouchers, e-way bills, and the returns you filed. The prescribed retention period is 72 months from the due date of furnishing the annual return for the year concerned — six years measured from a date that is itself nearly a year after the financial year ends. Where an appeal or proceeding is pending, records must be kept for one year after its final disposal, or 72 months, whichever is later.',
        bullets: [
          'Tax invoices, bills of supply and delivery challans — issued and received',
          'Credit notes, debit notes, receipt vouchers, payment vouchers, refund vouchers',
          'Stock records with opening balance, receipts, supply, goods lost or written off',
          'Input tax credit register and output tax liability records',
          'E-way bills and filed returns for every period',
          'Retention: 72 months from the annual return due date for that year',
        ],
      },
      {
        heading: 'What income tax law requires',
        body: 'Section 44AA and Rule 6F set the books-of-account requirements. Specified professionals — legal, medical, engineering, architectural, accountancy, technical consultancy, interior decoration, and others notified — must maintain prescribed books where gross receipts exceed the threshold: a cash book, journal where accounts are kept on the mercantile system, ledger, carbon copies of bills issued above ₹25, and original bills for expenditure. Medical professionals additionally maintain a daily case register and an inventory of drugs and consumables.\n\nFor other businesses, books must be maintained where income exceeds the specified limit or turnover exceeds the specified threshold, in a form that enables the assessing officer to compute total income. Retention under Rule 6F is six years from the end of the relevant assessment year — which, for a transaction in 2026-27, runs well into 2033. Where assessment is reopened, records must be kept until the reassessment is complete.\n\nCompanies have a longer obligation. Section 128 of the Companies Act requires books of account and relevant vouchers to be preserved for at least eight financial years, and where an investigation is ordered, for such longer period as directed.',
      },
      {
        heading: 'Digital records are allowed — with conditions',
        body: 'You are not required to keep paper. GST rules expressly permit records in electronic form, provided they are authenticated by digital signature, and require you to be able to produce them on demand along with the relevant passwords, file structure and access. Where records are kept electronically, a proper backup must be maintained such that the information can be restored within a reasonable period if the system fails.\n\nThe practical requirements that follow are worth stating plainly. Keep files in a format that will still open in five years — PDF rather than a proprietary app export. Keep at least two copies in different places, because a single laptop is not a backup strategy and neither is a single cloud account you have lost the password to. And keep the naming consistent, because an archive you cannot search is an archive you do not have.',
      },
      {
        heading: 'A folder structure that survives contact with reality',
        body: 'Complexity is the enemy of maintenance. The structure that people actually keep up is shallow and dated. Start with a folder per financial year — 2026-27 — and inside it, one folder per document type: Sales Invoices, Purchase Invoices, Quotations, Purchase Orders, Delivery Challans, Receipts, Credit and Debit Notes, GST Returns, Bank Statements, and Contracts.\n\nName every file so it sorts correctly and identifies itself without opening: INV-2026-0142_AcmeTraders_2026-08-04.pdf. Date-first naming is an alternative if you prefer chronological sorting. Either way, be consistent, because half a system is worse than none.\n\nThen add the one habit that makes it work: file at the moment of creation, not at month end. A document tool that lets you download and save the PDF the same minute you create it removes the backlog problem entirely. Businesses that batch their filing always fall behind, and the backlog is where documents go missing.',
      },
      {
        heading: 'What auditors and officers actually ask for',
        body: 'In a GST audit or scrutiny, the requests are predictable: the invoice under question and its e-way bill, the corresponding purchase invoice and proof of payment for input credit claimed, the reconciliation between your GSTR-1, GSTR-3B and books, and stock records where quantities are in question. In an income tax scrutiny, expect requests for supporting bills for large expenses, bank statements matching the cash flow, and confirmation of balances from major parties.\n\nThe common thread is that every claim needs its supporting document and its money trail. An expense with a bill but no payment record is questioned. A payment with no bill is disallowed. Input credit claimed on an invoice that does not appear in your GSTR-2B is reversed. Filing that keeps the invoice, the payment proof and the delivery evidence together per transaction is what makes these requests answerable.\n\nOne more thing worth keeping that no rule requires: written communication that establishes what was agreed. The email approving a scope change, the WhatsApp confirming a rate, the signed quotation. These are not tax records, but they are the records that settle commercial disputes, and they are the ones nobody thinks to save.',
      },
      {
        heading: 'Setting it up in an afternoon',
        body: 'Create the year folder and its subfolders. Move the last three months of documents into it, correctly named, so the structure has content and you learn where the gaps are. Set up an automatic cloud sync for that folder, and a second copy on an external drive or a different cloud account. Write your naming convention on a note inside the folder so anyone else in the business follows it too.\n\nThen decide the one rule you will not break: every document gets saved the day it is created or received. If you generate invoices, quotations, challans and receipts through a browser-based document tool, the PDF exists at the moment you finish — saving it into the right folder is a two-second step. Two seconds, taken every time, is the entire difference between a business that can answer a notice and one that cannot.',
      },
    ],
    faqs: [
      {
        q: 'How long do I need to keep GST invoices?',
        a: 'Seventy-two months from the due date of furnishing the annual return for the financial year concerned. Because that due date falls after the year ends, the effective retention is close to seven years from the transaction. If any appeal or proceeding is pending, keep them until one year after final disposal if that is later.',
      },
      {
        q: 'Are scanned copies acceptable, or do I need originals?',
        a: 'Electronic records are permitted under GST rules provided they are properly authenticated, backed up and producible on demand. For income tax, digitally maintained books are equally acceptable. Keep original signed contracts and any stamped documents in physical form, since their evidentiary value can depend on the original.',
      },
      {
        q: 'What happens if I cannot produce records during an audit?',
        a: 'The consequences range from disallowance of the input credit or expense in question to best-judgment assessment, where the officer estimates your liability. Failure to maintain required records also attracts penalties under both GST and income tax law, independent of the tax effect.',
      },
      {
        q: 'Do I need to keep records for a business I have closed?',
        a: 'Yes. Retention obligations run from the transaction and the return, not from whether the business is operating. Cancellation of GST registration does not end the requirement, and assessments can be reopened after closure. Archive the final year’s records the same way you would for an operating year.',
      },
      {
        q: 'Is a WhatsApp message valid evidence of a business agreement?',
        a: 'Electronic records are admissible under the Indian Evidence Act subject to the certification requirements, and courts have accepted WhatsApp communication in commercial matters. It is far better than nothing, but a signed quotation or a confirmed email carries more weight and is easier to produce cleanly.',
      },
    ],
    relatedSlugs: ['business-documentation-guide', 'gst-invoice-rules-guide', 'tds-on-payments-guide'],
  },

  {
    slug: 'how-to-price-your-services',
    title: 'How to Price Your Services: Costing, Margins and the Number You Should Actually Quote',
    seoTitle: 'How to Price Services in India 2026 | Costing Method, Hourly Rate & Margin Calculator',
    metaDescription:
      'A step-by-step method for pricing services — calculating your true cost per hour, choosing between hourly, fixed and value pricing, setting margins, handling discount requests and raising rates with existing clients.',
    keywords: [
      'how to price your services',
      'service pricing strategy',
      'how to calculate hourly rate',
      'freelance rate calculator India',
      'cost plus pricing method',
      'value based pricing',
      'how to raise prices with clients',
      'profit margin small business',
    ],
    date: '2026-07-26',
    readingTime: 11,
    category: 'Pricing',
    excerpt:
      'Most small businesses price by looking at what competitors charge and shaving 10%. That is not a strategy — it is a slow way to work hard for nothing.',
    intro:
      'Ask a service business owner how they arrived at their rate and the honest answer is usually some combination of what the last client paid, what a competitor quotes, and what felt sayable without flinching. It works well enough to stay busy and badly enough to stay broke. The gap between those two outcomes is not sales skill — it is knowing your actual cost of delivering an hour of work, and then choosing a pricing model deliberately instead of defaulting to one. This guide walks through the arithmetic, the three pricing models and when each fits, and the two conversations everybody dreads: the discount request and the rate increase.',
    sections: [
      {
        heading: 'Start with your real cost per productive hour',
        body: 'Every pricing decision rests on one number: what it costs you to deliver one hour of billable work. Most people estimate it by dividing their salary expectation by 2,000 hours, which is wrong in two ways — it ignores overheads and it assumes every working hour is billable.\n\nDo it properly. Add up your annual fixed costs: your own target income, salaries, rent, software subscriptions, internet and phone, professional fees, travel, equipment depreciation, insurance, and a line for taxes. Then work out your genuinely billable hours. A full year is roughly 2,000 working hours, but sales, admin, invoicing, follow-ups, learning and unpaid revisions consume a large share. For most independent service providers, 55 to 65 percent billable is realistic — call it 1,200 hours. A small team with dedicated admin support might reach 70 percent.\n\nDivide annual costs by billable hours and you have your break-even rate. If your costs are ₹12,00,000 and you bill 1,200 hours, you must earn ₹1,000 an hour just to stand still. Every rate below that is subsidised by you.',
        bullets: [
          'Fixed costs include your own target income — you are not a free input',
          'Billable hours are 55–65% of working hours for most independents, not 100%',
          'Break-even rate = annual costs ÷ billable hours',
          'Add your target margin on top of break-even, not on top of nothing',
          'Recalculate annually — costs drift upward, rates usually do not',
        ],
      },
      {
        heading: 'Margin is not the same as markup',
        body: 'This confusion costs real money. Markup is calculated on cost; margin is calculated on price. A ₹1,000 cost sold at ₹1,300 is a 30% markup but only a 23% margin. Businesses that think they are running 30% margins on a 30% markup are systematically over-optimistic about profitability.\n\nTo hit a target margin, divide rather than multiply: price equals cost divided by one minus the margin. For a 30% margin on ₹1,000 of cost, that is ₹1,000 ÷ 0.7 = ₹1,429. Build this into your quotation arithmetic once and it stops being a thing you get wrong under time pressure.\n\nSet the margin deliberately by work type. Routine, competitive, low-risk work carries a thinner margin. Specialised work, tight deadlines, high-liability projects and anything requiring skills that are scarce in your market carry more. A single blended rate across all your work means you are overcharging for the easy jobs you win and undercharging for the hard ones you dread.',
      },
      {
        heading: 'Hourly, fixed or value: choosing the model',
        body: 'Hourly pricing suits work where scope genuinely cannot be defined in advance — ongoing support, consulting on evolving problems, maintenance retainers. Its weakness is structural: it caps your income at your hours and it penalises you for getting faster. The moment you become expert enough to do in two hours what took five, hourly billing cuts your income.\n\nFixed-price project quoting suits defined deliverables — a website, an interior fit-out, an audit, an event. It is what most clients prefer because it removes their uncertainty. The risk transfers to you, which is exactly why fixed prices must include a contingency: estimate the hours honestly, then add 15 to 25 percent for the things that always happen. And they must be paired with a written scope, because fixed price without fixed scope is how projects consume their entire margin in revisions.\n\nValue-based pricing sets the fee against the client’s outcome rather than your effort. It fits where your work has a measurable financial impact — a campaign that generates leads, a system that saves labour cost, a design that lifts conversion. It requires you to understand the client’s economics and to have the confidence to discuss them, which is why most people avoid it. It is also where the highest margins in service businesses live.\n\nMost mature service businesses use all three: retainers hourly, projects fixed, and strategic engagements on value.',
      },
      {
        heading: 'Building the quote so the price is not the only thing visible',
        body: 'A quotation showing a single line and a single number invites one response: negotiate the number. A quotation showing what is included, what is excluded, the delivery timeline, the revision allowance and the payment schedule invites a conversation about scope, which is a conversation you can win.\n\nItemise enough to show the work, not so much that you invite line-by-line deletion. Three to seven meaningful line items usually strikes the balance. State exclusions explicitly, because unstated exclusions become included by assumption. Cap revisions in writing — two rounds is a common norm, with further rounds billed. And put the validity period on the quote, so today’s price is not still being argued about in November.\n\nOffering tiered options changes the dynamic further. When a client sees only one price, the decision is yes or no. When they see three — a lean version, a standard version and a comprehensive version — the decision becomes which one, and the middle option becomes the natural anchor. This is not manipulation; it is giving the buyer a genuine choice about scope rather than a binary on cost.',
      },
      {
        heading: 'When the client asks for a discount',
        body: 'The instinctive response — shave 10% to close the deal — teaches the client that your first price was inflated and that every future price is negotiable. Once learned, that lesson never unlearns.\n\nThe better response trades rather than concedes. If the budget is ₹80,000 against a ₹1,00,000 quote, remove ₹20,000 of scope. Offer a lower price for a longer timeline that lets you fit the work around better-paying jobs. Offer a discount for full advance payment, which has real cash-flow value to you. Offer a reduced rate for a longer commitment — a three-month retainer at a lower monthly figure. Each of these preserves the principle that price tracks value delivered.\n\nAnd be willing to lose the job. A client who will only proceed below your break-even rate is not a client, they are a subsidy. Businesses that never lose a quote on price are almost certainly priced too low.',
      },
      {
        heading: 'Raising rates with existing clients',
        body: 'This is the single highest-return action most small businesses never take. Costs rise every year; rates for existing clients often stay frozen for three or four, which is a silent margin collapse.\n\nDo it on a schedule rather than when resentment builds. Announce in writing, six to eight weeks ahead, with a specific effective date. Keep the explanation short and factual — rates are being revised across the board — and do not over-justify. Apply it to new work and to renewals rather than mid-project. Where a client is genuinely valuable and price-sensitive, offer a grandfathered rate for a defined transition period rather than a permanent exception.\n\nExpect some attrition and plan for it. If you raise rates 15% and lose 10% of clients, you are ahead on revenue and further ahead on time. The clients most likely to leave over a modest increase are usually the ones consuming disproportionate effort. In practice, most owners who finally raise rates report that the majority of clients accept without comment, and the main cost was the months of anxiety beforehand.',
      },
    ],
    faqs: [
      {
        q: 'How do I know if my prices are too low?',
        a: 'Three signals. You win nearly every quote you send. You are busy but the bank balance does not grow. And you feel resentment doing work you agreed to. Any one of these on its own can have another cause; together they are a pricing problem, not a sales problem.',
      },
      {
        q: 'Should I show my hourly rate to clients on a fixed-price quote?',
        a: 'Generally no. Once the rate is visible, the conversation moves to how many hours something should take, which is a debate about your efficiency rather than the value of the outcome. Quote the deliverable and the price; keep the internal arithmetic internal.',
      },
      {
        q: 'How much advance should I take?',
        a: 'Thirty to fifty percent before starting is standard across most Indian service and trade sectors, with the balance on milestones and completion. For new clients or custom work with material costs, weight it higher. A client unwilling to pay any advance is signalling either cash-flow trouble or low commitment.',
      },
      {
        q: 'Is it better to charge per project or per hour?',
        a: 'Per project, where the scope can be defined — it rewards efficiency, gives the client certainty and lets you price against value rather than time. Keep hourly for genuinely open-ended work, and always pair fixed prices with a written scope and a revision cap.',
      },
      {
        q: 'How often should I review my pricing?',
        a: 'Recalculate your cost per billable hour annually, and review rates for new clients at the same time. Existing-client increases every twelve to eighteen months keep pace with cost inflation without any single increase feeling dramatic.',
      },
    ],
    relatedSlugs: ['freelancer-pricing-guide', 'quotation-negotiation-tips', 'how-to-win-more-deals-with-quotations'],
  },

  {
    slug: 'quotation-to-cash-workflow',
    title: 'The Quotation-to-Cash Workflow: Turning a Yes Into Money in the Bank',
    seoTitle: 'Quote to Cash Process 2026 | Quotation, PO, Invoice & Payment Workflow for Small Business',
    metaDescription:
      'The complete document workflow from quotation to payment — which document to issue at each stage, how they reference each other, where deals leak money and how to run the whole cycle with free online tools.',
    keywords: [
      'quote to cash process',
      'quotation to invoice workflow',
      'sales document process',
      'order to cash small business',
      'business document workflow',
      'quotation po invoice sequence',
      'sales process documentation',
      'how to convert quotation to invoice',
    ],
    date: '2026-07-24',
    readingTime: 9,
    category: 'Business Documentation',
    excerpt:
      'A signed quotation is not revenue. Between yes and money there are five documents, and every one you skip is a place the deal can leak.',
    intro:
      'Most small businesses are good at two moments — winning the work and doing the work — and improvised at everything in between. The improvisation is expensive. Scope creeps because nothing recorded what was agreed. Invoices sit unapproved because they lack a purchase order reference. Payments arrive without anyone knowing which bill they settle. Each is a small failure, and together they are the reason a business can be busy all year and end it with nothing in the bank. The fix is a defined document workflow, running from the first quotation to the final receipt, where each document references the one before it. This guide lays out that chain and shows where deals actually leak.',
    sections: [
      {
        heading: 'The chain, end to end',
        body: 'Every commercial transaction follows the same skeleton, whether it is a ₹5,000 repair or a ₹50 lakh contract. The customer enquires. You quote. They accept, formally or informally. Work is done or goods are dispatched, accompanied by a challan where goods move. You invoice. They pay. You receipt.\n\nWhat changes with deal size is not the sequence but how much of it is written down. On a small job, the quotation and the invoice may be the whole paper trail. On a large one, you will have a quotation, a purchase order, a proforma invoice for the advance, a receipt voucher, delivery challans per dispatch, a tax invoice, possibly a credit note for a return, and a payment receipt. The discipline that matters is that each document names the one before it — the purchase order quotes the quotation number, the challan quotes the purchase order, the invoice quotes both, and the receipt quotes the invoice. That reference chain is what lets anyone reconstruct the deal a year later in two minutes.',
        bullets: [
          'Quotation → acceptance → purchase order → challan → invoice → receipt',
          'Each document carries the reference number of the previous one',
          'Advance payments add a proforma invoice and a receipt voucher',
          'Corrections after invoicing go through credit or debit notes, never edits',
        ],
      },
      {
        heading: 'Stage one: the quotation, and getting acceptance in writing',
        body: 'The quotation does more than state a price. It defines scope, exclusions, timeline, revision limits, payment terms and validity. Everything you do not write here is something you will argue about later at your own expense.\n\nThe stage that gets skipped is acceptance. A verbal yes on a phone call is not a record, and it is the single most common reason scope disputes become unwinnable. Acceptance does not need to be formal — a reply saying "confirmed, please proceed" quoting the quotation number is entirely sufficient, and asking for it is normal professional practice, not distrust. For anything substantial, ask for a signed copy of the quotation or a purchase order.\n\nThe validity date matters more than people expect. Without one, a client can accept a quotation six months later at prices that no longer work, and you are in an awkward position. Fifteen to thirty days is standard for most service work; shorter where material costs are volatile.',
      },
      {
        heading: 'Stage two: the purchase order and the advance',
        body: 'When your customer is an organisation of any size, their purchase order is what unlocks their payment machinery. An invoice arriving without a purchase order number gets stuck in an approval queue that nobody owns. So ask for one at acceptance, before work starts, and record it against the job.\n\nIf you are collecting an advance — and for most custom work you should — this is where a proforma invoice comes in. It gives the client’s accounts department a document to process, states the amount and the tax treatment, and is not a tax invoice. When their payment arrives, issue a receipt voucher and account for the tax on the advance. Then start work, not before.\n\nThe rule that protects you here is simple and often broken: work begins after the advance clears, not after the advance is promised. Businesses that start on a promise routinely find that the advance and the customer’s urgency both evaporate once the work is underway.',
      },
      {
        heading: 'Stage three: delivery, and proof that it happened',
        body: 'For goods, the delivery challan travels with the consignment, quotes the purchase order, lists what is being sent and comes back signed by the receiver. That signature is your evidence of what arrived and when. Where the consignment value crosses the threshold, an e-way bill accompanies it.\n\nFor services, the equivalent is a completion or milestone sign-off — an email confirming the deliverable was received and accepted, a signed timesheet, a handover note. Service businesses often have no delivery document at all, which is precisely why service payment disputes are harder to resolve than goods disputes. Create the record: a short email at each milestone saying what was delivered and asking for confirmation costs two minutes and settles arguments before they start.\n\nDate this stage carefully. Under the MSMED Act, the payment clock for registered micro and small enterprises runs from the date of acceptance, so a documented acceptance date is what makes any later recovery claim workable.',
      },
      {
        heading: 'Stage four: invoice on the day, not at month end',
        body: 'The invoice should go out the day the work is delivered or the goods are dispatched. Every day of delay pushes your bill further down the customer’s payment cycle, and in businesses that batch invoicing to month end, a job completed on the 2nd waits four weeks before the clock even starts.\n\nThe invoice must quote the purchase order number and the challan reference, carry an explicit due date rather than "payment on receipt", show the tax split correctly, and include payment instructions with bank details and a UPI ID. Where you are a registered micro or small enterprise, print the Udyam number — it changes the buyer’s tax position on late payment and quietly moves you up their priority list.\n\nAnd send it to the right person. An invoice emailed to your project contact rather than accounts payable is an invoice sitting in an inbox. Ask, once, where invoices should be sent, and send every subsequent one there with the project contact copied.',
      },
      {
        heading: 'Stage five: collection and the receipt',
        body: 'Follow-up should be scheduled rather than emotional: a reminder before the due date, a confirmation request on it, a specific question three days after, and an escalation at two weeks. Each message attaches the invoice again and asks something that requires an answer.\n\nWhen the money arrives, issue a receipt the same day, referencing the invoice number and showing any balance still outstanding. Two lines of work, and it eliminates the entire category of dispute about whether and against what a payment was made. It also gives you an accurate receivables position at any moment, which is the number that actually tells you whether the business is healthy.\n\nIf something needs correcting after invoicing — a return, an agreed discount, an undercharge — do it with a credit or debit note referencing the original invoice. Never edit an issued invoice and never reuse its number.',
      },
      {
        heading: 'Running the whole chain without buying software',
        body: 'None of this requires an ERP. A browser-based document tool that produces quotations, proforma invoices, purchase orders, delivery challans, invoices, receipts and credit notes with consistent numbering and your branding covers the entire workflow, and the discipline that makes it work is filing each PDF into a per-year, per-type folder the moment it is created.\n\nAdd one habit on top: keep a single sheet listing every open job with its quotation number, purchase order number, invoice number, amount, due date and payment status. It takes a minute a day to maintain, it tells you at a glance what is unbilled and what is overdue, and it is the difference between running a business and hoping one is running itself.',
      },
    ],
    faqs: [
      {
        q: 'Can I convert a quotation directly into an invoice?',
        a: 'Yes, and you should — the line items, rates and tax treatment carry over, which removes transcription errors. Give the invoice its own number in the invoice series, quote the quotation number as a reference, and never reuse the quotation number as an invoice number.',
      },
      {
        q: 'Do I need a purchase order from every customer?',
        a: 'Not from individuals or small businesses paying directly. For any organisation with an accounts department, ask — their internal approval process usually requires it, and an invoice without a purchase order reference is the most common cause of a payment stalling.',
      },
      {
        q: 'What if the customer asks for extra work mid-project?',
        a: 'Issue a revised quotation or a supplementary one covering the additional scope, and get it accepted in writing before doing the work. Scope added verbally is scope you will deliver for free — this is the single largest source of margin loss in service businesses.',
      },
      {
        q: 'Should I invoice per milestone or at the end?',
        a: 'Per milestone, for anything running longer than a few weeks. It matches your cash outflow, surfaces payment problems early while you still have leverage, and reduces the amount at risk if the relationship goes wrong. Define the milestones in the quotation so there is no argument about whether one has been reached.',
      },
      {
        q: 'How do I keep numbering consistent across so many document types?',
        a: 'Give each type its own prefixed series within the financial year — QT-, PO-, PI-, DC-, INV-, REC-, CN-, DN- — and never mix them. A document tool that maintains each series automatically removes the risk of duplicates and gaps, which are the two things auditors question first.',
      },
    ],
    relatedSlugs: ['business-documentation-guide', 'purchase-order-process-guide', 'how-to-recover-late-payments'],
  },

  {
    slug: 'upi-qr-payments-for-business',
    title: 'Getting Paid by UPI: QR Codes, Business Accounts and What the Rules Actually Say',
    seoTitle: 'UPI Payments for Business India 2026 | QR Code on Invoice, Limits & Tax Rules',
    metaDescription:
      'How Indian small businesses should accept UPI — putting a QR code on your invoice, personal vs business UPI accounts, transaction limits, the dynamic QR requirement for large B2C businesses, disputes and tax treatment.',
    keywords: [
      'upi for business',
      'upi qr code on invoice',
      'accept upi payments business',
      'dynamic qr code gst',
      'upi transaction limit',
      'upi payment dispute chargeback',
      'business upi account',
      'digital payment for small business India',
    ],
    date: '2026-07-24',
    readingTime: 8,
    category: 'Payments',
    excerpt:
      'A UPI QR code printed on your invoice removes every step between the customer reading your bill and the money reaching your account. Most businesses still make people ask for bank details.',
    intro:
      'India settles more real-time payments than any other country, and for a small business that is not an abstract statistic — it is the difference between a customer paying on the spot and a customer paying next month. Yet a large share of invoices sent by Indian small businesses still carry only bank details, or nothing at all, requiring the customer to message and ask where to send the money. Every one of those exchanges is a delay. This guide covers how to accept UPI properly as a business: what to put on your documents, whether a personal handle is good enough, the limits that apply, and the compliance rules that kick in as you grow.',
    sections: [
      {
        heading: 'Put the payment instruction on the document itself',
        body: 'The single highest-return change most businesses can make to their invoices is printing the payment details on them: bank name, account number, IFSC, account holder name, and a UPI ID with a QR code. Nothing else about the invoice matters if the customer has to stop and ask how to pay.\n\nA static QR code encoding your UPI ID is enough for most small businesses. The customer opens any UPI app, scans, types the amount and pays. A dynamic QR code goes further by embedding the amount and a reference, so the customer cannot mistype the figure and your reconciliation carries the invoice number. For invoices generated in a browser-based tool, generating the QR at creation time and placing it on the PDF is standard.\n\nAlso print the invoice number in a place the customer will see when adding a payment remark, and ask them to quote it. Payments that arrive with a reference reconcile themselves; payments that arrive as an unexplained credit consume your time every single month.',
        bullets: [
          'Bank name, account number, IFSC and account holder name on every invoice',
          'UPI ID in text as well as a scannable QR code',
          'Ask the customer to quote the invoice number in the payment remark',
          'Dynamic QR with the amount embedded removes typing errors',
        ],
      },
      {
        heading: 'Personal handle or business account?',
        body: 'Plenty of small businesses run collections through a personal UPI handle linked to a savings account. It works, and for a very small operation it is not unreasonable. But it creates three problems that compound as you grow.\n\nFirst, mixing business receipts with personal transactions makes bookkeeping and any later scrutiny genuinely painful, because separating the two after the fact is manual work. Second, savings accounts have transaction-count and value norms that were not designed for commercial volumes, and heavy business use of a personal account can attract attention from both your bank and the tax department. Third, you lose the settlement reports, refund handling and dispute support that a merchant account provides.\n\nThe cleaner setup is a current account for the business with a merchant UPI handle linked to it, obtained either through your bank or a payment aggregator. Merchant collections also open access to features personal handles do not get, and they keep the business’s books separable from yours — which matters the first time you need to show a lender or a buyer what the business actually earns.',
      },
      {
        heading: 'Limits you should know before a large payment fails',
        body: 'UPI has a general per-transaction cap for ordinary payments, with higher ceilings notified for specific categories such as capital markets, insurance, education and healthcare payments, and for verified merchants in certain flows. Banks also apply their own per-transaction and daily limits, which are frequently lower than the network ceiling, and new UPI users face a lower cap for the first 24 hours after registration.\n\nThe practical consequence is that a customer trying to pay a large invoice by UPI may hit a wall that has nothing to do with your setup. For amounts above the everyday range, offer NEFT or RTGS as the primary route and UPI as the convenient option for smaller bills and part payments. Printing both on the invoice means the customer picks whichever works without a phone call.\n\nLimits are revised periodically by NPCI and by individual banks, so treat any specific figure you read as needing confirmation rather than as fixed.',
      },
      {
        heading: 'The dynamic QR requirement for larger B2C businesses',
        body: 'There is a GST rule most small businesses do not need to worry about but should know exists. Registered persons with aggregate turnover above the notified threshold — ₹500 crore — are required to provide a dynamic QR code on B2C invoices, enabling digital payment. Where the customer pays digitally through some other mode and the payment is cross-referenced on the invoice, that is treated as compliance.\n\nThis is squarely an enterprise obligation, and the threshold puts it far outside the reach of the businesses this guide is aimed at. It is worth knowing for two reasons: it tells you the direction of travel in Indian invoicing regulation, and it explains why the large retailers you buy from all show a QR on their bills. Adopting the practice voluntarily at small scale costs nothing and gets you paid faster.',
      },
      {
        heading: 'Disputes, refunds and failed transactions',
        body: 'UPI transactions are near-instant and, once successfully credited, are not reversible by the payer at will — there is no card-style chargeback mechanism where the customer can unilaterally claw back a completed payment. Refunds happen because you send the money back, which is as it should be for a business.\n\nWhat you will encounter instead is the failed-but-debited case: the customer’s account is debited, your account is not credited, and the transaction shows as pending or failed. These auto-reverse within a defined window in most cases. If it does not, the customer raises a complaint through their UPI app, which routes to their bank, and unresolved complaints escalate to the RBI ombudsman scheme for digital transactions. Your role is to check your own statement honestly, confirm whether the credit arrived, and not to release goods against a screenshot alone — screenshots are trivially faked and this is a common small-value fraud.\n\nVerify receipt in your own bank app or statement before handing over goods. For remote sales, wait for the credit, not the screenshot.',
      },
      {
        heading: 'Tax and record keeping for digital receipts',
        body: 'Money received by UPI is business income exactly like cash or cheque, and it is fully visible. Bank statements, GST returns and your income tax return all need to tell the same story, and digital receipts make mismatches obvious in a way cash never did. Treat that as an advantage rather than a risk: businesses with clean digital receipt records find lending, vendor onboarding and any scrutiny substantially easier.\n\nOperationally, issue a receipt for UPI payments the same as any other mode, recording the UPI transaction ID on it and linking it to the invoice number. Reconcile weekly rather than monthly. And keep the settlement reports from your aggregator alongside your bank statement, because the gross-versus-net difference caused by charges is the thing that most often makes a month refuse to tie out.\n\nOne note on charges: UPI person-to-merchant transactions do not carry merchant discount rate charges for most categories, which is a genuine cost advantage over cards. Where an aggregator charges a platform fee, that fee is a deductible business expense and should be recorded rather than netted off silently.',
      },
    ],
    faqs: [
      {
        q: 'Can I use my personal UPI ID to collect business payments?',
        a: 'It is common in very small businesses and works technically, but it mixes business and personal records, may exceed what a savings account is intended for at commercial volumes, and gives you none of the merchant settlement or dispute support. A current account with a merchant handle is the cleaner setup once you are past the earliest stage.',
      },
      {
        q: 'Do I have to put a QR code on my invoices?',
        a: 'Only businesses above the notified turnover threshold are required to include a dynamic QR on B2C invoices under GST rules. For everyone else it is voluntary — and worth doing anyway, because it measurably shortens the time between a customer reading your invoice and paying it.',
      },
      {
        q: 'Is a UPI payment screenshot proof that I have been paid?',
        a: 'No. Screenshots are easily fabricated and a pending transaction can still fail. Confirm the credit in your own bank app or statement before releasing goods or closing the invoice, and record the UPI reference on your receipt.',
      },
      {
        q: 'What happens if a customer pays the wrong amount by UPI?',
        a: 'Treat it as a part payment or an excess. Issue a receipt for what actually arrived, showing the balance outstanding or the excess held. For an overpayment, refund it by transfer with a clear reference rather than adjusting it silently against a future bill the customer has not agreed to.',
      },
      {
        q: 'Are UPI receipts taxable differently from cash?',
        a: 'No. Income is income regardless of how it is received. The difference is visibility — digital receipts leave a complete trail, which makes accurate reporting easier and inaccurate reporting far riskier. There is also no ₹2 lakh single-transaction restriction as there is for cash under Section 269ST.',
      },
    ],
    relatedSlugs: ['payment-receipt-format-guide', 'how-to-recover-late-payments', 'payment-terms-in-quotations'],
  },
];
