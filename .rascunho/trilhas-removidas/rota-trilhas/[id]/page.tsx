import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TRILHAS } from "@/lib/conteudo/trilhas";
import { DESTINOS } from "@/lib/conteudo/destinos-trilha";
import { MATERIAS_POR_ID, materiasDoObjetivo } from "@/lib/conteudo/materias";
import { criaClienteServidor } from "@/lib/supabase/server";
import { contagensPorMateria } from "@/lib/temas";
import { Icone } from "@/components/ui/Icone";
import css from "./trilha.module.css";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return TRILHAS.map((t) => ({ id: t.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const trilha = TRILHAS.find((t) => t.id === id);
  if (!trilha) return { title: "Trilha · Percurso" };
  return {
    title: `${trilha.titulo} · Percurso`,
    description: trilha.desc,
  };
}

export default async function PaginaTrilha({ params }: Props) {
  const { id } = await params;

  const trilha = TRILHAS.find((t) => t.id === id);
  if (!trilha) notFound();

  const destino = DESTINOS[trilha.id];

  /* A página é pública de propósito: ela explica o que existe, não entrega
     questão nenhuma. Quem clicar em qualquer botão daqui cai no guarda de
     sessão da página de destino. */
  /* O foco vem das próprias matérias, que declaram a que trilhas servem.
     Antes era uma lista escrita à mão em destinos-trilha.ts, e listas
     paralelas divergem: bastava criar uma matéria de concurso e esquecer de
     acrescentá-la ali para ela nunca aparecer na trilha que a motivou. */
  const materiasFoco = materiasDoObjetivo(trilha.id);
  const foco = materiasFoco.map((m) => m.id);

  const supabase = await criaClienteServidor();
  const contagens = supabase ? await contagensPorMateria(supabase, foco) : {};

  const totalFoco = Object.values(contagens).reduce((n, v) => n + v, 0);

  /* O rótulo se calcula em vez de ser escrito à mão, senão envelhece: hoje
     "Cálculo I" tem zero questões e dizer "questões de ensino médio" está
     certo; no dia em que ele tiver mil, a mesma frase passa a ser mentira.
     Uma matéria é do ensino médio quando serve à trilha do ENEM — é o que
     distingue Matemática de Raciocínio lógico. */
  const ehMedio = (id: string) =>
    Boolean(MATERIAS_POR_ID.get(id)?.objetivos.includes("enem"));

  const doMedio = foco
    .filter(ehMedio)
    .reduce((n, id) => n + (contagens[id] ?? 0), 0);
  const daTrilha = totalFoco - doMedio;

  const rotuloContagem =
    daTrilha === 0
      ? `${totalFoco.toLocaleString("pt-BR")} questões de ensino médio`
      : doMedio === 0
        ? `${totalFoco.toLocaleString("pt-BR")} questões`
        : `${totalFoco.toLocaleString("pt-BR")} questões · ${daTrilha.toLocaleString("pt-BR")} específicas desta trilha`;

  /* Para onde os botões levam: a mesma tela de estudo, mas recortada nesta
     trilha. Sem o parâmetro, "Carreiras militares" abria o seletor com as
     nove matérias do ensino médio, Artes e Filosofia inclusive. */
  const paraEstudar = `/estudar?trilha=${trilha.id}`;

  return (
    <main className="section" style={{ paddingTop: 150 }}>
      <div className="wrap">
        <div className="section-head">
          <div className="head-left">
            <span className="eyebrow">Trilha</span>
            <h2 className="title">{trilha.titulo}</h2>
            <p className="lede">{trilha.desc}</p>
          </div>
          <div className="head-right">
            <Link href="/#trilhas" className="btn btn-ghost">
              Ver as outras trilhas
            </Link>
          </div>
        </div>

        {/* ---------- o que está pronto ---------- */}
        <div className={css.bloco}>
          <span className={css.rotulo}>O que está pronto</span>
          <p className={css.texto}>{destino.pronto}</p>

          <div className={css.acoes}>
            <Link href={paraEstudar} className="btn btn-primary">
              Escolher conteúdo e treinar <span className="arrow">→</span>
            </Link>
            {destino.temEnem && (
              <>
                <Link href="/provas" className="btn btn-accent">
                  Provas do ENEM
                </Link>
                <Link href="/redacao" className="btn btn-ghost">
                  Redação
                </Link>
              </>
            )}
            <Link href="/#plano" className="btn btn-ghost">
              Montar cronograma
            </Link>
          </div>
        </div>

        {/* ---------- matérias em foco, com o número real ----------
            O rótulo diz de onde vem a questão, e não só quantas são. Antes
            lia-se "Matérias que essa trilha prioriza · 4.469 questões" numa
            página de concursos, o que dava a entender que existiam 4.469
            questões de concurso. Não existe nenhuma: o banco é 2.749 questões
            das provas do ENEM mais 6.799 autorais, todas em nível de ensino
            médio, e é o mesmo banco nas seis trilhas. */}
        <div className={css.bloco}>
          <span className={css.rotulo}>
            Matérias que essa trilha prioriza
            {totalFoco > 0 && ` · ${rotuloContagem}`}
          </span>
          <p className={css.origem}>
            {daTrilha === 0
              ? "São questões das provas do ENEM e questões autorais no mesmo nível. O site não tem questão de banca própria, de concurso nem de ensino superior."
              : "As questões vêm das provas do ENEM e do acervo autoral do site. Nenhuma é de prova aplicada por banca própria, de concurso ou de vestibular militar — para essas, o bloco abaixo aponta o acervo oficial."}
          </p>
          <div className={css.materias}>
            {foco.map((mid) => {
              const m = MATERIAS_POR_ID.get(mid);
              if (!m) return null;
              const n = contagens[mid] ?? 0;
              return (
                <Link key={mid} href={paraEstudar} className={css.materia}>
                  <span className={css.glifo}>{m.glifo}</span>
                  {/* Nome e contagem empilhados. Lado a lado eles disputavam a
                      mesma linha e "Matemática" passava por cima de "645
                      questões" — o cartão tem 190px e os dois textos juntos
                      não cabem. */}
                  <span className={css.info}>
                    <span className={css.materiaNome}>{m.nome}</span>
                    <span className={css.materiaConta}>
                      {n > 0
                        ? `${n.toLocaleString("pt-BR")} ${n === 1 ? "questão" : "questões"}`
                        : "sem questões ainda"}
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* ---------- o que ainda falta ----------
            Fica na página, e não escondido, porque quem escolheu "Concursos
            públicos" precisa saber antes de investir tempo que não há questão
            de banca de concurso aqui. Descobrir isso depois de estudar é pior
            do que ler agora. */}
        {destino.lacuna && (
          <div className={`${css.bloco} ${css.lacuna}`}>
            <span className={css.rotulo}>
              <Icone nome="shield" tracoLargura={1.7} /> O que ainda não está aqui
            </span>
            <p className={css.texto}>{destino.lacuna}</p>

            {/* Dizer "não temos" e parar era um beco. As bancas publicam os
                próprios acervos de graça, então o bloco termina com o caminho
                para eles em vez de terminar na falta. */}
            {destino.fontes && (
              <div className={css.fontes}>
                {destino.fontes.map((f) => (
                  <a
                    key={f.url}
                    href={f.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={css.fonte}
                  >
                    <span className={css.fonteNome}>
                      {f.nome} <span className="arrow">↗</span>
                    </span>
                    <span className={css.fonteDetalhe}>{f.detalhe}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
