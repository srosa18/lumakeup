import Link from "next/link";
import { Kicker } from "@/components/ui/Kicker";
import { Logo } from "@/components/ui/Logo";
import { SITE } from "@/lib/site";
import { UNITS } from "@/lib/units";

/**
 * S11 · Rodapé (§4). Monograma + assinatura. Idioma PT consistente
 * (corrige "OUR STORY" → Nossa História). Localizações tratadas como ateliês.
 * ⚠️ Profissionais/Formação (§3) — pendente de confirmação; não incluído ainda.
 */
const COLS = [
  {
    title: "A Casa",
    links: [
      { href: "/a-casa", label: "Nossa História" },
      { href: "/a-casa#lu-rodrigues", label: "Lu Rodrigues" },
      { href: "/a-casa#pigmentos", label: "Os Pigmentos" },
      { href: "/diario", label: "Diário" },
    ],
  },
  {
    title: "Atendimento",
    links: [
      { href: "/servicos", label: "Serviços" },
      { href: "/lu-medical", label: "Lu Medical" },
      { href: "/instituto-living-sculpture", label: "Instituto Living Sculpture" },
      { href: "/contato", label: "Falar com o ateliê" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line-subtle bg-ink text-text-on-ink">
      <div className="mx-auto max-w-[var(--container-boutique)] px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Monograma + assinatura */}
          <div className="lg:col-span-4">
            <Logo className="h-20 w-auto text-text-on-ink" />
            <p className="mt-5 max-w-[34ch] text-sm leading-relaxed text-muted">
              {SITE.boilerplate}
            </p>
            <p className="mt-6 text-sm tracking-[0.14em] text-muted">
              São Paulo · Miami
            </p>
          </div>

          {/* Colunas de navegação */}
          {COLS.map((col) => (
            <nav key={col.title} aria-label={col.title} className="lg:col-span-2">
              <Kicker as="h2">{col.title}</Kicker>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-text-on-ink/80 transition-colors hover:text-brass">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Localizações */}
          <nav aria-label="Localizações" className="lg:col-span-2">
            <Kicker as="h2">Ateliês</Kicker>
            <ul className="mt-5 flex flex-col gap-3">
              {UNITS.map((u) => (
                <li key={u.slug}>
                  <Link
                    href={`/localizacoes/${u.slug}`}
                    className="text-sm text-text-on-ink/80 transition-colors hover:text-brass"
                  >
                    {u.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Redes */}
          <div className="lg:col-span-2">
            <Kicker as="h2">Redes</Kicker>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-on-ink/80 transition-colors hover:text-brass"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha final */}
        <div className="mt-16 flex flex-col gap-4 border-t border-line-subtle pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {SITE.name}. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link href="/politica-de-privacidade" className="hover:text-brass">
              Política de Privacidade
            </Link>
            <Link href="/termos-de-servico" className="hover:text-brass">
              Termos de Serviço
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
