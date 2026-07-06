import { Suspense } from 'react';
import type { Metadata } from 'next';
import { BuilderShell } from '@/components/quotation/builder-shell';
import { JsonLd } from '@/components/json-ld';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, howToSchema } from '@/lib/schema';

export const metadata: Metadata = buildMetadata({
  title: 'Free Quotation Maker — Create & Download PDF',
  description:
    'Create a professional GST quotation online in 30 seconds. Add your logo, items and tax, preview live, and download a clean PDF or PNG. Free, no signup.',
  path: '/create',
  keywords: ['create quotation online', 'free quotation generator', 'quotation pdf download', 'gst quotation maker'],
});

const steps = [
  'Enter your company and client details.',
  'Add line items with quantity, rate and GST.',
  'Choose a template and customise the accent colour.',
  'Download the finished quotation as PDF or PNG.',
];

export default function CreatePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Create Quotation', path: '/create' },
          ]),
          howToSchema('How to create a quotation online', steps),
        ]}
      />
      <Suspense fallback={<div className="container py-20 text-center text-muted-foreground">Loading builder…</div>}>
        <BuilderShell />
      </Suspense>
    </>
  );
}
