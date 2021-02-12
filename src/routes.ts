import { Router } from 'express';
import EntidadeController from './app/controllers/EntidadeController';

const routes = Router();

routes.get('/', EntidadeController.index);

export default routes;
