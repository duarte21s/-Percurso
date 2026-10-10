# Matérias por objetivo — documento de continuidade

Companheiro de `CONTINUAR-BANCO-DE-QUESTOES.md`, que trata das nove matérias
de ensino médio. Este trata das **oito matérias criadas por causa de um
objetivo** (concurso, militar, graduação, fundamental), e existe pelo mesmo
motivo: permitir que outra sessão retome sem reconstruir contexto.

---

## 1. Por que essas matérias existem

O site inteiro rodava sobre um banco só, de ensino médio, qualquer que fosse o
objetivo de quem estudava. Medido no banco em 26/08/2026, uma busca por banca
no campo `fonte` devolveu **zero** para Unicamp, UERJ, Cebraspe, FGV,
Cesgranrio, ITA, IME, EsPCEx e Escola Naval.

As oito matérias novas dão a cada objetivo conteúdo que é dele.

> **Nota de 26/08/2026:** a seção "Trilhas" e as páginas `/trilhas/[id]` foram
> removidas do site — Estudar cobre a mesma função. O que consome
> `Materia.objetivos` hoje é o seletor de matérias do **Cronograma**, que
> recorta a lista pelo objetivo escolhido no formulário. Os arquivos removidos
> estão em `.rascunho/trilhas-removidas/`.

| matéria | id | objetivo | temas |
|---|---|---|---|
| Raciocínio lógico | `raciocinio-logico` | concurso | 15 |
| Informática básica | `informatica` | concurso | 15 |
| Português de banca | `portugues-banca` | concurso | 15 |
| Exatas nível militar | `exatas-militar` | militar | 15 |
| Cálculo I | `calculo` | graduacao | 15 |
| Estatística | `estatistica` | graduacao + concurso | 15 |
| Matemática · 6º ao 9º | `matematica-fund` | escola | 15 |
| Português · 6º ao 9º | `portugues-fund` | escola | 15 |

Lista canônica: `lib/conteudo/materias-objetivo.ts`. O par (matéria, tema) é
validado por `scripts/catalogo-temas.mjs`, que une essa lista às nove antigas.

**Não há matéria de direito, legislação ou jurisprudência**, embora caiam em
quase todo edital. Lei muda, e questão de direito escrita com base
desatualizada ensina errado a quem vai prestar concurso. O FAQ da home declara
essa falta e aponta o acervo público do Cebraspe.

---

## 2. Estado atual

Meta: **50 questões por conteúdo** — 750 por matéria, 6.000 nos 120
conteúdos. O registro é gerado a partir dos arquivos de `gerado/`, nunca
escrito à mão:

```bash
node scripts/contar-materias-objetivo.mjs --temas   # tabela por conteúdo
node scripts/contar-materias-objetivo.mjs --json    # grava gerado/_relatorios/progresso-materias-objetivo.json
```

Estado em 09/10/2026, na branch `claude/questoes-objetivo` (lotes 1 a 10):

```
120 conteúdos  ·  120 com 50 ou mais  ·  6.001 questões  ·  faltam 0
```

| matéria | conteúdos ≥ 50 | questões | faltam |
|---|---|---|---|
| raciocinio-logico | **15 de 15** | 751 | 0 |
| informatica | **15 de 15** | 750 | 0 |
| portugues-banca | **15 de 15** | 750 | 0 |
| exatas-militar | **15 de 15** | 750 | 0 |
| calculo | **15 de 15** | 750 | 0 |
| estatistica | **15 de 15** | 750 | 0 |
| matematica-fund | **15 de 15** | 750 | 0 |
| portugues-fund | **15 de 15** | 750 | 0 |

Raciocínio lógico está completo: 81 questões anteriores preservadas (51 de
proposições e conectivos, 30 de tabelas-verdade) e 670 novas. Das novas, 659
têm o gabarito recalculado em código; as 11 de falácias informais
(`argumentos-validos-e-falacias`) não se prestam a isso e estão listadas em
`revisao_independente_pendente` no relatório do arquivo.

