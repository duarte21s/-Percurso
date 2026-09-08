# Fundações — passe de design da Apple no Percurso

**Data:** 2026-08-28
**Sub-projeto:** 1 de 8 (Fundações)
**Estado:** IMPLEMENTADO — paleta Brasa no site inteiro, `motion@13` instalado,
4 primitivas criadas (não consumidas ainda). `tsc` + `build` limpos; contraste
verificado ao vivo. Não commitado (repo sem histórico).

---

## Contexto

O usuário quer que **o site inteiro** do Percurso (não só a aba Comunidade)
adote a linguagem de design da Apple — aparência **e** comportamento —
mantendo a identidade do produto. Fonte da abordagem: skill `apple-design`
(WWDC *Designing Fluid Interfaces* 2018, *The Details of UI Typography* 2020,
*Principles of Great Design* 2026), traduzida para a web.

Isto é um programa, não uma feature. Cada sub-projeto tem seu próprio ciclo
spec → plano → implementação. Este documento cobre **só o sub-projeto 1,
Fundações** — a base global de que todos os outros dependem.

### Decomposição do programa

| # | Sub-projeto | Escopo |
|---|---|---|
| 1 | **Fundações** (este spec) | tokens de cor (nova paleta), sistema tipográfico, primitivas de motion, tokens de material/profundidade. Zero mudança de layout. |
| 2 | Chrome global | Nav translúcido com scroll-edge, Footer, BarraLeitura, transições de página. |
| 3 | Comunidade | gestos no feed, sheet de comentários, menu ⋯, compositor como sheet, motion da recompensa (Chama, conquistas). |
| 4 | Estudar / Sessão | feedback de resposta, revelação do gabarito, transição entre questões. |
| 5 | Provas / ModoProva | navegação entre questões, cronômetro, entrega. |
| 6 | Editor de Redação | |
| 7 | Painel + Perfil | |
| 8 | Home + seções de marketing | |

### Decisões travadas nesta rodada de brainstorming

- **Paleta:** direção "Brasa quente" — neutros aquecidos (preto-marrom) + acento
  latão envelhecido `#d69a4a`. Motivo: a paleta atual tem neutros azulados
  frios sob um ouro quente; eles brigam. Aquecer os neutros faz o conjunto
  concordar, sem perder o dourado que é a identidade.
- **Motion:** biblioteca `motion` (sucessor do Framer Motion). É o que a skill
  `apple-design` recomenda para springs interrompíveis com velocity handoff.
  O projeto hoje tem zero libs de animação — esta é a primeira.
- **Fontes:** ficam. Sans = Inter (via `next/font/google`, auto-hospedada).
  Display = serif de sistema (família Palatino: `"Iowan Old Style",
  "Palatino Linotype", Palatino, Georgia, ...`). Já casa com a recomendação da
  Apple de usar a fonte do sistema no display.
- **Modo claro:** não. O site segue **dark-only** (decisão anterior do
  usuário; a Comunidade também é escura como o resto).

---

## Seção A — Sistema de cor

Editar os **valores** em `app/globals.css` bloco `:root`. Todos os nomes de
token (`--bg`, `--surface`, `--accent`, `--ok`, ...) permanecem — por isso
todas as páginas herdam a paleta sem trabalho página a página.

### Tokens (antes → Brasa)

| Token | Antes | Brasa | Nota |
|---|---|---|---|
| `--bg` | `#08080a` | `#0b0906` | |
| `--bg-2` | `#0c0c0f` | `#100d09` | |
| `--surface` | `#121216` | `#16130f` | |
| `--surface-2` | `#17171c` | `#1b1712` | |
| `--surface-3` | `#1e1e24` | `#221d17` | |
| `--line` | `#23232a` | `#2b241c` | |
| `--line-soft` | `rgba(255,255,255,0.06)` | `rgba(255,246,235,0.06)` | branco quente |
| `--line-strong` | `rgba(255,255,255,0.14)` | `rgba(255,246,235,0.14)` | branco quente |
| `--text` | `#efece6` | `#f2ede4` | |
| `--text-2` | `#a2a2ac` | `#a9a096` | era cinza frio → cinza quente |
| `--text-3` | `#6a6a74` | `#6f665a` | |
| `--accent` | `#c9a227` | `#d69a4a` | latão envelhecido |
| `--accent-2` | `#e0bd4c` | `#ecbb72` | |
| `--accent-dim` | `rgba(201,162,39,0.14)` | `rgba(214,154,74,0.15)` | derivado do novo acento |
| `--accent-line` | `rgba(201,162,39,0.32)` | `rgba(214,154,74,0.34)` | derivado do novo acento |
| `--ok` | `#7f9e6a` | `#93ac78` | +contraste (apontado na revisão da Comunidade) |
| `--err` | `#b4655c` | `#c0674f` | terracota — distinto do acento (mais vermelho, menos amarelo) |

