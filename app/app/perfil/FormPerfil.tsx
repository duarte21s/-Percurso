"use client";

import { useState } from "react";
import { salvarPerfil } from "./acoes";

interface Props {
  nome: string;
  horasDia: number;
  diasSemana: number;
}

/** Formulário do perfil de estudos. O envio é uma Server Action; o estado
 *  local aqui só existe para mostrar os valores dos controles deslizantes.
 *
 *  Havia aqui um <select> "Seu objetivo" com seis opções — ENEM, vestibular,
 *  concurso, militar, reforço escolar e graduação. O site passou a tratar só
 *  do ENEM e o campo saiu; `salvarPerfil` deixou de escrever a coluna, que
 *  continua no banco com o que já estava lá. */
export function FormPerfil({ nome, horasDia, diasSemana }: Props) {
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
