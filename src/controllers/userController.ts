import { Request, Response } from 'express';

export const getAll = (req: Request, res: Response) => {
	res.send('Get all users');
};
