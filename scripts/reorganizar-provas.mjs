/* =========================================================================
   Reclassifica as questões das provas do ENEM pela área do bloco a que
   pertencem.

     node scripts/reorganizar-provas.mjs           # modo seco, não grava
     node scripts/reorganizar-provas.mjs --gravar  # aplica

   O QUE ELE FAZ
   Só corrige a coluna `area`. Nada mais é tocado: enunciado, alternativas,
   gabarito, explicação, imagens, tema, idioma, número e id continuam como
   estão. Nenhuma questão é criada, apagada, renumerada ou reordenada — a
   numeração é a da prova impressa e é a identidade da questão.

   POR QUE A ÁREA PODE SER DERIVADA
   No ENEM o bloco define a área. A questão 100 é de Ciências da Natureza nas
   provas modernas porque está entre 91 e 135, e não porque alguém leu o
   enunciado. A área que veio da API de origem erra com frequência (em 2023,
   onze questões do bloco de Natureza estavam marcadas como Humanas ou
   Matemática); o bloco não erra.

   Qual área ocupa qual bloco muda por ano — o ENEM reordenou em 2017 —, e
   isso é deduzido da própria prova em `estrutura-enem.mjs`.
   ========================================================================= */

import { readFileSync } from "fs";
import { createClient } from "@supabase/supabase-js";
import { blocoDoNumero, estruturaDaProva, NOME_CURTO } from "./estrutura-enem.mjs";

/* Espelha o `materia_cabe_na_area` do banco (supabase/temas.sql). Existe uma
   constraint que recusa gravar matéria que não pertence à área — então quando
   a área é corrigida, a matéria antiga precisa ser reavaliada aqui antes. */
const MATERIAS_DA_AREA = {
  matematica: ["matematica"],
  "ciencias-natureza": ["fisica", "quimica", "biologia"],
  "ciencias-humanas": ["historia", "filosofia"],
  linguagens: ["portugues", "ingles", "artes"],
};

const materiaCabe = (materia, area) =>
  !materia || (MATERIAS_DA_AREA[area] ?? []).includes(materia);

const GRAVAR = process.argv.includes("--gravar");

const env = Object.fromEntries(
  readFileSync(".env.local", "utf8")
    .split("\n")
    .filter((l) => l.includes("=") && !l.startsWith("#"))
    .map((l) => {
      const i = l.indexOf("=");
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
    })
);

const supabase = createClient(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.SUPABASE_SERVICE_ROLE_KEY
);

const { data: provas, error } = await supabase
  .from("provas")
  .select("id, ano")
  .order("ano");

if (error) {
  console.error("Não consegui ler as provas:", error.message);
  process.exit(1);
}

console.log(
  GRAVAR
    ? "MODO GRAVAÇÃO — as alterações serão aplicadas.\n"
    : "MODO SECO — nada será gravado. Use --gravar para aplicar.\n"
);

let totalCorrigidas = 0;
const relatorio = [];

for (const prova of provas) {
  const { data: questoes } = await supabase
    .from("questoes")
    .select("id, numero, area, idioma, materia_id, tema")
    .eq("prova_id", prova.id);

  const { blocos, diaDaRedacao } = estruturaDaProva(questoes);

  /* Quem precisa mudar de área, e para qual.
     `limpaMateria` marca o caso em que a matéria gravada pertencia à área
     errada: ela foi deduzida a partir da classificação que estamos corrigindo,
     então não é confiável. O tema vai junto, porque tema é escopado por
     matéria — manter um tema de outra matéria estragaria o filtro por
     assunto. Área correta é ganho; disciplina duvidosa é perda pequena. */
  const mudancas = [];
  for (const q of questoes) {
    const b = blocoDoNumero(q.numero);
    if (!b) continue;
    const correta = blocos[b.indice].area;
    if (q.area === correta) continue;
    mudancas.push({
      id: q.id,
      de: q.area,
      para: correta,
      limpaMateria: !materiaCabe(q.materia_id, correta),
    });
  }

  const foraDeFaixa = questoes.filter((q) => !blocoDoNumero(q.numero));
  const numeros = new Set(questoes.map((q) => q.numero));
  const faltando = [];
  for (let n = 1; n <= 180; n++) if (!numeros.has(n)) faltando.push(n);

  const desenho = blocos
    .map((b) => `${b.de}-${b.ate} ${NOME_CURTO[b.area]}`)
    .join(" | ");

  console.log(`${prova.id}  (dia 1: blocos 1 e 2 · dia 2: blocos 3 e 4)`);
  console.log(`   ${desenho}`);
  const limpando = mudancas.filter((m) => m.limpaMateria).length;
  console.log(
    `   questões ${questoes.length} · a reclassificar ${mudancas.length}` +
      (limpando ? ` (${limpando} perdem matéria/tema incoerentes)` : "") +
      (faltando.length ? ` · faltam da fonte: ${faltando.join(", ")}` : "") +
      (foraDeFaixa.length ? ` · fora de 1-180: ${foraDeFaixa.length}` : "")
  );

  if (GRAVAR && mudancas.length) {
    /* Agrupado por (área, limpar matéria) para atualizar em lote: são poucas
       combinações, contra uma requisição por questão. */
    const grupos = {};
    for (const m of mudancas) {
      const chave = `${m.para}|${m.limpaMateria ? "limpa" : "mantem"}`;
      (grupos[chave] ??= []).push(m.id);
    }
    for (const [chave, ids] of Object.entries(grupos)) {
      const [area, modo] = chave.split("|");
      const patch =
        modo === "limpa" ? { area, materia_id: null, tema: null } : { area };
      for (let i = 0; i < ids.length; i += 100) {
        const { error: e } = await supabase
          .from("questoes")
          .update(patch)
          .in("id", ids.slice(i, i + 100));
        if (e) {
          console.error(`   ERRO ao gravar (${area}): ${e.message}`);
          process.exit(1);
        }
      }
    }
    console.log(`   gravado.`);
  }

  totalCorrigidas += mudancas.length;
  relatorio.push({
    prova: prova.id,
    total: questoes.length,
    corrigidas: mudancas.length,
    faltando,
    diaDaRedacao,
  });
  console.log("");
}

console.log("=".repeat(60));
console.log(`Questões a reclassificar no total: ${totalCorrigidas}`);
const incompletas = relatorio.filter((r) => r.faltando.length);
if (incompletas.length) {
  console.log(
    `\nProvas incompletas na origem (a API do ENEM não devolve estas questões):`
  );
  for (const r of incompletas) {
    console.log(`  ${r.prova}: faltam ${r.faltando.length} — ${r.faltando.join(", ")}`);
  }
}
if (!GRAVAR) console.log("\nNada foi gravado. Rode com --gravar para aplicar.");
