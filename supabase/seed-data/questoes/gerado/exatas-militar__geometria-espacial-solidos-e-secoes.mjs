/* Geometria espacial: sólidos e seções (50 questões) — exatas-militar.

   Autorais, escritas por Claude (Anthropic) em 2026-09-29 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/exatas-militar__geometria-espacial-solidos-e-secoes.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/exatas-militar__geometria-espacial-solidos-e-secoes.json. */

export const questoes = [
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "facil",
    enunciado:
      "Qual é o volume de um cubo de aresta 4 cm?",
    opcoes: [
      "16 cm³",
      "96 cm³",
      "64 cm³",
      "48 cm³",
      "12 cm³",
    ],
    correta: 2,
    explicacao:
      "O volume do cubo é a aresta elevada ao cubo: V = 4³ = 4 · 4 · 4 = 64 cm³. Pensando em cubinhos de 1 cm de aresta: cabem 4 · 4 = 16 na camada do fundo, e há 4 camadas.\n\n16 cm³ é a área de uma face, 4², e não o volume. 96 cm³ é a área total, 6 · 16, que se mede em cm². 48 cm³ é a soma das 12 arestas, 12 · 4. E 12 cm³ multiplica a aresta por 3 em vez de elevá-la ao cubo.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "facil",
    enunciado:
      "Qual é a medida da diagonal de um cubo de aresta 3?",
    opcoes: [
      "3√2",
      "9",
      "6",
      "√3",
      "3√3",
    ],
    correta: 4,
    explicacao:
      "A diagonal do cubo liga dois vértices opostos, passando pelo interior. A diagonal da base, 3√2, e a aresta vertical, 3, formam com ela um triângulo retângulo: d² = (3√2)² + 3² = 18 + 9 = 27, e d = 3√3. Em geral, a diagonal do cubo de aresta a mede a√3.\n\n3√2 é a diagonal de uma face, e não a do cubo. 9 é o quadrado da aresta. 6 soma duas arestas. E √3 esquece de multiplicar pela aresta.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "facil",
    enunciado:
      "Qual é a área total da superfície de um paralelepípedo retângulo de dimensões 2, 3 e 5?",
    opcoes: [
      "30",
      "62",
      "31",
      "124",
      "10",
    ],
    correta: 1,
    explicacao:
      "O paralelepípedo tem três pares de faces retangulares iguais: 2 × 3, 2 × 5 e 3 × 5, de áreas 6, 10 e 15. A área total é 2(6 + 10 + 15) = 2 · 31 = 62.\n\n30 é o volume, 2 · 3 · 5. 31 soma uma face de cada par e esquece que cada uma aparece duas vezes. 124 conta cada face quatro vezes. E 10 soma as três dimensões, que são comprimentos, e não áreas.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "facil",
    enunciado:
      "Qual é o volume de um cilindro circular reto de raio da base 3 e altura 5?",
    opcoes: [
      "15π",
      "45π",
      "30π",
      "75π",
      "9π",
    ],
    correta: 1,
    explicacao:
      "O volume do cilindro é a área da base vezes a altura: V = πr² · h = π · 9 · 5 = 45π.\n\n15π usa o raio sem elevar ao quadrado (π · 3 · 5). 30π é a área lateral, 2πrh, que se mede em unidades de área. 75π troca os papéis e faz π · 5² · 3. E 9π é só a área da base, sem multiplicar pela altura. O cilindro pode ser visto como uma pilha de discos iguais, de área 9π; a altura 5 diz quantas camadas de espessura 1 há.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "facil",
    enunciado:
      "Um cone circular reto tem 3 de raio da base e 4 de altura. Quanto vale o seu volume?",
    opcoes: [
      "36π",
      "15π",
      "4π",
      "12π",
      "16π",
    ],
    correta: 3,
    explicacao:
      "O volume do cone é um terço do volume do cilindro de mesma base e mesma altura: V = (1/3)πr²h = (1/3) · π · 9 · 4 = 12π.\n\n36π é o volume do cilindro correspondente, sem o fator 1/3. 15π é a área lateral, πrg, com a geratriz g = 5. 4π usa o raio sem elevar ao quadrado. E 16π usa a altura no lugar do raio: (1/3) · π · 16 · 3. É preciso o volume de três cones iguais para encher o cilindro de mesma base e mesma altura — daí o fator 1/3.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "facil",
    enunciado:
      "Qual é o volume de uma esfera de raio 3?",
    opcoes: [
      "12π",
      "108π",
      "27π",
      "9π",
      "36π",
    ],
    correta: 4,
    explicacao:
      "O volume da esfera é V = (4/3)πr³ = (4/3) · π · 27 = 36π. Por coincidência, o valor numérico é o mesmo da área da superfície, 4πr² = 36π, porque o raio é 3 — mas volume e área têm unidades diferentes.\n\n12π usa r² no lugar de r³. 108π esquece de dividir por 3. 27π esquece o fator 4/3. E 9π é a área de um círculo máximo, πr². A esfera ocupa 2/3 do cilindro que a envolve, de raio 3 e altura 6, cujo volume é 54π.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "facil",
    enunciado:
      "Um poliedro convexo tem 8 vértices e 12 arestas. Quantas faces ele tem?",
    opcoes: [
      "4",
      "6",
      "20",
      "18",
      "22",
    ],
    correta: 1,
    explicacao:
      "Pela relação de Euler, V − A + F = 2 para todo poliedro convexo. Então 8 − 12 + F = 2, e F = 6. O cubo é um exemplo: 8 vértices, 12 arestas e 6 faces.\n\n4 faz A − V e esquece a constante 2. 20 soma vértices e arestas. 18 usa V + A − F = 2, com os sinais trocados. E 22 soma vértices, arestas e a constante. A relação vale para qualquer poliedro convexo, do tetraedro (4 − 6 + 4 = 2) ao dodecaedro (20 − 30 + 12 = 2).",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "facil",
    enunciado:
      "Qual é a área da superfície de uma esfera de raio 2?",
    opcoes: [
      "16π",
      "4π",
      "32π/3",
      "8π",
      "64π",
    ],
    correta: 0,
    explicacao:
      "A área da superfície esférica é A = 4πr² = 4 · π · 4 = 16π — o quádruplo da área de um círculo máximo, πr².\n\n4π é a área de um círculo máximo, πr². 32π/3 é o volume da esfera, (4/3)πr³. 8π usa 4πr, sem elevar o raio ao quadrado. E 64π eleva o diâmetro, e não o raio: 4π · 4². Um jeito de lembrar a fórmula: a área da esfera é igual à área lateral do cilindro que a envolve, 2πr · 2r = 4πr².",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "facil",
    enunciado:
      "Qual é o volume de uma pirâmide de base quadrada com lado 6 cm e altura 5 cm?",
    opcoes: [
      "60 cm³",
      "180 cm³",
      "90 cm³",
      "10 cm³",
      "30 cm³",
    ],
    correta: 0,
    explicacao:
      "O volume da pirâmide é um terço da área da base vezes a altura: V = (1/3) · 6² · 5 = (1/3) · 36 · 5 = 60 cm³.\n\n180 cm³ é o volume do prisma de mesma base e altura, sem o fator 1/3. 90 cm³ usa 1/2 no lugar de 1/3, como na área do triângulo. 10 cm³ usa o lado sem elevar ao quadrado, (1/3) · 6 · 5. E 30 cm³ divide por 6. O fator 1/3 vale para qualquer pirâmide, qualquer que seja a forma da base: três pirâmides de mesmo volume completam um prisma triangular.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "facil",
    enunciado:
      "Qual é a área lateral de um cilindro circular reto de raio 2 e altura 7?",
    opcoes: [
      "14π",
      "36π",
      "56π",
      "4π",
      "28π",
    ],
    correta: 4,
    explicacao:
      "A superfície lateral, planificada, é um retângulo: um lado é a altura, 7, e o outro é o comprimento da circunferência da base, 2πr = 4π. A área lateral é 4π · 7 = 28π.\n\n14π usa πr no lugar de 2πr. 36π é a área total, que soma as duas bases (2 · 4π = 8π). 56π usa o diâmetro no lugar do raio na fórmula 2πrh. E 4π é só o comprimento da circunferência da base.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "facil",
    enunciado:
      "Quantas arestas tem um prisma de base hexagonal?",
    opcoes: [
      "18",
      "12",
      "6",
      "24",
      "8",
    ],
    correta: 0,
    explicacao:
      "Cada uma das duas bases hexagonais tem 6 arestas, e há 6 arestas laterais ligando os vértices correspondentes: 6 + 6 + 6 = 18. Conferindo por Euler: o prisma tem 12 vértices e 8 faces, e 12 − 18 + 8 = 2.\n\n12 conta só as arestas das duas bases. 6 conta só uma base. 24 conta as arestas laterais duas vezes. E 8 é o número de faces, e não o de arestas.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "facil",
    enunciado:
      "Se todas as arestas de um cubo forem multiplicadas por 2, por quanto fica multiplicado o seu volume?",
    opcoes: [
      "2",
      "4",
      "6",
      "16",
      "8",
    ],
    correta: 4,
    explicacao:
      "O volume depende do cubo da aresta: com aresta 2a, V = (2a)³ = 8a³, oito vezes o volume original. Em geral, ampliar um sólido por um fator k multiplica os comprimentos por k, as áreas por k² e os volumes por k³.\n\n2 supõe que o volume cresça na mesma proporção das arestas. 4 é o fator das áreas, k² = 4. 6 confunde o fator com o número de faces do cubo. E 16 usa 2⁴.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "media",
    enunciado:
      "A superfície lateral de um cone reto de raio da base 3 e altura 4 é planificada. Qual é a área dessa superfície?",
    opcoes: [
      "12π",
      "24π",
      "20π",
      "15π",
      "9π",
    ],
    correta: 3,
    explicacao:
      "A geratriz é a hipotenusa do triângulo retângulo de catetos r = 3 e h = 4: g = √(9 + 16) = 5. A área lateral do cone é πrg = π · 3 · 5 = 15π — planificada, ela é um setor circular de raio g e arco 2πr.\n\n12π usa a altura no lugar da geratriz (π · 3 · 4). 24π é a área total, que soma a base, 9π. 20π usa πhg. E 9π é só a área da base. Planificando: um setor de raio 5 cujo arco mede 6π ocupa 6π/10π = 3/5 do círculo de raio 5, e (3/5) · 25π = 15π.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "media",
    enunciado:
      "Qual é a área total de um cone circular reto de raio da base 5 e altura 12?",
    opcoes: [
      "90π",
      "65π",
      "85π",
      "130π",
      "25π",
    ],
    correta: 0,
    explicacao:
      "A geratriz é g = √(5² + 12²) = √169 = 13. A área lateral é πrg = 65π, e a da base, πr² = 25π. A área total é 65π + 25π = 90π.\n\n65π é só a área lateral. 85π usa a altura no lugar da geratriz na área lateral (60π + 25π). 130π usa 2πrg, como se fosse a área lateral de um cilindro. E 25π é só a área da base. Conferindo pela planificação: a superfície lateral é um setor de raio 13 e arco 10π, de área (1/2) · 10π · 13 = 65π.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "media",
    enunciado:
      "Um tronco de cone reto tem raios das bases 4 e 2 e altura 3. Qual é o seu volume?",
    opcoes: [
      "20π",
      "30π",
      "28π",
      "84π",
      "27π",
    ],
    correta: 2,
    explicacao:
      "O volume do tronco é V = (πh/3)(R² + Rr + r²) = (π · 3/3)(16 + 8 + 4) = 28π. Outra forma: completando o cone, o grande tem altura 6 — o raio cai de 4 para 2 em 3 unidades e chegaria a 0 em mais 3 — e volume (1/3)π · 16 · 6 = 32π; o cone retirado tem volume (1/3)π · 4 · 3 = 4π; a diferença é 28π.\n\n20π esquece o termo Rr (16 + 4). 30π multiplica a média das áreas das bases pela altura, o que superestima o volume. 84π esquece o fator 1/3. E 27π usa um cilindro com o raio médio, 3.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "media",
    enunciado:
      "Qual é o volume de um tetraedro regular de aresta 6?",
    opcoes: [
      "36√2",
      "18√2",
      "72",
      "9√3",
      "54√2",
    ],
    correta: 1,
    explicacao:
      "No tetraedro regular de aresta a, a altura é h = a√6/3 = 2√6, e a base é um triângulo equilátero de área (√3/4)a² = 9√3. O volume é (1/3) · 9√3 · 2√6 = 6√18 = 18√2. Direto pela fórmula: V = a³√2/12 = 216√2/12 = 18√2.\n\n36√2 divide a³√2 por 6, e não por 12. 72 calcula como se a base fosse um quadrado de lado 6 e a altura fosse a aresta. 9√3 é a área da base, e não o volume. E 54√2 esquece o fator 1/3.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "media",
    enunciado:
      "Uma esfera está inscrita num cubo de aresta 4, tocando as seis faces. Qual é o volume da esfera?",
    opcoes: [
      "256π/3",
      "32√3π",
      "32π/3",
      "16π",
      "8π",
    ],
    correta: 2,
    explicacao:
      "A esfera inscrita toca faces opostas, então o seu diâmetro é igual à aresta: 2r = 4, e r = 2. O volume é (4/3)π · 2³ = 32π/3, pouco mais da metade do volume do cubo, 64.\n\n256π/3 usa a aresta 4 como raio. 32√3π é o volume da esfera circunscrita, que passa pelos vértices, de raio 2√3. 16π é a área da superfície da esfera, 4πr². E 8π usa πr³, sem o fator 4/3.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "media",
    enunciado:
      "Um cubo está inscrito numa esfera de raio √3, com os oito vértices sobre a superfície. Qual é o volume do cubo?",
    opcoes: [
      "3√3",
      "24",
      "2",
      "8",
      "6√6",
    ],
    correta: 3,
    explicacao:
      "Os vértices opostos do cubo são extremos de um diâmetro da esfera, então a diagonal do cubo mede 2√3. Como a diagonal de um cubo de aresta a é a√3, a = 2, e o volume é 2³ = 8.\n\n3√3 eleva o raio ao cubo, (√3)³. 24 é a área total do cubo, 6 · 2². 2 é a aresta. E 6√6 iguala o diâmetro da esfera à diagonal de uma face, o que daria aresta √6. Repare que o centro da esfera coincide com o centro do cubo.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "media",
    enunciado:
      "Um plano corta uma esfera de raio 5 a uma distância de 3 do centro. Qual é a área da seção obtida?",
    opcoes: [
      "4π",
      "25π",
      "9π",
      "34π",
      "16π",
    ],
    correta: 4,
    explicacao:
      "A seção é um círculo. O centro da esfera, o centro da seção e um ponto da borda formam um triângulo retângulo cuja hipotenusa é o raio da esfera: r² + 3² = 5², e r = 4. A área da seção é π · 4² = 16π.\n\n4π usa o raio da seção sem elevar ao quadrado. 25π é a área de um círculo máximo, como se o plano passasse pelo centro. 9π usa a distância 3 como raio da seção. E 34π soma os quadrados, 25 + 9, em vez de subtrair.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "media",
    enunciado:
      "Um cilindro circular reto de altura 8 está inscrito numa esfera de raio 5. Qual é o volume do cilindro?",
    opcoes: [
      "72π",
      "200π",
      "24π",
      "36π",
      "128π",
    ],
    correta: 0,
    explicacao:
      "As circunferências das bases estão sobre a esfera. Do centro da esfera ao plano de cada base há metade da altura, 4; então o raio r da base satisfaz r² + 4² = 5², e r = 3. O volume é π · 9 · 8 = 72π.\n\n200π usa o raio da esfera como raio do cilindro, π · 25 · 8. 24π usa r = 3 sem elevar ao quadrado. 36π usa só a metade da altura, π · 9 · 4. E 128π toma como raio a metade da altura, 4.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "media",
    enunciado:
      "Um recipiente cilíndrico de raio 5 cm contém água. Uma esfera maciça de raio 3 cm é mergulhada por completo, sem que a água transborde. Quanto sobe o nível da água?",
    opcoes: [
      "3,6 cm",
      "1,44 cm",
      "1,08 cm",
      "6 cm",
      "2,88 cm",
    ],
    correta: 1,
    explicacao:
      "O volume de água deslocado é o volume da esfera: (4/3)π · 27 = 36π cm³. No cilindro, esse volume ocupa uma fatia de base π · 25 e altura Δh: 25π · Δh = 36π, e Δh = 36/25 = 1,44 cm.\n\n3,6 cm divide 36 por 10, usando o diâmetro no lugar de r². 1,08 cm esquece o fator 4/3 do volume da esfera (27π/25). 6 cm é o diâmetro da esfera, como se o nível subisse o tamanho dela. E 2,88 cm dobra o resultado.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "media",
    enunciado:
      "Uma pirâmide regular de base quadrada tem aresta da base 6 e altura 4. Qual é a sua área lateral?",
    opcoes: [
      "48",
      "96",
      "60",
      "120",
      "30",
    ],
    correta: 2,
    explicacao:
      "A área lateral é a soma de quatro triângulos iguais, de base 6 e altura igual ao apótema da pirâmide. O apótema vai do vértice ao ponto médio de uma aresta da base: é a hipotenusa do triângulo de catetos 4 (a altura) e 3 (metade do lado): √(16 + 9) = 5. Cada face tem área 6 · 5/2 = 15, e as quatro somam 60.\n\n48 usa a altura da pirâmide, 4, no lugar do apótema. 96 é a área total, que soma a base, 36. 120 esquece de dividir a área de cada triângulo por 2. E 30 conta só duas faces.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "media",
    enunciado:
      "Qual é a medida da diagonal de um paralelepípedo retângulo de dimensões 3, 4 e 12?",
    opcoes: [
      "13",
      "19",
      "5",
      "√19",
      "12√2",
    ],
    correta: 0,
    explicacao:
      "A diagonal do paralelepípedo é d = √(a² + b² + c²) = √(9 + 16 + 144) = √169 = 13. Ela vem de aplicar Pitágoras duas vezes: a diagonal da base é √(9 + 16) = 5, e a do sólido é √(5² + 12²) = 13.\n\n19 soma as dimensões. 5 é só a diagonal da base 3 × 4. √19 tira a raiz da soma das dimensões, sem elevar ao quadrado. E 12√2 trata o sólido como se tivesse duas dimensões iguais a 12.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "media",
    enunciado:
      "Um setor circular de raio 10 cm e ângulo central de 216° é enrolado, sem sobreposição, para formar a superfície lateral de um cone. Qual é o volume desse cone?",
    opcoes: [
      "120π cm³",
      "96π cm³",
      "288π cm³",
      "60π cm³",
      "128π cm³",
    ],
    correta: 1,
    explicacao:
      "O raio do setor vira a geratriz do cone: g = 10. O arco do setor vira a circunferência da base: (216/360) · 2π · 10 = 12π; então 2πr = 12π e r = 6. A altura é √(10² − 6²) = 8, e o volume é (1/3)π · 36 · 8 = 96π cm³.\n\n120π cm³ usa a geratriz no lugar da altura, (1/3)π · 36 · 10. 288π cm³ esquece o fator 1/3. 60π cm³ é a área lateral do cone, πrg, que nem é um volume. E 128π cm³ troca o raio e a altura: (1/3)π · 64 · 6.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "media",
    enunciado:
      "Um cilindro circular reto está circunscrito a uma esfera: a esfera toca as duas bases e a superfície lateral. Qual é a razão entre o volume da esfera e o volume do cilindro?",
    opcoes: [
      "2/3",
      "1/3",
      "3/2",
      "4/3",
      "1/2",
    ],
    correta: 0,
    explicacao:
      "Se a esfera tem raio r, o cilindro tem raio r e altura 2r. Volume da esfera: (4/3)πr³. Volume do cilindro: πr² · 2r = 2πr³. A razão é (4/3)/2 = 2/3 — resultado que Arquimedes considerava a sua descoberta mais bonita, a ponto de pedir que a figura fosse gravada em seu túmulo.\n\n1/3 é a razão entre o cone e o cilindro de mesma base e mesma altura. 3/2 é a razão inversa, do cilindro para a esfera. 4/3 é só o fator da fórmula do volume da esfera. E 1/2 supõe que a esfera ocupe metade do cilindro.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "media",
    enunciado:
      "Num cubo de aresta 2, considere os três vértices ligados a um mesmo vértice V por uma aresta. Qual é a área do triângulo que tem esses três pontos como vértices?",
    opcoes: [
      "√3",
      "2√3",
      "4√3",
      "2√2",
      "6",
    ],
    correta: 1,
    explicacao:
      "Com V na origem, os vizinhos são (2, 0, 0), (0, 2, 0) e (0, 0, 2). Cada lado do triângulo é uma diagonal de face do cubo, de medida 2√2, e o triângulo é equilátero. Sua área é (√3/4)(2√2)² = (√3/4) · 8 = 2√3.\n\n√3 usa lado 2, a aresta do cubo. 4√3 usa (√3/2)ℓ², esquecendo de dividir por 2 mais uma vez. 2√2 é a medida de um lado, e não a área. E 6 usa (3/4)ℓ² no lugar de (√3/4)ℓ².",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "media",
    enunciado:
      "Qual é o volume de um octaedro regular de aresta 3?",
    opcoes: [
      "27√2",
      "9√2/2",
      "9√2",
      "27",
      "18",
    ],
    correta: 2,
    explicacao:
      "O octaedro regular é formado por duas pirâmides de base quadrada, unidas pela base. A base comum é um quadrado de lado 3 (área 9), e cada pirâmide tem altura igual à metade da diagonal desse quadrado, 3√2/2, porque todos os vértices distam igualmente do centro. Cada pirâmide tem volume (1/3) · 9 · 3√2/2 = 9√2/2, e o octaedro, o dobro: 9√2.\n\n27√2 esquece o fator 1/3. 9√2/2 é o volume de uma só pirâmide. 27 trata o sólido como um cubo de aresta 3. E 18 usa a aresta como altura de cada pirâmide.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "media",
    enunciado:
      "Um prisma reto tem por base um triângulo equilátero de lado 4 e altura 10. Qual é o seu volume?",
    opcoes: [
      "40√3",
      "80√3",
      "160",
      "40√3/3",
      "20√3",
    ],
    correta: 0,
    explicacao:
      "O volume do prisma é a área da base vezes a altura. A base é um triângulo equilátero de lado 4, de área (√3/4) · 16 = 4√3. Então V = 4√3 · 10 = 40√3.\n\n80√3 usa a área do triângulo sem dividir por 2 (base vezes altura, 4 · 2√3). 160 usa uma base quadrada de lado 4. 40√3/3 aplica o fator 1/3, que é de pirâmide, e não de prisma. E 20√3 divide a área da base por 2 duas vezes.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "media",
    enunciado:
      "Qual é a área da superfície total de uma semiesfera maciça de raio 3, contando a parte curva e a base plana?",
    opcoes: [
      "18π",
      "36π",
      "9π",
      "27π",
      "45π",
    ],
    correta: 3,
    explicacao:
      "A parte curva é metade da superfície esférica: (1/2) · 4πr² = 2π · 9 = 18π. A base plana é um círculo de raio 3, de área 9π. O total é 18π + 9π = 27π.\n\n18π conta só a parte curva. 36π é a superfície da esfera inteira. 9π é só a base plana. E 45π soma a esfera inteira com a base. A parte curva tem o dobro da área da base, 18π contra 9π, porque a superfície esférica inteira, 4πr², é quatro vezes a área do círculo máximo.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "media",
    enunciado:
      "Uma esfera tem volume 288π cm³. Qual é o seu raio?",
    opcoes: [
      "12 cm",
      "216 cm",
      "6 cm",
      "√72 cm",
      "72 cm",
    ],
    correta: 2,
    explicacao:
      "De (4/3)πr³ = 288π vem r³ = 288 · 3/4 = 216, e r = ∛216 = 6 cm.\n\n12 cm é o diâmetro. 216 cm é r³, sem a raiz cúbica. √72 cm resolve como se o volume fosse 4πr², a área da superfície (r² = 72). E 72 cm comete esse mesmo engano e ainda esquece a raiz. Conferindo: (4/3)π · 216 = 288π. Isolar r³ antes de extrair a raiz evita erros: primeiro divide-se por π, depois multiplica-se por 3/4.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "media",
    enunciado:
      "Um poliedro convexo tem 6 faces quadrangulares e 8 faces triangulares. Quantos vértices ele tem?",
    opcoes: [
      "14",
      "24",
      "36",
      "12",
      "38",
    ],
    correta: 3,
    explicacao:
      "Contando as arestas pelas faces: os quadrados têm 6 · 4 = 24 lados, e os triângulos, 8 · 3 = 24. Cada aresta é lado de exatamente duas faces, então A = (24 + 24)/2 = 24. Com F = 14, a relação de Euler dá V = 2 − F + A = 2 − 14 + 24 = 12. Esse poliedro é o cuboctaedro.\n\n14 é o número de faces, e 24, o de arestas. 36 esquece que cada aresta é contada duas vezes (A = 48, e V = 2 − 14 + 48). E 38 soma faces e arestas, sem a relação de Euler.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "media",
    enunciado:
      "Um cilindro equilátero — cuja altura é igual ao diâmetro da base — tem volume 54π. Qual é o raio da base?",
    opcoes: [
      "6",
      "√27",
      "27",
      "9",
      "3",
    ],
    correta: 4,
    explicacao:
      "No cilindro equilátero, h = 2r, e o volume é πr² · 2r = 2πr³. De 2πr³ = 54π vem r³ = 27 e r = 3; a altura é 6.\n\n6 é a altura, igual ao diâmetro. √27 resolve r² = 27, esquecendo que a altura também depende de r. 27 é r³, sem a raiz cúbica. E 9 é o quadrado do raio. Conferindo: π · 3² · 6 = 54π. Nesse tipo de cilindro, a seção meridiana — o corte por um plano que contém o eixo — é um quadrado de lado 2r.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "media",
    enunciado:
      "A área total de um cubo, em cm², é numericamente igual ao seu volume, em cm³. Qual é a aresta do cubo?",
    opcoes: [
      "1 cm",
      "6 cm",
      "3 cm",
      "36 cm",
      "216 cm",
    ],
    correta: 1,
    explicacao:
      "Área total 6a² e volume a³. Igualando: 6a² = a³, e, como a > 0, a = 6 cm. Conferindo: área 6 · 36 = 216 e volume 6³ = 216.\n\n1 cm daria área 6 e volume 1. 3 cm daria área 54 e volume 27. 36 cm é a área de uma face do cubo procurado, a² = 36. E 216 cm é o valor comum da área e do volume, e não a aresta. A igualdade só vale nesse caso particular: área e volume têm unidades diferentes, e a comparação é só entre os números.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "media",
    enunciado:
      "Uma pirâmide regular de base hexagonal tem aresta da base 2 e altura 3. Qual é o seu volume?",
    opcoes: [
      "18√3",
      "12",
      "3√3",
      "9√3",
      "6√3",
    ],
    correta: 4,
    explicacao:
      "O hexágono regular de lado 2 se divide em seis triângulos equiláteros de lado 2, cada um com área (√3/4) · 4 = √3. A base tem área 6√3, e o volume é (1/3) · 6√3 · 3 = 6√3.\n\n18√3 esquece o fator 1/3. 12 calcula cada triângulo como 2 · 2/2, tomando a altura igual ao lado. 3√3 usa só metade do hexágono. E 9√3 usa 1/2 no lugar de 1/3. O hexágono regular sempre se divide assim, porque o lado dele é igual ao raio da circunferência circunscrita.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "media",
    enunciado:
      "Numa esfera de raio 3, um fuso esférico é a região da superfície compreendida entre dois semicírculos máximos que formam um ângulo de 60°. Qual é a área desse fuso?",
    opcoes: [
      "36π",
      "3π",
      "6π",
      "12π",
      "π",
    ],
    correta: 2,
    explicacao:
      "Um fuso de 360° seria a superfície inteira, de área 4πr² = 36π. A área do fuso é proporcional ao ângulo: 60°/360° = 1/6 da superfície, isto é, 36π/6 = 6π.\n\n36π é a superfície inteira. 3π usa 2πr² no lugar de 4πr². 12π corresponde a um fuso de 120°. E π divide 6π por 6 mais uma vez. O mesmo raciocínio vale para a cunha esférica: o volume dela é a fração 60/360 do volume da esfera.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "media",
    enunciado:
      "Num cone equilátero, a geratriz é igual ao diâmetro da base. Se o raio da base mede 2, qual é a altura do cone?",
    opcoes: [
      "4",
      "2",
      "2√5",
      "2√3",
      "√3",
    ],
    correta: 3,
    explicacao:
      "A geratriz é g = 2r = 4. A altura, o raio e a geratriz formam um triângulo retângulo: h² = g² − r² = 16 − 4 = 12, e h = 2√3. A seção meridiana — o corte por um plano que contém o eixo — é um triângulo equilátero de lado 4, e h é a altura desse triângulo.\n\n4 é a geratriz. 2 é o raio. 2√5 soma os quadrados, 16 + 4. E √3 aplica a fórmula da altura do triângulo equilátero, ℓ√3/2, com o lado 2 no lugar de 4.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "media",
    enunciado:
      "Uma pirâmide de altura 12 é cortada por um plano paralelo à base, a 6 unidades dela. Que fração do volume da pirâmide fica no tronco, a parte que contém a base?",
    opcoes: [
      "1/2",
      "1/8",
      "7/8",
      "3/4",
      "1/4",
    ],
    correta: 2,
    explicacao:
      "O plano passa na metade da altura, então a pirâmide pequena, acima do corte, é semelhante à original na razão 1/2. Volumes de sólidos semelhantes estão na razão do cubo: a pirâmide pequena tem (1/2)³ = 1/8 do volume, e o tronco fica com 1 − 1/8 = 7/8.\n\n1/2 supõe que o volume se divida como a altura. 1/8 é a fração da pirâmide pequena, e não a do tronco. 3/4 usa a razão das áreas, (1/2)² = 1/4, e fica com 1 − 1/4. E 1/4 é essa razão das áreas.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "media",
    enunciado:
      "Qual é a área total da superfície de um tetraedro regular de aresta 4?",
    opcoes: [
      "4√3",
      "64",
      "8√3",
      "24√3",
      "16√3",
    ],
    correta: 4,
    explicacao:
      "O tetraedro regular tem 4 faces, todas triângulos equiláteros de lado 4. Cada face tem área (√3/4) · 16 = 4√3, e as quatro somam 16√3.\n\n4√3 é a área de uma só face. 64 trata cada face como um quadrado de lado 4. 8√3 conta só duas faces. E 24√3 conta seis faces, como num cubo. Conferindo por outro caminho: a altura de cada face é 4√3/2 = 2√3, e a área de cada uma é 4 · 2√3/2 = 4√3.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "media",
    enunciado:
      "Considerando diagonal o segmento que liga dois vértices que não estão numa mesma face, quantas diagonais tem um octaedro regular?",
    opcoes: [
      "6",
      "3",
      "12",
      "15",
      "0",
    ],
    correta: 1,
    explicacao:
      "O octaedro tem 6 vértices, que formam C(6, 2) = 15 pares. Desses, 12 são arestas. Os 3 pares restantes ligam vértices opostos, que não estão numa mesma face: são as 3 diagonais, e elas se cruzam no centro.\n\n6 é o número de vértices. 12 é o número de arestas. 15 conta todos os pares de vértices, inclusive os que formam arestas. E 0 supõe que todo par de vértices esteja numa mesma face, o que só ocorre no tetraedro.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "media",
    enunciado:
      "Um prisma hexagonal regular tem aresta da base 2 e altura 5. Qual é o seu volume?",
    opcoes: [
      "10√3",
      "60",
      "15√3",
      "30√3",
      "30",
    ],
    correta: 3,
    explicacao:
      "A base é um hexágono regular de lado 2, formado por seis triângulos equiláteros de área (√3/4) · 4 = √3 cada: área da base 6√3. O volume do prisma é 6√3 · 5 = 30√3.\n\n10√3 aplica o fator 1/3, que é de pirâmide. 60 multiplica o perímetro da base, 12, pela altura, confundindo perímetro com área. 15√3 usa só metade do hexágono. E 30 conta os seis triângulos como se cada um tivesse área 1.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "dificil",
    enunciado:
      "Um cilindro circular reto está inscrito num cone de raio da base 6 e altura 12, com a base do cilindro apoiada na base do cone. Se o raio do cilindro é 3, qual é o volume do cilindro?",
    opcoes: [
      "108π",
      "36π",
      "27π",
      "144π",
      "54π",
    ],
    correta: 4,
    explicacao:
      "Na seção meridiana, o cone é um triângulo de base 12 e altura 12, e o cilindro é um retângulo inscrito nele. A borda superior do cilindro toca a geratriz: à distância 3 do eixo, a superfície do cone está à altura 12 · (1 − 3/6) = 6, por semelhança de triângulos. O cilindro tem altura 6 e volume π · 9 · 6 = 54π.\n\n108π usa a altura inteira do cone, 12. 36π toma a altura do cilindro como um terço da do cone. 27π usa a altura 3, igual ao raio. E 144π é o volume do próprio cone, (1/3)π · 36 · 12.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "dificil",
    enunciado:
      "Uma esfera está inscrita num cone circular reto de raio da base 6 e altura 8, tocando a base e a superfície lateral. Qual é o raio da esfera?",
    opcoes: [
      "4",
      "6",
      "3",
      "24/5",
      "8/3",
    ],
    correta: 2,
    explicacao:
      "Na seção meridiana, o cone é um triângulo isósceles de base 12, altura 8 e lados iguais a √(36 + 64) = 10; a esfera aparece como o círculo inscrito nele. O raio do círculo inscrito é a área dividida pelo semiperímetro: a área é 12 · 8/2 = 48, e o semiperímetro, (10 + 10 + 12)/2 = 16. Logo o raio é 48/16 = 3.\n\n4 é a metade da altura. 6 é o raio da base do cone. 24/5 é a distância do centro da base à geratriz (48/10), e não o raio da esfera. E 8/3 põe o centro da esfera no baricentro do triângulo, a um terço da altura.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "dificil",
    enunciado:
      "Num cubo de aresta 3, qual é a distância de um vértice V ao plano que passa pelos três vértices ligados a V por uma aresta?",
    opcoes: [
      "3√3",
      "3",
      "3√2/2",
      "√3",
      "2√3",
    ],
    correta: 3,
    explicacao:
      "Com V na origem, os vizinhos são (3, 0, 0), (0, 3, 0) e (0, 0, 3), e o plano que os contém é x + y + z = 3. A distância da origem a esse plano é |0 + 0 + 0 − 3|/√(1 + 1 + 1) = 3/√3 = √3 — um terço da diagonal do cubo, 3√3.\n\n3√3 é a diagonal inteira do cubo. 3 é a aresta. 3√2/2 é a distância de V ao centro de uma das faces que o contêm. E 2√3 é dois terços da diagonal: a distância de V ao plano paralelo que passa pelos três vizinhos do vértice oposto.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "dificil",
    enunciado:
      "Um tetraedro regular de aresta 6 é cortado por um plano paralelo a duas arestas opostas e equidistante delas. A seção é um quadrilátero. Qual é a sua área?",
    opcoes: [
      "36",
      "9√3",
      "9",
      "18",
      "12",
    ],
    correta: 2,
    explicacao:
      "O plano passa pelos pontos médios das quatro arestas que não são paralelas a ele. Cada lado da seção liga pontos médios de duas arestas de uma mesma face e mede metade da aresta paralela: 3. Como as arestas opostas de um tetraedro regular são perpendiculares, os lados da seção formam ângulos retos: a seção é um quadrado de lado 3, de área 9.\n\n36 usa lado 6, a aresta inteira. 9√3 é a área de um triângulo equilátero de lado 6. 18 dobra a área. E 12 é o perímetro da seção, e não a área.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "dificil",
    enunciado:
      "Qual é o raio da esfera inscrita num tetraedro regular de aresta 6?",
    opcoes: [
      "√6/2",
      "√6",
      "3√6/2",
      "2√6",
      "√3",
    ],
    correta: 0,
    explicacao:
      "O centro da esfera inscrita é o centro do tetraedro, que divide cada altura na razão 3 : 1 a partir do vértice. A altura do tetraedro de aresta 6 é 6√6/3 = 2√6; o raio inscrito é 1/4 dela: √6/2. Outra forma: volume = (1/3) · área total · r; com volume 18√2 e área total 36√3, r = 3 · 18√2/(36√3) = √6/2.\n\n√6 é metade da altura. 3√6/2 é o raio da esfera circunscrita, 3/4 da altura. 2√6 é a altura inteira. E √3 é o raio da circunferência inscrita numa face, e não o da esfera.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "dificil",
    enunciado:
      "Um triângulo retângulo de catetos 3 e 4 gira uma volta completa em torno da hipotenusa. Qual é o volume do sólido gerado?",
    opcoes: [
      "16π",
      "12π",
      "144π/25",
      "48π/5",
      "96π/5",
    ],
    correta: 3,
    explicacao:
      "O sólido é formado por dois cones unidos pela base. O raio da base comum é a altura relativa à hipotenusa: 3 · 4/5 = 12/5. As alturas dos dois cones somam a hipotenusa, 5. O volume total é (1/3)π(12/5)² · 5 = (1/3)π · (144/25) · 5 = 48π/5.\n\n16π é o volume do cone gerado pela rotação em torno do cateto 3, (1/3)π · 16 · 3. 12π é o do cone gerado em torno do cateto 4. 144π/25 é a área da base comum dos dois cones, e não o volume. E 96π/5 dobra o volume, como se cada cone tivesse a hipotenusa inteira como altura.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "dificil",
    enunciado:
      "Um cubo de aresta 2 é cortado por um plano perpendicular a uma de suas diagonais, passando pelo centro do cubo. A seção é um hexágono regular. Qual é a sua área?",
    opcoes: [
      "6√3",
      "3√3/2",
      "2√3",
      "6√2",
      "3√3",
    ],
    correta: 4,
    explicacao:
      "O plano perpendicular à diagonal pelo centro corta seis arestas nos seus pontos médios. Dois pontos médios vizinhos da seção, como (1, 0, 2) e (0, 1, 2), distam √2: o hexágono tem lado √2. A área do hexágono regular de lado ℓ é (3√3/2)ℓ² = (3√3/2) · 2 = 3√3.\n\n6√3 é a área do hexágono de lado 2, a aresta do cubo. 3√3/2 usa lado 1. 2√3 é a área da seção que passa pelos três vizinhos de um vértice, um triângulo equilátero de lado 2√2. E 6√2 é o perímetro do hexágono.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "dificil",
    enunciado:
      "Duas esferas, de raios 3 e 5, estão apoiadas num mesmo plano horizontal e são tangentes entre si. Qual é a distância entre os pontos em que elas tocam o plano?",
    opcoes: [
      "2√15",
      "8",
      "2",
      "√34",
      "15",
    ],
    correta: 0,
    explicacao:
      "Os centros estão a alturas 3 e 5 do plano, e a distância entre eles é 3 + 5 = 8, porque as esferas são tangentes. A distância horizontal d entre os centros é a distância entre os pontos de contato, e forma um triângulo retângulo com a diferença de alturas, 2, e com a hipotenusa 8: d² = 64 − 4 = 60, e d = 2√15.\n\n8 é a distância entre os centros, e não entre os pontos de contato. 2 é a diferença dos raios. √34 calcula √(3² + 5²), que não corresponde a nenhum segmento da figura. E 15 é o produto dos raios, que aparece em d² = 4 · 3 · 5, mas não é d.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "dificil",
    enunciado:
      "Um poliedro convexo tem 10 vértices, e de cada vértice partem exatamente 3 arestas. Quantas faces ele tem?",
    opcoes: [
      "15",
      "30",
      "22",
      "7",
      "5",
    ],
    correta: 3,
    explicacao:
      "Somando as arestas que partem de cada vértice: 10 · 3 = 30. Cada aresta liga dois vértices e foi contada duas vezes, então A = 15. Pela relação de Euler, F = 2 − V + A = 2 − 10 + 15 = 7. O prisma pentagonal é um exemplo: 10 vértices, 15 arestas e 7 faces (duas bases e cinco laterais).\n\n15 é o número de arestas. 30 esquece de dividir por 2 ao contar as arestas. 22 usa A = 30 na relação de Euler. E 5 conta só as faces laterais do prisma, sem as bases.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria espacial: sólidos e seções",
    dificuldade: "dificil",
    enunciado:
      "Um paralelepípedo retângulo de dimensões 2, 3 e 6 está inscrito numa esfera, com os oito vértices sobre ela. Qual é a área da superfície da esfera?",
    opcoes: [
      "49π/4",
      "49π",
      "196π",
      "121π",
      "343π/6",
    ],
    correta: 1,
    explicacao:
      "A diagonal do paralelepípedo é um diâmetro da esfera: √(4 + 9 + 36) = √49 = 7, então R = 7/2. A área da superfície esférica é 4πR² = 4π · 49/4 = 49π.\n\n49π/4 esquece o fator 4 da fórmula, usando πR². 196π usa o diâmetro 7 como raio. 121π usa como diâmetro a soma das dimensões, 2 + 3 + 6 = 11. E 343π/6 é o volume da esfera, (4/3)π(7/2)³. O centro da esfera é o centro do paralelepípedo, equidistante dos oito vértices.",
  },
];
