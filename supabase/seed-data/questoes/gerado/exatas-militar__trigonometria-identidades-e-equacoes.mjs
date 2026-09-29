/* Trigonometria: identidades e equações (50 questões) — exatas-militar.

   Autorais, escritas por Claude (Anthropic) em 2026-09-29 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/exatas-militar__trigonometria-identidades-e-equacoes.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/exatas-militar__trigonometria-identidades-e-equacoes.json. */

export const questoes = [
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "facil",
    enunciado:
      "Sabendo que sen x = 3/5 e que x está no 2º quadrante, qual é o valor de cos x?",
    opcoes: [
      "−4/5",
      "4/5",
      "−3/5",
      "2/5",
      "−2/5",
    ],
    correta: 0,
    explicacao:
      "Pela relação fundamental, sen²x + cos²x = 1: cos²x = 1 − 9/25 = 16/25, e cos x = ±4/5. No 2º quadrante o cosseno é negativo, então cos x = −4/5. O arco é o suplemento do arco agudo de seno 3/5 e cosseno 4/5.\n\n4/5 esquece o sinal do 2º quadrante. −3/5 repete o valor do seno com o sinal trocado. 2/5 faz 1 − 3/5, sem elevar ao quadrado — cos x = 1 − sen x não é uma identidade. E −2/5 faz a mesma conta errada e só acerta o sinal.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "facil",
    enunciado:
      "Se sen x = 1/2 e cos x = −√3/2, qual é o valor de tg x?",
    opcoes: [
      "−√3/3",
      "−√3",
      "√3/3",
      "−√3/4",
      "−1/2",
    ],
    correta: 0,
    explicacao:
      "A tangente é o quociente do seno pelo cosseno: tg x = (1/2)/(−√3/2) = −1/√3 = −√3/3, depois de racionalizar. O arco é 150°, no 2º quadrante, onde a tangente é negativa.\n\n−√3 inverte o quociente — cosseno sobre seno é a cotangente. √3/3 esquece o sinal negativo do cosseno. −√3/4 multiplica seno e cosseno em vez de dividir. E −1/2 copia o seno com o sinal do cosseno, sem fazer a divisão.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "facil",
    enunciado:
      "Reduzindo os arcos ao 1º quadrante, qual é o valor de sen 150° + cos 120°?",
    opcoes: [
      "0",
      "1",
      "−1",
      "√3",
      "1/2",
    ],
    correta: 0,
    explicacao:
      "Reduzindo ao 1º quadrante: sen 150° = sen(180° − 30°) = sen 30° = 1/2, positivo no 2º quadrante; cos 120° = −cos(180° − 120°) = −cos 60° = −1/2, negativo no 2º quadrante. A soma é 1/2 − 1/2 = 0.\n\n1 esquece o sinal negativo do cosseno no 2º quadrante. −1 erra o sinal do seno. √3 usa, nas duas parcelas, o valor √3/2, que é o seno de 60° e o cosseno de 30°. E 1/2 considera só uma das parcelas.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "facil",
    enunciado:
      "Quanto mede, em graus, um arco de 3π/4 radianos?",
    opcoes: [
      "135°",
      "270°",
      "45°",
      "67,5°",
      "240°",
    ],
    correta: 0,
    explicacao:
      "Como π radianos equivalem a 180°, basta trocar π por 180°: 3π/4 = 3 · 180°/4 = 540°/4 = 135°. É o arco do 2º quadrante que faz 45° com o semieixo negativo das abscissas.\n\n270° é 3π/2, e não 3π/4. 45° é π/4, esquecendo o fator 3. 67,5° divide por 8 em vez de 4. E 240° é 4π/3, que inverte a fração. Para converter no sentido contrário, de graus para radianos, multiplica-se por π/180°.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "facil",
    enunciado:
      "Em que quadrante fica o arco de 5π/3 radianos, e qual é o sinal do seu cosseno?",
    opcoes: [
      "4º quadrante, cosseno positivo",
      "3º quadrante, cosseno negativo",
      "4º quadrante, cosseno negativo",
      "2º quadrante, cosseno negativo",
      "1º quadrante, cosseno positivo",
    ],
    correta: 0,
    explicacao:
      "5π/3 = 300°, entre 270° e 360°: é um arco do 4º quadrante. Ali, a abscissa dos pontos do ciclo é positiva, e o cosseno também: cos 300° = cos 60° = 1/2. O seno, a ordenada, é negativo.\n\nO 3º quadrante vai de 180° a 270° e não contém 300°. “4º quadrante, cosseno negativo” acerta o quadrante, mas confunde o sinal do cosseno com o do seno. O 2º quadrante corresponderia a 2π/3 = 120°. E o 1º quadrante, a π/3 = 60°.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "facil",
    enunciado:
      "No intervalo [0, 2π), em quantos pontos a equação sen x = 1/2 é satisfeita?",
    opcoes: [
      "2",
      "1",
      "4",
      "0",
      "3",
    ],
    correta: 0,
    explicacao:
      "No ciclo trigonométrico, a reta horizontal y = 1/2 corta a circunferência em dois pontos: nos arcos π/6 (30°), no 1º quadrante, e 5π/6 (150°), no 2º, onde o seno também é positivo. São 2 soluções numa volta.\n\n1 esquece a solução do 2º quadrante. 4 conta também os arcos 7π/6 e 11π/6, onde o seno vale −1/2. 0 supõe que 1/2 esteja fora do alcance do seno, que vai de −1 a 1. E 3 inclui um arco a mais, como 13π/6, que já pertence à segunda volta.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "facil",
    enunciado:
      "Sabendo que a secante é o inverso do cosseno, qual é o valor de sec 60°?",
    opcoes: [
      "2",
      "1/2",
      "2√3/3",
      "√3/2",
      "√2",
    ],
    correta: 0,
    explicacao:
      "A secante é o inverso do cosseno: sec 60° = 1/cos 60° = 1/(1/2) = 2. Ela só é definida onde o cosseno não se anula, e seu valor absoluto é sempre maior ou igual a 1.\n\n1/2 é o próprio cos 60°, sem inverter. 2√3/3 é a cossecante de 60°, 1/sen 60°. √3/2 é o seno de 60°. E √2 é a secante de 45°, e não a de 60°. Como cos 60° = 1/2, a secante dobra: quanto menor o cosseno (em módulo), maior a secante.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "facil",
    enunciado:
      "Qual é o período da função f(x) = sen 2x?",
    opcoes: [
      "π",
      "2π",
      "4π",
      "π/2",
      "2",
    ],
    correta: 0,
    explicacao:
      "O seno repete os valores a cada 2π no argumento. Em sen 2x, o argumento 2x percorre 2π quando x percorre π: o período é 2π/2 = π. Em geral, sen(kx) tem período 2π/|k|. Conferindo: f(0) = 0, f(π/4) = 1, f(π/2) = 0, f(3π/4) = −1 e f(π) = 0 — um ciclo completo em π.\n\n2π é o período de sen x, sem o fator 2. 4π multiplica por 2 em vez de dividir. π/2 divide por 4. E 2 confunde o período com o coeficiente de x.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "facil",
    enunciado:
      "Usando a paridade das funções trigonométricas, qual é o valor de sen(−π/6)?",
    opcoes: [
      "−1/2",
      "1/2",
      "−√3/2",
      "√3/2",
      "−1/6",
    ],
    correta: 0,
    explicacao:
      "O seno é uma função ímpar: sen(−x) = −sen x. Então sen(−π/6) = −sen(π/6) = −1/2. No ciclo, o arco −π/6 é marcado no sentido horário a partir de (1, 0) e termina no 4º quadrante, onde a ordenada é negativa.\n\n1/2 esquece o sinal, como se o seno fosse par — o cosseno é que é par. −√3/2 e √3/2 usam o valor do cosseno de π/6. E −1/6 apaga o π e trata o próprio arco como se fosse o valor do seno.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "facil",
    enunciado:
      "Se cos x = 0,6, qual é o valor de cos(π − x)?",
    opcoes: [
      "−0,6",
      "0,6",
      "0,8",
      "−0,8",
      "0,4",
    ],
    correta: 0,
    explicacao:
      "Os arcos x e π − x são suplementares: no ciclo, são simétricos em relação ao eixo vertical, com a mesma ordenada e abscissas opostas. Então cos(π − x) = −cos x = −0,6. Pela fórmula da diferença: cos π cos x + sen π sen x = −cos x.\n\n0,6 esquece a troca de sinal. 0,8 e −0,8 são os valores possíveis do seno de x — mas a pergunta é sobre o cosseno. E 0,4 faz 1 − 0,6, como se o cosseno de um arco e o do seu suplemento somassem 1.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "facil",
    enunciado:
      "Qual é o valor da soma tg 45° + cotg 45°, em que cotg indica a cotangente?",
    opcoes: [
      "1",
      "2",
      "0",
      "√2",
      "2√2",
    ],
    correta: 1,
    explicacao:
      "Em 45°, seno e cosseno são iguais (√2/2), então tg 45° = sen/cos = 1 e cotg 45° = cos/sen = 1. A soma é 2.\n\n1 considera só uma das parcelas. 0 supõe que tangente e cotangente sejam opostas, mas elas são inversas uma da outra. √2 soma seno e cosseno de 45°, √2/2 + √2/2. E 2√2 soma a secante e a cossecante de 45°, √2 + √2. Em geral, tg x + cotg x = 1/(sen x cos x) = 2/sen 2x, que em 45° vale 2/1 = 2.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "facil",
    enunciado:
      "Qual é o conjunto imagem da função f(x) = 2 + 3 sen x?",
    opcoes: [
      "[−3, 3]",
      "[−1, 5]",
      "[2, 5]",
      "[1, 3]",
      "[−1, 1]",
    ],
    correta: 1,
    explicacao:
      "Como −1 ≤ sen x ≤ 1, multiplicando por 3: −3 ≤ 3 sen x ≤ 3; somando 2: −1 ≤ 2 + 3 sen x ≤ 5. A imagem é o intervalo [−1, 5]: o mínimo ocorre quando sen x = −1, e o máximo, quando sen x = 1.\n\n[−3, 3] esquece de somar 2. [2, 5] supõe sen x ≥ 0. [1, 3] soma 2 ao intervalo [−1, 1] sem multiplicar por 3. E [−1, 1] é a imagem do próprio seno. Os coeficientes funcionam assim: o 3 amplia a oscilação, e o 2 desloca a curva para cima.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "media",
    enunciado:
      "Usando 15° = 45° − 30°, qual é o valor exato de sen 15°?",
    opcoes: [
      "(√6 + √2)/4",
      "(√6 − √2)/4",
      "(√3 − 1)/2",
      "1/4",
      "√2/4",
    ],
    correta: 1,
    explicacao:
      "Escrevendo 15° = 45° − 30°: sen(45° − 30°) = sen 45° cos 30° − cos 45° sen 30° = (√2/2)(√3/2) − (√2/2)(1/2) = (√6 − √2)/4 ≈ 0,259.\n\n(√6 + √2)/4 é o cosseno de 15° (e o seno de 75°), que aparece com o sinal de mais. (√3 − 1)/2 esquece o fator √2/2 comum às duas parcelas. 1/4 divide sen 30° ao meio, como se o seno fosse proporcional ao arco. E √2/4 fica só com a segunda parcela, (√2/2)(1/2).",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "media",
    enunciado:
      "Qual é o valor do produto sen 75° · cos 75°?",
    opcoes: [
      "1/2",
      "1/4",
      "√3/4",
      "(√6 + √2)/4",
      "0",
    ],
    correta: 1,
    explicacao:
      "Pelo seno do arco duplo, sen 2a = 2 sen a cos a, então sen a cos a = (1/2) sen 2a. Com a = 75°: sen 75° cos 75° = (1/2) sen 150° = (1/2)(1/2) = 1/4. Não é preciso calcular sen 75° e cos 75° separadamente.\n\n1/2 esquece o fator 1/2 da fórmula. √3/4 usa sen 150° como se valesse √3/2, que é o seno de 60° e de 120°. (√6 + √2)/4 é o valor de sen 75° sozinho. E 0 supõe que o produto se anule, o que só acontece quando um dos fatores é zero.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "media",
    enunciado:
      "Usando 75° = 45° + 30°, qual é o valor exato de tg 75°?",
    opcoes: [
      "2 − √3",
      "2 + √3",
      "(3 + √3)/3",
      "√3 + 1",
      "√3",
    ],
    correta: 1,
    explicacao:
      "Com 75° = 45° + 30°: tg(45° + 30°) = (tg 45° + tg 30°)/(1 − tg 45° · tg 30°) = (1 + √3/3)/(1 − √3/3) = (3 + √3)/(3 − √3). Racionalizando: (3 + √3)²/(9 − 3) = (12 + 6√3)/6 = 2 + √3 ≈ 3,73.\n\n2 − √3 é a tangente de 15°. (3 + √3)/3 soma as tangentes e esquece o denominador da fórmula. √3 + 1 soma tg 60° e tg 45°, trocando 30° por 60°. E √3 é a tangente de 60°.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "media",
    enunciado:
      "Se sen x = 3/5 e x é um arco do 1º quadrante, qual é o valor de sen 2x?",
    opcoes: [
      "6/5",
      "24/25",
      "12/25",
      "7/25",
      "−24/25",
    ],
    correta: 1,
    explicacao:
      "Primeiro o cosseno: cos x = √(1 − 9/25) = 4/5, positivo no 1º quadrante. Pela fórmula do arco duplo, sen 2x = 2 sen x cos x = 2 · (3/5)(4/5) = 24/25.\n\n6/5 dobra o seno, como se sen 2x fosse 2 sen x — e passa de 1, o que é impossível para um seno. 12/25 esquece o fator 2 da fórmula. 7/25 é o valor de cos 2x = cos²x − sen²x. E −24/25 usa o cosseno negativo, que seria do 2º quadrante.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "media",
    enunciado:
      "Se cos x = 1/3, qual é o valor de cos 2x?",
    opcoes: [
      "2/3",
      "−7/9",
      "7/9",
      "−1/3",
      "1/9",
    ],
    correta: 1,
    explicacao:
      "Pela fórmula cos 2x = 2cos²x − 1 = 2 · (1/9) − 1 = 2/9 − 9/9 = −7/9. O resultado não depende do quadrante de x, porque na fórmula só entra cos²x.\n\n2/3 dobra o cosseno, como se cos 2x fosse 2 cos x. 7/9 erra o sinal, usando 1 − 2cos²x, que se parece com a fórmula em termos do seno, 1 − 2sen²x. −1/3 só troca o sinal do cosseno. E 1/9 é cos²x, o primeiro passo da conta.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "media",
    enunciado:
      "A que expressão é igual (1 − cos 2x)/sen 2x, para os valores de x em que ela está definida?",
    opcoes: [
      "cotg x",
      "tg x",
      "sen x",
      "2 tg x",
      "tg 2x",
    ],
    correta: 1,
    explicacao:
      "Com 1 − cos 2x = 2sen²x e sen 2x = 2 sen x cos x: (2sen²x)/(2 sen x cos x) = sen x/cos x = tg x. Conferindo em x = π/4: (1 − 0)/1 = 1 = tg 45°.\n\ncotg x apareceria com (1 + cos 2x)/sen 2x = 2cos²x/(2 sen x cos x). sen x esquece de dividir pelo cosseno. 2 tg x não cancela o fator 2 do numerador com o do denominador. E tg 2x mantém os arcos duplos, como se passassem inteiros para o resultado.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "media",
    enunciado:
      "Simplificando sen⁴x − cos⁴x, que expressão se obtém?",
    opcoes: [
      "cos 2x",
      "−cos 2x",
      "1",
      "sen 2x",
      "sen²x − 1",
    ],
    correta: 1,
    explicacao:
      "Fatorando como diferença de quadrados: sen⁴x − cos⁴x = (sen²x − cos²x)(sen²x + cos²x) = (sen²x − cos²x) · 1 = −(cos²x − sen²x) = −cos 2x.\n\ncos 2x erra o sinal: cos 2x é cos²x − sen²x, e não sen²x − cos²x. 1 confunde com a relação fundamental, que envolve a soma dos quadrados. sen 2x é 2 sen x cos x, que não aparece na conta. E sen²x − 1 é igual a −cos²x, e não a −cos 2x.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "media",
    enunciado:
      "Qual é o conjunto das soluções da equação 2 sen x − 1 = 0 no intervalo [0, 2π)?",
    opcoes: [
      "{π/6}",
      "{π/6, 5π/6}",
      "{π/3, 2π/3}",
      "{π/6, 7π/6}",
      "{π/6, 11π/6}",
    ],
    correta: 1,
    explicacao:
      "A equação dá sen x = 1/2. Numa volta, o seno vale 1/2 no arco π/6, do 1º quadrante, e no seu suplemento, π − π/6 = 5π/6, do 2º quadrante, onde o seno também é positivo. S = {π/6, 5π/6}.\n\n{π/6} esquece a solução do 2º quadrante. {π/3, 2π/3} usa o valor √3/2, trocando os arcos de 30° e 60°. {π/6, 7π/6} usa arcos opostos pelo centro, em que o seno troca de sinal: sen 7π/6 = −1/2. E {π/6, 11π/6} usa arcos simétricos pelo eixo horizontal, que têm o mesmo cosseno, e não o mesmo seno.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "media",
    enunciado:
      "Quantas soluções tem a equação cos 2x = cos x no intervalo [0, 2π)?",
    opcoes: [
      "2",
      "4",
      "3",
      "1",
      "6",
    ],
    correta: 2,
    explicacao:
      "Com cos 2x = 2cos²x − 1, a equação vira 2cos²x − cos x − 1 = 0, uma equação do 2º grau em cos x, de raízes 1 e −1/2. cos x = 1 dá x = 0; cos x = −1/2 dá x = 2π/3 e x = 4π/3. São 3 soluções em [0, 2π).\n\n2 esquece x = 0 (ou conta só um dos arcos de cosseno −1/2). 4 conta também x = 2π, que fica fora do intervalo aberto à direita. 1 fica só com a solução evidente, x = 0. E 6 dobra a contagem, como se cada valor do cosseno desse dois arcos — o que não vale para cos x = 1.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "media",
    enunciado:
      "No intervalo [0, 2π), para quais valores de x se tem tg x = √3?",
    opcoes: [
      "π/3 e 2π/3",
      "π/6 e 7π/6",
      "π/3 e 4π/3",
      "Apenas π/3",
      "π/3 e 5π/3",
    ],
    correta: 2,
    explicacao:
      "A tangente tem período π: se tg x = √3 em x = π/3, o mesmo vale em π/3 + π = 4π/3. Não há outros arcos numa volta, porque no 2º e no 4º quadrantes a tangente é negativa. As soluções são π/3 e 4π/3.\n\nπ/3 e 2π/3 usa o suplemento, como se faz com o seno; mas tg(2π/3) = −√3. π/6 e 7π/6 resolve tg x = √3/3. “Apenas π/3” esquece que a tangente se repete a cada π. E π/3 e 5π/3 usa o arco simétrico pelo eixo horizontal, que tem tangente −√3.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "media",
    enunciado:
      "Qual é a soma das soluções da equação sen 2x = cos x no intervalo [0, 2π)?",
    opcoes: [
      "π",
      "2π",
      "3π",
      "3π/2",
      "5π",
    ],
    correta: 2,
    explicacao:
      "Com sen 2x = 2 sen x cos x: 2 sen x cos x − cos x = 0, ou cos x (2 sen x − 1) = 0. De cos x = 0 vêm x = π/2 e 3π/2; de sen x = 1/2, x = π/6 e 5π/6. A soma é π/2 + 3π/2 + π/6 + 5π/6 = 2π + π = 3π.\n\nπ soma só as soluções de sen x = 1/2 — as de cos x = 0 se perdem quando se divide a equação por cos x. 2π soma só as de cos x = 0. 3π/2 esquece a solução 3π/2. E 5π troca as soluções de sen x = 1/2 pelas de sen x = −1/2.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "media",
    enunciado:
      "Se sen x + cos x = 1/5, qual é o valor de sen 2x?",
    opcoes: [
      "24/25",
      "1/25",
      "−24/25",
      "2/5",
      "−1/5",
    ],
    correta: 2,
    explicacao:
      "Elevando ao quadrado: sen²x + 2 sen x cos x + cos²x = 1/25. Como sen²x + cos²x = 1 e 2 sen x cos x = sen 2x: 1 + sen 2x = 1/25, e sen 2x = −24/25.\n\n24/25 erra o sinal ao isolar sen 2x. 1/25 é o quadrado da soma, sem descontar a relação fundamental. 2/5 dobra a soma, como se sen 2x = 2(sen x + cos x). E −1/5 só troca o sinal do dado. Como sen 2x é negativo, seno e cosseno de x têm sinais opostos: x está no 2º ou no 4º quadrante.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "media",
    enunciado:
      "Qual é o valor máximo da expressão 3 sen x + 4 cos x, para x real?",
    opcoes: [
      "7",
      "1",
      "5",
      "12",
      "√7",
    ],
    correta: 2,
    explicacao:
      "Escrevendo 3 sen x + 4 cos x = 5 sen(x + φ), com cos φ = 3/5 e sen φ = 4/5: como o seno vale no máximo 1, o valor máximo é 5, a raiz de 3² + 4². Ele ocorre quando sen x = 3/5 e cos x = 4/5: 3 · 3/5 + 4 · 4/5 = 9/5 + 16/5 = 5.\n\n7 soma os máximos das parcelas, 3 + 4, que não ocorrem no mesmo x — seno e cosseno não valem 1 ao mesmo tempo. 1 é o máximo do seno. 12 multiplica os coeficientes. E √7 tira a raiz da soma 3 + 4, sem elevar os coeficientes ao quadrado.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "media",
    enunciado:
      "Qual é o maior valor que o produto sen x · cos x pode assumir?",
    opcoes: [
      "1",
      "1/4",
      "1/2",
      "√2/2",
      "2",
    ],
    correta: 2,
    explicacao:
      "Pelo arco duplo, sen x cos x = (1/2) sen 2x. Como sen 2x ≤ 1, o produto é no máximo 1/2, atingido quando 2x = π/2, isto é, x = π/4: (√2/2)(√2/2) = 1/2.\n\n1 supõe que seno e cosseno possam valer 1 ao mesmo tempo, o que não acontece. 1/4 divide por 2 duas vezes. √2/2 é o valor de cada fator em x = π/4, e não o produto. E 2 inverte a fórmula, como se sen x cos x fosse 2 sen 2x.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "media",
    enunciado:
      "Transformando a soma em produto, quanto vale sen 75° + sen 15°?",
    opcoes: [
      "√2/2",
      "1",
      "√6/2",
      "√3/2",
      "(√6 + √2)/2",
    ],
    correta: 2,
    explicacao:
      "Pela fórmula de soma em produto, sen p + sen q = 2 sen((p + q)/2) cos((p − q)/2). Com p = 75° e q = 15°: 2 sen 45° cos 30° = 2 · (√2/2)(√3/2) = √6/2 ≈ 1,22. Outro caminho: sen 75° = (√6 + √2)/4 e sen 15° = (√6 − √2)/4, cuja soma é 2√6/4 = √6/2.\n\n√2/2 é só o seno de 45°, sem o fator 2 cos 30°. 1 supõe que os senos de arcos complementares somem 1 — quem soma 1 são os quadrados deles. √3/2 fica só com o cos 30°. E (√6 + √2)/2 soma sen 75° com ele mesmo, esquecendo o sen 15°.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "media",
    enunciado:
      "Se tg a = 1/2 e tg b = 1/3, qual é o valor de tg(a + b)?",
    opcoes: [
      "5/6",
      "1/6",
      "1",
      "5/7",
      "6/5",
    ],
    correta: 2,
    explicacao:
      "Pela tangente da soma: tg(a + b) = (tg a + tg b)/(1 − tg a · tg b) = (1/2 + 1/3)/(1 − 1/6) = (5/6)/(5/6) = 1. Se a e b são agudos, a + b = 45°.\n\n5/6 é só o numerador, a soma das tangentes. 1/6 é o produto das tangentes. 5/7 usa 1 + tg a · tg b no denominador, trocando o sinal da fórmula. E 6/5 divide 1 pela soma das tangentes. Conferindo com os arcos: tg a = 1/2 corresponde a cerca de 26,6°, e tg b = 1/3, a cerca de 18,4°; somados, dão 45°.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "media",
    enunciado:
      "Sabendo que sen a = 3/5 e cos b = 5/13, com a e b no 1º quadrante, qual é o valor de cos(a − b)?",
    opcoes: [
      "−16/65",
      "33/65",
      "56/65",
      "63/65",
      "16/65",
    ],
    correta: 2,
    explicacao:
      "Primeiro os valores que faltam, positivos no 1º quadrante: cos a = √(1 − 9/25) = 4/5 e sen b = √(1 − 25/169) = 12/13. Pela fórmula, cos(a − b) = cos a cos b + sen a sen b = (4/5)(5/13) + (3/5)(12/13) = 20/65 + 36/65 = 56/65.\n\n−16/65 é cos(a + b), com o sinal de menos entre as parcelas, e 16/65 é esse valor sem o sinal. 63/65 é sen(a + b). E 33/65 é o módulo de sen(a − b), que combina seno e cosseno de outro jeito.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "media",
    enunciado:
      "Qual é o conjunto das soluções da inequação sen x > 1/2 no intervalo [0, 2π)?",
    opcoes: [
      "[π/6, 5π/6]",
      "]π/6, π/2[",
      "]π/6, 5π/6[",
      "]0, π/6[",
      "]π/6, 11π/6[",
    ],
    correta: 2,
    explicacao:
      "No ciclo, sen x > 1/2 corresponde aos pontos acima da reta y = 1/2: o arco que começa em π/6 e termina em 5π/6, sem os extremos, onde o seno vale exatamente 1/2. A solução é o intervalo aberto ]π/6, 5π/6[.\n\nO intervalo fechado incluiria π/6 e 5π/6, em que sen x = 1/2 — e a desigualdade é estrita. ]π/6, π/2[ esquece a parte do 2º quadrante, onde o seno ainda é maior que 1/2. ]0, π/6[ inverte a desigualdade. E ]π/6, 11π/6[ inclui arcos do 3º e do 4º quadrantes, onde o seno é negativo.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "media",
    enunciado:
      "Qual é o valor de arcsen(1/2) + arccos(1/2)?",
    opcoes: [
      "π/3",
      "π",
      "2π/3",
      "π/2",
      "π/6",
    ],
    correta: 3,
    explicacao:
      "arcsen(1/2) é o arco de [−π/2, π/2] cujo seno é 1/2: π/6. arccos(1/2) é o arco de [0, π] cujo cosseno é 1/2: π/3. A soma é π/6 + π/3 = π/2. Em geral, arcsen t + arccos t = π/2 para todo t de [−1, 1], porque os dois arcos são complementares.\n\nπ/3 e π/6 são as parcelas isoladas. π dobra a soma. E 2π/3 soma π/3 com ele mesmo, usando o arco do cosseno nas duas parcelas.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "media",
    enunciado:
      "Qual é a maior solução da equação 2cos²x + 3 cos x + 1 = 0 no intervalo [0, 2π)?",
    opcoes: [
      "π",
      "5π/3",
      "2π/3",
      "4π/3",
      "3π/2",
    ],
    correta: 3,
    explicacao:
      "Com y = cos x: 2y² + 3y + 1 = 0, de raízes y = −1/2 e y = −1. cos x = −1 dá x = π; cos x = −1/2 dá x = 2π/3 e x = 4π/3. A maior solução em [0, 2π) é 4π/3.\n\nπ é a solução de cos x = −1, mas não a maior. 5π/3 tem cosseno +1/2, resultado de trocar o sinal da raiz. 2π/3 é a menor das soluções de cos x = −1/2. E 3π/2 tem cosseno 0, que não é raiz da equação.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "media",
    enunciado:
      "Simplificando a expressão (sec x − cos x)/tg x, qual resultado se obtém?",
    opcoes: [
      "cos x",
      "tg x",
      "1",
      "sen x",
      "sec x",
    ],
    correta: 3,
    explicacao:
      "Reduzindo ao denominador comum: sec x − cos x = 1/cos x − cos x = (1 − cos²x)/cos x = sen²x/cos x. Dividindo por tg x = sen x/cos x: (sen²x/cos x) · (cos x/sen x) = sen x.\n\ncos x aparece quando se inverte a fração errada na divisão. tg x esquece de dividir por tg x. 1 cancela seno com seno por inteiro, esquecendo o expoente 2. E sec x ignora o termo −cos x.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "media",
    enunciado:
      "Se tg(x/2) = 1/2, qual é o valor de sen x?",
    opcoes: [
      "1",
      "3/5",
      "1/5",
      "4/5",
      "2/5",
    ],
    correta: 3,
    explicacao:
      "Com t = tg(x/2), vale sen x = 2t/(1 + t²). Aqui, sen x = (2 · 1/2)/(1 + 1/4) = 1/(5/4) = 4/5. A fórmula vem de sen x = 2 sen(x/2) cos(x/2), dividindo por sen²(x/2) + cos²(x/2) = 1 e depois, em cima e embaixo, por cos²(x/2).\n\n1 dobra a tangente do arco metade, como se sen x fosse 2 tg(x/2). 3/5 é o valor de cos x = (1 − t²)/(1 + t²). 1/5 usa t² no numerador. E 2/5 esquece o fator 2 do numerador.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "media",
    enunciado:
      "A que expressão é igual sen(3π/2 + x), para todo x real?",
    opcoes: [
      "cos x",
      "−sen x",
      "sen x",
      "−cos x",
      "−1 + sen x",
    ],
    correta: 3,
    explicacao:
      "Pela fórmula do seno da soma: sen(3π/2 + x) = sen(3π/2) cos x + cos(3π/2) sen x = (−1) cos x + 0 · sen x = −cos x. Conferindo em x = 0: sen(3π/2) = −1 = −cos 0.\n\ncos x erra o sinal de sen(3π/2). −sen x e sen x mantêm a função seno, o que só aconteceria somando múltiplos de π, e não 3π/2. E −1 + sen x soma os valores, como se sen(a + b) fosse sen a + sen b.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "media",
    enunciado:
      "Transformando cos 5x + cos 3x em produto, que expressão se obtém?",
    opcoes: [
      "2cos 8x cos 2x",
      "−2 sen 4x sen x",
      "cos 8x",
      "2cos 4x cos x",
      "2cos 4x sen x",
    ],
    correta: 3,
    explicacao:
      "Pela fórmula cos p + cos q = 2 cos((p + q)/2) cos((p − q)/2), com p = 5x e q = 3x: 2 cos(8x/2) cos(2x/2) = 2 cos 4x cos x.\n\n2cos 8x cos 2x esquece de dividir por 2 a soma e a diferença dos arcos. −2 sen 4x sen x é a transformação da diferença, cos 5x − cos 3x. cos 8x soma os arcos, como se cos p + cos q fosse cos(p + q). E 2cos 4x sen x mistura a fórmula com a da soma de senos.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "media",
    enunciado:
      "Em [0, 2π), que arcos satisfazem a equação sen x + cos x = √2?",
    opcoes: [
      "π/4 e 5π/4",
      "π/4 e 3π/4",
      "π/4 e 7π/4",
      "Apenas π/4",
      "Não há solução",
    ],
    correta: 3,
    explicacao:
      "Escrevendo sen x + cos x = √2 sen(x + π/4), a equação vira sen(x + π/4) = 1, isto é, x + π/4 = π/2 + 2kπ. Em [0, 2π), só x = π/4 serve: sen 45° + cos 45° = √2/2 + √2/2 = √2. É o valor máximo de sen x + cos x, atingido uma única vez por volta.\n\nπ/4 e 5π/4 acrescenta o arco oposto, em que a soma vale −√2. π/4 e 3π/4 acrescenta o suplemento, em que a soma é 0. π/4 e 7π/4 acrescenta o simétrico em relação ao eixo horizontal, em que a soma também é 0. E “não há solução” esquece que √2 é justamente o máximo, atingido em π/4.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "media",
    enunciado:
      "Sabendo que tg x = 2, qual é o valor de tg 2x?",
    opcoes: [
      "4",
      "4/3",
      "4/5",
      "−4/3",
      "−3/5",
    ],
    correta: 3,
    explicacao:
      "Pela tangente do arco duplo: tg 2x = 2 tg x/(1 − tg²x) = 4/(1 − 4) = −4/3. O resultado negativo tem explicação: se x está no 1º quadrante com tg x = 2, x passa de 45°, e 2x passa de 90°, caindo no 2º quadrante.\n\n4 dobra a tangente, como se tg 2x fosse 2 tg x. 4/3 erra o sinal do denominador. 4/5 é o valor de sen 2x = 2t/(1 + t²), e não o de tg 2x. E −3/5 é cos 2x.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "media",
    enunciado:
      "Descontando as voltas completas, qual é o valor de cos 1020°?",
    opcoes: [
      "−1/2",
      "√3/2",
      "−√3/2",
      "1/2",
      "1",
    ],
    correta: 3,
    explicacao:
      "Descontando voltas completas: 1020° − 2 · 360° = 300°. O arco de 300° está no 4º quadrante, onde o cosseno é positivo, e seu arco de referência é 60°: cos 300° = cos 60° = 1/2.\n\n−1/2 aplica o sinal do seno, que no 4º quadrante é negativo. √3/2 e −√3/2 usam o seno de 60° no lugar do cosseno. E 1 supõe que 1020° corresponda a um número inteiro de voltas.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "media",
    enunciado:
      "Resolvendo a equação sen²x = 1/4 no intervalo [0, 2π), quantas soluções se encontram?",
    opcoes: [
      "2",
      "1",
      "8",
      "4",
      "0",
    ],
    correta: 3,
    explicacao:
      "sen²x = 1/4 significa sen x = 1/2 ou sen x = −1/2. A primeira tem as soluções π/6 e 5π/6; a segunda, 7π/6 e 11π/6. São 4 soluções numa volta, uma em cada quadrante.\n\n2 esquece a raiz negativa, sen x = −1/2. 1 fica só com π/6. 8 conta cada solução duas vezes, uma por sinal. E 0 supõe que sen²x não possa valer 1/4. Outro caminho: sen²x = 1/4 equivale a cos 2x = 1 − 2sen²x = 1/2, e o arco 2x, que dá duas voltas, encontra quatro soluções.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "dificil",
    enunciado:
      "Somando todas as soluções de 2sen²x − 3 sen x + 1 = 0 que pertencem a [0, 2π), que valor se obtém?",
    opcoes: [
      "π",
      "π/2",
      "2π",
      "5π/6",
      "3π/2",
    ],
    correta: 4,
    explicacao:
      "Com y = sen x: 2y² − 3y + 1 = 0, de raízes y = 1 e y = 1/2. sen x = 1 dá x = π/2; sen x = 1/2 dá x = π/6 e 5π/6. A soma é π/2 + π/6 + 5π/6 = π/2 + π = 3π/2.\n\nπ soma só as soluções de sen x = 1/2. π/2 fica só com a de sen x = 1. 2π conta π/2 duas vezes, como se sen x = 1 tivesse duas soluções numa volta. E 5π/6 é uma das soluções, e não a soma.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "dificil",
    enunciado:
      "Qual é o valor exato do cosseno de um arco de 36°?",
    opcoes: [
      "(√5 − 1)/4",
      "√3/2",
      "(1 + √5)/2",
      "√5/4",
      "(1 + √5)/4",
    ],
    correta: 4,
    explicacao:
      "Seja a = 36°. Como 3a = 108° e 2a = 72° são suplementares, sen 3a = sen 2a. Com sen 3a = 3 sen a − 4sen³a e sen 2a = 2 sen a cos a, dividindo por sen a ≠ 0: 3 − 4sen²a = 2cos a, ou 3 − 4(1 − cos²a) = 2cos a. Então 4cos²a − 2cos a − 1 = 0, cuja raiz positiva é cos 36° = (1 + √5)/4 ≈ 0,809.\n\n(√5 − 1)/4 ≈ 0,309 é o oposto da outra raiz e vale cos 72°. √3/2 é cos 30°. (1 + √5)/2 ≈ 1,618 é a razão áurea, maior que 1 — nenhum cosseno chega a isso; cos 36° é a metade dela. E √5/4 esquece o termo 1.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "dificil",
    enunciado:
      "Qual é o valor do produto cos 20° · cos 40° · cos 80°?",
    opcoes: [
      "1/4",
      "1/2",
      "√3/8",
      "0",
      "1/8",
    ],
    correta: 4,
    explicacao:
      "Multiplica-se e divide-se por sen 20° e aplica-se o arco duplo três vezes: sen 20° cos 20° = (1/2) sen 40°; (1/2) sen 40° cos 40° = (1/4) sen 80°; (1/4) sen 80° cos 80° = (1/8) sen 160°. Como sen 160° = sen 20°, o produto é (1/8) sen 20°/sen 20° = 1/8.\n\n1/4 e 1/2 interrompem a aplicação do arco duplo antes do fim — três fatores pedem três aplicações. √3/8 troca sen 160° por sen 60°. E 0 supõe, sem justificativa, que algum fator se anule.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "dificil",
    enunciado:
      "Qual é o valor da soma sen²1° + sen²2° + sen²3° + … + sen²89°?",
    opcoes: [
      "45",
      "89",
      "44",
      "1",
      "89/2",
    ],
    correta: 4,
    explicacao:
      "Os termos se agrupam em pares complementares: sen²k° + sen²(90° − k)° = sen²k° + cos²k° = 1. De 1° a 89°, formam-se 44 pares (1° com 89°, 2° com 88°, …, 44° com 46°), que somam 44, e sobra o termo do meio, sen²45° = 1/2. Total: 44 + 1/2 = 89/2.\n\n45 conta o termo do meio como se valesse 1. 89 supõe que cada termo valha 1. 44 esquece o termo do meio. E 1 aplica a relação fundamental à soma inteira, como se ela fosse um único par.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "dificil",
    enunciado:
      "Para que valores reais de m a equação cos 2x + sen x = m tem solução?",
    opcoes: [
      "−1 ≤ m ≤ 1",
      "−2 ≤ m ≤ 1",
      "0 ≤ m ≤ 9/8",
      "−2 ≤ m ≤ 2",
      "−2 ≤ m ≤ 9/8",
    ],
    correta: 4,
    explicacao:
      "Com cos 2x = 1 − 2sen²x e s = sen x, a equação vira m = 1 − 2s² + s, com s entre −1 e 1. A parábola f(s) = −2s² + s + 1 tem vértice em s = 1/4, onde vale 1 − 1/8 + 1/4 = 9/8, e nos extremos vale f(−1) = −2 e f(1) = 0. Sua imagem em [−1, 1] é [−2, 9/8], e a equação tem solução exatamente para esses valores de m.\n\n−1 ≤ m ≤ 1 supõe que a soma tenha a mesma imagem do seno. −2 ≤ m ≤ 1 usa como máximo o valor em s = 0, e não o do vértice. 0 ≤ m ≤ 9/8 toma o valor em s = 1 como mínimo, esquecendo s = −1. E −2 ≤ m ≤ 2 soma as imagens de cos 2x e de sen x.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "dificil",
    enunciado:
      "Qual é o valor máximo de f(x) = sen x · cos x + sen²x, para x real?",
    opcoes: [
      "√2/2",
      "3/2",
      "√2",
      "1",
      "(1 + √2)/2",
    ],
    correta: 4,
    explicacao:
      "Com sen x cos x = (1/2) sen 2x e sen²x = (1 − cos 2x)/2: f(x) = 1/2 + (1/2)(sen 2x − cos 2x) = 1/2 + (√2/2) sen(2x − π/4). O maior valor de sen(2x − π/4) é 1, então o máximo de f é 1/2 + √2/2 = (1 + √2)/2 ≈ 1,207.\n\n√2/2 esquece o termo constante 1/2. 3/2 soma o máximo de sen x cos x (1/2) com o de sen²x (1), que não ocorrem no mesmo x. √2 esquece o 1/2 e o fator 1/2 do seno. E 1 supõe que a expressão nunca passe de 1.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "dificil",
    enunciado:
      "Quais são as soluções da equação sen x + √3 cos x = 1 no intervalo [0, 2π)?",
    opcoes: [
      "π/6 e π/2",
      "π/2 e 7π/6",
      "Apenas π/2",
      "π/3 e 5π/3",
      "π/2 e 11π/6",
    ],
    correta: 4,
    explicacao:
      "Dividindo por 2: (1/2) sen x + (√3/2) cos x = 1/2, isto é, sen x cos(π/3) + cos x sen(π/3) = 1/2, ou sen(x + π/3) = 1/2. Então x + π/3 = π/6 + 2kπ ou x + π/3 = 5π/6 + 2kπ, o que dá x = −π/6 + 2kπ ou x = π/2 + 2kπ. Em [0, 2π): x = π/2 e x = 11π/6. Conferindo 11π/6: −1/2 + √3 · √3/2 = −1/2 + 3/2 = 1.\n\nπ/6 e π/2 esquece de descontar o π/3 do primeiro arco. π/2 e 7π/6 leva a solução −π/6 para dentro do intervalo somando π, e não 2π. “Apenas π/2” perde a solução que precisa ser levada para dentro do intervalo. E π/3 e 5π/3 resolve cos x = 1/2.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "dificil",
    enunciado:
      "Num triângulo ABC, tg A = 1 e tg B = 2. Qual é o valor de tg C?",
    opcoes: [
      "−3",
      "1/3",
      "2",
      "−1/3",
      "3",
    ],
    correta: 4,
    explicacao:
      "Como A + B + C = 180°, tg C = tg(180° − (A + B)) = −tg(A + B). Pela tangente da soma: tg(A + B) = (1 + 2)/(1 − 1 · 2) = 3/(−1) = −3. Logo tg C = 3. Vale a identidade dos triângulos, tg A + tg B + tg C = tg A · tg B · tg C: aqui, 1 + 2 + 3 = 1 · 2 · 3 = 6.\n\n−3 é tg(A + B), sem o sinal de menos da redução. 1/3 e −1/3 invertem esses valores. E 2 repete a tangente de B.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "dificil",
    enunciado:
      "Qual é o menor valor positivo de x para o qual sen x + sen 2x + sen 3x = 0?",
    opcoes: [
      "2π/3",
      "π/3",
      "π",
      "π/4",
      "π/2",
    ],
    correta: 4,
    explicacao:
      "Agrupando sen x + sen 3x = 2 sen 2x cos x, a equação fica 2 sen 2x cos x + sen 2x = 0, ou sen 2x (2cos x + 1) = 0. De sen 2x = 0 vem x = kπ/2, cujo menor valor positivo é π/2; de cos x = −1/2, x = 2π/3, que é maior. O menor é π/2: sen(π/2) + sen π + sen(3π/2) = 1 + 0 − 1 = 0.\n\n2π/3 é a menor solução de cos x = −1/2, mas π/2 vem antes. π/3 não é solução: dá √3/2 + √3/2 + 0 = √3. π é solução, mas não a menor. E π/4 dá √2/2 + 1 + √2/2, que não é zero.",
  },
  {
    materia: "exatas-militar",
    tema: "Trigonometria: identidades e equações",
    dificuldade: "dificil",
    enunciado:
      "Em [0, 2π), quantos valores de x satisfazem a equação sen x = cos 2x?",
    opcoes: [
      "2",
      "4",
      "1",
      "6",
      "3",
    ],
    correta: 4,
    explicacao:
      "Com cos 2x = 1 − 2sen²x: sen x = 1 − 2sen²x, ou 2sen²x + sen x − 1 = 0, de raízes sen x = 1/2 e sen x = −1. sen x = 1/2 dá π/6 e 5π/6; sen x = −1 dá só 3π/2. São 3 soluções.\n\n2 fica só com as soluções de sen x = 1/2. 4 conta duas soluções para sen x = −1, que tem uma só por volta. 1 fica só com 3π/2. E 6 supõe duas soluções para cada raiz e ainda acrescenta arcos da volta seguinte.",
  },
];
