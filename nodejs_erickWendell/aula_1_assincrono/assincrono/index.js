// 0 obter um usuario:
//1 obter numero de usuario:
//2 obter o endereço do usuario pelo id:

// metodos para pega dado do BD utilizando callback
function obterUsuario(callback) {
  setTimeout(function () {
    return callback(null, {
      id: 1,
      nome: 'User 1',
      dataNascimento: new Date(),
    })
  }, 1000)
}

function obterTelefone(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      telefone: '11990002',
      ddd: 11
    })
  }, 2000)
}

// modo callback
function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'dos Bobos',
      numero: 0
    })
  }, 2000)
}

function resolverUsuario(error, usuario) {
  console.log('usuario', usuario)
}


//obter Dados na variavel:
obterUsuario(function resolverUsuario(error, usuario) {
  // verficico se tem error
  if (error) {
    console.log("deu ruim em usuario!", error);
    return;
  }

  //obter telefone
  obterTelefone(
    usuario.id,
    function resolverTelefone(error1, telefone) {
      if (error1) {
        console.log("deu ruim em Telefone!", error);
        return;
      }
      obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
        if (error2) {
          console.log('deu erro no endereço', error)
          return;
        }

        console.log(`
        Nome:${usuario.nome},
        Endereço: ${endereco.rua},${endereco.numero}
        telefone: (${telefone.ddd})${telefone.telefone}`)
      })
    })
});

