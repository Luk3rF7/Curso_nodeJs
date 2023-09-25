// dependecia : 
const axios = require('axios');

//api star wars
const URL = `https://swapi.dev/api/people`

//função para buscar por nome :

async function obterPessoa(nome) {

  //caminho para url busca pelo nome:

  const url = `${URL}/?search=${nome}&format=json`
  const response = await axios.get(url);

  return response.data
}
// criando modulo para exportar

module.exports = {
  obterPessoa
}

