/* =========================================================================
   Percurso — classificação por conteúdo

   Marca `questoes.tema` (e, nas questões do ENEM, também `materia_id`) usando
   as regras léxicas de regras-temas.mjs.

   Uso:
     npm run classificar -- --seco     só relatório, não grava
     npm run classificar               grava
     npm run classificar -- fisica     só uma matéria (banco autoral)

   Por que existe: o banco tem ~2.750 questões reais do ENEM e o filtro por
   conteúdo já estava pronto em /api/simulado — só que nenhuma questão tinha
   tema, então escolher "Termoquímica" devolvia vazio. Classificar com a Claude
   custaria dinheiro; classificar por regra custa nada e é auditável.

   Idempotente: rodar de novo reavalia tudo e sobrescreve com o mesmo
   resultado. Questão que não atinge a pontuação mínima fica sem tema — e
   continua valendo pela área, como antes.
   ========================================================================= */

import { readFileSync } from "node:fs";
import { createClient } from "@supabase/supabase-js";
import {
  classifica,
  classificaMateria,
  classificaPorEstrutura,
  REGRAS,
} from "./regras-temas.mjs";

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
    "\nFaltam NEXT_PUBLIC_SUPABASE_URL e/ou SUPABASE_SERVICE_ROLE_KEY em .env.local.\n"
  );
  process.exit(1);
}

const argumentos = process.argv.slice(2);
const seco = argumentos.includes("--seco");
const materiasPedidas = argumentos.filter((a) => !a.startsWith("--"));

