import { deleteOrderHandler } from "@/handlers/order/deleteOrder";
import { getOrderHandler } from "@/handlers/order/getOrders";
import { createOrderHandler } from "@/handlers/order/postOrder";
import express from "express";

const orderRouter = express.Router();

orderRouter.get("/",getOrderHandler);
orderRouter.post("/",createOrderHandler);
orderRouter.delete("/:id",deleteOrderHandler);

export default orderRouter;