Exatas nível militar está completa: 750 questões novas, todas com o gabarito
recalculado em código por um caminho diferente do da explicação. As funções
comuns estão em `.rascunho/questoes-objetivo/_exatas.mjs` (leitura de números,
complexos, polinômios e funções escritos como nas alternativas; eliminação,
bisseção, zeros, Simpson, Runge–Kutta; massas molares e balanceamento). Cada
rascunho de física e química monta o seu próprio modelo: circuitos por
análise nodal, campos por Biot–Savart, ciclos térmicos trecho a trecho,
reações pelo avanço até o primeiro reagente acabar, pH pelo balanço de cargas.

Cálculo I está completo: 750 questões novas, todas conferidas em código. As
funções comuns estão em `.rascunho/questoes-objetivo/_calculo.mjs`, com o
leitor de expressões `lerF` (funções escritas como nas alternativas, com
sen, cos, tg, ln, raízes, módulos e potências em sobrescrito), derivadas
numéricas com extrapolação de Richardson, limites por extrapolação, extremos
por varredura fina e comparação de funções ponto a ponto. A conferência
nunca usa a regra que a explicação usa: derivadas saem de diferenças
centrais (e as de ordem alta, da fórmula integral de Cauchy, com a função
avaliada no plano complexo); primitivas são conferidas derivando a
alternativa; integrais definidas, por Simpson; curvas implícitas, resolvendo
y por bisseção no ramo certo; otimização, varrendo a função objetivo montada
a partir da geometria do problema.

Estatística está completa: 750 questões, 712 delas com o gabarito recalculado
em código por um caminho diferente do da explicação. As funções comuns estão
em `.rascunho/questoes-objetivo/_estatistica.mjs`: integração da normal e das
densidades t, χ² e F por Simpson (nunca por tabela), bisseção para quantis,
enumeração de espaços amostrais e de tabelas de frequência expandidas,
convolução para a binomial, log-gama de Lanczos, simulação com semente fixa
(Box–Muller) e conjuntos de dados construídos com média, desvio e correlação
exatos. As 38 questões sem conferência em código são as puramente
conceituais — classificação de variável, nome de técnica de amostragem,
leitura de tipo de gráfico, formulação de H0/H1 — e estão listadas em
`revisao_independente_pendente` nos relatórios de
`populacao-amostra-e-tipos-de-variavel` (21), `tecnicas-de-amostragem` (12),
`graficos-estatisticos-e-sua-leitura` (3), `distribuicao-binomial` (1) e
`testes-de-hipotese` (1).

Matemática · 6º ao 9º está completa: 750 questões, todas com o gabarito
recalculado em código por caminho diferente do da explicação, e nenhuma
pendente de revisão independente. O módulo comum é
`.rascunho/questoes-objetivo/_matematica-fund.mjs` (mdc, mmc, fatoração,
frações exatas em pares [num, den], equação do 1º grau e sistema 2×2 por
Cramer), e cada conteúdo monta a sua própria conferência: aritmética
direta e permutações nos naturais; testes de propriedade nos inteiros;
frações exatas com leitura de número misto; divisão longa com detecção do
ciclo nas dízimas; BigInt nas potências; enumeração de múltiplos e
divisores; taxa unitária e trabalho total (pessoas × horas × dias) nas
proporções; fatores multiplicativos e simulação mês a mês nos juros;
equivalência de expressões testada em cinco pontos; substituição nas
equações e nos sistemas; figuras montadas em coordenadas (ângulos por
produto escalar, áreas pela fórmula de Gauss, distâncias por hypot).

Informática básica está completa: 750 questões (15 antigas, uma por conteúdo,
mais 735 novas). Das 735 novas, 254 têm o gabarito conferido em código e 481
estão em `revisao_independente_pendente` (o detalhe por conteúdo está nos
relatórios de `gerado/_relatorios/`). As conferências foram montadas por
conteúdo, sempre por um caminho diferente do da explicação: bytes, clusters e
RAID por contas diretas; chmod, umask, curingas e caminhos por simuladores;
fórmulas de planilha por um avaliador próprio (`_planilha.mjs`, no dialeto do
Excel em português, com cópia de fórmula que desloca referências relativas e
mistas); proporção de tela, folhetos e animação por simulação; endereçamento IP
por operações bit a bit (`_redes.mjs`); URLs pela API `URL` do Node e buscas
por um simulador de índice; destinatários de e-mail (Para, Cc, Cco) por
simulação e anexos pela codificação Base64 real; hashes e senhas por
`crypto` e BigInt; cifra de César, XOR e esquemas de backup por simulação;
disponibilidade em série e em paralelo e custos de nuvem por conta direta; SQL
executando a consulta em um SQLite real (`node:sqlite`), com o texto das
tabelas do enunciado gerado dos mesmos dados do banco de teste. O que não se
presta a isso (siglas, atalhos, definições, tipos de ataque, camadas e
protocolos) ficou como pendente de revisão independente.

