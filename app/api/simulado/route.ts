import { NextResponse } from "next/server";
import { exigeSessaoApi } from "@/lib/sessao";

export const dynamic = "force-dynamic";

const TAMANHO_PADRAO = 8;
const TAMANHO_MAXIMO = 45;
const TAMANHO_MINIMO = 1;
const PAGINA_IDS = 1000;

/** Embaralhamento Fisher-Yates. */
function embaralha<T>(lista: T[]): T[] {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

const AREAS_ENEM = [
  "linguagens",
  "ciencias-humanas",
  "ciencias-natureza",
  "matematica",
];

/**
 * POST /api/simulado — inicia um simulado avulso, do tamanho e do recorte que
 * a pessoa pedir.
 *
 * Body: {
 *   materia?: string,          id da matéria, ou "todas"
 *   temas?: string[],          títulos de tema dentro da matéria
 *   area?: string,             área do ENEM — usa o banco de provas
 *   quantidade?: number,
 *   recomecar?: boolean
 * }
 *
 * O sorteio é congelado em questao_ids na criação. Isso é o que permite a
 * retomada devolver exatamente as mesmas questões, na mesma ordem, dias
 * depois.
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

  const corpo = await request.json().catch(() => ({}));
  const materia: string = corpo?.materia ?? "todas";
  const temas: string[] = Array.isArray(corpo?.temas)
    ? corpo.temas.filter((t: unknown) => typeof t === "string" && t.trim())
    : [];
  const area: string | null =
    typeof corpo?.area === "string" && AREAS_ENEM.includes(corpo.area)
      ? corpo.area
      : null;

  const quantidade = Math.min(
    TAMANHO_MAXIMO,
    Math.max(TAMANHO_MINIMO, Number(corpo?.quantidade) || TAMANHO_PADRAO)
  );

  /* O PostgREST limita cada resposta a mil linhas. Buscar só uma página
     deixava milhares de questões válidas fora do sorteio: quem estudava uma
     matéria grande recebia sempre uma das primeiras mil. A sessão continua
     pequena, mas o sorteio agora considera o recorte inteiro. */
  const questoes: { id: string }[] = [];
  for (let inicio = 0; ; inicio += PAGINA_IDS) {
    let consulta = supabase
      .from("questoes")
      .select("id")
      .order("id", { ascending: true })
      .range(inicio, inicio + PAGINA_IDS - 1);

    if (area) {
      // Recorte por área usa o banco de provas reais.
      consulta = consulta.eq("area", area).eq("idioma", "");
    } else {
      /* Só questões comentadas e vinculadas a um conteúdo. As questões ENEM
         continuam no modo Simulados porque o INEP publica o gabarito, não o
         comentário; e 27 questões legadas sem tema não entram no banco de
         7.043 que a pessoa navega por matéria e conteúdo. */
      consulta = consulta
        .is("prova_id", null)
        .neq("explicacao", "")
        .not("tema", "is", null);
      if (materia !== "todas") consulta = consulta.eq("materia_id", materia);
      if (temas.length > 0) consulta = consulta.in("tema", temas);
    }

    const { data, error: erroQuestoes } = await consulta;
    if (erroQuestoes) {
      return NextResponse.json({ erro: erroQuestoes.message }, { status: 500 });
    }
    if (!data || data.length === 0) break;
    questoes.push(...(data as { id: string }[]));
    if (data.length < PAGINA_IDS) break;
  }

  /* Recorte por tema pode não achar nada. Dizer isso é melhor que devolver uma
     sessão vazia ou, pior, ignorar o filtro em silêncio e entregar outra coisa. */
  if (!questoes || questoes.length === 0) {
    if (temas.length > 0) {
      return NextResponse.json(
        {
          erro:
            "Esse conteúdo ainda não tem questões comentadas. Escolha outro ao lado.",
          semTema: true,
        },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { erro: "Não há questões para esse recorte ainda." },
      { status: 404 }
    );
  }

  const ids = embaralha(questoes.map((q) => q.id)).slice(0, quantidade);

  // Só encerra o estudo anterior depois de encontrar questões para a nova
  // escolha. Um tema vazio ou uma falha de consulta preserva a retomada.
  // Provas do ENEM continuam abertas, e as respostas anteriores ficam salvas.
  const { error: erroEncerrar } = await supabase
    .from("simulados")
    .update({ status: "concluido" })
    .eq("usuario_id", user.id)
    .eq("status", "em_andamento")
    .is("prova_id", null);

  if (erroEncerrar) {
    return NextResponse.json({ erro: erroEncerrar.message }, { status: 500 });
  }

  const { data: simulado, error } = await supabase
    .from("simulados")
    .insert({
      usuario_id: user.id,
      materia_filtro: area ?? materia,
      tema_filtro: temas.length > 0 ? temas.join(" · ") : null,
      questao_ids: ids,
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ erro: error.message }, { status: 500 });
  }

  /* `pedido` e `disponiveis` voltam junto porque o recorte pode ter menos
     questões do que a pessoa pediu, e entregar 2 de 10 em silêncio parece
     defeito. Com os três números a tela consegue dizer o que aconteceu. */
  return NextResponse.json({
    simulado,
    total: ids.length,
    pedido: quantidade,
    disponiveis: questoes.length,
  });
}
