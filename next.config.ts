import type { NextConfig } from "next";
import diario from "./lib/diario-posts.json";

/**
 * Redirects 301 (§8) — preserva o SEO do site atual (WordPress) ao migrar:
 * URLs antigas de serviço/páginas e os posts do blog apontam para as novas
 * rotas. Slugs dos posts são idênticos, mudou só o prefixo (/… → /diario/…).
 */
const PAGE_REDIRECTS: [string, string][] = [
  ["/micropigmentacao-das-sobrancelhas", "/servicos/sobrancelhas"],
  ["/micropigmentacao-labial", "/servicos/labios"],
  ["/micropigmentacao-de-olhos", "/servicos/olhos"],
  ["/micropigmentacao-capilar", "/servicos/capilar"],
  ["/micropigmentacao-de-alopecia", "/servicos/alopecia"],
  ["/exobrow-tratamento-regenerativo", "/servicos/exobrow"],
  ["/micropigmentacao-de-cicatrizes", "/servicos/paramedica"],
  ["/reconstrucao-de-labios", "/servicos/reconstrucao-labial"],
  ["/micropigmentacao-de-areola", "/servicos/reconstrucao-de-areola"],
  ["/sobre", "/a-casa"],
  ["/profissionais", "/a-casa"],
  ["/blog", "/diario"],
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    const pages = PAGE_REDIRECTS.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
    const posts = (diario as { slug: string }[]).map((p) => ({
      source: `/${p.slug}`,
      destination: `/diario/${p.slug}`,
      permanent: true,
    }));
    return [...pages, ...posts];
  },
};

export default nextConfig;
