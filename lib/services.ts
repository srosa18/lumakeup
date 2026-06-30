/**
 * Serviços curados (§3). Sobrancelha é o serviço-herói e vem primeiro (🎯).
 * Usados na galeria S2 (scroll horizontal) e nos deep-links contextuais.
 * Idioma PT consistente (corrige "FACE"/"Mackup" do site antigo, §6).
 *
 * `image` aponta para slots nomeados — ver components/ui/ImageSlot.tsx.
 * As imagens finais ainda não existem (§4/§6); cada slot carrega nota de
 * direção de arte e placeholder neutro elegante (nunca stock).
 */
export type Service = {
  slug: string;
  /** label caixa-alta exibido no card (§4 S2) */
  label: string;
  /** linha-essência curta, evocativa (camada boutique, §1) */
  essence: string;
  hero?: boolean;
  /** nota de direção de arte para o fotógrafo/substituição (§6) */
  art: string;
  /** alt real e descritivo (§6 — nada de "Mackup") */
  alt: string;
};

export const SERVICES: Service[] = [
  {
    slug: "sobrancelhas",
    label: "Sobrancelhas",
    essence: "A sobrancelha que ninguém percebe ser feita.",
    hero: true,
    art: "IMG: retrato editorial em close do olhar, fio a fio natural, fundo escuro, pele real, grading quente — substituir",
    alt: "Detalhe de sobrancelha com micropigmentação fio a fio natural",
  },
  {
    slug: "labios",
    label: "Lábios",
    essence: "Cor que parece sua, não aplicada.",
    art: "IMG: close de lábios com micropigmentação labial discreta, luz suave, fundo escuro — substituir",
    alt: "Detalhe de lábios com micropigmentação labial em tom natural",
  },
  {
    slug: "olhos",
    label: "Olhos",
    essence: "O traço que valoriza o olhar.",
    art: "IMG: close do olho com delineado discreto, foco nos cílios, fundo escuro — substituir",
    alt: "Detalhe de olho com micropigmentação de delineado discreto",
  },
  {
    slug: "capilar",
    label: "Capilar",
    essence: "Densidade onde o tempo levou.",
    art: "IMG: detalhe de couro cabeludo com micropigmentação capilar, textura real — substituir",
    alt: "Detalhe de micropigmentação capilar simulando densidade de fios",
  },
  {
    slug: "alopecia",
    label: "Alopécia",
    essence: "Reconstruir a moldura do rosto.",
    art: "IMG: retrato sereno, foco na sobrancelha reconstruída, luz editorial — substituir",
    alt: "Retrato com reconstrução de sobrancelha para alopécia",
  },
  {
    slug: "exobrow",
    label: "Exobrow",
    essence: "Volume e desenho em um gesto.",
    art: "IMG: detalhe de sobrancelha com técnica Exobrow, fundo escuro — substituir",
    alt: "Detalhe de sobrancelha com técnica Exobrow",
  },
  {
    slug: "paramedica",
    label: "Micropigmentação Paramédica",
    essence: "A técnica a serviço da reconstrução.",
    art: "IMG: mãos da profissional com materiais/pigmento, tom digno e cuidadoso, sem teor clínico-gráfico — substituir",
    alt: "Materiais e pigmentos da micropigmentação paramédica",
  },
  {
    slug: "reconstrucao-labial",
    label: "Reconstrução Labial",
    essence: "Devolver o contorno, com cuidado.",
    art: "IMG: close de lábios em tom natural após reconstrução, luz suave — substituir",
    alt: "Detalhe de lábios após reconstrução labial",
  },
  {
    slug: "reconstrucao-de-areola",
    label: "Reconstrução de Aréola",
    essence: "Devolver a sensação de inteireza.",
    art: "IMG: retrato digno e sereno, ou mãos/pigmentos — tom editorial, SEM teor clínico-gráfico em destaque (cuidado §6) — substituir",
    alt: "Reconstrução de aréola e mama pós-mastectomia — trabalho reparador da Lu Make Up",
  },
];

export const HERO_SERVICE = SERVICES.find((s) => s.hero) ?? SERVICES[0];
