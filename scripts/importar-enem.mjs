/* =========================================================================
   Percurso — importação das provas reais do ENEM

   Fonte: api.enem.dev — projeto público e open source que converte para JSON
   os PDFs que o INEP publica gratuitamente. Cobertura: 2009 a 2023.

   Uso:
     node scripts/importar-enem.mjs                 todos os anos
     node scripts/importar-enem.mjs 2023 2022       só esses
     node scripts/importar-enem.mjs 2023 --imagens  espelhando as figuras

   Sem --imagens, as URLs das figuras apontam para o servidor de origem: a
   importação é rápida, mas se aquele site sair do ar as questões com gráfico
   quebram. Com --imagens, cada figura é copiada para o Storage do seu projeto
   e passa a ser sua. Demora bem mais e vale rodar uma vez, depois de conferir
   que o resto está funcionando.

   É idempotente: reimportar o mesmo ano atualiza as questões em vez de
   duplicar, graças ao índice único em (prova_id, numero, idioma).
   ========================================================================= */

import { readFileSync } from "node:fs";
import { createClient } from "@supabase/supabase-js";

const API = "https://api.enem.dev/v1";
const BALDE = "provas";
const FONTE = "https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/provas-e-gabaritos";

/* O ENEM real dá 5h30 no primeiro dia — 90 questões mais a redação — e 5h no
   segundo, com as outras 90. Soma 10h30.

   Aqui a prova vem num bloco só, com as 180 questões de uma vez, então o
   cronômetro precisa cobrir os dois dias juntos. São 11h: o dia 1 dobrado, meia
   hora acima do total oficial. A folga é proposital e serve de espaço para a
   redação, que ainda não existe no site. */
const TEMPO_MINUTOS = 660;

