import type { Metadata } from "next";
import Link from "next/link";
import { exigeSessao } from "@/lib/sessao";
import { MATERIAS_POR_ID } from "@/lib/conteudo/materias";
import { estadoChama } from "@/lib/gamificacao";
import { checaLembreteChama } from "@/lib/notificacoes";
import { CardChama } from "@/components/comunidade/CardChama";
import { RevelarGrade } from "@/components/ui/RevelarGrade";
import type { Simulado } from "@/lib/tipos";
import css from "./dashboard.module.css";

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
    <main className={css.dashboard}>
      <div className={`wrap ${css.conteudo}`}>
        <div className={css.hero}>
          <div>
            <span className={css.kicker}>Visão geral</span>
            <h1 className={css.titulo}>
              Olá, <em>{nome}</em>.
            </h1>
          </div>
          <p className={css.lede}>
            {emAndamento
              ? "Você tem uma sessão de estudo aberta. Continue de onde parou — nada se perdeu."
              : "Um resumo do seu estudo. Cada bloco leva à ferramenta completa."}
          </p>
        </div>

        {anonimo && (
          <div className={`q-explain ${css.aviso}`}>
            <strong>Você entrou como visitante.</strong> O progresso está sendo
            salvo, mas essa sessão é anônima: se você perder o acesso a este
            navegador, não há e-mail para recuperar a conta.
          </div>
        )}

        <div className={css.chama}>
          <CardChama estado={chama} sessaoAberta={Boolean(emAndamento)} />
        </div>

        <RevelarGrade className={`stats ${css.stats}`}>
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
          <div className={css.continuar}>
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

        <RevelarGrade className={css.atalhos}>
          {ATALHOS.map((a) => (
            <Link key={a.href} href={a.href} className={css.atalho}>
              <strong className={css.atalhoTitulo}>
                {a.titulo} <span className={css.seta}>→</span>
              </strong>
              <span className={css.atalhoTexto}>{a.texto}</span>
            </Link>
          ))}
        </RevelarGrade>

        <div className={css.historicoTopo}>
          <h2 className={css.historicoTitulo}>Histórico recente</h2>
          <Link
            href="/app/desempenho"
            className={css.verTudo}
          >
            Ver tudo →
          </Link>
        </div>

        <div className={`uni-table ${css.tabela}`}>
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
