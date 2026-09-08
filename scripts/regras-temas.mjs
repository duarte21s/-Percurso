/**
 * Regras léxicas para classificar uma questão em um dos 135 tópicos de
 * lib/conteudo/materias.ts.
 *
 * Por que regras e não um modelo: são ~2.750 questões no banco e classificar
 * cada uma com a Claude custaria dinheiro que o projeto não tem. Regra é de
 * graça, roda em segundos e — o mais importante — é auditável: dá para ler o
 * motivo de uma questão ter caído em Cinemática.
 *
 * Como pontua. Cada tema tem sinais `forte` (peso 3) e `fraco` (peso 1). O
 * tema vencedor precisa de PONTOS_MINIMOS e precisa vencer o segundo colocado
 * por VANTAGEM_MINIMA. Empate técnico não classifica — questão sem tema é
 * melhor que questão no tema errado, porque o filtro de conteúdo é uma
 * promessa: quem clica em "Termoquímica" tem que receber termoquímica.
 *
 * O `materia` de cada bloco é o que também preenche `questoes.materia_id` nas
 * questões do ENEM, que entraram sem matéria porque o INEP agrupa por área.
 * O classificador só atribui quando há evidência no enunciado — é essa
 * evidência que o schema não tinha.
 */

export const PESO_FORTE = 3;
export const PESO_FRACO = 1;
export const PONTOS_MINIMOS = 3;
export const VANTAGEM_MINIMA = 2;

