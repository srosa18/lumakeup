import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Cta } from "@/components/ui/Cta";
import { Kicker } from "@/components/ui/Kicker";
import { buildWhatsAppLink } from "@/lib/whatsapp";

/**
 * Instituto Living Sculpture (§3/§5 Template B, §11 P2) — a alma reparadora da
 * marca. Tom de PROPÓSITO, não de venda. ⚠️ Cuidado de imagem (§6): NADA
 * clínico-gráfico; retratos, mãos, fundadora, pigmento. Resultado sensível só
 * com introdução respeitosa.
 *
 * ⚠️ TODO:CONFIRMAR: detalhes da história de origem (família/câncer de mama),
 * abrangência do trabalho (vitiligo etc.) e o fluxo de encaminhamento médico.
 */
export const metadata: Metadata = {
  title: "Instituto Living Sculpture — Quando a arte reconstrói",
  description:
    "Instituto Living Sculpture: o trabalho reparador da Lu Make Up — reconstrução de aréola pós-mastectomia, camuflagem de cicatrizes e a causa do câncer de mama. Conduzido com dignidade.",
  alternates: { canonical: "/instituto-living-sculpture" },
};

const REPARADORES = [
  { slug: "reconstrucao-de-areola", label: "Reconstrução de Aréola", essence: "Devolver a sensação de inteireza." },
  { slug: "paramedica", label: "Micropigmentação Paramédica", essence: "Camuflagem de cicatrizes, com discrição." },
  { slug: "reconstrucao-labial", label: "Reconstrução Labial", essence: "Devolver o contorno, com cuidado." },
  { slug: "alopecia", label: "Alopécia", essence: "Reconstruir a moldura do rosto." },
];

