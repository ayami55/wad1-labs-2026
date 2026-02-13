'use strict';
import logger from "../utils/logger.js";
/*the extra “.” (…/) at the beginning of the file path
is needed to navigate up one level from the controllers folder
*/

const start = {
  createView(request, response) {
    logger.info("Start page loading!");
    response.send('Welcome to the Playlist app!');   
  },
};

export default start;