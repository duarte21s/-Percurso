"use client";

import { useRef, useState, useTransition, type FormEvent } from "react";
import Link from "next/link";
import { materiasDoObjetivo } from "@/lib/conteudo/materias";
import type { Cronograma as Plano, Selecao } from "@/lib/cronograma";
import type { EntradaSalva, LeituraCronograma } from "@/lib/cronograma-salvo";
import { excluirCronograma, salvarCronograma } from "@/app/app/cronograma/acoes";
import { Icone } from "@/components/ui/Icone";
import { Revelar } from "@/components/ui/Revelar";
import type { Objetivo } from "@/lib/tipos";
import css from "./cronograma-salvo.module.css";

interface Props {
  /** O que o servidor achou no banco para esta conta. */
  leitura: LeituraCronograma;
  /** De onde o formulário começa quando ainda não há cronograma salvo. */
  preferencias: { horas: number; dias: number };
}

/* Fuso fixo: o servidor e o navegador escrevem a mesma data, e a hidratação
   não acusa diferença. */
const DATA = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "2-digit",
  timeZone: "America/Sao_Paulo",
});
const HORA = new Intl.DateTimeFormat("pt-BR", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "America/Sao_Paulo",
});

function quandoSalvou(iso: string): string {
  const data = new Date(iso);
  if (Number.isNaN(data.getTime())) return "";
  return ` · atualizado em ${DATA.format(data)} às ${HORA.format(data)}`;
}

/** Duas entradas são a mesma quando valem o mesmo plano, em qualquer ordem. */
function mesmaEntrada(a: EntradaSalva, b: EntradaSalva): boolean {
  if (a.horas !== b.horas || a.dias !== b.dias) return false;
  const chaves = (s: Selecao) => Object.keys(s).sort().join("|");
  if (chaves(a.selecao) !== chaves(b.selecao)) return false;
  return Object.keys(a.selecao).every(
    (id) =>
      [...a.selecao[id]].sort().join("|") === [...(b.selecao[id] ?? [])].sort().join("|")
  );
}

const FALHA_DE_REDE = "Não consegui falar com o servidor. Confira a conexão e tente de novo.";

