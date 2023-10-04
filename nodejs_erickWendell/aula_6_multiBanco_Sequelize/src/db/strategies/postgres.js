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
  }
  // conexao com bd
  async isConnected() {
    try {
      await this._driver.authenticate()
      return true
    } catch (error) {
      console.error('fail', ForeignKeyConstraintError)
    }
  }
  //definição do modelo
  async defineModel() {
    this.herois = this._driverdriver.define('herois', {
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
    await this._herois.async()
  }

  /* 
  todo CRUD- Postgres 
   */
  // create
  create(item) {
    const { dataValues } = return this._herois.create(item);
    return dataValues;
  }
  //read
  async read(item = {}) {
    const result = this._herois.findAll({ where: item, raw: true })
  }
  // update 
  async update(id, item) {
    const result = await this._herois.update(item, { where: { id: id } })
    return result
  }
  //delete
  async delete(id) {
    const query = id ? { id: id } : {};
    return this._herois.destroy({ where: query });
  }
  // Conexao
  async connect() {
    this._driver = new Sequelize(
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
    await this.defineModel();
  }
}

module.exports = Postgres