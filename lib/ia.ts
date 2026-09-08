import {
  ErroGeracao,
  anthropicConfigurado,
  explicaQuestao as explicaComClaude,
  type PedidoExplicacao,
} from "./anthropic";
import {
  explicaQuestaoGemini,
  corrigeRedacaoGemini,
  geminiConfigurado,
  MODELO_GEMINI_RESERVA,
} from "./gemini";
import {
  corrigeRedacao as corrigeComClaude,
  type NotaRedacao,
  type PedidoRedacao,
} from "./redacao";

/* =========================================================================
   Camada de IA — duas APIs trabalhando juntas, sem uma substituir a outra.

   Divisão por tarefa (o modo `auto` de cada uma):

   | tarefa                   | 1ª escolha | reserva  | por quê                    |
   |--------------------------|------------|----------|----------------------------|
   | explicar questão do ENEM | Gemini     | Claude   | alto volume, sob demanda,  |
   |                          |            |          | pós-prova, gabarito dado   |
   | corrigir redação         | Claude     | Gemini   | precisa de visão e do      |
   |                          |            |          | rigor da grade do INEP     |

   Fallback: tenta os provedores configurados na ordem e passa para o
   próximo quando um falha (rede, cota estourada, resposta vazia). Se só um
   tem chave, usa esse. Se nenhum, erro 503 dizendo o que falta.

   Controle por ambiente (cada tarefa tem a sua):
     IA_EXPLICACAO_PROVEDOR = auto | gemini | anthropic   (padrão: auto)
     IA_REDACAO_PROVEDOR    = auto | gemini | anthropic   (padrão: auto)
       auto      → ordem da tabela acima, com fallback
       gemini    → só Gemini
       anthropic → só Claude
   ========================================================================= */

/* `gemini-reserva` é o MESMO Gemini com outro modelo. Entra como provedor
   separado porque o mecanismo de fallback já raciocina em provedores, e
   sobrecarga no Google é por modelo, não por conta: quando o flash está
   congestionado, o lite quase nunca está.

   Existe porque o único plano B era a Anthropic, cuja API é cobrança separada
   da assinatura do Claude. Sem essa chave, "fallback" era lista de um item. */
export type Provedor = "gemini" | "gemini-reserva" | "anthropic";

export interface ExplicacaoGerada {
  texto: string;
  provedor: Provedor;
}

export interface RedacaoCorrigida {
  nota: NotaRedacao;
  provedor: Provedor;
}

const CONFIGURADO: Record<Provedor, boolean> = {
  gemini: geminiConfigurado,
  /* Mesma chave do principal: se um está configurado, o outro está. */
  "gemini-reserva": geminiConfigurado,
  anthropic: anthropicConfigurado,
};

/** Ordem de tentativa a partir da variável de ambiente, já filtrada pelos
 *  provedores que têm chave. Vazio = nenhum provedor utilizável. */
function ordemDeProvedores(envVar: string, auto: Provedor[]): Provedor[] {
  const modo = process.env[envVar]?.trim().toLowerCase() || "auto";
  const preferencia: Provedor[] =
    modo === "anthropic"
      ? ["anthropic"]
      : modo === "gemini"
        ? ["gemini", "gemini-reserva"]
        : auto;
  return preferencia.filter((p) => CONFIGURADO[p]);
}

function erroSemProvedor(envVar: string): ErroGeracao {
  const modo = process.env[envVar]?.trim().toLowerCase() || "auto";
  const msg =
    modo === "gemini"
      ? `${envVar}=gemini mas GEMINI_API_KEY não está configurada.`
      : modo === "anthropic"
        ? `${envVar}=anthropic mas ANTHROPIC_API_KEY não está configurada.`
        : "Nenhum provedor de IA configurado. Preencha GEMINI_API_KEY ou ANTHROPIC_API_KEY em .env.local.";
  return new ErroGeracao(msg, 503);
}

