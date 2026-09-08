import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EscreverRedacao } from "@/components/redacao/EscreverRedacao";
import { exigeSessao } from "@/lib/sessao";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ tema: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tema } = await params;
  const ano = tema.match(/\d{4}/)?.[0] ?? "";
  return {
    title: `Redação ENEM ${ano} · Percurso`,
    description: "Escreva sobre o tema real e receba a nota nas cinco competências.",
  };
}

export default async function PaginaTemaRedacao({ params }: Props) {
  const { tema: temaId } = await params;

  const { supabase } = await exigeSessao(`/app/redacao/${temaId}`);

  const { data: tema } = await supabase
    .from("temas_redacao")
    .select("id, ano, tema, aplicacao, fonte_url")
    .eq("id", temaId)
    .maybeSingle();

  if (!tema) notFound();

  /* Tentativas anteriores neste mesmo tema. Ver a nota de duas semanas atrás
     ao lado da de hoje é o que mostra se o treino está andando. */
  const { data: anteriores } = await supabase
    .from("redacoes")
    .select("id, total, criado_em")
    .eq("tema_id", temaId)
    .eq("status", "avaliada")
    .order("criado_em", { ascending: false })
    .limit(5);

  return (
    <main className="section" style={{ paddingTop: 40 }}>
      <div className="wrap" style={{ maxWidth: 820 }}>
        <Link href="/app/redacao" className="dim" style={{ fontSize: 13 }}>
          ← Todos os temas
        </Link>

        <div style={{ marginTop: 26 }}>
          <EscreverRedacao
            temaId={tema.id as string}
            tema={tema.tema as string}
            ano={tema.ano as number}
          />
        </div>

        {anteriores && anteriores.length > 0 && (
          <p className="dim nota" style={{ marginTop: 26 }}>
            Suas notas anteriores neste tema:{" "}
            {anteriores.map((a, i) => (
              <span key={a.id as string}>
                {i > 0 && " · "}
                <strong style={{ color: "var(--accent-2)" }}>{a.total as number}</strong>
              </span>
            ))}
          </p>
        )}

        {(tema.fonte_url as string) && (
          <p className="dim nota" style={{ marginTop: 12 }}>
            Os textos motivadores desta proposta estão no caderno oficial.{" "}
            <a
              href={tema.fonte_url as string}
              target="_blank"
              rel="noreferrer noopener"
              style={{ color: "var(--accent-2)" }}
            >
              Ver no INEP
            </a>
            .
          </p>
        )}
      </div>
    </main>
  );
}
