import express from 'express';
import { categoriesRoutes } from './routes/categories.routes';

const app = express();

app.use(express.json());

app.listen(3333)

app.use('/categories', categoriesRoutes);

app.get('/', (request, response) => {
  return response.json({ message: 'Server is live!' })
})