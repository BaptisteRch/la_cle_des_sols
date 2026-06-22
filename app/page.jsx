// app/page.jsx
import SiteFooter from "./components/SiteFooter";
import ContactSection from "./components/ContactSection";
import ServiceCardsPro from "./components/ServiceCardsPro";
import RealisationsTeaser from "./components/RealisationsTeaser";
import SiteHeader, { BRAND } from "./components/SiteHeader";
import ReviewsCarousel from "./components/ReviewsCarousel";
import FieldGallery from "./components/FieldGallery.jsx";
import Collaborations from "./components/Collaborations";
import StatsSection from "./components/StatsSection";
import HeroVideo from "./components/HeroVideo";
import GoogleReviewBadge from "./components/GoogleReviewBadge";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <div className="page">
      <SiteHeader />
      <main id="main-content">
        {/* HERO */}
        <section
          className="relative overflow-hidden bg-[var(--paper2)]"
          aria-labelledby="hero-title"
        >
          <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
            <div className="grid gap-12 md:grid-cols-[1.05fr_0.95fr] items-center">
              {/* COLONNE TEXTE */}
              <Reveal direction="left">
                <div>
                  {/* Preuve sociale + réassurance */}
                  <div className="flex flex-wrap items-center gap-3">
                    <GoogleReviewBadge rating="5,0" href={BRAND.reviewUrl} />

                    <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold bg-white ring-1 ring-black/10 text-black/70">
                      <span
                        className="dot-live h-2 w-2 rounded-full bg-green-500"
                        aria-hidden="true"
                      />
                      Disponibles maintenant
                    </span>

                    <span className="rounded-full px-4 py-1.5 text-xs font-semibold bg-white ring-1 ring-black/10 text-black/70">
                      20 ans d'expérience
                    </span>
                  </div>

                  {/* Titre */}
                  <h1
                    id="hero-title"
                    className="mt-7 font-extrabold tracking-tight leading-[1.05]"
                  >
                    <span className="block text-[var(--brand2)] text-3xl md:text-5xl">
                      Entreprise de propreté à Saint-Étienne
                    </span>

                    <span className="block mt-4 text-4xl md:text-6xl text-black/85">
                      L'ouverture vers un monde{" "}
                      <span className="text-gradient">plus propre</span>&nbsp;!
                    </span>
                  </h1>

                  <p className="mt-6 max-w-xl text-base md:text-lg text-black/75 leading-relaxed">
                    Basée à <b>Saint-Étienne</b>, notre entreprise familiale de
                    propreté intervient dans{" "}
                    <b>toute la région Auvergne-Rhône-Alpes</b> pour assurer des
                    prestations de nettoyage fiables et professionnelles.
                  </p>

                  {/* CTA */}
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <a
                      className="btn btn-primary h-12 px-6 rounded-full"
                      href={BRAND.phoneHref}
                      aria-label={`Appeler La clé des sols au ${BRAND.phoneDisplay}`}
                    >
                      Appeler {BRAND.phoneDisplay}
                    </a>

                    <a
                      className="btn btn-outline h-12 px-6 rounded-full"
                      href="#contact"
                    >
                      Demander un devis
                    </a>
                  </div>

                  {/* Réassurance sous CTA */}
                  <p className="mt-5 text-sm text-black/60">
                    Devis gratuit • Intervention possible sous 48h • Sans
                    engagement
                  </p>
                </div>
              </Reveal>

              {/* BLOC VIDEO */}
              <Reveal direction="right" delay={150}>
                <HeroVideo />
              </Reveal>
            </div>
          </div>
        </section>

        <section id="prestations">
          <ServiceCardsPro />
        </section>

        <RealisationsTeaser />

        {/* <StatsSection /> */}

        <FieldGallery />

        <Collaborations />

        <ReviewsCarousel reviewUrl={BRAND.reviewUrl} />

        {/* CONTACT */}
        <section
          className="section bg-beige"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="mx-auto max-w-7xl px-6">
            <ContactSection />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
