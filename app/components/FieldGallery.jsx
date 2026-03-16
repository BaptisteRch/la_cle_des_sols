import Image from "next/image";

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
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              La clé des sols
            </h2>

            <div className="mt-4 h-[3px] w-20 bg-[var(--brand)] rounded-full" />

            <p className="mt-6 text-muted max-w-xl">
              Depuis plus de <b>20 ans</b>, nous accompagnons entreprises,
              collectivités et particuliers pour l’entretien de leurs locaux, le
              nettoyage technique et les interventions spécialisées.
            </p>

            <p className="mt-3 text-muted max-w-xl">
              Nettoyage régulier, remise en état après travaux, entretien
              spécifique : nous adaptons nos méthodes à chaque situation.
            </p>

            <div className="flex items-center gap-2 text-sm text-black/60 mt-3">
              <span className="inline-flex h-2 w-2 rounded-full bg-black/30" />
              Devis gratuit • Réponse rapide
            </div>
            <div className="flex items-center gap-2 text-sm text-black/60">
              <span className="inline-flex h-2 w-2 rounded-full bg-black/30" />
              Propreté, réactivité et travail soigné sont au cœur de notre
              engagement.
            </div>

            {/* infos */}
            <div className="mt-7 grid gap-3 sm:grid-cols-1">
              <div className="rounded-2xl p-4 bg-white/50 backdrop-blur ring-1 ring-black/10">
                <div className="text-s font-semibold text-black/70">
                  Nos agents polyvalents et formés peuvent intervenir rapidement
                  pour répondre à vos besoins, avec des interventions possibles
                  sous 2 heures en cas d’urgence.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {photos.map((p) => (
            <div key={p.src} className="card overflow-hidden rounded-3xl group">
              <Image
                src={p.src}
                alt={p.alt}
                width={1200}
                height={800}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
