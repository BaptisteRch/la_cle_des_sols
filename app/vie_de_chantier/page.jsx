// app/professionnels/vie_de_chantier/page.jsx
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
  title: "Nettoyage de bases de vie de chantier — La Clé des Sols",
  description:
    "Entretien régulier des bases de vie de chantier en Auvergne-Rhône-Alpes : vestiaires, réfectoires, sanitaires, bungalows et bureaux de chantier, avec gestion des consommables sanitaires.",
};

export default function VieDeChantierPage() {
  return (
    <main className="page">
      <SiteHeader />

      {/* HERO */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Nettoyage de bases de vie de chantier
          </h1>
          <p className="mt-3 text-muted font-semibold">
            L’entretien indispensable pour vos équipes de chantier
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="space-y-3">
              <p className="text-muted">
                Sur un chantier, les bases de vie sont des espaces essentiels
                pour le confort et l’hygiène des équipes.
              </p>

              <p className="text-muted">
                Notre entreprise de nettoyage assure{" "}
                <strong>
                  l’entretien régulier des bases de vie de chantier
                </strong>{" "}
                dans toute la région <strong>Auvergne-Rhône-Alpes</strong>, avec
                une organisation fiable et adaptée aux contraintes du terrain.
              </p>

              <p className="text-muted">
                Nos équipes sont habituées à intervenir dans l’environnement
                exigeant des chantiers et connaissent parfaitement les
                contraintes du secteur du bâtiment.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a href="#contact" className="btn btn-primary">
                  Demander un devis
                </a>
                <Link href="/#prestations" className="btn btn-ghost">
                  Voir les autres prestations
                </Link>
              </div>
            </div>

            <div className="card overflow-hidden">
              <Image
                src="/images/cleaning/site-life-1.jpg"
                alt="Entretien de bases de vie de chantier"
                width={1200}
                height={900}
                className="h-[280px] md:h-[320px] w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ORGANISATION */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Une organisation pensée pour le terrain
              </h2>
              <p className="mt-4 text-muted">
                Grâce à notre organisation et à nos équipes dédiées, nous
                garantissons des bases de vie{" "}
                <strong>propres, fonctionnelles et agréables à utiliser</strong>{" "}
                tout au long du chantier.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="card p-6">
                <div className="font-extrabold">Interventions régulières</div>
                <p className="mt-2 text-muted">
                  Un entretien planifié selon le rythme du chantier.
                </p>
              </div>

              <div className="card p-6">
                <div className="font-extrabold">Équipes habituées au BTP</div>
                <p className="mt-2 text-muted">
                  Des agents formés aux contraintes du terrain.
                </p>
              </div>

              <div className="card p-6">
                <div className="font-extrabold">Suivi fiable</div>
                <p className="mt-2 text-muted">
                  Une prestation claire et constante pendant toute la durée du
                  chantier.
                </p>
              </div>

              <div className="card p-6">
                <div className="font-extrabold">Hygiène au quotidien</div>
                <p className="mt-2 text-muted">
                  Des espaces mieux entretenus pour le confort des équipes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONSOMMABLES */}
      <Split
        reverse
        title="Approvisionnement et distribution des consommables sanitaires"
        image={
          <Image
            src="/images/cleaning/site-life-3.jpg"
            alt="Gestion des consommables sanitaires sur chantier"
            width={1200}
            height={900}
            className="h-[280px] md:h-[360px] w-full object-cover"
          />
        }
      >
        <p className="text-muted">
          En complément du nettoyage, nous pouvons également gérer{" "}
          <strong>
            l’approvisionnement et la distribution des consommables sanitaires
          </strong>
          , afin de garantir des espaces toujours opérationnels pour les
          équipes.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="card p-6">
            <div className="font-extrabold">Papier toilette</div>
            <p className="mt-2 text-muted">Selon le rythme du chantier.</p>
          </div>

          <div className="card p-6">
            <div className="font-extrabold">Essuie-mains</div>
            <p className="mt-2 text-muted">
              Mise à disposition régulière pour les espaces sanitaires.
            </p>
          </div>

          <div className="card p-6">
            <div className="font-extrabold">Savon</div>
            <p className="mt-2 text-muted">
              Distribution des essentiels pour l’hygiène quotidienne.
            </p>
          </div>
        </div>
      </Split>

      {/* ZONES ENTRETENUES */}
      <Split
        title="Nous assurons l’entretien des espaces essentiels"
        image={
          <Image
            src="/images/cleaning/site-life-2.jpg"
            alt="Nettoyage des espaces de vie sur chantier"
            width={1200}
            height={900}
            className="h-[280px] md:h-[360px] w-full object-cover"
          />
        }
      >
        <p className="text-muted">
          L’entretien des bases de vie contribue directement au confort des
          équipes, à la bonne tenue du chantier et au respect des conditions
          d’hygiène au quotidien.
        </p>

        <ul className="ml-5 mt-4 list-disc pl-5 text-muted space-y-2">
          <li>Vestiaires</li>
          <li>Réfectoires</li>
          <li>Sanitaires</li>
          <li>Bungalows de chantier</li>
          <li>Bureaux de chantier</li>
        </ul>
      </Split>

      {/* BLOC FINAL */}
      <Split
        reverse
        title="Un service fiable pour vos chantiers"
        image={
          <Image
            src="/images/cleaning/site-life-4.jpg"
            alt="Service de nettoyage pour base de vie de chantier"
            width={1200}
            height={900}
            className="h-[280px] md:h-[360px] w-full object-cover"
          />
        }
      >
        <p className="text-muted">
          La Clé des Sols accompagne les entreprises du bâtiment avec des
          prestations adaptées aux réalités du chantier, à la fréquentation des
          espaces et à la durée des travaux.
        </p>

        <p className="mt-3 text-muted">
          Nous mettons en place une solution simple, rigoureuse et efficace pour
          maintenir des zones de vie propres et fonctionnelles pour l’ensemble
          des équipes.
        </p>

        <p className="mt-3 text-muted">
          Pour découvrir l’ensemble de nos prestations destinées aux
          professionnels,{" "}
          <Link href="/professionnels" className="underline font-bold">
            consultez notre page dédiée
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
