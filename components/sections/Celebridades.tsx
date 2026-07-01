import Image from "next/image";
import { Kicker } from "@/components/ui/Kicker";

/**
 * Prova social — clientes públicas. Galeria de celebridades atendidas pela
 * Lu Make Up (migrada do site atual). Uso de imagem AUTORIZADO pelo cliente.
 * ⚠️ TODO:CONFIRMAR grafia exata dos nomes com a Lu.
 */
const CELEBS: { slug: string; name: string }[] = [
  { slug: "bruna-marquezine", name: "Bruna Marquezine" },
  { slug: "grazi-massafera", name: "Grazi Massafera" },
  { slug: "sabrina-sato", name: "Sabrina Sato" },
  { slug: "debora-secco", name: "Débora Secco" },
  { slug: "paola-oliveira", name: "Paola Oliveira" },
  { slug: "thais-araujo", name: "Thaís Araújo" },
  { slug: "flavia-alessandra", name: "Flávia Alessandra" },
  { slug: "izabel-goulart", name: "Izabel Goulart" },
  { slug: "silvia-poppovic", name: "Silvia Poppovic" },
  { slug: "gilberto-gil", name: "Gilberto Gil e família" },
];

export function Celebridades() {
  return (
    <section aria-labelledby="celebridades-heading" className="bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="max-w-[640px]">
          <Kicker>Confiança</Kicker>
          <h2
            id="celebridades-heading"
            className="mt-5 font-display text-[2rem] font-light leading-[1.12] text-text-on-ink lg:text-[2.6rem]"
          >
            Quem confia o próprio olhar
            <br />
            à Lu Make Up
          </h2>
          <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-muted">
            De atrizes e apresentadoras a mulheres que atravessaram o câncer — o mesmo
            cuidado, a mesma discrição.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
          {CELEBS.map((c) => (
            <li key={c.slug}>
              <div className="relative aspect-[3/4] overflow-hidden bg-stone/10">
                <Image
                  src={`/images/celebridades/${c.slug}.webp`}
                  alt={`${c.name} — cliente da Lu Make Up`}
                  fill
                  sizes="(min-width:1024px) 230px, (min-width:640px) 30vw, 45vw"
                  className="object-cover grayscale transition-all duration-700 ease-out hover:grayscale-0"
                />
              </div>
              <p className="mt-3 font-display text-sm font-light text-text-on-ink">{c.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
