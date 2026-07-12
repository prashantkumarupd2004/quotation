import type { Quotation, LineItem } from '@/types/quotation';
import { generateQuotationNumber } from './calculations';
import { uid } from './utils';

export function createEmptyItem(): LineItem {
  return {
    id: uid('item'),
    description: '',
    hsn: '',
    quantity: 1,
    unit: 'Nos',
    rate: 0,
    taxRate: 18,
  };
}

/** ISO date string offset by a number of days from today. */
function isoDate(offsetDays = 0): string {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().slice(0, 10);
}

export function createDefaultQuotation(): Quotation {
  return {
    meta: {
      number: generateQuotationNumber(),
      date: isoDate(0),
      expiryDate: isoDate(15),
      currency: 'INR',
      templateId: 'modern',
      accentColor: '#4f46e5',
      category: 'general',
    },
    company: {
      name: '',
      logo: '',
      address: '',
      gstin: '',
      phone: '',
      email: '',
      website: '',
    },
    client: {
      name: '',
      company: '',
      address: '',
      gstin: '',
      phone: '',
      email: '',
    },
    items: [
      {
        id: uid('item'),
        description: '',
        hsn: '',
        quantity: 1,
        unit: 'Nos',
        rate: 0,
        taxRate: 18,
      },
    ],
    totals: {
      discountType: 'percent',
      discountValue: 0,
      shipping: 0,
      taxMode: 'gst-intra',
      flatTaxRate: 18,
      roundOff: true,
    },
    details: {},
    notes: 'Thank you for the opportunity to quote. We look forward to working with you.',
    terms:
      '1. This quotation is valid until the expiry date mentioned above.\n2. 50% advance payment is required to confirm the order.\n3. Prices are subject to change without prior notice after expiry.\n4. Delivery timeline will be confirmed upon order confirmation.',
    signature: '',
    stamp: '',
    showQr: false,
    qrData: '',
  };
}

/** A richly populated sample used for template previews and demos. */
export function createSampleQuotation(): Quotation {
  const base = createDefaultQuotation();
  return {
    ...base,
    company: {
      name: 'Skyline Interiors Pvt. Ltd.',
      logo: '',
      address: '204, Business Hub, MG Road,\nBengaluru, Karnataka 560001',
      gstin: '29ABCDE1234F1Z5',
      phone: '+91 98765 43210',
      email: 'sales@skylineinteriors.in',
      website: 'www.skylineinteriors.in',
    },
    client: {
      name: 'Rahul Mehta',
      company: 'Mehta Residency',
      address: '12, Palm Grove Layout,\nWhitefield, Bengaluru 560066',
      gstin: '',
      phone: '+91 90000 12345',
      email: 'rahul.mehta@example.com',
    },
    items: [
      { id: 'i1', description: 'Modular Kitchen Design & Installation', hsn: '9403', quantity: 1, unit: 'Set', rate: 185000, taxRate: 18 },
      { id: 'i2', description: 'False Ceiling with LED Cove Lighting', hsn: '9405', quantity: 420, unit: 'Sq.ft', rate: 145, taxRate: 18 },
      { id: 'i3', description: 'Master Bedroom Wardrobe (Sliding)', hsn: '9403', quantity: 2, unit: 'Nos', rate: 62000, taxRate: 18 },
      { id: 'i4', description: 'Wall Texture & Premium Emulsion Paint', hsn: '9954', quantity: 1600, unit: 'Sq.ft', rate: 38, taxRate: 18 },
    ],
    notes: 'Design consultation and 3D visualisation are included at no extra cost.',
  };
}
