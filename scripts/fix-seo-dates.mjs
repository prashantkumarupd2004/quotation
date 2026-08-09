import fs from 'node:fs';
import path from 'node:path';

const dir = 'src/data/tools';
const skip = new Set(['types.ts', 'themes.ts']);

for (const file of fs.readdirSync(dir)) {
  if (!file.endsWith('.ts') || skip.has(file)) continue;
  const p = path.join(dir, file);
  let src = fs.readFileSync(p, 'utf8');

  // Fix: "...description string.',    published:" → "...',\n    published:"
  const fixed = src.replace(/',(\s{2,})published:/g, "',\n    published:");

  if (fixed !== src) {
    fs.writeFileSync(p, fixed);
    console.log('fixed', file);
  } else {
    console.log('ok   ', file);
  }
}
