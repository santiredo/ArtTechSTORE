const { Router } = require("express");

import {
  createOrder,
  deleteOrder,
  getOrders,
  getOrdersByUser,
  updateOrder,
} from "../controllers/orderController";

const router = Router();

router.get("/", getOrders);
router.get("/byUser/:id", getOrdersByUser);
router.post("/create", createOrder);
router.put("/update/:id", updateOrder);
router.delete("/", deleteOrder);

export default router;