Português de banca está completa: 750 questões (75 antigas, geradas pelo
Gemini, mais 675 novas). Das 675 novas, 23 têm o gabarito recalculado em
código e 652 estão em `revisao_independente_pendente`. As 23 são as de
leitura de regra aplicada a um caso, em `interpretacao-de-texto-tecnico__parte-2`
(a regra do texto vira função, o cenário vira dado, e o resultado tem de cair
na opção marcada). As demais são gramática, ortografia, pontuação, sintaxe,
semântica e redação oficial, que não se conferem em código. Para elas, cada
conteúdo passou por uma resolução às cegas: os enunciados foram embaralhados
com semente própria, sem a chave, e as respostas dadas foram comparadas com o
gabarito. Isso pegou um gabarito errado (obedecer à lei e respeitar as
autoridades, em `crase-casos-obrigatorios-e-proibidos`) e alguns enunciados
com defeito, mas **não é revisão independente**: quem resolveu foi quem
escreveu. Entraram só regras assentadas na gramática normativa; os casos em
que a gramática admite as duas formas ficaram de fora de propósito (a
maioria de, nem... nem, um dos que, adjetivo anteposto a vários substantivos,
visar e informar, entre outros). As 75 antigas continuam com a marca "NÃO
revisado" no cabeçalho e merecem revisão.

Português · 6º ao 9º está completo: 750 questões (100 antigas, geradas pelo
Gemini, em Substantivo e adjetivo e em Verbo: tempos e modos, mais 650 novas
em 13 conteúdos). As 650 novas são conceituais (classes de palavras, sujeito
e predicado, ortografia, acentuação, pontuação, concordância, gêneros
textuais, interpretação, vocabulário, figuras de linguagem e parágrafo) e não
se conferem em código: todas estão em `revisao_independente_pendente`. Cada
conteúdo passou pela resolução às cegas (enunciados e alternativas
embaralhados com semente própria, sem a chave, e respostas comparadas com o
gabarito) e as 650 bateram, mas, como nas outras matérias conceituais,
**isso não é revisão independente**: quem resolveu foi quem escreveu. As
contas das questões com tabela e porcentagem (texto informativo) foram
refeitas à mão. Entraram só regras e noções assentadas; ficaram de fora os
casos em que as gramáticas divergem. As 100 antigas continuam com a marca
"NÃO revisado" no cabeçalho, e `portugues-fund__verbo-tempos-e-modos.mjs` tem
uma opção com erro de grafia ("Pretériro") que precisa de correção.

As oito matérias estão cobertas: 120 conteúdos com 50 ou mais questões, 6.001
no total. O que resta não é gerar, e sim revisar: a revisão independente das
questões conceituais (informática 481, português de banca 652, português · 6º
ao 9º 650, estatística 38 e raciocínio lógico 11, fora as antigas marcadas
"NÃO revisado") e a decisão sobre o seed, que continua pendente de
autorização.

**Nada desta branch foi inserido no Supabase.** O seed só depois da revisão
e com autorização.

## Proteções de importação e do verificador

- **Verificador.** `scripts/checar-qualidade.mjs` lê arquivos com LF e com
  CRLF (o Git do Windows entrega CRLF com `core.autocrlf=true`, e antes disso o
  script aprovava "0 questões, sem problemas"). Agora ele confere o número de
  blocos lidos contra o número de campos `enunciado:` e, se não reconhecer as
  questões, sai com código 2 e diz "FALHA DE LEITURA".
