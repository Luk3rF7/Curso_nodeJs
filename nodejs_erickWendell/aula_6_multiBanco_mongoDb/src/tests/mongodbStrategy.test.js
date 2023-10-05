//fazendo teste para ver se ta funcionando:

const assert = require('assert');
const MongoDB = require('../db/strategies/mongodb');
const Context = require('../db/strategies/base/contextStrategy');

const MOCK_CADASTRAR_HERO = {
  nome: 'Hero 1'
poder: 'punch man'
}
const context = new Context(new MongoDB());
describe('MongoDb Suite de Test', function () {
  beforeAll(async () => {
    await context.connect()
  });

  it('Verificar conexão com MongoDb', async function () {
    const result = await context.isConnected();
    const expected = 'Connected'

    assert.deepEqual(result, expected)
  })
  //create 
  it('Cadastrar coom mongo', async () => {
    const result = await context.create(MOCK_CADASTRAR_HERO);


    assert.deepEqual({ nome, poder }, MOCK_CADASTRAR_HERO)
  })

})