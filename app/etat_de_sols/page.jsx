// app/professionnels/etat_de_sols/page.jsx
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
  title: "Remise en état de sols à Saint-Étienne — La Clé des Sols",
  description:
    "Remise en état de sols à Saint-Étienne et en Auvergne-Rhône-Alpes : carrelage, sols souples, linoléum, moquettes et sols industriels. Techniques professionnelles pour décaper, assainir et redonner de l’éclat aux revêtements.",
};

export default function EtatDeSolsPage() {
  return (
    <main className="page">
      <SiteHeader />

      {/* HERO */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Remise en état de sols
          </h1>
          <p className="mt-3 text-muted font-semibold">
            Redonnez une seconde vie à vos sols
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="space-y-3">
              <p className="text-muted">
                Avec le temps, certains sols s’encrassent et perdent leur aspect
                d’origine. Une simple serpillière ne suffit plus.
              </p>

              <p className="text-muted">
                Notre équipe spécialisée dans les{" "}
                <strong>travaux exceptionnels de nettoyage</strong> intervient
                pour la <strong>remise en état de tous types de sols</strong>,
                avec des méthodes adaptées à chaque revêtement.
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
                src="/images/cleaning/floor-restoration-1.jpg"
                alt="Remise en état de sols"
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

      {/* TYPES DE SOLS */}
      <Split
        title="Nous traitons tous types de sols"
        image={
          <Image
            src="/images/cleaning/floor-restoration-2.jpg"
            alt="Nettoyage et remise en état de différents revêtements de sol"
            width={1200}
            height={900}
            className="h-[280px] md:h-[360px] w-full object-cover"
          />
        }
      >
        <p className="text-muted">
          Chaque sol nécessite une technique et un matériel adaptés pour obtenir
          un résultat efficace sans détériorer le revêtement.
        </p>

        <ul className="ml-5 mt-4 list-disc pl-5 text-muted space-y-2">
          <li>Carrelage</li>
          <li>Sols souples</li>
          <li>Linoléum</li>
          <li>Moquettes</li>
          <li>Sols industriels</li>
        </ul>
      </Split>

      {/* TECHNIQUES */}
      <Split
        reverse
        title="Des techniques professionnelles adaptées"
        image={
          <Image
            src="/images/cleaning/floor-restoration-3.jpg"
            alt="Équipements professionnels pour la remise en état de sols"
            width={1200}
            height={900}
            className="h-[280px] md:h-[360px] w-full object-cover"
          />
        }
      >
        <p className="text-muted">
          Nous utilisons des équipements professionnels performants pour traiter
          les salissures incrustées, raviver les surfaces et redonner un aspect
          propre aux revêtements.
        </p>

        <ul className="ml-5 mt-4 list-disc pl-5 text-muted space-y-2">
          <li>Monobrosses</li>
          <li>Autolaveuses</li>
          <li>Machines vapeur</li>
          <li>Machines à injection-extraction</li>
        </ul>
      </Split>

      {/* RESULTATS */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Des résultats visibles et durables
              </h2>
              <p className="mt-4 text-muted">
                Ces techniques permettent d’obtenir un nettoyage en profondeur
                et une véritable remise en état des surfaces les plus
                encrassées.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="card p-6">
                <div className="font-extrabold">Décaper les sols</div>
                <p className="mt-2 text-muted">
                  Élimination des couches de salissures accumulées.
                </p>
              </div>

              <div className="card p-6">
                <div className="font-extrabold">
                  Enlever les graisses incrustées
                </div>
                <p className="mt-2 text-muted">
                  Traitement en profondeur des zones les plus encrassées.
                </p>
              </div>

              <div className="card p-6">
                <div className="font-extrabold">Assainir les surfaces</div>
                <p className="mt-2 text-muted">
                  Un nettoyage plus complet pour des sols plus sains.
                </p>
              </div>

              <div className="card p-6">
                <div className="font-extrabold">Redonner de l’éclat</div>
                <p className="mt-2 text-muted">
                  Valorisation visuelle des revêtements ternis par le temps.
                </p>
              </div>
            </div>

            <p className="text-muted">
              Nous pouvons également réaliser la{" "}
              <strong>remise en état complète d’un bâtiment</strong>, dans le
              cadre d’une intervention plus globale de nettoyage exceptionnel.
            </p>
          </div>
        </div>
      </section>

      {/* BLOC FINAL */}
      <Split
        reverse
        title="Une solution efficace pour vos sols les plus encrassés"
        image={
          <Image
            src="/images/cleaning/floor-restoration-4.jpg"
            alt="Entreprise de remise en état de sols à Saint-Étienne"
            width={1200}
            height={900}
            className="h-[280px] md:h-[360px] w-full object-cover"
          />
        }
      >
        <p className="text-muted">
          La Clé des Sols accompagne les professionnels, collectivités,
          copropriétés et gestionnaires de site pour restaurer des revêtements
          dégradés par l’usage, le passage ou le temps.
        </p>

        <p className="mt-3 text-muted">
          Chaque intervention est définie selon le type de sol, son état et le
          niveau de remise en état attendu, avec une approche rigoureuse et du
          matériel adapté.
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
      <section className="section bg-beige" id="contact">
        <div className="mx-auto max-w-7xl px-6">
          <ContactSection />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
