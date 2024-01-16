import express, { Router } from 'express';
import {
	createUser,
	deleteUserById,
	getUsers,
	getUserById,
  updateUserById,
} from '../controllers/userController';

const router: Router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUserById)
router.delete('/:id', deleteUserById);

export default router;
