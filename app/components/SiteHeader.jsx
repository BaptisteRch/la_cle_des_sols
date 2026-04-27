// app/components/SiteHeader.jsx
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";

const BRAND = {
  name: "La clé des sols",
  phoneDisplay: "04 77 32 09 12",
  phoneHref: "tel:+33477320912",
  email: "gmagand@cledessols.fr",
  emailHref: "mailto:gmagand@cledessols.fr",
  baseCity: "Saint-Étienne",
  region: "Auvergne-Rhône-Alpes",
  leadTime: "RDV sous 48h",
  reviewUrl:
    "https://www.google.com/search?q=la+cl%C3%A9+des+sols+saint-etienne",
};

export default function SiteHeader() {
  return (
    <header className="header" role="banner">
      <Container className="flex items-center justify-between py-4">
        {/* Left: logo + brand */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            aria-label="La clé des sols — accueil"
            className="flex items-center gap-3 hover:opacity-90 transition leading-none"
          >
            <div className="relative h-11 w-30 md:h-14 md:w-30 flex-shrink-0">
              <Image
                src="/images/logo.webp"
                alt="Logo La clé des sols"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="leading-tight">
              <div className="brand-subtitle">
                Société de nettoyage • {BRAND.baseCity}
              </div>
            </div>
          </Link>
        </div>

        {/* Right: nav + CTAs */}
        <nav
          aria-label="Navigation principale"
          className="flex items-center gap-3"
        >
          <a
            href={BRAND.phoneHref}
            className="btn btn-primary"
            aria-label={`Appeler La clé des sols au ${BRAND.phoneDisplay}`}
          >
            Appeler{" "}
            <span className="hidden sm:inline">{BRAND.phoneDisplay}</span>
          </a>

          <a href="#contact" className="btn btn-outline hidden sm:inline-flex">
            Devis gratuit
          </a>
        </nav>
      </Container>
    </header>
  );
}

export { BRAND };
