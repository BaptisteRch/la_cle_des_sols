"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  direction = "up",
  className = "",
  ...props
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const classes = [
    "reveal",
    `reveal-${direction}`,
    visible ? "reveal-visible" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      ref={ref}
      className={classes}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      {...props}
    >
      {children}
    </Tag>
  );
}
