import { Router } from "express";
import { getCommentsHandler } from "../handlers/getComment.handler";

const router = Router();

router.get("/comments/:productId", getCommentsHandler);

export default router;
