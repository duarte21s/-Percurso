# Estudar / Sessão — motion pass (design da Apple)

**Data:** 2026-08-28 · **Sub-projeto:** 4 de 8 · **Depende de:** Fundações.
**Estado:** IMPLEMENTADO. `tsc` + `build` limpos; `/estudar` verificado ao vivo
(sessão revisor): alternativas viram `<BotaoPressao>`, responder → `Gabarito`
materializa (motion.div), estados `is-right`/`is-wrong` aplicam, "Próxima"
habilita; bloco da questão envolto em `motion.div`. Servidor limpo. Feel do
motion e a transição ao avançar não verificados (preview = aba oculta; eventos
sintéticos no botão "Próxima" não dispararam o React de forma confiável). Não
commitado.

## Design

### A — Alternativas (`components/estudo/Alternativas.tsx` + `app/globals.css`)
- `<button className="q-opt">` → `<BotaoPressao className="q-opt">`
  (feedback no pointer-down). `disabled` quando respondida — pointer events já
  ficam suprimidos, sem tratamento extra.
- `.q-opt` (globals.css): acrescentar `transition: border-color .25s var(--ease),
  background .25s var(--ease), color .25s var(--ease), transform .25s var(--ease)`
  para o reveal certo/errado entrar suave em vez de snapar. O `transform` do
  `:hover` (translateX 3px) continua.

### B — Gabarito + resultado (`components/estudo/Gabarito.tsx`, `Sessao.tsx`)
- `Gabarito`: o `<div className="q-explain">` → `<motion.div className="q-explain">`
  com `initial={reduzido ? {opacity:0} : {opacity:0, y:8, filter:"blur(4px)"}}`,
  `animate` para o estado neutro, `transition={reduzido ? {duration:0.15} : RAPIDO}`.
  `usarMovimentoReduzido()` no componente.
- `Sessao.tsx`: o `<div className="quiz-result">` → `<motion.div>` igual.
- `app/globals.css`: remover `animation: fadeUp …` de `.q-explain` (linha ~953)
  e de `.quiz-result` (~968). Se `@keyframes fadeUp` ficar sem uso, remover
  também (conferir com grep).

### C — Troca de questão (`components/estudo/Sessao.tsx`)
- O bloco que renderiza `q` (enunciado + `<Alternativas>` + `<Gabarito>` +
  `<AvisoRecompensa>` + `<DiscussaoQuestao>` + erro) → envolver em
  `<AnimatePresence mode="wait">` + `<motion.div key={q.id}
  initial={{opacity:0, y:6}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-6}}
  transition={reduzido ? {duration:0.12} : RAPIDO}>`.
- `key={q.id}` → anima ao mudar `i` (avançar), não ao setar `gabarito` (mesma
  questão).
- `const reduzido = usarMovimentoReduzido()` em `Sessao`.

### D — `EscolherConteudo` (acordeão): FORA deste sub-projeto.

## Verificação
1. `npx tsc --noEmit` + `npm run build`.
2. `/estudar` (sessão revisor) renderiza; responder → gabarito aparece;
   avançar → próxima questão.
3. Console e `preview_logs` limpos (aba nova).
4. Feel do motion — usuário confere em navegador real (preview = aba oculta).

## Notas
- Repo sem commits — nada commitado.
