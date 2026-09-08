import type { Metadata } from "next";
import { Sessao } from "@/components/estudo/Sessao";
import { EscolherConteudo } from "@/components/estudo/EscolherConteudo";
import { exigeSessao } from "@/lib/sessao";
import { contagensPorTema } from "@/lib/temas";
import {
  MATERIAS_POR_ID,
  TODAS_AS_MATERIAS,
} from "@/lib/conteudo/materias";
import type { QuestaoPublica, Simulado } from "@/lib/tipos";

export const metadata: Metadata = {
  title: "Questões · Percurso",
  description:
    "Escolha uma matéria e um assunto e responda questões comentadas, com o porquê logo abaixo da alternativa marcada.",
};

export const dynamic = "force-dynamic";

function Cabecalho() {
  return (
    <div className="section-head">
      <div className="head-left">
        <span className="eyebrow">Questões</span>
        <h2 className="title">
          Escolha o assunto.
          <br />
          Descubra <em>por que</em> errou.
        </h2>
        <p className="lede">
          Questões comentadas, organizadas por conteúdo. O porquê abre logo
          abaixo da alternativa que você marcou, e cada resposta fica salva —
          pode fechar a aba e voltar depois.
        </p>
      </div>
    </div>
  );
}

export default async function PaginaQuestoes({
  searchParams,
}: {
  searchParams: Promise<{ materia?: string }>;
}) {
  const { materia: materiaDaUrl } = await searchParams;
  // Cada resposta é gravada e a sessão é retomável: sem conta não há onde
  // guardar isso. Quem chega deslogado passa pelo acesso e volta para cá.
  const { supabase, user } = await exigeSessao("/app/questoes");

  /* `prova_id is null` recorta só a sessão avulsa. Prova do ENEM também é uma
     linha em `simulados` com status 'em_andamento': sem esse filtro, quem
     tivesse uma prova aberta receberia as 180 questões dela nesta tela. */
  const { data: emAndamento } = await supabase
    .from("simulados")
    .select("*")
    .eq("usuario_id", user.id)
    .eq("status", "em_andamento")
    .is("prova_id", null)
    .order("atualizado_em", { ascending: false })
    .limit(1)
    .maybeSingle();

  const sessao = (emAndamento as Simulado | null) ?? null;
  const contagens = await contagensPorTema(supabase);

  let questoes: QuestaoPublica[] = [];
  let respondidas = 0;

  if (sessao) {
    // Nunca selecionamos `correta`/`explicacao` aqui: o gabarito só existe na
    // resposta da API, depois de a alternativa ser gravada.
    const [{ data: linhas }, { count }] = await Promise.all([
      supabase
        .from("questoes")
        .select("id, materia_id, fonte, enunciado, opcoes, dificuldade")
        .in("id", sessao.questao_ids),
      supabase
        .from("respostas")
        .select("*", { count: "exact", head: true })
        .eq("simulado_id", sessao.id),
    ]);

    // O `in` devolve em ordem arbitrária; questao_ids é a ordem que vale.
    const porId = new Map(
      ((linhas ?? []) as QuestaoPublica[]).map((q) => [q.id, q])
    );
    questoes = sessao.questao_ids
      .map((id) => porId.get(id))
      .filter((q): q is QuestaoPublica => Boolean(q));

    respondidas = count ?? 0;
  }

  /* O rótulo do recorte prefere os temas, que é o que a pessoa escolheu de
     fato; a matéria só entra quando a sessão não tem tema. */
  const recorte =
    sessao?.tema_filtro ||
    (sessao && sessao.materia_filtro !== "todas"
      ? (MATERIAS_POR_ID.get(sessao.materia_filtro)?.nome ??
        sessao.materia_filtro)
      : "Todas as matérias");

  return (
    <main className="section" style={{ paddingTop: 40 }}>
      <div className="wrap">
        <Cabecalho />
        {/* A key amarra o componente à sessão. Começar outra troca o id,
            remonta e reinicializa o estado com as questões novas — sem isso
            a tela ficaria presa na sessão anterior. */}
        <Sessao
          key={sessao?.id ?? "vazio"}
          sessao={sessao}
          questoes={questoes}
          respondidas={respondidas}
          recorte={recorte}
        />

        {/* Só aparece quando não há sessão aberta: o índice único permite uma
            por vez, então oferecer a escolha no meio de outra seria oferecer
            um botão que falha. */}
        {!sessao && (
          <EscolherConteudo
            materias={TODAS_AS_MATERIAS}
            contagens={contagens}
            materiaInicial={materiaDaUrl ?? null}
          />
        )}
      </div>
    </main>
  );
}
