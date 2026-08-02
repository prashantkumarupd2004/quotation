import Link from 'next/link';

export interface LegalSection {
  heading: string;
  paragraphs: string[];
  /** Optional bullet list rendered after the paragraphs. */
  bullets?: string[];
}

/** Stable anchor id derived from the heading, used by the contents list. */
function anchor(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

export function LegalDoc({
  updated,
  intro,
  sections,
}: {
  updated: string;
  /** Optional plain-language summary shown above the contents. */
  intro?: string;
  sections: LegalSection[];
}) {
  return (
    <article className="container max-w-3xl py-16">
      <p className="text-sm text-muted-foreground">Last updated: {updated}</p>

      {intro ? (
        <p className="mt-6 rounded-2xl border border-border bg-muted/40 p-5 leading-relaxed text-muted-foreground">
          {intro}
        </p>
      ) : null}

      {/* On-page contents — long legal documents are unusable without one. */}
      <nav aria-label="On this page" className="mt-8 rounded-2xl border border-border p-5">
        <h2 className="text-sm font-semibold text-foreground">On this page</h2>
        <ol className="mt-3 space-y-1.5">
          {sections.map((s, i) => (
            <li key={s.heading} className="text-sm">
              <a
                href={`#${anchor(s.heading)}`}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {i + 1}. {s.heading}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-10 space-y-10">
        {sections.map((s) => (
          <section key={s.heading} id={anchor(s.heading)} className="scroll-mt-24">
            <h2 className="font-display text-xl font-bold">{s.heading}</h2>
            {s.paragraphs.map((p, i) => (
              <p key={i} className="mt-3 leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
            {s.bullets?.length ? (
              <ul className="mt-4 space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>

      <div className="mt-14 rounded-2xl border border-border bg-muted/30 p-5 text-sm text-muted-foreground">
        Our other policies:{' '}
        <Link href="/privacy" className="text-primary hover:underline">
          Privacy Policy
        </Link>
        {' · '}
        <Link href="/terms" className="text-primary hover:underline">
          Terms of Service
        </Link>
        {' · '}
        <Link href="/disclaimer" className="text-primary hover:underline">
          Disclaimer
        </Link>
        {' · '}
        <Link href="/cookies" className="text-primary hover:underline">
          Cookie Policy
        </Link>
        {' · '}
        <Link href="/refund-policy" className="text-primary hover:underline">
          Refund Policy
        </Link>
      </div>
    </article>
  );
}
