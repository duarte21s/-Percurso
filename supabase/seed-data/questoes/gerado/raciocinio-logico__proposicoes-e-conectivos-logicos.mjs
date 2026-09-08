/* Proposições e conectivos lógicos (50 questões).

   ARQUIVO-MOLDE das matérias de trilha. Cinco regras, e as cinco saíram de
   defeito medido, não de gosto:

   1. O enunciado termina numa pergunta concreta ("qual é o valor lógico de",
      "qual proposição equivale a"), nunca numa fórmula vaga como
      "é relevante para compreender como:". Nos arquivos antigos, 20,7% das
      questões terminam assim, e a alternativa certa só completa a frase.

   2. Todo distrator é um ERRO QUE ALGUÉM COMETE — trocar a condicional pela
      recíproca, negar só uma parte da conjunção, confundir "ou" inclusivo com
      exclusivo. Nada de alternativa que se elimina sem ler o enunciado
      ("não tem qualquer relação com"): 22,6% dos antigos têm uma dessas.

   3. A explicação resolve, e identifica o distrator PELO ERRO QUE ELE COMETE,
      nunca pela posição na lista. "O segundo distrator" quebra assim que o
      gabarito é rebalanceado — e rebalancear é obrigatório, veja a regra 5.
      Mínimo de 320 caracteres, porque abaixo disso o que sai é paráfrase.

   4. Cada questão se sustenta sozinha. Nada de "como visto na questão
      anterior": o simulado sorteia e embaralha, então "anterior" não existe.

   5. O gabarito não pode ficar todo na mesma letra. Escrever a alternativa
      certa em primeiro lugar é natural na hora de redigir, e foi assim que
      este arquivo nasceu — com as 50 respostas na letra A, o que permitiria
      gabaritar sem ler. A correção é rodar, depois de escrever:

        node scripts/rebalancear-gabarito.mjs <este arquivo>

      Ele move só a posição da correta e não toca em texto nenhum. É por isso
      que a regra 3 existe: sem ela, o rebalanceamento mente na explicação.

   Confira com:  node scripts/checar-qualidade.mjs raciocinio-logico
*/

const M = "raciocinio-logico";
const T = "Proposições e conectivos lógicos";

