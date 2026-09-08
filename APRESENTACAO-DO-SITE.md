# Percurso — Guia completo para a apresentação

Documento de apoio para preparar os slides. Reúne tudo o que foi extraído do código e dos documentos internos do projeto, em linguagem não técnica. Escrito em 02/09/2026, a partir do estado mais recente do repositório, e revisado contra o código em seguida.

---

## Sumário

1. Resumo executivo
2. O que é o site, o problema que resolve e para quem
3. Identidade: nome, tom, paleta, fonte e a animação do hero
4. Funcionalidades, área por área
   - 4.1 Estudar (questões comentadas por assunto)
   - 4.2 Provas do ENEM (modo prova cronometrado)
   - 4.3 Redação (correção nas 5 competências do INEP)
   - 4.4 Comunidade (fórum de estudos)
   - 4.5 Perfil e Painel (dois lugares diferentes)
   - 4.6 Cronograma de estudos
   - 4.7 Faculdades (índice de concorrência)
   - 4.8 Chama de Estudos e conquistas
   - 4.9 Banco de questões (o que alimenta tudo)
5. Números do projeto
6. Diferenciais e pontos fortes para destacar
7. Como funciona por dentro (a tecnologia em um parágrafo)
8. Status atual: o que já funciona e o que ainda falta
9. Roteiro de apresentação sugerido (slide a slide)
10. Imagens disponíveis no repositório
11. Glossário de termos
12. Observações importantes e pontos a confirmar com o dono

---

## 1. Resumo executivo

O **Percurso** é uma plataforma web de estudos para ENEM, vestibulares, concursos públicos, carreiras militares e reforço escolar (6º ao 9º ano). Ele reúne num só lugar um banco de questões com gabarito comentado, as 15 provas reais do ENEM (de 2009 a 2023) em modo prova cronometrado, correção de redação nas cinco competências do INEP (por texto digitado ou por foto da folha manuscrita), um gerador de cronograma com revisão espaçada, uma tabela comparativa de concorrência das faculdades brasileiras e uma camada de comunidade em que a dúvida fica presa a cada questão.

O método declarado do produto é "erre agora, não na prova": cada questão traz um comentário que explica também por que as alternativas erradas enganam, e o gabarito abre logo abaixo da alternativa que a pessoa marcou. O princípio central é a **honestidade de dados** — o site não anuncia no marketing nenhum conteúdo que o banco não tenha de fato, e os números da página inicial são contados do banco em tempo real, não escritos como peça de propaganda.

Hoje o projeto é um MVP completo e funcional, mas roda apenas no computador de quem desenvolve (endereço local), sem estar publicado na internet e sem base de usuários reais. É, portanto, um produto pré-lançamento. Funciona como site no navegador (computador ou celular); **ainda não há aplicativo instalável** — o app para celular e o modo offline estão no roadmap.

---

## 2. O que é o site, o problema que resolve e para quem

### 2.1 O que é

Um "cursinho digital honesto" que cobre da escola ao concurso. Não é um site de videoaulas — não há nenhuma aula em vídeo no projeto. A proposta é medir o acerto e corrigir a rota: você responde questões, entende por que errou, faz provas inteiras como no dia do exame, treina redação e organiza a semana.

Frase pronta do material interno (README), boa para o primeiro slide:

> "Site para ENEM, vestibulares, concursos, carreiras militares e reforço escolar. Banco de questões, contas de usuário, simulado que salva onde você parou e gabarito comentado que abre logo abaixo da alternativa marcada."

Descrição oficial curta:

> "Plataforma de estudos para ENEM, vestibulares, concursos públicos e reforço escolar. Nove matérias, banco de questões comentadas, notas de corte das faculdades brasileiras e cronograma personalizado."

### 2.2 O problema que resolve

O Percurso combate o estudo desorganizado e sem método. Cada dor tem uma resposta dentro do site:

| Dor de quem estuda sozinho | Resposta do Percurso |
|---|---|
| Não saber por onde começar | Cronograma que distribui a semana por objetivo |
| Estudar o que gosta em vez do que cai | Assuntos com a "incidência histórica" ao lado |
| Errar uma questão e nunca mais reencontrá-la | Gabarito comentado alternativa por alternativa; discussão presa à questão |
| Progresso que some ao fechar a aba | Sessão retomável, presa à conta, salva a cada resposta |
| Notas de corte confusas, apresentadas como oficiais | Índice comparativo de concorrência, explicitamente **não** "nota de corte oficial" |
| Textos de apoio da redação espalhados | Link direto para os cadernos oficiais do INEP |

O fio condutor é "medir o acerto e corrigir a rota", não "assistir mais aula".

### 2.3 Público-alvo

Cinco focos de preparação:

- **Reforço escolar** (6º ao 9º ano e ensino médio)
- **ENEM**
- **Vestibular**
- **Concurso público**
- **Carreira militar**

O conteúdo se divide em **9 matérias de ensino médio** (Matemática, Português, Física, Química, Biologia, História, Filosofia, Inglês, Artes) e mais **8 matérias criadas por objetivo** (Raciocínio lógico, Informática básica, Português de banca, Exatas nível militar, Cálculo I, Estatística, Matemática 6º–9º, Português 6º–9º) — **17 no catálogo**. Na prática, porém, só as 9 de ensino médio estão com o banco cheio: das 8 por objetivo, apenas 3 têm questões hoje, e poucas (ver seção 4.9). A página inicial mostra "9 matérias". O gerador de cronograma tem ainda uma sexta opção de objetivo, "já na faculdade".

**Fronteiras assumidas, para não prometer demais:** não há matéria de direito ou legislação, e o banco de questões hoje só tem ENEM e material autoral — nada de Fuvest, Cebraspe, ITA, IME, Unicamp e afins. Todas as questões são de múltipla escolha (não há questão de certo/errado).

---

## 3. Identidade: nome, tom, paleta, fonte e a animação do hero

### 3.1 Nome e assinatura

O produto se chama **Percurso**. Na barra de navegação aparece a palavra "Percurso" com um pequeno selo "Estudos" ao lado. Não há registro de entidade legal no repositório, então trate "Estudos" apenas como uma assinatura visual, não como parte de um nome empresarial. Use "Percurso", com a assinatura "plataforma de estudos".

O título do site é: *"Percurso — Estude para o ENEM, vestibulares e concursos"*.

A metáfora central é o estudo como um **percurso** que vai da página em branco até a aprovação. O logo não é um arquivo de imagem: é um desenho vetorial embutido no código, formado por dois arcos espelhados que sugerem um livro aberto.

### 3.2 Tom de voz

Direto, sóbrio, "professor honesto". Fala com a pessoa na segunda pessoa ("você"), sem hype, sem promessa exagerada. A regra de **não prometer no site o que o banco não tem** já foi cobrada três vezes pelo dono do projeto e é tratada como princípio, não como detalhe.

