import Link from 'next/link';
import { ArrowRight, FileQuestion } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <span className="grid h-20 w-20 place-items-center rounded-3xl bg-primary/10 text-primary">
        <FileQuestion className="h-10 w-10" />
      </span>
      <h1 className="mt-6 font-display text-4xl font-extrabold">Page not found</h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        The page you are looking for doesn’t exist or may have moved. Let’s get you back on track.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn-secondary">
          Go home
        </Link>
        <Link href="/create" className="btn-primary">
          Create a quotation <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