### Regras

- `::selection` continua usando `--accent-dim` / `--text`.
- `#c0674f` (err) vs `#d69a4a` (accent): matizes distintos (err ~18°, accent
  ~35°). `err` é usado com parcimônia (erro/exclusão), `accent` para
  interativo. Se no QA visual algum contexto os confundir, puxar `err` mais
  para o vermelho (`#bd6049`).

---

## Seção B — Sistema tipográfico

Adições ao `:root` de `app/globals.css` + aplicação nas classes de heading
existentes. Não reescreve o que já existe além dos headings globais; telas
novas seguem daqui pra frente.

### Novos tokens

```css
:root {
  /* tracking por tamanho — nunca um valor só para todos */
  --track-hero:    -0.028em;  /* h1.hero-h1  clamp(38px,7.2vw,88px) */
  --track-display: -0.021em;  /* .title      clamp(30px,4.4vw,52px) */
  --track-title:   -0.014em;  /* h2/h3 médios */
  --track-body:     0;
  /* rótulos versaletes mantêm o próprio letter-spacing largo (.eyebrow etc.) */

  /* leading — inverso do tamanho */
  --lead-display:  1.05;
  --lead-title:    1.15;
  --lead-body:     1.65;  /* = o line-height atual do body */
  --lead-dense:    1.4;
}
```

### Aplicação

- `h1.hero-h1` → `letter-spacing: var(--track-hero); line-height: var(--lead-display);`
- `.title` → `letter-spacing: var(--track-display); line-height: var(--lead-display);`
- headings serif de seção (h2/h3) → `letter-spacing: var(--track-title); line-height: var(--lead-title);`
- seletor da família serif (`.title`, `.hero-h1`, `h2`, `h3` que usam `var(--serif)`) → `font-optical-sizing: auto;` (inócuo na Palatino de sistema; ativa se um dia entrar serif variável).

### Regras de peso

- Títulos: serif, **400**.
- Ênfase em texto sans: **500** para rótulos de UI, **600** para ênfase forte.
- **Nunca 700** em código novo (fica pesado sobre fundo escuro). O projeto já
  usa até 600 — esse é o teto.
- Hierarquia = peso + tamanho + leading como conjunto, nunca tamanho sozinho.
- Espaçamento interno de componente em `rem`/`em` nas telas novas (respeita o
  tamanho de fonte do usuário). Não retroativo.

---

## Seção C — Primitivas de motion

Adiciona `motion` ao `package.json` (`npm install motion` — última estável;
hoje major 11/12). Novos arquivos em `lib/motion/`. **Nada de página usa
ainda** — é a caixa de ferramentas dos sub-projetos por superfície.

### `lib/motion/springs.ts`

Presets no padrão da Apple (damping/response → API `bounce`/`duration` do
`motion`, que mapeia de perto):

```ts
export const PADRAO  = { type: "spring", bounce: 0,    duration: 0.4 } as const; // mover/reposicionar
export const RAPIDO  = { type: "spring", bounce: 0,    duration: 0.3 } as const;
export const GAVETA  = { type: "spring", bounce: 0.18, duration: 0.3 } as const; // sheet/drawer
export const MOMENTO = { type: "spring", bounce: 0.2,  duration: 0.4 } as const; // só depois de flick

/** Ponto de repouso projetado da velocidade de soltura (px/s). Forma de
 *  decaimento exponencial (não a de física v²/2a) — é a que a Apple usa. */
export function projetar(velocidade: number, decel = 0.998): number {
  return (velocidade / 1000) * decel / (1 - decel);
}

/** Resistência progressiva além de uma borda (rubber-band). */
export function elastico(overshoot: number, dimensao: number, c = 0.55): number {
  return (overshoot * dimensao * c) / (dimensao + c * Math.abs(overshoot));
}
```

