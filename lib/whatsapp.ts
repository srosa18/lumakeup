import { DEFAULT_UNIT, getUnit, type Unit } from "./units";

/**
 * Deep-link de WhatsApp com mensagem contextual (§6) — serviço + unidade.
 * Caminho único de conversão do site (§7). O número vem de units.ts
 * (⚠️ PLACEHOLDER até confirmação — ver units.ts).
 *
 * Entregável separado pendente: planilha de links por serviço × unidade (§6).
 */
export function buildWhatsAppLink(opts?: {
  /** nome do serviço para a mensagem pré-preenchida */
  service?: string;
  /** slug da unidade (ver units.ts); usa a unidade padrão se omitido */
  unitSlug?: string;
}): string {
  const unit: Unit = getUnit(opts?.unitSlug);
  const service = opts?.service?.trim();

  const text = service
    ? `Olá, vim pelo site. Tenho interesse em ${service} na unidade ${unit.label}.`
    : `Olá, vim pelo site. Gostaria de agendar uma avaliação na unidade ${unit.label}.`;

  const params = new URLSearchParams({ phone: unit.whatsapp, text });
  return `https://api.whatsapp.com/send?${params.toString()}`;
}

/** Link padrão (CTA persistente da top bar, sem contexto de serviço). */
export const DEFAULT_WHATSAPP = buildWhatsAppLink({ unitSlug: DEFAULT_UNIT.slug });
