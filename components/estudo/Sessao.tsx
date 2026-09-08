"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Alternativas } from "./Alternativas";
import { Gabarito } from "./Gabarito";
import { DiscussaoQuestao } from "@/components/comunidade/DiscussaoQuestao";
import { AvisoRecompensa } from "@/components/comunidade/AvisoRecompensa";
import { gsap, useGSAP } from "@/lib/gsap/registro";
import { EASE, DUR } from "@/lib/gsap/vocabulario";
import {
  MOVIMENTO_QUERY,
  REDUZIDO_QUERY,
  usarMovimentoReduzido,
} from "@/lib/gsap/preferencias";
import type {
  Gabarito as TipoGabarito,
  QuestaoPublica,
  Simulado,
} from "@/lib/tipos";

interface Props {
  /** A sessão em andamento, ou null quando não há nenhuma aberta. */
  sessao: Simulado | null;
  /** Na ordem de questao_ids. Sem gabarito: ele vem da API. */
  questoes: QuestaoPublica[];
  /** Quantas já foram respondidas — define onde a retomada começa. */
  respondidas: number;
  /** Rótulo do recorte: matéria, ou os temas escolhidos. */
  recorte: string;
}

type Fase = "retomada" | "vazio" | "respondendo" | "resultado";

const dois = (n: number) => String(n).padStart(2, "0");

