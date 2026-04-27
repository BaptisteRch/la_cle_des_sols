// app/page.jsx
import SiteFooter from "./components/SiteFooter";
import ContactSection from "./components/ContactSection";
import ServiceCardsPro from "./components/ServiceCardsPro";
import SiteHeader, { BRAND } from "./components/SiteHeader";
import ReviewsCarousel from "./components/ReviewsCarousel";
import FieldGallery from "./components/FieldGallery.jsx";
import Collaborations from "./components/Collaborations";
import StatsSection from "./components/StatsSection";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <div className="page">
      <SiteHeader />
      <main id="main-content">
        {/* HERO */}
        <section
          className="relative overflow-hidden"
          aria-labelledby="hero-title"
        >
          {/* Background */}
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#8399b6] via-[#a1b7d4] to-[#c5d5ea]" />

            {/* animated blobs */}
            <div className="hero-blob absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl opacity-30 bg-[#14a6c8]/30" />
            <div className="hero-blob-delay absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full blur-3xl opacity-25 bg-[#f4c84a]/25" />
            <div className="hero-blob absolute top-1/3 right-1/4 h-64 w-64 rounded-full blur-3xl opacity-20 bg-white/50" />

            {/* vignette */}
            <div className="absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_25%,black,transparent)] opacity-40 bg-white" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
            <div className="grid gap-12 md:grid-cols-[1.05fr_0.95fr] items-center">
              {/* COLONNE TEXTE */}
              <Reveal direction="left">
                <div>
                  {/* badges */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold bg-white/75 ring-1 ring-black/10 backdrop-blur">
                      <span
                        className="dot-live h-2 w-2 rounded-full bg-green-500"
                        aria-hidden="true"
                      />
                      Disponibles maintenant
                    </span>

                    <span className="rounded-full px-4 py-1.5 text-xs font-semibold bg-white/60 ring-1 ring-black/10 text-black/70">
                      20 ans d'expérience
                    </span>

                    <span className="rounded-full px-4 py-1.5 text-xs font-semibold bg-white/60 ring-1 ring-black/10 text-black/70">
                      RDV sous 48h
                    </span>
                  </div>

                  {/* Titre */}
                  <h1
                    id="hero-title"
                    className="mt-7 font-extrabold tracking-tight leading-[1.05]"
                  >
                    <span className="block italic text-white text-3xl md:text-5xl drop-shadow-sm">
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
                      className="inline-flex items-center justify-center h-12 px-6 rounded-full font-semibold bg-white/80 ring-1 ring-black/15 text-black/80 hover:bg-white transition"
                      href="#contact"
                    >
                      Demander un devis
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* BLOC VIDEO */}
              <Reveal direction="right" delay={150}>
                <div className="relative">
                  <div
                    className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-black/5 blur-2xl"
                    aria-hidden="true"
                  />

                  <div className="overflow-hidden rounded-[26px] bg-white/65 backdrop-blur ring-1 ring-black/10 shadow-xl">
                    <div className="p-4">
                      <div className="relative w-full aspect-video overflow-hidden rounded-2xl bg-black/10 ring-1 ring-black/10">
                        <iframe
                          className="absolute inset-0 h-full w-full"
                          src="https://www.youtube.com/embed/BhRk8F9-jWY?rel=0&modestbranding=1"
                          title="Présentation — La clé des sols"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          loading="lazy"
                        />

                        <div
                          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 to-transparent"
                          aria-hidden="true"
                        />
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-4">
                        <div className="text-sm font-semibold text-black/80">
                          Présentation en 1 minute
                        </div>

                        <div className="text-xs text-black/60">
                          Nettoyage • Remise en état • Entretien
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="prestations">
          <ServiceCardsPro />
        </section>

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
