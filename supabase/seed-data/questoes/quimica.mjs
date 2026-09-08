/* Questões autorais de Química — conteúdos que a classificação das provas
   reais deixou sem cobertura. Ver fisica.mjs para o formato. */

export const questoes = [
  // ============== Reações químicas e balanceamento =======================
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "media",
    enunciado:
      "O gás de cozinha contém propano (C₃H₈), que sofre combustão completa produzindo gás carbônico e água. Após o correto balanceamento da equação C₃H₈ + O₂ → CO₂ + H₂O com os menores coeficientes inteiros possíveis, a soma de todos os coeficientes estequiométricos é:",
    opcoes: ["9", "11", "13", "15", "17"],
    correta: 2,
    explicacao:
      "Balanceando: os 3 carbonos exigem 3 CO₂; os 8 hidrogênios exigem 4 H₂O. Contando o oxigênio do lado direito temos 3×2 + 4×1 = 10 átomos, ou seja, 5 moléculas de O₂. A equação fica 1 C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O, e a soma é 1 + 5 + 3 + 4 = 13. O erro clássico é esquecer o coeficiente 1 do propano e responder 12, ou contar o oxigênio como se fosse atômico e chegar a 17. Vale lembrar que balancear é aplicar a lei de Lavoisier: o número de átomos de cada elemento tem de ser igual dos dois lados.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "facil",
    enunciado:
      "O alumínio reage com o oxigênio do ar formando uma camada de óxido de alumínio que protege o metal da corrosão. Balanceando a equação Al + O₂ → Al₂O₃ com os menores coeficientes inteiros, a soma dos coeficientes é:",
    opcoes: ["7", "9", "11", "12", "14"],
    correta: 1,
    explicacao:
      "O produto Al₂O₃ tem 3 oxigênios, número ímpar, e o O₂ só fornece oxigênios aos pares — por isso é preciso dobrar o produto para 2 Al₂O₃, que tem 6 oxigênios e exige 3 O₂. Com 2 Al₂O₃ há 4 alumínios, logo 4 Al à esquerda. A equação fica 4 Al + 3 O₂ → 2 Al₂O₃, somando 4 + 3 + 2 = 9. Quem tenta 2 Al + O₂ → Al₂O₃ para no impasse do oxigênio: sobra um átomo sem par. É justamente essa a dica prática — quando o produto tem quantidade ímpar de oxigênio, comece dobrando-o.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "media",
    enunciado:
      "Um antiácido à base de hidróxido de magnésio atua no estômago segundo a equação Mg(OH)₂ + 2 HCl → MgCl₂ + 2 H₂O. Essa reação é classificada como:",
    opcoes: [
      "reação de síntese ou adição.",
      "reação de dupla troca, do tipo neutralização.",
      "reação de análise ou decomposição.",
      "reação de simples troca, ou deslocamento.",
      "reação de oxirredução, com transferência de elétrons.",
    ],
    correta: 1,
    explicacao:
      "Duas substâncias compostas trocam seus componentes entre si e produzem duas novas substâncias compostas — a definição de dupla troca. Como os reagentes são uma base e um ácido, e os produtos são sal e água, trata-se especificamente de uma neutralização. Não é síntese, que teria um único produto, nem decomposição, que partiria de um único reagente. Não é simples troca, que exigiria uma substância simples reagindo com uma composta. E não é oxirredução: conferindo os números de oxidação, magnésio, hidrogênio, oxigênio e cloro mantêm os mesmos valores antes e depois, então não houve transferência de elétrons.",
  },

  // ================= Gases e leis dos gases ideais ========================
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "facil",
    enunciado:
      "Certa massa de gás ideal ocupa 6,0 L sob pressão de 2,0 atm. Mantendo-se a temperatura constante, o gás é comprimido até ocupar 3,0 L. A nova pressão exercida pelo gás é:",
    opcoes: ["1,0 atm", "2,0 atm", "3,0 atm", "4,0 atm", "6,0 atm"],
    correta: 3,
    explicacao:
      "Temperatura constante caracteriza uma transformação isotérmica, regida pela lei de Boyle: P₁·V₁ = P₂·V₂. Substituindo, 2,0 × 6,0 = P₂ × 3,0, logo P₂ = 4,0 atm. Repare no sentido físico: reduzir o volume pela metade dobra a pressão, porque as moléculas passam a colidir com as paredes com o dobro da frequência. A resposta 1,0 atm inverte a relação, tratando pressão e volume como diretamente proporcionais — o que valeria para volume e temperatura, não para volume e pressão.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "media",
    enunciado:
      "Um balão contendo gás ideal ocupa 3,0 L a 27 °C, sob pressão constante. Ao ser aquecido até 127 °C, mantida a mesma pressão, o volume do balão passa a ser:",
    opcoes: ["1,5 L", "2,25 L", "4,0 L", "9,0 L", "14,1 L"],
    correta: 2,
    explicacao:
      "Pressão constante é transformação isobárica, e vale V₁/T₁ = V₂/T₂ — mas só com a temperatura em kelvin. Convertendo: 27 °C = 300 K e 127 °C = 400 K. Então 3,0/300 = V₂/400, o que dá V₂ = 4,0 L. O erro mais frequente é usar os graus Celsius direto e calcular 3,0 × 127/27 ≈ 14,1 L, uma das alternativas justamente para pegar quem pula a conversão. A escala Kelvin é obrigatória aqui porque as leis dos gases são proporcionalidades, e proporção exige uma escala com zero absoluto.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "media",
    enunciado:
      "Considere dois recipientes idênticos e selados, mantidos à mesma temperatura. Um contém gás hélio e o outro, gás oxigênio, ambos com o mesmo número de mols e comportamento ideal. Sobre esses gases, é correto afirmar que:",
    opcoes: [
      "o oxigênio exerce maior pressão, por ter maior massa molar.",
      "os dois exercem a mesma pressão, pois pressão depende de mols, volume e temperatura, e não da identidade do gás.",
      "o hélio exerce maior pressão, por ter moléculas menores e mais velozes.",
      "a pressão depende exclusivamente da massa total de gás em cada recipiente.",
      "não é possível comparar sem conhecer a massa molar de cada gás.",
    ],
    correta: 1,
    explicacao:
      "Pela equação de Clapeyron, P = nRT/V. Como n, R, T e V são iguais nos dois recipientes, a pressão é a mesma — a identidade química do gás não entra na equação. É exatamente esse o significado do modelo de gás ideal: despreza-se o volume das moléculas e as interações entre elas, e o que resta é a contagem de partículas. É verdade que as moléculas de hélio se movem mais rápido, por serem mais leves, mas elas também batem com menos quantidade de movimento em cada colisão; os dois efeitos se compensam exatamente, e o resultado é a mesma pressão.",
  },
];
