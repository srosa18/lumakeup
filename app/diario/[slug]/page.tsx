import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Cta } from "@/components/ui/Cta";
import { Kicker } from "@/components/ui/Kicker";
import { DIARIO, getPost, formatData } from "@/lib/diario";
import { SITE } from "@/lib/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

/**
 * Post do Diário · route dinâmico, SSG. Renderiza o HTML migrado e sanitizado
 * (lib/diario.ts) em container .prose-lu. Cabeçalho editorial + capa + corpo +
 * relacionados (mesmo tema). JSON-LD Article (§8).
 */
export function generateStaticParams() {
  return DIARIO.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/diario/${slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      images: post.cover ? [{ url: post.cover, alt: post.coverAlt }] : undefined,
    },
  };
}

export default async function DiarioPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const relacionados = DIARIO.filter((p) => p.tema === post.tema && p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    image: post.cover ? `${SITE.url}${post.cover}` : undefined,
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name },
    mainEntityOfPage: `${SITE.url}/diario/${post.slug}`,
    articleSection: post.tema,
  };

  return (
    <article>
      {/* Cabeçalho */}
      <header className="bg-ink pb-12 pt-28 lg:pt-36">
        <div className="mx-auto max-w-[760px] px-6 lg:px-8">
          <Link href="/diario" className="kicker text-muted transition-colors hover:text-brass">
            ← Notícias
          </Link>
          <p className="kicker mt-8 text-brass">{post.tema}</p>
          <h1 className="mt-4 font-display text-[2.1rem] font-light leading-[1.12] text-text-on-ink lg:text-[3rem]">
            {post.title}
          </h1>
          <p className="kicker mt-6 text-muted">
            {formatData(post.date)} · {post.readingMin} min de leitura
          </p>
        </div>
      </header>

      {/* Capa */}
      {post.cover && (
        <div className="bg-ink">
          <div className="relative mx-auto aspect-[16/9] max-w-[1100px] overflow-hidden lg:aspect-[2/1]">
            <Image
              src={post.cover}
              alt={post.coverAlt}
              fill
              sizes="(min-width:1100px) 1100px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* Corpo */}
      <div className="bg-bone py-20 lg:py-28">
        <div
          className="prose-lu mx-auto max-w-[720px] px-6 lg:px-8"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        {/* CTA por convite */}
        <div className="mx-auto mt-16 max-w-[720px] px-6 lg:px-8">
          <div className="border-t border-text-on-bone/12 pt-10">
            <p className="font-display text-xl font-light leading-snug text-text-on-bone lg:text-2xl">
              Tudo começa por uma avaliação personalizada.
            </p>
            <div className="mt-6">
              <Cta href={buildWhatsAppLink()} external variant="solid" tone="on-bone">
                Falar com o ateliê
              </Cta>
            </div>
          </div>
        </div>
      </div>

      {/* Relacionados */}
      {relacionados.length > 0 && (
        <section aria-label="Leituras relacionadas" className="bg-ink py-20 lg:py-28">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
            <Kicker>Continue lendo · {post.tema}</Kicker>
            <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {relacionados.map((p) => (
                <Link key={p.slug} href={`/diario/${p.slug}`} className="group block">
                  <div className="relative aspect-[16/11] overflow-hidden bg-stone/10">
                    {p.cover && (
                      <Image
                        src={p.cover}
                        alt={p.coverAlt}
                        fill
                        sizes="(min-width:1024px) 340px, 45vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    )}
                  </div>
                  <h3 className="mt-4 font-display text-base font-light leading-snug text-text-on-ink transition-colors group-hover:text-brass">
                    {p.title}
                  </h3>
                  <p className="kicker mt-3 text-muted/80">{p.readingMin} min</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </article>
  );
}
