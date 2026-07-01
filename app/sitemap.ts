import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { DIARIO } from "@/lib/diario";
import { UNITS } from "@/lib/units";

/**
 * Sitemap (§8). Home + serviços + A Casa + Diário (índice + posts) + políticas.
 * Conforme P2 avançar (instituto, lu-medical, localizações, contato), incluir aqui.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/servicos`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...SERVICES.map((s) => ({
      url: `${SITE.url}/servicos/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: s.hero ? 0.9 : 0.8,
    })),
    { url: `${SITE.url}/a-casa`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE.url}/lu-medical`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/instituto-living-sculpture`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/diario`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    ...DIARIO.map((p) => ({
      url: `${SITE.url}/diario/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    { url: `${SITE.url}/localizacoes`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    ...UNITS.map((u) => ({
      url: `${SITE.url}/localizacoes/${u.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    { url: `${SITE.url}/contato`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE.url}/politica-de-privacidade`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