// --- .env.local sem dependência externa -----------------------------------
function carregaEnv() {
  let bruto;
  try {
    bruto = readFileSync(new URL("../.env.local", import.meta.url), "utf8");
  } catch {
    return;
  }
  for (const linha of bruto.split("\n")) {
    const corte = linha.indexOf("=");
    if (corte < 1 || linha.trimStart().startsWith("#")) continue;
    const chave = linha.slice(0, corte).trim();
    const valor = linha.slice(corte + 1).trim().replace(/^["']|["']$/g, "");
    if (chave && !(chave in process.env)) process.env[chave] = valor;
  }
}

carregaEnv();

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceKey) {
  console.error(
    "\nFaltam variáveis de ambiente.\n\n" +
      "  NEXT_PUBLIC_SUPABASE_URL   " + (url ? "ok" : "AUSENTE") + "\n" +
      "  SUPABASE_SERVICE_ROLE_KEY  " + (serviceKey ? "ok" : "AUSENTE") + "\n"
  );
  process.exit(1);
}

const supabase = createClient(url, serviceKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const argumentos = process.argv.slice(2);
const espelharImagens = argumentos.includes("--imagens");
const anosPedidos = argumentos
  .filter((a) => /^\d{4}$/.test(a))
  .map(Number);

// --- rede com paciência ---------------------------------------------------
/* A API é gratuita e responde 429 quando apertada. Em vez de desistir no
   primeiro tropeço, espera e tenta de novo: a importação inteira são centenas
   de requisições e falhar na 300ª obrigaria a recomeçar. */
async function buscaJson(endereco, tentativas = 4) {
  for (let i = 0; i < tentativas; i++) {
    const resposta = await fetch(endereco, {
      headers: { accept: "application/json" },
    });
    if (resposta.ok) return resposta.json();
    if (resposta.status === 429 || resposta.status >= 500) {
      const espera = 1200 * (i + 1);
      console.log(`   … ${resposta.status}, tentando de novo em ${espera}ms`);
      await new Promise((r) => setTimeout(r, espera));
      continue;
    }
    throw new Error(`${resposta.status} em ${endereco}`);
  }
  throw new Error(`desisti de ${endereco} após ${tentativas} tentativas`);
}

// --- espelho das figuras --------------------------------------------------
async function preparaBalde() {
  const { data } = await supabase.storage.listBuckets();
  if (data?.some((b) => b.name === BALDE)) return;
  const { error } = await supabase.storage.createBucket(BALDE, {
    public: true,
    fileSizeLimit: 5 * 1024 * 1024,
  });
  if (error && !/already exists/i.test(error.message)) {
    console.error("Não consegui criar o bucket:", error.message);
    process.exit(1);
  }
  console.log(`Bucket "${BALDE}" pronto.`);
}

const espelhadas = new Map();

async function espelha(endereco) {
  if (!endereco) return endereco;
  if (espelhadas.has(endereco)) return espelhadas.get(endereco);

  // Mantém o caminho da origem: .../2023/questions/135/uuid.png
  const caminho = new URL(endereco).pathname.replace(/^\/+/, "");

  const { data: publico } = supabase.storage.from(BALDE).getPublicUrl(caminho);

  try {
    const resposta = await fetch(endereco);
    if (!resposta.ok) throw new Error(String(resposta.status));
    const bytes = Buffer.from(await resposta.arrayBuffer());

    const { error } = await supabase.storage
      .from(BALDE)
      .upload(caminho, bytes, {
        contentType: resposta.headers.get("content-type") ?? "image/png",
        upsert: true,
      });
    if (error) throw error;

    espelhadas.set(endereco, publico.publicUrl);
    return publico.publicUrl;
  } catch (erro) {
    // Uma figura que não copia não justifica derrubar a importação inteira:
    // a questão entra apontando para a origem, e o site continua servindo.
    console.log(`   ! figura não copiada (${erro.message}) — mantendo origem`);
    espelhadas.set(endereco, endereco);
    return endereco;
  }
}

// --- conversão ------------------------------------------------------------
const LETRAS = ["A", "B", "C", "D", "E"];

function converte(q, provaId) {
  const alternativas = Array.isArray(q.alternatives) ? q.alternatives : [];
  if (alternativas.length < 2) return null;

  const correta = alternativas.findIndex((a) => a.isCorrect);
  if (correta < 0) return null;

  /* Alternativa ilustrada tem `text` nulo e a figura como resposta. O texto
     não pode ficar vazio — o simulado renderiza um botão em branco — então
     entra a letra, e a imagem vai na coluna paralela. */
  const opcoes = alternativas.map(
    (a, i) => (a.text ?? "").trim() || LETRAS[i] || String(i + 1)
  );
  const opcoesImagens = alternativas.map((a) => a.file ?? "");

  const enunciado = [q.context, q.alternativesIntroduction]
    .filter((p) => typeof p === "string" && p.trim())
    .join("\n\n")
    .trim();

  if (!enunciado) return null;

  return {
    prova_id: provaId,
    materia_id: null,
    numero: q.index,
    area: q.discipline ?? null,
    // Vazio para as 175 questões comuns; "ingles"/"espanhol" só nas cinco de
    // língua estrangeira, que o ENEM aplica nas mesmas posições 1 a 5.
    idioma: q.language ?? "",
    fonte: q.title ?? `Questão ${q.index}`,
    enunciado,
    opcoes,
    opcoes_imagens: opcoesImagens,
    imagens: Array.isArray(q.files) ? q.files.filter(Boolean) : [],
    correta,
    explicacao: "",
    origem: "enem",
    dificuldade: "media",
  };
}

// --- importação de um ano -------------------------------------------------
async function importaAno(ano, idiomasDaProva) {
  const provaId = `enem-${ano}`;
  console.log(`\n=== ENEM ${ano} ===`);

  /* Baixa uma vez por idioma oferecido. Sem o parâmetro, a API entrega só um
     dos dois nas posições 1 a 5 — e o ENEM moderno aplica inglês E espanhol
     ali, com a pessoa escolhendo qual fazer. Sem as duas passadas, metade dos
     candidatos ficaria sem a prova de língua que escolheu.

     Quais idiomas existem vem do catálogo, não de um chute: as edições mais
     antigas não têm a escolha, e pedir `language=ingles` nelas devolve 400 e
     derruba a importação do ano inteiro. Lista vazia = uma passada só, sem o
     parâmetro. */
  const porChave = new Map();
  const passo = 50;
  const passadas = idiomasDaProva.length > 0 ? idiomasDaProva : [null];
  /* Quanto a API DIZ que a prova tem. Guardado para conferir contra o que
     ela de fato entregou — ver o aviso logo depois do laco. */
  let totalDeclarado = null;

  for (const idioma of passadas) {
    let offset = 0;
    for (;;) {
      const pagina = await buscaJson(
        `${API}/exams/${ano}/questions?limit=${passo}&offset=${offset}` +
          (idioma ? `&language=${idioma}` : "")
      );
      const lote = pagina.questions ?? [];
      if (typeof pagina.metadata?.total === "number") {
        totalDeclarado = Math.max(totalDeclarado ?? 0, pagina.metadata.total);
      }

      /* A paginação da API repete a questão da borda: com limit=50, as de
         número 50, 100 e 150 voltam em duas páginas. Chavear por
         (número, idioma) resolve na entrada — sem isso, o upsert recebe duas
         linhas com a mesma chave no mesmo lote e o Postgres recusa o bloco
         inteiro com "ON CONFLICT DO UPDATE command cannot affect row a second
         time". */
      for (const q of lote) {
        const chave = `${q.index}|${q.language ?? ""}`;
        if (!porChave.has(chave)) porChave.set(chave, q);
      }

      process.stdout.write(`\r   baixando… ${porChave.size} questões`);
      if (!pagina.metadata?.hasMore || lote.length === 0) break;
      offset += passo;
    }
  }
  process.stdout.write("\n");

  const questoes = [...porChave.values()];

  /* A API declara um total em `metadata.total` e as vezes serve menos que
     isso: ha questao que ela conta e nao devolve em offset nenhum — a 145
     de 2015 e uma delas, some em qualquer paginacao e nao existe no
     endpoint individual. Isso nao e defeito daqui, mas ficar calado sobre a
     diferenca e: o site anunciaria "ENEM 2015" com uma questao a menos sem
     ninguem saber. Entao a importacao avisa, e diz o que ficou faltando. */
  if (totalDeclarado !== null && questoes.length < totalDeclarado) {
    const faltam = totalDeclarado - questoes.length;
    const presentes = new Set(questoes.map((q) => q.index));
    const maior = Math.max(...presentes);
    const buracos = [];
    for (let n = 1; n <= maior; n++) if (!presentes.has(n)) buracos.push(n);
    console.log(
      `   AVISO: a API declara ${totalDeclarado} questoes e entregou ${questoes.length}.` +
        ` ${faltam} nao vieram em nenhuma pagina.` +
        (buracos.length
          ? ` Numeros ausentes na sequencia: ${buracos.join(", ")}.`
          : ` A diferenca esta nas questoes de lingua estrangeira.`)
    );
  }

  const linhas = [];
  for (const q of questoes) {
    const linha = converte(q, provaId);
    if (!linha) continue;

    if (espelharImagens) {
      linha.imagens = await Promise.all(linha.imagens.map(espelha));
      linha.opcoes_imagens = await Promise.all(
        linha.opcoes_imagens.map((f) => (f ? espelha(f) : ""))
      );
      // O enunciado vem em Markdown e repete a URL da figura dentro dele.
      for (const [de, para] of espelhadas) {
        if (linha.enunciado.includes(de)) {
          linha.enunciado = linha.enunciado.split(de).join(para);
        }
      }
    }
    linhas.push(linha);
  }

  const descartadas = questoes.length - linhas.length;
  if (descartadas > 0) {
    console.log(`   ${descartadas} questão(ões) sem gabarito ou sem enunciado — fora`);
  }

  const { error: erroProva } = await supabase.from("provas").upsert(
    {
      id: provaId,
      banca: "ENEM",
      nome: `ENEM ${ano}`,
      ano,
      total_questoes: linhas.length,
      tempo_minutos: TEMPO_MINUTOS,
      fonte_url: FONTE,
    },
    { onConflict: "id" }
  );
  if (erroProva) {
    console.error("   falhou ao gravar a prova:", erroProva.message);
    return 0;
  }

  // Em blocos: 180 linhas com enunciado longo e Markdown passam do limite
  // confortável de uma requisição só.
  let gravadas = 0;
  for (let i = 0; i < linhas.length; i += 40) {
    const bloco = linhas.slice(i, i + 40);
    const { error } = await supabase
      .from("questoes")
      .upsert(bloco, { onConflict: "prova_id,numero,idioma" });

    if (error) {
      console.error(`   falhou no bloco ${i}:`, error.message);
      return gravadas;
    }
    gravadas += bloco.length;
    process.stdout.write(`\r   gravando… ${gravadas}/${linhas.length}`);
  }
  process.stdout.write("\n");
  console.log(`   ${gravadas} questões no banco.`);
  return gravadas;
}

// --- execução -------------------------------------------------------------
const catalogo = await buscaJson(`${API}/exams`);
const disponiveis = catalogo.map((e) => e.year).sort((a, b) => b - a);

/** Idiomas que cada edição oferece, direto do catálogo. */
const idiomasPorAno = new Map(
  catalogo.map((e) => [
    e.year,
    (e.languages ?? []).map((l) => l.value).filter(Boolean),
  ])
);

const anos = anosPedidos.length
  ? anosPedidos.filter((a) => {
      if (disponiveis.includes(a)) return true;
      console.log(`ENEM ${a} não existe na API — pulando.`);
      return false;
    })
  : disponiveis;

if (anos.length === 0) {
  console.log("Nenhum ano para importar.");
  process.exit(0);
}

console.log(
  `Importando ${anos.length} prova(s): ${anos.join(", ")}` +
    (espelharImagens ? "\nEspelhando as figuras — isso demora." : "")
);

if (espelharImagens) await preparaBalde();

/* Um ano que falha não derruba os outros: a API é gratuita e às vezes recusa,
   e perder as 14 provas restantes por causa da 15ª seria absurdo. */
let total = 0;
for (const ano of anos) {
  try {
    total += await importaAno(ano, idiomasPorAno.get(ano) ?? []);
  } catch (erro) {
    console.error(`   ENEM ${ano} falhou: ${erro.message}`);
  }
}

const { count } = await supabase
  .from("questoes")
  .select("*", { count: "exact", head: true })
  .eq("origem", "enem");

console.log(
  `\nPronto. ${total} questões gravadas nesta rodada; ${count} questões do ENEM no banco.\n`
);
