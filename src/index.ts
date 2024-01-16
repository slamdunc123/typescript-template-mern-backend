import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import conn from './db';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
	res.send('Express + TypeScript Server');
});

// api routes
app.use('/api/users', userRoutes);

app.listen(port, () => {
	console.log(`Express Server is running at http://localhost:${port}`);
});

conn();
