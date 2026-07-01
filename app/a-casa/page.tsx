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
  // §8 — Person (entidade Lu Rodrigues p/ E-E-A-T e grafo de conhecimento).
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Lu Rodrigues",
    jobTitle: "Fundadora e micropigmentadora",
    description:
      "Pioneira da micropigmentação de assinatura no Brasil e do estudo do Linergismo. Fundou a Lu Make Up em 2002.",
    worksFor: { "@type": "Organization", name: SITE.name, url: SITE.url },
    sameAs: [SITE.social.instagram],
  };

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
          <Kicker tone="on-ink">A Casa · Desde 2002</Kicker>
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
                a Lu Make Up em 2002, em Treze Tílias, Santa Catarina. O que começou como
                um estúdio no interior cresceu, ao longo de mais de duas décadas, até se
                tornar uma referência — hoje com unidades em São Paulo, Rio de Janeiro,
                Brasília, Manaus e Miami.
              </p>
              <p>
                Com formação em biomedicina e cosmetologia, é uma das pioneiras no estudo
                do Linergismo — a leitura das linhas do rosto. Sua busca pela excelência a
                levou a mais de cinco anos de atuação e aperfeiçoamento na Europa (Alemanha,
                França e Suíça) e a viagens de pesquisa até a China, absorvendo o que há de
                mais avançado em técnica e tecnologia.
              </p>
              <p>
                Dessa trajetória nasceram um método autoral e os próprios pigmentos, livres
                de metais pesados, pensados para um envelhecer bonito da cor. Hoje, mais do
                que executar, Lu forma cada profissional da casa sob o mesmo rigor e a mesma
                sensibilidade. {/* TODO:CONFIRMAR anos/instituições exatas da formação internacional. */}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O MÉTODO + EQUIPE */}
      <section aria-labelledby="metodo-heading" className="bg-ink py-24 lg:py-32">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
          <div className="max-w-[640px]">
            <Kicker>O Método Lu Rodrigues</Kicker>
            <h2 id="metodo-heading" className="mt-5 font-display text-[2rem] font-light leading-[1.15] text-text-on-ink lg:text-[2.4rem]">
              Um rigor que se ensina
            </h2>
            <p className="mt-6 max-w-[54ch] text-base leading-relaxed text-muted">
              Não basta uma boa mão. A técnica autoral da casa é transmitida a cada
              profissional sob três princípios — para que a segurança de ser atendida pela
              Lu Make Up não dependa de quem executa.
            </p>
          </div>
          <ol className="mt-14 grid gap-px overflow-hidden border border-line-subtle sm:grid-cols-3">
            {[
              { t: "Formação multidisciplinar", b: "Fisiologia da pele, química do pigmento e geometria facial — a base científica por trás de cada traço." },
              { t: "Atualização constante", b: "Presença em congressos e workshops para incorporar as tendências e tecnologias globais." },
              { t: "Biossegurança hospitalar", b: "Protocolos rigorosos de esterilização e higiene, salas privativas e material descartável." },
            ].map((p) => (
              <li key={p.t} className="bg-ink p-7 outline outline-1 outline-line-subtle">
                <h3 className="font-display text-lg font-light text-text-on-ink">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.b}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 max-w-[60ch] text-sm leading-relaxed text-muted">
            Ao lado de Lu Rodrigues, a casa reúne especialistas de referência — entre eles
            André Ishimura, nome nacional em procedimentos capilares, Fabiana Avesani e
            Fernanda Eleutério. {/* TODO:CONFIRMAR nomes/funções atuais da equipe. */}
          </p>
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
            <p className="mt-6 max-w-[54ch] text-base leading-relaxed text-muted">
              Na tradicional Avenida Nove de Julho, a Casa Conceito reúne mais de dez salas
              privativas, um centro cirúrgico com tecnologia de ponta e a atmosfera de quem
              trata cada atendimento como um ritual. Abaixo, a unidade São Paulo.
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
    </>
  );
}
