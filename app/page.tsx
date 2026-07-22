import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ActivitiesPreview } from "@/components/sections/ActivitiesPreview";
import { CommitteePreview } from "@/components/sections/CommitteePreview";
import { EventsPreview } from "@/components/sections/EventsPreview";
import { MessageDesk } from "@/components/sections/MessageDesk";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutPreview />
      <ActivitiesPreview />
      <CommitteePreview />
      <EventsPreview />
      <MessageDesk />
      <CTA />
    </>
  );
}
