export function ArticleCard({
  number,
  topic,
  authors,
}: {
  number: number;
  topic: string;
  authors: string[];
}) {
  return (
    <div className="rounded-2xl border border-border bg-elevated p-6 transition-colors hover:border-accent/60">
      <div className="font-mono text-xs text-gold">Article {String(number).padStart(2, "0")}</div>
      <h3 className="mt-3 font-display text-base font-semibold leading-snug text-ink">{topic}</h3>
      <p className="mt-3 text-sm text-muted">{authors.join(", ")}</p>
    </div>
  );
}
