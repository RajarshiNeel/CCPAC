import { founders } from "@/data/founders";
import { committee } from "@/data/committee";
import { sessions, articles, challenges } from "@/data/activities";
import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/sections/Reveal";

const stats = [
  { label: "Founders", value: founders.length },
  { label: "Committee Members", value: committee.length },
  { label: "Academic Sessions", value: sessions.length },
  { label: "Weekly Challenges", value: challenges.length },
  { label: "Articles Published", value: articles.length },
];

export function Stats() {
  return (
    <section className="border-y border-border bg-elevated/60 py-16">
      <Container>
        <Reveal>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                  <AnimatedCounter value={s.value} />
                </p>
                <p className="mt-2 text-xs uppercase tracking-wide text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
