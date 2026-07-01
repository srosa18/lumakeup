import type { Metadata } from "next";
import Link from "next/link";
import { Cta } from "@/components/ui/Cta";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Kicker } from "@/components/ui/Kicker";
import { SERVICES } from "@/lib/services";
import { getServiceContent } from "@/lib/service-content";
import { buildWhatsAppLink } from "@/lib/whatsapp";

/**
 * Índice de Serviços (§3) — listagem curada dos 8 serviços, no estilo quiet luxury.
 * Cada card leva à página do serviço (/servicos/[slug]). Server component (SEO).
 */
export const metadata: Metadata = {
  title: "Serviços — Micropigmentação de Assinatura",
  description:
    "Sobrancelhas, lábios, olhos, capilar, alopécia, Exobrow, micropigmentação paramédica e reconstrução labial. Técnica autoral da Lu Make Up — por avaliação.",
  alternates: { canonical: "/servicos" },
};

export default function ServicosIndex() {
  return (
    <>
      {/* Intro */}
      <section aria-labelledby="servicos-heading" className="bg-ink pb-16 pt-28 lg:pb-20 lg:pt-36">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
          <Kicker>Possibilidades infinitas</Kicker>
          <h1
            id="servicos-heading"
            className="mt-5 max-w-[18ch] font-display text-[2.4rem] font-light uppercase leading-[1.08] tracking-[0.04em] text-text-on-ink lg:text-[3.2rem]"
          >
            Serviços
          </h1>
          <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-muted">
            Nenhum rosto se repete — e nenhum protocolo deveria. Cada procedimento
            começa por um estudo do seu traço, da sua pele, do seu olhar.
          </p>
        </div>
      </section>

      {/* Grade de serviços */}
      <section aria-label="Lista de serviços" className="bg-ink pb-24 lg:pb-32">
        <div className="mx-auto grid max-w-[1100px] gap-x-6 gap-y-12 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {SERVICES.map((s) => {
            const c = getServiceContent(s.slug);
            return (
              <Link
                key={s.slug}
                href={`/servicos/${s.slug}`}
                className="group block focus:outline-none"
                aria-label={`${s.label} — ${s.essence}`}
              >
                <div className="overflow-hidden">
                  <div className="transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                    <ImageSlot
                      src={c?.images?.card ?? c?.images?.results?.[0] ?? c?.images?.hero}
                      position={c?.images?.cardPos}
                      alt={`${s.label} — Lu Make Up`}
                      art={`Card do serviço ${s.label} (foto real a entrar)`}
                      ratio="4 / 5"
                      tone="ink"
                      label={s.label}
                      sizes="(min-width:1024px) 340px, (min-width:640px) 45vw, 100vw"
                    />
                  </div>
                </div>
                <h2 className="mt-5 font-display text-lg font-light text-text-on-ink transition-colors group-hover:text-brass">
                  {s.label}
                </h2>
                <p className="mt-1 max-w-[36ch] text-sm leading-relaxed text-muted">{s.essence}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section data-section-theme="light" className="bg-bone py-24 text-center lg:py-32">
        <div className="mx-auto max-w-[680px] px-6 lg:px-8">
          <h2 className="font-display text-[1.9rem] font-light leading-[1.15] text-text-on-bone lg:text-[2.4rem]">
            Não sabe por onde começar?
          </h2>
          <p className="mx-auto mt-5 max-w-[46ch] text-sm leading-relaxed text-text-on-bone/75">
            Conte o que você deseja — desenhamos a partir do seu traço, em uma avaliação
            personalizada e sem compromisso.
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