### 3.3 As quatro frases do hero

Aparecem uma de cada vez conforme a pessoa rola a página inicial. Servem como linhas de abertura de slides:

1. "Todo objetivo começa numa página em branco."
2. "Estude o que cai. Do jeito que cai."
3. "Cada página vira uma questão a menos."
4. "Da primeira página à aprovação."

### 3.4 Paleta de cores (com os hex)

A paleta se chama **"Pedra + verde-pinho"**: fundos off-white levemente quentes (a "pedra") com um acento verde-pinho puxado ao teal. O tema **claro é o padrão**; há um tema escuro coerente que entra pela preferência do sistema operacional ou por um botão de sol/lua.

| Papel da cor | Tema claro | Tema escuro |
|---|---|---|
| Fundo da página | `#fcfcfb` | `#0e100e` |
| Superfície secundária | `#f4f4f1` / `#f9f9f7` | `#141613` / `#191c17` |
| Linhas / bordas | `#e0e0d9` | `#2f342d` |
| Texto principal | `#1c1c19` | `#f0f1ee` |
| Texto secundário | `#57574f` | `#a9aba3` |
| Acento (verde-pinho / cor de marca) | `#1f6356` | `#4fc0a6` |
| Acerto / resposta certa (verde-grama) | `#43741f` | `#7ccc55` |
| Erro (tijolo) | `#b23a2a` | `#f26a52` |

**Detalhe bom para contar num slide:** o verde da marca e o verde de "resposta certa" são dois tons de verde **deliberadamente distantes no círculo de cores** — longe o suficiente para o olho nunca ler um como o outro. Se ficassem parecidos, a cor da marca se confundiria com "acertou". Há ainda uma terceira variante de cada cor para o modo de alto contraste do sistema. As sombras são marrom-quentes, não pretas.

### 3.5 Fonte

**Uma fonte só no site inteiro: a Inter.** Carregada com os conjuntos de caracteres "latin" e "latin-ext" (o segundo por causa dos acentos do português, para o navegador não trocar de fonte no meio da palavra). Serve para corpo, botões e títulos.

Decisões de tipografia dignas de menção: o espaçamento entre letras e entre linhas é definido por tamanho de texto, não um valor único; os pesos usados são 400 (corpo), 500 (rótulos) e 600 (ênfase e títulos) — nunca 700 em código novo; e o site nunca usa itálico — nas palavras destacadas dentro de um título, em vez de inclinar a letra, ela ganha a cor do acento.

### 3.6 A animação do hero

O topo da página inicial é a peça de efeito. Enquanto a pessoa rola, a tela fica parada e o progresso da rolagem controla, quadro a quadro, um **vídeo de um livro que se abre**. Ao mesmo tempo, as quatro frases se trocam, cada uma surgindo letra a letra, e uma barrinha de progresso mostra em qual das quatro frases a pessoa está ("capítulo 01" a "04").

- A área de rolagem do hero tem o equivalente a cerca de **sete telas** de altura (700vh, na medida usada no código), reduzida para cerca de **3,5 telas** no celular (~340vh). *(O README ainda cita o valor antigo, equivalente a ~4,5 telas — "460vh"; está desatualizado.)*
- O vídeo do livro foi **gerado com inteligência artificial** especificamente para isso (ferramentas Kling / Higgsfield). É um arquivo de cerca de 5,7 MB, 1920×1080, 60 quadros por segundo, ~4,97 segundos. Ele é montado de um jeito especial — todos os 298 quadros são "quadros-chave" — para que a rolagem possa pular para qualquer instante do vídeo sem travar.
- Há **três camadas de degradação** (mostra robustez): (1) o vídeo controlado pela rolagem; (2) se o vídeo falhar ou demorar mais de 4 segundos, um livro montado em CSS 3D assume; (3) se a pessoa pediu "menos movimento" nas preferências do sistema, o hero vira uma seção estática, sem animação nenhuma.
- Cenografia extra: uma grade sutil ao fundo, um brilho verde que cresce, 26 partículas flutuantes, uma pílula com "ENEM · Vestibulares · Concursos · Escola" e um mouse animado dizendo "Role para abrir".

Toda a interface usa a biblioteca de animação **GSAP**. As seções de marketing aparecem com um leve deslize ao entrar na tela; as transições entre páginas usam só movimento (nunca opacidade), de propósito, para nunca deixar a página presa invisível.

---

## 4. Funcionalidades, área por área

> **Dois nomes que se confundem, fixados aqui:**
> - **Estudar** — a sessão curta por assunto (3 a 45 questões), com o gabarito comentado abrindo a cada resposta. **Sem cronômetro.**
> - **Provas do ENEM** — a prova inteira (180 questões), cronometrada, sem dizer se você acertou até entregar. A nota sai só no fim.
>
> Quando este documento disser "sessão de estudo" ou "simulado de treino", é a primeira. "Modo prova" é sempre a segunda.

### 4.1 Estudar — questões comentadas por assunto

**O que a pessoa faz, passo a passo:**

1. Abre a página **Estudar** (precisa de conta; dá para testar como visitante por 60 minutos).
2. Abre uma matéria numa lista sanfonada (pode filtrar por área: Exatas, Natureza, Humanas, Linguagens).
3. Ao lado de cada assunto vê **quantas questões comentadas existem de verdade** — número real, não promessa. Assunto sem questão fica apagado e não dá para marcar.
4. Marca um ou mais assuntos, sempre dentro da mesma matéria.
5. Escolhe o tamanho da sessão num controle deslizante: de **3 a 45 questões** (padrão 10).
6. Clica em "Estudar agora". O site sorteia as questões **uma vez** e congela a lista.
7. Responde uma questão por vez, marcando de A a E.
8. Assim que marca, o **gabarito e o comentário abrem logo abaixo da alternativa**: por que a certa está certa e por que cada alternativa errada engana.
9. Abaixo do comentário há um espaço de discussão da comunidade sobre aquela questão (abre só depois de responder, para não entregar pista).
10. No fim, aparece o aproveitamento ("X% em tal assunto") e o resultado entra no histórico do Painel.

**Por que é útil:** cada resposta é salva na hora — dá para fechar a aba na questão 7 e voltar depois exatamente onde parou. O valor não está em saber que errou, e sim em entender por quê. Responder qualquer questão no dia acende a Chama de Estudos.

**Limites honestos, para não exagerar no slide:** só entram no "Estudar por assunto" as questões que já têm comentário escrito (as questões cruas do ENEM ficam para o modo prova). **Não há cronômetro** aqui — cronômetro é só no modo prova. **Não há uma fila automática de revisão dos erros**; a "revisão espaçada de verdade" no estudo está no roadmap, ainda não existe.

