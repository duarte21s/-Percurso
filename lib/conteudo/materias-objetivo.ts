import type { Materia } from "@/lib/tipos";

/* =========================================================================
   Matérias que existem por causa de um objetivo, e não do currículo do
   ensino médio.

   As nove de `materias.ts` cobrem o ENEM, o vestibular e a escola. Elas não
   cobrem o que uma banca de concurso, o ITA ou o ciclo básico de uma
   graduação pedem — e enquanto isso não existiu, quem marcava "Concurso
   público" no cronograma recebia um plano de Artes e Filosofia.

   Duas decisões deliberadas neste arquivo:

   1. `incidencia` é `null` em todos os assuntos. Nas nove matérias antigas
      esse número vira uma barra rotulada "Incidência histórica: N%", uma
      afirmação sobre quantas vezes o assunto caiu de fato. Não há
      levantamento desses dados para concurso, militar, cálculo ou
      fundamental — então o campo fica vazio e a interface omite a barra, em
      vez de desenhar um número inventado. Se um dia alguém levantar a
      incidência real, é só preencher.

   2. Não há matéria de direito, legislação ou jurisprudência, embora caiam em
      quase todo edital. Lei muda, e questão de direito escrita com base
      desatualizada não é conteúdo ruim: é conteúdo que ensina errado a quem
      vai prestar concurso. Enquanto não houver como manter isso conferido
      contra a norma vigente, o FAQ declara essa falta e aponta o acervo
      público do Cebraspe.

   `aulas` é 0 em todas: a coluna vem do site estático antigo e não é exibida
   em lugar nenhum (ver o comentário em components/secoes/Numeros.tsx).
   ========================================================================= */