- Bounce só onde o gesto carregou momentum (flick, arremesso, soltura de
  drag). Overshoot em menu que só apareceu por fade fica errado.

### `lib/motion/preferencias.ts` (`"use client"`)

Hooks de `matchMedia` com subscribe. Estado inicial `false` (servidor e
primeiro paint do cliente concordam; o `useEffect` corrige — mesmo padrão do
`TempoRelativo` da Comunidade, para não reabrir bug de hidratação).

```ts
export const usarMovimentoReduzido      = () => usarMedia("(prefers-reduced-motion: reduce)");
export const usarTransparenciaReduzida  = () => usarMedia("(prefers-reduced-transparency: reduce)");
export const usarContrasteAlto          = () => usarMedia("(prefers-contrast: more)");

/** Preset, ou transição curta só-opacidade quando o usuário pediu menos movimento. */
export function movimento<T>(preset: T, reduzido: boolean): T | { duration: number } {
  return reduzido ? { duration: 0.15 } : preset;
}
```

### `lib/motion/usarPressao.ts` (`"use client"`)

Feedback de pressão no **pointer-down**, não no release (princípio §1 da
skill). `setPointerCapture` + ~10px de tolerância para cancelar arrastando
pra fora e voltando. Respeita reduced-motion (não faz nada se ligado).

```ts
export function usarPressao(ref: RefObject<HTMLElement | null>, escala = 0.97): void
```

Implementação: `pointerdown` → `animate(el, { scale: escala }, RAPIDO)`;
`pointermove` além de 10px → volta a `scale: 1`; `pointerup`/`pointercancel`
→ `scale: 1`. Cleanup remove os listeners.

### `components/ui/Materializar.tsx` (`"use client"`)

Anima blur + escala + opacidade **juntos** na entrada/saída de superfícies de
vidro (§12 "materialize, don't just fade"). Usa `motion/react`
(`<motion.div>`), o caller envolve em `<AnimatePresence>` para a saída.

```tsx
// reduced-motion OU reduced-transparency → cross-fade de opacidade (0.15s)
// senão → initial {opacity:0, scale:0.98, filter:"blur(8px)"} → animate {1,1,"blur(0)"}, transição GAVETA
export function Materializar({ children, className }: {
  children: React.ReactNode; className?: string;
}): JSX.Element
```

---

## Seção D — Materiais e profundidade

Tokens novos no `:root` de `app/globals.css` + uma folha de regras de uso.

```css
:root {
  --material-chrome:  rgba(22, 19, 15, 0.72);           /* = --surface a 72% */
  --material-borda:   rgba(255, 246, 235, 0.08);        /* borda-topo: luz no material */
  --scrim:            rgba(6, 5, 3, 0.55);              /* escurecer fundo de tarefa modal */

  --elev-1: 0 1px 2px rgba(6,5,3,0.40), 0 2px 8px rgba(6,5,3,0.24);
  --elev-2: 0 4px 12px rgba(6,5,3,0.40), 0 12px 32px rgba(6,5,3,0.30);
  --elev-3: 0 8px 24px rgba(6,5,3,0.45), 0 24px 60px rgba(6,5,3,0.40);
}
```

### Receita de chrome translúcido (documentada, aplicada no sub-projeto 2)

```css
background: var(--material-chrome);
backdrop-filter: blur(20px) saturate(180%);
border-top: 1px solid var(--material-borda);
```

### Regras de uso

- Chrome (Nav, toolbars, sheets) = camada translúcida com conteúdo rolando por
  baixo, não faixa opaca consumindo uma tira fixa.
