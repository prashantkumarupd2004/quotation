import fs from 'node:fs';
import path from 'node:path';

const dir = 'src/data/tools';

// Spread the three industry shapes across the nine tools so neighbouring
// documents never present their sector guidance in the same form.
const variants = {
  'invoice.ts': 'tiles',
  'gst-invoice.ts': 'rows',
  'estimate.ts': 'ledger',
  'proforma-invoice.ts': 'tiles',
  'purchase-order.ts': 'rows',
  'delivery-challan.ts': 'ledger',
  'payment-receipt.ts': 'tiles',
  'credit-note.ts': 'rows',
  'debit-note.ts': 'ledger',
};

const PUBLISHED = '2026-02-18';
const UPDATED = '2026-08-07';

for (const [file, variant] of Object.entries(variants)) {
  const p = path.join(dir, file);
  let src = fs.readFileSync(p, 'utf8');

  if (!/industries: '/.test(src)) {
    src = src.replace(/(\n(\s+)example: '(?:table|paper|strip)',\n)/, `$1$2industries: '${variant}',\n`);
  }

  if (!/published: '/.test(src)) {
    src = src.replace(/(\n(\s+)keywords: \[)/, `$2published: '${PUBLISHED}',\n$2updated: '${UPDATED}',$1`);
  }

  fs.writeFileSync(p, src);
  console.log('patched', file, '->', variant);
}
