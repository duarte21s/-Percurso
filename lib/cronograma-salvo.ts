import { z } from "zod";
import type { SupabaseClient } from "@supabase/supabase-js";
import { materiasDoObjetivo } from "@/lib/conteudo/materias";
import { geraCronograma, type Cronograma, type Selecao } from "@/lib/cronograma";

/* =========================================================================
   Cronograma salvo na conta.

   A tabela é public.cronogramas (supabase/cronogramas.sql): uma linha por
   pessoa, com o dono preenchido pelo próprio banco a partir de auth.uid().
   Este arquivo cuida do que o app faz em volta disso: validar o que a tela
   manda, gerar a semana e ler de volta o que está salvo.

   Duas decisões que valem saber antes de mexer:

   1. A semana é gerada no servidor, a partir das três entradas. A tela manda
      horas, dias e matérias, nunca o plano pronto. Assim o que fica salvo é
      sempre algo que o gerador produziria.

   2. A seleção é normalizada para a ordem do catálogo. O gerador desempata
      pela ordem das chaves, e o jsonb do Postgres não guarda ordem de chave.
      Sem normalizar, o mesmo cronograma relido do banco poderia sair com os
      blocos em outra ordem.
   ========================================================================= */

/** O site trata só do ENEM; ver lib/cronograma.ts. */
const OBJETIVO = "enem" as const;

/** O que a tela manda para salvar. O dono não está aqui, e não pode estar. */
export interface EntradaSalva {
  horas: number;
  dias: number;
  selecao: Selecao;
}

/** Os mesmos limites dos controles da tela e das CHECK da tabela. */
export const esquemaEntrada = z.object({
  horas: z.number().int().min(1).max(10),
  dias: z.number().int().min(3).max(7),
  selecao: z.record(z.string().max(80), z.array(z.string().max(200)).max(40)),
});

/**
 * Deixa na seleção só o que o formulário oferece: as matérias do ENEM e, em
 * cada uma, assuntos que existem no catálogo, na ordem do catálogo e sem
 * repetição. O que vier fora disso é descartado.
 */
export function normalizaSelecao(bruta: Record<string, readonly string[]>): Selecao {
  const limpa: Selecao = {};
  for (const materia of materiasDoObjetivo(OBJETIVO)) {
    if (!Object.hasOwn(bruta, materia.id)) continue;
    const temas = bruta[materia.id];
    if (!Array.isArray(temas)) continue;
    const pedidos = new Set(temas);
    limpa[materia.id] = materia.topicos
      .map(([titulo]) => titulo)
      .filter((titulo) => pedidos.has(titulo));
  }
  return limpa;
}

/** A semana, gerada a partir de entradas já validadas. */
export function montaPlano(entrada: EntradaSalva): Cronograma {
  return geraCronograma({ objetivo: OBJETIVO, ...entrada });
}

/* A coluna `plano` volta do banco como JSON solto. Quem grava pela API, sem
   passar pelo site, consegue pôr ali qualquer objeto dentro do teto de tamanho
   da tabela. Por isso o plano é conferido ao ler e, se não servir, é gerado de
   novo a partir das entradas, que o banco já valida. */
const esquemaBloco = z.object({
  tipo: z.enum(["materia", "revisao", "redacao", "descanso"]),
  duracao: z.string().max(16),
  rotulo: z.string().max(200),
  tema: z.string().max(200).optional(),
  distancia: z.string().max(60).optional(),
});

const esquemaPlano = z.object({
  objetivo: z.enum(["enem", "vestibular", "concurso", "militar", "escola", "graduacao"]),
  rotuloObjetivo: z.string().max(40),
  horasSemana: z.number().int().min(0).max(70),
  horasMes: z.number().int().min(0).max(400),
  dias: z
    .array(z.object({ nome: z.string().max(20), blocos: z.array(esquemaBloco).max(16) }))
    .length(7),
  distribuicao: z
    .array(
      z.object({
        id: z.string().max(80),
        nome: z.string().max(120),
        horas: z.number().int().min(0).max(70),
        temas: z.array(z.string().max(200)).max(40),
      })
    )
    .max(40),
  resumo: z.object({
    materia: z.number().int().min(0).max(70),
    revisao: z.number().int().min(0).max(70),
    redacao: z.number().int().min(0).max(70),
  }),
});

const esquemaLinha = z.object({
  horas_dia: z.number().int().min(1).max(10),
  dias_semana: z.number().int().min(3).max(7),
  selecao: z.record(z.string(), z.array(z.string())).catch({}),
  plano: z.unknown(),
  atualizado_em: z.string(),
});

export interface CronogramaSalvo {
  entrada: EntradaSalva;
  plano: Cronograma;
  /** Data do último salvamento, em ISO 8601, como veio do banco. */
  atualizadoEm: string;
}

export type LeituraCronograma =
  | { estado: "salvo"; salvo: CronogramaSalvo }
  | { estado: "vazio" }
  | { estado: "indisponivel" };

/**
 * Lê o cronograma de quem está logado.
 *
 * `usuarioId` vem do `getUser()` do servidor, nunca da tela. O filtro é
 * redundante com o RLS, que já só devolve a linha do dono; ele fica para a
 * consulta usar o índice do unique e para a intenção ficar escrita.
 */
export async function leCronogramaSalvo(
  supabase: SupabaseClient,
  usuarioId: string
): Promise<LeituraCronograma> {
  const { data, error } = await supabase
    .from("cronogramas")
    .select("horas_dia, dias_semana, selecao, plano, atualizado_em")
    .eq("usuario_id", usuarioId)
    .maybeSingle();

  if (error) return { estado: "indisponivel" };
  if (!data) return { estado: "vazio" };

  const linha = esquemaLinha.safeParse(data);
  if (!linha.success) return { estado: "indisponivel" };

  const entrada: EntradaSalva = {
    horas: linha.data.horas_dia,
    dias: linha.data.dias_semana,
    selecao: normalizaSelecao(linha.data.selecao),
  };
  const plano = esquemaPlano.safeParse(linha.data.plano);

  return {
    estado: "salvo",
    salvo: {
      entrada,
      plano: plano.success ? plano.data : montaPlano(entrada),
      atualizadoEm: linha.data.atualizado_em,
    },
  };
}
