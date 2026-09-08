/* Tabelas-verdade e equivalências (30 questões) — RASCUNHO gerado por gemini-3.6-flash.
   Dedup: exato + semântico (Jaccard trigrama ≥ 0.5); 0 rejeitada(s) na geração.
   CONFERÊNCIA NÃO CONCLUÍDA — confira o gabarito à mão.
   NÃO revisado. Confira gabarito e contas antes de semear.
   Passou por rebalancear-gabarito.mjs e checar-qualidade.mjs. */

export const questoes = [
  {
    materia: "raciocinio-logico",
    tema: "Tabelas-verdade e equivalências",
    dificuldade: "facil",
    enunciado:
      "Em um concurso público, o regulamento apresenta a seguinte regra condicional: 'Se o candidato chegar após o horário estipulado, então ele será desclassificado.' Considerando a lógica proposicional, qual proposição logicamente equivalente representa essa mesma regra?",
    opcoes: [
      "O candidato não chega após o horário estipulado ou ele é desclassificado.",
      "Se o candidato for desclassificado, então ele chegou após o horário estipulado.",
      "O candidato chega após o horário estipulado e não é desclassificado.",
      "Se o candidato não chegar após o horário estipulado, então ele não será desclassificado.",
      "O candidato não chega após o horário estipulado e é desclassificado.",
    ],
    correta: 0,
    explicacao:
      "A regra condicional apresentada possui a estrutura P -> Q, onde P é 'O candidato chega após o horário' e Q é 'Ele é desclassificado'. Uma das equivalências lógicas fundamentais da condicional é a regra da disjunção: P -> Q é logicamente equivalente a ~P v Q (negar o antecedente OU manter o consequente). Assim, a equivalência é 'O candidato não chega após o horário estipulado ou ele é desclassificado'. Os distratores erram ao confundir a equivalência com a conversa (Q -> P), com a negação da condicional (P e ~Q), com a inversa (~P -> ~Q) ou ao montar uma conjunção incorreta (~P e Q).",
  },
  {
    materia: "raciocinio-logico",
    tema: "Tabelas-verdade e equivalências",
    dificuldade: "facil",
    enunciado:
      "Um auditor analisa a seguinte declaração em um parecer técnico: 'O relatório foi entregue no prazo e o orçamento foi aprovado.' Para negar logicamente essa afirmação conjuntiva de forma correta, qual proposição o auditor deve utilizar?",
    opcoes: [
      "O relatório não foi entregue no prazo e o orçamento não foi aprovado.",
      "O relatório não foi entregue no prazo ou o orçamento não foi aprovado.",
      "Se o relatório foi entregue no prazo, então o orçamento não foi aprovado.",
      "O relatório foi entregue no prazo ou o orçamento não foi aprovado.",
      "Se o relatório não foi entregue no prazo, então o orçamento foi aprovado.",
    ],
    correta: 1,
    explicacao:
      "A proposição dada é uma conjunção na forma P e Q. De acordo com a primeira Lei de De Morgan, a negação de uma conjunção ~(P e Q) é logicamente equivalente à disjunção das negações (~P ou ~Q). Portanto, para negar a proposição, nega-se a primeira parte, troca-se o conectivo 'e' pelo 'ou', e nega-se a segunda parte: 'O relatório não foi entregue no prazo OU o orçamento não foi aprovado'. Os distratores erram por manter o conectivo 'e' negando ambas, transformar indevidamente a sentença em uma condicional ou negar apenas um dos componentes mantendo o conectivo 'ou'.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Tabelas-verdade e equivalências",
    dificuldade: "media",
    enunciado:
      "Um sistema de segurança predial opera com a seguinte premissa lógica verdadeira: 'Se o alarme dispara, então a porta principal se tranca imediatamente.' Sabendo que essa afirmação é verdadeira, qual proposição também é necessariamente verdadeira por equivalência lógica contrapositiva?",
    opcoes: [
      "Se a porta principal se tranca imediatamente, então o alarme dispara.",
      "Se o alarme não dispara, então a porta principal não se tranca imediatamente.",
      "Se a porta principal não se tranca imediatamente, então o alarme não dispara.",
      "O alarme dispara e a porta principal não se tranca imediatamente.",
      "O alarme não dispara se e somente se a porta principal se tranca imediatamente.",
    ],
    correta: 2,
    explicacao:
      "A equivalência lógica por contraposição estabelece que uma condicional P -> Q é perfeitamente equivalente a ~Q -> ~P (inverte-se a ordem do antecedente e do consequente e nega-se ambos). Assim, a partir de 'Se o alarme dispara (P), então a porta se tranca (Q)', a contrapositiva equivalente é 'Se a porta principal não se tranca imediatamente (~Q), então o alarme não dispara (~P)'. Os distratores incorrem em erros clássicos: a conversa (Q -> P), a inversa (~P -> ~Q), a negação da condicional (P e ~Q) e uma bicondicional sem respaldo lógico.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Tabelas-verdade e equivalências",
    dificuldade: "media",
    enunciado:
      "Um analista de sistemas precisa construir a tabela-verdade completa para a proposição composta S = (P v ~Q) -> (R e ~S), na qual P, Q, R e S representam proposições simples independentes. Quantas linhas possui essa tabela-verdade?",
    opcoes: [
      "8 linhas.",
      "12 linhas.",
      "16 linhas.",
      "32 linhas.",
      "64 linhas.",
    ],
    correta: 2,
    explicacao:
      "O número de linhas de uma tabela-verdade é determinado pela fórmula 2^n, em que n representa a quantidade de proposições simples (variáveis proposicionais) distintas presentes na expressão composta. Na proposição fornecida, existem 4 proposições simples distintas: P, Q, R e S. Portanto, o número total de linhas da tabela-verdade é 2^4 = 16. Os distratores derivam de erros de contagem: considerar apenas 3 variáveis (2^3 = 8), multiplicar 4 variáveis por 3 conectivos (4 x 3 = 12), contar negações/conectivos como variáveis adicionais (2^5 = 32) ou usar potências invertidas (4^3 = 64).",
  },
  {
    materia: "raciocinio-logico",
    tema: "Tabelas-verdade e equivalências",
    dificuldade: "media",
    enunciado:
      "A regra de um processo seletivo estabelece que: 'O candidato é aprovado se e somente se obtiver nota superior a 70 pontos.' Qual proposição apresenta a equivalência lógica correta da estrutura bicondicional apresentada?",
    opcoes: [
      "Se o candidato é aprovado, então ele obteve nota superior a 70 pontos; e se obteve nota superior a 70 pontos, então é aprovado.",
      "Se o candidato não é aprovado, então ele obteve nota superior a 70 pontos.",
      "O candidato é aprovado ou obteve nota superior a 70 pontos, mas não ambos.",
      "O candidato não é aprovado e obtém nota superior a 70 pontos.",
      "Se o candidato obteve nota superior a 70 pontos, então ele não é aprovado.",
    ],
    correta: 0,
    explicacao:
      "A bicondicional P <-> Q ('P se e somente se Q') afirma uma relação de dupla implicação. A sua equivalência lógica fundamental é expressa pela conjunção de duas condicionais nas duas direções: (P -> Q) e (Q -> P). Traduzindo: 'Se o candidato é aprovado, então obteve nota superior a 70 pontos; E se obteve nota superior a 70 pontos, então é aprovado'. Os distratores contêm erros conceituais como confundir bicondicional com disjunção exclusiva ('ou... ou'), usar condicionais unilaterais ou formular contradições.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Tabelas-verdade e equivalências",
    dificuldade: "media",
    enunciado:
      "Em lógica proposicional, uma tautologia é uma proposição composta cujo valor lógico é sempre verdadeiro, independentemente do valor de verdade das proposições simples componentes. Qual das proposições compostas a seguir configura uma tautologia?",
    opcoes: [
      "P e ~P",
      "P -> ~P",
      "P v ~P",
      "(P v Q) -> P",
      "(P e Q) <-> ~P",
    ],
    correta: 2,
    explicacao:
      "A proposição P v ~P representa o Princípio do Terceiro Excluído. Se P for verdadeiro, a disjunção é verdadeira; se P for falso, ~P é verdadeiro, tornando a disjunção também verdadeira. Como o valor final é obrigatoriamente Verdadeiro em todos os casos, P v ~P é uma tautologia. A opção 'P e ~P' é uma contradição (sempre falsa). As demais opções ('P -> ~P', '(P v Q) -> P' e '(P e Q) <-> ~P') são contingências, pois assumem valores Verdadeiro ou Falso a depender do valor atribuído às variáveis.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Tabelas-verdade e equivalências",
    dificuldade: "media",
    enunciado:
      "Considere a proposição composta expressa por P -> (Q v ~P), em que P e Q são proposições simples. Ao construir a tabela-verdade dessa proposição, em quantas linhas o valor lógico final resulta em VERDADEIRO?",
    opcoes: [
      "0 linhas.",
      "1 linha.",
      "2 linhas.",
      "3 linhas.",
      "4 linhas.",
    ],
    correta: 3,
    explicacao:
      "Analisando a tabela-verdade com 4 linhas (combinações de P e Q): 1) P=V, Q=V: ~P=F; (Q v ~P) = V v F = V; P -> V resulta V. 2) P=V, Q=F: ~P=F; (Q v ~P) = F v F = F; P -> F resulta F. 3) P=F, Q=V: ~P=V; (Q v ~P) = V v V = V; F -> V resulta V. 4) P=F, Q=F: ~P=V; (Q v ~P) = F v V = V; F -> V resulta V. Portanto, a proposição é verdadeira em exatamente 3 das 4 linhas (linhas 1, 3 e 4). O erro dos distratores é errar o cálculo da condicional com antecedente falso ou assumir erroneamente que se trata de uma tautologia (4 linhas) sem avaliar o caso P=V e Q=F.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Tabelas-verdade e equivalências",
    dificuldade: "media",
    enunciado:
      "A afirmação 'Se o fiscal realiza a vistoria, então a obra é autorizada' foi classificada como FALSA por uma equipe de fiscalização. Qual proposição descreve corretamente essa situação de falsidade?",
    opcoes: [
      "O fiscal não realiza a vistoria e a obra não é autorizada.",
      "O fiscal realiza a vistoria e a obra não é autorizada.",
      "Se o fiscal não realiza a vistoria, então a obra não é autorizada.",
      "O fiscal não realiza a vistoria ou a obra é autorizada.",
      "Se a obra não é autorizada, então o fiscal não realiza a vistoria.",
    ],
    correta: 1,
    explicacao:
      "A negação de uma proposição condicional P -> Q é dada pela regra ~(P -> Q) = P e ~Q (mantém-se a primeira proposição E nega-se a segunda). Portanto, a única situação na qual a condicional é falsa ocorre quando o antecedente é verdadeiro e o consequente é falso: 'O fiscal realiza a vistoria E a obra não é autorizada'. Os distratores erram ao negar a condicional usando outra condicional (~P -> ~Q), ao negar a primeira parte (~P e ~Q), ao usar a equivalência disjuntiva (~P v Q) ou ao aplicar a contrapositiva.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Tabelas-verdade e equivalências",
    dificuldade: "dificil",
    enunciado:
      "Uma norma corporativa de gestão expressa a seguinte disjunção inclusiva verdadeira: 'O funcionário realiza o treinamento de reciclagem ou ele é remanejado de setor.' Qual proposição condicional é logicamente equivalente a essa norma corporativa?",
    opcoes: [
      "Se o funcionário não realiza o treinamento de reciclagem, então ele é remanejado de setor.",
      "Se o funcionário realiza o treinamento de reciclagem, então ele é remanejado de setor.",
      "Se o funcionário é remanejado de setor, então ele não realiza o treinamento de reciclagem.",
      "Se o funcionário não é remanejado de setor, então ele não realiza o treinamento de reciclagem.",
      "Se o funcionário realiza o treinamento de reciclagem, então ele não é remanejado de setor.",
    ],
    correta: 0,
    explicacao:
      "Uma proposição disjuntiva P v Q ('P ou Q') pode ser reescrita de forma equivalente na estrutura condicional através da regra P v Q = ~P -> Q (nega-se o primeiro termo e mantém-se o segundo). Aplicando essa transformação à norma dada ('realiza o treinamento' v 'é remanejado'): nega-se a primeira parte ('Se o funcionário não realiza o treinamento...') e mantém-se a segunda ('...então ele é remanejado de setor'). Os distratores trocam sinais (~P -> ~Q), invertem causa e efeito sem negar corretamente, ou mantêm o antecedente sem negar (P -> Q).",
  },
  {
    materia: "raciocinio-logico",
    tema: "Tabelas-verdade e equivalências",
    dificuldade: "dificil",
    enunciado:
      "Considere a proposição composta A: 'O projeto é aprovado ou (o orçamento é reduzido e o prazo é prorrogado)'. Para realizar a negação lógica completa e correta da proposição A, qual proposição composta deve ser construída?",
    opcoes: [
      "O projeto não é aprovado e (o orçamento não é reduzido ou o prazo não é prorrogado).",
      "O projeto não é aprovado ou (o orçamento não é reduzido e o prazo não é prorrogado).",
      "O projeto não é aprovado e (o orçamento não é reduzido e o prazo não é prorrogado).",
      "Se o projeto não é aprovado, então o orçamento é reduzido e o prazo é prorrogado.",
      "O projeto é aprovado e (o orçamento não é reduzido ou o prazo não é prorrogado).",
    ],
    correta: 0,
    explicacao:
      "A proposição possui a estrutura P v (Q e R). A negação de uma disjunção principal exige trocar o conectivo 'ou' pelo 'e' e negar ambos os lados: ~P e ~(Q e R). Em seguida, aplicando a Lei de De Morgan na conjunção interna ~(Q e R), obtém-se (~Q ou ~R). Unindo os resultados, a negação completa é ~P e (~Q ou ~R): 'O projeto não é aprovado E (o orçamento não é reduzido OU o prazo não é prorrogado)'. Os distratores erram por não alterar o conectivo principal 'ou' para 'e', por não alterar o conectivo interno 'e' para 'ou', por negar apenas os termos mantendo a conjunção interna, ou por tentar transformar a negação em condicional.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Tabelas-verdade e equivalências",
    dificuldade: "facil",
    enunciado:
      "Um estudante de concurso público analisa a proposição condicional: \"Se o candidato estuda com constância, então ele alcança a aprovação.\" De acordo com os princípios da lógica proposicional e a regra da contrapositiva, qual proposição a seguir é logicamente equivalente a essa afirmação?",
    opcoes: [
      "Se o candidato não alcança a aprovação, então ele não estuda com constância.",
      "Se o candidato não estuda com constância, então ele não alcança a aprovação.",
      "Se o candidato alcança a aprovação, então ele estuda com constância.",
      "O candidato estuda com constância e não alcança a aprovação.",
      "O candidato não estuda com constância ou não alcança a aprovação.",
    ],
    correta: 0,
    explicacao:
      "A equivalência lógica da condicional p -> q é dada pela sua contrapositiva ~q -> ~p. Na proposição do enunciado, p representa 'o candidato estuda com constância' e q representa 'ele alcança a aprovação'. Para formar a contrapositiva, invertem-se e negam-se ambas as proposições simples, obtendo: 'Se o candidato não alcança a aprovação, então ele não estuda com constância'. A alternativa que nega ambas as proposições mantendo a ordem inicial (~p -> ~q) comete o erro da contrária. A alternativa que apenas inverte a ordem sem negar (q -> p) incorre no erro da recíproca. A proposição estruturada com o conectivo 'e' (p e ~q) representa a negação lógica da condicional, e não uma equivalência. Por fim, a opção que utiliza uma disjunção entre duas negações (~p ou ~q) aplica incorretamente a Lei de De Morgan a uma estrutura condicional.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Tabelas-verdade e equivalências",
    dificuldade: "facil",
    enunciado:
      "Considere a proposição composta proferida por um advogado durante um debate judiciário: \"O réu não é culpado ou o processo será arquivado.\" Sabendo que essa sentença possui a forma lógica ~p ou q, qual das proposições abaixo apresenta uma relação de equivalência lógica direta com a afirmação do advogado?",
    opcoes: [
      "Se o réu não é culpado, então o processo será arquivado.",
      "Se o processo será arquivado, então o réu não é culpado.",
      "Se o réu é culpado, então o processo será arquivado.",
      "O réu é culpado e o processo não será arquivado.",
      "O réu é culpado ou o processo não será arquivado.",
    ],
    correta: 2,
    explicacao:
      "A equivalência entre uma disjunção inclusiva da forma ~p ou q e uma condicional é dada por p -> q, conforme a regra da equivalência da condicional (nega-se a primeira parte e mantém-se a segunda). Como a proposição inicial traz a negação ~p ('O réu não é culpado'), a sua negação p fica 'O réu é culpado'. Mantendo-se q ('o processo será arquivado'), obtém-se a condicional 'Se o réu é culpado, então o processo será arquivado'. A opção 'Se o réu não é culpado...' falha ao não negar a primeira proposição na transição para a condicional (~p -> q). A opção 'Se o processo será arquivado...' comete a falácia de inverter o antecedente e o consequente (q -> ~p). A alternativa com o conectivo 'e' (p e ~q) representa a negação da sentença original. A proposição que troca o sinal de arquivamento comete um erro de alteração de valores lógicos nas componentes.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Tabelas-verdade e equivalências",
    dificuldade: "media",
    enunciado:
      "Considere três proposições simples p, q e r, e a proposição composta P(p, q, r) definida por (p e q) -> (~p ou r). Na tabela-verdade completa dessa proposição composta, que possui exatamente 8 linhas, quantas linhas apresentam valor lógico Falso (F)?",
    opcoes: [
      "2",
      "1",
      "3",
      "4",
      "7",
    ],
    correta: 1,
    explicacao:
      "Uma condicional da forma A -> B é falsa unicamente quando o antecedente A é Verdadeiro (V) e o consequente B é Falso (F). Na proposição dada, o antecedente é A = (p e q) e o consequente é B = (~p ou r). Para que o antecedente (p e q) seja verdadeiro, é estritamente necessário que p = V e q = V. Sabendo que p = V, o termo ~p torna-se Falso (F). Assim, o consequente B passa a ser (F ou r), cujo valor lógico depende exclusivamente de r; para que B seja Falso, é necessário que r = F. Portanto, a única combinação de valores lógicos das três variáveis que torna a proposição P(p, q, r) falsa é (p=V, q=V, r=F). Isso significa que existe exatamente 1 linha na tabela-verdade com valor Falso. As opções com 2, 3 ou 4 linhas resultam da aplicação incorreta das regras da conjunção e disjunção ou da falsa suposição de simetria. A opção com 7 linhas indica a contagem das linhas Verdadeiras, invertendo o comando da questão.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Tabelas-verdade e equivalências",
    dificuldade: "media",
    enunciado:
      "Um auditor de controle interno declara: \"O relatório é aprovado se e somente se o orçamento estiver equilibrado.\" Sabendo que essa sentença é uma bicondicional da forma p <-> q, qual das proposições a seguir é logicamente equivalente a essa afirmação?",
    opcoes: [
      "Se o relatório é aprovado, então o orçamento está equilibrado, ou se o orçamento está equilibrado, então o relatório é aprovado.",
      "O relatório não é aprovado ou o orçamento não está equilibrado.",
      "Se o relatório não é aprovado, então o orçamento está equilibrado.",
      "O relatório é aprovado e o orçamento está equilibrado, ou o relatório não é aprovado e o orçamento não está equilibrado.",
      "O relatório é aprovado e o orçamento está equilibrado, e o relatório não é aprovado e o orçamento não está equilibrado.",
    ],
    correta: 3,
    explicacao:
      "A bicondicional p <-> q indica que p e q possuem rigorosamente o mesmo valor lógico (ambas são verdadeiras ou ambas são falsas). Uma das equivalências lógicas fundamentais da bicondicional é a disjunção de duas conjunções: (p e q) ou (~p e ~q). Em linguagem corrente, isso significa: 'O relatório é aprovado e o orçamento está equilibrado, ou o relatório não é aprovado e o orçamento não está equilibrado'. A opção que une duas condicionais com o conectivo 'ou' erra porque a equivalência exige o conectivo 'e' entre as condicionais ((p -> q) e (q -> p)). A opção com disjunção simples nega ambas sem a estrutura bicondicional. A opção com condicional simples de negação distorce a relação de equivalência mútua. A opção que junta as duas possibilidades com o conectivo 'e' resulta em uma contradição lógica, pois p e ~p não podem ocorrer simultaneamente.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Tabelas-verdade e equivalências",
    dificuldade: "media",
    enunciado:
      "Em um teste de perícia técnica, a defesa afirma que a proposição \"Não é verdade que o motorista estava correndo e o freio não funcionou\" descreve a realidade dos fatos. Sabendo que essa frase corresponde à negação de uma conjunção na forma ~(p e ~q), qual proposição representa uma equivalência lógica correta para a declaração da defesa?",
    opcoes: [
      "O motorista não estava correndo e o freio funcionou.",
      "Se o freio funcionou, então o motorista não estava correndo.",
      "O motorista estava correndo ou o freio não funcionou.",
      "Se o motorista não estava correndo, então o freio não funcionou.",
      "Se o motorista estava correndo, então o freio funcionou.",
    ],
    correta: 4,
    explicacao:
      "A sentença dada é ~(p e ~q). Aplicando a Primeira Lei de De Morgan para negar a conjunção, obtemos ~p ou ~(~q), o que se simplifica para ~p ou q. Sabendo que a disjunção ~p ou q é equivalente à condicional p -> q, temos a proposição: 'Se o motorista estava correndo, então o freio funcionou'. A opção com a conjunção 'e' nega os termos incorretamente trocando os conectivos sem aplicar De Morgan. A alternativa que inverte a condicional para q -> ~p comete o erro da conversão recíproca. A opção que apenas remove a negação externa mantém a negação interna de forma equivocada. A alternativa com ~p -> ~q representa a contrária, cometendo erro de construção condicional.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Tabelas-verdade e equivalências",
    dificuldade: "media",
    enunciado:
      "Durante uma aula de lógica proposicional, o professor apresenta diversas proposições compostas formadas pelas variáveis simples p e q. Ele pede aos alunos que identifiquem a estrutura que possui valor lógico sempre Verdadeiro (V), independentemente das valorações atribuídas a p e a q. Qual das proposições a seguir é uma tautologia?",
    opcoes: [
      "(p -> q) e (q -> p)",
      "(p -> q) ou (q -> p)",
      "(p e q) -> (p e ~q)",
      "(p ou q) -> (p e q)",
      "~(p -> q) e (p -> q)",
    ],
    correta: 1,
    explicacao:
      "Uma tautologia é uma proposição cujo valor lógico na tabela-verdade é sempre V. Ao reescrever a proposição (p -> q) ou (q -> p) utilizando a equivalência da condicional, temos (~p ou q) ou (~q ou p). Reorganizando os termos pela propriedade associativa e comutativa da disjunção, obtemos (~p ou p) ou (~q ou q). Como (~p ou p) é sempre V e (~q ou q) é sempre V, a expressão resulta em V ou V, que é uma tautologia (sempre Verdadeira). A alternativa com a conjunção 'e' resulta na bicondicional p <-> q, que é uma contingência (falsa quando p e q têm valores opostos). A opção (p e q) -> (p e ~q) é falsa quando p=V e q=V. A opção (p ou q) -> (p e q) é falsa para p=V e q=F. A expressão ~(p -> q) e (p -> q) é a conjunção de uma sentença com a sua negação, constituindo uma contradição (sempre Falsa).",
  },
  {
    materia: "raciocinio-logico",
    tema: "Tabelas-verdade e equivalências",
    dificuldade: "media",
    enunciado:
      "Um analista de sistemas registra a seguinte especificação técnica: \"Se o sistema é atualizado, então a segurança é reforçada ou a velocidade aumenta.\" Essa sentença possui a forma lógica p -> (q ou r). Qual das proposições abaixo é logicamente equivalente à afirmação do analista?",
    opcoes: [
      "Se a segurança não é reforçada e a velocidade não aumenta, então o sistema não é atualizado.",
      "Se o sistema não é atualizado, então a segurança não é reforçada e a velocidade não aumenta.",
      "Se a segurança é reforçada ou a velocidade aumenta, então o sistema é atualizado.",
      "Se a segurança não é reforçada, então a velocidade não aumenta e o sistema não é atualizado.",
      "O sistema é atualizado e a segurança não é reforçada e a velocidade não aumenta.",
    ],
    correta: 0,
    explicacao:
      "A equivalência da condicional p -> (q ou r) por contraposição é obtida negando o consequente e o antecedente e invertendo a ordem: ~(q ou r) -> ~p. Aplicando a Lei de De Morgan à negação da disjunção ~(q ou r), obtemos (~q e ~r). Assim, a contrapositiva completa fica (~q e ~r) -> ~p, que traduzida é: 'Se a segurança não é reforçada e a velocidade não aumenta, então o sistema não é atualizado'. A opção que nega os termos mantendo a ordem (~p -> (~q e ~r)) comete o erro da contrária. A opção que apenas inverte sem negar ((q ou r) -> p) comete o erro da recíproca. A alternativa com negação parcial mistura conectivos e antecedentemente de forma inconsistente. A opção com conectivos 'e' entre todos os termos é a negação da proposição original (p e ~q e ~r).",
  },
  {
    materia: "raciocinio-logico",
    tema: "Tabelas-verdade e equivalências",
    dificuldade: "dificil",
    enunciado:
      "Em um processo de simplificação de expressões booleanas para circuitos de dados, um engenheiro encontra a função lógica dada pela proposição composta P(p, q) = (p e q) ou (p e ~q). Ele deseja substituir essa expressão por uma forma equivalente que utilize o menor número possível de conectivos sem alterar a tabela-verdade. Qual é a proposição simplificada equivalente a P(p, q)?",
    opcoes: [
      "q",
      "p ou q",
      "p",
      "p e q",
      "~p",
    ],
    correta: 2,
    explicacao:
      "Para simplificar a proposição P(p, q) = (p e q) ou (p e ~q), podemos aplicar a propriedade distributiva da conjunção em relação à disjunção no sentido inverso, 'colocando p em evidência': p e (q ou ~q). Sabendo que a disjunção (q ou ~q) é uma tautologia, ou seja, seu valor lógico é sempre Verdadeiro (V), a expressão reduz-se a (p e V). Pela regra da identidade da conjunção, qualquer proposição ligada por 'e' a uma tautologia equivale à própria proposição. Portanto, (p e V) é equivalente a p. A alternativa q erra ao supor que a variável q prevalece sobre p. A opção p ou q aplica a distributiva de forma errônea. A alternativa p e q descarta indevidamente o termo com a negação. A opção ~p inverte incorretamente o resultado final da variável mantida.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Tabelas-verdade e equivalências",
    dificuldade: "dificil",
    enunciado:
      "Um protocolo de segurança em informática valida o acesso de um usuário através da condição lógica: \"Ou o acesso é autorizado ou a senha é alterada\", utilizando a disjunção exclusiva. Sabendo que o Ou exclusivo entre duas proposições p e q é verdadeiro apenas quando exatamente uma das proposições é verdadeira, qual das expressões a seguir representa uma equivalência lógica correta da disjunção exclusiva?",
    opcoes: [
      "(p e q) ou (~p e ~q)",
      "(p ou q) e (p e q)",
      "(p -> q) e (q -> p)",
      "(p e ~q) ou (~p e q)",
      "~p ou ~q",
    ],
    correta: 3,
    explicacao:
      "A disjunção exclusiva p XOR q é verdadeira quando p é verdadeiro e q é falso, OU quando p é falso e q é verdadeiro. A sua definição formal equivalente usando os conectivos básicos de conjunção, disjunção e negação é (p e ~q) ou (~p e q). A alternativa (p e q) ou (~p e ~q) representa a bicondicional p <-> q, que é a negação exata do Ou exclusivo. A opção (p ou q) e (p e q) é uma construção contraditória que exige que ambas ocorram simultaneamente. A opção com a conjunção de condicionais (p -> q) e (q -> p) é a forma clássica de equivalência da bicondicional simples. A opção ~p ou ~q é a negação da conjunção (NAND via De Morgan) e não descreve a exclusividade da disjunção.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Tabelas-verdade e equivalências",
    dificuldade: "media",
    enunciado:
      "Um auditor afirma: \"Se o contrato é assinado, então a obra é iniciada.\" Para reescrever essa afirmação sob a forma de uma disjunção inclusiva equivalente, mantendo o mesmo valor lógico para todas as valorações possíveis das proposições simples envolvidas, qual proposição deve ser utilizada?",
    opcoes: [
      "O contrato não é assinado ou a obra é iniciada.",
      "O contrato é assinado ou a obra não é iniciada.",
      "O contrato não é assinado ou a obra não é iniciada.",
      "O contrato é assinado e a obra não é iniciada.",
      "O contrato é assinado ou a obra é iniciada.",
    ],
    correta: 0,
    explicacao:
      "A regra de equivalência da condicional estabelece que p -> q é logicamente equivalente a ~p ou q. Na sentença do enunciado, p é 'o contrato é assinado' e q é 'a obra é iniciada'. Negando o antecedente p, obtemos 'O contrato não é assinado'. Mantendo o consequente q, temos 'a obra é iniciada'. Unindo ambas com o conectivo de disjunção inclusiva 'ou', a sentença equivalente é: 'O contrato não é assinado ou a obra é iniciada'. A opção 'O contrato é assinado ou a obra não é iniciada' inverte a negação (p ou ~q). A alternativa que nega ambas as proposições (~p ou ~q) aplica a Lei de De Morgan de forma equivocada. A opção com o conectivo 'e' (p e ~q) é a negação da condicional, e não a sua equivalência. A alternativa que não nega nenhuma das proposições (p ou q) desrespeita a regra de transformação de condicionais.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Tabelas-verdade e equivalências",
    dificuldade: "facil",
    enunciado:
      "Em uma análise de lógica proposicional, um analista precisa construir a tabela-verdade da proposição composta S = (P e Q) -> (R ou não P). Quantas linhas com combinações distintas de valores-verdade possui a tabela-verdade dessa proposição S?",
    opcoes: [
      "4",
      "6",
      "8",
      "12",
      "16",
    ],
    correta: 2,
    explicacao:
      "O número de linhas de uma tabela-verdade é determinado pela fórmula 2^n, onde n representa a quantidade de proposições simples distintas presentes na expressão. Na proposição analisada, identificamos apenas 3 proposições simples distintas: P, Q e R (vale notar que a negação 'não P' não é uma nova variável, mas sim uma modificação da variável P). Aplicando a fórmula, obtemos 2^3 = 8 linhas distintas. O erro comum que leva ao resultado 16 ocorre ao contar 'não P' como uma quarta variável independente (2^4 = 16). O resultado 6 decorre do erro de multiplicar o número de variáveis pelo valor binário (3 x 2 = 6). O valor 4 considera apenas duas variáveis, e 12 surge de equívocos de cálculo operacional.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Tabelas-verdade e equivalências",
    dificuldade: "facil",
    enunciado:
      "Considere a seguinte afirmação feita por um fiscal de trânsito: 'Se o motorista consumiu bebida alcoólica, então ele será multado.' Assumindo essa afirmação como verdadeira, qual sentença logicamente equivalente representa essa mesma regra?",
    opcoes: [
      "Se o motorista não foi multado, então ele não consumiu bebida alcoólica.",
      "Se o motorista foi multado, então ele consumiu bebida alcoólica.",
      "Se o motorista não consumiu bebida alcoólica, então ele não será multado.",
      "O motorista consumiu bebida alcoólica e não será multado.",
      "O motorista não consumiu bebida alcoólica e será multado.",
    ],
    correta: 0,
    explicacao:
      "A equivalência lógica de uma proposição condicional do tipo P -> Q dada pela contrapositiva é não Q -> não P. Ou seja, para manter a equivalência, devemos negar ambas as proposições e inverter a ordem da implicação, resultando em 'Se o motorista não foi multado, então ele não consumiu bebida alcoólica'. A frase 'Se o motorista foi multado, então ele consumiu bebida alcoólica' comete o erro de apenas inverter a ordem das proposições sem negá-las (recíproca, Q -> P). A frase 'Se o motorista não consumiu bebida alcoólica, então ele não será multado' comete o erro de apenas negar ambas as proposições sem inverter a ordem (contrária, não P -> não Q). Já as opções estruturadas com 'e' representam negações ou combinações arbitrárias, e não equivalências da condicional.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Tabelas-verdade e equivalências",
    dificuldade: "media",
    enunciado:
      "Durante um julgamento, o advogado afirmou: 'Se o réu estava no local do crime, então ele é culpado.' Para contradizer formalmente essa afirmação, provando que ela é falsa segundo a lógica proposicional, qual situação precisa ser demonstrada?",
    opcoes: [
      "O réu estava no local do crime e não é culpado.",
      "Se o réu não estava no local do crime, então ele não é culpado.",
      "O réu não estava no local do crime e é culpado.",
      "Se o réu é culpado, então ele estava no local do crime.",
      "O réu não estava no local do crime ou não é culpado.",
    ],
    correta: 0,
    explicacao:
      "Para negar (contradizer) uma proposição condicional da forma P -> Q, aplica-se a regra lógica do MANE (MANTÉM a primeira E NEGA a segunda), o que produz a conjunção P e não Q. Assim, a negação formal da declaração é 'O réu estava no local do crime e ele não é culpado'. As opções que utilizam a estrutura 'Se... então' erram ao tentar negar uma condicional construindo outra condicional, o que é um equívoco conceitual clássico. A proposição 'O réu não estava no local do crime e é culpado' erra ao negar a primeira parte e manter a segunda (não P e Q). A frase com a disjunção 'ou' confunde a negação da condicional com a aplicação das Leis de De Morgan para conjunções.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Tabelas-verdade e equivalências",
    dificuldade: "media",
    enunciado:
      "Uma empresa possui uma diretriz de segurança expressa pela proposição: 'O funcionário usava crachá e estava autorizado.' De acordo com as leis de De Morgan, qual proposição representa a negação lógica exata dessa diretriz?",
    opcoes: [
      "O funcionário não usava crachá ou não estava autorizado.",
      "O funcionário não usava crachá e não estava autorizado.",
      "Se o funcionário usava crachá, então não estava autorizado.",
      "O funcionário usava crachá ou não estava autorizado.",
      "Se o funcionário não usava crachá, então não estava autorizado.",
    ],
    correta: 0,
    explicacao:
      "Pela primeira Lei de De Morgan, a negação de uma conjunção do tipo não(P e Q) é logicamente equivalente a (não P ou não Q). Ou seja, nega-se a primeira proposição simples, altera-se o conectivo 'e' para 'ou', e nega-se a segunda proposição simples, resultando em 'O funcionário não usava crachá ou não estava autorizado'. A opção que mantém o conectivo 'e' (não P e não Q) incorre no erro clássico de negar os termos sem trocar o operador lógico. As alternativas que utilizam 'Se... então' confundem a negação de uma conjunção com transformações lógicas de condicional. A alternativa que nega apenas um dos termos falha por não aplicar a negação a toda a estrutura proposicional.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Tabelas-verdade e equivalências",
    dificuldade: "media",
    enunciado:
      "Considere a proposição composta P(p, q) = (p -> q) e (q -> p). Construindo-se a tabela-verdade completa dessa proposição, quantas linhas apresentam o valor-verdade Verdadeiro (V)?",
    opcoes: [
      "0",
      "1",
      "2",
      "3",
      "4",
    ],
    correta: 2,
    explicacao:
      "A proposição composta (p -> q) e (q -> p) é a definição lógica da bicondicional (p <-> q). Analisando a tabela-verdade de 4 linhas para duas variáveis p e q: na 1ª linha (p=V, q=V), temos (V -> V) e (V -> V) = V e V = V; na 2ª linha (p=V, q=F), temos (V -> F) e (F -> V) = F e V = F; na 3ª linha (p=F, q=V), temos (F -> V) e (V -> F) = V e F = F; na 4ª linha (p=F, q=F), temos (F -> F) e (F -> F) = V e V = V. Portanto, há exatamente 2 linhas verdadeiras (a 1ª e a 4ª). O erro de indicar 1 linha ocorre se o estudante esquecer que a condicional com antecedente falso é verdadeira. Indicar 3 ou 4 linhas resulta de equívocos na valoração da condicional, e indicar 0 linhas confunde a expressão com uma contradição.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Tabelas-verdade e equivalências",
    dificuldade: "media",
    enunciado:
      "Uma norma de regulamentação interna afirma: 'Se o projeto for aprovado pelo comitê, então a verba será liberada.' Sabendo que a condicional P -> Q é equivalentemente expressa pela forma disjuntiva não P ou Q, qual frase reescreve a norma mantendo o mesmo sentido lógico?",
    opcoes: [
      "O projeto não é aprovado pelo comitê ou a verba é liberada.",
      "O projeto é aprovado pelo comitê ou a verba não é liberada.",
      "O projeto não é aprovado pelo comitê e a verba é liberada.",
      "O projeto não é aprovado pelo comitê ou a verba não é liberada.",
      "O projeto é aprovado pelo comitê e a verba não é liberada.",
    ],
    correta: 0,
    explicacao:
      "A equivalência disjuntiva da condicional P -> Q é obtida negando-se o antecedente (não P), mantendo-se o consequente (Q) e unindo-os com o conectivo 'ou', gerando a forma (não P ou Q). Assim, 'Se o projeto for aprovado pelo comitê, então a verba será liberada' converte-se em 'O projeto não é aprovado pelo comitê ou a verba é liberada'. A opção 'O projeto é aprovado pelo comitê ou a verba não é liberada' comete o erro de negar o consequente em vez do antecedente. As opções com o conectivo 'e' erram ao substituir indevidamente a disjunção por conjunção. A alternativa que nega ambas as proposições (não P ou não Q) comete o erro de aplicar a negação ao consequente sem necessidade.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Tabelas-verdade e equivalências",
    dificuldade: "media",
    enunciado:
      "Na análise de proposições lógicas, uma tautologia é uma proposição composta cujo valor-verdade é sempre Verdadeiro (V), independentemente dos valores lógicos das proposições simples que a compõem. Qual das seguintes proposições compostas é uma tautologia?",
    opcoes: [
      "(P e Q) -> P",
      "(P ou Q) -> P",
      "(P -> Q) e P",
      "(P e Q) <-> não P",
      "(P -> Q) -> não P",
    ],
    correta: 0,
    explicacao:
      "A proposição (P e Q) -> P é uma tautologia pois a condicional só é falsa quando o antecedente é verdadeiro e o consequente é falso. Se o antecedente (P e Q) é Verdadeiro, necessariamente P é Verdadeiro e Q é Verdadeiro. Assim, o consequente P é obrigatoriamente Verdadeiro, impossibilitando a combinação V -> F. Portanto, a expressão é sempre Verdadeira. A opção (P ou Q) -> P não é tautologia pois, se P for Falso e Q for Verdadeiro, temos V -> F, que é Falso. A proposição (P -> Q) e P é Falsa quando P é Verdadeiro e Q é Falso. A bicondicional (P e Q) <-> não P é Falsa para P=V e Q=V. A última opção (P -> Q) -> não P é Falsa para P=V e Q=V.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Tabelas-verdade e equivalências",
    dificuldade: "media",
    enunciado:
      "Considere a regra lógica representada pela proposição composta: 'Se o candidato é brasileiro ou reside no Brasil há mais de 10 anos, então ele pode se inscrever no concurso.' Qual proposição a seguir é logicamente equivalente a essa regra?",
    opcoes: [
      "Se o candidato é brasileiro, ele pode se inscrever no concurso, e se o candidato reside no Brasil há mais de 10 anos, ele pode se inscrever no concurso.",
      "Se o candidato é brasileiro, ele pode se inscrever no concurso, ou se o candidato reside no Brasil há mais de 10 anos, ele pode se inscrever no concurso.",
      "Se o candidato é brasileiro e reside no Brasil há mais de 10 anos, então ele pode se inscrever no concurso.",
      "Se o candidato não é brasileiro e não reside no Brasil há mais de 10 anos, então ele pode se inscrever no concurso.",
      "Se o candidato pode se inscrever no concurso, então ele é brasileiro ou reside no Brasil há mais de 10 anos.",
    ],
    correta: 0,
    explicacao:
      "A equivalência lógica para uma implicação com antecedente disjuntivo, da forma (P ou Q) -> R, é dada pela conjunção de duas implicações: (P -> R) e (Q -> R). Isso ocorre porque, para garantir que o resultado R aconteça a partir de qualquer uma das condições, ambas as implicações individuais devem ser válidas simultaneamente. A alternativa que troca o 'e' por 'ou' incorre no erro de não exigir que ambas as condições garantam a inscrição de forma independente. A alternativa com antecedente em conjunção (P e Q) -> R altera o sentido original ao passar a exigir as duas condições juntas. As opções com negações ou inversões representam erros de contraposição incorreta ou recíproca.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Tabelas-verdade e equivalências",
    dificuldade: "dificil",
    enunciado:
      "Em um sistema lógico de controle de acesso, o estado do alarme é ativado pela disjunção exclusiva P XOR Q, que significa 'Ou o sensor A está ativado, ou o sensor B está ativado, mas não ambos'. O engenheiro precisa programar a desativação na negação lógica dessa proposição, ou seja, não(P XOR Q). Qual expressão em linguagem corrente é logicamente equivalente a não(P XOR Q)?",
    opcoes: [
      "O sensor A e o sensor B estão ambos ativados, ou ambos os sensores estão desativados.",
      "O sensor A está ativado e o sensor B está desativado.",
      "O sensor A não está ativado e o sensor B não está ativado.",
      "Ou o sensor A não está ativado, ou o sensor B não está ativado.",
      "O sensor A está ativado ou o sensor B está ativado.",
    ],
    correta: 0,
    explicacao:
      "A negação da disjunção exclusiva não(P XOR Q) é equivalente à bicondicional P <-> Q. A bicondicional assume valor Verdadeiro quando ambas as proposições componentes possuem o mesmo valor lógico: ou ambas são Verdadeiras, ou ambas são Falsas. Em linguagem corrente, isso é expresso como 'O sensor A e o sensor B estão ambos ativados (V e V), OU ambos estão desativados (F e F)'. A alternativa 'O sensor A está ativado e o sensor B está desativado' cobre apenas um caso específico. A opção 'O sensor A não está ativado e o sensor B não está ativado' considera apenas a metade dos casos de equivalência. A disjunção exclusiva de negações equivale à própria disjunção exclusiva original. A disjunção simples 'ou' confunde o OU inclusivo com a negação do OU exclusivo.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Tabelas-verdade e equivalências",
    dificuldade: "dificil",
    enunciado:
      "Considere as proposições simples P: 'O sol está brilhando' e Q: 'O parque está aberto'. Um lógico deseja simplificar a proposição composta S = (P -> Q) e (não P -> Q). Analisando as propriedades lógicas de S, qual proposição simples ou composta é logicamente equivalente a S?",
    opcoes: [
      "O parque está aberto.",
      "O sol está brilhando.",
      "O sol não está brilhando.",
      "O sol está brilhando e o parque está aberto.",
      "O sol está brilhando ou o parque está aberto.",
    ],
    correta: 0,
    explicacao:
      "Para simplificar S = (P -> Q) e (não P -> Q), aplicamos a equivalência disjuntiva da condicional: P -> Q equivale a (não P ou Q) e não P -> Q equivale a (P ou Q). Substituindo, temos S = (não P ou Q) e (P ou Q). Pela propriedade distributiva da disjunção sobre a conjunção, reescrevemos a expressão como (não P e P) ou Q. Como (não P e P) é uma contradição (sempre Falso), ficamos com Falha ou Q, o que se reduz simplesmente a Q. Pela tabela-verdade, S resulta em V sempre que Q é V e em F sempre que Q é F, independentemente de P. Logo, S equivale a Q ('O parque está aberto'). Assinalar 'O sol está brilhando' comete o erro de supor dependência da variável P. A conjunção e a disjunção simples falham em realizar a devida simplificação algébrica proposicional.",
  },
];
