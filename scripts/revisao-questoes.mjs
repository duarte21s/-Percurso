/* =========================================================================
   Percurso — estado de revisão das questões de supabase/seed-data/questoes/

   Responde, para cada questão de um arquivo de gerado/, uma pergunta só:
   ela pode ir para o banco? Este módulo não abre rede nem lê variável de
   ambiente; só lê arquivos. O seed usa o veredito antes de qualquer conexão.

   Uma questão fica RETIDA quando ocorre qualquer uma destas coisas, e só sai
   dela com um registro de revisão que a marque como aprovada ou corrigida:

     1. o relatório do arquivo (gerado/_relatorios/<arquivo>.json) a lista em
        `revisao_independente_pendente`;
     2. o cabeçalho do arquivo diz "NÃO revisado";
     3. o registro de revisão (gerado/_revisao/<arquivo>.json) a marca como
        "pendente" (é como entram as questões antigas, que não têm relatório).

   O registro de revisão tem esta forma:

     {
       "arquivo": "informatica__fundamentos.mjs",
       "questoes": {
         "7": { "status": "aprovada" | "corrigida" | "pendente",
                "metodo": ["codigo" | "fonte" | "revisor-cego" | ...],
                "nota": "texto livre" }
       }
     }

   "aprovada" e "corrigida" liberam. Só deve haver esses dois status quando
   existe prova além da concordância entre dois revisores (ver
   CONTINUAR-MATERIAS-POR-OBJETIVO.md, seção de revisão).
   ========================================================================= */

import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const LIBERAM = new Set(["aprovada", "corrigida"]);

function leJson(caminho) {
  if (!existsSync(caminho)) return null;
  try {
    return JSON.parse(readFileSync(caminho, "utf8").replace(/^﻿/, ""));
  } catch (e) {
    throw new Error(`JSON inválido em ${caminho}: ${e.message}`);
  }
}

/** O cabeçalho é o primeiro comentário de bloco do arquivo. */
function cabecalhoDiz(texto, marca) {
  const m = texto.replace(/\r\n?/g, "\n").match(/^\s*\/\*[\s\S]*?\*\//);
  return m ? marca.test(m[0]) : false;
}

/**
 * Estado de revisão de um arquivo de gerado/.
 * @param {string} pastaGerado caminho da pasta gerado/
 * @param {string} nome nome do arquivo, ex.: "informatica__fundamentos.mjs"
 */
export function estadoDoArquivo(pastaGerado, nome) {
  const base = nome.replace(/\.mjs$/, "");
  const texto = readFileSync(join(pastaGerado, nome), "utf8");
  const relatorio = leJson(join(pastaGerado, "_relatorios", `${base}.json`));
  const registro = leJson(join(pastaGerado, "_revisao", `${base}.json`));
  return {
    nome,
    naoRevisadoNoCabecalho: cabecalhoDiz(texto, /N[ÃA]O revisad/i),
    pendentesNoRelatorio: new Set(relatorio?.revisao_independente_pendente ?? []),
    registro: registro?.questoes ?? {},
    temRelatorio: relatorio !== null,
    temRegistro: registro !== null,
  };
}

/**
 * Veredito para a questão de número `n` (1 = primeira do arquivo).
 * @returns {{ liberada: boolean, motivo: string | null }}
 */
export function veredito(estado, n) {
  const status = estado.registro[String(n)]?.status ?? null;
  if (status !== null && !["aprovada", "corrigida", "pendente"].includes(status)) {
    return { liberada: false, motivo: `status de revisão desconhecido (${status})` };
  }
  if (LIBERAM.has(status)) return { liberada: true, motivo: null };
  if (status === "pendente") return { liberada: false, motivo: "revisão pendente (registro)" };
  if (estado.pendentesNoRelatorio.has(n)) {
    return { liberada: false, motivo: "revisão independente pendente (relatório)" };
  }
  if (estado.naoRevisadoNoCabecalho) {
    return { liberada: false, motivo: "arquivo marcado como NÃO revisado" };
  }
  return { liberada: true, motivo: null };
}

/** Arquivos .mjs de gerado/ (só o primeiro nível; _relatorios e _revisao ficam de fora). */
export function listaGerado(pastaGerado) {
  return readdirSync(pastaGerado)
    .filter((f) => f.endsWith(".mjs"))
    .sort();
}
