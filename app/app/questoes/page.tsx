import type { Metadata } from "next";
import Link from "next/link";
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
  searchParams: Promise<{
    materia?: string | string[];
    tema?: string | string[];
    sessao?: string | string[];
  }>;
}) {
  const parametros = await searchParams;
  const materiaDaUrl = typeof parametros.materia === "string" ? parametros.materia : null;
  /* Conteúdo escolhido na página da matéria. Chega já marcado no seletor. */
  const temaDaUrl = typeof parametros.tema === "string" ? parametros.tema : null;
  const sessaoDaUrl = typeof parametros.sessao === "string" ? parametros.sessao : null;
  const destino = new URLSearchParams();
  if (materiaDaUrl) destino.set("materia", materiaDaUrl);
  if (sessaoDaUrl) destino.set("sessao", sessaoDaUrl);
  // Cada resposta é gravada e a sessão é retomável: sem conta não há onde
  // guardar isso. Quem chega deslogado passa pelo acesso e volta para cá.
  const { supabase, user } = await exigeSessao(
    `/app/questoes${destino.size ? `?${destino}` : ""}`
  );

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

  const anterior = (emAndamento as Simulado | null) ?? null;
  // Entrar em Questões sempre abre a escolha. Só um link explícito retoma
  // a sessão, e apenas se ela pertencer ao usuário e continuar em andamento.
  const sessao = anterior?.id === sessaoDaUrl ? anterior : null;
  const contagens = sessao ? {} : await contagensPorTema(supabase);

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
    anterior?.tema_filtro ||
    (anterior && anterior.materia_filtro !== "todas"
      ? (MATERIAS_POR_ID.get(anterior.materia_filtro)?.nome ??
        anterior.materia_filtro)
      : "Todas as matérias");

  return (
    <main className="section" style={{ paddingTop: 40 }}>
      <div className="wrap">
        <Cabecalho />
        {/* A key amarra o componente à sessão. Começar outra troca o id,
            remonta e reinicializa o estado com as questões novas — sem isso
            a tela ficaria presa na sessão anterior. */}
        {sessao ? (
          <Sessao
            key={sessao.id}
            sessao={sessao}
            questoes={questoes}
            respondidas={respondidas}
            recorte={recorte}
          />
        ) : (
          <>
            {anterior && (
              <div className="quiz" style={{ marginBottom: 24 }}>
                <div className="quiz-foot">
                  <p className="dim fine">
                    Estudo em andamento: <strong>{recorte}</strong>. Você pode
                    continuar ou escolher outro conteúdo abaixo. Ao iniciar um
                    novo estudo, o anterior é encerrado e suas respostas ficam no histórico.
                  </p>
                  <Link
                    href={`/app/questoes?sessao=${encodeURIComponent(anterior.id)}`}
                    className="btn btn-ghost"
                  >
                    Continuar estudo anterior <span className="arrow">→</span>
                  </Link>
                </div>
              </div>
            )}
            <EscolherConteudo
              key={materiaDaUrl ?? "todas"}
              materias={TODAS_AS_MATERIAS}
              contagens={contagens}
              materiaInicial={materiaDaUrl}
              temaInicial={temaDaUrl ?? null}
            />
          </>
        )}
      </div>
    </main>
  );
}
