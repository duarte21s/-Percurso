/**
 * A grade oficial de correção da redação do ENEM.
 *
 * Cinco competências, cada uma de 0 a 200 em degraus de 40 — nunca 137. O
 * `check (c1 % 40 = 0)` no banco existe pelo mesmo motivo.
 *
 * Os descritores abaixo são um resumo em linguagem direta do que o INEP
 * publica na Cartilha do Participante. Não substituem o documento oficial,
 * que está linkado na tela — servem para a pessoa conseguir se localizar num
 * nível sem ter que ler 60 páginas antes de escrever a primeira linha.
 *
 * Por que isto existe: aprender a enxergar a própria competência 3 vale mais
 * que receber um número pronto. É como todo cursinho ensina redação antes de
 * ter corretor — e funciona sem depender de nenhuma API.
 */

export interface NivelCompetencia {
  /** A nota do degrau: 0, 40, 80, 120, 160 ou 200. */
  nota: number;
  /** Rótulo curto, para o botão. */
  rotulo: string;
  /** O que caracteriza esse nível. */
  descricao: string;
}

export interface Competencia {
  /** 1 a 5 — a mesma numeração da folha de correção do INEP. */
  numero: number;
  titulo: string;
  /** O que a competência mede, em uma frase. */
  resumo: string;
  /** Onde as pessoas mais perdem ponto nesta competência. */
  atencao: string;
  niveis: readonly NivelCompetencia[];
}

const NIVEIS_C1: readonly NivelCompetencia[] = [
  { nota: 0, rotulo: "Desconhecimento", descricao: "Desconhecimento da escrita formal, com desvios em praticamente todo o texto." },
  { nota: 40, rotulo: "Precário", descricao: "Domínio precário: desvios graves e frequentes de norma, sintaxe e pontuação." },
  { nota: 80, rotulo: "Insuficiente", descricao: "Domínio insuficiente: muitos desvios, incluindo alguns graves." },
  { nota: 120, rotulo: "Mediano", descricao: "Domínio mediano: alguns desvios, sem que atrapalhem a leitura." },
  { nota: 160, rotulo: "Bom", descricao: "Bom domínio: poucos desvios, todos leves." },
  { nota: 200, rotulo: "Excelente", descricao: "Excelente domínio: no máximo uma falha ocasional, e nenhuma grave." },
];

const NIVEIS_C2: readonly NivelCompetencia[] = [
  { nota: 0, rotulo: "Fuga ao tema", descricao: "Fugiu do tema, ou não escreveu um texto dissertativo-argumentativo. Zera a redação inteira." },
  { nota: 40, rotulo: "Tangencia", descricao: "Tangenciou o tema, ou misturou tipos textuais (narrou, descreveu, fez poema)." },
  { nota: 80, rotulo: "Cópia", descricao: "Abordou o tema, mas apoiado em cópia dos textos motivadores, com estrutura frágil." },
  { nota: 120, rotulo: "Previsível", descricao: "Argumentação previsível, com repertório vindo só dos textos motivadores." },
  { nota: 160, rotulo: "Consistente", descricao: "Argumentação consistente, com repertório sociocultural próprio e produtivo." },
  { nota: 200, rotulo: "Excelente", descricao: "Argumentação consistente, repertório produtivo e legitimado, e excelente domínio do tipo textual." },
];

const NIVEIS_C3: readonly NivelCompetencia[] = [
  { nota: 0, rotulo: "Sem relação", descricao: "Informações sem relação com o tema, sem defender ponto de vista." },
  { nota: 40, rotulo: "Incoerente", descricao: "Informações pouco relacionadas ou contraditórias, sem defesa clara." },
  { nota: 80, rotulo: "Limitado", descricao: "Informações limitadas aos textos motivadores; ponto de vista pouco claro." },
  { nota: 120, rotulo: "Pouco organizado", descricao: "Informações relacionadas ao tema, mas mal organizadas, em defesa de um ponto de vista." },
  { nota: 160, rotulo: "Organizado", descricao: "Informações organizadas e relacionadas, com indícios de autoria." },
  { nota: 200, rotulo: "Autoral", descricao: "Informações consistentes e bem encadeadas, configurando autoria própria." },
];

const NIVEIS_C4: readonly NivelCompetencia[] = [
  { nota: 0, rotulo: "Sem articulação", descricao: "As partes do texto não se conectam." },
  { nota: 40, rotulo: "Precário", descricao: "Articulação precária: parágrafos e frases soltos." },
  { nota: 80, rotulo: "Insuficiente", descricao: "Muitas inadequações de conexão e repertório limitado de conectivos." },
  { nota: 120, rotulo: "Mediano", descricao: "Articulação mediana, com inadequações e conectivos pouco variados." },
  { nota: 160, rotulo: "Bom", descricao: "Poucas inadequações e repertório diversificado de recursos coesivos." },
  { nota: 200, rotulo: "Excelente", descricao: "Partes bem articuladas e repertório diversificado, sem repetir sempre o mesmo conectivo." },
];

