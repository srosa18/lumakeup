import { SHOW_IMAGE_SIZE_TAGS } from "@/lib/flags";

/**
 * Selo com o tamanho ideal da imagem (fase de revisão · lib/flags.ts).
 * Vive DENTRO de um pai `relative`; canto inferior direito por padrão.
 * Some do site inteiro com SHOW_IMAGE_SIZE_TAGS = false.
 */
export function SizeTag({ size, className }: { size?: string; className?: string }) {
  if (!SHOW_IMAGE_SIZE_TAGS || !size) return null;
  return (
    <span
      className={`pointer-events-none absolute bottom-2 right-2 z-20 border border-brass/50 bg-black/45 px-2 py-1 text-[0.7rem] font-medium tracking-[0.1em] text-brass ${className ?? ""}`}
    >
      {size}
    </span>
  );
}
