import { deleteProductHandler } from '../handlers/Product/deleteProduct';
import { getProductByIdHandler } from "../handlers/Product/getById";
import { getProductsHandler } from "../handlers/Product/getProducts";
import { createProductHandler } from "../handlers/Product/postProduct";
import { updateProductHandler } from "../handlers/Product/updateProduct";
import express from "express";

const productsRouter= express.Router();


productsRouter.post("/",createProductHandler);
productsRouter.get("/:id",getProductByIdHandler);
productsRouter.get("/",getProductsHandler);
productsRouter.put("/:id",updateProductHandler);
productsRouter.delete("/:id",deleteProductHandler);

export default productsRouter;

