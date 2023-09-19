import { deleteOrderHandler } from "../handlers/Order/deleteOrder";
import { getOrderHandler } from "../handlers/Order/getOrders";
import { createOrderHandler } from "../handlers/Order/postOrder";
import { updateOrderHandler } from "../handlers/Order/updateOrderStatus";
import express from "express";

const orderRouter = express.Router();

orderRouter.get("/",getOrderHandler);
orderRouter.post("/:id",createOrderHandler);
orderRouter.delete("/:id",deleteOrderHandler);
orderRouter.put("/:id", updateOrderHandler);

export default orderRouter; 