"use client";

import { useEffect, useRef, useState } from "react";
import { SHOW_IMAGE_SIZE_TAGS } from "@/lib/flags";
import { getSlotImage, uploadSlotImage, clearSlotImage } from "@/lib/qa-uploads";

/**
 * Selo com o tamanho ideal da imagem (fase de revisão · lib/flags.ts) +
 * "provador": o cliente clica, sobe uma foto e vê como fica na hora. A foto
 * fica salva (Storage do QA), então persiste e o estúdio recebe a escolha.
 * Vive DENTRO de um pai `relative`; a imagem enviada cobre esse pai.
 * Some do site inteiro com SHOW_IMAGE_SIZE_TAGS = false (nada vaza pra produção).
 */
export function SizeTag({ size, className, imgClassName }: { size?: string; className?: string; imgClassName?: string }) {
  const tagRef = useRef<HTMLSpanElement>(null);
  const [slot, setSlot] = useState<string | null>(null);
  const [img, setImg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!SHOW_IMAGE_SIZE_TAGS || !tagRef.current) return;
    // "Endereço" estável do slot: caminho da página + posição do selo nela.
    const roots = Array.from(document.querySelectorAll("[data-qa-imgslot]"));
    const idx = roots.indexOf(tagRef.current);
    const path = (location.pathname || "/").replace(/\/+$/, "") || "/home";
    const s = `${path}#${idx >= 0 ? idx : "x"}`;
    setSlot(s);
    getSlotImage(s).then((u) => u && setImg(u));
  }, []);

  if (!SHOW_IMAGE_SIZE_TAGS || !size) return null;

  async function onPick(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files && e.target.files[0];
    e.target.value = "";
    if (!file || !slot) return;
    if (!/^image\//.test(file.type)) return alert("Envie um arquivo de imagem.");
    if (file.size > 8 * 1024 * 1024) return alert("Imagem acima de 8MB — escolha uma menor.");
    setBusy(true);
    try {
      const url = await uploadSlotImage(slot, file);
      setImg(url);
    } catch {
      alert("Não consegui subir a imagem. Tente de novo.");
    } finally {
      setBusy(false);
    }
  }

  async function onClear() {
    if (!slot) return;
    setImg(null);
    try {
      await clearSlotImage(slot);
    } catch {
      /* silencioso — a UI já voltou ao original */
    }
  }

  return (
    <>
      {img ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={img}
          alt=""
          className={`pointer-events-none absolute inset-0 z-0 h-full w-full object-cover ${imgClassName ?? ""}`}
        />
      ) : null}
      <span
        ref={tagRef}
        data-qa-imgslot
        className={`absolute bottom-2 right-2 z-20 flex items-center gap-2 border border-brass/50 bg-black/60 px-2 py-1 text-[0.7rem] font-medium tracking-[0.1em] text-brass ${className ?? ""}`}
      >
        <span>{size}</span>
        <span aria-hidden className="opacity-40">
          ·
        </span>
        <label
          className="cursor-pointer whitespace-nowrap underline decoration-brass/50 underline-offset-2 hover:text-white"
          title="Enviar uma imagem de teste para ver como fica aqui"
        >
          {busy ? "enviando…" : img ? "trocar" : "↑ testar imagem"}
          <input type="file" accept="image/*" hidden onChange={onPick} />
        </label>
        {img ? (
          <>
            <a
              href={img}
              download
              className="hover:text-white"
              title="Baixar a imagem enviada"
            >
              ⬇
            </a>
            <button
              type="button"
              onClick={onClear}
              className="hover:text-white"
              title="Remover e voltar ao original"
            >
              ×
            </button>
          </>
        ) : null}
      </span>
    </>
  );
}
