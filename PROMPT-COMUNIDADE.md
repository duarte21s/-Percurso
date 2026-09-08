# Prompt — construir a aba Comunidade

Cole isto numa sessão nova (ou nesta) para construir a Comunidade. É um
briefing, não um passo a passo: siga o espírito, decida os detalhes, **planeje
antes de codar**.

---

## Objetivo

Uma aba onde as pessoas estudam juntas: tiram dúvida de questão específica,
trocam dicas, discutem método. Leitura pública; escrever exige conta.

**Ressalva registrada:** o plano de arquitetura de 27/08 e o
[FUNCIONALIDADES.md](FUNCIONALIDADES.md) (F6) recomendam **não** construir isto
antes de haver centenas de usuários ativos — "fórum com 12 perfis é sala
vazia, e sala vazia afasta". Se está construindo mesmo assim, o escopo tem de
ser apertado e a sala tem de nascer semeada. As duas coisas estão exigidas
abaixo. Se a decisão for adiar de novo, o certo é **apagar**
`.rascunho/comunidade-incompleta/` para não deixar código morto.

---

## Ponto de partida — o que já existe

Metade da aba já foi escrita e está parada em
`.rascunho/comunidade-incompleta/`:

| arquivo | o que é |
|---|---|
| `PostCard.tsx` | card de post: título, texto, código, link, tags, curtir/comentar/salvar/compartilhar, selo "Resolvida" |
| `Comentarios.tsx` | fio de comentários com **um** nível de aninhamento, campo de resposta, Enter envia |
| `Avatar.tsx` | avatar tipográfico (iniciais + matiz), sem upload de foto |
| `Estados.tsx` | esqueleto de carregamento, estado vazio (`SemNada`), estado de erro (`DeuErro`) |
| `comunidade.module.css` | o CSS de tudo isso |

- Tipos já definidos em `lib/tipos.ts`: `Autor`, `Post`, `TipoPost`,
  `Comentario`, `ComunidadeGrupo`, `AssuntoEmAlta`, `Notificacao`.
- Mock em `lib/conteudo/comunidade.ts`: ~12 posts reais e bem escritos,
  helpers (`tempoRelativo`, `dataCompleta`, `compacto`), rótulos
  (`TIPOS_DE_POST`, `NOME_DO_TIPO`, `ABAS`, `TAGS_SUGERIDAS`) e as funções de
  acesso (`buscarFeed`, `buscarBarraLateral`, `buscarNotificacoes`) que hoje
  devolvem o mock com um `setTimeout`.

**Regra:** mova a pasta para `components/comunidade/`, **reaproveite os
componentes e o CSS como estão**, e troque só as funções de acesso do
`comunidade.ts` por queries reais + ações de servidor. Os componentes consomem
os tipos de `lib/tipos.ts`, não o mock — então trocar a fonte de dados não
deve tocar em `PostCard`/`Comentarios`.

---

## Escopo do v1 — o que "estudar juntos" significa aqui

Duas coisas, e nada além:

### A. Feed geral

O feed do rascunho: posts do tipo **pergunta**, **discussão**,
**compartilhamento**, **dica**. Título opcional, texto, tags, bloco de código
opcional, link opcional (só metadados digitados — ver Segurança). Comentários
com **um** nível. Curtir e salvar. Autor da pergunta pode marcar "Resolvida" e
aceitar uma resposta.

Abas do feed: **Recentes**, **Populares** (curtidas nas últimas 48 h),
**Perguntas**, **Meus posts**. (As `ABAS` do mock têm "Para você" e
"Discussões" — corte "Para você" no v1, não há sinal para personalizar.)

### B. Dúvidas na questão

O que amarra a comunidade ao produto e funciona **com pouca gente**: em
qualquer questão do Estudar (`components/estudo/`) e da correção de prova
(`components/provas/`), um painel "Discussão" que é um post do tipo `pergunta`
com `questao_id` preenchido. "Por que a alternativa C?" fica ligado àquela
questão para sempre; a próxima pessoa que errar já encontra a conversa.

