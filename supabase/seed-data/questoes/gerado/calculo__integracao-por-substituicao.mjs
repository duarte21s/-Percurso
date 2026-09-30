/* Integração por substituição (50 questões) — calculo.

   Autorais, escritas por Claude (Anthropic) em 2026-09-30 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/calculo__integracao-por-substituicao.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/calculo__integracao-por-substituicao.json. */

export const questoes = [
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "facil",
    enunciado:
      "Com a substituição u = x² + 1, qual é a integral ∫ 2x(x² + 1)⁵ dx?",
    opcoes: [
      "(x² + 1)⁶/6 + C",
      "(x² + 1)⁶ + C",
      "x²(x² + 1)⁶/6 + C",
      "2x(x² + 1)⁶/6 + C",
      "(x² + 1)⁵ + C",
    ],
    correta: 0,
    explicacao:
      "Com u = x² + 1, du = 2x dx, e o integrando vira u⁵ du, cuja primitiva é u⁶/6. Voltando para x: (x² + 1)⁶/6 + C. Conferindo pela regra da cadeia: ((x² + 1)⁶/6)' = 6(x² + 1)⁵ · 2x/6 = 2x(x² + 1)⁵.\n\n(x² + 1)⁶ + C esquece de dividir por 6. x²(x² + 1)⁶/6 + C integra o fator 2x separadamente, como se fosse uma parcela. 2x(x² + 1)⁶/6 + C deixa o fator 2x no resultado, embora ele já tenha virado du. E (x² + 1)⁵ + C repete a potência, sem aumentar o expoente.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "facil",
    enunciado:
      "Qual é a integral indefinida ∫ cos(3x) dx, obtida com u = 3x?",
    opcoes: [
      "sen(3x)/3 + C",
      "3sen(3x) + C",
      "sen(3x) + C",
      "−sen(3x)/3 + C",
      "sen(x)/3 + C",
    ],
    correta: 0,
    explicacao:
      "Com u = 3x, du = 3 dx, e dx = du/3. A integral vira (1/3)∫ cos u du = sen u/3, e voltando para x: sen(3x)/3 + C. O fator 1/3 compensa o 3 que a regra da cadeia traria ao derivar sen(3x).\n\n3sen(3x) + C multiplica pelo fator em vez de dividir: sua derivada é 9cos(3x). sen(3x) + C esquece o fator e tem derivada 3cos(3x). −sen(3x)/3 + C erra o sinal, como numa primitiva do seno. E sen(x)/3 + C perde o 3 dentro do seno.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "facil",
    enunciado:
      "Qual é a integral ∫ x · e^(x²) dx, usando u = x²?",
    opcoes: [
      "e^(x²)/2 + C",
      "e^(x²) + C",
      "2e^(x²) + C",
      "x²e^(x²)/2 + C",
      "e^(x²)/(2x) + C",
    ],
    correta: 0,
    explicacao:
      "Com u = x², du = 2x dx, e x dx = du/2. A integral vira (1/2)∫ eᵘ du = eᵘ/2, e voltando para x: e^(x²)/2 + C. O fator x do integrando é exatamente o que torna a substituição possível; sem ele, ∫ e^(x²) dx não tem primitiva elementar.\n\ne^(x²) + C esquece o fator 1/2 e tem derivada 2x · e^(x²). 2e^(x²) + C multiplica em vez de dividir. x²e^(x²)/2 + C integra o fator x em separado. E e^(x²)/(2x) + C divide pela derivada de u como se ela fosse constante.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "facil",
    enunciado:
      "Qual é a integral ∫ dx/(2x + 3), nos intervalos em que 2x + 3 ≠ 0?",
    opcoes: [
      "ln|2x + 3|/2 + C",
      "ln|2x + 3| + C",
      "2 ln|2x + 3| + C",
      "−2/(2x + 3)² + C",
      "x/(x² + 3x) + C",
    ],
    correta: 0,
    explicacao:
      "Com u = 2x + 3, du = 2 dx, e dx = du/2. A integral vira (1/2)∫ du/u = ln|u|/2, e voltando para x: ln|2x + 3|/2 + C. Conferindo: a derivada de ln|2x + 3| é 2/(2x + 3), e o fator 1/2 compensa o 2.\n\nln|2x + 3| + C esquece o fator 1/2 e tem derivada 2/(2x + 3). 2 ln|2x + 3| + C multiplica em vez de dividir. −2/(2x + 3)² + C é a derivada do integrando, o caminho inverso. E x/(x² + 3x) + C integra numerador e denominador em separado.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "facil",
    enunciado:
      "Com u = 3x − 1, quanto dá a integral ∫ (3x − 1)⁴ dx?",
    opcoes: [
      "(3x − 1)⁵/15 + C",
      "(3x − 1)⁵/5 + C",
      "(3x − 1)⁵/3 + C",
      "12(3x − 1)³ + C",
      "(3x − 1)⁵ + C",
    ],
    correta: 0,
    explicacao:
      "Com u = 3x − 1, du = 3 dx, e dx = du/3. A integral vira (1/3)∫ u⁴ du = u⁵/15, e voltando para x: (3x − 1)⁵/15 + C. Os dois divisores têm origens diferentes: o 5 vem da regra da potência, e o 3, da derivada de dentro.\n\n(3x − 1)⁵/5 + C esquece o fator 1/3 da substituição. (3x − 1)⁵/3 + C esquece a divisão pelo novo expoente. 12(3x − 1)³ + C é a derivada do integrando. E (3x − 1)⁵ + C esquece as duas divisões.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "facil",
    enunciado:
      "Tomando u = sen x, qual é a integral ∫ cos x · (sen x)² dx?",
    opcoes: [
      "(sen x)³/3 + C",
      "(cos x)³/3 + C",
      "sen x · (cos x)²/2 + C",
      "−(sen x)³/3 + C",
      "(sen x)³ + C",
    ],
    correta: 0,
    explicacao:
      "Com u = sen x, du = cos x dx, e o integrando vira u² du, com primitiva u³/3. Voltando para x: (sen x)³/3 + C. O fator cos x é exatamente a derivada de sen x, e por isso a substituição encaixa.\n\n(cos x)³/3 + C troca a função de dentro, como se u fosse cos x. sen x · (cos x)²/2 + C integra só o fator cos x, mantendo o outro. −(sen x)³/3 + C inventa um sinal, que só apareceria com u = cos x. E (sen x)³ + C esquece de dividir por 3.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "facil",
    enunciado:
      "Com u = x² + 1, quanto vale a integral definida de 2x(x² + 1)³ entre x = 0 e x = 1?",
    opcoes: [
      "15/4",
      "4",
      "1/4",
      "15/2",
      "15",
    ],
    correta: 0,
    explicacao:
      "Com u = x² + 1 e du = 2x dx, os limites também mudam: x = 0 dá u = 1, e x = 1 dá u = 2. A integral vira ∫₁² u³ du = [u⁴/4]₁² = 16/4 − 1/4 = 15/4. Trocar os limites evita voltar para x.\n\n4 fica só com o valor da primitiva em u = 2. 1/4 fica só com o valor em u = 1, ou integra u³ de 0 a 1, esquecendo de trocar os limites. 15/2 divide por 2 em vez de 4. E 15 esquece a divisão pelo novo expoente.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "facil",
    enunciado:
      "Usando u = x² + 1, qual é a integral ∫ x/(x² + 1) dx?",
    opcoes: [
      "ln(x² + 1)/2 + C",
      "ln(x² + 1) + C",
      "arctg x + C",
      "(x²/2) · ln(x² + 1) + C",
      "2 ln(x² + 1) + C",
    ],
    correta: 0,
    explicacao:
      "Com u = x² + 1, du = 2x dx, e x dx = du/2. A integral vira (1/2)∫ du/u = ln u/2, e voltando para x: ln(x² + 1)/2 + C. Não é preciso módulo, porque x² + 1 é sempre positivo.\n\nln(x² + 1) + C esquece o fator 1/2 e tem derivada 2x/(x² + 1). arctg x + C é a primitiva de 1/(x² + 1), sem o x no numerador. (x²/2) · ln(x² + 1) + C integra os fatores em separado. E 2 ln(x² + 1) + C multiplica em vez de dividir.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "facil",
    enunciado:
      "Qual é a integral ∫ sen(x/2) dx, obtida com u = x/2?",
    opcoes: [
      "−2cos(x/2) + C",
      "−cos(x/2)/2 + C",
      "2cos(x/2) + C",
      "−cos(x/2) + C",
      "cos(x/2)/2 + C",
    ],
    correta: 0,
    explicacao:
      "Com u = x/2, du = dx/2, e dx = 2 du. A integral vira 2∫ sen u du = −2cos u, e voltando para x: −2cos(x/2) + C. Aqui o fator sai multiplicando, porque a derivada de dentro, 1/2, é menor que 1.\n\n−cos(x/2)/2 + C divide por 2 em vez de multiplicar. 2cos(x/2) + C erra o sinal da primitiva do seno. −cos(x/2) + C esquece o fator 2. E cos(x/2)/2 + C comete os dois erros.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "facil",
    enunciado:
      "Para x > 0, qual é a integral ∫ (ln x)/x dx?",
    opcoes: [
      "(ln x)²/2 + C",
      "ln(ln x) + C",
      "(ln x)² + C",
      "x ln x − x + C",
      "1/x² + C",
    ],
    correta: 0,
    explicacao:
      "Com u = ln x, du = dx/x, e o integrando vira u du, com primitiva u²/2. Voltando para x: (ln x)²/2 + C. O fator 1/x é a derivada de ln x, e por isso a substituição funciona.\n\nln(ln x) + C é a primitiva de 1/(x ln x), com o logaritmo no denominador. (ln x)² + C esquece o fator 1/2 e tem derivada 2 ln x/x. x ln x − x + C é a primitiva de ln x sozinho, sem o 1/x. E 1/x² + C não tem relação com o integrando.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "facil",
    enunciado:
      "Qual é a integral ∫ e^(sen x) · cos x dx?",
    opcoes: [
      "e^(cos x) + C",
      "e^(sen x) + C",
      "e^(sen x) · sen x + C",
      "cos x · e^(sen x) + C",
      "e^(sen x)/cos x + C",
    ],
    correta: 1,
    explicacao:
      "Com u = sen x, du = cos x dx, e o integrando vira eᵘ du, com primitiva eᵘ. Voltando para x: e^(sen x) + C. Conferindo pela regra da cadeia: (e^(sen x))' = e^(sen x) · cos x.\n\ne^(cos x) + C troca a função do expoente. e^(sen x) · sen x + C integra o fator cos x em separado. cos x · e^(sen x) + C repete o integrando, sem integrar. E e^(sen x)/cos x + C divide pela derivada de u como se ela fosse constante.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "facil",
    enunciado:
      "Com u = x³ + 1, qual é a integral ∫ 3x² · √(x³ + 1) dx?",
    opcoes: [
      "(3/2)(x³ + 1)^(3/2) + C",
      "(2/3)(x³ + 1)^(3/2) + C",
      "(x³ + 1)^(3/2) + C",
      "2(x³ + 1)^(1/2) + C",
      "x³(x³ + 1)^(3/2) + C",
    ],
    correta: 1,
    explicacao:
      "Com u = x³ + 1, du = 3x² dx, e o integrando vira √u du = u^(1/2) du, com primitiva u^(3/2)/(3/2) = (2/3)u^(3/2). Voltando para x: (2/3)(x³ + 1)^(3/2) + C.\n\n(3/2)(x³ + 1)^(3/2) + C multiplica pelo novo expoente em vez de dividir. (x³ + 1)^(3/2) + C esquece o fator 2/3. 2(x³ + 1)^(1/2) + C integra 1/√u, e não √u. E x³(x³ + 1)^(3/2) + C integra o fator 3x² em separado.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "media",
    enunciado:
      "Com u = x³, qual é a integral ∫ x² · cos(x³) dx?",
    opcoes: [
      "sen(x³) + C",
      "sen(x³)/3 + C",
      "3sen(x³) + C",
      "x³ · sen(x³)/3 + C",
      "−sen(x³)/3 + C",
    ],
    correta: 1,
    explicacao:
      "Com u = x³, du = 3x² dx, e x² dx = du/3. A integral vira (1/3)∫ cos u du = sen u/3, e voltando para x: sen(x³)/3 + C. Conferindo: (sen(x³)/3)' = cos(x³) · 3x²/3 = x² cos(x³).\n\nsen(x³) + C esquece o fator 1/3 e tem derivada 3x² cos(x³). 3sen(x³) + C multiplica em vez de dividir. x³ · sen(x³)/3 + C integra o fator x² em separado. E −sen(x³)/3 + C erra o sinal, como se o integrando fosse um seno.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "media",
    enunciado:
      "Para x > 1, qual é a integral ∫ dx/(x · ln x)?",
    opcoes: [
      "(ln x)²/2 + C",
      "ln(ln x) + C",
      "1/ln x + C",
      "ln x · ln x + C",
      "ln(x ln x) + C",
    ],
    correta: 1,
    explicacao:
      "Com u = ln x, du = dx/x, e o integrando vira du/u, com primitiva ln|u|. Como ln x > 0 para x > 1, o resultado é ln(ln x) + C. Conferindo: (ln(ln x))' = (1/ln x) · (1/x).\n\n(ln x)²/2 + C é a primitiva de ln x/x, com o logaritmo no numerador. 1/ln x + C tem derivada −1/(x(ln x)²). ln x · ln x + C é (ln x)², com derivada 2 ln x/x. E ln(x ln x) + C tem derivada (ln x + 1)/(x ln x).",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "media",
    enunciado:
      "Escrevendo tg x = sen x/cos x, qual é a primitiva mais geral da tangente?",
    opcoes: [
      "ln|cos x| + C",
      "−ln|cos x| + C",
      "(sec x)² + C",
      "ln|sen x| + C",
      "(tg x)²/2 + C",
    ],
    correta: 1,
    explicacao:
      "Com u = cos x, du = −sen x dx, e sen x dx = −du. A integral vira −∫ du/u = −ln|u|, e voltando para x: −ln|cos x| + C, que também se escreve ln|sec x| + C. Vale nos intervalos em que cos x ≠ 0.\n\nln|cos x| + C esquece o sinal de du = −sen x dx. (sec x)² + C é a derivada da tangente, e não a primitiva. ln|sen x| + C é a primitiva da cotangente. E (tg x)²/2 + C aplicaria a regra da potência sem o fator (sec x)², que não está no integrando.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "media",
    enunciado:
      "Com u = sen x, quanto vale a integral de sen x · cos x entre x = 0 e x = π/2?",
    opcoes: [
      "1",
      "1/2",
      "0",
      "1/4",
      "−1/2",
    ],
    correta: 1,
    explicacao:
      "Com u = sen x e du = cos x dx, os limites viram u = sen 0 = 0 e u = sen(π/2) = 1. A integral vira ∫₀¹ u du = 1/2. Com u = cos x daria o mesmo resultado, pelo caminho −∫₁⁰ u du = 1/2.\n\n1 esquece o fator 1/2 da primitiva u²/2. 0 esquece de trocar os limites, ou supõe que o produto se cancela no intervalo. 1/4 divide duas vezes por 2. E −1/2 erra o sinal, como numa substituição u = cos x sem o sinal de du.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "media",
    enunciado:
      "O numerador de (x + 1)/(x² + 2x + 5) é metade da derivada do denominador. Qual é a primitiva dessa função?",
    opcoes: [
      "ln(x² + 2x + 5) + C",
      "ln(x² + 2x + 5)/2 + C",
      "2 ln(x² + 2x + 5) + C",
      "arctg(x + 1) + C",
      "(x²/2 + x)/(x³/3 + x² + 5x) + C",
    ],
    correta: 1,
    explicacao:
      "O numerador é metade da derivada do denominador: (x² + 2x + 5)' = 2x + 2 = 2(x + 1). Com u = x² + 2x + 5, du = 2(x + 1) dx, e a integral vira (1/2)∫ du/u = ln u/2. Resultado: ln(x² + 2x + 5)/2 + C, sem módulo, porque u = (x + 1)² + 4 é sempre positivo.\n\nln(x² + 2x + 5) + C esquece o fator 1/2. 2 ln(x² + 2x + 5) + C multiplica em vez de dividir. arctg(x + 1) + C seria a resposta para 1/((x + 1)² + 1), outra função. E a última alternativa integra numerador e denominador em separado.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "media",
    enunciado:
      "O numerador é a derivada do denominador em ∫ eˣ/(1 + eˣ) dx. Qual é o resultado?",
    opcoes: [
      "eˣ · ln(1 + eˣ) + C",
      "ln(1 + eˣ) + C",
      "1/(1 + eˣ) + C",
      "x − ln(1 + eˣ) + C",
      "eˣ/(1 + eˣ)² + C",
    ],
    correta: 1,
    explicacao:
      "Com u = 1 + eˣ, du = eˣ dx, e o integrando vira du/u, com primitiva ln|u|. Como 1 + eˣ > 0, o resultado é ln(1 + eˣ) + C. O numerador é exatamente a derivada do denominador: é o padrão ∫ u'/u = ln|u|.\n\neˣ · ln(1 + eˣ) + C deixa no resultado o fator eˣ, que já virou du. 1/(1 + eˣ) + C tem derivada −eˣ/(1 + eˣ)², com o sinal trocado e o quadrado. x − ln(1 + eˣ) + C é a primitiva de 1/(1 + eˣ), a função complementar. E eˣ/(1 + eˣ)² + C é a derivada do integrando.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "media",
    enunciado:
      "Para x > 1, com u = x − 1 (e x = u + 1), qual é a integral ∫ x · √(x − 1) dx?",
    opcoes: [
      "(x²/2) · (2/3)(x − 1)^(3/2) + C",
      "(2/5)(x − 1)^(5/2) + (2/3)(x − 1)^(3/2) + C",
      "(2/3)(x − 1)^(3/2) + C",
      "(2/5)(x − 1)^(5/2) + C",
      "x · (2/3)(x − 1)^(3/2) + C",
    ],
    correta: 1,
    explicacao:
      "Com u = x − 1, du = dx e x = u + 1. A integral vira ∫ (u + 1)√u du = ∫ (u^(3/2) + u^(1/2)) du = (2/5)u^(5/2) + (2/3)u^(3/2). Voltando para x: (2/5)(x − 1)^(5/2) + (2/3)(x − 1)^(3/2) + C. O truque é escrever o x que sobra também em função de u.\n\n(x²/2) · (2/3)(x − 1)^(3/2) + C multiplica primitivas dos fatores, o que não vale. (2/3)(x − 1)^(3/2) + C esquece o fator x, integrando só √(x − 1). (2/5)(x − 1)^(5/2) + C esquece a parcela que vem do 1 em x = u + 1. E x · (2/3)(x − 1)^(3/2) + C trata o fator x como constante.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "media",
    enunciado:
      "Com u = ln x, quanto vale a integral de (ln x)²/x entre x = 1 e x = e?",
    opcoes: [
      "1",
      "1/3",
      "1/2",
      "e/3",
      "(e − 1)/3",
    ],
    correta: 1,
    explicacao:
      "Com u = ln x e du = dx/x, os limites viram u = ln 1 = 0 e u = ln e = 1. A integral vira ∫₀¹ u² du = 1/3. A troca de limites faz a conta final ficar muito simples.\n\n1 esquece a divisão por 3 da primitiva u³/3. 1/2 integra u, e não u². e/3 usa o limite x = e na primitiva em u, sem trocar os limites. E (e − 1)/3 comete o mesmo erro, subtraindo os limites em x.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "media",
    enunciado:
      "Qual é ∫ (sec x)² · tg x dx, resolvida com u = tg x?",
    opcoes: [
      "(sec x)³/3 + C",
      "tg x + C",
      "(tg x)²/2 + C",
      "(tg x)³/3 + C",
      "sec x · tg x + C",
    ],
    correta: 2,
    explicacao:
      "Com u = tg x, du = (sec x)² dx, e o integrando vira u du, com primitiva u²/2. Voltando para x: (tg x)²/2 + C. Com u = sec x chega-se a (sec x)²/2 + C, que difere desta só pela constante 1/2, porque (sec x)² = 1 + (tg x)².\n\n(sec x)³/3 + C integra (sec x)² como potência, sem o fator certo. tg x + C é a primitiva de (sec x)² sozinha, sem o fator tg x. (tg x)³/3 + C aumenta o expoente de um fator que não estava ao quadrado. E sec x · tg x + C é a derivada de sec x, sem relação com o integrando.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "media",
    enunciado:
      "Para |x| < 1/2, qual é a integral ∫ dx/√(1 − 4x²)?",
    opcoes: [
      "arcsen(2x) + C",
      "2 arcsen(2x) + C",
      "arcsen(2x)/2 + C",
      "arcsen(x)/2 + C",
      "√(1 − 4x²) + C",
    ],
    correta: 2,
    explicacao:
      "Escrevendo 4x² = (2x)², a substituição u = 2x dá du = 2 dx e dx = du/2. A integral vira (1/2)∫ du/√(1 − u²) = arcsen u/2, e voltando para x: arcsen(2x)/2 + C.\n\narcsen(2x) + C esquece o fator 1/2 da substituição. 2 arcsen(2x) + C multiplica em vez de dividir. arcsen(x)/2 + C perde o 2 dentro do arco seno. E √(1 − 4x²) + C não tem derivada igual ao integrando: a derivada de uma raiz traz a raiz no denominador, mas com x no numerador.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "media",
    enunciado:
      "Quanto vale a integral de x · e^(x²) entre x = 0 e x = 2?",
    opcoes: [
      "e⁴ − 1",
      "(e² − 1)/2",
      "(e⁴ − 1)/2",
      "e⁴/2",
      "(e⁴ + 1)/2",
    ],
    correta: 2,
    explicacao:
      "Com u = x² e du = 2x dx, os limites viram 0 e 4, e a integral vira (1/2)∫₀⁴ eᵘ du = (e⁴ − e⁰)/2 = (e⁴ − 1)/2 ≈ 26,8.\n\ne⁴ − 1 esquece o fator 1/2. (e² − 1)/2 usa o limite x = 2 no lugar de u = 4, sem trocar os limites. e⁴/2 esquece de subtrair o valor em u = 0, que é e⁰ = 1, e não zero. E (e⁴ + 1)/2 soma o valor do limite inferior em vez de subtrair.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "media",
    enunciado:
      "Para x > 0, qual é a integral ∫ cos(ln x)/x dx?",
    opcoes: [
      "−sen(ln x) + C",
      "sen(ln x)/x + C",
      "sen(ln x) + C",
      "cos(ln x) · ln x + C",
      "ln(sen x) + C",
    ],
    correta: 2,
    explicacao:
      "Com u = ln x, du = dx/x, e o integrando vira cos u du, com primitiva sen u. Voltando para x: sen(ln x) + C. Conferindo: (sen(ln x))' = cos(ln x) · (1/x).\n\n−sen(ln x) + C erra o sinal: a primitiva do cosseno é o seno, sem sinal. sen(ln x)/x + C deixa no resultado o fator 1/x, que já virou du. cos(ln x) · ln x + C trata o cosseno como constante. E ln(sen x) + C troca a ordem das funções.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "media",
    enunciado:
      "Com u = 3x, qual é a integral ∫ dx/(1 + 9x²)?",
    opcoes: [
      "arctg(3x) + C",
      "3 arctg(3x) + C",
      "arctg(3x)/3 + C",
      "arctg(9x)/9 + C",
      "ln(1 + 9x²)/18 + C",
    ],
    correta: 2,
    explicacao:
      "Escrevendo 9x² = (3x)², a substituição u = 3x dá du = 3 dx e dx = du/3. A integral vira (1/3)∫ du/(1 + u²) = arctg u/3, e voltando para x: arctg(3x)/3 + C.\n\narctg(3x) + C esquece o fator 1/3. 3 arctg(3x) + C multiplica em vez de dividir. arctg(9x)/9 + C usa u = 9x, mas o quadrado de 9x é 81x², e não 9x². E ln(1 + 9x²)/18 + C é a primitiva de x/(1 + 9x²), com x no numerador.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "media",
    enunciado:
      "Com u = 2x + 1, qual é a integral ∫ √(2x + 1) dx, para x > −1/2?",
    opcoes: [
      "(2/3)(2x + 1)^(3/2) + C",
      "(4/3)(2x + 1)^(3/2) + C",
      "(2x + 1)^(3/2)/3 + C",
      "1/√(2x + 1) + C",
      "(2x + 1)^(3/2) + C",
    ],
    correta: 2,
    explicacao:
      "Com u = 2x + 1, du = 2 dx, e dx = du/2. A integral vira (1/2)∫ u^(1/2) du = (1/2) · (2/3)u^(3/2) = u^(3/2)/3, e voltando para x: (2x + 1)^(3/2)/3 + C.\n\n(2/3)(2x + 1)^(3/2) + C esquece o fator 1/2 da substituição. (4/3)(2x + 1)^(3/2) + C multiplica por 2 em vez de dividir. 1/√(2x + 1) + C é a derivada do integrando. E (2x + 1)^(3/2) + C esquece os dois fatores.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "media",
    enunciado:
      "Uma substituição transforma a integral de x · sen(x²), de 0 a √π, numa integral do seno. Qual é o seu valor?",
    opcoes: [
      "2",
      "0",
      "1",
      "1/2",
      "−1",
    ],
    correta: 2,
    explicacao:
      "Com u = x² e du = 2x dx, os limites viram 0 e π, e a integral vira (1/2)∫₀^π sen u du = (1/2) · 2 = 1. É metade da área sob um arco da senoide. O fator x do integrando é o que torna a substituição possível.\n\n2 esquece o fator 1/2. 0 usa o intervalo inteiro de um período, como se fosse [0, 2π]. 1/2 divide duas vezes por 2. E −1 erra o sinal da primitiva do seno.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "media",
    enunciado:
      "Com u = 1 + x², em qual integral na variável u se transforma a integral de x/(1 + x²) entre x = 0 e x = 1?",
    opcoes: [
      "∫ de 0 a 1 de du/u",
      "(1/2) · ∫ de 0 a 1 de du/u",
      "(1/2) · ∫ de 1 a 2 de du/u",
      "2 · ∫ de 1 a 2 de du/u",
      "∫ de 1 a 2 de u du",
    ],
    correta: 2,
    explicacao:
      "Com u = 1 + x², du = 2x dx, e x dx = du/2. Os limites também mudam: x = 0 dá u = 1, e x = 1 dá u = 2. A integral vira (1/2) · ∫₁² du/u = ln 2/2 ≈ 0,35.\n\n∫ de 0 a 1 de du/u esquece o fator 1/2 e mantém os limites em x; além disso, diverge em u = 0. (1/2) · ∫ de 0 a 1 de du/u acerta o fator, mas não troca os limites. 2 · ∫ de 1 a 2 de du/u multiplica em vez de dividir. E ∫ de 1 a 2 de u du troca 1/u por u.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "media",
    enunciado:
      "Para x > 0, qual é a integral ∫ e^(√x)/√x dx?",
    opcoes: [
      "e^(√x) + C",
      "e^(√x)/2 + C",
      "2e^(√x) + C",
      "2√x · e^(√x) + C",
      "e^(√x)/√x + C",
    ],
    correta: 2,
    explicacao:
      "Com u = √x, du = dx/(2√x), e dx/√x = 2 du. A integral vira 2∫ eᵘ du = 2eᵘ, e voltando para x: 2e^(√x) + C. Conferindo: (2e^(√x))' = 2e^(√x) · 1/(2√x) = e^(√x)/√x.\n\ne^(√x) + C esquece o fator 2 e tem derivada e^(√x)/(2√x). e^(√x)/2 + C divide em vez de multiplicar. 2√x · e^(√x) + C trata o fator 1/√x como se pedisse uma multiplicação por √x. E e^(√x)/√x + C repete o integrando.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "media",
    enunciado:
      "Para x > 0, qual é a integral ∫ (2x + 1)/(x² + x)² dx?",
    opcoes: [
      "1/(x² + x) + C",
      "ln(x² + x) + C",
      "−1/(x² + x) + C",
      "−1/(3(x² + x)³) + C",
      "(2x + 1)/(x² + x) + C",
    ],
    correta: 2,
    explicacao:
      "Com u = x² + x, du = (2x + 1) dx, e o integrando vira du/u² = u⁻² du, com primitiva −u⁻¹. Voltando para x: −1/(x² + x) + C.\n\n1/(x² + x) + C erra o sinal da primitiva de u⁻². ln(x² + x) + C seria a resposta para (2x + 1)/(x² + x), sem o quadrado no denominador. −1/(3(x² + x)³) + C diminui o expoente em vez de aumentá-lo. E (2x + 1)/(x² + x) + C não integra, só simplifica uma potência.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "media",
    enunciado:
      "Com u = 2x + 1, qual é a primitiva mais geral de sen(2x + 1)?",
    opcoes: [
      "cos(2x + 1)/2 + C",
      "−2cos(2x + 1) + C",
      "−cos(2x + 1) + C",
      "−cos(2x + 1)/2 + C",
      "sen(2x + 1)/2 + C",
    ],
    correta: 3,
    explicacao:
      "Com u = 2x + 1, du = 2 dx, e dx = du/2. A integral vira (1/2)∫ sen u du = −cos u/2, e voltando para x: −cos(2x + 1)/2 + C. A constante 1 de dentro não muda nada: só o coeficiente de x importa.\n\ncos(2x + 1)/2 + C erra o sinal da primitiva do seno. −2cos(2x + 1) + C multiplica pelo fator em vez de dividir. −cos(2x + 1) + C esquece o fator 1/2. E sen(2x + 1)/2 + C troca a primitiva do seno pela do cosseno.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "media",
    enunciado:
      "Com u = 1 + √x, quanto vale a integral de 1/(√x · (1 + √x)²) entre x = 1 e x = 4?",
    opcoes: [
      "1/6",
      "2/3",
      "3/2",
      "1/3",
      "1/12",
    ],
    correta: 3,
    explicacao:
      "Com u = 1 + √x, du = dx/(2√x), e dx/√x = 2 du. Os limites viram u = 1 + 1 = 2 e u = 1 + 2 = 3. A integral vira 2∫₂³ du/u² = 2 · [−1/u]₂³ = 2 · (1/2 − 1/3) = 1/3.\n\n1/6 esquece o fator 2 da substituição. 2/3 dobra de novo, multiplicando por 4. 3/2 usa os limites em x, 1 e 4, na primitiva em u: 2(1 − 1/4). E 1/12 divide pelo fator em vez de multiplicar.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "media",
    enunciado:
      "Com u = x⁴ + 2, qual é a integral ∫ x³/(x⁴ + 2)² dx?",
    opcoes: [
      "−1/(x⁴ + 2) + C",
      "1/(4(x⁴ + 2)) + C",
      "ln(x⁴ + 2)/4 + C",
      "−1/(4(x⁴ + 2)) + C",
      "−4/(x⁴ + 2) + C",
    ],
    correta: 3,
    explicacao:
      "Com u = x⁴ + 2, du = 4x³ dx, e x³ dx = du/4. A integral vira (1/4)∫ u⁻² du = −u⁻¹/4, e voltando para x: −1/(4(x⁴ + 2)) + C.\n\n−1/(x⁴ + 2) + C esquece o fator 1/4. 1/(4(x⁴ + 2)) + C erra o sinal da primitiva de u⁻². ln(x⁴ + 2)/4 + C seria a resposta para x³/(x⁴ + 2), sem o quadrado. E −4/(x⁴ + 2) + C multiplica pelo fator em vez de dividir.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "media",
    enunciado:
      "Nos intervalos em que cos(3x) ≠ 0, qual é a integral ∫ (sec(3x))² dx?",
    opcoes: [
      "tg(3x) + C",
      "3tg(3x) + C",
      "(sec(3x))³/9 + C",
      "tg(3x)/3 + C",
      "tg(x)/3 + C",
    ],
    correta: 3,
    explicacao:
      "Com u = 3x, du = 3 dx, e dx = du/3. A integral vira (1/3)∫ (sec u)² du = tg u/3, e voltando para x: tg(3x)/3 + C. Conferindo: a derivada de tg(3x)/3 é 3(sec(3x))²/3 = (sec(3x))².\n\ntg(3x) + C esquece o fator 1/3 e tem derivada 3(sec(3x))². 3tg(3x) + C multiplica em vez de dividir. (sec(3x))³/9 + C trata a secante como potência de x. E tg(x)/3 + C perde o 3 dentro da tangente.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "media",
    enunciado:
      "Pondo 4 em evidência no denominador, qual é ∫ dx/(x² + 4)?",
    opcoes: [
      "arctg(x/2) + C",
      "(1/4) · arctg(x/4) + C",
      "arctg(x²/4) + C",
      "(1/2) · arctg(x/2) + C",
      "ln(x² + 4)/(2x) + C",
    ],
    correta: 3,
    explicacao:
      "Pondo 4 em evidência: 1/(x² + 4) = (1/4) · 1/(1 + (x/2)²). Com u = x/2, dx = 2 du, e a integral vira (1/4) · 2∫ du/(1 + u²) = (1/2)arctg u. Resultado: (1/2) · arctg(x/2) + C.\n\narctg(x/2) + C esquece o fator 1/2 que sobra das duas constantes. (1/4) · arctg(x/4) + C usa u = x/4, mas (x/4)² = x²/16. arctg(x²/4) + C põe o quadrado dentro do arco tangente. E ln(x² + 4)/(2x) + C integra como se o numerador fosse 2x e ainda divide por x.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "media",
    enunciado:
      "Qual é a integral ∫ sen x/(cos x)² dx, nos intervalos em que cos x ≠ 0?",
    opcoes: [
      "−1/cos x + C",
      "ln|cos x| + C",
      "tg x + C",
      "1/cos x + C",
      "−(cos x)³/3 + C",
    ],
    correta: 3,
    explicacao:
      "Com u = cos x, du = −sen x dx, e sen x dx = −du. A integral vira −∫ u⁻² du = u⁻¹, e voltando para x: 1/cos x + C = sec x + C. Os dois sinais de menos, o de du e o da primitiva de u⁻², se cancelam.\n\n−1/cos x + C esquece um dos dois sinais. ln|cos x| + C seria a resposta para sen x/cos x, sem o quadrado, e ainda com o sinal errado. tg x + C tem derivada (sec x)², outra função. E −(cos x)³/3 + C aumenta o expoente de u⁻² no sentido errado.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "media",
    enunciado:
      "Nos intervalos em que 1 + sen x > 0, qual é a integral ∫ cos x/(1 + sen x) dx?",
    opcoes: [
      "−ln(1 + sen x) + C",
      "1/(1 + sen x) + C",
      "ln(1 + cos x) + C",
      "ln(1 + sen x) + C",
      "(1 + sen x)²/2 + C",
    ],
    correta: 3,
    explicacao:
      "Com u = 1 + sen x, du = cos x dx, e o integrando vira du/u, com primitiva ln|u| = ln(1 + sen x), já que u > 0. Resultado: ln(1 + sen x) + C. O numerador é a derivada do denominador, o padrão ∫ u'/u.\n\n−ln(1 + sen x) + C inventa um sinal que não existe. 1/(1 + sen x) + C tem derivada −cos x/(1 + sen x)². ln(1 + cos x) + C troca a função de dentro. E (1 + sen x)²/2 + C integra u, e não 1/u.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "media",
    enunciado:
      "Com u = 1 + eˣ, quanto vale a integral de eˣ/(1 + eˣ) entre x = 0 e x = ln 2?",
    opcoes: [
      "ln 3",
      "ln 2",
      "1/2",
      "ln(3/2)",
      "ln(3/2)/2",
    ],
    correta: 3,
    explicacao:
      "Com u = 1 + eˣ e du = eˣ dx, os limites viram u = 1 + 1 = 2 e u = 1 + 2 = 3. A integral vira ∫₂³ du/u = ln 3 − ln 2 = ln(3/2) ≈ 0,41. Trocar os limites evita voltar à variável x no fim.\n\nln 3 esquece de subtrair o valor no limite inferior. ln 2 é o limite superior em x, e não a integral. 1/2 aproxima sem integrar. E ln(3/2)/2 inventa um fator 1/2, como se du valesse 2eˣ dx.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "media",
    enunciado:
      "Para x > 0, qual é a integral ∫ sen(√x)/√x dx?",
    opcoes: [
      "2cos(√x) + C",
      "−cos(√x)/2 + C",
      "−cos(√x) + C",
      "−2cos(√x) + C",
      "2sen(√x) + C",
    ],
    correta: 3,
    explicacao:
      "Com u = √x, du = dx/(2√x), e dx/√x = 2 du. A integral vira 2∫ sen u du = −2cos u, e voltando para x: −2cos(√x) + C. Conferindo: (−2cos(√x))' = 2sen(√x) · 1/(2√x) = sen(√x)/√x.\n\n2cos(√x) + C erra o sinal da primitiva do seno. −cos(√x)/2 + C divide pelo fator em vez de multiplicar. −cos(√x) + C esquece o fator 2. E 2sen(√x) + C troca a primitiva do seno pela do cosseno.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "media",
    enunciado:
      "Para x > 0, qual é a integral ∫ (x² + 1)/(x³ + 3x) dx?",
    opcoes: [
      "ln(x³ + 3x) + C",
      "3 ln(x³ + 3x) + C",
      "(x³/3 + x)/(x⁴/4 + 3x²/2) + C",
      "ln(x³ + 3x)/3 + C",
      "ln(x² + 1) + C",
    ],
    correta: 3,
    explicacao:
      "A derivada do denominador é 3x² + 3 = 3(x² + 1), três vezes o numerador. Com u = x³ + 3x, du = 3(x² + 1) dx, e a integral vira (1/3)∫ du/u = ln u/3. Resultado: ln(x³ + 3x)/3 + C.\n\nln(x³ + 3x) + C esquece o fator 1/3. 3 ln(x³ + 3x) + C multiplica em vez de dividir. A alternativa com frações integra numerador e denominador em separado, o que não vale. E ln(x² + 1) + C integra só uma parte, sem relação com o denominador.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "dificil",
    enunciado:
      "Separando (sen x)³ = sen x · (1 − (cos x)²), qual é a integral ∫ (sen x)³ dx?",
    opcoes: [
      "(sen x)⁴/4 + C",
      "−(cos x)³/3 + C",
      "cos x − (cos x)³/3 + C",
      "−cos x + C",
      "−cos x + (cos x)³/3 + C",
    ],
    correta: 4,
    explicacao:
      "Com u = cos x, du = −sen x dx. A integral vira ∫ (1 − u²)(−du) = −u + u³/3, e voltando para x: −cos x + (cos x)³/3 + C. O truque é guardar um fator sen x para o du e escrever o resto em cosseno.\n\n(sen x)⁴/4 + C aplica a regra da potência ao seno, sem o fator cos x que a substituição exigiria. −(cos x)³/3 + C fica só com uma parcela e erra o sinal. cos x − (cos x)³/3 + C erra o sinal de du. E −cos x + C esquece a parcela −(cos x)² de 1 − (cos x)².",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "dificil",
    enunciado:
      "Com a substituição trigonométrica x = sen θ, qual é a integral ∫ √(1 − x²) dx, para |x| < 1?",
    opcoes: [
      "(1 − x²)^(3/2)/3 + C",
      "arcsen x + C",
      "x√(1 − x²) + C",
      "(x√(1 − x²) − arcsen x)/2 + C",
      "(x√(1 − x²) + arcsen x)/2 + C",
    ],
    correta: 4,
    explicacao:
      "Com x = sen θ, dx = cos θ dθ e √(1 − x²) = cos θ. A integral vira ∫ (cos θ)² dθ = θ/2 + sen(2θ)/4 = (θ + sen θ cos θ)/2. Voltando: θ = arcsen x e sen θ cos θ = x√(1 − x²). Resultado: (x√(1 − x²) + arcsen x)/2 + C. De −1 a 1, dá π/2, a área do semicírculo.\n\n(1 − x²)^(3/2)/3 + C aplica a regra da potência sem o fator −2x. arcsen x + C é a primitiva de 1/√(1 − x²). x√(1 − x²) + C fica só com uma parcela, sem o 1/2. E a última alternativa troca o sinal do arco seno.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "dificil",
    enunciado:
      "Multiplicando numerador e denominador por eˣ, qual é a integral ∫ dx/(eˣ + e^(−x))?",
    opcoes: [
      "ln(eˣ + e^(−x)) + C",
      "1/(eˣ − e^(−x)) + C",
      "arctg(e^(−x)) + C",
      "e^(−x) + C",
      "arctg(eˣ) + C",
    ],
    correta: 4,
    explicacao:
      "Multiplicando por eˣ em cima e embaixo: 1/(eˣ + e^(−x)) = eˣ/(e^(2x) + 1). Com u = eˣ, du = eˣ dx, e a integral vira ∫ du/(1 + u²) = arctg u. Resultado: arctg(eˣ) + C.\n\nln(eˣ + e^(−x)) + C tem derivada (eˣ − e^(−x))/(eˣ + e^(−x)), com a diferença no numerador. 1/(eˣ − e^(−x)) + C não sai de substituição nenhuma. arctg(e^(−x)) + C tem derivada com o sinal trocado. E e^(−x) + C ignora a soma no denominador.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "dificil",
    enunciado:
      "Com u = x³ + 1, que exige escrever x³ = u − 1, qual é a integral ∫ x⁵ · √(x³ + 1) dx?",
    opcoes: [
      "(2/9)(x³ + 1)^(3/2) + C",
      "(x⁶/6) · (2/3)(x³ + 1)^(3/2) + C",
      "(2/15)(x³ + 1)^(5/2) + C",
      "(2/5)(x³ + 1)^(5/2) − (2/3)(x³ + 1)^(3/2) + C",
      "(2/15)(x³ + 1)^(5/2) − (2/9)(x³ + 1)^(3/2) + C",
    ],
    correta: 4,
    explicacao:
      "Com u = x³ + 1, du = 3x² dx, e x⁵ dx = x³ · x² dx = (u − 1) du/3. A integral vira (1/3)∫ (u − 1)√u du = (1/3)[(2/5)u^(5/2) − (2/3)u^(3/2)]. Resultado: (2/15)(x³ + 1)^(5/2) − (2/9)(x³ + 1)^(3/2) + C.\n\n(2/9)(x³ + 1)^(3/2) + C trata o x³ que sobra como se fosse 1, e ainda erra o sinal. A alternativa com x⁶/6 multiplica primitivas dos fatores, o que não vale. (2/15)(x³ + 1)^(5/2) + C esquece a parcela que vem do −1 em u − 1. E a última alternativa esquece o fator 1/3 de du.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "dificil",
    enunciado:
      "Qual é o valor da integral de cos x/(1 + (sen x)²), de 0 a π/2, feita a troca u = sen x?",
    opcoes: [
      "π/2",
      "ln 2",
      "1",
      "ln 2/2",
      "π/4",
    ],
    correta: 4,
    explicacao:
      "Com u = sen x e du = cos x dx, os limites viram 0 e 1, e a integral vira ∫₀¹ du/(1 + u²) = arctg 1 − arctg 0 = π/4.\n\nπ/2 usa o limite x = π/2 no lugar de u = 1, sem trocar os limites. ln 2 integra como se fosse ln(1 + u²), sem o fator certo. 1 é o valor do integrando em x = 0. E ln 2/2 é a primitiva de u/(1 + u²), com um u a mais no numerador.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "dificil",
    enunciado:
      "Sabe-se que a integral de f de 0 a 2 vale 6. Com u = 2x, quanto vale a integral de f(2x) de 0 a 1?",
    opcoes: [
      "6",
      "12",
      "3/2",
      "1",
      "3",
    ],
    correta: 4,
    explicacao:
      "Com u = 2x, du = 2 dx, e dx = du/2; os limites x = 0 e x = 1 viram u = 0 e u = 2. Então ∫₀¹ f(2x) dx = (1/2)∫₀² f(u) du = 6/2 = 3. Comprimir o gráfico horizontalmente pela metade reduz a área pela metade.\n\n6 esquece o fator 1/2 da substituição. 12 multiplica em vez de dividir. 3/2 divide duas vezes. E 1 é o novo limite superior, e não o valor da integral.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "dificil",
    enunciado:
      "Se f é contínua e ímpar, o que vale a integral de f de −a até a, qualquer que seja a > 0?",
    opcoes: [
      "2 · (integral de f de 0 a a)",
      "a · f(a)",
      "f(a) − f(−a)",
      "Depende da função",
      "0",
    ],
    correta: 4,
    explicacao:
      "Com u = −x na parte negativa: ∫₋ₐ⁰ f(x) dx = ∫ₐ⁰ f(−u)(−du) = ∫₀ᵃ f(−u) du = −∫₀ᵃ f(u) du, porque f(−u) = −f(u). Somando com a parte positiva, ∫₋ₐᵃ f = −∫₀ᵃ f + ∫₀ᵃ f = 0. As áreas acima e abaixo do eixo se cancelam por simetria.\n\nO dobro da integral de 0 a a vale para funções pares, e não ímpares. a · f(a) é a área de um retângulo, sem relação com a simetria. f(a) − f(−a) = 2f(a) confunde a integral com uma diferença de valores. E o resultado não depende da função: vale para toda f ímpar.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "dificil",
    enunciado:
      "Completando o quadrado no denominador, qual é a integral ∫ dx/(x² + 2x + 5)?",
    opcoes: [
      "arctg(x + 1) + C",
      "ln(x² + 2x + 5) + C",
      "(1/2) · arctg(x/2) + C",
      "(1/4) · arctg((x + 1)/4) + C",
      "(1/2) · arctg((x + 1)/2) + C",
    ],
    correta: 4,
    explicacao:
      "Completando o quadrado: x² + 2x + 5 = (x + 1)² + 4. Com u = x + 1, a integral vira ∫ du/(u² + 4) = (1/2)arctg(u/2), pela mesma conta de ∫ dx/(x² + 4). Resultado: (1/2) · arctg((x + 1)/2) + C.\n\narctg(x + 1) + C seria a resposta para 1/((x + 1)² + 1), com 1 no lugar de 4. ln(x² + 2x + 5) + C é a primitiva de (2x + 2)/(x² + 2x + 5), com numerador. (1/2) · arctg(x/2) + C esquece o deslocamento x + 1. E (1/4) · arctg((x + 1)/4) + C usa 4 como se fosse o raio, e não o seu quadrado.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "dificil",
    enunciado:
      "Para x > 1, com u = √(x − 1), qual é a integral ∫ dx/(x√(x − 1))?",
    opcoes: [
      "arctg(√(x − 1)) + C",
      "2√(x − 1)/x + C",
      "ln(x√(x − 1)) + C",
      "2 arcsen(√(x − 1)) + C",
      "2 arctg(√(x − 1)) + C",
    ],
    correta: 4,
    explicacao:
      "Com u = √(x − 1), x = u² + 1 e dx = 2u du. A integral vira ∫ 2u du/((u² + 1) · u) = 2∫ du/(u² + 1) = 2 arctg u. Resultado: 2 arctg(√(x − 1)) + C.\n\narctg(√(x − 1)) + C esquece o fator 2 de dx = 2u du. 2√(x − 1)/x + C não sai de substituição nenhuma. ln(x√(x − 1)) + C trata o integrando como u'/u, mas o numerador não é a derivada do denominador. E 2 arcsen(√(x − 1)) + C troca o arco tangente pelo arco seno, que nem está definido para x > 2.",
  },
  {
    materia: "calculo",
    tema: "Integração por substituição",
    dificuldade: "dificil",
    enunciado:
      "Trocando √x por u, calcule a integral de √x/(1 + x) no intervalo [0, 1]. Que número se obtém?",
    opcoes: [
      "π/2",
      "1 − π/4",
      "2 − π/4",
      "ln 2",
      "2 − π/2",
    ],
    correta: 4,
    explicacao:
      "Com u = √x, x = u² e dx = 2u du; os limites ficam 0 e 1. A integral vira ∫₀¹ 2u²/(1 + u²) du = 2∫₀¹ (1 − 1/(1 + u²)) du = 2(1 − π/4) = 2 − π/2 ≈ 0,43.\n\nπ/2 fica só com a parte do arco tangente, sem o 1 e com o sinal trocado. 1 − π/4 esquece o fator 2 de dx = 2u du. 2 − π/4 aplica o fator 2 só a uma das parcelas. E ln 2 é a integral de 1/(1 + x), sem o √x no numerador.",
  },
];
