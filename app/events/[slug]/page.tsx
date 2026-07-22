import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalendarDays, Clock } from "lucide-react";
import { events } from "@/data/events";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/sections/Reveal";

type Props = { params: Promise<{ slug: string }> };

// Pre-render a page for every event listed in data/events.ts
export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

function getEvent(slug: string) {
  return events.find((e) => e.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) return {};
  return { title: event.title, description: event.description };
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) notFound();

  return (
    <div className="pb-24 pt-40">
      <Container>
        <Reveal>
          <Eyebrow>Event</Eyebrow>
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            {event.title}
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted">{event.description}</p>
          <p className="mt-4 flex items-center gap-2 text-sm text-ink/80">
            <Clock className="h-4 w-4 text-gold" />
            {event.sessionTime}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-ink">Camp Days</h2>
          <div className="mt-6 space-y-3">
            {event.days.map((d, i) => (
              <div
                key={i}
                className="flex flex-col gap-1 rounded-xl border border-border bg-elevated px-5 py-4 sm:flex-row sm:items-center sm:gap-4"
              >
                <span className="flex items-center gap-2 font-mono text-xs text-gold">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {d.date}
                </span>
                <span className="text-sm text-ink/85">{d.topic}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-ink">Instructors' Panel</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {event.instructors.map((ins) => (
              <div key={ins.name} className="rounded-xl border border-border bg-elevated px-5 py-4">
                <p className="text-sm font-medium text-ink">{ins.name}</p>
                <p className="mt-1 text-xs text-muted">{ins.credentials}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
