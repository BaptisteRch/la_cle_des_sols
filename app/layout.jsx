// app/layout.jsx
import "./globals.css";

const SITE_URL = "https://laclesessols.fr";

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
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "La clé des sols",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "La clé des sols — Société de nettoyage à Saint-Étienne",
    description:
      "Devis gratuit • RDV sous 48h • Nettoyage professionnels & particuliers • Loire, Rhône, Haute-Loire",
    images: ["/images/og.jpg"],
  },

  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "La clé des sols",
    url: SITE_URL,
    email: "gmagand@cledessols.fr",
    telephone: "+33477320912",
    areaServed: ["Saint-Étienne", "Loire", "Rhône", "Haute-Loire"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Saint-Étienne",
      addressRegion: "Auvergne-Rhône-Alpes",
      addressCountry: "FR",
    },
    image: `${SITE_URL}/images/og.jpg`,
  };

  return (
    <html lang="fr">
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
