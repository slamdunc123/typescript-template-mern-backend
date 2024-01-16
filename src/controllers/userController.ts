import { Request, Response } from 'express';
import { User } from '../models/User';

export const getUsers = async (req: Request, res: Response) => {
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

export const getUserById = async (req: Request, res: Response) => {
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

export const createUser = async (req: Request, res: Response) => {
	try {
		let user = await User.findOne({
			first_name: req.body.first_name,
		});
		if (user) {
			return res.status(400).json({
				errors: [
					{
						msg: 'User already exists',
					},
				],
			});
		}

		const newUser = new User({
			first_name: req.body.first_name,
		});

		user = await newUser.save();
		res.json({ user: user, msg: 'User created!' });
	} catch (error) {
		if (error instanceof Error) {
			res.send(error.message);
			console.log(error.message);
		} else {
			console.log('Unexpected error', error);
		}
	}
};

export const deleteUserById = async (req: Request, res: Response) => {
	try {
		const user = await User.findById(req.params.id);
		if (!user) {
			return res.status(404).json({
				msg: 'User not found!',
			});
		}

		await user.deleteOne();

		res.json({
			msg: 'User deleted successfully!',
		});
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
		} else {
			console.log('Unexpected error', error);
		}
	}
};

export const updateUserById = async (req: Request, res: Response) => {
	try {
		let user = await User.findById(req.params.id);

		if (!user) {
			return res.status(404).json({
				msg: 'User not found',
			});
		}
		user = await User.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.json({
			msg: 'User updated successfully.',
			user: user,
		});
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
		} else {
			console.log('Unexpected error', error);
		}
	}
};
