import type { BlogPost } from '@/data/blog-types';

export const blogPosts20: BlogPost[] = [
  {
    slug: 'gstr-1-vs-gstr-3b-difference-india',
    title: 'GSTR-1 vs GSTR-3B: What Is the Difference and When to File Each',
    seoTitle: 'GSTR-1 vs GSTR-3B 2026: Difference, Due Dates & Filing Guide',
    metaDescription:
      'Confused between GSTR-1 and GSTR-3B? Simple explanation: GSTR-1 reports what you sold (due 11th), GSTR-3B is where you pay tax (due 20th). Due dates, QRMP option, mismatches and monthly mistakes to avoid.',
    keywords: [
      'gstr-1 vs gstr-3b difference',
      'what is gstr-1',
      'what is gstr-3b',
      'gstr-1 due date',
      'gstr-3b due date',
      'gstr-1 and gstr-3b mismatch',
      'qrmp scheme gstr filing',
    ],
    date: '2026-10-04',
    updatedDate: '2026-10-04',
    author: 'Prashant Upadhyay',
    readingTime: 8,
    category: 'GST & Tax',
    heroImage: '/blog/gstr1-vs-gstr3b.svg',
    heroAlt: 'Two GST return documents side by side labelled GSTR-1 due on the 11th and GSTR-3B due on the 20th',
    excerpt:
      'Every month your CA mentions two returns and you nod along. Here is the difference in plain words: GSTR-1 is your sales report, GSTR-3B is your tax payment — and mixing them up is what gets most small businesses their first GST notice.',
    intro:
      'If you run a small business in India, you have had this moment: your accountant says "GSTR-1 file kar diya, 3B bacha hai" and you nod like you understand, while privately having no idea what either of those things actually is. You are not alone — this is probably the most common GST confusion among business owners, and it persists because nobody ever explained it in normal words.\n\nHere is the whole thing in two lines. GSTR-1 is the return where you tell the government what you sold — invoice by invoice. GSTR-3B is the return where you summarise everything and actually pay the tax. One is a report, the other is a payment. They are filed on different dates, they serve different purposes, and the government cross-checks them against each other — which is exactly where most first-time notices come from.\n\nThis guide explains both returns the way a patient CA would over chai: what goes in each, the due dates that actually matter, the quarterly option for small businesses, and the monthly mistakes that cost real money. General information only — filing specifics for your business should still go past your CA.',
    sections: [
      {
        heading: 'Do you really need to understand both?',
        body: 'Short answer: yes, at least at this level. Your CA or accountant may do the actual filing, but you are the one who signs off on it — legally, the returns are yours. And the most expensive GST mistakes small businesses make are not technical errors; they are owner-level decisions made without understanding the basics. Paying a supplier late because you did not know your GSTR-1 affects their tax credit. Missing a deadline because you thought "the CA handles it" while the CA was waiting for your sales data.\n\nThink of it like this. You do not need to know how to repair your shop\'s shutter, but you need to know it exists, what it does, and when it needs attention. GSTR-1 and GSTR-3B are the two shutters of your GST compliance. This guide gives you exactly that working knowledge — nothing more, nothing less.',
        callout: {
          type: 'tip',
          text: 'Bookmark this page and open it once a month when your accountant asks for data. In three months you will know more about GST returns than most business owners you know.',
        },
      },
      {
        heading: 'GSTR-1: telling the government what you sold',
        body: 'GSTR-1 is your outward supplies statement — a fancy way of saying "here is everything I sold this month, invoice by invoice." Every sale you made to a GST-registered customer goes in here with the invoice number, date, value, and tax charged. Sales to unregistered customers (like a walk-in retail buyer) go in as consolidated totals, not invoice by invoice.\n\nWhy does the government want this level of detail? Because your GSTR-1 becomes your customer\'s purchase record. When you report a sale to another business, that business sees it in their GSTR-2B and claims input tax credit on it. Your filing quite literally decides whether your customer gets their tax credit. File late or wrong, and your best client\'s accountant will be calling you — politely at first.\n\nThe due date is the 11th of the following month. January\'s GSTR-1 is due 11 February, February\'s by 11 March, and so on. If your annual turnover is up to ₹5 crore, you can opt for the QRMP scheme and file GSTR-1 quarterly instead (more on that below) — but the default, and the safer habit for growing businesses, is monthly.',
        bullets: [
          'Reports every sale: invoice number, date, taxable value, and GST charged.',
          'Your GSTR-1 feeds your customers\' GSTR-2B — their input tax credit depends on your filing.',
          'Due on the 11th of the next month (monthly filers).',
          'Businesses up to ₹5 crore turnover can choose quarterly filing under QRMP.',
          'Late filing attracts a late fee per day, even if there is no tax to pay.',
        ],
      },
      {
        heading: 'GSTR-3B: the one where money actually moves',
        body: 'If GSTR-1 is the report, GSTR-3B is the bill. This is a summary return — no invoice-by-invoice detail — where you declare your total sales, total purchases, the input tax credit you are claiming, and then pay the net tax. This is the return where cash actually leaves your account and goes to the government.\n\nHere is a concrete example. Meera runs a boutique in Lucknow. In September she had taxable sales of ₹4,00,000 (GST collected: ₹72,000 at 18%) and purchases of ₹2,50,000 (GST paid to suppliers: ₹45,000). In her GSTR-1, she reported each sale invoice. In her GSTR-3B, she declares ₹4,00,000 of outward supplies, claims ₹45,000 of input tax credit, and pays the difference — ₹27,000 — to the government. One return tells the story invoice by invoice; the other settles the account.\n\nThe due date is the 20th of the following month — nine days after GSTR-1. That gap is deliberate: you finalise what you sold first, then compute and pay. Under QRMP, quarterly filers pay tax monthly through a challan (PMT-06) but file GSTR-3B quarterly.',
        bullets: [
          'Summary return: total sales, total ITC claimed, net tax payable — no invoice detail.',
          'This is where you actually pay GST to the government.',
          'Due on the 20th of the next month (monthly filers).',
          'Input tax credit is claimed here, based on what suppliers reported in their GSTR-1.',
          'Interest applies if the net tax is paid after the due date — even by a single day.',
        ],
      },
      {
        heading: 'How the two talk to each other — and why mismatches hurt',
        body: 'Here is the part nobody told you, and it is the most important section of this guide. The GST system automatically compares your GSTR-1 with your GSTR-3B. If your GSTR-1 says you sold ₹4,00,000 but your GSTR-3B declares ₹3,50,000 of outward supplies, the computer flags the ₹50,000 gap. That flag can turn into a notice asking you to explain the difference or pay up with interest.\n\nThe same cross-checking happens on the purchase side. Your GSTR-3B claims input tax credit based on your suppliers\' GSTR-1 filings, which appear in your GSTR-2B. If your supplier never filed their GSTR-1, their invoice does not appear in your 2B — and you cannot claim credit on it, even though you genuinely paid the tax. This is why experienced business owners chase their suppliers about GSTR-1 filing the way they chase payments. Your supplier\'s laziness becomes your blocked credit.\n\nPractical takeaway: reconcile every month before filing GSTR-3B. Your sales as per books, your GSTR-1, and your GSTR-3B outward supplies should tell the same story. Ten minutes of matching saves months of notice replies.',
        callout: {
          type: 'warning',
          text: 'Never claim input tax credit in GSTR-3B on invoices that do not appear in your GSTR-2B. The system auto-matches now, and excess ITC claims are one of the fastest routes to a scrutiny notice.',
        },
      },
      {
        heading: 'The calendar you can stick on your wall',
        body: 'Forget memorising sections of the Act. You need four dates burned into your routine. For monthly filers: GSTR-1 by the 11th, GSTR-3B by the 20th, of the month following the tax period. That is the entire monthly rhythm. Everything else — annual returns, e-way bills, TDS filings — sits on top of this foundation.\n\nFor QRMP (quarterly) filers with turnover up to ₹5 crore: GSTR-1 is filed quarterly by the 13th of the month after the quarter, GSTR-3B quarterly by the 22nd or 24th (depending on your state), but tax is still paid monthly via challan PMT-06 by the 25th. QRMP reduces paperwork but not the discipline — many businesses choose it and then forget the monthly challan, which defeats the purpose.\n\nOne honest opinion: if your business is growing and you can manage monthly filing, stay monthly. The discipline of closing your books every 30 days catches errors while they are small, your customers get their ITC faster (which makes you a better supplier to buy from), and you never have a quarter\'s worth of mess to untangle.',
        numbered: [
          '11th: GSTR-1 due (report what you sold).',
          '20th: GSTR-3B due (pay the net tax).',
          'QRMP quarterly option: GSTR-1 by 13th, GSTR-3B by 22nd/24th after quarter end, monthly tax challan by 25th.',
          'Late fee applies per day of delay for both returns — nil returns included.',
          'Reconcile books vs GSTR-1 vs GSTR-3B before the 20th, every single month.',
        ],
      },
      {
        heading: 'Mistakes small businesses make every single month',
        body: 'After the concepts, here is the human part — the errors real businesses repeat. First: treating GSTR-1 as optional paperwork because "3B is the real return." It is not optional; your customers\' tax credits hang on it, and late GSTR-1 filing now blocks your own GSTR-1 for the next period in some cases.\n\nSecond: filing GSTR-3B from memory instead of from the books. "Sales to lagbhag itne the" is how mismatches are born. Your 3B outward supplies must tie to your GSTR-1, which must tie to your accounting. Third: forgetting nil returns. No sales this month? You still file — both returns, with zeros. The system does not know you had a quiet month unless you tell it.\n\nFourth: claiming ITC on every purchase invoice in your drawer instead of only what shows in GSTR-2B. And fifth: leaving everything to the 19th. Your accountant needs your sales data days before the deadline, not hours. Send purchase and sales summaries by the 5th and the whole month runs smoothly.',
        callout: {
          type: 'important',
          text: 'The single highest-value habit: send your accountant complete sales and purchase data by the 5th of every month. Almost every late fee and mismatch traces back to data arriving too late.',
        },
      },
    ],
    faqs: [
      {
        q: 'What is the difference between GSTR-1 and GSTR-3B in one line?',
        a: 'GSTR-1 reports what you sold, invoice by invoice (due 11th). GSTR-3B summarises your sales and purchases and is where you pay the net GST (due 20th). One is the report, the other is the payment.',
      },
      {
        q: 'What happens if I miss the GSTR-1 due date?',
        a: 'A late fee applies per day of delay, and your customers cannot see your invoices in their GSTR-2B until you file — which delays their input tax credit and usually triggers uncomfortable phone calls. Persistent non-filing can also block your subsequent GSTR-1 filings.',
      },
      {
        q: 'Can I revise GSTR-1 after filing it?',
        a: 'There is no formal revision mechanism, but you can amend the details in the GSTR-1 of a subsequent tax period (within prescribed time limits). Corrections flow through to your customers\' records when the amendment is filed, so fix errors in the next filing rather than leaving them.',
      },
      {
        q: 'Do I need to file if I had no sales this month?',
        a: 'Yes. File nil returns for both GSTR-1 and GSTR-3B. The system treats a missing return as non-compliance, not as a quiet month, and late fees apply even to nil filings.',
      },
      {
        q: 'What is the QRMP scheme and should I opt for it?',
        a: 'QRMP lets businesses with turnover up to ₹5 crore file GSTR-1 and GSTR-3B quarterly instead of monthly, while paying tax monthly via challan. It reduces filing frequency but not discipline — if you struggle with monthly routines, quarterly piles up three months of work at once. Growing businesses often do better staying monthly.',
      },
      {
        q: 'Does this article replace my CA\'s advice?',
        a: 'No. This is general information to help you understand the two returns and hold better conversations with your accountant. Due dates, late fees, and scheme eligibility change, and your business may have specifics (exports, reverse charge, e-commerce) that alter the picture. Confirm everything with a qualified CA before acting.',
      },
    ],
    relatedSlugs: ['gst-on-advance-payments-india', 'gst-late-filing-penalty-india', 'gstr-9-annual-return-guide', 'e-invoicing-guide-india', 'gst-input-tax-credit-guide', 'what-is-gstin-and-how-to-get-it'],
    references: [
      { label: 'GST Portal — Returns Dashboard', url: 'https://www.gst.gov.in' },
      { label: 'CBIC — Central Board of Indirect Taxes & Customs', url: 'https://www.cbic.gov.in' },
    ],
  },
];
