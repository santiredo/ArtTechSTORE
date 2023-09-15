import { getAllArtistsAdminHandler } from "../handlers/Admin/getAllArtist";
import { getProductsAdminHandler } from "../handlers/Admin/getAllProducts";
import { getAllUserAdminHandler } from "../handlers/Admin/getAllUser";
import express from "express";

const adminRouter = express.Router();

adminRouter.get("/artist",getAllArtistsAdminHandler);
adminRouter.get("/product", getProductsAdminHandler);
adminRouter.get("/user",getAllUserAdminHandler);


export default adminRouter;
