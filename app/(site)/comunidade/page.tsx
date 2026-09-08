import type { Metadata } from "next";
import Link from "next/link";
import { criaClienteServidor } from "@/lib/supabase/server";
import { buscarFeed } from "@/lib/comunidade";
import { montarAutor } from "@/lib/conteudo/comunidade";
import { estadoChama } from "@/lib/gamificacao";
import { temSessaoAvulsaAberta } from "@/lib/sessao";
import { checaLembreteChama } from "@/lib/notificacoes";
import { Comunidade } from "@/components/comunidade/Comunidade";
import { CardChama } from "@/components/comunidade/CardChama";
import type { Autor, Post } from "@/lib/tipos";
import type { EstadoChama } from "@/lib/gamificacao";

export const metadata: Metadata = {
  title: "Comunidade · Percurso",
  description:
    "Tire dúvida de questão, troque o que funcionou e discuta método com quem também está estudando.",
};

export const dynamic = "force-dynamic";

export default async function PaginaComunidade() {
  const supabase = await criaClienteServidor();

  let eu: Autor | null = null;
  let precisaUsername = false;
  let feed: Post[] = [];
  let chama: EstadoChama | null = null;
  let sessaoAberta = false;

  if (supabase) {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      const { data: p } = await supabase
        .from("perfis")
        .select("id, nome, username, verificado, avatar_path")
        .eq("id", user.id)
        .maybeSingle();

      eu = montarAutor(p, { primeiraPessoa: true, id: user.id });
      precisaUsername = !p?.username;

      chama = await estadoChama(supabase, user.id);
      sessaoAberta = await temSessaoAvulsaAberta(supabase, user.id);
      await checaLembreteChama(supabase, user.id, chama);
    }

    feed = await buscarFeed(supabase, {
      aba: "recentes",
      tag: null,
      uid: user?.id ?? null,
    });
  }

  const primeiroNome = eu ? eu.nome.split(/\s+/)[0] : null;

  return (
    <main className="section" style={{ paddingTop: 150 }}>
      <div className="wrap">
        <div className="section-head">
          <div className="head-left">
            <span className="eyebrow">Comunidade</span>
            <h2 className="title">
              {primeiroNome ? <>Bom te ver, <em>{primeiroNome}</em>.</> : "Estude junto."}
            </h2>
            <p className="lede">
              Pergunte sobre uma questão específica, compartilhe o que funcionou,
              discuta método. Ler é aberto; publicar precisa de conta.
            </p>
          </div>
          {eu && !precisaUsername && (
            <div className="head-right">
              <Link
                href={`/comunidade/perfil/${eu.username}`}
                className="btn btn-ghost"
              >
                Meu perfil
              </Link>
            </div>
          )}
        </div>

        {chama && (
          <div style={{ marginBottom: 26 }}>
            <CardChama estado={chama} sessaoAberta={sessaoAberta} />
          </div>
        )}

        <Comunidade feedInicial={feed} eu={eu} precisaUsername={precisaUsername} />
      </div>
    </main>
  );
}
