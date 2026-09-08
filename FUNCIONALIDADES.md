# Percurso — funcionalidades novas

Par do [MELHORIAS.md](MELHORIAS.md) (segurança). Levantado em 27/08/2026
sobre o código atual e cruzado com o plano de arquitetura de 27/08 ("Percurso:
o que construir agora"). Não repete o que já foi decidido não fazer — isso
está na seção final. Nada foi alterado; é a lista de requisitos.

Ordenado por prioridade: **Essencial** (a base) · **Importante** (retenção e
maturidade) · **Diferencial** (aposta, vem depois). Duas apostas grandes
estão marcadas.

Campos de cada item: problema · como funciona · dados · integração ·
esforço · pronto quando.

Escala de esforço: **horas** · **dias** · **1–2 semanas** · **semanas**.

---

## Essencial

### E1 · Caderno de erros

**Problema:** errar uma questão hoje e nunca mais reencontrá-la. As respostas
registradas morrem no histórico — acerto e erro viram só um número no Painel.
É o recurso que faz as ~6.850 explicações escritas à mão renderem juros; sem
ele, cada explicação é lida uma vez e descartada.

**Como funciona:** toda questão errada entra numa fila. A pessoa refaz quando
quiser; a questão só sai da fila depois de dois acertos em dias diferentes
(repetição espaçada simples — ver D3 para a versão completa).

**Dados:** nada novo na tabela `respostas`, que já grava `acertou` e
`respondido_em`. Uma view `vw_caderno_erros` (questão, último erro, nº de
acertos posteriores) ou uma coluna derivada. Sem conteúdo novo.

**Integração:** vive dentro do Painel. Alimenta a Revisão de hoje (I1).

**Esforço:** dias.

**Pronto quando:** errar uma questão a coloca na fila; acertá-la duas vezes
em dias distintos a remove; a fila aparece no Painel com contagem.

---

### E2 · Explicações das questões do ENEM — backfill + sob demanda

**Problema:** ~2.749 das ~9.600 questões (29%) não têm comentário — o INEP
publica gabarito, não explicação. A tela promete "descubra por que errou" e
não cumpre em quase um terço do banco. O `explicaQuestao` sob demanda existe,
mas só dispara em prova finalizada, então quem estuda por conteúdo nunca o
alcança.

**Como funciona:** (a) rota de explicação passa a valer também no estudo por
conteúdo, não só em prova entregue; (b) script de lote (`scripts/`) gera as
que faltam pelo Gemini, que já está ligado e é gratuito, passando pelo mesmo
filtro de qualidade das autorais e com revisão por amostragem antes de gravar.

**Dados:** coluna `explicacao` + `explicada_em` já existem. Ver **S3** no
documento de segurança: a gravação precisa sair do cliente para o servidor
(service role) antes de rodar o backfill em escala.

**Integração:** Estudar, modo prova, Caderno de erros — todos leem `explicacao`.

**Esforço:** 1–2 semanas (o backfill é a parte longa: ~595 chamadas em lote a
~10 questões cada, mais a revisão).

**Pronto quando:** nenhuma questão servida no estudo por conteúdo aparece sem
explicação; a rota sob demanda funciona fora do modo prova.

---

### E3 · Preparação — um objetivo persistido por pessoa

**Problema:** o Cronograma é recalculado do zero a cada visita. Ele não sabe
qual prova a pessoa vai fazer, quando, nem o que ela já estudou. O Painel é
histórico, não "o que fazer agora".

**Como funciona:** a pessoa escolhe uma vez: categoria (escola / ENEM /
vestibular / concurso / militar), prova-alvo quando houver, data, matérias.
Isso fica salvo e passa a alimentar Painel, Estudar (recorte pré-selecionado)
e Revisão.

**Dados:** tabela `preparacoes` — `usuario_id`, `categoria`, `prova_id?`,
`data_alvo`, `materias text[]`, `criado_em`. RLS por `auth.uid()`, no molde
de `simulados`.

**Integração:** substitui o seletor volátil do Cronograma. O Cronograma sai
do menu do topo e vira uma aba dentro do Painel.

**Ressalva:** isto **é a aba Trilhas de volta**, removida em 26/08. A
diferença que justifica: Trilhas era página de leitura sem estado; Preparação
é um objeto salvo que muda o resto do site. Se voltar sem estado, apague de
novo.

**Esforço:** 1–2 semanas.

**Pronto quando:** a pessoa define o objetivo uma vez e, na visita seguinte,
o Painel abre em "faltam N dias · foque em X" e o Estudar já vem recortado.

---

### E4 · Fechar os 148 temas sem questão

**Problema:** das 17 matérias, as 8 criadas por objetivo (concurso, militar,
graduação, fundamental) têm quase todos os temas vazios — 148 no total sem
nenhuma questão. Abrir "Carreiras militares" e ver "sem questões ainda" é o
site prometendo o que não tem.

**Como funciona:** `scripts/gerar-questoes.mjs` gera rascunho pelo Gemini
seguindo as cinco regras de redação de questão, roda `rebalancear-gabarito` e
`checar-qualidade` sozinho, e para para revisão humana antes de semear.
Nenhuma questão vai ao banco sem alguém ler — gabarito errado ensina errado.

**Dados:** arquivos em `supabase/seed-data/questoes/gerado/`, semeados por
`npm run seed-questoes`. Nada de esquema.

**Integração:** o catálogo (`scripts/catalogo-temas.mjs`) já valida os pares
(matéria, tema); o site conta e exibe por tema automaticamente.

**Esforço:** semanas de calendário (limitado pela cota diária do Gemini e
pela revisão), mas pouco código.

**Pronto quando:** todo tema das 17 matérias tem pelo menos ~30 questões;
nenhuma matéria mostra "sem questões ainda".

---

### E5 · Primeira sessão guiada

**Problema:** a maior falha medida do projeto é que ninguém usa (12 perfis,
22 respostas, 0 redações). Parte disso é não haver primeiro passo óbvio:
quem entra cai numa home rica e não sabe onde começar.

**Como funciona:** logo após o cadastro (ou o acesso de visitante), um
caminho curto de 3 passos — escolher objetivo (vira a Preparação, E3),
responder 5 questões de nivelamento numa matéria, ver o primeiro resultado
com a explicação aberta. Termina levando ao Painel já com estado.

**Dados:** um campo `perfis.onboarding_em timestamptz` para não repetir.
Reaproveita `/api/simulado` (sessão de 5) e a Preparação.

**Integração:** amarra E3 (objetivo) e E2 (explicação) numa experiência de
entrada. É o gancho que as outras funcionalidades assumem existir.

**Esforço:** dias.

**Pronto quando:** um cadastro novo chega ao Painel tendo respondido pelo
menos uma questão e visto uma explicação, sem precisar procurar por onde
começar.

---

## Importante

### I1 · Revisão de hoje

**Problema:** nada no site dá motivo para abrir amanhã. O Cronograma diz o
que estudar; ninguém verifica se foi estudado.

**Como funciona:** uma fila diária curta, montada do Caderno de erros (E1)
mais os assuntos com revisão vencida pela Preparação (E3). Acaba quando
acaba — sem rolagem infinita, com fim visível. Não é notificação nem
sequência de dias; é uma tarefa pequena que termina.

**Dados:** derivado de `respostas` + `preparacoes`. Opcional: `revisoes`
(usuario_id, tema, proxima_em) para agendar o vencimento.

**Integração:** depende de E1 e E3 — por isso vem depois delas. Vive no
Painel.

**Esforço:** dias (a fila) + 1 semana se incluir o agendamento por tema.

**Pronto quando:** abrir o Painel mostra "Revisão de hoje: 12 itens",
responder esvazia a fila, e ela se remonta no dia seguinte.

---

### I2 · Painel orientado a ação

**Problema:** o Painel hoje é um retrovisor — sessões concluídas, acertos,
aproveitamento. Nada nele diz o que fazer agora.

**Como funciona:** o topo do Painel passa a ser: dias até a prova-alvo,
Revisão de hoje, assunto mais fraco, botão de continuar. O histórico desce
para uma aba secundária. O conteúdo muda conforme a categoria da Preparação
(escola mostra "próxima prova"; ENEM mostra "evolução por área").

**Dados:** nenhum novo — compõe Preparação (E3), Caderno (E1), Revisão (I1)
e o histórico que já existe.

**Integração:** é onde E1, E3 e I1 se encontram. Absorve o Cronograma.

**Esforço:** 1 semana.

**Pronto quando:** o Painel abre em "o que fazer agora", não em "o que já
foi feito".

---

### I3 · Evolução da redação

**Problema:** a correção da redação (agora funcionando por texto e por foto,
via Gemini) devolve uma nota e some. Não dá para ver se a C1 melhorou entre
a primeira e a quinta redação, nem treinar a competência que trava.

**Como funciona:** (a) gráfico das notas por competência ao longo do tempo,
lido de `redacoes` (que já grava `c1..c5`, `total`, `criado_em`); (b)
comparar duas redações lado a lado; (c) treino dirigido — a correção aponta
"sua C5 trava em 120", e o site sugere reescrever só a proposta de
intervenção.

**Dados:** tudo já está em `redacoes`. Nenhum esquema novo para (a) e (b).

**Integração:** vive na aba Redação; feeds no Painel (I2) como "sua C3 subiu
40 pontos".

**Esforço:** dias para (a) e (b); 1 semana para (c).

**Pronto quando:** a aba Redação mostra a série histórica por competência de
quem já escreveu mais de uma.

---

### I4 · Menu enxuto

**Problema:** o pedido era evitar um menu grande. A forma direta não é criar
submenus — é remover dois itens.

**Como funciona:** o topo fica com cinco: Painel, Estudar, Provas, Redação,
Faculdades. **Matérias** sai (duplica Estudar em modo leitura — Estudar é o
mesmo catálogo, clicável). **Cronograma** sai do topo e vira parte da
Preparação, dentro do Painel. Caderno de erros e Revisão vivem no Painel, não
no topo — só existem para quem tem histórico.

**Dados:** nenhum.

**Integração:** depende de E3 (Preparação absorve o Cronograma) e I2 (Painel
absorve Caderno/Revisão). Fazer depois delas.

**Esforço:** horas.

**Pronto quando:** cinco itens no topo; nada no menu leva a uma tela vazia
para quem acabou de entrar.

---

### I5 · Gestão de conta

**Problema:** não há como trocar o e-mail, redefinir a senha por dentro do
site, nem apagar a conta. Apagar conta é exigência da LGPD e hoje só sai por
SQL manual.

**Como funciona:** uma aba de conta no Painel: trocar e-mail (com
reconfirmação), "esqueci a senha" na tela de entrada (`resetPasswordForEmail`
do Supabase), e "apagar minha conta" — que remove `auth.users` e deixa o
`on delete cascade` levar perfil, simulados, respostas e redações.

**Dados:** o cascade já está montado no schema. A remoção do usuário em si
precisa da service role, numa rota dedicada.

**Integração:** tela de entrada (`app/entrar/`) e Painel.

**Esforço:** dias.

**Pronto quando:** a pessoa troca e-mail, redefine senha e apaga a conta sem
suporte manual; apagar a conta remove tudo o que é dela.

---

### I6 · Exportar progresso

**Problema:** o histórico é do usuário, mas fica preso no site.

**Como funciona:** um botão no Painel que gera CSV (respostas, sessões,
notas de redação) e/ou um PDF de resumo — desempenho por área, evolução da
redação, temas mais fracos.

**Dados:** só leitura do que já existe. PDF pode ser gerado no cliente.

**Integração:** Painel.

**Esforço:** dias.

**Pronto quando:** o Painel exporta um CSV que abre no Excel e um PDF de uma
página.

---

## Diferencial

### D1 · Importador de prova em PDF + a segunda banca — APOSTA GRANDE

**Problema:** o site só tem ENEM. Fuvest, Comvest, UERJ, Cebraspe, ITA, IME e
EsPCEx publicam os acervos completos de graça — mas em PDF, e não há API. O
que falta não é permissão nem esquema: é um importador que leia PDF.

**Como funciona:** um pipeline que extrai de um PDF de prova o texto de cada
questão, as figuras, as alternativas, o gabarito e a numeração, e grava em
`provas` + `questoes` no mesmo formato do import da `enem.dev`. Começar pela
Fuvest: acervo grande (1977–2026), formato estável.

**Dados:** depende de D2 (as 5 colunas em `provas`). As questões entram como
dado respondível, não como arquivo — a regra que impede o site de virar
repositório de PDF.

**Integração:** modo prova, simulado por área e correção funcionam sem código
novo assim que as linhas entram. A `/provas` ganha um seletor de categoria
(só quando houver a 2ª banca — antes disso é ruído).

**Esforço:** semanas. É engenharia de verdade: extração de layout, OCR de
figura, casamento de gabarito. O item de maior valor de toda a expansão.

**Pronto quando:** uma prova da Fuvest importada de PDF é respondível no site
com cronômetro e correção, igual a uma do ENEM.

---

### D2 · Migração das 5 colunas em `provas`

**Problema:** `provas` é quase genérica (já tem `banca`), mas não guarda
categoria, instituição, UF, fase, nem os atributos específicos de cada tipo
(cargo/órgão num concurso, força/curso num militar).

**Como funciona:**

```sql
alter table provas
  add column categoria   text not null default 'enem'
    check (categoria in ('enem','vestibular','concurso','militar','escolar')),
  add column instituicao text,
  add column uf          text,
  add column fase        smallint,
  add column atributos   jsonb not null default '{}';
create index provas_atributos_idx on provas using gin (atributos);
```

`atributos` guarda o que é específico por categoria, sem onze colunas nulas
em 95% das linhas. **Não** cinco tabelas: `questoes.prova_id`,
`simulados.prova_id` e o motor de correção apontam para `provas`; dividir
exigiria referência polimórfica e reescrita do que hoje funciona.

**Dados:** a própria migração. Idempotente, no molde dos outros `.sql`.

**Integração:** habilita D1 e o seletor de categoria em `/provas`.

**Esforço:** horas (a migração) — mas só vale a pena junto de D1.

**Pronto quando:** dá para inserir uma prova de vestibular com
`categoria='vestibular'`, `instituicao='FUVEST'`, `atributos` com a fase, e o
filtro de `/provas` a encontra.

---

### D3 · Motor de repetição espaçada de verdade — APOSTA

**Problema:** o Caderno de erros (E1) e a Revisão (I1) usam uma regra simples
("dois acertos em dias diferentes"). Isso funciona, mas não adapta o
intervalo à dificuldade real de cada questão para cada pessoa.

**Como funciona:** um algoritmo SM-2 (ou FSRS) por par (usuário, questão):
cada revisão ajusta o próximo intervalo conforme acerto/erro e confiança. A
Revisão de hoje passa a ser alimentada por isso em vez da regra fixa.

**Dados:** tabela `revisoes` — `usuario_id`, `questao_id`, `facilidade`,
`intervalo_dias`, `proxima_em`, `repeticoes`. Atualizada a cada resposta.

**Integração:** troca o motor por trás de E1/I1 sem mudar a interface.

**Esforço:** 1–2 semanas. É bem entendido (SM-2 tem 40 anos), mas exige
dado de uso real para calibrar — por isso vem depois de ter gente usando.

**Pronto quando:** duas pessoas com desempenhos diferentes na mesma questão
recebem intervalos de revisão diferentes.

---

### D4 · PWA / simulado offline

**Problema:** o simulado já guarda progresso em `localStorage`, mas o site
não é instalável e não abre sem rede.

**Como funciona:** manifest + service worker que faz cache do shell e das
questões da prova aberta, para responder offline e sincronizar ao voltar a
rede. Instalável na tela inicial do celular.

**Dados:** nenhum no servidor. O SW versiona o cache.

**Integração:** modo prova e simulado avulso.

**Esforço:** 1 semana.

**Pronto quando:** dá para instalar o site no celular, abrir sem rede e
continuar uma prova começada.

---

## Deliberadamente fora, por enquanto

Cortados no plano de 27/08, com a condição que mudaria a decisão:

| Ideia | Por que não agora | Quando reconsiderar |
|---|---|---|
| Recomendações inteligentes | Recomendar a partir de ~22 respostas é chute com cara de estatística. | Alguns milhares de respostas reais. |
| Metas / desempenho × objetivo | Exige série histórica que não existe; meta sem base vira enfeite. | Depois de I2 + meses de uso. |
| Favoritos | Redundante com o Caderno de erros — o que se quer rever é o que se errou. | Se surgir demanda por marcar questão certa. |
| Anotações | Sem sinal de demanda; pior relação custo de manutenção / uso em plataforma de estudo. | Se usuários reais pedirem. |
| Página por carreira militar | 6 seções de conteúdo editorial por processo, para um acervo de zero provas. | Depois de D1 trazer provas militares. |
| Comunidade / fórum | Está pela metade em `.rascunho/comunidade-incompleta/`. Fórum com 12 perfis é sala vazia, e sala vazia afasta. | Centenas de usuários ativos. Até lá: apagar o rascunho para não confundir. |

---

## Sequência sugerida

Do plano de 27/08, reordenado para "dívida antes de expansão":

1. **E2 + E1 + E4** — cumprir o que a tela já promete.
2. **E3 + E5 + I1 + I2 + I4** — criar motivo para voltar e enxugar o menu.
3. **Gente real** — 30 a 50 estudantes usando por semanas. Não é código; é o
   que separa construir o certo de construir muito.
4. **D2 + D1** — importador de PDF e a Fuvest. A categoria vira real aqui.
5. **D3 + concurso/militar** — repetição espaçada calibrada e as bancas mais
   heterogêneas, por último.

I3, I5, I6 e D4 encaixam em qualquer ponto a partir do passo 2 — são
independentes.
