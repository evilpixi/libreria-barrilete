const db = {}
const Material = require("./material.model")
const Publisher = require("./publisher.model")
const Category = require("./category.model")
const Author = require("./author.model")
const Supplier = require("./supplier.model")

db.sync = () => {
  Material.sync({ force: true })
  Publisher.sync({ force: true })
  Category.sync({ force: true })
  Author.sync({ force: true })
  Supplier.sync({ force: true })
}

Publisher.hasMany(Material, { foreignKey: "publisher_id" })
Material.belongsTo(Publisher, { foreignKey: "publisher_id" })

Category.hasMany(Material, { foreignKey: "category_id" })
Material.belongsTo(Category, { foreignKey: "category_id" })

Author.hasMany(Material, { foreignKey: "author_id" })
Material.belongsTo(Author, { foreignKey: "author_id" })

Material.belongsToMany(Supplier, { through: })


module.exports = db