A e B são **a mesma tabela** (`com_posts` com `questao_id` anulável). A
diferença é só onde o card aparece e se o filtro do feed geral esconde os que
têm `questao_id` (esconde, para não poluir — eles vivem na questão).

### Fora do v1 — cada um vira uma fase depois

- **Grupos / salas de estudo** — precisa de massa crítica por grupo.
- **Seguir / seguidores / "sugestões de quem seguir"** — rede social; adia.
- **Notificações e menções (`@`)** — o tipo `Notificacao` fica no arquivo,
  sem implementação.
- **Mensagens diretas.**
- **Upload de imagem** — `Post.imagem` fica só como texto `{ alt }` ou é
  removido. Imagem exige bucket público, limites e um processo de moderação de
  conteúdo ilegal que o v1 não tem.
- **Salas ao vivo / pomodoro compartilhado / presença ("3 online").**
- **Reputação / karma / níveis.**
- **"Assuntos em alta"** na barra lateral.
- **Busca** — no máximo um filtro por tag; busca textual depois.

A barra lateral do rascunho (grupos, sugestões, assuntos) fica de fora. Se
quiser uma coluna à direita no v1, que seja só "Como funciona" + as regras da
comunidade.

---

## Modelo de dados

Um arquivo novo, `supabase/comunidade.sql`, idempotente, rodado **depois** de
`schema.sql`. Siga a convenção dos outros `.sql`: `create table if not
exists`, `alter ... add column if not exists`, RLS ligado, policies
`drop ... if exists` antes de `create`, e o bloco de `grant` no fim (RLS diz
quais linhas; GRANT diz se a role toca na tabela — o Postgres exige os dois).

### `perfis` — colunas novas

```sql
alter table public.perfis
  add column if not exists username   text,
  add column if not exists bio        text not null default '',
  add column if not exists matiz      smallint not null default 210,
  add column if not exists verificado boolean not null default false,
  add column if not exists username_trocado_em timestamptz;

create unique index if not exists perfis_username_uk on public.perfis (lower(username));
alter table public.perfis add constraint username_formato
  check (username is null or username ~ '^[a-z0-9_.]{3,20}$');
```

- `username` nasce nulo; a pessoa escolhe no primeiro post (ou no onboarding).
  Reservados bloqueados na aplicação: `percurso`, `admin`, `suporte`,
  `moderador`, `equipe`, `oficial`, `staff` — e qualquer coisa que comece com
  `percurso`.
- Trocar username: no máximo 1×/mês (`username_trocado_em`). Identidade
  descartável é vetor de abuso.
- `matiz`: derive do hash do `id` na criação do perfil (0–360). Estável.
- `verificado`: **só a service role escreve**. Não entra em nenhum
  `grant update (...) to authenticated`.

### Tabelas novas

- **`com_posts`** — `id uuid pk`, `autor_id uuid not null → perfis`,
  `tipo text check (tipo in ('pergunta','discussao','compartilhamento','dica'))`,
  `titulo text`, `texto text not null check (char_length(texto) between 1 and 5000)`,
  `questao_id uuid → questoes on delete cascade` (anulável),
  `codigo jsonb`, `link jsonb`,
  `resolvido boolean not null default false`,
  `oculto boolean not null default false`,
  `criado_em timestamptz default now()`, `editado_em timestamptz`.
  Índices: `(criado_em desc) where not oculto`, `(questao_id) where questao_id is not null`.

- **`com_comentarios`** — `id`, `post_id → com_posts on delete cascade`,
  `autor_id → perfis`, `pai_id uuid → com_comentarios on delete cascade` (null =
  raiz), `texto text not null check (char_length(texto) between 1 and 2000)`,
  `aceito boolean not null default false`, `oculto boolean not null default false`,
  `criado_em`, `editado_em`.
  **Um nível só:** um trigger (ou constraint via função) recusa `insert` se o
  `pai_id` apontado já tiver `pai_id` não nulo.

