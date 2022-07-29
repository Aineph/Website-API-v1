'use strict';

/**
 * gear service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gear.gear');
