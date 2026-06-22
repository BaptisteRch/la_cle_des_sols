// app/realisations/page.jsx
import Link from "next/link";

import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactSection from "../components/ContactSection";
import BeforeAfter from "../components/BeforeAfter";
import { REALISATIONS } from "../lib/realisations";

export const metadata = {
  title: "Nos réalisations avant / après — La Clé des Sols Saint-Étienne",
  description:
    "Découvrez nos chantiers de nettoyage en photos avant/après à Saint-Étienne : vitres, remise en état des sols, fin de chantier et entretien. Le résultat parle de lui-même.",
  alternates: { canonical: "/realisations" },
};

export default function RealisationsPage() {
  return (
    <main className="page">
      <SiteHeader />

      {/* HERO */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Nos réalisations
          </h1>
          <p className="mt-3 max-w-2xl text-muted font-semibold">
            Le résultat parle de lui-même. Faites glisser le curseur pour
            comparer l&apos;avant et l&apos;après de nos interventions.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="btn btn-primary">
              Demander un devis gratuit
            </a>
            <Link href="/#prestations" className="btn btn-ghost">
              Voir nos prestations
            </Link>
          </div>
        </div>
      </section>

      {/* GALERIE AVANT / APRÈS */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {REALISATIONS.map((r, i) => (
              <BeforeAfter
                key={r.label}
                beforeSrc={r.beforeSrc}
                afterSrc={r.afterSrc}
                beforeAlt={r.beforeAlt}
                afterAlt={r.afterAlt}
                label={r.label}
                priority={i === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* EN VIDÉO */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Nos interventions en vidéo
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Le travail de nos équipes sur le terrain, en conditions réelles.
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {[
              {
                src: "/videos/realisation-1.mp4",
                label: "Intervention de nettoyage sur le terrain",
              },
              {
                src: "/videos/realisation-2.mp4",
                label: "Nettoyage en conditions réelles par La clé des sols",
              },
            ].map((v) => (
              <figure key={v.src} className="card overflow-hidden">
                <video
                  src={v.src}
                  className="aspect-video w-full object-cover"
                  controls
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={v.label}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* BLOC CONFIANCE */}
      <section className="section">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Et si le prochain chantier était le vôtre ?
          </h2>
          <p className="mt-4 text-muted">
            Chaque intervention est réalisée avec le même niveau d&apos;exigence,
            que ce soit pour un commerce, des bureaux, une copropriété ou un
            particulier. Demandez votre devis gratuit, réponse sous 48h.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="#contact" className="btn btn-primary">
              Obtenir mon devis gratuit
            </a>
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
