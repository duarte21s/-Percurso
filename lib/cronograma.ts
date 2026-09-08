import { MATERIAS, MATERIAS_POR_ID } from "@/lib/conteudo/materias";
import type { Objetivo } from "@/lib/tipos";

/* =========================================================================
   Gerador de cronograma semanal.

   O que mudou em relação à primeira versão, e por quê:

   1. A revisão deixou de ser um rótulo. Antes o plano escrevia "Revisão
      espaçada" sem dizer o que revisar — enquanto a seção Método promete
      revisão em 1, 7 e 30 dias. Agora cada bloco de revisão nomeia a matéria
      e a distância ("Matemática · de ontem"), retomando o que foi estudado
      no dia anterior e no começo da semana.

   2. A prioridade passou a pesar de verdade. Antes a matéria escolhida
      entrava duas vezes numa fila circular, o que quase não alterava a conta
      quando havia muitos blocos. Agora cada matéria recebe uma cota
      proporcional ao peso, e a cota é o que determina quantas horas ela tem
      na semana.

   3. A redação parou de sumir. Ela estava fixada no sábado; quem estuda 3, 4
      ou 5 dias por semana não tem sábado no plano, e o bloco simplesmente não
      aparecia. Agora ela cai num dia que existe.

   4. O total do mês virou 4,33 semanas, e não 4. Um mês tem 30,4 dias em
      média — arredondar para 4 subestimava em quase 8%.
   ========================================================================= */

export const DIAS = [
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
  "Domingo",
] as const;

/** Espalha os dias de estudo quando são poucos, em vez de empilhar de segunda
 *  a quarta: 3 dias viram segunda, quarta e sexta. */
const ORDEM_ESTUDO = [0, 2, 4, 1, 3, 5, 6];

/** Ordem de peso das matérias por objetivo — quem vem antes recebe mais horas. */
const PESOS: Record<Objetivo, string[]> = {
  enem:       ["matematica", "portugues", "biologia", "historia", "quimica", "fisica", "filosofia", "ingles", "artes"],
  vestibular: ["matematica", "portugues", "fisica", "quimica", "biologia", "historia", "ingles", "filosofia", "artes"],
  concurso:   ["portugues", "matematica", "historia", "filosofia", "ingles"],
  militar:    ["matematica", "fisica", "quimica", "portugues", "ingles"],
  escola:     ["matematica", "portugues", "biologia", "historia", "quimica", "fisica", "ingles", "filosofia", "artes"],
  graduacao:  ["matematica", "portugues", "fisica", "filosofia", "ingles"],
};

/** Quantas semanas tem um mês, em média. 365,25 / 12 / 7. */
const SEMANAS_POR_MES = 4.348;

/* Os seis objetivos do tipo `Objetivo`, na ordem em que aparecem no formulário.
   "graduacao" faltava aqui, embora existisse no tipo e em PESOS — era um
   objetivo que só se alcançava pela página de trilha, que não existe mais.
   Sem esta linha, Cálculo I (a única matéria exclusiva de graduacao) ficaria
   invisível no cronograma, porque o seletor de matérias filtra pelo objetivo
   escolhido neste select. */
export const OBJETIVOS: { valor: Objetivo; rotulo: string }[] = [
  { valor: "enem",       rotulo: "ENEM" },
  { valor: "vestibular", rotulo: "Vestibular específico" },
  { valor: "concurso",   rotulo: "Concurso público" },
  { valor: "militar",    rotulo: "Carreira militar" },
  { valor: "escola",     rotulo: "Reforço escolar" },
  { valor: "graduacao",  rotulo: "Já na faculdade" },
];

export type TipoBloco = "materia" | "revisao" | "redacao" | "descanso";

export interface Bloco {
  tipo: TipoBloco;
  duracao: string;
  rotulo: string;
  /** O assunto dentro da matéria, quando a pessoa escolheu temas. */
  tema?: string;
  /** Só em revisão: de quanto tempo atrás é o conteúdo retomado. */
  distancia?: string;
}

/**
 * O que a pessoa escolheu estudar: matéria → temas.
 *
 * Lista de temas vazia significa a matéria inteira. Objeto vazio significa
 * nenhuma escolha, e aí o plano cai na lista padrão do objetivo.
 *
 * A escolha é EXCLUSIVA: marcar Biologia e História faz o plano ter só as
 * duas. Antes isso era "prioridade" e apenas aumentava o peso, então quem
 * queria só humanas recebia Matemática e Física do mesmo jeito — que é
 * exatamente o oposto de escolher.
 */
