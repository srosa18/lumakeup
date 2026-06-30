/**
 * Conteúdo das páginas de Serviço (Template A do brief §5). Um registro por slug
 * de lib/services.ts. Quiet luxury (§1/§6): copy enxuta, sem preço, CTAs por convite.
 *
 * Ritual e Diferenciais têm DEFAULTS de marca (compartilhados); cada serviço pode
 * sobrepor. Essência/arte/FAQ são por serviço. `images` aponta p/ slots reais; se
 * ausente, a página renderiza placeholder nomeado (foto a entrar por serviço).
 *
 * 🎯 SOBRANCELHAS = molde aprovado (copy + fotos reais). Os demais são RASCUNHO
 *    (refinar com a Lu, como foi a sobrancelha); fatos clínicos = TODO:CONFIRMAR.
 */
export type RitualStep = { n: string; title: string; body: string };
export type Diferencial = { title: string; body: string };
export type QA = { q: string; a: string };

export type ServiceImages = {
  hero?: string;
  band?: string;
  bandPos?: string;
  diferenciais?: string;
  diferenciaisPos?: string;
  results?: string[];
  cta?: string;
  ctaPos?: string;
};

export type ServiceContent = {
  /** <title> SEO (§8) */
  title: string;
  description: string;
  /** <h1> SEO (§8) */
  h1: string;
  /** quebra do h1 em 2 linhas (opcional) */
  h1Break?: [string, string];
  essence: string;
  arte: { heading: string; body: string };
  ritual?: RitualStep[];
  /** Título da seção Diferenciais (varia por serviço; fallback no default). */
  diferenciaisHeading?: string;
  diferenciais?: Diferencial[];
  proof?: { quote: string; author: string };
  faq: QA[];
  ctaHeading: string;
  images?: ServiceImages;
};

export const DEFAULT_RITUAL: RitualStep[] = [
  { n: "01", title: "Estudo", body: "Estudamos o seu rosto, a sua rotina e o que você deseja — para um desenho que pertence a você." },
  { n: "02", title: "Colorimetria", body: "A cor nasce da sua pele e do seu tom natural. Discreta, nunca artificial." },
  { n: "03", title: "Execução", body: "Em ambiente de biossegurança hospitalar, com material descartável." },
  { n: "04", title: "Retorno", body: "Um retoque de acabamento assegura uniformidade e durabilidade ao resultado." },
];

export const DEFAULT_DIFERENCIAIS: Diferencial[] = [
  { title: "Biossegurança hospitalar", body: "Salas privativas e material 100% descartável. O cuidado que não se vê é o que mais importa." },
  { title: "Pigmentos livres de metais pesados", body: "Desenvolvidos pela própria Lu Rodrigues — pensados para a sua pele e para um envelhecer bonito da cor." },
  { title: "Técnica autoral", body: "Mais de vinte anos refinando uma única obsessão: realçar sem revelar a técnica." },
];

// FAQ de marca (§6) — base reutilizável.
const FAQ_AGENDAMENTO: QA = {
  q: "Como funciona o agendamento?",
  a: "Atendimento por agendamento, com avaliação personalizada antes de qualquer procedimento. Fale com o ateliê pelo WhatsApp.",
};
const FAQ_INVESTIMENTO: QA = {
  q: "Por que a Lu Make Up é um investimento?",
  a: "Porque não há atalhos. Pigmentos desenvolvidos pela própria Lu Rodrigues, livres de metais pesados. Biossegurança hospitalar, salas privativas, material descartável. Técnica autoral refinada por mais de vinte anos. O resultado dura — e respeita o seu rosto.",
};
const FAQ_PRIMEIRA: QA = {
  q: "É a minha primeira vez. O que preciso saber?",
  a: "Tudo começa por uma avaliação. Traga referências do que gosta; nós desenhamos a partir do seu traço.",
};

