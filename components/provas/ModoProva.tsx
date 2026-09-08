"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { NOME_DA_AREA } from "@/lib/tipos";
import { DiscussaoQuestao } from "@/components/comunidade/DiscussaoQuestao";
import { BotaoPressao } from "@/components/ui/BotaoPressao";
import { gsap, useGSAP } from "@/lib/gsap/registro";
import { EASE, DUR, STAGGER } from "@/lib/gsap/vocabulario";
import { MOVIMENTO_QUERY, REDUZIDO_QUERY } from "@/lib/gsap/preferencias";
import { estruturaDaProva } from "@/lib/enem-estrutura";
import type {
  AreaEnem,
  Prova,
  QuestaoProva,
  ResultadoProva,
} from "@/lib/tipos";
import css from "./provas.module.css";

const LETRAS = ["A", "B", "C", "D", "E"];

interface Props {
  prova: Prova;
  questoes: QuestaoProva[];
  simuladoId: string | null;
  marcadasIniciais: Record<string, number>;
  /* Vindos do servidor. `restanteInicial` já é o que falta, não o decorrido. */
  indiceInicial: number;
  restanteInicial: number | null;
  jaEntregue: boolean;
  /** A prova foi iniciada com redação: o cartão mostra o bloco dela no dia certo. */
  comRedacao?: boolean;
}

function formataTempo(segundos: number): string {
  const s = Math.max(0, segundos);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const seg = s % 60;
  const dois = (n: number) => String(n).padStart(2, "0");
  return `${dois(h)}:${dois(m)}:${dois(seg)}`;
}