- **`com_reacoes`** — `usuario_id → perfis`, `alvo_tipo text check (alvo_tipo in
  ('post','comentario'))`, `alvo_id uuid`, `criado_em`,
  `unique (usuario_id, alvo_tipo, alvo_id)`. É o "curtir".

- **`com_salvos`** — `usuario_id → perfis`, `post_id → com_posts on delete
  cascade`, `criado_em`, `unique (usuario_id, post_id)`.

- **`com_denuncias`** — `id`, `denunciante_id → perfis`, `alvo_tipo`, `alvo_id`,
  `motivo text not null default ''`, `criado_em`,
  `unique (denunciante_id, alvo_tipo, alvo_id)`.

### RLS

- **`com_posts` / `com_comentarios`**
  - `select`: `to anon, authenticated using (not oculto or autor_id = auth.uid())`.
  - `insert`: `to authenticated with check (autor_id = auth.uid())` **e mais**:
    a conta não pode ser anônima. Faça uma função
    `public.pode_publicar()` que devolve `false` para visitante
    (`(auth.jwt() ->> 'is_anonymous')::boolean is true`) e para conta com menos
    de 10 minutos, e use no `with check`. **Visitante lê, não escreve.**
  - `update` / `delete`: `using (autor_id = auth.uid())`. No `update`, o `with
    check` também trava `oculto` e `verificado`-derivados — a pessoa não pode
    ocultar o próprio para escapar de moderação nem despublicar de forma que
    quebre contagem; mais simples: **sem grant de `update` da coluna `oculto`
    para `authenticated`** (grant por coluna, como `provas.sql` já faz com
    `explicacao`).
  - `resolvido` (post) e `aceito` (comentário): só quem é dono do **post**.
    Policy separada ou função.
- **`com_reacoes` / `com_salvos` / `com_denuncias`**: dono only
  (`usuario_id = auth.uid()` / `denunciante_id = auth.uid()`) em todas as
  operações. `select` de reações agregadas para todos é via **view** com
  `security_invoker` (contagem por alvo), não leitura linha a linha.
- `oculto = true` só pela service role.

### Grants

No molde de `schema.sql`: `grant usage on schema public`, `select` público em
`com_posts`/`com_comentarios`/as views, `select, insert, update, delete`
restrito por RLS em `com_*` para `authenticated`, `grant update (texto,
titulo, editado_em, resolvido) on public.com_posts` (colunas específicas — nada
de `oculto`), `grant all ... to service_role`.

---

## Rotas e ações

- **Página:** `app/(site)/comunidade/page.tsx` — Server Component busca o feed
  inicial (as primeiras ~20 linhas) direto pelo cliente Supabase de servidor;
  a interação é client. Sem `exigeSessao` na página (leitura é pública), mas o
  compositor só aparece logado.
- **Ações de servidor:** `app/(site)/comunidade/acoes.ts` com `"use server"`,
  no molde de `app/entrar/acoes.ts`:
  `publicarPost`, `editarPost`, `apagarPost`, `comentar`, `editarComentario`,
  `apagarComentario`, `reagir` (toggle), `salvar` (toggle),
  `marcarResolvido`, `aceitarResposta`, `denunciar`.
  Cada ação: pega a sessão (sem sessão → erro tratável, não exceção),
  valida tamanho **no servidor** (não confie no cliente), aplica rate limit,
  faz a escrita, `revalidatePath("/comunidade")`.
- **Dúvidas na questão:** as mesmas ações, chamadas de dentro de
  `components/estudo/` e `components/provas/`. O painel de discussão pode
  buscar por `GET /api/comunidade/questao/[id]` (rota simples, leitura
  pública) ou por Server Component aninhado — escolha o que encaixa no que já
  existe nessas telas.

### Rate limit (obrigatório — ver `MELHORIAS.md` S1)

