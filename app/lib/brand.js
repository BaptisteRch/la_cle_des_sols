// app/lib/brand.js
// Données marque centralisées — module NEUTRE (pas "use client").
// À importer aussi bien dans les Server Components que les Client Components.
// Ne PAS définir/exporter ceci depuis un fichier "use client" : les Server
// Components recevraient des références client (proxies) → valeurs undefined.
export const BRAND = {
  name: "La clé des sols",
  phoneDisplay: "04 77 32 09 12",
  phoneHref: "tel:+33477320912",
  email: "gmagand@cledessols.fr",
  emailHref: "mailto:gmagand@cledessols.fr",
  baseCity: "Saint-Étienne",
  region: "Auvergne-Rhône-Alpes",
  leadTime: "RDV sous 48h",
  reviewUrl: "https://g.page/r/Cd5N-tPliazUEAE/review",
};
