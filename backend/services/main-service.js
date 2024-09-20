const sequelizeInstance = require("../models/db").sequelizeInstance
const materialService = require("./materials");

const service = {}
service.init = (sequelizeInstance) => {
  materialService.init(sequelizeInstance)

}
module.exports = {

}