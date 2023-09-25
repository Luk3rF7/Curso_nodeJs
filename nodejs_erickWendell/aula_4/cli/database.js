// importaçaõ:
const { readFile } = require('fs');
// converter promise:
const { promisify } = require('util');

const readFilesAsync = promisify(readFile);

/* 
 * Utilizando JSON 

const dadosJson = require('./heroi.json')
 */
// função exportar
class Database {
  constructor() {
    this.NOME_ARQUIVO = 'heroi.json'
  }
  // metodo:
  async obterDadosArquivo() {
    // vai ler e obter dados do JSON :
    const arquivo = await readFilesAsync(this.NOME_ARQUIVO, 'utf8');
    return JSON.parse(arquivo.toString())
  }

  async escreverArquivo() {
    // vai escrever e salvar o arquivo
  }

  // Read :
  async listar(id) {
    const dados = await this.obterDadosArquivo();
    const dadosFiltrado = dados.filter(item => (id ? (item.id === id) : true))
    return dadosFiltrado
  }
  // Create :
}

module.exports = new Database()