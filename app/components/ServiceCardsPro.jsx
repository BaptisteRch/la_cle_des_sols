import Link from "next/link";

export default function ServiceCardsPart() {
  const items = [
    {
      title: "Nettoyage de vitre",
      desc: "petite description",
      href: "/nettoyage_vitre",
    },
    {
      title: "Nettoyage régulier",
      desc: "Salle de sport, bureaux, commerces... : entretien complet, nettoyage en profondeur et remise au propre.",
      href: "/regulier",
    },
    {
      title: "Nettoyage de bases de vie de chantier",
      desc: "petite description",
      href: "/vie_de_chantier",
    },
    {
      title: "Nettoyage de fin de chantier",
      desc: "petite description",
      href: "/fin_de_chantier",
    },
    {
      title: "Remise en état de sols",
      desc: "Shampouinage moquette, nettoyage ateliers usines (sol, dépoussiérage)",
      href: "/etat_de_sols",
    },
    {
      title: "Particuliers",
      desc: (
        <div>
          <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
            Bénéficiez de{" "}
            <span className="text-teal-600">50 % de crédit d’impôt</span>
          </h3>
        </div>
      ),
      href: "/particuliers",
    },
  ];

  return (
    <section className="section bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Nos prestations de nettoyage
          </h2>

          <div className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Des solutions adaptées aux particuliers et aux professionnels, avec
            des méthodes et produits professionnels.
          </div>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <Link
              key={it.title}
              href={it.href}
              className="card-clic p-7 flex flex-col justify-between group"
            >
              <div>
                <div className="text-xl font-semibold tracking-tight group-hover:text-[var(--brand)] transition-colors">
                  {it.title}
                </div>

                <div className="mt-3 text-muted leading-relaxed text-sm">
                  {it.desc}
                </div>
              </div>

              <div className="mt-6 text-sm font-semibold text-[var(--brand)]">
                En savoir plus →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
