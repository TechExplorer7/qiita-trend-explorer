import { Sequelize } from 'sequelize'

// TODO .envから取得するように修正
const databaseName = 'qiita_pick'
const userName = 'test'
const password = 'password'
const host = 'db'
const dialect = 'mysql'

const sequelize = new Sequelize(databaseName, userName, password, {
  host: host,
  dialect: dialect,
})

export default sequelize
