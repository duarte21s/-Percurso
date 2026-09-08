/* =========================================================================
   Estrutura oficial de uma prova do ENEM.

   A prova é dividida em quatro blocos fixos de 45 questões. O bloco define a
   área: a questão 100 de 2023 É de Ciências da Natureza porque está no bloco
   91–135, não porque um classificador achou isso. Por isso a área é derivada
   do número, e não adivinhada pelo enunciado.

   O que muda entre os anos é QUAL área ocupa cada bloco, e em que dia ela é
   aplicada. O ENEM reordenou isso em 2017.

   Como cada prova é identificada sem depender de memória histórica:

     1. Matemática é sempre o último bloco (136–180). Confirmado nas 15 provas.
     2. Linguagens é o bloco que contém as questões de língua estrangeira —
        as únicas que existem em duas versões, inglês e espanhol. Esse é um
        marcador do próprio dado, não um palpite.
     3. Sobram dois blocos para Humanas e Natureza, decididos pela área
        predominante já registrada em cada um.

   Provas sem questão de idioma marcada (2009 e 2011 no banco atual) caem no
   passo 3 para os três blocos restantes.
   ========================================================================= */

/** Os quatro blocos, sempre nas mesmas posições. */
export const BLOCOS = [
  { indice: 0, de: 1, ate: 45 },
  { indice: 1, de: 46, ate: 90 },
  { indice: 2, de: 91, ate: 135 },
  { indice: 3, de: 136, ate: 180 },
];

export const NOME_DA_AREA = {
  linguagens: "Linguagens, Códigos e suas Tecnologias",
  "ciencias-humanas": "Ciências Humanas e suas Tecnologias",
  "ciencias-natureza": "Ciências da Natureza e suas Tecnologias",
  matematica: "Matemática e suas Tecnologias",
};

export const NOME_CURTO = {
  linguagens: "Linguagens",
  "ciencias-humanas": "Ciências Humanas",
  "ciencias-natureza": "Ciências da Natureza",
  matematica: "Matemática",
};

/** Em que bloco cai um número de questão. `null` fora de 1–180. */
export function blocoDoNumero(numero) {
  return BLOCOS.find((b) => numero >= b.de && numero <= b.ate) ?? null;
}

/**
 * Descobre qual área ocupa cada bloco desta prova, a partir das próprias
 * questões. Devolve um array de 4 áreas, na ordem dos blocos.
 */
export function deduzAreasDosBlocos(questoes) {
  const porBloco = BLOCOS.map(() => ({ contagem: {}, temIdioma: false }));

  for (const q of questoes) {
    const b = blocoDoNumero(q.numero);
    if (!b) continue;
    const alvo = porBloco[b.indice];
    if (q.area) alvo.contagem[q.area] = (alvo.contagem[q.area] ?? 0) + 1;
    if (q.idioma) alvo.temIdioma = true;
  }

  const areas = [null, null, null, null];
  const usadas = new Set();
  const fixa = (i, area) => {
    areas[i] = area;
    usadas.add(area);
  };

  // 1. Matemática fecha a prova, em todos os anos.
  fixa(3, "matematica");

  // 2. Linguagens é onde estão inglês e espanhol.
  const comIdioma = porBloco.findIndex((b) => b.temIdioma);
  if (comIdioma >= 0 && !areas[comIdioma]) fixa(comIdioma, "linguagens");

  // 3. O resto vai pela área predominante que já está gravada, do bloco mais
  //    decidido para o menos — assim um bloco quase unânime não perde a vaga
  //    para outro que só tinha maioria simples.
  const pendentes = porBloco
    .map((b, i) => {
      const top = Object.entries(b.contagem)
        .filter(([a]) => !usadas.has(a))
        .sort((x, y) => y[1] - x[1])[0];
      return { i, area: top?.[0] ?? null, forca: top?.[1] ?? 0 };
    })
    .filter((p) => !areas[p.i])
    .sort((a, b) => b.forca - a.forca);

  for (const p of pendentes) {
    if (p.area && !usadas.has(p.area)) fixa(p.i, p.area);
  }

  // Sobrou bloco sem área: recebe a que ainda não foi usada.
  const todas = ["linguagens", "ciencias-humanas", "ciencias-natureza", "matematica"];
  for (let i = 0; i < 4; i++) {
    if (!areas[i]) {
      const livre = todas.find((a) => !usadas.has(a));
      if (livre) fixa(i, livre);
    }
  }

  return areas;
}

/**
 * Monta a estrutura completa da prova: os dois dias, com seus blocos.
 *
 * O dia sai da posição da área, e não de uma tabela por ano: os dois
 * primeiros blocos são o 1º dia, os dois últimos o 2º. A redação acompanha o
 * dia em que Linguagens é aplicada — é assim no exame real, porque as duas
 * dividem a mesma prova.
 */
export function estruturaDaProva(questoes) {
  const areas = deduzAreasDosBlocos(questoes);
  const blocos = BLOCOS.map((b) => ({
    ...b,
    area: areas[b.indice],
    dia: b.indice < 2 ? 1 : 2,
  }));
  const diaDaRedacao =
    blocos.find((b) => b.area === "linguagens")?.dia ?? 1;
  return { blocos, diaDaRedacao };
}
