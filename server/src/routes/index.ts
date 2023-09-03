import { Router } from 'express';
import userRouter from './user';
import orderRouter from './order';
import favoritesRouter from './favourites';
import productsRouter from './products';
import statusRouter from './status';

const router = Router();

router.use("/user", userRouter);
router.use("/order", orderRouter);
router.use("/favourites", favoritesRouter);
router.use("/products", productsRouter);
router.use("/status", statusRouter);

export default router;
