# Checkpoint da sessão — abrir em outra conversa

> Gerado em 2026-09-02. Sessão anterior (2026-08-30) + continuação hoje.
> `npx tsc --noEmit` e `npm run build` limpos.
> O repositório não tem nenhum commit ainda — primeiro commit é decisão sua.

Como rodar: dois cliques em `ABRIR-O-SITE.bat`, ou `npm run dev` → http://localhost:3000.
`.env.local`: `GEMINI_API_KEY` preenchida, `ANTHROPIC_API_KEY` VAZIA.

---

## Estado atual

### Tudo CONCLUÍDO e verificado

**1. Migração Framer Motion → GSAP**
As animações usam GSAP (timelines, ScrollTrigger, stagger); algumas são `requestAnimationFrame` puro DE PROPÓSITO (hero, barra de leitura, contador, botão de tema). `lib/motion/` deletado.
`motion` fora do package.json. `tsc` + build limpos. Sem erro de console.
Memória: `gsap-transicoes-sem-opacidade.md` — `template.tsx` e o stagger do feed são
transform-only DE PROPÓSITO; não reintroduzir `autoAlpha`.

**2. Paleta "Pedra + verde" e fonte Inter**
- claro: `--bg #fcfcfb`, `--accent #1f6356` (pinho/teal 169°), `--ok #43741f` (grama 95°)
- escuro: `--bg #0e100e`, `--accent #4fc0a6`, `--ok #7ccc55`
- Inter em tudo via `next/font`, subsets `latin` + `latin-ext`
- `--accent-2` = texto legível. `--accent-brilho` = só gradiente, nunca texto.
- Variante `prefers-contrast: more` para os dois temas.
- Regra: acento (169°) e acerto (95°) separados 74° de propósito — abaixo de ~35° o olho
  lê "mesmo verde". Se mudar um, medir a separação de novo.
- 0 reprovações de contraste medidas.
- NÃO reintroduzir: azul, Lato, laranja quente, Grafite monocromática, serif de sistema.

**3. Correções de segurança e bugs**
- `lib/destino-seguro.ts` — `destinoInterno()` bloqueia `/\evil.com` (open redirect via backslash)
- `app/visitante/expirou/route.ts` — NÃO faz mais signOut (era o bug crítico: destruía a sessão anônima)
- `app/entrar/page.tsx` — visitante não é mais redirecionado para /painel
- `components/provas/ModoProva.tsx` — Desmarcar vai ao servidor; auto-submit com `autoEntregou` ref
- `app/api/prova/responder/route.ts` — suporta `alternativa: null` para desmarcar
- `components/estudo/Sessao.tsx` — encerrar() lê o erro do servidor
- `components/redacao/EscreverRedacao.tsx` — rascunho persiste no localStorage por `temaId`
- `components/comunidade/CardChama.tsx` — usa `sessaoAberta` (não `estudou_hoje`) para o label
- `components/comunidade/Comentarios.tsx` — ID estável via `useId()`

**4. Banco de questões ENEM importado**
15 provas do ENEM (2009-2023) importadas via `scripts/importar-enem.mjs` + `api.enem.dev`.
~9.599 questões totais: ~2.749 ENEM + ~6.850 autorais com explicação (números do `FUNCIONALIDADES.md`; `CONTINUAR-BANCO-DE-QUESTOES.md`, de 2026-08-20, registra totais menores — reconferir com `select count(*) from questoes` no Supabase).
Nota: questão 145 do ENEM 2015 não existe na API (bug na fonte, não no import). AVISO adicionado
ao importador quando total declarado ≠ total entregue.

**5. Schema multi-banca preparado**
`supabase/provas-multibanca.sql` — cria tabelas `bancas` e `areas_prova`, adiciona `banca_id`
e `fase` em `provas`, troca o CHECK fixo de área por FK, adiciona origens vestibular/militar/concurso.
**PENDENTE: rodar no Supabase SQL Editor** (não dá pra rodar DDL daqui).

**6. Audit de código — 7 áreas auditadas, sem críticos em aberto**
- `api-comunidade`, `auth-middleware`, `componentes-estudo`, `componentes-comunidade`:
  auditados por workflow multi-agente. ~24 achados medium/low, os critical/high foram refutados
  ou corrigidos.
- `api-estudo` (simulado/prova/IA): auditado hoje. Na prova, o gabarito só sai pós-finalizar; no simulado de treino, sai a cada resposta (por design). Double-answer
  bloqueado por índice único + 409. Desmarcar vai ao servidor. Erros da IA aparecem via ErroGeracao.
- `hero-scroll-layout`: auditado hoje (o hero é RAF puro, sem GSAP). Altura `700vh` fixa. h1-slides em `grid-area: 1/1` —
  altura não oscila. RAF + IntersectionObserver com cleanup. Sem hydration mismatch.
- `dados-scripts`: auditado hoje. catalogo-temas.mjs com `\r?` CRLF-safe. seed-questoes.mjs
  idempotente. rebalancear-gabarito.mjs correto.

---

## Pendente (decisão sua)

### Alta prioridade
- **Rodar `supabase/provas-multibanca.sql`** no SQL Editor — sem isso, provas de outras bancas
  não cabem no schema. O arquivo é idempotente.

### Média prioridade
- **Gerar questões novas**: `node scripts/gerar-questoes.mjs <materia> --todos` para preencher
  os ~119 temas vazios. NUNCA semear sem revisão (regra de honestidade 3×).
  Ver `CONTINUAR-MATERIAS-POR-OBJETIVO.md`.
- **Username reserved words**: mover validação de nome de usuário para RPC no Supabase em vez
  de só no cliente — hoje dá para burlar pela API direta.
- **Fuvest PDF extractability**: testar se `pdf-parse` consegue extrair texto de um PDF da Fuvest
  (formato diferente do Cebraspe, que usa encoding proprietário). Determina se vestibulares são
  viáveis.

### Baixa prioridade
- ~24 achados medium/low do workflow pendentes (não corrigidos porque críticos foram priorizados).

---

## Contexto que não pode se perder

- **`lib/motion/` NÃO existe mais** — qualquer import de `@/lib/motion/*` é regressão.
- **`.env.local`** tem senha em `NOTAS-LOCAIS.md` (gitignored) — não versionar, não colar em público.
- **SQL** roda à mão no Supabase SQL Editor.
- **Preview** roda em aba oculta → GSAP / animações não tocam, sem screenshot. Verificação real =
  `tsc` + `build` + `preview_logs`.
- Regra de honestidade: não prometer no site o que o banco não tem. Questão com gabarito errado
  é pior que faltando.
- Cebraspe: inviável (PDF com encoding proprietário, formato CERTO/ERRADO). ITA/Fuvest/Unicamp:
  sem API pública, PDF extractability não testada.
