// app/presentation/page.jsx
import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactSection from "../components/ContactSection";
import PressSection from "../components/PressSection";

export default function PresentationPage() {
  return (
    <main className="page">
      <SiteHeader />

      {/* HERO */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            <div>
              <span className="badge">Flash Nuisible</span>

              <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
                Présentation
              </h1>

              <p className="mt-4 text-muted">
                Une autre approche de la lutte contre les nuisibles : des
                interventions rapides, efficaces et transparentes, avec une
                méthode claire et des résultats durables.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a className="btn btn-primary" href="#contact">
                  Demander un devis
                </a>
                <a className="btn btn-ghost" href="/#services">
                  Voir les services
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="card overflow-hidden">
                <Image
                  src="/images/flash/truck-basilique-wide.jpg"
                  alt="Flash Nuisible en intervention"
                  width={1400}
                  height={1000}
                  className="h-[280px] md:h-[340px] w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENU ÉDITORIAL */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Une autre approche de la lutte contre les nuisibles
            </h2>

            <p className="mt-4 text-muted">
              Flash Nuisible est une entreprise spécialisée dans la lutte contre
              les nuisibles, créée en 2024 avec une ambition claire : proposer
              des interventions rapides, efficaces et transparentes, tout en
              faisant évoluer l’image du métier.
            </p>

            <p className="mt-3 text-muted">
              Flash Nuisible ne se limite pas à une simple entreprise de
              dératisation ou de désinsectisation. C’est une structure jeune,
              visible et assumée, qui adopte une approche actuelle du terrain,
              de la communication et de la relation client, sans jamais perdre
              de vue l’essentiel :{" "}
              <strong>traiter le problème à la source</strong> et obtenir des
              résultats durables face aux infestations.
            </p>

            <h2 className="mt-10 text-2xl md:text-3xl font-extrabold tracking-tight">
              Une entreprise jeune, fondée sur une vraie expérience terrain
            </h2>

            <p className="mt-4 text-muted">
              Flash Nuisible a été créée par <strong>Lucas Flacher</strong>,
              professionnel de la lutte contre les nuisibles disposant de plus
              de <strong>5 ans d’expérience</strong> dans le domaine de la
              gestion parasitaire et du traitement des infestations.
            </p>

            <p className="mt-3 text-muted">
              Avant la création de Flash Nuisible, cette expérience s’est
              notamment construite au sein de l’entreprise{" "}
              <strong>Nuisibles 13</strong>, reconnue pour la qualité de ses
              interventions et son sérieux. Cette base solide permet aujourd’hui
              de proposer des solutions professionnelles, adaptées aussi bien
              aux problèmes ponctuels qu’aux infestations installées, chez les
              particuliers comme chez les professionnels.
            </p>

            <h2 className="mt-10 text-2xl md:text-3xl font-extrabold tracking-tight">
              Une manière différente de travailler
            </h2>

            <p className="mt-4 text-muted">
              Flash Nuisible assume une communication moderne et une présence
              visible sur le terrain. Mais derrière l’image, le cadre reste{" "}
              <strong>strictement professionnel</strong>, avec des méthodes
              éprouvées et conformes à la réglementation.
            </p>

            {/* Un seul encart (optionnel) */}
            <div className="mt-6 glass rounded-2xl p-5">
              <div className="font-extrabold">
                Concrètement, cela signifie :
              </div>
              <ul className="mt-3 list-disc pl-5 text-muted space-y-2">
                <li>des interventions rapides, avec des délais courts</li>
                <li>
                  des méthodes professionnelles certifiées, adaptées au nuisible
                </li>
                <li>
                  un cadre réglementaire maîtrisé (Certibiocide, normes HACCP)
                </li>
                <li>des tarifs forfaitaires clairs, annoncés à l’avance</li>
                <li>un suivi après intervention pour limiter les récidives</li>
              </ul>
            </div>

            <p className="mt-4 text-muted">
              L’objectif est simple : apporter une solution{" "}
              <strong>efficace, durable et compréhensible</strong> face aux
              nuisibles.
            </p>

            <h2 className="mt-10 text-2xl md:text-3xl font-extrabold tracking-tight">
              Particuliers et professionnels
            </h2>

            <p className="mt-4 text-muted">
              Flash Nuisible intervient aussi bien chez les particuliers que
              chez les professionnels : commerces, restaurants, locaux
              professionnels ou immeubles. Chaque environnement présente des
              contraintes spécifiques, et chaque infestation nécessite une
              réponse adaptée.
            </p>

            <p className="mt-3 text-muted">
              Dans tous les cas, la même exigence s’applique :{" "}
              <strong>
                diagnostiquer précisément, traiter efficacement et prévenir les
                récidives
              </strong>
              .
            </p>

            <h2 className="mt-10 text-2xl md:text-3xl font-extrabold tracking-tight">
              Zones d’intervention
            </h2>

            <p className="mt-4 text-muted">
              Flash Nuisible intervient principalement dans la{" "}
              <strong>Loire</strong>, le <strong>Rhône</strong>, la{" "}
              <strong>Haute-Loire</strong> et plus largement en{" "}
              <strong>Auvergne</strong>, pour des interventions adaptées aux
              problématiques locales.
            </p>

            <p className="mt-6 text-muted">
              <strong>
                Besoin d’une intervention ou d’un diagnostic nuisibles ?
              </strong>{" "}
              Le formulaire de contact permet une prise en charge rapide et
              adaptée à votre situation.
            </p>
          </div>
        </div>
        <PressSection />
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
