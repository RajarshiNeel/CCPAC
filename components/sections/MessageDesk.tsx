import { messages } from "@/data/messages";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/sections/Reveal";
import { Quote } from "lucide-react";

export function MessageDesk() {
  return (
    <section className="border-t border-border bg-surface/40 py-24">
      <Container>
        <Reveal>
          <Eyebrow>Message Desk</Eyebrow>
          <h2 className="max-w-xl font-display text-3xl font-semibold text-ink sm:text-4xl">
            Words from those who guide us
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {messages.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-border bg-elevated p-8">
                <Quote className="h-6 w-6 text-gold" />
                <p className="mt-4 text-[15px] leading-relaxed text-ink/85">{m.quote}</p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="font-medium text-ink">{m.name}</p>
                  <p className="text-sm text-muted">{m.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
