'use strict';

/**
 * greeting service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::greeting.greeting');
