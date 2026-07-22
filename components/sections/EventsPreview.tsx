import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { events } from "@/data/events";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/sections/Reveal";
import { EventCard } from "@/components/cards/EventCard";

export function EventsPreview() {
  return (
    <section className="border-t border-border bg-surface/40 py-24">
      <Container>
        <Reveal className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Eyebrow>Events</Eyebrow>
            <h2 className="max-w-lg font-display text-3xl font-semibold text-ink sm:text-4xl">
              Camps, workshops, and gatherings
            </h2>
          </div>
          <Link href="/events" className="group inline-flex items-center gap-2 text-sm font-medium text-accent">
            View all events
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {events.map((e, i) => (
            <Reveal key={e.slug} delay={i * 0.1}>
              <EventCard event={e} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
