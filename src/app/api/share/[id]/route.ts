import { NextResponse } from 'next/server';
import { readShare } from '@/lib/share-store';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** GET /api/share/[id] — return the stored quotation JSON, or 404. */
export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const quotation = await readShare(id);
  if (!quotation) {
    return NextResponse.json({ error: 'Not found.' }, { status: 404 });
  }
  return NextResponse.json(quotation);
}
