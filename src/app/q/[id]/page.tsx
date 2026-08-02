import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Clock, Link as LinkIcon } from 'lucide-react';
import { isValidShareId, readShare, RETENTION_DAYS } from '@/lib/share-store';
import { siteConfig } from '@/lib/site';
import { SharedView } from '@/components/quotation/shared-view';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const quotation = await readShare(id);
  if (!quotation) {
    return { title: 'This share link has expired', robots: { index: false, follow: false } };
  }
  const company = quotation.company.name || 'A business';
  const title = `Quotation ${quotation.meta.number} — ${company}`;
  const description = `View the quotation ${quotation.meta.number} from ${company}, shared via ${siteConfig.name}.`;
  return {
    title,
    description,
    // Shared quotations are private links — keep them out of search results.
    robots: { index: false, follow: false },
    openGraph: { title, description, type: 'website' },
  };
}

export default async function SharedQuotationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // A malformed id was never a real link — that is a genuine 404.
  if (!isValidShareId(id)) notFound();

  const quotation = await readShare(id);

  /*
   * A well-formed id that no longer resolves is the common case: the link
   * expired, or the sender deleted it. The generic "page not found" screen left
   * the recipient assuming the link was broken or the sender untrustworthy, so
   * this explains what actually happened and what to do next.
   */
  if (!quotation) {
    return (
      <div className="container flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
        <span className="grid h-20 w-20 place-items-center rounded-3xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
          <Clock className="h-10 w-10" />
        </span>
        <h1 className="mt-6 font-display text-3xl font-extrabold sm:text-4xl">
          This share link is no longer available
        </h1>
        <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
          Shared documents are stored for {RETENTION_DAYS} days and then deleted automatically. This
          one has either passed that point or was deleted by the person who sent it.
        </p>

        <div className="mt-8 w-full max-w-md rounded-2xl border border-border bg-muted/30 p-5 text-left text-sm">
          <p className="flex items-center gap-2 font-semibold">
            <LinkIcon className="h-4 w-4 text-primary" /> What to do next
          </p>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li>
              <strong className="text-foreground">If you were sent this link:</strong> ask the sender
              to share it again, or to email you the PDF directly.
            </li>
            <li>
              <strong className="text-foreground">If you created it:</strong> open your document in{' '}
              <Link href="/dashboard" className="text-primary hover:underline">
                My documents
              </Link>{' '}
              — it is still saved in this browser if you built it here — and generate a fresh link.
            </li>
          </ul>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/dashboard" className="btn-secondary">
            My documents
          </Link>
          <Link href="/create" className="btn-primary">
            Create a quotation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          Retention is explained in our{' '}
          <Link href="/privacy" className="text-primary hover:underline">
            privacy policy
          </Link>
          .
        </p>
      </div>
    );
  }

  return <SharedView quotation={quotation} />;
}
