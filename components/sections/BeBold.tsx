"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ImageSlot } from "@/components/ui/ImageSlot";

/**
 * S? · "BE BOLD • BE LIGHT • BE DIFFERENT • BE YOU" — réplica do Figma.
 *
 * Palco (canvas "Tool Tips", node 60:11): modelo central sobre fundo stone,
 * texto decorativo atravessando atrás, e 7 pins numerados no rosto.
 * Conteúdo dos cards (canvas "PINS", node 60:32): cada pin = card branco com
 * miniatura da área + nº + título + descrição + tags.
 *
 * Apresentação:
 *  - Desktop: pins interativos no rosto → 1 card branco fixo na base do palco,
 *    centralizado (troca o conteúdo conforme o pin ativo; pin aceso em latão).
 *    Hover + foco (Tab) + toque. Default = pin 1 (card sempre populado).
 *  - Mobile: a modelo com os pins em cima e, ABAIXO, TODOS os cards empilhados
 *    na ordem. Tocar num pin rola até o card.
 *
 * ⚠️ Posições dos pins: exatas do Figma (centro = canto +14.5 em 29px).
 * ⚠️ Copy: transcrita fiel do Figma. Pendências sinalizadas ao cliente:
 *    - card 3 tags: "Revitalização" repetido;
 *    - card 4 tags: "econstrução" (provável "Reconstrução");
 *    - card 7 corpo: parece copiado do card 6 (lábios) — confirmar texto de capilar.
 * ⚠️ Miniaturas: extraídas do Figma (stock pexels/unsplash/AdobeStock) — substituir
 *    por fotos reais licenciadas da Lu Make Up.
 * ⚠️ Modelo: aguardando PNG transparente do cliente (assets-src/be-bold/).
 */

const MODEL_SRC: string | null = "/images/be-bold/modelo.webp";

type Pin = {
  n: number;
  /** centro em % do frame 1529×1260 */
  x: number;
  y: number;
  title: string;
  /** linha extra acima do corpo (só o card 7 usa, no Figma) */
  subtitle?: string;
  body: string;
  tags: string[];
  thumb: string;
  thumbAlt: string;
};

// Posições: centros do Figma (60:11). Copy + miniaturas: Figma (60:32).
const PINS: Pin[] = [
  {
    n: 1,
    x: 36.59,
    y: 34.8,
    title: "A arte da Naturalidade para sua Sobrancelha",
    body: "Esqueça a ideia de maquiagem definitiva. Na Lu Make Up, a micropigmentação de sobrancelhas é uma experiência de personalização do olhar. Com técnica exclusiva de Lu Rodrigues, criamos fios realistas que se integram aos seus, corrigindo falhas, assimetrias e cicatrizes com naturalidade impressionante.",
    tags: ["Visagismo Personalizado", "Colorimetria Avançada"],
    thumb: "/images/be-bold/thumbs/pin1.webp",
    thumbAlt: "Detalhe de sobrancelha com micropigmentação fio a fio",
  },
  {
    n: 2,
    x: 57.78,
    y: 35.6,
    title: "A Revolução Biotecnológica na Regeneração de Sobrancelhas",
    body: "Por muito tempo, sobrancelhas falhadas eram apenas disfarçadas. O Exobrow, tratamento exclusivo da Lu Make Up, muda essa lógica ao usar exossomos e fatores de crescimento para agir na raiz do problema: a saúde do folículo. Mais do que desenhar, ele reativa a vitalidade natural dos fios.",
    tags: [],
    thumb: "/images/be-bold/thumbs/pin2.webp",
    thumbAlt: "Detalhe do olhar e sobrancelha — tratamento Exobrow",
  },
  {
    n: 3,
    x: 49.67,
    y: 61.23,
    title: "A Revolução do “Lip Blush” e Revitalização",
    body: "Lábios pálidos ou arroxeados podem transmitir cansaço. A Micropigmentação Labial da Lu Make Up devolve cor, definição e volume com naturalidade, usando técnicas de pontilhismo e varredura, sem a necessidade de retocar o batom ao longo do dia.",
    tags: ["Revitalização", "Neutralização de Lábios Escuros"],
    thumb: "/images/be-bold/thumbs/pin3.webp",
    thumbAlt: "Detalhe de lábios com micropigmentação labial",
  },
  {
    n: 4,
    x: 29.66,
    y: 39.88,
    title: "Quando a Estética Encontra a Cura",
    body: "Acreditamos que beleza é também reconstrução. Na Lu Make Up, a micropigmentação paramédica suaviza cicatrizes, marcas e assimetrias com rigor clínico e sensibilidade artística, devolvendo uniformidade à pele e tranquilidade ao se olhar no espelho.",
    tags: ["Camuflagem de Cicatrizes e Estrias", "Reconstrução de Aréolas", "Camuflagem de Vitiligo e Manchas"],
    thumb: "/images/be-bold/thumbs/pin4.webp",
    thumbAlt: "Detalhe de pele — micropigmentação paramédica",
  },
  {
    n: 5,
    x: 56.41,
    y: 43.53,
    title: "O Fim do Delineador Borrado",
    body: "Imagine viver com o olhar sempre impecável, sem borrões ou assimetrias. Na Lu Make Up, a micropigmentação de olhos une elegância e liberdade, com traços precisos que realçam sua expressão de forma segura, sofisticada e à prova d’água.",
    tags: ["Realce de Cílios", "Delineado Clássico", "Efeito Sombra"],
    thumb: "/images/be-bold/thumbs/pin5.webp",
    thumbAlt: "Detalhe dos olhos com delineado em micropigmentação",
  },
  {
    n: 6,
    x: 38.88,
    y: 55.44,
    title: "Harmonia, Simetria e Autoestima",
    body: "Quando a simetria dos lábios é afetada, a confiança também muda. Na Lu Make Up, a reconstrução labial combina colorimetria e visagismo para redesenhar, camuflar e harmonizar o formato da boca com naturalidade e precisão.",
    tags: ["Revitalização", "Efeito Batom", "Neutralização de Lábios Escuros"],
    thumb: "/images/be-bold/thumbs/pin6.webp",
    thumbAlt: "Detalhe de lábios — reconstrução e harmonização",
  },
  {
    n: 7,
    x: 57.59,
    y: 15.75,
    title: "Densidade e Autoestima Sem Cirurgia",
    subtitle: "Soluções Personalizadas para Homens e Mulheres",
    body: "A Técnica Capilar da Lu Make Up é uma solução não cirúrgica avançada para camuflar a calvície e a rarefação. Com uma técnica precisa de pontilhismo, recriamos visualmente os folículos capilares, devolvendo densidade, definição e confiança de forma imediata.",
    tags: ["Efeito Densidade", "Camuflagem de Cicatrizes"],
    thumb: "/images/be-bold/thumbs/pin7.webp",
    thumbAlt: "Detalhe do couro cabeludo — micropigmentação capilar",
  },
];

