"use client";

import type { Ref } from "react";
import { LivroAnimado, type LivroAnimadoRef } from "./LivroAnimado";

/** O mesmo livro verde da marca em todos os pontos do produto. */
export function PercursoBook({ ref }: { ref?: Ref<LivroAnimadoRef> }) {
  return <LivroAnimado ref={ref} />;
}

export type { LivroAnimadoRef as PercursoBookRef } from "./LivroAnimado";