export const MATERIAS_OBJETIVO: readonly Materia[] = [
  /* ---------- concursos públicos ---------- */
  {
    id: "raciocinio-logico",
    nome: "Raciocínio lógico",
    glifo: "⊢",
    area: "exatas",
    resumo: "Lógica proposicional, sequências e problemas de banca",
    aulas: 0,
    objetivos: ["concurso"],
    topicos: [
      ["Proposições e conectivos lógicos", null],
      ["Tabelas-verdade e equivalências", null],
      ["Negação de proposições e leis de De Morgan", null],
      ["Argumentos válidos e falácias", null],
      ["Quantificadores: todo, algum, nenhum", null],
      ["Sequências lógicas numéricas", null],
      ["Sequências de letras e de figuras", null],
      ["Diagramas lógicos e conjuntos", null],
      ["Problemas de associação lógica", null],
      ["Verdades e mentiras", null],
      ["Análise combinatória aplicada", null],
      ["Probabilidade em provas de concurso", null],
      ["Porcentagem e regra de três", null],
      ["Razão, proporção e divisão proporcional", null],
      ["Problemas de calendário e de relógio", null],
    ],
  },
  {
    id: "informatica",
    nome: "Informática básica",
    glifo: "▤",
    area: "exatas",
    resumo: "Sistemas, pacote de escritório, redes e segurança",
    aulas: 0,
    objetivos: ["concurso"],
    topicos: [
      ["Hardware: componentes e periféricos", null],
      ["Sistemas operacionais: Windows", null],
      ["Sistemas operacionais: Linux", null],
      ["Armazenamento e sistemas de arquivos", null],
      ["Editor de texto: Word e Writer", null],
      ["Planilhas: fórmulas e funções", null],
      ["Planilhas: referências, filtros e gráficos", null],
      ["Apresentações: PowerPoint e Impress", null],
      ["Redes de computadores e protocolos", null],
      ["Internet: navegadores e mecanismos de busca", null],
      ["Correio eletrônico", null],
      ["Segurança da informação", null],
      ["Malware, backup e criptografia", null],
      ["Computação em nuvem", null],
      ["Banco de dados: noções", null],
    ],
  },
  {
    id: "portugues-banca",
    nome: "Português de banca",
    glifo: "¶",
    area: "linguagens",
    resumo: "Gramática normativa no recorte que a prova objetiva cobra",
    aulas: 0,
    objetivos: ["concurso"],
    topicos: [
      ["Crase: casos obrigatórios e proibidos", null],
      ["Concordância verbal", null],
      ["Concordância nominal", null],
      ["Regência verbal e nominal", null],
      ["Colocação pronominal", null],
      ["Pontuação: vírgula e ponto e vírgula", null],
      ["Ortografia e acentuação", null],
      ["Classes de palavras", null],
      ["Análise sintática: termos da oração", null],
      ["Período composto por coordenação", null],
      ["Período composto por subordinação", null],
      ["Interpretação de texto técnico", null],
      ["Coesão e coerência textual", null],
      ["Semântica: sinonímia e ambiguidade", null],
      ["Redação oficial e correspondência", null],
    ],
  },

  /* ---------- carreiras militares ---------- */
  {
    id: "exatas-militar",
    nome: "Exatas nível militar",
    glifo: "✦",
    area: "exatas",
    resumo: "Matemática, física e química acima do patamar do ENEM",
    aulas: 0,
    objetivos: ["militar"],
    topicos: [
      ["Números complexos e forma polar", null],
      ["Polinômios e relações de Girard", null],
      ["Sistemas lineares, matrizes e determinantes", null],
      ["Geometria analítica: cônicas", null],
      ["Geometria espacial: sólidos e seções", null],
      ["Trigonometria: identidades e equações", null],
      ["Análise combinatória avançada", null],
      ["Logaritmos, inequações e funções compostas", null],
      ["Dinâmica com corpos vinculados", null],
      ["Trabalho, energia e potência", null],
      ["Eletrodinâmica: circuitos complexos", null],
      ["Eletromagnetismo e indução", null],
      ["Termodinâmica: ciclos e máquinas térmicas", null],
      ["Estequiometria com reagente limitante", null],
      ["Equilíbrio químico, pH e solubilidade", null],
    ],
  },

  /* ---------- já na faculdade ---------- */
  {
    id: "calculo",
    nome: "Cálculo I",
    glifo: "∫",
    area: "exatas",
    resumo: "Limites, derivadas e integrais do ciclo básico",
    aulas: 0,
    objetivos: ["graduacao"],
    topicos: [
      ["Funções e revisão de pré-cálculo", null],
      ["Limites: noção intuitiva e cálculo", null],
      ["Limites laterais, infinitos e no infinito", null],
      ["Continuidade e teorema do valor intermediário", null],
      ["Derivada: definição e interpretação geométrica", null],
      ["Regras de derivação", null],
      ["Regra da cadeia", null],
      ["Derivação implícita e taxas relacionadas", null],
      ["Máximos, mínimos e otimização", null],
      ["Esboço de gráficos e concavidade", null],
      ["Teorema do valor médio", null],
      ["Integral indefinida e primitivas", null],
      ["Integral definida e cálculo de áreas", null],
      ["Integração por substituição", null],
      ["Integração por partes", null],
    ],
  },
  {
    id: "estatistica",
    nome: "Estatística",
    glifo: "◨",
    area: "exatas",
    resumo: "Descritiva, probabilidade e inferência",
    aulas: 0,
    /* Serve aos dois objetivos: é matéria de ciclo básico e cai como
       "estatística básica" em boa parte dos editais. */
    objetivos: ["graduacao", "concurso"],
    topicos: [
      ["População, amostra e tipos de variável", null],
      ["Tabelas de frequência", null],
      ["Gráficos estatísticos e sua leitura", null],
      ["Média, mediana e moda", null],
      ["Variância e desvio padrão", null],
      ["Medidas de posição: quartis e percentis", null],
      ["Probabilidade: conceitos e axiomas", null],
      ["Probabilidade condicional e independência", null],
      ["Distribuição binomial", null],
      ["Distribuição normal", null],
      ["Técnicas de amostragem", null],
      ["Estimação e intervalo de confiança", null],
      ["Testes de hipótese", null],
      ["Correlação e regressão linear", null],
      ["Erros do tipo I e do tipo II", null],
    ],
  },

  /* ---------- reforço escolar: ensino fundamental ---------- */
  {
    id: "matematica-fund",
    nome: "Matemática · 6º ao 9º",
    glifo: "∷",
    area: "exatas",
    resumo: "A matemática do ensino fundamental II",
    aulas: 0,
    objetivos: ["escola"],
    topicos: [
      ["Operações com números naturais", null],
      ["Números inteiros e a reta numérica", null],
      ["Frações: operações e comparação", null],
      ["Números decimais e dízimas", null],
      ["Potenciação e radiciação", null],
      ["Múltiplos, divisores, MMC e MDC", null],
      ["Razão, proporção e escala", null],
      ["Regra de três simples e composta", null],
      ["Porcentagem e juros simples", null],
      ["Expressões algébricas e monômios", null],
      ["Equação do 1º grau", null],
      ["Sistemas de duas equações", null],
      ["Ângulos e retas paralelas", null],
      ["Triângulos e teorema de Pitágoras", null],
      ["Área e perímetro de figuras planas", null],
    ],
  },
  {
    id: "portugues-fund",
    nome: "Português · 6º ao 9º",
    glifo: "❡",
    area: "linguagens",
    resumo: "Gramática e leitura do ensino fundamental II",
    aulas: 0,
    objetivos: ["escola"],
    topicos: [
      ["Substantivo e adjetivo", null],
      ["Verbo: tempos e modos", null],
      ["Pronomes", null],
      ["Advérbio, preposição e conjunção", null],
      ["Sujeito e predicado", null],
      ["Ortografia: uso das letras", null],
      ["Acentuação gráfica", null],
      ["Pontuação", null],
      ["Concordância verbal e nominal", null],
      ["Gêneros textuais: narrativa", null],
      ["Gêneros textuais: texto informativo", null],
      ["Interpretação de texto", null],
      ["Sinônimos, antônimos e vocabulário", null],
      ["Figuras de linguagem", null],
      ["Produção de texto: o parágrafo", null],
    ],
  },
] as const;