/** Roda `impls[provedor](arg)` na ordem dada, caindo para o próximo a cada
 *  falha. Devolve o primeiro sucesso com o nome do provedor que o produziu. */
async function comFallback<A, R>(
  ordem: Provedor[],
  impls: Record<Provedor, (arg: A) => Promise<R>>,
  arg: A,
  semProvedor: () => ErroGeracao
): Promise<{ resultado: R; provedor: Provedor }> {
  if (ordem.length === 0) throw semProvedor();

  const falhas: string[] = [];
  let primeiroErro: ErroGeracao | null = null;

  for (const provedor of ordem) {
    try {
      const resultado = await impls[provedor](arg);
      return { resultado, provedor };
    } catch (e) {
      const erro =
        e instanceof ErroGeracao
          ? e
          : new ErroGeracao(e instanceof Error ? e.message : "erro desconhecido");
      primeiroErro ??= erro;
      falhas.push(`${provedor}: ${erro.message}`);
      // segue para o próximo provedor da ordem, se houver
    }
  }

  throw new ErroGeracao(
    ordem.length > 1
      ? `Nenhum provedor de IA concluiu. ${falhas.join(" | ")}`
      : falhas[0],
    primeiroErro?.status ?? 502
  );
}

const EXPLICAM: Record<Provedor, (p: PedidoExplicacao) => Promise<string>> = {
  gemini: (p) => explicaQuestaoGemini(p),
  "gemini-reserva": (p) => explicaQuestaoGemini(p, MODELO_GEMINI_RESERVA),
  anthropic: explicaComClaude,
};

const CORRIGEM: Record<Provedor, (p: PedidoRedacao) => Promise<NotaRedacao>> = {
  gemini: (p) => corrigeRedacaoGemini(p),
  "gemini-reserva": (p) => corrigeRedacaoGemini(p, MODELO_GEMINI_RESERVA),
  anthropic: corrigeComClaude,
};

export async function explicaQuestao(
  pedido: PedidoExplicacao
): Promise<ExplicacaoGerada> {
  const ordem = ordemDeProvedores("IA_EXPLICACAO_PROVEDOR", ["gemini", "gemini-reserva", "anthropic"]);
  const { resultado, provedor } = await comFallback(
    ordem,
    EXPLICAM,
    pedido,
    () => erroSemProvedor("IA_EXPLICACAO_PROVEDOR")
  );
  return { texto: resultado, provedor };
}

export async function corrigeRedacao(
  pedido: PedidoRedacao
): Promise<RedacaoCorrigida> {
  const ordem = ordemDeProvedores("IA_REDACAO_PROVEDOR", ["anthropic", "gemini"]);
  const { resultado, provedor } = await comFallback(
    ordem,
    CORRIGEM,
    pedido,
    () => erroSemProvedor("IA_REDACAO_PROVEDOR")
  );
  return { nota: resultado, provedor };
}

/**
 * Traduz uma falha de geração para o que o aluno deve ler.
 *
 * A mensagem de `ErroGeracao` é diagnóstico: diz qual fornecedor falhou e
 * repete o texto que ele devolveu, em inglês. Isso serve para o log e não
 * serve para ninguém que está tentando entender uma questão — o aluno viu
 * "O Gemini está sobrecarregado agora: This model is currently experiencing
 * high demand", que nomeia uma peça de infraestrutura que não é problema dele
 * e não diz o que fazer.
 *
 * O que ele precisa saber é só: passou, é temporário, tente de novo. O detalhe
 * fica no servidor.
 */
export function mensagemParaAluno(erro: unknown, oQue: string): string {
  const status = erro instanceof ErroGeracao ? erro.status : 502;
  if (status === 429) {
    return `O gerador de ${oQue} atingiu o limite de uso do dia. Tente de novo mais tarde.`;
  }
  if (status === 503) {
    return `O gerador de ${oQue} está congestionado agora. Tente de novo em alguns instantes.`;
  }
  return `Não consegui gerar ${oQue} agora. Tente de novo em alguns instantes.`;
}
