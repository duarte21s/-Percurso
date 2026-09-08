import type { SupabaseClient } from "@supabase/supabase-js";
import type { RecompensaEstudo } from "@/lib/tipos";

/* =========================================================================
   Gamificação — Chama de Estudos, XP, níveis e conquistas.

   As regras de concessão (o que dá XP, quando cai um escudo, quais
   conquistas) vivem em `supabase/gamificacao.sql`, nas funções `security
   definer`. Aqui é a fachada que as rotas chamam + a lista de conquistas
   para exibir (nome, emblema, descrição).
   ========================================================================= */

/* ---------- níveis ---------- */

/** Nível a partir do XP: nível N exige 50·N² de XP.
 *  (0→lv0, 50→lv1, 200→lv2, 450→lv3, 1250→lv5, 5000→lv10) */
export function nivelDe(xp: number): number {
  return Math.floor(Math.sqrt(Math.max(0, xp) / 50));
}

export function xpDoNivel(n: number): number {
  return 50 * n * n;
}

/** Progresso dentro do nível atual: { nivel, atual, faltam, pct }. */
export function progressoNivel(xp: number): {
  nivel: number;
  noNivel: number;
  doNivel: number;
  pct: number;
} {
  const nivel = nivelDe(xp);
  const base = xpDoNivel(nivel);
  const topo = xpDoNivel(nivel + 1);
  const noNivel = xp - base;
  const doNivel = topo - base;
  return { nivel, noNivel, doNivel, pct: Math.round((noNivel / doNivel) * 100) };
}

/* ---------- conquistas (exibição) ---------- */

export interface Conquista {
  slug: string;
  nome: string;
  emblema: string;
  descricao: string;
  /** Título que a conquista libera para o perfil, se houver. */
  titulo?: string;
}

/** A ordem é a de exibição. Os slugs batem com `verifica_conquistas` no SQL. */
export const CONQUISTAS: Conquista[] = [
  { slug: "iniciante", nome: "Iniciante", emblema: "🥉", descricao: "Primeira questão respondida." },
  { slug: "determinado", nome: "Determinado", emblema: "🔥", descricao: "7 dias seguidos de estudo.", titulo: "Determinado" },
  { slug: "cem_questoes", nome: "Cem Questões", emblema: "💯", descricao: "100 questões respondidas." },
  { slug: "imparavel", nome: "Imparável", emblema: "⚡", descricao: "30 dias seguidos de estudo.", titulo: "Imparável" },
  { slug: "centenario", nome: "Centenário", emblema: "🗿", descricao: "100 dias seguidos de estudo.", titulo: "Centenário" },
  { slug: "mestre_questoes", nome: "Mestre das Questões", emblema: "🧠", descricao: "1.000 questões respondidas.", titulo: "Mestre das Questões" },
  { slug: "lenda", nome: "Lenda dos Estudos", emblema: "🏆", descricao: "365 dias de consistência.", titulo: "Lenda dos Estudos" },
];

export const CONQUISTA_POR_SLUG: Record<string, Conquista> = Object.fromEntries(
  CONQUISTAS.map((c) => [c.slug, c])
);

/** Títulos que a pessoa pode escolher exibir, dado o que já conquistou. */
export function titulosDisponiveis(slugs: string[]): string[] {
  return CONQUISTAS.filter((c) => c.titulo && slugs.includes(c.slug)).map(
    (c) => c.titulo as string
  );
}

/* ---------- Chama ---------- */

export type EstadoChamaVisual =
  | "ativa"
  | "em_risco"
  | "quase_apagando"
  | "apagada";

export interface EstadoChama {
  atual: number;
  perdida: number;
  melhor: number;
  estudou_hoje: boolean;
  escudos: number;
  estado: EstadoChamaVisual;
  hora_sp: number;
}

const CHAMA_PADRAO: EstadoChama = {
  atual: 0,
  perdida: 0,
  melhor: 0,
  estudou_hoje: false,
  escudos: 0,
  estado: "em_risco",
  hora_sp: 0,
};

/** Estado da chama de um usuário, para exibir. Nunca lança — devolve o padrão
 *  se a tabela ainda não existe ou o RPC falha. */
export async function estadoChama(
  supabase: SupabaseClient,
  uid: string
): Promise<EstadoChama> {
  const { data, error } = await supabase.rpc("estado_chama", { p_uid: uid });
  if (error || !data) return CHAMA_PADRAO;
  return { ...CHAMA_PADRAO, ...(data as Partial<EstadoChama>) };
}

const RECOMPENSA_VAZIA: RecompensaEstudo = {
  primeiraDoDia: false,
  chamaAtual: 0,
  conquistas: [],
};

/** Marca atividade de estudo do dia e revê conquistas. Chamada pelas rotas de
 *  estudo depois de gravar a resposta/correção. Silenciosa: um erro aqui não
 *  pode derrubar a ação principal (responder a questão) — devolve a recompensa
 *  vazia. */
export async function registrarAtividade(
  supabase: SupabaseClient,
  tipo: "questao" | "prova" | "redacao"
): Promise<RecompensaEstudo> {
  try {
    const { data: r } = await supabase.rpc("registrar_atividade", {
      p_tipo: tipo,
    });
    const { data: novas } = await supabase.rpc("verifica_conquistas");
    return {
      primeiraDoDia: Boolean(
        (r as { primeira_do_dia?: boolean } | null)?.primeira_do_dia
      ),
      chamaAtual: Number((r as { atual?: number } | null)?.atual ?? 0),
      conquistas: Array.isArray(novas) ? (novas as string[]) : [],
    };
  } catch {
    return RECOMPENSA_VAZIA;
  }
}
