import type { Metadata } from 'next';
import { ToolPage } from '@/components/document/tool-page';
import { buildMetadata } from '@/lib/seo';
import { paymentReceiptContent } from '@/data/tools/payment-receipt';

export const metadata: Metadata = buildMetadata({
  title: paymentReceiptContent.seo.title,
  description: paymentReceiptContent.seo.description,
  path: '/payment-receipt-generator',
  keywords: paymentReceiptContent.seo.keywords,
});

export default function Page() {
  return <ToolPage content={paymentReceiptContent} />;
}
