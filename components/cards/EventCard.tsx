import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import type { ClubEvent } from "@/data/events";

export function EventCard({ event }: { event: ClubEvent }) {
  return (
    <div className="rounded-2xl border border-border bg-elevated p-8">
      <div className="flex items-center justify-between">
        <span
          className={
            event.status === "upcoming"
              ? "rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent"
              : "rounded-full bg-border px-3 py-1 text-xs font-medium text-muted"
          }
        >
          {event.status === "upcoming" ? "Upcoming" : "Past Event"}
        </span>
        <Calendar className="h-4 w-4 text-gold" />
      </div>

      <h3 className="mt-5 font-display text-2xl font-semibold text-ink">{event.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{event.description}</p>
      <p className="mt-4 text-xs uppercase tracking-wide text-ink/70">{event.sessionTime}</p>

      <Link
        href={`/events/${event.slug}`}
        className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent"
      >
        View schedule
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
