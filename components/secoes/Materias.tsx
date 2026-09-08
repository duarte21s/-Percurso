"use client";

import { useState } from "react";
import { MATERIAS } from "@/lib/conteudo/materias";
import { Icone } from "@/components/ui/Icone";
import { Revelar } from "@/components/ui/Revelar";
import type { Area } from "@/lib/tipos";

const FILTROS: { valor: Area | "todas"; rotulo: string }[] = [
  { valor: "todas", rotulo: "Todas" },
  { valor: "exatas", rotulo: "Exatas" },
  { valor: "natureza", rotulo: "Natureza" },
  { valor: "humanas", rotulo: "Humanas" },
  { valor: "linguagens", rotulo: "Linguagens" },
];

export function Materias() {
  const [area, setArea] = useState<Area | "todas">("todas");
  const [aberta, setAberta] = useState<string | null>(null);

  const lista =
    area === "todas" ? MATERIAS : MATERIAS.filter((m) => m.area === area);

  return (
    <section className="section" id="materias">
      <div className="wrap">
        <div className="section-head">
          <Revelar como="div" className="head-left">
            <span className="eyebrow">Matérias</span>
            <h2 className="title">
              Nove matérias.
              <br />
              <em>Zero</em> enrolação.
            </h2>
            <p className="lede">
              Abra qualquer matéria para ver os tópicos e o quanto cada um
              costuma aparecer nas provas. A barra à direita indica a incidência
              histórica do tema.
            </p>
          </Revelar>
        </div>

        <Revelar como="div" className="subject-filter" atraso={1}>
          {FILTROS.map((f) => (
            <button
              key={f.valor}
              className={`pill${area === f.valor ? " is-active" : ""}`}
              onClick={() => setArea(f.valor)}
              aria-pressed={area === f.valor}
            >
              {f.rotulo}
            </button>
          ))}
        </Revelar>

        <div className="subjects">
          {lista.map((m) => {
            const abertaAgora = aberta === m.id;
            return (
              <article
                className={`subject${abertaAgora ? " is-open" : ""}`}
                key={m.id}
              >
                <button
                  className="subject-head"
                  onClick={() => setAberta(abertaAgora ? null : m.id)}
                  aria-expanded={abertaAgora}
                >
                  <span className="subject-glyph">{m.glifo}</span>
                  <span className="subject-title">
                    <strong>{m.nome}</strong>
                    <span>
                      {m.resumo} · {m.topicos.length} tópicos
                    </span>
                  </span>
                  <Icone
                    nome="seta"
                    className="subject-caret"
                    tracoLargura={1.8}
                  />
                </button>

                <div className="subject-body">
                  <div>
                    <div className="subject-topics">
                      {m.topicos.map(([titulo, incidencia], i) => (
                        <div className="topic" key={titulo}>
                          <span className="n">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span>{titulo}</span>
                          {/* A barra afirma "caiu tanto por cento das vezes".
                              Só as nove matérias de ensino médio trazem esse
                              levantamento; as criadas por trilha vêm com
                              incidencia null. Desenhar barra vazia ali diria
                              "incidência zero", que é uma medição — e não é o
                              caso. O certo é não desenhar nada. */}
                          {incidencia === null ? (
                            <span className="bar is-vazia" aria-hidden="true" />
                          ) : (
                            <span
                              className="bar"
                              title={`Incidência histórica: ${incidencia}%`}
                            >
                              <i style={{ width: `${incidencia}%` }} />
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
