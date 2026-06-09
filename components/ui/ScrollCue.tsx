"use client";

/**
 * CTA de scroll do hero — seta para baixo com bounce sutil.
 * Clica → rola uma altura de viewport (suave; respeita scroll-behavior).
 * Acessível: botão real com aria-label; animação só sob no-preference.
 */
export function ScrollCue() {
  const onClick = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Rolar para explorar"
      className="flex items-center justify-center p-2 text-white/70 transition-colors hover:text-white"
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="scroll-cue-bounce"
      >
        <path
          d="M5 8.5l7 7 7-7"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
