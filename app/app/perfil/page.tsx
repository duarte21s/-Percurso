import type { Metadata } from "next";
import Link from "next/link";
import { exigeSessao } from "@/lib/sessao";
import { FormPerfil } from "./FormPerfil";

export const metadata: Metadata = {
  title: "Perfil · Percurso",
};

export const dynamic = "force-dynamic";

const RECADO_ERRO: Record<string, string> = {
  nome: "O nome não pode ficar vazio.",
  objetivo: "Objetivo inválido.",
  horas: "As horas por dia precisam ficar entre 1 e 10.",
  dias: "Os dias por semana precisam ficar entre 3 e 7.",
  salvar: "Não consegui salvar agora. Tente de novo.",
  sem_supabase: "O Supabase ainda não foi configurado neste projeto.",
};

interface Props {
  searchParams: Promise<{ salvo?: string; erro?: string }>;
}

export default async function PaginaPerfil({ searchParams }: Props) {
  const { salvo, erro } = await searchParams;
  const { supabase, user } = await exigeSessao("/app/perfil");

  const { data: perfil } = await supabase
    .from("perfis")
    .select("nome, objetivo, horas_dia, dias_semana")
    .eq("id", user.id)
    .maybeSingle();

  const anonimo = !user.email;

  return (
    <main className="section" style={{ paddingTop: 40 }}>
      <div className="wrap" style={{ maxWidth: 860 }}>
        <div className="section-head">
          <div className="head-left">
            <span className="eyebrow">Perfil</span>
            <h2 className="title">
              Seus dados de <em>estudo</em>.
            </h2>
            <p className="lede">
              Nome e preferências de preparação. É daqui que o cronograma puxa o
              seu objetivo e o tempo disponível.
            </p>
          </div>
        </div>

        {salvo && (
          <div className="q-explain" style={{ marginTop: 0, marginBottom: 26 }}>
            <strong>Salvo.</strong> As mudanças já valem no cronograma.
          </div>
        )}
        {erro && (
          <div
            className="q-explain"
            style={{
              marginTop: 0,
              marginBottom: 26,
              borderColor: "var(--erro, #b23a2a)",
            }}
          >
            {RECADO_ERRO[erro] ?? "Não consegui completar. Tente de novo."}
          </div>
        )}

        <FormPerfil
          nome={perfil?.nome ?? ""}
          objetivo={perfil?.objetivo ?? "enem"}
          horasDia={perfil?.horas_dia ?? 4}
          diasSemana={perfil?.dias_semana ?? 6}
        />

        <h3 style={{ margin: "44px 0 14px", fontSize: 15, fontWeight: 600 }}>
          Conta
        </h3>
        <div className="uni-table" style={{ maxWidth: 560 }}>
          <div className="uni-scroll">
            <table className="uni">
              <tbody>
                <tr>
                  <td className="uni-name">Acesso</td>
                  <td>{anonimo ? "Sessão de visitante" : "E-mail e senha"}</td>
                </tr>
                {!anonimo && (
                  <tr>
                    <td className="uni-name">E-mail</td>
                    <td>{user.email}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <p className="dim nota">
          Trocar e-mail, redefinir a senha e apagar a conta ainda dependem de
          suporte manual — ver <Link href="/app/configuracoes" style={{ color: "var(--accent-2)" }}>Configurações</Link>.
        </p>

        <h3 style={{ margin: "36px 0 14px", fontSize: 15, fontWeight: 600 }}>
          Perfil na comunidade
        </h3>
        <p className="lede" style={{ marginBottom: 16 }}>
          Foto, bio e o título exibido no seu perfil público são editados na
          área da comunidade.
        </p>
        <Link href="/comunidade/perfil" className="btn btn-ghost">
          Editar perfil público
        </Link>
      </div>
    </main>
  );
}
