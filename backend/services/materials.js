const materialService = {}
let MaterialModel

materialService.init = (sequelizeInstance) =>
{
  materialService.sequelize = sequelizeInstance
  MaterialModel = require("../models/material.model")(sequelize)
}

materialService.createNewMaterial = (material) =>
{
  if (material.stock < 0)
  {
    const error = new Error()
    error.message = "Stock cannot be negative!"
    error.status = 400
    throw error
  }

  MaterialModel.create(material)

  return "Ok"
}

module.exports = materialService;