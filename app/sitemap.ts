import { MetadataRoute } from "next";
import { getFeaturedCities } from "./lib/cities";

const SITE_URL = "https://cledessols.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    "",
    "/particuliers",
    "/nettoyage_vitre",
    "/regulier",
    "/vie_de_chantier",
    "/fin_de_chantier",
    "/etat_de_sols",
    "/faq",
    "/mentions-legales",
    "/politique-confidentialite",
  ];

  const staticEntries = routes.map((path) => {
    const isLegal =
      path === "/mentions-legales" || path === "/politique-confidentialite";
    return {
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : isLegal ? 0.2 : 0.7,
    };
  });

  // Pages locales par ville — seulement les villes prioritaires (indexables).
  // La longue traîne est en noindex => exclue du sitemap.
  const cityEntries = getFeaturedCities().map((c: { slug: string }) => ({
    url: `${SITE_URL}/nettoyage-${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...cityEntries];
}
