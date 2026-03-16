"use client";

import { useMemo, useRef, useState } from "react";

function Stars({ rating = 5 }) {
  const full = Math.max(0, Math.min(5, Math.round(rating)));
  return (
    <div className="flex items-center gap-1" aria-label={`${full} étoiles`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < full ? "text-orange-400" : "text-white/25"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

const DEFAULT_REVIEWS = [
  {
    name: "Client vérifié",
    rating: 5,
    date: "Septembre 2025",
    text: "La Cle Des Sols s'occupe du nettoyage de mes bureaux depuis plusieurs années et nous en sommes empalement satisfait. Très flexible pendant les vacances et toujours à l'écoute. Je recommande les yeux fermés.",
  },
  {
    name: "Client vérifié",
    rating: 5,
    date: "Août 2025",
    text: "Service au top, équipe professionnelle et efficace. Travail soigné, je suis très satisfait du résultat. Je recommande sans hésitation. ⭐⭐⭐⭐⭐",
  },
];

export default function ReviewsCarousel({
  title = "Avis clients Google",
  subtitle = "Des retours réels, une intervention claire et efficace.",
  reviewUrl,
  reviews = DEFAULT_REVIEWS,
}) {
  const list = useMemo(() => reviews?.filter(Boolean) ?? [], [reviews]);
  const scrollerRef = useRef(null);

  // Drag desktop only
  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);
  const rafRef = useRef(0);
  const latestDxRef = useRef(0);
  const [isDraggingUi, setIsDraggingUi] = useState(false);

  if (!list.length) return null;

  function onPointerDown(e) {
    // ✅ On ne gère QUE la souris. Sur mobile: aucun handling -> swipe natif.
    if (e.pointerType !== "mouse" || e.button !== 0) return;

    const el = scrollerRef.current;
    if (!el) return;

    draggingRef.current = true;
    setIsDraggingUi(true);
    el.setPointerCapture?.(e.pointerId);

    startXRef.current = e.clientX;
    startScrollLeftRef.current = el.scrollLeft;
    latestDxRef.current = 0;

    e.preventDefault();
  }

  function onPointerMove(e) {
    if (!draggingRef.current) return;
    const el = scrollerRef.current;
    if (!el) return;

    latestDxRef.current = e.clientX - startXRef.current;

    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = 0;
      el.scrollLeft = startScrollLeftRef.current - latestDxRef.current;
    });
  }

  function stopDrag(e) {
    if (!draggingRef.current) return;

    draggingRef.current = false;
    setIsDraggingUi(false);

    const el = scrollerRef.current;
    if (el && e?.pointerId != null) {
      try {
        el.releasePointerCapture?.(e.pointerId);
      } catch {}
    }

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
    }
  }

  return (
    <section className="section">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              {title}
            </h2>
            <p className="mt-2 text-muted">{subtitle}</p>
          </div>

          {reviewUrl ? (
            <a
              className="btn btn-primary"
              href={reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir tous les avis
            </a>
          ) : null}
        </div>

        <div
          ref={scrollerRef}
          className={[
            "mt-8 flex gap-4 overflow-x-auto pb-3",
            // ✅ Mobile: 1 avis par swipe (snap)
            "snap-x snap-mandatory",
            // ✅ Desktop: pas de snap
            "md:snap-none",
            isDraggingUi ? "cursor-grabbing" : "cursor-grab",
          ].join(" ")}
          style={{
            WebkitOverflowScrolling: "touch",
            overscrollBehaviorX: "contain",
            // ✅ laisse le navigateur gérer le swipe horizontal naturellement
            touchAction: "auto",
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={stopDrag}
          onPointerCancel={stopDrag}
          onPointerLeave={stopDrag}
        >
          {list.map((r, i) => (
            <article
              key={`${r.name}-${i}`}
              className={[
                "card p-6 shrink-0",
                // ✅ Mobile: une carte plein focus
                "w-[92%] snap-center",
                // ✅ Desktop: plusieurs cartes visibles
                "md:w-[60%] lg:w-[40%]",
              ].join(" ")}
              style={{ userSelect: isDraggingUi ? "none" : "auto" }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="font-extrabold truncate">{r.name}</div>
                  <div className="text-sm text-muted">{r.date}</div>
                </div>
                <Stars rating={r.rating} />
              </div>

              <p className="mt-4 text-muted leading-relaxed">“{r.text}”</p>

              <div className="mt-4 text-xs text-muted">Source : Google</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