Por `user.id`, janela diária: **publicar 10**, **comentar 60**, **reagir 300**,
**denunciar 20**. Se a correção do S1 já tiver criado um mecanismo geral
(Upstash ou tabela `uso_api`), use-o. Se não, crie uma tabela `com_uso`
(`usuario_id`, `acao`, `dia date`, `contagem`) só para isto e deixe um
`TODO: migrar para o rate limit geral quando existir`.

Além do limite: conta com menos de 10 min não publica (já coberto pela função
RLS), e — opcional, recomendado — exigir ter respondido ≥ 5 questões antes de
publicar no feed geral (dúvida na questão não exige, quem está ali já está
estudando).

---

## Segurança — requisitos (ver `MELHORIAS.md`)

Conteúdo gerado por usuário e **público** é uma superfície nova e grande.

1. **Nada de HTML de usuário.** Nunca `dangerouslySetInnerHTML` — o projeto
   está limpo disso hoje, mantenha. Texto renderiza como texto (o React
   escapa). Se quiser **kbd/negrito/itálico/código**, use um subconjunto
   fechado renderizado como elementos React, nunca string de HTML. Sem
   Markdown que aceite `<...>`.
2. **Links (`link` no post):** são só metadados digitados por quem posta
   (`url`, `titulo`, `dominio`). **Não busque a URL no servidor** — sem
   unfurl, sem preview, sem screenshot (evita SSRF). Renderize com
   `rel="noopener noreferrer nofollow"` e `target="_blank"` (o `PostCard` já
   faz), e deixe visível que título e domínio foram "informados por quem
   publicou". Rejeite `url` que não seja `http(s)://`.
3. **Sem upload de imagem no v1.** Trate `Post.imagem` como texto `{ alt }`
   ou remova do tipo. Upload é um v2 com bucket público, RLS por pasta,
   limite de tipo/tamanho (como a foto da redação) e um processo de moderação.
4. **`username` é um namespace.** Validação estrita no servidor (regex +
   reservados), `lower(username)` único, troca no máximo mensal. Não deixe
   ninguém virar `@percurso_oficial`.
5. **`verificado` e `oculto`:** só a service role escreve. Grant por coluna,
   como `provas.sql` faz.
6. **CSP (S4):** se o v1 não tem imagem de usuário nem script novo, a CSP que
   a correção do S4 definir já cobre. Não introduza `<script>` inline nem
   origem externa nova.
7. **Injeção de prompt (S9):** nada de conteúdo da comunidade vai para a IA no
   v1. Se algum dia a IA resumir threads ou sugerir respostas, o texto do
   usuário é **não confiável** — trate como dado, nunca como instrução, e não
   sirva saída de IA de uma pessoa para outra sem revisão.
8. **Moderação mínima — sem isto o v1 não vai a público:**
   (a) o autor apaga o próprio post/comentário;
   (b) `com_denuncias` acumula;
   (c) um `scripts/moderar.mjs` (service role) lista as denúncias, mostra o
   conteúdo, e permite `oculto = true`;
   (d) conteúdo oculto some do feed público e da contagem.
9. **Visitante (anônimo) não escreve** — corta o spam descartável.
10. **Parametrização:** `texto` guardado como recebido; o cliente Supabase
    já parametriza — nunca monte SQL por interpolação.

---

## O problema da sala vazia — mitigações obrigatórias

1. **Semear o feed.** `supabase/seed-data/comunidade.mjs` + um script que
   insere 15–25 posts reais e úteis (dicas, dúvidas comuns com boas
   respostas). O conteúdo do mock em `lib/conteudo/comunidade.ts` é bom —
   use-o como matéria-prima. Atribua a 3–5 perfis-semente **honestos**: ou
   um selo "Equipe Percurso" (perfil real da conta que administra), ou perfis
   marcados como conteúdo curado. Não invente usuários fingindo tráfego.
