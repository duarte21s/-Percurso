"use client";

import { useState } from "react";
import { FAQ, CATEGORIAS_FAQ } from "@/lib/conteudo/faq";
import { Revelar } from "@/components/ui/Revelar";

interface Props {
  /** A seção é a abertura da página: o cabeçalho centra e o título cresce.
      Fica falso no meio da página — se tudo centraliza, nada é abertura. */
  abertura?: boolean;
}

export function Faq({ abertura = false }: Props) {
  // Um aberto por vez, como no original: abrir uma fecha a anterior.
  // A chave é `${categoria}:${indice}` para não colidir entre grupos.
  const [aberta, setAberta] = useState<string | null>(null);

  return (
    <section className="section" id="duvidas">
      <div className="wrap">
        <div className="section-head">
          <Revelar
            como="div"
            className={`head-left${abertura ? " head-centro" : ""}`}
          >
            <span className="eyebrow">Dúvidas</span>
            <h2 className="title">
              Perguntas que <em>todo mundo</em> faz.
            </h2>
          </Revelar>
        </div>

        {CATEGORIAS_FAQ.map((categoria) => {
          const itens = FAQ.filter((f) => f.categoria === categoria);
          if (itens.length === 0) return null;

          return (
            <div key={categoria} style={{ marginBottom: 34 }}>
              <h3
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--text-3)",
                  margin: "0 0 14px",
                }}
              >
                {categoria}
              </h3>

              <Revelar como="div" className="faq">
                {itens.map((item) => {
                  const chave = `${categoria}:${item.pergunta}`;
                  const abertaAgora = aberta === chave;
                  return (
                    <div
                      className={`faq-item${abertaAgora ? " is-open" : ""}`}
                      key={item.pergunta}
                    >
                      <button
                        className="faq-q"
                        onClick={() => setAberta(abertaAgora ? null : chave)}
                        aria-expanded={abertaAgora}
                      >
                        {item.pergunta}
                        <span className="faq-plus" />
                      </button>
                      <div className="faq-a">
                        <div>
                          <p>{item.resposta}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Revelar>
            </div>
          );
        })}
      </div>
    </section>
  );
}
