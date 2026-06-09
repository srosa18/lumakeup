import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * Sitemap base (§8). Por ora só rotas existentes (home). Conforme as fatias
 * P1–P2 adicionarem páginas reais (serviços, instituto, localizações, diário),
 * incluí-las aqui.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
