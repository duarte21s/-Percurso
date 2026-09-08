# Comunidade — motion pass + recompensa (design da Apple)

**Data:** 2026-08-28
**Sub-projeto:** 3 de 8
**Depende de:** Fundações (`motion`, `lib/motion/*`, tokens) + Chrome global.
**Estado:** IMPLEMENTADO. `tsc` + `build` limpos; `/comunidade` renderiza,
menu/comentários/abas funcionam (DOM), console/servidor limpos em aba nova.
Motion (mola, materializar, slide do sublinhado, toast) **não verificado
visualmente** — preview roda como aba oculta. A recompensa fica dormente até o
usuário rodar `comunidade-fase-a-patch.sql` (que agora também carrega o SQL do
toque: `atual` no jsonb + `verifica_conquistas returns text[]`). ModoProva
**não** monta o toast de propósito (foco de prova). Não commitado.

## Contexto

Terceiro sub-projeto do programa "design da Apple no site". Cobre a aba
Comunidade + a "recompensa no instante" (lacuna nº 1 da revisão multiagente da
Comunidade: responder questão acende a chama / desbloqueia conquista, mas isso
era invisível no momento).

Decisões: recompensa **entra** neste sub-projeto; gestos = **springs +
materializar, sem gesto de arrastar**.

## Design

### A — Menu ⋯ (`components/comunidade/PostCard.tsx`, componente `MenuPost`)

- `<div className={css.menu}>` (com `@keyframes caiuMenu`) → `<AnimatePresence>`
  + `<motion.div className={css.menu} style={{ transformOrigin: "top right" }}>`.
- `initial={{ opacity: 0, scale: 0.96, filter: "blur(6px)" }}` →
  `animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}`, `exit` simétrico,
  `transition={reduzido ? { duration: 0.12 } : GAVETA}`.
- `usarMovimentoReduzido()` no `MenuPost`.
- Click-outside + Escape (já existem) ficam. O `denunciando`/motivo mini-form
  interno fica.
- CSS: remover `@keyframes caiuMenu` e a `animation:` de `.menu`.

### B — Expandir comentários (`PostCard.tsx`)

- `{abertos && (<div id={...}><Comentarios/></div>)}` →
  `<AnimatePresence>{abertos && <motion.div id={...} initial={{opacity:0, y:-6}}
  animate={{opacity:1, y:0}} exit={{opacity:0, y:-6}}
  transition={reduzido ? {duration:0.12} : RAPIDO}>...</motion.div>}</AnimatePresence>`.
- CSS `comunidade.module.css`: remover `@keyframes abre` e a `animation:` de
  `.comentarios`.

### C — Botões de ação (`PostCard.tsx`)

- `usarPressao` em cada `.acao` (curtir/comentar/compartilhar/salvar) — refs
  individuais, ou um pequeno wrapper. Como são 4 botões estáticos, criar 4
  refs + 4 `usarPressao` é feio; melhor: um componente leve
  `<BotaoAcao>` que encapsula `useRef` + `usarPressao` + repassa props. OU
  aceitar os 4 refs. **Decisão:** componente `BotaoPressao` genérico em
  `components/ui/BotaoPressao.tsx` (`<button>` + ref + `usarPressao`), usado
  aqui e adiante.
- `.menuItem` do menu: idem via `BotaoPressao`.
- O pop do curtir (`@keyframes pulso`) fica; ajustar o keyframe para um leve
  overshoot (scale 1.3 no pico, assentando).

### D — Sublinhado das abas (`components/comunidade/Comunidade.tsx` + CSS)

- Hoje: `.abaAtiva::after` com `@keyframes barra` — só "aparece" na aba ativa.
- Novo: dentro do `.map` das abas, quando `aba === a.valor`, renderizar
  `<motion.span layoutId="feed-sublinhado" className={css.abaSublinhado}
  transition={reduzido ? { duration: 0 } : PADRAO} />`. O `motion` anima a
  posição entre abas via `layoutId`.
- CSS: `.abaSublinhado` — `position: absolute; left: 12px; right: 12px;
  bottom: -1px; height: 2px; border-radius: 2px; background: linear-gradient(90deg,
  var(--accent), var(--accent-2));`. Remover `.abaAtiva::after` e `@keyframes barra`.
  `.aba` precisa de `position: relative`.

### E — Entrada dos cards: FORA. `@keyframes entra` fica.

### F — Motion da recompensa

**SQL** — editar `supabase/comunidade-fase-a-patch.sql` (ainda não rodado):
- `registrar_atividade`: no `jsonb_build_object` de retorno, acrescentar
  `'atual', coalesce(v_seq, (select chama_atual from perfis where id = v_uid), 0)`.
  (`v_seq` só é setado quando `v_primeira`; fora disso, ler de `perfis`.)
