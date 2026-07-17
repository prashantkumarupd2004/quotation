'use client';

import { useEffect } from 'react';
import {
  Building2,
  ClipboardList,
  FileText,
  IndianRupee,
  Layers,
  Layout,
  Percent,
  QrCode,
  StickyNote,
  User,
} from 'lucide-react';
import { useDocumentStore, useDocumentConfig } from '@/components/document/document-context';
import { currencies } from '@/lib/currency';
import { taxModeLabels } from '@/lib/calculations';
import { CATEGORY_LIST, getCategory, type CategoryField } from '@/lib/categories';
import { generateQrDataUrl } from '@/lib/export';
import { toNumber } from '@/lib/utils';
import type { DiscountType, QuotationCategory, TaxMode } from '@/types/quotation';
import { ItemsEditor } from './items-editor';
import { TemplatePicker } from './template-picker';
import { ImageUpload } from './image-upload';

function Section({
  icon: Icon,
  title,
  description,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="glass-card p-5 sm:p-6">
      <div className="mb-4 flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <h2 className="font-display text-base font-bold">{title}</h2>
          {description ? <p className="text-xs text-muted-foreground">{description}</p> : null}
        </div>
      </div>
      {children}
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="field-label">{label}</span>
      {children}
    </label>
  );
}

