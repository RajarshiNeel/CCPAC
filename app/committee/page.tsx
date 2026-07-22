import type { Metadata } from "next";
import { committee, committeeTerm } from "@/data/committee";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/sections/Reveal";
import { PersonCard } from "@/components/cards/PersonCard";

export const metadata: Metadata = {
  title: "Committee",
  description: `Meet the CCPAC Executive Committee, ${committeeTerm}.`,
};

export default function CommitteePage() {
  return (
    <div className="pb-24 pt-40">
      <Container>
        <Reveal>
          <Eyebrow>Executive Committee {committeeTerm}</Eyebrow>
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            The team steering CCPAC forward
          </h1>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {committee.map((m, i) => (
            <Reveal key={m.name} delay={(i % 8) * 0.06}>
              <PersonCard name={m.name} role={m.position} />
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
