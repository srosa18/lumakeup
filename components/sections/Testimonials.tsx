"use client";

import { useState } from "react";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Kicker } from "@/components/ui/Kicker";

/**
 * S6 · Depoimentos — prova social (clientes + celebridades).
 *
 * Criada do zero no estilo quiet luxury da home (decisão do cliente).
 * MIX: depoimentos anônimos/profissionais (plano B do brief — frases reais,
 * já publicáveis) + slots de CELEBRIDADE marcados `TODO:CONFIRMAR`.
 *
 * ⚠️ REGRA INQUEBRÁVEL: NUNCA inventar nome/frase/foto de celebridade real.
 * Os slots `celebrity: true` ficam com placeholder explícito até a Lu enviar o
 * conteúdo COM autorização de uso de imagem e citação (§12.4 do brief).
 *
 * A11y: troca por botões reais (clique + teclado + toque), nunca hover-only.
 */
type Testimonial = {
  quote: string;
  name: string;
  role: string;
  photo?: string;
  art: string;
  alt: string;
  celebrity?: boolean;
};

// ⚠️ FOTOS = STAND-INS TEMPORÁRIOS do Unsplash (stock), só p/ visualizar o layout.
// Trocar TODAS por fotos reais autorizadas antes de publicar. Nos slots de
// celebridade o rosto é genérico — NÃO é a celebridade; entra a foto real depois.
const TESTIMONIALS: Testimonial[] = [
  // — Anônimos / profissionais (plano B do brief: frases reais, publicáveis hoje) —
  {
    quote: "Ninguém percebe que é feito. Percebem que eu pareço descansada.",
    name: "Cliente desde 2015",
    role: "Sobrancelha + olhos",
    photo: "/images/depoimentos/p1.webp",
    art: "Retrato editorial discreto, pele real — STAND-IN Unsplash, substituir por depoente com direitos",
    alt: "Retrato de cliente de longa data do instituto",
  },
  {
    quote:
      "Encaminho minhas pacientes pela segurança do protocolo e pela naturalidade do traço.",
    name: "Dermatologista parceira",
    role: "Indicação profissional",
    photo: "/images/depoimentos/p2.webp",
    art: "Retrato profissional sóbrio — STAND-IN Unsplash, substituir por depoente com direitos",
    alt: "Retrato de dermatologista parceira do instituto",
  },
  {
    quote: "Cheguei com receio de exagero. Saí com a minha sobrancelha, só que melhor.",
    name: "Noiva, 2024",
    role: "Sobrancelha fio a fio",
    photo: "/images/depoimentos/p3.webp",
    art: "Retrato editorial quente — STAND-IN Unsplash, substituir por depoente com direitos",
    alt: "Retrato de cliente atendida antes do casamento",
  },
  // — Celebridades (PLACEHOLDER — só publicar COM autorização; rosto é genérico) —
  {
    quote: "TODO:CONFIRMAR — depoimento da celebridade (texto + autorização de uso).",
    name: "Celebridade — a confirmar",
    role: "TODO:CONFIRMAR",
    photo: "/images/depoimentos/p4.webp",
    art: "Rosto genérico (STAND-IN) — entra a foto da celebridade COM autorização (§12.4)",
    alt: "Retrato de depoente — a confirmar",
    celebrity: true,
  },
  {
    quote: "TODO:CONFIRMAR — depoimento da celebridade (texto + autorização de uso).",
    name: "Celebridade — a confirmar",
    role: "TODO:CONFIRMAR",
    photo: "/images/depoimentos/p5.webp",
    art: "Rosto genérico (STAND-IN) — entra a foto da celebridade COM autorização (§12.4)",
    alt: "Retrato de depoente — a confirmar",
    celebrity: true,
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
      <div className="mx-auto max-w-[1040px] px-6 lg:px-8">
        <Kicker>Depoimentos</Kicker>
        <h2
          id="depoimentos-heading"
          className="mt-4 font-display text-[2rem] font-light leading-[1.12] text-text-on-bone sm:text-[2.4rem] lg:text-[2.75rem]"
        >
          Quem confia o próprio
          <br />
          olhar à Lu Make Up
        </h2>

        {/* Depoimento em destaque */}
        <div className="mt-14 grid gap-10 lg:mt-16 lg:grid-cols-[300px_1fr] lg:items-center lg:gap-16">
          {/* Foto */}
          <div className="w-full max-w-[300px]">
            <div key={`p-${active}`} className="bebold-fade">
              <ImageSlot
                src={t.photo}
                alt={t.alt}
                art={t.art}
                ratio="3 / 4"
                tone="bone"
                sizes="(min-width:1024px) 300px, 80vw"
              />
            </div>
          </div>

          {/* Citação */}
          <figure key={`q-${active}`} className="bebold-fade" role="status" aria-live="polite">
            <span aria-hidden="true" className="font-display text-6xl leading-none text-brass/40">
              &ldquo;
            </span>
            <blockquote className="-mt-3 font-display text-xl font-light leading-snug text-text-on-bone sm:text-2xl">
              {t.quote}
            </blockquote>
            <figcaption className="mt-7">
              <span className="block font-display text-base font-medium text-text-on-bone">
                {t.name}
              </span>
              <span className="kicker mt-1 block text-muted">{t.role}</span>
            </figcaption>
          </figure>
        </div>

        {/* Seletor — miniaturas das pessoas */}
        <div
          role="tablist"
          aria-label="Selecionar depoimento"
          className="mt-12 flex flex-wrap items-center gap-3"
        >
          {TESTIMONIALS.map((item, i) => {
            const isActive = i === active;
            return (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Depoimento de ${item.name}`}
                onClick={() => setActive(i)}
                className={[
                  "h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-offset-2 ring-offset-bone transition-colors",
                  isActive ? "ring-brass" : "ring-transparent hover:ring-text-on-bone/20 focus-visible:ring-brass",
                ].join(" ")}
              >
                {item.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={item.photo} alt="" className="h-full w-full object-cover" />
                ) : (
                  <span
                    aria-hidden="true"
                    className="grid h-full w-full place-items-center bg-ink/[0.06] font-display text-sm font-light text-text-on-bone/55"
                  >
                    {item.name.charAt(0)}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