export function ModoProva({
  prova,
  questoes,
  simuladoId,
  marcadasIniciais,
  indiceInicial,
  restanteInicial,
  jaEntregue,
  comRedacao = false,
}: Props) {
  /* A questão atual NÃO nasce em zero: ela vem do servidor. Antes era
     `useState(0)` e a coluna `indice_atual` era gravada no banco sem nunca ser
     lida de volta — quem saía na questão 17 voltava na 1. */
  const [atual, setAtual] = useState(indiceInicial);
  const [marcadas, setMarcadas] = useState<Record<string, number>>(marcadasIniciais);
  /* Segundos que FALTAM, ditados pelo servidor. O cliente só desconta entre
     uma sincronização e outra, para o relógio não andar aos pulos; qualquer
     divergência é corrigida na próxima resposta do servidor. Mexer neste
     estado pelo DevTools adianta o desenho e nada mais: quem decide se a prova
     acabou é o banco. */
  const [restante, setRestante] = useState(restanteInicial ?? 0);
  const [travadasAte, setTravadasAte] = useState(indiceInicial);
  const [avancando, setAvancando] = useState(false);
  const [resultado, setResultado] = useState<ResultadoProva | null>(null);
  const [entregando, setEntregando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [explicacoes, setExplicacoes] = useState<Record<string, string>>({});
  const [explicando, setExplicando] = useState<string | null>(null);

  const refResultado = useRef<HTMLDivElement>(null);
  const refQuestao = useRef<HTMLDivElement>(null);

  const terminou = resultado !== null || jaEntregue;

  /* Desconto local de um segundo, só para o número não ficar parado entre as
     sincronizações. Não é a contagem: é a animação dela. */
  useEffect(() => {
    if (terminou) return;
    const id = window.setInterval(() => setRestante((r) => Math.max(0, r - 1)), 1000);
    return () => window.clearInterval(id);
  }, [terminou]);

  /* Sincroniza com o servidor: ao montar, a cada 30s, e sempre que a aba
     volta a ficar visível. É esta última que cobre o caso que mais interessa —
     celular bloqueado, aba em segundo plano, computador suspenso. Quando a
     tela volta, o tempo correto vem junto, sem depender de quantos ticks o
     `setInterval` conseguiu rodar enquanto ninguém olhava. */
  const sincroniza = useCallback(async () => {
    if (!simuladoId) return;
    try {
      const r = await fetch(`/api/prova/estado?simuladoId=${simuladoId}`, {
        cache: "no-store",
      });
      if (!r.ok) return;
      const d = await r.json();
      if (typeof d.restanteSegundos === "number") setRestante(d.restanteSegundos);
      if (typeof d.indiceAtual === "number") {
        setAtual(d.indiceAtual);
        setTravadasAte(d.indiceAtual);
      }
      if (d.marcadas) setMarcadas(d.marcadas);
      if (d.expirada && !jaEntregue) setErro("O tempo da prova acabou.");
    } catch {
      /* Sem rede o relógio local segue descontando; a correção vem quando
         voltar. Não é hora de assustar quem só passou por um túnel. */
    }
  }, [simuladoId, jaEntregue]);

  useEffect(() => {
    if (terminou) return;
    void sincroniza();
    const id = window.setInterval(() => void sincroniza(), 30_000);
    const aoVoltar = () => {
      if (document.visibilityState === "visible") void sincroniza();
    };
    document.addEventListener("visibilitychange", aoVoltar);
    window.addEventListener("focus", aoVoltar);
    return () => {
      window.clearInterval(id);
      document.removeEventListener("visibilitychange", aoVoltar);
      window.removeEventListener("focus", aoVoltar);
    };
  }, [terminou, sincroniza]);

  const questao = questoes[atual];
  const respondidas = Object.keys(marcadas).length;

  const porNumero = useMemo(
    () => questoes.map((q, i) => ({ q, i })),
    [questoes]
  );

  /* A estrutura oficial da prova: quatro blocos de 45, dois por dia. Sai da
     própria prova porque o ENEM trocou a ordem das áreas em 2017 — em 2011 o
     1º dia era Humanas e Natureza; em 2023, Linguagens e Humanas. */
  const { blocos, diaDaRedacao } = useMemo(
    () => estruturaDaProva(questoes),
    [questoes]
  );

  /** O cartão-resposta agrupado por dia e área, na ordem da prova. */
  const dias = useMemo(() => {
    return ([1, 2] as const).map((dia) => ({
      dia,
      temRedacao: comRedacao && diaDaRedacao === dia,
      blocos: blocos
        .filter((b) => b.dia === dia)
        .map((b) => ({
          ...b,
          itens: porNumero.filter(
            ({ q }) => q.numero >= b.de && q.numero <= b.ate
          ),
        })),
    }));
  }, [blocos, diaDaRedacao, porNumero, comRedacao]);

  /** Em que bloco está a questão aberta — alimenta o cabeçalho. */
  const blocoAtual = questao
    ? blocos.find((b) => questao.numero >= b.de && questao.numero <= b.ate)
    : null;

  const correcaoPorId = useMemo(() => {
    const mapa = new Map<string, { correta: number; acertou: boolean }>();
    for (const c of resultado?.correcao ?? []) {
      mapa.set(c.questao_id, { correta: c.correta, acertou: c.acertou });
    }
    return mapa;
  }, [resultado]);

  const entrega = useCallback(async () => {
    if (!simuladoId || entregando) return;
    setEntregando(true);
    setErro(null);
    try {
      const r = await fetch("/api/prova/finalizar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ simuladoId }),
      });
      const dados = await r.json();
      if (!r.ok) throw new Error(dados.erro ?? "Falhou ao entregar.");
      setResultado(dados as ResultadoProva);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (e) {
      setErro(e instanceof Error ? e.message : "Falhou ao entregar.");
    } finally {
      setEntregando(false);
    }
  }, [simuladoId, entregando]);

  // Tempo esgotado entrega sozinho, como na prova de verdade.
  /* Entrega automática dispara UMA vez. Sem a trava, um /finalizar que falha
     (401 de sessão expirada, 500, queda de rede) devolvia `entregando` para
     false, o que muda a identidade do useCallback `entrega`, o que re-roda
     este efeito, que dispara outro POST — e as condições continuam todas
     verdadeiras. Com um 401 voltando rápido isso vira dezenas de requisições
     por segundo até a aba fechar. Falhando, o botão "Entregar prova" continua
     ali para a pessoa tentar de novo à mão. */
  const autoEntregou = useRef(false);
  useEffect(() => {
    if (terminou || restante > 0 || !simuladoId || autoEntregou.current) return;
    autoEntregou.current = true;
    void entrega();
  }, [restante, terminou, simuladoId, entrega]);

  /* `alternativa: null` desmarca. Marcar e desmarcar passam pelo MESMO
     caminho de propósito: o Desmarcar antes só mexia no estado local, e a
     linha continuava no banco — a correção de /finalizar somava a alternativa
     que a pessoa achava ter tirado. Um só caminho garante que os dois gravem,
     e que os dois desfaçam na tela quando a gravação falha.

     O erro agora lê a mensagem do servidor: em 401 de visitante expirado a
     rota manda o texto certo, e dizer "confira a conexão" fazia a pessoa
     culpar a internet e tentar de novo em vão. */
  async function salvaResposta(alternativa: number | null) {
    if (terminou || !questao) return;

    const anterior = marcadas[questao.id];
    setMarcadas((m) => {
      const copia = { ...m };
      if (alternativa === null) delete copia[questao.id];
      else copia[questao.id] = alternativa;
      return copia;
    });

    if (!simuladoId) return;

    try {
      const r = await fetch("/api/prova/responder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          simuladoId,
          questaoId: questao.id,
          alternativa,
        }),
      });
      if (!r.ok) {
        const d = await r.json().catch(() => ({}));
        throw new Error(d?.erro || "");
      }
    } catch (e) {
      /* Falhou a gravação: desfaz na tela em vez de deixar a pessoa achar que
         a resposta está salva quando não está. */
      setMarcadas((m) => {
        const copia = { ...m };
        if (anterior === undefined) delete copia[questao.id];
        else copia[questao.id] = anterior;
        return copia;
      });
      const msg = e instanceof Error ? e.message : "";
      setErro(msg || "Não consegui salvar essa resposta. Confira a conexão.");
    }
  }

  /* Trava a questão atual e vai para a próxima.
     Quem decide o novo índice é o servidor, não este componente: a tela adota
     o que a rota devolver. Assim, se duas abas estiverem abertas na mesma
     prova, as duas convergem para o mesmo lugar em vez de discordarem. */
  async function avanca() {
    if (!simuladoId || terminou || avancando) return;
    setAvancando(true);
    setErro(null);
    try {
      const r = await fetch("/api/prova/avancar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          simuladoId,
          alternativa: marcadas[questao.id] ?? null,
        }),
      });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(d?.erro || "Não consegui avançar.");

      setAtual(d.indiceAtual);
      setTravadasAte(d.travadasAte);
      if (typeof d.restanteSegundos === "number") setRestante(d.restanteSegundos);
    } catch (e) {
      setErro(e instanceof Error ? e.message : "Não consegui avançar.");
      /* Não move a tela: se o servidor não confirmou, o aluno continua na
         questão em que estava, e a resposta dele continua marcada. */
    } finally {
      setAvancando(false);
    }
  }

  const marca = (alternativa: number) => salvaResposta(alternativa);

  async function pedeExplicacao(questaoId: string) {
    if (explicacoes[questaoId] || explicando) return;
    setExplicando(questaoId);
    try {
      const r = await fetch("/api/questoes/explicar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ questaoId }),
      });
      const dados = await r.json();
      if (!r.ok) throw new Error(dados.erro ?? "Não consegui explicar.");
      setExplicacoes((e) => ({ ...e, [questaoId]: dados.explicacao }));
    } catch (e) {
      setExplicacoes((x) => ({
        ...x,
        [questaoId]: e instanceof Error ? e.message : "Não consegui explicar.",
      }));
    } finally {
      setExplicando(null);
    }
  }

  /* Troca de questão — "um sussurro": a nova sobe 4px e revela com `power2.out`.
     O cartão-resposta ao lado não pisca; só o corpo da questão. */
  useGSAP(
    () => {
      const el = refQuestao.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add(MOVIMENTO_QUERY, () => {
        const t = gsap.from(el, {
          autoAlpha: 0,
          y: 4,
          duration: DUR.curta,
          ease: EASE.entradaSuave,
        });
        return () => t.kill();
      });
    },
    { dependencies: [questao?.id], scope: refQuestao }
  );

  /* Resultado da prova — timeline coreografada: o painel materializa, os
     quatro números do placar dão um pop escalonado com `back.out`, e as
     barras por área crescem da esquerda com `expo.out` enquanto as linhas
     deslizam. Uma sequência, não seis fades. */
  useGSAP(
    () => {
      const el = refResultado.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add(MOVIMENTO_QUERY, () => {
        const tl = gsap.timeline();
        tl.from(el, { autoAlpha: 0, y: 12, duration: DUR.base, ease: EASE.entrada })
          .from(
            el.querySelectorAll(`.${css.placarItem}`),
            {
              autoAlpha: 0,
              y: 10,
              scale: 0.9,
              duration: DUR.curta,
              ease: EASE.assenta,
              stagger: STAGGER.grade,
            },
            "-=0.2"
          )
          .from(
            el.querySelectorAll(`.${css.linhaArea}`),
            {
              autoAlpha: 0,
              x: -8,
              duration: DUR.curta,
              ease: EASE.entrada,
              stagger: STAGGER.lista,
            },
            "-=0.08"
          )
          .from(
            el.querySelectorAll(`.${css.barraAreaFita}`),
            {
              scaleX: 0,
              transformOrigin: "left center",
              duration: DUR.enche,
              ease: EASE.enche,
              stagger: STAGGER.lista,
            },
            "<"
          );
        return () => tl.kill();
      });
      mm.add(REDUZIDO_QUERY, () => {
        gsap.set(el, { autoAlpha: 1 });
      });
    },
    { dependencies: [resultado], scope: refResultado }
  );

  if (!questao) {
    return <p className="dim">Esta prova não tem questões importadas.</p>;
  }

  const correcaoAtual = correcaoPorId.get(questao.id);

  return (
    <>
      {/* ---------- topo fixo: relógio e progresso ---------- */}
      <div className={css.provaTopo}>
        <span
          className={`${css.relogio}${restante <= 300 && !terminou ? ` ${css.relogioFim}` : ""}`}
        >
          {/* Entregue: mostra zero em vez do decorrido. O decorrido deixou
              de existir no cliente — quem o guarda é o banco, derivado de
              `now() - iniciado_em`, e ele aparece na tela de resultado. */}
          {terminou ? formataTempo(0) : formataTempo(restante)}
        </span>
        <span className={css.progresso}>
          <span className={css.progressoTrilho}>
            <i
              className={css.progressoFita}
              style={{ width: `${(respondidas / questoes.length) * 100}%` }}
            />
          </span>
          {respondidas}/{questoes.length}
        </span>
        {!terminou && simuladoId && (
          <button
            className="btn btn-primary"
            onClick={entrega}
            disabled={entregando}
          >
            {entregando ? "Corrigindo…" : "Entregar prova"}
          </button>
        )}
      </div>

      {erro && <div className={css.aviso}>{erro}</div>}

      {/* ---------- resultado ---------- */}
      {resultado && (
        <div ref={refResultado}>
          <div className={css.placar}>
            <div className={css.placarItem}>
              <div className={css.placarNumero}>{resultado.acertos}</div>
              <div className={css.placarRotulo}>Acertos</div>
            </div>
            <div className={css.placarItem}>
              <div className={css.placarNumero}>{resultado.erros}</div>
              <div className={css.placarRotulo}>Erros</div>
            </div>
            <div className={css.placarItem}>
              <div className={css.placarNumero}>{resultado.embranco}</div>
              <div className={css.placarRotulo}>Em branco</div>
            </div>
            <div className={css.placarItem}>
              <div className={css.placarNumero}>
                {Math.round((resultado.acertos / resultado.total) * 100)}%
              </div>
              <div className={css.placarRotulo}>Aproveitamento</div>
            </div>
          </div>

          <div className={css.porArea}>
            {resultado.porArea.map((a) => (
              <div key={a.area} className={css.linhaArea}>
                <span>{NOME_DA_AREA[a.area as AreaEnem] ?? a.area}</span>
                <span className="dim">
                  {a.acertos}/{a.total}
                </span>
                <span className={css.barraArea}>
                  <i
                    className={css.barraAreaFita}
                    style={{ width: `${(a.acertos / a.total) * 100}%` }}
                  />
                </span>
              </div>
            ))}
          </div>

          <p className="dim nota" style={{ marginBottom: 26 }}>
            Navegue pelas questões abaixo para rever cada uma. A explicação é
            escrita na hora em que você pede, e fica guardada para a próxima
            pessoa que errar a mesma questão.
          </p>
        </div>
      )}

      {/* ---------- questão + grade ---------- */}
      <div className={css.corpoProva}>
        <div key={questao.id} className={css.questao} ref={refQuestao}>
          <div className={css.questaoTopo}>
            <span className={css.numero}>{questao.numero}</span>
            {/* Dia antes da área: é o que situa a pessoa na prova. A área vem
                do bloco, então não depende de a classificação de origem estar
                certa — a questão 100 é de Natureza por estar entre 91 e 135. */}
            {blocoAtual && (
              <>
                <span className={css.dia}>
                  {blocoAtual.dia === 1 ? "1º dia" : "2º dia"}
                </span>
                <span className={css.area}>
                  {NOME_DA_AREA[blocoAtual.area] ?? blocoAtual.area}
                </span>
                <span className={css.faixa}>
                  {blocoAtual.de}–{blocoAtual.ate}
                </span>
              </>
            )}
            {questao.idioma && <span className={css.area}>{questao.idioma}</span>}
          </div>

          <div className={css.enunciado}>
            {/* O enunciado vem em Markdown, mas o único elemento que importa é
                a figura — e ela também chega em `imagens`. Renderizar o texto
                cru evita puxar um parser inteiro para o bundle por causa de
                links que praticamente não existem nessas questões. */}
            {questao.enunciado.replace(/!\[.*?\]\(.*?\)/g, "").trim()}
          </div>

          {questao.imagens.map((src) => (
            <img key={src} src={src} alt="" className={css.figura} />
          ))}

          <div className={css.alternativas}>
            {questao.opcoes.map((texto, i) => {
              const marcada = marcadas[questao.id] === i;
              let extra = "";
              if (correcaoAtual) {
                if (i === correcaoAtual.correta) extra = ` ${css.alternativaCerta}`;
                else if (marcada) extra = ` ${css.alternativaErrada}`;
              } else if (marcada) {
                extra = ` ${css.alternativaMarcada}`;
              }

              const figura = questao.opcoes_imagens?.[i];

              return (
                <BotaoPressao
                  key={i}
                  className={`${css.alternativa}${extra}`}
                  onClick={() => marca(i)}
                  disabled={terminou}
                  type="button"
                >
                  <span className={css.letra}>{LETRAS[i] ?? i + 1}</span>
                  <span>
                    {figura ? (
                      <img src={figura} alt="" className={css.figuraOpcao} />
                    ) : (
                      texto
                    )}
                  </span>
                </BotaoPressao>
              );
            })}
          </div>

          <div className={css.rodapeQuestao}>
            {/* "Anterior" saiu. Com bloqueio progressivo não existe voltar:
                a questão anterior está fechada, e um botão que só serve para
                bater numa porta trancada é pior do que botão nenhum. O lugar
                onde se está agora aparece no lugar dele. */}
            <span className={css.posicao}>
              Questão {atual + 1} de {questoes.length}
            </span>

            {!terminou && marcadas[questao.id] !== undefined && (
              <button
                className={css.limpar}
                onClick={() => void salvaResposta(null)}
                type="button"
              >
                Desmarcar
              </button>
            )}

            <button
              className="btn btn-primary"
              onClick={() => void avanca()}
              disabled={avancando || terminou || atual >= questoes.length - 1}
              type="button"
            >
              {avancando ? "Salvando…" : "Salvar e avançar →"}
            </button>
          </div>

          {terminou && (
            <>
              {explicacoes[questao.id] ? (
                <ExplicacaoProva
                  texto={explicacoes[questao.id]}
                  className={css.explicacao}
                />
              ) : (
                <button
                  className="btn"
                  style={{ marginTop: 16 }}
                  onClick={() => pedeExplicacao(questao.id)}
                  disabled={explicando === questao.id}
                  type="button"
                >
                  {explicando === questao.id
                    ? "Escrevendo a explicação…"
                    : "Explicar esta questão"}
                </button>
              )}

              {/* Discussão da comunidade: só depois de entregar a prova, junto
                  da explicação. Antes disso, seria pista do gabarito. */}
              <DiscussaoQuestao questaoId={questao.id} />
            </>
          )}
        </div>

        <aside className={css.lateral}>
          <div className={css.lateralTitulo}>
            {terminou ? "Correção" : "Cartão-resposta"}
          </div>
          {/* Agrupado por dia e área, como a prova é aplicada. A grade plana
              de 180 bolinhas não dizia onde um bloco terminava e o outro
              começava — e é justamente isso que orienta quem está fazendo.

              A rolagem vive neste container, e não em cada grade: com um
              limite por bloco, cada área ganhava a própria barra e o cartão
              virava quatro caixinhas espremidas. */}
          <div className={css.cartaoRolagem}>
          {dias.map((d) => (
            <div key={d.dia} className={css.diaGrupo}>
              <div className={css.diaTitulo}>
                {d.dia === 1 ? "1º dia" : "2º dia"}
              </div>

              {d.blocos.map((b) => (
                <div key={b.indice} className={css.blocoGrupo}>
                  <div className={css.blocoTitulo}>
                    <span>{NOME_DA_AREA[b.area] ?? b.area}</span>
                    <small>
                      {b.de}–{b.ate}
                    </small>
                  </div>
                  <div className={css.gradeNumeros}>
                    {b.itens.map(({ q, i }) => {
              const c = correcaoPorId.get(q.id);
              let classe = css.bolinha;
              if (c) {
                classe += c.acertou
                  ? ` ${css.bolinhaCerta}`
                  : marcadas[q.id] !== undefined
                    ? ` ${css.bolinhaErrada}`
                    : "";
              } else if (marcadas[q.id] !== undefined) {
                classe += ` ${css.bolinhaFeita}`;
              }
              if (i === atual) classe += ` ${css.bolinhaAtual}`;

              return (
                <button
                  key={q.id}
                  className={classe}
                  /* O cartão vira mapa, não atalho. Com bloqueio progressivo a
                     questão atual é decidida pelo estado salvo da tentativa —
                     deixar clicar aqui devolveria ao aluno exatamente a
                     escolha que a regra tira dele. Depois de entregue ele volta
                     a navegar à vontade, para conferir o gabarito. */
                  onClick={terminou ? () => setAtual(i) : undefined}
                  disabled={!terminou}
                  type="button"
                  title={
                    terminou
                      ? `Questão ${q.numero}`
                      : i < travadasAte
                        ? `Questão ${q.numero} · fechada`
                        : i === atual
                          ? `Questão ${q.numero} · atual`
                          : `Questão ${q.numero} · ainda não`
                  }
                >
                  {q.numero}
                </button>
              );
                    })}
                  </div>
                </div>
              ))}

              {/* A redação fica fora das 180: é uma produção de texto, não uma
                  questão de múltipla escolha, e aparece no dia em que
                  Linguagens é aplicada — como no exame real. */}
              {d.temRedacao && (
                <div className={css.blocoGrupo}>
                  <div className={css.blocoTitulo}>
                    <span>Redação</span>
                    <small>proposta</small>
                  </div>
                  <p className={css.blocoNota}>
                    Texto dissertativo-argumentativo, avaliado à parte das
                    questões objetivas.
                  </p>
                </div>
              )}
            </div>
          ))}
          </div>

          {!terminou && simuladoId && (
            <button
              className={`btn btn-primary ${css.entregar}`}
              onClick={entrega}
              disabled={entregando}
              type="button"
            >
              {entregando ? "Corrigindo…" : "Entregar prova"}
            </button>
          )}

          {terminou && (
            <Link href="/app/simulados" className={`btn ${css.entregar}`}>
              Escolher outra prova
            </Link>
          )}
        </aside>
      </div>
    </>
  );
}

/**
 * A explicação escrita na hora, na correção. Entra como o gabarito do Estudar:
 * desfoca, sobe e assenta com `power3.out`. Componente próprio para o
 * `useGSAP` rodar a entrada na montagem sem depender de key no pai.
 */
function ExplicacaoProva({
  texto,
  className,
}: {
  texto: string;
  className: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add(MOVIMENTO_QUERY, () => {
        gsap.from(el, {
          autoAlpha: 0,
          y: 10,
          filter: "blur(4px)",
          duration: DUR.base,
          ease: EASE.entrada,
        });
      });
      mm.add(REDUZIDO_QUERY, () => {
        gsap.set(el, { autoAlpha: 1 });
      });
    },
    { scope: ref }
  );

  return (
    <div className={className} ref={ref}>
      {texto}
    </div>
  );
}
