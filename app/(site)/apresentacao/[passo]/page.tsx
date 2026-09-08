import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Revelar } from "@/components/ui/Revelar";
import { TrilhaPassos } from "@/components/apresentacao/TrilhaPassos";
import { PASSOS, acharPasso } from "@/lib/conteudo/apresentacao";
import { criaClienteServidor } from "@/lib/supabase/server";
import type { Estatisticas } from "@/lib/tipos";

/* Cada passo é uma rota de verdade, não um slide dentro de uma página só.
   É o que permite mandar o link de um passo específico para alguém, voltar
   pelo botão do navegador e ter cada trecho indexado — coisas que um carrossel
   em JavaScript não dá. */
export function generateStaticParams() {
  return PASSOS.map((p) => ({ passo: p.slug }));
}

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ passo: string }>;
}): Promise<Metadata> {
  const { passo } = await params;
  const achado = acharPasso(passo);
  if (!achado) return { title: "Apresentação · Percurso" };
  const t = `${achado.passo.titulo}${achado.passo.destaque}${achado.passo.fim ?? ""}`;
  return {
    title: `${achado.passo.eyebrow} · Percurso`,
    description: t.replace(/\s+/g, " ").trim(),
  };
}

const SEM_BANCO: Estatisticas = { questoes: 0, materias: 9, provas: 0 };

export default async function PaginaPasso({
  params,
}: {
  params: Promise<{ passo: string }>;
}) {
  const { passo: slug } = await params;
  const achado = acharPasso(slug);
  if (!achado) notFound();

  const { passo, indice, total, anterior, proximo } = achado;

  /* Só o passo dos números fala com o banco. Os outros são texto e não têm
     por que pagar uma consulta. */
  let stats: Estatisticas | null = null;
  if (passo.tipo === "numeros") {
    const supabase = await criaClienteServidor();
    if (supabase) {
      const { data } = await supabase
        .from("vw_estatisticas")
        .select("*")
        .maybeSingle();
      stats = (data as Estatisticas | null) ?? null;
    }
  }
  const numeros = stats ?? SEM_BANCO;

  return (
    <main className="section apresentacao" style={{ paddingTop: 130 }}>
      <div className="wrap">
        <TrilhaPassos atual={indice} />

        <div className="section-head">
          <Revelar como="div" className="head-left head-centro">
            <span className="eyebrow">
              {String(indice + 1).padStart(2, "0")} / {String(total).padStart(2, "0")} ·{" "}
              {passo.eyebrow}
            </span>
            <h1 className="title">
              {passo.titulo}
              <em>{passo.destaque}</em>
              {passo.fim}
            </h1>
            <p className="lede">{passo.lede}</p>
          </Revelar>
        </div>

        {passo.tipo === "numeros" ? (
          <Revelar como="div" className="passo-numeros" atraso={1}>
            {[
              { n: numeros.questoes, r: "questões no banco", u: "com gabarito comentado" },
              { n: numeros.materias, r: "matérias", u: "de ensino médio" },
              { n: numeros.provas, r: "provas do ENEM", u: "em modo prova cronometrado" },
            ].map((c) => (
              <div className="passo-numero" key={c.r}>
                <strong>{c.n.toLocaleString("pt-BR")}</strong>
                <span>{c.r}</span>
                <small>{c.u}</small>
              </div>
            ))}
          </Revelar>
        ) : (
          <Revelar como="div" className="pontos" atraso={1}>
            {(passo.itens ?? []).map((i) => (
              <div className="ponto" key={i.titulo}>
                <h3>{i.titulo}</h3>
                <div>
                  <p>{i.texto}</p>
                </div>
              </div>
            ))}
          </Revelar>
        )}

        <Revelar como="nav" className="passo-nav" atraso={2}>
          {anterior ? (
            <Link href={`/apresentacao/${anterior.slug}`} className="btn">
              ← {anterior.eyebrow}
            </Link>
          ) : (
            <Link href="/" className="btn">
              ← Início
            </Link>
          )}

          {proximo ? (
            <Link
              href={`/apresentacao/${proximo.slug}`}
              className="btn btn-primary"
            >
              {proximo.eyebrow} <span className="arrow">→</span>
            </Link>
          ) : (
            <Link href="/cadastro" className="btn btn-primary">
              Começar agora <span className="arrow">→</span>
            </Link>
          )}
        </Revelar>
      </div>
    </main>
  );
}
