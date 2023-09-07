import { Router } from 'express';

import productsRouter from './products';
import orderRouter from './order';
import userRouter from './user';
import artistRouter from './artist';
import paymentRouter from './payment.mercadopago';

const router = Router();

router.use("/products",productsRouter);
router.use("/order",orderRouter);
router.use("/user",userRouter)
router.use("/artist",artistRouter)
router.use("/create-order", paymentRouter)

export default router;