export default function InstitutoLivingSculpture() {
  const agendar = buildWhatsAppLink({ service: "Instituto Living Sculpture (reparador)" });

  return (
    <>
      {/* HERO sóbrio */}
      <section aria-labelledby="instituto-heading" className="relative flex min-h-[82svh] items-end overflow-hidden bg-ink">
        <Image
          src="/images/instituto/hero.webp"
          alt="Instituto Living Sculpture — o trabalho reparador da Lu Make Up"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 25%" }}
          priority
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 pb-20 lg:px-8 lg:pb-28">
          <Kicker tone="on-ink">Instituto Living Sculpture</Kicker>
          <h1
            id="instituto-heading"
            className="mt-5 font-display text-[2.4rem] font-light uppercase leading-[1.05] tracking-[0.04em] text-text-on-ink sm:text-[3.2rem] lg:text-[4.2rem]"
          >
            Quando a arte<br />reconstrói
          </h1>
          <p className="mt-6 max-w-[44ch] font-display text-xl font-light leading-snug text-text-on-ink/90 lg:text-2xl">
            Há trabalhos que vão além da estética — e devolvem a uma pessoa a sensação de
            inteireza.
          </p>
        </div>
      </section>

      {/* A CAUSA E A ORIGEM */}
      <section aria-labelledby="origem-heading" data-section-theme="light" className="overflow-hidden bg-bone">
        <div className="mx-auto grid max-w-[1280px] lg:grid-cols-2">
          <div className="order-2 px-6 py-20 lg:order-1 lg:px-16 lg:py-32">
            <Kicker>A origem</Kicker>
            <h2 id="origem-heading" className="mt-5 font-display text-[2rem] font-light leading-[1.15] text-text-on-bone lg:text-[2.6rem]">
              Nasceu de uma história de família — e virou propósito
            </h2>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-text-on-bone/80 lg:text-lg">
              <p>
                O Instituto Living Sculpture é a expressão mais sensível do trabalho da Lu
                Make Up: colocar a técnica a serviço da reparação e da dignidade de quem
                atravessou um tratamento difícil.
              </p>
              <p>
                Tudo começou de perto — em uma história de família — e se transformou em
                causa: acolher mulheres em reconstrução após o câncer de mama e devolver,
                pela arte da micropigmentação, a sensação de se reconhecer no espelho.
                {/* TODO:CONFIRMAR detalhes da origem (história de família). */}
              </p>
              <p>
                Dessa causa nasceu o <strong className="text-text-on-bone">Projeto Living
                Sculpture</strong>: um projeto social premiado que oferece reconstrução
                gratuita para mulheres de baixa renda que venceram o câncer de mama. Já são
                milhares atendidas. {/* TODO:CONFIRMAR prêmios, parcerias e como se inscrever. */}
              </p>
            </div>
          </div>
          <div className="relative order-1 min-h-[440px] lg:order-2 lg:min-h-[640px]">
            <Image
              src="/images/a-casa/fundadora.webp"
              alt="Lu Rodrigues — fundadora da Lu Make Up e do Instituto Living Sculpture"
              fill
              sizes="(min-width:1024px) 640px, 100vw"
              className="object-cover"
              style={{ objectPosition: "center 25%" }}
            />
          </div>
        </div>
      </section>

      {/* O TRABALHO */}
      <section aria-labelledby="trabalho-heading" className="bg-ink py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/5] overflow-hidden bg-stone/10 lg:order-2">
              <Image
                src="/images/instituto/trabalho.webp"
                alt="O trabalho reparador do Instituto — retrato editorial, tom digno"
                fill
                sizes="(min-width:1024px) 560px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="lg:order-1">
              <Kicker>O trabalho</Kicker>
              <h2 id="trabalho-heading" className="mt-5 font-display text-[2rem] font-light leading-[1.15] text-text-on-ink lg:text-[2.4rem]">
                A técnica a serviço da reconstrução
              </h2>
              <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-muted">
                Reconstrução de aréola após a mastectomia, camuflagem de cicatrizes
                cirúrgicas e estrias, repigmentação de vitiligo estável e reparação de
                contornos. Cada atendimento é conduzido com discrição, acolhimento e
                respeito pela história de quem nos procura.
                {/* TODO:CONFIRMAR imagens de resultado aprovadas para a página. */}
              </p>

              <ul className="mt-10 grid gap-px overflow-hidden border border-line-subtle sm:grid-cols-2">
                {REPARADORES.map((s) => (
                  <li key={s.slug} className="bg-ink outline outline-1 outline-line-subtle">
                    <Link href={`/servicos/${s.slug}`} className="group block p-6 transition-colors hover:bg-white/[0.03]">
                      <h3 className="font-display text-base font-light text-text-on-ink transition-colors group-hover:text-brass">
                        {s.label}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{s.essence}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OS PIGMENTOS */}
      <section aria-labelledby="pig-heading" data-section-theme="light" className="overflow-hidden bg-bone">
        <div className="mx-auto grid max-w-[1280px] lg:grid-cols-2">
          <div className="relative min-h-[420px] lg:min-h-[600px]">
            <Image
              src="/images/a-casa/pigmentos.webp"
              alt="Os pigmentos próprios da Lu Make Up — livres de metais pesados"
              fill
              sizes="(min-width:1024px) 640px, 100vw"
              className="object-cover"
              style={{ objectPosition: "center 40%" }}
            />
          </div>
          <div className="px-6 py-20 lg:px-16 lg:py-32">
            <Kicker>Os pigmentos</Kicker>
            <h2 id="pig-heading" className="mt-5 font-display text-[2rem] font-light leading-[1.15] text-text-on-bone lg:text-[2.6rem]">
              Cor desenvolvida para a sua pele
            </h2>
            <p className="mt-8 max-w-[52ch] text-base leading-relaxed text-text-on-bone/80 lg:text-lg">
              No trabalho reparador, a qualidade da cor é cuidado. Os pigmentos da Lu Make
              Up são desenvolvidos pela própria Lu Rodrigues, livres de metais pesados,
              pensados para a segurança e para um envelhecer bonito da cor.{" "}
              <Link href="/a-casa#pigmentos" className="text-brass underline underline-offset-4">
                Conheça os pigmentos
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ENCAMINHAMENTO / CTA */}
      <section data-section-theme="light" className="bg-bone pb-24 text-center lg:pb-32">
        <div className="mx-auto max-w-[680px] px-6 lg:px-8">
          <h2 className="font-display text-[1.9rem] font-light leading-[1.15] text-text-on-bone lg:text-[2.4rem]">
            Conheça o Instituto
          </h2>
          <p className="mx-auto mt-5 max-w-[48ch] text-sm leading-relaxed text-text-on-bone/75">
            Cada caso é único e tratado com sigilo. Fale com o ateliê para uma avaliação
            personalizada — trabalhamos, quando necessário, em diálogo com a sua equipe
            médica. {/* TODO:CONFIRMAR fluxo de encaminhamento e parcerias. */}
          </p>
          <div className="mt-9 flex justify-center">
            <Cta href={agendar} external variant="solid" tone="on-bone">
              Falar com o ateliê
            </Cta>
          </div>
        </div>
      </section>
    </>
  );
}
