import type { BlogPost } from '@/data/blog-types';

export const blogPosts17: BlogPost[] = [
  {
    slug: 'gst-on-discounts-india',
    title: 'GST on Discounts: Trade Discount vs Cash Discount (With Examples)',
    seoTitle: 'GST on Discounts India 2026: Trade vs Cash Discount Rules',
    metaDescription:
      'How GST applies to discounts: trade discounts reduce taxable value, cash discounts need credit notes. Rules, conditions and worked examples.',
    keywords: [
      'GST on discount India',
      'trade discount GST treatment',
      'cash discount GST credit note',
      'discount in GST invoice',
      'section 15 GST discount',
      'early payment discount GST',
    ],
    date: '2026-09-28',
    updatedDate: '2026-09-28',
    author: 'Prashant Upadhyay',
    readingTime: 8,
    category: 'GST & Tax',
    heroImage: '/blog/gst-discount.svg',
    heroAlt: 'Discount price tag showing reduced price with GST calculated on the discounted value',
    excerpt:
      'Not all discounts are treated equally under GST. A trade discount lowers your tax; a cash discount usually does not — unless you follow the credit note route properly.',
    intro:
      'Every business gives discounts. Festival offers, bulk-purchase deals, early-payment incentives — they are part of selling in India. But under GST, the word "discount" covers two very different situations, and the tax treatment is completely different for each. Get it wrong and you either pay GST on money you never received, or you underpay tax and invite a notice. The distinction is simple once you see it: was the discount decided before the sale, or after?',
    sections: [
      {
        heading: 'The core rule in one paragraph',
        body: 'Section 15 of the CGST Act says a discount reduces the taxable value only if three conditions are met: the discount is known at or before the time of supply, it is recorded in the invoice, and (for post-supply discounts) it is linked to the original invoice with the buyer reversing any input tax credit. In plain language: discounts agreed upfront and shown on the invoice reduce your GST. Discounts given later need a credit note and come with strings attached.',
      },
      {
        heading: 'Trade discount: the simple case',
        body: 'A trade discount is agreed before or at the time of sale — "10% off on orders above ₹50,000" or a festival offer printed in your rate list. Because it is part of the sale terms, you charge GST on the discounted price. Simple.\n\nExample: you sell goods worth ₹1,00,000 with a 10% trade discount. The invoice shows: goods ₹1,00,000, less discount ₹10,000, taxable value ₹90,000. At 18% GST, the tax is ₹16,200 — not ₹18,000. The discount line sits right on the invoice, and everyone\'s books agree. This is the cleanest discount there is, and whenever possible, structure your offers this way.',
      },
      {
        heading: 'Cash discount and early-payment discount: the tricky one',
        body: 'A cash discount — "pay within 7 days and get 2% off" — is typically offered after the invoice is raised. The invoice already went out with GST charged on the full value, and the buyer may have already claimed input tax credit on it. You cannot just quietly accept a lower payment.\n\nThe legal route is a credit note: you issue a credit note for the discount amount plus the proportionate GST, link it to the original invoice, and the buyer reverses the corresponding input tax credit. Only then does the discount genuinely reduce the taxable value. Skip the credit note and the department treats the discount as if it never happened for tax purposes — you have paid GST on ₹1,00,000 while receiving ₹98,000.',
        callout: {
          type: 'warning',
          text: 'A post-sale discount without a credit note does not reduce your GST liability. If you give early-payment discounts, build the credit-note step into your accounts process — it is not optional paperwork.',
        },
      },
      {
        heading: 'Trade discount vs cash discount at a glance',
        body: 'Keep this comparison handy when deciding how to structure an offer:',
        table: {
          headers: ['', 'Trade discount', 'Cash / early-payment discount'],
          rows: [
            ['When decided', 'Before or at the time of sale', 'After the invoice is raised'],
            ['Shown on', 'The original invoice itself', 'A separate credit note'],
            ['GST charged on', 'Discounted value directly', 'Full value first, adjusted via credit note'],
            ['Buyer ITC impact', 'None — ITC claimed on discounted value', 'Buyer must reverse proportionate ITC'],
            ['Paperwork', 'Minimal', 'Credit note linked to original invoice'],
            ['Best for', 'Volume deals, festival offers, rate-list discounts', 'Speeding up collections'],
          ],
        },
      },
      {
        heading: 'What about free samples and buy-one-get-one offers',
        body: 'Free samples are treated as gifts, not discounts — and gifts have their own rule. If you give away samples, you must reverse the input tax credit you claimed on those goods, because ITC is not available on goods given as gifts. Many distributors learn this during audits.\n\nBuy-one-get-one is different: it is usually treated as two supplies for the price of one rather than a discount, so GST applies on the amount actually paid. The practical advice is the same in both cases — talk to your accountant before running the scheme, not after the notice arrives.',
      },
      {
        heading: 'Mistakes that trigger notices',
        body: 'Three patterns attract departmental attention. First, showing discounts only in your accounting software but not on the invoice — the invoice is what counts. Second, issuing credit notes for discounts without the buyer reversing ITC — the portal matches these now. Third, calling something a "trade discount" when it was actually negotiated after delivery. The label does not decide the treatment; the timing and documentation do.\n\nThe safe habit is boring but effective: put every upfront discount on the invoice as its own line, and route every after-sale discount through a proper credit note. Your books, your buyer\'s books, and the portal will all tell the same story.',
      },
    ],
    faqs: [
      {
        q: 'Can I show a discount as a separate negative line on the invoice?',
        a: 'Yes — that is exactly how trade discounts should appear: gross value, less discount as its own line, then the net taxable value. This is cleaner than silently reducing the rate per item, because the original price and the discount are both visible for audit.',
      },
      {
        q: 'Do I need a credit note for every cash discount?',
        a: 'If you want the discount to reduce your GST liability, yes. Without a credit note linked to the original invoice (and the buyer reversing proportionate ITC), the discount has no effect on tax — you will have paid GST on the full invoice value.',
      },
      {
        q: 'What if the discount was not part of the original agreement?',
        a: 'Then it cannot be treated as a pre-supply discount. It must go through the credit note route under Section 34, with all its conditions. This is why putting discount terms in your quotation or purchase order upfront saves so much trouble later.',
      },
    ],
    relatedSlugs: ['gst-in-quotations', 'gst-invoice-rules-guide', 'credit-note-debit-note-explained', 'how-to-write-professional-invoice-india', 'payment-terms-in-quotations'],
  },
  {
    slug: 'client-asks-for-discount-how-to-respond',
    title: 'Client Asked for a Discount? How to Respond Without Losing Money',
    seoTitle: 'Client Asked for Discount? 7 Smart Responses That Protect Margin',
    metaDescription:
      'How to handle "give best price" without losing money: trade concessions instead of cutting price, reframe value, and exact scripts for discount requests.',
    keywords: [
      'how to respond when client asks for discount',
      'client asking for discount reply',
      'negotiation tips India',
      'how to say no to discount politely',
      'protect profit margin negotiation',
      'best price negotiation response',
    ],
    date: '2026-09-28',
    updatedDate: '2026-09-28',
    author: 'Prashant Upadhyay',
    readingTime: 8,
    category: 'Pricing & Negotiation',
    heroImage: '/blog/discount-negotiation.svg',
    heroAlt: 'Chat conversation showing a smart response to a client asking for best price',
    excerpt:
      'The worst answer to "give best price" is a lower price. The best answer is a question. Here is how experienced sellers handle discount requests.',
    intro:
      '"Thoda kam karo na, final batao." Every Indian business owner hears this weekly. And most of us make the same mistake: we panic, shave off 10%, and feel relieved the deal is saved — until we do the job and realise we worked for almost nothing. Here is the uncomfortable truth: the moment you discount instantly, the client learns your first price was inflated, and they will negotiate even harder next time. Handling discount requests well is not about being stubborn. It is about having a method instead of a reflex.',
    sections: [
      {
        heading: 'Why your first instinct is wrong',
        body: 'When a client asks for a discount, your brain hears "I will walk away unless the price drops". Usually that is not what they mean. In Indian business culture, asking for a discount is often just how the conversation starts — many buyers ask reflexively and would have paid the full price happily. An instant discount teaches them two damaging lessons: your margins are fat, and pushing works.\n\nWorse, discounts compound. A 10% discount on a 20% margin job does not cost you 10% — it costs you half your profit. Before responding, pause and remember: they are still talking to you, which means they want to buy from you. Price is rarely the real objection.',
      },
      {
        heading: 'Rule 1: trade, never just concede',
        body: 'The golden rule of negotiation: never give something for nothing. Every discount should buy you something in return — a larger order, faster payment, a longer contract, a testimonial, a referral. This does two things: it protects your economics, and it reframes the discount as a business exchange rather than a weakness.\n\nExample: instead of "okay, 10% off", say "I can do 7% if we make it a 6-month contract instead of 3 months" or "I can adjust the price if you can pay 50% advance instead of 30%". Suddenly you are not the seller caving in — you are a businessperson structuring a deal. Clients respect this far more than instant surrender.',
        callout: {
          type: 'tip',
          text: 'Prepare your trades before the negotiation, not during it. Write down three things you would accept in exchange for a discount: bigger order, faster payment, longer commitment. When the ask comes, you respond with a trade instead of a number.',
        },
      },
      {
        heading: 'What to actually say: scripts that work',
        body: 'You do not need to be aggressive. You need words ready so you do not freeze. Here are responses for the four most common situations:',
        numbered: [
          '"Give me your best price." → "This is my best price for this scope. But tell me — is it the price that worries you, or is there something about the scope we can adjust?" (Moves the conversation from price to value.)',
          '"Your competitor quoted less." → "I understand. Can I ask what their quote includes? In my experience the difference is usually in the scope — I would rather match their scope honestly than cut corners silently." (Calls the bluff politely; often the competitor quote is not comparable.)',
          '"We have a tight budget." → "I hear you. If we remove X and Y from the scope, I can bring it to your budget without compromising the core result. Would that work?" (Discounts the scope, not your rate.)',
          '"This is our first order; give a good rate and we will give more business." → "I would love a long-term relationship. Let us do the first order at my standard rate, and I will lock in a 10% preferred-client rate for all future orders in writing." (Tests whether the future business is real.)',
        ],
      },
      {
        heading: 'Concessions that cost you less than a discount',
        body: 'Sometimes you do need to move. When you do, pick concessions that feel valuable to the client but cost you little:',
        table: {
          headers: ['Instead of cutting price...', 'Cost to you', 'Value to client'],
          rows: [
            ['Offer faster delivery', 'Low (if capacity allows)', 'High — urgency is valuable'],
            ['Add a small bonus service', 'Low marginal cost', 'High perceived value'],
            ['Extend payment-friendly terms', 'Manageable', 'Eases their cash flow'],
            ['Give a future-order discount in writing', 'Zero today', 'Feels like a win'],
            ['Reduce scope to fit budget', 'Protects your hourly rate', 'They choose what matters'],
          ],
        },
      },
      {
        heading: 'When the answer is no',
        body: 'Some clients only buy on price, and no script will change that. The hardest skill in business is recognising them early and walking away politely: "I do not think I am the right fit at that budget, and I would rather be honest than deliver something compromised. If your budget changes, my door is open."\n\nThis feels like losing. It is not. Discount-chased clients are the ones who pay late, demand the most revisions, and refer other discount-chasers. Every hour you spend on an unprofitable job is an hour stolen from a client who would have paid full price. Your quotation is also a filter — let it filter.',
      },
      {
        heading: 'After you agree: put it in writing',
        body: 'Whatever you negotiate verbally, the revised quotation is what counts. Send an updated quote showing the agreed price, the scope it covers, and the validity period. If you traded a discount for faster payment or a bigger order, those terms go in writing too. Memories of negotiations are conveniently flexible; PDFs are not.\n\nAnd one final habit: note what you conceded and why. After a few months you will see patterns — which client types always negotiate, which trades actually worked — and your future quotations will get sharper without you even trying.',
      },
    ],
    faqs: [
      {
        q: 'How much discount is safe to give without hurting profit?',
        a: 'Work backwards from your margin, not forwards from the client\'s ask. If your margin is 25%, a 10% discount costs you 40% of your profit. Build a small negotiation buffer (5–8%) into your initial quote so you have room to move without touching your real margin — and never discount below your walk-away price.',
      },
      {
        q: 'What if the client threatens to go to a competitor?',
        a: 'Let them — politely. Say you understand and that your quote reflects the quality and service you deliver. In practice, a large share of such clients return when the cheaper option disappoints. Chasing them with a panic discount just confirms you were overpriced to begin with.',
      },
      {
        q: 'Should I offer a discount to win the first order from a new client?',
        a: 'Discount the future, not the present: offer a preferred-client rate for repeat orders in writing, but hold your standard rate for the first job. This tests whether the promised "more business" is real, and it sets the right price anchor from day one.',
      },
    ],
    relatedSlugs: ['quotation-negotiation-tips', 'how-to-price-your-services', 'freelancer-pricing-guide', 'quotation-rejection-how-to-respond', 'how-to-win-more-deals-with-quotations'],
  },
  {
    slug: 'price-escalation-clause-quotation',
    title: 'Price Escalation Clause: Protect Your Quotation From Rising Material Costs',
    seoTitle: 'Price Escalation Clause in Quotation: Format & Sample Wording',
    metaDescription:
      'Protect long-term projects from rising material costs with a price escalation clause. How it works, the formula, sample wording and what clients accept.',
    keywords: [
      'price escalation clause format',
      'material price escalation clause India',
      'escalation clause in quotation',
      'price variation clause construction',
      'raw material price increase contract',
      'steel price escalation clause',
    ],
    date: '2026-09-28',
    updatedDate: '2026-09-28',
    author: 'Prashant Upadhyay',
    readingTime: 8,
    category: 'Quotation Formats',
    heroImage: '/blog/price-escalation.svg',
    heroAlt: 'Rising price chart showing material cost escalation over project months',
    excerpt:
      'You quote a 6-month project in January. By April, steel is up 18%. Without an escalation clause, that increase comes straight out of your profit.',
    intro:
      'A contractor quotes a building project in January at ₹45 lakh. By April, cement and steel prices have jumped 15–18%. The project still has five months to run, the client holds a signed quotation with fixed prices, and the contractor is now set to lose ₹4–5 lakh through no fault of their own. This story plays out across construction, manufacturing, fabrication, and any business where material is a large share of cost. The protection is a price escalation clause — a few lines in your quotation that let the price move with material costs. Here is how to write one clients will actually sign.',
    sections: [
      {
        heading: 'The problem: your quote is frozen, material prices are not',
        body: 'A standard quotation validity — "valid for 30 days" — only protects you until the client accepts. After acceptance, the price is locked while material markets keep moving. For a two-week job this hardly matters. For a three-month fabrication order or a year-long construction project, it is the biggest risk in your quotation.\n\nMaterial volatility is not a rare event in India. Steel, cement, copper, and plastic granules routinely swing 10–20% within a project cycle. If materials are 60% of your project cost, a 15% material price rise wipes out 9% of the project value — often your entire margin. An escalation clause does not eliminate the risk; it shares it fairly instead of dumping it entirely on you.',
      },
      {
        heading: 'What an escalation clause does',
        body: 'In plain terms, the clause says: "This price assumes material costs at today\'s levels. If specified material prices move beyond an agreed band during the project, the contract price adjusts by an agreed formula." It has four parts: the base date (usually the quotation date), the reference price or index, the trigger band (e.g. movements beyond ±5%), and the adjustment formula.\n\nThe trigger band matters because clients will not accept a clause that reprices the job for every 1% wobble. A ±5% dead band — where you absorb small movements and only larger ones adjust the price — feels fair to both sides and is the most commonly accepted structure.',
      },
      {
        heading: 'How to structure the formula',
        body: 'Keep the formula simple enough to calculate on a calculator. A widely used version:\n\nAdjusted price = Base price × (0.40 + 0.60 × Current index ÷ Base index)\n\nThe 0.40 represents your fixed costs (labour, overheads, margin) which do not escalate; the 0.60 represents the material component. If the material index rises 15%, the project price rises 9% (0.60 × 15%). Agree the index upfront — it can be a published index, your supplier\'s rate card, or simply the invoice price from an agreed supplier. The key is that both sides can verify the number independently.',
        callout: {
          type: 'tip',
          text: 'Name the exact material grades in the clause — "TMT steel Fe-550" not just "steel". Vague material descriptions are the number one source of escalation disputes.',
        },
      },
      {
        heading: 'Sample clause wording you can copy',
        body: 'You do not need legal language. Clear business language works better because clients actually read it:\n\n"Price basis: This quotation is based on material prices prevailing as on [date]. For [TMT steel Fe-550 / cement OPC 53 grade], if the price varies by more than 5% from the base rate of ₹[X] per [unit] during the execution period, the contract value shall be adjusted proportionately for the material component (60% of contract value). Price decreases beyond 5% shall similarly reduce the contract value. The reference shall be [supplier name / published index], verifiable by both parties."\n\nNotice the clause works both ways — decreases also adjust the price down. Two-way clauses get signed far more easily than one-way ones, and material prices do fall sometimes.',
      },
      {
        heading: 'What clients will and will not accept',
        body: 'Client reactions to escalation clauses are predictable. Knowing the pattern helps you pitch it:',
        table: {
          headers: ['Clients usually accept', 'Clients usually resist'],
          rows: [
            ['Two-way adjustment (up and down)', 'One-way "only increases" clauses'],
            ['A dead band (±5%) before adjustment kicks in', 'Adjustment from the first rupee of movement'],
            ['Named materials with verifiable reference prices', 'Vague "all materials" escalation'],
            ['Adjustment limited to the material component', 'Escalation on the full contract value including your margin'],
            ['Monthly or milestone-based review', 'Retrospective claims at project end'],
          ],
        },
      },
      {
        heading: 'Escalation clause vs validity period: use both',
        body: 'These solve different problems, so do not treat them as alternatives. The validity period ("quote valid 30 days") protects you between quoting and order confirmation — it lets you re-quote if materials jump before the client signs. The escalation clause protects you between order confirmation and project completion. A complete quotation for any project longer than two months should carry both lines. Together they mean you never have to choose between honouring your word and staying in business.',
      },
    ],
    faqs: [
      {
        q: 'Is a price escalation clause legally enforceable in India?',
        a: 'Yes, if it is part of the accepted quotation or contract. It is a mutually agreed price-adjustment term, and Indian courts uphold such clauses when the wording is clear and the reference for price movement is objective and verifiable. Ambiguity is what kills enforcement — name the materials, the base rate, and the reference.',
      },
      {
        q: 'Can the clause work both ways if material prices fall?',
        a: 'It should. A two-way clause — where price decreases beyond the dead band also reduce the contract value — is fairer and far easier to get signed. Clients who would reject a one-way increase clause often accept a symmetric one without argument.',
      },
      {
        q: 'What index should I link the escalation clause to?',
        a: 'Use whatever both sides can independently verify: a published commodity index, your regular supplier\'s dated rate card, or the actual purchase invoices from an agreed supplier. For most small and mid-size projects, the supplier rate card is the most practical reference.',
      },
    ],
    relatedSlugs: ['quotation-terms-and-conditions-checklist', 'how-to-write-a-professional-quotation', 'quotation-validity-period-guide', 'how-to-revise-a-quotation', 'quotation-format-in-india'],
  },
  {
    slug: 'salon-spa-quotation-guide',
    title: 'Salon & Spa Quotation Format: Packages, Memberships and Bridal Quotes',
    seoTitle: 'Salon & Spa Quotation Format 2026: Packages and Bridal Quotes',
    metaDescription:
      'How salons should quote: service menus, packages, memberships, bridal tiers, home-service charges, advance policy and 18% GST — with formats.',
    keywords: [
      'salon quotation format',
      'spa price list format India',
      'bridal package quotation',
      'salon membership format',
      'beauty parlour rate card India',
      'salon GST rate',
    ],
    date: '2026-09-28',
    updatedDate: '2026-09-28',
    author: 'Prashant Upadhyay',
    readingTime: 8,
    category: 'Quotation Formats',
    heroImage: '/blog/salon-spa.svg',
    heroAlt: 'Salon scissors with service price list showing haircut, bridal and spa packages',
    excerpt:
      'A rate card tells prices. A quotation sells an outcome — the bridal look, the monthly glow-up, the spa day. Here is how salons should structure both.',
    intro:
      'Walk into any salon and you will see a rate card on the wall: haircut ₹499, facial ₹1,499, bridal ₹15,999. That works for walk-ins. But the real money in a salon — bridal bookings, memberships, corporate grooming contracts, event tie-ups — needs proper quotations. A bride comparing two salons does not choose on the ₹15,999 figure; she chooses on what is inside it. Trials, draping, hairstyling, makeup, touch-up kit, venue travel — the salon whose quotation lists all of this wins, because it looks like the safer pair of hands for her wedding day.',
    sections: [
      {
        heading: 'A rate card is not a quotation',
        body: 'Your wall menu lists services and prices for people already inside your salon. A quotation is for people deciding whether to trust you with something bigger — a wedding, a 6-month membership, a company\'s grooming contract. The quotation can reuse your rate-card prices, but it must add what the rate card never has: scope, inclusions, validity, advance terms, and cancellation policy.\n\nThink of it this way: the rate card answers "how much?". The quotation answers "what exactly do I get, when, and under what terms?". The second question is what closes high-value bookings.',
      },
      {
        heading: 'Packages beat individual services',
        body: 'Quoting services individually ("facial ₹1,499 + cleanup ₹799 + head massage ₹499") invites the customer to delete lines. Quoting a package ("Glow Package: facial + cleanup + head massage — ₹2,499, save ₹300") invites them to buy the bundle. The package price should be 10–15% below the sum of individual services — enough to feel like a deal, small enough to protect margin since packages also increase visit frequency.\n\nName your packages around outcomes, not services: "Bridal Glow (4 sittings)", "Monthly Maintenance", "Party Ready". Customers buy the result. And always show the individual-service total struck through next to the package price — the visible saving is what makes the package feel smart rather than expensive.',
      },
      {
        heading: 'Bridal quotations: the big ticket',
        body: 'A bridal quotation is really three quotations in one: the trial, the wedding day, and the family. Structure it in tiers so the family can see the step-up clearly:',
        table: {
          headers: ['Inclusion', 'Classic — ₹15,999', 'Signature — ₹29,999', 'Luxury — ₹49,999'],
          rows: [
            ['Makeup style', 'HD makeup', 'Airbrush makeup', 'Airbrush + celebrity artist'],
            ['Trial session', 'Paid (₹2,000)', '1 complimentary', '2 complimentary'],
            ['Hairstyling + draping', 'Included', 'Included', 'Included + touch-up kit'],
            ['Family members', '2 included', '4 included', '6 included'],
            ['Venue travel', 'Within city', 'Within city + stay', 'Outstation on actuals'],
            ['Pre-bridal sittings', 'Not included', '2 sittings', '4 sittings'],
          ],
        },
      },
      {
        heading: 'Memberships and prepaid packages',
        body: 'Memberships are quotations too — you are selling 6 or 12 months of services upfront. The quotation must state: total sittings and their split (e.g. "12 sittings: 6 hair spa + 4 cleanup + 2 facial"), validity period ("12 months from purchase"), transferability (usually non-transferable), and what happens to unused sittings (they lapse — say so explicitly).\n\nThe expiry clause feels harsh to write but it is what makes memberships profitable. Without expiry, members dribble in for years and your "advance revenue" becomes an open-ended liability. "Valid 12 months, non-refundable, non-transferable" on the quotation prevents every awkward conversation later.',
        callout: {
          type: 'tip',
          text: 'Price memberships at 20–25% below pay-per-visit rates. The discount is funded by upfront cash flow and by the industry-wide reality that members use roughly 70% of their sittings.',
        },
      },
      {
        heading: 'Home service surcharges',
        body: 'Home bridal and grooming services need a travel section, or your artists will spend half their fee on cabs. Quote it as a slab: within 5 km — ₹500; 5–15 km — ₹1,000; beyond 15 km — ₹1,500 plus travel time. For outstation bridal assignments, add accommodation for the team. State who arranges the stay — if the family books it, say so; if you book and bill actuals, say that.\n\nAlso mention the setup requirement in one line: "Client to provide a well-lit room with seating and power points." It sounds obvious until your artist is doing bridal makeup in a dim hallway.',
      },
      {
        heading: 'Advance, cancellation and GST',
        body: 'Bridal dates are perishable inventory — a blocked Saturday in wedding season cannot be resold. Take 50% advance to block the date, non-refundable, with the balance due 7 days before the event. For memberships, 100% upfront is standard. State the cancellation slab plainly: 30+ days — advance adjusted against future services; under 30 days — advance forfeited.\n\nOn tax: beauty and grooming services attract 18% GST. If you are registered, show it as a separate line. Many small salons quote "inclusive" prices to keep numbers round (₹1,499 instead of ₹1,270 + GST) — that is fine, but mention "inclusive of GST" so corporate clients claiming ITC know where they stand.',
      },
    ],
    faqs: [
      {
        q: 'What GST rate applies to salon and spa services?',
        a: 'Beauty treatment, hairdressing and similar services attract 18% GST. If your salon is GST-registered, charge it as a separate line or clearly mark prices as inclusive of GST. Input tax credit on your products and rent helps offset this.',
      },
      {
        q: 'Should bridal trials be charged separately?',
        a: 'Yes, unless the package explicitly includes one. A paid trial (₹1,500–₹3,000, adjusted against the booking if confirmed) filters serious brides from bargain-hunters and compensates your artist\'s time. State the trial policy in the quotation itself.',
      },
      {
        q: 'How much advance should I take for a bridal booking?',
        a: '50% non-refundable advance to block the date is the industry standard, with the balance due a week before the event. Wedding-season Saturdays are limited inventory — a token advance of ₹2,000 does not protect you when a full-booking enquiry comes for the same date.',
      },
    ],
    relatedSlugs: ['how-to-write-a-professional-quotation', 'quotation-format-in-india', 'payment-terms-in-quotations', 'how-to-price-your-services', 'freelancer-pricing-guide'],
  },
  {
    slug: 'export-invoice-gst-lut-guide',
    title: 'Export Invoice Under LUT: Zero-Rated Supply Format and Rules',
    seoTitle: 'Export Invoice Under LUT 2026: Format, Rules & Sample',
    metaDescription:
      'How to raise an export invoice under LUT: zero-rated supply, mandatory invoice wording, documents needed, GSTR-1 reporting and common mistakes.',
    keywords: [
      'export invoice format India',
      'LUT GST export',
      'zero rated supply invoice',
      'export under LUT procedure',
      'shipping bill GST export',
      'LUT validity period',
    ],
    date: '2026-09-28',
    updatedDate: '2026-09-28',
    author: 'Prashant Upadhyay',
    readingTime: 9,
    category: 'GST & Tax',
    heroImage: '/blog/export-lut.svg',
    heroAlt: 'Globe with export invoice showing zero GST under Letter of Undertaking',
    excerpt:
      'Exporting without charging GST is legal — if your LUT is filed and your invoice carries the exact declaration. Miss either and the shipment becomes a tax problem.',
    intro:
      'You have your first export order: 500 brass handicrafts to a buyer in Germany. Now the invoice. Do you charge 18% GST? The answer is no — exports are zero-rated under GST, meaning you charge 0% tax. But "zero-rated" does not mean "just leave the tax column blank". You need a filed Letter of Undertaking (LUT), a specific declaration printed on the invoice, and the right reporting in your returns. Exporters who get this paperwork right get smooth shipping and clean refunds; those who do not get their consignments questioned and their refunds stuck. Here is the complete process.',
    sections: [
      {
        heading: 'What "export under LUT" actually means',
        body: 'GST law gives exporters two options. Option one: pay IGST on the export and claim it back as a refund later — which locks up your working capital for months. Option two: file a Letter of Undertaking (LUT) promising that you will export the goods, and then export without paying any GST at all. This is called a zero-rated supply.\n\nAlmost every regular exporter chooses the LUT route because cash flow matters more than paperwork. The LUT is filed online on the GST portal for each financial year, and once accepted, you can export freely without charging tax. No tax paid means no refund to chase — which is the entire point.',
      },
      {
        heading: 'LUT vs paying IGST and claiming refund',
        body: 'If you are deciding (or explaining to a new exporter why LUT exists), the comparison is stark:',
        table: {
          headers: ['', 'Export under LUT', 'Export with IGST payment'],
          rows: [
            ['Tax on invoice', '0% — no GST charged', 'IGST charged at applicable rate'],
            ['Working capital', 'Not blocked', 'Blocked until refund arrives (often months)'],
            ['Refund process', 'None needed', 'File refund application, await processing'],
            ['Paperwork upfront', 'File LUT once per financial year', 'None extra upfront'],
            ['Best for', 'Regular exporters', 'Occasional exporters or when LUT missed'],
          ],
        },
      },
      {
        heading: 'The exact invoice wording you need',
        body: 'This is the part exporters most often get wrong. Your export invoice must carry a declaration to the effect that the supply is for export under LUT. The standard wording is:\n\n"Supply meant for export under LUT No. [your LUT number] dated [date] without payment of integrated tax."\n\nPrint it prominently — usually just below the tax table or near the invoice total. An export invoice without this declaration looks like a domestic invoice with the tax missing, and that is exactly how it gets treated during scrutiny. The LUT number and date must be your current financial year\'s accepted LUT.',
        callout: {
          type: 'warning',
          text: 'An expired or unfiled LUT is the most common export compliance failure. LUTs are valid for one financial year only — file the new one in April, not when your first shipment is already at the port.',
        },
      },
      {
        heading: 'What else goes on the export invoice',
        body: 'Beyond the LUT declaration, an export invoice carries details domestic invoices do not. Include: the buyer\'s name and address in the destination country, the currency and exchange rate used (with the date of the rate), the port of loading and port of discharge, the shipping bill number and date (added when available — many exporters issue the invoice first and add shipping bill details to their records after), and the terms of sale (FOB, CIF, etc.).\n\nHSN codes are mandatory as usual, and the taxable value is the transaction value in rupees. The tax columns show 0 — but show them as 0 rather than deleting them, so the invoice structure stays consistent with your domestic format.',
      },
      {
        heading: 'Reporting: GSTR-1 and shipping bill matching',
        body: 'Your export invoices go into GSTR-1 under the exports section (table 6A), with the shipping bill number and date once the goods actually ship. Here is the discipline that saves refunds and reputations: the invoice value, the shipping bill value, and the foreign remittance that eventually arrives should all reconcile. Mismatches between GSTR-1 export data and customs shipping bill data are one of the most common triggers for exporter scrutiny.\n\nMaintain a simple export register — invoice number, LUT reference, shipping bill number and date, FOB value, and remittance received date. Five columns, updated per shipment. During any audit, this one sheet answers 90% of the questions.',
      },
      {
        heading: 'Mistakes exporters make',
        body: 'The hit list, from most to least common:',
        numbered: [
          'Forgetting to file the new LUT in April and exporting on last year\'s number.',
          'Missing the LUT declaration wording on the invoice entirely.',
          'Charging IGST "to be safe" while also holding a valid LUT — which just blocks your own money.',
          'Not reporting exports in GSTR-1 table 6A, or reporting them as domestic supplies.',
          'Letting invoice, shipping bill, and remittance values drift apart without reconciling.',
          'Assuming e-invoicing (IRN) rules work the same for exports — check current requirements for your turnover slab, as export invoices have specific treatment.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Who can file a LUT for exports?',
        a: 'Any GST-registered person intending to export goods or services can file a LUT, except those who have been prosecuted for tax evasion above the prescribed threshold. It is filed online on the GST portal in form RFD-11 and is generally accepted quickly.',
      },
      {
        q: 'How long is a LUT valid?',
        a: 'A LUT is valid for the financial year in which it is filed. You must file a fresh LUT each year — most exporters do it in April before any shipments go out. Exporting on an expired LUT means the supply is not covered as zero-rated.',
      },
      {
        q: 'What happens if I forget to mention LUT on the export invoice?',
        a: 'The invoice does not qualify as a zero-rated supply document, which can lead to the department treating it as a domestic supply with unpaid tax. If caught early, issue a corrected invoice with the proper declaration and ensure your GSTR-1 reporting matches. Prevention — a fixed invoice template with the declaration pre-printed — is far cheaper.',
      },
    ],
    relatedSlugs: ['gst-invoice-rules-guide', 'how-to-write-professional-invoice-india', 'hsn-code-guide-for-small-business', 'e-invoicing-guide-india', 'gst-in-quotations'],
  },
];
