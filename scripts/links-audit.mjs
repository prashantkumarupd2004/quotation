/**
 * Internal link graph audit.
 *
 *   node --experimental-strip-types scripts/links-audit.mjs
 *
 * Reports orphaned posts and the inbound-link distribution. Run it after adding
 * posts — a new post lands with zero inbound links until the balancer picks it
 * up, and this is how you confirm it did.
 */
import { register } from 'node:module';
import { pathToFileURL } from 'node:url';

// Resolve the `@/*` alias and TypeScript's extensionless imports (see the hook).
register('./ts-resolve-hook.mjs', pathToFileURL(import.meta.filename));

const { linkGraphStats } = await import('../src/lib/internal-links.ts');

const stats = linkGraphStats();

console.log(`posts:    ${stats.posts}`);
console.log(`inbound:  min ${stats.min} / avg ${stats.average} / max ${stats.max}`);

if (stats.orphans.length) {
  console.error(`\nFAIL — ${stats.orphans.length} orphaned post(s) with no inbound links:`);
  for (const slug of stats.orphans) console.error(`  - ${slug}`);
  process.exit(1);
}

console.log('\nOK — every post has at least one inbound internal link.');
