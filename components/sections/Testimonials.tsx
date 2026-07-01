"use client";

import { useState } from "react";
import { Kicker } from "@/components/ui/Kicker";

/**
 * S6 · Depoimentos — prova social. Depoimentos REAIS migrados do site atual
 * (autorizados pelo cliente). Foco no texto (os depoentes não têm foto pública);
 * a galeria de celebridades vive na seção Celebridades. Troca por botões reais
 * (clique + teclado + toque), nunca hover-only.
 */
type Testimonial = { quote: string; name: string; role: string };

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Estou extremamente realizada com a micro. Escolhi a profissional certa e estou 100% realizada — foi um investimento que valeu super a pena.",
    name: "Fê",
    role: "Cliente",
  },
  {
    quote:
      "O feedback das minhas pacientes foi sensacional. Muito obrigada por todo o profissionalismo e o acolhimento.",
    name: "Dra. Paula",
    role: "Dermatologista",
  },
  {
    quote:
      "Você foi tocada por Deus e fez com que meu pai voltasse a sorrir. Vencemos o câncer.",
    name: "Familiar de paciente",
    role: "Micropigmentação reparadora",
  },
  {
    quote: "Estou muito feliz de ver as ações dessa empresa. Satisfeita, do começo ao fim.",
    name: "Cliente",
    role: "Instituto Living Sculpture",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const t = TESTIMONIALS[active];

  return (
    <section
      aria-labelledby="depoimentos-heading"
      data-section-theme="light"
      className="overflow-hidden bg-bone py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[900px] px-6 text-center lg:px-8">
        <Kicker>Depoimentos</Kicker>
        <h2
          id="depoimentos-heading"
          className="mt-4 font-display text-[2rem] font-light leading-[1.12] text-text-on-bone sm:text-[2.4rem] lg:text-[2.75rem]"
        >
          Histórias que ficam
        </h2>

        {/* Depoimento em destaque */}
        <figure key={active} className="bebold-fade mt-14 lg:mt-16" role="status" aria-live="polite">
          <span aria-hidden="true" className="font-display text-6xl leading-none text-brass/40">
            &ldquo;
          </span>
          <blockquote className="-mt-4 font-display text-2xl font-light leading-snug text-text-on-bone sm:text-[1.9rem] lg:text-[2.2rem]">
            {t.quote}
          </blockquote>
          <figcaption className="mt-8">
            <span className="block font-display text-base font-medium text-text-on-bone">{t.name}</span>
            <span className="kicker mt-1 block text-muted">{t.role}</span>
          </figcaption>
        </figure>

        {/* Seletor por nome */}
        <div
          role="tablist"
          aria-label="Selecionar depoimento"
          className="mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
        >
          {TESTIMONIALS.map((item, i) => {
            const isActive = i === active;
            return (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(i)}
                className={[
                  "kicker rounded-full border px-4 py-2 transition-colors",
                  isActive
                    ? "border-brass bg-brass/10 text-text-on-bone"
                    : "border-text-on-bone/15 text-muted hover:border-text-on-bone/40 focus-visible:border-brass",
                ].join(" ")}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
