"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Monogram } from "@/components/ui/Monogram";
import { buildWhatsAppLink } from "@/lib/whatsapp";

/**
 * S0 · Top bar · réplica do Figma (node 40:137).
 * Layout: hambúrguer (esquerda) · monograma (centro) · "AGENDAR HORÁRIO" (direita).
 * Nav completa vive no overlay do menu (inclusive no desktop, como no Figma).
 *
 * ⚠️ NAV REATIVA À COR DO FUNDO: a barra é transparente e flutua sobre as seções.
 * Quando a seção atrás é CLARA (`data-section-theme="light"` · ex.: Be Bold,
 * Depoimentos), os elementos brancos sumiriam; então invertemos logo/hambúrguer/
 * botão para PRETO. Detecção pela seção que cruza a base da barra (scroll + rAF).
 *
 * A11y: botão real com aria-expanded/aria-controls; overlay fecha no Esc e
 * por clique fora; foco visível; nav navegável por teclado.
 */
const NAV = [
  { href: "/a-casa", label: "O Ateliê" },
  { href: "/servicos", label: "Serviços" },
  { href: "/lu-medical", label: "Lu Medical" },
  { href: "/instituto-living-sculpture", label: "Instituto" },
  { href: "/diario", label: "Notícias" },
  { href: "/localizacoes", label: "Localizações" },
];

const BAR_H = 64; // h-16

export function TopBar() {
  const [open, setOpen] = useState(false);
  const [overLight, setOverLight] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Detecta se a seção sob a barra é clara → inverte os elementos pra preto.
  // IntersectionObserver com uma "linha" de 1px na base da barra (y=BAR_H):
  // a seção clara que cruza essa linha está sob a barra. Robusto (independe de
  // eventos de scroll, que nem sempre disparam com scroll programático/smooth).
  useEffect(() => {
    // Reset ao trocar de rota (nova página costuma abrir sobre seção escura) e
    // RE-OBSERVA as seções da página atual · a TopBar persiste no layout, então o
    // observer precisa reconstruir a cada navegação (dep: pathname).
    setOverLight(false);
    const sections = Array.from(
      document.querySelectorAll('[data-section-theme="light"]'),
    );
    if (sections.length === 0) return;

    const live = new Set<Element>();
    let io: IntersectionObserver | null = null;

    const build = () => {
      io?.disconnect();
      live.clear();
      const bottom = Math.max(0, window.innerHeight - BAR_H - 1);
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) live.add(e.target);
            else live.delete(e.target);
          }
          setOverLight(live.size > 0);
        },
        { rootMargin: `-${BAR_H}px 0px -${bottom}px 0px`, threshold: 0 },
      );
      sections.forEach((s) => io!.observe(s));
    };

    build();
    window.addEventListener("resize", build);
    return () => {
      io?.disconnect();
      window.removeEventListener("resize", build);
    };
  }, [pathname]);

  // Elementos escuros só quando sobre seção clara E menu fechado (menu aberto =
  // contexto escuro, elementos brancos).
  const dark = overLight && !open;

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-colors duration-300",
        open
          ? "border-white/10 bg-black/95"
          : dark
            ? "border-black/[0.06] bg-transparent"
            : "border-white/10 bg-white/10",
      ].join(" ")}
    >
      <div className="relative mx-auto flex h-16 max-w-[var(--container-boutique)] items-center justify-between px-6 lg:px-10">
        {/* Hambúrguer (esquerda) */}
        <button
          type="button"
          className={`flex flex-col gap-[7px] p-2 transition-colors duration-300 ${dark ? "text-ink" : "text-white"}`}
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-[2px] w-8 bg-current" />
          <span className="block h-[2px] w-8 bg-current" />
          <span className="block h-[2px] w-8 bg-current" />
        </button>

        {/* Monograma (centro absoluto). Oculto no mobile p/ não colidir com o botão. */}
        <Link
          href="/"
          className={`absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transition-colors duration-300 hover:text-brass sm:block ${dark ? "text-ink" : "text-white"}`}
          aria-label="Lu Make Up · início"
        >
          <Monogram className="h-[37px] w-auto" />
        </Link>

        {/* CTA (direita) · botão outline, como a referência */}
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className={[
            "whitespace-nowrap border px-3.5 py-2 text-[0.6rem] uppercase tracking-[0.16em] transition-colors duration-300 sm:px-4 sm:py-2 sm:text-[0.68rem]",
            dark
              ? "border-ink/35 text-ink hover:border-ink hover:bg-ink/[0.04]"
              : "border-white/45 text-white hover:border-white hover:bg-white/10",
          ].join(" ")}
        >
          Agendar avaliação
        </a>
      </div>

      {/* Overlay de navegação */}
      {open ? (
        <nav
          id="primary-nav"
          aria-label="Navegação principal"
          className="border-t border-line-subtle bg-black/95 backdrop-blur-sm"
        >
          <ul className="mx-auto flex max-w-[var(--container-boutique)] flex-col gap-6 px-6 py-12 lg:px-10">
            {/* Início (voltar p/ home) · só no mobile; no desktop o monograma já leva à home. */}
            <li className="sm:hidden">
              <Link
                href="/"
                className="font-display text-3xl font-light text-white transition-colors hover:text-brass"
                onClick={() => setOpen(false)}
              >
                Início
              </Link>
            </li>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-display text-3xl font-light text-white transition-colors hover:text-brass"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
