'use strict';

/**
 * gear router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::gear.gear');
