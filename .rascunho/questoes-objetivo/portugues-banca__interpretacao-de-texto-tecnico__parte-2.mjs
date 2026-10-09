/* Rascunho — Português de banca / Interpretação de texto técnico (parte 2).

   Completa as 25 que já existiam (5 fáceis, 15 médias, 5 difíceis) com 25 novas
   (7 fáceis, 13 médias, 5 difíceis), em assuntos que as antigas não tinham:
   extintores, estoque PEPS, senhas, elevador, prazos de chamados, datas em
   laudos, prazo em dias úteis, tolerância de massa, condições cumulativas e
   alternativas, exceção à proibição, multa por atraso, ensaio de concreto,
   vazão, procedimento elétrico, taxa de falhas, perdas por setor, reembolso de
   viagem, prazo de recurso, norma geral e específica, arquivamento de
   relatório e reescrita de limite. A maioria é leitura de uma regra aplicada a
   um caso, e por isso o gabarito é recalculado por código: a regra do texto
   vira função, o cenário vira dado, e o resultado tem de cair na opção marcada.
   Duas são sobre a linguagem técnica em si (infinitivo nas instruções e
   inferência de um levantamento) e ficam em revisao_independente_pendente.
   Ficaram de fora, de propósito, textos em que o limite aparece sem dizer se é
   inclusivo (a questão sempre usa valor longe da fronteira, ou diz "superior a"). */

export const materia = "portugues-banca";
export const tema = "Interpretação de texto técnico";
export const arquivo = "portugues-banca__interpretacao-de-texto-tecnico__parte-2";

const ind = (tags, alvo) => tags.indexOf(alvo);
const unicoV = (arr) => { const ok = arr.map((b, i) => (b ? i : -1)).filter((i) => i >= 0); return ok.length === 1 ? ok[0] : -1; };
const fmtLista = (xs) => (xs.length <= 1 ? xs.join("") : xs.slice(0, -1).join(", ") + " e " + xs[xs.length - 1]);
const DIAS = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
const MESES = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
const somaDias = (d, n) => new Date(d.getTime() + n * 86400000);
const util = (d) => d.getUTCDay() !== 0 && d.getUTCDay() !== 6;
const reais = (n) => "R$ " + n.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

/* ---- regras do texto, escritas como função ------------------------------ */
const extintor = (usado, meses) => (usado || meses >= 12 ? "recarregar" : "manter");
const senhaOk = (s, usuario) => s.length >= 10 && /[A-Z]/.test(s) && /[0-9]/.test(s) && !s.toLowerCase().includes(usuario);
const multa = (valor, dias) => (dias <= 5 ? valor * 0.01 * dias : valor * 0.1 + valor * 0.005 * (dias - 5));
const multaCerta = (valor, dias) => Math.round(multa(valor, dias) * 100) / 100;

