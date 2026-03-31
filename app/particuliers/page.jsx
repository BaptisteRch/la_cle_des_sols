// app/particuliers/page.jsx
import Image from "next/image";
import Link from "next/link";

import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactSection from "../components/ContactSection";

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

function TaxCreditCard() {
  return (
    <section className="section pt-0">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-2xl border bg-white p-8 shadow-sm md:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-sky-200/40 blur-3xl" />

          <div className="relative grid items-start gap-6 md:grid-cols-[auto_1fr]">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sky-500/10 text-2xl font-extrabold text-sky-600">
              %
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Bénéficiez de{" "}
                <span className="text-sky-600">50 % de crédit d’impôt</span>
              </h2>

              <p className="mt-3 text-muted">
                Grâce au dispositif de{" "}
                <strong>
                  crédit d’impôt de 50 % pour les services à la personne
                </strong>
                , vous pouvez bénéficier d’un service de nettoyage professionnel
                <strong> à moitié prix</strong>.
              </p>

              <p className="mt-3 text-muted">
                Une solution idéale pour profiter d’un intérieur propre,
                entretenu par des professionnels, tout en réduisant votre coût
                réel.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/particuliers#services-eligibles"
                  className="btn btn-primary"
                >
                  Voir les services éligibles
                </Link>

                <Link href="#contact" className="btn btn-ghost">
                  Demander un devis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const metadata = {
  title: "Nettoyage pour particuliers à Saint-Étienne — La Clé des Sols",
  description:
    "Prestations de nettoyage pour particuliers à Saint-Étienne : vitres, ménage régulier, entretien des sols et nettoyage complet de l’habitation. Crédit d’impôt de 50 % pour les services à la personne.",
};

export default function ParticuliersPage() {
  return (
    <main className="page">
      <SiteHeader />

      {/* HERO */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Nettoyage pour particuliers
          </h1>
          <p className="mt-3 text-muted font-semibold">
            Un service professionnel pour votre maison
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="space-y-3">
              <p className="text-muted">
                Notre entreprise propose également des prestations de nettoyage
                pour les particuliers, avec une approche sérieuse, soignée et
                adaptée à votre logement.
              </p>

              <p className="text-muted">
                Que ce soit pour un besoin régulier ou ponctuel, nous
                intervenons pour vous aider à retrouver un intérieur propre,
                sain et agréable à vivre.
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
                src="/images/cleaning/particulier-1.jpg"
                alt="Service de nettoyage pour particuliers"
                width={1200}
                height={900}
                className="h-[280px] md:h-[320px] w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* CREDIT IMPOT */}
      <TaxCreditCard />

      {/* PRESTATIONS */}
      <Split
        title="Des prestations adaptées à votre habitation"
        image={
          <Image
            src="/images/cleaning/particulier-2.jpg"
            alt="Prestations de nettoyage à domicile"
            width={1200}
            height={900}
            className="h-[280px] md:h-[360px] w-full object-cover"
          />
        }
      >
        <p className="text-muted">
          Nos équipes interviennent pour différents besoins d’entretien et de
          nettoyage à domicile, avec des méthodes et produits professionnels.
        </p>

        <ul className="ml-5 mt-4 list-disc pl-5 text-muted space-y-2">
          <li>Nettoyage de vitres</li>
          <li>Ménage régulier</li>
          <li>Entretien des sols</li>
          <li>Nettoyage complet de votre habitation</li>
        </ul>
      </Split>

      {/* BENEFICES */}
      <Split
        reverse
        title="Un intérieur propre sans vous soucier des tâches ménagères"
        image={
          <Image
            src="/images/cleaning/particulier-3.jpg"
            alt="Maison propre et entretenue"
            width={1200}
            height={900}
            className="h-[280px] md:h-[360px] w-full object-cover"
          />
        }
      >
        <p className="text-muted">
          Faire appel à La Clé des Sols, c’est choisir un service fiable pour
          garder un logement agréable à vivre au quotidien.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="card p-6">
            <div className="font-extrabold">Gain de temps</div>
            <p className="mt-2 text-muted">
              Vous déléguez les tâches ménagères à des professionnels.
            </p>
          </div>

          <div className="card p-6">
            <div className="font-extrabold">Résultat soigné</div>
            <p className="mt-2 text-muted">
              Des méthodes efficaces pour un intérieur plus propre.
            </p>
          </div>

          <div className="card p-6">
            <div className="font-extrabold">Confort au quotidien</div>
            <p className="mt-2 text-muted">
              Un logement plus sain, plus agréable et mieux entretenu.
            </p>
          </div>

          <div className="card p-6">
            <div className="font-extrabold">Coût réduit</div>
            <p className="mt-2 text-muted">
              Grâce au crédit d’impôt, vous bénéficiez d’un service à moitié
              prix.
            </p>
          </div>
        </div>
      </Split>

      {/* TEXTE FINAL */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Une solution simple pour votre maison
              </h2>
              <p className="mt-4 text-muted">
                La Clé des Sols vous accompagne pour l’entretien de votre maison
                ou de votre appartement avec des prestations claires, adaptées à
                vos besoins et réalisées avec sérieux.
              </p>

              <p className="mt-4 text-muted">
                Vous profitez ainsi d’un{" "}
                <strong>intérieur propre et sain</strong> sans vous soucier des
                tâches ménagères, avec la qualité d’un service professionnel à
                domicile.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services-eligibles" className="mb-5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="card p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Les services ménagers éligibles au crédit d’impôt de 50 %
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <span className="text-green-600">✔</span>
                <span className="text-muted">
                  Nettoyage de l’intérieur du domicile
                </span>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-600">✔</span>
                <span className="text-muted">Entretien de la maison</span>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-600">✔</span>
                <span className="text-muted">Repassage</span>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-600">✔</span>
                <span className="text-muted">Entretien des sols</span>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-600">✔</span>
                <span className="text-muted">Ménage écologique</span>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-600">✔</span>
                <span className="text-muted">
                  Nettoyage des balcons et terrasses
                </span>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-600">✔</span>
                <span className="text-muted">Nettoyage haute pression</span>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-600">✔</span>
                <span className="text-muted">Ménage de printemps</span>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-600">✔</span>
                <span className="text-muted">Lavage de vitres</span>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-600">✔</span>
                <span className="text-muted">
                  Ménage lors d’un déménagement
                </span>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-600">✔</span>
                <span className="text-muted">Nettoyage après chantier</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
