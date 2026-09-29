/* Rascunho — Raciocínio lógico / Problemas de calendário e de relógio.

   Calendário: a conferência usa o calendário real (Date, em UTC) — dia da
   semana, anos bissextos, soma de dias a uma data. Quando o enunciado é
   genérico (“um ano que começa numa quinta”), a conferência procura TODOS
   os anos reais nessa condição, entre 1901 e 2099, e exige a mesma resposta
   em todos. Relógio: os ponteiros são simulados em passos pequenos, e os
   horários, somados em minutos. */

import { unicoV, intervalo, fmt } from "./_contagem.mjs";

export const materia = "raciocinio-logico";
export const tema = "Problemas de calendário e de relógio";
export const arquivo = "raciocinio-logico__problemas-de-calendario-e-de-relogio";

const SEMANA = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
const MESES = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
const D = (a, m, d) => new Date(Date.UTC(a, m - 1, d));
const semana = (dt) => SEMANA[dt.getUTCDay()];
const soma = (dt, dias) => new Date(dt.getTime() + dias * 86400000);
const entre = (a, b) => Math.round((b.getTime() - a.getTime()) / 86400000);
const bissexto = (a) => D(a, 2, 29).getUTCMonth() === 1;
const ANOS = intervalo(1901, 2099);
const mesmo = (lista) => { if (lista.length === 0) throw new Error("nenhum caso"); if (new Set(lista).size !== 1) throw new Error(`respostas diferentes: ${[...new Set(lista)]}`); return lista[0]; };
const dataTxt = (dt) => `${dt.getUTCDate()} de ${MESES[dt.getUTCMonth()]}`;
const maiuscula = (s) => s[0].toUpperCase() + s.slice(1);
/* Ângulo menor entre os ponteiros, t minutos depois das 12h. */
const angulo = (t) => { const h = (t % 720) * 0.5, m = (t % 60) * 6; const a = Math.abs(h - m) % 360; return Math.min(a, 360 - a); };
const hm = (min) => { const t = ((min % 1440) + 1440) % 1440; return `${Math.floor(t / 60)}h${String(t % 60).padStart(2, "0")}`; };

