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

// FAQ de marca (§6) — base reutilizável.
const FAQ_AGENDAMENTO: QA = {
  q: "Como funciona o agendamento?",
  a: "Atendimento por agendamento, com avaliação personalizada antes de qualquer procedimento. Chame o ateliê no WhatsApp e agende a sua avaliação, sem compromisso.",
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
    diferenciaisHeading: "O que devolve a moldura do rosto",
    diferenciais: [
      { title: "Sensibilidade caso a caso", body: "Cada alopécia é única. Avaliamos e desenhamos com o tempo e o cuidado que a sua história pede." },
      { title: "Técnica autoral", body: "Mais de vinte anos reconstruindo molduras com naturalidade, para você se reconhecer no espelho." },
      { title: "Pigmentos próprios e biossegurança hospitalar", body: "Livres de metais pesados, em salas privativas e com material 100% descartável." },
    ],
    arte: {
      heading: "Reconstruir a moldura\ndo seu rosto",
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
    ctaHeading: "Reconhecer-se no espelho",
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
      diferenciais: "/images/servicos/exobrow/diferenciais.webp",
      diferenciaisPos: "center 25%",
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
      { title: "Técnica a serviço da reparação", body: "Mais de vinte anos a serviço de devolver inteireza, não apenas estética." },
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
    images: {
      hero: "/images/servicos/paramedica/hero.webp",
      card: "/images/servicos/paramedica/card.webp",
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
    essence: "Devolver a sensação de inteireza.",
    diferenciaisHeading: "O que reconstrói com dignidade",
    diferenciais: [
      { title: "Acolhimento em cada etapa", body: "Conduzimos o atendimento com discrição e respeito pela sua história — do primeiro contato ao retorno." },
      { title: "Realismo 3D de cor e relevo", body: "Um estudo de luz e sombra recria aréola, contorno e a impressão do mamilo, inclusive as glândulas de Montgomery, os pequenos relevos naturais da pele. Parece tridimensional, mesmo sendo plano na pele." },
      { title: "Pigmentos próprios e biossegurança hospitalar", body: "Livres de metais pesados, em salas privativas e com material 100% descartável." },
    ],
    arte: {
      heading: "Quando a arte\ndevolve a inteireza",
      body: "Após a mastectomia, a reconstrução da aréola é, muitas vezes, o último gesto de um longo caminho. E o que devolve a sensação de se reconhecer no espelho. Com a técnica de realismo 3D, recriamos cor, contorno e a impressão de relevo com naturalidade e sensibilidade. Cada atendimento é conduzido com discrição, acolhimento e respeito pela sua história.",
    },
    proof: { quote: "Foi o gesto que faltava para eu me sentir inteira de novo.", author: "Cliente do Instituto Living Sculpture" },
    faq: [
      { q: "Quando posso fazer a reconstrução da aréola?", a: "Em geral, pedimos a liberação do seu mastologista ou cirurgião plástico. Na média, aguardamos de 6 a 12 meses após a cirurgia final." },
      { q: "O resultado parece natural?", a: "Sim. A técnica de realismo 3D trabalha luz e sombra para simular a projeção do mamilo e a textura da aréola, inclusive as glândulas de Montgomery. Parece tridimensional, mesmo sendo plano na pele." },
      { q: "Que pigmentos são usados?", a: "Não usamos tinta de tatuagem. Usamos pigmentos paramédicos desenvolvidos para não migrar (borrar) e esmaecer de forma natural, sem virar azul ou verde com os anos." },
      { q: "Quanto dura?", a: "Em média de 2 a 4 anos, com clareamento gradual. Um retoque é recomendado após esse período." },
      { q: "Dói?", a: "Na maioria dos casos pós-mastectomia a sensibilidade da região está diminuída, tornando o procedimento indolor. Quando necessário, usamos anestésico tópico." },
      FAQ_AGENDAMENTO,
    ],
    ctaHeading: "Um cuidado que devolve inteireza",
    images: {
      hero: "/images/servicos/reconstrucao-de-areola/hero.webp",
      card: "/images/servicos/reconstrucao-de-areola/card.webp",
      band: "/images/servicos/reconstrucao-de-areola/band.webp",
      bandPos: "center 30%",
      diferenciais: "/images/servicos/reconstrucao-de-areola/diferenciais.webp",
      diferenciaisPos: "center 25%",
      cta: "/images/servicos/reconstrucao-de-areola/cta.webp",
      ctaPos: "center 25%",
    },
  },
};

export function getServiceContent(slug: string): ServiceContent | undefined {
  return SERVICE_CONTENT[slug];
}
