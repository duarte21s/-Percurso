# Plano de implementação — Fundações (design da Apple)

Deriva de [`../specs/2026-08-28-fundacoes-design-apple.md`](../specs/2026-08-28-fundacoes-design-apple.md).
Um PR. Sem mudança de comportamento visível.

> **CONCLUÍDO (2026-08-28).** Todas as fases feitas e verificadas ao vivo.
> `motion@13.1.1` em `dependencies`. `globals.css` na paleta Brasa (16 tokens +
> tipografia + material/elevação). `lib/motion/{springs,preferencias,usarPressao}.ts`
> + `components/ui/Materializar.tsx` — nenhuma página consome ainda.
> `tsc` + `npm run build` limpos. Contraste sobre `--surface`: text 15.9, text-2
> 7.2, text-3 3.3, accent 7.6, ok 7.4, err 4.7 — todos passam. Screenshots
> antes/depois não foram possíveis (Browser pane headless); regressão conferida
> por DOM + rotas 200 + logs sem erro. Próximo: sub-projeto 2 (Chrome global).
> Ajuste em relação ao spec: a tipografia de display já seguia o princípio da
> Apple (tracking negativo, leading apertado) — em vez de mexer nos valores
> (o que violaria "zero mudança visível"), só centralizei `h2.title` e
> `h1.hero-h1` nos tokens `--track-*` e adicionei `font-optical-sizing: auto`.
> Também troquei os `rgba(201,162,39,…)` de âmbar antigo espalhados pelo CSS
> (globals + 2 módulos) e alguns neutros frios (scrollbar, grade) pela versão
> quente.

---

## Fase 0 — Preparação

- [ ] Dev server rodando (`preview_start` name `percurso`).
- [ ] Screenshots "antes": `/`, `/comunidade`, `/painel`, `/estudar`.
- [ ] `npm install motion` — confirma que entra em `dependencies` do `package.json`.

**Verificação:** `npm run build` ainda compila com a dep nova, nada mais mudou.

---

## Fase 1 — Tokens de cor

**Arquivo:** `app/globals.css` (bloco `:root`, ~linhas 13–39).

- [ ] Trocar os 16 valores conforme a tabela da Seção A do spec. Nomes de token intactos.
  - superfícies: `--bg #0b0906`, `--bg-2 #100d09`, `--surface #16130f`, `--surface-2 #1b1712`, `--surface-3 #221d17`
  - linhas: `--line #2b241c`; `--line-soft`/`--line-strong` passam a usar `rgba(255,246,235, …)` (mesmos alphas 0.06 / 0.14)
  - texto: `--text #f2ede4`, `--text-2 #a9a096`, `--text-3 #6f665a`
  - acento: `--accent #d69a4a`, `--accent-2 #ecbb72`, `--accent-dim rgba(214,154,74,0.15)`, `--accent-line rgba(214,154,74,0.34)`
  - semânticos: `--ok #93ac78`, `--err #c0674f`
- [ ] Atualizar o comentário `/* acento único (âmbar quente) */` → `/* acento único (latão quente) */`.

**Verificação:** HMR recarrega; site inteiro na paleta Brasa; nenhum erro no `preview_logs`.

---

## Fase 2 — Tokens de tipografia + aplicação

**Arquivo:** `app/globals.css`.

- [ ] Adicionar ao `:root`, após o bloco de ritmo:
  ```css
  /* tracking por tamanho — nunca um valor só */
  --track-hero:    -0.028em;
  --track-display: -0.021em;
  --track-title:   -0.014em;
  --track-body:     0;
  /* leading — inverso do tamanho */
  --lead-display:  1.05;
  --lead-title:    1.15;
  --lead-body:     1.65;
  --lead-dense:    1.4;
  ```
- [ ] `grep -n "var(--serif)" app/globals.css` → em cada regra que seta a serif de display:
  - `h1.hero-h1` → `letter-spacing: var(--track-hero); line-height: var(--lead-display);`
  - `.title` → `letter-spacing: var(--track-display); line-height: var(--lead-display);`
  - headings serif de seção (h2/h3) → `letter-spacing: var(--track-title); line-height: var(--lead-title);`
  - acrescentar `font-optical-sizing: auto;` no seletor da família serif.
