import Container from "./Container";
import Link from "next/link";
import { BRAND } from "./SiteHeader";

const SOCIALS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/la-cl%C3%A9-des-sols",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/lacledessols/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.88 5.88 0 0 0-2.13 1.38A5.88 5.88 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.8.73 1.48 1.38 2.13a5.88 5.88 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 0 0 2.13-1.38 5.88 5.88 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 0 0-1.38-2.13A5.88 5.88 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-10.41a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
      </svg>
    ),
  },
];

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

            <div className="mt-5 flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${BRAND.name} sur ${s.name}`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-black/70 ring-1 ring-black/10 transition hover:bg-[var(--brand)] hover:text-white hover:ring-[var(--brand)]"
                >
                  <span className="h-4 w-4 block">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Colonne 2 : Navigation */}
          <div>
            <div className="font-semibold mb-3">Prestations</div>

            <div className="flex flex-col gap-2 text-sm text-muted">
              <Link
                href="/nettoyage_vitre"
                className="hover:text-[var(--brand)]"
              >
                Nettoyage de vitre
              </Link>
              <Link href="/regulier" className="hover:text-[var(--brand)]">
                Nettoyage régulier
              </Link>
              <Link
                href="/vie_de_chantier"
                className="hover:text-[var(--brand)]"
              >
                Bases de vie de chantier
              </Link>
              <Link
                href="/fin_de_chantier"
                className="hover:text-[var(--brand)]"
              >
                Fin de chantier
              </Link>
              <Link href="/etat_de_sols" className="hover:text-[var(--brand)]">
                Remise en état de sols
              </Link>
              <Link href="/particuliers" className="hover:text-[var(--brand)]">
                Particuliers
              </Link>
              <Link href="/faq" className="hover:text-[var(--brand)]">
                Questions fréquentes
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
