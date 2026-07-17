import type { Metadata } from 'next';
import { ToolPage } from '@/components/document/tool-page';
import { buildMetadata } from '@/lib/seo';
import { purchaseOrderContent } from '@/data/tools/purchase-order';

export const metadata: Metadata = buildMetadata({
  title: purchaseOrderContent.seo.title,
  description: purchaseOrderContent.seo.description,
  path: '/purchase-order-generator',
  keywords: purchaseOrderContent.seo.keywords,
});

export default function Page() {
  return <ToolPage content={purchaseOrderContent} />;
}
