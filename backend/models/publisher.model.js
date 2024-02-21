const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  return sequelize.define("Publisher", {
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
  })
}