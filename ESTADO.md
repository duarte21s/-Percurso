# Estado do Percurso

Checkpoint de **8 de setembro de 2026**, no commit `4f3d5a7` ("Adapta movimento
Apple ao Percurso"). Árvore limpa, `main` igual ao `origin/main`, deploy da
Vercel em dia com esse commit.

Este arquivo existe para que qualquer pessoa — inclusive eu, numa sessão nova —
saiba em dois minutos o que está de pé, o que está verificado e o que ficou
pendurado. Ele é reescrito a cada checkpoint, não acumulado.

---

## Verificado nesta data

| Verificação | Comando | Resultado |
| --- | --- | --- |
| Tipos | `npm run typecheck` | limpo |
| Contraste WCAG AA (5 estados de tema) | `npm run checar-contraste` | todos os pares passam |
| Física das molas (21 checagens) | `npm run checar-mola` | íntegra |
| Vídeo por scroll | `npm run checar-video-scroll` | ok |

Os três que falam com o Supabase — `checar-temas`, `checar-prova`,
`checar-treino` — não foram rodados neste checkpoint. A última vez que rodaram,
passaram: 12 tentativas de fraude na prova bloqueadas e o treino livre intacto.

## O que está de pé

**Identidade e movimento.** Paleta sálvia + oliva + esmeralda fechada, Inter
para ler e Fraunces para anunciar. Squircles, resposta ao toque, indicador
deslizante nas duas navegações. Molas interrompíveis com passo de 1/2000s —
abaixo disso o quique desaparece por amortecimento numérico. Folha arrastável
com projeção de inércia e desfoque quantizado.

**Apresentação.** Oito passos, cada um numa rota própria (`/apresentacao/…`),
com os números lidos ao vivo de `vw_estatisticas`.

**Provas.** Cronômetro é do servidor, não do navegador. `iniciado_em`,
`expira_em`, `finalizado_em` e `ultima_atividade_em` na tabela; os gatilhos
`prova_guarda_tentativa`, `prova_define_vencimento`, `prova_guarda_resposta` e
`prova_guarda_delete_resposta` recusam no banco o que o DevTools tentaria pelo
HTTP. Todos começam com `if new.prova_id is null then return new;`, então o
simulado de treino não foi tocado.

**Escolha de conteúdo.** A seta virou `<details>` nativo do navegador. Abre sem
JavaScript, sem animação de altura, sem estado do React — que é exatamente onde
as três versões anteriores falhavam em silêncio. A contagem de questões pagina
de mil em mil (`lib/temas.ts`); o `.limit(5000)` anterior era cortado em 1000
pelo PostgREST e fazia 121 dos 141 temas parecerem vazios.

**Barra de estudos.** Era coluna de 248px à esquerda, virou faixa no topo com
Pomodoro por timestamp e menu de conta.

**Erros.** `error.tsx` em `(site)` e em `/app`, mais `global-error.tsx`. Antes
não havia nenhum: erro de renderização deixava tela branca sem rastro.

## Pendente

1. **Quatro matérias sem questão nenhuma** — Cálculo I, Estatística, Informática
   básica e Exatas nível militar. Os 15 conteúdos de cada uma aparecem, todos
   com traço, nenhum clicável. Proposta na mesa: trocar os 15 traços por uma
   linha só dizendo que a matéria ainda não tem questão. Aguardando decisão.
2. **`supabase/estatisticas-honestas.sql`** — escrito, não confirmado aplicado.
   Faz `vw_estatisticas.materias` contar só matéria que tem questão: 17 vira 12.
3. **`/diagnostico`** e `components/secoes/Diagnostico.tsx` — página temporária,
   marcada para apagar, ainda no ar com `robots: noindex`.
4. **Tela branca no iPhone** — a causa provável era o CSP com `strict-dynamic`
   bloqueando um chunk do Turbopack sem nonce, corrigido só em desenvolvimento.
   Não confirmado no aparelho.
5. **Os 13 cenários de teste da especificação de provas** — os de banco passam
   pelo `checar-prova`; os de ponta a ponta pela interface exigem sessão logada
   e não foram exercitados.
6. **Não começado:** flashcards com repetição espaçada, plano de estudos
   persistido (é o que devolve o item ao menu) e sugestão de repertório na
   redação. Os dois primeiros pedem tabela nova.

## Armadilhas conhecidas

- **O painel do navegador congela o `requestAnimationFrame`** — medi 1 quadro a
  cada 500ms. Mola, GSAP, scroll suave e transição de CSS parecem todos
  quebrados ali. Verificar por medição ou fora do painel.
- **SQL não viaja pelo git.** Migração aplicada é sempre à mão no Supabase.
- **`.click()` em JavaScript dispara mesmo com algo por cima.** Para testar
  clique de verdade, clique de verdade.
- **`SUPABASE_SERVICE_ROLE_KEY` fura toda a RLS.** Vive no `.env.local`, nunca
  ganha prefixo `NEXT_PUBLIC_`, nunca vai para chat, issue ou captura de tela.
