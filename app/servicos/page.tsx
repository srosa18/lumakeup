import type { Metadata } from "next";
import Link from "next/link";
import { Cta } from "@/components/ui/Cta";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Kicker } from "@/components/ui/Kicker";
import { SERVICES, PILLARS, type Service } from "@/lib/services";
import { getServiceContent } from "@/lib/service-content";
import { buildWhatsAppLink } from "@/lib/whatsapp";

/**
 * Índice de Serviços (§3) · organizado em PILARES (seções visíveis numa rolada,
 * NÃO acordeão): Micropigmentação · Realce & Estética · Reparador & Paramédico.
 * Cada serviço segue a um clique e tem página própria indexada. Server component.
 */
export const metadata: Metadata = {
  title: "Serviços · Micropigmentação, Estética e Reparação",
  description:
    "Micropigmentação, realce e estética e trabalho reparador da Lu Make Up: sobrancelhas, lábios, olhos, capilar, alopécia, brow lamination, lash lifting, camuflagem paramédica e mais. Por avaliação.",
  alternates: { canonical: "/servicos" },
};

function ServiceCard({ s }: { s: Service }) {
  const c = getServiceContent(s.slug);
  return (
    <Link
      href={`/servicos/${s.slug}`}
      className="group block focus:outline-none"
      aria-label={`${s.label} · ${s.essence}`}
    >
      <div className="overflow-hidden">
        <div className="transition-transform duration-700 ease-out group-hover:scale-[1.03]">
          <ImageSlot
            src={c?.images?.card ?? c?.images?.results?.[0] ?? c?.images?.hero}
            position={c?.images?.cardPos}
            alt={`${s.label} · Lu Make Up`}
            art={`Card do serviço ${s.label} (foto real a entrar)`}
            ratio="4 / 5"
            tone="ink"
            label={s.label}
            sizes="(min-width:1024px) 340px, (min-width:640px) 45vw, 100vw"
            size="1000 × 1250 px"
          />
        </div>
      </div>
      <h3 className="mt-5 font-display text-lg font-light text-text-on-ink transition-colors group-hover:text-brass">
        {s.label}
      </h3>
      <p className="mt-1 max-w-[36ch] text-sm leading-relaxed text-muted">{s.essence}</p>
    </Link>
  );
}

export default function ServicosIndex() {
  return (
    <>
      {/* Intro */}
      <div data-comment-id="servicos.hero" data-comment-label="Serviços · Hero">
        <section aria-labelledby="servicos-heading" className="bg-ink pb-14 pt-28 lg:pb-16 lg:pt-36">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
            <Kicker>Possibilidades infinitas</Kicker>
            <h1
              id="servicos-heading"
              className="mt-5 max-w-[18ch] font-display text-[2.4rem] font-light uppercase leading-[1.08] tracking-[0.04em] text-text-on-ink lg:text-[3.2rem]"
            >
              Serviços
            </h1>
            <p className="mt-6 max-w-[54ch] text-base leading-relaxed text-muted">
              Nenhum rosto se repete. E nenhum protocolo deveria. Do realce que ninguém
              percebe ao trabalho que reconstrói, cada procedimento começa por um estudo
              do seu traço, da sua pele, do seu olhar.
            </p>
          </div>
        </section>
      </div>

      {/* Pilares · cada categoria é uma seção com título, tudo visível na rolagem */}
      {PILLARS.map((pillar) => {
        const items = SERVICES.filter((s) => s.category === pillar.id);
        if (items.length === 0) return null;
        return (
          <div
            key={pillar.id}
            data-comment-id={`servicos.${pillar.id}`}
            data-comment-label={`Serviços · ${pillar.label}`}
          >
            <section aria-label={pillar.label} className="bg-ink pb-20 lg:pb-28">
              <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
                <div className="border-b border-line-subtle pb-5">
                  <h2 className="font-display text-[1.5rem] font-light leading-[1.12] text-text-on-ink lg:text-[1.9rem]">
                    {pillar.label}
                  </h2>
                  <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-muted">
                    {pillar.intro}
                  </p>
                </div>
                <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((s) => (
                    <ServiceCard key={s.slug} s={s} />
                  ))}
                </div>
              </div>
            </section>
          </div>
        );
      })}

      {/* CTA */}
      <div data-comment-id="servicos.cta" data-comment-label="Serviços · CTA">
        <section data-section-theme="light" className="bg-bone py-24 text-center lg:py-32">
          <div className="mx-auto max-w-[680px] px-6 lg:px-8">
            <h2 className="font-display text-[1.9rem] font-light leading-[1.15] text-text-on-bone lg:text-[2.4rem]">
              Não sabe por onde começar?
            </h2>
            <p className="mx-auto mt-5 max-w-[46ch] text-sm leading-relaxed text-text-on-bone/75">
              Conte o que você deseja: desenhamos a partir do seu traço, em uma avaliação
              personalizada e sem compromisso.
            </p>
            <div className="mt-9 flex justify-center">
              <Cta href={buildWhatsAppLink()} external variant="solid" tone="on-bone">
                Falar com o ateliê
              </Cta>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
