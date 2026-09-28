import "server-only";
import { unstable_cache } from "next/cache";
import type { SupabaseClient } from "@supabase/supabase-js";
import { criaClienteAdmin } from "@/lib/supabase/admin";
import {
  contagensPorTema,
  leContagensPorTema,
  type ContagensPorTema,
} from "@/lib/temas";

/* =========================================================================
   A contagem de questões por tema, guardada entre requisições.

   É a mesma para todo mundo — conta o acervo, não a pessoa — e era refeita a
   cada clique na aba Matérias e em cada página de matéria. Medido em
   produção: essas duas telas levavam de 3,4 a 4,8 s para responder, contra
   0,5 a 1,1 s das outras abas, e a diferença inteira estava nesta contagem.

   Guardada por cinco minutos no cache de dados do Next: o primeiro pedido
   conta, os seguintes leem pronto, e depois de vencer o próximo recebe o
   valor guardado enquanto a contagem nova roda por trás. Cinco minutos é o
   atraso máximo para uma questão nova aparecer no número — o acervo cresce
   por lote, não por segundo.

   Só vai para o cache contagem feita pelo leitor do acervo (service role,
   sem sessão, igual para todos) e inteira. Parcial — a view falhou e a
   contingência parou no meio — vai para a tela desta vez e fica fora do
   cache: guardada, ficaria errada para todo mundo até vencer.
   ========================================================================= */

const VALIDADE_S = 300;

/* O cache guarda tudo o que a função devolve; o jeito de NÃO guardar é ela
   lançar. O erro leva junto o que deu para contar. É um Error com uma marca,
   e não uma subclasse: o `instanceof` de subclasse de Error não sobrevive a
   toda transpilação. */
type ForaDoCache = Error & { foraDoCache: true; contagens: ContagensPorTema | null };

function foraDoCache(contagens: ContagensPorTema | null): ForaDoCache {
  return Object.assign(new Error("contagem fora do cache"), {
    foraDoCache: true as const,
    contagens,
  });
}

function ehForaDoCache(e: unknown): e is ForaDoCache {
  return e instanceof Error && (e as Partial<ForaDoCache>).foraDoCache === true;
}

const contagensGuardadas = unstable_cache(
  async (): Promise<ContagensPorTema> => {
    const admin = criaClienteAdmin();
    if (!admin) throw foraDoCache(null);
    const { contagens, completa } = await leContagensPorTema(admin);
    if (!completa) throw foraDoCache(contagens);
    return contagens;
  },
  ["contagens-por-tema"],
  { revalidate: VALIDADE_S, tags: ["acervo"] }
);

/**
 * Contagem por tema para as páginas. `sessao` só é usada sem a service role,
 * e aí a leitura é direta, sem cache — como era antes.
 */
export async function contagensDoAcervo(
  sessao: SupabaseClient
): Promise<ContagensPorTema> {
  try {
    return await contagensGuardadas();
  } catch (e) {
    if (ehForaDoCache(e)) return e.contagens ?? contagensPorTema(sessao);
    throw e;
  }
}
