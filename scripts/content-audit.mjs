import fs from 'node:fs';
import path from 'node:path';

const dir = 'src/data/tools';
const skip = new Set(['types.ts', 'themes.ts']);
const strRe = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*`/g;

for (const f of fs.readdirSync(dir)) {
  if (!f.endsWith('.ts') || skip.has(f)) continue;
  const src = fs.readFileSync(path.join(dir, f), 'utf8');
  const strs = (src.match(strRe) || []).map((s) => s.slice(1, -1));
  const words = strs
    .join(' ')
    .split(/\s+/)
    .filter((w) => /[a-zA-Z]{2,}/.test(w)).length;
  const faqs = (src.match(/^\s+q: /gm) || []).length;
  console.log(f.padEnd(24), String(words).padStart(5), 'words', String(faqs).padStart(3), 'faqs');
}
