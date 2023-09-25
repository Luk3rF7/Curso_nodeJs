const {
  get
} = require('axios')

const URL = 'https://swapi.dev/api/people'

async function obterPessoas(nome) {
  const url = `${URL}/?search=${nome}&format=json`
  const result = await get(url);
  return result.data
}
//export modulo 

export.modules = {
  obterPessoas
}