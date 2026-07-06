import Image from "next/image";

/**
 * Slot de imagem nomeado (§4/§6 — "onde o luxo morre").
 *
 * Quando a foto final existir, passe `src`: renderiza com next/image
 * (AVIF/WebP automático). Enquanto não existir, renderiza um placeholder
 * NEUTRO e elegante — campo de cor (ink/bone), nunca "lorem picsum" nem stock.
 *
 * Regras inquebráveis:
 *  - proporção correta sempre (evita CLS)
 *  - `alt` real e descritivo, obrigatório (nada de "Mackup")
 *  - `art` = nota de direção de arte, fica visível discretamente no placeholder
 *    e marcada no DOM via data-art para rastreio
 */
export type ImageSlotProps = {
  /** caminho da foto final em /public; se ausente, mostra placeholder */
  src?: string;
  /** alt descritivo real — obrigatório */
  alt: string;
  /** nota de direção de arte para substituição (§6) */
  art: string;
  /** proporção CSS, ex.: "3 / 4", "16 / 9", "1 / 1" */
  ratio?: string;
  /** tom do placeholder */
  tone?: "ink" | "bone";
  /** prioridade de carregamento (hero/LCP) */
  priority?: boolean;
  /** sizes para next/image */
  sizes?: string;
  className?: string;
  /** label opcional no placeholder (ex.: nome do serviço) */
  label?: string;
  /** object-position do recorte (ex.: "center", "65% 30%") */
  position?: string;
  /** tamanho ideal da foto (ex.: "1000 × 1250 px") — exibido no canto do placeholder */
  size?: string;
};

export function ImageSlot({
  src,
  alt,
  art,
  ratio = "3 / 4",
  tone = "ink",
  priority = false,
  sizes = "100vw",
  className,
  label,
  position,
  size,
}: ImageSlotProps) {
  const toneBg = tone === "ink" ? "bg-ink" : "bg-bone";
  const toneText = tone === "ink" ? "text-text-on-ink/55" : "text-text-on-bone/55";

  if (src) {
    return (
      <div
        className={`relative overflow-hidden ${className ?? ""}`}
        style={{ aspectRatio: ratio }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
          style={position ? { objectPosition: position } : undefined}
        />
      </div>
    );
  }

  // Placeholder neutro elegante — sem stock, sem imagem aleatória.
  return (
    <div
      data-placeholder="true"
      data-art={art}
      role="img"
      aria-label={alt}
      title={alt}
      className={`relative flex items-center justify-center overflow-hidden border border-line-subtle ${toneBg} ${className ?? ""}`}
      style={{ aspectRatio: ratio }}
    >
      <div className={`flex flex-col items-center gap-2 px-6 text-center ${toneText}`}>
        <span className="kicker text-brass/70">Imagem · a definir</span>
        {label ? (
          <span className="font-display text-lg leading-tight">{label}</span>
        ) : null}
        <span className="max-w-[28ch] text-[0.7rem] leading-snug opacity-70">
          {alt}
        </span>
      </div>
      {/* Tamanho ideal da foto — orientação p/ o cliente preparar a imagem. */}
      {size ? (
        <span className="absolute bottom-2 right-2 border border-brass/50 bg-black/45 px-2 py-1 text-[0.7rem] font-medium tracking-[0.1em] text-brass">
          {size}
        </span>
      ) : null}
    </div>
  );
}
