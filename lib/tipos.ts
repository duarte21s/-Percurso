/* Tipos compartilhados entre servidor e cliente. */

export type Area = "exatas" | "natureza" | "humanas" | "linguagens";

export type Objetivo =
  | "enem"
  | "vestibular"
  | "concurso"
  | "militar"
  | "escola"
  | "graduacao";

export type Regiao =
  | "sudeste"
  | "sul"
  | "nordeste"
  | "norte"
  | "centro-oeste";

/**
 * Um assunto dentro da matéria.
 *
 * `incidencia` é exibida como barra, com o rótulo "Incidência histórica: N%".
 * Isso é uma afirmação sobre quantas vezes o assunto caiu — então só pode
 * existir onde o dado existe. As nove matérias de ensino médio herdaram os
 * números do conteúdo autoral original; as matérias criadas depois (concurso,
 * militar, cálculo, fundamental) não têm levantamento de incidência, e por
 * isso vêm com `null`. `null` não é zero: significa "não medido", e a
 * interface omite a barra em vez de desenhá-la vazia.
 */
export type Topico = readonly [titulo: string, incidencia: number | null];

export interface Materia {
  id: string;
  nome: string;
  glifo: string;
  area: Area;
  resumo: string;
  aulas: number;
  topicos: readonly Topico[];
  /**
   * Para quais objetivos esta matéria serve.
   *
   * Existe porque o banco deixou de ser só ensino médio: Cálculo I não
   * interessa a quem presta o ENEM, e Raciocínio lógico não interessa a quem
   * está no 2º ano da escola. Quem lê o campo hoje é o seletor de matérias do
   * Cronograma, que recorta a lista pelo objetivo escolhido no formulário.
   *
   * É a única lista de "matéria × objetivo" do projeto — `PESOS`, em
   * lib/cronograma.ts, guarda ORDEM de peso, não pertencimento.
   */
  objetivos: readonly Objetivo[];
}

/* ---------- faculdades ---------- */

/** Área do curso — usada no filtro da seção Faculdades. */
export type AreaCurso =
  | "saude"
  | "tecnologia"
  | "engenharia"
  | "humanas"
  | "negocios"
  | "exatas"
  | "design";

/**
 * Forma de ingresso. Cada uma tem escala de nota própria — ver `escalaOriginal`.
 *
 * Um curso costuma aceitar mais de uma via (a UnB entra por PAS e por SiSU, a
 * UFSC por vestibular próprio e por SiSU), por isso `Faculdade.formasIngresso`
 * é lista. Guardar uma via só fazia o curso sumir do filtro das outras.
 */
export type TipoIngresso =
  | "sisu"
  | "fuvest"
  | "vestibular-proprio"
  | "concurso-admissao"
  | "pas"
  | "enem-usp";

/**
 * Procedência do número exibido.
 *
 * `estimada` — índice comparativo construído à mão a partir da concorrência
 * historicamente conhecida do curso. Não é a nota do processo seletivo.
 *
 * `coletada` — nota real de ampla concorrência, importada de um acervo público
 * (ver scripts/importar-sisu.mjs e lib/conteudo/sisu-2025.json). É a nota que
 * o processo de fato usou, mas coletada por scraping de API não documentada,
 * não publicada pela instituição como edital — por isso não é `oficial`. O
 * próprio acervo-fonte se descreve como sem caráter oficial.
 *
 * `oficial` — publicada pela própria instituição ou banca (edital, resultado
 * oficial). Nenhum registro tem isso hoje: o projeto ainda não ingere fonte
 * primária nenhuma.
 */
export type Procedencia = "oficial" | "coletada" | "estimada";

/** Faixa de concorrência derivada de `notaReferencia`. Ver `classificaConcorrencia`. */
export type Concorrencia =
  | "extrema"
  | "muito-alta"
  | "alta"
  | "moderada"
  | "menor";

export interface Faculdade {
  sigla: string;
  nome: string;
  uf: string;
  regiao: Regiao;
  curso: string;
  area: AreaCurso;
  /**
   * Todas as vias de entrada aceitas pelo curso. O rótulo da tabela é derivado
   * daqui (ver `rotuloIngresso`), então filtro e texto exibido não divergem.
   */
  formasIngresso: readonly TipoIngresso[];
  /**
   * Índice comparativo 0–1000, construído para ordenar a tabela.
   * NÃO é nota de corte oficial — ver `procedencia`.
   */
  notaReferencia: number;
  /**
   * Nota real do processo seletivo, como texto formatado. `null` enquanto não
   * houver fonte real — oficial ou coletada — para este registro: preencher
   * com estimativa aqui faria um número inventado passar por dado de edital.
   */
  notaOriginal: string | null;
  /** Escala em que a nota oficial daquele processo é expressa. */
  escalaOriginal: string;
  anoReferencia: number;
  modalidade: string;
  procedencia: Procedencia;
  observacao: string;
}

/* ---------- banco ---------- */

export interface QuestaoPublica {
  id: string;
  materia_id: string;
  fonte: string;
  enunciado: string;
  opcoes: string[];
  dificuldade: "facil" | "media" | "dificil";
}

/** A questão completa, com gabarito. Nunca vai inteira para o cliente antes
 *  de a pessoa responder — o gabarito chega na resposta da API. */
export interface Questao extends QuestaoPublica {
  correta: number;
  explicacao: string;
  origem: "autoral" | "ia";
}

export interface Simulado {
  id: string;
  usuario_id: string;
  materia_filtro: string;
  questao_ids: string[];
  indice_atual: number;
  acertos: number;
  erros: number;
  status: "em_andamento" | "concluido";
  criado_em: string;
  atualizado_em: string;
  prova_id?: string | null;
  tema_filtro?: string | null;
  segundos?: number;
}

