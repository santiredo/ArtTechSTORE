import { Router } from "express";
const router = Router();

import productsRoutes from "./productsRoutes";
import orderRoutes from './ordersRoutes'

router.use("/products", productsRoutes);
router.use("/status", orderRoutes)


export default router;
