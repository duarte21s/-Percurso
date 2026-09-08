import type { Metadata } from "next";
import Link from "next/link";
import { exigeSessao } from "@/lib/sessao";
import { TODAS_AS_MATERIAS } from "@/lib/conteudo/materias";
import { contagensPorMateria } from "@/lib/temas";
import { Revelar } from "@/components/ui/Revelar";
import type { Simulado } from "@/lib/tipos";

export const metadata: Metadata = {
  title: "Matérias · Percurso",
  description:
    "As nove matérias, com quantas questões você já respondeu de cada uma e o seu aproveitamento.",
};

export const dynamic = "force-dynamic";

export default async function PaginaMaterias() {
  const { supabase, user } = await exigeSessao("/app/materias");

  const ids = TODAS_AS_MATERIAS.map((m) => m.id);

  const [{ data: simulados }, disponiveis] = await Promise.all([
    supabase
      .from("simulados")
      .select("materia_filtro, acertos, erros, status, prova_id")
      .eq("usuario_id", user.id)
      .eq("status", "concluido")
      .is("prova_id", null),
    contagensPorMateria(supabase, ids),
  ]);

  /* Agrega as sessões concluídas por matéria. Sessões de "todas as matérias"
     não entram num balde específico — ficam no resumo geral. */
  const porMateria = new Map<string, { acertos: number; total: number }>();
  let geralAcertos = 0;
  let geralTotal = 0;

  for (const s of (simulados ?? []) as Simulado[]) {
    const acertos = s.acertos ?? 0;
    const respostas = acertos + (s.erros ?? 0);
    geralAcertos += acertos;
    geralTotal += respostas;
    if (s.materia_filtro && s.materia_filtro !== "todas") {
      const atual = porMateria.get(s.materia_filtro) ?? { acertos: 0, total: 0 };
      atual.acertos += acertos;
      atual.total += respostas;
      porMateria.set(s.materia_filtro, atual);
    }
  }

  const geralAprov =
    geralTotal > 0 ? Math.round((geralAcertos / geralTotal) * 100) : 0;

  return (
    <main className="section" style={{ paddingTop: 40 }}>
      <div className="wrap">
        <div className="section-head">
          <div className="head-left">
            <span className="eyebrow">Matérias</span>
            <h2 className="title">
              Onde você <em>já andou</em>.
            </h2>
            <p className="lede">
              As nove matérias do ensino médio. Ao lado de cada uma, quantas
              questões você já respondeu dela e o seu aproveitamento até aqui.
            </p>
          </div>
        </div>

        {geralTotal > 0 && (
          <p className="dim nota" style={{ marginTop: 0 }}>
            No total: {geralTotal} questões respondidas · {geralAprov}% de
            aproveitamento geral.
          </p>
        )}

        <Revelar como="div" className="uni-table">
          <div className="uni-scroll">
            <table className="uni">
              <thead>
                <tr>
                  <th>Matéria</th>
                  <th>Respondidas</th>
                  <th>No banco</th>
                  <th>Aproveitamento</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {TODAS_AS_MATERIAS.map((m) => {
                  const dados = porMateria.get(m.id) ?? { acertos: 0, total: 0 };
                  const noBanco = disponiveis[m.id] ?? 0;
                  const aprov =
                    dados.total > 0
                      ? Math.round((dados.acertos / dados.total) * 100)
                      : null;
                  const pct =
                    noBanco > 0
                      ? Math.min(100, Math.round((dados.total / noBanco) * 100))
                      : 0;

                  return (
                    <tr key={m.id}>
                      <td className="uni-name">
                        <span aria-hidden="true">{m.glifo}</span> {m.nome}
                      </td>
                      <td>
                        <span className="cut">{dados.total}</span>
                        <span className="meter" style={{ marginLeft: 8 }}>
                          <i style={{ width: `${pct}%` }} />
                        </span>
                      </td>
                      <td>{noBanco.toLocaleString("pt-BR")}</td>
                      <td>
                        {aprov === null ? (
                          <span className="dim">—</span>
                        ) : (
                          <span className="cut">{aprov}%</span>
                        )}
                      </td>
                      <td>
                        <Link
                          /* Leva a matéria escolhida. Sem isto, quem clicava
                             aqui caía no seletor com as nove fechadas e tinha
                             que procurar de novo a que acabou de escolher. */
                          /* Leva para a PÁGINA da matéria, onde os 15
                             conteúdos aparecem como lista — em vez de para o
                             seletor, onde é preciso abrir uma sanfona. */
                          href={`/app/materias/${m.id}`}
                          className="dim"
                          style={{ color: "var(--accent-2)", fontSize: 13 }}
                        >
                          Ver conteúdos →
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Revelar>

        <div style={{ marginTop: 28 }}>
          <Link href="/app/questoes" className="btn btn-primary">
            Escolher um assunto <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
