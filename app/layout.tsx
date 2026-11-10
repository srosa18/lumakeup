import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { TopBar } from "@/components/layout/TopBar";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/site";

/* Tipografia — Mundial via Adobe Fonts (Web Project / Typekit, kit isf1jpj),
   licenciada pela assinatura Adobe do cliente. font-family: "mundial".
   Carregada pelo <link> no <head>. Fonte ÚNICA do site (display + corpo). */

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Lu Make Up · Micropigmentação | Desde 2002",
    template: "%s | Lu Make Up",
  },
  description: SITE.description,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: SITE.name,
    title: "Lu Make Up · Micropigmentação",
    description: SITE.description,
    // ⚠️ TODO:CONFIRMAR imagem-capa OG definitiva.
    images: [{ url: "/images/hero.png", width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lu Make Up · Micropigmentação",
    description: SITE.description,
  },
  alternates: { canonical: "/" },
};

// JSON-LD base (§8) — MedicalBusiness + BeautySalon. Schema completo
// (FAQPage/Person/LocalBusiness por unidade) entra na P3.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "BeautySalon"],
  name: SITE.name,
  description: SITE.boilerplate,
  url: SITE.url,
  foundingDate: String(SITE.foundedYear),
  founder: { "@type": "Person", name: SITE.founder },
  sameAs: [SITE.social.instagram],
  areaServed: ["São Paulo", "Rio de Janeiro", "Brasília", "Manaus", "Miami"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        {/* Adobe Fonts (Typekit). React 19 eleva esses <link> para o <head>
            automaticamente — sem <head> manual, que quebra a hidratação no App Router. */}
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.typekit.net/isf1jpj.css" precedence="default" />
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo
        </a>
        <TopBar />
        <main id="conteudo">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* QA widget (SR Studio) — comentários de revisão por seção.
            Banco único multi-cliente (data-multi=1), projeto "lumakeup".
            Preencher data-hide-on com o domínio final quando o site publicar. */}
        <Script
          src="https://srosa18.github.io/qa-widget/qa.js"
          strategy="afterInteractive"
          data-supabase-url="https://kddvtnuhdlsxohhpvqjv.supabase.co"
          data-supabase-key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkZHZ0bnVoZGxzeG9oaHB2cWp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI0MTA5OTQsImV4cCI6MjA5Nzk4Njk5NH0.mF-F6akejAvjwsGS9QPclzgoowFLpt_IQ99kZe0J2kY"
          data-project="lumakeup"
          data-multi="1"
          data-hide-on=""
        />
      </body>
    </html>
  );
}
