'use strict';

/**
 *  greeting controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::greeting.greeting');
