const assert = require('assert');
const { obterPessoa } = require('./service');

describe('Star War Test', function () {
  it('Deve Buscar o r2d2 com o formato correto', async () => {
    const expected = [{
      nome: 'R2D2',
      peso: '96'
    }]

    const nomeBase = `r2-d2`
    // invoco numa variavel minha funcao com variavel do nome
    const resultado = await obterPessoa(nomeBase)
    //
    assert.deepEqual(resultado, expected)
  })
})