### 4.2 Provas do ENEM — modo prova cronometrado

*Como a prova é organizada:* uma prova do ENEM tem **180 questões em 4 blocos de 45** (2 blocos por dia). A área de cada bloco (Linguagens, Humanas, Natureza, Matemática) é deduzida da própria prova, porque o ENEM trocou a ordem das áreas em 2017; Matemática é sempre o último bloco.

**O que a pessoa faz, passo a passo:**

1. Abre **Provas do ENEM** (precisa de conta).
2. Vê as **15 edições, de 2009 a 2023**, em cartões — cada um com número de questões, tempo estimado e o resultado da sua última tentativa.
3. Escolhe um ano.
4. Antes de começar: escolhe a língua estrangeira (**Inglês ou Espanhol**) e decide se faz a redação daquele ano junto ("Com redação" ou "Só as questões").
5. Clica em "Começar a prova". O relógio de **660 minutos** (perto de 11 horas — é um arredondamento; os dois dias reais do ENEM somam 10h30) começa a correr só nesse momento.
6. Navega livremente pelas **180 questões**, com "Anterior / Próxima" e um cartão-resposta lateral que mostra todas as questões como bolinhas, agrupadas por dia e por bloco de área.
7. Marca e desmarca à vontade enquanto a prova está aberta. O site **nunca diz se você acertou**.
8. Pode fechar a aba: o relógio e as marcações continuam de onde pararam, mesmo dias depois.
9. Clica em "Entregar prova" (ou o tempo acaba e ela é entregue sozinha).
10. **Só então** aparece o resultado: acertos, erros, em branco, aproveitamento em % e uma barra de acerto por área do ENEM.
11. Na revisão, a alternativa certa fica verde e a marcada errada fica vermelha. Dá para pedir "Explicar esta questão" — a IA escreve o comentário na hora, e ele fica salvo para a próxima pessoa que errar.

**Por que é útil:** reproduz a pressão do exame real — você responde tudo primeiro e vê a nota só no fim, com o desempenho separado por área. É retomável ao longo de vários dias. As provas **não são digitadas à mão**: vêm de uma base pública e aberta (api.enem.dev) que converte os PDFs oficiais do INEP em dados, e o site credita e linka o INEP em cada prova.

### 4.3 Redação — correção nas 5 competências do INEP

**O que a pessoa faz, passo a passo:**

1. Abre **Redação** (precisa de conta).
2. Vê os **19 temas reais** — todas as edições de 2009 a 2023, mais 4 reaplicações (marcadas como "reaplicação"). Se já fez, o cartão mostra a melhor nota.
3. Abre um tema. Lê a proposta e a regra (texto dissertativo-argumentativo de 7 a 30 linhas, com proposta de intervenção que respeite os direitos humanos). O link leva ao caderno oficial do INEP com os textos de apoio — **o site não reproduz esses textos**.
4. Escolhe uma das duas formas de entregar:
   - **Digitar**: escreve num campo que lembra papel pautado, com contador aproximado de linhas.
   - **Mandar foto**: fotografa a folha escrita à mão (JPG, PNG ou WEBP até 8 MB; no celular, abre a câmera direto).
5. Clica em "Corrigir minha redação".
6. Em alguns segundos recebe: a **nota de 0 a 1000**; **cinco cartões**, um por competência (C1 domínio da norma culta, C2 compreensão do tema, C3 organização dos argumentos, C4 coesão, C5 proposta de intervenção), cada um com a nota e a justificativa citando trechos do próprio texto; um bloco "O que treinar primeiro"; e, se mandou foto, um expansível "Ver o que a correção leu da sua letra" com a transcrição.
7. As notas anteriores no mesmo tema ficam listadas para comparar.

**Por que é útil:** dá um retorno estruturado na mesma grade do exame. As regras reais valem: cada competência vai de 0 a 200 em degraus de 40 (total até 1000); fuga ao tema zera tudo; violar direitos humanos zera a competência 5; menos de 7 linhas zera. Quando a entrega é por foto, o modelo transcreve a letra primeiro (marcando "[ilegível]" no que não dá) e corrige a partir da transcrição — que fica visível para a pessoa conferir. A foto vai para um espaço privado, preso à conta.

**Aviso que o próprio site exibe:** "A correção é feita por IA seguindo a grade oficial do INEP... não é a nota oficial, e correção humana pode divergir, principalmente nas competências 2 e 3."

Quem escolheu "Com redação" ao abrir uma prova do ENEM encontra a folha no topo da prova e escreve quando quiser — antes, durante ou depois das questões.

### 4.4 Comunidade — fórum de estudos

**O que a pessoa faz, passo a passo:**

1. Qualquer pessoa, **mesmo sem conta**, abre a Comunidade e lê o feed e os perfis.
2. Para participar (publicar, comentar, curtir, salvar, denunciar) é preciso ter conta real **e escolher um nome de usuário** (@algo, de 3 a 20 caracteres, trocável no máximo uma vez a cada 30 dias).
3. No feed, alterna entre abas: **Recentes, Populares, Perguntas** e — para quem está logado — **Meus posts** e **Salvos**. Dá para filtrar por tag de matéria.
4. Para publicar, escolhe o tipo — **Pergunta, Discussão, Compartilhamento ou Dica** — escreve o texto (até 5.000 caracteres), pode anexar um bloco de código ou um link, e adiciona até 5 tags.
5. Nos comentários há **um nível de resposta** (resposta de resposta é bloqueada de propósito, para a conversa não virar um fio ilegível). Dá para curtir comentário.
6. Quem fez uma pergunta pode marcar um comentário como **"Resposta aceita"** — a pergunta passa a aparecer como **"Resolvida"**.
7. A mesma discussão aparece **ancorada em cada questão**: quem erra pode perguntar ali mesmo, sem sair da tela de estudo (aparece só depois de responder).

**Por que é útil:** transforma dúvida de questão em base de conhecimento — perguntas resolvidas ficam marcadas e organizadas. A comunidade começa com conteúdo real e assinado por uma conta identificável ("Equipe Percurso", verificada), **sem perfis fingidos nem engajamento inflado**: as perguntas começam vazias.

**Não existe:** ranking ou classificação entre usuários — em lugar nenhum do produto. **Não existe ainda:** sino de notificações, grupos de estudo e "assuntos em alta" (estão reservados no código, não construídos).

Há limites diários amigáveis (por exemplo, 10 publicações, 60 comentários por dia) e uma fila de denúncias que só a moderação lê, por um script à parte. Links colados num post são apenas texto — o servidor nunca acessa a URL (proteção de segurança).

### 4.5 Perfil e Painel — dois lugares diferentes

Vale separar bem na apresentação, porque têm nomes parecidos e funções distintas.

