import express from 'express';
import LoginController from './Controllers/Login.js';
import contestController from './Controllers/ContestControllers.js';
import inscriptionController from './Controllers/InscriptionController.js';

const routes = express();

routes.use('/Login', LoginController);
routes.use('/Contest', contestController);
routes.use('/Inscription', inscriptionController);

export default routes;