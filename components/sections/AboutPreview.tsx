import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/sections/Reveal";

export function AboutPreview() {
  return (
    <section className="py-24">
      <Container className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-center md:gap-16">
        <Reveal>
          <Eyebrow>Who We Are</Eyebrow>
          <h2 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            A home for minds that refuse to stop wondering
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-[15px] leading-relaxed text-muted">{site.description}</p>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            You are no longer just an observer of nature — you are now part of its exploration.
          </p>
          <Link
            href="/about"
            className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent"
          >
            Read our full story
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
