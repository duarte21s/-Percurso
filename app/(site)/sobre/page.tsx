import type { Metadata } from "next";
import Link from "next/link";
import { Revelar } from "@/components/ui/Revelar";
import { BotaoApresentacao } from "@/components/secoes/BotaoApresentacao";
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
    "O que é o Percurso, para quem foi feito, o problema que resolve e como ele ajuda quem estuda para o ENEM a organizar e acompanhar a preparação.",
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
      "Para quem vai prestar o ENEM: do estudante que está no primeiro ano do ensino médio a quem já saiu da escola e vai tentar de novo. As nove matérias de ensino médio que o exame cobra estão todas no catálogo. As questões autorais trazem comentário alternativa por alternativa; as do ENEM vêm com o gabarito do INEP e ganham explicação quando alguém pede.",
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
              <h1 className="title">
                Da primeira questão à <em>aprovação</em>.
              </h1>
              <p className="lede">
                O Percurso é uma plataforma de estudos para quem está se
                preparando para o ENEM. Um lugar só para estudar o conteúdo,
                treinar em prova e organizar a semana.
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

      <Marquee />

      <Revelar como="div">
        <Numeros stats={stats ?? SEM_BANCO} />
      </Revelar>

      <Metodo />

      {/* A folga é SIMÉTRICA, e esse é o conserto.

          Havia `paddingTop: 0` aqui — o único do projeto — provavelmente para
          a faixa não somar mais um vão depois do Método. O efeito foi outro:
          `.section + .section` desenha um `border-top`, e com o topo zerado o
          botão nascia a 1px dessa linha, com os 112px do `padding-block`
          inteiros sobrando embaixo. Ele não estava centrado na faixa; estava
          pregado no teto dela.

          O valor é menor que o `clamp(72px, 8vw, 112px)` de uma seção de
          conteúdo, de propósito: aqui mora um controle só, e repetir a régua
          de um bloco de texto abriria uma faixa de 275px para um botão de
          51px. */}
      <section
        className="section"
        style={{ paddingBlock: "clamp(44px, 5vw, 72px)" }}
      >
        {/* O botão é o único conteúdo desta faixa, e encostado à esquerda ele
            lia como sobra da seção anterior em vez de convite para a próxima.
            Centralizado, fica no mesmo arranjo do `.cta .btns` e do
            `.hero-cta`: passo isolado, no meio da página.

            O `flex` vai no `.wrap` e não no `Revelar`: aquele componente
            expõe só `children`, `atraso`, `como` e `className`, e dar um
            `style` a ele obrigaria a alargar a API de um componente usado no
            site inteiro por causa de um botão. E `flex` em vez de
            `text-align: center` porque o alvo é a CAIXA do link, que tem
            padding próprio — centralizar o texto dentro dela deixaria a caixa
            à esquerda do mesmo jeito. */}
        <div className="wrap" style={{ display: "flex", justifyContent: "center" }}>
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
