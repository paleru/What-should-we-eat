import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import morgan from 'morgan';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

//router
import recipeRouter from './routes/recipeRouter.js';
import userRouter from './routes/userRouter.js';
import authRouter from './routes/authRouter.js';

//middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import { authMiddleware } from './middleware/authMiddleware.js';

app.use(cookieParser());
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/v1/test', (req, res) => {
  res.json({ msg: 'test' });
});

app.use('/api/v1/recipes', authMiddleware, recipeRouter);
app.use('/api/v1/users', authMiddleware, userRouter);
app.use('/api/v1/auth', authRouter);

app.use('*', (req, res) => {
  res.status(404).json({ msg: 'not found' });
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5001;

try {
  await mongoose.connect(process.env.MONGO_URI);
  app.listen(port, () => {
    console.log(`server up and running on port ${port}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
