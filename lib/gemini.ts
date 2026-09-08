import { ErroGeracao, type PedidoExplicacao } from "./anthropic";
import {
  SISTEMA_REDACAO,
  montaNota,
  type CorrecaoBruta,
  type NotaRedacao,
  type PedidoRedacao,
} from "./redacao";

/* =========================================================================
   Chamadas ao Google Gemini.

   Roda só no servidor: GEMINI_API_KEY não tem prefixo NEXT_PUBLIC_, então
   nunca entra no bundle do browser.

   Por que REST cru e não SDK: o `@google/genai` traria uma dependência nova
   só para duas chamadas. O projeto já fala com APIs externas por `fetch`
   global (ver scripts/importar-enem.mjs e importar-sisu.mjs). O contrato de
   `:generateContent` é estável e pequeno — cabe aqui sem SDK.

   Onde entra: é o provedor gratuito da camada de IA. `lib/ia.ts` escolhe
   entre Gemini e Claude por tarefa e cai de um para o outro quando um falha:
     - explicar questão do ENEM → Gemini de primeira (alto volume, barato)
     - corrigir redação         → Claude de primeira quando há chave; Gemini
                                   é a única opção quando não há.
   ========================================================================= */

/* gemini-3.6-flash é o flash gratuito atual (o 2.5-flash foi aposentado para
   chaves novas em 2026). Sobrescreva com GEMINI_MODELO — `gemini-3.5-flash-lite`
   é mais rápido e mais barato, `gemini-flash-latest` acompanha a rotação do
   Google sem mexer no código. */
export const MODELO_GEMINI =
  process.env.GEMINI_MODELO?.trim() || "gemini-3.6-flash";

/* Modelo de RESERVA, na mesma chave.
 *
 * A arquitetura de fallback já existia, mas o único plano B era a Anthropic —
 * e a API da Anthropic é cobrança separada da assinatura do Claude, que é o
 * que o dono do projeto paga. Sem essa chave, "fallback" era uma lista de um
 * item só, e o pico do Gemini chegava inteiro no aluno.
 *
 * Sobrecarga é por MODELO, não por conta: quando o flash está congestionado, o
 * lite quase nunca está. Trocar de modelo na mesma chave dá um plano B real
 * sem abrir fatura nenhuma. É mais fraco que o principal — por isso é reserva,
 * e não a escolha padrão. */
export const MODELO_GEMINI_RESERVA =
  process.env.GEMINI_MODELO_RESERVA?.trim() || "gemini-3.5-flash-lite";

export const geminiConfigurado = Boolean(process.env.GEMINI_API_KEY);

const ENDPOINT = "https://generativelanguage.googleapis.com/v1beta/models";

/* Questões e redações de estudo. Os classificadores de segurança do Gemini às
   vezes barram enunciado de história ou biologia por falso positivo;
   BLOCK_ONLY_HIGH reduz isso sem desligar a proteção. */
const SEGURANCA = [
  "HARM_CATEGORY_HARASSMENT",
  "HARM_CATEGORY_HATE_SPEECH",
  "HARM_CATEGORY_SEXUALLY_EXPLICIT",
  "HARM_CATEGORY_DANGEROUS_CONTENT",
].map((category) => ({ category, threshold: "BLOCK_ONLY_HIGH" }));

interface CorpoGemini {
  systemInstruction: { parts: { text: string }[] };
  contents: { role: string; parts: unknown[] }[];
  generationConfig: Record<string, unknown>;
  safetySettings: { category: string; threshold: string }[];
}

interface RespostaGemini {
  candidates?: {
    content?: { parts?: { text?: string }[] };
    finishReason?: string;
  }[];
  promptFeedback?: { blockReason?: string };
  error?: { code?: number; message?: string; status?: string };
}

/** Uma chamada a :generateContent, com todo o tratamento de erro comum às
 *  duas tarefas. Devolve o texto concatenado das partes ou lança ErroGeracao.
 *  `oQue` entra nas mensagens de erro ("A explicação", "A correção"). */
