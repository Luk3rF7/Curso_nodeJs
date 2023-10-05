const ICrud = require('./interface/interfaceCrud');
const Mongoose = require('mongoose')

const STATUS = {
  0: 'Disconnect',
  1: 'Connected',
  2: 'Connection',
  3: 'Disconnected'
}


//estrategia BD MongoDB
class MongoDB extends ICrud {

  constructor() {
    super()
    this._driver = null
    this._herois = null
  }
  //
  async isConneceted() {
    const state = STATUS[this._driver.readyState]
    if (state === 'Connected') return state;

    if (state !== 'Connection') return state
    await new Promise(resolve => setTimeout(resolve, 1000))
    return STATUS[this._driver.readyState]
  }
  //
  connect() {
    Mongoose.connect('mongodb://localhost:',
      { useNewParser: true },
      function (error) {
        if (!error) return;
        console.error('Falha na Conexão', error)
      });
    const connection = Mongoose.connection;
    connection.once('open', () => console.log('Executando'))

    this._driver = connection
  }

  defineModel() {
    heroiSchema = new Mongoose.Schema({
      nome: {
        type: String,
        required: true,
      },
      poder: {
        type: String,
        required: true
      },
      insertedAt: {
        type: Date,
        default: new Date()
      }
    })

    this._herois = Mongoose.model('heroi', heroiSchema)
  }

  create(item) {
    return Mongoose.model.create(item)
  }
  read(item, skip = 0, limit = 10) {
    return this._herois.find(item).skip(skip).limit(limit)
  }
  update(id, item) {
    return this._herois.updateOne({ _id: id, { $set: { item } }})
}
delete (id){
  return this._herois.deleteOne(_id: id)
}
}


module.exports = MongoDB;