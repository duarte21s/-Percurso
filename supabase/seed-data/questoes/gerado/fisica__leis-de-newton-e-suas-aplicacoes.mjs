/* Leis de Newton e suas aplicações (50 questões).
   Inércia, princípio fundamental da dinâmica, ação e reação, força de atrito,
   plano inclinado, tração e força normal.
   Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "facil",
    enunciado:
      "A primeira lei de Newton, conhecida como princípio da inércia, afirma que um corpo permanece em repouso ou em movimento retilíneo uniforme:",
    opcoes: [
      "sempre que sua massa for pequena.",
      "enquanto a força resultante sobre ele for nula.",
      "apenas quando estiver no vácuo.",
      "somente se não houver gravidade atuando.",
      "quando sua velocidade for muito alta.",
    ],
    correta: 1,
    explicacao:
      "A inércia é a tendência de um corpo manter seu estado de movimento. Forças podem atuar sobre ele desde que se cancelem: um livro apoiado na mesa sofre peso e normal, mas a resultante é nula. Não é a ausência de forças que importa, e sim a ausência de força resultante.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "facil",
    enunciado:
      "Uma força resultante de 20 N atua sobre um corpo de 4 kg. Pela segunda lei de Newton, a aceleração adquirida pelo corpo é de:",
    opcoes: [
      "0,2 m/s²",
      "4 m/s²",
      "5 m/s²",
      "16 m/s²",
      "80 m/s²",
    ],
    correta: 2,
    explicacao:
      "Pela relação F = m·a, tem-se a = F/m = 20/4 = 5 m/s². A aceleração é diretamente proporcional à força e inversamente proporcional à massa: com a mesma força, um corpo mais pesado acelera menos. A alternativa 80 m/s² multiplicaria em vez de dividir.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "facil",
    enunciado:
      "Um corpo de 10 kg está em repouso sobre uma superfície horizontal. Adotando g = 10 m/s², o peso desse corpo é de:",
    opcoes: [
      "1 N",
      "10 N",
      "20 N",
      "100 N",
      "1 000 N",
    ],
    correta: 3,
    explicacao:
      "O peso é a força gravitacional sobre o corpo: P = m·g = 10 · 10 = 100 N. Massa e peso são grandezas distintas: a massa é medida em quilogramas e não muda com o local, enquanto o peso é uma força, medida em newtons, e varia conforme a gravidade.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "media",
    enunciado:
      "A terceira lei de Newton estabelece que, quando um corpo A exerce força sobre um corpo B, então B exerce sobre A uma força de:",
    opcoes: [
      "mesma intensidade, mesma direção e sentido oposto.",
      "intensidade maior e sentido oposto.",
      "intensidade menor e mesmo sentido.",
      "mesma intensidade e mesmo sentido.",
      "intensidade proporcional à massa de A.",
    ],
    correta: 0,
    explicacao:
      "As forças de ação e reação têm mesmo módulo, mesma direção e sentidos opostos, mas atuam em corpos diferentes — por isso nunca se cancelam. Um corpo mais leve sofre maior aceleração sob a mesma força, o que explica por que a Terra não parece se mover quando pulamos.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "media",
    enunciado:
      "Um bloco de 5 kg é puxado horizontalmente por uma força de 30 N em uma superfície sem atrito. A aceleração adquirida pelo bloco é de:",
    opcoes: [
      "1 m/s²",
      "3 m/s²",
      "5 m/s²",
      "6 m/s²",
      "150 m/s²",
    ],
    correta: 3,
    explicacao:
      "Sem atrito, a força aplicada é a própria resultante: a = 30/5 = 6 m/s². As forças verticais — peso e normal — se cancelam e não influenciam o movimento horizontal. Com atrito, seria necessário subtrair a força de atrito antes de dividir pela massa.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "media",
    enunciado:
      "Um passageiro em pé dentro de um ônibus é lançado para a frente quando o veículo freia bruscamente. Esse fenômeno é explicado:",
    opcoes: [
      "pela força que o ônibus exerce para a frente no passageiro.",
      "pelo princípio da inércia, que mantém o passageiro em movimento.",
      "pela ação da força centrípeta sobre o corpo.",
      "pelo aumento do peso do passageiro durante a frenagem.",
      "pela terceira lei de Newton aplicada ao piso.",
    ],
    correta: 1,
    explicacao:
      "O ônibus desacelera, mas o corpo do passageiro tende a manter a velocidade que possuía. Não existe força empurrando-o para a frente: o que falta é uma força capaz de freá-lo junto com o veículo. É exatamente esse o papel do cinto de segurança.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "media",
    enunciado:
      "Um corpo de 2 kg está apoiado em um plano horizontal, e sobre ele atuam apenas o peso e a força normal. Adotando g = 10 m/s², a intensidade da força normal é de:",
    opcoes: [
      "2 N",
      "10 N",
      "20 N",
      "40 N",
      "zero",
    ],
    correta: 2,
    explicacao:
      "Como o corpo não acelera verticalmente, a normal equilibra o peso: N = P = 2 · 10 = 20 N. Peso e normal não formam par ação-reação, porque atuam no mesmo corpo — a reação do peso está no centro da Terra, e a da normal, na superfície de apoio.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "media",
    enunciado:
      "Um bloco de 4 kg desliza sobre uma superfície horizontal com coeficiente de atrito cinético igual a 0,25. Adotando g = 10 m/s², a força de atrito sobre o bloco é de:",
    opcoes: [
      "1 N",
      "4 N",
      "10 N",
      "16 N",
      "40 N",
    ],
    correta: 2,
    explicacao:
      "A força de atrito é o produto do coeficiente pela normal: Fat = 0,25 · 40 = 10 N. A normal, nesse caso, iguala o peso de 40 N. Note que o atrito cinético não depende da área de contato nem da velocidade, apenas do coeficiente e da força de compressão entre as superfícies.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "dificil",
    enunciado:
      "Um bloco de 4 kg é puxado horizontalmente por uma força de 30 N, sofrendo força de atrito de 10 N. A aceleração adquirida pelo bloco é de:",
    opcoes: [
      "2,5 m/s²",
      "5 m/s²",
      "7,5 m/s²",
      "10 m/s²",
      "40 m/s²",
    ],
    correta: 1,
    explicacao:
      "A resultante é a diferença entre a força aplicada e o atrito: 30 − 10 = 20 N. Assim, a = 20/4 = 5 m/s². Usar os 30 N diretamente daria 7,5 m/s², que é o erro mais comum: o atrito precisa ser descontado antes da divisão pela massa.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "media",
    enunciado:
      "Um elevador sobe com aceleração constante para cima. Em relação ao peso aparente de uma pessoa dentro dele, é correto afirmar que ele:",
    opcoes: [
      "é maior que o peso real da pessoa.",
      "é menor que o peso real da pessoa.",
      "é igual ao peso real da pessoa.",
      "torna-se nulo durante a subida.",
      "depende apenas da altura alcançada.",
    ],
    correta: 0,
    explicacao:
      "Para acelerar a pessoa para cima, a normal precisa superar o peso: N = m(g + a). É essa normal que a balança registra e que sentimos como peso. Na descida acelerada ocorre o contrário, e em queda livre a normal se anula, produzindo a sensação de imponderabilidade.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "media",
    enunciado:
      "Dois blocos de 3 kg e 2 kg estão encostados sobre uma superfície horizontal sem atrito e são empurrados por uma força de 10 N aplicada ao bloco de 3 kg. A aceleração do conjunto é de:",
    opcoes: [
      "1 m/s²",
      "2 m/s²",
      "3,3 m/s²",
      "5 m/s²",
      "10 m/s²",
    ],
    correta: 1,
    explicacao:
      "Como os blocos se movem juntos, considera-se a massa total: a = 10/(3 + 2) = 2 m/s². Tratar o conjunto como corpo único é o primeiro passo em problemas de blocos acoplados. Depois disso, isola-se um dos blocos para calcular a força de contato entre eles.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "dificil",
    enunciado:
      "Ainda considerando dois blocos de 3 kg e 2 kg empurrados por uma força de 10 N sobre superfície sem atrito, com aceleração de 2 m/s², a força que o primeiro bloco exerce sobre o segundo é de:",
    opcoes: [
      "2 N",
      "4 N",
      "6 N",
      "8 N",
      "10 N",
    ],
    correta: 1,
    explicacao:
      "Isolando o bloco de 2 kg, a única força horizontal sobre ele é a de contato: F = m·a = 2 · 2 = 4 N. Pela terceira lei, o bloco de 2 kg empurra o de 3 kg com os mesmos 4 N em sentido contrário. A força de contato é sempre menor que a força aplicada ao conjunto.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "media",
    enunciado:
      "Um corpo está pendurado em repouso por um fio vertical. As forças que atuam sobre ele são:",
    opcoes: [
      "apenas o peso, dirigido para baixo.",
      "peso e tração, de mesma intensidade e sentidos opostos.",
      "apenas a tração, dirigida para cima.",
      "peso, tração e força normal.",
      "nenhuma força, pois está em repouso.",
    ],
    correta: 1,
    explicacao:
      "Em equilíbrio, a tração do fio equilibra exatamente o peso: T = P. Não há normal, porque o corpo não está apoiado em superfície alguma. Estar em repouso não significa ausência de forças, e sim resultante nula.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "media",
    enunciado:
      "Uma força de 50 N atua sobre um corpo, produzindo aceleração de 2,5 m/s². A massa desse corpo é de:",
    opcoes: [
      "2 kg",
      "10 kg",
      "20 kg",
      "25 kg",
      "125 kg",
    ],
    correta: 2,
    explicacao:
      "Isolando a massa em F = m·a: m = 50/2,5 = 20 kg. A massa é a medida da inércia do corpo — quanto maior, mais difícil alterar seu estado de movimento. Diferentemente do peso, ela não depende do local onde o corpo se encontra.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "dificil",
    enunciado:
      "Um bloco de 10 kg está sobre um plano inclinado a 30° em relação à horizontal, sem atrito. Adotando g = 10 m/s², a componente do peso paralela ao plano vale:",
    opcoes: [
      "25 N",
      "50 N",
      "86,6 N",
      "100 N",
      "10 N",
    ],
    correta: 1,
    explicacao:
      "A componente paralela é P·sen θ = 100 · sen 30° = 100 · 0,5 = 50 N. Essa é a força que faz o bloco descer. A componente perpendicular, P·cos θ ≈ 86,6 N, é equilibrada pela normal e não contribui para o movimento ao longo do plano.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "dificil",
    enunciado:
      "Um bloco desliza sem atrito por um plano inclinado a 30°. Adotando g = 10 m/s², a aceleração do bloco ao longo do plano é de:",
    opcoes: [
      "2,5 m/s²",
      "5 m/s²",
      "8,66 m/s²",
      "10 m/s²",
      "20 m/s²",
    ],
    correta: 1,
    explicacao:
      "Sem atrito, a = g·sen θ = 10 · 0,5 = 5 m/s². Note que a massa não aparece: todos os blocos descem com a mesma aceleração, independentemente do peso. Quanto maior a inclinação, maior a aceleração, chegando a g quando o plano fica vertical.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "media",
    enunciado:
      "Sobre um corpo atuam duas forças de mesma direção e sentidos opostos, com intensidades de 12 N e 5 N. A força resultante sobre o corpo é de:",
    opcoes: [
      "7 N",
      "13 N",
      "17 N",
      "60 N",
      "zero",
    ],
    correta: 0,
    explicacao:
      "Forças de sentidos opostos na mesma direção se subtraem: 12 − 5 = 7 N, no sentido da maior. Se tivessem o mesmo sentido, somariam 17 N. Quando são perpendiculares, aplica-se o teorema de Pitágoras, o que daria 13 N neste caso.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "media",
    enunciado:
      "Um foguete se move no espaço expelindo gases para trás. O movimento do foguete é explicado principalmente:",
    opcoes: [
      "pela primeira lei de Newton.",
      "pela terceira lei de Newton.",
      "pela lei da gravitação universal.",
      "pelo princípio de Arquimedes.",
      "pela lei de Hooke.",
    ],
    correta: 1,
    explicacao:
      "O foguete empurra os gases para trás e, como reação, os gases empurram o foguete para a frente. Não é necessário haver ar para empurrar — daí o funcionamento no vácuo. É a aplicação mais direta do princípio de ação e reação.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "media",
    enunciado:
      "Uma força constante de 12 N atua sobre um corpo de 3 kg inicialmente em repouso, em superfície sem atrito. A velocidade do corpo após 5 s será de:",
    opcoes: [
      "4 m/s",
      "12 m/s",
      "20 m/s",
      "36 m/s",
      "60 m/s",
    ],
    correta: 2,
    explicacao:
      "Primeiro a aceleração: a = 12/3 = 4 m/s². Depois, v = a·t = 4 · 5 = 20 m/s. Problemas de dinâmica quase sempre exigem essa combinação: a segunda lei fornece a aceleração e a cinemática completa o restante.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "media",
    enunciado:
      "O coeficiente de atrito estático entre um bloco e uma superfície é maior que o coeficiente de atrito cinético. Isso significa que:",
    opcoes: [
      "é mais difícil iniciar o movimento do que mantê-lo.",
      "é mais fácil iniciar o movimento do que mantê-lo.",
      "o atrito não depende do tipo de superfície.",
      "o atrito aumenta com a velocidade do bloco.",
      "não há atrito quando o bloco está parado.",
    ],
    correta: 0,
    explicacao:
      "A força necessária para vencer a inércia do repouso é maior que a necessária para manter o deslizamento. É por isso que um móvel pesado 'solta' de repente ao ser empurrado. O atrito estático varia até um valor máximo; o cinético é praticamente constante.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "dificil",
    enunciado:
      "Dois corpos de 6 kg e 4 kg estão ligados por um fio ideal que passa por uma polia, em uma máquina de Atwood. Adotando g = 10 m/s², a aceleração do sistema é de:",
    opcoes: [
      "1 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²",
      "10 m/s²",
    ],
    correta: 1,
    explicacao:
      "A força resultante é a diferença dos pessos: (6 − 4) · 10 = 20 N, e a massa total é 10 kg, o que dá a = 2 m/s². A polia ideal apenas muda a direção da tração, sem alterar seu módulo. O corpo mais pesado desce enquanto o mais leve sobe.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "media",
    enunciado:
      "Um livro em repouso sobre uma mesa sofre a ação do peso e da força normal. Sobre essas duas forças, é correto afirmar que elas:",
    opcoes: [
      "atuam no mesmo corpo e têm resultante nula.",
      "formam um par ação-reação.",
      "têm intensidades sempre diferentes.",
      "atuam em corpos diferentes.",
      "apontam no mesmo sentido.",
    ],
    correta: 0,
    explicacao:
      "Peso e normal agem sobre o mesmo corpo, o livro, e por isso não formam par ação-reação — pares atuam sempre em corpos distintos. A reação do peso é a atração que o livro exerce na Terra; a da normal é a força que o livro faz na mesa.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "media",
    enunciado:
      "Um corpo de 8 kg sobe com aceleração de 2 m/s² puxado por um fio vertical. Adotando g = 10 m/s², a tração no fio é de:",
    opcoes: [
      "16 N",
      "64 N",
      "80 N",
      "96 N",
      "160 N",
    ],
    correta: 3,
    explicacao:
      "A tração precisa vencer o peso e ainda acelerar o corpo: T = m(g + a) = 8 · 12 = 96 N. Se o corpo descesse acelerado, a tração seria menor que o peso. Em movimento uniforme, tração e peso se igualariam em 80 N.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "media",
    enunciado:
      "Sobre a relação entre massa e peso de um corpo levado da Terra para a Lua, é correto afirmar que:",
    opcoes: [
      "a massa permanece igual e o peso diminui.",
      "massa e peso permanecem iguais.",
      "a massa diminui e o peso permanece igual.",
      "massa e peso aumentam.",
      "a massa aumenta e o peso diminui.",
    ],
    correta: 0,
    explicacao:
      "A massa mede a quantidade de matéria e não depende do local. O peso é a força gravitacional, proporcional à gravidade local, que na Lua é cerca de um sexto da terrestre. Por isso astronautas saltam mais alto sem que sua massa tenha mudado.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "dificil",
    enunciado:
      "Um bloco de 5 kg é empurrado contra uma parede vertical por uma força horizontal, permanecendo em repouso graças ao atrito. Adotando g = 10 m/s², a força de atrito sobre o bloco vale:",
    opcoes: [
      "zero",
      "25 N",
      "50 N",
      "100 N",
      "depende do coeficiente de atrito",
    ],
    correta: 2,
    explicacao:
      "Como o bloco não desce, o atrito equilibra exatamente o peso: Fat = P = 50 N, dirigido para cima. O coeficiente determina o valor máximo possível do atrito, mas o valor efetivo é o necessário para o equilíbrio. Se a força horizontal fosse pequena demais, o bloco escorregaria.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "media",
    enunciado:
      "Duas forças perpendiculares entre si, de 6 N e 8 N, atuam sobre um mesmo corpo. A intensidade da força resultante é de:",
    opcoes: [
      "10 N",
      "2 N",
      "14 N",
      "28 N",
      "48 N",
    ],
    correta: 0,
    explicacao:
      "Forças perpendiculares compõem-se pelo teorema de Pitágoras: √(36 + 64) = √100 = 10 N. Somar diretamente daria 14 N, valor que só valeria se tivessem o mesmo sentido. Força é grandeza vetorial, e sua composição depende do ângulo entre as direções.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "media",
    enunciado:
      "Um paraquedista em queda atinge a chamada velocidade terminal. Nesse instante, é correto afirmar que:",
    opcoes: [
      "a força resultante sobre ele é nula.",
      "o peso é maior que a resistência do ar.",
      "a aceleração é igual a g.",
      "a resistência do ar é nula.",
      "sua massa diminuiu durante a queda.",
    ],
    correta: 0,
    explicacao:
      "A resistência do ar cresce com a velocidade até igualar o peso; a partir daí a resultante é nula e a velocidade permanece constante. Não é ausência de forças, e sim equilíbrio entre elas. Abrir o paraquedas aumenta a resistência e reduz a velocidade terminal.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "media",
    enunciado:
      "Um corpo de 2 kg sofre a ação de uma força resultante que o faz acelerar a 3 m/s². A intensidade dessa força resultante é de:",
    opcoes: [
      "1,5 N",
      "5 N",
      "6 N",
      "9 N",
      "12 N",
    ],
    correta: 2,
    explicacao:
      "Diretamente da segunda lei: F = m·a = 2 · 3 = 6 N. A força resultante é a soma vetorial de todas as forças atuantes, e não uma força isolada. Se houvesse atrito, a força aplicada precisaria ser maior que 6 N para produzir a mesma aceleração.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "dificil",
    enunciado:
      "Um bloco de 2 kg desliza com atrito por um plano inclinado a 30°, com coeficiente de atrito cinético de 0,2. Adotando g = 10 m/s² e cos 30° ≈ 0,87, a força de atrito sobre o bloco é de aproximadamente:",
    opcoes: [
      "1,7 N",
      "4 N",
      "10 N",
      "3,5 N",
      "17 N",
    ],
    correta: 3,
    explicacao:
      "A normal no plano inclinado é P·cos θ = 20 · 0,87 ≈ 17,3 N. O atrito é 0,2 · 17,3 ≈ 3,5 N. O erro típico é usar o peso total como normal: no plano inclinado, apenas a componente perpendicular comprime a superfície.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "media",
    enunciado:
      "Ao caminhar, uma pessoa empurra o chão para trás e se desloca para a frente. Esse movimento ocorre porque:",
    opcoes: [
      "o chão exerce sobre a pessoa uma força para a frente, por reação.",
      "a pessoa vence a inércia sem necessidade de força externa.",
      "o peso da pessoa a impulsiona para a frente.",
      "a força normal tem componente horizontal.",
      "a gravidade atua no sentido do movimento.",
    ],
    correta: 0,
    explicacao:
      "Pela terceira lei, ao empurrar o chão para trás a pessoa recebe do chão uma força de mesma intensidade para a frente. Essa força é o atrito estático, e por isso é difícil caminhar no gelo. Sem atrito, o par ação-reação horizontal não se estabelece.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "media",
    enunciado:
      "Um corpo de 5 kg está sujeito a três forças horizontais: 20 N para a direita, 8 N para a esquerda e 2 N para a esquerda. A aceleração resultante é de:",
    opcoes: [
      "1 m/s²",
      "4 m/s²",
      "6 m/s²",
      "2 m/s²",
      "10 m/s²",
    ],
    correta: 3,
    explicacao:
      "A resultante é 20 − 8 − 2 = 10 N para a direita, então a = 10/5 = 2 m/s². Forças na mesma direção somam-se algebricamente conforme o sentido. Somar todos os módulos, sem considerar sentido, é o erro mais comum.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "media",
    enunciado:
      "O cinto de segurança é um dispositivo cuja função física principal é:",
    opcoes: [
      "aumentar o peso do passageiro durante a colisão.",
      "reduzir a massa do corpo em movimento.",
      "aplicar ao passageiro a força necessária para desacelerá-lo junto com o veículo.",
      "eliminar a inércia do passageiro.",
      "anular a força de atrito no banco.",
    ],
    correta: 2,
    explicacao:
      "Em uma frenagem brusca, o corpo tende a manter sua velocidade por inércia; o cinto fornece a força que o retém. Ele também distribui essa força por uma área maior do corpo e prolonga o tempo de desaceleração, o que reduz a intensidade do impacto.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "dificil",
    enunciado:
      "Um elevador desce em queda livre com aceleração igual a g. Uma pessoa dentro dele, sobre uma balança, registrará leitura correspondente a:",
    opcoes: [
      "seu peso normal.",
      "o dobro de seu peso.",
      "metade de seu peso.",
      "zero.",
      "um valor que depende de sua altura.",
    ],
    correta: 3,
    explicacao:
      "Em queda livre, elevador e pessoa aceleram juntos a g, e a normal entre corpo e balança se anula. A balança mede a normal, e por isso registra zero — é a chamada imponderabilidade. A pessoa continua sujeita à gravidade: seu peso real não mudou.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "media",
    enunciado:
      "Um corpo move-se em linha reta com velocidade constante sobre uma superfície com atrito. Sobre a força aplicada para manter esse movimento, é correto afirmar que ela:",
    opcoes: [
      "é maior que a força de atrito.",
      "é menor que a força de atrito.",
      "é nula.",
      "tem a mesma intensidade da força de atrito.",
      "aumenta continuamente com o tempo.",
    ],
    correta: 3,
    explicacao:
      "Velocidade constante significa aceleração nula e, portanto, resultante nula: a força aplicada equilibra exatamente o atrito. Se fosse maior, o corpo aceleraria. Esse é o caso mais comum na prática — manter algo em movimento exige força justamente por causa do atrito.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "media",
    enunciado:
      "Um objeto de 12 kg recebe uma força resultante de 36 N durante 4 s, partindo do repouso. A distância percorrida nesse intervalo é de:",
    opcoes: [
      "6 m",
      "12 m",
      "18 m",
      "24 m",
      "48 m",
    ],
    correta: 3,
    explicacao:
      "A aceleração é 36/12 = 3 m/s². Aplicando S = a·t²/2 = 3 · 16/2 = 24 m. Novamente, dinâmica e cinemática se combinam: a segunda lei dá a aceleração e a equação horária fornece o espaço.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "media",
    enunciado:
      "Ao dobrar a força resultante aplicada a um corpo, mantendo sua massa, a aceleração adquirida:",
    opcoes: [
      "permanece a mesma.",
      "fica reduzida à metade.",
      "fica multiplicada por dois.",
      "fica multiplicada por quatro.",
      "torna-se nula.",
    ],
    correta: 2,
    explicacao:
      "A relação F = m·a estabelece proporcionalidade direta entre força e aceleração para massa constante. Dobrando a força, dobra a aceleração. Se, em vez disso, a massa dobrasse com força constante, a aceleração cairia pela metade.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "dificil",
    enunciado:
      "Um bloco de 3 kg está em repouso sobre um plano inclinado, mantido pela força de atrito estático. Aumentando gradualmente a inclinação, o bloco começa a deslizar quando:",
    opcoes: [
      "o peso do bloco aumenta.",
      "a força normal se torna maior que o peso.",
      "a massa do bloco diminui.",
      "a componente do peso paralela ao plano supera o atrito estático máximo.",
      "o coeficiente de atrito se torna negativo.",
    ],
    correta: 3,
    explicacao:
      "Ao inclinar mais o plano, a componente paralela do peso cresce e a normal diminui, reduzindo o atrito máximo disponível. Quando a primeira supera o segundo, o equilíbrio se rompe. O ângulo em que isso ocorre permite medir experimentalmente o coeficiente de atrito estático.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "media",
    enunciado:
      "Um corpo de 15 kg é arrastado horizontalmente com velocidade constante por uma força de 45 N. Adotando g = 10 m/s², o coeficiente de atrito cinético entre o corpo e a superfície é de:",
    opcoes: [
      "0,1",
      "0,2",
      "0,3",
      "0,45",
      "3",
    ],
    correta: 2,
    explicacao:
      "Com velocidade constante, o atrito iguala a força aplicada: Fat = 45 N. Como a normal é 150 N, o coeficiente é 45/150 = 0,3. O coeficiente é adimensional, o que serve de conferência: se aparecer com unidade, houve erro na conta.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "media",
    enunciado:
      "Um corpo de massa m está sujeito a forças que se anulam mutuamente. Sobre seu estado de movimento, conclui-se que ele:",
    opcoes: [
      "está necessariamente em repouso.",
      "move-se com aceleração constante.",
      "move-se em trajetória circular.",
      "está em repouso ou em movimento retilíneo uniforme.",
      "tem velocidade crescente.",
    ],
    correta: 3,
    explicacao:
      "Resultante nula implica aceleração nula, o que preserva o estado de movimento — seja repouso, seja MRU. Um satélite em órbita, por outro lado, tem resultante não nula, embora sua rapidez seja constante, porque a direção da velocidade muda continuamente.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "dificil",
    enunciado:
      "Dois blocos de 2 kg e 3 kg estão ligados por um fio ideal sobre superfície horizontal sem atrito. Uma força de 20 N puxa o bloco de 3 kg. A tração no fio que os une é de:",
    opcoes: [
      "4 N",
      "12 N",
      "16 N",
      "20 N",
      "8 N",
    ],
    correta: 4,
    explicacao:
      "A aceleração do conjunto é 20/5 = 4 m/s². Isolando o bloco de 2 kg, a única força sobre ele é a tração: T = 2 · 4 = 8 N. O fio ideal transmite integralmente a força, sem massa própria e sem deformação.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "media",
    enunciado:
      "Sobre a unidade newton no Sistema Internacional, é correto afirmar que 1 N corresponde à força capaz de:",
    opcoes: [
      "acelerar 1 kg a 1 m/s².",
      "acelerar 1 g a 1 cm/s².",
      "levantar 1 kg contra a gravidade terrestre.",
      "deslocar 1 kg por 1 metro.",
      "manter 1 kg em repouso.",
    ],
    correta: 0,
    explicacao:
      "A definição decorre diretamente de F = m·a: 1 N = 1 kg · 1 m/s². Levantar 1 kg na Terra exigiria cerca de 10 N, e não 1 N. Deslocar por certa distância envolve trabalho, medido em joules, que é outra grandeza.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "media",
    enunciado:
      "Um corpo de 4 kg está em equilíbrio suspenso por dois fios que formam ângulos iguais com a vertical. Adotando g = 10 m/s², a soma das componentes verticais das trações vale:",
    opcoes: [
      "4 N",
      "20 N",
      "80 N",
      "zero",
      "40 N",
    ],
    correta: 4,
    explicacao:
      "Em equilíbrio, a soma das forças verticais é nula, então as componentes verticais das trações devem somar exatamente o peso: 4 · 10 = 40 N. As componentes horizontais se cancelam entre si por simetria. Quanto mais abertos os fios, maior a tração em cada um.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "media",
    enunciado:
      "Ao chutar uma bola, o pé exerce sobre ela uma força de 200 N. A força que a bola exerce sobre o pé tem intensidade de:",
    opcoes: [
      "zero",
      "100 N",
      "400 N",
      "depende da massa da bola",
      "200 N",
    ],
    correta: 4,
    explicacao:
      "Pela terceira lei, as forças de interação têm sempre o mesmo módulo, independentemente das massas envolvidas. A bola acelera muito mais que o pé porque sua massa é bem menor. As duas forças não se cancelam por atuarem em corpos diferentes.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "media",
    enunciado:
      "Em um carro que faz uma curva, os passageiros sentem-se lançados para fora. Do ponto de vista de um referencial fixo no solo, essa sensação é explicada:",
    opcoes: [
      "pela força centrífuga, que atua sobre os passageiros.",
      "pelo aumento do peso durante a curva.",
      "pela terceira lei aplicada ao volante.",
      "pela redução da força normal no banco.",
      "pela tendência de o corpo manter movimento retilíneo, por inércia.",
    ],
    correta: 4,
    explicacao:
      "O carro é forçado a curvar pela força de atrito nos pneus, mas o corpo do passageiro tende a seguir em linha reta. Em um referencial fixo no solo, não existe força centrífuga real: ela aparece apenas como força fictícia em referenciais girantes.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "dificil",
    enunciado:
      "Um objeto de 6 kg é puxado por uma força de 60 N que forma 60° com a horizontal, em superfície sem atrito. Adotando cos 60° = 0,5, a aceleração horizontal do objeto é de:",
    opcoes: [
      "2 m/s²",
      "8,6 m/s²",
      "10 m/s²",
      "60 m/s²",
      "5 m/s²",
    ],
    correta: 4,
    explicacao:
      "Apenas a componente horizontal produz movimento nessa direção: Fx = 60 · cos 60° = 30 N, e a = 30/6 = 5 m/s². A componente vertical reduz a força normal, mas sem atrito isso não afeta o movimento horizontal. Decompor forças inclinadas é etapa obrigatória.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "media",
    enunciado:
      "Um corpo em movimento retilíneo tem sua velocidade reduzida progressivamente até parar. Sobre a força resultante durante esse processo, conclui-se que ela:",
    opcoes: [
      "aponta no mesmo sentido do movimento.",
      "é nula durante todo o percurso.",
      "é perpendicular à velocidade.",
      "aumenta o módulo da velocidade.",
      "aponta no sentido oposto ao do movimento.",
    ],
    correta: 4,
    explicacao:
      "Para reduzir a velocidade, a resultante precisa se opor ao movimento — é o caso da força de atrito ou de frenagem. Resultante no mesmo sentido aceleraria o corpo, e resultante perpendicular apenas mudaria a direção, como no movimento circular uniforme.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "media",
    enunciado:
      "Um corpo de 50 kg está em repouso sobre o piso de um elevador que sobe com velocidade constante. Adotando g = 10 m/s², a força normal sobre o corpo é de:",
    opcoes: [
      "zero",
      "250 N",
      "750 N",
      "1 000 N",
      "500 N",
    ],
    correta: 4,
    explicacao:
      "Velocidade constante implica aceleração nula, então a normal equilibra o peso: N = 500 N. A sensação de peso alterado só ocorre durante a aceleração, no início e no fim do percurso. Durante o trecho de velocidade uniforme, tudo se passa como em repouso.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "dificil",
    enunciado:
      "Um bloco é lançado com velocidade inicial sobre uma superfície horizontal com atrito e vai parando gradualmente. A distância percorrida até parar depende:",
    opcoes: [
      "apenas da massa do bloco.",
      "somente do tempo de movimento.",
      "exclusivamente da área de contato.",
      "apenas da força normal aplicada.",
      "da velocidade inicial e do coeficiente de atrito, mas não da massa.",
    ],
    correta: 4,
    explicacao:
      "A desaceleração é a = μ·g, que não depende da massa, porque tanto o atrito quanto a inércia crescem com ela. Por Torricelli, a distância é v₀²/(2μg). Por isso dois carros iguais em velocidade e pneus param na mesma distância, ainda que um esteja mais carregado.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "media",
    enunciado:
      "As três leis de Newton formam a base da mecânica clássica. Elas deixam de ser adequadas, exigindo outras teorias, quando se trata de:",
    opcoes: [
      "objetos do cotidiano em velocidades moderadas.",
      "movimentos em plano inclinado.",
      "corpos submetidos a atrito.",
      "sistemas com mais de dois corpos.",
      "corpos com velocidades próximas à da luz ou de escala atômica.",
    ],
    correta: 4,
    explicacao:
      "Em velocidades comparáveis à da luz, a relatividade restrita substitui a mecânica newtoniana; em escala atômica, a mecânica quântica. Para fenômenos cotidianos, porém, as leis de Newton continuam extremamente precisas — é por isso que seguem sendo usadas em engenharia.",
  },
  {
    materia: "fisica",
    tema: "Leis de Newton e suas aplicações",
    dificuldade: "facil",
    enunciado:
      "Um bloco de 4 kg está em repouso sobre uma superfície horizontal sem atrito. Uma força horizontal constante de 12 N passa a atuar sobre ele. A aceleração adquirida pelo bloco é de:",
    opcoes: [
      "1 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²",
      "3 m/s²",
    ],
    correta: 4,
    explicacao:
      "Pela segunda lei de Newton, a = F/m = 12/4 = 3 m/s². Um erro comum é inverter a razão, calculando m/F, o que daria um valor bem menor e sem sentido físico para uma aceleração.",
  },
];
