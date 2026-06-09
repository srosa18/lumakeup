"use client";

import { useEffect, useRef, useState } from "react";
import { Cta } from "@/components/ui/Cta";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Kicker } from "@/components/ui/Kicker";

/**
 * S5 · Serviços Personalizados + Depoimentos (§4, 🎯).
 *
 * ⚠️ PLANO B (autorizado): depoimentos atribuídos a perfis anônimos/
 * profissionais até a confirmação de direitos de imagem/citação das
 * celebridades (§12.4). Trocar `TESTIMONIALS` quando houver autorização.
 *
 * A11y (§9): troca acionável por foco de teclado E por toque (botões reais),
 * nunca hover-only. Auto-rotação desligada sob prefers-reduced-motion.
 */
type Testimonial = {
  quote: string;
  /** perfil anônimo/profissional — sem nome real até confirmação */
  attribution: string;
  art: string;
  alt: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Ninguém percebe que é feito. Percebem que eu pareço descansada.",
    attribution: "Cliente desde 2015",
    art: "IMG: retrato editorial discreto, pele real, fundo escuro — substituir por depoente com direitos",
    alt: "Retrato de cliente de longa data do instituto",
  },
  {
    quote: "Encaminho minhas pacientes pela segurança do protocolo e pela naturalidade do traço.",
    attribution: "Dermatologista parceira",
    art: "IMG: retrato profissional sóbrio, luz suave — substituir por depoente com direitos",
    alt: "Retrato de dermatologista parceira do instituto",
  },
  {
    quote: "Cheguei com receio de exagero. Saí com a minha sobrancelha, só que melhor.",
    attribution: "Noiva, 2024",
    art: "IMG: retrato editorial quente, foco no olhar — substituir por depoente com direitos",
    alt: "Retrato de cliente atendida antes do casamento",
  },
];

export function PersonalizedServices() {
  const [active, setActive] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return; // sem auto-rotação
    timer.current = setInterval(() => {
      setActive((i) => (i + 1) % TESTIMONIALS.length);
    }, 6500);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  const stop = () => {
    if (timer.current) clearInterval(timer.current);
  };

  const current = TESTIMONIALS[active];

  return (
    <section aria-labelledby="personalizados-heading" className="bg-ink py-24 lg:py-36">
      <div className="mx-auto grid max-w-[var(--container-boutique)] gap-14 px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
        {/* Texto */}
        <div>
          <Kicker as="h2">Possibilidades infinitas</Kicker>
          <p
            id="personalizados-heading"
            className="mt-4 font-display text-4xl font-light leading-[1.1] text-text-on-ink sm:text-5xl"
          >
            Serviços personalizados.
          </p>
          <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-muted">
            Nenhum rosto se repete — e nenhum protocolo deveria. Cada
            procedimento começa por um estudo do seu traço, da sua pele, do seu
            olhar.
          </p>
          <div className="mt-10">
            <Cta href="/servicos" variant="outline">
              Ver todos os serviços
            </Cta>
          </div>
        </div>

        {/* Depoimentos */}
        <figure className="border-t border-line-subtle pt-10">
          <Kicker className="mb-8">Quem confia o próprio olhar à Lu</Kicker>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <div className="w-32 shrink-0">
              <ImageSlot
                alt={current.alt}
                art={current.art}
                ratio="1 / 1"
                tone="ink"
                sizes="128px"
              />
            </div>

            <div className="min-h-[7rem]">
              <blockquote className="font-display text-xl font-light leading-snug text-text-on-ink">
                “{current.quote}”
              </blockquote>
              <figcaption className="mt-4 text-sm tracking-[0.08em] text-muted">
                {current.attribution}
              </figcaption>
            </div>
          </div>

          {/* Controles — botões reais (teclado + toque) */}
          <div
            role="tablist"
            aria-label="Selecionar depoimento"
            className="mt-8 flex gap-3"
          >
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.attribution}
                role="tab"
                aria-selected={i === active}
                aria-label={`Depoimento de ${t.attribution}`}
                onClick={() => {
                  stop();
                  setActive(i);
                }}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === active ? "bg-brass" : "bg-text-on-ink/25 hover:bg-text-on-ink/50"
                }`}
              />
            ))}
          </div>
        </figure>
      </div>
    </section>
  );
}
