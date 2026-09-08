/* Questões autorais de Matemática — conteúdos que a classificação das provas
   reais deixou sem cobertura. Ver fisica.mjs para o formato. */

export const questoes = [
  // ========= Geometria espacial: prismas, cones e esferas ================
  {
    materia: "matematica",
    tema: "Geometria espacial: prismas, cones e esferas",
    dificuldade: "media",
    enunciado:
      "Uma caixa d'água em formato de cilindro circular reto tem 1,5 m de raio da base e 2 m de altura. Adotando π = 3, quantos litros de água ela comporta quando completamente cheia?",
    opcoes: ["4 500 L", "9 000 L", "13 500 L", "18 000 L", "27 000 L"],
    correta: 2,
    explicacao:
      "O volume do cilindro é V = π·r²·h = 3 × (1,5)² × 2 = 3 × 2,25 × 2 = 13,5 m³. A conversão é o passo que decide a questão: 1 m³ equivale a 1 000 L, então 13,5 m³ são 13 500 L. Quem responde 9 000 L calculou 3 × 1,5 × 2, esquecendo de elevar o raio ao quadrado. E 27 000 L sai de usar o diâmetro (3 m) no lugar do raio — um deslize comum, porque o enunciado de problemas assim costuma dar ora um, ora outro.",
  },
  {
    materia: "matematica",
    tema: "Geometria espacial: prismas, cones e esferas",
    dificuldade: "facil",
    enunciado:
      "Uma casquinha de sorvete tem a forma de um cone circular reto com 3 cm de raio da base e 10 cm de altura. Adotando π = 3, o volume interno da casquinha é de:",
    opcoes: ["30 cm³", "60 cm³", "90 cm³", "180 cm³", "270 cm³"],
    correta: 2,
    explicacao:
      "O volume do cone é um terço do volume do cilindro de mesma base e mesma altura: V = (1/3)·π·r²·h = (1/3) × 3 × 9 × 10 = 90 cm³. A alternativa 270 cm³ é justamente o volume do cilindro correspondente, ou seja, o resultado de quem esqueceu o fator 1/3. Já 30 cm³ aparece ao dividir por 9 em vez de por 3. Uma forma de conferir mentalmente: como o cone é 'um terço' do cilindro, a resposta certa precisa ser bem menor que 270 — mas não tão pequena quanto 30.",
  },
  {
    materia: "matematica",
    tema: "Geometria espacial: prismas, cones e esferas",
    dificuldade: "media",
    enunciado:
      "Um reservatório esférico usado em uma indústria tem raio interno de 6 dm. Adotando π = 3, a capacidade máxima desse reservatório, em litros, é de:",
    opcoes: ["216 L", "432 L", "648 L", "864 L", "1 296 L"],
    correta: 3,
    explicacao:
      "O volume da esfera é V = (4/3)·π·r³ = (4/3) × 3 × 6³ = 4 × 216 = 864 dm³. Como 1 dm³ é exatamente 1 litro, a capacidade é 864 L — por isso o enunciado deu o raio em decímetros, poupando conversão. O erro de 216 L vem de parar em r³ sem aplicar o (4/3)π. Já 432 L corresponde a usar (2/3) em vez de (4/3), e 1 296 L a multiplicar r³ por π sem o 4/3. Atenção ao cubo: elevar 6 ao cubo dá 216, não 36.",
  },
  {
    materia: "matematica",
    tema: "Geometria espacial: prismas, cones e esferas",
    dificuldade: "media",
    enunciado:
      "Uma embalagem cúbica de aresta a foi substituída por outra, também cúbica, cuja aresta é o dobro da original. Em relação à embalagem antiga, o volume da nova embalagem é:",
    opcoes: [
      "o dobro.",
      "o triplo.",
      "quatro vezes maior.",
      "seis vezes maior.",
      "oito vezes maior.",
    ],
    correta: 4,
    explicacao:
      "O volume do cubo é V = a³. Dobrando a aresta, o novo volume é (2a)³ = 8a³ — oito vezes o original. O que engana é a intuição linear: dobrar uma medida parece dobrar tudo, mas volume é uma grandeza de três dimensões, e cada uma delas dobrou. Vale guardar o padrão para toda ampliação proporcional de sólidos: se as medidas lineares são multiplicadas por k, as áreas ficam multiplicadas por k² e os volumes por k³. É por isso, por exemplo, que uma pizza grande com o dobro do diâmetro de uma pequena tem quatro vezes mais massa, e não duas.",
  },
];
