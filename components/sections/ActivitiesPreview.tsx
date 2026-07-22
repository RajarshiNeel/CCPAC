import Link from "next/link";
import { ArrowRight, BookOpen, Mic2, Radar, Telescope } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/sections/Reveal";

const items = [
  {
    icon: Telescope,
    title: "Academic Sessions",
    desc: "Physics & astronomy sessions led by seniors, alumni, and invited instructors.",
  },
  {
    icon: Radar,
    title: "Weekly Physics Challenge",
    desc: "Curated problems that build logical reasoning and analytical skill.",
  },
  {
    icon: BookOpen,
    title: "Article Writing",
    desc: "Members write and publish articles explaining physics and astronomy ideas.",
  },
  {
    icon: Mic2,
    title: "EigenTalks Podcast",
    desc: "Conversations with inspiring guests from science and beyond.",
  },
];

export function ActivitiesPreview() {
  return (
    <section className="border-t border-border bg-surface/40 py-24">
      <Container>
        <Reveal className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Eyebrow>Our Activities</Eyebrow>
            <h2 className="max-w-lg font-display text-3xl font-semibold text-ink sm:text-4xl">
              Four ways we explore the universe together
            </h2>
          </div>
          <Link href="/activities" className="group inline-flex items-center gap-2 text-sm font-medium text-accent">
            See all activities
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-elevated p-6 transition-transform hover:-translate-y-1">
                <item.icon className="h-6 w-6 text-accent" strokeWidth={1.75} />
                <h3 className="mt-4 font-display text-base font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
