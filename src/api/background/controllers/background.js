'use strict';

/**
 *  background controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::background.background');
