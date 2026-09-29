/* Rascunho — Raciocínio lógico / Sequências de letras e de figuras.

   Letras: todo enunciado declara o alfabeto de 26 letras (com K, W e Y), e a
   conferência converte as letras em posições (A = 1) para aplicar a regra e
   a bateria de ambiguidade de `_sequencias.mjs`. Figuras vêm descritas em
   texto, sem depender de imagem, e a contagem é refeita em código —
   enumerando casas, cubinhos, vértices ou pontos quando possível, em vez de
   só aplicar a fórmula da explicação. */

import { unicoV, intervalo, primo, fmt, proximo, porRecorrencia, porFormula, alternando, pos, letra } from "./_sequencias.mjs";

export const materia = "raciocinio-logico";
export const tema = "Sequências de letras e de figuras";
export const arquivo = "raciocinio-logico__sequencias-de-letras-e-de-figuras";

const proximaLetra = (seq, regra, alt) => { const p = seq.map(pos); const n = proximo(p, regra(p)); return unicoV(alt.map((l) => l === letra(n))); };
const ALFABETO = intervalo(1, 26).map(letra).join("");

export const questoes = [
  /* ---------------- letras ---------------- */
  (() => {
    const s = ["A", "C", "E", "G", "I"], alt = ["K", "J", "L", "M", "H"];
    return {
      d: "facil",
      e: `Considere o alfabeto de 26 letras (com K, W e Y). Qual letra continua a sequência ${s.join(", ")}, …?`,
      o: alt,
      x: "Cada letra avança duas posições no alfabeto: A (1ª), C (3ª), E (5ª), G (7ª), I (9ª). A próxima é a 11ª letra, K — lembrando que o alfabeto de 26 letras inclui o K.\n\nJ avança uma posição só. L e M avançam três e quatro. H volta uma posição, como se a sequência recuasse. Uma forma segura de resolver é trocar cada letra pela sua posição (A = 1, B = 2, …) e procurar o padrão nos números: 1, 3, 5, 7, 9, 11.",
      v: { i: () => proximaLetra(s, (p) => porRecorrencia(p, 1, (a) => a + 2), alt) },
    };
  })(),
  (() => {
    const s = ["Z", "X", "V", "T", "R"], alt = ["P", "Q", "O", "N", "S"];
    return {
      d: "facil",
      e: `No alfabeto de 26 letras, qual é a próxima letra da sequência ${s.join(", ")}, …?`,
      o: alt,
      x: "A sequência percorre o alfabeto de trás para a frente, pulando uma letra em cada passo: Z (26ª), X (24ª), V (22ª), T (20ª), R (18ª). A próxima é a 16ª letra, P.\n\nQ recua só uma posição, sem pular a letra do meio. O e N recuam três e quatro posições. S volta para a frente, invertendo o sentido da sequência. Em números, a sequência é 26, 24, 22, 20, 18 — e o próximo é 16.",
      v: { i: () => proximaLetra(s, (p) => porRecorrencia(p, 1, (a) => a - 2), alt) },
    };
  })(),
  (() => {
    const s = ["A", "D", "G", "J", "M"], alt = ["P", "O", "Q", "N", "S"];
    return {
      d: "facil",
      e: `Considerando as 26 letras do alfabeto, qual letra vem depois de M na sequência ${s.join(", ")}, …?`,
      o: alt,
      x: "Cada letra está três posições à frente da anterior: A (1), D (4), G (7), J (10), M (13). A próxima é a 16ª letra, P. Entre duas letras vizinhas da sequência ficam sempre duas puladas: B e C, E e F, H e I, K e L — e depois do M ficam N e O.\n\nO e N pulam menos letras do que o padrão exige. Q e S pulam letras demais. O erro mais comum é tomar o número de letras puladas (duas) como se fosse o salto (três).",
      v: { i: () => proximaLetra(s, (p) => porRecorrencia(p, 1, (a) => a + 3), alt) },
    };
  })(),
  (() => {
    const s = ["A", "C", "F", "J", "O"], alt = ["U", "T", "V", "S", "Z"];
    return {
      d: "media",
      e: `No alfabeto de 26 letras (com K, W e Y), qual letra continua a sequência ${s.join(", ")}, …?`,
      o: alt,
      x: "Os saltos entre as letras crescem de 1 em 1: de A (1) para C (3) são 2 posições; de C para F (6), 3; de F para J (10), 4; de J para O (15), 5. O próximo salto é de 6 posições, e 15 + 6 = 21, que é a letra U.\n\nT repete o salto de 5 posições. V salta 7. S salta 4, voltando a um salto que já passou. E Z salta 11, sem relação com o padrão. Converter as letras em posições (1, 3, 6, 10, 15) deixa o padrão à vista.",
      v: { i: () => proximaLetra(s, (p) => porFormula(p, (n) => (n * (n + 1)) / 2), alt) },
    };
  })(),
  (() => {
    const s = ["B", "E", "J", "Q"], alt = ["Z", "X", "Y", "W", "V"];
    return {
      d: "media",
      e: `Considere o alfabeto de 26 letras. Qual é a letra seguinte na sequência ${s.join(", ")}, …?`,
      o: alt,
      x: "Em posições, a sequência é 2, 5, 10, 17. As diferenças são 3, 5 e 7 — números ímpares crescentes —, então a próxima é 9, e 17 + 9 = 26, a letra Z. Outra forma de ver: as posições são n² + 1 (1 + 1, 4 + 1, 9 + 1, 16 + 1), e a próxima é 25 + 1 = 26.\n\nX (24) e Y (25) somam 7 e 8 ao 17, repetindo a última diferença ou aumentando-a pouco. W (23) soma 6. V (22) soma 5, voltando atrás no padrão das diferenças.",
      v: { i: () => proximaLetra(s, (p) => porFormula(p, (n) => n * n + 1), alt) },
    };
  })(),
  (() => {
    const s = ["A", "Z", "B", "Y", "C", "X"], alt = ["D", "W", "E", "V", "C"];
    return {
      d: "media",
      e: `No alfabeto de 26 letras, qual letra completa a sequência ${s.join(", ")}, …?`,
      o: alt,
      x: "São duas sequências intercaladas. Nas posições ímpares, o alfabeto segue do começo para a frente: A, B, C. Nas pares, segue do fim para trás: Z, Y, X. A próxima letra ocupa a 7ª posição, que é ímpar, então continua a primeira sequência: depois de C vem D.\n\nW continuaria a sequência de trás para a frente, mas ela só volta na posição seguinte. E avança duas letras de uma vez. V pula uma letra na sequência de trás. E C repete a última letra da primeira sequência.",
      v: { i: () => proximaLetra(s, (p) => porFormula(p, (n) => (n % 2 === 1 ? (n + 1) / 2 : 27 - n / 2)), alt) },
    };
  })(),
  (() => {
    const s = ["Z", "Y", "W", "T", "P"], alt = ["K", "L", "J", "M", "H"];
    return {
      d: "media",
      e: `Usando o alfabeto de 26 letras (com K, W e Y), qual letra continua a sequência ${s.join(", ")}, …?`,
      o: alt,
      x: "A sequência anda para trás com recuos cada vez maiores: de Z (26) para Y (25) recua 1; para W (23), 2; para T (20), 3; para P (16), 4. O próximo recuo é de 5 posições: 16 − 5 = 11, a letra K.\n\nL (12) repete o recuo de 4. J (10) recua 6. M (13) recua 3, voltando a um recuo que já passou. E H (8) recua 8, dobrando o último recuo. Quem esquece o K no alfabeto costuma marcar J.",
      v: { i: () => proximaLetra(s, (p) => porFormula(p, (n) => 26 - ((n - 1) * n) / 2), alt) },
    };
  })(),
  (() => {
    const s = ["A", "C", "F", "H", "K", "M"], alt = ["P", "O", "Q", "N", "R"];
    return {
      d: "media",
      e: `Considere o alfabeto de 26 letras. Qual letra vem a seguir na sequência ${s.join(", ")}, …?`,
      o: alt,
      x: "Os saltos alternam entre 2 e 3 posições: A (1) → C (3), +2; C → F (6), +3; F → H (8), +2; H → K (11), +3; K → M (13), +2. O próximo salto é de 3: 13 + 3 = 16, a letra P.\n\nO (15) repete o salto de 2, quebrando a alternância. Q (17) salta 4. N (14) salta só 1. E R (18) salta 5, somando os dois saltos do ciclo. Conferência: os termos de ordem ímpar (1, 6, 11 e, agora, 16) crescem de 5 em 5.",
      v: { i: () => proximaLetra(s, (p) => alternando(p, [(a) => a + 2, (a) => a + 3]), alt) },
    };
  })(),
  (() => {
    const s = ["A", "D", "C", "F", "E", "H"], alt = ["G", "K", "I", "J", "F"];
    return {
      d: "media",
      e: `No alfabeto de 26 letras, qual é a próxima letra da sequência ${s.join(", ")}, …?`,
      o: alt,
      x: "A sequência alterna dois movimentos: avança três posições e recua uma. A (1) → D (4) → C (3) → F (6) → E (5) → H (8). O próximo movimento é recuar uma posição: depois de H vem G (7).\n\nK (11) avança três de novo, sem respeitar a alternância. I (9) avança uma. J (10) continua a subsequência das posições pares (D, F, H, J), mas a próxima letra pertence à outra subsequência (A, C, E, G). E F recua duas posições.",
      v: { i: () => proximaLetra(s, (p) => alternando(p, [(a) => a + 3, (a) => a - 1]), alt) },
    };
  })(),
  (() => {
    const s = ["A", "A", "B", "C", "E", "H", "M"], alt = ["U", "R", "T", "V", "P"];
    return {
      d: "dificil",
      e: `Troque cada letra pela sua posição no alfabeto de 26 letras (A = 1, B = 2, …). Qual letra continua a sequência ${s.join(", ")}, …?`,
      o: alt,
      x: "Em posições, a sequência é 1, 1, 2, 3, 5, 8, 13: cada número é a soma dos dois anteriores (sequência de Fibonacci). O próximo é 8 + 13 = 21, que corresponde à letra U.\n\nR (18) soma 5 ao 13, repetindo a diferença anterior. T (20) e V (22) erram a soma por uma unidade. P (16) soma apenas 3. Sem converter as letras em números, o padrão fica quase invisível — por isso a conversão é o primeiro passo em sequências de letras.",
      v: { i: () => proximaLetra(s, (p) => porRecorrencia(p, 2, (a, b) => a + b), alt) },
    };
  })(),
  (() => {
    const s = ["B", "C", "E", "G", "K", "M"], alt = ["Q", "O", "P", "S", "R"];
    return {
      d: "dificil",
      e: `Considere o alfabeto de 26 letras, com A na posição 1. Qual letra continua a sequência ${s.join(", ")}, …?`,
      o: alt,
      x: "As posições das letras são 2, 3, 5, 7, 11 e 13 — os números primos em ordem. O primo seguinte ao 13 é o 17 (14, 15 e 16 não são primos), e a 17ª letra do alfabeto é Q.\n\nO (15) e P (16) ocupam posições que não são primas: 15 = 3 × 5 e 16 = 2 × 8. R (18) também não é primo. E S (19) é primo, mas vem depois do 17 — pular o Q deixaria um primo de fora.",
      v: { i: () => proximaLetra(s, (p) => porFormula(p, (n) => intervalo(2, 100).filter(primo)[n - 1]), alt) },
    };
  })(),
  (() => {
    const s = ["S", "V", "Y", "B", "E"], alt = ["H", "G", "I", "F", "Z"];
    return {
      d: "media",
      e: `No alfabeto de 26 letras, depois do Z a contagem recomeça no A. Seguindo essa regra, qual letra continua a sequência ${s.join(", ")}, …?`,
      o: alt,
      x: "Cada letra está três posições à frente da anterior: S (19) → V (22) → Y (25). Depois do Y, três posições à frente são Z, A e B — a contagem dá a volta no alfabeto. De B (2) vai-se a E (5), e de E, três posições à frente, chega-se a H (8).\n\nG e I avançam duas e quatro posições. F avança só uma. E Z aparece para quem não aceita a volta ao começo e procura a letra depois do Y — mas a sequência já passou por B e E.",
      v: { i: () => proximaLetra(s, (p) => porRecorrencia(p, 1, (a) => pos(letra(a + 3))), alt) },
    };
  })(),
  (() => {
    const alt = ["IJ", "HI", "JK", "GI", "IK"];
    return {
      d: "facil",
      e: "Qual é o próximo grupo da sequência AB, CD, EF, GH, …, formada com as letras do alfabeto em ordem?",
      o: alt,
      x: "A sequência percorre o alfabeto em pares de letras consecutivas, sem repetir nem pular nenhuma: AB, CD, EF, GH. Depois do H vêm I e J, então o próximo grupo é IJ.\n\nHI repete o H, que já foi usado. JK pula o I. GI e IK misturam letras de grupos diferentes, sem seguir a ordem. Cada grupo começa exatamente na letra seguinte à última do grupo anterior.",
      v: { i: () => { const g = (k) => letra(2 * k - 1) + letra(2 * k); if ([1, 2, 3, 4].map(g).join(",") !== "AB,CD,EF,GH") throw new Error("grupos"); return unicoV(alt.map((x) => x === g(5))); } },
    };
  })(),
  (() => {
    const alt = ["DFH", "DEF", "EGI", "CDE", "DFG"];
    return {
      d: "media",
      e: "Na sequência de grupos ACE, BDF, CEG, …, qual é o próximo grupo?",
      o: alt,
      x: "Cada grupo tem três letras separadas por uma letra pulada (A, C, E: pula B e D). De um grupo para o seguinte, as três letras avançam uma posição: ACE → BDF → CEG. O próximo é DFH.\n\nDEF usa letras consecutivas, sem os pulos do padrão. EGI avança duas posições de uma vez. CDE repete o C e não pula letras. E DFG acerta as duas primeiras letras, mas quebra o pulo na terceira.",
      v: { i: () => { const g = (k) => letra(k) + letra(k + 2) + letra(k + 4); if ([1, 2, 3].map(g).join(",") !== "ACE,BDF,CEG") throw new Error("grupos"); return unicoV(alt.map((x) => x === g(4))); } },
    };
  })(),
  (() => {
    const alt = ["EV", "EU", "FV", "EW", "DV"];
    return {
      d: "facil",
      e: "Qual par de letras continua a sequência AZ, BY, CX, DW, …?",
      o: alt,
      x: "Em cada par, a primeira letra avança pelo alfabeto a partir do começo (A, B, C, D) e a segunda recua a partir do fim (Z, Y, X, W). O próximo par é E, a letra depois do D, com V, a letra antes do W: EV.\n\nEU recua duas posições na segunda letra. FV avança duas na primeira. EW repete o W. E DV repete o D. Como as duas letras de cada par ficam à mesma distância das pontas do alfabeto, a soma das suas posições é sempre 27 (A + Z = 1 + 26, E + V = 5 + 22).",
      v: { i: () => { const g = (k) => letra(k) + letra(27 - k); if ([1, 2, 3, 4].map(g).join(",") !== "AZ,BY,CX,DW") throw new Error("pares"); return unicoV(alt.map((x) => x === g(5))); } },
    };
  })(),
  (() => {
    const s = ["B", "C", "D", "F", "G", "H", "J"], alt = ["K", "L", "I", "M", "N"];
    return {
      d: "media",
      e: `No alfabeto de 26 letras (com K, W e Y), qual letra continua a sequência ${s.join(", ")}, …?`,
      o: alt,
      x: "A sequência lista as consoantes em ordem, pulando as vogais: B, C, D (pula o E), F, G, H (pula o I), J. A consoante depois do J é o K, que faz parte do alfabeto de 26 letras.\n\nL é a consoante depois do K — escolhê-la é esquecer que o K existe no alfabeto. I é vogal. M e N pulam consoantes. Quem enxerga uma regra de saltos (1, 1, 2, 1, 1, 2) chega ao mesmo K, porque as vogais estão justamente nos saltos de 2.",
      v: { i: () => { const consoantes = ALFABETO.split("").filter((c) => !"AEIOU".includes(c)); if (consoantes.slice(0, 7).join("") !== s.join("")) throw new Error("consoantes"); return unicoV(alt.map((l) => l === consoantes[7])); } },
    };
  })(),
  (() => {
    const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"], alt = ["S", "O", "N", "D", "A"];
    return {
      d: "facil",
      e: "Qual letra continua a sequência J, F, M, A, M, J, J, A, …?",
      o: alt,
      x: "São as iniciais dos meses do ano, em ordem: janeiro, fevereiro, março, abril, maio, junho, julho, agosto. O mês seguinte é setembro, de inicial S.\n\nO, N e D são as iniciais de outubro, novembro e dezembro — meses que vêm depois de setembro. A repete a inicial de agosto. Em sequências de letras sem padrão numérico visível, vale testar iniciais de listas conhecidas: meses, dias da semana, números por extenso.",
      v: { i: () => { const ini = meses.map((m) => m[0].toUpperCase()); if (ini.slice(0, 8).join("") !== "JFMAMJJA") throw new Error("meses"); return unicoV(alt.map((l) => l === ini[8])); } },
    };
  })(),
  (() => {
    const numeros = ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez"], alt = ["N", "D", "O", "S", "C"];
    return {
      d: "media",
      e: "Qual letra continua a sequência U, D, T, Q, C, S, S, O, …?",
      o: alt,
      x: "São as iniciais dos números por extenso: um, dois, três, quatro, cinco, seis, sete, oito. O próximo número é nove, de inicial N.\n\nD é a inicial de dez, que vem depois do nove. O repete a inicial de oito. S e C repetem iniciais que já apareceram (seis, sete, cinco). A pista está nas letras repetidas em seguida — S, S —, que correspondem a seis e sete.",
      v: { i: () => { const ini = numeros.map((m) => m[0].toUpperCase()); if (ini.slice(0, 8).join("") !== "UDTQCSSO") throw new Error("números"); return unicoV(alt.map((l) => l === ini[8])); } },
    };
  })(),
  (() => {
    const alt = ["I9", "H8", "I8", "J9", "H9"];
    return {
      d: "media",
      e: "Qual é o próximo termo da sequência A1, C3, E5, G7, …, formada com o alfabeto de 26 letras?",
      o: alt,
      x: "Em cada termo, o número é a posição da letra no alfabeto: A é a 1ª letra, C a 3ª, E a 5ª, G a 7ª. As letras avançam de duas em duas, e os números também. O próximo termo é I9: I é a 9ª letra.\n\nH8 avança só uma posição. I8 e H9 acertam uma parte e erram a outra, quebrando a correspondência entre o número e a letra. J9 tem o número certo, mas J é a 10ª letra, não a 9ª.",
      v: { i: () => { const g = (k) => letra(2 * k - 1) + (2 * k - 1); if ([1, 2, 3, 4].map(g).join(",") !== "A1,C3,E5,G7") throw new Error("termos"); return unicoV(alt.map((x) => x === g(5))); } },
    };
  })(),
  (() => {
    const alt = ["16P", "16O", "10J", "16Q", "12L"];
    return {
      d: "media",
      e: "Qual é o próximo termo da sequência 1A, 2B, 4D, 8H, …, formada com o alfabeto de 26 letras?",
      o: alt,
      x: "Os números dobram a cada termo (1, 2, 4, 8), e a letra é sempre a que ocupa, no alfabeto, a posição indicada pelo número: A é a 1ª, B a 2ª, D a 4ª, H a 8ª. O próximo número é 16, e a 16ª letra é P: 16P.\n\n16O e 16Q erram a posição da letra por uma unidade. 10J soma 2 ao número em vez de dobrar, e 12L soma 4. Nos dois casos, a letra acompanha o número, mas o número não segue a regra.",
      v: { i: () => { const g = (k) => `${2 ** (k - 1)}${letra(2 ** (k - 1))}`; if ([1, 2, 3, 4].map(g).join(",") !== "1A,2B,4D,8H") throw new Error("termos"); return unicoV(alt.map((x) => x === g(5))); } },
    };
  })(),
  (() => {
    const alt = ["OXD", "NWC", "PYE", "OXE", "OWD"];
    const codifica = (p) => p.split("").map((c) => letra(pos(c) + 3)).join("");
    return {
      d: "media",
      e: "Num código, cada letra é trocada pela letra que está três posições à frente no alfabeto de 26 letras. Assim, SOL vira VRO. Como fica a palavra LUA nesse código?",
      o: alt,
      x: "Aplicando o deslocamento de três posições a cada letra: L (12) → O (15); U (21) → X (24); A (1) → D (4). A palavra LUA vira OXD. A conferência com o exemplo dado confirma a regra: S → V, O → R, L → O.\n\nNWC desloca só duas posições. PYE desloca quatro. OXE erra só a última letra, e OWD erra a do meio. Em códigos por deslocamento, cada letra anda o mesmo número de casas — não há letra com regra própria.",
      v: { i: () => { if (codifica("SOL") !== "VRO") throw new Error("exemplo"); return unicoV(alt.map((x) => x === codifica("LUA"))); } },
    };
  })(),
  (() => {
    const alt = ["2-15-12-1", "2-14-12-1", "2-15-11-1", "3-15-12-1", "2-16-12-1"];
    const codifica = (p) => p.split("").map(pos).join("-");
    return {
      d: "facil",
      e: "Num código, cada letra é trocada pela sua posição no alfabeto de 26 letras (A = 1, B = 2, …). Assim, CASA é 3-1-19-1. Como fica BOLA?",
      o: alt,
      x: "B é a 2ª letra, O é a 15ª, L é a 12ª e A é a 1ª. BOLA fica 2-15-12-1.\n\n2-14-12-1 e 2-16-12-1 erram a posição do O por uma unidade — 14 é o N, e 16 é o P. 2-15-11-1 troca o L (12) pelo K (11). E 3-15-12-1 começa com C em vez de B. Contar a partir de marcos ajuda: E = 5, J = 10, O = 15, T = 20. O exemplo dado segue a mesma regra: C = 3, A = 1, S = 19, A = 1.",
      v: { i: () => { if (codifica("CASA") !== "3-1-19-1") throw new Error("exemplo"); return unicoV(alt.map((x) => x === codifica("BOLA"))); } },
    };
  })(),
  (() => {
    const alt = [24, 23, 25, 20, 22];
    return {
      d: "media",
      e: "Atribuindo a cada letra o número da sua posição no alfabeto (A = 1, B = 2, …, Z = 26), qual é a soma dos valores das letras da palavra DADO?",
      o: alt.map(fmt),
      x: "D vale 4, A vale 1, D vale 4 de novo e O vale 15. A soma é 4 + 1 + 4 + 15 = 24.\n\n23 e 25 erram a posição do O por uma unidade (14 ou 16). 20 esquece que o D aparece duas vezes. E 22 dá ao D o valor 3, que é o do C. Uma conferência rápida é agrupar as repetições: D + D = 8, depois A = 1 e O = 15, e 8 + 1 + 15 = 24. As letras repetidas são o ponto em que mais se erra esse tipo de soma.",
      v: { n: () => "DADO".split("").reduce((soma, c) => soma + pos(c), 0), o: alt },
    };
  })(),
  (() => {
    const alt = ["T", "G", "S", "U", "H"];
    return {
      d: "facil",
      e: "Contando as letras do alfabeto de 26 letras de trás para a frente (Z é a 1ª, Y é a 2ª, e assim por diante), qual letra ocupa a 7ª posição?",
      o: alt,
      x: "De trás para a frente: Z (1ª), Y (2ª), X (3ª), W (4ª), V (5ª), U (6ª), T (7ª). A 7ª letra é T. Pela conta, a 7ª a partir do fim é a (26 − 7 + 1)ª a partir do começo, ou seja, a 20ª: T.\n\nG é a 7ª letra contando do começo. S e U erram a contagem por uma posição — S vem de fazer 26 − 7 = 19 sem somar 1. E H ocupa a 8ª posição a partir do começo. Conferência: a 7ª do fim (T, 20) e a 7ª do começo (G, 7) somam 27, como todo par simétrico.",
      v: { i: () => unicoV(alt.map((l) => l === ALFABETO.split("").reverse()[6])) },
    };
  })(),
  (() => {
    const alt = ["R", "S", "Q", "K", "U"];
    return {
      d: "media",
      e: "No alfabeto de 26 letras, qual é a quinta letra depois da terceira letra antes de P?",
      o: alt,
      x: "Primeiro, a terceira letra antes de P: O é a primeira antes, N a segunda, M a terceira. Depois, a quinta letra depois de M: N, O, P, Q, R. A resposta é R. Em posições: P é a 16ª letra, 16 − 3 = 13 (M), e 13 + 5 = 18 (R).\n\nS e Q erram a contagem por uma posição em algum dos passos. K conta cinco letras para trás a partir de P, trocando o sentido de uma das instruções. E U conta cinco letras depois de P, ignorando o “antes”. Resolver de dentro para fora — primeiro a letra antes de P, depois a que vem depois dela — evita a confusão.",
      v: { i: () => { const i = ALFABETO.indexOf("P") - 3 + 5; return unicoV(alt.map((l) => l === ALFABETO[i])); } },
    };
  })(),
  (() => {
    const alt = ["N", "M", "L", "O", "Z"];
    return {
      d: "facil",
      e: "Num código, cada letra é trocada pela letra que ocupa a posição simétrica no alfabeto de 26 letras: A vira Z, B vira Y, C vira X, e assim por diante. Qual letra substitui o M?",
      o: alt,
      x: "Na troca simétrica, as posições de cada par somam 27: A (1) com Z (26), B (2) com Y (25), C (3) com X (24). O M é a 13ª letra, e seu par é a letra de posição 27 − 13 = 14, o N. M e N são justamente as duas letras do meio do alfabeto, que trocam de lugar entre si.\n\nM não troca com ele mesmo: com 26 letras, não há letra central. L e O erram a posição por uma unidade. E Z é o par do A, não do M.",
      v: { i: () => { const par = (c) => ALFABETO[25 - ALFABETO.indexOf(c)]; if (par("A") !== "Z" || par("C") !== "X") throw new Error("exemplo"); return unicoV(alt.map((l) => l === par("M"))); } },
    };
  })(),
  (() => {
    const alt = [55, 45, 66, 10, 50];
    return {
      d: "media",
      e: "Na sequência A, BB, CCC, DDDD, …, cada letra aparece tantas vezes quanto a sua posição no alfabeto. Quantas letras foram escritas ao todo até o fim do grupo do J?",
      o: alt.map(fmt),
      x: "J é a 10ª letra. Até o fim do grupo do J, foram escritas 1 + 2 + 3 + … + 10 letras. Somando os extremos em pares (1 + 10, 2 + 9, …), são 5 pares de 11: 55 letras.\n\n45 para no grupo do I (1 + … + 9). 66 vai até o grupo do K (1 + … + 11). 10 conta só os grupos, não as letras. E 50 é uma estimativa de 5 × 10, sem somar de fato. Em geral, até o grupo da n-ésima letra são n × (n + 1) ÷ 2 letras: 10 × 11 ÷ 2 = 55.",
      v: { n: () => intervalo(1, pos("J")).map((k) => letra(k).repeat(k)).join("").length, o: alt },
    };
  })(),
  (() => {
    const alt = ["E", "A", "D", "B", "C"];
    return {
      d: "facil",
      e: "O grupo de letras ABCDE é escrito repetidamente, sem espaços: ABCDEABCDEABCDE… Qual letra ocupa a 100ª posição?",
      o: alt,
      x: "O grupo ABCDE tem 5 letras e se repete. Como 100 é múltiplo de 5 (100 = 5 × 20), a 100ª letra fecha o 20º grupo completo — é a última letra do grupo, E.\n\nA seria a 101ª letra, a primeira do grupo seguinte: tratar o resto 0 como início de grupo é o erro mais comum. D, B e C correspondem aos restos 4, 2 e 3, que não são o caso de 100 — o D, por exemplo, é a 99ª posição, uma antes da pedida.",
      v: { i: () => unicoV(alt.map((l) => l === "ABCDE".repeat(30)[99])) },
    };
  })(),
  (() => {
    const alt = ["H", "G", "I", "C", "B"];
    return {
      d: "media",
      e: "As 26 letras do alfabeto são escritas em ordem, de A a Z, e depois repetidas da mesma forma, sem parar: ABC…XYZABC… Qual letra ocupa a 60ª posição?",
      o: alt,
      x: "Cada volta completa do alfabeto tem 26 letras. Duas voltas ocupam 52 posições; a 60ª posição é a 8ª letra da terceira volta (60 − 52 = 8). A 8ª letra do alfabeto é H.\n\nG e I erram a posição dentro da volta por uma unidade. C confunde o número da volta — a terceira — com a letra de posição 3. E B pensa nas duas voltas completas e para por aí, sem contar as 8 letras que sobram.",
      v: { i: () => unicoV(alt.map((l) => l === ALFABETO.repeat(3)[59])) },
    };
  })(),
  (() => {
    const alt = [24, 26, 25, 23, 22];
    return {
      d: "media",
      e: "Na sequência ABC, BCD, CDE, DEF, …, cada grupo começa na letra seguinte à inicial do grupo anterior. Em que posição da sequência aparece o grupo XYZ?",
      o: alt.map(fmt),
      x: "O primeiro grupo começa em A (1ª letra), o segundo em B (2ª), o terceiro em C (3ª): a posição do grupo é a posição da sua letra inicial. XYZ começa em X, a 24ª letra, então é o 24º grupo. Ele também é o último possível, porque depois do Z não há letras para completar outro grupo.\n\n26 usa a posição do Z, a última letra do grupo, e 25 usa a do Y. 23 e 22 erram a posição do X no alfabeto — o que acontece com quem esquece o K ou o W na contagem.",
      v: { n: () => { const grupos = intervalo(0, 23).map((i) => ALFABETO.slice(i, i + 3)); return grupos.indexOf("XYZ") + 1; }, o: alt },
    };
  })(),
  (() => {
    const alt = [57, 55, 53, 83, 15];
    return {
      d: "dificil",
      e: "Uma lista de códigos segue a ordem AA, AB, AC, …, AZ, BA, BB, …, BZ, CA, CB, e assim por diante, com as 26 letras do alfabeto. Em que posição da lista aparece o código CE?",
      o: alt.map(fmt),
      x: "Os códigos que começam com A ocupam as posições 1 a 26, e os que começam com B, as posições 27 a 52. Os que começam com C vêm a partir da 53ª: CA é o 53º, CB o 54º, CC o 55º, CD o 56º e CE o 57º. Em conta: 2 × 26 + 5 = 57, porque antes do C há dois blocos de 26 códigos, e E é a 5ª letra.\n\n55 é a posição do CC, e 53 a do CA. 83 conta três blocos de 26 antes do C, quando são só dois (os do A e os do B). E 15 multiplica as posições de C e E (3 × 5), conta sem relação com a ordem da lista.",
      v: { n: () => { const codigos = ALFABETO.split("").flatMap((a) => ALFABETO.split("").map((b) => a + b)); return codigos.indexOf("CE") + 1; }, o: alt },
    };
  })(),
  (() => {
    const alt = ["J", "I", "K", "H", "L"];
    return {
      d: "media",
      e: "No alfabeto de 26 letras, qual letra está exatamente no meio do caminho entre D e P?",
      o: alt,
      x: "D ocupa a 4ª posição do alfabeto, e P, a 16ª. O meio do caminho é a posição (4 + 16) ÷ 2 = 10, a letra J. De D até J são 6 posições (E, F, G, H, I, J), e de J até P são outras 6 (K, L, M, N, O, P).\n\nI e K ficam a uma posição do meio, a 5 e a 7 passos do D. H e L ficam a duas posições do meio. Converter as letras em números e tirar a média evita contar nos dedos e perder uma letra no caminho.",
      v: { i: () => { const a = ALFABETO.indexOf("D"), b = ALFABETO.indexOf("P"); const meio = ALFABETO.split("").filter((_, i) => i - a === b - i); return unicoV(alt.map((l) => l === meio[0])); } },
    };
  })(),

  /* ---------------- figuras ---------------- */
  (() => {
    const bloco = ["↑", "→", "↓", "←"], alt = ["→", "↑", "↓", "←", "↗"];
    return {
      d: "facil",
      e: "Na sequência de setas ↑, →, ↓, ←, ↑, →, ↓, ←, …, as quatro direções se repetem sempre na mesma ordem. Qual é a 30ª seta?",
      o: alt,
      x: "O bloco ↑, →, ↓, ← tem 4 setas e se repete. Dividindo 30 por 4, o resultado é 7, com resto 2: depois de 7 blocos completos (28 setas), a 30ª é a 2ª seta do bloco, →. A seta gira 90° no sentido horário a cada passo.\n\n↑ corresponderia a resto 1, ↓ a resto 3 e ← a resto 0 (fim de bloco). A seta inclinada ↗ nem aparece na sequência, que só tem as quatro direções principais.",
      v: { i: () => unicoV(alt.map((s) => s === bloco[(30 - 1) % 4])) },
    };
  })(),
  (() => {
    const rosa = ["Norte", "Nordeste", "Leste", "Sudeste", "Sul", "Sudoeste", "Oeste", "Noroeste"], alt = ["Sudeste", "Sul", "Leste", "Sudoeste", "Nordeste"];
    return {
      d: "media",
      e: "Uma seta começa apontando para o norte e, a cada figura da sequência, gira 45° no sentido horário. Para onde aponta a seta na 20ª figura?",
      o: alt,
      x: "Da 1ª para a 20ª figura há 19 giros de 45°, ou seja, 19 × 45° = 855°. Como uma volta completa tem 360°, tiram-se duas voltas: 855° − 720° = 135°. A partir do norte, girando no sentido horário: 45° é nordeste, 90° é leste, 135° é sudeste. A 20ª seta aponta para o sudeste.\n\nSul (180°) conta 20 giros em vez de 19. Leste (90°) conta um giro a menos, e nordeste (45°), dois a menos. Sudoeste (225°) gira os 135° no sentido anti-horário.",
      v: { i: () => { let dir = 0; for (let fig = 2; fig <= 20; fig++) dir = (dir + 1) % 8; return unicoV(alt.map((d) => d === rosa[dir])); } },
    };
  })(),
  (() => {
    const bloco = ["azul", "verde", "azul", "vermelho", "amarelo"], alt = ["Amarelo e azul", "Azul e verde", "Vermelho e amarelo", "Amarelo e verde", "Azul e azul"];
    return {
      d: "facil",
      e: "Um colar é montado com contas na ordem azul, verde, azul, vermelho, amarelo, e essa ordem se repete até o fim. Quais são as cores da 50ª e da 51ª contas, nessa ordem?",
      o: alt,
      x: "O bloco de cores tem 5 contas. Como 50 é múltiplo de 5, a 50ª conta fecha o 10º bloco e é a última do bloco: amarelo. A 51ª abre o bloco seguinte, então é a primeira cor: azul.\n\n“Azul e verde” trata o resto 0 como início de bloco, deslocando as duas cores em uma posição. “Vermelho e amarelo” erra a posição para trás. “Amarelo e verde” acerta a 50ª, mas pula uma conta na 51ª. E “azul e azul” supõe que as duas contas azuis do bloco fiquem vizinhas, o que nunca acontece.",
      v: { i: () => { const cor = (n) => bloco[(n - 1) % 5]; const certa = `${cor(50)} e ${cor(51)}`; return unicoV(alt.map((x) => x.toLowerCase() === certa)); } },
    };
  })(),
  (() => {
    const alt = [34, 33, 35, 66, 50];
    return {
      d: "media",
      e: "Na sequência de símbolos ★ ☆ ☆ ★ ☆ ☆ ★ ☆ ☆ …, o bloco ★ ☆ ☆ se repete. Quantas estrelas cheias (★) há entre os 100 primeiros símbolos?",
      o: alt.map(fmt),
      x: "Cada bloco de 3 símbolos tem uma estrela cheia. Em 100 símbolos cabem 33 blocos completos (99 símbolos), com 33 estrelas cheias, e sobra 1 símbolo — o primeiro de um novo bloco, que é justamente uma ★. Total: 33 + 1 = 34.\n\n33 esquece o símbolo que sobra. 35 conta uma estrela a mais. 66 conta as estrelas vazias (☆), não as cheias: são 100 − 34 = 66. E 50 supõe metade de cada tipo, sem olhar o bloco.",
      v: { n: () => "★☆☆".repeat(40).slice(0, 100).split("").filter((c) => c === "★").length, o: alt },
    };
  })(),
  (() => {
    const alt = [60, 100, 50, 36, 72];
    return {
      d: "media",
      e: "Com palitos, monta-se uma sequência de grades quadradas: a 1ª figura é um quadrado 1 × 1 (4 palitos), a 2ª é uma grade 2 × 2 (12 palitos), a 3ª é uma grade 3 × 3 (24 palitos). Quantos palitos tem a grade 5 × 5?",
      o: alt.map(fmt),
      x: "Numa grade n × n há n + 1 linhas horizontais de palitos, cada uma com n palitos, e o mesmo número de colunas verticais. O total é 2 × n × (n + 1). Conferindo: n = 1 dá 4, n = 2 dá 12, n = 3 dá 24. Para n = 5: 2 × 5 × 6 = 60.\n\n100 conta 4 palitos para cada um dos 25 quadradinhos, sem descontar os lados compartilhados. 50 esquece uma das linhas e uma das colunas (2 × 5 × 5). 36 é o número de pontos de encontro (6 × 6), não de palitos. E 72 usa 6 × 6 no lugar de 5 × 6.",
      v: { n: () => {
        /* Conta os segmentos unitários de uma grade n × n, sem fórmula. */
        const palitos = (n) => { const seg = new Set(); for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) { seg.add(`h${i},${j}`); seg.add(`h${i + 1},${j}`); seg.add(`v${i},${j}`); seg.add(`v${i},${j + 1}`); } return seg.size; };
        if (palitos(1) !== 4 || palitos(2) !== 12 || palitos(3) !== 24) throw new Error("casos do enunciado");
        return palitos(5);
      }, o: alt },
    };
  })(),
  (() => {
    const alt = [55, 25, 30, 15, 125];
    return {
      d: "media",
      e: "Uma pirâmide de cubos tem camadas quadradas: a do topo tem 1 cubo (1 × 1), a seguinte tem 4 (2 × 2), a próxima 9 (3 × 3), e assim por diante. Quantos cubos tem uma pirâmide com 5 camadas?",
      o: alt.map(fmt),
      x: "As camadas têm 1, 4, 9, 16 e 25 cubos — os quadrados de 1 a 5. O total é 1 + 4 + 9 + 16 + 25 = 55.\n\n25 conta só a camada da base. 30 para na quarta camada (1 + 4 + 9 + 16). 15 soma os lados das camadas (1 + 2 + 3 + 4 + 5), e não os quadrados. E 125 trata a pirâmide como um cubo 5 × 5 × 5. Para muitas camadas, a fórmula n × (n + 1) × (2n + 1) ÷ 6 poupa a soma: 5 × 6 × 11 ÷ 6 = 55.",
      v: { n: () => intervalo(1, 5).reduce((s, k) => s + k * k, 0), o: alt },
    };
  })(),
  (() => {
    const alt = [77, 80, 81, 76, 73];
    return {
      d: "media",
      e: "Numa sequência de figuras em forma de cruz, a 1ª figura é um único quadradinho; a 2ª tem 5 quadradinhos (o central e um em cada braço); a 3ª tem 9 (cada braço ganha mais um). Quantos quadradinhos tem a 20ª figura?",
      o: alt.map(fmt),
      x: "A cada figura, os quatro braços ganham um quadradinho cada: a figura cresce 4 quadradinhos por vez. A figura n tem 1 + 4 × (n − 1) quadradinhos. Para n = 20: 1 + 4 × 19 = 77.\n\n80 multiplica 20 por 4, sem o central e com um crescimento a mais. 81 soma 4 × 20 + 1, contando um crescimento a mais. 76 esquece o quadradinho central. E 73 corresponde à 19ª figura.",
      v: { n: () => {
        const cruz = (n) => { const c = new Set(["0,0"]); for (let k = 1; k < n; k++) for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) c.add(`${dx * k},${dy * k}`); return c.size; };
        if (cruz(1) !== 1 || cruz(2) !== 5 || cruz(3) !== 9) throw new Error("casos do enunciado");
        return cruz(20);
      }, o: alt },
    };
  })(),
  (() => {
    const alt = [36, 40, 100, 32, 38];
    return {
      d: "dificil",
      e: "Numa sequência de figuras, a figura n é um quadrado de pontos com n pontos em cada lado (a figura 2 tem 2 × 2 pontos, a figura 3 tem 3 × 3). Quantos pontos ficam na borda da figura 10?",
      o: alt.map(fmt),
      x: "A borda tem 4 lados de 10 pontos, mas os 4 cantos pertencem a dois lados ao mesmo tempo. Somando 4 × 10 = 40 e descontando os 4 cantos contados duas vezes, ficam 36 pontos. Outra forma: 100 pontos no total, menos os 8 × 8 = 64 do miolo, dá 36.\n\n40 conta os cantos duas vezes. 100 conta todos os pontos, inclusive os de dentro. 32 desconta os cantos duas vezes (40 − 8). E 38 desconta só dois dos quatro cantos.",
      v: { n: () => { let borda = 0; for (let i = 0; i < 10; i++) for (let j = 0; j < 10; j++) if (i === 0 || j === 0 || i === 9 || j === 9) borda++; return borda; }, o: alt },
    };
  })(),
  (() => {
    const alt = [14, 15, 16, 30, 13];
    return {
      d: "media",
      e: "Numa sequência de figuras, a figura n tem n círculos iguais enfileirados, cada um tocando o seguinte. A figura 2 tem 1 ponto de contato, e a figura 3 tem 2. Quantos pontos de contato tem a figura 15?",
      o: alt.map(fmt),
      x: "Cada ponto de contato fica entre dois círculos vizinhos. Com n círculos em fila, há n − 1 pares de vizinhos, então n − 1 pontos de contato. Para 15 círculos: 14 pontos.\n\n15 conta um contato por círculo, esquecendo que o último não tem vizinho à direita. 16 soma um a mais. 30 conta cada contato duas vezes, uma para cada círculo. E 13 desconta um contato a mais. É o mesmo raciocínio de postes e vãos de uma cerca.",
      v: { n: () => intervalo(1, 15).filter((i) => i + 1 <= 15).length, o: alt },
    };
  })(),
  (() => {
    const alt = [61, 72, 66, 60, 56];
    return {
      d: "media",
      e: "Com palitos, montam-se hexágonos lado a lado numa fileira, e cada hexágono novo aproveita um lado do anterior: 1 hexágono usa 6 palitos, 2 usam 11, e 3 usam 16. Quantos palitos são necessários para 12 hexágonos?",
      o: alt.map(fmt),
      x: "O primeiro hexágono usa 6 palitos, e cada hexágono novo acrescenta 5, porque aproveita um lado do anterior. Para n hexágonos: 6 + 5 × (n − 1) = 5n + 1. Com 12 hexágonos: 5 × 12 + 1 = 61.\n\n72 conta 6 palitos por hexágono, ignorando os lados compartilhados. 66 soma 5 por hexágono a partir de 6, contando um hexágono a mais (6 + 5 × 12). 60 esquece o palito extra do primeiro hexágono (5 × 12). E 56 corresponde a 11 hexágonos.",
      v: { n: () => { const palitos = (n) => 6 * n - (n - 1); if (palitos(1) !== 6 || palitos(2) !== 11 || palitos(3) !== 16) throw new Error("casos do enunciado"); return palitos(12); }, o: alt },
    };
  })(),
  (() => {
    const alt = [14, 9, 20, 21, 7];
    return {
      d: "dificil",
      e: "Numa sequência de figuras, a 1ª é um triângulo, a 2ª é um quadrado, a 3ª é um pentágono, e cada figura seguinte tem um lado a mais que a anterior. Quantas diagonais tem a 5ª figura?",
      o: alt.map(fmt),
      x: "A 5ª figura tem 3 + 4 = 7 lados: é um heptágono. De cada um dos 7 vértices partem diagonais para os outros vértices, exceto ele mesmo e os dois vizinhos: 7 − 3 = 4 diagonais por vértice. Como cada diagonal liga dois vértices, ela foi contada duas vezes: 7 × 4 ÷ 2 = 14.\n\n9 é o número de diagonais do hexágono, a 4ª figura, e 20 é o do octógono, a 6ª. 21 conta também os 7 lados (7 × 6 ÷ 2), que não são diagonais. E 7 confunde lados com diagonais.",
      v: { n: () => { const n = 3 + (5 - 1); let d = 0; for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) if (j - i !== 1 && !(i === 0 && j === n - 1)) d++; return d; }, o: alt },
    };
  })(),
  (() => {
    const alt = [30, 16, 25, 29, 20];
    return {
      d: "dificil",
      e: "Uma figura é uma grade quadrada de 4 × 4 quadradinhos. Contando quadrados de todos os tamanhos (1 × 1, 2 × 2, 3 × 3 e 4 × 4), quantos quadrados há na figura?",
      o: alt.map(fmt),
      x: "Um quadrado k × k pode ocupar 5 − k posições na horizontal e 5 − k na vertical. Há 16 quadrados 1 × 1, 9 de 2 × 2 (3 × 3 posições), 4 de 3 × 3 e 1 de 4 × 4. Total: 16 + 9 + 4 + 1 = 30.\n\n16 conta só os quadradinhos menores. 25 para nos quadrados 2 × 2. 29 esquece o quadrado maior, a própria figura. E 20 conta os quadrados 2 × 2 sem sobreposição — só 4 blocos —, quando eles podem se sobrepor e são 9.",
      v: { n: () => { let q = 0; for (let k = 1; k <= 4; k++) for (let i = 0; i + k <= 4; i++) for (let j = 0; j + k <= 4; j++) q++; return q; }, o: alt },
    };
  })(),
  (() => {
    const alt = [36, 21, 15, 42, 25];
    return {
      d: "media",
      e: "Um triângulo grande é dividido em 6 fileiras de triângulos pequenos. Na fileira k, contada de cima para baixo, há k triângulos com a ponta para cima e k − 1 com a ponta para baixo. Quantos triângulos pequenos há ao todo?",
      o: alt.map(fmt),
      x: "Com a ponta para cima são 1 + 2 + 3 + 4 + 5 + 6 = 21; com a ponta para baixo, 0 + 1 + 2 + 3 + 4 + 5 = 15. O total é 21 + 15 = 36 — que é 6², o padrão desse tipo de figura: com n fileiras, n² triângulos pequenos.\n\n21 conta só os triângulos com a ponta para cima, e 15 só os com a ponta para baixo. 42 multiplica 6 × 7, como se cada fileira tivesse uma peça a mais. E 25 é 5², o total para cinco fileiras.",
      v: { n: () => intervalo(1, 6).reduce((s, k) => s + k + (k - 1), 0), o: alt },
    };
  })(),
  (() => {
    const alt = [49, 16, 64, 36, 56];
    return {
      d: "dificil",
      e: "Num tabuleiro de 8 × 8 casas, quantos quadrados de 2 × 2 casas podem ser formados, contando também os que se sobrepõem?",
      o: alt.map(fmt),
      x: "Um quadrado 2 × 2 é determinado pela casa do seu canto superior esquerdo. Essa casa pode estar em qualquer uma das 7 primeiras colunas e das 7 primeiras linhas — na 8ª não caberia o quadrado. São 7 × 7 = 49 quadrados.\n\n16 conta só os quadrados 2 × 2 sem sobreposição (4 × 4 blocos). 64 conta todas as casas, como se cada uma pudesse ser canto. 36 usa 6 posições em cada direção. E 56 usa 7 posições numa direção e 8 na outra.",
      v: { n: () => { let q = 0; for (let i = 0; i < 8; i++) for (let j = 0; j < 8; j++) if (i + 2 <= 8 && j + 2 <= 8) q++; return q; }, o: alt },
    };
  })(),
  (() => {
    const alt = [12, 8, 6, 1, 24];
    return {
      d: "dificil",
      e: "Um cubo de madeira é pintado por fora e depois cortado em 27 cubinhos iguais (3 × 3 × 3). Quantos cubinhos ficam com exatamente duas faces pintadas?",
      o: alt.map(fmt),
      x: "Um cubinho tem duas faces pintadas quando está numa aresta do cubo grande, mas não num canto. O cubo tem 12 arestas, e em cada uma há 3 cubinhos: os 2 das pontas são cantos (três faces pintadas) e só o do meio tem exatamente duas. São 12 cubinhos.\n\n8 conta os cantos, que têm três faces pintadas. 6 conta os cubinhos do centro de cada face, que têm uma só. 1 é o cubinho do centro, sem nenhuma face pintada. E 24 conta os dois cubinhos das pontas de cada aresta, que são cantos.",
      v: { n: () => { let n = 0; for (let x = 0; x < 3; x++) for (let y = 0; y < 3; y++) for (let z = 0; z < 3; z++) if ([x, y, z].filter((c) => c === 0 || c === 2).length === 2) n++; return n; }, o: alt },
    };
  })(),
  (() => {
    const alt = [64, 32, 128, 14, 49];
    return {
      d: "media",
      e: "Numa sequência de figuras, um quadrado é dividido ao meio repetidas vezes: a 1ª figura tem 1 parte, a 2ª tem 2 partes, a 3ª tem 4 e a 4ª tem 8. Seguindo o padrão, quantas partes tem a 7ª figura?",
      o: alt.map(fmt),
      x: "A cada figura, todas as partes são divididas ao meio, e o número de partes dobra: 1, 2, 4, 8, 16, 32, 64. A figura n tem 2ⁿ⁻¹ partes; a 7ª tem 2⁶ = 64.\n\n32 é a 6ª figura, e 128 é a 8ª: erro de uma posição. 14 dobra o número da figura (2 × 7). E 49 é 7², confundindo o padrão de dobrar com o de elevar ao quadrado. Como as partes são iguais, na 7ª figura cada uma vale 1/64 do quadrado.",
      v: { n: () => { let partes = 1; for (let fig = 2; fig <= 7; fig++) partes *= 2; return partes; }, o: alt },
    };
  })(),
  (() => {
    const alt = [100, 90, 110, 55, 81];
    return {
      d: "media",
      e: "Numa sequência de figuras de bolinhas, a 1ª tem 1 bolinha, a 2ª tem 3 (1 + 2), a 3ª tem 6 (1 + 2 + 3), e cada figura acrescenta uma fileira com uma bolinha a mais. Quantas bolinhas têm, juntas, a 9ª e a 10ª figuras?",
      o: alt.map(fmt),
      x: "A 9ª figura tem 1 + 2 + … + 9 = 45 bolinhas, e a 10ª tem 1 + 2 + … + 10 = 55. Juntas: 45 + 55 = 100. Não é coincidência: duas figuras triangulares consecutivas se encaixam formando um quadrado, e 100 = 10².\n\n90 soma duas vezes a 9ª figura. 110 soma duas vezes a 10ª. 55 é só a 10ª figura. E 81 = 9² usa o lado errado do quadrado formado. Pela fórmula n × (n + 1) ÷ 2: 9 × 10 ÷ 2 = 45 e 10 × 11 ÷ 2 = 55.",
      v: { n: () => { const t = (n) => intervalo(1, n).reduce((s, k) => s + k, 0); return t(9) + t(10); }, o: alt },
    };
  })(),
  (() => {
    const alt = [40, 44, 36, 121, 32];
    return {
      d: "dificil",
      e: "Na figura 1 há um quadradinho preto. Cada figura seguinte cerca a anterior com uma moldura de quadradinhos, formando um quadrado maior: a figura 2 é um quadrado 3 × 3, e a figura 3 é 5 × 5. Quantos quadradinhos a moldura acrescenta na figura 6?",
      o: alt.map(fmt),
      x: "A figura n é um quadrado de lado 2n − 1: a figura 5 tem lado 9 (81 quadradinhos), e a figura 6 tem lado 11 (121 quadradinhos). A moldura da figura 6 acrescenta 121 − 81 = 40. Outra conta: uma moldura em volta de um quadrado de lado 9 tem 4 × 9 + 4 = 40 — os quatro lados mais os quatro cantos.\n\n44 calcula a moldura como 4 × 11, contando os cantos duas vezes. 36 esquece os cantos (4 × 9). 121 é o total da figura 6, não só a moldura. E 32 é a moldura da figura 5 (81 − 49), uma figura antes da pedida.",
      v: { n: () => { const lado = (n) => 2 * n - 1; let moldura = 0; for (let i = 0; i < lado(6); i++) for (let j = 0; j < lado(6); j++) if (i === 0 || j === 0 || i === lado(6) - 1 || j === lado(6) - 1) moldura++; return moldura; }, o: alt },
    };
  })(),
];
