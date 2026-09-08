"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { COMPETENCIAS } from "@/lib/redacao";
import type { NotaRedacao } from "@/lib/redacao";
import { AvisoRecompensa } from "@/components/comunidade/AvisoRecompensa";
import { BotaoPressao } from "@/components/ui/BotaoPressao";
import { gsap, useGSAP } from "@/lib/gsap/registro";
import { EASE, DUR, STAGGER } from "@/lib/gsap/vocabulario";
import { MOVIMENTO_QUERY, REDUZIDO_QUERY } from "@/lib/gsap/preferencias";
import type { RecompensaEstudo } from "@/lib/tipos";
import css from "./redacao.module.css";

interface Props {
  temaId: string;
  tema: string;
  ano: number;
  simuladoId?: string | null;
}

type Modo = "digitar" | "foto";

/* A folha oficial do ENEM tem 30 linhas e cabem cerca de 90 caracteres em
   cada. Contar linhas escritas exigiria medir a fonte; contar caracteres dá a
   mesma noção com uma conta que não mente em nenhuma tela. */
const CARACTERES_POR_LINHA = 90;
const LINHAS_MAXIMAS = 30;
const LINHAS_MINIMAS = 7;

export function EscreverRedacao({ temaId, tema, ano, simuladoId }: Props) {
  const [modo, setModo] = useState<Modo>("digitar");
  const [texto, setTexto] = useState("");
  const [arquivo, setArquivo] = useState<File | null>(null);
  const [previa, setPrevia] = useState<string | null>(null);
  const [corrigindo, setCorrigindo] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [nota, setNota] = useState<
    | (NotaRedacao & { id?: string | null; recompensa?: RecompensaEstudo })
    | null
  >(null);

  /* Rascunho por tema no navegador. O texto vivia só em `useState`: qualquer
     navegação, F5 ou toque em link do cabeçalho apagava a redação inteira sem
     aviso — e na página da prova a folha fica junto das questões, então a
     pessoa alterna entre as duas por horas.

     Restaurar em efeito, e não no inicializador do useState, porque o
     servidor não tem localStorage: ler ali faria o HTML do servidor divergir
     do primeiro render do cliente. */
  useEffect(() => {
    try {
      const salvo = localStorage.getItem(`redacao:${temaId}`);
      if (salvo) setTexto(salvo);
    } catch {
      /* modo privado ou storage bloqueado: seguir sem rascunho */
    }
  }, [temaId]);

  useEffect(() => {
    const t = setTimeout(() => {
      try {
        if (texto.trim()) localStorage.setItem(`redacao:${temaId}`, texto);
        else localStorage.removeItem(`redacao:${temaId}`);
      } catch {
        /* idem */
      }
    }, 500);
    return () => clearTimeout(t);
  }, [texto, temaId]);
  const entradaArquivo = useRef<HTMLInputElement>(null);
  const refResultado = useRef<HTMLDivElement>(null);

  /* A chegada da nota é um momento: uma timeline coreografa tudo. O painel
     materializa, a nota grande dá um pop com `back.out` (peso, quase
     celebração), as cinco competências sobem em cascata e cada barra enche
     da esquerda com `expo.out` logo atrás. `nota` nas deps dispara quando a
     correção volta. */
  useGSAP(
    () => {
      const el = refResultado.current;
      if (!el || !nota) return;
      const mm = gsap.matchMedia();

      mm.add(MOVIMENTO_QUERY, () => {
        const tl = gsap.timeline();
        tl.from(el, { autoAlpha: 0, y: 12, duration: DUR.base, ease: EASE.entrada })
          .from(
            el.querySelector(`.${css.notaGrande}`),
            { scale: 0.8, autoAlpha: 0, duration: DUR.sheet, ease: EASE.assentaForte },
            "-=0.18"
          )
          .from(
            el.querySelectorAll(`.${css.competencia}`),
            {
              autoAlpha: 0,
              y: 12,
              duration: DUR.curta,
              ease: EASE.entrada,
              stagger: STAGGER.lista,
            },
            "-=0.12"
          )
          .from(
            el.querySelectorAll(`.${css.competenciaBarra} i`),
            {
              scaleX: 0,
              transformOrigin: "left center",
              duration: DUR.enche,
              ease: EASE.enche,
              stagger: STAGGER.lista,
            },
            "-=0.5"
          )
          .from(
            el.querySelector(`.${css.parecer}`),
            { autoAlpha: 0, y: 10, duration: DUR.curta, ease: EASE.entradaSuave },
            "-=0.45"
          );
        return () => tl.kill();
      });

      mm.add(REDUZIDO_QUERY, () => {
        gsap.set(el, { autoAlpha: 1 });
      });
    },
    { dependencies: [nota], scope: refResultado }
  );

  const linhas = useMemo(
    () => Math.ceil(texto.length / CARACTERES_POR_LINHA),
    [texto]
  );
  const passou = linhas > LINHAS_MAXIMAS;

  function escolheArquivo(f: File | null) {
    setArquivo(f);
    setErro(null);
    if (previa) URL.revokeObjectURL(previa);
    setPrevia(f ? URL.createObjectURL(f) : null);
  }

  async function corrige() {
    setCorrigindo(true);
    setErro(null);
    try {
      const dados = new FormData();
      dados.set("temaId", temaId);
      if (simuladoId) dados.set("simuladoId", simuladoId);
      if (modo === "foto" && arquivo) dados.set("foto", arquivo);
      else dados.set("texto", texto);

      const r = await fetch("/api/redacao/avaliar", {
        method: "POST",
        body: dados,
      });
      const corpo = await r.json();
      if (!r.ok) throw new Error(corpo.erro ?? "Não consegui corrigir.");
      setNota(corpo);
      /* Corrigida: o rascunho cumpriu o papel e sai, senão reaparece por cima
         na próxima visita ao mesmo tema. */
      try {
        localStorage.removeItem(`redacao:${temaId}`);
      } catch {
        /* storage bloqueado: nada a limpar */
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (e) {
      setErro(e instanceof Error ? e.message : "Não consegui corrigir.");
    } finally {
      setCorrigindo(false);
    }
  }

  /* ---------------- resultado ---------------- */
  if (nota) {
    return (
      <div ref={refResultado}>
        {nota.recompensa && <AvisoRecompensa recompensa={nota.recompensa} />}

        <div className={css.notaGrande}>
          <span className={css.notaValor}>{nota.total}</span>
          <span className={css.notaDe}>de 1000</span>
        </div>

        <div className={css.competencias}>
          {COMPETENCIAS.map((c) => {
            const detalhe = nota.comentarios.find((x) => x.competencia === c.n);
            const valor = detalhe?.nota ?? 0;
            return (
              <div key={c.n} className={css.competencia}>
                <div className={css.competenciaTopo}>
                  <span className={css.competenciaNome}>
                    <strong>C{c.n}</strong> · {c.titulo}
                  </span>
                  <span className={css.competenciaNota}>{valor}</span>
                </div>
                <span className={css.competenciaBarra}>
                  <i style={{ width: `${(valor / 200) * 100}%` }} />
                </span>
                <p className={css.competenciaTexto}>{detalhe?.justificativa}</p>
              </div>
            );
          })}
        </div>

        <div className={css.parecer}>
          <span className={css.parecerTitulo}>O que treinar primeiro</span>
          {nota.parecer}
        </div>

        {nota.transcricao && (
          <details className={css.transcricao}>
            <summary>
              Ver o que a correção leu da sua letra
            </summary>
            <p>
              Confira se a leitura saiu certa. Palavra lida errado muda a nota da
              competência 1, e aí vale reenviar com uma foto mais nítida.
            </p>
            <pre>{nota.transcricao}</pre>
          </details>
        )}

        <BotaoPressao
          type="button"
          className="btn"
          style={{ marginTop: 22 }}
          onClick={() => {
            setNota(null);
            setTexto("");
            escolheArquivo(null);
          }}
        >
          Escrever de novo
        </BotaoPressao>
      </div>
    );
  }

  /* ---------------- escrita ---------------- */
  return (
    <div>
      <div className={css.proposta}>
        <span className={css.propostaRotulo}>Tema · ENEM {ano}</span>
        <p className={css.propostaTexto}>{tema}</p>
        <p className={css.propostaNota}>
          Texto dissertativo-argumentativo em prosa, de {LINHAS_MINIMAS} a{" "}
          {LINHAS_MAXIMAS} linhas, com proposta de intervenção que respeite os
          direitos humanos.
        </p>
      </div>

      <div className={css.abas}>
        <BotaoPressao
          type="button"
          className={`${css.aba}${modo === "digitar" ? ` ${css.abaAtiva}` : ""}`}
          onClick={() => setModo("digitar")}
        >
          Digitar
        </BotaoPressao>
        <BotaoPressao
          type="button"
          className={`${css.aba}${modo === "foto" ? ` ${css.abaAtiva}` : ""}`}
          onClick={() => setModo("foto")}
        >
          Mandar foto
        </BotaoPressao>
      </div>

      {modo === "digitar" ? (
        <>
          <textarea
            className={css.folha}
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Comece por aqui. Escreva como escreveria na folha."
            rows={18}
            spellCheck={false}
          />
          <div className={css.contador}>
            <span className={passou ? css.contadorPassou : ""}>
              ~{linhas} de {LINHAS_MAXIMAS} linhas
            </span>
            {passou && (
              <span className={css.contadorPassou}>
                O que passa de 30 linhas não é corrigido no ENEM.
              </span>
            )}
          </div>
        </>
      ) : (
        <>
          {/* `capture` faz o celular abrir a câmera direto em vez da galeria —
              o caso mais comum aqui é fotografar a folha que acabou de sair da
              mão. No computador o atributo é ignorado e abre o seletor. */}
          <input
            ref={entradaArquivo}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            capture="environment"
            className={css.entradaEscondida}
            onChange={(e) => escolheArquivo(e.target.files?.[0] ?? null)}
          />

          {previa ? (
            <div className={css.previaCaixa}>
              <img src={previa} alt="Sua redação" className={css.previa} />
              <BotaoPressao
                type="button"
                className="btn"
                onClick={() => entradaArquivo.current?.click()}
              >
                Trocar a foto
              </BotaoPressao>
            </div>
          ) : (
            <BotaoPressao
              type="button"
              className={css.areaFoto}
              onClick={() => entradaArquivo.current?.click()}
            >
              <span className={css.areaFotoIcone}>📷</span>
              <span className={css.areaFotoTitulo}>
                Fotografar a folha, ou escolher do celular
              </span>
              <span className={css.areaFotoDica}>
                JPG, PNG ou WEBP, até 8 MB. Enquadre a folha inteira, com luz
                boa e sem sombra por cima do texto — a correção lê a sua letra
                e depois corrige a partir dessa leitura.
              </span>
            </BotaoPressao>
          )}
        </>
      )}

      {erro && <div className={css.erro}>{erro}</div>}

      <BotaoPressao
        type="button"
        className="btn btn-primary"
        style={{ width: "100%", marginTop: 18 }}
        onClick={corrige}
        disabled={
          corrigindo ||
          (modo === "digitar" ? texto.trim().length < 200 : !arquivo)
        }
      >
        {corrigindo
          ? modo === "foto"
            ? "Lendo a sua letra e corrigindo…"
            : "Corrigindo…"
          : "Corrigir minha redação"}
        {!corrigindo && <span className="arrow">→</span>}
      </BotaoPressao>

      <p className={css.aviso}>
        A correção é feita por IA seguindo a grade oficial do INEP. Serve para
        treinar e enxergar onde a nota trava — não é a nota oficial, e correção
        humana pode divergir, principalmente nas competências 2 e 3.
      </p>
    </div>
  );
}
