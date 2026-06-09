import Image from "next/image";
import { Logo } from "@/components/ui/Logo";
import { ScrollCue } from "@/components/ui/ScrollCue";

/**
 * S1 · HERO — réplica do Figma (rUAWQOnyIjy7zNstGDtSGN, node 40:137).
 * Composição: foto full-bleed das duas mulheres · headline "BE ALWAYS READY"
 * no CENTRO vertical do hero · cue de scroll logo abaixo · lockup da marca
 * (logo oficial) na parte inferior central.
 *
 * Server component — renderiza sem JS (protege o LCP). Sem CLS.
 * Texto branco sobre foto, com scrims sutis para contraste AA (§9).
 *
 * ⚠️ TODO:CONFIRMAR — texto exato do cue de scroll (aprox. "Role para explorar").
 */
export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-black">
      {/* Imagem de fundo — priority para LCP */}
      <Image
        src="/images/hero.png"
        alt="Retrato editorial de duas mulheres com pele natural, em fundo escuro"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_12%]"
      />

      {/* Scrim do topo (legibilidade da top bar) */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/45 to-transparent" />
      {/* Gradiente de transição hero → próxima seção: preto 100% na base,
          esmaecendo até transparente (emenda invisível com o fundo preto). */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-[64%] bg-gradient-to-t from-black from-[8%] via-black/45 to-transparent" />

      {/* Headline — só o título, centralizado e levemente abaixo do meio */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center">
        {/* Headline em SVG (lettering oficial). <h1> real oculto para SEO/AEO. */}
        <h1 className="w-[82vw] max-w-[426px] text-white">
          <span className="sr-only">Be Always Ready</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/brand/be-always-ready.svg"
            alt=""
            aria-hidden="true"
            className="h-auto w-full"
          />
        </h1>
      </div>

      {/* Lockup da marca — inferior central (logo oficial completo) */}
      <div className="absolute inset-x-0 bottom-[12vh] z-10 flex justify-center px-6 text-white">
        <Logo className="h-[82px] w-auto" />
      </div>

      {/* CTA de scroll — seta animada na base */}
      <div className="absolute inset-x-0 bottom-5 z-10 flex justify-center">
        <ScrollCue />
      </div>
    </section>
  );
}
