/**
 * Monograma LU — marca oficial (SVG entregue pelo cliente: brand/monograma logo.svg).
 * Dois traços "L" e "U" entrelaçados. Proporção 27:54 (1:2).
 * Usa currentColor para herdar a cor do contexto (text-on-ink / brass etc.).
 */
export function Monogram({
  className,
  title = "Lu Make Up",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 27 54"
      role="img"
      aria-label={title}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.5666 0V36.4557H17.1175V0H9.27448V44.481H26.3919H26.4131V0H18.5666Z"
        fill="currentColor"
      />
      <path
        d="M7.84297 45.9747V0H0V54H26.413V45.9747H7.84297Z"
        fill="currentColor"
      />
    </svg>
  );
}