- **Trava de revisão no seed.** `scripts/seed-questoes.mjs` só grava questão
  *liberada*. Fica *retida* a questão que o relatório do arquivo lista em
  `revisao_independente_pendente`, a de arquivo cujo cabeçalho diz "NÃO
  revisado" e a que o registro de revisão (`gerado/_revisao/<arquivo>.json`)
  marca como `pendente`. Só `aprovada` ou `corrigida` no registro libera. A
  regra está em `scripts/revisao-questoes.mjs`. Gravar mesmo com retidas exige
  as duas flags `--incluir-pendentes --confirmo-sem-revisao`.
- **Tudo local primeiro.** A validação e a trava rodam antes de qualquer
  conexão; a chave só é lida na hora de gravar. `npm run checar-seed`
  (`--offline`) faz só a parte local: não lê `.env.local`, não importa o
  cliente do Supabase, não precisa de `node_modules` e imprime, por matéria,
  quantas questões estão liberadas e quantas retidas. `--seco` agora é o mesmo
  que `--offline`.
- **Mesma trava no outro caminho.** `scripts/resemear-materia.mjs` (apaga e
  reinsere uma matéria) também recusa matéria com questão retida, antes de
  abrir conexão, e ganhou `--offline`.
- **Teste.** `npm run testar-trava-seed` monta pastas temporárias com
  relatórios e registros fabricados e confere o que a trava retém (offline).
- **Posição do gabarito sorteada.** Descoberto na revisão: o
  `rebalancear-gabarito.mjs` gastava as cotas em ordem (as dez primeiras
  questões em A, as dez seguintes em B…) e os arquivos vêm ordenados por
  dificuldade. Nas 6.001 questões das oito matérias, 76% das fáceis (1.086 de
  1.421) tinham o gabarito em A e 87% das difíceis (1.046 de 1.202), em E:
  dava para acertar pela dificuldade, sem saber o assunto. O script agora
  sorteia a posição com semente fixa tirada do nome do arquivo, e os 123
  arquivos foram regravados (4.863 questões mudaram de posição; enunciado,
  explicação e texto de cada alternativa ficaram intactos, conferido por
  comparação antes/depois). Depois: A 1.204, B 1.203, C 1.203, D 1.203,
  E 1.188, e a distribuição por dificuldade ficou uniforme. As outras
  matérias de `gerado/` (artes, física, química etc., 6.400 questões) não
  foram tocadas e têm o mesmo vício em grau menor: 653 das 1.357 fáceis
  (48%) têm o gabarito em A e 348 das 1.174 difíceis (30%), em E. Basta rodar
  o `rebalancear-gabarito.mjs` nesses arquivos, com autorização.
- **Registro das 271 antigas.** Os sete arquivos de questões anteriores (sem
  relatório de geração) entram em `gerado/_revisao/` com todas as questões
  `pendente`, de modo que a trava as segura mesmo onde o cabeçalho não diz
  "NÃO revisado".

Para conferir a qualidade a qualquer momento:

```bash
node scripts/checar-qualidade.mjs --resumo
npm run seed-questoes -- --seco
```

---

## 3. As cinco regras de redação

Saíram de defeito **medido** nos 150 arquivos antigos, não de gosto. Os
percentuais são do banco antigo, e é isso que não deve se repetir:

| regra | defeito que ela evita | incidência no banco antigo |
|---|---|---|
| 1. Enunciado termina em pergunta concreta | "...é relevante para compreender como:" e a correta só completa a frase | **20,7%** |
| 2. Distrator é erro que alguém comete | "não tem qualquer relação com" — elimina-se sem ler | **22,6%** |
| 3. Explicação identifica o distrator pelo ERRO, nunca pela posição | "o segundo distrator" quebra ao rebalancear | — |
| 4. Questão se sustenta sozinha | "como visto na questão anterior" | **11,1%** |
| 5. Explicação ≥ 320 caracteres | paráfrase da alternativa certa em vez de resolução | **44,6%** |

Uma sexta suspeita foi medida e **descartada**: "a correta é sempre a mais
longa" deu 19,3%, e com cinco alternativas o acaso é 20%. Não é vício.

