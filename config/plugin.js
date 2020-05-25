'use strict';

const _exports = {};

// sequelize
_exports.sequelize = {
  enable: true,
  package: 'egg-sequelize'
}

_exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks'
}

/** @type Egg.EggPlugin */
module.exports = _exports;
