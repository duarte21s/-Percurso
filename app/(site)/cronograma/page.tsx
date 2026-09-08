import type { Metadata } from "next";
import Link from "next/link";
import { Revelar } from "@/components/ui/Revelar";
import { BotaoApresentacao } from "@/components/secoes/BotaoApresentacao";

export const metadata: Metadata = {
  title: "Cronograma de estudos · Percurso",
  description:
    "Como o cronograma do Percurso organiza a sua semana de estudos por matéria, com revisão espaçada e um dia de descanso.",
};

export default function PaginaCronogramaPublica() {
  return (
    <main className="section" style={{ paddingTop: 150 }}>
      <div className="wrap">
        <div className="section-head">
          <Revelar como="div" className="head-left head-centro">
            <span className="eyebrow">Cronograma</span>
            <h2 className="title">
              Um plano que respeita a <em>sua</em> rotina.
            </h2>
            <p className="lede">
              O cronograma do Percurso transforma &ldquo;preciso estudar mais&rdquo;
              em uma semana concreta: o que estudar, quando revisar e quando
              parar.
            </p>
          </Revelar>
        </div>

          <BotaoApresentacao />

        <Revelar como="div" className="pontos" atraso={1}>
          <div className="ponto">
            <h3>O que é</h3>
            <div>
              <p>
                Uma ferramenta que monta a sua semana de estudos a partir de
                três respostas: qual o seu objetivo, quantas horas você tem por
                dia e quantos dias por semana consegue estudar. Não é uma
                planilha em branco — é um plano pronto, ajustável.
              </p>
            </div>
          </div>

          <div className="ponto">
            <h3>Como ele organiza os estudos</h3>
            <div>
              <p>
                O plano é montado bloco a bloco, por matéria. Você pode deixar o
                cronograma escolher as matérias que a sua prova cobra, ou marcar
                matérias e assuntos específicos — e aí ele passa a ter só o que
                você marcou.
              </p>
              <p>
                Cada matéria recebe uma fatia de horas proporcional à
                prioridade, e o plano mostra essa distribuição para você
                conferir. Quem escolhe ENEM ou vestibular ganha também um bloco
                de redação na semana.
              </p>
            </div>
          </div>

          <div className="ponto">
            <h3>Revisão espaçada e descanso</h3>
            <div>
              <p>
                O que você estuda hoje volta como bloco de revisão depois de 1,
                7 e 30 dias — cada bloco diz o que revisar e de quando. Os dias
                que sobram viram descanso: um plano que ignora cansaço não
                sobrevive à segunda semana.
              </p>
            </div>
          </div>

          <div className="ponto">
            <h3>Para quem tem a rotina corrida</h3>
            <div>
              <p>
                Você diz que tem 2 horas por dia, 4 dias por semana, e o plano
                se ajusta a isso — sem fingir que dá para estudar 8 horas por
                dia. O valor está em ter um próximo passo claro toda vez que
                sentar para estudar.
              </p>
            </div>
          </div>
        </Revelar>

        <Revelar como="div" atraso={2}>
          <div className="q-explain" style={{ marginTop: 34 }}>
            <strong>O cronograma pessoal fica na sua área de estudos.</strong>{" "}
            Crie uma conta para montar o seu, salvar e acompanhar o progresso.
          </div>

          <div style={{ marginTop: 26, textAlign: "center" }}>
            <Link href="/cadastro" className="btn btn-primary">
              Criar conta e montar meu cronograma{" "}
              <span className="arrow">→</span>
            </Link>
          </div>
        </Revelar>
      </div>
    </main>
  );
}