const db = createClient(url, serviceKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

/** PostgREST devolve no máximo 1.000 linhas por vez. */
async function leTudo() {
  const PAGINA = 1000;
  const tudo = [];
  for (let inicio = 0; ; inicio += PAGINA) {
    /* `tema_manual` fica de fora da classificação inteira: questão escrita à
       mão já veio com o conteúdo certo, e regravá-la seria desfazer trabalho
       humano com uma heurística. */
    const { data, error } = await db
      .from("questoes")
      .select("id, materia_id, area, idioma, prova_id, enunciado, opcoes")
      .eq("tema_manual", false)
      .order("id", { ascending: true })
      .range(inicio, inicio + PAGINA - 1);

    if (error) throw new Error(error.message);
    if (!data || data.length === 0) break;
    tudo.push(...data);
    if (data.length < PAGINA) break;
  }
  return tudo;
}

/* As alternativas carregam boa parte do vocabulário técnico — numa questão de
   Química, o enunciado às vezes é só um texto de jornal e são as opções que
   dizem "entalpia". Ignorá-las jogaria fora o melhor sinal. */
function textoDaQuestao(q) {
  const opcoes = Array.isArray(q.opcoes) ? q.opcoes.join("\n") : "";
  return `${q.enunciado}\n${opcoes}`;
}

async function principal() {
  const { error: erroColuna } = await db
    .from("questoes")
    .select("tema_manual")
    .limit(1);
  if (erroColuna) {
    console.error(
      "\nA coluna `tema_manual` ainda não existe.\n" +
        "Rode supabase/temas.sql no SQL Editor do Supabase e tente de novo.\n"
    );
    process.exit(1);
  }

  console.log("\nLendo o banco…");
  const questoes = await leTudo();
  console.log(`${questoes.length} questões.\n`);

  /** @type {Map<string, string[]>} chave "materia|tema" -> ids ("" = sem tema) */
  const grupos = new Map();
  let semNada = 0;
  let porLexico = 0;
  let soMateria = 0;
  let porEstrutura = 0;
  const porMateria = {};

  for (const q of questoes) {
    const texto = textoDaQuestao(q);

    // Questão do banco autoral já sabe a matéria; questão de prova, não.
    let resultado = classifica(
      texto,
      q.prova_id ? q.area : null,
      q.prova_id ? null : q.materia_id
    );

    if (resultado) {
      porLexico++;
    } else if (q.prova_id) {
      /* Camada do meio, e é ela que tira Física de 111. Quando os temas
         empatam entre si mas todos pertencem à mesma matéria, o assunto é
         ambíguo e a matéria não é. Antes essas questões caíam fora inteiras. */
      resultado = classificaMateria(texto, q.area);
      if (resultado) {
        soMateria++;
      } else {
        // Última camada: o que o vocabulário não alcança, a estrutura alcança.
        resultado = classificaPorEstrutura(q.area, q.idioma);
        if (resultado) porEstrutura++;
      }
    }

    if (!resultado) {
      semNada++;
      continue;
    }
    if (materiasPedidas.length > 0 && !materiasPedidas.includes(resultado.materia)) {
      continue;
    }

    const chave = `${resultado.materia}|${resultado.tema ?? ""}`;
    if (!grupos.has(chave)) grupos.set(chave, []);
    grupos.get(chave).push(q.id);

    porMateria[resultado.materia] = (porMateria[resultado.materia] ?? 0) + 1;
  }

  const totalTocado = porLexico + soMateria + porEstrutura;
  const pct = ((totalTocado / questoes.length) * 100).toFixed(1);
  console.log(
    `Com matéria: ${totalTocado} (${pct}%)\n` +
      `  matéria + tema      ${String(porLexico).padStart(5)}\n` +
      `  só matéria          ${String(soMateria).padStart(5)}  (tema ambíguo, matéria certa)\n` +
      `  pela estrutura      ${String(porEstrutura).padStart(5)}\n` +
      `  intocadas           ${String(semNada).padStart(5)}\n`
  );

  for (const materia of Object.keys(REGRAS)) {
    const total = porMateria[materia] ?? 0;
    const temas = [...grupos.keys()].filter(
      (c) => c.startsWith(`${materia}|`) && !c.endsWith("|")
    );
    const soltas = grupos.get(`${materia}|`)?.length ?? 0;
    console.log(
      `  ${materia.padEnd(12)} ${String(total).padStart(4)} questões em ${String(temas.length).padStart(2)}/15 temas` +
        (soltas ? `  (${soltas} sem tema)` : "")
    );
  }

  // Os temas vazios são o mapa do que falta escrever à mão.
  const vazios = [];
  for (const [materia, temas] of Object.entries(REGRAS)) {
    for (const tema of Object.keys(temas)) {
      if (!grupos.has(`${materia}|${tema}`)) vazios.push(`${materia} · ${tema}`);
    }
  }
  if (vazios.length > 0) {
    console.log(`\n${vazios.length} temas seguem sem nenhuma questão:`);
    for (const v of vazios) console.log(`  · ${v}`);
  }

  if (seco) {
    console.log("\n--seco: nada foi gravado.\n");
    return;
  }

  /* Limpa antes de gravar. Sem isso, uma regra que ficou mais rigorosa
     deixaria para trás a classificação antiga — o script precisa poder
     corrigir o próprio erro. */
  console.log("\nLimpando a classificação anterior…");
  const { error: erroLimpeza } = await db
    .from("questoes")
    .update({ tema: null })
    .eq("tema_manual", false)
    .not("tema", "is", null);
  if (erroLimpeza) throw new Error(erroLimpeza.message);

  console.log(`Gravando ${grupos.size} grupos…`);
  let gravadas = 0;

  for (const [chave, ids] of grupos) {
    const [materia, temaBruto] = chave.split("|");
    // Área de Matemática entra só com a matéria: o assunto não foi
    // identificado e fingir que foi encheria os 15 filtros de lixo.
    const tema = temaBruto === "" ? null : temaBruto;

    // `.in()` com listas muito longas estoura o tamanho da URL.
    const LOTE = 100;
    for (let i = 0; i < ids.length; i += LOTE) {
      const fatia = ids.slice(i, i + LOTE);
      const { error } = await db
        .from("questoes")
        .update({ materia_id: materia, tema })
        .in("id", fatia);

      if (error) {
        console.error(`  falhou em ${chave}: ${error.message}`);
        break;
      }
      gravadas += fatia.length;
    }
  }

  console.log(`\n${gravadas} questões marcadas.\n`);
}

principal().catch((e) => {
  console.error("\n" + (e?.message ?? e) + "\n");
  process.exit(1);
});
