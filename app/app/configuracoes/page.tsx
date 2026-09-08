import type { Metadata } from "next";
import { exigeSessao } from "@/lib/sessao";
import { sair } from "@/app/entrar/acoes";
import { BotaoTema } from "@/components/ui/BotaoTema";
import { salvarNotificacoes } from "./acoes";

export const metadata: Metadata = {
  title: "Configurações · Percurso",
};

export const dynamic = "force-dynamic";

interface Props {
  searchParams: Promise<{ salvo?: string; erro?: string }>;
}

export default async function PaginaConfiguracoes({ searchParams }: Props) {
  const { salvo, erro } = await searchParams;
  const { supabase, user } = await exigeSessao("/app/configuracoes");

  const { data: prefs } = await supabase
    .from("notificacao_prefs")
    .select("chama")
    .eq("usuario_id", user.id)
    .maybeSingle();

  // Sem linha ainda = padrão do schema (lembrete ligado).
  const lembreteLigado = prefs?.chama ?? true;
  const anonimo = !user.email;

  return (
    <main className="section" style={{ paddingTop: 40 }}>
      <div className="wrap" style={{ maxWidth: 720 }}>
        <div className="section-head">
          <div className="head-left">
            <span className="eyebrow">Configurações</span>
            <h2 className="title">
              Ajuste a <em>experiência</em>.
            </h2>
          </div>
        </div>

        {salvo && (
          <div className="q-explain" style={{ marginTop: 0, marginBottom: 26 }}>
            <strong>Salvo.</strong>
          </div>
        )}
        {erro && (
          <div className="q-explain" style={{ marginTop: 0, marginBottom: 26 }}>
            Não consegui salvar agora. Tente de novo.
          </div>
        )}

        <section style={{ marginBottom: 34 }}>
          <h3 style={{ fontSize: 15, fontWeight: 600, margin: "0 0 10px" }}>
            Aparência
          </h3>
          <p className="lede" style={{ marginBottom: 12 }}>
            O tema segue a preferência do seu sistema. Você pode fixar claro ou
            escuro:
          </p>
          <BotaoTema />
        </section>

        <section style={{ marginBottom: 34 }}>
          <h3 style={{ fontSize: 15, fontWeight: 600, margin: "0 0 10px" }}>
            Notificações
          </h3>
          <form action={salvarNotificacoes}>
            <label
              className="check"
              style={{ display: "flex", gap: 10, alignItems: "center" }}
            >
              <input
                type="checkbox"
                name="chama"
                defaultChecked={lembreteLigado}
              />
              <span>
                Lembrete diário da Chama de Estudos (quando você ainda não
                estudou no fim do dia)
              </span>
            </label>
            <button
              type="submit"
              className="btn btn-ghost"
              style={{ marginTop: 14 }}
            >
              Salvar preferências
            </button>
          </form>
        </section>

        <section style={{ marginBottom: 34 }}>
          <h3 style={{ fontSize: 15, fontWeight: 600, margin: "0 0 10px" }}>
            Conta
          </h3>
          <p className="lede" style={{ marginBottom: 12 }}>
            {anonimo
              ? "Você está numa sessão de visitante. Crie uma conta para não perder o progresso."
              : `Conectado como ${user.email}.`}
          </p>
          <p className="dim nota" style={{ marginTop: 0 }}>
            Trocar e-mail, redefinir a senha por dentro do site e apagar a conta
            (exigência da LGPD) ainda dependem de suporte manual — estão no
            roadmap.
          </p>
        </section>

        <section>
          <h3 style={{ fontSize: 15, fontWeight: 600, margin: "0 0 10px" }}>
            Sessão
          </h3>
          <form action={sair}>
            <button type="submit" className="btn btn-primary">
              Sair da conta
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