async function chamaGemini(
  corpo: CorpoGemini,
  timeoutMs: number,
  oQue: string,
  modelo: string = MODELO_GEMINI
): Promise<string> {
  if (!geminiConfigurado) {
    throw new ErroGeracao(
      "A chave do Gemini não está configurada. Preencha GEMINI_API_KEY em .env.local.",
      503
    );
  }

  /* O flash gratuito solta 503 "high demand" em picos. Uma única nova
     tentativa depois de 2s cobre a maioria desses casos; além disso, deixa
     o erro subir (e, no modo `auto`, o Claude assume). */
  let http: Response;
  let dados: RespostaGemini;
  for (let tentativa = 1; ; tentativa++) {
    try {
      http = await fetch(`${ENDPOINT}/${modelo}:generateContent`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-goog-api-key": process.env.GEMINI_API_KEY as string,
        },
        body: JSON.stringify(corpo),
        signal: AbortSignal.timeout(timeoutMs),
      });
    } catch (e) {
      const msg = e instanceof Error ? e.message : "erro desconhecido";
      throw new ErroGeracao(`Não foi possível falar com o Gemini: ${msg}`);
    }

    try {
      dados = (await http.json()) as RespostaGemini;
    } catch {
      throw new ErroGeracao(
        `O Gemini respondeu em formato inesperado (HTTP ${http.status}).`,
        http.status === 429 ? 429 : 502
      );
    }

    /* Sobrecarga é transitória por definição — a própria mensagem do Gemini
       diz isso ("spikes in demand are usually temporary"). Duas repetições com
       espera crescente resolvem a maior parte sem que ninguém veja erro; uma
       só devolvia o pico para o aluno cedo demais. O teto é baixo de propósito:
       quem está esperando uma explicação não espera meio minuto. */
    if ((http.status === 503 || http.status === 500) && tentativa <= 2) {
      await new Promise((r) => setTimeout(r, tentativa * 2000));
      continue;
    }
    break;
  }

  if (!http.ok) {
    const detalhe = dados.error?.message ?? `HTTP ${http.status}`;
    if (http.status === 429) {
      throw new ErroGeracao(`O Gemini está sem cota agora: ${detalhe}`, 429);
    }
    if (http.status === 503 || http.status === 500) {
      throw new ErroGeracao(
        `O Gemini está sobrecarregado agora: ${detalhe}`,
        503
      );
    }
    throw new ErroGeracao(`A API do Gemini recusou a chamada: ${detalhe}`);
  }

  if (dados.promptFeedback?.blockReason) {
    throw new ErroGeracao(
      `O Gemini bloqueou o pedido (${dados.promptFeedback.blockReason}).`
    );
  }

  const candidato = dados.candidates?.[0];
  const fim = candidato?.finishReason;
  if (fim === "MAX_TOKENS") {
    throw new ErroGeracao(`${oQue} do Gemini foi cortada no limite de tokens.`);
  }
  if (fim && fim !== "STOP") {
    throw new ErroGeracao(`O Gemini interrompeu a resposta (${fim}).`);
  }

  const texto = (candidato?.content?.parts ?? [])
    .map((p) => p.text ?? "")
    .join("")
    .trim();

  if (!texto) {
    throw new ErroGeracao(`${oQue} do Gemini veio vazia.`);
  }

  return texto;
}

/* ---- Explicar questão do ENEM ------------------------------------------- */

