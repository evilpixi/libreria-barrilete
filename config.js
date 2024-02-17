const config = {
  server: {
    port: 3000,
  },
  database: {
    dialect: "mysql",
    host: 'localhost',
    user: 'root',
    password: 'faster4me',
    port: 3306,
    databaseName: 'libreriabarrilete',
  },
  apiKey: 'tu_clave_secreta',
}

config.database.connectionString = config.database.dialect + "://" +
  config.database.user + ":" +
  config.database.password + "@" +
  config.database.host + ":" +
  config.database.port + "/" +
  config.database.databaseName

module.exports = config