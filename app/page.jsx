// app/page.jsx
import Image from "next/image";

import SiteFooter from "./components/SiteFooter";
import ContactSection from "./components/ContactSection";
import ServiceCardsPro from "./components/ServiceCardsPro";
import SiteHeader, { BRAND } from "./components/SiteHeader";
import ReviewsCarousel from "./components/ReviewsCarousel";
import ProPart from "./components/ProPart.jsx";
import FieldGallery from "./components/FieldGallery.jsx";

export default function Home() {
  return (
    <main className="page">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[#efe4d6]" />

          {/* grille */}
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(0,0,0,.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.35)_1px,transparent_1px)] [background-size:44px_44px]" />

          {/* halo doux */}
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl opacity-25 bg-black/10" />
          <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full blur-3xl opacity-15 bg-black/10" />

          {/* vignette */}
          <div className="absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_25%,black,transparent)] opacity-40 bg-white" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-[1.05fr_0.95fr] items-center">
            {/* COLONNE TEXTE */}
            <div>
              {/* badges */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full px-4 py-1.5 text-xs font-semibold bg-white/65 ring-1 ring-black/10 backdrop-blur">
                  Société de nettoyage • Saint-Étienne
                </span>

                <span className="rounded-full px-4 py-1.5 text-xs font-semibold bg-white/50 ring-1 ring-black/10 text-black/70">
                  20 ans d’expérience
                </span>

                <span className="rounded-full px-4 py-1.5 text-xs font-semibold bg-white/50 ring-1 ring-black/10 text-black/70">
                  RDV sous 48h
                </span>
              </div>

              {/* Titre */}
              <h1 className="mt-7 font-extrabold tracking-tight leading-[1.05]">
                <span className="block italic text-yellow-600 text-3xl md:text-5xl">
                  Entreprise de propreté a Saint-Étienne
                </span>

                <span className="block mt-4 text-4xl md:text-6xl text-black/85">
                  L’ouverture vers un monde plus propre !
                </span>
              </h1>

              {/* texte */}
              <p className="mt-6 max-w-xl text-base md:text-lg text-black/70 leading-relaxed">
                Basée à <b>Saint-Étienne</b>, notre entreprise familiale de
                propreté intervient dans{" "}
                <b>toute la région Auvergne-Rhône-Alpes</b> pour assurer des
                prestations de nettoyage fiables et professionnelles.
              </p>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  className="inline-flex items-center justify-center h-12 px-6 rounded-full font-semibold text-white shadow-sm ring-1 ring-black/10 bg-[#2ea7c7] hover:brightness-95 transition"
                  href={BRAND.phoneHref}
                >
                  Appeler {BRAND.phoneDisplay}
                </a>

                <a
                  className="inline-flex items-center justify-center h-12 px-6 rounded-full font-semibold bg-white/70 ring-1 ring-black/15 text-black/80 hover:bg-white transition"
                  href="#contact"
                >
                  Demander un devis
                </a>
              </div>
            </div>

            {/* BLOC VIDEO */}
            <div className="relative">
              <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-black/5 blur-2xl" />

              <div className="overflow-hidden rounded-[26px] bg-white/55 backdrop-blur ring-1 ring-black/10 shadow-xl">
                <div className="p-4">
                  <div className="relative w-full aspect-video overflow-hidden rounded-2xl bg-black/10 ring-1 ring-black/10">
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src="https://www.youtube.com/embed/BhRk8F9-jWY?rel=0&modestbranding=1"
                      title="Présentation — La clé des sols"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
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
          </div>
        </div>
      </section>
      <section id="services">
        <ServiceCardsPro />
      </section>

      {/* <FieldGallery /> */}
      <FieldGallery />
      <ReviewsCarousel reviewUrl={BRAND.reviewUrl} />

      {/* CONTACT */}
      <section className="section bg-beige" id="contact">
        <div className="mx-auto max-w-7xl px-6">
          <ContactSection />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
