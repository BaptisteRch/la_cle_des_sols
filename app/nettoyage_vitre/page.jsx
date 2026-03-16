// app/professionnels/nettoyage_vitre/page.jsx
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
  title: "Nettoyage de vitres professionnel à Saint-Étienne — La Clé des Sols",
  description:
    "Nettoyage de vitres pour professionnels et particuliers à Saint-Étienne : vitrages intérieurs et extérieurs, encadrements, feuillures et rebords. Intervention toutes hauteurs jusqu’à 15 m.",
};

export default function NettoyageVitrePage() {
  return (
    <main className="page">
      <SiteHeader />

      {/* HERO */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Nettoyage de vitres professionnel
          </h1>
          <p className="mt-3 text-muted font-semibold">
            Vitres impeccables, quelle que soit la hauteur
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="space-y-3">
              <p className="text-muted">
                Le nettoyage de vitres est l’une des prestations les plus
                visibles dans un bâtiment. Des vitrages propres donnent
                immédiatement une image <strong>professionnelle</strong>,{" "}
                <strong>soignée</strong> et rassurante de votre établissement.
              </p>

              <p className="text-muted">
                Basée à Saint-Étienne, La Clé des Sols intervient pour le{" "}
                <strong>
                  nettoyage de vitres des professionnels et des particuliers
                </strong>
                , quelle que soit la configuration du bâtiment, avec une
                approche rigoureuse, sécurisée et adaptée au site.
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
                src="/images/cleaning/window-cleaning-1.jpg"
                alt="Nettoyage de vitres professionnel"
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
      {/* TYPES DE SITES */}
      <Split
        title="Des interventions adaptées à tous types de bâtiments"
        image={
          <Image
            src="/images/cleaning/window-cleaning-2.jpg"
            alt="Entretien de vitrages pour bâtiment professionnel"
            width={1200}
            height={900}
            className="h-[280px] md:h-[360px] w-full object-cover"
          />
        }
      >
        <p className="text-muted">
          Nos équipes interviennent sur différents environnements, avec des
          méthodes adaptées à la fréquentation, à l’accessibilité et au niveau
          d’exigence de chaque site.
        </p>

        <ul className="ml-5 mt-4 list-disc pl-5 text-muted space-y-2">
          <li>Bureaux</li>
          <li>Commerces</li>
          <li>Bâtiments publics</li>
          <li>Immeubles</li>
          <li>Industries</li>
          <li>Habitations</li>
        </ul>
      </Split>

      {/* TOUTES HAUTEURS */}
      <Split
        reverse
        title="Nettoyage de vitres toutes hauteurs"
        image={
          <Image
            src="/images/cleaning/window-cleaning-3.jpg"
            alt="Nettoyage de vitres en hauteur"
            width={1200}
            height={900}
            className="h-[280px] md:h-[360px] w-full object-cover"
          />
        }
      >
        <p className="text-muted">
          Grâce à notre système professionnel à <strong>eau pure HiFlo</strong>,
          nous pouvons nettoyer les vitrages jusqu’à{" "}
          <strong>15 mètres de hauteur</strong> sans nacelle, tout en
          garantissant un résultat propre, homogène et sans traces.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="card p-6">
            <div className="font-extrabold">Nettoyage sans traces</div>
            <p className="mt-2 text-muted">
              Une finition nette pour les vitrages les plus exposés.
            </p>
          </div>

          <div className="card p-6">
            <div className="font-extrabold">Méthode écologique</div>
            <p className="mt-2 text-muted">
              Sans produits chimiques, grâce au procédé à eau pure.
            </p>
          </div>

          <div className="card p-6">
            <div className="font-extrabold">Sécurité renforcée</div>
            <p className="mt-2 text-muted">
              Une méthode pensée pour limiter les risques pour nos agents.
            </p>
          </div>

          <div className="card p-6">
            <div className="font-extrabold">Accès facilité</div>
            <p className="mt-2 text-muted">
              Idéal pour les vitrages difficiles d’accès ou en hauteur.
            </p>
          </div>
        </div>

        <p className="mt-5 text-muted">
          Lorsque la configuration du bâtiment l’exige, nos équipes sont
          également{" "}
          <strong>formées à l’utilisation de nacelles élévatrices</strong> afin
          d’assurer une intervention sécurisée et adaptée.
        </p>
      </Split>

      {/* PRESTATION COMPLETE */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Une prestation complète
              </h2>
              <p className="mt-4 text-muted">
                Contrairement à de nombreuses entreprises, notre intervention ne
                se limite pas au simple passage sur les vitrages. Nous réalisons
                un nettoyage complet pour un rendu réellement soigné.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              <div className="card p-6">
                <div className="font-extrabold">Vitres intérieures</div>
                <p className="mt-2 text-muted">
                  Pour une transparence parfaite côté intérieur.
                </p>
              </div>

              <div className="card p-6">
                <div className="font-extrabold">Vitres extérieures</div>
                <p className="mt-2 text-muted">
                  Nettoyage soigné des surfaces exposées.
                </p>
              </div>

              <div className="card p-6">
                <div className="font-extrabold">Encadrements</div>
                <p className="mt-2 text-muted">
                  Finitions propres autour des vitrages.
                </p>
              </div>

              <div className="card p-6">
                <div className="font-extrabold">Feuillures</div>
                <p className="mt-2 text-muted">
                  Nettoyage des zones souvent oubliées.
                </p>
              </div>

              <div className="card p-6">
                <div className="font-extrabold">Rebords de fenêtres</div>
                <p className="mt-2 text-muted">
                  Pour un résultat complet et impeccable.
                </p>
              </div>
            </div>

            <p className="text-muted">
              Le résultat : un nettoyage <strong>complet</strong>,{" "}
              <strong>professionnel</strong> et visible immédiatement, aussi
              bien pour l’image de votre entreprise que pour le confort des
              occupants.
            </p>
          </div>
        </div>
      </section>

      {/* BLOC FINAL */}
      <Split
        reverse
        title="Un service fiable pour vos locaux professionnels"
        image={
          <Image
            src="/images/cleaning/window-cleaning-4.jpg"
            alt="Entreprise de nettoyage de vitres à Saint-Étienne"
            width={1200}
            height={900}
            className="h-[280px] md:h-[360px] w-full object-cover"
          />
        }
      >
        <p className="text-muted">
          La Clé des Sols accompagne les entreprises, commerces, copropriétés et
          établissements publics avec des prestations régulières ou ponctuelles,
          en fonction de vos besoins.
        </p>

        <p className="mt-3 text-muted">
          Chaque intervention est organisée pour offrir un résultat
          irréprochable, dans le respect de vos contraintes d’accès, d’horaires
          et de sécurité.
        </p>

        <p className="mt-3 text-muted">
          Pour une demande plus globale d’entretien de locaux professionnels,{" "}
          <Link href="/professionnels" className="underline font-bold">
            découvrez aussi notre page dédiée aux professionnels
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
