"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Kicker } from "@/components/ui/Kicker";
import { SERVICES } from "@/lib/services";

/**
 * S2 · Scroll horizontal de Serviços (§4). Pin + translateX acionado pelo
 * scroll vertical (GSAP/ScrollTrigger). Sobrancelha em primeiro (🎯).
 *
 * A11y/perf (§9):
 *  - Fallback estático sob prefers-reduced-motion: vira carrossel nativo
 *    (overflow-x-auto + scroll-snap), 100% teclado/toque, sem JS de animação.
 *  - Mesmo fallback no mobile (a animação pinada é só desktop).
 *  - Cards são <a> reais, navegáveis por teclado e foco visível.
 *  - Sem CLS: a faixa tem dimensões definidas via CSS desde o SSR.
 */
export function ServicesScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (prefersReduced || !isDesktop) return; // mantém fallback estático

    let ctx: { revert: () => void } | undefined;
    let cancelled = false;

    (async () => {
      const gsapMod = await import("gsap");
      const stMod = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      const gsap = gsapMod.gsap ?? gsapMod.default;
      const ScrollTrigger = stMod.ScrollTrigger ?? stMod.default;
      gsap.registerPlugin(ScrollTrigger);

      setAnimated(true); // troca o layout para o modo animado (track largo)

      ctx = gsap.context(() => {
        const track = trackRef.current!;
        const section = sectionRef.current!;
        const distance = track.scrollWidth - window.innerWidth;

        gsap.to(track, {
          x: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${distance}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
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
      aria-labelledby="servicos-heading"
      className="bg-ink py-24 lg:py-0"
    >
      {/* Cabeçalho */}
      <div className="mx-auto max-w-[var(--container-boutique)] px-6 lg:px-10 lg:pt-28">
        <Kicker as="h2">O Ateliê</Kicker>
        <p id="servicos-heading" className="mt-4 max-w-xl font-display text-3xl font-light leading-tight text-text-on-ink sm:text-4xl">
          Cada serviço, um estudo do seu rosto.
        </p>
      </div>

      {/* Faixa de cards */}
      <div
        className={
          animated
            ? "mt-14 lg:flex lg:items-center lg:overflow-hidden"
            : "mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-6 lg:px-10 [scrollbar-width:thin]"
        }
      >
        <div
          ref={trackRef}
          className={
            animated
              ? "flex gap-6 px-6 lg:px-10"
              : "flex gap-6"
          }
        >
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/servicos/${service.slug}`}
              className="group block w-[78vw] shrink-0 snap-start sm:w-[60vw] md:w-[44vw] lg:w-[26vw] xl:w-[22vw]"
            >
              <ImageSlot
                alt={service.alt}
                art={service.art}
                ratio="3 / 4"
                tone="ink"
                label={service.label}
                sizes="(min-width:1024px) 24vw, 70vw"
                className="transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              />
              <div className="mt-4 flex items-baseline justify-between">
                <span className="text-sm uppercase tracking-[0.16em] text-text-on-ink/90 group-hover:text-brass">
                  {service.label}
                </span>
                {service.hero ? (
                  <span className="kicker text-brass/80">Herói</span>
                ) : null}
              </div>
              <p className="mt-1 max-w-[34ch] text-sm leading-snug text-muted">
                {service.essence}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
