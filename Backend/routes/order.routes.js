import express from "express"
import { authRoles, isAuthUser } from "../middleware/auth.js"
import { newOrder } from "../controllers/order.controllers.js"
const route=express.Router()

route.post("/order/new",isAuthUser,newOrder)
export default route