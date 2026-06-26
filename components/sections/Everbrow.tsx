import Image from "next/image";
import { Cta } from "@/components/ui/Cta";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { buildWhatsAppLink } from "@/lib/whatsapp";

/**
 * S7 · "Everbrow — By Lu Medical" — réplica do Figma (node 69:20, frame 2270×919).
 *
 * Composição: retrato grande à ESQUERDA (fundo claro) + painel ESCURO à direita
 * com um CARD claro flutuante (slot de imagem no topo + EVERBROW / By Lu Medical
 * + subtítulo + parágrafo + CTA).
 *
 * ⚠️ Retrato = stock extraído do Figma (close com sobrancelhas em evidência) —
 *    placeholder; substituir por foto real da Lu Medical. O bloco visual do card
 *    fica como `ImageSlot` neutro (sem asset ainda).
 *
 * Seção de fundo ESCURO → NÃO leva data-section-theme="light" (nav fica branca).
 */
export function Everbrow() {
  return (
    <section aria-labelledby="everbrow-heading" className="overflow-hidden bg-ink">
      <div className="grid lg:grid-cols-[1.35fr_1fr] lg:items-stretch">
        {/* Retrato (esquerda) */}
        <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[660px]">
          <Image
            src="/images/everbrow/retrato.webp"
            alt="Retrato de cliente em close, com sobrancelhas naturais e definidas pela Lu Medical"
            fill
            sizes="(min-width:1024px) 58vw, 100vw"
            className="object-cover object-[center_28%]"
          />
        </div>

        {/* Painel escuro + card (direita) */}
        <div className="flex items-center justify-center px-6 py-16 lg:py-20">
          <div className="w-full max-w-[360px] bg-stone px-7 pb-9 pt-7 text-center">
            {/* Bloco visual do card — sem asset ainda */}
            <ImageSlot
              alt="Bloco visual do card Everbrow — vídeo ou foto do procedimento, a definir"
              art="Vídeo/foto do procedimento Everbrow (Lu Medical) — a definir"
              ratio="16 / 10"
              tone="ink"
            />

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
