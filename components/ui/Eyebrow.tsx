// A small monospace label used above section headings, e.g. "§ ABOUT".
// The section-mark styling nods to equation numbering — a deliberate
// callback to physics notation, not a decorative afterthought.
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="section-eyebrow mb-4 flex items-center gap-2 text-xs font-medium uppercase text-accent">
      <span className="text-gold">§</span>
      {children}
    </p>
  );
}
