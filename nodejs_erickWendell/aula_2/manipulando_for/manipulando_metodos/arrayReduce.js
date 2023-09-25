const { obterPessoa } = require('../api/service');

Array.prototype.meuReduce(cb, valorInicial){

  // instancio  para guarda caso valor inicial nao for undefined
  let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0];

  //criamos loop para rodar 
  for (let index = 0; index <= this.length - 1; index++) {
    //passo valor mais incrementador
    valorFinal += cb(valorFinal, this[index], this)
  }
  return valorFinal
}

async function main() {
  try {
    /* 
    todo utilizando proprio Reduce

    const minhaLista = [
      ['Lucas','User_1'],
      ['NodeBr','JAvascript']
    ]

    const total = minhaList.meuReduce((ant,prox)=>{
      return ant.concat(prox)
    },[])
    .join(',')
    */
    // pego dado do BD
    const { results } = await obterPessoa(`a`)
    // instancio novo array com valores do peso em intereiro
    const peso = results.map(item => parseInt(item.height))
    console.log(peso);

    const total = peso.reduce((ant, prox) => {
      return ant + prox;
    })
    console.log('resultado :', total)


  } catch (error) { console.error('Reduce deu ruim', error) }
}

main()