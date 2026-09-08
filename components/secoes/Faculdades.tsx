"use client";

import { useEffect, useMemo, useState } from "react";
import {
  AREAS,
  FACULDADES,
  INGRESSOS_DISPONIVEIS,
  NOME_DA_AREA,
  NOME_DO_INGRESSO,
  REGIOES,
  classificaConcorrencia,
  fraseProcedencia,
  rotuloConcorrencia,
  rotuloIngresso,
  rotuloProcedencia,
} from "@/lib/conteudo/faculdades";
import { Icone } from "@/components/ui/Icone";
import { Revelar } from "@/components/ui/Revelar";
import type {
  AreaCurso,
  Faculdade,
  Regiao,
  TipoIngresso,
} from "@/lib/tipos";

/* Extremos da barrinha. O índice usa a faixa toda, então ancorar em 640/840
   como antes achataria tudo lá em cima. */
const MIN = 600;
const MAX = 1000;

/** Quantos registros aparecem por vez — o resto entra por "carregar mais". */
const PAGINA = 25;

type Ordem = "variedade" | "nota-desc" | "nota-asc" | "instituicao" | "curso";

/**
 * Intercala os cursos em vez de listar todos de um antes do próximo.
 *
 * Ordenar puramente por índice enterrava a variedade: Medicina é o curso mais
 * concorrido em toda instituição, então as 37 Medicina ocupavam as duas
 * primeiras páginas de "Saúde" e Enfermagem, Odontologia e Fisioterapia só
 * apareciam depois. Aqui cada curso entra com a sua vaga mais concorrida
 * primeiro, depois a segunda, e assim por diante — o topo continua sendo o
 * mais disputado de cada curso, mas a página mostra a área inteira.
 */
function intercalaPorCurso(itens: Faculdade[]): Faculdade[] {
  const grupos = new Map<string, Faculdade[]>();
  for (const item of itens) {
    const g = grupos.get(item.curso);
    if (g) g.push(item);
    else grupos.set(item.curso, [item]);
  }

  // Dentro do curso, mais concorrido primeiro; entre cursos, quem tem o topo
  // mais alto abre a rodada.
  const filas = [...grupos.values()]
    .map((g) => [...g].sort((a, b) => b.notaReferencia - a.notaReferencia))
    .sort((a, b) => b[0].notaReferencia - a[0].notaReferencia);

  const saida: Faculdade[] = [];
  for (let volta = 0; saida.length < itens.length; volta++) {
    for (const fila of filas) if (fila[volta]) saida.push(fila[volta]);
  }
  return saida;
}

/** Ignora acento e caixa: quem digita "computacao" acha "Computação". */
const normaliza = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");

/** UFs presentes na base, em ordem — evita listar estado sem nenhum curso. */
const UFS = [...new Set(FACULDADES.map((u) => u.uf))].sort();

