'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('features', [
      {
        name: 'General',
        desc: 'it`s general',
      },
      {
        name: 'Specialist',
        desc: 'it`s specialist',
      },
      {
        name: 'Physiotherapy',
        desc: 'it`s Physiotherapy',
      },
      {
        name: 'Hydrotherapy',
        desc: 'it`s Hydrotherapy',
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('features', null, {});
  }
};