export const questoes = [
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "facil",
    enunciado:
      "Considere as proposições simples p: \"Marina foi aprovada no concurso\" e q: \"Marina mudou de cidade\". Sabe-se que p é verdadeira e que q é falsa. Qual é o valor lógico da proposição composta p ∧ q?",
    opcoes: [
      "Falsa, porque a conjunção só é verdadeira quando as duas proposições são verdadeiras",
      "Verdadeira, porque basta que uma das duas proposições seja verdadeira",
      "Verdadeira, porque p é verdadeira e p aparece primeiro na expressão",
      "Falsa, porque a conjunção é sempre falsa quando as proposições tratam de assuntos diferentes",
      "Indeterminada, porque não se conhece o valor lógico da conjunção sem mais contexto",
    ],
    correta: 0,
    explicacao:
      "A conjunção p ∧ q (lê-se \"p e q\") só assume valor verdadeiro na única linha da tabela-verdade em que ambas as componentes são verdadeiras. Aqui p é V e q é F, então a conjunção é falsa.\n\nA alternativa que diz bastar uma componente verdadeira descreve a DISJUNÇÃO (p ∨ q), não a conjunção. Quem troca os dois conectivos erra sistematicamente essa família de questões, e a banca conta com isso.\n\nJá a que apela para p vir primeiro na expressão invoca algo irrelevante: a conjunção é comutativa, e p ∧ q tem sempre o mesmo valor que q ∧ p.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "facil",
    enunciado:
      "Sejam p uma proposição falsa e q uma proposição verdadeira. Qual é o valor lógico de p ∨ q?",
    opcoes: [
      "Verdadeira, porque a disjunção é verdadeira sempre que ao menos uma componente é verdadeira",
      "Falsa, porque p é falsa e a componente da esquerda determina o resultado",
      "Falsa, porque as duas componentes precisariam ser verdadeiras",
      "Verdadeira, porque a disjunção é verdadeira em todas as linhas possíveis",
      "Depende de p e q se referirem ao mesmo assunto",
    ],
    correta: 0,
    explicacao:
      "A disjunção inclusiva p ∨ q é falsa em uma única situação: quando as duas componentes são falsas. Em qualquer outro caso ela é verdadeira. Como q é verdadeira, a disjunção inteira é verdadeira, independentemente de p.\n\nExigir que as duas sejam verdadeiras é descrever a conjunção, e é o erro de quem decora \"e/ou\" sem fixar qual é qual. Na direção oposta, afirmar que a disjunção vale em todas as linhas a transformaria em tautologia, o que ela não é: F ∨ F é falsa.\n\nVale fixar cada conectivo pelo caso que falha, que é mais curto de lembrar: a disjunção só falha em F ∨ F; a conjunção só acerta em V ∧ V.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "media",
    enunciado:
      "Um edital afirma: \"Se o candidato entregar a documentação até sexta-feira, então ele será convocado para a prova prática\". Sabe-se que certo candidato NÃO entregou a documentação até sexta-feira. O que se pode concluir com certeza sobre a convocação desse candidato?",
    opcoes: [
      "Nada: a condicional nada afirma sobre o que ocorre quando o antecedente é falso",
      "Que ele certamente não será convocado, pois não cumpriu a condição",
      "Que ele certamente será convocado, pois a condicional se torna verdadeira",
      "Que a afirmação do edital se tornou falsa por causa desse candidato",
      "Que ele será convocado apenas se outro candidato desistir",
    ],
    correta: 0,
    explicacao:
      "A condicional p → q garante apenas que, havendo p, haverá q. Quando o antecedente é falso, a condicional é verdadeira por vacuidade e não impõe nada ao consequente: q pode ocorrer ou não.\n\nConcluir que ele não será convocado é a falácia da negação do antecedente, o erro mais comum de toda a lógica proposicional. Quem raciocina \"não entregou, logo não será convocado\" usa uma regra que não existe — a administração pode convocar esse candidato por outra via sem contrariar o edital.\n\nHá ainda quem conclua que ele SERÁ convocado, confundindo duas coisas: é verdade que a CONDICIONAL fica verdadeira quando o antecedente é falso, mas isso é afirmação sobre o valor lógico da frase do edital, não sobre o candidato.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "media",
    enunciado:
      "Considere a proposição \"Se chover, então o jogo será adiado\". Verificou-se depois que o jogo NÃO foi adiado. Qual conclusão é logicamente válida?",
    opcoes: [
      "Não choveu",
      "Choveu",
      "Choveu, mas a organização decidiu manter o jogo",
      "Nada se pode concluir sobre a chuva",
      "A proposição original era falsa desde o início",
    ],
    correta: 0,
    explicacao:
      "Esta é a aplicação do modus tollens: de p → q e da negação de q, conclui-se a negação de p. Se toda chuva implicaria adiamento e o adiamento não ocorreu, então a chuva não ocorreu — caso contrário a implicação teria sido violada.\n\nA saída \"nada se pode concluir\" atrai quem acabou de aprender que negar o antecedente não conclui nada, e generaliza a lição para o caso errado. Negar o CONSEQUENTE conclui, sim: é a única das quatro combinações, junto com afirmar o antecedente, que produz inferência válida.\n\nE a alternativa que admite chuva com jogo mantido descreve exatamente a situação que a proposição original proíbe: chover e não adiar tornaria a condicional falsa.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "media",
    enunciado:
      "Qual proposição é logicamente equivalente a \"Se o processo for arquivado, então o prazo terá expirado\"?",
    opcoes: [
      "Se o prazo não tiver expirado, então o processo não será arquivado",
      "Se o prazo tiver expirado, então o processo será arquivado",
      "Se o processo não for arquivado, então o prazo não terá expirado",
      "O processo será arquivado e o prazo terá expirado",
      "O processo será arquivado ou o prazo terá expirado",
    ],
    correta: 0,
    explicacao:
      "A equivalência clássica da condicional é a contrapositiva: p → q equivale a ~q → ~p. Nega-se o consequente, nega-se o antecedente e inverte-se a ordem. É a única transformação da lista que preserva a tabela-verdade linha a linha.\n\nDuas armadilhas aparecem juntas: a RECÍPROCA (q → p), que troca a ordem sem negar, e a INVERSA (~p → ~q), que nega sem trocar a ordem. As duas são equivalentes entre si, mas nenhuma equivale à original — e é justamente por soarem naturais em português que aparecem tanto em prova.\n\nUm teste rápido: imagine prazo expirado e processo não arquivado. A original continua verdadeira, porque o antecedente é falso; a recíproca fica falsa. Basta uma linha divergente para as duas não serem equivalentes.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "media",
    enunciado:
      "A proposição p → q é logicamente equivalente a qual das expressões abaixo, escrita apenas com negação e disjunção?",
    opcoes: [
      "~p ∨ q",
      "p ∨ ~q",
      "~p ∨ ~q",
      "~(p ∨ q)",
      "p ∨ q",
    ],
    correta: 0,
    explicacao:
      "A condicional só é falsa numa linha: antecedente verdadeiro e consequente falso. A expressão ~p ∨ q também só é falsa nessa mesma linha, porque exigiria ~p falsa (ou seja, p verdadeira) e q falsa. Coincidindo nas quatro linhas, as duas são equivalentes.\n\nA regra prática, muito cobrada: para transformar \"se p então q\" em disjunção, nega-se o primeiro termo e mantém-se o segundo.\n\nA versão p ∨ ~q inverte quem é negado e resulta na equivalente da recíproca q → p. Já ~p ∨ ~q é a negação da conjunção, por De Morgan — outra fórmula da mesma família, o que a torna tentadora para quem memorizou as três sem distinguir a que serve cada uma.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "media",
    enunciado:
      "Qual é a negação correta da proposição \"Carla estuda inglês e trabalha no período da tarde\"?",
    opcoes: [
      "Carla não estuda inglês ou não trabalha no período da tarde",
      "Carla não estuda inglês e não trabalha no período da tarde",
      "Carla estuda inglês ou trabalha no período da tarde",
      "Se Carla estuda inglês, então ela não trabalha no período da tarde",
      "Carla não estuda inglês nem trabalha em nenhum período",
    ],
    correta: 0,
    explicacao:
      "Pela primeira lei de De Morgan, ~(p ∧ q) equivale a ~p ∨ ~q: a negação de uma conjunção é a disjunção das negações. O conectivo troca de \"e\" para \"ou\" e cada parte é negada.\n\nNegar as duas partes mantendo o \"e\" é o erro mais frequente do tema, e afirma coisa mais forte que a negação: para negar \"faz as duas\", basta que ao menos uma falhe, não é preciso que as duas falhem. Se Carla estuda inglês mas não trabalha à tarde, a proposição original já é falsa — e essa versão também seria falsa ali, o que prova que não é a negação.\n\nA alternativa que fala em \"nenhum período\" extrapola o enunciado, que trata especificamente do período da tarde.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "media",
    enunciado:
      "Qual é a negação da proposição \"O relatório será entregue hoje ou a reunião será remarcada\"?",
    opcoes: [
      "O relatório não será entregue hoje e a reunião não será remarcada",
      "O relatório não será entregue hoje ou a reunião não será remarcada",
      "Se o relatório não for entregue hoje, a reunião será remarcada",
      "O relatório será entregue hoje e a reunião será remarcada",
      "A reunião será remarcada apenas se o relatório não for entregue",
    ],
    correta: 0,
    explicacao:
      "Pela segunda lei de De Morgan, ~(p ∨ q) equivale a ~p ∧ ~q. Como a disjunção só é falsa quando as duas partes são falsas, negá-la é justamente afirmar que ambas falharam.\n\nConservar o \"ou\" e negar as partes espelha o erro simétrico ao da negação da conjunção, e produz uma afirmação fraca demais: se o relatório for entregue e a reunião não for remarcada, a original é verdadeira, mas essa versão também seria verdadeira — e negação nenhuma pode ser verdadeira junto com a proposição que nega.\n\nUma forma de fixar as duas leis sem decorar: o conectivo sempre vira o outro, e a negação se distribui por dentro.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "dificil",
    enunciado:
      "Qual é a negação da proposição condicional \"Se o servidor for aprovado no estágio probatório, então receberá a gratificação\"?",
    opcoes: [
      "O servidor será aprovado no estágio probatório e não receberá a gratificação",
      "Se o servidor não for aprovado no estágio probatório, então não receberá a gratificação",
      "O servidor não será aprovado no estágio probatório e receberá a gratificação",
      "Se o servidor receber a gratificação, então terá sido aprovado no estágio probatório",
      "O servidor não será aprovado no estágio probatório ou não receberá a gratificação",
    ],
    correta: 0,
    explicacao:
      "A condicional p → q é falsa numa única linha da tabela-verdade: p verdadeira e q falsa. Negar a condicional é afirmar exatamente essa linha, ou seja, p ∧ ~q. Note que a negação de uma condicional NÃO é outra condicional: é uma conjunção.\n\nÉ o ponto que mais derruba candidato no tema. As duas alternativas que devolvem um \"se... então\" — a inversa e a recíproca — continuam sendo condicionais, o que soa certo mas não nega coisa alguma.\n\nO caminho algébrico confirma: p → q equivale a ~p ∨ q; negando, ~(~p ∨ q) = p ∧ ~q por De Morgan. Chega-se à mesma conjunção.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "media",
    enunciado:
      "Considere a bicondicional \"O pagamento será liberado se e somente se a nota fiscal for validada\". Em qual das situações abaixo essa proposição é FALSA?",
    opcoes: [
      "A nota fiscal foi validada e o pagamento não foi liberado",
      "A nota fiscal foi validada e o pagamento foi liberado",
      "A nota fiscal não foi validada e o pagamento não foi liberado",
      "A nota fiscal não foi validada e o setor financeiro entrou de férias",
      "A nota fiscal foi validada duas vezes e o pagamento foi liberado",
    ],
    correta: 0,
    explicacao:
      "A bicondicional p ↔ q é verdadeira quando as duas componentes têm o MESMO valor lógico, e falsa quando os valores diferem. Validar a nota (V) e não liberar o pagamento (F) é um caso de valores diferentes, logo a proposição é falsa.\n\nO caso de nota não validada com pagamento não liberado engana quem lê a bicondicional como se fosse apenas \"validou, então libera\". Ali os dois valores são falsos, isto é, coincidem, e a bicondicional é VERDADEIRA. Ela exige a coincidência nos dois sentidos.\n\nDetalhes como férias do setor ou validação repetida são circunstâncias externas: não alteram o valor lógico de \"a nota foi validada\" nem de \"o pagamento foi liberado\".",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "facil",
    enunciado:
      "Qual das sentenças abaixo é uma proposição lógica, isto é, admite classificação como verdadeira ou falsa?",
    opcoes: [
      "O município de Belo Horizonte é a capital de Minas Gerais",
      "Que horas começa a prova?",
      "Entregue o formulário na secretaria até amanhã",
      "Que dia maravilhoso!",
      "x + 5 = 12",
    ],
    correta: 0,
    explicacao:
      "Proposição, em lógica, é toda sentença declarativa a que se pode atribuir exatamente um valor: verdadeiro ou falso. A afirmação sobre a capital de Minas Gerais é declarativa e verificável, e por sinal verdadeira.\n\nAs outras falham por motivos distintos, e vale distinguir: uma é interrogativa, outra é imperativa e outra é exclamativa — nenhuma das três afirma algo que possa ser julgado V ou F.\n\nO caso mais sutil, e o mais cobrado, é a equação x + 5 = 12: trata-se de uma sentença ABERTA. Como o valor de x não foi fixado, ela não tem valor lógico definido; só vira proposição quando x recebe um valor ou é quantificado (\"existe x tal que...\").",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "media",
    enunciado:
      "Sabendo que p é verdadeira, q é falsa e r é verdadeira, qual é o valor lógico da proposição (p ∧ ~q) → r?",
    opcoes: [
      "Falsa, pois q é falsa e isso torna a conjunção falsa",
      "Verdadeira, pois o antecedente é verdadeiro e o consequente também",
      "Falsa, pois há uma negação envolvida no antecedente",
      "Verdadeira, pois toda condicional que contém negação é verdadeira",
      "Indeterminada, pois faltam informações sobre a ordem de precedência",
    ],
    correta: 1,
    explicacao:
      "Resolve-se de dentro para fora. Como q é falsa, ~q é verdadeira. O antecedente p ∧ ~q fica V ∧ V, ou seja, verdadeiro. O consequente r é verdadeiro. Uma condicional V → V é verdadeira.\n\nConcluir que a conjunção é falsa porque q é falsa é o deslize de quem calcula p ∧ q em vez de p ∧ ~q. É o erro mais comum aqui, porque a vista pula o til da negação.\n\nA saída pela \"indeterminação\" inventa uma ambiguidade que não existe: os parênteses já fixam a ordem, e mesmo sem eles a convenção de precedência põe a negação antes da conjunção, e a conjunção antes da condicional.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "dificil",
    enunciado:
      "Na expressão ~p ∨ q ∧ r, sem parênteses, qual é a ordem de aplicação dos conectivos segundo a convenção usual de precedência?",
    opcoes: [
      "Primeiro a disjunção ~p ∨ q, e depois a conjunção com r",
      "Primeiro a negação de p, depois a conjunção q ∧ r, e por último a disjunção",
      "Da esquerda para a direita, na ordem em que os símbolos aparecem",
      "Primeiro a conjunção, depois a negação e por último a disjunção",
      "A expressão é ambígua e não pode ser avaliada sem parênteses",
    ],
    correta: 1,
    explicacao:
      "A convenção de precedência em lógica proposicional, da mais forte para a mais fraca, é: negação, conjunção, disjunção, condicional e bicondicional. Assim ~p ∨ q ∧ r deve ser lido como (~p) ∨ (q ∧ r).\n\nA leitura da esquerda para a direita valeria se todos os conectivos tivessem a mesma força — não é o caso, do mesmo modo que em aritmética 2 + 3 × 4 não se resolve na ordem escrita.\n\nColocar a conjunção antes da negação inverte a hierarquia. A negação é sempre a mais forte e se aplica só à proposição imediatamente à sua direita: em ~p ∨ q ela nega apenas p, jamais a disjunção inteira. Para negar tudo seria preciso escrever ~(p ∨ q).",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "media",
    enunciado:
      "A frase \"Ou o candidato apresenta o diploma, ou ele apresenta a declaração de conclusão\" costuma ser interpretada em edital como disjunção exclusiva. Nesse caso, em qual situação a frase é FALSA?",
    opcoes: [
      "Quando o candidato apresenta apenas o diploma",
      "Quando o candidato apresenta os dois documentos",
      "Quando o candidato apresenta apenas a declaração de conclusão",
      "Quando o candidato apresenta o diploma antes da declaração",
      "Quando o candidato apresenta a declaração fora do prazo",
    ],
    correta: 1,
    explicacao:
      "A disjunção exclusiva, escrita p ⊻ q, é verdadeira quando exatamente uma das componentes é verdadeira, e falsa nos dois extremos: quando ambas são falsas e quando ambas são verdadeiras. Apresentar os dois documentos cai nesse segundo caso.\n\nÉ o que separa o \"ou\" exclusivo do inclusivo. Na disjunção inclusiva (p ∨ q), apresentar os dois manteria a frase verdadeira. Por isso a distinção importa em edital: \"ou... ou...\" costuma sinalizar exclusividade, enquanto um \"ou\" solto costuma ser inclusivo.\n\nAs alternativas sobre ordem de entrega e prazo tratam de circunstâncias externas: não alteram o valor lógico de \"apresentou o diploma\" nem de \"apresentou a declaração\".",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "dificil",
    enunciado:
      "Uma proposição composta que é verdadeira para todas as combinações possíveis de valores lógicos de suas componentes recebe o nome de tautologia. Qual das expressões abaixo é uma tautologia?",
    opcoes: [
      "p ∧ ~p",
      "p ∨ ~p",
      "p → ~p",
      "p ↔ ~p",
      "~(p ∨ ~p)",
    ],
    correta: 1,
    explicacao:
      "A expressão p ∨ ~p é o princípio do terceiro excluído: se p é verdadeira, a primeira parcela sustenta a disjunção; se p é falsa, ~p é verdadeira e sustenta a disjunção. Não há terceira possibilidade, então a expressão é verdadeira sempre.\n\nA expressão p ∧ ~p é o oposto exato: uma contradição, falsa em toda linha, porque exigiria que p fosse verdadeira e falsa ao mesmo tempo. Confundir tautologia com contradição é o que a questão testa.\n\nA bicondicional p ↔ q com q sendo ~p também é contradição: bicondicional exige valores iguais, e p nunca tem o mesmo valor da própria negação. E negar uma tautologia produz, evidentemente, uma contradição.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "media",
    enunciado:
      "Considere as proposições p: \"O processo foi protocolado\" e q: \"A taxa foi paga\". Como se escreve simbolicamente a frase \"O processo foi protocolado, mas a taxa não foi paga\"?",
    opcoes: [
      "p → ~q",
      "p ∧ ~q",
      "p ∨ ~q",
      "~(p ∧ q)",
      "~p ∧ q",
    ],
    correta: 1,
    explicacao:
      "Em lógica proposicional, \"mas\" tem exatamente a mesma função de \"e\": ele afirma as duas partes ao mesmo tempo. A diferença entre os dois é de ênfase retórica — o \"mas\" sinaliza contraste — e o contraste não tem representação simbólica. Portanto a frase é p ∧ ~q.\n\nTraduzir o contraste como condicional transforma-o em relação de causa ou de condição, que a frase não estabelece: dizer \"protocolou, mas não pagou\" não é dizer \"se protocolou, então não pagou\".\n\nA mesma equivalência vale para \"porém\", \"contudo\", \"entretanto\", \"embora\" e \"no entanto\": todos viram conjunção. É ponto que a banca cobra com frequência justamente porque o português sugere mais do que a lógica registra.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "media",
    enunciado:
      "A frase \"O adicional será pago somente se o servidor cumprir a carga horária integral\" traduz-se simbolicamente como qual expressão, sendo p: \"o adicional será pago\" e q: \"o servidor cumprirá a carga horária integral\"?",
    opcoes: [
      "q → p",
      "p → q",
      "p ∧ q",
      "p ↔ q",
      "~p → q",
    ],
    correta: 1,
    explicacao:
      "A construção \"A somente se B\" enuncia B como condição NECESSÁRIA para A, o que se escreve A → B. Se o adicional foi pago, então necessariamente a carga horária foi cumprida — do contrário o pagamento não teria ocorrido.\n\nInverter a seta é o erro dominante do tema, porque \"somente se\" se parece com \"se\". Mas \"A se B\" é B → A, enquanto \"A somente se B\" é A → B: as duas construções apontam em sentidos opostos. Cumprir a carga horária não garante o pagamento; apenas o viabiliza.\n\nA bicondicional só caberia se o enunciado dissesse \"se e somente se\", juntando as duas direções numa afirmação só.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "dificil",
    enunciado:
      "Quantas linhas tem a tabela-verdade de uma proposição composta formada por 4 proposições simples distintas?",
    opcoes: [
      "8",
      "16",
      "4",
      "12",
      "24",
    ],
    correta: 1,
    explicacao:
      "Cada proposição simples pode assumir dois valores, verdadeiro ou falso, de modo independente das demais. Com n proposições, o total de combinações é 2 elevado a n. Para n = 4, tem-se 2⁴ = 16 linhas.\n\nO valor 8 corresponde a três proposições, e aparece quando se conta uma a menos. O valor 4 vem de multiplicar 2 por 2 em vez de elevar, ou de confundir com o caso de duas proposições.\n\nJá 24 é o fatorial de 4, e atrai quem associa contagem a permutação. Aqui não há ordenação de elementos: cada linha é uma atribuição independente de V ou F a cada letra, e por isso a estrutura é de produto, não de arranjo.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "media",
    enunciado:
      "Se a proposição composta (p ∨ q) → r é falsa, quais são necessariamente os valores lógicos de p, q e r?",
    opcoes: [
      "p, q e r são todas falsas",
      "r é falsa e ao menos uma entre p e q é verdadeira",
      "p, q e r são todas verdadeiras",
      "r é verdadeira e p e q são falsas",
      "p e q são verdadeiras e r é verdadeira",
    ],
    correta: 1,
    explicacao:
      "Uma condicional só é falsa quando o antecedente é verdadeiro e o consequente é falso. Aqui o antecedente é a disjunção p ∨ q, que é verdadeira quando ao menos uma das duas é verdadeira; e o consequente r precisa ser falso.\n\nNote que a questão não determina p e q individualmente: três combinações servem — (V,V), (V,F) e (F,V). Reconhecer que a resposta é um conjunto de casos, e não um único caso, é o que a questão testa.\n\nAs alternativas que tornam p e q ambas falsas fazem o antecedente falso, e condicional com antecedente falso é verdadeira — exatamente o oposto do pedido.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "facil",
    enunciado:
      "A negação da proposição \"O prazo terminou\" é qual das alternativas?",
    opcoes: [
      "O prazo terminou ontem",
      "O prazo não terminou",
      "O prazo vai terminar",
      "É falso que o prazo não terminou",
      "O prazo terminou e foi prorrogado",
    ],
    correta: 1,
    explicacao:
      "A negação de uma proposição simples p é obtida antepondo-lhe a negação: ~p. Em português, insere-se o \"não\" no verbo, preservando o restante da frase.\n\nA construção \"é falso que o prazo NÃO terminou\" merece atenção porque é uma dupla negação: ela equivale a afirmar que o prazo terminou, ou seja, retorna à proposição original em vez de negá-la. Simbolicamente, ~(~p) = p.\n\nAs alternativas que acrescentam informação de tempo mudam o conteúdo em vez de negá-lo. Negar não é dizer outra coisa sobre o mesmo assunto: é afirmar precisamente que a proposição dada não se verifica.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "media",
    enunciado:
      "Duas proposições compostas são equivalentes quando têm a mesma tabela-verdade. Qual par abaixo é formado por proposições equivalentes?",
    opcoes: [
      "p → q e q → p",
      "~(p → q) e p ∧ ~q",
      "~(p ∧ q) e ~p ∧ ~q",
      "p ∨ q e p ∧ q",
      "p ↔ q e p → q",
    ],
    correta: 1,
    explicacao:
      "A condicional p → q é falsa apenas quando p é verdadeira e q é falsa. Sua negação, portanto, é verdadeira exatamente nessa linha, que é o que a conjunção p ∧ ~q descreve. As tabelas coincidem nas quatro linhas.\n\nO par que confronta a condicional com sua recíproca diverge: com p verdadeira e q falsa, a primeira é falsa e a segunda é verdadeira. O par com ~(p ∧ q) erra De Morgan, trocando a disjunção que deveria aparecer por uma conjunção.\n\nO par bicondicional-condicional é sutil: a bicondicional implica a condicional, mas não o contrário. Com p falsa e q verdadeira, p → q é verdadeira enquanto p ↔ q é falsa. Implicação em um sentido não basta para equivalência.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "dificil",
    enunciado:
      "Considere a proposição \"Não é verdade que o pedido foi indeferido e o recurso foi negado\". Qual afirmação é logicamente equivalente a ela?",
    opcoes: [
      "O pedido não foi indeferido e o recurso não foi negado",
      "O pedido foi indeferido ou o recurso foi negado",
      "O pedido não foi indeferido ou o recurso não foi negado",
      "Se o pedido foi indeferido, então o recurso foi negado",
      "O pedido foi deferido e o recurso foi acolhido",
    ],
    correta: 2,
    explicacao:
      "A frase tem a forma ~(p ∧ q). Pela primeira lei de De Morgan, isso equivale a ~p ∨ ~q: nega-se cada componente e a conjunção vira disjunção.\n\nManter o \"e\" ao negar é aplicar metade da regra, e afirma mais do que o original: exige que as duas coisas tenham falhado, quando basta que uma tenha falhado para que \"as duas ocorreram\" seja falso.\n\nA versão com \"deferido\" e \"acolhido\" é o mesmo erro vestido de vocabulário jurídico — são as negações lexicais corretas, mas o conectivo continua sendo \"e\". Trocar as palavras não dispensa trocar o conectivo, e é justamente essa maquiagem que a banca usa para esconder o erro.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "media",
    enunciado:
      "Em uma proposição composta, o conectivo principal é aquele aplicado por último na avaliação. Qual é o conectivo principal de (p ∧ q) → (r ∨ s)?",
    opcoes: [
      "A conjunção",
      "A disjunção",
      "A condicional",
      "A negação",
      "Não há conectivo principal em expressões com parênteses",
    ],
    correta: 2,
    explicacao:
      "Identificar o conectivo principal é o primeiro passo para montar a tabela-verdade e para classificar a proposição. Ele é o de menor precedência entre os que não estão dentro de parênteses.\n\nAqui os parênteses isolam (p ∧ q) e (r ∨ s), que são avaliados primeiro. A condicional liga esses dois blocos e só pode ser resolvida depois que ambos tiverem valor: é ela o conectivo principal, e a proposição inteira classifica-se como uma condicional.\n\nA conjunção e a disjunção estão subordinadas, cada uma dentro de seu parêntese. E negar que exista conectivo principal inverte o papel dos parênteses: eles não impedem que haja um, eles justamente ajudam a revelá-lo.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "media",
    enunciado:
      "Sabe-se que a proposição \"Se houver quórum, a votação ocorrerá\" é verdadeira, e que a votação ocorreu. O que se conclui sobre o quórum?",
    opcoes: [
      "Houve quórum, necessariamente",
      "Não houve quórum",
      "Nada se pode concluir: a votação pode ter ocorrido por outro motivo",
      "Houve quórum apenas se a sessão foi presencial",
      "A proposição original passa a ser falsa",
    ],
    correta: 2,
    explicacao:
      "Afirmar o consequente não é regra válida de inferência. De p → q e de q, nada se segue sobre p. A condicional garante que o quórum leva à votação, mas não exclui que a votação aconteça por alguma outra via — mudança regimental, sessão extraordinária, decisão da mesa.\n\nConcluir que houve quórum é a falácia da afirmação do consequente, par simétrico da negação do antecedente. Das quatro combinações possíveis, apenas duas concluem: afirmar o antecedente (modus ponens) e negar o consequente (modus tollens).\n\nPara ver que não conclui, basta imaginar uma situação: sem quórum e com votação. Ela não viola a condicional, porque o antecedente é falso, e ainda assim contraria a conclusão apressada.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "facil",
    enunciado:
      "Qual das expressões representa a proposição \"Nem o edital foi publicado, nem as inscrições foram abertas\"?",
    opcoes: [
      "~p ∨ ~q",
      "~(p ∧ q)",
      "~p ∧ ~q",
      "p ∧ q",
      "~p → ~q",
    ],
    correta: 2,
    explicacao:
      "A construção \"nem... nem...\" nega as duas partes simultaneamente: afirma que a primeira não ocorreu E que a segunda não ocorreu. Simbolicamente, ~p ∧ ~q.\n\nTrocar a conjunção por disjunção enfraquece demais a afirmação: ~p ∨ ~q admite que uma das duas tenha ocorrido, o que a frase original exclui. E ~(p ∧ q) é equivalente a essa disjunção, por De Morgan, então falha pelo mesmo motivo.\n\nVale notar a relação com De Morgan pelo outro lado: ~p ∧ ~q equivale a ~(p ∨ q). Ou seja, dizer \"nem um nem outro\" é o mesmo que negar \"um ou outro\" — duas leituras corretas da mesma frase.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "dificil",
    enunciado:
      "Se p ∧ q é falsa e p ∨ q é verdadeira, o que se pode afirmar sobre p e q?",
    opcoes: [
      "As duas são verdadeiras",
      "As duas são falsas",
      "Exatamente uma das duas é verdadeira",
      "p é verdadeira e q é falsa, necessariamente",
      "Nada se pode afirmar com essas informações",
    ],
    correta: 2,
    explicacao:
      "Duas condições combinadas estreitam o campo. Que p ∨ q seja verdadeira elimina a linha em que as duas são falsas. Que p ∧ q seja falsa elimina a linha em que as duas são verdadeiras. Restam as duas linhas mistas — e em ambas exatamente uma componente é verdadeira.\n\nEssa é, aliás, a definição da disjunção exclusiva: p ⊻ q é verdadeira precisamente quando p ∨ q é verdadeira e p ∧ q é falsa.\n\nEscolher uma das duas linhas restantes e apresentá-la como necessária é ir longe demais: nada nas informações dadas distingue qual das duas é a verdadeira. Já dizer que nada se pode afirmar vai pouco longe: as informações não determinam tudo, mas determinam algo.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "media",
    enunciado:
      "Considere a proposição composta ~(p ∨ q) ∨ (p ∧ q). Para p verdadeira e q falsa, qual é o valor lógico dessa expressão?",
    opcoes: [
      "Verdadeira",
      "Indeterminada",
      "Falsa",
      "Verdadeira, porque toda expressão com dupla negação é verdadeira",
      "Falsa, porque a expressão é uma contradição para quaisquer valores",
    ],
    correta: 2,
    explicacao:
      "Avalia-se por partes. Com p verdadeira e q falsa: p ∨ q é verdadeira, logo ~(p ∨ q) é falsa. E p ∧ q é falsa, porque q é falsa. A expressão inteira é a disjunção de duas parcelas falsas, portanto falsa.\n\nA alternativa que chama a expressão de contradição acerta o valor neste caso, mas erra a justificativa, e por isso não pode ser marcada: testando p e q ambas verdadeiras, a segunda parcela fica verdadeira e o todo é verdadeiro. A expressão é, na verdade, equivalente à bicondicional p ↔ q.\n\nEsse é o tipo de alternativa que exige ler até o fim: valor certo com razão errada continua sendo alternativa errada.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "media",
    enunciado:
      "A frase \"Cumprir o prazo é condição suficiente para receber o certificado\" traduz-se em qual expressão, sendo p: \"cumprir o prazo\" e q: \"receber o certificado\"?",
    opcoes: [
      "q → p",
      "p ↔ q",
      "p → q",
      "~p → ~q",
      "p ∧ q",
    ],
    correta: 2,
    explicacao:
      "Condição suficiente é aquela que, uma vez satisfeita, garante o resultado: se p ocorre, q ocorre. Escreve-se p → q, com a condição suficiente no antecedente.\n\nO par a memorizar é este: a condição SUFICIENTE vai no antecedente, a condição NECESSÁRIA vai no consequente. Em p → q, p é suficiente para q, e q é necessária para p — a mesma seta lida nos dois sentidos.\n\nInverter a seta trata o cumprimento do prazo como necessário em vez de suficiente. E a versão ~p → ~q é a inversa, equivalente à recíproca e não à original: dizer que descumprir o prazo impede o certificado seria de novo tratar o prazo como necessário, que é justamente o que a frase não diz.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "dificil",
    enunciado:
      "Uma proposição composta é uma contingência quando é verdadeira em algumas linhas da tabela-verdade e falsa em outras. Qual das expressões abaixo é uma contingência?",
    opcoes: [
      "p ∨ ~p",
      "p ∧ ~p",
      "p → q",
      "(p ∧ q) → p",
      "~(p ∧ ~p)",
    ],
    correta: 2,
    explicacao:
      "A condicional p → q é verdadeira em três linhas e falsa naquela em que p é verdadeira e q é falsa. Por variar, é contingência — nem tautologia, nem contradição.\n\nA expressão p ∨ ~p é o terceiro excluído, tautologia; p ∧ ~p é contradição; e negar essa contradição devolve outra tautologia.\n\nA expressão (p ∧ q) → p merece teste, porque parece contingência. Se o antecedente é verdadeiro, p é verdadeira e o consequente também; se o antecedente é falso, a condicional já é verdadeira. Verdadeira em toda linha, é tautologia — um caso da regra de simplificação. Classificar exige percorrer a tabela, não confiar na aparência da fórmula.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "media",
    enunciado:
      "Sejam p: \"a inscrição foi homologada\" e q: \"o pagamento foi confirmado\". Como se lê a expressão ~q → ~p em linguagem natural?",
    opcoes: [
      "Se a inscrição não foi homologada, então o pagamento não foi confirmado",
      "O pagamento não foi confirmado e a inscrição não foi homologada",
      "Se o pagamento não foi confirmado, então a inscrição não foi homologada",
      "Se o pagamento foi confirmado, então a inscrição foi homologada",
      "A inscrição não foi homologada porque o pagamento não foi confirmado",
    ],
    correta: 2,
    explicacao:
      "A leitura é direta: o antecedente é ~q e o consequente é ~p, logo \"se não q, então não p\". Basta respeitar a ordem em que os termos aparecem na seta.\n\nTrocar antecedente por consequente produz ~p → ~q, que é outra proposição. E negar duas vezes resulta em q → p, a contrapositiva da expressão dada — parecida, mas não é o que está escrito.\n\nA versão com \"porque\" introduz causalidade. A condicional lógica não afirma causa: ela só registra que uma situação não ocorre sem a outra. Confundir implicação com explicação causal é deslize frequente em questões de tradução.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "facil",
    enunciado:
      "Quantas linhas da tabela-verdade de p ∧ q apresentam valor verdadeiro?",
    opcoes: [
      "Duas",
      "Três",
      "Uma",
      "Nenhuma",
      "Quatro",
    ],
    correta: 2,
    explicacao:
      "Com duas proposições simples há quatro linhas: VV, VF, FV e FF. A conjunção exige que ambas sejam verdadeiras, o que ocorre só na primeira. Portanto uma única linha verdadeira e três falsas.\n\nA resposta \"três\" é a contagem que corresponderia à DISJUNÇÃO, verdadeira em VV, VF e FV. Trocar as duas contagens é o erro que a questão isola.\n\nGuardar as quatro contagens juntas ajuda em toda a matéria: a conjunção acerta em 1 de 4, a disjunção acerta em 3 de 4, a condicional acerta em 3 de 4 (falha só em VF) e a bicondicional acerta em 2 de 4.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "media",
    enunciado:
      "Considere: \"Se o servidor faltar sem justificativa, terá desconto no salário\". Qual situação, se ocorresse, tornaria essa afirmação FALSA?",
    opcoes: [
      "Um servidor faltou com justificativa e não teve desconto no salário",
      "Um servidor não faltou e teve desconto no salário por outro motivo",
      "Um servidor faltou sem justificativa e teve desconto no salário",
      "Um servidor faltou sem justificativa e não teve desconto no salário",
      "Nenhum servidor faltou no período analisado",
    ],
    correta: 3,
    explicacao:
      "A condicional só é derrubada por um contraexemplo: antecedente verdadeiro e consequente falso. Faltar sem justificativa e não sofrer desconto é exatamente esse caso, e basta uma ocorrência para tornar a regra falsa.\n\nAs situações de falta justificada ou de ausência de falta têm antecedente falso. A condicional nada afirma sobre esses casos, então eles não a contrariam, por mais que pareçam relacionados.\n\nE o caso em que ninguém faltou é o vacuamente verdadeiro: se a hipótese nunca se realizou, a regra não foi violada nenhuma vez e permanece verdadeira. É contraintuitivo, mas uma regra que nunca se aplica também nunca é desmentida.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "dificil",
    enunciado:
      "Simplificando a expressão ~(~p ∨ q), obtém-se qual proposição?",
    opcoes: [
      "p ∨ ~q",
      "~p ∧ q",
      "~p ∨ ~q",
      "p ∧ ~q",
      "p → q",
    ],
    correta: 3,
    explicacao:
      "Aplica-se De Morgan à negação da disjunção: ~(A ∨ B) = ~A ∧ ~B. Aqui A é ~p e B é q, então o resultado é ~(~p) ∧ ~q. Como ~(~p) = p, chega-se a p ∧ ~q.\n\nDois passos podem falhar. Esquecer de trocar o conectivo mantém uma disjunção e produz ~p ∨ ~q. Esquecer a dupla negação deixa ~p onde deveria estar p, e produz ~p ∧ q.\n\nVale reparar no resultado: p ∧ ~q é a negação de p → q. Isso confirma o cálculo por outro caminho, já que ~p ∨ q é uma forma equivalente de p → q, e negar as duas formas tem de dar a mesma coisa.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "media",
    enunciado:
      "Em qual das situações abaixo a bicondicional p ↔ q é verdadeira?",
    opcoes: [
      "Quando p é verdadeira e q é falsa",
      "Quando p é falsa e q é verdadeira",
      "Quando p é verdadeira e q é indeterminada",
      "Quando p e q são ambas falsas",
      "Somente quando p e q são ambas verdadeiras",
    ],
    correta: 3,
    explicacao:
      "A bicondicional é verdadeira quando as duas componentes têm o mesmo valor lógico, o que acontece em duas linhas: ambas verdadeiras e ambas falsas. Duas proposições falsas são, para efeito de bicondicional, tão \"iguais\" quanto duas verdadeiras.\n\nA alternativa com \"somente quando ambas são verdadeiras\" reconhece uma das duas linhas e exclui a outra, e é o erro mais comum: a bicondicional acerta em 2 de 4 linhas, não em 1 de 4 como a conjunção.\n\nAs situações de valores diferentes descrevem justamente as linhas em que a bicondicional falha. E recorrer a \"indeterminada\" invoca um valor que não existe na lógica bivalente adotada aqui.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "media",
    enunciado:
      "A expressão \"p é condição necessária e suficiente para q\" corresponde a qual símbolo lógico?",
    opcoes: [
      "p → q",
      "q → p",
      "p ∧ q",
      "p ↔ q",
      "p ⊻ q",
    ],
    correta: 3,
    explicacao:
      "Necessária e suficiente ao mesmo tempo significa que a implicação vale nos dois sentidos: p → q e q → p. A conjunção dessas duas condicionais é precisamente a bicondicional p ↔ q, que em português aparece como \"se e somente se\".\n\nCada condicional isolada registra só metade do enunciado — uma a suficiência, outra a necessidade. É a soma das duas que fecha a bicondicional.\n\nA disjunção exclusiva é o oposto exato da bicondicional: p ⊻ q é verdadeira quando os valores DIFEREM, enquanto p ↔ q é verdadeira quando COINCIDEM. Uma é a negação da outra, e a semelhança dos símbolos favorece a troca.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "dificil",
    enunciado:
      "Sabendo que a proposição (p → q) ∧ (q → r) é verdadeira e que p é verdadeira, o que se conclui necessariamente sobre r?",
    opcoes: [
      "r é falsa",
      "r pode ser verdadeira ou falsa",
      "q é falsa e r é verdadeira",
      "r é verdadeira",
      "Não há informação suficiente sobre r",
    ],
    correta: 3,
    explicacao:
      "Trata-se do silogismo hipotético, encadeamento de condicionais. Como a conjunção é verdadeira, as duas condicionais são verdadeiras. De p verdadeira e p → q verdadeira, conclui-se q verdadeira por modus ponens. De q verdadeira e q → r verdadeira, conclui-se r verdadeira pelo mesmo caminho.\n\nA cadeia p → q → r permite saltar direto de p para r, e é por isso que a regra derivada p → r vale sempre que as duas condicionais valem.\n\nAs alternativas que negam haver conclusão erram: o encadeamento é determinístico. E afirmar q falsa contradiria a primeira condicional, já verificada como verdadeira junto com p.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "media",
    enunciado:
      "Qual é a negação da proposição \"O concurso terá duas etapas e a segunda será eliminatória\"?",
    opcoes: [
      "O concurso não terá duas etapas e a segunda não será eliminatória",
      "O concurso terá duas etapas ou a segunda será eliminatória",
      "Se o concurso tiver duas etapas, a segunda não será eliminatória",
      "O concurso não terá duas etapas ou a segunda não será eliminatória",
      "O concurso terá apenas uma etapa, que será classificatória",
    ],
    correta: 3,
    explicacao:
      "A proposição tem forma p ∧ q e sua negação, por De Morgan, é ~p ∨ ~q. Nega-se cada parte e o \"e\" vira \"ou\".\n\nManter o \"e\" afirma coisa mais forte que a negação. Para desmentir \"as duas coisas acontecem\", basta apontar que uma delas não aconteceu.\n\nA alternativa que descreve \"apenas uma etapa, classificatória\" é o mesmo erro em versão concreta: fixa um cenário específico quando a negação abrange vários. Um concurso com duas etapas em que a segunda seja apenas classificatória já nega a original, e esse cenário não a contempla. Negação não é o cenário oposto; é tudo aquilo que não seja o cenário afirmado.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "facil",
    enunciado:
      "O símbolo ∧ representa qual conectivo lógico?",
    opcoes: [
      "A disjunção, correspondente ao \"ou\"",
      "A condicional, correspondente ao \"se... então\"",
      "A negação, correspondente ao \"não\"",
      "A conjunção, correspondente ao \"e\"",
      "A bicondicional, correspondente ao \"se e somente se\"",
    ],
    correta: 3,
    explicacao:
      "O símbolo ∧ é a conjunção e traduz o \"e\" do português, além de \"mas\", \"porém\", \"contudo\" e \"embora\", que em lógica têm a mesma função.\n\nA confusão frequente é com ∨, a disjunção, e uma forma de não trocar é associar ∨ à inicial de \"vel\", o \"ou\" inclusivo do latim, deixando ∧ como o outro.\n\nO quadro completo dos símbolos usados: ~ ou ¬ para negação, ∧ para conjunção, ∨ para disjunção, → para condicional, ↔ para bicondicional e ⊻ para disjunção exclusiva. Reconhecê-los de imediato economiza tempo em prova, porque muita questão apresenta a expressão simbólica e pede a tradução para o português, ou o contrário.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "dificil",
    enunciado:
      "Considere a proposição \"Se a proposta for aprovada, então haverá aumento de despesa ou corte em outra rubrica\". Qual é a negação dessa proposição?",
    opcoes: [
      "A proposta não será aprovada e haverá aumento de despesa ou corte em outra rubrica",
      "Se a proposta não for aprovada, não haverá aumento de despesa nem corte em outra rubrica",
      "A proposta será aprovada ou não haverá aumento de despesa",
      "A proposta será aprovada e não haverá aumento de despesa nem corte em outra rubrica",
      "Se houver aumento de despesa, a proposta terá sido aprovada",
    ],
    correta: 3,
    explicacao:
      "A proposição tem a forma p → (q ∨ r). A negação de uma condicional é a conjunção do antecedente com a negação do consequente: p ∧ ~(q ∨ r). Aplicando De Morgan ao segundo fator, ~(q ∨ r) = ~q ∧ ~r. O resultado é p ∧ ~q ∧ ~r, que em português é \"a proposta será aprovada e não haverá aumento nem corte\" — o \"nem\" faz o trabalho de negar as duas parcelas de uma vez.\n\nQualquer alternativa que devolva um \"se... então\" já está errada de saída: negação de condicional nunca é condicional.\n\nA questão exige encadear duas regras, e é aí que costuma se perder quem aplica só a primeira e esquece De Morgan no consequente.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "media",
    enunciado:
      "Se a proposição p ∨ q é falsa, qual é o valor lógico de (p ∧ q) → p?",
    opcoes: [
      "Falsa",
      "Indeterminada, pois p e q não foram informadas individualmente",
      "Falsa, pois p é falsa e aparece no consequente",
      "Verdadeira",
      "Verdadeira apenas se q também for falsa",
    ],
    correta: 3,
    explicacao:
      "Se p ∨ q é falsa, então p e q são ambas falsas — é a única linha em que a disjunção falha. Substituindo: p ∧ q é F ∧ F, ou seja, falsa. A condicional fica F → F, e condicional com antecedente falso é verdadeira.\n\nRaciocinar pelo consequente e concluir \"p é falsa, logo a condicional é falsa\" ignora que o consequente falso só derruba a condicional quando o antecedente é verdadeiro, o que não é o caso.\n\nVale notar que (p ∧ q) → p é tautologia — a regra de simplificação — e por isso seria verdadeira quaisquer que fossem os valores. Perceber isso resolve a questão sem nenhuma substituição.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "media",
    enunciado:
      "A frase \"Não é o caso de que a licitação seja deserta\" equivale a qual afirmação?",
    opcoes: [
      "A licitação é deserta",
      "A licitação pode ou não ser deserta",
      "A licitação é fracassada",
      "A licitação não é deserta",
      "É falso que a licitação não seja deserta",
    ],
    correta: 3,
    explicacao:
      "\"Não é o caso de que p\" é uma das formas de expressar ~p em português, ao lado de \"é falso que p\" e \"não é verdade que p\". Todas antepõem a negação à proposição inteira, sem alterar seu conteúdo.\n\nA formulação \"é falso que a licitação NÃO seja deserta\" é dupla negação: equivale a afirmar que ela É deserta, ou seja, retorna a p. Duas negações se cancelam.\n\nTrocar \"deserta\" por \"fracassada\" substitui por um termo próximo mas diferente: licitação deserta é aquela sem interessados, enquanto fracassada é aquela em que houve interessados mas nenhum foi habilitado. Negar uma não afirma a outra — negação não é substituição por conceito vizinho.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "dificil",
    enunciado:
      "Quantas linhas da tabela-verdade de (p → q) ∧ (q → p) apresentam valor verdadeiro?",
    opcoes: [
      "Uma",
      "Três",
      "Quatro",
      "Nenhuma",
      "Duas",
    ],
    correta: 4,
    explicacao:
      "A expressão é a conjunção de uma condicional com sua recíproca, que é justamente a definição da bicondicional p ↔ q. Ela é verdadeira quando p e q têm o mesmo valor: nas linhas VV e FF. Duas linhas, portanto.\n\nVerificando linha a linha: em VV as duas condicionais são verdadeiras; em VF a primeira falha; em FV a segunda falha; em FF ambas têm antecedente falso e são verdadeiras.\n\nA contagem \"três\" é a de uma condicional isolada, e aparece quando se esquece de exigir as duas simultaneamente. Reconhecer que essa conjunção é a bicondicional dispensa a tabela inteira e é o atalho que a questão premia.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "media",
    enunciado:
      "Sendo p uma proposição qualquer, qual é o valor lógico de ~(~(~p)) quando p é verdadeira?",
    opcoes: [
      "Verdadeira",
      "Indeterminada",
      "Verdadeira, pois três negações se cancelam",
      "Depende do conteúdo da proposição p",
      "Falsa",
    ],
    correta: 4,
    explicacao:
      "Cada negação inverte o valor lógico. Partindo de p verdadeira: a primeira negação dá falsa, a segunda dá verdadeira, a terceira dá falsa. Com número ímpar de negações, o valor final é o oposto do inicial; com número par, é o mesmo.\n\nA alternativa que fala em \"três negações se cancelam\" aplica a regra do cancelamento sem checar a paridade. Negações se cancelam duas a duas, e sobrando uma, ela age: ~(~(~p)) reduz-se a ~p.\n\nDizer que depende do conteúdo confunde valor lógico com significado. Em lógica proposicional, o que a proposição diz é irrelevante para o cálculo; o que importa é o valor atribuído a ela e como os conectivos o transformam.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "media",
    enunciado:
      "Considere: \"O requerimento será deferido se e somente se estiver acompanhado dos documentos exigidos\". Um requerimento foi apresentado SEM os documentos exigidos. O que se conclui?",
    opcoes: [
      "O requerimento será deferido",
      "Nada se pode concluir sobre o deferimento",
      "O requerimento será deferido se o servidor autorizar",
      "A regra não se aplica a esse requerimento",
      "O requerimento não será deferido",
    ],
    correta: 4,
    explicacao:
      "Na bicondicional, as duas componentes andam juntas: quando uma é falsa, a outra também é. Como \"estar acompanhado dos documentos\" é falso, \"ser deferido\" também é falso.\n\nÉ aqui que a bicondicional se distingue da condicional simples. Se o texto dissesse apenas \"será deferido SE estiver acompanhado dos documentos\", a ausência dos documentos não permitiria concluir nada — seria negação do antecedente. O \"se e somente se\" acrescenta a segunda direção e fecha essa porta.\n\nPor isso a resposta \"nada se pode concluir\", correta para uma condicional, está errada aqui. A questão testa exatamente se o candidato percebe a diferença que o \"somente\" introduz.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "facil",
    enunciado:
      "Uma proposição composta é formada por proposições simples ligadas por conectivos. Qual das alternativas apresenta uma proposição composta?",
    opcoes: [
      "A prova será aplicada em novembro",
      "O resultado sairá em dezembro",
      "Qual é a data da prova?",
      "Confira a data da prova no edital",
      "A prova será aplicada em novembro e o resultado sairá em dezembro",
    ],
    correta: 4,
    explicacao:
      "A alternativa correta reúne duas proposições simples — uma sobre a aplicação da prova, outra sobre o resultado — ligadas pelo conectivo \"e\". Essa é a definição de proposição composta.\n\nAs duas frases isoladas sobre novembro e dezembro são proposições simples: cada uma afirma um único fato, sem conectivo. Elas são, aliás, exatamente as componentes da composta.\n\nA pergunta e a ordem não são proposições de espécie alguma, por serem interrogativa e imperativa. Cabe distinguir os dois níveis de análise que a questão mobiliza: primeiro se a sentença é proposição, depois se é simples ou composta. Pular a primeira etapa leva a classificar como \"simples\" frases que sequer têm valor lógico.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "dificil",
    enunciado:
      "Se p → q é verdadeira e q → r é falsa, o que se pode concluir sobre os valores lógicos de q e r?",
    opcoes: [
      "q é falsa e r é verdadeira",
      "q e r são ambas falsas",
      "q e r são ambas verdadeiras",
      "Nada se pode concluir sobre q e r",
      "q é verdadeira e r é falsa",
    ],
    correta: 4,
    explicacao:
      "A informação decisiva é a segunda: uma condicional só é falsa numa configuração, com antecedente verdadeiro e consequente falso. De q → r falsa segue imediatamente que q é verdadeira e r é falsa. Não há outra possibilidade.\n\nA primeira informação, p → q verdadeira, é consistente com isso — com q verdadeira, a condicional é verdadeira qualquer que seja p — mas não acrescenta nada sobre q e r. Reconhecer qual das duas premissas realmente determina os valores é o que a questão cobra.\n\nDizer que nada se conclui supõe que uma condicional falsa é tão pouco informativa quanto uma verdadeira. É o contrário: a condicional verdadeira admite três linhas, a falsa admite uma só.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "media",
    enunciado:
      "A expressão p ∨ (p ∧ q) é equivalente a qual proposição mais simples?",
    opcoes: [
      "q",
      "p ∧ q",
      "p ∨ q",
      "p → q",
      "p",
    ],
    correta: 4,
    explicacao:
      "Trata-se da lei da absorção. Se p é verdadeira, a primeira parcela já torna a disjunção verdadeira, qualquer que seja q. Se p é falsa, a primeira parcela é falsa e a segunda também, porque p ∧ q exige p verdadeira. Em ambos os casos o valor da expressão acompanha exatamente o de p.\n\nAs alternativas que mantêm q na resposta ignoram justamente o que a absorção elimina: q não influencia o resultado em linha nenhuma.\n\nA lei tem forma gêmea para o outro conectivo: p ∧ (p ∨ q) também equivale a p. As duas aparecem em simplificação de circuitos e de expressões, e reconhecê-las evita montar tabelas de quatro linhas sem necessidade.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "media",
    enunciado:
      "Em uma repartição, sabe-se que a proposição \"Se o sistema estiver fora do ar, o atendimento será suspenso\" é verdadeira. Também se sabe que o sistema está fora do ar. Qual regra de inferência permite concluir que o atendimento será suspenso?",
    opcoes: [
      "Modus tollens",
      "Silogismo hipotético",
      "Silogismo disjuntivo",
      "Lei de De Morgan",
      "Modus ponens",
    ],
    correta: 4,
    explicacao:
      "O modus ponens parte de p → q e de p, e conclui q. É o caso aqui: a condicional é verdadeira e o antecedente se verificou, então o consequente se impõe.\n\nO modus tollens é a regra vizinha, mas opera no sentido inverso: parte de p → q e de ~q para concluir ~p. Seria a regra aplicável se soubéssemos que o atendimento NÃO foi suspenso.\n\nO silogismo hipotético encadeia duas condicionais (p → q, q → r, logo p → r). O silogismo disjuntivo parte de uma disjunção e da negação de uma parcela para afirmar a outra. E De Morgan não é regra de inferência, mas de equivalência: transforma expressões sem tirar conclusões novas.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "dificil",
    enunciado:
      "Sabe-se que \"O relatório foi assinado ou o parecer foi juntado\" é verdadeira e que \"O relatório foi assinado\" é falsa. O que se conclui?",
    opcoes: [
      "O parecer não foi juntado",
      "Nada se pode concluir sobre o parecer",
      "O relatório será assinado posteriormente",
      "As duas afirmações são incompatíveis entre si",
      "O parecer foi juntado",
    ],
    correta: 4,
    explicacao:
      "É o silogismo disjuntivo: de p ∨ q verdadeira e de ~p, conclui-se q. Como a disjunção precisa de ao menos uma parcela verdadeira e a primeira falhou, a segunda tem de sustentá-la.\n\nResponder \"nada se pode concluir\" é transportar para cá a lição de que negar o antecedente não conclui. Mas isso vale para condicional, não para disjunção — aqui a negação de uma parcela conclui, e conclui de forma inequívoca.\n\nSupor incompatibilidade entre as duas afirmações também erra: a disjunção verdadeira convive perfeitamente com uma parcela falsa; é exatamente para isso que serve o \"ou\". Só seria contraditório se ambas as parcelas fossem falsas.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "media",
    enunciado:
      "Qual das proposições abaixo NÃO é equivalente a p → q?",
    opcoes: [
      "~q → ~p",
      "~p ∨ q",
      "~(p ∧ ~q)",
      "~(p ∧ ~q) ∨ (p → q)",
      "~p → ~q",
    ],
    correta: 4,
    explicacao:
      "A expressão ~p → ~q é a INVERSA da condicional, e não lhe é equivalente. Teste com p falsa e q verdadeira: p → q é verdadeira, porque o antecedente é falso, mas ~p → ~q fica V → F, ou seja, falsa. Uma linha divergente basta.\n\nAs demais são equivalentes. A contrapositiva ~q → ~p é a equivalência mais conhecida. A forma disjuntiva ~p ∨ q se obtém negando o antecedente. E ~(p ∧ ~q) é a negação da negação: como ~(p → q) = p ∧ ~q, negar isso devolve a condicional.\n\nQuestões de \"qual NÃO é\" exigem checar todas, e a inversa é a armadilha mais recorrente, por soar natural em português.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Proposições e conectivos lógicos",
    dificuldade: "media",
    enunciado:
      "Se a proposição composta p ↔ q é falsa, qual das afirmações abaixo é necessariamente verdadeira?",
    opcoes: [
      "p e q são ambas falsas",
      "p e q são ambas verdadeiras",
      "p é verdadeira e q é falsa, necessariamente",
      "Nada se pode afirmar sobre p e q",
      "p e q têm valores lógicos diferentes",
    ],
    correta: 4,
    explicacao:
      "A bicondicional é verdadeira quando os valores coincidem e falsa quando divergem. Sendo ela falsa, os valores necessariamente diferem — uma componente é verdadeira e a outra é falsa.\n\nAs alternativas que colocam p e q com o mesmo valor descrevem coincidência, que é justamente o que torna a bicondicional VERDADEIRA. São o oposto do pedido.\n\nEscolher uma das duas linhas divergentes e apresentá-la como necessária vai longe demais: a outra linha é igualmente compatível com o enunciado. Concluir mais do que os dados permitem é erro tão grave quanto concluir de menos — e a saída \"nada se pode afirmar\" comete o segundo, já que algo se pode afirmar: a divergência.",
  },
];