- **Meu painel** (`/painel`) — o painel de estudos **privado**. Mostra a saudação com o nome, um aviso se a conta é de visitante, o cartão da **Chama de Estudos**, quatro números (sessões concluídas, questões respondidas, aproveitamento geral, sessões em andamento), botões de atalho (continuar estudando, voltar à prova do ENEM aberta, montar cronograma), o seletor de assunto e uma tabela com as últimas 12 sessões (data, matéria, acertos, erros, situação). Tem o botão **"Sair"**. Hoje esse painel é um retrovisor: mostra o que já foi feito, não o que fazer agora (há um plano documentado para inverter isso).
- **Perfil da comunidade** (`/comunidade/perfil/@usuario`) — **público**. Mostra avatar, nome, @usuário, selo de verificado, título, bio, uma barra de nível/XP e quatro números (Chama atual, melhor sequência, questões respondidas, aproveitamento), mais a grade das **7 conquistas** (as não obtidas ficam apagadas). No próprio perfil aparecem também o cartão da Chama e um gráfico de questões por semana (últimas 8).
- **Edição do perfil:** foto (JPG/PNG/WEBP até 2 MB), bio (até 280 caracteres) e escolha do título entre os que a pessoa desbloqueou. O selo de verificado **não** é editável pelo usuário.

### 4.6 Cronograma de estudos

**O que a pessoa faz, passo a passo:**

1. Na página inicial, seção **Cronograma** (também linkada do Painel).
2. Escolhe o objetivo: ENEM, vestibular, concurso, carreira militar, reforço escolar ou "já na faculdade".
3. Informa **horas por dia** (1 a 10, padrão 4) e **dias por semana** (3 a 7, padrão 6).
4. Opcionalmente marca matérias e assuntos específicos (a lista muda conforme o objetivo).
5. O site gera **uma semana, bloco a bloco**: blocos de matéria, um bloco de redação (para ENEM/vestibular), blocos de revisão rotulados "Revisar <matéria>" com a distância em dias, e "Descanso" nos dias que sobram.
6. Mostra ainda uma barra de horas por matéria e o total de horas por semana e por mês.

**Por que é útil:** dá um plano concreto de "o que estudar e quando revisar", com a lógica de **revisão espaçada** (rever depois de 1, 7 e 30 dias) e um dia de descanso.

**Limite honesto:** o plano é só uma saída de tela — **não é salvo**, o site não guarda o cronograma nem verifica se foi cumprido. É o único lugar onde "revisão espaçada" aparece funcionando.

### 4.7 Faculdades — índice de concorrência

**O que a pessoa faz, passo a passo:**

1. Na página inicial, seção **Faculdades**.
2. Tabela pesquisável de combinações **curso + universidade**, com filtros por área, curso, região, UF e forma de ingresso.
3. Cada linha traz um **"índice de referência" de concorrência** (0 a 1000) e abre uma gaveta com mais detalhes.

**Por que é útil:** ajuda a calibrar uma meta e comparar cursos por concorrência.

**Limite honesto, repetido pelo dono:** esse índice **não é a nota de corte oficial** de nenhum edital. Onde foi possível casar com dados reais do SiSU 2025, a nota real entra marcada como "coletada", nunca "oficial".

### 4.8 Chama de Estudos e conquistas

Camada de gamificação, discreta (os números aparecem só no painel, no perfil e num aviso rápido depois de responder).

- **Chama de Estudos** = sequência de dias seguidos com atividade válida (responder questão, responder prova ou corrigir redação), contada no fuso de Brasília. Uma única questão no dia já acende. Tem quatro estados: acesa 🔥, em risco 🟠, quase apagando 🔴 (depois das 20h sem estudar) e apagada 💨.
- **Escudo**: perdoa **um** dia perdido. Ganha-se um escudo a cada 7 dias de sequência, guardando no máximo 2.
- **XP e nível**: +20 de XP por dia com atividade, mais um bônus nos marcos de 7, 30, 100 e 365 dias. Cada nível N exige `50 × N²` de XP.
- **7 conquistas**: Iniciante (1ª questão), Determinado (7 dias), Cem Questões (100 questões), Imparável (30 dias), Centenário (100 dias), Mestre das Questões (1.000 questões) e Lenda dos Estudos (365 dias). Algumas liberam um título exibível no perfil.
- **Lembrete**: como o projeto não tem um agendador automático, o lembrete da Chama é criado "de forma preguiçosa" — quando a pessoa abre o Painel ou a Comunidade depois das 18h sem ter estudado, no máximo um por dia.

### 4.9 Banco de questões — o que alimenta tudo

- **Duas origens na mesma prateleira:** provas reais do ENEM (importadas da base pública api.enem.dev) e **questões autorais** escritas à mão pela equipe. O mesmo motor sorteia as duas.
- As questões do ENEM entram **só com o gabarito oficial**; ganham comentário quando alguém pede (e o comentário fica salvo para os próximos).
- Cada questão autoral **já nasce com explicação** que comenta a alternativa certa e por que cada distrator engana.
- **Cobertura autoral:** as 9 matérias de ensino médio têm pelo menos 50 questões em cada um dos 135 assuntos — meta batida (135 de 135).
- As **8 "matérias por objetivo"** (concurso, militar, faculdade, reforço) estão **quase vazias** — só 3 começaram.
- Um **classificador de palavras-chave** (não é IA, roda em segundos, e dá para conferir manualmente por que cada questão foi marcada num assunto) etiqueta o assunto das questões do ENEM. É o que permite "estudar só Termoquímica" mesmo dentro das provas reais.
- Há um caminho para rascunhar questões novas com IA (Google Gemini), mas **nada vai ao banco sem revisão humana** — o processo até re-resolve cada questão "às cegas" e descarta a que diverge do gabarito.
- **Regra de ouro do projeto:** o site nunca anuncia banca, curso ou conteúdo que não esteja no banco. "Questão com gabarito errado é pior do que questão faltando."

---

## 5. Números do projeto

Todos os valores abaixo estão registrados nos documentos e no código do projeto. Onde há divergência entre fontes, está sinalizado. **Os totais que só existem no banco em funcionamento (não nos arquivos) estão marcados como aproximados e devem ser confirmados com o dono.**

### Banco de questões

