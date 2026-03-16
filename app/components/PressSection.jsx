// app/components/PressSection.jsx
import Image from "next/image";

export default function PressSection() {
  const articleUrl =
    "https://www.leprogres.fr/economie/2025/02/05/pourquoi-cet-etudiant-en-osteopathie-a-cree-une-societe-de-deratisation";

  return (
    <section className="section">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] items-center">
          {/* Texte */}
          <div className="card p-6 md:p-8">
            <p className="text-sm font-semibold text-soft">
              Flash Nuisible dans la presse
            </p>

            <h2 className="mt-2 text-2xl md:text-3xl font-extrabold tracking-tight">
              Le Progrès met en lumière la création de Flash Nuisible
            </h2>

            <p className="mt-4 text-muted leading-relaxed">
              En <strong>février 2025</strong>, le quotidien régional{" "}
              <strong>Le Progrès</strong> a consacré un article à la création de
              Flash Nuisible, entreprise spécialisée dans la lutte contre les
              nuisibles, fondée par <strong>Lucas Flacher</strong>.
            </p>

            <p className="mt-4 text-muted leading-relaxed">
              L’article revient sur le parcours de Lucas, alors étudiant en
              ostéopathie, et sur les raisons qui l’ont poussé à créer Flash
              Nuisible : proposer des interventions réactives, efficaces et
              professionnelles face aux problématiques de dératisation,
              désinsectisation et autres nuisibles, aussi bien pour les
              particuliers que pour les professionnels.
            </p>

            <p className="mt-4 text-muted leading-relaxed">
              Cette mise en avant par un média reconnu souligne le sérieux de la
              démarche, l’ancrage local de l’entreprise et la volonté de
              répondre à une réelle demande sur le territoire.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="btn btn-primary"
                href={articleUrl}
                target="_blank"
                rel="noopener"
              >
                📰 Lire l’article sur Le Progrès
              </a>
            </div>

            <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-soft">
              <p>
                <strong>Pourquoi c’est important pour nos clients?</strong>
              </p>
              <p className="py-2">
                Être mentionné par un média régional de référence comme Le
                Progrès est une reconnaissance du travail réalisé sur le terrain
                et de l’engagement de Flash Nuisible à offrir des prestations
                fiables, transparentes et adaptées aux besoins locaux.
              </p>
              <p>
                Flash Nuisible continue aujourd’hui d’accompagner particuliers
                et professionnels avec la même exigence : diagnostic précis,
                solutions adaptées et suivi sérieux.
              </p>
            </div>
          </div>

          {/* Visuel */}
          <a
            href={articleUrl}
            target="_blank"
            rel="noopener"
            className="group relative card overflow-hidden"
            aria-label="Lire l’article du Progrès"
          >
            <Image
              src="/images/presse.jpg"
              alt="Flash Nuisible dans la presse (Le Progrès)"
              width={1400}
              height={1000}
              className="w-full h-[260px] md:h-[420px] object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-black/15 group-hover:bg-black/35 transition-colors" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-black shadow">
                <span>Article “Le Progrès”</span>
                <span aria-hidden>→</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
