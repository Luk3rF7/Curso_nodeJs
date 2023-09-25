/// import and variavel Global
const {
  deepEqual,
  ok
} = require('assert');
// Database and API:
const database = require('./database')

//
const DEFAULT_ITEM_CADASTRAR = {
  nome: 'Flash',
  poder: "Speed",
  id: 1
}
// switch de teste
describe('Suite de manipulação do Herois', () => {
  // Read :
  it('Deve Pesquisar um Heroi usando arquivo', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR;

    //utilizo database guardando numa instancia:
    const [resultado, posicao1] = await database.listar(expected.id);

    ok(resultado, expected)
  })
  // Creaate :
  it('deve Cadastrar um heroi,usando arquivo ', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR
    // 
    ok.(expected, null)
  })

})