import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const db = process.env.DB_URI as string;
const conn = async () => {
	try {
		await mongoose.connect(db);
		console.log('mongoDB connected successfully');
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
		} else {
			console.log('Unexpected error', error);
		}
		process.exit(1);
	}
};

export default conn;
