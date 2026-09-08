import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { criaClienteServidor } from "@/lib/supabase/server";
import { montarAutor } from "@/lib/conteudo/comunidade";
import { estadoChama, progressoNivel, titulosDisponiveis } from "@/lib/gamificacao";
import { temSessaoAvulsaAberta } from "@/lib/sessao";
import { Avatar } from "@/components/comunidade/Avatar";
import { CardChama } from "@/components/comunidade/CardChama";
import { Conquistas } from "@/components/comunidade/Conquistas";
import { GraficoBarras } from "@/components/comunidade/Grafico";
import { EditorPerfil } from "@/components/comunidade/EditorPerfil";
import { BarraNivel } from "@/components/comunidade/BarraNivel";
import { RevelarGrade } from "@/components/ui/RevelarGrade";
import css from "@/components/comunidade/estudos.module.css";
import type { Autor } from "@/lib/tipos";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ username: string }>;
  searchParams: Promise<{ editar?: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = await params;
  return { title: `@${username} · Comunidade · Percurso` };
}

/** Datas ISO de resposta → contagem por semana, para o gráfico do próprio perfil. */
function porSemana(datas: string[], semanas = 8): { rotulo: string; valor: number }[] {
  const hoje = new Date();
  const baldes: { rotulo: string; ini: number; valor: number }[] = [];
  for (let i = semanas - 1; i >= 0; i--) {
    const ini = new Date(hoje);
    ini.setDate(hoje.getDate() - i * 7 - hoje.getDay());
    ini.setHours(0, 0, 0, 0);
    const rotulo = `${ini.getDate()}/${ini
      .toLocaleDateString("pt-BR", { month: "short" })
      .replace(".", "")}`;
    baldes.push({ rotulo, ini: ini.getTime(), valor: 0 });
  }
  for (const iso of datas) {
    const t = new Date(iso).getTime();
    for (let b = baldes.length - 1; b >= 0; b--) {
      if (t >= baldes[b].ini) {
        baldes[b].valor++;
        break;
      }
    }
  }
  return baldes.map((b) => ({ rotulo: b.rotulo, valor: b.valor }));
}

