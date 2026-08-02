import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Crumb {
  name: string;
  path: string;
}

/**
 * Visible breadcrumb trail.
 *
 * The tool pages emitted BreadcrumbList structured data with no matching UI,
 * which is both a poor navigation experience and markup that does not reflect
 * the page. This renders the same trail the schema describes.
 */
export function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn('flex flex-wrap items-center gap-1 text-sm text-muted-foreground', className)}
    >
      {items.map((c, i) => {
        const last = i === items.length - 1;
        return (
          <span key={c.path} className="flex items-center gap-1">
            {i > 0 ? <ChevronRight className="h-3.5 w-3.5 flex-shrink-0" aria-hidden /> : null}
            {last ? (
              <span className="font-medium text-foreground" aria-current="page">
                {c.name}
              </span>
            ) : (
              <Link href={c.path} className="transition-colors hover:text-primary">
                {c.name}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
