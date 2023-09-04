import { deleteProductHandler } from '../handlers/Product/deleteProduct';
import { getProductByIdHandler } from "../handlers/Product/getById";
import { getProductsHandler } from "../handlers/Product/getProducts";
import { createProductHandler } from "../handlers/Product/postProduct";
import { updateProductHandler } from "../handlers/Product/updateProduct";
import express from "express";

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