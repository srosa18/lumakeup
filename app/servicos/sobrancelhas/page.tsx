import type { Metadata } from "next";
import Image from "next/image";
import { Cta } from "@/components/ui/Cta";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Kicker } from "@/components/ui/Kicker";
import { buildWhatsAppLink } from "@/lib/whatsapp";

/**
 * Página de Serviço — SOBRANCELHAS (serviço-herói 🎯). Template A do brief (§5).
 *
 * v2 (pedido do cliente): MAIS VISUAL — hero full-bleed (imagem grande estourada)
 * + faixas de imagem grandes quebrando as seções de texto, p/ não ficar denso.
 * Ritmo: visual → texto → visual → texto. Server component (HTML p/ SEO/AEO).
 *
 * ⚠️ Imagens = slots nomeados full-bleed (fotos reais a entrar; viram next/image
 *    com `src`). Fatos clínicos = TODO:CONFIRMAR. FAQ pergunta→resposta (AEO §8).
 */
const SERVICE_LABEL = "Micropigmentação de Sobrancelhas";

export const metadata: Metadata = {
  title: "Micropigmentação de Sobrancelhas em São Paulo",
  description:
    "Micropigmentação de sobrancelhas fio a fio, natural e personalizada. Visagismo, colorimetria e técnica autoral da Lu Make Up — atendimento por avaliação.",
  alternates: { canonical: "/servicos/sobrancelhas" },
};

/** Mídia que PREENCHE o pai (full-bleed). Sem `src` → placeholder nomeado elegante. */
function MediaFill({
  alt,
  art,
  src,
  position = "center",
}: {
  alt: string;
  art: string;
  src?: string;
  position?: string;
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: position }}
      />
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
      <span className="kicker max-w-[40ch] px-6 text-center text-text-on-ink/35">
        Imagem · {alt}
      </span>
    </div>
  );
}

const RITUAL = [
  { n: "01", title: "Visagismo", body: "Lemos o seu rosto — proporção, simetria, expressão — para desenhar a sobrancelha que pertence a você." },
  { n: "02", title: "Colorimetria", body: "A cor nasce da sua pele e do seu tom de pelo. Natural, nunca artificial." },
  { n: "03", title: "Execução", body: "O traço fio a fio, em ambiente de biossegurança hospitalar, com material descartável." },
  { n: "04", title: "Retorno", body: "Um retoque de acabamento assegura uniformidade e durabilidade ao resultado." },
];

const DIFERENCIAIS = [
  { title: "Biossegurança hospitalar", body: "Salas privativas e material 100% descartável. O cuidado que não se vê é o que mais importa." },
  { title: "Pigmentos livres de metais pesados", body: "Desenvolvidos pela própria Lu Rodrigues — pensados para a sua pele e para um envelhecer bonito da cor." },
  { title: "Durabilidade que respeita o rosto", body: "Um resultado que acompanha você por temporadas, sem nunca parecer maquiagem definitiva. (TODO:CONFIRMAR duração média em meses.)" },
];

const FAQ = [
  { q: "Quanto dura a micropigmentação de sobrancelhas?", a: "A durabilidade varia conforme a sua pele, a sua rotina e os cuidados pós-procedimento. Na avaliação explicamos a previsão para o seu caso. (TODO:CONFIRMAR faixa em meses.)" },
  { q: "Dói?", a: "O conforto é parte do protocolo: trabalhamos com anestésico tópico e uma técnica delicada. A maioria das clientes relata um desconforto mínimo. (TODO:CONFIRMAR detalhes do protocolo de anestesia.)" },
  { q: "Qual a diferença entre fio a fio e efeito sombreado?", a: "O fio a fio recria pelos individuais para um resultado realista; o sombreado preenche com um esfumado suave, como uma maquiagem leve. Na avaliação indicamos o que valoriza o seu olhar — ou a combinação dos dois." },
  { q: "Como me preparo para o procedimento?", a: "Venha com o rosto limpo, sem maquiagem, e com uma ideia do que deseja. Traga referências do que gosta; nós desenhamos a partir do seu traço." },
  { q: "Como funciona o agendamento?", a: "Atendimento por agendamento, com avaliação personalizada antes de qualquer procedimento. Fale com o ateliê pelo WhatsApp." },
];

