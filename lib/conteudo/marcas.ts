/**
 * Vestibulares e universidades MAPEADOS na base de cursos, mais o ENEM, que é
 * a única fonte de questões de terceiros no banco.
 *
 * A faixa não anuncia que existe questão de cada um destes — anuncia que o
 * processo seletivo ou a instituição está coberto em algum lugar do site. Cada
 * item abaixo precisa passar por um destes dois testes:
 *
 *   1. tem questão no banco (`origem`), ou
 *   2. aparece em `faculdades.ts`, como universidade ou forma de ingresso.
 *
 * Saíram daqui Cebraspe, Cesgranrio, EsPCEx, Escola Naval e ProUni: nenhum
 * passa nos dois testes. Saiu também "Redação nota 1000", que não é banca nem
 * instituição — é um resultado, e prometer resultado numa faixa de logotipos é
 * o oposto do que a seção "Honestidade de dados" do /sobre diz que o site faz.
 */
export const MARCAS: readonly string[] = [
  "ENEM",
  "Fuvest",
  "SiSU",
  "PAS · UnB",
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
  "ITA",
  "IME",
  "FGV",
] as const;
