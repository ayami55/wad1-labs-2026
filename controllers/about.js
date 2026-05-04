'use strict';
import logger from "../utils/logger.js";
import empStore from "../models/emp-store.js";
import accounts from './accounts.js';
import userStore from '../models/user-store.js';

const about = {
    createView(request, response) {
        const loggedInUser = accounts.getCurrentUser(request);
        logger.info("About page loading!");
        
        if (loggedInUser) {
          const viewData = {
            title: 'About the Playlist App',
            fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
            employees: empStore.getEmpInfo(),
            picture: userStore.picture
          };
          response.render('about', viewData);
        }
        else response.redirect('/');    
    },

};

export default about;