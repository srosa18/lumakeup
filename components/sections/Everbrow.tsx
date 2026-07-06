"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Cta } from "@/components/ui/Cta";
import { SizeTag } from "@/components/ui/SizeTag";
import { buildWhatsAppLink } from "@/lib/whatsapp";

/**
 * S7 · "Everbrow · By Lu Medical" · réplica do Figma (card node 74:39) +
 * interação descrita pelo cliente.
 *
 * Sequência scroll-pinned (CSS sticky h-screen + GSAP ScrollTrigger scrub):
 *  Fase 1 · o RETRATO ocupa a viewport inteira (full-bleed) e TRAVA (sticky).
 *  Fase 2 · seguindo o scroll, o CARD ENTRA EM CENA (fade + sobe + leve zoom).
 *  Fase 3 · card fixo; o sticky SOLTA e tudo sobe junto p/ a próxima dobra.
 *
 * Layout do Figma: card VERTICAL (janela em cima + texto embaixo), pequeno,
 * CENTRALIZADO e um pouco ABAIXO do centro p/ a janela cair sobre o OLHAR dela.
 *
 * ⚠️ A "janela" é um VAZADO/RECORTE real · moldura stone (borda) + centro
 *    TRANSPARENTE → revela o PRÓPRIO retrato do fundo (em registro). Como fica
 *    centralizada, o olhar dela (centro da tela) aparece dentro dela.
 *
 * ⚠️ Retrato = stock do Figma (placeholder) · substituir por foto real Lu Medical.
 * Fundo CLARO → data-section-theme="light" (TopBar inverte p/ preto).
 */
const PORTRAIT_SRC = "/images/everbrow/retrato.webp";
const PORTRAIT_POS = "center 20%"; // desktop: % menor = rosto mais p/ baixo (afinável)
const CARD_DROP = "3vh"; // desce o card p/ a janela cair no olhar sem cortar (afinável)

export function Everbrow() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);

    let cancelled = false;
    let ctx: { revert: () => void } | undefined;
    (async () => {
      const gsapMod = await import("gsap");
      const stMod = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      const gsap = gsapMod.gsap ?? gsapMod.default;
      const ScrollTrigger = stMod.ScrollTrigger ?? stMod.default;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        });

        tl.fromTo(
          cardRef.current,
          { opacity: 0, y: 56, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 0.36, ease: "power2.out" },
          0.12
        );

        ScrollTrigger.refresh();
      }, sectionRef);
    })();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="everbrow-heading"
      data-section-theme="light"
      className={`relative bg-stone ${animate ? "h-[185vh]" : ""}`}
    >
      <div
        className={
          animate
            ? "sticky top-0 h-screen overflow-hidden"
            : "relative h-[88vh] min-h-[660px] overflow-hidden"
        }
      >
        {/* Retrato full-bleed (fundo) · é ele que aparece pelo vazado. ART DIRECTION:
            MOBILE usa um corte vertical mais recuado, já enquadrado p/ a sobrancelha
            + olho caírem dentro da janela (a foto original é close demais p/ caber
            bem numa tela estreita). DESKTOP usa a landscape em alta. */}
        <Image
          src="/images/everbrow/retrato-mobile.webp"
          alt="Sobrancelhas e olhar de cliente em close · Lu Medical"
          fill
          sizes="100vw"
          className="object-cover object-center md:hidden"
        />
        <Image
          src={PORTRAIT_SRC}
          alt="Retrato de cliente em close, com sobrancelhas naturais e definidas pela Lu Medical"
          fill
          sizes="100vw"
          className="hidden object-cover md:block"
          style={{ objectPosition: PORTRAIT_POS }}
        />
        <SizeTag size="2560 × 1440 px" />

        {/* Card pequeno, centralizado e um pouco abaixo do centro */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-5">
          {/* wrapper: desloca o card p/ baixo (GSAP anima o card interno). Em telas
              GRANDES o card ESCALA a partir do centro (scale é prop. separada do
              transform no Tailwind v4, não conflita c/ o translateY): a janela cresce
              p/ cima (pega a sobrancelha) e p/ baixo → o olhar fica enquadrado,
              proporcional ao rosto que aumenta no full-bleed. 13" intacto (<1700px). */}
          <div
            className="w-full max-w-[500px] min-[1700px]:scale-[1.3] min-[2400px]:scale-[1.65] min-[3200px]:scale-[2]"
            style={{ transform: `translateY(${CARD_DROP})` }}
          >
            <div
              ref={cardRef}
              style={animate ? { opacity: 0 } : undefined}
              className="text-center shadow-[0_40px_90px_-50px_rgba(20,20,20,0.55)] [will-change:transform]"
            >
              {/* Janela VAZADA (topo): moldura stone + centro TRANSPARENTE → revela
                  o olhar real do fundo. Proporção 2:1. Sem borda embaixo. */}
              <div className="aspect-[2/1] w-full border-x-[14px] border-t-[14px] border-stone" />

              {/* Texto · altura compacta: parágrafo LARGO (poucas linhas) p/ baixar
                  a altura do card SEM mexer na janela do olhar. */}
              <div className="bg-stone px-7 pb-5 pt-5">
                <h2
                  id="everbrow-heading"
                  className="font-display text-[1.4rem] font-light uppercase tracking-[0.2em] text-ink"
                >
                  Everbrow
                </h2>
                <p className="mt-1 text-[0.62rem] uppercase tracking-[0.18em] text-text-on-bone/65">
                  By Lu Medical
                </p>

                <p className="mt-3.5 font-display text-[0.95rem] font-light leading-snug text-ink">
                  O Transplante de Sobrancelhas
                  <br />
                  Exclusivo da Lu Medical
                </p>

                <p className="mt-2.5 text-[0.72rem] leading-normal text-text-on-bone/75">
                  Para falhas que o pigmento não resolve, o EverBrow implanta fios
                  verdadeiros, um a um, no desenho que pertence ao seu rosto. Cirurgia
                  com olhar artístico, conduzida por avaliação.
                </p>

                <div className="mt-4">
                  <Cta href={buildWhatsAppLink()} external variant="outline" tone="on-bone">
                    Agendar avaliação
                  </Cta>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
