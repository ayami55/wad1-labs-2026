'use strict';
import logger from "./utils/logger.js";

//import the express package and create an Express router
import express from 'express'; 
const router = express.Router();

//To connect a controller, it must first be imported
import start from './controllers/start.js';
import dashboard from './controllers/dashboard.js';
import about from './controllers/about.js';

//connects the route to the controller
router.get('/', start.createView);
router.get('/dashboard', dashboard.createView);
router.get('/about', about.createView);

router.get('/error', (request, response) => response.status(404).end('Page not found.'));

//the router is exported so it can be used elsewhere
export default router;