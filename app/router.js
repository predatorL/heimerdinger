'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  require('./router/view')(app);

  require('./router/schedule')(app);
  

};
