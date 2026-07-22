import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { committee, committeeTerm } from "@/data/committee";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/sections/Reveal";
import { PersonCard } from "@/components/cards/PersonCard";

export function CommitteePreview() {
  const featured = committee.slice(0, 4);

  return (
    <section className="py-24">
      <Container>
        <Reveal className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Eyebrow>Executive Committee {committeeTerm}</Eyebrow>
            <h2 className="max-w-lg font-display text-3xl font-semibold text-ink sm:text-4xl">
              The students steering CCPAC forward
            </h2>
          </div>
          <Link href="/committee" className="group inline-flex items-center gap-2 text-sm font-medium text-accent">
            Meet the full committee
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <PersonCard name={m.name} role={m.position} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