export function Faculdades() {
  const [buscaInst, setBuscaInst] = useState("");
  const [curso, setCurso] = useState("todos");
  const [regiao, setRegiao] = useState<Regiao | "todas">("todas");
  const [uf, setUf] = useState<string>("todas");
  const [area, setArea] = useState<AreaCurso | "todas">("todas");
  const [ingresso, setIngresso] = useState<TipoIngresso | "todas">("todas");
  const [ordem, setOrdem] = useState<Ordem>("variedade");
  const [visiveis, setVisiveis] = useState(PAGINA);
  const [aberta, setAberta] = useState<Faculdade | null>(null);

  /** Passa em tudo menos no filtro de curso — base das opções e da lista. */
  const semFiltroDeCurso = useMemo(() => {
    const inst = normaliza(buscaInst.trim());
    return FACULDADES.filter((u) => {
      if (regiao !== "todas" && u.regiao !== regiao) return false;
      if (uf !== "todas" && u.uf !== uf) return false;
      if (area !== "todas" && u.area !== area) return false;
      // Basta o curso aceitar a via: quem entra por PAS e por SiSU aparece nos dois.
      if (ingresso !== "todas" && !u.formasIngresso.includes(ingresso))
        return false;
      if (inst && !normaliza(`${u.sigla} ${u.nome} ${u.uf}`).includes(inst))
        return false;
      return true;
    });
  }, [buscaInst, regiao, uf, area, ingresso]);

  /**
   * Cursos disponíveis dentro dos outros filtros, com quantas vagas cada um
   * tem. É o que revela a variedade da área: escolher "Saúde" mostra na hora
   * que existe Enfermagem, Odontologia e Fisioterapia além de Medicina, em vez
   * de esconder tudo atrás de páginas de Medicina (que ordena no topo por ser
   * o curso mais concorrido).
   */
  const cursosDisponiveis = useMemo(() => {
    const conta = new Map<string, number>();
    semFiltroDeCurso.forEach((u) =>
      conta.set(u.curso, (conta.get(u.curso) ?? 0) + 1)
    );
    return [...conta.entries()]
      .map(([nome, total]) => ({ nome, total }))
      .sort((a, b) => b.total - a.total || a.nome.localeCompare(b.nome, "pt-BR"));
  }, [semFiltroDeCurso]);

  /* Trocar de área costuma invalidar o curso escolhido (Medicina não existe em
     Tecnologia). Em vez de devolver lista vazia, o filtro se solta sozinho. */
  const cursoValido =
    curso === "todos" || cursosDisponiveis.some((c) => c.nome === curso);
  const cursoEfetivo = cursoValido ? curso : "todos";

  const lista = useMemo(() => {
    const filtradas =
      cursoEfetivo === "todos"
        ? semFiltroDeCurso
        : semFiltroDeCurso.filter((u) => u.curso === cursoEfetivo);

    const ordenadas = [...filtradas].sort((a, b) => {
      if (ordem === "nota-asc") return a.notaReferencia - b.notaReferencia;
      if (ordem === "curso")
        return (
          a.curso.localeCompare(b.curso, "pt-BR") ||
          b.notaReferencia - a.notaReferencia
        );
      if (ordem === "instituicao")
        return (
          a.sigla.localeCompare(b.sigla, "pt-BR") ||
          a.curso.localeCompare(b.curso, "pt-BR")
        );
      return b.notaReferencia - a.notaReferencia;
    });

    /* Com um curso já escolhido não há o que intercalar — é tudo do mesmo. */
    return ordem === "variedade" && cursoEfetivo === "todos"
      ? intercalaPorCurso(ordenadas)
      : ordenadas;
  }, [semFiltroDeCurso, cursoEfetivo, ordem]);

  /* Mexeu em filtro, a lista volta ao começo — senão a pessoa fica olhando
     uma página 3 que já não existe no resultado novo. */
  useEffect(() => {
    setVisiveis(PAGINA);
  }, [buscaInst, curso, regiao, uf, area, ingresso, ordem]);

  // Esc fecha o painel, e o body trava enquanto ele está aberto.
  useEffect(() => {
    if (!aberta) return;
    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAberta(null);
    };
    document.addEventListener("keydown", aoTeclar);
    document.body.classList.add("is-locked");
    return () => {
      document.removeEventListener("keydown", aoTeclar);
      document.body.classList.remove("is-locked");
    };
  }, [aberta]);

  const mostrando = lista.slice(0, visiveis);
  const limpar = () => {
    setBuscaInst("");
    setCurso("todos");
    setRegiao("todas");
    setUf("todas");
    setArea("todas");
    setIngresso("todas");
  };
  const filtrando =
    Boolean(buscaInst) ||
    cursoEfetivo !== "todos" ||
    regiao !== "todas" ||
    uf !== "todas" ||
    area !== "todas" ||
    ingresso !== "todas";

  return (
    <section className="section" id="faculdades">
      <div className="wrap">
        <div className="section-head">
          <Revelar como="div" className="head-left">
            <span className="eyebrow">Faculdades brasileiras</span>
            <h2 className="title">
              Onde você quer <em>entrar</em>?
            </h2>
            <p className="lede">
              Busque por curso, instituição, estado ou área e compare a
              concorrência relativa de cada vaga. Use como meta de preparação —
              não como promessa.
            </p>
          </Revelar>
          <Revelar como="div" className="head-right" atraso={2}>
            <div className="stat-num" style={{ fontSize: "clamp(26px,3vw,36px)" }}>
              {lista.length}
            </div>
            <div className="dim fine">
              {lista.length === 1 ? "curso listado" : "cursos listados"}
              {lista.length !== FACULDADES.length && ` de ${FACULDADES.length}`}
            </div>
          </Revelar>
        </div>

        <Revelar como="div" className="uni-aviso" atraso={1}>
          <Icone nome="info" tracoLargura={1.6} />
          <span>
            As notas exibidas são <strong>referências estimadas</strong> baseadas
            em processos seletivos anteriores e podem variar conforme edição,
            modalidade, campus e concorrência. Use-as como meta de preparação,
            não como garantia de aprovação.
          </span>
        </Revelar>

        <Revelar como="div" className="uni-tools" atraso={1}>
          <div className="field">
            <Icone nome="busca" tracoLargura={2} />
            <input
              className="input"
              type="search"
              placeholder="Buscar instituição…"
              autoComplete="off"
              aria-label="Buscar instituição"
              value={buscaInst}
              onChange={(e) => setBuscaInst(e.target.value)}
            />
          </div>

          <div className="field sel">
            <select
              className="select"
              aria-label="Filtrar por área"
              value={area}
              onChange={(e) => setArea(e.target.value as AreaCurso | "todas")}
            >
              <option value="todas">Todas as áreas</option>
              {AREAS.map((a) => (
                <option key={a.valor} value={a.valor}>
                  {a.rotulo}
                </option>
              ))}
            </select>
          </div>

          <div className="field sel">
            <select
              className="select"
              aria-label="Filtrar por curso"
              value={cursoEfetivo}
              onChange={(e) => setCurso(e.target.value)}
            >
              <option value="todos">
                Todos os cursos ({semFiltroDeCurso.length})
              </option>
              {cursosDisponiveis.map((c) => (
                <option key={c.nome} value={c.nome}>
                  {c.nome} ({c.total})
                </option>
              ))}
            </select>
          </div>

          <div className="field sel">
            <select
              className="select"
              aria-label="Filtrar por região"
              value={regiao}
              onChange={(e) => setRegiao(e.target.value as Regiao | "todas")}
            >
              <option value="todas">Todas as regiões</option>
              {REGIOES.map((r) => (
                <option key={r.valor} value={r.valor}>
                  {r.rotulo}
                </option>
              ))}
            </select>
          </div>

          <div className="field sel">
            <select
              className="select"
              aria-label="Filtrar por estado"
              value={uf}
              onChange={(e) => setUf(e.target.value)}
            >
              <option value="todas">Todos os estados</option>
              {UFS.map((u) => (
                <option key={u} value={u}>
                  {u}
                </option>
              ))}
            </select>
          </div>

          <div className="field sel">
            <select
              className="select"
              aria-label="Filtrar por forma de ingresso"
              value={ingresso}
              onChange={(e) =>
                setIngresso(e.target.value as TipoIngresso | "todas")
              }
            >
              <option value="todas">
                Todas as formas de ingresso ({FACULDADES.length})
              </option>
              {INGRESSOS_DISPONIVEIS.map((i) => (
                <option key={i.valor} value={i.valor}>
                  {i.rotulo} ({i.total})
                </option>
              ))}
            </select>
          </div>

          <div className="field sel">
            <select
              className="select"
              aria-label="Ordenar"
              value={ordem}
              onChange={(e) => setOrdem(e.target.value as Ordem)}
            >
              <option value="variedade">Variedade de cursos</option>
              <option value="nota-desc">Índice: maior primeiro</option>
              <option value="nota-asc">Índice: menor primeiro</option>
              <option value="instituicao">Instituição (A–Z)</option>
              <option value="curso">Curso (A–Z)</option>
            </select>
          </div>

          {filtrando && (
            <button className="btn btn-ghost" onClick={limpar}>
              Limpar filtros
            </button>
          )}
        </Revelar>

        <Revelar como="div" className="uni-table" atraso={2}>
          <div className="uni-scroll">
            <table className="uni">
              <thead>
                <tr>
                  <th>Instituição</th>
                  <th>Curso</th>
                  <th>UF</th>
                  <th>Ingresso</th>
                  <th>Concorrência</th>
                  <th>Índice de referência</th>
                </tr>
              </thead>
              <tbody>
                {mostrando.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="empty-row">
                      Nenhum curso encontrado para essa busca.
                    </td>
                  </tr>
                ) : (
                  mostrando.map((u, i) => {
                    const pct = Math.min(
                      100,
                      Math.max(
                        0,
                        ((u.notaReferencia - MIN) / (MAX - MIN)) * 100
                      )
                    );
                    const faixa = classificaConcorrencia(u.notaReferencia);
                    return (
                      <tr
                        key={`${u.sigla}-${u.curso}-${u.formasIngresso.join()}-${i}`}
                        className="clicavel"
                        tabIndex={0}
                        role="button"
                        aria-label={`Detalhes de ${u.curso} na ${u.sigla}`}
                        onClick={() => setAberta(u)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setAberta(u);
                          }
                        }}
                      >
                        <td className="uni-name">
                          {u.sigla}
                          <small>{u.nome}</small>
                        </td>
                        <td>{u.curso}</td>
                        <td>{u.uf}</td>
                        <td>
                          <span className="tag">
                            {rotuloIngresso(u.formasIngresso)}
                          </span>
                        </td>
                        <td>
                          <span className={`badge ${faixa}`}>
                            {rotuloConcorrencia(faixa)}
                          </span>
                        </td>
                        <td>
                          <div className="uni-corte">
                            <span className="cut">
                              {u.notaReferencia.toLocaleString("pt-BR")}
                            </span>
                            <span className="meter">
                              <i style={{ width: `${pct}%` }} />
                            </span>
                            {/* As três procedências têm rótulo — inclusive
                                "coletada": sem marca, um número real de
                                scraping ("823,79") parece tão exato quanto um
                                dado de edital, e não é. */}
                            <span
                              className={`est ${u.procedencia}`}
                              title={fraseProcedencia(u.procedencia)}
                            >
                              {rotuloProcedencia(u.procedencia)}
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </Revelar>

        {lista.length > 0 && (
          <div className="uni-rodape">
            <span className="dim">
              Exibindo {mostrando.length} de {lista.length}{" "}
              {lista.length === 1 ? "curso" : "cursos"}
            </span>
            {visiveis < lista.length && (
              <button
                className="btn btn-ghost"
                onClick={() => setVisiveis((v) => v + PAGINA)}
              >
                Carregar mais
              </button>
            )}
          </div>
        )}

        <Revelar como="p" className="dim nota">
          O índice de referência é um número comparativo criado para ordenar
          esta lista por concorrência — ele não é a nota de corte do processo
          seletivo, e escalas de processos diferentes não são equivalentes entre
          si. Consulte sempre o edital oficial da instituição.
        </Revelar>
      </div>

      {aberta && (
        <Detalhe faculdade={aberta} aoFechar={() => setAberta(null)} />
      )}
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Detalhe({
  faculdade: u,
  aoFechar,
}: {
  faculdade: Faculdade;
  aoFechar: () => void;
}) {
  const faixa = classificaConcorrencia(u.notaReferencia);

  return (
    <>
      <div className="drawer-fundo" onClick={aoFechar} />
      <aside
        className="drawer"
        role="dialog"
        aria-modal="true"
        aria-label={`${u.curso} — ${u.sigla}`}
      >
        <div className="drawer-topo">
          <div>
            <div className="uni-name" style={{ fontSize: 17 }}>
              {u.curso}
            </div>
            <small className="dim fine">{u.nome}</small>
          </div>
          <button
            className="drawer-fechar"
            onClick={aoFechar}
            aria-label="Fechar"
          >
            ×
          </button>
        </div>

        <div className="drawer-corpo">
          <div style={{ marginBottom: 20 }}>
            <span className={`badge ${faixa}`}>{rotuloConcorrencia(faixa)}</span>
          </div>

          <dl>
            <dt>Instituição</dt>
            <dd>
              {u.nome} ({u.sigla})
            </dd>

            <dt>Estado</dt>
            <dd>
              {u.uf} · {REGIOES.find((r) => r.valor === u.regiao)?.rotulo}
            </dd>

            <dt>Área</dt>
            <dd>{NOME_DA_AREA[u.area]}</dd>

            <dt>
              {u.formasIngresso.length > 1
                ? "Vias de ingresso aceitas"
                : "Via de ingresso"}
            </dt>
            <dd>
              {u.formasIngresso.map((f) => NOME_DO_INGRESSO[f]).join(" · ")}
            </dd>

            <dt>Modalidade de concorrência</dt>
            <dd>{u.modalidade}</dd>

            <dt>Nota original do processo</dt>
            <dd>
              {u.notaOriginal ?? (
                <span className="dim">
                  Não disponível nesta base — consulte o edital oficial da
                  instituição.
                </span>
              )}
            </dd>

            <dt>Escala da nota original</dt>
            <dd>{u.escalaOriginal}</dd>

            <dt>
              {u.procedencia === "estimada"
                ? "Índice de referência comparativo"
                : "Nota de ampla concorrência"}
            </dt>
            <dd>
              <span className="cut" style={{ fontSize: 16 }}>
                {u.notaReferencia.toLocaleString("pt-BR")}
              </span>
              <span
                className={`est ${u.procedencia}`}
                style={{ marginLeft: 8 }}
                title={fraseProcedencia(u.procedencia)}
              >
                {rotuloProcedencia(u.procedencia)}
              </span>
            </dd>

            <dt>Ano de referência</dt>
            <dd>{u.anoReferencia}</dd>

            <dt>Observação</dt>
            <dd>{u.observacao}</dd>
          </dl>

          <p className="dim fine" style={{ lineHeight: 1.6 }}>
            Notas variam conforme a modalidade (ampla concorrência ou cotas), o
            campus, o turno e a edição do processo seletivo. Duas instituições
            com processos diferentes não têm notas diretamente comparáveis — é
            por isso que esta tabela usa um índice próprio para ordenar, e não a
            nota de cada banca.
          </p>
        </div>
      </aside>
    </>
  );
}