- `verifica_conquistas()`: `returns text[]`. Declarar `v_novas text[] := '{}'`;
  em cada bloco, após `if found then perform conceder_xp(...)` acrescentar
  `v_novas := array_append(v_novas, '<slug>')`. `return v_novas;` no fim.
- `grant execute` de `verifica_conquistas()` já existe; mantém.

**`lib/gamificacao.ts`**:
```ts
export interface RecompensaEstudo {
  primeiraDoDia: boolean;
  chamaAtual: number;
  conquistas: string[];   // slugs
}
export async function registrarAtividade(
  supabase, tipo
): Promise<RecompensaEstudo> {
  try {
    const { data: r } = await supabase.rpc("registrar_atividade", { p_tipo: tipo });
    const { data: novas } = await supabase.rpc("verifica_conquistas");
    return {
      primeiraDoDia: Boolean(r?.primeira_do_dia),
      chamaAtual: Number(r?.atual ?? 0),
      conquistas: Array.isArray(novas) ? novas : [],
    };
  } catch {
    return { primeiraDoDia: false, chamaAtual: 0, conquistas: [] };
  }
}
```

**`lib/tipos.ts`**: `Gabarito` ganha `recompensa?: RecompensaEstudo` (import do
tipo de `@/lib/gamificacao`, ou redefinir inline para não acoplar tipos.ts a
gamificacao). **Decisão:** definir `RecompensaEstudo` em `lib/tipos.ts` e
`lib/gamificacao.ts` importa dali (tipos.ts não importa nada).

**Rotas**:
- `app/api/simulado/responder/route.ts`: `const recompensa = await registrarAtividade(...)`; incluir `recompensa` no objeto do gabarito devolvido.
- `app/api/prova/responder/route.ts`: idem no payload que ele devolve.
- `app/api/redacao/avaliar/route.ts`: `const recompensa = await registrarAtividade(supabase, "redacao")`; `return NextResponse.json({ ...nota, id: gravada.id, provedor, recompensa })`.

**`components/comunidade/AvisoRecompensa.tsx`** (novo, client):
- Props: `recompensa: RecompensaEstudo`.
- Nada a mostrar se `!primeiraDoDia && conquistas.length === 0` → retorna null.
- `<AnimatePresence>` + `<motion.div>`: entra de baixo (`y: 24 → 0`, `opacity`),
  spring `GAVETA`; sai por baixo. `useState(true)` + `setTimeout(fechar, 4200)`.
- Conteúdo: se `primeiraDoDia` → linha "🔥 Chama acesa — {chamaAtual} {dia/dias} · +20 XP".
  Para cada slug em `conquistas` → "Conquista: {CONQUISTA_POR_SLUG[slug]?.nome}".
- `usarMovimentoReduzido` → sem `y`, só opacidade.
- Posição: `position: fixed; left/right/bottom` com `z-index` alto, largura
  `min(360px, calc(100vw - 32px))`, centralizado embaixo. (É o único
  `position: fixed` — ok, é um toast efêmero, não um mockup.)
- CSS próprio: `components/comunidade/estudos.module.css` ganha `.aviso*`.

**Montagem**:
- `components/estudo/Sessao.tsx`: onde faz `setGabarito(dados as TipoGabarito)`,
  se `dados.recompensa` → `setRecompensa(dados.recompensa)`; renderizar
  `{recompensa && <AvisoRecompensa recompensa={recompensa} />}`. Limpar no
  `avançar`/reset.
- `components/provas/ModoProva.tsx`: no ponto equivalente (após responder e
  receber o retorno). Se a prova não expõe gabarito por questão da mesma forma,
  montar após a entrega/correção com o `recompensa` acumulado da última
  chamada.
- `components/redacao/EscreverRedacao.tsx`: ao receber a nota, se
  `nota.recompensa` → montar o aviso.

## Verificação

1. `npx tsc --noEmit` + `npm run build`.
2. Rotas 200; Comunidade renderiza; menu abre/fecha (DOM); comentários
   expandem (DOM); troca de aba (DOM).
3. `fetch("/api/simulado/responder", …)` no console (sessão revisor) →
   resposta inclui `recompensa: { primeiraDoDia, chamaAtual, conquistas }`.
4. Console e `preview_logs` limpos.
5. `grep` — `@/lib/motion` agora em `PostCard.tsx`, `Comunidade.tsx`,
   `AvisoRecompensa.tsx`, `BotaoPressao.tsx`.
6. **Feel do motion** (mola do menu, materializar, slide do sublinhado, toast):
   o usuário confere num navegador real — o preview roda como aba oculta e
   pausa o `motion`.

## Notas

- `layoutId` do `motion` precisa que as abas estejam sob o mesmo
  `<AnimatePresence>`/árvore — já estão (mesmo `.map`).
- `AvisoRecompensa` usa `position: fixed` deliberadamente (toast efêmero).
- Repo sem commits — nada commitado.
