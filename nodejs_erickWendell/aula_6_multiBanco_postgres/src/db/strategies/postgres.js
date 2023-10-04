const ICrud = require('./interface/interfaceCrud');

//Estrategia Postgres :
class Postgres extends ICrud {
  constructor() {
    super()
  }
  isConnected() {

  }
  create(item) {
    console.log('O item foi Salvo em Postgress')
  }
}

module.exports = Postgres