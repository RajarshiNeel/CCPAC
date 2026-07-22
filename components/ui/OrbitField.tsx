"use client";

// The hero's signature visual: slow-spinning orbit rings with a few
// "planet" dots, evoking celestial mechanics. Pure CSS/SVG — no
// heavy canvas work, so it stays lightweight and battery-friendly.
export function OrbitField() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
    >
      <div className="relative h-[560px] w-[560px] md:h-[720px] md:w-[720px]">
        <div className="absolute inset-0 rounded-full border border-border/60" />
        <div className="absolute inset-[60px] rounded-full border border-border/50" />
        <div className="absolute inset-[130px] rounded-full border border-border/40" />

        <div className="absolute inset-0 animate-spin-slow">
          <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_16px_4px_rgba(91,127,255,0.55)]" />
        </div>
        <div className="absolute inset-[60px] animate-spin-slow-reverse">
          <span className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-gold shadow-[0_0_14px_4px_rgba(242,184,75,0.5)]" />
        </div>
        <div className="absolute inset-[130px] animate-spin-slow">
          <span className="absolute right-2 top-1/3 h-1.5 w-1.5 rounded-full bg-accent-soft shadow-[0_0_10px_3px_rgba(139,124,246,0.5)]" />
        </div>
      </div>
    </div>
  );
}
