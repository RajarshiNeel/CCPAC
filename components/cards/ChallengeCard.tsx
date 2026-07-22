export function ChallengeCard({ number, topic }: { number: number; topic: string }) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-elevated px-5 py-4">
      <span className="font-mono text-sm text-gold">#{number}</span>
      <span className="text-sm text-ink/85">{topic}</span>
    </div>
  );
}
