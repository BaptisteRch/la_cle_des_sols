// app/[ville]/page.jsx — Landing locale par ville (programmatic SEO)
import Link from "next/link";
import { notFound } from "next/navigation";

import SiteHeader from "../components/SiteHeader";
import { BRAND, SITE_URL } from "../lib/brand";
import SiteFooter from "../components/SiteFooter";
import ContactSection from "../components/ContactSection";
import ServiceCardsPro from "../components/ServiceCardsPro";
import SeoJsonLd from "../components/SeoJsonLd";
import Reveal from "../components/Reveal";
import { CITIES, getCity, getFeaturedCities } from "../lib/cities";
import { getIntro, getReasons, isFeatured } from "../lib/cityContent";

const PREFIX = "nettoyage-";

// 404 pour toute valeur hors generateStaticParams
export const dynamicParams = false;

export function generateStaticParams() {
  return CITIES.map((c) => ({ ville: `${PREFIX}${c.slug}` }));
}

function cityFromParam(ville) {
  if (!ville || !ville.startsWith(PREFIX)) return null;
  return getCity(ville.slice(PREFIX.length));
}

export async function generateMetadata({ params }) {
  const { ville } = await params;
  const city = cityFromParam(ville);
  if (!city) return {};

  const title = `Entreprise de nettoyage à ${city.name} (${city.area}) — La Clé des Sols`;
  const description = `Nettoyage professionnel à ${city.name} : locaux, vitres, fin de chantier, remise en état des sols et entretien régulier. Devis gratuit, intervention rapide en ${city.area}.`;

  // Longue traîne en noindex : on concentre l'autorité sur les villes prioritaires
  const featured = isFeatured(city.slug);

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/${PREFIX}${city.slug}` },
    robots: featured
      ? undefined
      : { index: false, follow: true },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${PREFIX}${city.slug}`,
      type: "website",
    },
  };
}

export default async function VillePage({ params }) {
  const { ville } = await params;
  const city = cityFromParam(ville);
  if (!city) notFound();

  const url = `${SITE_URL}/${PREFIX}${city.slug}`;

  // Maillage interne : autres villes proches (hors ville courante)
  const nearby = getFeaturedCities()
    .filter((c) => c.slug !== city.slug)
    .slice(0, 12);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${BRAND.name} — Nettoyage à ${city.name}`,
    image: `${SITE_URL}/images/logo.webp`,
    url,
    telephone: BRAND.phoneDisplay,
    email: BRAND.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: BRAND.baseCity,
      addressRegion: BRAND.region,
      addressCountry: "FR",
    },
    areaServed: { "@type": "City", name: city.name },
    description: `Entreprise de nettoyage professionnel intervenant à ${city.name} (${city.area}) et dans toute la région ${BRAND.region}.`,
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: `Nettoyage à ${city.name}`,
        item: url,
      },
    ],
  };

  return (
    <main className="page">
      <SiteHeader />
      <SeoJsonLd json={jsonLd} />
      <SeoJsonLd json={breadcrumb} />

      {/* HERO */}
      <section className="section bg-[var(--paper2)]">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal direction="left">
            <div className="max-w-3xl">
              <span className="badge">Intervention à {city.name}</span>

              <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
                Entreprise de nettoyage à{" "}
                <span className="text-gradient">{city.name}</span>
              </h1>

              <p className="mt-5 text-lg text-muted">{getIntro(city)}</p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a href={BRAND.phoneHref} className="btn btn-primary">
                  Appeler {BRAND.phoneDisplay}
                </a>
                <Link href="/#contact" className="btn btn-outline">
                  Devis gratuit
                </Link>
              </div>

              <p className="mt-4 text-sm text-black/55">
                Devis gratuit • {BRAND.leadTime} • Intervention dans tout le{" "}
                {city.area}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES (liens internes) */}
      <ServiceCardsPro />

      {/* POURQUOI NOUS */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Pourquoi choisir La Clé des Sols à {city.name} ?
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {getReasons(city).map((r) => (
              <div key={r.title} className="card p-6">
                <div className="font-extrabold">{r.title}</div>
                <p className="mt-2 text-muted">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTRES VILLES (maillage interne) */}
      {nearby.length > 0 && (
        <section className="section bg-[var(--paper2)]">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-xl md:text-2xl font-extrabold tracking-tight">
              Nous intervenons aussi près de {city.name}
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {nearby.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/${PREFIX}${c.slug}`}
                    className="inline-flex rounded-full bg-white px-4 py-1.5 text-sm font-medium text-black/70 ring-1 ring-black/10 hover:text-[var(--brand2)] hover:ring-black/20 transition"
                  >
                    Nettoyage à {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* CONTACT */}
      <section className="section bg-beige" id="contact">
        <div className="mx-auto max-w-7xl px-6">
          <ContactSection />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