export function BuilderForm() {
  const { config } = useDocumentConfig();
  const q = useDocumentStore((s) => s.quotation);
  const setQuotation = useDocumentStore((s) => s.setQuotation);
  const update = useDocumentStore((s) => s.update);

  // Regenerate QR whenever the source data changes and QR is enabled.
  useEffect(() => {
    if (!q.showQr) return;
    const payload =
      q.qrData && !q.qrData.startsWith('data:')
        ? q.qrData
        : `${config.shortName} ${q.meta.number}\n${q.company.name}\nTotal payable as per quotation.`;
    let cancelled = false;
    generateQrDataUrl(payload).then((url) => {
      if (!cancelled && url && url !== q.qrData) {
        update((prev) => ({ ...prev, qrData: url }), { history: false });
      }
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q.showQr, q.meta.number, q.company.name]);

  const setCompany = (patch: Partial<typeof q.company>) =>
    setQuotation({ company: { ...q.company, ...patch } });
  const setClient = (patch: Partial<typeof q.client>) =>
    setQuotation({ client: { ...q.client, ...patch } });
  const setMeta = (patch: Partial<typeof q.meta>) => setQuotation({ meta: { ...q.meta, ...patch } });
  const setTotals = (patch: Partial<typeof q.totals>) =>
    setQuotation({ totals: { ...q.totals, ...patch } });
  const setDetail = (key: string, value: string) =>
    setQuotation({ details: { ...q.details, [key]: value } });

  const category = getCategory(q.meta.category);

  // Switching category applies that category's sensible defaults. Notes/terms are
  // only replaced when they still hold a category preset (i.e. the user hasn't
  // written their own), so custom wording is never clobbered.
  const setCategory = (next: QuotationCategory) => {
    const cfg = getCategory(next);
    update((prev) => {
      const notesUntouched = !prev.notes || CATEGORY_LIST.some((c) => c.notes === prev.notes);
      const termsUntouched = !prev.terms || CATEGORY_LIST.some((c) => c.terms === prev.terms);
      return {
        ...prev,
        meta: { ...prev.meta, category: next },
        totals: {
          ...prev.totals,
          taxMode: prev.totals.taxMode === 'none' ? 'none' : cfg.defaultTaxMode,
        },
        notes: notesUntouched ? cfg.notes : prev.notes,
        terms: termsUntouched ? cfg.terms : prev.terms,
      };
    });
  };

  return (
    <div className="space-y-5">
      {config.showCategoryPicker ? (
      <Section icon={Layers} title="Quotation Type" description="Choose a category — fields and labels adapt to it.">
        <div className="grid gap-3 sm:grid-cols-2">
          {CATEGORY_LIST.map((c) => {
            const active = category.id === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setCategory(c.id)}
                aria-pressed={active}
                className={`rounded-xl border p-3 text-left transition ${
                  active
                    ? 'border-primary bg-primary/5 ring-1 ring-primary'
                    : 'border-border hover:border-primary/50 hover:bg-muted/40'
                }`}
              >
                <span className="block text-sm font-semibold">{c.label}</span>
                <span className="mt-1 block text-xs text-muted-foreground">{c.hint}</span>
              </button>
            );
          })}
        </div>
      </Section>
      ) : null}

      <Section icon={Layout} title="Template" description="Pick a design — switch anytime.">
        <TemplatePicker />
        <div className="mt-4 flex items-center gap-3">
          <span className="field-label mb-0">Accent color</span>
          <input
            type="color"
            value={q.meta.accentColor}
            onChange={(e) => setMeta({ accentColor: e.target.value })}
            className="h-9 w-14 cursor-pointer rounded-lg border border-border bg-transparent"
            aria-label="Accent color"
          />
        </div>
      </Section>

      <Section icon={Building2} title={config.partyLabels.from} description={config.partyLabels.fromHint}>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Company Name">
            <input className="field-input" value={q.company.name} onChange={(e) => setCompany({ name: e.target.value })} placeholder="Acme Enterprises" />
          </Field>
          <Field label="GST Number">
            <input className="field-input" value={q.company.gstin} onChange={(e) => setCompany({ gstin: e.target.value })} placeholder="29ABCDE1234F1Z5" />
          </Field>
          <Field label="Phone">
            <input className="field-input" value={q.company.phone} onChange={(e) => setCompany({ phone: e.target.value })} placeholder="+91 98765 43210" />
          </Field>
          <Field label="Email">
            <input className="field-input" type="email" value={q.company.email} onChange={(e) => setCompany({ email: e.target.value })} placeholder="sales@acme.in" />
          </Field>
          <Field label="Website">
            <input className="field-input" value={q.company.website} onChange={(e) => setCompany({ website: e.target.value })} placeholder="www.acme.in" />
          </Field>
          <ImageUpload label="Company Logo" value={q.company.logo} onChange={(v) => setCompany({ logo: v })} hint="Upload logo (PNG/JPG)" />
          <div className="sm:col-span-2">
            <Field label="Address">
              <textarea className="field-input min-h-[70px]" value={q.company.address} onChange={(e) => setCompany({ address: e.target.value })} placeholder="Street, City, State, PIN" />
            </Field>
          </div>
        </div>
      </Section>

      <Section icon={User} title={config.partyLabels.to} description={config.partyLabels.toHint}>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Client Name">
            <input className="field-input" value={q.client.name} onChange={(e) => setClient({ name: e.target.value })} placeholder="Rahul Mehta" />
          </Field>
          <Field label="Client Company">
            <input className="field-input" value={q.client.company} onChange={(e) => setClient({ company: e.target.value })} placeholder="Mehta Residency" />
          </Field>
          <Field label="Phone">
            <input className="field-input" value={q.client.phone} onChange={(e) => setClient({ phone: e.target.value })} placeholder="+91 90000 12345" />
          </Field>
          <Field label="GST Number (optional)">
            <input className="field-input" value={q.client.gstin} onChange={(e) => setClient({ gstin: e.target.value })} />
          </Field>
          <div className="sm:col-span-2">
            <Field label="Client Address">
              <textarea className="field-input min-h-[70px]" value={q.client.address} onChange={(e) => setClient({ address: e.target.value })} />
            </Field>
          </div>
        </div>
      </Section>

      {config.showCategoryPicker && category.fields.length > 0 ? (
        <Section
          icon={ClipboardList}
          title={category.detailsTitle}
          description={`${category.label} — specific details shown on the quotation.`}
        >
          <DetailFieldsGrid fields={category.fields} details={q.details} onChange={setDetail} />
        </Section>
      ) : null}

      {config.fields.length > 0 ? (
        <Section
          icon={ClipboardList}
          title={config.detailsTitle || `${config.shortName} Specifics`}
          description={`Shown on the ${config.shortName.toLowerCase()}.`}
        >
          <DetailFieldsGrid fields={config.fields} details={q.details} onChange={setDetail} />
        </Section>
      ) : null}

      <Section icon={FileText} title={`${config.shortName} Details`}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Field label={config.numberLabel}>
            <input className="field-input" value={q.meta.number} onChange={(e) => setMeta({ number: e.target.value })} />
          </Field>
          <Field label="Currency">
            <select className="field-input" value={q.meta.currency} onChange={(e) => setMeta({ currency: e.target.value })}>
              {currencies.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.code} — {c.symbol}
                </option>
              ))}
            </select>
          </Field>
          <Field label={config.dateLabel}>
            <input type="date" className="field-input" value={q.meta.date} onChange={(e) => setMeta({ date: e.target.value })} />
          </Field>
          {config.secondaryDateLabel ? (
            <Field label={config.secondaryDateLabel}>
              <input type="date" className="field-input" value={q.meta.expiryDate} onChange={(e) => setMeta({ expiryDate: e.target.value })} />
            </Field>
          ) : null}
        </div>
      </Section>

      <Section icon={IndianRupee} title="Items" description="Add unlimited products or services. Drag to reorder.">
        <ItemsEditor />
      </Section>

      <Section icon={Percent} title="Tax, Discount & Charges">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Field label="Tax Mode">
            <select className="field-input" value={q.totals.taxMode} onChange={(e) => setTotals({ taxMode: e.target.value as TaxMode })}>
              {(Object.keys(taxModeLabels) as TaxMode[]).map((mode) => (
                <option key={mode} value={mode}>
                  {taxModeLabels[mode]}
                </option>
              ))}
            </select>
          </Field>
          {q.totals.taxMode === 'flat' ? (
            <Field label="Flat Tax Rate (%)">
              <input type="number" className="field-input" value={q.totals.flatTaxRate} onChange={(e) => setTotals({ flatTaxRate: toNumber(e.target.value) })} />
            </Field>
          ) : null}
          <Field label="Discount Type">
            <select className="field-input" value={q.totals.discountType} onChange={(e) => setTotals({ discountType: e.target.value as DiscountType })}>
              <option value="percent">Percentage (%)</option>
              <option value="flat">Flat Amount</option>
            </select>
          </Field>
          <Field label={q.totals.discountType === 'percent' ? 'Discount (%)' : 'Discount Amount'}>
            <input type="number" min={0} className="field-input" value={q.totals.discountValue} onChange={(e) => setTotals({ discountValue: toNumber(e.target.value) })} />
          </Field>
          <Field label="Shipping / Other Charges">
            <input type="number" min={0} className="field-input" value={q.totals.shipping} onChange={(e) => setTotals({ shipping: toNumber(e.target.value) })} />
          </Field>
          <label className="mt-6 flex items-center gap-2 text-sm font-medium">
            <input type="checkbox" checked={q.totals.roundOff} onChange={(e) => setTotals({ roundOff: e.target.checked })} className="h-4 w-4 rounded border-border text-primary focus:ring-primary" />
            Round off grand total
          </label>
        </div>
      </Section>

      <Section icon={StickyNote} title="Notes & Terms">
        <div className="grid gap-4">
          <Field label="Notes">
            <textarea className="field-input min-h-[70px]" value={q.notes} onChange={(e) => setQuotation({ notes: e.target.value })} />
          </Field>
          <Field label="Terms & Conditions">
            <textarea className="field-input min-h-[100px]" value={q.terms} onChange={(e) => setQuotation({ terms: e.target.value })} />
          </Field>
        </div>
      </Section>

      <Section icon={QrCode} title="Signature, Stamp & QR">
        <div className="grid gap-4 sm:grid-cols-2">
          <ImageUpload label="Signature" value={q.signature} onChange={(v) => setQuotation({ signature: v })} hint="Upload signature" />
          <ImageUpload label="Company Stamp" value={q.stamp} onChange={(v) => setQuotation({ stamp: v })} hint="Upload stamp/seal" />
          <div className="sm:col-span-2">
            <label className="flex items-center gap-2 text-sm font-medium">
              <input type="checkbox" checked={q.showQr} onChange={(e) => setQuotation({ showQr: e.target.checked })} className="h-4 w-4 rounded border-border text-primary focus:ring-primary" />
              Show QR code on document
            </label>
            {q.showQr ? (
              <div className="mt-3">
                <Field label="QR content (UPI ID, link, or leave blank for summary)">
                  <input className="field-input" value={q.qrData.startsWith('data:') ? '' : q.qrData} onChange={(e) => setQuotation({ qrData: e.target.value })} placeholder="upi://pay?pa=yourname@bank or https://..." />
                </Field>
              </div>
            ) : null}
          </div>
        </div>
      </Section>
    </div>
  );
}

/** Renders a registry-driven grid of detail fields (text / textarea / date / select). */
function DetailFieldsGrid({
  fields,
  details,
  onChange,
}: {
  fields: CategoryField[];
  details: Record<string, string>;
  onChange: (key: string, value: string) => void;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {fields.map((f) => (
        <div key={f.key} className={f.full ? 'sm:col-span-2' : undefined}>
          <Field label={f.label}>
            {f.type === 'textarea' ? (
              <textarea
                className="field-input min-h-[70px]"
                value={details[f.key] ?? ''}
                onChange={(e) => onChange(f.key, e.target.value)}
                placeholder={f.placeholder}
              />
            ) : f.type === 'select' ? (
              <select
                className="field-input"
                value={details[f.key] ?? f.options?.[0] ?? ''}
                onChange={(e) => onChange(f.key, e.target.value)}
              >
                {(f.options ?? []).map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={f.type === 'date' ? 'date' : 'text'}
                className="field-input"
                value={details[f.key] ?? ''}
                onChange={(e) => onChange(f.key, e.target.value)}
                placeholder={f.placeholder}
              />
            )}
          </Field>
        </div>
      ))}
    </div>
  );
}
