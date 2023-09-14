import { Router } from 'express';

import productsRouter from './products';
import orderRouter from './order';
import userRouter from './user';
import artistRouter from './artist';
import commentRouter from './comment';
import { favouriteRouter } from './favourites';

const router = Router();

router.use("/products",productsRouter);
router.use("/order",orderRouter);
router.use("/user",userRouter)
router.use("/artist",artistRouter)
router.use("/comment", commentRouter)
router.use("/favourites", favouriteRouter)

export default router;
