/**
 * Serviços curados (§3). Sobrancelha é o serviço-herói e vem primeiro (🎯).
 * Usados na galeria S2 (scroll horizontal) e no índice /servicos por pilares.
 * Idioma PT consistente (corrige "FACE"/"Mackup" do site antigo, §6).
 *
 * `category` agrupa o índice em pilares (seções visíveis, NÃO acordeão) — ver
 * PILLARS abaixo e app/servicos/page.tsx. `image` aponta para slots nomeados
 * (components/ui/ImageSlot.tsx); sem foto → placeholder neutro elegante.
 */
export type ServiceCategory = "micropigmentacao" | "estetica" | "reparador";

export type Service = {
  slug: string;
  /** label exibido no card (§4 S2) */
  label: string;
  /** linha-essência curta, evocativa (camada boutique, §1) */
  essence: string;
  /** pilar do índice /servicos */
  category: ServiceCategory;
  hero?: boolean;
  /** nota de direção de arte para o fotógrafo/substituição (§6) */
  art: string;
  /** alt real e descritivo (§6 — nada de "Mackup") */
  alt: string;
};

/** Pilares do índice /servicos, na ordem de exibição. */
export const PILLARS: { id: ServiceCategory; label: string; intro: string }[] = [
  {
    id: "micropigmentacao",
    label: "Micropigmentação",
    intro: "A técnica autoral da casa: naturalidade que ninguém percebe ser feita.",
  },
  {
    id: "estetica",
    label: "Realce & Estética",
    intro: "Cuidados que fortalecem e realçam o que já é seu.",
  },
  {
    id: "reparador",
    label: "Reparador & Paramédico",
    intro: "A técnica a serviço de devolver mais do que estética, com discrição e cuidado.",
  },
];

