'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const corresponding = {

  store: new JsonStore('./models/app-store.json', { info: {} }),
  collection: 'employee',

  getAppInfo() {
    return this.store.findAll(this.collection);
  },

};

export default corresponding;