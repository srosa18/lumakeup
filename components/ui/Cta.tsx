import Link from "next/link";

/**
 * CTA "por convite" (§1/§6). Banir "AGENDE AGORA".
 * Copy permitida: Agendar avaliação · Reservar meu horário · Falar com o ateliê
 * · Solicitar avaliação · Ver todos os serviços · Conheça o Instituto.
 *
 * `external` (WhatsApp deep-link) abre em nova aba com rel seguro.
 */
type CtaProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "quiet";
  tone?: "on-ink" | "on-bone";
  external?: boolean;
  className?: string;
};

export function Cta({
  href,
  children,
  variant = "outline",
  tone = "on-ink",
  external = false,
  className,
}: CtaProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[0.8rem] font-medium tracking-[0.1em] uppercase transition-colors duration-500 ease-out";

  const onInk = {
    solid: "bg-bone text-text-on-bone hover:bg-brass hover:text-ink",
    outline: "border border-line-subtle text-text-on-ink hover:border-brass hover:text-brass",
    quiet: "text-text-on-ink underline underline-offset-4 decoration-line-subtle hover:decoration-brass hover:text-brass px-0 py-1 tracking-[0.05em] normal-case text-sm",
  };
  const onBone = {
    solid: "bg-ink text-text-on-ink hover:bg-brass hover:text-ink",
    outline: "border border-text-on-bone/20 text-text-on-bone hover:border-brass hover:text-brass",
    quiet: "text-text-on-bone underline underline-offset-4 decoration-text-on-bone/30 hover:decoration-brass hover:text-brass px-0 py-1 tracking-[0.05em] normal-case text-sm",
  };

  const styles = tone === "on-ink" ? onInk[variant] : onBone[variant];
  const cls = `${base} ${styles} ${className ?? ""}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
