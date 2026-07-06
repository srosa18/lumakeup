import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Cta } from "@/components/ui/Cta";
import { Kicker } from "@/components/ui/Kicker";
import { buildWhatsAppLink } from "@/lib/whatsapp";

/**
 * Lu Medical (§3/§5 Template C, §11 P2) · hub de transplante (EverBrow /
 * EverLashes), energia ultra-premium "por avaliação / exclusivo". Sem preço.
 * Hub único por ora; sub-páginas /lu-medical/everbrow e /everlashes depois.
 *
 * ⚠️ TODO:CONFIRMAR: grafia oficial (EverBrow x Everbrown), existência/grafia
 * de EverLashes, descrição de protocolo/segurança e fotos de resultado.
 */
export const metadata: Metadata = {
  title: "Lu Medical · EverBrow e EverLashes",
  description:
    "Lu Medical: o transplante elevado a arte. EverBrow (transplante de sobrancelhas) e EverLashes (transplante de cílios) unem cirurgia e olhar artístico. Atendimento por avaliação.",
  alternates: { canonical: "/lu-medical" },
};

const avaliacao = buildWhatsAppLink({ service: "Lu Medical (transplante)" });

export default function LuMedical() {
  return (
    <>
      {/* HERO exclusivo */}
      <div data-comment-id="lu-medical.hero" data-comment-label="Lu Medical · Hero">
        <section aria-labelledby="lumedical-heading" className="relative flex min-h-[88svh] items-end overflow-hidden bg-ink">
          <Image
            src="/images/lu-medical/hero.webp"
            alt="Lu Medical · transplante de sobrancelhas e cílios, olhar artístico"
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center 28%" }}
            priority
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
          <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 pb-14 lg:px-8 lg:pb-12 min-[2000px]:pb-28">
            <Kicker tone="on-ink">Lu Medical · Por avaliação</Kicker>
            <h1
              id="lumedical-heading"
              className="mt-3 font-display text-[1.6rem] font-light uppercase leading-[1.05] tracking-[0.07em] text-text-on-ink sm:text-[1.9rem] lg:text-[2.1rem] min-[2000px]:text-[2.5rem]"
            >
              Lu Medical
            </h1>
            <p className="mt-6 max-w-[40ch] font-display text-xl font-light leading-snug text-text-on-ink/90 lg:text-2xl">
              O transplante, elevado a arte.
            </p>
            <div className="mt-9">
              <Cta href={avaliacao} external variant="outline">
                Agendar avaliação
              </Cta>
            </div>
          </div>
        </section>
      </div>

      {/* MANIFESTO */}
      <div data-comment-id="lu-medical.manifesto" data-comment-label="Lu Medical · Manifesto">
        <section aria-labelledby="manifesto-heading" data-section-theme="light" className="bg-bone py-24 lg:py-32">
          <div className="mx-auto max-w-[820px] px-6 text-center lg:px-8">
            <Kicker>Cirurgia & olhar artístico</Kicker>
            <h2 id="manifesto-heading" className="mt-5 font-display text-[2rem] font-light leading-[1.15] text-text-on-bone lg:text-[2.6rem]">
              Onde a precisão cirúrgica encontra o desenho
            </h2>
            <p className="mx-auto mt-8 max-w-[60ch] text-base leading-relaxed text-text-on-bone/80 lg:text-lg">
              EverBrow e EverLashes unem cirurgia e olhar artístico para um resultado
              impecável, seguro e exclusivo. Não é um procedimento de catálogo. É um
              trabalho conduzido a partir do seu rosto, da sua expressão e do desenho que
              pertence a você.
            </p>
          </div>
        </section>
      </div>

      {/* AS DUAS FRENTES */}
      <div data-comment-id="lu-medical.procedimentos" data-comment-label="Lu Medical · Procedimentos">
        <section aria-labelledby="frentes-heading" className="bg-ink py-24 lg:py-32">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
            <Kicker>Os procedimentos</Kicker>
            <h2 id="frentes-heading" className="mt-5 max-w-[20ch] font-display text-[2rem] font-light leading-[1.15] text-text-on-ink lg:text-[2.4rem]">
              Dois transplantes, um mesmo rigor
            </h2>

            <div className="mt-14 grid gap-px overflow-hidden border border-line-subtle md:grid-cols-2">
              {/* EverBrow */}
              <article className="bg-ink outline outline-1 outline-line-subtle">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/everbrow/retrato.webp"
                    alt="EverBrow · transplante de sobrancelhas"
                    fill
                    sizes="(min-width:768px) 640px, 100vw"
                    className="object-cover"
                    style={{ objectPosition: "center 20%" }}
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <p className="kicker text-brass">EverBrow</p>
                  <h3 className="mt-3 font-display text-2xl font-light text-text-on-ink">
                    Transplante de sobrancelhas
                  </h3>
                  <p className="mt-4 max-w-[46ch] text-sm leading-relaxed text-muted lg:text-base">
                    Para sobrancelhas com falhas definitivas, o transplante devolve densidade
                    com fios reais, desenhados com o mesmo visagismo da casa.
                    {/* TODO:CONFIRMAR descrição técnica, número de fios/sessões e recuperação. */}
                  </p>
                </div>
              </article>

              {/* EverLashes */}
              <article className="bg-ink outline outline-1 outline-line-subtle">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/lu-medical/everlashes.webp"
                    alt="EverLashes · transplante de cílios"
                    fill
                    sizes="(min-width:768px) 640px, 100vw"
                    className="object-cover"
                    style={{ objectPosition: "center 30%" }}
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <p className="kicker text-brass">EverLashes</p>
                  <h3 className="mt-3 font-display text-2xl font-light text-text-on-ink">
                    Transplante de cílios
                  </h3>
                  <p className="mt-4 max-w-[46ch] text-sm leading-relaxed text-muted lg:text-base">
                    Cílios mais densos e definidos, com naturalidade, para um olhar pleno
                    sem a rotina de alongamentos.
                    {/* TODO:CONFIRMAR grafia (EverLashes), descrição técnica e recuperação. */}
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>

      {/* SEGURANÇA & PROTOCOLO */}
      <div data-comment-id="lu-medical.protocolo" data-comment-label="Lu Medical · Segurança e protocolo">
        <section aria-labelledby="protocolo-heading" data-section-theme="light" className="bg-bone py-24 lg:py-32">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
            <div className="max-w-[640px]">
              <Kicker>Segurança & protocolo</Kicker>
              <h2 id="protocolo-heading" className="mt-5 font-display text-[2rem] font-light leading-[1.15] text-text-on-bone lg:text-[2.4rem]">
                Exclusivo começa pela segurança
              </h2>
            </div>
            <ol className="mt-14 grid gap-px overflow-hidden border border-text-on-bone/10 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { n: "01", title: "Avaliação", body: "Um estudo do seu rosto e da sua indicação antes de qualquer decisão. Por avaliação, sempre." },
                { n: "02", title: "Procedimento", body: "Conduzido com rigor médico e desenho artístico, em ambiente de biossegurança. (TODO:CONFIRMAR protocolo.)" },
                { n: "03", title: "Acompanhamento", body: "Um cuidado que continua depois, com o acompanhamento do resultado. (TODO:CONFIRMAR pós-operatório.)" },
              ].map((s) => (
                <li key={s.n} className="bg-bone p-8 outline outline-1 outline-text-on-bone/10">
                  <span className="font-display text-sm font-light tracking-[0.1em] text-brass">{s.n}</span>
                  <h3 className="mt-4 font-display text-lg font-light text-text-on-bone">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-on-bone/70">{s.body}</p>
                </li>
              ))}
            </ol>
            <p className="mt-10 max-w-[60ch] text-sm leading-relaxed text-text-on-bone/70">
              Quer entender a fundo?{" "}
              <Link href="/diario/everbrow-a-revolucao-no-transplante-de-sobrancelhas" className="text-brass underline underline-offset-4">
                Leia sobre o EverBrow nas Notícias
              </Link>
              .
            </p>
          </div>
        </section>
      </div>

      {/* CTA final · MOBILE off-white (bone + preto); DESKTOP normal (foto + branco). */}
      <div data-comment-id="lu-medical.cta" data-comment-label="Lu Medical · CTA">
        <section className="relative flex min-h-[62vh] items-center justify-center overflow-hidden bg-bone text-center md:bg-ink lg:min-h-[70vh]">
          {/* foto + overlay só no desktop */}
          <div aria-hidden className="absolute inset-0 hidden md:block">
            <Image
              src="/images/lu-medical/cta.webp"
              alt="Lu Medical · atendimento por avaliação"
              fill
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: "center 25%" }}
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative z-10 mx-auto max-w-[680px] px-6 lg:px-8">
            <h2 className="font-display text-[2rem] font-light leading-[1.12] text-text-on-bone md:text-text-on-ink lg:text-[2.8rem]">
              Um resultado exclusivo começa por uma conversa
            </h2>
            <p className="mx-auto mt-5 max-w-[44ch] text-sm leading-relaxed text-text-on-bone/70 md:text-text-on-ink/80">
              O atendimento da Lu Medical é por avaliação, pensado para o seu caso, sem
              compromisso.
            </p>
            <div className="mt-9 flex justify-center">
              {/* mobile: botão preto (on-bone) · desktop: botão branco (on-ink) */}
              <span className="md:hidden">
                <Cta href={avaliacao} external variant="outline" tone="on-bone">
                  Agendar avaliação
                </Cta>
              </span>
              <span className="hidden md:block">
                <Cta href={avaliacao} external variant="outline" tone="on-ink">
                  Agendar avaliação
                </Cta>
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
