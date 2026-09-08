import type { Metadata } from "next";
import Link from "next/link";
import { exigeSessao } from "@/lib/sessao";
import css from "@/components/redacao/redacao.module.css";

export const metadata: Metadata = {
  title: "Redação do ENEM · Percurso",
  description:
    "Escreva sobre os temas reais do ENEM e receba a nota nas cinco competências. Dá para digitar ou mandar foto da folha.",
};

export const dynamic = "force-dynamic";

interface Tema {
  id: string;
  ano: number;
  tema: string;
  aplicacao: string;
}

export default async function PaginaRedacao() {
  /* A redação escrita aqui é da pessoa: fica numa pasta privada do Storage,
     presa ao id dela. Não existe versão anônima disso. */
  const { supabase } = await exigeSessao("/app/redacao");

  const { data } = await supabase
    .from("temas_redacao")
    .select("id, ano, tema, aplicacao")
    .order("ano", { ascending: false })
    .order("aplicacao", { ascending: true });

  const temas = (data ?? []) as Tema[];

  /* Quanto a pessoa já tirou em cada tema. Uma consulta só; o RLS garante que
     só vêm as redações dela. */
  const melhores = new Map<string, number>();
  const { data: minhas } = await supabase
    .from("redacoes")
    .select("tema_id, total")
    .eq("status", "avaliada");

  for (const r of minhas ?? []) {
    const id = r.tema_id as string;
    const t = (r.total as number) ?? 0;
    if (!melhores.has(id) || t > (melhores.get(id) ?? 0)) melhores.set(id, t);
  }

  return (
    <main className="section" style={{ paddingTop: 40 }}>
      <div className="wrap">
        <div className="section-head">
          <div className="head-left">
            <span className="eyebrow">Redação</span>
            <h2 className="title">
              Escreva.
              <br />
              <em>Descubra a nota.</em>
            </h2>
            <p className="lede">
              Os temas que caíram de verdade, de 2009 a 2023. Você escreve
              digitando ou fotografa a folha manuscrita, e recebe a nota nas
              cinco competências do INEP — com o motivo de cada uma.
            </p>
          </div>
        </div>

        {temas.length === 0 ? (
          <div className="quiz">
            <div className="quiz-body">
              <p className="q-text">Os temas ainda não foram carregados.</p>
              <p className="dim">
                Rode <code>supabase/redacao.sql</code> no SQL Editor do projeto.
              </p>
            </div>
          </div>
        ) : (
          <div className={css.gradeTemas}>
            {temas.map((t) => {
              const nota = melhores.get(t.id);
              return (
                <Link
                  key={t.id}
                  href={`/app/redacao/${t.id}`}
                  className={css.cartaoTema}
                >
                  <span className={css.cartaoAno}>
                    ENEM {t.ano}
                    {t.aplicacao === "reaplicacao" && " · reaplicação"}
                  </span>
                  <span className={css.cartaoTexto}>{t.tema}</span>
                  {nota !== undefined && (
                    <span className={css.cartaoSelo}>sua melhor: {nota}</span>
                  )}
                </Link>
              );
            })}
          </div>
        )}

        <p className="dim nota" style={{ marginTop: 30 }}>
          Os textos motivadores de cada proposta estão nos cadernos oficiais.{" "}
          <a
            href="https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/provas-e-gabaritos"
            target="_blank"
            rel="noreferrer noopener"
            style={{ color: "var(--accent-2)" }}
          >
            Ver no INEP
          </a>
          .
        </p>
      </div>
    </main>
  );
}
