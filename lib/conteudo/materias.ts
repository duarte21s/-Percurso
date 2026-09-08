/* Gerado a partir do conteúdo autoral original (supabase/seed-data/conteudo.mjs).
   Tópicos e incidência histórica por matéria. Copy estática: não vai ao banco. */

import type { Materia, Objetivo } from "@/lib/tipos";
import { MATERIAS_OBJETIVO } from "./materias-objetivo";

export const MATERIAS: readonly Materia[] = [
  {
    "id": "matematica",
    "nome": "Matemática",
    "glifo": "∑",
    "area": "exatas",
    "resumo": "Da álgebra básica à geometria analítica",
    "aulas": 186,
    "objetivos": [
      "enem",
      "vestibular",
      "concurso",
      "militar",
      "escola",
      "graduacao"
    ],
    "topicos": [
      [
        "Funções: afim, quadrática e exponencial",
        82
      ],
      [
        "Logaritmos e suas propriedades",
        64
      ],
      [
        "Progressões aritméticas e geométricas",
        71
      ],
      [
        "Geometria plana: áreas e semelhança",
        78
      ],
      [
        "Geometria espacial: prismas, cones e esferas",
        55
      ],
      [
        "Trigonometria no triângulo e no ciclo",
        60
      ],
      [
        "Análise combinatória e probabilidade",
        48
      ],
      [
        "Estatística: média, mediana e desvio",
        74
      ],
      [
        "Matrizes, determinantes e sistemas lineares",
        41
      ],
      [
        "Geometria analítica: reta e circunferência",
        52
      ],
      [
        "Matemática financeira: juros e descontos",
        69
      ],
      [
        "Razão, proporção e regra de três",
        88
      ],
      [
        "Porcentagem e variação percentual",
        91
      ],
      [
        "Grandezas proporcionais e escalas",
        66
      ],
      [
        "Leitura de gráficos e tabelas",
        87
      ]
    ]
  },
  {
    "id": "portugues",
    "nome": "Português",
    "glifo": "¶",
    "area": "linguagens",
    "resumo": "Gramática, interpretação e redação nota mil",
    "aulas": 174,
    "objetivos": [
      "enem",
      "vestibular",
      "concurso",
      "escola",
      "graduacao"
    ],
    "topicos": [
      [
        "Interpretação e compreensão de texto",
        90
      ],
      [
        "Figuras de linguagem",
        76
      ],
      [
        "Sintaxe: período composto",
        54
      ],
      [
        "Concordância verbal e nominal",
        67
      ],
      [
        "Regência e crase",
        58
      ],
      [
        "Variação linguística e norma-padrão",
        72
      ],
      [
        "Gêneros textuais e tipologia",
        65
      ],
      [
        "Coesão e coerência",
        80
      ],
      [
        "Funções da linguagem",
        74
      ],
      [
        "Redação dissertativo-argumentativa",
        62
      ],
      [
        "Repertório sociocultural e proposta de intervenção",
        49
      ],
      [
        "Escolas literárias: do Barroco ao Modernismo",
        57
      ],
      [
        "Morfologia: classes de palavras",
        58
      ],
      [
        "Pontuação e seus efeitos de sentido",
        52
      ],
      [
        "Intertextualidade e paráfrase",
        63
      ]
    ]
  },
  {
    "id": "fisica",
    "nome": "Física",
    "glifo": "Δ",
    "area": "exatas",
    "resumo": "Mecânica, ondas, eletricidade e moderna",
    "aulas": 152,
    "objetivos": [
      "enem",
      "vestibular",
      "militar",
      "escola",
      "graduacao"
    ],
    "topicos": [
      [
        "Cinemática: MRU e MRUV",
        84
      ],
      [
        "Leis de Newton e suas aplicações",
        76
      ],
      [
        "Trabalho, energia e potência",
        70
      ],
      [
        "Quantidade de movimento e colisões",
        55
      ],
      [
        "Estática e hidrostática",
        61
      ],
      [
        "Termologia e calorimetria",
        66
      ],
      [
        "Termodinâmica e máquinas térmicas",
        47
      ],
      [
        "Óptica geométrica: espelhos e lentes",
        59
      ],
      [
        "Ondulatória e acústica",
        53
      ],
      [
        "Eletrostática e campo elétrico",
        50
      ],
      [
        "Circuitos elétricos e leis de Ohm",
        63
      ],
      [
        "Eletromagnetismo e indução",
        44
      ],
      [
        "Física moderna: efeito fotoelétrico",
        38
      ],
      [
        "Gravitação universal e leis de Kepler",
        38
      ],
      [
        "Energia, matriz elétrica e consumo",
        69
      ]
    ]
  },
  {
    "id": "quimica",
    "nome": "Química",
    "glifo": "⚗",
    "area": "natureza",
    "resumo": "Geral, físico-química e orgânica",
    "aulas": 148,
    "objetivos": [
      "enem",
      "vestibular",
      "militar",
      "escola"
    ],
    "topicos": [
      [
        "Atomística e tabela periódica",
        82
      ],
      [
        "Ligações químicas e geometria molecular",
        74
      ],
      [
        "Funções inorgânicas",
        68
      ],
      [
        "Reações químicas e balanceamento",
        71
      ],
      [
        "Estequiometria e cálculos",
        58
      ],
      [
        "Soluções e concentrações",
        62
      ],
      [
        "Termoquímica",
        54
      ],
      [
        "Cinética química",
        49
      ],
      [
        "Equilíbrio químico e pH",
        46
      ],
      [
        "Eletroquímica: pilhas e eletrólise",
        43
      ],
      [
        "Química orgânica: funções e nomenclatura",
        60
      ],
      [
        "Isomeria e reações orgânicas",
        41
      ],
      [
        "Química ambiental e sustentabilidade",
        77
      ],
      [
        "Gases e leis dos gases ideais",
        44
      ],
      [
        "Radioatividade e química nuclear",
        39
      ]
    ]
  },
  {
    "id": "biologia",
    "nome": "Biologia",
    "glifo": "❋",
    "area": "natureza",
    "resumo": "Célula, genética, evolução e ecologia",
    "aulas": 160,
    "objetivos": [
      "enem",
      "vestibular",
      "escola"
    ],
    "topicos": [
      [
        "Citologia: estrutura e organelas",
        80
      ],
      [
        "Metabolismo energético: respiração e fotossíntese",
        69
      ],
      [
        "Divisão celular: mitose e meiose",
        72
      ],
      [
        "Genética mendeliana",
        64
      ],
      [
        "Biotecnologia e engenharia genética",
        55
      ],
      [
        "Evolução e seleção natural",
        76
      ],
      [
        "Ecologia: cadeias e ciclos biogeoquímicos",
        83
      ],
      [
        "Problemas ambientais brasileiros",
        79
      ],
      [
        "Fisiologia humana: sistemas",
        66
      ],
      [
        "Imunologia e vacinas",
        61
      ],
      [
        "Botânica e reino vegetal",
        47
      ],
      [
        "Zoologia e classificação",
        52
      ],
      [
        "Genética: grupos sanguíneos e heredogramas",
        61
      ],
      [
        "Vírus, bactérias e doenças infecciosas",
        72
      ],
      [
        "Biomas brasileiros e biodiversidade",
        68
      ]
    ]
  },
  {
    "id": "historia",
    "nome": "História",
    "glifo": "⌛",
    "area": "humanas",
    "resumo": "Do mundo antigo ao Brasil contemporâneo",
    "aulas": 143,
    "objetivos": [
      "enem",
      "vestibular",
      "concurso",
      "escola"
    ],
    "topicos": [
      [
        "Brasil Colônia: economia e escravidão",
        74
      ],
      [
        "Independência e Primeiro Reinado",
        63
      ],
      [
        "Segundo Reinado e abolição",
        66
      ],
      [
        "República Velha e coronelismo",
        68
      ],
      [
        "Era Vargas",
        78
      ],
      [
        "Ditadura Militar no Brasil",
        81
      ],
      [
        "Redemocratização e Nova República",
        70
      ],
      [
        "Revolução Industrial",
        65
      ],
      [
        "Primeira e Segunda Guerra Mundial",
        77
      ],
      [
        "Guerra Fria e bipolaridade",
        72
      ],
      [
        "Revoluções: Francesa e Russa",
        59
      ],
      [
        "África e América pré-colonial",
        51
      ],
      [
        "Idade Média e feudalismo",
        43
      ],
      [
        "Movimentos sociais e Diretas Já",
        54
      ],
      [
        "Geografia: urbanização e êxodo rural",
        70
      ]
    ]
  },
  {
    "id": "filosofia",
    "nome": "Filosofia",
    "glifo": "◈",
    "area": "humanas",
    "resumo": "Ética, política e teoria do conhecimento",
    "aulas": 96,
    "objetivos": [
      "enem",
      "vestibular",
      "concurso",
      "escola"
    ],
    "topicos": [
      [
        "Filosofia antiga: Sócrates, Platão e Aristóteles",
        72
      ],
      [
        "Ética e moral",
        78
      ],
      [
        "Contratualismo: Hobbes, Locke e Rousseau",
        68
      ],
      [
        "Filosofia política e democracia",
        71
      ],
      [
        "Teoria do conhecimento: racionalismo x empirismo",
        57
      ],
      [
        "Kant e o imperativo categórico",
        52
      ],
      [
        "Escola de Frankfurt e indústria cultural",
        64
      ],
      [
        "Existencialismo: Sartre e Beauvoir",
        58
      ],
      [
        "Nietzsche e a crítica à moral",
        55
      ],
      [
        "Sociologia clássica: Marx, Durkheim e Weber",
        69
      ],
      [
        "Cidadania e direitos humanos",
        80
      ],
      [
        "Bioética e dilemas contemporâneos",
        61
      ],
      [
        "Estado, poder e Maquiavel",
        47
      ],
      [
        "Trabalho, alienação e capitalismo",
        66
      ],
      [
        "Movimentos sociais e identidade",
        59
      ]
    ]
  },
  {
    "id": "ingles",
    "nome": "Inglês",
    "glifo": "EN",
    "area": "linguagens",
    "resumo": "Leitura, vocabulário e estratégias de prova",
    "aulas": 88,
    "objetivos": [
      "enem",
      "vestibular",
      "escola"
    ],
    "topicos": [
      [
        "Reading strategies: skimming e scanning",
        86
      ],
      [
        "Cognatos e falsos cognatos",
        81
      ],
      [
        "Verb tenses: present, past e future",
        70
      ],
      [
        "Modal verbs",
        62
      ],
      [
        "Conditionals",
        54
      ],
      [
        "Passive voice",
        57
      ],
      [
        "Connectives e linking words",
        66
      ],
      [
        "Phrasal verbs mais cobrados",
        59
      ],
      [
        "Vocabulário por campo semântico",
        73
      ],
      [
        "Interpretação de charges e tirinhas",
        76
      ],
      [
        "Textos jornalísticos e científicos",
        64
      ],
      [
        "Reported speech",
        48
      ],
      [
        "Word formation: prefixos e sufixos",
        46
      ],
      [
        "Inferência e ideia principal",
        78
      ],
      [
        "Pronomes e referência textual",
        55
      ]
    ]
  },
  {
    "id": "artes",
    "nome": "Artes",
    "glifo": "◐",
    "area": "linguagens",
    "resumo": "Movimentos, arte brasileira e cultura visual",
    "aulas": 72,
    "objetivos": [
      "enem",
      "vestibular",
      "escola"
    ],
    "topicos": [
      [
        "Renascimento e Barroco",
        68
      ],
      [
        "Barroco e Aleijadinho no Brasil",
        71
      ],
      [
        "Impressionismo e pós-impressionismo",
        63
      ],
      [
        "Vanguardas europeias",
        66
      ],
      [
        "Semana de Arte Moderna de 1922",
        82
      ],
      [
        "Modernismo brasileiro: Tarsila e Portinari",
        77
      ],
      [
        "Arte contemporânea e instalação",
        55
      ],
      [
        "Arte indígena e afro-brasileira",
        74
      ],
      [
        "Fotografia e cinema como linguagem",
        60
      ],
      [
        "Música popular brasileira",
        69
      ],
      [
        "Teatro: do grego ao contemporâneo",
        52
      ],
      [
        "Patrimônio cultural e tombamento",
        58
      ],
      [
        "Arte grega e romana",
        41
      ],
      [
        "Dança e corpo como expressão",
        37
      ],
      [
        "Design, publicidade e cultura visual",
        49
      ]
    ]
  }
] as const;

/* As nove acima são o currículo do ensino médio, e por muito tempo foram tudo
   o que o site tinha — inclusive para quem estava estudando para concurso ou
   para o ciclo básico da graduação. `materias-objetivo.ts` traz as que existem
   por causa de um objetivo específico. */

export const TODAS_AS_MATERIAS = [
  ...MATERIAS,
  ...MATERIAS_OBJETIVO,
] as const;

export const MATERIAS_POR_ID = new Map(
  TODAS_AS_MATERIAS.map((m) => [m.id, m])
);

/**
 * As matérias que fazem sentido para um objetivo.
 *
 * A ordem segue TODAS_AS_MATERIAS, então as de ensino médio vêm primeiro e as
 * específicas do objetivo aparecem depois — quem marca "Concurso público" vê
 * Português e Matemática antes de Raciocínio lógico, que é a ordem em que um
 * edital costuma listar.
 *
 * Quem consome: o seletor de matérias do Cronograma.
 */
export function materiasDoObjetivo(objetivo: Objetivo) {
  return TODAS_AS_MATERIAS.filter((m) => m.objetivos.includes(objetivo));
}
