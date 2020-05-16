let Sequelize = require("sequelize");
const db = new Sequelize('postgres://localhost:5432/burger',
    { logging: false })

module.exports = db