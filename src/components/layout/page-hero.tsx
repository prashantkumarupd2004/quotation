import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Crumb {
  name: string;
  path: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern [background-size:32px_32px] opacity-[0.35]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl" />
      <div className="container py-14 sm:py-20">
        {crumbs ? (
          <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-1 text-sm text-muted-foreground">
            {crumbs.map((c, i) => (
              <span key={c.path} className="flex items-center gap-1">
                {i > 0 ? <ChevronRight className="h-3.5 w-3.5" /> : null}
                {i === crumbs.length - 1 ? (
                  <span className="text-foreground">{c.name}</span>
                ) : (
                  <Link href={c.path} className="hover:text-primary">
                    {c.name}
                  </Link>
                )}
              </span>
            ))}
          </nav>
        ) : null}
        {eyebrow ? <span className="section-eyebrow mb-4">{eyebrow}</span> : null}
        <h1 className="max-w-3xl font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{description}</p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
