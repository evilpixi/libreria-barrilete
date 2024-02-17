const db = {}
const materialsModel = require("./material.model")

db.sync = () => {
  materialsModel.sync()
}

module.exports = db