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
        nome: 'User 1',
        dataNascimento: new Date(),
      })
    }, 1000)
  })

}

function obterTelefone(idUsuario) {

  return new Promise(function resolverPromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        telefone: '990002',
        ddd: 11
      })
    }, 2000)
  })

}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'dos Bobos',
      numero: 0
    })
  }, 2000)
}

// modo promise
function resolverUsuario(error, usuario) {
  console.log('usuario', usuario)
}

//1 obter numero de usuario:
//2 obter o endereço do usuario pelo id:
const usuarioPromise = obterUsuario()
// usuario -> telefone -> telefone pipe
//obter dado de uma promisse:

usuarioPromise
  .then(function (usuario) {
    return obterTelefone(usuario.id)
      .then(function resolverTelefone(result) {
        return {
          usuario: {
            nome: usuario.nome,
            id: usuario.id
          },
          telefone: result
        }
      });
  })
  .then(function (resultado) {
    const endereco = obterEnderecoAsync(resultado.usuario.id);
    return endereco.then(function resolverEndereco(result) {
      return {
        usuario: resultado.usuario,
        telefone: resultado.telefone,
        endereco: result
      }
    });
  })
  .then(function (result) {
    //para manipular o sucesso utilizamos .then()
    console.log(`
    ID:${result.usuario.id}
    Nome:${result.usuario.nome}
    Endereco:${result.endereco.rua}, ${result.endereco.numero}
    Nome:(${result.telefone.ddd}) ${result.telefone.telefone}
    
    `)
  })
  .catch(function (error) {
    //para manipular o error utilizamos .catch(error)
    console.log('Deu error ', error)
  })