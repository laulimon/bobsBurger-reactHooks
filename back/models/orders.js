const Sequelize = require("sequelize");
const sequelize = require("../db/db")

class Order extends Sequelize.Model { }

Order.init({
    salad: {
        type: Sequelize.INTEGER
    },
    bacon: {
        type: Sequelize.INTEGER
    },
    cheese: {
        type: Sequelize.INTEGER
    },
    meat: {
        type: Sequelize.INTEGER
    },
    total: {
        type: Sequelize.INTEGER
    }

}, { sequelize, modelName: "order" })

module.exports = Order