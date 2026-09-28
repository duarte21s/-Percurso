"use server";

import { revalidatePath } from "next/cache";
import { criaClienteServidor } from "@/lib/supabase/server";
import { visitanteExpirou } from "@/lib/sessao";
import type { Cronograma } from "@/lib/cronograma";
import {
  esquemaEntrada,
  montaPlano,
  normalizaSelecao,
  type EntradaSalva,
} from "@/lib/cronograma-salvo";

export type ResultadoSalvar =
  | { ok: true; entrada: EntradaSalva; plano: Cronograma; atualizadoEm: string }
  | { ok: false; erro: string; sessaoAcabou?: boolean };

export type ResultadoExcluir =
  | { ok: true }
  | { ok: false; erro: string; sessaoAcabou?: boolean };

/**
 * Quem está logado, conferido no servidor de autenticação do Supabase.
 * O que a tela diz sobre a pessoa não entra em lugar nenhum daqui.
 */
async function sessaoAtual() {
  const supabase = await criaClienteServidor();
  if (!supabase) {
    return {
      ok: false,
      erro: "O Supabase ainda não foi configurado neste projeto.",
      sessaoAcabou: false,
    } as const;
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      ok: false,
      erro: "Sua sessão acabou. Entre de novo para salvar o cronograma.",
      sessaoAcabou: true,
    } as const;
  }
  if (visitanteExpirou(user)) {
    return {
      ok: false,
      erro: "Seu tempo de visitante acabou. Crie uma conta para guardar o cronograma.",
      sessaoAcabou: true,
    } as const;
  }

  return { ok: true, supabase, user } as const;
}

/**
 * Cria ou atualiza o cronograma de quem está logado.
 *
 * O corpo não leva `usuario_id`, e isso é regra: o banco preenche o dono com
 * auth.uid() (default da coluna) e nem concede a coluna em INSERT ou UPDATE.
 * O `upsert` com `onConflict: "usuario_id"` transforma "salvar de novo" em
 * atualização da mesma linha, e o unique da tabela impede uma segunda.
 */
export async function salvarCronograma(bruto: unknown): Promise<ResultadoSalvar> {
  const sessao = await sessaoAtual();
  if (!sessao.ok) {
    return { ok: false, erro: sessao.erro, sessaoAcabou: sessao.sessaoAcabou };
  }

  const lido = esquemaEntrada.safeParse(bruto);
  if (!lido.success) {
    return {
      ok: false,
      erro: "Confira as horas por dia, os dias por semana e as matérias escolhidas.",
    };
  }

  const entrada: EntradaSalva = {
    horas: lido.data.horas,
    dias: lido.data.dias,
    selecao: normalizaSelecao(lido.data.selecao),
  };
  const plano = montaPlano(entrada);

  const { data, error } = await sessao.supabase
    .from("cronogramas")
    .upsert(
      {
        horas_dia: entrada.horas,
        dias_semana: entrada.dias,
        selecao: entrada.selecao,
        plano,
      },
      { onConflict: "usuario_id", defaultToNull: false }
    )
    .select("atualizado_em")
    .single();

  if (error || !data) {
    return {
      ok: false,
      erro: "Não consegui salvar o cronograma agora. Tente de novo em instantes.",
    };
  }

  revalidatePath("/app/cronograma");
  return { ok: true, entrada, plano, atualizadoEm: String(data.atualizado_em) };
}

/**
 * Exclui o cronograma de quem está logado.
 *
 * O RLS só deixa apagar a linha do dono. O filtro por `user.id`, que vem do
 * `getUser()` acima, deixa isso explícito e evita um DELETE sem WHERE.
 */
export async function excluirCronograma(): Promise<ResultadoExcluir> {
  const sessao = await sessaoAtual();
  if (!sessao.ok) {
    return { ok: false, erro: sessao.erro, sessaoAcabou: sessao.sessaoAcabou };
  }

  const { error } = await sessao.supabase
    .from("cronogramas")
    .delete()
    .eq("usuario_id", sessao.user.id);

  if (error) {
    return { ok: false, erro: "Não consegui excluir o cronograma agora. Tente de novo." };
  }

  revalidatePath("/app/cronograma");
  return { ok: true };
}
