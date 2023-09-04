import express from "express";
import { createProductHandler, deleteProductHandler, getProductByIdHandler, getProductsHandler, updateProductHandler } from "../handlers/productHandlers";

const productsRouter= express.Router();

productsRouter.get("/:id",getProductByIdHandler);
productsRouter.get("/",getProductsHandler);
productsRouter.put("/:id",updateProductHandler);
productsRouter.post("/",createProductHandler);
productsRouter.delete("/:id",deleteProductHandler);

export default productsRouter;


// import router from "./index";

// import { updateProductHandler } from "../handlers/productHandlers";

// router.put("/product/:id",updateProductHandler);