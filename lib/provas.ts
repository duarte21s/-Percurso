import { criaClienteServidor } from "@/lib/supabase/server";
import type { AreaEnem, Prova, QuestaoProva } from "@/lib/tipos";

/* =========================================================================
   Acesso às provas reais.

   A regra que rege este arquivo: `correta` e `explicacao` NUNCA são
   selecionadas aqui. O modo prova imita o exame de verdade — a pessoa
   responde as 180 e só então vê o resultado — e a única forma de garantir
   isso é o gabarito não sair do servidor antes da finalização. Se ele viesse
   junto das questões, bastaria abrir o DevTools.
   ========================================================================= */

const COLUNAS_PUBLICAS =
  "id, numero, area, idioma, fonte, enunciado, opcoes, imagens, opcoes_imagens";

export async function listaProvas(): Promise<Prova[]> {
  const supabase = await criaClienteServidor();
  if (!supabase) return [];

  const { data } = await supabase
    .from("provas")
    .select("id, banca, nome, ano, total_questoes, tempo_minutos, fonte_url")
    .order("ano", { ascending: false });

  return (data as Prova[]) ?? [];
}

export async function buscaProva(id: string): Promise<Prova | null> {
  const supabase = await criaClienteServidor();
  if (!supabase) return null;

  const { data } = await supabase
    .from("provas")
    .select("id, banca, nome, ano, total_questoes, tempo_minutos, fonte_url")
    .eq("id", id)
    .maybeSingle();

  return (data as Prova) ?? null;
}

/**
 * Questões de uma prova, na ordem do caderno.
 *
 * `idioma` filtra as cinco questões de língua estrangeira: o ENEM aplica
 * inglês e espanhol nas mesmas posições 1 a 5, e trazer as duas deixaria a
 * prova com 185 questões e dois enunciados no mesmo número.
 */
export async function questoesDaProva(
  provaId: string,
  idioma: "ingles" | "espanhol" = "ingles"
): Promise<QuestaoProva[]> {
  const supabase = await criaClienteServidor();
  if (!supabase) return [];

  const { data } = await supabase
    .from("questoes")
    .select(COLUNAS_PUBLICAS)
    .eq("prova_id", provaId)
    // "" são as 175 comuns; o idioma escolhido traz as cinco de língua.
    .in("idioma", ["", idioma])
    .order("numero", { ascending: true });

  return (data as QuestaoProva[]) ?? [];
}

/** Quantas questões cada área tem na prova — alimenta a lista sem baixar os
 *  180 enunciados só para contar. */
export async function resumoPorArea(
  provaId: string
): Promise<{ area: AreaEnem; total: number }[]> {
  const supabase = await criaClienteServidor();
  if (!supabase) return [];

  const { data } = await supabase
    .from("questoes")
    .select("area")
    .eq("prova_id", provaId)
    .eq("idioma", "");

  const conta = new Map<AreaEnem, number>();
  for (const linha of (data ?? []) as { area: AreaEnem | null }[]) {
    if (!linha.area) continue;
    conta.set(linha.area, (conta.get(linha.area) ?? 0) + 1);
  }

  return [...conta.entries()].map(([area, total]) => ({ area, total }));
}
