/* Integração por partes (50 questões) — calculo.

   Autorais, escritas por Claude (Anthropic) em 2026-09-30 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/calculo__integracao-por-partes.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/calculo__integracao-por-partes.json. */

export const questoes = [
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "facil",
    enunciado:
      "Por partes, com u = x e dv = eˣ dx, qual é a integral ∫ x · eˣ dx?",
    opcoes: [
      "(x − 1)eˣ + C",
      "xeˣ + C",
      "(x + 1)eˣ + C",
      "x²eˣ/2 + C",
      "eˣ + C",
    ],
    correta: 0,
    explicacao:
      "Com u = x e dv = eˣ dx, vem du = dx e v = eˣ. A fórmula ∫ u dv = uv − ∫ v du dá xeˣ − ∫ eˣ dx = xeˣ − eˣ = (x − 1)eˣ + C. Conferindo pela regra do produto: ((x − 1)eˣ)' = eˣ + (x − 1)eˣ = xeˣ.\n\nxeˣ + C para em uv e esquece de subtrair ∫ v du. (x + 1)eˣ + C soma essa integral em vez de subtrair. x²eˣ/2 + C integra os fatores em separado, o que não vale para produtos. E eˣ + C fica só com a integral que se subtrai.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "facil",
    enunciado:
      "Qual é a fórmula da integração por partes para ∫ u dv?",
    opcoes: [
      "uv − ∫ v du",
      "uv + ∫ v du",
      "uv − ∫ u dv",
      "(∫ u dx) · (∫ dv)",
      "u'v − ∫ v du",
    ],
    correta: 0,
    explicacao:
      "A fórmula vem da regra do produto: (uv)' = u'v + uv', e integrando, uv = ∫ v du + ∫ u dv. Isolando: ∫ u dv = uv − ∫ v du. A ideia é trocar uma integral difícil por outra mais simples, escolhendo u de modo que du simplifique.\n\nuv + ∫ v du erra o sinal da integral que sobra. uv − ∫ u dv repete a integral original do lado direito, o que não resolve nada e está errado. (∫ u dx) · (∫ dv) integra os fatores em separado, o que não vale para produtos. E u'v − ∫ v du troca u por u' na parcela de fora.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "facil",
    enunciado:
      "Qual é a integral ∫ x · cos x dx, calculada por partes?",
    opcoes: [
      "x · sen x + cos x + C",
      "x · sen x − cos x + C",
      "(x²/2) · sen x + C",
      "−x · cos x + sen x + C",
      "x · cos x + C",
    ],
    correta: 0,
    explicacao:
      "Com u = x e dv = cos x dx, vem du = dx e v = sen x. Então ∫ x cos x dx = x sen x − ∫ sen x dx = x sen x + cos x + C, pois −∫ sen x dx = cos x. Conferindo: (x sen x + cos x)' = sen x + x cos x − sen x = x cos x.\n\nx · sen x − cos x + C erra o sinal da integral do seno. (x²/2) · sen x + C integra os fatores em separado. −x · cos x + sen x + C é a primitiva de x · sen x, com as funções trocadas. E x · cos x + C repete o integrando, sem integrar.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "facil",
    enunciado:
      "Para x > 0, qual é a integral ∫ x · ln x dx, com u = ln x e dv = x dx?",
    opcoes: [
      "(x²/2) ln x − x²/4 + C",
      "(x²/2) ln x + C",
      "x ln x − x + C",
      "(x²/2) ln x − x²/2 + C",
      "(x²/4) ln x + C",
    ],
    correta: 0,
    explicacao:
      "Com u = ln x e dv = x dx, vem du = dx/x e v = x²/2. Então ∫ x ln x dx = (x²/2) ln x − ∫ (x²/2)(1/x) dx = (x²/2) ln x − ∫ x/2 dx = (x²/2) ln x − x²/4 + C. O logaritmo vai para u porque a sua derivada, 1/x, simplifica o produto.\n\n(x²/2) ln x + C esquece de subtrair a integral que sobra. x ln x − x + C é a primitiva de ln x sozinho, sem o fator x. (x²/2) ln x − x²/2 + C esquece o 1/2 na integral de x/2. E (x²/4) ln x + C divide duas vezes a parcela de fora.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "facil",
    enunciado:
      "Qual é a integral ∫ x · e^(−x) dx, com u = x?",
    opcoes: [
      "−(x + 1)e^(−x) + C",
      "(x − 1)e^(−x) + C",
      "−xe^(−x) + C",
      "(x + 1)e^(−x) + C",
      "−(x − 1)e^(−x) + C",
    ],
    correta: 0,
    explicacao:
      "Com u = x e dv = e^(−x) dx, vem du = dx e v = −e^(−x). Então ∫ xe^(−x) dx = −xe^(−x) − ∫ −e^(−x) dx = −xe^(−x) − e^(−x) = −(x + 1)e^(−x) + C. O sinal de v = −e^(−x) é o ponto delicado.\n\n(x − 1)e^(−x) + C usa v = e^(−x), sem o sinal. −xe^(−x) + C para em uv. (x + 1)e^(−x) + C perde o sinal de fora. E −(x − 1)e^(−x) + C erra o sinal da integral que sobra.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "facil",
    enunciado:
      "Integrando por partes com u = x, qual resultado se obtém para ∫ x · sen x dx?",
    opcoes: [
      "−x · cos x + sen x + C",
      "x · cos x − sen x + C",
      "−x · cos x − sen x + C",
      "−(x²/2) · cos x + C",
      "x · sen x + cos x + C",
    ],
    correta: 0,
    explicacao:
      "Com u = x e dv = sen x dx, vem du = dx e v = −cos x. Então ∫ x sen x dx = −x cos x − ∫ (−cos x) dx = −x cos x + sen x + C. Conferindo: (−x cos x + sen x)' = −cos x + x sen x + cos x = x sen x.\n\nx · cos x − sen x + C troca todos os sinais. −x · cos x − sen x + C erra o sinal da integral do cosseno. −(x²/2) · cos x + C integra os fatores em separado. E x · sen x + cos x + C é a primitiva de x · cos x, com as funções trocadas.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "facil",
    enunciado:
      "Quanto vale a integral definida de x · eˣ entre x = 0 e x = 1?",
    opcoes: [
      "1",
      "e",
      "e − 1",
      "0",
      "2e − 1",
    ],
    correta: 0,
    explicacao:
      "Por partes, uma primitiva de xeˣ é (x − 1)eˣ. Então ∫₀¹ xeˣ dx = [(x − 1)eˣ]₀¹ = (0 · e) − (−1 · e⁰) = 0 + 1 = 1.\n\ne é o valor do integrando em x = 1, e não a integral. e − 1 é a integral de eˣ sozinho, sem o fator x. 0 fica só com o valor da primitiva em x = 1. E 2e − 1 usa a primitiva errada (x + 1)eˣ, que soma a integral em vez de subtrair.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "facil",
    enunciado:
      "Ao integrar ∫ x · cos x dx por partes com u = x e dv = cos x dx, quais são du e v?",
    opcoes: [
      "du = dx e v = sen x",
      "du = dx e v = −sen x",
      "du = 1 e v = cos x",
      "du = x dx e v = sen x",
      "du = dx e v = −cos x",
    ],
    correta: 0,
    explicacao:
      "du é a diferencial de u: com u = x, du = 1 · dx = dx. v é uma primitiva de dv: com dv = cos x dx, v = sen x, porque (sen x)' = cos x. A fórmula fica x sen x − ∫ sen x dx.\n\nv = −sen x erra o sinal: a derivada de −sen x é −cos x. du = 1 e v = cos x esquece o dx e toma v igual ao próprio integrando de dv, sem integrar. du = x dx confunde du com u dx. E v = −cos x é a primitiva de sen x, e não de cos x.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "facil",
    enunciado:
      "Quanto vale a integral de x · ln x entre x = 1 e x = e?",
    opcoes: [
      "(e² + 1)/4",
      "e²/4",
      "(e² − 1)/4",
      "e²/2",
      "1/4",
    ],
    correta: 0,
    explicacao:
      "Por partes, uma primitiva de x ln x é (x²/2) ln x − x²/4. Em x = e: e²/2 − e²/4 = e²/4. Em x = 1: 0 − 1/4 = −1/4. A integral vale e²/4 − (−1/4) = (e² + 1)/4 ≈ 2,1.\n\ne²/4 esquece de subtrair o valor em x = 1, que é negativo. (e² − 1)/4 subtrai 1/4 em vez de somar, errando o sinal. e²/2 fica só com a parcela (x²/2) ln x em x = e. E 1/4 fica só com o valor da primitiva em x = 1, com o sinal trocado.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "facil",
    enunciado:
      "Qual é a integral ∫ x · e^(2x) dx, com u = x e dv = e^(2x) dx?",
    opcoes: [
      "e^(2x) · (2x − 1)/4 + C",
      "e^(2x) · (x − 1)/2 + C",
      "x · e^(2x)/2 + C",
      "e^(2x) · (2x + 1)/4 + C",
      "x² · e^(2x)/4 + C",
    ],
    correta: 0,
    explicacao:
      "Com u = x, du = dx; com dv = e^(2x) dx, v = e^(2x)/2. Então ∫ xe^(2x) dx = xe^(2x)/2 − ∫ e^(2x)/2 dx = xe^(2x)/2 − e^(2x)/4 = e^(2x)(2x − 1)/4 + C.\n\ne^(2x) · (x − 1)/2 + C integra e^(2x)/2 como se fosse e^(2x)/2, esquecendo o segundo fator 1/2. x · e^(2x)/2 + C para em uv. e^(2x) · (2x + 1)/4 + C soma a integral em vez de subtrair. E x² · e^(2x)/4 + C integra os fatores em separado.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "facil",
    enunciado:
      "Para x > 0, qual é a integral ∫ ln x/x² dx, com u = ln x e dv = dx/x²?",
    opcoes: [
      "−ln x/x + C",
      "−(ln x + 1)/x + C",
      "(ln x − 1)/x + C",
      "(ln x)²/2 + C",
      "ln x/x + C",
    ],
    correta: 1,
    explicacao:
      "Com u = ln x, du = dx/x; com dv = x⁻² dx, v = −1/x. Então ∫ ln x/x² dx = −ln x/x − ∫ (−1/x)(1/x) dx = −ln x/x + ∫ x⁻² dx = −ln x/x − 1/x = −(ln x + 1)/x + C. Conferindo pela regra do quociente, a derivada de −(ln x + 1)/x é ln x/x².\n\n−ln x/x + C para em uv. (ln x − 1)/x + C erra os dois sinais. (ln x)²/2 + C é a primitiva de ln x/x, com x no denominador sem o quadrado. E ln x/x + C erra o sinal de v.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "facil",
    enunciado:
      "Por partes ou reconhecendo uma derivada, qual é ∫ (x + 1) · eˣ dx?",
    opcoes: [
      "(x + 1)eˣ + C",
      "xeˣ + C",
      "(x + 2)eˣ + C",
      "(x²/2 + x)eˣ + C",
      "eˣ + C",
    ],
    correta: 1,
    explicacao:
      "Por partes, com u = x + 1 e dv = eˣ dx: (x + 1)eˣ − ∫ eˣ dx = (x + 1)eˣ − eˣ = xeˣ + C. Há um atalho: (xeˣ)' = eˣ + xeˣ = (x + 1)eˣ, a regra do produto lida de trás para a frente.\n\n(x + 1)eˣ + C para em uv. (x + 2)eˣ + C soma a integral em vez de subtrair. (x²/2 + x)eˣ + C integra só o fator polinomial. E eˣ + C fica só com a integral que se subtrai.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "media",
    enunciado:
      "Aplicando partes duas vezes, qual é a integral ∫ x² · eˣ dx?",
    opcoes: [
      "eˣ(x² − 2x) + C",
      "eˣ(x² − 2x + 2) + C",
      "eˣ(x² + 2x + 2) + C",
      "x²eˣ + C",
      "eˣ(x² − 2) + C",
    ],
    correta: 1,
    explicacao:
      "Primeira vez, u = x²: ∫ x²eˣ dx = x²eˣ − ∫ 2xeˣ dx. Segunda vez, u = 2x: ∫ 2xeˣ dx = 2xeˣ − 2eˣ. Juntando: x²eˣ − 2xeˣ + 2eˣ = eˣ(x² − 2x + 2) + C. Cada aplicação baixa em uma unidade o grau do polinômio.\n\neˣ(x² − 2x) + C para depois da primeira aplicação e esquece a última parcela. eˣ(x² + 2x + 2) + C erra o sinal da segunda parcela. x²eˣ + C para em uv. E eˣ(x² − 2) + C perde a parcela −2xeˣ.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "media",
    enunciado:
      "Qual é a integral ∫ x² · cos x dx, que exige duas integrações por partes?",
    opcoes: [
      "x² · sen x − 2x · cos x + 2sen x + C",
      "x² · sen x + 2x · cos x − 2sen x + C",
      "x² · sen x + 2x · cos x + C",
      "(x³/3) · sen x + C",
      "x² · sen x − 2sen x + C",
    ],
    correta: 1,
    explicacao:
      "Primeira vez, u = x² e v = sen x: x² sen x − ∫ 2x sen x dx. Segunda, ∫ 2x sen x dx = −2x cos x + 2sen x. Juntando: x² sen x − (−2x cos x + 2sen x) = x² sen x + 2x cos x − 2sen x + C.\n\nx² · sen x − 2x · cos x + 2sen x + C erra o sinal ao subtrair a segunda integral. x² · sen x + 2x · cos x + C esquece a última parcela. (x³/3) · sen x + C integra os fatores em separado. E x² · sen x − 2sen x + C perde a parcela 2x cos x.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "media",
    enunciado:
      "Integrando por partes duas vezes e voltando à integral original, qual é ∫ eˣ · sen x dx?",
    opcoes: [
      "eˣ(sen x + cos x)/2 + C",
      "eˣ(sen x − cos x)/2 + C",
      "eˣ(sen x − cos x) + C",
      "−eˣ · cos x + C",
      "eˣ(cos x − sen x)/2 + C",
    ],
    correta: 1,
    explicacao:
      "Chamando I = ∫ eˣ sen x dx, com u = sen x e dv = eˣ dx: I = eˣ sen x − ∫ eˣ cos x dx. De novo, com u = cos x: ∫ eˣ cos x dx = eˣ cos x + I. Então I = eˣ sen x − eˣ cos x − I, e 2I = eˣ(sen x − cos x): I = eˣ(sen x − cos x)/2 + C.\n\neˣ(sen x + cos x)/2 + C é a primitiva de eˣ cos x. eˣ(sen x − cos x) + C esquece de dividir por 2 ao isolar I. −eˣ · cos x + C trata eˣ como constante. E eˣ(cos x − sen x)/2 + C troca o sinal do resultado.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "media",
    enunciado:
      "Com u = arctg x e dv = dx, qual é a integral ∫ arctg x dx?",
    opcoes: [
      "x · arctg x + C",
      "x · arctg x − ln(1 + x²)/2 + C",
      "x · arctg x − ln(1 + x²) + C",
      "1/(1 + x²) + C",
      "x · arctg x + ln(1 + x²)/2 + C",
    ],
    correta: 1,
    explicacao:
      "Com u = arctg x, du = dx/(1 + x²); com dv = dx, v = x. Então ∫ arctg x dx = x arctg x − ∫ x/(1 + x²) dx = x arctg x − ln(1 + x²)/2 + C. A integral que sobra sai por substituição, com w = 1 + x².\n\nx · arctg x + C para em uv. x · arctg x − ln(1 + x²) + C esquece o fator 1/2 da substituição. 1/(1 + x²) + C é a derivada de arctg x. E x · arctg x + ln(1 + x²)/2 + C soma a integral em vez de subtrair.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "media",
    enunciado:
      "Para x > 0, qual é a integral ∫ x² · ln x dx?",
    opcoes: [
      "(x³/3) ln x − x³/3 + C",
      "(x³/3) ln x − x³/9 + C",
      "(x³/3) ln x + C",
      "x²(x ln x − x) + C",
      "(x³/3) ln x + x³/9 + C",
    ],
    correta: 1,
    explicacao:
      "Com u = ln x e dv = x² dx, vem du = dx/x e v = x³/3. Então ∫ x² ln x dx = (x³/3) ln x − ∫ (x³/3)(1/x) dx = (x³/3) ln x − ∫ x²/3 dx = (x³/3) ln x − x³/9 + C.\n\n(x³/3) ln x − x³/3 + C esquece de dividir x³ por 3 na última integral. (x³/3) ln x + C para em uv. x²(x ln x − x) + C multiplica x² pela primitiva de ln x, tratando x² como constante. E (x³/3) ln x + x³/9 + C soma a integral em vez de subtrair.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "media",
    enunciado:
      "Quanto vale a integral de x · sen x entre x = 0 e x = π?",
    opcoes: [
      "0",
      "π",
      "2",
      "−π",
      "π²/2",
    ],
    correta: 1,
    explicacao:
      "Por partes, uma primitiva de x sen x é −x cos x + sen x. Em x = π: −π · (−1) + 0 = π. Em x = 0: 0 + 0 = 0. A integral vale π ≈ 3,14.\n\n0 fica só com a parcela sen x da primitiva, que se anula nos dois extremos. 2 é a integral de sen x sozinho, sem o fator x. −π erra o sinal de v = −cos x. E π²/2 integra os fatores em separado: (π²/2) vezes algo que vale 1.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "media",
    enunciado:
      "Para |x| < 1, com u = arcsen x e dv = dx, qual é a integral ∫ arcsen x dx?",
    opcoes: [
      "x · arcsen x − √(1 − x²) + C",
      "x · arcsen x + √(1 − x²) + C",
      "x · arcsen x + C",
      "1/√(1 − x²) + C",
      "arcsen x − x + C",
    ],
    correta: 1,
    explicacao:
      "Com u = arcsen x, du = dx/√(1 − x²); com dv = dx, v = x. Então ∫ arcsen x dx = x arcsen x − ∫ x/√(1 − x²) dx. A integral que sobra, por substituição com w = 1 − x², vale −√(1 − x²). Resultado: x arcsen x + √(1 − x²) + C.\n\nx · arcsen x − √(1 − x²) + C erra o sinal da integral que sobra. x · arcsen x + C para em uv. 1/√(1 − x²) + C é a derivada de arcsen x. E arcsen x − x + C troca a ordem de u e v.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "media",
    enunciado:
      "Para x > 0, qual é a primitiva mais geral de (ln x)²?",
    opcoes: [
      "x(ln x)² − 2x ln x + C",
      "x(ln x)² − 2x ln x + 2x + C",
      "(ln x)³/3 + C",
      "x(ln x)² + C",
      "x(ln x)² − 2x ln x − 2x + C",
    ],
    correta: 1,
    explicacao:
      "Com u = (ln x)² e dv = dx: du = 2 ln x · dx/x e v = x. Então ∫ (ln x)² dx = x(ln x)² − ∫ 2 ln x dx. E ∫ 2 ln x dx = 2(x ln x − x). Juntando: x(ln x)² − 2x ln x + 2x + C.\n\nx(ln x)² − 2x ln x + C esquece a última parcela, que vem da primitiva de ln x. (ln x)³/3 + C aplica a regra da potência sem o fator 1/x. x(ln x)² + C para em uv. E a última alternativa erra o sinal da parcela 2x.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "media",
    enunciado:
      "Quanto vale a integral de ln x/x² entre x = 1 e x = e?",
    opcoes: [
      "1 − 1/e",
      "2/e",
      "1 − 2/e",
      "1/2",
      "1 + 2/e",
    ],
    correta: 2,
    explicacao:
      "Por partes, uma primitiva de ln x/x² é −(ln x + 1)/x. Em x = e: −(1 + 1)/e = −2/e. Em x = 1: −(0 + 1)/1 = −1. A integral vale −2/e − (−1) = 1 − 2/e ≈ 0,26.\n\n1 − 1/e esquece a parcela −1/x da primitiva, ficando com −ln x/x. 2/e é o valor da primitiva em x = e, sem sinal e sem subtrair. 1/2 é a integral de ln x/x, com a primitiva (ln x)²/2. E 1 + 2/e erra o sinal do valor em x = e.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "media",
    enunciado:
      "Nos intervalos em que cos x ≠ 0, qual é a integral ∫ x · (sec x)² dx?",
    opcoes: [
      "x · tg x − ln|cos x| + C",
      "x · tg x + C",
      "x · tg x + ln|cos x| + C",
      "(x²/2) · tg x + C",
      "tg x + x + C",
    ],
    correta: 2,
    explicacao:
      "Com u = x e dv = (sec x)² dx, vem du = dx e v = tg x. Então ∫ x(sec x)² dx = x tg x − ∫ tg x dx = x tg x − (−ln|cos x|) = x tg x + ln|cos x| + C. A primitiva da tangente, −ln|cos x|, é a peça que falta.\n\nx · tg x − ln|cos x| + C erra o sinal da primitiva da tangente, que é −ln|cos x|. x · tg x + C para em uv. (x²/2) · tg x + C integra os fatores em separado. E tg x + x + C não sai da fórmula.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "media",
    enunciado:
      "O produto eˣ · cos x volta a aparecer depois de duas integrações por partes. Qual é a sua primitiva?",
    opcoes: [
      "eˣ(sen x − cos x)/2 + C",
      "eˣ(sen x + cos x) + C",
      "eˣ(sen x + cos x)/2 + C",
      "eˣ · sen x + C",
      "eˣ(cos x − sen x)/2 + C",
    ],
    correta: 2,
    explicacao:
      "Chamando J = ∫ eˣ cos x dx, com u = cos x e dv = eˣ dx: J = eˣ cos x + ∫ eˣ sen x dx. De novo, com u = sen x: ∫ eˣ sen x dx = eˣ sen x − J. Então J = eˣ cos x + eˣ sen x − J, e 2J = eˣ(sen x + cos x): J = eˣ(sen x + cos x)/2 + C.\n\neˣ(sen x − cos x)/2 + C é a primitiva de eˣ sen x. eˣ(sen x + cos x) + C esquece de dividir por 2. eˣ · sen x + C esquece a parcela do cosseno e a divisão. E eˣ(cos x − sen x)/2 + C erra o sinal do seno.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "media",
    enunciado:
      "Escrevendo x³ · e^(x²) = x² · (x · e^(x²)), qual é a integral ∫ x³ · e^(x²) dx?",
    opcoes: [
      "e^(x²) · x²/2 + C",
      "e^(x²) · (x² + 1)/2 + C",
      "e^(x²) · (x² − 1)/2 + C",
      "x⁴ · e^(x²)/4 + C",
      "e^(x²) · (x² − 1) + C",
    ],
    correta: 2,
    explicacao:
      "Com u = x² e dv = x e^(x²) dx: du = 2x dx e v = e^(x²)/2, por substituição. Então ∫ x³e^(x²) dx = x²e^(x²)/2 − ∫ x e^(x²) dx = x²e^(x²)/2 − e^(x²)/2 = e^(x²)(x² − 1)/2 + C.\n\ne^(x²) · x²/2 + C para em uv. e^(x²) · (x² + 1)/2 + C soma a integral em vez de subtrair. x⁴ · e^(x²)/4 + C integra os fatores em separado. E e^(x²) · (x² − 1) + C esquece o fator 1/2 de v.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "media",
    enunciado:
      "No intervalo [0, π/2], qual é o valor exato de ∫ x · cos x dx?",
    opcoes: [
      "π/2",
      "1",
      "π/2 − 1",
      "π/2 + 1",
      "−1",
    ],
    correta: 2,
    explicacao:
      "Por partes, uma primitiva de x cos x é x sen x + cos x. Em x = π/2: (π/2) · 1 + 0 = π/2. Em x = 0: 0 + 1 = 1. A integral vale π/2 − 1 ≈ 0,57. É a primitiva de x cos x obtida por partes, calculada nos extremos.\n\nπ/2 esquece de subtrair o valor em x = 0, que é 1, e não zero. 1 fica só com o valor em x = 0. π/2 + 1 soma em vez de subtrair. E −1 esquece a parcela x sen x.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "media",
    enunciado:
      "Aplicando partes três vezes (ou o método tabular), qual é a integral ∫ x³ · eˣ dx?",
    opcoes: [
      "eˣ(x³ − 3x² + 6x) + C",
      "eˣ(x³ + 3x² + 6x + 6) + C",
      "eˣ(x³ − 3x² + 6x − 6) + C",
      "x³eˣ − 3x²eˣ + C",
      "eˣ(x³ − x² + x − 1) + C",
    ],
    correta: 2,
    explicacao:
      "No método tabular, deriva-se x³ até zerar (x³, 3x², 6x, 6, 0) e integra-se eˣ repetidamente (eˣ sempre). Os produtos em diagonal, com sinais alternados +, −, +, −, dão x³eˣ − 3x²eˣ + 6xeˣ − 6eˣ = eˣ(x³ − 3x² + 6x − 6) + C.\n\neˣ(x³ − 3x² + 6x) + C para antes da última derivada, 6. eˣ(x³ + 3x² + 6x + 6) + C esquece a alternância de sinais. x³eˣ − 3x²eˣ + C para depois de duas etapas. E eˣ(x³ − x² + x − 1) + C esquece os coeficientes que as derivadas produzem.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "media",
    enunciado:
      "Como ln(x²) = 2 ln x para x > 0, o integrando x · ln(x²) vira 2x ln x. Que primitiva se obtém?",
    opcoes: [
      "x² ln x + C",
      "x² ln x − x² + C",
      "x² ln x − x²/2 + C",
      "2x ln x − 2x + C",
      "x² ln x − x²/4 + C",
    ],
    correta: 2,
    explicacao:
      "Como ln(x²) = 2 ln x, o integrando é 2x ln x. Por partes, com u = ln x e dv = 2x dx: v = x², du = dx/x, e ∫ 2x ln x dx = x² ln x − ∫ x dx = x² ln x − x²/2 + C.\n\nx² ln x + C para em uv. x² ln x − x² + C esquece de dividir x² por 2 na integral de x. 2x ln x − 2x + C é o dobro da primitiva de ln x, sem o fator x. E x² ln x − x²/4 + C usa a conta de ∫ x ln x, esquecendo o fator 2.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "media",
    enunciado:
      "Aplicando partes, com u = x e dv = eˣ dx, à integral de xeˣ de 0 a 1, que expressão se obtém?",
    opcoes: [
      "[xeˣ] de 0 a 1 + (integral de eˣ de 0 a 1)",
      "[eˣ] de 0 a 1 − (integral de xeˣ de 0 a 1)",
      "[xeˣ] de 0 a 1 − (integral de eˣ de 0 a 1)",
      "[x²eˣ/2] de 0 a 1 + (integral de x²eˣ/2 de 0 a 1)",
      "(integral de x de 0 a 1) · (integral de eˣ de 0 a 1)",
    ],
    correta: 2,
    explicacao:
      "Na versão definida, a fórmula é ∫ₐᵇ u dv = [uv]ₐᵇ − ∫ₐᵇ v du. Com u = x, du = dx, v = eˣ: ∫₀¹ xeˣ dx = [xeˣ]₀¹ − ∫₀¹ eˣ dx = e − (e − 1) = 1.\n\nSomar a integral de eˣ erra o sinal da fórmula. [eˣ] − ∫ xeˣ troca os papéis de u e v e ainda repete a integral original. A expressão com x²eˣ/2 usa u = eˣ, mas soma a integral que devia subtrair. E o produto das integrais integra os fatores em separado, o que não vale.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "media",
    enunciado:
      "Escolhendo o arco tangente como u, integre x · arctg x. Qual resultado se obtém?",
    opcoes: [
      "(x²/2) · arctg x + C",
      "(x²/2) · arctg x − x/2 + C",
      "((x² + 1) · arctg x − x)/2 + C",
      "((x² + 1) · arctg x + x)/2 + C",
      "x · arctg x − ln(1 + x²)/2 + C",
    ],
    correta: 2,
    explicacao:
      "Com u = arctg x, du = dx/(1 + x²); com dv = x dx, v = x²/2. Então ∫ x arctg x dx = (x²/2) arctg x − (1/2)∫ x²/(1 + x²) dx. Como x²/(1 + x²) = 1 − 1/(1 + x²), a integral que sobra vale x − arctg x. Juntando: ((x² + 1) arctg x − x)/2 + C.\n\n(x²/2) · arctg x + C para em uv. (x²/2) · arctg x − x/2 + C esquece a parcela arctg x/2 que vem da divisão. ((x² + 1) · arctg x + x)/2 + C erra o sinal de x. E a última alternativa é a primitiva de arctg x, sem o fator x.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "media",
    enunciado:
      "Com duas integrações por partes, calcule a área sob y = x² · eˣ entre 0 e 1. Qual é ela?",
    opcoes: [
      "e",
      "e − 1",
      "e − 2",
      "2 − e",
      "2e − 2",
    ],
    correta: 2,
    explicacao:
      "Por partes duas vezes, uma primitiva de x²eˣ é eˣ(x² − 2x + 2). Em x = 1: e(1 − 2 + 2) = e. Em x = 0: 1 · 2 = 2. A integral vale e − 2 ≈ 0,72. O valor positivo e pequeno faz sentido: o integrando vai de 0 a e no intervalo, com gráfico côncavo para cima.\n\ne esquece de subtrair o valor em x = 0, que é 2, e não zero. e − 1 é a integral de eˣ sozinho. 2 − e troca a ordem da subtração. E 2e − 2 usa a primitiva eˣ(x² + 2), sem a parcela −2x.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "media",
    enunciado:
      "Com u = ln(x² + 1) e dv = dx, qual é a integral ∫ ln(x² + 1) dx?",
    opcoes: [
      "x · ln(x² + 1) − 2x + C",
      "x · ln(x² + 1) + C",
      "2x/(x² + 1) + C",
      "x · ln(x² + 1) − 2x + 2arctg x + C",
      "x · ln(x² + 1) − 2arctg x + C",
    ],
    correta: 3,
    explicacao:
      "Com u = ln(x² + 1), du = 2x dx/(x² + 1); com dv = dx, v = x. Então ∫ ln(x² + 1) dx = x ln(x² + 1) − ∫ 2x²/(x² + 1) dx. Como 2x²/(x² + 1) = 2 − 2/(x² + 1), a integral que sobra vale 2x − 2arctg x. Resultado: x ln(x² + 1) − 2x + 2arctg x + C.\n\nx · ln(x² + 1) − 2x + C esquece a parcela do arco tangente. x · ln(x² + 1) + C para em uv. 2x/(x² + 1) + C é a derivada do integrando. E a última alternativa esquece a parcela −2x.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "media",
    enunciado:
      "Seja Iₙ a integral de xⁿ · eˣ de 0 a 1, para n ≥ 1. Qual relação de redução a integração por partes fornece?",
    opcoes: [
      "Iₙ = e + n · Iₙ₋₁",
      "Iₙ = n · Iₙ₋₁",
      "Iₙ = e − Iₙ₋₁",
      "Iₙ = e − n · Iₙ₋₁",
      "Iₙ = (e − 1) · Iₙ₋₁",
    ],
    correta: 3,
    explicacao:
      "Com u = xⁿ e dv = eˣ dx: du = nxⁿ⁻¹ dx e v = eˣ. Então Iₙ = [xⁿeˣ]₀¹ − n∫₀¹ xⁿ⁻¹eˣ dx = e − n · Iₙ₋₁. Partindo de I₀ = e − 1, dá I₁ = 1, I₂ = e − 2, e assim por diante.\n\nIₙ = e + n · Iₙ₋₁ erra o sinal da fórmula. Iₙ = n · Iₙ₋₁ esquece o termo [xⁿeˣ]₀¹ = e. Iₙ = e − Iₙ₋₁ esquece o fator n da derivada de xⁿ. E Iₙ = (e − 1) · Iₙ₋₁ não sai de fórmula nenhuma.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "media",
    enunciado:
      "Reconhecendo a derivada de um produto, qual é ∫ eˣ · (sen x + cos x) dx?",
    opcoes: [
      "eˣ · cos x + C",
      "eˣ(sen x − cos x) + C",
      "eˣ(sen x + cos x) + C",
      "eˣ · sen x + C",
      "−eˣ · cos x + C",
    ],
    correta: 3,
    explicacao:
      "Por partes em ∫ eˣ sen x dx, com u = sen x e v = eˣ: eˣ sen x − ∫ eˣ cos x dx. Somando ∫ eˣ cos x dx, a integral que sobra se cancela: o resultado é eˣ sen x + C. É a regra do produto de trás para a frente: (eˣ sen x)' = eˣ sen x + eˣ cos x.\n\neˣ · cos x + C tem derivada eˣ(cos x − sen x). eˣ(sen x − cos x) + C tem derivada 2eˣ sen x. eˣ(sen x + cos x) + C tem derivada 2eˣ cos x. E −eˣ · cos x + C tem derivada eˣ(sen x − cos x).",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "media",
    enunciado:
      "Com u = x e dv = sen(2x) dx, qual é a integral ∫ x · sen(2x) dx?",
    opcoes: [
      "−x · cos(2x)/2 + sen(2x)/2 + C",
      "x · cos(2x)/2 − sen(2x)/4 + C",
      "−x · cos(2x) + sen(2x) + C",
      "−x · cos(2x)/2 + sen(2x)/4 + C",
      "−(x²/2) · cos(2x) + C",
    ],
    correta: 3,
    explicacao:
      "Com u = x e dv = sen(2x) dx: du = dx e v = −cos(2x)/2. Então ∫ x sen(2x) dx = −x cos(2x)/2 + ∫ cos(2x)/2 dx = −x cos(2x)/2 + sen(2x)/4 + C. Os fatores 1/2 vêm de integrar funções de 2x.\n\n−x · cos(2x)/2 + sen(2x)/2 + C esquece o segundo fator 1/2. x · cos(2x)/2 − sen(2x)/4 + C troca todos os sinais. −x · cos(2x) + sen(2x) + C esquece os dois fatores. E −(x²/2) · cos(2x) + C integra os fatores em separado.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "media",
    enunciado:
      "Usando a primitiva de ln x obtida por partes, calcule ∫₁² ln x dx. Qual é o valor?",
    opcoes: [
      "2 ln 2",
      "ln 2",
      "1/2",
      "2 ln 2 − 1",
      "2 ln 2 + 1",
    ],
    correta: 3,
    explicacao:
      "Por partes, com u = ln x e dv = dx, uma primitiva de ln x é x ln x − x. Em x = 2: 2 ln 2 − 2. Em x = 1: 0 − 1 = −1. A integral vale 2 ln 2 − 2 + 1 = 2 ln 2 − 1 ≈ 0,39.\n\n2 ln 2 esquece a parcela −x da primitiva. ln 2 é o valor do integrando em x = 2. 1/2 aproxima ln x pela reta x − 1, a sua tangente em x = 1, e integra essa reta. E 2 ln 2 + 1 erra o sinal ao subtrair o valor em x = 1.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "media",
    enunciado:
      "Com u = 2x + 1 e dv = eˣ dx, qual é a integral ∫ (2x + 1) · eˣ dx?",
    opcoes: [
      "(2x + 1)eˣ + C",
      "(2x + 3)eˣ + C",
      "(x² + x)eˣ + C",
      "(2x − 1)eˣ + C",
      "2eˣ + C",
    ],
    correta: 3,
    explicacao:
      "Com u = 2x + 1, du = 2 dx; com dv = eˣ dx, v = eˣ. Então ∫ (2x + 1)eˣ dx = (2x + 1)eˣ − ∫ 2eˣ dx = (2x + 1)eˣ − 2eˣ = (2x − 1)eˣ + C. Conferindo: ((2x − 1)eˣ)' = 2eˣ + (2x − 1)eˣ = (2x + 1)eˣ.\n\n(2x + 1)eˣ + C para em uv. (2x + 3)eˣ + C soma a integral em vez de subtrair. (x² + x)eˣ + C integra só o fator polinomial. E 2eˣ + C fica só com a integral que se subtrai.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "media",
    enunciado:
      "Para x > 0, qual é a integral ∫ ln x/√x dx?",
    opcoes: [
      "2√x · ln x + C",
      "2√x · ln x − 2√x + C",
      "(ln x)²/(2√x) + C",
      "2√x · ln x − 4√x + C",
      "√x · ln x − 4√x + C",
    ],
    correta: 3,
    explicacao:
      "Com u = ln x e dv = x^(−1/2) dx: du = dx/x e v = 2√x. Então ∫ ln x/√x dx = 2√x ln x − ∫ 2√x/x dx = 2√x ln x − ∫ 2x^(−1/2) dx = 2√x ln x − 4√x + C.\n\n2√x · ln x + C para em uv. 2√x · ln x − 2√x + C esquece de dividir pelo expoente 1/2 na última integral. (ln x)²/(2√x) + C não sai da fórmula. E √x · ln x − 4√x + C usa v = √x, esquecendo o fator 2.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "media",
    enunciado:
      "Quanto vale a integral de eˣ · sen x entre x = 0 e x = π?",
    opcoes: [
      "e^π + 1",
      "(e^π − 1)/2",
      "e^π/2",
      "(e^π + 1)/2",
      "0",
    ],
    correta: 3,
    explicacao:
      "Uma primitiva de eˣ sen x, por partes duas vezes, é eˣ(sen x − cos x)/2. Em x = π: e^π(0 + 1)/2 = e^π/2. Em x = 0: (0 − 1)/2 = −1/2. A integral vale e^π/2 + 1/2 = (e^π + 1)/2 ≈ 12,1.\n\ne^π + 1 esquece a divisão por 2 que isola a integral. (e^π − 1)/2 erra o sinal do valor em x = 0. e^π/2 esquece de subtrair o valor em x = 0. E 0 supõe que o seno faz as áreas se cancelarem, mas em [0, π] ele é positivo.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "media",
    enunciado:
      "Sendo f duas vezes derivável, qual é a integral ∫ x · f''(x) dx em termos de f?",
    opcoes: [
      "x · f'(x) + f(x) + C",
      "x · f(x) − f'(x) + C",
      "x² · f''(x)/2 + C",
      "x · f'(x) − f(x) + C",
      "f'(x) + C",
    ],
    correta: 3,
    explicacao:
      "Com u = x e dv = f''(x) dx: du = dx e v = f'(x). Então ∫ x f''(x) dx = x f'(x) − ∫ f'(x) dx = x f'(x) − f(x) + C. Conferindo: (x f' − f)' = f' + x f'' − f' = x f''.\n\nx · f'(x) + f(x) + C erra o sinal da integral que sobra. x · f(x) − f'(x) + C troca v = f' por f. x² · f''(x)/2 + C integra os fatores em separado. E f'(x) + C esquece o fator x.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "media",
    enunciado:
      "Com u = x e dv = 3ˣ dx, qual é a integral ∫ x · 3ˣ dx?",
    opcoes: [
      "3ˣ · (x/ln 3 − 1/ln 3) + C",
      "x · 3ˣ/ln 3 + C",
      "3ˣ · (x · ln 3 − 1) + C",
      "3ˣ · (x/ln 3 − 1/(ln 3)²) + C",
      "3ˣ · (x/ln 3 + 1/(ln 3)²) + C",
    ],
    correta: 3,
    explicacao:
      "Com dv = 3ˣ dx, v = 3ˣ/ln 3. Então ∫ x · 3ˣ dx = x · 3ˣ/ln 3 − ∫ 3ˣ/ln 3 dx = x · 3ˣ/ln 3 − 3ˣ/(ln 3)² = 3ˣ(x/ln 3 − 1/(ln 3)²) + C. O fator ln 3 aparece duas vezes, uma em cada integração da exponencial.\n\n3ˣ · (x/ln 3 − 1/ln 3) + C divide só uma vez por ln 3 na integral que sobra. x · 3ˣ/ln 3 + C para em uv. 3ˣ · (x · ln 3 − 1) + C multiplica por ln 3 em vez de dividir. E a última alternativa soma a integral em vez de subtrair.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "dificil",
    enunciado:
      "A integral de cos(ln x), para x > 0, se resolve com duas partes e uma equação para a própria integral. Qual é o resultado?",
    opcoes: [
      "x · sen(ln x) + C",
      "sen(ln x) + C",
      "x · (cos(ln x) − sen(ln x))/2 + C",
      "x · (cos(ln x) + sen(ln x)) + C",
      "x · (cos(ln x) + sen(ln x))/2 + C",
    ],
    correta: 4,
    explicacao:
      "Chamando I = ∫ cos(ln x) dx, com u = cos(ln x) e dv = dx: I = x cos(ln x) + ∫ sen(ln x) dx. De novo, com u = sen(ln x): ∫ sen(ln x) dx = x sen(ln x) − I. Então I = x cos(ln x) + x sen(ln x) − I, e I = x(cos(ln x) + sen(ln x))/2 + C.\n\nx · sen(ln x) + C tem derivada sen(ln x) + cos(ln x). sen(ln x) + C tem derivada cos(ln x)/x, com o fator 1/x a mais. x · (cos(ln x) − sen(ln x))/2 + C erra o sinal do seno. E a última alternativa esquece a divisão por 2 ao isolar I.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "dificil",
    enunciado:
      "Qual é a integral ∫ e^(2x) · cos(3x) dx, obtida por partes duas vezes?",
    opcoes: [
      "e^(2x) · (2cos(3x) − 3sen(3x))/13 + C",
      "e^(2x) · (2cos(3x) + 3sen(3x))/5 + C",
      "e^(2x) · sen(3x)/6 + C",
      "e^(2x) · (3cos(3x) + 2sen(3x))/13 + C",
      "e^(2x) · (2cos(3x) + 3sen(3x))/13 + C",
    ],
    correta: 4,
    explicacao:
      "Chamando J a integral: com u = cos(3x) e v = e^(2x)/2, J = e^(2x)cos(3x)/2 + (3/2)∫ e^(2x) sen(3x) dx. De novo: ∫ e^(2x) sen(3x) dx = e^(2x) sen(3x)/2 − (3/2)J. Então J = e^(2x)cos(3x)/2 + (3/4)e^(2x) sen(3x) − (9/4)J, e (13/4)J = e^(2x)(2cos(3x) + 3sen(3x))/4. Resultado: e^(2x)(2cos(3x) + 3sen(3x))/13 + C.\n\nA alternativa com o sinal de menos erra o sinal da primeira integral por partes. A divisão por 5 soma 2 + 3 em vez de 2² + 3² = 13. e^(2x) · sen(3x)/6 + C integra os fatores em separado. E a última troca os coeficientes 2 e 3 de lugar.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "dificil",
    enunciado:
      "A secante ao cubo tem uma primitiva clássica, obtida por partes. Qual é ∫ (sec x)³ dx?",
    opcoes: [
      "sec x · tg x + C",
      "(sec x)⁴/4 + C",
      "(sec x · tg x − ln|sec x + tg x|)/2 + C",
      "sec x · tg x + ln|sec x + tg x| + C",
      "(sec x · tg x + ln|sec x + tg x|)/2 + C",
    ],
    correta: 4,
    explicacao:
      "Com u = sec x e dv = (sec x)² dx: du = sec x tg x dx e v = tg x. Então I = sec x tg x − ∫ sec x (tg x)² dx = sec x tg x − ∫ sec x((sec x)² − 1) dx = sec x tg x − I + ∫ sec x dx. Como ∫ sec x dx = ln|sec x + tg x|, vem 2I = sec x tg x + ln|sec x + tg x|, e I é a metade disso.\n\nsec x · tg x + C é a derivada de sec x, e fica só com uv. (sec x)⁴/4 + C aplica a regra da potência sem o fator que a substituição exigiria. A alternativa com o sinal de menos erra a primitiva da secante. E a última esquece a divisão por 2 ao isolar I.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "dificil",
    enunciado:
      "Pela fórmula de redução obtida por partes, Iₙ = ((n − 1)/n) · Iₙ₋₂ para a integral de (sen x)ⁿ de 0 a π/2. Quanto vale I₄?",
    opcoes: [
      "π/4",
      "3π/8",
      "π/16",
      "1/4",
      "3π/16",
    ],
    correta: 4,
    explicacao:
      "Com I₀ = ∫₀^(π/2) dx = π/2, a fórmula dá I₂ = (1/2) · π/2 = π/4 e I₄ = (3/4) · π/4 = 3π/16 ≈ 0,59. A fórmula sai de partes com u = (sen x)ⁿ⁻¹ e dv = sen x dx, e o termo de fronteira se anula em 0 e em π/2.\n\nπ/4 é I₂, uma etapa antes. 3π/8 esquece o fator 1/2 de I₂ e usa I₀ direto. π/16 multiplica por 1/4 no lugar de 3/4. E 1/4 esquece o fator π que vem de I₀.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "dificil",
    enunciado:
      "Com duas integrações por partes, calcule ∫₀^π x² · sen x dx. Que valor se obtém?",
    opcoes: [
      "π²",
      "π² + 4",
      "π² − 2",
      "4",
      "π² − 4",
    ],
    correta: 4,
    explicacao:
      "Por partes duas vezes, uma primitiva de x² sen x é −x² cos x + 2x sen x + 2cos x. Em x = π: π² + 0 − 2 = π² − 2. Em x = 0: 0 + 0 + 2 = 2. A integral vale π² − 2 − 2 = π² − 4 ≈ 5,87.\n\nπ² fica só com a parcela −x² cos x. π² + 4 erra o sinal da parcela 2cos x nos dois extremos. π² − 2 esquece de subtrair o valor em x = 0. E 4 fica só com a contribuição da parcela 2cos x.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "dificil",
    enunciado:
      "Sabe-se que ∫ f(x) · eˣ dx = x² · eˣ + C. Qual é a função f?",
    opcoes: [
      "x²",
      "2x",
      "x² − 2x",
      "x² + 2x + 2",
      "x² + 2x",
    ],
    correta: 4,
    explicacao:
      "Pelo teorema fundamental, a derivada da primitiva é o integrando: (x²eˣ)' = 2xeˣ + x²eˣ = (x² + 2x)eˣ. Então f(x)eˣ = (x² + 2x)eˣ, e f(x) = x² + 2x. É o caminho inverso da integração por partes.\n\nx² supõe que eˣ se integra sem deixar marca no fator polinomial. 2x fica só com a derivada de x². x² − 2x erra o sinal. E x² + 2x + 2 soma uma parcela que viria de outra integração.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "dificil",
    enunciado:
      "Para x > 0, com u = √x seguido de partes, qual é a integral ∫ e^(√x) dx?",
    opcoes: [
      "2√x · e^(√x) + C",
      "(√x − 1) · e^(√x) + C",
      "e^(√x)/(2√x) + C",
      "2(√x + 1) · e^(√x) + C",
      "2(√x − 1) · e^(√x) + C",
    ],
    correta: 4,
    explicacao:
      "Com w = √x, x = w² e dx = 2w dw, e a integral vira 2∫ w eʷ dw. Por partes, ∫ w eʷ dw = (w − 1)eʷ. Então ∫ e^(√x) dx = 2(√x − 1)e^(√x) + C. Conferindo: a derivada é 2 · e^(√x)/(2√x) + 2(√x − 1) · e^(√x)/(2√x) = e^(√x).\n\n2√x · e^(√x) + C para em uv. (√x − 1) · e^(√x) + C esquece o fator 2 de dx = 2w dw. e^(√x)/(2√x) + C é a derivada de e^(√x). E 2(√x + 1) · e^(√x) + C soma a integral em vez de subtrair.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "dificil",
    enunciado:
      "A primitiva x · arctg x − ln(1 + x²)/2 sai por partes. Qual é, então, a área sob y = arctg x de 0 a 1?",
    opcoes: [
      "π/4",
      "π/4 − ln 2",
      "π/4 + ln 2/2",
      "1 − ln 2/2",
      "π/4 − ln 2/2",
    ],
    correta: 4,
    explicacao:
      "Por partes, uma primitiva de arctg x é x arctg x − ln(1 + x²)/2. Em x = 1: π/4 − ln 2/2. Em x = 0: 0. A integral vale π/4 − ln 2/2 ≈ 0,44. O valor fica abaixo de π/4 ≈ 0,79, o maior valor do integrando no intervalo, como deve ser.\n\nπ/4 esquece a parcela do logaritmo. π/4 − ln 2 esquece o fator 1/2 da substituição. π/4 + ln 2/2 soma a integral em vez de subtrair. E 1 − ln 2/2 troca arctg 1 = π/4 por 1.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "dificil",
    enunciado:
      "Para x > 0 e n ≠ −1, qual é a fórmula geral de ∫ xⁿ · ln x dx?",
    opcoes: [
      "x^(n + 1) · ln x/(n + 1) + C",
      "x^(n + 1) · ln x/(n + 1) − x^(n + 1)/(n + 1) + C",
      "xⁿ · (x ln x − x) + C",
      "x^(n + 1) · ln x/(n + 1) + x^(n + 1)/(n + 1)² + C",
      "x^(n + 1) · ln x/(n + 1) − x^(n + 1)/(n + 1)² + C",
    ],
    correta: 4,
    explicacao:
      "Com u = ln x e dv = xⁿ dx: du = dx/x e v = x^(n + 1)/(n + 1). Então ∫ xⁿ ln x dx = x^(n + 1) ln x/(n + 1) − ∫ xⁿ/(n + 1) dx = x^(n + 1) ln x/(n + 1) − x^(n + 1)/(n + 1)² + C. Com n = 1, recupera-se (x²/2) ln x − x²/4.\n\nParar em x^(n + 1) · ln x/(n + 1) esquece a integral que sobra. Dividir só uma vez por n + 1 nessa integral dá a parcela −x^(n + 1)/(n + 1), grande demais. xⁿ · (x ln x − x) + C trata xⁿ como constante. E trocar o sinal da última parcela soma a integral em vez de subtrair.",
  },
  {
    materia: "calculo",
    tema: "Integração por partes",
    dificuldade: "dificil",
    enunciado:
      "Qual é a integral ∫ (x² + 1) · e^(−x) dx?",
    opcoes: [
      "−e^(−x) · (x² + 1) + C",
      "e^(−x) · (x² + 2x + 3) + C",
      "−e^(−x) · (x² + 2x + 1) + C",
      "−e^(−x) · (x² − 2x + 3) + C",
      "−e^(−x) · (x² + 2x + 3) + C",
    ],
    correta: 4,
    explicacao:
      "Pelo método tabular: deriva-se x² + 1 (x² + 1, 2x, 2, 0) e integra-se e^(−x) repetidamente (−e^(−x), e^(−x), −e^(−x)). Os produtos com sinais +, −, + dão −(x² + 1)e^(−x) − 2xe^(−x) − 2e^(−x) = −e^(−x)(x² + 2x + 3) + C.\n\n−e^(−x) · (x² + 1) + C para em uv. e^(−x) · (x² + 2x + 3) + C perde o sinal de fora. −e^(−x) · (x² + 2x + 1) + C esquece a última parcela do método tabular, −2e^(−x), que vem da derivada segunda. E a última erra o sinal da parcela 2x.",
  },
];
