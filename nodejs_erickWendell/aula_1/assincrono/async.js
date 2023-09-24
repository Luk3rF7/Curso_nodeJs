//modulo proprio do node p/ manipular promise
const util = require('util');

//instancio e converso para promise sem precisar troca
const obterEnderecoAsync = util.promisify(obterEndereco)

// 0 obter um usuario:
function obterUsuario() {

  //quando de algum problema reject
  //quando não tiver problema resolve

  return new Promise(function resolvePromise(resolve, reject) {

    // code..troca callback por resolve,reject

    setTimeout(function () {

      return resolve({
        id: 1,
        nome: 'User Async',
        dataNascimento: new Date(),
      })
    }, 1000)
  })

}

function obterTelefone(idUsuario) {

  return new Promise(function resolverPromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        telefone: '99876-4321',
        ddd: 11
      })
    }, 2000)
  })

}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'dos Await',
      numero: 10
    })
  }, 2000)
}

//1 obter numero de usuario:
//2 obter o endereço do usuario pelo id:

//modo Async await

async function main() {
  try {
    console.time('medida-promise')

    const usuario = await obterUsuario();
    //diminuindo tempo 

    // utilizando metodo do promisse:
    const result = await Promise.all([
      obterTelefone(usuario.id),
      obterEnderecoAsync(usuario.id)
    ]);
    //ordenando ordem 

    const endereco = result[1]
    const telefone = result[0]

    console.log('Dados Requisitado :');
    console.log(`
    Nome:${usuario.nome} 
    Endereço:${endereco.rua},${endereco.numero}
    Telefone:(${telefone.ddd}) ${telefone.telefone}
    `)

    console.timeEnd('medida-promise')
  } catch (error) {
    console.log("Deu problema aqui oh!", error)
  }
}
main()