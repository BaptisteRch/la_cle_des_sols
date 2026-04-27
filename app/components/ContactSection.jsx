"use client";

import { useState } from "react";
import { BRAND } from "./SiteHeader";

const SERVICE_OPTIONS = ["Je suis un professionnel", "Je suis un particulier"];

const FREQUENCY_OPTIONS = [
  "Nettoyage de vitre",
  "Nettoyage régulier",
  "Nettoyage de base de vie de chantier",
  "Nettoyage de fin de chantier",
  "Remise en état de sols",
  "Autre",
];

const INITIAL_FORM = {
  name: "",
  phone: "",
  email: "",
  city: "",
  service: SERVICE_OPTIONS[0],
  frequency: FREQUENCY_OPTIONS[0],
  message: "",
  website: "",
};

export default function ContactSection() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function onChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (status === "loading") return;

    if (!form.name.trim() || (!form.phone.trim() && !form.email.trim())) {
      setStatus("error");
      setErrorMsg("Merci d'indiquer votre nom et un moyen de vous recontacter (téléphone ou email).");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok) {
        setStatus("error");
        setErrorMsg(
          "L'envoi a échoué. Vous pouvez nous appeler directement au " +
            BRAND.phoneDisplay + "."
        );
        return;
      }

      setStatus("success");
      setForm(INITIAL_FORM);
    } catch {
      setStatus("error");
      setErrorMsg(
        "Problème de connexion. Vous pouvez nous appeler au " +
          BRAND.phoneDisplay + "."
      );
    }
  }

  return (
    <div className="grid gap-8">
      <div className="glass rounded-3xl p-6 md:p-8">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          {/* Texte */}
          <div>
            <div className="badge badge-accent">
              Devis gratuit • {BRAND.leadTime}
            </div>

            <h2 className="mt-5 text-3xl md:text-4xl font-extrabold tracking-tight">
              Besoin d’un devis de nettoyage&nbsp;?
            </h2>

            <p className="mt-4 text-muted max-w-xl">
              Particuliers, professionnels ou fin de chantier : décrivez votre
              besoin, nous vous répondons rapidement.
            </p>

            <div className="mt-7 space-y-2 text-sm">
              <div>
                <span className="text-soft">Téléphone :</span>{" "}
                <a href={BRAND.phoneHref} className="font-semibold">
                  {BRAND.phoneDisplay}
                </a>
              </div>

              <div>
                <span className="text-soft">Email :</span>{" "}
                <a href={BRAND.emailHref} className="font-semibold">
                  {BRAND.email}
                </a>
              </div>

              <div className="text-soft">
                📍 Basé à <strong>{BRAND.baseCity}</strong> — interventions{" "}
                <strong>Loire</strong>, <strong>Rhône</strong> et{" "}
                <strong>Haute-Loire</strong>.
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a className="btn btn-primary" href={BRAND.phoneHref}>
                Appeler maintenant
              </a>
              <a className="btn btn-outline" href={BRAND.emailHref}>
                Envoyer un email
              </a>
            </div>

            <p className="mt-4 text-xs text-muted">
              Réponse rapide • RDV sous 48h • Devis sans engagement
            </p>
          </div>

          {/* Form */}
          {status === "success" ? (
            <div
              role="status"
              aria-live="polite"
              className="card p-8 flex flex-col items-center text-center gap-3 min-h-[360px] justify-center"
            >
              <div className="text-5xl" aria-hidden="true">✅</div>
              <h3 className="text-2xl font-extrabold tracking-tight">
                Demande envoyée&nbsp;!
              </h3>
              <p className="text-muted max-w-sm">
                Merci, nous vous recontactons sous 48h ouvrées. En cas d'urgence,
                appelez-nous au{" "}
                <a href={BRAND.phoneHref} className="font-semibold text-[var(--brand)]">
                  {BRAND.phoneDisplay}
                </a>
                .
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="btn btn-outline mt-2"
              >
                Envoyer une nouvelle demande
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4" noValidate>
              {/* honeypot */}
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={onChange}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "-9999px",
                  width: 1,
                  height: 1,
                  opacity: 0,
                }}
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1">
                  <span className="sr-only">Nom</span>
                  <input
                    className="input input-bordered"
                    name="name"
                    placeholder="Nom *"
                    required
                    value={form.name}
                    onChange={onChange}
                  />
                </label>

                <label className="grid gap-1">
                  <span className="sr-only">Téléphone</span>
                  <input
                    type="tel"
                    autoComplete="tel"
                    className="input input-bordered"
                    name="phone"
                    placeholder="Téléphone *"
                    value={form.phone}
                    onChange={onChange}
                  />
                </label>
              </div>

              <label className="grid gap-1">
                <span className="sr-only">Email</span>
                <input
                  type="email"
                  autoComplete="email"
                  className="input input-bordered"
                  name="email"
                  placeholder="Email (optionnel)"
                  value={form.email}
                  onChange={onChange}
                />
              </label>

              <label className="grid gap-1">
                <span className="sr-only">Ville</span>
                <input
                  className="input input-bordered"
                  name="city"
                  placeholder="Ville / secteur"
                  value={form.city}
                  onChange={onChange}
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1">
                  <span className="sr-only">Statut</span>
                  <select
                    className="select input-bordered"
                    name="service"
                    value={form.service}
                    onChange={onChange}
                  >
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="grid gap-1">
                  <span className="sr-only">Prestation</span>
                  <select
                    className="select input-bordered"
                    name="frequency"
                    value={form.frequency}
                    onChange={onChange}
                  >
                    {FREQUENCY_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="grid gap-1">
                <span className="sr-only">Message</span>
                <textarea
                  className="textarea input-bordered"
                  name="message"
                  rows={5}
                  placeholder="Décrivez votre besoin (surface, type de locaux, délais, accès, contraintes...)"
                  value={form.message}
                  onChange={onChange}
                />
              </label>

              {status === "error" && errorMsg && (
                <p
                  role="alert"
                  className="text-sm font-medium rounded-xl bg-red-50 border border-red-200 text-red-700 px-4 py-3"
                >
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <span className="inline-flex items-center gap-2">
                    <span
                      className="h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin"
                      aria-hidden="true"
                    />
                    Envoi en cours…
                  </span>
                ) : (
                  "Envoyer la demande (devis gratuit)"
                )}
              </button>

              <p className="text-xs text-muted">
                * champs requis. En soumettant, vous acceptez d'être recontacté(e) au sujet de votre demande.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
