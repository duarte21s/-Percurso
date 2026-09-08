import Anthropic from "@anthropic-ai/sdk";
import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod";
import { z } from "zod";
import { ErroGeracao, MODELO, anthropicConfigurado } from "./anthropic";

/* =========================================================================
   Correção da redação nas cinco competências do ENEM.

   A grade é a oficial do INEP. Cada competência vale 0, 40, 80, 120, 160 ou
   200 — degraus, não nota contínua. O total é a soma, de 0 a 1000.

   Duas entradas possíveis: texto digitado ou foto da folha manuscrita. No
   segundo caso o modelo transcreve antes de corrigir, e a transcrição volta
   junto — quem escreveu precisa poder conferir se a leitura da própria letra
   saiu certa antes de aceitar a nota.
   ========================================================================= */

export const COMPETENCIAS = [
  {
    n: 1,
    titulo: "Domínio da norma culta",
    resumo:
      "Ortografia, concordância, regência, pontuação e registro formal escrito.",
  },
  {
    n: 2,
    titulo: "Compreensão do tema",
    resumo:
      "Não fugir do tema, aplicar repertório de outras áreas e respeitar o texto dissertativo-argumentativo.",
  },
  {
    n: 3,
    titulo: "Seleção e organização de argumentos",
    resumo:
      "Defender um ponto de vista com argumentos que se sustentam e progridem.",
  },
  {
    n: 4,
    titulo: "Coesão textual",
    resumo:
      "Conectivos, referenciação e articulação entre parágrafos e períodos.",
  },
  {
    n: 5,
    titulo: "Proposta de intervenção",
    resumo:
      "Agente, ação, meio, finalidade e detalhamento — respeitando os direitos humanos.",
  },
] as const;

const DEGRAUS = [0, 40, 80, 120, 160, 200];

/** A API garante o formato, não a escala: structured outputs não aceita
 *  restrição numérica. Então o valor é encaixado no degrau mais próximo aqui,
 *  antes de qualquer coisa tocar o banco — onde o check derrubaria um 137. */
function encaixaNoDegrau(valor: number): number {
  return DEGRAUS.reduce((melhor, d) =>
    Math.abs(d - valor) < Math.abs(melhor - valor) ? d : melhor
  );
}

const Comentario = z.object({
  competencia: z
    .number()
    .int()
    .describe("Número da competência, de 1 a 5."),
  nota: z
    .number()
    .int()
    .describe("Nota atribuída: 0, 40, 80, 120, 160 ou 200."),
  justificativa: z
    .string()
    .describe(
      "Por que essa nota, citando trechos concretos do texto. Diga o que já está bom e o que exatamente elevaria o degrau seguinte."
    ),
});

const Correcao = z.object({
  transcricao: z
    .string()
    .describe(
      "Quando a entrada for uma foto, o texto transcrito na íntegra, respeitando a grafia original — inclusive os erros. Quando for texto digitado, devolva string vazia."
    ),
  fuga_ao_tema: z
    .boolean()
    .describe("Verdadeiro se o texto fugiu completamente do tema proposto."),
  comentarios: z
    .array(Comentario)
    .describe("Exatamente cinco entradas, uma por competência, na ordem 1 a 5."),
  parecer: z
    .string()
    .describe(
      "Dois ou três parágrafos dirigidos a quem escreveu: o que segurou a nota e o que treinar primeiro para subir mais rápido."
    ),
});

export interface NotaRedacao {
  c1: number;
  c2: number;
  c3: number;
  c4: number;
  c5: number;
  total: number;
  transcricao: string;
  comentarios: { competencia: number; nota: number; justificativa: string }[];
  parecer: string;
}

/** O que qualquer provedor (Claude, Gemini) precisa devolver antes de virar
 *  NotaRedacao. É a forma do schema pedido em ambos os lados. */
export interface CorrecaoBruta {
  transcricao: string;
  fuga_ao_tema: boolean;
  comentarios: { competencia: number; nota: number; justificativa: string }[];
  parecer: string;
}

export interface PedidoRedacao {
  tema: string;
  ano: number;
  /** Texto digitado. Vazio quando a entrada é foto. */
  texto?: string;
  /** Foto da folha manuscrita, já em base64 sem o prefixo data:. */
  imagemBase64?: string;
  imagemTipo?: string;
}

/* Monta a nota final a partir da correção crua do modelo. Comum aos dois
   provedores: encaixa cada nota no degrau do INEP, remonta por número de
   competência (o modelo pode devolvê-las fora de ordem ou repetidas) e
   aplica a regra de fuga ao tema, que zera tudo. */
