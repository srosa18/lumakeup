"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Cta } from "@/components/ui/Cta";
import { buildWhatsAppLink } from "@/lib/whatsapp";

/**
 * S7 · "Everbrow — By Lu Medical" — réplica do Figma (node 69:20) + interação
 * descrita pelo cliente (prints + chat).
 *
 * Sequência scroll-pinned (CSS sticky h-screen + GSAP ScrollTrigger scrub):
 *  Fase 1 — o RETRATO ocupa a viewport inteira (full-bleed) e TRAVA (sticky).
 *  Fase 2 — seguindo o scroll, o CARD ENTRA EM CENA (fade + sobe + leve zoom) e
 *           fica fixo, CENTRALIZADO sobre o rosto dela.
 *  Fase 3 — card fixo; o sticky SOLTA e tudo sobe junto p/ a próxima dobra.
 *
 * ⚠️ A "janela" do card é um VAZADO/RECORTE de verdade — NÃO uma imagem colada.
 *    O card NÃO tem fundo: a janela é uma MOLDURA (borda stone) com o CENTRO
 *    TRANSPARENTE, então aparece o PRÓPRIO retrato do fundo que está atrás (em
 *    registro perfeito, pois é o mesmo elemento — o rosto fica contínuo: testa
 *    acima da janela, sobrancelha/olho dentro dela). O painel de texto abaixo é
 *    que carrega o fundo stone.
 *
 * ⚠️ Retrato = stock do Figma (placeholder) — substituir por foto real Lu Medical.
 * Fundo CLARO → data-section-theme="light" (TopBar inverte p/ preto).
 */
const PORTRAIT_SRC = "/images/everbrow/retrato.webp";

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

        // Fase 2 — card entra em cena: fade + sobe + leve zoom. Como a janela é um
        // VAZADO (não imagem fixed), transform é seguro: o recorte varre o fundo e
        // assenta sobre a sobrancelha dela.
        tl.fromTo(
          cardRef.current,
          { opacity: 0, y: 64, scale: 0.96 },
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
        {/* Retrato full-bleed (fundo) — é ele que aparece pelo vazado do card */}
        <Image
          src={PORTRAIT_SRC}
          alt="Retrato de cliente em close, com sobrancelhas naturais e definidas pela Lu Medical"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 30%" }}
        />

        {/* Card centralizado sobre o rosto */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-5">
          <div
            ref={cardRef}
            style={animate ? { opacity: 0 } : undefined}
            className="w-full max-w-[440px] text-center shadow-[0_40px_90px_-50px_rgba(20,20,20,0.55)] [will-change:transform]"
          >
            {/* Janela VAZADA (miolo): moldura stone (borda) + centro TRANSPARENTE →
                revela o retrato real do fundo. Proporção 2:1 (landscape, igual ao
                Figma node 74:39). Sem borda embaixo. */}
            <div className="aspect-[2/1] w-full border-x-[16px] border-t-[16px] border-stone" />

            {/* Painel de texto (carrega o fundo stone do card) */}
            <div className="bg-stone px-7 pb-8 pt-8">
              <h2
                id="everbrow-heading"
                className="font-display text-[1.55rem] font-light uppercase tracking-[0.2em] text-ink"
              >
                Everbrow
              </h2>
              <p className="mt-1.5 text-[0.66rem] uppercase tracking-[0.18em] text-text-on-bone/65">
                By Lu Medical
              </p>

              <p className="mt-5 font-display text-[1rem] font-light leading-snug text-ink">
                O Transplante de Sobrancelhas
                <br />
                Exclusivo da Lu Medical
              </p>

              <p className="mx-auto mt-3.5 max-w-[38ch] text-[0.74rem] leading-relaxed text-text-on-bone/75">
                Everbrow é a tradução da visão inovadora de Lu Rodrigues: unir arte e
                ciência para oferecer às clientes um resultado impecável, seguro e
                exclusivo, o melhor transplante de sobrancelhas que você já conheceu.
              </p>

              <div className="mt-6">
                <Cta href={buildWhatsAppLink()} external variant="outline" tone="on-bone">
                  Agendar horário
                </Cta>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
