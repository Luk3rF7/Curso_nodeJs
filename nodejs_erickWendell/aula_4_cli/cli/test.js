/// import and variavel Global
const {
  deepEqual,
  ok
} = require('assert');
// Database and API:
const database = require('./api/database');
const exp = require('constants');

// objetos teste:
const DEFAULT_ITEM_CADASTRAR = {
  nome: 'Flash',
  poder: "Speed",
  id: 1
}
const DEFAULT_ITEM_ATUALIZAR = {
  nome: 'Super-Man',
  poder: 'Super Força',
  id: 2
}
// switch de teste
describe('Suite de manipulação do Herois', () => {


  /*
  todo  testando obj de test
  
  before(async () => {
    await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
    await database.cadastrar(DEFAULT_ITEM_ATUALIZAR)
  });
 */
  // Read :
  it('Deve Pesquisar um Heroi usando arquivo', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR


    //utilizo database guardando numa instancia:
    const [resultado, posicao1] = await database.listar(expected.id);

    deepEqual(resultado, expected)
  })

  // Create :
  it('deve Cadastrar um heroi,usando arquivo ', async () => {

    const expected = DEFAULT_ITEM_CADASTRAR
    const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRAR)

    const [actual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id)
    // 
    deepEqual(actual, expected);
  })
  //Delete :
  it('Remover Heroi,usando arquivo', async () => {
    const expected = true;
    const resultado = await database.remover(DEFAULT_ITEM_CADASTRAR.id);

    deepEqual(resultado, expected);
  })
  //atualizar :
  it('atualizar um heroi por id', async () => {

    const expected = {
      ...DEFAULT_ITEM_ATUALIZAR,
      nome: 'Batman',
      poder: 'Inteligencia',
    }

    const novoDado = {
      nome: 'Batman',
      poder: 'Inteligencia',
    }
    //
    await database
      .atualizar(DEFAULT_ITEM_ATUALIZAR.id, novoDado);
    //
    const [resultado] = await database.listar(DEFAULT_ITEM_ATUALIZAR.id)
    deepEqual(resultado, expected)

  })
})