/** @type {Record<string, Record<string, {forte: RegExp[], fraco?: RegExp[]}>>} */
export const REGRAS = {
  // ========================================================================
  matematica: {
    "Funções: afim, quadrática e exponencial": {
      forte: [
        /fun[çc][ãa]o (do primeiro grau|do segundo grau|afim|quadr[áa]tica|exponencial|logar[íi]tmica)/i,
        /\bf\s*\(\s*x\s*\)\s*=/,
        /par[áa]bola/i,
        /v[ée]rtice da (par[áa]bola|fun[çc][ãa]o)/i,
        /ra[íi]zes da (equa[çc][ãa]o do segundo grau|fun[çc][ãa]o)/i,
      ],
      fraco: [
        /coeficiente angular/i,
        /crescimento exponencial/i,
        /dom[íi]nio e imagem/i,
        /lei de forma[çc][ãa]o/i,
      ],
    },
    "Logaritmos e suas propriedades": {
      forte: [
        /logaritmo/i,
        /\blog\s*[_(]/i,
        /\bln\s*\(/,
        /propriedades? do logaritmo/i,
      ],
      fraco: [/escala Richter/i, /escala logar[íi]tmica/i, /decibel/i],
    },
    "Progressões aritméticas e geométricas": {
      forte: [
        /progress[ãa]o (aritm[ée]tica|geom[ée]trica)/i,
        /raz[ãa]o da progress[ãa]o/i,
        /termo geral d(a|e) (sequ[êe]ncia|progress[ãa]o)/i,
        /soma dos? (\w+ )?termos/i,
      ],
      fraco: [/sequ[êe]ncia num[ée]rica/i, /primeiro termo/i],
    },
    "Geometria plana: áreas e semelhança": {
      forte: [
        /[áa]rea d(o|a|e um[a]?) (tri[âa]ngulo|quadrado|ret[âa]ngulo|c[íi]rculo|trap[ée]zio|losango|pol[íi]gono)/i,
        /semelhan[çc]a de tri[âa]ngulos/i,
        /teorema de (Pit[áa]goras|Tales)/i,
        /tri[âa]ngulos? semelhantes?/i,
      ],
      fraco: [
        /per[íi]metro/i,
        /hipotenusa/i,
        /cateto/i,
        /pol[íi]gono regular/i,
        /[áa]rea (total )?(da figura|sombreada|hachurada)/i,
      ],
    },
    "Geometria espacial: prismas, cones e esferas": {
      forte: [
        /volume d(o|a|e um[a]?) (cilindro|cone|esfera|prisma|pir[âa]mide|paralelep[íi]pedo|cubo)/i,
        /s[óo]lido geom[ée]trico/i,
        /geometria espacial/i,
        /[áa]rea (total|lateral) d(o|a) (cilindro|cone|prisma|pir[âa]mide)/i,
      ],
      fraco: [/aresta/i, /geratriz/i, /\bem cm3\b|\bcm³\b|\bm³\b/i, /capacidade do recipiente/i],
    },
    "Trigonometria no triângulo e no ciclo": {
      forte: [
        /\b(seno|cosseno|tangente)\b/i,
        /trigonom[ée]tric/i,
        /lei dos (senos|cossenos)/i,
        /ciclo trigonom[ée]trico/i,
        /\bsen\s*\(?\s*\d/i,
      ],
      fraco: [/radiano/i, /[âa]ngulo de \d+ ?°/i],
    },
    "Análise combinatória e probabilidade": {
      forte: [
        /probabilidade/i,
        /an[áa]lise combinat[óo]ria/i,
        /princ[íi]pio (fundamental|multiplicativo) da contagem/i,
        /(arranjos?|combina[çc][õo]es|permuta[çc][õo]es) (simples|com repeti[çc][ãa]o|de)/i,
        /fatorial/i,
      ],
      fraco: [
        /sorteio|sorteada|sorteado/i,
        /ao acaso/i,
        /de quantas maneiras/i,
        /chance de/i,
      ],
    },
    "Estatística: média, mediana e desvio": {
      forte: [
        /m[ée]dia (aritm[ée]tica|ponderada)/i,
        /\bmediana\b/i,
        /desvio[- ]padr[ãa]o/i,
        /\bvari[âa]ncia\b/i,
        /medidas? de (tend[êe]ncia central|dispers[ãa]o)/i,
      ],
      fraco: [/amostra/i, /frequ[êe]ncia (relativa|absoluta)/i, /\bmoda\b/i, /m[ée]dia dos/i],
    },
    "Matrizes, determinantes e sistemas lineares": {
      forte: [
        /\bmatriz(es)?\b/i,
        /determinante d(a|e)/i,
        /sistema (linear|de equa[çc][õo]es)/i,
        /escalonamento/i,
      ],
      fraco: [/inc[óo]gnita/i, /elemento a\d\d/i],
    },
    "Geometria analítica: reta e circunferência": {
      forte: [
        /geometria anal[íi]tica/i,
        /equa[çc][ãa]o d(a|e) (reta|circunfer[êe]ncia)/i,
        /plano cartesiano/i,
        /coeficiente (angular|linear) da reta/i,
      ],
      fraco: [
        /dist[âa]ncia entre (dois )?pontos/i,
        /eixo das (abscissas|ordenadas)/i,
        /ponto m[ée]dio/i,
        /par ordenado/i,
      ],
    },
    "Matemática financeira: juros e descontos": {
      forte: [
        /juros? (simples|compostos?)/i,
        /taxa de juros/i,
        /montante/i,
        /matem[áa]tica financeira/i,
        /capital (inicial|aplicado)/i,
      ],
      fraco: [
        /presta[çc][ãa]o|parcela/i,
        /financiamento|empr[ée]stimo/i,
        /\bà vista\b|\ba prazo\b/i,
        /investimento render/i,
      ],
    },
    "Razão, proporção e regra de três": {
      forte: [
        /regra de tr[êe]s/i,
        /(diretamente|inversamente) proporciona(l|is)/i,
        /raz[ãa]o entre .{0,40} e /i,
        /grandezas proporcionais/i,
      ],
      fraco: [/propor[çc][ãa]o/i, /para cada \d+ /i],
    },
    "Porcentagem e variação percentual": {
      forte: [
        /porcentagem|percentual/i,
        /(aumento|redu[çc][ãa]o|acr[ée]scimo|desconto) de \d+(,\d+)? ?%/i,
        /varia[çc][ãa]o percentual/i,
        /\bpor cento\b/i,
      ],
      fraco: [/\d+(,\d+)? ?%/, /taxa de \d+ ?%/i],
    },
    "Grandezas proporcionais e escalas": {
      forte: [
        /escala d(o|e) (mapa|desenho|planta|maquete)/i,
        /\bescala\b\s*(de\s*)?1\s*[:\/]\s*\d{2,}/i,
        /convers[ãa]o de unidades/i,
      ],
      fraco: [/\bmaquete\b/i, /tamanho real/i, /planta baixa/i],
    },
    "Leitura de gráficos e tabelas": {
      forte: [
        /(o|no) gr[áa]fico (acima|a seguir|abaixo|ao lado|apresenta|mostra|indica)/i,
        /(a|na) tabela (acima|a seguir|abaixo|ao lado|apresenta|mostra|indica)/i,
        /de acordo com (o gr[áa]fico|a tabela)/i,
        /com base (no gr[áa]fico|na tabela)/i,
      ],
      fraco: [
        /gr[áa]fico de (barras|colunas|setores|linhas|pizza)/i,
        /histograma/i,
        /\bIBGE\b/,
      ],
    },
  },

  // ========================================================================
  portugues: {
    "Interpretação e compreensão de texto": {
      forte: [
        /o texto (tem por objetivo|apresenta|defende|prop[õo]e|discute)/i,
        /a ideia (central|principal) do texto/i,
        /infere-se (do|no) texto/i,
        /o autor do texto (defende|argumenta|critica)/i,
      ],
      fraco: [/segundo o texto/i, /de acordo com o texto/i, /no texto,/i],
    },
    "Figuras de linguagem": {
      forte: [
        /figuras? de linguagem/i,
        /\b(met[áa]fora|meton[íi]mia|hip[ée]rbole|eufemismo|ant[íi]tese|prosopopeia|personifica[çc][ãa]o|pleonasmo|catacrese|sinest[ée]sia|parad(oxo|oxal)|alitera[çc][ãa]o|onomatopeia)\b/i,
        /sentido (figurado|conotativo)/i,
      ],
      fraco: [/\bironia\b/i, /linguagem (figurada|po[ée]tica)/i],
    },
    "Sintaxe: período composto": {
      forte: [
        /ora[çc][õa](o|es) (subordinada|coordenada)/i,
        /per[íi]odo composto/i,
        /(sujeito|predicado) (simples|composto|indeterminado|oculto)/i,
        /(objeto|complemento) (direto|indireto|nominal)/i,
        /adjunto (adnominal|adverbial)/i,
      ],
      fraco: [/conjun[çc][ãa]o (subordinativa|coordenativa)/i, /an[áa]lise sint[áa]tica/i],
    },
    "Concordância verbal e nominal": {
      forte: [
        /concord[âa]ncia (verbal|nominal)/i,
        /o verbo concorda/i,
        /flex[ãa]o (verbal|de n[úu]mero e g[êe]nero)/i,
      ],
      fraco: [/plural|singular/i],
    },
    "Regência e crase": {
      forte: [
        /\bcrase\b/i,
        /reg[êe]ncia (verbal|nominal)/i,
        /acento grave/i,
        /uso do sinal indicativo de crase/i,
      ],
      fraco: [/prepos[iı][çc][ãa]o exigida/i],
    },
    "Variação linguística e norma-padrão": {
      forte: [
        /varia[çc][ãa]o lingu[íi]stica/i,
        /norma[ -](padr[ãa]o|culta)/i,
        /preconceito lingu[íi]stico/i,
        /(regionalismo|dialeto|socioleto)/i,
        /(variedade|variante) (lingu[íi]stica|prest[íi]gio)/i,
      ],
      fraco: [/\bg[íi]ria\b/i, /registro (formal|informal|coloquial)/i, /linguagem coloquial/i],
    },
    "Gêneros textuais e tipologia": {
      forte: [
        /g[êe]nero(s)? textual/i,
        /tipologia textual/i,
        /texto (dissertativo|narrativo|descritivo|injuntivo|expositivo|instrucional)/i,
        /(esfera|suporte) de circula[çc][ãa]o/i,
      ],
      fraco: [
        /\b(verbete|edital|resenha|manual|receita|bula|cordel|editorial|cr[ôo]nica)\b/i,
        /fun[çc][ãa]o social do texto/i,
      ],
    },
    "Coesão e coerência": {
      forte: [
        /coes[ãa]o (textual|referencial|sequencial)/i,
        /coer[êe]ncia textual/i,
        /elementos? coesivos?/i,
        /(an[áa]fora|cat[áa]fora) textual/i,
      ],
      fraco: [/retomada d(o|e) (termo|referente)/i, /progress[ãa]o textual/i],
    },
    "Funções da linguagem": {
      forte: [
        /fun[çc][ãa]o (referencial|denotativa|emotiva|expressiva|conativa|apelativa|f[áa]tica|metalingu[íi]stica|po[ée]tica)/i,
        /fun[çc][õo]es da linguagem/i,
        /metalinguagem/i,
      ],
      fraco: [/elementos? da comunica[çc][ãa]o/i, /emissor e receptor/i],
    },
    "Redação dissertativo-argumentativa": {
      forte: [
        /disserta[çc][ãa]o[ -]argumentativa/i,
        /texto dissertativo[ -]argumentativo/i,
        /tese e argumentos/i,
        /estrat[ée]gia argumentativa/i,
      ],
      fraco: [/argumento de autoridade/i, /par[áa]grafo de conclus[ãa]o/i],
    },
    "Repertório sociocultural e proposta de intervenção": {
      forte: [/proposta de interven[çc][ãa]o/i, /repert[óo]rio sociocultural/i],
      fraco: [/agente.{0,20}a[çc][ãa]o.{0,20}meio/i],
    },
    "Escolas literárias: do Barroco ao Modernismo": {
      forte: [
        /\b(Barroco|Arcadismo|Romantismo|Realismo|Parnasianismo|Simbolismo|Pr[ée]-Modernismo|Naturalismo)\b/,
        /(Machado de Assis|Clarice Lispector|Guimar[ãa]es Rosa|Carlos Drummond|Manuel Bandeira|Greg[óo]rio de Matos|Castro Alves|[ÁA]lvares de Azevedo|Graciliano Ramos|Jos[ée] de Alencar|Cec[íi]lia Meireles|Jo[ãa]o Cabral)/i,
        /escolas? liter[áa]ria/i,
      ],
      fraco: [/movimento liter[áa]rio/i, /\bpoema\b/i, /\bsoneto\b/i],
    },
    "Morfologia: classes de palavras": {
      forte: [
        /classes? (gramatica(l|is)|de palavras)/i,
        /\bmorfologia\b/i,
        /(o|a) (substantivo|adjetivo|adv[ée]rbio|numeral|interjei[çc][ãa]o|prep os i[çc][ãa]o) /i,
      ],
      fraco: [
        /\b(substantivo|adjetivo|adv[ée]rbio|prep osi[çc][ãa]o|conjun[çc][ãa]o|numeral)\b/i,
        /\blocu[çc][ãa]o\b/i,
      ],
    },
    "Pontuação e seus efeitos de sentido": {
      forte: [
        /pontua[çc][ãa]o/i,
        /(uso d(a|as) )?(v[íi]rgulas?|ponto e v[íi]rgula|dois-pontos|retic[êe]ncias|travess[ãa]o|par[êe]nteses)/i,
      ],
      fraco: [/sinais? gr[áa]fico/i, /efeito de sentido produzido pel/i],
    },
    "Intertextualidade e paráfrase": {
      forte: [
        /intertextualidade/i,
        /\bpar[óo]dia\b/i,
        /\bpar[áa]frase\b/i,
        /di[áa]logo entre os (dois )?textos/i,
        /rela[çc][ãa]o entre os textos I e II/i,
      ],
      fraco: [/\bcita[çc][ãa]o\b/i, /refer[êe]ncia a outro texto/i],
    },
  },

  // ========================================================================
  fisica: {
    "Cinemática: MRU e MRUV": {
      forte: [
        /\bMRUV?\b/,
        /movimento (retil[íi]neo )?uniforme(mente variado)?/i,
        /velocidade (m[ée]dia|escalar|inicial|final)/i,
        /acelera[çc][ãa]o (constante|escalar|m[ée]dia)/i,
        /lan[çc]amento (obl[íi]quo|horizontal|vertical)/i,
      ],
      fraco: [/queda livre/i, /\bkm\/h\b|\bm\/s\b/, /dist[âa]ncia percorrida/i, /\btrajet[óo]ria\b/i],
    },
    "Leis de Newton e suas aplicações": {
      forte: [
        /leis? de Newton/i,
        /for[çc]a (resultante|normal|de atrito|peso|centr[íi]peta)/i,
        /coeficiente de atrito/i,
        /princ[íi]pio da in[ée]rcia/i,
        /a[çc][ãa]o e rea[çc][ãa]o/i,
      ],
      fraco: [/plano inclinado/i, /\bnewtons?\b|\bN\b(?=[\s,.])/, /din[âa]mica/i],
    },
    "Trabalho, energia e potência": {
      forte: [
        /energia (cin[ée]tica|potencial (gravitacional|el[áa]stica)|mec[âa]nica)/i,
        /trabalho (realizado|de uma for[çc]a|da for[çc]a)/i,
        /conserva[çc][ãa]o da energia/i,
        /pot[êe]ncia (mec[âa]nica|desenvolvida|[úu]til)/i,
      ],
      fraco: [/\bjoules?\b|\bJ\b(?=[\s,.])/, /\bwatts?\b/i, /rendimento d(o|a)/i, /dissipa[çc][ãa]o/i],
    },
    "Quantidade de movimento e colisões": {
      forte: [
        /quantidade de movimento/i,
        /momento linear/i,
        /colis[ãa](o|oes) (el[áa]stica|inel[áa]stica|frontal|perfeitamente)/i,
        /impulso d(a|e) (for[çc]a|um corpo)/i,
      ],
      fraco: [/choque entre (os|dois)/i],
    },
    "Estática e hidrostática": {
      forte: [
        /\bempuxo\b/i,
        /princ[íi]pio de (Arquimedes|Pascal|Stevin)/i,
        /press[ãa]o (hidrost[áa]tica|atmosf[ée]rica|no fundo)/i,
        /equil[íi]brio (est[áa]tico|de um corpo|do corpo)/i,
        /(torque|momento de uma for[çc]a)/i,
      ],
      fraco: [/densidade do (l[íi]quido|fluido|corpo)/i, /\bflutua\b/i, /alavanca/i, /\bpascal\b|\bPa\b/],
    },
    "Termologia e calorimetria": {
      forte: [
        /calor (espec[íi]fico|latente|sens[íi]vel)/i,
        /calorimetria/i,
        /dilata[çc][ãa]o (t[ée]rmica|linear|superficial|volum[ée]trica)/i,
        /trocas? de calor/i,
        /capacidade t[ée]rmica/i,
      ],
      fraco: [/\bcaloria/i, /condu[çc][ãa]o|convec[çc][ãa]o|irradia[çc][ãa]o/i, /equil[íi]brio t[ée]rmico/i],
    },
    "Termodinâmica e máquinas térmicas": {
      forte: [
        /termodin[âa]mica/i,
        /m[áa]quinas? t[ée]rmicas?/i,
        /ciclo de Carnot/i,
        /(primeira|segunda) lei da termodin[âa]mica/i,
        /\bentropia\b/i,
      ],
      fraco: [/motor (a combust[ãa]o|t[ée]rmico)/i, /trabalho do g[áa]s/i],
    },
    "Óptica geométrica: espelhos e lentes": {
      forte: [
        /espelhos? (planos?|esf[ée]ricos?|c[ôo]ncavos?|convexos?)/i,
        /lentes? (convergentes?|divergentes?|delgadas?)/i,
        /[íi]ndice de refra[çc][ãa]o/i,
        /(refra[çc][ãa]o|reflex[ãa]o) da luz/i,
        /(miopia|hipermetropia|astigmatismo|presbiopia)/i,
      ],
      fraco: [/raios? de luz/i, /imagem (real|virtual|invertida)/i, /dist[âa]ncia focal/i, /\bprisma[ \.,]/i],
    },
    "Ondulatória e acústica": {
      forte: [
        /comprimento de onda/i,
        /frequ[êe]ncia (da onda|sonora)/i,
        /efeito Doppler/i,
        /ondas? (sonoras?|eletromagn[ée]ticas?|mec[âa]nicas?|estacion[áa]ria)/i,
        /(resson[âa]ncia|difra[çc][ãa]o|interfer[êe]ncia) /i,
      ],
      fraco: [/\bhertz\b|\bHz\b/, /dec[íi]b[ée]is|\bdB\b/, /amplitude|per[íi]odo da onda/i],
    },
    "Eletrostática e campo elétrico": {
      forte: [
        /cargas? el[ée]tricas?/i,
        /lei de Coulomb/i,
        /campo el[ée]trico/i,
        /eletriza[çc][ãa]o (por|dos)/i,
        /potencial el[ée]trico/i,
        /(condutor|isolante) eletrizado/i,
      ],
      fraco: [/\bcoulombs?\b|\bµC\b/i, /linhas de for[çc]a/i],
    },
    "Circuitos elétricos e leis de Ohm": {
      forte: [
        /leis? de Ohm/i,
        /resist[êe]ncia el[ée]trica/i,
        /circuitos? (el[ée]tricos?|em s[ée]rie|em paralelo)/i,
        /\bresistor(es)?\b/i,
        /(associa[çc][ãa]o de resistores|corrente el[ée]trica)/i,
      ],
      fraco: [/\bamp[èeé]res?\b|\bmA\b/i, /\bvolts?\b|\bV\b(?=[\s,.])/, /diferen[çc]a de potencial/i],
    },
    "Eletromagnetismo e indução": {
      forte: [
        /campos? magn[ée]ticos?/i,
        /indu[çc][ãa]o eletromagn[ée]tica/i,
        /leis? de (Faraday|Lenz)/i,
        /fluxo magn[ée]tico/i,
        /(transformador|solenoide|b[úu]ssola|[íi]m[ãa])/i,
      ],
      fraco: [/for[çc]a eletromotriz/i, /\btesla\b/i],
    },
    "Física moderna: efeito fotoelétrico": {
      forte: [
        /efeito fotoel[ée]trico/i,
        /f[íi]sica moderna/i,
        /\bf[óo]tons?\b/i,
        /(teoria da )?relatividade/i,
        /(mec[âa]nica|f[íi]sica|salto) qu[âa]ntic/i,
        /(dualidade onda-part[íi]cula|constante de Planck)/i,
      ],
      fraco: [/n[íi]veis? de energia/i, /\bel[ée]tron-volt\b|\beV\b/],
    },
    "Gravitação universal e leis de Kepler": {
      forte: [
        /gravita[çc][ãa]o universal/i,
        /leis? de Kepler/i,
        /[óo]rbita (do|de|circular|el[íi]ptica)/i,
        /sat[ée]lites? (geoestacion[áa]rio|artificial|natural)/i,
        /campo gravitacional/i,
      ],
      fraco: [/acelera[çc][ãa]o da gravidade/i, /\bplaneta\b.{0,30}\bSol\b/i],
    },
    "Energia, matriz elétrica e consumo": {
      forte: [
        /matriz (el[ée]trica|energ[ée]tica)/i,
        /consumo de energia el[ée]trica/i,
        /\bkWh\b/i,
        /usinas? (hidrel[ée]trica|termel[ée]trica|e[óo]lica|nuclear|solar|fotovoltaica)/i,
        /fontes? (renov[áa]ve(l|is)|de energia)/i,
      ],
      fraco: [/conta de (luz|energia)/i, /efici[êe]ncia energ[ée]tica/i, /\bpainel solar\b/i],
    },
  },

  // ========================================================================
  quimica: {
    "Atomística e tabela periódica": {
      forte: [
        /tabela peri[óo]dica/i,
        /n[úu]meros? at[ôo]micos?/i,
        /distribui[çc][ãa]o eletr[ôo]nica/i,
        /(is[óo]topos?|is[óo]baros?|is[óo]tonos?)/i,
        /modelos? at[ôo]micos? (de )?(Dalton|Thomson|Rutherford|Bohr)?/i,
      ],
      fraco: [/camada de val[êe]ncia/i, /(pr[óo]tons?|n[êe]utrons?|el[ée]trons?)/i, /eletronegatividade/i],
    },
    "Ligações químicas e geometria molecular": {
      forte: [
        /liga[çc][õa](o|es) (i[ôo]nica|covalente|met[áa]lica|de hidrog[êe]nio)/i,
        /geometria molecular/i,
        /polaridade (da mol[ée]cula|das liga[çc][õo]es)/i,
        /for[çc]as? intermolecular(es)?/i,
        /(mol[ée]cula (polar|apolar)|dipolo)/i,
      ],
      fraco: [/regra do octeto/i, /\b(linear|angular|tetra[ée]drica|trigonal)\b/i],
    },
    "Funções inorgânicas": {
      forte: [
        /fun[çc][õo]es inorg[âa]nicas/i,
        /(teoria|conceito) de (Arrhenius|Br[øo]nsted|Lewis)/i,
        /hidr[óo]xido de/i,
        /(sal|[óo]xido|[áa]cido|base) inorg[âa]nic/i,
      ],
      fraco: [/\bNaOH\b|\bHCl\b|\bH2SO4\b|\bCaCO3\b/, /neutraliza[çc][ãa]o/i, /\bindicador [áa]cido-base\b/i],
    },
    "Reações químicas e balanceamento": {
      forte: [
        /balanceamento (da|de|das) equa[çc][õa](o|es)/i,
        /rea[çc][õa](o|es) de (s[íi]ntese|an[áa]lise|simples troca|dupla troca|decomposi[çc][ãa]o)/i,
        /equa[çc][ãa]o qu[íi]mica (balanceada|acima|a seguir)/i,
        /coeficientes? estequiom[ée]tricos?/i,
      ],
      fraco: [/(reagentes?|produtos?) da rea[çc][ãa]o/i, /\bcombust[ãa]o completa\b/i],
    },
    "Estequiometria e cálculos": {
      forte: [
        /estequiom[ée]tric/i,
        /massa mola(r|res)/i,
        /n[úu]mero de Avogadro/i,
        /rendimento da rea[çc][ãa]o/i,
        /\bmols?\b|\bmoles\b/i,
        /reagente limitante/i,
      ],
      fraco: [/\bg\/mol\b/i, /massa de \d+ ?g/i],
    },
    "Soluções e concentrações": {
      forte: [
        /concentra[çc][ãa]o (em (quantidade|massa)|molar|comum)/i,
        /solu[çc][õa](o|es) (aquosa|saturada|insaturada|supersaturada)/i,
        /(soluto|solvente)/i,
        /\bmol\/L\b|\bmol\.L\b/i,
        /(dilui[çc][ãa]o|titula[çc][ãa]o)/i,
      ],
      fraco: [/solubilidade/i, /\bg\/L\b/i, /\bppm\b/],
    },
    Termoquímica: {
      forte: [
        /termoqu[íi]mic/i,
        /\bentalpia\b/i,
        /rea[çc][ãa]o (exot[ée]rmica|endot[ée]rmica)/i,
        /(varia[çc][ãa]o de entalpia|[Δ∆]H)/,
        /calor de (combust[ãa]o|forma[çc][ãa]o|neutraliza[çc][ãa]o)/i,
        /lei de Hess/i,
      ],
      fraco: [/energia (liberada|absorvida)/i, /\bkJ\/mol\b/i],
    },
    "Cinética química": {
      forte: [
        /cin[ée]tica qu[íi]mica/i,
        /velocidade (da|de) rea[çc][ãa]o/i,
        /energia de ativa[çc][ãa]o/i,
        /catalisador(es)?/i,
        /complexo ativado/i,
      ],
      fraco: [/fatores? que (influenciam|afetam) a velocidade/i],
    },
    "Equilíbrio químico e pH": {
      forte: [
        /equil[íi]brio qu[íi]mico/i,
        /princ[íi]pio de Le Ch[âa]telier/i,
        /constante de equil[íi]brio|\bKc\b|\bKp\b/,
        /\bpH\b/,
        /(solu[çc][ãa]o|car[áa]ter) (tamp[ãa]o|[áa]cida|b[áa]sica)/i,
      ],
      fraco: [/deslocamento do equil[íi]brio/i, /\bhidr[óo]lise\b/i, /\bpOH\b/],
    },
    "Eletroquímica: pilhas e eletrólise": {
      forte: [
        /eletroqu[íi]mic/i,
        /(pilhas?|c[ée]lulas?) (de|eletroqu[íi]mica|galv[âa]nica|combust[íi]vel)/i,
        /eletr[óo]lise/i,
        /potencial (padr[ãa]o )?de redu[çc][ãa]o/i,
        /(oxirredu[çc][ãa]o|[ôo]xido-redu[çc][ãa]o)/i,
        /\b([âa]nodo|c[áa]todo)\b/i,
      ],
      fraco: [/(oxidante|redutor)/i, /\bcorros[ãa]o\b/i, /nox\b/i],
    },
    "Química orgânica: funções e nomenclatura": {
      forte: [
        /qu[íi]mica org[âa]nica/i,
        /(hidrocarboneto|[áa]lcool|alde[íi]do|cetona|[ée]ster|[ée]ter|amina|amida|[áa]cido carbox[íi]lico|fenol)/i,
        /nomenclatura (oficial|IUPAC)/i,
        /cadeias? carb[ôo]nicas?/i,
        /(alcano|alceno|alcino|aromático)/i,
      ],
      fraco: [/f[óo]rmula estrutural/i, /grupo funcional/i, /\bC\d+H\d+\b/],
    },
    "Isomeria e reações orgânicas": {
      forte: [
        /isomeria (plana|espacial|[óo]ptica|geom[ée]trica|de cadeia|de posi[çc][ãa]o)/i,
        /is[ôo]mer(o|os|ia)/i,
        /rea[çc][ãa]o de (adi[çc][ãa]o|substitui[çc][ãa]o|elimina[çc][ãa]o|esterifica[çc][ãa]o|saponifica[çc][ãa]o|polimeriza[çc][ãa]o)/i,
        /\b(cis|trans)-/i,
        /carbono (quiral|assim[ée]trico)/i,
      ],
      fraco: [/luz polarizada/i, /\bpol[íi]mero\b/i],
    },
    "Química ambiental e sustentabilidade": {
      forte: [
        /chuva [áa]cida/i,
        /efeito estufa/i,
        /camada de oz[ôo]nio/i,
        /(polui[çc][ãa]o|contamina[çc][ãa]o) (do ar|atmosf[ée]rica|da [áa]gua|h[íi]drica|do solo)/i,
        /tratamento de (esgoto|efluentes?|[áa]gua)/i,
        /metais pesados/i,
        /biocombust[íi]ve(l|is)/i,
      ],
      fraco: [/sustentabilidade/i, /reciclagem/i, /\bCO2\b.{0,30}atmosfera/i, /gases? de efeito estufa/i],
    },
    "Gases e leis dos gases ideais": {
      forte: [
        /gases? (ideais?|perfeitos?)/i,
        /equa[çc][ãa]o (de Clapeyron|geral dos gases)/i,
        /transforma[çc][ãa]o (isot[ée]rmica|isob[áa]rica|isovolum[ée]trica|isoc[óo]rica)/i,
        /volume molar/i,
        /\bCNTP\b|condi[çc][õo]es normais de temperatura/i,
      ],
      fraco: [/press[ãa]o (parcial|do g[áa]s)/i, /\batm\b/],
    },
    "Radioatividade e química nuclear": {
      forte: [
        /radioatividade/i,
        /(part[íi]culas?|radia[çc][õa](o|es)) (alfa|beta|gama)/i,
        /meia[- ]vida/i,
        /(fiss[ãa]o|fus[ãa]o) nuclear/i,
        /decaimento radioativo/i,
        /is[óo]topos? radioativos?|radiois[óo]topo/i,
      ],
      fraco: [/\bcarbono-14\b|\bur[âa]nio\b|\bc[ée]sio\b/i, /rejeitos? (nuclear|radioativo)/i],
    },
  },

  // ========================================================================
  biologia: {
    "Citologia: estrutura e organelas": {
      forte: [
        /(membrana plasm[áa]tica|citoplasma|citoesqueleto|organelas?)/i,
        /(mitoc[ôo]ndria|ribossomo|lisossomo|complexo de Golgi|ret[íi]culo endoplasm|per[oó]xissomo|centr[íi]olo)/i,
        /c[ée]lulas? (eucari[óo]ticas?|procari[óo]ticas?|animal|vegetal)/i,
        /(n[úu]cleo celular|carioteca)/i,
      ],
      fraco: [/(osmose|difus[ãa]o|transporte ativo)/i, /parede celular/i, /\bvac[úu]olo\b/i],
    },
    "Metabolismo energético: respiração e fotossíntese": {
      forte: [
        /(respira[çc][ãa]o celular|fotoss[íi]ntese|fermenta[çc][ãa]o)/i,
        /\bATP\b/,
        /ciclo de Krebs/i,
        /cadeia (respirat[óo]ria|transportadora de el[ée]trons)/i,
        /(gliceralde[íi]do|glic[óo]lise)/i,
        /(clorofila|cloroplasto)/i,
      ],
      fraco: [/quebra da glicose/i, /\bNADH\b|\bFADH\b/, /energia para a c[ée]lula/i],
    },
    "Divisão celular: mitose e meiose": {
      forte: [
        /\b(mitose|meiose)\b/i,
        /divis[ãa]o celular/i,
        /(pr[óo]fase|met[áa]fase|an[áa]fase|tel[óo]fase|intérfase)/i,
        /cromossomos? hom[óo]logos?/i,
        /crossing[ -]over|permuta[çc][ãa]o cromoss[ôo]mica/i,
      ],
      fraco: [/\bgametas?\b/i, /(diploide|haploide)/i, /\bcromátide\b/i],
    },
    "Genética mendeliana": {
      forte: [
        /leis? de Mendel|mendelian/i,
        /(homozigot|heterozigot)/i,
        /(gen[óo]tipo|fen[óo]tipo)/i,
        /alelos? (dominantes?|recessivos?)/i,
        /(quadro|tabuleiro) de Punnett/i,
        /cruzamento entre .{0,30}(plantas|indiv[íi]duos|ervilhas)/i,
      ],
      fraco: [/\bprobabilidade de (nascer|ter um filho)\b/i, /gera[çc][ãa]o F\d/i],
    },
    "Biotecnologia e engenharia genética": {
      forte: [
        /(transg[êe]nic|organismos? geneticamente modificados?|\bOGM\b)/i,
        /engenharia gen[ée]tica/i,
        /\bclonagem\b/i,
        /\bCRISPR\b/i,
        /DNA recombinante/i,
        /c[ée]lulas?[ -]tronco/i,
        /(enzimas? de restri[çc][ãa]o|plasm[íi]deo)/i,
      ],
      fraco: [/(terapia g[êe]nica|sequenciamento do genoma)/i, /teste de paternidade/i],
    },
    "Evolução e seleção natural": {
      forte: [
        /(sele[çc][ãa]o natural|evolu[çc][ãa]o (das esp[ée]cies|biol[óo]gica))/i,
        /\bDarwin/i,
        /\bLamarck/i,
        /(especia[çc][ãa]o|ancestral comum|deriva gen[ée]tica)/i,
        /(estruturas? (hom[óo]logas|an[áa]logas)|converg[êe]ncia adaptativa)/i,
      ],
      fraco: [/\bf[óo]ssil|f[óo]sseis\b/i, /adapta[çc][ãa]o ao ambiente/i, /resist[êe]ncia a (antibi[óo]ticos|inseticidas)/i],
    },
    "Ecologia: cadeias e ciclos biogeoquímicos": {
      forte: [
        /cadeias? (alimentar|tr[óo]fica)/i,
        /teias? alimentar/i,
        /n[íi](vel|veis) tr[óo]ficos?/i,
        /ciclos? (do carbono|do nitrog[êe]nio|da [áa]gua|do f[óo]sforo|biogeoqu[íi]mico)/i,
        /(produtores?|consumidores?|decompositores?)\b/i,
        /(pir[âa]mide (ecol[óo]gica|de energia)|fluxo de energia)/i,
      ],
      fraco: [/ecossistema/i, /(popula[çc][ãa]o|comunidade) biol[óo]gica/i, /(predat[óo]rio|mutualismo|comensalismo|parasitismo)/i],
    },
    "Problemas ambientais brasileiros": {
      forte: [
        /desmatamento/i,
        /\bqueimadas?\b/i,
        /(assoreamento|eros[ãa]o do solo|desertifica[çc][ãa]o)/i,
        /(Amaz[ôo]nia|Cerrado|Pantanal|Mata Atl[âa]ntica).{0,60}(desmat|degrada|preserva|destrui)/i,
        /(eutrofiza[çc][ãa]o|mar[ée] vermelha)/i,
      ],
      fraco: [/impactos? ambienta(l|is)/i, /unidade de conserva[çc][ãa]o/i],
    },
    "Fisiologia humana: sistemas": {
      forte: [
        /sistemas? (digest[óo]rio|digestivo|circulat[óo]rio|respirat[óo]rio|nervoso|end[óo]crino|excretor|urin[áa]rio|reprodutor)/i,
        /(horm[ôo]nios?|insulina|adrenalina|tireoide|test osterona|estrog[êe]nio)/i,
        /(neur[ôo]nios?|sinapses?)/i,
        /(homeostase|press[ãa]o arterial)/i,
      ],
      fraco: [/\b(f[íi]gado|rim|rins|pulm[õa](o|es)|est[ôo]mago|intestino|pâncreas)\b/i, /\bdigest[ãa]o\b/i],
    },
    "Imunologia e vacinas": {
      forte: [
        /(vacinas?|soros?) (contra|antiof[íi]dico|imun)/i,
        /sistema imun/i,
        /(anticorpos?|ant[íi]genos?|linf[óo]citos?|mem[óo]ria imunol[óo]gica)/i,
        /imuniza[çc][ãa]o (ativa|passiva)/i,
      ],
      fraco: [/\bvacina\b/i, /\bimunidade\b/i, /rea[çc][ãa]o al[ée]rgica/i],
    },
    "Botânica e reino vegetal": {
      forte: [
        /(angiospermas?|gimnospermas?|bri[óo]fitas?|pterid[óo]fitas?)/i,
        /(xilema|floema)/i,
        /\best[ôo]matos?\b/i,
        /(poliniza[çc][ãa]o|germina[çc][ãa]o|fitorm[ôo]nio|auxina)/i,
        /reino (vegetal|plantae)/i,
      ],
      fraco: [/\b(raiz|caule|folha|flor|fruto|semente)s?\b.{0,30}\bplanta/i, /transpira[çc][ãa]o vegetal/i],
    },
    "Zoologia e classificação": {
      forte: [
        /(artr[óo]podes?|moluscos?|anel[íi]deos?|cnid[áa]rios?|por[íi]feros?|equinodermos?|platelmintos?|nemat[óo]deos?)/i,
        /(vertebrados?|invertebrados?)/i,
        /classifica[çc][ãa]o (biol[óo]gica|dos seres vivos|taxon[ôo]mica)/i,
        /(taxonomia|nomenclatura bin omial|\bfilo\b)/i,
      ],
      fraco: [/\b(anf[íi]bios?|r[ée]pteis?|mam[íi]feros?|aves)\b/i, /reino animal/i],
    },
    "Genética: grupos sanguíneos e heredogramas": {
      forte: [
        /(grupos?|tipos?) sangu[íi]neos?/i,
        /sistema ABO/i,
        /fator Rh/i,
        /heredograma/i,
        /(alelos m[úu]ltiplos|polialelia)/i,
        /(doen[çc]a|heran[çc]a) ligada ao (sexo|cromossomo X)/i,
      ],
      fraco: [/(transfus[ãa]o|doador universal)/i, /(daltonismo|hemofilia)/i, /genealogia da fam[íi]lia/i],
    },
    "Vírus, bactérias e doenças infecciosas": {
      forte: [
        /(v[íi]rus|bact[ée]rias?|protozo[áa]rios?|fungos? patog)/i,
        /(dengue|mal[áa]ria|tuberculose|c[óo]lera|doen[çc]a de Chagas|leishmaniose|zika|chikungunya|covid|HIV|AIDS|hansen[íi]ase|esquistossomose)/i,
        /antibi[óo]tico/i,
        /(vetor|transmiss[ãa]o|profilaxia) da doen[çc]a/i,
        /(bacil o|agente etiol[óo]gico)/i,
      ],
      fraco: [/\binfec[çc][ãa]o\b/i, /(epidemia|pandemia|endemia)/i, /\bhospedeiro\b/i],
    },
    "Biomas brasileiros e biodiversidade": {
      forte: [
        /\bbiomas?\b/i,
        /(Caatinga|Cerrado|Pampa|Pantanal|Mata Atl[âa]ntica|Amaz[ôo]nia|Campos Sulinos)/i,
        /biodiversidade/i,
        /(fitofisionomia|vegeta[çc][ãa]o (nativa|t[íi]pica))/i,
      ],
      fraco: [/(fauna|flora) brasileira/i, /esp[ée]cies? end[êe]mica/i],
    },
  },

  // ========================================================================
  historia: {
    "Brasil Colônia: economia e escravidão": {
      forte: [
        /Brasil Col[ôo]nia|per[íi]odo colonial/i,
        /(engenhos?|senhor de engenho|casa-grande|senzala)/i,
        /escravid[ãa]o (africana|colonial|no Brasil)/i,
        /(capitanias heredit[áa]rias|pau-brasil|bandeirantes|quilombos?|Palmares)/i,
        /tr[áa]fico (negreiro|de escravizados)/i,
        /(economia a[çc]ucareira|ciclo do ouro|minera[çc][ãa]o colonial)/i,
      ],
      fraco: [/\bjesu[íi]tas?\b/i, /Inconfid[êe]ncia Mineira/i, /\bmetr[óo]pole portuguesa\b/i],
    },
    "Independência e Primeiro Reinado": {
      forte: [
        /independ[êe]ncia do Brasil/i,
        /Primeiro Reinado/i,
        /(D\.|Dom) Pedro I\b/i,
        /Constitui[çc][ãa]o de 1824/i,
        /Confedera[çc][ãa]o do Equador/i,
        /(Grito do Ipiranga|Dia do Fico)/i,
      ],
      fraco: [/\b1822\b/, /Poder Moderador/i],
    },
    "Segundo Reinado e abolição": {
      forte: [
        /Segundo Reinado/i,
        /(D\.|Dom) Pedro II\b/i,
        /(Lei [ÁA]urea|Lei do Ventre Livre|Lei dos Sexagen[áa]rios|Lei Eus[ée]bio de Queir[óo]s)/i,
        /aboli[çc][ãa]o (da escravatura|da escravid[ãa]o)/i,
        /Guerra do Paraguai/i,
        /(abolicionis|movimento abolicionista)/i,
      ],
      fraco: [/\b1888\b/, /economia cafeeira/i, /imigra[çc][ãa]o (europeia|italiana)/i],
    },
    "República Velha e coronelismo": {
      forte: [
        /Rep[úu]blica Velha|Primeira Rep[úu]blica/i,
        /(coronelismo|voto de cabresto|pol[íi]tica dos governadores|caf[ée] com leite)/i,
        /Rep[úu]blica (Oligárquica|da Espada)/i,
        /(Canudos|Contestado|Revolta da Vacina|Revolta da Chibata|tenentismo|Coluna Prestes)/i,
      ],
      fraco: [/\bAntônio Conselheiro\b/i, /proclama[çc][ãa]o da Rep[úu]blica/i],
    },
    "Era Vargas": {
      forte: [
        /Era Vargas/i,
        /Get[úu]lio Vargas/i,
        /Estado Novo/i,
        /(CLT|Consolida[çc][ãa]o das Leis do Trabalho)/i,
        /Revolu[çc][ãa]o de 1930/i,
        /(queremismo|trabalhismo varguista|DIP)/i,
      ],
      fraco: [/\b1937\b|\b1945\b/, /populis mo/i],
    },
    "Ditadura Militar no Brasil": {
      forte: [
        /ditadura (militar|civil-militar)/i,
        /(AI-5|Ato Institucional)/i,
        /golpe de (19)?64/i,
        /(milagre econ[ôo]mico|anos de chumbo)/i,
        /(Castello Branco|M[ée]dici|Geisel|Figueiredo|Costa e Silva)/i,
        /(censura|tortura) (pol[íi]tica|durante o regime)/i,
      ],
      fraco: [/regime militar/i, /\bDOI-CODI\b/i, /Lei de Anistia/i],
    },
    "Redemocratização e Nova República": {
      forte: [
        /redemocratiza[çc][ãa]o/i,
        /Nova Rep[úu]blica/i,
        /Constitui[çc][ãa]o (de 1988|Cidad[ãa])/i,
        /(Plano Real|Plano Cruzado|Plano Collor)/i,
        /(Sarney|Collor|Itamar Franco|Fernando Henrique)/i,
        /impeachment/i,
      ],
      fraco: [/\bhiperinfla[çc][ãa]o\b/i, /Assembleia Constituinte/i],
    },
    "Revolução Industrial": {
      forte: [
        /Revolu[çc][ãa]o Industrial/i,
        /(m[áa]quina a vapor|tear mec[âa]nico)/i,
        /(ludismo|cartismo)/i,
        /(fordismo|taylorismo|toyotismo)/i,
        /(Segunda|Terceira) Revolu[çc][ãa]o Industrial/i,
      ],
      fraco: [/(oper[áa]rios? fabris|trabalho nas f[áa]bricas)/i, /\bmanufatura\b/i],
    },
    "Primeira e Segunda Guerra Mundial": {
      forte: [
        /(Primeira|Segunda) Guerra Mundial/i,
        /(nazismo|fascismo|Hitler|Mussolini|Terceiro Reich)/i,
        /Holocausto|Shoah/i,
        /(Tratado de Versalhes|Liga das Na[çc][õo]es)/i,
        /(Pearl Harbor|Hiroshima|Nagasaki|Dia D)/i,
      ],
      fraco: [/\b1914\b|\b1939\b|\b1945\b/, /(trincheiras?|blitzkrieg)/i, /For[çc]a Expedicion[áa]ria/i],
    },
    "Guerra Fria e bipolaridade": {
      forte: [
        /Guerra Fria/i,
        /(URSS|Uni[ãa]o Sovi[ée]tica)/i,
        /Muro de Berlim/i,
        /(OTAN|Pacto de Vars[óo]via)/i,
        /corrida (armamentista|espacial|nuclear)/i,
        /(macarthismo|cortina de ferro|Plano Marshall)/i,
      ],
      fraco: [/(bipolaridade|mundo bipolar)/i, /Crise dos M[íi]sseis/i, /Guerra do (Vietn[ãa]|Coreia)/i],
    },
    "Revoluções: Francesa e Russa": {
      forte: [
        /Revolu[çc][ãa]o (Francesa|Russa)/i,
        /(Bastilha|jacobin|girondin|Robespierre|Terror)/i,
        /(bolchevique|Lenin|Trotsky|czar|Romanov)/i,
        /Declara[çc][ãa]o dos Direitos do Homem e do Cidad[ãa]o/i,
        /(Iluminismo|iluminista)/i,
      ],
      fraco: [/\b1789\b|\b1917\b/, /(liberdade, igualdade)/i, /Antigo Regime/i],
    },
    "África e América pré-colonial": {
      forte: [
        /(pr[ée]-colombian|pr[ée]-colonial)/i,
        /(astecas?|maias?|incas?)/i,
        /(Mali|Songhai|Gana|Reino do Congo|Axum|Zimb[áa]bue)/i,
        /povos origin[áa]rios/i,
        /(civiliza[çc][õo]es (africanas|americanas))/i,
      ],
      fraco: [/\bTenochtitl[áa]n\b|\bMachu Picchu\b/i, /popula[çc][õo]es ind[íi]genas antes/i],
    },
    "Idade Média e feudalismo": {
      forte: [
        /Idade M[ée]dia|medieval/i,
        /feudalismo|feudal/i,
        /(servos? da gleba|suserano|vassalo|feudo)/i,
        /(Cruzadas|Inquisi[çc][ãa]o|Imp[ée]rio Bizantino)/i,
        /Igreja (Cat[óo]lica )?(medieval|na Idade M[ée]dia)/i,
      ],
      fraco: [/\bcl[ée]ro\b|\bnobreza\b/i, /Peste Negra/i],
    },
    "Movimentos sociais e Diretas Já": {
      forte: [
        /Diretas J[áa]/i,
        /(MST|Movimento dos Trabalhadores (Rurais )?Sem Terra)/i,
        /(greves? do ABC|sindicalismo|novo sindicalismo)/i,
        /movimentos? sociais?/i,
      ],
      fraco: [/reforma agr[áa]ria/i, /\bpasseata\b|\bmanifesta[çc][ãa]o popular\b/i],
    },
    "Geografia: urbanização e êxodo rural": {
      forte: [
        /urbaniza[çc][ãa]o/i,
        /[êe]xodo rural/i,
        /(metropoliza[çc][ãa]o|conurba[çc][ãa]o|regi[ãa]o metropolitana)/i,
        /migra[çc][ãa]o (interna|campo-cidade|rural-urbana)/i,
        /(favelizac[ãa]o|periferiza[çc][ãa]o|segrega[çc][ãa]o (socioespacial|urbana))/i,
      ],
      fraco: [/popula[çc][ãa]o urbana/i, /crescimento das cidades/i, /\bmegacidade\b/i],
    },
  },

  // ========================================================================
  filosofia: {
    "Filosofia antiga: Sócrates, Platão e Aristóteles": {
      forte: [
        /(S[óo]crates|Plat[ãa]o|Arist[óo]teles)/i,
        /filosofia (antiga|grega)/i,
        /(maiêutica|mito da caverna|eudaimonia|mundo das ideias)/i,
        /(pr[ée]-socr[áa]ticos?|sofistas?)/i,
      ],
      fraco: [/\bvirtude\b.{0,40}\bgrego/i, /\bp[óo]lis\b/i],
    },
    "Ética e moral": {
      forte: [
        /[ée]tica e moral/i,
        /(ju[íi]zo|dilema|valor) moral/i,
        /(virtude|conduta) [ée]tica/i,
        /(consequencialismo|utilitarismo|deontologia)/i,
      ],
      fraco: [/\bmoralidade\b/i, /o que [ée] (certo|justo)/i],
    },
    "Contratualismo: Hobbes, Locke e Rousseau": {
      forte: [
        /contrato social/i,
        /contratualis/i,
        /(Hobbes|Locke|Rousseau)/i,
        /estado de natureza/i,
        /\bLeviat[ãa]\b/i,
      ],
      fraco: [/soberania|vontade geral/i],
    },
    "Filosofia política e democracia": {
      forte: [
        /filosofia pol[íi]tica/i,
        /democracia (representativa|direta|liberal|participativa)/i,
        /(esfera p[úu]blica|soberania popular)/i,
        /(Hannah Arendt|Bobbio|Habermas|Rawls)/i,
        /(totalitarismo|autoritarismo)/i,
      ],
      fraco: [/(participa[çc][ãa]o pol[íi]tica|representa[çc][ãa]o pol[íi]tica)/i],
    },
    "Teoria do conhecimento: racionalismo x empirismo": {
      forte: [
        /teoria do conhecimento/i,
        /(racionalismo|empirismo)/i,
        /(Descartes|David Hume|Francis Bacon)/i,
        /(ceticismo|epistemolog)/i,
        /(cogito|d[úu]vida met[óo]dica|tabula rasa)/i,
      ],
      fraco: [/origem do conhecimento/i, /m[ée]todo cient[íi]fico.{0,40}filos/i],
    },
    "Kant e o imperativo categórico": {
      forte: [/\bKant\b/i, /imperativo categ[óo]rico/i, /(autonomia da vontade|deontolog)/i],
      fraco: [/\bkantiano\b/i, /\besclarecimento\b.{0,30}menoridade/i],
    },
    "Escola de Frankfurt e indústria cultural": {
      forte: [
        /Escola de Frankfurt/i,
        /ind[úu]stria cultural/i,
        /(Adorno|Horkheimer|Marcuse|Walter Benjamin)/i,
        /teoria cr[íi]tica/i,
      ],
      fraco: [/cultura de massa/i, /raz[ãa]o instrumental/i],
    },
    "Existencialismo: Sartre e Beauvoir": {
      forte: [
        /existencialis/i,
        /(Sartre|Simone de Beauvoir|Kierkegaard|Albert Camus)/i,
        /exist[êe]ncia precede a ess[êe]ncia/i,
        /(m[áa]-f[ée] sartriana|condenado a ser livre)/i,
      ],
      fraco: [/liberdade e responsabilidade/i, /\bangústia\b.{0,30}liberdade/i],
    },
    "Nietzsche e a crítica à moral": {
      forte: [
        /Nietzsche/i,
        /(vontade de pot[êe]ncia|al[ée]m-do-homem|super-homem|niilismo|eterno retorno)/i,
        /moral dos (senhores|escravos)/i,
        /(apol[íi]neo|dionis[íi]aco)/i,
      ],
      fraco: [/genealogia da moral/i],
    },
    "Sociologia clássica: Marx, Durkheim e Weber": {
      forte: [
        /(Karl Marx|[ÉE]mile Durkheim|Max Weber)/i,
        /sociologia cl[áa]ssica/i,
        /(fato social|a[çc][ãa]o social|solidariedade (mec[âa]nica|org[âa]nica))/i,
        /(tipo ideal|desencantamento do mundo|burocracia weberiana)/i,
        /(anomia|consci[êe]ncia coletiva)/i,
      ],
      fraco: [/\bsociologia\b/i, /\bmarxista\b/i],
    },
    "Cidadania e direitos humanos": {
      forte: [
        /direitos humanos/i,
        /\bcidadania\b/i,
        /(Declara[çc][ãa]o Universal dos Direitos|ECA|Estatuto da Crian[çc]a)/i,
        /direitos (civis|pol[íi]ticos|sociais|fundamentais)/i,
      ],
      fraco: [/\bdignidade humana\b/i, /(exclus[ãa]o|inclus[ãa]o) social/i],
    },
    "Bioética e dilemas contemporâneos": {
      forte: [
        /bio[ée]tica/i,
        /(eutan[áa]sia|aborto|eugenia|clonagem humana|barriga de aluguel)/i,
        /dilemas? (bio[ée]ticos?|[ée]ticos?)/i,
      ],
      fraco: [/avan[çc]os? da (ci[êe]ncia|medicina).{0,40}[ée]tic/i],
    },
    "Estado, poder e Maquiavel": {
      forte: [
        /Maquiavel/i,
        /\bO Pr[íi]ncipe\b/,
        /raz[ãa]o de Estado/i,
        /(os fins justificam os meios|virtù|fortuna)/i,
      ],
      fraco: [/(poder|autoridade) pol[íi]tic/i, /forma[çc][ãa]o do Estado moderno/i],
    },
    "Trabalho, alienação e capitalismo": {
      forte: [
        /aliena[çc][ãa]o (do trabalho|do trabalhador)/i,
        /(mais-valia|for[çc]a de trabalho)/i,
        /(reifica[çc][ãa]o|fetichismo da mercadoria)/i,
        /(modo de produ[çc][ãa]o|luta de classes)/i,
      ],
      fraco: [/\bcapitalismo\b/i, /(explora[çc][ãa]o|precariza[çc][ãa]o) do trabalho/i],
    },
    "Movimentos sociais e identidade": {
      forte: [
        /movimentos? identit[áa]ri/i,
        /(identidade (cultural|de g[êe]nero)|multiculturalismo)/i,
        /(feminismo|movimento negro|movimento LGBT)/i,
        /(interseccionalidade|a[çc][õo]es afirmativas)/i,
      ],
      fraco: [/\bminorias\b/i, /reconhecimento social/i],
    },
  },

  // ========================================================================
  // Os enunciados de Inglês do ENEM vêm em inglês; os comandos, em português.
  ingles: {
    "Reading strategies: skimming e scanning": {
      forte: [/\bskimming\b|\bscanning\b/i, /reading strateg/i],
      fraco: [/general idea of the text/i],
    },
    "Cognatos e falsos cognatos": {
      forte: [/false (cognates?|friends?)/i, /(falsos? )?cognatos?/i],
      fraco: [/similar to Portuguese/i],
    },
    "Verb tenses: present, past e future": {
      forte: [
        /\b(present|past|future) (simple|perfect|continuous|progressive)\b/i,
        /verb tenses?/i,
        /(simple past|past participle)/i,
      ],
      fraco: [/\bused to\b/i, /\bgoing to\b/i],
    },
    "Modal verbs": {
      forte: [
        /modal verbs?/i,
        /\b(should|must|might|could|would)\b.{0,40}(express|indicat|conve|sugges)/i,
      ],
      fraco: [/\b(can|may|ought to)\b.{0,30}(possibilit|obligation|advice)/i],
    },
    Conditionals: {
      forte: [
        /conditional (sentences?|clauses?)/i,
        /\bif[- ]clause\b/i,
        /(first|second|third|zero) conditional/i,
      ],
      fraco: [/\bunless\b/i, /hypothetical situation/i],
    },
    "Passive voice": {
      forte: [/passive voice/i, /voz passiva/i, /\bactive voice\b/i],
      fraco: [/\bby the\b.{0,20}(was|were|been)\b/i],
    },
    "Connectives e linking words": {
      forte: [
        /(connectives?|linking words?|discourse markers?|cohesive devices?)/i,
        /\b(however|therefore|although|nevertheless|moreover|besides)\b.{0,50}(indicat|express|introduc|establish)/i,
      ],
      fraco: [/relationship between the (ideas|sentences)/i],
    },
    "Phrasal verbs mais cobrados": {
      forte: [/phrasal verbs?/i],
      fraco: [/\b(give up|find out|look for|come up with|take off|put off)\b/i],
    },
    "Vocabulário por campo semântico": {
      forte: [
        /(the (word|term|expression)) ["“'].{1,40}["”'] (means|refers to|can be replaced|is used)/i,
        /\bsyn[oô]nym\b|\bantonym\b/i,
        /campo sem[âa]ntico/i,
      ],
      fraco: [/vocabulary related to/i, /o (termo|vocábulo)/i],
    },
    "Interpretação de charges e tirinhas": {
      forte: [
        /(cartoons?|comic strips?|the strip)\b/i,
        /\b(charge|tirinha|quadrinhos?)\b/i,
      ],
      fraco: [/humor (of|in) the/i, /\bcaption\b/i],
    },
    "Textos jornalísticos e científicos": {
      forte: [
        /according to the (article|report|research|study)/i,
        /(newspaper|magazine|scientific) (article|report|text)/i,
        /(researchers?|the study) (found|shows?|suggests?)/i,
      ],
      fraco: [/\bheadline\b/i, /published (in|by)/i],
    },
    "Reported speech": {
      forte: [/reported speech/i, /(direct|indirect) speech/i],
      fraco: [/\bsaid that\b|\btold (him|her|them)\b/i],
    },
    "Word formation: prefixos e sufixos": {
      forte: [/\b(prefix|suffix)e?s?\b/i, /word formation/i, /(prefixos?|sufixos?)/i],
      fraco: [/\b(un|dis|re|in)-\b/i, /derived from the word/i],
    },
    "Inferência e ideia principal": {
      forte: [
        /(it can be inferred|infer(red)? from the text|we can infer)/i,
        /the main (idea|topic|point|purpose) of the text/i,
      ],
      fraco: [/the text suggests/i, /the author('s)? (intention|purpose)/i],
    },
    "Pronomes e referência textual": {
      forte: [
        /the (pronoun|word) ["“'].{1,20}["”'] refers to/i,
        /(personal|relative|possessive|demonstrative) pronouns?/i,
      ],
      fraco: [/\brefers? (back )?to\b/i, /\bantecedent\b/i],
    },
  },

  // ========================================================================
  artes: {
    "Renascimento e Barroco": {
      forte: [
        /Renascimento|renascentista/i,
        /(Leonardo da Vinci|Michelangelo|Rafael Sanzio|Caravaggio|Botticelli)/i,
        /perspectiva (renascentista|linear)/i,
        /(claro-escuro|sfumato|tenebrismo)/i,
      ],
      fraco: [/\bBarroco\b.{0,40}(europeu|italiano|igreja)/i, /\bmecenato\b/i],
    },
    "Barroco e Aleijadinho no Brasil": {
      forte: [
        /Aleijadinho|Ant[ôo]nio Francisco Lisboa/i,
        /(barroco mineiro|Ouro Preto|Congonhas|Profetas)/i,
        /Mestre Ata[íi]de/i,
      ],
      fraco: [/barroco (brasileiro|colonial)/i, /igrejas? de Minas/i],
    },
    "Impressionismo e pós-impressionismo": {
      forte: [
        /impressionis/i,
        /(Monet|Renoir|Degas|Van Gogh|C[ée]zanne|Gauguin|Toulouse-Lautrec)/i,
        /p[óo]s-impressionis/i,
      ],
      fraco: [/pintura ao ar livre/i, /\bpincelada\b/i],
    },
    "Vanguardas europeias": {
      forte: [
        /vanguardas? (europeias?|art[íi]sticas?|hist[óo]ricas?)/i,
        /(cubismo|surrealismo|expressionismo|futurismo|dada[íi]smo|abstracionismo|fauvismo)/i,
        /(Picasso|Salvador Dal[íi]|Kandinsky|Munch|Matisse|Duchamp)/i,
      ],
      fraco: [/ruptura com a (tradi[çc][ãa]o|representa[çc][ãa]o)/i, /arte abstrata/i],
    },
    "Semana de Arte Moderna de 1922": {
      forte: [
        /Semana de Arte Moderna/i,
        /Manifesto (Antropof[áa]gico|Pau-Brasil)/i,
        /(Oswald de Andrade|M[áa]rio de Andrade)/i,
        /\b1922\b.{0,50}(arte|modernis|semana)/i,
      ],
      fraco: [/Theatro Municipal.{0,30}(1922|moderna)/i, /antropofagia cultural/i],
    },
    "Modernismo brasileiro: Tarsila e Portinari": {
      forte: [
        /(Tarsila do Amaral|Candido Portinari|C[âa]ndido Portinari|Anita Malfatti|Di Cavalcanti|Abaporu|Oper[áa]rios)/i,
        /modernismo brasileiro/i,
      ],
      fraco: [/pintura (brasileira )?moderna/i, /identidade nacional na arte/i],
    },
    "Arte contemporânea e instalação": {
      forte: [
        /arte contempor[âa]nea/i,
        /(instala[çc][ãa]o art[íi]stica|performance art|happening|land art|arte conceitual)/i,
        /(H[ée]lio Oiticica|Lygia Clark|Cildo Meireles|Adriana Varejão|Beatriz Milhazes)/i,
      ],
      fraco: [/(interatividade|participa[çc][ãa]o do p[úu]blico) na (obra|arte)/i, /\bready-made\b/i],
    },
    "Arte indígena e afro-brasileira": {
      forte: [
        /arte (ind[íi]gena|afro-brasileira|africana)/i,
        /(grafismo ind[íi]gena|cer[âa]mica marajoara|arte marajoara)/i,
        /(capoeira|maracatu|congada|jongo|afox[ée])/i,
      ],
      fraco: [/(cultura|matriz) afro-brasileira/i, /(pintura corporal|arte plumária)/i],
    },
    "Fotografia e cinema como linguagem": {
      forte: [
        /(fotografia|cinema) como linguagem/i,
        /(Sebasti[ãa]o Salgado|Glauber Rocha|Cinema Novo|Pierre Verger)/i,
        /(plano|enquadramento|montagem|[âa]ngulo) (cinematogr[áa]fic|fotogr[áa]fic|f[íi]lmic)/i,
      ],
      fraco: [/\bdocument[áa]rio\b/i, /linguagem audiovisual/i],
    },
    "Música popular brasileira": {
      forte: [
        /\bMPB\b/,
        /m[úu]sica popular brasileira/i,
        /(Tropic[áa]lia|Bossa Nova|Villa-Lobos|Chico Buarque|Caetano Veloso|Gilberto Gil|Pixinguinha)/i,
        /(samba|choro|frevo|maracatu|baião|forró)\b/i,
      ],
      fraco: [/can[çc][ãa]o (brasileira|popular)/i, /\bletra da m[úu]sica\b/i],
    },
    "Teatro: do grego ao contemporâneo": {
      forte: [
        /teatro (grego|de arena|[ée]pico|contempor[âa]neo|do oprimido)/i,
        /(trag[ée]dia|com[ée]dia) (grega|cl[áa]ssica)/i,
        /(Bertolt Brecht|Nelson Rodrigues|Augusto Boal|Shakespeare)/i,
        /(dramaturgia|encena[çc][ãa]o teatral)/i,
      ],
      fraco: [/\bcatarse\b/i, /\bespet[áa]culo teatral\b/i],
    },
    "Patrimônio cultural e tombamento": {
      forte: [
        /patrim[ôo]nio (cultural|hist[óo]rico|imaterial|material)/i,
        /tombamento|tombado/i,
        /\bIPHAN\b/,
        /UNESCO.{0,40}patrim[ôo]nio/i,
      ],
      fraco: [/(preserva[çc][ãa]o|restaura[çc][ãa]o) (do|de) (acervo|monumento|centro hist)/i, /bens? culturais?/i],
    },
    "Arte grega e romana": {
      forte: [
        /arte (grega|romana|cl[áa]ssica da antiguidade)/i,
        /ordens? (d[óo]rica|j[ôo]nica|cor[íi]ntia)/i,
        /(Partenon|Coliseu|Panteão)/i,
        /escultura (grega|romana)/i,
      ],
      fraco: [/(templo|arquitetura) (grego|greg a|romano)/i, /\bmosaico romano\b/i],
    },
    "Dança e corpo como expressão": {
      forte: [
        /(dan[çc]a|bal[ée]) (cl[áa]ssic|contempor[âa]ne|moderna|popular)/i,
        /corpo como (express[ãa]o|linguagem|suporte)/i,
        /(coreografia|core[óo]grafo|Pina Bausch|Isadora Duncan)/i,
      ],
      fraco: [/movimento corporal (na|como) arte/i, /\bdan[çc]arinos?\b/i],
    },
    "Design, publicidade e cultura visual": {
      forte: [
        /(design gr[áa]fico|design de produto|design industrial)/i,
        /(publicidade|propaganda|an[úu]ncio publicit[áa]rio).{0,60}(visual|campanha|p[úu]blico-alvo|persuas)/i,
        /cultura visual/i,
        /identidade visual|\blogotipo\b/i,
      ],
      fraco: [/\bcartaz\b/i, /apelo (visual|persuasivo)/i, /\btipografia\b/i],
    },
  },
};

export const MATERIAS_DA_AREA = {
  matematica: ["matematica"],
  "ciencias-natureza": ["fisica", "quimica", "biologia"],
  "ciencias-humanas": ["historia", "filosofia"],
  linguagens: ["portugues", "ingles", "artes"],
};

/**
 * Classifica um enunciado. Devolve `{ materia, tema, pontos }` ou null.
 *
 * `areaPermitida` restringe as matérias candidatas à área da questão do ENEM —
 * sem isso, "energia" puxaria Física numa questão de Biologia sobre cadeia
 * alimentar. Passe null para o banco autoral, que não tem área.
 *
 * `materiaFixa` é o caminho das 27 autorais, que já sabem a matéria: aí só
 * resta escolher entre os 15 temas dela, e a disputa fica muito mais justa.
 */
function candidatasDe(areaPermitida, materiaFixa) {
  if (materiaFixa) return [materiaFixa];
  if (areaPermitida) return MATERIAS_DA_AREA[areaPermitida] ?? Object.keys(REGRAS);
  return Object.keys(REGRAS);
}

/** Pontuação de cada tema candidato, do mais provável para o menos. */
function placarDeTemas(texto, candidatas) {
  const placar = [];
  for (const materia of candidatas) {
    const temas = REGRAS[materia];
    if (!temas) continue;
    for (const [tema, sinais] of Object.entries(temas)) {
      let pontos = 0;
      for (const re of sinais.forte) if (re.test(texto)) pontos += PESO_FORTE;
      for (const re of sinais.fraco ?? []) if (re.test(texto)) pontos += PESO_FRACO;
      if (pontos > 0) placar.push({ materia, tema, pontos });
    }
  }
  return placar.sort((a, b) => b.pontos - a.pontos);
}

/**
 * Só a matéria, sem o tema — e é uma pergunta bem mais fácil de responder.
 *
 * Uma questão que empata entre "Cinemática" e "Leis de Newton" é ambígua no
 * assunto e não tem ambiguidade nenhuma na matéria: as duas são Física. A
 * regra estrita de tema descartava essas questões inteiras, e era isso que
 * mantinha Física em 111 enquanto 351 questões de Ciências da Natureza
 * ficavam sem matéria nenhuma.
 *
 * Aqui os pontos de todos os temas de uma matéria são somados, e a matéria
 * vence se liderar a segunda por VANTAGEM_MINIMA. Questão que fala de energia
 * em cadeia alimentar continua sem decidir entre Física e Biologia — e
 * continua de fora, como deve ser.
 */
export function classificaMateria(texto, areaPermitida = null) {
  const candidatas = candidatasDe(areaPermitida, null);
  const porMateria = new Map();

  for (const { materia, pontos } of placarDeTemas(texto, candidatas)) {
    porMateria.set(materia, (porMateria.get(materia) ?? 0) + pontos);
  }

  const ranque = [...porMateria.entries()].sort((a, b) => b[1] - a[1]);
  if (ranque.length === 0) return null;

  const [primeira, segunda] = ranque;
  if (primeira[1] < PONTOS_MINIMOS) return null;
  if (segunda && primeira[1] - segunda[1] < VANTAGEM_MINIMA) return null;

  return { materia: primeira[0], tema: null, pontos: primeira[1] };
}

export function classifica(texto, areaPermitida = null, materiaFixa = null) {
  const placar = placarDeTemas(texto, candidatasDe(areaPermitida, materiaFixa));

  if (placar.length === 0) return null;

  const [primeiro, segundo] = placar;

  if (primeiro.pontos < PONTOS_MINIMOS) return null;
  // Empate técnico não classifica: mandar uma questão de Termoquímica para
  // Cinética é pior do que deixá-la sem tema, porque quebra a promessa do
  // filtro. O que fica de fora continua valendo pela área, como hoje.
  if (segundo && primeiro.pontos - segundo.pontos < VANTAGEM_MINIMA) return null;

  return primeiro;
}

/**
 * Segunda camada, para o que o vocabulário não alcança.
 *
 * Metade das questões do ENEM não tem termo técnico nenhum: são textos de
 * jornal, tirinhas e diálogos, e o que se cobra é justamente ler. Regra de
 * palavra-chave não pega isso — mas a estrutura da prova pega.
 *
 * As três inferências abaixo valem por como o exame é montado, não por
 * chute:
 *
 * 1. A área de Matemática do ENEM só tem matemática. Área → matéria é certo,
 *    mesmo quando o tema não é: 45 questões por prova, todas dela.
 * 2. Questão de Linguagens em português sem termo de gramática é questão de
 *    interpretação. É o que o próprio INEP diz cobrar na maior parte da área.
 * 3. Questão com `idioma = 'ingles'` é de Inglês por definição — a coluna vem
 *    da importação, não de adivinhação. Sem outro sinal, o que se cobra é
 *    entender a ideia geral do texto.
 *
 * Espanhol fica de fora: não existe matéria de Espanhol entre as nove, e
 * inventar uma aqui seria pior que deixar sem.
 */
export function classificaPorEstrutura(area, idioma) {
  if (idioma === "ingles") {
    return { materia: "ingles", tema: "Inferência e ideia principal", estrutural: true };
  }
  if (area === "matematica") {
    // Sem tema de propósito: a matéria é certa, o assunto não.
    return { materia: "matematica", tema: null, estrutural: true };
  }
  if (area === "linguagens" && !idioma) {
    return {
      materia: "portugues",
      tema: "Interpretação e compreensão de texto",
      estrutural: true,
    };
  }
  return null;
}
