import { NextResponse } from "next/server";
import { exigeSessaoApi } from "@/lib/sessao";
import { ErroGeracao } from "@/lib/anthropic";
import { explicaQuestao, mensagemParaAluno } from "@/lib/ia";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

/**
 * POST /api/questoes/explicar — comenta uma questão do ENEM sob demanda.
 *
 * Body: { questaoId: string }
 *
 * A explicação é gravada na própria questão, então cada uma custa uma chamada
 * ao modelo UMA vez na vida do banco: a próxima pessoa que errar a mesma
 * questão lê o mesmo texto, de graça. É o que torna viável cobrir as ~2.750
 * questões do ENEM sem comentar 2.750 de antemão.
 *
 * Só explica prova já entregue. Durante o exame isso seria uma porta lateral
 * para o gabarito — a explicação diz qual é a resposta.
 */
export async function POST(request: Request) {
  const sessao = await exigeSessaoApi();
  if (!sessao.ok) {
    return NextResponse.json(
      { erro: sessao.erro, expirado: sessao.expirado },
      { status: sessao.status }
    );
  }
  const { supabase, user } = sessao;

  const corpo = await request.json().catch(() => null);
  const questaoId: string | undefined = corpo?.questaoId;
  if (!questaoId) {
    return NextResponse.json({ erro: "Questão não informada." }, { status: 400 });
  }

  const { data: questao } = await supabase
    .from("questoes")
    .select("id, enunciado, opcoes, correta, fonte, explicacao, origem, imagens")
    .eq("id", questaoId)
    .maybeSingle();

  if (!questao) {
    return NextResponse.json({ erro: "Questão não encontrada." }, { status: 404 });
  }

  // Já comentada: devolve o que está no banco sem gastar chamada.
  if (typeof questao.explicacao === "string" && questao.explicacao.trim()) {
    return NextResponse.json({ explicacao: questao.explicacao, doBanco: true });
  }

  if (questao.origem !== "enem") {
    return NextResponse.json(
      { erro: "Essa questão já vem com explicação própria." },
      { status: 409 }
    );
  }

  /* A pessoa precisa ter respondido esta questão numa prova já entregue. Sem
     esta checagem, qualquer pessoa logada leria o gabarito de qualquer questão
     do banco a qualquer momento, bastando pedir a explicação dela. */
  const { data: respondeu } = await supabase
    .from("respostas")
    .select("simulado_id, simulados!inner(status)")
    .eq("questao_id", questaoId)
    .eq("simulados.status", "concluido")
    .limit(1);

  if (!respondeu || respondeu.length === 0) {
    return NextResponse.json(
      { erro: "A explicação abre depois que você entrega a prova." },
      { status: 403 }
    );
  }

  let gerada;
  try {
    gerada = await explicaQuestao({
      enunciado: questao.enunciado as string,
      opcoes: questao.opcoes as string[],
      correta: questao.correta as number,
      fonte: (questao.fonte as string) ?? "ENEM",
      temImagem: ((questao.imagens as string[]) ?? []).length > 0,
    });
  } catch (e) {
    /* O detalhe fica no log; o aluno recebe o que dá para agir. Nomear o
       fornecedor e repassar o texto em inglês dele transferia para quem está
       estudando um problema que não é dele e que ele não pode resolver. */
    console.error("[explicar] falha de geração:", e);
    const status = e instanceof ErroGeracao ? e.status : 502;
    return NextResponse.json(
      { erro: mensagemParaAluno(e, "explicações") },
      { status }
    );
  }
  const { texto, provedor } = gerada;

  /* A gravação pode falhar por RLS sem que isso estrague a experiência: a
     pessoa recebe a explicação de qualquer jeito, e a próxima gera de novo. */
  await supabase
    .from("questoes")
    .update({ explicacao: texto, explicada_em: new Date().toISOString() })
    .eq("id", questaoId);

  return NextResponse.json({ explicacao: texto, doBanco: false, provedor });
}
