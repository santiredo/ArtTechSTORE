import { Router } from 'express';
import productsRouter from './products';
import orderRouter from './order';
import userRouter from './user';


const router = Router();

router.use("/products",productsRouter);
router.use("/order",orderRouter);
router.use("/user",userRouter);

export default router;
