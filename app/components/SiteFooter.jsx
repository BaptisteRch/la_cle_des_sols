import Container from "./Container";
import Link from "next/link";
import { BRAND } from "./SiteHeader";

export default function SiteFooter() {
  return (
    <footer
      className="border-t py-14 bg-white"
      style={{ borderColor: "var(--stroke)" }}
    >
      <Container>
        <div className="grid gap-10 md:grid-cols-3">
          {/* Colonne 1 : Marque */}
          <div>
            <div className="font-extrabold tracking-tight text-lg">
              {BRAND.name}
            </div>

            <div className="mt-3 text-sm text-muted max-w-xs">
              Société de nettoyage basée à {BRAND.baseCity}. Intervention en
              Loire (42), Rhône (69) et Haute-Loire (43).
            </div>
          </div>

          {/* Colonne 2 : Navigation */}
          <div>
            <div className="font-semibold mb-3">Prestations</div>

            <div className="flex flex-col gap-2 text-sm text-muted">
              <Link
                href="/professionnels"
                className="hover:text-[var(--brand)]"
              >
                Nettoyage professionnels
              </Link>
              <Link href="/particuliers" className="hover:text-[var(--brand)]">
                Nettoyage particuliers
              </Link>
              <Link
                href="/fin-de-chantier"
                className="hover:text-[var(--brand)]"
              >
                Fin de chantier
              </Link>
              <Link href="/sols" className="hover:text-[var(--brand)]">
                Remise en état sols
              </Link>
              <Link href="/vitres" className="hover:text-[var(--brand)]">
                Nettoyage vitres
              </Link>
            </div>
          </div>

          {/* Colonne 3 : Contact */}
          <div>
            <div className="font-semibold mb-3">Contact</div>

            <div className="flex flex-col gap-2 text-sm text-muted">
              <a href={BRAND.phoneHref} className="hover:text-[var(--brand)]">
                {BRAND.phoneDisplay}
              </a>

              <a href={BRAND.emailHref} className="hover:text-[var(--brand)]">
                {BRAND.email}
              </a>

              <span>Saint-Étienne • {BRAND.region}</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-12 pt-6 border-t text-xs text-muted flex flex-col md:flex-row justify-between gap-3"
          style={{ borderColor: "var(--stroke)" }}
        >
          <div>
            © {new Date().getFullYear()} {BRAND.name} — Tous droits réservés.
          </div>

          <div className="flex gap-4">
            <Link
              href="/mentions-legales"
              className="hover:text-[var(--brand)]"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="hover:text-[var(--brand)]"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
