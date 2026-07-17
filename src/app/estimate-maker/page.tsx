import type { Metadata } from 'next';
import { ToolPage } from '@/components/document/tool-page';
import { buildMetadata } from '@/lib/seo';
import { estimateContent } from '@/data/tools/estimate';

export const metadata: Metadata = buildMetadata({
  title: estimateContent.seo.title,
  description: estimateContent.seo.description,
  path: '/estimate-maker',
  keywords: estimateContent.seo.keywords,
});

export default function Page() {
  return <ToolPage content={estimateContent} />;
}
