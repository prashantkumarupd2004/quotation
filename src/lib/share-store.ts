import { randomBytes } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import type { Quotation } from '@/types/quotation';

/**
 * Server-side store for shared quotations. Each share is a JSON file on the
 * server's persistent filesystem (the app runs as a long-lived Node process via
 * PM2 — see DEPLOYMENT.md), so no database or external dependency is needed.
 *
 * Files live under `data/shares/` at the project root, which is gitignored so a
 * `git pull` redeploy never touches saved shares.
 */
export const SHARES_DIR = path.join(process.cwd(), 'data', 'shares');

/** Roughly 3 MB cap on the stored JSON (logos/signatures are base64 data URLs). */
export const MAX_SHARE_BYTES = 3 * 1024 * 1024;

const ID_RE = /^[A-Za-z0-9]{6,32}$/;

/** Base62 alphabet — URL-safe, no separators, avoids path-traversal characters. */
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

/** Generate an unguessable 12-char base62 id from crypto-random bytes. */
function generateId(): string {
  const bytes = randomBytes(12);
  let id = '';
  for (let i = 0; i < bytes.length; i++) {
    id += ALPHABET[bytes[i] % ALPHABET.length];
  }
  return id;
}

export function isValidShareId(id: string): boolean {
  return ID_RE.test(id);
}

/** Minimal shape check so we don't persist arbitrary junk. */
export function isQuotationLike(value: unknown): value is Quotation {
  if (!value || typeof value !== 'object') return false;
  const q = value as Record<string, unknown>;
  return (
    typeof q.meta === 'object' &&
    q.meta !== null &&
    Array.isArray(q.items) &&
    typeof q.company === 'object' &&
    typeof q.client === 'object' &&
    typeof q.totals === 'object'
  );
}

/** Persist a quotation and return its share id. */
export async function saveShare(quotation: Quotation): Promise<string> {
  await mkdir(SHARES_DIR, { recursive: true });
  const id = generateId();
  const file = path.join(SHARES_DIR, `${id}.json`);
  await writeFile(file, JSON.stringify(quotation), 'utf8');
  return id;
}

/** Read a shared quotation by id, or null if it doesn't exist / id is invalid. */
export async function readShare(id: string): Promise<Quotation | null> {
  if (!isValidShareId(id)) return null;
  const file = path.join(SHARES_DIR, `${id}.json`);
  try {
    const raw = await readFile(file, 'utf8');
    const parsed = JSON.parse(raw);
    return isQuotationLike(parsed) ? parsed : null;
  } catch {
    return null;
  }
}