| Item | Valor | Observação |
|---|---|---|
| Questões autorais escritas nos arquivos do projeto | **7.029** | Contagem direta e conferível nos 166 arquivos do repositório |
| Questões autorais ativas no banco em uso | **~6.772** *(a confirmar com o dono)* | `CONTINUAR-BANCO-DE-QUESTOES.md` registra 6.772 ativas no Supabase. A faixa "6.799–6.850" que circulava não tem fonte rastreável; não usar |
| Questões do ENEM importadas | **~2.749** | 15 provas; o total exato varia com descartes e duplicatas de idioma. O README ora diz ~2.700, ora 2.776 |
| **Total de questões (aproximado)** | **entre 9.548 e 9.599** *(a confirmar com o dono)* | 9.548 na memória do projeto (26/08); 9.599 no checkpoint (02/09); o número exato só existe no banco em funcionamento |
| Meta autoral | 50 questões × 135 assuntos = **6.750** | Batida: 135 de 135 assuntos de ensino médio com 50+ |
| Distribuição autoral por matéria | ~750 cada | Física 762, Química 758, Biologia 751, Português ~753, História 750, Filosofia 750, Artes 750, Inglês 750, Matemática 750 |
| Matérias por objetivo já iniciadas | **3**, com **256** questões | Português de banca 75, Português 6º–9º 100, Raciocínio lógico 81. As outras 5 têm zero |

**Número recomendado para os slides (marque como aproximado):** *"cerca de 9,5 a 9,6 mil questões — cerca de 2,75 mil das provas reais do ENEM e cerca de 6,8 mil autorais, todas com explicação."*

### Catálogo, provas e redação

| Item | Valor |
|---|---|
| Matérias no total | **17 no catálogo** (9 de ensino médio + 8 por objetivo) — *mas a home e o banco em uso mostram 9; das 8 por objetivo, só 3 têm questões* |
| Assuntos no total | **255 no catálogo** (17 matérias × 15) — *só os 135 das 9 matérias de ensino médio estão de fato com questões* |
| Conteúdos mapeados nas 9 matérias de ensino médio | **135** (9 × 15) — número mostrado na home |
| Provas do ENEM na íntegra | **15**, de 2009 a 2023 — número mostrado na home |
| Questões por prova do ENEM | **180**, em 4 blocos de 45 |
| Relógio da prova | **660 minutos** (perto de 11 horas; é arredondamento — os dois dias reais do ENEM somam 10h30) |
| Temas de redação | **19** (15 edições 2009–2023 + 4 reaplicações) |
| Competências da redação | **5**, de 0 a 200 em degraus de 40 — total até **1000** |
| Combinações curso + universidade | **405** — número mostrado na home (*o README diz "46"; está desatualizado*) |
| Pares curso+universidade com nota real do SiSU 2025 | **199 de 405** casaram (acervo `sisu-2025.json`, com 199 registros; de 266 elegíveis ao SiSU). *Um valor antigo de "213", vindo de um comentário de 27/08 não reconferido, não deve ser usado* |
| Marcas na faixa rolante da home | **19** (ENEM, Fuvest, Unicamp, UERJ, SiSU, ProUni, Cebraspe, FGV, Cesgranrio, ITA, IME, EsPCEx, PAS·UnB, Escola Naval, UFRJ, UFMG, UFRGS, UFPE, "Redação nota 1000") |

### Uso e projeto

| Item | Valor |
|---|---|
| Métricas de uso reais | 12 perfis, 22 respostas, 0 redações — **foto de 27/08/2026; quase certamente já mudou. Não usar como número atual; confirmar com o dono** |
| Commits no repositório | **zero** — nunca publicado |
| Sessão de visitante | **60 minutos**, com espera de **24 horas** por navegador antes de um novo passe |
| Conquistas | **7** |

**Dois rótulos foram removidos da home por serem enganosos:** "1.219+ aulas em vídeo" (não existe nenhuma aula no projeto) e "2.776 questões comentadas alternativa por alternativa" (só as autorais nascem comentadas). Hoje o contador diz apenas "Questões no banco".

---

## 6. Diferenciais e pontos fortes para destacar

- **Honestidade de dados como princípio de produto.** Os números da página inicial são contagem viva do banco, não peça de marketing. Rótulos que exageravam foram apagados. Onde falta conteúdo (Fuvest, Cebraspe, cálculo do ciclo básico, direito), o site **diz que falta** e aponta a fonte oficial, em vez de omitir.
- **Gabarito comentado que abre embaixo da alternativa marcada**, explicando também por que os distratores enganam. É o coração do produto: "erre agora, não na prova".
- **Sessão retomável presa à conta.** Fecha a aba, volta exatamente onde parou — vale para o estudo e para a prova do ENEM, inclusive dias depois.
- **Modo prova fiel ao exame:** 660 minutos de relógio (perto de 11 horas), sem nenhum feedback até entregar, correção separada por área.
- **Redação nas 5 competências do INEP aceitando foto da folha manuscrita** — a IA transcreve a letra e mostra o que leu, para a pessoa conferir.
- **Dois provedores de IA que se cobrem.** Se um fornecedor cai ou fica sem cota, o outro assume; basta ter a chave de acesso de um deles.
- **Comunidade que nasce sem tráfego falso**, com a dúvida ancorada em cada questão — a pergunta surge no momento exato em que a pessoa erra.
- **Chama de Estudos e conquistas para constância, sem virar competição** — não há ranking entre usuários.
- **Acessibilidade levada a sério.** O site responde a cinco preferências do sistema operacional (tema claro/escuro, alto contraste, menos transparência, menos movimento, tipo de toque), cada uma com tratamento próprio. Os alvos de toque crescem para 44 pixels em telas de dedo. O foco de teclado foi auditado e reintroduzido onde faltava. O hero degrada em três camadas.
- **Design próprio, sem kit pronto.** Uma paleta pensada (os dois verdes separados de propósito), uma fonte só, um conjunto de estilos feito à mão.
- **Base herdada de um projeto anterior.** O Percurso é a versão "aplicação" de um site estático anterior; matérias, base de faculdades e o sistema de design já vinham prontos e em uso (o repositório não tem testes automatizados, então "cobertura testada" não é uma afirmação que dá para comprovar aqui).

---

## 7. Como funciona por dentro (a tecnologia em um parágrafo)

O Percurso é um site único feito com **Next.js 16** (a base que entrega as páginas e a lógica de servidor), **React 19** e **TypeScript**. Todo o "cofre" — contas, questões, respostas, redações, comunidade — fica no **Supabase**, um serviço gerenciado de banco de dados **PostgreSQL** que já vem com login e armazenamento de arquivos embutidos, e cujas regras de "quem pode ver o quê" moram no próprio banco. Duas telas usam **inteligência artificial generativa**: o comentário de questão do ENEM e a correção de redação; elas são atendidas por dois fornecedores — **Google Gemini** e **Anthropic Claude** — que se revezam, então basta ter a chave de acesso de um deles (sem nenhuma chave, só essas duas telas param; o resto do site funciona). A aparência e as animações foram feitas à mão, sem kit pronto: um conjunto de estilos próprio, a fonte **Inter**, tema claro e escuro, e efeitos de rolagem com a biblioteca **GSAP**. As provas do ENEM vêm de uma base pública e aberta (api.enem.dev) que converte os PDFs oficiais do INEP em dados. Hoje o site roda só no computador de quem desenvolve (endereço local), **sem estar publicado na internet**.

