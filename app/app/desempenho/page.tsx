import type { Metadata } from "next";
import Link from "next/link";
import { exigeSessao } from "@/lib/sessao";
import { MATERIAS_POR_ID } from "@/lib/conteudo/materias";
import { RevelarGrade } from "@/components/ui/RevelarGrade";
import type { Simulado } from "@/lib/tipos";

export const metadata: Metadata = {
  title: "Desempenho · Percurso",
  description: "Seu histórico completo de sessões e provas, com acertos e aproveitamento.",
};

export const dynamic = "force-dynamic";

export default async function PaginaDesempenho() {
  const { supabase, user } = await exigeSessao("/app/desempenho");

  const { data: simulados } = await supabase
    .from("simulados")
    .select("*")
    .eq("usuario_id", user.id)
    .order("atualizado_em", { ascending: false });

  const lista = (simulados ?? []) as Simulado[];
  const concluidos = lista.filter((s) => s.status === "concluido");

  const totalAcertos = concluidos.reduce((n, s) => n + s.acertos, 0);
  const totalErros = concluidos.reduce((n, s) => n + s.erros, 0);
  const totalRespostas = totalAcertos + totalErros;
  const aproveitamento =
    totalRespostas > 0 ? Math.round((totalAcertos / totalRespostas) * 100) : 0;

  /* Aproveitamento por área do ensino médio. Só as sessões de estudo por
     matéria entram — as provas do ENEM não têm `materia_filtro` útil aqui. */
  const AREAS = [
    { area: "exatas", rotulo: "Exatas" },
    { area: "natureza", rotulo: "Natureza" },
    { area: "humanas", rotulo: "Humanas" },
    { area: "linguagens", rotulo: "Linguagens" },
  ] as const;

  const porArea = new Map<string, { acertos: number; total: number }>();
  for (const s of concluidos) {
    if (!s.materia_filtro || s.materia_filtro === "todas" || s.prova_id) continue;
    const area = MATERIAS_POR_ID.get(s.materia_filtro)?.area;
    if (!area) continue;
    const cur = porArea.get(area) ?? { acertos: 0, total: 0 };
    cur.acertos += s.acertos ?? 0;
    cur.total += (s.acertos ?? 0) + (s.erros ?? 0);
    porArea.set(area, cur);
  }

  const areaLista = AREAS.flatMap((a) => {
    const d = porArea.get(a.area);
    if (!d || d.total === 0) return [];
    return [{ ...a, aprov: Math.round((d.acertos / d.total) * 100), total: d.total }];
  });

  return (
    <main className="section" style={{ paddingTop: 40 }}>
      <div className="wrap">
        <div className="section-head">
          <div className="head-left">
            <span className="eyebrow">Desempenho</span>
            <h2 className="title">
              Tudo o que você <em>já respondeu</em>.
            </h2>
            <p className="lede">
              O histórico completo das suas sessões de estudo e provas do ENEM.
              Cada resposta gravada entra aqui.
            </p>
          </div>
        </div>

        <RevelarGrade className="stats" style={{ marginBottom: 26 }}>
          <div className="stat">
            <div className="stat-num">{concluidos.length}</div>
            <div className="stat-label">Sessões concluídas</div>
          </div>
          <div className="stat">
            <div className="stat-num">{totalRespostas}</div>
            <div className="stat-label">Questões respondidas</div>
          </div>
          <div className="stat">
            <div className="stat-num">{totalAcertos}</div>
            <div className="stat-label">Acertos</div>
          </div>
          <div className="stat">
            <div className="stat-num">
              {aproveitamento}
              <span>%</span>
            </div>
            <div className="stat-label">Aproveitamento geral</div>
          </div>
        </RevelarGrade>

        {areaLista.length > 0 && (
          <div style={{ marginBottom: 30 }}>
            <h3 style={{ margin: "0 0 14px", fontSize: 15, fontWeight: 600 }}>
              Aproveitamento por área
            </h3>
            <div className="plan-dist">
              <ul className="plan-dist-lista">
                {areaLista.map((a) => (
                  <li key={a.area}>
                    <span className="plan-dist-nome">
                      {a.rotulo}
                      <em>{a.total} respondidas</em>
                    </span>
                    <span className="plan-dist-barra">
                      <i style={{ width: `${a.aprov}%` }} />
                    </span>
                    <span className="plan-dist-horas">{a.aprov}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <h3 style={{ margin: "0 0 14px", fontSize: 15, fontWeight: 600 }}>
          Histórico
        </h3>
        <div className="uni-table">
          <div className="uni-scroll">
            <table className="uni">
              <thead>
                <tr>
                  <th>Quando</th>
                  <th>Matéria</th>
                  <th>Acertos</th>
                  <th>Erros</th>
                  <th>Situação</th>
                </tr>
              </thead>
              <tbody>
                {lista.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="empty-row">
                      Nada por aqui ainda.{" "}
                      <Link href="/app/questoes" style={{ color: "var(--accent-2)" }}>
                        Comece uma sessão.
                      </Link>
                    </td>
                  </tr>
                ) : (
                  lista.map((s) => (
                    <tr key={s.id}>
                      <td>
                        {new Date(s.atualizado_em).toLocaleDateString("pt-BR", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </td>
                      <td className="uni-name">
                        {s.prova_id
                          ? `Prova do ENEM ${String(s.prova_id).replace("enem-", "")}`
                          : s.materia_filtro === "todas"
                            ? "Todas as matérias"
                            : (MATERIAS_POR_ID.get(s.materia_filtro)?.nome ??
                              s.materia_filtro)}
                      </td>
                      <td>
                        <span className="cut">{s.acertos}</span>
                      </td>
                      <td>
                        <span className="cut">{s.erros}</span>
                      </td>
                      <td>
                        <span
                          className={
                            s.status === "em_andamento" ? "chip accent" : "chip"
                          }
                        >
                          {s.status === "em_andamento"
                            ? "Em andamento"
                            : "Concluído"}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
