import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Cta } from "@/components/ui/Cta";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Kicker } from "@/components/ui/Kicker";
import { SERVICES } from "@/lib/services";
import {
  DEFAULT_DIFERENCIAIS,
  DEFAULT_RITUAL,
  getServiceContent,
} from "@/lib/service-content";
import { SITE } from "@/lib/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

/**
 * Página de Serviço · route dinâmico (Template A do brief §5). Renderiza qualquer
 * serviço de lib/services.ts a partir de lib/service-content.ts.
 *
 * Server component, SSG (generateStaticParams). Ritmo visual aprovado na
 * Sobrancelhas (hero full-bleed + faixas de imagem grandes entre os textos).
 * Imagens sem `src` → placeholder nomeado (foto a entrar por serviço).
 */
export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getServiceContent(slug);
  if (!c) return {};
  return {
    title: c.title,
    description: c.description,
    alternates: { canonical: `/servicos/${slug}` },
  };
}

/** Mídia que PREENCHE o pai (full-bleed). Sem `src` → placeholder nomeado elegante. */
function MediaFill({
  alt,
  art,
  src,
  position = "center",
  size,
}: {
  alt: string;
  art: string;
  src?: string;
  position?: string;
  /** tamanho ideal da foto (ex.: "2560 × 1440 px") — exibido no canto do placeholder */
  size?: string;
}) {
  if (src) {
    return (
      <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" style={{ objectPosition: position }} />
    );
  }
  return (
    <div
      data-placeholder="true"
      data-art={art}
      role="img"
      aria-label={alt}
      className="absolute inset-0 flex items-center justify-center bg-ink"
    >
      <span className="kicker max-w-[40ch] px-6 text-center text-text-on-ink/35">Imagem · {alt}</span>
      {size ? (
        <span className="absolute bottom-3 right-3 z-10 border border-brass/50 bg-black/45 px-2 py-1 text-[0.7rem] font-medium tracking-[0.1em] text-brass">
          {size}
        </span>
      ) : null}
    </div>
  );
}

