const { Sequelize, Model, DataTypes } = require('sequelize')
const config = require("../../config")

const db = new Sequelize(config.database.connectionString)

class Material extends Model { }
Material.init({
  id: {
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
  },
  issn: {
    type: DataTypes.STRING,
    defaultValue: "",
    allowNull: true
  },
  ubication: {
    type: DataTypes.STRING,
    defaultValue: "",
    allowNull: true
  },
  edition: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    allowNull: false
  },
  stock: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false
  },
  nullified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
  used: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
    allowNull: false
  }
}, {
  sequelize: db,
  modelName: "Material"
})

module.exports = Material