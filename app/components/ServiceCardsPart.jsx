import Link from "next/link";

export default function ServiceCardsPart() {
  const items = [
    {
      title: "Nettoyage de vitre",
      desc: "petite description",
      href: "/particuliers/vitre",
    },
    {
      title: "Nettoyage régulier",
      desc: "Habitation ou appartement : entretien complet, nettoyage en profondeur et remise au propre.",
      href: "/particuliers/regulier",
    },
    {
      title: "Nettoyage ponctuel",
      desc: "Habitation ou appartement : entretien complet, nettoyage en profondeur et remise au propre.",
      href: "/particuliers/ponctuel",
    },
    {
      title: "Nettoyage de terrasse",
      desc: "petite description",
      href: "/particuliers/terrasse",
    },
  ];

  return (
    <section className="section bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Nos prestations pour les particuliers
          </h2>

          <div className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Des solutions adaptées aux particuliers, avec des méthodes et
            produits professionnels.
          </div>
        </div>
        <div className="mt-10">
          <div className="relative overflow-hidden rounded-2xl border bg-white shadow-sm p-8 md:p-10">
            {/* petit glow discret */}
            <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-teal-200/40 blur-3xl" />

            <div className="relative grid gap-6 md:grid-cols-[auto_1fr] items-start">
              {/* badge */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600 text-2xl">
                %
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
                  Bénéficiez de{" "}
                  <span className="text-teal-600">50 % de crédit d’impôt</span>
                </h3>

                <p className="mt-3 text-muted">
                  Grâce au dispositif de{" "}
                  <strong>
                    crédit d’impôt de 50 % pour les services à la personne
                  </strong>
                  , vous pouvez bénéficier d’un service de nettoyage
                  professionnel
                  <strong> à moitié prix</strong>.
                </p>

                <p className="mt-2 text-muted">
                  Une solution simple pour profiter d’un logement propre,
                  entretenu par des professionnels, tout en réduisant votre coût
                  réel.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
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
