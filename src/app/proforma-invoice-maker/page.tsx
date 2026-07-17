import type { Metadata } from 'next';
import { ToolPage } from '@/components/document/tool-page';
import { buildMetadata } from '@/lib/seo';
import { proformaInvoiceContent } from '@/data/tools/proforma-invoice';

export const metadata: Metadata = buildMetadata({
  title: proformaInvoiceContent.seo.title,
  description: proformaInvoiceContent.seo.description,
  path: '/proforma-invoice-maker',
  keywords: proformaInvoiceContent.seo.keywords,
});

export default function Page() {
  return <ToolPage content={proformaInvoiceContent} />;
}
