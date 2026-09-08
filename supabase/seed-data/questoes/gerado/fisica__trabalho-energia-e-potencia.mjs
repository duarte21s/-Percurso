/* Trabalho, energia e potência (50 questões).
   Trabalho de força constante, energia cinética, potencial gravitacional e
   elástica, conservação da energia mecânica, potência e rendimento.
   Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "facil",
    enunciado:
      "Uma força constante de 20 N desloca um corpo por 5 m, na mesma direção e sentido do deslocamento. O trabalho realizado por essa força é de:",
    opcoes: [
      "4 J",
      "25 J",
      "50 J",
      "100 J",
      "200 J",
    ],
    correta: 3,
    explicacao:
      "Para força paralela ao deslocamento, o trabalho é o produto da força pela distância: 20 · 5 = 100 J. Trabalho é uma grandeza escalar medida em joules. Quando a força é perpendicular ao deslocamento, o trabalho é nulo, ainda que a força exista.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Uma pessoa carrega uma mala de 10 kg caminhando horizontalmente por 20 m com velocidade constante. Sobre o trabalho realizado pela força que sustenta a mala, é correto afirmar que ele é:",
    opcoes: [
      "igual a 2 000 J.",
      "igual a 200 J.",
      "nulo, pois a força é perpendicular ao deslocamento.",
      "igual ao peso da mala.",
      "negativo, pois a força se opõe ao movimento.",
    ],
    correta: 2,
    explicacao:
      "A força de sustentação é vertical e o deslocamento é horizontal: o ângulo entre elas é 90°, e o cosseno de 90° é zero. Fisicamente, não há transferência de energia à mala nessa direção — embora a pessoa sinta cansaço, que decorre do trabalho muscular interno.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Um corpo de 4 kg move-se com velocidade de 10 m/s. A energia cinética desse corpo é de:",
    opcoes: [
      "20 J",
      "40 J",
      "100 J",
      "200 J",
      "400 J",
    ],
    correta: 3,
    explicacao:
      "A energia cinética é Ec = m·v²/2 = 4 · 100/2 = 200 J. Note a dependência quadrática da velocidade: dobrar a velocidade quadruplica a energia. É por isso que a distância de frenagem cresce tão rapidamente com a velocidade de um veículo.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Um corpo de 2 kg está a 15 m de altura em relação ao solo. Adotando g = 10 m/s², sua energia potencial gravitacional é de:",
    opcoes: [
      "30 J",
      "150 J",
      "300 J",
      "450 J",
      "3 000 J",
    ],
    correta: 2,
    explicacao:
      "A energia potencial gravitacional é Ep = m·g·h = 2 · 10 · 15 = 300 J. Ela depende do referencial adotado para a altura: medida em relação a outro nível, o valor muda. O que tem significado físico é a variação da energia potencial, não seu valor absoluto.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Uma máquina realiza trabalho de 6 000 J em 30 s. A potência média desenvolvida por essa máquina é de:",
    opcoes: [
      "20 W",
      "200 W",
      "2 000 W",
      "180 000 W",
      "5 W",
    ],
    correta: 1,
    explicacao:
      "Potência é a razão entre trabalho e tempo: 6 000/30 = 200 W. A potência mede a rapidez com que a energia é transferida. Duas máquinas podem realizar o mesmo trabalho, mas a mais potente o faz em menos tempo.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "dificil",
    enunciado:
      "Um corpo é abandonado do repouso de uma altura de 20 m. Desprezando a resistência do ar e adotando g = 10 m/s², sua velocidade ao atingir o solo, calculada pela conservação da energia mecânica, é de:",
    opcoes: [
      "10 m/s",
      "14 m/s",
      "20 m/s",
      "40 m/s",
      "200 m/s",
    ],
    correta: 2,
    explicacao:
      "Toda a energia potencial converte-se em cinética: m·g·h = m·v²/2. A massa se cancela e resta v² = 2gh = 400, logo v = 20 m/s. O resultado independe da massa, em coerência com a queda livre estudada na cinemática.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Sobre a energia mecânica de um sistema, é correto afirmar que ela corresponde:",
    opcoes: [
      "apenas à energia cinética do corpo.",
      "à soma das energias cinética e potencial.",
      "somente à energia potencial gravitacional.",
      "à diferença entre trabalho e potência.",
      "ao produto da massa pela velocidade.",
    ],
    correta: 1,
    explicacao:
      "A energia mecânica reúne a energia associada ao movimento e a associada à posição ou à deformação. Na ausência de forças dissipativas, essa soma permanece constante, embora suas parcelas se convertam uma na outra. Com atrito, parte dela se transforma em energia térmica.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Uma mola de constante elástica 200 N/m é comprimida em 0,1 m. A energia potencial elástica armazenada é de:",
    opcoes: [
      "1 J",
      "2 J",
      "10 J",
      "20 J",
      "0,5 J",
    ],
    correta: 0,
    explicacao:
      "A energia elástica é Ep = k·x²/2 = 200 · 0,01/2 = 1 J. A dependência é quadrática na deformação: comprimir o dobro armazena quatro vezes mais energia. Vale para compressão e para distensão, já que x aparece ao quadrado.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Um bloco desliza sobre uma superfície com atrito e vai perdendo velocidade. A energia mecânica perdida pelo bloco converte-se principalmente em:",
    opcoes: [
      "energia potencial gravitacional.",
      "energia térmica, aquecendo bloco e superfície.",
      "energia elétrica.",
      "energia potencial elástica.",
      "nenhuma forma de energia; ela simplesmente desaparece.",
    ],
    correta: 1,
    explicacao:
      "O atrito é força dissipativa: converte energia mecânica em térmica, elevando a temperatura das superfícies em contato. A energia total se conserva, mas deixa de estar disponível como energia mecânica. É por isso que esfregar as mãos as aquece.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "dificil",
    enunciado:
      "Um corpo de 3 kg cai de 10 m de altura e chega ao solo com 12 m/s. Adotando g = 10 m/s², a energia dissipada pela resistência do ar durante a queda foi de:",
    opcoes: [
      "84 J",
      "216 J",
      "300 J",
      "384 J",
      "516 J",
    ],
    correta: 0,
    explicacao:
      "A energia potencial inicial é 3 · 10 · 10 = 300 J e a cinética final é 3 · 144/2 = 216 J. A diferença, 300 − 216 = 84 J, foi dissipada. Sem resistência do ar, o corpo chegaria com aproximadamente 14 m/s e toda a energia se converteria em cinética.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Uma força de 50 N forma 60° com a direção do deslocamento de 4 m. Adotando cos 60° = 0,5, o trabalho realizado por essa força é de:",
    opcoes: [
      "50 J",
      "100 J",
      "150 J",
      "200 J",
      "400 J",
    ],
    correta: 1,
    explicacao:
      "Com força inclinada, apenas a componente paralela ao deslocamento realiza trabalho: W = F·d·cos θ = 50 · 4 · 0,5 = 100 J. A componente perpendicular não contribui. Quando o ângulo passa de 90°, o cosseno fica negativo e o trabalho é resistente.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Um motor de 1 500 W funciona durante 2 minutos. A energia consumida por esse motor, em joules, é de:",
    opcoes: [
      "3 000 J",
      "12,5 J",
      "45 000 J",
      "90 000 J",
      "180 000 J",
    ],
    correta: 4,
    explicacao:
      "Dois minutos correspondem a 120 s, e a energia é potência vezes tempo: 1 500 · 120 = 180 000 J. Esquecer a conversão de minutos para segundos leva a 3 000 J. Em quilowatt-hora, essa energia equivale a 0,05 kWh.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Um guindaste eleva uma carga de 500 kg a 8 m de altura em 20 s. Adotando g = 10 m/s², a potência média desenvolvida é de:",
    opcoes: [
      "200 W",
      "400 W",
      "2 000 W",
      "4 000 W",
      "40 000 W",
    ],
    correta: 2,
    explicacao:
      "O trabalho realizado contra a gravidade é m·g·h = 500 · 10 · 8 = 40 000 J. Dividindo pelo tempo: 40 000/20 = 2 000 W, ou 2 kW. A potência informa a rapidez da elevação, não a quantidade total de energia envolvida.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "dificil",
    enunciado:
      "Um pêndulo é solto de uma altura de 0,8 m em relação ao ponto mais baixo de sua trajetória. Desprezando o atrito e adotando g = 10 m/s², sua velocidade no ponto mais baixo é de:",
    opcoes: [
      "2 m/s",
      "4 m/s",
      "8 m/s",
      "16 m/s",
      "80 m/s",
    ],
    correta: 1,
    explicacao:
      "Pela conservação da energia mecânica, v² = 2gh = 2 · 10 · 0,8 = 16, logo v = 4 m/s. A massa do pêndulo não influencia o resultado. No ponto mais baixo a energia é totalmente cinética; nos extremos, totalmente potencial.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "O teorema da energia cinética estabelece que o trabalho da força resultante sobre um corpo é igual:",
    opcoes: [
      "à energia potencial final do corpo.",
      "à variação da energia cinética do corpo.",
      "à potência desenvolvida pelo corpo.",
      "ao produto da massa pela aceleração.",
      "à energia mecânica total do sistema.",
    ],
    correta: 1,
    explicacao:
      "O teorema afirma que W = ΔEc = Ec final − Ec inicial. Ele permite resolver problemas sem calcular aceleração nem tempo, bastando conhecer velocidades inicial e final. Trabalho positivo aumenta a energia cinética; negativo, reduz.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Um corpo de 5 kg tem sua velocidade aumentada de 2 m/s para 6 m/s. O trabalho da força resultante nesse processo foi de:",
    opcoes: [
      "10 J",
      "40 J",
      "80 J",
      "90 J",
      "160 J",
    ],
    correta: 2,
    explicacao:
      "A energia cinética final é 5 · 36/2 = 90 J e a inicial, 5 · 4/2 = 10 J. O trabalho é a diferença: 90 − 10 = 80 J. Calcular a variação, e não apenas o valor final, é o ponto central do teorema da energia cinética.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Uma máquina recebe 5 000 J de energia e realiza 3 500 J de trabalho útil. O rendimento dessa máquina é de:",
    opcoes: [
      "30%",
      "50%",
      "70%",
      "85%",
      "143%",
    ],
    correta: 2,
    explicacao:
      "O rendimento é a razão entre energia útil e energia total: 3 500/5 000 = 0,7 = 70%. Os 1 500 J restantes foram dissipados, geralmente como calor. Nenhuma máquina real atinge 100%, o que é uma consequência da segunda lei da termodinâmica.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Sobre o trabalho realizado pela força peso quando um corpo é elevado verticalmente, é correto afirmar que ele é:",
    opcoes: [
      "positivo, pois a força atua durante o deslocamento.",
      "negativo, pois a força se opõe ao deslocamento.",
      "nulo, pois a força é perpendicular ao movimento.",
      "igual à energia cinética final.",
      "sempre igual à potência aplicada.",
    ],
    correta: 1,
    explicacao:
      "Na subida, o peso aponta para baixo e o deslocamento para cima: o ângulo é 180° e o cosseno vale −1, tornando o trabalho negativo. Na descida, o trabalho do peso é positivo. Trabalho negativo indica que a força retira energia cinética do corpo.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "dificil",
    enunciado:
      "Um carrinho de montanha-russa parte do repouso de 45 m de altura e passa por um ponto situado a 20 m. Desprezando o atrito e adotando g = 10 m/s², sua velocidade nesse ponto é de:",
    opcoes: [
      "10 m/s",
      "20 m/s",
      "22,4 m/s",
      "30 m/s",
      "50 m/s",
    ],
    correta: 2,
    explicacao:
      "A altura convertida em energia cinética é 45 − 20 = 25 m, então v² = 2 · 10 · 25 = 500 e v ≈ 22,4 m/s. Apenas o desnível percorrido importa, não a forma da trajetória — desde que não haja atrito. Essa é a grande vantagem do método energético sobre o cinemático.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "A unidade quilowatt-hora, usada nas contas de energia elétrica, é unidade de:",
    opcoes: [
      "potência",
      "força",
      "energia",
      "trabalho por unidade de massa",
      "tempo",
    ],
    correta: 2,
    explicacao:
      "O quilowatt-hora resulta do produto de potência por tempo, o que caracteriza energia — equivale a 3,6 milhões de joules. A conta de luz cobra energia consumida, não potência instalada. Um aparelho potente ligado por pouco tempo pode consumir menos que um fraco ligado o dia inteiro.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Um chuveiro de 5 500 W permanece ligado 30 minutos por dia. O consumo diário de energia desse chuveiro é de:",
    opcoes: [
      "0,275 kWh",
      "2,75 kWh",
      "5,5 kWh",
      "27,5 kWh",
      "165 kWh",
    ],
    correta: 1,
    explicacao:
      "A potência em quilowatts é 5,5 kW e o tempo, 0,5 h, o que dá 5,5 · 0,5 = 2,75 kWh. Em 30 dias, seriam 82,5 kWh — parcela expressiva de uma conta residencial. Reduzir o tempo de banho tem efeito direto e proporcional sobre esse valor.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "dificil",
    enunciado:
      "Um bloco de 2 kg desliza a 6 m/s sobre superfície horizontal e para após percorrer 9 m. Adotando g = 10 m/s², o coeficiente de atrito cinético entre bloco e superfície é de:",
    opcoes: [
      "0,1",
      "0,2",
      "0,3",
      "0,4",
      "0,6",
    ],
    correta: 1,
    explicacao:
      "A energia cinética inicial é 2 · 36/2 = 36 J, e o trabalho do atrito é μ·m·g·d = μ · 2 · 10 · 9 = 180μ. Igualando: 180μ = 36, logo μ = 0,2. O método energético dispensa o cálculo da desaceleração e do tempo.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Duas pessoas sobem a mesma escada até o mesmo andar, uma correndo e outra caminhando. Comparando trabalho e potência, é correto afirmar que:",
    opcoes: [
      "ambas realizam o mesmo trabalho, mas quem corre desenvolve maior potência.",
      "quem corre realiza mais trabalho e menor potência.",
      "quem caminha realiza mais trabalho.",
      "trabalho e potência são iguais nos dois casos.",
      "não há trabalho realizado em nenhum dos casos.",
    ],
    correta: 0,
    explicacao:
      "O trabalho contra a gravidade depende apenas do peso e da altura vencida, que são iguais nos dois casos. A potência, porém, depende do tempo: quem sobe mais rápido transfere a mesma energia em menos tempo. Essa distinção é o cerne do conceito de potência.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Um corpo em movimento circular uniforme está sujeito à força centrípeta. O trabalho realizado por essa força ao longo de uma volta completa é:",
    opcoes: [
      "positivo e proporcional ao raio.",
      "negativo e proporcional à velocidade.",
      "nulo, pois a força é sempre perpendicular ao deslocamento.",
      "igual à energia cinética do corpo.",
      "igual ao produto da força pelo comprimento da circunferência.",
    ],
    correta: 2,
    explicacao:
      "A força centrípeta aponta para o centro e o deslocamento é tangente à trajetória: as duas são perpendiculares em todo instante. Por isso o trabalho é nulo e a energia cinética permanece constante — a força muda a direção da velocidade, não seu módulo.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Um objeto de 1 kg é lançado verticalmente para cima com 10 m/s. Adotando g = 10 m/s², a altura máxima atingida, calculada pela conservação da energia, é de:",
    opcoes: [
      "2,5 m",
      "5 m",
      "10 m",
      "20 m",
      "50 m",
    ],
    correta: 1,
    explicacao:
      "A energia cinética inicial, 1 · 100/2 = 50 J, converte-se integralmente em potencial: 50 = 1 · 10 · h, logo h = 5 m. O mesmo resultado sai da equação de Torricelli. O método energético costuma ser mais rápido quando não se pede o tempo.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "A energia potencial gravitacional de um corpo depende de:",
    opcoes: [
      "massa, gravidade local e altura em relação a um referencial.",
      "apenas da velocidade do corpo.",
      "somente da massa do corpo.",
      "da força de atrito atuante.",
      "do tempo de permanência na altura.",
    ],
    correta: 0,
    explicacao:
      "A expressão Ep = m·g·h envolve as três grandezas. A escolha do nível de referência é arbitrária, mas precisa ser mantida ao longo de todo o problema. O que tem significado físico é a variação da energia potencial entre dois pontos.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "dificil",
    enunciado:
      "Uma mola de constante elástica 400 N/m é comprimida em 0,2 m e lança horizontalmente um bloco de 0,25 kg em superfície sem atrito. A velocidade do bloco ao deixar a mola é de:",
    opcoes: [
      "2 m/s",
      "4 m/s",
      "8 m/s",
      "16 m/s",
      "32 m/s",
    ],
    correta: 2,
    explicacao:
      "A energia elástica armazenada é k·x²/2 = 400 · 0,04/2 = 8 J. Sem atrito, ela se converte integralmente em cinética: 8 = 0,25 · v²/2, ou seja, 8 = 0,125·v². Isso dá v² = 64 e v = 8 m/s. O método energético evita ter de calcular a força variável exercida pela mola durante a expansão.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Sobre a conservação da energia mecânica, é correto afirmar que ela ocorre quando:",
    opcoes: [
      "atuam apenas forças conservativas, como o peso e a força elástica.",
      "há atrito significativo entre as superfícies.",
      "o corpo se move com velocidade constante.",
      "não há forças atuando sobre o corpo.",
      "a energia potencial é sempre maior que a cinética.",
    ],
    correta: 0,
    explicacao:
      "Forças conservativas realizam trabalho que independe da trajetória e podem devolver a energia armazenada. Atrito e resistência do ar são dissipativas e retiram energia mecânica do sistema. Sem elas, a soma de cinética e potencial permanece constante.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Um veículo de 1 000 kg trafega a 20 m/s. Sua energia cinética é de:",
    opcoes: [
      "200 000 J",
      "20 000 J",
      "100 000 J",
      "400 000 J",
      "20 J",
    ],
    correta: 0,
    explicacao:
      "Aplicando Ec = m·v²/2 = 1 000 · 400/2 = 200 000 J. Se a velocidade dobrasse para 40 m/s, a energia iria a 800 000 J — quatro vezes maior. Esse crescimento quadrático é o principal argumento físico para limites de velocidade.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Uma lâmpada de 60 W permanece acesa por 5 horas. A energia consumida, em quilowatt-hora, é de:",
    opcoes: [
      "0,3 kWh",
      "3 kWh",
      "12 kWh",
      "30 kWh",
      "300 kWh",
    ],
    correta: 0,
    explicacao:
      "A potência em quilowatts é 0,06 kW, e 0,06 · 5 = 0,3 kWh. Converter watts em quilowatts antes de multiplicar evita o erro mais comum. Ao longo de um mês, esse consumo somaria 9 kWh.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "dificil",
    enunciado:
      "Um corpo desce por um plano inclinado sem atrito, partindo do repouso de uma altura h. Sua velocidade ao chegar à base:",
    opcoes: [
      "depende do ângulo de inclinação do plano.",
      "depende da massa do corpo.",
      "é sempre igual a zero.",
      "depende apenas da altura h e da gravidade.",
      "depende do comprimento do plano.",
    ],
    correta: 3,
    explicacao:
      "Pela conservação da energia, v² = 2gh: apenas o desnível importa. Planos mais inclinados produzem maior aceleração, mas percurso menor, e os efeitos se compensam exatamente. A massa também não influencia, pois se cancela na equação.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Um motor eleva 200 kg de água a 15 m de altura em 50 s. Adotando g = 10 m/s², a potência útil desenvolvida é de:",
    opcoes: [
      "60 W",
      "3 000 W",
      "6 000 W",
      "600 W",
      "30 000 W",
    ],
    correta: 3,
    explicacao:
      "O trabalho é 200 · 10 · 15 = 30 000 J, e a potência é 30 000/50 = 600 W. Essa é a potência útil; a potência elétrica consumida pelo motor seria maior, por causa das perdas. A razão entre as duas é o rendimento do equipamento.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Uma força de atrito realiza trabalho sobre um corpo em movimento. Esse trabalho é sempre:",
    opcoes: [
      "positivo, aumentando a energia cinética.",
      "nulo, por ser perpendicular ao deslocamento.",
      "igual à energia potencial do corpo.",
      "negativo, reduzindo a energia mecânica.",
      "independente da distância percorrida.",
    ],
    correta: 3,
    explicacao:
      "O atrito cinético opõe-se sempre ao deslocamento, o que torna o cosseno do ângulo igual a −1 e o trabalho negativo. Por isso ele reduz a energia mecânica, convertendo-a em térmica. Seu valor depende diretamente da distância percorrida, ao contrário do trabalho do peso.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Em um sistema isolado, a energia total permanece constante, podendo apenas mudar de forma. Esse enunciado corresponde:",
    opcoes: [
      "ao princípio da conservação da energia.",
      "à lei da gravitação universal.",
      "ao princípio de Arquimedes.",
      "à primeira lei de Newton.",
      "à lei de Hooke.",
    ],
    correta: 0,
    explicacao:
      "O princípio da conservação da energia é um dos pilares da física e vale mesmo quando há atrito — nesse caso, a energia mecânica diminui, mas a térmica aumenta na mesma medida. É diferente da conservação da energia mecânica, que exige ausência de forças dissipativas.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Um corpo de 8 kg é elevado a 3 m de altura com velocidade constante. Adotando g = 10 m/s², o trabalho realizado pela força que o eleva é de:",
    opcoes: [
      "24 J",
      "80 J",
      "480 J",
      "240 J",
      "2 400 J",
    ],
    correta: 3,
    explicacao:
      "Com velocidade constante, a força aplicada iguala o peso: 80 N. O trabalho é 80 · 3 = 240 J, valor que corresponde exatamente ao ganho de energia potencial. O trabalho do peso, nesse mesmo trajeto, é −240 J, e a soma dos dois é zero.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "dificil",
    enunciado:
      "Um ciclista de 70 kg, com bicicleta de 10 kg, sobe uma rampa de 5 m de desnível em 40 s. Adotando g = 10 m/s², a potência média útil desenvolvida é de:",
    opcoes: [
      "50 W",
      "200 W",
      "400 W",
      "100 W",
      "4 000 W",
    ],
    correta: 3,
    explicacao:
      "A massa total é 80 kg e o trabalho contra a gravidade é 80 · 10 · 5 = 4 000 J. A potência é 4 000/40 = 100 W. Esse valor é compatível com o esforço sustentado de um ciclista amador em subida moderada.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Sobre o trabalho de uma força, é correto afirmar que ele é uma grandeza:",
    opcoes: [
      "vetorial, com direção e sentido definidos.",
      "vetorial, medida em newtons.",
      "escalar, medida em watts.",
      "escalar, medida em joules.",
      "adimensional, sem unidade associada.",
    ],
    correta: 3,
    explicacao:
      "Embora resulte de força e deslocamento, ambos vetoriais, o trabalho é escalar, obtido pelo produto escalar entre eles. Sua unidade é o joule, equivalente a newton vezes metro. Watt é unidade de potência, e não de trabalho.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Uma usina hidrelétrica converte energia potencial gravitacional da água em energia elétrica. A sequência de transformações envolvidas é:",
    opcoes: [
      "potencial gravitacional em cinética, e esta em elétrica.",
      "elétrica em potencial, e esta em térmica.",
      "térmica em cinética, e esta em potencial.",
      "elástica em potencial, e esta em cinética.",
      "nuclear em potencial, e esta em elétrica.",
    ],
    correta: 0,
    explicacao:
      "A água acumulada no reservatório tem energia potencial; ao cair, ganha energia cinética, que gira as turbinas e aciona os geradores. O rendimento global é alto, embora nunca total, por causa de perdas por atrito e aquecimento.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "A potência instantânea de uma força pode ser calculada pelo produto da força pela velocidade quando as duas são paralelas. Para uma força de 200 N e velocidade de 15 m/s, a potência é de:",
    opcoes: [
      "13,3 W",
      "215 W",
      "1 500 W",
      "3 000 W",
      "30 000 W",
    ],
    correta: 3,
    explicacao:
      "Multiplicando: 200 · 15 = 3 000 W, ou 3 kW. Essa expressão é útil quando a velocidade é constante, como em um veículo em velocidade de cruzeiro. Ela decorre diretamente da definição de potência como trabalho por unidade de tempo.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "dificil",
    enunciado:
      "Um corpo é lançado obliquamente e descreve trajetória parabólica sem resistência do ar. Sobre sua energia mecânica durante o voo, conclui-se que ela:",
    opcoes: [
      "aumenta na subida e diminui na descida.",
      "é máxima no ponto mais alto.",
      "é nula no ponto mais alto.",
      "diminui continuamente até o solo.",
      "permanece constante durante todo o trajeto.",
    ],
    correta: 4,
    explicacao:
      "Sem forças dissipativas, a soma de cinética e potencial não muda. No ponto mais alto a energia potencial é máxima e a cinética é mínima — mas não nula, porque a componente horizontal da velocidade permanece. A troca entre as parcelas é contínua.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Um trabalho de 800 J é realizado sobre um corpo inicialmente em repouso, de massa 4 kg, em superfície sem atrito. A velocidade final do corpo é de:",
    opcoes: [
      "10 m/s",
      "40 m/s",
      "200 m/s",
      "400 m/s",
      "20 m/s",
    ],
    correta: 4,
    explicacao:
      "Pelo teorema da energia cinética, 800 = 4 · v²/2 = 2v², logo v² = 400 e v = 20 m/s. Partindo do repouso, todo o trabalho converte-se em energia cinética. A ausência de atrito garante que nada seja dissipado.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Sobre a diferença entre energia e potência, é correto afirmar que:",
    opcoes: [
      "energia mede a rapidez da transferência e potência mede a quantidade.",
      "as duas grandezas têm a mesma unidade.",
      "potência é sempre maior que energia.",
      "energia só existe em sistemas em movimento.",
      "potência mede a rapidez com que a energia é transferida.",
    ],
    correta: 4,
    explicacao:
      "Energia é medida em joules e potência em watts, que correspondem a joule por segundo. Um aquecedor potente entrega muita energia em pouco tempo; um de baixa potência leva mais tempo para entregar a mesma quantidade. Confundir as duas grandezas é erro frequente em contas de luz.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Um corpo de 6 kg cai livremente de 5 m de altura. Adotando g = 10 m/s², a energia cinética com que ele atinge o solo é de:",
    opcoes: [
      "30 J",
      "60 J",
      "150 J",
      "300 J",
      "600 J",
    ],
    correta: 3,
    explicacao:
      "Toda a energia potencial inicial converte-se em cinética: 6 · 10 · 5 = 300 J. Não é necessário calcular a velocidade para responder. Se houvesse resistência do ar, a energia cinética final seria menor que esse valor.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "dificil",
    enunciado:
      "Um automóvel dobra sua velocidade de 15 m/s para 30 m/s. Em relação à distância necessária para frear até parar, mantidas as mesmas condições de pista, ela:",
    opcoes: [
      "permanece a mesma.",
      "dobra.",
      "reduz-se à metade.",
      "triplica.",
      "quadruplica.",
    ],
    correta: 4,
    explicacao:
      "A energia cinética a ser dissipada cresce com o quadrado da velocidade, e o trabalho do atrito é proporcional à distância. Assim, dobrar a velocidade exige quatro vezes mais espaço para parar. Esse é um dos argumentos centrais da educação para o trânsito.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Uma força de 100 N atua sobre um corpo que permanece em repouso. O trabalho realizado por essa força é de:",
    opcoes: [
      "100 J",
      "10 J",
      "1 000 J",
      "depende da massa do corpo",
      "zero",
    ],
    correta: 4,
    explicacao:
      "Sem deslocamento, não há trabalho, por maior que seja a força. Empurrar uma parede indefinidamente não realiza trabalho no sentido físico, ainda que exija esforço muscular. Trabalho exige, necessariamente, transferência de energia associada a um deslocamento.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Um sistema massa-mola oscila horizontalmente sem atrito. No instante em que a mola atinge a deformação máxima, a energia do sistema é:",
    opcoes: [
      "totalmente cinética.",
      "igualmente dividida entre cinética e potencial.",
      "nula.",
      "totalmente potencial gravitacional.",
      "totalmente potencial elástica.",
    ],
    correta: 4,
    explicacao:
      "Na deformação máxima o bloco para momentaneamente, zerando a energia cinética, e toda a energia fica armazenada na mola. Na posição de equilíbrio ocorre o oposto: energia totalmente cinética. A soma das duas permanece constante ao longo da oscilação.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Um elevador de 800 kg sobe 12 m em 15 s com velocidade constante. Adotando g = 10 m/s², a potência útil do motor é de:",
    opcoes: [
      "640 W",
      "1 600 W",
      "9 600 W",
      "96 000 W",
      "6 400 W",
    ],
    correta: 4,
    explicacao:
      "O trabalho é 800 · 10 · 12 = 96 000 J e a potência, 96 000/15 = 6 400 W. Em elevadores reais, contrapesos reduzem consideravelmente a potência necessária, porque parte do peso da cabine é equilibrada.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "A energia cinética de um corpo é diretamente proporcional:",
    opcoes: [
      "à massa e ao quadrado da velocidade.",
      "ao quadrado da massa e à velocidade.",
      "apenas à velocidade.",
      "à altura em relação ao solo.",
      "ao tempo de movimento.",
    ],
    correta: 0,
    explicacao:
      "Na expressão Ec = m·v²/2, a massa aparece na primeira potência e a velocidade ao quadrado. Dobrar a massa dobra a energia; dobrar a velocidade a quadruplica. Essa assimetria explica por que a velocidade é um fator mais crítico que o peso em colisões.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "dificil",
    enunciado:
      "Uma bola de 0,2 kg cai de 5 m e quica, retornando a 3,2 m de altura. Adotando g = 10 m/s², a energia dissipada na colisão com o solo foi de:",
    opcoes: [
      "1,8 J",
      "6,4 J",
      "10 J",
      "16 J",
      "3,6 J",
    ],
    correta: 4,
    explicacao:
      "A energia inicial é 0,2 · 10 · 5 = 10 J e a energia após o quique é 0,2 · 10 · 3,2 = 6,4 J. A diferença, 3,6 J, foi dissipada como calor, som e deformação. Colisões desse tipo são chamadas de parcialmente elásticas.",
  },
  {
    materia: "fisica",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Um motor realiza um trabalho de 6.000 J em um intervalo de tempo de 30 s. A potência média desenvolvida por esse motor é de:",
    opcoes: [
      "50 W",
      "100 W",
      "300 W",
      "600 W",
      "200 W",
    ],
    correta: 4,
    explicacao:
      "A potência média é a razão entre o trabalho realizado e o tempo gasto: P = W/t = 6000/30 = 200 W. Um erro comum é multiplicar em vez de dividir, o que resultaria em um valor muito maior e sem sentido físico.",
  },
];
