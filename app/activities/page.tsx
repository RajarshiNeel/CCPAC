import type { Metadata } from "next";
import {
  sessions,
  challenges,
  articles,
  podcastEpisodes,
  podcastName,
  activitiesIntro,
} from "@/data/activities";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/sections/Reveal";
import { SessionCard } from "@/components/cards/SessionCard";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { ChallengeCard } from "@/components/cards/ChallengeCard";
import { Mic2, Youtube } from "lucide-react";

export const metadata: Metadata = {
  title: "Activities",
  description: activitiesIntro,
};

export default function ActivitiesPage() {
  return (
    <div className="pb-24 pt-40">
      <Container>
        <Reveal>
          <Eyebrow>Our Activities</Eyebrow>
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            Sessions, challenges, articles & EigenTalks
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted">{activitiesIntro}</p>
        </Reveal>
      </Container>

      {/* Sessions */}
      <Container className="mt-20">
        <Reveal>
          <h2 id="sessions" className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Academic & Olympiad Sessions
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            Led by seniors, alumni, and invited instructors — from foundational concepts to
            Olympiad-level problem solving.
          </p>
        </Reveal>
        <div className="mt-8 space-y-4">
          {sessions.map((s, i) => (
            <Reveal key={s.number} delay={i * 0.08}>
              <SessionCard {...s} />
            </Reveal>
          ))}
        </div>
      </Container>

      {/* Weekly Physics Challenge */}
      <Container className="mt-20">
        <Reveal>
          <h2 id="challenge" className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Weekly Physics Challenge
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            Carefully curated problems that sharpen logical reasoning and consistent practice.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {challenges.map((c, i) => (
            <Reveal key={c.number} delay={i * 0.06}>
              <ChallengeCard {...c} />
            </Reveal>
          ))}
        </div>
      </Container>

      {/* Articles */}
      <Container className="mt-20">
        <Reveal>
          <h2 id="articles" className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Articles
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            Members writing about the physics and astronomy ideas that fascinate them.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a, i) => (
            <Reveal key={a.number} delay={i * 0.06}>
              <ArticleCard {...a} />
            </Reveal>
          ))}
        </div>
      </Container>

      {/* Podcast */}
      <Container className="mt-20">
        <Reveal>
          <div className="flex items-center gap-2">
            <Mic2 className="h-5 w-5 text-gold" />
            <h2 id="podcast" className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              {podcastName}
            </h2>
          </div>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            Conversations that bring diverse voices, ideas, and journeys together.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {podcastEpisodes.map((ep, i) => (
            <Reveal key={ep.number} delay={i * 0.08}>
              <div className="overflow-hidden rounded-2xl border border-border bg-elevated">
                {ep.youtubeId ? (
                  <div className="aspect-video w-full">
                    <iframe
                      className="h-full w-full"
                      src={`https://www.youtube.com/embed/${ep.youtubeId}`}
                      title={`${podcastName} Episode ${ep.number}`}
                      loading="lazy"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="flex aspect-video w-full items-center justify-center bg-surface text-muted">
                    <Youtube className="h-8 w-8" />
                  </div>
                )}
                <div className="p-6">
                  <p className="font-mono text-xs text-gold">Episode {ep.number}</p>
                  <p className="mt-2 text-sm text-ink/85">Guest: {ep.guest}</p>
                  <p className="text-sm text-muted">Host: {ep.host}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
