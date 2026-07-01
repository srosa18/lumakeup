import type { Metadata } from "next";
import Link from "next/link";
import { Cta } from "@/components/ui/Cta";
import { Kicker } from "@/components/ui/Kicker";
import { SITE } from "@/lib/site";
import { UNITS, HORARIO, CENTRAL_PHONE_DISPLAY } from "@/lib/units";
import { buildWhatsAppLink } from "@/lib/whatsapp";

/**
 * Contato (§4/§11 P2). Caminho de conversão do site = WhatsApp por avaliação
 * (§7). Sem formulário pesado — convite curado. Instagram real (@lumakeupbr) e
 * WhatsApp central reais (site atual). Horário: seg–sáb por agendamento.
 */
export const metadata: Metadata = {
  title: "Contato — Falar com o ateliê",
  description:
    "Fale com o ateliê Lu Make Up. Atendimento por avaliação, via WhatsApp — segunda a sábado, por agendamento. Unidades em São Paulo, Rio, Brasília, Manaus e Miami.",
  alternates: { canonical: "/contato" },
};

export default function Contato() {
  const agendar = buildWhatsAppLink();

  return (
    <>
      {/* Intro */}
      <section aria-labelledby="contato-heading" className="bg-ink pb-14 pt-28 lg:pb-16 lg:pt-36">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
          <Kicker>Contato</Kicker>
          <h1
            id="contato-heading"
            className="mt-5 font-display text-[2.4rem] font-light uppercase leading-[1.08] tracking-[0.04em] text-text-on-ink lg:text-[3.2rem]"
          >
            Falar com o ateliê
          </h1>
          <p className="mt-6 max-w-[56ch] text-base leading-relaxed text-muted">
            Todo atendimento começa por uma avaliação personalizada — sem compromisso.
            Conte o que você deseja e desenhamos a partir do seu traço.
          </p>
        </div>
      </section>

      {/* Canais + Unidades */}
      <section aria-label="Canais de atendimento" className="bg-ink pb-24 lg:pb-32">
        <div className="mx-auto grid max-w-[1100px] gap-px overflow-hidden border border-line-subtle px-0 lg:grid-cols-2">
          {/* Atendimento */}
          <div className="bg-ink p-8 outline outline-1 outline-line-subtle lg:p-12">
            <Kicker>Atendimento</Kicker>
            <p className="mt-6 font-display text-2xl font-light leading-snug text-text-on-ink lg:text-[1.7rem]">
              Pelo WhatsApp, com uma pessoa de verdade.
            </p>
            <div className="mt-8">
              <Cta href={agendar} external variant="outline">
                Iniciar conversa
              </Cta>
            </div>
            <dl className="mt-10 space-y-5 text-sm text-muted">
              <div>
                <dt className="kicker text-muted/70">Telefone · WhatsApp</dt>
                <dd className="mt-1 text-text-on-ink/90">{CENTRAL_PHONE_DISPLAY}</dd>
              </div>
              <div>
                <dt className="kicker text-muted/70">Horário</dt>
                <dd className="mt-1 text-text-on-ink/90">{HORARIO}</dd>
              </div>
              <div>
                <dt className="kicker text-muted/70">Instagram</dt>
                <dd className="mt-1">
                  <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" className="text-text-on-ink/90 underline underline-offset-4 transition-colors hover:text-brass">
                    {SITE.social.instagramHandle}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {/* Unidades */}
          <div className="bg-ink p-8 outline outline-1 outline-line-subtle lg:p-12">
            <Kicker>Nossas unidades</Kicker>
            <ul className="mt-6 divide-y divide-line-subtle">
              {UNITS.map((u) => (
                <li key={u.slug}>
                  <Link href={`/localizacoes/${u.slug}`} className="group flex items-baseline justify-between gap-4 py-4 transition-colors">
                    <span className="font-display text-lg font-light text-text-on-ink transition-colors group-hover:text-brass">
                      {u.city}
                    </span>
                    <span className="kicker text-muted/70">
                      {u.state} · {u.country === "Estados Unidos" ? "EUA" : "BR"}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/localizacoes" className="kicker mt-8 inline-block text-brass underline underline-offset-4">
              Ver todas as localizações →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
