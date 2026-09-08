import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ModoProva } from "@/components/provas/ModoProva";
import { IniciarProva } from "@/components/provas/IniciarProva";
import { EscreverRedacao } from "@/components/redacao/EscreverRedacao";
import { buscaProva } from "@/lib/provas";
import { exigeSessao } from "@/lib/sessao";
import type { QuestaoProva } from "@/lib/tipos";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ ano: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ano } = await params;
  return {
    title: `ENEM ${ano} · Percurso`,
    description: `A prova do ENEM ${ano} na íntegra, com cronômetro e correção por área.`,
  };
}

export default async function PaginaProva({ params }: Props) {
  const { ano } = await params;

  const { supabase } = await exigeSessao(`/app/simulados/${ano}`);

  const prova = await buscaProva(`enem-${ano}`);
  if (!prova) notFound();

  /* ---------- logado: retoma a tentativa mais recente ---------- */
  const [{ data: simulado }, { data: temaRedacao }] = await Promise.all([
    supabase
      .from("simulados")
      .select("id, status, questao_ids, com_redacao, indice_atual, expira_em")
      .eq("prova_id", prova.id)
      .order("atualizado_em", { ascending: false })
      .limit(1)
      .maybeSingle(),
    supabase
      .from("temas_redacao")
      .select("id, ano, tema")
      .eq("prova_id", prova.id)
      .eq("aplicacao", "regular")
      .maybeSingle(),
  ]);

  if (!simulado) {
    return (
      <main className="section" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="section-head">
            <div className="head-left">
              <span className="eyebrow">{prova.banca}</span>
              <h2 className="title">{prova.nome}</h2>
              <p className="lede">
                A prova aplicada, na íntegra. Você responde tudo e só depois vê
                a nota — como no dia.
              </p>
            </div>
          </div>
          <IniciarProva
            provaId={prova.id}
            totalQuestoes={prova.total_questoes}
            tempoMinutos={prova.tempo_minutos}
            temaRedacao={(temaRedacao?.tema as string) ?? null}
          />
        </div>
      </main>
    );
  }

  /* A ordem das questões é a congelada em `questao_ids` na criação — inclusive
     a língua escolhida lá. Reler pelo idioma da URL devolveria outro conjunto
     para quem já começou. */
  const ids = (simulado.questao_ids as string[]) ?? [];
  const { data: linhas } = await supabase
    .from("questoes")
    .select("id, numero, area, idioma, fonte, enunciado, opcoes, imagens, opcoes_imagens")
    .in("id", ids);

  const porId = new Map(
    ((linhas ?? []) as QuestaoProva[]).map((q) => [q.id, q])
  );
  const questoes = ids
    .map((id) => porId.get(id))
    .filter((q): q is QuestaoProva => Boolean(q));

  /* `acertou` não é selecionado de propósito: durante a prova o cliente não
     deve ter como saber o que acertou. A correção chega inteira, e só, na
     resposta de /api/prova/finalizar. */
  const { data: respostas } = await supabase
    .from("respostas")
    .select("questao_id, alternativa")
    .eq("simulado_id", simulado.id);

  const marcadas: Record<string, number> = {};
  for (const r of respostas ?? []) {
    marcadas[r.questao_id as string] = r.alternativa as number;
  }

  return (
    <main className="section" style={{ paddingTop: 40 }}>
      <div className="wrap">
        <div className="section-head">
          <div className="head-left">
            <span className="eyebrow">{prova.banca}</span>
            <h2 className="title">{prova.nome}</h2>
          </div>
        </div>

        {/* A redação abre no topo, dobrada. Quem escolheu fazê-la decide
            quando escrever: no começo, no fim, ou no meio — como na prova de
            verdade, em que a folha fica na mesa o tempo todo. */}
        {simulado.com_redacao && temaRedacao && (
          <details className="quiz" style={{ marginBottom: 24 }} open>
            <summary
              style={{
                cursor: "pointer",
                padding: "18px 22px",
                fontSize: 15,
                color: "var(--accent-2)",
              }}
            >
              Redação · {temaRedacao.tema as string}
            </summary>
            <div style={{ padding: "0 22px 22px" }}>
              <EscreverRedacao
                temaId={temaRedacao.id as string}
                tema={temaRedacao.tema as string}
                ano={temaRedacao.ano as number}
                simuladoId={simulado.id as string}
              />
            </div>
          </details>
        )}

        <ModoProva
          key={simulado.id}
          prova={prova}
          questoes={questoes}
          simuladoId={simulado.id as string}
          marcadasIniciais={marcadas}
          indiceInicial={(simulado.indice_atual as number) ?? 0}
          restanteInicial={
            simulado.expira_em
              ? Math.max(
                  0,
                  Math.floor(
                    (new Date(simulado.expira_em as string).getTime() - Date.now()) / 1000
                  )
                )
              : null
          }
          jaEntregue={simulado.status === "concluido"}
          comRedacao={Boolean(simulado.com_redacao)}
        />

        <p className="dim nota" style={{ marginTop: 30 }}>
          Prova e gabarito publicados pelo INEP.{" "}
          <a
            href={prova.fonte_url}
            target="_blank"
            rel="noreferrer noopener"
            style={{ color: "var(--accent-2)" }}
          >
            Fonte oficial
          </a>
          .
        </p>
      </div>
    </main>
  );
}