const NIVEIS_C5: readonly NivelCompetencia[] = [
  { nota: 0, rotulo: "Sem proposta", descricao: "Não apresentou proposta de intervenção, ou ela não tem relação com o tema. Proposta que fira os direitos humanos também zera aqui." },
  { nota: 40, rotulo: "Vaga", descricao: "Proposta vaga ou ligada só ao assunto geral, não ao problema discutido." },
  { nota: 80, rotulo: "Solta", descricao: "Proposta relacionada ao tema, mas desligada da discussão que o texto fez." },
  { nota: 120, rotulo: "Mediana", descricao: "Proposta ligada ao tema e à discussão, mas sem detalhamento." },
  { nota: 160, rotulo: "Bem elaborada", descricao: "Proposta bem elaborada, ligada ao tema e à argumentação do texto." },
  { nota: 200, rotulo: "Detalhada", descricao: "Proposta detalhada com os cinco elementos: agente, ação, meio, efeito e detalhamento." },
];

export const COMPETENCIAS: readonly Competencia[] = [
  {
    numero: 1,
    titulo: "Domínio da norma culta",
    resumo: "Escrever segundo a modalidade escrita formal da língua portuguesa.",
    atencao:
      "Desvio grave é o que compromete o sentido: concordância, regência, crase, pontuação que separa sujeito do verbo. Erro de acento isolado pesa bem menos.",
    niveis: NIVEIS_C1,
  },
  {
    numero: 2,
    titulo: "Compreender o tema e o tipo de texto",
    resumo:
      "Desenvolver o tema proposto dentro da estrutura dissertativo-argumentativa, usando repertório de outras áreas.",
    atencao:
      "Repertório produtivo é o que você usa a favor do argumento — não é citar um filósofo e seguir em frente. Fuga ao tema zera a redação inteira, não só esta competência.",
    niveis: NIVEIS_C2,
  },
  {
    numero: 3,
    titulo: "Organizar e defender um ponto de vista",
    resumo:
      "Selecionar, relacionar e interpretar informações em defesa de uma tese.",
    atencao:
      "Aqui se avalia o projeto de texto: se dá para ver que você planejou onde cada argumento entraria, ou se foi escrevendo o que vinha à cabeça.",
    niveis: NIVEIS_C3,
  },
  {
    numero: 4,
    titulo: "Coesão e articulação",
    resumo:
      "Usar os mecanismos linguísticos que amarram as partes do texto.",
    atencao:
      "Repertório diversificado significa não começar todo parágrafo com “Além disso”. Conta também a coesão dentro do parágrafo, não só entre eles.",
    niveis: NIVEIS_C4,
  },
  {
    numero: 5,
    titulo: "Proposta de intervenção",
    resumo:
      "Propor uma solução para o problema, respeitando os direitos humanos.",
    atencao:
      "Os cinco elementos: quem faz (agente), o que faz (ação), como faz (meio), para quê (efeito) e o detalhamento de um deles. Faltando um, dificilmente passa de 160.",
    niveis: NIVEIS_C5,
  },
];

/** Os seis degraus, na ordem. Usado para validar e para montar a tabela. */
export const DEGRAUS = [0, 40, 80, 120, 160, 200] as const;

/** Link da fonte oficial — a tela sempre mostra de onde a grade veio. */
export const CARTILHA_INEP =
  "https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/redacao";

/**
 * Soma as cinco competências.
 *
 * Fuga ao tema (competência 2 igual a zero) zera o total, como na correção
 * real — não adianta ter norma culta impecável num texto sobre outro assunto.
 */
export function somaNotas(notas: readonly number[]): number {
  if (notas.length !== 5) return 0;
  if (notas[1] === 0) return 0;
  return notas.reduce((a, b) => a + b, 0);
}

/** Faixa de desempenho, para a tela dizer algo mais útil que um número. */
export function faixaDaNota(total: number): { rotulo: string; recado: string } {
  if (total === 0) {
    return {
      rotulo: "Zerada",
      recado:
        "Fuga ao tema zera a redação inteira. Antes de escrever, sublinhe as palavras-chave da proposta e volte a elas em cada parágrafo.",
    };
  }
  if (total < 400) {
    return {
      rotulo: "Início",
      recado:
        "O caminho mais rápido daqui é a estrutura: introdução com tese clara, dois parágrafos de desenvolvimento e conclusão com proposta.",
    };
  }
  if (total < 600) {
    return {
      rotulo: "Em construção",
      recado:
        "A estrutura já aparece. O ganho agora costuma vir da competência 3 — planejar o texto antes de escrever, em vez de descobrir o argumento no meio.",
    };
  }
  if (total < 800) {
    return {
      rotulo: "Consistente",
      recado:
        "Boa base. Daqui para cima o que separa é repertório usado a favor do argumento e a proposta de intervenção com os cinco elementos.",
    };
  }
  if (total < 950) {
    return {
      rotulo: "Forte",
      recado:
        "Texto forte. Olhe a competência 4: variar os conectivos e amarrar melhor dentro do parágrafo costuma ser o último degrau.",
    };
  }
  return {
    rotulo: "Nota máxima",
    recado:
      "Faixa de mil. Vale reler daqui a uma semana com a grade na mão — a autoavaliação tende a ser generosa logo depois de escrever.",
  };
}