export function Cronograma({ leitura, preferencias }: Props) {
  /* Não é mais estado: o site trata só do ENEM, e o <select> de objetivo que
     ficava no topo deste formulário saiu. A constante fica porque é ela que
     escolhe a lista de matérias abaixo. */
  const objetivo: Objetivo = "enem";
  const salvo = leitura.estado === "salvo" ? leitura.salvo : null;

  const [horas, setHoras] = useState(salvo?.entrada.horas ?? preferencias.horas);
  const [dias, setDias] = useState(salvo?.entrada.dias ?? preferencias.dias);
  /** matéria → temas. Lista vazia = matéria inteira. */
  const [selecao, setSelecao] = useState<Selecao>(salvo?.entrada.selecao ?? {});
  const [aberta, setAberta] = useState<string | null>(null);
  const [plano, setPlano] = useState<Plano | null>(salvo?.plano ?? null);
  /** O que está gravado no banco agora. `null` = a conta ainda não tem cronograma. */
  const [gravado, setGravado] = useState<EntradaSalva | null>(salvo?.entrada ?? null);
  const [salvoEm, setSalvoEm] = useState<string | null>(salvo?.atualizadoEm ?? null);
  const [erro, setErro] = useState<{ texto: string; entrar?: boolean } | null>(null);
  const [confirmandoExclusao, setConfirmandoExclusao] = useState(false);
  const [salvando, iniciarSalvar] = useTransition();
  const [excluindo, iniciarExcluir] = useTransition();
  const saida = useRef<HTMLDivElement>(null);

  const ocupado = salvando || excluindo;
  const alterado = gravado !== null && !mesmaEntrada(gravado, { horas, dias, selecao });

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

  /* Salvar é gerar: a semana é montada no servidor, gravada na conta e só
     então volta para a tela. Com cronograma já salvo, a mesma ação atualiza
     a linha que existe — nunca cria outra. */
  function salvar(e: FormEvent) {
    e.preventDefault();
    setErro(null);
    setConfirmandoExclusao(false);

    iniciarSalvar(async () => {
      try {
        const resultado = await salvarCronograma({ horas, dias, selecao });
        if (!resultado.ok) {
          setErro({ texto: resultado.erro, entrar: resultado.sessaoAcabou });
          return;
        }
        setPlano(resultado.plano);
        setGravado(resultado.entrada);
        setSelecao(resultado.entrada.selecao);
        setSalvoEm(resultado.atualizadoEm);
      } catch {
        setErro({ texto: FALHA_DE_REDE });
        return;
      }

      const suave = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      saida.current?.scrollIntoView({
        behavior: suave ? "smooth" : "auto",
        block: "nearest",
      });
    });
  }

  function excluir() {
    setErro(null);

    iniciarExcluir(async () => {
      try {
        const resultado = await excluirCronograma();
        if (!resultado.ok) {
          setErro({ texto: resultado.erro, entrar: resultado.sessaoAcabou });
          return;
        }
        setPlano(null);
        setGravado(null);
        setSalvoEm(null);
        setConfirmandoExclusao(false);
      } catch {
        setErro({ texto: FALHA_DE_REDE });
      }
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
            <form className="planner-form" onSubmit={salvar}>
              {leitura.estado === "indisponivel" && (
                <p className={css.aviso} role="status">
                  Não consegui carregar o seu cronograma salvo agora. Recarregue
                  a página em instantes antes de salvar, para não substituir o
                  que já está guardado.
                </p>
              )}

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

                {/* O pertencimento vem de `Materia.objetivos`, e o filtro
                    `materiasDoObjetivo` continua exatamente como era. O que
                    mudou é que o objetivo não é mais escolhido na tela: era
                    "enem" por padrão e segue "enem", então esta lista abre
                    igual à de antes. O catálogo inteiro — as 17 matérias,
                    informática e reforço do 6º ao 9º incluídos — continua em
                    /app/questoes e /app/materias. */}
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

              <button
                type="submit"
                className="btn btn-primary form-full"
                disabled={ocupado}
              >
                {salvando ? (
                  "Salvando…"
                ) : (
                  <>
                    {gravado ? "Salvar alterações" : "Criar meu cronograma"}{" "}
                    <span className="arrow">→</span>
                  </>
                )}
              </button>

              {alterado && !salvando && (
                <p className={css.pendente}>
                  Você mudou o plano. Salve para guardar as alterações na sua conta.
                </p>
              )}

              {erro && (
                <p className={css.erro} role="alert">
                  {erro.texto}{" "}
                  {erro.entrar && (
                    <Link href="/entrar?proximo=/app/cronograma">Entrar de novo</Link>
                  )}
                </p>
              )}
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

                  {gravado && (
                    <div className={css.barra}>
                      <span className={css.salvo} aria-live="polite">
                        <Icone nome="check" tracoLargura={3} />
                        Salvo na sua conta{salvoEm ? quandoSalvou(salvoEm) : ""}
                      </span>

                      {confirmandoExclusao ? (
                        <span className={css.confirmar}>
                          Excluir este cronograma?
                          <button
                            type="button"
                            className={css.perigo}
                            onClick={excluir}
                            disabled={ocupado}
                          >
                            {excluindo ? "Excluindo…" : "Sim, excluir"}
                          </button>
                          <button
                            type="button"
                            className={css.texto}
                            onClick={() => setConfirmandoExclusao(false)}
                            disabled={ocupado}
                          >
                            Cancelar
                          </button>
                        </span>
                      ) : (
                        <button
                          type="button"
                          className={css.texto}
                          onClick={() => setConfirmandoExclusao(true)}
                          disabled={ocupado}
                        >
                          Excluir cronograma
                        </button>
                      )}
                    </div>
                  )}

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
                    Você ainda não tem um cronograma. Ajuste os campos ao lado e
                    toque em “Criar meu cronograma”: ele fica salvo na sua conta.
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
