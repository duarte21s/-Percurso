"use client";

import { useState } from "react";
import { salvarPerfil } from "./acoes";

const OBJETIVOS: { valor: string; rotulo: string }[] = [
  { valor: "enem", rotulo: "ENEM" },
  { valor: "vestibular", rotulo: "Vestibular" },
  { valor: "concurso", rotulo: "Concurso público" },
  { valor: "militar", rotulo: "Carreira militar" },
  { valor: "escola", rotulo: "Reforço escolar (6º ao 9º)" },
  { valor: "graduacao", rotulo: "Já na faculdade" },
];

interface Props {
  nome: string;
  objetivo: string;
  horasDia: number;
  diasSemana: number;
}

/** Formulário do perfil de estudos. O envio é uma Server Action; o estado
 *  local aqui só existe para mostrar os valores dos controles deslizantes. */
export function FormPerfil({ nome, objetivo, horasDia, diasSemana }: Props) {
  const [horas, setHoras] = useState(horasDia);
  const [dias, setDias] = useState(diasSemana);

  return (
    <form action={salvarPerfil} className="planner-form" style={{ maxWidth: 560 }}>
      <div className="form-row">
        <label htmlFor="pNome">Como podemos te chamar</label>
        <div className="field field-full">
          <input
            className="input"
            id="pNome"
            name="nome"
            type="text"
            defaultValue={nome}
            maxLength={60}
            required
            autoComplete="name"
          />
        </div>
      </div>

      <div className="form-row">
        <label htmlFor="pObjetivo">Seu objetivo</label>
        <div className="field sel field-full">
          <select
            className="select"
            id="pObjetivo"
            name="objetivo"
            defaultValue={objetivo}
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
            name="horas_dia"
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
            name="dias_semana"
            min={3}
            max={7}
            step={1}
            value={dias}
            onChange={(e) => setDias(Number(e.target.value))}
          />
          <span className="range-val">{dias} dias</span>
        </div>
      </div>

      <button type="submit" className="btn btn-primary form-full">
        Salvar <span className="arrow">→</span>
      </button>
    </form>
  );
}
