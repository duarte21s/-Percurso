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
      "Uma plataforma de estudos para ENEM, vestibulares, concursos públicos, carreiras militares e reforço escolar. Reúne num lugar só um banco de questões comentadas, as provas reais do ENEM em modo prova, correção de redação nas cinco competências do INEP, um cronograma e uma comunidade. Não é um site de videoaulas.",
  },
  {
    categoria: "Sobre o Percurso",
    pergunta: "Para quem o Percurso foi feito?",
    resposta:
      "Para o estudante de ensino médio que vai prestar ENEM ou vestibular, para quem se prepara para concurso público ou carreira militar, e para quem quer reforço do 6º ao 9º ano. São nove matérias de ensino médio com banco de questões comentadas, mais matérias criadas por objetivo.",
  },
  {
    /* Esta resposta prometia "direito e legislação, nos formatos de Cebraspe,
       FGV e Cesgranrio" e um "treino específico" do item de certo ou errado.
       Nada disso existe: uma busca por banca no campo `fonte` das questões
       devolve zero para as três, não há matéria de direito nem de legislação,
       e todas as questões do site são de múltipla escolha. */
    categoria: "Sobre o Percurso",
    pergunta: "Serve para concurso público também?",
    resposta:
      "Em parte, e vale saber em qual parte. Em Questões você encontra português, raciocínio lógico, informática básica e estatística — a base que quase todo edital cobra na prova objetiva. O que não existe aqui é direito, legislação e questão de banca: nenhuma questão do site foi aplicada por Cebraspe, FGV ou Cesgranrio, e todas são de múltipla escolha, sem o item de certo ou errado. Para as provas aplicadas, o acervo do Cebraspe é público e gratuito.",
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
      "Você diz o seu objetivo, quantas horas tem por dia e quantos dias por semana consegue estudar. O cronograma distribui as matérias ao longo da semana, com blocos de revisão em 1, 7 e 30 dias e um dia de descanso. Hoje ele gera o plano na hora, na tela; salvar o plano e marcar o que foi cumprido fica para uma próxima versão.",
  },
  {
    categoria: "Estudos",
    pergunta: "Posso estudar para ENEM e vestibular ao mesmo tempo?",
    resposta:
      "Pode. O conteúdo de ensino médio é o mesmo — o que muda é o recorte e a forma da prova. Escolha o objetivo no cronograma e ajuste as matérias; nada impede treinar questões de qualquer assunto a qualquer momento.",
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
      "Na Visão geral você vê um resumo — sessões concluídas, questões respondidas e aproveitamento. Em Desempenho, o histórico completo e o aproveitamento por área. Em Matérias, quanto você já respondeu de cada uma.",
  },
  {
    categoria: "Conta e plataforma",
    pergunta: "Como altero meus dados?",
    resposta:
      "Em Perfil você edita o nome e as preferências de estudo (objetivo, horas por dia, dias por semana), que alimentam o cronograma. Foto e bio ficam no perfil da comunidade. Trocar o e-mail, redefinir a senha por dentro do site e apagar a conta ainda dependem de suporte manual.",
  },
] as const;
