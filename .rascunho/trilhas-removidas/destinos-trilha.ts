import type { Objetivo } from "@/lib/tipos";

/**
 * O que cada trilha realmente encontra no site hoje.
 *
 * Este arquivo existe porque os seis cartões de trilha prometiam coisas que o
 * projeto não tem. O banco é formado pelas 15 provas do ENEM mais o acervo
 * autoral — não há questão da Fuvest, nem de Cebraspe, nem de cálculo do
 * ciclo básico. Mandar quem clicou em "Concursos públicos" para uma página que
 * finge ter edital seria pior que o botão morto que estava lá.
 *
 * Então cada trilha declara três coisas: o que está pronto, o que ainda não
 * está, e para onde levar a pessoa enquanto isso.
 */
/** Acervo oficial e gratuito de uma banca, publicado por ela mesma. */
export interface FonteOficial {
  nome: string;
  url: string;
  detalhe: string;
}

export interface DestinoTrilha {
  /* `foco` saiu daqui. Era a lista de matérias da trilha, escrita à mão, e
     duplicava o que as próprias matérias já declaram em `objetivos`. Duas
     listas para o mesmo fato divergem: criar uma matéria de concurso e
     esquecer de acrescentá-la aqui a deixava invisível justamente na trilha
     que a motivou. Agora a página deriva de materiasDoObjetivo(). */
  /** Tem prova real e redação do ENEM para oferecer? */
  temEnem: boolean;
  /** O que o banco ainda não cobre. Vazio quando cobre tudo o que promete. */
  lacuna?: string;
  /**
   * Onde a pessoa acha, de graça, o que falta aqui.
   *
   * Existe porque dizer "não temos" e parar era um beco. As bancas publicam os
   * próprios acervos abertos — o que falta ao site é a importação, não a
   * permissão. Cada URL foi verificada respondendo 200 antes de entrar aqui.
   */
  fontes?: readonly FonteOficial[];
  /** Frase curta sobre o que está pronto agora. */
  pronto: string;
}

export const DESTINOS: Record<Objetivo, DestinoTrilha> = {
  enem: {
    temEnem: true,
    pronto:
      "É a trilha mais completa do site: as provas aplicadas na íntegra, com cronômetro e correção por área, os temas de redação reais e o banco inteiro organizado por conteúdo.",
  },
  vestibular: {
    temEnem: true,
    lacuna:
      "As provas de banca própria ainda não estão importadas aqui — o ENEM tem uma API pública que converteu os PDFs do INEP em dados, e Fuvest, Unicamp e UERJ não têm equivalente. Mas as três publicam o acervo completo de graça, no próprio site:",
    fontes: [
      {
        nome: "Fuvest · USP",
        url: "https://www.fuvest.br/acervo-vestibular/",
        detalhe: "Provas e gabaritos de 1977 a 2026",
      },
      {
        nome: "Comvest · Unicamp",
        url: "https://www.comvest.unicamp.br/vestibulares-anteriores/",
        detalhe: "Vestibulares de 1987 a 2026, com provas comentadas",
      },
      {
        nome: "UERJ",
        url: "https://www.vestibular.uerj.br/?page_id=7069",
        detalhe: "Exames de qualificação e gabaritos anteriores",
      },
    ],
    pronto:
      "Dá para treinar conteúdo a conteúdo e usar as provas do ENEM como simulado cronometrado.",
  },
  concurso: {
    temEnem: false,
    lacuna:
      "Não há questões de Cebraspe, FGV ou Cesgranrio no banco, nem os assuntos que só caem em concurso — direito, informática, legislação. O que serve aqui é a base: português, raciocínio com matemática e atualidades por história. As provas aplicadas ficam nos arquivos das próprias bancas:",
    fontes: [
      {
        nome: "Cebraspe",
        url: "https://www.cebraspe.org.br/concursos/encerrados",
        detalhe: "Provas e gabaritos dos concursos já encerrados",
      },
    ],
    pronto:
      "Português e matemática têm questões separadas por conteúdo, que é onde a maioria dos editais concentra a prova objetiva.",
  },
  militar: {
    temEnem: false,
    lacuna:
      "As provas do ITA, do IME e da EsPCEx não estão no banco, e o nível de exigência delas em exatas é bem maior que o do ENEM. Use o que há aqui como base, não como simulado dessas bancas — e pegue as provas na fonte:",
    fontes: [
      {
        nome: "ITA",
        url: "https://www.vestibular.ita.br/",
        detalhe: "Vestibular do Instituto Tecnológico de Aeronáutica",
      },
      {
        nome: "IME",
        url: "https://www.ime.eb.mil.br/vestibular-e-concursos/cfg-ensino-medio/provas-anteriores-cfg",
        detalhe: "Provas anteriores do concurso de admissão",
      },
      {
        nome: "EsPCEx",
        url: "https://www.espcex.eb.mil.br/",
        detalhe: "Escola Preparatória de Cadetes do Exército",
      },
    ],
    pronto:
      "Matemática, física e química estão organizadas por conteúdo, com o que o banco tem de exatas.",
  },
  escola: {
    temEnem: false,
    /* O cartão dizia "ensino fundamental e médio". As nove matérias de
       lib/conteudo/materias.ts são todas de ensino médio — não há conteúdo de
       6º a 9º ano em lugar nenhum do banco. Quem está no fundamental
       precisa saber disso antes de tentar usar o site para a prova de amanhã. */
    lacuna:
      "O conteúdo aqui é de ensino médio, do 1º ao 3º ano. Não há material de ensino fundamental — se você está do 6º ao 9º ano, boa parte do que vai aparecer está adiante do que a sua escola está passando. Faltam também Geografia e Sociologia, que não estão entre as nove matérias do banco.",
    pronto:
      "As nove matérias do ensino médio, cada uma com 15 conteúdos, e o simulado montado no assunto que você escolher — dá para treinar exatamente o que a escola está passando agora.",
  },
  graduacao: {
    temEnem: false,
    lacuna:
      "Cálculo, física geral, estatística superior e normas ABNT não estão no banco. O conteúdo daqui é de ensino médio, e serve para fechar buracos de base — que costuma ser o motivo real de travar em Cálculo I.",
    pronto:
      "Matemática, física e português do ensino médio, por conteúdo, para revisar a base antes do ciclo básico.",
  },
};
