"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Cta } from "@/components/ui/Cta";
import { buildWhatsAppLink } from "@/lib/whatsapp";

/**
 * S7 · "Everbrow — By Lu Medical" — réplica do Figma (node 69:20) + interação
 * descrita pelo cliente.
 *
 * Sequência scroll-pinned (GSAP ScrollTrigger pin via CSS sticky + scrub):
 *  Fase 1 — o RETRATO ocupa a viewport inteira (full-bleed) e TRAVA (sticky).
 *  Fase 2 — continuando o scroll, o CARD ENTRA EM CENA (fade + sobe + leve zoom +
 *           blur→foco) e se fixa CENTRALIZADO sobre o rosto dela.
 *  Fase 3 — card fixo; seguindo o scroll, o sticky SOLTA e tudo sobe junto
 *           (rosto + card), indo para a próxima dobra.
 *
 * No Figma o card estava FORA do frame (sobre o canvas cinza) — não era painel
 * escuro de design. O comportamento real veio dos prints do cliente.
 *
 * ⚠️ Retrato e close das sobrancelhas = stock extraído do Figma — placeholders;
 *    substituir por fotos reais da Lu Medical.
 *
 * Fundo CLARO → data-section-theme="light" (TopBar inverte p/ preto).
 * Fallback (SSR/pré-hidratação): card já visível, centralizado, sem pin.
 */
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

        // Fase 2 — o card entra em cena. Antes de 0.12 ele fica no estado "from"
        // (invisível): a fase 1 é o retrato cheio sozinho. Entra subindo, com um
        // leve zoom e o blur resolvendo p/ foco — delicado, quiet luxury. Depois
        // de ~0.48 não há mais tween: o card SEGURA fixo até o sticky soltar.
        tl.fromTo(
          cardRef.current,
          { opacity: 0, y: 70, scale: 0.94, filter: "blur(10px)" },
          { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 0.36, ease: "power2.out" },
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
        {/* Retrato full-bleed */}
        <Image
          src="/images/everbrow/retrato.webp"
          alt="Retrato de cliente em close, com sobrancelhas naturais e definidas pela Lu Medical"
          fill
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />

        {/* Card centralizado sobre o rosto */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-5">
          <div
            ref={cardRef}
            style={animate ? { opacity: 0 } : undefined}
            className="w-full max-w-[440px] bg-stone px-7 pb-9 pt-7 text-center shadow-[0_40px_90px_-50px_rgba(20,20,20,0.55)] will-change-transform sm:px-9"
          >
            {/* Janela — close das sobrancelhas */}
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src="/images/everbrow/sobrancelhas.webp"
                alt="Close das sobrancelhas naturais e definidas após o procedimento Everbrow"
                fill
                sizes="(min-width:640px) 360px, 80vw"
                className="object-cover object-[center_22%]"
              />
            </div>

            <h2
              id="everbrow-heading"
              className="mt-7 font-display text-[1.9rem] font-light uppercase tracking-[0.22em] text-ink"
            >
              Everbrow
            </h2>
            <p className="mt-1.5 text-[0.7rem] uppercase tracking-[0.18em] text-text-on-bone/65">
              By Lu Medical
            </p>

            <p className="mt-6 font-display text-[1.15rem] font-light leading-snug text-ink">
              O Transplante de Sobrancelhas
              <br />
              Exclusivo da Lu Medical
            </p>

            <p className="mx-auto mt-4 max-w-[36ch] text-[0.78rem] leading-relaxed text-text-on-bone/75">
              Everbrow é a tradução da visão inovadora de Lu Rodrigues: unir arte e
              ciência para oferecer às clientes um resultado impecável, seguro e
              exclusivo, o melhor transplante de sobrancelhas que você já conheceu.
            </p>

            <div className="mt-7">
              <Cta href={buildWhatsAppLink()} external variant="outline" tone="on-bone">
                Agendar horário
              </Cta>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
