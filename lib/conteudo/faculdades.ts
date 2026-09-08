/* =========================================================================
   Base de cursos concorridos.

   LEIA ANTES DE EDITAR — a honestidade do número importa mais que a tabela
   parecer completa.

   `notaReferencia` é um ÍNDICE COMPARATIVO de 0 a 1000, construído para
   ordenar a lista por concorrência relativa. Ele NÃO é a nota de corte do
   processo seletivo e não deve ser apresentado como tal.

   `notaOriginal` fica `null` nos registros abaixo, de propósito — escrever
   aqui uma estimativa com cara de precisão ("812,45") transformaria um chute
   em dado de edital aos olhos de quem lê, e quem lê está decidindo carreira.
   NÃO preencha `notaOriginal` nem troque `procedencia` à mão num registro
   abaixo: quem faz isso é o overlay ao final deste arquivo, e só para pares
   (sigla, curso) que casaram de fato com uma fonte real — ver a seção
   "notas reais, por overlay" mais abaixo.

   `escalaOriginal` descreve a escala real de cada processo. Isso é estrutura
   do vestibular, não estimativa, e por isso pode ser afirmado.

   Escalas não são intercambiáveis: 780 no SiSU (média ENEM 0–1000) não é
   comparável a 78 na 2ª fase da FUVEST nem ao escore do ITA. O índice existe
   justamente porque as escalas originais não se comparam entre si.
   ========================================================================= */

import type {
  AreaCurso,
  Concorrencia,
  Faculdade,
  Procedencia,
  Regiao,
  TipoIngresso,
} from "@/lib/tipos";
import sisu2025 from "./sisu-2025.json";

/* ---------- rótulos ---------- */

export const AREAS: { valor: AreaCurso; rotulo: string }[] = [
  { valor: "saude", rotulo: "Saúde" },
  { valor: "tecnologia", rotulo: "Tecnologia" },
  { valor: "engenharia", rotulo: "Engenharia" },
  { valor: "humanas", rotulo: "Humanas" },
  { valor: "negocios", rotulo: "Negócios" },
  { valor: "exatas", rotulo: "Ciências Exatas" },
  { valor: "design", rotulo: "Design e Criatividade" },
];

export const NOME_DA_AREA: Record<AreaCurso, string> = {
  saude: "Saúde",
  tecnologia: "Tecnologia",
  engenharia: "Engenharia",
  humanas: "Humanas",
  negocios: "Negócios",
  exatas: "Ciências Exatas",
  design: "Design e Criatividade",
};

export const NOME_DO_INGRESSO: Record<TipoIngresso, string> = {
  sisu: "SiSU / ENEM",
  fuvest: "FUVEST",
  "vestibular-proprio": "Vestibular próprio",
  "concurso-admissao": "Concurso de admissão",
  pas: "PAS / seriado",
  "enem-usp": "ENEM-USP",
};

/** Rótulo da coluna Ingresso, derivado das vias — nunca digitado à mão. */
export function rotuloIngresso(formas: readonly TipoIngresso[]): string {
  return formas.map((f) => NOME_DO_INGRESSO[f]).join(" · ");
}

export const REGIOES: { valor: Regiao; rotulo: string }[] = [
  { valor: "sudeste", rotulo: "Sudeste" },
  { valor: "sul", rotulo: "Sul" },
  { valor: "nordeste", rotulo: "Nordeste" },
  { valor: "norte", rotulo: "Norte" },
  { valor: "centro-oeste", rotulo: "Centro-Oeste" },
];

/* ---------- classificação ---------- */

export const FAIXAS: {
  faixa: Concorrencia;
  rotulo: string;
  minimo: number;
}[] = [
  { faixa: "extrema", rotulo: "Extremamente concorrido", minimo: 900 },
  { faixa: "muito-alta", rotulo: "Muito concorrido", minimo: 800 },
  { faixa: "alta", rotulo: "Concorrido", minimo: 700 },
  { faixa: "moderada", rotulo: "Moderadamente concorrido", minimo: 600 },
  { faixa: "menor", rotulo: "Menor concorrência relativa", minimo: 0 },
];

/** Deriva a faixa a partir do índice. Fonte única da regra de badge. */
export function classificaConcorrencia(notaReferencia: number): Concorrencia {
  return (
    FAIXAS.find((f) => notaReferencia >= f.minimo)?.faixa ?? "menor"
  );
}

export function rotuloConcorrencia(faixa: Concorrencia): string {
  return FAIXAS.find((f) => f.faixa === faixa)?.rotulo ?? "";
}

/** Rótulo curto do badge de procedência, em minúsculas — vai ao lado do
 *  número na tabela e no painel de detalhe. Fonte única para os dois. */
export function rotuloProcedencia(p: Procedencia): string {
  switch (p) {
    case "oficial":
      return "oficial";
    case "coletada":
      return "coletado";
    default:
      return "estimado";
  }
}

/** Frase completa, para o tooltip e o rótulo maior do painel de detalhe —
 *  onde "estimado" sozinho não basta e o texto integral evita alguém tratar
 *  um número coletado como se fosse publicado em edital. */
export function fraseProcedencia(p: Procedencia): string {
  switch (p) {
    case "oficial":
      return "Publicado oficialmente pela instituição ou banca";
    case "coletada":
      return "Nota real de um acervo público, coletada por scraping — não é edital oficial";
    default:
      return "Índice comparativo, não é nota oficial do processo seletivo";
  }
}

/* ---------- escalas por processo ----------
   Texto descritivo da escala real de cada tipo de ingresso. Fica aqui, e não
   repetido em cada registro, para não divergir com o tempo. */

export const ESCALA: Record<TipoIngresso, string> = {
  sisu: "Média ponderada das notas do ENEM, de 0 a 1000, com pesos definidos por curso.",
  fuvest:
    "Duas fases: a 1ª eliminatória por acertos na prova objetiva, a 2ª com peso maior e escala própria da FUVEST.",
  "vestibular-proprio":
    "Escala definida pela própria banca da instituição, variável entre cursos e edições.",
  "concurso-admissao":
    "Escore próprio do concurso, com prova discursiva, exames físicos e avaliação médica eliminatórios.",
  pas: "Programa seriado avaliado ao longo das três séries do ensino médio, com escala própria da instituição.",
  "enem-usp":
    "Vagas da USP preenchidas pela nota do ENEM, em escala de 0 a 1000.",
};

const OBS_PADRAO =
  "Índice comparativo construído a partir da concorrência historicamente conhecida do curso. Não é a nota de corte oficial: consulte o edital da instituição.";

/** Açúcar para não repetir os campos fixos em ~160 registros. */
function r(
  sigla: string,
  nome: string,
  uf: string,
  regiao: Regiao,
  curso: string,
  area: AreaCurso,
  formasIngresso: readonly TipoIngresso[],
  notaReferencia: number
): Faculdade {
  return {
    sigla,
    nome,
    uf,
    regiao,
    curso,
    area,
    formasIngresso,
    notaReferencia,
    notaOriginal: null,
    // A escala descrita é a da via principal (a primeira da lista); o painel
    // de detalhe lista todas as vias aceitas.
    escalaOriginal: ESCALA[formasIngresso[0]],
    anoReferencia: 2025,
    modalidade: "Ampla concorrência",
    procedencia: "estimada",
    observacao: OBS_PADRAO,
  };
}


/* ---------- notas reais, por overlay ----------

   `lib/conteudo/sisu-<ano>.json` é gerado por `scripts/importar-sisu.mjs`, a
   partir de github.com/maiakanegae/sisu-data (MIT). Ele contém só os pares
   (sigla, curso) que casaram com um registro abaixo cujo `formasIngresso`
   inclui "sisu" — não o acervo inteiro, que tem milhares de pares
   irrelevantes para esta tabela.

   `aplicaNotasReais` roda uma vez, no carregamento do módulo, e substitui
   `notaReferencia`/`notaOriginal`/`procedencia`/`observacao` SÓ nos registros
   que casaram. Os que não casaram — instituição de vestibular próprio, ou
   nome de curso que diverge o bastante para não bater — continuam exatamente
   como o autor escreveu, com `procedencia: "estimada"`.

   A nota importada não vira "oficial": o README da fonte diz, sobre os
   próprios dados, que "não possuem caráter oficial". Por isso o valor é
   "coletada" — real, mas de scraping, não de edital publicado. Ver o tipo
   `Procedencia` em lib/tipos.ts para a distinção completa.

   `normalizaSigla`/`normalizaCurso` aqui precisam ficar IDÊNTICAS às mesmas
   funções em scripts/importar-sisu.mjs — são o que decide se uma chave bate.
   Mudou uma, muda a outra. */

interface NotaSisu {
  nota: number;
  turno: string;
  campus: string;
  curso_sisu: string;
}
interface AcervoSisu {
  ano: number;
  fonte: string;
  coletado_em: string;
  aviso: string;
  notas: Record<string, NotaSisu>;
}