2. **Dúvidas na questão não precisam de semente** — enchem sozinhas conforme
   a galera estuda, e já fazem sentido com 5 pessoas. É por isso que a parte B
   é tão importante quanto a A.
3. **Estados vazios honestos** (o `SemNada` já existe): "Ainda não há discussão
   nesta questão. Seja a primeira pessoa a comentar." / "A comunidade está
   começando — os primeiros posts são da Equipe Percurso."
4. **Não mostre contador que denuncia vazio:** nada de "0 membros",
   "ninguém online", "3 posts hoje".

---

## Design e integração

- Tema dark, acento âmbar, tokens em `app/globals.css`. Reuse `Icone`
  (`@/components/ui/Icone`), as classes `btn` / `btn-ghost` / `btn-primary`, e
  `comunidade.module.css` como está.
- Telas novas do projeto usam CSS Modules (ver comentário no topo do
  `globals.css`) — o `comunidade.module.css` já segue isso.
- Falta construir: `page.tsx`, o compositor de post (o rascunho não tem —
  pode ser um painel expansível no topo do feed, não precisa ser modal), o
  seletor de tipo/tags, e a integração do painel "Discussão" dentro de
  `components/estudo/` e `components/provas/`.
- **Nav:** em `components/layout/Nav.tsx`, adicionar
  `{ href: "/comunidade", rotulo: "Comunidade", privado: false }` ao array
  `LINKS` e ao `nav-mobile`. Atenção: o [FUNCIONALIDADES.md](FUNCIONALIDADES.md)
  (I4) quer o menu **encolhendo**. Se ao adicionar Comunidade o topo passar de
  6 itens, leve a decisão ao usuário — talvez Comunidade entre e "Cronograma"
  saia (ele já está previsto para sair).

---

## Critérios de aceite

- **Deslogado:** vejo o feed e as discussões das questões; o botão de publicar
  leva ao `/entrar?proximo=/comunidade`.
- **Logado (não visitante):** publico uma pergunta e ela aparece no topo;
  comento; curto e salvo; edito e apago o que é meu; **não** consigo editar o
  post de outra pessoa — testar por chamada direta:
  `supabase.from('com_posts').update({texto:'x'}).eq('id', <de outro>)` afeta
  **0 linhas**.
- **Visitante:** vejo tudo, não consigo publicar nem comentar (RLS recusa,
  além do botão sumir).
- **Dúvida na questão:** numa questão do Estudar, abro "Discussão", pergunto,
  e o post fica com `questao_id` daquela questão; ele **não** aparece no feed
  geral.
- **Rate limit:** a 11ª publicação no mesmo dia responde erro claro (não 500).
- **Tamanho:** `texto` com 10.000 caracteres é recusado no servidor antes de
  gravar.
- **Moderação:** denúncia grava; `node scripts/moderar.mjs` lista e oculta;
  conteúdo oculto some do feed e o autor ainda o vê.
- **Semente:** feed abre com 15–25 posts reais atribuídos a perfis
  identificáveis como curadoria.
- `npx tsc --noEmit` limpo; nenhum erro de hidratação novo no console de
  `/comunidade`; `grep -r dangerouslySetInnerHTML` continua sem resultado.
- `supabase/comunidade.sql` roda duas vezes seguidas sem erro.

---

## Primeiro passo

1. Leia o guia do App Router / Route Handlers em
   `node_modules/next/dist/docs/` (regra do `AGENTS.md` — a API pode ter
   mudado).
2. Leia `MELHORIAS.md` (S1, S2, S3, S4, S9) e `FUNCIONALIDADES.md` (F6) para o
   contexto de segurança e da decisão.
3. Olhe `.rascunho/comunidade-incompleta/`, `lib/tipos.ts` e
   `lib/conteudo/comunidade.ts` inteiros.
4. **Proponha o plano** — a lista de tabelas com colunas e policies, as rotas
   e ações, os arquivos que vai criar ou mover, e o que fica de fora — e
   **espere o OK antes de escrever código**.
