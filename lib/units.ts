/**
 * Unidades (ateliês). Usadas nos deep-links de WhatsApp, no rodapé e nas
 * páginas de Localização (LocalBusiness JSON-LD por unidade).
 *
 * Endereços e WhatsApp central extraídos do site atual (lumakeup.com.br/contato).
 * ⚠️ TODO:CONFIRMAR — números de WhatsApp DEDICADOS por unidade (§12.7): hoje o
 * atendimento é centralizado no +55 11 4000-1516. Horário: seg–sáb, por agendamento.
 */
export type UnitAddress = {
  /** nome do ponto (ex.: "Casa Conceito — Jardim Paulista") */
  name: string;
  /** logradouro + número + complemento */
  street: string;
  district: string;
  city: string;
  state: string;
  zip?: string;
};

export type Unit = {
  slug: string;
  city: string;
  /** rótulo curto exibido na UI */
  label: string;
  state: string;
  country: string;
  /** WhatsApp em formato internacional só-dígitos (central, real) */
  whatsapp: string;
  /** true enquanto não houver número DEDICADO da unidade (hoje central) */
  whatsappPlaceholder: boolean;
  addresses: UnitAddress[];
};

/** WhatsApp central real (site atual). Formato E.164 só-dígitos. */
export const CENTRAL_WHATSAPP = "551140001516";
export const CENTRAL_PHONE_DISPLAY = "+55 11 4000-1516";
/** Horário de funcionamento (site atual). */
export const HORARIO = "Segunda a sábado, mediante agendamento prévio";

export const UNITS: Unit[] = [
  {
    slug: "sao-paulo",
    city: "São Paulo",
    label: "São Paulo",
    state: "SP",
    country: "Brasil",
    whatsapp: CENTRAL_WHATSAPP,
    whatsappPlaceholder: true,
    addresses: [
      { name: "Casa Conceito — Jardim Paulista", street: "Av. Nove de Julho, 4035", district: "Jardim Paulista", city: "São Paulo", state: "SP", zip: "01407-100" },
      { name: "ROM Concept — Avenida Brasil", street: "Av. Brasil, 126", district: "Jardim Paulista", city: "São Paulo", state: "SP", zip: "01430-000" },
      { name: "ROM Concept — Shopping Iguatemi", street: "Av. Brig. Faria Lima, 2232, 9º andar", district: "Jardim Paulistano", city: "São Paulo", state: "SP" },
    ],
  },
  {
    slug: "rio-de-janeiro",
    city: "Rio de Janeiro",
    label: "Rio de Janeiro",
    state: "RJ",
    country: "Brasil",
    whatsapp: CENTRAL_WHATSAPP,
    whatsappPlaceholder: true,
    addresses: [
      { name: "Galeria Vitrine — Ipanema", street: "Rua Visconde de Pirajá, 580, sala 324", district: "Ipanema", city: "Rio de Janeiro", state: "RJ", zip: "22410-002" },
    ],
  },
  {
    slug: "brasilia",
    city: "Brasília",
    label: "Brasília",
    state: "DF",
    country: "Brasil",
    whatsapp: CENTRAL_WHATSAPP,
    whatsappPlaceholder: true,
    addresses: [
      { name: "Instituto de Beleza Helio — Lago Sul", street: "SHIS QL 08, Conjunto 01, Casa 03", district: "Lago Sul", city: "Brasília", state: "DF", zip: "71630-365" },
    ],
  },
  {
    slug: "manaus",
    city: "Manaus",
    label: "Manaus",
    state: "AM",
    country: "Brasil",
    whatsapp: CENTRAL_WHATSAPP,
    whatsappPlaceholder: true,
    addresses: [
      { name: "Edifício The Office — Adrianópolis", street: "Av. Mário Ypiranga, 315, sala 710", district: "Adrianópolis", city: "Manaus", state: "AM", zip: "69057-000" },
    ],
  },
  {
    slug: "miami",
    city: "Miami",
    label: "Miami",
    state: "FL",
    country: "Estados Unidos",
    whatsapp: CENTRAL_WHATSAPP,
    whatsappPlaceholder: true,
    addresses: [
      { name: "Azala Skin Clinic — Coconut Grove", street: "3444 Main Hwy, Unit 23, 3rd floor", district: "Coconut Grove", city: "Miami", state: "FL" },
    ],
  },
];

/** Unidade padrão para CTAs genéricos (sem contexto de unidade). */
export const DEFAULT_UNIT = UNITS[0];

export function getUnit(slug?: string): Unit {
  if (!slug) return DEFAULT_UNIT;
  return UNITS.find((u) => u.slug === slug) ?? DEFAULT_UNIT;
}