const DEFAULT_PROOF = {
  quote: "Ninguém percebe que é feito. Percebem que eu pareço descansada.",
  author: "Cliente desde 2015",
};

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  // 🎯 MOLDE APROVADO — copy + fotos reais.
  sobrancelhas: {
    title: "Micropigmentação de Sobrancelhas em São Paulo",
    description:
      "Micropigmentação de sobrancelhas fio a fio, natural e personalizada. Visagismo, colorimetria e técnica autoral da Lu Make Up — atendimento por avaliação.",
    h1: "Micropigmentação de Sobrancelhas",
    h1Break: ["Micropigmentação", "de Sobrancelhas"],
    essence: "A sobrancelha que ninguém percebe ser feita.",
    diferenciaisHeading: "O que sustenta um traço natural",
    diferenciais: [
      { title: "Visagismo antes do traço", body: "Lemos proporção, simetria e expressão antes de desenhar. A sobrancelha nasce do seu rosto — não de um molde." },
      { title: "Cor que envelhece bonito", body: "Pigmentos desenvolvidos pela própria Lu Rodrigues, livres de metais pesados — colorimetria pensada para a sua pele." },
      { title: "Fio a fio que não se anuncia", body: "Mais de vinte anos refinando uma única obsessão: realçar sem revelar a técnica." },
    ],
    arte: {
      heading: "A arte da naturalidade\npara a sua sobrancelha",
      body: "Há mais de vinte anos refinamos uma única obsessão: realçar sem revelar a técnica. Cada sobrancelha começa por um estudo do seu rosto — proporção, expressão, a forma como você sorri — e por uma cor escolhida para conversar com a sua pele. O traço fio a fio se integra aos seus pelos, corrigindo falhas e assimetrias com uma naturalidade que não se anuncia.",
    },
    ritual: [
      { n: "01", title: "Visagismo", body: "Lemos o seu rosto — proporção, simetria, expressão — para desenhar a sobrancelha que pertence a você." },
      { n: "02", title: "Colorimetria", body: "A cor nasce da sua pele e do seu tom de pelo. Natural, nunca artificial." },
      { n: "03", title: "Execução", body: "O traço fio a fio, em ambiente de biossegurança hospitalar, com material descartável." },
      { n: "04", title: "Retorno", body: "Um retoque de acabamento assegura uniformidade e durabilidade ao resultado." },
    ],
    proof: { quote: "Ninguém percebe que é feito. Percebem que eu pareço descansada.", author: "Cliente desde 2015 · Sobrancelha" },
    faq: [
      { q: "Quanto dura a micropigmentação de sobrancelhas?", a: "A durabilidade varia conforme a sua pele, a sua rotina e os cuidados pós-procedimento. Na avaliação explicamos a previsão para o seu caso. (TODO:CONFIRMAR faixa em meses.)" },
      { q: "Dói?", a: "O conforto é parte do protocolo: trabalhamos com anestésico tópico e uma técnica delicada. A maioria das clientes relata um desconforto mínimo. (TODO:CONFIRMAR detalhes do protocolo.)" },
      { q: "Qual a diferença entre fio a fio e efeito sombreado?", a: "O fio a fio recria pelos individuais para um resultado realista; o sombreado preenche com um esfumado suave, como uma maquiagem leve. Na avaliação indicamos o que valoriza o seu olhar — ou a combinação dos dois." },
      { q: "Como me preparo para o procedimento?", a: "Venha com o rosto limpo, sem maquiagem, e com uma ideia do que deseja." },
      FAQ_AGENDAMENTO,
    ],
    ctaHeading: "O seu olhar merece um estudo",
    images: {
      hero: "/images/servicos/sobrancelhas/hero.webp",
      band: "/images/servicos/sobrancelhas/band.webp",
      bandPos: "center 45%",
      diferenciais: "/images/servicos/sobrancelhas/diferenciais.webp",
      diferenciaisPos: "center 25%",
      results: [
        "/images/servicos/sobrancelhas/result-1.webp",
        "/images/servicos/sobrancelhas/result-2.webp",
        "/images/servicos/sobrancelhas/result-3.webp",
      ],
      cta: "/images/servicos/sobrancelhas/cta.webp",
      ctaPos: "center 25%",
    },
  },

  // — RASCUNHOS (refinar com a Lu; sem fotos próprias ainda → placeholders) —
  labios: {
    title: "Micropigmentação Labial em São Paulo",
    description:
      "Micropigmentação labial em tom natural — cor que parece sua. Técnica autoral da Lu Make Up, pigmentos livres de metais pesados, atendimento por avaliação.",
    h1: "Micropigmentação Labial",
    essence: "Cor que parece sua, não aplicada.",
    diferenciaisHeading: "O que faz a cor parecer sua",
    diferenciais: [
      { title: "Colorimetria a partir do seu subtom", body: "A cor nasce da sua pele, com pigmentos próprios livres de metais pesados. Viva ao acordar, nunca artificial." },
      { title: "Contorno que respeita a sua boca", body: "Técnica autoral que devolve definição sem pesar — a leveza de quem nunca quis parecer maquiada." },
      { title: "Biossegurança hospitalar", body: "Salas privativas e material 100% descartável. O cuidado que não se vê é o que mais importa." },
    ],
    arte: {
      heading: "Cor que nasce de você",
      body: "A micropigmentação labial devolve contorno e cor à boca com a leveza de quem nunca quis parecer maquiada. Estudamos o seu subtom de pele para escolher uma cor que parece sua — viva ao acordar, discreta o suficiente para ser só você, um pouco melhor.",
    },
    faq: [
      { q: "A cor fica muito forte?", a: "Não. Trabalhamos a partir do seu subtom natural, para um resultado de cor que parece sua. Na avaliação você escolhe a intensidade. (TODO:CONFIRMAR nuances de técnica.)" },
      { q: "Descasca depois?", a: "Há uma fase natural de cicatrização nos primeiros dias, com a cor assentando aos poucos. Orientamos todos os cuidados. (TODO:CONFIRMAR pós-procedimento.)" },
      FAQ_PRIMEIRA,
      FAQ_AGENDAMENTO,
    ],
    ctaHeading: "Uma cor pensada para você",
    images: {
      hero: "/images/servicos/labios/hero.webp",
      band: "/images/servicos/labios/band.webp",
      bandPos: "center 45%",
      diferenciais: "/images/servicos/labios/diferenciais.webp",
      diferenciaisPos: "center 45%",
      results: [
        "/images/servicos/labios/result-1.webp",
        "/images/servicos/labios/result-2.webp",
        "/images/servicos/labios/result-3.webp",
      ],
      cta: "/images/servicos/labios/cta.webp",
      ctaPos: "center 25%",
    },
  },
  olhos: {
    title: "Micropigmentação dos Olhos (Delineado) em São Paulo",
    description:
      "Micropigmentação dos olhos e delineado discreto que valoriza o olhar. Técnica autoral da Lu Make Up, por avaliação personalizada.",
    h1: "Micropigmentação dos Olhos",
    essence: "O traço que valoriza o olhar.",
    diferenciaisHeading: "O que abre o olhar sem endurecer",
    diferenciais: [
      { title: "Desenho a partir da sua anatomia", body: "O traço certo, na espessura certa, pensado para o formato do seu olho — presença sem peso." },
      { title: "Delicadeza na região mais sensível", body: "Biossegurança hospitalar e material descartável onde o cuidado importa ainda mais." },
      { title: "Pigmentos próprios, livres de metais pesados", body: "Desenvolvidos pela Lu Rodrigues para um envelhecer bonito da cor." },
    ],
    arte: {
      heading: "O olhar em destaque,\nsem esforço",
      body: "Um delineado pensado para a sua anatomia: o traço certo, na espessura certa, que abre o olhar e dá presença aos cílios — sem nunca pesar. O luxo de acordar com o olhar pronto.",
    },
    faq: [
      { q: "O delineado fica natural?", a: "Sim. Desenhamos a partir do formato do seu olho, com a espessura que valoriza sem endurecer a expressão. (TODO:CONFIRMAR técnicas disponíveis.)" },
      FAQ_PRIMEIRA,
      FAQ_AGENDAMENTO,
    ],
    ctaHeading: "Valorize o seu olhar",
    images: {
      hero: "/images/servicos/olhos/hero.webp",
      band: "/images/servicos/olhos/band.webp",
      bandPos: "center 30%",
      diferenciais: "/images/servicos/olhos/diferenciais.webp",
      diferenciaisPos: "center 30%",
      results: [
        "/images/servicos/olhos/result-1.webp",
        "/images/servicos/olhos/result-2.webp",
        "/images/servicos/olhos/result-3.webp",
      ],
      cta: "/images/servicos/olhos/cta.webp",
      ctaPos: "center 25%",
    },
  },
  capilar: {
    title: "Micropigmentação Capilar em São Paulo",
    description:
      "Micropigmentação capilar para simular densidade e disfarçar a rarefação. Técnica autoral da Lu Make Up, resultado natural — por avaliação.",
    h1: "Micropigmentação Capilar",
    essence: "Densidade onde o tempo levou.",
    diferenciaisHeading: "O que cria densidade que convence",
    diferenciais: [
      { title: "Pontilhismo de precisão", body: "Recriamos a impressão de fios ponto a ponto — densidade que parece sempre ter existido." },
      { title: "Cor fiel ao seu cabelo", body: "Colorimetria com pigmentos próprios, livres de metais pesados, para um resultado discreto e definido." },
      { title: "Biossegurança hospitalar", body: "Salas privativas e material 100% descartável." },
    ],
    arte: {
      heading: "Densidade que parece\nter sempre existido",
      body: "Recriamos visualmente a densidade do couro cabeludo com uma técnica de pontilhismo precisa, devolvendo a impressão de fios onde a rarefação aparece. Discreto, definido — confiança que volta sem alarde.",
    },
    faq: [
      { q: "Para quem é indicada?", a: "Para quem busca disfarçar rarefação, falhas ou cicatrizes no couro cabeludo. Na avaliação verificamos a indicação para o seu caso. (TODO:CONFIRMAR indicações.)" },
      FAQ_INVESTIMENTO,
      FAQ_AGENDAMENTO,
    ],
    ctaHeading: "Densidade, com naturalidade",
    images: {
      hero: "/images/servicos/capilar/hero.webp",
      band: "/images/servicos/capilar/band.webp",
      bandPos: "center 45%",
      diferenciais: "/images/servicos/capilar/diferenciais.webp",
      diferenciaisPos: "center 25%",
      cta: "/images/servicos/capilar/cta.webp",
      ctaPos: "center 25%",
    },
  },
  alopecia: {
    title: "Micropigmentação para Alopécia em São Paulo",
    description:
      "Micropigmentação para alopécia — reconstrução da moldura do rosto com naturalidade e cuidado. Técnica autoral da Lu Make Up, por avaliação.",
    h1: "Micropigmentação para Alopécia",
    essence: "Reconstruir a moldura do rosto.",
    diferenciaisHeading: "O que devolve a moldura do rosto",
    diferenciais: [
      { title: "Sensibilidade caso a caso", body: "Cada alopécia é única. Avaliamos e desenhamos com o tempo e o cuidado que a sua história pede." },
      { title: "Técnica autoral", body: "Mais de vinte anos reconstruindo molduras com naturalidade — para você se reconhecer no espelho." },
      { title: "Pigmentos próprios e biossegurança hospitalar", body: "Livres de metais pesados, em salas privativas e com material 100% descartável." },
    ],
    arte: {
      heading: "Reconstruir a moldura\ndo seu rosto",
      body: "Para quem convive com a alopécia, a sobrancelha e o contorno do olhar fazem toda a diferença. Reconstruímos a moldura do rosto com sensibilidade e técnica — devolvendo naturalidade e a sensação de se reconhecer no espelho.",
    },
    proof: DEFAULT_PROOF,
    faq: [
      { q: "Serve para alopécia total?", a: "Avaliamos cada caso individualmente para indicar a melhor abordagem. (TODO:CONFIRMAR indicações e limites.)" },
      FAQ_PRIMEIRA,
      FAQ_AGENDAMENTO,
    ],
    ctaHeading: "Reconhecer-se no espelho",
    images: {
      hero: "/images/servicos/alopecia/hero.webp",
      band: "/images/servicos/alopecia/band.webp",
      bandPos: "center 45%",
      diferenciais: "/images/servicos/alopecia/diferenciais.webp",
      diferenciaisPos: "center 25%",
      cta: "/images/servicos/alopecia/cta.webp",
      ctaPos: "center 25%",
    },
  },
  exobrow: {
    title: "Exobrow — Regeneração de Sobrancelhas | Lu Make Up",
    description:
      "Exobrow: tratamento exclusivo da Lu Make Up para a saúde e o volume das sobrancelhas. Por avaliação personalizada.",
    h1: "Exobrow",
    essence: "Volume e desenho em um gesto.",
    diferenciaisHeading: "O que age na raiz, não no disfarce",
    diferenciais: [
      { title: "Tratamento exclusivo da Lu Make Up", body: "Um protocolo autoral voltado à vitalidade do fio. (TODO:CONFIRMAR descrição do protocolo.)" },
      { title: "Cuidado, não só estética", body: "O foco é a saúde da sobrancelha — densidade que volta com naturalidade." },
      { title: "Biossegurança hospitalar", body: "Salas privativas e material 100% descartável." },
    ],
    arte: {
      heading: "Mais do que desenhar:\nreativar",
      body: "Por muito tempo, sobrancelhas falhadas eram apenas disfarçadas. O Exobrow, tratamento exclusivo da Lu Make Up, age na raiz do problema — a saúde do folículo — para devolver vitalidade e densidade natural aos fios. (TODO:CONFIRMAR descrição técnica e ativos.)",
    },
    faq: [
      { q: "Como o Exobrow funciona?", a: "É um tratamento voltado à saúde do folículo e à regeneração dos fios. Na avaliação explicamos o protocolo indicado para você. (TODO:CONFIRMAR mecanismo e número de sessões.)" },
      FAQ_AGENDAMENTO,
    ],
    ctaHeading: "Sobrancelhas com vida",
    images: {
      hero: "/images/servicos/exobrow/hero.webp",
      band: "/images/servicos/exobrow/band.webp",
      bandPos: "center 45%",
      diferenciais: "/images/servicos/exobrow/diferenciais.webp",
      diferenciaisPos: "center 25%",
      results: [
        "/images/servicos/exobrow/result-1.webp",
        "/images/servicos/exobrow/result-2.webp",
        "/images/servicos/exobrow/result-3.webp",
      ],
      cta: "/images/servicos/exobrow/cta.webp",
      ctaPos: "center 25%",
    },
  },
  paramedica: {
    title: "Micropigmentação Paramédica em São Paulo | Lu Make Up",
    description:
      "Micropigmentação paramédica — a técnica a serviço da reconstrução. Trabalho reparador da Lu Make Up, conduzido com cuidado e dignidade. Por avaliação.",
    h1: "Micropigmentação Paramédica",
    essence: "A técnica a serviço da reconstrução.",
    diferenciaisHeading: "O que reconstrói com dignidade",
    diferenciais: [
      { title: "Discrição e acolhimento", body: "Conduzimos cada atendimento com respeito pela sua história e pelo seu tempo." },
      { title: "Técnica a serviço da reparação", body: "Mais de vinte anos a serviço de devolver inteireza — não apenas estética." },
      { title: "Biossegurança hospitalar", body: "Salas privativas e material 100% descartável." },
    ],
    arte: {
      heading: "Quando a técnica\nreconstrói",
      body: "Há trabalhos que vão além da estética: a camuflagem de cicatrizes, a reconstrução de detalhes que devolvem a uma pessoa a sensação de inteireza. Conduzimos cada atendimento com discrição, cuidado e respeito pela sua história.",
    },
    faq: [
      { q: "Preciso de encaminhamento médico?", a: "Em alguns casos sim. Avaliamos cada situação individualmente, sempre com cuidado e segurança. (TODO:CONFIRMAR fluxo e encaminhamentos.)" },
      FAQ_AGENDAMENTO,
    ],
    ctaHeading: "Um cuidado que reconstrói",
    images: {
      hero: "/images/servicos/paramedica/hero.webp",
      band: "/images/servicos/paramedica/band.webp",
      bandPos: "center 35%",
      diferenciais: "/images/servicos/paramedica/diferenciais.webp",
      diferenciaisPos: "center 30%",
      cta: "/images/servicos/paramedica/cta.webp",
      ctaPos: "center 25%",
    },
  },
  "reconstrucao-labial": {
    title: "Reconstrução Labial em São Paulo | Lu Make Up",
    description:
      "Reconstrução labial — devolver o contorno e a cor aos lábios, com cuidado. Trabalho reparador da Lu Make Up, por avaliação personalizada.",
    h1: "Reconstrução Labial",
    essence: "Devolver o contorno, com cuidado.",
    diferenciaisHeading: "O que devolve definição com cuidado",
    diferenciais: [
      { title: "Olhar reparador", body: "Para cicatrizes, assimetrias e perda de contorno — avaliamos cada caso individualmente." },
      { title: "Colorimetria personalizada", body: "Cor e contorno desenhados com pigmentos próprios, livres de metais pesados." },
      { title: "Biossegurança hospitalar", body: "Salas privativas e material 100% descartável." },
    ],
    arte: {
      heading: "Devolver o contorno,\ncom cuidado",
      body: "Para lábios que perderam definição por cicatrizes ou outras condições, a reconstrução labial devolve contorno e cor com naturalidade e sensibilidade — um gesto técnico a serviço da autoestima.",
    },
    proof: DEFAULT_PROOF,
    faq: [
      { q: "Para quais casos é indicada?", a: "Cicatrizes, assimetrias e perda de definição do contorno labial, entre outros. Avaliamos cada caso individualmente. (TODO:CONFIRMAR indicações.)" },
      FAQ_AGENDAMENTO,
    ],
    ctaHeading: "Devolver a definição",
    images: {
      hero: "/images/servicos/reconstrucao-labial/hero.webp",
      band: "/images/servicos/reconstrucao-labial/band.webp",
      bandPos: "center 55%",
      diferenciais: "/images/servicos/reconstrucao-labial/diferenciais.webp",
      diferenciaisPos: "center 25%",
      cta: "/images/servicos/reconstrucao-labial/cta.webp",
      ctaPos: "center 25%",
    },
  },
};

export function getServiceContent(slug: string): ServiceContent | undefined {
  return SERVICE_CONTENT[slug];
}
