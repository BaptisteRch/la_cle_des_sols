import Link from "next/link";

export default function TaxCreditCard({ compact = false }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border bg-white shadow-sm ${
        compact ? "p-6" : "p-8 md:p-10"
      }`}
    >
      {/* glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sky-200/40 blur-3xl" />

      <div className="relative grid items-start gap-6 md:grid-cols-[auto_1fr]">
        {/* badge */}
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sky-500/10 text-2xl font-extrabold text-sky-600">
          %
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
            Crédit d’impôt <span className="text-sky-600">50 %</span> pour les
            PARTICULIERS
          </h3>

          <p className="mt-3 text-muted">
            Grâce au dispositif de{" "}
            <strong>crédit d’impôt pour les services à la personne</strong>,
            vous pouvez bénéficier d’un service de nettoyage professionnel
            <strong> à moitié prix</strong>.
          </p>

          {/* bouton */}
          <div className="mt-5">
            <Link href="/particuliers" className="btn btn-primary">
              Voir les services pour particuliers
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