/* ---------- provas reais ---------- */

/** As quatro áreas do ENEM. A prova não é organizada por matéria: "Ciências
 *  da Natureza" mistura física, química e biologia no mesmo bloco. */
export type AreaEnem =
  | "linguagens"
  | "ciencias-humanas"
  | "ciencias-natureza"
  | "matematica";

export const NOME_DA_AREA: Record<AreaEnem, string> = {
  linguagens: "Linguagens e Códigos",
  "ciencias-humanas": "Ciências Humanas",
  "ciencias-natureza": "Ciências da Natureza",
  matematica: "Matemática",
};

export interface Prova {
  id: string;
  banca: string;
  nome: string;
  ano: number;
  total_questoes: number;
  tempo_minutos: number;
  fonte_url: string;
}

/** Questão de prova como ela chega ao cliente DURANTE o exame: sem `correta`
 *  e sem `explicacao`. O gabarito inteiro só sai na finalização. */
export interface QuestaoProva {
  id: string;
  numero: number;
  area: AreaEnem | null;
  idioma: string | null;
  fonte: string;
  enunciado: string;
  opcoes: string[];
  imagens: string[];
  opcoes_imagens: string[];
}

/** Uma linha do resultado, entregue só depois de a prova ser finalizada. */
export interface CorrecaoQuestao {
  questao_id: string;
  numero: number;
  area: AreaEnem | null;
  marcada: number | null;
  correta: number;
  acertou: boolean;
}

export interface ResultadoProva {
  acertos: number;
  erros: number;
  embranco: number;
  total: number;
  porArea: { area: AreaEnem; acertos: number; total: number }[];
  correcao: CorrecaoQuestao[];
}

export interface Resposta {
  questao_id: string;
  alternativa: number;
  acertou: boolean;
}

/** Recompensa de gamificação de uma atividade de estudo, para o aviso no
 *  instante. `conquistas` são os slugs concedidos agora (ver lib/gamificacao). */
export interface RecompensaEstudo {
  primeiraDoDia: boolean;
  chamaAtual: number;
  conquistas: string[];
}

/** O que a API devolve quando a pessoa marca uma alternativa. */
export interface Gabarito {
  correta: number;
  acertou: boolean;
  explicacao: string;
  acertos: number;
  erros: number;
  fim: boolean;
  /** Presente quando esta resposta acendeu a chama ou desbloqueou conquista. */
  recompensa?: RecompensaEstudo;
}

export interface Estatisticas {
  questoes: number;
  materias: number;
  provas: number;
}

/* ---------- comunidade ----------
   Modelos desenhados para trocar o mock por tabelas do Supabase sem tocar nos
   componentes: o que a interface consome são estes tipos, não o formato do
   mock. Datas em ISO 8601 (o banco devolve assim); o texto "há 2 h" é
   formatado na hora de exibir. */

export interface Autor {
  id: string;
  nome: string;
  /** Sem o "@" — a interface acrescenta. */
  username: string;
  /** Iniciais para o avatar tipográfico, usado quando não há foto. */
  iniciais: string;
  /** 0–360, gira o matiz do avatar tipográfico. Estável por usuário. */
  matiz: number;
  /** URL pública da foto de perfil, quando a pessoa subiu uma. */
  avatarUrl?: string | null;
  verificado?: boolean;
}

export type TipoPost = "pergunta" | "discussao" | "compartilhamento" | "dica";

export interface Comentario {
  id: string;
  autor: Autor;
  texto: string;
  criadoEm: string;
  curtidas: number;
  curtidoPorMim: boolean;
  /** Marcado pelo dono da pergunta como a resposta aceita. */
  aceito: boolean;
  /** Um nível de aninhamento. Threads mais fundas viram conversa ilegível. */
  respostas: Comentario[];
}

export interface Post {
  id: string;
  autor: Autor;
  tipo: TipoPost;
  /** Pergunta e discussão têm título; dica e compartilhamento nem sempre. */
  titulo?: string;
  texto: string;
  tags: string[];
  /** Bloco de código opcional, com a linguagem para rotular. */
  codigo?: { linguagem: string; conteudo: string };
  link?: { url: string; titulo: string; dominio: string };
  /**
   * Preenchido quando o post é uma dúvida ancorada numa questão específica:
   * ele some do feed geral e aparece dentro da questão, no Estudar e nas
   * provas. Sem valor = post do feed geral.
   */
  questaoId?: string;
  criadoEm: string;
  curtidas: number;
  curtidoPorMim: boolean;
  salvoPorMim: boolean;
  comentarios: Comentario[];
  /** Só para `pergunta`: marca que alguém respondeu de forma aceita. */
  resolvido?: boolean;
}

/** Reservado para fase posterior (grupos de estudo) — sem implementação no v1. */
export interface ComunidadeGrupo {
  id: string;
  nome: string;
  slug: string;
  glifo: string;
  membros: number;
  participando: boolean;
}

/** Reservado para fase posterior (assuntos em alta) — sem implementação no v1. */
export interface AssuntoEmAlta {
  id: string;
  nome: string;
  posts: number;
}

/** Reservado para fase posterior (notificações) — sem implementação no v1. */
export type TipoNotificacao =
  | "curtida"
  | "comentario"
  | "resposta"
  | "seguidor"
  | "mencao";

export interface Notificacao {
  id: string;
  tipo: TipoNotificacao;
  ator: Autor;
  /** Trecho do post envolvido, para dar contexto na lista. */
  contexto?: string;
  criadoEm: string;
  lida: boolean;
}

/** Abas do feed. `minhas` e `salvos` filtram pelo usuário da sessão. */
export type AbaComunidade =
  | "recentes"
  | "populares"
  | "perguntas"
  | "minhas"
  | "salvos";
