# Chrome global — passe de design da Apple no Percurso

**Data:** 2026-08-28
**Sub-projeto:** 2 de 8 (Chrome global)
**Depende de:** sub-projeto 1 (Fundações) — tokens `--material-*`, `motion`, primitivas.
**Estado:** IMPLEMENTADO. `tsc` + `build` limpos, rotas 200, console limpo.
Animações e blur não verificados visualmente (preview roda como aba oculta →
`motion` pausa e `backdrop-filter` não compõe). Ver ressalva no plano.
`backdrop-filter` teve que virar `blur()` de uma função só (o pipeline de CSS
descarta múltiplas funções). Não commitado.

---

## Contexto

Segundo sub-projeto do programa "design da Apple no site inteiro" (ver
[`2026-08-28-fundacoes-design-apple.md`](2026-08-28-fundacoes-design-apple.md)).
Cobre o chrome que aparece em toda página: Nav, menu mobile, transição de
página, BarraLeitura, Footer. É onde a sensação Apple começa a aparecer.

### Estado atual do chrome

- `components/layout/Nav.tsx` — header `position: fixed`, classe `is-stuck`
  adicionada por scroll listener quando `scrollY > 40`. Menu mobile por
  `menuAberto` state + classe `is-open`. Body scroll-lock (`is-locked`).
- CSS em `app/globals.css` (~linhas 254–356): `.nav` transparente no topo;
  `.nav.is-stuck` com `rgba(8,8,10,0.72)` + `blur(18px)` + `border-bottom`
  dura de 1px. `.nav-mobile` alterna `display: none` / `block`, fundo
  `rgba(8,8,10,.96)`.
- `components/layout/BarraLeitura.tsx` — fita de progresso, escreve
  `style.width` direto por rAF. Gradiente `var(--accent)`→`var(--accent-2)`.
- `components/layout/Footer.tsx` + CSS — grid de 4 colunas, `var(--bg-2)`.
- **Nenhuma transição de página.**

### Decisões desta rodada

- **Transição de página:** "um sussurro" — só cross-fade de opacidade de
  ~120ms; some sob reduced-motion.
- **Material do Nav:** sempre ligado (leve no topo, intensifica ao rolar) —
  abordagem da Apple: o chrome flutua, o conteúdo passa por baixo.

---

## Design

### A — Nav (`components/layout/Nav.tsx` + `app/globals.css`)

**Material sempre ligado.** `.nav` base:
```css
background: var(--material-chrome);
backdrop-filter: blur(14px) saturate(160%);
-webkit-backdrop-filter: blur(14px) saturate(160%);
border-bottom: 1px solid transparent;
```
`.nav.is-stuck` intensifica (não "aparece"):
```css
background: rgba(22, 19, 15, 0.82);
backdrop-filter: blur(22px) saturate(180%);
-webkit-backdrop-filter: blur(22px) saturate(180%);
```

**Scroll-edge no lugar da borda dura.** Remover `border-bottom-color` do
stuck. Adicionar `.nav::after`:
```css
content: ""; position: absolute; left: 0; right: 0; top: 100%; height: 12px;
background: linear-gradient(var(--bg), transparent);
opacity: 0; transition: opacity .4s var(--ease); pointer-events: none;
```
`.nav.is-stuck::after { opacity: 1; }`

**Pressão.** `usarPressao` na `<Link className="brand">` e no `<button
className="nav-toggle">` (cada um com `useRef`). No-op sob reduced-motion
(embutido no hook).

**Fallbacks (CSS, no fim do bloco NAV):**
```css
@media (prefers-reduced-transparency: reduce) {
  .nav, .nav.is-stuck { background: var(--surface); backdrop-filter: none; -webkit-backdrop-filter: none; }
  .nav-mobile { background: var(--surface); backdrop-filter: none; }
}
@media (prefers-contrast: more) {
  .nav, .nav.is-stuck { background: var(--bg); border-bottom: 1px solid var(--line-strong); }
  .nav::after { display: none; }
}
```

### B — Menu mobile (`components/layout/Nav.tsx`)

Trocar o `<div className={\`nav-mobile${menuAberto ? " is-open" : ""}\`}>` por
`motion/react`:
```tsx
<AnimatePresence>
  {menuAberto && (
    <motion.div className="nav-mobile"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={reduzido ? { duration: 0.15 } : GAVETA}>
      {/* links + botão, como hoje */}
    </motion.div>
  )}
</AnimatePresence>
```
- `reduzido` = `usarMovimentoReduzido()`.
- CSS `.nav-mobile`: tirar `display: none` / `.is-open { display: block }`
  (o `AnimatePresence` controla a presença). Fundo →
  `var(--material-chrome)` + `blur(20px)`. Desliza de cima = consistência
  espacial (ancorado ao nav).
- Body scroll-lock (`is-locked`) e o fechar-ao-navegar (`useEffect` em
  `caminho`) ficam.
- O hambúrguer→X (`.nav-toggle span`) já anima por CSS; manter.

### C — Transição de página (`app/(site)/template.tsx` — NOVO)

```tsx
"use client";
import { motion } from "motion/react";
import { usarMovimentoReduzido } from "@/lib/motion/preferencias";

export default function Template({ children }: { children: React.ReactNode }) {
  const reduzido = usarMovimentoReduzido();
  if (reduzido) return <>{children}</>;
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.12 }}>
      {children}
    </motion.div>
  );
}
```
- `template.tsx` remonta a cada navegação → habilita a animação de entrada.
- Só opacidade. Sem `y`. Sem `exit` (não dá para animar saída de `template`).
- Re-execução de efeitos filhos a cada navegação é inócua para um fade de
  120ms: as páginas são Server Components; os client components com estado
  (ex.: `Comunidade`) já remontam em troca de rota.

### D — BarraLeitura + Footer

Sem mudança estrutural. Já herdaram os tokens quentes. `.read-bar` rastreia o
scroll 1:1 (`transition: width .1s linear`) — que é o comportamento certo
(feedback contínuo, §1 da skill). Fica.

---

## Fora do escopo

- Sheets / drawers de conteúdo (Compositor, menu ⋯ da Comunidade) →
  sub-projeto 3.
- Qualquer gesto (swipe para fechar o menu) → depois.
- Reescrever o hero.
- Migrar botões do site inteiro para `usarPressao` — só marca e toggle do nav
  aqui; cada superfície adota no seu sub-projeto.

## Verificação

1. `npx tsc --noEmit` + `npm run build` limpos.
2. Rotas respondem (200 / 307 esperado sem sessão).
3. Toggle no preview:
   - `prefers-reduced-transparency` → nav e menu ficam sólidos, sem blur.
   - `prefers-contrast: more` → nav com `--bg` + borda forte, sem scroll-edge.
   - `prefers-reduced-motion` → menu abre por fade (sem slide); `template`
     renderiza direto (sem fade de página).
4. Menu mobile: abre e fecha com spring; body trava o scroll; fecha ao navegar.
5. Nav lê bem sobre o hero (com o livro travado no scroll) e sobre conteúdo
   normal, no topo e depois de rolar.
6. `preview_logs` sem erro novo.
7. `grep -rn "@/lib/motion" components/ app/` — agora inclui `Nav.tsx` e
   `app/(site)/template.tsx` além do `Materializar`.

## Notas

- Repo ainda sem commits — nada commitado.
