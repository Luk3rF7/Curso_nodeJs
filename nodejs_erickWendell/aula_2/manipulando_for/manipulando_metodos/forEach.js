const service = require('../api/service')

async function main() {
  try {
    const results = await service.obterPessoa(`a`);

    //forEach :

    //crio array vazio para manipular
    const names = [];

    // utilizo instancia para iterar com dado da api
    results.results.forEach(function (item) {
      names.push(item.name);
    })

    return console.log('personagem', names)

  } catch (error) {
    console.error(`Deu ruim !`, error)
  }
}
main()