import type { Metadata } from "next";
import Link from "next/link";
import { Kicker } from "@/components/ui/Kicker";
import { UNITS, HORARIO } from "@/lib/units";

/**
 * Localizações (§9/§11 P2) · índice das unidades. Server component (SEO local).
 * Cada card leva à página da unidade (/localizacoes/[slug]). Endereços reais
 * (site atual). ⚠️ TODO:CONFIRMAR números de WhatsApp dedicados por unidade.
 */
export const metadata: Metadata = {
  title: "Localizações · Ateliês Lu Make Up",
  description:
    "Ateliês Lu Make Up em São Paulo, Rio de Janeiro, Brasília, Manaus e Miami. Atendimento por agendamento. Encontre a unidade mais próxima.",
  alternates: { canonical: "/localizacoes" },
};

export default function LocalizacoesIndex() {
  return (
    <>
      <section aria-labelledby="loc-heading" className="bg-ink pb-14 pt-28 lg:pb-16 lg:pt-36">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
          <Kicker>Onde estamos</Kicker>
          <h1
            id="loc-heading"
            className="mt-5 font-display text-[2.4rem] font-light uppercase leading-[1.08] tracking-[0.04em] text-text-on-ink lg:text-[3.2rem]"
          >
            Localizações
          </h1>
          <p className="mt-6 max-w-[54ch] text-base leading-relaxed text-muted">
            Cinco cidades, um mesmo cuidado. O atendimento é por agendamento, {HORARIO.toLowerCase()}.
          </p>
        </div>
      </section>

      <section aria-label="Unidades" className="bg-ink pb-24 lg:pb-32">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
          <ul className="grid gap-px overflow-hidden border border-line-subtle sm:grid-cols-2 lg:grid-cols-3">
            {UNITS.map((u) => (
              <li key={u.slug} className="bg-ink outline outline-1 outline-line-subtle">
                <Link href={`/localizacoes/${u.slug}`} className="group flex h-full flex-col p-8 transition-colors hover:bg-white/[0.03] lg:p-10">
                  <p className="kicker text-brass">{u.state} · {u.country}</p>
                  <h2 className="mt-3 font-display text-2xl font-light text-text-on-ink transition-colors group-hover:text-brass">
                    {u.city}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {u.addresses[0].district}
                    {u.addresses.length > 1 ? ` · +${u.addresses.length - 1} ${u.addresses.length - 1 === 1 ? "endereço" : "endereços"}` : ""}
                  </p>
                  <span className="kicker mt-auto pt-8 text-muted transition-colors group-hover:text-brass">
                    Ver unidade →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
