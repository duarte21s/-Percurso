/* Estequiometria com reagente limitante (50 questões) — exatas-militar.

   Autorais, escritas por Claude (Anthropic) em 2026-09-30 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/exatas-militar__estequiometria-com-reagente-limitante.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/exatas-militar__estequiometria-com-reagente-limitante.json. */

export const questoes = [
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "facil",
    enunciado:
      "Com H = 1 e O = 16 (em g/mol), que massa de água se forma quando 4 g de gás hidrogênio reagem com oxigênio em excesso, segundo 2 H₂ + O₂ → 2 H₂O?",
    opcoes: [
      "36 g",
      "18 g",
      "72 g",
      "32 g",
      "4 g",
    ],
    correta: 0,
    explicacao:
      "A massa molar do H₂ é 2 g/mol, e 4 g correspondem a 4/2 = 2 mol. A equação mostra que 2 mol de H₂ formam 2 mol de H₂O, na proporção 1 : 1. A massa molar da água é 2 · 1 + 16 = 18 g/mol, e 2 mol pesam 36 g. Confere com a conservação da massa: os 4 g de hidrogênio reagem com 32 g de oxigênio, e 4 + 32 = 36 g.\n\n18 g divide por 2, como se 2 mol de H₂ formassem 1 mol de água. 72 g toma 4 g como 4 mol de H₂, esquecendo a massa molar de 2 g/mol. 32 g é a massa de oxigênio consumida. E 4 g supõe que a massa de água seja a do hidrogênio.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "facil",
    enunciado:
      "Com H = 1, S = 32 e O = 16 (em g/mol), qual é a massa molar do ácido sulfúrico, H₂SO₄?",
    opcoes: [
      "49 g/mol",
      "50 g/mol",
      "97 g/mol",
      "80 g/mol",
      "98 g/mol",
    ],
    correta: 4,
    explicacao:
      "A massa molar é a soma das massas atômicas de todos os átomos da fórmula, cada uma multiplicada pelo seu índice: 2 · 1 (hidrogênio) + 1 · 32 (enxofre) + 4 · 16 (oxigênio) = 2 + 32 + 64 = 98 g/mol. Um mol de ácido sulfúrico pesa 98 g.\n\n49 g/mol ignora todos os índices, somando 1 + 32 + 16. 50 g/mol esquece só o índice do oxigênio. 97 g/mol esquece o índice do hidrogênio. E 80 g/mol é a massa molar do SO₃, o óxido que forma o ácido ao reagir com a água, e não a do ácido.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "facil",
    enunciado:
      "Com C = 12 e O = 16 (em g/mol), quantos mols de moléculas há em 88 g de gás carbônico, CO₂?",
    opcoes: [
      "0,5 mol",
      "88 mol",
      "3,1 mol",
      "1,2 · 10²⁴ mol",
      "2 mol",
    ],
    correta: 4,
    explicacao:
      "A massa molar do CO₂ é 12 + 2 · 16 = 44 g/mol. O número de mols é a massa dividida pela massa molar: n = 88/44 = 2 mol. Isso corresponde a 2 · 6 · 10²³ = 1,2 · 10²⁴ moléculas.\n\n0,5 mol inverte a divisão, 44/88. 88 mol toma a massa em gramas como número de mols. 3,1 mol usa a massa molar do monóxido de carbono, CO, de 28 g/mol. E 1,2 · 10²⁴ é o número de moléculas, e não de mols.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "facil",
    enunciado:
      "Com H = 1, O = 16 (em g/mol) e a constante de Avogadro igual a 6 · 10²³ por mol, quantas moléculas há em 9 g de água?",
    opcoes: [
      "6 · 10²³",
      "5,4 · 10²⁴",
      "3 · 10²³",
      "9 · 10²³",
      "1,08 · 10²⁵",
    ],
    correta: 2,
    explicacao:
      "A massa molar da água é 18 g/mol, e 9 g correspondem a 9/18 = 0,5 mol. Cada mol tem 6 · 10²³ moléculas; meio mol, 3 · 10²³. Como cada molécula tem 3 átomos, são 9 · 10²³ átomos no total.\n\n6 · 10²³ é o número de moléculas de um mol inteiro, 18 g. 5,4 · 10²⁴ multiplica a massa, 9, pela constante de Avogadro, sem dividir pela massa molar. 9 · 10²³ conta átomos, e não moléculas. E 1,08 · 10²⁵ multiplica a massa molar pela constante de Avogadro.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "facil",
    enunciado:
      "Na reação N₂ + 3 H₂ → 2 NH₃, misturam-se 2 mol de N₂ e 3 mol de H₂. Qual é o reagente limitante?",
    opcoes: [
      "O H₂, porque 3 mol dele só reagem com 1 mol de N₂",
      "O N₂, porque há menos mols dele",
      "O N₂, porque tem a maior massa molar",
      "Nenhum: as quantidades estão na proporção certa",
      "O H₂, porque tem a menor massa molar",
    ],
    correta: 0,
    explicacao:
      "A equação pede 3 mol de H₂ para cada mol de N₂. Os 3 mol de H₂ disponíveis reagem com apenas 1 mol de N₂, e sobra 1 mol de N₂. O H₂ acaba primeiro: é o reagente limitante, e é ele que define a quantidade de produto, 2 mol de NH₃.\n\n“Há menos mols de N₂” compara as quantidades sem levar em conta os coeficientes da equação. A massa molar não decide o limitante: o que importa é a proporção em mols. As quantidades não estão na proporção certa, que seria de 1 : 3. E, embora o H₂ seja mesmo o limitante, o motivo não é a sua massa molar, e sim a proporção da equação.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "facil",
    enunciado:
      "Com Ca = 40, C = 12 e O = 16 (em g/mol), a decomposição térmica de 10 g de CaCO₃ produz 5,6 g de CaO e gás carbônico, segundo CaCO₃ → CaO + CO₂. Qual é a massa de CO₂ produzida?",
    opcoes: [
      "4,4 g",
      "15,6 g",
      "5,6 g",
      "10 g",
      "0 g",
    ],
    correta: 0,
    explicacao:
      "Pela lei de Lavoisier, a massa se conserva: a massa de reagente é igual à soma das massas dos produtos. Então, 10 = 5,6 + m(CO₂), e m(CO₂) = 4,4 g. Confere pelas massas molares: 10 g de CaCO₃ (100 g/mol) são 0,1 mol, que formam 0,1 mol de CO₂, com 44 g/mol, isto é, 4,4 g.\n\n15,6 g soma as massas em vez de subtrair. 5,6 g é a massa do CaO. 10 g supõe que todo o reagente vire gás carbônico. E 0 g supõe que o gás não tenha massa.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "facil",
    enunciado:
      "Com C = 12, O = 16 (em g/mol) e o volume molar de 22,4 L/mol nas condições normais de temperatura e pressão, que volume ocupam 11 g de CO₂ nessas condições?",
    opcoes: [
      "22,4 L",
      "246,4 L",
      "5,6 L",
      "2,8 L",
      "11 L",
    ],
    correta: 2,
    explicacao:
      "A massa molar do CO₂ é 44 g/mol, e 11 g correspondem a 11/44 = 0,25 mol. Nas condições normais, cada mol de gás ocupa 22,4 L; então 0,25 mol ocupam 0,25 · 22,4 = 5,6 L.\n\n22,4 L é o volume de um mol inteiro. 246,4 L multiplica a massa pelo volume molar, sem converter a massa em mols. 2,8 L usa o dobro da massa molar, 88 g/mol. E 11 L toma a massa em gramas como volume em litros.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "facil",
    enunciado:
      "Na combustão do metano, CH₄ + 2 O₂ → CO₂ + 2 H₂O, quantos mols de oxigênio são consumidos na queima completa de 2 mol de metano?",
    opcoes: [
      "2 mol",
      "4 mol",
      "1 mol",
      "8 mol",
      "3 mol",
    ],
    correta: 1,
    explicacao:
      "A equação mostra que cada mol de CH₄ reage com 2 mol de O₂. Para 2 mol de metano, são necessários 2 · 2 = 4 mol de oxigênio, e formam-se 2 mol de CO₂ e 4 mol de água. Os coeficientes da equação balanceada dão a proporção em mols entre todas as substâncias da reação.\n\n2 mol usa a proporção 1 : 1. 1 mol inverte a proporção, dividindo por 2. 8 mol multiplica por 2 duas vezes. E 3 mol soma os coeficientes dos produtos, 1 + 2.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "facil",
    enunciado:
      "Com Fe = 56 e O = 16 (em g/mol), qual é a porcentagem em massa de ferro no óxido de ferro(III), Fe₂O₃?",
    opcoes: [
      "35%",
      "70%",
      "30%",
      "56%",
      "77,8%",
    ],
    correta: 1,
    explicacao:
      "A massa molar do Fe₂O₃ é 2 · 56 + 3 · 16 = 112 + 48 = 160 g/mol, dos quais 112 g são de ferro. A porcentagem é 112/160 = 0,7 = 70%. Os outros 30% são de oxigênio. A porcentagem não depende da quantidade de óxido: vale para 1 g ou para uma tonelada.\n\n35% conta um só átomo de ferro, 56/160. 30% é a porcentagem de oxigênio. 56% toma a massa atômica do ferro como porcentagem. E 77,8% é a porcentagem de ferro no FeO, 56/72.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "facil",
    enunciado:
      "Com Mg = 24 e O = 16 (em g/mol), que massa de óxido de magnésio se forma na queima completa de 0,5 mol de magnésio, segundo 2 Mg + O₂ → 2 MgO?",
    opcoes: [
      "40 g",
      "10 g",
      "12 g",
      "20 g",
      "8 g",
    ],
    correta: 3,
    explicacao:
      "A proporção entre Mg e MgO é de 2 : 2, isto é, 1 : 1: 0,5 mol de magnésio formam 0,5 mol de MgO. A massa molar do MgO é 24 + 16 = 40 g/mol, e 0,5 mol pesam 20 g. Desses, 12 g são o magnésio que reagiu, e 8 g, o oxigênio incorporado.\n\n40 g é a massa de um mol inteiro de MgO. 10 g divide pelo coeficiente 2, como se 2 mol de Mg formassem 1 mol de óxido. 12 g é a massa do magnésio. E 8 g é a massa de oxigênio incorporada.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "facil",
    enunciado:
      "Na reação 2 H₂ + O₂ → 2 H₂O, misturam-se 4 mol de H₂ e 3 mol de O₂. Depois da reação completa, o que sobra?",
    opcoes: [
      "1 mol de O₂",
      "2 mol de O₂",
      "1 mol de H₂",
      "Nenhum reagente sobra",
      "3 mol de O₂",
    ],
    correta: 0,
    explicacao:
      "Os 4 mol de H₂ precisam de 4/2 = 2 mol de O₂. Há 3 mol de O₂, então o H₂ é o limitante: reage todo, consome 2 mol de O₂ e forma 4 mol de água. Sobra 3 − 2 = 1 mol de O₂.\n\n2 mol de O₂ é a quantidade consumida, e não a que sobra. 1 mol de H₂ trata o O₂ como limitante, usando a proporção 1 : 1. “Nenhum reagente sobra” supõe as quantidades na proporção exata, que seria 4 : 2. E 3 mol de O₂ supõe que o oxigênio não reaja.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "facil",
    enunciado:
      "Com Ca = 40, C = 12 e O = 16 (em g/mol), a decomposição de 100 g de CaCO₃, segundo CaCO₃ → CaO + CO₂, produziu 42 g de CaO. Qual foi o rendimento da reação?",
    opcoes: [
      "42%",
      "56%",
      "133%",
      "25%",
      "75%",
    ],
    correta: 4,
    explicacao:
      "O rendimento compara o que se obteve com o máximo possível. 100 g de CaCO₃ (100 g/mol) são 1 mol, que formariam, no máximo, 1 mol de CaO, com 56 g/mol: 56 g. Obtiveram-se 42 g, e o rendimento é 42/56 = 0,75 = 75%.\n\n42% divide os 42 g pela massa de reagente, 100 g, e não pela massa máxima de CaO. 56% é a massa máxima de CaO tomada como porcentagem. 133% inverte a divisão, 56/42; um rendimento acima de 100% é impossível. E 25% é a fração que deixou de se formar.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "media",
    enunciado:
      "Com H = 1 e O = 16 (em g/mol), misturam-se 10 g de H₂ e 64 g de O₂, que reagem segundo 2 H₂ + O₂ → 2 H₂O. Que massa de água se forma?",
    opcoes: [
      "72 g",
      "74 g",
      "90 g",
      "36 g",
      "64 g",
    ],
    correta: 0,
    explicacao:
      "Em mols: 10/2 = 5 mol de H₂ e 64/32 = 2 mol de O₂. Os 2 mol de O₂ precisariam de 4 mol de H₂, e há 5: o O₂ é o limitante, e sobra 1 mol (2 g) de H₂. Os 2 mol de O₂ formam 4 mol de água, 4 · 18 = 72 g. Pela conservação da massa: dos 74 g de reagentes, 2 g sobram, e 72 g viram água.\n\n74 g soma as massas dos reagentes, como se tudo reagisse. 90 g toma o H₂ como limitante, com 5 mol de água. 36 g usa a proporção 1 : 1 entre O₂ e água. E 64 g supõe que a massa de água seja a do oxigênio.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "media",
    enunciado:
      "Com N = 14 e H = 1 (em g/mol), misturam-se 28 g de N₂ e 10 g de H₂, que reagem segundo N₂ + 3 H₂ → 2 NH₃. Que massa do reagente em excesso sobra?",
    opcoes: [
      "6 g de H₂",
      "2 g de H₂",
      "8 g de H₂",
      "Não sobra reagente",
      "4 g de H₂",
    ],
    correta: 4,
    explicacao:
      "Em mols: 28/28 = 1 mol de N₂ e 10/2 = 5 mol de H₂. O mol de N₂ precisa de 3 mol de H₂: o N₂ é o limitante, e sobram 5 − 3 = 2 mol de H₂, que pesam 2 · 2 = 4 g. Formam-se 2 mol de NH₃, 34 g, e a massa confere: 28 + 10 = 34 + 4.\n\n6 g é a massa de H₂ que reage, e não a que sobra. 2 g toma os 2 mol que sobram como se fossem gramas. 8 g usa a proporção 1 : 1 entre N₂ e H₂, consumindo só 1 mol de hidrogênio. E sobra, sim, reagente: as quantidades não estão na proporção 1 : 3.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "media",
    enunciado:
      "Com Ca = 40, C = 12 e O = 16 (em g/mol) e o volume molar de 22,4 L/mol nas condições normais, que volume de CO₂ se obtém, nessas condições, pela decomposição completa de 200 g de um calcário com 80% de CaCO₃ (CaCO₃ → CaO + CO₂)?",
    opcoes: [
      "44,8 L",
      "≈ 8,96 L",
      "≈ 35,8 L",
      "1,6 L",
      "≈ 70,4 L",
    ],
    correta: 2,
    explicacao:
      "Só 80% do calcário é CaCO₃: 0,8 · 200 = 160 g, ou 160/100 = 1,6 mol. Cada mol de CaCO₃ libera 1 mol de CO₂, e 1,6 mol de gás ocupam 1,6 · 22,4 ≅ 35,8 L nas condições normais. As impurezas não produzem CO₂.\n\n44,8 L trata os 200 g como CaCO₃ puro. 8,96 L usa os 20% de impurezas no lugar dos 80%. 1,6 L toma o número de mols como volume. E 70,4 L toma a massa de CO₂ formada, 70,4 g, como volume.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "media",
    enunciado:
      "Com N = 14 e H = 1 (em g/mol), 14 g de N₂ reagem com H₂ em excesso segundo N₂ + 3 H₂ → 2 NH₃, com rendimento de 60%. Que massa de amônia se obtém?",
    opcoes: [
      "17 g",
      "8,4 g",
      "6,8 g",
      "10,2 g",
      "20,4 g",
    ],
    correta: 3,
    explicacao:
      "14 g de N₂ são 0,5 mol, que formariam, com rendimento total, 2 · 0,5 = 1 mol de NH₃, isto é, 17 g. Com 60% de rendimento, obtêm-se 0,6 · 17 = 10,2 g. O rendimento se aplica ao produto previsto pela equação, e não à massa de reagente.\n\n17 g é a massa teórica, com rendimento de 100%. 8,4 g aplica os 60% à massa de N₂. 6,8 g usa 40%, a fração que não se formou. E 20,4 g aplica os 60% a 2 mol de NH₃, como se houvesse 1 mol de N₂.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "media",
    enunciado:
      "Nas mesmas condições de temperatura e pressão, 10 L de CO reagem com 10 L de O₂ segundo 2 CO + O₂ → 2 CO₂. Qual é o volume total de gás depois da reação completa?",
    opcoes: [
      "20 L",
      "10 L",
      "5 L",
      "30 L",
      "15 L",
    ],
    correta: 4,
    explicacao:
      "Nas mesmas condições, volumes de gás são proporcionais aos números de mols (lei de Avogadro), e os coeficientes valem também para os volumes. Os 10 L de CO consomem 5 L de O₂ e formam 10 L de CO₂; sobram 5 L de O₂. O volume final é 10 + 5 = 15 L: diferentemente da massa, o volume de gás não se conserva numa reação.\n\n20 L supõe que o volume se conserve, como a massa. 10 L conta só o CO₂ formado. 5 L conta só o O₂ que sobra. E 30 L soma o CO₂ formado aos 20 L iniciais, sem descontar os reagentes consumidos.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "media",
    enunciado:
      "Com S = 32, H = 1 e O = 16 (em g/mol), o ácido sulfúrico pode ser produzido em três etapas: S + O₂ → SO₂; 2 SO₂ + O₂ → 2 SO₃; SO₃ + H₂O → H₂SO₄. Que massa de H₂SO₄ se obtém a partir de 64 g de enxofre, com rendimento total em cada etapa?",
    opcoes: [
      "98 g",
      "160 g",
      "392 g",
      "196 g",
      "64 g",
    ],
    correta: 3,
    explicacao:
      "64 g de enxofre são 64/32 = 2 mol. Cada etapa preserva a quantidade de enxofre: 2 mol de S dão 2 mol de SO₂, que dão 2 mol de SO₃, que dão 2 mol de H₂SO₄. Somando as etapas, a relação global é de 1 mol de S para 1 mol de ácido. Com 98 g/mol, são 2 · 98 = 196 g.\n\n98 g corresponde a 1 mol, como se 64 g fossem um mol de enxofre (64 g/mol é a massa molar do SO₂). 160 g é a massa de SO₃ formada na segunda etapa. 392 g multiplica pelo coeficiente 2 da segunda etapa, que já está compensado pelos 2 mol de SO₂. E 64 g supõe que a massa de ácido seja a do enxofre.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "media",
    enunciado:
      "Com o volume molar de 22,4 L/mol nas condições normais, uma mistura de 0,5 mol de magnésio e 0,5 mol de alumínio reage com ácido clorídrico em excesso: Mg + 2 HCl → MgCl₂ + H₂ e 2 Al + 6 HCl → 2 AlCl₃ + 3 H₂. Que volume de H₂ se forma, nessas condições?",
    opcoes: [
      "22,4 L",
      "11,2 L",
      "16,8 L",
      "33,6 L",
      "28 L",
    ],
    correta: 4,
    explicacao:
      "O magnésio libera 1 mol de H₂ por mol de metal: 0,5 mol de H₂. O alumínio libera 3 mol de H₂ para cada 2 mol de metal: 0,5 · 3/2 = 0,75 mol de H₂. No total, 1,25 mol, que ocupam 1,25 · 22,4 = 28 L nas condições normais.\n\n22,4 L supõe 1 mol de H₂, meio mol para cada metal. 11,2 L conta só o magnésio. 16,8 L conta só o alumínio. E 33,6 L supõe 3 mol de H₂ por mol de alumínio, esquecendo o coeficiente 2 do metal.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "media",
    enunciado:
      "Que volume de solução de NaOH 0,1 mol/L é necessário para neutralizar completamente 50 mL de solução de HCl 0,2 mol/L, segundo HCl + NaOH → NaCl + H₂O?",
    opcoes: [
      "50 mL",
      "25 mL",
      "200 mL",
      "100 mL",
      "10 mL",
    ],
    correta: 3,
    explicacao:
      "A quantidade de ácido é n = C · V = 0,2 · 0,05 = 0,01 mol. A reação é 1 : 1, então são necessários 0,01 mol de NaOH. Com 0,1 mol/L, o volume é V = n/C = 0,01/0,1 = 0,1 L = 100 mL. A base, com metade da concentração do ácido, precisa do dobro do volume.\n\n50 mL supõe volumes iguais, esquecendo a diferença de concentrações. 25 mL inverte a relação entre as concentrações. 200 mL dobra o volume duas vezes. E 10 mL toma o número de mols de ácido, 0,01, como se fosse o volume em litros.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "media",
    enunciado:
      "Que volume de solução de NaOH 0,2 mol/L neutraliza completamente 20 mL de solução de H₂SO₄ 0,1 mol/L, segundo H₂SO₄ + 2 NaOH → Na₂SO₄ + 2 H₂O?",
    opcoes: [
      "10 mL",
      "20 mL",
      "40 mL",
      "5 mL",
      "4 mL",
    ],
    correta: 1,
    explicacao:
      "A quantidade de ácido é 0,1 · 0,02 = 0,002 mol. Cada mol de H₂SO₄ tem dois hidrogênios ionizáveis e consome 2 mol de NaOH: são necessários 0,004 mol de base. Com 0,2 mol/L, o volume é 0,004/0,2 = 0,02 L = 20 mL.\n\n10 mL usa a proporção 1 : 1, esquecendo que o ácido é diprótico. 40 mL usa, para a base, a concentração do ácido, 0,1 mol/L. 5 mL divide pelo coeficiente 2 em vez de multiplicar. E 4 mL toma a quantidade de base em mols, 0,004, como se fosse o volume em litros.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "media",
    enunciado:
      "Com H = 1, C = 12 e O = 16 (em g/mol), um composto tem 40% de carbono, 6,7% de hidrogênio e 53,3% de oxigênio, em massa. Qual é a sua fórmula mínima?",
    opcoes: [
      "CHO",
      "C₂H₄O₂",
      "C₆H₁₂O₆",
      "CH₂O",
      "C₆HO₈",
    ],
    correta: 3,
    explicacao:
      "Em 100 g do composto há 40 g de C, 6,7 g de H e 53,3 g de O. Em mols: 40/12 ≅ 3,33; 6,7/1 = 6,7; 53,3/16 ≅ 3,33. Dividindo pelo menor valor, 3,33, a proporção é 1 : 2 : 1, e a fórmula mínima é CH₂O. Ela dá só a proporção entre os átomos; a fórmula molecular pode ser um múltiplo dela.\n\nCHO divide as porcentagens pelos números atômicos (6, 1 e 8) em vez das massas atômicas. C₂H₄O₂ e C₆H₁₂O₆ têm a mesma proporção, mas são fórmulas moleculares, múltiplas da mínima. E C₆HO₈ usa as porcentagens diretamente, sem dividir pelas massas atômicas.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "media",
    enunciado:
      "Com H = 1, C = 12 e O = 16 (em g/mol), a fórmula mínima de um açúcar é CH₂O, e a sua massa molar é 180 g/mol. Qual é a sua fórmula molecular?",
    opcoes: [
      "CH₂O",
      "C₃H₆O₃",
      "C₁₂H₂₂O₁₁",
      "C₆H₁₂O₆",
      "C₆H₆O₆",
    ],
    correta: 3,
    explicacao:
      "A massa da fórmula mínima é 12 + 2 + 16 = 30 g/mol. A massa molar, 180 g/mol, é 180/30 = 6 vezes maior: a molécula contém 6 unidades CH₂O, e a fórmula molecular é C₆H₁₂O₆, a da glicose. A proporção entre os átomos continua 1 : 2 : 1.\n\nCH₂O é a própria fórmula mínima, com massa de apenas 30 g/mol. C₃H₆O₃ tem 90 g/mol, metade do valor dado. C₁₂H₂₂O₁₁ é a sacarose, de 342 g/mol, que nem segue a proporção CH₂O. E C₆H₆O₆ multiplica por 6 só o carbono e o oxigênio.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "media",
    enunciado:
      "A combustão completa de 0,1 mol de um hidrocarboneto produziu 0,3 mol de CO₂ e 0,4 mol de H₂O. Qual é a fórmula molecular do hidrocarboneto?",
    opcoes: [
      "C₃H₈",
      "C₃H₄",
      "C₃H₆",
      "C₆H₁₆",
      "C₄H₁₀",
    ],
    correta: 0,
    explicacao:
      "Todo o carbono do hidrocarboneto vai para o CO₂, e todo o hidrogênio, para a água. Por mol de hidrocarboneto: 0,3/0,1 = 3 mol de CO₂, isto é, 3 átomos de C; e 0,4/0,1 = 4 mol de H₂O, com 2 átomos de H cada, isto é, 8 átomos de H. A fórmula é C₃H₈, o propano, cuja combustão é C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O.\n\nC₃H₄ esquece que cada molécula de água tem dois hidrogênios. C₃H₆ conta 6 hidrogênios, como se se formassem 3 mol de água, a mesma quantidade de CO₂. C₆H₁₆ dobra os índices, como se a quantidade queimada fosse 0,05 mol; nem existe um hidrocarboneto assim. E C₄H₁₀, o butano, formaria 4 mol de CO₂ e 5 de água por mol queimado.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "media",
    enunciado:
      "Com H = 1, C = 12 e O = 16 (em g/mol), que massa de oxigênio é necessária para queimar completamente 11 g de propano, segundo C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O?",
    opcoes: [
      "8 g",
      "40 g",
      "20 g",
      "55 g",
      "33 g",
    ],
    correta: 1,
    explicacao:
      "A massa molar do propano é 3 · 12 + 8 · 1 = 44 g/mol, e 11 g são 0,25 mol. A equação pede 5 mol de O₂ por mol de propano: 5 · 0,25 = 1,25 mol de O₂. Com 32 g/mol, a massa é 1,25 · 32 = 40 g.\n\n8 g usa a proporção 1 : 1 entre propano e oxigênio. 20 g usa 16 g/mol para o O₂, a massa de um átomo de oxigênio, e não da molécula. 55 g multiplica a massa de propano por 5, aplicando o coeficiente à massa, e não aos mols. E 33 g é a massa de CO₂ formada.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "media",
    enunciado:
      "Com Fe = 56, C = 12 e O = 16 (em g/mol), no alto-forno o óxido de ferro é reduzido segundo Fe₂O₃ + 3 CO → 2 Fe + 3 CO₂. Que massa de ferro se obtém de 320 kg de Fe₂O₃, com rendimento total?",
    opcoes: [
      "224 kg",
      "112 kg",
      "320 kg",
      "168 kg",
      "96 kg",
    ],
    correta: 0,
    explicacao:
      "A massa molar do Fe₂O₃ é 160 g/mol, e 320 kg correspondem a 2.000 mol. Cada mol de óxido dá 2 mol de ferro: 4.000 mol, que pesam 4.000 · 56 = 224.000 g = 224 kg. É o mesmo que aplicar aos 320 kg a fração de ferro no óxido, 70%.\n\n112 kg usa a proporção 1 : 1 entre óxido e ferro. 320 kg supõe que toda a massa do óxido vire ferro. 168 kg usa o coeficiente 3 do CO no lugar do 2 do ferro. E 96 kg é a massa de oxigênio retirada do óxido, 320 − 224.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "media",
    enunciado:
      "Com Ag = 108 e Cl = 35,5 (em g/mol), misturam-se 100 mL de solução de AgNO₃ 0,1 mol/L e 50 mL de solução de NaCl 0,1 mol/L, que reagem segundo AgNO₃ + NaCl → AgCl + NaNO₃. Que massa de AgCl precipita?",
    opcoes: [
      "≈ 1,44 g",
      "≈ 0,72 g",
      "≈ 2,15 g",
      "0,005 g",
      "≈ 0,29 g",
    ],
    correta: 1,
    explicacao:
      "Em mols: 0,1 · 0,1 = 0,01 mol de AgNO₃ e 0,1 · 0,05 = 0,005 mol de NaCl. A reação é 1 : 1, e o NaCl, em menor quantidade, é o limitante: formam-se 0,005 mol de AgCl. Com 108 + 35,5 = 143,5 g/mol, a massa é 0,005 · 143,5 ≅ 0,72 g. Sobram 0,005 mol de AgNO₃ em solução.\n\n1,44 g toma o AgNO₃ como limitante, com 0,01 mol de precipitado. 2,15 g soma as quantidades dos dois reagentes. 0,005 g toma o número de mols como massa. E 0,29 g é a massa do NaCl que reagiu, 0,005 · 58,5.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "media",
    enunciado:
      "Com Zn = 65 (em g/mol) e R = 0,082 atm·L/(mol·K), 13 g de zinco reagem com ácido clorídrico em excesso segundo Zn + 2 HCl → ZnCl₂ + H₂. Que volume de H₂ se obtém a 27 °C e 1 atm?",
    opcoes: [
      "≈ 4,9 L",
      "≈ 4,5 L",
      "≈ 0,44 L",
      "≈ 9,8 L",
      "≈ 24,6 L",
    ],
    correta: 0,
    explicacao:
      "13 g de zinco são 13/65 = 0,2 mol, que liberam 0,2 mol de H₂. Pela equação dos gases, V = n · R · T/p = 0,2 · 0,082 · 300/1 ≅ 4,92 L, com a temperatura em kelvin, 27 + 273 = 300 K.\n\n4,5 L usa o volume molar das condições normais, 22,4 L/mol, que vale a 0 °C, e não a 27 °C. 0,44 L usa a temperatura em graus Celsius. 9,8 L conta 2 mol de H₂ por mol de zinco, confundindo com os 2 mol de HCl. E 24,6 L é o volume de um mol inteiro de gás nessas condições.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "media",
    enunciado:
      "Com N = 14 e H = 1 (em g/mol), deseja-se obter 34 g de amônia pela reação N₂ + 3 H₂ → 2 NH₃, cujo rendimento é de 80%. Que massa de N₂ é necessária?",
    opcoes: [
      "28 g",
      "22,4 g",
      "35 g",
      "70 g",
      "43,75 g",
    ],
    correta: 2,
    explicacao:
      "34 g de NH₃ são 2 mol. Com rendimento de 80%, a quantidade teórica precisa ser 2/0,8 = 2,5 mol de NH₃, que exigem 2,5/2 = 1,25 mol de N₂, isto é, 1,25 · 28 = 35 g. Com rendimento menor que 100%, é preciso mais reagente do que a conta ideal indica.\n\n28 g é a massa necessária com rendimento de 100%. 22,4 g aplica os 80% no sentido errado, reduzindo o reagente em vez de aumentá-lo. 70 g usa a proporção 1 : 1 entre N₂ e NH₃. E 43,75 g divide pelo rendimento duas vezes.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "media",
    enunciado:
      "Com Al = 27 e Cl = 35,5 (em g/mol), misturam-se 27 g de alumínio e 71 g de cloro, que reagem segundo 2 Al + 3 Cl₂ → 2 AlCl₃. Que massa de AlCl₃ se forma?",
    opcoes: [
      "89 g",
      "133,5 g",
      "98 g",
      "44,5 g",
      "267 g",
    ],
    correta: 0,
    explicacao:
      "Em mols: 27/27 = 1 mol de Al e 71/71 = 1 mol de Cl₂. O alumínio precisaria de 1,5 mol de Cl₂, e só há 1: o cloro é o limitante. Com 1 mol de Cl₂, formam-se 2/3 mol de AlCl₃ e, com 27 + 3 · 35,5 = 133,5 g/mol, a massa é 2/3 · 133,5 = 89 g. Sobram 1/3 mol, ou 9 g, de alumínio: 27 + 71 = 89 + 9.\n\n133,5 g toma o alumínio como limitante. 98 g soma as massas dos reagentes, como se tudo reagisse. 44,5 g usa 1/3 mol de produto. E 267 g corresponde a 2 mol de AlCl₃, lendo os coeficientes como quantidades.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "media",
    enunciado:
      "Com a constante de Avogadro igual a 6 · 10²³ por mol, quantos átomos de oxigênio há em 0,5 mol de carbonato de cálcio, CaCO₃?",
    opcoes: [
      "3 · 10²³",
      "9 · 10²³",
      "1,8 · 10²⁴",
      "1,5 · 10²⁴",
      "6 · 10²³",
    ],
    correta: 1,
    explicacao:
      "Cada fórmula de CaCO₃ tem 3 átomos de oxigênio; em 0,5 mol de CaCO₃ há 3 · 0,5 = 1,5 mol de átomos de oxigênio, isto é, 1,5 · 6 · 10²³ = 9 · 10²³ átomos. É preciso distinguir o número de fórmulas, 3 · 10²³, do número de átomos de cada elemento.\n\n3 · 10²³ conta as fórmulas de CaCO₃, e não os átomos de oxigênio. 1,8 · 10²⁴ conta os oxigênios de um mol inteiro. 1,5 · 10²⁴ conta todos os 5 átomos de cada fórmula. E 6 · 10²³ conta só 2 oxigênios por fórmula, como no CO₂.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "media",
    enunciado:
      "Com H = 1, C = 12 e O = 16 (em g/mol), queimam-se 16 g de metano com 48 g de oxigênio, segundo CH₄ + 2 O₂ → CO₂ + 2 H₂O. Que massa de CO₂ se forma?",
    opcoes: [
      "33 g",
      "44 g",
      "66 g",
      "64 g",
      "27 g",
    ],
    correta: 0,
    explicacao:
      "Em mols: 16/16 = 1 mol de CH₄ e 48/32 = 1,5 mol de O₂. O metano precisaria de 2 mol de O₂, e só há 1,5: o oxigênio é o limitante. Com 1,5 mol de O₂, reagem 0,75 mol de CH₄, e formam-se 0,75 mol de CO₂, 0,75 · 44 = 33 g, além de 1,5 mol de água. Sobram 0,25 mol, ou 4 g, de metano.\n\n44 g toma o metano como limitante. 66 g usa a proporção 1 : 1 entre O₂ e CO₂. 64 g soma as massas dos reagentes. E 27 g é a massa de água formada, 1,5 · 18, e não a de CO₂.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "media",
    enunciado:
      "Com Cu = 63,5, S = 32, O = 16 e H = 1 (em g/mol), qual é a porcentagem em massa de água no sulfato de cobre pentaidratado, CuSO₄·5H₂O?",
    opcoes: [
      "≈ 7%",
      "≈ 36%",
      "≈ 56%",
      "≈ 64%",
      "90%",
    ],
    correta: 1,
    explicacao:
      "A massa molar do sal hidratado é a do CuSO₄ (63,5 + 32 + 64 = 159,5 g/mol) mais a de 5 H₂O (5 · 18 = 90 g/mol): 249,5 g/mol. A fração de água é 90/249,5 ≅ 0,36 = 36%. É a massa que se perde ao aquecer o sal até ele ficar anidro, quando os cristais azuis ficam brancos.\n\n7% conta só uma molécula de água, 18/249,5. 56% divide a água pela massa do sal anidro, e não pela do hidratado. 64% é a fração do sal anidro. E 90% toma a massa das 5 águas, 90 g/mol, como porcentagem.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "media",
    enunciado:
      "Misturam-se 100 mL de HCl 1 mol/L e 60 mL de NaOH 1 mol/L, que reagem segundo HCl + NaOH → NaCl + H₂O. Depois da reação, o que sobra em excesso?",
    opcoes: [
      "0,04 mol de NaOH",
      "0,06 mol de HCl",
      "Nada, porque ácido e base se neutralizam",
      "0,04 mol de HCl",
      "0,16 mol de HCl",
    ],
    correta: 3,
    explicacao:
      "Em mols: 1 · 0,1 = 0,1 mol de HCl e 1 · 0,06 = 0,06 mol de NaOH. A reação é 1 : 1, e a base é o limitante: reage toda, consumindo 0,06 mol de ácido. Sobram 0,1 − 0,06 = 0,04 mol de HCl, e a solução final é ácida.\n\n0,04 mol de NaOH inverte o papel dos reagentes. 0,06 mol de HCl é a quantidade de ácido que reagiu, e não a que sobrou. A neutralização só é completa quando os mols de ácido e de base são iguais. E 0,16 mol soma as quantidades em vez de subtrair.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "media",
    enunciado:
      "Com C = 12 e O = 16 (em g/mol), queima-se completamente 1 kg de carvão com 90% de carbono, segundo C + O₂ → CO₂. Que massa de CO₂ se forma?",
    opcoes: [
      "3,67 kg",
      "0,9 kg",
      "2,4 kg",
      "3,3 kg",
      "2,1 kg",
    ],
    correta: 3,
    explicacao:
      "O carvão tem 900 g de carbono, isto é, 900/12 = 75 mol. Cada mol de carbono forma 1 mol de CO₂, de 44 g/mol: 75 · 44 = 3.300 g = 3,3 kg. A massa de gás é maior que a de carvão porque cada átomo de carbono incorpora dois átomos de oxigênio.\n\n3,67 kg considera o carvão puro, com 1 kg de carbono. 0,9 kg é a massa de carbono, e não a de CO₂. 2,4 kg é a massa de oxigênio consumida, 75 · 32. E 2,1 kg supõe combustão incompleta, que formaria CO, de 28 g/mol.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "media",
    enunciado:
      "Numa experiência, 12 g de carbono reagem exatamente com 32 g de oxigênio. Mantida a mesma proporção, que massa de oxigênio reage com 30 g de carbono?",
    opcoes: [
      "32 g",
      "11,25 g",
      "80 g",
      "62 g",
      "50 g",
    ],
    correta: 2,
    explicacao:
      "Pela lei de Proust, das proporções definidas, as massas que reagem guardam sempre a mesma razão: 32 g de oxigênio para 12 g de carbono. Para 30 g de carbono, 2,5 vezes mais, são necessários 2,5 · 32 = 80 g de oxigênio, formando 110 g de CO₂.\n\n32 g supõe que a massa de oxigênio não mude com a de carbono. 11,25 g inverte a proporção, 30 · 12/32. 62 g soma as duas massas dadas em vez de manter a razão. E 50 g mantém a diferença de 20 g entre as massas (32 − 12), em vez da razão entre elas.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "media",
    enunciado:
      "Com H = 1, C = 12, O = 16 (em g/mol) e o volume molar de 22,4 L/mol nas condições normais, que volume de O₂, nessas condições, é consumido na combustão completa de 2,3 g de etanol, segundo C₂H₆O + 3 O₂ → 2 CO₂ + 3 H₂O?",
    opcoes: [
      "1,12 L",
      "2,24 L",
      "4,8 L",
      "0,15 L",
      "3,36 L",
    ],
    correta: 4,
    explicacao:
      "A massa molar do etanol é 2 · 12 + 6 · 1 + 16 = 46 g/mol, e 2,3 g são 0,05 mol. A equação pede 3 mol de O₂ por mol de etanol: 0,15 mol, que ocupam 0,15 · 22,4 = 3,36 L nas condições normais.\n\n1,12 L usa a proporção 1 : 1 entre etanol e oxigênio. 2,24 L é o volume de CO₂ formado, 0,1 mol. 4,8 L toma a massa de O₂ consumida, 4,8 g, como volume. E 0,15 L toma o número de mols como volume.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "media",
    enunciado:
      "Misturam-se 3 mol de ferro e 3 mol de cloro, que reagem segundo 2 Fe + 3 Cl₂ → 2 FeCl₃. Depois da reação completa, quantos mols de FeCl₃ se formam, e o que sobra?",
    opcoes: [
      "3 mol de FeCl₃, e sobra 1,5 mol de Cl₂",
      "2 mol de FeCl₃, e não sobra nada",
      "2 mol de FeCl₃, e sobra 1 mol de Fe",
      "3 mol de FeCl₃, e não sobra nada",
      "2 mol de FeCl₃, e sobra 1 mol de Cl₂",
    ],
    correta: 2,
    explicacao:
      "Os 3 mol de Fe precisariam de 4,5 mol de Cl₂, e só há 3: o cloro é o limitante. Os 3 mol de Cl₂ reagem com 2 mol de Fe e formam 2 mol de FeCl₃. Sobra 3 − 2 = 1 mol de ferro.\n\n“3 mol de FeCl₃” toma o ferro como limitante, o que exigiria mais cloro do que há; por isso, também não poderia sobrar cloro. “Não sobra nada” supõe as quantidades na proporção exata, 2 : 3. E “sobra 1 mol de Cl₂” acerta o produto, mas troca o reagente que sobra: todo o cloro reage.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "media",
    enunciado:
      "Com Na = 23, O = 16 e H = 1 (em g/mol), uma amostra de 2 g de NaOH impuro é neutralizada exatamente por 40 mL de HCl 1 mol/L, segundo HCl + NaOH → NaCl + H₂O; as impurezas não reagem. Qual é o grau de pureza da amostra?",
    opcoes: [
      "40%",
      "20%",
      "100%",
      "1,6%",
      "80%",
    ],
    correta: 4,
    explicacao:
      "O ácido gasto contém 1 · 0,04 = 0,04 mol de HCl, que neutralizam 0,04 mol de NaOH. Com 40 g/mol, isso corresponde a 0,04 · 40 = 1,6 g de NaOH puro. A pureza é 1,6/2 = 0,8 = 80%; os outros 0,4 g são impurezas.\n\n40% confunde o volume de ácido, 40 mL, com a porcentagem. 20% é a fração de impurezas. 100% supõe a amostra pura, sem usar os dados da titulação. E 1,6% toma a massa de NaOH puro, 1,6 g, como porcentagem.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "media",
    enunciado:
      "Um produto é obtido em duas etapas sucessivas: a primeira tem rendimento de 80%, e a segunda, de 50%, calculado sobre o que a primeira produziu. Qual é o rendimento global do processo?",
    opcoes: [
      "65%",
      "130%",
      "30%",
      "50%",
      "40%",
    ],
    correta: 4,
    explicacao:
      "Os rendimentos se aplicam em sequência: de cada 100 mol que poderiam ser obtidos na primeira etapa, formam-se 80; na segunda, só metade disso vira produto, 40 mol. O rendimento global é o produto das frações, 0,8 · 0,5 = 0,4 = 40%, sempre menor que o de cada etapa.\n\n65% tira a média dos rendimentos. 130% soma os dois, o que ultrapassaria 100%. 30% subtrai um do outro. E 50% fica com o menor dos dois, esquecendo a perda da primeira etapa.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "dificil",
    enunciado:
      "Com Ca = 40, Mg = 24, C = 12 e O = 16 (em g/mol), 10 g de uma mistura de CaCO₃ e MgCO₃ são aquecidos até a decomposição completa, em que cada carbonato libera 1 mol de CO₂ por mol, e liberam 0,11 mol de CO₂. Que massa de CaCO₃ havia na mistura?",
    opcoes: [
      "5,25 g",
      "4,75 g",
      "5 g",
      "11 g",
      "9,24 g",
    ],
    correta: 1,
    explicacao:
      "Sejam x a massa de CaCO₃ (100 g/mol) e y a de MgCO₃ (84 g/mol). Então x + y = 10 e x/100 + y/84 = 0,11. Substituindo y = 10 − x e multiplicando por 8.400: 84x + 100 · (10 − x) = 924, ou −16x = −76, e x = 4,75 g. Há 5,25 g de MgCO₃, e 0,0475 + 0,0625 = 0,11 mol de CO₂ confere.\n\n5,25 g é a massa de MgCO₃. 5 g supõe metade de cada carbonato. 11 g atribui todo o CO₂ ao CaCO₃, 0,11 · 100, mais do que a própria mistura. E 9,24 g atribui todo o CO₂ ao MgCO₃, 0,11 · 84.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "dificil",
    enunciado:
      "Num recipiente, 6 L de H₂ e 4 L de O₂, medidos nas mesmas condições, reagem segundo 2 H₂ + O₂ → 2 H₂O, e a água formada se condensa. Qual gás resta ao final, e em que volume, nas mesmas condições?",
    opcoes: [
      "2 L de H₂",
      "4 L de O₂",
      "1 L de O₂",
      "6 L de vapor de água",
      "Nenhum gás resta",
    ],
    correta: 2,
    explicacao:
      "Nas mesmas condições, os volumes de gás estão na proporção dos mols. Os 6 L de H₂ precisam de 3 L de O₂, e há 4 L: o hidrogênio é o limitante, e sobra 1 L de O₂. A água formada, que ocuparia 6 L se fosse vapor, condensa-se e não conta como gás.\n\n2 L de H₂ toma o oxigênio como limitante, o que exigiria 8 L de hidrogênio. 4 L de O₂ supõe que o oxigênio não reaja. 6 L de vapor esquece que a água se condensa. E sobra gás, sim: as quantidades não estão na proporção 2 : 1.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "dificil",
    enunciado:
      "Com N = 14, H = 1 e O = 16 (em g/mol), na produção de ácido nítrico a amônia é oxidada a NO (4 NH₃ + 5 O₂ → 4 NO + 6 H₂O), com rendimento de 80%, e todo o NO formado é convertido em NO₂ (2 NO + O₂ → 2 NO₂). Que massa de NO₂ se obtém a partir de 68 g de NH₃, com oxigênio em excesso?",
    opcoes: [
      "184 g",
      "96 g",
      "117,76 g",
      "73,6 g",
      "147,2 g",
    ],
    correta: 4,
    explicacao:
      "68 g de NH₃ são 4 mol, que dariam 4 mol de NO com rendimento total; com 80%, formam-se 3,2 mol. A segunda etapa converte cada mol de NO em 1 mol de NO₂: 3,2 mol, com 46 g/mol, isto é, 3,2 · 46 = 147,2 g.\n\n184 g ignora o rendimento de 80%. 96 g é a massa de NO formada, 3,2 · 30. 117,76 g aplica os 80% duas vezes, também na segunda etapa, que tem rendimento total. E 73,6 g divide pelo coeficiente 2 da segunda equação, que se cancela com o 2 do NO₂.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "dificil",
    enunciado:
      "Com Na = 23, C = 12 e O = 16 (em g/mol), 10,6 g de Na₂CO₃ são tratados com 100 mL de HCl 1,5 mol/L, segundo Na₂CO₃ + 2 HCl → 2 NaCl + H₂O + CO₂. Que massa de CO₂ se forma?",
    opcoes: [
      "4,4 g",
      "3,3 g",
      "6,6 g",
      "0,075 g",
      "2,2 g",
    ],
    correta: 1,
    explicacao:
      "Em mols: 10,6/106 = 0,1 mol de Na₂CO₃ e 1,5 · 0,1 = 0,15 mol de HCl. O carbonato precisaria de 0,2 mol de HCl, e só há 0,15: o ácido é o limitante. Os 0,15 mol de HCl reagem com 0,075 mol de carbonato e liberam 0,075 mol de CO₂, que pesam 0,075 · 44 = 3,3 g. Sobram 0,025 mol de Na₂CO₃.\n\n4,4 g toma o carbonato como limitante. 6,6 g usa a proporção 1 : 1 entre HCl e CO₂. 0,075 g toma o número de mols como massa. E 2,2 g aplica a proporção 2 : 1 ao carbonato, como se 2 mol dele formassem 1 mol de CO₂.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "dificil",
    enunciado:
      "Com Zn = 65 (em g/mol) e o volume molar de 22,4 L/mol nas condições normais, 5 g de uma liga de zinco e cobre reagem com ácido clorídrico em excesso; só o zinco reage (Zn + 2 HCl → ZnCl₂ + H₂), liberando 1,12 L de H₂ nas condições normais. Qual é a porcentagem de zinco na liga?",
    opcoes: [
      "35% de zinco",
      "50% de zinco",
      "32,5% de zinco",
      "65% de zinco",
      "22,4% de zinco",
    ],
    correta: 3,
    explicacao:
      "1,12 L de H₂ nas condições normais são 1,12/22,4 = 0,05 mol. Cada mol de zinco libera 1 mol de H₂: havia 0,05 mol de zinco, isto é, 0,05 · 65 = 3,25 g. A porcentagem é 3,25/5 = 0,65 = 65%; os outros 35% são cobre, que não reage com o ácido.\n\n35% é a porcentagem de cobre. 50% supõe metade de cada metal, sem usar os dados. 32,5% conta 2 mol de H₂ por mol de zinco, confundindo com os 2 mol de HCl. E 22,4% toma o volume molar como porcentagem.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "dificil",
    enunciado:
      "Uma mistura de 10 L de metano e etano consome, na combustão completa, 26 L de O₂, medidos nas mesmas condições (CH₄ + 2 O₂ → CO₂ + 2 H₂O; 2 C₂H₆ + 7 O₂ → 4 CO₂ + 6 H₂O). Qual é a porcentagem de metano, em volume, na mistura?",
    opcoes: [
      "40% de metano",
      "50% de metano",
      "60% de metano",
      "88% de metano",
      "Não é possível saber sem as massas",
    ],
    correta: 2,
    explicacao:
      "Sejam x e y os volumes de metano e de etano: x + y = 10. O metano consome 2 volumes de O₂ por volume, e o etano, 7/2 = 3,5: 2x + 3,5y = 26. Substituindo y = 10 − x: 2x + 35 − 3,5x = 26, e x = 6 L. O metano é 6/10 = 60% da mistura; confere: 2 · 6 + 3,5 · 4 = 26 L.\n\n40% é a porcentagem de etano. 50% supõe metade de cada gás, o que consumiria 27,5 L. 88% usa 7 volumes de O₂ por volume de etano, esquecendo o coeficiente 2 da equação. E as massas não são necessárias: com gases nas mesmas condições, os volumes bastam.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "dificil",
    enunciado:
      "Com Cu = 63,5 (em g/mol) e o volume molar de 22,4 L/mol nas condições normais, 19,05 g de cobre são tratados com 0,6 mol de HNO₃, segundo 3 Cu + 8 HNO₃ → 3 Cu(NO₃)₂ + 2 NO + 4 H₂O. Que volume de NO se forma, nas condições normais?",
    opcoes: [
      "4,48 L",
      "6,72 L",
      "13,44 L",
      "3,36 L",
      "2,24 L",
    ],
    correta: 3,
    explicacao:
      "19,05 g de cobre são 19,05/63,5 = 0,3 mol, que precisariam de 0,3 · 8/3 = 0,8 mol de HNO₃; há só 0,6 mol, e o ácido é o limitante. Os 0,6 mol de HNO₃ formam 0,6 · 2/8 = 0,15 mol de NO, que ocupam 0,15 · 22,4 = 3,36 L. Sobram 0,075 mol de cobre sem reagir.\n\n4,48 L toma o cobre como limitante, com 0,2 mol de NO. 6,72 L usa a proporção 1 : 1 entre cobre e NO. 13,44 L usa a proporção 1 : 1 entre ácido e NO. E 2,24 L usa a proporção 3 : 1 entre cobre e NO, esquecendo o coeficiente 2 do NO.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "dificil",
    enunciado:
      "Com Fe = 56 e O = 16 (em g/mol), uma tonelada de minério com 80% de Fe₂O₃ é processada no alto-forno (Fe₂O₃ + 3 CO → 2 Fe + 3 CO₂), com rendimento de 90%. Que massa de ferro se obtém?",
    opcoes: [
      "560 kg",
      "700 kg",
      "504 kg",
      "630 kg",
      "448 kg",
    ],
    correta: 2,
    explicacao:
      "O minério contém 0,8 · 1.000 = 800 kg de Fe₂O₃, isto é, 800.000/160 = 5.000 mol, que dariam 10.000 mol de ferro, 560 kg, com rendimento total. Com 90%, obtêm-se 0,9 · 560 = 504 kg.\n\n560 kg esquece o rendimento. 700 kg esquece o rendimento e a pureza, calculando para uma tonelada de Fe₂O₃ puro. 630 kg esquece só a pureza. E 448 kg aplica a pureza duas vezes, multiplicando os 560 kg por 0,8 em vez de 0,9.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "dificil",
    enunciado:
      "Num recipiente rígido de 10 L, a 27 °C, misturam-se 0,2 mol de CO e 0,2 mol de O₂, que reagem completamente segundo 2 CO + O₂ → 2 CO₂. Com R = 0,082 atm·L/(mol·K), qual é a pressão final, de volta a 27 °C?",
    opcoes: [
      "≈ 0,98 atm",
      "≈ 0,49 atm",
      "≈ 0,74 atm",
      "≈ 0,25 atm",
      "≈ 0,07 atm",
    ],
    correta: 2,
    explicacao:
      "O CO é o limitante: 0,2 mol de CO consomem 0,1 mol de O₂ e formam 0,2 mol de CO₂; sobram 0,1 mol de O₂. O total de gás cai de 0,4 para 0,3 mol, e a pressão é p = n · R · T/V = 0,3 · 0,082 · 300/10 ≅ 0,74 atm.\n\n0,98 atm usa os 0,4 mol iniciais, como se o número de mols de gás não mudasse. 0,49 atm conta só o CO₂. 0,25 atm conta só o O₂ que sobra. E 0,07 atm usa a temperatura em graus Celsius.",
  },
  {
    materia: "exatas-militar",
    tema: "Estequiometria com reagente limitante",
    dificuldade: "dificil",
    enunciado:
      "Com Ca = 40, C = 12 e O = 16 (em g/mol), 1 g de calcário é tratado com 50 mL de HCl 0,5 mol/L, em excesso (CaCO₃ + 2 HCl → CaCl₂ + H₂O + CO₂). O ácido que sobra é neutralizado por 10 mL de NaOH 1 mol/L (HCl + NaOH → NaCl + H₂O). As impurezas não reagem. Qual é a porcentagem de CaCO₃ no calcário?",
    opcoes: [
      "25%",
      "75%",
      "150%",
      "125%",
      "50%",
    ],
    correta: 1,
    explicacao:
      "O HCl adicionado foi 0,5 · 0,05 = 0,025 mol. O excesso, neutralizado pela base, foi 1 · 0,01 = 0,01 mol. Reagiram com o carbonato, portanto, 0,025 − 0,01 = 0,015 mol de HCl, o que corresponde a 0,015/2 = 0,0075 mol de CaCO₃, ou 0,75 g. A porcentagem é 0,75/1 = 75%.\n\n25% é a fração de impurezas. 150% esquece que cada CaCO₃ consome 2 HCl, e dá mais carbonato do que a amostra inteira. 125% supõe que todo o ácido tenha reagido com o carbonato, ignorando o excesso. E 50% usa o excesso de ácido, 0,01 mol, como se fosse o que reagiu com o carbonato.",
  },
];