export default async function PaginaPerfil({ params, searchParams }: Props) {
  const { username } = await params;
  const { editar } = await searchParams;

  const supabase = await criaClienteServidor();
  if (!supabase) notFound();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: perfil } = await supabase
    .from("vw_perfil_publico")
    .select(
      "id, nome, username, verificado, avatar_path, xp, titulo_ativo, chama_melhor, bio"
    )
    .eq("username", username)
    .maybeSingle();

  if (!perfil) notFound();

  const ehVoce = user?.id === perfil.id;
  const editando = ehVoce && editar === "1";

  const [{ data: estat }, { data: conqRows }, chama] = await Promise.all([
    supabase
      .from("vw_estat_usuario")
      .select("questoes_respondidas, acertos")
      .eq("usuario_id", perfil.id)
      .maybeSingle(),
    supabase
      .from("usuario_conquistas")
      .select("conquista_slug")
      .eq("usuario_id", perfil.id),
    estadoChama(supabase, perfil.id),
  ]);

  /* Só faz sentido no próprio perfil — em perfil de terceiro o cartão nem é
     renderizado, e perguntar pela sessão de outra pessoa não passaria pela RLS. */
  const sessaoAberta = ehVoce
    ? await temSessaoAvulsaAberta(supabase, perfil.id)
    : false;

  const conquistas = (conqRows ?? []).map((c) => c.conquista_slug as string);
  const questoes = estat?.questoes_respondidas ?? 0;
  const acertos = estat?.acertos ?? 0;
  const aproveitamento = questoes > 0 ? Math.round((acertos / questoes) * 100) : 0;
  const { nivel, noNivel, doNivel, pct } = progressoNivel(perfil.xp ?? 0);
  const melhorSeq = Math.max(chama.melhor, perfil.chama_melhor ?? 0, chama.perdida);

  const eu: Autor = montarAutor(perfil, { id: perfil.id });

  // Gráfico só no próprio perfil — as respostas são privadas do dono.
  let grafico: { rotulo: string; valor: number }[] | null = null;
  if (ehVoce) {
    const { data: sims } = await supabase
      .from("simulados")
      .select("id")
      .eq("usuario_id", perfil.id);
    const ids = (sims ?? []).map((s) => s.id as string);
    if (ids.length) {
      const { data: resp } = await supabase
        .from("respostas")
        .select("respondido_em")
        .in("simulado_id", ids)
        .order("respondido_em", { ascending: false })
        .limit(3000);
      grafico = porSemana((resp ?? []).map((r) => r.respondido_em as string));
    } else {
      grafico = porSemana([]);
    }
  }

  return (
    <main className="section" style={{ paddingTop: 150 }}>
      <div className="wrap" style={{ maxWidth: 760 }}>
        <Link href="/comunidade" className="dim fine">
          ← Comunidade
        </Link>

        <div className={css.perfilTopo} style={{ marginTop: 16 }}>
          <Avatar autor={eu} tamanho="grande" />
          <div className={css.perfilIdent}>
            <div className={css.perfilNome}>
              {eu.nome}
              {eu.verificado && <span title="Conta verificada">✓</span>}
            </div>
            <div className={css.perfilArroba}>@{eu.username}</div>
            {perfil.titulo_ativo && (
              <div className={css.perfilTitulo}>{perfil.titulo_ativo}</div>
            )}
          </div>
          {ehVoce && !editando && (
            <Link
              href={`/comunidade/perfil/${eu.username}?editar=1`}
              className="btn btn-ghost"
              style={{ marginLeft: "auto" }}
            >
              Editar perfil
            </Link>
          )}
        </div>

        {perfil.bio && !editando && <p className={css.perfilBio}>{perfil.bio}</p>}

        <div className={css.perfilNivel}>
          <span>
            Nível <b style={{ color: "var(--text-2)" }}>{nivel}</b>
          </span>
          <span className={css.perfilNivelBarra}>
            <BarraNivel pct={pct} />
          </span>
          <span>
            {noNivel} / {doNivel} XP
          </span>
        </div>

        {editando && (
          <div style={{ margin: "20px 0" }}>
            <EditorPerfil
              eu={eu}
              bio={perfil.bio ?? ""}
              tituloAtivo={perfil.titulo_ativo ?? null}
              titulosDisponiveis={titulosDisponiveis(conquistas)}
            />
            <Link
              href={`/comunidade/perfil/${eu.username}`}
              className="dim fine"
              style={{ display: "inline-block", marginTop: 10 }}
            >
              ← concluir
            </Link>
          </div>
        )}

        <RevelarGrade className={css.perfilStats}>
          <div className={css.perfilStat}>
            <div className={css.perfilStatNum}>{chama.atual}</div>
            <div className={css.perfilStatRot}>🔥 Chama atual</div>
          </div>
          <div className={css.perfilStat}>
            <div className={css.perfilStatNum}>{melhorSeq}</div>
            <div className={css.perfilStatRot}>🏆 Melhor sequência</div>
          </div>
          <div className={css.perfilStat}>
            <div className={css.perfilStatNum}>{questoes}</div>
            <div className={css.perfilStatRot}>📝 Questões respondidas</div>
          </div>
          <div className={css.perfilStat}>
            <div className={css.perfilStatNum}>
              {aproveitamento}
              <span style={{ fontSize: 14 }}>%</span>
            </div>
            <div className={css.perfilStatRot}>🎯 Aproveitamento</div>
          </div>
        </RevelarGrade>

        {ehVoce && (
          <div className={css.perfilSecao}>
            <h3>Sua Chama</h3>
            <CardChama estado={chama} sessaoAberta={sessaoAberta} />
          </div>
        )}

        {grafico && (
          <div className={css.perfilSecao}>
            <GraficoBarras
              titulo="Questões por semana (últimas 8)"
              dados={grafico}
              unidade="questões"
            />
          </div>
        )}

        <div className={css.perfilSecao}>
          <h3>Conquistas</h3>
          <Conquistas ganhas={conquistas} />
        </div>
      </div>
    </main>
  );
}
