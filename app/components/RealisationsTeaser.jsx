// app/components/RealisationsTeaser.jsx
import Link from "next/link";
import BeforeAfter from "./BeforeAfter";
import { REALISATIONS } from "../lib/realisations";

export default function RealisationsTeaser() {
  const example = REALISATIONS[0]; // porte vitrée : avant taguée / après nette
  return (
    <section className="section" aria-labelledby="realisations-title">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,var(--brand2),var(--brand))] px-8 py-12 md:px-14 md:py-16 shadow-[var(--shadowBrand)]">
          {/* Halos décoratifs */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-[rgba(244,200,74,0.25)] blur-3xl"
          />

          <div className="relative grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
            {/* Texte */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white ring-1 ring-white/25">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                Galerie avant / après
              </span>

              <h2
                id="realisations-title"
                className="mt-5 text-3xl md:text-4xl font-extrabold tracking-tight text-white"
              >
                Nos réalisations
              </h2>

              <p className="mt-4 max-w-xl text-white/85 leading-relaxed">
                Le résultat parle de lui-même. Découvrez nos chantiers en photos
                avant/après : vitres, remise en état des sols, fin de chantier
                et entretien.
              </p>

              <div className="mt-7">
                <Link
                  href="/realisations"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 font-semibold text-[var(--brand2)] shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Voir nos réalisations
                  <svg
                    viewBox="0 0 24 24"
                    className="ml-2 h-5 w-5"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Exemple avant / après interactif (glisser pour comparer) */}
            <div>
              <BeforeAfter
                beforeSrc={example.beforeSrc}
                afterSrc={example.afterSrc}
                beforeAlt={example.beforeAlt}
                afterAlt={example.afterAlt}
                aspect="aspect-[4/3]"
              />
              <p className="mt-3 text-center text-sm font-medium text-white/80">
                Glissez le curseur pour comparer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
