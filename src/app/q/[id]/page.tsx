import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { readShare } from '@/lib/share-store';
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
    return { title: 'Quotation not found', robots: { index: false, follow: false } };
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
  const quotation = await readShare(id);
  if (!quotation) notFound();
  return <SharedView quotation={quotation} />;
}
