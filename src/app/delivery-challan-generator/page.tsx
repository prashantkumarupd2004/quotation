import type { Metadata } from 'next';
import { ToolPage } from '@/components/document/tool-page';
import { buildMetadata } from '@/lib/seo';
import { deliveryChallanContent } from '@/data/tools/delivery-challan';

export const metadata: Metadata = buildMetadata({
  title: deliveryChallanContent.seo.title,
  description: deliveryChallanContent.seo.description,
  path: '/delivery-challan-generator',
  keywords: deliveryChallanContent.seo.keywords,
});

export default function Page() {
  return <ToolPage content={deliveryChallanContent} />;
}