O arquivo-molde, que segue as cinco, é
`supabase/seed-data/questoes/gerado/raciocinio-logico__proposicoes-e-conectivos-logicos.mjs`.
Leia-o antes de escrever o próximo.

---

## 4. O fluxo, passo a passo

```bash
# 1. escreva o arquivo, com a correta sempre em primeiro lugar (é o natural)
#    supabase/seed-data/questoes/gerado/<materia>__<tema-em-kebab>.mjs

# 2. as cinco regras
node scripts/checar-qualidade.mjs <materia>

# 3. distribui o gabarito pelas cinco letras
node scripts/rebalancear-gabarito.mjs supabase/seed-data/questoes/gerado/<arquivo>.mjs

# 4. grava
npm run seed-questoes -- --seco     # confere
npm run seed-questoes               # grava
```

**A ordem de 2 e 3 importa.** O rebalanceador move só a posição da correta e
não toca em texto. Se a explicação citar posição ("o terceiro distrator"), ele
transforma a explicação em mentira — por isso a regra 3 vem antes.

### Fluxo com conferência em código (lote 1 em diante)

Cada conteúdo nasce como rascunho em `.rascunho/questoes-objetivo/`, com a
correta em primeiro lugar e, quando o assunto permite, uma conferência que
recalcula o gabarito (`v.i` devolve o índice da única alternativa certa;
`v.n` devolve o valor numérico). Um só comando valida, grava, roda o
`checar-qualidade` e o `rebalancear-gabarito`, e escreve o relatório:

```bash
node scripts/montar-questoes-objetivo.mjs .rascunho/questoes-objetivo/<arquivo>.mjs --seco   # só valida
node scripts/montar-questoes-objetivo.mjs .rascunho/questoes-objetivo/<arquivo>.mjs          # grava
```

O montador recusa: tema fora do catálogo, enunciado sem pergunta, alternativa
repetida, correta muito mais longa que as outras, explicação curta ou que cita
posição, conferência vazia (`() => 0`) e conferência que aponta outra
alternativa. Avisa, sem recusar, quando duas questões ficam parecidas
(trigramas ≥ 0,60) — nesse caso, releia as duas.

O que a conferência já pegou, e vale lembrar ao escrever:

- **Recíproca que decorre por vacuidade.** Quando as premissas fixam o valor
  de todos os átomos (modus ponens com o fato dado), “se q, então p” passa a
  decorrer. Não serve de distrator nesses casos.
- **Quantificadores e conjuntos vazios.** “Todo A é B, logo algum A é B” só
  vale supondo que existe A. A conferência testa com e sem essa suposição e
  recusa a questão cujo gabarito depende dela; quando a suposição importa,
  ela vai escrita no enunciado.
- **Sequência com duas regras.** Uma bateria de regras comuns roda sobre os
  termos dados; se outra regra se encaixa e prevê outro número, a sequência é
  refeita ou ganha mais termos.
- **Barra invertida some quando o arquivo é gerado por outro script.** Dentro
  de uma string JavaScript, `\s` vira `s`; num heredoc do shell, `\\n` vira
  `\n`. Foi assim que o `normalizaOpcao` do montador passou a trocar a letra
  “s” por espaço (corrigido). Rascunhos e scripts se editam com o editor.

### Atalho: rascunho pelo Gemini (não pula a revisão)

`scripts/gerar-questoes.mjs` pede as questões ao Gemini com as cinco regras no
prompt, descarta as que já falham no contrato do seed, escreve o `.mjs` e roda
os passos 2 e 3 sozinho. **Para aí de propósito** — nenhum validador confere se
o gabarito está certo, e questão com gabarito errado ensina errado. É rascunho
para uma pessoa ler antes do passo 4.

```bash
node scripts/gerar-questoes.mjs --lista                  # o que falta
node scripts/gerar-questoes.mjs raciocinio-logico "Tabelas-verdade e equivalências"
node scripts/gerar-questoes.mjs raciocinio-logico --todos   # todos os temas sem arquivo
```

