import type { Metadata } from "next";
import Link from "next/link";
import { Revelar } from "@/components/ui/Revelar";
import { BotaoApresentacao } from "@/components/secoes/BotaoApresentacao";
import { Vitrine } from "@/components/secoes/Vitrine";
import { Marquee } from "@/components/secoes/Marquee";
import { Numeros } from "@/components/secoes/Numeros";
import { Metodo } from "@/components/secoes/Metodo";
import { TeaserCronograma } from "@/components/secoes/TeaserCronograma";
import { TeaserFaculdades } from "@/components/secoes/TeaserFaculdades";
import { CtaFinal } from "@/components/secoes/CtaFinal";
import { criaClienteServidor } from "@/lib/supabase/server";
import type { Estatisticas } from "@/lib/tipos";

export const metadata: Metadata = {
  title: "Conheça o Percurso",
  description:
    "O que é o Percurso, para quem foi feito, o problema que resolve e como ele ajuda quem estuda para o ENEM e vestibulares a organizar e acompanhar a preparação.",
};

/* Os números vêm do banco a cada request. Sem cache estático de propósito:
   questões novas precisam aparecer sem esperar um rebuild. */
export const dynamic = "force-dynamic";

const SEM_BANCO: Estatisticas = { questoes: 0, materias: 9, provas: 0 };

/* O corpo da página é uma lista de assuntos, não prosa corrida — por isso vem
   como dado e não como JSX solto. A coluna de títulos que sai daqui funciona
   como índice: dá para varrer a página só por ela. */
const PONTOS: { titulo: string; paragrafos: string[] }[] = [
  {
    titulo: "Para quem foi criado",
    paragrafos: [
      "Para o estudante de ensino médio que vai prestar ENEM ou vestibular, para quem se prepara para concurso ou carreira militar, e para quem precisa de reforço do 6º ao 9º ano. São nove matérias de ensino médio com banco de questões comentadas, mais matérias criadas por objetivo.",
    ],
  },
  {
    titulo: "O problema que resolve",
    paragrafos: [
      "Estudar sozinho costuma esbarrar sempre nos mesmos pontos: não saber por onde começar, estudar o que se gosta em vez do que cai, errar uma questão e nunca mais reencontrá-la, e ver o progresso sumir ao fechar a aba.",
      "O Percurso ataca cada um desses pontos: um cronograma que distribui a semana, os assuntos com a incidência histórica ao lado, o gabarito comentado que explica por que o distrator engana, e a sessão que fica salva presa à sua conta.",
    ],
  },
  {
    titulo: "Organização para uma rotina corrida",
    paragrafos: [
      "Você diz quanto tempo tem por dia e quantos dias por semana consegue estudar, e o cronograma se ajusta a isso — com revisão espaçada em 1, 7 e 30 dias e um dia de descanso. Um plano que ignora cansaço não sobrevive à segunda semana.",
    ],
  },
  {
    titulo: "Acompanhar a evolução",
    paragrafos: [
      "Cada resposta gravada entra no seu histórico. Dá para ver o aproveitamento por sessão, retomar exatamente onde parou e comparar a nota de redação de hoje com a de duas semanas atrás.",
    ],
  },
  {
    titulo: "Honestidade de dados",
    paragrafos: [
      "O site não anuncia nenhum conteúdo que o banco não tenha de fato. Os números abaixo são contados do banco em tempo real, não escritos como peça de propaganda. Onde falta conteúdo, o site diz que falta — questão com gabarito errado é pior do que questão faltando.",
    ],
  },
];

const VEJA_TAMBEM: { href: string; rotulo: string }[] = [
  { href: "/como-funciona", rotulo: "como funciona, passo a passo" },
  { href: "/recursos", rotulo: "todos os recursos" },
  { href: "/cronograma", rotulo: "o cronograma" },
  { href: "/faculdades", rotulo: "faculdades e vestibulares" },
  { href: "/duvidas", rotulo: "dúvidas frequentes" },
];

export default async function PaginaSobre() {
  const supabase = await criaClienteServidor();

  let stats: Estatisticas | null = null;
  if (supabase) {
    const { data: linha } = await supabase
      .from("vw_estatisticas")
      .select("*")
      .maybeSingle();
    stats = (linha as Estatisticas | null) ?? null;
  }

  return (
    <main id="top">
      <section className="section" style={{ paddingTop: 150 }}>
        <div className="wrap">
          <div className="section-head">
            <Revelar como="div" className="head-left head-centro">
              <span className="eyebrow">O que é o Percurso</span>
              <h2 className="title">
                Da primeira página à <em>aprovação</em>.
              </h2>
              <p className="lede">
                O Percurso é uma plataforma de estudos para quem está se
                preparando para o ENEM e vestibulares — e também para concursos,
                carreiras militares e reforço escolar do 6º ao 9º ano. Um lugar
                só para estudar o conteúdo, treinar em prova e organizar a
                semana.
              </p>
            </Revelar>
          </div>

            <BotaoApresentacao />

          <Revelar como="div" className="pontos" atraso={1}>
            {PONTOS.map((ponto) => (
              <div className="ponto" key={ponto.titulo}>
                <h3>{ponto.titulo}</h3>
                <div>
                  {ponto.paragrafos.map((texto) => (
                    <p key={texto.slice(0, 32)}>{texto}</p>
                  ))}
                </div>
              </div>
            ))}
          </Revelar>

          <Revelar como="p" className="dim nota ponto-veja" atraso={2}>
            Veja também:{" "}
            {VEJA_TAMBEM.map((l, i) => (
              <span key={l.href}>
                {i > 0 && " · "}
                <Link href={l.href} style={{ color: "var(--accent-2)" }}>
                  {l.rotulo}
                </Link>
              </span>
            ))}
          </Revelar>
        </div>
      </section>

      <Vitrine />

      <Marquee />

      <Revelar como="div">
        <Numeros stats={stats ?? SEM_BANCO} />
      </Revelar>

      <Metodo />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Revelar como="div">
            <Link href="/como-funciona" className="btn btn-ghost">
              Ver a jornada completa, passo a passo{" "}
              <span className="arrow">→</span>
            </Link>
          </Revelar>
        </div>
      </section>

      <TeaserCronograma />
      <TeaserFaculdades />
      <CtaFinal />
    </main>
  );
}
