/**
 * Conteúdo das páginas de Serviço (Template A do brief §5). Um registro por slug
 * de lib/services.ts. Quiet luxury (§1/§6): copy enxuta, sem preço, CTAs por convite.
 *
 * Ritual e Diferenciais têm DEFAULTS de marca (compartilhados); cada serviço pode
 * sobrepor. Essência/arte/FAQ são por serviço. `images` aponta p/ slots reais; se
 * ausente, a página renderiza placeholder nomeado (foto a entrar por serviço).
 *
 * Fatos dos serviços (durabilidade, sessões, indicações, pós-cuidados) migrados
 * do site atual (lumakeup.com.br) para a camada de resposta (FAQ). Copy boutique
 * mantida enxuta. Claims fortes (ex.: "risco zero") foram suavizados; revisão
 * clínica final com a Lu recomendada antes de publicar.
 */
export type RitualStep = { n: string; title: string; body: string };
export type Diferencial = { title: string; body: string };
export type QA = { q: string; a: string };

export type ServiceImages = {
  hero?: string;
  /** object-position do hero full-bleed (padrão "center 22%"). */
  heroPos?: string;
  band?: string;
  bandPos?: string;
  /** faixa mais alta (revela mais da cena; útil p/ fotos que ficam "fechadas"). */
  bandTall?: boolean;
  diferenciais?: string;
  diferenciaisPos?: string;
  results?: string[];
  cta?: string;
  ctaPos?: string;
  /** imagem do card no índice /servicos (fallback: results[0] → hero). */
  card?: string;
  /** object-position do card (padrão "center"). */
  cardPos?: string;
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
  /** Alinhamento do bloco do CTA final (default "center"; "right" p/ sair de cima do rosto). */
  ctaAlign?: "center" | "right";
  images?: ServiceImages;
};

export const DEFAULT_RITUAL: RitualStep[] = [
  { n: "01", title: "Estudo", body: "Estudamos o seu rosto, a sua rotina e o que você deseja, para um desenho que pertence a você." },
  { n: "02", title: "Colorimetria", body: "A cor nasce da sua pele e do seu tom natural. Discreta, nunca artificial." },
  { n: "03", title: "Execução", body: "Em ambiente de biossegurança hospitalar, com material descartável." },
  { n: "04", title: "Retorno", body: "Um retoque de acabamento assegura uniformidade e durabilidade ao resultado." },
];

export const DEFAULT_DIFERENCIAIS: Diferencial[] = [
  { title: "Biossegurança hospitalar", body: "Salas privativas e material 100% descartável. O cuidado que não se vê é o que mais importa." },
  { title: "Pigmentos livres de metais pesados", body: "Desenvolvidos pela própria Lu Rodrigues, pensados para a sua pele e para um envelhecer bonito da cor." },
  { title: "Técnica autoral", body: "Mais de vinte anos refinando uma única obsessão: realçar sem revelar a técnica." },
];

// Ritual dos serviços de Realce & Estética (o default de micropigmentação fala em
// colorimetria/pigmento, que não cabe aqui). Passos neutros, aplicáveis a todos.
export const RITUAL_ESTETICA: RitualStep[] = [
  { n: "01", title: "Avaliação", body: "Entendemos o seu objetivo, a sua pele e a sua rotina antes de qualquer procedimento." },
  { n: "02", title: "Preparo", body: "Preparamos a área com o cuidado que o seu caso pede, no seu tempo." },
  { n: "03", title: "Procedimento", body: "Em ambiente de biossegurança, com material descartável e mãos treinadas na casa." },
  { n: "04", title: "Cuidado", body: "Orientações de pós-procedimento e o acompanhamento do seu resultado." },
];

