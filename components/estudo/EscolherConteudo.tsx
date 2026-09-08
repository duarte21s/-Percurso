"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Icone } from "@/components/ui/Icone";
import { chaveTema, type ContagensPorTema } from "@/lib/temas";
import type { Area, Materia } from "@/lib/tipos";
import css from "./escolher.module.css";

const FILTROS: { valor: Area | "todas"; rotulo: string }[] = [
  { valor: "todas", rotulo: "Todas" },
  { valor: "exatas", rotulo: "Exatas" },
  { valor: "natureza", rotulo: "Natureza" },
  { valor: "humanas", rotulo: "Humanas" },
  { valor: "linguagens", rotulo: "Linguagens" },
];

interface Props {
  materias: readonly Materia[];
  contagens: ContagensPorTema;
  /** Conteúdo já marcado ao entrar, vindo de `?tema=` na URL. */
  temaInicial?: string | null;
  /** Matéria já aberta ao entrar, vinda de `?materia=` na URL.
      Quem clicou "Estudar" numa matéria específica já escolheu — obrigar a
      escolher de novo aqui joga fora o clique anterior. */
  materiaInicial?: string | null;
}

/**
 * Escolher matéria e conteúdo antes de estudar.
 *
 * A escolha é confinada a uma matéria por vez porque é assim que a API monta o
 * simulado — `materia` é um campo, não uma lista. Clicar num tema de outra
 * matéria troca a seleção inteira em vez de misturar as duas, e o resumo diz
 * isso na hora, para ninguém perder cliques.
 *
 * Cada tema mostra quantas questões existem dele. Sem esse número a tela
 * prometeria 135 caminhos e entregaria vazio na maioria — o banco veio das 15
 * provas reais do ENEM, e o ENEM não distribui os assuntos por igual.
 */
