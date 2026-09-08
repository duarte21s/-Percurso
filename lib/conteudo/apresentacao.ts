/* A apresentação do Percurso, dividida em páginas.
 *
 * O conteúdo sai do roteiro da seção 9 de APRESENTACAO-DO-SITE.md, que já
 * estava escrito em 17 slides. Dezessete rotas seriam navegação demais para
 * pouco conteúdo em cada, então viraram oito passos — cada um com uma ideia
 * só e um endereço próprio, que é o que permite mandar o link de um passo
 * específico para alguém.
 *
 * Os números NÃO moram aqui. Eles vêm do banco em tempo real (passo
 * "numeros"), porque a regra da casa é não anunciar conteúdo que o banco não
 * tenha — escrever "9.500 questões" num arquivo de texto é exatamente o tipo
 * de promessa que envelhece mal.
 */

export interface Passo {
  slug: string;
  /** Numeral do passo, mostrado no indicador. */
  eyebrow: string;
  titulo: string;
  /** O `<em>` do título ganha o acento. */
  destaque: string;
  /** Fecho do título, depois do destaque. */
  fim?: string;
  lede: string;
  /** Blocos de apoio. Vazio em passos que vivem só do título. */
  itens?: { titulo: string; texto: string }[];
  /** Passo que puxa os números do banco em vez de texto fixo. */
  tipo?: "numeros";
}

