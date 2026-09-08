/* Mola interrompível, no vocabulário do guia de movimento da Apple.
 *
 * Uma transição de duração fixa não consegue responder a uma entrada nova: ela
 * já sabe onde termina e quando. A mola não sabe — ela só persegue um alvo, e
 * por isso trocar o alvo no meio do caminho é uma operação legítima, sem corte
 * e sem salto. É essa propriedade, e não a "elasticidade", que faz dela a
 * ferramenta certa para qualquer coisa que o usuário possa tocar.
 *
 * Os parâmetros não são os da física (massa/rigidez/atrito) e sim os dois que
 * a Apple expõe ao designer:
 *
 *   amortecimento — quanto passa do alvo. 1 = crítico, chega e para. Abaixo
 *                   de 1 ultrapassa e volta. Só desça disso quando o gesto que
 *                   antecedeu carregava momento: quique num painel que apenas
 *                   apareceu parece defeito; quique num cartão que foi
 *                   arremessado parece física.
 *   resposta      — em quanto tempo, em segundos, o valor alcança o alvo. NÃO
 *                   é duração: a mola não tem duração, o tempo de assentar
 *                   emerge dos dois parâmetros juntos.
 */

export interface OpcoesMola {
  valor: number;
  alvo: number;
  /** px/s. Entra como velocidade inicial — é a costura entre gesto e animação. */
  velocidade?: number;
  /** 1 = crítico (padrão). ~0.8 para movimento que veio de um arremesso. */
  amortecimento?: number;
  /** Segundos até alcançar o alvo. 0.3–0.4 na maior parte da interface. */
  resposta?: number;
  aoQuadro: (valor: number, velocidade: number) => void;
  aoParar?: () => void;
}

/* Passo de integração. Dois motivos para ser tão menor que o quadro:
 *
 * 1. Sem teto, uma aba que volta do segundo plano entrega um `dt` de vários
 *    segundos de uma vez e a mola diverge — o integrador dá um passo maior que
 *    a distância inteira.
 * 2. Euler semi-implícito perde energia proporcionalmente ao passo, e essa
 *    perda aparece como amortecimento que ninguém pediu. Medido: a 1/120s a
 *    ultrapassagem de `amortecimento: 0.82` saía 0,91px onde a solução exata
 *    dá 4,44px — 20% do quique. O parâmetro estava mentindo para quem o
 *    ajustava. A 1/2000s sai 4,18px, 94% do correto, ao custo de 34 passos
 *    por quadro de aritmética escalar, que não é custo nenhum.
 */
const PASSO_MAX = 1 / 2000;
const DT_MAX = 1 / 30;

const PARADA_VALOR = 0.05;
const PARADA_VELOCIDADE = 0.05;

export class Mola {
  private valor: number;
  private velocidadeAtual: number;
  private destino: number;
  private amortecimento: number;
  private resposta: number;
  private aoQuadro: OpcoesMola["aoQuadro"];
  private aoParar?: OpcoesMola["aoParar"];
  private quadro = 0;
  private ultimoT = 0;

  constructor(o: OpcoesMola) {
    this.valor = o.valor;
    this.velocidadeAtual = o.velocidade ?? 0;
    this.destino = o.alvo;
    this.amortecimento = o.amortecimento ?? 1;
    this.resposta = o.resposta ?? 0.4;
    this.aoQuadro = o.aoQuadro;
    this.aoParar = o.aoParar;
  }

  /** Valor que está NA TELA agora. É daqui que toda retomada começa. */
  get posicao() {
    return this.valor;
  }

  get velocidade() {
    return this.velocidadeAtual;
  }

  get correndo() {
    return this.quadro !== 0;
  }

  /**
   * Troca o alvo sem tocar em posição nem velocidade.
   *
   * É o coração da interrupção: como a mola continua de onde está e com a
   * velocidade que tem, inverter o movimento no meio não cria a descontinuidade
   * que o guia chama de "parede de tijolos" — aquela sensação de bater em algo
   * quando uma animação é substituída por outra.
   */
  mirar(alvo: number, opcoes?: { amortecimento?: number; resposta?: number }) {
    this.destino = alvo;
    if (opcoes?.amortecimento !== undefined) this.amortecimento = opcoes.amortecimento;
    if (opcoes?.resposta !== undefined) this.resposta = opcoes.resposta;
    this.iniciar();
  }

