import express, { Router } from 'express';
import { getAll } from '../controllers/userController';

const router: Router = express.Router();

router.get('/', getAll)

export default router;