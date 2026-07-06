import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Cta } from "@/components/ui/Cta";
import { Kicker } from "@/components/ui/Kicker";
import { SizeTag } from "@/components/ui/SizeTag";
import { SITE } from "@/lib/site";
import { UNITS, getUnit, HORARIO, CENTRAL_PHONE_DISPLAY, type UnitAddress } from "@/lib/units";
import { buildWhatsAppLink } from "@/lib/whatsapp";

/** Fotos por unidade (só SP tem acervo real por ora). */
const UNIT_PHOTOS: Record<string, string[]> = {
  "sao-paulo": [
    "/images/a-casa/espaco-1.webp",
    "/images/a-casa/espaco-2.webp",
    "/images/a-casa/espaco-3.webp",
    "/images/a-casa/espaco-4.webp",
    "/images/a-casa/espaco-5.webp",
  ],
};

export function generateStaticParams() {
  return UNITS.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const u = UNITS.find((x) => x.slug === slug);
  if (!u) return {};
  return {
    title: `Lu Make Up ${u.city} · Ateliê`,
    description: `Ateliê Lu Make Up em ${u.city} (${u.state}). ${u.addresses[0].name}. Atendimento por agendamento.`,
    alternates: { canonical: `/localizacoes/${slug}` },
  };
}

function mapsHref(a: UnitAddress): string {
  const q = encodeURIComponent(`${a.street}, ${a.district}, ${a.city} - ${a.state}${a.zip ? " " + a.zip : ""}`);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

export default async function UnidadePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const unit = UNITS.find((u) => u.slug === slug);
  if (!unit) notFound();
  getUnit(slug); // valida

  const photos = UNIT_PHOTOS[slug] ?? [];
  const agendar = buildWhatsAppLink({ unitSlug: unit.slug });

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": unit.addresses.map((a) => ({
      "@type": "BeautySalon",
      name: `${SITE.name} · ${a.name}`,
      parentOrganization: SITE.name,
      telephone: CENTRAL_PHONE_DISPLAY,
      url: `${SITE.url}/localizacoes/${unit.slug}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: a.street,
        addressLocality: a.city,
        addressRegion: a.state,
        postalCode: a.zip,
        addressCountry: unit.country === "Estados Unidos" ? "US" : "BR",
      },
      areaServed: a.city,
    })),
  };

  return (
    <>
      {/* Cabeçalho */}
      <header className="bg-ink pb-12 pt-28 lg:pt-36">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
          <Link href="/localizacoes" className="kicker text-muted transition-colors hover:text-brass">
            ← Localizações
          </Link>
          <p className="kicker mt-8 text-brass">{unit.state} · {unit.country}</p>
          <h1 className="mt-3 font-display text-[2.4rem] font-light uppercase leading-[1.05] tracking-[0.04em] text-text-on-ink lg:text-[3.4rem]">
            {unit.city}
          </h1>
          <p className="mt-5 max-w-[52ch] text-sm leading-relaxed text-muted">
            {HORARIO}. Atendimento por avaliação. Fale com o ateliê para reservar o seu horário.
          </p>
        </div>
      </header>

      {/* Fotos (quando houver) */}
      {photos.length > 0 && (
        <section aria-label={`Ambientes · ${unit.city}`} className="bg-ink pb-6">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
              {photos.slice(0, 4).map((src, i) => (
                <div key={src} className={`relative overflow-hidden bg-stone/10 ${i === 0 ? "col-span-2 aspect-[4/3] lg:col-span-2 lg:row-span-2 lg:aspect-auto" : "aspect-[3/4]"}`}>
                  <Image src={src} alt={`Ateliê Lu Make Up ${unit.city} · ambiente ${i + 1}`} fill sizes="(min-width:1024px) 500px, 50vw" className="object-cover" />
                  <SizeTag size="1200 × 900 px" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Endereços */}
      <section aria-labelledby="enderecos-heading" className="bg-ink py-20 lg:py-28">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
          <Kicker>{unit.addresses.length > 1 ? "Endereços" : "Endereço"}</Kicker>
          <h2 id="enderecos-heading" className="mt-5 font-display text-[1.8rem] font-light leading-[1.15] text-text-on-ink lg:text-[2.2rem]">
            {unit.addresses.length > 1 ? `${unit.addresses.length} ateliês em ${unit.city}` : `O ateliê em ${unit.city}`}
          </h2>

          <div className="mt-12 grid gap-px overflow-hidden border border-line-subtle md:grid-cols-2">
            {unit.addresses.map((a) => (
              <div key={a.name} className="bg-ink p-8 outline outline-1 outline-line-subtle lg:p-10">
                <h3 className="font-display text-lg font-light text-text-on-ink">{a.name}</h3>
                <address className="mt-4 not-italic text-sm leading-relaxed text-muted">
                  {a.street}
                  <br />
                  {a.district} · {a.city}, {a.state}
                  {a.zip ? <><br />CEP {a.zip}</> : null}
                </address>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                  <a href={mapsHref(a)} target="_blank" rel="noopener noreferrer" className="kicker text-brass underline underline-offset-4">
                    Como chegar
                  </a>
                  <a href={buildWhatsAppLink({ unitSlug: unit.slug, service: `atendimento em ${a.name}` })} target="_blank" rel="noopener noreferrer" className="kicker text-muted underline underline-offset-4 transition-colors hover:text-brass">
                    Falar com o ateliê
                  </a>
                </div>
              </div>
            ))}
          </div>

          {unit.whatsappPlaceholder && (
            <p className="mt-8 text-xs leading-relaxed text-muted/70">
              {/* TODO:CONFIRMAR número dedicado por unidade */}
              Atendimento centralizado: {CENTRAL_PHONE_DISPLAY}.
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section data-section-theme="light" className="bg-bone py-24 text-center lg:py-32">
        <div className="mx-auto max-w-[640px] px-6 lg:px-8">
          <h2 className="font-display text-[1.9rem] font-light leading-[1.15] text-text-on-bone lg:text-[2.4rem]">
            Reserve o seu horário em {unit.city}
          </h2>
          <p className="mx-auto mt-5 max-w-[44ch] text-sm leading-relaxed text-text-on-bone/75">
            Uma avaliação personalizada, sem compromisso, para desenhar o que é seu.
          </p>
          <div className="mt-9 flex justify-center">
            <Cta href={agendar} external variant="solid" tone="on-bone">
              Falar com o ateliê
            </Cta>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
