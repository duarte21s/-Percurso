import type { SupabaseClient } from "@supabase/supabase-js";

/** Quantas questões existem de um tema, e quantas já têm comentário escrito. */
export interface ContagemTema {
  total: number;
  comentadas: number;
}

/** A chave é `${materia_id}|${tema}` — o mesmo par que identifica o tema. */
export type ContagensPorTema = Record<string, ContagemTema>;

/** Teto de linhas por resposta do PostgREST no Supabase. */
const PAGINA = 1000;

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

  /* PAGINADO, e não `.limit(5000)`.
   *
   * O PostgREST tem um teto próprio de linhas por resposta — 1.000 no padrão
   * do Supabase — e ele vence qualquer `.limit()` maior. Pedir 5.000 devolvia
   * 1.000 em silêncio, sem erro nenhum.
   *
   * Com 9.804 questões no banco, isso fazia a contagem enxergar 20 dos 141
   * temas. Os outros 121 apareciam com zero questões e a tela os DESABILITAVA
   * — o seletor mostrava os 15 conteúdos de cada matéria e não deixava clicar
   * em quase nenhum. Parecia banco vazio; era teto de paginação.
   *
   * Ler em blocos de 1.000 resolve. `order` é obrigatório: sem ordenação
   * estável, duas páginas podem repetir e pular linhas. */
  async function lerTudo(comExplicacao: boolean) {
    const linhas: { materia_id: string; tema: string }[] = [];
    for (let de = 0; ; de += PAGINA) {
      let q = supabase
        .from("questoes")
        .select("materia_id, tema")
        .not("tema", "is", null)
        .not("materia_id", "is", null);
      if (comExplicacao) q = q.neq("explicacao", "");

      const { data, error } = await q
        .order("id", { ascending: true })
        .range(de, de + PAGINA - 1);

      if (error || !data || data.length === 0) break;
      linhas.push(...(data as { materia_id: string; tema: string }[]));
      if (data.length < PAGINA) break;
      /* Trava de segurança: se algo der errado na paginação, é melhor uma
         contagem incompleta do que um laço infinito na renderização. */
      if (linhas.length > 50_000) break;
    }
    return linhas;
  }

  const [todas, comentadas] = await Promise.all([lerTudo(false), lerTudo(true)]);

  for (const linha of todas) {
    const k = chaveTema(linha.materia_id as string, linha.tema as string);
    mapa[k] ??= { total: 0, comentadas: 0 };
    mapa[k].total++;
  }
  for (const linha of comentadas) {
    const k = chaveTema(linha.materia_id as string, linha.tema as string);
    mapa[k] ??= { total: 0, comentadas: 0 };
    mapa[k].comentadas++;
  }

  return mapa;
}