Tabela de apoio (nomes, sem jargão):

| Camada | Ferramenta | Para que serve |
|---|---|---|
| Site e páginas | Next.js 16, React 19, TypeScript | Monta e entrega tudo o que aparece na tela |
| Banco de dados, login, arquivos | Supabase (PostgreSQL) | Guarda contas, questões, respostas, redações, posts |
| Inteligência artificial | Google Gemini + Anthropic Claude | Comentar questão do ENEM e corrigir redação |
| Animação | GSAP | Hero do livro, transições, efeitos de rolagem |
| Visual | Estilos próprios + fonte Inter | Sem Tailwind, sem biblioteca de componentes pronta |
| Provas do ENEM | api.enem.dev (converte PDFs do INEP) | Fonte das 15 provas reais |
| Notas de faculdade | Base de dados aberta do SiSU (2020–2025) | Notas reais onde foi possível casar |

---

## 8. Status atual: o que já funciona e o que ainda falta

### 8.1 O que já funciona (rodando localmente, verificado)

- Cadastro e login: e-mail/senha, Google, e "entrar como visitante" (60 minutos, com o progresso preservado se a pessoa criar conta depois no mesmo navegador).
- Estudar por assunto, com gabarito comentado que abre embaixo da alternativa e sessão retomável.
- Modo prova do ENEM completo: 15 provas, cronômetro, retomada, correção por área ao entregar, explicação de questão sob demanda depois da prova.
- Redação nas 5 competências, por texto digitado ou por foto da folha manuscrita.
- Comunidade completa: feed com abas e filtro por tag, comentários com um nível de resposta, curtir, salvar, denunciar, marcar como resolvida, aceitar resposta, perfis públicos.
- Chama de Estudos, XP, níveis, 7 conquistas e escudos.
- Gerador de cronograma semanal.
- Tabela de faculdades com o índice de concorrência e notas reais do SiSU onde casou (199 de 405 pares).
- Banco autoral com 50+ questões em cada um dos 135 assuntos de ensino médio.
- Tema claro/escuro, acessibilidade (cinco preferências do sistema), hero animado com três camadas de degradação.
- Verificações técnicas: a auditoria de segurança das bibliotecas (`npm audit`) passa com zero vulnerabilidades; a compilação e a checagem de tipos são dadas como limpas no checkpoint do projeto (não reexecutadas nesta revisão).

### 8.2 O que ainda falta

- **Publicar o site.** Não há endereço público, não há hospedagem escolhida no repositório, e nenhuma versão foi salva no controle de versão (zero commits).
- **Recuperação de senha e verificação de e-mail** — o envio de e-mail não está configurado.
- **Login com Apple** — fora por causa do custo anual de US$ 99 do programa de desenvolvedores da Apple.
- **Caderno de erros com fila automática de revisão** (a "revisão espaçada de verdade" dentro do estudo).
- **Comentar as ~2.749 questões do ENEM** que ainda entram só com o gabarito.
- **"Preparação":** um objetivo fixo por pessoa, que passe a alimentar o Painel e o Estudar.
- **Encher as 8 matérias por objetivo** (concurso, militar, faculdade, reforço) — hoje quase vazias.
- **Primeira sessão guiada / onboarding** de poucos passos.
- **Painel orientado a "o que fazer agora"** em vez de só mostrar o passado.
- **Tela de evolução da redação** por competência ao longo do tempo.
- **Gestão de conta:** trocar e-mail, redefinir senha, apagar conta (LGPD).
- **Exportar o progresso** em CSV/PDF.
- **Segunda banca (Fuvest primeiro) e importador de prova em PDF** — descrito como "aposta grande" futura. O suporte a mais de uma banca já está escrito no banco de dados, mas ainda não foi ativado.
- **Notificações (sino), grupos de estudo, "assuntos em alta"** — reservados no código, não construídos.
- **Aplicativo instalável (PWA) e simulado offline.**

### 8.3 Fila de segurança antes de publicar

Documentada internamente em 27/08/2026, quatro itens marcados como prioritários:

1. Limitar o número de chamadas às rotas internas de API (proteção contra abuso).
2. Pôr um teto no tamanho do texto da redação.
3. Corrigir a permissão que hoje deixa qualquer usuário logado gravar a explicação de uma questão do ENEM.
4. Adicionar as proteções de segurança padrão que todo site publicado deveria ter (cabeçalhos como CSP, HSTS e X-Frame-Options).

---

## 9. Roteiro de apresentação sugerido (slide a slide)

1. **Abertura.** Frase: "Todo objetivo começa numa página em branco." / Nome: **Percurso**, plataforma de estudos.
2. **O problema.** Estudar sem método: não saber por onde começar; errar uma questão e nunca mais reencontrá-la; o progresso que some ao fechar a aba.
3. **A ideia.** "Erre agora, não na prova." Medir o acerto e corrigir a rota — não assistir mais aula. Os 4 passos do método: diagnóstico, teoria em blocos curtos, questões com o porquê do distrator, revisão espaçada em 1/7/30 dias.
4. **Para quem é.** Cinco focos: reforço escolar (6º–9º), ENEM, vestibular, concurso público, carreira militar.
5. **Visão geral das áreas.** Estudar, Provas do ENEM, Redação, Comunidade, Cronograma, Faculdades — tudo num site só (no navegador; ainda sem aplicativo).
6. **Estudar.** Escolhe o assunto, responde, e o porquê abre embaixo da alternativa marcada. Tudo salvo; dá para parar na questão 7 e voltar depois.
7. **Provas do ENEM.** 15 provas reais (2009–2023), cerca de 11 horas de relógio (660 minutos), nota só no fim, desempenho por área. As provas vêm dos PDFs oficiais do INEP.
8. **Redação.** 19 temas reais. Digitar ou fotografar a folha escrita à mão. Nota nas 5 competências do INEP, com as regras reais (fuga ao tema zera tudo).
9. **Comunidade.** Fórum de dúvidas ancorado em cada questão. Começa com conteúdo real e assinado, sem tráfego falso. Perguntas viram base de conhecimento quando resolvidas.
10. **Constância.** Chama de Estudos, XP, níveis, 7 conquistas. Sem ranking — o foco é hábito, não competição.
11. **Cronograma e Faculdades.** Plano semanal com revisão espaçada e dia de descanso. Índice de concorrência das faculdades — deixando claro que não é nota de corte oficial.
12. **Números do projeto.** Cerca de 9,5 a 9,6 mil questões (~2,75 mil do ENEM + ~6,8 mil autorais com explicação), 15 provas, 135 conteúdos, 19 temas de redação, 405 combinações curso+universidade.
13. **Identidade.** Nome; tom "professor honesto"; paleta Pedra + verde-pinho; fonte Inter; o hero do livro que abre conforme a página rola.
14. **O diferencial: honestidade de dados.** O site não promete o que o banco não tem. Os números vêm do banco, não do marketing. Rótulos exagerados foram removidos.
15. **Como é feito.** Next.js + Supabase + duas IAs que se cobrem. Visual feito à mão, sem kit pronto.
16. **Status e próximos passos.** MVP completo rodando local. Falta publicar, o caderno de erros, encher as matérias de concurso/militar, e a fila de segurança antes de ir ao ar.
17. **Encerramento.** "Da primeira página à aprovação."

