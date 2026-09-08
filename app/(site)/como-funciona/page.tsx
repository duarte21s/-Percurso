import type { Metadata } from "next";
import Link from "next/link";
import { ComoFunciona } from "@/components/secoes/ComoFunciona";
import { Revelar } from "@/components/ui/Revelar";
import { BotaoApresentacao } from "@/components/secoes/BotaoApresentacao";

export const metadata: Metadata = {
  title: "Como funciona · Percurso",
  description:
    "A jornada do estudante no Percurso, do cadastro à prova: definir o objetivo, montar o cronograma, resolver questões, treinar redação e acompanhar o desempenho.",
};

const JORNADA: { n: string; titulo: string; texto: string }[] = [
  {
    n: "01",
    titulo: "Crie sua conta",
    texto:
      "E-mail e senha ou conta Google. Dá para testar antes como visitante, por 60 minutos — e o progresso migra se você criar a conta no mesmo navegador.",
  },
  {
    n: "02",
    titulo: "Defina seu objetivo",
    texto:
      "Em Perfil você diz para o que está estudando (ENEM, vestibular, concurso, carreira militar ou reforço) e quanto tempo tem por semana.",
  },
  {
    n: "03",
    titulo: "Monte seu cronograma",
    texto:
      "O cronograma distribui as matérias na semana com revisão em 1, 7 e 30 dias e um dia de descanso, no ritmo que você informou.",
  },
  {
    n: "04",
    titulo: "Resolva questões por assunto",
    texto:
      "Escolha uma matéria e os assuntos que quer treinar. Cada assunto mostra quantas questões existem dele no banco.",
  },
  {
    n: "05",
    titulo: "Veja o erro explicado na hora",
    texto:
      "Ao marcar a alternativa, o gabarito e o comentário abrem logo abaixo — por que a certa está certa e por que cada distrator engana.",
  },
  {
    n: "06",
    titulo: "Faça uma prova do ENEM inteira",
    texto:
      "As 15 provas reais, de 2009 a 2023, cronometradas. Você responde tudo primeiro e vê a nota só no fim, com o desempenho separado por área.",
  },
  {
    n: "07",
    titulo: "Treine redação",
    texto:
      "Os temas que caíram de verdade. Você escreve digitando ou fotografa a folha manuscrita e recebe a nota nas cinco competências do INEP, com o motivo de cada uma.",
  },
  {
    n: "08",
    titulo: "Acompanhe o desempenho",
    texto:
      "A Visão geral traz o resumo; Desempenho mostra o histórico completo e o aproveitamento por área; Matérias mostra quanto você já respondeu de cada uma.",
  },
  {
    n: "09",
    titulo: "Ajuste a preparação",
    texto:
      "Voltou a errar um tópico? Reforce ele na próxima semana e refaça as questões. O ciclo é curto de propósito.",
  },
  {
    n: "10",
    titulo: "Chegue mais preparado",
    texto:
      "Da primeira página à prova, com o caminho medido e corrigido pelo meio — não no dia do exame.",
  },
];

export default function PaginaComoFunciona() {
  return (
    <main id="top">
      <section className="section" style={{ paddingTop: 150 }}>
        <div className="wrap">
          <div className="section-head">
            <Revelar como="div" className="head-left head-centro">
              <span className="eyebrow">Como funciona</span>
              <h2 className="title">
                A jornada, do cadastro à <em>prova</em>.
              </h2>
              <p className="lede">
                O Percurso é um ciclo curto que se repete: diagnosticar, estudar,
                testar, revisar. Estes são os passos — nesta página eles são
                explicados; as ferramentas de verdade ficam na sua área de
                estudos.
              </p>
            </Revelar>
          </div>

            <BotaoApresentacao />

          <Revelar como="div" className="method">
            {JORNADA.map((p) => (
              <div className="step" key={p.n}>
                <span className="step-n">{p.n}</span>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </div>
            ))}
          </Revelar>

          <div style={{ marginTop: 38, textAlign: "center" }}>
            <Link href="/cadastro" className="btn btn-primary">
              Começar agora <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      <ComoFunciona />
    </main>
  );
}
