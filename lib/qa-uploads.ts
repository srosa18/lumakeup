/**
 * Provador de imagens (fase de revisão · lib/flags.ts).
 *
 * Guarda, por "slot" de imagem, a foto de teste que o cliente sobe no site
 * para ver como fica em tempo real. Persiste no mesmo Supabase do widget de QA
 * (banco único multi-cliente, projeto "lumakeup"):
 *   - arquivo → Storage bucket "qa-uploads"
 *   - mapa slot→url → tabela qa_config (key = "slotimg:<slot>")
 *
 * Chave anon pública (client-side), igual à do widget. Sem isso, o provador
 * some junto com os selos quando SHOW_IMAGE_SIZE_TAGS = false.
 */
// Banco único de QA (projeto Supabase "rosaltd-discovery" / ref kddvtnuhdlsxohhpvqjv).
// O projeto anterior (itwaxivhuxtnatjuoebe) foi deletado; este é o banco ativo que o
// widget de QA também usa. Chave anon pública (client-side), igual à do widget.
const SUPABASE_URL = "https://kddvtnuhdlsxohhpvqjv.supabase.co";
const ANON =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkZHZ0bnVoZGxzeG9oaHB2cWp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI0MTA5OTQsImV4cCI6MjA5Nzk4Njk5NH0.mF-F6akejAvjwsGS9QPclzgoowFLpt_IQ99kZe0J2kY";
const PROJECT = "lumakeup";
const BUCKET = "qa-uploads";
const KEY_PREFIX = "slotimg:";

function headers(json = false): Record<string, string> {
  const h: Record<string, string> = {
    apikey: ANON,
    Authorization: `Bearer ${ANON}`,
  };
  if (json) h["Content-Type"] = "application/json";
  return h;
}

// Carrega TODOS os slots do projeto de uma vez (cache por sessão) — 1 request.
let cache: Promise<Record<string, string>> | null = null;
function loadAll(): Promise<Record<string, string>> {
  if (cache) return cache;
  const url =
    `${SUPABASE_URL}/rest/v1/qa_config` +
    `?project=eq.${PROJECT}&key=like.${encodeURIComponent(KEY_PREFIX + "*")}&select=key,value`;
  cache = fetch(url, { headers: headers() })
    .then((r) => (r.ok ? r.json() : []))
    .then((rows: Array<{ key: string; value: string }>) => {
      const map: Record<string, string> = {};
      rows.forEach((r) => {
        map[r.key.slice(KEY_PREFIX.length)] = r.value;
      });
      return map;
    })
    .catch(() => ({}));
  return cache;
}

export async function getSlotImage(slot: string): Promise<string | null> {
  const all = await loadAll();
  return all[slot] || null;
}

export async function uploadSlotImage(slot: string, file: File): Promise<string> {
  const ext = (file.type && file.type.split("/")[1]) || "png";
  const safe = slot.replace(/[^a-zA-Z0-9._-]/g, "_").slice(-48);
  const rand = Math.random().toString(36).slice(2, 8);
  const path = `${PROJECT}/_slots/${safe}-${rand}.${ext}`;
  const up = await fetch(`${SUPABASE_URL}/storage/v1/object/${BUCKET}/${path}`, {
    method: "POST",
    headers: { ...headers(), "Content-Type": file.type || "application/octet-stream" },
    body: file,
  });
  if (!up.ok) throw new Error(`upload HTTP ${up.status}`);
  const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${path}`;

  const save = await fetch(`${SUPABASE_URL}/rest/v1/qa_config`, {
    method: "POST",
    headers: { ...headers(true), Prefer: "resolution=merge-duplicates" },
    body: JSON.stringify({ project: PROJECT, key: KEY_PREFIX + slot, value: publicUrl }),
  });
  if (!save.ok) throw new Error(`save HTTP ${save.status}`);

  cache = null; // invalida o cache pra próximos carregamentos
  return publicUrl;
}

export async function clearSlotImage(slot: string): Promise<void> {
  const url =
    `${SUPABASE_URL}/rest/v1/qa_config` +
    `?project=eq.${PROJECT}&key=eq.${encodeURIComponent(KEY_PREFIX + slot)}`;
  const r = await fetch(url, { method: "DELETE", headers: headers() });
  if (!r.ok) throw new Error(`delete HTTP ${r.status}`);
  cache = null;
}
