import { Router } from "express";
import { getComments } from "../controllers/getComment";

const router = Router();

router.get("/comments", getComments);

export default router;
