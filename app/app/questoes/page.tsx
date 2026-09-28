import type { Metadata } from "next";
import Link from "next/link";
import { Sessao } from "@/components/estudo/Sessao";
import { ResultadoSessao } from "@/components/estudo/ResultadoSessao";
import { EscolherConteudo } from "@/components/estudo/EscolherConteudo";
import { exigeSessao } from "@/lib/sessao";
import { contagensPorTema } from "@/lib/temas";
import { leitorDoAcervo } from "@/lib/supabase/admin";
import { corrigeSessaoDeTreino, type Correcao } from "@/lib/resultado-sessao";
import {
  MATERIAS_POR_ID,
  TODAS_AS_MATERIAS,
} from "@/lib/conteudo/materias";
import type { QuestaoPublica, Simulado } from "@/lib/tipos";

export const metadata: Metadata = {
  title: "Questões · Percurso",
  description:
    "Escolha uma matéria e um assunto e responda questões comentadas. Ao finalizar a sessão, você vê a sua resposta, a certa e o comentário de cada uma.",
};

export const dynamic = "force-dynamic";

function Cabecalho() {
  return (
    <div className="section-head">
      <div className="head-left">
        <span className="eyebrow">Questões</span>
        <h1 className="title">
          Escolha o assunto.
          <br />
          Descubra <em>por que</em> errou.
        </h1>
        <p className="lede">
          Questões comentadas, organizadas por conteúdo. Você responde a sessão
          inteira e, ao finalizar, vê a sua resposta, a certa e o porquê de cada
          uma. Cada resposta fica salva — pode fechar a aba e voltar depois.
        </p>
      </div>
    </div>
  );
}

/* O rótulo do recorte prefere os temas, que é o que a pessoa escolheu de
   fato; a matéria só entra quando a sessão não tem tema. */
function recorteDe(s: Simulado | null): string {
  if (!s) return "Todas as matérias";
  if (s.tema_filtro) return s.tema_filtro;
  if (s.materia_filtro === "todas") return "Todas as matérias";
  return MATERIAS_POR_ID.get(s.materia_filtro)?.nome ?? s.materia_filtro;
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

  /* Sessão já encerrada, pelo link explícito (do histórico, ou recarregando
     a página logo depois de finalizar). Finalizada, mostra o resultado;
     encerrada no meio, só o aviso — abandonar não abre o gabarito. Quem
     decide é `corrigeSessaoDeTreino`, a mesma regra de /api/simulado/finalizar.
     Aqui ela só lê: abrir uma página não corrige nada. */
  let encerrada: Simulado | null = null;
  let correcao: Correcao | null = null;
  if (!sessao && sessaoDaUrl) {
    const { data } = await supabase
      .from("simulados")
      .select("*")
      .eq("id", sessaoDaUrl)
      .eq("usuario_id", user.id)
      .eq("status", "concluido")
      .is("prova_id", null)
      .maybeSingle();
    encerrada = (data as Simulado | null) ?? null;
    if (encerrada) {
      correcao = await corrigeSessaoDeTreino(supabase, encerrada.id, { gravar: false });
    }
  }

  const resultadoEncerrada = correcao?.ok ? correcao.resultado : null;
  const falhaEncerrada = correcao && !correcao.ok ? correcao : null;

  const contagens =
    sessao || encerrada ? {} : await contagensPorTema(leitorDoAcervo(supabase));

  let questoes: QuestaoPublica[] = [];
  let respondidas = 0;

  if (sessao) {
    // Nunca selecionamos `correta`/`explicacao` aqui: o gabarito só existe no
    // resultado, depois de a sessão ser finalizada.
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
            recorte={recorteDe(sessao)}
          />
        ) : encerrada && resultadoEncerrada ? (
          <ResultadoSessao resultado={resultadoEncerrada} recorte={recorteDe(encerrada)} />
        ) : encerrada && falhaEncerrada ? (
          <div className="quiz">
            <div className="quiz-body">
              <div className="q-source">
                {falhaEncerrada.status === 409 ? "Sessão encerrada antes do fim" : "Resultado indisponível"}
              </div>
              <p className="q-text">{falhaEncerrada.erro}</p>
            </div>
            <div className="quiz-foot">
              <span className="dim fine">{recorteDe(encerrada)}</span>
              <div className="quiz-foot-acoes">
                <Link href="/app/questoes" className="btn btn-primary">
                  Escolher um conteúdo <span className="arrow">→</span>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <>
            {anterior && (
              <div className="quiz" style={{ marginBottom: 24 }}>
                <div className="quiz-foot">
                  <p className="dim fine">
                    Estudo em andamento: <strong>{recorteDe(anterior)}</strong>.
                    Você pode continuar ou escolher outro conteúdo abaixo. Ao
                    iniciar um novo estudo, o anterior é encerrado: se ainda
                    faltarem questões, ele fica sem resultado.
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
