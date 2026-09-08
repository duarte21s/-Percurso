# Editor de Redação — motion pass (design da Apple)

**Data:** 2026-08-28 · **Sub-projeto:** 6 de 8 · **Depende de:** Fundações.
**Estado:** IMPLEMENTADO. `tsc` + `build` limpos; `/redacao/redacao-2023`
verificado ao vivo: abas de modo e área de foto viram `<BotaoPressao>`,
alternar modo funciona, "Corrigir" habilita com 200+ chars. Console + servidor
limpos (aba nova). A tela de resultado (materializar, scale-in da nota, cascata
das barras) não foi rodada — precisaria de uma correção de IA de verdade;
validada por `tsc`/`build`. Não commitado.

## Design (`components/redacao/EscreverRedacao.tsx`)

- `reduzido = usarMovimentoReduzido()` no componente.
- **A.** `<button className={css.aba}>` (×2), `<button className={css.areaFoto}>`,
  "Trocar a foto", "Corrigir minha redação", "Escrever de novo" → `<BotaoPressao>`.
- **B.** O `if (nota) { return (<div>…</div>) }` → `<motion.div>` com
  `initial={reduzido ? {opacity:0} : {opacity:0, y:12}}`, `animate` neutro,
  `transition={reduzido ? {duration:0.15} : RAPIDO}`.
  O `.notaGrande` interno → `<motion.div className={css.notaGrande}
  initial={reduzido ? {opacity:0} : {opacity:0, scale:0.9}}
  animate={{opacity:1, scale:1}}
  transition={reduzido ? {duration:0.15} : {type:"spring", bounce:0.35, duration:0.5}}>`.
- **C.** `<span className={css.competenciaBarra}><i style={{width}}/></span>` →
  `<i>` vira `<motion.i initial={{width:0}} animate={{width: \`${pct}%\`}}
  transition={reduzido ? {duration:0} : {...RAPIDO, delay: idx*0.06}}>`
  (`idx` do `.map`). Cascata de C1 a C5.

**Fora:** textarea · `layoutId` nas abas (só 2) · `/redacao` lista.

## Verificação
1. `tsc` + `build`.
2. `/redacao/<tema>` renderiza; alternar modo; digitar 200+ chars → "Corrigir"
   habilita.
3. Console + `preview_logs` limpos.
4. Feel — usuário em navegador real.

## Notas
- `RAPIDO` de `@/lib/motion/springs`. Repo sem commits.
