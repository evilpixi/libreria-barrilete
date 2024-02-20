const { Sequelize, Model, DataTypes } = require('sequelize')
const config = require("../../config")

const db = new Sequelize(config.database.connectionString)

class Supplier extends Model { }
Supplier.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    defaultValue: "",
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    defaultValue: "",
    allowNull: false
  },
  contact: {
    type: DataTypes.STRING,
    defaultValue: "",
    allowNull: true
  },
  details: {
    type: DataTypes.STRING,
    defaultValue: "",
    allowNull: true
  },
  phone: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false
  },
  nullified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }
}, {
  sequelize: db,
  modelName: "Supplier"
})

module.exports = Supplier