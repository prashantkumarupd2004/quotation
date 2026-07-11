import { NextResponse } from 'next/server';
import { MAX_SHARE_BYTES, isQuotationLike, saveShare } from '@/lib/share-store';

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
    const id = await saveShare(body);
    return NextResponse.json({ id });
  } catch (err) {
    console.error('Failed to save share', err);
    return NextResponse.json({ error: 'Could not create the share link.' }, { status: 500 });
  }
}
