"use client";

import { useState } from "react";
import { Cta } from "@/components/ui/Cta";
import { buildWhatsAppLink } from "@/lib/whatsapp";

/**
 * S8 · "Perguntas Frequentes" (FAQ) — réplica do Figma (node 76:64).
 *
 * Fundo preto, 2 colunas: esquerda = headline + chamada + CTA "Contato";
 * direita = acordeão (perguntas do Figma + respostas em disclosure).
 *
 * ⚠️ O Figma traz só as PERGUNTAS (acordeão fechado). As respostas abaixo são:
 *   - `todo: true` → FACTUAIS (pagamento, endereço/horários) = placeholder
 *     "a confirmar". NÃO inventar (endereço/forma de pagamento errados = risco).
 *   - demais → RASCUNHOS de tom (posicionamento/geral) p/ a Lu revisar.
 *
 * A11y: disclosure por <button aria-expanded/aria-controls>; abre/fecha com
 * grid-template-rows (0fr↔1fr), com fallback reduced-motion.
 */
type FaqItem = { q: string; a: string; todo?: boolean };

const FAQS: FaqItem[] = [
  {
    q: "Quais formas de pagamento são aceitas?",
    a: "A confirmar com a Lu Make Up — formas de pagamento aceitas e condições de parcelamento.",
    todo: true,
  },
  {
    q: "Onde a Lu Make Up está localizada? Quais são os horários de funcionamento?",
    a: "A confirmar — endereço da(s) unidade(s) e horários de atendimento.",
    todo: true,
  },
  {
    q: "Por que algumas pessoas dizem que os tratamentos na Lu Make Up são mais caros?",
    a: "Porque cada procedimento une biossegurança rigorosa, materiais de alta qualidade e uma técnica autoral voltada à naturalidade e à durabilidade. Você não investe em um retoque rápido, e sim em um resultado feito para envelhecer bem com você.",
  },
  {
    q: "É minha primeira vez na Lu Make Up, o que devo saber?",
    a: "Tudo começa por uma avaliação individual: entendemos seus traços, sua rotina e o que você deseja, e desenhamos um plano sob medida — sem fórmulas prontas e no seu tempo.",
  },
  {
    q: "Como posso diminuir o tempo do meu tratamento?",
    a: "Seguindo as orientações de cuidado, comparecendo aos retornos nos prazos recomendados e respeitando o tempo de cicatrização de cada etapa. Assim cada sessão rende o seu melhor.",
  },
  {
    q: "O que determina a duração geral do tratamento?",
    a: "Cada pessoa é única: pele, estilo de vida, objetivo e a técnica indicada definem o número de sessões e os intervalos. Na avaliação, explicamos a previsão para o seu caso.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      aria-labelledby="faq-heading"
      className="overflow-hidden bg-ink py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-[1080px] gap-12 px-6 lg:grid-cols-[minmax(260px,340px)_1fr] lg:gap-20 lg:px-8">
        {/* Coluna esquerda — título + chamada + CTA */}
        <div>
          <h2
            id="faq-heading"
            className="font-display text-[2rem] font-light leading-[1.1] text-text-on-ink lg:text-[2.5rem]"
          >
            Perguntas Frequentes
          </h2>
          <p className="mt-6 max-w-[34ch] text-sm leading-relaxed text-muted">
            Não encontrou a resposta para a sua dúvida? Envie-nos pelo chat.
            Teremos prazer em lhe responder!
          </p>
          <div className="mt-8">
            <Cta href={buildWhatsAppLink()} external variant="outline" className="w-full sm:w-auto">
              Contato
            </Cta>
          </div>
        </div>

        {/* Coluna direita — acordeão */}
        <div>
          <ul className="border-t border-white/[0.14]">
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={i} className="border-b border-white/[0.14]">
                  <h3 className="m-0">
                    <button
                      type="button"
                      id={`faq-trigger-${i}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="group flex w-full items-center justify-between gap-6 py-5 text-left"
                    >
                      <span className="text-[0.82rem] font-medium uppercase leading-snug tracking-[0.08em] text-text-on-ink transition-colors group-hover:text-brass">
                        {item.q}
                      </span>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className={`h-4 w-4 shrink-0 text-text-on-ink transition-transform duration-300 ease-out motion-reduce:transition-none ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${i}`}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[60ch] pb-6 pr-6 text-sm leading-relaxed text-muted">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
