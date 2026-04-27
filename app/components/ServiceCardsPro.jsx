"use client";

import Link from "next/link";
import { useRef } from "react";
import Reveal from "./Reveal";

const ICONS = {
  vitre: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 12h18M12 3v18" />
      <path d="M6 7l2-2M15 7l3-3" />
    </svg>
  ),
  regulier: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 12a9 9 0 1 0 3-6.7" />
      <path d="M3 4v5h5" />
    </svg>
  ),
  chantier: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2l9 5-9 5-9-5 9-5z" />
      <path d="M3 12l9 5 9-5M3 17l9 5 9-5" />
    </svg>
  ),
  fin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 11l3 3 8-8" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  ),
  sol: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 20h18M5 20V10l7-5 7 5v10" />
      <path d="M9 20v-6h6v6" />
    </svg>
  ),
  particulier: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
};

export default function ServiceCardsPro() {
  const items = [
    {
      icon: ICONS.vitre,
      title: "Nettoyage de vitre",
      desc: "Nettoyage sur petite et grande hauteur, perche eau pure jusqu'à 15m.",
      href: "/nettoyage_vitre",
    },
    {
      icon: ICONS.regulier,
      title: "Nettoyage régulier",
      desc: "Salle de sport, bureaux, commerces… entretien complet et remise au propre.",
      href: "/regulier",
    },
    {
      icon: ICONS.chantier,
      title: "Bases de vie de chantier",
      desc: "Vestiaires, réfectoires, sanitaires, entretien des bungalows.",
      href: "/vie_de_chantier",
    },
    {
      icon: ICONS.fin,
      title: "Fin de chantier",
      desc: "En cours de chantier, OPR, nettoyage final avant livraison.",
      href: "/fin_de_chantier",
    },
    {
      icon: ICONS.sol,
      title: "Remise en état de sols",
      desc: "Shampouinage moquette, dépoussiérage, décapage et cristallisation.",
      href: "/etat_de_sols",
    },
    {
      icon: ICONS.particulier,
      title: "Particuliers",
      desc: "Prestations à domicile avec 50% de crédit d'impôt.",
      href: "/particuliers",
      highlight: true,
    },
  ];

  function onMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <section id="prestations-inner" className="section bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal direction="up">
          <div className="text-center">
            <span className="badge">Nos prestations</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">
              Nos prestations de nettoyage
            </h2>

            <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
              Des solutions adaptées aux particuliers et aux professionnels,
              avec des méthodes et produits professionnels.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, idx) => (
            <Reveal key={it.title} direction="up" delay={idx * 70}>
              <Link
                href={it.href}
                onMouseMove={onMouseMove}
                className={`card-clic card-fancy p-7 flex flex-col justify-between group h-full ${
                  it.highlight ? "ring-2 ring-[var(--brand)]/30" : ""
                }`}
              >
                <div>
                  <div className="h-12 w-12 rounded-xl bg-[var(--brand)]/10 text-[var(--brand)] flex items-center justify-center mb-5 transition group-hover:scale-110 group-hover:bg-[var(--brand)] group-hover:text-white">
                    <div className="h-6 w-6">{it.icon}</div>
                  </div>

                  <div className="text-xl font-semibold tracking-tight group-hover:text-[var(--brand)] transition-colors">
                    {it.title}
                  </div>

                  {it.highlight && (
                    <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-[var(--accent)]/25 ring-1 ring-[var(--accent)]/40 px-2.5 py-0.5 text-xs font-semibold">
                      50% crédit d'impôt
                    </div>
                  )}

                  <div className="mt-3 text-muted leading-relaxed text-sm">
                    {it.desc}
                  </div>
                </div>

                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand)]">
                  En savoir plus
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
