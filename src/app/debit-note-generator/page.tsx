import type { Metadata } from 'next';
import { ToolPage } from '@/components/document/tool-page';
import { buildMetadata } from '@/lib/seo';
import { debitNoteContent } from '@/data/tools/debit-note';

export const metadata: Metadata = buildMetadata({
  title: debitNoteContent.seo.title,
  description: debitNoteContent.seo.description,
  path: '/debit-note-generator',
  keywords: debitNoteContent.seo.keywords,
});

export default function Page() {
  return <ToolPage content={debitNoteContent} />;
}
