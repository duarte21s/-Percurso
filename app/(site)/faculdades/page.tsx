import type { Metadata } from "next";
import Link from "next/link";
import { Revelar } from "@/components/ui/Revelar";
import { BotaoApresentacao } from "@/components/secoes/BotaoApresentacao";
import { FACULDADES } from "@/lib/conteudo/faculdades";

export const metadata: Metadata = {
  title: "Faculdades e vestibulares · Percurso",
  description:
    "Entenda as formas de ingresso no ensino superior — ENEM, SiSU, ProUni, vestibulares — e como comparar a concorrência dos cursos.",
};

export default function PaginaFaculdadesPublica() {
  return (
    <main className="section" style={{ paddingTop: 150 }}>
      <div className="wrap">
        <div className="section-head">
          <Revelar como="div" className="head-left head-centro">
            <span className="eyebrow">Faculdades e vestibulares</span>
            <h2 className="title">
              Onde você quer <em>entrar</em>?
            </h2>
            <p className="lede">
              Antes de escolher o que estudar, vale entender como se entra no
              ensino superior no Brasil e o que a concorrência de cada curso
              exige.
            </p>
          </Revelar>
        </div>

          <BotaoApresentacao />

        <Revelar como="div" className="pontos" atraso={1}>
          <div className="ponto">
            <h3>As formas de ingresso</h3>
            <div>
              <p>
                <strong>ENEM</strong> — a prova nacional do ensino médio, aceita
                pela maioria das instituições. A nota abre três caminhos:
              </p>
              <p>
                <strong>SiSU</strong> distribui vagas em universidades públicas
                com base na nota do ENEM. <strong>ProUni</strong> concede bolsas
                em faculdades privadas. E muitas instituições usam a nota do
                ENEM no seu próprio processo.
              </p>
              <p>
                <strong>Vestibular</strong> — prova de seleção própria de uma
                universidade (Fuvest, Unicamp, UERJ e outras), separada do ENEM,
                com calendário e formato próprios.
              </p>
            </div>
          </div>

          <div className="ponto">
            <h3>Escolher o curso</h3>
            <div>
              <p>
                A concorrência varia muito entre curso, instituição, campus e
                modalidade (ampla concorrência ou cotas). Comparar a exigência
                relativa de cada vaga ajuda a definir uma meta realista de
                preparação — e a ter um plano B na mesma área.
              </p>
            </div>
          </div>

          <div className="ponto">
            <h3>O índice de concorrência do Percurso</h3>
            <div>
              <p>
                A plataforma reúne{" "}
                {FACULDADES.length.toLocaleString("pt-BR")} combinações de curso
                e instituição, cada uma com um índice comparativo de 0 a 1000.
                Esse índice serve para <em>ordenar</em> os cursos por
                concorrência — ele não é a nota de corte oficial de nenhum
                edital, e escalas de processos diferentes não são equivalentes
                entre si. Consulte sempre o edital da instituição.
              </p>
            </div>
          </div>
        </Revelar>

        <Revelar como="div" atraso={2}>
          <div className="q-explain" style={{ marginTop: 34 }}>
            <strong>A busca completa fica na sua área de estudos.</strong> Filtre
            por curso, instituição, estado, área e forma de ingresso, e compare a
            concorrência de cada vaga.
          </div>

          <div style={{ marginTop: 26, textAlign: "center" }}>
            <Link href="/cadastro" className="btn btn-primary">
              Criar conta e explorar as faculdades{" "}
              <span className="arrow">→</span>
            </Link>
          </div>
        </Revelar>
      </div>
    </main>
  );
}