export const SERVICES: Service[] = [
  // ——— Micropigmentação ———
  {
    slug: "sobrancelhas",
    label: "Sobrancelhas",
    essence: "A sobrancelha que ninguém percebe ser feita.",
    category: "micropigmentacao",
    hero: true,
    art: "IMG: retrato editorial em close do olhar, fio a fio natural, fundo escuro, pele real, grading quente · substituir",
    alt: "Detalhe de sobrancelha com micropigmentação fio a fio natural",
  },
  {
    slug: "labios",
    label: "Lábios",
    essence: "Cor que parece sua, não aplicada.",
    category: "micropigmentacao",
    art: "IMG: close de lábios com micropigmentação labial discreta, luz suave, fundo escuro · substituir",
    alt: "Detalhe de lábios com micropigmentação labial em tom natural",
  },
  {
    slug: "olhos",
    label: "Olhos",
    essence: "O traço que valoriza o olhar.",
    category: "micropigmentacao",
    art: "IMG: close do olho com delineado discreto, foco nos cílios, fundo escuro · substituir",
    alt: "Detalhe de olho com micropigmentação de delineado discreto",
  },
  {
    slug: "capilar",
    label: "Capilar",
    essence: "Densidade onde o tempo levou.",
    category: "micropigmentacao",
    art: "IMG: detalhe de couro cabeludo com micropigmentação capilar, textura real · substituir",
    alt: "Detalhe de micropigmentação capilar simulando densidade de fios",
  },
  {
    slug: "alopecia",
    label: "Alopécia",
    essence: "Reconstruir a moldura do rosto.",
    category: "micropigmentacao",
    art: "IMG: retrato sereno, foco na sobrancelha reconstruída, luz editorial · substituir",
    alt: "Retrato com reconstrução de sobrancelha para alopécia",
  },

  // ——— Realce & Estética ———
  {
    slug: "exobrow",
    label: "Exossomos: tratamento regenerativo",
    essence: "Volume e desenho em um gesto.",
    category: "estetica",
    art: "IMG: detalhe de sobrancelha, tratamento regenerativo com exossomos, fundo escuro · substituir",
    alt: "Detalhe de sobrancelha após tratamento regenerativo com exossomos",
  },
  {
    slug: "brow-lamination",
    label: "Brow Lamination",
    essence: "Os seus fios, no lugar certo.",
    category: "estetica",
    art: "IMG: close de sobrancelha laminada, fios alinhados, luz suave · foto real a entrar",
    alt: "Detalhe de sobrancelha com fios alinhados por brow lamination",
  },
  {
    slug: "lash-lifting",
    label: "Lash Lifting",
    essence: "Cílios seus, olhar mais aberto.",
    category: "estetica",
    art: "IMG: close do olho com cílios naturais curvados, olhar aberto · foto real a entrar",
    alt: "Detalhe do olhar com cílios naturais realçados por lash lifting",
  },
  {
    slug: "tintura-de-sobrancelhas",
    label: "Tintura de Sobrancelhas",
    essence: "Um realce de cor, sem parecer maquiagem.",
    category: "estetica",
    art: "IMG: close de sobrancelha com fios definidos e uniformes, luz editorial · foto real a entrar",
    alt: "Detalhe de sobrancelha com cor uniformizada por tintura",
  },
  {
    slug: "hidratacao-labial",
    label: "Hidratação Labial",
    essence: "O viço que devolve vida ao lábio.",
    category: "estetica",
    art: "IMG: close de lábios saudáveis e hidratados, viço natural, luz suave · foto real a entrar",
    alt: "Detalhe de lábios hidratados com aspecto viçoso e natural",
  },
  {
    slug: "limpeza-de-pele-glow",
    label: "Limpeza de Pele",
    essence: "Mais do que limpar: revelar a sua pele.",
    category: "estetica",
    art: "IMG: retrato de pele iluminada e uniforme, aspecto glow, luz editorial · foto real a entrar",
    alt: "Retrato com pele iluminada e uniforme após limpeza de pele glow",
  },
  {
    slug: "depilacao-facial-com-linha",
    label: "Depilação Facial",
    essence: "Contorno limpo, sem agredir a pele.",
    category: "estetica",
    art: "IMG: detalhe do contorno do rosto limpo e uniforme, luz suave · foto real a entrar",
    alt: "Detalhe do contorno do rosto após depilação facial com linha",
  },

  // ——— Reparador & Paramédico ———
  {
    slug: "paramedica",
    label: "Cicatriz de Lifting",
    essence: "A técnica a serviço da reconstrução.",
    category: "reparador",
    art: "IMG: mãos da profissional com materiais/pigmento, tom digno e cuidadoso, sem teor clínico-gráfico · substituir",
    alt: "Camuflagem de cicatriz de lifting com micropigmentação",
  },
  {
    slug: "reconstrucao-labial",
    label: "Reconstrução Labial",
    essence: "Devolver o contorno, com cuidado.",
    category: "reparador",
    art: "IMG: close de lábios em tom natural após reconstrução, luz suave · substituir",
    alt: "Detalhe de lábios após reconstrução labial",
  },
  {
    slug: "reconstrucao-de-areola",
    label: "Reconstrução de Aréola",
    essence: "Voltar a se reconhecer no espelho.",
    category: "reparador",
    art: "IMG: retrato digno e sereno, ou mãos/pigmentos · tom editorial, SEM teor clínico-gráfico em destaque (cuidado §6) · substituir",
    alt: "Reconstrução de aréola e mama pós-mastectomia — trabalho reparador da Lu Make Up",
  },
  {
    slug: "camuflagem-de-cicatrizes-e-estrias",
    label: "Camuflagem de Cicatrizes e Estrias",
    essence: "Deixar a marca mais leve.",
    category: "reparador",
    art: "IMG: pele em tom natural após camuflagem, luz suave e digna, sem teor clínico-gráfico · substituir",
    alt: "Camuflagem de cicatrizes e estrias com micropigmentação paramédica",
  },
  {
    slug: "camuflagem-de-manchas",
    label: "Camuflagem de Manchas",
    essence: "Uniformizar o tom, com discrição.",
    category: "reparador",
    art: "IMG: detalhe de pele uniforme, tom editorial e sereno · substituir",
    alt: "Camuflagem de manchas e alterações de pigmentação",
  },
  {
    slug: "despigmentacao-a-laser",
    label: "Despigmentação a Laser",
    essence: "Espaço para um novo desenho.",
    category: "reparador",
    art: "IMG: detalhe sóbrio da técnica/equipamento em tom editorial, sem teor clínico-gráfico · substituir",
    alt: "Despigmentação a laser de micropigmentação e pigmentações indesejadas",
  },
];

export const HERO_SERVICE = SERVICES.find((s) => s.hero) ?? SERVICES[0];
