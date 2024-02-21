const db = {}
const { Sequelize, DataTypes } = require('sequelize')
const config = require("../../config")
const sequelize = new Sequelize(config.database.connectionString)

const Material = require("./material.model")
const Publisher = require("./publisher.model")
const Category = require("./category.model")
const Author = require("./author.model")
const Supplier = require("./supplier.model")

Publisher.hasMany(Material, { foreignKey: "publisher_id" })
Material.belongsTo(Publisher, { foreignKey: "publisher_id" })

Category.hasMany(Material, { foreignKey: "category_id" })
Material.belongsTo(Category, { foreignKey: "category_id" })

Author.hasMany(Material, { foreignKey: "author_id" })
Material.belongsTo(Author, { foreignKey: "author_id" })

Material.sync({ force: true })
Publisher.sync({ force: true })
Category.sync({ force: true })
Author.sync({ force: true })
Supplier.sync({ force: true })

const MaterialSupplier = sequelize.define("MaterialSupplier", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  }
})
MaterialSupplier.sync({ force: true })

db.sync = async () => {
  return
  /*await Material.sync({ force: true })
  await Publisher.sync({ force: true })
  await Category.sync({ force: true })
  await Author.sync({ force: true })
  await Supplier.sync({ force: true })


  //await Material.sync({ force: true })

  const MaterialSupplier = sequelize.define("MaterialSupplier", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    }
  })
  await MaterialSupplier.sync({ force: true })*/

  Material.belongsToMany(Supplier, { through: MaterialSupplier })
  Supplier.belongsToMany(Material, { through: MaterialSupplier })
  MaterialSupplier.belongsTo(Material, { foreignKey: "material_id" })
  MaterialSupplier.belongsTo(Supplier, { foreignKey: "supplier_id" })
  Material.hasMany(MaterialSupplier, { foreignKey: "material_id" })
  Supplier.hasMany(MaterialSupplier, { foreignKey: "supplier_id" })
  await MaterialSupplier.sync({ force: true })
}

module.exports = db