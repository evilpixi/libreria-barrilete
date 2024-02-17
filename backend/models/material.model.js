const { Sequelize, Model, DataTypes } = require('sequelize')
const config = require("../../config")

const db = new Sequelize(config.database.connectionString)

class Material extends Model { }
Material.init({
  ntid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    defaultValue: "",
    allowNull: false
  },
  isbn: {
    type: DataTypes.STRING,
    defaultValue: "",
    allowNull: false
  }
}, {
  sequelize: db,
  modelName: "Material"
})

module.exports = Material