export default async function ServicoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  const content = getServiceContent(slug);
  if (!service || !content) notFound();

  const agendar = buildWhatsAppLink({ service: content.h1 });
  const ritual = content.ritual ?? DEFAULT_RITUAL;
  const diferenciais = content.diferenciais ?? DEFAULT_DIFERENCIAIS;
  const proof = content.proof;
  const img = content.images ?? {};
  const ctaRight = content.ctaAlign === "right";
  const ctaLight = !img.cta; // sem imagem de CTA → fundo off-white + texto preto

  // §8 · Service + FAQPage (AEO/GEO: as FAQs viram rich results / chunks citáveis).
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: content.h1,
        serviceType: content.h1,
        description: content.description,
        url: `${SITE.url}/servicos/${slug}`,
        provider: { "@type": "MedicalBusiness", name: SITE.name, url: SITE.url },
        areaServed: ["São Paulo", "Rio de Janeiro", "Brasília", "Manaus", "Miami"],
      },
      {
        "@type": "FAQPage",
        mainEntity: content.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      {/* 1 · HERO full-bleed */}
      <section aria-labelledby="servico-heading" className="relative flex min-h-[78svh] items-end overflow-hidden bg-ink">
        <MediaFill
          src={img.hero}
          alt={`${content.h1} · Lu Make Up`}
          art={`HERO full-bleed de ${content.h1}: retrato editorial, fundo escuro, pele real · foto real a entrar`}
          position={img.heroPos ?? "center 22%"}
          size="2560 × 1440 px"
        />
        <div aria-hidden className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/50 to-transparent" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 pb-14 lg:px-8 lg:pb-12 min-[2000px]:pb-28">
          <Kicker tone="on-ink">Serviços · Micropigmentação de assinatura</Kicker>
          <h1
            id="servico-heading"
            className="mt-3 font-display text-[1.6rem] font-light uppercase leading-[1.05] tracking-[0.07em] text-text-on-ink sm:text-[1.9rem] lg:text-[2.1rem] min-[2000px]:text-[2.5rem]"
          >
            {content.h1Break ? (
              <>
                {content.h1Break[0]}
                <br />
                {content.h1Break[1]}
              </>
            ) : (
              content.h1
            )}
          </h1>
          <p className="mt-3 max-w-[34ch] font-display text-xl font-light leading-snug text-text-on-ink/90 lg:text-2xl">
            {content.essence}
          </p>
          <div className="mt-7">
            <Cta href={agendar} external variant="outline">
              Agendar avaliação
            </Cta>
          </div>
        </div>
      </section>

      {/* 2 · A ARTE */}
      <section aria-labelledby="arte-heading" data-section-theme="light" className="bg-bone py-24 lg:py-32">
        <div className="mx-auto max-w-[860px] px-6 text-center lg:px-8">
          <Kicker>A arte</Kicker>
          <h2 id="arte-heading" className="mt-5 whitespace-pre-line font-display text-[1.55rem] font-light leading-[1.12] text-text-on-bone lg:text-[1.95rem]">
            {content.arte.heading}
          </h2>
          <p className="mx-auto mt-8 max-w-[60ch] text-base leading-relaxed text-text-on-bone/80 lg:text-lg">
            {content.arte.body}
          </p>
        </div>
      </section>

      {/* 3 · FAIXA DE IMAGEM grande (opcional · omitida quando não há `band`) */}
      {img.band ? (
        <section className={`relative overflow-hidden bg-ink ${img.bandTall ? "h-[56vh] min-h-[400px] lg:h-[66vh]" : "h-[40vh] min-h-[300px] lg:h-[48vh]"}`}>
          <MediaFill
            src={img.band}
            alt={`Detalhe do procedimento de ${content.h1}`}
            art={`Faixa full-bleed de ${content.h1}: macro do procedimento, luz editorial · foto real a entrar`}
            position={img.bandPos ?? "center 40%"}
            size="2560 × 1300 px"
          />
        </section>
      ) : null}

      {/* 4 · A EXPERIÊNCIA (ritual) */}
      <section aria-labelledby="ritual-heading" className="bg-ink py-24 lg:py-32">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
          <div className="max-w-[640px]">
            <Kicker>A experiência</Kicker>
            <h2 id="ritual-heading" className="mt-5 font-display text-[1.55rem] font-light leading-[1.12] text-text-on-ink lg:text-[1.85rem]">
              Um ritual, do estudo ao retorno
            </h2>
          </div>
          <ol className="mt-14 grid gap-px overflow-hidden border border-line-subtle sm:grid-cols-2 lg:grid-cols-4">
            {ritual.map((step) => (
              <li key={step.n} className="bg-ink p-7 outline outline-1 outline-line-subtle">
                <span className="font-display text-sm font-light tracking-[0.1em] text-brass">{step.n}</span>
                <h3 className="mt-4 font-display text-lg font-light text-text-on-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5 · DIFERENCIAIS · 2 colunas com imagem */}
      <section aria-labelledby="dif-heading" data-section-theme="light" className="overflow-hidden bg-bone">
        <div className="mx-auto grid max-w-[1280px] lg:grid-cols-2">
          <div className="relative min-h-[460px] lg:min-h-[680px]">
            <MediaFill
              src={img.diferenciais}
              alt={`Retrato editorial · ${content.h1}`}
              art={`Imagem grande (coluna) de ${content.h1}: retrato editorial, pele real · foto real a entrar`}
              position={img.diferenciaisPos ?? "center 25%"}
              size="1400 × 1750 px"
            />
          </div>
          <div className="px-6 py-20 lg:px-16 lg:py-32">
            <Kicker>Por que a Lu Make Up</Kicker>
            <h2 id="dif-heading" className="mt-5 font-display text-[1.55rem] font-light leading-[1.12] text-text-on-bone lg:text-[1.85rem]">
              {content.diferenciaisHeading ?? "O que não se vê é o que mais importa"}
            </h2>
            <div className="mt-12 space-y-10">
              {diferenciais.map((d) => (
                <div key={d.title}>
                  <div aria-hidden="true" className="h-px w-10 bg-brass" />
                  <h3 className="mt-5 font-display text-lg font-light text-text-on-bone">{d.title}</h3>
                  <p className="mt-3 max-w-[46ch] text-sm leading-relaxed text-text-on-bone/75">{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6 · RESULTADOS */}
      <section aria-labelledby="result-heading" className="overflow-hidden bg-ink py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="max-w-[640px]">
            <Kicker>Resultados</Kicker>
            <h2 id="result-heading" className="mt-5 font-display text-[1.55rem] font-light leading-[1.12] text-text-on-ink lg:text-[1.85rem]">
              O traço que respeita a sua anatomia
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <ImageSlot
                key={i}
                src={img.results?.[i]}
                alt={`${content.h1} · resultado e procedimento Lu Make Up (${i + 1})`}
                art={`Galeria de ${content.h1} · exemplo ${i + 1} (foto real a entrar)`}
                ratio="4 / 5"
                tone="ink"
                sizes="(min-width:1024px) 400px, (min-width:640px) 45vw, 100vw"
                size="1000 × 1250 px"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7 · PROVA (opcional) */}
      {proof && (
        <section aria-labelledby="prova-heading" data-section-theme="light" className="bg-bone py-24 lg:py-32">
          <div className="mx-auto max-w-[820px] px-6 text-center lg:px-8">
            <h2 id="prova-heading" className="sr-only">Prova social</h2>
            <span aria-hidden="true" className="font-display text-6xl leading-none text-brass/40">&ldquo;</span>
            <blockquote className="-mt-4 font-display text-2xl font-light leading-snug text-text-on-bone sm:text-3xl">
              {proof.quote}
            </blockquote>
            <p className="kicker mt-8 text-muted">{proof.author}</p>
          </div>
        </section>
      )}

      {/* 8 · FAQ DO SERVIÇO */}
      <section aria-labelledby="faq-heading" className="bg-ink py-24 lg:py-32">
        <div className="mx-auto max-w-[860px] px-6 lg:px-8">
          <Kicker>Perguntas frequentes</Kicker>
          <h2 id="faq-heading" className="mt-5 font-display text-[1.55rem] font-light leading-[1.12] text-text-on-ink lg:text-[1.85rem]">
            Sobre {service.label.toLowerCase()}
          </h2>
          <dl className="mt-12 border-t border-white/[0.14]">
            {content.faq.map((item) => (
              <div key={item.q} className="border-b border-white/[0.14] py-7">
                <dt className="font-display text-base font-medium text-text-on-ink">{item.q}</dt>
                <dd className="mt-3 max-w-[64ch] text-sm leading-relaxed text-muted">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 9 · CTA final · faixa full-bleed. Bloco dentro do container da página (guideline);
          ctaAlign="right" alinha à direita DA COLUNA (não da viewport), em bloco estreito. */}
      {/* No MOBILE, o CTA final é sempre off-white (bone + texto/botão pretos);
          no DESKTOP mantém o comportamento normal (foto+overlay quando há img.cta). */}
      <section
        data-section-theme={ctaLight ? "light" : undefined}
        className={`relative flex min-h-[42vh] items-center overflow-hidden lg:min-h-[48vh] ${ctaLight ? "bg-bone" : "bg-bone md:bg-ink"}`}
      >
        {!ctaLight && (
          // foto + overlay só no desktop; no mobile some (fundo bone)
          <div aria-hidden className="absolute inset-0 hidden md:block">
            <MediaFill
              src={img.cta}
              alt={`Retrato editorial · ${content.h1}`}
              art={`CTA full-bleed de ${content.h1}: retrato editorial, fundo escuro · foto real a entrar`}
              position={img.ctaPos ?? "center 25%"}
              size="2560 × 1300 px"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        )}
        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 lg:px-8">
          <div className={ctaRight ? "ml-auto max-w-[440px] text-left" : "mx-auto max-w-[680px] text-center"}>
            <h2 className={`font-display text-[1.5rem] font-light leading-[1.08] lg:text-[2rem] ${ctaLight ? "text-text-on-bone" : "text-text-on-bone md:text-text-on-ink"}`}>
              {content.ctaHeading}
            </h2>
            <p className={`mt-5 text-sm leading-relaxed ${ctaLight ? "text-text-on-bone/70" : "text-text-on-bone/70 md:text-text-on-ink/80"} ${ctaRight ? "" : "mx-auto max-w-[46ch]"}`}>
              Tudo começa por uma avaliação personalizada,
              <br />
              sem compromisso.
            </p>
            <div className={`mt-9 flex ${ctaRight ? "justify-start" : "justify-center"}`}>
              {ctaLight ? (
                <Cta href={agendar} external variant="outline" tone="on-bone">
                  Agendar avaliação
                </Cta>
              ) : (
                <>
                  {/* mobile: botão preto (on-bone) · desktop: botão branco (on-ink).
                      Visibilidade no wrapper p/ não brigar com o inline-flex base do Cta. */}
                  <span className="md:hidden">
                    <Cta href={agendar} external variant="outline" tone="on-bone">
                      Agendar avaliação
                    </Cta>
                  </span>
                  <span className="hidden md:block">
                    <Cta href={agendar} external variant="outline" tone="on-ink">
                      Agendar avaliação
                    </Cta>
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
