"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Alternativas } from "./Alternativas";
import { ResultadoSessao } from "./ResultadoSessao";
import { AvisoRecompensa } from "@/components/comunidade/AvisoRecompensa";
import { gsap, useGSAP } from "@/lib/gsap/registro";
import { EASE, DUR } from "@/lib/gsap/vocabulario";
import {
  MOVIMENTO_QUERY,
  REDUZIDO_QUERY,
  usarMovimentoReduzido,
} from "@/lib/gsap/preferencias";
import type {
  QuestaoPublica,
  RespostaRegistrada,
  ResultadoSessao as Resultado,
  Simulado,
} from "@/lib/tipos";
import css from "./resultado.module.css";

interface Props {
  /** A sessão em andamento, ou null quando não há nenhuma aberta. */
  sessao: Simulado | null;
  /** Na ordem de questao_ids. Sem gabarito: ele só existe no resultado. */
  questoes: QuestaoPublica[];
  /** Quantas já foram respondidas — define onde a retomada começa. */
  respondidas: number;
  /** Rótulo do recorte: matéria, ou os temas escolhidos. */
  recorte: string;
}

type Fase = "retomada" | "vazio" | "respondendo" | "pronta" | "resultado";

const dois = (n: number) => String(n).padStart(2, "0");

/**
 * A tela onde se responde uma sessão de estudo.
 *
 * Durante a resolução nada revela o resultado: nem a alternativa certa, nem
 * acerto ou erro, nem explicação, nem placar. Cada resposta é só registrada.
 * Com todas respondidas, a pessoa finaliza, e só então o servidor corrige e
 * devolve o resultado completo (ver ResultadoSessao). Sair no meio pausa;
 * encerrar no meio abandona, e sessão abandonada não mostra gabarito.
 *
 * `sessao` e `questoes` vêm do servidor e NÃO são copiados para estado local.
 * A página monta este componente com `key={sessao?.id}`, então abrir outra
 * sessão troca a key, remonta o componente e reinicializa tudo a partir dos
 * dados novos. Guardar props em useState aqui deixaria a tela presa nas
 * questões antigas depois de um router.refresh().
 *
 * Quem cria a sessão é o `EscolherConteudo`, escolhendo assunto. Por isso aqui
 * não existe botão de "sortear qualquer coisa": esta tela só responde o que
 * já foi montado.
 */