// FAQ de marca (§6) — base reutilizável.
const FAQ_AGENDAMENTO: QA = {
  q: "Como funciona o agendamento?",
  a: "Atendimento por agendamento, com avaliação personalizada antes de qualquer procedimento. Chame a clínica no WhatsApp e agende a sua avaliação, sem compromisso.",
};
const FAQ_INVESTIMENTO: QA = {
  q: "Por que a Lu Make Up é um investimento?",
  a: "Porque não há atalhos. Pigmentos desenvolvidos pela própria Lu Rodrigues, livres de metais pesados. Biossegurança hospitalar, salas privativas, material descartável. Técnica autoral refinada por mais de vinte anos. O resultado dura. E respeita o seu rosto.",
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
      "Micropigmentação de sobrancelhas fio a fio, natural e personalizada. Visagismo, colorimetria e técnica autoral da Lu Make Up. Atendimento por avaliação.",
    h1: "Micropigmentação de Sobrancelhas",
    h1Break: ["Micropigmentação", "de Sobrancelhas"],
    essence: "A sobrancelha que ninguém percebe ser feita.",
    diferenciaisHeading: "O que sustenta um traço natural",
    diferenciais: [
      { title: "Visagismo antes do traço", body: "Lemos proporção, simetria e expressão antes de desenhar. A sobrancelha nasce do seu rosto, não de um molde." },
      { title: "Cor que envelhece bonito", body: "Pigmentos desenvolvidos pela própria Lu Rodrigues, livres de metais pesados, com colorimetria pensada para a sua pele." },
      { title: "Fio a fio que não se anuncia", body: "Mais de vinte anos refinando uma única obsessão: realçar sem revelar a técnica." },
    ],
    arte: {
      heading: "A arte da naturalidade\npara a sua sobrancelha",
      body: "Há mais de vinte anos refinamos uma única obsessão: realçar sem revelar a técnica. Cada sobrancelha começa por um estudo do seu rosto (proporção, expressão, a forma como você sorri) e por uma cor escolhida para conversar com a sua pele. O traço fio a fio se integra aos seus pelos, corrigindo falhas e assimetrias com uma naturalidade que não se anuncia.",
    },
    ritual: [
      { n: "01", title: "Visagismo", body: "Lemos o seu rosto (proporção, simetria, expressão) para desenhar a sobrancelha que pertence a você." },
      { n: "02", title: "Colorimetria", body: "A cor nasce da sua pele e do seu tom de pelo. Natural, nunca artificial." },
      { n: "03", title: "Execução", body: "O traço fio a fio, em ambiente de biossegurança hospitalar, com material descartável." },
      { n: "04", title: "Retorno", body: "Um retoque de acabamento assegura uniformidade e durabilidade ao resultado." },
    ],
    proof: { quote: "Ninguém percebe que é feito. Percebem que eu pareço descansada.", author: "Cliente desde 2015 · Sobrancelha" },
    faq: [
      { q: "Quanto dura a micropigmentação de sobrancelhas?", a: "Em média de 8 a 18 meses, variando conforme o seu tipo de pele (peles oleosas tendem a clarear mais rápido) e os cuidados pós-procedimento. Um retoque de acabamento é feito entre 30 e 45 dias." },
      { q: "Quanto tempo dura o procedimento?", a: "Entre 1h30 e 2h, incluindo o estudo do desenho, a aprovação com você e a execução fio a fio." },
      { q: "Dói?", a: "Trabalhamos com anestésico tópico em pomada antes e durante o procedimento. A maioria das clientes descreve como muito tranquilo, muitas vezes indolor." },
      { q: "Para quem é indicada?", a: "Para quem tem falhas, cicatrizes ou assimetrias, sobrancelhas muito claras, ralas ou sem definição, para casos de alopécia e para quem deseja acordar pronta, sem depender da maquiagem." },
      { q: "Qual a diferença entre fio a fio e efeito sombreado?", a: "O fio a fio recria pelos individuais para um resultado realista; o sombreado preenche com um esfumado suave, como uma maquiagem leve. Na avaliação indicamos o que valoriza o seu olhar, ou a combinação dos dois." },
      { q: "Já fiz micropigmentação antes. Posso refazer?", a: "Depende do estado da cor e do desenho anteriores. Em alguns casos indicamos uma despigmentação antes. Avaliamos individualmente." },
      FAQ_AGENDAMENTO,
    ],
    ctaHeading: "O seu olhar merece um estudo",
    images: {
      hero: "/images/servicos/sobrancelhas/hero.webp",
      card: "/images/servicos/sobrancelhas/card-2.webp",
      band: "/images/servicos/sobrancelhas/band.webp",
      bandPos: "center 45%",
      diferenciais: "/images/servicos/sobrancelhas/diferenciais.webp",
      diferenciaisPos: "center 25%",
      results: [
        "/images/servicos/sobrancelhas/result-4.webp",
        "/images/servicos/sobrancelhas/result-5.webp",
        "/images/servicos/sobrancelhas/result-6.webp",
      ],
      cta: "/images/servicos/sobrancelhas/cta.webp",
      ctaPos: "center 25%",
    },
  },

  // — RASCUNHOS (refinar com a Lu; sem fotos próprias ainda → placeholders) —
  labios: {
    title: "Micropigmentação Labial em São Paulo",
    description:
      "Micropigmentação labial em tom natural: cor que parece sua. Técnica autoral da Lu Make Up, pigmentos livres de metais pesados, atendimento por avaliação.",
    h1: "Micropigmentação Labial",
    essence: "Cor que parece sua, não aplicada.",
    diferenciaisHeading: "O que faz a cor parecer sua",
    diferenciais: [
      { title: "Colorimetria a partir do seu subtom", body: "A cor nasce da sua pele, com pigmentos próprios livres de metais pesados. Viva ao acordar, nunca artificial." },
      { title: "Contorno que respeita a sua boca", body: "Técnica autoral que devolve definição sem pesar: a leveza de quem nunca quis parecer maquiada." },
      { title: "Biossegurança hospitalar", body: "Salas privativas e material 100% descartável. O cuidado que não se vê é o que mais importa." },
    ],
    arte: {
      heading: "Cor que nasce de você",
      body: "A micropigmentação labial devolve contorno e cor à boca com a leveza de quem nunca quis parecer maquiada. Estudamos o seu subtom de pele para escolher uma cor que parece sua: viva ao acordar, discreta o suficiente para ser só você, um pouco melhor.",
    },
    faq: [
      { q: "Quanto dura a micropigmentação labial?", a: "Em média de 12 a 24 meses, com um esmaecimento gradual e uniforme, conforme a hidratação e os cuidados." },
      { q: "Quais técnicas existem?", a: "Revitalização (cor suave e translúcida, como um leve tom de batom), efeito batom (cor mais definida, que corrige assimetrias e dá volume visual) e neutralização de lábios escuros (harmoniza o excesso de melanina antes de aplicar a cor desejada)." },
      { q: "A cor fica muito forte?", a: "Não. Trabalhamos a partir do seu subtom natural e você escolhe a intensidade na avaliação: de um tom que parece seu a um efeito mais marcante." },
      { q: "Dói? E incha?", a: "Usamos anestésicos tópicos potentes; a sensação costuma ser de vibração ou leve ardência, bem tolerável. Há um inchaço leve a moderado nas primeiras 24h, que se resolve rápido." },
      { q: "Tenho herpes labial. Posso fazer?", a: "Sim, mas é necessário um protocolo de medicação profilática (antiviral) prescrito por médico nos dias anteriores, para evitar que o procedimento reative o vírus." },
      FAQ_AGENDAMENTO,
    ],
    ctaHeading: "Uma cor pensada para você",
    ctaAlign: "right",
    images: {
      hero: "/images/servicos/labios/hero.webp",
      card: "/images/servicos/labios/card-2.webp",
      heroPos: "70% 62%",
      band: "/images/servicos/labios/band.webp",
      bandPos: "center 38%",
      diferenciais: "/images/servicos/labios/diferenciais.webp",
      diferenciaisPos: "center 45%",
      results: [
        "/images/servicos/labios/result-1.webp",
        "/images/servicos/labios/result-2.webp",
        "/images/servicos/labios/result-3.webp",
      ],
      cta: "/images/servicos/labios/cta.webp",
      ctaPos: "center 42%",
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
      { title: "Desenho a partir da sua anatomia", body: "O traço certo, na espessura certa, pensado para o formato do seu olho: presença sem peso." },
      { title: "Delicadeza na região mais sensível", body: "Biossegurança hospitalar e material descartável onde o cuidado importa ainda mais." },
      { title: "Pigmentos próprios, livres de metais pesados", body: "Desenvolvidos pela Lu Rodrigues para um envelhecer bonito da cor." },
    ],
    arte: {
      heading: "O olhar em destaque,\nsem esforço",
      body: "Um delineado pensado para a sua anatomia: o traço certo, na espessura certa, que abre o olhar e dá presença aos cílios, sem nunca pesar. O luxo de acordar com o olhar pronto.",
    },
    faq: [
      { q: "O delineado fica natural?", a: "Sim. Desenhamos a partir do formato do seu olho, com a espessura que valoriza sem endurecer a expressão." },
      { q: "Quais tipos de delineado existem?", a: "Efeito preenchimento de cílios (feito entre os cílios, dá volume e densidade sem parecer maquiagem), delineado clássico (uma linha fina e elegante, superior ou inferior) e efeito esfumado (um degradê suave, como uma sombra leve)." },
      { q: "Quanto dura?", a: "Em média de 1 a 3 anos. Por ser uma pele de renovação celular baixa, a fixação costuma ser excelente." },
      { q: "É seguro? Dói?", a: "A agulha nunca se aproxima do globo ocular: o pigmento é depositado com precisão milimétrica na pálpebra. Com anestésico tópico, a sensação é mais de vibração do que de dor." },
      { q: "Quais os cuidados depois?", a: "Um leve inchaço nas primeiras 24h (compressas frias ajudam). O uso de lentes de contato pode ser retomado após 3 a 5 dias." },
      FAQ_AGENDAMENTO,
    ],
    ctaHeading: "Valorize o seu olhar",
    ctaAlign: "right",
    images: {
      hero: "/images/servicos/olhos/hero.webp",
      card: "/images/servicos/olhos/card-5.webp",
      heroPos: "center 32%",
      band: "/images/servicos/olhos/band-3.webp",
      bandPos: "center 50%",
      diferenciais: "/images/servicos/olhos/diferenciais.webp",
      diferenciaisPos: "center 30%",
      results: [
        "/images/servicos/olhos/result-1.webp",
        "/images/servicos/olhos/result-2b.webp",
        "/images/servicos/olhos/result-3b.webp",
      ],
      cta: "/images/servicos/olhos/cta-4.webp",
      ctaPos: "40% 42%",
    },
  },
  capilar: {
    title: "Micropigmentação Capilar em São Paulo",
    description:
      "Micropigmentação capilar para simular densidade e disfarçar a rarefação. Técnica autoral da Lu Make Up, resultado natural, por avaliação.",
    h1: "Micropigmentação Capilar",
    essence: "Densidade onde o tempo levou.",
    diferenciaisHeading: "O que cria densidade que convence",
    diferenciais: [
      { title: "Pontilhismo de precisão", body: "Recriamos a impressão de fios ponto a ponto: densidade que parece sempre ter existido." },
      { title: "Cor fiel ao seu cabelo", body: "Colorimetria com pigmentos próprios, livres de metais pesados, para um resultado discreto e definido." },
      { title: "Biossegurança hospitalar", body: "Salas privativas e material 100% descartável." },
    ],
    arte: {
      heading: "Densidade que parece\nter sempre existido",
      body: "Recriamos visualmente a densidade do couro cabeludo com uma técnica de pontilhismo precisa, devolvendo a impressão de fios onde a rarefação aparece. Discreto, definido. Confiança que volta sem alarde.",
    },
    faq: [
      { q: "Para quem é indicada?", a: "Para quem busca disfarçar rarefação, calvície ou cicatrizes no couro cabeludo, para homens e mulheres. Na avaliação verificamos a melhor solução para o seu caso." },
      { q: "Quais soluções existem?", a: "Efeito densidade (micro-pontos entre os fios existentes, para cabelo ralo sem raspar), efeito 'shaved look' (simula o fio nascendo em couro cabeludo raspado, recriando a linha frontal) e camuflagem de cicatrizes (inclusive de transplante, mesclando-as ao cabelo)." },
      { q: "Quantas sessões e quanto tempo?", a: "Geralmente de 2 a 3 sessões para construir a densidade ideal, com cada sessão entre 2 e 4 horas." },
      { q: "Preciso me afastar do trabalho?", a: "Não. A cicatrização é rápida e o procedimento não exige afastamento." },
      { q: "Quais os cuidados depois?", a: "Nos primeiros dias, evite sol forte, sauna, piscina e suor excessivo. O boné é permitido e recomendado para proteção solar." },
      FAQ_AGENDAMENTO,
    ],
    ctaHeading: "Densidade, com naturalidade",
    images: {
      hero: "/images/servicos/capilar/hero-4.webp",
      card: "/images/servicos/capilar/card-3.webp",
      heroPos: "center 42%",
      band: "/images/servicos/capilar/band-2.webp",
      bandPos: "center 40%",
      bandTall: true,
      diferenciais: "/images/servicos/capilar/diferenciais-2.webp",
      diferenciaisPos: "center 45%",
      results: [
        "/images/servicos/capilar/result-1.webp",
        "/images/servicos/capilar/result-2.webp",
        "/images/servicos/capilar/result-3.webp",
      ],
    },
  },
  alopecia: {
    title: "Micropigmentação para Alopécia em São Paulo",
    description:
      "Micropigmentação para alopécia: reconstrução da moldura do rosto com naturalidade e cuidado. Técnica autoral da Lu Make Up, por avaliação.",
    h1: "Micropigmentação para Alopécia",
    h1Break: ["Micropigmentação", "para Alopécia"],
    essence: "Reconstruir a moldura do rosto.",
    diferenciaisHeading: "O que reconstrói com naturalidade",
    diferenciais: [
      { title: "Sensibilidade caso a caso", body: "Cada alopécia é única. Avaliamos e desenhamos com o tempo e o cuidado que a sua história pede." },
      { title: "Técnica autoral", body: "Mais de vinte anos reconstruindo molduras com naturalidade, para você se reconhecer no espelho." },
      { title: "Pigmentos próprios e biossegurança hospitalar", body: "Livres de metais pesados, em salas privativas e com material 100% descartável." },
    ],
    arte: {
      heading: "Devolver o contorno\ndo olhar",
      body: "A alopécia chega de muitas formas: por um tratamento oncológico, por uma condição autoimune, pelo tempo. Quando os fios se vão, a sobrancelha e o contorno do olhar fazem falta no espelho. Reconstruímos essa moldura com técnica e sensibilidade, para você se reconhecer de novo.",
    },
    proof: DEFAULT_PROOF,
    faq: [
      { q: "Serve para quais casos?", a: "Reconstrução da moldura do rosto na alopécia (sobrancelhas e contorno do olhar), camuflagem de cicatrizes e reconstrução de aréola pós-mastectomia. Avaliamos cada caso individualmente." },
      { q: "O resultado parece natural?", a: "Sim. A técnica 3D trabalha luz e sombra na pele, criando profundidade, textura e projeção com realismo. Não é uma tatuagem plana." },
      { q: "Quanto dura?", a: "Em média de 2 a 4 anos, com clareamento gradual. Um retoque mantém a naturalidade e a cor." },
      FAQ_PRIMEIRA,
      FAQ_AGENDAMENTO,
    ],
    ctaHeading: "Voltar a se ver pronta",
    images: {
      hero: "/images/servicos/alopecia/hero-7.webp",
      heroPos: "center 42%",
      diferenciais: "/images/servicos/alopecia/diferenciais-2.webp",
      diferenciaisPos: "65% 30%",
      card: "/images/servicos/alopecia/card-6.webp",
    },
  },
  exobrow: {
    title: "Exobrow · Regeneração de Sobrancelhas | Lu Make Up",
    description:
      "Exobrow: tratamento exclusivo da Lu Make Up para a saúde e o volume das sobrancelhas. Por avaliação personalizada.",
    h1: "Exobrow",
    essence: "Volume e desenho em um gesto.",
    diferenciaisHeading: "O que age na raiz, não no disfarce",
    diferenciais: [
      { title: "Tratamento exclusivo da Lu Make Up", body: "Um protocolo regenerativo com exossomos, ativos que estimulam a regeneração das células, voltado à vitalidade e à densidade do fio." },
      { title: "Cuidado, não só estética", body: "O foco é a saúde da sobrancelha: densidade que volta com naturalidade." },
      { title: "Biossegurança hospitalar", body: "Salas privativas e material 100% descartável." },
    ],
    arte: {
      heading: "Mais do que desenhar:\nreativar",
      body: "Por muito tempo, sobrancelhas falhadas eram apenas disfarçadas. O Exobrow, tratamento exclusivo da Lu Make Up, age na raiz do problema: a saúde do folículo. Com exossomos, ativos que estimulam a regeneração das células, reativa fios em dormência e fortalece os existentes, devolvendo densidade natural.",
    },
    faq: [
      { q: "Como o Exobrow funciona?", a: "É um protocolo regenerativo que usa exossomos, ativos que estimulam a regeneração das células, aplicados por microagulhamento de precisão ou laser de baixa potência. Fios em fase de repouso voltam a crescer e fios finos ganham espessura e força." },
      { q: "Quantas sessões?", a: "Um ciclo de 3 a 5 sessões, com intervalos de 15 a 30 dias, para a melhor regeneração celular. Os resultados são graduais." },
      { q: "Substitui a micropigmentação?", a: "Não. O Exobrow recupera o fio natural; a micropigmentação recria visualmente o fio onde não há raiz viável. Podem se complementar, inclusive com o EverBrow." },
      { q: "Dói?", a: "É um procedimento muito tranquilo, com anestésico tópico e mínima sensação." },
      FAQ_AGENDAMENTO,
    ],
    ctaHeading: "Sobrancelhas com vida",
    images: {
      hero: "/images/servicos/exobrow/hero.webp",
      card: "/images/servicos/exobrow/card-2.webp",
      band: "/images/servicos/exobrow/band.webp",
      bandPos: "center 45%",
      diferenciais: "/images/servicos/exobrow/diferenciais-2.webp",
      diferenciaisPos: "center 30%",
      results: [
        "/images/servicos/exobrow/result-4.webp",
        "/images/servicos/exobrow/result-5.webp",
        "/images/servicos/exobrow/result-6.webp",
      ],
      cta: "/images/servicos/exobrow/cta.webp",
      ctaPos: "center 25%",
    },
  },
  paramedica: {
    title: "Micropigmentação Paramédica em São Paulo | Lu Make Up",
    description:
      "Micropigmentação paramédica: a técnica a serviço da reconstrução. Trabalho reparador da Lu Make Up, conduzido com cuidado e dignidade. Por avaliação.",
    h1: "Micropigmentação Paramédica",
    essence: "A técnica a serviço da reconstrução.",
    diferenciaisHeading: "O que reconstrói com dignidade",
    diferenciais: [
      { title: "Discrição e acolhimento", body: "Conduzimos cada atendimento com respeito pela sua história e pelo seu tempo." },
      { title: "Técnica a serviço da reparação", body: "Mais de vinte anos a serviço de devolver muito mais que estética: a sensação de se sentir inteira." },
      { title: "Biossegurança hospitalar", body: "Salas privativas e material 100% descartável." },
    ],
    arte: {
      heading: "Quando a técnica\nreconstrói",
      body: "Uma cicatriz de cirurgia, uma estria, uma mancha que a pele guardou. Algumas histórias a gente escolhe suavizar. A micropigmentação paramédica devolve uniformidade à pele e tranquilidade na frente do espelho, em atendimentos conduzidos com discrição, cuidado e respeito pela sua história.",
    },
    faq: [
      { q: "O que a micropigmentação paramédica trata?", a: "Camuflagem de cicatrizes cirúrgicas (abdominoplastia, cesárea, mamoplastia), estrias brancas, vitiligo estável (sem evolução há pelo menos seis meses), manchas de hipopigmentação (áreas onde a pele perdeu cor) e reconstrução de aréola." },
      { q: "Como funciona?", a: "Implantamos pigmentos no tom exato da pele saudável sobre a área com cicatriz ou mancha. Em alguns casos combinamos indução de colágeno para melhorar a textura da pele." },
      { q: "Funciona em qualquer estria?", a: "O melhor resultado é em estrias brancas (maduras). Estrias recentes, ainda avermelhadas, precisam que o tecido se recupere antes." },
      { q: "Quanto dura?", a: "O resultado é duradouro, com desgaste natural ao longo dos anos. Recomendamos um retoque a cada 2 a 3 anos para manter cor e realismo." },
      { q: "Preciso de encaminhamento médico?", a: "Em alguns casos sim. Avaliamos cada situação individualmente, com transparência e segurança. E recusamos o procedimento quando não é indicado." },
      FAQ_AGENDAMENTO,
    ],
    ctaHeading: "Um cuidado que reconstrói",
    // Página SEM imagens por decisão do cliente (assunto sensível): todos os
    // slots renderizam o placeholder "Imagem · a definir" até as fotos chegarem.
    // O card do índice /servicos permanece (página separada).
    images: {
      card: "/images/servicos/paramedica/card.webp",
    },
  },
  "reconstrucao-labial": {
    title: "Reconstrução Labial em São Paulo | Lu Make Up",
    description:
      "Reconstrução labial: devolver o contorno e a cor aos lábios, com cuidado. Trabalho reparador da Lu Make Up, por avaliação personalizada.",
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
      body: "Para lábios que perderam definição por cicatrizes ou outras condições, a reconstrução labial devolve contorno e cor com naturalidade e sensibilidade. Um gesto técnico a serviço da autoestima.",
    },
    proof: DEFAULT_PROOF,
    faq: [
      { q: "Para quais casos é indicada?", a: "Fissura labiopalatina (lábio leporino) após cirurgias corretivas, cicatrizes (de acidentes, cirurgias ou herpes), assimetrias importantes e perda de contorno pela idade ou por grânulos de Fordyce (pequenos pontos claros naturais do lábio)." },
      { q: "Como é o processo?", a: "Em três etapas: desenho por visagismo (o 'novo lábio' a lápis, aprovado por você), colorimetria personalizada (às vezes um tom para neutralizar a cicatriz e outro para o restante) e a micropigmentação de precisão, na camada certa para não borrar." },
      { q: "Dá para aumentar bastante o lábio?", a: "Há um limite de segurança: pigmentamos até a linha de transição da pele. Ir além cria um resultado artificial. Para volume, o indicado é associar preenchimento com ácido hialurônico." },
      { q: "Cicatriz de herpes pode?", a: "Sim, é uma ótima indicação para devolver a cor. Mas é obrigatória a medicação profilática (antiviral) prescrita por médico nos dias anteriores." },
      { q: "Dói, mesmo sobre cicatriz?", a: "O tecido cicatricial costuma ter sensibilidade reduzida. De todo modo, usamos anestésicos tópicos eficazes." },
      FAQ_AGENDAMENTO,
    ],
    ctaHeading: "Devolver a definição",
    images: {
      hero: "/images/servicos/reconstrucao-labial/hero.webp",
      card: "/images/servicos/reconstrucao-labial/card-4.webp",
      band: "/images/servicos/reconstrucao-labial/band.webp",
      bandPos: "center 55%",
      diferenciais: "/images/servicos/reconstrucao-labial/diferenciais.webp",
      diferenciaisPos: "center 25%",
      cta: "/images/servicos/reconstrucao-labial/cta.webp",
      ctaPos: "center 25%",
    },
  },
  "reconstrucao-de-areola": {
    title: "Reconstrução de Aréola (pós-mastectomia) em São Paulo | Lu Make Up",
    description:
      "Reconstrução de aréola e mama pós-mastectomia com micropigmentação. Trabalho reparador do Instituto Living Sculpture, conduzido com cuidado e dignidade. Por avaliação.",
    h1: "Reconstrução de Aréola",
    essence: "Voltar a se reconhecer no espelho.",
    diferenciaisHeading: "O que reconstrói com dignidade",
    diferenciais: [
      { title: "Acolhimento em cada etapa", body: "Conduzimos o atendimento com discrição e respeito pela sua história — do primeiro contato ao retorno." },
      { title: "Realismo 3D de cor e relevo", body: "Um estudo de luz e sombra recria aréola, contorno e a impressão do mamilo, inclusive as glândulas de Montgomery, os pequenos relevos naturais da pele. Parece tridimensional, mesmo sendo plano na pele." },
      { title: "Pigmentos próprios e biossegurança hospitalar", body: "Livres de metais pesados, em salas privativas e com material 100% descartável." },
    ],
    arte: {
      heading: "O último gesto\nde um caminho",
      body: "Após uma mastectomia, uma cirurgia ou um trauma, a reconstrução da aréola é, muitas vezes, o último gesto de um longo caminho. E o que devolve a sensação de se reconhecer no espelho. Com a técnica de realismo 3D, recriamos cor, contorno e a impressão de relevo num trabalho personalizado, que respeita a sua anatomia, a simetria e o tom exato da sua pele. Cada atendimento é conduzido com discrição, acolhimento e respeito pela sua história.",
    },
    proof: { quote: "Foi o gesto que faltava para eu me sentir inteira de novo.", author: "Cliente do Instituto Living Sculpture" },
    faq: [
      { q: "Quando posso fazer a reconstrução da aréola?", a: "Em geral, pedimos a liberação do seu mastologista ou cirurgião plástico. Na média, aguardamos de 6 a 12 meses após a cirurgia final." },
      { q: "Como é feita a avaliação?", a: "Presencial ou por fotografia, com toda a discrição. É nela que entendemos o seu caso e planejamos a reconstrução. Para pacientes em tratamento oncológico, pedimos também a autorização médica." },
      { q: "O resultado parece natural?", a: "Sim. A técnica de realismo 3D trabalha luz e sombra para simular a projeção do mamilo e a textura da aréola, inclusive as glândulas de Montgomery. Parece tridimensional, mesmo sendo plano na pele." },
      { q: "Que pigmentos são usados?", a: "Não usamos tinta de tatuagem. Usamos pigmentos paramédicos desenvolvidos para não migrar (borrar) e esmaecer de forma natural, sem virar azul ou verde com os anos." },
      { q: "Quanto dura?", a: "Em média de 2 a 4 anos, com clareamento gradual. Um retoque é recomendado após esse período." },
      { q: "Dói?", a: "Na maioria dos casos pós-mastectomia a sensibilidade da região está diminuída, tornando o procedimento indolor. Quando necessário, usamos anestésico tópico." },
      FAQ_AGENDAMENTO,
    ],
    ctaHeading: "Um cuidado que acolhe você",
    // Página SEM imagens por decisão do cliente (assunto sensível): todos os
    // slots renderizam o placeholder "Imagem · a definir" até as fotos chegarem.
    // O card do índice /servicos permanece (página separada).
    images: {
      card: "/images/servicos/reconstrucao-de-areola/card.webp",
    },
  },

  // ——————————————————————————————————————————————————————————————
  // PILAR · REALCE & ESTÉTICA (novos serviços · textos do cliente refinados;
  // fatos de FAQ pendentes da Lu = TODO:CONFIRMAR). Ritual próprio (RITUAL_ESTETICA).
  // ——————————————————————————————————————————————————————————————
  "brow-lamination": {
    title: "Brow Lamination em São Paulo | Lu Make Up",
    description:
      "Brow Lamination: alinhamento e modelagem dos fios naturais da sobrancelha, com efeito preenchido e sofisticado. Técnica da Lu Make Up, por avaliação.",
    h1: "Brow Lamination",
    essence: "Os seus fios, no lugar certo.",
    diferenciaisHeading: "O que organiza sem endurecer",
    diferenciais: [
      { title: "Respeita o seu desenho", body: "Reposicionamos os fios que já são seus, no sentido que valoriza o seu rosto. Nunca um molde pronto." },
      { title: "Densidade que aparece", body: "Fios alinhados preenchem os espaços e criam a impressão de uma sobrancelha mais cheia, com naturalidade." },
      { title: "Cuidado com o fio", body: "Modelamos para organizar sem ressecar. É realce, não força." },
    ],
    arte: {
      heading: "O desenho que\njá é seu",
      body: "Às vezes a sobrancelha bonita já está ali: só falta cada fio no lugar. O Brow Lamination alinha e modela os pelos que são seus, no sentido que o seu rosto pede. Sem molde, sem exagero. A impressão é de uma sobrancelha mais cheia e definida, que continua sendo a sua.",
    },
    ritual: RITUAL_ESTETICA,
    faq: [
      { q: "Quanto dura o resultado?", a: "Em média até seis semanas, variando conforme o seu tipo de fio e os cuidados." },
      { q: "Dói?", a: "Não. É um procedimento confortável, sem agulha." },
      { q: "Posso combinar com micropigmentação?", a: "Sim. O laminado organiza os fios; a micropigmentação preenche onde há falhas. Na avaliação indicamos o que valoriza o seu olhar." },
      { q: "Quais os cuidados depois?", a: "A confirmar com a Lu Make Up — o protocolo de cuidado das primeiras 24 a 48 horas (molhar, dormir, maquiagem)." },
      FAQ_AGENDAMENTO,
    ],
    ctaHeading: "Comece pela sua sobrancelha",
  },
  "lash-lifting": {
    title: "Lash Lifting em São Paulo | Lu Make Up",
    description:
      "Lash Lifting: curvatura e definição dos cílios naturais, sem extensões, para um olhar mais aberto e expressivo. Técnica da Lu Make Up, por avaliação.",
    h1: "Lash Lifting",
    essence: "Cílios seus, olhar mais aberto.",
    diferenciaisHeading: "O que abre o olhar com leveza",
    diferenciais: [
      { title: "Sem extensões", body: "Trabalhamos o seu próprio cílio: curvatura, alinhamento e definição, sem a manutenção dos alongamentos." },
      { title: "Efeito natural", body: "Abrimos o olhar preservando a leveza dos fios. Ninguém precisa saber como." },
      { title: "Cuidado na região sensível", body: "Biossegurança e delicadeza onde o cuidado importa ainda mais." },
    ],
    arte: {
      heading: "O olhar aberto,\nsem esforço",
      body: "Nem todo olhar precisa de alongamento para se abrir. O Lash Lifting trabalha a curvatura dos seus próprios cílios, alinhando e definindo fio a fio. O olhar fica mais desperto e expressivo, com a leveza de quem não colou nada, e sem a manutenção constante das extensões.",
    },
    ritual: RITUAL_ESTETICA,
    faq: [
      { q: "Quanto dura?", a: "A confirmar com a Lu Make Up — durabilidade média do lifting (em geral acompanha o ciclo natural do cílio)." },
      { q: "Preciso de manutenção como no alongamento?", a: "Não. Por trabalhar o fio natural, não exige a reposição constante das extensões." },
      { q: "Posso usar máscara de cílios depois?", a: "A confirmar com a Lu Make Up — quando liberar rímel e o que evitar nas primeiras horas." },
      { q: "É seguro?", a: "Sim. É um procedimento tranquilo, conduzido com produtos próprios para a região dos olhos e sem contato com o globo ocular." },
      FAQ_AGENDAMENTO,
    ],
    ctaHeading: "Um olhar mais aberto",
  },
  "tintura-de-sobrancelhas": {
    title: "Tintura de Sobrancelhas em São Paulo | Lu Make Up",
    description:
      "Tintura de sobrancelhas: cor personalizada que intensifica e uniformiza o desenho, com naturalidade. Técnica da Lu Make Up, por avaliação.",
    h1: "Tintura de Sobrancelhas",
    essence: "Um realce de cor, sem parecer maquiagem.",
    diferenciaisHeading: "O que intensifica sem pesar",
    diferenciais: [
      { title: "Cor personalizada", body: "A tonalidade é escolhida para harmonizar com a cor natural dos seus cabelos e do seu tom de pele." },
      { title: "Uniformidade no desenho", body: "Preenche visualmente os fios mais claros e dá definição ao contorno, com discrição." },
      { title: "Realce imediato", body: "Um destaque no olhar sem depender da maquiagem do dia a dia." },
    ],
    arte: {
      heading: "A cor que\nharmoniza o olhar",
      body: "Uma cor mais definida muda o olhar sem que ninguém saiba explicar por quê. A tintura preenche visualmente os fios mais claros e uniformiza o desenho, na tonalidade escolhida para conversar com o seu cabelo e a sua pele. Um realce discreto, para quem quer destacar o olhar sem parecer maquiada.",
    },
    ritual: RITUAL_ESTETICA,
    faq: [
      { q: "Quanto tempo dura a cor?", a: "A confirmar com a Lu Make Up — durabilidade média da tintura conforme o tipo de pelo e os cuidados." },
      { q: "É diferente da micropigmentação?", a: "Sim. A tintura colore o fio existente e é temporária; a micropigmentação implanta pigmento na pele e dura muito mais. Na avaliação indicamos o que faz sentido para você." },
      { q: "Serve para quem tem poucos fios?", a: "Ajuda a dar cor e definição aos fios existentes. Para preencher falhas, o indicado costuma ser a micropigmentação ou o Exobrow." },
      FAQ_AGENDAMENTO,
    ],
    ctaHeading: "Um realce sutil no olhar",
  },
  "hidratacao-labial": {
    title: "Hidratação Labial (Dermapen) em São Paulo | Lu Make Up",
    description:
      "Hidratação labial profunda: esfoliação, ativos e microinfusão com Dermapen para lábios macios, uniformes e iluminados. Protocolo da Lu Make Up, por avaliação.",
    h1: "Hidratação Labial",
    essence: "O viço que devolve vida ao lábio.",
    diferenciaisHeading: "O que devolve viço ao lábio",
    diferenciais: [
      { title: "Protocolo em etapas", body: "Esfoliação, ativos específicos e microinfusão com Dermapen para potencializar a absorção." },
      { title: "Resultado natural", body: "Lábios mais hidratados, macios e uniformes, com um viço que parece seu." },
      { title: "Cuidado, não só estética", body: "O foco é a saúde do lábio: devolver vida, não disfarçar." },
    ],
    arte: {
      heading: "O viço que\nvolta ao lábio",
      body: "Lábios ressecados entregam um cansaço que a gente nem percebe. Este protocolo devolve vida a eles em etapas: esfoliação, ativos de tratamento e uma microinfusão com Dermapen (uma caneta de microagulhas) que leva os nutrientes mais fundo. Você sai com lábios macios, uniformes e com um viço que parece seu, porque é.",
    },
    ritual: RITUAL_ESTETICA,
    faq: [
      { q: "Quantas sessões são necessárias?", a: "A confirmar com a Lu Make Up — número de sessões e intervalos para o melhor resultado." },
      { q: "Dói?", a: "A confirmar com a Lu Make Up — a sensação da microinfusão e se há uso de anestésico tópico." },
      { q: "Combina com a micropigmentação labial?", a: "Sim. A hidratação cuida da saúde do lábio; a micropigmentação trabalha a cor e o contorno. Na avaliação desenhamos o melhor plano." },
      { q: "Tenho herpes labial. Posso fazer?", a: "A confirmar com a Lu Make Up — em geral procedimentos labiais pedem medicação profilática prescrita por médico quando há histórico de herpes." },
      FAQ_AGENDAMENTO,
    ],
    ctaHeading: "Devolver viço aos seus lábios",
  },
  "limpeza-de-pele-glow": {
    title: "Limpeza de Pele Glow em São Paulo | Lu Make Up",
    description:
      "Limpeza de Pele Glow: protocolo completo de renovação que desobstrui, equilibra e ilumina a pele. Técnica da Lu Make Up, por avaliação.",
    h1: "Limpeza de Pele Glow",
    essence: "Mais do que limpar: revelar a sua pele.",
    diferenciaisHeading: "O que renova de verdade",
    diferenciais: [
      { title: "Protocolo completo", body: "Cada etapa remove impurezas, desobstrui os poros e equilibra a pele, não é só uma extração." },
      { title: "Renovação natural", body: "Estimulamos a renovação da própria pele, revelando textura mais uniforme e luminosa." },
      { title: "Efeito glow", body: "Viço, leveza e aparência revitalizada ao fim da sessão." },
    ],
    arte: {
      heading: "A pele que\nse renova",
      body: "Não é só tirar a impureza do dia: é dar à pele a chance de se refazer. Cada etapa desobstrui, equilibra e estimula a sua renovação natural, revelando uma textura mais uniforme e luminosa. No fim, aquele glow que não vem de filtro nenhum: viço, leveza e cara de descansada.",
    },
    ritual: RITUAL_ESTETICA,
    faq: [
      { q: "Com que frequência devo fazer?", a: "A confirmar com a Lu Make Up — a frequência recomendada conforme o seu tipo de pele." },
      { q: "Serve para pele oleosa e acneica?", a: "A confirmar com a Lu Make Up — indicações e cuidados para cada tipo de pele." },
      { q: "A pele fica vermelha depois?", a: "A confirmar com a Lu Make Up — o que esperar nas horas seguintes e os cuidados de pós." },
      FAQ_AGENDAMENTO,
    ],
    ctaHeading: "A sua pele, revelada",
  },
  "depilacao-facial-com-linha": {
    title: "Depilação Facial com Linha em São Paulo | Lu Make Up",
    description:
      "Depilação facial com linha: remoção precisa e delicada dos pelos do rosto, sem química, ideal para peles sensíveis. Técnica da Lu Make Up, por avaliação.",
    h1: "Depilação Facial com Linha",
    essence: "Contorno limpo, sem agredir a pele.",
    diferenciaisHeading: "O que limpa com delicadeza",
    diferenciais: [
      { title: "Precisão no contorno", body: "A linha remove os pelos com exatidão, valorizando os contornos naturais do rosto." },
      { title: "Sem química", body: "Dispensa produtos químicos, o que a torna indicada até para peles sensíveis." },
      { title: "Acabamento uniforme", body: "Um resultado limpo e delicado, que preserva a saúde da pele." },
    ],
    arte: {
      heading: "O contorno limpo,\ncom delicadeza",
      body: "A linha faz o que a cera nem sempre consegue: tira o pelo com precisão e desenha o contorno sem maltratar a pele. Sem química e sem calor, limpa e uniformiza até as peles mais sensíveis, valorizando as linhas naturais do rosto com delicadeza.",
    },
    ritual: RITUAL_ESTETICA,
    faq: [
      { q: "Dói?", a: "A sensação é rápida e bem tolerável. Por não usar cera nem química, costuma agredir menos a pele sensível." },
      { q: "Quais áreas do rosto podem ser feitas?", a: "A confirmar com a Lu Make Up — as áreas atendidas (sobrancelha, buço, laterais do rosto)." },
      { q: "Serve para pele sensível ou com acne?", a: "É justamente uma das indicações, por não usar produtos químicos. Em casos de acne ativa, avaliamos individualmente." },
      FAQ_AGENDAMENTO,
    ],
    ctaHeading: "Um contorno limpo e natural",
  },

  // ——————————————————————————————————————————————————————————————
  // PILAR · REPARADOR & PARAMÉDICO (novos serviços · textos do cliente refinados;
  // temas sensíveis: transparência sobre autorização médica e avaliação prévia.
  // Fatos de FAQ pendentes da Lu = TODO:CONFIRMAR).
  // ——————————————————————————————————————————————————————————————
  "camuflagem-de-cicatrizes-e-estrias": {
    title: "Camuflagem de Cicatrizes e Estrias em São Paulo | Lu Make Up",
    description:
      "Camuflagem de cicatrizes e estrias com micropigmentação paramédica: pigmentos no tom da pele saudável para suavizar as marcas. Por avaliação, na Lu Make Up.",
    h1: "Camuflagem de Cicatrizes e Estrias",
    essence: "Deixar a marca mais leve.",
    diferenciaisHeading: "O que suaviza com naturalidade",
    diferenciais: [
      { title: "Cor no tom da sua pele", body: "Pigmentos paramédicos desenvolvidos para reproduzir fielmente o tom da pele saudável ao redor da marca." },
      { title: "Textura, não só cor", body: "Quando indicado, somamos técnicas regenerativas para melhorar também a textura da pele." },
      { title: "Avaliação caso a caso", body: "Cada cicatriz e cada estria contam uma história. Avaliamos antes de indicar qualquer coisa." },
    ],
    arte: {
      heading: "Suavizar o que\na pele guardou",
      body: "A pele guarda histórias, e algumas marcas incomodam mais do que parecem. Com a micropigmentação paramédica, implantamos pigmentos no tom exato da pele saudável para suavizar cicatrizes e estrias claras, reduzindo o contraste com a região ao redor. Quando faz sentido, somamos técnicas regenerativas para melhorar a textura, num resultado ainda mais harmonioso.",
    },
    faq: [
      { q: "Funciona em qualquer estria?", a: "O melhor resultado é nas estrias brancas (maduras). As mais recentes, ainda avermelhadas, pedem que o tecido se recupere antes." },
      { q: "E cicatrizes recentes?", a: "A confirmar com a Lu Make Up — o tempo de cicatrização recomendado antes de camuflar." },
      { q: "Quanto dura?", a: "O resultado é duradouro, com desgaste natural ao longo dos anos. Um retoque periódico mantém a cor e o realismo." },
      { q: "Preciso de encaminhamento médico?", a: "Em alguns casos sim. Avaliamos cada situação com transparência e segurança, e recusamos o procedimento quando não é indicado." },
      FAQ_AGENDAMENTO,
    ],
    ctaHeading: "Pare de se esconder",
  },
  "camuflagem-de-manchas": {
    title: "Camuflagem de Manchas (hipopigmentação) em São Paulo | Lu Make Up",
    description:
      "Camuflagem de manchas brancas e alterações de pigmentação com micropigmentação: uniformiza a pele reduzindo o contraste. Por avaliação, na Lu Make Up.",
    h1: "Camuflagem de Manchas",
    essence: "Uniformizar o tom, com discrição.",
    diferenciaisHeading: "O que uniformiza a pele",
    diferenciais: [
      { title: "Pigmento no tom exato", body: "Reproduzimos a cor da pele saudável para reduzir o contraste com a área mais clara." },
      { title: "Avaliação antes de tudo", body: "Manchas têm origens diferentes. Avaliamos individualmente, presencial ou por foto, antes de indicar." },
      { title: "Discrição e acolhimento", body: "Um atendimento conduzido com respeito pela sua história." },
    ],
    arte: {
      heading: "Reduzir o contraste,\ncom cuidado",
      body: "Manchas brancas, cicatrizes ou alterações de pigmentação podem incomodar mais do que parecem. A camuflagem implanta pigmentos personalizados no tom da pele saudável, reduzindo o contraste entre a área clara e a região ao redor, para um tom mais uniforme. É sempre precedida por uma avaliação individual, presencial ou por fotografia.",
    },
    faq: [
      { q: "Serve para qualquer mancha?", a: "Depende da origem e do tipo. Por isso a avaliação, presencial ou por foto, é obrigatória antes de indicar o tratamento." },
      { q: "Como é feita a avaliação?", a: "Presencial ou por fotografia, para entender a mancha e definir o planejamento adequado ao seu caso." },
      { q: "Quanto dura?", a: "O resultado é duradouro, com desgaste natural ao longo dos anos. Um retoque periódico mantém a uniformidade." },
      { q: "Precisa de autorização médica?", a: "Em alguns casos sim, dependendo da origem da mancha. Avaliamos com transparência e recusamos quando não é indicado." },
      FAQ_AGENDAMENTO,
    ],
    ctaHeading: "Chega de disfarçar",
  },
  "camuflagem-de-vitiligo": {
    title: "Camuflagem de Vitiligo em São Paulo | Lu Make Up",
    description:
      "Camuflagem de vitiligo estabilizado com micropigmentação: pigmentos personalizados para uniformizar a pele. Realizada mediante autorização do dermatologista. Por avaliação.",
    h1: "Camuflagem de Vitiligo",
    essence: "Reencontrar a pele uniforme.",
    diferenciaisHeading: "O que uniformiza com segurança",
    diferenciais: [
      { title: "Pigmento personalizado", body: "Desenvolvido para reproduzir a tonalidade natural da região e uniformizar a pele." },
      { title: "Só com liberação médica", body: "Realizada exclusivamente mediante autorização do dermatologista, para total segurança." },
      { title: "Indicação criteriosa", body: "Indicada para vitiligo estabilizado ou áreas de hipopigmentação, avaliadas caso a caso." },
    ],
    arte: {
      heading: "Uniformizar a pele,\ncom segurança",
      body: "Para quem convive com o vitiligo estabilizado ou com áreas de hipopigmentação, a camuflagem promove a uniformização da pele por meio da implantação de pigmentos personalizados, desenvolvidos para reproduzir a tonalidade natural da região. É um procedimento realizado exclusivamente mediante autorização do médico dermatologista, garantindo segurança e a indicação adequada para cada caso.",
    },
    faq: [
      { q: "Qualquer pessoa com vitiligo pode fazer?", a: "Não. É indicada para vitiligo estabilizado (sem evolução recente) ou áreas de hipopigmentação, e exige a autorização do seu dermatologista." },
      { q: "Por que preciso da autorização do dermatologista?", a: "Porque o vitiligo deve estar estável e acompanhado. A liberação médica garante segurança e a indicação correta para o seu caso." },
      { q: "O resultado fica natural?", a: "O pigmento é personalizado para reproduzir a tonalidade da sua pele, uniformizando a região. Avaliamos cada caso individualmente." },
      { q: "Quanto dura?", a: "A confirmar com a Lu Make Up — durabilidade e recomendação de retoque para a camuflagem de vitiligo." },
      FAQ_AGENDAMENTO,
    ],
    ctaHeading: "A sua pele não é para esconder",
  },
  "despigmentacao-a-laser": {
    title: "Despigmentação a Laser em São Paulo | Lu Make Up",
    description:
      "Despigmentação a laser para suavizar ou remover micropigmentação antiga e pigmentações indesejadas, de forma segura e gradual. Por avaliação, na Lu Make Up.",
    h1: "Despigmentação a Laser",
    essence: "Espaço para um novo desenho.",
    diferenciaisHeading: "O que remove com segurança",
    diferenciais: [
      { title: "Tecnologia que fragmenta", body: "O laser quebra o pigmento depositado na pele, que o próprio organismo elimina aos poucos." },
      { title: "Remoção gradual e controlada", body: "Em sessões, respeitando a sua pele e o tempo de cada resposta." },
      { title: "O caminho para recomeçar", body: "Ideal para corrigir uma micropigmentação antiga antes de um novo desenho." },
    ],
    arte: {
      heading: "Apagar para\nrecomeçar",
      body: "Nem todo trabalho anterior envelhece bem. A despigmentação a laser suaviza ou remove pigmentações indesejadas, como uma micropigmentação antiga que perdeu a cor ou o desenho. A tecnologia fragmenta o pigmento depositado na pele, permitindo que o seu organismo o elimine de forma gradual, segura e controlada, abrindo espaço para um novo começo.",
    },
    ritual: RITUAL_ESTETICA,
    faq: [
      { q: "Quantas sessões são necessárias?", a: "A confirmar com a Lu Make Up — o número de sessões e os intervalos, que variam conforme o pigmento e a profundidade." },
      { q: "Remove totalmente a micropigmentação?", a: "A confirmar com a Lu Make Up — o grau de remoção esperado conforme cada caso." },
      { q: "Dói?", a: "A confirmar com a Lu Make Up — a sensação durante a sessão e se há uso de anestésico." },
      { q: "Posso fazer uma nova micropigmentação depois?", a: "Sim, é justamente um dos objetivos: abrir espaço para um novo desenho. O intervalo até a nova aplicação é definido na avaliação." },
      FAQ_AGENDAMENTO,
    ],
    ctaHeading: "Recomeçar o seu desenho",
  },
};

export function getServiceContent(slug: string): ServiceContent | undefined {
  return SERVICE_CONTENT[slug];
}
