import { NextResponse } from 'next/server';
import { deleteShare, readShare } from '@/lib/share-store';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** GET /api/share/[id] — return the stored quotation JSON, or 404. */
export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const quotation = await readShare(id);
  if (!quotation) {
    return NextResponse.json(
      { error: 'This share link has expired or was deleted by its owner.' },
      { status: 404 },
    );
  }
  return NextResponse.json(quotation);
}

/**
 * DELETE /api/share/[id]?key=… — revoke a share link early.
 *
 * The key is the `deleteKey` handed to the creator when the link was made; it is
 * stored only in that person's browser. Without it a link holder cannot delete
 * someone else's document.
 */
export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const key = new URL(request.url).searchParams.get('key') ?? '';
  if (!key) {
    return NextResponse.json({ error: 'A delete key is required.' }, { status: 400 });
  }

  const result = await deleteShare(id, key);
  if (result === 'not-found') {
    return NextResponse.json({ error: 'That share link no longer exists.' }, { status: 404 });
  }
  if (result === 'forbidden') {
    return NextResponse.json(
      { error: 'That delete key does not match this share link.' },
      { status: 403 },
    );
  }
  return NextResponse.json({ deleted: true });
}
