/* =========================================================================
   Caça os vícios de redação de questão nos arquivos de seed.

   Existe porque uma medição nas 6.400 questões já geradas encontrou quatro
   padrões que tornam a questão respondível sem saber a matéria:

     21,1%  enunciado terminando em "...é relevante para compreender como:",
            seguido de uma alternativa correta que só repete o enunciado
     14,0%  distrator absurdo ("não tem qualquer relação com", "são
            exatamente idênticas") — elimina-se sem ler o enunciado
     11,2%  enunciado citando "outra questão" / "a questão anterior", o que
            vazou do processo de geração para dentro do texto
     44,9%  explicação com menos de 320 caracteres, quase sempre uma
            paráfrase da alternativa certa em vez de uma resolução

   Uma quinta suspeita foi medida e DESCARTADA: "a alternativa certa é sempre
   a mais longa" deu 19,3%, e com cinco alternativas o acaso é 20%. Não é
   vício, e por isso não é checado aqui.

   Uso:
     node scripts/checar-qualidade.mjs                    todos os arquivos
     node scripts/checar-qualidade.mjs raciocinio-logico  só os que casarem
     node scripts/checar-qualidade.mjs --resumo           só os totais

   Sai com código 1 se achar algum problema, para poder entrar num hook.
   ========================================================================= */

import { readdirSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const PASTA = fileURLToPath(
  new URL("../supabase/seed-data/questoes/gerado/", import.meta.url)
);

/* O vício é o enunciado TERMINAR na fórmula, deixando a pergunta em aberto
   para que a alternativa certa a complete repetindo o que já foi dito. Conter
   as palavras não é problema: "Qual regra de inferência permite concluir que o
   atendimento será suspenso?" é pergunta concreta e legítima. Por isso o
   casamento é ancorado no fim da string, tolerando só dois-pontos, reticências
   ou espaço depois. */
const FORMULAS = [
  "é relevante para compreender como",
  "é correto afirmar que",
  "permite concluir que",
  "evidencia que",
  "é possível afirmar que",
  "pode-se concluir que",
];

const terminaEmFormula = (enun) => {
  const fim = enun.trimEnd().replace(/[:.…\s]+$/u, "").toLowerCase();
  return FORMULAS.find((f) => fim.endsWith(f));
};

const ABSURDOS =
  /não tem qualquer|não guarda qualquer|exatamente idêntic|sem qualquer (diferença|relação|vínculo)|em nada se relaciona|é totalmente irrelevante/i;

const VAZAMENTO =
  /outra questão|questão anterior|já discutid|como visto acima|conforme a questão/i;

const MIN_EXPLICACAO = 320;

const argv = process.argv.slice(2);
const soResumo = argv.includes("--resumo");
const filtros = argv.filter((a) => !a.startsWith("--"));

const arquivos = readdirSync(PASTA)
  .filter((f) => f.endsWith(".mjs"))
  .filter((f) => filtros.length === 0 || filtros.some((p) => f.includes(p)));

if (arquivos.length === 0) {
  console.error("Nenhum arquivo casou com o filtro.");
  process.exit(1);
}

const total = { questoes: 0, formula: 0, absurdo: 0, vazamento: 0, curta: 0 };
const porArquivo = [];

for (const nome of arquivos) {
  const texto = readFileSync(join(PASTA, nome), "utf8");

  /* Importar o módulo seria mais robusto que regex, mas isto precisa rodar
     sobre arquivo recém-escrito que talvez nem seja válido ainda — o objetivo
     é achar problema, não explodir no primeiro erro de sintaxe. */
  const blocos = texto.split(/\n  \{\n/).slice(1);
  const achados = [];

  blocos.forEach((b, i) => {
    total.questoes++;
    const num = i + 1;

    const mEnun = b.match(/enunciado:\s*\n?\s*"((?:[^"\\]|\\.)*)"/s);
    const enun = mEnun ? mEnun[1] : "";

    const formula = terminaEmFormula(enun);
    if (formula) {
      total.formula++;
      achados.push(`  q${num}: enunciado termina em "...${formula}"`);
    }

    if (VAZAMENTO.test(enun)) {
      total.vazamento++;
      achados.push(`  q${num}: enunciado cita outra questão`);
    }

    const mCorreta = b.match(/correta:\s*(\d+)/);
    const opcoes = [...b.matchAll(/^      "((?:[^"\\]|\\.)*)",?$/gm)].map(
      (m) => m[1]
    );
    if (mCorreta && opcoes.length) {
      const iCerta = Number(mCorreta[1]);
      const ruim = opcoes.findIndex((o, j) => j !== iCerta && ABSURDOS.test(o));
      if (ruim >= 0) {
        total.absurdo++;
        achados.push(
          `  q${num}: distrator ${ruim + 1} se elimina sozinho — "${opcoes[ruim].slice(0, 55)}…"`
        );
      }
    }

    const mExp = b.match(/explicacao:\s*\n?\s*"((?:[^"\\]|\\.)*)"/s);
    if (mExp && mExp[1].length < MIN_EXPLICACAO) {
      total.curta++;
      achados.push(
        `  q${num}: explicação com ${mExp[1].length} caracteres (mínimo ${MIN_EXPLICACAO})`
      );
    }
  });

  if (achados.length > 0) porArquivo.push({ nome, achados });
}

if (!soResumo) {
  for (const { nome, achados } of porArquivo) {
    console.log(`\n${nome}`);
    for (const a of achados.slice(0, 12)) console.log(a);
    if (achados.length > 12) {
      console.log(`  … e mais ${achados.length - 12} neste arquivo`);
    }
  }
}

const pct = (n) =>
  total.questoes ? ` (${((n / total.questoes) * 100).toFixed(1)}%)` : "";

console.log(
  `\n${arquivos.length} arquivo(s), ${total.questoes} questões:\n` +
    `  fórmula genérica no fim do enunciado : ${total.formula}${pct(total.formula)}\n` +
    `  distrator que se elimina sozinho     : ${total.absurdo}${pct(total.absurdo)}\n` +
    `  enunciado citando outra questão      : ${total.vazamento}${pct(total.vazamento)}\n` +
    `  explicação curta demais              : ${total.curta}${pct(total.curta)}`
);

const problemas =
  total.formula + total.absurdo + total.vazamento + total.curta;
if (problemas > 0) {
  console.log(`\n${problemas} problema(s). Nada foi alterado — corrija na fonte.`);
  process.exit(1);
}
console.log("\nSem problemas.");
