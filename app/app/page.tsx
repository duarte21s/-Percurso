import type { Metadata } from "next";
import Link from "next/link";
import { exigeSessao } from "@/lib/sessao";
import { MATERIAS_POR_ID } from "@/lib/conteudo/materias";
import { estadoChama } from "@/lib/gamificacao";
import { checaLembreteChama } from "@/lib/notificacoes";
import { CardChama } from "@/components/comunidade/CardChama";
import { RevelarGrade } from "@/components/ui/RevelarGrade";
import type { Simulado } from "@/lib/tipos";

export const metadata: Metadata = {
  title: "Visão geral · Percurso",
};

export const dynamic = "force-dynamic";

/* O dashboard é resumo + prévia. Cada ferramenta tem a sua própria página
   completa sob /app/*; aqui ficam os números, os atalhos e o histórico curto. */
const ATALHOS = [
  {
    href: "/app/questoes",
    titulo: "Questões",
    texto: "Escolha um assunto e responda com o gabarito comentado.",
  },
  {
    href: "/app/cronograma",
    titulo: "Cronograma",
    texto: "Monte a semana com revisão espaçada e descanso.",
  },
  {
    href: "/app/simulados",
    titulo: "Simulados",
    texto: "As 15 provas do ENEM, cronometradas, nota só no fim.",
  },
  {
    href: "/app/redacao",
    titulo: "Redação",
    texto: "Escreva sobre os temas reais e receba a nota nas 5 competências.",
  },
  {
    href: "/app/desempenho",
    titulo: "Desempenho",
    texto: "Aproveitamento por área e o histórico completo.",
  },
  {
    href: "/app/materias",
    titulo: "Matérias",
    texto: "Quanto você já respondeu de cada uma das nove.",
  },
];

const cartao: React.CSSProperties = {
  display: "block",
  padding: "20px 21px",
  border: "1px solid var(--borda)",
  borderRadius: 18,
  background: "var(--surface)",
  boxShadow: "0 12px 34px rgba(18, 60, 42, .045)",
};

export default async function Dashboard() {
  // Pelo guarda comum, e não por checagem própria: é ele que também derruba a
  // sessão de visitante cujo tempo acabou.
  const { supabase, user } = await exigeSessao("/app");

  const [{ data: perfil }, { data: simulados }, chama] = await Promise.all([
    supabase.from("perfis").select("nome").eq("id", user.id).maybeSingle(),
    supabase
      .from("simulados")
      .select("*")
      .eq("usuario_id", user.id)
      .order("atualizado_em", { ascending: false })
      .limit(6),
    estadoChama(supabase, user.id),
  ]);

  // Lembrete da chama (lazy, no máximo um por dia) — o projeto não tem cron.
  await checaLembreteChama(supabase, user.id, chama);

  const lista = (simulados ?? []) as Simulado[];
  const emAndamento = lista.find(
    (s) => s.status === "em_andamento" && !s.prova_id
  );
  const provaAberta = lista.find(
    (s) => s.status === "em_andamento" && s.prova_id
  );
  const concluidos = lista.filter((s) => s.status === "concluido");

  const totalAcertos = concluidos.reduce((n, s) => n + s.acertos, 0);
  const totalRespostas = concluidos.reduce((n, s) => n + s.acertos + s.erros, 0);
  const aproveitamento =
    totalRespostas > 0 ? Math.round((totalAcertos / totalRespostas) * 100) : 0;

  const nome = perfil?.nome || "por aqui";
  const anonimo = !user.email;

  return (
    <main className="section" style={{ paddingTop: 40 }}>
      <div className="wrap">
        <div className="section-head">
          <div className="head-left">
            <span className="eyebrow">Visão geral</span>
            <h2 className="title">
              Olá, <em>{nome}</em>.
            </h2>
            <p className="lede">
              {emAndamento
                ? "Você tem uma sessão de estudo aberta. Continue de onde parou — nada se perdeu."
                : "Um resumo do seu estudo. Cada bloco leva à ferramenta completa."}
            </p>
          </div>
        </div>

        {anonimo && (
          <div className="q-explain" style={{ marginBottom: 30, marginTop: 0 }}>
            <strong>Você entrou como visitante.</strong> O progresso está sendo
            salvo, mas essa sessão é anônima: se você perder o acesso a este
            navegador, não há e-mail para recuperar a conta.
          </div>
        )}

        <div style={{ marginBottom: 26 }}>
          <CardChama estado={chama} sessaoAberta={Boolean(emAndamento)} />
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
            <div className="stat-num">
              {aproveitamento}
              <span>%</span>
            </div>
            <div className="stat-label">Aproveitamento geral</div>
          </div>
          <div className="stat">
            <div className="stat-num">{emAndamento ? 1 : 0}</div>
            <div className="stat-label">Em andamento</div>
          </div>
        </RevelarGrade>

        {(emAndamento || provaAberta) && (
          <div className="uni-tools" style={{ marginBottom: 26 }}>
            {emAndamento && (
              <Link href={`/app/questoes?sessao=${encodeURIComponent(emAndamento.id)}`} className="btn btn-primary">
                Continuar estudando <span className="arrow">→</span>
              </Link>
            )}
            {provaAberta && (
              <Link
                href={`/app/simulados/${String(provaAberta.prova_id).replace("enem-", "")}`}
                className="btn btn-accent"
              >
                Voltar à prova do ENEM
              </Link>
            )}
          </div>
        )}

        <RevelarGrade
          style={{
            display: "grid",
            gap: 12,
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            marginBottom: 40,
          }}
        >
          {ATALHOS.map((a) => (
            <Link key={a.href} href={a.href} style={cartao}>
              <strong style={{ display: "block", fontSize: 14, marginBottom: 4 }}>
                {a.titulo} <span className="arrow">→</span>
              </strong>
              <span
                className="dim"
                style={{ fontSize: 12.5, lineHeight: 1.5 }}
              >
                {a.texto}
              </span>
            </Link>
          ))}
        </RevelarGrade>

        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            margin: "0 0 18px",
          }}
        >
          <h3 style={{ fontSize: 15, fontWeight: 600 }}>Histórico recente</h3>
          <Link
            href="/app/desempenho"
            className="dim"
            style={{ color: "var(--accent-2)", fontSize: 13 }}
          >
            Ver tudo →
          </Link>
        </div>

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
                      Nada por aqui ainda. A primeira sessão começa em um clique.
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