- Material mais pesado separa região estrutural; mais leve chama para elemento
  interativo. **Nunca empilhar material claro sobre material claro.**
- Superfície maior lê como mais espessa: blur e sombra mais fortes que um chip.
- Dim para focar (tarefa modal: material + `--scrim` + fundo empurrado para
  trás); separar sem bloquear (painel paralelo: translucidez + offset, **sem**
  scrim).
- Sobre superfície translúcida: texto mais contrastado, leve `letter-spacing`,
  cor na camada sólida (não no primeiro plano translúcido).
- Scroll-edge (gradiente curto onde conteúdo encontra chrome flutuante) no
  lugar de borda de 1px — só onde há sobreposição real.
- `@media (prefers-reduced-transparency: reduce)` → materiais viram sólidos
  (sobe opacidade do bg, remove blur).
- `@media (prefers-contrast: more)` → bg quase sólido + borda contrastante.

---

## Seção E — Rollout

**Um PR, nesta ordem:**

1. `npm install motion` (dependência `^11` em `package.json`).
2. `app/globals.css`: trocar os valores dos tokens de cor (Seção A) +
   adicionar tokens de tipografia (Seção B) + tokens de material/elevação
   (Seção D) + aplicar tracking/leading/`optical-sizing` nas classes de
   heading existentes.
3. `lib/motion/springs.ts`, `lib/motion/preferencias.ts`,
   `lib/motion/usarPressao.ts`.
4. `components/ui/Materializar.tsx`.
5. `npx tsc --noEmit` + `npm run build`.
6. QA visual no preview, passando por todas as rotas:
   `/`, `/#materias`, `/estudar`, `/provas`, `/provas/[ano]`, `/redacao`,
   `/redacao/[tema]`, `/#faculdades`, `/#plano`, `/painel`, `/comunidade`,
   `/comunidade/perfil/[username]`, `/entrar`, `/visitante/expirou`.
   Conferir: paleta Brasa lê bem; contraste de `--text-2`, `--ok`, `--err`
   OK sobre `--surface`; nada regrediu; reduced-motion ainda respeitado nos
   `@keyframes` existentes.

**Fora do escopo das Fundações** (viram sub-projetos):

- Qualquer mudança de layout de página.
- Gestos em qualquer superfície (drag-to-dismiss, swipe, pegar no meio do voo).
- Rework do Nav translúcido / scroll-edge → sub-projeto 2.
- Modo claro (segue dark-only).
- Migrar componentes existentes para `usarPressao` / `Materializar` — cada
  superfície adota no seu sub-projeto.

**Critério de pronto:** site inteiro na paleta Brasa; `motion` instalado; as 4
primitivas existindo e tipadas; `tsc` e `build` limpos; QA visual sem
regressão. **Zero mudança de comportamento visível** — Fundações são a base,
não a reforma.

---

## Verificação

1. `npx tsc --noEmit` limpo; `npm run build` compila.
2. `grep` confirma que nenhum arquivo em `lib/motion/` é importado por página
   ainda (primitivas ficam prontas, não usadas).
3. QA visual nas rotas listadas na Seção E. Tirar os screenshots "antes" de
   `/`, `/comunidade`, `/painel`, `/estudar` **no passo 1 do rollout** (antes
   de tocar no `globals.css`) e os "depois" no passo 6, para comparar.
4. Toggle de `prefers-reduced-motion` e `prefers-reduced-transparency` no
   preview: os `@keyframes` existentes continuam suprimidos; `Materializar` e
   `usarPressao` (testados num sandbox pontual) caem para o fallback.
5. Contraste: `--text-2` sobre `--surface` ≥ 4.5:1; `--text-3` sobre
   `--surface` ≥ 3:1; `--ok`/`--err` sobre `--surface` ≥ 3:1.

## Notas

- O repositório ainda não tem nenhum commit (`master` sem histórico). Este
  spec **não** foi commitado — o primeiro commit do projeto inteiro é decisão
  do usuário, não efeito colateral de gravar um doc.
- `motion/react` é o entry para React (`<motion.div>`, `<AnimatePresence>`);
  `motion` (vanilla `animate`) para código fora de componente.
