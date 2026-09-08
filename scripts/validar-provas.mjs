/* =========================================================================
   Validação das provas do ENEM.

     node scripts/validar-provas.mjs

   Só lê. Confere, para cada prova:
     - quantas questões existem e quantas faltam da fonte;
     - se cada bloco de 45 tem uma única área;
     - se as questões duplicadas são apenas as de língua estrangeira;
     - se nenhuma questão ficou fora de 1–180 ou sem número;
     - se as respostas já dadas por usuários continuam apontando para questões
       existentes desta prova.

   O último item é o que importa depois de mexer em classificação: a resposta
   de alguém é ligada pelo id da questão, não pelo número, então reclassificar
   não deveria soltar nenhum vínculo. Este script prova isso em vez de supor.
   ========================================================================= */

import { readFileSync } from "fs";
import { createClient } from "@supabase/supabase-js";
import { BLOCOS, blocoDoNumero, estruturaDaProva, NOME_CURTO } from "./estrutura-enem.mjs";

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

const { data: provas } = await supabase
  .from("provas")
  .select("id, ano")
  .order("ano");

let problemas = 0;
const aviso = (msg) => {
  console.log(`   ✗ ${msg}`);
  problemas++;
};

for (const prova of provas) {
  const { data: qs } = await supabase
    .from("questoes")
    .select("id, numero, area, idioma")
    .eq("prova_id", prova.id);

  const { blocos } = estruturaDaProva(qs);
  console.log(`\n${prova.id}  (${qs.length} questões)`);

  // 1. números fora de faixa ou nulos
  const semNumero = qs.filter((q) => q.numero == null);
  if (semNumero.length) aviso(`${semNumero.length} sem número`);
  const fora = qs.filter((q) => q.numero != null && !blocoDoNumero(q.numero));
  if (fora.length) aviso(`${fora.length} fora de 1–180`);

  // 2. cada bloco com uma área só
  for (const b of BLOCOS) {
    const noBloco = qs.filter((q) => blocoDoNumero(q.numero)?.indice === b.indice);
    const areas = [...new Set(noBloco.map((q) => q.area))];
    const distintos = new Set(noBloco.map((q) => q.numero)).size;
    if (areas.length > 1) {
      aviso(`bloco ${b.de}-${b.ate} tem mais de uma área: ${areas.join(", ")}`);
    } else {
      const idioma = noBloco.filter((q) => q.idioma).length;
      console.log(
        `   ✓ ${String(b.de).padStart(3)}–${String(b.ate).padEnd(3)} ` +
          `${NOME_CURTO[areas[0]] ?? "?"}`.padEnd(22) +
          `${distintos}/45 questões` +
          (idioma ? ` (+${idioma} de idioma)` : "")
      );
      if (distintos > 45) aviso(`bloco ${b.de}-${b.ate} tem ${distintos} números distintos, mais que 45`);
    }
  }

  // 3. duplicatas só podem ser de idioma
  const cont = {};
  qs.forEach((q) => (cont[q.numero] = (cont[q.numero] ?? 0) + 1));
  const dups = Object.entries(cont).filter(([, v]) => v > 1).map(([n]) => +n);
  const dupSemIdioma = dups.filter((n) =>
    qs.filter((q) => q.numero === n).some((q) => !q.idioma)
  );
  if (dupSemIdioma.length) {
    aviso(`números repetidos que não são de idioma: ${dupSemIdioma.join(", ")}`);
  }

  // 4. faltando da fonte
  const numeros = new Set(qs.map((q) => q.numero));
  const faltando = [];
  for (let n = 1; n <= 180; n++) if (!numeros.has(n)) faltando.push(n);
  if (faltando.length) {
    console.log(`   ! faltam da fonte: ${faltando.join(", ")} (a API do ENEM não devolve)`);
  }

  // 5. respostas de usuários continuam válidas
  const { data: sims } = await supabase
    .from("simulados")
    .select("id")
    .eq("prova_id", prova.id);
  if (sims?.length) {
    const ids = sims.map((s) => s.id);
    const { data: resp } = await supabase
      .from("respostas")
      .select("questao_id")
      .in("simulado_id", ids);
    const daProva = new Set(qs.map((q) => q.id));
    const orfas = (resp ?? []).filter((r) => !daProva.has(r.questao_id));
    if (orfas.length) aviso(`${orfas.length} respostas apontam para questão fora desta prova`);
    else if (resp?.length) console.log(`   ✓ ${resp.length} respostas de usuários seguem ligadas`);
  }
}

console.log("\n" + "=".repeat(60));
console.log(problemas === 0 ? "Nenhum problema encontrado." : `${problemas} problema(s).`);
process.exit(problemas === 0 ? 0 : 1);
