const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  return sequelize.define("Supplier", {
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
  })
}