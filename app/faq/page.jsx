import SiteHeader, { BRAND } from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import SeoJsonLd from "../components/SeoJsonLd";
import FAQAccordion from "./FAQAccordion";

export const metadata = {
  title: "FAQ — La clé des sols, nettoyage professionnel à Saint-Étienne",
  description:
    "Questions fréquentes sur nos prestations de nettoyage : tarifs, crédit d'impôt 50%, délais, zones d'intervention, fin de chantier, vitres en hauteur.",
  alternates: { canonical: "/faq" },
};

const FAQ_ITEMS = [
  {
    q: "Sous quel délai intervenez-vous ?",
    a: "Nous proposons un rendez-vous sous 48h ouvrées pour toute demande standard. En cas d'urgence (sinistre, fin de chantier serrée, remise en état express), nous pouvons intervenir sous 2 heures selon la zone.",
  },
  {
    q: "Quelles sont vos zones d'intervention ?",
    a: "Basés à Saint-Étienne, nous intervenons dans toute la Loire (42), le Rhône (69) et la Haute-Loire (43), ainsi que plus largement en région Auvergne-Rhône-Alpes pour les chantiers importants.",
  },
  {
    q: "Le devis est-il gratuit ?",
    a: "Oui, tous nos devis sont gratuits et sans engagement. Nous nous déplaçons si nécessaire pour évaluer précisément votre besoin (surface, accessibilité, contraintes techniques).",
  },
  {
    q: "Les particuliers bénéficient-ils du crédit d'impôt ?",
    a: "Oui. En tant que société de services à la personne agréée, nos prestations d'entretien chez les particuliers ouvrent droit à un crédit d'impôt de 50% sur les sommes versées, dans la limite des plafonds légaux.",
  },
  {
    q: "Quelles prestations proposez-vous ?",
    a: "Nettoyage régulier de bureaux et commerces, nettoyage de vitres (y compris en hauteur avec perche eau pure jusqu'à 15m), nettoyage de fin de chantier, bases de vie de chantier, remise en état de sols (shampouinage moquette, cristallisation, décapage).",
  },
  {
    q: "Travaillez-vous avec des produits écologiques ?",
    a: "Oui, nous privilégions les produits éco-labellisés et les méthodes sobres en eau (technique vitres à l'eau pure, microfibres). Nous adaptons les produits au support et aux éventuelles sensibilités du lieu.",
  },
  {
    q: "Pouvez-vous intervenir en dehors des heures de bureau ?",
    a: "Oui. Pour les entreprises, nous organisons généralement les interventions avant ou après les heures d'ouverture, ainsi que le week-end si besoin, pour ne pas perturber votre activité.",
  },
  {
    q: "Êtes-vous assurés ?",
    a: "Oui, nous disposons d'une assurance responsabilité civile professionnelle couvrant l'ensemble de nos interventions. Attestation fournie sur simple demande.",
  },
];

export default function FAQPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <div className="page">
      <SeoJsonLd json={faqJsonLd} />
      <SiteHeader />
      <main id="main-content">
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[#a1b7d4]" />
            <div className="absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_25%,black,transparent)] opacity-40 bg-white" />
          </div>

          <div className="relative mx-auto max-w-4xl px-6 py-16 md:py-20 text-center">
            <span className="rounded-full px-4 py-1.5 text-xs font-semibold bg-white/70 ring-1 ring-black/10 backdrop-blur">
              Questions fréquentes
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight">
              On a les réponses à vos questions.
            </h1>
            <p className="mt-5 text-base md:text-lg text-black/70 max-w-2xl mx-auto">
              Tout ce qu'il faut savoir avant de nous confier votre nettoyage :
              délais, zones, tarifs, crédit d'impôt.
            </p>
          </div>
        </section>

        <section className="section bg-[var(--paper)]">
          <div className="mx-auto max-w-3xl px-6">
            <FAQAccordion items={FAQ_ITEMS} />

            <div className="mt-12 card p-8 text-center">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Une question non listée&nbsp;?
              </h2>
              <p className="mt-3 text-muted">
                Contactez-nous, nous vous répondons rapidement.
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
