import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/sections/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.fullName}.`,
};

export default function ContactPage() {
  return (
    <div className="pb-24 pt-40">
      <Container className="grid gap-14 md:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            Let's talk science
          </h1>
          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-muted">
            Questions about joining, sessions, or collaborations? Reach out — we'd love to hear
            from you.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <p className="text-sm text-ink/85">{site.address}</p>
            </div>
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-sm text-ink/85 hover:text-accent">
              <Mail className="h-5 w-5 shrink-0 text-gold" />
              {site.email}
            </a>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border">
            <iframe
              title="CCPAC location on Google Maps"
              className="h-64 w-full"
              loading="lazy"
              src="https://www.google.com/maps?q=Chittagong+College,+College+Road,+Chattogram&output=embed"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-border bg-elevated p-8 sm:p-10">
            <ContactForm />
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
