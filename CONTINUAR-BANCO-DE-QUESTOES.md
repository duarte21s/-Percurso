# Banco de questões — documento de continuidade

Este arquivo existe para que outra sessão retome a geração do banco exatamente
de onde parou, sem precisar reconstruir contexto. Leia-o inteiro antes de
escrever qualquer questão.

---

## 1. O objetivo

Gerar **50 questões inéditas para cada um dos 135 conteúdos** (9 matérias × 15
conteúdos), totalizando **6.750 questões**. Cada questão precisa ter:

- enunciado autossuficiente (sem depender de imagem);
- **5 alternativas**, todas distintas;
- **uma única** correta, indicada por `correta` (índice 0 a 4);
- **explicação** que justifica o gabarito e comenta os distratores.

A lista canônica dos 135 conteúdos está em `lib/conteudo/materias.ts` e é
espelhada em `scripts/regras-temas.mjs`. **O campo `tema` de cada questão tem
de bater exatamente (string idêntica) com o nome do tópico nessa lista** — o
validador rejeita qualquer divergência.

---

## 2. Onde estamos (6.773 de 6.750 — meta batida e superada, 135/135 ✅)

Confirmado rodando `npm run seed-questoes -- --seco` (modo seco, não grava):
**"135 temas cobertos de 135"**, 6.773 questões válidas (1 repetida entre
arquivos foi descartada automaticamente pelo próprio seed).

| Matéria | Conteúdos prontos | Questões (contadas pelo seed) |
|---|---|---|
| Matemática | **15/15 ✅** | 750 |
| Português | **15/15 ✅** | 752 |
| Física | **15/15 ✅** | 762 |
| Química | **15/15 ✅** | 758 |
| Biologia | **15/15 ✅** | 751 |
| História | **15/15 ✅** | 750 |
| Filosofia | **15/15 ✅** | 750 |
| Artes | **15/15 ✅** | 750 |
| Inglês | **15/15 ✅** | 750 |

**Todos os 135 conteúdos têm no mínimo 50 questões cada.** O total final
(6.773) passa dos 6.750 "ideais" porque Física, Química, Português e
Biologia já tinham alguns temas com mais de 50 questões antes do passe de
complementação, e esses não foram cortados — só os temas abaixo de 50 foram
completados até bater exatamente 50. Filosofia e Artes, que numa primeira
passada desta sessão haviam ficado com bem menos de 50 questões por
conteúdo (chegando a 12-40), foram completados num segundo passe usando
múltiplos agentes em paralelo (ver seção 9).

### Últimos arquivos de Inglês, concluídos nesta sessão

`Reading strategies: skimming e scanning` (50 Q), `Connectives e linking
words` (50 Q), `Phrasal verbs mais cobrados` (50 Q), `Vocabulário por campo
semântico` (50 Q), `Interpretação de charges e tirinhas` (50 Q), `Textos
jornalísticos e científicos` (50 Q), `Reported speech` (50 Q), `Word
formation: prefixos e sufixos` (50 Q), `Inferência e ideia principal`
(50 Q), `Pronomes e referência textual` (50 Q) — **o último conteúdo do
banco, concluído agora.** Os cinco arquivos legados de Inglês (`Cognatos e
falsos cognatos`, `Verb tenses`, `Modal verbs`, `Conditionals`, `Passive
voice`) já existiam antes desta sessão, também com 50 Q cada.

### Filosofia — 15/15 ✅ (arquivos desta e de sessões anteriores)

`Filosofia antiga: Sócrates, Platão e Aristóteles` (40 Q), `Ética e moral`
(40 Q), `Contratualismo: Hobbes, Locke e Rousseau` (40 Q), `Filosofia
política e democracia` (40 Q), `Teoria do conhecimento: racionalismo x
empirismo` (39 Q), `Kant e o imperativo categórico` (38 Q), `Escola de
Frankfurt e indústria cultural` (35 Q), `Existencialismo: Sartre e
Beauvoir` (30 Q), `Nietzsche e a crítica à moral` (27 Q), `Sociologia
clássica: Marx, Durkheim e Weber` (25 Q), `Cidadania e direitos humanos`
(22 Q), `Bioética e dilemas contemporâneos` (21 Q), `Estado, poder e
Maquiavel` (18 Q), `Trabalho, alienação e capitalismo` (18 Q), `Movimentos
sociais e identidade` (17 Q).

### Artes — 15/15 ✅

`Renascimento e Barroco` (17 Q), `Barroco e Aleijadinho no Brasil` (15 Q),
`Impressionismo e pós-impressionismo` (15 Q), `Vanguardas europeias`
(15 Q), `Semana de Arte Moderna de 1922` (15 Q), `Modernismo brasileiro:
Tarsila e Portinari` (13 Q), `Arte contemporânea e instalação` (14 Q),
`Arte indígena e afro-brasileira` (13 Q), `Fotografia e cinema como
linguagem` (13 Q), `Música popular brasileira` (13 Q), `Teatro: do grego
ao contemporâneo` (13 Q), `Patrimônio cultural e tombamento` (12 Q), `Arte
grega e romana` (13 Q), `Dança e corpo como expressão` (12 Q), `Design,
publicidade e cultura visual` (12 Q).

