/**
 * Replace smart/curly quotes inside TypeScript single-quoted string literals
 * with their escaped equivalents so the files parse correctly.
 */
import fs from 'node:fs';

const files = [
  'src/data/tools/invoice.ts',
  'src/data/tools/gst-invoice.ts',
  'src/data/tools/estimate.ts',
  'src/data/tools/proforma-invoice.ts',
  'src/data/tools/purchase-order.ts',
  'src/data/tools/delivery-challan.ts',
  'src/data/tools/payment-receipt.ts',
  'src/data/tools/credit-note.ts',
  'src/data/tools/debit-note.ts',
];

for (const file of files) {
  let src = fs.readFileSync(file, 'utf8');
  const before = src;

  // Replace curly/smart apostrophes that would terminate single-quoted strings
  src = src.replace(/’/g, "\\'");   // right single quotation mark → \'
  src = src.replace(/‘/g, "\\'");   // left single quotation mark → \'

  // Em-dashes inside strings: replace with ASCII " — "
  // (the em-dash itself is valid UTF-8 but keep it; only apostrophes break the parser)

  if (src !== before) {
    fs.writeFileSync(file, src);
    const count = (before.match(/’|‘/g) || []).length;
    console.log(`fixed ${count} curly quote(s): ${file}`);
  } else {
    console.log(`clean: ${file}`);
  }
}
