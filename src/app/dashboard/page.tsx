import type { Metadata } from 'next';
import { DashboardShell } from '@/components/dashboard/dashboard-shell';
import { buildMetadata } from '@/lib/seo';

// Personal document library — private per browser, not for search indexes.
export const metadata: Metadata = buildMetadata({
  title: 'My Documents — Dashboard',
  description: 'Your saved quotations, invoices and business documents — edit, duplicate, download and share.',
  path: '/dashboard',
  noIndex: true,
});

export default function DashboardPage() {
  return <DashboardShell />;
}
