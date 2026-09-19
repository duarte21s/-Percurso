/**
 * Instituições MAPEADAS na base de cursos, mais o ENEM e o SiSU, que são a
 * via de ingresso que este site prepara.
 *
 * A faixa não anuncia que existe questão de cada um destes — anuncia que a
 * instituição ou o processo está coberto em algum lugar do site. Cada item
 * abaixo precisa passar por um destes dois testes:
 *
 *   1. tem questão no banco (`origem`), ou
 *   2. aparece em `faculdades.ts`, como universidade ou forma de ingresso.
 *
 * Saíram daqui Cebraspe, Cesgranrio, EsPCEx, Escola Naval e ProUni: nenhum
 * passa nos dois testes. Saiu também "Redação nota 1000", que não é banca nem
 * instituição — é um resultado, e prometer resultado numa faixa de logotipos é
 * o oposto do que a seção "Honestidade de dados" do /sobre diz que o site faz.
 *
 * Saíram depois, quando o site passou a tratar só do ENEM, os processos
 * seletivos que competem com ele: Fuvest e PAS · UnB são vestibulares
 * próprios, ITA e IME entram por concurso de admissão militar, e FGV é
 * conhecida antes como banca de concurso do que como destino de quem faz o
 * ENEM — os cinco cursos dela na base entram por vestibular próprio. As
 * universidades continuam, porque universidade é destino, não prova — e a
 * maioria delas se alcança pela nota do ENEM via SiSU. Os cursos do ITA, do
 * IME e das universidades de vestibular próprio seguem listados na tabela de
 * /app/faculdades, com a via de ingresso verdadeira na coluna Ingresso e o
 * filtro oferecendo todas as vias, exatamente como sempre foi: a aba
 * Faculdades não foi tocada. O que saiu foi a vitrine do /sobre, não o dado.
 */
export const MARCAS: readonly string[] = [
  "ENEM",
  "SiSU",
  "USP",
  "Unicamp",
  "UERJ",
  "UnB",
  "UFRJ",
  "UFMG",
  "UFRGS",
  "UFPE",
  "UNESP",
  "UFSC",
  "UFBA",
] as const;
