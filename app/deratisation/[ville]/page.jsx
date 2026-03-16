// app/deratisation/[ville]/page.jsx
import Link from "next/link";
import { notFound } from "next/navigation";

import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import ContactSection from "../../components/ContactSection";
import { getCity, getFeaturedCities } from "../../lib/cities";
import { buildLocalMetadata } from "../../lib/seo";
import SeoJsonLd from "../../components/SeoJsonLd";

export function generateStaticParams() {
  return getFeaturedCities().map((c) => ({ ville: c.slug }));
}

export const revalidate = 2592000;

export async function generateMetadata({ params }) {
  const { ville } = await params;
  const city = getCity(ville);
  if (!city) return { title: "Flash Nuisible" };

  return buildLocalMetadata({
    serviceLabel: "Dératisation",
    cityName: city.name,
    area: city.area || "Auvergne-Rhône-Alpes",
    slugPath: `deratisation/${city.slug}`,
  });
}

export default async function DeratisationVillePage({ params }) {
  const { ville } = await params;
  const city = getCity(ville);

  if (!city) notFound();

  const VILLE = city.name;
  const AREA = city.area || "Auvergne-Rhône-Alpes";
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: "/" },
          {
            "@type": "ListItem",
            position: 2,
            name: "Dératisation",
            item: "/deratisation",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `Dératisation à ${VILLE}`,
            item: `/deratisation/${city.slug}`,
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        name: "Flash Nuisible",
        telephone: "+33770353341",
        email: "contact@flashnuisible.fr",
        areaServed: AREA,
        url: "/",
        image: "/images/og.jpg",
      },
      {
        "@type": "Service",
        name: `Dératisation à ${VILLE}`,
        serviceType: "Dératisation",
        provider: { "@type": "LocalBusiness", name: "Flash Nuisible" },
        areaServed: VILLE,
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `Intervenez-vous rapidement à ${VILLE} ?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: "Oui, interventions généralement sous 48h selon l’urgence, avec diagnostic et devis gratuits par téléphone.",
            },
          },
          {
            "@type": "Question",
            name: `Quels rongeurs traitez-vous à ${VILLE} ?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: "Traitement des rats, souris et autres rongeurs nuisibles, avec une stratégie adaptée au niveau d’infestation.",
            },
          },
          {
            "@type": "Question",
            name: "Comment obtenir un devis ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Le devis est gratuit : contactez Flash Nuisible par téléphone ou via le formulaire de contact du site.",
            },
          },
        ],
      },
    ],
  };

  return (
    <main className="page">
      <SeoJsonLd json={jsonLd} />

      <SiteHeader />

      <section className="section">
        <div className="mx-auto max-w-7xl px-6 space-y-12">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Dératisation à {VILLE}
            </h1>
            <p className="mt-3 text-muted font-semibold">
              Entreprise de dératisation – Traitement des rats, souris et
              rongeurs
            </p>

            <div className="mt-6 space-y-3 text-muted">
              <p>
                Flash Nuisible est une entreprise spécialisée en dératisation à{" "}
                <strong>{VILLE}</strong>, intervenant auprès des particuliers
                pour le traitement des rats, souris et autres rongeurs
                nuisibles.
              </p>

              <p>
                Nous assurons des interventions de dératisation rapides à{" "}
                <strong>{VILLE}</strong> et dans les environs, avec des
                solutions professionnelles adaptées à chaque situation.
              </p>

              <p>
                La présence de rongeurs dans une habitation peut provoquer des
                nuisances importantes, des dégradations matérielles et des
                risques sanitaires, même en l’absence de rongeurs visibles. Une
                intervention de dératisation à <strong>{VILLE}</strong> dès les
                premiers signes permet d’éviter une infestation durable.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="btn btn-primary">
                Contacter Flash Nuisible
              </a>
              <a href="/deratisation" className="btn btn-ghost">
                Page Dératisation
              </a>
            </div>
          </div>

          {/* POURQUOI */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Pourquoi faire une dératisation à {VILLE} rapidement ?
            </h2>

            <div className="mt-4 space-y-3 text-muted">
              <p>
                À {VILLE}, les maisons, appartements, caves, garages, combles et
                annexes offrent des conditions favorables à l’installation des
                rats et souris. Les rongeurs se reproduisent rapidement et
                exploitent la moindre faille.
              </p>

              <p>
                Sans traitement de dératisation adapté, les conséquences peuvent
                être :
              </p>

              <ul className="list-disc pl-5 space-y-2">
                <li>une prolifération rapide des rongeurs</li>
                <li>des dégradations de câbles, isolations et matériaux</li>
                <li>
                  une contamination des lieux par les excréments et urines
                </li>
              </ul>

              <p>
                Plus l’intervention est tardive, plus la dératisation devient
                complexe et coûteuse.
              </p>
            </div>
          </div>

          {/* DEROULEMENT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Comment se déroule une intervention de dératisation à {VILLE} ?
            </h2>

            <div className="mt-4 space-y-3 text-muted">
              <p>
                Chaque intervention débute par un diagnostic et un devis
                gratuits par téléphone, permettant d’évaluer la situation
                rapidement.
              </p>

              <p>
                Dès le premier passage, Flash Nuisible met en place un
                traitement de dératisation professionnel comprenant :
              </p>

              <ul className="list-disc pl-5 space-y-2">
                <li>l’installation de postes d’appâtage sécurisés</li>
                <li>l’utilisation d’appâts rodenticides professionnels</li>
                <li>une stratégie adaptée au niveau d’infestation</li>
              </ul>

              <p>
                Deux passages sont systématiquement prévus, espacés de{" "}
                <strong>30 jours</strong>, afin de contrôler l’efficacité du
                traitement et limiter les récidives.
              </p>

              <p>
                Des recommandations préventives et des actions de calfeutrage
                peuvent être proposées pour réduire durablement les points
                d’entrée des rongeurs.
              </p>
            </div>
          </div>

          {/* INTERVENTION RAPIDE */}
          <div className="glass rounded-2xl p-6">
            <div className="font-extrabold">
              Intervention rapide de dératisation à {VILLE} et alentours
            </div>
            <ul className="mt-3 list-disc pl-5 text-muted space-y-2">
              <li>interventions généralement sous 48h</li>
              <li>disponibilité 7j/7 et 24h/24</li>
              <li>prise en charge efficace des urgences rongeurs</li>
            </ul>
            <p className="mt-3 text-muted">
              📍 Intervention à <strong>{VILLE}</strong>, dans{" "}
              <strong>{AREA}</strong>
            </p>
          </div>

          {/* TARIFS */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Tarifs de dératisation à {VILLE}
            </h2>

            <ul className="mt-4 list-disc pl-5 text-muted space-y-2">
              <li>devis gratuit par téléphone</li>
              <li>tarifs forfaitaires annoncés à l’avance</li>
              <li>
                intervention à partir de <strong>75 €</strong>, selon la
                situation
              </li>
            </ul>

            <p className="mt-4 text-muted">
              Aucun traitement n’est engagé sans validation préalable.
            </p>
          </div>

          {/* DOUTE */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Un doute sur la présence de rats ou de souris à {VILLE} ?
            </h2>

            <p className="mt-4 text-muted">
              👉 En cas de doute, contacter une entreprise de dératisation à{" "}
              {VILLE} permet de confirmer rapidement la situation et d’éviter
              une intervention inutile.
            </p>
          </div>

          {/* PRO */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Dératisation pour les professionnels à {VILLE}
            </h2>

            <p className="mt-4 text-muted">
              Flash Nuisible propose également des solutions de dératisation
              pour les professionnels à {VILLE}, avec la possibilité de contrats
              de suivi et de sanitation.{" "}
              <Link href="/professionnels" className="underline font-semibold">
                Voir la page dédiée
              </Link>
              .
            </p>
          </div>

          {/* CONCLUSION */}
          <div className="glass rounded-2xl p-6">
            <div className="font-extrabold">
              Entreprise de dératisation à {VILLE} – Flash Nuisible
            </div>
            <p className="mt-3 text-muted">
              Pour toute dératisation à {VILLE}, Flash Nuisible vous accompagne
              avec une approche professionnelle, réactive et efficace.
            </p>
            <p className="mt-3 text-muted">
              📞 Contactez Flash Nuisible pour un diagnostic rapide de
              dératisation
            </p>

            <div className="mt-4">
              <a href="#contact" className="btn btn-primary">
                Contacter Flash Nuisible
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section on-dark" id="contact">
        <div className="mx-auto max-w-7xl px-6">
          <ContactSection />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
