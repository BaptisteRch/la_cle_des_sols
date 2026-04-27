"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(target, duration = 1400) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setValue(target);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const start = performance.now();
            const tick = (now) => {
              const elapsed = now - start;
              const t = Math.min(1, elapsed / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              setValue(Math.round(target * eased));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return [ref, value];
}

function Stat({ value, suffix = "", label, sublabel }) {
  const [ref, current] = useCountUp(value);
  return (
    <div
      ref={ref}
      className="relative card-fancy card p-8 text-center transition hover:-translate-y-1"
    >
      <div className="stat-number text-5xl md:text-6xl font-extrabold tracking-tight">
        {current}
        {suffix}
      </div>
      <div className="mt-3 font-semibold text-[var(--text)]">{label}</div>
      {sublabel && (
        <div className="mt-1 text-xs text-muted">{sublabel}</div>
      )}
    </div>
  );
}

export default function StatsSection() {
  const stats = [
    { value: 20, suffix: "+", label: "Années d'expérience", sublabel: "depuis 2003" },
    { value: 500, suffix: "+", label: "Clients satisfaits", sublabel: "pros & particuliers" },
    { value: 3, suffix: "", label: "Départements couverts", sublabel: "Loire, Rhône, Haute-Loire" },
    { value: 48, suffix: "h", label: "Délai moyen de RDV", sublabel: "urgence sous 2h" },
  ];

  return (
    <section className="section">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="badge badge-gradient">Ils nous font confiance</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">
            Une expertise construite sur le terrain.
          </h2>
          <p className="mt-4 text-muted">
            Deux décennies à accompagner les entreprises et les particuliers de
            la région Auvergne-Rhône-Alpes.
          </p>
        </div>

        <div className="mt-12 grid gap-6 grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
