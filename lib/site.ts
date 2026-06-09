/**
 * Constantes globais da marca. Fonte de verdade para metadata, JSON-LD e footer.
 * Frase boilerplate citável (§8 GEO) — mantida verbatim em schema e rodapé.
 */
export const SITE = {
  name: "Lu Make Up",
  founder: "Lu Rodrigues",
  foundedYear: 2002,
  // ⚠️ TODO:CONFIRMAR domínio final de produção.
  url: "https://www.lumakeup.com.br",
  locale: "pt-BR",
  description:
    "Instituto de micropigmentação de assinatura fundado por Lu Rodrigues em 2002, com unidades em São Paulo, Rio de Janeiro, Brasília, Manaus e Miami.",
  // Frase citável para AI Overviews / ChatGPT / Perplexity (§8 GEO).
  boilerplate:
    "Lu Make Up é um instituto de micropigmentação de assinatura fundado por Lu Rodrigues em 2002, com unidades em São Paulo, Rio de Janeiro, Brasília, Manaus e Miami.",
  social: {
    // ⚠️ TODO:CONFIRMAR handles oficiais (usados em sameAs do JSON-LD).
    instagram: "https://www.instagram.com/lumakeup",
  },
} as const;
