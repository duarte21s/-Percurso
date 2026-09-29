/* Rascunho — Exatas nível militar / Geometria espacial: sólidos e seções.

   A explicação usa as fórmulas de volume e de área; a conferência chega ao
   número por outro caminho: volumes pela soma das áreas das seções
   (princípio de Cavalieri, integral numérica), áreas de superfícies de
   revolução por integral, e poliedros pelas coordenadas dos vértices
   (produto vetorial, volume de tetraedros, contagem de arestas e faces). */

import { unicoV, intervalo, escolhe, lerC, lerReal, integra, zeros, bissecao, perto } from "./_exatas.mjs";

export const materia = "exatas-militar";
export const tema = "Geometria espacial: sólidos e seções";
export const arquivo = "exatas-militar__geometria-espacial-solidos-e-secoes";

const PI = Math.PI;
/* valor numérico da alternativa, sem a unidade: "64 cm³" → 64; "32√3π" → 32√3π */
const valor = (t) => lerC(String(t).replace(/\s*(cm³|cm²|cm|m³|m²|m|°)\s*$/, "")).re;
const qual = (x, alt, tol = 1e-6) => escolhe(x, alt.map(valor), tol);
/* vetores no espaço */
const sub3 = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const cruz = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const esc = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const norma = (a) => Math.hypot(a[0], a[1], a[2]);
const dist3 = (a, b) => norma(sub3(a, b));
const areaTri = (a, b, c) => norma(cruz(sub3(b, a), sub3(c, a))) / 2;
const volTetra = (a, b, c, d) => Math.abs(esc(sub3(b, a), cruz(sub3(c, a), sub3(d, a)))) / 6;
/* área de um polígono convexo plano no espaço: ordena os vértices pelo ângulo em torno do centroide */
const areaPoligono = (pts) => {
  const g = [0, 1, 2].map((k) => pts.reduce((s, p) => s + p[k], 0) / pts.length);
  const u0 = sub3(pts[0], g), n = cruz(u0, pts.map((p) => sub3(p, g)).find((w) => norma(cruz(u0, w)) > 1e-9));
  const u = u0.map((c) => c / norma(u0)), v = cruz(n, u).map((c) => c / norma(n));
  const ord = [...pts].sort((p, q) => Math.atan2(esc(sub3(p, g), v), esc(sub3(p, g), u)) - Math.atan2(esc(sub3(q, g), v), esc(sub3(q, g), u)));
  return ord.reduce((s, p, k) => s + areaTri(g, p, ord[(k + 1) % ord.length]), 0);
};
/* tetraedro regular de aresta a */
const tetra = (a) => [[0, 0, 0], [a, 0, 0], [a / 2, (a * Math.sqrt(3)) / 2, 0], [a / 2, (a * Math.sqrt(3)) / 6, (a * Math.sqrt(6)) / 3]];
/* sólido de revolução: volume por discos e área lateral por anéis, com r(z) */
const volRev = (r, a, b) => integra((z) => PI * r(z) ** 2, a, b, 20000);
const areaRev = (r, a, b) => integra((z) => { const h = 1e-6; const d = (r(z + h) - r(z - h)) / (2 * h); return 2 * PI * r(z) * Math.sqrt(1 + d * d); }, a, b, 20000);
/* superfície esférica de raio R entre as colatitudes t0 e t1 e as longitudes p0 e p1 */
const areaEsfera = (R, t0 = 0, t1 = PI, p0 = 0, p1 = 2 * PI) => (p1 - p0) * integra((t) => R * R * Math.sin(t), t0, t1, 20000);
/* arestas de um poliedro dado pelos vértices: pares à distância mínima */
const arestas = (V) => { const pares = []; for (let i = 0; i < V.length; i++) for (let j = i + 1; j < V.length; j++) pares.push([i, j, dist3(V[i], V[j])]); const m = Math.min(...pares.map((p) => p[2])); return pares.filter((p) => perto(p[2], m, 1e-9)); };

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  (() => {
    const o = ["64 cm³", "16 cm³", "96 cm³", "48 cm³", "12 cm³"];
    return {
      d: "facil",
      e: "Qual é o volume de um cubo de aresta 4 cm?",
      o,
      x: "O volume do cubo é a aresta elevada ao cubo: V = 4³ = 4 · 4 · 4 = 64 cm³. Pensando em cubinhos de 1 cm de aresta: cabem 4 · 4 = 16 na camada do fundo, e há 4 camadas.\n\n16 cm³ é a área de uma face, 4², e não o volume. 96 cm³ é a área total, 6 · 16, que se mede em cm². 48 cm³ é a soma das 12 arestas, 12 · 4. E 12 cm³ multiplica a aresta por 3 em vez de elevá-la ao cubo.",
      v: { i: () => qual(integra(() => 4 * 4, 0, 4), o) },
    };
  })(),
  (() => {
    const o = ["3√3", "3√2", "9", "6", "√3"];
    return {
      d: "facil",
      e: "Qual é a medida da diagonal de um cubo de aresta 3?",
      o,
      x: "A diagonal do cubo liga dois vértices opostos, passando pelo interior. A diagonal da base, 3√2, e a aresta vertical, 3, formam com ela um triângulo retângulo: d² = (3√2)² + 3² = 18 + 9 = 27, e d = 3√3. Em geral, a diagonal do cubo de aresta a mede a√3.\n\n3√2 é a diagonal de uma face, e não a do cubo. 9 é o quadrado da aresta. 6 soma duas arestas. E √3 esquece de multiplicar pela aresta.",
      v: { i: () => qual(dist3([0, 0, 0], [3, 3, 3]), o) },
    };
  })(),
  (() => {
    const o = ["62", "30", "31", "124", "10"];
    const P = (x, y, z) => [x * 2, y * 3, z * 5];
    return {
      d: "facil",
      e: "Qual é a área total da superfície de um paralelepípedo retângulo de dimensões 2, 3 e 5?",
      o,
      x: "O paralelepípedo tem três pares de faces retangulares iguais: 2 × 3, 2 × 5 e 3 × 5, de áreas 6, 10 e 15. A área total é 2(6 + 10 + 15) = 2 · 31 = 62.\n\n30 é o volume, 2 · 3 · 5. 31 soma uma face de cada par e esquece que cada uma aparece duas vezes. 124 conta cada face quatro vezes. E 10 soma as três dimensões, que são comprimentos, e não áreas.",
      /* seis faces, cada uma dividida em dois triângulos */
      v: { i: () => { const faces = [[P(0, 0, 0), P(1, 0, 0), P(1, 1, 0), P(0, 1, 0)], [P(0, 0, 1), P(1, 0, 1), P(1, 1, 1), P(0, 1, 1)], [P(0, 0, 0), P(1, 0, 0), P(1, 0, 1), P(0, 0, 1)], [P(0, 1, 0), P(1, 1, 0), P(1, 1, 1), P(0, 1, 1)], [P(0, 0, 0), P(0, 1, 0), P(0, 1, 1), P(0, 0, 1)], [P(1, 0, 0), P(1, 1, 0), P(1, 1, 1), P(1, 0, 1)]]; return qual(faces.reduce((s, f) => s + areaTri(f[0], f[1], f[2]) + areaTri(f[0], f[2], f[3]), 0), o); } },
    };
  })(),
  (() => {
    const o = ["45π", "15π", "30π", "75π", "9π"];
    return {
      d: "facil",
      e: "Qual é o volume de um cilindro circular reto de raio da base 3 e altura 5?",
      o,
      x: "O volume do cilindro é a área da base vezes a altura: V = πr² · h = π · 9 · 5 = 45π.\n\n15π usa o raio sem elevar ao quadrado (π · 3 · 5). 30π é a área lateral, 2πrh, que se mede em unidades de área. 75π troca os papéis e faz π · 5² · 3. E 9π é só a área da base, sem multiplicar pela altura. O cilindro pode ser visto como uma pilha de discos iguais, de área 9π; a altura 5 diz quantas camadas de espessura 1 há.",
      v: { i: () => qual(volRev(() => 3, 0, 5), o) },
    };
  })(),
  (() => {
    const o = ["12π", "36π", "15π", "4π", "16π"];
    return {
      d: "facil",
      e: "Um cone circular reto tem 3 de raio da base e 4 de altura. Quanto vale o seu volume?",
      o,
      x: "O volume do cone é um terço do volume do cilindro de mesma base e mesma altura: V = (1/3)πr²h = (1/3) · π · 9 · 4 = 12π.\n\n36π é o volume do cilindro correspondente, sem o fator 1/3. 15π é a área lateral, πrg, com a geratriz g = 5. 4π usa o raio sem elevar ao quadrado. E 16π usa a altura no lugar do raio: (1/3) · π · 16 · 3. É preciso o volume de três cones iguais para encher o cilindro de mesma base e mesma altura — daí o fator 1/3.",
      v: { i: () => qual(volRev((z) => 3 * (1 - z / 4), 0, 4), o) },
    };
  })(),
  (() => {
    const o = ["36π", "12π", "108π", "27π", "9π"];
    return {
      d: "facil",
      e: "Qual é o volume de uma esfera de raio 3?",
      o,
      x: "O volume da esfera é V = (4/3)πr³ = (4/3) · π · 27 = 36π. Por coincidência, o valor numérico é o mesmo da área da superfície, 4πr² = 36π, porque o raio é 3 — mas volume e área têm unidades diferentes.\n\n12π usa r² no lugar de r³. 108π esquece de dividir por 3. 27π esquece o fator 4/3. E 9π é a área de um círculo máximo, πr². A esfera ocupa 2/3 do cilindro que a envolve, de raio 3 e altura 6, cujo volume é 54π.",
      v: { i: () => qual(volRev((z) => Math.sqrt(Math.max(0, 9 - z * z)), -3, 3), o, 1e-5) },
    };
  })(),
  (() => {
    const o = ["6", "4", "20", "18", "22"];
    const cubo = intervalo(0, 7).map((k) => [k & 1, (k >> 1) & 1, (k >> 2) & 1]);
    return {
      d: "facil",
      e: "Um poliedro convexo tem 8 vértices e 12 arestas. Quantas faces ele tem?",
      o,
      x: "Pela relação de Euler, V − A + F = 2 para todo poliedro convexo. Então 8 − 12 + F = 2, e F = 6. O cubo é um exemplo: 8 vértices, 12 arestas e 6 faces.\n\n4 faz A − V e esquece a constante 2. 20 soma vértices e arestas. 18 usa V + A − F = 2, com os sinais trocados. E 22 soma vértices, arestas e a constante. A relação vale para qualquer poliedro convexo, do tetraedro (4 − 6 + 4 = 2) ao dodecaedro (20 − 30 + 12 = 2).",
      /* confere a relação num poliedro com esses números (o cubo), contando as arestas pelas coordenadas */
      v: { i: () => { const A = arestas(cubo).length; if (cubo.length !== 8 || A !== 12) throw new Error("cubo"); return qual(2 - cubo.length + A, o); } },
    };
  })(),
  (() => {
    const o = ["16π", "4π", "32π/3", "8π", "64π"];
    return {
      d: "facil",
      e: "Qual é a área da superfície de uma esfera de raio 2?",
      o,
      x: "A área da superfície esférica é A = 4πr² = 4 · π · 4 = 16π — o quádruplo da área de um círculo máximo, πr².\n\n4π é a área de um círculo máximo, πr². 32π/3 é o volume da esfera, (4/3)πr³. 8π usa 4πr, sem elevar o raio ao quadrado. E 64π eleva o diâmetro, e não o raio: 4π · 4². Um jeito de lembrar a fórmula: a área da esfera é igual à área lateral do cilindro que a envolve, 2πr · 2r = 4πr².",
      v: { i: () => qual(areaEsfera(2), o) },
    };
  })(),
  (() => {
    const o = ["60 cm³", "180 cm³", "90 cm³", "10 cm³", "30 cm³"];
    return {
      d: "facil",
      e: "Qual é o volume de uma pirâmide de base quadrada com lado 6 cm e altura 5 cm?",
      o,
      x: "O volume da pirâmide é um terço da área da base vezes a altura: V = (1/3) · 6² · 5 = (1/3) · 36 · 5 = 60 cm³.\n\n180 cm³ é o volume do prisma de mesma base e altura, sem o fator 1/3. 90 cm³ usa 1/2 no lugar de 1/3, como na área do triângulo. 10 cm³ usa o lado sem elevar ao quadrado, (1/3) · 6 · 5. E 30 cm³ divide por 6. O fator 1/3 vale para qualquer pirâmide, qualquer que seja a forma da base: três pirâmides de mesmo volume completam um prisma triangular.",
      /* as seções paralelas à base são quadrados cujo lado diminui linearmente até o vértice */
      v: { i: () => qual(integra((z) => (6 * (1 - z / 5)) ** 2, 0, 5), o) },
    };
  })(),
  (() => {
    const o = ["28π", "14π", "36π", "56π", "4π"];
    return {
      d: "facil",
      e: "Qual é a área lateral de um cilindro circular reto de raio 2 e altura 7?",
      o,
      x: "A superfície lateral, planificada, é um retângulo: um lado é a altura, 7, e o outro é o comprimento da circunferência da base, 2πr = 4π. A área lateral é 4π · 7 = 28π.\n\n14π usa πr no lugar de 2πr. 36π é a área total, que soma as duas bases (2 · 4π = 8π). 56π usa o diâmetro no lugar do raio na fórmula 2πrh. E 4π é só o comprimento da circunferência da base.",
      v: { i: () => qual(areaRev(() => 2, 0, 7), o) },
    };
  })(),
  (() => {
    const o = ["18", "12", "6", "24", "8"];
    const hex = (z) => intervalo(0, 5).map((k) => [Math.cos((k * PI) / 3), Math.sin((k * PI) / 3), z]);
    return {
      d: "facil",
      e: "Quantas arestas tem um prisma de base hexagonal?",
      o,
      x: "Cada uma das duas bases hexagonais tem 6 arestas, e há 6 arestas laterais ligando os vértices correspondentes: 6 + 6 + 6 = 18. Conferindo por Euler: o prisma tem 12 vértices e 8 faces, e 12 − 18 + 8 = 2.\n\n12 conta só as arestas das duas bases. 6 conta só uma base. 24 conta as arestas laterais duas vezes. E 8 é o número de faces, e não o de arestas.",
      /* prisma hexagonal regular de aresta 1 e altura 1: todas as arestas medem 1 */
      v: { i: () => qual(arestas([...hex(0), ...hex(1)]).length, o) },
    };
  })(),
  (() => {
    const o = ["8", "2", "4", "6", "16"];
    const volCubo = (a) => integra(() => a * a, 0, a);
    return {
      d: "facil",
      e: "Se todas as arestas de um cubo forem multiplicadas por 2, por quanto fica multiplicado o seu volume?",
      o,
      x: "O volume depende do cubo da aresta: com aresta 2a, V = (2a)³ = 8a³, oito vezes o volume original. Em geral, ampliar um sólido por um fator k multiplica os comprimentos por k, as áreas por k² e os volumes por k³.\n\n2 supõe que o volume cresça na mesma proporção das arestas. 4 é o fator das áreas, k² = 4. 6 confunde o fator com o número de faces do cubo. E 16 usa 2⁴.",
      v: { i: () => qual(volCubo(3.4) / volCubo(1.7), o) },
    };
  })(),

  /* ------------------------------------------------------------- médias --- */
  (() => {
    const o = ["15π", "12π", "24π", "20π", "9π"];
    return {
      d: "media",
      e: "A superfície lateral de um cone reto de raio da base 3 e altura 4 é planificada. Qual é a área dessa superfície?",
      o,
      x: "A geratriz é a hipotenusa do triângulo retângulo de catetos r = 3 e h = 4: g = √(9 + 16) = 5. A área lateral do cone é πrg = π · 3 · 5 = 15π — planificada, ela é um setor circular de raio g e arco 2πr.\n\n12π usa a altura no lugar da geratriz (π · 3 · 4). 24π é a área total, que soma a base, 9π. 20π usa πhg. E 9π é só a área da base. Planificando: um setor de raio 5 cujo arco mede 6π ocupa 6π/10π = 3/5 do círculo de raio 5, e (3/5) · 25π = 15π.",
      v: { i: () => qual(areaRev((z) => 3 * (1 - z / 4), 0, 4), o, 1e-5) },
    };
  })(),
  (() => {
    const o = ["90π", "65π", "85π", "130π", "25π"];
    return {
      d: "media",
      e: "Qual é a área total de um cone circular reto de raio da base 5 e altura 12?",
      o,
      x: "A geratriz é g = √(5² + 12²) = √169 = 13. A área lateral é πrg = 65π, e a da base, πr² = 25π. A área total é 65π + 25π = 90π.\n\n65π é só a área lateral. 85π usa a altura no lugar da geratriz na área lateral (60π + 25π). 130π usa 2πrg, como se fosse a área lateral de um cilindro. E 25π é só a área da base. Conferindo pela planificação: a superfície lateral é um setor de raio 13 e arco 10π, de área (1/2) · 10π · 13 = 65π.",
      v: { i: () => qual(areaRev((z) => 5 * (1 - z / 12), 0, 12) + PI * 25, o, 1e-5) },
    };
  })(),
  (() => {
    const o = ["28π", "20π", "30π", "84π", "27π"];
    return {
      d: "media",
      e: "Um tronco de cone reto tem raios das bases 4 e 2 e altura 3. Qual é o seu volume?",
      o,
      x: "O volume do tronco é V = (πh/3)(R² + Rr + r²) = (π · 3/3)(16 + 8 + 4) = 28π. Outra forma: completando o cone, o grande tem altura 6 — o raio cai de 4 para 2 em 3 unidades e chegaria a 0 em mais 3 — e volume (1/3)π · 16 · 6 = 32π; o cone retirado tem volume (1/3)π · 4 · 3 = 4π; a diferença é 28π.\n\n20π esquece o termo Rr (16 + 4). 30π multiplica a média das áreas das bases pela altura, o que superestima o volume. 84π esquece o fator 1/3. E 27π usa um cilindro com o raio médio, 3.",
      v: { i: () => qual(volRev((z) => 4 - (2 * z) / 3, 0, 3), o) },
    };
  })(),
  (() => {
    const o = ["18√2", "36√2", "72", "9√3", "54√2"];
    return {
      d: "media",
      e: "Qual é o volume de um tetraedro regular de aresta 6?",
      o,
      x: "No tetraedro regular de aresta a, a altura é h = a√6/3 = 2√6, e a base é um triângulo equilátero de área (√3/4)a² = 9√3. O volume é (1/3) · 9√3 · 2√6 = 6√18 = 18√2. Direto pela fórmula: V = a³√2/12 = 216√2/12 = 18√2.\n\n36√2 divide a³√2 por 6, e não por 12. 72 calcula como se a base fosse um quadrado de lado 6 e a altura fosse a aresta. 9√3 é a área da base, e não o volume. E 54√2 esquece o fator 1/3.",
      v: { i: () => { const T = tetra(6); if (!T.every((p, i) => T.every((q, j) => i === j || perto(dist3(p, q), 6)))) throw new Error("tetraedro"); return qual(volTetra(...T), o); } },
    };
  })(),
  (() => {
    const o = ["32π/3", "256π/3", "32√3π", "16π", "8π"];
    return {
      d: "media",
      e: "Uma esfera está inscrita num cubo de aresta 4, tocando as seis faces. Qual é o volume da esfera?",
      o,
      x: "A esfera inscrita toca faces opostas, então o seu diâmetro é igual à aresta: 2r = 4, e r = 2. O volume é (4/3)π · 2³ = 32π/3, pouco mais da metade do volume do cubo, 64.\n\n256π/3 usa a aresta 4 como raio. 32√3π é o volume da esfera circunscrita, que passa pelos vértices, de raio 2√3. 16π é a área da superfície da esfera, 4πr². E 8π usa πr³, sem o fator 4/3.",
      /* raio: metade da distância entre faces opostas do cubo */
      v: { i: () => { const r = dist3([0, 0, 0], [4, 0, 0]) / 2; return qual(volRev((z) => Math.sqrt(Math.max(0, r * r - z * z)), -r, r), o, 1e-5); } },
    };
  })(),
  (() => {
    const o = ["8", "3√3", "24", "2", "6√6"];
    return {
      d: "media",
      e: "Um cubo está inscrito numa esfera de raio √3, com os oito vértices sobre a superfície. Qual é o volume do cubo?",
      o,
      x: "Os vértices opostos do cubo são extremos de um diâmetro da esfera, então a diagonal do cubo mede 2√3. Como a diagonal de um cubo de aresta a é a√3, a = 2, e o volume é 2³ = 8.\n\n3√3 eleva o raio ao cubo, (√3)³. 24 é a área total do cubo, 6 · 2². 2 é a aresta. E 6√6 iguala o diâmetro da esfera à diagonal de uma face, o que daria aresta √6. Repare que o centro da esfera coincide com o centro do cubo.",
      v: { i: () => { const a = bissecao((a) => dist3([0, 0, 0], [a, a, a]) - 2 * Math.sqrt(3), 0, 10); return qual(a ** 3, o); } },
    };
  })(),
  (() => {
    const o = ["16π", "4π", "25π", "9π", "34π"];
    return {
      d: "media",
      e: "Um plano corta uma esfera de raio 5 a uma distância de 3 do centro. Qual é a área da seção obtida?",
      o,
      x: "A seção é um círculo. O centro da esfera, o centro da seção e um ponto da borda formam um triângulo retângulo cuja hipotenusa é o raio da esfera: r² + 3² = 5², e r = 4. A área da seção é π · 4² = 16π.\n\n4π usa o raio da seção sem elevar ao quadrado. 25π é a área de um círculo máximo, como se o plano passasse pelo centro. 9π usa a distância 3 como raio da seção. E 34π soma os quadrados, 25 + 9, em vez de subtrair.",
      /* conta, numa malha do plano z = 3, os pontos que estão dentro da esfera */
      v: { i: () => { const h = 0.01; let n = 0; for (let x = -5 + h / 2; x < 5; x += h) for (let y = -5 + h / 2; y < 5; y += h) if (x * x + y * y + 9 <= 25) n++; return qual(n * h * h, o, 0.01); } },
    };
  })(),
  (() => {
    const o = ["72π", "200π", "24π", "36π", "128π"];
    return {
      d: "media",
      e: "Um cilindro circular reto de altura 8 está inscrito numa esfera de raio 5. Qual é o volume do cilindro?",
      o,
      x: "As circunferências das bases estão sobre a esfera. Do centro da esfera ao plano de cada base há metade da altura, 4; então o raio r da base satisfaz r² + 4² = 5², e r = 3. O volume é π · 9 · 8 = 72π.\n\n200π usa o raio da esfera como raio do cilindro, π · 25 · 8. 24π usa r = 3 sem elevar ao quadrado. 36π usa só a metade da altura, π · 9 · 4. E 128π toma como raio a metade da altura, 4.",
      v: { i: () => { const r = bissecao((r) => dist3([0, 0, 0], [r, 0, 4]) - 5, 0, 5); return qual(volRev(() => r, -4, 4), o); } },
    };
  })(),
  (() => {
    const o = ["1,44 cm", "3,6 cm", "1,08 cm", "6 cm", "2,88 cm"];
    return {
      d: "media",
      e: "Um recipiente cilíndrico de raio 5 cm contém água. Uma esfera maciça de raio 3 cm é mergulhada por completo, sem que a água transborde. Quanto sobe o nível da água?",
      o,
      x: "O volume de água deslocado é o volume da esfera: (4/3)π · 27 = 36π cm³. No cilindro, esse volume ocupa uma fatia de base π · 25 e altura Δh: 25π · Δh = 36π, e Δh = 36/25 = 1,44 cm.\n\n3,6 cm divide 36 por 10, usando o diâmetro no lugar de r². 1,08 cm esquece o fator 4/3 do volume da esfera (27π/25). 6 cm é o diâmetro da esfera, como se o nível subisse o tamanho dela. E 2,88 cm dobra o resultado.",
      v: { i: () => { const Vesf = volRev((z) => Math.sqrt(Math.max(0, 9 - z * z)), -3, 3); return qual(Vesf / (PI * 25), o, 1e-4); } },
    };
  })(),
  (() => {
    const o = ["60", "48", "96", "120", "30"];
    const V = [0, 0, 4], B = [[3, 3, 0], [-3, 3, 0], [-3, -3, 0], [3, -3, 0]];
    return {
      d: "media",
      e: "Uma pirâmide regular de base quadrada tem aresta da base 6 e altura 4. Qual é a sua área lateral?",
      o,
      x: "A área lateral é a soma de quatro triângulos iguais, de base 6 e altura igual ao apótema da pirâmide. O apótema vai do vértice ao ponto médio de uma aresta da base: é a hipotenusa do triângulo de catetos 4 (a altura) e 3 (metade do lado): √(16 + 9) = 5. Cada face tem área 6 · 5/2 = 15, e as quatro somam 60.\n\n48 usa a altura da pirâmide, 4, no lugar do apótema. 96 é a área total, que soma a base, 36. 120 esquece de dividir a área de cada triângulo por 2. E 30 conta só duas faces.",
      v: { i: () => qual(B.reduce((s, p, k) => s + areaTri(V, p, B[(k + 1) % 4]), 0), o) },
    };
  })(),
  (() => {
    const o = ["13", "19", "5", "√19", "12√2"];
    return {
      d: "media",
      e: "Qual é a medida da diagonal de um paralelepípedo retângulo de dimensões 3, 4 e 12?",
      o,
      x: "A diagonal do paralelepípedo é d = √(a² + b² + c²) = √(9 + 16 + 144) = √169 = 13. Ela vem de aplicar Pitágoras duas vezes: a diagonal da base é √(9 + 16) = 5, e a do sólido é √(5² + 12²) = 13.\n\n19 soma as dimensões. 5 é só a diagonal da base 3 × 4. √19 tira a raiz da soma das dimensões, sem elevar ao quadrado. E 12√2 trata o sólido como se tivesse duas dimensões iguais a 12.",
      v: { i: () => qual(dist3([0, 0, 0], [3, 4, 12]), o) },
    };
  })(),
  (() => {
    const o = ["96π cm³", "120π cm³", "288π cm³", "60π cm³", "128π cm³"];
    return {
      d: "media",
      e: "Um setor circular de raio 10 cm e ângulo central de 216° é enrolado, sem sobreposição, para formar a superfície lateral de um cone. Qual é o volume desse cone?",
      o,
      x: "O raio do setor vira a geratriz do cone: g = 10. O arco do setor vira a circunferência da base: (216/360) · 2π · 10 = 12π; então 2πr = 12π e r = 6. A altura é √(10² − 6²) = 8, e o volume é (1/3)π · 36 · 8 = 96π cm³.\n\n120π cm³ usa a geratriz no lugar da altura, (1/3)π · 36 · 10. 288π cm³ esquece o fator 1/3. 60π cm³ é a área lateral do cone, πrg, que nem é um volume. E 128π cm³ troca o raio e a altura: (1/3)π · 64 · 6.",
      v: { i: () => { const arco = integra(() => 10, 0, (216 * PI) / 180); const r = arco / (2 * PI); const h = bissecao((h) => Math.hypot(r, h) - 10, 0, 10); return qual(volRev((z) => r * (1 - z / h), 0, h), o, 1e-5); } },
    };
  })(),
  (() => {
    const o = ["2/3", "1/3", "3/2", "4/3", "1/2"];
    return {
      d: "media",
      e: "Um cilindro circular reto está circunscrito a uma esfera: a esfera toca as duas bases e a superfície lateral. Qual é a razão entre o volume da esfera e o volume do cilindro?",
      o,
      x: "Se a esfera tem raio r, o cilindro tem raio r e altura 2r. Volume da esfera: (4/3)πr³. Volume do cilindro: πr² · 2r = 2πr³. A razão é (4/3)/2 = 2/3 — resultado que Arquimedes considerava a sua descoberta mais bonita, a ponto de pedir que a figura fosse gravada em seu túmulo.\n\n1/3 é a razão entre o cone e o cilindro de mesma base e mesma altura. 3/2 é a razão inversa, do cilindro para a esfera. 4/3 é só o fator da fórmula do volume da esfera. E 1/2 supõe que a esfera ocupe metade do cilindro.",
      v: { i: () => { const r = 1.3; return qual(volRev((z) => Math.sqrt(Math.max(0, r * r - z * z)), -r, r) / volRev(() => r, -r, r), o, 1e-5); } },
    };
  })(),
  (() => {
    const o = ["2√3", "√3", "4√3", "2√2", "6"];
    return {
      d: "media",
      e: "Num cubo de aresta 2, considere os três vértices ligados a um mesmo vértice V por uma aresta. Qual é a área do triângulo que tem esses três pontos como vértices?",
      o,
      x: "Com V na origem, os vizinhos são (2, 0, 0), (0, 2, 0) e (0, 0, 2). Cada lado do triângulo é uma diagonal de face do cubo, de medida 2√2, e o triângulo é equilátero. Sua área é (√3/4)(2√2)² = (√3/4) · 8 = 2√3.\n\n√3 usa lado 2, a aresta do cubo. 4√3 usa (√3/2)ℓ², esquecendo de dividir por 2 mais uma vez. 2√2 é a medida de um lado, e não a área. E 6 usa (3/4)ℓ² no lugar de (√3/4)ℓ².",
      v: { i: () => qual(areaTri([2, 0, 0], [0, 2, 0], [0, 0, 2]), o) },
    };
  })(),
  (() => {
    const o = ["9√2", "27√2", "9√2/2", "27", "18"];
    const d = 3 / Math.SQRT2;
    const Oct = [[d, 0, 0], [-d, 0, 0], [0, d, 0], [0, -d, 0], [0, 0, d], [0, 0, -d]];
    return {
      d: "media",
      e: "Qual é o volume de um octaedro regular de aresta 3?",
      o,
      x: "O octaedro regular é formado por duas pirâmides de base quadrada, unidas pela base. A base comum é um quadrado de lado 3 (área 9), e cada pirâmide tem altura igual à metade da diagonal desse quadrado, 3√2/2, porque todos os vértices distam igualmente do centro. Cada pirâmide tem volume (1/3) · 9 · 3√2/2 = 9√2/2, e o octaedro, o dobro: 9√2.\n\n27√2 esquece o fator 1/3. 9√2/2 é o volume de uma só pirâmide. 27 trata o sólido como um cubo de aresta 3. E 18 usa a aresta como altura de cada pirâmide.",
      /* oito tetraedros com vértice no centro, um por face */
      v: { i: () => { const A = arestas(Oct); if (A.length !== 12 || !perto(A[0][2], 3)) throw new Error("octaedro"); let V = 0; for (const x of [0, 1]) for (const y of [2, 3]) for (const z of [4, 5]) V += volTetra([0, 0, 0], Oct[x], Oct[y], Oct[z]); return qual(V, o); } },
    };
  })(),
  (() => {
    const o = ["40√3", "80√3", "160", "40√3/3", "20√3"];
    return {
      d: "media",
      e: "Um prisma reto tem por base um triângulo equilátero de lado 4 e altura 10. Qual é o seu volume?",
      o,
      x: "O volume do prisma é a área da base vezes a altura. A base é um triângulo equilátero de lado 4, de área (√3/4) · 16 = 4√3. Então V = 4√3 · 10 = 40√3.\n\n80√3 usa a área do triângulo sem dividir por 2 (base vezes altura, 4 · 2√3). 160 usa uma base quadrada de lado 4. 40√3/3 aplica o fator 1/3, que é de pirâmide, e não de prisma. E 20√3 divide a área da base por 2 duas vezes.",
      v: { i: () => { const base = areaTri([0, 0, 0], [4, 0, 0], [2, 2 * Math.sqrt(3), 0]); if (!perto(dist3([4, 0, 0], [2, 2 * Math.sqrt(3), 0]), 4)) throw new Error("base"); return qual(integra(() => base, 0, 10), o); } },
    };
  })(),
  (() => {
    const o = ["27π", "18π", "36π", "9π", "45π"];
    return {
      d: "media",
      e: "Qual é a área da superfície total de uma semiesfera maciça de raio 3, contando a parte curva e a base plana?",
      o,
      x: "A parte curva é metade da superfície esférica: (1/2) · 4πr² = 2π · 9 = 18π. A base plana é um círculo de raio 3, de área 9π. O total é 18π + 9π = 27π.\n\n18π conta só a parte curva. 36π é a superfície da esfera inteira. 9π é só a base plana. E 45π soma a esfera inteira com a base. A parte curva tem o dobro da área da base, 18π contra 9π, porque a superfície esférica inteira, 4πr², é quatro vezes a área do círculo máximo.",
      v: { i: () => qual(areaEsfera(3, 0, PI / 2) + integra((r) => 2 * PI * r, 0, 3), o) },
    };
  })(),
  (() => {
    const o = ["6 cm", "12 cm", "216 cm", "√72 cm", "72 cm"];
    return {
      d: "media",
      e: "Uma esfera tem volume 288π cm³. Qual é o seu raio?",
      o,
      x: "De (4/3)πr³ = 288π vem r³ = 288 · 3/4 = 216, e r = ∛216 = 6 cm.\n\n12 cm é o diâmetro. 216 cm é r³, sem a raiz cúbica. √72 cm resolve como se o volume fosse 4πr², a área da superfície (r² = 72). E 72 cm comete esse mesmo engano e ainda esquece a raiz. Conferindo: (4/3)π · 216 = 288π. Isolar r³ antes de extrair a raiz evita erros: primeiro divide-se por π, depois multiplica-se por 3/4.",
      v: { i: () => { const r = zeros((r) => volRev((z) => Math.sqrt(Math.max(0, r * r - z * z)), -r, r) / PI - 288, 1, 20, 400); if (r.length !== 1) throw new Error("raio"); return qual(r[0], o, 1e-4); } },
    };
  })(),
  (() => {
    const o = ["12", "14", "24", "36", "38"];
    /* cuboctaedro: permutações de (±1, ±1, 0) */
    const V = []; for (const s of [-1, 1]) for (const t of [-1, 1]) V.push([s, t, 0], [s, 0, t], [0, s, t]);
    return {
      d: "media",
      e: "Um poliedro convexo tem 6 faces quadrangulares e 8 faces triangulares. Quantos vértices ele tem?",
      o,
      x: "Contando as arestas pelas faces: os quadrados têm 6 · 4 = 24 lados, e os triângulos, 8 · 3 = 24. Cada aresta é lado de exatamente duas faces, então A = (24 + 24)/2 = 24. Com F = 14, a relação de Euler dá V = 2 − F + A = 2 − 14 + 24 = 12. Esse poliedro é o cuboctaedro.\n\n14 é o número de faces, e 24, o de arestas. 36 esquece que cada aresta é contada duas vezes (A = 48, e V = 2 − 14 + 48). E 38 soma faces e arestas, sem a relação de Euler.",
      /* o cuboctaedro, montado por coordenadas, tem esses números */
      v: { i: () => { const A = arestas(V).length; if (A !== 24 || 2 - V.length + A !== 14) throw new Error("cuboctaedro"); return qual(V.length, o); } },
    };
  })(),
  (() => {
    const o = ["3", "6", "√27", "27", "9"];
    return {
      d: "media",
      e: "Um cilindro equilátero — cuja altura é igual ao diâmetro da base — tem volume 54π. Qual é o raio da base?",
      o,
      x: "No cilindro equilátero, h = 2r, e o volume é πr² · 2r = 2πr³. De 2πr³ = 54π vem r³ = 27 e r = 3; a altura é 6.\n\n6 é a altura, igual ao diâmetro. √27 resolve r² = 27, esquecendo que a altura também depende de r. 27 é r³, sem a raiz cúbica. E 9 é o quadrado do raio. Conferindo: π · 3² · 6 = 54π. Nesse tipo de cilindro, a seção meridiana — o corte por um plano que contém o eixo — é um quadrado de lado 2r.",
      v: { i: () => { const r = zeros((r) => volRev(() => r, 0, 2 * r) / PI - 54, 0.5, 10, 2000); if (r.length !== 1) throw new Error("raio"); return qual(r[0], o, 1e-4); } },
    };
  })(),
  (() => {
    const o = ["6 cm", "1 cm", "3 cm", "36 cm", "216 cm"];
    return {
      d: "media",
      e: "A área total de um cubo, em cm², é numericamente igual ao seu volume, em cm³. Qual é a aresta do cubo?",
      o,
      x: "Área total 6a² e volume a³. Igualando: 6a² = a³, e, como a > 0, a = 6 cm. Conferindo: área 6 · 36 = 216 e volume 6³ = 216.\n\n1 cm daria área 6 e volume 1. 3 cm daria área 54 e volume 27. 36 cm é a área de uma face do cubo procurado, a² = 36. E 216 cm é o valor comum da área e do volume, e não a aresta. A igualdade só vale nesse caso particular: área e volume têm unidades diferentes, e a comparação é só entre os números.",
      v: { i: () => { const a = zeros((a) => 6 * a * a - a ** 3, 0.5, 100); if (a.length !== 1) throw new Error("aresta"); return qual(a[0], o); } },
    };
  })(),
  (() => {
    const o = ["6√3", "18√3", "12", "3√3", "9√3"];
    const B = intervalo(0, 5).map((k) => [2 * Math.cos((k * PI) / 3), 2 * Math.sin((k * PI) / 3), 0]);
    return {
      d: "media",
      e: "Uma pirâmide regular de base hexagonal tem aresta da base 2 e altura 3. Qual é o seu volume?",
      o,
      x: "O hexágono regular de lado 2 se divide em seis triângulos equiláteros de lado 2, cada um com área (√3/4) · 4 = √3. A base tem área 6√3, e o volume é (1/3) · 6√3 · 3 = 6√3.\n\n18√3 esquece o fator 1/3. 12 calcula cada triângulo como 2 · 2/2, tomando a altura igual ao lado. 3√3 usa só metade do hexágono. E 9√3 usa 1/2 no lugar de 1/3. O hexágono regular sempre se divide assim, porque o lado dele é igual ao raio da circunferência circunscrita.",
      /* soma de seis tetraedros: centro da base, dois vértices vizinhos e o vértice da pirâmide */
      v: { i: () => qual(B.reduce((s, p, k) => s + volTetra([0, 0, 0], p, B[(k + 1) % 6], [0, 0, 3]), 0), o) },
    };
  })(),
  (() => {
    const o = ["6π", "36π", "3π", "12π", "π"];
    return {
      d: "media",
      e: "Numa esfera de raio 3, um fuso esférico é a região da superfície compreendida entre dois semicírculos máximos que formam um ângulo de 60°. Qual é a área desse fuso?",
      o,
      x: "Um fuso de 360° seria a superfície inteira, de área 4πr² = 36π. A área do fuso é proporcional ao ângulo: 60°/360° = 1/6 da superfície, isto é, 36π/6 = 6π.\n\n36π é a superfície inteira. 3π usa 2πr² no lugar de 4πr². 12π corresponde a um fuso de 120°. E π divide 6π por 6 mais uma vez. O mesmo raciocínio vale para a cunha esférica: o volume dela é a fração 60/360 do volume da esfera.",
      v: { i: () => qual(areaEsfera(3, 0, PI, 0, PI / 3), o) },
    };
  })(),
  (() => {
    const o = ["2√3", "4", "2", "2√5", "√3"];
    return {
      d: "media",
      e: "Num cone equilátero, a geratriz é igual ao diâmetro da base. Se o raio da base mede 2, qual é a altura do cone?",
      o,
      x: "A geratriz é g = 2r = 4. A altura, o raio e a geratriz formam um triângulo retângulo: h² = g² − r² = 16 − 4 = 12, e h = 2√3. A seção meridiana — o corte por um plano que contém o eixo — é um triângulo equilátero de lado 4, e h é a altura desse triângulo.\n\n4 é a geratriz. 2 é o raio. 2√5 soma os quadrados, 16 + 4. E √3 aplica a fórmula da altura do triângulo equilátero, ℓ√3/2, com o lado 2 no lugar de 4.",
      v: { i: () => qual(bissecao((h) => dist3([0, 0, h], [2, 0, 0]) - 4, 0, 10), o) },
    };
  })(),
  (() => {
    const o = ["7/8", "1/2", "1/8", "3/4", "1/4"];
    const area = (z) => (1 - z / 12) ** 2;
    return {
      d: "media",
      e: "Uma pirâmide de altura 12 é cortada por um plano paralelo à base, a 6 unidades dela. Que fração do volume da pirâmide fica no tronco, a parte que contém a base?",
      o,
      x: "O plano passa na metade da altura, então a pirâmide pequena, acima do corte, é semelhante à original na razão 1/2. Volumes de sólidos semelhantes estão na razão do cubo: a pirâmide pequena tem (1/2)³ = 1/8 do volume, e o tronco fica com 1 − 1/8 = 7/8.\n\n1/2 supõe que o volume se divida como a altura. 1/8 é a fração da pirâmide pequena, e não a do tronco. 3/4 usa a razão das áreas, (1/2)² = 1/4, e fica com 1 − 1/4. E 1/4 é essa razão das áreas.",
      v: { i: () => qual(integra(area, 0, 6) / integra(area, 0, 12), o) },
    };
  })(),
  (() => {
    const o = ["16√3", "4√3", "64", "8√3", "24√3"];
    return {
      d: "media",
      e: "Qual é a área total da superfície de um tetraedro regular de aresta 4?",
      o,
      x: "O tetraedro regular tem 4 faces, todas triângulos equiláteros de lado 4. Cada face tem área (√3/4) · 16 = 4√3, e as quatro somam 16√3.\n\n4√3 é a área de uma só face. 64 trata cada face como um quadrado de lado 4. 8√3 conta só duas faces. E 24√3 conta seis faces, como num cubo. Conferindo por outro caminho: a altura de cada face é 4√3/2 = 2√3, e a área de cada uma é 4 · 2√3/2 = 4√3.",
      v: { i: () => { const [A, B, C, D] = tetra(4); return qual(areaTri(A, B, C) + areaTri(A, B, D) + areaTri(A, C, D) + areaTri(B, C, D), o); } },
    };
  })(),
  (() => {
    const o = ["3", "6", "12", "15", "0"];
    const V = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]];
    return {
      d: "media",
      e: "Considerando diagonal o segmento que liga dois vértices que não estão numa mesma face, quantas diagonais tem um octaedro regular?",
      o,
      x: "O octaedro tem 6 vértices, que formam C(6, 2) = 15 pares. Desses, 12 são arestas. Os 3 pares restantes ligam vértices opostos, que não estão numa mesma face: são as 3 diagonais, e elas se cruzam no centro.\n\n6 é o número de vértices. 12 é o número de arestas. 15 conta todos os pares de vértices, inclusive os que formam arestas. E 0 supõe que todo par de vértices esteja numa mesma face, o que só ocorre no tetraedro.",
      /* faces: trios de vértices dois a dois ligados por arestas; diagonal: par que não está em nenhuma face */
      v: { i: () => { const A = arestas(V).map(([i, j]) => `${i}-${j}`); const liga = (i, j) => A.includes(`${Math.min(i, j)}-${Math.max(i, j)}`); const faces = []; for (let i = 0; i < 6; i++) for (let j = i + 1; j < 6; j++) for (let k = j + 1; k < 6; k++) if (liga(i, j) && liga(j, k) && liga(i, k)) faces.push([i, j, k]); let n = 0; for (let i = 0; i < 6; i++) for (let j = i + 1; j < 6; j++) if (!faces.some((f) => f.includes(i) && f.includes(j))) n++; return qual(n, o); } },
    };
  })(),
  (() => {
    const o = ["30√3", "10√3", "60", "15√3", "30"];
    const B = intervalo(0, 5).map((k) => [2 * Math.cos((k * PI) / 3), 2 * Math.sin((k * PI) / 3), 0]);
    return {
      d: "media",
      e: "Um prisma hexagonal regular tem aresta da base 2 e altura 5. Qual é o seu volume?",
      o,
      x: "A base é um hexágono regular de lado 2, formado por seis triângulos equiláteros de área (√3/4) · 4 = √3 cada: área da base 6√3. O volume do prisma é 6√3 · 5 = 30√3.\n\n10√3 aplica o fator 1/3, que é de pirâmide. 60 multiplica o perímetro da base, 12, pela altura, confundindo perímetro com área. 15√3 usa só metade do hexágono. E 30 conta os seis triângulos como se cada um tivesse área 1.",
      v: { i: () => { const base = areaPoligono(B); return qual(integra(() => base, 0, 5), o); } },
    };
  })(),

  /* ----------------------------------------------------------- difíceis --- */
  (() => {
    const o = ["54π", "108π", "36π", "27π", "144π"];
    const rCone = (z) => 6 * (1 - z / 12);
    return {
      d: "dificil",
      e: "Um cilindro circular reto está inscrito num cone de raio da base 6 e altura 12, com a base do cilindro apoiada na base do cone. Se o raio do cilindro é 3, qual é o volume do cilindro?",
      o,
      x: "Na seção meridiana, o cone é um triângulo de base 12 e altura 12, e o cilindro é um retângulo inscrito nele. A borda superior do cilindro toca a geratriz: à distância 3 do eixo, a superfície do cone está à altura 12 · (1 − 3/6) = 6, por semelhança de triângulos. O cilindro tem altura 6 e volume π · 9 · 6 = 54π.\n\n108π usa a altura inteira do cone, 12. 36π toma a altura do cilindro como um terço da do cone. 27π usa a altura 3, igual ao raio. E 144π é o volume do próprio cone, (1/3)π · 36 · 12.",
      v: { i: () => { const h = bissecao((z) => rCone(z) - 3, 0, 12); return qual(volRev(() => 3, 0, h), o); } },
    };
  })(),
  (() => {
    const o = ["3", "4", "6", "24/5", "8/3"];
    /* seção meridiana: geratriz pela reta 8x + 6y = 48; o centro (0, ρ) dista ρ dela */
    const distReta = (x, y) => Math.abs(8 * x + 6 * y - 48) / 10;
    return {
      d: "dificil",
      e: "Uma esfera está inscrita num cone circular reto de raio da base 6 e altura 8, tocando a base e a superfície lateral. Qual é o raio da esfera?",
      o,
      x: "Na seção meridiana, o cone é um triângulo isósceles de base 12, altura 8 e lados iguais a √(36 + 64) = 10; a esfera aparece como o círculo inscrito nele. O raio do círculo inscrito é a área dividida pelo semiperímetro: a área é 12 · 8/2 = 48, e o semiperímetro, (10 + 10 + 12)/2 = 16. Logo o raio é 48/16 = 3.\n\n4 é a metade da altura. 6 é o raio da base do cone. 24/5 é a distância do centro da base à geratriz (48/10), e não o raio da esfera. E 8/3 põe o centro da esfera no baricentro do triângulo, a um terço da altura.",
      v: { i: () => qual(bissecao((p) => distReta(0, p) - p, 0.01, 7.9), o) },
    };
  })(),
  (() => {
    const o = ["√3", "3√3", "3", "3√2/2", "2√3"];
    const P = [[3, 0, 0], [0, 3, 0], [0, 0, 3]];
    return {
      d: "dificil",
      e: "Num cubo de aresta 3, qual é a distância de um vértice V ao plano que passa pelos três vértices ligados a V por uma aresta?",
      o,
      x: "Com V na origem, os vizinhos são (3, 0, 0), (0, 3, 0) e (0, 0, 3), e o plano que os contém é x + y + z = 3. A distância da origem a esse plano é |0 + 0 + 0 − 3|/√(1 + 1 + 1) = 3/√3 = √3 — um terço da diagonal do cubo, 3√3.\n\n3√3 é a diagonal inteira do cubo. 3 é a aresta. 3√2/2 é a distância de V ao centro de uma das faces que o contêm. E 2√3 é dois terços da diagonal: a distância de V ao plano paralelo que passa pelos três vizinhos do vértice oposto.",
      v: { i: () => { const n = cruz(sub3(P[1], P[0]), sub3(P[2], P[0])); return qual(Math.abs(esc(n, sub3([0, 0, 0], P[0]))) / norma(n), o); } },
    };
  })(),
  (() => {
    const o = ["9", "36", "9√3", "18", "12"];
    return {
      d: "dificil",
      e: "Um tetraedro regular de aresta 6 é cortado por um plano paralelo a duas arestas opostas e equidistante delas. A seção é um quadrilátero. Qual é a sua área?",
      o,
      x: "O plano passa pelos pontos médios das quatro arestas que não são paralelas a ele. Cada lado da seção liga pontos médios de duas arestas de uma mesma face e mede metade da aresta paralela: 3. Como as arestas opostas de um tetraedro regular são perpendiculares, os lados da seção formam ângulos retos: a seção é um quadrado de lado 3, de área 9.\n\n36 usa lado 6, a aresta inteira. 9√3 é a área de um triângulo equilátero de lado 6. 18 dobra a área. E 12 é o perímetro da seção, e não a área.",
      /* arestas opostas AB e CD ficam fora; a seção passa pelos pontos médios de AC, AD, BC e BD */
      v: { i: () => { const [A, B, C, D] = tetra(6); const m = (p, q) => p.map((c, k) => (c + q[k]) / 2); return qual(areaPoligono([m(A, C), m(A, D), m(B, C), m(B, D)]), o); } },
    };
  })(),
  (() => {
    const o = ["√6/2", "√6", "3√6/2", "2√6", "√3"];
    return {
      d: "dificil",
      e: "Qual é o raio da esfera inscrita num tetraedro regular de aresta 6?",
      o,
      x: "O centro da esfera inscrita é o centro do tetraedro, que divide cada altura na razão 3 : 1 a partir do vértice. A altura do tetraedro de aresta 6 é 6√6/3 = 2√6; o raio inscrito é 1/4 dela: √6/2. Outra forma: volume = (1/3) · área total · r; com volume 18√2 e área total 36√3, r = 3 · 18√2/(36√3) = √6/2.\n\n√6 é metade da altura. 3√6/2 é o raio da esfera circunscrita, 3/4 da altura. 2√6 é a altura inteira. E √3 é o raio da circunferência inscrita numa face, e não o da esfera.",
      /* distância do centroide (média dos vértices) ao plano de uma face */
      v: { i: () => { const T = tetra(6); const G = [0, 1, 2].map((k) => T.reduce((s, p) => s + p[k], 0) / 4); const n = cruz(sub3(T[1], T[0]), sub3(T[2], T[0])); return qual(Math.abs(esc(n, sub3(G, T[0]))) / norma(n), o); } },
    };
  })(),
  (() => {
    const o = ["48π/5", "16π", "12π", "144π/25", "96π/5"];
    /* triângulo C(0,0), A(3,0), B(0,4); eixo: a hipotenusa AB */
    const A = [3, 0], B = [0, 4], C = [0, 0];
    const L = Math.hypot(B[0] - A[0], B[1] - A[1]), u = [(B[0] - A[0]) / L, (B[1] - A[1]) / L];
    /* no ponto do eixo a distância s de A, o raio da seção é o comprimento do segmento perpendicular ao eixo que fica dentro do triângulo */
    const raio = (s) => { const P = [A[0] + s * u[0], A[1] + s * u[1]], n = [u[1], -u[0]]; const lado = Math.sign((C[0] - P[0]) * n[0] + (C[1] - P[1]) * n[1]); const w = [n[0] * lado, n[1] * lado]; let melhor = 0; for (const [Q, R] of [[C, A], [C, B]]) { const d = [R[0] - Q[0], R[1] - Q[1]]; const det = w[0] * -d[1] - w[1] * -d[0]; if (Math.abs(det) < 1e-12) continue; const bx = Q[0] - P[0], by = Q[1] - P[1]; const t = (bx * -d[1] - by * -d[0]) / det, k = (w[0] * by - w[1] * bx) / det; if (k >= -1e-12 && k <= 1 + 1e-12 && t >= 0) melhor = Math.max(melhor, t); } return melhor; };
    return {
      d: "dificil",
      e: "Um triângulo retângulo de catetos 3 e 4 gira uma volta completa em torno da hipotenusa. Qual é o volume do sólido gerado?",
      o,
      x: "O sólido é formado por dois cones unidos pela base. O raio da base comum é a altura relativa à hipotenusa: 3 · 4/5 = 12/5. As alturas dos dois cones somam a hipotenusa, 5. O volume total é (1/3)π(12/5)² · 5 = (1/3)π · (144/25) · 5 = 48π/5.\n\n16π é o volume do cone gerado pela rotação em torno do cateto 3, (1/3)π · 16 · 3. 12π é o do cone gerado em torno do cateto 4. 144π/25 é a área da base comum dos dois cones, e não o volume. E 96π/5 dobra o volume, como se cada cone tivesse a hipotenusa inteira como altura.",
      v: { i: () => qual(integra((s) => PI * raio(s) ** 2, 0, L, 20000), o, 1e-4) },
    };
  })(),
  (() => {
    const o = ["3√3", "6√3", "3√3/2", "2√3", "6√2"];
    /* cubo [0,2]³ cortado pelo plano x + y + z = 3, perpendicular à diagonal e passando pelo centro */
    return {
      d: "dificil",
      e: "Um cubo de aresta 2 é cortado por um plano perpendicular a uma de suas diagonais, passando pelo centro do cubo. A seção é um hexágono regular. Qual é a sua área?",
      o,
      x: "O plano perpendicular à diagonal pelo centro corta seis arestas nos seus pontos médios. Dois pontos médios vizinhos da seção, como (1, 0, 2) e (0, 1, 2), distam √2: o hexágono tem lado √2. A área do hexágono regular de lado ℓ é (3√3/2)ℓ² = (3√3/2) · 2 = 3√3.\n\n6√3 é a área do hexágono de lado 2, a aresta do cubo. 3√3/2 usa lado 1. 2√3 é a área da seção que passa pelos três vizinhos de um vértice, um triângulo equilátero de lado 2√2. E 6√2 é o perímetro do hexágono.",
      /* interseção do plano com as 12 arestas do cubo */
      v: { i: () => { const V = intervalo(0, 7).map((k) => [2 * (k & 1), 2 * ((k >> 1) & 1), 2 * ((k >> 2) & 1)]); const pts = arestas(V).flatMap(([i, j]) => { const f = (p) => p[0] + p[1] + p[2] - 3; const a = f(V[i]), b = f(V[j]); if (a * b > 0 || a === b) return []; const t = a / (a - b); return [V[i].map((c, k) => c + t * (V[j][k] - c))]; }); if (pts.length !== 6) throw new Error("seção"); return qual(areaPoligono(pts), o); } },
    };
  })(),
  (() => {
    const o = ["2√15", "8", "2", "√34", "15"];
    return {
      d: "dificil",
      e: "Duas esferas, de raios 3 e 5, estão apoiadas num mesmo plano horizontal e são tangentes entre si. Qual é a distância entre os pontos em que elas tocam o plano?",
      o,
      x: "Os centros estão a alturas 3 e 5 do plano, e a distância entre eles é 3 + 5 = 8, porque as esferas são tangentes. A distância horizontal d entre os centros é a distância entre os pontos de contato, e forma um triângulo retângulo com a diferença de alturas, 2, e com a hipotenusa 8: d² = 64 − 4 = 60, e d = 2√15.\n\n8 é a distância entre os centros, e não entre os pontos de contato. 2 é a diferença dos raios. √34 calcula √(3² + 5²), que não corresponde a nenhum segmento da figura. E 15 é o produto dos raios, que aparece em d² = 4 · 3 · 5, mas não é d.",
      v: { i: () => qual(bissecao((d) => dist3([0, 0, 3], [d, 0, 5]) - 8, 0, 20), o) },
    };
  })(),
  (() => {
    const o = ["7", "15", "30", "22", "5"];
    const pent = (z) => intervalo(0, 4).map((k) => [Math.cos((2 * k * PI) / 5), Math.sin((2 * k * PI) / 5), z]);
    return {
      d: "dificil",
      e: "Um poliedro convexo tem 10 vértices, e de cada vértice partem exatamente 3 arestas. Quantas faces ele tem?",
      o,
      x: "Somando as arestas que partem de cada vértice: 10 · 3 = 30. Cada aresta liga dois vértices e foi contada duas vezes, então A = 15. Pela relação de Euler, F = 2 − V + A = 2 − 10 + 15 = 7. O prisma pentagonal é um exemplo: 10 vértices, 15 arestas e 7 faces (duas bases e cinco laterais).\n\n15 é o número de arestas. 30 esquece de dividir por 2 ao contar as arestas. 22 usa A = 30 na relação de Euler. E 5 conta só as faces laterais do prisma, sem as bases.",
      /* prisma pentagonal com arestas laterais iguais às da base: 10 vértices, cada um com 3 arestas */
      v: { i: () => { const lado = dist3(pent(0)[0], pent(0)[1]); const V = [...pent(0), ...pent(lado)]; const A = arestas(V); const grau = V.map((_, i) => A.filter(([a, b]) => a === i || b === i).length); if (!grau.every((g) => g === 3)) throw new Error("graus"); return qual(2 - V.length + A.length, o); } },
    };
  })(),
  (() => {
    const o = ["49π", "49π/4", "196π", "121π", "343π/6"];
    return {
      d: "dificil",
      e: "Um paralelepípedo retângulo de dimensões 2, 3 e 6 está inscrito numa esfera, com os oito vértices sobre ela. Qual é a área da superfície da esfera?",
      o,
      x: "A diagonal do paralelepípedo é um diâmetro da esfera: √(4 + 9 + 36) = √49 = 7, então R = 7/2. A área da superfície esférica é 4πR² = 4π · 49/4 = 49π.\n\n49π/4 esquece o fator 4 da fórmula, usando πR². 196π usa o diâmetro 7 como raio. 121π usa como diâmetro a soma das dimensões, 2 + 3 + 6 = 11. E 343π/6 é o volume da esfera, (4/3)π(7/2)³. O centro da esfera é o centro do paralelepípedo, equidistante dos oito vértices.",
      /* o centro é o centro da caixa; todos os vértices ficam à mesma distância dele */
      v: { i: () => { const V = intervalo(0, 7).map((k) => [2 * (k & 1), 3 * ((k >> 1) & 1), 6 * ((k >> 2) & 1)]); const R = V.map((p) => dist3(p, [1, 1.5, 3])); if (!R.every((r) => perto(r, R[0]))) throw new Error("não inscrito"); return qual(areaEsfera(R[0]), o); } },
    };
  })(),
];
