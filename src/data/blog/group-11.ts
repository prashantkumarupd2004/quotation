import type { BlogPost } from '@/data/blog-types';

export const blogPosts11: BlogPost[] = [
  {
    slug: 'gst-input-tax-credit-guide',
    title: 'GST Input Tax Credit: What It Is, What You Can Claim, and What You Cannot',
    seoTitle: 'GST Input Tax Credit Guide India 2026 | ITC Eligibility, Rules and Mistakes',
    metaDescription: 'A practical guide to GST input tax credit for Indian businesses â€" what ITC is, which purchases qualify, which are blocked, how to reconcile GSTR-2B, and how to avoid ITC reversals.',
    keywords: ['gst input tax credit', 'itc under gst', 'blocked credits gst', 'gst itc eligibility', 'gst itc reversal', 'gstr-2b reconciliation'],
    date: '2026-09-10',
    updatedDate: '2026-09-24',
    author: 'Prashant Upadhyay',
    readingTime: 10,
    category: 'GST & Tax',
    heroImage: '/blog/gst-invoice-rules.svg',
    heroAlt: 'GST input tax credit flow showing eligible and blocked credit categories for Indian businesses',
    excerpt: 'Input tax credit is the mechanism that prevents GST from becoming a tax on tax. But claiming it wrongly costs real money. Here is how it actually works.',
    intro: 'Input tax credit is one of the most powerful features of the GST system and also one of the most misunderstood. Claimed correctly, it means the GST you pay on business purchases offsets the GST you collect on sales. Claimed incorrectly, it triggers notices, reversals, and interest. This guide covers what qualifies, what does not, and how to protect what you legitimately claim.',
    sections: [
      {
        heading: 'What input tax credit actually means',
        body: 'When you buy goods or services for your business, you pay GST on those purchases â€" that is called input tax. When you sell goods or services, you collect GST from customers â€" that is called output tax.\n\nInput tax credit lets you subtract your input tax from your output tax before remitting to the government. If you collected Rs 18,000 in GST on sales and paid Rs 12,000 on purchases, you remit only Rs 6,000. Without ITC, GST would cascade â€" you would pay tax on top of tax at every stage of the supply chain.',
      },
      {
        heading: 'What you can claim ITC on',
        body: 'You can claim ITC on GST paid on goods and services used in the course or furtherance of your business. This includes raw materials and inventory, capital goods like machinery and equipment, business services like professional fees, software subscriptions, courier and logistics, rent for commercial premises, and other B2B purchases where you have a valid tax invoice.\n\nKey conditions: you must have a valid tax invoice from the supplier, the credit must appear in your GSTR-2B, and you must have actually received the goods or services.',
        bullets: ['Raw materials and inventory used in production', 'Capital goods: machinery, computers, equipment', 'Business services: accounting fees, legal fees, courier', 'Software subscriptions used for business', 'Rent on commercial premises'],
      },
      {
        heading: 'What you cannot claim: the blocked credits',
        body: 'Section 17(5) of the CGST Act lists blocked credits â€" categories where ITC is not available even with a valid tax invoice.\n\nThe most commonly encountered blocked credits are: motor vehicles unless you are in the transportation business, food and beverages and outdoor catering, club memberships, health and life insurance unless legally required to be provided by the employer, works contracts for construction of immovable property, and goods or services used for personal consumption.\n\nThis is where most ITC claims go wrong. A company car, a team dinner, a gym membership â€" these are business expenses for income tax purposes but ITC on them is blocked under GST.',
      },
      {
        heading: 'How to reconcile your ITC with GSTR-2B',
        body: 'ITC can now only be claimed to the extent it appears in your GSTR-2B â€" an auto-generated statement showing all invoices your suppliers uploaded against your GSTIN.\n\nIf a supplier files their GSTR-1 and includes your invoice, it appears in your GSTR-2B and you can claim it. If the supplier delays filing, the credit does not appear and you cannot claim it â€" even if you have their physical invoice.\n\nReconcile your purchase register against GSTR-2B every month before filing GSTR-3B. Any purchase where credit has not appeared should be followed up with the supplier promptly.',
      },
      {
        heading: 'Common ITC mistakes and how to avoid them',
        body: 'Claiming ITC on invoices not in GSTR-2B: a physical invoice alone is not enough â€" the credit must appear in GSTR-2B.\n\nClaiming ITC on blocked items: motor vehicles, food, club memberships â€" check Section 17(5) before claiming anything borderline.\n\nForgetting to reverse ITC when goods are used for exempt supplies or personal use: if you claim credit on something and later use it for an exempt purpose, reverse the credit proportionately.\n\nMissing the time limit: ITC for a financial year must be claimed by the earlier of the due date of September return of the following year or the date of filing the annual return.',
      },
    ],
    faqs: [
      { q: 'Can I claim ITC if my supplier has not filed their GST return?', a: 'No. Under current rules ITC is available only to the extent it appears in your GSTR-2B. If your supplier has not filed GSTR-1, their invoices will not appear and you cannot claim the credit. Follow up with the supplier to file their return.' },
      { q: 'What is the time limit for claiming ITC?', a: 'ITC must be claimed by the earlier of: the due date of the return for September of the following financial year, or the date of filing the annual return. After that, the credit lapses.' },
      { q: 'Can I claim ITC on goods purchased before GST registration?', a: 'Yes, for capital goods and stock in hand on the date of registration â€" not for goods already consumed. File Form GST ITC-01 within 30 days of registration to claim this opening credit.' },
    ],
    relatedSlugs: ['gst-invoice-rules-guide', 'gst-registration-guide-for-small-business', 'hsn-code-guide-for-small-business'],
    references: [{ label: 'CGST Act Section 16 and 17 â€" Input Tax Credit', url: 'https://www.cbic.gov.in/resources//htdocs-cbec/gst/cgst-act.pdf' }],
  },

  {
    slug: 'msme-registration-guide',
    title: 'MSME Registration in India: What It Is, Why It Matters, and How to Register in 10 Minutes',
    seoTitle: 'MSME Registration Guide India 2026 | Udyam Registration Benefits and Process',
    metaDescription: 'What MSME and Udyam registration are, who qualifies, what benefits registration gives you â€" delayed payment protection, priority lending, government procurement â€" and how to register free in minutes.',
    keywords: ['msme registration', 'udyam registration', 'msme registration india', 'msme benefits', 'udyam registration process', 'small business registration india'],
    date: '2026-09-09',
    updatedDate: '2026-09-24',
    author: 'Prashant Upadhyay',
    readingTime: 7,
    category: 'Business Basics',
    heroImage: '/blog/purchase-order-guide.svg',
    heroAlt: 'MSME Udyam registration certificate and small business owner accessing government scheme benefits',
    excerpt: 'MSME registration is free, takes minutes, and gives your business statutory rights on delayed payments that most small suppliers do not know they have.',
    intro: 'MSME registration â€" now done through the Udyam portal â€" is one of the most underused tools available to Indian small businesses. It is free, takes about 10 minutes, and gives you access to priority lending, delayed payment protection, lower dispute resolution costs, and various government scheme benefits. Most eligible businesses simply do not register because they assume it is complicated or only for manufacturers. It is neither.',
    sections: [
      {
        heading: 'What MSME and Udyam registration actually are',
        body: 'MSME stands for Micro, Small and Medium Enterprise. The classification is based on annual turnover and investment in plant and machinery or equipment.\n\nMicro enterprise: investment up to Rs 1 crore and turnover up to Rs 5 crore. Small enterprise: investment up to Rs 10 crore and turnover up to Rs 50 crore. Medium enterprise: investment up to Rs 50 crore and turnover up to Rs 250 crore.\n\nUdyam registration is the official government recognition that you are an MSME. It replaced the older Udyog Aadhaar system in 2020 and is done entirely online at udyamregistration.gov.in.',
      },
      {
        heading: 'Who can register',
        body: 'Any proprietorship, partnership, LLP, company, or other undertaking engaged in manufacturing or services that falls within the turnover and investment limits can register. There is no minimum size â€" even a solo freelancer or sole proprietor qualifies as a micro enterprise if annual turnover is under Rs 5 crore.\n\nRegistration is based on self-declaration. You declare your investment and turnover, and the system cross-checks with your ITR data. No document upload needed â€" integration with the Income Tax department handles verification.',
        bullets: ['Proprietorships, partnerships, LLPs, companies all eligible', 'Manufacturers and service providers both qualify', 'Solo freelancers and consultants qualify as micro enterprises', 'No minimum size requirement'],
      },
      {
        heading: 'The most valuable benefit: delayed payment protection',
        body: 'Under the MSMED Act, if you are a registered MSME and the buyer does not pay within 45 days of acceptance of goods or services, you are entitled to compound interest at three times the RBI bank rate on the overdue amount.\n\nBeyond that, you can file a complaint with the MSME Facilitation Council, which can direct the buyer to pay plus award interest. Many large companies settle MSME supplier disputes quickly once a formal complaint is filed, because delayed payments to MSMEs create adverse entries in their credit and CSR records.\n\nThis statutory protection is genuinely powerful. For businesses that regularly deal with large corporate buyers who delay payments, registration can recover more in the first recovery than the minimal effort of registering.',
      },
      {
        heading: 'Other practical benefits',
        body: 'Priority sector lending: banks must lend a minimum percentage of credit to MSMEs, which typically means easier loan approvals and lower collateral requirements.\n\nGovernment procurement: the central government reserves 25% of procurement from MSMEs. Without Udyam registration, you cannot be considered for these contracts.\n\nCredit Guarantee Scheme: MSME-registered businesses can access collateral-free loans up to Rs 2 crore under the CGTMSE scheme, where the government provides the guarantee to the bank.',
      },
      {
        heading: 'How to register on the Udyam portal in 10 minutes',
        body: 'Go to udyamregistration.gov.in. Click For New Entrepreneurs who are not registered yet as MSME. Enter your Aadhaar number and verify with an OTP.\n\nEnter your PAN and the system will auto-fetch your ITR data for turnover verification. Fill in your business name, type, address, bank account number, and main activity. Declare your investment in plant and machinery or equipment.\n\nSubmit and you receive your Udyam registration certificate immediately. No fee, no document upload, no waiting period.',
      },
    ],
    faqs: [
      { q: 'Is Udyam registration mandatory?', a: 'No. It is voluntary. However, without it you cannot avail MSME-specific benefits â€" delayed payment protection, priority lending, government procurement quotas, and the CGTMSE credit guarantee all require a valid Udyam registration number.' },
      { q: 'Does MSME registration expire?', a: 'No. Udyam registration is permanent and does not need renewal. However, if your turnover grows beyond the medium enterprise ceiling, update your registration accordingly.' },
      { q: 'Can a freelancer register as MSME?', a: 'Yes. Service-sector businesses including freelancers, consultants, designers, and developers can register. A solo consultant with turnover under Rs 5 crore qualifies as a micro enterprise.' },
    ],
    relatedSlugs: ['how-to-get-paid-faster-on-invoices', 'how-to-recover-late-payments', 'small-business-bookkeeping-basics'],
    references: [{ label: 'Udyam Registration Portal', url: 'https://udyamregistration.gov.in' }, { label: 'MSMED Act 2006', url: 'https://msme.gov.in/sites/default/files/MSMED-Act2006.pdf' }],
  },

  {
    slug: 'how-to-write-a-service-agreement',
    title: 'How to Write a Simple Service Agreement for Your Business',
    seoTitle: 'How to Write a Service Agreement India 2026 | Service Contract Template and Clauses',
    metaDescription: 'What a service agreement should contain, which clauses protect you from scope creep and non-payment, how to make it enforceable under Indian law, and a simple structure any small business can follow.',
    keywords: ['service agreement india', 'service contract template', 'how to write service agreement', 'freelancer contract india', 'scope of work agreement', 'service agreement clauses'],
    date: '2026-09-08',
    updatedDate: '2026-09-24',
    author: 'Prashant Upadhyay',
    readingTime: 8,
    category: 'Business Basics',
    heroImage: '/blog/terms-conditions.svg',
    heroAlt: 'Service agreement document with pen and highlighted key clauses for Indian small businesses',
    excerpt: 'A service agreement is not just legal protection â€" it is the document that prevents 90% of client disputes from happening in the first place.',
    intro: 'Most small businesses and freelancers in India operate on trust, a quoted price, and a handshake. That works right up until a client says they expected something different, refuses to pay the final invoice, or demands unlimited revisions because scope was never defined. A service agreement does not have to be a 20-page legal document. Two clear pages covering the right clauses prevents most disputes before they start.',
    sections: [
      {
        heading: 'What a service agreement is and when you need one',
        body: 'A service agreement is a written contract between you and a client specifying what you will do, for how much, by when, and under what conditions. Under the Indian Contract Act 1872, a valid contract requires: offer, acceptance, consideration (the price), and intention to create legal relations. A signed agreement is cleaner to enforce than an email thread.\n\nYou need one for any engagement worth more than you would be comfortable losing â€" in practice, any project above Rs 25,000 or any ongoing retainer relationship.',
      },
      {
        heading: 'The clauses you must include',
        body: 'Scope of work: a specific description of what you will deliver. Not website design but: Website design for five pages â€" Home, About, Services, Portfolio, Contact. Responsive for mobile and desktop. Two rounds of revisions. Hosting setup not included. The scope defines the boundary between what is included and what is extra.\n\nDeliverables and timeline: list each deliverable and delivery date, subject to receiving client inputs by specified dates.\n\nPayment terms: amount, schedule (advance, milestone, completion), accepted payment modes, due dates, and late payment clause.\n\nClient responsibilities: what you need from the client â€" content, approvals, feedback within a specified number of business days.\n\nIntellectual property: ownership of the work transfers to the client on receipt of full payment. Until then, you retain all rights.',
        bullets: ['Scope of work â€" specific deliverables, exclusions listed explicitly', 'Timeline â€" dates for each deliverable, client input deadlines', 'Payment terms â€" amounts, schedule, due dates, late payment clause', 'Client responsibilities â€" what you need and when', 'IP transfer â€" ownership passes to client on full payment'],
      },
      {
        heading: 'How to handle scope creep',
        body: 'Scope creep is the most common cause of profit erosion in service businesses. The client asks for one more thing, and then another, and each time you say yes because saying no feels confrontational.\n\nThe fix is a change order clause: any work beyond the agreed scope will be quoted separately and requires written approval before it begins. When a client asks for something outside scope, reply: That sounds good â€" let me send you a quote for that as a separate item. Most clients accept this without conflict when it is how you always operate.',
      },
      {
        heading: 'How to make it enforceable under Indian law',
        body: 'A service agreement is enforceable under the Indian Contract Act if both parties are identified, the subject matter is clear, consideration is stated, and there is mutual consent. It does not need to be on stamp paper for most service contracts.\n\nBoth parties should sign it. For significant engagements, include a governing law clause: This agreement is governed by the laws of India, and disputes shall be subject to the jurisdiction of the courts in [your city].',
      },
      {
        heading: 'A simple structure to get started',
        body: 'Eight clauses, plain language, two pages: (1) Parties, (2) Scope of Work, (3) Timeline, (4) Payment, (5) Client Responsibilities, (6) Intellectual Property, (7) Termination, (8) Governing Law. Both parties sign before work begins. Save a copy and send one to the client.',
      },
    ],
    faqs: [
      { q: 'Does a service agreement need to be on stamp paper?', a: 'For most service contracts in India, stamp paper is not required. A regular signed agreement on plain paper is legally valid and enforceable under the Indian Contract Act.' },
      { q: 'Can I enforce an agreement if the client only signed by email?', a: 'Yes. Under the Information Technology Act 2000, electronic records and signatures are legally valid in India. An email where the client explicitly accepts your terms constitutes a binding agreement.' },
      { q: 'What should I do if a client breaks the agreement?', a: 'First, document the breach in writing. If informal resolution fails, a lawyer notice is usually effective for payment disputes. For MSME-registered suppliers, the MSME Facilitation Council is faster and cheaper than civil court.' },
    ],
    relatedSlugs: ['how-to-write-a-professional-quotation', 'quotation-terms-and-conditions-checklist', 'how-to-get-paid-faster-on-invoices'],
    references: [{ label: 'Indian Contract Act 1872', url: 'https://legislative.gov.in/sites/default/files/A1872-09.pdf' }],
  },

  {
    slug: 'quotation-rejection-how-to-respond',
    title: 'Your Quotation Got Rejected: How to Respond, What to Learn, and How to Win the Next One',
    seoTitle: 'Quotation Rejected? How to Respond and Win More Deals India 2026',
    metaDescription: 'What to do when a client rejects your quotation â€" how to respond professionally, what questions to ask, how to improve your next quote, and when rejection actually means the client is still interested.',
    keywords: ['quotation rejected', 'how to respond to rejected quotation', 'lost quotation', 'why clients reject quotations', 'improve quotation win rate', 'quotation follow up after rejection'],
    date: '2026-09-04',
    updatedDate: '2026-09-24',
    author: 'Prashant Upadhyay',
    readingTime: 6,
    category: 'Quotation Basics',
    heroImage: '/blog/quotation-rejection.svg',
    heroAlt: 'Business owner reviewing rejected quotation and planning improved follow-up response strategy',
    excerpt: 'A rejected quotation is not a closed door. How you respond in the next 48 hours often determines whether you lose the deal permanently or bring it back.',
    intro: 'Every business that sends quotations will have some rejected â€" a 100% close rate would just mean you are pricing too low. But a rejected quotation is not simply a dead end. Most businesses make the same mistake: they either disappear when a quotation is rejected, or they immediately offer a discount without understanding why they lost. Both responses leave money on the table.',
    sections: [
      {
        heading: 'First, understand why it was rejected',
        body: 'The most common reasons are: price higher than the client budget, scope did not match expectations, someone else submitted a more compelling proposal, timing was wrong, or the need no longer exists.\n\nFind out by asking: Thank you for letting me know. Could I ask what the main reason was? Understanding what I missed helps me improve future proposals. Most clients who gave a fair hearing will answer honestly.',
      },
      {
        heading: 'When a rejection is not actually final',
        body: 'Many rejections are not permanent. A client might say no because the budget was cut temporarily, a competitor was chosen but has not yet delivered, the internal approver was unavailable, or the client is negotiating by saying no first.\n\nSignals that a rejection might not be final: the client gives a reason related to timing or budget rather than suitability, asks follow-up questions even after saying no, or thanks you warmly and encourages staying in touch.',
      },
      {
        heading: 'How to respond professionally',
        body: 'Acknowledge the decision without dwelling on it: Thank you for letting me know. I appreciate you taking the time to review my proposal. Do not argue with the rejection, do not immediately offer a lower price, and do not express frustration.\n\nThen ask the one question that matters: Is there anything about the proposal that did not fit what you were looking for, or was this primarily a budget decision? This gives the client an easy way to share the real reason and gives you something to work with.',
      },
      {
        heading: 'What a lost quotation tells you about your business',
        body: 'Track your win rate over time. If you are closing less than 30% of proposals with qualified buyers, something is wrong with your proposal rather than just individual rejections. Common causes: price higher than the market perceives your work to be worth, proposal too generic, sending quotes to unqualified leads, or terms that create friction.\n\nConversely, if you are closing 80% or more, you are likely underpriced.',
      },
      {
        heading: 'How to write a better proposal next time',
        body: 'Lead with the client problem before describing your solution. Most proposals start with who we are and what we do. The client question is what can you do for my specific situation.\n\nStart with: Based on what you shared, the main challenge is [problem]. My proposal is designed to address that by [approach]. Then describe scope, timeline, and price as the mechanics of delivering that outcome.',
      },
    ],
    faqs: [
      { q: 'Should I offer a discount when a quotation is rejected?', a: 'Not immediately, and not without understanding why. If budget-based, offer to revisit scope â€" not your margin. If not budget-based, a discount does not solve the actual problem.' },
      { q: 'How long should I follow up after a rejected quotation?', a: 'Follow up once within 48 hours to acknowledge and ask for feedback. If they share a timing or budget reason, follow up again at the relevant point. Beyond that, put them in a periodic check-in list.' },
      { q: 'Is it unprofessional to ask why a quotation was rejected?', a: 'No. Asking for honest feedback is professional, not desperate. Frame it as wanting to improve future proposals rather than arguing with the decision.' },
    ],
    relatedSlugs: ['how-to-win-more-deals-with-quotations', 'quotation-follow-up-strategy', 'how-to-write-a-professional-quotation'],
    references: [],
  },

  {
    slug: 'how-to-price-a-service-business',
    title: 'How to Price Your Services: A Practical Guide for Indian Freelancers and Small Businesses',
    seoTitle: 'How to Price Your Services India 2026 | Service Pricing Strategy for Freelancers',
    metaDescription: 'How to set the right price for your services as a freelancer or small business in India â€" cost-plus pricing, value-based pricing, market research, when to raise your rates, and how to present pricing to clients.',
    keywords: ['how to price services india', 'service pricing strategy', 'freelancer pricing india', 'how to charge for services', 'value based pricing', 'raise service rates india'],
    date: '2026-09-03',
    updatedDate: '2026-09-24',
    author: 'Prashant Upadhyay',
    readingTime: 8,
    category: 'Business Basics',
    heroImage: '/blog/pricing-strategy.svg',
    heroAlt: 'Freelancer calculating service pricing on calculator with project documents and rate card',
    excerpt: 'Most freelancers price too low at the start, then feel trapped at that rate. Here is how to price confidently â€" and how to raise your rates without losing clients.',
    intro: 'Pricing is the decision that has more impact on your business income than any other single choice â€" more than how many clients you have, more than how hard you work, more than your marketing. Yet most Indian freelancers arrive at their price by guessing what the client might accept, matching a competitor rate, or charging what they charged their last client.',
    sections: [
      {
        heading: 'The two pricing methods that work',
        body: 'Cost-plus pricing starts with your costs and adds a margin. Calculate how much it costs you to do the work â€" your time at an hourly rate you want to earn, any direct expenses, software or tools used, and your overhead share â€" then add your profit margin. This ensures you never price below what the work actually costs you, which is the most common mistake among new freelancers.\n\nValue-based pricing starts with the value the work creates for the client and works backward. If you are building a website for a business expecting Rs 10 lakh in online revenue from it, your Rs 1 lakh fee is a 10x return for them. The client is buying a revenue asset, not hours of your time, and the price should reflect that.',
      },
      {
        heading: 'How to research the market without underselling yourself',
        body: 'Market research for pricing means understanding what comparable professionals charge â€" not matching the lowest rate you find. Look at what experienced, well-reviewed professionals in your city and sector charge. Look at international platforms like Upwork for your category. Talk to peers who are a year or two ahead of you.\n\nThe mistake most freelancers make is benchmarking against the bottom of the market. If you price at Rs 500 an hour because that is what someone on a bidding platform charges, you have assumed you are competing with the cheapest option available.',
      },
      {
        heading: 'What to do when a client says your price is too high',
        body: 'Most client price objections are not about money â€" they are about uncertainty. The client is not sure the result will be worth the price.\n\nThe right response is not to immediately offer a discount. Instead, revisit the scope: which part of what I have proposed is most important to you, and would you like me to show you what a smaller scope would look like at a lower price? This reframes the conversation from you are expensive to let us find the right package for your budget.',
      },
      {
        heading: 'When and how to raise your rates',
        body: 'Raise your rates when: you have more work than you can handle, you are consistently closing proposals without pushback on price, you have new skills that increase your market value, or your costs have increased significantly.\n\nFor existing retainer clients, give notice before the increase â€" typically one full billing cycle: I am increasing my monthly rate from Rs 30,000 to Rs 35,000 from November. Most long-term clients who value the relationship will accept a reasonable increase.',
      },
      {
        heading: 'How to present your pricing professionally',
        body: 'Never present your price as an apology. Most freelancers say: the price would be around Rs 40,000, and I can work on it a bit if needed. That sentence contains an apology, a hedge, and a pre-emptive discount.\n\nPresent your price as a fact: Based on the scope we have discussed, my fee for this project is Rs 45,000. That covers the five pages, responsive design, two rounds of revisions, and handover of all source files. Confident, reaffirms the value, does not invite negotiation.',
      },
    ],
    faqs: [
      { q: 'Should I charge by the hour or by the project?', a: 'Project-based pricing is almost always better beyond the beginner stage. It gives clients budget certainty and rewards your efficiency. Reserve hourly billing for genuinely open-ended advisory work where scope cannot be defined upfront.' },
      { q: 'How do I know if I am undercharging?', a: 'The clearest signal is that clients almost never negotiate your price and you are booked solid. A healthy close rate is roughly 50 to 70 percent of qualified proposals â€" some pushback on price means you are near the right level.' },
      { q: 'Is it okay to charge different rates for different clients?', a: 'Yes, within reason. Charging a large corporate client more than a small NGO for the same work is a legitimate business decision. Each price should reflect the value you are providing in that relationship.' },
    ],
    relatedSlugs: ['how-to-price-your-services', 'freelancer-pricing-guide', 'quotation-terms-and-conditions-checklist'],
    references: [],
  },
];
