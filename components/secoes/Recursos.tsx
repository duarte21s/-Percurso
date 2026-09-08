import Link from "next/link";
import { RECURSOS } from "@/lib/conteudo/metodo";
import { Icone } from "@/components/ui/Icone";
import { Revelar } from "@/components/ui/Revelar";
import css from "./demonstracao.module.css";

interface Props {
  /** A seção é a abertura da página: o cabeçalho centra e o título cresce.
      Fica falso no meio da página — se tudo centraliza, nada é abertura. */
  abertura?: boolean;
}

export function Recursos({ abertura = false }: Props) {
  return (
    <section className="section" id="recursos">
      <div className="wrap">
        <div className="section-head">
          <Revelar
            como="div"
            className={`head-left${abertura ? " head-centro" : ""}`}
          >
            <span className="eyebrow">O que você recebe</span>
            <h2 className="title">
              Não é uma lista de aulas.
              <br />É um <em>sistema de estudo</em>.
            </h2>
            <p className="lede">
              Tudo aqui existe para responder uma pergunta: o que eu estudo
              agora, e como sei que está funcionando? Estas são as peças que
              respondem isso — cada uma tem uma página que explica.
            </p>
          </Revelar>
        </div>

        <div className={css.grade}>
          {RECURSOS.map((r, i) => (
            <Revelar
              key={r.titulo}
              className={css.recurso}
              atraso={((i % 3) + 1) as 1 | 2 | 3}
            >
              <span className={css.recursoIco}>
                <Icone nome={r.ico} />
              </span>
              <h3>{r.titulo}</h3>
              <p>{r.texto}</p>
              <Link
                href={r.href}
                className="dim"
                style={{
                  display: "inline-block",
                  marginTop: 12,
                  color: "var(--accent-2)",
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                {r.ctaRotulo} →
              </Link>
            </Revelar>
          ))}
        </div>
      </div>
    </section>
  );
}
