/* Sistemas lineares, matrizes e determinantes (50 questões) — exatas-militar.

   Autorais, escritas por Claude (Anthropic) em 2026-09-29 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/exatas-militar__sistemas-lineares-matrizes-e-determinantes.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/exatas-militar__sistemas-lineares-matrizes-e-determinantes.json. */

export const questoes = [
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "facil",
    enunciado:
      "Qual é o determinante da matriz A, de linhas (2, 3) e (1, 4)?",
    opcoes: [
      "11",
      "5",
      "−5",
      "8",
      "3",
    ],
    correta: 1,
    explicacao:
      "Numa matriz 2 × 2, o determinante é o produto da diagonal principal menos o produto da diagonal secundária: det A = 2 · 4 − 3 · 1 = 8 − 3 = 5.\n\n11 soma os dois produtos em vez de subtrair. −5 subtrai na ordem inversa, secundária menos principal. 8 fica só com a diagonal principal. E 3 é só o produto da diagonal secundária, 3 · 1, sem o da principal.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "facil",
    enunciado:
      "Sendo A a matriz de linhas (1, 2) e (0, 1) e B a matriz de linhas (3, 0) e (1, 2), qual é o produto AB?",
    opcoes: [
      "Linhas (3, 0) e (0, 2)",
      "Linhas (3, 6) e (1, 4)",
      "Linhas (4, 2) e (1, 3)",
      "Linhas (5, 4) e (1, 2)",
      "Linhas (3, 5) e (0, 2)",
    ],
    correta: 3,
    explicacao:
      "No produto AB, o elemento da linha i e coluna j é o produto da linha i de A pela coluna j de B. A linha 1 de A, (1, 2), com a coluna 1 de B, (3, 1), dá 3 + 2 = 5; com a coluna 2, (0, 2), dá 0 + 4 = 4. A linha 2 de A, (0, 1), dá 0 + 1 = 1 e 0 + 2 = 2. Então AB tem linhas (5, 4) e (1, 2).\n\n(3, 0) e (0, 2) multiplica elemento a elemento. (3, 6) e (1, 4) é o produto BA — a ordem importa, e AB ≠ BA aqui. (4, 2) e (1, 3) é a soma A + B. E (3, 5) e (0, 2) multiplica linha de A por linha de B, e não por coluna.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "facil",
    enunciado:
      "A matriz A tem linhas (1, 2, 3) e (4, 5, 6). Qual é a ordem da sua transposta, Aᵀ?",
    opcoes: [
      "2 × 3",
      "3 × 2",
      "3 × 3",
      "2 × 2",
      "6 × 1",
    ],
    correta: 1,
    explicacao:
      "A transposta troca linhas por colunas: a 1ª linha de A vira a 1ª coluna de Aᵀ, e assim por diante. Como A tem 2 linhas e 3 colunas (ordem 2 × 3), Aᵀ tem 3 linhas e 2 colunas: ordem 3 × 2. As linhas de Aᵀ são (1, 4), (2, 5) e (3, 6).\n\n2 × 3 é a ordem da própria A. 3 × 3 e 2 × 2 supõem que a transposta seja quadrada. E 6 × 1 empilha os seis elementos numa coluna só, o que não é transpor.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "facil",
    enunciado:
      "A matriz A tem ordem 2 × 3, e a matriz B tem ordem 3 × 4. Qual é a ordem do produto AB?",
    opcoes: [
      "2 × 4",
      "3 × 3",
      "4 × 2",
      "2 × 3",
      "O produto AB não existe",
    ],
    correta: 0,
    explicacao:
      "O produto AB existe quando o número de colunas de A é igual ao número de linhas de B — aqui, 3 e 3. O resultado tem o número de linhas de A e o número de colunas de B: ordem 2 × 4.\n\n3 × 3 usa as dimensões “do meio”, que precisam coincidir, mas não aparecem no resultado. 4 × 2 inverte a ordem, como se fosse o produto BA, que nem existe (B tem 4 colunas e A, 2 linhas). 2 × 3 repete a ordem de A. E dizer que o produto não existe inverte a condição, que aqui é satisfeita.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "facil",
    enunciado:
      "Calculando pela regra de Sarrus o determinante da matriz de linhas (1, 2, 0), (3, 1, 2) e (0, 1, 1), qual resultado se obtém?",
    opcoes: [
      "−7",
      "7",
      "−5",
      "9",
      "1",
    ],
    correta: 0,
    explicacao:
      "Pela regra de Sarrus, os produtos no sentido da diagonal principal são 1 · 1 · 1 + 2 · 2 · 0 + 0 · 3 · 1 = 1, e os produtos no sentido da secundária são 0 · 1 · 0 + 1 · 2 · 1 + 1 · 3 · 2 = 8. O determinante é 1 − 8 = −7.\n\n7 subtrai na ordem inversa. −5 esquece um dos produtos da diagonal secundária, 1 · 2 · 1. 9 soma as duas partes em vez de subtrair. E 1 fica só com a parte da diagonal principal.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "facil",
    enunciado:
      "Qual é a solução do sistema formado pelas equações x + y = 5 e x − y = 1?",
    opcoes: [
      "x = 2 e y = 3",
      "x = 4 e y = 1",
      "x = 3 e y = 2",
      "x = 6 e y = −1",
      "x = 3 e y = −2",
    ],
    correta: 2,
    explicacao:
      "Somando as duas equações, y se cancela: 2x = 6, e x = 3. Voltando à primeira, 3 + y = 5, e y = 2. Conferindo na segunda: 3 − 2 = 1.\n\nx = 2 e y = 3 troca os valores e falha na segunda equação (2 − 3 = −1). x = 4 e y = 1 satisfaz só a primeira. x = 6 e y = −1 toma 2x = 6 como se fosse x = 6 e ajusta y pela primeira equação. E x = 3 e y = −2 erra o sinal de y.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "facil",
    enunciado:
      "O traço de uma matriz quadrada é a soma dos elementos da sua diagonal principal. Qual é o traço da matriz de linhas (4, −1, 2), (0, 3, 5) e (7, 1, −2)?",
    opcoes: [
      "9",
      "12",
      "5",
      "19",
      "−2",
    ],
    correta: 2,
    explicacao:
      "A diagonal principal é formada pelos elementos a₁₁ = 4, a₂₂ = 3 e a₃₃ = −2. O traço é 4 + 3 + (−2) = 5.\n\n9 ignora o sinal de −2. 12 soma a diagonal secundária (2 + 3 + 7). 19 soma todos os elementos da matriz. E −2 é só o último elemento da diagonal. O traço só se define para matrizes quadradas e tem propriedades úteis: o traço de A + B é a soma dos traços, e o de AB é igual ao de BA, mesmo quando AB ≠ BA.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "facil",
    enunciado:
      "A é uma matriz quadrada de ordem 3 com determinante 5. Qual é o determinante da matriz 2A?",
    opcoes: [
      "10",
      "80",
      "30",
      "40",
      "25",
    ],
    correta: 3,
    explicacao:
      "Multiplicar a matriz por 2 multiplica cada uma das suas 3 linhas por 2, e cada linha multiplicada multiplica o determinante por 2. Assim, det(2A) = 2³ · det A = 8 · 5 = 40.\n\n10 multiplica o determinante por 2 uma vez só, como se só uma linha fosse multiplicada. 80 usa 2⁴. 30 multiplica o determinante por 2 e pela ordem 3 (2 · 3 · 5). E 25 eleva o determinante ao quadrado.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "facil",
    enunciado:
      "Uma matriz quadrada A tem determinante −3. Qual é o determinante da sua transposta, Aᵀ?",
    opcoes: [
      "−3",
      "3",
      "−1/3",
      "1/3",
      "9",
    ],
    correta: 0,
    explicacao:
      "Transpor não altera o determinante: det(Aᵀ) = det A = −3. Na expansão do determinante, os produtos que aparecem são os mesmos, porque trocar linhas por colunas só muda a ordem em que os fatores são lidos.\n\n3 supõe que a transposição troque o sinal, o que acontece quando se trocam duas linhas de lugar, e não na transposição. −1/3 é o determinante da inversa, A⁻¹. 1/3 combina os dois enganos. E 9 é o determinante de A · Aᵀ, e não o de Aᵀ.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "facil",
    enunciado:
      "A matriz A = (aᵢⱼ), quadrada de ordem 3, é definida por aᵢⱼ = 2i − j. Qual é a soma dos elementos da diagonal principal de A?",
    opcoes: [
      "6",
      "18",
      "3",
      "12",
      "−6",
    ],
    correta: 0,
    explicacao:
      "Na diagonal principal, i = j, e aᵢᵢ = 2i − i = i. Então a₁₁ = 1, a₂₂ = 2, a₃₃ = 3, e a soma é 6.\n\n18 soma todos os nove elementos da matriz, e não só os da diagonal. 3 é só a₃₃. 12 usa aᵢᵢ = 2i, esquecendo o −j (2 + 4 + 6). E −6 inverte a lei de formação para j − 2i. Montando a matriz inteira, as linhas são (1, 0, −1), (3, 2, 1) e (5, 4, 3), e a diagonal principal é 1, 2, 3.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "facil",
    enunciado:
      "Como se classifica o sistema formado pelas equações 2x + 4y = 6 e x + 2y = 3?",
    opcoes: [
      "Possível e determinado",
      "Impossível",
      "Possível e indeterminado",
      "Possível, com exatamente duas soluções",
      "Impossível, porque as equações são proporcionais",
    ],
    correta: 2,
    explicacao:
      "A primeira equação é exatamente o dobro da segunda: 2x + 4y = 6 equivale a x + 2y = 3. Na prática, há uma só equação para duas incógnitas, e todo par da forma (3 − 2y, y) é solução. O sistema é possível e indeterminado.\n\n“Possível e determinado” exigiria equações independentes, cujas retas se cortam num ponto só. “Impossível” valeria se os coeficientes fossem proporcionais mas os termos independentes não, como em x + 2y = 3 e 2x + 4y = 7. Um sistema linear nunca tem exatamente duas soluções. E equações proporcionais, inclusive no termo independente, representam a mesma reta: infinitas soluções, e não nenhuma.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "facil",
    enunciado:
      "Qual é a inversa da matriz A, de linhas (2, 1) e (5, 3)?",
    opcoes: [
      "Linhas (3, 1) e (5, 2)",
      "Linhas (2, −1) e (−5, 3)",
      "Linhas (3, −1) e (−5, 2)",
      "Linhas (1/2, 1) e (1/5, 1/3)",
      "Linhas (−3, 1) e (5, −2)",
    ],
    correta: 2,
    explicacao:
      "det A = 2 · 3 − 1 · 5 = 1. Para uma matriz 2 × 2 de linhas (a, b) e (c, d), a inversa é (1/det) vezes a matriz de linhas (d, −b) e (−c, a): trocam-se de lugar os elementos da diagonal principal e muda-se o sinal dos da secundária. Com det = 1, A⁻¹ tem linhas (3, −1) e (−5, 2). Conferindo: A · A⁻¹ tem linhas (6 − 5, −2 + 2) = (1, 0) e (15 − 15, −5 + 6) = (0, 1).\n\n(3, 1) e (5, 2) esquece de trocar os sinais. (2, −1) e (−5, 3) não troca de lugar os elementos da diagonal principal. (1/2, 1) e (1/5, 1/3) inverte elemento a elemento, o que não dá a inversa. E (−3, 1) e (5, −2) é a inversa com o sinal trocado, como se det fosse −1.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "media",
    enunciado:
      "Para quais valores de x o determinante da matriz de linhas (x, 2) e (3, x − 1) é igual a zero?",
    opcoes: [
      "x = −3 ou x = 2",
      "x = 2 ou x = 3",
      "x = 6 ou x = −1",
      "x = 0 ou x = 1",
      "x = 3 ou x = −2",
    ],
    correta: 4,
    explicacao:
      "det = x(x − 1) − 2 · 3 = x² − x − 6. Igualando a zero: x² − x − 6 = 0, cujas raízes são 3 e −2 (soma 1, produto −6). Conferindo com x = 3: a matriz fica com linhas (3, 2) e (3, 2), iguais, e determinante 0.\n\nx = −3 ou x = 2 troca os sinais das raízes. x = 2 ou x = 3 resolve x² − 5x + 6 = 0, errando o termo em x. x = 6 ou x = −1 resolve x² − 5x − 6 = 0, com o mesmo tipo de erro. E x = 0 ou x = 1 anula só o produto x(x − 1), esquecendo o termo 2 · 3.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "media",
    enunciado:
      "No sistema formado por x + y + z = 6, x − y + z = 2 e 2x + y − z = 1, qual é o valor de z?",
    opcoes: [
      "3",
      "2",
      "1",
      "6",
      "−3",
    ],
    correta: 0,
    explicacao:
      "Subtraindo a segunda equação da primeira: 2y = 4, e y = 2. Com y = 2, a primeira fica x + z = 4, e a terceira, 2x − z = −1. Somando essas duas: 3x = 3, x = 1, e então z = 3. A solução é (1, 2, 3); conferindo na terceira: 2 + 2 − 3 = 1.\n\n2 é o valor de y, e 1, o de x. 6 é o termo independente da primeira equação, a soma x + y + z. E −3 erra o sinal ao isolar z.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "media",
    enunciado:
      "Seja A a matriz diagonal de linhas (2, 0) e (0, 3). Qual é a matriz A⁵?",
    opcoes: [
      "Linhas (10, 0) e (0, 15)",
      "Linhas (32, 0) e (0, 32)",
      "Linhas (7, 0) e (0, 8)",
      "Linhas (32, 0) e (0, 243)",
      "Linhas (243, 0) e (0, 32)",
    ],
    correta: 3,
    explicacao:
      "Multiplicar matrizes diagonais multiplica os elementos correspondentes da diagonal, e os zeros continuam zeros. Por isso, a potência de uma matriz diagonal eleva cada elemento da diagonal: A⁵ tem linhas (2⁵, 0) e (0, 3⁵), ou (32, 0) e (0, 243).\n\n(10, 0) e (0, 15) multiplica a matriz por 5, em vez de elevá-la. (32, 0) e (0, 32) eleva só o primeiro elemento e repete o resultado. (7, 0) e (0, 8) soma 5 a cada elemento. E (243, 0) e (0, 32) troca as posições dos resultados.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "media",
    enunciado:
      "As matrizes quadradas A e B, de mesma ordem, têm determinantes 3 e −2, respectivamente. Qual é o determinante de A⁻¹ · B?",
    opcoes: [
      "−2/3",
      "−6",
      "−3/2",
      "2/3",
      "1/6",
    ],
    correta: 0,
    explicacao:
      "O determinante do produto é o produto dos determinantes, e o da inversa é o inverso do determinante: det(A⁻¹ · B) = (1/det A) · det B = (1/3) · (−2) = −2/3.\n\n−6 usa det A em vez de 1/det A. −3/2 inverte a fração, como se fosse det(B⁻¹ · A). 2/3 perde o sinal de det B. E 1/6 inverte o produto dos determinantes, 3 · (−2), e ainda perde o sinal.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "media",
    enunciado:
      "Para que valor de a o sistema formado por x + y = 2 e 2x + ay = 5 é impossível?",
    opcoes: [
      "5/2",
      "2",
      "0",
      "−2",
      "1",
    ],
    correta: 1,
    explicacao:
      "O sistema deixa de ter solução única quando os coeficientes das incógnitas são proporcionais: 2/1 = a/1, isto é, a = 2. Nesse caso, a segunda equação vira 2x + 2y = 5, ou x + y = 5/2, o que contradiz x + y = 2: não há solução. Para qualquer outro a, o determinante 1 · a − 1 · 2 é diferente de zero, e há solução única.\n\n5/2 compara os termos independentes, e não os coeficientes. Com a = 0, o sistema tem a solução x = 5/2, y = −1/2. Com a = −2, os coeficientes não são proporcionais, e a solução existe. E a = 1 também dá solução única: x = 3, y = −1.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "media",
    enunciado:
      "Qual é o elemento da 2ª linha e 1ª coluna da inversa da matriz de linhas (1, 2) e (3, 4)?",
    opcoes: [
      "−3/2",
      "3/2",
      "3",
      "1/3",
      "−3",
    ],
    correta: 1,
    explicacao:
      "det = 1 · 4 − 2 · 3 = −2. A inversa é (1/det) vezes a matriz de linhas (4, −2) e (−3, 1), isto é, tem linhas (−2, 1) e (3/2, −1/2). O elemento pedido é −3 dividido por −2, que dá 3/2.\n\n−3/2 esquece que o determinante é negativo e divide −3 por 2. 3 esquece de dividir pelo determinante e perde o sinal. 1/3 inverte só o elemento da matriz original. E −3 é o elemento antes da divisão pelo determinante.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "media",
    enunciado:
      "Sejam A a matriz de linhas (2, 1) e (1, 1), e B a matriz de linhas (5, 3) e (2, 4). Se X é a matriz tal que AX = B, qual é o determinante de X?",
    opcoes: [
      "1/14",
      "13",
      "15",
      "26",
      "14",
    ],
    correta: 4,
    explicacao:
      "Como det(AX) = det A · det X, vale det X = det B / det A. Aqui, det A = 2 − 1 = 1 e det B = 20 − 6 = 14, então det X = 14. Não é preciso achar X: basta a propriedade do produto.\n\n1/14 inverte a divisão. 13 subtrai os determinantes (14 − 1), e 15 os soma. E 26 soma os dois produtos de B (20 + 6) em vez de subtrair. Quem preferir achar X chega às linhas (3, −1) e (−1, 5), de determinante 15 − 1 = 14.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "media",
    enunciado:
      "Para que valor de x as matrizes A, de linhas (1, x) e (0, 2), e B, de linhas (1, 1) e (0, 3), comutam, isto é, AB = BA?",
    opcoes: [
      "1",
      "2",
      "0",
      "1/2",
      "−1/2",
    ],
    correta: 3,
    explicacao:
      "AB tem linhas (1, 1 + 3x) e (0, 6); BA tem linhas (1, x + 2) e (0, 6). As duas só diferem no elemento da 1ª linha e 2ª coluna, e a igualdade exige 1 + 3x = x + 2, isto é, 2x = 1 e x = 1/2.\n\nCom x = 1, AB tem 4 nessa posição, e BA, 3. Com x = 2, 7 e 4. Com x = 0, 1 e 2. E x = −1/2 erra o sinal ao isolar x. Em geral, matrizes não comutam, e é preciso impor a condição.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "media",
    enunciado:
      "Uma matriz 3 × 3 tem determinante 7. Trocam-se de posição duas de suas linhas e, em seguida, multiplica-se uma das linhas por 3. Qual é o determinante da matriz obtida?",
    opcoes: [
      "21",
      "−189",
      "−21",
      "−7",
      "10",
    ],
    correta: 2,
    explicacao:
      "Trocar duas linhas de lugar muda o sinal do determinante: 7 vira −7. Multiplicar uma linha por 3 multiplica o determinante por 3: −7 vira −21.\n\n21 esquece a troca de sinal. −189 multiplica a matriz inteira por 3, o que multiplicaria o determinante por 3³ = 27. −7 esquece o fator 3. E 10 soma 3 ao determinante, em vez de multiplicar. Já somar a uma linha um múltiplo de outra não altera o determinante — é a operação usada no escalonamento.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "media",
    enunciado:
      "Qual é o posto (característica) da matriz de linhas (1, 2, 3), (2, 4, 6) e (1, 1, 1)?",
    opcoes: [
      "3",
      "1",
      "0",
      "6",
      "2",
    ],
    correta: 4,
    explicacao:
      "O posto é o número máximo de linhas linearmente independentes. A 2ª linha é o dobro da 1ª, então não acrescenta nada. A 3ª, (1, 1, 1), não é múltipla da 1ª. Sobram duas linhas independentes: o posto é 2. Escalonando, L₂ − 2L₁ zera a 2ª linha, e L₃ − L₁ = (0, −1, −2) não se anula.\n\n3 supõe as três linhas independentes, mas o determinante é zero. 1 supõe todas proporcionais à primeira. 0 só vale para a matriz nula. E 6 não é um posto possível numa matriz 3 × 3, cujo posto é no máximo 3.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "media",
    enunciado:
      "Para que valor de k o sistema homogêneo x + y + z = 0, x + 2y + kz = 0, x + 3y + 5z = 0 admite soluções além da trivial (0, 0, 0)?",
    opcoes: [
      "5",
      "3",
      "0",
      "−3",
      "2",
    ],
    correta: 1,
    explicacao:
      "Um sistema homogêneo sempre tem a solução trivial; tem outras quando o determinante da matriz dos coeficientes é zero. det = 1(2 · 5 − 3k) − 1(1 · 5 − k) + 1(1 · 3 − 2 · 1) = 10 − 3k − 5 + k + 1 = 6 − 2k. Igualando a zero, k = 3. Com k = 3, as linhas (1, 1, 1), (1, 2, 3) e (1, 3, 5) estão em progressão aritmética: a do meio é a média das outras duas.\n\n5 copia o último coeficiente da terceira equação. 0 anula só um termo da expansão. −3 erra o sinal ao isolar k. E 2 é o coeficiente de y na segunda equação.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "media",
    enunciado:
      "Um cofre tem 30 moedas, todas de 10 ou de 25 centavos, que somam R$ 5,40. Quantas moedas de 25 centavos há no cofre?",
    opcoes: [
      "14",
      "20",
      "12",
      "18",
      "16",
    ],
    correta: 4,
    explicacao:
      "Sendo x as moedas de 10 e y as de 25: x + y = 30 e 10x + 25y = 540, em centavos. Multiplicando a primeira por 10 e subtraindo: 15y = 240, e y = 16. Então x = 14. Conferindo: 14 · 10 + 16 · 25 = 140 + 400 = 540.\n\n14 é o número de moedas de 10. 20, 12 e 18 não fecham a soma dos valores: com 20 moedas de 25, o total seria R$ 6,00; com 12, R$ 4,80; com 18, R$ 5,70.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "media",
    enunciado:
      "Três números somam 14. O primeiro é o dobro do segundo, e o terceiro é 1 a menos que o primeiro. Qual é o terceiro número?",
    opcoes: [
      "6",
      "5",
      "3",
      "4",
      "7",
    ],
    correta: 1,
    explicacao:
      "Chamando os números de a, b e c: a + b + c = 14, a = 2b e c = a − 1 = 2b − 1. Substituindo: 2b + b + 2b − 1 = 14, ou 5b = 15, e b = 3. Então a = 6 e c = 5. Conferindo: 6 + 3 + 5 = 14.\n\n6 é o primeiro número, e 3, o segundo. 4 usa c = b + 1, trocando a referência. E 7 é o primeiro mais 1, trocando “a menos” por “a mais”. Escrito como sistema, o problema é a + b + c = 14, a − 2b = 0 e c − a = −1, que tem solução única.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "media",
    enunciado:
      "Seja B a inversa da matriz triangular de linhas (1, 0, 0), (2, 1, 0) e (3, 4, 1). Quanto vale b₃₁, o elemento da 3ª linha e 1ª coluna de B?",
    opcoes: [
      "−3",
      "3",
      "−5",
      "11",
      "5",
    ],
    correta: 4,
    explicacao:
      "A matriz é triangular inferior com diagonal de 1s, e a inversa também é. Impondo A · A⁻¹ = I, a 1ª coluna (x, y, z) de A⁻¹ satisfaz x = 1, 2x + y = 0 e 3x + 4y + z = 0. Daí y = −2 e z = −3 − 4(−2) = 5.\n\n−3 só troca o sinal do elemento correspondente de A, regra que vale apenas para os elementos logo abaixo da diagonal. 3 copia o elemento de A. −5 erra o sinal na última conta. E 11 soma 3 + 8 em vez de subtrair.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "media",
    enunciado:
      "A matriz de linhas (2, 5, 7), (0, 3, 1) e (0, 0, −1) é triangular. Quanto vale o seu determinante?",
    opcoes: [
      "6",
      "4",
      "−13",
      "−6",
      "0",
    ],
    correta: 3,
    explicacao:
      "Numa matriz triangular, o determinante é o produto dos elementos da diagonal principal, porque todos os outros produtos da expansão contêm algum zero: 2 · 3 · (−1) = −6.\n\n6 perde o sinal de −1. 4 soma os elementos da diagonal (2 + 3 − 1). −13 subtrai do produto da diagonal elementos acima dela (−6 − 7), que não entram na conta. E 0 supõe que os zeros abaixo da diagonal anulem o determinante, o que só aconteceria com um zero na própria diagonal.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "media",
    enunciado:
      "Sem desenvolver a regra de Sarrus, dá para saber o determinante da matriz de linhas (1, 2, 3), (4, 5, 6) e (2, 4, 6). Quanto ele vale?",
    opcoes: [
      "102",
      "30",
      "0",
      "204",
      "−3",
    ],
    correta: 2,
    explicacao:
      "A 3ª linha, (2, 4, 6), é o dobro da 1ª, (1, 2, 3). Quando duas linhas são proporcionais, o determinante é zero: subtraindo da 3ª linha o dobro da 1ª, ela vira uma linha de zeros, e essa operação não altera o determinante. Pela regra de Sarrus também dá 0: 102 − 102.\n\n102 é só a parte da diagonal principal, sem subtrair a da secundária. 204 soma as duas partes. 30 é só o produto da diagonal principal, 1 · 5 · 6. E −3 é o determinante do bloco 2 × 2 do canto superior esquerdo.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "media",
    enunciado:
      "A matriz de linhas (1, 1, 1), (1, 2, 3) e (1, 4, 9) é uma matriz de Vandermonde. Quanto vale o seu determinante?",
    opcoes: [
      "6",
      "1",
      "0",
      "2",
      "−2",
    ],
    correta: 3,
    explicacao:
      "É uma matriz de Vandermonde gerada por 1, 2 e 3 (as linhas são as potências 0, 1 e 2 desses números). O determinante é o produto das diferenças (2 − 1)(3 − 1)(3 − 2) = 1 · 2 · 1 = 2. Pela regra de Sarrus: 18 + 3 + 4 − (2 + 12 + 9) = 25 − 23 = 2.\n\n6 multiplica os geradores, 1 · 2 · 3, e não as diferenças. 1 multiplica só as diferenças entre vizinhos, (2 − 1)(3 − 2), esquecendo 3 − 1. −2 faz as diferenças na ordem inversa, (1 − 2)(1 − 3)(2 − 3). E 0 seria o valor se dois geradores fossem iguais, o que não acontece.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "media",
    enunciado:
      "Qual é o cofator do elemento da 1ª linha e 2ª coluna da matriz de linhas (1, 2, 3), (4, 5, 6) e (7, 8, 10)?",
    opcoes: [
      "−2",
      "2",
      "4",
      "−4",
      "82",
    ],
    correta: 1,
    explicacao:
      "O cofator de aᵢⱼ é (−1)ⁱ⁺ʲ vezes o determinante da matriz que sobra ao eliminar a linha i e a coluna j. Eliminando a 1ª linha e a 2ª coluna, sobram as linhas (4, 6) e (7, 10), de determinante 40 − 42 = −2. Com (−1)¹⁺² = −1, o cofator é 2.\n\n−2 é o menor complementar, sem o sinal (−1)ⁱ⁺ʲ. 4 multiplica o cofator pelo próprio elemento, a₁₂ = 2, que é a parcela que entraria na expansão de Laplace; −4 faz o mesmo com o menor. E 82 soma os dois produtos do menor, 40 + 42.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "media",
    enunciado:
      "Seja A a matriz de linhas (0, 1) e (−1, 0). Qual é a matriz A²⁰²⁷?",
    opcoes: [
      "Linhas (0, 1) e (−1, 0)",
      "Linhas (1, 0) e (0, 1)",
      "Linhas (0, −1) e (1, 0)",
      "Linhas (−1, 0) e (0, −1)",
      "Linhas (0, 2027) e (−2027, 0)",
    ],
    correta: 2,
    explicacao:
      "Calculando: A² tem linhas (−1, 0) e (0, −1), isto é, A² = −I. Então A⁴ = (−I)² = I, e as potências se repetem de 4 em 4. Como 2027 = 4 · 506 + 3, A²⁰²⁷ = A³ = A² · A = −A, que tem linhas (0, −1) e (1, 0).\n\n(0, 1) e (−1, 0) é o próprio A, que corresponderia a resto 1 na divisão por 4. A identidade corresponderia a resto 0, e −I, a resto 2. E (0, 2027) e (−2027, 0) multiplica A pelo expoente, o que não é potência de matriz.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "media",
    enunciado:
      "A matriz de linhas (1, x + 1, 3), (4, 5, y) e (3, 2y − 5, 0) é simétrica, isto é, igual à sua transposta. Qual é o valor de x + y?",
    opcoes: [
      "3",
      "5",
      "8",
      "7",
      "9",
    ],
    correta: 2,
    explicacao:
      "Numa matriz simétrica, aᵢⱼ = aⱼᵢ. Comparando a₁₂ com a₂₁: x + 1 = 4, então x = 3. Comparando a₂₃ com a₃₂: y = 2y − 5, então y = 5. Os elementos a₁₃ = a₃₁ = 3 já conferem. Logo x + y = 8.\n\n3 é só o valor de x, e 5, só o de y. 7 resolve x + 1 = 3, comparando com o elemento errado (a₁₃ = 3). E 9 toma x = 4, igual a a₂₁, esquecendo o +1 de x + 1.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "media",
    enunciado:
      "Sejam A a matriz de linhas (1, 2) e (0, 1), e B a matriz de linhas (2, 0) e (1, 1). Qual é o determinante de A + B?",
    opcoes: [
      "3",
      "2",
      "6",
      "8",
      "4",
    ],
    correta: 4,
    explicacao:
      "Primeiro soma-se elemento a elemento: A + B tem linhas (3, 2) e (1, 2). O determinante é 3 · 2 − 2 · 1 = 6 − 2 = 4.\n\n3 é det A + det B = 1 + 2: o determinante da soma não é a soma dos determinantes. 2 é det A · det B, que seria o determinante do produto AB, e não o da soma. 6 fica só com a diagonal principal de A + B. E 8 soma os dois produtos da diagonal (6 + 2).",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "media",
    enunciado:
      "Para quais valores de k a matriz de linhas (k, 4) e (1, k) não admite inversa?",
    opcoes: [
      "Apenas k = 2",
      "Apenas k = 4",
      "Apenas k = 0",
      "Para nenhum valor de k",
      "k = 2 ou k = −2",
    ],
    correta: 4,
    explicacao:
      "Uma matriz quadrada é invertível exatamente quando o seu determinante é diferente de zero. det = k · k − 4 · 1 = k² − 4, que se anula para k = 2 e para k = −2. Nesses dois casos, e só neles, a matriz não tem inversa: com k = 2, as linhas (2, 4) e (1, 2) são proporcionais.\n\n“Apenas k = 2” esquece a raiz negativa de k² = 4. k = 4 confunde o elemento 4 com a condição. k = 0 daria det = −4, e a matriz seria invertível. E “nenhum valor” ignora que o determinante pode se anular.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "media",
    enunciado:
      "Qual é a área do triângulo de vértices (1, 2), (4, 6) e (7, 2), calculada pelo determinante das coordenadas?",
    opcoes: [
      "24",
      "6",
      "−24",
      "12",
      "16",
    ],
    correta: 3,
    explicacao:
      "A área é metade do módulo do determinante da matriz de linhas (1, 2, 1), (4, 6, 1) e (7, 2, 1): det = 1(6 − 2) − 2(4 − 7) + 1(8 − 42) = 4 + 6 − 34 = −24, e a área é |−24|/2 = 12. Conferindo pela geometria: a base, de (1, 2) a (7, 2), mede 6, e a altura até (4, 6) mede 4: 6 · 4/2 = 12.\n\n24 esquece de dividir por 2. 6 divide por 4. −24 é o próprio determinante, com o sinal e sem a divisão — área não é negativa. E 16 é o perímetro do triângulo (5 + 5 + 6).",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "media",
    enunciado:
      "Para que valor de k os pontos (1, 1), (3, 5) e (k, 9) estão alinhados?",
    opcoes: [
      "7",
      "4",
      "9",
      "5",
      "3",
    ],
    correta: 3,
    explicacao:
      "Três pontos estão alinhados quando o determinante da matriz de linhas (1, 1, 1), (3, 5, 1) e (k, 9, 1) é zero: 1(5 − 9) − 1(3 − k) + 1(27 − 5k) = −4 − 3 + k + 27 − 5k = 20 − 4k = 0, e k = 5. Conferindo pela inclinação: de (1, 1) a (3, 5), y sobe 4 quando x sobe 2; de (3, 5) a (5, 9), também.\n\n7 faz y subir 4 quando x sobe 4 no segundo trecho, mudando a inclinação. 4 usa a subida de y como abscissa. 9 copia a ordenada do terceiro ponto. E 3 repete a abscissa do segundo ponto.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "media",
    enunciado:
      "Uma loja vende três produtos, a R$ 10, R$ 20 e R$ 5 a unidade. No primeiro dia, vendeu 2, 1 e 4 unidades de cada um, respectivamente; no segundo, 3, 0 e 2. Com as quantidades numa matriz Q (uma linha por dia) e os preços numa matriz coluna P, o produto QP dá o faturamento de cada dia. Qual foi o faturamento do segundo dia?",
    opcoes: [
      "R$ 60",
      "R$ 100",
      "R$ 35",
      "R$ 40",
      "R$ 50",
    ],
    correta: 3,
    explicacao:
      "O faturamento de um dia é a linha de quantidades daquele dia multiplicada pela coluna de preços: 3 · 10 + 0 · 20 + 2 · 5 = 30 + 0 + 10 = 40 reais. Pelo mesmo cálculo, o primeiro dia rendeu 2 · 10 + 1 · 20 + 4 · 5 = 60 reais.\n\nR$ 60 é o faturamento do primeiro dia. R$ 100 soma os dois dias. R$ 35 casa as quantidades com os preços em ordem inversa (3 · 5 + 0 · 20 + 2 · 10). E R$ 50 multiplica o total de unidades do dia, 5, pelo preço do primeiro produto.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "media",
    enunciado:
      "Seja A a matriz de linhas (0, 1, 2), (0, 0, 3) e (0, 0, 0). Qual é o elemento da 1ª linha e 3ª coluna de A²?",
    opcoes: [
      "4",
      "2",
      "0",
      "3",
      "6",
    ],
    correta: 3,
    explicacao:
      "O elemento da 1ª linha e 3ª coluna de A² é o produto da 1ª linha de A, (0, 1, 2), pela 3ª coluna de A, (2, 3, 0): 0 · 2 + 1 · 3 + 2 · 0 = 3. Os demais elementos de A² são zero, e A³ já é a matriz nula — A é nilpotente.\n\n4 eleva o elemento 2 ao quadrado, como se a potência fosse elemento a elemento. 2 copia o elemento de A. 0 supõe que A² já seja nula. E 6 multiplica 2 · 3, dois elementos de A que não se combinam no produto.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "media",
    enunciado:
      "Uma matriz A, de ordem 2, tem determinante 4. Qual é o determinante de 3A⁻¹?",
    opcoes: [
      "9/4",
      "3/4",
      "12",
      "4/9",
      "36",
    ],
    correta: 0,
    explicacao:
      "Duas propriedades: det(A⁻¹) = 1/det A = 1/4; e multiplicar uma matriz de ordem 2 por 3 multiplica o determinante por 3² = 9. Então det(3A⁻¹) = 9 · (1/4) = 9/4.\n\n3/4 multiplica o determinante por 3, e não por 3². 12 esquece a inversa (3 · 4). 4/9 inverte o resultado. E 36 esquece a inversa e usa 3² · 4. Com uma matriz concreta — a de linhas (2, 1) e (2, 3), de determinante 4 —, 3A⁻¹ tem linhas (9/4, −3/4) e (−3/2, 3/2), e determinante 27/8 − 9/8 = 9/4.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "media",
    enunciado:
      "Pela regra de Cramer, qual é o valor de y no sistema formado por 2x + 3y = 8 e x − y = −1?",
    opcoes: [
      "1",
      "−2",
      "2",
      "10",
      "1/2",
    ],
    correta: 2,
    explicacao:
      "O determinante dos coeficientes é D = 2 · (−1) − 3 · 1 = −5. Trocando a coluna de y pelos termos independentes, Dy = 2 · (−1) − 8 · 1 = −10. Então y = Dy/D = −10/(−5) = 2. Conferindo: com y = 2, a segunda equação dá x = 1, e 2 · 1 + 3 · 2 = 8.\n\n1 é o valor de x. −2 perde um dos sinais negativos na divisão. 10 esquece de dividir por D. E 1/2 faz a divisão invertida, D/Dy.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "dificil",
    enunciado:
      "Considere o sistema formado por x + y + z = 1, x + 2y + 3z = 2 e 2x + 3y + az = b. Para que valores de a e b ele é possível e indeterminado?",
    opcoes: [
      "a = 4 e b ≠ 3",
      "a = 4 e b = 3",
      "a ≠ 4 e b = 3",
      "a = 3 e b = 4",
      "a = 4, qualquer que seja b",
    ],
    correta: 1,
    explicacao:
      "O determinante dos coeficientes é 1(2a − 9) − 1(a − 6) + 1(3 − 4) = a − 4. Com a ≠ 4, o sistema é possível e determinado, qualquer que seja b. Com a = 4, os coeficientes da 3ª equação, (2, 3, 4), são a soma dos da 1ª e da 2ª; o sistema só é compatível se o termo independente também for a soma: b = 1 + 2 = 3. Então a = 4 e b = 3 dão infinitas soluções, e a = 4 com b ≠ 3 torna o sistema impossível.\n\n“a = 4 e b ≠ 3” descreve justamente o caso impossível. “a ≠ 4 e b = 3” dá solução única. “a = 3 e b = 4” troca os valores. E “a = 4, qualquer que seja b” esquece que o termo independente também precisa ser compatível.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "dificil",
    enunciado:
      "Qual é o determinante da matriz de ordem 4 de linhas (1, 2, 0, 0), (3, 4, 0, 0), (0, 0, 2, 1) e (0, 0, 5, 3)?",
    opcoes: [
      "2",
      "−1",
      "1",
      "24",
      "−2",
    ],
    correta: 4,
    explicacao:
      "A matriz é diagonal por blocos: o bloco de linhas (1, 2) e (3, 4) e o bloco de linhas (2, 1) e (5, 3), com zeros fora deles. Nesse caso, o determinante é o produto dos determinantes dos blocos: (4 − 6) · (6 − 5) = −2 · 1 = −2. A expansão de Laplace pela 1ª linha leva ao mesmo valor.\n\n2 perde o sinal do primeiro bloco. −1 soma os determinantes dos blocos, −2 + 1. 1 usa só o segundo bloco. E 24 multiplica os elementos da diagonal principal, 1 · 4 · 2 · 3, como se a matriz fosse triangular.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "dificil",
    enunciado:
      "Qual é o determinante da matriz de ordem 5 que tem todos os elementos da diagonal principal iguais a 2 e todos os demais iguais a 1?",
    opcoes: [
      "5",
      "32",
      "6",
      "10",
      "2",
    ],
    correta: 2,
    explicacao:
      "Somando todas as colunas à primeira, cada elemento da 1ª coluna vira 2 + 4 · 1 = 6; pondo o fator 6 em evidência, a 1ª coluna fica toda de 1s. Subtraindo a 1ª linha, (1, 1, 1, 1, 1), de cada uma das outras, cada linha i vira zero em tudo, menos um 1 na posição i: a matriz fica triangular com diagonal de 1s. Logo o determinante é 6 · 1 = 6. Em geral, para ordem n, vale n + 1.\n\n5 usa a ordem n no lugar de n + 1. 32 multiplica a diagonal, 2⁵, como se os 1s fora dela não contassem. 10 soma os elementos da diagonal. E 2 é o valor de um elemento da diagonal.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "dificil",
    enunciado:
      "Para a matriz A de linhas (1, 2) e (3, 4), existem números reais p e q tais que A² = pA + qI, em que I é a identidade de ordem 2. Qual é o valor de p + q?",
    opcoes: [
      "7",
      "5",
      "3",
      "−2",
      "10",
    ],
    correta: 0,
    explicacao:
      "A² tem linhas (7, 10) e (15, 22), e pA + qI tem linhas (p + q, 2p) e (3p, 4p + q). Comparando os elementos fora da diagonal: 2p = 10, então p = 5. Na diagonal, p + q = 7 (e 4p + q = 22 confere, com q = 2). Pelo teorema de Cayley-Hamilton, p é o traço (1 + 4 = 5) e q é −det A = −(4 − 6) = 2.\n\n5 é só o valor de p, o traço. 3 usa q = −2, o próprio det A, sem trocar o sinal. −2 é o det A. E 10 é o elemento da 1ª linha e 2ª coluna de A², e não a soma p + q.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "dificil",
    enunciado:
      "As equações x + y + z = 1, x − y + z = 1 e 2x + 2z = 3 representam três planos no espaço. O que se pode afirmar sobre o sistema formado por elas?",
    opcoes: [
      "Possível e determinado",
      "Impossível",
      "Possível e indeterminado",
      "Possível, com exatamente duas soluções",
      "Impossível, porque dois dos planos são paralelos",
    ],
    correta: 1,
    explicacao:
      "Somando as duas primeiras equações: 2x + 2z = 2. A terceira diz 2x + 2z = 3. As duas não podem valer ao mesmo tempo, então o sistema é impossível. Geometricamente, os três planos se cortam dois a dois em retas paralelas — como as faces laterais de um prisma —, sem ponto comum aos três.\n\n“Possível e determinado” e “possível e indeterminado” ignoram a contradição 2 = 3. Um sistema linear nunca tem exatamente duas soluções. E a afirmação sobre planos paralelos acerta a classificação, mas dá a razão errada: nenhum par de planos é paralelo, pois os vetores normais (1, 1, 1), (1, −1, 1) e (2, 0, 2) não são múltiplos um do outro.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "dificil",
    enunciado:
      "A matriz R, de linhas (cos 30°, −sen 30°) e (sen 30°, cos 30°), gira os pontos do plano de 30° em torno da origem. Qual é a matriz R⁶?",
    opcoes: [
      "Linhas (1, 0) e (0, 1)",
      "Linhas (0, −1) e (1, 0)",
      "Linhas (3√3, −3) e (3, 3√3)",
      "Linhas (27/64, 1/64) e (1/64, 27/64)",
      "Linhas (−1, 0) e (0, −1)",
    ],
    correta: 4,
    explicacao:
      "Aplicar R seis vezes gira os pontos de 6 · 30° = 180°. A rotação de 180° leva (x, y) em (−x, −y), e sua matriz tem linhas (−1, 0) e (0, −1): R⁶ = −I. O mesmo resultado sai de multiplicar R por si mesma seis vezes.\n\nA identidade corresponderia a um giro de 360°, que exigiria R¹². Linhas (0, −1) e (1, 0) é o giro de 90°, que é R³. (3√3, −3) e (3, 3√3) é 6R, que multiplica a matriz em vez de elevá-la. E (27/64, 1/64) e (1/64, 27/64) eleva cada elemento à sexta potência, o que não é potência de matriz.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "dificil",
    enunciado:
      "Qual é a soma de todos os elementos da inversa da matriz de linhas (1, 1, 1), (1, 2, 3) e (1, 3, 6)?",
    opcoes: [
      "0",
      "9",
      "19",
      "1/19",
      "1",
    ],
    correta: 4,
    explicacao:
      "det A = 1(12 − 9) − 1(6 − 3) + 1(3 − 2) = 3 − 3 + 1 = 1. A inversa é a transposta da matriz dos cofatores dividida pelo determinante: A⁻¹ tem linhas (3, −3, 1), (−3, 5, −2) e (1, −2, 1). As linhas somam 1, 0 e 0, e a soma de todos os elementos é 1.\n\n0 supõe que os elementos se cancelem por completo. 9 é o traço da inversa, 3 + 5 + 1, e não a soma de todos os elementos. 19 soma os elementos da própria A. E 1/19 inverte essa soma, como se a inversa de uma matriz fosse obtida invertendo números.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "dificil",
    enunciado:
      "Para que valor de k o sistema formado por kx + y = 1 e x + ky = 1 é impossível?",
    opcoes: [
      "k = 1",
      "k = −1",
      "k = 0",
      "k = 1 ou k = −1",
      "Para nenhum valor de k",
    ],
    correta: 1,
    explicacao:
      "O determinante dos coeficientes é k² − 1, que se anula em k = 1 e em k = −1. Com k = 1, as duas equações ficam iguais, x + y = 1: o sistema é possível e indeterminado. Com k = −1, ficam −x + y = 1 e x − y = 1; somando, 0 = 2, e o sistema é impossível. Para os demais valores de k, a solução é única.\n\nk = 1 dá infinitas soluções, e não nenhuma. k = 0 dá a solução x = 1, y = 1. “k = 1 ou k = −1” trata os dois zeros do determinante como equivalentes, mas eles levam a situações diferentes. E “para nenhum valor” esquece o caso k = −1.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "dificil",
    enunciado:
      "Qual é a soma dos valores distintos de x que anulam o determinante da matriz de linhas (x, 1, 1), (1, x, 1) e (1, 1, x)?",
    opcoes: [
      "−1",
      "0",
      "3",
      "1",
      "−2",
    ],
    correta: 0,
    explicacao:
      "Pela regra de Sarrus, o determinante é x³ + 1 + 1 − x − x − x = x³ − 3x + 2. Ele se anula em x = 1, raiz dupla, e em x = −2: x³ − 3x + 2 = (x − 1)²(x + 2). Os valores distintos são 1 e −2, de soma −1.\n\n0 soma as raízes contando o 1 duas vezes (1 + 1 − 2), que é a soma pela relação de Girard, com multiplicidade. 3 é o número de raízes, e não a soma. 1 e −2 são cada um dos valores isoladamente.",
  },
  {
    materia: "exatas-militar",
    tema: "Sistemas lineares, matrizes e determinantes",
    dificuldade: "dificil",
    enunciado:
      "Seja A a matriz de linhas (1, 1) e (1, 0). Qual é o elemento da 1ª linha e 2ª coluna de A¹⁰?",
    opcoes: [
      "55",
      "89",
      "34",
      "10",
      "1",
    ],
    correta: 0,
    explicacao:
      "As potências de A geram a sequência de Fibonacci: A² tem linhas (2, 1) e (1, 1); A³, linhas (3, 2) e (2, 1); em geral, Aⁿ tem linhas (Fₙ₊₁, Fₙ) e (Fₙ, Fₙ₋₁), com F₁ = F₂ = 1. O elemento pedido é F₁₀ = 55 (1, 1, 2, 3, 5, 8, 13, 21, 34, 55).\n\n89 é F₁₁, o elemento da 1ª linha e 1ª coluna. 34 é F₉, o da 2ª linha e 2ª coluna. 10 supõe que o elemento cresça de 1 em 1. E 1 eleva cada elemento à décima potência, o que não é potência de matriz.",
  },
];
