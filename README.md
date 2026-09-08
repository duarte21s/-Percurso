# Percurso — plataforma de estudos

Site para ENEM, vestibulares, concursos, carreiras militares e reforço escolar.
Next.js 16 (App Router) + TypeScript + Supabase. Tema dark, paleta neutra com um
único acento âmbar.

Banco de questões, contas de usuário, simulado que salva onde você parou e
gabarito comentado que abre logo abaixo da alternativa marcada.

---

## Rodar

```bash
npm install
cp .env.local.example .env.local   # preencha (veja abaixo)
npm run dev                        # http://localhost:3000
```

O site sobe **sem** Supabase configurado: a landing inteira funciona com o
conteúdo estático. O que fica indisponível é o que depende de banco — números
reais, login, simulado salvo, provas e redação.

## O que exige conta

`/simulado`, `/provas`, `/redacao` e `/painel` pedem sessão. O guarda é
`exigeSessao()` em `lib/sessao.ts`, chamado no topo de cada página: sem sessão
ele manda para `/entrar?proximo=<destino>` e o acesso devolve a pessoa
exatamente onde ela tentou entrar.

A regra não é comercial, é técnica: tudo nessas telas depende de saber quem
está do outro lado. A prova grava o cronômetro a cada resposta, a redação sobe
uma foto para uma pasta privada do Storage presa ao `auth.uid()`, o simulado
guarda de onde continuar. Servir isso a uma sessão anônima significava
progresso que some ao fechar a aba.

### Modo visitante, por tempo limitado

**Entrar como visitante** cria uma sessão anônima que vale **60 minutos**
(`LIMITE_VISITANTE_MINUTOS`, em `lib/sessao.ts` — é o único lugar a mudar).

O relógio conta a partir do `created_at` da conta anônima, que mora no
servidor. Não há como esticar o prazo fechando a aba, mexendo no relógio da
máquina ou limpando o `localStorage`: o cliente só exibe o contador, quem
decide é `visitanteExpirou()`, chamado a cada página e a cada rota de API.

Trancar só as páginas não bastaria — sem `exigeSessaoApi()` nas oito rotas de
`app/api/`, um visitante vencido continuaria respondendo questão pela API sem
conseguir abrir a tela. Porta da frente trancada com a dos fundos aberta não
tranca nada.

Quando o tempo acaba, o desvio passa por `/visitante/expirou`, um **Route
Handler**. Precisa ser um: só Route Handler e Server Action escrevem cookie no
Next, e um Server Component chamando `signOut()` veria a escrita falhar calada
— a sessão continuaria no navegador e a pessoa ficaria presa num laço, sem
acesso e sem deslogar.

**O progresso não se perde.** Quem cria conta a partir da sessão de visitante
passa por `updateUser()`, não por `signUp()`: a conta anônima é promovida e
mantém o mesmo id, então simulados, respostas e redações continuam sendo dela.
Usar `signUp()` ali criaria um usuário novo e abandonaria tudo no banco.

> O passe é marcado por cookie no **início**, não no fim. Marcar no fim
> deixaria a saída aberta: bastaria sair aos 59 minutos e pedir outro para
> reiniciar o relógio. Ainda assim, o cookie não é uma tranca — limpar cookies
> ou abrir uma aba anônima dá outro passe, e não existe como impedir isso sem
> exigir a conta que o modo visitante serve justamente para adiar. O que ele
> resolve é o caso comum: renovar o passe no clique seguinte ao aviso.

A home continua pública, mas **não serve mais questões a quem não tem conta**.
A vitrine do simulado mandava `correta` e `explicacao` junto de cada questão —
era uma demonstração honesta enquanto o banco era pequeno, e virou porta dos
fundos depois que o estudo por conteúdo passou a exigir login. Deslogado, a
seção vira convite. Na Nav, os links privados já apontam direto para o acesso,
para o clique não abrir uma tela que pisca e some.

## Configurar o Supabase

