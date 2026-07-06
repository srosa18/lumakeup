import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Kicker } from "@/components/ui/Kicker";
import { DIARIO, formatData } from "@/lib/diario";

/**
 * Diário (§11) · índice do blog. Server component (SEO). Conteúdo migrado do
 * site atual (ver lib/diario.ts). Lista editorial: o último post em destaque,
 * os demais em grade. Sem filtro interativo (mantém server-only).
 */
export const metadata: Metadata = {
  title: "Notícias",
  description:
    "Notícias da Lu Make Up: micropigmentação, pigmentos, sobrancelhas e o trabalho reparador do Instituto Living Sculpture. Reflexões e bastidores da técnica autoral de Lu Rodrigues.",
  alternates: { canonical: "/diario" },
};

export default function DiarioIndex() {
  const [destaque, ...resto] = DIARIO;

  return (
    <>
      {/* Intro */}
      <section aria-labelledby="diario-heading" className="bg-ink pb-14 pt-28 lg:pb-16 lg:pt-36">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
          <Kicker>Reflexões & bastidores</Kicker>
          <h1
            id="diario-heading"
            className="mt-5 font-display text-[2.4rem] font-light uppercase leading-[1.08] tracking-[0.04em] text-text-on-ink lg:text-[3.2rem]"
          >
            Notícias
          </h1>
          <p className="mt-6 max-w-[56ch] text-base leading-relaxed text-muted">
            O que sustenta um resultado natural nem sempre se vê. Aqui dividimos a
            técnica, os pigmentos, o cuidado e as histórias por trás de cada traço.
          </p>
        </div>
      </section>

      {/* Destaque · último post */}
      {destaque && (
        <section aria-label="Em destaque" className="bg-ink pb-16 lg:pb-20">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
            <Link
              href={`/diario/${destaque.slug}`}
              className="group grid gap-8 lg:grid-cols-2 lg:items-center"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-stone/10">
                {destaque.cover && (
                  <Image
                    src={destaque.cover}
                    alt={destaque.coverAlt}
                    fill
                    sizes="(min-width:1024px) 520px, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    priority
                  />
                )}
              </div>
              <div>
                <p className="kicker text-brass">{destaque.tema}</p>
                <h2 className="mt-4 font-display text-[1.8rem] font-light leading-[1.15] text-text-on-ink transition-colors group-hover:text-brass lg:text-[2.3rem]">
                  {destaque.title}
                </h2>
                <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-muted lg:text-base">
                  {destaque.excerpt}
                </p>
                <p className="kicker mt-6 text-muted">
                  {formatData(destaque.date)} · {destaque.readingMin} min de leitura
                </p>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Grade dos demais */}
      <section aria-label="Todos os textos" className="bg-ink pb-24 lg:pb-32">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
          <div className="border-t border-line-subtle pt-12">
            <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {resto.map((p) => (
                <Link key={p.slug} href={`/diario/${p.slug}`} className="group block">
                  <div className="relative aspect-[16/11] overflow-hidden bg-stone/10">
                    {p.cover && (
                      <Image
                        src={p.cover}
                        alt={p.coverAlt}
                        fill
                        sizes="(min-width:1024px) 340px, (min-width:640px) 45vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    )}
                  </div>
                  <p className="kicker mt-5 text-brass">{p.tema}</p>
                  <h3 className="mt-3 font-display text-lg font-light leading-snug text-text-on-ink transition-colors group-hover:text-brass">
                    {p.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{p.excerpt}</p>
                  <p className="kicker mt-4 text-muted/80">
                    {formatData(p.date)} · {p.readingMin} min
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
