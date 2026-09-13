# Estado do Percurso

Checkpoint de **13 de setembro de 2026**, revisado no mesmo dia depois de a
barra do topo ser fechada — o item que estava listado como pendente e não
decidido. O código descrito aqui é o de `15d39ee` ("Fecha a barra do topo com
fundo opaco e borda visível"), que é o commit dessa correção.

Os onze commits locais foram empurrados para `origin/main` — de `b7ab413` a
`f09f3bf`, atualizando o remoto de `0adc5e6`. `main` e `origin/main` ficaram no
mesmo ponto, então o que este documento descreve é, pela primeira vez desde o
início da sequência, o que está no ar. Fora este documento, só
`.claude/settings.local.json` aparece modificado na árvore, e ele não entra em
commit.

A Vercel construiu `f09f3bf` em produção, no deploy
`dpl_GyCfc3bv8cSt3nwiKVQCmsjNpukg`: estado `READY`, build de 32s, servindo em
<https://percurso-56zb.vercel.app>. O SHA não sai do `vercel inspect`, que não
traz metadado de git; veio da API de deployments. O deploy anterior era de 10 de
setembro, no `0adc5e6` — a distância entre os dois é exatamente esta sequência.

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
| Rotas públicas EM PRODUÇÃO | Playwright em 1280px e 520px | as cinco em 200; detalhe abaixo |
| `/app` EM PRODUÇÃO | Playwright em 1280px e 520px, conta anônima | passou nos sete pontos; detalhe abaixo |
| Banco de questões, ponta a ponta | consultas de leitura com a chave pública | 9.819 no banco, 7.063 visíveis; detalhe abaixo |
| Classificação automática do ENEM | amostra de 100, conferência humana | 45% de erro; detalhe abaixo |

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

Tudo acima rodou no `localhost`. **Depois do push, a mesma área foi conferida na
Vercel**, no `f09f3bf` publicado — e isso é uma verificação diferente, não a
mesma repetida: o pendente da tela branca no iPhone é justamente um caso em que
desenvolvimento e produção divergiram, e um não vale como prova do outro.

Nas rotas públicas, em 1280px e em 520px: `/`, `/entrar`, `/sobre`, `/recursos`
e `/faculdades` respondem 200, e `/app` sem sessão responde 307 para
`/entrar?proximo=%2Fapp`. Nenhum `console.error`, nenhum `pageerror`, nenhuma
resposta ≥ 400 e nenhuma rolagem horizontal do documento nas dez passagens. Um
único sinal: em `/recursos`, nas duas larguras, o prefetch RSC de `/faculdades`
termina em `net::ERR_ABORTED`. Não é o roteiro abortando ao navegar — acontece
com a página parada por cinco segundos —, e a navegação pelo link completa sem
evento nenhum. É prefetch cancelado, não carregamento quebrado.

Na área logada em produção, nas duas larguras: barra de 126,98px `sticky` em 0,
fundo `rgb(243,245,241)`, `backdrop-filter: none` e nenhum `::before` — a
correção da barra chegou ao ar como foi escrita; zero `<aside>` e `main` em
`left: 0`; as nove ferramentas na trilha, com 1111px de conteúdo em 520px de
vão; exatamente um `aria-current="page"`; menu da conta abrindo para baixo
(botão termina em 51, painel de 59,72 a 187,72 em tela de 900), dentro da tela e
fechando no clique fora sem navegar; véu do Pomodoro em 1280×900 sobre tela de
1280×900, fechando no clique; faixa de visitante de 1280×76 grudada em y=127,
sem `backdrop-filter`, com recorte idêntico nas cinco posições de rolagem nas
duas larguras; console, `pageerror` e rede sem nada.

O tema troca nos dois sentidos — `data-theme`, fundo do corpo e o registro em
`localStorage` acompanham —, mas com uma ressalva que o teste no `localhost` não
expôs: o estado inicial é "sem `data-theme`", seguindo o sistema, e o botão não
tem como voltar a ele. Depois do primeiro clique há sempre um valor explícito.
Não é defeito conhecido, é comportamento não decidido, e fica registrado aqui
porque ninguém tinha olhado.

**Uma conta anônima descartável foi criada em produção para essa conferência**,
com um clique em "Entrar como visitante" — é a única porta para `/app`, que sem
sessão devolve 307. Ela continua existindo no Supabase e **o UUID dela não foi
registrado**: a captura leu o `localStorage`, e a sessão do Supabase SSR vive em
cookie `httpOnly`, que só `context.cookies()` enxerga. O navegador foi fechado e
o dado se perdeu com ele. Identificá-la agora depende de listar os usuários
anônimos por `created_at` e pegar o mais recente do dia 13. Nada foi respondido,
alterado ou configurado sob essa conta — a conferência foi só leitura, mais
abrir e fechar menu, véu e tema.

#### O banco de questões, contado de ponta a ponta

Auditoria feita porque havia a suspeita de que as cerca de 9.000 questões
geradas não estivessem aparecendo no app. **Elas aparecem.** Das 7.070 questões
autorais no banco, 7.063 estão visíveis — 99,9%. O número ~9.000 é o total da
tabela, e quem não aparece é o ENEM.

Tudo abaixo saiu de consulta de leitura com a chave pública, sem `service_role`,
sem criar conta e sem escrever nada.

| | questões |
| --- | --- |
| Nos arquivos autorais gerados do repositório | 7.046 |
| Autorais no banco | 7.070 |
| Do ENEM no banco | 2.749 |
| **Total no banco** | **9.819** |
| Disponíveis no app | 7.063 |
| Ocultas | 2.756 |

As ocultas, por motivo. As categorias não se sobrepõem e as faixas do ENEM
foram medidas uma a uma, não deduzidas por subtração — 1.451 + 454 + 844 + 7
fecha em 2.756. A coluna de interpretação existe porque "oculta" não quer dizer
a mesma coisa nas quatro linhas: a primeira é escolha, as outras três são
trabalho pendente.

| Motivo | Quantidade | Interpretação |
| --- | --- | --- |
| ENEM sem `materia_id` | 1.451 | decisão de projeto: questões por área, adequadas ao modo prova |
| ENEM com `materia_id`, mas sem `tema` | 454 | classificação incompleta |
| ENEM com `materia_id` e `tema`, mas sem explicação | 844 | falta redação da explicação |
| Autorais sem `tema` | 7 | correção pontual de classificação |
| **Total** | **2.756** | |

Entre as 1.451 sem `materia_id`, **434 já possuem `tema`** — o classificador
reconheceu o assunto sem reconhecer a matéria. Elas continuam fora do seletor
mesmo assim, porque `vw_temas` exige as duas colunas e o seletor é organizado
por matéria: sem pertencer a uma, não há onde listá-las. Isso não as move para
outra linha da tabela; elas seguem na primeira, e pelo mesmo motivo — no modo
prova, que trabalha por área, elas já funcionam.

**As questões dos arquivos foram encontradas no banco.** Amostrei enunciados de
arquivos em pontos distintos da lista e eles estão lá, com `origem=autoral` e a
matéria certa; a contagem por matéria bate arquivo a arquivo. O banco tem 24
autorais a MAIS que os arquivos, em oito matérias, exatamente +3 em cada. O
sentido é de sobra, não de falta — nenhuma questão gerada está faltando —, e a
origem desses 24 não foi identificada.

**O critério de "disponível" é ter explicação.** `vw_temas.comentadas` é
`count(*) filter (where explicacao <> '')`, e o seletor usa `comentadas`, nunca
`total`. Por isso as 844 questões do ENEM que já têm matéria E tema continuam
invisíveis: falta só o comentário. As outras 1.905 precisam de classificação
antes disso.

**Produção apresenta os mesmos números.** Não foi lida nenhuma variável de
ambiente da Vercel: `vw_estatisticas` devolve `aulas 1.219, questões 9.819,
matérias 17, provas 15`, e a página `/sobre` em produção renderiza os quatro. É
a mesma base.

**As quatro matérias vazias continuam as mesmas** — Cálculo I, Estatística,
Exatas nível militar e Matemática · 6º ao 9º, zero questão cada, agora
confirmadas por uma terceira contagem. Informática básica segue com 15.

**Não há log completo dos seeds.** Existem 3 relatórios em
`gerado/_relatorios/`, de português-banca e português-fund; para os outros 164
pares matéria-tema não há nenhum, e `scripts/seed-questoes.mjs` imprime na tela
sem gravar arquivo. A prova de que o seed rodou é indireta: os arquivos batem
com o banco.

#### A classificação automática do ENEM, medida por amostragem

Amostra de **100 questões** das 1.278 com tema atribuído pelo classificador
léxico, aleatória, estratificada por área na proporção do universo (linguagens
48, natureza 21, humanas 20, matemática 11). Sorteio com semente fixa
`20260913`, então a amostra é reproduzível. Conferência **humana**, questão a
questão, com critério binário: o tema atribuído é o mais adequado e específico
disponível no catálogo? Nenhum veredito foi dado por modelo — o que estava sob
teste era se um classificador acerta, e trocá-lo por outro não mediria nada.

**Resultado: 55 corretas, 45 incorretas — 45,0% de erro.** Com correção de
população finita, a margem a 95% é de ±9,4 pontos: o intervalo vai de **35,6% a
54,4%**, ou seja, entre ~455 e ~695 das 1.278 estão mal classificadas. **O
intervalo inteiro fica acima dos 15%** que separavam "corrigir por regra" de
"repensar a abordagem", então a conclusão não depende da margem.

**O classificador léxico atual não é confiável para liberar as 1.278 no
seletor.** Quem clicar num conteúdo recebe outro quase metade das vezes — que é
exatamente o que `regras-temas.mjs` diz querer evitar: "questão sem tema é
melhor que questão no tema errado, porque o filtro de conteúdo é uma promessa".

As 45 incorretas se dividem assim:

| natureza | quantas | o que significa |
| --- | --- | --- |
| erro real do classificador | 41 | havia conteúdo adequado e ele escolheu outro |
| sem conteúdo adequado no catálogo | 4 | nenhuma regra conserta: o destino não existe |

Somando a questão 041 — Educação Física, que **nenhum** dos 17 catálogos cobre —
são **5 em 100** sem destino possível, o que projeta ~64 nas 1.278. E, em
paralelo, **7 erros de matéria** (~89 projetados), todos dentro da área certa:
`materia_cabe_na_area()` faz o portão funcionar no nível da ÁREA, não no da
matéria. Num dos sete o tema estava certo e só a matéria errada — as duas
colunas falham de forma independente.

**Três padrões de erro, e eles pedem correções diferentes:**

1. **Rótulo genérico onde havia específico.** `Interpretação e compreensão de
   texto` erra 14 de 31. Não é um rótulo ruim — acerta 17 —, é o depósito de
   tudo que não disparou outra regra.
2. **Palavra isolada puxando o tema.** `Cidadania e direitos humanos` erra 5 de
   7, inclusive numa questão de hidrologia e numa de Sêneca; num dos casos o
   gatilho estava no TÍTULO DO LIVRO citado na referência, não no texto.
   `África e América pré-colonial` erra 2 de 2, uma delas sobre trabalho
   precarizado em IA, de 2021.
3. **Tema vizinho dentro da matéria certa.** `Eletromagnetismo e indução` erra 4
   de 5 (circuitos, espectro, capilaridade, transferência de calor);
   `Química orgânica` erra 4 de 5 (genética, radioatividade, forças
   intermoleculares).

**Matemática acertou as 11 da amostra.** É o recorte mais nítido: o vocabulário
matemático é unívoco — "mediana", "progressão aritmética", "inversamente
proporcional" nomeiam o conteúdo no próprio enunciado. Nas outras áreas a mesma
palavra serve a vários conteúdos, e é aí que a régua léxica quebra.

Por `materia_id`: 40,3% de erro nas 67 com matéria e 54,5% nas 33 sem. A
diferença de 14 pontos aponta na direção esperada, mas os intervalos se
sobrepõem largamente (±11,7 e ±17,0) — **não sustenta** a correção barata de
descartar o tema onde a matéria é nula. Isso removeria 18 erros e 15 acertos, e
deixaria 27 erros de pé nas questões com matéria.

Material visual não explica nada: 46,2% de erro sem imagem, 44,1% com imagem
guardada. O classificador lê só texto.

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

1. **Matérias vazias e matérias parciais** — a lista anterior daqui estava
   errada em duas frentes, e a auditoria de 13 de setembro mediu as 17 matérias
   contra a `vw_temas` para corrigir. **Informática básica NÃO está vazia**: tem
   15 questões, uma por conteúdo, nos 15 conteúdos. Ela saiu da lista. Quem
   entrou foi **Matemática · 6º ao 9º**, que a versão anterior não mencionava.

   As quatro vazias, com os 15 conteúdos sem questão nenhuma, são: Cálculo I,
   Estatística, Exatas nível militar e Matemática · 6º ao 9º.

   E existe um terceiro grupo que a versão anterior não previa: **três matérias
   parciais**, com parte dos conteúdos disponível e parte não — Raciocínio
   lógico, Português de banca e Português · 6º ao 9º, cada uma com 2 conteúdos
   clicáveis e 13 com traço. Elas são o motivo de o traço por conteúdo ter de
   continuar existindo: uma correção que o remova quebra as três.

   São 99 traços no total — 60 nas quatro vazias e 39 nas três parciais. O traço
   sai de um lugar só, `EscolherConteudo.tsx`, e o botão é `disabled` quando a
   contagem é zero, portanto nenhum deles é clicável. A página da matéria já
   trata o caso com frase, não com traço.

   Proposta na mesa: nas vazias, trocar os 15 traços por uma linha dizendo que a
   matéria ainda não tem questão. O ramo tem de sair do total MEDIDO da matéria,
   nunca de uma lista de ids cravada — foi exatamente esse atalho que teria
   escondido as 15 questões de Informática. Aguardando decisão.
2. **As 2.749 questões do ENEM, e o que falta em cada faixa** — auditadas em
   13 de setembro, só leitura, com a chave pública. A versão anterior deste
   item chamava as 1.451 sem `materia_id` de "sem classificação". **Estava
   errado**, e o erro importa porque leva à correção errada.

   **De onde vêm as 9.819 do banco:** 7.046 estão nos arquivos autorais do
   repositório, mais 24 autorais que já existiam no banco e não vêm de arquivo
   nenhum (+3 em oito matérias, origem não identificada), mais as 2.749 do
   ENEM. As 7.070 autorais estão praticamente todas visíveis; quem não aparece
   é o ENEM inteiro.

   **(a) 1.451 sem `materia_id` — isto é de PROJETO, não é defeito.** O ENEM
   não agrupa por matéria, e sim por área: "Ciências da Natureza" mistura
   física, química e biologia na mesma prova, e a API não diz qual é qual.
   `supabase/provas.sql` deixa `materia_id` nulo de propósito e guarda a
   `area`, com o comentário registrando o motivo — chutar a matéria encheria o
   filtro de Física de questões de biologia. **Elas NÃO devem receber
   `materia_id` automaticamente**, e continuam adequadas ao modo prova, que é
   onde fazem sentido e onde já funcionam hoje. Detalhe que a divisão esconde:
   434 destas já têm `tema`, mesmo sem matéria.

   **(b) 454 têm `materia_id` e não têm `tema`.** Estas sim são classificação
   incompleta: o classificador reconheceu a matéria e não o assunto. Não
   chegam à `vw_temas`, que exige as duas colunas.

   **(c) 844 têm `materia_id` E `tema`, e não têm explicação.** Já estão
   classificadas e aparecem em `vw_temas.total`. O que as mantém fora é só o
   comentário: `comentadas` conta `explicacao <> ''`, e o seletor lê
   `comentadas`, nunca `total`. É trabalho de redação, não de classificação.

   **Todas as 2.749 estão sem explicação** — não só as 844. A coluna
   `explicada_em`, que o esquema já tem, está zerada nas 2.749.

   **Problemas de conteúdo, que nenhuma das faixas acima resolve:**

   - **30 questões com enunciado truncado e sem imagem** que as complete. São
     inrespondíveis como estão: `enem-2014 n.146` é "O número de divisores de
     N, diferentes de N, é", sem o texto que define N. Não têm conserto sem
     reimportar o texto-base, e devem ser marcadas inaptas seja qual for a
     classificação.
   - **62 questões citam material visual que não está guardado.** A tabela tem
     `imagens` e `opcoes_imagens`, e 1.047 questões têm material visual — mas
     destas 62 o texto promete uma figura que não existe no banco.
   - **AS 1.278 FORAM AMOSTRADAS: 45% de erro** (100 questões, conferência
     humana, intervalo de 35,6% a 54,4%). A seção "A classificação automática
     do ENEM, medida por amostragem", nas verificações, traz o detalhe. O que
     era suspeita virou medição, e o veredito é que **o classificador léxico
     atual não sustenta o filtro por conteúdo**.
     `regras-temas.mjs` exige 3 pontos mínimos e 2 de vantagem sobre o segundo
     colocado, e o banco ainda impõe `materia_cabe_na_area()` — a postura é a
     certa, e o próprio arquivo diz que "questão sem tema é melhor que questão
     no tema errado". Ainda assim erra 45% das vezes, e o portão da área não
     impede erro de matéria: os 7 medidos estavam todos na área correta.
   - **1 falso positivo já confirmado:** `enem-2022 n.59` está em História /
     "Brasil Colônia: economia e escravidão", e o enunciado é sobre o Programa
     de Aquisição de Alimentos, de 2003 — provavelmente disparado por
     "quilombolas" na lista de beneficiários. Era o primeiro caso conhecido; a
     amostragem mediu o resto e achou o mesmo padrão em escala.

   **(d) 7 questões autorais continuam sem `tema`** — matemática, física,
   química (2), inglês (2) e artes. Volume desprezível, mas é defeito de
   classificação numa leva que deveria estar inteira.

   **TRÊS COISAS QUE NÃO SE DEVE FAZER**, e é para isso que este item existe:

   1. **Não liberar as questões apenas removendo o filtro de explicação.**
      Trocar `comentadas` por `total` no seletor libera 844 de uma vez e
      desmonta a régua que o projeto construiu de propósito, quebrando o que
      /apresentacao/honestidade promete. Se for para mudar, que seja decisão
      explícita, com aquela página reescrita junto.
   2. **Não classificar automaticamente as questões sem `materia_id`.** É
      exatamente a decisão que `provas.sql` tomou e documentou. Elas seguem
      valendo POR ÁREA no modo prova, que é onde fazem sentido e onde já
      funcionam. Não estão esperando classificação.
   3. **Não corrigir as 1.278 automaticamente.** Com 45% de erro medido, uma
      passagem de máquina sobre o que a máquina já errou não tem como ser
      validada, e os três padrões abaixo pedem intervenções diferentes entre si.
      Ajustar limiar ou acrescentar regra não alcança o padrão 1, que é
      estrutural: decidir qual das cinco descrições possíveis é "a mais
      específica" é julgamento que contagem de pontos léxicos não modela.

   **Recomendação para quando houver decisão:** reclassificar com apoio de
   modelo, **em ambiente separado do banco de produção** — o catálogo inteiro no
   contexto, uma questão por vez, resultado gravado em arquivo. Depois, revisão
   e nova amostragem sobre esse resultado ANTES de qualquer escrita em
   `questoes`. A classificação léxica foi escolhida porque "classificar com a
   Claude custaria dinheiro"; 1.278 chamadas são baratas perto das ~50 horas de
   conferência humana que a alternativa exige, e o problema medido é semântico,
   não lexical. Nenhuma gravação sem a amostragem de controle: foi justamente
   ela que revelou o tamanho do problema desta vez.

   Ordem, se a decisão for seguir: resolver a classificação ANTES de comentar
   qualquer questão — comentário certo em tema errado custa o dobro. Depois, as
   818 prontas (as 844 menos as 26 que citam visual ausente), usando
   `explicada_em` para deixar o rastro que faltou no seed.

3. **`supabase/estatisticas-honestas.sql`** — escrito, não confirmado aplicado.
   Faz `vw_estatisticas.materias` contar só matéria que tem questão: **17 vira
   13**, e não 12. O 12 vinha do mesmo engano da pendência 1 — Informática
   básica contada como vazia depois de já ter recebido questão. A consulta em si
   nunca teve número cravado: ela é um `exists` avaliado na hora, então devolve
   13 hoje sem precisar de mudança. Quem estava errado era só o comentário do
   arquivo, agora corrigido junto com este.

   **Continua pendente, e agora com prova:** a auditoria leu `vw_estatisticas` e
   ela devolve `materias: 17`. Se o arquivo tivesse sido aplicado, seriam 13.
4. **`/diagnostico`** e `components/secoes/Diagnostico.tsx` — página temporária,
   marcada para apagar, ainda no ar com `robots: noindex`.
5. **Tela branca no iPhone** — a causa provável era o CSP com `strict-dynamic`
   bloqueando um chunk do Turbopack sem nonce, corrigido só em desenvolvimento.
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