export async function explicaQuestaoGemini({
  enunciado,
  opcoes,
  correta,
  fonte,
  temImagem,
}: PedidoExplicacao, modelo?: string): Promise<string> {
  const letras = ["A", "B", "C", "D", "E"];

  const sistema = [
    "Você comenta questões de provas brasileiras para estudantes que se preparam para o ENEM.",
    "Escreva no português do Brasil, direto e sem enrolação, como um professor que corrige a prova junto com o aluno.",
    "Você recebe o gabarito oficial. Ele é a verdade: construa a explicação que leva até ele.",
    "Responda com a explicação em 2 a 4 parágrafos curtos, sem saudação, sem repetir o enunciado e sem markdown.",
    "Mostre o raciocínio que leva à alternativa correta e diga por que os distratores mais tentadores enganam.",
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

  return chamaGemini(
    {
      systemInstruction: { parts: [{ text: sistema }] },
      contents: [{ role: "user", parts: [{ text: pedido }] }],
      generationConfig: {
        temperature: 0.3,
        // O teto conta o "pensamento" junto com o texto visível nos modelos
        // Gemini 3; folga para os dois.
        maxOutputTokens: 4096,
        // Comentar questão com gabarito conhecido é raciocínio curto. Sem
        // isto, o flash pensa por 45-90s e a rota (maxDuration 60) estoura.
        thinkingConfig: { thinkingLevel: "low" },
      },
      safetySettings: SEGURANCA,
    },
    // A rota tem maxDuration 60s. Cortar em 45s deixa folga para o Claude
    // ainda ser tentado como reserva no modo `auto`.
    45_000,
    "A explicação",
    modelo
  );
}

/* ---- Corrigir redação ------------------------------------------------- */

/* Mesma forma do schema zod usado no lado do Claude (lib/redacao.ts), na
   sintaxe de responseSchema do Gemini (subconjunto do OpenAPI). */
const SCHEMA_REDACAO = {
  type: "object",
  properties: {
    transcricao: { type: "string" },
    fuga_ao_tema: { type: "boolean" },
    comentarios: {
      type: "array",
      items: {
        type: "object",
        properties: {
          competencia: { type: "integer" },
          nota: { type: "integer" },
          justificativa: { type: "string" },
        },
        required: ["competencia", "nota", "justificativa"],
      },
    },
    parecer: { type: "string" },
  },
  required: ["transcricao", "fuga_ao_tema", "comentarios", "parecer"],
};

export async function corrigeRedacaoGemini({
  tema,
  ano,
  texto,
  imagemBase64,
  imagemTipo,
}: PedidoRedacao, modelo?: string): Promise<NotaRedacao> {
  if (!texto?.trim() && !imagemBase64) {
    throw new ErroGeracao("Nada para corrigir: envie o texto ou a foto.", 400);
  }

  const instrucao = [
    `Tema da redação (ENEM ${ano}):`,
    `"${tema}"`,
    "",
    imagemBase64
      ? "A redação está na imagem, manuscrita. Transcreva-a por inteiro primeiro, respeitando a grafia original — inclusive os erros de ortografia, que fazem parte da avaliação da competência 1. Depois corrija a partir da sua transcrição. Se a letra estiver ilegível em algum ponto, marque [ilegível] em vez de adivinhar."
      : "A redação está no texto abaixo.",
  ].join("\n");

  const parts: unknown[] = [];
  if (imagemBase64) {
    parts.push({
      inlineData: { mimeType: imagemTipo ?? "image/jpeg", data: imagemBase64 },
    });
  }
  parts.push({
    text: imagemBase64 ? instrucao : `${instrucao}\n\n---\n${texto}\n---`,
  });

  const cru = await chamaGemini(
    {
      systemInstruction: { parts: [{ text: SISTEMA_REDACAO }] },
      contents: [{ role: "user", parts }],
      generationConfig: {
        temperature: 0.2,
        // Transcrição + cinco justificativas com citações + pensamento.
        maxOutputTokens: 32000,
        responseMimeType: "application/json",
        responseSchema: SCHEMA_REDACAO,
        thinkingConfig: { thinkingLevel: "high" },
      },
      safetySettings: SEGURANCA,
    },
    // A rota tem maxDuration 300s; corrigir uma folha inteira demora.
    280_000,
    "A correção",
    modelo
  );

  let bruto: CorrecaoBruta;
  try {
    bruto = JSON.parse(cru) as CorrecaoBruta;
  } catch {
    throw new ErroGeracao("A correção do Gemini veio fora do formato esperado.");
  }
  if (!Array.isArray(bruto.comentarios) || bruto.comentarios.length === 0) {
    throw new ErroGeracao("A correção do Gemini veio sem as competências.");
  }

  return montaNota(bruto);
}
