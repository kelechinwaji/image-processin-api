import express from 'express';
import processorRoutes from './processor/main';

const routes = express.Router();

routes.use('/', processorRoutes);

export default routes;
