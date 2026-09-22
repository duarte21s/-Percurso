"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { LETRAS } from "./Alternativas";
import { DiscussaoQuestao } from "@/components/comunidade/DiscussaoQuestao";
import css from "./gabarito-completo.module.css";
import type { GabaritoDaSessao, ItemGabarito } from "@/lib/tipos";

interface Props {
  simuladoId: string;
  /** Rótulo do recorte — a matéria ou os temas escolhidos. */
  recorte: string;
}

type Estado =
  | { fase: "carregando" }
  | { fase: "erro"; mensagem: string }
  | { fase: "pronto"; dados: GabaritoDaSessao };

/**
 * O gabarito da sessão inteira, aberto só depois de a pessoa finalizar.
 *
 * Os dados NÃO vêm por prop da página: eles são buscados aqui, depois que a
 * sessão é finalizada. É de propósito. Se a página os carregasse junto das
 * questões, `correta` e `explicacao` estariam no HTML desde a primeira
 * pergunta, e bastaria abrir o DevTools para ver as respostas — exatamente o
 * que /api/simulado/responder evita ao só devolver o gabarito de uma questão
 * depois de ela ser gravada.
 */
export function GabaritoCompleto({ simuladoId, recorte }: Props) {
  const [estado, setEstado] = useState<Estado>({ fase: "carregando" });
  const [soErros, setSoErros] = useState(false);
  const [aberta, setAberta] = useState<string | null>(null);
  const refs = useRef(new Map<string, HTMLLIElement | null>());

  useEffect(() => {
    let vivo = true;
    (async () => {
      try {
        const r = await fetch(
          `/api/simulado/gabarito?simuladoId=${encodeURIComponent(simuladoId)}`
        );
        const d = await r.json().catch(() => ({}));
        if (!vivo) return;
        /* `fetch` não lança em 4xx/5xx. Sem este `r.ok`, um 409 ("a sessão
           ainda não foi finalizada") viraria uma lista vazia e a tela diria
           que não há questões — mentira silenciosa. Este componente só é
           montado na fase "resultado", depois do clique em "Finalizar
           sessão", então um 409 aqui significa que a gravação do status não
           pegou: mostrar o erro é o certo. */
        if (!r.ok) {
          setEstado({
            fase: "erro",
            mensagem: d?.erro ?? "Não consegui carregar o gabarito.",
          });
          return;
        }
        setEstado({ fase: "pronto", dados: d as GabaritoDaSessao });
      } catch {
        if (vivo) {
          setEstado({
            fase: "erro",
            mensagem: "Falha de rede ao carregar o gabarito. Tente de novo.",
          });
        }
      }
    })();
    return () => {
      vivo = false;
    };
  }, [simuladoId]);

  const dados = estado.fase === "pronto" ? estado.dados : null;

  const visiveis = useMemo(() => {
    if (!dados) return [];
    return soErros ? dados.itens.filter((i) => !i.acertou) : dados.itens;
  }, [dados, soErros]);

  /** Leva à questão pedida: mostra-a (desligando o filtro se preciso), rola
   *  até ela e abre a explicação. */
  function irPara(item: ItemGabarito) {
    if (soErros && item.acertou) setSoErros(false);
    setAberta(item.questaoId);
    // O próximo quadro: se o filtro acabou de mudar, a <li> ainda não existe.
    requestAnimationFrame(() => {
      const el = refs.current.get(item.questaoId);
      if (!el) return;
      const suave = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: suave ? "smooth" : "auto", block: "center" });
      el.focus({ preventScroll: true });
    });
  }

  if (estado.fase === "carregando") {
    return (
      <div className={css.caixa}>
        <p className={css.aviso} role="status">
          Montando o seu gabarito…
        </p>
      </div>
    );
  }

  if (estado.fase === "erro") {
    return (
      <div className={css.caixa}>
        <p className={css.erro} role="alert">
          {estado.mensagem}
        </p>
      </div>
    );
  }

  const d = estado.dados;
  const aproveitamento = d.total > 0 ? Math.round((d.acertos / d.total) * 100) : 0;
  const errados = d.itens.filter((i) => !i.acertou).length;
  /* Quantas questões da sessão não viraram cartão. Acontece quando a questão
     sumiu de `questoes` (a matéria dela foi removida, e a FK apaga em
     cascata) — a resposta continua no histórico, mas não há enunciado para
     mostrar. Sem esta conta o cabeçalho dizia "4 de 5" com quatro cartões na
     tela, e a pessoa ficava procurando a quinta. */
  const faltando = d.total - d.itens.length;

  return (
    <div className={css.caixa}>
      <div className={css.topo}>
        <div>
          <h2 className={css.titulo}>Gabarito da sessão</h2>
          <p className={css.resumo}>
            <strong>
              {d.acertos} de {d.total}
            </strong>{" "}
            — {aproveitamento}% de aproveitamento em {recorte}.
            {errados > 0
              ? ` ${errados} ${errados === 1 ? "questão" : "questões"} para rever.`
              : " Nenhum erro."}
          </p>
          {faltando > 0 && (
            <p className={css.aviso} style={{ marginTop: 6 }}>
              {faltando === 1
                ? "Uma questão desta sessão não está mais no banco e não aparece abaixo — a sua resposta continua no histórico."
                : `${faltando} questões desta sessão não estão mais no banco e não aparecem abaixo — as suas respostas continuam no histórico.`}
            </p>
          )}
        </div>

        {errados > 0 && (
          <button
            type="button"
            className={`btn btn-ghost ${css.filtro}`}
            onClick={() => setSoErros((v) => !v)}
            aria-pressed={soErros}
          >
            {soErros ? "Ver todas as questões" : `Rever só os erros (${errados})`}
          </button>
        )}
      </div>

      {/* Atalho numérico: a forma mais curta de voltar a uma questão. O estado
          de cada número já é público — a sessão acabou. */}
      <nav className={css.mapa} aria-label="Ir para uma questão">
        {d.itens.map((item) => (
          <button
            key={item.questaoId}
            type="button"
            className={`${css.pino} ${item.acertou ? css.pinoOk : css.pinoErro}`}
            onClick={() => irPara(item)}
            aria-label={`Questão ${item.numero}, ${item.acertou ? "acertou" : "errou"}`}
          >
            {item.numero}
          </button>
        ))}
      </nav>

      {visiveis.length === 0 ? (
        <p className={css.aviso}>Nenhuma questão neste filtro.</p>
      ) : (
        <ol className={css.lista}>
          {visiveis.map((item) => {
            const abertaAgora = aberta === item.questaoId;
            return (
              <li
                key={item.questaoId}
                tabIndex={-1}
                ref={(el) => {
                  refs.current.set(item.questaoId, el);
                }}
                className={`${css.item} ${item.acertou ? css.itemOk : css.itemErro}`}
              >
                <div className={css.cabecaItem}>
                  <span className={css.numero}>
                    {String(item.numero).padStart(2, "0")}
                  </span>
                  <span
                    className={`${css.selo} ${item.acertou ? css.seloOk : css.seloErro}`}
                  >
                    {item.acertou ? "Acertou" : "Errou"}
                  </span>
                  <span className={css.fonte}>{item.fonte}</span>
                </div>

                <p className={css.enunciado}>{item.enunciado}</p>

                <div className={css.respostas}>
                  <p className={css.linha}>
                    <span className={css.rotulo}>Você marcou</span>
                    <span
                      className={`${css.alt} ${item.acertou ? css.altOk : css.altErro}`}
                    >
                      {LETRAS[item.marcada]}
                    </span>
                    <span className={css.textoAlt}>{item.opcoes[item.marcada]}</span>
                  </p>
                  {/* Só repete a correta quando ela é outra: em questão certa,
                      escrever a mesma alternativa duas vezes é ruído. */}
                  {!item.acertou && (
                    <p className={css.linha}>
                      <span className={css.rotulo}>Correta</span>
                      <span className={`${css.alt} ${css.altOk}`}>
                        {LETRAS[item.correta]}
                      </span>
                      <span className={css.textoAlt}>{item.opcoes[item.correta]}</span>
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  className={css.verMais}
                  onClick={() =>
                    setAberta((a) => (a === item.questaoId ? null : item.questaoId))
                  }
                  aria-expanded={abertaAgora}
                >
                  {abertaAgora ? "Fechar a explicação" : "Ver a explicação"}
                  <span aria-hidden="true">{abertaAgora ? " ▴" : " ▾"}</span>
                </button>

                {abertaAgora && (
                  <div className={css.explicacao}>
                    <p>
                      {item.explicacao || (
                        <span className="dim">
                          Essa é uma questão original do ENEM, e o INEP publica
                          só o gabarito — o comentário ainda não foi escrito.
                        </span>
                      )}
                    </p>
                    <DiscussaoQuestao questaoId={item.questaoId} />
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
}