  /** Assume uma posição e velocidade — usado quando o dedo agarra a folha. */
  fixar(valor: number, velocidade = 0) {
    this.valor = valor;
    this.velocidadeAtual = velocidade;
  }

  parar() {
    if (this.quadro) cancelAnimationFrame(this.quadro);
    this.quadro = 0;
  }

  iniciar() {
    if (this.quadro) return;
    this.ultimoT = performance.now();
    this.quadro = requestAnimationFrame(this.passo);
  }

  private passo = (t: number) => {
    const bruto = Math.min((t - this.ultimoT) / 1000, DT_MAX);
    this.ultimoT = t;

    /* Frequência natural a partir da resposta. A integração é em subpassos
       fixos para o resultado não mudar com a taxa de quadros do monitor —
       a 60Hz e a 144Hz a mola tem de assentar igual. */
    const w = (2 * Math.PI) / this.resposta;
    const k = w * w;
    const c = 2 * this.amortecimento * w;

    let restante = bruto;
    while (restante > 0) {
      const dt = Math.min(restante, PASSO_MAX);
      const a = -k * (this.valor - this.destino) - c * this.velocidadeAtual;
      this.velocidadeAtual += a * dt;
      this.valor += this.velocidadeAtual * dt;
      restante -= dt;
    }

    const parado =
      Math.abs(this.valor - this.destino) < PARADA_VALOR &&
      Math.abs(this.velocidadeAtual) < PARADA_VELOCIDADE;

    if (parado) {
      this.valor = this.destino;
      this.velocidadeAtual = 0;
      this.quadro = 0;
      this.aoQuadro(this.valor, 0);
      this.aoParar?.();
      return;
    }

    this.aoQuadro(this.valor, this.velocidadeAtual);
    this.quadro = requestAnimationFrame(this.passo);
  };
}

/**
 * Onde o movimento PARARIA se fosse desacelerando sozinho — a mesma projeção
 * que a rolagem por inércia usa.
 *
 * Serve para decidir o destino a partir de onde o gesto ia dar, não de onde o
 * dedo soltou. É o que faz um peteleco curto atravessar a tela inteira: entrada
 * pequena, saída grande.
 *
 * A forma é de decaimento exponencial, não o `v²/(2a)` do livro de física —
 * esta é a que a Apple publicou no código de exemplo, e a diferença é visível.
 */
export function projetar(velocidade: number, taxaDesaceleracao = 0.998) {
  return ((velocidade / 1000) * taxaDesaceleracao) / (1 - taxaDesaceleracao);
}

/**
 * Resistência elástica na borda.
 *
 * Parar duro no limite lê como travamento — o usuário não sabe se acabou o
 * conteúdo ou se a interface morreu. Resistir cada vez mais lê como "responde,
 * mas não tem mais nada aqui". Quanto mais passa do limite, menos acompanha.
 */
export function elastico(excesso: number, dimensao: number, constante = 0.55) {
  return (
    (excesso * dimensao * constante) / (dimensao + constante * Math.abs(excesso))
  );
}

/** Média das últimas amostras de ponteiro, em px/s. */
export class Velocimetro {
  private amostras: { v: number; t: number }[] = [];

  registrar(valor: number, t = performance.now()) {
    this.amostras.push({ v: valor, t });
    /* Só a janela recente importa: incluir o começo de um gesto longo faz a
       média mentir sobre a velocidade do instante em que o dedo soltou. */
    const corte = t - 100;
    while (this.amostras.length > 2 && this.amostras[0].t < corte) {
      this.amostras.shift();
    }
  }

  get velocidade() {
    if (this.amostras.length < 2) return 0;
    const primeiro = this.amostras[0];
    const ultimo = this.amostras[this.amostras.length - 1];
    const dt = (ultimo.t - primeiro.t) / 1000;
    if (dt <= 0) return 0;
    return (ultimo.v - primeiro.v) / dt;
  }

  limpar() {
    this.amostras = [];
  }
}
