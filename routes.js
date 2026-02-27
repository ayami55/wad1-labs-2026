'use strict';
import logger from "./utils/logger.js";

//Import the express package and create an Express router
import express from 'express'; 
const router = express.Router();

//To connect a controller, it must first be imported
import start from './controllers/start.js';
import dashboard from './controllers/dashboard.js';
import about from './controllers/about.js';
import playlist from './controllers/playlist.js';

//Connects the route to the controller
router.get('/', start.createView);
router.get('/dashboard', dashboard.createView);
router.get('/about', about.createView);
router.get('/playlist/:id', playlist.createView);

router.get('/error', (request, response) => response.status(404).end('Page not found.'));

//The router is exported so it can be used elsewhere
export default router;