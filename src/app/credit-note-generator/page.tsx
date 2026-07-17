import type { Metadata } from 'next';
import { ToolPage } from '@/components/document/tool-page';
import { buildMetadata } from '@/lib/seo';
import { creditNoteContent } from '@/data/tools/credit-note';

export const metadata: Metadata = buildMetadata({
  title: creditNoteContent.seo.title,
  description: creditNoteContent.seo.description,
  path: '/credit-note-generator',
  keywords: creditNoteContent.seo.keywords,
});

export default function Page() {
  return <ToolPage content={creditNoteContent} />;
}
