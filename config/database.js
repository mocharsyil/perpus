const Sequelize = require('sequelize')

const db = new Sequelize('perpustakaan', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

module.exports = db;