const { Router } = require("express");

import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "../controllers/productController";

const router = Router();

router.get("/", getProductById);
router.get("/:id", getProductById);
router.post("/create", createProduct);
router.put("/update", updateProduct);
router.delete("/delete/id", deleteProduct);

export default router;
