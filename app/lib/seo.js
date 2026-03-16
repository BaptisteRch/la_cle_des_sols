// app/lib/seo.js
export function buildLocalMetadata({ serviceLabel, cityName, area, slugPath }) {
  const title = `${serviceLabel} à ${cityName} — Flash Nuisible`;
  const description =
    `${serviceLabel} à ${cityName} : intervention rapide, devis gratuit, approche professionnelle. ` +
    `Zone : ${area}. Contactez Flash Nuisible.`;

  return {
    title,
    description,
    alternates: { canonical: `/${slugPath}` },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: `/${slugPath}`,
      images: ["/images/og.jpg"],
      locale: "fr_FR",
      type: "website",
    },
  };
}
