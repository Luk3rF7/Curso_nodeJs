const service = require('../api/service')

// Criando proprio map
Array.prototype.meuMap = function (cb) {

  // instancio array
  const novoArrayMapeado = [];

  //crio loop para meu arrayMapeado
  for (let indice = 0; indice <= this.length - 1; i++) {

    //instancio variavel para lista:
    const resultado = cb(this[indice], indice)

    //passo para array o valor da lista :
    novoArrayMapeado.push(resultado)
  }
  return novoArrayMapeado;
}


async function main() {
  try {
    const results = await service.obterPessoa(`a`);

    // Array.map 
    // utilizo instancia para iterar com dado da api
    const names = results.results.map(function (pessoa) {
      //cada item iterado vai me retorna novo array
      return pessoa.name

    })
    // utilizando meu proprio map :

    /* 
      const name = results.results.meuMap(function(pessoa,indice){
         return `[${indice}] ${pessoa.name}`
       })
       console.log()
     */
    console.log('Personagem: ', names);
  } catch (error) {
    console.error(`Deu ruim !`, error)
  }
}
main()