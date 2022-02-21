'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Agnes Mo',
        email: 'agnes@mail.com',
        password: bcrypt.hashSync('password123', 8),
      },
      {
        name: 'user',
        email: 'user@mail.com',
        password: bcrypt.hashSync('password123', 8),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};