/**
 * Conteúdo do card — PADRÃO ÚNICO para todos (idêntico ao Figma, 450×200):
 * proporção fixa via aspect-ratio, miniatura quadrada ocupando a altura toda,
 * texto sempre na mesma posição. Nenhum card fica mais alto/baixo que outro.
 */
function CardBody({ pin }: { pin: Pin }) {
  return (
    <div className="relative aspect-[450/200] w-full overflow-hidden bg-white text-text-on-bone shadow-[0_10px_40px_-12px_rgba(0,0,0,0.35)] md:aspect-[29/10]">
      <div className="absolute inset-0 flex gap-[3.3%] p-[3.3%]">
        {/* Miniatura: quadrada ocupando a ALTURA toda do card (cara editorial). */}
        <ImageSlot
          src={pin.thumb}
          alt={pin.thumbAlt}
          art={pin.thumbAlt}
          ratio="1 / 1"
          tone="bone"
          sizes="240px"
          className="h-full shrink-0"
        />
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex gap-1.5">
            <span className="font-display text-[0.78rem] leading-snug text-text-on-bone/45 md:text-[0.86rem]">{pin.n}</span>
            <div className="min-w-0">
              <h3 className="font-display text-[0.9rem] font-semibold leading-snug text-text-on-bone md:text-[1.02rem]">
                {pin.title}
              </h3>
              {pin.subtitle ? (
                <p className="mt-0.5 font-display text-[0.78rem] font-medium leading-snug text-text-on-bone/80 md:text-[0.86rem]">
                  {pin.subtitle}
                </p>
              ) : null}
            </div>
          </div>
          <p className="mt-3 overflow-hidden text-[0.76rem] leading-[1.45] text-text-on-bone/65 md:text-[0.86rem]">
            {pin.body}
          </p>
          {pin.tags.length > 0 ? (
            <p className="mt-auto pt-2 text-[0.7rem] font-semibold leading-snug text-text-on-bone md:text-[0.78rem]">
              {pin.tags.join("  |  ")}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function BeBold() {
  const [active, setActive] = useState<number | null>(null); // nada visível até hover/foco
  const rootRef = useRef<HTMLElement | null>(null);
  const activePin = active === null ? null : PINS.find((p) => p.n === active) ?? null;

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") (document.activeElement as HTMLElement)?.blur?.();
    };
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, []);

  const scrollToMobileCard = (n: number) => {
    document.getElementById(`bebold-card-m-${n}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section
      ref={rootRef}
      aria-labelledby="bebold-titulo"
      // -mt + z: a Be Bold sobe por baixo e vai cobrindo a cauda preta da seção
      // sticky anterior (Beleza Discreta) enquanto o título dela sobe — sem buraco preto.
      // -85vh (não -100): entra um pouco MAIS TARDE, p/ não cobrir cedo demais o
      // botão/headline da Beleza Discreta no scroll rápido (entrada mais fluida).
      // overflow-x-clip (não -hidden): corta o sangramento horizontal do texto
      // decorativo SEM virar container de scroll (senão quebra o sticky do card).
      // pb só no mobile (cards empilhados); no desktop o BG termina onde a foto
      // termina (sem faixa de stone sobrando embaixo).
      className="relative z-10 -mt-[72vh] overflow-x-clip bg-stone pb-16 md:pb-0"
    >
      <h2 id="bebold-titulo" className="sr-only">
        Be bold, be light, be different, be you — áreas e procedimentos
      </h2>

      {/* Palco: modelo + texto decorativo + pins. flex-col p/ o card (filho flow)
          ir pro fim do palco via mt-auto; altura travada por aspect (não expande). */}
      <div className="relative mx-auto flex aspect-[1529/1260] w-full max-w-[1280px] flex-col">
        {/* Texto decorativo, atrás da modelo — marquee infinito (dir→esq), em PRETO.
            Largura = viewport inteira (w-screen centralizado), recortado por overflow. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[44%] z-0 flex w-screen -translate-x-1/2 overflow-hidden"
        >
          <div className="bebold-marquee flex w-max shrink-0 whitespace-nowrap font-display text-[clamp(1.6rem,6.2vw,5rem)] font-light uppercase tracking-[0.04em] text-ink">
            {[0, 1, 2, 3].map((i) => (
              <span key={i}>Be bold • Be light • Be different • Be you •&nbsp;</span>
            ))}
          </div>
        </div>

        {/* Modelo central (PNG transparente do cliente) — posicionada exatamente
            como no Figma (img 1870×1236 em frame 1529×1260: left -297, top 24),
            convertido p/ % para os pins alinharem com o rosto. */}
        <div className="absolute inset-0 z-10">
          {MODEL_SRC ? (
            <div className="absolute" style={{ left: "-19.42%", width: "122.30%", top: "1.9%", height: "98.1%" }}>
              <Image
                src={MODEL_SRC}
                alt="Retrato de modelo com áreas do rosto destacadas por pins"
                fill
                sizes="(min-width:1280px) 1565px, 122vw"
                className="object-contain object-bottom"
              />
            </div>
          ) : (
            <div
              role="img"
              aria-label="Retrato de modelo com áreas do rosto destacadas por pins"
              data-art="PNG transparente da modelo (cliente) — assets-src/be-bold/"
              className="absolute inset-x-[12%] bottom-0 top-[6%] flex items-end justify-center rounded-t-[40%] border border-ink/10 bg-ink/[0.04]"
            >
              <span className="kicker mb-[18%] text-ink/40">Modelo · PNG a definir</span>
            </div>
          )}
        </div>

        {/* Pins interativos */}
        {PINS.map((p) => {
          const isActive = active === p.n;
          return (
            <button
              key={p.n}
              type="button"
              aria-label={`Área ${p.n}: ${p.title}`}
              aria-pressed={isActive}
              onClick={(e) => {
                // mouse já é tratado por hover (enter/leave). toque/teclado: ativa
                // e, no mobile, rola até o card empilhado.
                if ((e.nativeEvent as PointerEvent).pointerType === "mouse") return;
                setActive(p.n);
                scrollToMobileCard(p.n);
              }}
              onFocus={() => setActive(p.n)}
              onBlur={() => setActive(null)}
              onPointerEnter={(e) => {
                if (e.pointerType === "mouse") setActive(p.n);
              }}
              onPointerLeave={(e) => {
                if (e.pointerType === "mouse") setActive(null);
              }}
              className={[
                "group absolute z-30 grid h-7 w-7 -translate-x-1/2 -translate-y-1/2 place-items-center border transition-colors duration-200",
                // default (sem over): borda branca + vidro 20% (a pele aparece).
                // hover/ativo: bloco creme sólido (igual à referência do cliente).
                isActive
                  ? "border-transparent bg-bone"
                  : "border-white bg-white/20 group-hover:border-transparent group-hover:bg-bone",
              ].join(" ")}
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
            >
              <span
                className={[
                  "font-display text-[12px] font-light leading-none tracking-[0.1em] transition-colors duration-200",
                  isActive ? "text-text-on-bone" : "text-white group-hover:text-text-on-bone",
                ].join(" ")}
              >
                {p.n}
              </span>
            </button>
          );
        })}

        {/* DESKTOP — banner preso ao RODAPÉ da viewport (sticky bottom) enquanto a
            seção preenche a tela, mas CLAMPADO ao palco: nunca desce abaixo do corpo
            da modelo nem cria faixa (o palco tem altura travada por aspect). É filho
            flex com mt-auto (vai pro fim do palco). Aparece só no hover/foco. */}
        <div
          className="pointer-events-none sticky bottom-6 z-40 mx-auto mb-6 mt-auto hidden w-[min(680px,92%)] md:block"
          role="status"
          aria-live="polite"
        >
          {activePin && (
            <div key={activePin.n} className="bebold-fade">
              <CardBody pin={activePin} />
            </div>
          )}
        </div>
      </div>

      {/* MOBILE — todos os cards empilhados na sequência, abaixo da modelo */}
      <div className="mx-auto mt-6 flex max-w-[440px] flex-col gap-4 px-5 md:hidden">
        {PINS.map((p) => (
          <div key={p.n} id={`bebold-card-m-${p.n}`} className="scroll-mt-24">
            <CardBody pin={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
