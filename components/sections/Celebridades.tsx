"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Kicker } from "@/components/ui/Kicker";
import { SizeTag } from "@/components/ui/SizeTag";

/**
 * Prova social · clientes públicas. Galeria de celebridades atendidas pela
 * Lu Make Up (migrada do site atual). Uso de imagem AUTORIZADO pelo cliente.
 * ⚠️ TODO:CONFIRMAR grafia exata dos nomes com a Lu.
 *
 * Interação (mobile sobretudo): as fotos são P&B por padrão. Ao TOCAR numa,
 * ela colore e dá um leve zoom; volta ao P&B sozinha após 2s. Só uma ativa por
 * vez · tocar outra acende a nova e apaga a anterior. No desktop, o hover do
 * mouse também colore (comportamento nativo mantido).
 */
const CELEBS: { slug: string; name: string }[] = [
  { slug: "bruna-marquezine", name: "Bruna Marquezine" },
  { slug: "grazi-massafera", name: "Grazi Massafera" },
  { slug: "sabrina-sato", name: "Sabrina Sato" },
  { slug: "debora-secco", name: "Débora Secco" },
  { slug: "paola-oliveira", name: "Paola Oliveira" },
  { slug: "thais-araujo", name: "Thaís Araújo" },
  { slug: "flavia-alessandra", name: "Flávia Alessandra" },
  { slug: "izabel-goulart", name: "Izabel Goulart" },
  { slug: "silvia-poppovic", name: "Silvia Poppovic" },
  { slug: "gilberto-gil", name: "Gilberto Gil e família" },
];

const REVERT_MS = 2000; // volta ao P&B após 2s

export function Celebridades() {
  const [active, setActive] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  const activate = (slug: string) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setActive(slug); // acende a tocada (e implicitamente apaga a anterior)
    timerRef.current = setTimeout(() => setActive(null), REVERT_MS);
  };

  return (
    <section aria-labelledby="celebridades-heading" className="bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="max-w-[640px]">
          <Kicker>Confiança</Kicker>
          <h2
            id="celebridades-heading"
            className="mt-5 font-display text-[1.42rem] font-light leading-[1.16] text-text-on-ink sm:text-[2rem] sm:leading-[1.12] lg:text-[2.6rem]"
          >
            Quem confia o próprio olhar
            <br />
            à Lu Make Up
          </h2>
          <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-muted">
            De atrizes e apresentadoras a mulheres que atravessaram o câncer: o mesmo
            cuidado, a mesma discrição.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
          {CELEBS.map((c) => {
            const isOn = active === c.slug;
            return (
              <li key={c.slug}>
                <button
                  type="button"
                  onClick={() => activate(c.slug)}
                  aria-pressed={isOn}
                  aria-label={`${c.name} · ver foto em cor`}
                  className="block w-full cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brass"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-stone/10">
                    <Image
                      src={`/images/celebridades/${c.slug}.webp`}
                      alt={`${c.name} · cliente da Lu Make Up`}
                      fill
                      sizes="(min-width:1024px) 230px, (min-width:640px) 30vw, 45vw"
                      className={[
                        "object-cover transition-all duration-700 ease-out hover:grayscale-0 hover:scale-[1.05]",
                        isOn ? "grayscale-0 scale-[1.05]" : "grayscale scale-100",
                      ].join(" ")}
                    />
                    <SizeTag size="900 × 1200 px" />
                  </div>
                  <p className="mt-3 font-display text-sm font-light text-text-on-ink">{c.name}</p>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
