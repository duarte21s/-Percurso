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

```
120 temas no total  ·  1 pronto  ·  119 a fazer
```

| matéria | temas prontos |
|---|---|
| raciocinio-logico | 1 de 15 — só "Proposições e conectivos lógicos" (51 questões) |
| todas as outras | 0 de 15 |

Para conferir a qualquer momento:

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
