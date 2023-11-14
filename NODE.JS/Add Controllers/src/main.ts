import express, { Express } from 'express';
import * as planetsController from './controllers/planets';

const app: Express = express();
const PORT: number = 3000;

app.use(express.json()); // Use built-in JSON body parser

// Define routes using the controller functions
app.get('/api/planets', planetsController.getAll);
app.get('/api/planets/:id', planetsController.getOneById);
app.post('/api/planets', planetsController.create);
app.put('/api/planets/:id', planetsController.updateById);
app.delete('/api/planets/:id', planetsController.deleteById);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
