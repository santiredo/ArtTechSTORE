import { Router } from "express";
import { postCommentsHandler } from "../handlers/getComment.handler";

const router = Router();

router.get("/comments/:productId/:userId", postCommentsHandler);

export default router;
