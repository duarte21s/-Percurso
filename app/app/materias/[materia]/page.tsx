import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MATERIAS } from "@/lib/conteudo/materias";
import { chaveTema, contagensPorTema } from "@/lib/temas";
import { criaClienteServidor } from "@/lib/supabase/server";
import { exigeSessao } from "@/lib/sessao";

export const dynamic = "force-dynamic";

/**
 * Os conteúdos de UMA matéria, numa página só.
 *
 * Existe porque a única porta para os assuntos era uma sanfona: abrir a
 * matéria, esperar o painel expandir, escolher ali dentro. Sanfona depende de
 * JavaScript rodar e de o navegador animar altura — e quando qualquer um dos
 * dois falha, os 15 conteúdos simplesmente não existem para quem está olhando.
 *
 * Aqui eles são LINKS. Uma lista renderizada no servidor, com endereço próprio
 * por matéria. Não há estado, não há painel para abrir, não há nada que possa
 * ficar preso fechado. Se a página carregou, os conteúdos estão visíveis.
 *
 * Cada um leva ao seletor com ele já marcado, a um clique de começar.
 */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ materia: string }>;
}): Promise<Metadata> {
  const { materia } = await params;
  const m = MATERIAS.find((x) => x.id === materia);
  return { title: m ? `${m.nome} · Percurso` : "Matéria · Percurso" };
}

export default async function PaginaMateria({
  params,
}: {
  params: Promise<{ materia: string }>;
}) {
  const { materia: id } = await params;
  await exigeSessao(`/app/materias/${id}`);
  const m = MATERIAS.find((x) => x.id === id);
  if (!m) notFound();

  const supabase = await criaClienteServidor();
  const contagens = supabase ? await contagensPorTema(supabase) : {};

  const linhas = m.topicos.map(([titulo, incidencia]) => {
    const c = contagens[chaveTema(m.id, titulo)] ?? { total: 0, comentadas: 0 };
    return { titulo, incidencia, ...c };
  });

  const totalComentadas = linhas.reduce((n, l) => n + l.comentadas, 0);
  const comQuestao = linhas.filter((l) => l.comentadas > 0).length;

  return (
    <main className="section" style={{ paddingTop: 44 }}>
      <div className="wrap">
        <p className="fine dim" style={{ marginBottom: 10 }}>
          <Link href="/app/materias" style={{ color: "var(--accent-2)" }}>
            ← Todas as matérias
          </Link>
        </p>

        <span className="eyebrow">{m.area}</span>
        <h1 className="title" style={{ marginTop: 8 }}>
          {m.nome}
        </h1>
        <p className="lede">{m.resumo}</p>

        <p className="fine dim" style={{ marginTop: 14 }}>
          {m.topicos.length} conteúdos · {comQuestao} com questão ·{" "}
          {totalComentadas.toLocaleString("pt-BR")} questões comentadas no total
        </p>

        {totalComentadas > 0 && (
          <div style={{ marginTop: 24 }}>
            <Link
              href={`/app/questoes?materia=${m.id}&inteira=1`}
              className="btn btn-primary"
            >
              Estudar a matéria inteira <span className="arrow">→</span>
            </Link>
          </div>
        )}

        {/* A lista. Sem sanfona: os 15 estão aqui desde que a página abriu. */}
        <div className="pontos" style={{ marginTop: 40 }}>
          {linhas.map((l, i) => (
            <div className="ponto" key={l.titulo}>
              <h3>
                <span
                  className="dim"
                  style={{ fontFamily: "var(--mono)", fontSize: 12 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>{" "}
                {l.titulo}
              </h3>
              <div>
                <p style={{ marginBottom: 10 }}>
                  {l.comentadas > 0 ? (
                    <>
                      <strong style={{ color: "var(--text)" }}>
                        {l.comentadas}
                      </strong>{" "}
                      {l.comentadas === 1
                        ? "questão comentada"
                        : "questões comentadas"}
                      {(l.incidencia ?? 0) > 0 && (
                        <> · incidência histórica {l.incidencia}%</>
                      )}
                    </>
                  ) : (
                    <span className="dim">
                      Ainda sem questão comentada deste conteúdo.
                    </span>
                  )}
                </p>

                {l.comentadas > 0 && (
                  <Link
                    href={`/app/questoes?materia=${m.id}&tema=${encodeURIComponent(l.titulo)}`}
                    className="btn"
                    style={{ padding: "9px 16px", fontSize: 13 }}
                  >
                    Estudar este conteúdo <span className="arrow">→</span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
