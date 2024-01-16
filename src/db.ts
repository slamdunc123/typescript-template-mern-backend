import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const db = process.env.DB_URI as string;
const conn = async () => {
	try {
		await mongoose.connect(db);
		console.log('mongoDB connected successfully');
	} catch (err: any) {
		console.error(err.message);
		// exit process with a failure
		process.exit(1);
	}
};

export default conn;
