import type { Metadata } from 'next';
import { ToolPage } from '@/components/document/tool-page';
import { buildMetadata } from '@/lib/seo';
import { gstInvoiceContent } from '@/data/tools/gst-invoice';

export const metadata: Metadata = buildMetadata({
  title: gstInvoiceContent.seo.title,
  description: gstInvoiceContent.seo.description,
  path: '/gst-invoice-maker',
  keywords: gstInvoiceContent.seo.keywords,
});

export default function Page() {
  return <ToolPage content={gstInvoiceContent} />;
}
