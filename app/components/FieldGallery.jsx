import Image from "next/image";
import Reveal from "./Reveal";

export default function FieldGallery() {
  const photos = [
    {
      src: "/images/laclesessols/van-side.jpg",
      alt: "Véhicule La clé des sols à Saint-Étienne",
    },
    {
      src: "/images/laclesessols/intervention-1.jpg",
      alt: "Intervention de nettoyage professionnel",
    },
    {
      src: "/images/laclesessols/intervention-2.jpg",
      alt: "Remise en état après chantier",
    },
  ];

  return (
    <section className="section bg-[var(--paper)]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.1fr] items-end">
          <Reveal direction="left">
            <div>
              <span className="badge">Qui sommes-nous</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">
                La Clé des Sols
              </h2>

              <div className="mt-4 h-[3px] w-20 bg-[var(--brand)] rounded-full" />

              <p className="mt-6 text-muted max-w-xl">
                Depuis plus de <b>20 ans</b>, nous accompagnons entreprises,
                collectivités et particuliers pour l'entretien de leurs locaux,
                le nettoyage technique et les interventions spécialisées.
              </p>

              <p className="mt-3 text-muted max-w-xl">
                Nettoyage régulier, remise en état après travaux, entretien
                spécifique : nous adaptons nos méthodes à chaque situation.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-black/70">
                <li className="flex items-center gap-2">
                  <span
                    className="inline-flex h-2 w-2 rounded-full bg-[var(--brand)]"
                    aria-hidden="true"
                  />
                  Devis gratuit • Réponse rapide
                </li>
                <li className="flex items-center gap-2">
                  <span
                    className="inline-flex h-2 w-2 rounded-full bg-[var(--brand)]"
                    aria-hidden="true"
                  />
                  Propreté, réactivité et travail soigné au cœur de notre engagement.
                </li>
              </ul>

              <div className="mt-7 grid gap-3 sm:grid-cols-1">
                <div className="rounded-2xl p-4 bg-white/50 backdrop-blur ring-1 ring-black/10">
                  <div className="text-sm font-semibold text-black/70">
                    Nos agents polyvalents et formés peuvent intervenir
                    rapidement, avec des interventions possibles sous 2 heures
                    en cas d'urgence.
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Gallery */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {photos.map((p, idx) => (
            <Reveal key={p.src} direction="up" delay={idx * 120}>
              <figure className="card overflow-hidden rounded-3xl group relative">
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={1200}
                  height={800}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white text-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  {p.alt}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
