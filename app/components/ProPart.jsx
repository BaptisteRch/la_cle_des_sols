import Link from "next/link";

export default function ProPart() {
  const items = [
    {
      title: "PROFESSIONNELS",
      desc: "Bureaux, commerces, collectivités : entretien régulier, traçabilité et prestations adaptées à votre activité.",
      href: "/professionnels",
    },
    {
      title: "PARTICULIERS",
      desc: "Maison et appartement : entretien complet, nettoyage en profondeur et remise au propre.",
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
        <div className="mt-14 grid gap-6 grid-cols-1 sm:grid-cols-2">
          {items.map((it) => (
            <Link
              key={it.title}
              href={it.href}
              className="card-clic p-7 flex flex-col justify-between group"
            >
              <div>
                <div className="text-center text-xl font-semibold tracking-tight group-hover:text-[var(--brand)] transition-colors">
                  {it.title}
                </div>

                <div className="text-center mt-3 text-muted leading-relaxed text-sm">
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
