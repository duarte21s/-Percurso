/* =========================================================================
   Percurso — validador de um arquivo de questões

   Uso:  node scripts/checar-questoes.mjs supabase/seed-data/questoes/gerado/x.mjs

   Existe para que quem escreve um arquivo consiga conferir o próprio trabalho
   sem precisar de banco nem de chave. Aplica as mesmas regras que
   seed-questoes.mjs aplica no lote inteiro, e ainda avisa sobre o que o
   validador do seed deixa passar mas estraga a prova: gabarito sempre na
   mesma letra, alternativa que entrega a resposta pelo tamanho, enunciado
   que depende de uma figura que não existe.

   Sai com código 1 se houver erro — dá para encadear em script.
   ========================================================================= */

import { pathToFileURL } from "node:url";
import { resolve } from "node:path";
import { REGRAS } from "./regras-temas.mjs";

const alvo = process.argv[2];
if (!alvo) {
  console.error("Informe o caminho do arquivo .mjs.");
  process.exit(1);
}

const DIFICULDADES = new Set(["facil", "media", "dificil"]);

/* Enunciado que manda olhar algo que não está escrito. Como as questões aqui
   são só texto, qualquer referência a figura deixa a questão insolúvel. */
const PEDE_IMAGEM =
  /\b(a|na|o|no)\s+(figura|imagem|gr[áa]fico|tabela|charge|tirinha|mapa|esquema|ilustra[çc][ãa]o|f[óo]rmula estrutural)\s+(acima|abaixo|a seguir|ao lado|apresentad|mostrad)/i;
const PEDE_IMAGEM_2 = /\b(observe|analise|considere)\s+(a|o)\s+(figura|imagem|gr[áa]fico|tabela|esquema)\b/i;

const erros = [];
const avisos = [];

const mod = await import(pathToFileURL(resolve(alvo)).href).catch((e) => {
  console.error(`\nO arquivo não carrega como módulo JS:\n  ${e.message}\n`);
  process.exit(1);
});

const questoes = mod.questoes;
if (!Array.isArray(questoes)) {
  console.error("\nO arquivo precisa exportar `questoes` como array.\n");
  process.exit(1);
}

const porIndice = [0, 0, 0, 0, 0];
const porDificuldade = {};
const enunciados = new Set();

questoes.forEach((q, i) => {
  const onde = `[${i}]`;

  if (!REGRAS[q.materia]) {
    erros.push(`${onde} matéria desconhecida: ${JSON.stringify(q.materia)}`);
  } else if (!REGRAS[q.materia][q.tema]) {
    erros.push(
      `${onde} tema não existe em ${q.materia}: ${JSON.stringify(q.tema)}\n` +
        `      esperado um de: ${Object.keys(REGRAS[q.materia]).slice(0, 3).join(" | ")} …`
    );
  }

  if (typeof q.enunciado !== "string" || q.enunciado.trim().length < 40) {
    erros.push(`${onde} enunciado curto demais ou ausente`);
  } else {
    const chave = q.enunciado.trim();
    if (enunciados.has(chave)) erros.push(`${onde} enunciado repetido dentro do arquivo`);
    enunciados.add(chave);

    if (PEDE_IMAGEM.test(q.enunciado) || PEDE_IMAGEM_2.test(q.enunciado)) {
      erros.push(
        `${onde} o enunciado manda olhar uma figura/gráfico/tabela que não existe — ` +
          `estas questões são só texto, então os dados precisam estar escritos`
      );
    }
  }

  if (!Array.isArray(q.opcoes) || q.opcoes.length !== 5) {
    erros.push(`${onde} são necessárias exatamente 5 alternativas`);
  } else {
    if (new Set(q.opcoes.map((o) => String(o).trim())).size !== 5) {
      erros.push(`${onde} há alternativas repetidas`);
    }
    if (q.opcoes.some((o) => typeof o !== "string" || o.trim().length === 0)) {
      erros.push(`${onde} há alternativa vazia ou que não é texto`);
    }
  }

  if (!Number.isInteger(q.correta) || q.correta < 0 || q.correta > 4) {
    erros.push(`${onde} \`correta\` precisa ser um inteiro de 0 a 4`);
  } else {
    porIndice[q.correta]++;
  }

  if (typeof q.explicacao !== "string" || q.explicacao.trim().length < 40) {
    erros.push(`${onde} explicação curta demais ou ausente`);
  }

  if (q.dificuldade && !DIFICULDADES.has(q.dificuldade)) {
    erros.push(`${onde} dificuldade inválida: ${JSON.stringify(q.dificuldade)}`);
  }
  porDificuldade[q.dificuldade ?? "media"] =
    (porDificuldade[q.dificuldade ?? "media"] ?? 0) + 1;

  /* A alternativa certa ser sistematicamente a mais longa é o vazamento mais
     comum em questão escrita às pressas: dá para acertar sem saber o assunto,
     só medindo. */
  if (Array.isArray(q.opcoes) && q.opcoes.length === 5 && Number.isInteger(q.correta)) {
    const tamanhos = q.opcoes.map((o) => String(o).length);
    const daCerta = tamanhos[q.correta];
    const maior = Math.max(...tamanhos);
    const segundoMaior = [...tamanhos].sort((a, b) => b - a)[1];
    if (daCerta === maior && maior > segundoMaior * 1.6 && maior > 40) {
      avisos.push(`${onde} a alternativa correta é bem mais longa que as outras`);
    }
  }
});

// --- distribuição do gabarito -------------------------------------------
if (questoes.length >= 10) {
  const esperado = questoes.length / 5;
  const semUso = porIndice.filter((n) => n === 0).length;
  if (semUso > 0) {
    avisos.push(
      `o gabarito nunca cai em ${semUso} das 5 posições (distribuição ${porIndice.join("/")})`
    );
  }
  const pico = Math.max(...porIndice);
  if (pico > esperado * 2) {
    avisos.push(
      `o gabarito se concentra numa posição (distribuição ${porIndice.join("/")})`
    );
  }
}

// --- relatório -----------------------------------------------------------
console.log(`\n${alvo}`);
console.log(`${questoes.length} questões`);
console.log(`gabarito por posição A-E: ${porIndice.join(" / ")}`);
console.log(
  `dificuldade: ${Object.entries(porDificuldade).map(([k, v]) => `${k} ${v}`).join(" · ")}`
);

if (avisos.length > 0) {
  console.log(`\n${avisos.length} aviso(s) — não bloqueiam, mas valem revisão:`);
  for (const a of avisos) console.log(`  ! ${a}`);
}

if (erros.length > 0) {
  console.log(`\n${erros.length} ERRO(S):`);
  for (const e of erros) console.log(`  × ${e}`);
  console.log("");
  process.exit(1);
}

console.log("\nOK: o arquivo passa em todas as regras do seed.\n");
