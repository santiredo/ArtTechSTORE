import { Router } from 'express';
import { postUserHandler } from '../handlers/user/postUser';

const router = Router();

router.post("/user", postUserHandler)

export default router;