export type Selecao = Record<string, string[]>;

export interface DiaPlanejado {
  nome: string;
  blocos: Bloco[];
}

/** Quanto cada matéria recebe na semana — o que torna a escolha auditável. */
export interface FatiaMateria {
  id: string;
  nome: string;
  horas: number;
  /** Temas escolhidos dentro dela, para a pessoa conferir o recorte. */
  temas: string[];
}

export interface Cronograma {
  objetivo: Objetivo;
  rotuloObjetivo: string;
  horasSemana: number;
  horasMes: number;
  dias: DiaPlanejado[];
  distribuicao: FatiaMateria[];
  /** Horas da semana que são conteúdo novo, revisão e redação. */
  resumo: { materia: number; revisao: number; redacao: number };
}

export interface Entrada {
  objetivo: Objetivo;
  horas: number;
  dias: number;
  selecao: Selecao;
}

/** Uma coisa a estudar: a matéria e, quando houver, o assunto dentro dela. */
interface Unidade {
  materia: string;
  tema?: string;
}

const chaveUnidade = (u: Unidade) => `${u.materia}|${u.tema ?? ""}`;

function nomeDe(id: string): string {
  return MATERIAS_POR_ID.get(id)?.nome ?? id;
}

/**
 * Reparte `total` blocos entre as matérias, proporcionalmente ao peso.
 *
 * O peso decresce com a posição na lista do objetivo, e prioridade escolhida
 * pela pessoa vale o dobro. As sobras do arredondamento vão para quem tem
 * maior resto — método de maior resto, o mesmo usado para distribuir cadeiras
 * por proporção. Sem isso, arredondar para baixo perderia blocos e o plano
 * entregaria menos horas do que prometeu.
 */
function reparte(
  pesos: Map<string, number>,
  total: number
): Map<string, number> {
  const somaPesos = [...pesos.values()].reduce((a, b) => a + b, 0);
  const cota = new Map<string, number>();
  const restos: { id: string; resto: number }[] = [];

  if (somaPesos <= 0 || total <= 0) {
    for (const id of pesos.keys()) cota.set(id, 0);
    return cota;
  }

  for (const [id, p] of pesos) {
    const exato = (p / somaPesos) * total;
    const inteiro = Math.floor(exato);
    cota.set(id, inteiro);
    restos.push({ id, resto: exato - inteiro });
  }

  let faltam = total - [...cota.values()].reduce((a, b) => a + b, 0);
  restos.sort((a, b) => b.resto - a.resto);
  for (let i = 0; faltam > 0 && restos.length; i = (i + 1) % restos.length, faltam--) {
    cota.set(restos[i].id, (cota.get(restos[i].id) ?? 0) + 1);
  }

  return cota;
}

/**
 * Decide o que estudar e quanto de cada coisa.
 *
 * Com escolha explícita, as matérias marcadas dividem o tempo por igual — se
 * a pessoa marcou duas, cada uma fica com metade. Dentro da matéria, a divisão
 * entre os temas segue a incidência histórica: assunto que cai mais no exame
 * recebe mais tempo. Sem escolha nenhuma, cai na lista do objetivo, com peso
 * decrescente pela posição e sem detalhar tema.
 */
function montaUnidades(
  objetivo: Objetivo,
  selecao: Selecao,
  total: number
): { unidades: Unidade[]; cota: Map<string, number> } {
  const escolhidas = Object.keys(selecao);

  if (escolhidas.length === 0) {
    const base = PESOS[objetivo] ?? PESOS.enem;
    const pesos = new Map<string, number>();
    base.forEach((id, i) => pesos.set(chaveUnidade({ materia: id }), base.length - i));
    return {
      unidades: base.map((materia) => ({ materia })),
      cota: reparte(pesos, total),
    };
  }

  // Cada matéria escolhida leva a mesma fatia — escolher é dizer "quero isto".
  const porMateria = new Map<string, number>();
  escolhidas.forEach((id) => porMateria.set(id, 1));
  const fatia = reparte(porMateria, total);

  const unidades: Unidade[] = [];
  const cota = new Map<string, number>();

  for (const materia of escolhidas) {
    const temas = selecao[materia] ?? [];
    const blocosDaMateria = fatia.get(materia) ?? 0;

    if (temas.length === 0) {
      // Matéria inteira: uma unidade só, sem detalhar assunto.
      const u = { materia };
      unidades.push(u);
      cota.set(chaveUnidade(u), blocosDaMateria);
      continue;
    }

    /* Peso do tema é a incidência histórica. `|| 1` porque tema sem incidência
       registrada não pode virar peso zero e sumir do plano que a pessoa
       montou à mão. */
    const doTema = new Map<string, number>();
    const catalogo = MATERIAS_POR_ID.get(materia)?.topicos ?? [];
    for (const t of temas) {
      const inc = catalogo.find(([titulo]) => titulo === t)?.[1];
      doTema.set(chaveUnidade({ materia, tema: t }), inc || 1);
    }

    const cotaTema = reparte(doTema, blocosDaMateria);
    for (const t of temas) {
      const u = { materia, tema: t };
      unidades.push(u);
      cota.set(chaveUnidade(u), cotaTema.get(chaveUnidade(u)) ?? 0);
    }
  }

  return { unidades, cota };
}

