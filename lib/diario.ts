import posts from "./diario-posts.json";

/**
 * Diário (§11 P2) — blog institucional. Os 17 posts foram MIGRADOS do site
 * atual (WordPress, via REST API) para `diario-posts.json`: HTML sanitizado
 * (sem wrappers/Elementor), capas otimizadas em webp. É conteúdo provisório,
 * para visualizar o formato; a Lu revisa/edita caso a caso.
 *
 * ⚠️ TODO:CONFIRMAR autoria/data definitivas e revisão editorial dos textos.
 */
export type DiarioPost = {
  slug: string;
  title: string;
  /** ISO YYYY-MM-DD */
  date: string;
  tema: string;
  excerpt: string;
  readingMin: number;
  cover: string;
  coverAlt: string;
  /** HTML sanitizado (apenas p/h2/h3/ul/li/strong/em/blockquote/hr). */
  html: string;
};

/** Posts ordenados do mais recente ao mais antigo. */
export const DIARIO = posts as DiarioPost[];

export const getPost = (slug: string): DiarioPost | undefined =>
  DIARIO.find((p) => p.slug === slug);

/** Temas presentes, na ordem de primeira aparição. */
export const TEMAS = Array.from(new Set(DIARIO.map((p) => p.tema)));

/** Data formatada em pt-BR (ex.: "8 de janeiro de 2026"). */
export function formatData(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const meses = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",
  ];
  return `${d} de ${meses[m - 1]} de ${y}`;
}
