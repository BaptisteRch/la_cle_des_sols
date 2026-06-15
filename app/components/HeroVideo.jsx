"use client";

import { useState } from "react";

const VIDEO_ID = "BhRk8F9-jWY";

export default function HeroVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-xl bg-black">
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
          title="Présentation — La clé des sols"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full cursor-pointer"
          aria-label="Lire la vidéo de présentation de La clé des sols"
        >
          {/* Thumbnail YouTube (chargée seule, sans le player) */}
          <img
            src={`https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`}
            alt="Présentation de La clé des sols en vidéo"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            width={1280}
            height={720}
          />

          <span
            className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/15"
            aria-hidden="true"
          />

          {/* Bouton play */}
          <span
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg ring-1 ring-black/10 transition-transform group-hover:scale-110"
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-[var(--brand2)]">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>

          <span className="absolute bottom-3 left-4 text-sm font-semibold text-white drop-shadow">
            Présentation en 1 minute
          </span>
        </button>
      )}
    </div>
  );
}
