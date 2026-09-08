"use client";

import Link from "next/link";
import { PASSOS } from "@/lib/conteudo/apresentacao";
import { usarIndicador } from "@/lib/movimento/usarIndicador";

/* Trilha dos passos da apresentação.
 *
 * Responde às duas perguntas que toda tela precisa responder: onde estou, e
 * para onde posso ir. Sem ela a apresentação vira um corredor às cegas — a
 * pessoa não sabe se falta um passo ou seis, e "próximo" deixa de ser uma
 * escolha para virar um salto no escuro.
 *
 * Aqui os passos anteriores continuam clicáveis, ao contrário da prova: numa
 * apresentação voltar é legítimo, e travar seria arbitrariedade.
 *
 * Usa o mesmo indicador deslizante da navegação do site e da área de estudos.
 * Três navegações, um só comportamento. */

export function TrilhaPassos({ atual }: { atual: number }) {
  const { refLista, refIndicador } = usarIndicador<
    HTMLDivElement,
    HTMLSpanElement
  >(String(atual), { rolarAteAAba: true });

  return (
    <nav className="passos-casca" aria-label="Passos da apresentação">
      <div className="passos" ref={refLista}>
        <span className="passos-indicador" ref={refIndicador} aria-hidden="true" />
        {PASSOS.map((p, i) => (
          <Link
            key={p.slug}
            href={`/apresentacao/${p.slug}`}
            className="passo-aba"
            aria-current={i === atual ? "page" : undefined}
          >
            <span className="passo-n">{String(i + 1).padStart(2, "0")}</span>
            {p.eyebrow}
          </Link>
        ))}
      </div>
    </nav>
  );
}
