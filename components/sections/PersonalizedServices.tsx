import { Cta } from "@/components/ui/Cta";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Kicker } from "@/components/ui/Kicker";

/**
 * S5 · "Serviços Personalizados" · réplica do Figma (canvas "serviços
 * personalizado", node 69:20).
 *
 * Layout editorial em duas colunas sobre fundo preto:
 *  - Esquerda: kicker "POSSIBILIDADES INFINITAS" + headline grande no TOPO;
 *    parágrafo + CTA "VER TODOS OS SERVIÇOS" ancorados embaixo (mt-auto).
 *  - Direita: retrato (3:4) com a altura do bloco.
 *
 * ⚠️ Imagem: stock (AdobeStock) extraído do Figma · substituir por foto real
 *    da Lu Make Up. Conteúdo/posições exatos do frame 1440×919.
 */
export function PersonalizedServices() {
  return (
    <section
      aria-labelledby="personalizados-heading"
      className="overflow-hidden bg-ink py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-[920px] gap-12 px-6 lg:grid-cols-[1fr_344px] lg:items-stretch lg:gap-24 lg:px-8">
        {/* Coluna de texto · headline no topo, corpo+CTA embaixo */}
        <div className="flex flex-col">
          <div>
            <Kicker>Possibilidades infinitas</Kicker>
            <h2
              id="personalizados-heading"
              className="mt-5 font-display text-[2rem] font-light uppercase leading-[1.12] tracking-[0.06em] text-text-on-ink sm:text-[2.4rem] lg:text-[2.75rem]"
            >
              Serviços
              <br />
              personalizados
            </h2>
          </div>

          <div className="mt-10 lg:mt-auto lg:pt-16">
            <p className="max-w-[46ch] text-sm leading-relaxed text-muted">
              Nenhum rosto se repete. Por isso, aqui não existe procedimento de
              catálogo: cada traço nasce de um estudo do seu rosto, do seu tom e da
              sua rotina. O que já é bonito em você ganha força. O resto, ninguém
              percebe.
            </p>
            <div className="mt-8">
              <Cta href="/servicos" variant="outline">
                Ver os serviços
              </Cta>
            </div>
          </div>
        </div>

        {/* Retrato (direita) */}
        <div className="w-full lg:w-[344px]">
          <ImageSlot
            src="/images/personalizados/retrato-2.webp"
            alt="Retrato de cliente sorrindo, pele natural valorizada"
            art="Foto real do cliente (original em public/images/possibilidades/)"
            ratio="344 / 455"
            tone="ink"
            sizes="(min-width:1024px) 344px, 100vw"
            className="w-full"
            size="900 × 1190 px"
          />
        </div>
      </div>
    </section>
  );
}
