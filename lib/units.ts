/**
 * Unidades (ateliês). Usadas nos deep-links de WhatsApp e, futuramente, nas
 * páginas de localização (P2) com LocalBusiness JSON-LD por unidade.
 *
 * ⚠️ TODO:CONFIRMAR — número de WhatsApp por unidade (§12.7). Os valores de
 * `whatsapp` abaixo são PLACEHOLDERS rastreáveis; trocar pelo número real
 * (formato E.164 só com dígitos, ex.: 5511999999999) antes de publicar.
 */
export type Unit = {
  slug: string;
  city: string;
  /** rótulo curto exibido na UI */
  label: string;
  /** WhatsApp em formato internacional só-dígitos — PLACEHOLDER */
  whatsapp: string;
  whatsappPlaceholder: boolean;
};

export const UNITS: Unit[] = [
  { slug: "sao-paulo", city: "São Paulo", label: "São Paulo", whatsapp: "5511000000000", whatsappPlaceholder: true },
  { slug: "rio-de-janeiro", city: "Rio de Janeiro", label: "Rio de Janeiro", whatsapp: "5521000000000", whatsappPlaceholder: true },
  { slug: "brasilia", city: "Brasília", label: "Brasília", whatsapp: "5561000000000", whatsappPlaceholder: true },
  { slug: "manaus", city: "Manaus", label: "Manaus", whatsapp: "5592000000000", whatsappPlaceholder: true },
  { slug: "miami", city: "Miami", label: "Miami", whatsapp: "1000000000000", whatsappPlaceholder: true },
];

/** Unidade padrão para CTAs genéricos (sem contexto de unidade). */
export const DEFAULT_UNIT = UNITS[0];

export function getUnit(slug?: string): Unit {
  if (!slug) return DEFAULT_UNIT;
  return UNITS.find((u) => u.slug === slug) ?? DEFAULT_UNIT;
}
