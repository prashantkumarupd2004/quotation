import type { Metadata } from 'next';
import Link from 'next/link';
import { WifiOff } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Offline',
  description: 'You appear to be offline.',
  path: '/offline',
  noIndex: true,
});

export default function OfflinePage() {
  return (
    <div className="container flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <span className="grid h-20 w-20 place-items-center rounded-3xl bg-primary/10 text-primary">
        <WifiOff className="h-10 w-10" />
      </span>
      <h1 className="mt-6 font-display text-3xl font-extrabold">You’re offline</h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        It looks like you’ve lost your connection. The quotation builder works offline once loaded —
        head back and your saved work will still be there.
      </p>
      <Link href="/create" className="btn-primary mt-8">
        Open the builder
      </Link>
    </div>
  );
}