export function Sessao({ sessao, questoes, respondidas, recorte }: Props) {
  const router = useRouter();

  const total = questoes.length;

  const [fase, setFase] = useState<Fase>(() => {
    if (!sessao || total === 0) return "vazio";
    if (respondidas >= total) return "pronta";
    return respondidas > 0 ? "retomada" : "respondendo";
  });

  const [i, setI] = useState(Math.min(respondidas, Math.max(0, total - 1)));
  const [marcada, setMarcada] = useState<number | null>(null);
  /** A resposta desta questão já foi registrada. Só a confirmação, sem gabarito. */
  const [registro, setRegistro] = useState<RespostaRegistrada | null>(null);
  const [feitas, setFeitas] = useState(respondidas);
  const [resultado, setResultado] = useState<Resultado | null>(null);
  const [ocupado, setOcupado] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const reduzido = usarMovimentoReduzido();

  const q = questoes[i];

  const refQ = useRef<HTMLDivElement>(null);
  const refTopo = useRef<HTMLDivElement>(null);

  /* Troca de questão — "um sussurro": a nova sobe 6px e revela com
     `power2.out`, quase imperceptível. A saída (em `avancar`) desce 6px com
     pressa antes de trocar o conteúdo. `q.id` nas deps refaz a entrada a
     cada questão; `fase` cobre a volta da retomada para "respondendo".
     `fromTo` (e não `from`) porque o elemento é o mesmo entre questões — o
     estado final explícito limpa o que a saída deixou. */
  useGSAP(
    () => {
      const el = refQ.current;
      if (!el || fase !== "respondendo") return;
      const mm = gsap.matchMedia();
      mm.add(MOVIMENTO_QUERY, () => {
        const t = gsap.fromTo(
          el,
          { autoAlpha: 0, y: 6 },
          {
            autoAlpha: 1,
            y: 0,
            duration: DUR.curta,
            ease: EASE.entradaSuave,
            overwrite: "auto",
          }
        );
        return () => t.kill();
      });
      mm.add(REDUZIDO_QUERY, () => {
        gsap.set(el, { autoAlpha: 1, y: 0 });
      });
    },
    { dependencies: [q?.id, fase], scope: refQ }
  );

  /* O resultado é longo: ao chegar, a tela volta para o começo dele. */
  useEffect(() => {
    if (fase !== "resultado") return;
    refTopo.current?.scrollIntoView({ behavior: reduzido ? "auto" : "smooth", block: "start" });
  }, [fase, reduzido]);

  async function responder(alternativa: number) {
    if (!sessao || marcada !== null || ocupado) return;

    setMarcada(alternativa);
    setOcupado(true);
    setErro(null);

    try {
      const r = await fetch("/api/simulado/responder", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          simuladoId: sessao.id,
          questaoId: q.id,
          alternativa,
        }),
      });
      const dados = await r.json();

      if (!r.ok) {
        setErro(dados.erro ?? "Não consegui registrar a resposta.");
        setMarcada(null);
        return;
      }

      const registrada = dados as RespostaRegistrada;
      setRegistro(registrada);
      setFeitas(registrada.respondidas);
    } catch {
      setErro("Falha de rede — a resposta não foi registrada. Tente de novo.");
      setMarcada(null);
    } finally {
      setOcupado(false);
    }
  }

  /** Pede a correção. O servidor só devolve o resultado com todas respondidas. */
  async function finalizar() {
    if (!sessao) return;
    setOcupado(true);
    setErro(null);
    try {
      const r = await fetch("/api/simulado/finalizar", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ simuladoId: sessao.id }),
      });
      const dados = await r.json().catch(() => ({}));
      if (!r.ok) {
        setErro(dados?.erro ?? "Não consegui finalizar agora. Tente de novo.");
        return;
      }
      setResultado(dados as Resultado);
      setFase("resultado");
    } catch {
      setErro("Falha de rede. Verifique a conexão e tente de novo.");
    } finally {
      setOcupado(false);
    }
  }

  /** Encerra a sessão aberta e volta para a escolha de conteúdo. */
  async function encerrar() {
    setOcupado(true);
    setErro(null);
    try {
      /* `fetch` não lança em 4xx/5xx — só em falha de rede. Sem checar `ok`,
         um 401 de sessão expirada passava direto para o refresh: a sessão
         voltava igual, a key não mudava, o componente não remontava e
         `ocupado` ficava preso em true. Os dois botões travavam desabilitados
         com o rótulo "Encerrando…" e nenhuma mensagem — dava para sair só
         recarregando a página na mão. */
      const r = await fetch("/api/simulado/encerrar", { method: "POST" });
      if (!r.ok) {
        const d = await r.json().catch(() => ({}));
        setErro(d?.erro ?? "Não consegui encerrar a sessão. Tente de novo.");
        setOcupado(false);
        return;
      }
      router.replace("/app/questoes");
      router.refresh();
    } catch {
      setErro("Falha de rede. Verifique a conexão e tente de novo.");
      setOcupado(false);
    }
  }

  function avancar() {
    const aplicar = () => {
      setI((n) => n + 1);
      setMarcada(null);
      setRegistro(null);
    };

    const el = refQ.current;
    if (reduzido || !el) {
      aplicar();
      return;
    }
    // Saída antes da troca — assim o React só recria o conteúdo depois que a
    // questão respondida já saiu de cena.
    gsap.to(el, {
      autoAlpha: 0,
      y: -6,
      duration: DUR.micro,
      ease: EASE.saida,
      overwrite: "auto",
      onComplete: aplicar,
    });
  }

  const mensagemDeErro = erro && (
    <p className="dim" role="alert" style={{ color: "var(--err)", marginTop: 14 }}>
      {erro}
    </p>
  );

  /* ---------- nenhuma sessão aberta ---------- */
  if (fase === "vazio" || !sessao) {
    return (
      <div className="quiz">
        <div className="quiz-body">
          <div className="q-source">Nada em andamento</div>
          <p className="q-text">
            Escolha um conteúdo abaixo para começar. Você vê quantas questões
            existem de cada assunto antes de montar a sessão.
          </p>
        </div>
      </div>
    );
  }

  /* ---------- resultado: só depois de finalizada ---------- */
  if (fase === "resultado" && resultado) {
    return (
      <div ref={refTopo}>
        <ResultadoSessao resultado={resultado} recorte={recorte} />
      </div>
    );
  }

  /* ---------- todas respondidas, falta finalizar ---------- */
  if (fase === "pronta" || fase === "resultado") {
    return (
      <>
        <div className="quiz">
          <div className="quiz-top">
            <div className="quiz-meta">
              <span className="chip accent">Tudo respondido</span>
              <span className="quiz-count">
                {dois(total)} / {dois(total)}
              </span>
            </div>
          </div>

          <div className="quiz-progress">
            <i style={{ width: "100%" }} />
          </div>

          <div className="quiz-body">
            <div className="q-source">Pronto para o resultado</div>
            <p className="q-text">
              Você respondeu as {total} questões de {recorte}. Finalize para ver
              o resultado: a sua resposta, a certa e o comentário de cada uma.
            </p>
          </div>

          <div className="quiz-foot">
            <span className="dim fine">As respostas estão salvas e não mudam mais.</span>
            <div className="quiz-foot-acoes">
              <Link href="/app" className="btn btn-ghost">
                Sair
              </Link>
              <button className="btn btn-primary" onClick={finalizar} disabled={ocupado}>
                {ocupado ? "Corrigindo…" : "Finalizar e ver resultado"}{" "}
                {!ocupado && <span className="arrow">→</span>}
              </button>
            </div>
          </div>
        </div>
        {mensagemDeErro}
      </>
    );
  }

  /* ---------- retomada ---------- */
  if (fase === "retomada") {
    const atual = Math.min(respondidas + 1, total);
    return (
      <>
        <div className="quiz">
          <div className="quiz-top">
            <div className="quiz-meta">
              <span className="chip accent">Sessão em andamento</span>
              <span className="quiz-count">
                {dois(atual)} / {dois(total)}
              </span>
            </div>
          </div>

          <div className="quiz-progress">
            <i style={{ width: `${(respondidas / total) * 100}%` }} />
          </div>

          <div className="quiz-body">
            <div className="q-source">Você já tinha começado</div>
            <p className="q-text">
              Você parou na questão {dois(atual)} de {dois(total)}, em {recorte}.
              Quer continuar de onde parou?
            </p>
            <p className="dim fine" style={{ maxWidth: "60ch" }}>
              O resultado aparece quando você responder todas. Encerrar agora
              libera a escolha de outro conteúdo, mas a sessão fica sem
              resultado: o gabarito só aparece para quem chega ao fim.
            </p>
          </div>

          <div className="quiz-foot">
            <span className="dim fine">
              {respondidas} de {total} respondidas
            </span>
            <div className="quiz-foot-acoes">
              <button
                className="btn btn-ghost"
                onClick={encerrar}
                disabled={ocupado}
              >
                {ocupado ? "Encerrando…" : "Encerrar e escolher outro"}
              </button>
              <button
                className="btn btn-primary"
                onClick={() => setFase("respondendo")}
                disabled={ocupado}
              >
                Continuar da questão {dois(atual)}{" "}
                <span className="arrow">→</span>
              </button>
            </div>
          </div>
        </div>
        {mensagemDeErro}
      </>
    );
  }

  /* ---------- respondendo ---------- */
  const ultima = registro?.fim === true;

  return (
    <div className="quiz">
      <div className="quiz-top">
        <div className="quiz-meta">
          <span className="chip">{recorte}</span>
          <span className="quiz-count">
            {dois(i + 1)} / {dois(total)}
          </span>
        </div>
      </div>

      {/* Mede o que já foi respondido, e não o índice da questão aberta: com
          o índice, a barra marcava 0% na primeira e nunca chegava a 100%. */}
      <div className="quiz-progress">
        <i style={{ width: `${(feitas / total) * 100}%` }} />
      </div>

      <div className="quiz-body">
        {q ? (
          <div ref={refQ}>
            <div className="q-source">{q.fonte}</div>
            <p className="q-text">{q.enunciado}</p>

            <Alternativas
              opcoes={q.opcoes}
              marcada={marcada}
              correta={null}
              travada={registro !== null}
              onEscolher={responder}
              ocupado={ocupado}
            />

            {/* Só a confirmação. Certo, errado e o porquê ficam para o
                resultado, que sai inteiro quando a sessão for finalizada. */}
            {registro && (
              <p className={css.registrada} role="status">
                <strong>Resposta registrada.</strong>{" "}
                {ultima
                  ? "Era a última — finalize para ver o resultado."
                  : "O resultado aparece quando você finalizar a sessão."}
              </p>
            )}

            {registro?.recompensa && (
              <AvisoRecompensa recompensa={registro.recompensa} />
            )}

            {mensagemDeErro}
          </div>
        ) : (
          <p className="dim">Questão não encontrada.</p>
        )}
      </div>

      <div className="quiz-foot">
        <span className="dim fine">
          Cada resposta é salva assim que você marca — dá para sair e voltar
          depois. O gabarito aparece no fim.
        </span>
        <div className="quiz-foot-acoes">
          <Link href="/app/questoes" className="btn btn-ghost">
            Escolher outro conteúdo
          </Link>
          {/* Sair é só navegar: a sessão continua `em_andamento` e a tela de
              retomada traz a pessoa de volta nesta mesma questão. Fica sempre
              habilitado, inclusive enquanto a resposta grava — travar a saída
              durante uma requisição lenta é o momento em que ela mais quer
              sair. Não confundir com "encerrar", que fecha a sessão. */}
          <Link href="/app" className="btn btn-ghost">
            Sair
          </Link>
          {ultima ? (
            <button className="btn btn-primary" onClick={finalizar} disabled={ocupado}>
              {ocupado ? "Corrigindo…" : "Finalizar e ver resultado"}{" "}
              {!ocupado && <span className="arrow">→</span>}
            </button>
          ) : (
            <button
              className="btn btn-accent"
              onClick={avancar}
              disabled={!registro || ocupado}
            >
              Próxima <span className="arrow">→</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
