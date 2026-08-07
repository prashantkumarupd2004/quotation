/**
 * ESM resolver hook for the audit scripts.
 *
 * Node's ESM resolver is stricter than TypeScript's: it does not understand the
 * `@/*` path alias from tsconfig, and it refuses both extensionless specifiers
 * (`./group-1`) and directory imports (`@/data/blog`). This hook fills those
 * three gaps so app modules can be imported by scripts as-is, without a build
 * step and without the scripts duplicating any application logic.
 */
import { existsSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = pathToFileURL(process.cwd() + '/').href;

/** Append `.ts` or `/index.ts` when the specifier points at neither. */
function addExtension(url) {
  if (/\.[cm]?[jt]s$/.test(url)) return url;
  if (existsSync(fileURLToPath(url + '.ts'))) return url + '.ts';
  if (existsSync(fileURLToPath(url + '/index.ts'))) return url + '/index.ts';
  return url;
}

export async function resolve(specifier, context, next) {
  if (specifier.startsWith('@/')) {
    return next(addExtension(new URL('./src/' + specifier.slice(2), ROOT).href), context);
  }
  if (specifier.startsWith('.') && context.parentURL) {
    return next(addExtension(new URL(specifier, context.parentURL).href), context);
  }
  return next(specifier, context);
}
