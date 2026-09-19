export type CategoriaFaq =
  | "Sobre o Percurso"
  | "Estudos"
  | "Provas e ENEM"
  | "Conta e plataforma";

export interface ItemFaq {
  categoria: CategoriaFaq;
  pergunta: string;
  resposta: string;
}

/** Ordem em que as categorias aparecem na página /duvidas. */
export const CATEGORIAS_FAQ: readonly CategoriaFaq[] = [
  "Sobre o Percurso",
  "Estudos",
  "Provas e ENEM",
  "Conta e plataforma",
] as const;

export const FAQ: readonly ItemFaq[] = [
  /* ---------- Sobre o Percurso ---------- */
  {
    categoria: "Sobre o Percurso",
    pergunta: "O que é o Percurso?",
    resposta:
      "Uma plataforma de estudos para o ENEM. Reúne num lugar só um banco de questões, com comentário alternativa por alternativa nas autorais, as provas reais do ENEM em modo prova, correção de redação nas cinco competências do INEP, um cronograma e uma comunidade. Não é um site de videoaulas.",
  },
  {
    categoria: "Sobre o Percurso",
    pergunta: "Para quem o Percurso foi feito?",
    resposta:
      "Para quem vai prestar o ENEM — do primeiro ano do ensino médio a quem já saiu da escola e vai tentar de novo. As nove matérias de ensino médio que o exame cobra estão todas no catálogo. As questões autorais trazem comentário alternativa por alternativa; as do ENEM vêm com o gabarito do INEP e ganham explicação quando alguém pede.",
  },
  {
    categoria: "Sobre o Percurso",
    pergunta: "Estou no ensino médio. Já vale começar?",
    resposta:
      "Vale, e é a melhor hora. Quem acompanha o conteúdo da escola desde o primeiro ano chega ao terceiro precisando revisar em vez de aprender do zero. Em Questões dá para escolher exatamente o assunto que a sua turma está vendo agora, em vez de seguir a ordem do livro didático.",
  },

  /* ---------- Estudos ---------- */
  {
    categoria: "Estudos",
    pergunta: "Quanto tempo por dia eu preciso estudar?",
    resposta:
      "Depende muito mais da constância do que do total. Três horas todos os dias rendem mais do que doze horas só no domingo, porque a revisão espaçada precisa de encontros frequentes com o conteúdo. Se você está começando agora, duas a três horas diárias já sustentam um bom ritmo; para quem estuda em tempo integral, o limite útil costuma ficar entre seis e oito horas antes do rendimento cair.",
  },
  {
    categoria: "Estudos",
    pergunta: "Dá para passar estudando por conta própria?",
    resposta:
      "Sim, e é o caminho de muita gente aprovada. O que separa quem consegue de quem desiste raramente é o material — é ter um cronograma realista, medir os acertos e corrigir a rota quando um tópico não anda. Autonomia sem método vira estudo desorganizado; com método, funciona.",
  },
  {
    categoria: "Estudos",
    pergunta: "Como funciona o cronograma?",
    resposta:
      "Você diz quantas horas tem por dia e quantos dias por semana consegue estudar. O cronograma distribui as matérias ao longo da semana, com blocos de revisão em 1, 7 e 30 dias e um dia de descanso. Hoje ele gera o plano na hora, na tela; salvar o plano e marcar o que foi cumprido fica para uma próxima versão.",
  },
  {
    categoria: "Estudos",
    pergunta: "O conteúdo serve para outras provas além do ENEM?",
    resposta:
      "O Percurso é feito para o ENEM, e é só isso que ele promete. Como o conteúdo é o do ensino médio, boa parte dele reaparece em vestibulares e em provas de escola — mas o recorte das matérias, o peso dos assuntos, as provas do modo prova e a correção da redação seguem o ENEM. Quem usa para outra coisa está aproveitando a sobreposição, não um recurso que exista aqui.",
  },

  /* ---------- Provas e ENEM ---------- */
  {
    categoria: "Provas e ENEM",
    pergunta: "Como funciona a nota do ENEM pela TRI?",
    resposta:
      "A Teoria de Resposta ao Item considera não só quantas questões você acertou, mas quais. O modelo estima a dificuldade de cada item pelo desempenho de todos os participantes e penaliza padrões incoerentes, como acertar as difíceis e errar as fáceis, porque isso sugere chute. Na prática: garantir as questões fáceis e médias vale mais do que apostar nas difíceis.",
  },
  {
    categoria: "Provas e ENEM",
    pergunta: "As notas de corte listadas aqui são oficiais?",
    resposta:
      "Não. São referências aproximadas de edições recentes para ampla concorrência, úteis para você calibrar uma meta. Os valores reais mudam a cada processo seletivo e variam por campus, turno e modalidade de cota. Antes de decidir qualquer coisa, confira o edital da instituição.",
  },
  {
    categoria: "Provas e ENEM",
    pergunta: "Meu progresso no simulado fica salvo?",
    resposta:
      "Fica, se você tiver conta. A prova do ENEM guarda em qual questão você parou, o tempo de relógio e o que já respondeu — ao voltar, ela continua de onde estava, mesmo dias depois. A correção só aparece quando você entrega.",
  },

  /* ---------- Conta e plataforma ---------- */
  {
    categoria: "Conta e plataforma",
    pergunta: "Preciso criar uma conta?",
    resposta:
      "Para ler a comunidade e testar como visitante (60 minutos), não. Para salvar o progresso, montar o cronograma, fazer uma prova do ENEM e corrigir redação, sim — é o que garante que nada se perde ao fechar a aba.",
  },
  {
    categoria: "Conta e plataforma",
    pergunta: "Como faço login?",
    resposta:
      "Em Entrar, com e-mail e senha ou com a conta Google. Se você começou como visitante e criar a conta no mesmo navegador, todo o progresso continua na conta nova — mesmo id, mesmos simulados, mesmas redações.",
  },
  {
    categoria: "Conta e plataforma",
    pergunta: "Como acompanho meu desempenho?",
    resposta:
      "Na Visão geral você vê um resumo — sessões concluídas, questões respondidas e aproveitamento. Em Desempenho, o histórico completo e o aproveitamento por área. E no fim do seletor de conteúdo, em Matérias, o link \"Ver histórico por matéria\" abre quanto você já respondeu de cada uma.",
  },
  {
    categoria: "Conta e plataforma",
    pergunta: "Como altero meus dados?",
    resposta:
      "Em Perfil você edita o nome e as preferências de estudo (objetivo, horas por dia, dias por semana), que alimentam o cronograma. Foto e bio ficam no perfil da comunidade. Trocar o e-mail, redefinir a senha por dentro do site e apagar a conta ainda dependem de suporte manual.",
  },
] as const;
