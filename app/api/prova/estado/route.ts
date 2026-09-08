import { NextResponse } from "next/server";
import { exigeSessaoApi } from "@/lib/sessao";

export const dynamic = "force-dynamic";

/**
 * GET /api/prova/estado?simuladoId=… — o estado verdadeiro da tentativa.
 *
 * Esta rota existe para que o cliente pare de ser dono de qualquer informação
 * que importa. Antes o cronômetro era um `setInterval` no React que somava um
 * segundo por vez e mandava o total junto de cada resposta; o servidor gravava
 * o número como recebeu. Dava para zerar pelo DevTools, dava para mandar
 * qualquer valor na requisição, e fechar o navegador congelava o relógio.
 *
 * Agora o tempo restante é `expira_em - now()` calculado no banco. O cliente
 * recebe um número de segundos e só desenha. O relógio da máquina do aluno não
 * entra na conta em momento nenhum — ele pode adiantar o computador em três
 * horas que não muda nada.
 *
 * A tentativa vencida é encerrada aqui mesmo, na leitura: sem isto, quem
 * simplesmente não voltasse mais à prova ficaria com uma tentativa aberta para
 * sempre, ocupando o índice de "uma prova em andamento por vez".
 */
export async function GET(request: Request) {
  const sessao = await exigeSessaoApi();
  if (!sessao.ok) {
    return NextResponse.json(
      { erro: sessao.erro, expirado: sessao.expirado },
      { status: sessao.status }
    );
  }
  const { supabase } = sessao;

  const simuladoId = new URL(request.url).searchParams.get("simuladoId");
  if (!simuladoId) {
    return NextResponse.json({ erro: "Tentativa não informada." }, { status: 400 });
  }

  /* A RLS já limita a leitura ao dono; o `maybeSingle` devolve nulo para
     tentativa de outra pessoa, que é o mesmo que não existir. */
  const { data: simulado } = await supabase
    .from("simulados")
    .select(
      "id, status, indice_atual, questao_ids, prova_id, iniciado_em, expira_em"
    )
    .eq("id", simuladoId)
    .maybeSingle();

  if (!simulado || !simulado.prova_id) {
    return NextResponse.json({ erro: "Tentativa não encontrada." }, { status: 404 });
  }

  const agora = Date.now();
  const expiraEm = simulado.expira_em ? new Date(simulado.expira_em).getTime() : null;
  const venceu = expiraEm !== null && agora > expiraEm;

  /* Fecha o que venceu, na primeira vez que alguém olha. */
  if (venceu && simulado.status === "em_andamento") {
    await supabase
      .from("simulados")
      .update({ status: "concluido" })
      .eq("id", simuladoId);
  }

  const { data: respostas } = await supabase
    .from("respostas")
    .select("questao_id, alternativa")
    .eq("simulado_id", simuladoId);

  const marcadas: Record<string, number> = {};
  for (const r of respostas ?? []) {
    marcadas[r.questao_id as string] = r.alternativa as number;
  }

  const total = simulado.questao_ids.length;
  const indice = Math.min(simulado.indice_atual ?? 0, Math.max(0, total - 1));

  return NextResponse.json({
    simuladoId: simulado.id,
    status: venceu ? "concluido" : simulado.status,
    expirada: venceu,
    indiceAtual: indice,
    totalQuestoes: total,
    /* Segundos que faltam, do relógio do servidor. Zero quando venceu. */
    restanteSegundos:
      expiraEm === null ? null : Math.max(0, Math.floor((expiraEm - agora) / 1000)),
    marcadas,
    /* Questões de índice menor que o atual estão fechadas. Um inteiro descreve
       o conjunto inteiro — a tela não precisa de lista nenhuma. */
    travadasAte: indice,
  });
}