export const questoes = [
  /* ---------------- dias da semana ---------------- */
  (() => {
    const alt = ["Quinta-feira", "Quarta-feira", "Sexta-feira", "Segunda-feira", "Domingo"];
    return {
      d: "facil",
      e: "Se hoje é segunda-feira, que dia da semana será daqui a 10 dias?",
      o: alt,
      x: "A semana se repete a cada 7 dias. Daqui a 7 dias será de novo segunda-feira; faltam 10 − 7 = 3 dias: terça, quarta, quinta. Em conta: 10 dividido por 7 deixa resto 3, e três dias depois de segunda é quinta-feira.\n\nQuarta-feira avança só 2 dias depois das 7, e sexta-feira avança 4 — erro de contagem por um dia. Segunda-feira supõe que 10 dias sejam semanas completas. E domingo recua um dia em vez de avançar.",
      v: { i: () => { const hoje = mesmo(ANOS.flatMap((a) => [D(a, 6, 1)]).filter((dt) => semana(dt) === "segunda-feira").map((dt) => semana(soma(dt, 10)))); return unicoV(alt.map((x) => x.toLowerCase() === hoje)); } },
    };
  })(),
  (() => {
    const alt = ["Sexta-feira", "Domingo", "Quinta-feira", "Sábado", "Segunda-feira"];
    return {
      d: "facil",
      e: "Se hoje é sábado, em que dia da semana caiu o dia de 15 dias atrás?",
      o: alt,
      x: "Voltando 14 dias (duas semanas completas), cai-se de novo num sábado. Falta voltar 1 dia: sexta-feira. Em conta: 15 dividido por 7 deixa resto 1, e um dia antes de sábado é sexta-feira.\n\nDomingo avança um dia em vez de recuar. Quinta-feira recua dois dias além das semanas completas. Sábado supõe que 15 dias sejam semanas completas. E segunda-feira avança dois dias, trocando o sentido e a conta.",
      v: { i: () => { const r = mesmo(ANOS.map((a) => D(a, 7, 10)).filter((dt) => semana(dt) === "sábado").map((dt) => semana(soma(dt, -15)))); return unicoV(alt.map((x) => x.toLowerCase() === r)); } },
    };
  })(),
  (() => {
    const alt = ["Quinta-feira", "Terça-feira", "Quarta-feira", "Sexta-feira", "Sábado"];
    return {
      d: "media",
      e: "Que dia da semana será 100 dias depois de uma terça-feira?",
      o: alt,
      x: "100 dias equivalem a 14 semanas completas (98 dias) e mais 2 dias. As 14 semanas trazem de volta a terça-feira, e os 2 dias restantes levam a quinta-feira. O que importa é o resto da divisão de 100 por 7, que é 2.\n\nTerça-feira ignora os 2 dias que sobram. Quarta e sexta erram o resto da divisão por um dia. E sábado usa resto 4, como se 100 dias fossem 96 mais 4.",
      v: { i: () => { const r = mesmo(ANOS.map((a) => D(a, 1, 10)).filter((dt) => semana(dt) === "terça-feira").map((dt) => semana(soma(dt, 100)))); return unicoV(alt.map((x) => x.toLowerCase() === r)); } },
    };
  })(),
  (() => {
    const alt = ["Quarta-feira", "Domingo", "Terça-feira", "Quinta-feira", "Segunda-feira"];
    return {
      d: "media",
      e: "Em certo ano, o dia 1º de março caiu num domingo. Em que dia da semana caiu o dia 1º de abril do mesmo ano?",
      o: alt,
      x: "Março tem 31 dias, então de 1º de março a 1º de abril passam 31 dias. 31 dividido por 7 dá 4 semanas e resto 3: três dias depois de domingo é quarta-feira.\n\nDomingo supõe que um mês tenha semanas completas. Terça-feira usa resto 2, como se março tivesse 30 dias. Quinta-feira usa resto 4. E segunda-feira avança um dia só, como se o mês tivesse 29 dias.",
      v: { i: () => { const r = mesmo(ANOS.map((a) => D(a, 3, 1)).filter((dt) => semana(dt) === "domingo").map((dt) => semana(soma(dt, 31)))); return unicoV(alt.map((x) => x.toLowerCase() === r)); } },
    };
  })(),
  (() => {
    const alt = ["Sexta-feira", "Quinta-feira", "Sábado", "Domingo", "Segunda-feira"];
    return {
      d: "media",
      e: "Se o dia 10 de maio de certo ano caiu numa sexta-feira, em que dia da semana caiu o dia 31 de maio do mesmo ano?",
      o: alt,
      x: "Do dia 10 ao dia 31 passam 31 − 10 = 21 dias, exatamente 3 semanas. Então o dia 31 cai no mesmo dia da semana que o dia 10: sexta-feira.\n\nQuinta-feira e sábado erram a contagem por um dia — o primeiro, por contar 20 dias; o segundo, por contar 22. Domingo e segunda-feira supõem restos de 2 ou 3 dias. O ponto de atenção é contar a diferença entre os dias (31 − 10), e não o número de dias do intervalo incluindo os dois extremos.",
      v: { i: () => { const r = mesmo(ANOS.map((a) => D(a, 5, 10)).filter((dt) => semana(dt) === "sexta-feira").map((dt) => semana(D(dt.getUTCFullYear(), 5, 31)))); return unicoV(alt.map((x) => x.toLowerCase() === r)); } },
    };
  })(),
  (() => {
    const alt = [366, 365, 364, 367, 360];
    return {
      d: "media",
      e: "Quantos dias tem o ano de 2028, de 1º de janeiro a 31 de dezembro, contando os dois dias?",
      o: alt.map(fmt),
      x: "2028 é divisível por 4 e não é um ano terminado em 00, então é bissexto: fevereiro tem 29 dias, e o ano tem 366 dias.\n\n365 é o número de dias de um ano comum. 364 esquece um dos extremos da contagem, e 367 soma um dia a mais. E 360 é o “ano comercial” usado em algumas contas financeiras, e não o ano do calendário. A regra dos bissextos: divisível por 4, exceto os terminados em 00 que não são divisíveis por 400.",
      v: { n: () => entre(D(2028, 1, 1), D(2028, 12, 31)) + 1, o: alt },
    };
  })(),
  (() => {
    const alt = ["2000", "1900", "2100", "2023", "2026"];
    return {
      d: "media",
      e: "De acordo com a regra do calendário gregoriano, qual dos anos abaixo é bissexto?",
      o: alt,
      x: "A regra: um ano é bissexto se for divisível por 4, exceto os anos terminados em 00, que só são bissextos se também forem divisíveis por 400. 2000 termina em 00 e é divisível por 400: é bissexto.\n\n1900 e 2100 são divisíveis por 4 e terminam em 00, mas não são divisíveis por 400: não são bissextos — é justamente a exceção da regra. 2023 e 2026 não são divisíveis por 4. A exceção existe para compensar o fato de o ano solar durar um pouco menos que 365 dias e 6 horas.",
      v: { i: () => unicoV(alt.map((a) => bissexto(Number(a)))) },
    };
  })(),
  (() => {
    const alt = ["Quinta-feira", "Sexta-feira", "Quarta-feira", "Sábado", "Domingo"];
    return {
      d: "media",
      e: "Num ano que não é bissexto, o dia 1º de janeiro caiu numa quinta-feira. Em que dia da semana caiu o dia 31 de dezembro desse ano?",
      o: alt,
      x: "Um ano comum tem 365 dias; o dia 31 de dezembro está 364 dias depois de 1º de janeiro. Como 364 = 52 × 7, são semanas completas: 31 de dezembro cai no mesmo dia da semana que 1º de janeiro, quinta-feira.\n\nSexta-feira conta 365 dias de distância em vez de 364 — esse seria o dia de 1º de janeiro do ano seguinte. Quarta-feira recua um dia. Sábado avança 2 dias, como se o ano tivesse 366 dias e se estivesse contando até o 1º de janeiro seguinte. E domingo avança 3 dias, sem base na contagem.",
      v: { i: () => { const r = mesmo(ANOS.filter((a) => !bissexto(a) && semana(D(a, 1, 1)) === "quinta-feira").map((a) => semana(D(a, 12, 31)))); return unicoV(alt.map((x) => x.toLowerCase() === r)); } },
    };
  })(),
  (() => {
    const alt = ["Terça-feira", "Segunda-feira", "Quarta-feira", "Domingo", "Sábado"];
    return {
      d: "facil",
      e: "Um ano que não é bissexto começou numa segunda-feira. Em que dia da semana começa o ano seguinte?",
      o: alt,
      x: "Um ano comum tem 365 dias = 52 semanas e 1 dia. Do 1º de janeiro de um ano ao 1º de janeiro do seguinte passam 365 dias, e o dia da semana avança 1: de segunda para terça-feira.\n\nSegunda-feira supõe que o ano tenha semanas completas. Quarta-feira avança 2 dias, o que só aconteceria se o ano fosse bissexto. Domingo recua um dia. E sábado recua dois.",
      v: { i: () => { const r = mesmo(ANOS.filter((a) => !bissexto(a) && semana(D(a, 1, 1)) === "segunda-feira").map((a) => semana(D(a + 1, 1, 1)))); return unicoV(alt.map((x) => x.toLowerCase() === r)); } },
    };
  })(),
  (() => {
    const alt = ["Quinta-feira", "Quarta-feira", "Domingo", "Sexta-feira", "Segunda-feira"];
    return {
      d: "dificil",
      e: "O Ano-Novo de 2040 — um ano bissexto — cai num domingo. Qual será o dia da semana do 1º de março de 2040?",
      o: alt,
      x: "Do 1º de janeiro ao 1º de março passam os 31 dias de janeiro e os 29 de fevereiro — o ano é bissexto: 60 dias. Como 60 = 8 × 7 + 4, o dia da semana avança 4: de domingo para quinta-feira.\n\nQuarta-feira usa fevereiro com 28 dias (59 dias, resto 3), como num ano comum. Domingo supõe que os dois meses somem semanas completas. Sexta-feira avança 5 dias, contando um dia a mais. E segunda-feira conta só os 29 dias de fevereiro (resto 1), esquecendo janeiro.",
      v: { i: () => { if (!bissexto(2040) || semana(D(2040, 1, 1)) !== "domingo") throw new Error("2040"); const r = mesmo(ANOS.filter((a) => bissexto(a) && semana(D(a, 1, 1)) === "domingo").map((a) => semana(D(a, 3, 1)))); if (r !== semana(D(2040, 3, 1))) throw new Error("2040 × genérico"); return unicoV(alt.map((x) => x.toLowerCase() === r)); } },
    };
  })(),
  (() => {
    const alt = [56, 55, 57, 86, 26];
    return {
      d: "media",
      e: "Quantos dias se passam de 15 de março a 10 de maio do mesmo ano, sem contar o dia 15 de março e contando o dia 10 de maio?",
      o: alt.map(fmt),
      x: "Contando por mês: de 16 a 31 de março são 16 dias; abril inteiro, 30; e de 1º a 10 de maio, 10. Total: 16 + 30 + 10 = 56 dias. Os meses de março e abril têm o mesmo tamanho em todos os anos, então a resposta não depende do ano.\n\n55 esquece o dia 10 de maio, e 57 conta também o dia 15 de março, contrariando o enunciado. 86 soma um mês a mais. E 26 esquece o mês de abril inteiro, somando só o resto de março e os dias de maio.",
      v: { n: () => mesmo(ANOS.map((a) => entre(D(a, 3, 15), D(a, 5, 10)))), o: alt },
    };
  })(),
  (() => {
    const alt = ["Às 7h de quinta-feira", "Às 15h de quarta-feira", "Às 23h de quarta-feira", "Às 7h de quarta-feira", "Às 15h de quinta-feira"];
    return {
      d: "media",
      e: "Um remédio deve ser tomado de 8 em 8 horas, e a primeira dose foi às 7h de uma segunda-feira. Em que dia e horário deve ser tomada a 10ª dose?",
      o: alt,
      x: "Entre a 1ª e a 10ª dose há 9 intervalos de 8 horas: 9 × 8 = 72 horas, exatamente 3 dias. A 10ª dose cai às 7h, três dias depois da segunda-feira: quinta-feira.\n\nÀs 15h de quinta-feira conta 10 intervalos em vez de 9, e às 23h de quarta-feira conta 8. Às 7h de quarta-feira conta só 6 intervalos (48 horas). E às 15h de quarta-feira conta 7 intervalos (56 horas). Como na contagem de postes e vãos, n doses têm n − 1 intervalos entre si.",
      v: { i: () => { let t = 7 * 60; for (let dose = 2; dose <= 10; dose++) t += 8 * 60; const dia = ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira"][Math.floor(t / 1440)]; const txt = `Às ${Math.floor((t % 1440) / 60)}h de ${dia}`; return unicoV(alt.map((x) => x === txt)); } },
    };
  })(),
  (() => {
    const alt = ["7 de maio", "28 de maio", "16 de abril", "30 de abril", "26 de março"];
    return {
      d: "media",
      e: "Um encontro acontece a cada 3 semanas, e o primeiro foi na quarta-feira, 5 de março de 2025. Em que data acontece o quarto encontro?",
      o: alt,
      x: "Entre o 1º e o 4º encontro há 3 intervalos de 3 semanas: 9 semanas, ou 63 dias. Contando: o 2º encontro é em 26 de março (5 + 21), o 3º em 16 de abril (março tem 31 dias) e o 4º em 7 de maio (abril tem 30 dias).\n\n28 de maio conta 4 intervalos, e seria o 5º encontro. 16 de abril e 26 de março são o 3º e o 2º encontros. E 30 de abril soma só duas semanas ao terceiro encontro, em vez de três.",
      v: { i: () => { const r = dataTxt(soma(D(2025, 3, 5), 3 * 21)); if (semana(D(2025, 3, 5)) !== "quarta-feira") throw new Error("data"); return unicoV(alt.map((x) => x === r)); } },
    };
  })(),
  (() => {
    const alt = [3, 1, 2, 4, 12];
    return {
      d: "dificil",
      e: "Qual é o maior número de sextas-feiras que caem num dia 13 dentro de um mesmo ano?",
      o: alt.map(fmt),
      x: "O dia 13 de cada mês cai em dias da semana determinados pelo dia em que o ano começa e por ele ser ou não bissexto. Examinando os 14 tipos possíveis de calendário (7 dias de início, ano comum ou bissexto), o máximo de sextas-feiras 13 num ano é 3 — por exemplo, fevereiro, março e novembro de um ano comum que começa numa quinta-feira. E todo ano tem pelo menos uma.\n\n1 é o mínimo, não o máximo. 2 é o caso mais comum, mas há anos com 3. 4 nunca acontece. E 12 supõe que o dia 13 de todos os meses caia no mesmo dia da semana.",
      v: { n: () => Math.max(...ANOS.map((a) => intervalo(1, 12).filter((m) => semana(D(a, m, 13)) === "sexta-feira").length)), o: alt },
    };
  })(),
  (() => {
    const alt = [5, 4, 6, 3, 31];
    return {
      d: "media",
      e: "Um mês de 31 dias começa numa sexta-feira. Quantos sábados há nesse mês?",
      o: alt.map(fmt),
      x: "Se o dia 1º é sexta-feira, o primeiro sábado é o dia 2, e os seguintes são 9, 16, 23 e 30. São 5 sábados. Em geral, um mês de 31 dias tem 4 semanas completas (28 dias) e mais 3 dias; os três primeiros dias da semana do mês — aqui, sexta, sábado e domingo — aparecem 5 vezes.\n\n4 supõe só as semanas completas. 6 não cabe em 31 dias. 3 conta os dias que sobram das 4 semanas, e não os sábados. E 31 é o número de dias do mês.",
      v: { n: () => mesmo(ANOS.flatMap((a) => [1, 3, 5, 7, 8, 10, 12].map((m) => D(a, m, 1))).filter((dt) => semana(dt) === "sexta-feira").map((dt) => intervalo(0, 30).filter((k) => semana(soma(dt, k)) === "sábado").length)), o: alt },
    };
  })(),
  (() => {
    const alt = ["Quinta-feira", "Quarta-feira", "Sexta-feira", "Terça-feira", "Sábado"];
    return {
      d: "facil",
      e: "Um mês de 30 dias começa numa quarta-feira. Em que dia da semana cai o último dia desse mês?",
      o: alt,
      x: "O último dia, 30, está 29 dias depois do dia 1º. 29 = 4 × 7 + 1: quatro semanas completas e mais 1 dia. Então o dia 30 cai um dia depois de quarta-feira: quinta-feira. Conferindo pelas semanas: os dias 1, 8, 15, 22 e 29 são quartas, e o dia 30 é quinta.\n\nQuarta-feira supõe que o mês tenha semanas completas. Sexta-feira avança 2 dias, como num mês de 31 dias. Terça-feira recua. E sábado avança 3 dias.",
      v: { i: () => { const r = mesmo(ANOS.flatMap((a) => [4, 6, 9, 11].map((m) => D(a, m, 1))).filter((dt) => semana(dt) === "quarta-feira").map((dt) => semana(soma(dt, 29)))); return unicoV(alt.map((x) => x.toLowerCase() === r)); } },
    };
  })(),
  (() => {
    const alt = [60, 59, 61, 32, 90];
    return {
      d: "media",
      e: "Num ano que não é bissexto, qual é a posição do dia 1º de março no ano — isto é, ele é o dia número quanto, contando 1º de janeiro como dia 1?",
      o: alt.map(fmt),
      x: "Janeiro tem 31 dias e fevereiro, num ano comum, 28: juntos, 59 dias. O dia 1º de março é o dia seguinte, o 60º do ano.\n\n59 é o último dia de fevereiro. 61 seria a posição de 1º de março num ano bissexto, com fevereiro de 29 dias. 32 conta só janeiro. E 90 trata os meses como se todos tivessem 30 dias e soma um mês a mais. Contar posições é diferente de contar distâncias: 1º de março está 59 dias depois de 1º de janeiro, mas é o 60º dia, porque o próprio 1º de janeiro conta como dia 1.",
      v: { n: () => mesmo(ANOS.filter((a) => !bissexto(a)).map((a) => entre(D(a, 1, 1), D(a, 3, 1)) + 1)), o: alt },
    };
  })(),
  (() => {
    const alt = ["3 de abril de 2027", "4 de abril de 2027", "2 de abril de 2027", "1º de abril de 2027", "3 de março de 2027"];
    return {
      d: "media",
      e: "Um curso começa em 3 de fevereiro de 2027 e dura 60 dias corridos, contando o primeiro dia como o dia 1. Em que data é o último dia do curso?",
      o: alt,
      x: "O último dia é o 60º, ou seja, 59 dias depois de 3 de fevereiro. 2027 não é bissexto: fevereiro tem 28 dias, então de 3 a 28 de fevereiro são 26 dias do curso. Com março inteiro (31), chega-se a 57 dias; faltam 3, que levam a 3 de abril.\n\n4 de abril soma 60 dias à data de início, contando um dia a mais. 2 de abril trata fevereiro como se tivesse 29 dias. 1º de abril erra por dois dias. E 3 de março soma um mês em vez de 60 dias.",
      v: { i: () => { const fim = soma(D(2027, 2, 3), 59); const txt = `${fim.getUTCDate() === 1 ? "1º" : fim.getUTCDate()} de ${MESES[fim.getUTCMonth()]} de ${fim.getUTCFullYear()}`; return unicoV(alt.map((x) => x === txt)); } },
    };
  })(),
  (() => {
    const alt = ["14 semanas e 2 dias", "10 semanas", "14 semanas e 3 dias", "15 semanas", "13 semanas e 9 dias"];
    return {
      d: "facil",
      e: "Um prazo de 100 dias corresponde a quantas semanas completas e quantos dias?",
      o: alt,
      x: "Dividindo 100 por 7: 7 × 14 = 98, com resto 2. São 14 semanas completas e mais 2 dias.\n\n10 semanas divide por 10, como se a semana tivesse 10 dias. 14 semanas e 3 dias erra o resto. 15 semanas arredonda para cima, somando 5 dias que não existem (seriam 105 dias). E 13 semanas e 9 dias até soma 100, mas deixa um resto maior que uma semana — o resto precisa ser menor que 7.",
      v: { i: () => { const txt = `${Math.floor(100 / 7)} semanas e ${100 % 7} dias`; return unicoV(alt.map((x) => x === txt)); } },
    };
  })(),
  (() => {
    const alt = [4320, 72, 1440, 2160, 259200];
    return {
      d: "facil",
      e: "Um prazo de 3 dias corridos corresponde a quantos minutos no total?",
      o: alt.map(fmt),
      x: "Um dia tem 24 horas, e cada hora tem 60 minutos: 24 × 60 = 1.440 minutos por dia. Em 3 dias, 3 × 1.440 = 4.320 minutos.\n\n72 é o número de horas em 3 dias (3 × 24), sem converter para minutos. 1.440 é o número de minutos de um único dia. 2.160 considera dias de 12 horas, confundindo o dia com a volta do mostrador do relógio. E 259.200 é o número de segundos em 3 dias, uma conversão a mais.",
      v: { n: () => { let min = 0; for (let d = 0; d < 3; d++) for (let h = 0; h < 24; h++) min += 60; return min; }, o: alt },
    };
  })(),
  (() => {
    const alt = ["Quarta-feira", "Terça-feira", "Segunda-feira", "Quinta-feira", "Domingo"];
    return {
      d: "dificil",
      e: "O Natal de certo ano, 25 de dezembro, caiu numa segunda-feira, e o ano seguinte é bissexto. Em que dia da semana cai o Natal do ano seguinte?",
      o: alt,
      x: "Entre 25 de dezembro de um ano e 25 de dezembro do seguinte há um ano de datas, e o 29 de fevereiro do ano bissexto fica no meio. São 366 dias = 52 semanas e 2 dias: o dia da semana avança 2, de segunda para quarta-feira.\n\nTerça-feira avança só 1 dia, ignorando o 29 de fevereiro. Segunda-feira supõe semanas completas. Quinta-feira avança 3 dias. E domingo recua um dia.",
      v: { i: () => { const r = mesmo(ANOS.filter((a) => a < 2099 && bissexto(a + 1) && semana(D(a, 12, 25)) === "segunda-feira").map((a) => semana(D(a + 1, 12, 25)))); return unicoV(alt.map((x) => x.toLowerCase() === r)); } },
    };
  })(),
  (() => {
    const alt = [24, 25, 23, 20, 100];
    return {
      d: "media",
      e: "Quantos anos bissextos há de 2001 a 2100, incluindo esses dois anos?",
      o: alt.map(fmt),
      x: "Os anos divisíveis por 4 entre 2001 e 2100 são 2004, 2008, …, 2100: são 25. Mas 2100 termina em 00 e não é divisível por 400, então não é bissexto. Restam 24 anos bissextos.\n\n25 esquece a exceção dos anos terminados em 00. 23 exclui também algum ano que é bissexto. 20 divide 100 anos por 5. E 100 conta todos os anos do intervalo. Conferindo pela divisão: de 2004 a 2100, de 4 em 4, são (2100 − 2004) ÷ 4 + 1 = 25 anos; tirando 2100, ficam 24.",
      v: { n: () => intervalo(2001, 2100).filter(bissexto).length, o: alt },
    };
  })(),
  (() => {
    const alt = ["3 de março de 2027", "2 de março de 2027", "31 de fevereiro de 2027", "1º de março de 2027", "4 de março de 2027"];
    return {
      d: "media",
      e: "Hoje é 28 de fevereiro de 2027. Que data será daqui a 3 dias?",
      o: alt,
      x: "2027 não é bissexto (não é divisível por 4), então fevereiro termina no dia 28. Os próximos três dias são 1º, 2 e 3 de março: daqui a 3 dias será 3 de março de 2027.\n\n2 de março considera fevereiro com 29 dias, como num ano bissexto. 31 de fevereiro não existe. 1º de março avança um dia só. E 4 de março avança quatro dias. Para somar dias perto do fim de um mês, o tamanho do mês — e, em fevereiro, o ano — decide a resposta.",
      v: { i: () => { const r = soma(D(2027, 2, 28), 3); const txt = `${r.getUTCDate() === 1 ? "1º" : r.getUTCDate()} de ${MESES[r.getUTCMonth()]} de ${r.getUTCFullYear()}`; return unicoV(alt.map((x) => x === txt)); } },
    };
  })(),
  (() => {
    const alt = [6, 7, 28, 5, 24];
    return {
      d: "dificil",
      e: "Uma pessoa nasceu em 29 de fevereiro de 2000. Até 28 de fevereiro de 2028, inclusive, quantas vezes ela pôde comemorar o aniversário na data exata de nascimento (sem contar o dia do nascimento)?",
      o: alt.map(fmt),
      x: "O dia 29 de fevereiro só existe nos anos bissextos. Depois de 2000, até 28 de fevereiro de 2028, os anos bissextos são 2004, 2008, 2012, 2016, 2020 e 2024: 6 aniversários na data exata. O de 2028 ainda não chegou, porque cai no dia seguinte ao limite.\n\n7 inclui 2028, que fica fora do prazo. 28 conta todos os anos desde o nascimento. 5 esquece um dos bissextos. E 24 é a idade da pessoa em 2024, não o número de aniversários na data exata.",
      v: { n: () => intervalo(2001, 2028).filter((a) => bissexto(a) && D(a, 2, 29) <= D(2028, 2, 28)).length, o: alt },
    };
  })(),
  (() => {
    const alt = ["Quarta-feira", "Sexta-feira", "Segunda-feira", "Quinta-feira", "Terça-feira"];
    return {
      d: "media",
      e: "Se hoje é quarta-feira, que dia da semana é o anteontem do depois de amanhã?",
      o: alt,
      x: "Resolve-se de dentro para fora. Depois de amanhã é sexta-feira (dois dias depois de quarta). O anteontem de sexta-feira é dois dias antes dela: quarta-feira. Avançar dois dias e depois recuar dois volta ao ponto de partida — hoje.\n\nSexta-feira é o depois de amanhã, sem aplicar o anteontem. Segunda-feira é o anteontem de hoje. Quinta-feira e terça-feira erram a contagem por um dia em algum dos passos.",
      v: { i: () => { const hoje = 3; const r = SEMANA[(hoje + 2 - 2 + 7) % 7]; return unicoV(alt.map((x) => x.toLowerCase() === r)); } },
    };
  })(),
  (() => {
    const alt = [16, 12, 14, 17, 18];
    return {
      d: "media",
      e: "Um prazo de 12 dias úteis — de segunda a sexta-feira, sem feriados no período — começa numa quarta-feira, que conta como o 1º dia do prazo. Quantos dias corridos, contando o primeiro e o último, esse prazo ocupa no calendário?",
      o: alt.map((x) => `${x} dias`),
      x: "Contando só os dias úteis: quarta (1º), quinta (2º) e sexta (3º); depois do fim de semana, de segunda a sexta (4º ao 8º); depois de outro fim de semana, segunda (9º), terça (10º), quarta (11º) e quinta (12º). O prazo vai da quarta-feira da primeira semana à quinta-feira da terceira: 5 + 7 + 4 = 16 dias corridos, com dois fins de semana no meio.\n\n12 trata dias úteis como corridos. 14 inclui só um fim de semana. 17 aplica a proporção de 7 dias corridos para 5 úteis (12 × 7 ÷ 5 = 16,8) e arredonda, sem olhar o calendário. E 18 inclui três fins de semana, mas o prazo acaba antes do terceiro.",
      v: { n: () => { let dia = 3, uteis = 0, corridos = 0; while (uteis < 12) { corridos++; if (dia >= 1 && dia <= 5) uteis++; dia = (dia + 1) % 7; } return corridos; }, o: alt },
    };
  })(),
  (() => {
    const alt = ["12 de outubro", "5 de outubro", "13 de outubro", "8 de outubro", "14 de outubro"];
    return {
      d: "media",
      e: "Um evento acontece sempre na segunda segunda-feira de outubro. Em 2026, o dia 1º de outubro cai numa quinta-feira. Em que data acontece o evento em 2026?",
      o: alt,
      x: "Se 1º de outubro é quinta-feira, a primeira segunda-feira do mês é o dia 5 (sexta 2, sábado 3, domingo 4, segunda 5). A segunda segunda-feira vem uma semana depois: dia 12 de outubro.\n\n5 de outubro é a primeira segunda-feira, não a segunda. 13 e 14 de outubro erram a contagem por um ou dois dias. E 8 de outubro soma 7 dias ao dia 1º, como se o mês começasse numa segunda-feira.",
      v: { i: () => { if (semana(D(2026, 10, 1)) !== "quinta-feira") throw new Error("1º de outubro"); const segundas = intervalo(1, 31).filter((d) => semana(D(2026, 10, d)) === "segunda-feira"); return unicoV(alt.map((x) => x === `${segundas[1]} de outubro`)); } },
    };
  })(),

  /* ---------------- relógio ---------------- */
  (() => {
    const alt = [90, 180, 45, 120, 60];
    return {
      d: "facil",
      e: "Qual é a medida do menor ângulo formado pelos ponteiros de um relógio às 3 horas em ponto?",
      o: alt.map((x) => `${x}°`),
      x: "O mostrador tem 12 horas em 360°, então cada hora corresponde a 30°. Às 3 horas em ponto, o ponteiro dos minutos está no 12 e o das horas está exatamente no 3: são 3 espaços de hora, 3 × 30° = 90°.\n\n180° é o ângulo às 6 horas. 45° usa 15° por hora. 120° corresponde a 4 espaços de hora, e 60°, a 2. A chave é que cada número do relógio está 30° do seguinte.",
      v: { n: () => angulo(3 * 60), o: alt },
    };
  })(),
  (() => {
    const alt = [75, 90, 60, 105, 180];
    return {
      d: "media",
      e: "Às 3h30, o ponteiro dos minutos aponta exatamente para o 6. Quantos graus mede, nesse instante, o menor ângulo entre ele e o ponteiro das horas?",
      o: alt.map((x) => `${x}°`),
      x: "O ponteiro dos minutos, no 30, está a 180° do 12. O ponteiro das horas não fica parado no 3: em 30 minutos ele anda meia hora, ou 15°, ficando a 90° + 15° = 105° do 12. O ângulo entre os dois é 180° − 105° = 75°.\n\n90° ignora o movimento do ponteiro das horas e mede do 3 ao 6. 60° erra o sentido desse movimento. 105° é a posição do ponteiro das horas, não o ângulo. E 180° é a posição do ponteiro dos minutos.",
      v: { n: () => angulo(3 * 60 + 30), o: alt },
    };
  })(),
  (() => {
    const alt = ["7h40", "8h40", "8h20", "7h20", "4h20"];
    return {
      d: "media",
      e: "Um relógio de ponteiros, sem números no mostrador, é visto refletido num espelho, e a imagem parece marcar 4h20. Que horário o relógio marca de verdade?",
      o: alt,
      x: "No espelho, o mostrador aparece invertido da esquerda para a direita: cada ponteiro vai para a posição simétrica em relação à linha que liga o 12 ao 6. Por isso, a hora real e a hora aparente somam 12 horas: 12h00 − 4h20 = 7h40. Conferindo: às 7h40, o ponteiro dos minutos está no 8 e o das horas entre o 7 e o 8; refletidos, vão para o 4 e para entre o 4 e o 5, que é a imagem de 4h20.\n\n8h40 subtrai horas e minutos separadamente (12 − 4 e 60 − 20), sem o “empréstimo” de uma hora. 8h20 inverte só as horas. 7h20 faz o empréstimo da hora, mas mantém os minutos. E 4h20 supõe que o espelho não altere a leitura.",
      v: { i: () => { const ang = (t) => [(t % 720) * 0.5, (t % 60) * 6]; const alvo = ang(4 * 60 + 20); const reais = intervalo(0, 719).filter((t) => { const [h, m] = ang(t); return Math.abs(((360 - h) % 360) - alvo[0]) < 1e-9 && Math.abs(((360 - m) % 360) - alvo[1]) < 1e-9; }); if (reais.length !== 1) throw new Error(`espelho: ${reais}`); return unicoV(alt.map((x) => x === hm(reais[0]))); } },
    };
  })(),
  (() => {
    const alt = ["9h00", "6h15", "12h45", "9h30", "6h45"];
    return {
      d: "media",
      e: "Em qual dos horários abaixo os ponteiros de um relógio formam exatamente um ângulo reto?",
      o: alt,
      x: "Às 9h00, o ponteiro dos minutos está no 12 e o das horas exatamente no 9: são 3 espaços de 30°, ou 90°. Nos outros horários, o ponteiro das horas já saiu do número e desfaz o ângulo reto aparente. Às 6h15, ele andou 7,5° além do 6, e o ângulo é 97,5°; às 9h30, andou 15° além do 9, e o ângulo é 105°; às 6h45, está 22,5° além do 6, e o ângulo é 67,5°; e às 12h45, está 22,5° além do 12, e o ângulo é 112,5°.\n\nQuem marca um desses quatro olha só os números para onde os ponteiros parecem apontar e esquece que o ponteiro das horas anda 0,5° por minuto.",
      v: { i: () => unicoV(alt.map((x) => { const [h, m] = x.split("h").map(Number); return Math.abs(angulo(h * 60 + m) - 90) < 1e-9; })) },
    };
  })(),
  (() => {
    const alt = [82.5, 90, 75, 97.5, 7.5];
    return {
      d: "media",
      e: "Um aluno afirmou que, ao meio-dia e quinze (12h15), os ponteiros de um relógio formam um ângulo reto. Qual é, na verdade, o menor ângulo entre eles?",
      o: alt.map((x) => `${fmt(x)}°`),
      x: "O ponteiro dos minutos, no 15 (o número 3), está a 90° do 12. O ponteiro das horas, que ao meio-dia estava no 12, andou 15 × 0,5° = 7,5° em 15 minutos. O ângulo entre eles é 90° − 7,5° = 82,5°.\n\n90° ignora o movimento do ponteiro das horas. 75° desconta o dobro desse movimento. 97,5° soma o movimento em vez de subtrair. E 7,5° é só o deslocamento do ponteiro das horas.",
      v: { n: () => angulo(15), o: alt },
    };
  })(),
  (() => {
    const alt = [11, 12, 24, 22, 10];
    return {
      d: "dificil",
      e: "Num relógio de ponteiros, quantas vezes o ponteiro das horas e o dos minutos ficam exatamente sobrepostos num período de 12 horas, a partir do meio-dia (contando o próprio meio-dia e excluindo a meia-noite)?",
      o: alt.map(fmt),
      x: "O ponteiro dos minutos dá 12 voltas em 12 horas, e o das horas, 1 volta. O dos minutos “alcança” o das horas uma vez a cada volta de vantagem: 12 − 1 = 11 vezes. Por isso as sobreposições acontecem a cada 12/11 de hora (cerca de 1h05min27s), e não a cada hora: ao meio-dia e por volta de 1h05, 2h11, …, 10h55. A seguinte já é a meia-noite, que fica fora da contagem; entre 11h e meia-noite, os ponteiros não se encontram.\n\n12 supõe uma sobreposição por hora. 24 conta uma por hora num dia inteiro, e 22 é o número de sobreposições em 24 horas, não em 12. E 10 esquece a do meio-dia.",
      v: { n: () => { let n = 0, antes = 0; for (let k = 1; k < 7200000; k++) { const t = k / 10000; const dif = (5.5 * t) % 360; if (dif < antes) n++; antes = dif; } return n + 1; }, o: alt },
    };
  })(),
  (() => {
    const alt = ["Pouco depois das 3h16", "Às 3h15 em ponto", "Pouco depois das 3h17", "Às 3h20 em ponto", "Às 3h18 em ponto"];
    return {
      d: "dificil",
      e: "Depois das 3 horas, em que horário os ponteiros de um relógio ficam sobrepostos pela primeira vez?",
      o: alt,
      x: "Às 3h, o ponteiro das horas está a 90° do 12. O dos minutos anda 6° por minuto, e o das horas, 0,5°: o dos minutos ganha 5,5° por minuto. Para tirar a diferença de 90°, leva 90 ÷ 5,5 ≈ 16,36 minutos. A sobreposição acontece por volta das 3h16min22s.\n\n3h15 em ponto supõe que o ponteiro das horas fique parado no 3 enquanto o dos minutos chega ao 15. 3h17, 3h18 e 3h20 exageram o avanço do ponteiro das horas.",
      v: { i: () => { let t = 180; while (Math.abs(((5.5 * t) % 360)) > 1e-3 && t < 240) t += 1e-4; const min = t - 180; const txt = Number.isInteger(Math.round(min * 1e4) / 1e4) ? `Às 3h${Math.round(min)} em ponto` : `Pouco depois das 3h${Math.floor(min)}`; return unicoV(alt.map((x) => x === txt)); } },
    };
  })(),
  (() => {
    const alt = ["18h18", "18h03", "18h30", "17h42", "18h06"];
    return {
      d: "media",
      e: "Um relógio adianta 3 minutos a cada hora. Ele foi acertado ao meio-dia. Que horário ele vai marcar quando forem, na verdade, 18h?",
      o: alt,
      x: "Do meio-dia às 18h passam 6 horas. A cada hora o relógio adianta 3 minutos, então no total adianta 6 × 3 = 18 minutos. Ele vai marcar 18h18.\n\n18h03 considera o adiantamento de uma hora só. 18h30 usa 5 minutos por hora. 17h42 trata o adiantamento como atraso. E 18h06 conta só duas horas de adiantamento. O adiantamento se acumula: depois de 1 hora são 3 minutos; depois de 2 horas, 6; e assim por diante, até 18 minutos às 18h reais.",
      v: { i: () => { let marcado = 12 * 60; for (let h = 12; h < 18; h++) marcado += 60 + 3; return unicoV(alt.map((x) => x === hm(marcado))); } },
    };
  })(),
  (() => {
    const alt = [18, 6, 12, 3, 36];
    return {
      d: "media",
      e: "Dois relógios foram acertados juntos às 8h. Um adianta 2 minutos por hora, e o outro atrasa 1 minuto por hora. Às 14h reais, qual é a diferença entre os horários que os dois relógios marcam?",
      o: alt.map((x) => `${x} minutos`),
      x: "Em 6 horas reais (das 8h às 14h), o primeiro relógio adianta 6 × 2 = 12 minutos e marca 14h12; o segundo atrasa 6 × 1 = 6 minutos e marca 13h54. A diferença entre eles é 12 + 6 = 18 minutos: como um se afasta da hora certa para a frente e o outro para trás, os desvios se somam.\n\n6 minutos subtrai as taxas (2 − 1) em vez de somá-las. 12 minutos considera só o relógio que adianta. 3 minutos é a diferença acumulada em uma hora só. E 36 minutos dobra a conta.",
      v: { n: () => { let a = 8 * 60, b = 8 * 60; for (let h = 8; h < 14; h++) { a += 60 + 2; b += 60 - 1; } return a - b; }, o: alt },
    };
  })(),
  (() => {
    const alt = [72, 144, 6, 36, 360];
    return {
      d: "dificil",
      e: "Um relógio de ponteiros atrasa 10 minutos por dia. Ele foi acertado hoje. Depois de quantos dias ele volta a mostrar a hora certa pela primeira vez?",
      o: alt.map((x) => `${fmt(x)} dias`),
      x: "Um relógio de ponteiros mostra a hora certa de novo quando o atraso acumulado completa uma volta do mostrador: 12 horas, ou 720 minutos. Com 10 minutos de atraso por dia, isso leva 720 ÷ 10 = 72 dias. Nesse momento, os ponteiros estão na posição certa, ainda que o relógio esteja 12 horas atrasado.\n\n144 dias usa 24 horas de atraso, como se o mostrador tivesse 24 horas. 6 dias divide 60 por 10, pensando numa hora de atraso. 36 dias usa 6 horas de atraso. E 360 dias usa um ano como referência, sem relação com o mostrador.",
      v: { n: () => { let atraso = 0, dia = 0; do { dia++; atraso += 10; } while (atraso % 720 !== 0); return dia; }, o: alt },
    };
  })(),
  (() => {
    const alt = ["3 horas e 35 minutos", "4 horas e 25 minutos", "3 horas e 75 minutos", "4 horas e 35 minutos", "3 horas e 25 minutos"];
    return {
      d: "facil",
      e: "Quanto tempo se passa das 9h45 às 13h20 do mesmo dia?",
      o: alt,
      x: "Das 9h45 às 10h00 são 15 minutos; das 10h00 às 13h00, 3 horas; e das 13h00 às 13h20, 20 minutos. Total: 3 horas e 35 minutos (215 minutos).\n\n4 horas e 25 minutos subtrai as horas e os minutos separadamente (13 − 9 e 45 − 20), mas o minuto final é menor que o inicial e pede “empréstimo” de uma hora. 3 horas e 75 minutos não converte os 60 minutos em hora. 4 horas e 35 minutos conta uma hora a mais. E 3 horas e 25 minutos erra a soma dos minutos.",
      v: { i: () => { const dif = 13 * 60 + 20 - (9 * 60 + 45); const txt = `${Math.floor(dif / 60)} horas e ${dif % 60} minutos`; return unicoV(alt.map((x) => x === txt)); } },
    };
  })(),
  (() => {
    const alt = ["16h35", "15h95", "16h25", "15h35", "17h35"];
    return {
      d: "facil",
      e: "Uma reunião começou às 14h50 e durou 1 hora e 45 minutos. A que horas terminou?",
      o: alt,
      x: "Somando: 14h50 + 1h = 15h50; depois, + 45 minutos. De 15h50 a 16h00 são 10 minutos, e sobram 35: a reunião terminou às 16h35. Em minutos: 50 + 45 = 95 minutos = 1 hora e 35 minutos, que se somam às 15h.\n\n15h95 não converte os 95 minutos em hora e minutos. 16h25 erra a soma dos minutos. 15h35 esquece de transportar a hora formada pelos minutos. E 17h35 transporta uma hora a mais.",
      v: { i: () => unicoV(alt.map((x) => x === hm(14 * 60 + 50 + 105))) },
    };
  })(),
  (() => {
    const alt = ["9h45", "10h10", "9h20", "8h25", "3h45"];
    return {
      d: "media",
      e: "Numa linha, o primeiro ônibus do dia sai às 6h, e os seguintes saem a cada 25 minutos. A que horas sai o 10º ônibus?",
      o: alt,
      x: "Entre o 1º e o 10º ônibus há 9 intervalos de 25 minutos: 9 × 25 = 225 minutos, ou 3 horas e 45 minutos. O 10º ônibus sai às 6h + 3h45 = 9h45.\n\n10h10 conta 10 intervalos, e seria o horário do 11º ônibus. 9h20 conta 8 intervalos, e seria o do 9º. 8h25 lê 225 minutos como 2 horas e 25 minutos, como se a hora tivesse 100 minutos. E 3h45 é o tempo decorrido entre o 1º e o 10º ônibus, e não o horário de saída.",
      v: { i: () => { let t = 6 * 60; for (let onibus = 2; onibus <= 10; onibus++) t += 25; return unicoV(alt.map((x) => x === hm(t))); } },
    };
  })(),
  (() => {
    const alt = ["5h17", "29h17", "4h17", "5h77", "6h17"];
    return {
      d: "media",
      e: "Um relógio digital de 24 horas mostra 23h47. Que horário ele mostrará daqui a 5 horas e 30 minutos?",
      o: alt,
      x: "Somando: 23h47 + 5h = 28h47, que no relógio de 24 horas vira 4h47 do dia seguinte (28 − 24 = 4). Somando os 30 minutos: 4h47 + 30min = 5h17.\n\n29h17 não volta a contagem depois das 24h. 4h17 esquece a hora formada ao somar os minutos (47 + 30 = 77 = 1h17). 5h77 não converte os minutos. E 6h17 transporta uma hora a mais. Em minutos: 23h47 são 1.427 minutos desde a meia-noite; somando 330, dá 1.757, e 1.757 − 1.440 = 317 minutos do dia seguinte, ou 5h17.",
      v: { i: () => unicoV(alt.map((x) => x === hm(23 * 60 + 47 + 5 * 60 + 30))) },
    };
  })(),
  (() => {
    const alt = [3, 2, 4, 6, 24];
    return {
      d: "dificil",
      e: "Num relógio digital de 24 horas, que vai de 00:00 a 23:59, em quantos horários do dia os quatro algarismos mostrados são iguais?",
      o: alt.map(fmt),
      x: "Quatro algarismos iguais exigem hora e minuto formados pelo mesmo algarismo repetido: 00:00, 11:11, 22:22, 33:33 e assim por diante. Mas as horas só vão até 23, e os minutos até 59: dos candidatos, só 00:00, 11:11 e 22:22 existem. São 3 horários.\n\n2 esquece o 00:00. 4 inclui um horário inexistente, como 33:33. 6 conta também horários como 44:44 e 55:55, que não existem. E 24 conta uma ocorrência por hora.",
      v: { n: () => intervalo(0, 1439).filter((m) => { const s = `${String(Math.floor(m / 60)).padStart(2, "0")}${String(m % 60).padStart(2, "0")}`; return new Set(s).size === 1; }).length, o: alt },
    };
  })(),
  (() => {
    const alt = [16, 24, 12, 10, 20];
    return {
      d: "dificil",
      e: "Num relógio digital de 24 horas, que vai de 00:00 a 23:59, quantos horários são palíndromos, isto é, se leem igual da esquerda para a direita e da direita para a esquerda (como 12:21)?",
      o: alt.map(fmt),
      x: "Para ser palíndromo, os minutos precisam ser a hora escrita ao contrário: 12:21, 05:50 etc. Isso só dá um horário válido se o minuto invertido for menor que 60, ou seja, se o segundo algarismo da hora for 0, 1, 2, 3, 4 ou 5. Das horas 00 a 09, servem 00 a 05 (6 horários); de 10 a 19, servem 10 a 15 (6); de 20 a 23, todas servem (4). Total: 16.\n\n24 supõe um palíndromo por hora. 12 esquece as horas de 20 a 23. 10 e 20 erram a contagem de algum dos blocos.",
      v: { n: () => intervalo(0, 1439).filter((m) => { const s = `${String(Math.floor(m / 60)).padStart(2, "0")}${String(m % 60).padStart(2, "0")}`; return s === [...s].reverse().join(""); }).length, o: alt },
    };
  })(),
  (() => {
    const alt = [24, 12, 1, 2, 1440];
    return {
      d: "facil",
      e: "Num relógio de ponteiros, quantas voltas completas o ponteiro dos minutos dá em 24 horas?",
      o: alt.map(fmt),
      x: "O ponteiro dos minutos dá uma volta completa a cada hora. Em 24 horas, dá 24 voltas.\n\n12 é o número de voltas em 12 horas, ou o número de horas do mostrador. 1 é o número de voltas do ponteiro das horas em 12 horas, e 2, em 24 horas — confunde os ponteiros. E 1.440 é o número de minutos de um dia, não o de voltas. Vale guardar a relação: em 12 horas, o dos minutos dá 12 voltas e o das horas, 1.",
      v: { n: () => Math.floor((24 * 60 * 6) / 360), o: alt },
    };
  })(),
  (() => {
    const alt = [10, 120, 20, 30, 5];
    return {
      d: "facil",
      e: "Num relógio de ponteiros, quantos graus o ponteiro das horas percorre em 20 minutos?",
      o: alt.map((x) => `${x}°`),
      x: "O ponteiro das horas dá uma volta (360°) em 12 horas, ou seja, 30° por hora, que é o mesmo que 0,5° por minuto. Em 20 minutos, percorre 20 × 0,5° = 10°.\n\n120° é o que o ponteiro dos minutos percorre em 20 minutos. 20° usa 1° por minuto. 30° é o que o ponteiro das horas percorre em uma hora inteira. E 5° usa 0,25° por minuto. Por isso, às 12h20, por exemplo, o ponteiro das horas já não está sobre o 12: andou 10° na direção do 1.",
      v: { n: () => (20 / (12 * 60)) * 360, o: alt },
    };
  })(),
  (() => {
    const alt = [22, 264, 24, 11, 44];
    return {
      d: "media",
      e: "O ponteiro dos minutos de um relógio girou 132° desde a última vez que alguém o olhou, sem completar uma volta. Quanto tempo se passou?",
      o: alt.map((x) => `${x} minutos`),
      x: "O ponteiro dos minutos dá uma volta, 360°, em 60 minutos: anda 6° por minuto. Para girar 132°, leva 132 ÷ 6 = 22 minutos. Conferindo: em 22 minutos, ele percorre 22 × 6° = 132°.\n\n264 minutos usa a velocidade do ponteiro das horas, 0,5° por minuto. 24 minutos divide por 5,5°, que é quanto o ponteiro dos minutos ganha sobre o das horas a cada minuto, e não a velocidade dele. 11 minutos divide 132 pelos 12 números do mostrador. E 44 minutos usa 3° por minuto.",
      v: { n: () => intervalo(0, 59).filter((t) => (t * 360) / 60 === 132)[0], o: alt },
    };
  })(),
  (() => {
    const alt = ["14h00", "13h58", "14h24", "14h48", "13h36"];
    return {
      d: "dificil",
      e: "Acertado às 8h, um relógio que adianta 4 minutos por hora está marcando 14h24. Que horas são, de fato, nesse instante?",
      o: alt,
      x: "O relógio adianta 4 minutos por hora real: a cada 60 minutos de verdade, ele avança 64. Desde as 8h, ele contou 6h24, ou 384 minutos. O tempo real correspondente é 384 × 60 ÷ 64 = 360 minutos, ou 6 horas: são 14h00. Conferindo: em 6 horas reais, o relógio adianta 6 × 4 = 24 minutos e marca 14h24.\n\n13h58 calcula o adiantamento sobre as 6,4 horas marcadas no relógio (6,4 × 4 ≈ 26 minutos), e não sobre as horas reais. 14h24 ignora o adiantamento. 14h48 soma o adiantamento em vez de descontá-lo. E 13h36 desconta o adiantamento duas vezes.",
      v: { i: () => { const marcado = 14 * 60 + 24 - 8 * 60; const real = intervalo(0, 600).filter((r) => r * 64 === marcado * 60); if (real.length !== 1) throw new Error("tempo real"); return unicoV(alt.map((x) => x === hm(8 * 60 + real[0]))); } },
    };
  })(),
  (() => {
    const alt = [156, 78, 144, 300, 24];
    return {
      d: "media",
      e: "Um relógio de parede bate as horas: uma batida à 1h, duas às 2h, e assim por diante, até doze batidas às 12h, repetindo o ciclo a cada 12 horas. Quantas batidas ele dá em 24 horas?",
      o: alt.map(fmt),
      x: "Em 12 horas, o relógio dá 1 + 2 + 3 + … + 12 batidas. Somando os extremos em pares (1 + 12, 2 + 11, …), são 6 pares de 13: 78 batidas. Em 24 horas, o ciclo se repete: 2 × 78 = 156 batidas.\n\n78 conta só 12 horas. 144 multiplica 12 × 12, como se toda hora tivesse 12 batidas. 300 soma 1 + 2 + … + 24, como se o relógio batesse até 24 vezes. E 24 conta uma batida por hora.",
      v: { n: () => { let b = 0; for (let t = 1; t <= 24; t++) b += ((t - 1) % 12) + 1; return b; }, o: alt },
    };
  })(),
  (() => {
    const alt = [11, 10, 12, 24, 13];
    return {
      d: "media",
      e: "Um relógio leva 5 segundos para dar 6 badaladas, com intervalos iguais entre elas. Mantendo o ritmo, quantos segundos leva para dar 12 badaladas?",
      o: alt.map((x) => `${x} segundos`),
      x: "O tempo conta os intervalos entre as badaladas, não as badaladas. Seis badaladas têm 5 intervalos, que levam 5 segundos: 1 segundo por intervalo. Doze badaladas têm 11 intervalos: 11 segundos.\n\n10 segundos dobra os 5 segundos, supondo que o tempo seja proporcional ao número de badaladas. 12 segundos conta um intervalo por badalada. 24 e 13 segundos erram de outras formas a relação entre badaladas e intervalos — que é a mesma dos postes e vãos de uma cerca: n postes, n − 1 vãos.",
      v: { n: () => { const porIntervalo = 5 / (6 - 1); return porIntervalo * (12 - 1); }, o: alt },
    };
  })(),
  (() => {
    const alt = [5, 3, 17, 7, 10];
    return {
      d: "facil",
      e: "Num relógio de ponteiros, às 10h, o ponteiro das horas aponta para o número 10. Para qual número ele estará apontando 7 horas depois?",
      o: alt.map(fmt),
      x: "O mostrador tem 12 números e “dá a volta” depois do 12. Andando 7 horas a partir do 10: 11, 12, 1, 2, 3, 4, 5. O ponteiro aponta para o 5 (são 17h, ou 5h da tarde). Em conta: 10 + 7 = 17, e 17 − 12 = 5.\n\n3 subtrai 7 de 10, andando para trás. 17 não dá a volta no mostrador. 7 conta as horas passadas, e não a posição. E 10 supõe que o ponteiro volte à mesma posição.",
      v: { n: () => ((10 + 7 - 1) % 12) + 1, o: alt },
    };
  })(),
];
