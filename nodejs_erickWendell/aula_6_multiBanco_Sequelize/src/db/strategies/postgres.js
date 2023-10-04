const { ForeignKeyConstraintError } = require('sequelize');
const ICrud = require('./interface/interfaceCrud');
const Sequelize - require('sequelize');
const drive = new Sequelize(
  'heroes',
  'lcdeveloper',
  'minhaSenhaSecret',
  {
    host: 'localhost',
    dialect: 'postgres',
    quoteIdentifiers: false,
    operatorsAliases: false,
  }
)
//Estrategia Postgres :
class Postgres extends ICrud {
  constructor() {
    super()
    this._driver = null
    this._herois = null
    this._connect()
  }
  async isConnected() {
    try {
      await this._drive.authenticate()
      return true
    } catch (error) {
      console.error('fail', ForeignKeyConstraintError)
    }
  }

  async defineModel() {
    this.herois = driver.define('herois', {
      id: {
        type: Sequelize.INTEGER,
        required: true,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: Sequelize.STRING,
        required: true,
      },
      poder: {
        type: Sequelize.STRING,
        required: true,
      },
    }, {
      tableName: 'TB_HEROIS',
      freezeTabName: false,
      timestamps: false,
    })
    await Herois.async()
  }

  create(item) {
    console.log('O item foi Salvo em Postgress')
  }

  // metodo privado : onde ser usado somente aqui
  _connect() {
    this._drive = new Sequelize(
      'heroes',
      'lcdeveloper',
      'minhaSenhaSecret',
      {
        host: 'localhost',
        dialect: 'postgres',
        quoteIdentifiers: false,
        operatorsAliases: false,
      }
    )
  }
}

module.exports = Postgres