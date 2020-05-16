const express = require("express");
const Order = require("../models/orders")
const router = express.Router()

router.post("/api/confirmOrder", (req, res) => {
    Order.create(req.body)
        .then(order => res.status(201).json(order))
})

router.get("/api/allOrders", (req, res) => {
    Order.findAll()
        .then(all => res.status(200).send(all))
})

router.delete("/api/delete/:id", (req, res) => {
    const id = req.params.id
    Order.findByPk(id)
        .then(user => user.destroy())
        .then(() => Order.findAll())
        .then(all => res.status(200).send(all))
})



module.exports = router