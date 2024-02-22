
module.exports = (sequelize) => {
  const db = {}
  // db.sequelize = sequelize
  db.sync = () => {
    sequelize.sync({ force: true })
  }


  const { DataTypes } = require('sequelize')
  const config = require("../../config")

  const Material = require("./material.model")(sequelize)
  const Publisher = require("./publisher.model")(sequelize)
  const Category = require("./category.model")(sequelize)
  const Author = require("./author.model")(sequelize)
  const Supplier = require("./supplier.model")(sequelize)

  const Sale = require("./sale.model")(sequelize)

  // Material foreign keys
  Publisher.hasMany(Material)
  Material.belongsTo(Publisher)

  Category.hasMany(Material)
  Material.belongsTo(Category)

  Author.hasMany(Material)
  Material.belongsTo(Author)

  // Material - Supplier association table
  const MaterialSupplier = sequelize.define("MaterialSupplier", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    }
  })
  Material.belongsToMany(Supplier, { through: MaterialSupplier })
  Supplier.belongsToMany(Material, { through: MaterialSupplier })
  MaterialSupplier.belongsTo(Material)
  MaterialSupplier.belongsTo(Supplier)
  Material.hasMany(MaterialSupplier)
  Supplier.hasMany(MaterialSupplier)


  console.log("\x1b[33m%s\x1b[0m", "\n\t--->>> Pixi started the database <<<---")
  
  return db
}