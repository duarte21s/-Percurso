/* Rascunho — Raciocínio lógico / Tabelas-verdade e equivalências (parte 2).
   Completa as 30 que já existiam com o que elas não cobriam: contradição e
   contingência, leis distributiva, de absorção e de exportação, leitura de
   coluna e dedução de valores. Conferência por tabela-verdade. */

export const materia = "raciocinio-logico";
export const tema = "Tabelas-verdade e equivalências";
export const arquivo = "raciocinio-logico__tabelas-verdade-e-equivalencias__parte-2";

const tabela = (n) => Array.from({ length: 2 ** n }, (_, m) => Array.from({ length: n }, (_, k) => Boolean((m >> k) & 1)));
const eqv = (f, g, n) => tabela(n).every((a) => f(...a) === g(...a));
const unica = (alvo, ops, n) => { const ok = ops.map((g, i) => (eqv(alvo, g, n) ? i : -1)).filter((i) => i >= 0); return ok.length === 1 ? ok[0] : -1; };
const unicaNao = (alvo, ops, n) => { const ok = ops.map((g, i) => (eqv(alvo, g, n) ? -1 : i)).filter((i) => i >= 0); return ok.length === 1 ? ok[0] : -1; };
const unicoV = (arr) => { const ok = arr.map((b, i) => (b ? i : -1)).filter((i) => i >= 0); return ok.length === 1 ? ok[0] : -1; };
const imp = (a, b) => !a || b;
const contradicao = (f, n) => tabela(n).every((a) => !f(...a));
const tautologia = (f, n) => tabela(n).every((a) => f(...a));
const conta = (f, n) => tabela(n).filter((a) => f(...a)).length;

