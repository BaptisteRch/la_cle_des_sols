import SiteHeader, { BRAND } from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "Politique de confidentialité — La clé des sols",
  description:
    "Comment La clé des sols collecte, utilise et protège vos données personnelles. Vos droits RGPD : accès, rectification, suppression, opposition.",
  alternates: { canonical: "/politique-confidentialite" },
  robots: { index: true, follow: true },
};

export default function PolitiqueConfidentialitePage() {
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
              RGPD & vie privée
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight">
              Politique de confidentialité
            </h1>
            <p className="mt-5 text-base md:text-lg text-black/70 max-w-2xl mx-auto">
              Vos données personnelles, leur usage, et vos droits — en toute
              transparence.
            </p>
          </div>
        </section>

        <section className="section bg-[var(--paper)]">
          <div className="mx-auto max-w-3xl px-6">
            <article className="card p-8 md:p-10 prose-legal">
              <h2 className="text-2xl font-extrabold tracking-tight">
                1. Responsable du traitement
              </h2>
              <p className="mt-3 text-muted">
                Le responsable du traitement des données collectées sur ce site
                est&nbsp;:
                <br />
                <strong>{BRAND.name}</strong>, [Adresse à compléter] —{" "}
                {BRAND.baseCity}
                <br />
                Téléphone&nbsp;:{" "}
                <a
                  href={BRAND.phoneHref}
                  className="text-[var(--brand)] hover:underline"
                >
                  {BRAND.phoneDisplay}
                </a>
                <br />
                E-mail&nbsp;:{" "}
                <a
                  href={BRAND.emailHref}
                  className="text-[var(--brand)] hover:underline"
                >
                  {BRAND.email}
                </a>
              </p>

              <h2 className="mt-10 text-2xl font-extrabold tracking-tight">
                2. Données collectées
              </h2>
              <p className="mt-3 text-muted">
                Nous collectons uniquement les données strictement nécessaires
                aux finalités décrites ci-dessous. Lorsque vous utilisez notre
                formulaire de contact ou nous appelez, nous pouvons recueillir&nbsp;:
              </p>
              <ul className="mt-3 list-disc pl-6 text-muted space-y-1">
                <li>Nom et prénom</li>
                <li>Adresse e-mail</li>
                <li>Numéro de téléphone</li>
                <li>Adresse postale (si nécessaire au devis)</li>
                <li>
                  Contenu de votre message et informations relatives à votre
                  demande
                </li>
              </ul>

              <h2 className="mt-10 text-2xl font-extrabold tracking-tight">
                3. Finalités du traitement
              </h2>
              <p className="mt-3 text-muted">
                Vos données sont traitées exclusivement pour&nbsp;:
              </p>
              <ul className="mt-3 list-disc pl-6 text-muted space-y-1">
                <li>Répondre à vos demandes de devis et de contact</li>
                <li>Réaliser les prestations de nettoyage demandées</li>
                <li>Assurer le suivi de la relation client</li>
                <li>
                  Respecter nos obligations légales et comptables (facturation,
                  archivage)
                </li>
              </ul>

              <h2 className="mt-10 text-2xl font-extrabold tracking-tight">
                4. Base légale
              </h2>
              <p className="mt-3 text-muted">
                Le traitement de vos données repose sur&nbsp;:
              </p>
              <ul className="mt-3 list-disc pl-6 text-muted space-y-1">
                <li>
                  <strong>Votre consentement</strong> (formulaire de contact)
                </li>
                <li>
                  <strong>L'exécution d'un contrat</strong> ou de mesures
                  précontractuelles (devis, prestation)
                </li>
                <li>
                  <strong>Le respect d'obligations légales</strong>{" "}
                  (comptabilité, fiscalité)
                </li>
              </ul>

              <h2 className="mt-10 text-2xl font-extrabold tracking-tight">
                5. Durée de conservation
              </h2>
              <p className="mt-3 text-muted">
                Vos données sont conservées pour la durée strictement
                nécessaire&nbsp;:
              </p>
              <ul className="mt-3 list-disc pl-6 text-muted space-y-1">
                <li>
                  <strong>Prospects (devis non concrétisé) :</strong> 3 ans à
                  compter du dernier contact
                </li>
                <li>
                  <strong>Clients :</strong> durée de la relation contractuelle
                  + 5 ans
                </li>
                <li>
                  <strong>Factures et documents comptables :</strong> 10 ans
                  (obligation légale)
                </li>
              </ul>

              <h2 className="mt-10 text-2xl font-extrabold tracking-tight">
                6. Destinataires des données
              </h2>
              <p className="mt-3 text-muted">
                Vos données sont destinées exclusivement à {BRAND.name} et à
                ses sous-traitants techniques (hébergement, messagerie,
                comptabilité), tenus à une obligation de confidentialité. Aucune
                donnée n'est cédée ni vendue à des tiers à des fins
                commerciales.
              </p>

              <h2 className="mt-10 text-2xl font-extrabold tracking-tight">
                7. Cookies
              </h2>
              <p className="mt-3 text-muted">
                Ce site utilise uniquement des cookies techniques strictement
                nécessaires à son bon fonctionnement, qui ne nécessitent pas de
                consentement préalable. Aucun cookie publicitaire ou de
                traçage tiers n'est déposé sans votre accord. Vous pouvez à
                tout moment configurer votre navigateur pour bloquer les
                cookies.
              </p>

              <h2 className="mt-10 text-2xl font-extrabold tracking-tight">
                8. Vos droits
              </h2>
              <p className="mt-3 text-muted">
                Conformément au Règlement général sur la protection des données
                (RGPD) et à la loi Informatique et Libertés, vous disposez
                des droits suivants&nbsp;:
              </p>
              <ul className="mt-3 list-disc pl-6 text-muted space-y-1">
                <li>Droit d'accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement (« droit à l'oubli »)</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit d'opposition</li>
                <li>Droit à la portabilité de vos données</li>
                <li>
                  Droit de définir des directives sur le sort de vos données
                  après votre décès
                </li>
              </ul>
              <p className="mt-4 text-muted">
                Pour exercer vos droits, contactez-nous par e-mail à{" "}
                <a
                  href={BRAND.emailHref}
                  className="text-[var(--brand)] hover:underline"
                >
                  {BRAND.email}
                </a>{" "}
                ou par téléphone au{" "}
                <a
                  href={BRAND.phoneHref}
                  className="text-[var(--brand)] hover:underline"
                >
                  {BRAND.phoneDisplay}
                </a>
                . Une réponse vous sera apportée dans un délai maximum de 1 mois.
              </p>

              <h2 className="mt-10 text-2xl font-extrabold tracking-tight">
                9. Réclamation
              </h2>
              <p className="mt-3 text-muted">
                Si vous estimez, après nous avoir contactés, que vos droits ne
                sont pas respectés, vous pouvez introduire une réclamation
                auprès de la <strong>CNIL</strong> (Commission nationale de
                l'informatique et des libertés)&nbsp;:{" "}
                <a
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--brand)] hover:underline"
                >
                  www.cnil.fr
                </a>
                .
              </p>

              <h2 className="mt-10 text-2xl font-extrabold tracking-tight">
                10. Sécurité
              </h2>
              <p className="mt-3 text-muted">
                Nous mettons en œuvre les mesures techniques et organisationnelles
                appropriées (HTTPS, hébergement sécurisé, accès restreints) pour
                garantir la confidentialité et l'intégrité de vos données.
              </p>

              <h2 className="mt-10 text-2xl font-extrabold tracking-tight">
                11. Modifications
              </h2>
              <p className="mt-3 text-muted">
                La présente politique peut être mise à jour à tout moment pour
                refléter les évolutions légales ou de nos pratiques. La version
                en vigueur est celle publiée sur cette page.
              </p>

              <p className="mt-10 text-sm text-muted/80 italic">
                Dernière mise à jour : avril 2026.
              </p>
            </article>

            <div className="mt-12 card p-8 text-center">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Une question sur vos données&nbsp;?
              </h2>
              <p className="mt-3 text-muted">
                Nous vous répondons sous quelques jours ouvrés.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a href={BRAND.emailHref} className="btn btn-primary">
                  Nous écrire
                </a>
                <a href={BRAND.phoneHref} className="btn btn-outline">
                  Appeler {BRAND.phoneDisplay}
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
