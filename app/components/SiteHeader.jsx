// app/components/SiteHeader.jsx
"use client";

import { useEffect, useState } from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import { BRAND } from "../lib/brand";

const SERVICES = [
  { href: "/regulier", label: "Nettoyage régulier" },
  { href: "/particuliers", label: "Particuliers" },
  { href: "/etat_de_sols", label: "Remise en état des sols" },
  { href: "/fin_de_chantier", label: "Nettoyage de fin de chantier" },
  { href: "/vie_de_chantier", label: "Bases de vie de chantier" },
  { href: "/nettoyage_vitre", label: "Nettoyage de vitres" },
];

function Chevron({ open }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path
        d="M6 9l6 6 6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeAll = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <header
      className={`header ${scrolled ? "is-scrolled" : ""}`}
      role="banner"
    >
      <Container
        className={`flex items-center justify-between transition-[padding] duration-300 ${
          scrolled ? "py-2.5" : "py-4"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="La clé des sols — accueil"
          className="flex items-center hover:opacity-90 transition"
          onClick={closeAll}
        >
          <div className="relative h-11 w-36 md:h-12 md:w-40 flex-shrink-0">
            <Image
              src="/images/logo.webp"
              alt="Logo La clé des sols"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Nav desktop */}
        <nav
          aria-label="Navigation principale"
          className="hidden lg:flex items-center gap-1"
        >
          <Link href="/" className="nav-link" onClick={closeAll}>
            Accueil
          </Link>

          {/* Dropdown Prestations */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="nav-link inline-flex items-center gap-1"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((v) => !v)}
            >
              Prestations
              <Chevron open={servicesOpen} />
            </button>

            {servicesOpen && (
              <div className="absolute left-0 top-full pt-2 w-72 z-50">
                <ul className="rounded-2xl bg-white p-2 ring-1 ring-black/10 shadow-xl">
                  {SERVICES.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="block rounded-xl px-4 py-2.5 text-sm font-medium text-black/75 hover:bg-[var(--paper2)] hover:text-[var(--brand2)] transition"
                        onClick={closeAll}
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link href="/realisations" className="nav-link" onClick={closeAll}>
            Réalisations
          </Link>

          <Link href="/faq" className="nav-link" onClick={closeAll}>
            FAQ
          </Link>

          <Link href="/#contact" className="nav-link" onClick={closeAll}>
            Contact
          </Link>
        </nav>

        {/* CTAs + burger */}
        <div className="flex items-center gap-2">
          <a
            href={BRAND.phoneHref}
            className="btn btn-primary rounded-full"
            aria-label={`Appeler La clé des sols au ${BRAND.phoneDisplay}`}
          >
            Appeler{" "}
            <span className="hidden sm:inline">{BRAND.phoneDisplay}</span>
          </a>

          <Link
            href="/#contact"
            className="btn btn-outline rounded-full hidden md:inline-flex"
            onClick={closeAll}
          >
            Devis gratuit
          </Link>

          {/* Burger mobile */}
          <button
            type="button"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-black/10 text-[var(--brand2)] transition hover:bg-white/70"
            aria-label="Ouvrir le menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
              {mobileOpen ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {/* Panneau mobile */}
      {mobileOpen && (
        <nav
          aria-label="Navigation mobile"
          className="lg:hidden border-t border-black/10 bg-white"
        >
          <Container className="py-4">
            <Link
              href="/"
              className="block py-2 font-semibold text-black/80"
              onClick={closeAll}
            >
              Accueil
            </Link>

            <div className="mt-2 mb-1 text-xs font-bold uppercase tracking-wide text-black/45">
              Prestations
            </div>
            <ul className="space-y-1">
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-black/75 hover:bg-[var(--paper2)]"
                    onClick={closeAll}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/realisations"
              className="block py-2 mt-2 font-semibold text-black/80"
              onClick={closeAll}
            >
              Réalisations
            </Link>

            <Link
              href="/faq"
              className="block py-2 font-semibold text-black/80"
              onClick={closeAll}
            >
              FAQ
            </Link>

            <Link
              href="/#contact"
              className="btn btn-primary mt-4 w-full justify-center"
              onClick={closeAll}
            >
              Demander un devis gratuit
            </Link>
          </Container>
        </nav>
      )}
    </header>
  );
}
