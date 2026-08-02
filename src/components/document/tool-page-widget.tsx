'use client';

import { useState } from 'react';
import {
  Calculator,
  CheckSquare,
  Square,
  ArrowRight,
  Info,
  FileText,
  Receipt,
  RefreshCw,
  Truck,
  ShoppingCart,
  CreditCard,
  RotateCcw,
  RotateCw,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';
import type { ToolWidget } from '@/data/tools/types';

export function ToolPageWidget({ widget }: { widget: ToolWidget }) {
  switch (widget) {
    case 'gst-calculator':
      return <GstCalculatorWidget />;
    case 'invoice-vs-receipt':
      return <InvoiceVsReceiptWidget />;
    case 'estimate-vs-quote':
      return <EstimateVsQuoteWidget />;
    case 'proforma-vs-invoice':
      return <ProformaVsInvoiceWidget />;
    case 'po-workflow':
      return <PoWorkflowWidget />;
    case 'challan-checklist':
      return <ChallanChecklistWidget />;
    case 'payment-modes':
      return <PaymentModesWidget />;
    case 'credit-vs-debit':
      return <CreditVsDebitWidget />;
    case 'debit-note-steps':
      return <DebitNoteStepsWidget />;
    default:
      return null;
  }
}

/* ─────────────────────────────────────────────────────────────────────────────
   GST RATE CALCULATOR — GST Invoice page
   Interactive: amount input + rate selector → CGST/SGST/IGST breakdown
───────────────────────────────────────────────────────────────────────────── */
function GstCalculatorWidget() {
  const [amount, setAmount] = useState('10000');
  const [rate, setRate] = useState(18);
  const [mode, setMode] = useState<'intra' | 'inter'>('intra');

  const base = parseFloat(amount) || 0;
  const totalTax = (base * rate) / 100;
  const half = totalTax / 2;
  const total = base + totalTax;

  const rates = [5, 12, 18, 28];

  return (
    <section className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-6 dark:border-emerald-800/40 dark:from-emerald-950/30 dark:to-teal-950/30">
      <div className="mb-5 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-100 dark:bg-emerald-900/50">
          <Calculator className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
        </span>
        <div>
          <h3 className="font-semibold text-emerald-900 dark:text-emerald-100">
            Live GST Tax Calculator
          </h3>
          <p className="text-sm text-emerald-700/70 dark:text-emerald-300/70">
            Calculate CGST, SGST &amp; IGST instantly
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {/* Amount */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-emerald-800 dark:text-emerald-200">
            Taxable Amount (₹)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full rounded-xl border border-emerald-200 bg-white px-4 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:border-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-100"
            placeholder="10000"
          />
        </div>

        {/* Rate */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-emerald-800 dark:text-emerald-200">
            GST Rate
          </label>
          <div className="flex gap-1.5">
            {rates.map((r) => (
              <button
                key={r}
                onClick={() => setRate(r)}
                className={`flex-1 rounded-xl py-2.5 text-sm font-semibold transition-all ${
                  rate === r
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-white text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-950/50 dark:text-emerald-300'
                }`}
              >
                {r}%
              </button>
            ))}
          </div>
        </div>

        {/* Mode */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-emerald-800 dark:text-emerald-200">
            Supply Type
          </label>
          <div className="flex gap-1.5">
            {(['intra', 'inter'] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`flex-1 rounded-xl py-2.5 text-sm font-semibold transition-all ${
                  mode === m
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-950/50 dark:text-emerald-300'
                }`}
              >
                {m === 'intra' ? 'Intra-State' : 'Inter-State'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Result */}
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {mode === 'intra' ? (
          <>
            <ResultCard label="CGST" value={half} color="text-emerald-700 dark:text-emerald-300" />
            <ResultCard label="SGST" value={half} color="text-emerald-700 dark:text-emerald-300" />
          </>
        ) : (
          <ResultCard
            label="IGST"
            value={totalTax}
            color="text-emerald-700 dark:text-emerald-300"
            span
          />
        )}
        <ResultCard label="Total Tax" value={totalTax} color="text-amber-700 dark:text-amber-300" />
        <ResultCard
          label="Invoice Total"
          value={total}
          color="text-emerald-900 dark:text-emerald-100"
          bold
        />
      </div>
      <p className="mt-3 text-xs text-emerald-600/70 dark:text-emerald-400/70">
        * For reference only. Always verify applicable GST rate under your HSN/SAC code.
      </p>
    </section>
  );
}

function ResultCard({
  label,
  value,
  color,
  bold,
  span,
}: {
  label: string;
  value: number;
  color: string;
  bold?: boolean;
  span?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl bg-white p-4 shadow-sm dark:bg-emerald-950/40 ${span ? 'col-span-2' : ''}`}
    >
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className={`mt-1 text-xl ${bold ? 'font-extrabold' : 'font-bold'} ${color}`}>
        ₹{value.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   INVOICE VS RECEIPT — Invoice Maker page
───────────────────────────────────────────────────────────────────────────── */
function InvoiceVsReceiptWidget() {
  const rows = [
    { aspect: 'Purpose', invoice: 'Requests payment from a buyer', receipt: 'Confirms payment already received' },
    { aspect: 'Timing', invoice: 'Issued before or at time of payment', receipt: 'Issued after payment is received' },
    { aspect: 'Legal standing', invoice: 'Creates a legal obligation to pay', receipt: 'Proof that obligation was met' },
    { aspect: 'Tax record', invoice: 'Basis for GST input tax credit', receipt: 'Acknowledgement, not a tax document' },
    { aspect: 'When to use', invoice: 'For all sales of goods/services', receipt: 'After cash, UPI, or cheque payment' },
  ];

  return (
    <section className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 dark:border-blue-800/40 dark:from-blue-950/30 dark:to-indigo-950/30">
      <div className="mb-5 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-100 dark:bg-blue-900/50">
          <Receipt className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        </span>
        <div>
          <h3 className="font-semibold text-blue-900 dark:text-blue-100">Invoice vs Payment Receipt</h3>
          <p className="text-sm text-blue-700/70 dark:text-blue-300/70">Key differences at a glance</p>
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl border border-blue-200 dark:border-blue-800/40">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-100 dark:bg-blue-900/40">
              <th className="px-4 py-3 text-left font-semibold text-blue-900 dark:text-blue-100">Aspect</th>
              <th className="px-4 py-3 text-left font-semibold text-blue-700 dark:text-blue-300">Invoice</th>
              <th className="px-4 py-3 text-left font-semibold text-indigo-700 dark:text-indigo-300">Receipt</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-blue-100 dark:divide-blue-800/40">
            {rows.map((r) => (
              <tr key={r.aspect} className="bg-white dark:bg-blue-950/20">
                <td className="px-4 py-3 font-medium text-blue-900 dark:text-blue-100">{r.aspect}</td>
                <td className="px-4 py-3 text-blue-700 dark:text-blue-300">{r.invoice}</td>
                <td className="px-4 py-3 text-indigo-700 dark:text-indigo-300">{r.receipt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   ESTIMATE VS QUOTE VS INVOICE — Estimate Maker page
───────────────────────────────────────────────────────────────────────────── */
function EstimateVsQuoteWidget() {
  const cols = [
    {
      title: 'Estimate',
      icon: <Calculator className="h-5 w-5" />,
      color: 'amber',
      points: [
        'Approximate cost, not binding',
        'Issued before scope is confirmed',
        'Amount may vary ±10%',
        'No acceptance needed to proceed',
        'E.g. contractor site visit quote',
      ],
      tag: 'Non-binding',
    },
    {
      title: 'Quotation',
      icon: <FileText className="h-5 w-5" />,
      color: 'emerald',
      points: [
        'Fixed price, legally binding on acceptance',
        'Valid for a stated period',
        'Scope is fully defined',
        'Client accepts in writing',
        'E.g. vendor product pricing',
      ],
      tag: 'Firm Offer',
    },
    {
      title: 'Invoice',
      icon: <Receipt className="h-5 w-5" />,
      color: 'blue',
      points: [
        'Demand for payment after delivery',
        'Issued post-work completion',
        'Includes tax details (GST)',
        'Creates legal payment obligation',
        'E.g. billing after project delivery',
      ],
      tag: 'Payment Demand',
    },
  ];

  const colorMap: Record<string, string> = {
    amber: 'border-amber-200 bg-amber-50 dark:border-amber-800/40 dark:bg-amber-950/30',
    emerald: 'border-emerald-200 bg-emerald-50 dark:border-emerald-800/40 dark:bg-emerald-950/30',
    blue: 'border-blue-200 bg-blue-50 dark:border-blue-800/40 dark:bg-blue-950/30',
  };
  const iconColorMap: Record<string, string> = {
    amber: 'bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-400',
    emerald: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400',
    blue: 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400',
  };
  const tagColorMap: Record<string, string> = {
    amber: 'bg-amber-200 text-amber-800 dark:bg-amber-800/40 dark:text-amber-200',
    emerald: 'bg-emerald-200 text-emerald-800 dark:bg-emerald-800/40 dark:text-emerald-200',
    blue: 'bg-blue-200 text-blue-800 dark:bg-blue-800/40 dark:text-blue-200',
  };

  return (
    <section className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-50 p-6 dark:border-amber-800/40 dark:from-amber-950/30 dark:to-yellow-950/30">
      <div className="mb-5 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-amber-100 dark:bg-amber-900/50">
          <Info className="h-5 w-5 text-amber-600 dark:text-amber-400" />
        </span>
        <div>
          <h3 className="font-semibold text-amber-900 dark:text-amber-100">
            Estimate vs Quotation vs Invoice
          </h3>
          <p className="text-sm text-amber-700/70 dark:text-amber-300/70">
            Know which document to send at each stage
          </p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {cols.map((col) => (
          <div key={col.title} className={`rounded-2xl border p-5 ${colorMap[col.color]}`}>
            <div className="mb-3 flex items-center justify-between">
              <span className={`grid h-9 w-9 place-items-center rounded-xl ${iconColorMap[col.color]}`}>
                {col.icon}
              </span>
              <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${tagColorMap[col.color]}`}>
                {col.tag}
              </span>
            </div>
            <h4 className="mb-3 font-bold">{col.title}</h4>
            <ul className="space-y-2">
              {col.points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-current opacity-60" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   PROFORMA VS INVOICE — Proforma Invoice page
───────────────────────────────────────────────────────────────────────────── */
function ProformaVsInvoiceWidget() {
  const rows = [
    { aspect: 'Purpose', proforma: 'Pre-shipment / advance payment intent', invoice: 'Formal demand for payment post-delivery' },
    { aspect: 'Legally binding', proforma: 'Not a legal demand (no obligation)', invoice: 'Legally binding payment obligation' },
    { aspect: 'GST / Tax', proforma: 'Not a tax invoice; no ITC available', invoice: 'Valid for GST Input Tax Credit' },
    { aspect: 'GSTR filing', proforma: 'Not reported in GSTR-1', invoice: 'Must be reported in GSTR-1' },
    { aspect: 'Best used for', proforma: 'Exports, advance payments, buyer approval', invoice: 'All completed sales of goods/services' },
  ];

  return (
    <section className="rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-50 to-purple-50 p-6 dark:border-violet-800/40 dark:from-violet-950/30 dark:to-purple-950/30">
      <div className="mb-5 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-violet-100 dark:bg-violet-900/50">
          <FileText className="h-5 w-5 text-violet-600 dark:text-violet-400" />
        </span>
        <div>
          <h3 className="font-semibold text-violet-900 dark:text-violet-100">
            Proforma Invoice vs Tax Invoice
          </h3>
          <p className="text-sm text-violet-700/70 dark:text-violet-300/70">
            Critical differences every business must know
          </p>
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl border border-violet-200 dark:border-violet-800/40">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-violet-100 dark:bg-violet-900/40">
              <th className="px-4 py-3 text-left font-semibold text-violet-900 dark:text-violet-100">Aspect</th>
              <th className="px-4 py-3 text-left font-semibold text-violet-700 dark:text-violet-300">Proforma Invoice</th>
              <th className="px-4 py-3 text-left font-semibold text-purple-700 dark:text-purple-300">Tax Invoice</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-violet-100 dark:divide-violet-800/40">
            {rows.map((r) => (
              <tr key={r.aspect} className="bg-white dark:bg-violet-950/20">
                <td className="px-4 py-3 font-medium text-violet-900 dark:text-violet-100">{r.aspect}</td>
                <td className="px-4 py-3 text-violet-700 dark:text-violet-300">{r.proforma}</td>
                <td className="px-4 py-3 text-purple-700 dark:text-purple-300">{r.invoice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex items-start gap-2 rounded-xl bg-violet-100/60 p-3 dark:bg-violet-900/30">
        <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-violet-600 dark:text-violet-400" />
        <p className="text-xs text-violet-700 dark:text-violet-300">
          <strong>Important:</strong> A proforma invoice cannot replace a GST tax invoice. Once goods
          are delivered, always raise a proper tax invoice for ITC compliance.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   PO WORKFLOW — Purchase Order page
───────────────────────────────────────────────────────────────────────────── */
function PoWorkflowWidget() {
  const steps = [
    { step: 1, label: 'Purchase Requisition', desc: 'Department raises internal need request', icon: <FileText className="h-4 w-4" /> },
    { step: 2, label: 'Vendor Quotation', desc: 'Vendor submits price quotation / bid', icon: <Receipt className="h-4 w-4" /> },
    { step: 3, label: 'PO Created & Approved', desc: 'Buyer creates PO; manager approves it', icon: <ShoppingCart className="h-4 w-4" /> },
    { step: 4, label: 'PO Sent to Vendor', desc: 'Signed PO emailed or shared with supplier', icon: <ArrowRight className="h-4 w-4" /> },
    { step: 5, label: 'Goods / Service Delivered', desc: 'Vendor dispatches with delivery challan', icon: <Truck className="h-4 w-4" /> },
    { step: 6, label: 'Invoice & Payment', desc: 'Vendor raises invoice; payment processed', icon: <CreditCard className="h-4 w-4" /> },
  ];

  return (
    <section className="rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 to-cyan-50 p-6 dark:border-sky-800/40 dark:from-sky-950/30 dark:to-cyan-950/30">
      <div className="mb-5 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-sky-100 dark:bg-sky-900/50">
          <ShoppingCart className="h-5 w-5 text-sky-600 dark:text-sky-400" />
        </span>
        <div>
          <h3 className="font-semibold text-sky-900 dark:text-sky-100">Purchase Order Workflow</h3>
          <p className="text-sm text-sky-700/70 dark:text-sky-300/70">
            How a PO flows from requisition to payment
          </p>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s, i) => (
          <div
            key={s.step}
            className="relative rounded-2xl border border-sky-200 bg-white p-4 dark:border-sky-800/40 dark:bg-sky-950/20"
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-sky-100 text-sky-600 dark:bg-sky-900/50 dark:text-sky-400">
                {s.icon}
              </span>
              <span className="text-xs font-bold text-sky-400 dark:text-sky-500">Step {s.step}</span>
            </div>
            <h4 className="font-semibold text-sky-900 dark:text-sky-100">{s.label}</h4>
            <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
            {i < steps.length - 1 && (
              <ArrowRight className="absolute -right-1.5 top-1/2 hidden h-3 w-3 -translate-y-1/2 text-sky-400 lg:block" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   DELIVERY CHALLAN CHECKLIST — Delivery Challan page (interactive)
───────────────────────────────────────────────────────────────────────────── */
function ChallanChecklistWidget() {
  const mandatory = [
    'Challan Number (unique, consecutive)',
    'Date of issue',
    'Consignor name, address & GSTIN',
    'Consignee name & delivery address',
    'Description of goods with quantity',
    'Transporter name & vehicle number',
    'LR / Docket number',
    'Purpose of transport (Supply / Job Work / Exhibition / Own Use)',
  ];
  const optional = [
    'E-Way Bill number (mandatory if value > ₹50,000)',
    'HSN/SAC code of goods',
    'Approximate value of goods',
    'Dispatch date & expected delivery date',
  ];
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (item: string) => setChecked((prev) => ({ ...prev, [item]: !prev[item] }));

  const total = mandatory.length + optional.length;
  const done = Object.values(checked).filter(Boolean).length;

  return (
    <section className="rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-blue-50 p-6 dark:border-indigo-800/40 dark:from-indigo-950/30 dark:to-blue-950/30">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-indigo-100 dark:bg-indigo-900/50">
            <Truck className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
          </span>
          <div>
            <h3 className="font-semibold text-indigo-900 dark:text-indigo-100">
              Delivery Challan Checklist
            </h3>
            <p className="text-sm text-indigo-700/70 dark:text-indigo-300/70">
              Ensure your challan is complete before dispatch
            </p>
          </div>
        </div>
        <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-bold text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300">
          {done}/{total}
        </span>
      </div>

      <div className="space-y-5">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-indigo-500 dark:text-indigo-400">
            Mandatory Fields
          </p>
          <div className="space-y-2">
            {mandatory.map((item) => (
              <button
                key={item}
                onClick={() => toggle(item)}
                className="flex w-full items-center gap-3 rounded-xl bg-white px-4 py-2.5 text-left text-sm transition-colors hover:bg-indigo-50 dark:bg-indigo-950/20 dark:hover:bg-indigo-950/40"
              >
                {checked[item] ? (
                  <CheckSquare className="h-4 w-4 flex-shrink-0 text-indigo-600 dark:text-indigo-400" />
                ) : (
                  <Square className="h-4 w-4 flex-shrink-0 text-indigo-300 dark:text-indigo-600" />
                )}
                <span className={checked[item] ? 'text-muted-foreground line-through' : ''}>
                  {item}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-indigo-400 dark:text-indigo-500">
            Situational / Optional
          </p>
          <div className="space-y-2">
            {optional.map((item) => (
              <button
                key={item}
                onClick={() => toggle(item)}
                className="flex w-full items-center gap-3 rounded-xl bg-white/60 px-4 py-2.5 text-left text-sm transition-colors hover:bg-indigo-50 dark:bg-indigo-950/10 dark:hover:bg-indigo-950/30"
              >
                {checked[item] ? (
                  <CheckSquare className="h-4 w-4 flex-shrink-0 text-indigo-400 dark:text-indigo-500" />
                ) : (
                  <Square className="h-4 w-4 flex-shrink-0 text-indigo-200 dark:text-indigo-700" />
                )}
                <span className={`text-muted-foreground ${checked[item] ? 'line-through' : ''}`}>
                  {item}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   PAYMENT MODES — Payment Receipt page
───────────────────────────────────────────────────────────────────────────── */
function PaymentModesWidget() {
  const modes = [
    {
      mode: 'UPI',
      icon: '📱',
      notes: 'Instant settlement. Quote UTR / UPI Ref No. on receipt. Popular for B2C payments under ₹1 lakh.',
      tip: 'Always screenshot the UPI success screen.',
    },
    {
      mode: 'NEFT / RTGS',
      icon: '🏦',
      notes: 'NEFT: up to 2 hours. RTGS: instant for ₹2 lakh+. Quote UTR number on receipt for both.',
      tip: 'RTGS is mandatory for amounts ≥ ₹2 lakh.',
    },
    {
      mode: 'Cash',
      icon: '💵',
      notes: 'Always issue a stamped receipt. Payments above ₹2 lakh in cash are restricted under Income Tax Act.',
      tip: 'Section 269ST: Never accept cash ≥ ₹2 lakh from one person.',
    },
    {
      mode: 'Cheque',
      icon: '📄',
      notes: 'Write "subject to realisation" on receipt. Confirm clearance before releasing goods/services.',
      tip: 'Add cheque number and bank name on the receipt.',
    },
  ];

  return (
    <section className="rounded-3xl border border-teal-200 bg-gradient-to-br from-teal-50 to-cyan-50 p-6 dark:border-teal-800/40 dark:from-teal-950/30 dark:to-cyan-950/30">
      <div className="mb-5 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-teal-100 dark:bg-teal-900/50">
          <CreditCard className="h-5 w-5 text-teal-600 dark:text-teal-400" />
        </span>
        <div>
          <h3 className="font-semibold text-teal-900 dark:text-teal-100">
            Payment Mode Guide for Receipts
          </h3>
          <p className="text-sm text-teal-700/70 dark:text-teal-300/70">
            What to record on your receipt for each payment method
          </p>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {modes.map((m) => (
          <div
            key={m.mode}
            className="rounded-2xl border border-teal-200 bg-white p-4 dark:border-teal-800/40 dark:bg-teal-950/20"
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xl">{m.icon}</span>
              <h4 className="font-bold text-teal-900 dark:text-teal-100">{m.mode}</h4>
            </div>
            <p className="text-sm text-muted-foreground">{m.notes}</p>
            <div className="mt-2 rounded-lg bg-teal-50 px-3 py-2 dark:bg-teal-900/30">
              <p className="text-xs font-medium text-teal-700 dark:text-teal-300">💡 {m.tip}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   CREDIT VS DEBIT NOTE — Credit Note page
───────────────────────────────────────────────────────────────────────────── */
function CreditVsDebitWidget() {
  const rows = [
    { aspect: 'Issued by', credit: 'Seller / Supplier', debit: 'Buyer / Purchaser' },
    {
      aspect: 'When used',
      credit: 'Goods returned, discount granted, invoice overstated',
      debit: 'Price increase, undercharged, purchase return to supplier',
    },
    { aspect: 'Effect on tax', credit: "Reduces supplier's tax liability", debit: "Increases buyer's ITC reversal or claim" },
    { aspect: 'GST section', credit: 'Section 34(1) CGST Act', debit: 'Section 34(3) CGST Act' },
    { aspect: 'Document prefix', credit: 'CN-XXXX', debit: 'DN-XXXX' },
  ];

  return (
    <section className="rounded-3xl border border-rose-200 bg-gradient-to-br from-rose-50 to-pink-50 p-6 dark:border-rose-800/40 dark:from-rose-950/30 dark:to-pink-950/30">
      <div className="mb-5 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-rose-100 dark:bg-rose-900/50">
          <RotateCcw className="h-5 w-5 text-rose-600 dark:text-rose-400" />
        </span>
        <div>
          <h3 className="font-semibold text-rose-900 dark:text-rose-100">Credit Note vs Debit Note</h3>
          <p className="text-sm text-rose-700/70 dark:text-rose-300/70">
            When to issue each and the GST implications
          </p>
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl border border-rose-200 dark:border-rose-800/40">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-rose-100 dark:bg-rose-900/40">
              <th className="px-4 py-3 text-left font-semibold text-rose-900 dark:text-rose-100">Aspect</th>
              <th className="px-4 py-3 text-left font-semibold text-rose-700 dark:text-rose-300">Credit Note</th>
              <th className="px-4 py-3 text-left font-semibold text-orange-700 dark:text-orange-300">Debit Note</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rose-100 dark:divide-rose-800/40">
            {rows.map((r) => (
              <tr key={r.aspect} className="bg-white dark:bg-rose-950/20">
                <td className="px-4 py-3 font-medium text-rose-900 dark:text-rose-100">{r.aspect}</td>
                <td className="px-4 py-3 text-rose-700 dark:text-rose-300">{r.credit}</td>
                <td className="px-4 py-3 text-orange-700 dark:text-orange-300">{r.debit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   DEBIT NOTE STEPS — Debit Note page
───────────────────────────────────────────────────────────────────────────── */
function DebitNoteStepsWidget() {
  const steps = [
    {
      step: 1,
      title: 'Identify the discrepancy',
      desc: 'Find the original invoice where the amount was undercharged, or the goods you are returning to the supplier.',
      icon: <AlertCircle className="h-4 w-4" />,
    },
    {
      step: 2,
      title: 'Reference the original invoice',
      desc: 'Note the original invoice number and date. The debit note must clearly reference the document it is correcting.',
      icon: <FileText className="h-4 w-4" />,
    },
    {
      step: 3,
      title: 'Calculate the differential',
      desc: 'Compute the additional amount owed, including the applicable GST (CGST+SGST or IGST) on the difference.',
      icon: <RefreshCw className="h-4 w-4" />,
    },
    {
      step: 4,
      title: 'Issue within the time limit',
      desc: 'A buyer-issued debit note for purchase return must be issued before September 30th of the next financial year.',
      icon: <CheckCircle2 className="h-4 w-4" />,
    },
    {
      step: 5,
      title: 'Report in GSTR-1 (if supplier)',
      desc: 'If you are the supplier raising a debit note, report it in Table 9B of your GSTR-1 filing for that month.',
      icon: <RotateCw className="h-4 w-4" />,
    },
  ];

  return (
    <section className="rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50 p-6 dark:border-orange-800/40 dark:from-orange-950/30 dark:to-amber-950/30">
      <div className="mb-5 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-orange-100 dark:bg-orange-900/50">
          <RotateCw className="h-5 w-5 text-orange-600 dark:text-orange-400" />
        </span>
        <div>
          <h3 className="font-semibold text-orange-900 dark:text-orange-100">
            How to Issue a Debit Note — 5 Steps
          </h3>
          <p className="text-sm text-orange-700/70 dark:text-orange-300/70">
            Step-by-step process with GST compliance tips
          </p>
        </div>
      </div>
      <div className="space-y-3">
        {steps.map((s) => (
          <div
            key={s.step}
            className="flex gap-4 rounded-2xl border border-orange-200 bg-white p-4 dark:border-orange-800/40 dark:bg-orange-950/20"
          >
            <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-400">
              {s.icon}
            </span>
            <div>
              <h4 className="font-semibold text-orange-900 dark:text-orange-100">
                <span className="mr-1.5 text-orange-400 dark:text-orange-600">{s.step}.</span>
                {s.title}
              </h4>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