export function EscolherConteudo({
  materias,
  contagens,
  materiaInicial = null,
  temaInicial = null,
}: Props) {
  const router = useRouter();

  const [area, setArea] = useState<Area | "todas">("todas");
  /* Já abre na matéria que veio da URL. Só ABRE — não marca tema nenhum,
     porque escolher o assunto continua sendo decisão de quem estuda. */
  const [aberta, setAberta] = useState<string | null>(materiaInicial);
  /* Vindo da página da matéria, o conteúdo já chega escolhido: a pessoa
     decidiu lá, e pedir a mesma decisão de novo aqui é desfazer o clique. */
  const [materiaId, setMateriaId] = useState<string | null>(
    temaInicial ? materiaInicial : null
  );
  const [temas, setTemas] = useState<string[]>(temaInicial ? [temaInicial] : []);
  const [quantidade, setQuantidade] = useState(10);
  const [indo, setIndo] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  const lista = area === "todas" ? materias : materias.filter((m) => m.area === area);

  function contagem(idMateria: string, tema: string) {
    return contagens[chaveTema(idMateria, tema)] ?? { total: 0, comentadas: 0 };
  }

  function alterna(idMateria: string, tema: string) {
    setErro(null);
    if (idMateria !== materiaId) {
      // Matéria nova: a seleção anterior não pode conviver com esta.
      setMateriaId(idMateria);
      setTemas([tema]);
      return;
    }
    setTemas((atuais) =>
      atuais.includes(tema) ? atuais.filter((t) => t !== tema) : [...atuais, tema]
    );
  }

  /* Quantas questões a seleção alcança. Conta só as comentadas porque é só
     elas que a sessão serve — mostrar o total daria um número que a pessoa
     nunca alcança. */
  const disponiveis = useMemo(() => {
    if (!materiaId) return 0;
    return temas.reduce((n, t) => n + contagem(materiaId, t).comentadas, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [materiaId, temas, contagens]);

  const nomeMateria = materias.find((m) => m.id === materiaId)?.nome ?? "";
  const teto = Math.min(45, Math.max(3, disponiveis));
  const pedido = Math.min(quantidade, teto);

  /** Quantas questões comentadas a matéria inteira tem. */
  function totalDaMateria(idMateria: string, topicos: readonly (readonly [string, number])[]) {
    return topicos.reduce((n, [titulo]) => n + contagem(idMateria, titulo).comentadas, 0);
  }

  /* Monta a sessão. `temas` vazio significa MATÉRIA INTEIRA — a API sempre
     aceitou isso (`if (temas.length > 0)` antes de filtrar), mas a tela nunca
     ofereceu: o botão só habilitava com conteúdo escolhido, então era
     obrigatório entrar na matéria e catar assunto por assunto para estudar
     algo. Quem quer só "praticar matemática" não tinha caminho. */
  async function abrirSessao(idMateria: string, listaTemas: string[], quantas: number) {
    if (!idMateria) return;
    setIndo(true);
    setErro(null);
    try {
      const r = await fetch("/api/simulado", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          materia: idMateria,
          temas: listaTemas,
          quantidade: quantas,
        }),
      });
      const dados = await r.json();
      if (!r.ok) throw new Error(dados.erro ?? "Não consegui montar o estudo.");
      router.push(`/app/questoes?sessao=${encodeURIComponent(dados.simulado.id)}`);
      router.refresh();
    } catch (e) {
      setErro(e instanceof Error ? e.message : "Não consegui montar o estudo.");
      setIndo(false);
    }
  }

  return (
    <div className={css.painel}>
      <div className={css.cabeca}>
        <span className={css.titulo}>Estudar um conteúdo</span>
      </div>
      <p className={css.lede}>
        Abra a matéria e escolha os assuntos que quer treinar. O número ao lado
        de cada um é quantas questões existem dele no banco — vêm das 15 provas
        reais do ENEM e do acervo do site.
      </p>

      <div className="subject-filter" style={{ marginBottom: 18 }}>
        {FILTROS.map((f) => (
          <button
            key={f.valor}
            type="button"
            className={`pill${area === f.valor ? " is-active" : ""}`}
            onClick={() => setArea(f.valor)}
            aria-pressed={area === f.valor}
          >
            {f.rotulo}
          </button>
        ))}
      </div>

      <div className="subjects">
        {lista.map((m) => {
          const abertaAgora = aberta === m.id;
          const escolhidosAqui = materiaId === m.id ? temas.length : 0;
          const totalMateria = m.topicos.reduce(
            (n, [titulo]) => n + contagem(m.id, titulo).comentadas,
            0
          );

          return (
            <article
              className={`subject${abertaAgora ? " is-open" : ""}`}
              key={m.id}
            >
              <button
                type="button"
                className="subject-head"
                onClick={() => setAberta(abertaAgora ? null : m.id)}
                aria-expanded={abertaAgora}
              >
                <span className="subject-glyph">{m.glifo}</span>
                <span className="subject-title">
                  <strong>{m.nome}</strong>
                  <span>
                    {totalMateria > 0
                      ? `${totalMateria} questões · ${m.topicos.length} conteúdos`
                      : `${m.topicos.length} conteúdos`}
                    {escolhidosAqui > 0 && ` · ${escolhidosAqui} escolhido${escolhidosAqui > 1 ? "s" : ""}`}
                  </span>
                </span>
                <Icone nome="seta" className="subject-caret" tracoLargura={1.8} />
              </button>

              {/* O corpo só EXISTE quando aberto.
                  Antes ele ficava sempre no DOM e a abertura era feita
                  animando `grid-template-rows` de `0fr` para `1fr`. Essa
                  técnica depende de o navegador saber interpolar uma unidade
                  de grade — e onde ele não sabe, ou onde o relógio de animação
                  não corre, o conteúdo fica preso em altura ZERO. A classe
                  `is-open` era aplicada, a seta girava, e nada abria.

                  Renderizar condicionalmente não tem esse modo de falha: ou o
                  elemento está lá com a altura dele, ou não está. Sem animação
                  de altura, porque animação que pode travar fechada é pior que
                  animação nenhuma — o giro da seta já dá o retorno. */}
              {abertaAgora && (
              <div className="subject-body">
                <div>
                  <div className="subject-topics">
                    {/* Estudar a matéria inteira, sem escolher assunto.
                        Fica no TOPO da lista porque é a opção mais ampla, e
                        porque quem abriu a matéria já demonstrou querer ela —
                        obrigar a catar 15 assuntos antes de poder começar era
                        pedir uma segunda decisão que ninguém tinha tomado. */}
                    <button
                      type="button"
                      className={`topic ${css.topico} ${css.materiaInteira}`}
                      onClick={() =>
                        void abrirSessao(m.id, [], Math.min(quantidade, totalMateria))
                      }
                      disabled={indo || totalMateria === 0}
                      title={
                        totalMateria === 0
                          ? "Esta matéria ainda não tem questão comentada"
                          : `${totalMateria} questões comentadas na matéria inteira`
                      }
                    >
                      <span className="n">★</span>
                      <span className={css.rotulo}>
                        Estudar a matéria inteira
                      </span>
                      <span className={css.contagem}>
                        {totalMateria === 0
                          ? "—"
                          : `${totalMateria} questões`}
                      </span>
                    </button>

                    {m.topicos.map(([titulo], i) => {
                      const c = contagem(m.id, titulo);
                      const disponivel = c.comentadas;
                      const escolhido = materiaId === m.id && temas.includes(titulo);

                      return (
                        <button
                          key={titulo}
                          type="button"
                          className={`topic ${css.topico}${escolhido ? ` ${css.escolhido}` : ""}`}
                          onClick={() => alterna(m.id, titulo)}
                          disabled={disponivel === 0}
                          aria-pressed={escolhido}
                          title={
                            disponivel === 0
                              ? "Ainda não há questões comentadas desse conteúdo"
                              : `${disponivel} questões comentadas`
                          }
                        >
                          <span className="n">{String(i + 1).padStart(2, "0")}</span>
                          <span className={css.rotulo}>{titulo}</span>
                          <span
                            className={`${css.contagem}${disponivel === 0 ? ` ${css.vazio}` : ""}`}
                          >
                            {disponivel === 0
                              ? "—"
                              : `${disponivel} ${disponivel === 1 ? "questão" : "questões"}`}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
              )}
            </article>
          );
        })}
      </div>

      <div className={css.acao}>
        <p className={css.resumo}>
          {temas.length === 0 ? (
            "Nenhum conteúdo escolhido ainda."
          ) : (
            <>
              <strong>{nomeMateria}</strong> · {temas.length}{" "}
              {temas.length === 1 ? "conteúdo" : "conteúdos"} ·{" "}
              <strong>{disponiveis}</strong>{" "}
              {disponiveis === 1
                ? "questão comentada"
                : "questões comentadas"}
            </>
          )}
        </p>

        <span className={css.faixa}>
          <label htmlFor="quantas-conteudo">Quantas</label>
          <input
            id="quantas-conteudo"
            type="range"
            min={3}
            max={teto}
            step={1}
            value={pedido}
            onChange={(e) => setQuantidade(Number(e.target.value))}
            disabled={disponiveis < 3}
          />
          <strong style={{ color: "var(--text)" }}>{pedido}</strong>
        </span>

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => void abrirSessao(materiaId!, temas, pedido)}
          disabled={indo || !materiaId || temas.length === 0 || disponiveis === 0}
        >
          {indo ? "Montando…" : "Estudar agora"}
          {!indo && <span className="arrow">→</span>}
        </button>
      </div>

      {/* O conteúdo pode não ter nenhuma questão comentada ainda. Dizer o
          porquê evita que a tela pareça quebrada — o botão fica desabilitado
          e sem explicação a pessoa não sabe o que fazer. */}
      {temas.length > 0 && disponiveis === 0 && (
        <div className={css.erro}>
          Nenhum dos conteúdos escolhidos tem questão comentada ainda. Escolha
          outro conteúdo acima.
        </div>
      )}

      {erro && <div className={css.erro}>{erro}</div>}
    </div>
  );
}