export default function SobrancelhasPage() {
  const agendar = buildWhatsAppLink({ service: SERVICE_LABEL });

  return (
    <>
      {/* 1 · HERO full-bleed */}
      <section
        aria-labelledby="servico-heading"
        className="relative flex min-h-[90svh] items-end overflow-hidden bg-ink"
      >
        <MediaFill
          src="/images/servicos/sobrancelhas/hero.webp"
          alt="Retrato editorial com sobrancelhas naturais e olhar em destaque — Lu Make Up"
          art="Foto real Lu Make Up (Lumakeup_namorados-279)"
          position="center 22%"
        />
        <div aria-hidden className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/50 to-transparent" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 pb-20 lg:px-8 lg:pb-28">
          <Kicker>Serviços · Micropigmentação de assinatura</Kicker>
          <h1
            id="servico-heading"
            className="mt-5 font-display text-[2.6rem] font-light uppercase leading-[1.05] tracking-[0.04em] text-text-on-ink sm:text-[3.4rem] lg:text-[4.4rem]"
          >
            Micropigmentação
            <br />
            de Sobrancelhas
          </h1>
          <p className="mt-6 max-w-[34ch] font-display text-xl font-light leading-snug text-text-on-ink/90 lg:text-2xl">
            A sobrancelha que ninguém percebe ser feita.
          </p>
          <div className="mt-9">
            <Cta href={agendar} external variant="outline">
              Agendar avaliação
            </Cta>
          </div>
        </div>
      </section>

      {/* 2 · A ARTE (texto) */}
      <section aria-labelledby="arte-heading" className="bg-bone py-24 lg:py-32">
        <div className="mx-auto max-w-[860px] px-6 text-center lg:px-8">
          <Kicker>A arte</Kicker>
          <h2 id="arte-heading" className="mt-5 font-display text-[2rem] font-light leading-[1.15] text-text-on-bone lg:text-[2.6rem]">
            A arte da naturalidade
            <br />
            para a sua sobrancelha
          </h2>
          <p className="mx-auto mt-8 max-w-[60ch] text-base leading-relaxed text-text-on-bone/80 lg:text-lg">
            Há mais de vinte anos refinamos uma única obsessão: realçar sem revelar a
            técnica. Cada sobrancelha começa por um estudo do seu rosto — proporção,
            expressão, a forma como você sorri — e por uma cor escolhida para conversar
            com a sua pele. O traço fio a fio se integra aos seus pelos, corrigindo
            falhas e assimetrias com uma naturalidade que não se anuncia.
          </p>
        </div>
      </section>

      {/* 3 · FAIXA DE IMAGEM grande (quebra visual) */}
      <section className="relative h-[62vh] min-h-[440px] overflow-hidden bg-ink lg:h-[75vh]">
        <MediaFill
          src="/images/servicos/sobrancelhas/band.webp"
          alt="Cliente com a mão no rosto, sobrancelhas em destaque, retrato intimista"
          art="Foto real Lu Make Up (Lumakeup_namorados-249)"
          position="center 30%"
        />
      </section>

      {/* 4 · A EXPERIÊNCIA (ritual) */}
      <section aria-labelledby="ritual-heading" className="bg-ink py-24 lg:py-32">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
          <div className="max-w-[640px]">
            <Kicker>A experiência</Kicker>
            <h2 id="ritual-heading" className="mt-5 font-display text-[2rem] font-light leading-[1.15] text-text-on-ink lg:text-[2.4rem]">
              Um ritual, do desenho ao retorno
            </h2>
          </div>
          <ol className="mt-14 grid gap-px overflow-hidden border border-line-subtle sm:grid-cols-2 lg:grid-cols-4">
            {RITUAL.map((step) => (
              <li key={step.n} className="bg-ink p-7 outline outline-1 outline-line-subtle">
                <span className="font-display text-sm font-light tracking-[0.1em] text-brass">{step.n}</span>
                <h3 className="mt-4 font-display text-lg font-light text-text-on-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5 · DIFERENCIAIS — 2 colunas com imagem grande */}
      <section aria-labelledby="dif-heading" className="overflow-hidden bg-bone">
        <div className="mx-auto grid max-w-[1280px] lg:grid-cols-2">
          {/* imagem grande */}
          <div className="relative min-h-[460px] lg:min-h-[680px]">
            <MediaFill
              src="/images/servicos/sobrancelhas/diferenciais.webp"
              alt="Retrato sereno valorizando a sobrancelha, luz editorial"
              art="Foto real Lu Make Up (Lumakeup_fevereiro-246)"
              position="center 25%"
            />
          </div>
          {/* texto */}
          <div className="px-6 py-20 lg:px-16 lg:py-32">
            <Kicker>Por que a Lu Make Up</Kicker>
            <h2 id="dif-heading" className="mt-5 font-display text-[2rem] font-light leading-[1.15] text-text-on-bone lg:text-[2.4rem]">
              O que não se vê é o que mais importa
            </h2>
            <div className="mt-12 space-y-10">
              {DIFERENCIAIS.map((d) => (
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

      {/* 6 · RESULTADOS — galeria grande */}
      <section aria-labelledby="result-heading" className="overflow-hidden bg-ink py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="max-w-[640px]">
            <Kicker>Resultados</Kicker>
            <h2 id="result-heading" className="mt-5 font-display text-[2rem] font-light leading-[1.15] text-text-on-ink lg:text-[2.4rem]">
              O traço que respeita a sua anatomia
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <ImageSlot
                key={i}
                src={`/images/servicos/sobrancelhas/result-${i}.webp`}
                alt={`Retrato de cliente com sobrancelhas naturais e definidas — Lu Make Up (${i})`}
                art={`Foto real Lu Make Up — galeria de resultados ${i} (substituir por antes/depois com direitos, se houver)`}
                ratio="4 / 5"
                tone="ink"
                sizes="(min-width:1024px) 400px, (min-width:640px) 45vw, 100vw"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7 · PROVA */}
      <section aria-labelledby="prova-heading" className="bg-bone py-24 lg:py-32">
        <div className="mx-auto max-w-[820px] px-6 text-center lg:px-8">
          <h2 id="prova-heading" className="sr-only">Prova social</h2>
          <span aria-hidden="true" className="font-display text-6xl leading-none text-brass/40">&ldquo;</span>
          <blockquote className="-mt-4 font-display text-2xl font-light leading-snug text-text-on-bone sm:text-3xl">
            Ninguém percebe que é feito. Percebem que eu pareço descansada.
          </blockquote>
          <p className="kicker mt-8 text-muted">Cliente desde 2015 · Sobrancelha</p>
        </div>
      </section>

      {/* 8 · FAQ DO SERVIÇO (pergunta → resposta, AEO) */}
      <section aria-labelledby="faq-heading" className="bg-ink py-24 lg:py-32">
        <div className="mx-auto max-w-[860px] px-6 lg:px-8">
          <Kicker>Perguntas frequentes</Kicker>
          <h2 id="faq-heading" className="mt-5 font-display text-[2rem] font-light leading-[1.15] text-text-on-ink lg:text-[2.4rem]">
            Sobre a sua sobrancelha
          </h2>
          <dl className="mt-12 border-t border-white/[0.14]">
            {FAQ.map((item) => (
              <div key={item.q} className="border-b border-white/[0.14] py-7">
                <dt className="font-display text-base font-medium text-text-on-ink">{item.q}</dt>
                <dd className="mt-3 max-w-[64ch] text-sm leading-relaxed text-muted">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 9 · CTA final — faixa full-bleed com imagem */}
      <section className="relative flex min-h-[62vh] items-center justify-center overflow-hidden bg-ink text-center lg:min-h-[70vh]">
        <MediaFill
          src="/images/servicos/sobrancelhas/cta.webp"
          alt="Retrato editorial de cliente, olhar em destaque"
          art="Foto real Lu Make Up (Lumakeup_shoot-417)"
          position="center 25%"
        />
        <div aria-hidden className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto max-w-[680px] px-6 lg:px-8">
          <h2 className="font-display text-[2rem] font-light leading-[1.12] text-text-on-ink lg:text-[2.8rem]">
            O seu olhar merece um estudo
          </h2>
          <p className="mx-auto mt-5 max-w-[46ch] text-sm leading-relaxed text-text-on-ink/80">
            Tudo começa por uma avaliação personalizada — sem compromisso.
          </p>
          <div className="mt-9 flex justify-center">
            <Cta href={agendar} external variant="outline">
              Reservar meu horário
            </Cta>
          </div>
        </div>
      </section>
    </>
  );
}
