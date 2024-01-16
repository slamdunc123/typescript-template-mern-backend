import express, { Router } from 'express';
import { getAll, getById } from '../controllers/userController';

const router: Router = express.Router();

router.get('/', getAll);
router.get('/:id', getById);

export default router;