const opcoesPeps = ["Lote C", "Lote B", "Lote A", "Lote D", "Qualquer lote, à escolha do almoxarife"];
const opcoesPrazoChamado = ["terça-feira, às 15h", "segunda-feira, às 19h", "quarta-feira, às 15h", "terça-feira, às 19h", "quinta-feira, às 15h"];
const opcoesDatas = ["07/03/2025", "7/3/25", "2025/03/07", "07-03-2025", "07/03/25"];
const opcoesSenha = ["Verde2024Sol", "Marta12345678", "sol2024verde", "SolVerde", "Verde2024"];
const opcoesUteis = ["13 de março de 2025", "12 de março de 2025", "11 de março de 2025", "14 de março de 2025", "15 de março de 2025"];
const opcoesTol = ["Q e S", "P e Q", "R e S", "P, Q e S", "Q, R e S"];
const opcoesCumul = ["Ana", "Beto", "Carla", "Davi", "Ana e Beto"];
const opcoesAlt = ["Rui, Eva, Gil e Noé", "Apenas Gil e Noé", "Apenas Rui e Eva", "Lia, Gil e Noé", "Apenas Noé"];
const opcoesMulta = [2300, 1600, 2000, 2800, 3300];
const opcoesVazao = [4.32, 0.72, 43.2, 72, 0.432];
const opcoesSeq = [
  ["desligar", "aguardar", "abrir"],
  ["abrir", "desligar", "aguardar"],
  ["aguardar", "desligar", "abrir"],
  ["desligar", "abrir", "aguardar"],
  ["abrir", "aguardar", "desligar"],
];
const opcoesSolda = [24, 40, 960, 16, 36];
const opcoesMedia = ["C", "A", "B", "A e C", "Todos"];
const opcoesReemb = [730, 735, 790, 770, 580];
const opcoesRecurso = [
  "24 de fevereiro de 2025 (segunda-feira)",
  "22 de fevereiro de 2025 (sábado)",
  "21 de fevereiro de 2025 (sexta-feira)",
  "25 de fevereiro de 2025 (terça-feira)",
  "7 de março de 2025 (sexta-feira)",
];
const opcoesIntervalo = [
  "Marcos, 45 minutos; Paula, 30 minutos; Sara, nenhum intervalo obrigatório",
  "Marcos, 30 minutos; Paula, 30 minutos; Sara, 30 minutos",
  "Marcos, 45 minutos; Paula, 45 minutos; Sara, 30 minutos",
  "Marcos, 45 minutos; Paula, 30 minutos; Sara, 30 minutos",
  "Marcos, 30 minutos; Paula, 45 minutos; Sara, nenhum intervalo obrigatório",
];

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  {
    d: "facil",
    e: "Uma norma de segurança diz: “Os extintores de pó químico devem ser inspecionados mensalmente e recarregados a cada 12 meses. A recarga é também obrigatória imediatamente após qualquer utilização, ainda que parcial.” Um extintor foi usado parcialmente ontem, e sua última recarga ocorreu há 3 meses. Com base unicamente no texto, qual providência é exigida?",
    o: ["Recarregá-lo imediatamente, porque houve utilização, ainda que parcial.", "Aguardar a recarga dos 12 meses, porque só se passaram 3 meses.", "Apenas inspecioná-lo no fim do mês, sem recarregar.", "Descartá-lo, porque foi usado parcialmente.", "Recarregá-lo somente se tiver sido usado por completo."],
    x: "O texto traz duas regras de recarga: a periódica, a cada 12 meses, e a imediata, após qualquer utilização, ainda que parcial. As duas valem de forma independente, e basta uma delas para exigir a recarga. Como o extintor foi usado ontem, a segunda regra se aplica, e a recarga é imediata, mesmo que a última tenha sido feita há apenas 3 meses.\n\nAguardar os 12 meses ignora a recarga após uso. Apenas inspecionar não cumpre a obrigação de recarregar. Descartar é uma providência que o texto não prevê. E limitar a recarga ao uso completo contraria a expressão “ainda que parcial”.",
    v: { i: () => ind(["recarregar", "aguardar", "inspecionar", "descartar", "so_se_total"], extintor(true, 3)) },
  },
  {
    d: "facil",
    e: "O manual de um almoxarifado determina: “O estoque de insumos segue o critério PEPS: primeiro a vencer, primeiro a sair. Em cada retirada, deve-se usar o lote de validade mais próxima, desde que ainda esteja válido na data da retirada.” Em 15 de abril, estão em estoque o lote A (validade em 10/05), o lote B (validade em 03/04), o lote C (validade em 28/04) e o lote D (validade em 20/06). Qual lote deve ser retirado?",
    o: opcoesPeps,
    x: "O critério pede o lote de validade mais próxima, mas só entre os que ainda estão válidos na data da retirada. Em 15 de abril, o lote B, com validade em 3 de abril, já venceu e fica fora. Entre os válidos, A (10/05), C (28/04) e D (20/06), a validade mais próxima é a do lote C, em 28 de abril.\n\nO lote B é o de validade mais próxima, mas está vencido, e o texto exige que esteja válido. Os lotes A e D têm validade mais distante. E deixar a escolha ao almoxarife contraria a regra, que define o lote.",
    v: { i: () => {
      const ret = Date.UTC(2025, 3, 15);
      const lotes = { A: Date.UTC(2025, 4, 10), B: Date.UTC(2025, 3, 3), C: Date.UTC(2025, 3, 28), D: Date.UTC(2025, 5, 20) };
      const validos = Object.entries(lotes).filter(([, v]) => v >= ret).sort((a, b) => a[1] - b[1]);
      return opcoesPeps.indexOf("Lote " + validos[0][0]);
    } },
  },
  {
    d: "facil",
    e: "A política de acesso de uma empresa estabelece: “A senha deve ter no mínimo 10 caracteres, incluir pelo menos uma letra maiúscula e pelo menos um número, e não pode conter o nome do usuário.” O usuário se chama Marta. Qual das senhas abaixo atende a todas as exigências?",
    o: opcoesSenha,
    x: "A senha Verde2024Sol tem 12 caracteres, uma maiúscula no início, o número 2024 e não contém marta. Cumpre, portanto, as quatro exigências do texto: tamanho mínimo, maiúscula, número e ausência do nome.\n\nMarta12345678 tem tamanho, maiúscula e número, mas contém o nome do usuário. A senha sol2024verde, toda em minúsculas, é a que falha nesse ponto. SolVerde tem só 8 caracteres e não tem número. E Verde2024 tem maiúscula e número, mas só 9 caracteres, um a menos que o mínimo.",
    v: { i: () => unicoV(opcoesSenha.map((s) => senhaOk(s, "marta"))) },
  },
  {
    d: "facil",
    e: "O manual de um elevador informa: “A capacidade é de 8 pessoas ou 600 kg, prevalecendo o limite que for atingido primeiro.” Entraram 7 pessoas, cada uma com 90 kg. O que se pode afirmar, com base unicamente no texto?",
    o: ["A carga excede o limite, porque as 7 pessoas somam 630 kg, acima de 600 kg.", "A carga está dentro do limite, porque são menos de 8 pessoas.", "A carga excede o limite, porque são mais de 6 pessoas.", "A carga está dentro do limite, porque 630 kg é inferior a 8 vezes 90 kg.", "Nada se pode afirmar, porque o texto não indica o peso máximo."],
    x: "O texto traz dois limites, 8 pessoas e 600 kg, e vale o que for atingido primeiro. Com 7 pessoas, o limite de pessoas não foi alcançado. Mas 7 vezes 90 kg dão 630 kg, acima de 600 kg, e o limite de peso foi atingido primeiro. Por isso a carga excede o limite.\n\nDizer que está dentro porque são menos de 8 pessoas ignora o limite de peso. Falar em mais de 6 pessoas inventa um limite que o texto não tem. A comparação com 8 vezes 90 kg, igual a 720 kg, usa um valor que não é limite. E o texto indica, sim, o peso máximo: 600 kg.",
    v: { i: () => { const pessoas = 7, peso = 7 * 90; const r = pessoas > 8 ? "excede_pessoas" : peso > 600 ? "excede_peso" : "dentro"; return ind(["excede_peso", "dentro", "excede_pessoas", "dentro_630", "indeterminado"], r); } },
  },
  {
    d: "facil",
    e: "O acordo de nível de serviço de uma equipe de suporte prevê: “Os chamados são classificados em três níveis: urgente, com resposta em até 4 horas corridas; normal, com resposta em até 24 horas corridas; e baixo, com resposta em até 72 horas corridas.” Um chamado classificado como normal foi aberto às 15h de uma segunda-feira. Qual é o prazo final de resposta?",
    o: opcoesPrazoChamado,
    x: "O chamado é de nível normal, que tem prazo de até 24 horas corridas. Contadas sem interrupção a partir das 15h de segunda-feira, as 24 horas terminam às 15h de terça-feira. Horas corridas incluem a noite inteira, sem desconto de horário comercial.\n\nSegunda-feira às 19h corresponde ao prazo de 4 horas, do nível urgente. Quarta-feira às 15h somaria 48 horas. Terça-feira às 19h soma 28 horas. E quinta-feira às 15h corresponde ao prazo de 72 horas, do nível baixo.",
    v: { i: () => { const ini = Date.UTC(2025, 2, 10, 15); const fim = new Date(ini + 24 * 3600000); return opcoesPrazoChamado.indexOf(`${DIAS[fim.getUTCDay()]}, às ${fim.getUTCHours()}h`); } },
  },
  {
    d: "facil",
    e: "A norma de elaboração de laudos exige: “As datas devem ser registradas no formato dia/mês/ano, com dois dígitos para o dia, dois para o mês e quatro para o ano, separados por barras (dd/mm/aaaa).” Qual das anotações abaixo respeita o formato exigido?",
    o: opcoesDatas,
    x: "O formato exigido é dd/mm/aaaa: dia e mês com dois dígitos, ano com quatro, separados por barras. A anotação 07/03/2025 respeita as quatro condições: ordem dia, mês, ano, número de dígitos e separador.\n\nA anotação 7/3/25 usa um dígito para o dia e o mês e dois para o ano. A anotação 2025/03/07 inverte a ordem e coloca o ano primeiro. A anotação 07-03-2025 usa hífen no lugar de barra. E 07/03/25 usa dois dígitos para o ano, quando o texto exige quatro.",
    v: { i: () => unicoV(opcoesDatas.map((s) => /^\d{2}\/\d{2}\/\d{4}$/.test(s)))  },
  },
  {
    d: "facil",
    e: "Em um manual de manutenção, lê-se: “Desligar o equipamento da tomada. Aguardar 5 minutos. Remover a tampa lateral.” Qual é o efeito do emprego dos verbos no infinitivo (desligar, aguardar, remover) nesse trecho?",
    o: ["Dar às instruções caráter objetivo e impessoal, em sequência de passos", "Expressar a opinião do redator sobre o equipamento", "Narrar fatos já ocorridos no passado", "Indicar dúvida quanto ao procedimento", "Criar uma comparação entre dois equipamentos"],
    x: "Em manuais, o infinitivo é a forma usual de dar instruções, porque dispensa o sujeito, não se dirige a uma pessoa em particular e apresenta cada passo de modo direto. O resultado é um texto objetivo e impessoal, em que a ordem dos verbos corresponde à ordem das ações.\n\nO infinitivo, aqui, não expressa opinião do redator. Não narra fatos passados, porque indica o que deve ser feito. Não indica dúvida, porque os passos são firmes. E não compara equipamentos, já que o trecho trata de um só.",
  },

  /* ------------------------------------------------------------ médias --- */
  {
    d: "media",
    e: "Uma norma administrativa determina: “O órgão deve responder ao requerimento em até 5 dias úteis, contados a partir do primeiro dia útil seguinte ao do protocolo. Sábados, domingos e feriados não são computados.” Um requerimento foi protocolado na quinta-feira, 6 de março de 2025. Não há feriados no período. Qual é o último dia do prazo?",
    o: opcoesUteis,
    x: "A contagem começa no primeiro dia útil seguinte ao do protocolo. Depois de quinta-feira, 6 de março, o primeiro dia útil é sexta-feira, 7 (1º dia). Sábado e domingo não contam. Segue segunda, 10 (2º), terça, 11 (3º), quarta, 12 (4º) e quinta, 13 (5º). O último dia é 13 de março de 2025.\n\n12 de março seria o 4º dia, e 11 de março, o 3º. 14 de março seria o 6º dia. E 15 de março é sábado, dia que o texto manda não computar.",
    v: { i: () => { let d = new Date(Date.UTC(2025, 2, 6)); let n = 0; while (n < 5) { d = somaDias(d, 1); if (util(d)) n++; } return opcoesUteis.indexOf(`${d.getUTCDate()} de ${MESES[d.getUTCMonth()]} de ${d.getUTCFullYear()}`); } },
  },
  {
    d: "media",
    e: "Uma especificação de qualidade determina: “Cada lote de componentes é aprovado se a massa medida estiver dentro de uma tolerância de ±2% em relação ao valor nominal; fora disso, é rejeitado.” O valor nominal é 500 g. Foram medidas as massas dos lotes P (489 g), Q (509 g), R (511 g) e S (495 g). Quais lotes são aprovados?",
    o: opcoesTol,
    x: "A tolerância de ±2% sobre 500 g é de 10 g, e a faixa aceita vai de 490 g a 510 g. O lote Q, com 509 g, está dentro. O lote S, com 495 g, também. O lote P, com 489 g, fica 1 g abaixo do mínimo. E o lote R, com 511 g, fica 1 g acima do máximo. São aprovados Q e S.\n\nAs demais respostas incluem P ou R, que estão fora da faixa, ou omitem Q ou S, que estão dentro. O erro mais comum é aceitar P e R, por estarem muito perto do limite.",
    v: { i: () => { const nom = 500; const lotes = { P: 489, Q: 509, R: 511, S: 495 }; const ap = Object.entries(lotes).filter(([, m]) => Math.abs(m - nom) <= nom * 0.02).map(([k]) => k); return opcoesTol.indexOf(fmtLista(ap)); } },
  },
  {
    d: "media",
    e: "Um regulamento estabelece: “A isenção será concedida ao requerente que, cumulativamente, (I) tenha renda familiar de até 3 salários mínimos e (II) resida no município há mais de 2 anos.” Os requerentes são: Ana (renda de 2,5 salários mínimos; 3 anos de residência), Beto (3 salários mínimos; 2 anos exatos), Carla (4 salários mínimos; 5 anos) e Davi (1 salário mínimo; 1 ano). Quem terá a isenção?",
    o: opcoesCumul,
    x: "As duas condições são cumulativas: é preciso cumprir a renda de até 3 salários mínimos e a residência de mais de 2 anos. Ana tem renda de 2,5 e 3 anos de residência, e cumpre as duas. Beto tem renda de 3, que cumpre (até 3 inclui o 3), mas residência de 2 anos exatos, e “mais de 2 anos” exclui o 2. Carla tem 5 anos, mas renda de 4, acima do limite. Davi tem renda de 1, mas apenas 1 ano de residência.\n\nSó Ana cumpre as duas. Beto falha na segunda por um ano exato, e a resposta “Ana e Beto” erra por desconsiderar a expressão “mais de”.",
    v: { i: () => { const pessoas = { Ana: [2.5, 3], Beto: [3, 2], Carla: [4, 5], Davi: [1, 1] }; const ok = Object.entries(pessoas).filter(([, [r, a]]) => r <= 3 && a > 2).map(([k]) => k); return opcoesCumul.indexOf(fmtLista(ok)); } },
  },
  {
    d: "media",
    e: "Uma norma de segurança diz: “O acesso à sala de servidores é permitido a quem possuir crachá de nível 3 ou superior, ou autorização escrita do gerente de TI.” Lia tem crachá de nível 2 e nenhuma autorização. Rui tem crachá de nível 2 e autorização escrita. Eva tem crachá de nível 1 e autorização escrita. Gil tem crachá de nível 3 e nenhuma autorização. Noé tem crachá de nível 4 e nenhuma autorização. Quem tem o acesso permitido?",
    o: opcoesAlt,
    x: "As duas condições são alternativas, ligadas por ou: basta cumprir uma delas. Rui e Eva têm autorização escrita, e por isso têm acesso, mesmo com crachá de nível baixo. Gil, de nível 3, e Noé, de nível 4, têm o crachá exigido, mesmo sem autorização. Lia não cumpre nenhuma das duas condições: seu nível é 2, e não tem autorização.\n\nPor isso têm acesso Rui, Eva, Gil e Noé. As demais respostas restringem o acesso a um dos grupos, ou incluem Lia, que não cumpre nenhuma das condições.",
    v: { i: () => { const ps = { Lia: [2, false], Rui: [2, true], Eva: [1, true], Gil: [3, false], Noé: [4, false] }; const ok = Object.entries(ps).filter(([, [n, a]]) => n >= 3 || a).map(([k]) => k); return opcoesAlt.indexOf(fmtLista(ok)); } },
  },
  {
    d: "media",
    e: "O regimento de um laboratório estabelece: “É vedado o uso de aparelhos celulares no interior do laboratório, salvo para o registro fotográfico de amostras, mediante autorização prévia do responsável.” Qual das condutas abaixo é permitida?",
    o: ["Fotografar uma amostra com autorização prévia do responsável.", "Fotografar uma amostra sem autorização prévia do responsável.", "Ligar para um colega, com autorização prévia do responsável.", "Ouvir música com fones de ouvido, com autorização prévia do responsável.", "Responder a mensagens de trabalho durante o expediente."],
    x: "A regra geral é a proibição do uso do celular no laboratório, com uma única exceção: o registro fotográfico de amostras, desde que haja autorização prévia. Só a conduta que reúne as duas condições, foto de amostra e autorização, é permitida.\n\nFotografar sem autorização cumpre a finalidade, mas não a condição. Ligar para um colega e ouvir música não são o registro fotográfico, e a autorização não os torna permitidos. E responder a mensagens é uso de celular fora da exceção. A autorização só vale para o que a exceção prevê.",
    v: { i: () => { const condutas = [{ foto: true, aut: true }, { foto: true, aut: false }, { foto: false, aut: true }, { foto: false, aut: true }, { foto: false, aut: false }]; return unicoV(condutas.map((c) => c.foto && c.aut)); } },
  },
  {
    d: "media",
    e: "Um contrato prevê: “Se o atraso na entrega for de até 5 dias, aplica-se multa de 1% ao dia sobre o valor do contrato. Se o atraso for superior a 5 dias, aplica-se, em lugar dessa, multa fixa de 10% do valor do contrato, acrescida de 0,5% ao dia sobre o valor do contrato apenas pelos dias que excederem os 5 primeiros.” O contrato vale R$ 20.000,00, e a entrega atrasou 8 dias. Qual é o valor da multa?",
    o: opcoesMulta.map(reais),
    x: "Como o atraso foi de 8 dias, superior a 5, aplica-se o segundo regime, que substitui o primeiro. A multa fixa é de 10% de R$ 20.000,00, ou seja, R$ 2.000,00. Os dias que excederam os 5 primeiros são 3, e cada um custa 0,5% de R$ 20.000,00, ou R$ 100,00, o que dá R$ 300,00. A multa total é R$ 2.300,00.\n\nR$ 1.600,00 usa 1% ao dia por 8 dias, regime que não vale acima de 5 dias. R$ 2.000,00 esquece o acréscimo. R$ 2.800,00 aplica os 0,5% a todos os 8 dias. E R$ 3.300,00 soma o regime anterior, o que o texto proíbe ao dizer “em lugar dessa”.",
    v: { i: () => opcoesMulta.indexOf(multaCerta(20000, 8)) },
  },
  {
    d: "media",
    e: "Uma norma de ensaios estabelece: “O lote de concreto é aprovado quando a resistência média dos corpos de prova for igual ou superior a 30 MPa e nenhum corpo de prova individual apresentar resistência inferior a 27 MPa.” Em um lote, os quatro corpos de prova apresentaram 31, 32, 26 e 35 MPa. Qual é a conclusão correta?",
    o: ["Reprovado, porque um corpo de prova ficou abaixo de 27 MPa, embora a média seja 31 MPa.", "Aprovado, porque a média é 31 MPa, superior a 30 MPa.", "Reprovado, porque a média é inferior a 30 MPa.", "Aprovado, porque a maioria dos corpos de prova supera 30 MPa.", "Aprovado, porque 26 MPa se aproxima de 27 MPa."],
    x: "A aprovação exige duas condições ao mesmo tempo: média de pelo menos 30 MPa e nenhum valor abaixo de 27 MPa. A média dos quatro valores é (31 + 32 + 26 + 35) / 4 = 31 MPa, e cumpre a primeira. Mas o corpo de prova de 26 MPa está abaixo de 27 MPa, e a segunda condição não é cumprida. Logo, o lote é reprovado.\n\nAprovar pela média ignora a segunda condição. Dizer que a média é inferior a 30 está errado, pois é 31. A maioria acima de 30 não é critério do texto. E a proximidade de 26 a 27 não substitui o mínimo exigido.",
    v: { i: () => { const v = [31, 32, 26, 35]; const media = v.reduce((a, b) => a + b, 0) / v.length; const min = Math.min(...v); const r = !(media >= 30) ? "reprovado_media" : min < 27 ? "reprovado_min" : "aprovado"; return ind(["reprovado_min", "aprovado", "reprovado_media", "aprovado_maioria", "aprovado_proximo"], r); } },
  },
  {
    d: "media",
    e: "A ficha técnica de uma bomba informa: “vazão máxima de 1,2 L/s”. Considerando que 1 m³ equivale a 1.000 L e que 1 hora tem 3.600 s, qual é essa vazão máxima expressa em m³/h?",
    o: opcoesVazao.map((n) => n.toLocaleString("pt-BR") + " m³/h"),
    x: "Uma vazão de 1,2 litros por segundo corresponde, em uma hora, a 1,2 × 3.600 = 4.320 litros. Como 1 m³ equivale a 1.000 litros, 4.320 litros são 4,32 m³. A vazão máxima é, portanto, 4,32 m³/h.\n\n0,72 m³/h resulta de multiplicar por 60, e não por 3.600. 43,2 m³/h erra uma casa decimal. 72 m³/h multiplica por 60 duas vezes e esquece de converter litros em metros cúbicos. E 0,432 m³/h divide por 10 a mais. Em conversões de unidade, convém conferir a ordem de grandeza do resultado.",
    v: { i: () => opcoesVazao.findIndex((n) => Math.abs(n - (1.2 * 3600) / 1000) < 1e-9) },
  },
  {
    d: "media",
    e: "O procedimento de manutenção de um painel elétrico diz: “Antes de abrir o painel, o técnico deve desligar a chave geral. Depois de desligá-la, deve aguardar 5 minutos para a descarga dos capacitores. Somente após esse intervalo é permitido abrir o painel.” Qual sequência de ações está de acordo com o texto?",
    o: opcoesSeq.map((s) => ({ desligar: "desligar a chave geral", aguardar: "aguardar 5 minutos", abrir: "abrir o painel" })).map((m, i) => opcoesSeq[i].map((k) => m[k]).join(", ").replace(/^./, (c) => c.toUpperCase())),
    x: "O texto impõe uma ordem: primeiro desligar a chave geral, depois aguardar 5 minutos, e somente então abrir o painel. A sequência correta é, portanto, desligar a chave geral, aguardar 5 minutos e abrir o painel.\n\nAbrir o painel antes de desligar a chave contraria “antes de abrir”. Aguardar antes de desligar inverte as duas primeiras etapas, e a espera só se conta depois do desligamento. Abrir o painel antes dos 5 minutos contraria “somente após esse intervalo”. E abrir o painel antes de qualquer etapa desrespeita a ordem inteira.",
    v: { i: () => unicoV(opcoesSeq.map((s) => s.indexOf("desligar") < s.indexOf("aguardar") && s.indexOf("aguardar") < s.indexOf("abrir"))) },
  },
  {
    d: "media",
    e: "Um relatório de qualidade informa: “Em um lote de 1.600 peças, a taxa de falhas medida foi de 2,5%. Do total de peças que falharam, 60% apresentaram problemas na solda.” Quantas peças falharam por problemas na solda?",
    o: opcoesSolda.map(String),
    x: "O número de peças que falharam é 2,5% de 1.600, ou seja, 0,025 × 1.600 = 40 peças. Desse total, 60% falharam por problemas na solda, e 0,6 × 40 = 24 peças. A pergunta pede o resultado do segundo cálculo, e não do primeiro.\n\n40 é o total de peças que falharam, e não só as de solda. 960 aplica 60% ao lote inteiro de 1.600. 16 corresponde a 40% das falhas, as que não foram de solda. E 36 não resulta de nenhuma das duas porcentagens aplicadas corretamente.",
    v: { i: () => opcoesSolda.indexOf(Math.round(1600 * 0.025 * 0.6)) },
  },
  {
    d: "media",
    e: "Uma tabela do relatório de perdas informa o percentual de perda por setor: setor A, 12%; setor B, 8%; setor C, 20%. Qual setor apresenta perda acima da média simples dos três setores?",
    o: opcoesMedia,
    x: "A média simples é (12 + 8 + 20) / 3 = 40 / 3, aproximadamente 13,3%. Só o setor C, com 20%, está acima dessa média. O setor A, com 12%, fica abaixo, por pouco. E o setor B, com 8%, fica bem abaixo.\n\nA resposta A e C inclui o setor A, que tem 12%, abaixo de 13,3%. Dizer que todos estão acima contraria a própria definição de média, pois nem todos os valores podem superar a média. A confusão mais comum é comparar com 12%, o valor central, em vez da média.",
    v: { i: () => { const p = { A: 12, B: 8, C: 20 }; const m = (p.A + p.B + p.C) / 3; const acima = Object.entries(p).filter(([, v]) => v > m).map(([k]) => k); return opcoesMedia.indexOf(acima.length === 3 ? "Todos" : fmtLista(acima)); } },
  },
  {
    d: "media",
    e: "Um relatório técnico afirma: “Em ambiente marinho, a corrosão do aço é acelerada pela presença de cloretos. Em um levantamento com 40 estruturas, as 20 revestidas com tinta epóxi e inspecionadas anualmente apresentaram perda de espessura inferior a 0,1 mm por ano, e as 20 sem revestimento apresentaram perda superior a 0,5 mm por ano.” Qual conclusão é sustentada pelo texto?",
    o: ["No levantamento, as estruturas revestidas e inspecionadas perderam menos espessura que as não revestidas.", "O revestimento epóxi elimina totalmente a corrosão em ambiente marinho.", "A inspeção anual, isoladamente, foi o que reduziu a perda de espessura.", "As estruturas sem revestimento perderam espessura porque não havia cloretos no ambiente.", "Todas as estruturas de aço sofrem perda superior a 0,5 mm por ano no mar."],
    x: "O texto compara dois grupos do levantamento: as 20 estruturas revestidas e inspecionadas, com perda inferior a 0,1 mm por ano, e as 20 sem revestimento, com perda superior a 0,5 mm por ano. O que se sustenta é a comparação: as primeiras perderam menos espessura que as segundas.\n\nDizer que o revestimento elimina totalmente a corrosão exagera, pois houve perda, ainda que pequena. Atribuir o resultado só à inspeção anual ignora o revestimento. Afirmar que não havia cloretos contradiz o texto, que fala da presença deles. E dizer que todas as estruturas perdem mais de 0,5 mm generaliza o resultado de um grupo.",
  },
  {
    d: "media",
    e: "Uma instrução de manuseio determina: “Todos os equipamentos com massa superior a 20 kg devem ser movimentados por duas pessoas.” Qual das afirmações abaixo decorre necessariamente desse texto?",
    o: ["Um equipamento de 25 kg deve ser movimentado por duas pessoas.", "Um equipamento de 15 kg não pode ser movimentado por duas pessoas.", "Um equipamento de 20 kg deve ser movimentado por duas pessoas.", "Somente equipamentos acima de 20 kg podem ser movimentados por duas pessoas.", "Nenhum equipamento pode ser movimentado por uma só pessoa."],
    x: "A regra obriga duas pessoas para equipamentos com massa superior a 20 kg. Um equipamento de 25 kg está nessa faixa, e por isso a afirmação decorre do texto.\n\nO texto não proíbe duas pessoas para equipamentos leves, e por isso a afirmação sobre 15 kg não decorre dele. Um equipamento de exatamente 20 kg não é superior a 20 kg, e a regra não o alcança. A expressão “somente” transforma a regra em exclusividade, o que o texto não diz. E afirmar que nenhum equipamento é movimentado por uma só pessoa amplia a regra para todas as massas.",
    v: { i: () => { const massas = [15, 20, 25]; const mundos = []; for (let m = 0; m < 8; m++) mundos.push(Object.fromEntries(massas.map((x, k) => [x, (m >> k) & 1 ? 2 : 1]))); const validos = mundos.filter((w) => massas.every((x) => (x > 20 ? w[x] === 2 : true))); const enunc = [(w) => w[25] === 2, (w) => w[15] !== 2, (w) => w[20] === 2, (w) => massas.every((x) => w[x] !== 2 || x > 20), (w) => massas.every((x) => w[x] === 2)]; return unicoV(enunc.map((f) => validos.every(f))); } },
  },

  /* ---------------------------------------------------------- difíceis --- */
  {
    d: "dificil",
    e: "A norma de viagens de um órgão determina: “A hospedagem é reembolsada até o limite de R$ 300,00 por diária; as refeições, até R$ 80,00 por dia. Despesas com bebidas alcoólicas nunca são reembolsadas e não entram no cálculo do limite das refeições.” Uma viagem de 2 dias teve hospedagem de R$ 280,00 e R$ 340,00. As refeições custaram R$ 75,00 no primeiro dia e R$ 95,00 no segundo, dos quais R$ 20,00 foram de bebida alcoólica. Qual é o valor total a ser reembolsado?",
    o: opcoesReemb.map(reais),
    x: "Na hospedagem, a primeira diária (R$ 280,00) está abaixo do limite e é reembolsada por inteiro. A segunda (R$ 340,00) passa de R$ 300,00 e é reembolsada até o limite. Soma: 280 + 300 = R$ 580,00. Nas refeições, o primeiro dia (R$ 75,00) está abaixo de R$ 80,00. No segundo, retiram-se R$ 20,00 de bebida alcoólica e sobram R$ 75,00, também abaixo do limite. Soma: 75 + 75 = R$ 150,00. Total: R$ 730,00.\n\nR$ 735,00 aplica o limite de R$ 80,00 aos R$ 95,00 sem retirar a bebida. R$ 790,00 não aplica limites. R$ 770,00 aplica a retirada da bebida, mas não o limite de hospedagem. E R$ 580,00 considera só a hospedagem.",
    v: { i: () => { const hosp = [280, 340]; const ref = [{ t: 75, a: 0 }, { t: 95, a: 20 }]; const total = hosp.reduce((s, h) => s + Math.min(h, 300), 0) + ref.reduce((s, r) => s + Math.min(r.t - r.a, 80), 0); return opcoesReemb.indexOf(total); } },
  },
  {
    d: "dificil",
    e: "Um edital estabelece: “O prazo para recurso é de 15 dias corridos, contados do dia seguinte à publicação da decisão. Se o último dia cair em sábado, domingo ou feriado, o prazo é prorrogado para o primeiro dia útil seguinte.” A decisão foi publicada na sexta-feira, 7 de fevereiro de 2025, e não há feriados no período. Qual é o último dia para recorrer?",
    o: opcoesRecurso,
    x: "A contagem começa no dia seguinte à publicação, sábado, 8 de fevereiro, que é o 1º dia. O 15º dia é 22 de fevereiro de 2025, um sábado. Como o último dia cai em sábado, o prazo é prorrogado para o primeiro dia útil seguinte, que é segunda-feira, 24 de fevereiro de 2025.\n\n22 de fevereiro é o 15º dia, mas cai em sábado e foi prorrogado. 21 de fevereiro seria o 14º dia. 25 de fevereiro prorroga um dia além do necessário. E 7 de março não corresponde a nenhuma contagem possível do texto.",
    v: { i: () => { let d = somaDias(new Date(Date.UTC(2025, 1, 7)), 15); while (!util(d)) d = somaDias(d, 1); return opcoesRecurso.indexOf(`${d.getUTCDate()} de ${MESES[d.getUTCMonth()]} de ${d.getUTCFullYear()} (${DIAS[d.getUTCDay()]})`); } },
  },
  {
    d: "dificil",
    e: "Duas normas de uma empresa tratam do intervalo para refeição. A norma geral estabelece: “Para jornadas superiores a 6 horas, o intervalo mínimo é de 30 minutos.” A norma específica do setor de segurança, que prevalece sobre a geral nos casos que trata, estabelece: “Para jornadas superiores a 8 horas, o intervalo mínimo é de 45 minutos; para jornadas de 6 a 8 horas, mantém-se o intervalo de 30 minutos.” Marcos trabalha no setor de segurança, com jornada de 9 horas. Paula trabalha no setor administrativo, com jornada de 9 horas. Sara trabalha no setor administrativo, com jornada de 5 horas. Qual das opções indica corretamente os intervalos mínimos?",
    o: opcoesIntervalo,
    x: "Para Marcos, do setor de segurança, prevalece a norma específica, e a jornada de 9 horas é superior a 8, o que dá intervalo mínimo de 45 minutos. Paula, do setor administrativo, não está sob a norma específica, e fica na geral: jornada de 9 horas, superior a 6, intervalo de 30 minutos. Sara tem jornada de 5 horas, que não supera 6, e a norma geral não lhe impõe intervalo obrigatório.\n\nAs demais respostas erram ao aplicar 30 minutos a Marcos, 45 minutos a Paula, ou ao impor 30 minutos a Sara, cuja jornada de 5 horas não é superior a 6.",
    v: { i: () => { const iv = (setor, h) => (setor === "seg" ? (h > 8 ? 45 : h >= 6 ? 30 : 0) : h > 6 ? 30 : 0); const f = (n) => (n === 0 ? "nenhum intervalo obrigatório" : n + " minutos"); const s = `Marcos, ${f(iv("seg", 9))}; Paula, ${f(iv("adm", 9))}; Sara, ${f(iv("adm", 5))}`; return opcoesIntervalo.indexOf(s); } },
  },
  {
    d: "dificil",
    e: "Uma norma de arquivamento dispõe: “Nenhum relatório será arquivado sem a assinatura do responsável técnico, salvo se tiver sido emitido em caráter de urgência, caso em que a assinatura poderá ser colhida em até 48 horas após o arquivamento.” Qual das situações abaixo contraria o texto?",
    o: ["Relatório comum arquivado sem assinatura, sob a promessa de colhê-la depois.", "Relatório de urgência arquivado hoje, com assinatura colhida no dia seguinte.", "Relatório comum arquivado após a assinatura do responsável técnico.", "Relatório de urgência arquivado após a assinatura do responsável técnico.", "Relatório de urgência arquivado hoje, com assinatura colhida 40 horas depois."],
    x: "A regra geral proíbe arquivar sem assinatura. A exceção vale só para relatórios de urgência, cuja assinatura pode ser colhida em até 48 horas depois do arquivamento. O relatório comum arquivado sem assinatura não se enquadra na exceção, e por isso contraria o texto, mesmo que a assinatura seja prometida para depois.\n\nO relatório de urgência com assinatura colhida no dia seguinte, ou 40 horas depois, está dentro das 48 horas. O relatório comum assinado antes do arquivamento cumpre a regra geral. E o relatório de urgência assinado antes também cumpre a regra, pois a exceção é uma possibilidade, e não uma obrigação.",
    v: { i: () => { const c = [{ urg: false, antes: false, h: null }, { urg: true, antes: false, h: 24 }, { urg: false, antes: true, h: null }, { urg: true, antes: true, h: null }, { urg: true, antes: false, h: 40 }]; const viola = (x) => !x.antes && (!x.urg || x.h > 48); return unicoV(c.map(viola)); } },
  },
  {
    d: "dificil",
    e: "Uma norma determina: “A válvula deve ser substituída quando a pressão superar 12 bar.” Qual das reescritas abaixo altera o sentido técnico da regra?",
    o: ["A válvula deve ser substituída quando a pressão for igual ou superior a 12 bar.", "A válvula deve ser substituída quando a pressão for maior que 12 bar.", "A válvula deve ser substituída quando a pressão exceder 12 bar.", "A válvula deve ser substituída caso a pressão ultrapasse 12 bar.", "A válvula deve ser substituída se a pressão estiver acima de 12 bar."],
    x: "“Superar 12 bar” significa ficar acima de 12 bar: a pressão de exatamente 12 bar não aciona a substituição. As expressões maior que, exceder, ultrapassar e estar acima de equivalem a superar, e mantêm esse limite.\n\nA expressão igual ou superior a 12 bar inclui o valor de 12 bar, que a norma original deixa de fora. Com uma pressão de exatamente 12 bar, a norma original não manda substituir a válvula, e a reescrita manda. É essa diferença no limite que altera o sentido técnico da regra.",
    v: { i: () => { const base = (p) => p > 12; const reesc = [(p) => p >= 12, (p) => p > 12, (p) => p > 12, (p) => p > 12, (p) => p > 12]; return unicoV(reesc.map((f) => f(12) !== base(12))); } },
  },
];
