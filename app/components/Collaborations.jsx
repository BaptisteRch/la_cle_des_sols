import Image from "next/image";
import Reveal from "./Reveal";

export default function Collaborations() {
  const photos = [
    { src: "/images/mondialbox2.jpg", alt: "MondialBox — client La clé des sols" },
    { src: "/images/laposte.jpg", alt: "La Poste — client La clé des sols" },
    { src: "/images/sncf2.jpg", alt: "SNCF — client La clé des sols" },
    { src: "/images/suez2.jpg", alt: "SUEZ — client La clé des sols" },
    { src: "/images/nestenn.jpg", alt: "Nestenn Immobilier — client La clé des sols" },
    { src: "/images/orpi.jpg", alt: "Orpi — client La clé des sols" },
    { src: "/images/inter-nett.jpg", alt: "Inter-nett — partenaire La clé des sols" },
    { src: "/images/condamin.svg", alt: "Condamin — client La clé des sols" },
    { src: "/images/kia.jpg", alt: "Kia — client La clé des sols" },
    { src: "/images/victor.jpg", alt: "Victor Gestion — client La clé des sols" },
    { src: "/images/alain.jpg", alt: "Alain Tronchet Immobilier — client La clé des sols" },
    { src: "/images/compagnie.svg", alt: "La Compagnie des Déboucheurs — partenaire La clé des sols" },
    { src: "/images/rivoire-paysage.jpg", alt: "Rivoire Paysage — client La clé des sols" },
    { src: "/images/planb.jpg", alt: "Plan B Nettoyage — partenaire La clé des sols" },
    { src: "/images/cle-des-sols2.jpg", alt: "La clé des sols — logo" },
    { src: "/images/chazelle.jpg", alt: "Chazelle Construction — client La clé des sols" },
  ];

  return (
    <section className="section">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-[1.1fr_0.9fr] items-end">
            <div>
              <span className="badge">Références</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">
                Ils ont fait confiance à La Clé des Sols.
              </h2>
              <p className="mt-2 text-muted">
                Quelques-uns de nos clients et partenaires.
              </p>
            </div>
          </div>
        </Reveal>

        <ul className="mt-8 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {photos.map((p, idx) => (
            <Reveal as="li" key={p.src} direction="up" delay={idx * 40}>
              <div
                className="
                  card h-28 sm:h-32
                  flex items-center justify-center
                  p-5
                  border border-black/5
                  shadow-sm
                  transition
                  hover:shadow-md hover:-translate-y-0.5 hover:border-[var(--brand)]/30
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
                      grayscale
                      opacity-70
                      transition
                      hover:grayscale-0
                      hover:opacity-100
                      max-h-20 sm:max-h-24
                    "
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
