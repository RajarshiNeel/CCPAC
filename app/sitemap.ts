import type { MetadataRoute } from "next";
import { events } from "@/data/events";

const BASE_URL = "https://ccpac.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/founders",
    "/committee",
    "/activities",
    "/events",
    "/contact",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const eventRoutes = events.map((e) => ({
    url: `${BASE_URL}/events/${e.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...eventRoutes];
}
