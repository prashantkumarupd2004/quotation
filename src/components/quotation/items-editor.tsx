'use client';

import { Copy, GripVertical, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { useQuotationStore } from '@/store/quotation-store';
import { lineItemAmount } from '@/lib/calculations';
import { formatMoney } from '@/lib/currency';
import { getCategory } from '@/lib/categories';
import { toNumber } from '@/lib/utils';

export function ItemsEditor() {
  const items = useQuotationStore((s) => s.quotation.items);
  const currency = useQuotationStore((s) => s.quotation.meta.currency);
  const taxMode = useQuotationStore((s) => s.quotation.totals.taxMode);
  const category = useQuotationStore((s) => s.quotation.meta.category);
  const { addItem, updateItem, removeItem, duplicateItem, moveItem } = useQuotationStore();
  const [dragIndex, setDragIndex] = useState<number | null>(null);

  const cfg = getCategory(category);
  const { itemLabels: labels, units } = cfg;

  return (
    <div>
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full min-w-[640px] text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/40 text-left text-xs uppercase tracking-wide text-muted-foreground">
              <th className="w-8 px-2 py-2.5" />
              <th className="px-2 py-2.5">{labels.description}</th>
              <th className="w-20 px-2 py-2.5">{labels.code}</th>
              <th className="w-16 px-2 py-2.5">Qty</th>
              <th className="w-20 px-2 py-2.5">Unit</th>
              <th className="w-24 px-2 py-2.5">{labels.rate}</th>
              {taxMode !== 'none' && taxMode !== 'flat' ? <th className="w-16 px-2 py-2.5">Tax%</th> : null}
              <th className="w-24 px-2 py-2.5 text-right">Amount</th>
              <th className="w-16 px-2 py-2.5" />
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr
                key={item.id}
                draggable
                onDragStart={() => setDragIndex(index)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => {
                  if (dragIndex !== null) moveItem(dragIndex, index);
                  setDragIndex(null);
                }}
                className="border-b border-border/60 last:border-0 hover:bg-muted/20"
              >
                <td className="cursor-grab px-2 py-2 text-muted-foreground active:cursor-grabbing">
                  <GripVertical className="h-4 w-4" />
                </td>
                <td className="px-2 py-2">
                  <input
                    className="field-input py-1.5"
                    placeholder="Item / service description"
                    value={item.description}
                    onChange={(e) => updateItem(item.id, { description: e.target.value })}
                  />
                </td>
                <td className="px-2 py-2">
                  <input
                    className="field-input py-1.5"
                    placeholder="—"
                    value={item.hsn}
                    onChange={(e) => updateItem(item.id, { hsn: e.target.value })}
                  />
                </td>
                <td className="px-2 py-2">
                  <input
                    type="number"
                    min={0}
                    className="field-input py-1.5"
                    value={item.quantity}
                    onChange={(e) => updateItem(item.id, { quantity: toNumber(e.target.value) })}
                  />
                </td>
                <td className="px-2 py-2">
                  <select
                    className="field-input py-1.5"
                    value={item.unit}
                    onChange={(e) => updateItem(item.id, { unit: e.target.value })}
                  >
                    {units.map((u) => (
                      <option key={u} value={u}>
                        {u}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-2 py-2">
                  <input
                    type="number"
                    min={0}
                    className="field-input py-1.5"
                    value={item.rate}
                    onChange={(e) => updateItem(item.id, { rate: toNumber(e.target.value) })}
                  />
                </td>
                {taxMode !== 'none' && taxMode !== 'flat' ? (
                  <td className="px-2 py-2">
                    <select
                      className="field-input py-1.5"
                      value={item.taxRate}
                      onChange={(e) => updateItem(item.id, { taxRate: toNumber(e.target.value) })}
                    >
                      {[0, 5, 12, 18, 28].map((r) => (
                        <option key={r} value={r}>
                          {r}%
                        </option>
                      ))}
                    </select>
                  </td>
                ) : null}
                <td className="px-2 py-2 text-right font-semibold tabular-nums">
                  {formatMoney(lineItemAmount(item), currency)}
                </td>
                <td className="px-2 py-2">
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      aria-label="Duplicate item"
                      onClick={() => duplicateItem(item.id)}
                      className="rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-primary"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      aria-label="Delete item"
                      onClick={() => removeItem(item.id)}
                      disabled={items.length === 1}
                      className="rounded-md p-1.5 text-muted-foreground hover:bg-destructive/10 hover:text-destructive disabled:opacity-40"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button type="button" onClick={addItem} className="btn-secondary mt-4">
        <Plus className="h-4 w-4" /> Add Item
      </button>
    </div>
  );
}
