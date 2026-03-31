import Image from "next/image";

export default function Collaborations() {
  const photos = [
    { src: "/images/mondialbox2.jpg", alt: "Logo MondialBox" },
    { src: "/images/laposte.jpg", alt: "Logo La Poste" },
    { src: "/images/sncf2.jpg", alt: "Logo SNCF" },
    { src: "/images/suez2.jpg", alt: "Logo SUEZ" },
    { src: "/images/nestenn.jpg", alt: "Logo Nestenn" },
    { src: "/images/orpi.jpg", alt: "Logo Orpi" },
    { src: "/images/inter-nett.jpg", alt: "Logo Inter-nett" },
    { src: "/images/condamin.svg", alt: "Logo Condamin" },
    { src: "/images/kia.jpg", alt: "Logo Kia" },
    { src: "/images/victor.jpg", alt: "Logo Victor gestion" },
    { src: "/images/alain.jpg", alt: "Logo Alain Tronchet Immobilier" },
    { src: "/images/compagnie.svg", alt: "Logo La Compagnie des Déboucheurs" },
    { src: "/images/rivoire-paysage.jpg", alt: "Logo Rivoire Paysage" },
    { src: "/images/planb.jpg", alt: "Logo Plan B Nettoyage" },
    { src: "/images/cle-des-sols2.jpg", alt: "Logo La clé ses Sols" },
    { src: "/images/chazelle.jpg", alt: "Logo Chazelle Construction" },
  ];

  return (
    <section className="section">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-[1.1fr_0.9fr] items-end">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Ils ont fait confiance à La Clé des Sols.
            </h2>
            <p className="mt-2 text-muted">
              Quelques-uns de nos clients et partenaires.
            </p>
          </div>
        </div>

        <ul className="mt-8 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {photos.map((p) => (
            <li key={p.src}>
              <div
                className="
                  card h-28 sm:h-32
                  flex items-center justify-center
                  p-5
                  border border-black/5
                  shadow-sm
                  transition
                  hover:shadow-md hover:-translate-y-0.5
                "
              >
                <div className="relative w-full h-full">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                    className="
                      object-contain
                      [filter:grayscale(0%)]
                      opacity-80
                      transition
                      hover:[filter:grayscale(0%)]
                      hover:opacity-100
                      max-h-20 sm:max-h-24
                    "
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
