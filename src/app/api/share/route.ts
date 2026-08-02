import { NextResponse } from 'next/server';
import { MAX_SHARE_BYTES, RETENTION_DAYS, isQuotationLike, saveShare } from '@/lib/share-store';

// Filesystem access requires the Node.js runtime (not Edge).
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * POST /api/share
 * Body: a Quotation JSON object.
 * Returns: { id } — the client builds the public URL as `${origin}/q/${id}`.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  const serialized = JSON.stringify(body);
  if (serialized.length > MAX_SHARE_BYTES) {
    return NextResponse.json(
      { error: 'Quotation is too large to share. Try smaller images for the logo/signature/stamp.' },
      { status: 413 },
    );
  }

  if (!isQuotationLike(body)) {
    return NextResponse.json({ error: 'Body is not a valid quotation.' }, { status: 422 });
  }

  try {
    const { id, deleteKey, expiresAt } = await saveShare(body);
    // deleteKey is returned once and kept only by the creator's browser — it is
    // what lets them revoke the link before it expires.
    return NextResponse.json({ id, deleteKey, expiresAt, retentionDays: RETENTION_DAYS });
  } catch (err) {
    console.error('Failed to save share', err);
    return NextResponse.json(
      { error: 'We could not create the share link just now. Please try again in a moment.' },
      { status: 500 },
    );
  }
}
