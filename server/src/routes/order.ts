import { deleteOrderHandler } from "../handlers/Order/deleteOrder";
import { getOrderHandler } from "../handlers/Order/getOrders";
import { createOrderHandler } from "../handlers/Order/postOrder";
import express from "express";

const orderRouter = express.Router();

orderRouter.get("/",getOrderHandler);
orderRouter.post("/",createOrderHandler);
orderRouter.delete("/:id",deleteOrderHandler);

export default orderRouter; 