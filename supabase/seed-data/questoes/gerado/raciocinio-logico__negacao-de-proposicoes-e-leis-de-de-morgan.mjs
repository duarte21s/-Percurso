/* Negação de proposições e leis de De Morgan (50 questões) — raciocinio-logico.

   Autorais, escritas por Claude (Anthropic) em 2026-09-29 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/raciocinio-logico__negacao-de-proposicoes-e-leis-de-de-morgan.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/raciocinio-logico__negacao-de-proposicoes-e-leis-de-de-morgan.json. */

export const questoes = [
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "facil",
    enunciado:
      "Qual das proposições abaixo é a negação lógica de “Ana foi à reunião e entregou o relatório”?",
    opcoes: [
      "Ana não foi à reunião e não entregou o relatório",
      "Ana não foi à reunião ou não entregou o relatório",
      "Ana foi à reunião e não entregou o relatório",
      "Ana não foi à reunião e entregou o relatório",
      "Se Ana foi à reunião, então entregou o relatório",
    ],
    correta: 1,
    explicacao:
      "Pela lei de De Morgan, negar uma conjunção é afirmar que pelo menos uma das partes falha: ~(p ∧ q) ≡ ~p ∨ ~q. Basta Ana não ter ido à reunião, ou não ter entregado o relatório, para que a frase original seja falsa.\n\nNegar as duas partes e manter o “e” é o erro mais comum: essa forma exige que as duas falhem juntas e deixa de fora os casos em que só uma falha. As versões que negam apenas uma das partes descrevem situações que tornam a original falsa, mas cada uma cobre só um caso. A condicional não nega a conjunção: com Ana ausente e relatório entregue, as duas seriam verdadeiras ao mesmo tempo.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "facil",
    enunciado:
      "Qual das proposições abaixo nega corretamente a afirmação “O servidor tirou férias ou recebeu o bônus”?",
    opcoes: [
      "O servidor não tirou férias ou não recebeu o bônus",
      "O servidor não tirou férias e não recebeu o bônus",
      "O servidor tirou férias e recebeu o bônus",
      "O servidor não tirou férias, mas recebeu o bônus",
      "Se o servidor não tirou férias, então recebeu o bônus",
    ],
    correta: 1,
    explicacao:
      "A disjunção “tirou férias ou recebeu o bônus” só é falsa quando as duas partes são falsas. Por isso sua negação exige as duas falhas ao mesmo tempo: ~(p ∨ q) ≡ ~p ∧ ~q, a segunda lei de De Morgan.\n\nTrocar o conectivo sem negar as partes, ou negar as partes sem trocar o conectivo, são os dois erros clássicos — a versão com “não… ou não…” ainda seria verdadeira se o servidor tivesse tirado férias sem receber o bônus. A forma “Se não tirou férias, então recebeu o bônus” é equivalente à ORIGINAL (~p → q ≡ p ∨ q), e não à sua negação. Já a conjunção afirmativa e a versão com “mas” descrevem cenários em que a original continua verdadeira.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "facil",
    enunciado:
      "Qual é a negação da proposição “Se o candidato estudou, então foi aprovado”?",
    opcoes: [
      "Se o candidato não estudou, então não foi aprovado",
      "O candidato estudou e não foi aprovado",
      "Se o candidato estudou, então não foi aprovado",
      "O candidato não estudou e foi aprovado",
      "O candidato não estudou ou foi aprovado",
    ],
    correta: 1,
    explicacao:
      "Uma condicional p → q só é falsa quando o antecedente acontece e o consequente não. Negá-la, portanto, é afirmar exatamente esse caso: ~(p → q) ≡ p ∧ ~q — o candidato estudou e não foi aprovado.\n\nA negação de uma condicional não é outra condicional. A versão “se não estudou, não foi aprovado” é a inversa, e a versão “se estudou, não foi aprovado” só troca o consequente; nenhuma das duas contradiz a original em todos os casos. Afirmar que ele não estudou e foi aprovado descreve um cenário em que a original é VERDADEIRA (antecedente falso). E “não estudou ou foi aprovado” é a forma disjuntiva equivalente à própria original.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "facil",
    enunciado:
      "O regulamento de um campeonato diz: “Se chover, o jogo será adiado”. Em qual das situações abaixo o regulamento foi descumprido?",
    opcoes: [
      "Choveu e o jogo não foi adiado",
      "Não choveu e o jogo foi adiado",
      "Não choveu e o jogo não foi adiado",
      "Choveu e o jogo foi adiado",
      "Em nenhuma delas, porque uma regra escrita com “se” não tem como ser descumprida",
    ],
    correta: 0,
    explicacao:
      "A regra é uma condicional, e uma condicional só é falsa quando o antecedente ocorre e o consequente não: choveu e, mesmo assim, o jogo aconteceu na data. Esse é o único cenário que contraria o regulamento.\n\nSe não choveu, a regra simplesmente não se aplica — o jogo pode ser adiado por outro motivo ou realizado normalmente, e nos dois casos nada foi descumprido. Quem marca “não choveu e o jogo foi adiado” está lendo a condicional como se fosse bicondicional, exigindo que o adiamento só ocorra com chuva. Chover e adiar é o cumprimento da regra. E condicionais podem, sim, ser falsas: exatamente no caso V → F.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "media",
    enunciado:
      "Qual das proposições abaixo é a negação de “Paulo viaja se, e somente se, recebe a diária”?",
    opcoes: [
      "Paulo não viaja se, e somente se, não recebe a diária",
      "Paulo viaja e não recebe a diária, ou recebe a diária e não viaja",
      "Paulo viaja e não recebe a diária",
      "Paulo não viaja e não recebe a diária",
      "Se Paulo viaja, então não recebe a diária",
    ],
    correta: 1,
    explicacao:
      "A bicondicional é verdadeira quando as duas partes têm o mesmo valor e falsa quando divergem. Negá-la é afirmar a divergência, que pode acontecer de dois modos: Paulo viaja sem receber a diária, ou recebe a diária sem viajar. Em símbolos, ~(p ↔ q) ≡ (p ∧ ~q) ∨ (q ∧ ~p).\n\nNegar as duas partes e manter o “se, e somente se” não nega nada: ~p ↔ ~q tem exatamente os mesmos valores de p ↔ q. Escolher só um dos modos de divergência deixa de fora o outro, e “não viaja e não recebe” é um caso em que as partes coincidem — a original é verdadeira ali. A condicional p → ~q ainda é verdadeira quando Paulo não viaja nem recebe, caso em que a bicondicional também é verdadeira.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "facil",
    enunciado:
      "Ao eliminar as negações duplas da expressão ~(~p) ∧ ~(~q), qual proposição se obtém?",
    opcoes: [
      "~p ∧ ~q",
      "p ∨ q",
      "~(p ∧ q)",
      "p ∧ q",
      "p ∧ ~q",
    ],
    correta: 3,
    explicacao:
      "A dupla negação se anula: ~(~p) tem sempre o mesmo valor de p, e ~(~q) o mesmo de q. A expressão, portanto, se reduz a p ∧ q, sem nenhuma aplicação de De Morgan — não há negação de conjunção ou disjunção aqui, só negações duplas sobre proposições simples.\n\nQuem responde ~p ∧ ~q apaga só uma das negações de cada termo, como se ~(~p) fosse ~p. Trocar o conectivo para “∨” é aplicar De Morgan onde ele não cabe. A forma ~(p ∧ q) é a negação da resposta correta, e p ∧ ~q mantém uma das duplas negações pela metade. Conferir pela tabela é rápido: só com p e q verdadeiras a expressão original vale V.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "facil",
    enunciado:
      "Um edital exige: “A empresa deve apresentar a proposta e a garantia”. Qual frase expressa corretamente que essa exigência NÃO foi atendida?",
    opcoes: [
      "A empresa não apresentou a proposta ou não apresentou a garantia",
      "A empresa não apresentou a proposta nem a garantia",
      "A empresa apresentou a proposta, mas não apresentou a garantia",
      "A empresa apresentou a garantia, mas não apresentou a proposta",
      "Se a empresa apresentou a proposta, então apresentou a garantia",
    ],
    correta: 0,
    explicacao:
      "A exigência é uma conjunção: só é atendida se as duas entregas acontecem. Para dizer que ela não foi atendida, basta que uma delas falte — a proposta, a garantia, ou ambas. É a forma ~p ∨ ~q, que De Morgan dá para ~(p ∧ q).\n\nA frase “não apresentou a proposta nem a garantia” descreve só o caso extremo em que as duas faltam; uma empresa que entregou apenas a garantia também descumpre o edital e ficaria de fora. As frases com “mas” descrevem, cada uma, um único caso de descumprimento. A condicional seria verdadeira com a empresa ausente de todo (antecedente falso), então não expressa o descumprimento.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "facil",
    enunciado:
      "Um técnico afirma: “Durante o teste, o sistema caiu ou ficou lento”. Qual proposição é a negação dessa afirmação?",
    opcoes: [
      "Durante o teste, o sistema não caiu ou não ficou lento",
      "Durante o teste, o sistema não caiu e não ficou lento",
      "Durante o teste, o sistema caiu e ficou lento",
      "Durante o teste, o sistema não caiu, mas ficou lento",
      "Durante o teste, o sistema caiu, mas não ficou lento",
    ],
    correta: 1,
    explicacao:
      "Para que “caiu ou ficou lento” seja falsa, nenhuma das duas coisas pode ter acontecido. A negação da disjunção é a conjunção das negações: ~(p ∨ q) ≡ ~p ∧ ~q. O sistema não caiu e também não ficou lento.\n\nA versão “não caiu ou não ficou lento” nega as partes mas mantém o “ou”, e continua verdadeira num teste em que o sistema ficou lento sem cair — situação em que a afirmação do técnico também é verdadeira, então não pode ser sua negação. A conjunção afirmativa e as frases com “mas” descrevem cenários em que pelo menos uma das ocorrências se deu, isto é, cenários que CONFIRMAM a afirmação original.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "media",
    enunciado:
      "Qual é a negação de “Se o boleto foi pago até o vencimento, o pedido será enviado amanhã”?",
    opcoes: [
      "O boleto não foi pago até o vencimento e o pedido será enviado amanhã",
      "Se o boleto não foi pago até o vencimento, o pedido não será enviado amanhã",
      "O boleto foi pago até o vencimento e o pedido não será enviado amanhã",
      "Se o pedido for enviado amanhã, o boleto foi pago até o vencimento",
      "O boleto não foi pago até o vencimento ou o pedido não será enviado amanhã",
    ],
    correta: 2,
    explicacao:
      "A condicional só é contrariada quando a condição se cumpre e a consequência não: o boleto foi pago em dia e, ainda assim, o pedido não sai amanhã. Por isso ~(p → q) ≡ p ∧ ~q, uma conjunção — não outra condicional.\n\nA recíproca (“se o pedido for enviado, o boleto foi pago”) e a inversa (“se não foi pago, não será enviado”) são condicionais diferentes da original, mas nenhuma é sua negação: todas podem ser verdadeiras ao mesmo tempo. O cenário “não foi pago e será enviado” deixa a original verdadeira, porque o antecedente é falso. E “não foi pago ou não será enviado” equivale a ~(p ∧ q), que é a negação de outra frase.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "media",
    enunciado:
      "Qual proposição tem exatamente a mesma tabela-verdade de ~(p ∧ ~q)?",
    opcoes: [
      "~p ∧ q",
      "q → p",
      "p → q",
      "~p → ~q",
      "p ∧ q",
    ],
    correta: 2,
    explicacao:
      "Aplicando De Morgan, ~(p ∧ ~q) ≡ ~p ∨ ~(~q) ≡ ~p ∨ q. E ~p ∨ q é a forma disjuntiva da condicional p → q: as duas só são falsas quando p é V e q é F. A expressão do enunciado diz, literalmente, que “não pode acontecer p sem q”, que é exatamente o que a condicional afirma.\n\nTrocar o “∨” por “∧” depois de negar as partes dá ~p ∧ q, um erro de De Morgan incompleto. A recíproca q → p e a inversa ~p → ~q falham na linha p = F, q = V, em que a expressão original é verdadeira e elas são falsas. E p ∧ q é mais restrita: é falsa quando p e q são ambas falsas, caso em que ~(p ∧ ~q) vale V.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "facil",
    enunciado:
      "Numa auditoria, p representa “o contrato foi assinado”, que é verdadeira, e q representa “o pagamento foi feito”, que é falsa. Qual é o valor lógico da proposição ~(p ∨ q)?",
    opcoes: [
      "Verdadeiro, porque q é falsa e a negação a torna verdadeira",
      "Verdadeiro, porque a negação de uma disjunção é sempre verdadeira",
      "Falso, porque as duas proposições precisariam ser falsas para a disjunção valer",
      "Não é possível saber sem conhecer o assunto de p e de q",
      "Falso, porque p ∨ q é verdadeira e a negação inverte esse valor",
    ],
    correta: 4,
    explicacao:
      "Primeiro avalia-se o que está dentro dos parênteses: p ∨ q, com p verdadeira, é verdadeira — basta uma componente V. Em seguida aplica-se a negação ao resultado inteiro, que passa a ser falso. Pelo mesmo caminho, De Morgan dá ~p ∧ ~q = F ∧ V = F.\n\nAplicar a negação só a q, como se ela não alcançasse o parêntese todo, leva a “verdadeiro” — é o erro de ignorar o escopo do “~”. Dizer que a negação de uma disjunção é sempre verdadeira confunde a operação com uma tautologia. A justificativa de que as duas precisariam ser falsas para a disjunção valer inverte a regra da disjunção. E o valor lógico depende apenas dos valores de p e q, nunca do assunto das frases.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "facil",
    enunciado:
      "Qual das frases abaixo é equivalente a “Não é verdade que Carla viajou e Bruno ficou em casa”?",
    opcoes: [
      "Carla não viajou e Bruno não ficou em casa",
      "Carla viajou e Bruno não ficou em casa",
      "Carla viajou ou Bruno ficou em casa",
      "Carla não viajou ou Bruno não ficou em casa",
      "Se Carla viajou, então Bruno ficou em casa",
    ],
    correta: 3,
    explicacao:
      "A expressão “Não é verdade que…” nega a conjunção inteira: ~(p ∧ q). Pela lei de De Morgan, isso equivale a ~p ∨ ~q — pelo menos um dos fatos não ocorreu: ou Carla não viajou, ou Bruno não ficou em casa (ou ambos).\n\nNegar as duas partes mantendo o “e” exige que os dois fatos falhem juntos, o que é mais forte do que a frase diz. A versão “Carla viajou e Bruno não ficou” é só um dos casos cobertos pela negação. A disjunção afirmativa não nega nada: é verdadeira quando Carla viajou e Bruno ficou, justamente o caso que a frase do enunciado exclui. A condicional, por sua vez, é verdadeira nesse mesmo caso, então também não serve.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "media",
    enunciado:
      "Considere a afirmação, sobre números reais, “x > 3 e y ≤ 5”. Qual é a sua negação?",
    opcoes: [
      "x ≤ 3 e y > 5",
      "x ≤ 3 ou y > 5",
      "x < 3 ou y ≥ 5",
      "x > 3 ou y ≤ 5",
      "x < 3 e y > 5",
    ],
    correta: 1,
    explicacao:
      "A afirmação é uma conjunção, e pela lei de De Morgan sua negação é a disjunção das negações. Negar “x > 3” dá “x ≤ 3” (o igual vai junto, porque x = 3 não é maior que 3), e negar “y ≤ 5” dá “y > 5”. Resultado: x ≤ 3 ou y > 5.\n\nManter o “e” depois de negar as partes é o erro mais frequente e deixa de fora, por exemplo, x = 1 com y = 2, que já torna a afirmação falsa. Trocar as desigualdades por “x < 3” e “y ≥ 5” erra a fronteira: com x = 3 e y = 2 a afirmação é falsa, mas “x < 3 ou y ≥ 5” também é falsa ali. E “x > 3 ou y ≤ 5” só trocou o conectivo, sem negar as partes.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "media",
    enunciado:
      "Um relatório afirma: “Nem Luana nem Rita foram promovidas”. Qual proposição é a negação dessa afirmação?",
    opcoes: [
      "Luana foi promovida e Rita foi promovida",
      "Luana não foi promovida ou Rita não foi promovida",
      "Luana foi promovida ou Rita foi promovida",
      "Luana foi promovida e Rita não foi promovida",
      "Se Luana não foi promovida, então Rita também não foi",
    ],
    correta: 2,
    explicacao:
      "“Nem Luana nem Rita foram promovidas” é a conjunção de duas negações: ~p ∧ ~q. Para negá-la, basta que uma das duas negações falhe, isto é, que pelo menos uma delas tenha sido promovida. Pela lei de De Morgan, ~(~p ∧ ~q) ≡ p ∨ q.\n\nExigir que as duas tenham sido promovidas é pedir demais: basta uma promoção para desmentir o relatório. A frase “Luana não foi promovida ou Rita não foi promovida” é compatível com o relatório (é verdadeira quando nenhuma foi promovida), então não o nega. A versão com Luana promovida e Rita não é só um dos casos da negação. E a condicional é verdadeira quando nenhuma foi promovida, exatamente o cenário do relatório.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "media",
    enunciado:
      "Um regimento estabelece: “Se não houver quórum, a sessão será adiada”. Qual proposição é a negação dessa regra?",
    opcoes: [
      "Não houve quórum e a sessão não foi adiada",
      "Houve quórum e a sessão foi adiada",
      "Se houver quórum, a sessão não será adiada",
      "Houve quórum ou a sessão foi adiada",
      "Não houve quórum e a sessão foi adiada",
    ],
    correta: 0,
    explicacao:
      "Chamando de p “houver quórum” e de q “a sessão será adiada”, a regra é ~p → q. A negação de uma condicional mantém o antecedente e nega o consequente: ~(~p → q) ≡ ~p ∧ ~q. Ou seja, faltou quórum e, mesmo assim, a sessão não foi adiada.\n\nO antecedente aqui já é negativo, e é isso que confunde: há quem negue o “não” do antecedente e escreva “houve quórum”, mas o antecedente se preserva na negação. A inversa (“se houver quórum, não será adiada”) é outra condicional. “Houve quórum ou a sessão foi adiada” é a forma disjuntiva da própria regra. E “não houve quórum e a sessão foi adiada” é o cumprimento da regra.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "media",
    enunciado:
      "Qual das proposições abaixo é equivalente à negação da bicondicional p ↔ q?",
    opcoes: [
      "~p ↔ ~q",
      "p → ~q",
      "~p ∧ ~q",
      "q ↔ p",
      "p ↔ ~q",
    ],
    correta: 4,
    explicacao:
      "A bicondicional p ↔ q é verdadeira quando p e q têm o mesmo valor. Sua negação é verdadeira quando os valores diferem. A expressão p ↔ ~q faz exatamente isso: compara p com o oposto de q, e só é verdadeira quando p e q divergem. Pela tabela, as duas colunas — ~(p ↔ q) e p ↔ ~q — coincidem nas quatro linhas.\n\nNegar os dois lados, em ~p ↔ ~q, preserva a coincidência de valores e devolve a própria bicondicional original. Trocar a ordem, em q ↔ p, também devolve a original, porque a bicondicional é comutativa. A condicional p → ~q é verdadeira quando p e q são ambas falsas, linha em que a negação vale F. E ~p ∧ ~q descreve justamente um caso de coincidência.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "media",
    enunciado:
      "Aplicando a lei de De Morgan a ~(~p ∨ q) e simplificando o resultado, que expressão se obtém?",
    opcoes: [
      "~p ∧ q",
      "p ∨ ~q",
      "p ∧ ~q",
      "~p ∨ ~q",
      "p → q",
    ],
    correta: 2,
    explicacao:
      "Pela lei de De Morgan, a negação de uma disjunção é a conjunção das negações: ~(~p ∨ q) ≡ ~(~p) ∧ ~q ≡ p ∧ ~q, já que a dupla negação sobre p se desfaz. Vale notar que ~p ∨ q é a forma disjuntiva de p → q, então o enunciado é, na verdade, a negação da condicional — e o resultado bate com a regra conhecida ~(p → q) ≡ p ∧ ~q.\n\nEsquecer de desfazer a dupla negação produz ~p ∧ q. Negar as partes sem trocar o conectivo produz p ∨ ~q, que é outra proposição. A forma ~p ∨ ~q é De Morgan aplicado à conjunção, não à disjunção. E p → q é a própria expressão que está sendo negada.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "media",
    enunciado:
      "Qual das frases abaixo é equivalente a “Não é verdade que, se o orçamento for aprovado, a obra começará em março”?",
    opcoes: [
      "O orçamento será aprovado e a obra não começará em março",
      "Se o orçamento não for aprovado, a obra não começará em março",
      "O orçamento não será aprovado e a obra começará em março",
      "Se a obra não começar em março, o orçamento não será aprovado",
      "O orçamento não será aprovado ou a obra começará em março",
    ],
    correta: 0,
    explicacao:
      "A frase nega uma condicional inteira. A única forma de uma condicional ser falsa é o antecedente ocorrer sem o consequente, e por isso ~(p → q) ≡ p ∧ ~q: o orçamento é aprovado e, ainda assim, a obra não começa em março.\n\nA versão com “se… não…, não…” é a inversa e a versão “se a obra não começar, o orçamento não será aprovado” é a contrapositiva — esta última equivale à ORIGINAL, não à sua negação. O cenário “não será aprovado e a obra começará” deixa a condicional verdadeira, porque o antecedente é falso. E “não será aprovado ou a obra começará” é a forma disjuntiva da própria condicional.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "facil",
    enunciado:
      "Um inquérito concluiu: “O réu estava na cidade e conhecia a vítima”. Um advogado quer afirmar a negação dessa conclusão. Qual frase ele deve usar?",
    opcoes: [
      "O réu não estava na cidade e não conhecia a vítima",
      "O réu não estava na cidade ou não conhecia a vítima",
      "O réu estava na cidade, mas não conhecia a vítima",
      "O réu estava na cidade ou conhecia a vítima",
      "Se o réu não estava na cidade, então conhecia a vítima",
    ],
    correta: 1,
    explicacao:
      "A conclusão é uma conjunção; para negá-la, basta derrubar uma das partes. Por isso a negação correta é “não estava na cidade OU não conhecia a vítima” — De Morgan: ~(p ∧ q) ≡ ~p ∨ ~q. O advogado não precisa provar as duas coisas; uma já desmonta a conjunção.\n\nA frase com “e” obriga a defesa a sustentar as duas negações ao mesmo tempo, o que é mais do que a negação exige. A versão com “mas” escolhe um único caso, deixando de fora o réu que conhecia a vítima e não estava na cidade. A disjunção afirmativa é verdadeira justamente quando a conclusão do inquérito é verdadeira. E a condicional “se não estava, então conhecia” equivale a p ∨ q, a mesma disjunção afirmativa escrita de outro jeito — continua verdadeira no cenário que a conclusão descreve.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "media",
    enunciado:
      "Para números reais a e b, considere a afirmação “a < 0 ou b > 10”. Qual é a sua negação?",
    opcoes: [
      "a ≥ 0 ou b ≤ 10",
      "a > 0 e b < 10",
      "a < 0 e b > 10",
      "a ≤ 0 e b ≥ 10",
      "a ≥ 0 e b ≤ 10",
    ],
    correta: 4,
    explicacao:
      "A afirmação é uma disjunção; ela só é falsa quando nenhuma das duas partes vale. Pela lei de De Morgan, ~(p ∨ q) ≡ ~p ∧ ~q. Negar “a < 0” dá “a ≥ 0” (zero não é negativo, então entra) e negar “b > 10” dá “b ≤ 10”. Resultado: a ≥ 0 e b ≤ 10.\n\nNegar as partes e manter o “ou” produz uma frase verdadeira em a = −1, b = 5, ponto em que a afirmação original também é verdadeira — não pode ser sua negação. A versão com “a > 0 e b < 10” erra as fronteiras: exclui a = 0 e b = 10, que tornam a original falsa. A conjunção “a < 0 e b > 10” é um caso da original. E “a ≤ 0 e b ≥ 10” inverte o sentido de uma das desigualdades.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "media",
    enunciado:
      "Uma cláusula contratual diz: “O contrato será renovado somente se a empresa cumprir as metas”. Qual proposição é a negação dessa cláusula?",
    opcoes: [
      "O contrato não será renovado e a empresa cumprirá as metas",
      "Se a empresa cumprir as metas, o contrato será renovado",
      "O contrato não será renovado ou a empresa cumprirá as metas",
      "Se o contrato não for renovado, a empresa não cumprirá as metas",
      "O contrato será renovado e a empresa não cumprirá as metas",
    ],
    correta: 4,
    explicacao:
      "“p somente se q” significa que p não acontece sem q, isto é, p → q: se o contrato for renovado, então a empresa cumpriu as metas. A negação da condicional é p ∧ ~q — o contrato é renovado sem que as metas sejam cumpridas, justamente o que a cláusula proíbe.\n\nO erro mais comum com “somente se” é inverter a direção e ler q → p; a frase “se a empresa cumprir as metas, o contrato será renovado” faz isso, e nem é a negação. O cenário “não será renovado e cumprirá as metas” é permitido pela cláusula. A disjunção “não será renovado ou cumprirá” é a forma equivalente da própria cláusula. E a última condicional é a inversa da leitura invertida.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "media",
    enunciado:
      "Como se escreve, sem o sinal de condicional, a negação da proposição p → ~q?",
    opcoes: [
      "p ∧ ~q",
      "p ∧ q",
      "~p ∧ q",
      "~p ∨ ~q",
      "p ∨ q",
    ],
    correta: 1,
    explicacao:
      "A negação de uma condicional é a conjunção do antecedente com a negação do consequente: ~(A → B) ≡ A ∧ ~B. Aqui A = p e B = ~q, então ~(p → ~q) ≡ p ∧ ~(~q) ≡ p ∧ q, já que a dupla negação se desfaz.\n\nQuem responde p ∧ ~q aplicou a regra como se o consequente fosse q, esquecendo que ele já vinha negado. A forma ~p ∧ q nega o antecedente, o que a regra não faz. A disjunção ~p ∨ ~q é a própria condicional p → ~q reescrita, isto é, a proposição que se queria negar. E p ∨ q é mais fraca que a resposta: é verdadeira com p verdadeira e q falsa, linha em que p → ~q é verdadeira e, portanto, sua negação é falsa.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "media",
    enunciado:
      "Sabe-se que é falsa a afirmação “Rodrigo trabalha no setor fiscal ou Juliana trabalha no setor jurídico”. Qual conclusão decorre necessariamente disso?",
    opcoes: [
      "Rodrigo não trabalha no setor fiscal, mas Juliana trabalha no setor jurídico",
      "Rodrigo trabalha no setor fiscal, mas Juliana não trabalha no setor jurídico",
      "Pelo menos um dos dois trabalha no setor mencionado",
      "Se Rodrigo não trabalha no setor fiscal, então Juliana trabalha no setor jurídico",
      "Rodrigo não trabalha no setor fiscal e Juliana não trabalha no setor jurídico",
    ],
    correta: 4,
    explicacao:
      "Uma disjunção é falsa em um único caso: quando as duas partes são falsas. Se a afirmação é falsa, então Rodrigo não trabalha no setor fiscal E Juliana não trabalha no setor jurídico — é a segunda lei de De Morgan aplicada a um dado concreto.\n\nAs conclusões que mantêm um dos dois no setor citado contradizem o dado: bastaria uma parte verdadeira para a disjunção ser verdadeira. “Pelo menos um dos dois trabalha no setor mencionado” é a própria afirmação que se sabe falsa. E a condicional “se Rodrigo não está no fiscal, Juliana está no jurídico” equivale à disjunção original (~p → q ≡ p ∨ q), portanto também é falsa.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "facil",
    enunciado:
      "Qual frase é equivalente a “Não é verdade que o novo sistema é seguro ou barato”?",
    opcoes: [
      "O novo sistema não é seguro ou não é barato",
      "O novo sistema é seguro, mas não é barato",
      "O novo sistema não é seguro e não é barato",
      "O novo sistema é seguro e barato",
      "Se o novo sistema não é seguro, então é barato",
    ],
    correta: 2,
    explicacao:
      "A expressão “Não é verdade que…” alcança a disjunção inteira: ~(p ∨ q). Pela lei de De Morgan, isso é ~p ∧ ~q — o sistema não tem nenhuma das duas qualidades: não é seguro e também não é barato.\n\nTrocar só as negações, mantendo o “ou”, deixaria a frase verdadeira para um sistema seguro e caro, situação em que “é seguro ou barato” é verdadeira; logo, não pode ser a negação. A versão com “mas” e a conjunção afirmativa descrevem sistemas que têm pelo menos uma das qualidades. E a condicional “se não é seguro, então é barato” é equivalente a p ∨ q, a própria frase negada no enunciado.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "media",
    enunciado:
      "Um oficial de justiça registrou: “João, Maria e Pedro compareceram à audiência”. Qual proposição nega esse registro?",
    opcoes: [
      "João, Maria e Pedro não compareceram à audiência",
      "João não compareceu e Maria não compareceu, mas Pedro compareceu",
      "João não compareceu, ou Maria não compareceu, ou Pedro não compareceu",
      "Apenas Pedro não compareceu à audiência",
      "Se João compareceu, então Maria e Pedro também compareceram",
    ],
    correta: 2,
    explicacao:
      "O registro é uma conjunção de três partes: p ∧ q ∧ r. A lei de De Morgan vale para qualquer número de termos: ~(p ∧ q ∧ r) ≡ ~p ∨ ~q ∨ ~r. Basta que uma das três pessoas tenha faltado para o registro ser falso.\n\nDizer que os três não compareceram é o erro de manter o “e”: exige três ausências, quando uma basta. As frases que apontam ausências específicas — só Pedro, ou João e Maria — descrevem casos isolados, e cada uma deixa de fora outras formas de o registro ser falso. A condicional “se João compareceu, os outros também” é verdadeira quando João falta e os outros comparecem, e aí o registro já é falso; logo, ela não nega o registro.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "media",
    enunciado:
      "Considere a afirmação “O cliente pagou por boleto, por cartão ou por Pix”. Qual proposição é a sua negação?",
    opcoes: [
      "O cliente não pagou por boleto, ou não pagou por cartão, ou não pagou por Pix",
      "O cliente pagou por boleto, por cartão e por Pix",
      "O cliente não pagou por boleto, nem por cartão, nem por Pix",
      "O cliente não pagou por boleto nem por cartão, mas pagou por Pix",
      "Se o cliente não pagou por boleto, pagou por cartão ou por Pix",
    ],
    correta: 2,
    explicacao:
      "A afirmação é uma disjunção de três partes, p ∨ q ∨ r, falsa só quando nenhuma forma de pagamento foi usada. Pela lei de De Morgan, ~(p ∨ q ∨ r) ≡ ~p ∧ ~q ∧ ~r: não pagou por boleto, nem por cartão, nem por Pix.\n\nNegar as partes e manter o “ou” gera uma frase verdadeira para quem pagou só por Pix — caso em que a afirmação original também é verdadeira. A conjunção afirmativa exige os três meios ao mesmo tempo, o que não nega nada. A frase que termina em “mas pagou por Pix” descreve um caso que confirma a afirmação. E a condicional do último item equivale, por ~p → (q ∨ r) ≡ p ∨ q ∨ r, à própria afirmação.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "media",
    enunciado:
      "Um regulamento de bolsas afirma: “Ter média acima de 8 é condição suficiente para Lia ganhar a bolsa”. Qual proposição nega essa afirmação?",
    opcoes: [
      "Lia não tem média acima de 8 e ganha a bolsa",
      "Se Lia ganha a bolsa, então tem média acima de 8",
      "Lia não tem média acima de 8 ou ganha a bolsa",
      "Lia tem média acima de 8 e não ganha a bolsa",
      "Se Lia não tem média acima de 8, então não ganha a bolsa",
    ],
    correta: 3,
    explicacao:
      "“A é condição suficiente para B” é a condicional A → B: tendo média acima de 8, Lia ganha a bolsa. A negação de uma condicional é A ∧ ~B — Lia tem a média exigida e, ainda assim, não ganha a bolsa.\n\nConfundir suficiente com necessário leva à recíproca, “se ganha a bolsa, tem média acima de 8”, que é a leitura de condição necessária e nem nega a regra. O cenário de Lia ganhar a bolsa sem a média não contraria nada: a regra diz o que basta, não o que é obrigatório. A disjunção “não tem média acima de 8 ou ganha a bolsa” é a própria regra na forma disjuntiva. E a inversa é outra condicional, compatível com a regra.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "media",
    enunciado:
      "O manual de uma portaria eletrônica afirma: “A catraca libera a entrada se, e somente se, o crachá é válido”. Qual situação, isoladamente, é suficiente para provar que o manual está errado?",
    opcoes: [
      "A catraca bloqueou a entrada de alguém com crachá inválido",
      "A catraca liberou a entrada de alguém com crachá inválido",
      "A catraca liberou a entrada de alguém com crachá válido",
      "A catraca ficou desligada durante a manhã",
      "Um visitante sem crachá não tentou passar pela catraca",
    ],
    correta: 1,
    explicacao:
      "A bicondicional exige coincidência entre liberar e ter crachá válido. Ela é falsa quando os dois divergem: liberação com crachá inválido, ou bloqueio com crachá válido. Das situações listadas, a única divergência é a catraca ter liberado alguém com crachá inválido — basta ela para derrubar o manual.\n\nBloquear quem tem crachá inválido e liberar quem tem crachá válido são exatamente os comportamentos que o manual descreve; confirmam a regra. A catraca desligada e o visitante que nem tentou passar não envolvem nenhuma tentativa de entrada, então não produzem par de valores para comparar. Note que a outra forma de divergência, bloquear alguém com crachá válido, também provaria o erro — ela só não está entre as alternativas.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "dificil",
    enunciado:
      "Qual expressão é equivalente a ~(p ∨ (q ∧ r))?",
    opcoes: [
      "~p ∧ (~q ∨ ~r)",
      "~p ∨ (~q ∧ ~r)",
      "~p ∧ ~q ∧ ~r",
      "~p ∧ (q ∨ r)",
      "p ∧ (~q ∨ ~r)",
    ],
    correta: 0,
    explicacao:
      "Aplica-se De Morgan por camadas. Primeiro, a negação da disjunção externa: ~(p ∨ (q ∧ r)) ≡ ~p ∧ ~(q ∧ r). Depois, a negação da conjunção interna: ~(q ∧ r) ≡ ~q ∨ ~r. Resultado: ~p ∧ (~q ∨ ~r).\n\nTrocar os conectivos na ordem errada produz ~p ∨ (~q ∧ ~r), que é a negação de p ∧ (q ∨ r), outra expressão. Negar tudo com “e” — ~p ∧ ~q ∧ ~r — esquece que a negação de q ∧ r é uma disjunção: essa forma exige q e r falsos, quando basta um deles. A forma com (q ∨ r) sem negações só trocou o conectivo interno. E p ∧ (~q ∨ ~r) esqueceu de negar p, que precisa ser falsa para a disjunção externa falhar.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "media",
    enunciado:
      "Um jornal publicou: “Se a taxa de juros subir, o consumo cairá”. Meses depois, verificou-se que a afirmação do jornal era falsa. O que, então, necessariamente ocorreu?",
    opcoes: [
      "A taxa de juros não subiu e o consumo caiu",
      "A taxa de juros não subiu e o consumo não caiu",
      "A taxa de juros subiu e o consumo não caiu",
      "A taxa de juros subiu e o consumo caiu",
      "O consumo não caiu, e nada se pode dizer sobre a taxa",
    ],
    correta: 2,
    explicacao:
      "Uma condicional só é falsa quando o antecedente é verdadeiro e o consequente é falso. Se a afirmação do jornal era falsa, a taxa necessariamente subiu e o consumo necessariamente não caiu — os dois fatos juntos, sem alternativa.\n\nOs cenários em que a taxa não subiu tornam a condicional verdadeira por antecedente falso; eles não explicam uma afirmação falsa. Taxa em alta com consumo em queda é o cenário em que o jornal acertou. E a última opção acerta sobre o consumo, mas erra ao dizer que nada se sabe sobre a taxa: a falsidade da condicional também determina o antecedente, que precisa ter sido verdadeiro.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "media",
    enunciado:
      "Um edital afirma: “Ter diploma de nível superior é condição necessária para que Lia assuma o cargo”. Qual proposição é a negação dessa afirmação?",
    opcoes: [
      "Lia tem diploma de nível superior e não assume o cargo",
      "Se Lia tem diploma de nível superior, então assume o cargo",
      "Lia não tem diploma de nível superior e não assume o cargo",
      "Lia assume o cargo e não tem diploma de nível superior",
      "Se Lia não assume o cargo, então não tem diploma de nível superior",
    ],
    correta: 3,
    explicacao:
      "“A é condição necessária para B” quer dizer que B não acontece sem A: B → A. Aqui, “se Lia assume o cargo, então tem diploma”. A negação dessa condicional é B ∧ ~A — Lia assume o cargo sem ter o diploma, exatamente o que o edital veda.\n\nLia ter diploma e não assumir não contraria nada: condição necessária não é garantia. A condicional “se tem diploma, assume” trata o diploma como condição suficiente, que é a confusão clássica entre os dois termos. Não ter diploma e não assumir é o que o edital prevê. E a última condicional é a recíproca da contrapositiva, outra proposição, que não nega a afirmação.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "dificil",
    enunciado:
      "Considere a frase “Marcos perderá o prazo, a menos que protocole o recurso hoje”. Qual situação a torna falsa?",
    opcoes: [
      "Marcos protocola o recurso hoje e não perde o prazo",
      "Marcos protocola o recurso hoje e perde o prazo",
      "Marcos não protocola o recurso hoje e perde o prazo",
      "Marcos não protocola o recurso hoje e não perde o prazo",
      "Nenhuma, porque “a menos que” torna a frase uma opinião",
    ],
    correta: 3,
    explicacao:
      "“A, a menos que B” significa “se não B, então A”. Aqui: se Marcos não protocolar o recurso hoje, perderá o prazo (~q → p). Essa condicional é falsa quando o antecedente ocorre e o consequente não: Marcos não protocola hoje e, mesmo assim, não perde o prazo.\n\nProtocolar hoje torna o antecedente falso, e a frase não se pronuncia sobre esse caso — perder ou não o prazo por outro motivo não a contraria. Não protocolar e perder o prazo é o cumprimento da previsão. E “a menos que” é conectivo lógico, não marca de opinião: a frase tem valor de verdade como qualquer condicional.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "dificil",
    enunciado:
      "Qual expressão é equivalente à negação de (p ∧ q) → r?",
    opcoes: [
      "p ∧ q ∧ ~r",
      "~p ∨ ~q ∨ r",
      "(~p ∨ ~q) ∧ ~r",
      "p ∧ q ∧ r",
      "~(p ∧ q) ∧ ~r",
    ],
    correta: 0,
    explicacao:
      "A negação de uma condicional é o antecedente junto com a negação do consequente: ~(A → B) ≡ A ∧ ~B. Com A = p ∧ q e B = r, obtém-se (p ∧ q) ∧ ~r = p ∧ q ∧ ~r. A condicional só falha quando p e q valem e, mesmo assim, r não vale.\n\nA forma ~p ∨ ~q ∨ r é a própria condicional reescrita, não sua negação. As formas que negam o antecedente, como (~p ∨ ~q) ∧ ~r e ~(p ∧ q) ∧ ~r, aplicam a negação ao lado errado: descrevem casos em que a condicional é VERDADEIRA, por antecedente falso. E p ∧ q ∧ r é o caso em que a condicional se cumpre.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "media",
    enunciado:
      "Um estatuto prevê: “Se o servidor faltar sem justificativa, terá o dia descontado ou receberá advertência”. Qual proposição é a negação dessa previsão?",
    opcoes: [
      "O servidor faltou sem justificativa, não teve o dia descontado e não recebeu advertência",
      "O servidor faltou sem justificativa e não teve o dia descontado ou não recebeu advertência",
      "O servidor não faltou sem justificativa, mas teve o dia descontado",
      "Se o servidor não faltar, não terá o dia descontado nem receberá advertência",
      "O servidor faltou sem justificativa e recebeu advertência",
    ],
    correta: 0,
    explicacao:
      "A previsão tem a forma p → (q ∨ r). Sua negação é p ∧ ~(q ∨ r), e De Morgan transforma ~(q ∨ r) em ~q ∧ ~r. Resultado: o servidor faltou sem justificativa E não teve o dia descontado E não recebeu advertência — nenhuma das duas sanções veio.\n\nA frase com “não teve o dia descontado ou não recebeu advertência” nega o consequente de forma errada: bastaria uma sanção faltar, mas a previsão se cumpre com qualquer uma delas. O caso de quem não faltou deixa a previsão verdadeira. A condicional inversa é outra proposição. E faltar e receber advertência é o cumprimento da previsão.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "media",
    enunciado:
      "Uma diretoria anunciou: “Se o projeto for aprovado, haverá contratação e treinamento”. Qual proposição é a negação desse anúncio?",
    opcoes: [
      "O projeto foi aprovado, e não haverá contratação nem treinamento",
      "O projeto não foi aprovado, e haverá contratação e treinamento",
      "O projeto foi aprovado, e não haverá contratação ou não haverá treinamento",
      "Se o projeto não for aprovado, não haverá contratação nem treinamento",
      "O projeto foi aprovado, e haverá contratação, mas não treinamento, obrigatoriamente",
    ],
    correta: 2,
    explicacao:
      "O anúncio é p → (q ∧ r). A negação é p ∧ ~(q ∧ r), e De Morgan dá ~(q ∧ r) ≡ ~q ∨ ~r. Portanto: o projeto foi aprovado e falta pelo menos uma das duas promessas — ou não há contratação, ou não há treinamento.\n\nExigir que as duas promessas falhem juntas (“nem contratação nem treinamento”) é forte demais: basta uma falhar para o anúncio ser falso. O cenário de projeto não aprovado deixa o anúncio verdadeiro. A condicional inversa é outra proposição. E a versão que obriga a faltar exatamente o treinamento é um caso particular da negação, não a negação toda.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "facil",
    enunciado:
      "Sobre um candidato, considere a proposição “Ele não passou na prova objetiva ou foi chamado para a discursiva”. Em qual situação essa proposição é falsa?",
    opcoes: [
      "Ele não passou na prova objetiva e foi chamado para a discursiva",
      "Ele não passou na prova objetiva e não foi chamado para a discursiva",
      "Ele passou na prova objetiva e foi chamado para a discursiva",
      "Ele passou na prova objetiva e não foi chamado para a discursiva",
      "Em nenhuma, porque uma disjunção com negação é sempre verdadeira",
    ],
    correta: 3,
    explicacao:
      "A proposição é ~p ∨ q, com p = “passou na prova objetiva” e q = “foi chamado para a discursiva”. Uma disjunção só é falsa quando as duas partes são falsas: ~p falsa (ele passou na objetiva) e q falsa (não foi chamado). Esse é o único cenário — e ele faz sentido, porque ~p ∨ q equivale a “se passou na objetiva, foi chamado para a discursiva”.\n\nNos outros três cenários, ao menos uma das partes é verdadeira — não passar na objetiva já torna ~p verdadeira, e ser chamado torna q verdadeira —, então a disjunção vale. A ideia de que a negação dentro da disjunção a torna sempre verdadeira confunde a expressão com uma tautologia do tipo p ∨ ~p, que ela não é.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "media",
    enunciado:
      "Qual das expressões abaixo NÃO é equivalente a ~(p ∧ q)?",
    opcoes: [
      "~p ∧ ~q",
      "~p ∨ ~q",
      "p → ~q",
      "q → ~p",
      "~(q ∧ p)",
    ],
    correta: 0,
    explicacao:
      "Pela lei de De Morgan, ~(p ∧ q) ≡ ~p ∨ ~q. As formas condicionais p → ~q e q → ~p também equivalem a ela: cada uma se reescreve como ~p ∨ ~q (ou ~q ∨ ~p). E ~(q ∧ p) é a mesma negação com os termos trocados, o que não altera nada, porque a conjunção é comutativa.\n\nA única que destoa é ~p ∧ ~q. Ela é a negação de p ∨ q, e só é verdadeira quando p e q são ambas falsas. Na linha p = V e q = F, por exemplo, ~(p ∧ q) é verdadeira e ~p ∧ ~q é falsa. Esse é o erro de aplicar De Morgan negando as partes mas esquecendo de trocar o conectivo — e questões de “qual NÃO é” costumam cobrar exatamente ele.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "dificil",
    enunciado:
      "Considere a proposição “Ou o contrato é assinado hoje, ou a proposta perde a validade”, em que o “ou… ou” indica que exatamente uma das duas coisas acontece. Qual proposição é a sua negação?",
    opcoes: [
      "O contrato não é assinado hoje e a proposta não perde a validade",
      "O contrato é assinado hoje ou a proposta perde a validade",
      "Se o contrato é assinado hoje, a proposta perde a validade",
      "Ou o contrato não é assinado hoje, ou a proposta não perde a validade",
      "O contrato é assinado hoje se, e somente se, a proposta perde a validade",
    ],
    correta: 4,
    explicacao:
      "A disjunção exclusiva é verdadeira quando exatamente uma das partes vale, isto é, quando os valores divergem. Negá-la é afirmar que os valores coincidem — as duas coisas acontecem, ou nenhuma acontece. Isso é exatamente a bicondicional: ~(p ⊻ q) ≡ p ↔ q.\n\nA frase “não é assinado e não perde a validade” descreve só um dos dois casos de coincidência. A disjunção comum (inclusiva) é verdadeira quando só uma das partes ocorre, caso em que a exclusiva também é verdadeira. A condicional é verdadeira quando o contrato não é assinado e a proposta perde a validade, outro cenário em que a exclusiva vale. E a exclusiva das negações diverge exatamente quando a original diverge: é equivalente a ela, não à sua negação.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "media",
    enunciado:
      "Uma companhia aérea informa: “Se chover ou ventar forte, o voo atrasará”. Qual proposição é a negação dessa informação?",
    opcoes: [
      "Não choveu e não ventou forte, e o voo atrasou",
      "Choveu e ventou forte, e o voo atrasou",
      "Se não chover e não ventar forte, o voo não atrasará",
      "Choveu, ventou forte, e o voo não atrasou, necessariamente as três coisas",
      "Choveu ou ventou forte, e o voo não atrasou",
    ],
    correta: 4,
    explicacao:
      "A informação é (p ∨ q) → r. Negar uma condicional é afirmar o antecedente e negar o consequente: (p ∨ q) ∧ ~r. Ou seja, houve chuva ou vento forte (ao menos um dos dois) e, mesmo assim, o voo não atrasou.\n\nExigir chuva E vento, como faz a última alternativa, é pedir mais do que a negação exige: um dos dois fenômenos já dispara a regra. O cenário sem chuva nem vento torna o antecedente falso e deixa a informação verdadeira, com ou sem atraso. Chuva com vento e voo atrasado é o cumprimento da informação. E a inversa, “se não chover nem ventar, não atrasará”, é outra condicional, compatível com a original.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "media",
    enunciado:
      "Para um número real x, considere a afirmação “2 < x ≤ 7”. Qual é a sua negação?",
    opcoes: [
      "x ≤ 2 e x > 7",
      "x < 2 ou x ≥ 7",
      "x > 2 ou x ≤ 7",
      "x ≥ 2 e x < 7",
      "x ≤ 2 ou x > 7",
    ],
    correta: 4,
    explicacao:
      "A escrita 2 < x ≤ 7 é uma conjunção disfarçada: x > 2 e x ≤ 7. Pela lei de De Morgan, sua negação é a disjunção das negações: x ≤ 2 ou x > 7. Em termos de reta, é tudo o que fica fora do intervalo (2, 7].\n\nManter o “e” produz uma condição impossível — nenhum número é ao mesmo tempo menor ou igual a 2 e maior que 7. A versão x < 2 ou x ≥ 7 erra as duas fronteiras: deixa x = 2 de fora (e 2 não está no intervalo original) e inclui x = 7 (que está). A disjunção x > 2 ou x ≤ 7 é verdadeira para todo real. E x ≥ 2 e x < 7 é quase o intervalo original, não o seu complemento.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "dificil",
    enunciado:
      "Qual das proposições abaixo NÃO expressa a negação de p → q?",
    opcoes: [
      "p ∧ ~q",
      "~p → ~q",
      "~(~p ∨ q)",
      "~(~q → ~p)",
      "~q ∧ p",
    ],
    correta: 1,
    explicacao:
      "A negação de p → q é p ∧ ~q, que também pode ser escrita ~q ∧ p (a conjunção é comutativa). Ela aparece ainda em duas formas indiretas: ~(~p ∨ q), porque ~p ∨ q é a forma disjuntiva de p → q; e ~(~q → ~p), porque ~q → ~p é a contrapositiva, equivalente à própria condicional — negar a contrapositiva é negar a original.\n\nA forma ~p → ~q é a inversa da condicional e não é negação de nada aqui. Basta a linha p = F, q = F: a condicional original é verdadeira (antecedente falso) e a inversa também é verdadeira, mas uma negação teria de ser falsa ali. A inversa é a armadilha mais frequente porque soa como “o contrário” da frase em português.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "media",
    enunciado:
      "Um comunicado diz: “O candidato foi aprovado e será chamado em março ou em abril”. Qual proposição é a negação desse comunicado?",
    opcoes: [
      "O candidato não foi aprovado e não será chamado em março ou em abril",
      "O candidato não foi aprovado, ou não será chamado em março ou não será chamado em abril",
      "O candidato foi aprovado e não será chamado nem em março nem em abril",
      "O candidato não foi aprovado e será chamado em março ou em abril",
      "O candidato não foi aprovado, ou não será chamado nem em março nem em abril",
    ],
    correta: 4,
    explicacao:
      "O comunicado tem a forma p ∧ (q ∨ r). A negação da conjunção externa dá ~p ∨ ~(q ∨ r), e a negação da disjunção interna dá ~q ∧ ~r. Resultado: ~p ∨ (~q ∧ ~r) — ou o candidato não foi aprovado, ou não será chamado em nenhum dos dois meses.\n\nTrocar o “ou” externo por “e” exige a reprovação E a ausência de chamada, o que é mais forte do que a negação pede. Negar a disjunção interna mantendo o “ou” (não chamado em março ou não chamado em abril) erra De Morgan na camada de dentro. A frase “foi aprovado e não será chamado” é só um dos casos da negação. E o último item descreve um cenário em que o comunicado já é falso, mas deixa de fora o caso aprovado-e-não-chamado.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "media",
    enunciado:
      "Qual é a negação da proposição “Se Rui não trabalha, então não recebe salário”?",
    opcoes: [
      "Rui trabalha e não recebe salário",
      "Se Rui trabalha, então recebe salário",
      "Rui trabalha ou não recebe salário",
      "Rui não trabalha e recebe salário",
      "Rui não trabalha e não recebe salário",
    ],
    correta: 3,
    explicacao:
      "A proposição é ~p → ~q, com p = “Rui trabalha” e q = “recebe salário”. A negação de uma condicional preserva o antecedente e nega o consequente: ~p ∧ ~(~q) ≡ ~p ∧ q. Isto é, Rui não trabalha e, mesmo assim, recebe salário.\n\nQuando antecedente e consequente já vêm negados, é comum desfazer as negações erradas e responder “Rui trabalha e não recebe” — isso nega o antecedente, o que a regra não faz. A condicional “se trabalha, recebe” é a inversa da frase, outra proposição. “Rui trabalha ou não recebe salário” é a forma disjuntiva da própria frase. E “não trabalha e não recebe” é o cumprimento da frase.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "dificil",
    enunciado:
      "Qual proposição é a negação de “Se Ana estuda, então passa; e, se passa, então viaja”?",
    opcoes: [
      "Ana estuda, passa e não viaja",
      "Ana estuda e não viaja",
      "Ana não estuda e não passa, e não viaja",
      "Ana estuda e não passa, ou passa e não viaja",
      "Se Ana estuda, então não viaja",
    ],
    correta: 3,
    explicacao:
      "A frase é a conjunção de duas condicionais: (p → q) ∧ (q → r). Negar a conjunção dá, por De Morgan, ~(p → q) ∨ ~(q → r). E cada condicional negada vira antecedente com consequente negado: (p ∧ ~q) ∨ (q ∧ ~r). Ou Ana estuda sem passar, ou passa sem viajar.\n\n“Ana estuda, passa e não viaja” é um caso que falsifica a segunda condicional, mas deixa de fora quem estuda e não passa. “Ana estuda e não viaja” mistura as pontas e não cobre o caso em que Ana passa sem estudar e não viaja, que também torna a frase falsa. A versão com três negações descreve um cenário em que as duas condicionais são verdadeiras. E a condicional final é uma conclusão estranha à frase, não sua negação.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "facil",
    enunciado:
      "Um estudante afirmou que a negação de “Se a obra atrasar, haverá multa” é “Se não houver multa, a obra não atrasou”. Qual é o erro dele?",
    opcoes: [
      "Não há erro, porque negar uma condicional é inverter e negar as duas partes",
      "Ele deveria ter escrito “Se a obra não atrasar, não haverá multa”",
      "Ele deveria ter escrito “A obra não atrasou e houve multa”",
      "A frase que ele escreveu é a contrapositiva, equivalente à original, e não sua negação",
      "Não há erro, porque toda condicional admite várias negações diferentes",
    ],
    correta: 3,
    explicacao:
      "Inverter a ordem e negar as duas partes de p → q produz ~q → ~p, a contrapositiva. Ela tem sempre o mesmo valor lógico da original — as duas só são falsas quando a obra atrasa e não há multa. Uma frase equivalente à original não pode ser a sua negação, que deveria ter o valor oposto em todas as linhas. A negação correta é “a obra atrasou e não houve multa” (p ∧ ~q).\n\nA sugestão “se a obra não atrasar, não haverá multa” é a inversa, que também não é negação. “A obra não atrasou e houve multa” descreve um cenário em que a original é verdadeira. E uma condicional tem uma única negação, a menos de escritas equivalentes: todas elas têm a mesma tabela-verdade.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "media",
    enunciado:
      "Em qual dos pares abaixo a segunda frase é a negação da primeira?",
    opcoes: [
      "“Luísa é sócia e gerente” e “Luísa não é sócia e não é gerente”",
      "“Se Luísa é sócia, é gerente” e “Se Luísa não é sócia, não é gerente”",
      "“Luísa não é sócia ou é gerente” e “Luísa não é sócia e não é gerente”",
      "“Luísa é sócia se, e somente se, é gerente” e “Luísa não é sócia se, e somente se, não é gerente”",
      "“Luísa é sócia ou gerente” e “Luísa não é sócia nem gerente”",
    ],
    correta: 4,
    explicacao:
      "Duas frases formam um par proposição–negação quando têm valores opostos em todos os casos. “Sócia ou gerente” é falsa apenas quando Luísa não é nenhuma das duas coisas, que é exatamente o que a segunda frase afirma. Pela lei de De Morgan, ~(p ∨ q) ≡ ~p ∧ ~q.\n\nNos outros pares, a segunda frase falha. A negação de “sócia e gerente” é “não é sócia ou não é gerente”, não a versão com “e”. A inversa de uma condicional não é sua negação. A negação de “não é sócia ou é gerente” (que equivale a p → q) é “é sócia e não é gerente”. E negar os dois lados de uma bicondicional devolve a mesma bicondicional.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "media",
    enunciado:
      "Qual proposição é a negação de “O aluno entregou o trabalho ou não fez a prova”?",
    opcoes: [
      "O aluno não entregou o trabalho ou fez a prova",
      "O aluno entregou o trabalho e não fez a prova",
      "O aluno não entregou o trabalho e não fez a prova",
      "O aluno não entregou o trabalho e fez a prova",
      "Se o aluno fez a prova, então entregou o trabalho",
    ],
    correta: 3,
    explicacao:
      "A frase é p ∨ ~q, com p = “entregou o trabalho” e q = “fez a prova”. Pela lei de De Morgan, ~(p ∨ ~q) ≡ ~p ∧ q: o aluno não entregou o trabalho e fez a prova. É o único cenário em que as duas partes da disjunção são falsas.\n\nA armadilha é a negação que já vem dentro da frase: negar “não fez a prova” dá “fez a prova”, e não outra negação. Manter o “ou” depois de negar as partes gera uma frase verdadeira em cenários que confirmam a original. As conjunções com “entregou” descrevem casos em que a disjunção vale. E a condicional “se fez a prova, entregou o trabalho” equivale a ~q ∨ p, a própria frase.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "media",
    enunciado:
      "Um comentarista escreveu: “O time jogou bem, mas perdeu”. Do ponto de vista lógico, qual proposição é a negação dessa frase?",
    opcoes: [
      "O time não jogou bem e não perdeu",
      "O time não jogou bem, mas perdeu",
      "O time não jogou bem ou não perdeu",
      "O time jogou bem e não perdeu",
      "Se o time jogou bem, então perdeu",
    ],
    correta: 2,
    explicacao:
      "Na lógica, “mas” tem o mesmo valor de “e”: com p = “o time jogou bem” e r = “o time perdeu”, a frase afirma p ∧ r. A diferença de tom entre “e” e “mas” não muda o valor de verdade. Pela lei de De Morgan, a negação é ~p ∨ ~r: não jogou bem, ou não perdeu.\n\nNegar as duas partes mantendo o “e” exige que o time tenha jogado mal E não tenha perdido, deixando de fora, por exemplo, o jogo bom sem derrota. As frases “não jogou bem, mas perdeu” e “jogou bem e não perdeu” são, cada uma, um caso isolado da negação. E a condicional é verdadeira quando o time jogou mal, cenário em que a frase original já é falsa.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "dificil",
    enunciado:
      "A expressão (p → q) ∧ (q → p) foi negada. Qual das formas abaixo representa essa negação?",
    opcoes: [
      "(p ∧ ~q) ∨ (q ∧ ~p)",
      "(p ∧ ~q) ∧ (q ∧ ~p)",
      "(~p → ~q) ∧ (~q → ~p)",
      "(p ∨ q) ∧ ~(p ∧ q) ∧ p",
      "~p ∧ ~q",
    ],
    correta: 0,
    explicacao:
      "A expressão (p → q) ∧ (q → p) é a bicondicional p ↔ q escrita por extenso. Negá-la por De Morgan dá ~(p → q) ∨ ~(q → p), e cada condicional negada vira conjunção: (p ∧ ~q) ∨ (q ∧ ~p). É a disjunção exclusiva: os valores de p e q divergem.\n\nTrocar o “∨” central por “∧” produz uma contradição, porque p ∧ ~q e q ∧ ~p nunca valem juntas. A conjunção das duas inversas é equivalente à própria bicondicional. A forma que acrescenta “∧ p” à exclusiva deixa de fora o caso q verdadeira e p falsa. E ~p ∧ ~q é um caso em que p e q coincidem, justamente quando a bicondicional é verdadeira.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Negação de proposições e leis de De Morgan",
    dificuldade: "dificil",
    enunciado:
      "Em quantas das oito linhas da tabela-verdade da proposição ~((p ∧ q) ∨ r) o resultado é verdadeiro?",
    opcoes: [
      "3",
      "5",
      "1",
      "4",
      "2",
    ],
    correta: 0,
    explicacao:
      "Pela lei de De Morgan, ~((p ∧ q) ∨ r) ≡ ~(p ∧ q) ∧ ~r. Para ser verdadeira, a expressão precisa de r falsa E de p ∧ q falsa. Com r falsa sobram quatro linhas (as combinações de p e q); dessas, só p = V, q = V torna p ∧ q verdadeira. Restam 4 − 1 = 3 linhas.\n\nQuem conta 5 contou as linhas em que (p ∧ q) ∨ r é verdadeira, isto é, respondeu pela expressão sem a negação. O total 4 aparece quando se considera só r falsa, esquecendo de excluir a linha p = q = V. E respostas como 1 ou 2 costumam vir de negar p e q separadamente, exigindo ~p ∧ ~q, que é mais restrito do que ~(p ∧ q).",
  },
];