1. Crie um projeto em [supabase.com](https://supabase.com).
2. **SQL Editor → New query** → cole `supabase/schema.sql` e rode. Depois, na
   ordem: `supabase/provas.sql`, `supabase/redacao.sql` e `supabase/temas.sql`.
3. Preencha `.env.local`:

   | variável | onde achar |
   |---|---|
   | `NEXT_PUBLIC_SUPABASE_URL` | Project Settings → Data API → Project URL |
   | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Project Settings → API Keys → `anon public` |
   | `SUPABASE_SERVICE_ROLE_KEY` | Project Settings → API Keys → `service_role` |
   | `ANTHROPIC_API_KEY` | [console.anthropic.com](https://console.anthropic.com) |

4. `npm run seed` — popula 9 matérias e 27 questões autorais. É idempotente.

Para o botão **Entrar como visitante** funcionar, ligue *Anonymous sign-ins* em
Authentication → Sign In / Providers.

### Acesso com Google

Implementado em `app/auth/callback/route.ts` e na ação `entrarComProvedor`.
Sem o provedor registrado, o botão aparece e devolve um recado explicando que
está desligado — o resto da tela continua funcionando.

Em **Authentication → URL Configuration**, adicione as URLs de retorno:
`http://localhost:3000/auth/callback` e a do domínio de produção.

1. [console.cloud.google.com](https://console.cloud.google.com) → novo projeto.
2. *APIs & Services → OAuth consent screen*: tipo External, preencha nome e
   e-mail de suporte.
3. *Credentials → Create credentials → OAuth client ID*, tipo *Web application*.
4. Em *Authorized redirect URIs*, cole a URL que o Supabase mostra em
   Authentication → Sign In / Providers → Google (algo como
   `https://SEU-PROJETO.supabase.co/auth/v1/callback`).
5. Copie *Client ID* e *Client secret* para o painel do Supabase e ative.

> O Google devolve e-mail verificado, então a conta entra direto, sem
> confirmação. O trigger `handle_novo_usuario` cria o perfil do mesmo jeito: o
> nome vem de `raw_user_meta_data`, que o Google preenche.

**Sobre a Apple.** *Sign in with Apple* em site próprio exige o Apple Developer
Program, **US$ 99/ano** — não há plano gratuito. Por isso ficou de fora. A
estrutura suporta: `exchangeCodeForSession` no callback serve qualquer provedor
OAuth. Para acrescentar depois, some `"apple"` à lista fechada em
`entrarComProvedor` e um botão em `CartaoAcesso`.

**Ao publicar**, o domínio novo precisa entrar em **dois** lugares — Supabase
(Authentication → URL Configuration) e Google Cloud (URIs de redirecionamento).
Esquecer um deles faz o login funcionar em desenvolvimento e quebrar em
produção.

> `SUPABASE_SERVICE_ROLE_KEY` ignora RLS por completo e só é usada pelo seed, na
> sua máquina. `ANTHROPIC_API_KEY` só é lida em Route Handler. Nenhuma das duas
> tem prefixo `NEXT_PUBLIC_` — se tivesse, iria para o bundle do browser.

---

## Estrutura

```
app/
  layout.tsx              documento (html, body, fonte)
  globals.css             design system: tokens + componentes
  (site)/                 casca com nav e rodapé
    layout.tsx
    page.tsx              landing
    simulado/page.tsx     simulado completo
    painel/page.tsx       área logada: histórico e geração de questões
  entrar/                 acesso — sem nav nem rodapé, ocupa a viewport
    page.tsx · acoes.ts · estado.ts · entrar.module.css
  api/
    simulado/                  POST inicia um simulado
    simulado/responder/        POST grava resposta e devolve o gabarito
    questoes/explicar/         POST escreve o comentário do gabarito
components/
  layout/ hero/ secoes/ simulado/ auth/ painel/ ui/
lib/
  supabase/  client · server · middleware · config
  conteudo/  matérias, trilhas, faculdades, FAQ, método, marcas
  cronograma.ts · anthropic.ts · tipos.ts
supabase/    schema.sql · seed-data/conteudo.mjs
scripts/     seed.mjs
public/media/ hero-livro.mp4 · hero-closed.png · hero-open.png
```

---

## O hero

`.hero-scroll` tem 460vh e contém um `.hero-sticky` de 100vh. Enquanto o sticky
está grudado, a viewport fica parada e o progresso do scroll (0→1) controla o
`currentTime` do vídeo do livro abrindo, qual dos 4 H1 está ativo (com animação
letra a letra), o trilho de progresso, o brilho de fundo e o parallax do livro.

Três camadas de degradação, nessa ordem:

1. **vídeo** — caminho normal;
2. **livro em CSS 3D** — assume se o vídeo falhar ou não carregar em 4s;
3. **layout estático** — sob `prefers-reduced-motion: reduce`, o hero vira uma
   seção normal, sem scrub nem trilho.

Para trocar o vídeo, substitua `public/media/hero-livro.mp4` — o scrub se adapta
a qualquer duração, porque usa `video.duration`.

---

## O simulado

O sorteio de questões é congelado em `simulados.questao_ids` na criação. É isso
que permite a retomada devolver exatamente as mesmas questões, na mesma ordem,
dias depois.

Deslogado, o simulado funciona e some ao fechar a aba. Logado:

- cada resposta grava em `respostas` e atualiza `indice_atual`, `acertos` e
  `erros` em `simulados`;
- ao reabrir, aparece a tela de retomada com a questão e o placar exatos;
- `unique(simulado_id, questao_id)` impede responder duas vezes a mesma questão
  — a trava na interface é conveniência, essa é a garantia;
- um índice parcial garante **um** simulado em andamento por pessoa.

**Prova do ENEM também é uma linha em `simulados`.** Ela e o simulado avulso
convivem — o índice único é por `(usuário, prova)`, então dá para ter uma prova
de 2023 aberta e um simulado rápido ao mesmo tempo. Por isso toda consulta que
procura "o simulado em andamento" precisa dizer **qual dos dois**:
`/simulado` filtra `prova_id is null`, `/provas/[ano]` filtra pela prova.

> Esse detalhe já causou um bug de verdade. Sem o filtro, `maybeSingle()` batia
> em duas linhas e devolvia erro `PGRST116` — a tela dizia que não havia
> simulado nenhum logo depois de a pessoa montar um. E quem tinha só a prova
> aberta recebia as 178 questões dela dentro da interface do simulado avulso.

**O gabarito nunca vai junto das questões.** A página do simulado logado
seleciona só `id, materia_id, fonte, enunciado, opcoes, dificuldade`; `correta` e
`explicacao` só saem de `/api/simulado/responder`, depois de a resposta estar
gravada. Sem isso, bastaria abrir o DevTools para ver a resposta.

---

## Provas reais do ENEM

`/provas` lista as 15 edições de 2009 a 2023; `/provas/[ano]` é o modo prova.

Os dados vêm de [api.enem.dev](https://enem.dev), projeto público e open source
que converte para JSON os PDFs que o INEP publica gratuitamente. A tela de cada
prova credita e linka a fonte oficial.

```bash
# depois de rodar supabase/provas.sql no SQL Editor
npm run importar-enem                 # as 15 provas
npm run importar-enem 2023 2022       # só essas
npm run importar-enem 2023 --imagens  # espelhando as figuras no seu Storage
```

Sem `--imagens`, as figuras apontam para o servidor de origem — rápido, mas
dependente de terceiro. Com a flag, cada figura é copiada para o Storage do seu
projeto. Vale rodar uma vez, depois de o resto estar funcionando.

**O modo prova é diferente do simulado.** No simulado o gabarito abre logo
abaixo da alternativa marcada, porque a ideia é aprender questão a questão. Na
prova você responde as 180 sem retorno nenhum e só então vê a nota — como no dia.
Por isso `correta` e `explicacao` nunca são selecionadas em `lib/provas.ts`, e o
gabarito só sai em `/api/prova/finalizar`, depois de a prova estar fechada.

O cronômetro conta no cliente mas é gravado no servidor a cada resposta: fechar a
aba não zera o relógio. Tempo esgotado entrega sozinho.

Duas notas sobre os dados. A API repete a questão da borda a cada página, então a
importação chaveia por `(número, idioma)` na entrada. E o ENEM aplica inglês e
espanhol nas mesmas posições 1 a 5 — a importação baixa as duas versões, e quem
faz a prova escolhe qual quer antes de o relógio começar.

**Questão de prova não tem matéria.** O ENEM agrupa por área, e "Ciências da
Natureza" mistura física, química e biologia sem dizer qual é qual. Chutar
encheria o filtro de Física de questões de biologia, então `materia_id` fica nulo
e vale a `area`.

## Redação

`/redacao` lista os 19 temas reais — as 15 edições de 2009 a 2023 mais 4
reaplicações. `/redacao/[tema]` é onde se escreve.

Duas entradas: **digitar** num campo pautado com contador de linhas, ou
**fotografar a folha manuscrita**. No caso da foto, o modelo transcreve antes de
corrigir e a transcrição volta junto — quem escreveu precisa poder conferir se a
leitura da própria letra saiu certa antes de aceitar a nota.

A correção segue a grade oficial: cinco competências de 0 a 200 em degraus de 40,
somando até 1000. O degrau é garantido em três camadas — o prompt manda, o código
encaixa no valor mais próximo (`encaixaNoDegrau`) e o banco tem `check (c1 % 40 =
0)`. Structured outputs não aceita restrição numérica, então a primeira camada
sozinha não bastaria.

Fuga ao tema zera o texto inteiro, e proposta que fira os direitos humanos zera a
competência 5 — como na correção real.

**As fotos ficam num bucket privado.** As políticas de `storage.objects` prendem
cada pessoa à pasta com o próprio id: é a letra e o texto dela, não conteúdo de
vitrine.

Os **textos motivadores não são reproduzidos** — cada tema linka o caderno oficial
do INEP, onde eles estão.

Na abertura de uma prova dá para escolher fazer a redação junto. A escolha fica
gravada em `simulados.com_redacao`, então quem fecha a aba encontra a prova do
jeito que montou. A folha abre no topo e pode ser escrita a qualquer momento —
como na prova de verdade, em que ela fica na mesa o tempo todo.

## Estudar por conteúdo

No painel, o bloco **Estudar um conteúdo** abre as nove matérias, mostra os 15
tópicos de cada uma e, ao lado de cada tópico, quantas questões existem dele no
banco. Escolhidos os assuntos, o botão monta um simulado só daquilo.

O filtro por tema já existia em `/api/simulado`; o que faltava era questão
marcada. Duas ferramentas resolvem isso, e nenhuma das duas gasta API:

```bash
npm run classificar -- --seco   # relatório, não grava
npm run classificar             # marca matéria e tema no banco
npm run seed-questoes -- --seco # valida os arquivos autorais
npm run seed-questoes           # insere as questões escritas à mão
```

**O classificador** (`scripts/regras-temas.mjs`) é lexical, não é modelo. São
135 conjuntos de expressões regulares com sinais fortes (peso 3) e fracos (peso
1); o tema vencedor precisa de 3 pontos e de 2 de vantagem sobre o segundo.
Empate técnico não classifica — questão sem tema é melhor que questão no tema
errado, porque o filtro é uma promessa: quem clica em Termoquímica tem que
receber termoquímica.

Metade das questões do ENEM não tem termo técnico nenhum — são textos de jornal
e tirinhas, e o que se cobra é ler. Para essas vale uma segunda camada, que
infere pela estrutura da prova e não pelo vocabulário: a área de Matemática só
tem matemática; questão de Linguagens em português sem termo de gramática é
interpretação; `idioma = 'ingles'` é Inglês por definição, porque a coluna veio
da importação. Espanhol fica de fora, porque não existe matéria de Espanhol
entre as nove.

Resultado sobre as 2.776 questões: **1.849 ganharam matéria e 1.347 ganharam
tema**, cobrindo 110 dos 135 tópicos. O restante segue sem tema e continua
valendo pela área, como antes.

**As questões autorais** ficam em `supabase/seed-data/questoes/*.mjs`, uma
matéria por arquivo, versionadas. Elas entram com `tema_manual = true`, e o
classificador as ignora: o tema veio do arquivo, não de heurística, e regravá-lo
seria desfazer trabalho humano com uma regra de palavra-chave.

> Questão de prova entra no estudo por tema **sem comentário** — o INEP publica
> gabarito, não explicação. A tela mostra os dois números («38 questões · 12
> comentadas») e tem a caixa *Só as comentadas* para quem quiser apenas as que
> abrem o porquê.

## Explicação sob demanda

O INEP publica o gabarito, não o comentário: as ~2.700 questões importadas nascem
com `explicacao` vazia. `/api/questoes/explicar` escreve o comentário com a
Claude na primeira vez que alguém pede e grava na questão — a segunda pessoa que
errar a mesma questão lê de graça, do banco.

Só explica prova já entregue. Durante o exame seria uma porta lateral para o
gabarito.

Sem `ANTHROPIC_API_KEY`, a rota devolve um erro explicando isso e o resto do site
continua funcionando.

---

## Conteúdo

Matérias, questões e faculdades vieram do site estático original.

- **No banco**: `materias` (9) e `questoes` (27 autorais + as geradas).
- **Em TypeScript** (`lib/conteudo/`): tópicos com incidência, 6 trilhas, 46
  cursos, FAQ e os 4 passos do método. É copy estática — não ganharia nada indo
  para o banco e pagaria latência em toda renderização.

As notas de corte são **referências aproximadas** de ampla concorrência, para
servir de meta. Mudam a cada edição e variam por campus, turno e cota.

Os números da faixa de estatísticas vêm da view `vw_estatisticas` — são a
contagem real do banco, não copy de vitrine.

**Número certo com rótulo errado também é mentira**, e a faixa tinha dois casos:

- *"1.219+ aulas em vídeo e material escrito"* somava `materias.aulas`, coluna
  herdada do site estático. Não existe uma aula sequer no projeto. Saiu.
- *"2.776 questões comentadas alternativa por alternativa"* contava o banco
  inteiro, mas só as autorais nascem com comentário — as do ENEM vêm com o
  gabarito do INEP e ganham explicação quando alguém pede. O rótulo virou
  "questões no banco".

Hoje a faixa mostra questões, provas do ENEM, conteúdos mapeados e cursos —
todos conferíveis contra o banco ou contra `lib/conteudo/`.

## Trilhas

Os seis cartões de `#trilhas` levam a `/trilhas/[id]`. Antes o "Explorar" era
um `<span>`: parecia botão e não ia a lugar nenhum.

Cada trilha declara em `lib/conteudo/destinos-trilha.ts` três coisas — o que
está pronto, quais matérias ela prioriza e **o que ainda não existe**. Essa
última parte é o motivo de a página existir em vez de o link ir direto para o
simulado: o banco é formado pelas provas do ENEM mais o acervo autoral, e não
tem questão da Fuvest, do Cebraspe nem cálculo do ciclo básico. Quem clicou em
"Concursos públicos" precisa ler isso antes de investir tempo, não depois.

Os `stat` dos cartões foram corrigidos junto — diziam "12 bancas" e "Editais
recentes", inventário inexistente. Cartão não pode prometer o contrário da
página para onde leva.

O link é esticado por `::after` sobre o cartão, que já era `position: relative`:
a área clicável é o cartão inteiro, sem aninhar `<a>` dentro de `<a>`.

---

## Notas

- Roda em **Next 16**. `npm audit` limpo, zero vulnerabilidades.
- Não há recuperação de senha nem verificação de e-mail por SMTP. O Supabase
  entrega os dois prontos, mas exigem configurar um servidor de e-mail.
