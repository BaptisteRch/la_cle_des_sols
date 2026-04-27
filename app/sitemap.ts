import { MetadataRoute } from "next";

const SITE_URL = "https://laclesessols.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    "",
    "/#prestations",
    "/#contact",
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

  return routes.map((path) => {
    const isLegal =
      path === "/mentions-legales" || path === "/politique-confidentialite";
    return {
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: path === "" ? 1 : isLegal ? 0.2 : 0.7,
    };
  });
}
