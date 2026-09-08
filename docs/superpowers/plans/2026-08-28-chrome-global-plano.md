# Plano — Chrome global (design da Apple)

Deriva de [`../specs/2026-08-28-chrome-global-design-apple.md`](../specs/2026-08-28-chrome-global-design-apple.md).
Um PR.

> **CONCLUÍDO (2026-08-28), com uma ressalva de verificação.**
> `globals.css`: `.nav` com material sempre ligado (`--material-chrome` +
> `backdrop-filter: blur(16px)`), `.is-stuck` intensifica (`blur(24px)` + bg
> 0.82), `::after` scroll-edge, `.nav-mobile` com material, `@media
> prefers-reduced-transparency` e `prefers-contrast` fallbacks.
> `Nav.tsx`: menu mobile por `<AnimatePresence>` + `<motion.div>` (spring
> `GAVETA`, `y:-12`, reduced-motion → fade 0.15s); `usarPressao` na marca e no
> toggle (`usarPressao` virou genérico `<T extends HTMLElement>`).
> `app/(site)/template.tsx` (novo): fade de opacidade 120ms, some sob
> reduced-motion. `tsc` + `build` limpos; rotas 200; navegação client OK;
> console limpo em aba nova; sem erro no servidor.
>
> **Não verificado visualmente:** o preview roda a página como aba oculta
> (`document.visibilityState === "hidden"`), o que (a) pausa animações do
> `motion` no frame `initial` e (b) não compõe `backdrop-filter`. Mesma
> limitação dos screenshots. Precisa de olho num navegador real para: o blur
> do nav, a mola do menu mobile, o `scale` do `usarPressao`, o fade de página.
> O CSS segue o padrão de `backdrop-filter` que já funciona no site
> (`.hero-kicker`).
>
> **Achado:** o pipeline de CSS do Turbopack/Lightning descarta
> `backdrop-filter` com **mais de uma função** (`blur() saturate()`) e o
> `-webkit-backdrop-filter` (propriedade não reconhecida no Chrome 148 deste
> ambiente). O `.nav.is-stuck` antigo usava `blur(18px) saturate(140%)` — ou
> seja, **o blur do nav provavelmente nunca chegou a funcionar** antes deste
> sub-projeto. Regra daqui pra frente: `backdrop-filter` só com `blur()`.

## Fase 1 — Nav: material sempre ligado + scroll-edge (`app/globals.css`)

- [ ] `.nav` base: `background: var(--material-chrome)` + `backdrop-filter: blur(14px) saturate(160%)` (+ `-webkit-`), `border-bottom: 1px solid transparent`.
- [ ] `.nav.is-stuck`: `background: rgba(22,19,15,0.82)` + `blur(22px) saturate(180%)`; remover `border-bottom-color`.
- [ ] `.nav::after` — gradiente scroll-edge (12px, `var(--bg)`→transparent, `opacity: 0`); `.nav.is-stuck::after { opacity: 1 }`.
- [ ] `.nav-mobile`: fundo → `var(--material-chrome)` + `blur(20px)`; tirar `display: none` e a regra `.nav-mobile.is-open { display: block }`.
- [ ] Blocos `@media (prefers-reduced-transparency: reduce)` e `@media (prefers-contrast: more)` no fim da seção NAV.

**Verificação:** HMR; nav visível e translúcido já no topo; intensifica ao rolar.

## Fase 2 — Nav: menu mobile com spring + pressão (`components/layout/Nav.tsx`)

- [ ] Imports: `motion`, `AnimatePresence` de `motion/react`; `GAVETA` de `@/lib/motion/springs`; `usarMovimentoReduzido` de `@/lib/motion/preferencias`; `usarPressao` de `@/lib/motion/usarPressao`; `useRef`.
- [ ] `const reduzido = usarMovimentoReduzido();`
- [ ] `refMarca` e `refToggle` (`useRef<HTMLElement|null>` / `useRef<HTMLButtonElement|null>`), `usarPressao(refMarca)`, `usarPressao(refToggle)`; anexar refs na `<Link className="brand">` e no `<button className="nav-toggle">`.
  - `<Link>` não aceita `ref` de HTMLElement direto no App Router? Aceita (Next 16, `next/link` encaminha ref). Tipar `useRef<HTMLAnchorElement>(null)`.
- [ ] Trocar o `<div className="nav-mobile ...">` por `<AnimatePresence>{menuAberto && <motion.div className="nav-mobile" initial={{opacity:0,y:-12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}} transition={reduzido ? {duration:0.15} : GAVETA}>...</motion.div>}</AnimatePresence>`.
- [ ] Conteúdo interno do menu (links + botão) inalterado.

**Verificação:** `tsc`; menu abre/fecha animado; toggle e marca encolhem no toque; scroll-lock e fechar-ao-navegar seguem.

## Fase 3 — Transição de página (`app/(site)/template.tsx` — NOVO)

- [ ] Client component; `usarMovimentoReduzido()` → se `true`, `return <>{children}</>`.
- [ ] Senão `<motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.12}}>{children}</motion.div>`.

**Verificação:** navegar entre `/`, `/entrar`, `/comunidade` — leve fade; nada pisca duas vezes.

## Fase 4 — Verificação final

- [ ] `npx tsc --noEmit` + `npm run build`.
- [ ] Rotas: `/`, `/comunidade`, `/entrar`, `/painel`, `/estudar` (200/307).
- [ ] `preview_logs` sem erro.
- [ ] Toggle `prefers-reduced-transparency` / `prefers-contrast` / `prefers-reduced-motion` via `resize_window` colorScheme não cobre esses — usar `javascript_tool` para emular (`matchMedia` mock) ou DevTools rendering; conferir que os fallbacks CSS batem e o menu vira fade.
- [ ] Nav sobre o hero e sobre conteúdo, topo e rolado.
- [ ] `grep -rn "@/lib/motion" components/ app/`.
- [ ] Marcar concluído no spec e neste plano.

## Rollback

`git checkout` de `globals.css` e `Nav.tsx`; apagar `app/(site)/template.tsx`.
