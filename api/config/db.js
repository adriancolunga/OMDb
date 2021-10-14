const Sequelize = require('sequelize')
const db = new Sequelize('omdb', null, null, {
    local: 'localhost',
    dialect: 'postgres',
    logging: false
})

module.exports = db