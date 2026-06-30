import type { Metadata } from "next";
import Image from "next/image";
import { Cta } from "@/components/ui/Cta";
import { Kicker } from "@/components/ui/Kicker";
import { SITE } from "@/lib/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

/**
 * A Casa (§3/§11 P2) — institucional "Sobre". Reúne História + Fundadora
 * (#lu-rodrigues) + Pigmentos (#pigmentos) + Espaço numa página só. Fatos
 * estabelecidos: fundação em 2002, +20 anos, pigmentos próprios sem metais
 * pesados, unidades (lib/site). ⚠️ TODO:CONFIRMAR formação internacional,
 * marcos e números específicos da trajetória da Lu Rodrigues.
 */
export const metadata: Metadata = {
  title: "A Casa — Sobre a Lu Make Up",
  description:
    "Desde 2002, a Lu Make Up é um instituto de micropigmentação de assinatura fundado por Lu Rodrigues. Conheça a história, a fundadora, os pigmentos próprios e o espaço.",
  alternates: { canonical: "/a-casa" },
};

export default function ACasa() {
  return (
    <>
      {/* HERO full-bleed */}
      <section aria-labelledby="acasa-heading" className="relative flex min-h-[80svh] items-end overflow-hidden bg-ink">
        <Image
          src="/images/a-casa/hero.webp"
          alt="Lu Rodrigues, fundadora da Lu Make Up"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 30%" }}
          priority
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 pb-20 lg:px-8 lg:pb-28">
          <Kicker>A Casa · Desde 2002</Kicker>
          <h1
            id="acasa-heading"
            className="mt-5 font-display text-[2.6rem] font-light uppercase leading-[1.05] tracking-[0.04em] text-text-on-ink sm:text-[3.4rem] lg:text-[4.4rem]"
          >
            A Casa
          </h1>
          <p className="mt-6 max-w-[40ch] font-display text-xl font-light leading-snug text-text-on-ink/90 lg:text-2xl">
            Mais de vinte anos refinando uma única obsessão: realçar sem revelar a técnica.
          </p>
        </div>
      </section>

      {/* MANIFESTO / História */}
      <section aria-labelledby="historia-heading" data-section-theme="light" className="bg-bone py-24 lg:py-32">
        <div className="mx-auto max-w-[860px] px-6 text-center lg:px-8">
          <Kicker>O Instituto</Kicker>
          <h2 id="historia-heading" className="mt-5 font-display text-[2rem] font-light leading-[1.15] text-text-on-bone lg:text-[2.6rem]">
            Uma casa de micropigmentação de assinatura
          </h2>
          <p className="mx-auto mt-8 max-w-[62ch] text-base leading-relaxed text-text-on-bone/80 lg:text-lg">
            {SITE.boilerplate} Desde o primeiro dia, uma convicção orienta cada gesto:
            o resultado mais bonito é aquele que ninguém percebe ser feito. Não vendemos
            um procedimento — devolvemos a quem nos procura a sensação de se reconhecer no
            espelho, com discrição e naturalidade.
          </p>
        </div>
      </section>

      {/* FUNDADORA */}
      <section id="lu-rodrigues" aria-labelledby="fundadora-heading" className="overflow-hidden bg-ink scroll-mt-20">
        <div className="mx-auto grid max-w-[1280px] lg:grid-cols-2">
          <div className="relative min-h-[460px] lg:min-h-[680px]">
            <Image
              src="/images/a-casa/fundadora.webp"
              alt="Retrato de Lu Rodrigues, fundadora da Lu Make Up"
              fill
              sizes="(min-width:1024px) 640px, 100vw"
              className="object-cover"
              style={{ objectPosition: "center 25%" }}
            />
          </div>
          <div className="px-6 py-20 lg:px-16 lg:py-32">
            <Kicker>A Fundadora</Kicker>
            <h2 id="fundadora-heading" className="mt-5 font-display text-[2rem] font-light leading-[1.15] text-text-on-ink lg:text-[2.6rem]">
              Lu Rodrigues
            </h2>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted lg:text-lg">
              <p>
                Pioneira da micropigmentação de assinatura no Brasil, Lu Rodrigues fundou
                a Lu Make Up em 2002 e, desde então, transformou a técnica em uma forma de
                arte — guiada pelo visagismo, pela colorimetria e por um respeito absoluto
                à anatomia de cada rosto.
              </p>
              <p>
                Sua busca pela excelência a levou a aperfeiçoar-se continuamente e a
                desenvolver os próprios pigmentos, livres de metais pesados, pensados para
                um envelhecer bonito da cor. {/* TODO:CONFIRMAR formação internacional (Europa, China) e marcos da trajetória. */}
              </p>
              <p>
                Hoje, a sua técnica autoral é referência — e cada profissional da casa é
                formado sob o mesmo rigor e a mesma sensibilidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PIGMENTOS */}
      <section id="pigmentos" aria-labelledby="pigmentos-heading" data-section-theme="light" className="overflow-hidden bg-bone scroll-mt-20">
        <div className="mx-auto grid max-w-[1280px] lg:grid-cols-2">
          <div className="order-2 px-6 py-20 lg:order-1 lg:px-16 lg:py-32">
            <Kicker>Os Pigmentos</Kicker>
            <h2 id="pigmentos-heading" className="mt-5 font-display text-[2rem] font-light leading-[1.15] text-text-on-bone lg:text-[2.6rem]">
              A cor nasce na própria casa
            </h2>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-text-on-bone/80 lg:text-lg">
              <p>
                Os pigmentos da Lu Make Up são desenvolvidos pela própria Lu Rodrigues,
                livres de metais pesados. Não é um detalhe técnico — é o que separa um
                resultado que envelhece bonito de um que esmaece em tons indesejados.
              </p>
              <p>
                Cada cor é escolhida a partir do seu subtom de pele, em um estudo de
                colorimetria que antecede qualquer agulha. O objetivo é sempre o mesmo:
                uma cor que parece sua — nunca aplicada. {/* TODO:CONFIRMAR linha/nome dos pigmentos e certificações. */}
              </p>
            </div>
          </div>
          <div className="relative order-1 min-h-[420px] lg:order-2 lg:min-h-[620px]">
            <Image
              src="/images/a-casa/pigmentos.webp"
              alt="Detalhe do trabalho de micropigmentação — colorimetria e pigmentos próprios"
              fill
              sizes="(min-width:1024px) 640px, 100vw"
              className="object-cover"
              style={{ objectPosition: "center 40%" }}
            />
          </div>
        </div>
      </section>

      {/* O ESPAÇO */}
      <section aria-labelledby="espaco-heading" className="bg-ink py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="max-w-[640px]">
            <Kicker>O Espaço</Kicker>
            <h2 id="espaco-heading" className="mt-5 font-display text-[2rem] font-light leading-[1.15] text-text-on-ink lg:text-[2.4rem]">
              Ateliês pensados para o seu conforto
            </h2>
            <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-muted">
              Salas privativas, biossegurança hospitalar e a atmosfera de quem trata cada
              atendimento como um ritual. Abaixo, a unidade São Paulo.
              {/* TODO:CONFIRMAR endereços/legendas por unidade (entram nas Localizações). */}
            </p>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6">
            {[1, 2, 3, 4, 5].map((n) => (
              <div
                key={n}
                className={`relative overflow-hidden bg-stone/10 ${n === 1 ? "col-span-2 aspect-[4/3] lg:row-span-2 lg:aspect-[3/4]" : "aspect-[3/4]"}`}
              >
                <Image
                  src={`/images/a-casa/espaco-${n}.webp`}
                  alt={`Unidade São Paulo da Lu Make Up — ambiente ${n}`}
                  fill
                  sizes="(min-width:1024px) 400px, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section data-section-theme="light" className="bg-bone py-24 text-center lg:py-32">
        <div className="mx-auto max-w-[680px] px-6 lg:px-8">
          <h2 className="font-display text-[1.9rem] font-light leading-[1.15] text-text-on-bone lg:text-[2.4rem]">
            Conheça a casa de perto
          </h2>
          <p className="mx-auto mt-5 max-w-[46ch] text-sm leading-relaxed text-text-on-bone/75">
            Agende uma avaliação personalizada e descubra o que a técnica da Lu Make Up
            pode fazer pelo seu traço.
          </p>
          <div className="mt-9 flex justify-center">
            <Cta href={buildWhatsAppLink()} external variant="solid" tone="on-bone">
              Falar com o ateliê
            </Cta>
          </div>
        </div>
      </section>
    </>
  );
}
