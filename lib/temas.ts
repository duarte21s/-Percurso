import type { SupabaseClient } from "@supabase/supabase-js";

/** Quantas questões existem de um tema, e quantas já têm comentário escrito. */
export interface ContagemTema {
  total: number;
  comentadas: number;
}

/** A chave é `${materia_id}|${tema}` — o mesmo par que identifica o tema. */
export type ContagensPorTema = Record<string, ContagemTema>;

export function chaveTema(materiaId: string, tema: string): string {
  return `${materiaId}|${tema}`;
}

/**
 * Lê `vw_temas`, a contagem por conteúdo.
 *
 * Se a view não existir — quem ainda não rodou `supabase/temas.sql` —, conta
 * no cliente em vez de devolver vazio. Sem contagem a tela desabilita todos os
 * temas e parece quebrada, o que é bem pior que uma leitura a mais: são duas
 * colunas curtas de ~1.300 linhas, não o banco inteiro.
 */
export async function contagensPorTema(
  supabase: SupabaseClient
): Promise<ContagensPorTema> {
  const { data, error } = await supabase
    .from("vw_temas")
    .select("materia_id, tema, total, comentadas");

  if (!error && data) {
    const mapa: ContagensPorTema = {};
    for (const linha of data) {
      mapa[chaveTema(linha.materia_id as string, linha.tema as string)] = {
        total: (linha.total as number) ?? 0,
        comentadas: (linha.comentadas as number) ?? 0,
      };
    }
    return mapa;
  }

  return contagensSemView(supabase);
}

/**
 * Quantas questões existem em cada matéria, com ou sem tema marcado.
 *
 * Somar `vw_temas` não serve para isto: quase 500 questões de Matemática têm
 * matéria mas não têm tema — o classificador reconheceu a área e não o
 * assunto. Elas entram num simulado da matéria inteira, então precisam contar
 * aqui, senão a tela promete menos do que tem.
 *
 * São nove consultas HEAD paralelas, sem transferir linha nenhuma: só o
 * cabeçalho com a contagem. Mais barato que ler 1.800 ids para contar no
 * cliente, e não exige view nova.
 */
export async function contagensPorMateria(
  supabase: SupabaseClient,
  materiaIds: readonly string[]
): Promise<Record<string, number>> {
  const pares = await Promise.all(
    materiaIds.map(async (id) => {
      const { count } = await supabase
        .from("questoes")
        .select("*", { count: "exact", head: true })
        .eq("materia_id", id);
      return [id, count ?? 0] as const;
    })
  );

  return Object.fromEntries(pares);
}

/** Caminho de contingência: agrupa no cliente o que a view agruparia no banco. */
async function contagensSemView(
  supabase: SupabaseClient
): Promise<ContagensPorTema> {
  const mapa: ContagensPorTema = {};

  const [{ data: todas }, { data: comentadas }] = await Promise.all([
    supabase
      .from("questoes")
      .select("materia_id, tema")
      .not("tema", "is", null)
      .not("materia_id", "is", null)
      .limit(5000),
    supabase
      .from("questoes")
      .select("materia_id, tema")
      .not("tema", "is", null)
      .not("materia_id", "is", null)
      .neq("explicacao", "")
      .limit(5000),
  ]);

  for (const linha of todas ?? []) {
    const k = chaveTema(linha.materia_id as string, linha.tema as string);
    mapa[k] ??= { total: 0, comentadas: 0 };
    mapa[k].total++;
  }
  for (const linha of comentadas ?? []) {
    const k = chaveTema(linha.materia_id as string, linha.tema as string);
    mapa[k] ??= { total: 0, comentadas: 0 };
    mapa[k].comentadas++;
  }

  return mapa;
}
