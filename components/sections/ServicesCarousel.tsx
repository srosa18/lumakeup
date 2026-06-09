"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ImageSlot } from "@/components/ui/ImageSlot";

/**
 * S2 · Carrossel de serviços — réplica do Figma (canvas node 50:38).
 *
 * Posições/tamanho/sangria/rotações: do Figma (valores via get_design_context).
 *
 * Interação (versão simples e aprovada):
 *  - Direção pela posição do mouse: metade esquerda → desliza p/ a direita;
 *    metade direita → desliza p/ a esquerda; velocidade ∝ distância do centro;
 *    no centro, parado. Finito (clampado, sem loop).
 *  - Arco assimétrico gentil (trilho): esquerda alta → direita baixa.
 *  - Click-and-drag (desktop) e swipe nativo (touch).
 *
 * Listeners de ponteiro nativos + rAF (confiável).
 */
type Product = {
  slug: string;
  label: string;
  subtitle?: string;
  image: string;
  alt: string;
  rotation: number;
};

const PRODUCTS: Product[] = [
  { slug: "labios", label: "Lábios", image: "/images/servicos/labios.png", alt: "Detalhe de lábios com micropigmentação labial", rotation: -2.7 },
  { slug: "sobrancelhas", label: "Sobrancelha", image: "/images/servicos/sobrancelha.png", alt: "Detalhe de sobrancelha com micropigmentação fio a fio", rotation: -1.22 },
  { slug: "face", label: "Face", image: "/images/servicos/face.png", alt: "Retrato de rosto com pele natural", rotation: 0.26 },
  { slug: "capilar", label: "Capilar", image: "/images/servicos/capilar.png", alt: "Retrato com micropigmentação capilar", rotation: 1.73 },
  { slug: "exobrow", label: "Exobrow", subtitle: "Tratamento regenerativo", image: "/images/servicos/exobrow.png", alt: "Detalhe do olhar com técnica Exobrow", rotation: 3.21 },
];

const ARC_AMP = 0.5; // profundidade do arco (fração da largura do card)
const SCROLL_SPEED = 5; // px/frame no extremo (gentil)

export function ServicesCarousel() {
  const scroller = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;

    const s = { mouseNorm: 0, hovering: false, dragging: false, startX: 0, startLeft: 0 };

    const onMove = (e: PointerEvent) => {
      if (s.dragging) {
        el.scrollLeft = s.startLeft - (e.clientX - s.startX);
        return;
      }
      if (e.pointerType === "mouse") {
        const r = el.getBoundingClientRect();
        let n = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
        if (n > 1) n = 1;
        else if (n < -1) n = -1;
        s.mouseNorm = n;
        s.hovering = true;
      }
    };
    const onEnter = (e: PointerEvent) => {
      if (e.pointerType === "mouse") s.hovering = true;
    };
    const onLeave = (e: PointerEvent) => {
      if (e.pointerType === "mouse") {
        s.hovering = false;
        s.mouseNorm = 0;
      }
      s.dragging = false;
    };
    const onDown = (e: PointerEvent) => {
      if (e.pointerType === "mouse") {
        s.dragging = true;
        s.startX = e.clientX;
        s.startLeft = el.scrollLeft;
        el.setPointerCapture(e.pointerId);
      }
    };
    const onUp = () => {
      s.dragging = false;
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointerleave", onLeave);
    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);

    let raf = 0;
    const loop = () => {
      const vw = el.clientWidth;
      const cw = cardRefs.current[0]?.offsetWidth ?? 300;
      const max = el.scrollWidth - vw;
      // Sangria simétrica à direita: o scroll para 0.25 do card antes do fim,
      // então o Exobrow fica sempre cortado pela borda direita (igual à 1ª na esquerda).
      const effMax = Math.max(0, max - cw * 0.35);
      // Scroll dirigido pela posição do mouse (finito, clampado a effMax)
      if (!s.dragging) {
        let next = el.scrollLeft + (s.hovering ? s.mouseNorm * SCROLL_SPEED : 0);
        if (next < 0) next = 0;
        else if (next > effMax) next = effMax;
        el.scrollLeft = next;
      }
      // Arco assimétrico gentil: esquerda alta → direita baixa
      const amp = cw * ARC_AMP;
      for (let i = 0; i < cardRefs.current.length; i++) {
        const c = cardRefs.current[i];
        if (!c) continue;
        const center = c.offsetLeft + c.offsetWidth / 2 - el.scrollLeft;
        let n = (center - vw / 2) / (vw / 2);
        if (n > 1) n = 1;
        else if (n < -1) n = -1;
        const k = (n + 1) / 2;
        const ty = amp * (0.75 * k + 0.25 * k * k);
        // translate3d → composição na GPU (evita re-rasterizar as bordas giradas = sem shimmer)
        c.style.transform = `translate3d(0, ${ty.toFixed(1)}px, 0) rotate(${PRODUCTS[i].rotation}deg)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerleave", onLeave);
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
    };
  }, []);

  return (
    <section aria-label="Serviços" className="overflow-hidden bg-black pb-16 pt-0 lg:pb-20">
      <div
        ref={scroller}
        className="cursor-grab touch-pan-x select-none overflow-x-auto overflow-y-hidden overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
      >
        <div
          className="relative flex w-max items-start pb-52 pt-8"
          style={
            {
              "--card": "clamp(277px, 29vw, 396px)",
              gap: "calc(var(--card) * 0.0667)",
            } as React.CSSProperties
          }
        >
          {PRODUCTS.map((p, i) => (
            <Link
              key={p.slug}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              href={`/servicos/${p.slug}`}
              draggable={false}
              aria-label={p.subtitle ? `${p.label} — ${p.subtitle}` : p.label}
              className="group block w-[var(--card)] shrink-0 [backface-visibility:hidden] will-change-transform"
              style={{
                transform: `translate3d(0,0,0) rotate(${p.rotation}deg)`,
                marginLeft: i === 0 ? "calc(var(--card) * -0.25)" : undefined,
              }}
            >
              {/* O label já vem embutido na imagem exportada do Figma. */}
              <div className="relative overflow-hidden">
                <ImageSlot
                  src={p.image}
                  alt={p.alt}
                  art={p.alt}
                  ratio="1 / 1"
                  tone="ink"
                  sizes="(min-width:1024px) 396px, 75vw"
                  className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
