import { Router } from 'express';
import { createUser } from '../controllers/index.controller';
import { getUsers } from '../controllers/index.controller';

const router = Router();


router.get('/users', getUsers);
router.post('/users', createUser);

export default router;