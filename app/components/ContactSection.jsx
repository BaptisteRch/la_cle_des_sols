"use client";

import { useMemo, useState } from "react";
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

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    service: SERVICE_OPTIONS[0],
    frequency: FREQUENCY_OPTIONS[0],
    message: "",
  });

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(
      `Demande de devis — ${BRAND.name} (${BRAND.baseCity})`,
    );

    const body = encodeURIComponent(
      `Nom : ${form.name || "-"}
Téléphone : ${form.phone || "-"}
Email : ${form.email || "-"}
Ville / secteur : ${form.city || "-"}

Statut : ${form.service || "-"}
Prestation : ${form.frequency || "-"}

Message :
${form.message || "-"}

Envoyé depuis le site ${BRAND.name}`,
    );

    return `mailto:${BRAND.email}?subject=${subject}&body=${body}`;
  }, [form]);

  function onChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    window.location.href = mailtoHref;
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
              Besoin d’un devis de nettoyage ?
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
          <form onSubmit={onSubmit} className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                className="input input-bordered"
                name="name"
                placeholder="Nom"
                value={form.name}
                onChange={onChange}
              />

              <input
                type="tel"
                autoComplete="tel"
                className="input input-bordered"
                name="phone"
                placeholder="Téléphone"
                value={form.phone}
                onChange={onChange}
              />
            </div>

            <input
              type="email"
              autoComplete="email"
              className="input input-bordered"
              name="email"
              placeholder="Email (optionnel)"
              value={form.email}
              onChange={onChange}
            />

            <input
              className="input input-bordered"
              name="city"
              placeholder="Ville / secteur"
              value={form.city}
              onChange={onChange}
            />

            <div className="grid gap-4 sm:grid-cols-2">
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
            </div>

            <textarea
              className="textarea input-bordered"
              name="message"
              rows={5}
              placeholder="Décrivez votre besoin (surface, type de locaux, délais, accès, contraintes...)"
              value={form.message}
              onChange={onChange}
            />

            <button type="submit" className="btn btn-primary w-full">
              Envoyer la demande (devis gratuit)
            </button>

            <p className="text-xs text-muted">
              En cliquant, votre client email s’ouvre avec le message prérempli.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
