// app/deratisation/page.jsx
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

export default function DeratisationPage() {
  return (
    <main className="page">
      <SiteHeader />

      {/* HERO (pleine largeur, pas de colonne séparée) */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Dératisation
          </h1>
          <p className="mt-3 text-muted font-semibold">
            Traitement des rats, souris et rongeurs
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="space-y-3">
              <p className="text-muted">
                La dératisation vise à éliminer durablement les rongeurs
                nuisibles tels que les rats, souris, mulots et autres rongeurs,
                tout en limitant les risques de récidive. Chez Flash Nuisible,
                chaque intervention est pensée pour être{" "}
                <strong>rapide, ciblée et adaptée</strong> à la situation
                réelle, sans surtraitement inutile.
              </p>

              <p className="text-muted">
                La présence de rongeurs peut entraîner des dégradations, des
                nuisances importantes et des risques sanitaires, même lorsque
                les animaux ne sont pas visibles. Dès les premiers signes
                (bruits, traces, excréments supposés), une intervention rapide
                permet d’éviter une infestation plus importante.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a href="#contact" className="btn btn-primary">
                  Demander un devis
                </a>
                <a href="/#services" className="btn btn-ghost">
                  Voir les services
                </a>
              </div>
            </div>

            <div className="card overflow-hidden">
              <Image
                src="/images/flash/action-baits.jpg"
                alt="Traitement de dératisation - matériel professionnel"
                width={1200}
                height={900}
                className="h-[280px] md:h-[320px] w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Déroulement (texte + photo, alterné) */}
      <Split
        title="Déroulement d’une intervention de dératisation"
        image={
          <Image
            src="/images/flash/action-shirt.jpg"
            alt="Intervention Flash Nuisible"
            width={1200}
            height={900}
            className="h-[280px] md:h-[360px] w-full object-cover"
          />
        }
      >
        <p className="text-muted">
          La prise en charge débute par un diagnostic et un devis réalisés par
          téléphone, afin d’évaluer la situation et de proposer une solution
          adaptée sans délai. Lors du premier passage, le traitement de
          dératisation est mis en place immédiatement.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="card p-6">
            <div className="font-extrabold">Postes d’appâtage sécurisés</div>
            <p className="mt-2 text-muted">
              Installation de postes adaptés aux habitations.
            </p>
          </div>

          <div className="card p-6">
            <div className="font-extrabold">Appâts professionnels</div>
            <p className="mt-2 text-muted">
              Produits rodenticides conformes à la réglementation.
            </p>
          </div>

          <div className="card p-6">
            <div className="font-extrabold">Approche mixte ajustée</div>
            <p className="mt-2 text-muted">
              Méthode adaptée au type de rongeur et au niveau d’infestation.
            </p>
          </div>

          <div className="card p-6">
            <div className="font-extrabold">Prévention ciblée</div>
            <p className="mt-2 text-muted">
              Calfeutrage + recommandations pour limiter les récidives.
            </p>
          </div>
        </div>

        <p className="mt-5 text-muted">
          Un second passage, réalisé <strong>30 jours</strong> plus tard, permet
          de contrôler l’efficacité du traitement et d’ajuster si nécessaire.
        </p>
      </Split>

      {/* Tarifs (photo à gauche / texte à droite) */}
      <Split
        reverse
        title="Intervention rapide et tarifs clairs"
        image={
          <Image
            src="/images/flash/truck-hood.jpg"
            alt="Flash Nuisible - intervention rapide"
            width={1200}
            height={900}
            className="h-[280px] md:h-[360px] w-full object-cover"
          />
        }
      >
        <p className="text-muted">
          Flash Nuisible intervient généralement sous <strong>48h</strong>,{" "}
          <strong>7 jours sur 7</strong>, pour les problématiques de rats,
          souris et rongeurs.
        </p>

        <p className="mt-3 text-muted">
          Les prestations de dératisation sont proposées avec des{" "}
          <strong>tarifs forfaitaires annoncés à l’avance</strong>, à partir de{" "}
          <strong>75 €</strong>, avec un devis gratuit par téléphone. Les prix
          sont adaptés à la situation réelle, <strong>sans surprise</strong>.
        </p>
      </Split>

      {/* Texte pleine largeur */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Un doute sur la présence de rongeurs ?
              </h2>
              <p className="mt-4 text-muted">
                Beaucoup de particuliers hésitent face à des traces ou des
                excréments sans être certains qu’il s’agisse de rongeurs. En cas
                de doute, le plus simple reste de nous contacter : un échange
                permet rapidement de déterminer s’il s’agit d’un problème de
                rongeurs ou non, et d’éviter une intervention inutile.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Dératisation pour les professionnels
              </h2>
              <p className="mt-4 text-muted">
                Flash Nuisible propose également des solutions de dératisation
                pour les professionnels, avec la possibilité de contrats de
                suivi, dans le respect des normes sanitaires, des exigences
                HACCP et de l’environnement.{" "}
                <Link href="/professionnels" className="underline font-bold">
                  Découvrir la page Professionnels
                </Link>
                .
              </p>
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
