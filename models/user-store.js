'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const userStore = {

  store: new JsonStore('./models/user-store.json', { users: [] }),
  collection: 'users',

  getAllUsers() {
    return this.store.findAll(this.collection);
  },
  
  getUserById(id) {
    return this.store.findOneBy(this.collection, (user => user.id === id));
  },
  
  getUserByEmail(email) {
    return this.store.findOneBy(this.collection, (user => user.email === email));
  },
  
  async addUser(user, file, callback) {
    try {
      if(file){
        const result = await this.store.addToCloudinary(file);

        user.picture = {
          url: result.secure_url,
          public_id: result.public_id
        };
      }

      this.store.addCollection(this.collection, user);
      
      callback();
      } catch (error) {
        callback(error);
      }
  },

};

export default userStore;