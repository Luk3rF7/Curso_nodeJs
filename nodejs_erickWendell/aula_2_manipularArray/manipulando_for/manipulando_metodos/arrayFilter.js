const { obterPessoa } = require('../api/service');

/* 
 * Destructor
const item = {
  "nome":"Lucas",
  "idade": 28,
}

const {nome} = item;
console.log(nome) // saida : Lucas
*/
/* 
  todo Meu filter:
  
  Array.prototype.meuFilter = (cb) => {
     / / faço loop for 
     for(item  in this){
      const resultado = cb(item,index,this)
      if(!resultado) continue;
      lista.push(item)
     }
     return lista
  }

*/
async function main() {
  try {

    // use destructor para pega dados dentro da função:
    const { result } = await obterPessoa(`a`)

    //filtrar por familia 
    const familiaLars = results.filter(function (item) {

      //por tanto precisa retorn um booleano
      //para informa se deve informa ou remover da lista
      //false > remove | true > adiciona

      const result = item.nametoLowerCase().indexOf(`Lars`) !== -1

      // não encontrou e  = -1
      //encontrou = posicaoNoArray
      return result;
    })
    // instancia que vai puxar nome da familia lars
    const names = familiaLars.map(function (pessoa) {

      pessoa.name

    })
    /* 
      todo utilizando Meu filter :

      const familiaLars = results.meuFilter((item,index,lista) =>{
          console.log(`index ${index}, lista.length`)
        return item.nome.toLowerCase().indexOf(`Lars`) !== -1)
      }
    */
    console.log(names)
  } catch (error) {
    console.error('Deu error!', error)
  }
}
main();