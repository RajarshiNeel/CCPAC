export function SessionCard({
  number,
  date,
  topic,
  instructor,
  instructorNote,
}: {
  number: number;
  date: string;
  topic: string;
  instructor: string;
  instructorNote: string;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-elevated p-6 sm:flex-row sm:items-start sm:gap-6">
      <div className="font-mono text-sm text-gold">
        Eq. {String(number).padStart(2, "0")}
      </div>
      <div className="flex-1">
        <p className="text-xs uppercase tracking-wide text-muted">{date}</p>
        <h3 className="mt-1 font-display text-lg font-semibold text-ink">{topic}</h3>
        <p className="mt-2 text-sm text-ink/80">{instructor}</p>
        <p className="text-sm text-muted">{instructorNote}</p>
      </div>
    </div>
  );
}