export function montaNota(bruto: CorrecaoBruta): NotaRedacao {
  const porCompetencia = new Map<
    number,
    { nota: number; justificativa: string }
  >();
  for (const c of bruto.comentarios) {
    if (c.competencia < 1 || c.competencia > 5) continue;
    porCompetencia.set(c.competencia, {
      nota: encaixaNoDegrau(c.nota),
      justificativa: c.justificativa,
    });
  }

  const notas = [1, 2, 3, 4, 5].map(
    (n) => porCompetencia.get(n)?.nota ?? 0
  ) as [number, number, number, number, number];

  const zerado = bruto.fuga_ao_tema;
  const finais = zerado ? ([0, 0, 0, 0, 0] as const) : notas;

  return {
    c1: finais[0],
    c2: finais[1],
    c3: finais[2],
    c4: finais[3],
    c5: finais[4],
    total: finais.reduce((s, n) => s + n, 0),
    transcricao: bruto.transcricao ?? "",
    comentarios: [1, 2, 3, 4, 5].map((n) => ({
      competencia: n,
      nota: zerado ? 0 : (porCompetencia.get(n)?.nota ?? 0),
      justificativa:
        porCompetencia.get(n)?.justificativa ??
        "A correção não comentou esta competência.",
    })),
    parecer: zerado
      ? `O texto foi considerado fuga ao tema, o que zera a redação inteira no ENEM. ${bruto.parecer}`
      : bruto.parecer,
  };
}

export const SISTEMA_REDACAO = [
  "Você é corretor de redação do ENEM e aplica a grade oficial do INEP.",
  "São cinco competências, cada uma valendo 0, 40, 80, 120, 160 ou 200 pontos. Nunca atribua valor fora desses degraus.",
  "Corrija com o rigor de quem corrige de verdade: nota alta é para texto que merece nota alta. Ser generoso não ajuda quem está treinando — a pessoa descobre a nota real no dia da prova, quando não dá mais para consertar.",
  "Justifique cada competência citando trechos concretos do texto, entre aspas. Comentário genérico não ensina nada.",
  "A competência 5 exige proposta de intervenção com agente, ação, meio, finalidade e detalhamento; conte quantos desses elementos aparecem de fato.",
  "Proposta que fira os direitos humanos zera a competência 5.",
  "Fuga completa ao tema zera o texto inteiro.",
  "Texto com menos de 7 linhas é considerado insuficiente e recebe zero.",
  "Escreva todos os comentários em português do Brasil, falando com quem escreveu, não sobre ela.",
].join(" ");

export async function corrigeRedacao({
  tema,
  ano,
  texto,
  imagemBase64,
  imagemTipo,
}: PedidoRedacao): Promise<NotaRedacao> {
  if (!anthropicConfigurado) {
    throw new ErroGeracao(
      "A chave da Anthropic não está configurada. Preencha ANTHROPIC_API_KEY em .env.local.",
      503
    );
  }
  if (!texto?.trim() && !imagemBase64) {
    throw new ErroGeracao("Nada para corrigir: envie o texto ou a foto.", 400);
  }

  const client = new Anthropic();

  const instrucao = [
    `Tema da redação (ENEM ${ano}):`,
    `"${tema}"`,
    "",
    imagemBase64
      ? "A redação está na imagem, manuscrita. Transcreva-a por inteiro primeiro, respeitando a grafia original — inclusive os erros de ortografia, que fazem parte da avaliação da competência 1. Depois corrija a partir da sua transcrição. Se a letra estiver ilegível em algum ponto, marque [ilegível] em vez de adivinhar."
      : "A redação está no texto abaixo.",
  ].join("\n");

  const conteudo: Anthropic.ContentBlockParam[] = [];

  if (imagemBase64) {
    conteudo.push({
      type: "image",
      source: {
        type: "base64",
        media_type: (imagemTipo ?? "image/jpeg") as "image/jpeg" | "image/png" | "image/webp" | "image/gif",
        data: imagemBase64,
      },
    });
  }

  conteudo.push({
    type: "text",
    text: imagemBase64 ? instrucao : `${instrucao}\n\n---\n${texto}\n---`,
  });

  let resposta;
  try {
    resposta = await client.messages.parse({
      model: MODELO,
      // Transcrever uma folha inteira e depois justificar cinco competências
      // com citações é uma resposta longa, e o limite cobre pensamento junto.
      max_tokens: 16000,
      system: SISTEMA_REDACAO,
      messages: [{ role: "user", content: conteudo }],
      output_config: { format: zodOutputFormat(Correcao) },
    });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "erro desconhecido";
    throw new ErroGeracao(`A API da Anthropic recusou a chamada: ${msg}`);
  }

  if (resposta.stop_reason === "refusal") {
    throw new ErroGeracao("O modelo não quis corrigir este texto.");
  }
  if (resposta.stop_reason === "max_tokens") {
    throw new ErroGeracao(
      "A correção foi cortada no limite. Se a foto tiver várias páginas, envie uma de cada vez."
    );
  }

  const bruto = resposta.parsed_output;
  if (!bruto || bruto.comentarios.length === 0) {
    throw new ErroGeracao("A correção veio fora do formato esperado.");
  }

  return montaNota(bruto);
}
