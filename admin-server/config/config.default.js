/* eslint valid-jsdoc: "off" */

'use strict';


/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {

  const {pkg, name, baseDir, HOME, root} = appInfo;
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1578363850242_7424';

  // add your middleware config here
  config.middleware = [];
  
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.sequelize = {
    // 单数据库信息配置
    dialect: 'sqlite',
    host: 'localhost',
    storage: './db/database.sqlite'
  }

  return {
    ...config,
    ...userConfig,
  };
};
