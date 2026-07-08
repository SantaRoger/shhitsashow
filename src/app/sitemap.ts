import type { MetadataRoute } from "next";

const BASE = "https://shhitsa.show";

// Bump when content meaningfully changes so lastModified is honest rather than
// always "now".
const LAST_MODIFIED = new Date("2026-07-06");

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number }[] = [
    { path: "/", priority: 1.0 },
    { path: "/book", priority: 0.9 },
    { path: "/the-show", priority: 0.8 },
    { path: "/the-cast", priority: 0.7 },
    { path: "/faq", priority: 0.7 },
    { path: "/schedule", priority: 0.6 },
    { path: "/merch", priority: 0.5 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${BASE}${path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority,
  }));
}