Precisa de `GEMINI_API_KEY` em `.env.local`. Num teste de 6 questões de De
Morgan, os 6 gabaritos saíram certos e o `checar-qualidade` passou limpo — mas
as questões saem repetitivas em lote, então a revisão humana continua sendo o
que garante a qualidade.

### Se precisar corrigir questão já semeada

`seed-questoes.mjs` pula enunciado que já existe, então ele não conserta uma
questão cujo gabarito ou explicação mudou. Use:

```bash
node scripts/resemear-materia.mjs <materia> --seco
node scripts/resemear-materia.mjs <materia>
```

Ele apaga e reinsere a matéria inteira, e **recusa** apagar qualquer questão
já respondida por alguém — o delete levaria o histórico junto, por cascade.

---

## 5. Armadilhas já pisadas

- **Gabarito todo na letra A.** Escrever a correta em primeiro lugar é o
  natural ao redigir, e as 51 primeiras questões foram para o banco assim:
  dava para gabaritar sem ler. O passo 3 existe por isso e não é opcional.
- **Matéria precisa existir na tabela antes das questões.**
  `questoes.materia_id` é chave estrangeira. Rode
  `node scripts/seed-materias-objetivo.mjs` primeiro. (Já rodado: a tabela
  `materias` tem 17 linhas.)
- **`REGRAS` não serve para validar as matérias novas.** Ela é o classificador
  das questões do ENEM, e não há questão do ENEM de Cálculo I. Quem valida é
  `scripts/catalogo-temas.mjs`.
- **`catalogo-temas.mjs` já ignorou as 8 matérias por objetivo em silêncio.**
  Ele lê `materias-objetivo.ts` por regex, e o arquivo foi salvo com quebra de
  linha do Windows (CRLF); o `split` não achava bloco nenhum e o catálogo
  voltava só com as 9 antigas — o `seed-questoes` passava a rejeitar toda
  questão de concurso/militar/fundamental com "matéria desconhecida".
  Corrigido em 27/08/2026 tornando os regex tolerantes a `\r`. Se mexer nesse
  arquivo de novo, rode `node -e "import('./scripts/catalogo-temas.mjs').then(m=>console.log(m.resumoCatalogo()))"`
  e confirme que aparecem **17 matérias, 255 temas**.
- **`incidencia` é `null` nas matérias novas, e tem de continuar assim.** Nas
  nove antigas ela vira barra com tooltip "Incidência histórica: N%", uma
  afirmação sobre quantas vezes o assunto caiu. Não há levantamento desses
  dados para concurso, militar, cálculo ou fundamental. `null` faz a interface
  omitir a barra; um número inventado faria o site mentir.

---

## 6. Onde cada peça está

| arquivo | papel |
|---|---|
| `lib/conteudo/materias-objetivo.ts` | as 8 matérias e seus 120 temas |
| `lib/conteudo/materias.ts` | as 9 antigas + `materiasDoObjetivo()` |
| `lib/tipos.ts` | `Materia.objetivos`, `Topico` com incidência anulável |
| `components/secoes/Cronograma.tsx` | recorta o seletor de matérias pelo objetivo |
| `lib/cronograma.ts` | `OBJETIVOS` (o select) e `PESOS` (ordem de peso padrão) |
| `scripts/seed-materias-objetivo.mjs` | põe as matérias na tabela |
| `scripts/catalogo-temas.mjs` | catálogo (matéria → temas) válido |
| `scripts/checar-qualidade.mjs` | as cinco regras |
| `scripts/rebalancear-gabarito.mjs` | distribui a correta pelas letras |
| `scripts/gerar-questoes.mjs` | rascunho pelo Gemini (não semeia; ver seção 4) |
| `scripts/resemear-materia.mjs` | corrige matéria já semeada |

---

## Achado à parte: erro de hidratação pré-existente

Durante a verificação da importação do SiSU (27/08/2026), o console mostrou:

```
Hydration failed because the server rendered HTML didn't match the client
```

Confirmado que **não é causado pela integração do SiSU**: o erro aparece até
em `/entrar`, página que não toca `Faculdades` nem `lib/conteudo/faculdades.ts`.
É algo global — Nav, layout ou outro componente client-side compartilhado.
Não investigado a fundo; fora do escopo desta sessão.