export const questoes = [
  {
    d: "facil",
    e: "Uma proposição composta é chamada de contradição quando é falsa em todas as linhas da tabela-verdade. Qual das proposições abaixo é uma contradição?",
    o: ["(p → q) ∧ (p ∧ ~q)", "(p → q) ∨ (p ∧ ~q)", "p ∧ (p ∨ q)", "~(p ∧ ~p)", "(p ∧ q) → p"],
    x: "A proposição (p → q) ∧ (p ∧ ~q) junta uma condicional com a sua própria negação — p ∧ ~q é exatamente o caso que torna p → q falsa. Em qualquer linha, uma das duas partes é falsa, então a conjunção é sempre F.\n\nTrocar o “∧” central por “∨” produz o oposto: uma proposição sempre verdadeira, porque em cada linha vale a condicional ou vale a sua negação. A forma p ∧ (p ∨ q) é contingente — equivale a p pela lei de absorção. E ~(p ∧ ~p) e (p ∧ q) → p são tautologias clássicas: a primeira nega uma contradição, a segunda é a regra da simplificação. Confundir tautologia com contradição é o erro que essa questão costuma cobrar.",
    v: { i: () => unicoV([contradicao((p, q) => imp(p, q) && p && !q, 2), contradicao((p, q) => imp(p, q) || (p && !q), 2), contradicao((p, q) => p && (p || q), 2), contradicao((p) => !(p && !p), 1), contradicao((p, q) => imp(p && q, p), 2)]) },
  },
  {
    d: "facil",
    e: "Como se classifica a proposição (p → q) ∨ r quanto aos valores que assume na tabela-verdade?",
    o: [
      "Contingência, porque é falsa apenas na linha p = V, q = F, r = F",
      "Tautologia, porque a disjunção com r a torna sempre verdadeira",
      "Contradição, porque a condicional e a disjunção se anulam",
      "Contingência, porque é verdadeira apenas quando r é verdadeira",
      "Tautologia, porque toda condicional é verdadeira quando o antecedente é falso",
    ],
    x: "Para a disjunção falhar, as duas partes precisam ser falsas: r falsa e p → q falsa. A condicional só é falsa com p = V e q = F. Existe, portanto, exatamente uma linha falsa — (V, F, F) — e sete verdadeiras. Uma proposição com linhas V e linhas F é uma contingência.\n\nChamar de tautologia supondo que r “salva” a disjunção esquece que r também pode ser falsa. O argumento de que a condicional é verdadeira com antecedente falso é correto, mas só cobre as linhas com p falsa. Contradição exigiria falsidade em todas as linhas. E a contingência justificada por “só é verdadeira quando r é verdadeira” erra a contagem: com r falsa, a proposição ainda vale sempre que p → q vale.",
    v: { i: () => { const f = (p, q, r) => imp(p, q) || r; const falsas = tabela(3).filter((a) => !f(...a)); const eh = falsas.length === 1 && falsas[0][0] === true && falsas[0][1] === false && falsas[0][2] === false; const soComR = tabela(3).every(([p, q, r]) => f(p, q, r) === r); return unicoV([eh && !tautologia(f, 3) && !contradicao(f, 3), tautologia(f, 3), contradicao(f, 3), soComR, tautologia(f, 3)]); } },
  },
  {
    d: "media",
    e: "Pela lei distributiva, a proposição p ∧ (q ∨ r) é equivalente a qual das expressões abaixo?",
    o: ["(p ∧ q) ∨ (p ∧ r)", "(p ∨ q) ∧ (p ∨ r)", "(p ∧ q) ∨ r", "p ∧ q ∧ r", "(p ∨ q) ∧ r"],
    x: "A conjunção se distribui sobre a disjunção como a multiplicação sobre a soma: p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r). Nas duas formas, a proposição é verdadeira exatamente quando p vale e pelo menos uma entre q e r vale.\n\nA forma (p ∨ q) ∧ (p ∨ r) é a outra lei distributiva, que vale para p ∨ (q ∧ r); aplicá-la aqui troca os conectivos. (p ∧ q) ∨ r esquece de distribuir p sobre r e fica verdadeira com p falsa e r verdadeira. p ∧ q ∧ r exige q e r juntos, quando basta um. E (p ∨ q) ∧ r é verdadeira com p falsa, q verdadeira e r verdadeira, linha em que a original é falsa.",
    v: { i: () => unica((p, q, r) => p && (q || r), [(p, q, r) => (p && q) || (p && r), (p, q, r) => (p || q) && (p || r), (p, q, r) => (p && q) || r, (p, q, r) => p && q && r, (p, q, r) => (p || q) && r], 3) },
  },
  {
    d: "media",
    e: "A lei da absorção permite simplificar p ∨ (p ∧ q). Qual é a forma mais simples equivalente a essa proposição?",
    o: ["p", "q", "p ∧ q", "p ∨ q", "~p ∨ q"],
    x: "Sempre que p é verdadeira, p ∨ (p ∧ q) é verdadeira pela primeira parte. Sempre que p é falsa, p ∧ q também é falsa, e a disjunção inteira cai para F. O valor final acompanha p em todas as linhas: p ∨ (p ∧ q) ≡ p. É a lei da absorção — a parte p ∧ q não acrescenta nada, porque já está contida em p.\n\nResponder p ∧ q ou p ∨ q é tratar a expressão como se o conectivo externo ou interno pudesse ser descartado. A primeira falha em p = V, q = F; a segunda, em p = F, q = V. Já q e ~p ∨ q ignoram o papel de p: com p = V e q = F, a expressão original é V e as duas são F.",
    v: { i: () => unica((p, q) => p || (p && q), [(p) => p, (p, q) => q, (p, q) => p && q, (p, q) => p || q, (p, q) => !p || q], 2) },
  },
  {
    d: "dificil",
    e: "Pela lei da exportação, a condicional (p ∧ q) → r é equivalente a qual das proposições abaixo?",
    o: ["p → (q → r)", "(p → q) → r", "(p → r) ∧ (q → r)", "(p ∧ r) → q", "p ∧ (q → r)"],
    x: "Dizer “se p e q, então r” é o mesmo que dizer “se p, então (se q, então r)”: nos dois casos, a única linha falsa é p = V, q = V, r = F. Essa é a lei da exportação: (p ∧ q) → r ≡ p → (q → r).\n\nA forma (p → q) → r desloca os parênteses e muda o sentido: com p falsa e r falsa ela é falsa, enquanto a original é verdadeira. (p → r) ∧ (q → r) é a equivalência correta de (p ∨ q) → r, outra proposição — ela exige r sempre que p OU q vale. Trocar q e r de lugar, em (p ∧ r) → q, cria outra condicional. E p ∧ (q → r) obriga p a ser verdadeira, o que a original não faz.",
    v: { i: () => unica((p, q, r) => imp(p && q, r), [(p, q, r) => imp(p, imp(q, r)), (p, q, r) => imp(imp(p, q), r), (p, q, r) => imp(p, r) && imp(q, r), (p, q, r) => imp(p && r, q), (p, q, r) => p && imp(q, r)], 3) },
  },
  {
    d: "media",
    e: "A regra “Se o pedido for aprovado, haverá compra e instalação” pode ser reescrita como uma conjunção de duas condicionais. Qual é a forma equivalente?",
    o: [
      "Se o pedido for aprovado, haverá compra; e, se o pedido for aprovado, haverá instalação",
      "Se o pedido for aprovado, haverá compra; ou, se o pedido for aprovado, haverá instalação",
      "Se houver compra, o pedido foi aprovado; e, se houver instalação, o pedido foi aprovado",
      "Se houver compra e instalação, o pedido foi aprovado",
      "O pedido será aprovado, e haverá compra ou instalação",
    ],
    x: "A regra tem a forma p → (q ∧ r). Uma condicional com conjunção no consequente se desdobra em duas condicionais com o mesmo antecedente: p → (q ∧ r) ≡ (p → q) ∧ (p → r). Aprovado o pedido, as duas consequências são exigidas, uma a uma.\n\nTrocar o “e” central por “ou” enfraquece a regra: bastaria uma das consequências. As versões que começam por “se houver compra…” invertem a direção das condicionais — são recíprocas, não equivalentes. E a última opção afirma que o pedido será aprovado, algo que a regra nunca diz: ela só descreve o que ocorre SE ele for aprovado.",
    v: { i: () => unica((p, q, r) => imp(p, q && r), [(p, q, r) => imp(p, q) && imp(p, r), (p, q, r) => imp(p, q) || imp(p, r), (p, q, r) => imp(q, p) && imp(r, p), (p, q, r) => imp(q && r, p), (p, q, r) => p && (q || r)], 3) },
  },
  {
    d: "dificil",
    e: "Qual das proposições abaixo é equivalente a (p ∨ q) → r?",
    o: ["(p → r) ∧ (q → r)", "(p → r) ∨ (q → r)", "p → (q → r)", "(p ∧ q) → r", "r → (p ∨ q)"],
    x: "Se “p ou q” leva a r, então cada uma delas, sozinha, também leva a r: (p ∨ q) → r ≡ (p → r) ∧ (q → r). A original só falha quando r é falsa e pelo menos uma entre p e q é verdadeira — exatamente quando uma das duas condicionais da conjunção falha.\n\nCom “∨” no lugar do “∧”, bastaria uma das condicionais valer; em p = V, q = F, r = F a disjunção é verdadeira (por q → r) e a original é falsa. As formas p → (q → r) e (p ∧ q) → r são equivalentes entre si (exportação), mas exigem p E q para disparar r — mais fracas que a original. E r → (p ∨ q) é a recíproca.",
    v: { i: () => unica((p, q, r) => imp(p || q, r), [(p, q, r) => imp(p, r) && imp(q, r), (p, q, r) => imp(p, r) || imp(q, r), (p, q, r) => imp(p, imp(q, r)), (p, q, r) => imp(p && q, r), (p, q, r) => imp(r, p || q)], 3) },
  },
  {
    d: "media",
    e: "Na tabela-verdade completa da proposição (p ∨ q) ∧ ~r, em quantas das oito linhas o resultado é verdadeiro?",
    o: ["3", "4", "6", "2", "7"],
    x: "Para a conjunção ser verdadeira, as duas partes precisam valer. ~r exige r falsa, o que acontece em 4 das 8 linhas. Dentro dessas 4, p ∨ q é falsa só na linha em que p e q são ambas falsas. Sobram 4 − 1 = 3 linhas verdadeiras.\n\nQuem responde 4 contou todas as linhas com r falsa, esquecendo a exigência sobre p ∨ q. O 6 é o número de linhas em que p ∨ q vale (3 combinações de p e q, vezes 2 valores de r), sem considerar ~r. E 7 costuma sair de somar as linhas verdadeiras de cada parte, tratando o “∧” como se fosse “∨”. A contagem honesta é sempre filtrar linha a linha pelas duas condições ao mesmo tempo.",
    v: { n: () => conta((p, q, r) => (p || q) && !r, 3), o: [3, 4, 6, 2, 7] },
  },
  {
    d: "media",
    e: "Considere a ordem usual das linhas (p, q) = (V, V), (V, F), (F, V), (F, F). Uma proposição composta assume, nessas linhas, os valores V, F, V, V. Qual proposição é essa?",
    o: ["p → q", "q → p", "p ∨ q", "~p ∧ q", "p ↔ q"],
    x: "A coluna tem uma única linha falsa, a segunda: p verdadeira e q falsa. Esse é o retrato da condicional p → q, que só falha quando o antecedente vale e o consequente não.\n\nA recíproca q → p tem a linha falsa em (F, V), a terceira. A disjunção p ∨ q é falsa só em (F, F), a última. ~p ∧ q é verdadeira apenas em (F, V) — três linhas falsas, o oposto do padrão pedido. E a bicondicional tem duas linhas falsas, (V, F) e (F, V). Reconhecer o conectivo pela posição da linha falsa é mais rápido do que montar cada coluna inteira.",
    v: { i: () => { const alvo = [[true, true, true], [true, false, false], [false, true, true], [false, false, true]]; const ops = [(p, q) => imp(p, q), (p, q) => imp(q, p), (p, q) => p || q, (p, q) => !p && q, (p, q) => p === q]; return unicoV(ops.map((f) => alvo.every(([p, q, v]) => f(p, q) === v))); } },
  },
  {
    d: "media",
    e: "Sabe-se que a proposição p → q é falsa e que r é uma proposição verdadeira. Qual é o valor lógico de (p ∨ r) ∧ ~q?",
    o: [
      "Verdadeiro",
      "Falso, porque q é verdadeira",
      "Falso, porque p é falsa",
      "Falso, porque a conjunção exige ~q falsa",
      "Não é possível determinar sem conhecer o valor de p",
    ],
    x: "Se p → q é falsa, os valores de p e q estão determinados: p é verdadeira e q é falsa, porque esse é o único caso em que uma condicional falha. Então p ∨ r é verdadeira (e seria mesmo sem r) e ~q é verdadeira. A conjunção de duas verdades é verdadeira.\n\nAs justificativas de falsidade partem de valores errados: a condicional falsa exige q falsa e p verdadeira, não o contrário. A ideia de que a conjunção exige ~q falsa inverte a regra do “∧”. E dizer que falta o valor de p ignora que a falsidade de p → q já o determina — esse é o passo que a questão testa.",
    v: { i: () => { const casos = tabela(3).filter(([p, q, r]) => !imp(p, q) && r); const vals = new Set(casos.map(([p, q, r]) => (p || r) && !q)); return vals.size === 1 && vals.has(true) ? 0 : -1; } },
  },
  {
    d: "facil",
    e: "Qual das proposições abaixo é equivalente a “p ∨ q”?",
    o: ["~p → q", "p → q", "~p → ~q", "p → ~q", "~(p → q)"],
    x: "A disjunção p ∨ q só é falsa quando p e q são ambas falsas. A condicional ~p → q também: ela falha quando o antecedente ~p é verdadeiro (p falsa) e o consequente q é falso. Mesmas linhas falsas, mesma proposição. Em palavras: “p ou q” é o mesmo que “se não p, então q”.\n\nA condicional p → q é equivalente a ~p ∨ q, não a p ∨ q — esquece de negar p. ~p → ~q é a inversa de p → q e equivale a p ∨ ~q. p → ~q equivale a ~p ∨ ~q. E ~(p → q) é p ∧ ~q, uma conjunção. Em todos esses casos, basta testar a linha p = F, q = V, em que p ∨ q é verdadeira, para encontrar divergência em quase todas.",
    v: { i: () => unica((p, q) => p || q, [(p, q) => imp(!p, q), (p, q) => imp(p, q), (p, q) => imp(!p, !q), (p, q) => imp(p, !q), (p, q) => !imp(p, q)], 2) },
  },
  {
    d: "media",
    e: "Um relatório afirma que a proposição (p ∧ q) → r é falsa. Com base nisso, qual é o valor lógico de p ↔ r?",
    o: [
      "Falso, porque p é verdadeira e r é falsa",
      "Verdadeiro, porque p e r são ambas verdadeiras",
      "Verdadeiro, porque p e r são ambas falsas",
      "Falso, porque p é falsa e r é verdadeira",
      "Indeterminado, porque q pode ter qualquer valor",
    ],
    x: "Uma condicional é falsa apenas quando o antecedente é verdadeiro e o consequente é falso. Então p ∧ q é verdadeira — o que obriga p e q a serem verdadeiras — e r é falsa. Com p verdadeira e r falsa, a bicondicional p ↔ r compara valores diferentes e é falsa.\n\nAs opções que dão valores iguais a p e r contrariam o que a condicional falsa determina. A que troca os valores (p falsa, r verdadeira) inverte os papéis de antecedente e consequente. E q não fica livre: para o antecedente p ∧ q ser verdadeiro, q também precisa ser verdadeira — mas, de todo modo, q nem aparece em p ↔ r.",
    v: { i: () => { const casos = tabela(3).filter(([p, q, r]) => !imp(p && q, r)); const ok = casos.every(([p, q, r]) => p === true && r === false && (p === r) === false); return ok && casos.length === 1 ? 0 : -1; } },
  },
  {
    d: "media",
    e: "Na tabela-verdade da proposição (p → q) ∨ (q → p), em quantas das quatro linhas o resultado é verdadeiro?",
    o: ["4", "3", "2", "1", "0"],
    x: "Cada condicional tem uma única linha falsa: p → q falha em (V, F) e q → p falha em (F, V). São linhas diferentes. Assim, em toda linha, pelo menos uma das duas condicionais é verdadeira, e a disjunção vale sempre. São 4 linhas verdadeiras: a proposição é uma tautologia.\n\nResponder 3 é pensar que a linha falsa de uma das condicionais contamina a disjunção — mas na disjunção basta uma parte verdadeira. Responder 2 é tratar o “∨” como “∧”, contando só as linhas em que as duas valem, (V, V) e (F, F). E 1 ou 0 aparecem quando se confunde a proposição com a negação de uma das condicionais.",
    v: { n: () => conta((p, q) => imp(p, q) || imp(q, p), 2), o: [4, 3, 2, 1, 0] },
  },
  {
    d: "facil",
    e: "Sendo q ∧ ~q uma contradição, a proposição p ∨ (q ∧ ~q) é equivalente a qual das expressões abaixo?",
    o: ["p", "q", "~p", "p ∧ q", "p ∨ q"],
    x: "A parte q ∧ ~q é falsa em todas as linhas. Uma disjunção com uma parte sempre falsa tem o valor da outra parte: F é o elemento neutro do “∨”, assim como 0 é o da soma. Logo, p ∨ (q ∧ ~q) ≡ p.\n\nResponder q ou p ∨ q é esquecer que q aparece junto com a própria negação, e que essa dupla nunca vale. ~p inverte o valor, o que nada na expressão faz. E p ∧ q exige q verdadeira, quando a expressão vale para p verdadeira qualquer que seja q. Reconhecer contradições e tautologias dentro de expressões maiores é o atalho para simplificá-las sem montar a tabela inteira.",
    v: { i: () => unica((p, q) => p || (q && !q), [(p) => p, (p, q) => q, (p) => !p, (p, q) => p && q, (p, q) => p || q], 2) },
  },
  {
    d: "media",
    e: "Qual das proposições abaixo NÃO é equivalente a p ↔ q?",
    o: ["(p ∧ q) ∨ (p ∧ ~q)", "(p → q) ∧ (q → p)", "(p ∧ q) ∨ (~p ∧ ~q)", "~p ↔ ~q", "(~p ∨ q) ∧ (~q ∨ p)"],
    x: "A bicondicional é verdadeira quando p e q coincidem. (p → q) ∧ (q → p) é a sua definição; (p ∧ q) ∨ (~p ∧ ~q) lista as duas linhas de coincidência; ~p ↔ ~q troca os dois valores ao mesmo tempo e mantém a coincidência; e (~p ∨ q) ∧ (~q ∨ p) é a definição com as condicionais escritas como disjunções.\n\nA que destoa é (p ∧ q) ∨ (p ∧ ~q). Ela é verdadeira sempre que p vale, independentemente de q — pela distributiva, equivale a p ∧ (q ∨ ~q), isto é, a p. Na linha p = V, q = F, ela é verdadeira e a bicondicional é falsa. O engano típico é trocar ~p por p no segundo termo da forma com as duas coincidências.",
    v: { i: () => unicaNao((p, q) => p === q, [(p, q) => (p && q) || (p && !q), (p, q) => imp(p, q) && imp(q, p), (p, q) => (p && q) || (!p && !q), (p, q) => !p === !q, (p, q) => (!p || q) && (!q || p)], 2) },
  },
  {
    d: "dificil",
    e: "Qual das proposições abaixo é equivalente a p → (q ∨ r)?",
    o: ["(p ∧ ~q) → r", "(p ∧ q) → r", "(p → q) ∧ (p → r)", "(p ∨ q) → r", "~p → (q ∨ r)"],
    x: "A condicional p → (q ∨ r) só falha quando p é verdadeira e q e r são ambas falsas. A forma (p ∧ ~q) → r falha exatamente na mesma linha: antecedente verdadeiro exige p verdadeira e q falsa, e o consequente r precisa ser falso. Em palavras: “se p, então q ou r” equivale a “se p e não q, então r” — quem tem p e não conseguiu q, obrigatoriamente conseguiu r.\n\n(p ∧ q) → r falha em (V, V, F), linha em que a original é verdadeira. (p → q) ∧ (p → r) é a forma de p → (q ∧ r), mais exigente. (p ∨ q) → r falha com p falsa, q verdadeira e r falsa. E ~p → (q ∨ r) troca o antecedente pelo seu oposto.",
    v: { i: () => unica((p, q, r) => imp(p, q || r), [(p, q, r) => imp(p && !q, r), (p, q, r) => imp(p && q, r), (p, q, r) => imp(p, q) && imp(p, r), (p, q, r) => imp(p || q, r), (p, q, r) => imp(!p, q || r)], 3) },
  },
  {
    d: "media",
    e: "Duas proposições compostas são equivalentes quando têm a mesma coluna final na tabela-verdade. Em qual dos pares abaixo as duas proposições são equivalentes?",
    o: ["~(p ∨ ~q) e ~p ∧ q", "~(p ∧ q) e ~p ∧ ~q", "p → q e q → p", "p ∨ (q ∧ r) e (p ∨ q) ∧ r", "~(p → q) e ~p → ~q"],
    x: "Pela lei de De Morgan, ~(p ∨ ~q) ≡ ~p ∧ ~(~q) ≡ ~p ∧ q. As duas proposições do par coincidem em todas as linhas: ambas só são verdadeiras quando p é falsa e q é verdadeira.\n\nNos demais pares há divergência. ~(p ∧ q) equivale a ~p ∨ ~q, e não a ~p ∧ ~q (esquecer de trocar o conectivo). Uma condicional e sua recíproca diferem nas linhas (V, F) e (F, V). A distributiva correta é p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r); a versão do par erra com p verdadeira e r falsa. E ~(p → q) é p ∧ ~q, enquanto ~p → ~q é a inversa — outra proposição.",
    v: { i: () => unicoV([eqv((p, q) => !(p || !q), (p, q) => !p && q, 2), eqv((p, q) => !(p && q), (p, q) => !p && !q, 2), eqv((p, q) => imp(p, q), (p, q) => imp(q, p), 2), eqv((p, q, r) => p || (q && r), (p, q, r) => (p || q) && r, 3), eqv((p, q) => !imp(p, q), (p, q) => imp(!p, !q), 2)]) },
  },
  {
    d: "dificil",
    e: "Na tabela-verdade completa da proposição (p → q) ↔ (q → r), em quantas das oito linhas o resultado é falso?",
    o: ["4", "2", "3", "0", "8"],
    x: "A bicondicional é falsa quando as duas condicionais têm valores diferentes, e há dois modos de divergir. No primeiro, p → q é falsa e q → r é verdadeira: p → q só falha com p = V e q = F, e com q falsa a condicional q → r é sempre verdadeira — servem as linhas (V, F, V) e (V, F, F). No segundo, q → r é falsa e p → q é verdadeira: q → r só falha com q = V e r = F, e com q verdadeira p → q é sempre verdadeira — servem (V, V, F) e (F, V, F). Total: 4 linhas falsas.\n\nResponder 2 é contar só um dos modos de divergência. O 3 aparece quando se esquece que, em cada modo, a variável que não participa da condicional falsa pode assumir os dois valores. Responder 0 é supor que as condicionais sempre concordam, e 8 é tratar a expressão como contradição.",
    v: { n: () => conta((p, q, r) => imp(p, q) !== imp(q, r), 3), o: [4, 2, 3, 0, 8] },
  },
  {
    d: "dificil",
    e: "Qual das proposições abaixo é uma tautologia?",
    o: ["((p → q) ∧ p) → q", "((p → q) ∧ q) → p", "((p → q) ∧ ~p) → ~q", "(p → q) → (q → p)", "(p ∨ q) → (p ∧ q)"],
    x: "A primeira é o modus ponens escrito como proposição: se a condicional vale e o antecedente vale, o consequente vale. Não há linha em que ((p → q) ∧ p) seja verdadeira e q seja falsa, porque isso exigiria p verdadeira, q falsa e p → q verdadeira ao mesmo tempo. É tautologia.\n\n((p → q) ∧ q) → p é a falácia de afirmar o consequente: falha com p = F, q = V. ((p → q) ∧ ~p) → ~q é a falácia de negar o antecedente: falha na mesma linha. (p → q) → (q → p) diz que toda condicional implica a recíproca, o que falha em p = F, q = V. E (p ∨ q) → (p ∧ q) falha sempre que só uma das duas vale.",
    v: { i: () => unicoV([tautologia((p, q) => imp(imp(p, q) && p, q), 2), tautologia((p, q) => imp(imp(p, q) && q, p), 2), tautologia((p, q) => imp(imp(p, q) && !p, !q), 2), tautologia((p, q) => imp(imp(p, q), imp(q, p)), 2), tautologia((p, q) => imp(p || q, p && q), 2)]) },
  },
  {
    d: "media",
    e: "Em um circuito de verificação, a luz de alerta acende conforme a proposição ~(p ∧ q) ∧ (p ∨ q), em que p e q indicam dois sensores ativados. Em qual situação a luz acende?",
    o: [
      "Exatamente um dos dois sensores está ativado",
      "Os dois sensores estão ativados",
      "Nenhum dos dois sensores está ativado",
      "Pelo menos um dos dois sensores está ativado, podendo ser os dois",
      "O sensor p está ativado, independentemente de q",
    ],
    x: "A proposição exige duas coisas: que não estejam os dois ativados, ~(p ∧ q), e que pelo menos um esteja, p ∨ q. Sobram as linhas em que exatamente um sensor está ativado — (V, F) e (F, V). É a disjunção exclusiva escrita com os conectivos básicos.\n\nOs dois sensores ativados tornam p ∧ q verdadeira e, portanto, a primeira parte falsa. Nenhum sensor ativado torna p ∨ q falsa. “Pelo menos um, podendo ser os dois” descreve só a segunda parte e ignora a restrição da primeira. E “p ativado, independentemente de q” deixa passar a linha (V, V), em que a luz fica apagada.",
    v: { i: () => { const f = (p, q) => !(p && q) && (p || q); const ops = [(p, q) => p !== q, (p, q) => p && q, (p, q) => !p && !q, (p, q) => p || q, (p) => p]; return unica(f, ops, 2); } },
  },
];
