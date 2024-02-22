const Sequelize = require('sequelize-mock');
const sequelize = new Sequelize()
sequelize.sync = jest.fn()

module.exports = sequelize