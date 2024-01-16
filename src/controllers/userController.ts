import { Request, Response } from 'express';
import { User } from '../models/User';

export const getAll = async (req: Request, res: Response) => {
	try {
		const users = await User.find();
		res.json(users);
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
		} else {
			console.log('Unexpected error', error);
		}
	}
};

export const getById = async (req: Request, res: Response) => {
	try {
		const user = await User.find({ _id: req.params.id });
		res.json(user);
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
		} else {
			console.log('Unexpected error', error);
		}
	}
};
