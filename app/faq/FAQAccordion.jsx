"use client";

import { useState } from "react";

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <ul className="grid gap-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const panelId = `faq-panel-${i}`;
        const buttonId = `faq-button-${i}`;
        return (
          <li
            key={i}
            className="card overflow-hidden transition hover:shadow-md"
          >
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-base md:text-lg font-semibold tracking-tight">
                {item.q}
              </span>
              <span
                aria-hidden="true"
                className={`flex-shrink-0 h-8 w-8 rounded-full bg-[var(--brand)]/10 text-[var(--brand)] flex items-center justify-center text-xl font-bold transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-6 pb-5 text-muted leading-relaxed"
            >
              {item.a}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