---

## 10. Imagens disponíveis no repositório

Todos os caminhos são relativos à pasta do projeto.

| Caminho | O que é | Uso sugerido |
|---|---|---|
| `public/media/hero-livro.mp4` | O vídeo do livro que abre (5,7 MB, ~5 s) | Rodar em loop atrás de um slide de abertura |
| `public/media/hero-closed.png` | Primeiro quadro do vídeo — livro fechado (1920×1080) | Slide "antes" / capa |
| `public/media/hero-open.png` | Último quadro — livro aberto. É também a arte da tela de login | Slide "depois" / encerramento |
| `imagem-inicial.png` (raiz do projeto) | Referência do livro fechado (2,5 MB) | Slide conceito "antes/depois" |
| `imagem-final.png` (raiz do projeto) | Referência do livro aberto (2,16 MB) | Slide conceito "antes/depois" |
| `public/media/referencia/imagem-inicial.png` e `.../imagem-final.png` | Mesmas stills de referência, cópia dentro de `public/` | Alternativa às da raiz |
| `.rascunho/hero/comparativo.png` | Montagem comparando as versões testadas do hero em 6 posições de rolagem | Slide "bastidores / evolução do hero" |
| `.rascunho/hero/LEIA-ME.md` | Notas e especificações do vídeo do hero (texto, não imagem) | Referência para quem for narrar os bastidores |
| `public/media/takes/hero-720p.mp4`, `hero-1440p.mp4`, `hero-4k.mp4` | Versões do vídeo do hero em outras resoluções (3,3 MB / 15 MB / 33 MB) | Se precisar do vídeo em alta para projeção |
| `.referencia/` | O site estático anterior inteiro (`index.html`, `style.css`, `main.js`) | Mostrar de onde o Percurso veio |

**O que NÃO existe no repositório e vai precisar ser produzido:**

- **Nenhuma captura de tela das telas do produto** (Estudar, Provas, Redação, Comunidade, Painel). Para tê-las, é preciso abrir o site no computador (`ABRIR-O-SITE.bat` ou `npm run dev`, endereço `localhost:3000`) e fotografar as telas. Vale definir com antecedência a lista de telas a capturar e um roteiro de demonstração ao vivo.
- **Nenhum logo em arquivo de imagem.** O logo é um desenho vetorial embutido no código. Para usar nos slides, exportar da tela do site ou pedir ao dono um arquivo.
- **Nenhuma imagem de compartilhamento em redes sociais nem ícone de aba (favicon).**

---

## 11. Glossário de termos

- **ENEM** — Exame Nacional do Ensino Médio. Prova anual do governo federal, usada para entrar em universidades públicas e privadas.
- **INEP** — órgão do governo responsável pelo ENEM. Publica de graça os PDFs das provas, dos gabaritos e dos temas de redação.
- **SiSU** — Sistema de Seleção Unificada. Usa a nota do ENEM para distribuir vagas em universidades públicas. É de onde vêm as "notas reais" da tabela de faculdades.
- **ProUni** — programa de bolsas em faculdades privadas com base na nota do ENEM.
- **Vestibular** — prova de seleção própria de uma universidade (Fuvest, Unicamp, etc.), separada do ENEM.
- **Banca** — a instituição que elabora uma prova (Cebraspe, FGV, Cesgranrio, em concursos; Fuvest, em vestibular). O Percurso hoje **não** tem questões dessas bancas.
- **Simulado / modo prova** — no Percurso, "modo prova" é a prova do ENEM inteira, cronometrada, sem feedback até entregar. O "simulado de treino" é a sessão curta de estudo por assunto, com o gabarito abrindo a cada questão.
- **Gabarito** — a resposta certa de uma questão.
- **Distrator** — uma alternativa errada de uma questão de múltipla escolha, escrita para parecer plausível. Os comentários do Percurso explicam por que cada distrator engana.
- **Competências (da redação)** — os cinco critérios do INEP para dar nota a uma redação: norma culta, compreensão do tema, organização dos argumentos, coesão e proposta de intervenção. Cada uma vale de 0 a 200; o total vai até 1000.
- **Incidência histórica** — a porcentagem que aparece ao lado de cada assunto, indicando quanto aquele tema costuma cair nas provas.
- **Repetição espaçada / revisão espaçada** — técnica de revisar um conteúdo em intervalos crescentes (por exemplo, 1 dia, 7 dias, 30 dias depois) para fixar melhor. No Percurso, hoje só aparece no cronograma.
- **Chama de Estudos / streak** — a sequência de dias seguidos estudando. "Streak" é o termo em inglês para essa contagem; o Percurso chama de "Chama".
- **XP e nível** — pontos de experiência acumulados por estudar; a cada faixa de pontos, sobe-se de nível. É um indicador de constância, não de nota.
- **Escudo** — item que perdoa um único dia perdido sem quebrar a Chama.
- **Supabase** — serviço que hospeda o banco de dados, o login e os arquivos do site, tudo junto. É o "cofre" do Percurso.
- **PostgreSQL (Postgres)** — o tipo de banco de dados usado dentro do Supabase.
- **RLS (regras de acesso por linha)** — configuração no próprio banco que define, dado a dado, quem pode ver e alterar o quê. Garante que uma pessoa não enxergue as respostas ou redações de outra.
- **Storage / bucket** — o espaço de arquivos do Supabase. As fotos de redação vão para um bucket privado; as fotos de perfil, para um público.
- **Next.js / React / TypeScript** — as ferramentas com que o site foi construído. Next.js é a estrutura principal; React monta a tela; TypeScript é a linguagem.
- **GSAP** — biblioteca de animação usada no hero e nas transições.
- **App Router** — a forma como o Next.js 16 organiza as páginas e os endereços do site.
- **OAuth / login social** — o mecanismo que permite "entrar com o Google" sem criar uma senha nova.
- **Sessão de visitante** — um acesso anônimo e temporário (60 minutos) que deixa a pessoa testar o site sem cadastro, com o progresso guardado.
- **IA generativa** — inteligência artificial que produz texto. O Percurso usa duas: **Claude** (da Anthropic) e **Gemini** (do Google).
- **Fallback** — o plano B automático. Se um provedor de IA falha, o outro assume; se o vídeo do hero não carrega, entra o livro em CSS.
- **api.enem.dev** — projeto público e gratuito que converte os PDFs das provas do ENEM em dados que um site consegue usar. É a fonte das 15 provas.
- **Design system** — o conjunto organizado de cores, espaçamentos, tipos e componentes visuais que dá unidade ao site.
- **Hero** — o bloco grande no topo da página inicial, com a animação do livro e as quatro frases.
- **MVP** — "produto mínimo viável": a primeira versão funcional completa, pronta para mostrar, ainda sem tudo o que se planeja para o futuro.
- **Deploy** — o ato de publicar o site num servidor para qualquer pessoa acessar pela internet. O Percurso ainda não passou por isso.
- **Commit / repositório** — o repositório é a pasta versionada do projeto; um commit é um "salvamento" com registro no histórico. O Percurso ainda não tem nenhum commit.
- **LGPD** — Lei Geral de Proteção de Dados. Exige, entre outras coisas, que a pessoa possa apagar a própria conta — recurso ainda no roadmap.
- **CSP / rate limiting** — proteções de segurança: a primeira restringe o que a página pode carregar; a segunda limita quantas vezes seguidas alguém pode chamar o servidor. Estão na fila para antes de publicar.
- **PWA** — "aplicativo web progressivo": um site que pode ser instalado no celular e funcionar parcialmente sem internet. Está no roadmap.
- **SM-2 / FSRS** — nomes de algoritmos de revisão espaçada. Citados no roadmap como o motor que faria a fila de revisão dos erros.

