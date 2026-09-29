/* Rascunho — Raciocínio lógico / Problemas de associação lógica.

   Cada pista aparece duas vezes: no enunciado, em português, e na
   conferência, como função. A conferência enumera todas as distribuições,
   fica com as que cumprem as pistas e exige resposta única para o que foi
   perguntado. Nas questões sobre o próprio problema (qual pista falta, qual
   é indispensável, qual tornaria tudo impossível), conta as soluções com e
   sem cada pista. */

import { unicoV, intervalo, permutacoes, associacoes, ordens, pos, resposta, sempre, quem } from "./_associacao.mjs";

export const materia = "raciocinio-logico";
export const tema = "Problemas de associação lógica";
export const arquivo = "raciocinio-logico__problemas-de-associacao-logica";

const INDETERMINADO = "Não é possível determinar";

export const questoes = [
  (() => {
    const nomes = ["Ana", "Bruno", "Carla"];
    const alt = ["Ana – natação; Bruno – tênis; Carla – futebol", "Ana – natação; Bruno – futebol; Carla – tênis", "Ana – tênis; Bruno – natação; Carla – futebol", "Ana – futebol; Bruno – tênis; Carla – natação", "Ana – tênis; Bruno – futebol; Carla – natação"];
    return {
      d: "facil",
      e: "Ana, Bruno e Carla praticam, cada um, um esporte diferente: futebol, natação ou tênis. Ana não joga futebol nem tênis, e Bruno não joga futebol. Qual é o esporte de cada um?",
      o: alt,
      x: "A primeira pista deixa só uma opção para Ana: natação. Sobram futebol e tênis para Bruno e Carla. Como Bruno não joga futebol, ele joga tênis, e Carla fica com o futebol.\n\nAs outras distribuições violam alguma pista: pôr Bruno no futebol contraria a segunda; pôr Ana no tênis ou no futebol contraria a primeira. Num problema de associação, a pista que elimina mais possibilidades — aqui, a de Ana — é o melhor ponto de partida.",
      v: { i: () => { const sols = associacoes(nomes, { esporte: ["futebol", "natação", "tênis"] }, [(s) => !["futebol", "tênis"].includes(s.Ana.esporte), (s) => s.Bruno.esporte !== "futebol"]); return unicoV(alt.map((t) => t === resposta(sols, (s) => nomes.map((n) => `${n} – ${s[n].esporte}`).join("; ")))); } },
    };
  })(),
  (() => {
    const alt = ["Diego é médico", "Diego é engenheiro", "Diego é professor", "Elisa é professora", "Fábio é engenheiro"];
    const afirma = [(s) => s.Diego.p === "medicina", (s) => s.Diego.p === "engenharia", (s) => s.Diego.p === "magistério", (s) => s.Elisa.p === "magistério", (s) => s.Fábio.p === "engenharia"];
    return {
      d: "facil",
      e: "Diego, Elisa e Fábio exercem, cada um, uma profissão diferente: médico, engenheiro ou professor. Elisa não é médica, e Fábio é professor. Qual das afirmações abaixo é verdadeira?",
      o: alt,
      x: "Fábio é o professor. Restam medicina e engenharia para Diego e Elisa, e como Elisa não é médica, ela é a engenheira. Diego fica com a medicina.\n\n“Diego é engenheiro” e “Diego é professor” dão a Diego uma profissão que já tem dono. “Elisa é professora” e “Fábio é engenheiro” contradizem a pista que fixa Fábio como professor. Quando uma pista afirma diretamente uma associação, vale usá-la primeiro: ela elimina uma linha e uma coluna inteiras da tabela.",
      v: { i: () => { const sols = associacoes(["Diego", "Elisa", "Fábio"], { p: ["medicina", "engenharia", "magistério"] }, [(s) => s.Elisa.p !== "medicina", (s) => s.Fábio.p === "magistério"]); return unicoV(afirma.map((f) => sempre(sols, f))); } },
    };
  })(),
  (() => {
    const alt = ["Igor", "Gustavo", "Helena", "Júlia", INDETERMINADO];
    return {
      d: "media",
      e: "Gustavo, Helena, Igor e Júlia têm, cada um, um carro de cor diferente: azul, branco, preto ou vermelho. O carro de Júlia é vermelho. Helena não tem carro azul nem branco. Gustavo não tem carro branco. Quem tem o carro branco?",
      o: alt,
      x: "Júlia tem o carro vermelho. Helena não tem azul nem branco, e o vermelho já é de Júlia: o de Helena é preto. Gustavo não tem branco, e preto e vermelho já têm dono, então o dele é azul. Sobra o branco para Igor.\n\nGustavo e Helena têm pistas que proíbem o branco para eles, e Júlia já tem o vermelho. A resposta é determinável: as três pistas, aplicadas em sequência, fecham todas as associações.",
      v: { i: () => { const sols = associacoes(["Gustavo", "Helena", "Igor", "Júlia"], { cor: ["azul", "branco", "preto", "vermelho"] }, [(s) => s.Júlia.cor === "vermelho", (s) => !["azul", "branco"].includes(s.Helena.cor), (s) => s.Gustavo.cor !== "branco"]); return unicoV(alt.map((x) => x === resposta(sols, (s) => quem(s, "cor", "branco")))); } },
    };
  })(),
  (() => {
    const alt = ["Lia", "Nádia", "Marcos", "Otávio", "Paula"];
    return {
      d: "media",
      e: "Cinco candidatos — Lia, Marcos, Nádia, Otávio e Paula — chegaram ao local de uma prova em horários diferentes. Lia chegou antes de Marcos e depois de Nádia. Paula chegou por último. Otávio chegou antes de Nádia. Quem chegou em terceiro lugar?",
      o: alt,
      x: "Juntando as pistas: Otávio chegou antes de Nádia, Nádia antes de Lia e Lia antes de Marcos — uma cadeia com quatro pessoas em ordem. Paula chegou por último, então essa cadeia ocupa as posições 1 a 4: Otávio, Nádia, Lia, Marcos. O terceiro a chegar foi Lia.\n\nNádia foi a segunda, e Marcos, o quarto. Otávio foi o primeiro, e Paula, a última. O segredo é montar uma cadeia única com as comparações “antes de” e “depois de”, em vez de analisar cada pista separadamente.",
      v: { i: () => { const sols = ordens(["Lia", "Marcos", "Nádia", "Otávio", "Paula"], [(o) => pos(o, "Nádia") < pos(o, "Lia") && pos(o, "Lia") < pos(o, "Marcos"), (o) => pos(o, "Paula") === 5, (o) => pos(o, "Otávio") < pos(o, "Nádia")]); return unicoV(alt.map((x) => x === resposta(sols, (o) => o[2]))); } },
    };
  })(),
  (() => {
    const alt = ["Rui tem o cachorro e mora no 2º andar", "Rui tem o pássaro e mora no 2º andar", "Vera tem o peixe e mora no 4º andar", "Sara tem o gato e mora no 1º andar", "Tiago tem o peixe e mora no 4º andar"];
    const afirma = [(s) => s.Rui.bicho === "cachorro" && s.Rui.andar === 2, (s) => s.Rui.bicho === "pássaro" && s.Rui.andar === 2, (s) => s.Vera.bicho === "peixe" && s.Vera.andar === 4, (s) => s.Sara.bicho === "gato" && s.Sara.andar === 1, (s) => s.Tiago.bicho === "peixe" && s.Tiago.andar === 4];
    return {
      d: "media",
      e: "Rui, Sara, Tiago e Vera moram num prédio de 4 andares, um em cada andar, e cada um tem um animal diferente: cachorro, gato, peixe ou pássaro. Sara mora no 1º andar e não tem cachorro. Rui mora no andar imediatamente abaixo do de Tiago. Quem tem o gato mora no 4º andar. Tiago tem o peixe. Vera mora acima de Tiago. Qual afirmação é verdadeira?",
      o: alt,
      x: "Sara está no 1º andar. Rui fica logo abaixo de Tiago, e Vera acima de Tiago; com os andares 2, 3 e 4 livres, a única arrumação possível é Rui no 2º, Tiago no 3º e Vera no 4º. O gato é de quem mora no 4º andar: Vera. Tiago tem o peixe. Sara não tem cachorro, então fica com o pássaro, e o cachorro é de Rui.\n\nRui não pode ter o pássaro, que ficou com Sara. O peixe é de Tiago, não de Vera, e o gato é de Vera, não de Sara. E Tiago mora no 3º andar, não no 4º: acima dele ainda está Vera.",
      v: { i: () => { const sols = associacoes(["Rui", "Sara", "Tiago", "Vera"], { bicho: ["cachorro", "gato", "peixe", "pássaro"], andar: [1, 2, 3, 4] }, [(s) => s.Sara.andar === 1 && s.Sara.bicho !== "cachorro", (s) => s.Rui.andar === s.Tiago.andar - 1, (s) => s[quem(s, "bicho", "gato")].andar === 4, (s) => s.Tiago.bicho === "peixe", (s) => s.Vera.andar > s.Tiago.andar]); return unicoV(afirma.map((f) => sempre(sols, f))); } },
    };
  })(),
  (() => {
    const alt = ["Suco e calabresa", "Água e portuguesa", "Suco e portuguesa", "Refrigerante e calabresa", "Chá e quatro queijos"];
    return {
      d: "dificil",
      e: "Caio, Dora, Enzo e Flávia pediram, cada um, um sabor de pizza diferente (calabresa, margherita, portuguesa ou quatro queijos) e uma bebida diferente (água, chá, refrigerante ou suco). Quem pediu calabresa bebeu refrigerante. Dora pediu margherita. Enzo bebeu chá. Quem pediu portuguesa bebeu água. Flávia não bebeu refrigerante. Qual foi a bebida de Dora e qual foi a pizza de Caio, respectivamente?",
      o: alt,
      x: "Dora pediu margherita. Enzo bebeu chá, então não pediu calabresa (que vai com refrigerante) nem portuguesa (que vai com água): ficou com quatro queijos. Calabresa e portuguesa sobram para Caio e Flávia. Como Flávia não bebeu refrigerante, não pediu calabresa: pediu portuguesa, com água. Caio pediu calabresa, com refrigerante. A bebida que resta, suco, é de Dora.\n\n“Água e portuguesa” descreve Flávia, não Dora e Caio. “Suco e portuguesa” acerta a bebida de Dora, mas troca a pizza de Caio. “Refrigerante e calabresa” dá a Dora a bebida de Caio. E “chá e quatro queijos” é o pedido de Enzo.",
      v: { i: () => {
        const sols = associacoes(["Caio", "Dora", "Enzo", "Flávia"], { pizza: ["calabresa", "margherita", "portuguesa", "quatro queijos"], bebida: ["água", "chá", "refrigerante", "suco"] }, [
          (s) => s[quem(s, "pizza", "calabresa")].bebida === "refrigerante", (s) => s.Dora.pizza === "margherita", (s) => s.Enzo.bebida === "chá", (s) => s[quem(s, "pizza", "portuguesa")].bebida === "água", (s) => s.Flávia.bebida !== "refrigerante",
        ]);
        const r = resposta(sols, (s) => `${s.Dora.bebida} e ${s.Caio.pizza}`);
        return unicoV(alt.map((x) => x.toLowerCase() === r));
      } },
    };
  })(),
  (() => {
    const alt = ["O de Biologia", "O de Economia", "O de Direito", "O de Arte", "Nenhum, porque o de Cálculo está na ponta direita"];
    return {
      d: "media",
      e: "Numa estante, cinco livros — de Arte, Biologia, Cálculo, Direito e Economia — estão lado a lado, da esquerda para a direita. O de Cálculo está exatamente no meio. O de Arte está imediatamente à esquerda do de Economia. O de Direito está na ponta direita. Qual livro está imediatamente à direita do de Cálculo?",
      o: alt,
      x: "Com Cálculo na posição 3 e Direito na 5, sobram as posições 1, 2 e 4. Arte e Economia precisam ficar lado a lado, com Arte à esquerda — e o único par de posições vizinhas livres é 1 e 2. Então Arte fica na 1, Economia na 2, e Biologia ocupa a 4, imediatamente à direita de Cálculo.\n\nEconomia está à esquerda de Cálculo, não à direita. Direito está na ponta, duas posições depois de Cálculo. Arte está na ponta esquerda. E Cálculo está no meio, não na ponta direita.",
      v: { i: () => { const livros = ["Arte", "Biologia", "Cálculo", "Direito", "Economia"]; const sols = ordens(livros, [(o) => pos(o, "Cálculo") === 3, (o) => pos(o, "Economia") === pos(o, "Arte") + 1, (o) => pos(o, "Direito") === 5]); const r = resposta(sols, (o) => o[pos(o, "Cálculo")]); return unicoV(alt.map((x) => x === `O de ${r}`)); } },
    };
  })(),
  (() => {
    const nomes = ["Rafa", "Sílvia", "Túlio"];
    const alt = ["Rafa 8, Sílvia 12, Túlio 10", "Rafa 10, Sílvia 12, Túlio 8", "Rafa 8, Sílvia 10, Túlio 12", "Rafa 12, Sílvia 10, Túlio 8", "Rafa 10, Sílvia 8, Túlio 12"];
    return {
      d: "facil",
      e: "Rafa, Sílvia e Túlio têm 8, 10 e 12 anos, não necessariamente nessa ordem. Sílvia é mais velha que Túlio. Rafa não é o mais velho. Túlio não é o mais novo. Qual é a idade de cada um?",
      o: alt,
      x: "Túlio não é o mais novo, e Sílvia é mais velha que ele — então Túlio também não é o mais velho: tem 10 anos. Sílvia, mais velha que Túlio, tem 12. Sobram 8 anos para Rafa, o que confere com a pista de que ele não é o mais velho.\n\nAs outras distribuições quebram alguma pista: dar 8 anos a Túlio contraria “Túlio não é o mais novo”; dar 12 anos a Túlio contraria “Sílvia é mais velha que Túlio”; e dar 12 anos a Rafa contraria “Rafa não é o mais velho”.",
      v: { i: () => { const sols = associacoes(nomes, { idade: [8, 10, 12] }, [(s) => s.Sílvia.idade > s.Túlio.idade, (s) => s.Rafa.idade !== 12, (s) => s.Túlio.idade !== 8]); return unicoV(alt.map((x) => x === resposta(sols, (s) => nomes.map((n) => `${n} ${s[n].idade}`).join(", ")))); } },
    };
  })(),
  (() => {
    const alt = ["O primeiro da fila é Beto ou Davi", "Beto é o primeiro da fila", "Davi está à frente de Beto", "Clara é a segunda da fila", "Eva está atrás de Clara"];
    return {
      d: "dificil",
      e: "Numa fila, da 1ª à 6ª posição, estão Beto, Clara, Davi, Eva, Fred e Gil. Clara está imediatamente atrás de Beto. Davi está em algum lugar à frente de Eva. Fred é o último. Gil não é o primeiro. Qual afirmação é necessariamente verdadeira?",
      o: alt,
      x: "Fred ocupa a 6ª posição. Das outras cinco pessoas, quem pode ser a primeira? Gil não pode (pista direta). Clara também não, porque precisa de Beto imediatamente à frente dela. Eva também não, porque Davi está em algum lugar à frente dela. Sobram Beto e Davi: o primeiro da fila é um dos dois.\n\nAs outras afirmações podem falhar. A fila Davi, Beto, Clara, Eva, Gil, Fred cumpre todas as pistas e tem Beto em 2º e Clara em 3º. A fila Beto, Clara, Davi, Eva, Gil, Fred põe Beto à frente de Davi. E a fila Davi, Eva, Beto, Clara, Gil, Fred põe Eva à frente de Clara.",
      v: { i: () => {
        const sols = ordens(["Beto", "Clara", "Davi", "Eva", "Fred", "Gil"], [(o) => pos(o, "Clara") === pos(o, "Beto") + 1, (o) => pos(o, "Davi") < pos(o, "Eva"), (o) => pos(o, "Fred") === 6, (o) => pos(o, "Gil") !== 1]);
        return unicoV([(o) => ["Beto", "Davi"].includes(o[0]), (o) => o[0] === "Beto", (o) => pos(o, "Davi") < pos(o, "Beto"), (o) => pos(o, "Clara") === 2, (o) => pos(o, "Eva") > pos(o, "Clara")].map((f) => sempre(sols, f)));
      } },
    };
  })(),
  (() => {
    const alt = ["Duda", "Ana", "Bia", "Ana ou Bia, sem como saber qual", INDETERMINADO];
    return {
      d: "facil",
      e: "Ana, Bia, Cris e Duda sentam-se numa mesa quadrada, uma em cada lado. Ana está sentada em frente a Bia. Quem está sentada em frente a Cris?",
      o: alt,
      x: "Numa mesa quadrada com quatro lugares, cada pessoa tem exatamente uma pessoa em frente e duas ao lado. Se Ana está em frente a Bia, os dois lugares que sobram também ficam um em frente ao outro — e são de Cris e Duda. Logo, Duda está em frente a Cris.\n\nAna e Bia estão em frente uma da outra, então nenhuma delas pode estar em frente a Cris: as duas ficam ao lado dela. Por isso também não há dúvida entre Ana e Bia. E a resposta é determinável: a pista sobre Ana e Bia fixa os pares de lugares frente a frente.",
      v: { i: () => { const frente = (o, n) => o[(o.indexOf(n) + 2) % 4]; const sols = ordens(["Ana", "Bia", "Cris", "Duda"], [(o) => o[0] === "Ana", (o) => frente(o, "Ana") === "Bia"]); return unicoV(alt.map((x) => x === resposta(sols, (o) => frente(o, "Cris")))); } },
    };
  })(),
  (() => {
    const alt = ["Beatriz mora em Curitiba", "Álvaro é piloto", "Denise mora em Belém", "César é jornalista", "O arquiteto mora em Natal"];
    const afirma = [(s) => s.Beatriz.cidade === "Curitiba", (s) => s.Álvaro.prof === "piloto", (s) => s.Denise.cidade === "Belém", (s) => s.César.prof === "jornalista", (s) => s[quem(s, "prof", "arquiteto")].cidade === "Natal"];
    return {
      d: "dificil",
      e: "Álvaro, Beatriz, César e Denise moram em cidades diferentes (Belém, Curitiba, Natal e Vitória) e têm profissões diferentes (arquiteto, dentista, jornalista e piloto). O piloto mora em Natal. Beatriz é dentista. César mora em Vitória. Denise não é jornalista. Quem mora em Belém é jornalista. Qual afirmação é verdadeira?",
      o: alt,
      x: "Beatriz é dentista. César mora em Vitória, então não é o piloto, que mora em Natal, nem o jornalista, que mora em Belém — sobra-lhe arquiteto. Denise não é jornalista, nem dentista, nem arquiteta: é a piloto, e mora em Natal. Álvaro fica com o jornalismo e, portanto, com Belém. A cidade que resta, Curitiba, é de Beatriz.\n\nÁlvaro é jornalista, não piloto. Denise mora em Natal, não em Belém. César é arquiteto. E o arquiteto, César, mora em Vitória — Natal é do piloto.",
      v: { i: () => {
        const sols = associacoes(["Álvaro", "Beatriz", "César", "Denise"], { cidade: ["Belém", "Curitiba", "Natal", "Vitória"], prof: ["arquiteto", "dentista", "jornalista", "piloto"] }, [
          (s) => s[quem(s, "prof", "piloto")].cidade === "Natal", (s) => s.Beatriz.prof === "dentista", (s) => s.César.cidade === "Vitória", (s) => s.Denise.prof !== "jornalista", (s) => s[quem(s, "cidade", "Belém")].prof === "jornalista",
        ]);
        return unicoV(afirma.map((f) => sempre(sols, f)));
      } },
    };
  })(),
  (() => {
    const alt = [3, 2, 1, 4, 0];
    return {
      d: "media",
      e: "Lucas é mais alto que Maria, que é mais alta que Nuno. Olga é mais alta que Lucas, e Pedro é mais baixo que Nuno. Ninguém tem a mesma altura. Quantas dessas cinco pessoas são mais baixas que Lucas?",
      o: alt.map(String),
      x: "As pistas formam uma única cadeia, da mais alta para a mais baixa: Olga, Lucas, Maria, Nuno, Pedro. Olga é mais alta que Lucas; Lucas, que Maria; Maria, que Nuno; e Nuno, que Pedro. Abaixo de Lucas estão Maria, Nuno e Pedro: três pessoas.\n\n2 esquece Pedro, que só aparece na última pista. 1 conta só Maria, a mais próxima. 4 inclui Olga, que é mais alta que Lucas. E 0 inverte o sentido das comparações. Montar a cadeia inteira antes de contar evita esquecer alguém.",
      v: { n: () => { const sols = ordens(["Lucas", "Maria", "Nuno", "Olga", "Pedro"], [(o) => pos(o, "Olga") < pos(o, "Lucas"), (o) => pos(o, "Lucas") < pos(o, "Maria"), (o) => pos(o, "Maria") < pos(o, "Nuno"), (o) => pos(o, "Nuno") < pos(o, "Pedro")]); return resposta(sols, (o) => 5 - pos(o, "Lucas")); }, o: alt },
    };
  })(),
  (() => {
    const alt = ["Íris cursa Direito", "Íris não cursa Economia", "Hugo cursa Direito", "Gabi não cursa Física", "Íris não cursa Direito"];
    const extras = [(s) => s.Íris.c === "Direito", (s) => s.Íris.c !== "Economia", (s) => s.Hugo.c === "Direito", (s) => s.Gabi.c !== "Física", (s) => s.Íris.c !== "Direito"];
    return {
      d: "dificil",
      e: "Gabi, Hugo e Íris cursam, cada um, uma faculdade diferente: Direito, Economia e Física. Sabe-se que Gabi não cursa Direito e que Hugo não cursa Economia. Qual informação adicional permite descobrir, com certeza, o curso de cada um?",
      o: alt,
      x: "Com as duas pistas, sobram três distribuições possíveis: Gabi em Economia, Hugo em Direito e Íris em Física; Gabi em Economia, Hugo em Física e Íris em Direito; e Gabi em Física, Hugo em Direito e Íris em Economia. Só a informação “Íris cursa Direito” deixa uma única delas — a segunda.\n\n“Íris não cursa Economia” e “Gabi não cursa Física” deixam as duas primeiras. “Hugo cursa Direito” e “Íris não cursa Direito” deixam a primeira e a terceira. Uma informação só resolve o problema se eliminar todas as distribuições menos uma.",
      v: { i: () => { const base = [(s) => s.Gabi.c !== "Direito", (s) => s.Hugo.c !== "Economia"]; return unicoV(extras.map((f) => associacoes(["Gabi", "Hugo", "Íris"], { c: ["Direito", "Economia", "Física"] }, [...base, f]).length === 1)); } },
    };
  })(),
  (() => {
    const alt = ["Outubro", "Janeiro", "Abril", "Julho", INDETERMINADO];
    const nome = { 1: "Janeiro", 4: "Abril", 7: "Julho", 10: "Outubro" };
    return {
      d: "media",
      e: "Rita, Sérgio, Tânia e Ulisses tiraram férias em meses diferentes: janeiro, abril, julho e outubro. Sérgio tirou férias antes de Tânia, no mesmo ano. Rita tirou em julho. Ulisses não tirou em janeiro. Tânia não tirou em outubro. Em que mês Ulisses tirou férias?",
      o: alt,
      x: "Rita tirou férias em julho. Tânia não tirou em outubro, então tirou em janeiro ou em abril — mas Sérgio tirou antes dela, e não há mês da lista antes de janeiro. Logo, Tânia tirou em abril e Sérgio, em janeiro. Sobra outubro para Ulisses, o que confere com a pista de que ele não tirou em janeiro.\n\nJaneiro é de Sérgio, abril de Tânia e julho de Rita. A resposta é determinável: as pistas, combinadas, fecham todos os meses.",
      v: { i: () => { const sols = associacoes(["Rita", "Sérgio", "Tânia", "Ulisses"], { mes: [1, 4, 7, 10] }, [(s) => s.Sérgio.mes < s.Tânia.mes, (s) => s.Rita.mes === 7, (s) => s.Ulisses.mes !== 1, (s) => s.Tânia.mes !== 10]); return unicoV(alt.map((x) => x === nome[resposta(sols, (s) => s.Ulisses.mes)])); } },
    };
  })(),
  (() => {
    const alt = ["Coelho", "Gato", "Cachorro", "Pássaro", "Peixe"];
    return {
      d: "dificil",
      e: "Cinco casas vizinhas, numeradas de 1 a 5 da esquerda para a direita, têm cores diferentes (amarela, azul, branca, verde e vermelha), e em cada uma vive um animal diferente (cachorro, coelho, gato, pássaro e peixe). A casa verde fica imediatamente à esquerda da branca. A casa do meio é vermelha. Na casa azul vive o cachorro. A casa 1 é amarela. O gato vive numa casa vizinha da azul. O peixe vive na casa 5. O pássaro vive na casa verde. O coelho não vive na casa vermelha. Qual animal vive na casa amarela?",
      o: alt,
      x: "A casa 1 é amarela e a 3 é vermelha. O par verde-branca, com a verde imediatamente à esquerda, só cabe nas casas 4 e 5; então a azul é a 2. Animais: o cachorro está na azul (casa 2), o peixe na casa 5, o pássaro na verde (casa 4). Sobram gato e coelho para as casas 1 e 3; como o coelho não está na vermelha (casa 3), ele fica na amarela, e o gato na vermelha — que é vizinha da azul, como exige a pista sobre o gato.\n\nO gato está na casa vermelha, o cachorro na azul, o pássaro na verde e o peixe na branca. Montar primeiro a ordem das cores e só depois distribuir os animais deixa o problema bem mais simples.",
      v: { i: () => {
        const casas = ["1", "2", "3", "4", "5"], n = (s, cat, v) => Number(quem(s, cat, v));
        const sols = associacoes(casas, { cor: ["amarela", "azul", "branca", "verde", "vermelha"], bicho: ["cachorro", "coelho", "gato", "pássaro", "peixe"] }, [
          (s) => n(s, "cor", "verde") === n(s, "cor", "branca") - 1, (s) => s["3"].cor === "vermelha", (s) => s[quem(s, "cor", "azul")].bicho === "cachorro", (s) => s["1"].cor === "amarela",
          (s) => Math.abs(n(s, "bicho", "gato") - n(s, "cor", "azul")) === 1, (s) => s["5"].bicho === "peixe", (s) => s[quem(s, "cor", "verde")].bicho === "pássaro", (s) => s[quem(s, "cor", "vermelha")].bicho !== "coelho",
        ]);
        return unicoV(alt.map((x) => x.toLowerCase() === resposta(sols, (s) => s[quem(s, "cor", "amarela")].bicho)));
      } },
    };
  })(),
  (() => {
    const alt = ["Águias e Cobras empataram", "As Águias perderam para os Búfalos", "Búfalos e Cobras empataram", "As Cobras venceram os Búfalos", "As Águias venceram as Cobras"];
    return {
      d: "media",
      e: "Num torneio, três times — Águias, Búfalos e Cobras — jogaram uma vez contra cada adversário. Vitória vale 3 pontos, empate vale 1 e derrota vale 0. No fim, as Águias tinham 4 pontos, os Búfalos 3 e as Cobras 1. Qual afirmação é verdadeira?",
      o: alt,
      x: "Cada time jogou duas vezes. 4 pontos só se fazem com uma vitória e um empate (Águias); 3 pontos, com uma vitória e uma derrota (Búfalos), porque dois empates dariam só 2; e 1 ponto, com um empate e uma derrota (Cobras). Os Búfalos não empataram, então o único empate foi entre Águias e Cobras. As Águias venceram o outro jogo, contra os Búfalos, e os Búfalos venceram as Cobras.\n\nAs Águias não perderam nenhum jogo. Búfalos e Cobras não empataram: o jogo teve vitória dos Búfalos. E as Águias não venceram as Cobras — empataram com elas.",
      v: { i: () => {
        /* Jogos: AB, AC, BC; resultado 1 = vence o primeiro, 0 = empate, −1 = vence o segundo. */
        const sols = [];
        for (const ab of [1, 0, -1]) for (const ac of [1, 0, -1]) for (const bc of [1, 0, -1]) {
          const p = (r) => (r === 1 ? 3 : r === 0 ? 1 : 0);
          const pts = { A: p(ab) + p(ac), B: p(-ab) + p(bc), C: p(-ac) + p(-bc) };
          if (pts.A === 4 && pts.B === 3 && pts.C === 1) sols.push({ ab, ac, bc });
        }
        return unicoV([(s) => s.ac === 0, (s) => s.ab === -1, (s) => s.bc === 0, (s) => s.bc === -1, (s) => s.ac === 1].map((f) => sempre(sols, f)));
      } },
    };
  })(),
  (() => {
    const alt = ["No 3º andar", "No 2º andar", "No 1º andar", "No 2º ou no 3º andar, sem como saber", "No mesmo andar de Júlio"];
    return {
      d: "facil",
      e: "Júlio, Karen e Léo trabalham num prédio de três andares, cada um num andar diferente. Karen trabalha num andar acima do de Júlio. Léo trabalha no 1º andar. Em que andar trabalha Karen?",
      o: alt,
      x: "Léo ocupa o 1º andar, então Júlio e Karen ficam com o 2º e o 3º. Como Karen trabalha acima de Júlio, ela está no 3º andar e ele no 2º.\n\nO 1º andar é de Léo, e o 2º é de Júlio, que fica abaixo de Karen. A dúvida entre o 2º e o 3º some quando se usa a pista de que Karen está acima de Júlio. E os três trabalham em andares diferentes, então Karen não pode estar no mesmo andar de Júlio.",
      v: { i: () => { const sols = associacoes(["Júlio", "Karen", "Léo"], { andar: [1, 2, 3] }, [(s) => s.Karen.andar > s.Júlio.andar, (s) => s.Léo.andar === 1]); return unicoV(alt.map((x) => x === `No ${resposta(sols, (s) => s.Karen.andar)}º andar`)); } },
    };
  })(),
  (() => {
    const alt = ["Pietra", "Mauro", "Nina", "Otto", INDETERMINADO];
    return {
      d: "media",
      e: "Mauro, Nina, Otto e Pietra usam, cada um, um meio de transporte diferente para ir ao trabalho: bicicleta, carro, metrô ou ônibus. Mauro não usa carro nem metrô. Nina usa ônibus. Otto não usa bicicleta nem metrô. Quem usa o metrô?",
      o: alt,
      x: "Nina usa ônibus. Otto não usa bicicleta nem metrô, e o ônibus já é de Nina: Otto usa carro. Mauro não usa carro nem metrô, então usa bicicleta. O metrô sobra para Pietra.\n\nMauro e Otto têm pistas que proíbem o metrô para eles, e Nina usa ônibus. Não há indeterminação: depois de fixar Nina, cada pista negativa deixa uma única opção para a pessoa seguinte, e a última pessoa fica com o que resta.",
      v: { i: () => { const sols = associacoes(["Mauro", "Nina", "Otto", "Pietra"], { t: ["bicicleta", "carro", "metrô", "ônibus"] }, [(s) => !["carro", "metrô"].includes(s.Mauro.t), (s) => s.Nina.t === "ônibus", (s) => !["bicicleta", "metrô"].includes(s.Otto.t)]); return unicoV(alt.map((x) => x === resposta(sols, (s) => quem(s, "t", "metrô")))); } },
    };
  })(),
  (() => {
    const alt = ["Dani come pera ou uva", "Ari come banana", "Caio come pera", "Bel come maçã", "Dani come maçã"];
    return {
      d: "dificil",
      e: "Ari, Bel, Caio e Dani comem, cada um, uma fruta diferente: banana, maçã, pera ou uva. Ari não come uva nem pera. Bel come maçã ou banana. Caio não come maçã. Qual afirmação é necessariamente verdadeira?",
      o: alt,
      x: "Ari só pode comer banana ou maçã, e Bel também só pode comer maçã ou banana. Como são duas pessoas para duas frutas, Ari e Bel ficam com banana e maçã, em alguma ordem — e pera e uva sobram para Caio e Dani. Por isso Dani come pera ou uva, com certeza.\n\nAs outras afirmações podem falhar, porque as pistas não decidem a ordem dentro de cada par: Ari pode comer maçã e Bel, banana; Caio pode comer uva. E Dani nunca come maçã, que fica sempre com Ari ou com Bel.",
      v: { i: () => { const sols = associacoes(["Ari", "Bel", "Caio", "Dani"], { f: ["banana", "maçã", "pera", "uva"] }, [(s) => !["uva", "pera"].includes(s.Ari.f), (s) => ["maçã", "banana"].includes(s.Bel.f), (s) => s.Caio.f !== "maçã"]); return unicoV([(s) => ["pera", "uva"].includes(s.Dani.f), (s) => s.Ari.f === "banana", (s) => s.Caio.f === "pera", (s) => s.Bel.f === "maçã", (s) => s.Dani.f === "maçã"].map((f) => sempre(sols, f))); } },
    };
  })(),
  (() => {
    const alt = ["Jaime", "Kátia", "Mila", "Ivo", INDETERMINADO];
    return {
      d: "media",
      e: "Cinco corredores — Ivo, Jaime, Kátia, Luan e Mila — terminaram uma prova, sem empates. Luan chegou em 1º. Kátia chegou imediatamente depois de Ivo. Jaime chegou depois de Kátia. Mila não foi a última. Quem chegou em último lugar?",
      o: alt,
      x: "Luan é o 1º. Ivo e Kátia chegaram em posições seguidas, nessa ordem, e Jaime chegou depois de Kátia — então Kátia não pode ser a 5ª, e o par Ivo-Kátia ocupa as posições 2-3 ou 3-4. Nos dois casos, Jaime vem depois de Kátia, e Mila, que não foi a última, fica antes: a 5ª posição é de Jaime.\n\nA ordem completa não é única — Mila pode ser a 2ª ou a 4ª —, mas o último lugar é o mesmo nas duas possibilidades. Kátia e Ivo nunca chegam por último, e Mila é excluída pela pista.",
      v: { i: () => { const sols = ordens(["Ivo", "Jaime", "Kátia", "Luan", "Mila"], [(o) => pos(o, "Luan") === 1, (o) => pos(o, "Kátia") === pos(o, "Ivo") + 1, (o) => pos(o, "Jaime") > pos(o, "Kátia"), (o) => pos(o, "Mila") !== 5]); return unicoV(alt.map((x) => x === resposta(sols, (o) => o[4]))); } },
    };
  })(),
  (() => {
    const alt = ["Diana é enfermeira", "Elis é bióloga", "Diana é a mais velha", "Clara é advogada", "Elis é enfermeira"];
    return {
      d: "media",
      e: "Três irmãs — Clara, Diana e Elis — têm idades diferentes e profissões diferentes: advogada, bióloga e enfermeira. A advogada é a mais velha das três. Diana é mais nova que Elis. Clara é a bióloga. Qual afirmação é verdadeira?",
      o: alt,
      x: "Clara é a bióloga, então advogada e enfermeira ficam para Diana e Elis. A advogada é a mais velha das três, e Diana é mais nova que Elis — portanto Diana não pode ser a mais velha, nem a advogada. Elis é a advogada, e Diana, a enfermeira.\n\nElis é advogada, não bióloga nem enfermeira. Diana é mais nova que Elis, então não é a mais velha. E Clara é a bióloga, como diz a pista, e não a advogada.",
      v: { i: () => {
        const sols = associacoes(["Clara", "Diana", "Elis"], { prof: ["advogada", "bióloga", "enfermeira"], idade: [1, 2, 3] }, [(s) => s[quem(s, "prof", "advogada")].idade === 3, (s) => s.Diana.idade < s.Elis.idade, (s) => s.Clara.prof === "bióloga"]);
        return unicoV([(s) => s.Diana.prof === "enfermeira", (s) => s.Elis.prof === "bióloga", (s) => s.Diana.idade === 3, (s) => s.Clara.prof === "advogada", (s) => s.Elis.prof === "enfermeira"].map((f) => sempre(sols, f)));
      } },
    };
  })(),
  (() => {
    const alt = ["Heli tem aula de inglês na quinta", "Fabi tem aula de xadrez na terça", "Ivan tem aula de piano na segunda", "Gabi tem aula na quarta", "Heli tem aula de dança na segunda"];
    return {
      d: "dificil",
      e: "Fabi, Gabi, Heli e Ivan fazem, cada um, uma aula diferente (dança, inglês, piano ou xadrez), em dias diferentes (segunda, terça, quarta ou quinta). A aula de piano é na quarta. Gabi faz xadrez. Ivan tem aula na segunda. A aula de Fabi é no dia seguinte ao da aula de Gabi. Heli não faz dança. A aula de inglês é na quinta. Qual afirmação é verdadeira?",
      o: alt,
      x: "Ivan tem aula na segunda. Como a de piano é na quarta e a de inglês na quinta, a aula de Ivan é de dança ou de xadrez — e xadrez é de Gabi: Ivan faz dança. A aula de Gabi, de xadrez, só pode cair na terça, o único dia que sobra fora de piano, inglês e segunda. Fabi tem aula no dia seguinte, quarta: é a de piano. Heli fica com inglês, na quinta.\n\nFabi faz piano na quarta, não xadrez. Ivan faz dança, não piano. Gabi tem aula na terça. E Heli não faz dança, como diz a pista — faz inglês.",
      v: { i: () => {
        const sols = associacoes(["Fabi", "Gabi", "Heli", "Ivan"], { aula: ["dança", "inglês", "piano", "xadrez"], dia: [1, 2, 3, 4] }, [
          (s) => s[quem(s, "aula", "piano")].dia === 3, (s) => s.Gabi.aula === "xadrez", (s) => s.Ivan.dia === 1, (s) => s.Fabi.dia === s.Gabi.dia + 1, (s) => s.Heli.aula !== "dança", (s) => s[quem(s, "aula", "inglês")].dia === 4,
        ]);
        return unicoV([(s) => s.Heli.aula === "inglês" && s.Heli.dia === 4, (s) => s.Fabi.aula === "xadrez" && s.Fabi.dia === 2, (s) => s.Ivan.aula === "piano" && s.Ivan.dia === 1, (s) => s.Gabi.dia === 3, (s) => s.Heli.aula === "dança" && s.Heli.dia === 1].map((f) => sempre(sols, f)));
      } },
    };
  })(),
  (() => {
    const alt = ["Lara", "Ícaro", "Kiko", "Jade", INDETERMINADO];
    return {
      d: "media",
      e: "Ícaro, Jade, Kiko e Lara sentam-se lado a lado em quatro cadeiras numeradas de 1 a 4. Jade senta-se na cadeira 2. Kiko não se senta ao lado de Jade. Lara senta-se numa cadeira de número maior que a de Ícaro. Quem se senta na cadeira 3?",
      o: alt,
      x: "Jade ocupa a cadeira 2, e as cadeiras vizinhas dela são a 1 e a 3. Como Kiko não se senta ao lado de Jade, ele fica na 4. Sobram a 1 e a 3 para Ícaro e Lara, e Lara precisa estar numa cadeira de número maior que a de Ícaro: Ícaro na 1, Lara na 3.\n\nÍcaro está na cadeira 1, Kiko na 4 e Jade na 2. A pergunta tem resposta única: a pista sobre Kiko fixa a cadeira dele, e a de Lara decide a ordem das duas cadeiras restantes.",
      v: { i: () => { const sols = ordens(["Ícaro", "Jade", "Kiko", "Lara"], [(o) => pos(o, "Jade") === 2, (o) => Math.abs(pos(o, "Kiko") - pos(o, "Jade")) !== 1, (o) => pos(o, "Lara") > pos(o, "Ícaro")]); return unicoV(alt.map((x) => x === resposta(sols, (o) => o[2]))); } },
    };
  })(),
  (() => {
    const alt = ["Preta", "Branca", "Azul", "Verde", INDETERMINADO];
    return {
      d: "media",
      e: "Numa pilha de cinco caixas, numeradas de 1 (embaixo) a 5 (em cima), cada caixa tem uma cor diferente: amarela, azul, branca, preta e verde. A caixa verde está imediatamente acima da azul. A preta está em algum lugar abaixo da branca. A amarela está no topo. A azul não é a de baixo. Qual é a cor da caixa 1, a de baixo?",
      o: alt,
      x: "A amarela está no topo (posição 5). A azul não está na base, e a verde fica imediatamente acima dela; como a 5 já é da amarela, o par azul-verde ocupa 2-3 ou 3-4. Nos dois casos, sobram duas posições para a preta e a branca — e uma delas é sempre a posição 1. Como a preta está abaixo da branca, ela fica com a posição mais baixa: a 1.\n\nA ordem completa não é única (a branca pode estar na 2 ou na 4), mas a base é preta nas duas possibilidades. A azul não pode estar embaixo, pela pista; a verde está sempre acima da azul; e a branca, acima da preta.",
      v: { i: () => { const sols = ordens(["amarela", "azul", "branca", "preta", "verde"], [(o) => pos(o, "verde") === pos(o, "azul") + 1, (o) => pos(o, "preta") < pos(o, "branca"), (o) => pos(o, "amarela") === 5, (o) => pos(o, "azul") !== 1]); return unicoV(alt.map((x) => x.toLowerCase() === resposta(sols, (o) => o[0]))); } },
    };
  })(),
  (() => {
    const alt = ["R$ 30,00", "R$ 20,00", "R$ 10,00", "R$ 40,00", INDETERMINADO];
    return {
      d: "facil",
      e: "Nando, Olívia e Paulo gastaram R$ 10,00, R$ 20,00 e R$ 30,00 numa feira, um valor cada, não necessariamente nessa ordem. Olívia gastou mais que Nando. Paulo gastou o dobro do que Nando gastou. Quanto Olívia gastou?",
      o: alt,
      x: "Os valores são 10, 20 e 30 reais. Paulo gastou o dobro de Nando, e o único par em que um valor é o dobro do outro é 10 e 20: Nando gastou R$ 10,00 e Paulo, R$ 20,00. Sobram R$ 30,00 para Olívia — e ela de fato gastou mais que Nando.\n\nR$ 20,00 é o gasto de Paulo, e R$ 10,00, o de Nando. R$ 40,00 não está entre os valores possíveis. E a situação é determinável: a relação de dobro fixa dois dos valores, e o terceiro sobra.",
      v: { i: () => { const sols = associacoes(["Nando", "Olívia", "Paulo"], { g: [10, 20, 30] }, [(s) => s.Olívia.g > s.Nando.g, (s) => s.Paulo.g === 2 * s.Nando.g]); return unicoV(alt.map((x) => x === `R$ ${resposta(sols, (s) => s.Olívia.g)},00`)); } },
    };
  })(),
  (() => {
    const alt = ["Cid se formou em Engenharia", "Cid se formou em Direito", "Ana se formou em Engenharia", "Bia se formou em Medicina", "Ana se formou em Direito"];
    return {
      d: "media",
      e: "Ana, Bia e Cid se formaram, cada um, num curso diferente: Direito, Engenharia e Medicina. Sabe-se que: se Ana não se formou em Medicina, então Cid se formou em Medicina; Bia não se formou em Engenharia; e Cid não se formou em Medicina. Qual afirmação é verdadeira?",
      o: alt,
      x: "A primeira pista é uma condicional: se Ana não fez Medicina, Cid fez. Como Cid não fez Medicina (terceira pista), o modus tollens garante que Ana fez Medicina. Bia não fez Engenharia, e Medicina já é de Ana: Bia fez Direito. Sobra Engenharia para Cid.\n\nCid não fez Direito, que ficou com Bia. Ana fez Medicina, não Engenharia nem Direito. E Bia não pode ter feito Medicina, que é de Ana. Problemas de associação às vezes trazem pistas condicionais, e elas se resolvem com as mesmas regras da lógica proposicional.",
      v: { i: () => {
        const sols = associacoes(["Ana", "Bia", "Cid"], { c: ["Direito", "Engenharia", "Medicina"] }, [(s) => s.Ana.c === "Medicina" || s.Cid.c === "Medicina", (s) => s.Bia.c !== "Engenharia", (s) => s.Cid.c !== "Medicina"]);
        return unicoV([(s) => s.Cid.c === "Engenharia", (s) => s.Cid.c === "Direito", (s) => s.Ana.c === "Engenharia", (s) => s.Bia.c === "Medicina", (s) => s.Ana.c === "Direito"].map((f) => sempre(sols, f)));
      } },
    };
  })(),
  (() => {
    const alt = ["Enio", "Aldo", "Ciro", "Ninguém se senta ao lado das duas", INDETERMINADO];
    return {
      d: "media",
      e: "Numa mesa redonda com cinco lugares, sentam-se Aldo, Beth, Ciro, Dalva e Enio. Aldo senta-se entre Beth e Ciro, ao lado dos dois. Dalva não se senta ao lado de Beth. Quem se senta ao lado tanto de Dalva quanto de Beth?",
      o: alt,
      x: "Aldo está entre Beth e Ciro: os três ocupam três lugares seguidos, com Aldo no meio. Os dois lugares restantes também são vizinhos entre si, e cada um encosta numa ponta desse trio — um ao lado de Beth, outro ao lado de Ciro. Como Dalva não se senta ao lado de Beth, fica ao lado de Ciro, e Enio fica ao lado de Beth. A volta completa é Beth, Aldo, Ciro, Dalva, Enio — e Enio é vizinho de Dalva e de Beth.\n\nAldo e Ciro são vizinhos de Beth ou de Dalva, mas não das duas ao mesmo tempo. E a resposta é única: numa mesa redonda de cinco lugares, as pistas fixam a vizinhança de todos.",
      v: { i: () => {
        const vizinhos = (o, a, b) => { const i = o.indexOf(a), j = o.indexOf(b); return (i - j + 5) % 5 === 1 || (j - i + 5) % 5 === 1; };
        const sols = ordens(["Aldo", "Beth", "Ciro", "Dalva", "Enio"], [(o) => o[0] === "Aldo", (o) => vizinhos(o, "Aldo", "Beth") && vizinhos(o, "Aldo", "Ciro"), (o) => !vizinhos(o, "Dalva", "Beth")]);
        const r = resposta(sols, (o) => o.filter((n) => vizinhos(o, n, "Dalva") && vizinhos(o, n, "Beth")).join(",") || "ninguém");
        return unicoV(alt.map((x) => x === r));
      } },
    };
  })(),
  (() => {
    const alt = ["R$ 50,00", "R$ 20,00", "R$ 10,00", "R$ 5,00", INDETERMINADO];
    return {
      d: "media",
      e: "Quatro envelopes, numerados de 1 a 4, contêm R$ 5,00, R$ 10,00, R$ 20,00 e R$ 50,00, um valor em cada. O envelope 3 tem mais dinheiro que o 1. O envelope 2 tem R$ 10,00. O envelope 4 não tem R$ 50,00. Quanto dinheiro há no envelope 3?",
      o: alt,
      x: "O envelope 2 tem R$ 10,00. Sobram R$ 5,00, R$ 20,00 e R$ 50,00 para os envelopes 1, 3 e 4. Os R$ 50,00 não estão no 4, então estão no 1 ou no 3 — e, como o 3 tem mais que o 1, não podem estar no 1: estão no 3.\n\nO envelope 4 pode ter R$ 5,00 ou R$ 20,00, e o 1 fica com o outro valor — essa parte as pistas não decidem. Mas o conteúdo do envelope 3 é o mesmo nas duas possibilidades. R$ 10,00 é do envelope 2.",
      v: { i: () => { const sols = associacoes(["1", "2", "3", "4"], { r: [5, 10, 20, 50] }, [(s) => s["3"].r > s["1"].r, (s) => s["2"].r === 10, (s) => s["4"].r !== 50]); return unicoV(alt.map((x) => x === `R$ ${resposta(sols, (s) => s["3"].r)},00`)); } },
    };
  })(),
  (() => {
    const alt = ["Tom tem a mochila azul", "Rui tem a mochila azul", "Tom tem a mochila verde", "Lia tem a mochila verde", "Rui tem a mochila vermelha"];
    return {
      d: "facil",
      e: "Lia, Rui e Tom têm mochilas de cores diferentes: azul, verde e vermelha. Lia tem a mochila vermelha, e Rui não tem a azul. Qual afirmação é verdadeira?",
      o: alt,
      x: "Lia tem a mochila vermelha. Sobram azul e verde para Rui e Tom. Como Rui não tem a azul, ele tem a verde, e Tom fica com a azul.\n\nRui não pode ter a azul (pista direta) nem a vermelha (que é de Lia). Tom não tem a verde, que ficou com Rui. E Lia tem a vermelha, não a verde. Com três pessoas e três cores, duas pistas bem escolhidas bastam para fechar a tabela.",
      v: { i: () => { const sols = associacoes(["Lia", "Rui", "Tom"], { cor: ["azul", "verde", "vermelha"] }, [(s) => s.Lia.cor === "vermelha", (s) => s.Rui.cor !== "azul"]); return unicoV([(s) => s.Tom.cor === "azul", (s) => s.Rui.cor === "azul", (s) => s.Tom.cor === "verde", (s) => s.Lia.cor === "verde", (s) => s.Rui.cor === "vermelha"].map((f) => sempre(sols, f))); } },
    };
  })(),
  (() => {
    const pistas = [(s) => s.Val.cor === "azul", (s) => s.Téo.cor !== "azul", (s) => s.Uli.cor !== "azul", (s) => s.Téo.cor !== "cinza"];
    const alt = ["Téo não usa cinza", "Val usa azul", "Téo não usa azul", "Uli não usa azul", "Nenhuma: qualquer uma delas pode ser retirada"];
    return {
      d: "dificil",
      e: "Téo, Uli e Val vestem, cada um, uma camisa de cor diferente: azul, branca ou cinza. As pistas são: Val usa azul; Téo não usa azul; Uli não usa azul; Téo não usa cinza. Qual dessas pistas é indispensável — isto é, sem ela o problema passa a ter mais de uma solução?",
      o: alt,
      x: "As três primeiras pistas dizem, de formas diferentes, quem fica com o azul: basta saber que Val usa azul — ou que nem Téo nem Uli usam — para concluir o mesmo. Por isso qualquer uma delas pode ser retirada sem prejuízo. Já “Téo não usa cinza” é a única pista que separa Téo de Uli: sem ela, os dois ficam com branca e cinza em qualquer ordem, e o problema passa a ter duas soluções.\n\nRetirar “Val usa azul”, “Téo não usa azul” ou “Uli não usa azul” deixa o problema com solução única: Val de azul, Téo de branco e Uli de cinza. E dizer que nenhuma pista é indispensável ignora justamente a de Téo e o cinza.",
      v: { i: () => {
        const sem = (k) => associacoes(["Téo", "Uli", "Val"], { cor: ["azul", "branca", "cinza"] }, pistas.filter((_, i) => i !== k)).length > 1;
        const indispensaveis = [3, 0, 1, 2].map(sem);
        return unicoV([...indispensaveis, !indispensaveis.some(Boolean)]);
      } },
    };
  })(),
  (() => {
    const dias = ["segunda", "terça", "quarta", "quinta"];
    const alt = ["Davi dá plantão na segunda ou na terça", "Ana dá plantão na quinta", "Bia dá plantão na quinta", "Davi dá plantão na segunda", "Ana e Davi dão plantão em dias seguidos"];
    return {
      d: "media",
      e: "Ana, Bia, Caio e Davi dão plantão de segunda a quinta, um por dia. Ana e Bia não dão plantão em dias seguidos. Caio dá plantão na quarta. Davi dá plantão num dia anterior ao de Ana. Qual afirmação é necessariamente verdadeira?",
      o: alt,
      x: "Caio fica com a quarta; segunda, terça e quinta sobram para Ana, Bia e Davi. Como Davi dá plantão antes de Ana, ele não pode ser o da quinta, o último dia disponível. Então Davi está na segunda ou na terça, em qualquer das escalas possíveis.\n\nAs pistas admitem três escalas, de segunda a quinta: Davi, Ana, Caio, Bia; Davi, Bia, Caio, Ana; e Bia, Davi, Caio, Ana. Na primeira, Ana está na terça; na segunda, Bia está na terça; na terceira, Davi está na terça. E Ana e Davi só ficam em dias seguidos na primeira escala.",
      v: { i: () => {
        const sols = ordens(["Ana", "Bia", "Caio", "Davi"], [(o) => Math.abs(pos(o, "Ana") - pos(o, "Bia")) !== 1, (o) => o[2] === "Caio", (o) => pos(o, "Davi") < pos(o, "Ana")]);
        if (sols.length !== 3 || dias.length !== 4) throw new Error("escalas");
        return unicoV([(o) => pos(o, "Davi") <= 2, (o) => pos(o, "Ana") === 4, (o) => pos(o, "Bia") === 4, (o) => pos(o, "Davi") === 1, (o) => Math.abs(pos(o, "Ana") - pos(o, "Davi")) === 1].map((f) => sempre(sols, f)));
      } },
    };
  })(),
  (() => {
    const alt = [2, 1, 3, 0, 4];
    return {
      d: "facil",
      e: "Numa corrida, Rodrigo chegou antes de Sônia e depois de Tales, e Úrsula chegou por último. Não houve empates. Quantas pessoas chegaram entre Tales e Úrsula?",
      o: alt.map(String),
      x: "Tales chegou antes de Rodrigo, e Rodrigo antes de Sônia; Úrsula foi a última. A ordem de chegada é Tales, Rodrigo, Sônia, Úrsula. Entre Tales (1º) e Úrsula (4º) chegaram Rodrigo e Sônia: duas pessoas.\n\n1 esquece Sônia ou Rodrigo. 3 inclui um dos extremos na contagem. 0 supõe que Tales e Úrsula chegaram em seguida. E 4 conta todos os corredores. “Entre” exclui as duas pontas: são as pessoas estritamente depois de Tales e antes de Úrsula.",
      v: { n: () => { const sols = ordens(["Rodrigo", "Sônia", "Tales", "Úrsula"], [(o) => pos(o, "Rodrigo") < pos(o, "Sônia") && pos(o, "Rodrigo") > pos(o, "Tales"), (o) => pos(o, "Úrsula") === 4]); return resposta(sols, (o) => pos(o, "Úrsula") - pos(o, "Tales") - 1); }, o: alt },
    };
  })(),
  (() => {
    const alt = ["3 kg", "1 kg", "2 kg", "4 kg", INDETERMINADO];
    return {
      d: "media",
      e: "Quatro caixas, P, Q, R e S, pesam 1 kg, 2 kg, 3 kg e 4 kg, um peso cada. A caixa P é mais pesada que a Q. A caixa R pesa o dobro da S. A caixa Q não é a mais leve. Quanto pesa a caixa Q?",
      o: alt,
      x: "R pesa o dobro de S, e com os pesos 1, 2, 3 e 4 isso só acontece com R = 2 e S = 1, ou com R = 4 e S = 2. No segundo caso, sobrariam 1 e 3 para P e Q, e como P é mais pesada, Q ficaria com 1 kg — a mais leve, o que a pista proíbe. Então R = 2 e S = 1, e P e Q ficam com 3 e 4; como P é mais pesada, P = 4 e Q = 3.\n\n1 kg é o peso de S, e 2 kg, o de R. 4 kg é o de P. E o problema é determinável: o caso R = 4 e S = 2 cai por causa da pista sobre Q.",
      v: { i: () => { const sols = associacoes(["P", "Q", "R", "S"], { kg: [1, 2, 3, 4] }, [(s) => s.P.kg > s.Q.kg, (s) => s.R.kg === 2 * s.S.kg, (s) => s.Q.kg !== 1]); return unicoV(alt.map((x) => x === `${resposta(sols, (s) => s.Q.kg)} kg`)); } },
    };
  })(),
  (() => {
    const alt = ["Às 11h, na sala 1", "Às 9h, na sala 3", "Às 11h, na sala 2", "Às 10h, na sala 1", "Às 9h, na sala 1"];
    return {
      d: "media",
      e: "Três setores — RH, TI e Jurídico — têm reuniões às 9h, às 10h e às 11h, nas salas 1, 2 e 3, um horário e uma sala para cada setor. A reunião do RH é às 10h. A reunião da sala 3 é às 9h. A do Jurídico não é na sala 3. A reunião da sala 2 é às 10h. Em que horário e em que sala é a reunião do Jurídico?",
      o: alt,
      x: "A reunião da sala 3 é às 9h, e a do RH é às 10h — então o RH não está na sala 3. O Jurídico também não está na sala 3; logo, a sala 3 é da TI, às 9h. A reunião da sala 2 é às 10h, que é a do RH. Sobram, para o Jurídico, a sala 1 e o horário das 11h.\n\n“Às 9h, na sala 3” é a reunião da TI. “Às 11h, na sala 2” erra a sala, que é do RH. “Às 10h, na sala 1” dá ao Jurídico o horário do RH. E “às 9h, na sala 1” mistura o horário da TI com a sala do Jurídico.",
      v: { i: () => {
        const sols = associacoes(["RH", "TI", "Jurídico"], { h: [9, 10, 11], sala: [1, 2, 3] }, [(s) => s.RH.h === 10, (s) => s[quem(s, "sala", 3)].h === 9, (s) => s.Jurídico.sala !== 3, (s) => s[quem(s, "sala", 2)].h === 10]);
        return unicoV(alt.map((x) => x === resposta(sols, (s) => `Às ${s.Jurídico.h}h, na sala ${s.Jurídico.sala}`)));
      } },
    };
  })(),
  (() => {
    const alt = [50, 55, 45, 65, 60];
    return {
      d: "media",
      e: "Alan, Bela, Cadu e Duda têm 20, 25, 30 e 35 anos, uma idade cada. Bela é 10 anos mais velha que Cadu. Duda é mais nova que Alan. Cadu não é o mais novo dos quatro. Qual é a soma das idades de Alan e Duda?",
      o: alt.map(String),
      x: "Bela tem 10 anos a mais que Cadu: com as idades 20, 25, 30 e 35, os pares possíveis são Cadu 20 e Bela 30, ou Cadu 25 e Bela 35. Como Cadu não é o mais novo, fica o segundo par. Sobram 20 e 30 para Alan e Duda, e como Duda é mais nova que Alan, ela tem 20 e ele tem 30. A soma é 30 + 20 = 50.\n\nOs demais valores somam outros pares: 55 é Duda com Bela (20 + 35), 45 é Duda com Cadu, 65 é Alan com Bela e 60 é Cadu com Bela.",
      v: { n: () => { const sols = associacoes(["Alan", "Bela", "Cadu", "Duda"], { idade: [20, 25, 30, 35] }, [(s) => s.Bela.idade === s.Cadu.idade + 10, (s) => s.Duda.idade < s.Alan.idade, (s) => s.Cadu.idade !== 20]); return resposta(sols, (s) => s.Alan.idade + s.Duda.idade); }, o: alt },
    };
  })(),
  (() => {
    const alt = ["Nara é mais velha que Pilar, que é mais velha que Otto", "Pilar é mais velha que Otto, que é mais velho que Nara", "Pilar é mais nova que Nara, que é mais nova que Otto", "Otto é mais velho que Pilar, que é mais velha que Nara", "Pilar tem 40 anos, e Nara tem 20 anos"];
    const extras = [(s) => s.Nara.i > s.Pilar.i && s.Pilar.i > s.Otto.i, (s) => s.Pilar.i > s.Otto.i && s.Otto.i > s.Nara.i, (s) => s.Pilar.i < s.Nara.i && s.Nara.i < s.Otto.i, (s) => s.Otto.i > s.Pilar.i && s.Pilar.i > s.Nara.i, (s) => s.Pilar.i === 40 && s.Nara.i === 20];
    return {
      d: "media",
      e: "Nara, Otto e Pilar têm 20, 30 e 40 anos, uma idade cada. Sabe-se que Otto é mais velho que Nara. Qual das informações abaixo, se fosse acrescentada, tornaria a situação impossível?",
      o: alt,
      x: "Com Otto mais velho que Nara, a informação “Nara é mais velha que Pilar, que é mais velha que Otto” criaria um ciclo: Otto mais velho que Nara, Nara que Pilar e Pilar que Otto — Otto seria mais velho que ele mesmo. Nenhuma distribuição de idades atende a isso.\n\nAs outras informações são compatíveis com a pista dada. Pilar mais velha que Otto, e Otto que Nara, dá Pilar 40, Otto 30 e Nara 20. Pilar mais nova que Nara, e Nara que Otto, dá Pilar 20, Nara 30 e Otto 40. Otto mais velho que Pilar, e Pilar que Nara, dá Otto 40, Pilar 30 e Nara 20. E “Pilar tem 40 anos, e Nara tem 20” deixa Otto com 30, mais velho que Nara.",
      v: { i: () => unicoV(extras.map((f) => associacoes(["Nara", "Otto", "Pilar"], { i: [20, 30, 40] }, [(s) => s.Otto.i > s.Nara.i, f]).length === 0)) },
    };
  })(),
  (() => {
    const alt = ["Prata", "Branco", "Vermelho", "Preto", INDETERMINADO];
    return {
      d: "facil",
      e: "Quatro carros — branco, prata, preto e vermelho — estão estacionados lado a lado, nas vagas 1 a 4. O preto está na vaga 1. O vermelho está numa vaga vizinha à do preto. O branco não está na vaga 4. Qual é a cor do carro da vaga 4?",
      o: alt,
      x: "O preto ocupa a vaga 1, e a única vaga vizinha dela é a 2: o vermelho está na 2. Sobram as vagas 3 e 4 para o branco e o prata, e como o branco não está na 4, ele fica na 3. A vaga 4 é do prata.\n\nO branco está na vaga 3, o vermelho na 2 e o preto na 1. A vaga 1, por estar na ponta, tem um único vizinho — é isso que fixa a posição do vermelho logo na segunda pista.",
      v: { i: () => { const sols = ordens(["branco", "prata", "preto", "vermelho"], [(o) => o[0] === "preto", (o) => Math.abs(pos(o, "vermelho") - pos(o, "preto")) === 1, (o) => pos(o, "branco") !== 4]); return unicoV(alt.map((x) => x.toLowerCase() === resposta(sols, (o) => o[3]))); } },
    };
  })(),
  (() => {
    const alt = ["Finanças, Gestão, Ética", "Gestão, Ética, Finanças", "Ética, Finanças, Gestão", "Gestão, Finanças, Ética", "Finanças, Ética, Gestão"];
    return {
      d: "media",
      e: "Três palestras — Ética, Finanças e Gestão — acontecem às 14h, às 15h e às 16h, uma em cada horário. Se Ética for às 14h, Gestão será às 16h. Finanças não é às 15h. Gestão acontece antes de Ética. Se Finanças for às 16h, Ética será às 14h. Qual é a ordem das palestras, da primeira à última?",
      o: alt,
      x: "Finanças não é às 15h, então é às 14h ou às 16h. Se fosse às 16h, pela última pista Ética seria às 14h — mas Gestão acontece antes de Ética, e não há horário antes das 14h. Logo, Finanças é às 14h. Gestão e Ética ficam com 15h e 16h, e como Gestão vem antes: Gestão às 15h, Ética às 16h.\n\n“Gestão, Ética, Finanças” põe Finanças às 16h, o que leva à contradição já vista. “Ética, Finanças, Gestão” e “Finanças, Ética, Gestão” põem Ética antes de Gestão. E “Gestão, Finanças, Ética” põe Finanças às 15h, o que a segunda pista proíbe. A primeira pista, sobre Ética às 14h, nem chega a ser usada: Ética nunca pode vir primeiro.",
      v: { i: () => {
        const sols = ordens(["Ética", "Finanças", "Gestão"], [(o) => pos(o, "Ética") !== 1 || pos(o, "Gestão") === 3, (o) => pos(o, "Finanças") !== 2, (o) => pos(o, "Gestão") < pos(o, "Ética"), (o) => pos(o, "Finanças") !== 3 || pos(o, "Ética") === 1]);
        return unicoV(alt.map((x) => x === resposta(sols, (o) => o.join(", "))));
      } },
    };
  })(),
  (() => {
    const alt = ["Célio é casado com Dalva", "Artur é casado com Dalva", "Célio é casado com Fátima", "Bento é casado com Elza", "Artur é casado com Fátima"];
    return {
      d: "facil",
      e: "Artur, Bento e Célio são casados com Dalva, Elza e Fátima, formando três casais. Artur não é casado com Dalva. Bento é casado com Fátima. Qual afirmação é verdadeira?",
      o: alt,
      x: "Bento é casado com Fátima. Sobram Dalva e Elza para Artur e Célio. Como Artur não é casado com Dalva, ele é casado com Elza, e Célio, com Dalva.\n\n“Artur é casado com Dalva” contradiz a primeira pista. “Célio é casado com Fátima” e “Artur é casado com Fátima” ignoram que Fátima é esposa de Bento. E “Bento é casado com Elza” contradiz a segunda pista. Num problema de pares, cada pessoa de um grupo corresponde a exatamente uma do outro.",
      v: { i: () => { const sols = associacoes(["Artur", "Bento", "Célio"], { esposa: ["Dalva", "Elza", "Fátima"] }, [(s) => s.Artur.esposa !== "Dalva", (s) => s.Bento.esposa === "Fátima"]); return unicoV([(s) => s.Célio.esposa === "Dalva", (s) => s.Artur.esposa === "Dalva", (s) => s.Célio.esposa === "Fátima", (s) => s.Bento.esposa === "Elza", (s) => s.Artur.esposa === "Fátima"].map((f) => sempre(sols, f))); } },
    };
  })(),
  (() => {
    const alt = ["5", "2", "8", "2 ou 8, sem como saber qual", INDETERMINADO];
    return {
      d: "media",
      e: "Os números 2, 5 e 8 são atribuídos às letras X, Y e Z, um número para cada letra. Sabe-se que X + Y = 10 e que Z não é o maior dos três números. Qual é o valor de Z?",
      o: alt,
      x: "Entre 2, 5 e 8, o único par com soma 10 é 2 e 8: esses são os valores de X e Y, em alguma ordem. Sobra o 5 para Z — e ele de fato não é o maior dos três.\n\n2 e 8 são os valores de X e Y; as pistas não dizem qual é qual, mas isso não afeta Z. E a resposta é determinável: a soma 10 fixa o par X-Y, e o valor restante vai para Z. A pista de que Z não é o maior serve só de conferência.",
      v: { i: () => { const sols = associacoes(["X", "Y", "Z"], { v: [2, 5, 8] }, [(s) => s.X.v + s.Y.v === 10, (s) => s.Z.v !== 8]); return unicoV(alt.map((x) => x === String(resposta(sols, (s) => s.Z.v)))); } },
    };
  })(),
  (() => {
    const alt = ["À tarde", "De manhã", "À noite", "No sábado", INDETERMINADO];
    const nome = { manhã: "De manhã", tarde: "À tarde", noite: "À noite", sábado: "No sábado" };
    return {
      d: "media",
      e: "Bruna, Caio, Dênis e Érica estudam, cada um, um idioma diferente (alemão, francês, italiano ou japonês), em turnos diferentes (manhã, tarde, noite ou sábado). Quem estuda japonês tem aula no sábado. Bruna estuda à noite. Caio estuda alemão. Érica não estuda francês nem japonês. A aula de italiano é de manhã. Em que turno Caio estuda?",
      o: alt,
      x: "Caio estuda alemão. Érica não estuda francês nem japonês, e alemão é de Caio: ela estuda italiano, cuja aula é de manhã. Bruna estuda à noite, então não faz japonês (sábado) nem italiano (manhã): faz francês. Dênis fica com japonês, no sábado. Dos turnos, sobra a tarde para Caio.\n\nA manhã é de Érica, a noite de Bruna e o sábado de Dênis. O turno de Caio não aparece em nenhuma pista direta, mas é determinado por exclusão: é o único que sobra depois de associar os outros três.",
      v: { i: () => {
        const sols = associacoes(["Bruna", "Caio", "Dênis", "Érica"], { idioma: ["alemão", "francês", "italiano", "japonês"], turno: ["manhã", "tarde", "noite", "sábado"] }, [
          (s) => s[quem(s, "idioma", "japonês")].turno === "sábado", (s) => s.Bruna.turno === "noite", (s) => s.Caio.idioma === "alemão", (s) => !["francês", "japonês"].includes(s.Érica.idioma), (s) => s[quem(s, "idioma", "italiano")].turno === "manhã",
        ]);
        return unicoV(alt.map((x) => x === nome[resposta(sols, (s) => s.Caio.turno)]));
      } },
    };
  })(),
  (() => {
    const alt = [3, 1, 2, 4, 5];
    return {
      d: "dificil",
      e: "Numa fila, da 1ª à 5ª posição, estão Gil, Hana, Ian, Jô e Kim. Hana está imediatamente à frente de Ian. Gil não está em nenhuma das duas pontas da fila. Kim está em algum lugar atrás de Jô. Quantas posições diferentes Kim pode ocupar, respeitando todas as pistas?",
      o: alt.map(String),
      x: "Testando as posições do par Hana-Ian: se ele ocupa 1-2, 2-3 ou 3-4, Gil, que não pode ficar nas pontas, ocupa uma posição do meio, e as duas posições que sobram para Jô e Kim sempre incluem a 5ª — que fica com Kim, porque Kim vem depois de Jô. Se o par ocupa 4-5, sobram as posições 1, 2 e 3: Gil fica na 2ª ou na 3ª, e Kim, sempre depois de Jô, fica na 3ª ou na 2ª. As posições possíveis de Kim são a 2ª, a 3ª e a 5ª: três.\n\n1 supõe que Kim fique sempre na última posição, esquecendo o caso em que Hana e Ian ocupam as duas últimas. 2 e 4 contam errado esses casos. E 5 incluiria a 1ª posição, que Kim nunca ocupa, pois Jô está sempre à frente dele.",
      v: { n: () => { const sols = ordens(["Gil", "Hana", "Ian", "Jô", "Kim"], [(o) => pos(o, "Ian") === pos(o, "Hana") + 1, (o) => ![1, 5].includes(pos(o, "Gil")), (o) => pos(o, "Kim") > pos(o, "Jô")]); return new Set(sols.map((o) => pos(o, "Kim"))).size; }, o: alt },
    };
  })(),
  (() => {
    const alt = ["Quarta-feira", "Terça-feira", "Quinta-feira", "Segunda-feira", INDETERMINADO];
    const dia = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"];
    return {
      d: "media",
      e: "Cinco provas — Arte, Biologia, Física, História e Química — acontecem de segunda a sexta-feira, uma por dia. A prova de Química é no dia seguinte à de Física. A de História é na sexta. A de Arte é antes da de Biologia. A de Biologia não é na quinta. Em que dia é a prova de Física?",
      o: alt,
      x: "História fica na sexta. Física e Química ocupam dois dias seguidos, nessa ordem, entre segunda e quinta. Se ocupassem segunda-terça ou terça-quarta, Arte e Biologia ficariam com os dias restantes, e Biologia, que vem depois de Arte, cairia na quinta — o que a pista proíbe. Então Física e Química ficam na quarta e na quinta, e Arte e Biologia na segunda e na terça.\n\nTerça é o dia de Biologia, quinta o de Química e segunda o de Arte. A resposta é determinável: a pista “Biologia não é na quinta” elimina as outras posições do par Física-Química.",
      v: { i: () => { const sols = ordens(["Arte", "Biologia", "Física", "História", "Química"], [(o) => pos(o, "Química") === pos(o, "Física") + 1, (o) => pos(o, "História") === 5, (o) => pos(o, "Arte") < pos(o, "Biologia"), (o) => pos(o, "Biologia") !== 4]); return unicoV(alt.map((x) => x === dia[resposta(sols, (o) => pos(o, "Física")) - 1])); } },
    };
  })(),
  (() => {
    const alt = ["Noé mora em Sorocaba", "Leo mora em Sorocaba", "Noé mora em Campinas", "Mia mora em Campinas", "Leo mora em Santos"];
    return {
      d: "facil",
      e: "Os primos Leo, Mia e Noé moram em cidades diferentes: Campinas, Santos e Sorocaba. Mia mora em Santos, e Leo não mora em Sorocaba. Qual afirmação é verdadeira?",
      o: alt,
      x: "Mia mora em Santos. Sobram Campinas e Sorocaba para Leo e Noé, e como Leo não mora em Sorocaba, ele mora em Campinas. Noé fica com Sorocaba.\n\n“Leo mora em Sorocaba” contradiz a segunda pista. “Noé mora em Campinas” dá a Noé a cidade de Leo. “Mia mora em Campinas” e “Leo mora em Santos” contradizem a primeira pista. Com três pessoas e três cidades, uma pista afirmativa e uma negativa bastam para fechar o problema.",
      v: { i: () => { const sols = associacoes(["Leo", "Mia", "Noé"], { c: ["Campinas", "Santos", "Sorocaba"] }, [(s) => s.Mia.c === "Santos", (s) => s.Leo.c !== "Sorocaba"]); return unicoV([(s) => s.Noé.c === "Sorocaba", (s) => s.Leo.c === "Sorocaba", (s) => s.Noé.c === "Campinas", (s) => s.Mia.c === "Campinas", (s) => s.Leo.c === "Santos"].map((f) => sempre(sols, f))); } },
    };
  })(),
  (() => {
    const alt = ["Pia tem o cão e mora na casa azul", "Quel tem o coelho e mora na casa verde", "Olga tem o cão e mora na casa verde", "Pia tem o gato e mora na casa azul", "Olga tem o gato e mora na casa rosa"];
    return {
      d: "media",
      e: "Olga, Pia e Quel têm, cada uma, um animal diferente (cão, coelho e gato) e moram em casas de cores diferentes (azul, rosa e verde). A dona do gato mora na casa verde. Pia mora na casa azul. Quel tem o coelho. Olga não mora na casa rosa. Qual afirmação é verdadeira?",
      o: alt,
      x: "Pia mora na casa azul, e Olga não mora na rosa: Olga mora na verde, e Quel, na rosa. A dona do gato mora na casa verde, então o gato é de Olga. Quel tem o coelho, e o cão sobra para Pia.\n\nQuel mora na casa rosa, não na verde. O cão é de Pia, não de Olga, e o gato é de Olga, não de Pia. E Olga mora na verde, não na rosa, como diz a última pista.",
      v: { i: () => {
        const sols = associacoes(["Olga", "Pia", "Quel"], { bicho: ["cão", "coelho", "gato"], casa: ["azul", "rosa", "verde"] }, [(s) => s[quem(s, "bicho", "gato")].casa === "verde", (s) => s.Pia.casa === "azul", (s) => s.Quel.bicho === "coelho", (s) => s.Olga.casa !== "rosa"]);
        return unicoV([(s) => s.Pia.bicho === "cão" && s.Pia.casa === "azul", (s) => s.Quel.bicho === "coelho" && s.Quel.casa === "verde", (s) => s.Olga.bicho === "cão" && s.Olga.casa === "verde", (s) => s.Pia.bicho === "gato" && s.Pia.casa === "azul", (s) => s.Olga.bicho === "gato" && s.Olga.casa === "rosa"].map((f) => sempre(sols, f)));
      } },
    };
  })(),
  (() => {
    const alt = ["2", "1", "3", "1 ou 2, sem como saber qual", INDETERMINADO];
    return {
      d: "media",
      e: "Numa grade de 3 × 3 casas, cada linha e cada coluna devem conter os números 1, 2 e 3, sem repetição. O canto superior esquerdo tem o número 2. A casa do meio da coluna da direita tem o número 1. A casa do meio da linha de baixo tem o número 3. Qual número fica na casa central da grade?",
      o: alt,
      x: "Na linha de cima, o 2 já está à esquerda; as outras duas casas levam 1 e 3. A coluna da direita já tem o 1 (na linha do meio), então a casa de cima dessa coluna leva 3, e a do meio da linha de cima leva 1. Na coluna do meio, já há 1 (em cima) e 3 (embaixo): o centro só pode ser 2.\n\n1 e 3 já aparecem na coluna do meio, o que os exclui do centro. E a resposta é determinável: as três informações, combinadas, fecham a coluna do meio. A grade completa fica 2-1-3 / 3-2-1 / 1-3-2.",
      v: { i: () => {
        const linhas = permutacoes([1, 2, 3]);
        const grades = [];
        for (const a of linhas) for (const b of linhas) for (const c of linhas) if ([0, 1, 2].every((j) => new Set([a[j], b[j], c[j]]).size === 3)) grades.push([a, b, c]);
        const sols = grades.filter((g) => g[0][0] === 2 && g[1][2] === 1 && g[2][1] === 3);
        return unicoV(alt.map((x) => x === String(resposta(sols, (g) => g[1][1]))));
      } },
    };
  })(),
  (() => {
    const alt = ["395", "591", "359", "935", "539"];
    const pistas = [["784", 0, 0], ["059", 0, 2], ["926", 0, 1], ["351", 1, 1], ["310", 1, 0]];
    return {
      d: "dificil",
      e: "Uma senha tem três algarismos diferentes. Para cada tentativa, informa-se quantos algarismos estão certos e se estão na posição certa: 784 — nenhum algarismo certo; 059 — dois certos, ambos fora do lugar; 926 — um certo, fora do lugar; 351 — dois certos, um no lugar e outro fora; 310 — um certo, no lugar. Qual é a senha?",
      o: alt,
      x: "A tentativa 784 elimina 7, 8 e 4. Em 059 há dois algarismos da senha. Se um deles fosse o 0, a senha teria 0 e mais 5 ou 9, e sobraria um único lugar para atender a 351 (que exige dois entre 3, 5 e 1) e a 926 (que exige um entre 9, 2 e 6) — não dá. Então a senha tem 5 e 9, e não tem 0; por 926, também não tem 2 nem 6. O 9 não está na 1ª posição (926) nem na 3ª (059): está na 2ª. Em 351, o 5 está fora do lugar, então o outro acerto — 3 ou 1 — está no lugar: 3 na 1ª posição ou 1 na 3ª. A tentativa 310 decide: há um acerto no lugar, e só o 3 na 1ª posição cumpre isso. A senha é 395.\n\n591 cumpriria as quatro primeiras tentativas, mas em 310 o 1 estaria fora do lugar. 359, 935 e 539 tiram o 9 da 2ª posição, o que 926 e 059 impedem.",
      v: { i: () => {
        const resultado = (senha, t) => { let lugar = 0, fora = 0; [...t].forEach((c, i) => { if (senha[i] === c) lugar++; else if (senha.includes(c)) fora++; }); return [lugar, fora]; };
        const senhas = [];
        for (let a = 0; a <= 9; a++) for (let b = 0; b <= 9; b++) for (let c = 0; c <= 9; c++) if (new Set([a, b, c]).size === 3) senhas.push(`${a}${b}${c}`);
        const sols = senhas.filter((s) => pistas.every(([t, l, f]) => { const [l2, f2] = resultado(s, t); return l2 === l && f2 === f; }));
        return unicoV(alt.map((x) => x === resposta(sols, (s) => s)));
      } },
    };
  })(),
  (() => {
    const alt = ["O rei", "O ás", "A dama", "O rei ou a dama, sem como saber qual", INDETERMINADO];
    return {
      d: "facil",
      e: "Três cartas — um ás, um rei e uma dama — estão enfileiradas, viradas para baixo. O rei está em algum lugar à esquerda da dama. O ás não está no meio. A carta da direita não é o ás. Qual carta está no meio?",
      o: alt,
      x: "O ás não está no meio nem na direita, então está na esquerda. O meio e a direita ficam com o rei e a dama, e como o rei está à esquerda da dama, o rei fica no meio e a dama na direita.\n\nO ás está na esquerda, e a dama, na direita. A dúvida entre rei e dama se resolve com a pista de que o rei está à esquerda da dama. Com poucas pistas, a carta com mais restrições — aqui, o ás — é o melhor ponto de partida.",
      v: { i: () => { const sols = ordens(["ás", "rei", "dama"], [(o) => pos(o, "rei") < pos(o, "dama"), (o) => pos(o, "ás") !== 2, (o) => o[2] !== "ás"]); const r = resposta(sols, (o) => o[1]); return unicoV(alt.map((x) => x === (r === "dama" ? "A dama" : `O ${r}`))); } },
    };
  })(),
  (() => {
    const alt = ["Ceará", "Goiás", "Pará", "Bahia", INDETERMINADO];
    return {
      d: "media",
      e: "Gael, Hilda, Isis e Juno fizeram, cada um, uma viagem para um estado diferente (Bahia, Ceará, Goiás e Pará), em épocas diferentes, uma depois da outra. Hilda viajou logo depois de Gael. Quem foi ao Pará viajou por último. Isis foi à Bahia. Juno foi o primeiro a viajar. Gael não foi ao Ceará. Para qual estado Juno viajou?",
      o: alt,
      x: "Juno viajou primeiro. Gael e Hilda viajaram em seguida um do outro, então ocupam a 2ª e a 3ª viagens ou a 3ª e a 4ª. No primeiro caso, Isis seria a última e teria ido ao Pará — mas Isis foi à Bahia. Logo, Gael é o 3º, Hilda a 4ª (e foi ao Pará) e Isis a 2ª. Gael não foi ao Ceará, então foi a Goiás, e o Ceará sobra para Juno.\n\nGoiás é o destino de Gael, o Pará o de Hilda e a Bahia o de Isis. A resposta é determinável: a pista sobre Isis e a Bahia elimina a outra posição possível do par Gael-Hilda.",
      v: { i: () => {
        const sols = associacoes(["Gael", "Hilda", "Isis", "Juno"], { uf: ["Bahia", "Ceará", "Goiás", "Pará"], ordem: [1, 2, 3, 4] }, [
          (s) => s.Hilda.ordem === s.Gael.ordem + 1, (s) => s[quem(s, "uf", "Pará")].ordem === 4, (s) => s.Isis.uf === "Bahia", (s) => s.Juno.ordem === 1, (s) => s.Gael.uf !== "Ceará",
        ]);
        return unicoV(alt.map((x) => x === resposta(sols, (s) => s.Juno.uf)));
      } },
    };
  })(),
  (() => {
    const alt = ["8", "6", "7", "9", INDETERMINADO];
    return {
      d: "media",
      e: "Iara, Joel, Kaio e Luna tiraram notas diferentes numa prova: 6, 7, 8 e 9. A nota de Joel é a média das notas de Iara e Luna. Kaio tirou a maior nota. Iara tirou nota menor que a de Luna. Qual foi a nota de Luna?",
      o: alt,
      x: "Kaio tirou a maior nota, 9. Iara, Joel e Luna ficam com 6, 7 e 8. Joel tem a média das notas de Iara e Luna, e nesse trio só o 7 é a média dos outros dois (6 e 8). Como Iara tirou menos que Luna, Iara ficou com 6 e Luna com 8.\n\n6 é a nota de Iara, 7 a de Joel e 9 a de Kaio. E a resposta é determinável: a pista da média põe Joel no meio, e a comparação entre Iara e Luna decide a ordem das outras duas.",
      v: { i: () => { const sols = associacoes(["Iara", "Joel", "Kaio", "Luna"], { nota: [6, 7, 8, 9] }, [(s) => 2 * s.Joel.nota === s.Iara.nota + s.Luna.nota, (s) => s.Kaio.nota === 9, (s) => s.Iara.nota < s.Luna.nota]); return unicoV(alt.map((x) => x === String(resposta(sols, (s) => s.Luna.nota)))); } },
    };
  })(),
];
