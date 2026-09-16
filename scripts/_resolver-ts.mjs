/* Resolve `./vizinho` para `./vizinho.ts` nos scripts de verificação.
 *
 * Os módulos de `lib/` são escritos para o bundler do Next, que resolve
 * especificador sem extensão. O carregador de ESM do Node não resolve — ele
 * exige `./vizinho.ts` escrito à mão. Enquanto `lib/movimento/` só tinha
 * arquivos sem vizinhos, a diferença não aparecia: os scripts importavam um
 * arquivo só, com a extensão na mão, e pronto.
 *
 * `sequencia-cinematica.ts` passou a importar `./camada`, e a diferença virou
 * um erro de resolução no `checar-cinema.mjs`.
 *
 * O conserto fica AQUI, e não no código do app. Trocar o import da `lib` por
 * `./camada.ts` faria o formato do fonte depender de quem o testa — e obrigaria
 * `allowImportingTsExtensions` no tsconfig, mudando a regra do projeto inteiro
 * por causa de um script. Um gancho de resolução resolve no escopo certo: só
 * dentro do processo do teste.
 *
 * Uso: `node --import ./scripts/_resolver-ts.mjs scripts/checar-x.mjs`, como
 * nos npm scripts. Tem de ser `--import`, e NÃO um `import` dentro do script:
 * os imports estáticos de um módulo ESM são todos resolvidos antes de qualquer
 * corpo rodar, então o gancho registrado lá dentro chegaria tarde demais para
 * a própria linha que precisa dele.
 */

import { registerHooks } from "node:module";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

registerHooks({
  resolve(especificador, contexto, seguinte) {
    const relativo = especificador.startsWith("./") || especificador.startsWith("../");
    const temExtensao = /\.[cm]?[jt]sx?$/.test(especificador);
    if (relativo && !temExtensao && contexto.parentURL) {
      const alvo = new URL(especificador + ".ts", contexto.parentURL);
      if (existsSync(fileURLToPath(alvo))) {
        return { url: alvo.href, shortCircuit: true };
      }
    }
    return seguinte(especificador, contexto);
  },
});