function normalizaSigla(s: string): string {
  return s.toUpperCase().replace(/[^A-Z0-9]/g, "");
}
function normalizaCurso(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toUpperCase()
    .replace(/[^A-Z ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
function chaveSisu(sigla: string, curso: string): string {
  return `${normalizaSigla(sigla)}|${normalizaCurso(curso)}`;
}

/* Anos disponíveis, do mais recente para o mais antigo. Quando um novo ano
   for importado, o arquivo entra aqui — o mais recente da lista vence quando
   o mesmo curso aparecer em mais de um. */
const ACERVOS_SISU: readonly AcervoSisu[] = [sisu2025 as AcervoSisu];

function aplicaNotasReais(lista: readonly Faculdade[]): readonly Faculdade[] {
  return lista.map((f) => {
    if (!f.formasIngresso.includes("sisu")) return f;

    const chave = chaveSisu(f.sigla, f.curso);
    const acervo = ACERVOS_SISU.find((a) => chave in a.notas);
    if (!acervo) return f;

    const dado = acervo.notas[chave];
    const notaFormatada = dado.nota.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return {
      ...f,
      notaReferencia: dado.nota,
      notaOriginal: notaFormatada,
      procedencia: "coletada" as Procedencia,
      anoReferencia: acervo.ano,
      observacao: `Nota de corte real de ampla concorrência no SiSU ${acervo.ano}, turno ${dado.turno.toLowerCase()}. ${acervo.aviso}`,
    };
  });
}

const FACULDADES_BASE: Faculdade[] = [
  /* ---------- USP ---------- */
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Medicina", "saude", ["fuvest"], 975),
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Direito", "humanas", ["fuvest"], 880),
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Engenharia de Computação", "engenharia", ["fuvest"], 900),
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Ciência da Computação", "tecnologia", ["fuvest"], 890),
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Engenharia Civil", "engenharia", ["fuvest"], 845),
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Engenharia Mecânica", "engenharia", ["fuvest"], 850),
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Engenharia Elétrica", "engenharia", ["fuvest"], 848),
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Odontologia", "saude", ["fuvest"], 830),
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Psicologia", "saude", ["fuvest"], 838),
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Arquitetura e Urbanismo", "design", ["fuvest"], 842),
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Relações Internacionais", "humanas", ["fuvest"], 855),
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Economia", "negocios", ["fuvest"], 840),
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Administração", "negocios", ["fuvest"], 835),
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Medicina Veterinária", "saude", ["fuvest"], 820),
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Farmácia", "saude", ["fuvest"], 790),
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Estatística", "exatas", ["fuvest"], 760),
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Física", "exatas", ["fuvest"], 745),
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Medicina", "saude", ["enem-usp"], 960),

  /* ---------- UNICAMP ---------- */
  r("UNICAMP", "Universidade Estadual de Campinas", "SP", "sudeste", "Medicina", "saude", ["vestibular-proprio"], 970),
  r("UNICAMP", "Universidade Estadual de Campinas", "SP", "sudeste", "Ciência da Computação", "tecnologia", ["vestibular-proprio"], 885),
  r("UNICAMP", "Universidade Estadual de Campinas", "SP", "sudeste", "Engenharia de Computação", "engenharia", ["vestibular-proprio"], 880),
  r("UNICAMP", "Universidade Estadual de Campinas", "SP", "sudeste", "Direito", "humanas", ["vestibular-proprio"], 860),
  r("UNICAMP", "Universidade Estadual de Campinas", "SP", "sudeste", "Engenharia Elétrica", "engenharia", ["vestibular-proprio"], 835),
  r("UNICAMP", "Universidade Estadual de Campinas", "SP", "sudeste", "Engenharia Mecânica", "engenharia", ["vestibular-proprio"], 830),
  r("UNICAMP", "Universidade Estadual de Campinas", "SP", "sudeste", "Arquitetura e Urbanismo", "design", ["vestibular-proprio"], 825),
  r("UNICAMP", "Universidade Estadual de Campinas", "SP", "sudeste", "Economia", "negocios", ["vestibular-proprio"], 815),
  r("UNICAMP", "Universidade Estadual de Campinas", "SP", "sudeste", "Odontologia", "saude", ["vestibular-proprio"], 805),
  r("UNICAMP", "Universidade Estadual de Campinas", "SP", "sudeste", "Farmácia", "saude", ["vestibular-proprio"], 775),

  /* ---------- UNESP ---------- */
  r("UNESP", "Universidade Estadual Paulista", "SP", "sudeste", "Medicina", "saude", ["vestibular-proprio"], 955),
  r("UNESP", "Universidade Estadual Paulista", "SP", "sudeste", "Arquitetura e Urbanismo", "design", ["vestibular-proprio"], 800),
  r("UNESP", "Universidade Estadual Paulista", "SP", "sudeste", "Medicina Veterinária", "saude", ["vestibular-proprio"], 810),
  r("UNESP", "Universidade Estadual Paulista", "SP", "sudeste", "Engenharia Civil", "engenharia", ["vestibular-proprio"], 790),
  r("UNESP", "Universidade Estadual Paulista", "SP", "sudeste", "Direito", "humanas", ["vestibular-proprio"], 805),
  r("UNESP", "Universidade Estadual Paulista", "SP", "sudeste", "Odontologia", "saude", ["vestibular-proprio"], 780),

  /* ---------- UNIFESP ---------- */
  r("UNIFESP", "Universidade Federal de São Paulo", "SP", "sudeste", "Medicina", "saude", ["sisu", "vestibular-proprio"], 965),
  r("UNIFESP", "Universidade Federal de São Paulo", "SP", "sudeste", "Enfermagem", "saude", ["sisu", "vestibular-proprio"], 760),
  r("UNIFESP", "Universidade Federal de São Paulo", "SP", "sudeste", "Ciência da Computação", "tecnologia", ["sisu", "vestibular-proprio"], 800),

  /* ---------- ITA e IME ---------- */
  r("ITA", "Instituto Tecnológico de Aeronáutica", "SP", "sudeste", "Engenharia Aeronáutica", "engenharia", ["vestibular-proprio"], 985),
  r("ITA", "Instituto Tecnológico de Aeronáutica", "SP", "sudeste", "Engenharia de Computação", "engenharia", ["vestibular-proprio"], 975),
  r("ITA", "Instituto Tecnológico de Aeronáutica", "SP", "sudeste", "Engenharia Mecânica", "engenharia", ["vestibular-proprio"], 965),
  r("ITA", "Instituto Tecnológico de Aeronáutica", "SP", "sudeste", "Engenharia Eletrônica", "engenharia", ["vestibular-proprio"], 970),
  r("IME", "Instituto Militar de Engenharia", "RJ", "sudeste", "Engenharia de Computação", "engenharia", ["concurso-admissao"], 970),
  r("IME", "Instituto Militar de Engenharia", "RJ", "sudeste", "Engenharia Mecânica", "engenharia", ["concurso-admissao"], 955),
  r("IME", "Instituto Militar de Engenharia", "RJ", "sudeste", "Engenharia Elétrica", "engenharia", ["concurso-admissao"], 958),
  r("IME", "Instituto Militar de Engenharia", "RJ", "sudeste", "Engenharia Civil", "engenharia", ["concurso-admissao"], 950),

  /* ---------- UFRJ ---------- */
  r("UFRJ", "Universidade Federal do Rio de Janeiro", "RJ", "sudeste", "Medicina", "saude", ["sisu"], 950),
  r("UFRJ", "Universidade Federal do Rio de Janeiro", "RJ", "sudeste", "Direito", "humanas", ["sisu"], 820),
  r("UFRJ", "Universidade Federal do Rio de Janeiro", "RJ", "sudeste", "Engenharia Civil", "engenharia", ["sisu"], 800),
  r("UFRJ", "Universidade Federal do Rio de Janeiro", "RJ", "sudeste", "Ciência da Computação", "tecnologia", ["sisu"], 830),
  r("UFRJ", "Universidade Federal do Rio de Janeiro", "RJ", "sudeste", "Engenharia de Computação", "engenharia", ["sisu"], 825),
  r("UFRJ", "Universidade Federal do Rio de Janeiro", "RJ", "sudeste", "Arquitetura e Urbanismo", "design", ["sisu"], 790),
  r("UFRJ", "Universidade Federal do Rio de Janeiro", "RJ", "sudeste", "Psicologia", "saude", ["sisu"], 785),
  r("UFRJ", "Universidade Federal do Rio de Janeiro", "RJ", "sudeste", "Relações Internacionais", "humanas", ["sisu"], 810),

  /* ---------- UERJ ---------- */
  r("UERJ", "Universidade do Estado do Rio de Janeiro", "RJ", "sudeste", "Medicina", "saude", ["vestibular-proprio"], 945),
  r("UERJ", "Universidade do Estado do Rio de Janeiro", "RJ", "sudeste", "Direito", "humanas", ["vestibular-proprio"], 800),
  r("UERJ", "Universidade do Estado do Rio de Janeiro", "RJ", "sudeste", "Engenharia Civil", "engenharia", ["vestibular-proprio"], 760),

  /* ---------- PUC-Rio ---------- */
  r("PUC-Rio", "Pontifícia Universidade Católica do Rio de Janeiro", "RJ", "sudeste", "Direito", "humanas", ["vestibular-proprio"], 800),
  r("PUC-Rio", "Pontifícia Universidade Católica do Rio de Janeiro", "RJ", "sudeste", "Ciência da Computação", "tecnologia", ["vestibular-proprio"], 810),
  r("PUC-Rio", "Pontifícia Universidade Católica do Rio de Janeiro", "RJ", "sudeste", "Engenharia de Computação", "engenharia", ["vestibular-proprio"], 805),
  r("PUC-Rio", "Pontifícia Universidade Católica do Rio de Janeiro", "RJ", "sudeste", "Relações Internacionais", "humanas", ["vestibular-proprio"], 795),
  r("PUC-Rio", "Pontifícia Universidade Católica do Rio de Janeiro", "RJ", "sudeste", "Design", "design", ["vestibular-proprio"], 750),
  r("PUC-Rio", "Pontifícia Universidade Católica do Rio de Janeiro", "RJ", "sudeste", "Economia", "negocios", ["vestibular-proprio"], 780),

  /* ---------- UFMG ---------- */
  r("UFMG", "Universidade Federal de Minas Gerais", "MG", "sudeste", "Medicina", "saude", ["sisu"], 950),
  r("UFMG", "Universidade Federal de Minas Gerais", "MG", "sudeste", "Direito", "humanas", ["sisu"], 825),
  r("UFMG", "Universidade Federal de Minas Gerais", "MG", "sudeste", "Ciência da Computação", "tecnologia", ["sisu"], 835),
  r("UFMG", "Universidade Federal de Minas Gerais", "MG", "sudeste", "Psicologia", "saude", ["sisu"], 780),
  r("UFMG", "Universidade Federal de Minas Gerais", "MG", "sudeste", "Engenharia Civil", "engenharia", ["sisu"], 795),
  r("UFMG", "Universidade Federal de Minas Gerais", "MG", "sudeste", "Engenharia Elétrica", "engenharia", ["sisu"], 800),
  r("UFMG", "Universidade Federal de Minas Gerais", "MG", "sudeste", "Odontologia", "saude", ["sisu"], 790),
  r("UFMG", "Universidade Federal de Minas Gerais", "MG", "sudeste", "Arquitetura e Urbanismo", "design", ["sisu"], 775),
  r("UFMG", "Universidade Federal de Minas Gerais", "MG", "sudeste", "Medicina Veterinária", "saude", ["sisu"], 765),

  /* ---------- UFSCar, UFABC, UFV, UFES, UFJF ---------- */
  r("UFSCar", "Universidade Federal de São Carlos", "SP", "sudeste", "Ciência da Computação", "tecnologia", ["sisu"], 795),
  r("UFSCar", "Universidade Federal de São Carlos", "SP", "sudeste", "Medicina", "saude", ["sisu"], 940),
  r("UFSCar", "Universidade Federal de São Carlos", "SP", "sudeste", "Engenharia de Produção", "engenharia", ["sisu"], 760),
  r("UFABC", "Universidade Federal do ABC", "SP", "sudeste", "Ciência da Computação", "tecnologia", ["sisu"], 780),
  r("UFABC", "Universidade Federal do ABC", "SP", "sudeste", "Ciência e Tecnologia", "exatas", ["sisu"], 720),
  r("UFABC", "Universidade Federal do ABC", "SP", "sudeste", "Engenharia de Informação", "engenharia", ["sisu"], 745),
  r("UFV", "Universidade Federal de Viçosa", "MG", "sudeste", "Agronomia", "exatas", ["sisu"], 700),
  r("UFV", "Universidade Federal de Viçosa", "MG", "sudeste", "Medicina Veterinária", "saude", ["sisu"], 745),
  r("UFES", "Universidade Federal do Espírito Santo", "ES", "sudeste", "Medicina", "saude", ["sisu"], 930),
  r("UFES", "Universidade Federal do Espírito Santo", "ES", "sudeste", "Direito", "humanas", ["sisu"], 770),
  r("UFJF", "Universidade Federal de Juiz de Fora", "MG", "sudeste", "Enfermagem", "saude", ["pas", "sisu"], 700),
  r("UFJF", "Universidade Federal de Juiz de Fora", "MG", "sudeste", "Medicina", "saude", ["pas", "sisu"], 925),

  /* ---------- FGV, Insper, Mackenzie ---------- */
  r("FGV", "Fundação Getulio Vargas", "SP", "sudeste", "Administração", "negocios", ["vestibular-proprio"], 860),
  r("FGV", "Fundação Getulio Vargas", "SP", "sudeste", "Direito", "humanas", ["vestibular-proprio"], 845),
  r("FGV", "Fundação Getulio Vargas", "SP", "sudeste", "Economia", "negocios", ["vestibular-proprio"], 850),
  r("FGV", "Fundação Getulio Vargas", "SP", "sudeste", "Ciência de Dados", "tecnologia", ["vestibular-proprio"], 840),
  r("FGV", "Fundação Getulio Vargas", "RJ", "sudeste", "Relações Internacionais", "humanas", ["vestibular-proprio"], 830),
  r("Insper", "Insper Instituto de Ensino e Pesquisa", "SP", "sudeste", "Administração", "negocios", ["vestibular-proprio"], 830),
  r("Insper", "Insper Instituto de Ensino e Pesquisa", "SP", "sudeste", "Economia", "negocios", ["vestibular-proprio"], 825),
  r("Insper", "Insper Instituto de Ensino e Pesquisa", "SP", "sudeste", "Ciência da Computação", "tecnologia", ["vestibular-proprio"], 820),
  r("Insper", "Insper Instituto de Ensino e Pesquisa", "SP", "sudeste", "Engenharia Mecatrônica", "engenharia", ["vestibular-proprio"], 800),
  r("Insper", "Insper Instituto de Ensino e Pesquisa", "SP", "sudeste", "Direito", "humanas", ["vestibular-proprio"], 805),
  r("Mackenzie", "Universidade Presbiteriana Mackenzie", "SP", "sudeste", "Direito", "humanas", ["vestibular-proprio"], 740),
  r("Mackenzie", "Universidade Presbiteriana Mackenzie", "SP", "sudeste", "Arquitetura e Urbanismo", "design", ["vestibular-proprio"], 730),
  r("Mackenzie", "Universidade Presbiteriana Mackenzie", "SP", "sudeste", "Ciência da Computação", "tecnologia", ["vestibular-proprio"], 725),
  r("Mackenzie", "Universidade Presbiteriana Mackenzie", "SP", "sudeste", "Engenharia Civil", "engenharia", ["vestibular-proprio"], 715),
  r("Mackenzie", "Universidade Presbiteriana Mackenzie", "SP", "sudeste", "Psicologia", "saude", ["vestibular-proprio"], 720),

  /* ---------- UFRGS e Sul ---------- */
  r("UFRGS", "Universidade Federal do Rio Grande do Sul", "RS", "sul", "Medicina", "saude", ["sisu", "vestibular-proprio"], 945),
  r("UFRGS", "Universidade Federal do Rio Grande do Sul", "RS", "sul", "Engenharia de Produção", "engenharia", ["sisu", "vestibular-proprio"], 770),
  r("UFRGS", "Universidade Federal do Rio Grande do Sul", "RS", "sul", "Direito", "humanas", ["sisu", "vestibular-proprio"], 800),
  r("UFRGS", "Universidade Federal do Rio Grande do Sul", "RS", "sul", "Ciência da Computação", "tecnologia", ["sisu", "vestibular-proprio"], 820),
  r("UFRGS", "Universidade Federal do Rio Grande do Sul", "RS", "sul", "Arquitetura e Urbanismo", "design", ["sisu", "vestibular-proprio"], 775),
  r("UFRGS", "Universidade Federal do Rio Grande do Sul", "RS", "sul", "Odontologia", "saude", ["sisu", "vestibular-proprio"], 780),
  r("UFSC", "Universidade Federal de Santa Catarina", "SC", "sul", "Medicina", "saude", ["vestibular-proprio", "sisu"], 940),
  r("UFSC", "Universidade Federal de Santa Catarina", "SC", "sul", "Ciências Contábeis", "negocios", ["vestibular-proprio", "sisu"], 660),
  r("UFSC", "Universidade Federal de Santa Catarina", "SC", "sul", "Ciência da Computação", "tecnologia", ["vestibular-proprio", "sisu"], 805),
  r("UFSC", "Universidade Federal de Santa Catarina", "SC", "sul", "Engenharia Mecânica", "engenharia", ["vestibular-proprio", "sisu"], 770),
  r("UFSC", "Universidade Federal de Santa Catarina", "SC", "sul", "Direito", "humanas", ["vestibular-proprio", "sisu"], 790),
  r("UFPR", "Universidade Federal do Paraná", "PR", "sul", "Medicina", "saude", ["vestibular-proprio"], 935),
  r("UFPR", "Universidade Federal do Paraná", "PR", "sul", "Direito", "humanas", ["vestibular-proprio"], 785),
  r("UFPR", "Universidade Federal do Paraná", "PR", "sul", "Engenharia Elétrica", "engenharia", ["vestibular-proprio"], 755),
  r("UFPR", "Universidade Federal do Paraná", "PR", "sul", "Odontologia", "saude", ["vestibular-proprio"], 765),
  r("UEL", "Universidade Estadual de Londrina", "PR", "sul", "Medicina", "saude", ["vestibular-proprio"], 925),
  r("UEL", "Universidade Estadual de Londrina", "PR", "sul", "Direito", "humanas", ["vestibular-proprio"], 740),
  r("UFPel", "Universidade Federal de Pelotas", "RS", "sul", "Odontologia", "saude", ["sisu"], 730),
  r("UFPel", "Universidade Federal de Pelotas", "RS", "sul", "Medicina", "saude", ["sisu"], 915),

  /* ---------- Centro-Oeste ---------- */
  r("UnB", "Universidade de Brasília", "DF", "centro-oeste", "Medicina", "saude", ["pas", "sisu"], 945),
  r("UnB", "Universidade de Brasília", "DF", "centro-oeste", "Relações Internacionais", "humanas", ["pas", "sisu"], 830),
  r("UnB", "Universidade de Brasília", "DF", "centro-oeste", "Engenharia de Software", "tecnologia", ["pas", "sisu"], 800),
  r("UnB", "Universidade de Brasília", "DF", "centro-oeste", "Direito", "humanas", ["pas", "sisu"], 820),
  r("UnB", "Universidade de Brasília", "DF", "centro-oeste", "Ciência da Computação", "tecnologia", ["pas", "sisu"], 810),
  r("UnB", "Universidade de Brasília", "DF", "centro-oeste", "Arquitetura e Urbanismo", "design", ["pas", "sisu"], 780),
  r("UFG", "Universidade Federal de Goiás", "GO", "centro-oeste", "Medicina", "saude", ["sisu"], 935),
  r("UFG", "Universidade Federal de Goiás", "GO", "centro-oeste", "Direito", "humanas", ["sisu"], 755),
  r("UFG", "Universidade Federal de Goiás", "GO", "centro-oeste", "Medicina Veterinária", "saude", ["sisu"], 720),
  r("UFMS", "Universidade Federal de Mato Grosso do Sul", "MS", "centro-oeste", "Direito", "humanas", ["sisu"], 730),
  r("UFMS", "Universidade Federal de Mato Grosso do Sul", "MS", "centro-oeste", "Medicina", "saude", ["sisu"], 920),
  r("UFMT", "Universidade Federal de Mato Grosso", "MT", "centro-oeste", "Medicina", "saude", ["sisu"], 915),

  /* ---------- Nordeste ---------- */
  r("UFPE", "Universidade Federal de Pernambuco", "PE", "nordeste", "Medicina", "saude", ["sisu"], 940),
  r("UFPE", "Universidade Federal de Pernambuco", "PE", "nordeste", "Direito", "humanas", ["sisu"], 790),
  r("UFPE", "Universidade Federal de Pernambuco", "PE", "nordeste", "Ciência da Computação", "tecnologia", ["sisu"], 800),
  r("UFPE", "Universidade Federal de Pernambuco", "PE", "nordeste", "Engenharia Civil", "engenharia", ["sisu"], 765),
  r("UFBA", "Universidade Federal da Bahia", "BA", "nordeste", "Medicina", "saude", ["sisu"], 930),
  r("UFBA", "Universidade Federal da Bahia", "BA", "nordeste", "Arquitetura e Urbanismo", "design", ["sisu"], 740),
  r("UFBA", "Universidade Federal da Bahia", "BA", "nordeste", "Direito", "humanas", ["sisu"], 775),
  r("UFBA", "Universidade Federal da Bahia", "BA", "nordeste", "Ciência da Computação", "tecnologia", ["sisu"], 770),
  r("UFC", "Universidade Federal do Ceará", "CE", "nordeste", "Medicina", "saude", ["sisu"], 935),
  r("UFC", "Universidade Federal do Ceará", "CE", "nordeste", "Engenharia de Computação", "engenharia", ["sisu"], 750),
  r("UFC", "Universidade Federal do Ceará", "CE", "nordeste", "Direito", "humanas", ["sisu"], 770),
  r("UFRN", "Universidade Federal do Rio Grande do Norte", "RN", "nordeste", "Medicina", "saude", ["sisu"], 925),
  r("UFRN", "Universidade Federal do Rio Grande do Norte", "RN", "nordeste", "Ciência da Computação", "tecnologia", ["sisu"], 760),
  r("UFPB", "Universidade Federal da Paraíba", "PB", "nordeste", "Odontologia", "saude", ["sisu"], 740),
  r("UFPB", "Universidade Federal da Paraíba", "PB", "nordeste", "Medicina", "saude", ["sisu"], 920),
  r("UFMA", "Universidade Federal do Maranhão", "MA", "nordeste", "Medicina", "saude", ["sisu"], 915),
  r("UFS", "Universidade Federal de Sergipe", "SE", "nordeste", "Medicina", "saude", ["sisu"], 910),
  r("UFAL", "Universidade Federal de Alagoas", "AL", "nordeste", "Medicina", "saude", ["sisu"], 910),
  r("UFPI", "Universidade Federal do Piauí", "PI", "nordeste", "Medicina", "saude", ["sisu"], 905),

  /* ---------- Norte ---------- */
  r("UFPA", "Universidade Federal do Pará", "PA", "norte", "Medicina", "saude", ["sisu"], 915),
  r("UFPA", "Universidade Federal do Pará", "PA", "norte", "Direito", "humanas", ["sisu"], 740),
  r("UFAM", "Universidade Federal do Amazonas", "AM", "norte", "Medicina", "saude", ["sisu", "pas"], 910),
  r("UFAM", "Universidade Federal do Amazonas", "AM", "norte", "Engenharia Elétrica", "engenharia", ["sisu", "pas"], 690),
  r("UFT", "Universidade Federal do Tocantins", "TO", "norte", "Direito", "humanas", ["sisu"], 710),
  r("UFT", "Universidade Federal do Tocantins", "TO", "norte", "Medicina", "saude", ["sisu"], 900),
  r("UNIR", "Universidade Federal de Rondônia", "RO", "norte", "Medicina", "saude", ["sisu"], 895),
  r("UFAC", "Universidade Federal do Acre", "AC", "norte", "Medicina", "saude", ["sisu"], 890),
  r("UFRR", "Universidade Federal de Roraima", "RR", "norte", "Medicina", "saude", ["sisu"], 885),

  /* =====================================================================
     A partir daqui os registros são agrupados por ÁREA, não por instituição.

     Motivo: a primeira leva cobria bem as instituições, mas cada área ficou
     dominada por um curso só — Saúde era 63% Medicina, Humanas 82% Direito,
     Tecnologia 89% Ciência da Computação. Filtrar por área devolvia páginas
     inteiras do mesmo curso. Esta leva entra para dar variedade dentro de
     cada filtro.
     ===================================================================== */

  /* ---------- SAÚDE além de Medicina ---------- */
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Fisioterapia", "saude", ["fuvest"], 785),
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Nutrição", "saude", ["fuvest"], 760),
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Enfermagem", "saude", ["fuvest"], 740),
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Fonoaudiologia", "saude", ["fuvest"], 690),
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Terapia Ocupacional", "saude", ["fuvest"], 670),
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Educação Física", "saude", ["fuvest"], 665),
  r("UNIFESP", "Universidade Federal de São Paulo", "SP", "sudeste", "Biomedicina", "saude", ["sisu"], 790),
  r("UNIFESP", "Universidade Federal de São Paulo", "SP", "sudeste", "Fisioterapia", "saude", ["sisu"], 755),
  r("UNIFESP", "Universidade Federal de São Paulo", "SP", "sudeste", "Nutrição", "saude", ["sisu"], 730),
  r("UNIFESP", "Universidade Federal de São Paulo", "SP", "sudeste", "Psicologia", "saude", ["sisu"], 800),
  r("UNIFESP", "Universidade Federal de São Paulo", "SP", "sudeste", "Fonoaudiologia", "saude", ["sisu"], 675),
  r("UNICAMP", "Universidade Estadual de Campinas", "SP", "sudeste", "Enfermagem", "saude", ["vestibular-proprio"], 735),
  r("UNICAMP", "Universidade Estadual de Campinas", "SP", "sudeste", "Fonoaudiologia", "saude", ["vestibular-proprio"], 685),
  r("UNICAMP", "Universidade Estadual de Campinas", "SP", "sudeste", "Psicologia", "saude", ["vestibular-proprio"], 815),
  r("UNESP", "Universidade Estadual Paulista", "SP", "sudeste", "Enfermagem", "saude", ["vestibular-proprio"], 720),
  r("UNESP", "Universidade Estadual Paulista", "SP", "sudeste", "Nutrição", "saude", ["vestibular-proprio"], 715),
  r("UNESP", "Universidade Estadual Paulista", "SP", "sudeste", "Fisioterapia", "saude", ["vestibular-proprio"], 745),
  r("UNESP", "Universidade Estadual Paulista", "SP", "sudeste", "Psicologia", "saude", ["vestibular-proprio"], 790),
  r("UFRJ", "Universidade Federal do Rio de Janeiro", "RJ", "sudeste", "Odontologia", "saude", ["sisu"], 775),
  r("UFRJ", "Universidade Federal do Rio de Janeiro", "RJ", "sudeste", "Enfermagem", "saude", ["sisu"], 715),
  r("UFRJ", "Universidade Federal do Rio de Janeiro", "RJ", "sudeste", "Nutrição", "saude", ["sisu"], 705),
  r("UFRJ", "Universidade Federal do Rio de Janeiro", "RJ", "sudeste", "Farmácia", "saude", ["sisu"], 730),
  r("UFRJ", "Universidade Federal do Rio de Janeiro", "RJ", "sudeste", "Fisioterapia", "saude", ["sisu"], 740),
  r("UFF", "Universidade Federal Fluminense", "RJ", "sudeste", "Medicina", "saude", ["sisu"], 920),
  r("UFF", "Universidade Federal Fluminense", "RJ", "sudeste", "Biomedicina", "saude", ["sisu"], 745),
  r("UFF", "Universidade Federal Fluminense", "RJ", "sudeste", "Enfermagem", "saude", ["sisu"], 690),
  r("UFF", "Universidade Federal Fluminense", "RJ", "sudeste", "Odontologia", "saude", ["sisu"], 750),
  r("UFMG", "Universidade Federal de Minas Gerais", "MG", "sudeste", "Enfermagem", "saude", ["sisu"], 700),
  r("UFMG", "Universidade Federal de Minas Gerais", "MG", "sudeste", "Fisioterapia", "saude", ["sisu"], 735),
  r("UFMG", "Universidade Federal de Minas Gerais", "MG", "sudeste", "Farmácia", "saude", ["sisu"], 725),
  r("UFMG", "Universidade Federal de Minas Gerais", "MG", "sudeste", "Nutrição", "saude", ["sisu"], 695),
  r("UFMG", "Universidade Federal de Minas Gerais", "MG", "sudeste", "Terapia Ocupacional", "saude", ["sisu"], 640),
  r("UFRGS", "Universidade Federal do Rio Grande do Sul", "RS", "sul", "Enfermagem", "saude", ["sisu", "vestibular-proprio"], 695),
  r("UFRGS", "Universidade Federal do Rio Grande do Sul", "RS", "sul", "Biomedicina", "saude", ["sisu", "vestibular-proprio"], 750),
  r("UFRGS", "Universidade Federal do Rio Grande do Sul", "RS", "sul", "Farmácia", "saude", ["sisu", "vestibular-proprio"], 720),
  r("UFRGS", "Universidade Federal do Rio Grande do Sul", "RS", "sul", "Psicologia", "saude", ["sisu", "vestibular-proprio"], 790),
  r("UFSC", "Universidade Federal de Santa Catarina", "SC", "sul", "Odontologia", "saude", ["vestibular-proprio", "sisu"], 745),
  r("UFSC", "Universidade Federal de Santa Catarina", "SC", "sul", "Enfermagem", "saude", ["vestibular-proprio", "sisu"], 685),
  r("UFSC", "Universidade Federal de Santa Catarina", "SC", "sul", "Psicologia", "saude", ["vestibular-proprio", "sisu"], 780),
  r("UFPR", "Universidade Federal do Paraná", "PR", "sul", "Enfermagem", "saude", ["vestibular-proprio"], 680),
  r("UFPR", "Universidade Federal do Paraná", "PR", "sul", "Farmácia", "saude", ["vestibular-proprio"], 710),
  r("UFPR", "Universidade Federal do Paraná", "PR", "sul", "Nutrição", "saude", ["vestibular-proprio"], 670),
  r("UFSM", "Universidade Federal de Santa Maria", "RS", "sul", "Medicina", "saude", ["sisu"], 910),
  r("UFSM", "Universidade Federal de Santa Maria", "RS", "sul", "Medicina Veterinária", "saude", ["sisu"], 725),
  r("UFSM", "Universidade Federal de Santa Maria", "RS", "sul", "Odontologia", "saude", ["sisu"], 720),
  r("UnB", "Universidade de Brasília", "DF", "centro-oeste", "Enfermagem", "saude", ["pas", "sisu"], 700),
  r("UnB", "Universidade de Brasília", "DF", "centro-oeste", "Odontologia", "saude", ["pas", "sisu"], 760),
  r("UnB", "Universidade de Brasília", "DF", "centro-oeste", "Farmácia", "saude", ["pas", "sisu"], 715),
  r("UnB", "Universidade de Brasília", "DF", "centro-oeste", "Psicologia", "saude", ["pas", "sisu"], 795),
  r("UFG", "Universidade Federal de Goiás", "GO", "centro-oeste", "Enfermagem", "saude", ["sisu"], 675),
  r("UFG", "Universidade Federal de Goiás", "GO", "centro-oeste", "Odontologia", "saude", ["sisu"], 730),
  r("UFG", "Universidade Federal de Goiás", "GO", "centro-oeste", "Nutrição", "saude", ["sisu"], 665),
  r("UFPE", "Universidade Federal de Pernambuco", "PE", "nordeste", "Odontologia", "saude", ["sisu"], 740),
  r("UFPE", "Universidade Federal de Pernambuco", "PE", "nordeste", "Enfermagem", "saude", ["sisu"], 685),
  r("UFPE", "Universidade Federal de Pernambuco", "PE", "nordeste", "Fisioterapia", "saude", ["sisu"], 715),
  r("UFPE", "Universidade Federal de Pernambuco", "PE", "nordeste", "Psicologia", "saude", ["sisu"], 765),
  r("UFBA", "Universidade Federal da Bahia", "BA", "nordeste", "Enfermagem", "saude", ["sisu"], 670),
  r("UFBA", "Universidade Federal da Bahia", "BA", "nordeste", "Odontologia", "saude", ["sisu"], 725),
  r("UFBA", "Universidade Federal da Bahia", "BA", "nordeste", "Nutrição", "saude", ["sisu"], 660),
  r("UFBA", "Universidade Federal da Bahia", "BA", "nordeste", "Psicologia", "saude", ["sisu"], 755),
  r("UFC", "Universidade Federal do Ceará", "CE", "nordeste", "Odontologia", "saude", ["sisu"], 720),
  r("UFC", "Universidade Federal do Ceará", "CE", "nordeste", "Enfermagem", "saude", ["sisu"], 665),
  r("UFC", "Universidade Federal do Ceará", "CE", "nordeste", "Farmácia", "saude", ["sisu"], 700),
  r("UFRN", "Universidade Federal do Rio Grande do Norte", "RN", "nordeste", "Enfermagem", "saude", ["sisu"], 660),
  r("UFRN", "Universidade Federal do Rio Grande do Norte", "RN", "nordeste", "Fisioterapia", "saude", ["sisu"], 695),
  r("UFPB", "Universidade Federal da Paraíba", "PB", "nordeste", "Enfermagem", "saude", ["sisu"], 655),
  r("UFPB", "Universidade Federal da Paraíba", "PB", "nordeste", "Fonoaudiologia", "saude", ["sisu"], 615),
  r("UFPA", "Universidade Federal do Pará", "PA", "norte", "Enfermagem", "saude", ["sisu"], 650),
  r("UFPA", "Universidade Federal do Pará", "PA", "norte", "Odontologia", "saude", ["sisu"], 700),
  r("UFAM", "Universidade Federal do Amazonas", "AM", "norte", "Enfermagem", "saude", ["sisu", "pas"], 645),
  r("UFAM", "Universidade Federal do Amazonas", "AM", "norte", "Odontologia", "saude", ["sisu", "pas"], 695),

  /* ---------- HUMANAS além de Direito ---------- */
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Jornalismo", "humanas", ["fuvest"], 780),
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "História", "humanas", ["fuvest"], 700),
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Ciências Sociais", "humanas", ["fuvest"], 690),
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Letras", "humanas", ["fuvest"], 650),
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Filosofia", "humanas", ["fuvest"], 645),
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Pedagogia", "humanas", ["fuvest"], 640),
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Geografia", "humanas", ["fuvest"], 655),
  r("UNICAMP", "Universidade Estadual de Campinas", "SP", "sudeste", "Ciências Sociais", "humanas", ["vestibular-proprio"], 685),
  r("UNICAMP", "Universidade Estadual de Campinas", "SP", "sudeste", "História", "humanas", ["vestibular-proprio"], 695),
  r("UNICAMP", "Universidade Estadual de Campinas", "SP", "sudeste", "Letras", "humanas", ["vestibular-proprio"], 640),
  r("UNESP", "Universidade Estadual Paulista", "SP", "sudeste", "Jornalismo", "humanas", ["vestibular-proprio"], 735),
  r("UNESP", "Universidade Estadual Paulista", "SP", "sudeste", "Pedagogia", "humanas", ["vestibular-proprio"], 615),
  r("UFRJ", "Universidade Federal do Rio de Janeiro", "RJ", "sudeste", "Jornalismo", "humanas", ["sisu"], 755),
  r("UFRJ", "Universidade Federal do Rio de Janeiro", "RJ", "sudeste", "História", "humanas", ["sisu"], 670),
  r("UFRJ", "Universidade Federal do Rio de Janeiro", "RJ", "sudeste", "Letras", "humanas", ["sisu"], 620),
  r("UFRJ", "Universidade Federal do Rio de Janeiro", "RJ", "sudeste", "Serviço Social", "humanas", ["sisu"], 610),
  r("UFF", "Universidade Federal Fluminense", "RJ", "sudeste", "Direito", "humanas", ["sisu"], 785),
  r("UFF", "Universidade Federal Fluminense", "RJ", "sudeste", "Jornalismo", "humanas", ["sisu"], 720),
  r("UFF", "Universidade Federal Fluminense", "RJ", "sudeste", "Ciências Sociais", "humanas", ["sisu"], 630),
  r("UFMG", "Universidade Federal de Minas Gerais", "MG", "sudeste", "Jornalismo", "humanas", ["sisu"], 745),
  r("UFMG", "Universidade Federal de Minas Gerais", "MG", "sudeste", "História", "humanas", ["sisu"], 665),
  r("UFMG", "Universidade Federal de Minas Gerais", "MG", "sudeste", "Pedagogia", "humanas", ["sisu"], 620),
  r("UFMG", "Universidade Federal de Minas Gerais", "MG", "sudeste", "Ciências Sociais", "humanas", ["sisu"], 640),
  r("UFRGS", "Universidade Federal do Rio Grande do Sul", "RS", "sul", "Jornalismo", "humanas", ["sisu", "vestibular-proprio"], 730),
  r("UFRGS", "Universidade Federal do Rio Grande do Sul", "RS", "sul", "História", "humanas", ["sisu", "vestibular-proprio"], 655),
  r("UFRGS", "Universidade Federal do Rio Grande do Sul", "RS", "sul", "Relações Internacionais", "humanas", ["sisu", "vestibular-proprio"], 790),
  r("UFSC", "Universidade Federal de Santa Catarina", "SC", "sul", "Jornalismo", "humanas", ["vestibular-proprio", "sisu"], 710),
  r("UFSC", "Universidade Federal de Santa Catarina", "SC", "sul", "Letras", "humanas", ["vestibular-proprio", "sisu"], 605),
  r("UFPR", "Universidade Federal do Paraná", "PR", "sul", "História", "humanas", ["vestibular-proprio"], 645),
  r("UFPR", "Universidade Federal do Paraná", "PR", "sul", "Pedagogia", "humanas", ["vestibular-proprio"], 600),
  r("UnB", "Universidade de Brasília", "DF", "centro-oeste", "Jornalismo", "humanas", ["pas", "sisu"], 750),
  r("UnB", "Universidade de Brasília", "DF", "centro-oeste", "Ciências Sociais", "humanas", ["pas", "sisu"], 645),
  r("UnB", "Universidade de Brasília", "DF", "centro-oeste", "História", "humanas", ["pas", "sisu"], 660),
  r("UFG", "Universidade Federal de Goiás", "GO", "centro-oeste", "Jornalismo", "humanas", ["sisu"], 690),
  r("UFPE", "Universidade Federal de Pernambuco", "PE", "nordeste", "Jornalismo", "humanas", ["sisu"], 705),
  r("UFPE", "Universidade Federal de Pernambuco", "PE", "nordeste", "História", "humanas", ["sisu"], 630),
  r("UFBA", "Universidade Federal da Bahia", "BA", "nordeste", "Jornalismo", "humanas", ["sisu"], 685),
  r("UFBA", "Universidade Federal da Bahia", "BA", "nordeste", "Letras", "humanas", ["sisu"], 590),
  r("UFC", "Universidade Federal do Ceará", "CE", "nordeste", "Ciências Sociais", "humanas", ["sisu"], 610),
  r("UFPA", "Universidade Federal do Pará", "PA", "norte", "Pedagogia", "humanas", ["sisu"], 580),

  /* ---------- TECNOLOGIA além de Ciência da Computação ---------- */
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Sistemas de Informação", "tecnologia", ["fuvest"], 800),
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Ciência de Dados", "tecnologia", ["fuvest"], 845),
  r("UNICAMP", "Universidade Estadual de Campinas", "SP", "sudeste", "Sistemas de Informação", "tecnologia", ["vestibular-proprio"], 810),
  r("UFMG", "Universidade Federal de Minas Gerais", "MG", "sudeste", "Sistemas de Informação", "tecnologia", ["sisu"], 770),
  r("UFMG", "Universidade Federal de Minas Gerais", "MG", "sudeste", "Ciência de Dados", "tecnologia", ["sisu"], 800),
  r("UFRJ", "Universidade Federal do Rio de Janeiro", "RJ", "sudeste", "Ciência de Dados", "tecnologia", ["sisu"], 795),
  r("UFF", "Universidade Federal Fluminense", "RJ", "sudeste", "Ciência da Computação", "tecnologia", ["sisu"], 780),
  r("UFF", "Universidade Federal Fluminense", "RJ", "sudeste", "Sistemas de Informação", "tecnologia", ["sisu"], 730),
  r("UFRGS", "Universidade Federal do Rio Grande do Sul", "RS", "sul", "Sistemas de Informação", "tecnologia", ["sisu", "vestibular-proprio"], 760),
  r("UFSC", "Universidade Federal de Santa Catarina", "SC", "sul", "Sistemas de Informação", "tecnologia", ["vestibular-proprio", "sisu"], 745),
  r("UFPR", "Universidade Federal do Paraná", "PR", "sul", "Ciência da Computação", "tecnologia", ["vestibular-proprio"], 785),
  r("UFPR", "Universidade Federal do Paraná", "PR", "sul", "Sistemas de Informação", "tecnologia", ["vestibular-proprio"], 720),
  r("UFSM", "Universidade Federal de Santa Maria", "RS", "sul", "Ciência da Computação", "tecnologia", ["sisu"], 740),
  r("UnB", "Universidade de Brasília", "DF", "centro-oeste", "Sistemas de Informação", "tecnologia", ["pas", "sisu"], 750),
  r("UFG", "Universidade Federal de Goiás", "GO", "centro-oeste", "Inteligência Artificial", "tecnologia", ["sisu"], 800),
  r("UFG", "Universidade Federal de Goiás", "GO", "centro-oeste", "Ciência da Computação", "tecnologia", ["sisu"], 750),
  r("UFMS", "Universidade Federal de Mato Grosso do Sul", "MS", "centro-oeste", "Ciência da Computação", "tecnologia", ["sisu"], 700),
  r("UFPE", "Universidade Federal de Pernambuco", "PE", "nordeste", "Engenharia de Software", "tecnologia", ["sisu"], 780),
  r("UFPE", "Universidade Federal de Pernambuco", "PE", "nordeste", "Sistemas de Informação", "tecnologia", ["sisu"], 725),
  r("UFC", "Universidade Federal do Ceará", "CE", "nordeste", "Ciência da Computação", "tecnologia", ["sisu"], 760),
  r("UFRN", "Universidade Federal do Rio Grande do Norte", "RN", "nordeste", "Engenharia de Software", "tecnologia", ["sisu"], 745),
  r("UFBA", "Universidade Federal da Bahia", "BA", "nordeste", "Sistemas de Informação", "tecnologia", ["sisu"], 710),
  r("UFPA", "Universidade Federal do Pará", "PA", "norte", "Ciência da Computação", "tecnologia", ["sisu"], 700),
  r("UFAM", "Universidade Federal do Amazonas", "AM", "norte", "Ciência da Computação", "tecnologia", ["sisu", "pas"], 690),

  /* ---------- NEGÓCIOS ---------- */
  r("UFRJ", "Universidade Federal do Rio de Janeiro", "RJ", "sudeste", "Administração", "negocios", ["sisu"], 750),
  r("UFRJ", "Universidade Federal do Rio de Janeiro", "RJ", "sudeste", "Ciências Contábeis", "negocios", ["sisu"], 680),
  r("UFRJ", "Universidade Federal do Rio de Janeiro", "RJ", "sudeste", "Ciências Atuariais", "negocios", ["sisu"], 660),
  r("UFMG", "Universidade Federal de Minas Gerais", "MG", "sudeste", "Administração", "negocios", ["sisu"], 760),
  r("UFMG", "Universidade Federal de Minas Gerais", "MG", "sudeste", "Economia", "negocios", ["sisu"], 775),
  r("UFMG", "Universidade Federal de Minas Gerais", "MG", "sudeste", "Ciências Contábeis", "negocios", ["sisu"], 690),
  r("UFF", "Universidade Federal Fluminense", "RJ", "sudeste", "Administração", "negocios", ["sisu"], 720),
  r("UFF", "Universidade Federal Fluminense", "RJ", "sudeste", "Economia", "negocios", ["sisu"], 730),
  r("UNESP", "Universidade Estadual Paulista", "SP", "sudeste", "Administração", "negocios", ["vestibular-proprio"], 745),
  r("UFRGS", "Universidade Federal do Rio Grande do Sul", "RS", "sul", "Administração", "negocios", ["sisu", "vestibular-proprio"], 755),
  r("UFRGS", "Universidade Federal do Rio Grande do Sul", "RS", "sul", "Economia", "negocios", ["sisu", "vestibular-proprio"], 750),
  r("UFRGS", "Universidade Federal do Rio Grande do Sul", "RS", "sul", "Ciências Contábeis", "negocios", ["sisu", "vestibular-proprio"], 680),
  r("UFSC", "Universidade Federal de Santa Catarina", "SC", "sul", "Administração", "negocios", ["vestibular-proprio", "sisu"], 730),
  r("UFPR", "Universidade Federal do Paraná", "PR", "sul", "Administração", "negocios", ["vestibular-proprio"], 715),
  r("UFPR", "Universidade Federal do Paraná", "PR", "sul", "Ciências Contábeis", "negocios", ["vestibular-proprio"], 655),
  r("UnB", "Universidade de Brasília", "DF", "centro-oeste", "Administração", "negocios", ["pas", "sisu"], 765),
  r("UnB", "Universidade de Brasília", "DF", "centro-oeste", "Ciências Contábeis", "negocios", ["pas", "sisu"], 675),
  r("UnB", "Universidade de Brasília", "DF", "centro-oeste", "Economia", "negocios", ["pas", "sisu"], 780),
  r("UFPE", "Universidade Federal de Pernambuco", "PE", "nordeste", "Administração", "negocios", ["sisu"], 710),
  r("UFPE", "Universidade Federal de Pernambuco", "PE", "nordeste", "Economia", "negocios", ["sisu"], 720),
  r("UFBA", "Universidade Federal da Bahia", "BA", "nordeste", "Administração", "negocios", ["sisu"], 695),
  r("UFC", "Universidade Federal do Ceará", "CE", "nordeste", "Administração", "negocios", ["sisu"], 690),
  r("UFC", "Universidade Federal do Ceará", "CE", "nordeste", "Ciências Contábeis", "negocios", ["sisu"], 640),
  r("UFG", "Universidade Federal de Goiás", "GO", "centro-oeste", "Administração", "negocios", ["sisu"], 670),
  r("UFPA", "Universidade Federal do Pará", "PA", "norte", "Ciências Contábeis", "negocios", ["sisu"], 615),

  /* ---------- CIÊNCIAS EXATAS ---------- */
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Matemática", "exatas", ["fuvest"], 700),
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Química", "exatas", ["fuvest"], 705),
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Geologia", "exatas", ["fuvest"], 680),
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Matemática Aplicada", "exatas", ["fuvest"], 730),
  r("UNICAMP", "Universidade Estadual de Campinas", "SP", "sudeste", "Matemática", "exatas", ["vestibular-proprio"], 695),
  r("UNICAMP", "Universidade Estadual de Campinas", "SP", "sudeste", "Física", "exatas", ["vestibular-proprio"], 710),
  r("UNICAMP", "Universidade Estadual de Campinas", "SP", "sudeste", "Estatística", "exatas", ["vestibular-proprio"], 720),
  r("UFRJ", "Universidade Federal do Rio de Janeiro", "RJ", "sudeste", "Matemática", "exatas", ["sisu"], 660),
  r("UFRJ", "Universidade Federal do Rio de Janeiro", "RJ", "sudeste", "Física", "exatas", ["sisu"], 670),
  r("UFRJ", "Universidade Federal do Rio de Janeiro", "RJ", "sudeste", "Química", "exatas", ["sisu"], 665),
  r("UFRJ", "Universidade Federal do Rio de Janeiro", "RJ", "sudeste", "Astronomia", "exatas", ["sisu"], 690),
  r("UFMG", "Universidade Federal de Minas Gerais", "MG", "sudeste", "Matemática", "exatas", ["sisu"], 645),
  r("UFMG", "Universidade Federal de Minas Gerais", "MG", "sudeste", "Física", "exatas", ["sisu"], 655),
  r("UFMG", "Universidade Federal de Minas Gerais", "MG", "sudeste", "Estatística", "exatas", ["sisu"], 690),
  r("UFRGS", "Universidade Federal do Rio Grande do Sul", "RS", "sul", "Física", "exatas", ["sisu", "vestibular-proprio"], 650),
  r("UFRGS", "Universidade Federal do Rio Grande do Sul", "RS", "sul", "Estatística", "exatas", ["sisu", "vestibular-proprio"], 685),
  r("UFSC", "Universidade Federal de Santa Catarina", "SC", "sul", "Matemática", "exatas", ["vestibular-proprio", "sisu"], 620),
  r("UFSC", "Universidade Federal de Santa Catarina", "SC", "sul", "Química", "exatas", ["vestibular-proprio", "sisu"], 630),
  r("UnB", "Universidade de Brasília", "DF", "centro-oeste", "Estatística", "exatas", ["pas", "sisu"], 670),
  r("UnB", "Universidade de Brasília", "DF", "centro-oeste", "Física", "exatas", ["pas", "sisu"], 640),
  r("UFPE", "Universidade Federal de Pernambuco", "PE", "nordeste", "Matemática", "exatas", ["sisu"], 615),
  r("UFPE", "Universidade Federal de Pernambuco", "PE", "nordeste", "Estatística", "exatas", ["sisu"], 650),
  r("UFBA", "Universidade Federal da Bahia", "BA", "nordeste", "Química", "exatas", ["sisu"], 600),
  r("UFC", "Universidade Federal do Ceará", "CE", "nordeste", "Matemática", "exatas", ["sisu"], 605),

  /* ---------- DESIGN E CRIATIVIDADE ---------- */
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Design", "design", ["fuvest"], 775),
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Publicidade e Propaganda", "design", ["fuvest"], 760),
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Cinema e Audiovisual", "design", ["fuvest"], 745),
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Artes Visuais", "design", ["fuvest"], 665),
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Música", "design", ["fuvest"], 630),
  r("UNICAMP", "Universidade Estadual de Campinas", "SP", "sudeste", "Design", "design", ["vestibular-proprio"], 750),
  r("UNICAMP", "Universidade Estadual de Campinas", "SP", "sudeste", "Artes Visuais", "design", ["vestibular-proprio"], 645),
  r("UNICAMP", "Universidade Estadual de Campinas", "SP", "sudeste", "Música", "design", ["vestibular-proprio"], 620),
  r("UNESP", "Universidade Estadual Paulista", "SP", "sudeste", "Design", "design", ["vestibular-proprio"], 720),
  r("UNESP", "Universidade Estadual Paulista", "SP", "sudeste", "Artes Visuais", "design", ["vestibular-proprio"], 625),
  r("UFRJ", "Universidade Federal do Rio de Janeiro", "RJ", "sudeste", "Design", "design", ["sisu"], 730),
  r("UFRJ", "Universidade Federal do Rio de Janeiro", "RJ", "sudeste", "Publicidade e Propaganda", "design", ["sisu"], 720),
  r("UFRJ", "Universidade Federal do Rio de Janeiro", "RJ", "sudeste", "Artes Visuais", "design", ["sisu"], 640),
  r("UFF", "Universidade Federal Fluminense", "RJ", "sudeste", "Cinema e Audiovisual", "design", ["sisu"], 725),
  r("UFF", "Universidade Federal Fluminense", "RJ", "sudeste", "Arquitetura e Urbanismo", "design", ["sisu"], 740),
  r("UFMG", "Universidade Federal de Minas Gerais", "MG", "sudeste", "Design", "design", ["sisu"], 715),
  r("UFMG", "Universidade Federal de Minas Gerais", "MG", "sudeste", "Publicidade e Propaganda", "design", ["sisu"], 705),
  r("UFMG", "Universidade Federal de Minas Gerais", "MG", "sudeste", "Cinema e Audiovisual", "design", ["sisu"], 700),
  r("UFRGS", "Universidade Federal do Rio Grande do Sul", "RS", "sul", "Design", "design", ["sisu", "vestibular-proprio"], 710),
  r("UFRGS", "Universidade Federal do Rio Grande do Sul", "RS", "sul", "Publicidade e Propaganda", "design", ["sisu", "vestibular-proprio"], 695),
  r("UFSC", "Universidade Federal de Santa Catarina", "SC", "sul", "Design", "design", ["vestibular-proprio", "sisu"], 690),
  r("UFPR", "Universidade Federal do Paraná", "PR", "sul", "Design", "design", ["vestibular-proprio"], 680),
  r("UFPR", "Universidade Federal do Paraná", "PR", "sul", "Arquitetura e Urbanismo", "design", ["vestibular-proprio"], 745),
  r("UnB", "Universidade de Brasília", "DF", "centro-oeste", "Design", "design", ["pas", "sisu"], 700),
  r("UnB", "Universidade de Brasília", "DF", "centro-oeste", "Artes Visuais", "design", ["pas", "sisu"], 615),
  r("UFPE", "Universidade Federal de Pernambuco", "PE", "nordeste", "Design", "design", ["sisu"], 685),
  r("UFPE", "Universidade Federal de Pernambuco", "PE", "nordeste", "Arquitetura e Urbanismo", "design", ["sisu"], 730),
  r("UFBA", "Universidade Federal da Bahia", "BA", "nordeste", "Artes Visuais", "design", ["sisu"], 595),
  r("UFC", "Universidade Federal do Ceará", "CE", "nordeste", "Arquitetura e Urbanismo", "design", ["sisu"], 710),

  /* ---------- ENGENHARIA, mais modalidades ---------- */
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Engenharia Química", "engenharia", ["fuvest"], 820),
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Engenharia de Produção", "engenharia", ["fuvest"], 835),
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Engenharia Ambiental", "engenharia", ["fuvest"], 780),
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Engenharia de Materiais", "engenharia", ["fuvest"], 790),
  r("USP", "Universidade de São Paulo", "SP", "sudeste", "Engenharia Naval", "engenharia", ["fuvest"], 800),
  r("UNICAMP", "Universidade Estadual de Campinas", "SP", "sudeste", "Engenharia Química", "engenharia", ["vestibular-proprio"], 800),
  r("UNICAMP", "Universidade Estadual de Campinas", "SP", "sudeste", "Engenharia de Produção", "engenharia", ["vestibular-proprio"], 815),
  r("UNICAMP", "Universidade Estadual de Campinas", "SP", "sudeste", "Engenharia Civil", "engenharia", ["vestibular-proprio"], 795),
  r("UFRJ", "Universidade Federal do Rio de Janeiro", "RJ", "sudeste", "Engenharia Química", "engenharia", ["sisu"], 790),
  r("UFRJ", "Universidade Federal do Rio de Janeiro", "RJ", "sudeste", "Engenharia Naval", "engenharia", ["sisu"], 770),
  r("UFRJ", "Universidade Federal do Rio de Janeiro", "RJ", "sudeste", "Engenharia de Produção", "engenharia", ["sisu"], 785),
  r("UFRJ", "Universidade Federal do Rio de Janeiro", "RJ", "sudeste", "Engenharia Mecânica", "engenharia", ["sisu"], 780),
  r("UFMG", "Universidade Federal de Minas Gerais", "MG", "sudeste", "Engenharia Química", "engenharia", ["sisu"], 775),
  r("UFMG", "Universidade Federal de Minas Gerais", "MG", "sudeste", "Engenharia de Produção", "engenharia", ["sisu"], 790),
  r("UFMG", "Universidade Federal de Minas Gerais", "MG", "sudeste", "Engenharia Mecânica", "engenharia", ["sisu"], 770),
  r("UFMG", "Universidade Federal de Minas Gerais", "MG", "sudeste", "Engenharia Aeroespacial", "engenharia", ["sisu"], 800),
  r("UFF", "Universidade Federal Fluminense", "RJ", "sudeste", "Engenharia Civil", "engenharia", ["sisu"], 745),
  r("UFF", "Universidade Federal Fluminense", "RJ", "sudeste", "Engenharia de Produção", "engenharia", ["sisu"], 755),
  r("UFSCar", "Universidade Federal de São Carlos", "SP", "sudeste", "Engenharia de Materiais", "engenharia", ["sisu"], 720),
  r("UFRGS", "Universidade Federal do Rio Grande do Sul", "RS", "sul", "Engenharia Civil", "engenharia", ["sisu", "vestibular-proprio"], 765),
  r("UFRGS", "Universidade Federal do Rio Grande do Sul", "RS", "sul", "Engenharia Química", "engenharia", ["sisu", "vestibular-proprio"], 755),
  r("UFRGS", "Universidade Federal do Rio Grande do Sul", "RS", "sul", "Engenharia Mecânica", "engenharia", ["sisu", "vestibular-proprio"], 750),
  r("UFSC", "Universidade Federal de Santa Catarina", "SC", "sul", "Engenharia Civil", "engenharia", ["vestibular-proprio", "sisu"], 755),
  r("UFSC", "Universidade Federal de Santa Catarina", "SC", "sul", "Engenharia de Produção", "engenharia", ["vestibular-proprio", "sisu"], 745),
  r("UFPR", "Universidade Federal do Paraná", "PR", "sul", "Engenharia Civil", "engenharia", ["vestibular-proprio"], 740),
  r("UFPR", "Universidade Federal do Paraná", "PR", "sul", "Engenharia Mecânica", "engenharia", ["vestibular-proprio"], 730),
  r("UnB", "Universidade de Brasília", "DF", "centro-oeste", "Engenharia Civil", "engenharia", ["pas", "sisu"], 750),
  r("UnB", "Universidade de Brasília", "DF", "centro-oeste", "Engenharia Elétrica", "engenharia", ["pas", "sisu"], 755),
  r("UnB", "Universidade de Brasília", "DF", "centro-oeste", "Engenharia Aeroespacial", "engenharia", ["pas", "sisu"], 780),
  r("UFPE", "Universidade Federal de Pernambuco", "PE", "nordeste", "Engenharia Elétrica", "engenharia", ["sisu"], 730),
  r("UFPE", "Universidade Federal de Pernambuco", "PE", "nordeste", "Engenharia Química", "engenharia", ["sisu"], 720),
  r("UFBA", "Universidade Federal da Bahia", "BA", "nordeste", "Engenharia Civil", "engenharia", ["sisu"], 715),
  r("UFC", "Universidade Federal do Ceará", "CE", "nordeste", "Engenharia Civil", "engenharia", ["sisu"], 720),
  r("UFRN", "Universidade Federal do Rio Grande do Norte", "RN", "nordeste", "Engenharia Civil", "engenharia", ["sisu"], 700),
  r("UFPA", "Universidade Federal do Pará", "PA", "norte", "Engenharia Civil", "engenharia", ["sisu"], 680),
];

/**
 * A lista pública do módulo. Passa pelo overlay de notas reais antes de sair
 * daqui — todo consumidor (interface, filtros, INGRESSOS_DISPONIVEIS abaixo)
 * já recebe o dado corrigido, sem precisar saber que o overlay existe.
 */
export const FACULDADES: readonly Faculdade[] = aplicaNotasReais(FACULDADES_BASE);

/**
 * Vias efetivamente presentes na base, com quantos cursos cada uma tem.
 * O filtro da interface é montado a partir daqui, então nunca oferece uma
 * opção que devolveria lista vazia.
 *
 * Depende de FACULDADES, por isso fica depois dela: `const` em módulo ES é
 * avaliado na ordem do arquivo, e ler a lista antes da declaração quebraria
 * a importação inteira.
 */
export const INGRESSOS_DISPONIVEIS: {
  valor: TipoIngresso;
  rotulo: string;
  total: number;
}[] = (Object.keys(NOME_DO_INGRESSO) as TipoIngresso[])
  .map((valor) => ({
    valor,
    rotulo: NOME_DO_INGRESSO[valor],
    total: FACULDADES.filter((u) => u.formasIngresso.includes(valor)).length,
  }))
  .filter((i) => i.total > 0)
  .sort((a, b) => b.total - a.total);
