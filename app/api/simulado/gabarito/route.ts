import { NextResponse } from "next/server";
import { exigeSessaoApi } from "@/lib/sessao";
import type { GabaritoDaSessao, ItemGabarito, QuestaoPublica } from "@/lib/tipos";

export const dynamic = "force-dynamic";

/**
 * GET /api/simulado/gabarito?simuladoId=… — o gabarito da sessão inteira.
 *
 * Existe separado de `/responder` por um motivo só: o gabarito de uma questão
 * nunca pode chegar ao cliente antes de ela ser respondida. A página de
 * Questões carrega `id, materia_id, fonte, enunciado, opcoes, dificuldade` e
 * mais nada — `correta` e `explicacao` ficam no servidor. Esta rota é a única
 * outra porta por onde eles saem, e ela só abre quando não há mais nada a
 * revelar: a checagem abaixo exige que TODAS as questões da sessão já tenham
 * resposta gravada. Com uma questão em aberto, devolve 409 e nenhum dado.
 *
 * Só leitura. Não grava nada e não altera o estado da sessão.
 */
export async function GET(request: Request) {
  const sessao = await exigeSessaoApi();
  if (!sessao.ok) {
    return NextResponse.json(
      { erro: sessao.erro, expirado: sessao.expirado },
      { status: sessao.status }
    );
  }
  const { supabase, user } = sessao;

  const simuladoId = new URL(request.url).searchParams.get("simuladoId");
  if (!simuladoId || !/^[0-9a-f-]{36}$/i.test(simuladoId)) {
    return NextResponse.json({ erro: "Sessão inválida." }, { status: 400 });
  }

  /* `usuario_id` explícito além do RLS: defesa em profundidade barata. Se uma
     policy for afrouxada um dia, o gabarito de outra pessoa continua fora. */
  const { data: simulado } = await supabase
    .from("simulados")
    .select("id, questao_ids, status")
    .eq("id", simuladoId)
    .eq("usuario_id", user.id)
    .maybeSingle();

  if (!simulado) {
    return NextResponse.json({ erro: "Sessão não encontrada." }, { status: 404 });
  }

  /* Primeiro portão: a sessão tem de estar EXPLICITAMENTE concluída.
     Responder a última questão já não basta — /responder deixa o status em
     "em_andamento" de propósito, e só o clique em "Finalizar sessão" (que
     chama /api/simulado/encerrar) o move para "concluido". Sem esta
     checagem, bastaria responder tudo para o gabarito abrir sozinho, que é
     exatamente o que esta mudança impede. */
  if (simulado.status !== "concluido") {
    return NextResponse.json(
      { erro: "A sessão ainda não foi finalizada.", status: simulado.status },
      { status: 409 }
    );
  }

  const ids: string[] = simulado.questao_ids ?? [];
  if (ids.length === 0) {
    return NextResponse.json({ erro: "Sessão sem questões." }, { status: 409 });
  }

  const { data: respostas } = await supabase
    .from("respostas")
    .select("questao_id, alternativa, acertou")
    .eq("simulado_id", simuladoId);

  const marcadas = new Map(
    (respostas ?? []).map((r) => [
      r.questao_id as string,
      { alternativa: r.alternativa as number, acertou: r.acertou as boolean },
    ])
  );

  /* O portão. Só aqui o gabarito passa a existir para o cliente. */
  if (marcadas.size < ids.length) {
    return NextResponse.json(
      {
        erro: "A sessão foi encerrada sem responder tudo.",
        respondidas: marcadas.size,
        total: ids.length,
      },
      { status: 409 }
    );
  }

  const { data: linhas } = await supabase
    .from("questoes")
    .select("id, materia_id, fonte, enunciado, opcoes, dificuldade, correta, explicacao")
    .in("id", ids);

  type Linha = QuestaoPublica & { correta: number; explicacao: string };
  const porId = new Map(((linhas ?? []) as Linha[]).map((q) => [q.id, q]));

  /* `questao_ids` é a ordem que vale — `in` devolve em ordem arbitrária, e a
     pessoa espera ver a questão 03 no lugar da questão 03. */
  const itens: ItemGabarito[] = ids.flatMap((id, indice) => {
    const q = porId.get(id);
    const marcada = marcadas.get(id);
    if (!q || !marcada) return [];
    return [
      {
        numero: indice + 1,
        questaoId: id,
        fonte: q.fonte,
        enunciado: q.enunciado,
        opcoes: q.opcoes,
        marcada: marcada.alternativa,
        correta: q.correta,
        acertou: marcada.acertou,
        explicacao: q.explicacao,
      },
    ];
  });

  /* Os contadores saem das `respostas`, não de `simulados.acertos`.
     `/api/simulado/responder` grava o contador sem checar o erro do update
     (route.ts:101), então ele pode ficar atrás das respostas de fato
     registradas. As linhas de `respostas` são a fonte que o próprio gabarito
     está exibindo — usar outra abriria a porta para o cabeçalho dizer um
     número e os cartões mostrarem outro. */
  let acertos = 0;
  for (const m of marcadas.values()) if (m.acertou) acertos++;

  /* Anotado, e não solto dentro do `json()`: assim o compilador cobra que o
     corpo desta rota seja exatamente o que `GabaritoCompleto` declara receber.
     Sem a anotação, renomear um campo aqui passaria pelo typecheck e só
     quebraria em produção, onde o componente lê `undefined`. */
  const corpo: GabaritoDaSessao = {
    itens,
    acertos,
    erros: marcadas.size - acertos,
    total: ids.length,
  };
  return NextResponse.json(corpo);
}
