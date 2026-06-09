"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Monogram } from "@/components/ui/Monogram";
import { buildWhatsAppLink } from "@/lib/whatsapp";

/**
 * S0 · Top bar — réplica do Figma (node 40:137).
 * Layout: hambúrguer (esquerda) · monograma (centro) · "AGENDAR HORÁRIO" (direita).
 * Nav completa vive no overlay do menu (inclusive no desktop, como no Figma).
 * Transparente sobre o hero; ganha fundo preto ao scrollar.
 *
 * A11y: botão real com aria-expanded/aria-controls; overlay fecha no Esc e
 * por clique fora; foco visível; nav navegável por teclado.
 */
const NAV = [
  { href: "/a-casa", label: "A Casa" },
  { href: "/servicos", label: "Serviços" },
  { href: "/lu-medical", label: "Lu Medical" },
  { href: "/instituto-living-sculpture", label: "Instituto" },
  { href: "/diario", label: "Diário" },
  { href: "/localizacoes", label: "Localizações" },
];

export function TopBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Faixa translúcida com blur (vidro fosco), sempre visível — réplica do Figma
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-white/10 backdrop-blur-md">
      <div className="relative mx-auto flex h-16 max-w-[var(--container-boutique)] items-center justify-between px-6 lg:px-10">
        {/* Hambúrguer (esquerda) */}
        <button
          type="button"
          className="flex flex-col gap-[7px] p-2 text-white"
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
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 text-white transition-colors hover:text-brass sm:block"
          aria-label="Lu Make Up — início"
        >
          <Monogram className="h-[37px] w-auto" />
        </Link>

        {/* CTA (direita) — botão outline, como a referência */}
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap border border-white/45 px-3.5 py-2 text-[0.6rem] uppercase tracking-[0.16em] text-white transition-colors hover:border-white hover:bg-white/10 sm:px-4 sm:py-2 sm:text-[0.68rem]"
        >
          Agendar horário
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
