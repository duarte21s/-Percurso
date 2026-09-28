import { NextResponse } from "next/server";
import { exigeSessaoApi } from "@/lib/sessao";
import { ErroGeracao } from "@/lib/anthropic";
import { explicaQuestao, mensagemParaAluno } from "@/lib/ia";
import { criaClienteAdmin } from "@/lib/supabase/admin";
import { provaAbreGabarito } from "@/lib/situacao-sessao";
import type { Simulado } from "@/lib/tipos";

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
 * Só explica depois do resultado: prova já entregue, ou sessão de estudo
 * finalizada com todas as questões respondidas. Antes disso seria uma porta
 * lateral para o gabarito — a explicação diz qual é a resposta.
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

  /* A pessoa precisa ter respondido esta questão numa prova já entregue ou
     numa sessão de estudo finalizada. Sem esta checagem, qualquer pessoa
     logada leria o gabarito de qualquer questão do banco a qualquer momento,
     bastando pedir a explicação dela.

     Ela vem ANTES de ler a questão. Vinha depois da devolução da explicação
     já salva, e então bastava pedir, no meio da prova, a explicação que outra
     pessoa já tinha gerado. Roda com o cliente de sessão: é a RLS de
     `respostas` que garante que as linhas são desta pessoa. */
  const { data: candidatas } = await supabase
    .from("respostas")
    .select(
      "simulado_id, simulados!inner(status, prova_id, questao_ids, acertos, erros, expira_em, finalizado_em)"
    )
    .eq("questao_id", questaoId)
    .eq("simulados.status", "concluido")
    .limit(10);

  /* "Encerrada" não basta. Prova só conta com resultado — entregue, ou com o
     tempo esgotado (`provaAbreGabarito`). Sessão de estudo encerrada pode ter
     sido abandonada no meio, e abandonar não abre o gabarito: ela só conta se
     todas as questões tiverem resposta — a mesma regra de
     /api/simulado/finalizar. */
  type Tentativa = Pick<
    Simulado,
    "status" | "prova_id" | "questao_ids" | "acertos" | "erros" | "expira_em" | "finalizado_em"
  >;
  let liberada = false;
  for (const linha of (candidatas ?? []) as unknown as Array<{
    simulado_id: string;
    simulados: Tentativa | Tentativa[] | null;
  }>) {
    const s = Array.isArray(linha.simulados) ? linha.simulados[0] : linha.simulados;
    if (!s) continue;
    if (s.prova_id) {
      if (provaAbreGabarito(s)) {
        liberada = true;
        break;
      }
      continue;
    }
    const { count } = await supabase
      .from("respostas")
      .select("*", { count: "exact", head: true })
      .eq("simulado_id", linha.simulado_id);
    const total = s.questao_ids?.length ?? 0;
    if (total > 0 && (count ?? 0) >= total) {
      liberada = true;
      break;
    }
  }

  if (!liberada) {
    return NextResponse.json(
      { erro: "A explicação abre depois que você entrega a prova ou finaliza a sessão." },
      { status: 403 }
    );
  }

  /* Só agora a questão, e com a service role: `correta` e `explicacao`
     deixam de ser legíveis pela chave anon. */
  const admin = criaClienteAdmin();
  if (!admin) {
    return NextResponse.json(
      { erro: "As explicações estão indisponíveis agora. Tente de novo em instantes." },
      { status: 503 }
    );
  }

  const { data: questao } = await admin
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
