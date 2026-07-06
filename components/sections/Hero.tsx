import Image from "next/image";
import { Cta } from "@/components/ui/Cta";
import { Kicker } from "@/components/ui/Kicker";
import { buildWhatsAppLink } from "@/lib/whatsapp";

/**
 * S1 · HERO · mensagem-mãe da Home.
 *
 * Conceito da campanha "Be Always Ready" traduzido em promessa de
 * empoderamento: a beleza já é da mulher; o ateliê revela e fortalece o que já
 * é seu. Ela acorda pronta para o dia, para liderar, para ser ela mesma.
 *
 * H1 de TEXTO real (SEO/AEO/GEO) no lugar do lettering em SVG. "Be Always
 * Ready" permanece como assinatura da campanha (kicker). CTA por convite,
 * conduzindo ao WhatsApp, sem compromisso.
 *
 * Server component · renderiza sem JS (protege o LCP). Sem CLS.
 * Texto branco sobre foto, com scrims para contraste AA (§9).
 */
export function Hero() {
  const agendar = buildWhatsAppLink();

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-black">
      {/* Imagem de fundo · ART DIRECTION (priority para LCP):
          MOBILE = recorte vertical da modelo; DESKTOP = foto larga original. */}
      <Image
        src="/images/hero-mobile.webp"
        alt="Retrato de mulher sorrindo, pele natural · Lu Make Up"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_22%] md:hidden"
      />
      <Image
        src="/images/hero.png"
        alt="Retrato editorial de duas mulheres com pele natural, em fundo escuro"
        fill
        priority
        sizes="100vw"
        className="hidden object-cover object-[50%_12%] md:block"
      />

      {/* Scrim do topo (legibilidade da top bar) */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/45 to-transparent" />
      {/* Gradiente inferior · sustenta o bloco de texto com contraste AA e faz a
          emenda invisível com o fundo preto da próxima seção. */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-[78%] bg-gradient-to-t from-black from-[10%] via-black/55 to-transparent" />

      {/* Conteúdo · bloco inferior (kicker + H1 + subtítulo + CTAs) */}
      <div className="absolute inset-0 z-10 flex items-end">
        <div className="mx-auto w-full max-w-[1280px] px-6 pb-20 lg:px-8 lg:pb-24 min-[2000px]:pb-32">
          <Kicker tone="on-ink">Be Always Ready</Kicker>
          <h1 className="mt-4 max-w-[16ch] font-display text-[2.1rem] font-light leading-[1.08] text-text-on-ink sm:text-[2.6rem] lg:text-[3.1rem] min-[2000px]:text-[3.6rem]">
            Você já nasceu pronta.
          </h1>
          <p className="mt-5 max-w-[48ch] text-base leading-relaxed text-text-on-ink/85 lg:text-lg">
            A sua beleza já existe. Nós revelamos e fortalecemos o que é seu, com
            naturalidade, para você acordar pronta para o dia e para tudo o que ele
            pedir. Sobrancelhas, lábios e olhar, na assinatura de Lu Rodrigues desde 2002.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Cta href={agendar} external variant="outline">
              Agendar avaliação
            </Cta>
            <Cta href="/servicos" variant="quiet">
              Ver os serviços
            </Cta>
          </div>
          <p className="mt-5 text-[0.7rem] uppercase tracking-[0.16em] text-text-on-ink/55">
            Sem compromisso, no WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
}
