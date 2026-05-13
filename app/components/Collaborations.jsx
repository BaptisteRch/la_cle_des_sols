import Image from "next/image";
import Reveal from "./Reveal";

export default function Collaborations() {
  const clients = [
    { name: "Chazelle", logo: "/images/clients/chazelle.webp" },
    { name: "SOROC", logo: "/images/clients/soroc.webp" },
    { name: "Obut", logo: "/images/clients/obut.webp" },
    { name: "CHU Saint-Étienne", logo: "/images/clients/CHU.webp" },
    { name: "Kadro Bois", logo: "/images/clients/kadro-bois.webp" },
    { name: "Christophe Roux Menuiserie", logo: "/images/clients/christophe-roux.webp" },
    { name: "2B Économiste", logo: "/images/clients/2b-economiste.webp" },
    { name: "Focal", logo: "/images/clients/focal.webp" },
    { name: "KTM Saint-Étienne", logo: "/images/clients/ktm.webp" },
    { name: "La Muscadine", logo: "/images/clients/la-muscadine.webp" },
    { name: "Le Chardon Bleu", logo: "/images/clients/le-chardon-bleu.webp" },
    { name: "Pyramid Travaux Spéciaux", logo: "/images/clients/pyramid.webp" },
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
          {clients.map((c, idx) => (
            <Reveal as="li" key={c.name} direction="up" delay={idx * 40}>
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
                    src={c.logo}
                    alt={`${c.name} — client La clé des sols`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                    className="
                      object-contain
                      [filter:grayscale(30%)]
                      opacity-90
                      transition
                      hover:[filter:grayscale(0%)]
                      hover:opacity-100
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
