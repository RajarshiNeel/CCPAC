import type { Metadata } from "next";
import { events } from "@/data/events";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/sections/Reveal";
import { EventCard } from "@/components/cards/EventCard";

export const metadata: Metadata = {
  title: "Events",
  description: "Camps, workshops, and gatherings hosted by CCPAC.",
};

export default function EventsPage() {
  return (
    <div className="pb-24 pt-40">
      <Container>
        <Reveal>
          <Eyebrow>Events</Eyebrow>
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            Camps, workshops & gatherings
          </h1>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {events.map((e, i) => (
            <Reveal key={e.slug} delay={i * 0.08}>
              <EventCard event={e} />
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
