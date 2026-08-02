import Link from 'next/link';
import { ArrowRight, FileQuestion } from 'lucide-react';
import { Icon } from '@/components/ui/icon';
import { DOCUMENT_TYPE_LIST } from '@/lib/document-types';

/**
 * A 404 that recovers the visit rather than ending it. Most people landing here
 * arrived from a stale link or a typo and still want a document tool, so the
 * page offers the popular destinations instead of just a "go home" button.
 */
export default function NotFound() {
  const popular = DOCUMENT_TYPE_LIST.slice(0, 6);

  return (
    <div className="container flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <span className="grid h-20 w-20 place-items-center rounded-3xl bg-primary/10 text-primary">
        <FileQuestion className="h-10 w-10" />
      </span>
      <h1 className="mt-6 font-display text-4xl font-extrabold">Page not found</h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        This page doesn&rsquo;t exist or may have moved. If you were heading for one of the document
        tools, they&rsquo;re all below.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn-secondary">
          Go home
        </Link>
        <Link href="/create" className="btn-primary">
          Create a quotation <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-14 w-full max-w-3xl">
        <h2 className="text-sm font-semibold text-muted-foreground">Popular tools</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {popular.map((tool) => (
            <Link
              key={tool.id}
              href={tool.path}
              className="glass-card group flex items-center gap-3 p-4 text-left transition-colors hover:border-primary/40"
            >
              <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <Icon name={tool.icon} className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold">{tool.label}</span>
            </Link>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Or browse{' '}
          <Link href="/tools" className="font-medium text-primary hover:underline">
            all tools
          </Link>
          ,{' '}
          <Link href="/templates" className="font-medium text-primary hover:underline">
            templates
          </Link>
          ,{' '}
          <Link href="/industries" className="font-medium text-primary hover:underline">
            industry guides
          </Link>{' '}
          or the{' '}
          <Link href="/blog" className="font-medium text-primary hover:underline">
            written guides
          </Link>
          . Still stuck?{' '}
          <Link href="/contact" className="font-medium text-primary hover:underline">
            Tell us what you were looking for
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