/**
 * A tela onde se responde uma sessão de estudo.
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
    if (respondidas >= total) return "resultado";
    return respondidas > 0 ? "retomada" : "respondendo";
  });

  const [i, setI] = useState(Math.min(respondidas, Math.max(0, total - 1)));
  const [marcada, setMarcada] = useState<number | null>(null);
  const [gabarito, setGabarito] = useState<TipoGabarito | null>(null);
  const [acertos, setAcertos] = useState(sessao?.acertos ?? 0);
  const [erros, setErros] = useState(sessao?.erros ?? 0);
  const [ocupado, setOcupado] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const reduzido = usarMovimentoReduzido();

  const q = questoes[i];
  const respondidasAgora = acertos + erros;

  const refQ = useRef<HTMLDivElement>(null);
  const refResultado = useRef<HTMLDivElement>(null);

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

  /* Resultado — uma timeline curta coreografa a chegada: o painel materializa,
     a nota grande dá um pop com `back.out` (peso), e a linha de texto sobe em
     seguida. Uma sequência deliberada, não três fades soltos. */
  useGSAP(
    () => {
      const el = refResultado.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add(MOVIMENTO_QUERY, () => {
        const tl = gsap.timeline();
        tl.from(el, { autoAlpha: 0, y: 12, duration: DUR.base, ease: EASE.entrada })
          .from(
            el.querySelector(".big"),
            { scale: 0.6, autoAlpha: 0, duration: DUR.base, ease: EASE.assentaForte },
            "-=0.22"
          )
          .from(
            el.querySelector(".lede"),
            { autoAlpha: 0, y: 8, duration: DUR.curta, ease: EASE.entradaSuave },
            "-=0.16"
          );
        return () => tl.kill();
      });
      mm.add(REDUZIDO_QUERY, () => {
        gsap.set(el, { autoAlpha: 1 });
      });
    },
    { dependencies: [fase], scope: refResultado }
  );

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
        setErro(dados.erro ?? "Não consegui gravar a resposta.");
        setMarcada(null);
        return;
      }

      setGabarito(dados as TipoGabarito);
      setAcertos(dados.acertos);
      setErros(dados.erros);
    } catch {
      setErro("Falha de rede — a resposta não foi salva. Tente de novo.");
      setMarcada(null);
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
      if (gabarito?.fim) {
        setFase("resultado");
        return;
      }
      setI((n) => n + 1);
      setMarcada(null);
      setGabarito(null);
    };

    const el = refQ.current;
    if (reduzido || !el) {
      aplicar();
      return;
    }
    // Saída antes da troca — assim o React só recria o conteúdo depois que a
    // questão respondida já saiu de cena (sem piscar o gabarito).
    gsap.to(el, {
      autoAlpha: 0,
      y: -6,
      duration: DUR.micro,
      ease: EASE.saida,
      overwrite: "auto",
      onComplete: aplicar,
    });
  }

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
            <div className="score">
              <span>
                Acertos <b>{acertos}</b>
              </span>
              <span>
                Erros <b>{erros}</b>
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
              Encerrar libera a escolha de outro conteúdo. O que você já
              respondeu continua no seu histórico.
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
        {erro && (
          <p className="dim" style={{ color: "var(--err)", marginTop: 14 }}>
            {erro}
          </p>
        )}
      </>
    );
  }

  /* ---------- resultado ---------- */
  if (fase === "resultado") {
    const aproveitamento = total > 0 ? Math.round((acertos / total) * 100) : 0;
    return (
      <div className="quiz">
        <div className="quiz-body">
          <div className="quiz-result" ref={refResultado}>
            <div className="big">
              {acertos}
              <span>/{total}</span>
            </div>
            <p className="lede" style={{ margin: "18px auto 0" }}>
              {aproveitamento}% de aproveitamento em {recorte}. O resultado
              entrou no seu histórico — dá para comparar com os próximos e ver
              onde a agulha anda.
            </p>
          </div>
        </div>
        <div className="quiz-foot">
          <span className="dim fine">Sessão concluída e salva.</span>
          <div className="quiz-foot-acoes">
            <Link href="/app" className="btn btn-ghost">
              Ver meu histórico
            </Link>
            <Link href="/app/questoes" className="btn btn-primary">
              Estudar outro conteúdo <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  /* ---------- respondendo ---------- */
  return (
    <div className="quiz">
      <div className="quiz-top">
        <div className="quiz-meta">
          <span className="chip">{recorte}</span>
          <span className="quiz-count">
            {dois(i + 1)} / {dois(total)}
          </span>
        </div>
        <div className="score">
          <span>
            Acertos <b>{acertos}</b>
          </span>
          <span>
            Erros <b>{erros}</b>
          </span>
        </div>
      </div>

      {/* Mede o que já foi respondido, e não o índice da questão aberta: com
          o índice, a barra marcava 0% na primeira e nunca chegava a 100%. */}
      <div className="quiz-progress">
        <i style={{ width: `${(respondidasAgora / total) * 100}%` }} />
      </div>

      <div className="quiz-body">
        {q ? (
          <div ref={refQ}>
            <div className="q-source">{q.fonte}</div>
            <p className="q-text">{q.enunciado}</p>

            <Alternativas
              opcoes={q.opcoes}
              marcada={marcada}
              correta={gabarito ? gabarito.correta : null}
              onEscolher={responder}
              ocupado={ocupado}
            />

            {gabarito && (
              <Gabarito
                acertou={gabarito.acertou}
                correta={gabarito.correta}
                explicacao={gabarito.explicacao}
              />
            )}

            {gabarito?.recompensa && (
              <AvisoRecompensa recompensa={gabarito.recompensa} />
            )}

            {/* A discussão da comunidade abre depois de responder — não antes,
                para não entregar pista do gabarito. */}
            {gabarito && <DiscussaoQuestao questaoId={q.id} />}

            {erro && (
              <p className="dim" style={{ color: "var(--err)", marginTop: 16 }}>
                {erro}
              </p>
            )}
          </div>
        ) : (
          <p className="dim">Questão não encontrada.</p>
        )}
      </div>

      <div className="quiz-foot">
        <span className="dim fine">
          Cada resposta é salva assim que você marca — dá para sair e voltar
          depois.
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
          <button
            className="btn btn-accent"
            onClick={avancar}
            disabled={!gabarito || ocupado}
          >
            {gabarito?.fim ? "Ver resultado" : "Próxima"}{" "}
            <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
