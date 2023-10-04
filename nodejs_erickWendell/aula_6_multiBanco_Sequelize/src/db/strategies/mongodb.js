const ICrud = require('./interface/interfaceCrud');

//estrategia BD MongoDB
class MongoDB extends ICrud {
  constructor() {
    super()
  }

  create(item) {
    console.log('O item foi salvo em MongoDB')
  }
}

module.exports = MongoDB;