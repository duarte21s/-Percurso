/* =========================================================================
   Estrutura oficial de uma prova do ENEM, para a interface.

   A prova tem quatro blocos fixos de 45 questões, e o bloco define a área: a
   questão 100 de 2023 é de Ciências da Natureza porque está entre 91 e 135.
   Os dois primeiros blocos são aplicados no 1º dia, os dois últimos no 2º.

   Qual área ocupa cada bloco mudou em 2017, e por isso é deduzido da própria
   prova em vez de fixado numa tabela por ano. O marcador é seguro: as questões
   de língua estrangeira — as únicas com versão em inglês e espanhol — só
   existem no bloco de Linguagens.

   A mesma dedução roda em `scripts/estrutura-enem.mjs`, que classifica no
   banco. Aqui ela serve para agrupar a navegação e os títulos da tela.
   ========================================================================= */

import type { AreaEnem } from "@/lib/tipos";

export interface Bloco {
  indice: number;
  de: number;
  ate: number;
  area: AreaEnem;
  dia: 1 | 2;
}

const FAIXAS = [
  { indice: 0, de: 1, ate: 45 },
  { indice: 1, de: 46, ate: 90 },
  { indice: 2, de: 91, ate: 135 },
  { indice: 3, de: 136, ate: 180 },
] as const;

const TODAS: AreaEnem[] = [
  "linguagens",
  "ciencias-humanas",
  "ciencias-natureza",
  "matematica",
];

/** Em que bloco cai um número de questão. `null` fora de 1–180. */
export function blocoDoNumero(numero: number) {
  return FAIXAS.find((f) => numero >= f.de && numero <= f.ate) ?? null;
}

interface QuestaoMinima {
  numero: number;
  area: AreaEnem | null;
  idioma: string | null;
}

/**
 * Monta os quatro blocos desta prova, já com área e dia, e diz em que dia cai
 * a redação (o mesmo de Linguagens — as duas dividem a mesma prova).
 */
export function estruturaDaProva(questoes: readonly QuestaoMinima[]): {
  blocos: Bloco[];
  diaDaRedacao: 1 | 2;
} {
  const contagem = FAIXAS.map(() => ({
    areas: {} as Record<string, number>,
    temIdioma: false,
  }));

  for (const q of questoes) {
    const f = blocoDoNumero(q.numero);
    if (!f) continue;
    const alvo = contagem[f.indice];
    if (q.area) alvo.areas[q.area] = (alvo.areas[q.area] ?? 0) + 1;
    if (q.idioma) alvo.temIdioma = true;
  }

  const areas: (AreaEnem | null)[] = [null, null, null, null];
  const usadas = new Set<AreaEnem>();
  const fixa = (i: number, a: AreaEnem) => {
    areas[i] = a;
    usadas.add(a);
  };

  // Matemática fecha a prova em todos os anos.
  fixa(3, "matematica");

  // Linguagens é onde estão inglês e espanhol.
  const comIdioma = contagem.findIndex((c) => c.temIdioma);
  if (comIdioma >= 0 && !areas[comIdioma]) fixa(comIdioma, "linguagens");

  // O resto pela área predominante, do bloco mais decidido para o menos.
  contagem
    .map((c, i) => {
      const top = Object.entries(c.areas)
        .filter(([a]) => !usadas.has(a as AreaEnem))
        .sort((x, y) => y[1] - x[1])[0];
      return { i, area: top?.[0] as AreaEnem | undefined, forca: top?.[1] ?? 0 };
    })
    .filter((p) => !areas[p.i])
    .sort((a, b) => b.forca - a.forca)
    .forEach((p) => {
      if (p.area && !usadas.has(p.area)) fixa(p.i, p.area);
    });

  for (let i = 0; i < 4; i++) {
    if (!areas[i]) {
      const livre = TODAS.find((a) => !usadas.has(a));
      if (livre) fixa(i, livre);
    }
  }

  const blocos: Bloco[] = FAIXAS.map((f) => ({
    indice: f.indice,
    de: f.de,
    ate: f.ate,
    area: areas[f.indice] as AreaEnem,
    dia: (f.indice < 2 ? 1 : 2) as 1 | 2,
  }));

  return {
    blocos,
    diaDaRedacao: blocos.find((b) => b.area === "linguagens")?.dia ?? 1,
  };
}
