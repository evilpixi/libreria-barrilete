const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    return sequelize.define("Sale", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false
        },
        nullified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
        totalAmount: {
            type: DataTypes.FLOAT,
            defaultValue: 0,
            allowNull: false
        }
    })
}