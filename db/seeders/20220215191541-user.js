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
        name: 'Rayane Ait',
        email: 'rayane@mail.com',
        password: bcrypt.hashSync('password123', 8),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
  }
};