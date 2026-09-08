/* As seis trilhas de objetivo. Base gerada do conteúdo autoral original
   (supabase/seed-data/conteudo.mjs).

   Os rótulos de `stat` foram corrigidos à mão: diziam "12 bancas" e "Editais
   recentes", inventário que o banco não tem. Cada trilha declara em
   destinos-trilha.ts o que existe e o que falta, e o cartão não pode
   prometer o contrário da página para onde ele leva.

   `desc` e `tags` foram corrigidos depois, pelo mesmo motivo e com um dado
   medido: das 9.548 questões do banco, 2.749 são das provas do ENEM e 6.799
   são autorais em nível de ensino médio. Uma consulta por banca no campo
   `fonte` devolveu zero para Unicamp, UERJ, Cebraspe, FGV, Cesgranrio, ITA,
   IME, EsPCEx e Escola Naval. Ainda assim os cartões traziam essas siglas
   como tag e a descrição prometia "a lógica de prova de cada instituição".

   A regra aqui: nenhuma trilha nomeia banca cujo conteúdo o site não tenha.
   Onde a pessoa acha a prova daquela banca continua dito — só que no bloco
   de lacuna, que aponta para o acervo oficial, e não como se fosse acervo
   nosso. Para conferir se isso continua verdade:

     select fonte, count(*) from questoes group by fonte order by 2 desc; */

import type { Trilha } from "@/lib/tipos";

export const TRILHAS: readonly Trilha[] = [
  {
    "id": "enem",
    "titulo": "ENEM",
    "desc": "As quatro áreas mais redação, com foco em interpretação e nas competências que a banca realmente cobra.",
    "tags": [
      "4 áreas",
      "Redação nota 1000",
      "TRI explicada"
    ],
    "destaque": "Mais procurado",
    "ico": "star",
    "stat": "15 provas reais"
  },
  {
    "id": "vestibular",
    "titulo": "Vestibulares",
    "desc": "O conteúdo de ensino médio que as bancas próprias cobram, treinado assunto por assunto — e as provas do ENEM como simulado cronometrado.",
    "tags": [
      "Ensino médio",
      "Provas do ENEM",
      "Por conteúdo"
    ],
    "ico": "book",
    "stat": "Base do ENEM"
  },
  {
    "id": "concurso",
    "titulo": "Concursos públicos",
    "desc": "Português e raciocínio com matemática, em nível de ensino médio — a base que quase todo edital cobra. Direito, informática e legislação não estão aqui.",
    "tags": [
      "Português",
      "Matemática",
      "Só a base"
    ],
    "ico": "shield",
    "stat": "Português e matemática"
  },
  {
    "id": "militar",
    "titulo": "Carreiras militares",
    "desc": "Matemática, física e química do ensino médio para firmar a base. As provas dessas escolas exigem bem mais que isso e não estão no banco.",
    "tags": [
      "Exatas",
      "Ensino médio",
      "Só a base"
    ],
    "ico": "compass",
    "stat": "Exatas do ensino médio"
  },
  {
    "id": "escola",
    "titulo": "Reforço escolar",
    "desc": "As nove matérias do ensino médio, 15 conteúdos cada, com gabarito comentado — dá para treinar exatamente o assunto que a escola está passando agora.",
    "tags": [
      "Ensino médio",
      "135 conteúdos",
      "Gabarito comentado"
    ],
    "ico": "layers",
    "stat": "9 matérias"
  },
  {
    "id": "graduacao",
    "titulo": "Já na faculdade",
    "desc": "Revisão de matemática, física e português do ensino médio, para fechar buracos de base antes do ciclo básico.",
    "tags": [
      "Matemática",
      "Física",
      "Português"
    ],
    "ico": "cap",
    "stat": "Revisão de base"
  }
] as const;
