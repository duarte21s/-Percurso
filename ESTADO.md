# Estado do Percurso

Checkpoint de **13 de setembro de 2026**, revisado no mesmo dia depois de a
barra do topo ser fechada — o item que estava listado como pendente e não
decidido. O código descrito aqui é o de `15d39ee` ("Fecha a barra do topo com
fundo opaco e borda visível"), que é o commit dessa correção.

`main` está à frente do `origin/main` e nada foi empurrado, então o deploy da
Vercel ainda serve o estado anterior a esta sequência. Quantos commits de
diferença, `git rev-list --count origin/main..main` responde na hora; o número
não fica cravado aqui porque muda no instante em que este próprio arquivo for
commitado. Fora este documento, só `.claude/settings.local.json` aparece
modificado na árvore, e ele não entra em commit.

Este arquivo existe para que qualquer pessoa — inclusive eu, numa sessão nova —
saiba em dois minutos o que está de pé, o que está verificado e o que ficou
pendurado. Ele é reescrito a cada checkpoint, não acumulado.

---

## Verificações

As três listas abaixo são diferentes e não devem ser lidas como uma só: o que
rodou **agora**, o que rodou **antes e não foi repetido**, e o que **nunca
rodou**. Um teste que passou em setembro não é garantia sobre o código de hoje.

### Rodados neste checkpoint — 13 de setembro de 2026

| Verificação | Comando | Resultado |
| --- | --- | --- |
| Tipos | `npm run typecheck` | limpo |
| Build de produção | `npm run build` | passou, 26 páginas |
| Contraste WCAG AA (5 estados de tema) | `npm run checar-contraste` | todos os pares passam |
| Área logada no navegador | Chromium pelo Playwright, 1280px e 520px | sem falha; detalhe abaixo |
| Barra do topo opaca | Chromium pelo Playwright, sessão de visitante | recorte idêntico nas 8 combinações; detalhe abaixo |

A conferência da área logada foi feita com sessão de visitante, medindo o DOM em
vez de olhar a captura:

- barra no topo nas duas larguras, 126,98px de altura, `sticky` em `0,0`;
  nenhum `<aside>`, nenhuma coluna estreita e alta encostada na esquerda, o
  `.main` começando em `left: 0`;
- marca e os três controles centrados em y=32 na primeira linha de 64px, com
  recuo simétrico (30px e 12px, conforme a largura);
- as nove ferramentas numa linha só; em 520px a trilha rola na horizontal,
  1111px de conteúdo em 520px de vão;
- exatamente um `aria-current="page"`, com o indicador de 120px colado sobre a
  aba ativa de 119,52px;
- menu da conta abrindo para baixo (botão termina em 51, painel começa em
  59,72), dentro da tela, fechando no clique fora;
- véu do Pomodoro medindo a viewport inteira — 1280×900 e 520×860 — e fechando
  no clique sobre ele;
- botão de tema trocando `data-theme`, o fundo do corpo e o registro em
  `localStorage`, e voltando no segundo clique;
- tokens idênticos entre `/app`, `/` e `/entrar`;
- console sem nenhum erro em qualquer das passagens.

A barra do topo foi medida do mesmo jeito que a faixa, e mais um pixel: o
recorte da barra inteira sai idêntico em cinco posições de rolagem, nas duas
larguras e nos dois temas — 4 combinações, 4 hashes estáveis, e o mesmo para a
linha de 1px da borda isolada. Que a borda continua DESENHADA, e não apenas
estável, é o pixel: rgb(211,218,213) no claro e rgb(43,48,44) no escuro, que é
exatamente `var(--borda)` a 14% composta sobre o fundo da barra. Coberta, ela
daria o fundo puro.

A faixa de visitante foi medida à parte, por comparação de bytes: o recorte da
faixa inteira sai idêntico em cinco posições de rolagem, nas duas larguras, nos
dois temas e nos dois estados (normal e urgente) — 8 combinações, 8 hashes
estáveis. É o que prova que nada do conteúdo atravessa mais.

### Rodados em checkpoint anterior, NÃO repetidos agora

Passaram quando rodaram. Nenhum deles foi executado em 13 de setembro, e
nenhuma linha deste arquivo deve ser lida como se tivesse sido.

| Verificação | Comando | Último resultado | Quando |
| --- | --- | --- | --- |
| Física das molas (21 checagens) | `npm run checar-mola` | íntegra | 8 de setembro de 2026 |
| Vídeo por scroll | `npm run checar-video-scroll` | ok | 8 de setembro de 2026 |
| Fraude na prova | `npm run checar-prova` | 12 tentativas bloqueadas | data não registrada |
| Treino livre | `npm run checar-treino` | intacto | data não registrada |
| Contagem de temas | `npm run checar-temas` | passou, sem detalhe registrado | data não registrada |

### Ainda não rodados

Nunca foram executados — não há resultado anterior a invocar.

| Verificação | Como | Por que não rodou |
| --- | --- | --- |
| Os 13 cenários de ponta a ponta da especificação de provas | pela interface | exigem sessão logada; só os de banco são cobertos pelo `checar-prova` |

## O que está de pé

**Identidade e movimento.** Paleta sálvia + oliva + esmeralda fechada, Inter
para ler e Fraunces para anunciar. Squircles, resposta ao toque, indicador
deslizante nas duas navegações. Molas interrompíveis com passo de 1/2000s —
abaixo disso o quique desaparece por amortecimento numérico. Folha arrastável
com projeção de inércia e desfoque quantizado.

**Barra da área de estudos, no topo em toda largura.** Eram duas formas para a
mesma navegação: faixa no topo até 900px e coluna fixa de 232px a partir de
901px. Ficou só a faixa. A estrutura vem da `BarraTopo` — altura, recuo, alvo de
toque, anel de foco — e a `SidebarApp` preenche os slots: marca e ações na
primeira linha, as nove ferramentas na `trilha`, que é a segunda linha aberta
para isso. O ajuste ao contexto é por redefinição de token no próprio cabeçalho;
sobrescrever `.interna` ou `.trilha` daquele módulo deixaria a ordem do bundle
decidir o vencedor, e ordem de bundle não é contrato. A trilha rola sozinha até
centralizar a aba ativa, sem o que a nona ferramenta seria inalcançável em tela
estreita.

Junto veio `--topo-altura`, para quem precisa grudar abaixo da barra: a faixa de
visitante e os dois `sticky` do modo prova. O valor é medido, não deduzido —
126,98px, o mesmo número em 1280px e em 520px. A conta no papel dava 117px e
deixava esses três entrarem 9,98px por baixo da barra ao rolar.

**Paleta da área logada unificada com a do `globals`.** O `.wrap` do
`sidebar-app` trocava o sistema de cor inteiro dentro de `/app` por uma escala
de cinzas: 24 tokens na versão clara e os mesmos 24 repetidos em dois blocos de
tema escuro, com apelidos que diziam verde sobre valores que não eram
(`--verde-profundo` apontava para preto). Removidos, `/app` herda os tokens
canônicos e volta a ser o mesmo produto da home. Ficaram os três `--elev`, que
não são cor: zeram a sombra dos cartões. O checador de contraste acompanhou — os
quatro cenários "área logada" existiam só para medir aquela paleta paralela e
saíram com ela.

**Tipografia do painel alinhada ao sistema.** Os títulos em Fraunces do
dashboard usavam peso 520, que não existe em nenhum outro lugar do projeto, e
tracking escrito à mão em cada regra. Passaram ao peso 600 e aos tokens
`--track-hero`, `--track-display`, `--track-title` e `--lead-display`, os mesmos
do `.title` do globals e dos títulos do login. `font-optical-sizing: auto` entra
junto: é o que faz o eixo `opsz` da fonte, já carregada no `layout.tsx`, ajustar
o desenho ao corpo.

**Overlays consertados.** O material da barra — tinta translúcida e desfoque —
mora num pseudo-elemento, não no cabeçalho. `backdrop-filter` faz do elemento um
bloco contentor para todo `position: fixed` descendente, e com o filtro no
cabeçalho o véu do Pomodoro e o backdrop do menu da conta, ambos `fixed;
inset: 0`, ficavam do tamanho da barra em vez da tela: clicar no meio da página
não fechava nem um nem outro. O pseudo pinta o mesmo e não é ancestral de
ninguém. O menu da conta também passou a abrir para baixo — abria para cima
porque o botão vivia no rodapé da coluna lateral, e no topo para cima é para
fora da tela.

**Faixa de visitante opaca.** Ela era `background: var(--accent-dim)` — 10% de
verde e mais nada atrás — somado a um `blur(10px)`. Dez por cento não cobrem, e
o que a faixa tem para cobrir é a página inteira, que passa por baixo dela
enquanto se rola, porque ela é `sticky`. Em 520px o botão verde-escuro do painel
atravessava a faixa e caía em cima da linha do aviso, que é texto de 12,5px. A
tinta agora vem em duas camadas, o mesmo `--accent-dim` sobre o `--fundo` do
tema: a cor parada é idêntica à de antes, porque aquele 10% já era composto
sobre o `--fundo` do `.main` — a diferença é que esse fundo passou a ser da
faixa. O mesmo vale para o estado `.urgente`, que tinha o defeito idêntico com a
tinta do `--err` e é justamente o dos últimos dez minutos. Com a base opaca o
`backdrop-filter` não tinha mais nada a revelar e saiu, levando junto o risco de
a faixa virar bloco contentor para algum `fixed` futuro.

**Barra do topo opaca.** Era o último lugar por onde a página aparecia:
`color-mix(var(--fundo) 92%, transparent)` com `blur(18px)`, e nos 8% restantes
dava para ver formas cruzando ao rolar. O fundo agora é `var(--fundo)` sem
mistura, e o `backdrop-filter` saiu com ele — sem translucidez não havia o que
revelar, e um filtro inerte é só a armadilha do bloco contentor esperando o
próximo `fixed`.

A tinta também VOLTOU para o `.topo`, desfazendo o pseudo-elemento que existia
por causa do filtro. Sem filtro ele não ajuda e atrapalha uma coisa:
`z-index: -1` pinta depois do fundo E DA BORDA do pai, nunca atrás deles. Com a
camada parando na caixa de padding, a `border-bottom` ficava de fora — e ela é
`var(--borda)`, 14% de opacidade, então 86% daquela linha de 1px eram conteúdo
passando direto. Esticar a camada até a caixa de borda não conserta: ela cobre a
borda e a linha some. Fundo no próprio elemento pinta sob a própria borda, que é
o que faz a linha compor sobre opaco. Layout intocado: 126,98px e
`--topo-altura` em 127px, como antes.

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

**Erros.** `error.tsx` em `(site)` e em `/app`, mais `global-error.tsx`. Antes
não havia nenhum: erro de renderização deixava tela branca sem rastro.

## Pendente

Cada item aparece uma vez só. O estado dos testes está na seção de verificações
e não é repetido aqui.

1. **Quatro matérias sem questão nenhuma** — são exatamente estas: Cálculo I,
   Estatística, Informática básica e Exatas nível militar. Os 15 conteúdos de
   cada uma aparecem, todos com traço, nenhum clicável. Proposta na mesa: trocar
   os 15 traços por uma linha só dizendo que a matéria ainda não tem questão.
   Aguardando decisão.
2. **`supabase/estatisticas-honestas.sql`** — escrito, não confirmado aplicado.
   Faz `vw_estatisticas.materias` contar só matéria que tem questão: 17 vira 12.
3. **`/diagnostico`** e `components/secoes/Diagnostico.tsx` — página temporária,
   marcada para apagar, ainda no ar com `robots: noindex`.
4. **Tela branca no iPhone** — a causa provável era o CSP com `strict-dynamic`
   bloqueando um chunk do Turbopack sem nonce, corrigido só em desenvolvimento.
5. **Enviar os commits locais para `origin/main`** — a sequência vai do
   `b7ab413` ao `15d39ee`, mais o commit deste documento. Nada disso foi
   empurrado, e é o que separa o que está descrito aqui do que a Vercel serve
   hoje. `git log --oneline origin/main..main` mostra a lista exata no momento
   em que for consultada.
6. **Não começado:** flashcards com repetição espaçada, plano de estudos
   persistido (é o que devolve o item ao menu) e sugestão de repertório na
   redação. Os dois primeiros pedem tabela nova.

## Armadilhas conhecidas

- **`backdrop-filter` faz do elemento um bloco contentor para todo
  `position: fixed` que esteja dentro dele.** Foi o que quebrou os dois overlays
  da barra, e é o motivo de o material morar num pseudo-elemento. Antes de pôr
  o filtro em qualquer casca, veja o que ela tem dentro.
- **Camada translúcida com texto em cima não cobre o que passa por baixo.**
  Blur embaralha, não esconde: de um botão inteiro ele devolve um borrão da
  mesma cor. Se a camada é `sticky` sobre conteúdo que rola, ela precisa de base
  opaca.
- **`z-index: -1` não põe um filho atrás da borda do pai.** Contexto de
  empilhamento negativo pinta logo DEPOIS do fundo e da borda do elemento que
  abre o contexto (CSS 2.1, Apêndice E). Camada de material em pseudo-elemento,
  então, nunca serve de base para a `border-bottom` da casca: ou para antes
  dela e deixa a borda translúcida vazando, ou a cobre e apaga a linha. Medido
  nos dois arranjos.
- **O painel do navegador congela o `requestAnimationFrame`** — medi 1 quadro a
  cada 500ms. Mola, GSAP, scroll suave e transição de CSS parecem todos
  quebrados ali. Verificar por medição ou fora do painel.
- **SQL não viaja pelo git.** Migração aplicada é sempre à mão no Supabase.
- **`.click()` em JavaScript dispara mesmo com algo por cima.** Para testar
  clique de verdade, clique de verdade.
- **`SUPABASE_SERVICE_ROLE_KEY` fura toda a RLS.** Vive no `.env.local`, nunca
  ganha prefixo `NEXT_PUBLIC_`, nunca vai para chat, issue ou captura de tela.
