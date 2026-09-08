# Provas / ModoProva — motion pass (design da Apple)

**Data:** 2026-08-28 · **Sub-projeto:** 5 de 8 · **Depende de:** Fundações.
**Estado:** IMPLEMENTADO. `tsc` + `build` limpos; `/provas/2023` verificado ao
vivo (sessão revisor): 5 alternativas viram `<BotaoPressao>`, marcar aplica
`alternativaMarcada`, o bloco `.questao` está num `motion.div`. Console +
servidor limpos. Feel/transições não verificados (preview = aba oculta). Não
commitado.

Ambiente de prova = restrição. Motion mínimo.

## Design

### A — `.alternativa` (`components/provas/ModoProva.tsx`)
`<button className={css.alternativa …}>` → `<BotaoPressao className={…}>`.
O reveal marcada/certa/errada já tem `transition` em `provas.module.css:188`.

### B — Troca de questão (`ModoProva.tsx`)
`<div className={css.questao}>` → dentro de `<AnimatePresence mode="wait">`,
vira `<motion.div key={questao.id} className={css.questao}
initial={reduzido ? {opacity:0} : {opacity:0}} animate={{opacity:1}}
exit={{opacity:0}} transition={{duration: reduzido ? 0 : 0.1}}>`.
**Só opacidade, 100ms** — sem `y` (pula-se muito entre questões). O
`<aside className={css.lateral}>` (cartão-resposta) fica fora, irmão.

### C — Placar do resultado (`ModoProva.tsx`)
O `{resultado && (<> <div className={css.placar}>… <div className={css.porArea}>… </>)}`
→ envolver num `<motion.div>` que materializa: `initial={reduzido ? {opacity:0} :
{opacity:0, y:10}}`, `animate` neutro, `transition={reduzido ? {duration:0.15} : RAPIDO}`.

### D — `.explicacao` (`ModoProva.tsx`)
`<div className={css.explicacao}>{explicacoes[questao.id]}</div>` →
`<motion.div className={css.explicacao} initial={reduzido ? {opacity:0} :
{opacity:0, y:6, filter:"blur(4px)"}} animate={…} transition={reduzido ?
{duration:0.15} : RAPIDO}>`.

### Fora
Botões `.btn` de navegação (têm `:active` no CSS) · grade do cartão-resposta ·
relógio (contador 1:1) · `/provas` lista.

## Verificação
1. `npx tsc --noEmit` + `npm run build`.
2. `/provas/2023` (ou outra) renderiza; marcar alternativa reflete no DOM.
3. Console + `preview_logs` limpos (aba nova).
4. Feel — usuário confere em navegador real.

## Notas
- `reduzido = usarMovimentoReduzido()` no componente `ModoProva`.
- Repo sem commits.