export const PASSOS: Passo[] = [
  {
    slug: "o-problema",
    eyebrow: "O problema",
    titulo: "Estudar sozinho esbarra sempre nos ",
    destaque: "mesmos pontos",
    fim: ".",
    lede: "Não é falta de esforço. É falta de método — e são sempre os mesmos três buracos.",
    itens: [
      {
        titulo: "Não saber por onde começar",
        texto: "A matéria é grande demais para caber num dia, e sem uma ordem a escolha vira sorte.",
      },
      {
        titulo: "Errar e nunca mais reencontrar",
        texto: "A questão que derrubou você some. Sem um lugar para ela voltar, o mesmo erro reaparece na prova.",
      },
      {
        titulo: "O progresso que some ao fechar a aba",
        texto: "Duas horas de estudo que não deixam rastro nenhum. No dia seguinte se recomeça do zero.",
      },
    ],
  },
  {
    slug: "a-ideia",
    eyebrow: "A ideia",
    titulo: "Erre agora, ",
    destaque: "não na prova",
    fim: ".",
    lede: "A proposta não é assistir mais aula. É medir o acerto e corrigir a rota — um ciclo curto que se repete.",
    itens: [
      { titulo: "Diagnóstico", texto: "Descobrir onde você está antes de decidir para onde ir." },
      { titulo: "Teoria em blocos curtos", texto: "O suficiente para responder, não um capítulo inteiro." },
      { titulo: "Questões com o porquê", texto: "O comentário explica também por que o distrator engana." },
      { titulo: "Revisão em 1, 7 e 30 dias", texto: "O que você estudou hoje volta três vezes, no espaçamento que fixa." },
    ],
  },
  {
    slug: "para-quem",
    eyebrow: "Para quem é",
    titulo: "Da escola ao ",
    destaque: "concurso",
    fim: ".",
    lede: "Cinco objetivos diferentes, com conteúdo montado para cada um — e não a mesma trilha com outro nome.",
    itens: [
      { titulo: "Reforço escolar", texto: "Do 6º ao 9º ano, para chegar ao ensino médio sem buraco." },
      { titulo: "ENEM", texto: "Nove matérias, as provas reais e a redação nas cinco competências." },
      { titulo: "Vestibular", texto: "Fuvest, Unicamp, UERJ e as demais provas próprias." },
      { titulo: "Concurso público", texto: "Português, raciocínio lógico e o que as bancas cobram." },
      { titulo: "Carreira militar", texto: "A preparação específica dos concursos das Forças." },
    ],
  },
  {
    slug: "o-que-tem-dentro",
    eyebrow: "As áreas",
    titulo: "Seis ferramentas, ",
    destaque: "um lugar só",
    fim: ".",
    lede: "Tudo dentro do navegador, no computador ou no celular. Ainda não há aplicativo instalável.",
    itens: [
      { titulo: "Estudar", texto: "Escolhe o assunto, responde, e o porquê abre embaixo da alternativa marcada." },
      { titulo: "Provas do ENEM", texto: "As provas reais em modo prova cronometrado, com a nota só no fim." },
      { titulo: "Redação", texto: "Digitada ou fotografada à mão, corrigida nas cinco competências do INEP." },
      { titulo: "Comunidade", texto: "A dúvida fica presa à questão que a gerou, e vira base de conhecimento." },
      { titulo: "Cronograma", texto: "A semana montada a partir do seu tempo real, com revisão espaçada." },
      { titulo: "Faculdades", texto: "Índice comparativo de concorrência — que não é nota de corte oficial." },
    ],
  },
  {
    slug: "numeros",
    tipo: "numeros",
    eyebrow: "Os números",
    titulo: "Contados do banco, ",
    destaque: "não do marketing",
    fim: ".",
    lede: "Estes números são lidos do banco de dados agora, ao carregar esta página. Se o conteúdo diminuir, eles diminuem junto.",
  },
  {
    slug: "honestidade",
    eyebrow: "O diferencial",
    titulo: "O site não promete o que o banco ",
    destaque: "não tem",
    fim: ".",
    lede: "Parece um detalhe e é a decisão mais importante do projeto.",
    itens: [
      {
        titulo: "Onde falta, o site diz que falta",
        texto: "Matéria sem questão suficiente aparece como incompleta, em vez de fingir profundidade.",
      },
      {
        titulo: "Índice de concorrência, não nota de corte",
        texto: "As faculdades trazem um índice comparativo, dito com todas as letras que não é o número oficial de nenhum edital.",
      },
      {
        titulo: "Questão faltando é melhor que gabarito errado",
        texto: "Toda questão passa por validação automática antes de entrar: alternativa única correta, explicação e tema conferidos.",
      },
    ],
  },
  {
    slug: "como-e-feito",
    eyebrow: "Por dentro",
    titulo: "Feito à mão, ",
    destaque: "sem kit pronto",
    fim: ".",
    lede: "Next.js e Supabase por baixo; duas inteligências artificiais que se cobrem quando uma falha.",
    itens: [
      {
        titulo: "Nada de tema comprado",
        texto: "A paleta, a tipografia e o movimento foram desenhados para este site — inclusive o livro que abre conforme a página rola.",
      },
      {
        titulo: "Acessibilidade verificada, não presumida",
        texto: "O contraste de todas as cores é conferido por script contra a norma, nos cinco estados de tema.",
      },
      {
        titulo: "Duas IAs, uma de reserva",
        texto: "A explicação e a correção de redação tentam um provedor e caem no outro se ele falhar.",
      },
    ],
  },
  {
    slug: "onde-estamos",
    eyebrow: "Status",
    titulo: "Da primeira página ",
    destaque: "à aprovação",
    fim: ".",
    lede: "O produto está completo e funcional, e ainda não foi publicado. É o que falta para sair do computador de quem faz e chegar em quem estuda.",
    itens: [
      { titulo: "Já funciona", texto: "Banco de questões, provas, redação, comunidade, cronograma e faculdades." },
      { titulo: "Falta publicar", texto: "Hoje roda em endereço local, sem base de usuários reais." },
      { titulo: "No caminho", texto: "Caderno de erros, aplicativo para celular e modo offline." },
    ],
  },
];

export const PRIMEIRO = PASSOS[0].slug;

export function acharPasso(slug: string) {
  const i = PASSOS.findIndex((p) => p.slug === slug);
  if (i === -1) return null;
  return {
    passo: PASSOS[i],
    indice: i,
    total: PASSOS.length,
    anterior: i > 0 ? PASSOS[i - 1] : null,
    proximo: i < PASSOS.length - 1 ? PASSOS[i + 1] : null,
  };
}