/**
 * Espalha as cotas pelos dias da semana.
 *
 * Vai em rodadas — um bloco por dia, dando a volta — e, dentro da rodada,
 * escolhe para cada dia a matéria com mais blocos restantes que ainda não
 * apareceu naquele dia. As duas regras resolvem coisas diferentes: a rodada
 * evita empilhar tudo nos primeiros dias, e o desempate evita a mesma matéria
 * duas vezes no mesmo dia. O que interessa na revisão espaçada é o intervalo
 * entre contatos, e dois blocos colados não criam intervalo nenhum.
 *
 * Quando não há alternativa (uma matéria só, ou todas já usadas no dia),
 * repetir é melhor que deixar o bloco vazio.
 */
function espalha(cota: Map<string, number>, vagasPorDia: number[]): string[][] {
  const restante = new Map(cota);
  const doDia: string[][] = vagasPorDia.map(() => []);

  const totalBlocos = [...cota.values()].reduce((a, b) => a + b, 0);
  let colocados = 0;

  while (colocados < totalBlocos) {
    let avancou = false;

    for (let d = 0; d < vagasPorDia.length && colocados < totalBlocos; d++) {
      if (doDia[d].length >= vagasPorDia[d]) continue;

      const disponiveis = [...restante.entries()].filter(([, n]) => n > 0);
      if (disponiveis.length === 0) break;

      const inedita = disponiveis
        .filter(([id]) => !doDia[d].includes(id))
        .sort((a, b) => b[1] - a[1])[0];
      const anterior = doDia[d][doDia[d].length - 1];
      const naoColada = disponiveis
        .filter(([id]) => id !== anterior)
        .sort((a, b) => b[1] - a[1])[0];

      const escolhido = (inedita ?? naoColada ?? disponiveis[0])[0];

      doDia[d].push(escolhido);
      restante.set(escolhido, (restante.get(escolhido) ?? 0) - 1);
      colocados++;
      avancou = true;
    }

    if (!avancou) break; // todos os dias cheios
  }

  return doDia;
}

