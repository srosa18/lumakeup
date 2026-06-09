/**
 * Kicker — label caixa-alta com tracking +0.18em (§2). Sinal tipográfico
 * de discrição. Cor muted por padrão; brass só onde for gesto statement.
 */
export function Kicker({
  children,
  as: Tag = "p",
  className,
  brass = false,
}: {
  children: React.ReactNode;
  as?: "p" | "span" | "h2";
  className?: string;
  brass?: boolean;
}) {
  return (
    <Tag className={`kicker ${brass ? "text-brass" : "text-muted"} ${className ?? ""}`}>
      {children}
    </Tag>
  );
}
