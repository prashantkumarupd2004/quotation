import type { Metadata } from 'next';
import { ToolPage } from '@/components/document/tool-page';
import { buildMetadata } from '@/lib/seo';
import { invoiceContent } from '@/data/tools/invoice';

export const metadata: Metadata = buildMetadata({
  title: invoiceContent.seo.title,
  description: invoiceContent.seo.description,
  path: '/invoice-maker',
  keywords: invoiceContent.seo.keywords,
});

export default function InvoiceMakerPage() {
  return <ToolPage content={invoiceContent} />;
}
