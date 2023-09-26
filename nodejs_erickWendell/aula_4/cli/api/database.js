// importaçaõ:
const {
  readFile, // ler arquivo
  writeFile,   // escrever
} = require('fs');
// converter promise:
const { promisify } = require('util');

const readFilesAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile)

/* 
 * Utilizando JSON 

const dadosJson = require('./heroi.json')
 */
// função exportar
class Database {
  constructor() {
    // adiciono caminho para evitar erros
    this.NOME_ARQUIVO = './api/heroi.json'
  }
  // metodo obter dados:
  async obterDadosArquivo() {

    // vai ler e obter dados do JSON :
    const arquivo = await readFilesAsync(this.NOME_ARQUIVO, 'utf8');
    return JSON.parse(arquivo.toString())
  }
  //metodo escrever Arquivo e salvar
  async escreverArquivo(dados) {

    // vai escrever e salvar o arquivo :
    await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados))
    return true;
  }
  // Read :
  async listar(id) {
    const dados = await this.obterDadosArquivo();
    const dadosFiltrado = dados.filter(item => (id ? (item.id === id) : true))
    return dadosFiltrado
  }

  // Create :
  async cadastrar(heroi) {
    const dados = await this.obterDadosArquivo();
    // simulando id:
    const id = heroi.id <= 2 ? heroi.id : Date.now();

    // 
    const heroiComId = {
      id,
      ...heroi, // operador rest

    }
    const dadosFinal = [
      ...dados,
      heroiComId
    ]
    const resultado = await this.escreverArquivo(dadosFinal)
    return resultado;
  }

  // Remover :
  async remover(id) {
    if (!id) {
      return await this.escreverArquivo([])
    }

    // instancio os dados:
    const dados = await this.obterDadosArquivo();
    //crio intancia para buscar os dados
    const indice = dados.findIndex(
      item => item.id === parseInt(id)
    )

    //caso nao encontro
    if (indice === -1) {
      throw Error('O usuario não existe')
    }
    dados.splice(indice, 1)
    return this.escreverArquivo(dados)
  }

  // atualizar:
  async atualizar(id, modificacao) {
    // obtenha os dados:
    const dados = await this.obterDadosArquivo();

    // fazer comparação
    const indice = dados.
      findIndex(item => item.id === parseInt(id));
    //verificar:
    if (indice === -1) {
      throw Error('O heroi informado não existe ainda!')
    }
    // 
    const atual = dados[indice]
    //atualiza obj 
    const objetoAtualizar = {
      ...atual,
      ...modificacao,
    }
    // removo atual
    dados.splice(indice, 1)

    return await this.escreverArquivo([
      ...dados,
      objetoAtualizar
    ])

    return false
  }
}

module.exports = new Database()