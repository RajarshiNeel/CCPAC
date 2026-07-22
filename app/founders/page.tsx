import type { Metadata } from "next";
import { founders, foundersIntro } from "@/data/founders";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/sections/Reveal";
import { Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "Founders",
  description: foundersIntro,
};

export default function FoundersPage() {
  return (
    <div className="pb-24 pt-40">
      <Container>
        <Reveal>
          <Eyebrow>CCPAC Founders</Eyebrow>
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            Three trailblazers, one shared spark
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted">{foundersIntro}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {founders.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-border bg-elevated p-7">
                <h2 className="font-display text-xl font-semibold text-ink">{f.name}</h2>
                <p className="mt-1 text-sm text-gold">{f.batch}</p>
                <ul className="mt-5 space-y-2.5">
                  {f.achievements.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-sm text-ink/80">
                      <Trophy className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