- [ ] Não tocar em nada que já tenha `letter-spacing` próprio (rótulos versaletes `.eyebrow` etc.).

**Verificação:** headings visualmente iguais ou um pouco mais "apertados" nos tamanhos grandes; corpo inalterado; sem quebra de layout.

---

## Fase 3 — Tokens de material e profundidade

**Arquivo:** `app/globals.css`.

- [ ] Adicionar ao `:root`:
  ```css
  --material-chrome:  rgba(22, 19, 15, 0.72);
  --material-borda:   rgba(255, 246, 235, 0.08);
  --scrim:            rgba(6, 5, 3, 0.55);
  --elev-1: 0 1px 2px rgba(6,5,3,0.40), 0 2px 8px rgba(6,5,3,0.24);
  --elev-2: 0 4px 12px rgba(6,5,3,0.40), 0 12px 32px rgba(6,5,3,0.30);
  --elev-3: 0 8px 24px rgba(6,5,3,0.45), 0 24px 60px rgba(6,5,3,0.40);
  ```
- [ ] Comentário curto no bloco explicando que os consumidores (Nav translúcido,
  sheets) chegam no sub-projeto 2 — os tokens ficam prontos.

**Verificação:** nenhum efeito visual (nada consome ainda); `build` limpo.

---

## Fase 4 — Primitivas de motion

- [ ] `lib/motion/springs.ts` — `PADRAO`, `RAPIDO`, `GAVETA`, `MOMENTO`, `projetar()`, `elastico()`. Sem `"use client"` (é só dados + funções puras).
- [ ] `lib/motion/preferencias.ts` (`"use client"`) — `usarMedia()` interno; `usarMovimentoReduzido`, `usarTransparenciaReduzida`, `usarContrasteAlto`; `movimento(preset, reduzido)`. Estado inicial `false` (concordância SSR/primeiro paint).
- [ ] `lib/motion/usarPressao.ts` (`"use client"`) — `usarPressao(ref, escala=0.97)`. `pointerdown` → `animate(el, {scale}, RAPIDO)`; `pointermove` > 10px → volta; `pointerup`/`pointercancel` → 1. Cleanup. No-op se `usarMovimentoReduzido()`.
- [ ] `components/ui/Materializar.tsx` (`"use client"`) — `<motion.div>` de `motion/react`; `initial/animate/exit` com blur+scale+opacity e transição `GAVETA`; sob reduced-motion **ou** reduced-transparency → cross-fade de opacidade 0.15s. Caller envolve em `<AnimatePresence>`.

**Verificação:** `npx tsc --noEmit` limpo (checar os tipos do `motion` / `motion/react`).

---

## Fase 5 — Verificação final

- [ ] `npx tsc --noEmit` limpo.
- [ ] `npm run build` compila.
- [ ] `grep -rn "lib/motion" app/ components/` → só os próprios arquivos de `lib/motion` e `Materializar` (nenhuma página importa ainda).
- [ ] `grep -rn "dangerouslySetInnerHTML" app/ components/ lib/` → vazio (mantém).
- [ ] Screenshots "depois" das 4 rotas; comparar com as "antes".
- [ ] QA visual passando por todas as rotas da Seção E do spec.
- [ ] Contraste: `--text-2` sobre `--surface` ≥ 4.5:1; `--text-3` ≥ 3:1; `--ok`/`--err` ≥ 3:1. Se `--text-3` reprovar, subir para `#7a7064`.
- [ ] Toggle `prefers-reduced-motion` e `prefers-reduced-transparency` no preview — `@keyframes` existentes seguem suprimidos.
- [ ] Marcar o sub-projeto 1 como concluído neste plano e no spec.

---

## Rollback

Tudo em um PR. Reverter = `git checkout` do `globals.css`, remover `lib/motion/`,
`components/ui/Materializar.tsx`, e `npm uninstall motion`. Nenhuma migração de
dados, nenhum `.sql`.
