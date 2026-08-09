import fs from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const part1 = fs.readFileSync('scripts/add-tool-content.mjs', 'utf8');
if (!part1.includes('function apply')) { console.error('part1 helpers not found'); process.exit(1); }

// Re-use helpers from part1 by re-declaring them here
function faqItem(q, a) {
  return `    {\n      q: '${q}',\n      a: '${a}',\n    },`;
}
function industryItem(name, icon, text, detail) {
  return `      {\n        name: '${name}',\n        icon: '${icon}',\n        text: '${text}',\n        detail: '${detail}',\n      },`;
}
function refItem(label, url, note) {
  return `      { label: '${label}', url: '${url}', note: '${note}' },`;
}
function buildIndustries(heading, intro, items) {
  const rows = items.map(i => industryItem(i.name, i.icon, i.text, i.detail)).join('\n');
  return `  industries: {\n    heading: '${heading}',\n    intro: '${intro}',\n    items: [\n${rows}\n    ],\n  },`;
}
function buildReferences(heading, intro, items) {
  const rows = items.map(i => refItem(i.label, i.url, i.note)).join('\n');
  return `  references: {\n    heading: '${heading}',\n    intro: '${intro}',\n    items: [\n${rows}\n    ],\n  },`;
}
function apply(file, newFaqs, industries, references) {
  let src = fs.readFileSync(file, 'utf8');
  const hasCRLF = src.includes('\r\n');
  if (hasCRLF) src = src.replace(/\r\n/g, '\n');
  if (src.includes('industries: {')) { console.log('skip (already patched):', file); return; }
  const faqAnchor = '\n  ],\n  relatedHeading';
  const faqIdx = src.indexOf(faqAnchor);
  if (faqIdx === -1) { console.error('FAQ anchor not found:', file); return; }
  const faqBlock = '\n' + newFaqs.map(f => faqItem(f.q, f.a)).join('\n');
  src = src.slice(0, faqIdx) + faqBlock + src.slice(faqIdx);
  const closeIdx = src.lastIndexOf('\n};');
  if (closeIdx === -1) { console.error('Closing }; not found:', file); return; }
  const indBlock = '\n' + buildIndustries(industries.heading, industries.intro, industries.items);
  const refBlock = '\n' + buildReferences(references.heading, references.intro, references.items);
  src = src.slice(0, closeIdx) + indBlock + '\n' + refBlock + src.slice(closeIdx);
  if (hasCRLF) src = src.replace(/\n/g, '\r\n');
  fs.writeFileSync(file, src);
  console.log('updated:', file);
}
