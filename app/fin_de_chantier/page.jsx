// app/professionnels/fin_de_chantier/page.jsx
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
  title: "Nettoyage de fin de chantier à Saint-Étienne — La Clé des Sols",
  description:
    "Nettoyage de fin de chantier à Saint-Étienne et en Auvergne-Rhône-Alpes : nettoyage en cours de chantier, avant réception (OPR) et final avant livraison. Intervention sur chantiers de toutes tailles.",
};

export default function FinDeChantierPage() {
  return (
    <main className="page">
      <SiteHeader />

      {/* HERO */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Nettoyage de fin de chantier
          </h1>
          <p className="mt-3 text-muted font-semibold">
            Un nettoyage complet avant livraison de votre bâtiment
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="space-y-3">
              <p className="text-muted">
                Après des travaux, un bâtiment doit être parfaitement propre
                avant sa livraison.
              </p>

              <p className="text-muted">
                Notre entreprise est spécialisée dans le{" "}
                <strong>nettoyage de fin de chantier à Saint-Étienne</strong> et
                dans toute la région <strong>Auvergne-Rhône-Alpes</strong>.
              </p>

              <p className="text-muted">
                Nous intervenons avec méthode et rigueur pour remettre les
                locaux en état, valoriser le chantier réalisé et permettre une
                réception dans les meilleures conditions.
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
                src="/images/cleaning/end-site-1.jpg"
                alt="Nettoyage de fin de chantier"
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

      {/* TYPES D'INTERVENTION */}
      <Split
        title="Des interventions à chaque étape du chantier"
        image={
          <Image
            src="/images/cleaning/end-site-2.jpg"
            alt="Intervention de nettoyage sur chantier"
            width={1200}
            height={900}
            className="h-[280px] md:h-[360px] w-full object-cover"
          />
        }
      >
        <p className="text-muted">
          Nos équipes interviennent selon l’avancement des travaux et le niveau
          de finition attendu, afin de préparer les lieux avant réception ou
          livraison.
        </p>

        <ul className="ml-5 mt-4 list-disc pl-5 text-muted space-y-2">
          <li>Nettoyage en cours de chantier</li>
          <li>Nettoyage avant réception (OPR)</li>
          <li>Nettoyage final avant livraison</li>
        </ul>
      </Split>

      {/* PRESTATIONS */}
      <Split
        reverse
        title="Nos prestations comprennent"
        image={
          <Image
            src="/images/cleaning/end-site-3.jpg"
            alt="Prestations de nettoyage de fin de chantier"
            width={1200}
            height={900}
            className="h-[280px] md:h-[360px] w-full object-cover"
          />
        }
      >
        <p className="text-muted">
          Nous réalisons un nettoyage complet des zones de chantier pour
          restituer des espaces propres, lisibles et prêts à être livrés.
        </p>

        <ul className="ml-5 mt-4 list-disc pl-5 text-muted space-y-2">
          <li>Ramassage de gravats et déchets</li>
          <li>Balayage des sols</li>
          <li>Dépoussiérage complet</li>
          <li>Nettoyage des vitrages</li>
          <li>Nettoyage des sols et surfaces</li>
        </ul>
      </Split>

      {/* EXPERIENCE */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Une expérience concrète sur des chantiers d’envergure
              </h2>
              <p className="mt-4 text-muted">
                Nous avons notamment réalisé en 2025 le{" "}
                <strong>
                  nettoyage du chantier de l’hôpital Bellevue à Saint-Étienne
                </strong>
                , représentant plus de <strong>10 000 m² de surfaces</strong>.
              </p>

              <p className="mt-4 text-muted">
                Cette expérience nous permet aujourd’hui d’intervenir sur des{" "}
                <strong>chantiers de toutes tailles</strong>, avec la même
                exigence de qualité, de réactivité et de sérieux.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="card p-6">
                <div className="font-extrabold">Chantiers en cours</div>
                <p className="mt-2 text-muted">
                  Interventions adaptées au rythme des travaux.
                </p>
              </div>

              <div className="card p-6">
                <div className="font-extrabold">Avant réception</div>
                <p className="mt-2 text-muted">
                  Préparation des lieux pour les phases de contrôle.
                </p>
              </div>

              <div className="card p-6">
                <div className="font-extrabold">Avant livraison</div>
                <p className="mt-2 text-muted">
                  Un rendu propre et valorisant pour le bâtiment.
                </p>
              </div>

              <div className="card p-6">
                <div className="font-extrabold">Toutes surfaces</div>
                <p className="mt-2 text-muted">
                  Intervention sur petits comme grands chantiers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOC FINAL */}
      <Split
        reverse
        title="Un partenaire fiable pour la livraison de vos chantiers"
        image={
          <Image
            src="/images/cleaning/end-site-4.jpg"
            alt="Entreprise de nettoyage de fin de chantier à Saint-Étienne"
            width={1200}
            height={900}
            className="h-[280px] md:h-[360px] w-full object-cover"
          />
        }
      >
        <p className="text-muted">
          La Clé des Sols accompagne les entreprises du bâtiment, maîtres
          d’œuvre, promoteurs et gestionnaires de site avec des prestations de
          nettoyage de fin de chantier rigoureuses et adaptées aux délais.
        </p>

        <p className="mt-3 text-muted">
          Notre objectif est de livrer des espaces parfaitement propres, prêts à
          être réceptionnés, occupés ou présentés dans les meilleures
          conditions.
        </p>

        <p className="mt-3 text-muted">
          Pour découvrir l’ensemble de nos services destinés aux professionnels,{" "}
          <Link href="/professionnels" className="underline font-bold">
            consultez notre page dédiée
          </Link>
          .
        </p>
      </Split>

      {/* CONTACT */}
      <section className="section bg-beige " id="contact">
        <div className="mx-auto max-w-7xl px-6">
          <ContactSection />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