### O que falta agora

Nada relacionado à geração de conteúdo — **todos os 135 conteúdos têm 50+
questões**. O que resta são as tarefas de fechamento listadas na seção 8:
o passe opcional de avisos de "alternativa longa demais" (não bloqueia) e
rodar `npm run seed-questoes` (sem `--seco`) para gravar as questões novas
no Supabase — a última rodada de gravação foi antes desse segundo passe de
complementação, então há mais questões novas para inserir.

### Observação sobre os avisos de "alternativa correta longa demais"

Em vários arquivos de Química (sobretudo os de conceito/definição, como
`quimica-ambiental-e-sustentabilidade`, `radioatividade-e-quimica-nuclear`,
`cinetica-quimica`), o padrão de escrever a alternativa correta como frase
completa e os distratores como negações curtas gerou bastante aviso de
"alternativa correta bem mais longa". Isso ficou pendente para o passe final
(tarefa #7 da seção 8) — não corrigi individualmente para não perder tempo
de geração de conteúdo. Ao rodar `checar-questoes.mjs` em cada arquivo do
lote, esses avisos vão reaparecer; a correção é só alongar os distratores
mais curtos até ficarem com tamanho comparável ao da alternativa correta,
sem mudar o sentido.

---

## 3. Como produzir — o fluxo que funciona

Para **cada** conteúdo, três passos:

**(a) Escrever o arquivo** em
`supabase/seed-data/questoes/gerado/<materia>__<slug-do-tema>.mjs`

O slug é o tema em minúsculas, sem acentos, sem dois-pontos, com hifens no
lugar dos espaços. Exemplos que já existem:
`fisica__optica-geometrica-espelhos-e-lentes.mjs`,
`portugues__morfologia-classes-de-palavras.mjs`.

Formato do arquivo (copie de qualquer um já pronto):

```js
/* <Nome do tema> (50 questões).
   Uma linha ou duas sobre o recorte de conteúdo coberto.
   Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "media",            // "facil" | "media" | "dificil"
    enunciado:
      "Texto do enunciado, com no mínimo 40 caracteres…",
    opcoes: ["a", "b", "c", "d", "e"],
    correta: 2,
    explicacao:
      "Por que a correta está certa + por que os principais distratores enganam.",
  },
  // … 50 no total
];
```

> **Atenção ao tamanho.** Um arquivo de 50 questões passa de 35 KB. Heredoc no
> Bash estoura o limite de linha de comando do Windows — use a ferramenta de
> escrita de arquivo para o corpo do `.mjs`. Bash serve bem para leitura,
> busca, `sed` pontual e para rodar os scripts.

**(b) Equalizar o gabarito:**

```bash
node scripts/rebalancear-gabarito.mjs supabase/seed-data/questoes/gerado/ARQUIVO.mjs
```

Esse script foi criado nesta empreitada. Ele **não reescreve texto** — apenas
move a alternativa correta de posição dentro da lista, preservando a ordem
relativa das demais, até a distribuição ficar 10/10/10/10/10. Isso elimina o
vazamento de "chutar sempre a letra B". Ele regrava o arquivo com formatação
uniforme, mantendo o comentário de cabeçalho.

**(c) Validar:**

```bash
node scripts/checar-questoes.mjs supabase/seed-data/questoes/gerado/ARQUIVO.mjs
```

Só siga adiante quando aparecer `OK: o arquivo passa em todas as regras do seed.`

---

## 4. Erros que o validador pega e como evitá-los

| Erro | Causa | Prevenção |
|---|---|---|
| `enunciado curto demais` | enunciado com menos de 40 caracteres | nunca escreva enunciado do tipo "As fases da Lua resultam:" — contextualize antes da pergunta |
| `tema não existe em <materia>` | string do `tema` diferente da lista oficial | copie o nome exato de `lib/conteudo/materias.ts` |
| `há alternativas repetidas` | duas opções com texto idêntico | revise antes de salvar |
| `o enunciado manda olhar uma figura` | uso de "observe o gráfico", "a tabela abaixo", "considere a figura" | **escreva os dados no próprio enunciado** ("Um levantamento registrou: janeiro 120, fevereiro 150…") |

Há também um **aviso** (não bloqueia) quando a alternativa correta é muito mais
longa que as outras — dá para acertar só medindo. Vale corrigir alongando os
distratores. Está registrado como pendência na tarefa #11.

---

## 5. Padrões de qualidade que venho seguindo

- **Contas fechadas.** Em Matemática, Física e Química, escolha números que
  deem resultado limpo. Se o resultado sair quebrado, **mude os dados do
  enunciado**, não force a alternativa. (Já corrigi dois casos assim: um de
  mola/energia e um de equilíbrio térmico.)
- **Distratores com motivo.** Cada alternativa errada deve corresponder a um
  erro plausível — esquecer de dividir por 2, usar o diâmetro no lugar do raio,
  inverter a razão. A explicação nomeia esses erros.
- **Explicação em 2 a 4 frases**, ensinando algo além do gabarito: o atalho, a
  conferência de ordem de grandeza, a pegadinha recorrente.
- **Mistura de dificuldade** dentro do arquivo: aproximadamente 20% fácil,
  60% média, 20% difícil.
- **Nada de imagem.** Todo dado numérico, texto-base ou série de valores vai
  escrito no enunciado.

---

## 6. Integração — já está pronta, não precisa mexer

O pipeline existia no projeto e foi validado ponta a ponta:

```bash
npm run seed-questoes -- --seco   # confere e conta, não grava
npm run seed-questoes             # grava no Supabase
```

O seed varre `supabase/seed-data/questoes/` e um nível de subpasta (`gerado/`),
então **arquivos novos são detectados automaticamente**. É idempotente: lê os
enunciados que já existem no banco e insere só o que é novo — pode rodar de
novo a cada matéria concluída.

**Estado atual: PROJETO 100% CONCLUÍDO.** `npm run seed-questoes` foi
executado duas vezes: a primeira gravou 5.095 questões novas (+ 548 que já
existiam de antes = 5.643); a segunda, após o passe de complementação que
levou todos os 135 temas a pelo menos 50 questões, gravou mais 1.129
questões novas. **Total ativo no Supabase: 6.772 questões, 135/135 temas
cobertos.** As questões já estão disponíveis no site.

O site roda local em `http://localhost:3000` (`npm run dev` ou `ABRIR-O-SITE.bat`).
Não está publicado em nenhum servidor.

---

## 7. Prompt sugerido para retomar em outra janela

> **A geração de conteúdo deste projeto está concluída.** Os 135 conteúdos
> das 9 matérias têm no mínimo 50 questões cada (6.773 no total), escritas,
> rebalanceadas e validadas. Falta só rodar `npm run seed-questoes` (sem
> `--seco`) para gravar as questões do segundo passe de complementação no
> Supabase — confira antes com `npm run seed-questoes -- --seco` quantas
> questões estão nos arquivos locais vs. quantas já estão no banco. Se este
> arquivo for lido bem depois, confira se ainda é esse o estado antes de
> assumir que há trabalho pendente. A única tarefa opcional que restou é o
> passe de polimento nos avisos de "alternativa correta longa demais"
> (seção 8) — não bloqueia nada, é só qualidade extra.

---

## 8. Pendências registradas

- [x] Gerar todos os 135 conteúdos do banco — **concluído**, incluindo o
      último arquivo, Pronomes e referência textual (50 Q).
- [x] Completar Filosofia, Artes, Biologia, História, Física e Química até
      todo tema ter no mínimo 50 questões — **concluído** (ver seção 9).
- [x] Rodar `npm run seed-questoes` (sem `--seco`) de novo para gravar as
      questões do segundo passe — **concluído**: 1.129 questões novas
      inseridas nessa segunda rodada.
- [x] Rodar `npm run seed-questoes` pela primeira vez — **concluído**: 5.095
      questões novas inseridas no Supabase (548 já existiam) nessa primeira
      rodada. Total combinado das duas rodadas: **6.772 questões ativas**.
- [x] Conferir cobertura: `npm run seed-questoes -- --seco` reportou
      **135 temas cobertos de 135** — confirmado.
- [ ] Passe final (opcional, não bloqueia nada): rodar o checador em todos
      os arquivos, coletar os avisos de "alternativa correta longa demais"
      e alongar os distratores mais curtos das questões apontadas. Só
      qualidade extra, não afeta a cobertura nem a validade do conteúdo.

---

## 9. Como o passe de complementação foi feito (referência)

Depois da primeira gravação no Supabase, uma checagem revelou que nem todo
tema tinha 50 questões: Filosofia (17-40 por tema), Artes (12-17), Biologia
(24-49 em alguns temas), História (40-47) e Química/Física (alguns temas
com 44-49) ficaram abaixo da meta. Para completar ~1.130 questões de uma
vez, o trabalho foi paralelizado em **11 agentes em segundo plano**, cada
um responsável por 3 a 15 arquivos de uma matéria, seguindo o mesmo fluxo
manual (ler o arquivo, confirmar `tema` em `materias.ts`, confirmar regras
em `regras-temas.mjs`, escrever só ao final do array, rodar
`rebalancear-gabarito.mjs` e `checar-questoes.mjs`). Os arquivos pequenos
de Física e Química (poucas questões faltando) foram completados
diretamente, sem agente.

Os agentes esbarraram várias vezes no limite de sessão do plano e precisaram
ser retomados com `SendMessage` (usando o `agentId` retornado no spawn) após
cada reset — retomar preserva o progresso e o contexto do agente, então
nenhum trabalho foi perdido nem duplicado nas interrupções. Todos os 11
terminaram com sucesso e validação limpa (`checar-questoes.mjs` → "OK").
