"use client";

import { useEffect, useRef, useState } from "react";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { buildWhatsAppLink } from "@/lib/whatsapp";

/**
 * S3 · "A arte da beleza discreta" — seção scroll-pinned com parallax (réplica do
 * Figma node 53:121 + interação descrita pelo cliente).
 *
 * Animação (controlada pelo scroll, via GSAP ScrollTrigger pin/scrub):
 *  Fase 1 — revelação: o headline + botão surgem (blur→foco + fade) no fundo preto.
 *  Fase 2 — parallax: as 5 imagens sobem de baixo p/ cima, ESCALONADAS, passando
 *           por trás do headline, até saírem pelo topo.
 *  Fase 3 — solta o pin e o bloco sobe, puxando a próxima seção.
 *
 * Fallback (prefers-reduced-motion): colagem estática (sem pin/scroll), sem CLS.
 * Posições/imagens do Figma (export do cliente). ⚠️ posições a afinar.
 */
type Piece = {
  src: string;
  alt: string;
  left: string;
  top: string;
  width: string;
  ratio: string;
};

const COLLAGE: Piece[] = [
  { src: "/images/beleza-discreta/sorriso.png", alt: "Retrato de mulher sorrindo, pele natural", left: "4.5%", top: "3%", width: "27.6%", ratio: "249 / 380" },
  { src: "/images/beleza-discreta/mao-rosto.png", alt: "Retrato de mulher com a mão no rosto", left: "64%", top: "6%", width: "23%", ratio: "201 / 362" },
  { src: "/images/beleza-discreta/madura.png", alt: "Retrato de mulher madura, olhar sereno", left: "33%", top: "43%", width: "31%", ratio: "312 / 444" },
  { src: "/images/beleza-discreta/loira.png", alt: "Retrato editorial de mulher loira", left: "72%", top: "38%", width: "31%", ratio: "312 / 444" },
  { src: "/images/beleza-discreta/sobrancelha.png", alt: "Detalhe de sobrancelha e olhar", left: "3%", top: "82%", width: "33.4%", ratio: "288 / 172" },
];

// Animação por imagem na linha do tempo (0..1): início + duração (= velocidade).
// Cada imagem percorre a tela inteira (de baixo da viewport até acima dela).
// Inícios espalhados + durações variadas = parallax real (não sobem em bloco).
const IMG_ANIM = [
  { start: 0.06, dur: 0.28 }, // sorriso — entra primeiro
  { start: 0.18, dur: 0.24 }, // mao-rosto — rápida
  { start: 0.32, dur: 0.34 }, // madura — lenta (fundo)
  { start: 0.44, dur: 0.24 }, // loira — rápida
  { start: 0.54, dur: 0.3 }, // sobrancelha — última, média
];

export function BelezaDiscreta() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const btnRef = useRef<HTMLAnchorElement | null>(null);
  const imgRefs = useRef<Array<HTMLDivElement | null>>([]);
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
        // Fase 1 — revelação ANTECIPADA: gatilho próprio que começa enquanto a
        // seção ainda está ENTRANDO (top em 85% da viewport), para o headline já
        // aparecer logo que o carrossel sai — sem gap preto. Título com blur→foco;
        // botão só com fade (sem `filter`, para o backdrop-blur dele funcionar).
        const tlReveal = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 88%",
            end: "top top",
            scrub: 1,
          },
        });
        tlReveal.fromTo(
          titleRef.current,
          { opacity: 0, filter: "blur(14px)" },
          { opacity: 1, filter: "blur(0px)", ease: "none" },
          0
        );
        tlReveal.fromTo(
          btnRef.current,
          { opacity: 0 },
          { opacity: 1, ease: "none" },
          0.15
        );
        // Fase 2 — imagens subindo: percurso COMPLETO (abaixo da viewport → acima),
        // com inícios e velocidades variados (parallax real). Todas saem até ~0.70.
        imgRefs.current.forEach((el, i) => {
          if (!el) return;
          const a = IMG_ANIM[i];
          tl.fromTo(
            el,
            { y: 0 },
            {
              y: () => -(window.innerHeight + el.offsetHeight + 60),
              duration: a.dur,
              ease: "none",
            },
            a.start
          );
        });
        // Fase 3 — o headline SOBE em sincronia com a entrada da Be Bold (que é
        // puxada pra cima via -mt-[100vh] e começa a aparecer ~0.71). Começando a
        // subida em 0.70 com ease linear, a Be Bold parece EMPURRAR o título pra
        // cima (em vez de cobri-lo parado). Percurso longo p/ casar com o scroll.
        // Sobe LENTO no começo (movimento gentil aprovado) e ACELERA no fim
        // (power1.in) p/ o título sair completamente antes da Be Bold cobrir —
        // assim a Be Bold não encavala em cima do título "Beleza Discreta".
        tl.to(textRef.current, { yPercent: -40, duration: 0.3, ease: "power1.in" }, 0.72);

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
      aria-labelledby="beleza-discreta-titulo"
      className={`relative bg-black ${animate ? "h-[450vh]" : "py-16 lg:py-24"}`}
    >
      <div className={animate ? "sticky top-0 h-screen overflow-hidden" : ""}>
        <div
          className={`relative mx-auto w-full max-w-[1100px] ${animate ? "h-full" : "aspect-[1150/1007]"}`}
        >
          {COLLAGE.map((p, i) => (
            <div
              key={p.src}
              ref={(el) => {
                imgRefs.current[i] = el;
              }}
              className="absolute will-change-transform"
              style={{ left: p.left, top: animate ? "100%" : p.top, width: p.width }}
            >
              <ImageSlot src={p.src} alt={p.alt} art={p.alt} ratio={p.ratio} tone="ink" sizes="(min-width:1024px) 320px, 30vw" />
            </div>
          ))}

          {/* Headline + CTA — repouso um pouco ACIMA do centro (pt-[40vh]) p/ o
              título aparecer mais cedo na entrada (menos preto entre carrossel e
              esta dobra). ⚠️ Acoplado à saída: como repousa mais alto, a fase 3
              usa yPercent menor (-40) p/ não "correr na frente" da Be Bold. */}
          <div
            ref={textRef}
            className="absolute inset-0 z-20 flex flex-col items-center justify-start px-6 pt-[40vh] text-center"
          >
            <h2
              ref={titleRef}
              id="beleza-discreta-titulo"
              className="text-2xl font-light uppercase leading-[1.35] tracking-[0.22em] text-white sm:text-3xl lg:text-[2.4rem]"
              style={animate ? { opacity: 0, filter: "blur(14px)" } : undefined}
            >
              A arte da
              <br />
              beleza discreta
            </h2>
            <a
              ref={btnRef}
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 whitespace-nowrap border border-white/45 bg-black/20 px-4 py-2 text-[0.6rem] uppercase tracking-[0.16em] text-white backdrop-blur-md transition-colors hover:border-white hover:bg-black/40 sm:text-[0.68rem]"
              style={animate ? { opacity: 0 } : undefined}
            >
              Agendar horário
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
