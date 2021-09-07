const express=require ("express")
const router=express.Router()
const order=require("../Controller/orderController")
const authentification =require ("../Middleware/auth")

//post order
router.post("/postOrder",authentification,order.addOrderItems)
// get order byId
router.get("/getOrderById/:id",order.getOrderById)
// get All orders
router.get("/getOrders",order.getOrders)
module.exports=router 