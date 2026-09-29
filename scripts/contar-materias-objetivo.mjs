/* =========================================================================
   Percurso — quantas questões cada conteúdo das 8 matérias por objetivo tem

   Uso:
     node scripts/contar-materias-objetivo.mjs            tabela por matéria
     node scripts/contar-materias-objetivo.mjs --temas    e por conteúdo
     node scripts/contar-materias-objetivo.mjs --json     grava o registro em
                                                          gerado/_relatorios/

   É o registro de continuidade da meta de CONTINUAR-MATERIAS-POR-OBJETIVO.md:
   50 questões por conteúdo, 750 por matéria, 6.000 nos 120 conteúdos. Conta
   dos arquivos em supabase/seed-data/questoes/gerado/, que são a fonte do
   que vai para o banco, importando cada módulo — não por regex, para contar o
   que o seed de fato leria.

   Questão cujo par (matéria, tema) não existe no catálogo é listada à parte:
   o seed a recusaria, então ela não conta para a meta.
   ========================================================================= */

import { readdirSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { join } from "node:path";
import { CATALOGO } from "./catalogo-temas.mjs";

export const MATERIAS_OBJETIVO = [
  "raciocinio-logico",
  "informatica",
  "portugues-banca",
  "exatas-militar",
  "calculo",
  "estatistica",
  "matematica-fund",
  "portugues-fund",
];
export const META_POR_TEMA = 50;

const PASTA = fileURLToPath(new URL("../supabase/seed-data/questoes/gerado/", import.meta.url));

export async function contar() {
  const porTema = {};
  for (const m of MATERIAS_OBJETIVO) {
    porTema[m] = {};
    for (const t of CATALOGO[m] ?? []) porTema[m][t] = { questoes: 0, arquivos: [] };
  }
  const foraDoCatalogo = [];

  const arquivos = readdirSync(PASTA).filter((f) => f.endsWith(".mjs"));
  for (const nome of arquivos) {
    const materiaDoNome = nome.split("__")[0];
    if (!MATERIAS_OBJETIVO.includes(materiaDoNome)) continue;
    const { questoes } = await import(pathToFileURL(join(PASTA, nome)).href);
    for (const q of questoes ?? []) {
      const slot = porTema[q.materia]?.[q.tema];
      if (!slot) {
        foraDoCatalogo.push({ arquivo: nome, materia: q.materia, tema: q.tema });
        continue;
      }
      slot.questoes++;
      if (!slot.arquivos.includes(nome)) slot.arquivos.push(nome);
    }
  }

  const resumo = MATERIAS_OBJETIVO.map((m) => {
    const temas = Object.entries(porTema[m]);
    const questoes = temas.reduce((n, [, s]) => n + s.questoes, 0);
    const prontos = temas.filter(([, s]) => s.questoes >= META_POR_TEMA).length;
    const faltam = temas.reduce((n, [, s]) => n + Math.max(0, META_POR_TEMA - s.questoes), 0);
    return { materia: m, temas: temas.length, prontos, questoes, faltam };
  });

  return { porTema, resumo, foraDoCatalogo };
}

const executado = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];
if (executado) {
  const { porTema, resumo, foraDoCatalogo } = await contar();
  const argv = process.argv.slice(2);

  console.log("\nmatéria              conteúdos≥50   questões   faltam");
  for (const r of resumo) {
    console.log(
      `${r.materia.padEnd(20)} ${String(r.prontos).padStart(3)} de ${r.temas}      ${String(r.questoes).padStart(5)}    ${String(r.faltam).padStart(5)}`
    );
  }
  const tot = resumo.reduce(
    (a, r) => ({ prontos: a.prontos + r.prontos, temas: a.temas + r.temas, questoes: a.questoes + r.questoes, faltam: a.faltam + r.faltam }),
    { prontos: 0, temas: 0, questoes: 0, faltam: 0 }
  );
  console.log(`${"TOTAL".padEnd(20)} ${String(tot.prontos).padStart(3)} de ${tot.temas}      ${String(tot.questoes).padStart(5)}    ${String(tot.faltam).padStart(5)}`);

  if (argv.includes("--temas")) {
    for (const m of MATERIAS_OBJETIVO) {
      console.log(`\n${m}`);
      for (const [t, s] of Object.entries(porTema[m])) {
        const marca = s.questoes >= META_POR_TEMA ? "ok" : "  ";
        console.log(`  ${marca} ${String(s.questoes).padStart(3)}  ${t}`);
      }
    }
  }

  if (foraDoCatalogo.length > 0) {
    console.log(`\n${foraDoCatalogo.length} questão(ões) com (matéria, tema) fora do catálogo — o seed recusaria:`);
    for (const f of foraDoCatalogo.slice(0, 10)) console.log(`  ${f.arquivo}: ${f.materia} / ${JSON.stringify(f.tema)}`);
  }

  if (argv.includes("--json")) {
    const destino = join(PASTA, "_relatorios");
    mkdirSync(destino, { recursive: true });
    const registro = {
      meta_por_tema: META_POR_TEMA,
      resumo,
      por_tema: Object.fromEntries(
        MATERIAS_OBJETIVO.map((m) => [m, Object.fromEntries(Object.entries(porTema[m]).map(([t, s]) => [t, s.questoes]))])
      ),
      fora_do_catalogo: foraDoCatalogo.length,
    };
    writeFileSync(join(destino, "progresso-materias-objetivo.json"), JSON.stringify(registro, null, 2) + "\n");
    console.log("\nregistro gravado em gerado/_relatorios/progresso-materias-objetivo.json");
  }
}
