import type { Metadata } from "next";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/sections/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: site.description,
};

export default function AboutPage() {
  return (
    <div className="pb-24 pt-40">
      <Container>
        <Reveal>
          <Eyebrow>Who We Are</Eyebrow>
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            Rooted in curiosity about nature and the cosmos
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 max-w-3xl space-y-5 text-[15px] leading-relaxed text-muted">
            <p>
              Rooted in a timeless curiosity to understand nature and the cosmos, the Chittagong
              College Physics & Astronomy Club, founded on {site.founded}, aspires to cultivate a
              dynamic academic community for students passionate about physics and astronomy. Our
              mission is to promote scientific literacy and curiosity by exploring the
              fundamental laws of nature and the vast mysteries of the universe.
            </p>
            <p>
              CCPAC serves as a hub for learning, collaboration, and intellectual growth beyond
              the classroom. We regularly organize academic sessions on physics and astronomy,
              conducted by senior students and alumni who are currently studying at various
              renowned universities. These sessions provide members with guidance, inspiration,
              and real academic insight into higher studies and research in science.
            </p>
            <p>
              To further extend scientific dialogue beyond traditional formats, CCPAC also
              initiated its own podcast, EigenTalks — a platform where ideas, experiences, and
              insights from diverse individuals are brought into meaningful conversation.
            </p>
            <p>
              To strengthen analytical thinking and problem-solving skills, CCPAC arranges a
              Weekly Physics Challenge, where members engage with carefully designed problems
              that encourage logical reasoning and deeper understanding of physical concepts.
              Alongside this, we emphasize scientific communication through article writing
              activities, allowing members to express ideas, explain theories, and share their
              perspectives on physics and astronomy.
            </p>
            <p>
              Recognizing that curiosity is the foundation of science, CCPAC strives to build a
              supportive environment where questions are welcomed, ideas are exchanged, and
              learning becomes a collective journey. We welcome students of all proficiency
              levels who are eager to explore the universe — from the tiniest particles to the
              grandest galaxies.
            </p>
          </div>
        </Reveal>
      </Container>

      <Container className="mt-24">
        <Reveal>
          <div className="rounded-3xl border border-border bg-elevated p-8 sm:p-12">
            <Eyebrow>The CCPAC Family</Eyebrow>
            <h2 className="max-w-xl font-display text-2xl font-semibold text-ink sm:text-3xl">
              More than an academic organization — a family
            </h2>
            <div className="mt-6 max-w-3xl space-y-5 text-[15px] leading-relaxed text-muted">
              <p>
                This family is formed by the Executive Committee, batchmates, juniors, seniors,
                alumni, and instructors. Batchmates grow together through collaboration and
                shared learning. Juniors are nurtured with guidance and encouragement, while
                seniors lead with responsibility and experience. Our alumni, who have moved on to
                higher studies and diverse academic paths, continue to support the club by
                sharing their knowledge and insights. Instructors provide essential academic
                mentorship and direction, ensuring that curiosity is guided by sound
                understanding.
              </p>
              <p>
                The CCPAC family is built on mutual respect, cooperation, and a common purpose: to
                explore the universe and understand the laws of nature together. Here, every
                member has a role, every voice is valued, and every question is welcomed.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
