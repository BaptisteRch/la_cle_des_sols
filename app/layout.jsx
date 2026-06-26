// app/layout.jsx
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "./lib/brand";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "La clé des sols — Société de nettoyage à Saint-Étienne",
  description:
    "Devis gratuit • RDV sous 48h • Particuliers & professionnels. Nettoyage, remise en état fin de chantier, sols et vitres. Intervention Loire (42), Rhône (69), Haute-Loire (43).",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "La clé des sols — Société de nettoyage à Saint-Étienne",
    description:
      "Devis gratuit • RDV sous 48h • Particuliers & professionnels • Loire, Rhône, Haute-Loire",
    url: SITE_URL,
    siteName: "La clé des sols",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/logo.webp",
        alt: "La clé des sols",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "La clé des sols — Société de nettoyage à Saint-Étienne",
    description:
      "Devis gratuit • RDV sous 48h • Nettoyage professionnels & particuliers • Loire, Rhône, Haute-Loire",
    images: ["/images/logo.webp"],
  },
  // Icônes gérées par convention de fichier : app/favicon.ico (vrai ICO
  // 16/32/48) + app/icon.png (512px). Pas d'override manuel pour laisser
  // Next injecter les bons types/sizes + hash de cache-busting.
};

export default function RootLayout({ children }) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    "@id": `${SITE_URL}/#business`,
    name: "La clé des sols",
    legalName: "La clé des sols SAS",
    url: SITE_URL,
    email: "gmagand@cledessols.fr",
    telephone: "+33477320912",
    priceRange: "€€",
    image: `${SITE_URL}/images/logo.webp`,
    logo: `${SITE_URL}/images/logo.webp`,
    vatID: "FR25492559182",
    taxID: "49255918200018",
    areaServed: [
      { "@type": "AdministrativeArea", name: "Loire" },
      { "@type": "AdministrativeArea", name: "Rhône" },
      { "@type": "AdministrativeArea", name: "Haute-Loire" },
      { "@type": "City", name: "Saint-Étienne" },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "7 rue Calixte Plotton",
      postalCode: "42000",
      addressLocality: "Saint-Étienne",
      addressRegion: "Auvergne-Rhône-Alpes",
      addressCountry: "FR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/la-cl%C3%A9-des-sols",
      "https://www.instagram.com/lacledessols/",
    ],
  };

  return (
    <html lang="fr" className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
