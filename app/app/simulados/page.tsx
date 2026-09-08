import type { Metadata } from "next";
import Link from "next/link";
import { listaProvas } from "@/lib/provas";
import { exigeSessao } from "@/lib/sessao";
import css from "@/components/provas/provas.module.css";

export const metadata: Metadata = {
  title: "Provas do ENEM · Percurso",
  description:
    "As provas reais do ENEM de 2009 a 2023, com as 180 questões, cronômetro e correção por área.",
};

export const dynamic = "force-dynamic";

export default async function PaginaProvas() {
  /* A prova é cronometrada e retomável: o relógio e as marcações moram na
     conta. Deslogado não haveria onde gravar nada disso. */
  const { supabase } = await exigeSessao("/app/simulados");

  const provas = await listaProvas();

  /* Quantas questões de cada prova a pessoa já respondeu alguma vez. Uma
     consulta só para todas as provas, em vez de uma por cartão. */
  const feitas = new Map<string, { status: string; acertos: number }>();

  const { data } = await supabase
    .from("simulados")
    .select("prova_id, status, acertos, atualizado_em")
    .not("prova_id", "is", null)
    .order("atualizado_em", { ascending: false });

  for (const s of data ?? []) {
    const id = s.prova_id as string;
    if (!feitas.has(id)) {
      feitas.set(id, {
        status: s.status as string,
        acertos: s.acertos as number,
      });
    }
  }

  return (
    <main className="section" style={{ paddingTop: 40 }}>
      <div className="wrap">
        <div className="section-head">
          <div className="head-left">
            <span className="eyebrow">Provas reais</span>
            <h2 className="title">
              O ENEM de verdade.
              <br />
              <em>Do jeito que caiu.</em>
            </h2>
            <p className="lede">
              As provas aplicadas de 2009 a 2023, com as questões originais, as
              figuras e o gabarito oficial do INEP. Você responde tudo primeiro
              e vê a nota depois — como no dia da prova.
            </p>
          </div>
        </div>

        {provas.length === 0 ? (
          <div className="quiz">
            <div className="quiz-body">
              <p className="q-text">As provas ainda não foram importadas.</p>
              <p className="dim">
                Rode <code>supabase/provas.sql</code> no SQL Editor e depois{" "}
                <code>npm run importar-enem</code>.
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className={css.grade}>
              {provas.map((p) => {
                const feita = feitas.get(p.id);
                return (
                  <Link
                    key={p.id}
                    href={`/app/simulados/${p.ano}`}
                    className={css.cartao}
                  >
                    <span className={css.ano}>{p.ano}</span>
                    <span className={css.nome}>{p.nome}</span>
                    <span className={css.meta}>
                      {p.total_questoes} questões · {Math.round(p.tempo_minutos / 60)}h
                      {p.tempo_minutos % 60 ? `${p.tempo_minutos % 60}min` : ""}
                    </span>
                    {feita && (
                      <span
                        className={
                          feita.status === "concluido" ? css.selo : css.seloAberto
                        }
                      >
                        {feita.status === "concluido"
                          ? `${feita.acertos} acertos`
                          : "em andamento"}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>

            <p className="dim nota">
              Provas e gabaritos publicados pelo INEP.{" "}
              <a
                href={provas[0].fonte_url}
                target="_blank"
                rel="noreferrer noopener"
                style={{ color: "var(--accent-2)" }}
              >
                Ver a fonte oficial
              </a>
              .
            </p>
          </>
        )}
      </div>
    </main>
  );
}
