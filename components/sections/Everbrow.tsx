import Image from "next/image";
import { Cta } from "@/components/ui/Cta";
import { buildWhatsAppLink } from "@/lib/whatsapp";

/**
 * S7 · "Everbrow — By Lu Medical" — réplica do Figma (node 69:20).
 *
 * Comportamento correto (confirmado por print do cliente): o RETRATO é
 * full-bleed (tela cheia) e o CARD claro fica CENTRALIZADO SOBRE o rosto dela.
 * No Figma o card estava posicionado FORA do frame (sobre o canvas cinza) — não
 * era um "painel escuro" de design; aqui ele volta pro centro do rosto.
 *
 * O card traz: janela com CLOSE das sobrancelhas + EVERBROW / By Lu Medical +
 * subtítulo + parágrafo + CTA (WhatsApp).
 *
 * ⚠️ Retrato e close = stock extraído do Figma — placeholders; substituir por
 *    fotos reais da Lu Medical.
 *
 * Fundo CLARO → leva data-section-theme="light" (TopBar inverte p/ preto).
 */
export function Everbrow() {
  return (
    <section
      aria-labelledby="everbrow-heading"
      data-section-theme="light"
      className="relative overflow-hidden bg-stone"
    >
      {/* Retrato full-bleed */}
      <div className="relative h-[88vh] min-h-[660px] w-full">
        <Image
          src="/images/everbrow/retrato.webp"
          alt="Retrato de cliente em close, com sobrancelhas naturais e definidas pela Lu Medical"
          fill
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />

        {/* Card centralizado sobre o rosto */}
        <div className="absolute inset-0 flex items-center justify-center px-5">
          <div className="w-full max-w-[440px] bg-stone px-7 pb-9 pt-7 text-center shadow-[0_40px_90px_-50px_rgba(20,20,20,0.55)] sm:px-9">
            {/* Janela — close das sobrancelhas */}
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src="/images/everbrow/sobrancelhas.webp"
                alt="Close das sobrancelhas naturais e definidas após o procedimento Everbrow"
                fill
                sizes="(min-width:640px) 360px, 80vw"
                className="object-cover object-[center_22%]"
              />
            </div>

            <h2
              id="everbrow-heading"
              className="mt-7 font-display text-[1.9rem] font-light uppercase tracking-[0.22em] text-ink"
            >
              Everbrow
            </h2>
            <p className="mt-1.5 text-[0.7rem] uppercase tracking-[0.18em] text-text-on-bone/65">
              By Lu Medical
            </p>

            <p className="mt-6 font-display text-[1.15rem] font-light leading-snug text-ink">
              O Transplante de Sobrancelhas
              <br />
              Exclusivo da Lu Medical
            </p>

            <p className="mx-auto mt-4 max-w-[36ch] text-[0.78rem] leading-relaxed text-text-on-bone/75">
              Everbrow é a tradução da visão inovadora de Lu Rodrigues: unir arte e
              ciência para oferecer às clientes um resultado impecável, seguro e
              exclusivo, o melhor transplante de sobrancelhas que você já conheceu.
            </p>

            <div className="mt-7">
              <Cta href={buildWhatsAppLink()} external variant="outline" tone="on-bone">
                Agendar horário
              </Cta>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
