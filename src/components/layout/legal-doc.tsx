export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export function LegalDoc({ updated, sections }: { updated: string; sections: LegalSection[] }) {
  return (
    <article className="container max-w-3xl py-16">
      <p className="text-sm text-muted-foreground">Last updated: {updated}</p>
      <div className="mt-8 space-y-10">
        {sections.map((s) => (
          <section key={s.heading}>
            <h2 className="font-display text-xl font-bold">{s.heading}</h2>
            {s.paragraphs.map((p, i) => (
              <p key={i} className="mt-3 leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>
    </article>
  );
}
