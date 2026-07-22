import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/sections/Reveal";

export function CTA() {
  return (
    <section className="py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-elevated px-8 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute inset-0 bg-orbit-radial" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
                Curious minds are always welcome at CCPAC
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[15px] text-muted">
                Whether you're just starting to love physics or already chasing Olympiad medals, there's a place for you here.
              </p>
              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white transition-transform hover:scale-105"
              >
                Get in touch
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
