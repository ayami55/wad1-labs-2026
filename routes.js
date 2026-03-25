'use strict';
import logger from "./utils/logger.js";

//Imports the express package and create an Express router
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
router.post('/dashboard/addplaylist', dashboard.addPlaylist);
router.get('/dashboard/deleteplaylist/:id', dashboard.deletePlaylist);

router.get('/about', about.createView);

router.get('/playlist/:id', playlist.createView);
router.post('/playlist/:id/addsong', playlist.addSong);
router.get('/playlist/:id/deletesong/:songid', playlist.deleteSong);
router.post('/playlist/:id/updatesong/:songid', playlist.updateSong);

router.get('/error', (request, response) => response.status(404).end('Page not found.'));

export default router;