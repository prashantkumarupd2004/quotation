import type { CategoryDetails, QuotationCategory, TaxMode } from '@/types/quotation';

/** A single category-specific input field. */
export interface CategoryField {
  key: string;
  label: string;
  placeholder?: string;
  type?: 'text' | 'textarea' | 'date';
  /** Span the full width of the two-column grid. */
  full?: boolean;
}

/** Column labels for the line-items table, tuned per category. */
export interface ItemLabels {
  /** Main description column (e.g. "Description" / "Particulars of Service"). */
  description: string;
  /** Tax/HSN code column. */
  code: string;
  /** Rate column. */
  rate: string;
}

export interface CategoryConfig {
  id: QuotationCategory;
  label: string;
  /** Short helper shown under the selector. */
  hint: string;
  itemLabels: ItemLabels;
  /** Units offered in the items editor for this category. */
  units: string[];
  defaultUnit: string;
  defaultTaxRate: number;
  defaultTaxMode: TaxMode;
  /** Heading for the category-specific details block. */
  detailsTitle: string;
  /** Category-specific input fields (empty for 'general'). */
  fields: CategoryField[];
  /** Ready-made notes applied when the user switches to this category. */
  notes: string;
  /** Ready-made terms applied when the user switches to this category. */
  terms: string;
}

const PRODUCT_UNITS = ['Nos', 'Set', 'Sq.ft', 'Sq.m', 'Rft', 'Hour', 'Day', 'Month', 'Kg', 'Ltr', 'Unit', 'Lot'];
const SERVICE_UNITS = ['Hour', 'Day', 'Week', 'Month', 'Session', 'Project', 'Milestone', 'Lump Sum', 'Unit'];

