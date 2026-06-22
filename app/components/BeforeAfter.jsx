// app/components/BeforeAfter.jsx
"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";

/**
 * Slider avant/après réutilisable.
 * - Drag souris + tactile, accessible au clavier (flèches sur la poignée).
 * - Les deux images doivent avoir le même ratio pour un rendu propre.
 *
 * Réutilisable sur n'importe quel client : passer beforeSrc / afterSrc / alt.
 */
export default function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeAlt = "Avant intervention",
  afterAlt = "Après intervention",
  label,
  priority = false,
  aspect = "aspect-[3/4]",
}) {
  const [pos, setPos] = useState(50); // % révélé de l'image "après"
  const wrapRef = useRef(null);
  const draggingRef = useRef(false);

  const setFromClientX = useCallback((clientX) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e) => {
    draggingRef.current = true;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
  };
  const onPointerMove = (e) => {
    if (!draggingRef.current) return;
    setFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    draggingRef.current = false;
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
  };

  return (
    <figure className="card overflow-hidden">
      <div
        ref={wrapRef}
        className={`relative ${aspect} w-full select-none touch-none cursor-ew-resize`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        {/* Image APRÈS (fond) */}
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority={priority}
          draggable={false}
        />

        {/* Image AVANT (clippée par la position du slider) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image
            src={beforeSrc}
            alt={beforeAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority={priority}
            draggable={false}
          />
        </div>

        {/* Étiquettes */}
        <span className="absolute left-3 top-3 rounded-full bg-black/65 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
          Avant
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-[var(--brand)] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
          Après
        </span>

        {/* Poignée */}
        <div
          className="absolute inset-y-0 w-1 -ml-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.15)]"
          style={{ left: `${pos}%` }}
        >
          <button
            type="button"
            aria-label="Faire glisser pour comparer avant / après"
            onKeyDown={onKeyDown}
            className="absolute top-1/2 left-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white shadow-lg ring-1 ring-black/10 text-[var(--brand2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path
                d="M9 7l-5 5 5 5M15 7l5 5-5 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {label ? (
        <figcaption className="px-4 py-3 text-sm font-semibold text-black/75">
          {label}
        </figcaption>
      ) : null}
    </figure>
  );
}
