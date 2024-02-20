const { Sequelize, Model, DataTypes } = require('sequelize')
const config = require("../../config")

const db = new Sequelize(config.database.connectionString)

class Author extends Model { }
Author.init({
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
  nullified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }
}, {
  sequelize: db,
  modelName: "Author"
})

module.exports = Author