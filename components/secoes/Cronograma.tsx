"use client";

import { useRef, useState, type FormEvent } from "react";
import { materiasDoObjetivo } from "@/lib/conteudo/materias";
import {
  geraCronograma,
  OBJETIVOS,
  type Cronograma as Plano,
  type Selecao,
} from "@/lib/cronograma";
import { Icone } from "@/components/ui/Icone";
import { Revelar } from "@/components/ui/Revelar";
import type { Objetivo } from "@/lib/tipos";

export function Cronograma() {
  const [objetivo, setObjetivo] = useState<Objetivo>("enem");
  const [horas, setHoras] = useState(4);
  const [dias, setDias] = useState(6);
  /** matéria → temas. Lista vazia = matéria inteira. */
  const [selecao, setSelecao] = useState<Selecao>({});
  const [aberta, setAberta] = useState<string | null>(null);
  const [plano, setPlano] = useState<Plano | null>(null);
  const saida = useRef<HTMLDivElement>(null);

  /**
   * Troca o objetivo e descarta o que a nova lista não contempla.
   *
   * Sem essa poda, marcar Raciocínio lógico em "Concurso público" e depois
   * mudar para "ENEM" deixaria a matéria selecionada e fora da tela: ela some
   * da lista, mas continua em `selecao` e entra no plano gerado. A pessoa
   * receberia um cronograma com uma matéria que ela não consegue ver nem
   * desmarcar.
   */
  function trocaObjetivo(novo: Objetivo) {
    setObjetivo(novo);
    const permitidas = new Set(materiasDoObjetivo(novo).map((m) => m.id));
    setSelecao((atual) => {
      const podada = Object.fromEntries(
        Object.entries(atual).filter(([id]) => permitidas.has(id))
      );
      // Só troca a referência se algo saiu, para não re-renderizar à toa.
      return Object.keys(podada).length === Object.keys(atual).length
        ? atual
        : podada;
    });
    setAberta((a) => (a && permitidas.has(a) ? a : null));
  }

  /** Marca ou desmarca a matéria inteira. */
  function alternaMateria(id: string) {
    setSelecao((atual) => {
      const copia = { ...atual };
      if (id in copia) delete copia[id];
      else copia[id] = [];
      return copia;
    });
  }

  /** Marca um tema. Marcar tema de matéria não escolhida escolhe a matéria. */
  function alternaTema(id: string, tema: string) {
    setSelecao((atual) => {
      const temas = atual[id] ?? [];
      const novos = temas.includes(tema)
        ? temas.filter((t) => t !== tema)
        : [...temas, tema];
      return { ...atual, [id]: novos };
    });
  }

  const escolhidas = Object.keys(selecao);

  function gerar(e: FormEvent) {
    e.preventDefault();
    setPlano(geraCronograma({ objetivo, horas, dias, selecao }));

    const suave = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    saida.current?.scrollIntoView({
      behavior: suave ? "smooth" : "auto",
      block: "nearest",
    });
  }

  return (
    <section className="section" id="plano">
      <div className="wrap">
        <div className="section-head">
          <Revelar como="div" className="head-left">
            <span className="eyebrow">Cronograma</span>
            <h2 className="title">
              Um plano que cabe
              <br />
              na <em>sua</em> semana.
            </h2>
            <p className="lede">
              Diga quanto tempo você tem e o que precisa priorizar. O cronograma
              distribui as matérias com revisão espaçada e um dia de descanso —
              porque plano que ignora cansaço não sobrevive à segunda semana.
            </p>
          </Revelar>
        </div>

        <div className="planner">
          <Revelar como="div" atraso={1}>
            <form className="planner-form" onSubmit={gerar}>
              <div className="form-row">
                <label htmlFor="pObjetivo">Objetivo</label>
                <div className="field sel field-full">
                  <select
                    className="select"
                    id="pObjetivo"
                    value={objetivo}
                    onChange={(e) => trocaObjetivo(e.target.value as Objetivo)}
                  >
                    {OBJETIVOS.map((o) => (
                      <option key={o.valor} value={o.valor}>
                        {o.rotulo}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <label htmlFor="pHoras">Horas de estudo por dia</label>
                <div className="range-wrap">
                  <input
                    type="range"
                    id="pHoras"
                    min={1}
                    max={10}
                    step={1}
                    value={horas}
                    onChange={(e) => setHoras(Number(e.target.value))}
                  />
                  <span className="range-val">{horas}h</span>
                </div>
              </div>

              <div className="form-row">
                <label htmlFor="pDias">Dias por semana</label>
                <div className="range-wrap">
                  <input
                    type="range"
                    id="pDias"
                    min={3}
                    max={7}
                    step={1}
                    value={dias}
                    onChange={(e) => setDias(Number(e.target.value))}
                  />
                  <span className="range-val">{dias} dias</span>
                </div>
              </div>

              <div className="form-row">
                <label>O que você quer estudar</label>
                <p className="dim fine" style={{ margin: "0 0 10px" }}>
                  {escolhidas.length === 0
                    ? "Sem escolha, o plano usa as matérias que a sua prova cobra. Marque uma e ele passa a ter só o que você marcar."
                    : `${escolhidas.length} ${escolhidas.length === 1 ? "matéria escolhida" : "matérias escolhidas"} — o plano terá só isso. Abra para escolher assuntos.`}
                </p>

                {/* A lista acompanha o objetivo escolhido logo acima. Antes
                    eram sempre as nove matérias do ensino médio, então quem
                    marcava "Concurso público" não via Raciocínio lógico nem
                    Informática — e quem estudava para o ENEM via Cálculo I.
                    O pertencimento vem de `Materia.objetivos`. */}
                <div className="cron-materias">
                  {materiasDoObjetivo(objetivo).map((m) => {
                    const escolhida = m.id in selecao;
                    const temas = selecao[m.id] ?? [];
                    const abertaAgora = aberta === m.id;

                    return (
                      <div
                        className={`cron-materia${escolhida ? " is-on" : ""}`}
                        key={m.id}
                      >
                        <div className="cron-materia-topo">
                          <label className="check">
                            <input
                              type="checkbox"
                              checked={escolhida}
                              onChange={() => alternaMateria(m.id)}
                            />
                            <span className="box">
                              <Icone nome="check" tracoLargura={3.4} />
                            </span>
                            {m.nome}
                          </label>

                          <button
                            type="button"
                            className="cron-abrir"
                            onClick={() => setAberta(abertaAgora ? null : m.id)}
                            aria-expanded={abertaAgora}
                            aria-label={`Escolher assuntos de ${m.nome}`}
                          >
                            {temas.length > 0
                              ? `${temas.length} ${temas.length === 1 ? "assunto" : "assuntos"}`
                              : "todos os assuntos"}
                            <Icone nome="seta" tracoLargura={1.8} />
                          </button>
                        </div>

                        {abertaAgora && (
                          <div className="cron-temas">
                            {m.topicos.map(([titulo]) => (
                              <button
                                key={titulo}
                                type="button"
                                className={`cron-tema${temas.includes(titulo) ? " is-on" : ""}`}
                                onClick={() => alternaTema(m.id, titulo)}
                                aria-pressed={temas.includes(titulo)}
                              >
                                {titulo}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <button type="submit" className="btn btn-primary form-full">
                Gerar cronograma <span className="arrow">→</span>
              </button>
            </form>
          </Revelar>

          <Revelar como="div" atraso={2}>
            <div className="plan-out" ref={saida}>
              {plano ? (
                <>
                  <div className="plan-head">
                    <h3>Sua semana · {plano.rotuloObjetivo}</h3>
                    <span className="dim">
                      {plano.horasSemana}h por semana ·{" "}
                      {plano.horasMes.toLocaleString("pt-BR")}h no mês
                    </span>
                  </div>

                  {/* Quantas horas cada matéria recebeu. Sem isto a prioridade
                      é um voto de confiança: a pessoa marca Física e não tem
                      como conferir se o plano de fato reservou mais tempo. */}
                  {plano.distribuicao.length > 0 && (
                    <div className="plan-dist">
                      <div className="plan-dist-titulo">
                        Horas por matéria na semana
                        {plano.resumo.revisao > 0 &&
                          ` · ${plano.resumo.revisao}h de revisão`}
                        {plano.resumo.redacao > 0 &&
                          ` · ${plano.resumo.redacao}h de redação`}
                      </div>
                      <ul className="plan-dist-lista">
                        {plano.distribuicao.map((f) => (
                          <li key={f.id}>
                            <span className="plan-dist-nome">
                              {f.nome}
                              {f.temas.length > 0 && (
                                <em title={f.temas.join(" · ")}>
                                  {f.temas.length}{" "}
                                  {f.temas.length === 1 ? "assunto" : "assuntos"}
                                </em>
                              )}
                            </span>
                            <span className="plan-dist-barra">
                              <i
                                style={{
                                  width: `${
                                    (f.horas / plano.distribuicao[0].horas) * 100
                                  }%`,
                                }}
                              />
                            </span>
                            <span className="plan-dist-horas">{f.horas}h</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="plan-days">
                    {plano.dias.map((d) => (
                      <div className="day" key={d.nome}>
                        <div className="day-name">{d.nome}</div>
                        <div className="day-blocks">
                          {d.blocos.map((b, i) => (
                            <span
                              key={i}
                              className={
                                b.tipo === "descanso"
                                  ? "block rest"
                                  : b.tipo === "materia"
                                    ? "block"
                                    : "block rev"
                              }
                              style={{ animationDelay: `${i * 55}ms` }}
                            >
                              {b.duracao && <span className="h">{b.duracao}</span>}
                              <span className="block-txt">
                                {b.rotulo}
                                {/* O assunto é o que a pessoa escolheu de
                                    fato — sem ele o bloco diria só
                                    "Matemática" e o recorte se perderia. */}
                                {b.tema && (
                                  <small className="block-tema">{b.tema}</small>
                                )}
                              </span>
                              {/* A distância é o que torna a revisão espaçada
                                  verificável: sem ela o bloco só dizia
                                  "revisão", sem apontar o quê nem de quando. */}
                              {b.distancia && (
                                <small className="block-dist">{b.distancia}</small>
                              )}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="plan-empty">
                  <Icone
                    nome="agenda"
                    width={34}
                    height={34}
                    tracoLargura={1.4}
                    style={{ opacity: 0.5 }}
                  />
                  <span>
                    Ajuste os campos ao lado e gere sua semana de estudos.
                  </span>
                </div>
              )}
            </div>
          </Revelar>
        </div>
      </div>
    </section>
  );
}
