// app/professionnels/nettoyage_regulier/page.jsx
import Image from "next/image";
import Link from "next/link";

import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactSection from "../components/ContactSection";
import TaxCreditCard from "../components/TaxCreditCard";

function Split({ reverse = false, title, children, image }) {
  return (
    <section className="section">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`grid gap-8 items-start md:grid-cols-2 ${
            reverse ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div>
            {title ? (
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                {title}
              </h2>
            ) : null}
            <div className={title ? "mt-4" : ""}>{children}</div>
          </div>

          <div className="grid gap-4">
            <div className="card overflow-hidden">{image}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const metadata = {
  title: "Nettoyage régulier de locaux à Saint-Étienne — La Clé des Sols",
  description:
    "Nettoyage régulier de locaux professionnels à Saint-Étienne et dans la région : bureaux, collectivités, commerces, écoles, industries, copropriétés. Interventions quotidiennes, hebdomadaires, mensuelles ou trimestrielles.",
};

export default function NettoyageRegulierPage() {
  return (
    <main className="page">
      <SiteHeader />

      {/* HERO */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Nettoyage régulier de locaux
          </h1>
          <p className="mt-3 text-muted font-semibold">
            L’entretien professionnel de vos espaces de travail
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="space-y-3">
              <p className="text-muted">
                Un environnement propre est essentiel pour le confort des
                collaborateurs et l’image de votre entreprise.
              </p>

              <p className="text-muted">
                Basée à Saint-Étienne, La Clé des Sols assure le{" "}
                <strong>nettoyage régulier de locaux professionnels</strong>{" "}
                dans toute la région, avec des prestations organisées selon vos
                besoins, votre activité et vos contraintes.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a href="#contact" className="btn btn-primary">
                  Demander un devis
                </a>
                <Link href="/professionnels" className="btn btn-ghost">
                  Voir les autres prestations
                </Link>
              </div>
            </div>

            <div className="card overflow-hidden">
              <Image
                src="/images/cleaning/regular-cleaning-1.jpg"
                alt="Nettoyage régulier de locaux professionnels"
                width={1200}
                height={900}
                className="h-[280px] md:h-[320px] w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <TaxCreditCard compact />
        </div>
      </section>

      {/* SECTEURS */}
      <Split
        title="Des interventions dans de nombreux secteurs"
        image={
          <Image
            src="/images/cleaning/regular-cleaning-2.jpg"
            alt="Entretien de locaux pour différents secteurs professionnels"
            width={1200}
            height={900}
            className="h-[280px] md:h-[360px] w-full object-cover"
          />
        }
      >
        <p className="text-muted">
          Nous intervenons auprès de structures de toutes tailles, avec une
          organisation adaptée à la nature des locaux et au rythme de votre
          activité.
        </p>

        <ul className="ml-5 mt-4 list-disc pl-5 text-muted space-y-2">
          <li>Bureaux et tertiaire</li>
          <li>Collectivités et mairies</li>
          <li>Écoles et établissements publics</li>
          <li>Hôpitaux et établissements de santé</li>
          <li>Salles de sport</li>
          <li>Commerces</li>
          <li>Usines et sites industriels</li>
          <li>Parties communes d’immeubles</li>
        </ul>
      </Split>

      {/* CLIENTS / ACTIVITES */}
      <Split
        reverse
        title="Une expérience adaptée à des activités variées"
        image={
          <Image
            src="/images/cleaning/regular-cleaning-3.jpg"
            alt="Prestations de nettoyage pour entreprises et industries"
            width={1200}
            height={900}
            className="h-[280px] md:h-[360px] w-full object-cover"
          />
        }
      >
        <p className="text-muted">
          Nous travaillons également avec des professionnels ayant des besoins
          spécifiques, des contraintes de production ou des exigences d’accueil
          du public.
        </p>

        <ul className="ml-5 mt-4 list-disc pl-5 text-muted space-y-2">
          <li>Chocolateries</li>
          <li>Centres automobiles</li>
          <li>Industries</li>
          <li>Entreprises artisanales</li>
          <li>Syndics de copropriété</li>
        </ul>

        <p className="mt-5 text-muted">
          Chaque organisation bénéficie d’un entretien pensé selon la fréquence
          nécessaire, les zones à traiter et le niveau d’exigence attendu.
        </p>
      </Split>

      {/* FREQUENCES */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Des prestations adaptées à votre organisation
              </h2>
              <p className="mt-4 text-muted">
                Nous proposons des interventions planifiées selon le rythme de
                votre activité, pour garantir des locaux propres toute l’année
                sans perturber votre fonctionnement.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="card p-6">
                <div className="font-extrabold">Quotidiennes</div>
                <p className="mt-2 text-muted">
                  Pour les sites nécessitant un entretien constant.
                </p>
              </div>

              <div className="card p-6">
                <div className="font-extrabold">Hebdomadaires</div>
                <p className="mt-2 text-muted">
                  Une fréquence idéale pour de nombreux locaux professionnels.
                </p>
              </div>

              <div className="card p-6">
                <div className="font-extrabold">Mensuelles</div>
                <p className="mt-2 text-muted">
                  Pour les besoins plus ponctuels ou les surfaces peu exposées.
                </p>
              </div>

              <div className="card p-6">
                <div className="font-extrabold">Trimestrielles</div>
                <p className="mt-2 text-muted">
                  En complément d’un entretien courant ou ciblé.
                </p>
              </div>
            </div>

            <p className="text-muted">
              Chaque prestation est réalisée par des{" "}
              <strong>agents qualifiés</strong>, équipés de{" "}
              <strong>matériel professionnel</strong> et formés aux{" "}
              <strong>techniques de nettoyage</strong> adaptées aux différents
              environnements.
            </p>
          </div>
        </div>
      </section>

      {/* BLOC FINAL */}
      <Split
        reverse
        title="Des locaux toujours propres et agréables à vivre"
        image={
          <Image
            src="/images/cleaning/regular-cleaning-4.jpg"
            alt="Entreprise de nettoyage régulier à Saint-Étienne"
            width={1200}
            height={900}
            className="h-[280px] md:h-[360px] w-full object-cover"
          />
        }
      >
        <p className="text-muted">
          Notre objectif est simple : garantir des locaux toujours propres,
          sains et agréables à vivre pour vos équipes, vos visiteurs et vos
          clients.
        </p>

        <p className="mt-3 text-muted">
          Chaque contrat est pensé de manière claire et efficace, avec une
          organisation fiable, des interventions régulières et un niveau de
          qualité constant.
        </p>

        <p className="mt-3 text-muted">
          Pour découvrir l’ensemble de nos services destinés aux entreprises et
          aux collectivités,{" "}
          <Link href="/professionnels" className="underline font-bold">
            consultez notre page dédiée aux professionnels
          </Link>
          .
        </p>
      </Split>

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
