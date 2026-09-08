import Link from "next/link";
import { TRILHAS } from "@/lib/conteudo/trilhas";
import { Icone } from "@/components/ui/Icone";
import { Revelar } from "@/components/ui/Revelar";

export function Trilhas() {
  return (
    <section className="section" id="trilhas">
      <div className="wrap">
        <div className="section-head">
          <Revelar como="div" className="head-left">
            <span className="eyebrow">Trilhas</span>
            <h2 className="title">
              Escolha o seu <em>objetivo</em>.
              <br />O resto se organiza sozinho.
            </h2>
            {/* Dizia "reordena o tipo de questão de acordo com a prova" e
                "estuda o que aquela banca cobra". O banco é um só — ENEM mais
                autoral de ensino médio —, então o que a trilha reordena é a
                prioridade das matérias, não a origem da questão. Cada página
                de trilha abre dizendo o que tem e o que falta. */}
            <p className="lede">
              Cada trilha reordena o peso das matérias de acordo com o que você
              vai prestar, e diz de saída o que o site cobre e o que não cobre.
              O banco é o mesmo para todas: provas do ENEM e questões autorais
              em nível de ensino médio.
            </p>
          </Revelar>
          <Revelar atraso={2}>
            <Link href="#materias" className="btn btn-ghost">
              Ver todas as matérias <span className="arrow">→</span>
            </Link>
          </Revelar>
        </div>

        <div className="tracks">
          {TRILHAS.map((t, i) => (
            <Revelar
              key={t.id}
              como="article"
              className="track"
              atraso={((i % 3) + 1) as 1 | 2 | 3}
            >
              <span className="track-ico">
                <Icone nome={t.ico} />
              </span>
              <h3>{t.titulo}</h3>
              <p>{t.desc}</p>
              <div className="track-meta">
                {t.destaque && <span className="chip accent">{t.destaque}</span>}
                {t.tags.map((g) => (
                  <span className="chip" key={g}>
                    {g}
                  </span>
                ))}
              </div>
              <div className="track-foot">
                <span>{t.stat}</span>
                {/* Era um <span>: parecia botão, não levava a lugar nenhum.
                    Agora é um link de verdade, e o `track-link` estica a área
                    clicável por cima do cartão inteiro — ninguém mira só nas
                    oito letras de "Explorar". */}
                <Link href={`/trilhas/${t.id}`} className="go track-link">
                  Explorar <span className="arrow">→</span>
                </Link>
              </div>
            </Revelar>
          ))}
        </div>
      </div>
    </section>
  );
}
