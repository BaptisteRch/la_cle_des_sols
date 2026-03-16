// app/components/Values.jsx
import Container from "./Container";

const values = [
  {
    title: "Réactivité",
    desc: "Intervention rapide selon l’urgence.",
    icon: "⚡",
  },
  {
    title: "Diagnostic précis",
    desc: "On traite la cause, pas juste le symptôme.",
    icon: "🧠",
  },
  {
    title: "Discrétion",
    desc: "Interventions propres et respectueuses.",
    icon: "🔒",
  },
  {
    title: "Sécurité",
    desc: "Méthodes adaptées aux lieux de vie et de travail.",
    icon: "🛡️",
  },
  { title: "Clarté", desc: "Explications simples, devis gratuit.", icon: "💬" },
];

export default function Values() {
  return (
    <section className="section">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div className="space-y-3">
            <h2 className="section-title">
              Une approche efficace, moderne et transparente
            </h2>
            <p className="text-muted">
              Flash Nuisible accompagne particuliers et professionnels pour
              éliminer les nuisibles rapidement, avec une méthode claire :
              diagnostic, traitement adapté, prévention durable.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="glass rounded-2xl p-4">
                <div className="flex items-start gap-3">
                  <div
                    className="grid h-10 w-10 place-items-center rounded-xl"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,106,0,0.14), rgba(255,176,0,0.10))",
                      border: "1px solid rgba(255,106,0,0.22)",
                    }}
                    aria-hidden="true"
                  >
                    {v.icon}
                  </div>
                  <div>
                    <div className="font-extrabold">{v.title}</div>
                    <div className="text-sm text-muted">{v.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
