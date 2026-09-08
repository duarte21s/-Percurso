import Anthropic from "@anthropic-ai/sdk";
import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod";
import { z } from "zod";

/* =========================================================================
   Chamadas à Claude.

   Roda só no servidor: ANTHROPIC_API_KEY não tem prefixo NEXT_PUBLIC_, então
   nunca entra no bundle do browser.
   ========================================================================= */

export const MODELO = "claude-opus-5";

export const anthropicConfigurado = Boolean(process.env.ANTHROPIC_API_KEY);

export class ErroGeracao extends Error {
  constructor(
    message: string,
    readonly status = 502
  ) {
    super(message);
  }
}

/* =========================================================================
   Explicação sob demanda das questões do ENEM.

   O INEP publica o gabarito, não o comentário — as ~2.750 questões
   importadas nascem com `explicacao` vazia. Comentar todas de uma vez seria
   caro e desperdício: a maioria nunca vai ser errada por ninguém. Então a
   explicação é escrita na primeira vez que alguém pede, e gravada na questão.
   A segunda pessoa que errar a mesma questão lê de graça, do banco.
   ========================================================================= */

const Explicacao = z.object({
  explicacao: z
    .string()
    .describe(
      "Resolução completa da questão em português do Brasil, em 2 a 4 parágrafos curtos. Mostre o raciocínio que leva à alternativa correta e diga por que os distratores mais tentadores enganam. Nada de saudação nem de repetir o enunciado."
    ),
});

export interface PedidoExplicacao {
  enunciado: string;
  opcoes: string[];
  correta: number;
  fonte: string;
  temImagem: boolean;
}

export async function explicaQuestao({
  enunciado,
  opcoes,
  correta,
  fonte,
  temImagem,
}: PedidoExplicacao): Promise<string> {
  if (!anthropicConfigurado) {
    throw new ErroGeracao(
      "A chave da Anthropic não está configurada. Preencha ANTHROPIC_API_KEY em .env.local.",
      503
    );
  }

  const client = new Anthropic();
  const letras = ["A", "B", "C", "D", "E"];

  const sistema = [
    "Você comenta questões de provas brasileiras para estudantes que se preparam para o ENEM.",
    "Escreva no português do Brasil, direto e sem enrolação, como um professor que corrige a prova junto com o aluno.",
    "Você recebe o gabarito oficial. Ele é a verdade: construa a explicação que leva até ele.",
    temImagem
      ? "Atenção: esta questão depende de uma figura que você NÃO está vendo. Explique o raciocínio pela via conceitual e não descreva a imagem nem invente dados dela."
      : "",
  ]
    .filter(Boolean)
    .join(" ");

  const alternativas = opcoes
    .map((o, i) => `${letras[i] ?? i + 1}) ${o}`)
    .join("\n");

  const pedido = [
    `Fonte: ${fonte}`,
    `Enunciado:\n${enunciado}`,
    `Alternativas:\n${alternativas}`,
    `Gabarito oficial: ${letras[correta] ?? correta}`,
  ].join("\n\n");

  let resposta;
  try {
    resposta = await client.messages.parse({
      model: MODELO,
      max_tokens: 8000,
      system: sistema,
      messages: [{ role: "user", content: pedido }],
      output_config: { format: zodOutputFormat(Explicacao) },
    });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "erro desconhecido";
    throw new ErroGeracao(`A API da Anthropic recusou a chamada: ${msg}`);
  }

  if (resposta.stop_reason === "refusal") {
    throw new ErroGeracao("O modelo não quis comentar esta questão.");
  }
  if (resposta.stop_reason === "max_tokens") {
    throw new ErroGeracao("A explicação foi cortada no limite de tokens.");
  }

  const texto = resposta.parsed_output?.explicacao?.trim();
  if (!texto) {
    throw new ErroGeracao("A explicação veio vazia.");
  }

  return texto;
}