export const CATEGORIES: Record<QuotationCategory, CategoryConfig> = {
  general: {
    id: 'general',
    label: 'General / Products & Services',
    hint: 'Standard quotation for products or services with HSN/SAC and GST.',
    itemLabels: { description: 'Description', code: 'HSN/SAC', rate: 'Rate' },
    units: PRODUCT_UNITS,
    defaultUnit: 'Nos',
    defaultTaxRate: 18,
    defaultTaxMode: 'gst-intra',
    detailsTitle: '',
    fields: [],
    notes: 'Thank you for the opportunity to quote. We look forward to working with you.',
    terms:
      '1. This quotation is valid until the expiry date mentioned above.\n2. 50% advance payment is required to confirm the order.\n3. Prices are subject to change without prior notice after expiry.\n4. Delivery timeline will be confirmed upon order confirmation.',
  },

  legal: {
    id: 'legal',
    label: 'Law / Legal Services',
    hint: 'Fee proposal for legal work — matter, case details and advocate.',
    itemLabels: { description: 'Particulars of Legal Service', code: 'SAC', rate: 'Fee' },
    units: ['Appearance', 'Hearing', 'Drafting', 'Consultation', 'Hour', 'Day', 'Retainer', 'Lump Sum'],
    defaultUnit: 'Appearance',
    defaultTaxRate: 18,
    defaultTaxMode: 'gst-intra',
    detailsTitle: 'Matter / Case Details',
    fields: [
      { key: 'matter', label: 'Matter / Nature of Engagement', type: 'textarea', full: true, placeholder: 'e.g. Representation in a property title dispute' },
      { key: 'caseNumber', label: 'Case / Suit / Petition No.', placeholder: 'CS(OS) 123/2026' },
      { key: 'court', label: 'Court / Tribunal', placeholder: 'High Court of Delhi' },
      { key: 'jurisdiction', label: 'Jurisdiction', placeholder: 'New Delhi' },
      { key: 'hearingDate', label: 'Next Hearing / Key Date', type: 'date' },
      { key: 'advocateName', label: 'Advocate / Counsel in Charge', placeholder: 'Adv. Priya Sharma' },
      { key: 'barCouncilId', label: 'Bar Council Enrolment No.', placeholder: 'D/1234/2015' },
    ],
    notes:
      'This is a professional fee proposal and does not constitute legal advice or an attorney–client relationship until formally engaged.',
    terms:
      '1. Professional fees are exclusive of court fees, stamp duty, filing charges and other out-of-pocket expenses, which will be billed at actuals.\n2. A retainer / advance is payable to commence the engagement.\n3. Fees quoted are for the scope of work described above; additional hearings or work will be charged separately.\n4. GST is applicable on professional fees as per prevailing law.\n5. This quotation is valid until the expiry date mentioned above.',
  },

  freelancer: {
    id: 'freelancer',
    label: 'Freelancer / Creative',
    hint: 'Project proposal — scope, deliverables, revisions and timeline.',
    itemLabels: { description: 'Service / Task', code: 'SAC', rate: 'Rate' },
    units: SERVICE_UNITS,
    defaultUnit: 'Project',
    defaultTaxRate: 18,
    defaultTaxMode: 'gst-intra',
    detailsTitle: 'Project Details',
    fields: [
      { key: 'projectTitle', label: 'Project Title', full: true, placeholder: 'Brand identity & website redesign' },
      { key: 'scope', label: 'Scope of Work', type: 'textarea', full: true, placeholder: 'What is included in this engagement' },
      { key: 'deliverables', label: 'Deliverables', type: 'textarea', full: true, placeholder: 'Files, formats and assets handed over' },
      { key: 'revisions', label: 'Revisions Included', placeholder: 'e.g. 2 rounds' },
      { key: 'timeline', label: 'Timeline / Turnaround', placeholder: 'e.g. 3 weeks' },
      { key: 'startDate', label: 'Expected Start Date', type: 'date' },
    ],
    notes: 'Excited to collaborate on this project. Timeline begins after advance payment and receipt of all required inputs.',
    terms:
      '1. 50% advance to begin; balance due before final delivery / handover.\n2. Quoted price covers the scope and revisions listed above; extra work is billed separately.\n3. Full ownership / usage rights transfer after complete payment.\n4. Delays in client feedback or inputs may extend the timeline.',
  },

  plumbing: {
    id: 'plumbing',
    label: 'Plumbing Services',
    hint: 'Site-based plumbing work — labour, materials and warranty.',
    itemLabels: { description: 'Work / Material', code: 'HSN/SAC', rate: 'Rate' },
    units: ['Nos', 'Point', 'Rft', 'Job', 'Hour', 'Day', 'Visit', 'Set'],
    defaultUnit: 'Job',
    defaultTaxRate: 18,
    defaultTaxMode: 'gst-intra',
    detailsTitle: 'Job / Site Details',
    fields: [
      { key: 'siteAddress', label: 'Site Address', type: 'textarea', full: true, placeholder: 'Where the work will be carried out' },
      { key: 'workType', label: 'Type of Work', full: true, placeholder: 'e.g. Bathroom fittings + leak repair' },
      { key: 'materialBy', label: 'Material Provided By', placeholder: 'Contractor / Client' },
      { key: 'warranty', label: 'Warranty on Work', placeholder: 'e.g. 6 months' },
      { key: 'visitDate', label: 'Scheduled Visit Date', type: 'date' },
    ],
    notes: 'Estimate is based on site conditions observed. Concealed or additional damage found during work will be quoted separately.',
    terms:
      '1. Rates cover labour; material charges are as listed / at actuals.\n2. Advance required for material procurement.\n3. Warranty covers workmanship only, not misuse or third-party tampering.\n4. Any extra work beyond the listed scope will be charged additionally.',
  },

  electrical: {
    id: 'electrical',
    label: 'Electrical Services',
    hint: 'Wiring, fittings and repairs — load, materials and safety.',
    itemLabels: { description: 'Work / Material', code: 'HSN/SAC', rate: 'Rate' },
    units: ['Nos', 'Point', 'Rft', 'Mtr', 'Job', 'Hour', 'Day', 'Visit'],
    defaultUnit: 'Point',
    defaultTaxRate: 18,
    defaultTaxMode: 'gst-intra',
    detailsTitle: 'Job / Site Details',
    fields: [
      { key: 'siteAddress', label: 'Site Address', type: 'textarea', full: true, placeholder: 'Where the work will be carried out' },
      { key: 'workType', label: 'Type of Work', full: true, placeholder: 'e.g. New wiring + DB installation' },
      { key: 'loadDetails', label: 'Load / Capacity', placeholder: 'e.g. 5 kW single-phase' },
      { key: 'materialBy', label: 'Material Provided By', placeholder: 'Contractor / Client' },
      { key: 'warranty', label: 'Warranty on Work', placeholder: 'e.g. 1 year' },
      { key: 'visitDate', label: 'Scheduled Visit Date', type: 'date' },
    ],
    notes: 'All work will comply with standard electrical safety norms. Load additions beyond the stated capacity may require rework.',
    terms:
      '1. Rates cover labour; material charges are as listed / at actuals.\n2. Advance required for material procurement.\n3. Warranty covers workmanship only.\n4. Client to ensure supply availability and safe access to the work area.',
  },

  interior: {
    id: 'interior',
    label: 'Interior / Construction',
    hint: 'Site work by area — material, labour and site visits.',
    itemLabels: { description: 'Work Description', code: 'HSN/SAC', rate: 'Rate' },
    units: ['Sq.ft', 'Sq.m', 'Rft', 'Nos', 'Set', 'Lot', 'Day', 'Job'],
    defaultUnit: 'Sq.ft',
    defaultTaxRate: 18,
    defaultTaxMode: 'gst-intra',
    detailsTitle: 'Project / Site Details',
    fields: [
      { key: 'siteAddress', label: 'Site Address', type: 'textarea', full: true, placeholder: 'Project site location' },
      { key: 'area', label: 'Built-up / Carpet Area', placeholder: 'e.g. 1200 sq.ft' },
      { key: 'scope', label: 'Scope of Work', full: true, placeholder: 'e.g. Modular kitchen + false ceiling + painting' },
      { key: 'designStyle', label: 'Design Style', placeholder: 'e.g. Contemporary' },
      { key: 'timeline', label: 'Estimated Timeline', placeholder: 'e.g. 8 weeks' },
      { key: 'siteVisitDate', label: 'Site Visit Date', type: 'date' },
    ],
    notes: 'Design consultation and drawings are included as listed. Civil / structural changes are outside the quoted scope unless specified.',
    terms:
      '1. Payment in stages: advance, mid-work and on completion.\n2. Prices are for the scope and materials specified; upgrades billed separately.\n3. Timeline is subject to site readiness and material availability.\n4. Additional work will be quoted before execution.',
  },

  'it-software': {
    id: 'it-software',
    label: 'IT / Software',
    hint: 'Software project — scope, tech stack, milestones and support.',
    itemLabels: { description: 'Module / Service', code: 'SAC', rate: 'Rate' },
    units: SERVICE_UNITS,
    defaultUnit: 'Milestone',
    defaultTaxRate: 18,
    defaultTaxMode: 'gst-intra',
    detailsTitle: 'Project Details',
    fields: [
      { key: 'projectTitle', label: 'Project / Product Name', full: true, placeholder: 'Inventory management portal' },
      { key: 'scope', label: 'Scope of Work', type: 'textarea', full: true, placeholder: 'Features and modules covered' },
      { key: 'techStack', label: 'Technology Stack', placeholder: 'e.g. Next.js, Node, Postgres' },
      { key: 'deliverables', label: 'Deliverables', type: 'textarea', full: true, placeholder: 'Source code, deployment, docs' },
      { key: 'timeline', label: 'Timeline', placeholder: 'e.g. 10 weeks' },
      { key: 'supportPeriod', label: 'Post-launch Support', placeholder: 'e.g. 3 months' },
    ],
    notes: 'Estimate assumes the scope above. Change requests will be assessed and quoted separately.',
    terms:
      '1. Milestone-based billing; advance to commence.\n2. Scope changes are handled via a separate change request.\n3. Hosting, third-party licences and API costs are billed at actuals.\n4. Source code / IP transfers after full and final payment.',
  },

  photography: {
    id: 'photography',
    label: 'Photography / Event',
    hint: 'Shoot coverage — event, hours, crew and deliverables.',
    itemLabels: { description: 'Service / Package', code: 'SAC', rate: 'Rate' },
    units: ['Package', 'Event', 'Day', 'Hour', 'Album', 'Nos', 'Set'],
    defaultUnit: 'Package',
    defaultTaxRate: 18,
    defaultTaxMode: 'gst-intra',
    detailsTitle: 'Event / Shoot Details',
    fields: [
      { key: 'eventType', label: 'Event Type', placeholder: 'e.g. Wedding' },
      { key: 'eventDate', label: 'Event Date', type: 'date' },
      { key: 'venue', label: 'Venue', full: true, placeholder: 'Venue name and address' },
      { key: 'coverageHours', label: 'Coverage Hours', placeholder: 'e.g. 8 hours' },
      { key: 'crew', label: 'Crew / Setup', placeholder: 'e.g. 2 photographers + 1 cinematographer' },
      { key: 'deliverables', label: 'Deliverables', type: 'textarea', full: true, placeholder: 'Edited photos, video, album, drive' },
    ],
    notes: 'Final edited deliverables are shared within the agreed timeline after the event. Raw files are not included unless specified.',
    terms:
      '1. Booking amount confirms the date; balance due before delivery.\n2. Travel and stay outside city limits are charged extra.\n3. Reschedule is subject to availability; booking amount is non-refundable.\n4. Delivery timeline begins after the event date.',
  },

  medical: {
    id: 'medical',
    label: 'Medical / Healthcare',
    hint: 'Treatment / procedure estimate — patient and department.',
    itemLabels: { description: 'Service / Procedure', code: 'SAC', rate: 'Charge' },
    units: ['Nos', 'Session', 'Day', 'Visit', 'Test', 'Procedure', 'Package'],
    defaultUnit: 'Procedure',
    defaultTaxRate: 0,
    defaultTaxMode: 'none',
    detailsTitle: 'Patient / Treatment Details',
    fields: [
      { key: 'patientName', label: 'Patient Name', placeholder: 'Full name' },
      { key: 'age', label: 'Age / Gender', placeholder: 'e.g. 45 / M' },
      { key: 'procedure', label: 'Procedure / Treatment', full: true, placeholder: 'e.g. Knee replacement (single)' },
      { key: 'consultingDoctor', label: 'Consulting Doctor', placeholder: 'Dr. ...' },
      { key: 'department', label: 'Department', placeholder: 'e.g. Orthopaedics' },
      { key: 'appointmentDate', label: 'Admission / Appointment Date', type: 'date' },
      { key: 'estimatedStay', label: 'Estimated Stay', placeholder: 'e.g. 3 days' },
    ],
    notes: 'This is an approximate estimate. Actual charges may vary based on the patient’s condition, investigations and length of stay.',
    terms:
      '1. Estimate is indicative and subject to revision as per treatment progress.\n2. Charges for consumables, implants and medicines are billed at actuals.\n3. Insurance / TPA approvals are the patient’s responsibility.\n4. Advance deposit is required at the time of admission.',
  },

  catering: {
    id: 'catering',
    label: 'Catering / Food',
    hint: 'Event catering — guests, menu and service style.',
    itemLabels: { description: 'Menu / Service', code: 'SAC', rate: 'Rate' },
    units: ['Plate', 'Person', 'Kg', 'Nos', 'Counter', 'Package', 'Day'],
    defaultUnit: 'Plate',
    defaultTaxRate: 5,
    defaultTaxMode: 'gst-intra',
    detailsTitle: 'Event / Menu Details',
    fields: [
      { key: 'eventType', label: 'Event Type', placeholder: 'e.g. Wedding reception' },
      { key: 'eventDate', label: 'Event Date', type: 'date' },
      { key: 'venue', label: 'Venue', full: true, placeholder: 'Venue name and address' },
      { key: 'guestCount', label: 'Number of Guests', placeholder: 'e.g. 250' },
      { key: 'menuType', label: 'Menu Type', placeholder: 'e.g. Veg / Non-veg buffet' },
      { key: 'serviceStyle', label: 'Service Style', placeholder: 'e.g. Buffet / Table service' },
    ],
    notes: 'Final guest count is to be confirmed 48 hours before the event. Menu can be customised on request.',
    terms:
      '1. Booking advance confirms the date; balance due before the event.\n2. Final billing is based on the confirmed / guaranteed guest count.\n3. Additional counters, live stations or extra hours are charged separately.\n4. Crockery, staff and setup are as per the selected package.',
  },

  tutoring: {
    id: 'tutoring',
    label: 'Tutoring / Coaching',
    hint: 'Classes / courses — subjects, level and schedule.',
    itemLabels: { description: 'Course / Subject', code: 'SAC', rate: 'Fee' },
    units: ['Session', 'Hour', 'Month', 'Week', 'Course', 'Subject', 'Semester'],
    defaultUnit: 'Month',
    defaultTaxRate: 18,
    defaultTaxMode: 'gst-intra',
    detailsTitle: 'Course Details',
    fields: [
      { key: 'course', label: 'Course / Program', full: true, placeholder: 'e.g. Class 10 Science + Maths' },
      { key: 'level', label: 'Level / Grade', placeholder: 'e.g. CBSE Class 10' },
      { key: 'subjects', label: 'Subjects Covered', type: 'textarea', full: true, placeholder: 'List of subjects' },
      { key: 'schedule', label: 'Schedule', placeholder: 'e.g. 3 sessions/week, 1.5 hr each' },
      { key: 'mode', label: 'Mode', placeholder: 'Online / Offline / Hybrid' },
      { key: 'startDate', label: 'Start Date', type: 'date' },
    ],
    notes: 'Fees cover tuition for the listed subjects and schedule. Study material may be charged separately.',
    terms:
      '1. Fees are payable in advance per the selected cycle (monthly / course).\n2. Fees once paid are non-refundable and non-transferable.\n3. Missed sessions are rescheduled subject to availability.\n4. Schedule may be adjusted with prior mutual agreement.',
  },

  transport: {
    id: 'transport',
    label: 'Transport / Logistics',
    hint: 'Trips and freight — route, vehicle and cargo.',
    itemLabels: { description: 'Service / Route', code: 'SAC', rate: 'Rate' },
    units: ['Trip', 'Km', 'Day', 'Hour', 'Ton', 'Nos', 'Package'],
    defaultUnit: 'Trip',
    defaultTaxRate: 18,
    defaultTaxMode: 'gst-intra',
    detailsTitle: 'Trip / Consignment Details',
    fields: [
      { key: 'pickup', label: 'Pickup Location', full: true, placeholder: 'Origin address' },
      { key: 'drop', label: 'Drop Location', full: true, placeholder: 'Destination address' },
      { key: 'vehicleType', label: 'Vehicle Type', placeholder: 'e.g. 14ft container' },
      { key: 'distance', label: 'Distance', placeholder: 'e.g. 320 km' },
      { key: 'cargoType', label: 'Cargo / Goods Type', placeholder: 'e.g. Household goods' },
      { key: 'travelDate', label: 'Travel / Dispatch Date', type: 'date' },
    ],
    notes: 'Rates are based on the route and load stated. Waiting charges, tolls and permits are extra unless specified.',
    terms:
      '1. Toll, parking, permits and state taxes are charged at actuals unless included.\n2. Loading / unloading and labour are extra unless specified.\n3. Advance required to confirm the booking.\n4. Transit risk / insurance is the client’s responsibility unless agreed otherwise.',
  },
};

export const CATEGORY_LIST: CategoryConfig[] = [
  CATEGORIES.general,
  CATEGORIES.legal,
  CATEGORIES.freelancer,
  CATEGORIES.plumbing,
  CATEGORIES.electrical,
  CATEGORIES.interior,
  CATEGORIES['it-software'],
  CATEGORIES.photography,
  CATEGORIES.medical,
  CATEGORIES.catering,
  CATEGORIES.tutoring,
  CATEGORIES.transport,
];

export function getCategory(category: QuotationCategory | undefined): CategoryConfig {
  return (category && CATEGORIES[category]) || CATEGORIES.general;
}

export function itemLabelsFor(category: QuotationCategory | undefined): ItemLabels {
  return getCategory(category).itemLabels;
}

/** Whether the active category has any filled-in detail fields worth rendering. */
export function hasCategoryDetails(category: QuotationCategory | undefined, details: CategoryDetails | undefined): boolean {
  if (!details) return false;
  return getCategory(category).fields.some((f) => (details[f.key] ?? '').trim() !== '');
}