---

## 12. Observações importantes e pontos a confirmar com o dono

**Documentos desatualizados dentro do repositório.** O arquivo `README.md` e os textos em `docs/superpowers/` descrevem uma versão antiga do produto: tema escuro por padrão, acento âmbar ("paleta Brasa"), outra biblioteca de animação, uma aba "Trilhas" que foi removida, "46 cursos" e "27 questões autorais". **Nada disso vale mais.** O estado real é o descrito neste documento: tema claro por padrão, paleta Pedra + verde-pinho, animação em GSAP, 405 combinações de curso, milhares de questões autorais. Se for citar o repositório, confie no arquivo `CHECKPOINT-SESSAO.md` (02/09/2026) e no código, não no README.

**A contagem total de questões muda conforme a data da medição** — o número exato só existe no banco em funcionamento, que não dá para consultar a partir dos arquivos. Use valores aproximados nos slides ("cerca de 9,5 a 9,6 mil").

**Pontos a confirmar com o dono antes de fechar os slides:**

- O número total exato de questões hoje no banco, e quantas questões autorais estão ativas (os arquivos somam ~7.029; um documento interno cita 6.772 ativas no Supabase).
- Se o login com Google e o modo visitante estão de fato ativados no ambiente de produção do Supabase (o código trata os dois casos, mas a configuração não é visível nos arquivos).
- Onde (e se) o site será hospedado — não há nada definido no repositório.
- Os nomes dos modelos de IA que aparecem no código (`claude-opus-5`, `gemini-3.6-flash`) **não correspondem a modelos conhecidos hoje e são provavelmente provisórios** — não devem ir para nenhum slide sem confirmação.
- As métricas de uso reais atuais (as citadas — 12 perfis, 22 respostas, 0 redações — são de 27/08/2026 e provavelmente estão desatualizadas).
- Se ele quer que a apresentação mencione que, no ambiente atual, só a chave do Gemini está configurada — o que faz a correção de redação rodar pelo provedor reserva em vez do Claude.

**Lacunas de conteúdo para a apresentação (levantadas na revisão).** O rascunho cobre bem o produto, mas uma apresentação normalmente precisa também de:

- **Modelo de negócio e preço.** O documento não diz se o Percurso é gratuito, freemium ou por assinatura. Não há nada sobre isso no repositório — **a confirmar com o dono**.
- **Concorrentes e posicionamento.** Falta o "por que o Percurso e não Stoodi, Descomplica, Me Salva, Qconcursos, AppProva, Brasil Escola". Nenhuma comparação no repositório — **a confirmar com o dono**.
- **Custos.** Sem estimativa de custo mensal (hospedagem, plano do Supabase, custo por correção de redação e por explicação de questão). A única referência no repositório é a cota grátis do Gemini citada em `MELHORIAS.md` (cerca de 1.500 chamadas por dia). Conta fechada por usuário: **a confirmar com o dono**.
- **Como conseguir os primeiros alunos.** O `FUNCIONALIDADES.md` fala em chegar aos primeiros 30 a 50 estudantes, mas não diz por qual canal (divulgação, escolas, cursinhos). Plano de aquisição: **a confirmar com o dono**.
- **Quem construiu.** Não há slide de equipe. O repositório sugere uma só pessoa desenvolvendo. Time e plano de continuidade: **a confirmar com o dono**.
- **Linha do tempo de lançamento.** A seção 8 lista o que falta, sem datas. O `FUNCIONALIDADES.md` já traz uma "sequência sugerida" em 5 fases que pode virar a linha do tempo — vale recuperá-la com o dono e colocar prazos.
- **Slide de riscos.** Reunir num slide: dependência da api.enem.dev (pode sair do ar ou mudar a licença), risco de a nota de redação por IA divergir muito da humana, ausência de backup/commits, nomes de modelos de IA possivelmente provisórios.
- **Tamanho do mercado / "por que agora".** O ENEM tem cerca de 3 a 4 milhões de inscritos por ano; somar o mercado de concursos e de reforço escolar dá o contexto de oportunidade. Números fechados: **a confirmar com o dono**.
- **Dados de menores de idade.** O público inclui 6º ao 9º ano (crianças e adolescentes). O documento só cita a LGPD para exclusão de conta; falta tratar consentimento dos pais (LGPD art. 14 e ECA). **A confirmar com o dono.**
- **Direito de uso do conteúdo.** Licença das questões do ENEM via api.enem.dev e a titularidade das cerca de 7.000 questões autorais (que são, na prática, o principal ativo do projeto). **A confirmar com o dono.**
- **Métricas de sucesso pós-lançamento.** Definir o que seria "dar certo" (retenção, usuários ativos por semana, questões por usuário) e como medir — hoje a contagem de uso é manual. **A confirmar com o dono.**
- **Marca e domínio.** "Percurso" é palavra comum; verificar disponibilidade de domínio e registro de marca. **A confirmar com o dono.**
- **Suporte a dispositivo.** Deixar claro logo no começo: hoje é só site no navegador (computador ou celular), sem aplicativo. PWA e modo offline estão no roadmap.
