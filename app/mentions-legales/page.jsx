import SiteHeader, { BRAND } from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "Mentions légales — La clé des sols",
  description:
    "Mentions légales du site La clé des sols, société de nettoyage à Saint-Étienne : éditeur, hébergeur, propriété intellectuelle.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: true, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <div className="page">
      <SiteHeader />
      <main id="main-content">
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[#a1b7d4]" />
            <div className="absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_25%,black,transparent)] opacity-40 bg-white" />
          </div>

          <div className="relative mx-auto max-w-4xl px-6 py-16 md:py-20 text-center">
            <span className="rounded-full px-4 py-1.5 text-xs font-semibold bg-white/70 ring-1 ring-black/10 backdrop-blur">
              Informations légales
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight">
              Mentions légales
            </h1>
            <p className="mt-5 text-base md:text-lg text-black/70 max-w-2xl mx-auto">
              Conformément à la loi pour la confiance dans l'économie numérique
              (LCEN) du 21 juin 2004.
            </p>
          </div>
        </section>

        <section className="section bg-[var(--paper)]">
          <div className="mx-auto max-w-3xl px-6">
            <article className="card p-8 md:p-10 prose-legal">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Éditeur du site
              </h2>
              <p className="mt-3 text-muted">
                <strong>Raison sociale :</strong> La clé des sols
                <br />
                <strong>Forme juridique :</strong> [À compléter — SARL / EURL /
                SAS]
                <br />
                <strong>Capital social :</strong> [À compléter] €
                <br />
                <strong>Siège social :</strong> [Adresse à compléter] —{" "}
                {BRAND.baseCity}
                <br />
                <strong>SIRET :</strong> [À compléter]
                <br />
                <strong>RCS :</strong> [À compléter] Saint-Étienne
                <br />
                <strong>N° TVA intracommunautaire :</strong> [À compléter]
                <br />
                <strong>Directeur de la publication :</strong> G. Magand
              </p>

              <h2 className="mt-10 text-2xl font-extrabold tracking-tight">
                Contact
              </h2>
              <p className="mt-3 text-muted">
                <strong>Téléphone :</strong>{" "}
                <a
                  href={BRAND.phoneHref}
                  className="text-[var(--brand)] hover:underline"
                >
                  {BRAND.phoneDisplay}
                </a>
                <br />
                <strong>E-mail :</strong>{" "}
                <a
                  href={BRAND.emailHref}
                  className="text-[var(--brand)] hover:underline"
                >
                  {BRAND.email}
                </a>
              </p>

              <h2 className="mt-10 text-2xl font-extrabold tracking-tight">
                Hébergeur
              </h2>
              <p className="mt-3 text-muted">
                <strong>Vercel Inc.</strong>
                <br />
                440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
                <br />
                Site web :{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--brand)] hover:underline"
                >
                  vercel.com
                </a>
              </p>

              <h2 className="mt-10 text-2xl font-extrabold tracking-tight">
                Propriété intellectuelle
              </h2>
              <p className="mt-3 text-muted">
                L'ensemble du contenu du site (textes, images, logos,
                graphismes, vidéos, structure) est la propriété exclusive de{" "}
                {BRAND.name} ou de ses partenaires, et est protégé par le droit
                français et international de la propriété intellectuelle. Toute
                reproduction, représentation, modification, publication ou
                adaptation, totale ou partielle, est interdite sans
                autorisation écrite préalable.
              </p>

              <h2 className="mt-10 text-2xl font-extrabold tracking-tight">
                Crédits photos
              </h2>
              <p className="mt-3 text-muted">
                Photographies : {BRAND.name} — tous droits réservés. Certaines
                images peuvent être issues de banques d'images sous licence.
              </p>

              <h2 className="mt-10 text-2xl font-extrabold tracking-tight">
                Liens hypertextes
              </h2>
              <p className="mt-3 text-muted">
                Le site peut contenir des liens vers des sites tiers.{" "}
                {BRAND.name} n'exerce aucun contrôle sur ces sites et ne saurait
                être tenue responsable de leur contenu.
              </p>

              <h2 className="mt-10 text-2xl font-extrabold tracking-tight">
                Droit applicable
              </h2>
              <p className="mt-3 text-muted">
                Le présent site et ses mentions légales sont régis par le droit
                français. En cas de litige, les tribunaux français seront seuls
                compétents.
              </p>

              <p className="mt-10 text-sm text-muted/80 italic">
                Dernière mise à jour : avril 2026.
              </p>
            </article>

            <div className="mt-12 card p-8 text-center">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Une question&nbsp;?
              </h2>
              <p className="mt-3 text-muted">
                Notre équipe vous répond rapidement.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a href={BRAND.phoneHref} className="btn btn-primary">
                  Appeler {BRAND.phoneDisplay}
                </a>
                <a href="/#contact" className="btn btn-outline">
                  Demander un devis
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
