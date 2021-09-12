const express = require('express')
const router = express.Router()
const order = require('../Controller/orderController')
const isAuth = require('../Middleware/passport')

//post order
router.post('/add', isAuth(), order.addOrderItems)
// get order byId
router.get('/getOrderById/:id', order.getOrderById)
// get All orders
router.get('/get', order.getOrders)
router.put('/:id', order.updateOrder)
router.delete('/:id', order.deleteOrder)
module.exports = router