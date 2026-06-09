# Checkpoint — P0 (Fundação + Home)

Stack: **Next.js 15.5.19 (App Router) · TypeScript · Tailwind v4 · GSAP · Lenis**
Branch: `claude/fervent-lamarr-9dac8f`

## Pronto nesta fatia
- **Scaffold Next.js** com tokens de design (§2) em `app/globals.css` via `@theme` + CSS vars.
- **S0 TopBar** — transparente→ink ao scrollar, nav ≤6, CTA persistente, menu mobile acessível.
- **S1 Hero** — imagem full-bleed, `next/image` `priority` (LCP), scrim p/ contraste AA, render sem JS, sem CLS.
- **S2 Serviços** — scroll horizontal GSAP/ScrollTrigger com **fallback estático** sob `prefers-reduced-motion`; cards = links por teclado; Sobrancelha 🎯 em primeiro.
- **S5 Serviços Personalizados** — copy + módulo de depoimentos rotativo (plano B: perfis anônimos/profissionais), troca por teclado e toque.
- **S11 Rodapé** — colunas PT, ateliês, boilerplate citável, © 2026.
- **WhatsApp** — `lib/whatsapp.ts` com deep-link contextual {serviço}+{unidade}.
- **SEO base** — metadata, OpenGraph/Twitter, `sitemap.ts`, `robots.ts`, JSON-LD `MedicalBusiness`+`BeautySalon`.
- **Componentes base** — `ImageSlot` (slot nomeado + placeholder neutro + alt real), `Cta` (por convite), `Kicker`.
- **Imagens** — `hero.png` otimizada de 13,6 MB → ~1 MB; `layer-2.png` 2 MB → 72 KB.
- **Verificado** — build de produção limpo; desktop + mobile + menu mobile + fallback de motion conferidos no preview.

## Pendências (TODO:CONFIRMAR rastreáveis no código)
| Onde | O quê |
|------|-------|
| `globals.css`, `layout.tsx` | Fontes do Figma (fallback Fraunces/Hanken) + hex exatos |
| `lib/units.ts` | **WhatsApp por unidade** (placeholders `5511000000000` etc.) |
| `lib/site.ts` | Domínio de produção, handles de redes (sameAs) |
| `layout.tsx` | Imagem-capa OG definitiva |
| `PersonalizedServices.tsx` | Direitos das celebridades (hoje plano B) |
| Slots de imagem | Fotos finais (ver notas `IMG:` em `lib/services.ts` e `ImageSlot`) |

## Fora de escopo (próximas fatias)
- **P1:** página de Sobrancelhas, FAQ, S6 Fundadora, S3 Beleza Discreta.
- **P2:** Instituto, Lu Medical, Localizações, Diário (MDX).
- **P3:** S4 pins + "Be Bold" textura, **Lenis** smooth-scroll, schema completo, `/llms.txt`, Core Web Vitals.

## Como rodar
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
```

## Notas técnicas
- Next fixado em 15.5.19 (corrige CVE-2025-66478). Restam 2 vulnerabilidades *moderate* de um `postcss` transitivo interno do Next — serão resolvidas por patch futuro do Next (o "fix" automático rebaixaria para Next 9).
- O caminho animado do GSAP (S2) só ativa com `prefers-reduced-motion: no-preference`; o preview força reduced-motion, então valida-se ali o fallback. Conferir a animação pinada em navegador com movimento ligado.
- O rip antigo do ever.co.id foi movido para `reference/` (referência visual, não base de código).
