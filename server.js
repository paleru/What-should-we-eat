import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import morgan from 'morgan';

import recipeRouter from './routes/recipeRouter.js';

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/', (req, res) => {
  console.log(req);
  res.json({ message: 'data received', data: req.body });
});

app.use('/api/v1/recipes', recipeRouter);

app.use('*', (req, res) => {
  res.status(404).json({ msg: 'not found' });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: 'internal server error' });
});

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`server up and running on port ${port}`);
});
