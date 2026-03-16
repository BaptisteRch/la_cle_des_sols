// app/lib/cities.js
import { CITIES } from "./cities.generated";

export { CITIES };

export function getCity(slug) {
  if (!slug) return null;
  const key = String(slug).toLowerCase();
  return CITIES.find((c) => c.slug === key) || null;
}

export function generateCityParams(paramName = "ville") {
  return CITIES.map((c) => ({ [paramName]: c.slug }));
}

// villes prioritaires pour pré-rendu (SEO + perf)
export const FEATURED_CITY_SLUGS = [
  "saint-etienne",
  "roanne",
  "montbrison",
  "andrezieux-boutheon",
  "lyon",
  "villeurbanne",
  "venissieux",
  "saint-priest",
  "vaulx-en-velin",
  "bron",
  "saint-chamond",
  "firminy",
  "le-puy-en-velay",
  "brioude",
  "yssingeaux",
  // ... etc (50/100 max)
];

export function getFeaturedCities() {
  return CITIES.filter((c) => FEATURED_CITY_SLUGS.includes(c.slug));
}