export function geraCronograma({
  objetivo,
  horas,
  dias,
  selecao,
}: Entrada): Cronograma {
  const indicesEstudo = ORDEM_ESTUDO.slice(0, dias).sort((a, b) => a - b);
  const totalBlocos = horas * dias;

  /* Quantos blocos da semana não são conteúdo novo.
     Revisão: um por dia de estudo a partir do segundo, e só quando o dia tem
     3h ou mais — abaixo disso ela comeria metade da sessão.
     Redação: quem vai prestar ENEM ou vestibular escreve uma por semana. */
  const querRedacao = objetivo === "enem" || objetivo === "vestibular";
  const blocosRedacao = querRedacao && totalBlocos >= 4 ? 1 : 0;
  const blocosRevisao = horas >= 3 ? Math.max(0, indicesEstudo.length - 1) : 0;
  const blocosMateria = Math.max(0, totalBlocos - blocosRedacao - blocosRevisao);

  const { unidades, cota } = montaUnidades(objetivo, selecao, blocosMateria);
  const porChave = new Map(unidades.map((u) => [chaveUnidade(u), u]));

  /* A redação vai no último dia de estudo da semana, não no sábado fixo: com
     3, 4 ou 5 dias o sábado não existe no plano e o bloco sumia. */
  const diaDaRedacao = indicesEstudo[indicesEstudo.length - 1];

  /* Quantos blocos de matéria cada dia comporta, depois de reservar revisão e
     redação. Calculado antes de distribuir porque a repartição é feita por
     rodadas entre os dias, e não preenchendo um dia de cada vez. */
  const vagasPorDia = indicesEstudo.map((di, ordem) => {
    const comRedacao = blocosRedacao > 0 && di === diaDaRedacao ? 1 : 0;
    const comRevisao = blocosRevisao > 0 && ordem > 0 ? 1 : 0;
    return Math.max(0, horas - comRedacao - comRevisao);
  });

  const doDia = espalha(cota, vagasPorDia);

  const estudadoPorDia = new Map<number, string[]>();
  indicesEstudo.forEach((di, ordem) => estudadoPorDia.set(di, doDia[ordem]));

  const planejados: DiaPlanejado[] = [];

  for (const [ordem, di] of indicesEstudo.entries()) {
    const blocos: Bloco[] = doDia[ordem].map((chave) => {
      const u = porChave.get(chave);
      return {
        tipo: "materia" as const,
        duracao: "1h",
        rotulo: nomeDe(u?.materia ?? chave),
        tema: u?.tema,
      };
    });

    /* A revisão retoma o dia de estudo anterior, e a distância é contada em
       dias de calendário — não rotulada por posição. Antes, com 3 dias por
       semana, a quarta dizia "há ~1 semana" ao revisar a segunda, que são
       dois dias. Rótulo que não bate com o intervalo real não serve para
       revisão espaçada, que é justamente sobre o intervalo. */
    if (blocosRevisao > 0 && ordem > 0) {
      const diAnterior = indicesEstudo[ordem - 1];
      const origem = estudadoPorDia.get(diAnterior) ?? [];
      // Roda o alvo entre o que foi visto naquele dia, para não repetir sempre.
      const chaveAlvo = origem[(ordem - 1) % Math.max(1, origem.length)];
      const alvo = chaveAlvo ? porChave.get(chaveAlvo) : undefined;
      const dist = di - diAnterior;

      blocos.push({
        tipo: "revisao",
        duracao: "1h",
        rotulo: alvo ? `Revisar ${nomeDe(alvo.materia)}` : "Revisão espaçada",
        tema: alvo?.tema,
        distancia: dist === 1 ? "de ontem" : `de ${dist} dias atrás`,
      });
    }

    if (blocosRedacao > 0 && di === diaDaRedacao) {
      blocos.push({ tipo: "redacao", duracao: "1h", rotulo: "Redação" });
    }

    planejados[di] = { nome: DIAS[di], blocos };
  }

  // Os dias que sobraram são descanso.
  for (let i = 0; i < DIAS.length; i++) {
    if (!planejados[i]) {
      planejados[i] = {
        nome: DIAS[i],
        blocos: [
          {
            tipo: "descanso",
            duracao: "",
            rotulo: "Descanso — o cérebro consolida agora",
          },
        ],
      };
    }
  }

  /* A distribuição é somada de volta por matéria: as unidades são por tema,
     mas o que a pessoa quer conferir é quanto tempo cada matéria levou. */
  const somaPorMateria = new Map<string, { horas: number; temas: string[] }>();
  for (const [chave, n] of cota) {
    if (n <= 0) continue;
    const u = porChave.get(chave);
    if (!u) continue;
    const atual = somaPorMateria.get(u.materia) ?? { horas: 0, temas: [] };
    atual.horas += n;
    if (u.tema) atual.temas.push(u.tema);
    somaPorMateria.set(u.materia, atual);
  }

  const distribuicao: FatiaMateria[] = [...somaPorMateria.entries()]
    .map(([id, { horas: h, temas }]) => ({
      id,
      nome: nomeDe(id),
      horas: h,
      temas,
    }))
    .sort((a, b) => b.horas - a.horas || a.nome.localeCompare(b.nome, "pt-BR"));

  const horasSemana = horas * dias;

  return {
    objetivo,
    rotuloObjetivo:
      OBJETIVOS.find((o) => o.valor === objetivo)?.rotulo ?? "ENEM",
    horasSemana,
    horasMes: Math.round(horasSemana * SEMANAS_POR_MES),
    dias: planejados,
    distribuicao,
    resumo: {
      materia: blocosMateria,
      revisao: blocosRevisao,
      redacao: blocosRedacao,
    },
  };
}
