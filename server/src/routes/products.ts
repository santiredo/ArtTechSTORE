import express from "express";
import { createProductHandler, getProductByIdHandler, getProductsHandler, updateProductHandler } from "@/handlers/productHandlers";

const productsRouter= express.Router();

productsRouter.get("/:id",getProductByIdHandler);
productsRouter.get("/",getProductsHandler);
productsRouter.put("/:id",updateProductHandler);
productsRouter.post("/",createProductHandler);

export default productsRouter;