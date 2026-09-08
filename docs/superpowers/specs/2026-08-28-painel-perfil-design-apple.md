# Painel + Perfil — motion pass (design da Apple)

**Data:** 2026-08-28 · **Sub-projeto:** 7 de 8 · **Depende de:** Fundações.
**Estado:** IMPLEMENTADO. Decisão: cascata leve (stagger ~40ms). `tsc` +
`build` limpos. Verificado ao vivo: `/painel` (4 stats em `<Revela>`),
`/comunidade/perfil/revisortest` (4 stats + 8 conquistas em `<Revela>`, barra
de nível em `<BarraNivel>`, 8 barras SVG em `<motion.rect>`). Console +
servidor limpos. `Grafico.tsx` virou client — perfil (server) importa sem erro.
Feel/cascata não verificados (preview = aba oculta). Não commitado.

## Design

### Novo — `components/ui/Revela.tsx` (client)
`motion.div` que materializa os filhos na montagem. Props:
`{ children, indice = 0, className, style }`. `initial={reduzido ? {opacity:0} :
{opacity:0, y:10}}` → `animate` neutro, `transition={reduzido ? {duration:0.15}
: {...RAPIDO, delay: indice * 0.04}}`. Passa `className` adiante (vira o próprio
item da grade — sem div extra).

### Painel (`app/(site)/painel/page.tsx`)
- Os 4 `<div className="stat">` da `.stats` → `<Revela className="stat"
  indice={0..3}>`. (Server Component renderiza o client `Revela` — ok.)

### Perfil (`app/(site)/comunidade/perfil/[username]/page.tsx`)
- Os 4 `<div className={css.perfilStat}>` → `<Revela className={css.perfilStat}
  indice={0..3}>`.
- Barra de nível: `<span className={css.perfilNivelBarra}><i style={{width}}/></span>`
  → `<i>` vira componente client `<BarraNivel pct={pct}/>` em
  `components/comunidade/BarraNivel.tsx`: `<motion.i initial={{width:0}}
  animate={{width: \`${pct}%\`}} transition={reduzido ? {duration:0} : RAPIDO}/>`
  (a classe do `<i>` continua vindo do CSS module — o componente só recebe
  `pct` e é renderizado dentro do `<span className={css.perfilNivelBarra}>`).

### `components/comunidade/Conquistas.tsx` (já client)
- Cada tile do `.map` → envolver em `<Revela className={css.conquista ...}
  indice={i}>` (mantém as classes atuais, incl. `conquistaBloqueada`).

### `components/comunidade/Grafico.tsx` → client
- `"use client"`. Cada `<rect className={css.graficoBarra} height={h} y={A-h}>`
  → `<motion.rect initial={{height:0, y:A}} animate={{height: h2, y: A-h2}}
  transition={reduzido ? {duration:0} : {...RAPIDO, delay: i*0.04}}/>`
  (`h2` = altura final com o mínimo de 2px que já existe).

### `components/comunidade/EditorPerfil.tsx` (já client)
- "Trocar foto", "Remover", "Salvar" → `<BotaoPressao>`.
- O `<Avatar>` quando `avatarUrl` muda → envolver num `key={avatarUrl}` +
  `<motion.div initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}}
  transition={RAPIDO}>` para a foto nova "chegar".

### Fora
Tabela de histórico do painel · `EscolherConteudo` (acordeão) · `CardChama`
(a chama já treme, 0.42 Hz, aceitável) · `EscolherConteudo`.

## Verificação
1. `tsc` + `build`.
2. `/painel` e `/comunidade/perfil/revisortest` (sessão revisor) renderizam;
   stats, conquistas, barra de nível, gráfico presentes no DOM.
3. Console + `preview_logs` limpos (aba nova).
4. Feel — usuário em navegador real.

## Notas
- `Grafico.tsx` vira client: conferir que a página de perfil (Server) ainda o
  importa sem erro (client dentro de server é ok).
- Repo sem commits.
