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
};

export default function SiteHeader() {
  return (
    <header className="header">
      <Container className="flex items-center justify-between py-4">
        {/* Left: logo + brand */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-90 transition leading-none"
          >
            <div className="relative h-11 w-30 md:h-14 md:w-30 flex-shrink-0">
              <Image
                src="/images/logo.webp"
                alt="La clé des sols"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="leading-tight">
              {/* <div className="font-extrabold tracking-tight text-lg md:text-xl">
                {BRAND.name}
              </div> */}
              <div className="brand-subtitle">
                Société de nettoyage • {BRAND.baseCity}
              </div>
            </div>
          </Link>
        </div>

        {/* Right: nav + CTAs */}
        <div className="flex items-center gap-3">
          <a href={BRAND.phoneHref} className="btn btn-primary">
            Appeler{" "}
            <span className="hidden sm:inline">{BRAND.phoneDisplay}</span>
          </a>

          <a href="#contact" className="btn btn-outline hidden sm:inline-flex">
            Devis gratuit
          </a>
        </div>
      </Container>
    </header>
  );
}

export { BRAND };
