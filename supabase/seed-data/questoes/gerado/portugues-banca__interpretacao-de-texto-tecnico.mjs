/* Interpretação de texto técnico (25 questões) — RASCUNHO gerado por gemini-3.6-flash.
   Dedup: exato + semântico (Jaccard trigrama ≥ 0.5); 0 rejeitada(s) na geração.
   Conferência de gabarito (gemini-3.6-flash, 2x às cegas, rigor estrito): 25 descartada(s) — q26,q27,q28,q29,q30,q31,q32,q33,q34,q35,q36,q37,q38,q39,q40,q41,q42,q43,q44,q45,q46,q47,q48,q49,q50.
   NÃO revisado. Confira gabarito e contas antes de semear.
   Passou por rebalancear-gabarito.mjs e checar-qualidade.mjs. */

export const questoes = [
  {
    materia: "portugues-banca",
    tema: "Interpretação de texto técnico",
    dificuldade: "facil",
    enunciado:
      "Um protocolo interno de segurança da informação estabelece a seguinte orientação: 'O backup incremental dos servidores de aplicação deve ser realizado diariamente às 23h. Caso ocorra uma falha durante o processo, o sistema enviará um alerta automático ao administrador de rede, que terá o prazo de até 2 horas após a notificação para iniciar a rotina de recuperação manual.' Com base unicamente nessas instruções, qual é a ação obrigatória do administrador de rede logo após receber o alerta automático de falha?",
    opcoes: [
      "Realizar imediatamente o backup completo de todos os servidores de aplicação.",
      "Iniciar a rotina de recuperação manual no prazo de até 2 horas após a notificação.",
      "Aguardar o próximo horário programado às 23h do dia seguinte para reiniciar a rotina.",
      "Apenas observar o sistema, pois o alerta indica que a recuperação automática foi iniciada.",
      "Desativar preventivamente todos os servidores de aplicação para evitar a perda de dados.",
    ],
    correta: 1,
    explicacao:
      "A resposta correta reflete fielmente o comando explícito do texto técnico para situações de falha no backup: notificar e conceder até 2 horas para o início da recuperação manual pelo administrador. O erro em propor a realização de backup completo consiste em extrapolar a instrução, inventando um procedimento não previsto no protocolo. A ideia de aguardar o próximo ciclo às 23h ignora a regra de emergência ativada pelo alerta de falha. Presumir o reinício automático do sistema confunde notificação de falha com correção automatizada. Por fim, propor a desativação dos servidores é uma atitude drástica sem qualquer amparo no texto lido.",
  },
  {
    materia: "portugues-banca",
    tema: "Interpretação de texto técnico",
    dificuldade: "facil",
    enunciado:
      "Em um manual de instruções laboratoriais para a centrifugação de amostras sanguíneas, consta a seguinte especificação: 'A amostra deve ser mantida em repouso por 30 minutos antes da centrifugação. A centrifugação precisa ser efetuada a 3000 RPM por exatamente 10 minutos em temperatura ambiente. Caso a amostra apresente hemólise perceptível antes do processo, o material deve ser descartado imediatamente.' Diante dessas especificações, qual procedimento deve ser adotado ao constatar hemólise na amostra logo após o período de repouso?",
    opcoes: [
      "Executar a centrifugação a 3000 RPM por um tempo reduzido de 5 minutos.",
      "Aumentar a velocidade da centrifugação para compensar a alteração da amostra.",
      "Descartar o material imediatamente sem realizar o processo de centrifugação.",
      "Deixar a amostra em repouso por mais 30 minutos adicionais antes de centrifugar.",
      "Processar a amostra normalmente e registrar a ocorrência de hemólise no laudo final.",
    ],
    correta: 2,
    explicacao:
      "A alternativa correta atende estritamente à regra contida no texto técnico, que estabelece expressamente o descarte imediato do material se for constatada hemólise perceptível antes do processo de centrifugação. A opção de reduzir o tempo de centrifugação para 5 minutos é incorreta pois inventa uma alteração nos parâmetros sem respaldo textual. A ideia de aumentar a velocidade da centrifugação comete o erro de criar uma compensação técnica arbitrária. Sugerir o aumento do tempo de repouso desrespeita a ordem direta de descarte imediato. Já a proposta de processar a amostra e apenas registrar o fato falha ao desobedecer ao descarte prévio obrigatório.",
  },
  {
    materia: "portugues-banca",
    tema: "Interpretação de texto técnico",
    dificuldade: "media",
    enunciado:
      "O procedimento operacional padrão de uma usina estipula: 'A inspeção das válvulas de alívio de pressão deve ser executada trimestralmente. Se a pressão de operação ultrapassar 15 bar durante os testes, a válvula deve ser recalibrada. Caso a calibração não reduza a pressão residual a patamares inferiores a 12 bar, o componente precisará ser substituído imediatamente.' Durante o teste trimestral de uma válvula, mediu-se uma pressão de 16 bar. Após a tentativa de recalibração, a pressão residual estabilizou em 13 bar. Segundo o texto, qual é a conduta a ser tomada para essa válvula?",
    opcoes: [
      "Manter a válvula em operação por mais um trimestre sob monitoramento reforçado.",
      "Substituir o componente imediatamente por não atingir pressão inferior a 12 bar.",
      "Realizar uma nova tentativa de calibragem até atingir a pressão exata de 10 bar.",
      "Repetir o procedimento de teste trimestral na semana seguinte sem alterar a peça.",
      "Aprovar a calibração efetuada, visto que 13 bar está dentro do limite tolerado de 15 bar.",
    ],
    correta: 1,
    explicacao:
      "A conduta correta é a substituição imediata da válvula, pois o texto exige que a calibração reduza a pressão a valores inferiores a 12 bar. Como a pressão estabilizou em 13 bar (que não é inferior a 12 bar), a condição de substituição é ativada. A opção de manter a válvula por mais um trimestre erra ao desconsiderar que a calibração falhou no objetivo regulamentar. Supor uma nova tentativa de calibragem para atingir abaixo de 10 bar erra ao inventar uma meta inexistente no texto (a meta era inferior a 12 bar). A alternativa de repetir a inspeção na semana seguinte cria uma conduta arbitrária sem base textual. Por fim, considerar 13 bar aceitável por ser menor que 15 bar confunde a pressão de teste inicial com a pressão residual pós-calibração.",
  },
  {
    materia: "portugues-banca",
    tema: "Interpretação de texto técnico",
    dificuldade: "media",
    enunciado:
      "Uma norma técnica ambiental estabelece a seguinte regra para o descarte de efluentes industriais em rios de Classe 2: 'É permitida a descarga de efluentes desde que a temperatura do corpo receptor não seja elevada em mais de 3 °C em relação à sua temperatura natural, e a concentração de óleos minerais não exceda 20 mg/L. Excepcionalmente, em períodos de estiagem severa declarada, o limite de óleos minerais é reduzido para 10 mg/L.' Em um mês sem declaração de estiagem severa, uma indústria lança efluentes que elevam a temperatura do rio em 2 °C e apresentam concentração de óleos minerais de 15 mg/L. O que se pode aferir quanto à conformidade dessa operação com a norma?",
    opcoes: [
      "A operação é irregular pois o limite de óleos minerais aceito é de 10 mg/L em qualquer circunstância.",
      "A operação é regular pois atende simultaneamente aos critérios de elevação de temperatura e concentração de óleos.",
      "A operação é irregular porque o limite tolerado de elevação de temperatura foi ultrapassado.",
      "A operação é regular apenas se a indústria solicitar licença especial para período de estiagem.",
      "A operação é irregular porque a temperatura do efluente não pode sofrer nenhuma variação em relação ao rio.",
    ],
    correta: 1,
    explicacao:
      "A alternativa correta atesta a regularidade da operação, pois a norma fixa dois critérios simultâneos em períodos normais: elevação de temperatura até 3 °C e limite de óleos de 20 mg/L. Como os valores medidos foram 2 °C de elevação e 15 mg/L de óleos, a empresa cumpriu ambos os requisitos. O distrator que aponta irregularidade fixando o limite em 10 mg/L erra ao aplicar a regra de exceção (estiagem severa) a um período sem estiagem declarada. O distrator que afirma haver excesso de temperatura erra a interpretação matemática simples (2 °C é menor que 3 °C). A opção que exige licença de estiagem confunde as condições normais com as excepcionais. O distrator sobre proibição de qualquer variação de temperatura contraria o limite tolerado de 3 °C exposto.",
  },
  {
    materia: "portugues-banca",
    tema: "Interpretação de texto técnico",
    dificuldade: "media",
    enunciado:
      "A especificação de requisitos de um sistema de pagamento digital estabelece: 'A autenticação em dois fatores (2FA) é obrigatória para todas as transações acima de R$ 500,00. Para transações de valor igual ou inferior a R$ 500,00, a autenticação 2FA é opcional, a menos que a conta do usuário tenha sido criada há menos de 30 dias, situação em que o 2FA passa a ser obrigatório independentemente do valor.' Um usuário cadastrado há 15 dias realiza uma transferência no valor exato de R$ 200,00. Qual é a exigência do sistema para essa operação específica?",
    opcoes: [
      "A autenticação 2FA é opcional porque o valor da transferência é inferior a R$ 500,00.",
      "A transação é bloqueada automaticamente pelo sistema por se tratar de uma conta recente.",
      "A autenticação 2FA é obrigatória devido ao tempo de criação da conta ser inferior a 30 dias.",
      "A verificação de segurança é dispensada por se tratar de uma operação de valor baixo.",
      "A autenticação 2FA só seria exigida caso o valor da transferência fosse exatamente R$ 500,00.",
    ],
    correta: 2,
    explicacao:
      "A alternativa correta fundamenta-se na regra de exceção descrita no texto: para contas criadas há menos de 30 dias, a autenticação em dois fatores (2FA) torna-se obrigatória independentemente do valor da transação. Como a conta possui 15 dias, a regra de valor (limite de R$ 500,00) é sobreposta pela regra do tempo de cadastro. O erro em considerar o 2FA opcional ocorre ao aplicar apenas a regra geral de valor e ignorar a cláusula temporal. A opção que menciona o bloqueio automático da transação inventa uma punição ou restrição inexistente no texto. A alternativa que alega dispensa de verificação confunde a opção com ausência total de segurança. Por fim, a ideia de que o 2FA só seria exigido no valor exato de R$ 500,00 interpreta erroneamente os limites quantitativos estipulados.",
  },
  {
    materia: "portugues-banca",
    tema: "Interpretação de texto técnico",
    dificuldade: "media",
    enunciado:
      "O manual de boas práticas de armazenamento de imunobiológicos prevê: 'As vacinas armazenadas devem ser mantidas entre +2 °C e +8 °C. Caso a temperatura registre variações entre +8,1 °C e +10 °C por um período contínuo inferior a 2 horas, os imunobiológicos devem ser colocados em quarentena para análise de estabilidade. Caso a temperatura ultrapasse +10 °C por qualquer duração, os lotes afetados devem ser descartados imediatamente.' O sensor de um refrigerador registrou uma oscilação para +9 °C mantida por 45 minutos contínuos. Diante desse evento, qual conduta deve ser adotada com as vacinas?",
    opcoes: [
      "Descartar os lotes imediatamente sem realizar análise prévia de estabilidade.",
      "Manter as vacinas na prateleira sem tomar providências, pois a oscilação foi breve.",
      "Transferir as vacinas para quarentena a fim de realizar a análise de estabilidade.",
      "Ajustar a temperatura do equipamento para 0 °C para congelar o lote e compensar o calor.",
      "Aplicar imediatamente o lote em pacientes antes que ocorra redução da eficácia.",
    ],
    correta: 2,
    explicacao:
      "A conduta correta é colocar as vacinas em quarentena. O texto especifica que variações de temperatura entre +8,1 °C e +10 °C por período contínuo inferior a 2 horas demandam quarentena para análise. A oscilação a +9 °C por 45 minutos enquadra-se exatamente nessa faixa. O distrator que sugere o descarte imediato erra ao aplicar a punição destinada a temperaturas superiores a +10 °C. A opção de não tomar providências ignora o desvio de temperatura em relação à faixa ideal de +2 °C a +8 °C. A proposta de congelar o lote a 0 °C é um improviso absurdo sem respaldo nas instruções descritas. Por fim, aplicar as vacinas imediatamente coloca em risco a segurança imunológica e desrespeita a ordem explícita de quarentena prévia.",
  },
  {
    materia: "portugues-banca",
    tema: "Interpretação de texto técnico",
    dificuldade: "media",
    enunciado:
      "Uma diretriz de navegabilidade aérea determina: 'Em aeronaves comerciais modelo X, a inspeção ultrassônica das pás da turbina é compulsória a cada 500 horas de voo. Se for detectada microfissura com profundidade superior a 0,5 mm, a pá deve ser substituída antes do próximo voo. Se a microfissura for igual ou inferior a 0,5 mm, a aeronave pode voar por mais 50 horas de voo, desde que realize inspeções visuais diárias.' Durante a inspeção de 500 horas, constatou-se uma microfissura de exatamente 0,4 mm em uma pá. Qual é o procedimento autorizado por essa diretriz?",
    opcoes: [
      "Interditar a aeronave para a troca imediata da pá danificada antes do próximo voo.",
      "Liberar a aeronave para voar sem restrições pelas próximas 500 horas de voo.",
      "Permitir voos por até 50 horas de voo, exigindo a realização de inspeções visuais diárias.",
      "Ignorar o achado, pois profundidades abaixo de 0,5 mm indicam apenas margem de erro da medição.",
      "Realizar nova inspeção ultrassônica a cada 50 horas de voo dispensando as inspeções visuais.",
    ],
    correta: 2,
    explicacao:
      "O procedimento correto é permitir os voos por até 50 horas com a exigência de inspeção visual diária, pois o valor detectado (0,4 mm) atende ao critério de ser igual ou inferior a 0,5 mm. O distrator de interdição e troca imediata erra ao aplicar a exigência destinada a microfissuras estritamente superiores a 0,5 mm. A alternativa que libera a aeronave por 500 horas sem restrições desconsidera a necessidade da inspeção visual e o limite reduzido de 50 horas. O distrator que sugere ignorar o dano por suposto erro de medição inventa um conceito inexistente no texto técnico. A opção de repetir a inspeção ultrassônica a cada 50 horas troca a exigência explícita de inspeção visual por outro método não prescrito para esse intervalo.",
  },
  {
    materia: "portugues-banca",
    tema: "Interpretação de texto técnico",
    dificuldade: "media",
    enunciado:
      "Uma instrução normativa tributária prevê: 'Pessoas jurídicas optantes pelo regime do Lucro Presumido que auferirem receita bruta anual superior a R$ 5.000.000,00 ficam obrigadas a apresentar a escrituração digital até o último dia útil de junho do ano subsequente. Para empresas com receita igual ou inferior a esse patamar, a entrega da escrituração digital é facultativa, exceto se houver distribuição de lucros acima do limite de isenção, hipótese na qual a entrega torna-se obrigatória.' Uma empresa optante pelo Lucro Presumido obteve receita bruta anual de R$ 3.000.000,00 no ano-calendário e realizou distribuição de lucros acima do limite de isenção aos sócios. Qual a obrigação dessa empresa referente à escrituração digital?",
    opcoes: [
      "A entrega da escrituração digital é facultativa devido ao faturamento ser inferior a R$ 5.000.000,00.",
      "A empresa está isenta de escrituração digital e proibida de entregá-la pelo órgão fiscalizador.",
      "A entrega da escrituração digital é obrigatória devido à distribuição de lucros acima da isenção.",
      "A empresa deve migrar automaticamente para o regime de Lucro Real antes de fazer a entrega.",
      "A escrituração digital só seria exigida se a receita bruta anual excedesse o valor de R$ 10.000.000,00.",
    ],
    correta: 2,
    explicacao:
      "A resposta correta identifica que a distribuição de lucros acima do limite de isenção torna a entrega da escrituração digital obrigatória, mesmo para empresas com receita bruta inferior a R$ 5.000.000,00. O distrator que aponta a entrega como facultativa erra ao considerar apenas o limite de faturamento, ignorando a cláusula de exceção sobre distribuição de lucros. A opção que declara isenção total e proibição de entrega contraria tanto a regra facultativa geral quanto a obrigatoriedade da exceção. O distrator que exige mudança para o Lucro Real inventa um efeito tributário sem qualquer respaldo no texto lido. Por fim, a alternativa sobre a receita de R$ 10.000.000,00 altera arbitrariamente os valores numéricos contidos na norma lida.",
  },
  {
    materia: "portugues-banca",
    tema: "Interpretação de texto técnico",
    dificuldade: "dificil",
    enunciado:
      "Um memorial descritivo de engenharia civil estabelece: 'O uso de concreto autoadensável é obrigatório nas vigas dos pavimentos que suportam carga estática superior a 50 kN/m². Nas demais estruturas de sustentação, o uso desse tipo de concreto é vedado, a menos que haja laudo de viabilidade técnica assinado pelo engenheiro calculista principal e aprovação prévia da fiscalização.' Em uma viga projetada para suportar carga estática de 40 kN/m², a empreiteira utilizou concreto autoadensável possuindo apenas o laudo assinado pelo engenheiro calculista principal, sem a aprovação prévia da fiscalização. Com base nas regras expressas do memorial, como se classifica essa conduta da empreiteira?",
    opcoes: [
      "Regular, pois a carga de 40 kN/m² exige obrigatoriamente a utilização do concreto autoadensável.",
      "Irregular, pois faltou a aprovação prévia da fiscalização, que é exigida cumulativamente com o laudo.",
      "Regular, visto que a assinatura do engenheiro calculista principal dispensa a anuência da fiscalização.",
      "Irregular, exclusivamente porque o concreto autoadensável é proibido em cargas abaixo de 50 kN/m².",
      "Regular, pois a empresa possui autonomia técnica para escolher o material quando a carga for baixa.",
    ],
    correta: 1,
    explicacao:
      "A conduta é irregular porque a norma exige duas condições cumulativas para o uso de concreto autoadensável em estruturas com carga inferior a 50 kN/m² (como a de 40 kN/m²): laudo do engenheiro calculista E aprovação prévia da fiscalização. Ao possuir apenas o laudo, a exigência não foi totalmente atendida. O distrator de regularidade por obrigatoriedade de carga erra ao inverter a regra de corte de 50 kN/m². O distrator que anula a fiscalização pela assinatura do engenheiro desconsidera a conjunção aditiva do texto. A opção de que é proibido em qualquer carga abaixo de 50 kN/m² erra ao ignorar a exceção condicional prevista. Por fim, a ideia de autonomia técnica da empreiteira desrespeita as restrições contratuais explícitas do memorial.",
  },
  {
    materia: "portugues-banca",
    tema: "Interpretação de texto técnico",
    dificuldade: "dificil",
    enunciado:
      "Uma norma de biossegurança laboratorial determina: 'A manipulação de agentes patogênicos de Classe de Risco 3 deve ocorrer em cabines de segurança biológica (CSB) Classe II Tipo B2. Se houver falha no sistema de exaustão de ar da CSB, os trabalhos devem ser imediatamente interrompidos e o ambiente hermeticamente selado. Contudo, caso o agente em manipulação seja um vírus envelopado e exista sistema suplementar de filtragem HEPA em exaustão dupla em pleno funcionamento, tolera-se a finalização do procedimento em curso por até no máximo 15 minutos antes do selamento.' Durante a manipulação de uma bactéria não envelopada da Classe de Risco 3, ocorreu uma falha no sistema de exaustão de ar da CSB, estando a filtragem HEPA suplementar em exaustão dupla totalmente ativa. Considerando os parâmetros fixados na norma, qual ação deve ser tomada imediatamente pelos operadores?",
    opcoes: [
      "Finalizar o procedimento em curso no prazo de até 15 minutos antes de selar o ambiente.",
      "Interromper os trabalhos imediatamente e realizar o selamento hermético do ambiente.",
      "Manter as atividades normalmente por se tratar de uma bactéria com menor poder infeccioso.",
      "Substituir a cabine de segurança por um modelo de Classe I sem parar o procedimento atual.",
      "Desligar o sistema suplementar HEPA e aguardar a manutenção corretiva do exaustor principal.",
    ],
    correta: 1,
    explicacao:
      "A ação correta é a interrupção imediata e selamento do ambiente, pois o texto limita a tolerância de 15 minutos exclusivamente a manipulações com vírus envelopado. Como o agente citado é uma bactéria não envelopada, a exceção não se aplica, prevalecendo a regra geral de paralisação imediata sob falha de exaustão. O distrator que permite os 15 minutos adicionais erra ao estender a exceção a um agente biológico que não preenche os requisitos (vírus envelopado). A opção de manter atividades normalmente ignora a gravidade da falha no exaustor. O distrator de trocar a cabine de segurança inventa um procedimento impraticável e não previsto. Por fim, desligar a filtragem HEPA agrava o risco de contaminação e contraria a conduta de emergência estabelecida.",
  },
  {
    materia: "portugues-banca",
    tema: "Interpretação de texto técnico",
    dificuldade: "facil",
    enunciado:
      "Os textos técnicos e científicos caracterizam-se por buscarem a máxima precisão de sentido, evitando que o leitor construa interpretações divergentes daquelas pretendidas pelo autor do documento. Nesse contexto da redação técnica, qual característica linguística é indispensável para evitar duplas interpretações e garantir a clareza da mensagem?",
    opcoes: [
      "Monossemia dos termos empregados.",
      "Emprego abundante de metáforas explicativas.",
      "Utilização de adjetivação expressiva e subjetiva.",
      "Variação estilística com uso de regionalismos.",
      "Predomínio da função emotiva da linguagem.",
    ],
    correta: 0,
    explicacao:
      "A monossemia garante que cada termo técnico tenha um único sentido determinado, o que impede ambiguidades na leitura. A opção com metáforas erra porque recursos figurados introduzem conotações que geram incerteza. A alternativa sobre adjetivação expressiva erra pois a subjetividade compromete a impessoalidade e a exatidão. O uso de regionalismos é incorreto pois limita a compreensão do texto por leitores de outras regiões. O predomínio da função emotiva erra ao focar na expressão do emissor, quando o texto técnico exige a função referencial focada no fato.",
  },
  {
    materia: "portugues-banca",
    tema: "Interpretação de texto técnico",
    dificuldade: "media",
    enunciado:
      "Considere o trecho de um manual de procedimentos industriais: Em caso de sobrepressão na tubulação principal de vapor acima de 10 bar, o sistema automatizado deve acionar imediatamente a válvula de alívio A. Caso a pressão persista acima desse limite por mais de 30 segundos, a válvula secundária B deve ser aberta manualmente pelo operador responsável, seguida do desligamento imediato da caldeira. De acordo com o procedimento operacional descrito, qual ação completa e correta deve ser executada se a sobrepressão atingir 12 bar e permanecer por 45 segundos?",
    opcoes: [
      "Acionamento automático da válvula A, abertura manual da válvula B e desligamento da caldeira.",
      "Abertura manual da válvula A e desligamento automático imediato da caldeira.",
      "Acionamento automático da válvula B e manutenção da caldeira em funcionamento sob observação.",
      "Desligamento imediato da caldeira antes de acionar qualquer uma das válvulas de segurança.",
      "Abertura manual simultânea das válvulas A e B sem desligar o equipamento.",
    ],
    correta: 0,
    explicacao:
      "Como a pressão de 12 bar supera o limite de 10 bar e persiste por 45 segundos (superior a 30 segundos), ocorrem sucessivamente: o acionamento automático de A, a abertura manual de B pelo operador e o desligamento da caldeira. A opção que menciona abertura manual da válvula A erra a forma de acionamento (que é automática). A opção de acionamento automático de B erra a forma de operação (que é manual) e descumpre o desligamento. A opção de desligamento imediato ignora a sequência temporal exigida. A opção de abertura manual simultânea descumpre a ordem operacional e a parada da caldeira.",
  },
  {
    materia: "portugues-banca",
    tema: "Interpretação de texto técnico",
    dificuldade: "facil",
    enunciado:
      "Em manuais de instrução, relatórios periciais e especificações de engenharia, verifica-se a busca pela transmissão objetiva de dados reais da realidade. Em relação aos estudos sobre funções da linguagem, como se caracteriza o predomínio da função referencial no contexto da redação de um documento técnico?",
    opcoes: [
      "Foco na mensagem objetiva e na informação factual sobre o referente real.",
      "Foco na persuasão do leitor por meio de imperativos e apelos diretos.",
      "Foco no canal de comunicação mediante testes de conexão contínuos.",
      "Foco no código linguístico por meio da explicação de termos gramaticais.",
      "Foco na expressão de sentimentos e opiniões pessoais do autor do texto.",
    ],
    correta: 0,
    explicacao:
      "A função referencial (ou informativa) centra-se no referente, privilegiando a objetividade, a denotação e a informação factual do contexto. A alternativa com foco na persuasão erra pois define a função conativa ou apelativa. A opção focada no canal de comunicação erra ao descrever a função fática. A alternativa sobre o código linguístico erra por caracterizar a função metalinguística. A opção que destaca a expressão de sentimentos erra por se referir à função emotiva ou expressiva.",
  },
  {
    materia: "portugues-banca",
    tema: "Interpretação de texto técnico",
    dificuldade: "media",
    enunciado:
      "Leia o seguinte trecho adaptado de um edital normativo de auditoria contábil: O relatório de auditoria referente ao exercício de 2023 apontou discrepâncias nos lançamentos fiscais da instituição. As incorreções classificadas como leves devem ser corrigidas em até 15 dias úteis a contar da notificação. Já as incorreções graves exigem plano de ação apresentado em 5 dias úteis e regularização integral em até 30 dias corridos. Com base no texto do edital, qual o prazo e a exigência específica para o tratamento inicial de uma incorreção contábil considerada grave?",
    opcoes: [
      "Apresentação de um plano de ação no prazo de 5 dias úteis contados a partir da notificação.",
      "Correção direta e final da irregularidade no prazo de 15 dias úteis a partir do relatório.",
      "Apresentação de plano de ação e regularização integral simultânea em 30 dias úteis.",
      "Regularização integral da inconsistência no prazo único de 5 dias corridos após a notificação.",
      "Elaboração de plano de ação em 15 dias corridos a contar da apresentação do relatório.",
    ],
    correta: 0,
    explicacao:
      "Para incorreções graves, o texto estipula explicitamente o envio de um plano de ação em até 5 dias úteis. A alternativa que menciona 15 dias úteis confunde o procedimento das falhas graves com o prazo total para falhas leves. A opção que fala em 30 dias úteis erra a contagem temporal, pois o texto prevê 30 dias corridos para a regularização final, e não para o plano inicial. A opção de 5 dias corridos erra a unidade de contagem do prazo (que é em dias úteis). A opção de 15 dias corridos altera tanto a contagem quanto a quantidade de dias descritos no edital.",
  },
  {
    materia: "portugues-banca",
    tema: "Interpretação de texto técnico",
    dificuldade: "media",
    enunciado:
      "A impessoalidade é um requisito central da linguagem técnica e científica, visando conferir neutralidade e isenção ao conteúdo exposto. Qual recurso gramatical é empregado prioritariamente para garantir esse efeito de impessoalidade em um laudo técnico?",
    opcoes: [
      "Utilização da voz passiva sintética ou analítica omitindo a identificação do agente.",
      "Emprego frequente de pronomes de primeira pessoa do singular no presente do indicativo.",
      "Inserção de interjeições e advérbios de intensidade expressivos ao longo do texto.",
      "Adoção ostensiva do modo imperativo para direcionar as ações imediatas do leitor.",
      "Uso generalizado de figuras de linguagem conotativas como a catacrese e a metáfora.",
    ],
    correta: 0,
    explicacao:
      "A voz passiva (analítica ou sintética) permite focar no fato/objeto sem destacar a pessoa que realiza a ação, apagando o agente e produzindo impessoalidade. A alternativa sobre primeira pessoa do singular erra pois gera marca de pessoalidade e subjetividade. O uso de interjeições e advérbios expressivos erra ao introduzir carga emotiva e valorativa. O uso do modo imperativo erra pois caracteriza apelo ao interlocutor (função conativa). As figuras de linguagem conotativas erradamente desviam a linguagem da precisão denotativa necessária.",
  },
  {
    materia: "portugues-banca",
    tema: "Interpretação de texto técnico",
    dificuldade: "media",
    enunciado:
      "Analise a instrução normativa a seguir: A Licença Ambiental Simplificada (LAS) será concedida desde que o empreendimento se enquadre cumulativamente em pequeno porte e baixo potencial poluidor. Caso o empreendimento cumpra o requisito de pequeno porte, mas apresente médio potencial poluidor, haverá exigência de Licença Prévia (LP) e Licença de Instalação (LI) sucessivamente. De acordo com a instrução apresentada, qual a exigência regulamentar aplicada a um empreendimento de pequeno porte que possui médio potencial poluidor?",
    opcoes: [
      "Concessão imediata e direta da Licença Ambiental Simplificada por ser de pequeno porte.",
      "Isenção integral do processo de licenciamento ambiental em razão da dimensão do porte.",
      "Exigência exclusiva de Licença de Operação sem necessidade de licenças anteriores.",
      "Obtenção obrigatória da Licença Prévia seguida do requerimento da Licença de Instalação.",
      "Obtenção apenas da Licença de Instalação dispensando-se expressamente a Licença Prévia.",
    ],
    correta: 3,
    explicacao:
      "O texto explicita que a presença de médio potencial poluidor em empreendimento de pequeno porte desqualifica a LAS e exige o cumprimento sucessivo de Licença Prévia (LP) e Licença de Instalação (LI). A opção de concessão da LAS erra por ignorar a exigência cumulativa de baixo potencial poluidor. A opção de isenção erra por criar norma inexistente no texto. A opção de exigência exclusiva de Licença de Operação altera o tipo de licença citada. A opção de dispensar a Licença Prévia descumpre a palavra 'sucessivamente' expressa na norma.",
  },
  {
    materia: "portugues-banca",
    tema: "Interpretação de texto técnico",
    dificuldade: "media",
    enunciado:
      "A coesão sequencial em manuais técnicos garante a perfeita compreensão da lógica de funcionamento de máquinas e diretrizes operacionais. Em uma instrução de segurança que prescreve: 'A esteira transportadora permanecerá ligada, contanto que o sensor infravermelho não detecte obstrução na saída', o conector 'contanto que' estabelece entre as orações uma relação sintático-semântica de:",
    opcoes: [
      "Concessão a uma ideia contrária anteriormente apresentada.",
      "Consequência direta decorrente de um fato gerador.",
      "Conclusão lógica derivada de premissas analíticas.",
      "Condição indispensável para o fato enunciado principal.",
      "Oposição explícita entre duas proposições de mesmo peso.",
    ],
    correta: 3,
    explicacao:
      "A locução conjuntiva 'contanto que' possui valor subordinativo condicional, indicando a exigência necessária (não haver obstrução) para que a ação principal ocorra (esteira continuar ligada). A alternativa de concessão erra pois a concessão introduz um obstáculo superado (como 'embora'). A de consequência erra por confundir causa/efeito com requisito condicional. A de conclusão erra por atribuir papel sintático típico de conectivos conclusivos como 'portanto'. A de oposição erra por tratar a oração condicional como uma adversativa.",
  },
  {
    materia: "portugues-banca",
    tema: "Interpretação de texto técnico",
    dificuldade: "media",
    enunciado:
      "Examine a posologia constante na bula de um fármaco: Para a administração do medicamento em pacientes adultos com insuficiência renal leve, a dosagem recomendada é de 250 mg a cada 12 horas. Em caso de insuficiência renal moderada, o intervalo entre as doses deve ser ampliado para 24 horas, mantendo-se a dose fixa de 250 mg. Pacientes com insuficiência renal grave têm o uso do fármaco estritamente contraindicado. De acordo com o texto da bula, qual é a conduta médica posológica correta para um adulto com insuficiência renal moderada?",
    opcoes: [
      "Manter a administração de 250 mg no intervalo regular de 12 horas.",
      "Aumentar a dosagem para 500 mg administrados a cada 24 horas.",
      "Suspender obrigatoriamente o tratamento por se tratar de caso contraindicado.",
      "Administrar a dose de 250 mg no intervalo espaçado de 24 horas.",
      "Reduzir a dosagem do medicamento para 125 mg a cada 12 horas.",
    ],
    correta: 3,
    explicacao:
      "A bula instrui expressamente que para casos moderados mantém-se a dose de 250 mg e amplia-se o intervalo para 24 horas. A opção de manter 12 horas erra por aplicar a regra da insuficiência leve. A opção de aumentar a dose para 500 mg erra por alterar a dosagem que o texto fixa em 250 mg. A opção de suspender o tratamento erra por aplicar a regra reservada aos casos graves. A opção de reduzir para 125 mg erra por alterar a massa da dose sem nenhuma previsão textual.",
  },
  {
    materia: "portugues-banca",
    tema: "Interpretação de texto técnico",
    dificuldade: "dificil",
    enunciado:
      "A elaboração de pareceres técnicos e laudos periciais exige a rigorosa seleção vocabular a fim de conferir densidade e precisão ao texto. Por qual razão a univocidade (monossemia) dos termos é preferida em detrimento da polissemia na escrita desse tipo de documento?",
    opcoes: [
      "Porque amplia a riqueza estética do texto permitindo múltiplas leituras pelo leitor.",
      "Porque facilita a memorização do documento por meio de construções conotativas variadas.",
      "Porque garante que o texto expresse prioritariamente os sentimentos do especialista.",
      "Porque reduz a ambiguidade hermenêutica e assegura a previsibilidade da interpretação técnica.",
      "Porque elimina a necessidade de coesão textual ao confiar na intuição do leitor.",
    ],
    correta: 3,
    explicacao:
      "A univocidade busca a relação biunívoca entre termo e conceito, eliminando a ambiguidade e garantindo segurança jurídica e técnica. A alternativa sobre ampliação estético-literária erra pois a polissemia e a plurisignificação são próprias do texto artístico, não do técnico. A opção sobre memorização por conotação erra ao propor a linguagem figurada, oposta à clareza técnica. A opção sobre expressar sentimentos erra pois contraria o princípio da impessoalidade. A opção sobre eliminar a coesão erra pois a coesão é elemento estrutural indispensável em qualquer texto formal.",
  },
  {
    materia: "portugues-banca",
    tema: "Interpretação de texto técnico",
    dificuldade: "dificil",
    enunciado:
      "Leia o trecho da norma interna de segurança da informação de uma empresa: O acesso remoto aos servidores críticos é restrito aos administradores de rede, desde que efetuado via VPN corporativa com autenticação em dois fatores (MFA). Excepcionalmente, prestadores de serviços externos poderão acessar esses servidores sem a utilização de MFA apenas se a conexão for realizada a partir de um IP fixo previamente cadastrado na matriz e previamente autorizada por escrito pelo diretor de Tecnologia da Informação. Considerando as restrições e exceções normativas apresentadas, sob qual condição um prestador de serviço externo pode acessar os servidores críticos sem utilizar a verificação em dois fatores (MFA)?",
    opcoes: [
      "Pertencer à equipe de administração de rede e utilizar qualquer VPN corporativa autorizada.",
      "Obter autorização verbal do diretor de TI e conectar-se a partir de qualquer rede sem fio local.",
      "Acessar o sistema utilizando computador pessoal com VPN ativada e validação do administrador de rede da filial.",
      "Realizar a conexão via IP fixo cadastrado na matriz acompanhada de autorização prévia por escrito do diretor de TI.",
      "Apresentar solicitação formal aprovada por escrito pelo supervisor da equipe de infraestrutura local.",
    ],
    correta: 3,
    explicacao:
      "A norma estabelece duas exigências cumulativas para a exceção do prestador externo sem MFA: IP fixo cadastrado na matriz e autorização prévia por escrito do diretor de TI. A alternativa que cita pertencer à administração erra porque o texto exige MFA obrigatório para administradores. A opção de autorização verbal erra por violar a exigência de ser por escrito e omitir o IP fixo. A opção de computador pessoal e aprovação da filial inventa requisitos não constantes no texto. A opção de aprovação por supervisor local erra o agente competente (que é o diretor de TI).",
  },
  {
    materia: "portugues-banca",
    tema: "Interpretação de texto técnico",
    dificuldade: "facil",
    enunciado:
      "O Acordo de Nível de Serviço (SLA) de uma empresa de tecnologia estabelece as seguintes diretrizes: 'Chamados de severidade 1 (parada total do sistema) devem ter atendimento inicial em até 15 minutos e resolução em até 4 horas. Chamados de severidade 2 (degradação parcial) têm atendimento inicial em até 1 hora e resolução em até 12 horas. O prazo de resolução é contado continuamente a partir do horário de registro do chamado.' Uma empresa cliente registrou um chamado de severidade 1 às 14h00 de uma terça-feira. Qual é o horário limite exato para que a equipe de suporte conclua a resolução desse chamado?",
    opcoes: [
      "14h15 do mesmo dia.",
      "15h15 do mesmo dia.",
      "02h00 do dia seguinte.",
      "19h15 do mesmo dia.",
      "18h00 do mesmo dia.",
    ],
    correta: 4,
    explicacao:
      "O texto do SLA especifica claramente que chamados de severidade 1 exigem resolução em até 4 horas contadas continuamente a partir do registro do chamado. Tendo sido registrado às 14h00, o limite de resolução é às 18h00 (14h00 + 4h). O distrator de 14h15 confunde o prazo de atendimento inicial (15 minutos) com o prazo de resolução. O distrator de 15h15 soma erroneamente o prazo de atendimento inicial da severidade 1 com o tempo de atendimento da severidade 2. O distrator de 02h00 do dia seguinte aplica indevidamente o prazo de resolução de 12 horas referente à severidade 2. O distrator de 19h15 adiciona o tempo de atendimento inicial ao prazo total de resolução de forma indevida.",
  },
  {
    materia: "portugues-banca",
    tema: "Interpretação de texto técnico",
    dificuldade: "media",
    enunciado:
      "Segundo o Regulamento de Segurança do Trabalho de uma indústria: 'A utilização de protetor auricular é obrigatória para níveis de ruído a partir de 85 dB(A) para uma jornada padrão de 8 horas. Para cada incremento de 5 dB(A) no nível de ruído, o tempo máximo de exposição diária sem proteção cai pela metade. Acima de 115 dB(A), a exposição sem equipamento de proteção adequada é expressamente proibida, independentemente da duração.' Um operário trabalha em um ambiente cujo ruído contínuo foi medido em 95 dB(A) sem utilizar protetor auricular. Com base estrita no texto da norma, qual é a duração máxima permitida para a exposição diária desse operário sem o equipamento de proteção?",
    opcoes: [
      "8 horas.",
      "4 horas.",
      "1 hora.",
      "0 horas.",
      "2 horas.",
    ],
    correta: 4,
    explicacao:
      "A norma estabelece que para o nível base de 85 dB(A) o tempo máximo é de 8 horas. Para cada incremento de 5 dB(A), a permissão reduz-se à metade. Assim: a 90 dB(A) (primeiro incremento de 5 dB), o tempo cai para 4 horas; a 95 dB(A) (segundo incremento de 5 dB), o tempo reduz-se novamente pela metade, resultando em 2 horas. O distrator de 8 horas ignora a regra de redução por incremento. O distrator de 4 horas realiza apenas uma redução (para 90 dB(A)). O distrator de 1 hora faz três reduções sucessivas (correspondente a 100 dB(A)). O distrator de 0 horas confunde a exposição a 95 dB(A) com a proibição total que só é aplicada acima de 115 dB(A).",
  },
  {
    materia: "portugues-banca",
    tema: "Interpretação de texto técnico",
    dificuldade: "media",
    enunciado:
      "O Manual de Garantia de um fabricante de maquinário industrial dispõe: 'O prazo total de garantia é de 24 meses, contados a partir da data de emissão da nota fiscal. Contudo, haverá perda integral do direito de garantia se a instalação não for realizada por técnico credenciado ou se o equipamento operar em tensão superior a 220V. Caso o equipamento apresente defeito vindo de fábrica no primeiro mês de uso, a substituição da peça defeituosa será isenta de taxa de visita técnica.' Uma fábrica comprou o maquinário em 10 de janeiro de 2023, efetuou a instalação por conta própria (sem técnico credenciado) e acionou a assistência em 20 de janeiro de 2023 devido a um defeito comprovado de fabricação, operando o aparelho em 220V. De acordo com a interpretação estrita do texto técnico do manual, qual é a situação do atendimento solicitado pela empresa?",
    opcoes: [
      "Tem direito à garantia total com troca da peça e isenção da taxa de visita, pois estava no primeiro mês de uso.",
      "Tem direito apenas à substituição da peça defeituosa, devendo pagar a taxa de visita técnica.",
      "Tem direito à garantia porque a operação ocorreu na tensão correta de 220V.",
      "Tem direito à assistência gratuita se comprovar que a instalação autônoma seguiu todas as instruções do manual.",
      "Não tem direito à garantia nem à isenção da taxa de visita, pois a perda de garantia foi integral devido à instalação não credenciada.",
    ],
    correta: 4,
    explicacao:
      "O texto prevê expressamente que a instalação realizada por profissional não credenciado acarreta a 'perda integral do direito de garantia'. Uma vez extinto integralmente o direito de garantia, anulam-se todas as concessões derivadas dela, incluindo a isenção de taxa ou troca gratuita no primeiro mês. O distrator que concede garantia total ignora a cláusula resolutiva de instalação não credenciada. O distrator que concede troca mas cobra taxa confunde perda integral com perda parcial de benefícios. O distrator que fundamenta a garantia na tensão correta analisa isoladamente um requisito e ignora o descumprimento do outro. O distrator da prova de instalação correta cria uma exceção administrativa que não está presente no texto.",
  },
  {
    materia: "portugues-banca",
    tema: "Interpretação de texto técnico",
    dificuldade: "media",
    enunciado:
      "Um edital de licitação pública estabelece a seguinte regra de pontuação: 'Para fins de pontuação técnica, cada atestado de capacidade técnica comprobatório de execução de serviço similar concederá 10 pontos, limitado ao máximo de 50 pontos. Atestados que comprovem serviços executados simultaneamente em contratos distintos no mesmo período temporal terão sua pontuação reduzida em 50%. Atestados com tempo de execução inferior a 6 meses não serão pontuados.' Uma empresa apresentou 6 atestados: 4 atestados de serviços distintos com duração de 12 meses cada sem sobreposição temporal; 1 atestado de serviço com duração de 4 meses; e 1 atestado de 12 meses executado simultaneamente ao período de um dos primeiros quatro atestados. Quantos pontos a empresa obterá na pontuação técnica segundo as regras estritas do edital?",
    opcoes: [
      "60 pontos.",
      "50 pontos.",
      "40 pontos.",
      "35 pontos.",
      "45 pontos.",
    ],
    correta: 4,
    explicacao:
      "Calculando a pontuação atestado por atestado conforme o edital: Os 4 atestados válidos de 12 meses sem sobreposição geram 10 pontos cada (4 x 10 = 40 pontos). O atestado de 4 meses não gera pontos, pois é inferior a 6 meses (0 pontos). O atestado de 12 meses simultâneo sofre redução de 50%, gerando 5 pontos (10 x 50% = 5 pontos). A soma total é 40 + 0 + 5 = 45 pontos, valor que fica abaixo do teto máximo de 50 pontos. O distrator de 60 pontos ignora o descarte do atestado de 4 meses, a redução de simultaneidade e o limite do edital. O distrator de 50 pontos aplica diretamente o teto máximo sem calcular a pontuação real devida. O distrator de 40 pontos descarta erroneamente o atestado simultâneo. O distrator de 35 pontos aplica a redução de 50% em ambos os atestados que compartilham o período simultâneo, o que não é determinado pela regra.",
  },
  {
    materia: "portugues-banca",
    tema: "Interpretação de texto técnico",
    dificuldade: "dificil",
    enunciado:
      "Um protocolo clínico de enfermagem prevê: 'A administração do medicamento X deve ocorrer a cada 8 horas em pacientes adultos com função renal normal (clearance de creatinina superior a 60 mL/min). Caso o clearance esteja entre 30 e 60 mL/min, o intervalo entre as doses deve ser duplicado. Se o clearance for inferior a 30 mL/min, a medicação deve ser suspensa imediatamente e substituída pelo fármaco Y. Em todos os casos em que a temperatura corporal do paciente ultrapassar 38,5 °C, a dose deve ser reduzida à metade, sem alterar o intervalo temporal.' Um paciente adulto apresenta clearance de creatinina de 45 mL/min e temperatura corporal de 39,0 °C às 08h00, momento em que recebeu a primeira dose prescrita de 500 mg do medicamento X. De acordo com a aplicação rigorosa do protocolo técnico, como deve ser programada a próxima dose do medicamento X para este paciente?",
    opcoes: [
      "Próxima dose de 500 mg às 16h00.",
      "Próxima dose de 250 mg às 16h00.",
      "Próxima dose de 500 mg às 00h00 (meia-noite).",
      "Suspensão imediata do medicamento X e substituição pelo fármaco Y.",
      "Próxima dose de 250 mg às 00h00 (meia-noite).",
    ],
    correta: 4,
    explicacao:
      "O clearance do paciente é de 45 mL/min, o que se enquadra na faixa de 30 a 60 mL/min. O protocolo determina que, nessa faixa, o intervalo entre doses deve ser duplicado: de 8 horas para 16 horas. Como a primeira dose foi às 08h00, a próxima será às 00h00 (08h00 + 16h). Além disso, a temperatura do paciente (39,0 °C) ultrapassa 38,5 °C, o que exige a redução da dose pela metade: de 500 mg para 250 mg. O distrator de 500 mg às 16h00 ignora o ajuste de intervalo renal e a redução de dose febril. O distrator de 250 mg às 16h00 aplica a redução de dose pela febre, mas mantém o intervalo normal de 8 horas. O distrator de 500 mg às 00h00 acerta o intervalo duplicado, mas ignora a redução de dose por febre. O distrator de substituição pelo fármaco Y confunde a faixa de 45 mL/min com a faixa inferior a 30 mL/min.",
  },
];
