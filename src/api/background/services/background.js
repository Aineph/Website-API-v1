'use strict';

/**
 * background service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::background.background');
