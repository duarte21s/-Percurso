export interface Passo {
  numero: string;
  fase: string;
  titulo: string;
  texto: string;
}

export const METODO: readonly Passo[] = [
  {
    numero: "01",
    fase: "Diagnóstico",
    titulo: "Descubra onde você está",
    texto:
      "Um simulado inicial mostra quais tópicos já estão sólidos e quais estão custando pontos. Sem isso, você estuda o que gosta em vez do que precisa.",
  },
  {
    numero: "02",
    fase: "Teoria",
    titulo: "Aprenda em blocos curtos",
    texto:
      "Aulas objetivas por tópico, na ordem em que a banca cobra. Blocos de 25 a 45 minutos com pausa — o cérebro consolida no intervalo, não na maratona.",
  },
  {
    numero: "03",
    fase: "Questões",
    titulo: "Erre agora, não na prova",
    texto:
      "Cada questão vem com comentário que explica também por que as outras alternativas estão erradas. É o distrator que te derruba, não o conteúdo.",
  },
  {
    numero: "04",
    fase: "Revisão",
    titulo: "Volte antes de esquecer",
    texto:
      "Revisão espaçada em 1, 7 e 30 dias. O cronograma já marca esses retornos para você, e é essa repetição que fixa o conteúdo a longo prazo.",
  },
] as const;

/* ---------- Seções de demonstração ---------- */

export interface Recurso {
  ico: "book" | "star" | "shield" | "compass" | "layers" | "cap";
  titulo: string;
  texto: string;
  /** Página pública que explica esse recurso a fundo. */
  href: string;
  ctaRotulo: string;
}

export const RECURSOS: readonly Recurso[] = [
  {
    ico: "book",
    titulo: "Banco de questões comentadas",
    texto:
      "Questões no formato das principais bancas, cada uma com comentário que explica o gabarito e por que os distratores derrubam. O comentário aparece assim que você responde — logo abaixo da alternativa que marcou.",
    href: "/como-funciona",
    ctaRotulo: "Ver a jornada",
  },
  {
    ico: "compass",
    titulo: "O estudo guarda seu lugar",
    texto:
      "Fechou a aba na questão 7? Ao voltar, a sessão pergunta se você quer continuar de onde parou. Acertos, erros e o que você já respondeu ficam salvos na sua conta.",
    href: "/como-funciona",
    ctaRotulo: "Ver a jornada",
  },
  /* "Questões novas sob demanda" saiu daqui: descrevia a geração de questões
     por IA, cuja interface não existe mais no site. Anunciar recurso que a
     pessoa não encontra é promessa falsa. */
  {
    ico: "cap",
    titulo: "Cursos e concorrência mapeados",
    texto:
      "Mais de quatrocentas combinações de curso e universidade, filtráveis por área, curso, estado, região e forma de ingresso, com um índice que compara a concorrência. É índice de referência, não nota de corte oficial — serve de meta, não de promessa.",
    href: "/faculdades",
    ctaRotulo: "Conhecer recurso",
  },
  {
    ico: "layers",
    titulo: "Cronograma que cabe na sua semana",
    texto:
      "Você diz quantas horas tem e o que precisa priorizar. O plano distribui as matérias com revisão espaçada e um dia de descanso — porque plano que ignora cansaço não sobrevive à segunda semana.",
    href: "/cronograma",
    ctaRotulo: "Conhecer recurso",
  },
  {
    ico: "shield",
    titulo: "Desempenho por matéria",
    texto:
      "Cada simulado concluído entra no histórico. Dá para ver onde o acerto está subindo e qual matéria continua custando ponto, em vez de estudar no escuro.",
    href: "/sobre",
    ctaRotulo: "Entender melhor",
  },
] as const;

export interface EtapaFluxo {
  numero: string;
  titulo: string;
  texto: string;
  naTela: string;
}

export const COMO_FUNCIONA: readonly EtapaFluxo[] = [
  {
    numero: "01",
    titulo: "Responda um simulado curto",
    texto:
      "Escolha uma matéria ou deixe em todas. São questões reais do banco, no formato das bancas.",
    naTela: "Seção Simulado, aqui mesmo nesta página — sem cadastro.",
  },
  {
    numero: "02",
    titulo: "Veja o erro explicado na hora",
    texto:
      "O gabarito abre logo abaixo da alternativa que você marcou, com o comentário do porquê.",
    naTela: "Selo de certo ou errado, alternativa correta destacada e explicação.",
  },
  {
    numero: "03",
    titulo: "Crie conta e trave o progresso",
    texto:
      "A partir daí o simulado lembra onde você parou e guarda seu histórico por matéria.",
    naTela: "Tela de retomada: continuar de onde parou ou começar de novo.",
  },
  {
    numero: "04",
    titulo: "Monte a semana e repita o ciclo",
    texto:
      "O cronograma distribui as matérias com revisão em 1, 7 e 30 dias e marca o descanso.",
    naTela: "Seção Cronograma, com sua semana bloco a bloco.",
  },
] as const;
