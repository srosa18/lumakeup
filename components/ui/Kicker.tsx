/**
 * Kicker — label caixa-alta com tracking +0.18em (§2). Sinal tipográfico
 * de discrição. Cor muted por padrão; brass só onde for gesto statement;
 * `tone="on-ink"` = off-white (bone) p/ labels sobre hero/imagem escura.
 */
export function Kicker({
  children,
  as: Tag = "p",
  className,
  brass = false,
  tone,
}: {
  children: React.ReactNode;
  as?: "p" | "span" | "h2";
  className?: string;
  brass?: boolean;
  tone?: "muted" | "on-ink" | "brass";
}) {
  const color =
    tone === "on-ink"
      ? "text-text-on-ink/85"
      : tone === "brass" || brass
        ? "text-brass"
        : "text-muted";
  return <Tag className={`kicker ${color} ${className ?? ""}`}>{children}</Tag>;
}
