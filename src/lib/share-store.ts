import { randomBytes } from 'node:crypto';
import { mkdir, readFile, readdir, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';
import type { Quotation } from '@/types/quotation';
import { siteConfig } from './site';

/**
 * Server-side store for shared quotations. Each share is a JSON file on the
 * server's persistent filesystem (the app runs as a long-lived Node process via
 * PM2 — see DEPLOYMENT.md), so no database or external dependency is needed.
 *
 * Files live under `data/shares/` at the project root, which is gitignored so a
 * `git pull` redeploy never touches saved shares.
 *
 * Retention: a share is a copy of real customer data (client names, amounts,
 * logos), so it is NOT kept forever. Every record carries a creation timestamp
 * and a delete key; records older than `siteConfig.shareRetentionDays` are
 * treated as expired on read and swept from disk. This is what the Privacy
 * Policy promises, and the two must stay in sync.
 */
export const SHARES_DIR = path.join(process.cwd(), 'data', 'shares');

/** Roughly 3 MB cap on the stored JSON (logos/signatures are base64 data URLs). */
export const MAX_SHARE_BYTES = 3 * 1024 * 1024;

export const RETENTION_DAYS = siteConfig.shareRetentionDays;
const RETENTION_MS = RETENTION_DAYS * 24 * 60 * 60 * 1000;

const ID_RE = /^[A-Za-z0-9]{6,32}$/;

/** Base62 alphabet — URL-safe, no separators, avoids path-traversal characters. */
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

/** On-disk envelope. Older records predate this wrapper and are read as legacy. */
interface ShareRecord {
  /** Epoch ms the share was created. */
  createdAt: number;
  /** Secret required to delete the share early. Never sent to a viewer. */
  deleteKey: string;
  quotation: Quotation;
}

/** Generate an unguessable base62 token from crypto-random bytes. */
function randomToken(length: number): string {
  const bytes = randomBytes(length);
  let out = '';
  for (let i = 0; i < bytes.length; i++) out += ALPHABET[bytes[i] % ALPHABET.length];
  return out;
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

function fileFor(id: string): string {
  return path.join(SHARES_DIR, `${id}.json`);
}

/** Persist a quotation. Returns the public id and the private delete key. */
export async function saveShare(
  quotation: Quotation,
): Promise<{ id: string; deleteKey: string; expiresAt: number }> {
  await mkdir(SHARES_DIR, { recursive: true });
  const id = randomToken(12);
  const deleteKey = randomToken(24);
  const createdAt = Date.now();
  const record: ShareRecord = { createdAt, deleteKey, quotation };
  await writeFile(fileFor(id), JSON.stringify(record), 'utf8');
  // Opportunistic sweep — keeps expired data off disk without needing a cron job.
  void sweepExpired();
  return { id, deleteKey, expiresAt: createdAt + RETENTION_MS };
}

/** Parse either the current envelope or a legacy bare-quotation file. */
function parseRecord(raw: string): ShareRecord | null {
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return null;
  }
  if (parsed && typeof parsed === 'object' && 'quotation' in parsed) {
    const rec = parsed as Partial<ShareRecord>;
    if (!isQuotationLike(rec.quotation)) return null;
    return {
      createdAt: typeof rec.createdAt === 'number' ? rec.createdAt : 0,
      deleteKey: typeof rec.deleteKey === 'string' ? rec.deleteKey : '',
      quotation: rec.quotation,
    };
  }
  // Legacy file written before retention existed: treat it as created now so an
  // already-shared link keeps working for one more retention window instead of
  // vanishing the moment this deploys.
  if (isQuotationLike(parsed)) {
    return { createdAt: Date.now(), deleteKey: '', quotation: parsed };
  }
  return null;
}

function isExpired(record: ShareRecord): boolean {
  return Date.now() - record.createdAt > RETENTION_MS;
}

/** Read a shared quotation by id, or null if missing, invalid or expired. */
export async function readShare(id: string): Promise<Quotation | null> {
  if (!isValidShareId(id)) return null;
  try {
    const record = parseRecord(await readFile(fileFor(id), 'utf8'));
    if (!record) return null;
    if (isExpired(record)) {
      await unlink(fileFor(id)).catch(() => undefined);
      return null;
    }
    return record.quotation;
  } catch {
    return null;
  }
}

/**
 * Delete a share. Requires the delete key issued when it was created, so a
 * random visitor holding the view link cannot remove someone else's document.
 */
export async function deleteShare(
  id: string,
  deleteKey: string,
): Promise<'deleted' | 'not-found' | 'forbidden'> {
  if (!isValidShareId(id)) return 'not-found';
  let record: ShareRecord | null;
  try {
    record = parseRecord(await readFile(fileFor(id), 'utf8'));
  } catch {
    return 'not-found';
  }
  if (!record) return 'not-found';
  if (!record.deleteKey || record.deleteKey !== deleteKey) return 'forbidden';
  await unlink(fileFor(id)).catch(() => undefined);
  return 'deleted';
}

/** Remove every share past its retention window. Safe to call concurrently. */
export async function sweepExpired(): Promise<number> {
  let removed = 0;
  try {
    const names = await readdir(SHARES_DIR);
    for (const name of names) {
      if (!name.endsWith('.json')) continue;
      const file = path.join(SHARES_DIR, name);
      try {
        const record = parseRecord(await readFile(file, 'utf8'));
        if (!record || isExpired(record)) {
          await unlink(file).catch(() => undefined);
          removed++;
        }
      } catch {
        /* unreadable file — leave it for the next sweep */
      }
    }
  } catch {
    /* directory may not exist yet */
  }
  return removed;
}
